# Notebell — task outline

Recreation of the ColorLib **Card V18** design (`card-18`) at `apps/notebell`. Spec is the authority:
`openspec/specs/template-notebell/spec.md`. Design notes: `docs/templates/notebell/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/card-18/` (the slug-only
`theme/card-18/` 404s — this family lives under `bootstrap/`). Check boxes only as work ships.

> This is a **notification inbox, not a card grid**: one 620 px column on `#0d0f14` with a violet
> top-centre glow, holding a header (*Notifications* + a 26 px counter pill + *Mark all as read*) and
> **four** notification cards in a 10 px-gapped list, then a 1 px toast slot that only grows when it has
> a message. No nav, no hero, no second column, no footer in the reference.
>
> It is **stateful**: 3 of 4 cards start unread (violet-tinted surface `#1b1e30`, border `#3a3f78`, a
> 9 px dot at `top 20 / right 18` with a 4 px halo), the counter reads **3**, every action mutates it,
> archiving fades the card 24 px right over **250 ms** then removes it, and **Undo** restores **one**
> card at its original index. Archive all four → *"You're all caught up."*
>
> The risk is not the layout, it is flattening the four things that make it read as this design:
> **the column has no surface** (the cards are the surfaces), **unread = surface + border + dot**
> (`#1b1e30` vs `#171a22` is a 2 % step that only reads with the border jump), **heights are
> text-driven** (200.5 / 130.5 / 130.5 / 130.5 at 1,440 → 244/153/153/130.5 at 390 →
> 265/153/153/197.5 at 375), and **the buttons render 15 / 400** even though the sheet declares
> 13.5 / 600 (defect 1 — the screenshot agrees with the render).
>
> Six numbers decide fidelity: panel **620 × 689** at y 72; header **36** (`h1` **180.77** + counter
> **26** + all-button **124 × 34.5**); cards **200.5 / 130.5 / 130.5 / 130.5**; quote **510 × 62**;
> buttons **113 / 129 / 101 × 36.5** at radius **9**; toast **1 → 41 → 49** px and page bottom **761**.
>
> **Zero images.** No `<img>`, no background images, no picsum placeholder — the four avatars are CSS
> circles/squares with initials or inline SVG glyphs.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/notebell`; rename the package to
      `@free-react-templates/notebell`
- [ ] `public/CNAME` = `notebell.free.componentdock.com`; `"homepage"` =
      `https://notebell.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/notebell" package-lock.json` → 1)
- [ ] `index.html`: title, description, one **Instrument Sans** Google Fonts `<link>`
      (`family=Instrument+Sans:wght@400;500;600;700&display=swap` — note the reference's 500 is
      declared nowhere even though its files ship; do not use `font-medium` at all)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #0d0f14`, `--color-ink: #eef0f6`, `--color-muted: #a3a9b8`,
      `--color-surface: #171a22`, `--color-surface-unread: #1b1e30`, `--color-line: #262a35`,
      `--color-line-unread: #3a3f78`, `--color-accent: #818cf8`, `--color-text-dim: #c9cdd8`,
      `--color-quote-ink: #d5d8e2`, `--color-quote-bg: rgb(255 255 255 / .04)`,
      `--color-btn: #222634`, `--color-btn-line: #343a4a`, `--color-btn-hover: #2a2f3f`,
      `--color-btn-line-hover: #4a5166`, `--color-ghost-hover: rgb(255 255 255 / .06)`,
      `--color-count-zero: #2a2f3b`, `--color-toast: #262a35`,
      `--color-avatar-1: #6d28d9`, `--color-avatar-2: #15803d`, `--color-avatar-3: #b45309`,
      `--color-avatar-4: #be123c`
- [ ] radii: card **16**, avatar square **12**, button **9**, toast **12**, quote `0 10px 10px 0`,
      pill **999**
- [ ] `--font-sans: "Instrument Sans", system-ui, …`; base **15 / 1.5** inside the column; no `cl-`
      class names anywhere
- [ ] the radial glow as one layer: `radial-gradient(50% 40% at 50% 0%, rgb(99 102 241 / .18),
      transparent 70%)`

## 2 — Shell

- [ ] `main`: `flex justify-center bg-ground px-4 py-[clamp(32px,6vw,72px)]` with the glow, **no**
      `min-h-screen` (content is **833** tall at 1,440, not the 900 viewport)
- [ ] column: `w-full max-w-[620px] text-ink text-[15px] leading-[1.5]` and **nothing else** — no
      `rounded`, no `border`, no `bg`, no `shadow`, no `p-*`
- [ ] verify **620 × 689** at x 410 / y 72 at 1,440; **608** at 640, **448** at 480, **358** at 390,
      **288** at 320

## 3 — Header

- [ ] `header`: `flex flex-wrap items-center justify-between gap-3 mb-4` (**620 × 36**)
- [ ] `h1` *Notifications*: `flex items-center gap-2.5 text-[24px] font-bold tracking-[-.02em]
      leading-[1.5]` (**180.77** wide) with `id="notebell-title"`; the section is
      `<section aria-labelledby="notebell-title">`
- [ ] counter `<span>`: `inline-grid place-items-center min-w-[26px] h-[26px] px-2 rounded-full
      bg-accent text-[#0d0f14] text-[14px] font-bold`; at `0` swap to `bg-[#2a2f3b] text-muted`
- [ ] add the `sr-only` *" unread"* inside the `h1` so its name reads *"Notifications 3 unread"*
- [ ] *Mark all as read*: `px-2.5 py-1.5 rounded-lg text-accent text-[15px] font-normal
      hover:bg-[rgb(129_140_248/.12)]` — **font-normal**, not 600 (defect 1)
- [ ] header must stay on one line at **350** and wrap at **349** (**82.5**)

## 4 — Cards (shared shell)

- [ ] `<ul>`: `grid gap-2.5 list-none m-0 p-0` (**620 × 622** at y 124)
- [ ] `<li>`: `relative flex gap-3.5 rounded-[16px] border bg-surface border-line px-[18px] pr-[18px]
      py-4 pl-4` — the exact padding is **16 / 18 / 16 / 16**
- [ ] unread: `bg-surface-unread border-line-unread`; read: `bg-surface border-line`
- [ ] transition: `transition-[background-color,border-color,opacity,transform] duration-[250ms]`
- [ ] **no** shadow, **no** `min-height`, **no** divider between cards
- [ ] unread dot: a `<span aria-hidden>` (`h-[9px] w-[9px] rounded-full bg-accent absolute top-5
      right-[18px] shadow-[0_0_0_4px_rgba(129,140,248,.2)]`), read cards render **none**

## 5 — Card content

- [ ] avatar **42 × 42** `flex-none grid place-items-center`; initials variant `rounded-full
      text-[14px] font-bold text-white`; glyph variant `rounded-[12px]` with a **20 px**
      `stroke-width 2.4` white glyph; ground from the four `--color-avatar-*` tokens
- [ ] body: `flex-1 min-w-0 pr-[18px]` (**528** wide, **510** of text) — the 18 px is the dot's lane
- [ ] text: `text-[15px] leading-[1.5] text-text-dim` (unread overrides to `text-ink`), `strong` →
      `text-ink font-semibold`
- [ ] quote (card 1 only): `<blockquote class="mt-2 px-3 py-2.5 border-l-[3px] border-accent
      rounded-r-[10px] bg-quote-bg text-quote-ink text-[14px]">` (**510 × 62** at 1,440)
- [ ] meta: `mt-1.5 text-[13px] leading-[1.5] text-muted` — visually-hidden state word
      (`Unread ·` / `Read ·`) + `<time dateTime="…">` + `·` + category
- [ ] actions: `mt-3 flex flex-wrap gap-2` (**510 × 36.5**)
- [ ] buttons: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[9px] border border-btn-line
      bg-btn text-[15px] font-normal hover:bg-btn-hover hover:border-btn-line-hover` (**113** /
      **129** wide); ghost: `border-transparent bg-transparent text-muted
      hover:bg-ghost-hover hover:text-ink` (**101**)
- [ ] glyphs: **16 × 16**, `stroke: currentColor`, `stroke-width 2`, `aria-hidden`

## 6 — State machine (`lib/inbox.ts` + `useInbox`)

- [ ] `INITIAL`: 4 items — *Mara Kovač* quote card (unread), *Deploy web-app #1482* (unread, check
      avatar), *Diego Alves / Design Review* (unread), *Invoice INV-2093* (**read**, warning avatar)
- [ ] reducer/hook API: `toggleRead(id)`, `markAllRead()`, `archive(id)`, `undo()`; derived
      `unreadCount` and `message`
- [ ] `toggleRead`: flip `read`, message `Marked as read.` / `Marked as unread.`, no Undo
- [ ] `markAllRead`: all `read: true`, counter `0` (grey pill), message
      `All notifications marked as read.`
- [ ] `archive`: mark `leaving`, hold `{ item, index }` (single slot — a second archive replaces it),
      remove after **250 ms** (or immediately under reduced motion), message `Notification archived.`
      with Undo, move focus (next sibling → previous sibling → all-button)
- [ ] `undo`: `splice(index, 0, item)` so the original order returns, message
      `Notification restored.`, clear the slot, Undo hides, focus the restored card's read button
- [ ] empty note when `items.length === 0`: *"You're all caught up."* `mt-6 text-center text-muted`
      (**22.5** tall) **below** the toast
- [ ] toast: always mounted, `role="status"`, `mt-3.5 min-h-px`, with a message
      `px-3.5 py-2.5 rounded-xl bg-toast` (**41**, **49** with Undo); Undo `px-2.5 py-1 rounded-lg
      text-accent text-[14px] font-normal`

## 7 — Motion

- [ ] leaving card: `opacity-0 translate-x-6` over **250 ms**, then unmount
- [ ] reduced motion (`prefers-reduced-motion: reduce`): no transition, no transform, unmount on the
      next frame — same counter/toast/focus result
- [ ] **no** `@keyframes`, no spinners, no hover lift on the cards themselves

## 8 — Tests, docs and ship (TDD, 100 % coverage)

- [ ] tests first (red): counter 3 → 2 → 3; `0` + grey pill after *Mark all*; each card's label/state
      word; archive removes the card and offers Undo; undo restores the **original index**; second
      archive replaces the undo slot; four archives → the empty line; toast text per action; Undo
      hidden except after an archive; reduced-motion instant removal; focus target after an archive
      (three branches); `<time dateTime>` on all four; dot `aria-hidden`; one `h1` + section
      `aria-labelledby`; **0** `<img>` and **0** `<a>`
- [ ] `npm run verify:app notebell` → typecheck + lint + knip + fallow + **100 %** coverage + build
- [ ] `openspec validate template-notebell --type spec`
- [ ] add the row to `TEMPLATES.md` at the end of `## Bootstrap Cards (20)`, directly after the last
      card row present — copy straight from the spec's `Why this design has no row` block
      (`- [x] **Card 18** — … · [notebell](https://notebell.free.componentdock.com)`)
- [ ] `npm run readme:status`; footer links `https://www.componentdock.com/` as "Component Dock";
      `grep -ri 'colorlib\|card-18\|cl-card18' apps/notebell` → no matches
- [ ] ship on `feat/template-notebell`, PR, squash-merge, then `[x]` + surge URL in `TEMPLATES.md`
