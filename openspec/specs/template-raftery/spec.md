# Template: Raftery (Roofing Company)

## Purpose

Recreation of ColorLib's **Roofing** template
(`https://colorlib.com/wp/template/roofing/`).
Preview: `https://preview.colorlib.com/theme/roofing/`.

Single-page React 19 + Vite + Tailwind 4 + TypeScript template for a roofing
services company. Dark navbar, full-height hero carousel, appointment form,
stats counter, tabbed services, project gallery, testimonials, blog cards,
pricing tiers, and a dark footer.

## Design Tokens

| Token | Value | Notes |
| --- | --- | --- |
| **Brand / primary** | `#d9ba2b` | Gold-yellow. Used for buttons, active tabs, counters, subheadings, testimonial icons, pricing highlight, footer accents |
| **Body text** | `#000000` | Headings, nav items, form text |
| **Footer background** | `#252525` | Dark charcoal |
| **Light section bg** | `#f7f7f7` | About/quote section, testimony, pricing rows |
| **White** | `#ffffff` | Cards, forms, tab content, pricing cards |
| **Button radius** | `4px` | All buttons, form inputs, tabs |
| **Font family** | `Poppins` (Google Fonts, weights 300–700) | |
| **Button style** | uppercase, 11px, letter-spacing 1px, font-weight 600, border-radius 4px | |
| **Counter section bg** | `#d9ba2b` (gold) with white text and white circular icons | |
| **Testimonial card** | white bg, 5px radius, shadow, gold quote icon circle | |
| **Subheading style** | 12px, 700 weight, #d9ba2b, uppercase, letter-spacing 2px | |

## Section Structure (top → bottom)

1. **TopBar** — logo (roof icon + "Raftery" text) left; social icons (Facebook, Twitter/X, Instagram, Dribbble) right.
2. **Navbar** — dark background, inline nav links: Home, About, Services, Project, Blog, Contact. Mobile hamburger toggle.
3. **HeroSlider** — full-height image carousel (2 slides), dark overlay, centered headline + subtext + CTA button ("Book an appointment"). Placeholder images via picsum.
4. **AboutQuoteSection** — light bg, 2-column: left = heading + body text + Mission / Vision / Value tabs (pill-style, gold active); right = "Get a Quote" card with blue (#d9ba2b) header bar and form (service select, name, email, date, time, message, submit).
5. **CounterSection** — gold (#d9ba2b) background, 4 stat blocks: 45 Years of Experience, 8500 Projects Completed, 2342 Happy Clients, 30 Business Partners. Each has white circle icon + animated number + label.
6. **ServicesSection** — centered heading "Our Best Services", 2-column: left = 6 vertical tab pills (Skylights, Waterproofing, Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing) each with description + check-list; right = side image.
7. **ProjectsGallery** — heading "Done Projects", 8 cards (2 rows × 4 cols) in a no-gutters grid. Each card: background image, hover overlay with expand icon, bottom-aligned text overlay (title + category).
8. **TestimonySection** — light bg, heading "Happy Clients & Feedbacks", carousel of 4+ testimonial cards. Each: gold quote circle icon, paragraph text, circular avatar + name + position.
9. **BlogSection** — heading "Latest news from our blog", 3 blog cards. Each: featured image, author avatar + name + date, article title.
10. **PricingSection** — light bg, heading "Pricing", 4 pricing cards: Standard $49, Basic $79 (highlighted), Standard $109, Professional $149. Each: tier name, price, 5 feature items, "Get Started" button.
11. **Footer** — dark (#252525) background, 4 columns: brand + social links, Services list, Business Hours, Contact info. Bottom copyright bar with Component Dock link.

## Gherkin Requirements

```gherkin
Feature: Raftery — Roofing company website

  Background:
    Given the app is loaded at the root URL

  Scenario: TopBar displays brand and social links
    Then the logo text "Raftery" is visible
    And social icon links for Facebook, Twitter, Instagram, and Dribbble are present

  Scenario: Navbar navigation links
    Then navigation contains "Home", "About", "Services", "Project", "Blog", "Contact"
    And the navbar is dark-themed

  Scenario: Hero slider shows CTA
    Then the hero heading "We are best Roofing Services" is displayed
    And the "Book an appointment" CTA button is visible
    And the hero section is full-height

  Scenario: About section with tabs
    Given the about/quote section is visible
    When the user clicks "Our Vision" tab
    Then the "Our Vision" tab becomes active (gold background)
    And the corresponding content panel is shown
    When the user clicks "Our Value" tab
    Then the "Our Value" tab becomes active

  Scenario: Get a Quote form
    Given the quote form is visible
    Then the form has fields: service select, name, email, date, time, message
    And the "Send message" button is present

  Scenario: Counter section displays stats
    Then 4 counter items are displayed
    And the section has a gold background

  Scenario: Services section with tabbed content
    Then 6 service tabs are visible: Skylights, Waterproofing, Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing
    When the user clicks "Waterproofing" tab
    Then the "Waterproofing" tab becomes active
    And the waterproofing content panel with description and checklist is shown

  Scenario: Projects gallery
    Then 8 project cards are displayed in a grid
    And each card shows a title and category

  Scenario: Testimonials carousel
    Then testimonial cards are displayed
    And each card has a quote icon, text, avatar, name, and position

  Scenario: Blog section
    Then 3 blog entries are displayed
    And each entry has a featured image, author info, and title

  Scenario: Pricing section
    Then 4 pricing cards are displayed
    And the cards show tier names: Standard, Basic, Standard, Professional
    And each card has a price and feature list

  Scenario: Footer
    Then the footer has a dark background
    And the footer contains: brand, services list, business hours, contact info
    And a "Component Dock" link is present
```

## Verification Checklist

- [ ] TopBar: logo + 4 social icons visible
- [ ] Navbar: 6 nav links, dark background, mobile toggle
- [ ] HeroSlider: 2 slides with overlay, headline, CTA button, full-height
- [ ] AboutQuote: text content + 3 working tabs + quote form with 6 fields
- [ ] CounterSection: gold bg, 4 stats with numbers
- [ ] Services: 6 tab pills, content with descriptions + checklists, side image
- [ ] Projects: 8-card grid with hover effects
- [ ] Testimony: carousel with quote cards
- [ ] Blog: 3 blog entries with images
- [ ] Pricing: 4 pricing cards with tier names and prices
- [ ] Footer: 4 columns, dark bg, Component Dock link
- [ ] All sections match original section order 1:1
- [ ] Brand color #d9ba2b used consistently
- [ ] Poppins font loaded
- [ ] Responsive layout (mobile-friendly)
- [ ] No ColorLib references in app code
