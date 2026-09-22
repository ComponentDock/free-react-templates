# Template: SportsClub (Fitness & Gym)

## Purpose

Recreation of the ColorLib "Sportify" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app. This is a fitness/gym website template with hero slider, info boxes, about section, classes carousel, testimonials, pricing cards, and a footer.

- **ColorLib source:** `sportify` — https://colorlib.com/wp/template/sportify/
- **Preview analyzed:** https://preview.colorlib.com/theme/sportify/ (live DOM fetched, CSS tokens extracted)

## Design tokens (extracted from preview)

| Token | Value | Source |
|-------|-------|--------|
| Brand primary | `#7800ff` (vibrant purple) | `.home_button`, buttons, accents |
| Brand secondary | `#ff0e3b` (hot pink/red) | CTA gradient endpoint, alt pricing |
| Dark background | `#0f0432` (near-black navy) | Hero overlay, sections |
| Deep purple | `#190a49`, `#3c098d` | Gradient stops, overlays |
| Light bg | `#eef3f6` (pale blue-gray) | Alternating section backgrounds |
| Gold accent | `#ffc016` | Pricing/feature highlights |
| Salmon | `#ffa07f` | Gradient overlay |
| Text primary | `#2c2c2c` | Body copy |
| Text muted | `#838383`, `#909090`, `#a5a5a5` | Subtitles, captions |
| White | `#FFFFFF` | Text on dark, footer text |
| Font family | `Open Sans`, sans-serif | All text |
| Button shape | Rounded (not fully circular), gradient `linear-gradient(to right, rgba(120,0,255,0.34), rgba(255,14,59,0.34))` | Buttons, CTAs |
| Icon circles | `border-radius: 50%` | Intro boxes, footer icons |
| Hero overlay | Dark transparent overlay on slider images | `.home_slider_overlay` |

## Page sections (from live DOM)

1. **Navbar** — Fixed top, centered logo, 5 nav links (home, about us, classes, blog, contact), social icons. Transparent over hero, white on scroll. Hamburger menu on mobile.
2. **Hero** — Full-viewport slider with overlay, headline "yourself" (split across slides with "be the best version of" / "improve" / "challenge"), subtitle text, CTA button.
3. **Intro boxes** — 3-column row: each has circular icon, title ("aerobics program", "train hard", "basic program"), and description text. Light `#eef3f6` background.
4. **About** — Dark background (`#0f0432`), two-column: text left (title "about sportify", paragraph, CTA button), image right. Section subtitle + title.
5. **CTA banner** — "join our gym" heading with purple-to-red gradient overlay on background image, buttons.
6. **Classes** — Carousel slider showing class cards (aerobics, pilates, yoga): image, title, text, "read more" link. Light background.
7. **Testimonial/Quote** — Dark background, centered quote text, author name. Decorative quotation mark icon.
8. **Pricing** — Carousel/slider with 3 pricing cards: name, price, "per month", feature list, CTA button. One card is "alt" variant (highlighted with different background). Title "pricing".
9. **Footer** — Dark background, 3 columns: logo center, icon items (phone, map, mail) with labels, social links. Copyright bar at bottom with "© 2026 All rights reserved" + social icons.

## Gherkin requirements

### Navbar
```gherkin
Feature: Navbar

  Scenario: Renders all navigation links
    Then the navbar contains links for "home", "about us", "classes", "blog", "contact"

  Scenario: Logo is visible
    Then the logo image is displayed

  Scenario: Social icons are present
    Then 5 social media icons are rendered

  Scenario: Mobile hamburger menu
    When the viewport is mobile-sized
    Then a hamburger icon is visible
    And the full nav is hidden

  Scenario: Navbar becomes opaque on scroll
    When the user scrolls past the hero
    Then the navbar background changes from transparent to solid
```

### Hero
```gherkin
Feature: Hero section

  Scenario: Displays headline and subtitle
    Then a large headline text is visible
    And a subtitle paragraph is shown

  Scenario: CTA button is present
    Then a call-to-action button is rendered in the hero

  Scenario: Hero covers full viewport height
    Then the hero section height matches the viewport height
```

### Intro boxes
```gherkin
Feature: Intro info boxes

  Scenario: Three boxes are rendered
    Then 3 info boxes are displayed in a row

  Scenario: Each box has icon, title, and text
    Then each box shows a circular icon
    And each box has a title
    And each box has description text
```

### About section
```gherkin
Feature: About section

  Scenario: Section title and subtitle visible
    Then the about section shows a subtitle and title

  Scenario: Content and image side by side
    Then text content is on the left
    And an image is on the right

  Scenario: Dark background
    Then the about section has a dark background color
```

### CTA banner
```gherkin
Feature: CTA banner

  Scenario: Heading visible
    Then "join our gym" heading is displayed

  Scenario: Gradient overlay
    Then the CTA banner has a purple-to-red gradient overlay

  Scenario: Buttons present
    Then CTA buttons are rendered
```

### Classes carousel
```gherkin
Feature: Classes section

  Scenario: Carousel renders class cards
    Then a carousel with class cards is shown

  Scenario: Each card has image, title, and text
    Then each card displays an image, title, and description

  Scenario: Section title visible
    Then the section title "classes" is displayed
```

### Testimonial
```gherkin
Feature: Testimonial / Quote

  Scenario: Quote text and author visible
    Then a quote paragraph is displayed
    And an author name is shown

  Scenario: Decorative quotation icon
    Then a decorative quotation mark icon is rendered
```

### Pricing
```gherkin
Feature: Pricing section

  Scenario: Section title
    Then the heading "pricing" is visible

  Scenario: Three pricing cards
    Then 3 pricing cards are displayed

  Scenario: Each card shows name, price, and features
    Then each card has a plan name
    And each card has a price
    And each card has a feature list

  Scenario: One card is highlighted
    Then one pricing card has an alternate/highlighted style
```

### Footer
```gherkin
Feature: Footer

  Scenario: Three column layout
    Then the footer has 3 content columns

  Scenario: Contact info with icons
    Then icons with labels for phone, location, and email are shown

  Scenario: Social links
    Then social media link icons are rendered

  Scenario: Copyright bar
    Then a copyright line is displayed at the bottom

  Scenario: Component Dock link
    Then the footer links to "https://www.componentdock.com/"
```

## Verification checklist

- [ ] All 9 sections render correctly
- [ ] Brand colors (#7800ff purple, #ff0e3b red, #0f0432 dark) match the reference
- [ ] Open Sans font family applied
- [ ] Hero is full-viewport with dark overlay
- [ ] Intro boxes have circular icons (50% radius)
- [ ] Buttons have gradient (purple → red)
- [ ] Classes section uses a carousel/slider
- [ ] Pricing has 3 cards, one highlighted
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive layout (mobile hamburger, stacked columns)
- [ ] All tests pass at 100% coverage
