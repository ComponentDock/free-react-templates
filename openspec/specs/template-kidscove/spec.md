# Template: KidsCove (Education / Kindergarten)

## Purpose

Recreation of ColorLib's **Kindergarten** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Kindergarten
- **ColorLib URL:** https://colorlib.com/wp/template/kindergarten/
- **Live preview:** https://preview.colorlib.com/theme/kindergarten/
- **New app name:** `kidscove`
- **Package:** `@free-react-templates/kidscove`

## Design tokens

| Token | Value |
| --- | --- |
| Brand primary | `#ED078B` (hot pink) |
| Brand secondary | `#1f2b7b` (dark navy) |
| Accent cyan | `#12D9DF` (bright cyan) |
| Purple accent | `#423F8D` / `#415094` |
| Text light purple | `#f0e9ff` |
| Text muted | `#999999` / `#888888` / `#828bb2` |
| Background light | `#f9f9ff` (faint lavender) |
| Font display | `"Concert One", cursive` |
| Font accent | `"Fredoka One", cursive` |
| Font body | `"DM Sans", sans-serif` |
| Button radius | `30px` (rounded) |
| Card radius | varies |
| Avatar radius | `50%` (circular) |

## Section structure

1. **Navbar** — Logo, nav (Home, Class, About, Blog, Elements, Contact), "Enroll Now" CTA
2. **Hero Slider** — Slider with heading "Quality Learning", "Explore Classes" button
3. **About** — "Welcome to our Kindergarten" + 3 feature items (Inter School Sports, Friendly Environment, Multimedia Class) + about image
4. **Classes** — "Classes We Offer" — 4 class cards (Intelligent Challenge) + "More Classes" link, on dark bg
5. **Drawing Event** — "Drawing Event" section with "View Event" link, on dark bg
6. **Teachers** — "Expert Teachers" — instructor profiles (circular avatars, names)
7. **Testimonials** — Testimonial carousel with quotes and avatars, on dark bg
8. **Footer** — Quick Links, About Us columns, social icons, Component Dock link

## Gherkin scenarios

```gherkin
Feature: KidsCove Navigation
  Scenario: Navbar shows logo and links
    Given the user visits the KidsCove homepage
    Then the navbar shows "KidsCove" logo
    And links: Home, Class, About, Blog, Elements, Contact
    And an "Enroll Now" CTA button is visible

Feature: KidsCove Hero
  Scenario: Hero slider displays headline
    Given the user visits the homepage
    Then a slider with "Quality Learning" heading is shown
    And an "Explore Classes" button is visible

Feature: KidsCove About
  Scenario: About section shows features
    Given the user scrolls to the about section
    Then "Welcome to our KidsCove" heading is displayed
    And 3 feature items are shown with icons

Feature: KidsCove Classes
  Scenario: Classes offered displayed
    Given the user scrolls to classes
    Then 4 class cards are shown on dark background
    And a "More Classes" link exists

Feature: KidsCove Drawing Event
  Scenario: Drawing event section
    Given the user scrolls to the event section
    Then "Drawing Event" heading and "View Event" link are visible

Feature: KidsCove Teachers
  Scenario: Teacher profiles shown
    Given the user scrolls to teachers
    Then instructor profiles with circular avatars and names appear

Feature: KidsCove Testimonials
  Scenario: Testimonial carousel works
    Given the user scrolls to testimonials
    Then a carousel with quotes and avatars is displayed

Feature: KidsCove Footer
  Scenario: Footer links to Component Dock
    Given the user scrolls to the footer
    Then a link to "https://www.componentdock.com/" branded "Component Dock" exists
```

## Verification checklist

- [ ] Brand pink `#ED078B` for buttons/accents
- [ ] Navy `#1f2b7b` for dark sections
- [ ] Concert One / Fredoka One for display, DM Sans for body
- [ ] 30px rounded buttons
- [ ] Hero slider with "Quality Learning"
- [ ] About section with 3 feature items
- [ ] Classes section with 4 cards on dark bg
- [ ] Drawing Event section
- [ ] Teacher profiles with circular avatars
- [ ] Testimonial carousel on dark bg
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
