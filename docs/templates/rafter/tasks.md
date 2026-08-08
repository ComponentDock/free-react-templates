# Rafter (ColorLib Woodrox) — Tasks & Design Notes

> Recreation of ColorLib "Woodrox" under the original name **Rafter**
> (architecture & furniture landing). Prep artifacts were written on `main`
> under the source name; the rename to `rafter` ships with the feat PR.

## Design notes (replication findings)

- **Original:** ColorLib "Woodrox" — architecture template
  (source: https://colorlib.com/wp/template/woodrox/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/woodrox/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** architecture/furniture landing
  with a **yellow** brand (`#faba00`), Roboto + Heebo fonts, a "Precise
  concept design for stylish living" hero, a "Most Popular Furnitures"
  section (Green Butter Sofa), an "Alex Complex for esidence" project
  gallery, a "Some Features that Made us Unique" six-card feature row, and
  a "Recent Posts from our blog" blog row.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Pages, Project, Blog, Contact (recreated:
     Home, About, Projects, Blog, Contact).
  2. Hero: "Precise concept design for stylish living" + **Get Started**.
  3. Furniture: "Most Popular Furnitures" + Green Butter Sofa cards.
  4. Projects: "Alex Complex for esidence" gallery.
  5. Features: "Some Features that Made us Unique" + 6 feature cards.
  6. Blog: "Recent Posts from our blog" + 3 post cards.
  7. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#faba00`** (buttons, accents); dark `#222222`.
  - Light backgrounds `#f9f9ff`; body text `#777777`.
  - Fonts: **"Roboto"** (Google Fonts `<link>`) + **"Heebo"** (display).
  - `.main_btn`: yellow bg, white text, `border-radius: 0`, padding
    `0 35px`, line-height 38px, Heebo 13px/500; hover: transparent + yellow
    text.
  - `.blog_btn`: `border: 1px solid #eeeeee`, `background: #f9f9ff`,
    `color: #222222`; hover: `#faba00` bg + white text.
  - `.feature_item`: `background: #f9f9ff`, `border-radius: 10px`, padding
    `40px 60px 40px 40px`.
- **Recreation name:** Rafter (NEW — never reuse the ColorLib source name).
  App folder `apps/rafter`, package `@free-react-templates/rafter`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/rafter-<n>/<w>/<h>`); lucide-react icons; Roboto +
  Heebo via Google Fonts; yellow primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-rafter/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above; renamed from the prep spec under the source name).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/rafter` (copied from Bastion; renamed package to `@free-react-templates/rafter`; sections replaced with Rafter's real section set).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `scripts/verify-app.sh rafter` + `npm run spec:validate`.
- [x] Push `feat/template-rafter`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [x] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
