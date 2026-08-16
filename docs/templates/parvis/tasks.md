# Parvis (ColorLib Modal 17) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Parvis** (NEW name —
> the ColorLib source keeps its name "Modal 17"). Implementation ships on
> `feat/template-parvis` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 17" — free single-page login-modal component
  template (source: https://colorlib.com/wp/template/modal-17/). TEMPLATES.md
  row: line 816 (**Bootstrap Modals (20)**, header line 798). The `modal-17`
  slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-17/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-17/`
  (HTTP 200, 17.8KB HTML; the Bootstrap UI-component series is hosted under
  the `/theme/bootstrap/` prefix — the ColorLib template page's "Live
  Preview" href reveals it). Stylesheets: `css/style.css` (2.9KB — the
  demo's custom styles, token source) and `css/bootstrap.min.css` (178KB —
  Bootstrap 4.3.1 **customized: `.btn-primary` = `#ed5107`**, NOT the
  default `#007bff`; `.btn-secondary` standard `#6c757d`).
  `fonts/icomoon/style.css` is linked but UNUSED in the body. Roboto
  webfonts (weight 300 loaded). Screenshot (`modal-17.jpg`, 1200×972)
  browser-verified 2026-08-16: the page shown with the modal OPEN —
  grayish blurred backdrop, centered light-gray SQUARE dialog with a
  prominent rust-orange top bar (the 4px `#ed5107` border), "Log In"
  heading, two white inputs, rectangular rust-orange "Login" button (white
  text), dark-gray "Forgot password" link, bottom line "If you don't have
  account yet? Sign up here".
- **Structure observed (1:1):**
  - `div.container.content` (height 100vh via `.content` — recreate with
    `min-h-screen`) → `div.row.align-items-center.content` →
    `div.col-12.text-center`: `h3.mb-4` "Modal #7" +
    `button.btn.btn-secondary.px-4.py-3` "Launch modal" (gray `#6c757d`
    fill, white text, 4px radius).
  - `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-hidden true; `display:none` until toggled; dark backdrop) →
    `div.modal-dialog.modal-md.modal-dialog-centered` (**`modal-md` has NO
    rule in Bootstrap 4.3.1 → default max-width 500px**) →
    `div.modal-content.rounded-0` (bg transparent, border none, radius 0):
    - `div.modal-body.py-0` (custom: bg **`#efefef`**, `border-top: 4px
solid #ed5107`, radius 0, `overflow: hidden`,
      `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`):
      - `div.d-flex.main-content` → `div.content-text.p-4` (SINGLE column —
        no image column in this demo):
        - `h3` "Log In" (black, 22px).
        - `p` "All their equipment and instruments are alive. The sky was
          cloudless and of a deep dark blue." (#777, 14px — generic filler;
          paraphrase as the same kind of intro line).
        - `form action="#"`:
          - `.form-group` `label[for=name]` "Username/Email" +
            `input#email.form-control[type=email][placeholder="Enter
email"]` (QUIRK: `for`/`id` mismatch — fix).
          - `.form-group` `label[for=password]` "Password" +
            `input#password.form-control[type=password][placeholder="Full
Name"]` (QUIRK: placeholder is a copy-paste bug — use "Enter
            password").
          - `.form-group.d-flex.align-items-center`:
            `input[type=submit][value=Login].btn.btn-primary.mr-3.px-5`
            (#ed5107, white text, 4px radius, ~42px tall) + `p.custom-note.mb-0`
            > `a` "Forgot password".
          - `.form-group`: `p.custom-note` > `small` "If you don't have
            account yet" + `a` "Sign up here" (#555, weight 900).
  - NO modal-header, NO close ×, NO icons — dismiss via backdrop/Escape
    only (Bootstrap default). `js/main.js` auto-open is COMMENTED OUT.
  - NO navbar, NO images, NO other sections. NO footer in the original —
    add the mandatory Component Dock attribution footer (repo convention).
- **Design tokens:** burnt orange **#ed5107** (btn-primary fill + border;
  modal-body 4px top border — the ONLY accent); launch gray **#6c757d**
  (btn-secondary); card **#efefef**; page **#fff**; h3 **#000** (22px);
  modal p **#777** (14px, weight 300); global p **#b3b3b3** (weight 300);
  `.custom-note` **#999** with links **#555** (weight 900); modal shadow
  `0 10px 50px -10px rgba(0,0,0,0.9)`; form-control shadow
  `0 1px 3px 0 rgba(0,0,0,0.2)` (border NONE); font **Roboto** (300/400/
  700/900); ALL buttons radius **4px** (no pills); dialog max-width 500px,
  square corners (radius 0).
- **Design approach:** one interactive surface. White full-viewport centered
  launch page (h3 "Parvis" + gray button) → state-driven modal overlay (no
  Bootstrap): dark backdrop fade, centered 500px SQUARE light-gray card with
  the 4px orange top bar + heavy shadow, "Log In" heading, 2 labeled
  borderless inputs, orange Login submit + Forgot password row, small
  sign-up line, minimal Component Dock footer. Pure typography + form +
  dialog — no images, no icons (skip picsum AND lucide entirely).

## Implementation tasks

1. **Scaffold** `apps/parvis` from the simplest existing app (e.g.
   `apps/pleat` or `apps/vesper`): rename package to
   `@free-react-templates/parvis`, `public/CNAME` =
   `parvis.free.componentdock.com`, homepage
   `https://parvis.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace (grep
   `free-react-templates/parvis` to verify).
2. **Theme (index.css)** — `@theme` tokens:
   `--color-brand: #ed5107`, `--color-card: #efefef`,
   `--color-ink: #000`, `--color-para: #777`, `--color-note: #999`,
   `--color-link: #555`, `--color-launch: #6c757d`; Roboto via Google
   Fonts `<link>` in index.html (300/400/700/900).
3. **Data (src/data.ts)** — copy strings: brand "Parvis", button "Launch
   modal", heading "Log In", intro line (paraphrased), labels
   "Username/Email" + "Password", placeholders "Enter email" + "Enter
   password", submit "Login", "Forgot password", "If you don't have
   account yet", "Sign up here".
4. **Components (src/components/)**:
   - `LaunchPage.tsx` — full-viewport (`min-h-screen`) white section,
     centered column: h3 "Parvis" + gray button (bg `#6c757d`, white text,
     rounded-[4px], px-4 py-3). Button opens the modal (state lifted to App
     or context).
   - `SignInModal.tsx` — `role="dialog"` `aria-modal="true"`, visible only
     when open (conditional render; backdrop + Escape close; focus the
     heading or first input on open, restore to launch button on close —
     use a ref + useEffect). 500px card (`max-w-[500px]`), square
     (`rounded-none`), bg `#efefef`, `border-t-4 border-brand`
     (`shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]`). NO close button —
     matching the source.
   - `LoginForm.tsx` — "Log In" h3 + intro p (#777, 14px); Username/Email
     input + Password input (borderless, `shadow-[0_1px_3px_0_rgba(0,0,0,0.2)]`,
     h-12, `rounded-[4px]`, white bg) with correctly-associated labels
     (`htmlFor="email"` / `htmlFor="password"`); row with orange "Login"
     submit (bg `#ed5107`, white text, rounded-[4px], px-5) + "Forgot
     password" link (#555, font-black); bottom small line "If you don't
     have account yet" + "Sign up here" link (#555, font-black). Client-side
     validation (zod or manual): empty field → inline error, block submit;
     valid submit → success state (swap dialog body to a confirmation,
     unmount the form inputs — assert absence with `queryByLabelText`).
   - `Footer.tsx` — minimal muted line linking
     `https://www.componentdock.com/` ("More templates at Component Dock").
5. **App.tsx** — compose `LaunchPage` (in `<main>`) + `Footer` (in
   `<footer>`), hold `isOpen` state, render `SignInModal` when open.
   `main.tsx` sets document title "Parvis — Log-In Modal".
6. **Tests (TDD, 100% coverage)** — one `describe` per component mirroring
   the spec's Gherkin scenarios:
   - LaunchPage: heading + gray button render; button opens the modal
     (onOpen callback or state).
   - SignInModal: dialog role/aria-modal; open shows backdrop + 500px square
     card with the 4px brand top border; close via backdrop click and
     Escape; NO close button rendered (queryByRole('button', { name:
     'Close' }) absent); focus management (first field focused on open,
     launch btn refocused on close).
   - LoginForm: labeled fields (getByLabelText "Username/Email" +
     "Password"); empty submit → validation message + no submit; valid
     submit → success state and inputs unmount (`queryByLabelText(...)`
     absent); "Forgot password" + "Sign up here" links present with correct
     hrefs.
   - Footer: Component Dock link with correct href.
   - App: full composition — main landmark contains launch section,
     contentinfo contains footer.
   - jsdom note: if a `MemoryStorage` polyfill pattern is needed (jsdom 30
     removed localStorage), copy it from `apps/cura/src/test/setup.ts` —
     only if the app uses localStorage (this template likely doesn't).
7. **Gate + ship** — `scripts/verify-app.sh parvis` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single TEMPLATES.md
   row (line 816) `[x]` with `https://parvis.free.componentdock.com` + `npm
run readme:status`.

## Pitfalls / notes for the implementer

- **No pill buttons.** The source uses `border-radius: 4px` on ALL `.btn`
  and radius 0 on the modal — do NOT copy the rounded-full launch button
  pattern from Portico/Modal 01. Everything square/4px.
- **Dialog width 500px** — `modal-md` has no Bootstrap rule; the default
  `.modal-dialog` max-width 500px applies. Not 450px (Modal 01), not 800px
  (Modal 16).
- **Burnt-orange family, not rose.** The accent is `#ed5107` (same as
  Peristyle/Modal 16), NOT `#fb8691` (Portico/Modal 01). The card is
  `#efefef` — NOT white. The top 4px orange bar is the signature; don't
  lose it under a header.
- **No close button, no header, no icons** — the ONLY dismiss paths are
  backdrop click and Escape. Don't add a decorative ×.
- **Source quirks to FIX (documented deviations in the PR):** password
  placeholder "Full Name" → "Enter password"; label `for="name"` →
  `htmlFor="email"`; keep ONE `<form>` wrapping all four form-groups.
- `getByLabelText` requires the labels to be properly associated — this is
  where the source's broken `for`/`id` pairs would surface in tests, so the
  fix is test-enforced.
- Tailwind v4: `shadow-[...]` arbitrary values with commas work but
  underscores are safer (`shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]`).
- No images → do NOT invent picsum seeds; no icons → do NOT probe/import
  lucide. The page is typography + form + dialog only.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid the `aria-hidden` dance entirely.
