# Template: IronPath (Gym / Fitness)

## Purpose

Recreation of ColorLib **Gym** template.
- Source slug: `gym`
- Preview URL: https://preview.colorlib.com/theme/gym/
- Source screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/gym-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token              | Value                        | Notes                                      |
|--------------------|------------------------------|--------------------------------------------|
| Brand color        | `#f6214b` (crimson red)     | Buttons, accents, convert-bg, price hover  |
| Font family        | `"Poppins", sans-serif`      | Weights 300–700, loaded via Google Fonts    |
| Body text          | `#777777`                   | Default paragraph color                    |
| Headings           | `#222222`                   | h1–h6 all use this                         |
| Light bg           | `#f9f9ff`                   | offer-area cards, team-bg, price cards      |
| Dark bg            | `#222222`                   | feature-area section background            |
| White bg           | `#ffffff`                   | footer-area background                     |
| Overlay            | `rgba(0,0,0,0.5)`          | banner + callto area image overlays        |
| Button radius      | `0px` (primary-btn default) | `3px` for radius variant, `20px` for circle |
| Button primary     | `bg: #f6214b, color: #fff` | Hover: transparent bg, border #f6214b      |
| Selection          | `#f6214b`                   | ::selection background                     |

## Section structure (from preview DOM)

1. **Header** — top bar (tagline left, logo center, phone right), nav bar below (Home, We Offer, Top Course, Schedule, Trainer, Plan)
2. **Banner/Hero** — full-width background image with dark overlay, heading "Real Fitness Depends on Exercise", subtext "Shape your body well."
3. **Offer** — section-gap, title "We care about what we offer", 3-column icon cards (Regular Exercise, Training on the go, Body Building Packages)
4. **Convert/BMI** — crimson (#f6214b) background, title "Calculate Your Body Mass Index", 2 inputs (height/weight) + Calculate button
5. **Top Courses** — section-gap, 6 course cards with image, "Course Available" badge, name + price (Running $275, Weight Lifting $200, Body Combat $225, Organic Yoga $300, Raw Fitness $500, Body Building $250)
6. **Feature** — dark (#222) background, 2+2 alternating image+text blocks ("Basic & Common Repairs" / "Basic Revolutions")
7. **Schedule** — section-gap, bordered table with 5 columns (Mon–Fri), rows: Fitness Aero, Senior Fitness, Fitness Aero, Senior Fitness, Senior Fitness
8. **Trainer** — section-gap, light bg, 4 team cards with hover overlay (social icons), name + role (Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller)
9. **Pricing** — section-gap, 3 price cards (Standard £199, Business £399, Ultimate £499), each with plan name, description, feature list, Purchase Plan button; hover turns bottom-sec red
10. **Brand logos** — grayscale logos row (5 logos)
11. **CTA** — background image with overlay, heading "Huge Transaction in last Week", "Become a Member" button
12. **Footer** — white bg, 3 columns (About Us, Contact Us with phone numbers, Newsletter with email input + arrow button), copyright + social icons row

## Requirements

### Header

Feature: IronPath Header

#### Scenario: Displays top bar with tagline, logo, and phone number

- **GIVEN** the page loads
- **THEN** the header shows a tagline "We believe we helps people for happier lives"
- **AND** a logo is centered in the top bar
- **AND** a phone number "+880 123 12 658 439" is displayed on the right

#### Scenario: Navigation menu has all section links

- **GIVEN** the page loads
- **THEN** the nav bar shows links: Home, We Offer, Top Course, Schedule, Trainer, Plan
- **AND** each link scrolls to the corresponding section

### Banner

Feature: IronPath Banner

#### Scenario: Hero section shows heading and subtext over background image

- **GIVEN** the page loads
- **THEN** the banner displays "Real Fitness Depends on Exercise" as the main heading
- **AND** subtext "Shape your body well." is visible below
- **AND** a dark semi-transparent overlay covers the background image

### Offer

Feature: IronPath Offer

#### Scenario: Three service cards are displayed

- **GIVEN** the page loads
- **THEN** the offer section shows a title "We care about what we offer"
- **AND** 3 service cards are visible: Regular Exercise, Training on the go, Body Building Packages
- **AND** each card has an icon image and descriptive paragraph

### BMI Calculator

Feature: IronPath BMI Calculator

#### Scenario: Calculator section shows inputs and button on crimson background

- **GIVEN** the page loads
- **THEN** the convert section has a crimson (#f6214b) background
- **AND** title "Calculate Your Body Mass Index" is displayed in white
- **AND** a height input with placeholder "Your Height (inches)" is visible
- **AND** a weight input with placeholder "Your Weight (lbs)" is visible
- **AND** a "Calculate Your BMI" button is displayed

### Top Courses

Feature: IronPath Top Courses

#### Scenario: Six course cards with prices are shown

- **GIVEN** the page loads
- **THEN** 6 course cards are displayed in a 3-column grid
- **AND** each card shows an image, "Course Available" badge, course name, and price
- **AND** courses include: Running Classes $275, Weight Lifting Classes $200, Body Combat Classes $225, Organic Yoga Classes $300, Raw Fitness Classes $500, Body Building Classes $250

### Feature Section

Feature: IronPath Feature

#### Scenario: Dark background feature blocks with alternating layout

- **GIVEN** the page loads
- **THEN** the feature section has a dark (#222) background
- **AND** 2 alternating image+text blocks are displayed
- **AND** each block has heading "Basic Revolutions" and descriptive paragraph

### Schedule

Feature: IronPath Schedule

#### Scenario: Weekly fitness schedule table

- **GIVEN** the page loads
- **THEN** a bordered table with columns: Course name, Mon, Tue, Wed, Thu, Fri is displayed
- **AND** rows include: Fitness Aero, Senior Fitness (multiple rows)
- **AND** each cell shows time slots (e.g. "10.00 02.00")

### Trainer

Feature: IronPath Trainer

#### Scenario: Four trainer cards with hover social icons

- **GIVEN** the page loads
- **THEN** the trainer section shows title "Our Experienced Trainers"
- **AND** 4 trainer cards are displayed: Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller
- **AND** each card shows an image, name, and role
- **AND** hovering reveals Facebook, Twitter, and LinkedIn social icons
- **AND** the trainer section has a light (#f9f9ff) background

### Pricing

Feature: IronPath Pricing

#### Scenario: Three pricing tiers with hover effect

- **GIVEN** the page loads
- **THEN** 3 pricing cards are displayed: Standard £199, Business £399, Ultimate £499
- **AND** each card shows plan name, target audience, description, and feature list
- **AND** each card has a "Purchase Plan" button
- **AND** hovering a card turns the bottom sections crimson (#f6214b) with white text

#### Scenario: Pricing cards have distinct hover interaction

- **GIVEN** the pricing section is visible
- **WHEN** I hover over a pricing card
- **THEN** the bottom-sec and end-sec backgrounds change to #f6214b
- **AND** the price button changes to white background with dark text

### Brand Logos

Feature: IronPath Brand Logos

#### Scenario: Grayscale partner logos displayed in a row

- **GIVEN** the page loads
- **THEN** 5 partner logos are shown in a horizontal row
- **AND** logos are displayed in grayscale by default

### CTA

Feature: IronPath CTA

#### Scenario: Call-to-action section with background image

- **GIVEN** the page loads
- **THEN** the CTA section shows heading "Huge Transaction in last Week" in white
- **AND** a "Become a Member" button is displayed
- **AND** a dark semi-transparent overlay covers the background image
- **AND** hovering the button makes it transparent with white border

### Footer

Feature: IronPath Footer

#### Scenario: Footer has three columns and newsletter signup

- **GIVEN** the page loads
- **THEN** the footer shows 3 columns: About Us, Contact Us, Newsletter
- **AND** Contact Us displays phone numbers in crimson (#f6214b)
- **AND** Newsletter has an email input with a submit button (border-radius 57px)
- **AND** a copyright line with Component Dock link is displayed
- **AND** social media icons (Facebook, Twitter, Dribbble, Behance) are shown

#### Scenario: Footer newsletter form is interactive

- **GIVEN** the footer is visible
- **WHEN** I type an email into the newsletter input
- **THEN** the input field accepts text
- **AND** the submit button is clickable

## Verification checklist

- [ ] Header: top bar with tagline, logo, phone; nav with 6 section links
- [ ] Banner: background image, dark overlay, heading + subtext
- [ ] Offer: title + 3 service cards with icons and text
- [ ] BMI Calculator: crimson bg, 2 inputs, Calculate button
- [ ] Courses: 6 course cards with image, badge, name, price
- [ ] Feature: dark bg, 2 alternating image+text blocks
- [ ] Schedule: bordered weekly table, 5 days, multiple rows
- [ ] Trainer: 4 cards with image, name, role, hover social overlay; light bg
- [ ] Pricing: 3 tier cards, hover turns bottom sections crimson
- [ ] Brand logos: grayscale row of 5 logos
- [ ] CTA: bg image + overlay, heading + button with hover border effect
- [ ] Footer: 3 columns, newsletter form, copyright with Component Dock link, social icons
- [ ] All colors match design tokens (#f6214b brand, #f9f9ff light, #222 dark)
- [ ] Poppins font family used throughout
- [ ] No ColorLib references in app code; provenance in spec only
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use https://picsum.photos/seed/ironpath-<n>/<w>/<h>
- [ ] All section order matches original: header → banner → offer → convert → courses → feature → schedule → trainer → pricing → brand → cta → footer
