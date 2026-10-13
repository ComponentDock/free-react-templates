# Template: Cuspide (Dental Clinic)

## Purpose

Recreation of ColorLib's "Dente" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

- **Source**: ColorLib "Dente" — https://colorlib.com/wp/template/dente/
- **Preview**: https://preview.colorlib.com/theme/dente/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/dente-free-template.jpg
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Medical / Dental Clinic

## Design tokens

Extracted from the live preview's `css/style.css` and `index.html`.

### Fonts

| Role         | Font family                                    | Weights    | Source       |
| ------------ | ---------------------------------------------- | ---------- | ------------ |
| Body / UI    | "Nunito Sans", sans-serif                      | 200, 300, 400, 700, 900 | Google Fonts |
| Icons        | Icomoon / Flaticon (dental icons)              | —          | Font files   |

### Colors

| Token                  | Hex / Value                | Usage                                          |
| ---------------------- | -------------------------- | ---------------------------------------------- |
| brand red              | `#f23a2e`                  | btn-primary bg, link hover color, video play button, active feature accent |
| dark charcoal          | `#333333`                  | Footer background                              |
| warm beige             | `#ece8d9`                  | Appointment section bg, services section bg (`.bg-light` override) |
| light gray             | `#f8f9fa`                  | Bootstrap `.bg-light` default                   |
| body text              | `#4d4d4d`                  | Default paragraph text                         |
| heading text           | `#000000`                  | `.site-heading` and `.text-black`              |
| section border         | `#edf0f5`                  | Footer top border, nav dropdown borders        |
| feature overlay        | `rgba(0,0,0,0.5)`         | Service feature strip cards (semi-transparent dark) |
| testimonial active bg  | `#FFFFFF`                  | Active testimony card with box-shadow           |
| footer links           | `#999999`                  | Footer anchor text                             |
| footer heading         | `#FFFFFF`                  | Footer h3/h4 headings                          |
| footer body text       | `#737373`                  | Footer paragraph text                          |
| nav dropdown bg        | `#f4f5f9`                  | Dropdown menu background                       |
| nav dropdown hover     | `#25262a`                  | Dropdown hover text                            |
| dark text (BS)         | `#212529`                  | Bootstrap default text                         |
| promo primary bg       | `#007bff` (Bootstrap)      | Promo countdown bar background (uses `.bg-primary`) |

### Buttons

- **Primary** (promo bar, form submit, newsletter): `bg: #f23a2e` (override Bootstrap primary), white text, `font-weight: 300`, `letter-spacing: 0.2em`, `border-radius: 0.25rem` (Bootstrap default), box-shadow on hover.
- **Nav toggle**: hamburger icon, no explicit styling beyond Bootstrap.

### Section backgrounds

| Section                         | Background                                       |
| ------------------------------- | ------------------------------------------------ |
| Top bar                         | White/light, social icons + contact info          |
| Navbar                          | Transparent on hero (desktop), white with shadow on scroll |
| Hero                            | Full-width background image + parallax effect     |
| Service feature strip           | Semi-transparent dark overlay cards (positioned over hero bottom) |
| Image + feature grid            | White bg, left image + right 2×2 feature grid     |
| Appointment form                | Warm beige `#ece8d9`, white form card with shadow |
| Promo countdown bar             | Bootstrap `bg-primary` (blue), white text         |
| Services section                | `#ece8d9` warm beige (via `.bg-light` override)   |
| Video / Success stories         | Split: text left, background image + play button right |
| Testimonials                    | `#ece8d9` warm beige (`.bg-light`)               |
| Footer                          | Dark charcoal `#333333`                           |
| Copyright bar                   | Same dark charcoal (part of footer)               |

## Requirements

### Feature: Cuspide template behaviour

Feature: Cuspide dental clinic website

Background:
- **GIVEN** the user loads the Cuspide page

**--- Top Bar ---**

#### Scenario: Top bar shows social icons and contact info

- **THEN** a top bar is visible above the navbar
- **AND** social media icons (Twitter, Facebook, LinkedIn, Instagram) are shown on the left
- **AND** email address and phone number are shown on the right

**--- Navbar ---**

#### Scenario: Navbar displays brand and navigation links

- **THEN** the brand "Cuspide" is visible on the left
- **AND** navigation links are: Home, About Us, Patients, News, Services, Contact
- **AND** Home has a dropdown with Menu One, Menu Two, Menu Three, and a Sub Menu
- **AND** Patients has a dropdown with Menu One, Menu Two, Menu Three
- **AND** the navbar becomes sticky with white bg and shadow on scroll

**--- Hero ---**

#### Scenario: Hero section shows background image with heading

- **THEN** a full-width hero section with a background image is displayed
- **AND** a subtitle "We Priority Your" is shown
- **AND** a heading "Your New Smile" is shown with "New Smile" in bold
- **AND** the hero uses a parallax scroll effect

**--- Service Feature Strip ---**

#### Scenario: Three service feature cards are shown over the hero

- **THEN** 3 service feature cards are visible: Periodontology, Tooth Whitening, Preventative Care
- **AND** each card has a dental icon, heading, and short description
- **AND** each card has a semi-transparent dark overlay background

**--- Image + Feature Grid ---**

#### Scenario: Image and feature grid section is displayed

- **THEN** a left column shows an image
- **AND** a right column shows 4 feature items in a 2x2 grid: Tooth Whitening, Stethoscope, First Aid Kit, Tooth Pliers
- **AND** each feature item has an icon and heading
- **AND** active/selected feature items have a box-shadow effect

**--- Appointment Form ---**

#### Scenario: Appointment request form is displayed

- **THEN** a heading "Online Appointment Request Form" is shown
- **AND** a description paragraph is visible
- **AND** a white form card contains fields: First Name, Last Name, Date, Email, Treatment Needed (select), Notes (textarea)
- **AND** a "Send" submit button is present
- **AND** the section has a warm beige background (#ece8d9)

**--- Promo Countdown Bar ---**

#### Scenario: Promo bar shows a discount offer

- **THEN** a blue promotional bar is displayed
- **AND** the text reads "Promo For Tooth Cleaning from $140.00 now $50.00"
- **AND** a countdown timer is shown

**--- Services Section ---**

#### Scenario: Services section shows 6 service cards

- **THEN** an "Our Services" heading is displayed
- **AND** 6 service cards are shown in a 3x2 grid
- **AND** the services are: Tooth Whitening, Stethoscope, Dentist Chair, Tooth Pliers, First Aid Kit, Dentist Tools
- **AND** each card has an icon, heading, and description paragraph

**--- Video / Success Stories ---**

#### Scenario: Success stories section with video

- **THEN** a "Success Stories" heading is displayed
- **AND** a description paragraph is visible on the left
- **AND** a background image with a play button is shown on the right
- **AND** clicking the play button opens a video popup

**--- Testimonials ---**

#### Scenario: Testimonials section shows patient reviews

- **THEN** a "People Says" heading is displayed
- **AND** 3 testimonial cards are shown in a row
- **AND** each card has a circular avatar image, quote text, and a person name
- **AND** one card has an "active" state with white background and shadow

**--- Footer ---**

#### Scenario: Footer shows navigation, news, newsletter, and social links

- **THEN** the footer has a dark charcoal background
- **AND** a "Navigation" column shows links: Home, Services, News, Team, About Us, Privacy Policy, Contact Us, Membership
- **AND** a "Recent News" column shows 3 news items with thumbnail images
- **AND** a "Subscribe Newsletter" column has an email input and "Send" button
- **AND** social media icons (Facebook, Twitter, Instagram, LinkedIn) are shown
- **AND** a "Component Dock" link is present in the footer

**--- Copyright ---**

#### Scenario: Copyright bar is shown

- **THEN** a copyright notice is displayed at the bottom of the footer

## Verification checklist

- [ ] All sections render in the correct order (1:1 with original)
- [ ] Design tokens match: brand red `#f23a2e`, warm beige `#ece8d9`, dark charcoal `#333333`
- [ ] Font is Nunito Sans (200–900 weights)
- [ ] Hero has parallax background image effect
- [ ] Service feature strip overlays the hero bottom with dark transparent cards
- [ ] Appointment form has white card on warm beige background
- [ ] Promo countdown bar uses blue background with white text
- [ ] Services section shows 6 cards in 3x2 grid on warm beige bg
- [ ] Video/Success Stories uses split layout (text left, image+play button right)
- [ ] Testimonials show 3 cards with circular avatars
- [ ] Footer is dark charcoal with 3 columns + copyright
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images use `picsum.photos/seed/cuspide-<n>/<w>/<h>`
- [ ] Tests pass with 100% coverage
- [ ] Typecheck, lint, and build succeed
