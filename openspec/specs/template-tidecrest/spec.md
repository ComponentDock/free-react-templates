# Template: Tidecrest (Hotel / Resort Landing)

## Purpose

Recreation of ColorLib's **Ocheandeview** — a luxury beach resort / hotel
landing page.

- **Source:** https://colorlib.com/wp/template/ocheandeview/
- **Preview:** https://preview.colorlib.com/theme/ocheandeview/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Vitest + Testing Library
- **New name:** `tidecrest` (no reuse of ColorLib source slug)
- **Deploy:** https://tidecrest.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token          | Value / Notes                                                |
| -------------- | ------------------------------------------------------------ |
| Font (body)    | `"Raleway", sans-serif` (via Google Fonts)                   |
| Font (heading) | `"Cormorant Garamond", serif` (via Google Fonts)             |
| Brand color    | `#85856D` — muted olive / sage (`.theme-color`, `.theme-bg`) |
| Accent color   | `#B8B8A0` — lighter olive (buttons, links, border accents)   |
| Heading color  | `#3C3A34` — dark warm charcoal                               |
| Body text      | `#94817E` — muted brown/taupe                                |
| Section bg     | `#FAFAF8` (`.section-bg`) — off-white warm                   |
| White bg       | `#ffffff`                                                    |
| Dark bg        | `#16161a`                                                    |
| Button primary | Background `#B8B8A0`, white text, round (25px radius)        |
| Button hover   | Inverted — white bg, `#B8B8A0` text + border                 |
| Scroll-top     | `#85856D` circle, white icon                                 |
| Border radius  | `25px` on booking inputs, `50px` on CTA buttons              |
| Overlay        | Dark gradient overlay on hero/video (`data-overlay`)         |

## Visual design (from preview screenshot)

Warm, earthy luxury hotel aesthetic. The hero features a full-bleed
background image with a dark gradient overlay, an animated bouncing arrow
pointing down to the booking form, a large serif heading ("Ochean de View"),
and a two-line subtitle. The booking form sits on a white card with rounded
date inputs and a "Check Availability" CTA. Below that, a video/about section
has a dark overlay background, followed by a "Pampering Included" carousel
with prev/next controls. Three feature cards (restaurant, pool, party center)
with images and text sit in a 3-column grid. A testimonial carousel with
tabbed pagination follows. Then a photo gallery grid of 13 thumbnail images.
The footer is dark with logo, hotel links, phone, email, and social icons.

## Section structure (top-to-bottom order)

1. **Header / Navbar** — transparent-over-hero, logo left, nav right
   (Home, Rooms, About, Gallery, Blog, Contact), "Call Us" phone link,
   "Book Now" CTA button, hamburger menu on mobile
2. **Hero** — full-bleed bg image, dark gradient overlay, animated
   bouncing arrow SVG, `<h1>` heading, 2-line subtitle paragraph
3. **Booking Form** — white card with 3 columns: Check-In date,
   Check-Out date, Guest select dropdown, "Check Availability" CTA link
4. **About / Video Section** — section-bg (#FAFAF8), 2-column layout:
   left = heading, right = two paragraphs. Below: embedded video area
   with dark overlay background image
5. **Pampering / Carousel** — section-bg, centered heading + paragraph,
   slick/owl carousel with prev/next arrows, slide content
6. **Features Grid** — heading "Joyful experiences for you and your
   family", 3-column grid of image+title+description cards
7. **Testimonials** — heading "Hear what our past guests have to say",
   tabbed carousel (tablist with dot indicators)
8. **Gallery** — row of 13 thumbnail image links in a flex-wrap grid
9. **Footer** — dark bg, 3 columns: logo + description text, "The Hotel"
   nav links, phone + email + social icons. "Colorlib" attribution in
   original (replaced with Component Dock link in recreation)

## Gherkin requirements

### Feature: Header / Navbar

```gherkin
Scenario: Transparent header overlays hero
  Given the page is loaded
  When the user views the header
  Then the header is transparent and overlays the hero image
  And the logo is displayed on the left
  And navigation links (Home, Rooms, About, Gallery, Blog, Contact) are visible

Scenario: Mobile hamburger menu
  Given the viewport is <= 768px wide
  When the user taps the hamburger icon
  Then the off-canvas menu slides in from the right
  And navigation links are listed vertically
  And social/contact info is displayed at the bottom

Scenario: Book Now CTA
  Given the header is rendered
  When the user clicks "Book Now"
  Then the page scrolls to the booking form section
```

### Feature: Hero Section

```gherkin
Scenario: Hero displays heading and subtitle
  Given the hero section is visible
  Then the heading "Tidecrest" is displayed in large serif font
  And a two-line subtitle is displayed below

Scenario: Bouncing arrow animation
  Given the hero section is visible
  Then an arrow SVG is displayed with a float-bob animation
  And clicking the arrow scrolls to the booking section
```

### Feature: Booking Form

```gherkin
Scenario: Booking form fields
  Given the booking section is visible
  Then a Check-In date input is displayed with placeholder "DD/MM/YY"
  And a Check-Out date input is displayed with placeholder "DD/MM/YY"
  And a Guest dropdown selector is displayed

Scenario: Check Availability button
  Given the booking form is filled
  When the user clicks "Check Availability"
  Then the form action is triggered (prevent default)
```

### Feature: About / Video Section

```gherkin
Scenario: About section displays heading and text
  Given the about section is visible
  Then a heading "The shelter is the Outcome of the Dream" is shown
  And two descriptive paragraphs are displayed in a 2-column layout

Scenario: Video area with overlay
  Given the about section is visible
  Then a video area with dark overlay background is displayed
```

### Feature: Carousel Section

```gherkin
Scenario: Carousel displays content
  Given the pampering section is visible
  Then a heading and paragraph are displayed
  And a carousel with previous/next navigation arrows is shown
```

### Feature: Features Grid

```gherkin
Scenario: Three feature cards
  Given the features section is visible
  Then a heading "Joyful experiences for you and your family" is shown
  And 3 cards are displayed in a grid, each with an image, heading, and description
  And the headings are "A world-class restaurant", "Swimming Pool", "Party Center"
```

### Feature: Testimonials

```gherkin
Scenario: Testimonial tabs
  Given the testimonials section is visible
  Then a heading "Hear what our past guests have to say" is shown
  And tabbed navigation dots are displayed
  And clicking a tab switches the visible testimonial panel
```

### Feature: Gallery

```gherkin
Scenario: Gallery grid
  Given the gallery section is visible
  Then 13 thumbnail images are displayed in a flex-wrap grid
  And each image links to a destination (href)
```

### Feature: Footer

```gherkin
Scenario: Footer layout
  Given the footer is visible
  Then the footer has a dark background
  And the logo is displayed on the left
  And "The Hotel" links list is displayed (Rooms, The Spa, Experiences, Offers, Contact)
  And phone number and email are shown
  And social media icon links are displayed

Scenario: Footer component dock link
  Given the footer is rendered
  Then a link to https://www.componentdock.com/ is present
```

## Verification checklist

- [ ] Header is transparent and overlays the hero
- [ ] Navigation links match: Home, Rooms, About, Gallery, Blog, Contact
- [ ] Hero has full-bleed background with dark gradient overlay
- [ ] Hero heading uses Cormorant Garamond serif font
- [ ] Bouncing arrow animation is present
- [ ] Booking form has Check-In, Check-Out date inputs and Guest dropdown
- [ ] "Check Availability" CTA is styled with rounded pill shape
- [ ] About section has 2-column layout on desktop, stacked on mobile
- [ ] Video area has dark overlay background
- [ ] Carousel has prev/next navigation controls
- [ ] Features grid shows 3 cards with images and descriptions
- [ ] Testimonials has tabbed dot navigation
- [ ] Gallery shows 13 images in a grid
- [ ] Footer has dark background, logo, nav links, contact info, social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] Brand color #85856D used for accents and scroll-to-top button
- [ ] Accent color #B8B8A0 used for buttons and interactive elements
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] Responsive: single-column stacking on mobile, hamburger menu
