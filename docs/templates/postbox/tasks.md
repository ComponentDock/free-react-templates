# Postbox — task outline

Recreation of the ColorLib **Card V19** design (`card-19`) at `apps/postbox`. Spec is the authority:
`openspec/specs/template-postbox/spec.md`. Design notes: `docs/templates/postbox/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/card-19/` (the slug-only
`theme/card-19/` 404s — this family lives under the `bootstrap/` prefix). Check boxes only as work ships.

> This is an **email-capture pair, not a card grid**: one 1,160 px row on `#eef2ff` holding a
> **758.66 px navy card** (2fr) beside a **379.34 px white card** (1fr), 22 px apart, both **410.38**
> tall because `align-items: stretch` makes the shorter one match the taller. No nav, no hero, no
> footer, no second row, no photography.
>
> The navy card is **art left / form right** (0.8fr / 1.2fr): a 300 px radial-glow panel with a
> **6-shape inline SVG envelope**, then eyebrow / **32 px 800** title / muted paragraph / label +
> **230.41 px input** + **132 px gold button** / 39 px hint. The white card is the same anatomy
> **without** the art and **without** the row: one column, bordered input, **full-width** navy button.
>
> It is the family's **first form** — no sibling prep records a `<form>` or an `<input>` (every one that
> states a count says **0**) —
> and its state machine is a **validation pipeline**, not a selection: empty → message 1, malformed →
> message 2, valid → the form is **replaced** by a done block with a 52 px tick while the card
> **shrinks** 410.38 → 353.94 (both cards → 258.2).
>
> Six numbers decide fidelity: columns **758.66 / 379.34** at a **22** gap; both cards **410.38**
> with the white content **351.94** centred; the navy split **300.25 / 450.41**; input **230.41 × 54**
> + button **132 × 54** at an **8** gap; the wrap threshold is a **360 px content box** (viewport
> **440 → 439**), not a media query; page **602** tall at 1,440 (never viewport height).

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/postbox`; rename the package to
      `@free-react-templates/postbox`
- [ ] `public/CNAME` = `postbox.free.componentdock.com`; `"homepage"` =
      `https://postbox.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/postbox" package-lock.json` → 1)
- [ ] `index.html`: title, description, one **Epilogue** Google Fonts `<link>`
      (`family=Epilogue:wght@400;700;800&display=swap` — the reference declares **no** 500 face and
      has **no** 600 face; never use `font-medium`, treat `font-semibold` as 700)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #eef2ff`, `--color-navy: #1e3a8a`, `--color-navy-soft: #1e40af`,
      `--color-gold: #fde047`, `--color-ink: #111827`, `--color-muted-navy: #dbe4ff`,
      `--color-muted: #4b5563`, `--color-error-navy: #fecaca`, `--color-error: #b91c1c`,
      `--color-invalid: #ef4444`, `--color-tick: #22c55e`, `--color-line: #dfe5f5`,
      `--color-line-input: #c7d2ea`, `--color-placeholder: #6b7280`
- [ ] radii: card **28**, control **14**, tick **999**
- [ ] shadows: navy `0 30px 60px -36px rgb(30 58 138 / .7)`, white
      `0 20px 40px -32px rgb(30 58 138 / .5)`
- [ ] `--font-sans: "Epilogue", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`; the cards
      re-base to **15.5 / 1.5** (the page itself is 16); no `cl-` class names anywhere
- [ ] the art glow as one layer: `radial-gradient(circle at 50% 50%, rgb(79 110 247 / .75),
      transparent 62%)`

## 2 — Shell

- [ ] `main`: `max-w-[1160px] mx-auto px-4 py-[clamp(36px,7vw,96px)] bg-ground` with **no**
      `min-h-screen` (content is **602** at 1,440, not the 900 viewport)
- [ ] verify `main` **1192** wide at x **124** (1,160 + 16 padding each side) and the grid **1160** at
      x 140, y 96 at 1,440

## 3 — The pair

- [ ] grid: `grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-stretch gap-[22px]` →
      **758.66 / 379.34**, both **410.38** tall
- [ ] collapse to one column with `max-[900px]:grid-cols-1` — the switch is exactly **900**
      (901 is still two columns), so `lg:` (1,024) or `md:` (768) breakpoints are both wrong; verify
      both sides of the line
- [ ] between 641 and 900 the pair **stacks** but each card keeps its own two-column split
      (**344 / 516** art / content at 900)

## 4 — Navy card (`variant="primary"`)

- [ ] surface: `relative grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-2 overflow-hidden
      rounded-[28px] bg-navy text-white text-[15.5px] leading-[1.5]
      shadow-[…]` — **no border**, and `overflow-hidden` is what clips the glow at the corners
- [ ] `h1` **32 / 800 / 1.1 / −.03em** (`text-[clamp(24px,2.6vw,32px)]`), `margin: 8px 0 10px`
      — this card's title is the page's **only** `h1` (the reference has none; see spec defect 1)
- [ ] eyebrow **13.5 / 700 / 1.5** in gold; body **15.5 / 400 / 23.25** in `#dbe4ff`
- [ ] content padding `p-[clamp(24px,4vw,40px)]` (40 at 1,440, 25.6 at 640, 24 below 600)
- [ ] at 1,440 verify the four text rows end at **form y 336.38** and the card bottom at **506.38**

## 5 — The illustration

- [ ] one inline SVG, `viewBox="0 0 240 200"`, `aria-hidden="true"`, `w-full max-w-[260px] h-auto`
- [ ] six shapes exactly: `rect 34 52 172×118 rx14 #fde047`; flap `path M34 66 120 124l86-58
      stroke #1e3a8a width 6`; letter `rect 58 22 124×86 rx8 #fff` rotated `-6 120 65`; three rules
      `stroke #93c5fd width 6` round-capped; badge `circle 196 44 r18 #f472b6`; check
      `path stroke #fff width 4`
- [ ] art panel: `grid place-items-center min-h-[220px] p-6` + the radial gradient, `self-stretch`
- [ ] at 640 and below: art `min-h-[160px]`, SVG `max-w-[200px]` → panel **214.66** tall, full width

## 6 — Navy card form

- [ ] `form` is a client-only form: `noValidate`, `onSubmit` prevented (`action="#" method="post"` is
      the reference's placeholder, meaningless in React)
- [ ] label **14 / 700 / 21**, `mb-1.5`, `htmlFor` the input
- [ ] row: `flex flex-wrap gap-2` — **this wrap is the 440 px breakpoint**, do not replace it with a
      media query
- [ ] input: `flex-[1_1_220px] min-w-0 px-4 py-[13px] rounded-[14px] border-2 border-transparent
      bg-white text-ink text-[16px]` + `placeholder:text-placeholder`; focus → `border-gold` and
      `shadow-[0_0_0_4px_rgb(253_224_71/.35)]`; invalid → `border-invalid`
- [ ] button: `flex-none px-[22px] py-[13px] rounded-[14px] bg-gold text-ink text-[16px] font-extrabold`
      + `hover:brightness-[1.06] hover:-translate-y-px active:translate-y-0` +
      `focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-[3px]`
- [ ] hint **13 / 19.5** in `#dbe4ff`, `mt-2.5`; error slot **after** the hint (the reference's order)
- [ ] error: **14 / 700**, `mt-2`, `flex items-center gap-1.5`, colour `#fecaca`, with the 18 × 18
      disc badge — **visible** here, unlike the reference (spec defect 2)

## 7 — White card (`variant="compact"`)

- [ ] surface: `rounded-[28px] bg-white text-ink border border-line shadow-[…]
      grid grid-cols-1 items-center` — `items-center` is why the content is centred in the stretched
      card (29.22 px band top and bottom at 1,440)
- [ ] eyebrow in `#1e40af`, title **22 / 800 / 1.1 / −.66 px**, body `#4b5563`
- [ ] input **54** tall with `border-line-input` (`#c7d2ea`), focus → `border-navy` +
      `shadow-[0_0_0_4px_rgb(30_58_138/.2)]`
- [ ] button **full width**, `mt-2.5`, `bg-navy text-white`, focus outline `#1e3a8a` — it is **not**
      in a flex row, so it is **50** tall and must never be forced to 54
- [ ] error slot sits **between** the input and the button (no hint on this card)
- [ ] no art, no `.cl-card19__row`, no hint

## 8 — Behaviour (`useSignupForm` + `SignupCard`)

- [ ] one component, one hook, two instances — **independent state** (a success on one card must never
      touch the other); `id`s derived per instance (`primary-email` / `compact-email`)
- [ ] validation order: `valueMissing` → *"Enter your email address to subscribe."*;
      `typeMismatch` **or a dotless domain** → *"That doesn't look like an email address. Check for a
      missing @ or domain."* (apostrophe **U+2019**) — the dot rule is the documented delta
- [ ] on error: `aria-invalid="true"`, `aria-describedby` **merged** (`"<err-id> <hint-id>"` on the
      navy card, `"<err-id>"` alone on the white card), focus stays on the input, the `role="alert"`
      paragraph appears
- [ ] on `input`: if the value now passes, clear the error, remove `aria-invalid`, restore
      `aria-describedby` to the hint alone / remove it when there is no hint
- [ ] on success: hide the form wrapper (`hidden`), show the done block, echo the trimmed address in
      `<strong>`, move focus to the `h3` (`tabIndex={-1}`)
- [ ] the done block: `52 × 52` tick (`#22c55e`, 28 px `stroke-width 3` white check, `aria-hidden`),
      title **26 / 800 / 39 / −.52 px** `mb-2`, copy with `word-break: break-all` on the address
- [ ] heights to hit: navy **353.94** after its own success, both **258.2**, page **546** / **450**

## 9 — Motion

- [ ] input `transition-[border-color,box-shadow] duration-200`; button
      `transition-[transform,filter] duration-[150ms,200ms]`
- [ ] done block: `@keyframes` `opacity 0 → 1`, `translateY(8px) → none`, **400 ms ease both**
- [ ] `@media (prefers-reduced-motion: reduce)`: no transitions, **no** hover lift, **no** entry
      animation — same final state, and the tests must prove it

## 10 — Tests, docs and ship (TDD, 100 % coverage)

- [ ] tests first (red): both titles render; eyebrow/body copy; input `type=email` + `required` +
      `autoComplete="email"`; empty submit message; dotless-domain rejection; `not-an-email` message;
      error clears on typing; success hides the form and shows the done block with the address;
      focus lands on the done `h3`; the two cards are independent; `aria-invalid` /
      `aria-describedby` transitions; **one** `h1`; `aria-labelledby` on both sections;
      `aria-hidden` on the art and the tick; **0** `<img>` / **0** `<a>`; reduced motion
- [ ] `npm run verify:app postbox` → typecheck + lint + knip + fallow + **100 %** coverage + build
- [ ] `openspec validate template-postbox --type spec`
- [ ] add the row to `TEMPLATES.md` at the end of `## Bootstrap Cards (20)`, directly after the last
      card row present — copy straight from the spec's *Why this design has no row* block
      (`- [x] **Card 19** — … · [postbox](https://postbox.free.componentdock.com)`)
- [ ] `npm run readme:status`; the reference has **no footer** — do not invent one, and do not add
      ColorLib links; `grep -ri 'colorlib\|card-19\|cl-card19' apps/postbox` → no matches
- [ ] ship on `feat/template-postbox`, PR, squash-merge, then `[x]` + surge URL in `TEMPLATES.md`
