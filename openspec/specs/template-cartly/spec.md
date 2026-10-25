# Template: Cartly (Business)

Recreation of ColorLib "Eiser" (https://colorlib.com/wp/template/eiser/).

## Purpose

Cartly is an ecommerce landing page with a top bar, hero banner, featured and new product grids, an offer banner and a newsletter band. It recreates the ColorLib **Eiser** design (https://colorlib.com/wp/template/eiser/, preview: https://preview.colorlib.com/theme/eiser/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

Ecommerce landing page with a green (#71cd14) brand accent, Heebo/Roboto typefaces,
and a dark footer. Sections include: top bar, navbar, hero banner, feature icons,
featured products, offer banner, new products, blog, newsletter, and footer.

## Design Tokens

| Token          | Value         | Notes                                        |
| -------------- | ------------- | -------------------------------------------- |
| Brand color    | #71cd14       | Green — used for CTAs, hover states, accents |
| Heading font   | Heebo         | Google Fonts, weights 300-700                |
| Body font      | Roboto        | Google Fonts, weights 300-700                |
| Body text      | #797979       | Neutral gray                                 |
| Heading text   | #2a2a2a       | Near-black                                   |
| Secondary text | #4a4a4a       | Medium gray                                  |
| Light bg       | #f6f6f6       | Section alternating bg                       |
| Footer bg      | #0d0d1f       | Very dark navy                               |
| Button radius  | rounded-lg    | 0.5rem                                       |
| Product hover  | green overlay | 60% opacity lime background                  |
| Surface (measured) | `#f8b600` | paints it ×19 — `background` on `.genric-btn.primary`; style.css (66,694 B, sha256 747e8b83fc95) · <https://preview.colorlib.com/theme/eiser/> |


<!-- heading-role-tokens: eiser/ink/template-cartly -->
**Heading-ink role (measured 2026-10-25):** the `heading text` row states `#2a2a2a`, the FIRST colour declared in that declaration block (`h1,h2,h3,h4,h5,h6`); a later `color` in the same block wins, and the rendered headings paint rgb(74, 74, 74) x17, rgb(42, 42, 42) x14, rgb(255, 255, 255) x7.
<!-- /heading-role-tokens -->

## Sections (in order)

1. **TopBar** — phone + email on left, gift card/track order/contact links on right
2. **Navbar** — sticky, brand "Cartly", nav links (Home/Shop/Blog/Contact), icon links (Search/Cart/Account/Wishlist), mobile hamburger
3. **Hero** — full-width background image, "Show Your Personal Style" headline with green accent, CTA button
4. **Features** — 4-column grid: Money Back Guarantee, Free Delivery, Always Support, Secure Payment
5. **FeaturedProducts** — 3-column product cards with hover icon overlay
6. **OfferBanner** — "50% Off" centered CTA banner
7. **NewProducts** — split layout: large featured product left, 2x2 small products right
8. **BlogSection** — 3-column blog cards with image, date/author, title, excerpt
9. **Newsletter** — subscribe form with email input + send button
10. **Footer** — 4 columns (About, Useful Links, Products, Follow Us), social icons, copyright with Component Dock link

## Requirements

### Feature: Cartly template behaviour

#### Scenario: Cartly

- [x] All sections render with correct headings
- [x] Navigation toggles mobile menu
- [x] Product cards render with images and prices
- [x] Newsletter form accepts email input
- [x] Footer links to componentdock.com
- [x] 100% test coverage (statements, branches, functions, lines)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/cartly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/cartly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Fidelity Notes

- Original uses Bootstrap grid → recreated with Tailwind grid
- Original uses owl-carousel for latest products → simplified to static grid
- Original uses jQuery for interactions → pure React state
- All images use picsum.photos seeded placeholders
- Icons from lucide-react (replacing flaticon/themify originals)
- Social icons as inline SVGs (brand icons removed from lucide-react)

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Cartly template behaviour — [x] All sections render with correct headings
