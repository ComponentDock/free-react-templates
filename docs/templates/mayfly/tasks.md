# Mayfly — task outline

Recreation of the ColorLib **Alert V08** design (`alert-08`) at `apps/mayfly`. Spec is the authority:
`openspec/specs/template-mayfly/spec.md`. Design notes: `docs/templates/mayfly/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-08/` (the slug-only `theme/alert-08/`
and `theme/bb/alert-08/` are both 404 — this family lives under `bootstrap/`). Check boxes only as work
ships.

> This is **one card and one column of toasts**, not a page: no nav, no hero, no bands, **0 images**,
> **0 links** (the port adds exactly one, the Component Dock footer link), **0 inputs**, 4 buttons, and the
> whole script is **4,146 B** of vanilla JS that has to become a React countdown.
>
> The risk is not a missing section — it is the five things a port flattens: the countdown is a
> **`transform: scaleX()` painted every frame**, never a width or a CSS transition; **pausing is per-toast
> state** that *carries* the remainder (hover holds `0.3467` for 900 ms, then resumes to `0.2634`);
> the **timer label is a `ceil` ladder pinned at `1s`**, never `0s`, and it must stay `aria-hidden`; the
> **exit is a 260 ms class plus a `setTimeout`** (≈5,238 ms end to end) that returns focus to the trigger;
> and the **toast column is in flow** — it is a grid child that grows, not an overlay.
>
> Five numbers decide fidelity: card **552 × 396** at (240, 88); facts rows **49** each; region **380**;
> toasts **127.34** and **148.36**; stack **287.7**.
>
> The reference's defects are **not** to be reproduced: `role="status"` + `aria-atomic` on a growing region
> (every insertion re-announces the whole stack, and the demo injects two at load), two dead kind classes
> that leave both tones `#2dd4bf`, dead `.cl-icon`, a pause state no screen reader can hear, an **unbounded**
> stack that pushes the document to 1300 at eight toasts, **no touch pause**, an undeclared 500 font pair,
> a README advertising an `images/` directory that does not exist, and a screenshot that is a macOS browser
> mock-up.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/mayfly`; package `@free-react-templates/mayfly`
- [ ] `public/CNAME` = `mayfly.free.componentdock.com`; `"homepage"` = `https://mayfly.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace (`grep -c free-react-templates/mayfly package-lock.json` ≥ 1)
- [ ] Outfit via one `<link>`: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap`
      (**not** 500 — the reference ships an undeclared 500 pair and never asks for it)
- [ ] `@theme` tokens: `ink #10231f`, `muted #52635f`, `hairline #e5ecea`, `paper #fff`,
      `ground #f1f5f4`, `brand #0f766e`, `brand-hover #0b5d57`, `brand-ink #0b4f49`,
      `brand-wash #e6f2f0`, `brand-wash-hover #d3e9e5`, `avatar-from #14b8a6`, `avatar-to #0e7490`,
      `toast #0f1f1d`, `toast-ink #e8f3f1`, `toast-title #fff`, `toast-body #c5d6d3`, `tone #2dd4bf`,
      `toast-shadow 0 18px 36px -18px rgba(15,31,29,.65)`

## 2. Static composition (tests first)

- [ ] `<main>` wrapper: `min-h-screen`, `padding: clamp(24px,7vw,88px) 16px`, ground `#f1f5f4` **plus**
      `linear-gradient(135deg, rgba(20,184,166,.10), transparent 40%)` on top
- [ ] grid: `max-w-[960px] mx-auto`, `gap-7`, `grid-cols-[minmax(0,1fr)_minmax(0,380px)]`, `items-start`;
      below 801 one column with the **region first** (`order-first`) and card padding `22px 18px`
- [ ] `ProfileCard`: `p-7`, radius 22, white, `shadow`, `text-ink`, `leading-normal` on the sheet's 1.5
- [ ] `ProfileHeader`: avatar `56×56` radius 18, `bg-gradient-to-br from-avatar-from to-avatar-to`,
      white `20/700` initials; `h1` `24/700`, `tracking-[-.01em]`, `leading-[1.5]`; sub `16/400` muted with `·`
- [ ] `FactsList`: `<dl>` `my-6`, three rows `flex flex-wrap justify-between gap-x-4 gap-y-1
      border-t border-hairline py-3`, `dt 16/400` muted, `dd 16/600` ink `m-0`
- [ ] `CardActions`: `flex flex-wrap gap-2.5`; primary `#0f766e`/white, ghost `#0b4f49` on `#e6f2f0`;
      both `py-3 px-5`, radius 12, `font-semibold`, `transition-colors duration-150`
- [ ] note `14/400` muted, `mt-4`
- [ ] `SiteFooter` with the Component Dock link — the page's **only** anchor

## 3. The countdown (the actual work)

- [ ] `Toast` takes `{ kind, title, text, onDismiss }`; markup = 36 px icon tile · body · 32 px close ·
      4 px progress line absolutely positioned at the bottom
- [ ] `DURATION = 5000`; a `requestAnimationFrame` loop decrements `remaining` by the frame delta **only**
      while not `hovered && !focused`; cancel the frame on unmount and on dismissal
- [ ] each frame paints `transform: scaleX(max(0, remaining/5000))` on the fill and
      `Closes in {max(1, ceil(remaining/1000))}s` (uppercase, `.04em`, `aria-hidden`)
- [ ] `is-paused` → fill `opacity: .55`, label `Paused`; pause on `mouseenter`/`focusin`,
      resume on `mouseleave`/`focusout` **only when `relatedTarget` left the toast**, and also pause on
      `pointerdown` (defect 6)
- [ ] dismissal = add `is-leaving` (`opacity-0 translate-x-6 scale-[.98] transition duration-[240ms]`) then
      `setTimeout(…, 260)` → `onDismiss`; under `prefers-reduced-motion` remove **immediately**
- [ ] focus return: if the toast held focus, focus the trigger that created it; otherwise nothing
- [ ] stack: newest first, `gap-3`, **cap 4** (drop the oldest — defect 5), start **empty** (defect 7)
- [ ] `Escape` on a toast dismisses it (listener scoped to the toast, not the document)

## 4. Fidelity pass

- [ ] toast: `p-[16px_12px_18px_16px]`, radius 16, `#0f1f1d`, `overflow-hidden`, `grid-cols-[36px_1fr_32px]`,
      `gap-3`, `items-start`, `overflow-wrap:anywhere` on the body
- [ ] title `16/600` white; body `14.5/400` `#c5d6d3` `mt-0.5`; timer `12.5/600` tone, `mt-2`
- [ ] icon tile `36×36`, `rounded-full`, `bg-white/[.08]`, tone glyph, lucide `Check` (saved) / `Mail` (invite)
- [ ] close `32×32` radius 8, `#c5d6d3` → white on `bg-white/10`; `focus-visible:outline-2 focus-visible:outline-offset-1`
      in tone; `aria-label="Dismiss: <title>"`
- [ ] assert the stacks: card `28+60+24+147+24+48+16+21+28 = 396`; row `1+12+24+12 = 49`;
      toast `16 + body + 18` with body `23.2+2+n×21.025+8+18.125`
- [ ] avatar contrast: darken the gradient (`#0f766e → #0b4f49`) or use ink initials — the reference
      measures **3.17** at the glyphs and **2.49** at the corner (defect 8)

## 5. Accessibility

- [ ] the **toast** is the live region (`role="status"`), not the container; or the container is
      `aria-live="polite" aria-atomic="false"` (defect 1)
- [ ] timer, icon, progress line `aria-hidden`; close button named `Dismiss: <title>`
- [ ] announce the pause **once** (`Paused while you interact`) — not per frame (defect 4)
- [ ] never auto-dismiss a toast that contains focus
- [ ] record the WCAG **2.2.1** deviation (5 s, no extension control) with its mitigations in the app notes

## 6. Responsive + gates

- [ ] card `vw − 32` ≤ 800, `min(960, vw − 32) − 408` ≥ 801 (991+ ⇒ 552); breakpoint exactly **800/801**
- [ ] card height staircase `564 / 508 / 487 / 463 / 405 / 384 / 475 / 417 / 396` — **801 is taller than 800**
- [ ] note 3→2 lines at 324, 2→1 at 542 (970 in two columns); role line 2→1 at 353; buttons 1 row at
      content 337 (viewport 405 / 833); facts rows wrap below ~315
- [ ] document 900 at 900 tall at every width, 893 @ 320 × 568, 833 @ 390 × 664
- [ ] `scrollX` 0 at 300 / 320 / 360 / 390 / 480 / 768 / 800 / 801 / 1024 / 1440
- [ ] `npm run verify:app mayfly` green (100 % coverage)
- [ ] `TEMPLATES.md`: add `Alert 08` as the 8th row of `## Bootstrap Alerts (12)` between
      `## Bootstrap Accordions` and `## Bootstrap Buttons`, grammar `[colorlib] · [mayfly] · ![preview]`
- [ ] deploy, then `curl -I https://mayfly.free.componentdock.com` → 200, `ssl_verify_result=0`
