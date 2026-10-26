# Underrule — task outline

Recreation of the ColorLib **Alert V11** design (`alert-11`) at `apps/underrule`. Spec is the authority:
`openspec/specs/template-underrule/spec.md`. Design notes: `docs/templates/underrule/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/alert-11/` (the slug-only `theme/alert-11/`
and `theme/bb/alert-11/` are both 404 — this family lives under `bootstrap/`). Check boxes only as work
ships.

> This is **one 592 px card holding one form**, four labelled fields and a button — and **the bars are the
> design**. Each input's bottom border grows into a coloured strip that shares the control's tone, drops its
> own top border, and inherits the two bottom corners, so control + bar read as one shape with a coloured
> underrule.
>
> **This is the alert family's first form with a script** (120 lines of vanilla JS): the bar's colour is a
> runtime verdict, not a decoration. Nothing is dismissible, nothing stacks, nothing counts down.
>
> The risk is not a missing section — it is the eight things a port flattens: the card is **`content-box`**,
> so `max-width: 520px` renders **592**; the joined shape is **two radii + `border-top: 0`**, never a
> wrapper; `1.5px` borders compute to **1 px**; the focus rule **loses** to the state rule on three of four
> fields; there is **not one width media query** (two clamps only); the **bars** are what fold
> (`898.41 → 768.84` card heights); tone is one custom-property **pair** with four overrides; and the source
> page **scrolls 33 px at 1440 × 900**.
>
> Six numbers decide fidelity: card **592 × 789.06**; content **520**; control **49.25**; bar **33.89**;
> bio control **95.75**; button **137 × 48**.
>
> The reference's defects are **not** to be reproduced: the defeated focus border (and the 1.28 : 1 halo),
> the `#d8cfc5` neutral edge (1.54 : 1), four per-keystroke polite live regions, `15.5px` inputs (iOS zoom),
> the 33 px desktop scroll, the `1.5px` borders, the nested-scroll textarea, the "Add the end" typo, the
> `aria-hidden` prefix, the stale `94` counter, the dead `.cl-icon`, the README's `images/` claim, and a
> screenshot that is a macOS browser mock-up.

## 1. Scaffold

- [ ] copy the simplest existing app to `apps/underrule`; package `@free-react-templates/underrule`
- [ ] `public/CNAME` = `underrule.free.componentdock.com`; `"homepage"` = `https://underrule.free.componentdock.com`
- [ ] keep `"react": "latest"` / `"react-dom": "latest"`; keep `injectUiSource()` in `vite.config.ts`
- [ ] root `npm install` so `package-lock.json` registers the workspace (`grep -c free-react-templates/underrule package-lock.json` ≥ 1)
- [ ] one `<link>`: `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap`
      (**four weights only** — 300 renders as 400 and 800/900 as 700 in the reference; do not request them)
- [ ] `@theme` tokens: `ground #f6f3ef`, `hatch rgba(120,90,60,.035)`, `card #fff`, `ink #231d18`,
      `muted #62574d`, `line #9c8f81` (**fixed** — the source's `#d8cfc5` is 1.54 : 1), `focus #7c4dff`,
      and the four tone/tint pairs: success `#157347`/`#e8f6ee`, error `#c21f3a`/`#fdebee`,
      warning `#9a5300`/`#fff4e2`, hint `#52606f`/`#f1f3f6`; button `#231d18` → hover `#40362d`
- [ ] radii: `--radius-card: 20px`, `--radius-control: 12px`

## 2. Static composition (tests first)

- [ ] `<main>`: `min-h-[100svh] box-border`, `padding: clamp(16px,4vw,56px) 16px`, ground `#f6f3ef` plus the
      hatch (`repeating-linear-gradient(45deg, rgba(120,90,60,.035) 0 2px, transparent 2px 12px)`), centred
      with `flex items-start justify-center`
- [ ] `<form noValidate>` card: **content 520** + `p-[clamp(22px,5vw,36px)]`, `rounded-[20px] bg-white
      shadow-[0_24px_48px_-32px_rgba(35,29,24,.4)] text-ink leading-[1.5]`
      — under the repo's `border-box` use `w-[520px]` **on the content** or `max-w-[592px] p-[36px]`; never
      `max-w-[520px] p-[36px]` (that is a 520 box, 72 px too narrow)
- [ ] `h1`: `text-[26px] font-bold leading-[39px] tracking-[-.02em] m-0`
- [ ] intro `<p>`: `text-[16px] leading-[24px] text-muted m-[4px_0_26px]`, copy fixed at **46 characters**
- [ ] `FieldGroup`: `mb-5`; `<label for>` `block mb-1.5 text-[14.5px] font-semibold`
- [ ] website label's "optional": `ml-1 font-normal text-muted` (14.5 / 400)
- [ ] `Control`: `flex items-stretch border border-line rounded-t-[12px] bg-white`
      `transition-[border-color,box-shadow] duration-[150ms]`
- [ ] handle prefix: `flex items-center pl-[14px] text-[15px] text-muted whitespace-nowrap`; input after it
      `pl-[2px]`
- [ ] `input` / `textarea`: `flex-1 min-w-0 border-0 bg-transparent p-[12px_14px] text-[16px]
      leading-[1.5] text-ink focus:outline-none` (**16 px, not the source's 15.5**)
- [ ] textarea: `rows={3}` `min-h-[84px] resize-y leading-[1.5]`; do **not** leave it as a nested scroll
      container — let it grow to content with a cap
- [ ] `VerdictBar`: `flex items-start gap-2 p-[7px_12px] border border-t-0 rounded-b-[12px]
      text-[13.5px] font-semibold leading-[1.4]`, `bg-[var(--tint)] text-[var(--tone)]`
- [ ] glyph: inline `16 × 16` SVG, `flex-none mt-px`, `fill: currentColor`, `aria-hidden`,
      `focusable="false"` — check / exclamation-circle / warning-triangle / info-circle, inner paths stroked
      `#fff` at 1.8–1.9
- [ ] foot: `mt-[26px] flex flex-wrap items-center gap-x-4 gap-y-3`
- [ ] button: `rounded-[12px] bg-ink px-[22px] py-3 text-[16px] font-semibold text-white
      hover:bg-[#40362d] transition-colors duration-150 focus-visible:outline-[3px]
      focus-visible:outline-focus focus-visible:outline-offset-2` (**137 × 48**)
- [ ] confirmation: `<p role="status">` `text-[14px] font-semibold text-[#157347] m-0`, empty at load
- [ ] `<footer>` under the card (plain, on the hatch) with the Component Dock link — the port's only chrome

## 3. The state machine (the actual work)

- [ ] `src/rules.ts`: four **pure** functions `username(v)`, `email(v)`, `website(v)`, `bio(v, max)` returning
      `[tone, message]` — unit-testable with no DOM
- [ ] tone enum `success | error | warning | hint`; `Field` renders **one** tone class at a time (toggle all
      four, never accumulate)
- [ ] each tone class redefines **only** `--tone` and `--tint`; the control border, bar border, bar text and
      glyph all read `--tone`; the bar background reads `--tint`
- [ ] `hint` keeps the neutral `--line` edge and drops the bar to **500**
- [ ] `aria-invalid="true"` **only** in `error`; remove it on every other transition
- [ ] trigger matrix: `username` + `bio` re-check on `input`; `email` + `website` only on `blur` **or** live
      while the field is currently `error`/`warning`; any `input` clears the confirmation
- [ ] `noValidate` on the form; submit → `preventDefault`, evaluate in DOM order, focus the **first** error,
      otherwise write "Profile saved. Changes are live on your page."
- [ ] copy (Whitelabel — the source's names must not appear): brand **Kilnwork**, prefix `kilnwork.co/`,
      handle `mara.clay`, email `mara@kilnhaus` (error), website `http://maraclay.pt` (warning),
      bio "Hand-thrown stoneware and small batch glazes, fired in a shared studio in Porto." (**80** chars →
      "80 characters left."), taken list `mara, mara.park, kilnwork, admin, potter, studio`
- [ ] the four copy strings match the spec exactly (including the third email error, "Add the domain ending,
      for example mara@kilnhaus.com." — the source's typo is fixed)

## 4. The port's four prescribed fixes

- [ ] **focus wins over state**: raise `:focus-within` above `.field:not(.is-hint)` in specificity so the
      border turns `#7c4dff` on **all four** fields, and use an **opaque** ring (`0 0 0 3px #7c4dff` or a
      2 px border swap) — the source's `rgba(124,77,255,.18)` halo is 1.28 : 1
- [ ] **neutral edge**: `--line: #9c8f81` (3.15 : 1 on white)
- [ ] **live regions**: bars may stay `aria-live="polite"` and must write text only when it changes; the bio
      counter is silent while > 20 left and announces **once** on crossing into warning
- [ ] **iOS**: inputs at `16px`. The input's height becomes `12 + 24 + 12 + 2 = 50` — re-measure the card
      (`789.06 → 792.06`) **or** hold `49.25` with `leading-[1.45]`, and record which you chose

## 5. Responsiveness

- [ ] two clamps only: demo `clamp(16px,4vw,56px) 16px` (port) and card `clamp(22px,5vw,36px)`; **no width
      media query**
- [ ] card: **592** at ≥ 720; `viewport − 32` below ~624; content `min(520, vw − 32 − 2·pad)`
- [ ] fold ladder verified at content **257/258** (handle), **249/250** + **434/435** (email),
      **249/250** + **423/424** (website), **325/326** (bio), **348/349** (intro)
- [ ] card-height ladder: **898.41 / 860.63 / 841.73 / 822.84 / 798.84 / 786.64 / 768.84 / 789.06**
- [ ] no horizontal overflow at 300–780 and at 320/360/390/768/1024/1440 (`scrollX` 0,
      `scrollWidth === clientWidth`)
- [ ] **no vertical scroll at 1440 × 900** (the source's 933 px document is defect 5) and no second scrollbar
      from the textarea

## 6. Repo integration

- [ ] `packages/ui` reused where a primitive exists; `cn()` for the tone classes
- [ ] no `colorlib`, `alert-11`, `Loomwork`, `lena.weaves` or any source string in any app file (comments
      included)
- [ ] `TEMPLATES.md`: new `## Bootstrap Alerts (12)` section inserted between `## Bootstrap Accordions (20)`
      (line 639) and `## Bootstrap Buttons (20)` (line 663); the `Alert 11` row is the **eleventh** entry,
      grammar `[colorlib] · [app] · ![preview]`
- [ ] `npm run readme:status` after shipping

## 7. Verification

- [ ] `npm run verify:app underrule` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-underrule --type spec` is valid
- [ ] every number in the spec's checklist re-measured on the built app, not assumed
- [ ] `curl -I https://underrule.free.componentdock.com` → 200, `ssl_verify_result=0` after deploy
