# Derrick — Design Notes

- **Source slug:** `vertex`
- **ColorLib name:** Vertex (`Vertex - Free Construction Company Website Template`)
- **Listing:** https://colorlib.com/wp/template/vertex/
- **Preview:** https://preview.colorlib.com/theme/vertex/ (HTTP 200, the slug-only path is the demo — no alias)
- **New name:** derrick · **Category:** Construction company
- **Spec:** `openspec/specs/template-derrick/spec.md`
- **App:** `apps/derrick/` (Navbar · Hero · StatsCounter · Services · Portfolio · CtaParallax · Testimonials · Pricing · Blog · QuoteModal · Footer)

Rewrite status: this brief replaced an **Engineers** description on 2026-10-24 —
docs-source drift caught by `verify-docs-source.py` (spec, row and app all build
Vertex; the brief named another slug). `tasks.md` carried the same stale name and
was rewritten in the same commit. Every value below was re-measured from the live
reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `theme/vertex/index.html` | 30,493 | `b385f992e7c3f94e…` |
| `theme/vertex/css/style.css` | 61,015 | `c3973ea902bf475f…` |
| `theme/vertex/css/animate.css` | 53,980 | `5a5945dc8dbae896…` (vendor) |
| `theme/vertex/css/bootstrap-datepicker.css` | 17,715 | `5d153bea00c6e694…` (vendor — its `#0044cc` blues are **not** the design) |

The sheet identity matches the spec's recorded identity byte-for-byte, so the live
preview **is** the reference. The page holds **63** anchors — **46** dead
`href="#"` (every card and slide CTA) — plus one outbound `https://colorlib.com`
credit. Seven inner pages are live and are the reference for anything the
one-pager has to invent:

| page | bytes | holds |
| --- | --- | --- |
| `about.html` | 25,198 | company page + counters |
| `project.html` | 17,316 | portfolio grid |
| `services.html` | 20,357 | the four services in full |
| `pricing.html` | 16,242 | the three plans |
| `blog.html` | 21,412 | post list |
| `blog-single.html` | 26,781 | article layout |
| `contact.html` | 15,158 | contact form + map |

`index.html` is byte-identical to the directory URL (a no-op link, never a 404).

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand blue | `#0962ea` | 29 declarations — `:root{--primary}`, `a`, `.btn-primary`, `.btn.btn-primary`, `.ftco-navbar-light.scrolled .nav-link.active`, `.services .icon span`, `.home-slider .slider-item .overlay`, `.ftco-footer` bed |
| Brand hover | `#0853c5` | `.btn-primary:hover` / `.btn-primary:disabled` |
| Frame tint (dashed) | `#dbe9fe` | 15 — `2px dashed` borders on `.services`, `.testimony-wrap`, `.pricing`, `.blog-entry .text`, plus their `:before`/`:after` corner squares |
| Light section bed | `#f8f9fa` | `.bg-light` — portfolio, pricing |
| Ink | `#212529` | body text, headings |
| Muted | `#6c757d` | 10 — secondary copy, nav links |
| Hairline | `#dee2e6` / `#e6e6e6` | 5 + 5 — card and input borders |
| Typeface | **Quicksand** | 3 declarations, with an Arial fallback stack |
| Button (`.btn.btn-primary`) | `background:#0962ea`, **`border:2px solid #0962ea`**, white label; hover inverts to transparent bed + `#0962ea` label | `.btn.btn-primary`, `:hover` |
| Hero band | `.slider-item` `height:calc(100vh - 117px)`, `min-height:700px`; `.overlay` = `#0962ea` at `opacity:.8`; `h1` 72px/1.2 `weight 400` white; dots are 18px rings with a 6px inner dot | `.home-slider …` |
| Footer | `.ftco-footer` `background:#0962ea`, `padding:8em 0`, white headings, `rgba(255,255,255,.5)` links → white on hover | `.ftco-footer …` |
| Radii vocabulary | `50%` (8 — dots, icons, avatars), `0.25rem` (7 — buttons/cards), `2px`/`4px` | — |

`#0044cc`/`#0088cc` live in `bootstrap-datepicker.css` and `#6c757d`/`#dc3545`
also in the Bootstrap block — vendor values, never `@theme` tokens.

## Section order (as shipped)

1. **Navbar** — “Vertex” wordmark, nav (Home · About · Project · Services · Blog · Contact) + “Request a Quote” button
2. **Hero** — 2-slide carousel under the blue overlay: “We’re **Vertex**, Construction and Development” → “Bringing to life most complex projects”, then “Constructing is our life business”
3. **StatsCounter** — 4 counters: Years on the market · Operational Brigades · Units of Engineering · Employees of the company (5,143)
4. **Services** — “Your Main Features & Benefits” + 4 dashed-frame cards: Construction Management · Pre-Construction Services · Construction Services · General Constructing
5. **Portfolio** — `bg-light`, “We love to share our accomplishments” + project tiles
6. **CtaParallax** — photo band, “Experience Our Advance Equipments” + “Request a Quote”
7. **Testimonials** — “Love using vertex”, repeating quote + Dennis Green / Civil Engineer
8. **Pricing** — `bg-light`, “Pricing”, 3 plans (Basic / Standard / Premium) at `$29 per month`, each “Get started”
9. **Blog** — “Our Blog”, 5 cards: “June 29, 2018 · Admin · Read more · 3”
10. **Footer** — blue band: about blurb, Quick Links, Contact Information (198 West 21th Street, Suite 721 New York NY 10016 · + 1235 2355 98 · info@yoursite.com), copyright
11. **QuoteModal** — `#modalRequest`: Full Name · Email · Date · Time · Message

## Section-by-section fidelity notes

**Navbar.** `.ftco-navbar-light` — transparent over the hero, becomes white with
`.scrolled` (blue active link). The “Request a Quote” button is the only filled
element and it opens the quote modal; the mobile menu is a Bootstrap collapse.

**Hero.** Two full-height slides (`calc(100vh - 117px)`, min 700px) each a cover
photo under `.overlay` `#0962ea` at **80 %** — the strongest single token in the
design; a lighter wash makes the band read as generic blue. Copy is a breadcrumb
line (“We’re **Vertex**, Construction and Development”) above a 72px `weight 400`
headline, left-aligned, with ring-style dots at the bottom (`bottom:120px`).

**StatsCounter.** `#section-counter` — four cells, big numerals above a small
uppercase caption. The served HTML prints `0` for three of them and `5143` for
the last: the numbers are **animated by the page's own inline script**, so the
DOM alone is not the reference for the values. Use a plausible static set
(15+ years, 40+ brigades, 120+ units, 5,143 employees) and keep the 4-up rhythm.

**Services.** `ftco-section` white, heading block (`h2` centred, muted subtext),
then 4 cards in `col-md-6 col-lg-3`. Each card is an icon in a circle, an
uppercase 15px heading and two lines of copy, all inside a **`2px dashed #dbe9fe`
frame** with decorative corner squares — that dashed frame is this theme's
easiest-to-miss signature.

**Portfolio.** `bg-light` (`#f8f9fa`) — centred title then a tile grid; source
tiles open a lightbox. Keep 4–6 tiles, hover scale only.

**CtaParallax.** bare `ftco-section cover_1`: full-bleed photo with dark scrim,
white `h2`, one “Request a Quote” button that opens the same modal. No card chrome.

**Testimonials.** `testimony-section` — a horizontally scrolling row of
`.testimony-wrap` cards (dashed `#dbe9fe` frame, quote glyph, avatar, name +
role). The source repeats one voice five times; vary the names.

**Pricing.** `bg-light`, three `.pricing` cards with the same dashed frame, `$29`
in a large numeral, “per month”, a feature list (Open Source / Free 30 Day Trial /
Request a Quote in the source) and one `.btn` each. The middle plan is not
highlighted in the source — do not invent a “popular” ribbon.

**Blog.** 5 `.blog-entry` cards: image, meta line (`June 29, 2018 · Admin`),
`h3` title (“Even the all-powerful Pointing has no control about the blind
texts” — lorem, paraphrase it), “Read more” + comment count. Grid is 3-up on
desktop.

**Footer.** `#0962ea` at `8em` padding with four widgets: about blurb + wordmark,
Quick Links (About · Project · Services · Blog · Contact), Contact Information
(address, phone, two e-mails), and a social row; then
“Copyright © All rights reserved · This template is made with ♥ by Colorlib”.
Per AGENTS.md rule 5 the recreation replaces that credit with a link to
https://www.componentdock.com/ and never names ColorLib in `apps/derrick/`.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.ftco-navbar-light` | transparent → scrolled bar | `Navbar` — scroll state, mobile collapse, quote CTA |
| `.home-slider` | 2 slides, blue overlay | `Hero` — index state, `bg-brand/80` overlay |
| `#section-counter` | JS-animated counters | `StatsCounter` — static figures, 4-up |
| `.services` | 4 dashed-frame cards | `Services` — `border-2 border-dashed border-brand-100` |
| `bg-light` portfolio | tile grid + lightbox | `Portfolio` — grid, hover scale (no lightbox) |
| `cover_1` | photo band + CTA | `CtaParallax` — `bg-fixed`-style band |
| `.testimony-wrap` | scrolling quote cards | `Testimonials` — 3-up grid |
| `.pricing` | 3 plans | `Pricing` — 3-up, one `.btn` each |
| `.blog-entry` | 5 post cards | `Blog` — grid of cards |
| `#modalRequest` | quote modal | `QuoteModal` — controlled `isOpen`, 5 fields |
| `.ftco-footer` | blue 4-widget footer | `Footer` — links, contact block, Component Dock credit |

## Placeholder images

`https://picsum.photos/seed/derrick-hero-<1..2>/1600/900`,
`https://picsum.photos/seed/derrick-project-<1..6>/700/700`,
`https://picsum.photos/seed/derrick-cta/1600/800`,
`https://picsum.photos/seed/derrick-blog-<1..5>/600/400`,
`https://picsum.photos/seed/derrick-avatar-<1..3>/96/96`. Quicksand comes from
Google Fonts via `<link>`; no ColorLib asset (image, icon font, CSS) is copied.

## App deltas (as shipped in `apps/derrick/`)

- `--color-brand-500: #0962ea` with a generated 50–900 scale; the sheet only
  declares the one blue plus `#0853c5`, so the light steps (`#eef4ff`…`#bcd4ff`)
  are app-side tints used for the dashed frames in place of `#dbe9fe`.
- The hero overlay ships at a lighter opacity than the sheet's `.8`.
- `StatsCounter` ships static values (the source animates from 0 by inline JS)
  and `Testimonials` is a static 3-up grid, not a marquee.
- `QuoteModal` is a controlled dialog opened by the navbar and CTA buttons — the
  source uses Bootstrap's `#modalRequest`; fields (name, e-mail, date, time,
  message) match, submission is local only.
