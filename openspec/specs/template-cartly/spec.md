# Template: Cartly

Recreation of ColorLib "Eiser" (https://colorlib.com/wp/template/eiser/).

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

## Scenarios

- [x] All sections render with correct headings
- [x] Navigation toggles mobile menu
- [x] Product cards render with images and prices
- [x] Newsletter form accepts email input
- [x] Footer links to componentdock.com
- [x] 100% test coverage (statements, branches, functions, lines)

## Fidelity Notes

- Original uses Bootstrap grid → recreated with Tailwind grid
- Original uses owl-carousel for latest products → simplified to static grid
- Original uses jQuery for interactions → pure React state
- All images use picsum.photos seeded placeholders
- Icons from lucide-react (replacing flaticon/themify originals)
- Social icons as inline SVGs (brand icons removed from lucide-react)
