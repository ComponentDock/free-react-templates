# Elixir — Design Notes

- **Source slug:** `pharma`
- **ColorLib name:** Pharma (free pharmacy / supplement store template)
- **Listing:** https://colorlib.com/wp/template/pharma/
- **Preview:** https://preview.colorlib.com/theme/pharma/ — HTTP 200, 22,706 B,
  sha256 `68e779c277e003a2…` (measured 2026-10-24); page title
  `Pharma &mdash; Colorlib Template`
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pharma-free-template.jpg
  (1,200 × 946 JPG)
- **New name:** elixir · **Category:** Pharmacy / supplement store
- **Spec:** `openspec/specs/template-elixir/spec.md`
- **App:** `apps/elixir/` (Navbar · Hero · FeatureBanners · PopularProducts ·
  NewProducts · Testimonials · CtaBanners · Footer)

Rewrite status: this brief replaced a **Colorlib Wizard 29** description (a small
4-step registration form) on 2026-10-24 — a design that shares nothing with this
app. Docs-source drift caught it (`scripts/verify-docs-source.py`, `DOCS-STALE`
`brief=colorlib-wizard-29`); the spec, the `TEMPLATES.md` row (`line 1134`) and
the shipped app all recreate `pharma`. Every value below was re-measured from the
live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `/theme/pharma/` (index) | 22,706 | `68e779c277e003a2…` |
| `theme/pharma/css/style.css` | 23,420 | `f749245820c7ff3c…` |
| `css/bootstrap.min.css`, `css/owl.carousel.min.css`, `css/aos.css`, `fonts/icomoon/style.css` | supporting sheets (template CSS layered over Bootstrap 4) | — |

The page loads **8** stylesheets (Bootstrap 4 + Owl Carousel + Magnific Popup +
AOS + an icomoon icon font) and holds **51** anchors, **14** `<img>` tags, one
`<form>` (the hidden search overlay, a single text input) and **4** inline
`background-image` declarations. It is a multi-page shop theme (`index.html`,
`shop.html`, `shop-single.html`, `cart.html`, `about.html`, `contact.html`);
Elixir recreates the **home page only** — the other pages are referenced by
links in the source and have no counterpart here.

## Design tokens (from `css/style.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Brand teal | `#51eaea` | 17 declarations — `.btn-primary`, `.bg-primary`, link hovers, section underlines |
| Feature-tile fills | teal `.bg-primary`, green `.bg-success`, amber `.bg-warning` | the three overlapping banner tiles carry Bootstrap's contextual classes, overridden by the sheet |
| Ink | `#25262a` (7) · `#000` (24) | headings, footer ground |
| Paper | `#fff` (13) · `#edf0f5` (4) · `#f4f5f9` (2) | page, card beds, `bg-light` section |
| Body text | `#8c92a0`, 16px, weight **300**, `line-height: 1.7` | `body{…}` |
| Quote type | `"Crimson Text", serif`, italic, 1.3rem | `.testimony blockquote p` — the sheet's only serif |
| Icons | `"icomoon"` (self-hosted icon font) | 3 `font-family: "icomoon"` declarations |
| Buttons | uppercase, `border-width: 2px`, `.3s` transition | `.btn` |
| Radii | `50%` (avatars, dots) · `4px` (inputs/cards) | 7 + 2 declarations |
| Footer | `padding: 6em 0` | `.site-footer` |

Palette census, most-used first: `#000` ×24, `#51eaea` ×17, `#fff` ×13,
`#25262a` ×7, `#edf0f5` ×4, `#212529` ×3. No other chromatic value reaches
double digits — the design is **one accent (teal) over near-black and white**.

## Visual design (from the TEMPLATES.md screenshot)

White masthead with a wide-tracked `PHARMA` wordmark on the left; nav
`HOME` (underlined, active) · `STORE` · `DROPDOWN` · `ABOUT` · `CONTACT`, then a
search glyph and a shopping bag with a `2` badge. Below it a full-width hero
photo of pill bottles on a warm wooden table (screenshot samples `#713814`
brown, `#b59e7f` tan, `#fefefe` white); centred, uppercase white kicker
(`EFFECTIVE MEDICINE, NEW MEDICINE EVERYDAY`), a two-line bold uppercase `h1`
and a **flat teal `SHOP NOW`** button. Three square-cornered tiles
(teal / green / amber) straddle the hero's bottom edge — `Free Shipping`,
`Season Sale 50% Off`, `Buy A Gift Card` — each with an italic display line and a
small paragraph. Everything below is white ground, centred uppercase section
titles, product photos on white. The screenshot shows no teal in the section
bodies: the accent is spent on buttons and small ticks only.

## Section order (as the reference renders)

1. **Header** — `.site-navigation`: `PHARMA` logo + `Home / Store / Dropdown
   (Supplements · Vitamins · Diet & Nutrition · Tea & Coffee) / About /
   Contact`, search toggle, cart with count badge, mobile hamburger.
2. **Search overlay** — `.search-wrap`: full-width input, placeholder
   "Search keyword and hit enter...", close glyph (the page's only form).
3. **Hero** — `.site-blocks-cover` with `images/hero_1.jpg`:
   `h2.sub-title` → `h1` → `Shop Now`.
4. **Feature tiles** — three `.banner-wrap` cards inside
   `.row.align-items-stretch.section-overlap` (teal, green, amber).
5. **Popular Products** — `.site-section` → `h2` "Popular Products" → 6 cards
   (`col-sm-6 col-lg-4`), `Sale` tag on two, `<del>` price + current price.
6. **New Products** — `.site-section.bg-light` → `h2` + Owl carousel
   (`.nonloop-block-3.no-direction`), 4 cards.
7. **Testimonials** — `h2` + 4 `.testimony` blockquotes (avatar, serif italic
   quote, name).
8. **CTA banners** — `.site-section.bg-secondary.bg-image` with two
   `a.banner-1` halves: `Pharma Products`, `Rated by Experts`.
9. **Footer** — `.site-footer`: `About Us`, `Quick Links`, `Contact Info`,
   copyright line.

## Section-by-section fidelity notes

**Header.** Text-only wordmark, no icon; nav items are uppercase with a 2px
teal underline on the active item. The search control opens a bar that pushes
the hero down (not a modal), and the cart is a bag glyph with a circular count
badge. Both are navigation affordances, not commerce: the source's cart links to
`cart.html`, which this recreation does not build.

**Hero.** One photo, one centred column (`col-lg-7.mx-auto`), text on white with
no dark overlay — legibility comes from the photograph itself. Kicker is
uppercase, tracked, white, small; `h1` is the largest type on the page and
uppercase; the single CTA is the flat teal button. Keep the hero tall enough
that the three tiles can overlap its bottom edge (`section-overlap`).

**Feature tiles.** The overlap is the design's signature: the tiles' top third
sits on the photo. Each tile is a link with an italic display headline
(`Free <br> Shipping`), a lead line "Amet sit amet dolor" and a small
paragraph. Colour comes from the contextual fill (teal / green / amber), text is
white, corners square.

**Popular Products.** Six white cards, three per row at `lg`. Photo first, then
centred dark name, then price: the sale cards render `<del>95.00</del> — $55.00`,
i.e. struck list price, em dash, current price. `Sale` tags are small
uppercase chips pinned at the card's top-left.

**New Products.** Same card anatomy on a `bg-light` band, four items in a
draggable Owl carousel with no visible arrows (`.no-direction`) — so the band
reads as a horizontal scroll strip. Reproduce with a scroll-snap row, not a
paged slider.

**Testimonials.** Four quotes in a row: circular avatar, italic serif quote
(the page's only serif face), name below. White ground, no cards.

**CTA banners.** Two full-height photo halves stacked side by side on a dark
section; each holds an `h2` and a small uppercase "Shop Now"-style link, one
left-aligned, one right-aligned (`ml-auto`). They are links, not cards.

**Footer.** Three text columns — About Us (paragraph), Quick Links (nav list),
Contact Info (address lines) — over a dark ground, then the copyright row. The
recreation replaces the source's ColorLib credit with the Component Dock line.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.site-navigation` + `.icons` | logo, 6-item nav with dropdown, search toggle, cart badge | `Navbar` — logo, links, optional cart badge, mobile menu |
| `.search-wrap` | slide-down search bar with one input | inline search field toggled from the navbar |
| `.site-blocks-cover` | photo hero, centred kicker + `h1` + CTA | `Hero` |
| `.banner-wrap` ×3 | overlapping teal/green/amber tiles | `FeatureBanners` |
| `.items` grid | 6 product cards with `Sale` chip and `<del>` price | `PopularProducts` |
| `.block-3.no-direction` | 4-up Owl strip on `bg-light` | `NewProducts` (scroll-snap row) |
| `.testimony` | serif italic quote + avatar + name | `Testimonials` |
| `.banner-1` ×2 | two photo CTA halves | `CtaBanners` |
| `.site-footer` | 3 columns + copyright | `Footer` (Component Dock credit) |

## Placeholder images / fonts

`https://picsum.photos/seed/elixir-<n>/<w>/<h>` for the hero photo, the tile
photography and all product shots (deterministic per slot). Body type is the
sheet's system sans stack; the testimonial serif is a Google font
(`Crimson Text`) loaded via `<link>`. Icons come from `lucide-react` (the
source's icomoon font is not copied).

## App deltas (as shipped in `apps/elixir/`)

- Brand token `--color-brand: #51eaea` matches the sheet; the app adds a hover
  shade `#38d4d4` that the sheet does not declare (it darkens via opacity), and
  `--color-mist: #8c92a0` is the sheet's body colour.
- The dashboard-only affordances are simplified: no search overlay form, no
  cart page, no product detail pages — cards are static, `Sale` chip and
  struck-through list price are kept.
- New Products ships as a scroll-snap strip rather than an Owl carousel (no
  arrow chrome in the source, so the visual difference is negligible).
- All photography is picsum placeholders; the icon font is replaced by
  `lucide-react` glyphs.

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer SHALL link
  [Component Dock](https://www.componentdock.com/). That is the only attribution
  line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string, it is what the source band renders: the recreation
  replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/elixir/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/elixir/public/CNAME` =
  `elixir.free.componentdock.com` and the package `homepage` =
  `https://elixir.free.componentdock.com`.
