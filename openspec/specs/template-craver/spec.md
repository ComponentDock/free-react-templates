# Craver — Modern Restaurant Landing Page

Recreation of ColorLib "Buri" (https://colorlib.com/wp/template/buri/).

## Purpose

Deliver a faithful React recreation of the ColorLib Buri modern restaurant
landing page under the name "Craver". The template is a premium restaurant
website with a full-width hero banner, about section, popular menu grid,
video intro section, testimonial carousel, contact info, and newsletter
footer. Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. Footer links
Component Dock.

Preview URL: https://preview.colorlib.com/theme/buri/

## Design tokens (extracted from preview CSS)

| Token                | Value                                       | Usage                                       |
| -------------------- | ------------------------------------------- | ------------------------------------------- |
| Font (body)          | "Montserrat", sans-serif (300, 400)         | All body text, nav links, buttons           |
| Font (headings)      | "Playfair Display", serif (400, 700, 900)   | h1–h6, section headings                     |
| Heading color        | #2c3033                                     | All headings                                |
| Body text color      | #555555                                     | Paragraphs, body text                       |
| Primary accent       | #d6ad86 (warm tan/gold)                     | CTA buttons, section label text, link hover |
| Hover accent         | #ffb830 (amber)                             | Button hover states                         |
| Dark button bg       | #000 (black)                                | Secondary CTA button ("Learn More")         |
| Orange button bg     | #ff6426                                     | "Order Now" style buttons                   |
| Button border-radius | ~20px (pill-shaped)                         | CTA buttons                                 |
| Input border color   | #fdcb9e                                     | Newsletter input border                     |
| Link hover color     | #d6ad86                                     | Global link hover                           |
| Banner bg            | Dark food photography (banner_bg.png)       | Hero section background                     |
| Section padding      | 140px vertical (80px tablet, 70px mobile)   | Between major sections                      |
| Section title sub    | #d6ad86, 16px                               | Section label ("Popular Menu")              |
| Section title main   | #2c3033, 40px, Playfair Display, weight 700 | Section headings                            |
| Footer bg            | White with top border                       | Footer area                                 |
| Copyright text       | #666666                                     | Footer bottom text                          |
| Social icon color    | #d6ad86 (nav hover), white (footer)         | Social media icons                          |

## Requirements

### Requirement: Navbar with transparent overlay

The navbar SHALL overlay the hero banner with a transparent background,
displaying a logo on the left, navigation links centered-right (Home, About,
Menu, Blog, Pages, Contact), and social icons (Facebook, Instagram) on the far
right (desktop only). The navbar has a mobile hamburger toggle.

#### Scenario: Navbar renders all navigation links

- **WHEN** the page loads
- **THEN** the navbar shows logo and navigation links: Home, About, Menu,
  Blog (with dropdown), Pages (with dropdown), Contact
- **AND** social icons (Facebook, Instagram) are visible on desktop

#### Scenario: Navbar collapses on mobile

- **WHEN** the viewport is mobile (< 992px)
- **THEN** the navigation links collapse behind a hamburger menu
- **AND** social icons are hidden

### Requirement: Hero banner with restaurant tagline

The hero section SHALL be a full-width dark food photography background with
left-aligned text overlay: a small tagline in warm tan uppercase ("Expensive
But The Best"), a large serif heading ("Modern restaurant in center of the
city"), and a tan "Book a Table" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows the tagline, main heading, and "Book a Table" button
- **AND** the background is a full-width dark food photography image

#### Scenario: Hero is full height on desktop

- **WHEN** the viewport is desktop
- **THEN** the hero section is approximately 1080px tall

#### Scenario: Hero adjusts on mobile

- **WHEN** the viewport is mobile
- **THEN** the hero section reduces to approximately 450px tall
- **AND** text is centered

### Requirement: About Us section

The about section SHALL display a two-column layout: left side with section
label ("about us"), heading ("Delicious food provider since 1990"), two
paragraphs of text, and a "Learn More" dark button; right side with a
complementary dark-toned food/dining image.

#### Scenario: About section renders two-column layout

- **WHEN** the about section loads
- **THEN** a label "about us" appears in warm tan uppercase
- **AND** the heading appears in dark serif
- **AND** two paragraphs of text are shown
- **AND** a dark "Learn More" button is displayed
- **AND** a complementary image appears on the right

#### Scenario: About section stacks on mobile

- **WHEN** the viewport is mobile (< 992px)
- **THEN** the image and text stack vertically

### Requirement: Popular Menu section

The menu section SHALL display a centered section title ("Popular Menu" /
"Delicious Food Menu") followed by a two-column grid of 6 food items. Each
item has a food thumbnail image, dish name, short description, and price.

#### Scenario: Menu renders all 6 items in two columns

- **WHEN** the menu section loads
- **THEN** 6 food items are displayed in a 2-column grid
- **AND** each item shows an image, name, description, and price

#### Scenario: Menu items are symmetric

- **WHEN** the page renders
- **THEN** the left column has 3 items and the right column has 3 items

### Requirement: Video intro section

The video intro section SHALL display a dark background with a centered play
button icon that opens a YouTube video in a popup/lightbox when clicked.

#### Scenario: Video play button renders

- **WHEN** the video section loads
- **THEN** a play button icon is centered on a dark background

#### Scenario: Video popup on click

- **WHEN** the play button is clicked
- **THEN** a video popup/lightbox opens

### Requirement: Testimonials section

The testimonials section SHALL display a centered section title ("Testimonials"
/ "What they said") followed by an owl-carousel of testimonial cards. Each
card shows a quote, a client avatar image, client name, and a 5-star rating.

#### Scenario: Testimonials render carousel

- **WHEN** the testimonials section loads
- **THEN** a carousel of testimonial items is displayed
- **AND** each item shows a quote, avatar image, client name, and star rating

#### Scenario: Testimonials are navigable

- **WHEN** the carousel arrows/dots are used
- **THEN** the carousel slides to the next/previous testimonial

### Requirement: Contact info section

The contact section SHALL display contact details in a left-aligned layout:
address, business hours (Mon-Sat, Sun), and reservation phone + email.

#### Scenario: Contact renders all info blocks

- **WHEN** the contact section loads
- **THEN** an address block, hours block, and reservation block are displayed

### Requirement: Footer with newsletter

The footer SHALL display a three-column layout: column 1 with logo, phone,
email, and social icons; column 2 with quick links (About, Menu, Reservation,
Blog, etc.); column 3 with a newsletter subscription form (email input +
submit button) and descriptive text. Below all columns, a centered copyright
line with a Component Dock link.

#### Scenario: Footer renders three columns

- **WHEN** the footer loads
- **THEN** three columns are displayed: contact info, quick links, newsletter

#### Scenario: Newsletter form is interactive

- **WHEN** the email input receives focus
- **THEN** the placeholder text disappears
- **AND** on blur, the placeholder returns

#### Scenario: Footer has Component Dock attribution

- **WHEN** the footer renders
- **THEN** the copyright line links to https://www.componentdock.com/

## Verification checklist

- [ ] Navbar: transparent on hero, hamburger on mobile, all links present
- [ ] Hero: dark food photo bg, tagline, heading, CTA button, correct heights
- [ ] About: two-column with image, text, CTA; stacks on mobile
- [ ] Menu: 6 items in 2x3 grid with images, names, descriptions, prices
- [ ] Video: play button centered, opens popup on click
- [ ] Testimonials: carousel with avatar, quote, name, stars; navigable
- [ ] Contact: address, hours, reservation info displayed
- [ ] Footer: 3 columns, newsletter form, Component Dock link
- [ ] All text: Montserrat body, Playfair Display headings
- [ ] Colors: #d6ad86 accent, #2c3033 headings, #555555 body
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links https://www.componentdock.com/ ("Component Dock")
