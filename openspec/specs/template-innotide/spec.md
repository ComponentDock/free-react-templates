# Template: InnoTide (Creative Agency / Design Portfolio)

## Purpose

Recreation of the ColorLib **Innova** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `innova`
- **ColorLib page:** https://colorlib.com/wp/template/innova/
- **Live preview:** https://preview.colorlib.com/theme/innova/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/innova-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#6f42c1` (purple) | Buttons, links, accents, hero text highlight |
| Primary hover | `#59339d` / `#4e2d89` (darker purple) | Link hover, focus states |
| Text primary | `#000000` (black) | Headings |
| Text secondary | `#6c757d` (Bootstrap gray) | Body text, captions |
| Background white | `#ffffff` | Main content background |
| Background light | `#f8f9fa` (Bootstrap light) | Testimonials section (`bg-light`) |
| Background dark | `#343a40` (Bootstrap dark) | Navbar on mobile |
| Font family (body) | `"Roboto Mono", monospace` | Monospace feel for body, loaded via Google Fonts |
| Font family (headings) | `"Abril Fatface", serif` | Decorative serif headings (h1, h2, h3) |
| Button style | `.btn-outline-black` | 2px solid black, uppercase, bold, square corners (radius 0) |
| Button style (CTA) | `.btn-outline-white` | 2px solid white on purple bg, square corners |
| Border radius | `0` (square/sharp) | All buttons, form controls |
| Hero | Full-width background image, dark overlay (opacity 0.3), centered white text, 7rem heading |
| Section spacing | `7em 0` vertical padding | `.section` class |
| Navbar | Transparent absolute overlay on hero, white text, uppercase links |

## Section structure (from live preview DOM)

1. **Navbar** — transparent, absolute position over hero, white text/links, hamburger menu on mobile (bg-dark on mobile breakpoint)
2. **Hero** — full-viewport slider with background image, dark overlay, large heading ("We are innova we create great stuff."), dot indicators
3. **Services** — 4-column grid: Email Design, Web Design, Mobile Design, Research; each with simple-line-icons icon, title, short blurb; white background
4. **Portfolio ("Selected Work")** — 2×2 grid of work items with image + hover overlay (project name + category); white background
5. **Testimonials ("Happy Client")** — light gray bg, carousel of testimonial cards with avatar, name, company, and blockquote
6. **About ("Creative We Grow")** — split layout: left = dotted-bg image, right = image + "About US" label + heading + paragraphs + "Learn More" button (btn-outline-black)
7. **CTA Banner ("Get Started")** — purple bg-primary, white text heading + description + "Get In Touch!" button (btn-outline-white)
8. **Footer** — white bg, 3 columns: About Us text, Navigation links, Social icons (Twitter, Facebook, LinkedIn, Instagram)

## Gherkin requirements

### Navbar
```gherkin
Feature: Navbar

  Scenario: Transparent sticky navbar
    Given the user is on the page
    Then a transparent navbar is visible over the hero
    And the brand name "InnoTide" is displayed in Abril Fatface font
    And the nav links are visible on the right side

  Scenario: Navbar becomes opaque on mobile
    Given the viewport is narrow (< 992px)
    Then the navbar background changes to dark (#343a40)
    And a hamburger toggle icon is visible

  Scenario: Mobile hamburger menu
    Given the viewport is narrow (< 992px)
    When the user taps the hamburger icon
    Then the mobile navigation menu slides open
```

### Hero
```gherkin
Feature: Hero Section

  Scenario: Hero displays on load
    Given the user is on the page
    Then a full-viewport hero section with a background image is visible
    And the heading reads "We Are InnoTide We Create Great Stuff."
    And a dark overlay covers the hero image
    And dot indicators are visible at the bottom center

  Scenario: Heading text has purple highlight
    Given the hero section is visible
    Then the heading words have a purple (#6f42c1) highlight/background behind them
```

### Services
```gherkin
Feature: Services Section

  Scenario: Four service cards displayed
    Given the user scrolls to the services section
    Then four service cards are displayed in a row
    And each card has an icon, title, and short description
    And the icons are displayed in the primary purple color (#6f42c1)

  Scenario: Service card content
    Given the services section is visible
    Then the cards show: Email Design, Web Design, Mobile Design, Research
    And each card description contains placeholder text
```

### Portfolio
```gherkin
Feature: Portfolio Section

  Scenario: Portfolio grid displayed
    Given the user scrolls to the portfolio section
    Then a "Selected Work" heading is visible
    And four portfolio items are displayed in a 2×2 grid
    And each item shows an image with a category label

  Scenario: Portfolio hover effect
    Given the portfolio items are visible
    When the user hovers over a portfolio item
    Then the project name and category are revealed over a dark overlay
```

### Testimonials
```gherkin
Feature: Testimonials Section

  Scenario: Testimonials carousel
    Given the user scrolls to the testimonials section
    Then a "Happy Client" heading is visible
    And a carousel of testimonial cards is displayed
    And each card shows an avatar, person name, company, and a quote

  Scenario: Carousel navigation
    Given the testimonials carousel is visible
    When the user navigates to the next slide
    Then a different testimonial card is displayed
```

### About
```gherkin
Feature: About Section

  Scenario: About section layout
    Given the user scrolls to the about section
    Then a split layout is displayed
    And the left side shows a large image with a dotted background decoration
    And the right side shows an "About US" label, "Creative We Grow" heading, and descriptive text
    And a "Learn More" button (btn-outline-black) is displayed

  Scenario: About section button
    Given the about section is visible
    When the user clicks the "Learn More" button
    Then the button responds with a hover state (black fill, white text)
```

### CTA Banner
```gherkin
Feature: CTA Banner

  Scenario: Purple CTA banner
    Given the user scrolls to the CTA section
    Then a purple (#6f42c1) background banner is visible
    And a "Get Started" heading in white is displayed
    And a "Get In Touch!" button (btn-outline-white) is centered below
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer layout
    Given the user scrolls to the footer
    Then the footer has a white background
    And an "About Us" column with descriptive text is on the left
    And a "Navigation" column with links (About, Services, Portfolio, Contact) is in the middle
    And social media icons (Twitter, Facebook, LinkedIn, Instagram) are on the right
    And a "Made with Component Dock" attribution link is present

  Scenario: Footer links
    Given the footer is visible
    When the user hovers over a navigation link
    Then the link is underlined
```

## Verification checklist

- [ ] Navbar is transparent over hero, opaque on mobile
- [ ] Hero has full-viewport background image with dark overlay
- [ ] Hero heading uses Abril Fatface font, purple highlight on keywords
- [ ] Services section shows 4 cards in a grid with purple icons
- [ ] Portfolio section shows 2×2 grid with hover overlay effect
- [ ] Testimonials carousel slides through cards
- [ ] About section has split layout with dotted background decoration
- [ ] CTA banner uses purple background with white text and outline button
- [ ] Footer has 3 columns + Component Dock attribution
- [ ] All buttons are square-cornered (radius 0), uppercase, bold
- [ ] Body font is Roboto Mono; headings are Abril Fatface
- [ ] Brand color #6f42c1 used consistently across accents
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Public/CNAME set to innotide.free.componentdock.com
