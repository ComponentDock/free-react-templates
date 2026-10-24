# Lenscape — Design Notes

- **Source slug:** `schmidt`
- **ColorLib name:** Schmidt (`<meta name="generator" content="Schmidt 3.0.0">`)
- **Listing:** https://colorlib.com/wp/template/schmidt/
- **Preview:** https://preview.colorlib.com/theme/schmidt/ (HTTP 200)
- **New name:** lenscape · **Category:** Personal portfolio (multi-page → single page)
- **Spec:** `openspec/specs/template-lenscape/spec.md`
- **App:** `apps/lenscape/` (Navbar · Hero · About · Services · Skills · Works · Testimonials · Contact · Footer)

Rewrite status: this brief replaced a Bato description on 2026-10-24 (docs-source
drift, `verify-docs-source.py`). Every value below was re-measured from the live
reference that same day; the spec and the shipped app both describe Schmidt, so
the brief was the stale layer.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `theme/schmidt/index.html` | 7,602 | `f6037bc7c36bc9ab84ff…` |
| `theme/schmidt/css/style.min.css?v=3.0.0` | 190,347 | `e37589d769534e57a818…` |
| `theme/schmidt/about.html` | 20,898 | `4a0f57d33a4c9e8d65c9…` |
| `theme/schmidt/services.html` | 17,922 | `87c7c2bba77e638d9718…` |

**Schmidt 3.0.0 is a multi-page theme, not a one-pager.** `index.html` is a bare
hero teaser (7.6 KB: navbar + hero + footer, 12 anchors, **0** dead `href="#"`);
the body of the design lives on inner pages, all live and all probed HTTP 200:
`about.html` (hero-2 + about + skills + clients), `services.html` (hero-2 +
services grid + pricing), `experience.html` (resume timeline),
`work.html` (portfolio grid, 25 anchors), `blog.html`, `contact.html`
(address block + form + map card). Those inner pages are the authoritative
reference for the sections the single-page recreation has to invent — never
treat `index.html` alone as "the whole design".

## Design tokens (from `css/style.min.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand gold | `#d5c455` | 26 hex occurrences — `.btn.btn-primary`, `.hero-wrap .overlay`, `.progress-bar`, `.services:hover`, `.project .overlay`, `.testimony-wrap .icon`, `.resume-wrap .icon` |
| Deep gold (links / subheads / prices) | `#6e6218` | 18 occurrences — `a`, `.dropdown-item:hover`, `.hero-wrap .slider-text .subheading`, `.heading-section .subheading`, `.block-7 .price .number`, `.section-counter .number` |
| Heading ink | `#222` | `.hero-wrap .slider-text h1`, `.bread`, navbar `background:#222` when solid |
| Body text | `#666` | `body{font-size:16px;line-height:1.8;font-weight:400;color:#666}` |
| Page background | `#f8f8f8` | `body{background:#f8f8f8}` — white cards/sections sit on it |
| Light section | `#f8f9fa` | `.bg-light` (clients band, contact) |
| Typeface | **Poppins** | 15 `font-family` declarations (`Poppins,Arial,sans-serif`) |
| Hero h1 | 80px / 1.2, weight 700 | `.hero-wrap .slider-text h1` (30px on mobile) |
| Section h2 | 40px / 1.4, weight 600 | `.heading-section h2` (38px ≤ 991px) |
| Subheading | 16px, 700, uppercase, 1px tracking | `.slider-text .subheading` (12px/500 on mobile) |
| Buttons | **square**: `border-radius:0`, 9px 12px padding, 12px/700 uppercase, 1px tracking, `box-shadow:0 24px 36px -11px #00000017`, gold bg with `#222` label; outline variant = 1px gold border, gold label | `.btn` reset + `.btn.btn-primary` |
| Hero overlay | gold `#d5c455` panel pinned to the **right 50%** (`opacity:1`); hidden ≤767px (`.hero-wrap .overlay{opacity:0}`) | `.hero-wrap .overlay` |
| Navbar | transparent and absolute over the hero (`top:20px`); solid `#222` once out of the hero / on inner pages (`padding:7px 0`) | `.ftco-navbar-light` |
| Footer | `.ftco-footer` padding `2em 0`, `13px` copyright; no dark band of its own | `.ftco-footer` |

Do **not** reproduce the vendor hexes in the same sheet (`#0d6efd`, `#6c757d`,
`#212529`, `#dc3545`, `#198754`, `#ffc107`, `#0dcaf0`) — they are the bundled
Bootstrap 5 block (`--bs-*` custom properties), not Schmidt's design. Radii come
from the same story: every design button, card and overlay is square; the only
rounded shapes are `50%` avatars/icon circles and Bootstrap's own
`--bs-border-radius` defaults inside the vendor block.

## Section order (as shipped, single-page consolidation)

1. **Navbar** — wordmark “Lenscape.”, links Home / About / Services / Skills / Works / Contact
2. **Hero** — full-viewport image + right-half gold panel, subheading, h1, two CTAs
3. **About** — portrait + biography + counter stats (4 numbers)
4. **Services** — 4 cards, gold icon above title, hover fills gold
5. **Skills** — progress bars (gold fill, percentage labels)
6. **Works** — portfolio grid, gold overlay on hover
7. **Testimonials** — client cards with initials avatar, quote, name, role
8. **Contact** — address / email / phone block + form (name, email, subject, message)
9. **Footer** — wordmark, short blurb, social links, Component Dock credit

Source page mapping: hero → `index.html`; about + counters + skills + testimonials
→ `about.html`; services → `services.html`; works → `work.html`; contact →
`contact.html`.

## Section-by-section fidelity notes

**Navbar.** Source wordmark is “Schmt.” inside `.navbar-brand` → `index.html`
(no-op link on the home page). Nav carries seven items (Home, About, Services,
Experiences, Works, Blog, Contact) plus a `navbar-toggler` button for ≤991px.
The bar is `position:absolute;top:20px` with a transparent background while the
hero is in view and switches to `background:#222` with `padding:7px 0` once it
scrolls off. Active link is `#6e6218 !important` on desktop and `#d5c455` inside
the collapsed mobile menu. React: one `Navbar` with a scroll sentinel and a
`useState` mobile toggle; the logo dot is the brand gold, exactly like the source's
period after the wordmark.

**Hero.** Markup is `<section class="hero-wrap">` with a fixed-attachment
background image (`background-attachment:fixed`, `height:100vh`) and
`<div class="overlay">` = right-half gold panel. Copy: subheading “UI/UX Designer
& Developer”, h1 “I'm John Schmidt”, CTAs “More About Me” (→ about) and “Hire Me”
(→ contact). h1 is 80px/1.2/700 in `#222`; the two buttons are square, white-ish
on the image and gold-on-dark for the primary. Reproduce the gold panel at ≥768px
and drop it on mobile (source does the same) — the image alone must stay legible.

**About.** `.ftco-about-section` is a two-column split: portrait image on one
side, on the other the subheading “About Me”, a 40px h2, a paragraph, an
`ul.about-info` definition list (Name / Date of birth / Address / Zip code /
Email / Phone — label in `#6e6218`, value `#222`) and a “Download CV” button.
Above it sits the counter band `.section-counter`: 5000 Happy Clients, 1200
Projects Done, 500 Cups of Coffee, 587 Working Hours — number in `#6e6218`, label
in `#666`. In React the stat row is its own block inside `About` (4-col grid,
collapses to 2-col).

**Skills.** `.testimony-section` + `.progress` bars: Adobe Photoshop 90, Figma 95,
Adobe Illustrator 90, Javascript 85, HTML5 95, CSS3 90, WordPress 70, Adobe XD 80,
SEO 80. Track is light grey, `.progress-bar` fill is `#d5c455` with a `::after`
cap of the same gold, label text `#6e6218`. Keep the source's two-column bar list
(2 × 5 on desktop) but the app ships 4–6 representative skills — the bar geometry,
not the count, is the fidelity target.

**Services.** `.services` cards: centred lucide-style icon inside a gold `span`
(`color:#d5c455`), 20px title, grey blurb. Source copy: UI/UX Design, Web
Development, Graphic Design, Branding, Marketing, Mobile App Design, Visual
Editor, IT Consultancy (8 cards, `col-md-6 col-lg-3` → 4 × 2). Hover turns the
whole card gold (`.services:hover{background:#d5c455}`) and flips icon + text to
dark — the single most recognisable interaction on the page; implement it with
`group` + `group-hover` rather than JS.

**Works.** `.ftco-project` grid of square thumbnails with `.project .overlay`
(gold, `opacity:0 → .9` on hover) and a centred title + category. Source items:
Paperback Studio Identity (Branding), Hillside Illustration Set (Illustration),
Weekend Sale Campaign (Marketing), Poster Series Website (Web Design), Drawer &
Co. Product Pages (E-commerce), Studio Dashboard UI (UI/UX), Bloom Florist App
(Mobile App), Meeting Room Booking, Wedding Planner Stationery, Lightbulb
Workshop Branding, Evening Market Microsite, Corner Café Menu and Website, with
`< 1 2 >` pagination (`.block-27`). The recreation ships a static 6-tile grid —
no pagination — and keeps the gold hover overlay.

**Testimonials.** `.testimony-wrap` white cards: gold `50%` icon circle holding
an initials avatar, italic-leaning quote, author name and role in `#6e6218`.
Source voices: Maya Ortiz (Founder, Bloom Florist), Daniel Reyes (Product Lead,
Harbourline), Priya Nair (Owner, Corner Café), Tom Beck… Paraphrase freely, keep
the initials-avatar + name/role structure.

**Contact.** `contact.html` is a two-column block: left = address, email, phone
(each with a gold icon) plus a “Show map” card; right = form (Name, Email,
Subject, Message) with a hidden honeypot field and a gold submit button. Inputs
are 1px `#dee2e6` bottom-ish borders that turn gold on `:focus`
(`border-color:#d5c455!important`). The recreation keeps the four fields and the
`:focus` gold ring, drops the map embed (key-less placeholder) and the honeypot.

**Footer.** `.ftco-footer` — white/`#f8f8f8` band, `2em` vertical padding, wordmark
plus a short paragraph, a social row and the copyright line: “Copyright © 2026 ·
All rights reserved · This template is made with ♥ by Colorlib”. Per AGENTS.md
rule 5 the recreation replaces that credit with a link to
https://www.componentdock.com/ (“Component Dock”) and must not name ColorLib
anywhere in `apps/lenscape/`.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `index.html` hero | `section.hero-wrap` + `div.overlay` | `Hero` — `<section>` with a Tailwind background image and an absolutely-positioned `right-1/2` gold div hidden under `md` |
| about.html | `.ftco-about-section`, `.section-counter` | `About` — 2-col split + 4-up stat grid |
| about.html | `.progress` list | `Skills` — `role="progressbar"` divs with inline `width` and gold fill |
| services.html | `.services` cards | `Services` — `grid md:grid-cols-2 lg:grid-cols-4`, `group` hover |
| work.html | `.project` + `.overlay` | `Works` — `aspect-square` tiles, overlay on `group-hover` |
| about.html | `.testimony-wrap` | `Testimonials` — card row, initials circle in `--color-gold` |
| contact.html | `.contactForm` | `Contact` — labelled form, gold focus ring, local `useState` only |
| all pages | `.ftco-navbar-light` | `Navbar` — transparent over hero → `bg-ink` after scroll |

## Placeholder images

`https://picsum.photos/seed/lenscape-hero/1600/1000`,
`https://picsum.photos/seed/lenscape-portrait/800/1000`,
`https://picsum.photos/seed/lenscape-work-<1..6>/800/800`,
`https://picsum.photos/seed/lenscape-avatar-<n>/96/96`. No ColorLib asset is
copied; Poppins comes from Google Fonts via `<link>` in `index.html`.

## Deltas vs the source (recorded, deliberate)

- Multi-page → single page: `experience.html` (resume timeline), `blog.html`
  (post list) and the pricing block on `services.html` are **not** recreated;
  the spec's eight sections are the contract.
- Eight service cards → four; twelve portfolio tiles + pagination → six.
- Form posts nowhere (no backend), honeypot and Google-Maps embed dropped.
- Footer credit → Component Dock; all ColorLib copy paraphrased.
- The spec's button wording says “sharp corners, box-shadow, uppercase,
  letter-spacing”, which matches the measured sheet (`border-radius:0`); if any
  older note says “rounded gold buttons”, the sheet wins.
