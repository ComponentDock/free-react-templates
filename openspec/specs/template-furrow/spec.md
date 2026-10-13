# Template: Furrow (Agriculture / Farming)

## Purpose

Recreation of ColorLib's **Farmland** template — a professional agriculture/farming
landing page with parallax hero, service cards, about section, project gallery,
testimonials, FAQ accordion, and newsletter.

- **Source**: [ColorLib Farmland](https://colorlib.com/wp/template/farmland/)
- **Preview**: https://preview.colorlib.com/theme/farmland/
- **New name**: `furrow` (apps/furrow, `@free-react-templates/furrow`)
- **Surge**: `furrow.free.componentdock.com`

## Design tokens (extracted from live preview)

### Colors

| Token            | Value      | Usage                                  |
| ---------------- | ---------- | -------------------------------------- |
| `--brand-green`  | `#5d8c55`  | Navbar bg, icons, brand color, accent  |
| `--brand-gold`   | `#ecdc67`  | Top bar bg, active nav highlight       |
| `--dark`         | `#141b25`  | Active nav item bg                     |
| `--text`         | `#212529`  | Body text                              |
| `--white`        | `#ffffff`  | Page background                        |
| `--overlay-dark` | `rgba(0,0,0,0.5)` | Hero overlay, section overlays |
| `--overlay-2`    | `rgba(0,0,0,0.3)` | Secondary overlay               |

### Typography

| Role          | Font                    | Weight / Notes                         |
| ------------- | ----------------------- | -------------------------------------- |
| Body          | Roboto                  | 300, 400, 500, 700, 900               |
| Accent/subheading | "Covered By Your Grace" | Handwritten style for subheadings  |
| Headings      | Roboto                  | 500–700, UPPERCASE on nav links        |

### Buttons

- `.btn-primary`: background `#007bff` (Bootstrap default), white text, border-radius `0.25rem`
- `.btn-secondary`: background `#6c757d` (Bootstrap default), white text, border-radius `0.25rem`
- `.btn-custom` (Get A Quote): background `rgba(255,255,255,0.1)`, white text, border-radius `2px`, uppercase
- Service card button (`.btn-custom`): green circle icon on hover, border-radius `50%`
- Social media links: circular, `border-radius: 50%`, 35×35px

### Other tokens

- Navbar container: width 1110px max, border-radius `5px`, background `#5d8c55` (green)
- Top bar: background `#ecdc67` (gold)
- Icon backgrounds: white squares with 1px border
- Hero height: 900px
- Counter section: parallax background image with dark overlay

## Section structure (DOM order)

1. **TopBar** — gold bg (`#ecdc67`), email + social media icons (circular)
2. **InfoBar** — white bg, brand logo + phone + address (3-column row)
3. **Navbar** — dark green (`#5d8c55`), sticky, rounded container, nav links + "Get A Quote" CTA button
4. **Hero** — full-height slider (parallax bg images), overlay, heading "Agriculture is the Most Healthful", two CTAs (Our Services + Request A Quote), subheading uses "Covered By Your Grace" font
5. **Services** — 4-column grid (Fresh Vegetables, Agricultural Products, Organic Products, Dairy Products), each card has heading + description + bg image with hover button
6. **About** — split layout: left = image collage with year badge (42 Years), right = heading + text + 2 feature items (Growing Fruits, Tips for Ripening) + "Learn More" button
7. **Counter** — parallax bg image, dark overlay, 4 stat blocks (4800 Projects, 14000 Products, 200 Services, 71650 Customers)
8. **Projects** — 4-column grid of image cards with title + link (Organic Solution, Harvest Innovation, etc.)
9. **VideoSection** — parallax bg image with play button overlay
10. **Testimonials** — split layout: left = testimonial carousel with quote icon, right = heading + nav dots
11. **FAQ + Quote** — 2-column: left = "Request Quote" form (name, email, date, subject, message, submit), right = accordion FAQ (4 items)
12. **Footer** — dark bg, newsletter signup input + button, social links, copyright

## Requirements

### Feature: Furrow template behaviour

Feature: Furrow — Agriculture landing page

Background:
- **GIVEN** the page is loaded at "/"

#### Scenario: TopBar displays contact info and social links

- **THEN** a top bar is visible with email address
- **AND** social media icons (Facebook, Twitter, Instagram, Dribbble) are displayed
- **AND** social icons are circular

#### Scenario: InfoBar shows brand, phone, and address

- **THEN** brand name "Furrow" with agriculture icon is displayed
- **AND** a free-call phone number is shown
- **AND** office address is shown

#### Scenario: Navbar is sticky with green background

- **GIVEN** the user scrolls past the hero section
- **THEN** the navbar sticks to the top
- **AND** nav links (Home, About, Services, Projects, Blog, Contact) are visible
- **AND** a "Get A Quote" button is visible

#### Scenario: Hero section shows slider with CTAs

- **THEN** a full-height hero section is visible
- **AND** a heading about agriculture is displayed
- **AND** "Our Services" and "Request A Quote" buttons are visible
- **AND** the background image has a dark overlay

#### Scenario: Services section shows 4 cards

- **THEN** 4 service cards are displayed in a row
- **AND** each card has a heading (Fresh Vegetables, Agricultural Products, Organic Products, Dairy Products)
- **AND** each card has descriptive text
- **AND** each card has a background image with hover button

#### Scenario: About section shows year badge and features

- **THEN** a year badge showing "42 Years" is displayed
- **AND** an about heading "We're Leader In Agricultural Market" is visible
- **AND** two feature items are listed (Growing Fruits, Tips for Ripening)
- **AND** a "Learn More" button is present

#### Scenario: Counter section shows 4 stats

- **THEN** 4 statistic blocks are displayed
- **AND** stats include "4800" Projects, "14000" Products, "200" Services, "71650" Customers
- **AND** the section has a parallax background image

#### Scenario: Projects gallery shows 4 items

- **THEN** 4 project cards are displayed
- **AND** each card shows a title and link

#### Scenario: Testimonials section displays quote

- **THEN** a testimonial carousel is visible
- **AND** a quote icon is displayed
- **AND** navigation dots are present

#### Scenario: FAQ accordion toggles items

- **THEN** a "Request Quote" form is visible with input fields
- **AND** 4 accordion FAQ items are displayed
- **WHEN** the user clicks a collapsed FAQ item
- **THEN** that item expands to reveal its answer
- **AND** the previously open item collapses

#### Scenario: Footer shows newsletter and copyright

- **THEN** a newsletter email input is displayed
- **AND** a "Subscribe" button is present
- **AND** copyright text referencing "Component Dock" is shown
- **AND** a link to "https://www.componentdock.com/" is present

## Verification checklist

- [ ] All 12 sections present and matching the DOM order above
- [ ] Top bar uses `#ecdc67` gold background
- [ ] Navbar uses `#5d8c55` green background with rounded container
- [ ] Hero has full-height slider with dark overlay
- [ ] Services show 4-column grid with bg images
- [ ] About has split layout with year badge and feature list
- [ ] Counter has parallax background with 4 stat blocks
- [ ] Projects grid shows 4 image cards
- [ ] Testimonials section has carousel
- [ ] FAQ accordion works (toggle open/close)
- [ ] Newsletter input + subscribe button in footer
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in any app source file
- [ ] Placeholder images use `picsum.photos` with deterministic seeds
- [ ] Fonts: Roboto (body) + Covered By Your Grace (accent) loaded via Google Fonts
