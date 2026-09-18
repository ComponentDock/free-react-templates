# Template: Zing (Creative Agency / Portfolio)

## Purpose

Recreation of the ColorLib "Zeta" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `zeta`
- **Source URL:** https://colorlib.com/wp/template/zeta/
- **Preview URL:** https://preview.colorlib.com/theme/zeta/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/zing`
- **Surge target:** `zing.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`styles/main_styles.css`) at https://preview.colorlib.com/theme/zeta/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#ff4200` | Buttons, accents, highlights |
| Brand accent | `#fde0db` | Light peach accent |
| Brand warm | `#ffa07f` | Salmon secondary accent |
| Dark bg | `#171717` | Header, footer, dark sections |
| Dark alt | `#111111` | Darker background variant |
| Body bg | `#FFFFFF` | Main content backgrounds |
| Muted bg | `rgba(242,244,249,0.85)` | Testimonial overlays |
| Heading text | `#0b1033` | Primary headings |
| Body text | `#1c1c1c` / `#282828` | Body copy |
| Muted text | `#6e6e6e` / `#777777` | Secondary text |
| White text | `#FFFFFF` | On dark backgrounds |
| Font primary | `Montserrat`, sans-serif | Headings, nav, buttons |
| Font secondary | `Open Sans`, sans-serif | Body copy, paragraphs |
| Font icon | `Myriad Pro Regular` | Icon fonts |
| Button shape | Square (no border-radius) | CTA buttons |
| Button bg | `#ff4200` | All CTA buttons |
| Button text | `#FFFFFF` | White on brand |
| Button size | 187×66px | Fixed button dimensions |

## Section Structure (in page order)

### 1. Navbar
- Logo (left-aligned, brand name "Zing")
- Navigation links: Services, Elements, Blog, Contact (right-aligned)
- Hamburger menu (mobile) → full-screen overlay with nav list + social icons
- Sticky/fixed on scroll

### 2. Hero Slider
- Full-width parallax background images
- OwlCarousel-style slider with 3 slides
- Each slide: headline text "Do you need" + rotating sub-heading ("modern design" / "easy to use" / "well documented")
- "Discover" CTA button (brand orange, square)
- Custom dot indicators + left/right nav arrows
- Slide content animates in

### 3. Features
- 3-column grid (equal width)
- Each feature: icon + heading + brief description
- Headings: "modern design", "easy to use", "well documented"
- Centered layout, white background

### 4. About (with Skills)
- Parallax background image section
- "About Our Project" heading
- Skills/stats section with progress bars:
  - Management, Design, Projects, Inspiration
- Dark overlay on parallax background

### 5. Testimonials
- Section heading: "Testimonials" (with decorative "z" span)
- OwlCarousel slider with 3 testimonial items
- Each item: circular user photo, name, title, quote mark, paragraph text
- Light background (`rgba(242,244,249,...)`)

### 6. Services
- Parallax background image section
- 3-column grid
- Each service: icon + heading + description
- Headings: "smart structure", "elements", "bold colors"
- White text on parallax overlay

### 7. Clients
- Logo/client slider (OwlCarousel)
- Client logos in a horizontal scroll

### 8. Contact (CTA)
- Parallax background image section
- "Let's Work Together" heading (with decorative "z" span)
- Description paragraph
- "Contact" CTA button (brand orange)

### 9. Footer
- Two-column layout:
  - Left: Copyright text
  - Right: Social icon links (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)
- Dark background (`#171717`)

## Gherkin Requirements

```gherkin
Feature: Zing — Creative Agency Template

  Background:
    Given the template is loaded at the root URL
    Then the page title contains "Zing"
    And the Component Dock footer link is visible

  Scenario: Navbar renders correctly
    Given the user is on any viewport
    Then the logo "Zing" is visible in the top-left
    And navigation links "Services", "Elements", "Blog", "Contact" are visible
    And on mobile viewports a hamburger menu button is visible

  Scenario: Hero slider displays with parallax
    Given the hero section is in the viewport
    Then a full-width parallax background image is visible
    And the headline "Do you need" is displayed
    And a "Discover" button with brand orange background is visible
    And dot indicators and navigation arrows are present

  Scenario: Hero slider advances slides
    Given the hero slider is showing slide 1
    When the user clicks the next arrow
    Then slide 2 is displayed with its heading
    And the content animates in

  Scenario: Features section shows 3 items
    Given the features section is scrolled into view
    Then 3 feature cards are visible in a row
    And each card has an icon, heading, and description

  Scenario: About section shows skills
    Given the about section is scrolled into view
    Then the heading "About Our Project" is visible
    And 4 skill categories are displayed (Management, Design, Projects, Inspiration)
    And each skill has a progress bar

  Scenario: Testimonials carousel works
    Given the testimonials section is scrolled into view
    Then the heading "Testimonials" is visible
    And at least one testimonial with photo, name, title, and quote is shown
    And carousel navigation arrows are present

  Scenario: Services section shows 3 items
    Given the services section is scrolled into view
    Then 3 service cards are visible in a row
    And each card has an icon, heading, and description

  Scenario: Contact section renders
    Given the contact section is scrolled into view
    Then the heading "Let's Work Together" is visible
    And a description paragraph is shown
    And a "Contact" CTA button is visible

  Scenario: Footer renders correctly
    Given the footer is in the viewport
    Then a copyright notice is displayed
    And social media icon links are visible (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn)
    And a link to "https://www.componentdock.com/" is present

  Scenario: Responsive layout adapts
    Given the user is on a mobile viewport (width < 768px)
    Then the navbar collapses to a hamburger menu
    And feature/service columns stack vertically
    And the footer social links remain accessible

  Scenario: Parallax effect on background sections
    Given the about, services, and contact sections exist
    Then each has a parallax background image effect
    And text overlays are readable with sufficient contrast
```

## Verification Checklist

- [ ] All 9 sections render in correct page order
- [ ] Brand color `#ff4200` used for buttons and accents
- [ ] Montserrat font loaded for headings/nav
- [ ] Open Sans font loaded for body text
- [ ] Parallax backgrounds on About, Services, Contact sections
- [ ] Hero slider cycles through 3 slides with animation
- [ ] Testimonials carousel shows 3 items with navigation
- [ ] Clients logo slider renders
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Responsive: hamburger menu on mobile, stacked columns
- [ ] Square CTA buttons (no border-radius) with brand orange
- [ ] Placeholder images via `picsum.photos/seed/zing-<n>/...`
