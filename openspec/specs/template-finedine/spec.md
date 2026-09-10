# Template: FineDine (Premium Restaurant)

## Purpose

Recreation of ColorLib "Caviar" — a premium restaurant single-page template.
- **ColorLib source:** https://colorlib.com/wp/template/caviar/
- **Live preview:** https://preview.colorlib.com/theme/caviar/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from `style.css` on the live preview:

| Token             | Value                                | Notes                                         |
| ----------------- | ------------------------------------ | --------------------------------------------- |
| Font (body)       | `'Open Sans', sans-serif`            | Google Fonts import, weight 300–700            |
| Font (accent)     | `'Work Sans', sans-serif`            | Used on buttons, sub-labels, filter buttons    |
| Heading color     | `#000`                               | All h1–h6                                     |
| Body text color   | `rgba(0,0,0,0.8)`                   | Paragraphs                                    |
| Body background   | `#fafafa`                            | Page-level background                          |
| Brand accent      | `#ff0000`                            | Red — buttons, hover states, links, prices     |
| Button bg         | `#fff`                               | `.caviar-btn` white with `#b2b2b2` border     |
| Button hover      | `#ff0000` text + red circle span     | No border-radius (sharp corners)              |
| Footer bg         | `#333333`                            | Dark footer                                    |
| Footer text       | `rgba(255,255,255,0.2)`             | Subtle copyright text                          |
| Nav (sticky bg)   | `rgba(0,0,0,0.85)`                  | Semi-transparent dark on scroll                |
| Hero overlay      | `rgba(0,0,0,0.6)`                   | Dark overlay on background images              |
| Testimonial bg    | `#fff`                               | White card with subtle shadow                  |
| Scroll-up btn     | `#ff0000` bg, `#fff` text           | 3px border-radius                              |
| Input border      | `#c1c1c1` bottom-only               | Reservation form inputs, no top/side borders   |

## Visual Design (from screenshot)

The Caviar template is a dark, moody, premium restaurant landing page:
- Dark/black header area with transparent navbar over a full-width hero image
- The hero is a large food photograph with dark overlay, white text, and a CTA button
- A small circular thumbnail slider nav appears in the bottom-right of the hero
- About Us section: alternating left/right image+text blocks on white background
- Menu section: 3-column grid of dish photos with white card backgrounds, dish name + price
- Awards section: horizontal row of badge/logo images
- Testimonials: white card with avatar thumbnails, reviewer names, and quotes
- Reservation section: split layout — form on left, large food image on right
- Footer: dark (#333) background, centered brand name + copyright
- Overall aesthetic: elegant, high-contrast (black/white/red), restaurant/food theme
- Red (#ff0000) is the accent color used on buttons, prices, and hover states
- Buttons have a distinctive design: white bg, thin gray border, with a small red circle element

## Section Order (from HTML structure)

1. **Header/Navbar** — Transparent, logo left ("caviar" text), nav links right (Home, Pages dropdown, About Us, Menu, Awards, Testimonials, Reservation, Contact), search icon, becomes sticky dark on scroll
2. **Hero** — Full-width carousel with background food images, dark overlay, white heading "Lorem Ipsum", subtext paragraph, "Reservation" CTA button, small circular thumbnail nav
3. **About Us** — Two alternating blocks: (a) image left + text right ("restaurant style" sublabel + paragraph), (b) text left ("our chef" sublabel) + image right; generous section padding (~150px)
4. **Dish Menu / Special** — "Special" heading centered, "View The Menu" button, 3-column grid of dish cards (image on transparent/white bg, dish name, price in red)
5. **Awards** — "Awards" heading left, horizontal row of 5 award badge images (right-aligned)
6. **Testimonials** — "Testimonials" heading centered, carousel of testimonial cards with avatar photo (circular, 80px), name + subtitle, quote text
7. **Reservation** — Split layout: form area (left, ~50%) with date, time, persons, name, message inputs + "Reserve Your Desk" button; image area (right, ~50%+)
8. **Footer** — Dark (#333) bg, centered brand name, copyright text with heart icon

## Gherkin Requirements

### Feature: FineDine Restaurant Template

#### Scenario: Header renders with navigation links
- GIVEN the user visits the FineDine page
- THEN the header displays the brand name "FineDine"
- AND navigation links are present: Home, About Us, Menu, Awards, Testimonials, Reservation, Contact
- AND a search icon is visible in the navigation

#### Scenario: Header becomes sticky on scroll
- GIVEN the user scrolls down past the hero section
- THEN the header background transitions to a semi-transparent dark overlay
- AND navigation text remains white/visible

#### Scenario: Hero section displays with carousel
- GIVEN the hero section is visible
- THEN a full-width background image is displayed with a dark overlay
- AND a heading and descriptive paragraph are shown in white text
- AND a "Reservation" CTA button is present
- AND circular thumbnail navigation controls are visible

#### Scenario: Hero CTA button has correct styling
- GIVEN the hero CTA button is rendered
- THEN the button has a white background with a thin gray border
- AND no border-radius (sharp corners)
- AND a small red circle element is present inside the button
- AND on hover the text color changes to red (#ff0000)

#### Scenario: About Us section displays two content blocks
- GIVEN the About Us section is visible
- THEN the first block shows an image on the left and text on the right
- AND the text block has a "restaurant style" sublabel and descriptive paragraph
- AND the second block shows text on the left and an image on the right
- AND the second text block has a "our chef" sublabel

#### Scenario: Dish Menu section displays a grid of dishes
- GIVEN the Menu section is visible
- THEN a "Special" heading is displayed centered
- AND a "View The Menu" button is present
- AND a 3-column grid of dish cards is shown
- AND each dish card has an image, dish name, and price in red

#### Scenario: Awards section displays badge images
- GIVEN the Awards section is visible
- THEN an "Awards" heading is displayed
- AND a horizontal row of award badge images is shown

#### Scenario: Testimonials carousel functions correctly
- GIVEN the Testimonials section is visible
- THEN a "Testimonials" heading is displayed centered
- AND testimonial cards are shown in a carousel/slider
- AND each card has a circular avatar image, reviewer name, subtitle, and quote text

#### Scenario: Reservation form is functional
- GIVEN the Reservation section is visible
- THEN a form is displayed with inputs for: date, time, persons count, last name, and message
- AND a "Reserve Your Desk" button is present
- AND form inputs have bottom-border-only styling (no top/side borders)
- AND on focus the input text becomes darker

#### Scenario: Reservation section has split layout
- GIVEN the Reservation section is visible
- THEN the form occupies approximately the left half of the section
- AND a food image occupies approximately the right half

#### Scenario: Footer displays correctly
- GIVEN the page footer is visible
- THEN the background color is dark (#333333)
- AND the brand name "FineDine" is centered
- AND a copyright notice is displayed with a heart icon
- AND a link to Component Dock is present

#### Scenario: Responsive layout adapts to mobile
- GIVEN the user views the page on a mobile viewport
- THEN the navigation collapses into a hamburger menu
- AND the About Us blocks stack vertically
- AND the dish menu grid becomes single-column
- AND the reservation section stacks vertically (form above image)

## Verification Checklist

- [ ] Header with transparent navbar and sticky scroll behavior
- [ ] Hero carousel with background images, overlay, heading, CTA
- [ ] About Us with two alternating image/text blocks
- [ ] Dish Menu grid (3-column desktop) with dish cards
- [ ] Awards section with badge row
- [ ] Testimonials carousel with avatar cards
- [ ] Reservation form with split layout
- [ ] Footer with dark background, centered text
- [ ] Brand accent color (#ff0000) applied consistently
- [ ] Typography: Open Sans (body) + Work Sans (accent)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to componentdock.com
- [ ] All placeholder images via picsum.photos
- [ ] Mobile responsive layout
