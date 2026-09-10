# Template: Garnish (Restaurant/Culinary Landing Page)

## Purpose

Recreation of ColorLib "Caviar" — a restaurant single-page template with hero slideshow, about section, dish menu, awards, testimonials, and reservation form.

- **ColorLib source:** https://colorlib.com/wp/template/caviar/
- **Live preview:** https://preview.colorlib.com/theme/caviar/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from `style.css` on the live preview:

| Token                | Value                              | Notes                                                  |
| -------------------- | ---------------------------------- | ------------------------------------------------------ |
| Font (body)          | `'Open Sans', sans-serif`          | Google Fonts, general body text                        |
| Font (headings/btns) | `'Work Sans', sans-serif`          | Google Fonts, headings, buttons, nav                   |
| Heading color        | `#000`                             | All h1–h6                                              |
| Body text color      | `#333`                             | Paragraphs, secondary text                             |
| Muted text color     | `#b2b2b2`                         | Borders, muted elements                                |
| Page background      | `#fafafa`                          | Very light gray                                        |
| Section alt bg       | `#f9f9f9`                          | Alternate section backgrounds                          |
| Card background      | `#fff`                             | White cards (testimonials, forms)                      |
| Accent color         | `#ff0000`                          | Red — button hover, interactive highlights             |
| Button bg            | `#fff`                             | White button background                                |
| Button text          | `#000`                             | Black button text                                      |
| Button border        | `1px solid #b2b2b2`               | Gray border on buttons                                 |
| Button hover color   | `#ff0000`                          | Red on hover                                           |
| Button radius        | `0` (square)                       | Sharp corners, no border-radius                        |
| Button min-width     | `180px`                            | Consistent button width                                |
| Button height        | `54px`                             | Fixed button height                                    |
| Image shadow         | `3px 5px 45px rgba(0,0,0,0.15)`  | About section thumbnail                                |
| Testimonial shadow   | `0 0 1px rgba(0,0,0,0.1)`        | Subtle card shadow                                     |
| Hero height          | `770px`                            | Full-width hero slideshow                              |
| Border radius small  | `2px`–`5px`                        | Minor elements (inputs, etc.)                          |
| Border radius round  | `50%`                              | Avatar images                                          |

## Visual Design (from screenshot)

The Caviar template is an elegant, dark-toned restaurant landing page:

- Dark hero section with full-width background image slideshow, left-aligned text content, right-aligned thumbnail navigation
- Clean white/light sections alternating with generous padding
- About Us: two-row alternating layout with large shadow-framed images
- Special dishes: 3-column grid of dish images with names and prices
- Awards: horizontal row of award/logos alongside section heading
- Testimonials: white card with subtle shadow, carousel of customer quotes with avatar thumbnails
- Reservation: split layout — form on left, large background image on right
- Footer: simple centered logo + copyright
- Overall aesthetic: minimalist black/white with red (#ff0000) accent on hover, square buttons, generous whitespace, elegant typography (Work Sans headings + Open Sans body)

## Section Order (from HTML structure)

1. **Navbar** — Fixed/sticky, logo "garnish" left, nav links (Home, Pages dropdown, About Us, Menu, Awards, Testimonials, Reservation), social icons (Facebook, Instagram, Twitter) top-left overlay
2. **Hero** — Full-width background image slideshow (770px height), left-aligned content (heading, paragraph, "Reservation" button), right-aligned thumbnail slider nav image
3. **About Us** — Two alternating rows in container: Row 1 — image left (col-6) + text right (col-5, offset) with "About Us" heading, "restaurant style" subtitle, paragraph; Row 2 — text left (col-5) with "our chef" subtitle + paragraph + image right (col-6)
4. **Dish Menu (Special)** — Centered "Special" heading with large decorative watermark text "Special" behind, "View The Menu" button, 3-column grid of dish cards (image + dish name + price)
5. **Awards** — Left-aligned "Awards" heading (col-2), right-aligned row of 5 award images (col-9) in flex row
6. **Testimonials** — White card with subtle shadow, centered "Testimonials" heading, carousel of 3 testimonials (avatar image + name + subtitle + quote paragraph)
7. **Reservation** — Split layout: left side form area (date input, time input, persons input, last name input, textarea, "Reserve Your Desk" button), right side large background image
8. **Footer** — Centered logo "garnish", copyright line with Component Dock link

## Gherkin Requirements

### Feature: Garnish Restaurant Landing Page

#### Scenario: Navbar renders with navigation links

- GIVEN the user visits the Garnish page
- THEN the header displays the brand name "garnish"
- AND navigation links are present: Home, About Us, Menu, Awards, Testimonials, Reservation
- AND a "Pages" dropdown is present with sub-links
- AND social media icons (Facebook, Instagram, Twitter) are visible as an overlay

#### Scenario: Hero displays full-width image slideshow

- GIVEN the hero section is visible
- THEN a full-width background image slideshow is displayed at 770px height
- AND left-aligned content shows a heading, descriptive paragraph, and "Reservation" CTA button
- AND the CTA button has square corners (border-radius 0), white background, black text, and gray border
- AND a right-aligned thumbnail image serves as slide navigation

#### Scenario: Hero CTA button changes color on hover

- GIVEN the hero "Reservation" button is visible
- WHEN the user hovers over the button
- THEN the text color changes to red (#ff0000)
- AND the button maintains its square shape and border

#### Scenario: About Us section displays two alternating rows

- GIVEN the about section is visible
- THEN the first row shows an image on the left and "About Us" heading + "restaurant style" subtitle + paragraph on the right
- AND the second row shows "our chef" subtitle + paragraph on the left and an image on the right
- AND both images have a box-shadow (3px 5px 45px rgba(0,0,0,0.15))

#### Scenario: Dish Menu section shows 3 special dishes

- GIVEN the dish menu section is visible
- THEN a centered "Special" heading is displayed
- AND a "View The Menu" CTA button with square corners is present
- AND 3 dish cards are displayed in a 3-column grid
- AND each dish card shows an image, dish name, and price ($45)

#### Scenario: Awards section shows 5 award images

- GIVEN the awards section is visible
- THEN a left-aligned "Awards" heading is displayed
- AND 5 award images are shown in a horizontal flex row on the right

#### Scenario: Testimonials section displays customer quotes

- GIVEN the testimonials section is visible
- THEN a white card with subtle shadow is displayed
- AND a centered "Testimonials" heading is shown
- AND 3 testimonials are present, each with an avatar image, name, subtitle, and quote paragraph
- AND testimonial names include Robert Jonson, Clara Hudson, and Jane Black

#### Scenario: Reservation form collects booking details

- GIVEN the reservation section is visible
- THEN a split layout is displayed: form on left, background image on right
- AND a "Reservation" heading is shown above the form
- AND a date picker input is present
- AND a time picker input is present
- AND a "Select Persons" text input is present
- AND a "Last name" text input is present
- AND a "Your Message" textarea is present
- AND a "Reserve Your Desk" button with square corners is present

#### Scenario: Footer shows brand and copyright

- GIVEN the footer is visible
- THEN the brand name "garnish" is displayed centered
- AND a copyright line with "Component Dock" link is shown

## Verification Checklist

- [ ] All 8 sections present in correct order
- [ ] Work Sans font applied to headings and buttons
- [ ] Open Sans font applied to body text
- [ ] Navbar: logo + nav links + social icon overlay
- [ ] Hero: 770px full-width image slideshow with left-aligned content, square CTA button
- [ ] About Us: two alternating rows with shadow-framed images
- [ ] Dish Menu: "Special" heading, "View The Menu" button, 3 dish cards with prices
- [ ] Awards: heading left, 5 award images in flex row right
- [ ] Testimonials: white shadowed card, 3 testimonials with avatars
- [ ] Reservation: split layout form with date/time/persons/name/message fields
- [ ] Footer: centered logo + copyright with Component Dock link
- [ ] All buttons use square corners (border-radius 0)
- [ ] Red (#ff0000) accent on button hover
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] Responsive layout works on mobile
