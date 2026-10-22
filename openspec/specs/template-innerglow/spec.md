# Template: InnerGlow (Yoga / Wellness)
<!-- prep-status: shipped-as=aurae -->
> **SHIPPED-UNDER** — the ColorLib `ahana` design this prep describes already
> ships as `apps/aurae` (<https://aurae.free.componentdock.com>).
> Do not scaffold `apps/innerglow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-aurae/spec.md`.

## Purpose

Recreation of ColorLib **Ahana** — a yoga/wellness HTML template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source template:** [Ahana](https://colorlib.com/wp/template/ahana/)
- **Live preview:** https://preview.colorlib.com/theme/ahana/
- **Screenshot reference:** https://colorlib.com/wp/wp-content/uploads/sites/2/ahana-free-template.jpg
- **New name:** `innerglow` (app folder `apps/innerglow`, package `@free-react-templates/innerglow`)

## Design tokens

Extracted from the preview stylesheet (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Font family (body) | `"Open Sans", sans-serif` | Google Fonts import |
| Font family (headings) | `"Playfair Display", serif` | h2, h3, section titles |
| Brand primary | `#f65d5d` | Coral/red — gradient start, header icons, hover states |
| Brand secondary | `#fdb07d` | Peach — gradient end |
| Gradient | `linear-gradient(145deg, #f65d5d 0%, #fdb07d 100%)` | Hero section, review overlay, accent elements |
| Reverse gradient | `linear-gradient(145deg, #fdb07d 0%, #f65d5d 100%)` | Buttons (gradient fill) |
| Text heading color | `#333333` | h1–h6 |
| Text body color | `#666666` | p elements |
| Button shape | `border-radius: 50px` | Pill-shaped |
| Button padding | `14px 30px` | |
| Button font | `16px, 600 weight, uppercase, letter-spacing: 1px` | |
| Section padding | `padding-top: 110px; padding-bottom: 105px` | `.spad` class |
| Section title size | `38px` | Playfair Display, uppercase |
| Container max-width | `1200px` | |
| Header background | `#fff` (top bar), transparent overlay (bottom nav on hero) | |

### Section backgrounds

- Hero: gradient overlay `linear-gradient(145deg, #f65d5d, #fdb07d)`
- About / Classes / Trainer / Events / Pricing / Sign-up: white `#fff`
- Review / Testimonial: background image with gradient overlay (same coral-to-peach)
- Gallery: image slider, no solid background
- Footer: dark (implied by `.text-white` styling and dark footer section)

## Requirements

### Navbar

Feature: Navigation Bar

#### Scenario: Top info bar displays contact details

- **GIVEN** the user visits the page
- **THEN** the top bar shows address "184 Main Collins Street"
- **AND** shows phone "(965) 436 3274"
- **AND** shows hours "Mon - Fri: 6:30am - 07:45pm"

#### Scenario: Navigation links are present

- **GIVEN** the user visits the page
- **THEN** the navbar contains links: Home, About, Classes, Trainers, Events, Blog, Contact

#### Scenario: Logo is visible

- **GIVEN** the user visits the page
- **THEN** the logo "InnerGlow" is displayed in the header

#### Scenario: Mobile hamburger menu toggles navigation

- **GIVEN** the viewport is mobile-width
- **WHEN** the user clicks the hamburger menu icon
- **THEN** the navigation menu becomes visible

### Hero Section

Feature: Hero Section

#### Scenario: Hero displays gradient background

- **GIVEN** the user visits the page
- **THEN** the hero section has a coral-to-peach gradient background

#### Scenario: Hero shows headline text

- **GIVEN** the user visits the page
- **THEN** the hero displays a yoga-related headline

#### Scenario: Hero has call-to-action button

- **GIVEN** the user visits the page
- **THEN** a "Register now" CTA button is visible in the hero

#### Scenario: Hero social links are visible

- **GIVEN** the user visits the page
- **THEN** social media icons (Facebook, Instagram, Twitter, LinkedIn) appear in the hero sidebar

### About Section

Feature: About Section

#### Scenario: About section has section title

- **GIVEN** the user scrolls to the About section
- **THEN** the section title reads "Welcome to InnerGlow"
- **AND** a tagline about yoga practice is displayed

#### Scenario: About section shows feature items

- **GIVEN** the user scrolls to the About section
- **THEN** three feature items are displayed: "Full Rejuvenation", "Extension of Spring", "Against Aging"
- **AND** each feature has an icon and description

#### Scenario: About section has explore CTA

- **GIVEN** the user scrolls to the About section
- **THEN** an "Explore More" button is visible

### Classes Section

Feature: Classes Section

#### Scenario: Classes section displays class cards

- **GIVEN** the user scrolls to the Classes section
- **THEN** a carousel of class cards is displayed

#### Scenario: Each class card shows details

- **GIVEN** a class card is visible
- **THEN** it shows the class name, schedule, time range, description, trainer name, and trainer role
- **AND** a "Book Now" button is present

#### Scenario: Section title reads "Popular Classes"

- **GIVEN** the user scrolls to the Classes section
- **THEN** the section title reads "Popular Classes"

### Trainers Section

Feature: Trainers Section

#### Scenario: Trainers section displays trainer profiles

- **GIVEN** the user scrolls to the Trainers section
- **THEN** a carousel of trainer cards is shown

#### Scenario: Each trainer card shows details

- **GIVEN** a trainer card is visible
- **THEN** it shows the trainer name, role, bio, and social links (Facebook, Instagram, Twitter, LinkedIn)

#### Scenario: Section title reads "Our Trainers"

- **GIVEN** the user scrolls to the Trainers section
- **THEN** the section title reads "Our Trainers"

### Testimonial / Review Section

Feature: Testimonial Section

#### Scenario: Testimonial section has gradient background

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** the section has a coral-to-peach gradient overlay on a background image

#### Scenario: Testimonials are displayed in a carousel

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** a carousel of testimonials is shown

#### Scenario: Each testimonial shows quote, name, and role

- **GIVEN** a testimonial card is visible
- **THEN** it shows a quoted text, person name, and role/title

### Events Section

Feature: Events Section

#### Scenario: Events section shows upcoming events

- **GIVEN** the user scrolls to the Events section
- **THEN** the section title reads "Upcoming Events"

#### Scenario: Events section has video feature

- **GIVEN** the user scrolls to the Events section
- **THEN** a video thumbnail with a play button is visible on the left

#### Scenario: Event items show details

- **GIVEN** an event item is visible
- **THEN** it shows the event name, host, date, and location

### Pricing Section

Feature: Pricing Section

#### Scenario: Pricing section displays four plans

- **GIVEN** the user scrolls to the Pricing section
- **THEN** four pricing cards are displayed

#### Scenario: Pricing plans have names and prices

- **GIVEN** the pricing cards are visible
- **THEN** plan names are: "Beginner" ($59), "Intermediate" ($99), "Advanced" ($159), "Professional" ($199)
- **AND** each shows "Per month"

#### Scenario: Pricing plans list features

- **GIVEN** a pricing card is visible
- **THEN** it lists features: "Take Up To 7 Classes", "Available To Anyone", "Towels Included", "Never Expires"

#### Scenario: Pricing plans have CTA buttons

- **GIVEN** a pricing card is visible
- **THEN** a "Get Started" button is present

### Sign-up / Contact Section

Feature: Sign-up Section

#### Scenario: Sign-up section has map and form

- **GIVEN** the user scrolls to the Sign-up section
- **THEN** a Google Maps embed is shown on the left
- **AND** a contact form is shown on the right

#### Scenario: Contact form has fields

- **GIVEN** the contact form is visible
- **THEN** it contains: First Name, Last Name, Email, Phone Number, Message textarea
- **AND** a "Get Started" submit button

### Gallery Section

Feature: Gallery Section

#### Scenario: Gallery displays image carousel

- **GIVEN** the user scrolls to the Gallery section
- **THEN** an image carousel/slider is displayed

#### Scenario: Gallery images have Instagram hover

- **GIVEN** a gallery image is hovered
- **THEN** an Instagram icon and handle are shown as overlay

### Footer

Feature: Footer

#### Scenario: Footer has four columns

- **GIVEN** the user scrolls to the footer
- **THEN** four columns are displayed: About (logo + contact), Company links, About Us links, Open Times + newsletter

#### Scenario: Footer shows social links

- **GIVEN** the user scrolls to the footer
- **THEN** social media icons (Facebook, Instagram, Twitter, LinkedIn) are displayed

#### Scenario: Footer shows copyright

- **GIVEN** the user scrolls to the footer bottom
- **THEN** a copyright notice is displayed

#### Scenario: Footer links to Component Dock

- **GIVEN** the user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" is present (branded as "Component Dock")

## Verification checklist

- [ ] Spec matches section order from ColorLib preview: Navbar → Hero → About → Classes → Trainers → Testimonial → Events → Pricing → Sign-up → Gallery → Footer
- [ ] Design tokens extracted from live preview CSS match implementation
- [ ] Brand gradient (#f65d5d → #fdb07d) applied to hero, review overlay, and accent elements
- [ ] Playfair Display used for headings; Open Sans for body
- [ ] Pill-shaped buttons (border-radius: 50px) with gradient fill
- [ ] Section padding matches `.spad` (110px / 105px)
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images via `picsum.photos/seed/<template>-<n>/<w>/<h>`
- [ ] Social icons via `lucide-react`
- [ ] Google Fonts loaded via `<link>` in `index.html`
