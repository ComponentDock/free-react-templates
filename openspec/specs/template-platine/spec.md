# Template: Platine (Restaurant)

## Purpose

Recreation of [ColorLib "Caviar"](https://colorlib.com/wp/template/caviar/) —
a premium restaurant single-page website with dark elegance, full-bleed hero
slider, about section, dish menu, awards, testimonials, and reservation form.

- **Source slug:** `caviar`
- **Preview URL:** https://preview.colorlib.com/theme/caviar/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **App folder:** `apps/platine`
- **Package:** `@free-react-templates/platine`
- **Deploy URL:** https://platine.free.componentdock.com

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/caviar/style.css`.

| Token | Value | Usage |
|---|---|---|
| Brand color | `#ff0000` | Accent, buttons, hover, links, price text, heading underlines |
| Body font | `'Open Sans', sans-serif` | Body text, paragraphs, inputs |
| Heading font | `'Work Sans', sans-serif` | Headings, testimonials, footer brand, buttons |
| Page background | `#fafafa` | `body` background |
| Light section bg | `#f9f9f9` | About Us area, Awards area |
| Dark section bg | `#333333` | Dish Menu, Reservation, Footer, Testimonials |
| Overlay (hero) | `rgba(0, 0, 0, 0.6)` | Hero image overlay |
| Overlay (dish menu) | Semi-transparent dark | Section pseudo-element overlay |
| Button bg | `#fff` | `.caviar-btn` base |
| Button hover color | `#ff0000` | `.caviar-btn:hover` |
| Button accent dot | `#ff0000`, `border-radius: 50%` | Circular dot preceding button text |
| Nav sticky bg | `rgba(0, 0, 0, 0.85)` | Header on scroll |
| White | `#fff` | Cards, awards area bg |
| Text color (dark) | `#000` | Body text on light backgrounds |
| Text color (light) | `#fff` | Text on dark/overlay backgrounds |

### Visual Style

- Dark, elegant restaurant aesthetic with red (#ff0000) as the only accent color.
- Sharp-cornered buttons (`border-radius: 0`) with a circular red dot accent.
- Full-bleed background images with dark overlays for hero and dark sections.
- Carousel/slider used in hero, testimonials, and dish menu sections.
- Awards displayed as a horizontal row of logo images on white background.
- Reservation form overlaid on dark background with a food image beside it.

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navbar

  Scenario: Brand logo displayed
    Given I visit the Platine homepage
    Then I see the text "platine" as the brand logo

  Scenario: Navigation links present
    Given I visit the Platine homepage
    Then I see navigation links: "About Us", "Menu", "Awards", "Testimonials", "Reservation", "Contact"

  Scenario: Sticky header on scroll
    Given I am on the Platine homepage
    When I scroll down past the hero
    Then the header becomes sticky with a dark semi-transparent background

  Scenario: Mobile hamburger toggle
    Given I am on a mobile viewport
    Then I see a hamburger menu button
    When I tap the hamburger button
    Then the navigation links expand in a dropdown
```

### Hero Section

```gherkin
Feature: Hero Section

  Scenario: Hero displays heading and CTA
    Given I visit the Platine homepage
    Then I see a hero heading "Lorem Ipsum"
    And I see a paragraph description below the heading
    And I see a "Reservation" call-to-action button

  Scenario: Hero button has red accent dot
    Given I see the Reservation button in the hero
    Then the button has a circular red dot preceding the text

  Scenario: Social media icons visible
    Given I visit the Platine homepage
    Then I see social media icons (Facebook, Instagram, Twitter) on the left side

  Scenario: Hero background image with overlay
    Given I visit the Platine homepage
    Then the hero section has a full-width background image with a dark overlay
```

### About Us Section

```gherkin
Feature: About Us Section

  Scenario: About Us displays two rows
    Given I visit the Platine homepage
    Then I see the "About Us" heading
    And I see a food image on the left and description text on the right
    And I see a second row with "our chef" subtitle and text on the left, image on the right

  Scenario: About Us has section padding
    Given I view the About Us section
    Then the section has comfortable vertical padding between 120px and 180px
```

### Dish Menu Section

```gherkin
Feature: Dish Menu Section

  Scenario: Dish Menu shows three dishes
    Given I visit the Platine homepage
    Then I see the "Special" heading
    And I see three dish cards in a 3-column grid
    And each dish card has an image, a name, and a price

  Scenario: Dish Menu dark background
    Given I view the Dish Menu section
    Then the section has a dark (#333333) background

  Scenario: Dish Menu has View The Menu button
    Given I view the Dish Menu section
    Then I see a "View The Menu" button with red accent dot
```

### Awards Section

```gherkin
Feature: Awards Section

  Scenario: Awards displays logo row
    Given I visit the Platine homepage
    Then I see the "Awards" heading
    And I see 5 award images displayed horizontally

  Scenario: Awards has light background
    Given I view the Awards section
    Then the section has a white/light background
```

### Testimonials Section

```gherkin
Feature: Testimonials Section

  Scenario: Testimonials shows reviewer cards
    Given I visit the Platine homepage
    Then I see the "Testimonials" heading
    And I see testimonial cards with avatar, name, and quote text
    And there are at least 3 testimonials

  Scenario: Testimonials dark background
    Given I view the Testimonials section
    Then the section has a dark (#333333) background
```

### Reservation Section

```gherkin
Feature: Reservation Section

  Scenario: Reservation form fields present
    Given I visit the Platine homepage
    Then I see the "Reservation" heading
    And I see a date picker input
    And I see a time picker input
    And I see a "Select Persons" text input
    And I see a "Last name" text input
    And I see a textarea for message
    And I see a "Reserve Your Desk" submit button

  Scenario: Reservation dark background with image
    Given I view the Reservation section
    Then the section has a dark (#333333) background
    And I see a food image beside the form
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer displays brand and copyright
    Given I visit the Platine homepage
    Then I see the "platine" brand text in the footer
    And I see a copyright notice

  Scenario: Footer links to Component Dock
    Given I view the footer
    Then I see a link to https://www.componentdock.com/
    And the link text says "Component Dock"

  Scenario: Footer dark background
    Given I view the footer
    Then the footer has a dark (#333333) background
```

## Section Order (Implementation Sequence)

1. `Navbar.tsx` — transparent → sticky dark header, brand, nav links, mobile toggle
2. `Hero.tsx` — full-bleed bg image, dark overlay, heading, description, CTA button, social icons
3. `AboutUs.tsx` — two alternating image/text rows, "About Us" heading, "restaurant style" + "our chef" subtitles
4. `DishMenu.tsx` — dark bg, "Special" heading, 3-column dish cards (image + name + price), "View The Menu" button
5. `Awards.tsx` — heading + 5 horizontal award images on light bg
6. `Testimonials.tsx` — dark bg, "Testimonials" heading, carousel of reviewer cards
7. `Reservation.tsx` — dark bg, form (date, time, persons, name, message, submit), food image beside
8. `Footer.tsx` — dark bg, brand logo, copyright, Component Dock link

## Verification Checklist

- [ ] All 8 sections render and match the original section order
- [ ] Brand color (#ff0000) used consistently for accents, buttons, hover states
- [ ] Fonts: Open Sans (body) and Work Sans (headings) loaded via Google Fonts
- [ ] Buttons have sharp corners (no border-radius) with red circular dot accent
- [ ] Dark sections (#333333): Dish Menu, Testimonials, Reservation, Footer
- [ ] Light section (#f9f9f9): About Us
- [ ] Awards section on white/light bg
- [ ] Hero has full-width background image with dark overlay (rgba(0,0,0,0.6))
- [ ] Sticky header with dark semi-transparent background on scroll
- [ ] Mobile responsive: hamburger toggle, stacked layouts
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use `https://picsum.photos/seed/platine-<n>/<w>/<h>`
- [ ] All tests pass with 100% coverage
