# Enroll (ColorLib Signup Form 03) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-enroll`. Recreation name: **Enroll** (NEW name —
> the ColorLib source keeps its name "Signup Form 03").

## Source mapping

- **ColorLib item:** "Signup Form 03" (section "## Signup Forms (20)" at line
  2813, row at line 2817).
- **DUPLICATE ROW — mark BOTH:** the slug `signup-form-03` ALSO appears in
  section "## Registration Forms (37)" at line 2660 (`- [ ] **Signup Form
03**`, same URL, same preview image). When the template ships, mark BOTH
  rows `[x]` with the SAME deployment URL (https://enroll.free.componentdock.com).
  (Signup Form 02, 06, 10 are likewise duplicated between the two sections —
  a family-wide TEMPLATES.md quirk, not an error on our side.)
- **Source URL:** https://colorlib.com/wp/template/signup-form-03/
- **Preview URL — REACHABLE (verified 2026-08-18 by direct fetch + live
  browser render):**
  **`https://preview.colorlib.com/theme/bootstrap/signup-form-03/`**
  (HTTP 200, 11,710 bytes, 83 lines, `<title>Sign Up #3</title>`).
  **The naive `https://preview.colorlib.com/theme/signup-form-03/` returns
  404** — the whole signup-form family lives under the `/theme/bootstrap/`
  path. Do not redo this lookup.
- **Stylesheets:** `css/style.css` (3,274 B, 152 lines — ALL custom CSS,
  SCSS-compiled) + `css/bootstrap.min.css` (178 KB — grid + btn +
  form-control skeletons) + `css/owl.carousel.min.css` (loaded, UNUSED) +
  `fonts/icomoon/style.css` (icon font — ONLY glyph used: checkbox check
  `\e5ca`; replace with lucide `Check`, do NOT ship the font). Fonts: local
  Roboto (300 weight only, via CF @font-face) → **Google Fonts `<link>`
  (300/400/700)**.
- **Scripts:** `js/jquery-3.3.1.min.js`, `js/popper.min.js`,
  `js/bootstrap.min.js`, `js/main.js` (354 B). **ALL INERT on this page** —
  main.js only wires Bootstrap accordion collapse handlers and there is no
  accordion/collapse element anywhere in the page. No validation, no effects,
  no navigation. The recreation supplies its own behavior (validation +
  success state) per repo conventions.

## Reference research (done — do not redo)

### Screenshot (`signup-form-03.jpg`, 1200×972) + live page

- Screenshot: bright, soft interior photo across the top — kitchen shelf
  with a white teapot and round white clock, sheer-curtained window with
  bright light, blurred greenery on the right; dreamy, airy aesthetic. Below:
  light grey form area with the white card centered over the photo/grey
  boundary; four light-grey inputs (Name pre-filled "John Doe", email
  pre-filled "your-email@gmail.com"); checked orange checkbox; full-width
  orange Register button.
- Visual style: minimalist, modern, card-based. Monochrome neutrals + one
  warm-orange focal point. Flat card, soft grey inputs, clean Roboto. No
  gradients/decorations on the form side.

### Live-computed confirmations (fetched HTML + CSS, browser probe 2026-08-18)

- **Layout is VERTICAL, always — NOT side-by-side.** `.half` has two BLOCK
  children (`.bg`, `.contents`) and is not a flex container, so the
  `order-1 order-md-2` / `order-2 order-md-1` classes on them are DEAD
  WEIGHT. The inner `.row.align-items-center.justify-content-center` +
  `col-md-6` does the centering. Probe (1280×577 viewport): `.half` 700px;
  `.bg` 200px × 1280px at top 0; `.contents` 200→900px, full width,
  bg `#f6f7fc`; `.form-block` card 540×696, white, `margin-top: -300px` →
  card top at ~52px (overlaps the photo band by ~250px).
- `.half .bg` height is 200px at EVERY breakpoint (base rule AND the
  ≤991.98px media query are both 200px — the SCSS author duplicated the same
  value). `background-size: cover; background-position: center` on
  `images/bg_1.jpg` → picsum placeholder with identical treatment.
- Card: flat — no border, no radius, no shadow. Padding 40px (25px
  ≤991.98px). `margin-top: -300px` is the signature move: the card straddles
  the photo band boundary.
- Inputs: `border: none; border-radius: 4px; height: 54px; background:
#efefef`; active/focus = outline none + box-shadow none (add a
  focus-visible ring in the recreation — repo a11y rules).
- Button: Bootstrap `btn btn-block btn-primary` → bg `#fb771a`, white,
  radius 4px (0.25rem), 54px tall, padding 0 30px; hover `#eb6304` / border
  `#de5e04`; 0.15s ease-in-out transitions.
- Checkbox: custom control — native input opacity 0, z-index −1; 20×20
  indicator radius 4px, bg `#e6e6e6` (hover `#ccc`), checked `#fb771a` with
  white icomoon `\e5ca` glyph (→ lucide `Check`); label 14px, padding-left
  30px, caption color `#888`; input ships `checked="checked"`.
- Links: `a` color `#888`, underline, `0.3s all ease` transition; the
  "Have an account? Login" link is `.forgot-pass` 14px top 2px, pushed right
  with `.ml-auto` in a `d-sm-flex mb-5 align-items-center` row. Paragraph
  text `#b3b3b3` weight 300.
- No footer, no navbar, no other sections — the ENTIRE page is the band +
  form card. The repo standard Component Dock footer gets added.
- Body font Roboto; `h3` heading uses Roboto (source h2 20px; heading here
  is h3, default sizing). Body weight 300.

### Icon mapping (lucide)

| Source                  | Lucide replacement    | Where                                      |
| ----------------------- | --------------------- | ------------------------------------------ |
| icomoon `\e5ca` (check) | `Check` (white, 16px) | Checked checkbox indicator only            |
| Success icon (new)      | `CircleCheck`         | Inline success panel (recreation addition) |

### Placeholder media plan

- Photo band: `https://picsum.photos/seed/enroll-1/1600/200` (cover crop,
  wide 8:1-ish ratio; size it large enough to stay sharp at 200px height on
  wide screens — e.g. 1600×300). Pick a bright/airy interior-ish image if the
  seed allows; any picsum seed is acceptable (deterministic per template).
- No other images anywhere.

## Design tokens (live stylesheet + rendered page, verified 2026-08-18)

Full table in `openspec/specs/template-enroll/spec.md` (§ Design tokens).
Quick reference: brand `#fb771a` (hover `#eb6304` / checkbox-hover `#fb8633`);
area `#f6f7fc`; card `#fff` flat, 40px pad (25 ≤992px), `-mt-300px` pull;
field `#efefef`, no border, r4, h-54; caption/link `#888`; para `#b3b3b3`;
checkbox indicator `#e6e6e6` / checked `#fb771a` + white Check; font Roboto
300 body (Google Fonts); layout 200px photo band + ≥700px area, always
vertical.

## Implementation order (TDD, section by section)

1. **Scaffold** — copy the simplest existing app (e.g. the latest merged
   recreations), rename package to `@free-react-templates/enroll`, set
   `public/CNAME` = `enroll.free.componentdock.com`, homepage, register in
   lockfile (`npm install` at root), keep `injectUiSource()` in
   `vite.config.ts`.
2. **Page shell test-first** — white page, 200px photo band (picsum seed
   enroll-1, cover), `#f6f7fc` section ≥700px flex-centered, flat white card
   with −300px top pull; responsive (≤992px: 25px card padding; band stays
   200px; no horizontal overflow).
3. **Heading + fields** — centered "Register" heading; four labelled inputs
   (name/email/password/re-password) with exact placeholders; `#efefef`
   54px borderless r4 styling; label-click focus; focus-visible ring.
4. **Checkbox row + login link** — custom checkbox (visually hidden input,
   `#e6e6e6`→`#fb771a` indicator + white Check, checked on load), grey
   underlined Terms link, right-aligned "Have an account? Login"; row stacks
   on narrow widths.
5. **Submit button** — full-width orange Register button (hover `#eb6304`),
   intercepts submit.
6. **Validation + success** — zod schema (name required; email format;
   password ≥8; match; terms checked), per-field messages, accessible
   announcements, submit blocked until valid; inline success panel
   (CircleCheck) replaces the form — no alert, no reload.
7. **Footer** — Component Dock link
   (https://www.componentdock.com/), the repo standard.
8. **Verify** — `npm run verify:app -- enroll`; 100% coverage; visual diff
   against the live preview; responsive checks; grep for ColorLib strings.

## Prep status

- [x] Slug claimed (spec folder `template-enroll` on main; both TEMPLATES.md
      rows still `[ ]` — implementer marks BOTH `[x]` with
      https://enroll.free.componentdock.com when shipping)
- [x] Preview DOM + stylesheets fetched and analyzed
- [x] Screenshot viewed (visual design noted)
- [x] Live geometry verified in browser (layout + colors + behavior)
- [x] Spec written: `openspec/specs/template-enroll/spec.md`
- [x] This notes file written
