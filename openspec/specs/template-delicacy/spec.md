# Template: Delicacy (Restaurant / Food & Dining)

## Purpose

Recreation of ColorLib **Caviar** — a premium restaurant template with hero slider,
about section, dish menu, awards bar, testimonials carousel, reservation form, and
dark footer.

- **Source slug:** `caviar`
- **Preview URL:** https://preview.colorlib.com/theme/caviar/
- **ColorLib page:** https://colorlib.com/wp/template/caviar/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/delicacy`
- **Deploy target:** `https://delicacy.free.componentdock.com`

## Design tokens (from preview CSS)

| Token             | Value                              | Usage                                       |
| ----------------- | ---------------------------------- | ------------------------------------------- |
| Brand color       | `#ff0000` (pure red)              | Accent links, button hover, dot decorations  |
| Dark surface      | `#333333`                         | Dish menu section bg, footer bg              |
| Body background   | `#fafafa`                         | Page background                              |
| Body text         | `#000000` / `rgba(0,0,0,0.8)`    | Primary / secondary text                     |
| White             | `#ffffff`                         | Hero overlay, button text, headings on dark  |
| Border gray       | `#b2b2b2`                         | Button border                                |
| Input underline   | `#c1c1c1`                         | Form input bottom border                     |
| Light gray bg     | `#f9f9f9`                         | Awards section background                    |
| Body font         | `'Open Sans', sans-serif`         | All body text                                |
| Button font       | `'Work Sans', sans-serif`         | CTA buttons                                  |
| Button shape      | Rectangular (border-radius: 0)    | Flat, no rounded corners                     |
| Button size       | min-width 180px, height 54px      | Generous click target                        |
| Section heading   | 36px, font-weight 700, line-h 1   | All section headings                         |
| Hero overlay      | `rgba(0,0,0,0.6)`                | Full-screen hero background                  |
| Sticky header     | `rgba(0,0,0,0.85)`               | Semi-transparent black when scrolled         |
| Testimonial avatar| border-radius: 50%                | Circular profile images                      |
| Card border       | border-radius: 2px (dish cards)   | Slight rounding on menu cards                |
| Form input        | No border, bottom-only underline  | Clean reservation form                       |

## Visual design (from TEMPLATES.md screenshot)

Dark, moody, upscale restaurant aesthetic. Black/dark-gray hero with red accent.
Full-bleed background images on hero. Clean white sections for About and Awards.
Dark (#333) section for the dish menu with circular avatar-style dish images.
Awards bar with grayscale logos. Testimonials carousel with circular profile
photos. Split reservation section: form left, full-bleed image right. Dark footer
with centered logo and copyright.

## Gherkin requirements

### Feature: Delicacy restaurant template

  Background:
    Given the app is served at the root URL
    And the page loads without errors

  # --- Navbar ---
  Scenario: Navbar displays brand and navigation links
    Then a navigation bar is visible at the top
    And the brand text reads "delicacy"
    And navigation links include "Home", "About Us", "Menu", "Awards", "Testimonials", "Reservation", "Contact"

  Scenario: Navbar becomes sticky on scroll
    When the user scrolls down past the hero
    Then the navbar has a dark semi-transparent background

  # --- Hero ---
  Scenario: Hero section shows a fullscreen background image
    Given the hero section is visible
    Then the hero occupies the full viewport height
    And a background image is displayed
    And the hero text includes a heading and a description paragraph
    And a "Reservation" CTA button is visible

  Scenario: Hero button uses correct styling
    Then the Reservation button has no border-radius
    And the Reservation button has white text on default state
    And the Reservation button shows red text on hover

  # --- About Us ---
  Scenario: About section shows image and text in two-column layout
    Given the "About Us" section is visible
    Then an image is displayed on the left
    And a heading "About Us" is displayed
    And a subtitle "restaurant style" is shown
    And a paragraph of description text is shown

  Scenario: About section has a second row with reversed layout
    When the user scrolls to the second about row
    Then the text content is on the left
    And the image is on the right
    And the subtitle reads "our chef"

  # --- Dish Menu ---
  Scenario: Dish menu shows three dishes in a grid
    Given the "Special" menu section is visible
    Then a heading "Special" is displayed
    And a "View The Menu" button is shown
    And three dish cards are displayed in a row
    And each dish card shows an image, name, and price

  Scenario: Dish menu section has dark background
    Then the dish menu section has a dark background color (#333333)

  # --- Awards ---
  Scenario: Awards section displays award images
    Given the "Awards" section is visible
    Then a heading "Awards" is displayed
    And multiple award images are shown in a horizontal row

  # --- Testimonials ---
  Scenario: Testimonials section shows customer reviews
    Given the "Testimonials" section is visible
    Then a heading "Testimonials" is displayed
    And testimonial cards show a circular avatar, name, and review text

  Scenario: Testimonial avatars are circular
    Then each testimonial avatar has a 50% border-radius

  # --- Reservation ---
  Scenario: Reservation section has form and image side by side
    Given the "Reservation" section is visible
    Then a heading "Reservation" is displayed
    And a form is visible with date, time, persons, name, and message fields
    And a "Reserve Your Desk" submit button is shown
    And an image is displayed alongside the form

  Scenario: Reservation form inputs use underline style
    Then form inputs have no visible border except a bottom underline

  # --- Footer ---
  Scenario: Footer shows brand and copyright
    Given the footer is visible
    Then the footer has a dark background (#333333)
    And the brand text "delicacy" is displayed
    And a copyright notice is shown
    And a link to "https://www.componentdock.com/" is present (Component Dock)

## Verification checklist

- [ ] Navbar: sticky on scroll, dark semi-transparent bg, brand + 7 nav links
- [ ] Hero: fullscreen background image, dark overlay, heading + description + CTA
- [ ] About Us: two-column layout (image left, text right), subtitle "restaurant style"
- [ ] About Us row 2: reversed layout, subtitle "our chef"
- [ ] Dish Menu: dark bg, heading "Special", 3-column grid, dish cards with image/name/price
- [ ] Awards: light bg, heading "Awards", horizontal row of award images
- [ ] Testimonials: heading, carousel of cards with circular avatars + names + reviews
- [ ] Reservation: split layout (form left, image right), underline-style inputs, CTA button
- [ ] Footer: dark bg (#333), brand logo, copyright, Component Dock link
- [ ] Buttons: rectangular (no border-radius), Work Sans font, red hover color
- [ ] Typography: Open Sans body, Work Sans buttons, 36px headings
- [ ] Color palette: red accent #ff0000, dark surface #333333, body bg #fafafa
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] All placeholder images use picsum.photos
