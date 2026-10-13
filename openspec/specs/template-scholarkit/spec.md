# Template: Scholarkit (Education / Online Learning)

## Purpose

Recreation of ColorLib "Eskwela" — a free online learning website template for
web courses, classes, schools and universities.

- **Source slug:** `eskwela`
- **Preview URL:** https://preview.colorlib.com/theme/eskwela/
- **ColorLib page:** https://colorlib.com/wp/template/eskwela/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/eskwela-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Surge target:** `scholarkit.free.componentdock.com`

## Design tokens (extracted from preview CSS)

| Token              | Value                          | Notes                                       |
| ------------------ | ------------------------------ | ------------------------------------------- |
| Brand color        | `#429FFD` (blue)               | Buttons, links, selection, active nav, CTA   |
| Accent hover       | `#5bacfd` (lighter blue)       | Hover states on buttons                     |
| Body font          | `"Open Sans", Arial, sans-serif` | Weight 300 body, 400/700/800 headings     |
| Heading font       | `"Playfair Display", Georgia, serif` | h1–h6 only, weight 400              |
| Body text color    | `gray` (default)               | Paragraph text                              |
| Heading text color | `#000` (black)                 | h1–h6                                       |
| Upper menu bg      | `#1E2022` (dark charcoal)      | Top bar with social icons + "Apply Now"     |
| Nav background     | `#fff` (white)                 | Main navigation bar                         |
| Section bg grey    | `#f2f3f7` (light grey)         | "Our Classes" section                       |
| Button radius      | `100px` (pill)                 | CTA buttons, border-radius: 100px           |
| Button padding     | `14px 30px`                    | Primary buttons                             |
| Card border radius | `4px`                          | Dropdown menus                              |
| Counter overlay bg | `rgba(0,0,0,0.3)`             | Parallax counter section                    |
| Newsletter bg      | image-based with overlay       | Subscribe section                           |
| Testimonial bg     | image-based with overlay       | "What Students Say" section                 |
| Page background    | `#fff`                         | White                                       |

## Section structure (from live preview DOM analysis)

1. **Upper menu bar** — dark bg (#1E2022), welcome text left, social icons (twitter/facebook/linkedin/dribbble) + "Apply Now" button right. Hidden on mobile.
2. **Main navbar** — logo "Scholarkit" left, nav links right (Home, Courses dropdown, About, Events, News, Contact, "Free Trial" CTA pill button).
3. **Hero slider** — full-width flexslider with 4 slides, each with background image + dark overlay, centered heading + primary CTA button ("Register Now" / "Free Trial").
4. **Intro cards** — 3-column row: "Learn Courses Online" (icon + link), "Online Library Store" (icon + link), "50% off" promo card (colored bg, different style).
5. **About section** — heading "Welcome to Scholarkit" + paragraph left; accordion FAQ right (3 panels: default open, collapsed, collapsed).
6. **Services** — 4-column grid: Professional Courses, Experienced Instructor, Practical Training, Validated Certificate. Each with icon + description.
7. **Counter section** — dark parallax background, 4 counters: Books/Courses count, Students count, Faculty count, Countries count. Number animation on scroll.
8. **Our Classes** — heading + 6 course cards in 3x2 grid. Each card: image, price tag, title, description, "Learn More" link with arrow icon.
9. **Testimonials** — image background + overlay, "What Students Say" heading, owl-carousel with testimonial slides (text + avatar).
10. **Newsletter** — image background + overlay, "Subscribe Newsletter" heading, email input + "Subscribe Now" button.
11. **Footer** — 4-column: About + social icons, Quick Links, Recent Posts (3 blog cards with thumbnails), Contact Info (address, phone, email, location).
12. **Footer bottom** — copyright with heart icon + "Colorlib" link → replaced with Component Dock link.

## Requirements

### Feature: Scholarkit template behaviour

#### Scenario: Upper menu bar renders correctly

- **GIVEN** the page loads
- **THEN** the upper menu bar is visible with dark background (#1E2022)
- **AND** it shows "Welcome to Scholarkit" text on the left
- **AND** social icon links (Twitter, Facebook, LinkedIn, Dribbble) are on the right
- **AND** an "Apply Now" text link is present

#### Scenario: Main navbar renders correctly

- **GIVEN** the page loads
- **THEN** the navbar is visible with white background
- **AND** the logo "Scholarkit" is displayed on the left
- **AND** nav links "Home", "Courses", "About", "Events", "News", "Contact" are present
- **AND** "Courses" has a dropdown with sub-items
- **AND** a "Free Trial" CTA button with pill shape (border-radius 100px) and brand blue bg (#429FFD) is shown

#### Scenario: Hero slider displays slides

- **GIVEN** the page loads
- **THEN** a full-width hero slider is visible
- **AND** it displays a background image with dark overlay
- **AND** a centered heading is shown (e.g. "Best Online Learning System")
- **AND** a primary CTA button ("Register Now") with brand blue bg is below the heading
- **AND** the slider cycles through multiple slides automatically

#### Scenario: Intro cards section

- **GIVEN** the page loads
- **THEN** 3 intro cards are displayed in a row
- **AND** the first card shows an icon + "Learn Courses Online" + "View More" link
- **AND** the second card shows an icon + "Online Library Store" + "View More" link
- **AND** the third card is a promo card with colored background showing "50% off in all selected Courses"

#### Scenario: About section with accordion

- **GIVEN** the page loads
- **THEN** a "Welcome to Scholarkit" heading is displayed
- **AND** a descriptive paragraph is shown next to it
- **AND** a 3-panel accordion FAQ is present
- **AND** the first panel is expanded by default showing content
- **AND** clicking a collapsed panel header expands it and collapses the currently open one

#### Scenario: Services section

- **GIVEN** the page loads
- **THEN** 4 service cards are displayed in a row
- **AND** each card has an icon, a heading, and a description
- **AND** the services are: "Professional Courses", "Experienced Instructor", "Practical Training", "Validated Certificate"

#### Scenario: Counter section with animated numbers

- **GIVEN** the page loads
- **THEN** a counter section with dark parallax background is visible
- **AND** 4 counters are displayed: Courses, Students, Faculty, Countries
- **AND** each counter shows an icon, an animated number, and a label
- **AND** the numbers animate (count up) when the section enters the viewport

#### Scenario: Our Classes section

- **GIVEN** the page loads
- **THEN** an "Our Classes" heading with sub-description is displayed
- **AND** 6 course cards are shown in a 3-column grid (2 rows)
- **AND** each card has an image, a price tag, a title, a description, and a "Learn More" link

#### Scenario: Testimonials section

- **GIVEN** the page loads
- **THEN** a testimonials section with image background and dark overlay is visible
- **AND** a "What Students Say" heading is displayed
- **AND** a carousel shows testimonial slides with text and avatar

#### Scenario: Newsletter subscription section

- **GIVEN** the page loads
- **THEN** a newsletter section with image background and overlay is visible
- **AND** a "Subscribe Newsletter" heading is displayed
- **AND** an email input field with placeholder "Enter your email" is present
- **AND** a "Subscribe Now" primary button is present

#### Scenario: Footer

- **GIVEN** the page loads
- **THEN** a 4-column footer is displayed
- **AND** the first column has "About Scholarkit" text and social icons
- **AND** the second column has "Quick Links" with icon-marked links
- **AND** the third column has "Recent Post" with 3 blog cards (image + title + date)
- **AND** the fourth column has "Contact Info" with address, phone, email, location
- **AND** the footer bottom shows copyright with "Component Dock" link (not Colorlib)

## Verification checklist

- [ ] All 12 sections render in correct order
- [ ] Brand blue #429FFD used for buttons, links, active states
- [ ] Font families: Open Sans (body) + Playfair Display (headings)
- [ ] Pill-shaped CTA buttons (border-radius: 100px)
- [ ] Upper menu dark bar with social icons
- [ ] Hero slider with multiple slides, overlay, CTA
- [ ] 3 intro cards with correct styling
- [ ] About section with working accordion
- [ ] 4-column services grid
- [ ] Counter section with parallax bg + animated numbers
- [ ] 6 course cards in grid
- [ ] Testimonials carousel with image bg
- [ ] Newsletter form with email input + subscribe button
- [ ] 4-column footer with Component Dock attribution
- [ ] Mobile responsive: upper menu hidden, navbar hamburger, stacked grids
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use picsum.photos with deterministic seeds
