# Template: Fendrix (Fine Dining Restaurant)
<!-- prep-status: shipped-as=ravida -->
> **SHIPPED-UNDER** — the ColorLib `buri` design this prep describes already
> ships as `apps/ravida` (<https://ravida.free.componentdock.com>).
> Do not scaffold `apps/fendrix`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-ravida/spec.md`.

## Purpose

Recreation of the ColorLib "Buri" template — a premium fine-dining restaurant
website with a moody, sophisticated aesthetic.

- **Source**: https://colorlib.com/wp/template/buri/
- **Preview**: https://preview.colorlib.com/theme/buri/
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Name mapping**: `apps/fendrix` recreates ColorLib `buri`

## Design tokens

Extracted from the live preview's `css/style.css` stylesheet and screenshot analysis.

| Token | Value | Usage |
| --- | --- | --- |
| Brand / accent color | `#d6ad86` (warm tan) | CTA buttons, subtitle text |
| Hover accent | `#ffb830` (warm gold) | Button hover states |
| Dark base (footer) | `#1c1a18` | Footer background |
| Text color | `#2c3033` (dark slate) | Headings, body text |
| White | `#ffffff` | About section bg, nav text, hero text |
| Body font | `Montserrat`, sans-serif | Body text, nav, buttons |
| Heading font | `Playfair Display`, serif | h1–h6, section headings |
| Button 1 | bg `#d6ad86`, text `#fff`, hover bg `#ffb830`, uppercase, padding 23px 60px | Primary CTA |
| Button 3 | bg `#000`, text `#fff`, hover bg `#ffb830`, capitalize | Secondary CTA |
| Section title | Centered, margin-bottom 70px (mobile 30px) | Section headings |

## Section structure (order)

1. **Navbar** — transparent overlay on hero; logo left, nav links center (Home, About, Menu, Blog dropdown, Pages dropdown, Contact), social icons right (Facebook, Instagram)
2. **Banner / Hero** — full-height image bg (`banner_bg.png`), left-aligned: subtitle "Expensive but the best", h1 "Modern restaurant in center of the city", CTA "book a table" (btn_1)
3. **About Us** — white bg, overlapping hero with negative margin (-250px desktop / -100px mobile); split: left = subtitle + heading + 2 paragraphs + "learn More" btn_3; right = food image
4. **Food Menu** — centered section title "Popular Menu / Delicious Food Menu"; 2-column grid of 6 food items (image + name + description + price)
5. **Intro Video** — parallax image bg, centered play button (YouTube popup)
6. **Testimonials / Reviews** — section title "Testimonials / What they said"; owl-carousel of review cards (quote text, client avatar, name, 5-star rating)
7. **Contact** — image bg; white card (left half) with heading + address + hours + reservation phone/email
8. **Footer** — dark bg `#1c1a18`; 3-column layout: logo + phone + email + social | Quick links list | Newsletter form + description; copyright bar with Component Dock link

## Requirements

### Feature: Navbar

#### Scenario: Navbar displays all navigation links

- **GIVEN** the user is on the Fendrix page
- **THEN** the navbar shows links: Home, About, Menu, Blog, Contact
- **AND** social icons for Facebook and Instagram are visible

#### Scenario: Navbar collapses on mobile

- **GIVEN** the viewport width is less than 992px
- **WHEN** the user clicks the hamburger toggle
- **THEN** the navigation links are shown in a collapsible menu

### Feature: Hero Banner

#### Scenario: Hero section displays headline and CTA

- **GIVEN** the user is on the Fendrix page
- **THEN** a subtitle reads "Expensive but the best"
- **AND** a heading reads "Modern restaurant in center of the city"
- **AND** a "book a table" button is visible

#### Scenario: Hero uses background image

- **GIVEN** the user is on the Fendrix page
- **THEN** the hero section has a background food photography image

### Feature: About Section

#### Scenario: About section overlaps hero

- **GIVEN** the user is on the Fendrix page
- **THEN** the about section overlaps the hero by approximately 250px

#### Scenario: About section shows content

- **GIVEN** the user is on the Fendrix page
- **THEN** a heading reads "Delicious food provider since 1990"
- **AND** a "learn More" button is visible
- **AND** a food image is displayed on the right

### Feature: Food Menu

#### Scenario: Menu displays 6 food items

- **GIVEN** the user is on the Fendrix page
- **WHEN** the user scrolls to the food menu section
- **THEN** 6 food items are displayed in a 2-column grid
- **AND** each item shows a name, description, and price

#### Scenario: Menu has section title

- **GIVEN** the user is on the Fendrix page
- **THEN** the menu section title reads "Popular Menu" / "Delicious Food Menu"

### Feature: Video Intro

#### Scenario: Video section shows play button

- **GIVEN** the user is on the Fendrix page
- **WHEN** the user scrolls to the video intro section
- **THEN** a centered play button is visible
- **AND** clicking it opens a YouTube video popup

### Feature: Testimonials

#### Scenario: Testimonials carousel displays reviews

- **GIVEN** the user is on the Fendrix page
- **WHEN** the user scrolls to the testimonials section
- **THEN** review cards are shown in a carousel
- **AND** each card has a quote, client name, avatar, and 5-star rating

#### Scenario: Testimonials section title

- **GIVEN** the user is on the Fendrix page
- **THEN** the testimonials section title reads "Testimonials" / "What they said"

### Feature: Contact

#### Scenario: Contact section shows info

- **GIVEN** the user is on the Fendrix page
- **WHEN** the user scrolls to the contact section
- **THEN** address, opening hours, and reservation phone/email are displayed
- **AND** the info is inside a white card overlaying a background image

### Feature: Footer

#### Scenario: Footer shows links and newsletter

- **GIVEN** the user is on the Fendrix page
- **THEN** the footer has a dark background
- **AND** quick links are listed
- **AND** a newsletter email subscription form is present

#### Scenario: Footer links to Component Dock

- **GIVEN** the user is on the Fendrix page
- **THEN** the footer contains a link to https://www.componentdock.com/

## Verification checklist

- [ ] All 8 sections present in correct order
- [ ] Design tokens match: brand `#d6ad86`, hover `#ffb830`, footer `#1c1a18`, headings Playfair Display, body Montserrat
- [ ] Hero is full-height with background image and CTA
- [ ] About section overlaps hero with negative margin
- [ ] Food menu: 6 items in 2-column grid with prices
- [ ] Video intro with play button
- [ ] Testimonials carousel with star ratings
- [ ] Contact section with white card on image bg
- [ ] Footer dark bg with newsletter form + Component Dock link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via `https://picsum.photos/seed/fendrix-<n>/<w>/<h>`
- [ ] Google Fonts: Playfair Display + Montserrat loaded in index.html
