# Template: Dwellpoint (Real Estate / Property)

## Purpose

Recreation of ColorLib SEL — a real estate multi-property website template with a hero banner, advanced property search, welcome section, property cards, testimonials carousel, cities showcase, features grid, client logos, and dark footer with newsletter and social links.

- **Source:** https://colorlib.com/wp/template/sel/
- **Preview:** https://preview.colorlib.com/theme/sel/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Source mapping

| Field         | Value                                                                     |
| ------------- | ------------------------------------------------------------------------- |
| ColorLib slug | `sel`                                                                     |
| Preview URL   | `https://preview.colorlib.com/theme/sel/`                                 |
| Screenshot    | `https://colorlib.com/wp/wp-content/uploads/sites/2/sel-free-template.jpg` |

## Design tokens (extracted from preview CSS)

### Fonts

- **Body/UI:** `"Roboto", sans-serif` — weight 400, 500, 700
- **Headings:** `"Roboto", sans-serif` — weight 700 (no separate heading font)
- **Buttons:** `"Roboto", sans-serif` — weight 400, uppercase

### Colors

| Token              | Value     | Usage                                                 |
| ------------------ | --------- | ----------------------------------------------------- |
| Brand / Accent     | `#f5204b` | Primary buttons, active nav items, hover states       |
| Body background    | `#ffffff` | Page background, header background                    |
| Section alternate  | `#f9f9ff` | Alternating section backgrounds (very light blue)     |
| Footer background  | `#04091e` | Dark navy footer                                      |
| Text primary       | `#222222` | Headings, body text                                   |
| Text secondary     | `#777777` | Paragraphs, descriptions                              |
| Text muted         | `#aaaaaa` | Subtitles, small labels                               |
| Border             | `#eeeeee` | Card borders, dividers                                |
| Card background    | `#ffffff` | Property cards, testimonial items                     |

### Buttons

- **Primary (`.main_btn`):** bg `#f5204b`, color `#fff`, padding `0 50px`, font Roboto, rectangular (no border-radius), uppercase. Hover: transparent bg, `#f5204b` text.
- **Secondary (`.main_btn2`):** Same red, padding `0 32px`. Used on city card overlays, positioned absolutely centered.
- **Form submit (`.submit_btn`):** Red button with search form.

### Section layout patterns

- Hero banner: full-width background image, centered headline + subtitle + CTA
- Search bar: overlaid below hero, white card with dropdowns + range sliders + submit
- Welcome: 2-column (image left, text + stats right)
- Properties: 3-column card grid
- Testimonials: left text block (col-4) + right carousel (col-8)
- Cities: 4-column image grid with overlaid buttons
- Features: 3x2 icon grid
- Client logos: horizontal carousel
- Footer: 4-column with newsletter + Instagram feed

## Section order (from preview DOM)

1. **Header** — sticky navbar: logo, nav links (Home, About, Properties, Team, Pages dropdown, Blog dropdown, Contact), search icon
2. **Hero Banner** — background image, subtitle "The joy of home owning", headline "Find Your New Home", CTA button
3. **Advanced Search** — white card overlay: 4 select dropdowns (Locations, Property Type, Bedrooms, Bathrooms), 2 range sliders (Price Range, Property Area), search button
4. **Welcome** — 2-column: left image, right text ("Welcome to SEL Center") + 3 stat boxes (Total Donation $2.5M, Total Projects 1465, Total Volunteers 3965) with icons
5. **Properties** — "Our Top Rated Properties" heading, 3 property cards: image, title, tag pills (beds, baths, sqm, pool, bar), price + "For Sale" button
6. **Testimonials** — "Client's Feedback" left text, right carousel: avatar, quote, name, role
7. **Cities** — "Demandable Cities" heading, 4 city image cards with centered "Book Now" button overlay
8. **Features** — "Why we are the best" heading, 6 items: icon + title + description (Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews)
9. **Client Logos** — "Reliable Customers" heading, horizontal logo carousel
10. **Footer** — 4 columns (About Us, Newsletter, Instagram Feed, Follow Us) + copyright bar with social icons

## Gherkin requirements

### Feature: Dwellpoint — Real Estate Property Website

  Scenario: Page renders with correct structure
    Given a user loads the Dwellpoint homepage
    Then they see a header with logo and navigation
    And a hero banner with background image
    And a property search form
    And a welcome section
    And a properties grid
    And a testimonials section
    And a cities showcase
    And a features grid
    And a client logos section
    And a footer

  Scenario: Header navigation
    Given the page loads
    Then the header contains links: Home, About, Properties, Team, Contact
    And the header contains dropdown menus for Pages and Blog
    And the header contains a search icon
    And the header is sticky on scroll

  Scenario: Hero banner
    Given the page loads
    Then the hero shows subtitle "The joy of home owning"
    And the hero shows headline "Find Your New Home"
    And the hero has a "Learn More" CTA button

  Scenario: Advanced search form
    Given the page loads
    Then the search form shows 4 dropdown selects: Locations, Property Type, Bedrooms, Bathrooms
    And the search form shows 2 range sliders: Price Range and Property Area
    And the search form has a "Search Property" submit button

  Scenario: Welcome section
    Given the page loads
    Then the welcome section shows a 2-column layout
    And the left column shows a welcome image
    And the right column shows a welcome heading and description
    And 3 stat boxes display: Total Donation, Total Projects, Total Volunteers

  Scenario: Properties grid
    Given the page loads
    Then 3 property cards are displayed in a row
    And each card shows an image, title, tag pills, price, and "For Sale" button
    And tag pills show bed count, bath count, sqm, and amenity availability

  Scenario: Testimonials carousel
    Given the page loads
    Then the testimonials section shows a left text block with "Client's Feedback"
    And a right-side carousel displays testimonial items
    And each testimonial shows an avatar, quote, name, and role

  Scenario: Cities showcase
    Given the page loads
    Then 4 city image cards are displayed in a row
    And each card has a centered "Book Now" button overlay

  Scenario: Features grid
    Given the page loads
    Then 6 feature items are displayed in a 3-column x 2-row grid
    And each feature has an icon, title, and description

  Scenario: Client logos carousel
    Given the page loads
    Then a horizontal client logo carousel is displayed

  Scenario: Footer
    Given the page loads
    Then the footer has 4 columns: About Us, Newsletter, Instagram Feed, Follow Us
    And the newsletter column has an email input and subscribe button
    And the Instagram feed shows 8 thumbnail images
    And the footer bottom shows copyright text
    And the footer links to https://www.componentdock.com/ as "Component Dock"

  Scenario: Design tokens
    Given the page loads
    Then brand accent color is #f5204b (crimson red)
    And body font is Roboto sans-serif
    And buttons use brand color background with white text
    And section backgrounds alternate between white and #f9f9ff
    And the footer background is #04091e (dark navy)

## Verification checklist

- [ ] Header: logo + nav links + search icon + sticky behavior
- [ ] Hero: background image, subtitle, headline, CTA button
- [ ] Search form: 4 dropdowns, 2 range sliders, submit button
- [ ] Welcome: 2-column layout, image, heading, description, 3 stat boxes
- [ ] Properties: 3 cards, image, title, tag pills, price, "For Sale" button
- [ ] Testimonials: left text + right carousel with avatar, quote, name, role
- [ ] Cities: 4 image cards with centered button overlay
- [ ] Features: 3x2 grid with icon, title, description
- [ ] Client logos: horizontal carousel
- [ ] Footer: 4 columns, newsletter, Instagram feed, social icons, copyright
- [ ] Footer: links to Component Dock
- [ ] Brand color #f5204b used consistently (buttons, active states)
- [ ] Roboto font applied throughout
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] lucide-react icons replacing themify/linericon icons
