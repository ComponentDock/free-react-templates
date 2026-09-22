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
| Section padding  | `40px` (`.section-padding40`)          | About, testimonial areas                |

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

## Requirements (Gherkin)

### Header / Navigation

```gherkin
Scenario: Sticky header with logo and navigation links
  Given the user loads the HealBase page
  Then a sticky header is visible with the logo "HealBase" on the left
  And navigation links "Home", "About", "Services", "Blog", "Contact" are on the right
  And the header has a white background
```

### Hero / Slider

```gherkin
Scenario: Hero section with headline and CTA
  Given the user loads the HealBase page
  Then a full-width hero section is visible with a background image
  And the headline "Health is wealth keep it healthy" is displayed
  And a CTA button is visible below the headline
  And the hero text is white on a dark overlay
```

### About Section

```gherkin
Scenario: About section with image and text
  Given the user loads the HealBase page
  Then an about section is visible with a heading "Create a healthy life you love!"
  And a descriptive paragraph is shown below the heading
  And a large image is displayed alongside the text
  And the section has a light background
```

### CTA Banner

```gherkin
Scenario: Full-width CTA banner
  Given the user loads the HealBase page
  Then a full-width CTA banner is visible
  And the banner displays "Happy mind healthy life"
  And the banner has a dark background with a background image
```

### Services Section

```gherkin
Scenario: Services cards with icons
  Given the user loads the HealBase page
  Then a services section is visible with a heading
  And 3 service cards are displayed in a grid
  And each card has an icon, a title "Physical Activity", and a description
  And each card has a "+" button
  And hovering a card changes its background to green
```

### Testimonials

```gherkin
Scenario: Testimonials carousel
  Given the user loads the HealBase page
  Then a testimonials section is visible
  And testimonial slides contain a quote, author name, and role
  And navigation dots are present below the testimonials
  And the testimonials auto-rotate or respond to dot clicks
```

### Video Area

```gherkin
Scenario: Video section with play button
  Given the user loads the HealBase page
  Then a video area is visible with a background image
  And a centered play button icon is displayed
  And the section has adequate height (at least 300px)
```

### Blog Section

```gherkin
Scenario: Blog cards with images and titles
  Given the user loads the HealBase page
  Then a blog section is visible with the heading "Latest Blog"
  And 3 blog cards are displayed in a row
  And each card has an image, a title, and a description paragraph
  And the titles are "Your daily meal plan", "Food is a great source of medicine", "Everyday diet plan"
```

### Newsletter Section

```gherkin
Scenario: Newsletter subscribe form
  Given the user loads the HealBase page
  Then a newsletter section is visible
  And the heading reads "100% satisfaction guaranteed."
  And an email input field and submit button are present
  And the section has a dark background
```

### Footer

```gherkin
Scenario: Footer with columns and links
  Given the user loads the HealBase page
  Then a footer is visible with a dark background
  And the footer contains a logo section, link columns, and social icons
  And social icons include Facebook, Twitter, and Pinterest
  And a copyright line is at the bottom
  And the footer links to https://www.componentdock.com/ (branded "Component Dock")
```

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
