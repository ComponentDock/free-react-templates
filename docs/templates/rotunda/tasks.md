# Rotunda (ColorLib Modal 13) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Rotunda** (NEW name —
> the ColorLib source keeps its name "Modal 13"/`modal-13`). Implementation
> ships on `feat/template-rotunda` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 13" — free single-page Instagram
  newsletter/offer modal component template (source:
  https://colorlib.com/wp/template/modal-13/). TEMPLATES.md row: line 812
  (**Bootstrap Modals (20)**, header line 798). The `modal-13` slug appears
  exactly once (no dup rows to mark). Demo `<title>`/heading is the generic
  "Modal #3".
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-13/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-13/`
  (HTTP 200, ~18.0KB HTML, `<title>` "Modal #3"). Stylesheets:
  `css/style.css` (2.9KB — custom styles; token source), `css/bootstrap.min.css`
  (Bootstrap 4.3.1 — **CUSTOMIZED: `.btn-primary` = `#c13584`** (Instagram
  magenta-pink) instead of the default `#007bff`), `fonts/icomoon/style.css`
  (close × `icon-close2`). cf-fonts load Roboto/Poppins/Source Serif Pro but
  `css/style.css` assigns **Roboto** to body + headings (the used font). NO
  custom `js/`: `js/main.js` is empty (auto-open commented out); open/close is
  Bootstrap data-API only. Screenshot (`modal-13.jpg`, 1200×972) + live render
  verified 2026-08-16: ROUNDED (7px) modal over a light page; **solid pale-pink
  `#f9eaf2`** card (NO photo, NO dark overlay); centered **Instagram gradient
  camera logo**; black "Exclusives offer from Instagram"; small gray quote;
  white rounded full-width email input; split buttons — left gray "No, thanks"
  (`btn-secondary`), right **magenta-pink "Subscribe" (`#c13584`)**; faint gray
  small line at bottom.
- **Structure observed (1:1):**
  - Launch: `div.container.content` (**height 100vh**) →
    `row.align-items-center` → `col-12.text-center`:
    `h3.mb-4` "Modal #3" + `button.btn.btn-secondary.px-4.py-3` "Launch modal"
    (custom `.btn { border-radius: 4px; border: none; }`; Bootstrap
    `.btn-secondary`: bg **`#6c757d`**, white text, hover `#5a6268`).
  - Modal `div.modal.fade#exampleModalCenter` → `modal-dialog.modal-dialog-centered`
    (max-width 500px) → `modal-content.rounded-0` (custom: transparent bg,
    border none, **radius 7px**) → `div.modal-body.bg-3` (**`#f9eaf2`** solid
    pink; radius 7px; color #fff; no x-padding; **dark shadow `0 10px 50px
-10px rgba(0,0,0,0.9)`**; `.to-front` children `z-index:2`; NO
    `.bg-image`/`.overlay` here) →
    - `div.px-3.to-front` → `row.align-items-center` → `col.text-right` →
      `a.close-btn` × (`.modal-body .close-btn { color:#000 }` — **BLACK`,
right-aligned alone`** — no logo bar, no "Exclusive Offer", no divider,
      unlike Postern; recreate with a black lucide `X`).
    - `div.p-4.to-front` → `div.text-center`:
      `div.logo` <img `images/instagram-2-1.svg` class="img-fluid mb-4">
      (`.logo img { width: 70px }` **70px**) — Instagram trademark → NEUTRAL
      ~70px placeholder (generic camera/social/mail icon or neutral SVG);
      → `h3` "Exclusives offer from Instagram" (`.modal-body h3 { color:#000;
font-size:22px }` → **22px BLACK**; paraphrase the Instagram brand name
      neutrally, keep exclusive-offer kind) →
      `p.mb-4` quote (`.modal-body p { color:#777 }`, 300-weight) →
      `form.mb-4`: `div.form-group` (`input[type=email].form-control.w-100.mr-3`
      placeholder "Enter your email address", transparent border,
      `box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1)`, no focus shadow) → `div.row`
      (`col-6` `button.btn.btn-secondary.btn-block` "No, thanks"
      `data-dismiss` | `col-6` `button.btn.btn-primary.btn-block` "Subscribe"
      `.btn-primary` **`#c13584`**) → `p.mb-0.cancel` `<small>` repeated gray
      prose (inert text — NOT a link, unlike Postern's "Maybe later").
  - Footer: original has None → add minimal Component Dock footer (repo rule).
- **Design tokens:**
  - Light-pink **#f9eaf2** — modal bg (`.bg-3`; NO photo / NO overlay).
  - Instagram magenta-pink **#c13584** — PRIMARY/"Subscribe" button
    (custom `.btn-primary`), white text, hover `#a32d6f`, active `#992a69`,
    focus ring `rgba(202,83,150,0.5)`. NOT the default `#007bff`.
  - Gray **#6c757d** — SECONDARY/launch + "No, thanks" buttons (`.btn-secondary`),
    white text, hover `#5a6268`.
  - Black **#000** — close × (`.close-btn`) + h3 heading.
  - Gray **#777** — modal paragraph + bottom small line (`.modal-body p`).
    Global `p` outside modal = `#b3b3b3`.
  - White **#fff** — button text, email input bg, `.modal a`.
  - Shadows: email input `0 2px 2px 0 rgba(0,0,0,0.1)`; modal body
    `0 10px 50px -10px rgba(0,0,0,0.9)`; backdrop `#000` (~50%).
  - Rounded: dialog **7px**, buttons **4px** (border none), input ~4px.
  - Font: **Roboto** (Google Fonts `<link>` in index.html) — body + headings.
  - Instagram logo `.logo img { width:70px }` + `mb-4`; close × → black
    lucide `X`; heading brand name paraphrased neutrally.
- **Asset replacement (do NOT copy source assets):**
  - Instagram logo → neutral ~70px placeholder (generic camera/mail/social
    lucide icon or a neutral multi-color SVG) — never the Instagram mark.
  - Close × → lucide `X` icon (black).
  - No photos in this template (solid pink card) — no picsum needed for the
    modal bg (it is a flat color).

## Implementation tasks (on `feat/template-rotunda`)

- [ ] Copy the simplest existing app (e.g. `apps/postern` or `apps/vestry`) as
      `apps/rotunda`; rename package to `@free-react-templates/rotunda`; set
      `public/CNAME` = `rotunda.free.componentdock.com` and `"homepage"` =
      `https://rotunda.free.componentdock.com`; add Google-Fonts Roboto link +
      font-family in `index.html`/`index.css`.
- [ ] `@theme` tokens: `--color-primary: #c13584` (Instagram magenta-pink),
      `--color-secondary: #6c757d` (gray), `--color-accent-pink: #f9eaf2`
      (modal bg), black, gray `#777`, shadows, radii (7px dialog / 4px
      controls). NOTE: primary is `#c13584`, NOT `#007bff` (custom template).
- [ ] `Navbar`/`Hero`: NOT part of this template — skip. Implement only the
      launch section (full-viewport centered heading + GRAY rounded launch
      button `btn-secondary`-style).
- [ ] `OfferModal` component: conditional render (not in DOM when closed);
      `role="dialog"` + `aria-modal` + `aria-label`; open via launch button;
      close via close × / backdrop click / Escape.
  - [ ] Top row: BLACK close × alone, right-aligned (lucide `X`).
  - [ ] Centered body on **solid pink `#f9eaf2`** (no photo/overlay): neutral
        70px logo (mb-4) + black "exclusive offer" h3 (22px, paraphrase the
        Instagram brand name away) + gray `#777` quote + full-width email
        input (transparent border, faint shadow) + split buttons "No, thanks"
        (gray, dismisses) | "Subscribe" (magenta `#c13584`) + inert gray small
        line at bottom.
- [ ] Footer: minimal "Component Dock" attribution linking
      `https://www.componentdock.com/`.
- [ ] Tests (100% coverage): launch section renders; GRAY button opens modal;
      modal a11y; close via × / backdrop / Escape; email + split buttons
      present; "No, thanks" dismisses; "Subscribe" present; footer link.
- [ ] `npm run verify:app rotunda` gate, then PR → immediate merge.
