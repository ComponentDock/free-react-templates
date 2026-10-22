# Template: SudsCraft (Car Wash Services)
<!-- prep-status: shipped-as=washbox -->
> **SHIPPED-UNDER** — the ColorLib `carwash` design this prep describes already
> ships as `apps/washbox` (<https://washbox.free.componentdock.com>).
> Do not scaffold `apps/sudscraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-washbox/spec.md`.

## Purpose

Recreation of the ColorLib "Carwash" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/carwash/
- **Preview:** https://preview.colorlib.com/theme/carwash/
- **New name:** sudscraft (folder `apps/sudscraft`, package `@free-react-templates/sudscraft`)
- **Design category:** Car Wash / Auto Detailing Services

## Design tokens

Extracted from the preview's `assets/css/style.css` (minified) and HTML structure:

| Token | Value | Source |
| --- | --- | --- |
| Brand primary | `#007AFF` (bright blue) | `.boxed-btn { color: #007AFF }`, `.btn { background-image: linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF) }` |
| Brand gradient | `#0BC6FF` → `#0d80f3` → `#0BC6FF` (cyan-to-blue) | `.btn` gradient background |
| Dark navy | `#010A44`, `#072366`, `#101A31` | Text colors, nav link color `#072366` |
| Light bg | `#f7f7f7` | Section alternating backgrounds |
| Light blue bg | `#EEF6FF` | `.office-environments .environments-wrapper` |
| Body text | `#646464` (gray) | Description text |
| Heading dark | `#010A44` (very dark navy) | Section titles |
| Button radius | `30px` (fully rounded pill) | `.btn { border-radius: 30px }` |
| Button padding | `13px 33px` (pill), `18px 44px` (boxed) | `.btn`, `.boxed-btn` |
| Font primary | Poppins (Google Fonts, 300–800) | `@import` in CSS |
| Font secondary | Work Sans (Google Fonts, 300–800) | `@import` in CSS, used in `.boxed-btn` |
| Nav text | `#072366`, uppercase, 500 weight, 14px | `.main-header .main-menu ul li a` |
| Nav hover | `#007AFF` | `.main-header .main-menu ul li:hover>a` |
| Dropdown bg | gradient `#0BC6FF` → `#0d80f3` | `.submenu { background-image: linear-gradient }` |
| Section padding | `30px–90px` various | `.section-padding30`, `.section-padding40` |

## Section structure (order preserved from live DOM)

1. **Navbar** — Logo left, nav links center-right (Home, About, Services, Blog with dropdown, Contact), phone CTA button right ("10 (87) 256-2903" with phone icon); sticky header on scroll
2. **Hero Slider** — Full-width slider with background image overlay; heading "Car Wash"; animated rotating text "& Detailing"; subtitle description; "Our Services" pill CTA button
3. **Office Environments** — Split layout: decorative background image left, text panel right (offset 5 cols): "We have the latest equipment" title, description paragraph, "About Us" boxed button (border outline)
4. **Pricing Cards** — "We offer best services to our customer" title; 3 pricing cards: Car wash ($50), Detailing ($100), Wash & Detailing ($200); each with icon, title, "Starting at" label, price, feature list (5 items), "Get Started" border button
5. **Testimonials** — Left-aligned carousel with quote icon, testimonial text, founder avatar + name + role; decorative image on right side
6. **Services / Categories** — "Why take our services?" title + description (left-aligned); 4 service cards in a row: Car wash 100% without detergents, Efficient surface drying machines, We have an application, Safe lacquer protection; each with SVG icon, title, description
7. **Video Section** — Full-width dark background image; play button (YouTube popup); text: "Your car will look as your new one" + description
8. **Maps Section** — Two map images side by side (location reference)
9. **Footer** — Dark background image; 4 columns: Logo + description + phone/email, Opening hours (Mon-Fri, Sat, Sun closed), Navigation links, Social icons (Twitter, Facebook, Pinterest); copyright bar

## Requirements

### Navbar

Feature: SudsCraft Navbar

#### Scenario: Navigation displays links and phone CTA

- **GIVEN** I visit the SudsCraft page
- **THEN** I see a logo on the left
- **AND** I see nav links: Home, About, Services, Blog, Contact
- **AND** I see a phone CTA button "10 (87) 256-2903"

#### Scenario: Blog dropdown shows sub-links

- **GIVEN** I hover over the "Blog" nav link
- **THEN** I see a dropdown with Blog, Blog Details, Element

### Hero

Feature: SudsCraft Hero

#### Scenario: Hero displays main heading and CTA

- **GIVEN** I visit the SudsCraft page
- **THEN** I see a hero section with a background image
- **AND** I see the heading "Car Wash"
- **AND** I see animated text "& Detailing"
- **AND** I see an "Our Services" pill button CTA

### Office Environments

Feature: SudsCraft Office Environments

#### Scenario: Equipment section shows split layout

- **GIVEN** I scroll to the Office Environments section
- **THEN** I see a decorative background image on the left
- **AND** I see the title "We have the latest equipment"
- **AND** I see a description paragraph
- **AND** I see an "About Us" outlined button

### Pricing Cards

Feature: SudsCraft Pricing

#### Scenario: Three pricing tiers displayed

- **GIVEN** I scroll to the Pricing section
- **THEN** I see the title "We offer best services to our customer"
- **AND** I see 3 pricing cards: Car wash ($50), Detailing ($100), Wash & Detailing ($200)
- **AND** each card has a service icon, "Starting at" label, price, and feature list
- **AND** each card has a "Get Started" border button

#### Scenario: Pricing cards are interactive

- **GIVEN** I hover over a "Get Started" button
- **THEN** the button fills with the brand blue color and text turns white

### Testimonials

Feature: SudsCraft Testimonials

#### Scenario: Testimonial carousel displays reviews

- **GIVEN** I scroll to the Testimonials section
- **THEN** I see a quote icon and testimonial text
- **AND** I see a founder avatar with name and role
- **AND** the section has carousel dot navigation

### Services / Categories

Feature: SudsCraft Services

#### Scenario: Four service categories shown

- **GIVEN** I scroll to the Services section
- **THEN** I see the title "Why take our services?"
- **AND** I see 4 service cards: Car wash without detergents, Surface drying machines, Application, Lacquer protection
- **AND** each card has an SVG icon, title, and description

### Video Section

Feature: SudsCraft Video

#### Scenario: Video section shows play button

- **GIVEN** I scroll to the Video section
- **THEN** I see a dark background image
- **AND** I see a circular play button
- **AND** I see the text "Your car will look as your new one"
- **AND** clicking play opens a YouTube popup

### Footer

Feature: SudsCraft Footer

#### Scenario: Footer displays contact and navigation

- **GIVEN** I scroll to the Footer
- **THEN** I see a logo, description, phone number, and email
- **AND** I see Opening hours for Mon-Fri, Sat, and Sun
- **AND** I see Navigation links: Home, About, Services, Blog, Contact
- **AND** I see social icons: Twitter, Facebook, Pinterest
- **AND** I see a copyright bar
- **AND** the footer links to https://www.componentdock.com/

## Verification checklist

- [ ] All 9 sections render in correct order
- [ ] Poppins + Work Sans fonts load from Google Fonts
- [ ] Brand color #007AFF used for buttons and accents
- [ ] Blue gradient (#0BC6FF → #0d80f3) used for pill buttons
- [ ] Pill buttons have border-radius: 30px
- [ ] Navbar is sticky on scroll with phone CTA
- [ ] Hero has slider/carousel with animated rotating text
- [ ] Office Environments has split layout with background image
- [ ] Pricing section shows 3 cards with features and CTA
- [ ] Testimonials carousel with quotes and founder info
- [ ] Services section shows 4 cards with SVG icons
- [ ] Video section has play button popup for YouTube
- [ ] Footer has 4-column layout with dark background image
- [ ] Footer links to componentdock.com (not ColorLib)
- [ ] No ColorLib references in app code
- [ ] Responsive layout works (mobile menu, stacked sections)
- [ ] 100% test coverage (lines, functions, branches, statements)
