# Template: Edusphere (Education & School)

## Purpose

Recreation of ColorLib **Universityedu** (`https://colorlib.com/wp/template/universityedu/`, preview: `https://preview.colorlib.com/theme/universityedu/`) as a modern React 19 + TypeScript + Tailwind CSS 4 application (`@free-react-templates/edusphere`).

**Source:** ColorLib "Universityedu" — education/school landing page.
**Preview URL:** `https://preview.colorlib.com/theme/universityedu/`
**Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/universityedu-colorlib-template.jpg`

## Design Tokens & Aesthetic

Extracted from the live preview CSS (`style.css`) on 2026-08-25:

- **Primary Brand Color:** `#007A5C` (Emerald Green — theme-bg, theme-color, scroll-to-top button)
- **Heading / Dark Color:** `#32404D` (Dark Slate — all h1–h6 headings, section titles)
- **Accent / CTA Color:** `#F15B43` (Coral Red — primary buttons, list markers, inline links, bold text)
- **Body Text Color:** `#5D646A` (Medium Gray)
- **Paragraph Text Color:** `#777777` (Light Gray — section subtitle paragraphs)
- **Background Colors:**
  - Page: `#ffffff` (white)
  - `section-bg` (about area): `#FCF2EB` (warm cream/peach)
  - `gray-bg` (footer wrapper): `#F1FBFF` (very light blue-gray)
  - `visit-one` (trusted section): dark green overlay `#305534` with background image
  - Dark overlay on hero: `rgba(5, 44, 67, 0.8)` or similar gradient
- **Typography:** Google Font "Chivo", sans-serif — weights 300, 400, 700, 900
- **Button Shapes:** Sharp corners (border-radius: 0px) — square/rectangular CTA buttons, not rounded
- **Button Colors:** Primary = `#F15B43` coral on white; Browse/secondary = outlined with `#F15B43` border
- **Headings:** Uppercase, font-weight 900, `#32404D`, Chivo font
- **Section Padding:** 100px top/bottom on desktop, 70px on mobile

## Section Structure (in order)

1. **TopBar** — Announcement bar with promotional text ("ENDS TOMORROW: ...") and countdown timer (Days/Hours/Minutes/Seconds) + "Learn More" CTA button. Light background, centered text.

2. **Navbar** — Sticky header with: logo (left), main navigation (Home, About, Programs, Blog with dropdown, Contact), phone number + social icons (right). White background, bottom border on scroll.

3. **Hero** — Full-screen background image with dark overlay, left-aligned content: uppercase label ("EDUCATION & SCHOOL"), headline ("SHOWCASE COURSES, EVENTS AND MORE!"), paragraph text, "Get Started Now" CTA button.

4. **About** — Two-column layout on warm cream `#FCF2EB` background. Left: image. Right: section title ("A comprehensive teaching approach"), two paragraphs, "Learn More" button.

5. **Programs** — Two-column cards (Faculty of Science, Faculty of Arts), each with image, title, paragraph, "Learn More" link. Centered section title "Programs we Offer" with subtitle.

6. **Essential Resources** — Split layout: left side has dark background with background image overlay. Content: section title "Essential resources", three accordion-style items (First year students, Tuition & fees, International students) each with title, paragraph, and right-arrow icon.

7. **Top Stories** — Three-column grid of blog/story cards, each with image and centered title. Section title "Top Stories" with "More Stories" CTA link. Full-width container.

8. **Partners** — Centered section title "Our Partners" with subtitle, carousel of 5 partner logos. White background.

9. **Trusted/Stats** — Full-width dark section (dark green overlay with background image). Right-aligned content: "TRUSTED BY OVER 6000+ STUDENTS" headline, two paragraphs, "Join Now" button. White text on dark background.

10. **Footer** — Light blue-gray `#F1FBFF` background. Four columns: Logo, Quick Links, Programs, Resources, Newsletter (with email input + submit button). Bottom bar with copyright.

## Gherkin Requirements

### Scenario: TopBar renders announcement and countdown

- GIVEN the page loads
- THEN the top bar displays promotional text
- AND a countdown timer shows Days, Hours, Minutes, Seconds
- AND a "Learn More" CTA button is visible

### Scenario: Navbar displays correctly

- GIVEN the page loads
- THEN the navbar shows the logo on the left
- AND navigation links: Home, About, Programs, Blog, Contact are present
- AND a phone number and social icons are on the right
- AND the navbar becomes sticky on scroll

### Scenario: Hero section renders

- GIVEN the page loads
- THEN the hero displays a background image with dark overlay
- AND an uppercase label "EDUCATION & SCHOOL" is shown
- AND the headline "SHOWCASE COURSES, EVENTS AND MORE!" is visible
- AND a "Get Started Now" button is present

### Scenario: About section renders

- GIVEN the page loads
- WHEN scrolling to the about section
- THEN a warm cream background is displayed
- AND a two-column layout shows an image on the left and text on the right
- AND the heading "A comprehensive teaching approach" is visible
- AND a "Learn More" button is present

### Scenario: Programs section renders two program cards

- GIVEN the page loads
- WHEN scrolling to the programs section
- THEN the section title "Programs we Offer" is displayed
- AND two program cards are shown side by side
- AND each card has an image, title, description, and "Learn More" link

### Scenario: Essential Resources section renders

- GIVEN the page loads
- WHEN scrolling to the resources section
- THEN the section title "Essential resources" is displayed
- AND three resource items are shown (First year students, Tuition & fees, International students)
- AND each item has a title, description, and arrow icon

### Scenario: Top Stories section renders

- GIVEN the page loads
- WHEN scrolling to the top stories section
- THEN the section title "Top Stories" is displayed
- AND a "More Stories" link is present
- AND three story cards are shown in a grid

### Scenario: Partners section renders logo carousel

- GIVEN the page loads
- WHEN scrolling to the partners section
- THEN the section title "Our Partners" is displayed
- AND partner logos are shown in a carousel/grid

### Scenario: Trusted/Stats section renders

- GIVEN the page loads
- WHEN scrolling to the trusted section
- THEN a dark background section is displayed
- AND the heading "TRUSTED BY OVER 6000+ STUDENTS" is visible
- AND a "Join Now" button is present

### Scenario: Footer renders correctly

- GIVEN the page loads
- WHEN scrolling to the footer
- THEN the footer shows the logo
- AND Quick Links, Programs, Resources, and Newsletter columns are present
- AND a copyright line with Component Dock link is displayed

### Scenario: Mobile responsive layout

- GIVEN the page loads on a mobile viewport
- THEN the navbar collapses to a hamburger menu
- AND sections stack vertically
- AND the countdown timer adjusts for small screens

### Scenario: Accessibility basics

- GIVEN the page loads
- THEN all images have alt text
- AND interactive elements are keyboard-focusable
- AND heading hierarchy is correct (h1 > h2 > h3)

## Verification Checklist

- [ ] All 10 sections present in correct order
- [ ] Design tokens match: #007A5C green, #32404D dark slate, #F15B43 coral, Chivo font
- [ ] Buttons are sharp-cornered (0px radius), not rounded
- [ ] About section has warm cream (#FCF2EB) background
- [ ] Essential Resources has dark overlay left panel
- [ ] Trusted section has dark green overlay background
- [ ] Footer has light blue-gray background with 4 columns
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Images use picsum.photos placeholders
- [ ] Mobile responsive at all breakpoints
- [ ] All tests pass with 100% coverage
