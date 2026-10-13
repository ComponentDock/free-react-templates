# Template: Wellnest (Medical / Dental Care)

## Purpose

Recreation of ColorLib "Drcare" — a medical/dental care website template.

- **Source:** [ColorLib Drcare](https://colorlib.com/wp/template/drcare/)
- **Preview:** https://preview.colorlib.com/theme/drcare/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/drcare-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `wellnest` (apps/wellnest, @free-react-templates/wellnest)
- **Deploy target:** wellnest.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary blue | #2f89fc | Brand color, links, hover states, borders |
| Dark blue | #167bfc | Secondary brand accent |
| Light blue | #61a6fd | Hover/active state |
| Orange accent | #ff8000 | Highlight color, counter bg |
| Bootstrap primary | #007bff / #0062cc | Button backgrounds |
| Bootstrap secondary | #6c757d / #545b62 | Button backgrounds |
| White | #fff | Card backgrounds, text on dark |
| Light gray bg | #fafafa | Section alternating bg |
| Gray bg | #e6e6e6 | Divider/section bg |
| Dark bg | #000000 | Footer background |
| Font family | "Work Sans", Arial, sans-serif | Body text |
| Border radius (pill) | 40px | Primary buttons |
| Border radius (small) | 4px | Cards, inputs |

## Section structure (from preview DOM)

1. **TopBar** — contact info strip (phone, email, address icons + text)
2. **Navbar** — dark bg, logo left, nav links right (Home, About, Department, Doctor, Blog, Contact)
3. **HeroSlider** — owl-carousel style, 2 slides with dark overlay, large heading + subtext + CTA button
4. **Services** — 4-column cards: Qualified Doctors, Emergency Care, Outdoor Checkup, 24 Hours Service (icon + title + short text)
5. **About** — split layout: text block ("Medical specialty concerned with the care of acutely ill hospitalized patients") with stats on right
6. **Stats** — counter section with parallax bg image (numbers for patients, doctors, staff, awards)
7. **Departments** — horizontal tabbed carousel with 6 departments (Neurological, Surgical, Dental, Ophthalmology, Cardiology, General). Each tab shows 4 sub-items (Primary Care, Lab Test, Symptom Check, Heart Rate)
8. **ConsultationCTA** — "We Provide Free Health Care Consultation" banner
9. **ClinicDepartments** — repeat of department tabs with icon lists
10. **Doctors** — 4 doctor cards (photo, name, specialty, social links)
11. **Testimonials** — bg-light section, patient quotes
12. **ConsultationForm** — "Free Consultation" CTA with form
13. **Facts** — counter section with bg image, 4 metrics
14. **Pricing** — 4-tier cards (Basic, Standard, Premium, Platinum)
15. **Blog** — 3 recent blog post cards
16. **Footer** — dark bg, 6 columns: About/Dr.Care Facts, Links, Services, Recent Blog, Opening Hours, Subscribe

## Requirements

### TopBar

#### Scenario: contact info display

- **GIVEN** the user visits the page
- **THEN** a top bar shows phone number, email, and address with icons
- **AND** the bar has a light/white background

### Navbar

#### Scenario: navigation links

- **GIVEN** the user views the navbar
- **THEN** links are visible: Home, About, Department, Doctor, Blog, Contact
- **AND** the navbar has a dark background
- **AND** the logo appears on the left

#### Scenario: mobile toggle

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user taps the hamburger icon
- **THEN** the nav links expand in a dropdown

### HeroSlider

#### Scenario: hero content

- **GIVEN** the hero slider is visible
- **THEN** a heading is displayed (e.g., "Everyday We Bring Hope and Smile")
- **AND** a subheading provides context
- **AND** a CTA button is present

#### Scenario: slider navigation

- **GIVEN** the hero slider is visible
- **WHEN** the user navigates slides
- **THEN** the content transitions between at least 2 slides

### Services

#### Scenario: service cards

- **GIVEN** the user scrolls to services
- **THEN** 4 service cards are visible
- **AND** each card has an icon, title, and short description
- **AND** the services are: Qualified Doctors, Emergency Care, Outdoor Checkup, 24 Hours Service

### About

#### Scenario: about content

- **GIVEN** the user scrolls to the about section
- **THEN** a heading or paragraph about medical care is displayed
- **AND** supporting content (stats or text) appears alongside

### Stats

#### Scenario: counter display

- **GIVEN** the user scrolls to the stats section
- **THEN** 4 counters are visible (patients, doctors, staff, awards or similar)
- **AND** the section has a parallax background image

### Departments

#### Scenario: department tabs

- **GIVEN** the user scrolls to departments
- **THEN** tabs are visible for 5+ departments
- **AND** clicking a tab shows 4 sub-items (Primary Care, Lab Test, Symptom Check, Heart Rate)

### Doctors

#### Scenario: doctor cards

- **GIVEN** the user scrolls to the doctors section
- **THEN** 4 doctor cards are displayed
- **AND** each card shows photo, name, specialty, and social links

### Testimonials

#### Scenario: patient quotes

- **GIVEN** the user scrolls to testimonials
- **THEN** patient testimonial quotes are displayed
- **AND** the section has a light gray background

### Pricing

#### Scenario: pricing tiers

- **GIVEN** the user scrolls to pricing
- **THEN** 4 pricing tiers are shown (Basic, Standard, Premium, Platinum)
- **AND** each tier lists features and a price

### Blog

#### Scenario: recent posts

- **GIVEN** the user scrolls to blog
- **THEN** 3 blog post cards are displayed
- **AND** each has an image, title, date, and excerpt

### Footer

#### Scenario: footer columns

- **GIVEN** the user scrolls to the footer
- **THEN** 6 columns are visible: About, Links, Services, Blog, Opening Hours, Subscribe
- **AND** the footer has a dark background
- **AND** a "Component Dock" attribution link is present

## Verification checklist

- [ ] TopBar renders with contact icons and info
- [ ] Navbar has dark bg, logo, 6 nav links, mobile hamburger toggle
- [ ] HeroSlider shows 2+ slides with headings, subtext, CTA buttons, overlay
- [ ] Services shows 4 cards with icons, titles, descriptions
- [ ] About section has text content and supporting stats
- [ ] Stats section has 4 counters with parallax bg
- [ ] Departments has tabbed interface with 5+ tabs, each showing 4 sub-items
- [ ] Doctors shows 4 cards with photo, name, specialty, social links
- [ ] Testimonials shows quotes on light bg
- [ ] Pricing shows 4 tiers with features and prices
- [ ] Blog shows 3 post cards
- [ ] Footer has 6 columns, dark bg, Component Dock link
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains wellnest.free.componentdock.com
- [ ] homepage in package.json matches deploy target
- [ ] placeholder images use picsum.photos
- [ ] Font loaded from Google Fonts: Work Sans
