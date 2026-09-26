# Template: Mellow (Personal Portfolio)

## Purpose

Recreation of ColorLib's **Melan** template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page personal portfolio.

- **Source:** https://colorlib.com/wp/template/melan/
- **Preview:** https://preview.colorlib.com/theme/melan/
- **Category:** Personal Portfolio / Creative Designer
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library

## Design tokens (extracted from preview CSS)

| Token              | Value                                  | Usage                                                             |
| ------------------ | -------------------------------------- | ----------------------------------------------------------------- |
| Font (body)        | Muli, sans-serif                       | Body text, headings, buttons (Google Fonts link: 300–900)          |
| Brand color        | `#615CFD` (vivid purple)              | Primary button bg, section title accent line, counter numbers, footer link hover |
| Accent orange      | `#ff5e13` (warm orange)               | Secondary accent (used sparingly — hover states, highlights)      |
| Dark navy          | `#001D38`                              | Footer top bg, discuss_projects bg, section title text color, counter label text |
| Light lavender bg  | `#f9f9ff`                              | Page/body background                                              |
| Light purple bg    | `#f0e9ff`                              | Service section background                                        |
| Teal accent        | `#4cd3e3`                              | Minor decorative accent                                           |
| Muted text         | `#999999`                              | Subtle/secondary text                                             |
| Border color       | `#E8E8E8`                              | Counter card borders                                              |
| Button primary     | bg `#615CFD`, `#fff` text, radius 0px | `.boxed-btn3` — square corners, 14px/38px padding                 |
| Button outline     | border `1px solid #615CFD`, radius 0px| `.line_btn` — "More Folio" link style; hover fills with brand     |
| Section title line | 1px vertical, `#615CFD`, 60px tall    | Decorative line above section title span (absolute positioned)    |

## Section structure (fidelity order)

1. **Header/Navbar** — Sticky top nav: logo (image), nav links (Home active, About, Services, Blog dropdown, Pages dropdown, Contact), "Contact Me" CTA button (`.boxed-btn3`). Mobile: hamburger menu.
2. **Hero/Slider** — Full-viewport background image (`banner.png`), decorative grid pattern overlay (top-right, `d-none d-lg-block`), left-side social links (Facebook, Twitter, Instagram), centered text: "Hello This is Milan" (h3) + "Creative Designer" (span). Hero is a flex container centered vertically.
3. **Services** — Light purple bg (`#f0e9ff`), section title with decorative purple line: "Service Provided" (span) + "Build brands campaigns & digital projects" (h3). 3-column grid: Graphic Design, Web Design, Mobile App — each with SVG icon, h3 title, lorem paragraph.
4. **Portfolio Header** — Dark purple/navy bg, white text: "Portfolios" (span) + "Some of my awesome stuffs here" (h3).
5. **Portfolio Gallery** — 5 images in asymmetric grid: first row 5+7 cols (2 items), second row 4+4+4 cols (3 items). Each item has a thumbnail image, a popup link (magnific-popup), and a hover overlay with "Product Design" title. Below the grid: "More Folio" outline button (`.line_btn`).
6. **About Me** — White bg with large decorative "About" watermark text (800-weight, light gray `#F5F6F7`, absolute left). Two columns: left = "About me" heading + paragraph + "Download CV" button (`.boxed-btn3`); right = portrait photo with decorative color grid pattern overlay.
7. **Counters** — White bg, 3 bordered cards in a row: "520+ Total Projects", "244 On Going Projects", "95% Job Success". Counter numbers in brand purple `#615CFD`, 50px bold. Border hover turns purple.
8. **Testimonials** — Background image with dark gradient overlay (left-to-right, transparent to `#001d38`). Carousel of testimonial cards: purple quote icon, paragraph text, author thumbnail (circular), author name, role. 3 slides with dot pagination.
9. **Discuss Projects** — Dark navy bg (`#001D38`), centered white text: "Let's discuss for a project" (h3, 50px bold) + paragraph + "Start Talking" button (`.boxed-btn3`).
10. **Footer** — Dark navy bg (`#001D38`), top section with menu links (About, Services, Portfolio) on left + social icons (Facebook, Twitter, Instagram, Google+) on right. Bottom: copyright line with Component Dock attribution.

## Gherkin requirements

### Header

```
Feature: Header navigation
  Scenario: Header displays logo and navigation links
    Given the page has loaded
    Then a logo image is visible in the header
    And navigation links are displayed: Home, About, Services, Blog, Pages, Contact

  Scenario: Header has Contact Me button
    Given the page has loaded
    Then a "Contact Me" button is visible in the header

  Scenario: Header is sticky on scroll
    Given the page has scrolled down
    Then the header remains fixed at the top of the viewport
```

### Hero

```
Feature: Hero section
  Scenario: Hero displays greeting text
    Given the page has loaded
    Then the hero section displays "Hello This is Milan" (or equivalent greeting)
    And "Creative Designer" subtitle is shown below

  Scenario: Hero has background image
    Given the page has loaded
    Then the hero section has a full-viewport background image

  Scenario: Hero displays social links
    Given the page has loaded
    Then social media icon links are visible on the left side of the hero
```

### Services

```
Feature: Services section
  Scenario: Services displays three service cards
    Given the page has loaded
    Then three service cards are displayed in a row
    And each card has an icon, a title, and a description paragraph

  Scenario: Services section has light purple background
    Given the page has loaded
    Then the services section background is a light purple shade
```

### Portfolio

```
Feature: Portfolio section
  Scenario: Portfolio header displays with dark background
    Given the page has loaded
    Then the portfolio header has a dark background
    And "Portfolios" label and heading text are displayed in white

  Scenario: Portfolio gallery shows five items
    Given the page has loaded
    Then five portfolio images are displayed in an asymmetric grid
    And each image has a hover overlay with a title

  Scenario: Portfolio has More Folio button
    Given the page has loaded
    Then a "More Folio" outline button is displayed below the gallery
```

### About Me

```
Feature: About Me section
  Scenario: About Me displays bio and photo
    Given the page has loaded
    Then an "About me" heading and bio paragraph are displayed on the left
    And a portrait photo is displayed on the right
    And a decorative "About" watermark text appears behind the content

  Scenario: About Me has Download CV button
    Given the page has loaded
    Then a "Download CV" button is visible in the about section
```

### Counters

```
Feature: Counters section
  Scenario: Counters displays three statistics
    Given the page has loaded
    Then three counter cards are displayed in a row
    And each card shows a number and a label
    And the counter numbers use the brand purple color

  Scenario: Counter cards have border hover effect
    Given the page has loaded
    When I hover over a counter card
    Then the border color changes to the brand purple
```

### Testimonials

```
Feature: Testimonials section
  Scenario: Testimonials carousel displays author quotes
    Given the page has loaded
    Then a testimonial carousel is visible with at least one slide
    And each slide shows a quote icon, text, author photo, name, and role

  Scenario: Testimonials has dark gradient overlay
    Given the page has loaded
    Then the testimonials section has a background image with a dark gradient overlay
```

### Discuss Projects

```
Feature: Discuss Projects CTA
  Scenario: CTA section displays project prompt
    Given the page has loaded
    Then "Let's discuss for a project" heading is displayed
    And a "Start Talking" button is visible below
    And the section has a dark navy background
```

### Footer

```
Feature: Footer
  Scenario: Footer displays links and social icons
    Given the page has loaded
    Then menu links (About, Services, Portfolio) are displayed on the left
    And social media icons are displayed on the right

  Scenario: Footer has Component Dock attribution
    Given the page has loaded
    Then a copyright line with "Component Dock" link is displayed
```

### Accessibility

```
Feature: Accessibility
  Scenario: Semantic structure
    Given the page has loaded
    Then the header uses <header> and <nav> elements
    And the main content uses <main>
    And the footer uses <footer>
    And all images have alt text
    And interactive elements have accessible labels
```

## Verification checklist

- [ ] `npm run verify:app -- mellow` green: typecheck → lint → vitest (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at https://preview.colorlib.com/theme/melan/: purple `#615CFD` brand accents, Muli font, full-viewport hero, 3-column services, asymmetric portfolio grid, about section with watermark text, counter cards, testimonial carousel, dark navy footer.
- [ ] Behavior check: sticky header, testimonial carousel navigation, portfolio hover overlays, counter number animation, responsive layout (mobile stacking).
- [ ] Responsive check at 768px (services stack to 1 column, portfolio grid reflows, about section stacks vertically, counters stack, footer stacks).
- [ ] Footer links to https://www.componentdock.com/ branded as "Component Dock".
