# Chime (ColorLib Dropdown 04) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-chime`.

## Design notes (replication findings)

- **Original:** ColorLib "Dropdown 04" — fourth of the "Bootstrap Dropdowns
  (20)" series (source: https://colorlib.com/wp/template/dropdown-04/).
  TEMPLATES.md has ONE copy (line 757). Series siblings: Dropdown 01 was
  prepped as **Menubar**, Dropdown 02 as **Popmenu**, Dropdown 03 as
  **Skycast** (see `docs/templates/menubar/`, `docs/templates/popmenu/`,
  `docs/templates/skycast/`).
- **Demo DOM analyzed (LIVE, clicked open in browser):**
  `https://preview.colorlib.com/theme/bootstrap/dropdown-04/`
  (HTTP 200, 15.7 KB). IMPORTANT: the naive
  `https://preview.colorlib.com/theme/dropdown-04/` returns 404 — the
  dropdown demos live under the `/theme/bootstrap/` subpath (the ColorLib
  template page links the correct preview). Stylesheet: `css/style.css`
  (222 KB ftco-style Bootstrap 4 theme), libs: jquery, popper,
  bootstrap.min.js, ionicons 4.5.6. Google Font **Roboto** (weights
  400/500/700) via Cloudflare `/cf-fonts/s/roboto/` @font-face block —
  DIFFERENT from Dropdown 03 (Poppins); do NOT copy the Poppins setup from
  the Skycast app.
- **Screenshot:** `dropdown-04.jpg` (1200×972, viewed in browser) — flat
  periwinkle page, centered white heading "Dropdown #04", transparent
  trigger (white bell + white "Notifications", green unread dot), menu OPEN
  directly below: white rounded card with soft shadow and top-center
  pointer, three notification rows (circular avatars, bold name + grey
  action, "10 min ago"), bottom-center "VIEW ALL →" in periwinkle-violet.
  The screenshot shows the menu in its default (open) state — matches CSS
  exactly. No footer in the source.
- **Visual design (DOM + CSS tokens + screenshot):** minimalist
  component-showcase page. Body bg `#6c81f4` (flat periwinkle — confirmed by
  both the CSS `body` rule and the screenshot), Roboto base 18px/1.8.
  Section `padding: 7em 0`; container max-width 1140px. Heading
  `.heading-section` 28px **#fff** (white!), `mb-5` only (no `pb-md-4` like
  Dropdown 03). Trigger `a.btn-custom.dropdown-toggle.text-left.d-flex.align-items-center.notif`:
  **TRANSPARENT background** — there is NO background rule on `.btn-custom`
  in the reference CSS; the white content sits directly on the periwinkle
  page. Content: `div.icon` (40×40 flex, centered) with `i.ion-ios-notifications`
  (26px white bell) + `:after` 10px green dot `#28a745` (`border: 2px solid
#fff`, `top: 8px; right: 10px`); then the label "Notifications" (18px
  white). Bootstrap caret suppressed (`.dropdown-toggle::after { display:
none }`) — no caret on the trigger. `aria-haspopup="true"`,
  `aria-expanded="false"` on the trigger.
- **Menu card** `.btn-group .dropdown-menu`: `min-width: 25rem` (400px;
  22rem on ≤767.98px), border none, bg #fff, padding 0, `margin-top: 60px`,
  centered under trigger (`left: 50% !important; transform: translateX(-50%)`),
  shadow `0 10px 34px -20px rgba(0,0,0,.41)`, caret triangle top-CENTER
  (`.dropdown-menu:after` `top: -.7em`, `border-width: 0 .7em .8em .7em`,
  `border-bottom-color: #fff`; `:before` duplicate at `top: -.8em`,
  `border-bottom-color: rgba(0,0,0,.02)` casts a soft shadow).
- **Rows** `a.dropdown-item.d-flex.align-items-start` (16px,
  `rgba(0,0,0,.7)`, weight 400, `padding: 20px`, `border-bottom: 1px solid
rgba(0,0,0,.05)` — last row none, `white-space: normal`, hover
  `background: transparent`):
  - `div.img` 45px circle (`border-radius: 50%`, `background-size: cover`)
    with `:after` 10px green presence dot `#28a745` (`border: 2px solid
#fff`, `top: 0; right: 0`); avatars are person photos in the original —
    use deterministic placeholders.
  - `div.text.pl-3` (`width: calc(100% - 45px)`, `pl-3` = 12px left gap):
    `h4` = name (18px, weight 500, `rgba(0,0,0,.8)`) + `span` = action
    (18px, weight 400, `rgba(0,0,0,.3)`), one line; then `span.time`
    (`rgba(0,0,0,.3)`).
  - Order: David Smith — commented on your album — 10 min ago; John Doe —
    reacted to your video — 10 min ago; Gary Clinton — commented on your
    picture — 10 min ago. All three timestamps are "10 min ago" in the
    original.
- **Footer row** `a.dropdown-item.btn-link.text-center`: "View All" +
  `i.ion-ios-arrow-round-forward` — uppercase, 13px, weight 500, color
  `#726df3` (the ftco brand link color, also on plain `a` tags).

## Implementation tasks (TDD, in order)

1. **Scaffold** `apps/chime` (copy the simplest existing app, e.g. the
   Skycast app; rename package to `@free-react-templates/chime`; add
   `public/CNAME` = `chime.free.componentdock.com`, `"homepage"` =
   `https://chime.free.componentdock.com`). Run `npm install` at the repo
   root and verify `grep -c "free-react-templates/chime" package-lock.json`.
2. **Setup** `src/test/setup.ts` (jest-dom; copy the MemoryStorage polyfill
   from an existing app's setup if jsdom 30 lacks `localStorage`),
   `src/index.css` with `@theme` tokens: `--color-brand: #6c81f4`,
   `--color-accent: #726df3`, `--color-dot: #28a745`, Roboto font stack via
   Google Fonts `<link>` in `index.html`. Register `injectUiSource()` in
   `vite.config.ts` (copy the pattern from any existing app — never use a
   relative `@source`).
3. **App shell + tests** — `App.tsx` composes `<DemoSection />` + `<Footer />`;
   document title "Chime — Notifications Dropdown" (see spec). Tests: full
   page render, heading, footer Component Dock link.
4. **DemoSection + tests** — the `ftco-section` equivalent: heading
   "Dropdown #04" (white, centered, Roboto), transparent trigger (white bell
   `Bell` icon in a 40×40 box + "Notifications", green unread dot
   top-right), 400px white menu card with top-center caret, `aria-haspopup`/
   `aria-expanded`. Tests: render, open on click, close on outside click /
   Escape / item click, `aria-expanded` flips.
5. **NotificationItem + tests** — avatar (45px circle, green presence dot,
   `picsum.photos/seed/chime-<n>/90/90`), name/action/time text block with
   the reference colors; row separators; keyboard focusable.
6. **ViewAll row + tests** — centered uppercase "View All" + `ArrowRight`
   icon in `#726df3`.
7. **Footer** — mandatory Component Dock link
   (`https://www.componentdock.com/`), no ColorLib references anywhere in
   app code (provenance lives only in the spec / TEMPLATES.md / PR).
8. **Gate + ship** — `npm run verify:app chime` must pass (typecheck + lint +
   knip + fallow + 100% coverage + build); commit conventionally, open PR to
   main, merge immediately with `gh pr merge --squash --delete-branch`, then
   bookkeeping: `[x]` + surge URL + homepage in TEMPLATES.md line 757 +
   `npm run readme:status`, push.

## Fidelity pitfalls (learned from the Dropdown series)

- **Preview URL:** always use the `/theme/bootstrap/` subpath for the
  Dropdown series; the naive URL 404s. Verify with curl before writing
  tokens.
- **Transparent trigger:** `.btn-custom` in the reference has NO background
  — do NOT invent a filled button (Dropdown 03's indigo fill does not apply
  here). White content on `#6c81f4`.
- **Font is Roboto** for this demo (not Poppins like Dropdown 03).
- **No trigger caret** — Bootstrap's `dropdown-toggle::after` is suppressed
  in the reference; only the menu card has a caret (top-center).
- **Menu is centered** under the trigger (`left: 50%` + `translateX(-50%)`),
  NOT right-aligned like Dropdown 03's `dropdown-menu-right`.
- **All timestamps are "10 min ago"** — keep the reference copy verbatim.
- Menu item hover keeps `background: transparent` (no hover fill on rows).
