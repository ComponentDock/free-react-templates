# Template: VitaClinic (Medical / Healthcare)

## Purpose

Recreation of ColorLib **Healthcare** — a medical/healthcare website template with top bar, navbar, hero image slider, services bar, about section with accordion FAQ, feature grid, doctor team cards, testimonials, blog entries, and footer with appointment form.

- **Source slug:** `healthcare`
- **Preview URL:** https://preview.colorlib.com/theme/healthcare/
- **Original:** https://colorlib.com/wp/template/healthcare/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/healthcare-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from preview DOM + CSS)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `'Poppins', Arial, sans-serif` | Google Font, body + headings |
| Primary blue | `#3c97e8` | CTAs, buttons, nav active, hero gradient end |
| Accent green | `#9bdf46` | Secondary accent, feature highlights |
| Gradient | `linear-gradient(90deg, #43DDE6, #3c97e8)` | Hero/CTA gradient backgrounds |
| Dark bg | `#282e34` (near-black) | Footer background |
| Body text | `#333333` | Paragraph copy |
| Muted text | `#999999` | Secondary text, dates |
| Light bg | `#f9f9f9` | Alternating section backgrounds |
| White bg | `#fff` | Services bar, main content areas |
| Button radius | `30px` (pill) | Primary CTA buttons |
| Card radius | `4px` | Service cards, blog entries |
| Circle radius | `50%` | Doctor profile images, counters |
| Section padding | ~`5em 0` | Consistent vertical rhythm |

## Requirements

### Requirement: Top bar displays contact info

The top bar SHALL display a phone number and location address in a dark background strip above the navbar.

#### Scenario: Top bar renders contact details

- **WHEN** the page loads
- **THEN** a phone number is visible in the top bar
- **AND** a location/address is visible in the top bar

### Requirement: Navbar displays logo and navigation links

The navbar SHALL display the VitaClinic logo and navigation links: Home, Doctors (with dropdown), Services, Departments (with dropdown), Blog, Contact.

#### Scenario: Navbar renders all nav items

- **WHEN** the page loads
- **THEN** the VitaClinic logo is visible
- **AND** navigation links "Home", "Doctors", "Services", "Departments", "Blog", "Contact" are displayed

#### Scenario: Dropdown menus show sub-items

- **WHEN** the user hovers/clicks on "Doctors" or "Departments"
- **THEN** a dropdown submenu appears with relevant sub-links

### Requirement: Hero slider displays rotating slides with CTA

The hero section SHALL display a full-width image slider with 4 slides. Each slide SHALL have a heading, description text, and a "Make an Appointment" CTA button.

#### Scenario: Hero renders first slide

- **WHEN** the page loads
- **THEN** the hero slider is visible with a background image
- **AND** the heading "Your Health is always in the first place" is displayed
- **AND** a "Make an Appointment" button is visible

#### Scenario: Hero slides rotate

- **WHEN** 5 seconds pass without user interaction
- **THEN** the hero slider advances to the next slide
- **AND** the new slide heading and background image are displayed

### Requirement: Services bar displays service items

The services bar SHALL display 3 service icons with labels (Diagnostics and emergency treatment, Home medical appointments, Pharmacy refunded from hospital) and a heading "Comprehensive services for our patients".

#### Scenario: Services bar renders all items

- **WHEN** the page loads
- **THEN** 3 service items are visible with icons and labels
- **AND** the heading "Comprehensive services for our patients" is displayed

### Requirement: About section displays info with accordion FAQ

The about section SHALL display a split layout with an image on one side and text content on the other, including an accordion with 3 FAQ panels.

#### Scenario: About section renders content

- **WHEN** the page loads
- **THEN** the about section heading "About VitaClinic" is visible
- **AND** an image is displayed alongside the text
- **AND** 3 accordion FAQ panels are rendered

#### Scenario: Accordion panels expand on click

- **WHEN** the user clicks on an accordion panel header
- **THEN** the panel content expands and becomes visible

### Requirement: Features grid displays "What makes us best"

The features section SHALL display a split layout with a background image on one side and a feature grid on the other. Features: Qualified Doctors, Free Consultation, Online Enrollment, Modern Facilities — each with an icon.

#### Scenario: Features grid renders all items

- **WHEN** the page loads
- **THEN** the heading "What makes us best?" is visible
- **AND** 4 feature items are displayed with icons and labels
- **AND** a background image is shown on the left half

### Requirement: Doctor team section displays team cards

The doctor team section SHALL display the heading "Well Experienced Doctors" with 3 doctor profile cards, each showing a circular photo, name, and specialty.

#### Scenario: Doctor cards render

- **WHEN** the page loads
- **THEN** 3 doctor cards are displayed
- **AND** each card shows a circular profile image, doctor name, and specialty text

### Requirement: Testimonials section displays patient opinions

The testimonials section SHALL display the heading "Our patients and their opinions" with patient testimonial content on a colored background section.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** the heading "Our patients and their opinions" is visible
- **AND** testimonial content is displayed

### Requirement: Blog section displays recent posts

The blog section SHALL display the heading "Recent blog" with 2–3 blog entry cards, each showing an image, title, date, and description.

#### Scenario: Blog entries render

- **WHEN** the page loads
- **THEN** the heading "Recent blog" is visible
- **AND** 2–3 blog entry cards are displayed with images, titles, and dates

### Requirement: Footer displays info columns and appointment form

The footer SHALL display on a dark background with columns: Head Office (address + map placeholder), Departments (links), Useful Links, Support (links), and a "Make an Appointment" form (name, email, message, submit button). Footer bottom SHALL link to Component Dock.

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** the footer displays with dark background
- **AND** Head Office, Departments, Useful Links, and Support columns are visible
- **AND** the appointment form has name, email, message fields and a submit button

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to `https://www.componentdock.com/` labeled "Component Dock"

### Requirement: Scroll-to-top button

A scroll-to-top button SHALL appear when the user scrolls down, allowing quick return to the top of the page.

#### Scenario: Scroll-to-top appears on scroll

- **WHEN** the user scrolls past the hero section
- **THEN** a scroll-to-top button becomes visible

## Verification Checklist

- [ ] Top bar with phone and location renders
- [ ] Navbar with logo and all nav items renders
- [ ] Hero slider with 4 slides and CTA buttons renders
- [ ] Services bar with 3 service items renders
- [ ] About section with accordion FAQ renders
- [ ] Features grid with 4 items renders
- [ ] Doctor team section with 3 cards renders
- [ ] Testimonials section renders
- [ ] Blog section with entries renders
- [ ] Footer with all columns and appointment form renders
- [ ] Footer links to Component Dock
- [ ] Scroll-to-top button appears on scroll
- [ ] Design tokens match: Poppins font, #3c97e8 blue, #9bdf46 green, pill buttons
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
