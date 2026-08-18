# Joinup (ColorLib Signup Form 05) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-joinup`. Recreation name: **Joinup** (NEW name —
> the ColorLib source keeps its name "Signup Form 05").

## Source mapping

- **ColorLib item:** "Signup Form 05" (section "## Signup Forms (20)" at line
  2813, row at line 2819).
- **NOT duplicated:** verified `grep -c 'wp/template/signup-form-05/'` = 1 on
  2026-08-18 — one row only (unlike Signup Form 02/03/06/10, which are
  duplicated in the "## Registration Forms (37)" section). Mark only line 2819
  `[x]` when shipping.
- **Source URL:** https://colorlib.com/wp/template/signup-form-05/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch):**
  **`https://preview.colorlib.com/theme/bootstrap/signup-form-05/`**
  (HTTP 200, 12,070 bytes, 89 lines, `<title>Sign Up #5</title>`).
  **The naive `https://preview.colorlib.com/theme/signup-form-05/` returns
  404** — the whole signup-form family lives under the `/theme/bootstrap/`
  path. Do not redo this lookup.
- **Stylesheets:** `css/style.css` (3,616 B, 169 lines — ALL custom CSS,
  SCSS-compiled) + `css/bootstrap.min.css` (178 KB — grid + btn +
  form-control skeleton, CUSTOMIZED build: `.btn-primary` = orange
  `#fb771a`) + `css/owl.carousel.min.css` (loaded, UNUSED) +
  `fonts/icomoon/style.css` (icon font — glyphs used: checkbox check `\e5ca`
  - social glyphs; replace with lucide/inline SVG, do NOT ship the font).
    Fonts: local Roboto (weights 300 + 400 via CF @font-face) → **Google Fonts
    `<link>` (300/400/700)**.
- **Scripts:** `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/main.js` (accordion collapse wiring). **ALL
  INERT on this page** — no accordion element exists anywhere in the page.
  No validation, no effects, no navigation. The recreation supplies its own
  behavior (validation + success state) per repo conventions.

## Reference research (done — do not redo)

### Screenshot (`signup-form-05.jpg`, 1200×972, AVIF on the CDN) + live page

- Screenshot: split-screen — LEFT quarter is a bright lifestyle kitchen
  interior (white subway tile, dark wood floating shelves, terracotta pot,
  white ceramic jar, vintage kitchen scale, wire basket with greenery);
  RIGHT three-quarters on very light cool grey centers a white card with a
  soft drop shadow, uppercase "SIGN UP" heading, three light-grey rounded
  inputs (Email, Password, Re-type Password), orange-checked consent
  checkbox with underlined Terms/Privacy links, solid orange full-width
  Register button, small "or" divider, and three full-width social buttons
  (dark blue Facebook, light blue Twitter, red Google) with brand glyphs.
- Visual style: minimalist, modern, card-based, Material-influenced.
  Monochrome neutrals + one warm-orange focal point + brand-colored social
  row. Clean Roboto typography.

### Live-computed confirmations (fetched HTML + CSS, verified 2026-08-18)

- **Layout is a TRUE SIDE-BY-SIDE SPLIT on desktop.** `.half` is
  `d-md-flex` (flex from `md`): `.bg` left 25% width, `.contents` right 75%
  width, both inside a `height: 100vh; min-height: 900px` container. On
  ≤767.98px the `.bg` becomes width 100% + height 200px (photo band on top)
  and `.contents` width 100%. Contrast with Enroll (Signup Form 03), which
  is ALWAYS vertical — this template's siblings differ between each other,
  so trust the live DOM, not the family.
- Photo panel: inline `background-image: url('images/bg_1.jpg')` with
  `background-size: cover; background-position: center` → picsum placeholder
  with identical treatment. The panel has NO overlay, NO parallax.
- Card: `.form-block.mx-auto` — white, `max-width: 500px`, padding 40px
  (25px ≤767.98px), `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`. **Flat
  corners** — no radius in the CSS (the screenshot's "slightly rounded"
  impression is the shadow; keep radius 0).
- Inputs: `border: none; border-radius: 4px; height: 54px; background:
#efefef`; source focus = bg `#fff`, border `#fdc197`, ring
  `rgba(251,119,26,.25)` (add a focus-visible ring in the recreation — repo
  a11y rules).
- Button: Bootstrap `btn btn-block py-2 btn-primary` → bg `#fb771a`, white,
  radius 4px (0.25rem), hover `#eb6304` / border `#de5e04`; focus ring
  `rgba(252,139,60,.5)`.
- Checkbox: `.control.control--checkbox` — native input opacity 0 z-index
  −1; 20×20 indicator radius 4px, bg `#e6e6e6` (hover `#ccc`), checked
  `#fb771a` + white icomoon `\e5ca` glyph (→ lucide `Check`); label 14px,
  padding-left 30px, caption color `#888`; input ships `checked="checked"`.
  **PITFALL:** the caption contains the Terms/Privacy links INSIDE the
  `<label>` — a label-wrapped link click toggles the checkbox in HTML.
  Render the caption sentence + links as SIBLINGS of the checkbox input so
  link clicks don't toggle consent, and validate consent on submit.
- Social buttons: `.btn.btn-block.py-2` in brand colors — facebook
  `#3b5998`, twitter `#1da1f2`, google `#ea4335` — white text with a
  `span.icon-* mr-3` glyph (icomoon → lucide/inline SVG). **No source hover
  state** — add a darken/opacity hover. All three are inert `href="#"` links
  — render with preventDefault (no navigation/reload).
- Divider: `span.text-center.my-3.d-block` "or" — small, centered.
- Paragraph/link colors: `p` `#b3b3b3` 300; `a` `#888` underline `0.3s all
ease`. Heading `h3.text-uppercase` "Sign Up" (Roboto 400, uppercase),
  centered, `mb-5`.
- No navbar, no footer, no other sections — the ENTIRE page is the split +
  form card. The repo standard Component Dock footer gets added.

### Icon mapping (lucide / inline SVG)

| Source                  | Replacement                           | Where                                      |
| ----------------------- | ------------------------------------- | ------------------------------------------ |
| icomoon `\e5ca` (check) | `Check` (white, 16px)                 | Checked checkbox indicator only            |
| `icon-facebook`         | lucide `Facebook` / inline SVG path   | "Register with Facebook" button            |
| `icon-twitter`          | lucide `Twitter` / inline SVG path    | "Register with Twitter" button             |
| `icon-google`           | lucide `Chrome` / inline Google G SVG | "Register with Google" button              |
| Success icon (new)      | `CircleCheck`                         | Inline success panel (recreation addition) |

Verify every lucide export with the typeof probe before use; brand glyphs
may need inline SVG paths for the exact look (lucide `Twitter` is fine; the
Google "G" is often better as an inline path).

### Placeholder media plan

- Left photo panel: `https://picsum.photos/seed/joinup-1/1200/1600` (tall
  portrait-ish, cover crop; the panel is full-height so size it large). Pick
  a bright/airy image if the seed allows; any picsum seed is acceptable
  (deterministic per template).
- No other images anywhere.

## Design tokens (live stylesheet + rendered page, verified 2026-08-18)

Full table in `openspec/specs/template-joinup/spec.md` (§ Design tokens).
Quick reference: brand `#fb771a` (hover `#eb6304`, focus ring
`rgba(252,139,60,.5)`); area `#f6f7fc`; card `#fff` flat + shadow
`0 15px 30px rgba(0,0,0,0.2)`, max-w 500, pad 40 (25 ≤768px); field
`#efefef`, no border, r4, h-54; caption/link `#888`; para `#b3b3b3`; checkbox
indicator `#e6e6e6` / checked `#fb771a` + white Check; social facebook
`#3b5998`, twitter `#1da1f2`, google `#ea4335`; font Roboto 300/400/700
(Google Fonts); layout 25/75 split ≥900px tall, mobile 200px photo band.

## Implementation order (TDD, section by section)

1. **Scaffold** — copy the simplest existing app (e.g. the latest merged
   recreations), rename package to `@free-react-templates/joinup`, set
   `public/CNAME` = `joinup.free.componentdock.com`, homepage, register in
   lockfile (`npm install` at root), keep `injectUiSource()` in
   `vite.config.ts`.
2. **Split-screen shell test-first** — viewport-height flex split: left
   25% photo panel (picsum seed joinup-1, cover, tall), right 75% `#f6f7fc`
   flex-centered; responsive ≤768px: photo becomes full-width 200px band,
   no horizontal overflow; min-height 900px desktop.
3. **Card + heading** — centered white card (max-w 500, pad 40/25, shadow
   `0 15px 30px rgba(0,0,0,.2)`, radius 0) with centered uppercase "Sign Up"
   heading.
4. **Fields** — three labelled inputs (Email / Password / Re-type Password)
   with exact placeholders; `#efefef` 54px borderless r4 styling; label-click
   focus; orange-tinted focus-visible ring.
5. **Consent row** — custom checkbox (visually hidden input, `#e6e6e6` →
   `#fb771a` indicator + white Check, checked on load), caption sentence with
   grey underlined Terms + Privacy links as SIBLINGS of the checkbox (do NOT
   wrap links in the label); link clicks must not toggle the checkbox.
6. **Submit button** — full-width orange Register button (hover `#eb6304`),
   intercepts submit.
7. **Divider + social row** — centered "or" divider; three full-width
   brand-colored buttons (Facebook/Twitter/Google) with glyphs + labels,
   darken-on-hover, inert clicks (preventDefault, no navigation).
8. **Validation + success** — zod schema (email format; password ≥8; match;
   terms checked), per-field messages, accessible announcements, submit
   blocked until valid; inline success panel (CircleCheck) replaces the form
   — no alert, no reload.
9. **Footer** — Component Dock link (https://www.componentdock.com/), the
   repo standard.
10. **Verify** — `npm run verify:app -- joinup`; 100% coverage; visual diff
    against the live preview; responsive checks; grep for ColorLib strings.

## Prep status

- [x] Slug claimed (spec folder `template-joinup` on main; TEMPLATES.md row
      still `[ ]` — implementer marks line 2819 `[x]` with
      https://joinup.free.componentdock.com when shipping)
- [x] Preview DOM + stylesheets fetched and analyzed
- [x] Screenshot viewed (visual design noted)
- [x] Live geometry verified in browser (layout + colors + behavior)
- [x] Spec written: `openspec/specs/template-joinup/spec.md`
- [x] This notes file written
