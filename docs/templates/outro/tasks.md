# Outro (ColorLib Bootstrap Footer 05) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-outro`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 05" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-05/). The page body is a
  70vh light-gray filler strip; the deliverable is the footer. TEMPLATES.md
  has ONE copy (line 781, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 05 → **Outro** (the concluding section
  of a piece of music or performance — continues the series' ending-themed
  names Colophon → Envoi → Epilogue → Coda; no collision with `apps/`,
  `openspec/specs/`, `docs/templates/` — verified 2026-08-16).
- **PREVIEW PATH QUIRK (series-wide — see the colophon prep):**
  `https://preview.colorlib.com/theme/bootstrap-footer-05/` returns **HTTP
  404**. The live preview is served under the `/theme/bft/` prefix:
  **`https://preview.colorlib.com/theme/bft/bootstrap-footer-05/`**.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-05/` (HTTP 200,
  18,093 bytes, `<title>Footer 05</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css` (Bootstrap
  **v4.5.3**), `css/style.css` (9,331 bytes — a SHARED sheet bundling the
  custom rules of MANY footer designs: `.footer-14398`, `.footer-59391`,
  `.footer-95942`, `.footer-48201`, …). **The footer-05 DOM uses ONLY
  `.footer-59391`** (verified: no other `footer-\d+` class in the HTML) —
  IGNORE every other block in the sheet. No JS behavior (jquery/popper/
  bootstrap.min.js load but the footer is static — none needed in the
  recreation). No Google Fonts link — the footer declares
  `"Poppins", sans-serif` (system fallback in the preview); add the Google
  Fonts Poppins `<link>` in the recreation's index.html.
- **Screenshot:** `bootstrap-footer-05.jpg` (viewed in browser, 1200×972) —
  light-gray demo area with "Footer #5" centered; WHITE footer with faint
  top border; top row = light-gray email input with integrated right-arrow
  submit + centered gray links (Features / Blog / Pricing / Services) + four
  LIGHT-GRAY CIRCULAR social icons right; bottom row = gray legal links
  (Terms / About / Privacy / Contact) left, bold BRIGHT-BLUE "Colorlib" logo
  centered, muted copyright right. **NO variance between screenshot and live
  DOM.**
- **Design rhythm:** COMPONENT template, not a landing page — no navbar, no
  hero, no images, no text buttons, no newsletter section (just the inline
  subscribe input). Page = light filler (70vh) + white footer. Light,
  airy, minimal corporate style — the LIGHT counterpart of Coda's (footer 04) black band.
- **Footer band:** `.footer-59391` — bg **`#fff`**, `border-top: 1px solid
#efefef`, `padding: 4rem 0`, `font-family: "Poppins", sans-serif`.
- **Brand color: `#3e64ff`** (vivid indigo-blue) — used for the logo, nav
  hover, and social hover only; the rest is grayscale.
- **Brand:** `.site-logo a` — **30px, weight 900, `#3e64ff`**; source brand
  "Colorlib" → recreation brand **"Outro"**; Component Dock link mandatory
  (NO ColorLib in app code).
- **Top row (wrapper `div.border-bottom.pb-5.mb-4` — Bootstrap bottom border
  `#dee2e6`, pb 3rem, mb 1.5rem):**
  1. **Subscribe form** (`col-lg-3`): `form.subscribe` → `div.form-group`
     (relative) → `input[type=email].form-control` (height 45px, NO border,
     bg `#e6e6e6`, placeholder "Enter your email" `#b3b3b3` 14px; focus:
     no outline/shadow) + `button` ABSOLUTE top-right (`top: .5rem; right:
.3rem`, no border/bg, `font-size: 1.5rem`, `line-height: 0`) containing
     `icon-keyboard_backspace` rotated 180° → a RIGHT-POINTING send arrow.
     Recreation: lucide `ArrowRight`/`Send` (same visual, no rotation);
     `aria-label`s on input ("Email address") + button ("Subscribe"); the
     input needs a programmatic label (source has only a placeholder).
  2. **Nav links** (`col-lg-6 text-lg-center`): `ul.nav-links.nav-left`
     — **Features, Blog, Pricing, Services**; li inline-block, a `#777`
     padding 10px, hover `#3e64ff`.
  3. **Socials** (`col-lg-3`): `ul.nav-links.social.nav-right text-lg-right`
     — FOUR CIRCULAR links (Twitter, Instagram, Facebook, Pinterest):
     40×40px, `border-radius: 50%`, bg `#e6e6e6`, glyph `#333333` centered
     (absolute translate), hover → `#3e64ff`. **NOTE: circles WITH
     backgrounds here — unlike footer-04's plain glyphs.** Slight natural
     gap between circles (inline-block whitespace); a small consistent gap
     is fine. **lucide-react REMOVED brand icons** (probe with `typeof`) →
     inline SVG brand glyphs (simple-icons paths) + `aria-label`s.
- **Bottom row (second `div.container` → `div.row.align-items-center`):**
  1. `col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0` —
     `a.m-0.p-0` brand **"Outro"** (30px 900 `#3e64ff`).
  2. `col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0` — `ul.nav-links.m-0.nav-left`
     — **Terms, About, Privacy, Contact** (same `#777`/padding-10px/hover
     `#3e64ff` styling).
  3. `col-lg-4 text-lg-right order-3 order-lg-3` — `p.m-0.text-muted` >
     `small` "© 2019. All Rights Reserved." → recreation
     **"© <current year> Outro"** (`#6c757d`) + Component Dock link.
- **Grid (Bootstrap 4.5.3, reproduce responsively):** Row 1 = `col-lg-3` +
  `col-lg-6` + `col-lg-3` (25/50/25) side by side on lg+, stacked full-width
  below (subscribe → nav → socials). Row 2 = 3× `col-lg-4` with ORDER
  FLIP: on lg+ DOM order renders links → logo (centered) → copyright
  (order-lg-1/2/3); below lg the logo moves FIRST (order-1/2/3 → logo →
  links → copyright). `mb-3 mb-lg-0` bottom margins on mobile only.
- **Images:** NONE — the template is image-free; no picsum placeholders
  needed.
- **A11y:** semantic `<footer>` + main landmark; accessible names for the 4
  social circles + the arrow submit + the email input (source has none of
  this — the recreation adds it per monorepo conventions); focus-visible
  rings (replace the source's removed default outline with a visible ring).

## Structure order (1:1)

1. `main` → filler `.content` (`#f8f9fa`, ~70vh, centered demo label —
   source: "Footer #5").
2. `footer.footer-59391` (`#fff`, `padding: 4rem 0`, `border-top #efefef`,
   Poppins):
   a. `div.border-bottom.pb-5.mb-4` → container → `div.row.align-items-center`:
   - `col-lg-3` — subscribe form (email input + absolute right-arrow
     submit)
   - `col-lg-6.text-lg-center` — nav links: Features, Blog, Pricing,
     Services
   - `col-lg-3` — social circles: Twitter, Instagram, Facebook, Pinterest
     b. container → `div.row.align-items-center`:
   - `col-lg-4.site-logo.order-1.order-lg-2` — brand "Outro"
   - `col-lg-4.order-2.order-lg-1` — legal links: Terms, About, Privacy,
     Contact
   - `col-lg-4.text-lg-right.order-3.order-lg-3` — "© <year> Outro" +
     Component Dock link

## Implementation tasks

- [ ] Scaffold `apps/outro` (copy simplest existing app; package
      `@free-react-templates/outro`; `public/CNAME` =
      `outro.free.componentdock.com`; homepage =
      `https://outro.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Outro — Footer", Poppins Google Fonts `<link>`
- [ ] `src/index.css` tokens: `#fff` (footer bg), `#3e64ff` (brand/hovers),
      `#777` (nav links), `#e6e6e6` (input + circle bg), `#333333` (social
      glyphs), `#b3b3b3` (placeholder), `#6c757d` (copyright), `#f8f9fa`
      (filler bg); `#efefef` top border; `a` transition `.3s all ease`
- [ ] Components: `Filler` (light ~70vh demo strip), `Footer` (subscribe
      form, nav links, social circles, brand logo, legal links, copyright +
      Component Dock link)
- [ ] Brand "Outro" 30px weight 900 `#3e64ff` centered on lg+; copyright
      "© <year> Outro"; Component Dock link `https://www.componentdock.com/`;
      NO ColorLib references in app code
- [ ] Subscribe form: 45px `#e6e6e6` borderless email input (placeholder
      "Enter your email", `#b3b3b3` 14px), absolute right-arrow submit
      (lucide `ArrowRight`/`Send`, no text), `aria-label`s on both
- [ ] Nav links: Features, Blog, Pricing, Services — `#777`, padding 10px,
      hover `#3e64ff`, centered on lg+
- [ ] Socials: 4 circular links (Twitter, Instagram, Facebook, Pinterest) —
      40×40px, radius 50%, bg `#e6e6e6`, glyph `#333333` hover `#3e64ff`;
      inline SVG brand icons (lucide removed them — probe exports with
      `typeof`); `aria-label` each; right-aligned
- [ ] Legal links: Terms, About, Privacy, Contact — `#777`, padding 10px,
      hover `#3e64ff`, left on lg+
- [ ] Responsive grid: col-lg-3/6/3 top row + col-lg-4 ×3 bottom row with
      order flip (logo first below lg, links first on lg+); no horizontal
      overflow
- [ ] Tests: 100% coverage (filler label, subscribe form + aria-labels, 4
      nav links exact copy, 4 social circles with aria-labels, brand +
      legal links + copyright + Component Dock link, responsive order
      classes present)
- [ ] `npm run verify:app outro` passes; commit `feat: add outro …`; PR +
      immediate squash merge; then TEMPLATES.md bookkeeping — line 781
      (Bootstrap Footer 05) → `[x]` + surge URL +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Filler: `#f8f9fa` ~70vh + centered demo label
- [ ] Footer `#fff` padding 4rem 0, border-top `#efefef`; semantic footer +
      main landmark
- [ ] Subscribe: 45px `#e6e6e6` borderless input + absolute right-arrow
      submit; placeholder "Enter your email"; accessible names on input +
      button; no default focus outline (visible focus-visible ring instead)
- [ ] Nav links: Features, Blog, Pricing, Services — `#777` hover `#3e64ff`,
      centered on lg+
- [ ] Socials: 4 circles (Twitter, Instagram, Facebook, Pinterest) — 40px,
      radius 50%, bg `#e6e6e6`, glyph `#333333` hover `#3e64ff`, inline SVG
      brand icons, aria-labels
- [ ] Row 2: "Outro" 30px 900 `#3e64ff` centered on lg+; Terms / About /
      Privacy / Contact left; "© <year> Outro" `#6c757d` right + Component
      Dock link (`https://www.componentdock.com/`)
- [ ] Responsive: 25/50/25 top row + 3×33% bottom row with order flip on
      lg+; stacked below lg; no horizontal overflow
- [ ] Poppins Google Fonts link; no images; no ColorLib anywhere in
      `apps/outro`
- [ ] `npm run verify:app outro` green; TEMPLATES.md line 781 bookkept `[x]`
