# Template: ClassNova (Education / Online Learning)

## Purpose

Recreation of ColorLib's **Eskwela** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Eskwela
- **ColorLib URL:** https://colorlib.com/wp/template/eskwela/
- **Live preview:** https://preview.colorlib.com/theme/eskwela/
- **New app name:** `classnova`
- **Package:** `@free-react-templates/classnova`

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token            | Value                                |
| ---------------- | ------------------------------------ |
| Brand primary    | `#429FFD` (bright blue)              |
| Brand secondary  | `#FFC300` (golden yellow)            |
| Accent blue      | `#5bacfd` (lighter blue)             |
| Dark             | `#000000` / `#252525`               |
| Text dark        | `#333333`                            |
| Text muted       | `#999999` / `#b3b3b3`               |
| Background light | `#f2f3f7` (light gray-blue)          |
| Background alt   | `#f0f0f0`                            |
| White            | `#ffffff`                            |
| Font heading     | `"Playfair Display", Georgia, serif` |
| Font body        | `"Open Sans", Arial, sans-serif`     |
| Button radius    | `30px` (rounded) / `100px` (pill)    |
| Card radius      | `4px`                                |
| Avatar radius    | `50%` (circular)                     |
| Link hover       | `#429FFD` (matches primary)          |

## Section structure (order from preview)

1. **Navbar** — Logo ("Eskwela"), navigation (Home, Courses, About, Events, News, Contact), "Free Trial" CTA button (blue). Dark/transparent over hero.
2. **Hero Slider** — Flexslider with 4 slides. Each slide: background image, centered white text (heading + subtext), CTA buttons ("Register Now" / "Free Trial"). Slides: "Best Online Learning System", "Online Free Course", "Education is a Key to Success", "Best Online Learning Center".
3. **About Section** — Split layout. Left: heading "Welcome to Eskwela", tabbed content ("Why choose us?", "What we do?", "Offer Services"). Right: 4 service items with icons (Professional Courses, Experienced Instructor, Practical Training, Validated Certificate).
4. **Classes Section** — "Our Classes" heading on light gray background. 6 course cards in a 3-column grid. Each: image with dark overlay + title + "Learn More" link. Courses: Developing Mobile Apps, Convert PSD to HTML, etc.
5. **Trainers Section** — Instructor profiles (colorlib-trainers). Circular avatar images with names.
6. **Events Section** — Event entries with date badges, titles, descriptions. Layout with featured image on one side.
7. **Blog Section** — "Latest Blog" on light gray background. 3 blog post cards with images, titles, meta info.
8. **Counter Section** — 4 stat counters (number + label) on dark background.
9. **Footer** — Dark background. Multiple columns: About text, Course links, Recent posts, Newsletter signup form. Social icons. Copyright bar.

## Gherkin scenarios

### Navbar
```gherkin
Feature: ClassNova Navigation

  Scenario: Navbar displays logo and links
    Given the user visits the ClassNova homepage
    Then the navbar shows the "ClassNova" logo
    And navigation links include: Home, Courses, About, Events, News, Contact
    And a "Free Trial" CTA button is visible

  Scenario: Navbar is transparent over hero
    Given the user views the top of the homepage
    Then the navbar has a transparent/dark background overlaying the hero
```

### Hero Slider
```gherkin
Feature: ClassNova Hero Slider

  Scenario: Hero slider has multiple slides
    Given the user visits the ClassNova homepage
    Then a full-width image slider is visible
    And each slide has a heading, subtext, and CTA button(s)

  Scenario: Hero slider auto-advances
    Given the user waits on the homepage
    Then the slider advances to the next slide

  Scenario: Hero slide CTAs are clickable
    Given the user views a slide
    When the user clicks "Register Now"
    Then the user is navigated to the registration page
```

### About Section
```gherkin
Feature: ClassNova About

  Scenario: About section shows welcome text and services
    Given the user scrolls to the about section
    Then a heading reads "Welcome to ClassNova"
    And tabbed content is available: "Why choose us?", "What we do?", "Offer Services"
    And 4 service items are displayed with icons

  Scenario: About tabs are switchable
    Given the user views the about section
    When the user clicks "What we do?"
    Then the content updates to show "What we do?" details
```

### Classes Section
```gherkin
Feature: ClassNova Classes

  Scenario: Six course cards are displayed
    Given the user scrolls to the classes section
    Then 6 course cards are shown in a 3-column grid
    And each card has an image, title overlay, and "Learn More" link

  Scenario: Course cards have hover effect
    Given the user hovers over a course card
    Then the card shows a hover state (overlay or scale effect)
```

### Trainers Section
```gherkin
Feature: ClassNova Trainers

  Scenario: Instructor profiles are displayed
    Given the user scrolls to the trainers section
    Then instructor profiles are shown with circular avatar images and names
```

### Events Section
```gherkin
Feature: ClassNova Events

  Scenario: Event entries are shown
    Given the user scrolls to the events section
    Then event entries are displayed with date badges, titles, and descriptions
```

### Blog Section
```gherkin
Feature: ClassNova Blog

  Scenario: Three blog posts are shown
    Given the user scrolls to the blog section
    Then 3 blog post cards are displayed
    And each has an image, title, and meta information
    And the section heading reads "Latest Blog"
```

### Counter Section
```gherkin
Feature: ClassNova Counters

  Scenario: Four stat counters are displayed
    Given the user scrolls to the counter section
    Then 4 counters are shown with numbers and labels
    And the section has a dark background
```

### Footer
```gherkin
Feature: ClassNova Footer

  Scenario: Footer has multiple columns
    Given the user scrolls to the footer
    Then columns are visible: About, Courses, Recent Posts, Newsletter

  Scenario: Footer links to Component Dock
    Given the user scrolls to the footer
    Then a link to "https://www.componentdock.com/" is present
    And it is branded as "Component Dock"

  Scenario: Newsletter signup form exists
    Given the user views the footer
    Then a newsletter email input and subscribe button are visible
```

## Verification checklist

- [ ] All sections match the original section order 1:1
- [ ] Brand color `#429FFD` used for primary buttons, links, accents
- [ ] Secondary color `#FFC300` used for highlights and badges
- [ ] Playfair Display used for headings; Open Sans for body text
- [ ] Rounded buttons (30px radius) for CTAs
- [ ] Hero slider with 4 slides, centered text, background images
- [ ] About section has tabbed content + 4 service items
- [ ] Classes section shows 6 course cards in 3-column grid
- [ ] Trainers section with circular avatars
- [ ] Events section with date badges
- [ ] Blog section with 3 post cards
- [ ] Counter section with 4 stats on dark background
- [ ] Footer with 4 columns + newsletter form + Component Dock link
- [ ] No ColorLib references in app code
- [ ] All images use `picsum.photos/seed/classnova-<n>/...` placeholders
- [ ] Typography loaded via Google Fonts in index.html
- [ ] 100% test coverage on all new code
