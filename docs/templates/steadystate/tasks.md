# Steadystate — task outline

Recreation of the ColorLib **Alert V09** design (`alert-09`) at `apps/steadystate`. Spec is the authority:
`openspec/specs/template-steadystate/spec.md`. Design notes: `docs/templates/steadystate/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-09/` (the slug-only `theme/alert-09/`
and `theme/bb/alert-09/` are both 404 — this family lives under `bootstrap/`). Check boxes only as work
ships.

> This is **one 720 px column**: a header line, one incident card, one services panel, nothing else. **0
> images**, **0 buttons**, **0 inputs**, **0 `<script>`** in the reference — the disclosure is the browser's
> own `<details>`, and the whole motion budget is a 200 ms chevron rotation.
>
> The risk is not a missing section — it is the five things a port flattens: the amber state bar is a
> **`border-top: 6px`** under `border-radius: 14` + `overflow: hidden`, not a padded div; the timeline rail
> is **pseudo-elements** (11 px dot at `left: -23px`, 1.5 px connector at `left: -18px`) and the **first**
> event is the filled one; the panel is **open at load**, so the chevron starts at **180°** and only reaches
> 0° after a user closes it; the chips **fold twice in five pixels** (2 rows at 481–484, 1 row at 469–480 and
> ≥ 485) because the card's padding steps at 480; and `4 updates` is **copy, not a count**.
>
> Five numbers decide fidelity: card **720 × 601.86** at (360, 123.89); details **718 × 376.48**; timeline
> **322.69**; first event **91.3**; services panel **720 × 200.19** (rows **48.8 / 49.8 × 3**). Closed, the
> card is **279.17**.
>
> The reference's defects are **not** to be reproduced: a dead `#subscribe` anchor, `role="status"` on the
> whole 601 px card (≈ 700 characters re-announced per change), dead `.cl-icon`, a README advertising a
> `js/` and an `images/` that do not exist, an unused mono-500 pair, a hard-coded `4 updates`, an
> "affected services" list containing an operational service, a stale duration line, no `header`/`footer`
> landmarks, and a screenshot that is a macOS browser mock-up.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/steadystate`; package `@free-react-templates/steadystate`
- [ ] `public/CNAME` = `steadystate.free.componentdock.com`; `"homepage"` = `https://steadystate.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace (`grep -c free-react-templates/steadystate package-lock.json` ≥ 1)
- [ ] one `<link>`: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400&display=swap`
      (**not** mono 500 — the reference ships it and never uses it)
- [ ] `@theme` tokens: `ink #16202e`, `ink-body #3b4658`, `muted #566173`, `paper #fff`, `ground #f4f6f9`,
      `tone #f2a900`, `tone-strong #b45309`, `tone-deep #7a4b00`, `pill-wash #fff3d6`, `pill-ink #5c3a00`,
      `chip-wash #fffaf0`, `chip-border #efcf82`, `chip-line #d5dbe4`, `count-wash #eef1f5`,
      `count-ink #475264`, `ok #146c43`, `ok-dot #1f9d61`, `link #0b5cad`, `card-border #ead9b0`,
      `hairline #e8ebf0`, `hairline-soft #eef1f5`, `panel-line #e1e6ed`, `dot #b6bfcc`, `rail #dde2e9`,
      `halo #fff0cc`, `hover-wash #f8f9fb`

## 2. Static composition (tests first)

- [ ] `<main>` wrapper: `min-h-screen box-border`, `padding: clamp(24px,6vw,72px) 16px`, ground `#f4f6f9`
- [ ] column: `max-w-[720px] mx-auto`, `text-ink`, `leading-[1.55]`
- [ ] `StatusHeader`: `flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-6`; brand
      `flex items-center gap-2.5 text-[18px] font-bold` with a 24 px mark; link `text-[14px] font-semibold
      text-link underline-offset-[3px]` → `href="#services"` (defect fix, not `#`)
- [ ] `IncidentCard`: `rounded-[14px] border border-card-border border-t-[6px] border-t-tone-strong
      bg-white overflow-hidden px-6 pb-2 shadow-[0_1px_2px_rgba(22,32,46,.05),0_16px_32px_-24px_rgba(22,32,46,.3)]`
- [ ] `StatePill`: `inline-flex items-center gap-2 rounded-full bg-pill-wash pl-2.5 pr-3 py-1
      text-[13px] font-bold text-pill-ink` + 16 px `AlertTriangle` (`aria-hidden`, `text-tone`)
- [ ] start line: `font-mono text-[12.5px] text-muted` with `<time dateTime>` + `·` + the duration
- [ ] `h1`: `text-[clamp(21px,3.4vw,26px)] font-bold leading-[1.25] tracking-[-.01em] mt-3.5 mb-1.5`
- [ ] summary `<p>`: `text-[16px] text-ink-body m-0`
- [ ] `AffectedChips`: `flex flex-wrap gap-2 my-4 mb-[18px] list-none p-0`; degraded chip `border-chip-border
      bg-chip-wash text-pill-ink font-semibold`; plain chip `border-chip-line text-ink-body`; both
      `rounded-[6px] px-2.5 py-[3px] text-[13px]`
- [ ] `ServiceStatusList`: `mt-5 rounded-[14px] border border-panel-line bg-white list-none p-0`; row
      `flex justify-between gap-3 px-5 py-3 font-medium border-t border-hairline-soft` with the first row
      `border-t-0`; status `inline-flex items-center gap-2 text-[14px]` + 8 px dot (`bg-ok-dot` /
      `bg-tone`), `text-ok` / `text-tone-deep`
- [ ] `SiteFooter` with the Component Dock link — the port's **second** anchor, a real `<footer>`

## 3. The disclosure timeline (the actual work)

- [ ] `IncidentTimeline` renders a native **`<details defaultOpen>`** — no state, no `aria-expanded`, no key
      handler; `-mx-6 border-t border-hairline`
- [ ] `summary`: `flex items-center gap-2.5 px-6 py-3.5 font-semibold cursor-pointer list-none
      [&::-webkit-details-marker]:hidden hover:bg-hover-wash focus-visible:outline-2
      focus-visible:outline-link focus-visible:-outline-offset-2`
- [ ] count pill: `rounded-full bg-count-wash px-2 py-[1px] text-[12.5px] font-medium text-count-ink` and its
      text **derived** from `events.length` (`{n} updates`) — not a literal (defect 6)
- [ ] chevron: 18 px `ChevronDown`, `ml-auto text-muted transition-transform duration-200
      group-open:rotate-180` on a `group`-marked `<details>` — 180° open, 0° closed
- [ ] `<ol class="relative list-none pt-1 px-6 pb-[18px] pl-[52px]">`, events
      `relative pb-[18px] last:pb-0`
- [ ] event `::before`: `absolute top-[7px] -left-[23px] size-[11px] rounded-full border-2 border-dot
      bg-white`; **first** event `border-tone bg-tone shadow-[0_0_0_4px_#fff0cc]`
- [ ] event `::after`: `absolute top-[22px] -bottom-1 -left-[18px] w-[1.5px] bg-rail
      last:hidden` — the rail must be continuous across events
- [ ] head: `flex flex-wrap items-baseline gap-x-3 gap-y-1 m-0`; label `font-bold` (`text-tone-deep` on the
      current event); `<time dateTime>` `font-mono text-[12.5px] text-muted`
- [ ] paragraph: `mt-0.5 text-[15px] text-ink-body` (line-height **23.25**)
- [ ] keyboard: `Tab` reaches the summary natively; `Enter` and `Space` toggle; **no** `tabIndex` override

## 4. Semantics and accessibility (defect fixes)

- [ ] the live region is the **pill + start line only** (`role="status"`), never the `<section>`
- [ ] card labelled by the `h1` (`aria-labelledby`); the three lists carry accessible names; every glyph and
      dot `aria-hidden`; no state conveyed by colour alone
- [ ] the 6 px bar and the pill triangle use **`#b45309`** (≥ 3 : 1 on paper and both washes); `#f2a900`
      stays on the dots only
- [ ] focus rings `2px #0b5cad` (offset 2 on the link, −2 on the summary); contrast floor is the mono
      timestamp at **5.78 : 1**
- [ ] real `<header>` and `<footer>` landmarks (the reference has neither); exactly **2** anchors

## 5. Responsiveness

- [ ] card padding steps `px-6 pb-2` → `px-4 pb-1.5` at **480** (`max-[480px]:`), and with it the details'
      `-mx-4`, the summary's `px-4`, the timeline's `pl-[42px] pr-4 pb-4` and the rows' `px-4`
- [ ] the dot offsets (`-23px` / `-18px`) **do not** step — they are measured from the event box
- [ ] verify the double seam: card **764.6 @ 480**, **804.7 @ 481**, **768.6 @ 485**
- [ ] no horizontal overflow at 320 / 360 / 390 / 480 / 481 / 768 / 1024 / 1440 (`scrollX` 0)

## 6. Verification and ship

- [ ] `npm run verify:app steadystate` green (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-steadystate --type spec` valid
- [ ] `TEMPLATES.md`: create `## Bootstrap Alerts (12)` between `## Bootstrap Accordions (20)` and
      `## Bootstrap Buttons (20)`; **Alert 09** is its ninth row, grammar `[colorlib] · [app] · ![preview]`
- [ ] row goes `[x]` with the app URL **only after** the deploy is live
- [ ] `curl -I https://steadystate.free.componentdock.com` → 200, `ssl_verify_result=0`
- [ ] no `colorlib` / `alert-09` / `Tidewater Pay` string in any app file
