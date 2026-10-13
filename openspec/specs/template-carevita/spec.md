# Template: CareVita (Medical / Healthcare)

## Purpose

Recreation of ColorLib **CareMed** (`https://colorlib.com/wp/template/caremed/`).
Preview: `https://preview.colorlib.com/theme/caremed/`

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Design tokens (from preview CSS)

| Token              | Value                                     |
| ------------------ | ----------------------------------------- |
| Brand primary      | `#283290` (deep indigo — buttons, boxes)  |
| Brand accent       | `#20d34a` (vivid green — button hover, borders) |
| Background white   | `#FFFFFF`                                 |
| Text dark          | `#272727`                                 |
| Text muted         | `#696969` / `#b2b2b2`                     |
| Services bg        | `#f5f7fa` (light gray)                    |
| Copyright bg       | `#020523` (near-black)                    |
| Font family        | `'Roboto', sans-serif`                    |
| Button shape       | flat rectangle, 51px height, bottom green bar that fills on hover |
| Box hover          | `box-shadow: 0 15px 49px rgba(0,0,0,0.59)` |

## Section order (from preview DOM)

1. **Navbar** — top bar (FAQ, Request Appointment, emergency phone) + sticky nav (Home, About us, Services, News, Contact) + logo + "Request an Appointment" CTA
2. **Hero/Slider** — full-width carousel with dark overlay background image, headline "Medicine made with care", subtext, "read more" button
3. **Three Boxes** — overlapping cards (negative margin-top: -59px) on dark indigo `#283290` background: Working Hours, Appointments, Emergency Cases — each with icon + text
4. **About** — white background, heading "A great medical team to help your needs", paragraph text, two images
5. **Departments** — parallax background image, heading "Our Medical Departments", 3 department cards with circular photo + name + specialty (Plastic Surgery, Gastroenterology, Dentistry)
6. **Services** — gray `#f5f7fa` background, heading "Our Featured Services", 6 service cards in a 2×3 grid (Free Checkups, Screening Exams, RMI Services, Dentistry, + 2 more), each with icon + title + description; hover turns card indigo
7. **CTA** — parallax background image, heading "Need a personal health plan?", subtext, "request a plan" button
8. **Footer** — dark background with 4 columns (About + logo, Useful Links, Our Services, Recent News)
9. **Copyright** — near-black `#020523` background with Component Dock link

## Requirements

### Navbar

#### Scenario: Top bar shows contact info

- **GIVEN** the user loads the page
- **THEN** a top bar displays "FAQ", "Request an Appointment", and emergency phone number

#### Scenario: Sticky navigation

- **GIVEN** the user scrolls down
- **THEN** the navigation bar remains visible (sticky)
- **AND** the nav contains links: Home, About us, Services, News, Contact

#### Scenario: Logo and CTA

- **GIVEN** the user views the navbar
- **THEN** a logo ("CareVita") is displayed on the left
- **AND** a "Request an Appointment" button appears in the nav area

### Hero / Slider

#### Scenario: Hero displays headline

- **GIVEN** the user loads the page
- **THEN** the hero section shows "Medicine made with care" as the main heading

#### Scenario: Hero has background image

- **GIVEN** the user loads the page
- **THEN** the hero section has a dark overlay with a background image

#### Scenario: Hero CTA button

- **GIVEN** the user views the hero
- **THEN** a "read more" button is visible

#### Scenario: Hero is a carousel

- **GIVEN** the user views the hero
- **THEN** 3 slide items are present (same content, carousel behavior)

### Three Info Boxes

#### Scenario: Three info boxes rendered

- **GIVEN** the user loads the page
- **THEN** 3 overlapping info boxes are displayed over the hero area

#### Scenario: Box content

- **GIVEN** the user views the info boxes
- **THEN** one box shows "Working Hours" with schedule details
- **AND** one box shows "Appointments" with descriptive text
- **AND** one box shows "Emergency Cases" with a phone number

#### Scenario: Box hover effect

- **GIVEN** the user hovers over an info box
- **THEN** a drop shadow appears (box-shadow: 0 15px 49px)

### About

#### Scenario: About section renders

- **GIVEN** the user scrolls to the about section
- **THEN** the heading reads "A great medical team to help your needs"
- **AND** a descriptive paragraph is displayed
- **AND** two images appear in the layout

### Departments

#### Scenario: Departments section background

- **GIVEN** the user scrolls to the departments section
- **THEN** a parallax background image is visible

#### Scenario: Department cards

- **GIVEN** the user views the departments
- **THEN** 3 department cards are shown
- **AND** each card has a circular photo, doctor name, and specialty
- **AND** specialties include Plastic Surgery, Gastroenterology, and Dentistry

#### Scenario: Read more link

- **GIVEN** the user views the departments
- **THEN** a "read more" link is present

### Services

#### Scenario: Services section background

- **GIVEN** the user scrolls to the services section
- **THEN** the section has a light gray (#f5f7fa) background

#### Scenario: Service cards

- **GIVEN** the user views the services
- **THEN** 6 service cards are displayed in a grid
- **AND** each card has an icon, title, and description
- **AND** titles include "Free Checkups", "Screening Exams", "RMI Services", "Dentistry"

#### Scenario: Service hover

- **GIVEN** the user hovers over a service card
- **THEN** the card background changes to indigo (#283290)
- **AND** the text color changes to white

### CTA

#### Scenario: CTA section

- **GIVEN** the user scrolls to the CTA section
- **THEN** the heading reads "Need a personal health plan?"
- **AND** a "request a plan" button is visible
- **AND** a parallax background image is displayed

### Footer

#### Scenario: Footer columns

- **GIVEN** the user scrolls to the footer
- **THEN** 4 columns are displayed: About, Useful Links, Our Services, Recent News

#### Scenario: Footer about

- **GIVEN** the user views the footer
- **THEN** the logo, address, phone, and email are shown

#### Scenario: Footer links

- **GIVEN** the user views the footer
- **THEN** Useful Links contains: Testimonials, FAQ, Apply for a Job, Terms & Conditions, Our Partners

#### Scenario: Copyright

- **GIVEN** the user views the copyright bar
- **THEN** a Component Dock link is present ("Made with Component Dock" or similar)
- **AND** the copyright bar has a near-black background

## Verification checklist

- [ ] All 9 sections rendered in correct order
- [ ] Design tokens match: brand primary #283290, accent #20d34a, font Roboto
- [ ] Button styling: flat rectangle, bottom green bar fill on hover
- [ ] Service cards hover to indigo with white text
- [ ] Parallax backgrounds on Departments and CTA sections
- [ ] Footer has 4 columns with correct content
- [ ] Copyright links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Typecheck passes
- [ ] Build succeeds
