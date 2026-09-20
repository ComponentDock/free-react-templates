# Template: MindSpark (Education / Online Learning)

## Purpose

Recreation of ColorLib's **Knowledge** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Knowledge
- **ColorLib URL:** https://colorlib.com/wp/template/knowledge/
- **Live preview:** https://preview.colorlib.com/theme/knowledge/
- **New app name:** `mindspark`
- **Package:** `@free-react-templates/mindspark`

## Design tokens

| Token | Value |
| --- | --- |
| Brand primary | `#4586ff` (bright blue) |
| Dark bg | `#000000` / `#252525` / `#302a39` |
| Text muted | `#999999` / `#b3b3b3` |
| White | `#ffffff` |
| Accent gold | `#F7AF1D` |
| Font | `"Rubik", Arial, sans-serif` |
| Button radius | `30px` (rounded) |
| Card radius | `4px` |
| Avatar radius | `50%` (circular) |

## Section structure

1. **Navbar** — Logo ("Knowledge"), nav (Home, Courses, Teachers, About, Events, News, Contact), "Get started" button
2. **Hero Slider** — Flexslider with 3 slides: "Online Free Course", "Education is a Key to Success", "Best Online Learning Center". Each with "Start Learning Now!" CTA
3. **Categories** — 6 course category items (Web Dev, Mobile Dev, Science Data, Graphic Design, Media Courses, User Interface) + "Discover Courses" link
4. **Popular Courses** — "Popular Online Courses" heading, 5 course cards (Developing Mobile Apps Using Ruby on Rails)
5. **About** — About section with text and images
6. **Counters** — 4 stat counters
7. **Trainers** — Instructor profiles (circular avatars)
8. **Events** — 4 event entries with dates
9. **Blog** — "Latest Blog" on light gray, 3 blog post cards
10. **Footer** — Dark footer with columns, Component Dock link

## Gherkin scenarios

```gherkin
Feature: MindSpark Navigation
  Scenario: Navbar shows logo and links
    Given the user visits the MindSpark homepage
    Then the navbar shows "MindSpark" logo
    And links: Home, Courses, Teachers, About, Events, News, Contact
    And a "Get started" button is visible

Feature: MindSpark Hero
  Scenario: Hero slider has multiple slides
    Given the user visits the homepage
    Then a slider shows headings and "Start Learning Now!" CTAs

Feature: MindSpark Categories
  Scenario: Six course categories displayed
    Given the user scrolls past the hero
    Then 6 category items with icons are shown
    And a "Discover Courses" link exists

Feature: MindSpark Courses
  Scenario: Popular courses shown
    Given the user scrolls to courses
    Then "Popular Online Courses" heading is visible
    And 5 course cards are displayed

Feature: MindSpark About
  Scenario: About section with images
    Given the user scrolls to about
    Then the about section shows text and images

Feature: MindSpark Counters
  Scenario: Four stat counters
    Given the user scrolls to counters
    Then 4 counters with numbers and labels appear

Feature: MindSpark Trainers
  Scenario: Instructor profiles
    Given the user scrolls to trainers
    Then profiles with circular avatars are shown

Feature: MindSpark Events
  Scenario: Event entries displayed
    Given the user scrolls to events
    Then 4 event entries with dates are shown

Feature: MindSpark Blog
  Scenario: Blog posts shown
    Given the user scrolls to blog
    Then 3 blog post cards are displayed

Feature: MindSpark Footer
  Scenario: Footer links to Component Dock
    Given the user scrolls to the footer
    Then a link to "https://www.componentdock.com/" branded "Component Dock" exists
```

## Verification checklist

- [ ] Brand blue `#4586ff` for buttons/links
- [ ] Dark backgrounds for hero/footer sections
- [ ] Rubik font throughout
- [ ] 30px rounded buttons
- [ ] Hero slider with 3 slides
- [ ] 6 category items
- [ ] 5 popular course cards
- [ ] About section with images
- [ ] 4 stat counters
- [ ] Trainer profiles with circular avatars
- [ ] 4 event entries
- [ ] Blog section with 3 posts
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
