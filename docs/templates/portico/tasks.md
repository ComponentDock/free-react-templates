# Portico (ColorLib Modal 01) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Portico** (NEW name —
> the ColorLib source keeps its name "Modal 01"). Implementation ships on
> `feat/template-portico` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 01" — free single-page sign-in-modal component
  template (source: https://colorlib.com/wp/template/modal-01/). TEMPLATES.md
  row: line 800 (**Bootstrap Modals (20)**, header line 798). The `modal-01`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-01/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-01/`
  (HTTP 200, 9.6KB HTML; the Bootstrap UI-component series is hosted under
  the `/theme/bootstrap/` prefix — the ColorLib template page's "Live
  Preview" href reveals it). Stylesheets: `css/style.css` (223.2KB =
  Bootstrap 4.3.1 + the template's custom ftco styles in the LAST ~90 lines,
  around line 8240 — token source), `css/ionicons.min.css` (close × +
  person icon), Poppins webfonts. Screenshot (`modal-01.jpg`, 1200×972)
  browser-verified 2026-08-16: the page shown with the modal OPEN — flat grey
  backdrop, centered white dialog with drop shadow, rose circular user icon,
  "Sign In", Username/Password fields, wide rose Login button, Remember Me +
  Forgot Password row, footer "Not a member? Create an account", close ×
  top-right.
- **Structure observed (1:1):**
  - `section.ftco-section` (bg `#fff`) → `div.container` →
    `div.row.justify-content-center.js-fullheight` → `div.col-md-6.text-center.d-flex.align-items-center`
    → `div.wrap.w-100`: `h2.mb-2` "Modal 01" + `button.btn.btn-primary.py-3.px-4`
    "Launch Modal 01".
  - `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true; `display:none` until toggled; dark backdrop) →
    `div.modal-dialog.modal-dialog-centered` (max-width 450px) →
    `div.modal-content` (border none; `box-shadow: 0px 10px 34px -15px
rgba(0,0,0,0.24)`):
    - header (padding 0, border none): close `button.close` 40×40 absolute
      top-right, `ion-ios-close`, aria-label Close.
    - body `p-4 p-md-5`: `div.icon` 80×80 circle, 1px `#fb8691` border,
      radius 50%, margin auto, `ion-ios-person` in `#fb8691`; `h3.text-center.mb-4`
      "Sign In"; `form.login-form`: Username input, Password input (both
      `form-control rounded-left`: 52px, 5px radius, 1px `rgba(0,0,0,0.1)`
      border, rose focus border), submit `button.form-control.btn.btn-primary.rounded.submit.px-3`
      "Login" (full-width, 52px, 0.25rem radius via `.rounded` !important —
      NOT the pill), row with `label.fill-checkbox` "Remember Me" (hidden
      input + indicator; checked → `#fb8691` fill, label `#fb8691`) + link
      "Forgot Password" (rose) right-aligned.
    - footer `.justify-content-center` (border none, bg `#f8f8f8`): "Not a
      member?" + `a` "Create an account" (rose).
  - NO navbar, NO images, NO other sections. NO footer in the original — add
    the mandatory Component Dock attribution footer (repo convention).
  - `js/main.js`: `fullHeight()` sets `.js-fullheight` height to the window
    height (recreate with `min-h-screen` flex centering — no JS resize
    needed). The `$('#exampleModalCenter').modal('show')` line is COMMENTED
    OUT — the modal opens only via the launch button.
- **Design tokens:** rose **#fb8691** (buttons, links, icon border, checkbox,
  focus borders — the ONLY accent); page `#fff`; modal footer `#f8f8f8`;
  modal shadow `0 10px 34px -15px rgba(0,0,0,0.24)`; text `#212529` (inputs
  `#000`), muted `rgba(0,0,0,0.4)`; font **Poppins** (body 15px/1.8, headings
  400, inputs 16px); launch pill radius **40px**; form-control 52px / 5px
  radius; dialog max-width 450px; icon 80px circle; close 40×40.
- **Design approach:** one interactive surface. White full-viewport centered
  launch page → state-driven modal overlay (no Bootstrap): dark backdrop
  fade, centered 450px white card with the source shadow, rose icon circle +
  "Sign In" heading, Username/Password, full-width rose Login, custom rose
  checkbox + Forgot Password, `#f8f8f8` footer "Not a member? Create an
  account", minimal Component Dock footer. Pure typography + form + dialog —
  no images at all (skip picsum entirely).

## Implementation tasks

1. **Scaffold** `apps/portico` from the simplest existing app (e.g.
   `apps/pleat` or `apps/vesper`): rename package to
   `@free-react-templates/portico`, `public/CNAME` =
   `portico.free.componentdock.com`, homepage
   `https://portico.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace (grep
   `free-react-templates/portico` to verify).
2. **Theme (index.css)** — `@theme` tokens:
   `--color-brand: #fb8691`, `--color-ink: #212529`, `--color-muted:
rgba(0,0,0,0.4)` (or `#a3a3a3`), `--color-footer: #f8f8f8`; Poppins via
   Google Fonts `<link>` in index.html (400/500/600/700).
3. **Data (src/data.ts)** — copy strings: brand "Portico", button "Launch
   Sign-In", heading "Sign In", placeholders Username/Password, "Login",
   "Remember Me", "Forgot Password", "Not a member?", "Create an account".
4. **Components (src/components/)**:
   - `LaunchPage.tsx` — full-viewport (`min-h-screen`) white section,
     centered column: h2 "Portico" + rose pill button (rounded-full, solid
     `#fb8691`, white text, py-3 px-4). Button opens the modal (state lifted
     to App or context).
   - `SignInModal.tsx` — `role="dialog"` `aria-modal="true"`, visible only
     when open (conditional render; backdrop + Escape + × close; focus the
     close button on open, restore to launch button on close — use a ref +
     useEffect). 450px card (`max-w-[450px]`), `shadow-[0_10px_34px_-15px_rgba(0,0,0,0.24)]`,
     close × top-right (40×40, lucide `X`, `aria-label="Close"`), 80px rose
     circle (`rounded-full border border-brand`) with lucide `User` in
     `#fb8691`, h3 "Sign In".
   - `LoginForm.tsx` — Username + Password inputs (h-13 52px, rounded-[5px],
     border `rgba(0,0,0,0.1)`, focus border brand), full-width rose Login
     submit (52px tall, rounded-[4px], white text), custom "Remember Me"
     checkbox (peer-checked fills brand), "Forgot Password" link (rose,
     right-aligned). Client-side validation (zod or manual): empty field →
     inline error, block submit; valid submit → success state (swap dialog
     body to a confirmation, unmount the form inputs — assert absence with
     `queryByLabelText`).
   - `Footer.tsx` — minimal muted line linking
     `https://www.componentdock.com/` ("More templates at Component Dock").
5. **App.tsx** — compose `LaunchPage` (in `<main>`) + `Footer` (in
   `<footer>`), hold `isOpen` state, render `SignInModal` when open.
   `main.tsx` sets document title "Portico — Sign-In Modal".
6. **Tests (TDD, 100% coverage)** — one `describe` per component mirroring
   the spec's Gherkin scenarios:
   - LaunchPage: heading + pill button render; button opens the modal
     (onOpen callback or state).
   - SignInModal: dialog role/aria-modal; open shows backdrop + card; close
     via ×, backdrop click, and Escape; focus management (close btn focused
     on open, launch btn refocused on close).
   - LoginForm: fields + labels; empty submit → validation message + no
     submit; valid submit → success state and inputs unmount
     (`queryByLabelText(...)` absent); Remember Me toggles; Forgot Password
     - Create an account links present with correct hrefs.
   - Footer: Component Dock link with correct href.
   - App: full composition — main landmark contains launch section,
     contentinfo contains footer.
   - jsdom note: if a `MemoryStorage` polyfill pattern is needed (jsdom 30
     removed localStorage), copy it from `apps/cura/src/test/setup.ts` —
     only if the app uses localStorage (this template likely doesn't).
7. **Gate + ship** — `scripts/verify-app.sh portico` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single TEMPLATES.md
   row (line 800) `[x]` with `https://portico.free.componentdock.com` + `npm
run readme:status`.

## Pitfalls / notes for the implementer

- The Login submit is `form-control btn btn-primary rounded submit` — the
  `.rounded` Bootstrap utility (0.25rem !important) overrides the pill
  `.btn` 40px radius, so the Login button is only slightly rounded, unlike
  the pill launch button. Match that distinction.
- Source heading says "Modal 01" / "Launch Modal 01" — the recreation uses
  the NEW brand name ("Portico" / "Launch Sign-In"). Keep the structure and
  content kinds identical (kind: heading + one CTA).
- No images in the source — do NOT invent picsum seeds; the page is
  typography + form + dialog only.
- Probe lucide exports first: `node -e "console.log(typeof
require('lucide-react').X, typeof require('lucide-react').User)"` — both
  should be `function`.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid `aria-hidden` dance entirely.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow.
