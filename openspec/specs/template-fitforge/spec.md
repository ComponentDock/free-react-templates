# Template: Fitforge (Fitness / Crossfit)

## Purpose

Fitforge is a single-page fitness / crossfit gym website in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Crossbody" free template, built under a DIFFERENT name
(**Fitforge**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

- **Source:** https://colorlib.com/wp/template/crossbody/
- **Preview:** https://preview.colorlib.com/theme/crossbody/
- **New name:** `fitforge` (apps/fitforge, @free-react-templates/fitforge)
- **Deploy target:** https://fitforge.free.componentdock.com
- **Category:** Fitness / Crossfit
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/crossbody-free-template.jpg

## Design Tokens

Extracted from the live preview stylesheet
(`css/style.css` at `preview.colorlib.com/theme/crossbody/`) and
the Cloudflare-hosted Work Sans font-face declarations in the HTML.

### Colors

| Token                   | Value             | Usage                                |
| ----------------------- | ----------------- | ------------------------------------ |
| `--color-primary`       | `#ff0055`         | Brand pink (button gradient start)   |
| `--color-primary-end`   | `#ff6600`         | Brand orange (button gradient end)   |
| `--color-accent`        | `#3fc3e8`         | Light blue accent (loader, counters) |
| `--color-dark`          | `#0d0d0d`         | Dark sections, navbar                |
| `--color-darker`        | `#141414`         | Deeper dark bg                       |
| `--color-surface`       | `#f7f7f7`         | Light section backgrounds            |
| `--color-text`          | `#212529`         | Body text                            |
| `--color-text-muted`    | `#6c757d`         | Secondary text                       |
| `--color-border`        | `#dee2e6`         | Form borders, dividers               |
| `--color-white`         | `#fff`            | Navbar text, headings on dark        |

**Button gradient:** `linear-gradient(135deg, #ff0055 0%, #ff6600 100%)`
(a vivid pink-to-orange diagonal gradient, applied on `.btn-custom`).
**Navbar:** Solid dark (`#0d0d0d` / `#1d2124`).
**Counter section:** Dark overlay on a photo (`ftco-counter ftco-bg-dark`).
**Appointment/contact section:** Black background (`#000`) with overlay.
**Testimony section:** Photo background with dark overlay.
**Gallery section:** Four equal-width image columns with hover overlay.

### Fonts

| Font     | Family                      | Usage                       |
| -------- | --------------------------- | --------------------------- |
| Primary  | `'Work Sans', sans-serif`   | All headings, body, nav     |
| Weights  | 100–900 (full range loaded) | Light–Black via Google Fonts |

Work Sans is loaded from Google Fonts / Cloudflare edge. All weights
100–900 are declared. The original uses weights 300 (light), 400 (regular),
500 (medium), 600 (semibold), 700 (bold), 800 (extrabold), 900 (black).

### Button / CTA Shape

- **Border-radius:** `30px` (rounded pill shape)
- **Default:** gradient `#ff0055 → #ff6600`, white text, padding `16px 24px`
- **Hover:** slightly darker or brighter gradient shift
- **Position (pricing cards):** absolutely positioned top-right corner

### Section Backgrounds

- Hero: photo background (`bg_2.jpg`) with dark overlay, parallax
- Pricing cards: photo backgrounds (`program-1/2/3.jpg`) with gradient overlay
- Counter: dark photo background (`bg_2.jpg`) with dark overlay
- Testimony: photo background (`bg_4.jpg`) with dark overlay
- Appointment/Contact: black background with overlay
- Gallery: four full-width image columns

## Section Structure (DOM order)

1. **Navbar** — Dark top navbar with brand "Fitforge", toggle button, right-aligned
   nav links: Home, About, Classes, Trainers, Pricing, Blog, Contact.
2. **Hero** — Full-height hero with parallax photo background, dark overlay.
   Left-side video play button ("Crossfit Workout Harder — Watch Our Video").
   Centered large heading "Cross Body" (rendered as background-clipped text with
   photo fill), subheading "Crossfit. Working Harder".
3. **Pricing** — Section heading "Pricing For Courses" with decorative diamond
   icons. 3-column pricing cards with photo backgrounds. Each card has a
   title area ("Weight Lifting"), bottom content with price ($240.00),
   description, and gradient "Enroll Now" pill button at top-right corner.
   Center card has `.active` class (highlighted state).
4. **Programs** — Split layout: left column photo, right column with 5 program
   items (Crossfit, Aerobic Classes, Fitness, Yoga Classes, Cardio Training).
   Each item has a gym icon and description text, right-aligned on desktop.
5. **Counter** — Dark parallax band with 4 stat counters: Happy Customers (5000),
   Perfect Bodies (4560), Working Hours (570), Success Stories (900).
   Animated number counting on scroll.
6. **Coaches** — Section heading "Our Coaches" with diamond decorations.
   4 coach cards in 2-column layout. Each card is a side-by-side layout:
   photo on one side, text (role, name, description, social icons) on the other.
   Alternating image/text order (first: image left; second: image right).
   Social: Twitter, Facebook, Instagram icon links.
7. **Testimony** — Photo background with dark overlay. Heading "What People Say".
   Owl carousel of testimonial cards, each with circular user photo,
   quote icon, testimonial text, name "Roger Scott", role "Customer".
8. **Blog** — Section heading "Recent Blog" with diamond decorations.
   3-column blog cards, each with a background image, date sidebar
   (day, month, year stacked vertically), title, and excerpt.
9. **Contact** — Split layout: left half is a Google Maps placeholder,
   right half has heading "Contact With Us", form with fields:
   First Name, Last Name, Email Address, Phone, Message (textarea),
   and "Appointment" submit button (Bootstrap primary style).
10. **Gallery** — 4-column equal-width image grid with hover overlay and
    search icon. Links to a gallery page.
11. **Footer** — Dark photo background with overlay. 4 columns:
    About Us (description + social icons), Recent Blog (2 posts with
    images), Services (Crossfit, Aerobics, Fitness, Yoga links),
    Have a Questions? (address, phone, email). Bottom copyright line
    with Component Dock credit.

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark top navigation bar with the brand name
"Fitforge" and navigation links: Home, About, Classes, Trainers, Pricing,
Blog, Contact.

#### Scenario: Navbar links visible

- **GIVEN** the page is loaded
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand "Fitforge" on the left
- **AND** it SHALL show nav links aligned to the right
- **AND** the navbar SHALL have a dark background (#0d0d0d)
- **AND** the navbar SHALL be sticky at the top of the page

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport width is below the lg breakpoint
- **WHEN** the user taps the hamburger toggle
- **THEN** the nav links SHALL be revealed in a collapsible dropdown

### Requirement: Hero section

The system SHALL render a full-height hero section with a parallax photo
background, dark overlay, a large heading, a subheading, and a video
play button with label text.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the heading "Cross Body" (split across two lines)
- **AND** it SHALL show the subheading "Crossfit. Working Harder"
- **AND** it SHALL have a dark overlay over a background image
- **AND** it SHALL display a play button with "Watch Our Video" text

#### Scenario: Hero parallax

- **GIVEN** the user scrolls the page
- **WHEN** the hero section scrolls
- **THEN** the background image SHALL move at a slower rate (parallax effect)

### Requirement: Pricing section

The system SHALL render a pricing section with heading "Pricing For Courses"
and three pricing cards arranged in a 3-column grid.

#### Scenario: Pricing card content

- **GIVEN** the pricing section is displayed
- **WHEN** the user views the pricing cards
- **THEN** each card SHALL show a photo background, title ("Weight Lifting"),
  description text, price ("$240.00"), and an "Enroll Now" gradient button
- **AND** the center card SHALL have a highlighted/active state

#### Scenario: Enroll Now button style

- **GIVEN** a pricing card is displayed
- **WHEN** the user views the "Enroll Now" button
- **THEN** it SHALL have a gradient background from pink (#ff0055) to
  orange (#ff6600)
- **AND** it SHALL have a pill shape (border-radius 30px)

### Requirement: Programs section

The system SHALL render a programs section with a split layout: a photo
on the left and a list of 5 program items on the right.

#### Scenario: Program items

- **GIVEN** the programs section is displayed
- **WHEN** the user views the program list
- **THEN** it SHALL show 5 items: Crossfit, Aerobic Classes, Fitness,
  Yoga Classes, Cardio Training
- **AND** each item SHALL have an icon and description text
- **AND** the text SHALL be right-aligned on desktop

### Requirement: Counter section

The system SHALL render a dark parallax counter section with 4 animated
statistics.

#### Scenario: Counter values

- **GIVEN** the counter section scrolls into view
- **WHEN** the counters animate
- **THEN** it SHALL show: Happy Customers (5000), Perfect Bodies (4560),
  Working Hours (570), Success Stories (900)
- **AND** the numbers SHALL animate from 0 to the target value

### Requirement: Coaches section

The system SHALL render a coaches section with heading "Our Coaches"
and 4 coach cards in a 2-column grid.

#### Scenario: Coach card content

- **GIVEN** the coaches section is displayed
- **WHEN** the user views the coach cards
- **THEN** each card SHALL show a photo, role label, name, description,
  and social media icons (Twitter, Facebook, Instagram)
- **AND** the first and third cards SHALL show the image on the left
- **AND** the second and fourth cards SHALL show the image on the right

### Requirement: Testimony section

The system SHALL render a testimonial carousel section with heading
"What People Say" on a photo background with dark overlay.

#### Scenario: Testimonial carousel

- **GIVEN** the testimony section is displayed
- **WHEN** the user views the testimonials
- **THEN** it SHALL show a carousel of testimonial cards
- **AND** each card SHALL have a circular user photo, quote icon,
  testimonial text, name, and role label

### Requirement: Blog section

The system SHALL render a blog section with heading "Recent Blog"
and 3 blog cards.

#### Scenario: Blog card content

- **GIVEN** the blog section is displayed
- **WHEN** the user views the blog cards
- **THEN** each card SHALL show a background image, a date sidebar
  (day, month, year), a title, and an excerpt

### Requirement: Contact section

The system SHALL render a contact section with a split layout:
map on the left, form on the right.

#### Scenario: Contact form

- **GIVEN** the contact section is displayed
- **WHEN** the user views the form
- **THEN** it SHALL have fields: First Name, Last Name, Email Address,
  Phone, Message (textarea)
- **AND** it SHALL have an "Appointment" submit button
- **AND** it SHALL show a heading "Contact With Us"

### Requirement: Gallery section

The system SHALL render a gallery section with 4 equal-width image
columns.

#### Scenario: Gallery images

- **GIVEN** the gallery section is displayed
- **WHEN** the user views the gallery
- **THEN** it SHALL show 4 images in a single row
- **AND** each image SHALL have a hover overlay with a search icon

### Requirement: Footer

The system SHALL render a footer with 4 columns and a copyright line.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** the user scrolls to the bottom
- **THEN** it SHALL show: About Us (description + social icons),
  Recent Blog (2 posts), Services (4 links), Have a Questions? (address,
  phone, email)
- **AND** the copyright line SHALL include a Component Dock credit link

## Verification Checklist

- [ ] Navbar: dark bg, brand name, 7 nav links, mobile toggle
- [ ] Hero: full-height, parallax bg, dark overlay, heading, subheading, play button
- [ ] Pricing: 3 cards, photo bg, gradient Enroll Now button, active center card
- [ ] Programs: split layout, 5 program items with icons, right-aligned text
- [ ] Counter: dark parallax, 4 animated counters, correct values
- [ ] Coaches: 2-column grid, 4 cards, alternating image position, social icons
- [ ] Testimony: photo bg, dark overlay, carousel, user photos, quote icons
- [ ] Blog: 3 cards, date sidebar, title, excerpt
- [ ] Contact: map placeholder left, form right, 5 fields, submit button
- [ ] Gallery: 4 equal-width images, hover overlay, search icon
- [ ] Footer: 4 columns, dark bg, Component Dock credit
- [ ] All text uses Work Sans font family
- [ ] Gradient buttons use #ff0055 → #ff6600
- [ ] No ColorLib references in app code
