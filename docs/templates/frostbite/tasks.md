# Frostbite (ColorLib Winter) — Tasks & Design Notes

> Recreation of ColorLib "Winter" under the new name **Frostbite**.

## Design notes (replication findings)

- **Original:** ColorLib "Winter" — e-commerce fashion shop template
  (source: https://colorlib.com/wp/template/winter/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/winter/
  (HTTP 200, full rendered DOM + `css/style.css` (227KB) extracted).
- **Visual design (from DOM + CSS tokens):** the preview is a Bootstrap-based
  **e-commerce fashion shop page** ("Winter Fashion Collection 2019") with a
  **blue `#2f7dfc`** brand, a full-width hero banner with background image on
  `#dde5e8`, a 3-column product category feature grid with hover overlays, a
  "new arrivals" product grid with filter tabs (all/men/women/shoes), 6 product
  cards in mixed widths (image + category + title + stars + price + heart/bag
  icons), a 4-column shipping info row, an Instagram photo gallery (5 images),
  and a dark footer with 4 columns + newsletter + social icons.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home / Shop (dropdown) / Pages (dropdown) / Blog (dropdown) / Contact / search.
  2. Banner/Hero: "Winter Fashion" subtitle + "Fashion Collection 2019" + **shop now** (pill button).
  3. Feature grid: 3 product category images with "shop for male" hover overlays.
  4. New Arrivals: heading + filter tabs (all/men/women/shoes) + 6 product cards.
  5. Shipping Details: 4 columns (Free Shipping, Return Policy, Secure Payment, 24/7 Support).
  6. Instagram Photo gallery: 5 thumbnail photos with Instagram icon overlay.
  7. Footer: 4 columns (Category, Company, Address, Newsletter) + social icons.
- **Design tokens extracted from `style.css`:**
  - Primary brand **blue `#2f7dfc`** (buttons, links, accents).
  - Body font: **"Roboto", sans-serif**; Headings: **"Roboto Condensed", sans-serif**.
  - Body background: `#f4f4f4` (light gray).
  - Banner background: `#dde5e8` with background image.
  - Button 1 (`.btn_1`): bg `#2f7dfc`, color `#fff`, **border-radius 50px** (pill shape), hover inverts.
  - Button 2 (`.btn_2`): bg `#fff`, color `#1e1e1e`, border-radius 4px, hover bg `#2f7dfc` + white.
  - Product cards: hover overlay with semi-transparent background, star rating icons, price.
  - Instagram gallery: flex row, white bg, Instagram icon overlay on hover.
  - Footer: bg `#000` (black), white text, 4-column layout, newsletter form.
  - Filter tabs: category-based filtering (all, men, women, shoes).
- **Recreation name:** Frostbite (NEW — the ColorLib source name "Winter" is
  never reused). App folder `apps/frostbite`, package
  `@free-react-templates/frostbite`, homepage
  `https://frostbite.free.componentdock.com`.
- **Recreation approach:** e-commerce fashion shop page with hero banner,
  feature grid, product catalog with filter tabs, shipping info, Instagram
  gallery, and dark footer. Product images via picsum.photos; Lucide React
  icons; blue primary in `@theme`; repo-standard Navbar + Footer chrome.
  Filter tabs implemented as React state-based category filtering.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-frostbite/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Write `docs/templates/frostbite/tasks.md` (this file).
- [ ] Create `apps/frostbite` (copy the simplest app; rename package to
      `@free-react-templates/frostbite`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh frostbite` (typecheck + lint +
      100% coverage tests + build) + `npm run spec:validate`.
- [ ] Push `feat/template-frostbite`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
