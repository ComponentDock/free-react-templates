# Launchpad — Recreation of ColorLib Startup

## Metadata

- **Name:** Launchpad
- **ColorLib Original:** Startup (https://colorlib.com/wp/template/startup/)
- **Preview URL:** https://preview.colorlib.com/theme/startup/
- **Category:** SaaS / Startup Landing

## Design Tokens (extracted from preview)

- **Brand color:** #df003a (red)
- **Accent teal:** #4cd3e3
- **Accent blue:** #38a4ff
- **Font family:** Poppins (Google Fonts)
- **Body text:** #777777
- **Headings:** #222222
- **Section backgrounds:** alternating white (#fff) and surface (#f9f9ff)
- **CTA button:** brand red background, white text, rounded
- **Dark sections:** dark gray overlay on brand color for CTA; dark footer

## Section Structure (in order)

1. **Navbar** — Logo + nav links (Home, We Offer, About, Project, Price) + Get Started CTA
2. **Hero/Banner** — Full-height gradient background, heading "All you want is here", subtitle, two CTA buttons
3. **Services (We Offer)** — 2x2 grid of icon + title + description cards (4 items)
4. **About Video** — Split layout: text left, video thumbnail with play button right
5. **About Support** — Split layout reversed: image left, text right on dark background
6. **Portfolio** — 3-column masonry-style grid of 6 project images with hover expand overlay
7. **Call to Action** — Full-width brand red section with heading, description, and CTA button
8. **Pricing** — 3 pricing cards (Standard, Business, Ultimate) with features list and purchase button
9. **Testimonials** — 3-column grid of client testimonial cards with avatar, quote, star rating
10. **Blog** — 2-column grid of blog post cards with image, tags, title, excerpt, date
11. **Footer** — 3-column: Top Products links, Newsletter form, Latest Updates images; bottom bar with Component Dock link + social icons

## Scenarios

- GHERKIN: App renders with correct title
- GHERKIN: All sections are present in the main landmark
- GHERKIN: Navbar toggles mobile menu
- GHERKIN: Footer links to Component Dock
- GHERKIN: Pricing shows three plans with correct names and prices
