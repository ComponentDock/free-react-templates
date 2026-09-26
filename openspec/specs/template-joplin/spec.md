# Template: Joplin (Personal / Portfolio)

## Purpose

Joplin is a personal portfolio/resume website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Jonson" free template (source:
https://colorlib.com/wp/template/jonson/), built under a DIFFERENT name
(**Joplin**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 single-page portfolio with a warm cream/maroon
color scheme, Poppins font, transparent sticky header, full-width hero with
animated rotating text, about section with stats, experience/education
timeline, expertise cards on cream background, portfolio gallery with hover
overlay, CTA banner, contact form, and footer with social icons.

- **Source:** [ColorLib Jonson](https://colorlib.com/wp/template/jonson/)
- **Preview:** https://preview.colorlib.com/theme/jonson/
- **New name:** joplin (apps/joplin)
- **Package:** @free-react-templates/joplin
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview's `assets/css/style.css` stylesheet:

| Token           | Value                                                 | Use                                                      |
| --------------- | ----------------------------------------------------- | -------------------------------------------------------- |
| Font family     | `'Poppins', sans-serif`                               | Google Fonts link (weights 200-800; use 400/500/600/700) |
| Primary/accent  | `#670000` (dark red/maroon)                           | Headings, text, button bg, nav active, links             |
| Primary hover   | `#880707` (darker red)                                | Button hover gradient end                                |
| Section bg      | `#FFEFAE` (warm cream/yellow)                         | Hero bg, expertise/services section bg                   |
| Body text       | `#000000`                                             | Primary body text                                        |
| Secondary text  | `#635c5c`                                             | Paragraphs, subtitle text                                |
| White           | `#fff`                                                | Button text, card bg, page content sections              |
| Button gradient | `linear-gradient(to left, #670000, #880707, #670000)` | Primary CTA buttons                                      |
| Button radius   | `0px` (square corners)                                | All buttons (boxed-btn, header-btn, submit-btn2)         |
| Button style    | uppercase, letter-spacing 3px, 14px                   | `.boxed-btn` and `.btn`                                  |

**Dark mode:** The original has no dark mode implementation. The recreation does NOT implement dark mode.

## Requirements

### Requirement: Page structure

The page SHALL load with a title containing "Joplin" and display 10 sections in order: Header, Hero, About, Experience, Education, Expertise, Gallery, CTA, Contact, Footer.

#### Scenario: Page loads with correct structure

- **WHEN** the user visits the Joplin homepage
- **THEN** the page title contains "Joplin"
- **AND** a sticky header is visible
- **AND** a hero section is visible
- **AND** 10 content sections exist in order

### Requirement: Header navigation

The header SHALL display navigation links (Home, About, Portfolio, Blog, Contact) and a "Let's Talk" CTA button, with a mobile hamburger menu on small screens.

#### Scenario: Navigation links

- **WHEN** the header is visible
- **THEN** navigation links for Home, About, Portfolio, Blog, Contact are displayed
- **AND** a "Let's Talk" CTA button is visible

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** a mobile navigation menu opens
- **AND** clicking a nav link closes the mobile menu

### Requirement: Hero section

The hero section SHALL display the name "Joplin." in large bold text, the subtitle "Digital Product Designer", and an animated rotating text element on a cream background.

#### Scenario: Hero content

- **WHEN** the hero section is visible
- **THEN** the name "Joplin." is displayed in large bold text
- **AND** the subtitle "Digital Product Designer" is shown
- **AND** an animated rotating text element is present

### Requirement: About section

The About section SHALL display a heading, bio text, portrait image, and 3 stat cards.

#### Scenario: About content

- **WHEN** the About section is visible
- **THEN** the heading reads "About"
- **AND** a bio paragraph is displayed
- **AND** a portrait image is displayed
- **AND** 3 stat cards are displayed (years, investment, awards)

### Requirement: Experience section

The Experience section SHALL display at least 2 job entries with title, date range, and company name.

#### Scenario: Experience entries

- **WHEN** the Experience section is visible
- **THEN** the heading reads "Experience"
- **AND** at least 2 experience entries are listed with title, date range, and company

### Requirement: Education section

The Education section SHALL display at least 2 education entries with title, date range, and institution.

#### Scenario: Education entries

- **WHEN** the Education section is visible
- **THEN** the heading reads "Education"
- **AND** at least 2 education entries are listed

### Requirement: Expertise section

The Expertise section SHALL display 3 service cards on a cream background.

#### Scenario: Service cards

- **WHEN** the Expertise section is visible
- **THEN** the heading reads "My Expertise"
- **AND** 3 service cards are displayed on a cream background

### Requirement: Gallery section

The Gallery section SHALL display at least 4 portfolio images with a hover overlay.

#### Scenario: Portfolio grid

- **WHEN** the Gallery section is visible
- **THEN** the heading reads "Selected Portfolios"
- **AND** at least 4 portfolio images are displayed with hover overlay

### Requirement: CTA banner

The CTA section SHALL display a heading and a "Download CV" button.

#### Scenario: Call to action

- **WHEN** the CTA section is visible
- **THEN** the text reads "Do you want to know more about me?"
- **AND** a "Download CV" button is displayed

### Requirement: Contact form

The Contact section SHALL display a form with name, email, subject inputs, a message textarea, and a "Send Message" button.

#### Scenario: Contact form fields

- **WHEN** the Contact section is visible
- **THEN** a "Contact Me" heading is displayed
- **AND** name, email, subject input fields are present
- **AND** a message textarea is present
- **AND** a "Send Message" button is present

### Requirement: Footer

The footer SHALL display social media icons, a copyright notice, and a link to componentdock.com.

#### Scenario: Footer content

- **WHEN** the footer is visible
- **THEN** social media icons are displayed
- **AND** a copyright notice is displayed
- **AND** a link to componentdock.com is present

## Verification checklist

- [x] Spec validated with `npm run spec:validate`
- [x] All design tokens match the original (Poppins font, #670000 maroon, #FFEFAE cream)
- [x] Section order matches original: Header → Hero → About → Experience → Education → Expertise → Gallery → CTA → Contact → Footer
- [x] Hero uses solid cream background (no image), large bold name, animated rotating text
- [x] Buttons have square corners (border-radius: 0), dark red gradient
- [x] About section has 2-column layout with stats
- [x] Gallery has hover overlay with plus icon
- [x] Contact form has 3-column input layout + full-width textarea
- [x] Footer links to componentdock.com (not Colorlib)
- [x] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [x] Tests pass with 100% coverage
- [x] Build succeeds
- [x] App renders without errors in browser
