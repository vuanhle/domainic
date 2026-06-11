# Domainic MVP

Investor-facing static concept demo for Domainic, the domain-skill infrastructure layer for AI agents.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Public website

[https://vuanhle.github.io/domainic/](https://vuanhle.github.io/domainic/)

## GitHub Pages deployment

The project is configured for the `/domainic/` GitHub Pages subpath in `vite.config.ts`. Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies, builds the site, and deploys `dist/` with the official GitHub Pages actions.

In repository **Settings > Pages**, set **Source** to **GitHub Actions**.

For branch-based Pages deployment, run `npm run build:pages`, commit `docs/`, and select **Deploy from a branch**, branch `main`, folder `/docs`.

## Vercel

Import the GitHub repository into Vercel, keep the framework preset as Vite, and deploy.

`Private GitHub repo -> Vercel -> Public website`

## Notes

- This is a static pre-seed concept demo using mock data only.
- There is no backend, real customer data, real API keys, or production certification.
- There is no authentication, billing, customer revenue, or production deployment infrastructure.
- Builder extraction is deterministic and persists its generated-pack state in `localStorage`.
- Evaluation, Runtime, Composer, and Investor Mode use client-side simulated interactions.
- The founder profile note should be replaced with verified links before investor distribution.
