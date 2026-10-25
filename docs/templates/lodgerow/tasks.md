# Lodgerow — task outline

Recreation of the ColorLib **Card V07** design (`card-07`) at `apps/lodgerow`. Spec is the authority:
`openspec/specs/template-lodgerow/spec.md`. Design notes: `docs/templates/lodgerow/design-notes.md`.
Check boxes only as work ships.

> This is a **section, not a site**: one band on a cool mint ground with a head and three wide stay cards.
> The reference is **6,427 B of HTML + one 10,026 B stylesheet, three 700 × 560 JPEGs, 18 inline SVGs,
> 3 dead anchors, 0 forms, 0 buttons, 0 authored scripts**.
> The risk is not a missing band — it is *inventing* one (a search bar, a date picker, a filter row, a map,
> a "load more", a review list, a booking form) or "improving" the six details that make it work:
> **the 5/7 split with an absolutely positioned cover image whose panel takes its height from the body**,
> **one anchor per card stretched over the whole card** (`::after { inset: 0 }`) with the "View stay" pill
> as a **`span[aria-hidden]`**, **three badge states** (favourite / deal / none), **the two-line price with
> the struck original inline**, **the four-part hover**, and **the container query** that shrinks the body's
> padding at ≤ 600 px of *card* width (fires at viewport 634).
>
> Three numbers decide fidelity: the card is **920 × 265.75** with **382.5 px** of photo and **483.5 px** of
> body content at 1440, the band is **1,054.34** tall, and the cards are equal-height **only above 733** —
> below that each `article` sizes itself (700 → 333.5 / 333.5 / 293.25).

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/lodgerow`; rename the package to `@free-react-templates/lodgerow`
- [ ] `public/CNAME` = `lodgerow.free.componentdock.com`; `homepage` = `https://lodgerow.free.componentdock.com`
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace; verify with
      `grep -c "free-react-templates/lodgerow" package-lock.json`
- [ ] `index.html`: one Google Fonts `<link>` for **Outfit 400;500;600;700**
      (`css2?family=Outfit:wght@400;500;600;700&display=swap`), `preconnect` to `fonts.gstatic.com` — **not**
      the reference's eight self-hosted `woff2` names (two binaries repeated; 500–700 are synthesised, notes Trap 1)
- [ ] `@theme` in `src/index.css`: `--color-ground: #f3f6f5`, `--color-ink: #10231f`,
      `--color-muted: #4a5c58`, `--color-card-line: #e2e9e7`, `--color-card-line-hover: #cfdcd9`,
      `--color-media-ground: #dbe5e2`, `--color-accent: #0f766e`, `--color-accent-hover: #115e59`,
      `--color-chip-bg: #f0f5f4`, `--color-chip-ink: #26403a`, `--color-deal: #be123c`,
      `--radius-card: 20px`, `--radius-chip: 10px`, `--radius-cta: 12px`,
      `--font-sans: "Outfit", system-ui, …`
- [ ] `vite.config.ts` registers `injectUiSource()` (copy from an existing app — never a relative `@source`)
- [ ] no new dependency: 18 SVGs come from `lucide-react` or hand-written paths; **no image CDN package**,
      no carousel library, no `@tailwindcss/container-queries` (Tailwind 4 has `@container` built in)
- [ ] **do not port the `:where(html) … { all: revert; }` guard** (55 lines + six `::-webkit-datetime-edit`
      selectors + a `[hidden]` re-hide) — Tailwind's preflight is the equivalent
- [ ] ⚠️ **box-sizing:** the reference's container is `max-width: 920px` *content-box*, i.e. **952 px** outer.
      With Tailwind's border-box write `max-w-[952px] px-4` (content 920) — **not** `max-w-[920px] px-4`,
      which gives an 888 px card and a 369 px photo panel

## 1 — Data

- [ ] `src/data/stays.ts`: `type Badge = 'favourite' | 'deal' | null`; each stay has
      `id`, `place`, `title`, `rating`, `reviews`, `amenities: { icon, label }[3]`, `rate`, `total`,
      `totalWas?`, `badge`, `image`, `alt`
- [ ] the three records exactly as the spec's Requirement 12 lists them (Hvar / Ubud / Oia), with totals
      **1,180 / 520 / 840** as literals
- [ ] **no arithmetic on the price**: do not multiply `rate × nights` (the reference's 1,180 and 520 do not
      match 214 × 5 and 96 × 5); the total is copy
- [ ] `totalWas` is present on card 3 only (990)

## 2 — Head + shell (`App.tsx`, `components/Header.tsx`)

- [ ] `<main className="mx-auto max-w-[952px] px-4 py-[clamp(32px,6vw,64px)] text-ink">`
- [ ] `<header className="mb-6">` with `h1` (`clamp(26px,3.4vw,34px)/700/1.15/-.02em`) and a `p`
      (`mt-1.5 text-base text-muted`) — the en dash is **U+2013**, the separator **U+00B7**
- [ ] nothing on the right of the head (no chip, no button — `card-06`'s date chip has no counterpart)

## 3 — The list (`components/StayList.tsx`)

- [ ] `<div className="grid gap-5">` — a **single column at every width**; no `auto-fit`, no `sm:grid-cols-*`
- [ ] render three `<article>`s from the data array (3 items is content, not a magic number)

## 4 — The card (`components/StayCard.tsx`)

- [ ] root: `relative grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] overflow-hidden rounded-[20px]
      border border-card-line bg-white text-[15px] leading-[1.5] text-ink
      transition-[box-shadow,border-color] duration-300
      hover:border-card-line-hover hover:shadow-[0_20px_40px_-28px_rgba(16,35,31,.45)]
      focus-within:shadow-[0_0_0_3px_#0f766e] @container`
- [ ] mobile stack: `max-[640px]:grid-cols-1` (**inclusive** — `max-sm:` is `width < 40rem` and would leave
      exactly 640 unstacked)
- [ ] `__media`: `relative min-h-[220px] bg-media-ground max-[640px]:min-h-0 max-[640px]:aspect-[16/10]`
- [ ] `__img`: `absolute inset-0 h-full w-full object-cover transition-transform duration-500
      group-hover:scale-[1.04]` — needs `group` on the card root; the transform only scales because the
      image is absolutely positioned
- [ ] `__badge`: `absolute left-3.5 top-3.5 rounded-full px-3 py-1.5 text-[13px] font-semibold
      shadow-[0_4px_14px_rgba(0,0,0,.15)]` — white variant `bg-white text-ink`, deal variant
      `bg-deal text-white`; **render nothing** when `badge === null`
- [ ] `__body`: `flex flex-col px-[26px] py-[22px] @max-[600px]:px-[18px] @max-[600px]:pt-[18px]
      @max-[600px]:pb-[20px]`
- [ ] `__place`: `flex items-center gap-1.5 text-sm font-semibold text-accent` + a 16 px `MapPin`
      (`fill:none`, `stroke-width:2`)
- [ ] `__title`: `mt-1 mb-1.5 text-[22px] font-semibold leading-[1.25] tracking-[-.01em]` wrapping the
      single anchor
- [ ] `__link`: `text-inherit no-underline after:absolute after:inset-0 after:z-[1]
      focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-accent` (the `focus-visible` outline is the documented delta, defect 4)
- [ ] `__rating`: `flex items-center gap-[5px] text-[14.5px]` with a **filled** 16 px `Star`
      (`fill: #10231f`) — **not gold** — and the count in `text-muted`
- [ ] `__amenities`: `<ul aria-label="Amenities" className="my-4 flex flex-wrap gap-2 p-0 list-none">`,
      chips `inline-flex items-center gap-1.5 rounded-[10px] bg-chip-bg px-[11px] py-1.5
      text-[13.5px] font-medium text-chip-ink`, glyphs 16 px `stroke-width:1.8` round caps/joins
- [ ] `__foot`: `mt-auto flex flex-wrap items-end justify-between gap-3.5 border-t border-card-line pt-4`
- [ ] `__price`: `text-[15px] text-muted` with `strong` `text-[24px] font-bold tracking-[-.02em] text-ink`
      and a `block` total `span` at 13.5 px; card 3 inserts `<del className="text-muted">€990</del>` **inline**
      in the total line + an `sr-only` "was"
- [ ] `__cta`: a **`span`** with `aria-hidden="true"`, `inline-flex items-center gap-2 rounded-[12px]
      bg-accent px-[18px] py-[11px] text-[15px] font-semibold text-white transition-[background-color,gap]
      duration-200 group-hover:gap-3 group-hover:bg-accent-hover` + 18 px `ArrowRight`
- [ ] `prefers-reduced-motion`: `motion-reduce:transition-none` on card, image and CTA **plus**
      `motion-reduce:group-hover:scale-100` (the reference removes the zoom, not just the easing)

## 5 — Attribution

- [ ] one footer line linking `https://www.componentdock.com/` as "Component Dock" (the reference has **no**
      footer — this is the only deliberate addition)

## 6 — Tests (TDD, 100 % coverage)

- [ ] `StayCard.test.tsx`: renders place/title/rating/reviews/chips/rate/total; **exactly one anchor** per
      card; the CTA is a `span` with `aria-hidden`; `badge: null` renders no badge node; card 3 renders a
      `del`; every image has a non-empty `alt` and `loading="lazy"`
- [ ] `StayList.test.tsx`: three articles, one `h2` each, `aria-label="Amenities"` on each list
- [ ] `Header.test.tsx`: `h1` text contains U+2013, sub contains U+00B7
- [ ] a "no arithmetic" test: card 1 renders `€1,180` and **not** `€1,070`
- [ ] `npm run verify:app lodgerow` green (typecheck + lint + knip + fallow + coverage + build)

## 7 — Ship

- [ ] `openspec validate template-lodgerow --type spec` valid (already is at prep time)
- [ ] `TEMPLATES.md`: create `## Bootstrap Cards (20)` after `## Bootstrap Carousels (20)` (before
      `## Bootstrap Checkboxes (20)`) and add this row:
      `- [x] **Card 07** — [colorlib](https://colorlib.com/wp/template/card-07/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-07.jpg) · [lodgerow](https://lodgerow.free.componentdock.com)`
- [ ] `npm run readme:status`; PR description carries source, preview URL, tokens and the deltas
      (real Outfit weights, picsum placeholders, added attribution line, added link outline)
