# Template: Playville (Children's Education / Kindergarten)

## Purpose

Recreation of the ColorLib **Kiddos** template as a single-page React app.

- **Source:** https://colorlib.com/wp/template/kiddos/
- **Preview:** https://preview.colorlib.com/theme/kiddos/
- **New name:** `playville` (apps/playville, @free-react-templates/playville)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview CSS)

| Token            | Value                    | Usage                                      |
| ---------------- | ------------------------ | ------------------------------------------ |
| primary          | #1eaaf1 (sky blue)       | Navbar active, links, icons, counters      |
| secondary        | #fda638 (amber/orange)   | CTA buttons, section headings              |
| tertiary         | #8cc152 (green)          | Service column bg, accent                  |
| quaternary       | #f1453d (red)            | Service column bg, overlay tint            |
| fifth            | #5d50c6 (purple)         | Service column bg, blog date badge, quote  |
| dark             | #232323                  | Footer background                          |
| dark-alt         | #3c312e                  | Secondary dark bg                          |
| bg-light         | #fafafa                  | Alternate section backgrounds              |
| font-body        | "Work Sans", sans-serif   | Body text, 16px, line-height 1.8           |
| font-display     | "Fredericka the Great"    | Decorative/brand headings (hand-drawn)     |
| btn-radius       | 40px (pill)              | All buttons                                |
| icon-circle-bg   | white / #1eaaf1          | Service icons (white circle on color bg)   |
| overlay-opacity  | 0.2–0.4                  | Hero & parallax section overlays           |

## Sections (DOM order from preview)

1. **TopInfoBar** — contact strip (address, email, phone) on primary bg
2. **Navbar** — transparent → white on scroll, brand "Playville", links: Home, About, Teacher, Courses, Pricing, Blog, Contact
3. **HeroSlider** — full-width Swiper carousel, 2 slides, background images + overlay, centered headline + secondary CTA button
4. **ServicesStrip** — 4 equal columns on colored backgrounds (primary/tertiary/fifth/quaternary), each with circular icon + heading + description
5. **WelcomeAbout** — split layout: left column "Welcome to Playville Learning School" (bg-light) with Read More CTA; right column "What We Offer" with 2×2 grid of icon+text feature items
6. **IntroBanner** — full-width parallax section with dark overlay, headline "We Are The Best School For Your Kids", description text
7. **StaffSection** — heading + grid of teacher/staff cards with hover social links reveal
8. **CounterSection** — parallax background with 4 animated stat counters (students, staff, awards, graduates)
9. **Testimonials** — bg-light, Swiper carousel of testimonial cards with user image + quote + name + position
10. **AppointmentForm** — parallax background, heading + contact form (name, email, date, time, message, submit)
11. **BlogSection** — heading + grid of blog entry cards with date badge, image, title, meta
12. **GallerySection** — image grid with hover zoom icon overlay
13. **Footer** — dark bg (#232323), 5 widget columns (About/logo, Categories, Recent Posts, Newsletter subscribe, Contact info), social icons, bottom copyright

## Requirements

### Feature: TopInfoBar

#### Scenario: Contact info bar renders

- **GIVEN** the page loads
- **THEN** I see an address, email, and phone number in a horizontal bar
- **AND** the bar has a blue (primary) background

### Feature: Navbar

#### Scenario: Navigation links present

- **GIVEN** the page loads
- **THEN** I see a navbar with brand "Playville"
- **AND** nav links: Home, About, Teacher, Courses, Pricing, Blog, Contact

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** I scroll past the hero
- **THEN** the navbar background changes to white
- **AND** the navbar sticks to the top of the viewport

### Feature: HeroSlider

#### Scenario: Hero slider shows slides

- **GIVEN** the page loads
- **THEN** I see a full-width hero section with a background image
- **AND** a centered headline and a CTA button

#### Scenario: Slides auto-advance

- **GIVEN** the hero slider is visible
- **WHEN** 5 seconds pass
- **THEN** the slider transitions to the next slide

### Feature: ServicesStrip

#### Scenario: Four service columns render

- **GIVEN** the page loads
- **THEN** I see 4 service columns in a row
- **AND** each column has a circular icon, heading, and description
- **AND** each column has a different background color

### Feature: WelcomeAbout

#### Scenario: Welcome section renders

- **GIVEN** the page loads
- **THEN** I see a "Welcome to Playville" heading
- **AND** a "Read More" button
- **AND** a "What We Offer" section with 4 feature items in a 2-column grid

### Feature: IntroBanner

#### Scenario: Intro parallax banner renders

- **GIVEN** the page loads
- **THEN** I see a full-width parallax section with overlay
- **AND** a heading and description text

### Feature: StaffSection

#### Scenario: Staff cards render

- **GIVEN** the page loads
- **THEN** I see a "Our Teacher" heading
- **AND** teacher cards with image, name, and position
- **AND** hovering a card reveals social media icons

#### Scenario: Staff hover effect

- **GIVEN** a staff card is visible
- **WHEN** I hover over it
- **THEN** the social icons overlay appears
- **AND** the card image shifts slightly

### Feature: CounterSection

#### Scenario: Stats counters render

- **GIVEN** the page loads
- **THEN** I see 4 stat items with a large number and label
- **AND** each number animates on scroll into view

### Feature: Testimonials

#### Scenario: Testimonials carousel renders

- **GIVEN** the page loads
- **THEN** I see a testimonials section on light background
- **AND** testimonial cards with user image, quote, name, and position
- **AND** the carousel auto-advances

### Feature: AppointmentForm

#### Scenario: Appointment form renders

- **GIVEN** the page loads
- **THEN** I see a "Make an Appointment" heading
- **AND** form fields: name, email, date, time, message
- **AND** a submit button

### Feature: BlogSection

#### Scenario: Blog entries render

- **GIVEN** the page loads
- **THEN** I see a "Latest News" heading
- **AND** blog entry cards with date badge, image, title, and meta info

### Feature: GallerySection

#### Scenario: Gallery grid renders

- **GIVEN** the page loads
- **THEN** I see an image gallery grid
- **AND** hovering an image shows a zoom icon overlay

### Feature: Footer

#### Scenario: Footer renders

- **GIVEN** the page loads
- **THEN** I see a dark footer with 5 widget columns
- **AND** a "Component Dock" attribution link
- **AND** social media icon links

## Verification checklist

- [ ] All 13 sections present in correct DOM order
- [ ] Design tokens match: primary #1eaaf1, secondary #fda638, tertiary #8cc152, quaternary #f1453d, fifth #5d50c6
- [ ] Font: Work Sans for body, decorative font for brand/display
- [ ] Buttons: pill-shaped (border-radius 40px)
- [ ] Hero: full-width Swiper with overlay + centered headline + CTA
- [ ] Services strip: 4 colored columns with circular white icons
- [ ] Welcome/About: split layout with feature grid
- [ ] Parallax sections: Intro, Counter, Appointment (background-image covers with overlay)
- [ ] Staff cards: hover reveals social icons
- [ ] Counter: animated number counting on scroll
- [ ] Testimonials: Swiper carousel on bg-light
- [ ] Blog: date badge overlay on images
- [ ] Gallery: hover zoom overlay
- [ ] Footer: dark bg, Component Dock link, social icons
- [ ] Responsive: mobile hamburger nav, stacked columns
- [ ] No ColorLib references in app code (provenance only in spec)
