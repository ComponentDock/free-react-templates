# Octavo — task outline

Recreation of the ColorLib **Card V03** design (`card-03`) at `apps/octavo`. Spec is the authority:
`openspec/specs/template-octavo/spec.md`. Design notes: `docs/templates/octavo/design-notes.md`.
Check boxes only as work ships.

> This is a **section, not a site**: one warm-paper band, a `h1` + "All articles →" over a 2 px ink rule, and
> three article cards. The reference is **4,469 B of HTML + one 7,618 B stylesheet and no JavaScript at all**.
> The risk is not a missing band — it is *inventing* one (a nav, a category filter, pagination, an article-detail
> route, a newsletter) or building a "blog card" with a plate, because every other card snippet in this family
> has one.
>
> Three details decide fidelity: **the card has no plate** (no background, border, radius or shadow — the only
> rounding is the photograph's 14 px), **one hue per card drives the chip text, the avatar disc and the focus
> ring** (blue / green / magenta, set once), and **the whole card is the link** (an `::after` overlay at
> `inset: 0` whose only visible affordance is a 1.5 px underline revealing itself on *card* hover). Get those
> wrong and the palette will not save it.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/octavo`; rename the package to `@free-react-templates/octavo`
- [ ] `public/CNAME` = `octavo.free.componentdock.com`; `homepage` = `https://octavo.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/octavo" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Fraunces 600**
      (`css2?family=Fraunces:wght@600&display=swap`), `preconnect` to `fonts.gstatic.com` — **not** the
      reference's four self-hosted `@font-face` blocks (two files, one of them a weight nothing uses)
- [ ] `@theme` in `src/index.css`: `--color-paper: #fbfaf7`, `--color-ink: #111827`, `--color-muted: #4b5563`,
      `--color-chip-blue: #1d4ed8`, `--color-chip-green: #047857`, `--color-chip-magenta: #a21caf`,
      `--color-pill: #f1efe9`, `--color-pill-ink: #374151`, `--color-rule: #e7e5e0`, `--color-media: #e5e7eb`,
      `--radius-cover: 14px`, `--font-serif: "Fraunces", Georgia, serif`;
      body uses the verbatim system stack `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] no new dependency: the only icon is the clock, one inline SVG reused three times
- [ ] **do not port the `:where(html) … { all: revert; }` reset guard** (60 lines of it) — Tailwind's preflight
      is the equivalent, and the guard's `box-sizing: content-box` side effect is reproduced by the container
      rule below

## 1 — Primitives

- [ ] `ArticleCard` — `<article>`: **transparent** (no background, border, radius, shadow, padding),
      `position: relative`, `display: flex; flex-direction: column`, `color: #111827`, `font-size: 15px`,
      `line-height: 1.6`, `id="post-<n>"`; `flex: 1` body so the meta strips stay level across the row
- [ ] `CardCover` — `aspect-ratio: 16 / 10`, radius **14** on **all four corners**, `overflow: hidden`, ground
      `#e5e7eb`; `<img>` `w-full h-full object-cover`, no radius of its own, `transition: transform .6s
      cubic-bezier(.2,.7,.2,1)`, group-hover `scale(1.06)`; real `alt` per photo
- [ ] `CategoryChip` — absolutely positioned **top 14 / left 14**, `5px 11px`, radius **999**, white ground,
      **coloured text** (`#1d4ed8` / `#047857` / `#a21caf`), 12.5/600, `shadow: 0 2px 8px rgba(0,0,0,.15)`;
      no truncation, no wrap
- [ ] `Byline` — `<footer>`: `flex`, `items-center`, `gap 12`, `margin-top 18`, `padding-top 16`,
      `border-top 1px solid #e7e5e0`, 13.5 px; parts = initials disc (**38 × 38**, `rounded-full`, ground =
      card hue, 13/600 white, `aria-hidden`), a `flex: 1` author/date column (13.5/600 `#111827` over
      13.5/400 `#4b5563` inside `<time datetime>`), and the read pill
- [ ] `ReadTime` — `inline-flex`, `gap 6`, `padding 4px 10px`, radius **999**, ground `#f1efe9`, text
      `#374151` 13.5/500, `whitespace-nowrap`, a **15 × 15** clock SVG (`fill: none; stroke: currentColor;
      stroke-width: 2; stroke-linecap: round`, `aria-hidden`) then "6 min read"
- [ ] `CardLink` — the headline inside `<h2>` (Fraunces **22 px** / 27.5 / 600 / `−0.22px`,
      `margin: 0 0 10px`), `colour: inherit`, `background: linear-gradient(currentColor, currentColor) 0 100% /
      0 1.5px no-repeat`, `transition: background-size .35s ease`, **group-hover** `100% 1.5px`;
      `::after { position: absolute; inset: 0; z-index: 1; border-radius: 14px }`;
      `:focus-visible::after { outline: 3px solid <card hue>; outline-offset: 6px }`

## 2 — The band

- [ ] `JournalRow` — `<main id="journal">` with `#fbfaf7` ground, `max-width: 1180px` **content box**,
      `margin: 0 auto`, `padding: clamp(32px, 6vw, 72px) 16px`, `color: #111827`
- [ ] header — `flex`, `flex-wrap: wrap`, `align-items: baseline`, `justify-content: space-between`, `gap: 12`,
      `padding-bottom: 18`, `margin-bottom: 28`, `border-bottom: 2px solid #111827`: `h1` "From the journal"
      (`clamp(30px, 4vw, 44px)` / 1.1, 600, `−0.02em`, Fraunces) and the link "All articles →"
      (15/600 `#111827`, `hover: underline underline-offset-4`, `:focus-visible` `2px #1d4ed8` offset 4,
      radius 4, `→` in an `aria-hidden` span)
- [ ] grid — `repeat(auto-fit, minmax(280px, 1fr))`, gap `clamp(20px, 3vw, 36px)`; **never four columns**
- [ ] page footer — one small line of print linking **https://www.componentdock.com/** ("Component Dock")

## 3 — Content

- [ ] the three articles, verbatim from the spec: **Productivity** / "The two-hour morning: how we plan deep
      work around meetings" / Hana Novak / 18 Sep 2026 / 6 min read; **Development** / "Container queries in
      production: what changed after six months" / Jonas Pereira / 11 Sep 2026 / 9 min read; **Life outside
      work** / "What a balcony garden taught me about shipping small" / Elif Kaya / 2 Sep 2026 / 4 min read
- [ ] excerpts verbatim (three lines at 1440, no `line-clamp`, no ellipsis)
- [ ] photos: `picsum.photos/seed/octavo-<n>/800/500` (deterministic, one seed per article), descriptive `alt`
      naming the scene, `#e5e7eb` ground behind every image
- [ ] each card's hue is **one** value reused for chip text, avatar ground and focus ring — not three literals
- [ ] anchors resolve: headlines to `#post-1..3`, "All articles →" to `#journal`; **no** bare `#` anywhere and
      no article route invented (the source has no article pages — it has none at all)

## 4 — Verification

- [ ] columns **1 / 1 / 1 / 1 / 2 / 2 / 2 / 2 / 3 / 3 / 3 / 3** and card widths
      **288 / 358 / 488 / 579 / 280 / 356.5 / 420.5 / 433.6 / 280.1 / 310.2 / 359.1 / 369.3** at 320 / 390 /
      520 / 611 / 612 / 768 / 900 / 927 / 928 / 1,024 / 1,180 / 1,440
- [ ] content height **699.2** at 1440 (document 900), **689.3** at 1,024, **1,098.6** at 768, **1,892** at
      611, **1,083** at 612, **1,712** at 520, **1,540.3** at 390, **1,593.5** at 320 — the 611→612 drop is
      real, do not smooth it
- [ ] `scrollWidth === clientWidth` **and** `scrollTo(200,0) → scrollX 0` at 320 / 360 / 390 / 520 / 600 /
      611 / 612 / 700 / 768 / 900 / 927 / 928 / 1,024 / 1,180 / 1,200 / 1,212 / 1,440 / 1,920
- [ ] card **369.3 × 458.8**, cover **369.3 × 230.8**, body **155** (`18 / 55 / 10 / 72`), meta **55**,
      avatar **38 × 38**, read pill **114 × 29.6**, chip **30 tall / 108 · 115.7 · 144.1 wide** — and **no**
      plate on the card
- [ ] at 1,100 px the three cards are **488.3** tall with every meta at y **595.6** while card 3's headline is
      one line shorter (slack sits between its excerpt and its rule)
- [ ] hover cycle: photo `matrix(1.06, …)`, underline `0px 1.5px` → `100% 1.5px`; nothing else moves
- [ ] focus ring is per-card hue on the overlay (`3px`, offset 6); head link ring `2px #1d4ed8` offset 4
- [ ] `prefers-reduced-motion: reduce` → photo + link transitions `none`, hover transform `none`, nothing else
- [ ] one `h1`, three `h2`, three `<article>`, `<main>` + `<header>` + card `<footer>`; clock/arrow/avatars
      `aria-hidden`; `time[datetime]` on all three dates
- [ ] `grep -ri colorlib apps/octavo` and `grep -ri 'card-03' apps/octavo` → no matches
- [ ] 100% coverage, `scripts/verify-app.sh octavo` green
- [ ] after shipping: add the row from the spec under the new `## Bootstrap Cards (20)` section, between
      `## Bootstrap Carousels (20)` and `## Bootstrap Checkboxes (20)`, and mark it `[x]` (the implementer
      stream owns `TEMPLATES.md`, not the prep)
