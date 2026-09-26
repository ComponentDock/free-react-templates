# Template: Shuttercraft (Photography / Photo Studio)

## Purpose

Recreation of ColorLib **Cassi** — a photo studio / photography HTML template.
- **Source slug:** `cassi`
- **ColorLib URL:** https://colorlib.com/wp/template/cassi/
- **Preview URL:** https://preview.colorlib.com/theme/cassi/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and screenshot analysis.

### Colors

| Token              | Value                        | Usage                                       |
| ------------------ | ---------------------------- | ------------------------------------------- |
| `--brand-primary`  | `#242deb` (electric indigo)  | Category badge bg, nav hover, button hover, accent |
| `--bg-dark`        | `#151515` (near-black)       | Body bg, offcanvas menu, header area        |
| `--bg-hero`        | `#000`                       | Hero section overlay                        |
| `--text-primary`   | `#ffffff`                    | Headings, body text on dark bg              |
| `--text-secondary` | `#bfbfbf` (light gray)       | Body text, descriptions                     |
| `--text-muted`     | `#969696` (medium gray)      | Copyright, secondary text                   |
| `--text-body`      | `#333333` (dark gray)        | Body text on light bg                       |
| `--red-heart`      | `#cc1111`                    | Heart icon in copyright                     |

### Typography

| Property      | Value                              |
| ------------- | ---------------------------------- |
| Font family   | `"Poppins", sans-serif`           |
| Menu font     | `"Roboto", sans-serif` (offcanvas) |
| Heading h2    | Display/serif style, large, white  |
| Category tag  | 14px, weight 500, uppercase        |
| Button text   | 16px, weight 500, uppercase, letter-spacing 1px |

### Buttons & interactive

| Element       | Style                                                                |
| ------------- | -------------------------------------------------------------------- |
| `.ht-btn`     | White text, uppercase, no bg, arrow icon in brand blue (#242deb)     |
| `.ht-cata`    | Inline-block badge: brand blue bg (#242deb), white text, 5px 18px padding |
| Nav hover     | Brand blue (#242deb) bg on active/hovered link                       |
| Hamburger     | White icon, 24px, top-right position                                |

### Section backgrounds

| Section             | Background                                                     |
| ------------------- | -------------------------------------------------------------- |
| Header              | Transparent over hero (logo + hamburger)                       |
| Hero                | Full-screen image slider (owl-carousel), split: text left / image right |
| Gallery (inner)     | Black bg with gradient overlay on hover                        |
| Blog (inner)        | White cards on dark bg                                         |
| About (inner)       | Dark bg, centered text                                         |
| Contact (inner)     | Dark bg with map/overlay                                       |
| Footer              | Dark bg (#151515), social links left, copyright right          |

### Layout

- **Hero:** Full-viewport height, two-column split — left side dark background with text (category badge + heading + description + CTA button), right side full-bleed hero image. Owl-carousel slider with 3 slides.
- **Header:** Fixed/absolute, transparent, logo top-left, hamburger top-right. Scrolls to dark header bar.
- **Footer:** Single row — social links (Facebook, Twitter, Instagram) floated left, copyright floated right. Dark bg.
- **Gallery grid (inner page):** Masonry-style image grid with hover overlay (gradient from transparent to black) and text label.

## Gherkin requirements

```gherkin
Feature: Shuttercraft — Photo Studio Template

  Background:
    Given the user opens the Shuttercraft homepage

  Scenario: Header displays logo and navigation
    Then a logo text "SHUTTERCRAFT" is visible in the header
    And a hamburger menu button is visible at the top-right
    And the header is transparent over the hero section

  Scenario: Hero section shows photo studio intro
    Then a hero slider is displayed at full viewport height
    And the hero has a two-column split layout
    And the left column shows a category badge
    And the left column shows the heading "Photo Studio"
    And the left column shows a description paragraph
    And the left column shows a "See More" call-to-action button
    And the right column shows a full-bleed hero image
    And the hero auto-advances through 3 slides

  Scenario: Hero badge uses brand color
    Then the category badge has a blue (#242deb) background
    And the badge text is white and uppercase

  Scenario: See More button interaction
    When the user clicks the "See More" button
    Then the page scrolls or navigates appropriately

  Scenario: Footer displays social links and copyright
    Then a footer section is visible
    And the footer shows Facebook, Twitter, and Instagram social links
    And the footer shows copyright text
    And the footer links to Component Dock

  Scenario: Offcanvas menu opens on hamburger click
    When the user clicks the hamburger menu button
    Then an offcanvas menu slides in from the right
    And the offcanvas menu shows navigation links
    And the offcanvas menu shows social links
    And a close button is visible
    When the user clicks the close button
    Then the offcanvas menu closes

  Scenario: Responsive layout on mobile
    When the viewport width is less than 768px
    Then the hero section stacks vertically
    And the hamburger menu is visible
    And the footer social links and copyright stack vertically

  Scenario: Dark theme is consistent
    Then the body background is dark (#151515)
    And all text on dark backgrounds is white or light gray
    And interactive elements use brand blue (#242deb) for accents
```

## Verification checklist

- [ ] Header: transparent bg, logo text visible, hamburger icon visible
- [ ] Hero: full-height two-column split, category badge with brand blue, heading, description, CTA button
- [ ] Hero slider: 3 slides, auto-advance, navigation arrows
- [ ] Footer: social links (FB, TW, IG), copyright text, Component Dock link
- [ ] Offcanvas menu: opens on hamburger, shows nav + socials, closes on X
- [ ] Design tokens: Poppins font, #242deb brand blue, #151515 dark bg, white text
- [ ] Responsive: mobile stacks, hamburger visible, footer stacks
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
