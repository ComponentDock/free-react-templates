# Template: Grille (Premium Restaurant)

## Purpose

Recreation of ColorLib "Caviar" — a premium restaurant website template with dark
hero imagery, red accent branding, and a reservation-focused layout.

- **Source slug:** `caviar`
- **Preview URL:** https://preview.colorlib.com/theme/caviar/
- **ColorLib page:** https://colorlib.com/wp/template/caviar/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`style.css`):

| Token | Value | Notes |
|---|---|---|
| Brand color | `#ff0000` (red) | Buttons, hover states, accents |
| Body font | `'Open Sans', sans-serif` | Google Fonts, body text |
| Button font | `'Work Sans', sans-serif` | CTA buttons only |
| Body background | `#fafafa` | Light gray page background |
| Text color | `#000` / `rgba(0,0,0,0.8)` | Headings / body |
| Button bg | `#fff` | White button with black text |
| Button border-radius | `0` | Sharp/square corners |
| Button min-width | `180px` | CTA sizing |
| Button indicator | `#ff0000` circle, 8px | Circular span accent on button |
| Header (scroll) | `rgba(0,0,0,0.85)` | Semi-transparent black sticky header |
| Footer bg | `#333333` | Dark charcoal footer |
| Section heading | `36px`, weight `700` | Bold section titles |
| Form inputs | `border-bottom: 1px solid #c1c1c1` | Underline-style inputs, no border |
| Social links | `#fff` | White, vertical left-side stack |
| Testimonial borders | `1px solid #eaeaea` | Subtle card borders |
| Section padding-bottom | `200px` | Generous section spacing |

## Section Structure (in page order)

1. **Navbar** — fixed, transparent over hero → semi-transparent dark on scroll.
   Brand logo "caviar" (lowercase). Nav links: Home, Pages (dropdown),
   About Us, Menu, Awards, Testimonials, Reservation, Contact.
   Search icon button on the right.
2. **Hero** — full-width carousel/slider with background images. Each slide:
   heading "Lorem Ipsum", body text, CTA button ("Reservation"). Left-side
   vertical social links (Facebook, Instagram, Twitter). Slide thumbnail nav
   on the right edge.
3. **About Us** — two-column layout. Row 1: image left, text right
   (span "restaurant style" + paragraph). Row 2: reversed — text left
   ("our chef" + paragraph), image right. 200px top padding on row 2.
4. **Dish Menu** — section heading "Special" centered. "View The Menu" button.
   3-column grid of dish cards: circular food image, dish name, price.
   Cards show hover effect (name + price color change to red).
5. **Awards** — section heading "Awards" left-aligned. Horizontal row of 5
   award badge images with flex justify-between.
6. **Testimonials** — section heading "Testimonials" centered. Carousel of
   testimonial cards: avatar image + name/title, then quote text.
   Cards have subtle left/right borders.
7. **Reservation** — split layout: form area (left 50%) with inputs
   (date, time, persons, name, message textarea) + "Reserve Your Desk" button,
   side image (right 50%). Underline-style form inputs.
8. **Footer** — dark (#333) background. Brand logo + copyright with
   Component Dock attribution link.

## Gherkin Scenarios

### Navbar

```gherkin
Scenario: Navbar displays all navigation links
  Given the user visits the Grille homepage
  Then the navbar shows links: Home, About Us, Menu, Awards, Testimonials, Reservation, Contact
  And the brand logo displays "grille"
  And a search icon button is visible on the right

Scenario: Navbar becomes sticky on scroll
  Given the user scrolls down the page
  Then the navbar background changes to semi-transparent dark (#rgba(0,0,0,0.85))
  And the navbar height adjusts to 70px

Scenario: Navbar is responsive
  Given the viewport is mobile width
  Then a hamburger menu toggle button appears
  And clicking it toggles the navigation menu visibility
```

### Hero

```gherkin
Scenario: Hero displays a background image with overlay text
  Given the user views the homepage
  Then a full-width hero section is visible
  And it contains a heading and body paragraph
  And a "Reservation" CTA button is displayed

Scenario: Hero has social links
  Given the hero section is visible
  Then vertical social media links (Facebook, Instagram, Twitter) appear on the left side
  And the links are white colored

Scenario: Hero has slide navigation
  Given the hero carousel is active
  Then a thumbnail nav appears on the right edge of the hero
  And clicking it navigates between slides
```

### About Us

```gherkin
Scenario: About Us shows two-column layout
  Given the user scrolls to the About Us section
  Then an image appears on the left with text on the right
  And the text includes a "restaurant style" label and a paragraph

Scenario: About Us has a second row reversed
  Given the user views the second row of About Us
  Then text appears on the left with "our chef" label
  And an image appears on the right
```

### Dish Menu

```gherkin
Scenario: Dish Menu section displays heading and CTA
  Given the user scrolls to the Dish Menu section
  Then a centered "Special" heading is visible
  And a "View The Menu" button is displayed below

Scenario: Dish Menu shows a 3-column grid of dishes
  Given the Dish Menu section is loaded
  Then 3 dish cards are displayed in a row
  And each card has a food image, dish name, and price

Scenario: Dish cards show hover effect
  Given the user hovers over a dish card
  Then the dish name and price text change to the brand red color
```

### Awards

```gherkin
Scenario: Awards section displays badge images
  Given the user scrolls to the Awards section
  Then an "Awards" heading appears on the left
  And 5 award badge images are displayed in a horizontal row
```

### Testimonials

```gherkin
Scenario: Testimonials section shows carousel
  Given the user scrolls to the Testimonials section
  Then a "Testimonials" heading is centered
  And testimonial cards are displayed in a carousel

Scenario: Testimonial card displays avatar and quote
  Given a testimonial card is visible
  Then it shows an avatar image, person name, and title
  And a quote paragraph is displayed below
```

### Reservation

```gherkin
Scenario: Reservation form has all required fields
  Given the user scrolls to the Reservation section
  Then a "Reservation" heading is visible
  And the form contains: date input, time input, persons input, name input, message textarea
  And a "Reserve Your Desk" button is displayed

Scenario: Reservation form has underline-style inputs
  Given the reservation form is displayed
  Then form inputs have a bottom border only (no full border)
  And focus state shows no box-shadow

Scenario: Reservation section has a side image
  Given the Reservation section is visible
  Then a food/restaurant image appears to the right of the form
```

### Footer

```gherkin
Scenario: Footer displays brand and copyright
  Given the user scrolls to the footer
  Then a dark background (#333) footer is visible
  And the brand logo "grille" is displayed
  And a copyright line with Component Dock link is shown
```

## Verification Checklist

- [ ] All 8 sections render in correct page order
- [ ] Navbar is fixed, transparent → dark on scroll
- [ ] Hero carousel slides with background images
- [ ] Social links vertical stack on hero left side
- [ ] About Us two-column layout with image/text alternation
- [ ] Dish Menu 3-column grid with hover effects
- [ ] Awards horizontal row of 5 badges
- [ ] Testimonials carousel with avatar + quote cards
- [ ] Reservation form with underline inputs + side image
- [ ] Footer dark with brand + Component Dock link
- [ ] Brand color #ff0000 used for CTAs and accents
- [ ] Fonts: Open Sans (body) + Work Sans (buttons)
- [ ] Responsive layout works at mobile breakpoints
- [ ] All placeholder images use picsum.photos seeds
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] `npm run verify:app grille` passes
