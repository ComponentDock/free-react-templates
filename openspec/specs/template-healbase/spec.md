# Template: HealBase (Health & Wellness)

## Purpose

HealBase is a single-page health & wellness landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Healthcouch" free template (source:
https://colorlib.com/wp/template/healthcouch/, preview:
https://preview.colorlib.com/theme/healthcouch/), built under a DIFFERENT name
(**HealBase**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based health/wellness template using Poppins Google
Font. It has a clean, nature-inspired aesthetic with a green (`#5AAC4E`) primary
accent and dark navy (`#1f2b7b`) secondary accent on a white/light background.
The page features a sticky navbar with brand logo, a full-width hero image slider
with overlay text, an about section with image + text layout, a CTA banner on a
dark background, a services cards section with icons, a testimonials carousel, a
video area with background image and play button, a blog section with three
cards, a newsletter subscribe form, and a dark footer with columns.

## Design Tokens

| Token            | Value                                   | Source                                  |
| ---------------- | --------------------------------------- | --------------------------------------- |
| Brand primary    | `#5AAC4E` (green)                      | Buttons, hover states, service icons    |
| Brand secondary  | `#1f2b7b` (dark navy)                  | Button base, headings, primary accents  |
| Brand dark       | `#234821` (dark green)                 | Button default background               |
| Text primary     | `#000000`                              | Body text, headings                     |
| Text light       | `#fff`                                  | On dark/blue backgrounds                |
| Text muted       | `#999999` / `#888888`                  | Footer links, secondary text            |
| Background light | `#f9f9ff`                               | `.section-padding`, page sections       |
| Background bg2   | Image-based (section_bg02)             | Video area                              |
| Background bg3   | Image-based (section_bg01.png)         | CTA banner, footer wrapper              |
| Heading font     | `"Poppins", sans-serif`                  | All headings, hero text, nav            |
| Body font        | `"Poppins", sans-serif`                  | Body text, paragraphs                   |
| Icon set         | Flaticon + Font Awesome 5               | Service icons, social, nav              |
| Button radius    | `0 0 0 17px` (asymmetric)             | `.btn` — left-bottom corner only        |
| Button bg        | `#234821` (dark green) default,        | CTA buttons                             |
|                  | `#5AAC4E` on hover (scaleX animation)  |                                         |
| Card radius      | `8px`                                   | Service cards, blog cards               |
| Hero height      | Full viewport (slider area)             | `.slider-area` background image         |
| Section padding  | `100px` (`.section-padding40`; 65px top / 70px bottom in the responsive rule) | About, testimonial areas |

## Visual Description (from live preview DOM + CSS analysis)

Clean, professional health/wellness aesthetic. White and light purple-tinted
(`#f9f9ff`) backgrounds dominate with green (`#5AAC4E`) accent on buttons,
hover states, and service card interactions. Dark navy (`#1f2b7b`) appears in
the CTA banner, footer wrapper, and button base color. The hero is a full-width
image slider with a nature/health background image and white overlay text
("Health is wealth keep it healthy") with a CTA button. Below the hero, an
about section has a large image on the left and text on the right with the
heading "Create a healthy life you love!". A dark navy CTA banner ("Happy mind
healthy life") spans full width. The services section shows 3 icon cards
("Physical Activity" x3) in a grid. Testimonials use a carousel with founder
images and quote text. A video area has a background image with a centered play
button. The blog section shows 3 cards with images and titles. A newsletter
subscribe form sits above a dark footer with columns for logo, links, social
icons, and copyright.

## Requirements

### Header / Navigation

#### Scenario: Sticky header with logo and navigation links

- **GIVEN** the user loads the HealBase page
- **THEN** a sticky header is visible with the logo "HealBase" on the left
- **AND** navigation links "Home", "About", "Services", "Blog", "Contact" are on the right
- **AND** the header has a white background

### Hero / Slider

#### Scenario: Hero section with headline and CTA

- **GIVEN** the user loads the HealBase page
- **THEN** a full-width hero section is visible with a background image
- **AND** the headline "Health is wealth keep it healthy" is displayed
- **AND** a CTA button is visible below the headline
- **AND** the hero text is white on a dark overlay

### About Section

#### Scenario: About section with image and text

- **GIVEN** the user loads the HealBase page
- **THEN** an about section is visible with a heading "Create a healthy life you love!"
- **AND** a descriptive paragraph is shown below the heading
- **AND** a large image is displayed alongside the text
- **AND** the section has a light background

### CTA Banner

#### Scenario: Full-width CTA banner

- **GIVEN** the user loads the HealBase page
- **THEN** a full-width CTA banner is visible
- **AND** the banner displays "Happy mind healthy life"
- **AND** the banner has a dark background with a background image

### Services Section

#### Scenario: Services cards with icons

- **GIVEN** the user loads the HealBase page
- **THEN** a services section is visible with a heading
- **AND** 3 service cards are displayed in a grid
- **AND** each card has an icon, a title "Physical Activity", and a description
- **AND** each card has a "+" button
- **AND** hovering a card changes its background to green

### Testimonials

#### Scenario: Testimonials carousel

- **GIVEN** the user loads the HealBase page
- **THEN** a testimonials section is visible
- **AND** testimonial slides contain a quote, author name, and role
- **AND** navigation dots are present below the testimonials
- **AND** the testimonials auto-rotate or respond to dot clicks

### Video Area

#### Scenario: Video section with play button

- **GIVEN** the user loads the HealBase page
- **THEN** a video area is visible with a background image
- **AND** a centered play button icon is displayed
- **AND** the section has adequate height (at least 300px)

### Blog Section

#### Scenario: Blog cards with images and titles

- **GIVEN** the user loads the HealBase page
- **THEN** a blog section is visible with the heading "Latest Blog"
- **AND** 3 blog cards are displayed in a row
- **AND** each card has an image, a title, and a description paragraph
- **AND** the titles are "Your daily meal plan", "Food is a great source of medicine", "Everyday diet plan"

### Newsletter Section

#### Scenario: Newsletter subscribe form

- **GIVEN** the user loads the HealBase page
- **THEN** a newsletter section is visible
- **AND** the heading reads "100% satisfaction guaranteed."
- **AND** an email input field and submit button are present
- **AND** the section has a dark background

### Footer

#### Scenario: Footer with columns and links

- **GIVEN** the user loads the HealBase page
- **THEN** a footer is visible with a dark background
- **AND** the footer contains a logo section, link columns, and social icons
- **AND** social icons include Facebook, Twitter, and Pinterest
- **AND** a copyright line is at the bottom
- **AND** the footer links to https://www.componentdock.com/ (branded "Component Dock")

## Verification Checklist

- [ ] Template renders all sections in correct order: Header → Hero → About → CTA Banner → Services → Testimonials → Video → Blog → Newsletter → Footer
- [ ] Design tokens match: green primary `#5AAC4E`, navy secondary `#1f2b7b`, Poppins font
- [ ] Hero has background image with overlay and white text
- [ ] Buttons have asymmetric radius (`0 0 0 17px`) with green hover animation
- [ ] Services section shows 3 cards in a grid with icons
- [ ] Testimonials carousel with dots navigation
- [ ] Video area with centered play button
- [ ] Blog section shows 3 cards with images and titles
- [ ] Newsletter form with email input
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] `npm run test:coverage` passes at 100%
- [ ] Build succeeds without errors
