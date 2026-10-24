# Template: Brightbite (Dental Clinic)
<!-- prep-status: shipped-as=toothzen -->
> **SHIPPED-UNDER** — the ColorLib `dentamax` design this prep describes already
> ships as `apps/toothzen` (<https://toothzen.free.componentdock.com>).
> Do not scaffold `apps/brightbite`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-toothzen/spec.md`.

## Purpose

Recreation of ColorLib's "Dentamax" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

- **Source**: ColorLib "Dentamax" — https://colorlib.com/wp/template/dentamax/
- **Preview**: https://preview.colorlib.com/theme/dentamax/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/dentamax-free-template.jpg
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Medical / Dental Clinic
- **Note**: Toothzen (`template-toothzen/spec.md`) already covers the same ColorLib source under a different name. Brightbite is a separate recreation — both are valid since they live in different app folders with unique names.

## Design tokens

Extracted from the live preview's `css/style.css` and `index.html`.

### Fonts

| Role         | Font family                | Weights                  | Source             |
| ------------ | -------------------------- | ------------------------ | ------------------ |
| Body / UI    | Roboto, Arial, sans-serif  | 300, 400, 500, 700, 900 | Google Fonts       |
| Logo display | Arizonia, cursive          | 400                      | Google Fonts       |

### Colors

| Token                  | Hex / Value                | Usage                                          |
| ---------------------- | -------------------------- | ---------------------------------------------- |
| teal accent            | `#65d8ea`                  | Icon color, logo accent span, link color, social btn bg, staff position label, focus border |
| dark navy              | `#0f4883`                  | Heading text, navbar brand, form text/placeholders, appointment heading, footer headings |
| light bg               | `#effcfd`                  | Services 3 icon bg, appointment wrap base      |
| body text              | `#6c8faf`                  | Body paragraph text                             |
| primary blue (BS)      | `#007bff`                  | Hero CTA button "See Our Services"              |
| secondary gray (BS)    | `#6c757d`                  | Appointment form submit button                  |
| white                  | `#FFFFFF`                  | Section backgrounds, navbar (desktop), cards    |
| light gray (BS)        | `#f8f9fa`                  | `.bg-light` section backgrounds                 |
| dark text (BS)         | `#212529`                  | Default body text                               |
| gradient peach         | `rgba(255,207,148,0.35)`   | Appointment form bg start, appointment wrap start |
| gradient tan           | `rgba(227,209,163,0.35)`   | Appointment form bg middle                      |
| gradient teal          | `#65d8ea`                  | Appointment form bg end                         |
| footer black           | `#000000`                  | Copyright bar background                        |
| footer overlay         | `rgba(0,0,0,0.1)`          | About section image overlay                     |

### Buttons

- **Primary** (hero): `bg: #007bff`, white text, `py-3 px-4`, standard Bootstrap border-radius (0.25rem).
- **White outline** (hero): transparent bg, white border, white text, `py-3 px-4`, `.btn-white.btn-outline-white`.
- **Secondary** (form submit): `bg: #6c757d`, white text, `py-3 px-4`.
- **Custom** (blog "Read more"): text link styled `.btn-custom`.
- All buttons: `border-radius: 0.25rem` (Bootstrap default).

### Section backgrounds

| Section                 | Background                                       |
| ----------------------- | ------------------------------------------------ |
| Top bar                 | Absolute, transparent (over hero)                |
| Navbar (desktop)        | White, `border-radius: 5px`, rounded             |
| Navbar (mobile)         | White, relative position                         |
| Hero                    | Full-width background image + dark overlay        |
| Services strip          | White (cards with icon circles overlapping hero)  |
| Appointment + features  | Gradient: peach → tan → teal (135deg)             |
| About                   | White, image left + text right split              |
| Dentist team            | `#f8f9fa` light gray bg                          |
| Why choose us           | White background                                  |
| Gallery                 | Background image + parallax                       |
| Blog                    | White background                                  |
| Newsletter              | Background image + overlay + subscribe form       |
| Footer                  | White bg with 4 columns                          |
| Copyright bar           | Black (`#000000`)                                 |

## Requirements

### Feature: Brightbite template behaviour

Feature: Brightbite dental clinic website

Background:
- **GIVEN** the user loads the Brightbite page

**--- Top Bar ---**

#### Scenario: Top bar shows contact info and social links

- **THEN** a top bar is visible with phone number and email
- **AND** social media icons (Facebook, Twitter, Instagram, Dribbble) are shown

**--- Navbar ---**

#### Scenario: Navbar displays brand and navigation links

- **THEN** the brand "Brightbite" is visible with a teal accent on "bite"
- **AND** navigation links are: Home, About, Services, Dentist, Blog, Gallery, Contact
- **AND** the navbar becomes sticky/scrolled on scroll

**--- Hero ---**

#### Scenario: Hero section shows carousel with CTAs

- **THEN** a full-width hero carousel is displayed
- **AND** slide 1 shows heading "Achieve Desired Perfect Smile"
- **AND** slide 2 shows heading "Dentist Services that You Can Trust"
- **AND** each slide has "See Our Services" primary button and "Book An Appointment" outline button

**--- Services Strip ---**

#### Scenario: Four service cards are shown with icons

- **THEN** 4 service cards are visible: Emergency Service, Qualified Dentist, General Treatment, Online Appointment
- **AND** each card has an icon, heading, and description paragraph

**--- Appointment + Features ---**

#### Scenario: Appointment section shows features and form

- **THEN** a "Make An Appointment" heading is visible
- **AND** 4 feature items are shown: Easy Booking, Experience, Flexible Schedule, Best Price Guarantee
- **AND** an appointment form is visible with fields: First Name, Last Name, Service (select), Phone, Date, Time, Message
- **AND** an "Appointment" submit button is present
- **AND** the section has a gradient background (peach → tan → teal)

**--- About ---**

#### Scenario: About section shows clinic intro

- **THEN** a "Welcome to Brightbite" subheading is visible
- **AND** a "We Are Brightbite A Dental Clinic" heading is shown
- **AND** an image is displayed on the left with text content on the right
- **AND** a "Get in touch with us" primary button is present

**--- Dentist Team ---**

#### Scenario: Team section shows dentist cards

- **THEN** a "Dentist" subheading and "Our Qualified Dentist" heading are visible
- **AND** 4 dentist cards are displayed in a grid
- **AND** each card has a photo, name, and role

**--- Why Choose Us ---**

#### Scenario: Why Choose Us section lists reasons

- **THEN** a "Why Choose Us" heading is visible
- **AND** feature/benefit items are displayed

**--- Gallery ---**

#### Scenario: Gallery section shows image grid

- **THEN** a "Gallery" heading is visible
- **AND** images are displayed in a grid layout

**--- Blog ---**

#### Scenario: Blog section shows recent posts

- **THEN** an "Our Blog" subheading and "Recent Post" heading are visible
- **AND** 3 blog cards are displayed, each with image, date, author, comment count, title, excerpt, and "Read more" link

**--- Newsletter ---**

#### Scenario: Newsletter subscription section

- **THEN** a newsletter section with a background image is visible
- **AND** a heading invites subscription
- **AND** an email input and "Subscribe" button are present

**--- Footer ---**

#### Scenario: Footer shows columns and copyright

- **THEN** the footer has 4 columns: About (with logo + social links), Explore, Info, and Have a Questions?
- **AND** the Explore column links: About, Contact, Services, Dentist
- **AND** the Info column links: Join us, Blog, Privacy & Policy, Term & Conditions
- **AND** a black copyright bar is shown at the bottom
- **AND** the footer links to Component Dock (https://www.componentdock.com/)

**--- Responsive ---**

#### Scenario: Mobile responsiveness

- **WHEN** the viewport width is below 992px
- **THEN** the navbar collapses into a hamburger menu
- **AND** the top bar is hidden
- **AND** sections stack vertically

## Verification checklist

- [ ] All sections from the ColorLib preview are present in the same order
- [ ] Brand color `#65d8ea` is used consistently for teal accents
- [ ] Dark navy `#0f4883` is used for headings and brand text
- [ ] Roboto font family is loaded from Google Fonts
- [ ] Hero carousel has 2 slides with correct headings and CTAs
- [ ] Gradient background (peach → tan → teal) is on appointment and newsletter sections
- [ ] Navbar is transparent on desktop (over hero), white background on mobile
- [ ] Services strip has 4 cards with icons overlapping the hero section
- [ ] Appointment form has all required fields
- [ ] Footer has 4 columns and links to Component Dock
- [ ] No ColorLib references in any app code (provenance only in spec)
- [ ] Placeholder images use `https://picsum.photos/seed/brightbite-<n>/<w>/<h>`
