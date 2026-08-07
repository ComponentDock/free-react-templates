# Inkwell (ColorLib Axole) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-inkwell` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Axole" — minimalist editorial personal blog:
  fixed white navbar, typographic hero (giant mixed-style wordmark), 7-row
  alternating image/text blog feed with huge underlined headlines, numbered
  pagination, gold newsletter band, light-gray 4-column footer + dark
  copyright bar (source: https://colorlib.com/wp/template/axole/). Listed in
  TEMPLATES.md under Blog (line 243) — one recreation covers that single
  checklist row.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/axole/`
  (HTTP 200, ~24KB HTML). DOM + `css/style.css` (63KB) + `css/flaticon.css`
  extracted and analyzed. Screenshot `axole-website-template.jpg` viewed in
  browser: confirms pale gray-white minimalist editorial look, "A PERSONAL
  BLOG" label, massive "Axole." wordmark (bold serif "A"/"e." + thin
  outlined "xol"), light-gray thin tagline, alternating blog rows with gold
  uppercase meta, large underlined headline, and a pop-art style first image.
  Newsletter + footer below the fold in the screenshot; both fully specified
  from the DOM/CSS.
- **Brand color is gold `#f4bf2c`, NOT Bootstrap blue** — the stylesheet
  overrides `.bg-primary { background: #f4bf2c !important; }`. The
  newsletter band is gold. `#111111` is the ink color (buttons, headings,
  copyright bar). `#444444` for giant titles; `#919191` for the tagline.
- **Signature effect:** the hero wordmark's middle letters ("xol" in the
  original) are OUTLINED: `-webkit-text-fill-color: transparent` +
  `-webkit-text-stroke: 1px black`. Reproduce with a `<span>` and Tailwind
  arbitrary properties (`[-webkit-text-stroke:1px_#000]` +
  `[-webkit-text-fill-color:transparent]` or a small utility class). The
  original also offsets the subheading with `margin-left: -70px` so its
  underline bar aligns under the wordmark.
- **Learn More button:** the stylesheet contains multiple `.btn-custom`
  rules (shared ColorLib CSS); the LAST in cascade wins: uppercase 13px,
  weight 500, `letter-spacing: 2px`, `color: #444444` — a text-link style on
  the light feed, not a filled button.
- **Parallax:** hero text (`rellaxHero`) and blog images (`rellax`) use the
  Rellax library in the original. Optional for the recreation — a subtle
  scroll-linked translateY or nothing; the layout must not depend on it.
- **Section structure (1:1):** navbar → hero (750px, right-aligned text:
  label + giant wordmark + tagline) → blog feed (`bg-light`, no top padding,
  7 alternating rows) → pagination (block-27: 40px items, active = dark)
  → newsletter band (gold, `py-5`, centered heading + email + dark Subscribe
  button, form half has `border-left`) → footer (`#eeeeee`, `padding: 5em 0
0`; brand+social / Explore / Recent Posts / Have a Questions?) → copyright
  bar (`#111111`, `py-5`, centered 14px).
- **Icons:** original uses Font Awesome + Ionicons. Recreation: lucide-react
  for UI icons (user, calendar, message-circle, map-pin, phone, mail, arrow-
  right, chevrons for pagination); inline SVG for the three social brands
  (lucide-react removed brand icons — see replication skill pitfall).
- **Placeholders:** `https://picsum.photos/seed/inkwell-<n>/<w>/<h>` — hero
  has no image in the original (typographic hero), blog rows need 7 images
  (e.g. 900×600), footer needs 3 thumbs (50×50 → use 100×100 for retina).

## Implementation tasks (for the implementer stream)

1. **Scaffold:** copy simplest existing app (e.g. `apps/onepage`), rename to
   `@free-react-templates/inkwell`; run `npm install` at root so
   `package-lock.json` registers the workspace; keep `injectUiSource()` in
   `vite.config.ts` (see `docs/conventions.md`).
2. **Theme tokens** (`src/index.css` `@theme`): `--color-brand: #f4bf2c`,
   `--color-ink: #111111`, `--color-title: #444444`, `--color-muted:
#919191`, `--color-surface: #f8f9fa`, `--color-footer: #eeeeee`,
   `--color-chip: #c4c4c4`; Poppins 200–800 Google Fonts `<link>` in
   `index.html`.
3. **Navbar** (`components/Navbar.tsx`): fixed white bar, wordmark left
   (with outlined span), Blog/About/Contact right, active state, mobile
   toggle with `aria-expanded`.
4. **Hero** (`components/Hero.tsx`): 750px (min-h), right-aligned text;
   subheading label + 45px underline bar; wordmark h1 (14vw, 800, `#444`,
   outlined span); tagline (weight 200, `#919191`). Optional subtle
   scroll parallax.
5. **BlogFeed** (`components/BlogFeed.tsx`): 7 entries, alternating
   `md:order-last`, 280px images, meta line (gold icons), 90px underlined
   title (hover gold underline), excerpt, Learn More link. Data array with
   picsum seeds `inkwell-1..7`.
6. **Pagination** (`components/Pagination.tsx`): prev/‹, 5 pages (page 1
   active, dark bg), next/›; 40px rounded items.
7. **Newsletter** (`components/Newsletter.tsx`): gold band, centered heading
   - blurb, email input + dark Subscribe button; zod validation, success
     state, a11y labels.
8. **Footer** (`components/Footer.tsx`): 4 columns — brand + 3 social chips
   (inline SVG, hover dark), Explore links, Recent Posts (3 thumbs), contact
   block; copyright bar dark.
9. **App composition** (`App.tsx`): Navbar → Hero → BlogFeed → Pagination →
   Newsletter → Footer; dark-mode `.dark` variants per conventions.
10. **Tests:** one `describe` per component, scenario-style `it` blocks
    mirroring the spec; 100% coverage required.
11. **Verify:** `npm run verify:app inkwell` (typecheck + lint + vitest
    100% + build) → PR `feat/template-inkwell` → merge immediately →
    `[x]` + surge URL + `npm run readme:status` on main.

## Fidelity pitfalls

- Do NOT reuse the source name "Axole" anywhere as the app/package name.
- Do NOT copy original images/fonts/CSS — picsum + Google Fonts only.
- The giant h2 (90px) is desktop-only in practice; scale down on mobile
  (original relies on 14vw/25vw for the hero h1; blog h2 needs a responsive
  clamp or media query to avoid overflow).
- `bg-primary` in the original is gold via override — wire the brand color
  directly in the recreation, don't carry Bootstrap's blue.
- Social brand icons: verify lucide-react exports; use inline SVG paths if
  missing (they are — brand icons were removed).
