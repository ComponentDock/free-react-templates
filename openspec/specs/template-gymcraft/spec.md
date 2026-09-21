# Template: GymCraft (Fitness & CrossFit Landing)

## Purpose

GymCraft is a single-page fitness/crossfit landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Activitar" free template (source:
https://colorlib.com/wp/template/activitar/, preview:
https://preview.colorlib.com/theme/activitar/), built under a DIFFERENT
name (**GymCraft**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a dark-themed Bootstrap 4 gym/crossfit site with a
full-width hero carousel (Owl Carousel), three image-overlay feature
cards, an about section with text+image split, a classes grid, a weekly
timetable with filter tabs, a three-tier pricing table with monthly/yearly
toggle, a six-item "Why Choose Us" grid, a YouTube video parallax section,
a masonry blog grid, an orange-gradient CTA banner, and a four-column
footer. The overall aesthetic is dark (`#151515` backgrounds) with orange
brand accents (`#e16521` / `#e4381C` gradient), Oswald headings, and
Nunito Sans body text.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at
https://preview.colorlib.com/theme/activitar/css/style.css:

| Token | Value | Usage |
|---|---|---|
| `--brand-primary` | `#e16521` | Orange accent, CTA gradient start |
| `--brand-secondary` | `#e4381C` | Orange-red, CTA gradient end |
| `--bg-dark` | `#151515` | Section backgrounds (about, classes, timetable, choose-us, blog, footer) |
| `--bg-darker` | `#111111` | Subtle darker variants |
| `--text-white` | `#ffffff` | Primary text on dark backgrounds |
| `--text-muted` | `#7b7b7b` | Secondary/muted text |
| `--text-light-muted` | `#a6a6a6` / `#afb4bf` | Lighter muted text |
| `--accent-gold` | `#ffca04` | Star/highlight accent in pricing |
| `--black` | `#000000` | Button text color |
| `--font-heading` | `"Oswald", sans-serif` | All headings (h1–h6) |
| `--font-body` | `"Nunito Sans", sans-serif` | Body text, paragraphs |
| `--btn-radius` | `3px` | Button border-radius (`.site-btn`) |
| `--btn-padding` | `0 12px` | Button horizontal padding |
| `--btn-text-transform` | `uppercase` | Button text transform |
| `--btn-letter-spacing` | `1px` | Button letter spacing |
| `--radius-pill` | `50px` | Rounded pill elements |
| `--radius-circle` | `50%` | Circular elements |
| `--cta-gradient` | `linear-gradient(45deg, #e16521, #e4381C)` | CTA section background |

## Section Order (from live preview DOM)

1. **Header** — Fixed/absolute navbar with logo (left) + nav links (center) + social icons (right). Nav: Home, About Us, Schedule, Gallery, Blog. Transparent overlay on hero.
2. **Hero Section** — Full-width Owl Carousel with 3 slides. Each slide: full-screen background image (`set-bg`), centered text overlay with "Join Us Now" (h2) + "FITNESS & SPORT" (h1, large). Auto-rotating.
3. **Feature Section** — 3 equal-width image-overlay cards in a row. Each: full-background image, bottom-aligned text with h3 title (e.g. "GROUP CLASSES", "PERSONAL TRAINING", "Sports Nutrition") + "Read More" link. Height ~380px.
4. **Home About** — Two-column split: left = "WELCOME TO CROSSFIT" heading + descriptive paragraph + "Learn More" button; right = image. Dark bg `#151515`.
5. **Classes Section** — "Choose Your Program" title. 4-column grid of class cards (Crossfit Level 1, BootCamp, Energy Blast, Classic Body Balance). Each card: image + h4 title + short description + "Read More" link. Dark bg `#151515`.
6. **Class Time Table** — "Classtime Table" title. Filter tabs (all class, crossfit, lunge ball, ppsr, walls, candy). Full-width table: columns = Mon–Sun, rows = time slots. Cells show class name + time range. Dark bg `#151515`.
7. **Pricing Section** — "CHOOSE YOUR PRICING PLAN" title. Monthly/Years toggle switch. 3-column pricing cards (Normal $55, Professional $95 with star highlight, Advanced $165). Each: plan name + price + feature list + "Get Started" button. Background image with overlay.
8. **Choose Us Section** — "Why People Choose Us" title + subtitle. 3×2 grid of feature items with icon image + h5 title + description. Items: Support 24/24, Our trainer, Personalized sessions, Our equipment, Classes daily, Focus on your health. Dark bg `#151515`.
9. **Video Section** — Full-width parallax background image. Centered "Gym In Downtown New York" (h2) + YouTube play button popup. Dark overlay on bg image.
10. **Blog Section** — "From Our Blog" title. Masonry grid of 4 blog cards (image backgrounds, category tag, h5 title, overlay). Includes one Instagram-promo card. Dark bg `#151515`.
11. **CTA Section** — Full-width orange gradient (`#e16521` → `#e4381C`). "Get Started Today" (h2) + promotional text + "Join Now" button. Compact single-row.
12. **Footer** — 4-column layout on dark bg `#151515`: logo + description + social icons | Our Blog (2 recent posts with dates) | Program links (Bodybuilding, Running, Stretching, Weight Loss, Gym Fitness) | Get Info (phone, email, address). Copyright bar at bottom.

## Gherkin Requirements

### Feature: GymCraft Landing Page

```gherkin
Feature: GymCraft fitness landing page
  As a gym/crossfit visitor
  I want a dark-themed fitness landing page
  So that I can explore programs, pricing, and classes

  Background:
    Given the user opens the GymCraft landing page

  # --- Header ---
  Scenario: Header displays logo and navigation
    Then the header shows the GymCraft logo
    And the navigation contains links: Home, About Us, Schedule, Gallery, Blog
    And the header overlays the hero section transparently

  Scenario: Header navigation links are functional
    When the user clicks "About Us" in the nav
    Then the page scrolls to the About section
    When the user clicks "Schedule" in the nav
    Then the page scrolls to the Class Time Table section

  # --- Hero ---
  Scenario: Hero section displays carousel with slides
    Then the hero section shows a full-width carousel
    And the carousel contains at least 3 slides
    And each slide displays a background image with text overlay
    And each slide shows "Join Us Now" heading
    And each slide shows "FITNESS & SPORT" main heading

  Scenario: Hero carousel auto-rotates
    Given the carousel is showing slide 1
    When 5 seconds pass
    Then the carousel transitions to slide 2

  # --- Features ---
  Scenario: Feature section shows three program cards
    Then the feature section displays 3 equal-width cards
    And card 1 shows "GROUP CLASSES"
    And card 2 shows "PERSONAL TRAINING"
    And card 3 shows "Sports Nutrition"
    And each card has a background image with overlay text
    And each card has a "Read More" link

  # --- About ---
  Scenario: About section shows welcome content
    Then the about section displays "WELCOME TO CROSSFIT" heading
    And the about section has a descriptive paragraph
    And the about section has a "Learn More" button
    And the about section shows an image on the right side
    And the section background is dark (#151515)

  # --- Classes ---
  Scenario: Classes section shows program grid
    Then the classes section displays "Choose Your Program" heading
    And there are 4 class cards in a grid
    And class cards include: Crossfit Level 1, BootCamp, Energy Blast, Classic Body Balance
    And each class card has an image, title, description, and "Read More" link

  # --- Class Timetable ---
  Scenario: Timetable shows weekly schedule
    Then the timetable section displays "Classtime Table" heading
    And the table has columns for Monday through Sunday
    And the table has time-slot rows with class names
    And filter tabs are shown: all class, crossfit, lunge ball, ppsr, walls, candy

  Scenario: Timetable filter tabs work
    When the user clicks the "crossfit" filter tab
    Then only crossfit classes are shown in the table
    When the user clicks the "all class" filter tab
    Then all classes are shown again

  # --- Pricing ---
  Scenario: Pricing section shows three plans
    Then the pricing section displays "CHOOSE YOUR PRICING PLAN" heading
    And there are 3 pricing cards: Normal, Professional, Advanced
    And Normal shows $55/month with features
    And Professional shows $95/month with features and a star highlight
    And Advanced shows $165/month with features
    And each card has a "Get Started" button

  Scenario: Pricing toggle switches between monthly and yearly
    Given the pricing toggle is set to "Monthly"
    When the user clicks the toggle
    Then the pricing displays switch to yearly view
    When the user clicks the toggle again
    Then the pricing displays switch back to monthly view

  # --- Choose Us ---
  Scenario: Choose Us section shows six advantages
    Then the choose-us section displays "Why People Choose Us" heading
    And there are 6 feature items in a 3×2 grid
    And items include: Support 24/24, Our trainer, Personalized sessions, Our equipment, Classes daily, Focus on your health
    And each item has an icon, title, and description

  # --- Video ---
  Scenario: Video section shows YouTube popup
    Then the video section displays "Gym In Downtown New York" heading
    And a play button is centered over a background image
    When the user clicks the play button
    Then a YouTube video popup opens

  # --- Blog ---
  Scenario: Blog section shows post grid
    Then the blog section displays "From Our Blog" heading
    And there are 4 blog cards in a masonry-style grid
    And each blog card has a background image, category tag, and title
    And one card is an Instagram promo card

  # --- CTA ---
  Scenario: CTA section shows promotional banner
    Then the CTA section displays "Get Started Today" heading
    And the CTA section has an orange gradient background (#e16521 → #e4381C)
    And the CTA section has a "Join Now" button

  # --- Footer ---
  Scenario: Footer shows four columns
    Then the footer has 4 columns
    And column 1 shows the logo, description, and social media links
    And column 2 shows "Our Blog" with recent posts
    And column 3 shows "Program" with links: Bodybuilding, Running, Stretching, Weight Loss, Gym Fitness
    And column 4 shows "Get Info" with phone, email, and address

  Scenario: Footer links to Component Dock
    Then the footer contains a link to https://www.componentdock.com/
    And the link text mentions "Component Dock"
```

## Verification Checklist

- [ ] All 12 sections rendered in correct order
- [ ] Hero carousel auto-rotates with 3 slides
- [ ] Feature section shows 3 image-overlay cards
- [ ] About section has 2-column split layout
- [ ] Classes section shows 4 program cards in grid
- [ ] Timetable has filterable weekly schedule table
- [ ] Pricing section has 3 plans with monthly/yearly toggle
- [ ] Choose Us section shows 6 advantage items in 3×2 grid
- [ ] Video section has YouTube popup play button
- [ ] Blog section shows masonry grid of 4 cards
- [ ] CTA section has orange gradient banner
- [ ] Footer has 4 columns with all required content
- [ ] Footer links to Component Dock
- [ ] Design tokens match: Oswald headings, Nunito Sans body, `#e16521` orange, `#151515` dark bg
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] 100% test coverage
- [ ] App builds without errors
