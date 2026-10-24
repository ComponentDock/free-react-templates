# Template: HealthPulse (Health & Wellness)
<!-- prep-status: shipped-as=vitaflow -->
> **SHIPPED-UNDER** — the ColorLib `healthcoach` design this prep describes already
> ships as `apps/vitaflow` (<https://vitaflow.free.componentdock.com>).
> Do not scaffold `apps/healthpulse`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-vitaflow/spec.md`.

## Purpose
HealthPulse is a single-page health & wellness coaching landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Health Coach" free template (source:
https://colorlib.com/wp/template/healthcoach/, preview:
https://preview.colorlib.com/theme/healthcoach/), built under a DIFFERENT name
(**HealthPulse**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 health coaching template using Poppins Google
Font and Font Awesome 4.7.0 icons. It has a clean, professional aesthetic with
a blue (`#1089ff`) primary accent and green (`#a3cb4c`) secondary accent on a
white/light background. The page features a top info bar with phone/email and
social icons, a sticky navbar with brand logo, a full-width hero image slider
with overlay text, a services cards section, an about/founder section on a
light background, a three-column consultation/appointment section with blue
backgrounds, a testimonials carousel, a "how it works" icon grid, a success
stories carousel, a full-width CTA banner, a pricing section with four tiers,
a blog section, a newsletter subscribe form, and a dark footer with columns.

## Design Tokens

| Token            | Value                                   | Source                                  |
| ---------------- | --------------------------------------- | --------------------------------------- |
| Brand primary    | `#1089ff` (bright blue)                | Buttons, active states, links, hero h2  |
| Brand secondary  | `#a3cb4c` (lime green)                 | Service icons, logo accent, positions   |
| Consultation mid | `#006fdc` (darker blue)                | Middle consultation column              |
| Text primary     | `#000000`                              | Body text, headings                     |
| Text light       | `#fff`                                  | On dark/blue backgrounds                |
| Text muted       | `rgba(255,255,255,0.4)` / `#999`      | Footer links, secondary text            |
| Background light | `#f8f9fd`                               | `.bg-light` sections                    |
| Background dark  | `#131719`                               | Footer                                  |
| Heading font     | `"Poppins", Arial, sans-serif`          | All headings, hero text, nav            |
| Body font        | `"Poppins", Arial, sans-serif`          | Body text, paragraphs                   |
| Icon set         | Font Awesome 4.7.0 + Flaticon           | Nav toggler, service icons, social      |
| Button radius    | `4px`                                   | `.btn` custom style                     |
| Button bg        | `#1089ff` (primary), white (secondary) | CTA buttons                             |
| Card radius      | `5px` (services), `10px` (testimonials)| `.services-wrap`, `.testimony-wrap`      |
| Hero height      | `700px`                                 | `.home-slider`, `.slider-item`          |
| Section padding  | `7em 0`                                 | `.ftco-section`                         |

## Visual Description (from TEMPLATES.md screenshot + live preview)

Clean, professional health coaching aesthetic. White/light backgrounds dominate
with bright blue (`#1089ff`) accent on buttons, active states, and consultation
sections. Green (`#a3cb4c`) accent appears on service icons, the logo
"coach" text, and staff position labels. The hero is a full-width image slider
(3 slides) with dark overlay and white text — each slide has a large heading
with a blue subheading in uppercase Poppins. Below the hero, three service
cards (Exercise Program, Nutrition Plans, Diet Program) overlap the hero by
-200px on desktop. An about/founder section on light gray has a large image
left and text right. A three-column consultation band uses blue backgrounds
with a booking form in the center. Testimonials are presented as cards in a
carousel with circular user images and quote icons. A "How it works" section
shows 4 icon steps. Success stories use a side-by-side image+text card layout
in a carousel. A full-width CTA banner with background image sits above a
4-tier pricing section. Blog cards show 3 columns with image, date, and title.
A newsletter subscribe form appears above a dark footer with 4 link columns.

## Requirements

### Top Info Bar

#### Scenario: Top info bar with contact and social links

- **GIVEN** the user loads the HealthPulse page
- **THEN** a thin info bar is visible at the very top
- **AND** it shows a phone number and email on the left
- **AND** social media icon links (Facebook, Twitter, Instagram, Dribbble) are on the right
- **AND** the bar has a light background

### Header / Navigation

#### Scenario: Sticky header with logo and navigation links

- **GIVEN** the user loads the HealthPulse page
- **THEN** a header is visible below the info bar with the logo "HealthPulse" on the left
- **AND** navigation links include Home, About, Coach, Pricing, Services, Stories, Blog, Contact
- **AND** the header becomes sticky on scroll
- **AND** a hamburger menu icon appears on mobile viewports
- **AND** the active nav link has blue (#1089ff) text color

### Hero Section

#### Scenario: Full-width hero image slider with CTA buttons

- **GIVEN** the user loads the HealthPulse page
- **THEN** a full-width hero section is displayed at 700px height
- **AND** it contains a carousel/slider with 3 slides
- **AND** each slide has a background image with dark overlay
- **AND** each slide displays a blue (#1089ff) uppercase subheading and a large white heading
- **AND** each slide has two CTA buttons: "Learn more" (blue primary) and "Contact us" (white)
- **AND** carousel navigation dots are visible at the bottom

### Services Section

#### Scenario: Three service cards overlapping the hero

- **GIVEN** the user scrolls below the hero
- **THEN** 3 service cards are displayed in a row
- **AND** each card has a top image, a title, a description, and a "Read more" outline button
- **AND** the cards have white background with 5px border-radius and subtle shadow
- **AND** the cards overlap the hero section by approximately 200px on desktop
- **AND** the service titles are "Exercise Program", "Nutrition Plans", "Diet Program"

### About / Founder Section

#### Scenario: About section with founder info on light background

- **GIVEN** the user scrolls to the About section
- **THEN** a two-column layout is displayed on a light (#f8f9fd) background
- **AND** the left column shows a large image
- **AND** the right column shows a subheading "Welcome to Healthcare", a heading, descriptive text, and a founder profile
- **AND** the founder profile shows a circular image, name "Cythia Hunter", and title "Personal Dietitian"

### Consultation Band

#### Scenario: Three-column consultation/appointment section

- **GIVEN** the user scrolls to the Consultation section
- **THEN** a three-column full-width band is displayed
- **AND** the left column has blue (#1089ff) background with title "Healthcare Services" and a "See Services" link
- **AND** the center column has darker blue (#006fdc) background with a "Free Consultation" form
- **AND** the form includes fields: First Name, Last Name, Services dropdown, Date, Time, and an "Appointment" submit button
- **AND** the right column has blue (#1089ff) background with title "Find A Health Expert" and a "Meet our health coach" link

### Testimonials Section

#### Scenario: Testimonial carousel with client feedback

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** a heading "Happy Clients & Feedbacks" with subheading "Testimonies" is displayed
- **AND** a carousel of testimonial cards is shown
- **AND** each card has a circular user image, a blue quote icon, feedback text, name, and position
- **AND** the section has a light (#f8f9fd) background

### How It Works Section

#### Scenario: Four-step process section

- **GIVEN** the user scrolls to the How It Works section
- **THEN** a heading "How it works?" with subheading "Other Services" is displayed
- **AND** 4 step items are shown in a row
- **AND** each step has a green (#a3cb4c) circular icon, a title, and a description
- **AND** the step titles are "Follow the program", "Work for result", "Eat healthy food", "Enjoy your life"

### Success Stories Section

#### Scenario: Success stories carousel

- **GIVEN** the user scrolls to the Success Stories section
- **THEN** a heading "Successfull Stories" with subheading "Stories" is displayed
- **AND** a carousel of story cards is shown on a light background
- **AND** each card has a large image on the left and text content on the right
- **AND** each card shows a name and position label

### CTA Banner

#### Scenario: Full-width CTA banner with background image

- **GIVEN** the user scrolls to the CTA banner section
- **THEN** a full-width section with a background image and dark overlay is displayed
- **AND** it shows the heading "We Provide Free Health Care Consultation"
- **AND** a white "Free Consultation" button is on the right side

### Pricing Section

#### Scenario: Four-tier pricing cards

- **GIVEN** the user scrolls to the Pricing section
- **THEN** a heading "Choose Your Perfect Plans" with subheading "Price & Plans" is displayed
- **AND** 4 pricing cards are shown in a row: Starter ($49), Standard ($79), Premium ($109), Platinum ($159)
- **AND** each card has a plan name, description, price, feature checklist, and a blue "Get Started" button
- **AND** the section has a light (#f8f9fd) background

### Blog Section

#### Scenario: Blog posts grid

- **GIVEN** the user scrolls to the Blog section
- **THEN** a heading "Latest news from our blog" with subheading "News & Blog" is displayed
- **AND** 3 blog entry cards are shown in a row
- **AND** each card has a background image, date, author, comment count, and article title
- **AND** the blog title links turn blue (#1089ff) on hover

### Newsletter / Footer

#### Scenario: Dark footer with newsletter subscribe and link columns

- **GIVEN** the user scrolls to the footer
- **THEN** a newsletter subscribe form with email input and "Subscribe" button is displayed above the footer
- **AND** the footer has a dark (#131719) background
- **AND** the footer contains a logo, description text, and 4 link columns: Services, About, Resources, Social
- **AND** the logo text "Healthcare" has the "care" part in green (#a3cb4c)
- **AND** a copyright line and Terms/Privacy/Compliances links are at the bottom
- **AND** the footer links are in muted white text that brightens on hover

## Verification checklist

- [ ] Top info bar with phone, email, social icons
- [ ] Sticky navbar with logo and 8 nav links
- [ ] Hero slider with 3 slides, overlay, blue subheadings, two CTA buttons
- [ ] 3 service cards overlapping the hero
- [ ] About/founder section on light background
- [ ] Three-column consultation band (blue backgrounds, appointment form)
- [ ] Testimonials carousel with user cards
- [ ] How it works — 4 icon steps with green circles
- [ ] Success stories carousel with side-by-side cards
- [ ] Full-width CTA banner with background image
- [ ] 4-tier pricing section
- [ ] Blog grid (3 cards)
- [ ] Newsletter subscribe form
- [ ] Dark footer with 4 columns and green accent
- [ ] Responsive: hamburger menu, stacked columns on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains healthpulse.free.componentdock.com
- [ ] All tests pass with 100% coverage
