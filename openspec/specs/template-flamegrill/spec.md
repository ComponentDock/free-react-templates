# Template: FlameGrill (Restaurant / Food)

## Purpose

Recreation of ColorLib's **Burger** template as a React 19 + Vite + Tailwind 4 + TypeScript site.
- **Source slug:** `burger`
- **Preview URL:** https://preview.colorlib.com/theme/burger/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/burger-free-template.jpg)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Restaurant / Food — single-page burger restaurant site with carousel hero, menu grid, about, video CTA, testimonials, Instagram gallery, and footer with locations + newsletter.

## Design Tokens (extracted from preview stylesheet)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Orange | `#F0542C` | Primary accent (buttons, highlights, hover states) |
| Brand Gold | `#F2C64D` | Secondary accent (outlines, star ratings) |
| Dark Navy | `#040E27` | Header/hero overlay background, dark sections |
| White | `#FFFFFF` | Page background, text on dark backgrounds |
| Off-white | `#F9F9FF` | Light section backgrounds |
| Muted Gray | `#6E6E6E` / `#999999` | Body text, descriptions |

### Fonts
| Role | Family | Fallback |
|------|--------|----------|
| Body | Raleway | sans-serif |
| Headings | Montserrat | sans-serif |
| Accent / Signature | Pacifico | cursive |
| Slider / Display | Paytone One | sans-serif |

### Buttons & Shapes
- **Pill buttons:** border-radius 30px–50px, solid Brand Orange background
- **Outlined buttons:** border-radius 30px, 1px solid Brand Gold, transparent bg
- **Circular avatars:** border-radius 50%
- **Video play button:** circular with white outline on dark background

### Section Backgrounds
- **Hero/Slider:** Full-width banner images with dark semi-transparent overlay (`rgba(0,0,0,0.4)` approx)
- **Best Burgers (Menu):** White background
- **About:** White background
- **Video CTA:** Background image (burger) with dark overlay
- **Testimonials:** White background
- **Instagram Gallery:** White background
- **Footer:** Dark background image (`footer_bg.png`)

## Requirements

### Feature: FlameGrill — Burger Restaurant Template

#### Scenario: Navbar displays correctly

- **GIVEN** the user loads the page
- **THEN** a sticky navbar is visible with a centered logo
- **AND** navigation links include: Home, Menu, About, Blog, Contact
- **AND** social media icons (Instagram, Twitter, Facebook, Google+) are shown on the right
- **AND** a phone number CTA button is visible on desktop

#### Scenario: Hero carousel shows slides

- **GIVEN** the user views the hero section
- **THEN** a full-width image carousel is displayed with auto-rotation
- **AND** each slide shows a "Big Deal" badge, a heading ("Burger Bachelor"), and a subtitle ("Maxican")
- **AND** the slide has a dark overlay on the background image
- **AND** navigation dots/arrows allow manual slide control

#### Scenario: Best Burgers menu grid displays items

- **GIVEN** the user scrolls to the menu section
- **THEN** a "Burger Menu" section label and "Best Ever Burgers" heading are shown
- **AND** 8 burger items are displayed in a 2-column responsive grid
- **AND** each item shows a thumbnail image, burger name, short description, and price
- **AND** items are: Beefy Burgers, Burger Boys, Burger Bizz, Crackles Burger, Bull Burgers, Rocket Burgers, Smokin Burger, and one more

#### Scenario: About section shows restaurant info

- **GIVEN** the user scrolls to the about section
- **THEN** a split layout is shown: images on the left, text on the right
- **AND** the heading reads "Best Burger in your City" with "About Us" label
- **AND** a descriptive paragraph is displayed
- **AND** a signature image is shown below the text

#### Scenario: Video CTA section displays

- **GIVEN** the user scrolls to the video section
- **THEN** a dark background with burger imagery is shown
- **AND** the heading "Burger Bachelor" and subtitle "How we make delicious Burger" are visible
- **AND** a circular play button links to a video (YouTube)

#### Scenario: Testimonials carousel works

- **GIVEN** the user scrolls to the testimonials section
- **THEN** "Testimonials" label and "Happy Customers" heading are shown
- **AND** testimonials are displayed in a carousel
- **AND** each testimonial shows a quote, author avatar, author name, and star rating

#### Scenario: Instagram gallery shows images

- **GIVEN** the user scrolls to the Instagram section
- **THEN** a 4-column grid of images is displayed
- **AND** each image has an Instagram icon overlay on hover

#### Scenario: Footer displays locations and newsletter

- **GIVEN** the user scrolls to the footer
- **THEN** a 3-column footer shows two location cards (address + phone) and a newsletter signup
- **AND** social media icons are displayed below the columns
- **AND** a copyright bar with "Made with ❤ by Component Dock" is shown at the bottom

#### Scenario: Responsive behavior on mobile

- **GIVEN** the user views the page on a mobile viewport (≤768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero carousel text is centered and scaled down
- **AND** the menu grid stacks to a single column
- **AND** the about section stacks images above text
- **AND** the footer columns stack vertically

#### Scenario: Dark mode styling

- **GIVEN** the user enables dark mode
- **THEN** the page background becomes dark navy (#040E27)
- **AND** text colors adjust to white/light
- **AND** card backgrounds use dark tones
- **AND** brand orange and gold accents remain visible

## Verification Checklist

- [ ] Spec validated (`npm run spec:validate` passes)
- [ ] All Gherkin scenarios are implementable
- [ ] Design tokens extracted and documented
- [ ] Preview DOM structure analyzed
- [ ] Screenshot reviewed for visual fidelity
- [ ] Section order matches original: Header → Hero Carousel → Menu Grid → About → Video CTA → Testimonials → Instagram Gallery → Footer
