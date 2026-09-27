# Spec: Residium (ColorLib Hus)

## Source

- **ColorLib template:** Hus
- **Preview URL:** https://preview.colorlib.com/theme/hus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hus-free-template.jpg
- **New name:** Residium

## Design tokens (extracted from preview CSS)

| Token             | Value     | Usage                          |
| ----------------- | --------- | ------------------------------ |
| Brand red         | `#ff2424` | Primary accent, CTA buttons    |
| Brand orange      | `#ff5e13` | Secondary accent, hover states |
| Dark navy         | `#415094` | Header, dark sections          |
| Light lavender bg | `#f0e9ff` | Section backgrounds            |
| Off-white bg      | `#f9f9ff` | Body background                |
| Heading font      | Oswald    | All headings                   |
| Body font         | Roboto    | Paragraphs, body text          |
| Overlay opacity   | 0.41      | Hero slider overlay            |

## Sections (in order)

1. **Navbar** — Logo left, nav links center (Home, About, Pages dropdown, Blog dropdown, Contact), Login + Phone right
2. **Hero slider** — Full-width image slider with dark overlay (opacity 0.41), heading "We Create your dream apartment", subtext, "View Project" CTA button (red outlined)
3. **About** — Left: experience badge circle ("10 Years of Experience"), Right: "We are Residium / Real Estate Company" heading, divider, bullet list, stats (120 Buildings, 500+ Clients)
4. **Facilities** — 3-column grid: Planning Stage, Hotel Planning, Support Center (icons, titles, descriptions, "Learn more" links)
5. **Property Certificates** — Heading left, 3 certificate logo images right
6. **Apartments carousel** — Horizontal scroll of apartment cards: image, price badge, title, specs (BD/BA/SF)
7. **Testimonials** — Carousel with author photo, name, role, quote text
8. **CTA / Quotation** — "Get a free quotation Today!" left, phone number right with phone icon, "Contact Us" button
9. **Latest News** — 2-column news cards: image top, date badge left, category, title, "Read more" link
10. **Footer** — 4 columns: About Us, Contact Info, Important Links, Newsletter form; copyright + social icons bottom

## Component list

- `Navbar.tsx` — responsive nav with mobile menu
- `HeroSlider.tsx` — image carousel with overlay
- `About.tsx` — experience badge + company info + stats
- `Facilities.tsx` — 3-column feature cards
- `Certificates.tsx` — property certificates row
- `Apartments.tsx` — apartment listing carousel
- `Testimonials.tsx` — testimonial carousel
- `CTA.tsx` — quotation call-to-action
- `LatestNews.tsx` — news carousel
- `Footer.tsx` — 4-column footer + copyright

## Test scenarios (Gherkin)

### Navbar

- Given the page loads, When I view the header, Then the logo "Residium" is visible
- Given the page loads, When I view the nav, Then links for Home, About, Pages, Blog, Contact are present
- Given the viewport is mobile, When I click the hamburger, Then the mobile menu opens

### HeroSlider

- Given the page loads, When I view the hero, Then the heading "We Create your dream apartment" is visible
- Given the page loads, When I view the hero, Then a "View Project" button is visible

### About

- Given the page loads, When I view the about section, Then "10 Years of Experience" badge is visible
- Given the page loads, When I view the about section, Then stats "120 Buildings" and "500+ Clients" are visible

### Facilities

- Given the page loads, When I view facilities, Then 3 facility cards are rendered
- Given the page loads, When I view facilities, Then each card has a "Learn more" link

### Apartments

- Given the page loads, When I view apartments, Then at least 3 apartment cards are rendered
- Given the page loads, When I view apartments, Then each card shows a price, title, and specs (BD/BA/SF)

### Testimonials

- Given the page loads, When I view testimonials, Then at least 1 testimonial is visible
- Given the page loads, When I view testimonials, Then author name and quote are displayed

### CTA

- Given the page loads, When I view the CTA, Then "Get a free quotation Today!" is visible
- Given the page loads, When I view the CTA, Then a "Contact Us" button is present

### LatestNews

- Given the page loads, When I view news, Then at least 2 news cards are rendered
- Given the page loads, When I view news, Then each card has a "Read more" link

### Footer

- Given the page loads, When I view the footer, Then "Component Dock" link to componentdock.com is present
- Given the page loads, When I view the footer, Then newsletter input and submit button are visible
