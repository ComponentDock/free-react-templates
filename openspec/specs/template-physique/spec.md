# Template: Physique (Fitness)

## Purpose

Recreation of ColorLib **Fitness** template
(https://colorlib.com/wp/template/fitness/).
Preview: https://preview.colorlib.com/theme/fitness/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitness-free-template.jpg

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview stylesheet
(`https://preview.colorlib.com/theme/fitness/css/main.css`):

| Token | Value | Notes |
|---|---|---|
| brand / primary | `#f6214b` | Bright red, used for buttons, selection, overlays, accents |
| title | `#222222` | Dark near-black for headings |
| text | `#777777` | Medium gray for body copy |
| white | `#ffffff` | |
| off-white | `#f9f9ff` | Light blue-tinted background for light sections |
| font-family | `"Poppins", sans-serif` | Body 14px / weight 300; headings weight 600 |
| banner overlay | `rgba(0,0,0,0.2)` | Dark semi-transparent over hero image |
| CTA overlay | `rgba(246,33,75,0.75)` | Red semi-transparent (calculation area) |
| callto overlay | `rgba(0,0,0,0.5)` | Dark semi-transparent (final CTA) |
| button radius | none (square edges) for `.primary-btn`; 57px for newsletter submit |
| section padding | `padding: 120px 0` (`.section-gap`) |

## Section order (1:1 from preview)

1. **Header** — top bar (email, logo, phone) + nav (Home, About, Services, Trainers, Blog [dropdown], Pages [dropdown], Elements, Contact)
2. **Banner (Hero)** — fullscreen background image, dark overlay, heading "Shape your Perfect body", subtext, red "Become a Member" CTA
3. **Top Courses** — section title + owl-carousel of 4 course cards (image, "Join Now" red overlay button, title, price)
4. **CTA Split** — two side-by-side image panels with red overlay, heading "Get into shape now", "Book Now" CTA
5. **Features** — section title + image left + 3 feature items right (icon-less, title + paragraph)
6. **BMI Calculator** — red overlay on background image, heading "Calculate Your Body Mass Index", form with height/weight inputs + "Calculate Your BMI" button
7. **Image Gallery** — section title + 3-column grid, 2 images per column (6 total)
8. **Testimonials** — section title + carousel of testimonial cards (avatar, quote, name, role)
9. **Brand Logos** — grayscale logo strip (5 logos), full-color on hover
10. **Call-to-Action** — dark overlay on background, centered heading "It's never late to start, join us today!", subtext, "Become a Member" button
11. **Footer** — white background, 3-column (About Us, Contact Us, Newsletter + email input), copyright + social icons

## Gherkin requirements

```gherkin
Feature: Physique — Fitness website template

  Background:
    Given the template is loaded in the browser

  Scenario: Header displays navigation
    Then the nav contains links: Home, About, Services, Trainers, Blog, Pages, Elements, Contact
    And the logo is centered between email and phone in the top bar

  Scenario: Hero banner renders
    Then the banner spans the full viewport height
    And the heading reads "Shape your Perfect body"
    And a "Become a Member" button is visible
    And the background image has a dark semi-transparent overlay

  Scenario: Top courses carousel
    Then there are 4 course cards visible (or scrollable)
    And each card shows an image, title, and price
    And each card has a "Join Now" button in brand color (#f6214b)

  Scenario: CTA split section
    Then two side-by-side panels are visible
    And each panel has a background image with red overlay
    And each panel displays "Get into shape now" and a "Book Now" button

  Scenario: Features section
    Then the section title reads "Our Topnotch Features"
    And an image is displayed on the left
    And 3 feature items are listed on the right, each with a title and description

  Scenario: BMI Calculator
    Then the section title reads "Calculate Your Body Mass Index"
    And there are input fields for height and weight
    And a "Calculate Your BMI" button is displayed
    And the background has a red semi-transparent overlay

  Scenario: Image gallery
    Then the section title reads "Image Gallery that we like to share"
    And 6 images are arranged in a 3-column, 2-row grid

  Scenario: Testimonials
    Then the section title reads "Testimonial from our Clients"
    And testimonial cards display an avatar, quote, name, and role
    And cards are presented in a carousel

  Scenario: Brand logos
    Then 5 brand logos are displayed in a row
    And logos are grayscale by default and full-color on hover

  Scenario: Call-to-action section
    Then the heading reads "It's never late to start, join us today!"
    And a "Become a Member" button is centered
    And the background image has a dark overlay

  Scenario: Footer
    Then the footer contains About Us, Contact Us, and Newsletter columns
    And the newsletter column has an email input and submit button
    And the footer links to https://www.componentdock.com/
    And social icons are displayed (Facebook, Twitter, Dribbble, Behance)
```

## Verification checklist

- [ ] All 11 sections rendered in the correct order
- [ ] Brand color `#f6214b` used for primary buttons and accents
- [ ] Poppins font loaded from Google Fonts
- [ ] Hero banner is fullscreen with dark overlay
- [ ] Course carousel scrolls with "Join Now" overlay buttons
- [ ] CTA split has two image panels with red overlay
- [ ] Features: image left, 3 items right
- [ ] BMI calculator form with inputs and button
- [ ] Gallery: 3x2 grid
- [ ] Testimonials: carousel with avatar/quote/name/role
- [ ] Brand logos: grayscale → color on hover
- [ ] Final CTA with dark overlay
- [ ] Footer: 3 columns, newsletter form, social icons
- [ ] Footer links to Component Dock (not Colorlib)
- [ ] No Colorlib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] `packages/ui` components reused where applicable
