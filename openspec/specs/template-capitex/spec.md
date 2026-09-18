# Template: Capitex (Finance / Loan)

## Purpose

Recreation of ColorLib "Finlone" — a finance/loan landing page.

- **Source:** https://colorlib.com/wp/template/finlone/
- **Preview:** https://preview.colorlib.com/theme/finlone/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/finlone-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **App folder:** `apps/capitex`
- **Package:** `@free-react-templates/capitex`
- **Deploy target:** `capitex.free.componentdock.com`

## Design Tokens

Extracted from the ColorLib preview stylesheet (`assets/css/style.css`):

### Fonts

- **Headings:** `"Heebo"` (Google Fonts, weights 200–900) — used for h1–h6, nav, buttons
- **Body:** `"Open Sans"` (Google Fonts, weights 300–800) — used for paragraphs, form labels

### Colors

| Token                 | Value     | Usage                                       |
| --------------------- | --------- | ------------------------------------------- |
| Brand green (primary) | `#0BDE8C` | Buttons, accents, scroll-to-top, highlights |
| Dark navy             | `#204570` | Headings (h1–h6), dark text                 |
| Accent blue           | `#0077FF` | Sticky header bg, form price label          |
| Body text             | `#3F4854` | Paragraphs, descriptions                    |
| Gray background       | `#F4F6F9` | Services section, FAQ section bg            |
| Button hover green    | `#27CB8B` | Button hover overlay                        |
| Purple accent         | `#A03AF9` | Section tagline text                        |
| Input border          | `#DBE2E9` | Form inputs, select borders                 |
| Placeholder text      | `#B6BABE` | Form placeholder text                       |

### Button Shapes

- All buttons use square corners (border-radius: 0px), uppercase, Heebo font
- Green bg `#0BDE8C` with hover `#27CB8B`

### Section Backgrounds

- Hero: full-width background image with dark overlay
- About: white (default)
- Services: gray `#F4F6F9`
- Testimonials: parallax background image
- Clients/Stats: white (default)
- How It Works: white (default)
- FAQ: gray `#F4F6F9`
- Footer: white (default)

## Requirements

### Requirement: Navbar renders correctly

A transparent navbar with logo, nav links, and CTA button that becomes sticky blue on scroll.

#### Scenario: Navbar renders with correct items

- **WHEN** the user loads the page
- **THEN** a transparent navbar is visible with logo on the left
- **AND** nav links are displayed: Home, Loan, About, FAQ, Blog, Contact
- **AND** an "Apply For Loan" CTA button appears on the right

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls down
- **THEN** the navbar becomes sticky with a blue background

#### Scenario: Mobile hamburger menu

- **WHEN** the user views on a mobile viewport
- **THEN** the navbar collapses into a mobile hamburger menu

### Requirement: Hero section renders with loan form

A split hero section with headline on the left and a loan application form on the right.

#### Scenario: Hero renders with headline and form

- **WHEN** the user is on the landing page
- **THEN** a hero section with background image is displayed
- **AND** the left side shows an h1 headline about business loans
- **AND** the right side shows a loan application form

#### Scenario: Loan form renders with fields

- **WHEN** the hero form is visible
- **THEN** an Amount select dropdown is displayed
- **AND** a Duration select is displayed
- **AND** a Name text input is present
- **AND** a Phone number text input is present
- **AND** a "Continue" submit button spans full width

### Requirement: About section renders

A two-column about section with image and customer trust heading.

#### Scenario: About section renders

- **WHEN** the user scrolls to the About section
- **THEN** a two-column layout is displayed
- **AND** the left column shows an image with a counter badge
- **AND** the right column shows a heading about customer trust
- **AND** a "Learn More" button is present

### Requirement: Services section renders loan cards

A gray-background section with three service cards.

#### Scenario: Services section renders

- **WHEN** the user scrolls to the Services section
- **THEN** the section has a gray background
- **AND** three service cards are displayed: Student Loan, Business Loan, Startup Loan
- **AND** each card has an image, title, description, and "Apply For Loan" button

### Requirement: Testimonials section renders slider

A parallax-background section with a dot-navigated testimonial slider.

#### Scenario: Testimonials section renders

- **WHEN** the user scrolls to the Testimonials section
- **THEN** a parallax background image is shown
- **AND** a testimonial slider with dot navigation is visible
- **AND** at least one quote with author attribution is displayed

#### Scenario: Testimonial navigation works

- **WHEN** the user clicks next/prev arrows or dots
- **THEN** the displayed testimonial changes accordingly

### Requirement: Clients/Stats section renders

A 2x2 grid with loan approval and customer satisfaction counters.

#### Scenario: Clients section renders

- **WHEN** the user scrolls to the Clients section
- **THEN** a 2x2 grid is displayed
- **AND** a counter shows "2000+" with "Loan Approval" label
- **AND** a counter shows "99%" with "Satisfied Customers" label

### Requirement: How It Works section renders steps

A three-column section with numbered steps.

#### Scenario: How It Works section renders

- **WHEN** the user scrolls to the How It Works section
- **THEN** three numbered steps are displayed
- **AND** step 01 is "Apply for loan"
- **AND** step 02 is "Application review"
- **AND** step 03 is "Get funding fast"

### Requirement: FAQ section renders accordion

A gray-background section with a split layout and 4-item accordion.

#### Scenario: FAQ section renders

- **WHEN** the user scrolls to the FAQ section
- **THEN** the section has a gray background
- **AND** an accordion with 4 items is displayed
- **AND** clicking an accordion header expands its content
- **AND** clicking another header collapses the previous one

### Requirement: Footer renders with Component Dock link

A three-column footer with contact info, useful links, and newsletter form.

#### Scenario: Footer renders

- **WHEN** the user scrolls to the footer
- **THEN** the footer shows a logo, address, email, and phone number
- **AND** a "Useful links" column is shown
- **AND** a newsletter subscribe form with email input is present
- **AND** a bottom bar shows copyright text with a link to Component Dock

### Requirement: Back-to-top button

A floating green circular button that scrolls to top.

#### Scenario: Back-to-top button appears on scroll

- **WHEN** the user scrolls down the page
- **THEN** a circular green back-to-top button appears in the bottom-right
- **WHEN** the user clicks it
- **THEN** the page scrolls to the top

### Requirement: No ColorLib references in app code

No ColorLib branding or references exist in the application source files.

#### Scenario: No ColorLib references

- **WHEN** the app is built
- **THEN** no source files contain "colorlib.com" or "preview.colorlib.com"
- **AND** the footer links to componentdock.com instead of ColorLib

### Requirement: Mobile responsive layout

The template adapts to mobile viewports with stacked layouts.

#### Scenario: Mobile responsive layout

- **WHEN** the user views the page on a mobile viewport
- **THEN** the navbar collapses into a hamburger menu
- **AND** the hero form stacks below the hero text
- **AND** service cards stack vertically
