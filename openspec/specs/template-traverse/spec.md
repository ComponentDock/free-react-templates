# Template: Traverse (Technology / SaaS Landing Page)

## Purpose

Recreation of ColorLib's **Cruise** template — a technology/SaaS single-page
landing template with a clean, modern design using a coral accent palette and
DM Sans typography. Features a hero with dark overlay, feature cards with hover
reveal, a dark showcase section with sticky content, testimonial, and blog grid.

- **Source:** https://colorlib.com/wp/template/cruise/
- **Preview:** https://preview.colorlib.com/theme/cruise/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Technology / SaaS / Landing Page

## Design Tokens (extracted from preview CSS)

| Token                  | Value                                   | Notes                                                              |
| ---------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| `brand`                | `#ff5533`                               | Primary coral/red-orange — buttons, active nav, links, accents     |
| `brand-green`          | `#71bc42`                               | Secondary green — feature-3 check icons                            |
| `body-text`            | `#364d59`                               | Body copy and heading color                                        |
| `heading`              | `#364d59`                               | All headings (font-weight: 300)                                    |
| `black`                | `#000`                                  | Footer background, hero overlay, text-black utility                |
| `bg-white`             | `#fff`                                  | Section backgrounds, navbar, sticky state                          |
| `bg-light`             | `#f6f5f5`                               | Blog/post section background                                       |
| `bg-dark`              | `#1c2d37`                               | Section-2 (Our Features dark showcase)                             |
| `overlay-dark`         | `rgba(0,0,0,0.5)`                       | Hero cover overlay                                                 |
| `font-primary`         | `"DM Sans", sans-serif`                 | All text (weights 300, 400, 700)                                   |
| `btn-radius`           | `4px`                                   | Buttons and form inputs                                            |
| `section-padding`      | `7rem 0` (desktop) / `3rem 0` (mobile) | Site-section spacing                                               |
| `border-subtle`        | `#e6e6e6`                               | Form control borders                                               |
| `border-top-light`     | `#efefef`                               | Testimonial section top border                                     |
| `testimonial-icon`     | `#ff5533`                               | Quote icon color                                                   |
| `caption-bold`         | Bold, `#ff5533`                         | Feature-2 numbered caption (01., 02.)                              |
| `feature-card-overlay` | `#fff` at 95% opacity                   | Hover state on feature-1 cards                                     |

## Section Structure (from preview DOM)

1. **Navbar** — Centered logo "cruise" → renamed. Nav split: left (Home,
   Technology, Careers) and right (About, Blog, Contact). Transparent background
   over hero; becomes sticky white with shadow on scroll. Mobile hamburger menu
   (slide-in from right).

2. **Hero / Cover** — Full-viewport height background image with dark overlay
   (opacity 0.5). Centered white heading "We can make it together" + subtitle
   paragraph.

3. **What We Do** — White background. Centered section header with "What We do"
   label (brand color) + heading "The technology for the future generation" +
   description. 3-column feature cards: image on top, white overlay content
   (title + description + "Learn More" link) revealed on hover.

4. **Our Features (Dark Showcase)** — Dark background (#1c2d37). Section header
   "Our Features" in white. Two large feature rows: 9-column image + 3-column
   sticky sidebar content. Each sidebar has a coral numbered caption (01., 02.),
   title, and two description paragraphs. Rows alternate image/text layout.

5. **Design for the Future** — White background. Section header "Design for the
   future" + heading + description. 2×2 grid of feature items, each with a
   green check icon (icomoon), title, and description paragraph.

6. **Testimonial** — White background with subtle top border. Centered blockquote
   with coral quote icon, testimonial paragraph text, author name (black) and
   title (muted).

7. **Blog / Latest Posts** — Light background (#f6f5f5). 4-column grid of post
   cards: image thumbnail, date meta, post title, "Read More" link. Cards have
   white background with padding.

8. **Footer** — Black background. Two-column layout: left has "About Us" text
   + "Features" links list; right has "Subscribe to Newsletter" form (email
   input + subscribe button) + "Follow Us" social icons (Facebook, Twitter,
   Instagram, LinkedIn). Bottom bar with copyright + Colorlib attribution →
   replaced with Component Dock.

## Gherkin Scenarios

### Navbar

```gherkin
Feature: Navbar
  Scenario: Logo is displayed centered
    Given the page loads
    Then the navbar shows a centered logo text

  Scenario: Navigation links are split left and right
    Given the page loads on desktop viewport
    Then left nav links "Home", "Technology", "Careers" are visible
    And right nav links "About", "Blog", "Contact" are visible

  Scenario: Navbar becomes sticky on scroll
    Given the page loads
    When the user scrolls down past the hero
    Then the navbar has a white background with shadow

  Scenario: Mobile hamburger menu toggles
    Given the page loads on mobile viewport
    When the user clicks the hamburger menu icon
    Then a slide-in mobile menu appears from the right
```

### Hero / Cover

```gherkin
Feature: Hero / Cover
  Scenario: Hero headline is displayed
    Given the page loads
    Then the hero section shows the heading "We can make it together"

  Scenario: Hero has a dark overlay
    Given the page loads
    Then the hero section has a semi-transparent dark overlay on its background image

  Scenario: Hero is full viewport height
    Given the page loads
    Then the hero section occupies the full viewport height
```

### What We Do

```gherkin
Feature: What We Do
  Scenario: Section header is visible
    Given the page loads
    Then the "What We Do" section shows the label "What We do" in brand color

  Scenario: Three feature cards are displayed
    Given the page loads
    Then 3 feature cards are visible in the "What We Do" section

  Scenario: Feature cards have hover overlay
    Given the page loads
    When the user hovers over a feature card
    Then a white overlay appears with the card title, description, and "Learn More" link
```

### Our Features (Dark Showcase)

```gherkin
Feature: Our Features Dark Showcase
  Scenario: Dark section is visible
    Given the page loads
    Then a dark-background section with heading "Our Features" is visible

  Scenario: Two feature rows are displayed
    Given the page loads
    Then 2 feature rows are visible with a large image and sticky sidebar content

  Scenario: Each feature row has a numbered caption
    Given the page loads
    Then each feature row shows a coral numbered caption (01., 02.)
```

### Design for the Future

```gherkin
Feature: Design for the Future
  Scenario: Section header is visible
    Given the page loads
    Then the section shows the label "Design for the future" in brand color

  Scenario: Four feature items are displayed in a 2x2 grid
    Given the page loads
    Then 4 feature items are visible with green check icons, titles, and descriptions
```

### Testimonial

```gherkin
Feature: Testimonial
  Scenario: Testimonial blockquote is displayed
    Given the page loads
    Then a centered blockquote with a coral quote icon is visible

  Scenario: Testimonial shows author info
    Given the page loads
    Then the testimonial shows an author name and title
```

### Blog / Latest Posts

```gherkin
Feature: Blog Posts
  Scenario: Four post cards are displayed
    Given the page loads
    Then 4 blog post cards are visible in a grid

  Scenario: Each post card has image, date, title, and link
    Given the page loads
    Then each post card shows a thumbnail image, date meta, title, and "Read More" link

  Scenario: Blog section has light background
    Given the page loads
    Then the blog section has a light gray background
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer has dark background
    Given the page loads
    Then the footer has a black background

  Scenario: Footer has About Us and Features columns
    Given the page loads
    Then the footer shows an "About Us" text block and a "Features" links list

  Scenario: Footer has newsletter subscription form
    Given the page loads
    Then a newsletter subscription form with email input and subscribe button is visible

  Scenario: Footer has social icons
    Given the page loads
    Then social media icon links (Facebook, Twitter, Instagram, LinkedIn) are visible

  Scenario: Footer has Component Dock attribution
    Given the page loads
    Then the footer bottom bar shows a link to "https://www.componentdock.com/" branded as "Component Dock"
```

## Verification Checklist

- [ ] Navbar: centered logo, split nav links, sticky on scroll, mobile hamburger
- [ ] Hero: full-viewport, dark overlay, centered heading + subtitle
- [ ] What We Do: section header, 3 feature cards with hover overlay
- [ ] Our Features: dark bg, 2 rows with image + sticky sidebar + numbered captions
- [ ] Design for the Future: 2×2 grid with green check icons
- [ ] Testimonial: centered blockquote with coral quote icon + author
- [ ] Blog: 4-column post cards on light background
- [ ] Footer: black bg, About Us + Features, newsletter form, social icons, Component Dock link
- [ ] Font: DM Sans via Google Fonts
- [ ] Brand color #ff5533 applied consistently
- [ ] No references to ColorLib in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Build succeeds, no TypeScript errors
