# Wafer — task outline

Recreation of the ColorLib **Alert V12** design (`alert-12`) at `apps/wafer`. Spec is the authority:
`openspec/specs/template-wafer/spec.md`. Design notes: `docs/templates/wafer/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-12/` (the slug-only `theme/alert-12/` and
`theme/bb/alert-12/` are both 404 — this family lives under `bootstrap/`). Check boxes only as work ships.

> This is **one 980 px card pinned 16 px off the bottom of a one-screen bakery page**, with three buttons that
> collapse and a disclosure that grows the same card to **408.5 px**. Nothing is a second component: the panel is a
> sibling of the bar's main grid, inside the bar's border and radius.
>
> **This is the alert family's first overlay and its last variant.** The alert is not in the page, it is above it:
> it hides on a choice, reports the choice in a `role="status"` line on the page, and returns from a footer link.
>
> **This is also the family's second state machine**: 77 lines of vanilla JS drive a disclosure, four native
> switches, a message grammar, and focus movement on every transition. The four tones of the family are replaced
> by four *categories of permission* — no success/error/warning here.
>
> The risk is not a missing section — it is the eight things a port flattens: **`1.5px` borders compute to 1 px**;
> the bar is **centred by `translateX(-50%)`**, so the entry keyframe must carry the `-50%`; the panel is
> **3 columns at 1440** (`minmax(min(100%,280px),1fr)` inside 934 px), not one; the switch is a **native checkbox
> with `role="switch"`** whose knob is a `::after` moved 20 px; the page reserves **only the collapsed bar**
> (220 px) while the open panel is 408–784 px tall; **nothing is stored** although the message says "saved"; the
> **status line lives on the page**, not in the bar; and **Escape only works with focus inside the card**.
>
> Six numbers decide fidelity: bar **980 × 134.75** at (230, 749.25) with bottom **884**; grid **52 / 451 / 391**;
> button **45.75**; open bar **408.5**; list **3 × 290**; document exactly **900**.
>
> The reference's defects are **not** to be reproduced: the 2.88 : 1 amber focus ring, the 1.56 : 1 ghost edge, the
> bar-scoped Escape, the dangling `#cookie-policy`, the "saved" message that stores nothing, the unannounced
> consent region, the sage-grey locked switch (2.70 : 1), the `1.5px` borders, `.is-expanded`, the dead `.cl-icon`,
> the two undeclared `500` font files, the README's `images/` claim, and a screenshot that is a macOS mock-up.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/wafer`; package `@free-react-templates/wafer`
- [ ] `public/CNAME` = `wafer.free.componentdock.com`; `"homepage"` = `https://wafer.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace (`grep -c free-react-templates/wafer package-lock.json` ≥ 1)
- [ ] one `<link>`: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap`
      (**four weights only** — the source also ships 500 files that nothing declares; do not request them)
- [ ] `@theme` tokens: `ground #fbf6ee`, `glow #f6dfbf`, `ink #2a1d10`, `lede #5b4a38`, `muted #6e5a45`,
      `muted-bar #5f4e3c`, `accent #7a3f0c`, `kicker #9a5412`, `saved #1f6b3b`, `card #fffdf9`, `line #eadfce`,
      `tile #fbeedb`, `switch-off #8a7a68`, `switch-on #2f7d4a`, and the two **fixed** boundary colours:
      `host-edge #a08a6d` (ghost border, 3.03 : 1) and `focus #b3661a` (ring, 4.19 : 1)
- [ ] radii: `--radius-bar: 22px`, `--radius-tile: 16px`, `--radius-btn: 12px`

## 2. The page behind the bar (static, tests first)

- [ ] `.site`: `flex flex-col min-h-[100svh] pb-[220px]` (`pb-[300px]` at ≤480), ground `#fbf6ee` plus
      `radial-gradient(45% 50% at 85% 20%, #f6dfbf 0%, transparent 70%)`
- [ ] header: `max-w-[1100px] mx-auto p-[24px_24px_0] flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1`
- [ ] logo `text-[22px] font-extrabold tracking-[-.02em]`; tag `text-[14px] text-muted`
- [ ] main: `flex-1 max-w-[1100px] mx-auto p-[clamp(40px,9vw,110px)_24px_40px]`
- [ ] kicker `text-[16px] font-bold text-kicker m-0 mb-3`; `h1` `max-w-[720px] text-[clamp(34px,6vw,60px)]
      font-extrabold leading-[1.05] tracking-[-.035em]` (**39-char copy ⇒ 2 lines at 720**)
- [ ] lede `max-w-[520px] mt-[18px] text-[18px] leading-[1.55] text-lede`
- [ ] tiles: `flex flex-wrap gap-3 mt-8`; `li` `flex flex-col basis-[190px] min-w-0 p-[16px_18px]
      border border-line rounded-[16px] bg-white/70`; item `font-bold`; price `text-[15px] font-semibold text-accent`
- [ ] status line `<p role="status">` `mt-5 font-bold text-saved` + `empty:hidden`
- [ ] footer: `max-w-[1100px] mx-auto px-6 flex flex-wrap justify-between gap-x-5 gap-y-2 text-[14px] text-muted`
      with the reopen `<button>` (underlined, 700, `text-accent`, `focus-visible:outline-2`) **and** the mandatory
      Component Dock link

## 3. The bar shell (static)

- [ ] `section` `fixed left-1/2 bottom-4 z-50 w-[calc(100%-32px)] max-w-[980px]
      max-h-[calc(100vh-32px)] overflow-auto -translate-x-1/2 box-border
      rounded-[22px] border border-line bg-card shadow-[0_30px_60px_-20px_rgba(60,35,10,.35),0_2px_6px_rgba(60,35,10,.06)]`
- [ ] `role="region"` + `aria-labelledby`; **not** a dialog, no focus trap
- [ ] entry animation `from { opacity: 0; transform: translate(-50%, 24px) }` — the `-50%` lives **inside** the
      keyframe; `motion-reduce:animate-none`
- [ ] `hidden` handled with a `[hidden]{display:none}` rule (a `<section>` ignores `hidden` under a host reset)
- [ ] main grid: `grid grid-cols-[auto_1fr_auto] gap-x-5 gap-y-[18px] items-center p-[20px_22px]`
- [ ] icon plate `grid place-items-center w-[52px] h-[52px] rounded-[16px] bg-tile` + the **30 × 30** cookie SVG
      (fill `#e9b872`, stroke `#7a4a12` 1.8, four dots), `aria-hidden`, `focusable="false"`
- [ ] title `text-[17px] font-extrabold m-0 leading-[1.5]`; body `mt-0.5 text-[14.5px] leading-[1.5]
      text-[--muted-bar]`; inline phrase = 700 `text-accent underline underline-offset-[3px]`
- [ ] actions `flex flex-wrap justify-end gap-2`
- [ ] buttons: `inline-flex items-center justify-center gap-1.5 p-[11px_18px] rounded-[12px] border
      text-[14.5px] font-bold whitespace-nowrap transition-colors duration-150`
      — ghost `border-host-edge bg-transparent hover:border-accent hover:bg-[#fbf1e3]`;
      primary `border-transparent bg-ink text-white hover:bg-[#4a3521]`
      — measured **120 / 145 / 110 × 45.75**
- [ ] chevron 16 × 16 in Settings, `transition-transform duration-200`, `rotate-180` when `aria-expanded="true"`

## 4. The disclosure panel

- [ ] panel `p-[4px_22px_20px] border-t border-line`, a sibling of the grid, inside the same bar
- [ ] list `grid gap-x-8 grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] m-0 p-0 list-none`
      → **3 × 290** at 1440, **2 × 395** at 900, 1 column at ≤620
- [ ] row `flex items-center justify-between gap-4 py-[14px] border-b border-line`
- [ ] name = `<label for>` `font-bold cursor-pointer`; desc `m-0 text-[13.5px] text-[--muted-bar]`
- [ ] switch = native `<input type="checkbox" role="switch">`: `appearance-none w-[46px] h-[26px] rounded-full
      bg-switch-off checked:bg-switch-on relative transition-colors duration-200` with a
      `after:` knob 20 × 20 at 3/3, white, `rounded-full`, `shadow-[0_1px_3px_rgba(0,0,0,.25)]`,
      `after:transition-transform after:duration-200 checked:after:translate-x-5`
- [ ] Necessary row: `checked disabled`, `aria-describedby`, `cursor-not-allowed`, and a **`checked:disabled`**
      colour `#4a8f63` so the "always on" row still reads on (**the source's `:disabled` overrides `:checked`**)
- [ ] panel foot `flex justify-end pt-4` with one primary "Save my choices" (**157 × 45.75**)

## 5. The state machine (the actual work)

- [ ] `useConsent()` (or a reducer): `{ open, panelOpen, choices: Record<Category, boolean> }`; `Category =
      'necessary' | 'preferences' | 'analytics' | 'marketing'`
- [ ] `describeChoice(choices)` — **pure**, unit-tested: `", "` between all but the last, `" and "` before it;
      one item ⇒ just the item; prefixed `"Cookie choices saved: "` and suffixed `"."`
- [ ] open panel ⇒ `aria-expanded="true"`, panel unhidden, focus the **first enabled** switch (never index 1)
- [ ] Accept all ⇒ all four true; Necessary only ⇒ every non-disabled false; Save my choices ⇒ keep current
- [ ] every choice ⇒ `bar.hidden`, panel closed, `aria-expanded="false"` on both triggers, focus the footer
      reopen button, then write the status message (in that order — the source's order is correct)
- [ ] Escape ⇒ close the panel with focus **anywhere on the page** (document-level handler, gated on
      `panelOpen`), focus back to Settings; Escape never hides the bar
- [ ] reopen ⇒ bar visible, message cleared, `aria-expanded="true"`, focus Settings; **idempotent** when open
- [ ] persistence decision **written down and tested**: either `localStorage` re-hydration (switches + bar
      hidden state) or the copy reworded to "Choices applied for this visit." — do not ship both

## 6. The port's prescribed fixes

- [ ] ring `#b3661a` on every control (the source's `#d9822b` is 2.88 : 1 on the card)
- [ ] ghost border `#a08a6d` (the source's `#dccbb4` is 1.56 : 1)
- [ ] locked switch keeps an "on" reading (`#4a8f63`, white knob ≥ 3 : 1)
- [ ] inline "cookie policy" opens the settings panel — the source's `#cookie-policy` anchor has no target
- [ ] `role="region"` + a first-render announcement (or initial focus on the title) so the request is not silent
- [ ] `1px` borders; no `.is-expanded`, no `.cl-icon`

## 7. Responsiveness

- [ ] `max-[860px]`: grid → `grid-cols-[auto_1fr]`, actions `col-span-full justify-stretch`,
      buttons `flex-1 basis-auto` (bar **176.8** at 860, **182** at 861 — the tightest state)
- [ ] `max-[480px]`: `bottom-2 w-[calc(100%-16px)] rounded-[18px]`, main `gap-[14px] p-4 items-start`,
      icon 44 / radius 14, panel `p-[0_16px_16px]`, page `pb-[300px]`, tiles `basis-[90px] p-3 text-[14px]`
- [ ] verify the collapsed ladder **134.75 / 156.5 / 182 / 176.8 / 176.8 / 198.5 / 198.5 / 220.3 / 208.3 / 262 /
      287.5 / 309.3 / 331** and the open ladder **408.5 / 389.8 / 450.5 / 578.3 / 580 / 633.8 / 679.5 / 741.8 /
      783.8** at 1440 / 900 / 861 / 860 / 768 / 640 / 552 / 481 / 480 / 430 / 390 / 360 / 320
- [ ] 320 × 568: bar clamps to **536** and scrolls inside; page still reachable once the bar is closed
- [ ] no horizontal overflow 320–1440

## 8. Repo integration

- [ ] `packages/ui` reused where a primitive exists; `cn()` for the ghost/primary variants
- [ ] no `colorlib`, `alert-12`, `Crumb & Co.`, "Rua das Flores" or any source string in any app file (comments
      included)
- [ ] `TEMPLATES.md`: new `## Bootstrap Alerts (12)` section between `## Bootstrap Accordions (20)` (line 639,
      last row line 661) and `## Bootstrap Buttons (20)` (line 663); the `Alert 12` row is the **twelfth** entry,
      grammar `[colorlib] · [app] · ![preview]`
- [ ] `npm run readme:status` after shipping

## 9. Verification

- [ ] `npm run verify:app wafer` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-wafer --type spec` is valid
- [ ] every number in the spec's checklist re-measured on the built app, not assumed
- [ ] `curl -I https://wafer.free.componentdock.com` → 200, `ssl_verify_result=0` after deploy
