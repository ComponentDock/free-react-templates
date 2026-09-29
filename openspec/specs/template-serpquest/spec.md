# Template: SerpQuest (SEO / Digital Marketing)

## Purpose

Recreation of ColorLib **Seogo** (https://colorlib.com/wp/template/seogo/).
Preview: https://preview.colorlib.com/theme/seogo/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value |
|-------|-------|
| Primary brand color | `#FF008C` (hot pink) |
| Secondary / accent | `#4cd3e3` (cyan) |
| Tertiary accent | `#ff5e13` (orange) |
| Background default | `#f9f9ff` (very light blue-gray) |
| Background dark sections | `#1a1a2e` (dark navy) |
| Text primary | `#222222` |
| Text muted | `#777777` |
| Font family | Poppins, sans-serif |
| Button radius | 30px (pill-shaped) |
| Card radius | 10px |
| Section radius | 0px (full-width) |
| Icon style | Themify Icons + Font Awesome |

### Section backgrounds

- Hero slider: dark background image (`slider_bg_1` class)
- Services: white (`#fff`)
- Case studies: `#f9f9ff`
- Accordion / Why Choose Us: dark background
- Features: white
- Testimonials: `#f9f9ff`
- Footer: dark background (`#1a1a2e`)

## Section order (from preview DOM)

1. **Header** — Sticky navbar with logo (left), nav links (center), "Appointment" CTA button (right). Mobile hamburger menu.
2. **Hero / Slider** — Full-width dark background with illustration. Heading: "BoostUp your Business & Get top of Search Engine". CTA button: "Get Started".
3. **Services** — 3-column grid. Items: SEO/SEM, Digital Marketing, Social Media. Each has icon + title + short description + "Learn More" link.
4. **Case Studies** — Section heading "Our Selected Case Study". 3-column masonry/grid of project cards with image overlay, title, and category tag. Categories: Product Design, Custom Website, Digital Marketing.
5. **Accordion / Why Choose Us** — Dark background. Heading: "Why Choose Us". FAQ-style accordion with 3 expandable questions + answers.
6. **Features** — Section heading. 4-column grid of feature cards: Custom Design, Paid Search Result, Global Search Option, Email Marketing, Custom Software, Setup Business Goal. Each has icon + title + description.
7. **Testimonials** — Carousel/slider of testimonial cards. Quote text + author name + role ("Business Owner"). Avatar placeholder.
8. **Footer** — Dark background. 4-column layout: About text, Quick Links, Newsletter signup, Contact info. Copyright bar at bottom.

## Gherkin requirements

```gherkin
Feature: SerpQuest template

  Background:
    Given the SerpQuest template is loaded

  Scenario: Header displays correctly
    Then the navbar is sticky at the top
    And the logo is visible on the left
    And navigation links are centered
    And an "Appointment" CTA button is on the right

  Scenario: Hero section renders
    Then the hero has a dark background with illustration
    And the heading says "BoostUp your Business & Get top of Search Engine"
    And a "Get Started" button is visible

  Scenario: Services section shows 3 items
    Then 3 service cards are displayed in a row
    And each card has an icon, title, description, and "Learn More" link

  Scenario: Case studies section shows portfolio grid
    Then the heading says "Our Selected Case Study"
    And project cards are displayed in a grid
    And each card has an image, title, and category

  Scenario: Accordion section works
    Then the heading says "Why Choose Us"
    And 3 accordion items are displayed
    When an accordion item is clicked
    Then its answer becomes visible

  Scenario: Features section shows capability grid
    Then feature cards are displayed
    And each card has an icon, title, and description

  Scenario: Testimonials carousel works
    Then testimonial cards are shown
    And each card has a quote, author name, and role
    And navigation arrows allow cycling through testimonials

  Scenario: Footer renders all columns
    Then the footer has about text, quick links, newsletter, and contact columns
    And a copyright line is visible at the bottom
    And a link to Component Dock is present
```

## Verification checklist

- [ ] Header: sticky, logo left, nav center, CTA right, mobile hamburger
- [ ] Hero: dark bg, illustration, heading, CTA button
- [ ] Services: 3 cards in row, icon + title + description + link
- [ ] Case studies: heading, grid of project cards with image + category
- [ ] Accordion: heading, 3 expandable items, toggle behavior
- [ ] Features: heading, grid of feature cards
- [ ] Testimonials: carousel with quote + author + role, navigation
- [ ] Footer: 4 columns (about, links, newsletter, contact), copyright, Component Dock link
- [ ] Design tokens: Poppins font, #FF008C primary, pill buttons, dark section backgrounds
- [ ] All tests pass at 100% coverage
- [ ] No ColorLib references in app code
