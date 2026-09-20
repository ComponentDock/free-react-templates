# Template: BabelWise (Education / Language Learning)

## Purpose

Recreation of ColorLib's **Lingua** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Lingua
- **ColorLib URL:** https://colorlib.com/wp/template/lingua/
- **Live preview:** https://preview.colorlib.com/theme/lingua/
- **New app name:** `babelwise`
- **Package:** `@free-react-templates/babelwise`

## Design tokens

| Token | Value |
| --- | --- |
| Brand primary | `#2e21df` (vivid purple-blue) |
| Accent purple | `#4f47e2` (medium purple) |
| Text dark | `#000000` |
| Text muted | `#7c7c7c` / `#a5a5a5` / `#b8b8b8` |
| Background light | `#f8f8f8` |
| White | `#ffffff` |
| Font heading | `"Poppins", sans-serif` |
| Font body | `"Montserrat", sans-serif` |
| Button radius | `0` (square) |
| Card radius | `0` |
| Avatar radius | `50%` (circular) |

## Section structure

1. **Top Bar** — Phone number, language selector dropdown, social icons
2. **Navbar** — Logo ("Lingua"), nav (Home, Courses, Instructors, Events, Blog, Contact), search icon. Dark bg.
3. **Hero** — Background image, heading "Learn Languages Easily", "get started" button
4. **Language Slider** — Owl Carousel of 9 language items (Ukrainian, Japanese, Lithuanian, Swedish, English, Italian, Chinese, French, German)
5. **Popular Courses** — "Popular Online Courses" heading, course cards with Vocabulary topic, author (Sarah Parker), language tag, price (Free)
6. **Instructors** — 3 instructor profiles with circular avatars, names, titles, social links. Dark background.
7. **Milestones** — Stat counters section
8. **Newsletter** — Subscribe form on dark background
9. **Blog** — Blog posts section
10. **Footer** — 4 columns, dark bg, Component Dock link

## Gherkin scenarios

```gherkin
Feature: BabelWise Navigation
  Scenario: Navbar shows logo and links
    Given the user visits the BabelWise homepage
    Then the navbar shows "BabelWise" logo
    And links: Home, Courses, Instructors, Events, Blog, Contact
    And a search icon is visible

Feature: BabelWise Top Bar
  Scenario: Top bar has language selector
    Given the user visits the homepage
    Then a top bar with phone and language dropdown is visible

Feature: BabelWise Hero
  Scenario: Hero displays headline
    Given the user visits the homepage
    Then "Learn Languages Easily" heading is shown
    And a "get started" button is visible

Feature: BabelWise Language Slider
  Scenario: Language items displayed
    Given the user scrolls past the hero
    Then a carousel of 9 language items is shown

Feature: BabelWise Courses
  Scenario: Popular courses shown
    Given the user scrolls to courses
    Then "Popular Online Courses" heading is visible
    And course cards show Vocabulary topic, author, language, and price

Feature: BabelWise Instructors
  Scenario: Instructor profiles
    Given the user scrolls to instructors
    Then 3 profiles with circular avatars and names appear on dark bg

Feature: BabelWise Newsletter
  Scenario: Newsletter subscribe form
    Given the user scrolls to newsletter
    Then a subscribe form is visible on dark background

Feature: BabelWise Footer
  Scenario: Footer links to Component Dock
    Given the user scrolls to the footer
    Then a link to "https://www.componentdock.com/" branded "Component Dock" exists
```

## Verification checklist

- [ ] Brand purple `#2e21df` for buttons/links
- [ ] Poppins for headings, Montserrat for body
- [ ] Square/no-radius buttons (0px)
- [ ] Hero with bg image and "get started" CTA
- [ ] Language slider with 9 items
- [ ] Course cards with language tags
- [ ] 3 instructor profiles on dark bg
- [ ] Newsletter subscribe form
- [ ] Blog section
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
