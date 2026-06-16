# Xiangyin Kong — Academic Homepage

Personal academic website: **Research & Teaching**.

## Structure

```
/
├── index.html        # Bilingual (English / 中文)
├── css/style.css     # Stylesheet
├── js/main.js        # Language toggle & mobile menu
├── assets/photo.jpg  # Profile photo
├── papers/           # Publication PDFs
└── .nojekyll
```

## Deploy

Push to a repository named `keelkong.github.io`:

```bash
git remote add origin https://github.com/KeelKong/keelkong.github.io.git
git push -u origin main
```

Site will be live at **https://keelkong.github.io**.

## Local Preview

```bash
python3 -m http.server 8000
```
