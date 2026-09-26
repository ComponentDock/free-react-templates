# Template: Conundrum (Portfolio)

## Purpose

Recreation of ColorLib "Riddle" — a clean, minimal one-page portfolio template
for freelance designers. Single-page layout: header → hero intro → filterable
portfolio grid → CTA footer.

- **Source:** https://colorlib.com/wp/template/riddle/
- **Preview:** https://preview.colorlib.com/theme/riddle/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** Conundrum (`apps/conundrum`, `@free-react-templates/conundrum`)

## Design Tokens

| Token             | Value                  | Notes                                     |
| ----------------- | ---------------------- | ----------------------------------------- |
| Font family       | Josefin Sans           | 400, 600, 700 weights via Google Fonts    |
| Primary text      | `#001418`              | Very dark navy-black                      |
| Muted text        | `#979797`              | Medium gray (used on italic emphasis)     |
| Background        | `#ffffff`              | White, clean                              |
| Button background | `#000000`              | Solid black                               |
| Button text       | `#ffffff`              | White                                     |
| Button radius     | `60px`                 | Pill-shaped (large border-radius)         |
| Button hover      | `#000000` bg, `#fff`   | No color change, possible opacity shift   |
| Section bg        | `#ffffff`              | White throughout                          |

## Section Structure (order from preview)

1. **Header** — fixed/sticky top bar. Left: logo text "Conundrum". Center: horizontal nav links (Home, About, Work, Contact). Right: black pill "Get in touch" CTA button.
2. **Intro (Hero)** — full-width white section. Centered large headline: "I'm a freelance *digital designer*, with +10 years of experience". The italic span uses muted gray `#979797`.
3. **Portfolio Filter Bar** — horizontal text-based filter tabs: All, Web design, Digital design, 3D Rendering, Brand Identity. Active tab is bold/dark; inactive is muted.
4. **Portfolio Grid** — masonry-style 2-column grid of portfolio items. Each item is a full-bleed image with a dark overlay on hover showing "+ See Project" text. Grid layout: first two items are 2-column, then three 1-column items, then one full-width, then two more. Uses mix-blend filtering for category tabs.
5. **Footer (CTA)** — centered "Let's work together" heading, black pill "Get in touch" button, social icon row (Pinterest, LinkedIn, Instagram, Facebook, Twitter), copyright line.

## Gherkin Requirements

### Header

```gherkin
Feature: Header navigation

  Scenario: Logo displays template name
    Given the page loads
    Then the header shows "Conundrum" as the logo text

  Scenario: Navigation links are present
    Given the page loads
    Then the header contains links for "Home", "About", "Work", "Contact"

  Scenario: CTA button is visible
    Given the page loads
    Then the header shows a "Get in touch" button

  Scenario: Mobile hamburger menu
    Given the viewport is mobile-sized
    Then a hamburger menu icon is visible
    And the nav links are hidden
```

### Intro Section

```gherkin
Feature: Hero intro

  Scenario: Headline displays
    Given the page loads
    Then the intro section shows the headline "I'm a freelance digital designer, with +10 years of experience"

  Scenario: Emphasized text is styled differently
    Given the page loads
    Then "digital designer" appears in italic with a muted gray color
```

### Portfolio Filter

```gherkin
Feature: Portfolio filter tabs

  Scenario: Filter tabs are displayed
    Given the page loads
    Then filter tabs show: "All", "Web design", "Digital design", "3D Rendering", "Brand Identity"

  Scenario: Clicking a filter tab updates the visible portfolio items
    Given the page loads
    When I click the "Web design" filter tab
    Then only portfolio items tagged "web" are visible

  Scenario: "All" shows every portfolio item
    Given I have filtered to "Web design"
    When I click the "All" filter tab
    Then all portfolio items are visible
```

### Portfolio Grid

```gherkin
Feature: Portfolio grid

  Scenario: Portfolio items are displayed in a grid
    Given the page loads
    Then 8 portfolio items are visible in a masonry-style grid

  Scenario: Portfolio item has hover overlay
    Given the page loads
    When I hover over a portfolio item
    Then a dark overlay appears with "+ See Project" text

  Scenario: Portfolio items use placeholder images
    Given the page loads
    Then each portfolio item displays a deterministic placeholder image
```

### Footer

```gherkin
Feature: Footer

  Scenario: CTA section displays
    Given the page loads
    Then the footer shows "Let's work together" heading
    And a "Get in touch" button is visible

  Scenario: Social links are present
    Given the page loads
    Then the footer shows social icon links for Pinterest, LinkedIn, Instagram, Facebook, Twitter

  Scenario: Copyright and Component Dock link
    Given the page loads
    Then the footer shows a copyright line
    And a link to "https://www.componentdock.com/" is present
```

## Verification Checklist

- [ ] All sections render: Header, Intro, Portfolio Filter, Portfolio Grid, Footer
- [ ] Josefin Sans font loaded from Google Fonts
- [ ] Brand colors match: `#001418` text, `#979797` muted, `#000` button, `#fff` bg
- [ ] Button is pill-shaped (`border-radius: 60px` or Tailwind `rounded-full`)
- [ ] Portfolio filter tabs switch categories correctly
- [ ] Portfolio grid is masonry-style (2-column with varying heights)
- [ ] Hover overlay shows on portfolio items
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md/PR)
- [ ] Placeholder images use `https://picsum.photos/seed/conundrum-<n>/<w>/<h>`
- [ ] Tests pass at 100% coverage
