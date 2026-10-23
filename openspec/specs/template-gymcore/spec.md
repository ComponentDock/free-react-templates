# Template: Gymcore (Fitness / Gym)

## Purpose

A Fitness / Gym template with hero, services, classes, team, banner and register form collects user sections. Recreation of ColorLib **Gutim** — a fitness/gym HTML template.

- **Source:** https://colorlib.com/wp/template/gutim/
- **Preview:** https://preview.colorlib.com/theme/gutim/
- **New name:** `gymcore`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/gymcore`

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/gutim/ (HTTP 200, 37,268 B, fetched 2026-10-23) and its theme stylesheet `theme/gutim/css/style.css` (37,820 B, sha256 `b3126fa140f3…`).
CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f67831` | 35 declarations — `.primary-btn:after`, `.membership-item .mi-title` |
| Other chromatic values | `#eb3c5a`, `#f15d44` | `#eb3c5a` × 34 (.primary-btn:after); `#f15d44` × 16 (.nav-menu .mainmenu ul li a:after) |
| Surface | `#ffffff` | 49 declarations — `.primary-btn`, `a:hover` |
| Ink / dark surface | `#111111` | 30 declarations — `h1`, `h2` |
| Typeface | `"Poppins", sans-serif` (3 rules — html)<br>`"FontAwesome"` (1 rule — .breadcrumb-text .breadcrumb-option a:after) | `font-family` declarations in the theme sheet |
| Radii | `50%`, `2px`, `10px` | `50%` (.classes-slider.owl-carousel .owl-dots button); `2px` (.bd-hero-text span); `10px` (.bd-text .bd-quote) |

Palette in order of use: `#ffffff` ×49, `#f67831` ×35, `#eb3c5a` ×34, `#111111` ×30, `#f15d44` ×16, `#9a9a9a` ×10.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the full census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar displays navigation and CTA

The navbar SHALL display a logo, navigation links, and a "Sign Up Today" CTA button.

#### Scenario: Desktop navigation

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** I see a "Gymcore" logo link
- **AND** I see navigation links for "Home", "About", "Classes", "Blog", "Gallery", "Contacts"
- **AND** I see a "Sign Up Today" button

#### Scenario: Mobile menu toggle

- **GIVEN** the page is loaded on a mobile viewport
- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** I see all navigation links

### Requirement: Hero section shows fitness headline

The hero section SHALL display a background image, tagline, heading, description, and CTA button.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **THEN** I see "Fitness Elements" tag text
- **AND** I see "BMI Calculator" heading
- **AND** I see a "Read More" button

### Requirement: About section describes the gym

The about section SHALL display an image with play button and descriptive text.

#### Scenario: About content

- **GIVEN** the page is loaded
- **THEN** I see "Story About Us" heading
- **AND** I see a play video button
- **AND** I see a "Read More" button

### Requirement: Services section lists offerings

The services section SHALL display a 2x2 grid of service cards.

#### Scenario: Service items

- **GIVEN** the page is loaded
- **THEN** I see service items for "Strategies", "Yoga", "Workout", "Weight Loss"

### Requirement: Classes section shows available classes

The classes section SHALL display a grid of class cards with background images.

#### Scenario: Class cards

- **GIVEN** the page is loaded
- **THEN** I see "Unlimited Classes" heading
- **AND** I see class cards for "Yoga", "Running", "Personal Training", "Karate", "Dance", "Boxing"

### Requirement: Team section shows trainers

The team section SHALL display trainer cards with photos and names.

#### Scenario: Trainer cards

- **GIVEN** the page is loaded
- **THEN** I see "Expert Trainers" heading
- **AND** I see trainer names

### Requirement: Testimonials section shows member reviews

The testimonials section SHALL display testimonial cards with quotes and star ratings.

#### Scenario: Testimonial content

- **GIVEN** the page is loaded
- **THEN** I see "What Our Members Say" heading
- **AND** I see testimonial cards with names and quotes

### Requirement: Banner section displays contact CTA

The banner section SHALL display a contact phone number and CTA button.

#### Scenario: Banner content

- **GIVEN** the page is loaded
- **THEN** I see "Contact Us" text
- **AND** I see the phone number "09 746 204"

### Requirement: Membership section shows pricing plans

The membership section SHALL display three pricing tier cards.

#### Scenario: Pricing cards

- **GIVEN** the page is loaded
- **THEN** I see "Membership Plans" heading
- **AND** I see pricing cards for "Basic" at $17, "Standard" at $57, "Premium" at $98
- **AND** each card has a "Start Now" button

### Requirement: Register form collects user info

The register section SHALL display a form with input fields and submit button.

#### Scenario: Form fields

- **GIVEN** the page is loaded
- **THEN** I see "Register Now" heading
- **AND** I see input fields for "First Name", "Email Address", "Last Name", "Mobile No*"
- **AND** I see a "Get Started" submit button

### Requirement: Blog section shows latest posts

The blog section SHALL display three blog post cards.

#### Scenario: Blog cards

- **GIVEN** the page is loaded
- **THEN** I see "Latest Blog" heading
- **AND** I see 3 blog cards with dates and titles

### Requirement: Footer has contact info and Component Dock branding

The footer SHALL display contact information, newsletter form, and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is loaded
- **THEN** I see phone, address, and email contact info
- **AND** I see a newsletter subscribe form
- **AND** I see a link to "Component Dock" pointing to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/gymcore/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/gymcore/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar displays navigation and CTA — I see a "Gymcore" logo link
- [x] Hero section shows fitness headline — I see "Fitness Elements" tag text
- [x] About section describes the gym — I see "Story About Us" heading
- [x] Services section lists offerings — I see service items for "Strategies", "Yoga", "Workout", "Weight Loss"
- [x] Classes section shows available classes — I see "Unlimited Classes" heading
- [x] Team section shows trainers — I see "Expert Trainers" heading
- [x] Testimonials section shows member reviews — I see "What Our Members Say" heading
- [x] Banner section displays contact CTA — I see "Contact Us" text
- [x] Membership section shows pricing plans — I see "Membership Plans" heading
- [x] Register form collects user info — I see "Register Now" heading
- [x] Blog section shows latest posts — I see "Latest Blog" heading
