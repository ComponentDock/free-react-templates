# Peristyle (ColorLib Modal 16) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Peristyle** (NEW name —
> the ColorLib source keeps its name "Modal 16"/`modal-16`). Implementation
> ships on `feat/template-peristyle` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 16" — free single-page registration-form modal
  component template (source: https://colorlib.com/wp/template/modal-16/;
  ColorLib page title "Modal V16 - Free Registration From Pop-Up").
  TEMPLATES.md row: line 815 (**Bootstrap Modals (20)**, header line 799). The
  `modal-16` slug appears exactly once (no dup rows to mark). Demo
  `<title>`/heading is the generic "Modal #6".
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-16/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-16/`
  (HTTP 200, ~34.7KB HTML, `<title>` "Modal #6"). Stylesheets:
  `css/style.css` (2.9KB — custom styles; token source), `css/bootstrap.min.css`
  (Bootstrap 4.3.1 — **CUSTOMIZED: `.btn-primary` = `#ed5107`** (burnt orange)
  instead of the default `#007bff`, `.form-control:focus` gets the ORANGE ring
  `0 0 0 0.2rem rgba(237,81,7,0.25)` + `border-color: #fba278`, and —
  UNLIKE Promenade/Modal 15's bootstrap — **`.modal-lg` SHIPS with
  `max-width: 800px`**), `fonts/icomoon/style.css` (loaded but NO icon glyphs
  render in this modal). cf-fonts load Roboto/Poppins/Source Serif Pro but
  `css/style.css` assigns **Roboto** to body + headings (the used font). NO
  custom `js/`: `js/main.js` only has a commented-out auto-open; open is
  Bootstrap data-API only. Screenshot (`modal-16.jpg`, 1200×972) verified
  2026-08-16: flat light page; **LIGHT-GRAY rounded (7px) modal card**
  (`#efefef` — NOT white `#fff`/Modal 15, NOT peach `#fff4e4`/Modal 14, NOT
  pink `#f9eaf2`/Modal 13); two-column split — LEFT **50%** full-height cover
  photo (small globular dark-green cactus in a small square white pot, white
  gravel, seamless light-gray backdrop), RIGHT content (`p-4`): black 22px
  "Registration form" heading, gray quote, 4 labeled fields (Country dropdown,
  Full Name, Email Address, Date of Birth MM/DD/YYYY), full-width
  burnt-orange "Sign up" submit, tiny gray "By signing up you will agree to
  our Privacy Policy" note with bold `#555` link.
- **Structure observed (1:1):**
  - Launch: `div.container.content` (**height 100vh**) →
    `row.align-items-center` → `col-12.text-center`:
    `h3.mb-4` "Modal #6" + `button.btn.btn-secondary.px-4.py-3` "Launch modal"
    (custom `.btn { border-radius: 4px; border: none; }`; Bootstrap
    `.btn-secondary`: bg **`#6c757d`**, white text, hover `#5a6268`).
  - Modal `div.modal.fade#exampleModalCenter` →
    `modal-dialog.modal-lg.modal-dialog-centered` (**`modal-lg` SHIPS here:
    **max-width 800px** — genuinely LARGE, NOT Promenade's 500px fallback;
    vertically centered) → `modal-content.rounded-0` (custom: transparent bg,
    border none, **radius 7px**) → `div.modal-body.py-0` (**`background-color:
#efefef`** (LIGHT GRAY — the signature fill of this modal), `border-radius:
7px`, `overflow: hidden`, `padding-left/right: 0`,
    `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`).
  - `div.d-flex.main-content` (padding-left/right **20px**):
    - LEFT `div.bg-image.promo-img.mr-3` — `flex: 0 0 50%` (**HALF the dialog
      width**), `object-cover` (`background-size: cover`, centered, no-repeat),
      `mr-3` right margin, a full-height cover photo (cactus-in-white-pot shot,
      800×1422 vertical). No text.
    - RIGHT `div.content-text.p-4`:
      - `h3` — "Registration form" (`.modal-body h3`: **#000, 22px**).
      - `p` — (`.modal-body p`: **#777, 14px**, weight 300) quote placeholder.
      - `form[action="#"]` — **SOURCE QUIRK: the `</form>` closes right after
        the Country select; Full Name / Email / DOB / submit sit OUTSIDE the
        form in the parsed tree with a stray closing tag. Recreation MUST wrap
        ALL fields in ONE proper `<form>`** (visible design unchanged):
        - `div.form-group` → `label[for=country]` "Country" +
          `select#country.custom-select[name=country]` — the **full world
          country list** (~250 `<option>`s, "Afghanistan" selected default).
          Custom `.custom-select { border: none; box-shadow: 0 1px 3px 0
rgba(0,0,0,0.2); }` — **BORDERLESS with soft shadow**; orange focus ring.
          Recreate as a `<select>` with a representative country list of the
          same kind (full static list or representative subset).
        - `div.form-group` → `label[for=fname]` "Full Name" +
          `input#fname.form-control[type=text][placeholder="Full Name"]`.
        - `div.form-group` → `label[for=email]` "Email Address" +
          `input#email.form-control[type=email][placeholder="Enter email"]`.
        - `div.form-group.row.mb-4` → `div.col-12` →
          `label[for=mm]` "Date of Birth" + THREE `col-md-4` inputs:
          `#mm` (placeholder "MM"), `#dd` (placeholder "DD"), `#yyyy`
          (placeholder "YYYY"). Custom `.form-control { border: transparent;
box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2); border: none; }` — **BORDERLESS with
          soft shadow (NOT `#ccc` borders like Modal 15)**; focus keeps the
          ORANGE ring (customized bootstrap).
        - `div.form-group` → `input[type=submit][value="Sign up"]` styled
          `.btn.btn-primary.btn-block` — custom `.btn-primary`: **`#ed5107`**,
          white text, radius 4px, border none, padding-block 10px (custom
          css), hover `#c84406`, focus `rgba(240,107,44,0.5)`.
        - `div.form-group` → `p.custom-note` → `small`: "By signing up you
          will agree to our [Privacy Policy](#)" — `.custom-note { color:
#999; }`, `.custom-note a { color: #555; font-weight: 900; }`.

## Implementation task outline

1. **Scaffold** `apps/peristyle` from the simplest existing app (e.g. copy a
   sibling Modal-series app like `apps/promenade` once shipped, or `apps/
concourse`/`apps/rotunda`). Rename package to
   `@free-react-templates/peristyle`; set `public/CNAME` =
   `peristyle.free.componentdock.com` and `"homepage"` =
   `https://peristyle.free.componentdock.com`; register via `npm install` at
   root (lockfile). Vite config: keep `injectUiSource()`. Add the jsdom
   localStorage polyfill to `src/test/setup.ts` as needed.
2. **Design tokens** in `src/index.css` `@theme`: `--color-brand: #ed5107`
   (Sign up button, hover `#c84406`), `--color-gray: #6c757d` (launch
   button), light gray `#efefef` (modal card — NOT white), black `#000`
   (heading), gray `#777` (quote), `#999`/`#555` (custom-note + link).
   Radius: modal **7px**, buttons **4px**. Load **Roboto** via Google Fonts
   `<link>` in `index.html`.
3. **Components** (mirror the section list — see spec Gherkin):
   - `LaunchSection` — full-viewport centered heading "Peristyle" + gray
     "Launch Peristyle" button (opens modal).
   - `RegistrationModal` — centered **max-w-[800px]** rounded(7px) card,
     **LIGHT-GRAY `#efefef`** bg, two-column d-flex: left **50%** cover image
     (picsum `https://picsum.photos/seed/peristyle-1/600/900`, `object-cover`)
     - right column (`p-4`): black 22px "Registration form" h3 → gray 14px
       quote → ONE `<form>` with 4 labeled fields (Country `<select>` with a
       representative world-country list, "Full Name" `type="text"` placeholder
       "Full Name", "Email Address" `type="email"` placeholder "Enter email",
       "Date of Birth" three-input row MM/DD/YYYY; unique ids + matching `for`;
       **borderless inputs + soft shadow `0 1px 3px 0 rgba(0,0,0,0.2)`**; orange
       focus ring `rgba(237,81,7,0.25)` + `#fba278` border) → full-width orange
       "Sign up" submit → tiny gray "By signing up you will agree to our
       Privacy Policy" note with bold `#555` link. Open/close via React state
       (launch-to-open; backdrop/Escape-to-close; conditional render). NO
       auto-open on load. NO close ×, NO coupon box, NO split buttons.
   - Modal a11y: `role="dialog"`, `aria-modal`, aria-label/labelledby, Escape
     - backdrop click close.
   - Form validation (per conventions.md): minimal client-side — required
     fields + email format; per-field errors; the source is a static
     `form[action="#"]` with NO validation, so this is an additive convention
     only — do NOT change the visual design.
   - `Footer` — minimal Component Dock footer linking
     `https://www.componentdock.com/`.
4. **App.tsx** composes LaunchSection → RegistrationModal → Footer; set
   document title "Peristyle — Registration Form Modal".
5. **Tests** (TDD, 100% coverage): launch section heading + gray launch
   button; opening the modal; modal shell (rounded 7px, **light-gray `#efefef`
   bg** — assert NOT white, max-width 800px, no close ×); two-column layout
   (left image column 50% object-cover, right column content); **ONE form**
   with 4 labeled fields (Country select present, Full Name, Email Address,
   DOB MM/DD/YYYY inputs visible); unique ids + orange focus; orange "Sign up"
   submit; invalid-submit blocked with per-field errors; footer links
   Component Dock; backdrop + Escape close; document title. Query buttons via
   role; the two buttons ("Launch Peristyle" / "Sign up") are separate
   surfaces. Watch the `aria-hidden` / direct-text-node testing gotchas.
6. **Verify:** `npm run verify:app` (typecheck/lint/knip/fallow/vitest 100%/
   build) for the changed app; `npm run spec:validate`; visual QA the built
   output (two-column layout, **800px** light-gray rounded 7px card, orange
   submit, gray launch button, borderless inputs + soft shadow + orange focus
   rings, country select, images load).
7. **Ship:** commit conventional (`feat:`), push `feat/template-peristyle`,
   open PR, **merge immediately** (squash, delete branch), then bookkeep
   (`[x]` + surge URL `https://peristyle.free.componentdock.com` +
   `npm run readme:status`).

## Key fidelity pitfalls (from sibling Modal preps + this one)

- The REAL preview lives under `/theme/bootstrap/modal-16/` — the bare
  `/theme/modal-16/` path 404s; always link the real preview in the PR.
- `.btn-primary` is CUSTOM to `#ed5107` (not Bootstrap's `#007bff`) — do NOT
  use a default blue.
- The modal card is **LIGHT GRAY `#efefef`** — do NOT reuse Modal 15's white
  `#fff`, Modal 13's pink `#f9eaf2`, or Modal 14's peach `#fff4e4` fills.
- **`modal-lg` SHIPS in THIS template's bootstrap (`max-width: 800px`)** —
  unlike Promenade/Modal 15 (whose bootstrap had no `.modal-lg` rule → 500px).
  Render the dialog at **800px**, not 500px.
- The left cover image column is **50% flex width** (`flex: 0 0 50%`) — NOT
  Concourse's fixed 200px; reproduce the half-width split faithfully; pick a
  picsum seed that renders a suitable vertical minimal object/plant photo
  (source: cactus-in-white-pot, 800×1422).
- The form inputs are **BORDERLESS with the soft shadow
  `0 1px 3px 0 rgba(0,0,0,0.2)`** (`.form-control`, `.custom-select`) — NOT
  Modal 15's `1px solid #ccc` borders; include the orange focus ring.
- The original form is MALFORMED: `</form>` closes after the Country select,
  leaving Full Name / Email / DOB / submit outside the form (stray closing
  tag). The recreation MUST wrap all fields in ONE proper `<form>` — and the
  DOB label must point at all three inputs (a11y).
- The Country field is a `<select>` with the full world-country list — recreate
  a select of the same kind (full static list or a representative subset);
  "Afghanistan" as the initial selected value.
- Never put ColorLib in app code; footer MUST link Component Dock.
