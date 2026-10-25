# Plaudit — task outline

Recreation of the ColorLib **Card V05** design (`card-05`) at `apps/plaudit`. Spec is the authority:
`openspec/specs/template-plaudit/spec.md`. Design notes: `docs/templates/plaudit/design-notes.md`.
Check boxes only as work ships.

> This is a **section, not a site**: one band on warm paper with a centred head and three tinted quote cards,
> the middle one near-black. The reference is **5,687 B of HTML + one 7,047 B stylesheet, 18 inline SVGs, no
> image, no script, no anchor, no form and not one media query**.
> The risk is not a missing band — it is *inventing* one (a nav, a stats row, a logo strip, a CTA, a "read
> more", a carousel with arrows) or "improving" the four details that make the composition work: **the three
> tints** (not white cards), **the serif italic quote** (not Inter), **the clipped 18 %-opacity quotation
> glyph** (not an icon), and **`flex: 1` on the quote** (which is what lines the three bylines up).
>
> Three numbers decide fidelity: the card is **372 × 318.63** with **316 px** of content at 1440, the section
> is **650.8** tall (shorter than a 900 px window — the empty lower third is the design), and the grid is
> **3 → 2 → 1** columns at **946** and **634** with **no `@media` at all**.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/plaudit`; rename the package to `@free-react-templates/plaudit`
- [ ] `public/CNAME` = `plaudit.free.componentdock.com`; `homepage` = `https://plaudit.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/plaudit" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Newsreader italic 400 + normal 500**
      (`css2?family=Newsreader:ital,wght@0,500;1,400&display=swap`), `preconnect` to `fonts.gstatic.com` —
      **not** the reference's four self-hosted `woff2` files (63,212 + 38,612 + 60,820 + 38,008 B)
- [ ] `@theme` in `src/index.css`: `--color-paper: #fffdf9`, `--color-ink: #1c1917`, `--color-sub: #57534e`,
      `--color-mint: #e7f5ee`, `--color-teal: #0f766e`, `--color-mint-muted: #44403c`,
      `--color-night: #1f1d2b`, `--color-night-ink: #f5f3ff`, `--color-night-muted: #c4c1d4`,
      `--color-amber: #fbbf24`, `--color-peach: #fdeee4`, `--color-rust: #c2410c`,
      `--color-star: #f59e0b`, `--color-star-off: #b45309`,
      `--radius-card: 24px`, `--font-sans: system-ui, …`, `--font-serif: "Newsreader", Georgia, serif`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] no new dependency: 15 star glyphs + 3 brand marks are inline SVG, and the quotation glyph is **CSS**
- [ ] **do not port the `:where(html) … { all: revert; }` reset guard** (55 lines) — Tailwind's preflight is the
      equivalent; but **do** keep `box-sizing: border-box` inside the cards (the reference sets it on
      `.cl-card05 *`)
- [ ] ⚠️ **box-sizing:** the reference's container is `max-width: 1160px` *content-box*, i.e. **1,192 px** outer.
      With Tailwind's border-box, write `max-w-[1192px] px-4` (content 1,160) — **not** `max-w-[1160px] px-4`,
      which would shrink the content box to 1,128 and the cards to 361.3 px

## 1 — Primitives

- [ ] `TestimonialCard` — `<figure>`, radius **24**, `padding: 30px 28px 26px`, `overflow: hidden`,
      `font-size: 15px; line-height: 1.5`, background from the card's `surface`, colour from its `ink`;
      **no** border, shadow, outline or hover
- [ ] the tint comes from **one array of three entries** — `{ surface, accent, ink, muted, dark }` — not from
      three components and not from hard-coded classes
- [ ] `CardTop` — `flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px;
      margin-bottom: 20px`; holds `BrandMark` + `Stars`
- [ ] `BrandMark` — `inline-flex; align-items: center; gap: 6px`, **13.5/800/−.01em** in card muted,
      `white-space: nowrap`, an **20 × 20** `stroke-width: 2` glyph with `fill: none`
- [ ] `Stars` — `<p role="img" aria-label="{n} out of 5 stars">`, `flex; gap: 3px; margin: 0`; five
      **18 × 18** `viewBox="0 0 20 20"` glyphs, path
      `M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.9l-5.25 2.7 1-5.8L1.5 7.7l5.9-.9z`, each `aria-hidden`;
      filled `#f59e0b` (card accent on the dark card), the missing star `fill: none; stroke: #b45309;
      stroke-width: 1.4`
- [ ] `Quote` — `<blockquote>` with `flex: 1; margin: 0 0 26px`; `<p>` in **Newsreader italic 400, 21 px /
      1.45**, card ink; the dark card's quote is **23 px** (pass a `big` flag — it is a per-card decision in
      the reference, not a breakpoint)
- [ ] `Byline` — `<figcaption>` `flex; flex-wrap: wrap; align-items: center; gap: 12px; padding-top: 18px`,
      `border-top: 1px solid color-mix(in srgb, {accent} 25%, transparent)`; `Avatar` (**44 × 44**, radius
      50 %, `grid; place-items: center`, **14/700**, accent fill, white initials / `#1f1d2b` on the dark card)
      + `Who` (**15/700** name, **14** role in card muted, `min-width: 120px`, `line-height: 1.3`)
- [ ] `QuoteGlyph` — **not a component**: the card's `::before`, `content: "\201C"`, Newsreader **200 px**,
      `line-height: 1`, `color: {accent}`, `opacity: .18`, `right: 20px`, `bottom: -118px`,
      `pointer-events: none`. Only the **top 82 px** of an 86 × 200 box is visible inside `overflow: hidden`

## 2 — The band

- [ ] `TestimonialBand` — `<main>` on `#fffdf9`, `max-width: 1192px` (**border-box**, = 1,160 content),
      `margin: 0 auto`, `padding: clamp(36px, 6vw, 80px) 16px`, `color: #1c1917`
- [ ] header — `max-width: 640px`, `margin: 0 auto 40px`, `text-align: center`; `h1`
      **`clamp(30px, 4vw, 46px)` / 1.1 / 500 / −.02em** in Newsreader; sub **16 px** `#57534e`,
      `margin: 12px 0 0`
- [ ] grid — `grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[22px] items-stretch`;
      **no `sm:`/`md:`/`lg:` prefix and no `@media`** — the 3 → 2 → 1 ladder must fall out of the track maths
- [ ] page footer — one small line of print below the band linking **https://www.componentdock.com/**
      ("Component Dock"); the reference has no footer, so keep it to one line of text
- [ ] no `prefers-reduced-motion` branch is needed: there is nothing to reduce (0 transitions, 0 keyframes)

## 3 — Content

- [ ] head verbatim: `h1` **"Teams who switched to Ledgerly"**, sub **"4.8 average from 1,900+ reviews by
      finance and operations teams."**
- [ ] card 1 **Lumen Freight** · 5/5 · *"Month-end close went from six working days to two. The approval trail
      alone saved our auditors a week of back-and-forth."* · **RM** · **Rosa Martell** · **Head of Finance**
- [ ] card 2 (dark) **Paperkite** · 5/5 · *"We run payroll for 340 people across four countries. Ledgerly is
      the first tool our accountants and our engineers both actually like opening."* · **KA** ·
      **Kwame Asante** · **COO**
- [ ] card 3 **Oakridge Clinics** · **4/5** · *"Setup took an afternoon. I would like more report templates,
      but the support team answered every question within the hour."* · **TB** · **Tessa Brandt** ·
      **Practice Manager**
- [ ] brand glyphs: triangle (`M4 18 12 4l8 14Z`), twin circles (`cx 9/15, cy 12, r 6`), rounded square
      (`rect 4 4 16 16, rx 4` + `M12 8v8M8 12h8`) — drawn, never copied as files
- [ ] **no images anywhere** (0 `<img>`) and **no script** (0 authored `<script>`); "Ledgerly" is the source's
      fictional product name and stays; no ColorLib word appears in the app
- [ ] nothing to click: the only interactive element on the page is the attribution link

## 4 — Verification

- [ ] columns **1 / 1 / 1 / 1 / 1 / 2 / 2 / 2 / 3 / 3 / 3 / 3** and card widths
      **290 / 328 / 358 / 448 / 601 / 290 / 357 / 423 / 290 / 316 / 372 / 372** at 320 / 360 / 390 / 480 /
      633 / 634 / 768 / 900 / 946 / 1,024 / 1,280 / 1,440
- [ ] band height **650.8** at 1,440, **644.4** at 1,280, **624.2** at 1,024, **611.4** at 946, **835.8** at
      900, **877.9** at 768, **952.8** at 634, **1,001.5** at 633, **1,110.8** at 480, **1,238** at 390 and
      360, **1,388.2** at 320
- [ ] `body.scrollWidth === clientWidth` **and** `scrollTo(200,0) → scrollX 0` at 320 / 360 / 390 / 480 / 633 /
      634 / 768 / 900 / 946 / 1,024 / 1,137 / 1,138 / 1,280 / 1,440
- [ ] card **372 × 318.63** at 1440; children `__top` **20.25** / `__quote` **133.4** / `__by` **63**; avatar
      at y 500.8; byline bottom exactly 26 px above the card's bottom
- [ ] all three bylines share y **481.8** (equal-heights row + `flex: 1` on the quote) — **not** a spacer
- [ ] dark card **372 × 318.63** at x 534, same radius/padding/height; quote **23 px**; avatar amber with
      `#1f1d2b` initials; stars `#fbbf24`
- [ ] top row wraps at the 290 px floor: `__top` **48.25** on cards 1 and 3, **20.25** on card 2 (at 320, 634
      and 946)
- [ ] `h1` **2 lines ≥ 1,138** (advance 643.41 vs head 640), **1 line 433–1,137**, **2 lines ≤ 432**; sub
      **2 lines ≤ 480**, **1 ≥ 633**
- [ ] glyph box **86 × 200**, visible **82 px** from y **236.6**, `opacity .18`, accent colour, adds **0 px**
      of card height and no scrollbar
- [ ] at 320 the track is **290** in a **288** grid — 2 px into the right padding, no page scroll; reproduce it
      or use `minmax(min(290px,100%),1fr)` and disclose the 2 px delta in the PR
- [ ] one `h1`, **no other heading**, 3 × `<figure>` with `<blockquote>` + `<figcaption>`, 1 `lang="en"`, all
      15 stars + 3 brand marks `aria-hidden`, star rows `role="img"` with an `aria-label`
- [ ] Newsreader **italic 400 + normal 500** only (one `<link>`, no bundled woff2); 700 name and 800 logo label
      stay on the **system** stack
- [ ] `grep -ri colorlib apps/plaudit` and `grep -ri 'card-05' apps/plaudit` → no matches
- [ ] 100% coverage, `scripts/verify-app.sh plaudit` green
- [ ] after shipping: add the row from the spec under the new `## Bootstrap Cards (20)` section, between
      `## Bootstrap Carousels (20)` and `## Bootstrap Checkboxes (20)`, and mark it `[x]` (the implementer
      stream owns `TEMPLATES.md`, not the prep)
