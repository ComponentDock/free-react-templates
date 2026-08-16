# Concourse (ColorLib Modal 14) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Concourse** (NEW name —
> the ColorLib source keeps its name "Modal 14"/`modal-14`). Implementation
> ships on `feat/template-concourse` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 14" — free single-page coupon-offer modal
  component template (source: https://colorlib.com/wp/template/modal-14/).
  TEMPLATES.md row: line 813 (**Bootstrap Modals (20)**, header line 798). The
  `modal-14` slug appears exactly once (no dup rows to mark). Demo
  `<title>`/heading is the generic "Modal #4".
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-14/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-14/`
  (HTTP 200, ~17.3KB HTML, `<title>` "Modal #4"). Stylesheets:
  `css/style.css` (2.5KB — custom styles; token source), `css/bootstrap.min.css`
  (Bootstrap 4.3.1 — **CUSTOMIZED: `.btn-primary` = `#ed5107`** (burnt orange)
  instead of the default `#007bff`), `fonts/icomoon/style.css` (loaded but no
  icon glyphs used in this modal). cf-fonts load Roboto/Poppins/Source Serif
  Pro but `css/style.css` assigns **Roboto** to body + headings (the used
  font). NO custom `js/`: `js/main.js` is empty (auto-open commented out);
  open/close is Bootstrap data-API only. Screenshot (`modal-14.jpg`, 1200×972)
  verified 2026-08-16: ROUNDED (7px) modal over a light page; **solid
  light-cream/peach `#fff4e4`** card (NOT Rotunda's pink); two-column split —
  LEFT full-height cover image (black camera on bright yellow), RIGHT centered
  black "60% off coupon" heading, gray quote, **white dashed-bordered coupon
  box** ("SUMMER60"), burnt-orange "Use a coupon" button, gray "Sorry, I don't
  want this." cancel link.
- **Structure observed (1:1):**
  - Launch: `div.container.content` (**height 100vh**) →
    `row.align-items-center` → `col-12.text-center`:
    `h3.mb-4` "Modal #4" + `button.btn.btn-secondary.px-4.py-3` "Launch modal"
    (custom `.btn { border-radius: 4px; border: none; }`; Bootstrap
    `.btn-secondary`: bg **`#6c757d`**, white text, hover `#5a6268`).
  - Modal `div.modal.fade#exampleModalCenter` → `modal-dialog.modal-dialog-centered`
    (max-width 500px) → `modal-content.rounded-0` (custom: transparent bg,
    border none, **radius 7px**) → `div.modal-body.bg-4` (**`#fff4e4`** solid
    cream, `border-radius: 7px`, `overflow: hidden`, `padding-left/right: 0`,
    `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`).
  - `div.d-flex.main-content` (padding-left/right **20px**):
    - LEFT `div.bg-image.promo-img.mr-3` — `flex: 0 0 200px`, `object-cover`
      (`background-size: cover`, centered, no-repeat), `mr-3` right margin, a
      full-height cover photo (camera-on-yellow). No text.
    - RIGHT `div`:
      - `div.text-center` → `h3` "60% off coupon" (`.modal-body h3`: **#000,
        22px**) + `p` (`.modal-body p`: **#777, 14px**, weight 300) quote
        placeholder.
      - `div.coupon` — **white bg, `2px dashed #6c757d` border, 10px padding,
        centered #000 text** ("SUMMER60"), `margin-bottom: 20px` (`.modal
.coupon`).
      - `p` → `a.btn.py-3.btn-primary.btn-block` "Use a coupon" — custom
        `.btn-primary`: **`#ed5107`**, white text, radius 4px, hover `#c84406`.
      - `p.text-center` → `a.cancel` "Sorry, I don't want this." (`.modal
.cancel { color: gray; font-size: 14px; }`, `data-dismiss="modal"`).

## Implementation task outline

1. **Scaffold** `apps/concourse` from the simplest existing app (e.g. copy a
   sibling Modal-series app like `apps/gateway` or the pattern used by
   `apps/rotunda` if it shipped). Rename package to
   `@free-react-templates/concourse`; set `public/CNAME` =
   `concourse.free.componentdock.com` and `"homepage"` =
   `https://concourse.free.componentdock.com`; register via `npm install` at
   root (lockfile). Vite config: keep `injectUiSource()`. Add the jsdom
   localStorage polyfill to `src/test/setup.ts` as needed.
2. **Design tokens** in `src/index.css` `@theme`: `--color-cream: #fff4e4`
   (modal bg), `--color-brand: #ed5107` (Use a coupon button, hover
   `#c84406`), `--color-gray: #6c757d` (launch button + dashed border),
   black `#000`, gray `#777`/CSS `gray` (quote + cancel), white `#fff`.
   Radius: modal **7px**, buttons **4px**. Load **Roboto** via Google Fonts
   `<link>` in `index.html`.
3. **Components** (mirror the section list — see spec Gherkin):
   - `LaunchSection` — full-viewport centered heading "Concourse" + gray
     "Launch Concourse" button (opens modal).
   - `CouponModal` — centered max-w-500px rounded(7px) card, `#fff4e4` bg,
     two-column d-flex: left ~200px cover image (picsum
     `https://picsum.photos/seed/concourse-1/400/600`, `object-cover`) + right
     column (black "60% off coupon" h3 → gray quote → white dashed coupon box
     with a coupon code → full-width orange "Use a coupon" button → centered
     gray "Sorry, I don't want this." cancel link). Open/close via React state
     (launch-to-open; backdrop/Escape/cancel-link-to-close; conditional
     render). NO auto-open on load. NO close × (`aria-label="Close"` hidden or
     omitted), NO email input, NO split buttons.
   - Modal a11y: `role="dialog"`, `aria-modal`, aria-label/labelledby, Escape
     - backdrop click close.
   - `Footer` — minimal Component Dock footer linking
     `https://www.componentdock.com/`.
4. **App.tsx** composes LaunchSection → CouponModal → Footer; set document
   title "Concourse — Coupon Offer Modal".
5. **Tests** (TDD, 100% coverage): launch section heading + gray launch
   button; opening the modal; modal shell (rounded 7px, `#fff4e4` bg, no
   close ×); two-column layout (left image column ~200px object-cover, right
   column content); coupon box (white, dashed border, code text); orange "Use
   a coupon" button; cancel-link dismisses; backdrop + Escape close; footer
   links Component Dock; document title. Query buttons via role; the two
   buttons ("Launch Concourse" / "Use a coupon") are separate surfaces.
   Watch the `aria-hidden` / direct-text-node testing gotchas.
6. **Verify:** `npm run verify:app` (typecheck/lint/knip/fallow/vitest 100%/
   build) for the changed app; `npm run spec:validate`; visual QA the built
   output (two-column layout, dashed coupon box, orange vs gray buttons,
   rounded 7px card, cream bg, images load).
7. **Ship:** commit conventional (`feat:`), push `feat/template-concourse`,
   open PR, **merge immediately** (squash, delete branch), then bookkeep
   (`[x]` + surge URL `https://concourse.free.componentdock.com` +
   `npm run readme:status`).

## Key fidelity pitfalls (from sibling Modal preps)

- The REAL preview lives under `/theme/bootstrap/modal-14/` — the bare
  `/theme/modal-14/` path 404s; always link the real preview in the PR.
- `.btn-primary` is CUSTOM to `#ed5107` (not Bootstrap's `#007bff`, not
  Modal 13's `#c13584`) — do NOT use a default blue.
- This modal has NO close × and NO email input (unlike Rotunda/Modal 13) —
  the only dismiss control is the bottom gray "Sorry, I don't want this."
  cancel link. Don't add extras from a sibling template.
- The left cover image is a fixed ~200px column (`flex: 0 0 200px`,
  `object-cover`) — reproduce the two-column split faithfully; pick a picsum
  seed that renders a suitable vertical product/object photo.
- Coupon box is **2px DASHED gray `#6c757d`** on white, centered black text —
  a real dashed border (Tailwind `border-dashed border-2`), not a solid box.
- Never put ColorLib in app code; footer MUST link Component Dock.
