# Template: SmartPath (Education / Online Courses)

## Purpose

Recreation of ColorLib's **Edusmart** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template:** Edusmart
- **ColorLib URL:** https://colorlib.com/wp/template/edusmart/
- **Live preview:** https://preview.colorlib.com/theme/edusmart/
- **New app name:** `smartpath`
- **Package:** `@free-react-templates/smartpath`

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token            | Value                                             |
| ---------------- | ------------------------------------------------- |
| Brand primary    | `#00aee0` (cyan-blue)                             |
| Brand secondary  | `#f8b600` (golden yellow)                         |
| Accent teal      | `#4cd3e3` (light teal)                            |
| Accent blue      | `#38a4ff` (bright blue)                           |
| Text dark        | `#222222`                                         |
| Text muted       | `#777777`                                         |
| Background light | `#f9f9ff` (very faint blue-white)                 |
| White            | `#ffffff`                                         |
| Font heading     | `"Montserrat", sans-serif`                        |
| Font body        | `"Crimson Text", serif`                           |
| Button radius    | `45px` (pill-shaped primary buttons)              |
| Card radius      | `5px` (course cards, department items)            |
| Primary gradient | `linear-gradient(90deg, #00aee0 0%, #00fedc 100%)` |
| Banner bg        | Dark image overlay (hero section)                 |

## Section structure (order from preview)

1. **Navbar** — top bar (phone, email, login) + main nav (Home, About, Pages, Courses, Elements, Blog, Contact). Navbar-light style with brand logo.
2. **Hero/Banner** — full-width dark image overlay, heading "We Rank the Best Courses on the Web", search course bar with button. Background image with overlay.
3. **Feature Bar** — 3 feature cards in a row (icons + short text) overlapping the hero (negative margin), positioned over the banner.
4. **Department Area** — "Browse by Department" — grid of department/category buttons (New Classes, Top Courses, Full E-Books, Languages, Business, Literature, Software, Design, Coaching, Development) on a light background.
5. **Popular Courses** — heading "Popular Courses", 4 course cards with image overlay, title, price/meta, description text. Light background (`#f9f9ff`).
6. **Testimonials** — carousel of testimonials with avatar thumbnails, quote text, heading. Section gap spacing.
7. **Registration CTA** — full-width gradient background (`#00aee0`→`#00fedc`), heading + subtext + CTA button. Prominent call-to-action.
8. **Footer** — dark footer with 5 columns (About, Newsletter, Courses, Links, Instagram feed), social icons, copyright bar at bottom. Links to Component Dock.

## Gherkin scenarios

### Navbar
```gherkin
Feature: SmartPath Navigation

  Scenario: Top bar displays contact info
    Given the user visits the SmartPath homepage
    Then the top bar shows a phone number and email address
    And a "Login" link is visible in the top bar

  Scenario: Main navigation links are present
    Given the user visits the SmartPath homepage
    Then the navbar contains links: Home, About, Pages, Courses, Elements, Blog, Contact
    And the navbar is sticky on scroll

  Scenario: Mobile hamburger menu works
    Given the viewport is 768px wide
    When the user taps the hamburger icon
    Then the mobile navigation menu expands
```

### Hero / Banner
```gherkin
Feature: SmartPath Hero Banner

  Scenario: Hero displays headline and search
    Given the user visits the SmartPath homepage
    Then a heading reads "We Rank the Best Courses on the Web"
    And a search input with "Search" button is visible

  Scenario: Hero has background image with overlay
    Given the user visits the SmartPath homepage
    Then the hero section has a dark background image with overlay
    And the text is white and readable against the overlay
```

### Feature Bar
```gherkin
Feature: SmartPath Feature Bar

  Scenario: Three features are displayed
    Given the user visits the SmartPath homepage
    Then 3 feature items appear below the hero
    And each feature has an icon and descriptive text
```

### Department Area
```gherkin
Feature: SmartPath Department Area

  Scenario: Department categories are shown
    Given the user visits the SmartPath homepage
    Then 10 department category items are displayed
    And categories include: New Classes, Top Courses, Full E-Books, Languages, Business, Literature, Software, Design, Coaching, Development

  Scenario: Department items are clickable
    Given the user hovers over a department category
    Then the item shows a hover state (background color change)
```

### Popular Courses
```gherkin
Feature: SmartPath Popular Courses

  Scenario: Course grid shows 4 courses
    Given the user visits the SmartPath homepage
    Then 4 course cards are displayed in a grid
    And each card has an image, title, and price/meta info

  Scenario: Course cards have hover overlay
    Given the user hovers over a course card
    Then an overlay effect appears on the card image
```

### Testimonials
```gherkin
Feature: SmartPath Testimonials

  Scenario: Testimonial carousel renders
    Given the user visits the SmartPath homepage
    Then a testimonials section is visible
    And testimonials display in a carousel/slider
    And each testimonial has avatar, name, and quote

  Scenario: Testimonial carousel is navigable
    Given the user views the testimonials
    When the user clicks a thumbnail or arrow
    Then the carousel advances to the next testimonial
```

### Registration CTA
```gherkin
Feature: SmartPath Registration CTA

  Scenario: CTA section has gradient background
    Given the user scrolls to the registration area
    Then the section has a cyan-to-teal gradient background
    And a heading and call-to-action button are visible
```

### Footer
```gherkin
Feature: SmartPath Footer

  Scenario: Footer displays five columns
    Given the user scrolls to the footer
    Then 5 footer columns are visible: About, Newsletter, Courses, Links, Instagram

  Scenario: Footer links to Component Dock
    Given the user scrolls to the footer
    Then a link to "https://www.componentdock.com/" is present
    And it is branded as "Component Dock"

  Scenario: Footer social icons are present
    Given the user scrolls to the footer
    Then social media icon links are visible in the footer
```

## Verification checklist

- [ ] All sections match the original section order 1:1
- [ ] Brand color `#00aee0` used for primary buttons, CTAs, accents
- [ ] Secondary color `#f8b600` used for price tags, highlights
- [ ] Montserrat used for headings; Crimson Text for body text
- [ ] Pill-shaped buttons (45px radius) for primary CTAs
- [ ] Hero has dark image overlay with white text
- [ ] Feature bar overlaps hero with negative margin
- [ ] Department area shows all 10 categories
- [ ] Popular Courses grid shows 4 cards with image overlays
- [ ] Testimonials rendered as a carousel
- [ ] Registration CTA has gradient background
- [ ] Footer has 5 columns + social icons + Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md/PR)
- [ ] All images use `picsum.photos/seed/smartpath-<n>/...` placeholders
- [ ] Typography loaded via Google Fonts `<link>` in index.html
- [ ] 100% test coverage on all new code
