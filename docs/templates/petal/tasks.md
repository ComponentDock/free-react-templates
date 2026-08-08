# Petal (ColorLib Juli) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-petal`.

## Design notes (replication findings)

- **Original:** ColorLib "Juli" — lifestyle blog template, Blog category
  (source: https://colorlib.com/wp/template/juli/). TEMPLATES.md has TWO
  copies of this item (lines 266 and 2400) — mark BOTH `[x]` when done.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/juli/01-homepage.html
  (HTTP 200, full rendered DOM; the bare `/theme/juli/` URL returns 404 —
  `assets/js/products.js` maps juli → `juli/01-homepage.html`). Main
  stylesheet `01-homepage/css/styles.css` (11.9 KB) + `responsive.css`
  (5.2 KB), plus common bootstrap/ionicons/layerslider. Google Fonts
  **Maven Pro** (display/paragraphs) + **Roboto** (body).
  Cross-checked against the TEMPLATES.md screenshot
  (`juli-free-lifestyle-blog-website-template.jpg`, 1200×908, viewed in
  browser) — designs match. The demo brands itself "juli"; recreation uses
  the NEW name **Petal**.
- **Visual design (from DOM + CSS tokens + screenshot):** clean white
  lifestyle blog with an orange accent. Stacked header (~265px): thin italic
  top strip (welcome message + email + social icons + search), centered
  cursive logo row ("Petal" + "PERSONAL BLOG" tagline) bordered by `#ddd`,
  main nav (HOME w/ dropdown, FEATURED, ABOUT, CATEGORIES, CONTACT; hover
  `#eee`). Full-bleed photo hero slider
  (`height: calc(100vh - 265px)`, min 550px) with `rgba(0,0,0,.6)` text
  cards (orange category tag, title, date, Read More). Two-column blog area:
  posts grid (image cards w/ category tag, title, date, excerpt, share row,
  orange-bordered Read More, Load More button) + rich sidebar (about-author
  card w/ overlapping photo, search, dark `#29333C` newsletter, category
  tiles w/ orange name bars, latest posts w/ 80px thumbs, advertisement,
  instagram, tags). Full-width 7-col instagram strip above a dark footer
  (`#29333C`, `#ddd` text) with copyright.
- **Design tokens extracted from `styles.css`:**
  - Brand **orange `#FFAD4D`** (category tags/buttons/read-more links/hover).
  - Dark **`#29333C`** (newsletter block, footer); hero overlay
    `rgba(0,0,0,.6)`.
  - Neutrals: `#fff`, `#F2F3F4`/`#eee`, borders `#ddd`/`#ccc`/`#bbb`,
    muted text `#999`/`#888`/`#666`/`#aaa`.
  - Fonts: **Maven Pro** + **Roboto** (Google Fonts).
  - Buttons: `.btn` `padding: 7px 15px`; primary = 1px `#FFAD4D` border,
    white bg, orange text → hover orange bg + white text + shadow
    (`1px 3px 15px rgba(0,0,0,.15)`); radius 3px (hero card, author image).
  - Rhythm: `.section { padding: 70px 0 40px; }`.
- **Structure (1:1, section order):**
  1. Header: top strip (welcome + email + socials + search) → logo row →
     main nav (HOME dropdown, FEATURED, ABOUT, CATEGORIES, CONTACT).
  2. Hero slider: full-bleed photos, `rgba(0,0,0,.6)` text card (tag, title
     "Travel, Love, Live", date, Read More), arrows + dots.
  3. Blog area: posts grid (≥3 cards: image 1000×600 / 500×400, category
     tag, title, date `#999`, excerpt, Share + comments + socials,
     read-more-btn; one post-style-2 card with left image) + Load More btn.
  4. Sidebar: about-author ("Cristine Smith", shadow card, -30px overlap
     photo, signature, orange read-more link) → search → newsletter
     (`#29333C`, "Subscribe to our newsletter", white email input) →
     categories (TRAVEL/FASHION/LIFESTYLE/DESIGN tiles, orange name bars) →
     latest posts (80px thumbs) → advertisement (DISCOVER btn) → instagram
     (3-col thumbs) → tags (pill links).
  5. Footer instagram strip: border-top `#ccc`, 7 images @ 14.285% width.
  6. Footer: `#29333C` bg, `#ddd` text, DISCOVER section + copyright.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/petal-<n>/<w>/<h>`); lucide-react icons (brand
  socials as inline SVG); Maven Pro + Roboto via Google Fonts; brand orange
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn) — required for
  knip gate (see repo memory: apps MUST import Button/ButtonLink/cn).

## Tasks

- [x] Write `openspec/specs/template-petal/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/petal` (copy the section-rich blog landing pattern —
      Aurora or Volt; rename package to `@free-react-templates/petal`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-petal`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` (BOTH Juli copies, lines 266
      and 2400) + Surge URL + homepage (bookkeeping on main).
