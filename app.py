import os
import base64
import streamlit as st
import streamlit.components.v1 as components

# Set Streamlit Page Configuration
st.set_page_config(
    page_title="Nishar Dayma — Portfolio",
    page_icon="🎓",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS to remove default Streamlit margins and embed full-width
st.markdown("""
<style>
    /* Hide Streamlit Header, Footer, and Menu */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    [data-testid="stToolbar"] {visibility: hidden;}
    [data-testid="stDecoration"] {visibility: hidden;}
    
    /* Remove padding around main container */
    .block-container {
        padding-top: 0rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0rem !important;
        padding-right: 0rem !important;
        max-width: 100% !important;
    }
    
    /* Force custom component iframe to be full-width */
    div[data-testid="stCustomComponentV1"] {
        width: 100% !important;
    }
    div[data-testid="stCustomComponentV1"] > iframe {
        width: 100% !important;
        border: none !important;
    }
</style>
""", unsafe_allow_html=True)

def to_base64(file_path):
    """Convert local asset to base64 data URI for self-contained embedding."""
    if not os.path.exists(file_path):
        return file_path
    
    ext = file_path.split('.')[-1].lower()
    mime = "image/svg+xml" if ext == "svg" else f"image/{ext}"
    
    with open(file_path, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    return f"data:{mime};base64,{data}"

def build_standalone_portfolio():
    """Read index.html and bundle CSS, JS, and images into a self-contained document."""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Read index.html
    index_path = os.path.join(base_dir, "index.html")
    with open(index_path, "r", encoding="utf-8") as f:
        html = f.read()
        
    # Inline CSS
    css_path = os.path.join(base_dir, "css", "style.css")
    if os.path.exists(css_path):
        with open(css_path, "r", encoding="utf-8") as f:
            css_content = f.read()
        html = html.replace('<link rel="stylesheet" href="css/style.css">', f'<style>\n{css_content}\n</style>')
        
    # Inline JS
    js_path = os.path.join(base_dir, "js", "script.js")
    if os.path.exists(js_path):
        with open(js_path, "r", encoding="utf-8") as f:
            js_content = f.read()
        html = html.replace('<script src="js/script.js"></script>', f'<script>\n{js_content}\n</script>')
        
    # Convert and replace local images with base64 data URIs
    images = {
        "assets/images/avatar.png": os.path.join(base_dir, "assets", "images", "avatar.png"),
        "assets/images/avatar.jpg": os.path.join(base_dir, "assets", "images", "avatar.jpg"),
        "assets/images/project_car.png": os.path.join(base_dir, "assets", "images", "project_car.png"),
        "assets/images/project_car.jpg": os.path.join(base_dir, "assets", "images", "project_car.jpg"),
        "assets/images/project_funding.png": os.path.join(base_dir, "assets", "images", "project_funding.png"),
        "assets/images/project_funding.jpg": os.path.join(base_dir, "assets", "images", "project_funding.jpg"),
        "assets/images/project_calendar.svg": os.path.join(base_dir, "assets", "images", "project_calendar.svg"),
    }
    
    for rel_path, abs_path in images.items():
        if rel_path in html and os.path.exists(abs_path):
            b64_val = to_base64(abs_path)
            html = html.replace(rel_path, b64_val)

    # Encode resume.html as standalone base64 download
    resume_path = os.path.join(base_dir, "resume.html")
    if os.path.exists(resume_path):
        with open(resume_path, "rb") as rf:
            resume_b64 = base64.b64encode(rf.read()).decode("utf-8")
        resume_data_uri = f"data:text/html;charset=utf-8;base64,{resume_b64}"
        html = html.replace('href="resume.html"', f'href="{resume_data_uri}"')
            
    return html

# Build and render the portfolio
portfolio_html = build_standalone_portfolio()
components.html(portfolio_html, height=4100, scrolling=True)
