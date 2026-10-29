# Elnurbek Ziyotov — Engineering Portfolio

A React + TypeScript + Vite portfolio with an editorial engineering-workbench visual identity. The page includes responsive navigation, a conceptual architecture illustration, searchable/filterable skills, project case studies, a learning progression, and configurable contact links.

## Requirements
- Node.js 20+ recommended
- npm

## Run on Windows PowerShell

```powershell
cd elnurbek-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```powershell
npm run build
npm run preview
```

The production output is written to `dist/`.

## Personalize before publishing

Edit `src/content.ts`:
- Add verified `email`, `github`, and `linkedin` values in `profile`.
- Review the skill familiarity labels.
- Confirm project status, implementation details, and architecture against the actual repositories.
- Add repository/live-demo URLs only after verifying them.

Update `public/sitemap.xml` with the real canonical domain before deployment. Add canonical metadata and a full Open Graph image once the domain and share image are confirmed. The current `example.com` sitemap is a placeholder and must not be deployed unchanged.

## Notes
- The architecture illustration is explicitly conceptual, not a single real deployment diagram.
- No contact form is shown because no message-delivery backend/service has been configured.
- No employment history, metrics, certification claims, or unverified external URLs are fabricated.
- Google Fonts are loaded externally; if you need fully self-hosted fonts, bundle the font files and update `src/styles.css`.
- This repository is a fresh scaffold created from the supplied portfolio specification. No existing application repository was attached for inspection.
