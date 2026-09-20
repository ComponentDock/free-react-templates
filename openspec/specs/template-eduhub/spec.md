# Template: EduHub (Education / University)

## Purpose

Recreation of ColorLib's **OneSchool** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** OneSchool
- **ColorLib URL:** https://colorlib.com/wp/template/oneschool/
- **Live preview:** https://preview.colorlib.com/theme/oneschool/
- **New app name:** `eduhub`
- **Package:** `@free-react-templates/eduhub`

## Design tokens

| Token | Value |
| --- | --- |
| Brand primary | `#7971ea` (soft purple) |
| Text dark | `#000000` / `#25262a` |
| Text muted | `#343a40` / `#adb5bd` |
| Background light | `#f4f5f9` / `#f8f9fa` |
| White | `#ffffff` |
| Font | `"Muli", sans-serif` |
| Button radius | `30px` (rounded) |
| Card radius | `7px` |
| Avatar radius | `50%` (circular) |

## Section structure

1. **Navbar** — Logo ("OneSchool"), nav (Home, Courses, Programs, Teachers, Contact Us)
2. **Hero** — Background image, heading "Learn From The Expert", "Admission Now" button
3. **Sign Up** — Sign up section
4. **Courses** — "Courses" heading, 6 course cards (Law of Physics, Logo Design, JS Programming) with prev/next navigation
5. **Programs** — "Our Programs" heading
6. **Stats** — "We Are Excellent In Education" + 2 stats (22,931 Yearly Graduates, 150 Universities)
7. **Testimonials** — "Strive for Excellent" carousel with stats
8. **Education** — "Education is life" with stats
9. **Teachers** — "Our Teachers" — 4 profiles (Benjamin Stone, Katleen Stone, Sadie White, Jerome Jensen)
10. **Why Choose Us** — 6 reason cards (Top Professionals, Expand Knowledge, etc.)
11. **Footer** — White bg, Component Dock link

## Gherkin scenarios

```gherkin
Feature: EduHub Navigation
  Scenario: Navbar shows logo and links
    Given the user visits the EduHub homepage
    Then the navbar shows "EduHub" logo
    And links: Home, Courses, Programs, Teachers, Contact Us

Feature: EduHub Hero
  Scenario: Hero displays headline and CTA
    Given the user visits the homepage
    Then "Learn From The Expert" heading is shown
    And an "Admission Now" button is visible

Feature: EduHub Courses
  Scenario: Course carousel displayed
    Given the user scrolls to courses
    Then 6 course cards are shown with prev/next navigation

Feature: EduHub Programs
  Scenario: Programs section shown
    Given the user scrolls to programs
    Then "Our Programs" heading is visible

Feature: EduHub Stats
  Scenario: Education stats displayed
    Given the user scrolls to stats
    Then "We Are Excellent In Education" heading and stats are shown

Feature: EduHub Teachers
  Scenario: Teacher profiles shown
    Given the user scrolls to teachers
    Then 4 teacher profiles with names and circular avatars appear

Feature: EduHub Why Choose Us
  Scenario: Reasons displayed
    Given the user scrolls to why choose us
    Then 6 reason cards with icons and text are shown

Feature: EduHub Footer
  Scenario: Footer links to Component Dock
    Given the user scrolls to the footer
    Then a link to "https://www.componentdock.com/" branded "Component Dock" exists
```

## Verification checklist

- [ ] Brand purple `#7971ea` for buttons/links
- [ ] Muli font throughout
- [ ] 30px rounded buttons, 7px card radius
- [ ] Hero with bg image and "Admission Now" CTA
- [ ] 6 course cards with navigation
- [ ] Programs section
- [ ] Stats section with education numbers
- [ ] 4 teacher profiles
- [ ] 6 "Why Choose Us" reason cards
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
