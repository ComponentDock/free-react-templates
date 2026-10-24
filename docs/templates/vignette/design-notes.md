# Vignette — Design Notes

- **Source slug:** `karl`
- **ColorLib name:** Karl (`Karl Fashion | Clothing, Shoes and Accessories`)
- **Listing:** https://colorlib.com/wp/template/karl/
- **Preview:** https://preview.colorlib.com/theme/karl/ (HTTP 200)
- **New name:** vignette · **Category:** Fashion e-commerce (multi-page source → single page)
- **Spec:** `openspec/specs/template-vignette/spec.md`
- **App:** `apps/vignette/` (Header · DiscountBanner · HeroSlider · TopCategories · NewArrivals · OfferSection · Testimonials · Footer)

Rewrite status: this brief replaced a Bato (photography) description on 2026-10-24
(docs-source drift, `verify-docs-source.py`). The spec, the `TEMPLATES.md` row and
the shipped app all describe Karl; the brief — and its `tasks.md` token list
(`#F9CE00` / Playfair Display / Karla) — was the stale layer. Every value below was
re-measured from the live reference that day.

## Reference identity (measured 2026-10-24)

| Artefact | Bytes | sha256 (head) |
| --- | --- | --- |
| `theme/karl/index.html` | 51,776 | — |
| `theme/karl/css/core-style.min.css?v=3.0.0` | 235,452 | `88f8c2fa2f6c9dca…` |
| `theme/karl/style.css` | 345 | `088830a0335e…` |

The sheet identity matches the spec's recorded identity byte-for-byte, so the live
preview **is** the reference; the page carries 80 anchors with **0** dead `href="#"`
(nav, category strip, product links, filter tabs, pagination all point at
`shop.html`, `product-details.html`, `cart.html`, `checkout.html`,
`help-contact.html`). Those inner pages are the reference for anything the
one-pager has to invent; the recreation only needs `index.html`.

## Design tokens (from `css/core-style.min.css`, canonical over the screenshot)

| Role | Value | Evidence in the sheet |
| --- | --- | --- |
| Accent (dominant chromatic) | `#d6003a` | 39 hex occurrences — `.karl-btn:focus`, `.top-discount-area .single-discount-area:nth-child(2)`, `.cart_quantity`, `#scrollUp`, `.add_to_cart_button:hover` |
| Hover accent | `#ff084e` | 11 occurrences — `.single_catagory_area:after` (tile wash, `opacity:0 → 1`), `.single-testimonial-area .quote`, active slider dots, `.form-check-input:checked` |
| Secondary hues | `#7fbdff` (3), `#ff9800` (3) | form-range and rating/star accents |
| Surface | `#ffffff` | 63 declarations — cards, header, `.footer_area` |
| Ink | `#000000` / `#3a3a3a` | 29 + 23 — body copy and headings |
| Muted | `#6b6b6b` | 23 — meta lines, struck-through prices |
| Grey wash | `#f4f2f8` | header/nav bed (`#karl-navbar`), form fields, cart table |
| Divider | `#e5e5e5` | 2px border-top on `.footer_area` |
| Typeface | **Open Sans** | 11 `font-family` declarations (`Open Sans,sans-serif`) |
| Buttons | `.karl-btn`: `min-width:170px`, `height:55px`, **3px solid `#fff` border**, `border-radius:2px`, 14px/700 uppercase, `line-height:49px`, padding `0 30px`; filled state `#d6003a` bg + border | `.karl-btn`, `.karl-btn:hover/:focus` |
| Radii vocabulary | `50%` (dot indicators, `cart_quantity`, avatars), `2px` (`.karl-btn`), `4px` (`.kit-form-status`), `1rem` (range thumb) | — |
| Header search / promo | `.top-discount-area` = 3 equal cells (`flex:0 0 33.33%`), `#b8b8b8` cells with the **middle cell `#d6003a`** | `.top-discount-area .single-discount-area` |
| Hero slider dots | vertical column at `left:1%`, `9px` `#fff` circles with `2px #fff` border, `border-radius:50%` | `.welcome_slides.owl-carousel .owl-dot` |
| Category tiles | `.single_catagory_area` — 92px uppercase white headline (`.as-h2`), 14px white kicker (`.as-h6`), hover `#ff084e` wash via `:after` | — |
| Offer band | `.offer_area` full-bleed background image, `height:700px` | markup `style="background-image:image-set(…avif…)"` |
| Footer | `.footer_area` white, `border-top:2px solid #e5e5e5`, `padding:100px 0 50px` | — |

`#007bff`, `#6c757d`, `#212529`, `#dc3545`, `#198754`, `#ffc107` are the bundled
Bootstrap vendor block — not Karl's palette; never put them in `@theme`.

## Section order (as shipped)

1. **Header** — logo/wordmark, nav (Home, Pages, Shop, Product Details, Cart, Checkout, Help & Contact), category strip, cart drawer (“2 · Your Bag · $114.80”), promo strip (“Karl fashion store” / “Free Shipping & Returns” / phone)
2. **Discount banner** — 3 cells: “20% Discount for all dresses · USE CODE: KARL20”, “20% Discount for students · USE CODE: STUDENT20”, “* Only today we offer free shipping”
3. **Hero slider** — 3 slides, each a full-bleed photo with uppercase kicker + huge headline + CTA: Fashion Trends / Shop Now · Summer Collection / Check Collection · Women Fashion / Check Collection; vertical dot rail
4. **Top categories** — 2 large tiles (“On accessories · Sale 30% · SHOP NOW”, “On bags, except the new collection · Designer bags · SHOP NOW”) with the `#ff084e` hover wash
5. **New arrivals** — filter tabs (ALL · WOMAN · MAN · ACCESSORIES · SHOES · KIDS) over a 6-card product grid, plus a promo tile (“Basic t-shirt”, Hot, Was $25.90 → Now $15.90) and the empty state “No new arrivals in this category this week.”
6. **Offer section** — full-bleed background photo band (`height:700px`) with a single product/offer call-out
7. **Testimonials** — 3 quotes with initials avatars (Laura Mendes, Daniel Okafor, Sofia Marin)
8. **Footer** — link columns (About, Faq, Returns, Contact, Shipping, Our Policies, Affiliates), newsletter (“Subscribe to our newsletter” + email + Subscribe), copyright + Component Dock line

## Section-by-section fidelity notes

**Header.** `.header_area` + `.navbar.navbar-expand-lg` — the wordmark sits left,
the primary nav is a row of small uppercase links, and a category strip repeats the
shop taxonomy (Woman wear → Dresses / Tops / Coats & jackets / Jumpsuits; Man wear →
Blazers / T-shirts; Children; Bags & Purses; Eyewear; Footwear). The cart is a
right-side drawer opened by a bag trigger showing “2 / Your Bag / $114.80” with two
line items (Yellow Print Maxi Dress $59.90 size 36; Terracotta Wrap Dress $54.90
size M) and Cart / Checkout buttons. Recreation: sticky bar, links as anchors, cart
badge as a static counter (no commerce logic).

**Discount banner.** Three equal cells, the **middle one in `#d6003a`** and the outer
two `#b8b8b8`, each centred, white text, promo sentence on line 1 and the code in a
smaller uppercase line. This is the page's only full-width colour band — it is what
makes the design read as Karl.

**Hero slider.** `.welcome_area` / `.welcome_slides` — full-height photo slides,
text left-aligned over the image, kicker in 14px uppercase white, headline around
92px uppercase white, one `.karl-btn` with a 3px white border and `2px` radius.
Vertical dot rail pinned at `left:1%`, `9px` white circles. Autoplay ~5 s.

**Top categories.** Two half-width tiles (source: `col-md-6`), each an image with a
white kicker (`On accessories` / `On bags, except the new collection`), a big
uppercase title (`Sale 30%` / `Designer bags`) and a `SHOP NOW` link; the hover
overlay is `#ff084e` at full opacity (`:after` wash). The source also opens a
quick-view modal for “White Satin Blazer $89.90” (sizes XS–XL, Add to cart, Share
With Friend) — the recreation skips the modal.

**New arrivals.** `.new_arrivals_area` — centred `h2` “New Arrivals”, a filter tab
row (ALL active, `block-27`-style pagination reused), then a 3 × 2 product grid:
White Satin Blazer $89.90 · Peace Print Crop Tee $24.90 · Cable Knit Sweater $49.90
· Blush Mini Backpack $59.90 · Teal Halter Jumpsuit $69.90 · Grey Linen Blazer
$99.90, each with an image, name, price and an “Add to cart” affordance revealed on
hover. One grid cell is the promo tile “Basic t-shirt”, Hot badge, “* Free shipping
and returns”, Was $25.90 → Now $15.90, Shop Now. Filtering is client-side; the
empty state (“No new arrivals in this category this week. Browse the whole shop”) is
part of the reference and should exist.

**Offer section.** `.offer_area` `height:700px`, full-bleed `background-image` with
a centred call-out and one `.karl-btn`. Keep it image-led; no card chrome.

**Testimonials.** `.karl-testimonials-area` — quote cards with a `50%` initials
avatar, the quote in body ink, name and role in `#6b6b6b`. Source voices: Laura
Mendes (Customer, Lisbon), Daniel Okafor (Customer, Manchester), Sofia Marin
(Customer, Valencia). Paraphrase the copy, keep the shape.

**Footer.** `.footer_area` white with a `2px #e5e5e5` top border and generous
(`100px 0 50px`) padding: link columns, the newsletter form (“Email address” +
“Subscribe”, honeypot field in the source), social glyphs, then the copyright line
“© 2026 · All rights reserved · made with ♥ by Colorlib”. Per AGENTS.md rule 5 the
recreation replaces that credit with a link to
https://www.componentdock.com/ and never names ColorLib in `apps/vignette/`.

## Source → React adaptation

| Source | Source element | React equivalent |
| --- | --- | --- |
| `.header_area` | logo + nav + category strip + cart drawer | `Header` — sticky bar, anchor nav, static cart badge |
| `.top-discount-area` | 3 promo cells | `DiscountBanner` — 3-up grid, middle cell `bg-brand` |
| `.welcome_area` | owl carousel of 3 slides | `HeroSlider` — index state + 5 s interval, vertical dot rail |
| `.top_catagory_area` | 2 image tiles | `TopCategories` — 2-up grid, `group-hover` `#ff084e` wash |
| `.new_arrivals_area` | tabs + 6 products + promo tile | `NewArrivals` — filter state, card grid, empty state |
| `.offer_area` | 700px background band | `OfferSection` — `bg-cover` band + single CTA |
| `.karl-testimonials-area` | quote cards | `Testimonials` — avatar + quote + name/role |
| `.footer_area` | links + newsletter + credit | `Footer` — link columns, newsletter form, Component Dock line |

## Placeholder images

`https://picsum.photos/seed/vignette-hero-<1..3>/1600/1000`,
`https://picsum.photos/seed/vignette-cat-<1..2>/900/700`,
`https://picsum.photos/seed/vignette-product-<1..6>/600/750`,
`https://picsum.photos/seed/vignette-offer/1600/900`,
`https://picsum.photos/seed/vignette-avatar-<n>/96/96`. Open Sans comes from Google
Fonts via `<link>`; no ColorLib asset is copied.

## App deltas (as shipped in `apps/vignette/`)

- The app's `--color-brand` is `#ff084e` — the sheet's **hover** accent — while the
  sheet's dominant chromatic (and the middle discount cell / filled `.karl-btn`) is
  `#d6003a` (spec table row 1). Painting `#ff084e` as the primary brand is an
  app-side choice, not a prep error; `#ff084e` is still a measured reference value.
- Promo codes ship as “USE CODE: Vignette” instead of `KARL20` / `STUDENT20`
  (brand rename).
- The quick-view modal, cart drawer contents and the hero's 92px headline are
  simplified; the section order matches the source.
- `App` also carries a class-based dark mode toggle, which the source does not have.
