# Template: ArtWave (Creative Agency)

## Purpose

ArtWave is a single-page creative agency template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Bobsled" creative
agency template design, built under a different name (**ArtWave**), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** [ColorLib Bobsled](https://colorlib.com/wp/template/bobsled/)
- **Preview:** https://preview.colorlib.com/theme/bobsled/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bobsled-creative-website-template.jpg
- **New name:** `artwave` (apps/artwave, @free-react-templates/artwave)

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) on 2026-09-23:

### Colors

| Token          | Value                 | Usage                                                                                      |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| Brand gradient | `#3e69fe` → `#4cd4e3` | Hero banner bg, featured-area bg, story-area bg, primary-btn overlay, contact-form-area bg |
| Primary (blue) | `#3e69fe`             | Primary button solid, icon gradient start                                                  |
| Accent (cyan)  | `#4cd4e3`             | Icon gradient end, success button                                                          |
| Heading text   | `#222222`             | All headings (h1–h6)                                                                       |
| Body text      | `#777777`             | Body copy, links default                                                                   |
| Light bg       | `#f9f9ff`             | Subscription area, default button, work-icon-box bg                                        |
| White          | `#fff`                | Remarkable-area bg, card text on dark sections                                             |
| Border subtle  | `#eee`                | Remarkable-area button border                                                              |

### Typography

| Property       | Value                                              |
| -------------- | -------------------------------------------------- |
| Font family    | `"Poppins", sans-serif`                            |
| Font weights   | 300 (body), 500 (headings), 600 (sub-headings, h1) |
| Body font-size | 14px                                               |
| Line height    | 1.5em                                              |
| h1             | 36px                                               |
| h2             | 30px                                               |
| h3             | 24px                                               |
| h4             | 18px                                               |

### Buttons

| Element        | Styles                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| `.primary-btn` | `border-radius: 20px`, `border: 1px solid #fff`, transparent bg, gradient overlay pseudo-element on hover |
| Hover state    | border becomes transparent, gradient overlay opacity: 1                                                   |

### Section Backgrounds

| Section               | Background                                  |
| --------------------- | ------------------------------------------- |
| `.hero-area`          | Gradient `#3e69fe → #4cd4e3` (linear, 0deg) |
| `.working-process`    | White (`#fff`)                              |
| `.featured-area`      | Gradient `#3e69fe → #4cd4e3`                |
| `.remarkable-area`    | White (`#fff`)                              |
| `.story-area`         | Gradient `#3e69fe → #4cd4e3`                |
| `.subscription-area`  | Light (`#f9f9ff`)                           |
| `.contact-form-area`  | Gradient `#3e69fe → #4cd4e3`                |
| `.footer-widget-area` | Transparent (inherits body)                 |

## Section Structure (from live DOM)

1. **Navbar** — Logo left, nav links right, hamburger menu
2. **Hero / Banner** — Full-width gradient background, h1 headline + paragraph + CTA button
3. **Working Process** — Centered section title, 4-step horizontal process with icon boxes
4. **Featured Area** — Dark gradient background, 3 equal-width cards
5. **Remarkable Works** — White background, 3 alternating image+text rows
6. **Story Area** — Gradient background, text block with CTA
7. **Subscription / Newsletter** — Light background, email input + button
8. **Contact Form** — Dark gradient background, name + email + message form
9. **Footer Widget** — 3-column layout (Address, Email, Phone)
10. **Footer** — Logo, copyright with Component Dock link, social icons

## Requirements

### Requirement: Hero banner renders correctly

The template SHALL display a hero section with a gradient background (#3e69fe → #4cd4e3).

#### Scenario: Hero banner renders correctly

- **WHEN** the user visits the ArtWave homepage
- **THEN** a gradient background fills the banner area
- **AND** an h1 headline is displayed in white, uppercase
- **AND** a paragraph of supporting text appears below in white
- **AND** a "Get Started" button with arrow icon is visible
- **AND** the button has border-radius 20px and white border

### Requirement: Working process section displays four steps

The template SHALL display a working process section with 4 steps.

#### Scenario: Working process section displays four steps

- **WHEN** the user scrolls to the working process section
- **THEN** a centered heading "Our Working Process" is displayed
- **AND** four steps are shown: Researching, Wireframing, Prototyping, Final Design
- **AND** each step has an icon in a rounded box

### Requirement: Featured area shows three feature cards

The template SHALL display a featured area with 3 cards on gradient background.

#### Scenario: Featured area shows three feature cards

- **WHEN** the user scrolls to the featured area
- **THEN** the background is a gradient (#3e69fe → #4cd4e3)
- **AND** the section title "Our Exclusive Features" is centered in white
- **AND** three cards are displayed with image, title, description, and "Read More" button

### Requirement: Remarkable works shows alternating layout

The template SHALL display remarkable works with 3 alternating image+text rows.

#### Scenario: Remarkable works shows alternating layout

- **WHEN** the user scrolls to the remarkable works section
- **THEN** a centered heading "Remarkable Works" is displayed on white background
- **AND** three project rows are shown with alternating image/text positions
- **AND** each row has a heading, description, and "View Project" button

### Requirement: Story area displays with gradient background

The template SHALL display a story area with gradient background and CTA.

#### Scenario: Story area displays with gradient background

- **WHEN** the user scrolls to the story area
- **THEN** the background is a gradient (#3e69fe → #4cd4e3)
- **AND** an uppercase subheading "From the part of beginning" is shown
- **AND** a "Get Started" button is visible

### Requirement: Subscription section has email form

The template SHALL display a subscription section with email input.

#### Scenario: Subscription section has email form

- **WHEN** the user scrolls to the subscription section
- **THEN** the background is light (#f9f9ff)
- **AND** a section title "Subscribe for our Newsletter" is displayed
- **AND** an email input field and "Get Started" button are present

### Requirement: Contact form collects user input

The template SHALL display a contact form with name, email, and message fields.

#### Scenario: Contact form collects user input

- **WHEN** the user scrolls to the contact form section
- **THEN** the background is a gradient (#3e69fe → #4cd4e3)
- **AND** a centered heading "Keep in Touch" is displayed in white
- **AND** name and email inputs are in a row
- **AND** a full-width textarea for message is below
- **AND** a "Send Message" button is right-aligned

### Requirement: Footer widget shows contact information

The template SHALL display a footer widget with 3 columns and copyright bar.

#### Scenario: Footer widget shows contact information

- **WHEN** the user scrolls to the footer widget area
- **THEN** three columns are displayed: Address, Email, Phone
- **AND** a copyright bar with social icons is at the bottom
- **AND** the footer links to https://www.componentdock.com/

### Requirement: Navigation is responsive

The template SHALL display a responsive navigation with hamburger menu on mobile.

#### Scenario: Navigation is responsive

- **WHEN** the viewport is desktop (≥768px)
- **THEN** the nav links are visible inline
- **WHEN** the viewport is mobile (<768px)
- **THEN** a hamburger menu icon is visible for toggling

## Verification Checklist

- [x] All sections from the original are present in correct order
- [x] Brand gradient (#3e69fe → #4cd4e3) used consistently on hero, featured, story, contact sections
- [x] Poppins font loaded via Google Fonts (weights 300, 500, 600)
- [x] Working process shows 4 steps with icons and arrows
- [x] Featured area has 3 cards with image, title, description, button
- [x] Remarkable works has 3 alternating image+text rows
- [x] Subscription section has email input + button on light background
- [x] Contact form has name, email, message fields + send button
- [x] Footer has 3-column widget area + copyright bar with social icons
- [x] Footer links to https://www.componentdock.com/ (Component Dock)
- [x] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [x] Placeholder images use picsum.photos with deterministic seeds
- [x] Responsive: hamburger nav on mobile, stacked columns
- [x] Tests pass with 100% coverage
- [x] Build succeeds without errors
