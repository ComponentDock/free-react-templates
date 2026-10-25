# Nameplate — task outline

Recreation of the ColorLib **Card V01** design (`card-01`) at `apps/nameplate`. Spec is the authority:
`openspec/specs/template-nameplate/spec.md`. Design notes: `docs/templates/nameplate/design-notes.md`.
Check boxes only as work ships.

> This is a **section**, not a site: one sand band, a centred eyebrow + headline, four team cards, done. The
> whole reference is **7,149 B of HTML + one 9,249 B stylesheet + zero JavaScript**. The risk here is not
> missing a band — it is _inventing_ one. Do not add a nav, hero, carousel, filter or "load more" to make the
> app feel like the other templates; four cards and a headline is the design.
>
> The three details that decide fidelity: **the 5 : 5.4 media window with `object-position: center 25%`**,
> **the tag floating 12 px inside the photo** (not a chip under it), and **the dashed hairline** above the
> footer. Get those three wrong and the palette will not save it.

## 0 — Scaffold

- [x] `cp -r apps/<simplest-existing-app> apps/nameplate`; rename the package to
      `@free-react-templates/nameplate`
- [x] `public/CNAME` = `nameplate.free.componentdock.com`; `homepage` = `https://nameplate.free.componentdock.com`
- [x] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/nameplate" package-lock.json`
- [x] `index.html`: one Google Fonts `<link>` for **Plus Jakarta Sans 400 / 500 / 600 / 700**
      (`css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`), `display=swap`, `preconnect` to
      `fonts.gstatic.com` — **not** eight self-hosted `@font-face` blocks (the reference ships one file under
      four names)
- [x] `@theme` in `src/index.css`: `--color-sand: #f6f3ee`, `--color-ink: #1c1917`,
      `--color-muted: #57534e`, `--color-accent: #c2410c`, `--color-ember: #9a3412`,
      `--color-line: #ece7df`, `--color-media: #e7e1d8`, `--color-chip: #f5f1ea`,
      `--radius-card: 22px`, `--radius-media: 16px`, `font-sans: "Plus Jakarta Sans", system-ui, sans-serif`
- [x] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)

## 1 — Primitives

- [x] `RosterCard` — the whole card: `article`, white, radius **22**, 1 px `#ece7df`, padding **10**,
      two-layer shadow, `transition: transform .3s ease, box-shadow .3s ease`, hover `translateY(-4px)` +
      deeper shadow
- [x] `CardMedia` — `aspect-ratio: 5 / 5.4`, radius **16**, `overflow: hidden`, ground `#e7e1d8`, `<img>`
      `object-fit: cover`, `object-position: center 25%`, `scale(1.05)` on card hover (`.6s`)
- [x] `Tag` — absolutely positioned **left 12 / bottom 12** pill: `rgba(255,255,255,.92)`, `#1c1917`,
      12/700 `+0.02em`, padding `5px 12px`, radius **999**, shadow `0 4px 12px rgba(0,0,0,.12)`
- [x] `IconDisc` — 36 × 36, `border-radius: 50%`, ground `#f5f1ea`, glyph 17 px inline SVG
      (`fill: none; stroke: currentColor; stroke-width: 1.8`), hover fill `#c2410c` + white + `−2px`,
      `:focus-visible` 2 px `#c2410c` outline offset 2
- [x] `Stamp` — `12.5px` / 500 / `#57534e`, `white-space: nowrap`
- [x] Brand glyphs: **LinkedIn** must be an inline SVG (the icon library no longer ships brand marks); globe /
      code / pen / calendar / mail come from `lucide-react`

## 2 — The band

- [x] `TeamSection` — `<main>` with `#f6f3ee` ground, `max-width: 1200px` content, `padding: clamp(32px, 6vw, 72px) 16px`,
      centred header
- [x] header: eyebrow `<p>` "The studio" (`13/700`, uppercase, `+0.12em`, `#9a3412`, `margin: 0`) + `h1`
      "People behind Northfield Design" (`clamp(26px, 3.4vw, 36px)` / 1.2, 700, `−0.02em`, `#1c1917`,
      `margin: 8px 0 0`), then **32 px** before the grid
- [x] `<ul>` grid: `repeat(auto-fit, minmax(240px, 1fr))`, **gap 24**, `list-style: none`, `margin: 0; padding: 0`;
      each `<li>` is `display: flex`, each card `width: 100%`
- [x] card body is `flex: 1` so all four footers share one baseline; do **not** fix the card height
- [x] footer: `space-between`, `gap: 12px`, `padding-top: 14px`, `border-top: 1px dashed #ece7df` — dashed,
      not solid
- [x] page footer: one small line of print linking **https://www.componentdock.com/** ("Component Dock")

## 3 — Content

- [x] the four profiles, verbatim from the spec: Ava Lindqvist / Creative Director / Founder / Since 2014;
      Daniel Okoro / Lead Front-end Developer / Engineering / Since 2017; Sofia Marin / UX Researcher / Research
      / Since 2019; Marcus Reyes / Account Manager / Client team / Since 2021
- [x] four bios exactly as quoted in the spec (single `<p>` each, no truncation, no "read more")
- [x] photos: `picsum.photos/seed/nameplate-<n>/600/720` (deterministic, one seed per person), real `alt`
      naming the person, ground `#e7e1d8` behind every image
- [x] per-card second disc: Ava globe · Daniel code · Sofia pen · Marcus calendar; third disc always mail;
      first always LinkedIn; `<ul aria-label="<Full name> online">`
- [x] **no** `href="#"` anywhere: LinkedIn/profiles → real URLs, calendar → booking anchor, mail →
      `mailto:<first>@nameplate.example`

## 4 — Behaviour and a11y

- [x] hover states: card lift, photo zoom, disc fill — all from the spec's durations
- [x] `@media (prefers-reduced-motion: reduce)` → transitions `none`, hover transforms `none`
- [x] one `h1`, four `h2`, `<main>` + `<ul>/<li>/<article>`, every icon anchor `aria-label`ed, every glyph
      `aria-hidden="true"`
- [x] `document.title` + meta description written for the recreation (never the source title)

## 5 — Verification

- [x] columns **1 / 1 / 1 / 2 / 2 / 3 / 4 / 4** at 320 / 390 / 520 / 600 / 768 / 1024 / 1180 / 1440, card
      widths 288 / 358 / 488 / 272 / 356 / 314.7 / 269 / 282
- [x] `scrollWidth === clientWidth` at 320 / 360 / 390 / 520 / 600 / 700 / 768 / 1024 / 1180 / 1280 / 1440 /
      1920; document **786 px** at 1440, **2,624** at 390, **2,387** at 320
- [x] card **282 × 542.9**, media **260 × 280.8**, tag **79.7 × 28.6**, foot **51** tall, discs **36** —
      all four cards one height, footers on one baseline
- [x] `grep -ri colorlib apps/nameplate` and `grep -ri 'card-01' apps/nameplate` → no matches
- [x] 100% coverage, `scripts/verify-app.sh nameplate` green
- [x] after shipping: add the `## Bootstrap Cards (20)` section + row from the spec, mark the row `[x]` (the
      implementer stream owns `TEMPLATES.md`, not the prep)
