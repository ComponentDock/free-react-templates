# Banter — task outline

Recreation of the ColorLib **Card V20** design (`card-20`) at `apps/banter`. Spec is the authority:
`openspec/specs/template-banter/spec.md`. Design notes: `docs/templates/banter/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/card-20/` (the slug-only
`theme/card-20/` 404s — this family lives under the `bootstrap/` prefix). Check boxes only as work ships.

> This is a **community feed, not a card grid**: two white **539 px** post cards on a `#eef0f4`
> ground, **22 px** apart, **unequal on purpose** (`613.25` / `358.25`, `items-start`). No nav, no
> hero, no footer, no heading visible, only one photograph.
>
> Each card is five rows: **avatar + name + `@handle` + time + `⋯`** header (**60** tall), a
> paragraph (**15 / 22.5**, three lines, ending in a blue hashtag on card 1), a **full-bleed 3:2
> photo** (**537 × 358**) *or* a bordered **link preview** (**501 × 90**, 64 px gradient tile), a muted
> engagement line (**44.25**), and a **three-up action bar** (**517 × 55.5**, three **169.66 × 40.5**
> tracks) whose like / comment / share controls really work.
>
> Seven numbers decide fidelity: the feed is `auto-fit minmax(min(100%,420px),1fr)` at a **22** gap, so
> two columns exist from viewport **894** and one column at **893** — **there is no width media query
> anywhere**; the photo is `aspect-ratio: 3/2`, `object-fit: cover`, **0** side margin; the bar is a
> **3-column grid**, `margin: 0 10px`, `padding: 6px 0 8px`; opening a comment adds exactly **64.5**
> to the card; the action labels render **15 / 400** (the authored 14.5 / 600 loses the cascade);
> the toast is **151 × 38** at `bottom: 24px`.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/banter`; rename the package to
      `@free-react-templates/banter`
- [ ] `public/CNAME` = `banter.free.componentdock.com`; `"homepage"` =
      `https://banter.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/banter" package-lock.json` → 1)
- [ ] `index.html`: title, description, one **Onest** Google Fonts `<link>`
      (`family=Onest:wght@400;500;600;700&display=swap` — 800 measures identically to 700, so never
      use `font-extrabold`)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #eef0f4`, `--color-card: #ffffff`, `--color-ink: #111827`,
      `--color-muted: #525c6b`, `--color-link: #1d4ed8`, `--color-liked: #be123c`,
      `--color-line: #e8eaef`, `--color-hover: #f3f4f6`, `--color-expanded: #eff6ff`,
      `--color-tile-from: #9333ea`, `--color-tile-to: #2563eb`, `--color-avatar-teal: #0e7490`,
      `--color-avatar-violet: #9333ea`, `--color-input: #f9fafb`,
      `--color-input-line: #d1d5db`, `--color-placeholder: #6b7280`, `--color-me: #374151`
- [ ] radii: card **20**, link preview **14**, tile **12**, action **10**, avatar/input/Post **999**
- [ ] shadow: card `0 1px 2px rgb(17 24 39 / .05)`; toast `0 12px 28px -12px rgb(0 0 0 / .5)`
- [ ] `--font-sans: "Onest", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`; the cards
      re-base to **15 / 1.5** (the page itself is 16); no `cl-` class names anywhere
- [ ] deadlines the reference does not have: none — no `border-radius` on the bar, no gradient on the
      page, no dark mode

## 2 — Shell

- [ ] `main`: `mx-auto max-w-[1100px] px-4 py-[clamp(28px,5vw,64px)] bg-ground` with **no**
      `min-h-screen` (content is **741.25** at 1,440, not the 900 viewport)
- [ ] verify `main` **1132** wide at x **154** and the feed **1100** at x **170**, y **64**

## 3 — The feed

- [ ] `grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[22px]`
- [ ] **do not** add `md:`/`lg:`/`xl:` breakpoints — verify the switch by measurement: **2 × 420** at
      a 894 viewport, **1 × 861** at 893
- [ ] verify the cards stay **unequal** (**613.25** / **358.25** at 1,440): `items-start`, never
      `stretch`

## 4 — Card shell (`<PostCard>`)

- [ ] `overflow-hidden rounded-[20px] border border-line bg-card text-[15px] leading-[1.5]
      text-ink shadow-[0_1px_2px_rgb(17_24_39/.05)]`
- [ ] header: `flex items-center gap-3 px-[18px] pr-4 pt-4` → **537 × 60**
- [ ] avatar **44** round, `grid place-items-center`, white **14 / 700** initials (teal `#0e7490` /
      violet `#9333ea` via a token, not an inline var)
- [ ] name **15.5 / 700 / 20.14** with the `@handle` inline at weight **400** and `text-muted`; meta
      **13 / 19.5** `text-muted` with a `<time dateTime>` · audience
- [ ] `⋯` **38 × 38** round, 20 px icon, `text-muted`, `hover:bg-hover`,
      `aria-label="More options for <name>'s post"` — **no menu**, no handler, no state
- [ ] text: `mx-[18px] mt-3 mb-3.5` (**12 / 18 / 14**) at **15 / 22.5**; `__text--big` = **17 / 25.5**
- [ ] hashtag: `<a>` in `text-link font-semibold` (600), `no-underline hover:underline`
- [ ] stats: `flex flex-wrap justify-between gap-x-3 gap-y-1.5 px-[18px] py-3 text-[13.5px]
      text-muted` → **44.25** one line, **70.5** wrapped at 390
- [ ] bar: `mx-2.5 grid grid-cols-3 gap-1 border-t border-line pt-1.5 pb-2`

## 5 — Photo media row

- [ ] `<img class="block w-full aspect-[3/2] object-cover">` — **no** horizontal margin, so it is
      full-bleed and clipped by the card's radius; placeholder
      `https://picsum.photos/seed/banter-1/900/600`
- [ ] `alt` describes the scene (the reference ships a full sentence) — never `alt=""` here
- [ ] verify **537 × 358** at a 539 card, y **218.5**, and the card **613.25**

## 6 — Link media row

- [ ] `<a class="mx-[18px] mb-1 flex items-center gap-3.5 rounded-[14px] border border-line p-3
      transition-colors hover:bg-[#f8fafc]">` → **501 × 90**
- [ ] tile **64 × 64** radius **12**, `bg-linear-to-br from-tile-from to-tile-to`, white code glyph
      **28** px at `stroke-width 2`
- [ ] text column `min-w-0`: title **14.5 / 700** and domain **13 / 400** `text-muted`, both clipped
- [ ] verify the card is **358.25** at 1,440 (content-bound, not image-bound)

## 7 — Action bar

- [ ] three `1fr` tracks; each action `inline-flex items-center justify-center gap-[7px]
      rounded-[10px] px-1.5 py-[9px] text-[15px] text-[#374151] transition-colors hover:bg-hover`
      → **169.66 × 40.5**
- [ ] label type is **15 / 400** — the reference's authored 14.5 / 600 never renders (specificity
      accident); reproduce the measured size, do **not** "fix" it to 14.5 / 600
- [ ] icons 20 px, `fill:none`, `stroke:currentColor`, `stroke-width 1.9`, round caps/joins
- [ ] like count `<span class="font-medium tabular-nums">` — **500** is the one weight the labels do
      not share
- [ ] like pressed: `text-liked` + `fill:currentColor` + the 0.45 s beat
- [ ] comment expanded: `bg-expanded text-link` while `aria-expanded="true"`
- [ ] **fit all three labels at 320** (`min-w-0`, tighter gap/padding under 360) — the reference
      clips *Share* by 26 px (spec defect 3; documented delta)

## 8 — Reply row

- [ ] `flex items-center gap-2.5 px-4 pt-1 pb-4`, `hidden` until Comment opens → **64.5** tall
- [ ] *YOU* avatar **36 × 36** `bg-me` at **10 / 700**; input `min-w-0 flex-1 rounded-full
      border border-input-line bg-input px-3.5 py-2.5 text-[15px]` with
      `placeholder:text-placeholder`, focus → `outline-2 outline-[#93c5fd] outline-offset-1 bg-white`
- [ ] Post `rounded-full bg-link px-4 py-[9px] text-[15px] font-normal text-white
      hover:bg-[#1e40af]`
- [ ] one `useId()` per card for the form id, input id and label `htmlFor`

## 9 — Behaviour (three hooks + one toast)

- [ ] `usePostActions`: `{ liked, count }`, toggles `aria-pressed`, `count ± 1`, renders through
      `Intl.NumberFormat('en-US')` — *249* / *1,203*, **never** the raw `data-count` formatting
- [ ] `useCommentForm`: `{ open, value, toggle, submit, onEscape }` — toggle sets `hidden`, focuses
      the input on open; `Escape` closes **from any control inside the form** and refocuses the
      Comment button (delta: the reference binds Escape to the input only); submit prevents default,
      clears on a non-empty value, keeps the form open, focuses Post; empty submit announces
      *"Write a comment first."* (delta)
- [ ] `useShare`: `navigator.share` only when `matchMedia('(pointer: coarse)').matches` **and** it
      exists; else `navigator.clipboard.writeText(url)` → *"Link copied to clipboard."*; on rejection
      surface a **copyable** URL (delta) — not only a 2.6 s toast
- [ ] `useToast`: one `role="status"` paragraph, **2,600 ms**, a new message clears the old timer,
      empty state is `padding: 0; opacity: 0` so it never blocks clicks
- [ ] initial data reproduces the screenshot exactly: card 1 unpressed **248**, card 2 **pressed
      1,204**, stats copy static, `⋯` inert

## 10 — Motion

- [ ] `@keyframes beat` — `scale(1.3)` at 30 %, `scale(.92)` at 60 %, **0.45 s ease**, on the heart
      only when pressed
- [ ] `transition-colors duration-200` on actions, the link preview and the toast's opacity
- [ ] `@media (prefers-reduced-motion: reduce)`: no transitions, **no** beat — the pressed colour and
      the filled heart still apply

## 11 — Tests, docs and ship (TDD, 100 % coverage)

- [ ] tests first (red): two cards with the reference copy; name/handle/meta per card; the photo
      card's hashtag link; the link card's tile + domain; both stats strings; **15 / 400** action
      labels and the **500** count; like 248 → 249 → 248 with `aria-pressed` and **unformatted**
      `data-count`; link card 1,204 → 1,203 with a **formatted** label; comment open focuses the
      input and grows the card; Escape from input **and** from Post; empty submit message; valid
      submit keeps the form open and announces; clipboard success, `navigator.share` on a coarse
      pointer, clipboard rejection fallback; toast timer replacement at 2,600 ms; the two cards are
      independent; static stats after interactions; `⋯` has no menu; one hidden `h1` + two `h2` with
      `aria-labelledby`; both forms `hidden` at rest; reduced motion
- [ ] `npm run verify:app banter` → typecheck + lint + knip + fallow + **100 %** coverage + build
- [ ] `openspec validate template-banter --type spec`
- [ ] append the row to `TEMPLATES.md` at the end of `## Bootstrap Cards (20)`, directly after the
      last card row present — copy straight from the spec's *Why this design has no row* block
      (`- [x] **Card 20** — … · [banter](https://banter.free.componentdock.com)`). This **closes the
      `card` family** (20 of 20).
- [ ] `npm run readme:status`; the reference has **no footer** — do not invent one, and do not add
      ColorLib links; `grep -ri 'colorlib\|card-20\|cl-card20' apps/banter` → no matches
- [ ] ship on `feat/template-banter`, PR, squash-merge, then `[x]` + surge URL in `TEMPLATES.md`
