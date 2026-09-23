# Template: Designera (Design)

## Purpose

Recreation of the ColorLib "Design" template.
- Source: https://colorlib.com/wp/template/design/
- Preview: https://preview.colorlib.com/theme/design/
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript
- Style: Clean, minimal creative agency / design studio layout with blue accent, Montserrat font, pill-shaped buttons, and generous whitespace

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary blue | #1264fa | Buttons, active nav, hover states |
| Dark navy | #000839 | Hero heading, quote box background, testimonial author |
| Light gray bg | #f8f9fa | Services section, blog entries section, social icon buttons |
| White | #ffffff | Default background, text on dark |
| Subtitle color | rgba(0,8,57,0.5) | Muted subtitle text above section headings |
| Body text | #000000 | Nav links, body copy |
| Gray border | #ececec | CTA button border, form controls |
| Button radius | 30px | Pill-shaped primary buttons |
| Social icon radius | 10px | Rounded square social buttons |
| Font family | Montserrat, sans-serif | Weights: 300, 400, 700 |
| Hero heading | 50px / 700 | Responsive: 30px on mobile |
| Section heading | 30px / 700 | Responsive: 20px on mobile |
| Section padding | 70px 0 | Consistent vertical rhythm |

## Section structure (order from live preview)

1. **Navbar** — Logo "Designera" left, nav links center (Home, dropdown, Inner Page, Contact), CTA button right ("Get Started" pill)
2. **Hero** — Split layout: left has heading + paragraph + CTA button + 2 feature icon cards (High Quality x2); right has hero image with dark navy quote box overlay
3. **Achievements (Stats)** — 4-column stats row: 99.55% ratings, 98K+ happy customers, 99.99% uptime, 1M+ loved
4. **How It Works** — Section title centered, 3 steps with icon circles + dashed arrow connectors between steps
5. **Services** — Split: left has subtitle + heading + paragraph + check list + CTA; right has image with decorative dots
6. **Testimonial** — Carousel with author photo, blockquote, name, role
7. **Blog Entries** — Section title centered, 5-column card grid (rounded cards with date, title, excerpt)
8. **Footer** — 2-column: left has About text + social icons (5 rounded buttons); right has 3-column navigation links. Copyright line at bottom with Component Dock link

## Gherkin requirements

### Feature: Navbar
  Scenario: Logo and navigation links render
    Given the page loads
    Then the navbar displays the "Designera" logo
    And nav links "Home", "Inner Page", "Contact us" are visible
    And a "Get Started" CTA button is rendered

  Scenario: Mobile hamburger menu
    Given the viewport is mobile
    Then a hamburger icon is displayed
    And clicking it reveals the mobile navigation menu

### Feature: Hero
  Scenario: Hero content renders
    Given the page loads
    Then the hero heading "Create, Code, and Published." is visible
    And a paragraph description is shown
    And a "Get Started" primary button is rendered
    And two feature icon cards ("High Quality") appear below

  Scenario: Hero image and quote
    Given the page loads
    Then a hero image is displayed on the right side
    And a dark navy quote box overlays the bottom of the image
    And the quote contains attribution text

### Feature: Achievements
  Scenario: Stats row renders
    Given the page loads
    Then 4 stat blocks are displayed in a row
    And each stat block shows a large number, heading, and description

### Feature: How It Works
  Scenario: Steps render
    Given the page loads
    Then a "How it works" section title is displayed
    And 3 steps are shown with icons
    And dashed arrow connectors link step 1 to step 2 and step 2 to step 3

### Feature: Services
  Scenario: Services section renders
    Given the page loads
    Then a "Services" subtitle and heading appear on the left
    And a paragraph and check list with 3 items are shown
    And a "Get Started" CTA button is rendered
    And a service image with decorative dots appears on the right

### Feature: Testimonials
  Scenario: Testimonial carousel renders
    Given the page loads
    Then a testimonial section is visible
    And it contains an author photo, blockquote, name, and role
    And navigation dots allow cycling between testimonials

### Feature: Blog Entries
  Scenario: Blog grid renders
    Given the page loads
    Then a "Latest Blog Posts" section title is displayed
    And 5 blog post cards appear in a grid
    And each card shows a date, title, and excerpt

### Feature: Footer
  Scenario: Footer renders
    Given the page loads
    Then the footer displays an "About" section with paragraph
    And 5 social icon buttons are shown
    And a 3-column navigation link grid is visible
    And a copyright line with Component Dock link is at the bottom

## Verification checklist

- [ ] Navbar: logo, nav links, CTA button, mobile hamburger
- [ ] Hero: heading, description, CTA, feature cards, image + quote box
- [ ] Achievements: 4 stat blocks with number, heading, description
- [ ] How It Works: section title, 3 steps with icons, dashed connectors
- [ ] Services: subtitle, heading, paragraph, check list, CTA, image + dots
- [ ] Testimonials: carousel with photo, blockquote, name, role
- [ ] Blog Entries: section title, 5 post cards in grid
- [ ] Footer: about, social icons, nav links, copyright + Component Dock link
- [ ] Design tokens: Montserrat font, #1264fa primary, pill buttons (radius 30px), #f8f9fa section backgrounds
- [ ] Responsive: mobile breakpoints for hero, nav, stats, steps
- [ ] Accessibility: semantic HTML, aria labels on interactive elements
- [ ] No ColorLib references in app code
- [ ] CNAME: designera.free.componentdock.com
- [ ] homepage: https://designera.free.componentdock.com
