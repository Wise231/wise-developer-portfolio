# Wise Tshikovhela — Developer Portfolio

A responsive React + JavaScript portfolio built with Vite. Includes dark/light themes, project category filters, project detail dialogs, mobile navigation, contact links, SEO metadata, sitemap/robots files and a GitHub Pages workflow.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `wise-developer-portfolio`, and push this project to its `main` branch.
2. In `vite.config.js`, set `base: '/wise-developer-portfolio/'` if the site will live at `https://Wise231.github.io/wise-developer-portfolio/`. For a custom domain or `https://Wise231.github.io/`, keep `base: '/'`.
3. In GitHub, open **Settings → Pages** and set the source to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys the site.

Vite's deployment guidance: https://vite.dev/guide/static-deploy

## Before publishing — important personalisation checklist

- Replace `https://YOUR-DOMAIN.example/` in `index.html`, `public/robots.txt` and `public/sitemap.xml` with the final canonical site URL.
- Update the Open Graph image URL and add a real `public/og-image.png` (recommended 1200 × 630).
- Add your actual project repository URLs and deployed demo URLs after confirming each one. The project detail dialogs currently link to your GitHub profile only; they do not pretend that unconfirmed project repositories exist.
- Review the project descriptions, especially MediCare, and only add features you can demonstrate from the code.
- Verify each Microsoft credential's exact title, status and public verification URL. AZ-305 is an exam code, not itself the name of a certification. Remove any credential that is not currently held.
- Add a CV PDF only when you are ready to publish the version you want recruiters to download.
- Add LinkedIn once you provide the correct public profile URL.
- Replace or remove any project that you do not want to discuss in an interview.

## Contact behaviour

The email address opens a mail client through `mailto:`. The copy button copies the address when browser clipboard permissions allow it. There is no server-side contact form or message database in this static portfolio.

## Project content

Project details live in `src/data.js`; update the data there rather than editing the card markup. Theme styles and responsive breakpoints live in `src/styles.css`.
