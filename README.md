# Grid-Tie Solar Website (starter)

A React + Vite + Tailwind starter for a grid-tied solar EPC company,
adapted from the Troika Energy template with a green color theme.

## What's placeholder vs ready

- **Company name / logo text**: "GridLeaf Solar" is a placeholder — replace
  it in `src/components/Navbar.jsx`, `src/components/Footer.jsx`,
  `index.html`, and `src/pages/Home.jsx`.
- **About page** (`src/pages/About.jsx`): fully placeholder content blocks.
- **Services page** (`src/pages/Services.jsx`): new page, fully placeholder.
- **Projects page** (`src/pages/Projects.jsx` + `src/data/projects.js`):
  sample/placeholder project entries, real layout and filtering logic.
- **Team page** (`src/pages/Team.jsx`): placeholder member cards.
- **Contact page** (`src/pages/Contact.jsx`): working demo form (no
  backend), placeholder office/email/phone details.
- **Home page** (`src/pages/Home.jsx`): full marketing copy and layout,
  using generic/example stats — edit freely.

## Theme

Colors live in `src/index.css` under `@theme`. Swap the hex values there
to retint the whole site (variable names like `--color-gold` map to the
green accent, kept for compatibility with shared components).

## Getting started

```bash
npm install
npm run dev
```
