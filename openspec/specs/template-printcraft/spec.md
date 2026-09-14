# Template: Printcraft (Business / Publishing)

## Purpose

Recreation of ColorLib "Publishing Company" template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source slug**: `publishingcompany`
- **ColorLib page**: https://colorlib.com/wp/template/publishing-company/
- **Live preview**: https://preview.colorlib.com/theme/publishingcompany/ (verified 2026-09-14)
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package**: `@free-react-templates/printcraft`
- **Deploy target**: `printcraft.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) on 2026-09-14.

### Colors

| Token            | Value     | Usage                                      |
| ---------------- | --------- | ------------------------------------------ |
| brand-blue       | `#007bff` | Primary buttons, links, CTA               |
| brand-coral      | `#ff7a5c` | Accent highlight (e.g. pricing sale badge) |
| muted-teal       | `#95adbe` | Counter overlay, secondary accents          |
| dark-bg          | `#1a1a1a` | Navbar, hero overlay tint, footer           |
| dark-surface     | `#1d2124` | Dark sections                               |
| light-bg         | `#f7f7f7` | Counter section, alternating sections       |
| warm-white       | `#f5f4f0` | Testimonial area background                 |
| body-text        | `#212529` | Default body text                           |
| white            | `#ffffff` | Cards, button-white                         |

### Typography

| Element       | Font                 | Weight     | Notes                           |
| ------------- | -------------------- | ---------- | ------------------------------- |
| Headings      | `"Lora", serif`      | 700        | Elegant serif for titles        |
| Body          | `"Roboto", sans-serif`| 400       | Clean sans-serif for readability|
| Nav links     | Roboto               | 500        | Uppercase via CSS transform     |

### Buttons

- **Primary**: `#007bff` background, white text, `border-radius: 0.25rem`, `py-3 px-4`, hover darkens to `#0069d9`
- **White/Outline**: white background, black text, `1px solid #fff` border, hover transitions to transparent bg with `#95adbe` text
- Both use `.py-3 px-4` padding (Bootstrap-style)

### Section Backgrounds

| Section          | Background                        |
| ---------------- | --------------------------------- |
| Navbar           | Dark (`#1a1a1a`)                  |
| Hero             | Full-width cover image + dark overlay |
| About            | White                             |
| Counter/Stats    | Light bg (`#f7f7f7`) + teal overlay at 30% opacity |
| New Releases     | White                             |
| Testimonials     | Warm white (`#f5f4f0`)            |
| Pricing          | Light bg (`#f7f7f7`)              |
| Contact/CTA      | Full-width cover image + overlay  |
| Blog             | White                             |
| Footer           | Dark (`#343a40`)                  |

### Border Radius

- Cards/buttons: `0.25rem` (4px)
- Some decorative elements: `16px`, `40px` (pill shape)
- Counter numbers: `50%` (circular background)

## Replication Reference

**Source**: https://preview.colorlib.com/theme/publishingcompany/
**Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/publishingcompany-free-template.jpg
**Fetched**: 2026-09-14 — preview DOM + CSS extracted successfully.

### Visual Design (from screenshot + DOM analysis)

A professional publishing/book company template with:
1. **Dark navbar** with logo on left, horizontal nav links centered, search form on right
2. **Large hero** with a dark overlay over a background image, serif heading "Good books don't give up all their secrets at once", two CTA buttons (primary "View All Books" + white outline "Explore Now")
3. **About section** — "Publishing Company Created By Authors" with descriptive text, possibly author/team imagery
4. **Stats/Counter section** — light background with animated counters: 75,678 (books), 3,040 (authors), 283 (awards?), 14,500 (readers?)
5. **New Release section** — book cards/cover images in a grid
6. **Testimonials** — "Kind Words From Clients" with quote cards and author names (Roger Scott)
7. **Pricing** — "Affordable Packages" with pricing cards (3 tiers: $8, $12, $20), some with sale badges
8. **Contact/CTA** — full-width background image section, "Send a Message & Get in touch!" with a contact form
9. **Blog** — "Recent Blog" with blog post cards
10. **Footer** — dark background, 4 columns (Extra Links, Legal, Company, Have a Questions?), copyright

## Gherkin Requirements

```gherkin
Feature: Printcraft - Publishing Company Website Template

  Background:
    Given the Printcraft template is loaded
    And the page is rendered in a browser

  Scenario: Page loads with correct structure
    Then I should see a navigation bar at the top
    And I should see a hero section below the navbar
    And I should see sections in the order: hero, about, counter, releases, testimonials, pricing, contact, blog, footer

  Scenario: Navigation bar displays correctly
    Then I should see the brand name "Printcraft" in the navbar
    And I should see navigation links: Home, About, Coming Soon, Top Seller, Books, Author, Blog, Contact
    And I should see a search form in the navigation bar
    And the navbar should have a dark background

  Scenario: Hero section displays with heading and CTAs
    Then I should see a large heading about books/publishing
    And I should see a primary button labeled "View All Books"
    And I should see an outline button labeled "Explore Now"
    And the hero should display a background image with dark overlay

  Scenario: About section shows company description
    Then I should see a section heading "Publishing Company Created By Authors"
    And I should see descriptive paragraphs about the company
    And the section should have a white background

  Scenario: Counter/stats section shows animated numbers
    Then I should see 4 stat blocks with animated counting numbers
    And the numbers should represent: books, authors, awards, readers
    And the section should have a light background with teal accent overlay

  Scenario: New Release section displays book cards
    Then I should see a heading "New Release"
    And I should see book card items with cover images and titles

  Scenario: Testimonials section shows client quotes
    Then I should see a heading about client testimonials
    And I should see testimonial cards with quote text and author name
    And testimonial cards should have a warm white background

  Scenario: Pricing section shows plans
    Then I should see a heading "Affordable Packages"
    And I should see pricing cards with prices
    And each card should have a "Get Started" button

  Scenario: Contact section shows form
    Then I should see a heading about getting in touch
    And I should see a contact form section
    And the section should have a background image with overlay

  Scenario: Blog section shows recent posts
    Then I should see a heading "Recent Blog"
    And I should see blog post cards with titles and images

  Scenario: Footer displays correctly
    Then I should see a dark footer
    And I should see columns for: Extra Links, Legal, Company, Have a Questions
    And I should see a "Made with Component Dock" link
    And the footer should link to https://www.componentdock.com/

  Scenario: Responsive behavior
    When the viewport is less than 992px wide
    Then the navbar should collapse into a hamburger menu
    And sections should stack vertically

  Scenario: Color scheme matches design tokens
    Then primary buttons should use color #007bff
    And the navbar background should be #1a1a1a
    And body text should use color #212529
    And headings should use the "Lora" serif font
    And body text should use the "Roboto" sans-serif font
```

## Verification Checklist

- [ ] All 10 sections present in correct order
- [ ] Navbar: dark bg, logo, 8 nav links, search form
- [ ] Hero: background image, overlay, heading, 2 CTA buttons
- [ ] About section with heading and descriptive text
- [ ] Counter section with 4 animated stats
- [ ] New Release section with book cards
- [ ] Testimonials with quote cards
- [ ] Pricing with plan cards and "Get Started" buttons
- [ ] Contact section with form and bg image
- [ ] Blog section with post cards
- [ ] Footer: dark bg, 4 columns, Component Dock link
- [ ] Fonts: Lora (headings), Roboto (body)
- [ ] Colors: brand-blue #007bff, dark-bg #1a1a1a
- [ ] Responsive: hamburger nav on mobile, stacked sections
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` = `printcraft.free.componentdock.com`
- [ ] `package.json` homepage = `https://printcraft.free.componentdock.com`
- [ ] Tests: 100% coverage
