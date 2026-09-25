# Template: Resumeta (CV / Resume)

## Purpose

Recreation of ColorLib **Civic** — a single-page CV/resume template.

- **Source slug:** `civic`
- **ColorLib page:** https://colorlib.com/wp/template/civic/
- **Preview URL:** https://preview.colorlib.com/theme/civic/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (from live preview CSS)

| Token             | Value                              | Usage                                        |
| ----------------- | ---------------------------------- | -------------------------------------------- |
| Font family       | `'Josefin Sans', sans-serif`       | All text (headings + body)                   |
| Primary (dark)    | `#40424a`                          | Headings, button borders, fact boxes, nav    |
| Background        | `#f2f7f8`                          | Header, hero, circle-progress inner          |
| Light background  | `#f9f9f9`                          | Social section                               |
| Body text         | `#808181`                          | Paragraphs, secondary text                   |
| Social link       | `#484848`                          | Social icon links                            |
| Inactive dot      | `#cacaca`                          | Progress dots inactive, resume dot connector |
| White             | `#fff`                             | Button fill, fact-box text on dark bg        |
| Button style      | white bg, `#40424a` 2px border, uppercase, 12px, 700 weight, no radius | `.site-btn` |
| Circle radius     | `150px`                            | Circle-progress inner ring                   |
| Section title     | `#40424a`, 2px underline via `::after` | Every section heading                     |

## Section order (from DOM)

1. **Header** — logo ("Civic") + tagline + two CTA buttons (Download CV, Discover me). Background: `#f2f7f8`.
2. **Hero** — two-column: left = name "Maria Williams" + bio paragraph + General Info list (DOB, address, email, phone); right = hero image (`hero.jpg`). Background: `#f2f7f8`.
3. **Social Links** — horizontal row of icons (Pinterest, LinkedIn, Instagram, Facebook, Twitter) + hidden "My Social Profiles" heading. Background: `#f9f9f9`.
4. **Work Experience** — section title + resume list (2 entries). Each entry: year range (h2), company (h3), role (h4), description paragraph. Connector dot via `::after`. White background.
5. **Education** — same layout as Work Experience, 2 entries. Background: parallax image (`resume-bg.jpg`), text on dark overlay.
6. **References** — carousel/slider of testimonial cards. Each card: large quotation mark, quote paragraph, name (h3), role (h4). Owl-carousel dots below.
7. **Portfolio** — section title + "See All Portfolio" button. 4-column grid of portfolio items, each: background image, title (h2), category (p). Images: `1.jpg`–`4.jpg`.
8. **Extra Skills** — 2x2 grid: two circle-progress rings (75% Inspiration, 83% Inspiration) + two dark fact boxes (14 Years of Experience, 9 Awards Won). Fact boxes: `#40424a` background, white text/icons.
9. **Contact** — form with Name, Email, Subject inputs + Message textarea + "Send message" button (`.site-btn`). White background.
10. **Footer** — centered copyright line. Dark `#40424a` background, white text.

## Gherkin scenarios

### Header

```gherkin
Feature: Header section

  Scenario: Logo and tagline render
    Given the page loads
    Then the header shows the site name
    And a tagline below it

  Scenario: CTA buttons are visible
    Given the page loads
    Then two header buttons are visible
    And the first reads "Download CV"
    And the second reads "Discover me"
```

### Hero

```gherkin
Feature: Hero section

  Scenario: Personal info renders
    Given the page loads
    Then the hero displays a name heading
    And a bio paragraph below the name
    And a General Info list with at least 4 items (DOB, address, email, phone)

  Scenario: Hero image renders
    Given the page loads
    Then a portrait image is visible on the right half
```

### Social Links

```gherkin
Feature: Social links section

  Scenario: Social icons render
    Given the page loads
    Then 5 social link icons are visible (Pinterest, LinkedIn, Instagram, Facebook, Twitter)
    And each icon links to "#" (placeholder)
```

### Work Experience

```gherkin
Feature: Work Experience section

  Scenario: Section title renders
    Given the page loads
    Then a "Work Experience" section title is visible with an underline

  Scenario: Experience entries render
    Given the page loads
    Then at least 2 experience entries are listed
    And each entry has a year range, company name, role, and description
```

### Education

```gherkin
Feature: Education section

  Scenario: Section title renders
    Given the page loads
    Then an "Education" section title is visible with an underline

  Scenario: Education entries render
    Given the page loads
    Then at least 2 education entries are listed
    And each entry has a year, diploma name, institution, and description
    And the section has a parallax background image
```

### References

```gherkin
Feature: References section

  Scenario: Section title renders
    Given the page loads
    Then a "References" section title is visible

  Scenario: Testimonial cards render
    Given the page loads
    Then at least 3 testimonial cards are in the carousel
    And each card shows a quotation mark, quote text, name, and role
```

### Portfolio

```gherkin
Feature: Portfolio section

  Scenario: Section title and button render
    Given the page loads
    Then a "Portfolio" section title is visible
    And a "See All Portfolio" button is visible

  Scenario: Portfolio grid renders
    Given the page loads
    Then 4 portfolio items are displayed in a grid
    And each item has an image, title, and category label
```

### Extra Skills

```gherkin
Feature: Extra Skills section

  Scenario: Circle progress rings render
    Given the page loads
    Then 2 circle-progress rings are visible
    And each shows a percentage and label

  Scenario: Fact boxes render
    Given the page loads
    Then 2 dark fact boxes are visible
    And each shows an icon, number, and label
```

### Contact

```gherkin
Feature: Contact section

  Scenario: Contact form renders
    Given the page loads
    Then a "Contact Me" section title is visible
    And a form with Name, Email, Subject inputs and a Message textarea is visible
    And a "Send message" button is visible

  Scenario: Form submission is handled
    Given the contact form is filled
    When the user clicks "Send message"
    Then the form does not submit to an external URL (handled client-side)
```

### Footer

```gherkin
Feature: Footer section

  Scenario: Footer renders
    Given the page loads
    Then a footer with copyright text is visible
    And it links to Component Dock
```

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Header: logo text + tagline + 2 CTA buttons
- [ ] Hero: name, bio, info list (4+ items), portrait image
- [ ] Social links: 5 icons
- [ ] Work Experience: section title + 2+ entries with year/company/role/description
- [ ] Education: section title + 2+ entries, parallax bg
- [ ] References: carousel with 3+ testimonial cards
- [ ] Portfolio: title + button + 4-item grid
- [   Extra Skills: 2 circle-progress + 2 fact boxes
- [ ] Contact: form with 4 fields + submit button
- [ ] Footer: copyright + Component Dock link
- [ ] Design tokens: Josefin Sans, #40424a primary, #f2f7f8 bg, button style
- [ ] No ColorLib references in app code
- [ ] Tests: 100% coverage on all components
