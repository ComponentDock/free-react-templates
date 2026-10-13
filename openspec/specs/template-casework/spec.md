# Template: Casework (Legal Practice)

## Purpose

Recreation of ColorLib "Marco 2" — a free Bootstrap 4 lawyer/attorney website template.

- **Source:** ColorLib "Marco 2" — https://colorlib.com/wp/template/marco-2/
- **Preview:** https://preview.colorlib.com/theme/marco-2/ (404 as of 2026-09-13; reference falls back to TEMPLATES.md screenshot and GitHub source)
- **GitHub source:** https://github.com/technext/marco-2 (technext/marco-2, MIT)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Purpose:** Single-page personal brand site for a lawyer/attorney. Professional, clean, grayscale-accented aesthetic with warm-gray primary tones and pill-shaped buttons.

## Design Tokens

| Token                      | Value                                                             | Notes                                                          |
| -------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| Font family (heading/body) | `Poppins`                                                         | Google Fonts, 300/400/500/600/700 weights                      |
| Brand primary              | `#b8b0b0`                                                         | Warm gray — navbar active, buttons, service icons, accent bars |
| Background light           | `#fafafa`                                                         | `bg-light` override                                            |
| Background dark            | `#000000`                                                         | Navbar (transparent → dark on scroll), footer                  |
| Text body                  | `#666666`                                                         | Body copy                                                      |
| Text heading               | `rgba(0,0,0,0.8)`                                                 | h1–h5                                                          |
| Link / Bootstrap accent    | `#78d5ef`                                                         | Bootstrap `--primary`, used in links                           |
| Button border-radius       | `30px`                                                            | Pill shape on all `.btn`                                       |
| Service icon circle        | `100px` × `100px`, `#b8b0b0` bg, white icon, `border-radius: 50%` | Practice area icons                                            |
| Subheading text            | `rgba(255,255,255,0.5)` on dark, `#b8b0b0` on light               | "Hello," / "Services" etc.                                     |
| Navbar                     | Transparent on hero, white background with shadow on scroll       | `.ftco-navbar-light`                                           |
| Hero left panel            | `#b8b0b0` solid background, 40% width                             | `.hero-wrap .forth`                                            |
| Hero right panel           | Background image, 60% width                                       | `.hero-wrap .third`                                            |
| Footer                     | `ftco-bg-dark` (near-black)                                       | 4-column layout                                                |

## Requirements

### Feature: Casework — Legal Practice Website

#### Scenario: Navbar displays correctly

- **GIVEN** the user loads the page
- **WHEN** the page renders
- **THEN** a navigation bar is visible with brand "Casework" and links: Home, About, Practice Areas, Legal Team, Blog, Contact
- **AND** the navbar is transparent with white text over the hero
- **AND** on scroll, the navbar becomes white with dark text and a subtle shadow

#### Scenario: Hero section renders split layout

- **GIVEN** the user loads the page
- **WHEN** the hero section is visible
- **THEN** a split layout is displayed: left 40% with gray (#b8b0b0) background and centered text, right 60% with a background image
- **AND** the left side shows a subheading "Hello,", heading "I'm [Name]", subheading "A Corporate Lawyer", and a "Contact Me" CTA button
- **AND** the right side shows a circular play button (video popup) on the image

#### Scenario: Free Consultation form section

- **GIVEN** the user scrolls to the consultation section
- **WHEN** the section is visible
- **THEN** a "My Free Consultation" heading is displayed on the left
- **AND** a horizontal form with fields: Name, Email, Categories (dropdown), Message, and "Send Message" button is shown
- **AND** the section has a light gray (#fafafa) background

#### Scenario: Practice Areas grid

- **GIVEN** the user scrolls to the practice areas section
- **WHEN** the section is visible
- **THEN** a centered heading "My Legal Practice Areas" with subheading "Services" is shown
- **AND** 4 service cards are displayed in a row: Family Law, Business Law, Drug Control Law, Criminal Law
- **AND** each card has a circular gray icon (100px) with a white icon symbol
- **AND** each card has a title and description paragraph

#### Scenario: Statistics counter section

- **GIVEN** the user scrolls to the statistics section
- **WHEN** the section is visible
- **THEN** a parallax background image is displayed with dark overlay
- **AND** a heading "Interesting Facts" with subheading "Some" is shown on the left
- **AND** 4 animated counters are displayed: Trusted Clients (3500), Solved Cases (2000), Awards Won (800), Winning Cases (2450)
- **AND** counters animate upward from 0 on scroll

#### Scenario: About / Assurances section

- **GIVEN** the user scrolls to the about section
- **WHEN** the section is visible
- **THEN** a split layout is displayed: background image on the right, text on the left
- **AND** a heading "I Assure you that you will win" with subheading "Providing" is shown
- **AND** 3 assurance features are listed: Fight for Justice, Best Case Strategy, Experienced Attorneys
- **AND** each feature has an icon and description

#### Scenario: Testimonials carousel

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section is visible
- **THEN** a centered heading "My satisfied customer says" with subheading "Testimony" is shown
- **AND** a carousel of testimonial cards is displayed
- **AND** each card shows a circular avatar, quote icon, testimonial text, customer name, and position

#### Scenario: About Me section with video

- **GIVEN** the user scrolls to the about-me section
- **WHEN** the section is visible
- **THEN** a split layout is displayed: video/image with play button on the left, text on the right
- **AND** a heading "Marco Sebastián" (personalized to "Casework") with subheading "Hello I'm" is shown
- **AND** a bio paragraph and social media links (Twitter, Facebook, Google+, Instagram) are displayed
- **AND** the section has a light gray (#fafafa) background

#### Scenario: Case Study / Blog section

- **GIVEN** the user scrolls to the case study section
- **WHEN** the section is visible
- **THEN** a centered heading "Case Study" with subheading "Our latest update" is shown
- **AND** 3 blog cards are displayed in a row
- **AND** each card has a background image, date, author, comment count, and title

#### Scenario: Appointment form section

- **GIVEN** the user scrolls to the appointment section
- **WHEN** the section is visible
- **THEN** a split layout is displayed: form on the left, text on the right
- **AND** a heading "Make An Appointment" with subheading "Appointment" is shown
- **AND** the form has fields: Name, Email, Date (date picker), Categories (dropdown), Message, and "Make an Appointment" button
- **AND** the section has a light gray (#fafafa) background

#### Scenario: Footer

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is visible
- **THEN** a dark background (#000) footer is displayed with 4 columns
- **AND** column 1: "About Me" text with social media icons
- **AND** column 2: "Useful Links" list (Family Law, Drug Law, Insurance Law, Criminal Law, Business Law)
- **AND** column 3: "Quick Links" list (About Us, Practice Areas, Appointment, Terms & Conditions, FAQ)
- **AND** column 4: "Have a Questions?" with address, phone, and email
- **AND** a copyright line at the bottom linking to Component Dock

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device
- **WHEN** the viewport is below 768px
- **THEN** the navbar collapses into a hamburger menu
- **AND** the hero section stacks vertically
- **AND** service cards stack vertically
- **AND** split layout sections stack vertically
- **AND** the footer columns stack vertically

## Verification Checklist

- [ ] Navbar renders with transparent background over hero, transitions to white on scroll
- [ ] Hero split layout: 40% gray left, 60% image right
- [ ] Free Consultation form renders with all fields and dropdown
- [ ] Practice Areas: 4 cards in a row with circular gray icons
- [ ] Statistics section: parallax background, 4 animated counters
- [ ] About/Assurances: split layout with 3 feature items
- [ ] Testimonials: carousel with avatar, quote, name, position
- [ ] About Me: split with video play button, bio, social links
- [ ] Case Study: 3 blog cards with images and metadata
- [ ] Appointment form: split layout with date picker and category dropdown
- [ ] Footer: 4-column dark layout with links and contact info
- [ ] Footer links to Component Dock
- [ ] Responsive: hamburger menu, stacked layouts on mobile
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Images use picsum.photos placeholders
- [ ] Google Fonts (Poppins) loaded via index.html link
- [ ] lucide-react icons replace flaticon/ionicons
- [ ] Brand color #b8b0b0 used as Tailwind theme token
- [ ] Pill-shaped buttons (rounded-full / radius-30px)
- [ ] Tests pass with 100% coverage
