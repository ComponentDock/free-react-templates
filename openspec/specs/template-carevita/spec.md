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

## Gherkin scenarios

### Navbar

```gherkin
Scenario: Top bar shows contact info
  Given the user loads the page
  Then a top bar displays "FAQ", "Request an Appointment", and emergency phone number

Scenario: Sticky navigation
  Given the user scrolls down
  Then the navigation bar remains visible (sticky)
  And the nav contains links: Home, About us, Services, News, Contact

Scenario: Logo and CTA
  Given the user views the navbar
  Then a logo ("CareVita") is displayed on the left
  And a "Request an Appointment" button appears in the nav area
```

### Hero / Slider

```gherkin
Scenario: Hero displays headline
  Given the user loads the page
  Then the hero section shows "Medicine made with care" as the main heading

Scenario: Hero has background image
  Given the user loads the page
  Then the hero section has a dark overlay with a background image

Scenario: Hero CTA button
  Given the user views the hero
  Then a "read more" button is visible

Scenario: Hero is a carousel
  Given the user views the hero
  Then 3 slide items are present (same content, carousel behavior)
```

### Three Info Boxes

```gherkin
Scenario: Three info boxes rendered
  Given the user loads the page
  Then 3 overlapping info boxes are displayed over the hero area

Scenario: Box content
  Given the user views the info boxes
  Then one box shows "Working Hours" with schedule details
  And one box shows "Appointments" with descriptive text
  And one box shows "Emergency Cases" with a phone number

Scenario: Box hover effect
  Given the user hovers over an info box
  Then a drop shadow appears (box-shadow: 0 15px 49px)
```

### About

```gherkin
Scenario: About section renders
  Given the user scrolls to the about section
  Then the heading reads "A great medical team to help your needs"
  And a descriptive paragraph is displayed
  And two images appear in the layout
```

### Departments

```gherkin
Scenario: Departments section background
  Given the user scrolls to the departments section
  Then a parallax background image is visible

Scenario: Department cards
  Given the user views the departments
  Then 3 department cards are shown
  And each card has a circular photo, doctor name, and specialty
  And specialties include Plastic Surgery, Gastroenterology, and Dentistry

Scenario: Read more link
  Given the user views the departments
  Then a "read more" link is present
```

### Services

```gherkin
Scenario: Services section background
  Given the user scrolls to the services section
  Then the section has a light gray (#f5f7fa) background

Scenario: Service cards
  Given the user views the services
  Then 6 service cards are displayed in a grid
  And each card has an icon, title, and description
  And titles include "Free Checkups", "Screening Exams", "RMI Services", "Dentistry"

Scenario: Service hover
  Given the user hovers over a service card
  Then the card background changes to indigo (#283290)
  And the text color changes to white
```

### CTA

```gherkin
Scenario: CTA section
  Given the user scrolls to the CTA section
  Then the heading reads "Need a personal health plan?"
  And a "request a plan" button is visible
  And a parallax background image is displayed
```

### Footer

```gherkin
Scenario: Footer columns
  Given the user scrolls to the footer
  Then 4 columns are displayed: About, Useful Links, Our Services, Recent News

Scenario: Footer about
  Given the user views the footer
  Then the logo, address, phone, and email are shown

Scenario: Footer links
  Given the user views the footer
  Then Useful Links contains: Testimonials, FAQ, Apply for a Job, Terms & Conditions, Our Partners

Scenario: Copyright
  Given the user views the copyright bar
  Then a Component Dock link is present ("Made with Component Dock" or similar)
  And the copyright bar has a near-black background
```

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
