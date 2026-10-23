# Template: Threadline (Men's Fashion E-Commerce)

## Purpose

A Men's Fashion E-Commerce template with header with navigation, hero banner, category banners, product tabs and hot deal countdown sections. Threadline is a single-page men's fashion e-commerce template — a React recreation of the ColorLib free "Malefashion" template (preview: https://preview.colorlib.com/theme/malefashion/ — fashion/e-commerce landing), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand red `#e53e3e` (CTAs, sale badges, accents), dark `#1a1a1a` header/footer,
  light gray `#f5f5f5` section backgrounds
- Typeface: Nunito Sans (Google Fonts via `<link>`)
- Uppercase nav links, red pill buttons, product cards with hover effects
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Threadline lives in `apps/threadline` and uses shared components from `packages/ui`
(Button, cn).

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/malefashion/` | HTTP 200 · 56,662 B · title `Male Fashion | Men's Clothing, Shoes and Accessories` |
| stylesheet | `https://preview.colorlib.com/theme/malefashion/css/bootstrap.min.css?v=3.0.0` | HTTP 200 · 120,349 B · sha256 `2f6a7a13620d` · framework build |
| stylesheet | `https://preview.colorlib.com/theme/malefashion/vendor/swiper/14.3.0/swiper-bundle.min.css?v=3.0.0` | HTTP 200 · 14,615 B · sha256 `f4760c4ff94a` · framework build |
| stylesheet | `https://preview.colorlib.com/theme/malefashion/css/style.min.css?v=3.0.0` | HTTP 200 · 74,332 B · sha256 `539be22ccba7` |
| stylesheet | `https://preview.colorlib.com/theme/malefashion/vendor/fontawesome/7.3.1/css/fontawesome.subset.css?v=3.0.0` | HTTP 200 · 1,782 B · sha256 `9b9a1073bae7` · framework build |
| … | (1 further sheet(s) linked, all fetched) | — |

**Live palette** (hex × occurrences across the sheets): `#c8191a`×13,
`#e53637`×10, `#f7941d`×2, `#20315f`×2, `#f1af4d`×2, `#ed1c24`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#ff6363`, `#ff7777`.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Male Fashion** — https://colorlib.com/wp/template/malefashion/
- **Preview**: `https://preview.colorlib.com/theme/malefashion/` — HTTP 200 on 2026-10-23, **56,662 bytes**, title `Male Fashion | Men's Clothing, Shoes and Accessories`, `<meta name="generator" content="Male Fashion 3.0.0">`.
- **Stylesheet measured**: `css/style.min.css?v=3.0.0` — **74,332 bytes**, sha256 `539be22ccba7…`, over `css/bootstrap.min.css?v=3.0.0` (120,349 B) and `vendor/swiper/14.3.0/swiper-bundle.min.css` (14,615 B).
- **Measured how**: hex-literal census of the theme sheet, then the winning rule per selector. The demo is a **3.0.0 rebuild** (`?v=3.0.0` on every asset, Swiper 14, Font Awesome 7, Bootstrap 5-era markup): mismatches with the shipped app are **drift**, not prep errors.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Ink / black surfaces | `#111` | 111 | `h1–h6` · `.section-title h2` · `.site-btn` · `.header__top` band · dropdown · `.footer` · product labels |
| Pure black | `#000` | 5 | `.primary-btn` fill · search overlay · input focus |
| Red accent | `#e53637` | 10 | `.header__menu ul li a:after` hover rule · `.banner__item` link underline · `.instagram__text h3` · product-tab active |
| Deeper red | `#c8191a` | 13 | `.section-title span` kicker · `.hero__text h6` · countdown digits · pressed heart (`[aria-pressed=true]`) |
| Copy muted | `#666` | 25 | old price · sidebar links · placeholders · product meta |
| Copy alt | `#333` | 4 | search input, owl nav arrows, comment headings |
| Product ink | `#0d0d0d` | 13 | product titles/prices, cart totals, sidebar list heads |
| On-dark | `#fff` | — | `.header__top` links, `.site-btn` label, hero copy on photo |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `Nunito Sans, sans-serif` on `html,body` | `html,body` |
| Headings | Nunito Sans · **400** · `#111` (H1 70 px, H2 36 px) | `h1–h6` — the sheet does **not** bold headings; weight lives on `.section-title h2` (700) |
| Kicker | 14 px / 700 · uppercase · `letter-spacing: 2px` · `#c8191a` | `.section-title span` |
| Buttons | 13–14 px / 700 · uppercase · `letter-spacing: 4px` | `.primary-btn`, `.site-btn`, `.banner__item__text a` |
| Nav | 18 px / 600 · `#111` | `.header__menu ul li a` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radius | **0** on every button and band (`.primary-btn`, `.site-btn`, `.header__top`); `50%` on product-hover action dots and quantity chips |
| Top bar | `.header__top` `#111`, 10 px padding, white uppercase 13 px links + currency toggle |
| Header | white, logo row 30 px, menu 26 px, `#111` dropdown |
| Hero | full-bleed photo slide (Swiper/owl), white 70 px display line, 4 px-tracked uppercase CTA |
| Footer | `#111`, 70 px top padding |

Section order measured in the reference DOM: `.header` (`#111` top bar: Sign in, FAQs, currency, cart) → hero slider → `.banner__item` category banners (3) → product tabs (New / Featured / Sale) → hot-deal countdown → Instagram strip → blog posts → `.footer` `#111` with newsletter.

**Deltas vs the shipped app** (drift is not a prep error — the app is already on main):
- The app ships an **invented red ramp** (`--color-brand-50 … -900`, centred on `#e53e3e`). The reference has exactly two reds with fixed roles: `#e53637` (hover underline / instagram heading) and `#c8191a` (kicker + pressed state) — neither is `#e53e3e`.
- The app's surfaces `#1a1a1a` / `#111111` are close to the reference's single `#111`; the reference uses `#111` for **all** dark surfaces (no ladder).
- Heading weight: the reference leaves `h1–h6` at **400** and bolds only `.section-title h2`; the app's bold-everything treatment is drift.

## Requirements

### Requirement: Header with navigation

The system SHALL render a header with a top bar (sign-in link, FAQs link, free shipping message), a main navigation bar with the "Threadline" logo, navigation links (Home, Shop, Pages, About, Contacts), search icon, and cart icon with item count.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the "Threadline" logo linking to `/`
- **AND** it SHALL show links to Home, Shop, About, and Contacts
- **AND** it SHALL show a search button and cart link with count badge

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation menu SHALL open
- **AND** tapping a navigation link SHALL close the menu

### Requirement: Hero banner

The system SHALL render a full-width hero section with a background image, overlay text including "Summer Collection" label, a heading "Fall - Winter Collections 2030", descriptive text, and a "Shop now" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display the "Summer Collection" label
- **AND** it SHALL display the heading "Fall - Winter Collections 2030"
- **AND** it SHALL display a "Shop now" button

### Requirement: Category banners

The system SHALL render a 3-column grid of category banners: "Clothing Collections 2030", "Accessories", and "Shoes Spring 2030", each with a background image and "Shop now" link.

#### Scenario: Category display

- **GIVEN** the page is rendered
- **WHEN** the category section is visible
- **THEN** it SHALL show three category cards
- **AND** each card SHALL have a "Shop now" link

### Requirement: Product tabs

The system SHALL render a tabbed product section with "Best Sellers", "New Arrivals", and "Hot Sales" tabs. Each tab shows a 4-column grid of product cards with image, name, price, compare button, and "Add To Cart" button. Sale items show a "Sale" badge; new items show a "New" badge.

#### Scenario: Tab switching

- **GIVEN** the page is rendered
- **WHEN** the "Best Sellers" tab is active
- **THEN** it SHALL display best seller products
- **WHEN** the user clicks "New Arrivals"
- **THEN** it SHALL display new arrival products
- **WHEN** the user clicks "Hot Sales"
- **THEN** it SHALL display sale products

#### Scenario: Product card content

- **GIVEN** a product card is rendered
- **THEN** it SHALL show the product name and price
- **AND** it SHALL have an "Add To Cart" button
- **AND** it SHALL have a compare button

### Requirement: Hot deal countdown

The system SHALL render a dark-background "Deal of the Week" section with category list (Clothings Hot, Shoe Collection, Accessories), sale price "$29.99", a countdown timer (Days, Hours, Minutes, Seconds), and a "Shop now" button.

#### Scenario: Countdown timer

- **GIVEN** the hot deal section is visible
- **THEN** the countdown timer SHALL display Days, Hours, Minutes, and Seconds
- **AND** the timer SHALL decrement every second
- **AND** when all values reach zero, the timer SHALL stop (not go negative)

### Requirement: Instagram feed

The system SHALL render a 6-column Instagram image grid with centered "#Threadline" hashtag overlay and descriptive text.

#### Scenario: Instagram posts

- **GIVEN** the page is rendered
- **WHEN** the Instagram section is visible
- **THEN** it SHALL show 6 Instagram post images
- **AND** it SHALL display the "#Threadline" hashtag

### Requirement: Blog posts

The system SHALL render a 3-column blog section with "Latest News" heading, showing 3 blog cards each with image, date, title, and "Read More" link.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL display 3 blog post cards
- **AND** each card SHALL have a date, title, and "Read More" link

### Requirement: Footer with newsletter

The system SHALL render a dark footer with 4 columns: About (logo + description), Shopping links, Contact links, and Newsletter signup form with email input and submit button. The footer copyright SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL show Shopping links (Clothing Store, Trending Shoes, Accessories, Sale)
- **AND** it SHALL show Contact links (Contact Us, Payment Methods, Delivery, Return & Exchanges)

#### Scenario: Component Dock link

- **GIVEN** the footer is visible
- **WHEN** the user looks at the copyright line
- **THEN** it SHALL contain a link to https://www.componentdock.com/
- **AND** the link text SHALL be "Component Dock"

#### Scenario: Newsletter form

- **GIVEN** the newsletter section is visible
- **THEN** it SHALL show an email input field
- **AND** it SHALL show a subscribe button

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/threadline/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/threadline/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Header with navigation — it SHALL show the "Threadline" logo linking to `/
- [x] Hero banner — it SHALL display the "Summer Collection" label
- [ ] Category banners — it SHALL show three category cards
- [ ] Product tabs — it SHALL display best seller products
- [ ] Hot deal countdown — the countdown timer SHALL display Days, Hours, Minutes, and Seconds
- [ ] Instagram feed — it SHALL show 6 Instagram post images
- [ ] Blog posts — it SHALL display 3 blog post cards
