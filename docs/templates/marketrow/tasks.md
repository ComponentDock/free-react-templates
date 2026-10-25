# Marketrow — task outline

Recreation of the ColorLib **Card V02** design (`card-02`) at `apps/marketrow`. Spec is the authority:
`openspec/specs/template-marketrow/spec.md`. Design notes: `docs/templates/marketrow/design-notes.md`.
Check boxes only as work ships.

> This is a **section, not a site**: one off-white band, an eyebrow + headline with a "Bag 0" chip, and four
> product cards. The reference is **6,990 B of HTML + one 10,764 B stylesheet + 1,628 B of vanilla JS** whose
> whole behaviour is a per-card add-to-bag toggle. The risk is not a missing band — it is *inventing* one (a
> nav, a filter bar, a cart drawer, a product-detail route, "load more").
>
> Three details decide fidelity: **the square photo clipped by the card's 18 px radius** (no inset, no padding,
> no radius of its own), **the masked 5-star bar** (one element, fractional fill — not five icons), and **the
> monochrome chrome** (there is no brand colour; the only hues are sale red, star amber, added green and
> low-stock brown). Get those three wrong and the palette will not save it.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/marketrow`; rename the package to
      `@free-react-templates/marketrow`
- [ ] `public/CNAME` = `marketrow.free.componentdock.com`; `homepage` = `https://marketrow.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/marketrow" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **DM Sans 400 / 500 / 700**
      (`css2?family=DM+Sans:wght@400;500;700&display=swap`), `preconnect` to `fonts.gstatic.com` — **not** six
      self-hosted `@font-face` blocks (the reference ships one file under three names, some per subset)
- [ ] `@theme` in `src/index.css`: `--color-paper: #f1f1ef`, `--color-surface: #ffffff`,
      `--color-ink: #18181b`, `--color-muted: #52525b`, `--color-sale: #b91c1c`, `--color-ok: #3f6212`,
      `--color-ok-soft: #ecfccb`, `--color-ok-hover: #d9f99d`, `--color-star: #f59e0b`,
      `--color-star-empty: #d4d4d8`, `--color-media: #e4e4e7`, `--color-low: #92400e`,
      `--color-ink-hover: #3f3f46`, `--color-ring: #a1a1aa`, `--radius-card: 18px`,
      `font-sans: "DM Sans", system-ui, sans-serif`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] no new dependency: the four icons (bag, plus, tick, and the star glyph used by the mask) are inline SVG

## 1 — Primitives

- [ ] `ProductCard` — `<article>`: white, radius **18**, `overflow: hidden`, **no border**, shadow
      `0 1px 2px rgba(0,0,0,.05)`, `transition: box-shadow .3s ease`, hover
      `0 18px 40px -24px rgba(0,0,0,.35)`; `flex` column, body `flex: 1`, button pinned by its own margins
- [ ] `CardMedia` — `aspect-ratio: 1`, **no radius**, ground `#e4e4e7`, `overflow: hidden`; `<img>` `object-fit:
      cover`, `transition: transform .5s ease`, card hover → `scale(1.04)`; real `alt` per product
- [ ] `Flag` — absolutely positioned **top 12 / left 12**, padding `4px 10px`, radius **8**, 12.5/700, three
      variants: `sale` (`#b91c1c`, white), `new` (`#18181b`, white), `low` (`#ffffff`, `#92400e`)
- [ ] `StarBar` — one span, **80 × 15**, `mask` = the star SVG repeated `0 0 / 16px 15px repeat-x`, background
      `linear-gradient(90deg, #f59e0b var(--fill), #d4d4d8 var(--fill))` with `--fill = score / 5 * 100%`;
      `aria-hidden`, with a visually hidden "Rated X out of 5" beside it
- [ ] `PriceRow` — current `21px`/700/`−0.42px` (`#b91c1c` or `#18181b`), optional `<del>` `15px`/400/
      `#52525b` behind a visually hidden "Was "; `align-items: baseline`, `gap: 8px`
- [ ] `AddButton` — `<button type="button">`, `margin: 14px 18px 18px`, padding `12px 16px`, border `1.5px`,
      radius **12**, ink ground, white 15/700, flex centre `gap: 8px`, 18 px glyph at `stroke-width 2.2`;
      hover `#3f3f46`, active `scale(.98)`, `:focus-visible` `3px solid #a1a1aa` offset 2; added state ground
      `#ecfccb`, border + text `#3f6212`, hover `#d9f99d`, plus → tick with the `.35s` pop keyframe

## 2 — The band

- [ ] `ProductRow` — `<main>` with `#f1f1ef` ground, `max-width: 1200px` **content box**, `margin: 0 auto`,
      `padding: clamp(32px, 6vw, 72px) 16px`
- [ ] header — `flex`, `flex-wrap: wrap`, `align-items: flex-end`, `justify-content: space-between`, `gap: 16px`,
      `margin-bottom: 28px`: eyebrow `<p>` "Autumn edit" (14/500 `#52525b`, `margin: 0`) + `h1` "Everyday carry"
      (`clamp(28px, 3.6vw, 40px)` / 1.1, 700, `−0.03em`, `margin: 2px 0 0`) opposite the **Bag 0** chip
- [ ] bag chip — `<p>` (not a button, not a link): `inline-flex`, `gap: 8px`, padding `10px 14px 10px 16px`,
      radius **999**, white, shadow `0 1px 2px rgba(0,0,0,.06)`, 15/500, **18 px** bag glyph (`stroke-width
      1.8`), and a **24 px** ink counter disc (`min-width: 24`, `padding: 0 7px`, 13/700, radius 999,
      `transition: transform .25s`) that takes `scale(1.25)` for 250 ms on change
- [ ] status line — `<p role="status">` above the grid, `14px`/500 `#3f6212`, `margin: -18px 0 18px`, and a
      **reserved 20 px line** (the reference's `min-height: 1px` makes the grid jump 17 px on the first add —
      do not reproduce that)
- [ ] `<ul>` grid — `repeat(auto-fill, minmax(236px, 1fr))`, **gap 20**, `list-style: none`, `margin/padding 0`;
      every `<li>` `display: flex`, every card `width: 100%`
- [ ] page footer — one small line of print linking **https://www.componentdock.com/** ("Component Dock"); it is
      the page's **only** anchor

## 3 — Behaviour

- [ ] one state: the set of added product names (or an array of 4 booleans) — the counter reads the size of
      that set, **not** a click tally; per-card state is derived, never a second source of truth
- [ ] toggle adds/removes the card: ground `#ecfccb` ↔ `#18181b`, label "Added to bag" ↔ "Add to bag", plus ↔
      tick, `aria-pressed` `true`/`false`
- [ ] counter text = number of added cards, with the 250 ms bump class
- [ ] status message: `"<Product> added to your bag. N item(s) in bag."` /
      `"<Product> removed from your bag. N item(s) in bag."`, singular only at 1; cleared then re-set on a
      short timer so a repeated identical message re-announces
- [ ] "N" in the message is the count **after** the toggle (adding the 2nd card says "2 items in bag")
- [ ] keyboard: `Tab` reaches the four buttons in DOM order, `Enter`/`Space` toggle, focus ring visible

## 4 — Content

- [ ] the four products, verbatim from the spec: **Arc Wireless Headphones** / Audio / 4.6 (218 reviews) /
      `$149` `$199` / `-25%`; **Meridian Leather Watch** / Accessories / 4.9 (64 reviews) / `$129` / `New`;
      **Commuter Backpack 22L** / Bags / 4.3 (1,042 reviews) / `$84` `$99` / `-15%`; **Canvas Market Tote** / Bags
      / 4.7 (389 reviews) / `$38` / `Only 3 left`
- [ ] photos: `picsum.photos/seed/marketrow-<n>/600/600` (deterministic, one seed per product), descriptive
      `alt` naming the object, ground `#e4e4e7` behind every image
- [ ] keep the reference's round flag percentages — do not recompute `-25%` / `-15%` from the prices (they are
      −25.1 % / −15.2 %)
- [ ] keep `1,042` with its thousands separator; keep `$` with no decimals

## 5 — Verification

- [ ] columns **1 / 1 / 1 / 1 / 2 / 2 / 2 / 3 / 3 / 4 / 4 / 4** at 320 / 390 / 520 / 523 / 524 / 600 / 768 /
      780 / 1,024 / 1,036 / 1,180 / 1,440; card widths **288 / 358 / 488 / 491 / 236 / 274 / 358 / 236 / 317.3 /
      236 / 272 / 285**
- [ ] `scrollWidth === clientWidth` **and** `scrollTo(200,0) → scrollX 0` at 320 / 360 / 390 / 520 / 523 / 524 /
      600 / 700 / 768 / 780 / 1,024 / 1,036 / 1,180 / 1,280 / 1,440 / 1,920; document **740 px** at 1440 (900
      viewport), **1,303** at 1,024, **1,344** at 768, **3,028** at 520, **2,508** at 390, **2,288** at 320
- [ ] card **285 × 503** at 1440, media **285 × 285**, flag **54 × 26.1**, body **138.2**, button **249 × 47.8**
      (1.5 px border snapping to 1 px — 47.8 is correct, not 48.75); all four buttons on one baseline (y 602.2)
- [ ] star fills **92 / 98 / 86 / 94 %** for 4.6 / 4.9 / 4.3 / 4.7 — a fractional fifth star, not a half star
- [ ] added-state cycle: click → count 1 + lime button + tick + message; click again → count 0 + ink button +
      plus + "removed from your bag"; click all four → count 4
- [ ] `prefers-reduced-motion: reduce` → transitions `none`, no hover zoom, no tick animation
- [ ] one `h1`, four `h2`, `<main>` + `<header>` + `<ul>/<li>/<article>`, buttons `type="button"` with
      `aria-pressed`, glyphs `aria-hidden`, the live region `role="status"`
- [ ] `grep -ri colorlib apps/marketrow` and `grep -ri 'card-02' apps/marketrow` → no matches
- [ ] 100% coverage, `scripts/verify-app.sh marketrow` green
- [ ] after shipping: add the row from the spec under the new `## Bootstrap Cards (20)` section, mark it `[x]`
      (the implementer stream owns `TEMPLATES.md`, not the prep)
