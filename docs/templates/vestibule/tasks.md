# Vestibule (ColorLib Modal 02) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Vestibule** (NEW
> name — the ColorLib source keeps its name "Modal 02"). Implementation
> ships on `feat/template-vestibule` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 02" — free split sign-in/sign-up modal
  component template (source: https://colorlib.com/wp/template/modal-02/).
  TEMPLATES.md row: line 801 (**Bootstrap Modals (20)**, header line 798).
  The `modal-02` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the
  default `https://preview.colorlib.com/theme/modal-02/` returns **404** —
  the REAL preview is `https://preview.colorlib.com/theme/bootstrap/modal-02/`
  (HTTP 200, 11.0KB HTML; the Bootstrap UI-component series is hosted under
  the `/theme/bootstrap/` prefix, same as Modal 01). Stylesheets:
  `css/style.css` (225.2KB = Bootstrap 4.3.1 + the template's custom ftco
  styles in the last ~4.4KB, starting around char 220803 — token source),
  `css/ionicons.min.css` (close × + Facebook/Twitter logo icons), Poppins
  webfonts via cf-fonts. Screenshot (`modal-02.jpg`, 1200×972 AVIF)
  browser-verified 2026-08-16: the page shown with the modal OPEN — dark
  backdrop, wide purple→peach gradient card, two-column split with "Sign In"
  left / "Sign Up" right, gold buttons, white social buttons, close ×
  top-right.
- **Structure observed (1:1):**
  - `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` → `div.col-md-6.text-center.d-flex.align-items-center`
    → `div.wrap.w-100`: `h2.mb-2` "Modal 02" + `button.btn.btn-primary.py-3.px-4`
    "Launch Modal 02" (gold pill, dark text).
  - `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true; `display:none` until toggled; `.modal { background:
rgba(0,0,0,0.5) }`) → `div.modal-dialog.modal-dialog-centered`
    (max-width **900px**) → `div.modal-content` (border none; **padding
    50px**; font-size 14px; color `rgba(255,255,255,0.8)`; background 45°
    gradient `#c859ff` → `#ffab8c`):
    - header (padding 0, border none): close `button.close.d-flex.align-items-center.justify-content-center`
      40×40 absolute top-right, bg `rgba(0,0,0,0.1)`, `ion-ios-close`,
      aria-label Close.
    - body `p-0` (border none) → `div.row`:
      - LEFT `div.col-md.mb-md-0.mb-5`: `h3.mb-4` "Sign In" (`#fff`, weight 300) + `form.signin-form`: Username input, Password input (both
        `form-control`: transparent bg, border none, height **40px**, color
        `rgba(255,255,255,0.8)`, **border-bottom 1px rgba(255,255,255,0.2)**,
        radius 0 — underline style), submit `button.form-control.btn.btn-primary.rounded.submit.px-3`
        "Sign In" (full-width, height **52px**, weight 500, gold bg, dark
        text), row `label.fill-checkbox` "Remember Me" (`--color: #f9e090`;
        description `rgba(255,255,255,0.6)`, checked → fill `#f9e090` +
        text `#fff`) + "Forgot Password" link (inline `color:#fff`) on the
        right, `p.w-100.text-center` "— Or Sign In With —", `div.social.d-flex.text-center`
        → two `a.px-2.py-3.rounded` width-100% white buttons (color `#000`,
        1px border `rgba(255,255,255,0.4)`, hover transparent + white text):
        Facebook + Twitter (ion-logo icons).
      - DIVIDER `div.col-md-1.divider` — `.divider:after` 1px vertical
        line `rgba(255,255,255,0.2)`, `width:1px; height:100%; margin:0
auto`.
      - RIGHT `div.col-md`: `h3.mb-4` "Sign Up" (`#fff`, weight 300) +
        `form.signup-form`: First Name, Last Name, Email address, Password
        inputs (same underline style), submit "**Login**" (the ORIGINAL
        mislabels the Sign Up submit "Login" — match the quirk), `p.mb-0`
        "By creating an account, your agree to our terms." (original typo
        "your").
  - NO navbar, NO images, NO other sections. NO footer in the original —
    add the mandatory Component Dock attribution footer (repo convention).
  - `js/main.js`: `fullHeight()` sets `.js-fullheight` height to the window
    height (recreate with `min-h-screen` flex centering — no JS resize
    needed). The modal opens only via the launch button (Bootstrap toggle).
- **Design tokens:** gradient **#c859ff → #ffab8c** (45° — the modal's
  surface); accent gold **#f9e090** (buttons, checkbox `--color`, focus
  borders — dark `#000` text on gold); page `#fff`; backdrop
  `rgba(0,0,0,0.5)`; text `rgba(255,255,255,0.8)` on gradient, headings
  `#fff` weight 300, muted `rgba(255,255,255,0.6)` (checkbox), white on
  white social buttons `#000`; font **Poppins** (modal body 14px, headings
  300); launch pill radius **40px**; in-modal submits 52px tall / 0.25rem
  radius; in-modal inputs 40px tall underline (border-bottom
  `rgba(255,255,255,0.2)`); modal max-width **900px**, content padding
  **50px**; divider 1px `rgba(255,255,255,0.2)`; close button 40×40
  `rgba(0,0,0,0.1)`.

## Implementation tasks (ordered)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/portico`),
   rename package to `@free-react-templates/vestibule`; update
   `public/CNAME` → `vestibule.free.componentdock.com`, `"homepage"` →
   `https://vestibule.free.componentdock.com`; keep the `injectUiSource()`
   pattern in `vite.config.ts`; `npm install` at repo root so
   `package-lock.json` registers the workspace (`grep -c
"free-react-templates/vestibule" package-lock.json` ≥ 1); Poppins via
   Google Fonts `<link>` in `index.html` (300–900 like the source);
   document title "Vestibule — Split Sign-In/Sign-Up Modal". No
   ColorLib references anywhere in app files.
2. **`src/index.css`** — `@theme` tokens: `--color-brand: #f9e090` (gold);
   gradient handled via arbitrary values `bg-gradient-to-tr
from-[#c859ff] to-[#ffab8c]` (45deg = `to-tr` in Tailwind; the source
   `linear-gradient(45deg, …)` runs bottom-left → top-right).
3. **Components:**
   - `LaunchPage.tsx` — white `min-h-screen` flex-centered section: h2
     "Vestibule" + gold pill button "Launch Sign-In" (bg-brand, dark text,
     `rounded-full` 40px radius, `py-3 px-4` proportions); button opens the
     modal (onLaunch callback / state lift).
   - `SplitModal.tsx` — state-driven overlay: conditional render when open;
     dark backdrop (`bg-black/50` + fade), centered card max-w 900px,
     gradient bg, 50px padding, `rounded` (source card has no shadow —
     none needed); close via ×, backdrop click, Escape; focus the close
     button on open, restore to launch button on close (ref + useEffect);
     `role="dialog"` `aria-modal="true"`; close × top-right (40×40,
     `bg-black/10`, lucide `X`, `aria-label="Close"`); internal layout:
     `flex flex-col md:flex-row` — left form (`md:flex-1`), divider
     (`hidden md:block w-px bg-white/20 self-stretch` — the source uses a
     centered 1px line in a col-md-1), right form (`md:flex-1`); on mobile
     the columns stack (source `mb-md-0 mb-5` spacing).
   - `SignInForm.tsx` — h3 "Sign In" (white, font-light), Username +
     Password underline inputs (transparent bg, `border-b border-white/20`,
     h-10 40px, placeholder `text-white/80`), full-width gold submit
     "Sign In" (h-13 52px, `rounded`, dark text), "Remember Me" custom
     checkbox (peer-checked fills gold `#f9e090`; description
     `text-white/60`, checked `text-white`), "Forgot Password" link
     (white) right-aligned, "— Or Sign In With —" centered, two full-width
     white rounded social buttons (border `border-white/40`, `text-black`,
     hover inverted to transparent + white) with lucide `Facebook` /
     `Twitter` icons + labels. Client-side validation (zod or manual):
     empty field → inline error, block submit; valid submit → success state
     (swap the column to a confirmation, unmount inputs — assert absence
     with `queryByLabelText`).
   - `SignUpForm.tsx` — h3 "Sign Up" (white, font-light), First Name, Last
     Name, Email address, Password underline inputs, full-width gold submit
     labeled "Login" (match the source quirk — note it in the PR), terms
     line "By creating an account, your agree to our terms." (keep or fix
     the "your" typo — decide and note in PR). Same validation pattern.
   - `Footer.tsx` — minimal muted line linking
     `https://www.componentdock.com/` ("More templates at Component Dock").
4. **App.tsx** — compose `LaunchPage` (in `<main>`) + `Footer` (in
   `<footer>`), hold `isOpen` state, render `SplitModal` when open.
   `main.tsx` sets document title.
5. **Tests (TDD, 100% coverage)** — one `describe` per component mirroring
   the spec's Gherkin scenarios:
   - LaunchPage: heading + gold pill button render; button opens the modal
     (onOpen callback or state).
   - SplitModal: dialog role/aria-modal; open shows backdrop + gradient
     card; close via ×, backdrop click, and Escape; focus management (close
     btn focused on open, launch btn refocused on close).
   - SignInForm: fields + labels; empty submit → validation message + no
     submit; valid submit → success state and inputs unmount; Remember Me
     toggles; Forgot Password link present with href; social buttons
     (Facebook/Twitter) present.
   - SignUpForm: 4 fields; empty submit blocked; valid submit → success;
     submit labeled "Login"; terms line present.
   - Footer: Component Dock link with correct href.
   - App: full composition — main landmark contains launch section,
     contentinfo contains footer.
   - jsdom note: if a `MemoryStorage` polyfill pattern is needed (jsdom 30
     removed localStorage), copy it from `apps/cura/src/test/setup.ts` —
     only if the app uses localStorage (this template likely doesn't).
6. **Gate + ship** — `scripts/verify-app.sh vestibule` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single TEMPLATES.md
   row (line 801) `[x]` with `https://vestibule.free.componentdock.com` +
   `npm run readme:status`.

## Pitfalls / notes for the implementer

- The in-modal submits are `form-control btn btn-primary rounded submit` —
  the `.rounded` Bootstrap utility (0.25rem !important) overrides the pill
  `.btn` 40px radius, so the in-modal buttons are only slightly rounded,
  while the LAUNCH button stays a full pill. Match that distinction.
- The Sign Up submit is labeled "Login" in the original — a source quirk;
  the Sign In submit is "Sign In". Do not "fix" the labels to both say
  "Sign In"/"Sign Up" without noting the deviation in the PR.
- Terms line text: "By creating an account, your agree to our terms." —
  original typo ("your" vs "you"). Keep the content kind; fixing the typo
  is acceptable but MUST be noted in the PR description.
- Gradient direction: source is `linear-gradient(45deg, #c859ff, #ffab8c)`.
  Tailwind `bg-gradient-to-tr` = 45deg (bottom-left → top-right). Do NOT
  use `to-br` (135deg) — the purple would land top-left.
- Source headings say "Modal 02" / "Launch Modal 02" — the recreation uses
  the NEW brand name ("Vestibule" / "Launch Sign-In"). Keep the structure
  and content kinds identical.
- No images in the source — do NOT invent picsum seeds; the page is
  typography + forms + dialog only.
- Probe lucide exports first: `node -e "console.log(typeof
require('lucide-react').X, typeof require('lucide-react').Facebook,
typeof require('lucide-react').Twitter)"` — all should be `function`.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid `aria-hidden` dance entirely.
- The source card has NO box-shadow (unlike Modal 01's `0 10px 34px -15px`)
  — don't add one; the gradient card sits flat on the dark backdrop.
- Launch-page `.form-control` rules (52px/5px/1px border) are series
  leftovers NOT used by this page (no visible inputs outside the modal) —
  ignore them.
