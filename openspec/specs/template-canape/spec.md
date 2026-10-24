# Template: Canape (Restaurant)
<!-- prep-status: shipped-as=brasserie -->
> **SHIPPED-UNDER** — the ColorLib `caviar` design this prep describes already
> ships as `apps/brasserie` (<https://brasserie.free.componentdock.com>).
> Do not scaffold `apps/canape`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-brasserie/spec.md`.

## Purpose

Recreation of the ColorLib "Caviar" restaurant template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/caviar/
- **Preview:** https://preview.colorlib.com/theme/caviar/
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/canape`
- **Deploy:** `canape.free.componentdock.com` (Surge)

## Design tokens

Extracted from the live preview CSS (`style.css` at `https://preview.colorlib.com/theme/caviar/style.css`).

| Token            | Value                            | Usage                                    |
| ---------------- | -------------------------------- | ---------------------------------------- |
| Brand red        | `#ff0000`                        | Primary accent, section highlight        |
| Text black       | `#000`                           | Body text, headings                      |
| Text dark-gray   | `#333333`                        | Footer background, secondary text        |
| Border gray      | `#b2b2b2`                        | Button borders                           |
| Light background | `#fafafa` / `#f9f9f9`            | Alternating section backgrounds          |
| White            | `#fff`                           | Card/button backgrounds, hero text       |
| Body font        | `'Open Sans', sans-serif`        | Body paragraphs, descriptions            |
| Heading font     | `'Work Sans', sans-serif`        | Navigation, buttons, headings            |
| Button shape     | Square (`border-radius: 0`)      | All CTA buttons — flat rectangular style |
| Button size      | `min-width: 180px; height: 54px` | Standard CTA height                      |
| Button border    | `1px solid #b2b2b2`              | Outlined rectangular buttons             |
| Button text      | `#000` on `#fff` background      | Dark text on white button                |
| Footer bg        | `#333333`                        | Dark footer bar                          |
| Radii (other)    | `3px`, `5px`, `50%`              | Minor rounded elements, circular avatar  |

### Visual design (from preview DOM)

- **Dark, dramatic restaurant aesthetic.** Hero is a full-width image slider with text overlaid on dark food photography. Red accent color pops against black/white palette.
- **Fixed header** (100px tall, white, transitions on scroll) with navigation: About Us, Menu, Awards, Testimonials, Reservation. Search icon in nav.
- **Square buttons** throughout — a distinctive flat, rectangular look (no border-radius). White background, thin gray border, black text.
- **Section backgrounds alternate** between white and very light gray (`#fafafa`).

## Section structure (in DOM order)

| #   | Section ID     | Component name | Description                                                                                                                                                                                                   |
| --- | -------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | header (fixed) | `Header`       | Fixed top nav: logo "Canape", nav links, search icon. White bg, 100px height.                                                                                                                                 |
| 2   | hero           | `Hero`         | Full-width image slider (owl-carousel). Two slides: each with headline "Lorem Ipsum", subtitle, red CTA "Reservation". Slide navigation arrows at bottom. Dark overlay on food photo backgrounds.             |
| 3   | about-us       | `AboutUs`      | Two-column layout: left = two stacked images (food/chef photos), right = heading "About Us / restaurant style" + paragraph + "our chef" sub-heading + paragraph + CTA "View The Menu". Section padding 150px. |
| 4   | dish-menu      | `SpecialMenu`  | Heading "Special" + "View The Menu" CTA. Grid of 3 dish cards: each with dish image (food photo), dish name, price ($45). Dark hover effect. White background.                                                |
| 5   | awards         | `Awards`       | Heading "Awards". Row of 5 award badge/logo images. Light background.                                                                                                                                         |
| 6   | testimonials   | `Testimonials` | Heading "Testimonials". Carousel/slider with testimonial cards: each has author photo (circular), author name, testimonial text. Names: Robert Jonson, Clara Hudson, Jane Black.                              |
| 7   | reservation    | `Reservation`  | Two-column: left = heading "Reservation" + subtext "Reserve Your Desk", right = form with fields (Select Persons dropdown, Last Name input, date/time). CTA button.                                           |
| 8   | footer         | `Footer`       | Dark background (#333333). Logo "Canape" + copyright "All rights reserved". Centered text.                                                                                                                    |

## Requirements

### Feature: Canape Restaurant Template

Feature: Canape Restaurant Template
As a visitor to Canape,
I want to browse a restaurant website,
So that I can learn about the restaurant, view the menu, and make a reservation.

Background:
- **GIVEN** the user visits "canape.free.componentdock.com"
- **AND** the page has loaded successfully

**--- Header ---**

#### Scenario: Fixed header displays navigation

- **THEN** the header is fixed at the top of the page
- **AND** the header contains the logo "Canape"
- **AND** the navigation shows links: "About Us", "Menu", "Awards", "Testimonials", "Reservation"
- **AND** clicking each nav link scrolls to the corresponding section

#### Scenario: Header has search icon

- **THEN** a search icon is visible in the header navigation

**--- Hero ---**

#### Scenario: Hero section displays image slider

- **THEN** the hero section displays a full-width image slider
- **AND** the slider shows at least 2 slides
- **AND** each slide has a headline and a call-to-action button

#### Scenario: Hero CTA navigates to reservation

- **THEN** each slide has a red/white "Reservation" button
- **AND** clicking the button scrolls to the reservation section

#### Scenario: Slider has navigation arrows

- **THEN** left and right navigation arrows are visible on the slider
- **AND** clicking arrows advances or reverses the slide

**--- About Us ---**

#### Scenario: About Us section shows restaurant description

- **THEN** the section heading reads "About Us"
- **AND** a subtitle "restaurant style" is displayed
- **AND** a descriptive paragraph about the restaurant is shown
- **AND** two food/chef images are displayed on the left side

#### Scenario: About Us has chef subsection

- **THEN** a sub-heading "our chef" is displayed
- **AND** a descriptive paragraph about the chef is shown

#### Scenario: About Us has menu CTA

- **THEN** a "View The Menu" button is displayed
- **AND** clicking it scrolls to the menu section

**--- Special Menu ---**

#### Scenario: Menu section displays dish cards

- **THEN** the section heading reads "Special"
- **AND** at least 3 dish cards are displayed in a grid
- **AND** each card shows a dish image, dish name, and price

#### Scenario: Menu section has CTA

- **THEN** a "View The Menu" button is displayed

#### Scenario: Menu items show hover effect

- **THEN** hovering over a dish card reveals additional info or changes appearance

**--- Awards ---**

#### Scenario: Awards section shows badges

- **THEN** the section heading reads "Awards"
- **AND** at least 5 award badge/logo images are displayed in a row

**--- Testimonials ---**

#### Scenario: Testimonials section displays reviews

- **THEN** the section heading reads "Testimonials"
- **AND** at least 2 testimonial cards are shown
- **AND** each card has an author photo, author name, and testimonial text

**--- Reservation ---**

#### Scenario: Reservation section has booking form

- **THEN** the section heading reads "Reservation"
- **AND** subtext "Reserve Your Desk" is displayed
- **AND** a form is visible with at least a persons selector and last name input

#### Scenario: Reservation form is interactive

- **THEN** the persons selector shows a dropdown with options
- **AND** the last name field accepts text input

**--- Footer ---**

#### Scenario: Footer displays brand and copyright

- **THEN** the footer has a dark background (#333333)
- **AND** the footer shows the "Canape" logo/text
- **AND** a copyright notice is displayed
- **AND** a link to "https://www.componentdock.com/" is present (branded "Component Dock")

**--- Design Fidelity ---**

#### Scenario: Typography matches source

- **THEN** body text uses "Open Sans" font family
- **AND** headings and buttons use "Work Sans" font family

#### Scenario: Button style matches source

- **THEN** CTA buttons are square (no border-radius)
- **AND** buttons have a thin gray border (#b2b2b2)
- **AND** buttons have white background with black text
- **AND** buttons have minimum width 180px and height 54px

#### Scenario: Color palette matches source

- **THEN** the primary accent color is red (#ff0000)
- **AND** the footer background is dark gray (#333333)
- **AND** section backgrounds alternate between white and light gray (#fafafa)

## Verification checklist

- [ ] Header is fixed, white, with logo + nav links + search icon
- [ ] Hero has image slider with at least 2 slides, CTA buttons, nav arrows
- [ ] About Us has two-column layout: images left, text + chef subsection right
- [ ] Special Menu shows dish grid with image + name + price per card
- [ ] Awards section displays 5 badge/logo images in a row
- [ ] Testimonials section shows carousel of review cards with author photos
- [ ] Reservation section has form with persons selector and text input
- [ ] Footer is dark gray with brand name + copyright + ComponentDock link
- [ ] Square buttons (border-radius: 0) throughout — flat rectangular style
- [ ] Fonts: Open Sans (body) + Work Sans (headings/buttons)
- [ ] Brand accent: #ff0000 (red) used in hero CTA and section highlights
- [ ] Section backgrounds alternate white / #fafafa
- [ ] No ColorLib references in app code (only in this spec)
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] `public/CNAME` contains `canape.free.componentdock.com`
- [ ] `"homepage": "https://canape.free.componentdock.com"` in package.json
