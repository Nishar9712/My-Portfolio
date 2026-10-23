/**
 * Nishar Dayma - Professional Portfolio Scripts
 * Pure Vanilla JavaScript (Beginner-Friendly & Lightweight)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjectFilters();
  initCopyButtons();
  initContactForm();
  initSmoothScroll();
});

/* ===================================================================
   1. NAVBAR BEHAVIOR (Sticky & Mobile Drawer)
   =================================================================== */
function initNavbar() {
  const mainNav = document.getElementById('mainNav');
  const navbarToggler = document.getElementById('navbarToggler');
  const navbarResponsive = document.getElementById('navbarResponsive');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (navbarToggler && navbarResponsive) {
    navbarToggler.addEventListener('click', () => {
      navbarResponsive.classList.toggle('open');
      const expanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      navbarToggler.setAttribute('aria-expanded', !expanded);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarResponsive.classList.remove('open');
        navbarToggler.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (!navbarResponsive.contains(e.target) && !navbarToggler.contains(e.target) && navbarResponsive.classList.contains('open')) {
        navbarResponsive.classList.remove('open');
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active link indicator on scroll
  const sections = document.querySelectorAll('header[id], section[id]');
  if (sections.length && navLinks.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));
  }
}

/* ===================================================================
   2. PROJECT CATEGORY FILTERING
   =================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ===================================================================
   3. COPY TO CLIPBOARD & TOAST NOTIFICATION
   =================================================================== */
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastNoticeMsg');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-trigger');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          fallbackCopy(textToCopy);
        });
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(`Copied to clipboard: ${text}`);
  } catch (err) {
    showToast(`Could not copy, please copy manually.`);
  }
  document.body.removeChild(textarea);
}

/* ===================================================================
   4. CONTACT FORM HANDLING
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const mailtoSubject = encodeURIComponent(subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${name}`);
    const mailtoBody = encodeURIComponent(`Hello Nishar,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`);
    const mailtoUrl = `mailto:daymanishar9712@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    if (feedback) {
      feedback.classList.add('success');
      feedback.innerHTML = `<strong>Thank you, ${name}!</strong> Opening your email client to send your message directly to <strong>daymanishar9712@gmail.com</strong>.`;
      feedback.style.display = 'block';
    }

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);

    form.reset();
  });
}

/* ===================================================================
   5. SMOOTH SCROLL OFFSET FOR FIXED NAVBAR
   =================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
