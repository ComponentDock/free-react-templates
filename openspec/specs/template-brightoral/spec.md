# Template: Brightoral (Dental Clinic)

## Purpose

Recreation of ColorLib's "Dente" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

- **Source**: ColorLib "Dente" — https://colorlib.com/wp/template/dente/
- **Preview**: https://preview.colorlib.com/theme/dente/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Medical / Dental Clinic

## Design tokens

Extracted from the live preview's stylesheets (`css/style.css`).

### Fonts

| Role      | Font family             | Weights            |
| --------- | ----------------------- | ------------------ |
| Body / UI | Nunito Sans, sans-serif | 300, 400, 700, 900 |

Use Google Fonts `<link>` for Nunito Sans.

### Colors

| Token          | Hex / Value             | Usage                             |
| -------------- | ----------------------- | --------------------------------- |
| primary red    | `#f23a2e`               | Button hover border, accent       |
| background     | `#FFFFFF` (white)       | Main content                      |
| appointment bg | `#ece8d9` (cream)       | Appointment form + light sections |
| dark overlay   | `rgba(0,0,0,0.4)`       | Hero image overlay                |
| footer bg      | `#333333` (dark gray)   | Footer background                 |
| text primary   | `#4d4d4d`               | Body text                         |
| text dark      | `#25262a`               | Dark text, headings               |
| footer text    | `#737373`               | Footer paragraph text             |
| footer link    | `#999999`               | Footer links                      |
| footer heading | `#FFFFFF`               | Footer section headings           |
| border light   | `#edf0f5`               | Light borders, dividers           |
| feature bg     | `#f4f5f9`               | Feature card hover background     |
| hero text      | `#FFFFFF`               | Hero headings and body            |
| hero sub-text  | `rgba(255,255,255,0.7)` | Hero uppercase sub-text           |

### Buttons

- **Primary** (`.btn-primary`): Red accent (#f23a2e border on hover), font-weight 300, letter-spacing 0.2em. Box shadow on hover.
- **General** (`.btn`): Standard Bootstrap with custom hover effects (shadow + slight lift).

### Layout

- **Navbar**: White bg, logo "Brightoral" left, nav right (Home, About, Services, Appointment, Testimonial, Blog, Contact). Mobile hamburger.
- **Hero**: Full-viewport height cover image with dark overlay (0.4 opacity). White text: "Your **New Smile**" (900 weight on "New Smile"). Sub-text uppercase with letter-spacing.
- **Services intro**: 3-column feature cards (Periodontics, Tooth Whitening, Preventative Care) with icons.
- **Equipment strip**: 4 items (Tooth Whitening, Dental Checkup, First Aid Kit, Dental Tools) with icons.
- **Appointment form**: Cream bg (#ece8d9), "Online **Appointment** Request Form" heading. Form with box shadow.
- **Services section**: "Our **Services**" heading, 6-column grid of service items (Tooth Whitening, Dental Checkup, Dentist Chair, Dental Tools, First Aid Kit, Oral Surgery).
- **Success stories**: "Success **Stories**" heading, testimonial cards.
- **Testimonials**: "People **Says**" heading, review carousel.
- **Footer**: Dark gray bg (#333333), 4 columns: About, Navigation, Recent News, Subscribe Newsletter + Follow Us. Copyright with Component Dock link.

### Section backgrounds

| Section          | Background                        |
| ---------------- | --------------------------------- |
| Body             | `#FFFFFF`                         |
| Navbar           | `#FFFFFF` (white)                 |
| Hero             | Image + `rgba(0,0,0,0.4)` overlay |
| Services intro   | White                             |
| Equipment strip  | White                             |
| Appointment form | `#ece8d9` (cream)                 |
| Services grid    | White                             |
| Success stories  | `#f4f5f9` (light gray)            |
| Testimonials     | White                             |
| Footer           | `#333333` (dark gray)             |

## Requirements

### Requirement: Navbar displays logo and navigation

Users SHALL see a white navbar with the "Brightoral" logo on the left and navigation links on the right.

#### Scenario: Navbar renders all links

- **WHEN** the user loads the page
- **THEN** a white navbar is visible
- **AND** the logo "Brightoral" is shown on the left
- **AND** navigation links appear on the right: Home, About, Services, Appointment, Testimonial, Blog, Contact

#### Scenario: Mobile hamburger toggles menu

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** all navigation links are shown vertically

### Requirement: Hero displays full-viewport cover

Users SHALL see a full-viewport hero section with a background image, dark overlay, and the "Your New Smile" heading.

#### Scenario: Hero renders with overlay and heading

- **WHEN** the user views the hero section
- **THEN** a full-viewport hero shows a background image
- **AND** a dark overlay (0.4 opacity) covers the image
- **AND** the heading "Your New Smile" is displayed in white
- **AND** "New Smile" uses 900 font weight
- **AND** an uppercase sub-text with letter-spacing appears

### Requirement: Services intro shows 3 feature cards

Users SHALL see 3 service feature cards with icons, headings, and descriptions.

#### Scenario: Three cards rendered

- **WHEN** the user scrolls to the services intro
- **THEN** 3 service feature cards are displayed
- **AND** cards are: Periodontics, Tooth Whitening, Preventative Care
- **AND** each card has an icon, heading, and description

### Requirement: Equipment strip shows 4 items

Users SHALL see 4 equipment items with icons in a horizontal strip.

#### Scenario: Four items rendered

- **WHEN** the user views the equipment strip
- **THEN** 4 equipment items are shown with icons
- **AND** items are: Tooth Whitening, Dental Checkup, First Aid Kit, Dental Tools

### Requirement: Appointment form on cream background

Users SHALL see an appointment form on a cream background with form fields.

#### Scenario: Form renders with fields

- **WHEN** the user views the appointment section
- **THEN** the appointment form has a cream (#ece8d9) background
- **AND** the heading reads "Online Appointment Request Form"
- **AND** the heading uses uppercase with bold "Appointment"
- **AND** form fields include Name, Phone, Date, Time, Message
- **AND** the form has a box shadow

### Requirement: Services grid displays 6 items

Users SHALL see "Our Services" heading with 6 service items in a grid.

#### Scenario: Six items in grid

- **WHEN** the user scrolls to the services grid
- **THEN** "Our Services" heading is displayed with bold "Services"
- **AND** 6 service items are shown in a grid
- **AND** items include: Tooth Whitening, Dental Checkup, Dentist Chair, Dental Tools, First Aid Kit, Oral Surgery

### Requirement: Success stories section

Users SHALL see "Success Stories" heading with testimonial cards on a light gray background.

#### Scenario: Testimonial cards displayed

- **WHEN** the user views the success stories
- **THEN** "Success Stories" heading is shown with bold "Stories"
- **AND** testimonial cards are displayed on a light gray background

### Requirement: Testimonials carousel

Users SHALL see "People Says" heading with a carousel of review cards.

#### Scenario: Carousel with navigation

- **WHEN** the user views the testimonials
- **THEN** "People Says" heading is shown with bold "Says"
- **AND** a carousel of review cards is displayed
- **AND** users can navigate between reviews

### Requirement: Footer with dark background

Users SHALL see a dark gray footer with columns and a Component Dock link.

#### Scenario: Footer columns and links

- **WHEN** the user scrolls to the footer
- **THEN** a dark gray (#333333) footer is displayed
- **AND** columns show: About, Navigation, Recent News, Subscribe Newsletter, Follow Us
- **AND** footer headings are white
- **AND** footer links point to Component Dock
- **AND** a copyright bar is shown

### Requirement: Responsive behavior

Users SHALL see the layout adapt when the viewport is below 992px.

#### Scenario: Responsive breakpoint

- **WHEN** the viewport is below 992px
- **THEN** the navbar collapses to a hamburger menu
- **AND** multi-column grids stack to fewer columns

### Requirement: No ColorLib references in app code

The app source code SHALL NOT contain any references to ColorLib, preview.colorlib.com, or colorlib.com.

#### Scenario: Clean source

- **WHEN** a developer searches for "colorlib" in apps/brightoral/
- **THEN** no matches are found in any source file
