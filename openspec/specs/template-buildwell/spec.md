# Template: BuildWell (Construction Company)

## Purpose

Recreation of ColorLib's **Celt** construction company website template.

- **Source:** https://colorlib.com/wp/template/celt/
- **Preview:** https://preview.colorlib.com/theme/celt/
- **New name:** `buildwell`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Construction / Corporate

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token            | Value                                   | Usage                                        |
| ---------------- | --------------------------------------- | -------------------------------------------- |
| `--brand-dark`   | `#001232`                               | Primary background, navbar, main buttons     |
| `--brand-accent` | `#FFD626`                               | Highlight sections, secondary buttons, icons |
| `--text-heading` | `#000044` (mapped as `#004`)            | Headings, body text emphasis                 |
| `--text-body`    | `#64728A`                               | Body copy, muted text                        |
| `--bg-white`     | `#FFFFFF`                               | Content backgrounds                          |
| `--bg-light`     | `#F8F8F8`                               | Alternate section backgrounds                |
| `font-family`    | `"Poppins", sans-serif`                 | Global font                                  |
| `border-radius`  | `0px` (buttons)                         | Square/rectangular buttons                   |
| `icon-radius`    | `50%` (number icons)                    | Circular stat icons                          |
| Button padding   | `10px 30px`                             | Both button variants                         |
| Button hover     | slide-fill animation (underline → full) | Accent-colored fill on hover                 |

### Color palette summary

- **Dark navy** `#001232` — dominant brand color, used on navbar, hero overlay, main buttons, footer
- **Yellow accent** `#FFD626` — highlight color for CTA sections, number stats band, secondary buttons, icon circles
- **Neutral grey** `#64728A` — body text
- **Dark heading** `#004` — headings and emphasis text

## Visual design notes (from TEMPLATES.md screenshot + preview)

- Dark navy hero with background image + semi-transparent overlay, large white headline "We Build Your Dream", two buttons (dark primary + yellow secondary).
- Clean white sections with 3-column icon feature blocks.
- Yellow stats band with 4 circular icon counters.
- Grey parallax portfolio grid (4 projects, hover overlay with links).
- 3-column services with icon + title + description.
- Accordion FAQ section (Bootstrap-style collapsible panels).
- Yellow testimonial/quote section with client meta.
- Partner logos slider.
- 3-column blog cards with images.
- Footer: dark navy with logo, quick links, social icons, newsletter subscribe.
- Bottom footer with copyright and Component Dock link.

## Gherkin requirements

### Scenario: Header navigation

```gherkin
Feature: Header

  Scenario: Top navbar shows contact info
    Given the page loads
    Then I see an address, phone number, and email in the top bar
    And the top bar has a dark navy background

  Scenario: Main navbar displays logo and navigation links
    Given the page loads
    Then I see the BuildWell logo on the left
    And I see nav links: Home, About, Services, Portfolio, Blog, Contact
    And a search icon is present in the navbar

  Scenario: Sticky navbar on scroll
    Given I scroll past the hero
    Then the navbar sticks to the top of the viewport
    And a dark background appears behind the navbar
```

### Scenario: Hero section

```gherkin
Feature: Hero

  Scenario: Hero displays headline and CTAs
    Given the page loads
    Then I see a large headline "We Build Your Dream"
    And I see two buttons: a dark "Contact Us" button and a yellow "Learn more" button

  Scenario: Hero has background image with overlay
    Given the page loads
    Then the hero has a dark background image with semi-transparent overlay
```

### Scenario: About section

```gherkin
Feature: About

  Scenario: About section shows three feature cards
    Given I scroll to the About section
    Then I see three columns: Certified Experience, Great Teamwork, Modern Technology
    And each card has an icon, title, and description
```

### Scenario: Stats/Numbers section

```gherkin
Feature: Stats

  Scenario: Yellow stats band shows four counters
    Given I scroll to the Numbers section
    Then I see a yellow background band
    And four stat counters are displayed (e.g. Years, Projects, Clients, Awards)
    And each counter has a circular yellow icon above it
```

### Scenario: Portfolio section

```gherkin
Feature: Portfolio

  Scenario: Featured Works grid
    Given I scroll to the Portfolio section
    Then I see the heading "Featured Works"
    And four project cards are displayed in a grid
    And hovering a card shows an overlay with view and link icons

  Scenario: Portfolio has parallax background
    Given I scroll to the Portfolio section
    Then the section has a parallax background image
```

### Scenario: Services section

```gherkin
Feature: Services

  Scenario: Six service cards
    Given I scroll to the Services section
    Then I see the heading "Our Services"
    And six service cards are displayed: Construction, Renovation, Architecture, Painting, Decorating, Consulting
    And each card has an icon, title, and short description
```

### Scenario: FAQ/Accordion section

```gherkin
Feature: FAQ

  Scenario: Accordion FAQ with three items
    Given I scroll to the Why Choose Us section
    Then I see three collapsible accordion panels
    And clicking a panel header expands it to show content
    And clicking another panel collapses the previously open one
```

### Scenario: Testimonial section

```gherkin
Feature: Testimonial

  Scenario: Yellow testimonial band
    Given I scroll to the Testimonial section
    Then I see a yellow background section
    And a client quote is displayed with quotation mark styling
    And client name and role are shown below the quote
```

### Scenario: Partners/Clients section

```gherkin
Feature: Partners

  Scenario: Partner logos carousel
    Given I scroll to the Partners section
    Then I see a row of partner/client logos
    And the logos are displayed in a slider or flex row
```

### Scenario: Blog section

```gherkin
Feature: Blog

  Scenario: Latest News with three blog cards
    Given I scroll to the Blog section
    Then I see the heading "Latest News"
    And three blog cards are displayed with image, title, and excerpt
```

### Scenario: CTA/Newsletter section

```gherkin
Feature: CTA

  Scenario: Newsletter subscribe bar
    Given I scroll to the CTA section
    Then I see a yellow background section
    And I see a newsletter subscription form with email input and Subscribe button
```

### Scenario: Footer

```gherkin
Feature: Footer

  Scenario: Dark footer with widgets
    Given I scroll to the footer
    Then I see a dark navy background
    And it contains the BuildWell logo, Quick Links, and Keep in Touch sections
    And a newsletter subscribe form is present
    And social media icons are displayed

  Scenario: Bottom footer copyright
    Given I scroll to the very bottom
    Then I see a copyright notice
    And a "Component Dock" link is present
```

## Verification checklist

- [ ] All 12 sections rendered in correct order: Header → Hero → About → Stats → Portfolio → Services → FAQ → Testimonial → Partners → Blog → CTA → Footer
- [ ] Design tokens match: `#001232` dark navy, `#FFD626` yellow, Poppins font
- [ ] Square buttons (border-radius 0) with hover fill animation
- [ ] Circular yellow icon badges on stat counters (border-radius 50%)
- [ ] Parallax background on portfolio section
- [ ] Accordion FAQ is interactive (expand/collapse)
- [ ] Newsletter form in CTA section
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in any app source files
- [ ] Placeholder images via `picsum.photos/seed/buildwell-<n>/`
- [ ] Tests at 100% coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app buildwell` passes
