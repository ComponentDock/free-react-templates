# Template: Seascape (Hotel / Resort / Luxury Stay)

## Purpose

Recreation of ColorLib's **The River** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/theriver/
- **Preview:** https://preview.colorlib.com/theme/theriver/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/theriver-free-template.jpg
- **Original name:** The River — must NOT appear in app code, comments, or assets.
- **Category:** Hotel / Resort / Luxury Stay

## Design Tokens (extracted from live preview CSS)

| Token              | Value                       | Notes                                     |
| ------------------ | --------------------------- | ----------------------------------------- |
| Brand primary      | `#ffa37b` (coral/salmon)    | Buttons, active nav, hover, booking CTA   |
| Brand accent       | `#ff6347` (tomato)          | Link active state                         |
| Brand selection    | `rgba(255,163,123,1)`       | Same as primary, text selection highlight  |
| Heading color      | `#393939`                   | h1–h6, dark charcoal                      |
| Body text          | `#6d6d6d`                   | Paragraph copy                            |
| Subtle text        | `#a5a5a5`                   | Body default, secondary                   |
| Star rating        | `#ffb400` (gold)            | Testimonial star icons                     |
| Star rating alt    | `#690772` (purple)          | Alternate rating color                     |
| Background (page)  | `#FFFFFF`                   | White body                                |
| Background (dark)  | `#0f0e24`                   | Dark navy (footer/booking overlay)         |
| Background (overlay)| `rgba(13,11,24,0.79)`      | Testimonials overlay                       |
| Nav overlay        | `rgba(0,0,0,0.7)`          | Scrolled header backdrop                   |
| Font family        | `Raleway` (Google Fonts)    | 300–900 weights, primary typeface          |
| Heading weight     | `600`                       | All h tags                                 |
| Body font weight   | `400`–`500`                 | Body paragraphs                           |
| Button radius      | `0` (square)                | Booking button, book now — no border-radius|
| Button padding     | 10px 30px (approx)          | Booking CTA                                |
| Link hover bg      | `#ffa07f`                   | Paragraph link hover background            |
| Logo border        | `2px solid #ffffff`         | White-bordered logo box in header          |
| Rating stars       | FontAwesome star icons       | 5-star layout                              |

## Section Structure (from live preview DOM)

Order extracted from `https://preview.colorlib.com/theme/theriver/`:

1. **Header** — Fixed transparent header with logo (white border box), main nav (Home, About us, Rooms, Blog, Contact), "Book Online" CTA button (coral bg), phone number widget with icon
2. **Hero / Home Slider** — Full-width image carousel (OwlCarousel), centered "A Luxury Stay" headline over dark image, booking form (Check in, Check out, Children, Room inputs + "Book Now" CTA), numbered slide dots (01. 02. 03.)
3. **Features** — 3-column icon boxes (Fabulous Resort, Infinity Pool, Luxury Rooms) with SVG icons, titles, and description text; centered alignment
4. **Gallery** — Horizontal image carousel (4 images, OwlCarousel), full-width image slides with lightbox links
5. **About** — 2-column: left = heading "The River / 10 years of excellence" + descriptive paragraph; right = 3 inline images side-by-side
6. **Testimonials** — Parallax background image with dark overlay, testimonial slider (star rating, title link, review text, user avatar image, author name + location)
7. **Booking** — "Book a room" heading + description text, 3-column room cards (Family Room, Deluxe Room, Single Room) with background images, dark overlay on hover, price badge ($120/Night), link to booking page
8. **Blog** — Horizontal blog post slider (3 slides), each with background image, date link, and post title link overlay
9. **Footer** — Dark background (`#0f0e24`), centered logo "The River / since 1945", 4-column row: Address (3-line list), Reservations (phone/fax/email), Newsletter (email input + subscribe button), Certificates (2 images); copyright bar at bottom

## Gherkin Requirements

### Header

```gherkin
Feature: Seascape Header
  Scenario: Logo renders with white border
    Given the page loads
    Then the logo "Seascape" is displayed inside a white-bordered box

  Scenario: Navigation links are visible
    Given the page loads
    Then the nav shows: Home, About us, Rooms, Blog, Contact

  Scenario: Book Online button is visible
    Given the page loads
    Then a "Book Online" button with coral background is displayed in the header

  Scenario: Phone number widget is visible
    Given the page loads
    Then a phone icon and number are displayed next to the Book Online button

  Scenario: Header becomes opaque on scroll
    Given the user scrolls down
    Then the header background transitions from transparent to a dark semi-transparent overlay
```

### Hero / Home Slider

```gherkin
Feature: Seascape Hero
  Scenario: Hero displays headline
    Given the hero section is visible
    Then the headline "A Luxury Stay" is centered over the background image

  Scenario: Booking form has correct inputs
    Given the hero section is visible
    Then inputs for "Check in", "Check out", "Children", and "Room" are present

  Scenario: Book Now button exists
    Given the hero section is visible
    Then a "Book Now" button is displayed with coral background

  Scenario: Slide dots are numbered
    Given the hero slider is visible
    Then numbered dots "01.", "02.", "03." are shown at the bottom left
```

### Features

```gherkin
Feature: Seascape Features
  Scenario: Three feature cards are shown
    Given the features section is visible
    Then 3 icon boxes are displayed in a row
    And each has an SVG icon, a heading, and a description paragraph

  Scenario: Feature titles match design
    Given the features section is visible
    Then the titles are "Fabulous Resort", "Infinity Pool", "Luxury Rooms"
```

### Gallery

```gherkin
Feature: Seascape Gallery
  Scenario: Gallery displays image slides
    Given the gallery section is visible
    Then at least 4 image slides are rendered in a horizontal carousel
    And each slide is a full-width background image
```

### About

```gherkin
Feature: Seascape About
  Scenario: About section has text and images
    Given the about section is visible
    Then a heading and paragraph are on the left
    And 3 inline images are on the right

  Scenario: About heading content
    Given the about section is visible
    Then the heading contains "10 years of excellence"
```

### Testimonials

```gherkin
Feature: Seascape Testimonials
  Scenario: Testimonials show on parallax background
    Given the testimonials section is visible
    Then a parallax background image with dark overlay is displayed

  Scenario: Testimonial cards have ratings and authors
    Given the testimonials slider is visible
    Then each slide shows star ratings, a title, review text, a user avatar, and author name with location
```

### Booking

```gherkin
Feature: Seascape Booking
  Scenario: Booking section shows room cards
    Given the booking section is visible
    Then 3 room cards are displayed: Family Room, Deluxe Room, Single Room
    And each card has a background image, price badge ($120/Night), and a link

  Scenario: Booking section has heading
    Given the booking section is visible
    Then the heading "Book a room" is displayed
```

### Blog

```gherkin
Feature: Seascape Blog
  Scenario: Blog slider shows posts
    Given the blog section is visible
    Then at least 3 blog slides are shown with background images, dates, and post titles
```

### Footer

```gherkin
Feature: Seascape Footer
  Scenario: Footer has logo and 4 columns
    Given the footer is visible
    Then a centered logo/name is displayed
    And 4 columns are shown: Address, Reservations, Newsletter, Certificates

  Scenario: Newsletter form has email input and button
    Given the footer newsletter column is visible
    Then an email input and "Subscribe" button are present

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a link to "https://www.componentdock.com/" is present
```

## Verification Checklist

- [ ] Section order matches original: Header → Hero → Features → Gallery → About → Testimonials → Booking → Blog → Footer
- [ ] Brand color `#ffa37b` (coral) used for CTA buttons, active nav, hover states
- [ ] Font family `Raleway` loaded from Google Fonts
- [ ] Hero has full-width background image with centered booking form
- [ ] Features section has 3 icon boxes with SVG icons
- [ ] Gallery is a horizontal image carousel
- [ ] About section is 2-column: text left, images right
- [ ] Testimonials have parallax background with dark overlay
- [ ] Booking cards show price badges and room links
- [ ] Blog section is a horizontal post slider
- [ ] Footer is dark (`#0f0e24`) with 4-column layout and newsletter form
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to "The River" or "Colorlib" in app code
- [ ] Images use `https://picsum.photos/seed/seascape-<n>/<w>/<h>` placeholders
- [ ] Placeholder images are deterministic per template seed
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run spec:validate` passes
- [ ] Build succeeds: `npm run build`
