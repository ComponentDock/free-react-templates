# Roadbook — task outline

Recreation of the ColorLib **Card V08** design (`card-08`) at `apps/roadbook`. Spec is the authority:
`openspec/specs/template-roadbook/spec.md`. Design notes: `docs/templates/roadbook/design-notes.md`.
Check boxes only as work ships.

> This is a **band, not a site**: one head (eyebrow + display title) over four full-bleed photo cards
> on a `#111210` ground. The reference is **4,465 B of HTML + one 8,303 B stylesheet, four 560 × 720
> JPEGs, 4 anchors, 0 forms, 0 buttons, 0 authored scripts, 0 keyframes**.
> The risk is not a missing band — it is *inventing* one (a filter row, a search field, a map, a
> "load more", a rating, a price, a booking CTA) or flattening the three details that make it work:
> **the panel that expands inside a card whose height never changes** (`grid-template-rows: 0fr → 1fr`
> with `min-height: 0` + `overflow: hidden`), **the four-stop scrim that the hover wash sits under
> rather than replaces**, and **one stretched anchor per card with the ring drawn *inside* it**
> (`outline-offset: -5px`).
>
> Three numbers decide fidelity: the card is **308 × 440** at 1440 and **440 at every width**, the
> content block goes **100.3 → 216.55** when the panel opens, and the grid is **4 / 3 / 2 / 1 at 1080 /
> 814 / 548** — arithmetic from `minmax(250px, 1fr)`, not breakpoints.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/roadbook`; rename the package to
      `@free-react-templates/roadbook`
- [ ] `public/CNAME` = `roadbook.free.componentdock.com`; `homepage` =
      `https://roadbook.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/roadbook" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Space Grotesk 400;500;700**
      (`css2?family=Space+Grotesk:wght@400;500;700&display=swap`) + `preconnect` to
      `fonts.gstatic.com` — **not** the reference's six self-hosted `woff2` names (two binaries
      repeated; 500 and 700 are synthesised, notes Trap 1)
- [ ] `@theme` in `src/index.css`: `--color-ground: #111210`, `--color-ink: #f4f1ea`,
      `--color-accent: #d9f99d`, `--color-accent-ink: #1a2e05`, `--color-card-fallback: #2a2c28`,
      `--color-card-text: #f1efe8`, `--radius-card: 22px`, `--font-sans: "Space Grotesk", system-ui, …`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative
      `@source`)
- [ ] no new dependency: no carousel library, no `@tailwindcss/container-queries`, no image CDN
      package; the page has **no icons at all** (the reference draws no SVG)
- [ ] **do not port the `:where(html) … { all: revert; }` guard** (55 lines + the
      `::-webkit-datetime-edit` block + a `[hidden]` re-hide) — Tailwind's preflight is the equivalent
- [ ] ⚠️ **box-sizing:** the reference's container is `max-width: 1280px` *content-box*, i.e. **1312 px**
      outer. With Tailwind's border-box write `max-w-[1312px] px-4` (content 1280) — **not**
      `max-w-[1280px] px-4`, which gives a 1248 px grid and **300 px** cards instead of 308

## 1 — Data

- [ ] `src/data/guides.ts`: `type Guide = { id, tag, place, title, blurb, facts: [string, string],
      image, alt }`
- [ ] the four records exactly as the spec lists them:
      `Hiking` / `Dolomites, Italy` / `Lakes and larches` / 3-line blurb / `5 routes`, `6 min read`
      · `City break` / `Tokyo, Japan` / `Neon after dark` / `18 places`, `9 min read`
      · `Trekking` / `Cusco region, Peru` / `Above the clouds` / `4 days`, `11 min read`
      · `Winter` / `Tromsø, Norway` / `Chasing the lights` / `3 nights`, `7 min read`
- [ ] `Tromsø` uses **U+00F8**; the eyebrow separator is **U+00B7**
- [ ] images `https://picsum.photos/seed/roadbook-{1..4}/560/720` with scene `alt` from the reference

## 2 — Head + shell (`App.tsx`, `components/Header.tsx`)

- [ ] `<main className="mx-auto max-w-[1312px] px-4 py-[clamp(36px,6vw,72px)] text-ink">`
- [ ] `<header className="mb-8">` (32 px) with `p` eyebrow (`text-sm font-medium text-accent`, one line)
      and `h1` (`mt-2 max-w-[640px] text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.02]
      tracking-[-.035em]`)
- [ ] nothing on the right of the head; no subtitle, no CTA, no date chip

## 3 — The grid (`components/GuideGrid.tsx`)

- [ ] `<ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 m-0 p-0 list-none">`
- [ ] one `<li>` per record wrapping one `<article>`; **no** `sm:`/`md:`/`lg:` column classes — the
      4 / 3 / 2 / 1 behaviour must come from the `minmax` alone

## 4 — The card (`components/GuideCard.tsx`)

- [ ] root: `group relative flex min-h-[440px] items-end overflow-hidden rounded-[22px]
      bg-card-fallback text-[15px] leading-[1.5] text-white [isolation:isolate]`
- [ ] photo: `absolute inset-0 -z-20 h-full w-full object-cover
      transition-transform duration-[800ms] ease-[cubic-bezier(.2,.7,.2,1)]
      group-hover:scale-[1.07] group-focus-within:scale-[1.07]`, `loading="lazy" decoding="async"`,
      `alt` = the reference's scene description
- [ ] scrim: `absolute inset-0 -z-10 transition-colors duration-[400ms]
      bg-[linear-gradient(180deg,rgba(0,0,0,.25)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,.55)_55%,rgba(0,0,0,.92)_100%)]
      group-hover:bg-black/25 group-focus-within:bg-black/25` — **note the deepened 55 % / 100 % stops**
      (spec Requirement 6; do not ship the reference's `.35` / `.9`)
- [ ] tag: `absolute left-4 top-4 rounded-full border border-white/45 bg-black/60 px-3 py-1.5
      text-[13px] font-medium text-white backdrop-blur-[6px]` — **`.6`, not the reference's `.45`**
      (contrast, spec Requirement 7)
- [ ] content: `w-full py-[22px] px-[22px] pb-6`
- [ ] kicker: `mb-1 text-[13px] font-medium uppercase tracking-[.08em] text-accent
      [text-shadow:0_1px_2px_rgba(0,0,0,.6)]`
- [ ] title: `m-0 text-[28px] font-bold leading-[1.1] tracking-[-.03em] [text-shadow:0_1px_3px_rgba(0,0,0,.5)]`
      wrapping the single anchor
- [ ] link: `text-inherit no-underline after:absolute after:inset-0 after:z-[1] after:rounded-[22px]
      focus:outline-none focus-visible:after:outline focus-visible:after:outline-[3px]
      focus-visible:after:outline-accent focus-visible:after:-outline-offset-[5px]
      focus-visible:after:shadow-[0_0_0_1px_rgba(0,0,0,.6)]` — the dark twin is the documented
      delta (spec Requirement 10)
- [ ] panel: `grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity]
      duration-[450ms] group-hover:grid-rows-[1fr] group-hover:opacity-100
      group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100`
- [ ] panel inner: `min-h-0 overflow-hidden` — **both halves**, or the collapse does not work
- [ ] blurb: `mt-2.5 text-[15px] text-card-text`
- [ ] facts: `mt-3 flex gap-2` with chips `rounded-full bg-accent px-2.5 py-1 text-[12.5px]
      font-bold leading-[1.5] text-accent-ink` (**12.5 px**, not 13 — the chip is 26.75 tall)
- [ ] `@media (hover: none)` block in `src/index.css` keeping the panel open:
      `.card-panel { grid-template-rows: 1fr; opacity: 1 }` (or the arbitrary variant
      `[@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100`)
- [ ] `motion-reduce:transition-none` on photo, scrim and panel **plus**
      `motion-reduce:group-hover:scale-100` / `motion-reduce:group-focus-within:scale-100` (the
      reference removes the zoom, not just the easing)

## 5 — Attribution

- [ ] one footer line linking `https://www.componentdock.com/` as "Component Dock" (the reference has
      **no** footer — the only deliberate addition)

## 6 — Tests (TDD, 100 % coverage)

- [ ] `GuideCard.test.tsx`: renders tag / place / title / blurb / both chips; **exactly one anchor** per
      card; the anchor wraps only the title text; every image has a non-empty `alt` and
      `loading="lazy"`; the panel is present in the DOM at rest (CSS collapses it — assert the markup,
      not the height)
- [ ] `GuideGrid.test.tsx`: four `<li>` children, four `h2`s, `list-style` reset, no icon nodes
- [ ] `Header.test.tsx`: eyebrow contains **U+00B7**; `h1` text is exact
- [ ] `guides.test.ts`: four records, `Tromsø` contains **U+00F8**, every `facts` pair has exactly two
      strings, every `image` is a `picsum` seed URL
- [ ] a "no invented controls" test: the rendered tree has 0 `button`, 0 `form`, 0 `input`
- [ ] `npm run verify:app roadbook` green (typecheck + lint + knip + fallow + coverage + build)

## 7 — Ship

- [ ] `openspec validate template-roadbook --type spec` valid (already is at prep time)
- [ ] `TEMPLATES.md`: add the row **directly after `- [x] **Card 01** … nameplate`** under
      `## Bootstrap Cards (20)`:
      `- [x] **Card 08** — [colorlib](https://colorlib.com/wp/template/card-08/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-08.jpg) · [roadbook](https://roadbook.free.componentdock.com)`
- [ ] `npm run readme:status`; PR description carries source, preview URL, tokens and the deltas
      (real Space Grotesk weights, picsum placeholders, deepened scrim, darker tag chip, ring's dark
      twin, added attribution line)
