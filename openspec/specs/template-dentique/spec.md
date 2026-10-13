# Template: Dentique (Dental Clinic)

## Purpose

Recreation of the ColorLib "Dentamax" template as a modern React 19 + Vite + Tailwind 4 + TypeScript SPA.
- **Source:** [ColorLib Dentamax](https://colorlib.com/wp/template/dentamax/)
- **Preview:** https://preview.colorlib.com/theme/dentamax/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dentamax-free-template.jpg
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Package:** `@free-react-templates/dentique`
- **Deploy:** `https://dentique.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-cyan` | `#65d8ea` | Primary accent — navbar active links, buttons, hover states, section highlights |
| `brand-navy` | `#0f4883` | Text headings, appointment section heading, strong type |
| `brand-gold` | `#ffcf94` | Hero overlay gradient, appointment wrap gradient (rgba 0.35) |
| `brand-dark` | `#1b262c` | Footer background, dark section overlays |
| `brand-light` | `#effcfd` | Appointment section fallback bg, light backgrounds |
| `brand-muted` | `#6c8faf` | Secondary text, service descriptions |

### Gradient

The signature gradient used on hero overlay and appointment section:
```
linear-gradient(-45deg, rgba(255,207,148,0.35) 0%, rgba(227,209,163,0.35) 18%, #65d8ea 100%)
```
Gold → cream → cyan diagonal gradient.

### Typography

- **Body font:** Roboto (Google Fonts) — sans-serif
- **Display/headings font:** Arizonia (Google Fonts) — decorative script
- **Heading colors:** `#0f4883` navy, `#212529` dark
- **Body text:** `#212529` dark
- **Muted text:** `#6c757d` gray

### Button Styles

- **Primary CTA:** rounded pill buttons, `border-radius: 50px`, background `#65d8ea` cyan, white text
- **Outline buttons:** transparent bg, cyan border, cyan text
- **Hover:** darkened cyan
- **Font weight:** 500, uppercase letter-spacing on some CTAs

### Section Backgrounds

| Section | Background |
|---------|-----------|
| Hero | Image + diagonal gradient overlay (gold→cyan) |
| Services (4 cards) | `#effcfd` light cyan |
| Services 2 (8 cards) | White |
| About | White with large image |
| Stats/Counter | Image parallax with dark overlay |
| Testimonials | `#effcfd` light cyan |
| Appointment Form | Gradient overlay (gold→cyan diagonal) |
| Intro CTA | Gradient (gold→cyan) |
| Footer | `#1b262c` dark navy |

### Navbar

- Transparent on hero, becomes white with shadow on scroll
- Active link color: `#65d8ea` cyan
- Container width: 1110px, border-radius: 5px
- Logo text (placeholder): `Dentique`

## Requirements

### Feature: Dentique template behaviour

#### Scenario: Hero Section — Slider

- **GIVEN** the user loads the page
- **WHEN** the hero section is visible
- **THEN** there should be a full-width image slider with at least 2 slides
- **AND** each slide shows a headline in script/display font and a subheadline
- **AND** each slide has "See Our Services" and "Book An Appointment" CTAs
- **AND** a diagonal gradient overlay (gold→cyan) is applied over the images

#### Scenario: Services Section — 4 Cards

- **GIVEN** the user scrolls to the services section
- **WHEN** the section is visible
- **THEN** there are exactly 4 service cards in a row
- **AND** each card has an icon (Font Awesome or Lucide), title, and description
- **AND** the section background is light cyan (#effcfd)
- **AND** the titles are: Emergency Service, Qualified Dentist, General Treatment, Online Appointment

#### Scenario: Services Section — 8 Feature Cards

- **GIVEN** the user scrolls to the expanded services section
- **WHEN** the section is visible
- **THEN** there are exactly 8 feature cards in 2 rows of 4
- **AND** each card has an icon, title, and short description
- **AND** the titles include: Easy Booking, Experience, Flexible Schedule, Best Price Guarantee
- **AND** the section background is white

#### Scenario: About Section

- **GIVEN** the user scrolls to the about section
- **WHEN** the section is visible
- **THEN** there is a heading "We Are Dentique — A Dental Clinic"
- **AND** there is descriptive paragraph text
- **AND** there is a "Get in touch with us" CTA button
- **AND** there is a large image on the right side

#### Scenario: Stats/Counter Section

- **GIVEN** the user scrolls to the stats section
- **WHEN** the section is visible
- **THEN** there are 3+ stat counters displayed
- **AND** each stat shows a number and a label (e.g. "Years of Experience", "Happy Patients")
- **AND** the section uses a parallax background image with dark overlay

#### Scenario: Testimonials Section

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section is visible
- **THEN** there are 3+ testimonial cards in a carousel or grid
- **AND** each card has a quote, author name, and role
- **AND** the section background is light (#effcfd)

#### Scenario: Appointment Form

- **GIVEN** the user scrolls to the appointment section
- **WHEN** the section is visible
- **THEN** there is a heading "Appointment Form"
- **AND** the form contains fields: First Name, Last Name, Phone, Date, Time, Message
- **AND** there is a "Make An Appointment" submit button
- **AND** the section has a diagonal gradient background (gold→cyan)

#### Scenario: CTA/Intro Section

- **GIVEN** the user scrolls to the intro CTA section
- **WHEN** the section is visible
- **THEN** there is a headline and description text
- **AND** a CTA button
- **AND** the section has a gradient background (gold→cyan)

#### Scenario: Navbar Behavior

- **GIVEN** the page loads
- **WHEN** the navbar is at the top
- **THEN** it is transparent with white text
- **AND** when the user scrolls down
- **THEN** the navbar becomes white with a shadow
- **AND** the active link is highlighted in cyan (#65d8ea)
- **AND** the nav items are: Home, About, Services, Dentist, Blog, Gallery, Contact

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is visible
- **THEN** there is a phone number and email link
- **AND** there is a copyright line with "Component Dock" link
- **AND** the footer background is dark navy (#1b262c)
- **AND** there are light-colored text elements

#### Scenario: Responsive Layout

- **GIVEN** the user views the page on a mobile device (< 768px)
- **WHEN** the layout adapts
- **THEN** the navbar collapses to a hamburger menu
- **AND** service cards stack vertically
- **AND** the hero text remains readable
- **AND** the appointment form fields stack vertically

#### Scenario: Accessibility

- **GIVEN** the page loads
- **WHEN** a screen reader navigates the page
- **THEN** all images have alt text
- **AND** interactive elements are keyboard-focusable
- **AND** form inputs have associated labels
- **AND** the page has a valid heading hierarchy (h1 → h2 → h3)

## Verification Checklist

- [ ] Hero slider renders with 2+ slides and gradient overlay
- [ ] 4 service cards render with icons and correct content
- [ ] 8 expanded service cards render in 2×4 grid
- [ ] About section with image, heading, and CTA
- [ ] Stats counters render with parallax background
- [ ] Testimonials render in carousel/grid
- [ ] Appointment form with all fields functional
- [ ] CTA intro section with gradient
- [ ] Navbar transparent → white on scroll
- [ ] Footer with dark background, contact info, Component Dock link
- [ ] Responsive: mobile hamburger, stacked cards, stacked form
- [ ] Accessibility: alt text, keyboard nav, labels, heading hierarchy
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` = `dentique.free.componentdock.com`
- [ ] Package name = `@free-react-templates/dentique`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
