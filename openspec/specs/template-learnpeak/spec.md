# Template: LearnPeak (Education / Online Courses)

## Purpose

Recreation of ColorLib's **Elearn** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Elearn
- **ColorLib URL:** https://colorlib.com/wp/template/elearn/
- **Live preview:** https://preview.colorlib.com/theme/elearn/
- **New app name:** `learnpeak`
- **Package:** `@free-react-templates/learnpeak`

## Design tokens

Extracted from the live preview CSS (`styles/main_styles.css`):

| Token            | Value                          |
| ---------------- | ------------------------------ |
| Brand primary    | `#ff6600` (orange)             |
| Brand secondary  | `#ff8a00` (lighter orange)     |
| Hover accent     | `#ffae00` (golden orange)      |
| Dark background  | `#2c2b31` (near-black purple)  |
| Dark alt         | `#44425a` (dark slate)         |
| Text muted       | `#6c6a74` (warm gray)          |
| Text light       | `#918ea0` (soft lavender gray) |
| Background light | `#f2f1f8` (faint lavender)     |
| White            | `#FFFFFF`                      |
| Font family      | `"Montserrat", sans-serif`     |
| Button height    | `47px` (fixed height CTA)      |
| Button radius    | `0` (sharp/square corners)     |
| Avatar radius    | `50%` (circular)               |

## Section structure (order from preview)

1. **Top Bar** — Register/Login links, dark background bar at top.
2. **Header/Navbar** — Logo ("learn"), navigation (Home, Courses, Instructors, Events, Blog, Contact), search icon. Dark background matching top bar.
3. **Home Slider** — Full-width carousel with 3 slides, each having: background image, centered logo, heading, subtitle, and two CTA buttons ("learn more" / "see all courses"). Orange buttons on dark overlay.
4. **Featured Course** — Split layout: left side has course tag, price, title ("Online Literature Course"), description text, author avatar+name, sales count; right side has course background image. Light background.
5. **Courses Carousel** — Heading "Choose your course" + search button. 3 course cards in an Owl Carousel: each with image, tag (Featured/New), title, author avatar+name, footer with stats. Navigation arrows. Light background.
6. **Milestones/Counters** — 4 milestone counters in a row (icon + number + label). Dark background section.
7. **News/Blog** — 3 blog post previews with date badge, image, title, author. Light background.
8. **Join CTA** — "Join Our Platform Today" heading with "register now" button. Orange accent.
9. **Footer** — 4 columns: About (logo + social icons), Links, Courses, Contact (address, phone, email). Dark background.

## Gherkin scenarios

### Top Bar + Navbar
```gherkin
Feature: LearnPeak Navigation

  Scenario: Top bar shows auth links
    Given the user visits the LearnPeak homepage
    Then "Register" and "Login" links are visible in the top bar

  Scenario: Main nav has correct links
    Given the user visits the LearnPeak homepage
    Then the navbar contains: Home, Courses, Instructors, Events, Blog, Contact
    And the logo text reads "learn"
```

### Home Slider
```gherkin
Feature: LearnPeak Home Slider

  Scenario: Hero slider displays three slides
    Given the user visits the LearnPeak homepage
    Then a full-width image slider is visible
    And each slide has a heading, subtitle, and two CTA buttons

  Scenario: Slider is auto-advancing
    Given the user waits on the homepage
    Then the slider advances to the next slide automatically

  Scenario: Slider navigation works
    Given the user views the homepage
    When the user clicks the next arrow
    Then the slider advances to the next slide
```

### Featured Course
```gherkin
Feature: LearnPeak Featured Course

  Scenario: Featured course section shows details
    Given the user scrolls past the hero
    Then a featured course section is visible
    And it displays a course tag, title, price, description, and author info

  Scenario: Featured course has split layout
    Given the user views the featured course section
    Then the left column has course text details
    And the right column has a course background image
```

### Courses Carousel
```gherkin
Feature: LearnPeak Courses

  Scenario: Course carousel displays courses
    Given the user scrolls to the courses section
    Then a heading reads "Choose your course"
    And 3 course cards are visible in a carousel
    And each card has an image, tag, title, and author

  Scenario: Course carousel navigation works
    Given the user views the courses section
    When the user clicks the next arrow
    Then the carousel advances to the next set of courses
```

### Milestones
```gherkin
Feature: LearnPeak Milestones

  Scenario: Four counters are displayed
    Given the user scrolls to the milestones section
    Then 4 milestone counters are shown in a row
    And each has an icon, number, and label
    And the section has a dark background
```

### News/Blog
```gherkin
Feature: LearnPeak News

  Scenario: Three blog posts are shown
    Given the user scrolls to the news section
    Then 3 blog post previews are displayed
    And each has a date badge, image, title, and author name
```

### Join CTA
```gherkin
Feature: LearnPeak Join CTA

  Scenario: CTA section prompts registration
    Given the user scrolls to the join section
    Then a heading reads "Join Our Platform Today"
    And a "register now" button is visible
```

### Footer
```gherkin
Feature: LearnPeak Footer

  Scenario: Footer has four columns
    Given the user scrolls to the footer
    Then 4 columns are visible: About, Links, Courses, Contact

  Scenario: Footer links to Component Dock
    Given the user scrolls to the footer
    Then a link to "https://www.componentdock.com/" is present
    And it is branded as "Component Dock"

  Scenario: Footer shows contact info
    Given the user scrolls to the footer
    Then address, phone number, and email are displayed
```

## Verification checklist

- [ ] All sections match the original section order 1:1
- [ ] Brand color `#ff6600` used for primary buttons and CTAs
- [ ] Hover color `#ffae00` on interactive elements
- [ ] Dark sections use `#2c2b31` background
- [ ] Montserrat font used throughout (single font family)
- [ ] Square/sharp-cornered buttons (no border-radius)
- [ ] Circular avatars (50% border-radius)
- [ ] Home slider has 3 slides with centered content
- [ ] Featured course has split layout (text left, image right)
- [ ] Courses carousel with 3 cards and navigation arrows
- [ ] 4 milestone counters in dark background section
- [ ] 3 blog post previews with date badges
- [ ] Join CTA with "register now" button
- [ ] Footer has 4 columns + Component Dock link
- [ ] No ColorLib references in app code
- [ ] All images use `picsum.photos/seed/learnpeak-<n>/...` placeholders
- [ ] Typography loaded via Google Fonts in index.html
- [ ] 100% test coverage on all new code
