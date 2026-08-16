# Finale (ColorLib Bootstrap Footer 06) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-finale`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 06" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-06/). The page body is a
  70vh light-gray filler strip; the deliverable is the footer. TEMPLATES.md
  has ONE copy (line 782, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 06 → **Finale** (the concluding section
  of a piece of music or performance — continues the series' ending-themed
  names Colophon → Envoi → Epilogue → Coda → Outro; no collision with
  `apps/`, `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-06/` returns **HTTP
  404**. The live preview is served under the `/theme/bft/` prefix:
  **`https://preview.colorlib.com/theme/bft/bootstrap-footer-06/`**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-06/` (HTTP 200,
  18,922 bytes, `<title>Footer 06</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font — FontAwesome codepoints: twitter
  `\f099`, facebook `\f09a`, apple `\f179`, play `\f04b`), `css/bootstrap.min.css`
  (Bootstrap **v4.5.3**), `css/style.css` (1,504 bytes — a **DEDICATED**
  sheet containing ONLY `.footer-95942` rules; unlike footer-05's shared
  9KB multi-footer sheet, there is nothing else to ignore here — verified no
  other `footer-\d+` class in HTML or sheet). No JS behavior (jquery/popper/
  bootstrap.min.js load but the footer is static — none needed in the
  recreation). No Google Fonts link — the footer declares
  `"Poppins", sans-serif` (system fallback in the preview); add the Google
  Fonts Poppins `<link>` in the recreation's index.html.
- **Screenshot:** `bootstrap-footer-06.jpg` (viewed in browser, 1200×972) —
  light-gray demo area with "Footer #6" centered; WHITE (transparent) footer;
  five equal link columns (Discover / About / Services / Buy / Help) with
  bold dark headings and gray links; faint divider line; bottom row = two
  gray social icons (Twitter, Facebook) left, small centered "Colorlib © All
  Rights Reserved.", App Store + Google Store links right. **NO variance
  between screenshot and live DOM.** No visible brand color at rest — the
  design is monochrome; `#4200ff` shows only on hover.
- **Design rhythm:** COMPONENT template, not a landing page — no navbar, no
  hero, no images, no buttons with text, no subscribe form (unlike footer-05,
  which had an email input). Page = light filler (70vh) + transparent footer.
  Light, corporate, airy — closest cousin is Outro (footer 05) but with a
  5-column link block instead of the subscribe/nav/socials top row, and NO
  footer background at all.
- **Footer band:** `.footer-95942` — **NO background** (transparent, white
  page shows through), `padding: 7rem 0`, `font-family: "Poppins",
sans-serif`, NO border-top on the footer itself.
- **Brand color: `#4200ff`** (electric violet) — used ONLY on nav-link hover
  and social-link hover. Nothing at rest is branded.
- **Link columns (centered block):** `div.row.justify-content-center` →
  `div.col-md-8` → `div.row` → 5× `div.col-sm-6.col-md.mb-4.mb-md-0`:
  each `h3` (16px bold, `margin-bottom: 20px`) + `ul.list-unstyled.nav-links`
  (`li` block, `margin-bottom: 10px`; `a` 14px `#777`, hover `#4200ff`):
  1. **Discover** — Website editors, Online retail, Get started, Services
  2. **About** — Contact, Services, Team
  3. **Services** — Events, News, Awards
  4. **Buy** — Where to Buy, Shop Online
  5. **Help** — FAQ, Support, Knowledge Base
- **Divider:** `div.row.py-3` → `div.col-md-12.pb-3` → `div.border-top`
  (Bootstrap `border-top: 1px solid #dee2e6`; py-3 = 1rem top/bottom padding,
  pb-3 adds another 1rem below).
- **Bottom row (`div.row.align-items-center`):**
  1. `col-md-4` — `ul.list-unstyled.social.mb-0.pb-0.nav-left`: **Twitter** +
     **Facebook** icon-only links (`li` inline-block; `a` inline-block,
     `padding: 10px`, color `#ccc`, hover `#4200ff`; first-child
     `padding-left: 0`). **lucide-react REMOVED brand icons** (probe with
     `typeof`) → inline SVG brand glyphs (simple-icons paths) +
     `aria-label`s.
  2. `col-md-4.text-center` — `span.small` "Colorlib © All Rights Reserved."
     → recreation **"© <current year> Finale"** + Component Dock link.
  3. `col-md-4.text-right` — `ul.list-unstyled.social.app.mb-0.pb-0.nav-right`:
     **App Store** (`span.icon-apple.mr-3` — Apple brand glyph, inline SVG;
     lucide's `Apple` is the fruit) and **Google Store** (`span.icon-play.mr-3`
     — lucide `Play` is a valid match); row font-size **13px**, glyphs `#ccc`
     hover `#4200ff`, `mr-3` = 1rem icon-label gap, last-child `padding-right: 0`.
- **Grid (Bootstrap 4.5.3, reproduce responsively):** columns block = 8/12
  centered. Link columns `col-sm-6 col-md`: md+ (≥768) all five equal width
  in one row; sm (576–767) 2-up (2-2-1, 5th column hangs alone); below sm
  full-width stacked. `mb-4 mb-md-0` = bottom margins on mobile only. Bottom
  row 3× `col-md-4`: side-by-side on md+, stacked below. NO order flips in
  this design.
- **Images:** NONE — the template is image-free; no picsum placeholders
  needed.
- **A11y:** semantic `<footer>` + main landmark; accessible names for the 2
  icon-only social links (source has bare spans — recreation adds them);
  focus-visible rings on all interactive elements.

## Structure order (1:1)

1. `main` → filler `.content` (`#f8f9fa`, ~70vh, centered demo label —
   source: "Footer #6").
2. `footer.footer-95942` (transparent, `padding: 7rem 0`, Poppins) →
   `div.container`:
   a. `div.row.justify-content-center` → `div.col-md-8` → `div.row`:
   five link columns `col-sm-6 col-md mb-4 mb-md-0` (Discover 4 links /
   About 3 / Services 3 / Buy 2 / Help 3) — each h3 heading + stacked
   `ul.nav-links`
   b. `div.row.py-3` → `div.col-md-12.pb-3` → `div.border-top` (divider)
   c. `div.row.align-items-center`:
   - `col-md-4` — social icons: Twitter, Facebook (icon-only links)
   - `col-md-4.text-center` — "© <year> Finale" + Component Dock link
   - `col-md-4.text-right` — App Store + Google Store links (leading
     icons, 13px)

## Implementation tasks

- [ ] Scaffold `apps/finale` (copy simplest existing app; package
      `@free-react-templates/finale`; `public/CNAME` =
      `finale.free.componentdock.com`; homepage =
      `https://finale.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Finale — Footer", Poppins Google Fonts `<link>`
- [ ] `src/index.css` tokens: `#4200ff` (brand hover), `#777` (nav links),
      `#ccc` (social/store glyphs), `#f8f9fa` (filler bg), `#dee2e6` (divider
      border), default heading dark `#212529`; `a` transition `.3s all ease`
- [ ] Components: `Filler` (light ~70vh demo strip), `Footer` (five link
      columns, divider, social icons, copyright + Component Dock link, store
      links)
- [ ] Link columns: exact headings + copy (Discover 4 / About 3 / Services 3
      / Buy 2 / Help 3); bold 16px headings (`mb 20px`); stacked 14px `#777`
      links (block li, 10px bottom margin), hover `#4200ff`; centered
      `col-md-8` block
- [ ] Divider: 1px `#dee2e6` border with ~1rem vertical spacing
- [ ] Socials: Twitter + Facebook icon-only links — `#ccc`, padding 10px,
      first `padding-left: 0`, hover `#4200ff`; inline SVG brand icons
      (lucide removed them — probe exports with `typeof`); `aria-label` each
- [ ] Copyright: "© <year> Finale" small text centered + Component Dock link
      `https://www.componentdock.com/`; NO ColorLib references in app code
- [ ] Store links: App Store (Apple inline SVG) + Google Store (lucide
      `Play`) — 13px row, leading icons with ~1rem gap, right-aligned, last
      `padding-right: 0`
- [ ] Responsive grid: centered 8/12 columns block; 5-equal on md+ / 2-up on
      sm / stacked below sm; bottom row 3× `col-md-4` side-by-side md+,
      stacked below; no horizontal overflow
- [ ] Tests: 100% coverage (filler label, five columns exact headings+copy,
      divider, 2 social links with aria-labels, copyright + Component Dock
      link, 2 store links, responsive classes present)
- [ ] `npm run verify:app finale` passes; commit `feat: add finale …`; PR +
      immediate squash merge; then TEMPLATES.md bookkeeping — line 782
      (Bootstrap Footer 06) → `[x]` + surge URL +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Filler: `#f8f9fa` ~70vh + centered demo label
- [ ] Footer transparent (no bg), `padding: 7rem 0`, Poppins; semantic
      footer + main landmark
- [ ] Five link columns centered (Discover 4 / About 3 / Services 3 / Buy 2 /
      Help 3) — exact copy, bold 16px headings, stacked 14px `#777` links,
      hover `#4200ff`
- [ ] Divider 1px `#dee2e6` with ~1rem spacing
- [ ] Bottom row: Twitter + Facebook icon-only links left (`#ccc`, padding
      10px, first padding-left 0, hover `#4200ff`, inline SVG, aria-labels);
      "© <year> Finale" centered + Component Dock link
      (`https://www.componentdock.com/`); App Store + Google Store right
      (13px, leading icons, ~1rem gap)
- [ ] Responsive: 5-equal md+ / 2-up sm / stacked below sm; bottom row
      3×33% on md+, stacked below; no horizontal overflow
- [ ] Poppins Google Fonts link; no images; no ColorLib anywhere in
      `apps/finale`
- [ ] `npm run verify:app finale` green; TEMPLATES.md line 782 bookkept `[x]`
