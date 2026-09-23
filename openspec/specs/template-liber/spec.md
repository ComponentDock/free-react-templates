# Liber — Author Book Landing Template

Recreation of ColorLib "Book" (https://colorlib.com/wp/template/book/).
Preview: https://preview.colorlib.com/theme/book/

## Design Tokens (from css/main.css)

- Primary brand: #f53f51 (coral red)
- Font: Poppins, sans-serif
- Text dark: #222222
- Text muted: #777777
- Section backgrounds: #f9f9ff (light lavender), #fff (white)
- Secondary accents: #4cd3e3 (teal), #38a4ff (blue)
- Button border-radius: 3px (primary), 20px (pill)

## Sections (in order)

1. **Navbar** — sticky, dark bg (#222), logo "Liber", links: Home, About, Features, Pricing, Courses. Mobile hamburger toggle.
2. **Hero/Banner** — dark bg, left: author label "Author: Travor James", headline "New Adventure", description, "Buy Now for $9.99" CTA. Right: book cover image.
3. **About** — white bg, 2-col: image left, author bio right ("Dr. Travor James"), signature SVG.
4. **Features** — dark bg, "Some Features that Made us Unique", 4 feature cards with icons.
5. **Counters** — light bg, 4 stats: Happy Clients, Total Projects, Cups of Coffee, Tickets Submitted.
6. **Pricing** — white bg, "Purchase Whatever You Want", 3 tiers: PDF ($79.99), E-Book ($99.99, featured), Print Copy ($59.99).
7. **Courses** — light bg, "Top Courses That Are Open for Students", 3 course cards with images and prices.
8. **App Download** — dark bg, "Download Our App for All Platforms", App Store + Play Store links.
9. **Testimonials** — white bg, "What Our Readers Say About Us", 3 testimonial cards.
10. **Footer** — dark bg, 3-col: About + social links, Quick Links, Newsletter form. Bottom: copyright + Component Dock link.

## Gherkin Scenarios

### Navbar

- Given the page loads, When I look at the header, Then I see "Liber" logo and navigation links.
- Given I am on mobile, When I click the menu button, Then the mobile navigation appears.
- Given the mobile menu is open, When I click a link, Then the menu closes.

### Hero

- Given the page loads, When I look at the hero section, Then I see "Author: Travor James", "New Adventure", and a "Buy Now" button.

### About

- Given the page loads, When I look at the about section, Then I see the author name, bio text, and portrait image.

### Features

- Given the page loads, When I look at the features section, Then I see 4 feature cards with icons.

### Counters

- Given the page loads, When I look at the counters section, Then I see 4 stat values and labels.

### Pricing

- Given the page loads, When I look at the pricing section, Then I see 3 pricing tiers with prices and purchase buttons.

### Courses

- Given the page loads, When I look at the courses section, Then I see 3 course cards with titles, prices, and view buttons.

### App Download

- Given the page loads, When I look at the CTA section, Then I see App Store and Play Store download links.

### Testimonials

- Given the page loads, When I look at the testimonials section, Then I see 3 testimonial cards with names and quotes.

### Footer

- Given the page loads, When I look at the footer, Then I see Quick Links, Newsletter form, and a Component Dock link.
- Given I enter an invalid email, When I click Subscribe, Then I see a validation error.
- Given I enter a valid email, When I click Subscribe, Then I see a thank-you message.
