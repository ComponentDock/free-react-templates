# Spec: Propwell — Real Estate Landing Page

Recreation of ColorLib [Leramiz](https://colorlib.com/wp/template/leramiz/).

## Design tokens (from CSS analysis)

| Token       | Value           | Usage                        |
| ----------- | --------------- | ---------------------------- |
| Brand teal  | `#30caa0`       | Buttons, accents, price text |
| Dark text   | `#252525`       | Headings, body               |
| Gray text   | `#707070`       | Secondary text               |
| Dark bg     | `#324a4e`       | Services, footer backgrounds |
| Font family | Source Sans Pro | Body and headings            |

## Sections (in page order)

1. **Header** — Top bar (phone, email, social icons, register/login links) + sticky navbar (logo, nav links: Home, Featured Listing, About Us, Pages, Blog, Contact).
2. **Hero** — Full-width background image with headline "Find your place with our local life style", description, and CTA button "VIEW DETAIL".
3. **Filter Bar** — Search form with text input, city dropdown, state dropdown, SEARCH button. Overlaps hero section bottom.
4. **Recent Properties** — 2x2 grid of property cards with background image, sale/rent badge, address, location, price.
5. **Services** — Split layout: left image, right list of 3 services (Consultant Service, Properties Management, Renting and Selling) with icons and descriptions. Dark background.
6. **Featured Listings** — 3-column grid of detailed property cards with image, badge, address, room info (sqft, bedrooms, garages, bathrooms), agent name, time posted, price.
7. **Looking Property** — 4-column grid of category images (Apartment, Family Home, Resort Villas, Office Building) with titles.
8. **Popular Places** — Masonry-style gallery of location cards (New York, Florida, San Jose, St Louis) with property counts.
9. **Reviews** — Carousel of testimonial cards with star ratings, quote, author name, title, and circular avatar. Dark parallax background.
10. **Latest News** — 3-column blog cards with image, title, author/date meta, excerpt.
11. **Partners** — Logo carousel strip.
12. **Footer** — 4-column: logo + description + social icons, contact info, popular places links, newsletter signup. Bottom bar with nav links and copyright ("Made with Component Dock").
