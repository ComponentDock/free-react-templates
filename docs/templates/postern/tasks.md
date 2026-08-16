# Postern (ColorLib Modal 12) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Postern** (NEW name —
> the ColorLib source keeps its name "Modal 12"/`modal-12`). Implementation
> ships on `feat/template-postern` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 12" — free single-page photo newsletter/offer
  modal component template (source:
  https://colorlib.com/wp/template/modal-12/). TEMPLATES.md row: line 811
  (**Bootstrap Modals (20)**, header line 798). The `modal-12` slug appears
  exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-12/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-12/`
  (HTTP 200, ~17.9KB HTML, `<title>` "Modal #2"). Stylesheets: `css/style.css`
  (2.7KB — custom styles; token source), `css/bootstrap.min.css` (Bootstrap
  4.3.1 — `#007bff` primary, `.modal`, `.form-control`, `.btn`),
  `fonts/icomoon/style.css` (the close × `icon-close2` glyph). **Roboto**
  system font stack (no Google-Fonts/cf-fonts link — load Roboto via Google
  Fonts in `index.html`). NO custom `js/` behavior beyond Bootstrap's data-API
  (`data-toggle` opens, `data-dismiss` closes). Screenshot (`modal-12.jpg`,
  1200×972, AVIF) + live in-browser render verified 2026-08-16: ROUNDED (7px)
  modal over dimmed page; full-body leather/wallet photo (tan/brown ⇄
  blue/black diagonal) with dark overlay; header bar = Google Drive tri-color
  logo + "Exclusive Offer" (center) + close ×, under a thin white divider;
  body = white "Get a free a Ebook", a short white quote, a white email input
  - bright-blue "Subscribe" button, and a dim "Maybe later" cancel link.
- **Structure observed (1:1):**
  - Launch: `div.container.content` (**height 100vh**) → `row.align-items-center` →
    `col-12.text-center`: `h3.mb-4` "Modal #2" + `button.btn.btn-primary.px-4.py-3`
    "Launch modal" (custom `.btn { border-radius: 4px; border: none; }`;
    Bootstrap `.btn-primary`: bg **`#007bff`**, white text, hover `#0069d9`).
  - Modal `div.modal.fade#exampleModalCenter` → `modal-dialog.modal-dialog-centered`
    (max-width 500px) → `modal-content.rounded-0` (custom: transparent bg,
    border none, **radius 7px**) →
    `div.modal-body.bg-image.overlay` (photo `images/hero_1.jpg`, cover/center;
    radius 7px; color #fff; no x-padding; **dark shadow `0 10px 50px -10px
rgba(0,0,0,0.9)`**; `.overlay:before` = full-body `rgba(0,0,0,0.5)`;
    `.to-front` children `z-index:2`) →
    - `div.line.px-3.to-front` (`.line` = `border-bottom: 1px solid
rgba(255,255,255,0.3)`; padding-bottom 10px) → `row.align-items-center`:
      `col.logo` `<img google-drive.svg width 30px>` | `col-md-8.text-center`
      `h2` "Exclusive Offer" (**18px**, `.modal-body h2`) | `col.text-right`
      `a.close-btn` × (`.modal .modal-body .close-btn { color:#fff }`,
      `data-dismiss`, `aria-label="Close"`).
    - `div.p-4.to-front` → `div.text-center`: `h3` "Get a free a Ebook"
      (**22px**, `.modal-body h3 { color:#fff }`) → `p.mb-4` quote (`.modal-body
p { color:#fff }`, 300-weight) → `form.d-flex.mb-4` (`input[type=email]
.form-control.mr-3` placeholder "Enter your email address", transparent
      border, no focus shadow; `input[type=submit] .btn-primary` "Subscribe",
      radius 4px) → `p.mb-0.cancel` `<a data-dismiss>` "Maybe later"
      (`.modal .cancel a { color: rgba(255,255,255,0.5); font-size:13px;
font-weight:bold }`, hover `#fff`).
  - Footer: original has None → add minimal Component Dock footer (repo rule).
- **Design tokens:**
  - Blue **#007bff** (launch + Subscribe buttons), hover `#0069d9`.
  - White **#fff** — modal text, close ×, button text, email input bg.
  - Dark overlay **rgba(0,0,0,0.5)** over photo; shadow `0 10px 50px -10px
rgba(0,0,0,0.9)`; backdrop `#000`.
  - Rounded: dialog **7px**, buttons/input **4px**, border none.
  - Font: **Roboto** (Google Fonts `<link>` in index.html).
  - Header divider `.line`: `1px solid rgba(255,255,255,0.3)`, padding-bottom 10px.
  - Cancel link `rgba(255,255,255,0.5)`, 13px bold, hover white.
- **Asset replacement (do NOT copy source assets):**
  - Photo bg → picsum seed, e.g. `https://picsum.photos/seed/postern-1/600/600`
    (`background-size: cover`; pick a rich textured/dark-ish image).
  - Close × → lucide `X` icon (white).
  - Header logo → NEUTRAL placeholder (~30px): a simple multi-color triangle
    inline SVG touch OR a generic lucide document/envelope icon — **never the
    Google Drive trademark.**

## Implementation tasks (on `feat/template-postern`)

- [ ] Copy the simplest existing app (e.g. `apps/vestry`) as `apps/postern`;
      rename package to `@free-react-templates/postern`; set `public/CNAME` =
      `postern.free.componentdock.com` and `"homepage"` =
      `https://postern.free.componentdock.com`; add Google-Fonts Roboto link +
      font-family in `index.html`/`index.css`.
- [ ] `@theme` tokens: `--color-primary: #007bff`, white, overlay
      `rgba(0,0,0,0.5)`, shadow, radii (7px dialog / 4px controls).
- [ ] `Navbar`/`Hero`: NOT part of this template — skip (no navbar). Implement
      only the launch section component (full-viewport centered heading +
      blue rounded launch button).
- [ ] `OfferModal` component: conditional render (not in DOM when closed);
      `role="dialog"` + `aria-modal` + `aria-label`; open via launch button;
      close via close × / backdrop click / Escape.
  - [ ] Header bar: neutral logo placeholder (30px) + "Exclusive Offer"
        (18px, centered) + close ×, under translucent-white divider.
  - [ ] Body over photo bg + dark overlay: white "Get a free a Ebook" (22px) +
        white quote + email input ("Enter your email address", transparent
        border) + blue "Subscribe" button + "Maybe later" cancel link.
- [ ] Footer: minimal "Component Dock" attribution linking
      `https://www.componentdock.com/`.
- [ ] Tests (100% coverage): launch section renders; button opens modal;
      modal a11y; close via × / backdrop / Escape; email + subscribe present;
      "Maybe later" dismisses; footer link.
- [ ] `npm run verify:app postern` gate, then PR → immediate merge.
