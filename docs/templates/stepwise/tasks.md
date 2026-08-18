# Stepwise (ColorLib Wizard 19) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-stepwise`.

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Wizard 19" — a multi-step sign-up /
  room-booking wizard form (source:
  https://colorlib.com/wp/template/colorlib-wizard-19/). TEMPLATES.md line
  856, single copy (`grep -c 'wp/template/colorlib-wizard-19/'` = 1).
- **Preview DOM analyzed:** https://colorlib.com/etc/bwiz/colorlib-wizard-19/index.html
  (HTTP 200, ~5.5 KB HTML, `<title>Sign Up Form</title>`). **The
  preview.colorlib.com URL is 404 for this template** — the wizard demos live
  under colorlib.com/etc/bwiz/. Stylesheet `css/style.css` (~20.7 KB) parsed
  for tokens. Stack is jQuery + jquery-steps + jquery-validation — recreate
  all wizard behavior client-side in React (no jQuery).
- **Screenshot:** `colorlib-free-wizard-19.jpg` (1200×972, verified in the
  browser): centered white card on lavender→sky-blue gradient, 3 tabs
  (Account active), 2×2 input grid, "NEXT" blue button bottom-right.
- **New name:** Stepwise — single lowercase word fitting the step-by-step
  wizard (Hiredly/Shutterly pattern). NOT "colorlib-wizard-19" — never reuse
  the source name.
- **Visual design (DOM + CSS tokens + screenshot):** pure form UI, no images,
  no nav, no hero, no footer beyond the Component Dock line. Sky-blue
  `#6dbdfe` brand on white card (`840px`, shadow `0 3px 9.5px rgba(0,0,0,.15)`)
  over `#a1c4fd → #c2e9fb` gradient. Poppins 15px/500, labels uppercase,
  inputs 50px with `#ebebeb` borders, focus `#6dbdfe`. Step bar has 1px
  `#ebebeb` bottom border; active step = 3px `#6dbdfe` underline + blue h3
  (18px/700), inactive grey `#999999`. Primary button `#6dbdfe`/white 140×50
  uppercase bold; Previous button `#ebebeb`/`#999`, hover `#d2d2d2`.

## Structure (1:1, section order — from the live DOM)

1. **Shell** — full-page `#a1c4fd → #c2e9fb` gradient, centered white card
   (max-width 840px, rounded ~8px, shadow), generous vertical padding.
2. **Step bar** — 3 tabs: Account / Room type / Extra details; bottom border
   `#ebebeb`; active tab sky blue with 3px underline; tabs clickable to
   navigate (jquery-steps shows them as links; clicking a completed/active
   tab jumps to it — jump to any tab that's part of the linear flow is fine).
3. **Step 1 — Account** — 2×2 grid: Your Email (email), Country (select:
   Viet Nam / United States America), Your password (password), Daily budget
   (select: 40$ / 60$); newsletter checkbox ("Subscribe to our newsletter",
   fix the source typo in the copy).
4. **Step 2 — Room type** — "What type of room would you want?" + radio list:
   Single room / Family room / Business room (Business room checked).
5. **Step 3 — Extra details** — "Room description" textarea, placeholder
   "Eg: The room must have air conditional...".
6. **Action bar** — Previous (left, hidden on step 1) + Next/Submit (right,
   becomes Submit on the last step → success state).

## Implementation tasks (for the implementer)

- [ ] Scaffold `apps/stepwise` (copy simplest existing app; package
      `@free-react-templates/stepwise`; `public/CNAME` =
      `stepwise.free.componentdock.com`; homepage
      `https://stepwise.free.componentdock.com`; run `npm install` at root so
      the lockfile registers the workspace).
- [ ] `index.html`: Poppins Google Fonts link; title "Stepwise".
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #6dbdfe`,
      `--font-sans: "Poppins"`; gradient utility classes.
- [ ] Components: - `Wizard` — owns current step state, navigation (next/prev), success
      state after final submit; renders step bar + content + action bar. - `StepBar` — 3 tabs with active underline + `aria-current`. - `AccountStep` — 2×2 grid inputs + newsletter checkbox. - `RoomStep` — radio group, Business room default. - `DetailsStep` — textarea with placeholder. - Form inputs styled per tokens (50px, `#ebebeb`, focus `#6dbdfe`).
- [ ] Validation per step (required fields, email format) with inline errors
      before advancing.
- [ ] Footer line linking https://www.componentdock.com/ ("Component Dock").
- [ ] Data flow: preserve field values when navigating back.
- [ ] Icons: lucide-react (select chevron, checkbox check) — no material
      icon font.
- [ ] Tests (Vitest + Testing Library, 100% coverage): step navigation,
      validation, value preservation, accessibility queries by label.
- [ ] Per-app gate: `npm run verify:app stepwise` (or `scripts/verify-app.sh
    stepwise`).
- [ ] PR `feat/template-stepwise` → merge immediately; no ColorLib strings in
      app code; provenance only in spec/TEMPLATES.md/PR.
