# Nishar Dayma — Personal Portfolio Website

A modern, professional, and responsive personal portfolio website inspired by clean engineering portfolios like [narayan123411.github.io](https://narayan123411.github.io/). Built with pure **HTML5, CSS3, and JavaScript** without heavy frameworks.

Tailored for a **fresher profile**, highlighting:
- **Education**: Bachelor of Engineering (B.E.) in Computer Engineering at L. D. College of Engineering (GTU) — CGPA 8.35/10 (Expected 2028).
- **Technical Skills**: Programming & Data, Data Visualization, Machine Learning, and Developer Tools.
- **Academic & Applied Projects**:
  1. *Car Price Prediction – Machine Learning Web App* (Python, Pandas, Scikit-learn, Streamlit)
  2. *Indian Startup Funding Analysis – Interactive Dashboard* (Python, Pandas, Matplotlib, Seaborn, Streamlit)
  3. *Discipline Calendar – Web Productivity App* (HTML5, CSS3, JavaScript)
- **Certifications & Achievements**: Green Skills and AI Foundation Course, Smart India Hackathon (SIH) Participant.
- **Career Goal**: Seeking Data Analyst / Data Science internships.
- **CV Download**: Dedicated printable/downloadable CV (`resume.html`).

---

## 📂 Project Structure

```text
Portfolio/
├── index.html                   # Main portfolio webpage
├── resume.html                  # ATS-friendly printable resume
├── README.md                    # Setup & GitHub Pages deployment guide
├── css/
│   └── style.css                # Pure responsive CSS3 design system
├── js/
│   └── script.js                # Vanilla JavaScript for navigation & filters
└── assets/
    └── images/
        ├── avatar.jpg           # Profile photo (Hero section)
        ├── project_car.jpg      # Car Price Prediction preview
        ├── project_funding.jpg  # Indian Startup Funding preview
        └── project_calendar.svg # Discipline Calendar preview
```

---

## 💻 How to Run Locally

### Option 1: Direct Double Click (Fastest)
1. Open the folder `Portfolio` on your computer.
2. Double-click **`index.html`**. It will instantly open in your default browser!

### Option 2: Using VS Code Live Server
1. Open the `Portfolio` folder in **Visual Studio Code**.
2. Right-click on **`index.html`** and select **"Open with Live Server"**.

### Option 3: Using Python HTTP Server
Open your terminal (PowerShell / Command Prompt) inside this folder and run:
```bash
python -m http.server 8000
```
Then visit **`http://localhost:8000`** in your browser.

---

## 🚀 How to Deploy for Free using GitHub Pages (Step-by-Step)

You can host this website on the internet for free using GitHub Pages in under 3 minutes:

### Step 1: Create a GitHub Repository
1. Log in to your account at [GitHub.com](https://github.com/).
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `portfolio` or `<your-username>.github.io`).
4. Set the repository to **Public** and click **Create repository**.

### Step 2: Upload Project Files
* **Via Web Interface**:
  1. Click **"uploading an existing file"** on your new repository page.
  2. Drag and drop all files and folders (`index.html`, `resume.html`, `css/`, `js/`, `assets/`, `README.md`) into the box.
  3. Click **Commit changes**.
* **Via Git Command Line**:
  ```bash
  git init
  git add .
  git commit -m "Initial portfolio commit"
  git branch -M main
  git remote add origin https://github.com/Nishar9712/My-Portfolio.git
  git push -u origin main
  ```

### Step 3: Enable GitHub Pages
1. In your GitHub repository, click on **Settings** (gear icon near top-right).
2. On the left sidebar under *Code and automation*, click **Pages**.
3. Under **Build and deployment** → **Source**, ensure **"Deploy from a branch"** is selected.
4. Under **Branch**:
   - Select **`main`** branch.
   - Select **`/(root)`** folder.
5. Click **Save**.

🎉 **Your website is live!** In about 1 to 2 minutes, GitHub Pages will provide your live URL:
`https://nishar9712.github.io/My-Portfolio/`

---

## ✏️ How to Personalize Your Social Links & Real Images

1. **Add Your Real GitHub & LinkedIn Links**:
   * Open `index.html` and search for `https://github.com/` and `https://linkedin.com/`. Replace them with your actual profile URLs.
2. **Use Your Real Headshot**:
   * Drop your real photo into `assets/images/avatar.jpg` (any standard square or portrait photo).
3. **Use Real Project Screenshots**:
   * Take screenshots of your running Streamlit apps and replace `assets/images/project_car.jpg` and `assets/images/project_funding.jpg`.
