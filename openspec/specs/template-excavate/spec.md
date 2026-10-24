# Template: Excavate (Mining / Industrial)
<!-- prep-status: shipped-as=digger -->
> **SHIPPED-UNDER** — the ColorLib `unearth` design this prep describes already
> ships as `apps/digger` (<https://digger.free.componentdock.com>).
> Do not scaffold `apps/excavate`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-digger/spec.md`.

## Purpose

Recreation of ColorLib "Unearth" template.
- Preview URL: https://preview.colorlib.com/theme/unearth/
- ColorLib page: https://colorlib.com/wp/template/unearth/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unearth-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
- Category: Mining / Industrial / Corporate

## Design tokens

Extracted from `https://preview.colorlib.com/theme/unearth/css/style.css` and inline HTML.

### Colors

| Token              | Value     | Usage                                      |
| ------------------ | --------- | ------------------------------------------ |
| `primary`          | `#ff8b00` | Brand orange — CTA buttons, links, accents |
| `secondary`        | `#7a5e86` | Muted purple — secondary accents           |
| `success`          | `#71bc42` | Green — used sparingly                     |
| `black`            | `#000000` | Headings, text on light backgrounds        |
| `white`            | `#ffffff` | Light backgrounds, overlay text            |
| `dark-bg`          | `#000000` | About section dark background              |
| `light-bg`         | `#f8f9fa` | Light section backgrounds (`bg-light`)     |
| `text-muted`       | `#939393` | Body text, secondary text                  |
| `text-light-muted` | `#b8b8b8` | Lighter muted text                         |
| `border`           | `#ced4da` | Borders on form inputs, dividers           |

### Typography

| Element       | Font family                          | Weight | Notes                             |
| ------------- | ------------------------------------ | ------ | --------------------------------- |
| Headings      | Oswald                               | 400/700| Condensed sans-serif, uppercase   |
| Body text     | Rubik                                | 300/400/700 | Geometric sans-serif, clean    |
| Icons         | IcoMoon                              | —      | Custom icon font                  |

### Button styles

- `.btn-outline-white`: white border, white text, transparent bg; rounded corners
- `.btn-primary`: `#ff8b00` bg, white text; no border-radius (square/rectangular buttons)
- `.btn.border-w-2`: 2px border, used on team social icons
- `.rounded`: slightly rounded corners on team member social buttons

### Section backgrounds

| Section         | Background                          |
| --------------- | ----------------------------------- |
| Hero (carousel) | Full-width image overlay            |
| Services        | White (default)                     |
| Feature blocks  | Light (`#f8f9fa`)                   |
| About           | Dark (`#000000`) with overlay image |
| Team            | White                               |
| Pricing         | Light (`#f8f9fa`)                   |
| FAQ             | White                               |
| Press           | White                               |
| Testimonials    | Light (`#f8f9fa`)                   |
| Blog            | White                               |
| Contact         | Light (`#f8f9fa`)                   |
| Footer          | Dark (black)                        |

## Section structure (order from preview DOM)

1. **Navbar** — sticky top nav: logo + links (Home, About Us, Services, Team, Pricing, Contact) + mobile hamburger
2. **Hero carousel** — owl-carousel with 2 slides, full-width background images, overlay, heading + subtext + "Get in touch" CTA button
3. **Services** — 2-column layout with background images (Land & Property, Surface Mining), heading + text
4. **Feature grid** — light bg, 6 items in 2 rows of 3: icon + title + description (Surface Mining, Gold Nuggets, Soil Carrier, Gold Refinery, Anvil Blacksmith, Gold Melt Crucible)
5. **About** — dark bg with overlay image, heading + descriptive text + CTA
6. **Team** — 6 members in 2 rows of 3: photo + name + role + social icons (fb, twitter, instagram)
7. **Pricing** — 3 cards (Basic, Standard, Premium) on light bg: price + features list + CTA button
8. **FAQ** — accordion-style Q&A section
9. **Press** — media logos / press mentions
10. **Testimonials** — owl-carousel testimonials on light bg
11. **Blog** — recent posts grid (3 cards): image + date + title + excerpt
12. **Contact** — form (name, email, subject, message + submit button) on light bg
13. **Footer** — dark bg, 4 columns: About, Features links, Newsletter subscribe, Follow Us social icons

## Requirements

### Feature: Excavate Template

#### Scenario: Navbar renders with correct links and sticky behavior

- **GIVEN** the user loads the page
- **THEN** a sticky navbar is visible at the top
- **AND** it contains links: Home, About Us, Services, Team, Pricing, Contact
- **AND** a mobile hamburger toggle is present

#### Scenario: Hero carousel displays slides with CTA

- **GIVEN** the user loads the page
- **THEN** a full-width carousel is visible
- **AND** the first slide shows "Welcome to Excavate" heading
- **AND** the second slide shows "New Generation of Mining" heading
- **AND** both slides have a "Get in touch" button

#### Scenario: Services section shows two feature blocks

- **GIVEN** the user scrolls to the services section
- **THEN** 2 service cards are displayed side by side
- **AND** each card has a background image, heading, and description text

#### Scenario: Feature grid shows six mining features

- **GIVEN** the user scrolls to the feature grid
- **THEN** 6 feature items are displayed in a grid
- **AND** each item has an icon, title, and description

#### Scenario: About section renders on dark background

- **GIVEN** the user scrolls to the about section
- **THEN** the section has a dark background with overlay
- **AND** a heading and descriptive text are visible

#### Scenario: Team section shows six members

- **GIVEN** the user scrolls to the team section
- **THEN** 6 team member cards are displayed
- **AND** each card shows a photo, name, role, and social icons

#### Scenario: Pricing section shows three tiers

- **GIVEN** the user scrolls to the pricing section
- **THEN** 3 pricing cards are displayed (Basic, Standard, Premium)
- **AND** each card shows a price and feature list
- **AND** each card has a CTA button

#### Scenario: FAQ section displays questions

- **GIVEN** the user scrolls to the FAQ section
- **THEN** FAQ items are displayed
- **AND** each item shows a question and expandable answer

#### Scenario: Press section shows media logos

- **GIVEN** the user scrolls to the press section
- **THEN** media/press logos are displayed

#### Scenario: Testimonials carousel works

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a carousel of testimonials is visible
- **AND** navigation controls are present

#### Scenario: Blog section shows recent posts

- **GIVEN** the user scrolls to the blog section
- **THEN** 3 blog post cards are displayed
- **AND** each card has an image, date, title, and excerpt

#### Scenario: Contact form is functional

- **GIVEN** the user scrolls to the contact section
- **THEN** a contact form is visible with fields: name, email, subject, message
- **AND** a submit button is present
- **AND** submitting empty fields shows validation errors

#### Scenario: Footer renders with all columns

- **GIVEN** the user scrolls to the footer
- **THEN** 4 footer columns are displayed: About, Features, Newsletter, Follow Us
- **AND** the newsletter section has an email input and subscribe button
- **AND** social media icons are present
- **AND** a link to componentdock.com is present

## Verification checklist

- [ ] Navbar is sticky and responsive (hamburger on mobile)
- [ ] Hero carousel auto-plays and shows 2 slides with correct headings
- [ ] Services section shows 2 cards with background images
- [ ] Feature grid shows 6 items with icons
- [ ] About section has dark background
- [ ] Team section shows 6 members with social icons
- [ ] Pricing section shows 3 tier cards
- [ ] FAQ accordion toggles open/closed
- [ ] Press logos display correctly
- [ ] Testimonials carousel works with navigation
- [ ] Blog section shows 3 post cards
- [ ] Contact form validates and submits
- [ ] Footer has 4 columns + newsletter + social links
- [ ] Footer links to componentdock.com
- [ ] All sections match original section order
- [ ] Design tokens match: primary #ff8b00, Rubik + Oswald fonts
- [ ] No references to ColorLib in app code
- [ ] Placeholder images use picsum.photos
