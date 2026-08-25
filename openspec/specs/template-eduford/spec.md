# Template: Eduford (Education)

## Purpose

Recreation of ColorLib's **Universityedu** template.

- **Source slug:** `universityedu`
- **Preview URL:** https://preview.colorlib.com/theme/universityedu/
- **Source page:** https://colorlib.com/wp/template/universityedu/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `eduford` (apps/eduford, `@free-react-templates/eduford`)

## Design Tokens (extracted from live preview CSS)

| Token             | Value                 | Usage                                                                     |
| ----------------- | --------------------- | ------------------------------------------------------------------------- |
| Font family       | `"Chivo", sans-serif` | All text (weights 300, 400, 700, 900)                                     |
| Brand green       | `#007A5C`             | Primary brand, nav links, CTA buttons, section-title spans, scroll-to-top |
| Accent red-orange | `#F15B43`             | Primary button fill, hover states, borders                                |
| Dark heading      | `#32404D`             | All headings (h1-h6)                                                      |
| Body text         | `#5D646A`             | Paragraphs                                                                |
| Light lavender    | `#f9f9ff`             | Button default bg, form backgrounds                                       |
| Warm peach bg     | `#FCF2EB`             | About section bg (`.section-bg`)                                          |
| Light blue bg     | `#F1FBFF`             | Footer bg (`.gray-bg`)                                                    |
| Light green bg    | `#EFF6F0`             | Brand bg (`.brand-bg`)                                                    |
| Navy secondary    | `#415094`             | Default button text, link-button color                                    |
| Green CTA split   | `#007A5C` solid bg    | Visit-one section full green background                                   |
| White             | `#fff`                | Text on dark/green backgrounds                                            |

### Button shapes

- **Hero CTA (`.btn_1`):** bg #007A5C, white text, padding 11px 20px, border-radius 0, font-size 18px, border transparent.
- **Browse link (`.browse-btn`):** text #007A5C, underline via ::before (2px bar, bottom -7px), hover adds letter-spacing 1px.
- **Browse-btn2 (dark bg variant):** white text, white underline.
- **Primary button:** bg #F15B43, white text, hover inverts to outline.
- **Slider-btn:** gradient from #F15B43 to #ED5B0D.

### Section backgrounds

| Section        | Background                                    |
| -------------- | --------------------------------------------- |
| Header top bar | White with countdown                          |
| Hero/Slider    | Full-width image, dark overlay (opacity ~0.6) |
| About          | Warm peach #FCF2EB                            |
| Programs       | White                                         |
| Gallery        | Dark green #007A5C (left) + image (right)     |
| Top Stories    | White                                         |
| Partners       | White                                         |
| CTA split      | Full green #007A5C background                 |
| Footer         | Light blue-gray #F1FBFF                       |

## Section Structure (in page order)

1. **Header** — Top promo bar ("ENDS TOMORROW: ...") + countdown timer + sticky nav with logo, links (Home, About, Programs, Blog w/ submenu, Contact), phone number, social icons.
2. **Hero Slider** — Full-width background image with dark overlay, tagline "EDUCATION & SCHOOL", heading "SHOWCASE COURSES, EVENTS AND MORE!", body text, green CTA button "Get Started Now". Left-aligned content (col-xxl-6).
3. **About Section** — Two-column layout: left = image (about1.jpg), right = section title "A comprehensive teaching approach" + two paragraphs + "Learn More" link. Warm peach background (#FCF2EB).
4. **Programs Section** — Centered section title "Programs we Offer" + subtitle. Two-column grid of program cards (Faculty of Science, Faculty of Arts), each with image + title + description + "Learn More" link.
5. **Gallery / Essential Resources** — Split layout: left side dark green bg with title "Essential resources" + three expandable items (First year students, Tuition & fees, International students) each with title, description, and arrow icon. Right side = image.
6. **Top Stories** — Full-width fluid container, header with "Top Stories" title + "More Stories" link. Three-column grid of story cards, each with image + centered title.
7. **Partners Section** — Centered title "Our Partners" + subtitle + logo carousel (6 brand logos in a slider).
8. **CTA Split** — Two-column split: left = image, right = dark green bg (#007A5C) with white text: heading "TRUSTED BY OVER 6000+ STUDENTS", two paragraphs, "Join Now" white link.
9. **Footer** — Light gray bg: logo, Quick Links, Programs, Resources columns + Newsletter signup form (email input + submit). Bottom bar with copyright + social links.

## Gherkin Requirements

```gherkin
Feature: Eduford - Education Landing Page

  Background:
    Given the user is on the Eduford homepage

  # --- Header ---
  Scenario: Header displays promo bar with countdown
    Then a top promo bar is visible with promotional text
    And a countdown timer shows days, hours, minutes, seconds

  Scenario: Navigation links are present
    Then the navigation contains links: Home, About, Programs, Blog, Contact
    And a phone number is displayed in the header
    And social media icons are visible

  Scenario: Sticky header behavior
    When the user scrolls down
    Then the header remains fixed at the top of the viewport

  # --- Hero ---
  Scenario: Hero section renders with heading and CTA
    Then the hero displays the tagline "EDUCATION & SCHOOL"
    And the heading reads "SHOWCASE COURSES, EVENTS AND MORE!"
    And a "Get Started Now" button is visible

  Scenario: Hero has full-width background with overlay
    Then the hero background covers the full viewport width
    And a dark overlay is applied over the background image

  # --- About ---
  Scenario: About section shows image and text
    Then an image is displayed on the left side
    And the heading "A comprehensive teaching approach" is visible
    And two paragraphs of descriptive text are shown
    And a "Learn More" link is present

  Scenario: About section has warm peach background
    Then the about section background color is #FCF2EB

  # --- Programs ---
  Scenario: Programs section displays program cards
    Then the heading "Programs we Offer" is visible
    And two program cards are displayed in a grid
    And each card has an image, title, description, and "Learn More" link

  Scenario: Program cards show Faculty of Science and Faculty of Arts
    Then one card is titled "Faculty of Science"
    And another card is titled "Faculty of Arts"

  # --- Gallery / Essential Resources ---
  Scenario: Gallery section has split layout
    Then the left side shows "Essential resources" heading on green background
    And three resource items are listed: First year students, Tuition & fees, International students
    And each item has a title, description, and arrow icon
    And the right side displays an image

  # --- Top Stories ---
  Scenario: Top Stories section shows three story cards
    Then the heading "Top Stories" is visible
    And a "More Stories" link is present
    And three story cards are displayed in a row
    And each card has an image and a centered title

  # --- Partners ---
  Scenario: Partners section displays logos
    Then the heading "Our Partners" is visible
    And a logo carousel/slider displays partner logos

  # --- CTA Split ---
  Scenario: CTA section has green split layout
    Then the left side shows an image
    And the right side has a green background (#007A5C)
    And white text reads "TRUSTED BY OVER 6000+ STUDENTS"
    And a "Join Now" white button is visible

  # --- Footer ---
  Scenario: Footer has four columns and newsletter
    Then the footer contains a logo, Quick Links, Programs, and Resources columns
    And a newsletter signup form with email input and submit button is present
    And social media links are displayed in the footer bottom

  Scenario: Footer links to Component Dock
    Then the footer contains a link to https://www.componentdock.com/

  # --- Responsive ---
  Scenario: Mobile navigation collapses
    When the viewport width is less than 992px
    Then the main navigation is hidden
    And a mobile menu toggle is displayed

  Scenario: Sections stack vertically on mobile
    When the viewport width is less than 768px
    Then two-column sections stack into a single column
    And section padding is reduced
```

## Verification Checklist

- [ ] Header: promo bar + countdown + sticky nav + phone + social icons
- [ ] Hero: full-width bg image + dark overlay + tagline + heading + CTA button
- [ ] About: 2-column (image left, text right) + warm peach bg + heading + 2 paragraphs + link
- [ ] Programs: centered title + 2 program cards in grid
- [ ] Gallery: split layout (green left w/ 3 items, image right)
- [ ] Top Stories: 3-column card grid + header with link
- [ ] Partners: centered title + logo carousel
- [ ] CTA: split layout (image left, green bg right with white text + button)
- [ ] Footer: 4 columns + newsletter form + Component Dock link
- [ ] Design tokens: Chivo font, #007A5C green, #F15B43 accent, #32404D headings
- [ ] Responsive: mobile nav collapse, stacked columns on small screens
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md + PR)
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME = eduford.free.componentdock.com
- [ ] package.json homepage = https://eduford.free.componentdock.com
