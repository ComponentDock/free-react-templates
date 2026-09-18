# Template: Zenbloom (Yoga & Wellness)

## Purpose

Recreation of ColorLib's **Yogafun** template as a modern React single-page
application.

- **Source**: https://colorlib.com/wp/template/yogafun/
- **Preview**: https://preview.colorlib.com/theme/yogafun/
- **New name**: `zenbloom` (apps/zenbloom, @free-react-templates/zenbloom)
- **Category**: Yoga / Wellness / Fitness
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview)

### Colors

| Token              | Hex       | Usage                                  |
| ------------------ | --------- | -------------------------------------- |
| brand-primary      | `#71774b` | Olive green — buttons, accents, links  |
| brand-dark         | `#535837` | Darker olive — hover states            |
| brand-darker       | `#44482d` | Deep olive — hover/focus               |
| brand-light        | `#b0b68b` | Light olive tint                       |
| brand-muted        | `#8f965f` | Mid-olive accents                      |
| text-dark          | `#212529` | Body text                              |
| text-muted         | `#6c757d` | Secondary/muted text                   |
| bg-white           | `#fff`    | Primary background                     |
| bg-light           | `#f8f9fa` | Alternating section backgrounds        |
| black              | `#000`    | Overlay, strong text                   |

### Typography

| Role         | Font        | Weight       | Notes                         |
| ------------ | ----------- | ------------ | ----------------------------- |
| Heading/Logo | Montserrat  | 700 (bold)   | Sans-serif display            |
| Body         | Oxygen      | 400 (normal) | Sans-serif, clean readability |
| Fallback     | sans-serif  | —            | System font stack             |

### Border radius

- Buttons: `0.25rem` (4px) — Bootstrap-style soft corners
- Cards: `0` — sharp edges
- Images: `0` (via `.frame` clipping)

### Section backgrounds

| Section       | Background                                  |
| ------------- | ------------------------------------------- |
| Hero/Slider   | Full-width background image + dark overlay   |
| Features grid | White (`#fff`)                              |
| Do Yoga Today | White with left image + right text           |
| Perfect Yoga  | Light (`#f8f9fa` / `.bg-light`)             |
| Yoga Classes  | White with 6-card grid                      |
| Testimonials  | White, horizontal card carousel             |
| Counter       | Olive green (`bg-primary`) — dark section   |
| Blog          | White, 2-column post cards                  |
| Subscribe     | Light background with inner cover overlay   |
| Footer        | Dark (`#212529`) — 4-column layout         |

## Section structure (DOM order)

1. **Navbar** — Dark background, logo left ("Zenbloom"), nav links right:
   Home, About, Classes (dropdown: Health Mind Meditation, Mind Balance Yoga,
   Body Strength Pilates), Blog, Contact. Hamburger on mobile.
2. **Hero Slider** — Full-viewport background image with dark overlay.
   Centered heading: "Lose Yourself In Ambience & Atmosphere".
   "Watch Video" CTA button (play icon wrapped in rounded border).
   Slider dots/indicators at bottom. Animated entrance.
3. **Features Grid** — 3-column layout. Left column: 2 stacked feature items
   (icon + heading + description). Center: large feature image with frame.
   Right column: 2 stacked feature items. Items: Chakra, Lotus, Chakra 2, Yoga.
4. **Do Yoga Today** — Two-column section. Left: text content with
   heading "Do Yoga Today For Better Tomorrow", paragraph, "Read More" link.
   Right: scaled/parallax image with frame overlay.
5. **Perfect Yoga Style** — Full-width section on light background.
   Heading "Perfect Yoga Style", description text, possibly additional images.
6. **Yoga Classes** — Grid of 6 class cards. Each card: class image
   (with hover zoom effect), heading below. Classes: Yoga Barre, Yoga Core,
   Yoga For Health, Yoga For Beginners, Yoga For All, Yoga Restore.
7. **Testimonials** — Horizontal carousel/slider. Each slide: avatar image,
   person name, role/title, quote text. People: John Smith, Joshua Darren, etc.
   Navigation arrows for carousel.
8. **Counter/Social** — Olive-green background section. 3-column layout with
   icons: "Chat With Us" (message icon), "Happy Customers" (heart/people),
   "Fast Support" (bolt). Each with icon + heading + short description.
9. **Blog** — "Our Blog" heading. 2-column grid of blog post cards.
   Each card: image, date, title ("How to do advance yoga positions"),
   excerpt text, "Read More" link.
10. **Subscribe** — Newsletter section. Heading "Subscribe", description text,
    email input field + submit button. Light background.
11. **Footer** — Dark background, 4-column layout:
    - Column 1: "About The Zenbloom" + description
    - Column 2: "Contact Info" (address, phone, email)
    - Column 3: "Quick Links" (Terms of Use, Disclaimers)
    - Bottom bar: Copyright + "Made with Component Dock" link

## Gherkin requirements

### Feature: Navbar

```gherkin
Scenario: Desktop navbar displays all navigation links
  Given the user views the page on a desktop viewport
  Then the navbar shows the "Zenbloom" logo on the left
  And links "About", "Classes", "Blog", "Contact" are visible
  And "Classes" has a dropdown with sub-items

Scenario: Mobile navbar shows hamburger menu
  Given the user views the page on a mobile viewport
  Then the hamburger icon is visible
  When the user taps the hamburger icon
  Then the navigation links expand in a dropdown menu

Scenario: Classes dropdown opens on hover/click
  Given the user is on desktop
  When the user hovers over "Classes"
  Then a dropdown shows "Health Mind Meditation", "Mind Balance Yoga", "Body Strength Pilates"
```

### Feature: Hero Section

```gherkin
Scenario: Hero displays heading and CTA
  Given the hero section is visible
  Then the heading reads "Lose Yourself In Ambience & Atmosphere"
  And a "Watch Video" button is displayed with a play icon
  And the background is a full-width image with dark overlay

Scenario: Hero is responsive
  Given the user views on mobile
  Then the hero fills the viewport width
  And the heading text scales down appropriately
```

### Feature: Features Grid

```gherkin
Scenario: Features grid shows 4 items around a central image
  Given the features section is visible
  Then 4 feature items are displayed (Chakra, Lotus, Chakra 2, Yoga)
  And each feature item has an icon, heading, and description
  And a central feature image is displayed between the items

Scenario: Features grid is responsive
  Given the user views on mobile
  Then features stack vertically
  And the central image appears above or below the feature items
```

### Feature: Do Yoga Today

```gherkin
Scenario: Do Yoga Today section displays content
  Given the section is visible
  Then the heading reads "Do Yoga Today For Better Tomorrow"
  And a paragraph of descriptive text is shown
  And a "Read More" link is present
  And a scaled image with frame overlay is shown alongside

Scenario: Do Yoga Today is responsive
  Given the user views on mobile
  Then the image and text stack vertically
```

### Feature: Perfect Yoga Style

```gherkin
Scenario: Perfect Yoga Style section renders
  Given the section is visible
  Then the heading reads "Perfect Yoga Style"
  And descriptive text is shown below the heading
  And the section has a light background
```

### Feature: Yoga Classes

```gherkin
Scenario: Yoga Classes shows 6 class cards
  Given the yoga classes section is visible
  Then 6 class cards are displayed in a grid
  And each card has an image and heading
  And class names are: Yoga Barre, Yoga Core, Yoga For Health,
      Yoga For Beginners, Yoga For All, Yoga Restore

Scenario: Class card hover effect
  Given the user hovers over a class card
  Then the card image zooms in slightly

Scenario: Yoga Classes grid is responsive
  Given the user views on mobile
  Then class cards stack in a single or two-column grid
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials carousel shows quotes
  Given the testimonials section is visible
  Then the heading reads "Testimonial"
  And testimonial slides show avatar, name, role, and quote text
  And carousel navigation arrows are present

Scenario: User navigates testimonials
  Given the testimonials carousel is visible
  When the user clicks the next arrow
  Then the next testimonial slides into view
```

### Feature: Counter Section

```gherkin
Scenario: Counter section displays three items
  Given the counter section is visible
  Then 3 items are shown: "Chat With Us", "Happy Customers", "Fast Support"
  And each item has an icon and description text
  And the section has an olive green background
```

### Feature: Blog

```gherkin
Scenario: Blog section shows posts
  Given the blog section is visible
  Then the heading reads "Our Blog"
  And at least 2 blog post cards are displayed
  And each card has an image, date, title, excerpt, and "Read More" link

Scenario: Blog cards are responsive
  Given the user views on mobile
  Then blog cards stack vertically
```

### Feature: Subscribe

```gherkin
Scenario: Subscribe section has email input
  Given the subscribe section is visible
  Then the heading reads "Subscribe"
  And an email input field is present
  And a submit button is present
```

### Feature: Footer

```gherkin
Scenario: Footer shows four columns
  Given the footer is visible
  Then "About The Zenbloom" column has description text
  And "Contact Info" column shows address, phone, email
  And "Quick Links" column shows Terms of Use and Disclaimers
  And a copyright line is shown at the bottom
  And the footer links to Component Dock

Scenario: Footer is responsive
  Given the user views on mobile
  Then footer columns stack vertically
```

## Verification checklist

- [ ] Navbar: logo + links + dropdown + mobile hamburger
- [ ] Hero: background image, dark overlay, heading, Watch Video CTA
- [ ] Features grid: 4 items + central image, responsive stacking
- [ ] Do Yoga Today: two-column layout, heading, text, image with frame
- [ ] Perfect Yoga Style: light bg, heading, description
- [ ] Yoga Classes: 6 cards in grid, hover zoom, responsive
- [ ] Testimonials: carousel with avatars, names, quotes, nav arrows
- [ ] Counter section: olive green bg, 3 items with icons
- [ ] Blog: 2-column post cards, dates, excerpts
- [ ] Subscribe: heading, email input, submit button
- [ ] Footer: 4 columns, Component Dock link, responsive
- [ ] Design tokens: Oxygen + Montserrat fonts, olive green palette (#71774b)
- [ ] Responsive: all sections stack on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
