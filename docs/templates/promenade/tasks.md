# Promenade (ColorLib Modal 15) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Promenade** (NEW name —
> the ColorLib source keeps its name "Modal 15"/`modal-15`). Implementation
> ships on `feat/template-promenade` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 15" — free single-page signup-form modal
  component template (source: https://colorlib.com/wp/template/modal-15/).
  TEMPLATES.md row: line 814 (**Bootstrap Modals (20)**, header line 799). The
  `modal-15` slug appears exactly once (no dup rows to mark). Demo
  `<title>`/heading is the generic "Modal #5".
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-15/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-15/`
  (HTTP 200, ~17.9KB HTML, `<title>` "Modal #5"). Stylesheets:
  `css/style.css` (2.5KB — custom styles; token source), `css/bootstrap.min.css`
  (Bootstrap 4.3.1 — **CUSTOMIZED: `.btn-primary` = `#ed5107`** (burnt orange)
  instead of the default `#007bff`, and `.form-control:focus` gets the ORANGE
  ring `0 0 0 0.2rem rgba(237,81,7,0.25)` + `border-color: #fba278`),
  `fonts/icomoon/style.css` (loaded but NO icon glyphs render in this modal).
  cf-fonts load Roboto/Poppins/Source Serif Pro but `css/style.css` assigns
  **Roboto** to body + headings (the used font). NO custom `js/`: `js/main.js`
  is empty (auto-open commented out); open is Bootstrap data-API only.
  Screenshot (`modal-15.jpg`, 1200×972) verified 2026-08-16: flat light-gray
  launch page; **WHITE rounded (7px) modal card** (NOT peach `#fff4e4`/Modal
  14, NOT pink `#f9eaf2`/Modal 13); two-column split — LEFT **50%** full-height
  cover photo (hand holding a white ceramic coffee cup with latte art, dark
  blurred bg), RIGHT content (`p-4`): black 22px "Sign up to access all the
  resources" heading, gray quote, 3 labeled inputs (Email Address, First Name,
  Password), full-width burnt-orange "Sign up" submit, tiny gray "By signing
  up you will agree to our Privacy Policy" note with bold `#555` link.
- **Structure observed (1:1):**
  - Launch: `div.container.content` (**height 100vh**) →
    `row.align-items-center` → `col-12.text-center`:
    `h3.mb-4` "Modal #5" + `button.btn.btn-secondary.px-4.py-3` "Launch modal"
    (custom `.btn { border-radius: 4px; border: none; }`; Bootstrap
    `.btn-secondary`: bg **`#6c757d`**, white text, hover `#5a6268`).
  - Modal `div.modal.fade#exampleModalCenter` →
    `modal-dialog.modal-lg.modal-dialog-centered` (**`modal-lg` requested but
    Bootstrap 4.3.1 ships NO `.modal-lg` rule → renders at DEFAULT max-width
    **500px**, centered) → `modal-content.rounded-0` (custom: transparent bg,
    border none, **radius 7px**) → `div.modal-body.py-0` (**`background-color:
#fff`**, `border-radius: 7px`, `overflow: hidden`, `padding-left/right: 0`,
    `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`).
  - `div.d-flex.main-content` (padding-left/right **20px**):
    - LEFT `div.bg-image.promo-img.mr-3` — `flex: 0 0 50%` (**HALF the dialog
      width**), `object-cover` (`background-size: cover`, centered, no-repeat),
      `mr-3` right margin, a full-height cover photo (coffee-cup shot). No
      text.
    - RIGHT `div.content-text.p-4`:
      - `h3` — "Sign up to access all the resourcess" (`.modal-body h3`:
        **#000, 22px**; note the doubled "s" typo — fix in recreation).
      - `p` — (`.modal-body p`: **#777, 14px**, weight 300) quote placeholder.
      - `form[action="#"]`:
        - 3× `div.form-group` (`margin-bottom: 1rem`) with `label[for]` +
          `input.form-control`: "Email Address" (`type="email"`), "First Name"
          (`type="text"`), "Password" (`type="password"`). Custom
          `.form-control { border: 1px solid #ccc; }` (overrides Bootstrap's
          `#ced4da`); focus: custom css kills the box-shadow, customized
          Bootstrap keeps `border-color: #fba278` + orange ring
          `rgba(237,81,7,0.25)`. SOURCE BUG: it reuses `id="name"` for two
          inputs and the Password label's `for` is wrong — recreation gives
          each input a UNIQUE id + matching `for`.
        - `div.form-group` → `input[type=submit][value="Sign up"]` styled
          `.btn.btn-primary.btn-block` — custom `.btn-primary`: **`#ed5107`**,
          white text, radius 4px, border none, padding-block 10px (custom
          css), hover `#c84406`, focus `rgba(240,107,44,0.5)`.
        - `div.form-group` → `p.custom-note` → `small`: "By signing up you
          will agree to our [Privacy Policy](#)" — `.custom-note { color:
#999; }`, `.custom-note a { color: #555; font-weight: 900; }`.

## Implementation task outline

1. **Scaffold** `apps/promenade` from the simplest existing app (e.g. copy a
   sibling Modal-series app like `apps/concourse` once shipped, or `apps/
gateway`/`apps/rotunda`). Rename package to
   `@free-react-templates/promenade`; set `public/CNAME` =
   `promenade.free.componentdock.com` and `"homepage"` =
   `https://promenade.free.componentdock.com`; register via `npm install` at
   root (lockfile). Vite config: keep `injectUiSource()`. Add the jsdom
   localStorage polyfill to `src/test/setup.ts` as needed.
2. **Design tokens** in `src/index.css` `@theme`: `--color-brand: #ed5107`
   (Sign up button, hover `#c84406`), `--color-gray: #6c757d` (launch
   button), white `#fff` (modal card), black `#000` (heading), gray `#777`
   (quote), `#ccc` (input borders), `#999`/`#555` (custom-note + link).
   Radius: modal **7px**, buttons **4px**. Load **Roboto** via Google Fonts
   `<link>` in `index.html`.
3. **Components** (mirror the section list — see spec Gherkin):
   - `LaunchSection` — full-viewport centered heading "Promenade" + gray
     "Launch Promenade" button (opens modal).
   - `SignupModal` — centered max-w-500px rounded(7px) card, **WHITE** bg,
     two-column d-flex: left **50%** cover image (picsum
     `https://picsum.photos/seed/promenade-1/600/800`, `object-cover`) + right
     column (`p-4`): black 22px "Sign up to access all the resources" h3 →
     gray 14px quote → 3 labeled inputs (Email Address `type="email"`, First
     Name `type="text"`, Password `type="password"`; unique ids + matching
     `for`; `#ccc` borders; orange focus ring `rgba(237,81,7,0.25)` +
     `#fba278` border) → full-width orange "Sign up" submit → tiny gray
     "By signing up you will agree to our Privacy Policy" note with bold
     `#555` link. Open/close via React state (launch-to-open;
     backdrop/Escape-to-close; conditional render). NO auto-open on load.
     NO close × (`aria-label="Close"` hidden or omitted), NO coupon box, NO
     split buttons.
   - Modal a11y: `role="dialog"`, `aria-modal`, aria-label/labelledby, Escape
     - backdrop click close.
   - Form validation (per conventions.md): minimal client-side — required
     fields + email format; per-field errors; the source is a static
     `form[action="#"]` with NO validation, so this is an additive convention
     only — do NOT change the visual design.
   - `Footer` — minimal Component Dock footer linking
     `https://www.componentdock.com/`.
4. **App.tsx** composes LaunchSection → SignupModal → Footer; set document
   title "Promenade — Signup Form Modal".
5. **Tests** (TDD, 100% coverage): launch section heading + gray launch
   button; opening the modal; modal shell (rounded 7px, white bg, no close ×);
   two-column layout (left image column 50% object-cover, right column
   content); 3 labeled inputs with unique ids + orange focus; orange "Sign up"
   submit; invalid-submit blocked with per-field errors; footer links
   Component Dock; backdrop + Escape close; document title. Query buttons via
   role; the two buttons ("Launch Promenade" / "Sign up") are separate
   surfaces. Watch the `aria-hidden` / direct-text-node testing gotchas.
6. **Verify:** `npm run verify:app` (typecheck/lint/knip/fallow/vitest 100%/
   build) for the changed app; `npm run spec:validate`; visual QA the built
   output (two-column layout, white rounded 7px card, orange submit, gray
   launch button, inputs + focus rings, images load).
7. **Ship:** commit conventional (`feat:`), push `feat/template-promenade`,
   open PR, **merge immediately** (squash, delete branch), then bookkeep
   (`[x]` + surge URL `https://promenade.free.componentdock.com` +
   `npm run readme:status`).

## Key fidelity pitfalls (from sibling Modal preps)

- The REAL preview lives under `/theme/bootstrap/modal-15/` — the bare
  `/theme/modal-15/` path 404s; always link the real preview in the PR.
- `.btn-primary` is CUSTOM to `#ed5107` (not Bootstrap's `#007bff`) — do NOT
  use a default blue.
- The modal card is **WHITE `#fff`** — do NOT reuse Modal 13's pink `#f9eaf2`
  or Modal 14's peach `#fff4e4` fills.
- The left cover image column is **50% flex width** (`flex: 0 0 50%`) — NOT
  Concourse's fixed 200px; reproduce the half-width split faithfully; pick a
  picsum seed that renders a suitable vertical lifestyle/object photo.
- `modal-lg` is requested in the source DOM but Bootstrap 4.3.1 has no
  `.modal-lg` rule — render at the default 500px width; don't widen the dialog.
- The form's input borders are `1px solid #ccc` (custom css overrides
  Bootstrap's `#ced4da`) with the ORANGE focus ring — include the focus
  treatment; don't use the default blue Bootstrap focus.
- Source reuses `id="name"` for two inputs and mismatches a `for` — the
  recreation MUST fix ids/labels (a11y).
- Never put ColorLib in app code; footer MUST link Component Dock.
