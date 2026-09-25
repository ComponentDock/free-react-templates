# Prismshot — Implementation Todo & Design Notes

## Source

- **ColorLib slug:** elit
- **Preview URL:** https://preview.colorlib.com/theme/elit/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/elit-free-template.jpg
- **Category:** Photography Portfolio (one-page, fixed sidebar)

## Design Notes

### Overall Layout

The template is a one-page photographer portfolio with a FIXED LEFT SIDEBAR
(250px) and a scrollable main content area to the right. On mobile (<992px),
the sidebar collapses to a fixed top bar with a hamburger toggle.

### Section Order (1:1 fidelity)

1. **Sidebar** (fixed left, 250px, black) — logo, nav, social icons
2. **Hero** (100vh, bg image + dark overlay, centered heading + CTA)
3. **Gallery** (3-column photo grid, 6 images, hover overlay)
4. **Biography** (dark bg, portrait + bio + checkmark lists)
5. **Blog** (dark bg, 4 entries + pagination)
6. **Contact** (dark bg, form with name/email/subject/message)
7. **Footer** (centered copyright + Component Dock link)

### Key Visual Characteristics

- **Dark/moody aesthetic** — black body, dark gray section backgrounds
- **Pink accent (#df0e62)** — used on active nav, CTA button, hover states,
  section accent bars, pagination active state
- **Oswald headings** — uppercase, condensed, large (4rem desktop)
- **Quicksand body** — geometric sans-serif, lighter weight
- **Pill buttons** — border-radius 30px, 15px 30px padding, uppercase
- **Form inputs** — no box border, bottom-border only (2px gray), white text
- **Photo hover** — dark overlay (rgba(0,0,0,0.6)) + centered search icon

### Component Structure

```
src/
  App.tsx                    — Composes all sections + sidebar
  components/
    Sidebar.tsx              — Fixed left sidebar (nav, logo, social)
    Hero.tsx                 — Full-viewport hero with bg image + CTA
    Gallery.tsx              — 3-column photo grid with hover overlay
    Biography.tsx            — Dark section with portrait + bio + checklists
    Blog.tsx                 — Dark section with 4 entries + pagination
    Contact.tsx              — Dark section with contact form
    Footer.tsx               — Copyright + Component Dock link
  index.css                  — Tailwind entry + theme tokens
```

### Responsive Breakpoints

| Breakpoint | Sidebar | Gallery Columns | Heading Size |
|-----------|---------|-----------------|--------------|
| >992px | 250px fixed left | 3 (col-lg-4) | 4rem |
| 768-991px | Top bar, 70px height | 2 (col-md-6) | 2.5rem |
| <576px | Top bar, 70px height | 2 (col-6) | 2.5rem |

### Placeholder Images

Use picsum.photos with deterministic seeds:
- Hero background: `https://picsum.photos/seed/prismshot-hero/1920/1080`
- Gallery (6 images): `https://picsum.photos/seed/prismshot-g1/600/400`
  through `prismshot-g6`
- Biography portrait: `https://picsum.photos/seed/prismshot-portrait/400/500`
- Blog thumbnails (4): `https://picsum.photos/seed/prismshot-blog1/500/350`
  through `prismshot-blog4`

### Fonts (Google Fonts link in index.html)

```html
<link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700,900|Oswald:400,700" rel="stylesheet">
```

### Tailwind Theme Tokens (index.css @theme)

```css
@theme {
  --color-brand: #df0e62;
  --color-dark-bg: #1a1a1a;
  --color-dark-body: #000000;
  --font-heading: "Oswald", arial, sans-serif;
  --font-body: "Quicksand", sans-serif;
}
```

## Implementation Tasks

- [ ] Copy starter app scaffold (e.g. from apps/abjure or simplest app)
- [ ] Rename package to @free-react-templates/prismshot
- [ ] Set up index.html with Google Fonts link (Quicksand + Oswald)
- [ ] Configure Tailwind theme tokens in index.css
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Build Sidebar component (fixed left, nav links, social icons, mobile
      hamburger toggle)
- [ ] Build Hero component (full-viewport bg image, dark overlay, heading,
      subtitle, pink pill CTA with smooth scroll)
- [ ] Build Gallery component (3-column grid, 6 images, hover overlay with
      search icon, lightbox-ready structure)
- [ ] Build Biography component (dark bg, accent bar, heading, portrait,
      bio text, two-column checkmark lists)
- [ ] Build Blog component (dark bg, accent bar, heading, 4 entries with
      thumbnail + text, circular pagination)
- [ ] Build Contact component (dark bg, accent bar, heading, form with
      styled inputs, pill submit button)
- [ ] Build Footer component (copyright + Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Verify 100% coverage with npm run test:coverage
- [ ] Run npm run verify:app -- prismshot
- [ ] Update TEMPLATES.md status
