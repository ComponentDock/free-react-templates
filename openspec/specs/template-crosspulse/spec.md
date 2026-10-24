# Template: Crosspulse (Health & Fitness — Crossfit/Gym)
<!-- prep-status: shipped-as=ironpulse -->
> **SHIPPED-UNDER** — the ColorLib `crossbody` design this prep describes already
> ships as `apps/ironpulse` (<https://ironpulse.free.componentdock.com>).
> Do not scaffold `apps/crosspulse`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-ironpulse/spec.md`.

## Purpose

Recreation of ColorLib "Crossbody" — a crossfit/gym landing page.

- **Source slug:** `crossbody`
- **ColorLib URL:** https://colorlib.com/wp/template/crossbody/
- **Preview URL:** https://preview.colorlib.com/theme/crossbody/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `crosspulse` (no collision with existing apps or specs)

## Design Tokens (extracted from live preview CSS)

| Token            | Value                                           | Usage                                        |
|------------------|--------------------------------------------------|----------------------------------------------|
| Font family      | Work Sans (weights 300–900), sans-serif fallback | Global body + headings                       |
| Brand primary    | `#78d5ef` (light sky-blue)                       | `.btn-primary` background, links             |
| Brand accent     | `#ff0055` → `#ff6600` gradient (45°)             | `.btn-custom` (enroll CTA), price tag bg     |
| Dark background  | `#090808` (near-black)                           | Counter section, footer bg                   |
| Text primary     | `#212529`                                        | Body text                                    |
| Text muted       | `#6c757d`                                        | Secondary text, dates                        |
| White            | `#fff`                                           | Counter numbers, headings on dark bg         |
| Border radius    | `0.25rem` (Bootstrap default)                    | Buttons, cards                               |
| Button shape     | Rounded corners (0.25rem), `.btn-custom` has gradient bg | Enroll/CTA buttons              |
| Section bg       | Light sections: white; dark sections: `#090808`  | Alternating light/dark rhythm                |

### Section backgrounds

- Hero: full-viewport parallax image with dark overlay
- Pricing cards: image-backed cards with title/text reveal on hover
- Counter: dark bg `#090808` with parallax image, white numbers on `#ff0055` label pills
- Testimonials: parallax bg image with dark overlay
- Appointment/Contact: dark bg with map placeholder on left, form on right
- Gallery: 4-column image strip (full-width row)
- Footer: dark bg `#000` with social links, blog sidebar, contact info

## Requirements

### Navbar

#### Scenario: Navbar

- **GIVEN** the user loads the page, **when** the viewport renders, **then** a dark navigation bar appears with the brand name "Crosspulse" on the left
- **GIVEN** the navbar, **when** the user sees the links, **then** they see: Home, About, Classes, Trainers, Pricing, Blog, Contact
- **GIVEN** the navbar, **when** the viewport is mobile, **then** a hamburger toggle appears that expands/collapses the nav links

### Hero

#### Scenario: Hero

- **GIVEN** the page loads, **when** the hero renders, **then** a full-viewport parallax background image is shown with a dark overlay
- **GIVEN** the hero, **when** the text renders, **then** the headline "Cross Body" (or "Crosspulse") appears in large bold type with a subheading "Crossfit. Working Harder"
- **GIVEN** the hero, **when** the video button renders, **then** a play icon link appears in the upper right reading "Crossfit Workout Harder — Watch Our Video"

### Pricing / Course Cards

#### Scenario: Pricing / Course Cards

- **GIVEN** the user scrolls to the pricing section, **when** the heading renders, **then** it reads "Pricing For Courses" with a decorative subheading icon pair and a description paragraph
- **GIVEN** the pricing section, **when** three cards render, **then** each card shows a background image, a title ("Weight Lifting"), a subtitle, a price ("$240.00"), a short description, and an "Enroll Now" button with gradient accent
- **GIVEN** the pricing section, **when** a card is active, **then** it has an "active" visual state (highlighted background)
- **GIVEN** the pricing section, **when** the user hovers a card, **then** the title area fades out and the text/price area slides in

### Programs / Classes List

#### Scenario: Programs / Classes List

- **GIVEN** the user scrolls to the programs section, **when** the list renders, **then** five program items appear: Crossfit, Aerobic Classes, Fitness, Yoga Classes, Boxing
- **GIVEN** each program item, **when** it renders, **then** it shows an icon on the right (mobile: top), a title, and a description paragraph, with alternating left/right alignment on desktop

### Counter / Stats

#### Scenario: Counter / Stats

- **GIVEN** the user scrolls to the counter section, **when** the dark section renders, **then** a parallax background image appears with four animated stat counters
- **GIVEN** the counters, **when** they animate on scroll, **then** the numbers count up: Happy Customers (5000), Perfect Bodies (4560), Working Hours (570), Success Stories (900)
- **GIVEN** each counter, **when** it renders, **then** the number appears large in white and the label appears on a red (`#ff0055`) pill background

### Coaches / Trainers

#### Scenario: Coaches / Trainers

- **GIVEN** the user scrolls to the coaches section, **when** the heading renders, **then** it reads "Our Coaches" with a description
- **GIVEN** three coach cards render, **when** each displays, **then** it shows a profile image, a role label ("Head Coach" or "Lead Trainer"), a name, a bio paragraph, and social media icon links (Twitter, Facebook, Instagram)

### Testimonials

#### Scenario: Testimonials

- **GIVEN** the user scrolls to the testimonials section, **when** the section renders, **then** a parallax background image with dark overlay appears
- **GIVEN** the heading, **when** it renders, **then** it reads "What People Say" with a description paragraph
- **GIVEN** five testimonial items render (carousel), **when** each displays, **then** it shows a quote icon, a customer testimonial paragraph, a customer name, and the label "Customer"

### Recent Blog

#### Scenario: Recent Blog

- **GIVEN** the user scrolls to the blog section, **when** the heading renders, **then** it reads "Recent Blog" with a description paragraph
- **GIVEN** three blog cards render, **when** each displays, **then** it shows a background image, a date badge (day/month/year), a title ("Crossfit Harder Workout"), and a short excerpt

### Appointment / Contact Form

#### Scenario: Appointment / Contact Form

- **GIVEN** the user scrolls to the appointment section, **when** the layout renders, **then** a split layout appears: map placeholder on the left (col-lg-5), form on the right (col-lg-7)
- **GIVEN** the form renders, **when** the user sees the fields, **then** they see: First Name, Last Name, Email Address, Phone, Message (textarea), and an "Appointment" submit button
- **GIVEN** the form, **when** the submit button renders, **then** it uses the primary button style (`btn btn-primary`)

### Gallery

#### Scenario: Gallery

- **GIVEN** the user scrolls to the gallery section, **when** the images render, **then** a full-width 4-column row of gallery images appears
- **GIVEN** each gallery item, **when** the user hovers, **then** a search icon overlay appears centered on the image

### Footer

#### Scenario: Footer

- **GIVEN** the footer renders, **when** the user sees it, **then** it has a dark background with an overlay image
- **GIVEN** the footer, **when** the columns render, **then** they show: About Us (text + social links), Recent Blog (two blog entries with images), and Contact information
- **GIVEN** the footer, **when** the bottom row renders, **then** it shows a copyright notice and links to the template source
- **GIVEN** the footer, **when** it renders, **then** it MUST include a link to `https://www.componentdock.com/` branded as "Component Dock"

## Verification checklist

- [ ] Navbar dark bg, responsive toggle, correct links
- [ ] Hero full-viewport parallax with overlay, large headline, video link
- [ ] Pricing cards: 3 image-backed cards with price, CTA button (gradient accent), hover reveal
- [ ] Programs list: 5 items with icons, alternating layout
- [ ] Counter: dark bg parallax, 4 animated stats with colored label pills
- [ ] Coaches: 3 cards with image, role, name, bio, social icons
- [ ] Testimonials: parallax bg, carousel of 5 quotes with customer names
- [ ] Blog: 3 cards with image, date badge, title, excerpt
- [ ] Contact: split layout (map left, form right), 5 fields + submit
- [ ] Gallery: 4-column image row with hover search icon
- [ ] Footer: dark bg, 3 columns (about/blog/contact), copyright, Component Dock link
- [ ] All design tokens match: Work Sans font, #78d5ef primary, #ff0055→#ff6600 accent gradient, #090808 dark
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Tests: 100% coverage
