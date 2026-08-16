# Turnstile (ColorLib Modal 20) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Turnstile** (NEW
> name — the ColorLib source keeps its name "Modal 20"). Implementation
> ships on `feat/template-turnstile` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 20" — free single-page
  password-protected-link modal component template (source:
  https://colorlib.com/wp/template/modal-20/). TEMPLATES.md row: line 819
  (**Bootstrap Modals (20)**, header line 798). The `modal-20` slug appears
  exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the
  default `https://preview.colorlib.com/theme/modal-20/` returns **404** —
  the REAL preview is `https://preview.colorlib.com/theme/bootstrap/modal-20/`
  (HTTP 200, 17.5KB HTML; the Bootstrap UI-component series lives under the
  `/theme/bootstrap/` prefix). Stylesheets: `css/bootstrap.min.css`
  (178.1KB — **CUSTOMIZED Bootstrap 4.3.1**: `btn-primary` background is
  `#3e64ff`, NOT stock `#007bff` — the brand-blue consistency between the
  lock icon and Submit is deliberate), `css/style.css` (**3.1KB — THE full
  custom token source**; read it entirely), `fonts/icomoon/style.css`
  (79.8KB — glyphs: `icon-lock2` \e5cd, `icon-close2` \e897). Roboto (300 + 400) cf-fonts blocks in the head; **Poppins + Source Serif Pro also load
  but are UNUSED by this template's CSS** (dead series-shared includes —
  skip them). `js/main.js` (59 bytes): ONLY a commented-out
  `$('#exampleModalCenter').modal()` — dead code; the modal opens purely via
  the launch button's `data-toggle`. Screenshot (`modal-20.jpg`, 1200×972)
  browser-verified 2026-08-16: modal OPEN over a gray backdrop — centered
  WHITE rounded card, soft deep shadow: blue padlock icon top-center in its
  circle, bold near-black "This link is password protected", small gray
  quote sentence, "Enter password" input with ONLY a thin gray underline,
  pill-shaped medium-blue (#3e64ff) "Submit" button, white text. Launch page
  behind: white, centered dark-gray button.
- **QUIRK — heading says "Modal #10":** the live `<title>` AND launch `<h3>`
  both say "Modal #10" (the series pasted Modal 10's markup into the 20
  slot). It's only a demo label — use the new brand name "Turnstile" (like
  Portico/Gateway/Wicket rename theirs). Do NOT copy the typo.
- **QUIRK — label `for=""` is empty:** no programmatic association with the
  input. Fix it in the recreation with a real `htmlFor`+`id` pair (a11y).
- **Structure observed (1:1):**
  - Launch: `div.container.content` (`.content { height: 100vh }`) →
    `div.row.align-items-center.content` → `div.col-12.text-center`:
    `h3.mb-4` "Modal #10" + `button.btn.btn-secondary.px-4.py-3` "Launch
    modal" (Bootstrap secondary `#6c757d`, white text, custom 4px radius,
    24px/16px padding — NOT a pill; `data-toggle` target
    `#exampleModalCenter`).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-labelledby, aria-hidden; hidden until toggled, dark backdrop) →
    `div.modal-dialog.modal-dialog-centered` (**max-width 500px** at
    ≥576px — NO modal-lg, unlike Modal 19's 800px; margin 1.75rem auto) →
    `div.modal-content.rounded-0` (SQUARE — `.rounded-0 { border-radius:
0 !important }` wins over the custom 7px) → `div.modal-body.p-4.px-5`
    (radius **7px**, `overflow: hidden`, bg **`#fff`** — WHITE (differs
    from Modal 19's `#efefef`), `box-shadow: 0 10px 50px -10px
rgba(0,0,0,0.9)`, padding 1.5rem vertical / 3rem horizontal — this
    white rounded body IS the visible card):
    - `a.close-btn` — `data-dismiss="modal"`, `aria-label="Close"`;
      absolute right 20px / top 20px, font-size 20px; span
      `icon-close2` `#ccc` → hover `#000`.
    - `div.warp-icon.mb-4` — 80×80 circle, `margin: 0 auto`, radius 50%,
      background **`rgba(62, 100, 255, 0.05)`**, color **`#3e64ff`**; the
      40px `icon-lock2` glyph absolute-centered
      (50%/50% + translate(-50%,-50%)).
    - `form action="#"`:
      - `label` — "This link is password protected" (plain label, no
        custom styling → default `#212529` body text; the dialog's
        prominent dark text; `for=""` empty quirk → fix with htmlFor).
      - `p.mb-4` — "All their equipment and instruments are alive. The
        sky was cloudless and of a deep dark blue." (`#777`, 14px, weight
        300).
      - `div.form-group.mb-4` — `input[type="password"].form-control.text-center`
        — placeholder "Enter password"; `.form-control` custom: border
        none, radius 0, **border-bottom 1px solid `#ccc`**, padding-left/right
        0 (underline-only field, no box); `:active/:focus/:hover` →
        border-bottom **`#000`**, no shadow, no outline; text centered.
      - `div.d-flex` → `div.mx-auto` → `a.btn.btn-primary` "Submit" —
        bg **`#3e64ff`** (custom bootstrap primary), `border-color:
#3e64ff`, white text; hover `#1845ff`, focus ring
        rgba(91,123,255,0.5), active `#0b3bff`; in-modal `.modal .btn {
border-radius: 30px }` → **PILL**; padding 10px 30px (custom
        global `.btn`).
  - NO navbar, NO other sections, NO images at all (the source modal has
    none), NO footer in the original — add the mandatory Component Dock
    attribution footer (repo convention).
- **Design tokens:** launch button `#6c757d` (white text, 4px radius);
  card body `#fff` (7px radius, shadow `0 10px 50px -10px
rgba(0,0,0,0.9)`); brand blue `#3e64ff` (lock glyph + Submit fill/border;
  tint `rgba(62,100,255,0.05)`; hover `#1845ff`; active `#0b3bff`); close ×
  `#ccc` → hover `#000`; description `#777` (14px); underline `#ccc` →
  focus `#000`; fonts **Roboto** only (Poppins + Source Serif Pro are dead
  includes — don't load them).

## Implementation task outline

1. **Scaffold app** — `npm create vite@latest`-pattern copy of the simplest
   existing app (e.g. `apps/wicket` or `apps/gateway` — same Modal series),
   rename package to `@free-react-templates/turnstile`, set `public/CNAME` =
   `turnstile.free.componentdock.com`, `"homepage"` =
   `https://turnstile.free.componentdock.com`; run `npm install` at repo
   root so `package-lock.json` registers the workspace; then `npm run
readme:status`; confirm `injectUiSource()` in `vite.config.ts` (copy the
   pattern from an existing app). jsdom polyfill rules apply only if
   localStorage is used (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-brand: #3e64ff`
   (lock + Submit), `--color-brand-hover: #1845ff`, `--color-btn: #6c757d`
   (launch secondary gray), `--color-card: #fff`, `--color-body: #777`,
   `--color-line: #ccc`; set Roboto (300;400) via Google Fonts `<link>` in
   `index.html`; Tailwind arbitrary value for the shadow
   (`shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]` — underscores safer than
   commas in v4).
3. **Layout shell** — `App.tsx` composes: LaunchSection, PasswordModal
   (state `open`, conditional render), AttributionFooter. `main` landmark
   for the launch section (full-viewport `min-h-screen` flex centering),
   footer in `contentinfo`.
4. **LaunchSection component** — heading "Turnstile" + gray 4px-radius
   button "Launch Modal" (px-4 py-3 proportions); TDD: renders heading +
   button; click opens modal (state lifted or context/callback).
5. **PasswordModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label` (or labelledby → the label text),
   Escape-to-close, backdrop click closes, visible `X` close button with
   `aria-label="Close"` (THIS series variant HAS a visible close ×, unlike
   Modal 19 — top-right `#ccc`, hover `#000`); conditional render (not in
   DOM when closed) keeps tests unambiguous.
   - Modal shell: max-w ~500px, SQUARE corners on the outer content, the
     7px rounded WHITE body with the deep shadow above (rounded-0 content +
     rounded body = the source's look), fade-in ~0.3s + slight
     -50px→0 translate.
   - Body content (all centered): 80×80 circle (`rounded-full`, bg
     `bg-[#3e64ff]/5`) with `Lock` icon (`text-[#3e64ff]`, ~40px);
     label "This link is password protected" (`htmlFor` ↔ input `id`);
     gray `#777` 14px description; `type="password"` input, centered
     text, borderless with `border-b border-[#ccc]` → focus
     `border-[#000]` (use a small component or Tailwind
     `focus:border-black focus:outline-none`), placeholder "Enter
     password"; centered pill `#3e64ff` "Submit" button (`rounded-full`
     or 30px radius, hover `#1845ff`, px-7 py-2.5 proportions).
6. **Form behavior** — the source form is decorative (`action="#"`): the
   Submit button and Enter key must NOT navigate/reload (preventDefault);
   no validation required (keep faithful to source; reading the value is
   optional). Clear the input value on close so reopening starts fresh.
7. **Responsive** — the source keeps the centered column at all sizes; the
   ~500px dialog fits mobile at full width with the body's 1.5rem/3rem
   padding (consider `px-4` on small screens via `max-w` + padding
   responsiveness — verify no horizontal overflow).
8. **Gate + ship** — `scripts/verify-app.sh turnstile` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single
   TEMPLATES.md row (line 819) `[x]` with
   `https://turnstile.free.componentdock.com` + `npm run readme:status`.

## Pitfalls / notes for the implementer

- **The Bootstrap bundle is CUSTOMIZED** — `btn-primary` background is
  `#3e64ff` (NOT stock `#007bff`). The blue lock icon and the Submit button
  share the brand color deliberately; use `#3e64ff` for both. Hover
  `#1845ff`, active `#0b3bff`, focus ring `rgba(91,123,255,0.5)`.
- **Visible close × is part of THIS variant** (unlike Modal 19/Wicket which
  had only a share glyph) — `a.close-btn` top-right, `#ccc`, hover `#000`.
  Keep it visible and give it `aria-label="Close"`.
- **White body, not gray** — `#efefef` was Modal 19; Modal 20's body is
  `#fff`. Don't copy the sibling's color.
- **No modal-lg** — dialog is the default 500px (Modal 19 was 800px).
- **Rounded-0 + rounded body**: `modal-content` is SQUARE (`rounded-0
!important` beats the custom 7px); the visible rounded white card is the
  `modal-body` (7px, overflow hidden, `#fff`, deep shadow). Recreate:
  transparent/square outer + `rounded-[7px] overflow-hidden bg-white` inner
  body.
- **The lock badge** — 80×80 circle, background `rgba(62,100,255,0.05)`
  (Tailwind: `bg-[#3e64ff]/5`), glyph `#3e64ff` ~40px centered. No border,
  no shadow.
- **The password input has NO box** — no border-radius, no background, no
  outline; just `border-bottom: 1px solid #ccc` turning `#000` on
  focus/hover. `text-center` centering is part of the design.
- **Style.css here is TINY (3.1KB) — read it all.** Token source is the
  small file, not the bottom of a giant one.
- **Font is Roboto** (NOT Poppins like Modal 05 — Poppins + Source Serif
  Pro are loaded but never used here). Load only Roboto via Google Fonts.
- **The heading quirk**: live DOM says "Modal #10" (series copy-paste). Use
  "Turnstile" + "Launch Modal". Documented deviation — do NOT ship "Modal
  #10".
- **The label's `for=""` is empty** — give the input `id="password"` and
  `htmlFor="password"` on the label (a11y fix; documented deviation).
- Icons: lucide-react — probe
  `node -e "console.log(typeof require('lucide-react').Lock, typeof require('lucide-react').X)"`;
  if either is undefined use inline SVG paths (lock \e5cd, close \e897).
  NOTE: `X` may also be exported as `XIcon` alias in some versions.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid aria-hidden dance entirely.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow.
- The Submit form is decorative in the source (`action="#"`) — make it a
  `<form onSubmit={e => e.preventDefault()}>` or a plain button so no
  navigation/reload fires in tests.
- No images anywhere in this template — don't add placeholder picsum images;
  the lock icon is the only "visual".
