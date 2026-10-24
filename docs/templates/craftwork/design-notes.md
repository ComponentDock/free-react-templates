# Craftwork — Design Notes

- **Source slug:** `schmidt`
- **ColorLib name:** Schmidt (`<meta name="generator" content="Schmidt 3.0.0">`)
- **Listing:** https://colorlib.com/wp/template/schmidt/
- **Preview:** https://preview.colorlib.com/theme/schmidt/ (HTTP 200)
- **New name:** craftwork · **Category:** Personal portfolio (multi-page → single page)
- **Spec:** `openspec/specs/template-craftwork/spec.md`
- **App:** `apps/craftwork/` (Navbar · Hero · About · Services · Stats · Works · Footer)

Rewrite status: this brief replaced a “ColorLib Design” description on 2026-10-24
(docs-source drift, `verify-docs-source.py`). The spec, the `TEMPLATES.md` row and
the shipped app all describe Schmidt; the brief was the only stale layer. Values
below were re-measured from the live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `theme/schmidt/index.html` | 7,602 | `f6037bc7c36bc9ab84ff…` |
| `theme/schmidt/css/style.min.css?v=3.0.0` | 190,347 | `e37589d769534e57a818…` |
| `theme/schmidt/about.html` | 20,898 | `4a0f57d33a4c9e8d65c9…` |
| `theme/schmidt/services.html` | 17,922 | `87c7c2bba77e638d9718…` |
| `theme/schmidt/work.html` | 15,545 | — |

Schmidt 3.0.0 is **multi-page**: `index.html` is a hero teaser (7.6 KB, 12 anchors,
0 dead `#`), and the design's real body sits on live inner pages — `about.html`
(about + counters + skills + client quotes), `services.html` (8 service cards +
3 pricing tiers), `experience.html` (resume timeline), `work.html` (portfolio grid),
`blog.html`, `contact.html`. All probed HTTP 200 on 2026-10-24.

## Design tokens (from `css/style.min.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand gold | `#d5c455` | 26 hex occurrences — `.btn.btn-primary`, `.hero-wrap .overlay`, `.services:hover`, `.project .overlay`, `.progress-bar`, `.testimony-wrap .icon`, `.resume-wrap .icon` |
| Deep gold (links / subheads / prices) | `#6e6218` | 18 occurrences — `a`, `.heading-section .subheading`, `.block-7 .price .number`, `.section-counter .number`, `.resume-wrap span.date` |
| Heading ink | `#222` | `.hero-wrap .slider-text h1`, `.bread`, solid navbar |
| Body text | `#666` | `body{font-size:16px;line-height:1.8;font-weight:400;color:#666}` |
| Page background | `#f8f8f8` | `body{background:#f8f8f8}` |
| Light band | `#f8f9fa` | `.bg-light` |
| Typeface | **Poppins** | 15 `font-family` declarations (`Poppins,Arial,sans-serif`) |
| Hero h1 | 80px/1.2, w700 | `.hero-wrap .slider-text h1` (30px on mobile) |
| Section h2 | 40px/1.4, w600 | `.heading-section h2` (38px ≤991px) |
| Buttons | **square** (`border-radius:0`), 9px 12px, 12px/700 uppercase, 1px tracking, `box-shadow:0 24px 36px -11px #00000017`; gold bg + `#222` label | `.btn` reset, `.btn.btn-primary` |
| Hero overlay | gold `#d5c455` panel over the **right 50%**, hidden ≤767px | `.hero-wrap .overlay` |
| Navbar | absolute/transparent `top:20px` → solid `#222`, `padding:7px 0` | `.ftco-navbar-light` |
| Footer | `.ftco-footer` `padding:2em 0`, 13px copyright, no dark band | `.ftco-footer` |

The sheet's other hexes (`#0d6efd`, `#6c757d`, `#212529`, `#dc3545`, `#198754`,
`#ffc107`, `#0dcaf0`) are the bundled Bootstrap 5 block, not the design. The app's
`@theme` maps this palette to `--color-brand #d5c455`, `--color-brand-dark
#bfa83a`, `--color-ink #1a1a1a` (spec's heading token), `--color-mist #666666`,
`--color-paper #ffffff`, `--color-cloud #f8f9fa`; only the gold and the greys are
measured values, the `#1a1a1a` ink is the spec's recorded approximation of `#222`.

## Section order (as shipped)

1. **Navbar** — wordmark “Craftwork.”, links Home · About · Services · Works · Contact; transparent over hero → solid `#222`
2. **Hero** — photo + right-half gold panel, subheading, 80px headline, single gold CTA
3. **About** — two-column split: portrait + “About Me” block with the `about-info` label list
4. **Services** — 4 cards, gold icon above title, card fills gold on hover
5. **Stats** — 4 counters (source: 5000 happy clients, 1200 projects, 500 coffees, 587 working hours), number `#6e6218`
6. **Works** — square portfolio grid with gold hover overlay and title/category
7. **Footer** — wordmark, blurb, social row, Component Dock line

Source page mapping: hero → `index.html`; about + counters → `about.html`;
services → `services.html`; works → `work.html`. The source's pricing tiers
(`services.html`), resume timeline (`experience.html`) and blog index are out of
scope — the spec's seven sections are the contract.

## Section-by-section fidelity notes

**Navbar.** `.navbar.ftco-navbar-light` — wordmark “Schmt.” linking `index.html`
(a no-op link on the home page), seven nav items (Home, About, Services,
Experiences, Works, Blog, Contact) and a `navbar-toggler` for ≤991px. Transparent
and absolute (`top:20px`) while the hero is in view, `background:#222` with
`padding:7px 0` once scrolled; active link `#6e6218 !important` on desktop,
`#d5c455` in the collapsed menu.

**Hero.** `<section class="hero-wrap">`, `height:100vh`, `background-attachment:
fixed`, plus `<div class="overlay">` = right-half gold panel. Copy measured:
subheading “UI/UX Designer & Developer”, h1 “I'm John Schmidt”, CTAs “More About
Me” and “Hire Me”. h1 80px/1.2/700 `#222`; buttons square with the long soft
shadow. At ≤767px the gold panel disappears — the photo alone carries the hero.

**About.** `.ftco-about-section`: image one side, on the other the subheading
“About Me”, 40px h2, a paragraph, `ul.about-info` (Name / Date of birth / Address
/ Zip code / Email / Phone — label `#6e6218`, value `#222`) and a “Download CV”
button. Keep the label list; it is what separates the section from a generic
bio block.

**Services.** `.ftco-services .services` cards — centred icon inside a gold span
(`color:#d5c455`), 20px title, grey blurb, `col-md-6 col-lg-3`. Hover sets the
whole card to `background:#d5c455` and inverts icon/title/blurb. Source lists
eight (UI/UX Design, Web Development, Graphic Design, Branding, Marketing, Mobile
App Design, Visual Editor, IT Consultancy); the app ships four, same card anatomy.

**Stats.** `.section-counter` — four items, `.number` in `#6e6218`, label `#666`,
in a row above the about split in the source. Numbers 5000 / 1200 / 500 / 587 with
labels Happy Clients / Projects Done / Cups of Coffee / Working Hours.

**Works.** `.ftco-project` — square tiles, `.project .overlay` gold at `opacity:0
→ .9`, centred title + category. Source titles: Paperback Studio Identity
(Branding), Hillside Illustration Set (Illustration), Weekend Sale Campaign
(Marketing), Poster Series Website (Web Design), Drawer & Co. Product Pages
(E-commerce), Studio Dashboard UI (UI/UX Design), plus nine more behind
`< 1 2 >` pagination. The app ships a static grid, no pagination.

**Footer.** `.ftco-footer` — light band (`2em` padding), wordmark + paragraph,
social row, 13px copyright. Source credit reads “made with ♥ by Colorlib”; per
AGENTS.md rule 5 the app replaces it with a link to
https://www.componentdock.com/ and names ColorLib nowhere in `apps/craftwork/`.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| all pages | `.ftco-navbar-light` | `Navbar` — transparent over hero, `bg-ink` after scroll |
| index.html | `.hero-wrap` + `.overlay` | `Hero` — background photo + `right-1/2` gold panel hidden under `md` |
| about.html | `.ftco-about-section` | `About` — 2-col split + `about-info` list |
| services.html | `.services` cards | `Services` — 4-up grid, `group-hover:bg-brand` |
| about.html | `.section-counter` | `Stats` — 4-up counter grid, gold numbers |
| work.html | `.project` + `.overlay` | `Works` — square tiles, gold overlay on hover |
| all pages | `.ftco-footer` | `Footer` — wordmark, social row, Component Dock link |

## Placeholder images

`https://picsum.photos/seed/craftwork-hero/1600/1000`,
`https://picsum.photos/seed/craftwork-portrait/800/1000`,
`https://picsum.photos/seed/craftwork-work-<1..6>/800/800`. Poppins is loaded from
Google Fonts via `<link>` in `index.html`; no ColorLib asset is copied.

## Deltas vs the source (recorded, deliberate)

- Multi-page → single page; pricing tiers, resume timeline and blog dropped.
- Eight service cards → four; twelve+ portfolio tiles + pagination → a static grid.
- §Buttons in the spec says the primary button is “rounded”; the measured sheet is
  **square** (`border-radius:0`). The sheet wins — reproduce square corners with
  the `0 24px 36px -11px rgba(0,0,0,.09)` shadow.
- Footer credit → Component Dock; copy paraphrased throughout.

## App deltas (as shipped in `apps/craftwork/`)

- **Navbar** ships as a fixed white/95 blurred bar with a `Craft.` wordmark and the
  source's seven labels (Home … Contact) pointing at `#<label>` anchors; the source
  bar is transparent over the hero and turns `#222`. Restoring the source treatment
  is an open fidelity gap, not a prep error.
- **Buttons** ship as `rounded-full` pills (Hero CTAs); the measured sheet is square
  (`border-radius:0`) with the long soft shadow.
- `About` carries the skill bars (`rounded-full` track + `bg-brand` fill) that the
  source puts in its skills list; no separate `Skills` section.
