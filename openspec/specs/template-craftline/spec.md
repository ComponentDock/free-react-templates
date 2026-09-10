# Template: Craftline (Creative Portfolio / Agency)

## Purpose

Recreation of ColorLib "Breed2" — a personal creative portfolio/agency website template.

- **Source:** https://colorlib.com/wp/template/breed2/
- **Source slug:** breed2
- **Preview:** https://preview.colorlib.com/theme/breed2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/breed2-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| Font family | `"Roboto", sans-serif` | Weights: 300, 400, 500, 700. Load via Google Fonts |
| Heading color | `#05364d` | Dark teal-navy, used for all h1–h5 |
| Body text color | `#797979` | Muted gray |
| Primary gradient | `linear-gradient(to right, #1345e6 0%, #ed239f 51%, #1345e6 100%)` | Blue → pink → blue, used on CTA buttons |
| Hover gradient | `linear-gradient(90deg, #1345e6 0%, #ed239f 100%)` | Blue to pink, used on nav hover, social icon hover |
| Button border-radius | `5px` | Applied on `.primary_btn` |
| Section card bg | `#f8faff` | Light blue-gray, used on statistics items, service items, blog cards |
| Service hover bg | `#5f30ff` | Purple, appears on service card hover |
| Nav active/hover | `#efb6df` | Light pink |
| Star rating | `#ffd804` | Gold |
| Footer bg | `#021017` | Very dark navy-black |
| Footer link | `#a932c7` | Purple |
| Section title accent | `rgba(237,35,159,0.6)` | Pink blur underline on top_text spans |
| Banner bg | Background image (home-right.png) | Split hero layout with illustration on right |

## Section structure (order)

1. **Navbar** — transparent over banner, fixed on scroll with white bg + shadow. Logo left, nav links center-right (Home, About, Portfolio, Pages dropdown, Blog dropdown, Contact). CTA button "Get Started" hidden on mobile.

2. **Hero / Home Banner** — split layout. Left: greeting "Hey There!", name heading "I am [Name]", subtitle "Creative art director & designer", 5 social icon links (Twitter, Skype, Instagram, Dribbble, Vimeo), CTA "See My Work". Right: decorative illustration/image. Background: full-width image.

3. **Statistics** — 3-column counter row, overlapping the hero (negative margin). Light blue-gray bg (`#f8faff`). Gradient text for numbers. Items: Happy Customer (15k+), Ticket Solved (12k+), Average Rating (9/10).

4. **About** — two-column layout. Left: about illustration/image. Right: section title "About me" with pink blur underline, heading "Creative Art Director And Designer", body paragraph, CTA "Download CV".

5. **Services** — three-column cards on white bg. Each card: icon/image, title (Web Development, UX/UI Design, WP Developing), description paragraph, "Learn More" link. Cards have `#f8faff` bg; on hover the entire card turns purple (`#5f30ff`) with white text.

6. **Testimonials** — carousel/slider with section title "Our Testimonial", heading "Honourable Client Says About Me". Each slide: two-column — left image, right: client name, role/company, testimonial text, 5-star rating (4 filled gold, 1 gray). Background decorative shape behind carousel.

7. **Portfolio** — filterable grid with section title "Our Portfolio", heading "Check Our Recent Client Work". Filter tabs: all, popular, latest, following, upcoming. 6 portfolio items in a mixed grid (2-col + 3-col + 3-col + 2-col + 2-col). On hover: blue overlay with project title and category.

8. **Blog** — three-column cards with section title "Our blog", heading "Latest Story From Our Blog". Each card: thumbnail image, meta info (author + date), title, excerpt, "Learn More" link. Cards have `#f8faff` bg; hover adds shadow.

9. **Brands** — logo carousel (owl-carousel). Row of client/partner logos.

10. **Footer** — dark bg (`#021017`). Centered: logo, nav links (Home, About, Portfolio, Blog, Services), social icons (Facebook, Twitter, Skype, Pinterest) in circular white buttons with gradient hover. Copyright line with heart icon.

## Gherkin requirements

```gherkin
Feature: Craftline — Creative Portfolio Template

  Background:
    Given the user visits the Craftline homepage
    Then all sections render without errors

  Scenario: Navbar behavior
    Given the navbar is visible at the top
    When the user scrolls down past the hero
    Then the navbar becomes fixed with a white background and shadow
    And the logo and nav links remain clickable
    When the user clicks "Home"
    Then the page scrolls to the hero section

  Scenario: Hero section content
    Given the hero section is visible
    Then a greeting "Hey There!" is displayed
    And a name heading is displayed
    And a subtitle "Creative art director & designer" is shown
    And 5 social icon links are rendered
    And a "See My Work" CTA button is present
    When the user clicks "See My Work"
    Then the page scrolls to the portfolio section

  Scenario: Statistics counters
    Given the statistics section is visible
    Then 3 statistic items are displayed
    And each item shows a number with "k+" or "/10" suffix
    And each item has a label below the number

  Scenario: About section
    Given the about section is visible
    Then a section title "About me" is shown with a pink accent underline
    And a heading "Creative Art Director And Designer" is displayed
    And a body paragraph is shown
    And a "Download CV" CTA button is present

  Scenario: Services section
    Given the services section is visible
    Then 3 service cards are displayed
    And each card shows an icon, title, and description
    And each card has a "Learn More" link
    When the user hovers over a service card
    Then the card background changes to purple and text becomes white

  Scenario: Testimonials carousel
    Given the testimonials section is visible
    Then a carousel of testimonial slides is rendered
    And each slide shows a client image, name, role, testimonial text, and star rating
    And the carousel auto-rotates through slides

  Scenario: Portfolio grid with filters
    Given the portfolio section is visible
    Then filter tabs are shown: all, popular, latest, following, upcoming
    And 6 portfolio items are displayed in a grid
    When the user clicks a filter tab
    Then only matching portfolio items are shown
    When the user hovers over a portfolio item
    Then a blue overlay appears with the project title and category

  Scenario: Blog section
    Given the blog section is visible
    Then 3 blog cards are displayed
    And each card shows an image, meta info, title, excerpt, and "Learn More" link

  Scenario: Brands carousel
    Given the brands section is visible
    Then a carousel of brand logos is rendered

  Scenario: Footer
    Given the footer is visible
    Then a dark background is displayed
    And a logo, nav links, social icons, and copyright line are shown
    And the footer links to Component Dock
```

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Navbar: transparent → fixed white on scroll
- [ ] Hero: split layout, social icons, CTA button
- [ ] Statistics: 3 items with gradient-colored numbers
- [ ] About: two-column, pink accent title, Download CV button
- [ ] Services: 3 cards, purple hover effect
- [ ] Testimonials: carousel with star ratings
- [ ] Portfolio: filterable grid with hover overlays
- [ ] Blog: 3 cards with meta, title, excerpt
- [ ] Brands: logo carousel
- [ ] Footer: dark bg, Component Dock link, social icons
- [ ] Responsive: mobile-friendly at all breakpoints
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME set to craftline.free.componentdock.com
- [ ] Fonts loaded via Google Fonts (Roboto)
- [ ] Images use picsum.photos placeholders
- [ ] Icons from lucide-react
