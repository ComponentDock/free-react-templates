# Gallery (ColorLib Portfolio Wordpress Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-gallery/` is the claim marker — implementers
> start here.

## Design notes (replication findings)

- **Original:** ColorLib "Portfolio Wordpress Themes" — a portfolio-themes
  ROUNDUP/listicle page, not a single free template
  (source: https://colorlib.com/wp/template/portfolio-wordpress-themes/; the
  article is "25 Best WordPress Portfolio Themes 2026 (Free + Premium)"; all
  demo links are third-party ThemeForest affiliate links). Listed THREE times
  in TEMPLATES.md — line 478, line 1486 and line 2551, all `- [ ]`, same slug
  → implement ONE app, mark ALL THREE rows `[x]` at bookkeeping.
- **Preview UNREACHABLE:** https://preview.colorlib.com/theme/portfolio-wordpress-themes/
  → HTTP 404, absent from preview.colorlib.com/assets/js/products.js.
  Screenshot `portfolio-website-templates-1.jpg` (1200×891, AVIF) converted
  and viewed in the browser; tokens pixel-sampled from the PNG (PIL).
- **Visual design:** minimal white portfolio page — white navbar (bold sans
  logo LEFT, hamburger RIGHT), centered hero "Simple and clean portfolio to
  showcase your **work**" (accent word VIVID BLUE), light-gray sub-line, pill
  filter row (All = blue/white active; Art, Graphic design, Hand pens,
  Offices, Packaging, Shopping = white/light-border inactive), tight
  3-column MASONRY photography grid, floating right-edge icon rail. Page is
  white + near-black text + one vivid blue accent; Open Sans-like sans;
  photography-driven; footer not in the capture → repo standard.
- **Palette (screenshot-sampled, no stylesheet):** primary blue `#2846f8`
  (accent word + active pill; avg RGB (40,70,248), pill anti-aliasing
  `#2a53ff`); page/navbar/inactive pills `#ffffff`; headline `#333333`
  (sampled `#303038`); sub-text `#888888` (sampled `#787878`–`#b0b0b0`);
  pill border `#e0e0e0`; footer `#1f1f1f` (repo standard).
- **Fonts:** Open Sans-like — load **Open Sans** via Google Fonts `<link>`
  (Poppins/Inter as a documented equivalent); logo weight 700–800.
- **Buttons/pills:** border-radius **50px**, padding ~8px 20px, ~13–14px
  text; active = blue bg + white text; inactive = white bg + 1px `#e0e0e0`
  border + gray text.
- **Grid:** masonry 3 columns, gap ~4px (images nearly touch), varied aspect
  ratios.

## Section order (1:1 as visible; remainder reconstructed)

1. **Navbar** — pure-white bar: bold logo "Gallery" LEFT, hamburger trigger
   RIGHT (visible at ALL widths — the reference demo shows the hamburger at
   desktop width). Hamburger opens an overlay/slide-in menu with links Home /
   Portfolio / About / Contact + repo-standard dark-mode toggle. (No desktop
   link row in the reference — do NOT add one.)
2. **Hero** — centered: h1 "Simple and clean portfolio to showcase your
   work" (dark `#333333`; last word "work" in `#2846f8`), light-gray sub-line
   (lorem), then the pill filter row: "All" (blue bg, white text, active by
   default) + 6 category pills (white bg, `#e0e0e0` border, gray text).
   NO CTA button (matches reference).
3. **Portfolio grid** — masonry 3-column photo grid, 12 items (2 per
   category: Art, Graphic design, Hand pens, Offices, Packaging, Shopping),
   tight gap. Active pill filters client-side (reference does AJAX; we do
   state filtering). Hover/focus overlay with item title + category.
4. **Utility rail** — fixed right-edge vertical icon stack (Home,
   Portfolio, Help, Globe, Mail — lucide: Home, LayoutGrid, HelpCircle,
   Globe, Mail), aria-labels, stays fixed on scroll. (Reference rail is the
   Jevelin demo switcher — recreate as a site utility rail.)
5. **Footer** — reconstructed per repo standard: site name, nav links,
   socials, copyright bar, dark `#1f1f1f`.

## Implementation tasks (TDD, in order)

- [ ] Scaffold `apps/gallery` (copy simplest existing app; package
      `@free-react-templates/gallery`; vite.config.ts with `injectUiSource()`;
      npm install at root so package-lock.json registers the workspace)
- [ ] Spec-driven tests first: `Navbar.test.tsx`, `Hero.test.tsx`,
      `FilterPills.test.tsx`, `PortfolioGrid.test.tsx`, `UtilityRail.test.tsx`,
      `Footer.test.tsx`, `App.test.tsx` (100% coverage; RTL user-event for
      menu toggle / pill filtering / hover overlay)
- [ ] `@theme` tokens in `src/index.css`: `--color-primary: #2846f8`,
      `--color-ink: #333333`, `--color-muted: #888888`, `--color-line:
    #e0e0e0`, `--color-footer: #1f1f1f`; Open Sans Google Fonts `<link>`
      in index.html
- [ ] Navbar: "Gallery" logo left, hamburger right (all widths), overlay
      menu (aria-expanded, focus rings), dark-mode toggle
- [ ] Hero: centered headline with `#2846f8` accent word, sub-line, NO CTA
- [ ] FilterPills: "All" active by default; click to activate + filter grid
      (aria-pressed on each pill)
- [ ] PortfolioGrid: masonry 3-col (CSS columns + break-inside-avoid, or
      grid with varied row spans), 12 seeded picsum items (varied heights —
      squares would kill the masonry look), hover/focus overlay with title +
      category, empty-safe filtering
- [ ] UtilityRail: fixed right rail, 5 icon links with aria-labels
- [ ] Footer: site name, nav links, socials (inline SVG), copyright bar
- [ ] Gate: `bash scripts/verify-app.sh gallery` from repo root (typecheck +
      lint + 100% coverage + build)
- [ ] Bookkeeping: mark ALL THREE Portfolio Wordpress Themes rows (lines
      478, 1486, 2551) `[x]` with the gallery surge URL; `npm run
    readme:status`; PR + immediate squash merge to main

## Pitfalls / notes

- Portfolio Wordpress Themes is listed THREE times in TEMPLATES.md (478,
  1486, 2551) — ONE app, mark all three rows `[x]`.
- Preview is 404 — the screenshot is the ONLY reference, and it depicts the
  featured "Jevelin" portfolio demo (a third-party theme). Recreate the
  visual DESIGN (white minimal portfolio page, blue accent, pills, masonry)
  under the name "Gallery"; do NOT reproduce the Jevelin name, logo or
  assets.
- The browser-window frame + traffic dots + the stray cursor after "work"
  in the screenshot are CAPTURE ARTIFACTS — do not recreate them.
- The reference shows the hamburger even at 1200px width — nav links live in
  the overlay menu only; do not add a desktop link row.
- "All" pill is the active default; each category must have ≥1 item so no
  category yields an empty grid (tests should still cover the filter logic).
- Masonry: use varied picsum heights (e.g. 600×800 / 600×450 / 600×700) so
  the grid reads masonry; equal squares break the look.
- `#2846f8` is vivid — sample the screenshot again if it looks off; the
  anti-aliased pill sample was `#2a53ff` (treat `#2846f8` as the token).
- Brand/social icons are NOT in lucide-react — inline SVG (simple-icons
  paths) in the footer.
- `getByText` anchors: category names ("Art", "Offices", ...) appear in BOTH
  the pill row and item overlays/titles — scope queries (within the pill
  group / grid) or use exact matching.
