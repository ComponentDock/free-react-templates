# Coda (ColorLib Bootstrap Footer 04) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-coda`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 04" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-04/). The page body is a
  70vh light-gray filler strip; the deliverable is the footer. TEMPLATES.md
  has ONE copy (line 780, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 04 → **Coda** (the concluding passage of
  a piece of music or literature — fits a footer template; no collision with
  `apps/`, `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-04/` returns **HTTP
  404**. The live preview is served under the `/theme/bft/` prefix:
  **`https://preview.colorlib.com/theme/bft/bootstrap-footer-04/`**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-04/` (HTTP 200,
  18,675 bytes, `<title>Footer 04</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css` (Bootstrap
  **v4.5.3**), `css/style.css` (10,439 bytes — a SHARED sheet bundling the
  custom rules of MANY footer designs: `.footer-14398`, `.footer-59391`,
  `.footer-95942`, `.footer-48201`, `.footer-99382`, `.footer-16371`,
  `.footer-39201`, …). **The footer-04 DOM uses ONLY `.footer-14398`**
  (verified: no other `footer-\d+` class in the HTML) — IGNORE every other
  block in the sheet. No JS libs; Roboto via system stack (no Google Fonts
  link in the source — add the Google Fonts `<link>` in the recreation's
  index.html).
- **Screenshot:** `bootstrap-footer-04.jpg` (viewed in browser, 1200×972) —
  light-gray demo area with "Footer #4" centered; solid BLACK footer with a
  bold white "Colorlib" logo + gray lorem blurb (left), three white-headed
  link columns (Shop / Press / About) with gray links, faint divider line,
  bottom row with white legal links (Privacy Policy / Terms & Conditions /
  Code of Conduct) left + four light-gray social glyphs right, and a muted
  small-text row at the very bottom. **NO variance between screenshot and
  live DOM.**
- **Design rhythm:** COMPONENT template, not a landing page — no navbar, no
  hero, no images, no buttons, no newsletter. Page = light filler (70vh) +
  stark black footer. High-contrast minimal corporate style.
- **Footer band:** `.footer-14398` — bg **`#000`**, `color: #777`,
  `padding: 7rem 0`; `h3` column headings white 16px `margin-bottom: 20px`
  (NOT bold in the source); link `li` `margin-bottom: 10px`.
- **Brand:** `.footer-site-logo` — white, **26px, bold**, `display: block`,
  `margin-bottom: 30px`; source brand "Colorlib" → recreation brand
  **"Coda"**; blurb `p` inherits `#777`; Component Dock link mandatory
  (NO ColorLib in app code).
- **Link columns (`#999` → hover `#fff`):**
  1. Shop — Sell online, Features, Examples, Website editors, Online retail
  2. Press — Events, News, Awards, Testimonials, Online retail
  3. About — Contact, Services, Team, Career, Contacts
- **Divider:** `.line` — `border-top: 1px solid rgba(255,255,255,0.2)`
  (faint white), inside `div.col-12.pb-4`.
- **Legal links:** `.link-menu` — `li` inline-block, `a` white `padding:
10px`; `.nav-left li:first-child a` `padding-left: 0`; `.nav-right
li:last-child a` `padding-left: 0` (source typo — keep as-is). Copy:
  Privacy Policy, Terms & Conditions, Code of Conduct.
- **Socials:** `.social` — `li` inline-block, `a` `padding: 10px`, color
  `#ccc` — icon-font glyphs, **NOT circles, NO background, NO radius**
  (unlike footer-01's periwinkle circles!). Glyphs: `icon-twitter`,
  `icon-instagram`, `icon-facebook`, `icon-pinterest`. **lucide-react
  REMOVED brand icons** (Twitter/Instagram/Facebook/Pinterest are `undefined`
  exports — probe with `typeof`) → render brand glyphs as inline SVGs
  (simple-icons paths). Add `aria-label`s (source uses bare spans).
- **Copyright row:** `div.row > div.col-md-7 > p > small` — the source uses
  a Lorem ipsum placeholder here; the recreation SHALL use
  "© <current year> Coda" + the Component Dock link.
- **Grid (Bootstrap 4.5.3, reproduce responsively):** first row = `col-md-3`
  (25% on md+) + 3× `col-md-2.ml-auto` (16.67% each). The three auto
  left-margins absorb the remaining 25% equally → on md+ the four columns
  render EVENLY DISTRIBUTED across the row. Below md: all stack full-width.
  Second row = 2× `col-md-6` → legal left + socials right on md+, stacked
  below. Bottom row `col-md-7` → left-aligned, full-width below md.
- **Images:** NONE — the template is image-free; no picsum placeholders
  needed.
- **A11y:** semantic `<footer>` + main landmark; icon-only socials need
  accessible names; focus-visible rings (source has none of this — the
  recreation adds it per monorepo conventions).

## Structure order (1:1)

1. `main` → filler `.content` (`#f8f9fa`, ~70vh, centered demo label —
   source: "Footer #4").
2. `footer.footer-14398` (`#000`, `padding: 7rem 0`, `color: #777`):
   a. `div.row.mb-5` — four columns: brand `col-md-3` (logo "Coda" white
   26px bold + `#777` blurb + Component Dock link) + 3× `col-md-2.ml-auto`
   (Shop / Press / About, 5 links each).
   b. `div.row.mb-4` — `div.col-12.pb-4 > div.line` (faint white divider);
   `div.col-md-6.text-md-left` legal links (Privacy Policy, Terms &
   Conditions, Code of Conduct); `div.col-md-6.text-md-right` socials
   (Twitter, Instagram, Facebook, Pinterest).
   c. `div.row` — `div.col-md-7 > p > small` "© <year> Coda" + Component
   Dock link.

## Implementation tasks

- [ ] Scaffold `apps/coda` (copy simplest existing app; package
      `@free-react-templates/coda`; `public/CNAME` =
      `coda.free.componentdock.com`; homepage =
      `https://coda.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Coda — Footer", Roboto Google Fonts `<link>`
- [ ] `src/index.css` tokens: `#000` (footer bg), `#fff` (logo/headings/
      legal links), `#777` (body text), `#999` (column links, hover `#fff`),
      `#ccc` (social glyphs), `#f8f9fa` (filler bg); divider
      `rgba(255,255,255,0.2)`; `a` transition `.3s all ease`
- [ ] Components: `Filler` (light ~70vh demo strip), `Footer` (brand +
      blurb + Component Dock link, 3 link columns, divider, legal links,
      socials, copyright row)
- [ ] Brand "Coda" 26px bold white block, mb-30; copyright
      "© <year> Coda"; Component Dock link `https://www.componentdock.com/`;
      NO ColorLib references in app code
- [ ] Link columns: Shop (Sell online, Features, Examples, Website editors,
      Online retail) / Press (Events, News, Awards, Testimonials, Online
      retail) / About (Contact, Services, Team, Career, Contacts); h3 white
      16px mb-20 (no bold); links `#999` hover `#fff`, 10px item spacing
- [ ] Divider line `border-top: 1px solid rgba(255,255,255,0.2)`
- [ ] Legal links: Privacy Policy / Terms & Conditions / Code of Conduct —
      white inline-block, padding 10px, left
- [ ] Socials: 4 `#ccc` glyphs inline (NOT circles) — Twitter / Instagram /
      Facebook / Pinterest as inline SVG brand icons (lucide removed them —
      probe exports with `typeof`); `aria-label` each; right-aligned
- [ ] Responsive grid: col-md-3 + 3× col-md-2 ml-auto (evenly spread on
      md+), stacked below md; legal/socials col-md-6 pair; no horizontal
      overflow
- [ ] Tests: 100% coverage (filler label, brand + blurb + Component Dock
      link, 3 link columns with exact link sets, divider, legal links,
      socials with aria-labels, copyright, responsive classes present)
- [ ] `npm run verify:app coda` passes; commit `feat: add coda …`; PR +
      immediate squash merge; then TEMPLATES.md bookkeeping — line 780
      (Bootstrap Footer 04) → `[x]` + surge URL +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Filler: `#f8f9fa` ~70vh + centered demo label
- [ ] Footer `#000` padding 7rem 0; semantic footer + main landmark
- [ ] Brand: "Coda" white 26px bold block logo; `#777` blurb; Component
      Dock link (`https://www.componentdock.com/`)
- [ ] Link columns: Shop / Press / About with exact source link sets,
      `#999` → hover `#fff`; white 16px h3 mb-20
- [ ] Divider `rgba(255,255,255,0.2)`; legal links white inline-block
      padding 10px; socials `#ccc` inline glyphs (Twitter, Instagram,
      Facebook, Pinterest) with aria-labels
- [ ] Copyright "© <year> Coda" small `#777` + Component Dock link
- [ ] Responsive: evenly spread 4 columns on md+, stacked below md; no
      horizontal overflow
- [ ] Roboto Google Fonts link; no images; no ColorLib anywhere in
      `apps/coda`
- [ ] `npm run verify:app coda` green; TEMPLATES.md line 780 bookkept `[x]`
