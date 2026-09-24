# Template: Healwave (Healthcare Landing)

## Purpose

Healwave is a single-page healthcare template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Medi"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript.

The original is a blue-accented medical clinic page: a hero slider
("Bringing health to life for the whole family"), a welcome section
("Welcome To Modern Clinic"), a tabbed departments section (Dentistry,
Cardiology, ENT Specialists, etc.), an expert doctors row, a book-appointment
CTA, a quality-features strip, and a footer with departments list and
availability hours. Healwave recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Medi" — free medical website template
  (source: https://colorlib.com/wp/template/medi/).
- **Live preview DOM analyzed:** the official preview portal
  (`https://preview.colorlib.com/theme/medi/`) returns HTTP 200 (37.7KB
  HTML) + stylesheet `css/style.css` (150.9KB). The rendered DOM is the
  reference below; the TEMPLATES.md screenshot (`medi-plus-free-medical-
  website-template.jpg`) confirms the visual design (light background,
  blue gradient accents, medical clinic aesthetic).
- **Section order (1:1):**
  1. Nav (`header-area`): logo + menu (Home, About, Blog, Pages, Contact) +
     "Book Appointment" button (blue outlined).
  2. Hero slider (`slider_area`): full-width carousel with overlay text —
     "Bringing health to life for the whole family." + "Discover More" and
     "About us" buttons. Multiple slides with blue-gradient background.
  3. Welcome (`welcome_clicnic_area`): two-column — left image (clinic/
     patient), right text ("Welcome To Modern Clinic" + description +
     "Learn more" button).
  4. Departments (`depertment_area`): tabbed section — "Departments"
     heading + tab buttons (Dentistry, Cardiology, ENT Specialists,
     Astrology, Neuroanatomy, Blood Screening) + tab content with image
     + description + "Make An Appointment" button.
  5. Doctors (`expert_doctors_area`): "Our Doctors" heading + doctor
     cards (name, specialty, social links).
  6. Book appointment (`book_apointment_area`): full-width CTA —
     "Book an Appointment" heading + contact phone (+1-465 4545).
  7. Quality features (`quality_area`): four feature cards — Quality
     Health, Health Consultation, Find Health, Search Doctor — each with
     icon, title, description.
  8. Footer (`footer`): three columns — logo + address + social links |
     "Our Departments" link list | "We're Available" hours table. Dark
     navy background (#152538).
- **Design tokens extracted from `css/style.css`:**
  - Brand gradient: **#24c0f1 → #4c9afe** (blue gradient — hero overlays,
    primary buttons).
  - Solid blue: **#009DFF** (alternate button fill, links).
  - Heading color: **#191d34** (dark navy — all h1–h4).
  - Footer background: **#152538** (dark navy).
  - Newsletter/soft purple: **#f0e9ff** (subtle tinted section).
  - Light section bg: **#f9f9ff** (off-white with blue cast).
  - Body text: **#999999** (medium gray).
  - Accent orange: **#ff5e13** (used sparingly for highlights).
  - Font: **"Work Sans"** (sans-serif — primary) + **"Roboto"** (sans-serif
    — secondary/elements) via Google Fonts.
  - Buttons: rounded (border-radius 3–5px for outlined, 50% for circular
    icons); blue gradient or solid blue fill; white text on blue, blue
    text on white outlined.
  - Section backgrounds: solid white, #f9f9ff off-white, #152538 dark navy.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = full-width gradient overlay +
  headline + dual CTA buttons; welcome = two-column with seeded image +
  text + button; departments = tabbed UI with content panel; doctors =
  card grid; book appointment = centered CTA band; quality features =
  icon card grid; footer = three-column layout with departments list and
  hours; all images picsum-seeded.

## Gherkin requirements

### Feature: Healwave — Healthcare Landing Page

  Scenario: Hero section displays with headline and CTAs
    Given the user loads the Healwave page
    Then a hero section is visible with heading "Bringing health to life for the whole family"
    And two call-to-action buttons are present ("Discover More" and "About us")

  Scenario: Welcome section displays two-column layout
    Given the user scrolls to the welcome section
    Then a heading "Welcome To Modern Clinic" is visible
    And an image appears on the left side
    And descriptive text appears on the right side
    And a "Learn more" button is present

  Scenario: Departments section renders tabbed navigation
    Given the user scrolls to the departments section
    Then a heading "Departments" is visible
    And tab buttons are shown: Dentistry, Cardiology, ENT Specialists, Astrology, Neuroanatomy, Blood Screening
    When the user clicks a tab
    Then the corresponding department content panel is displayed
    And each panel contains a description and "Make An Appointment" button

  Scenario: Doctors section displays doctor cards
    Given the user scrolls to the doctors section
    Then a heading "Our Doctors" is visible
    And doctor cards are displayed with name and specialty
    And social media icon links appear on each card

  Scenario: Book appointment CTA section is visible
    Given the user scrolls to the book appointment section
    Then a heading "Book an Appointment" is visible
    And a contact phone number is displayed

  Scenario: Quality features section shows feature cards
    Given the user scrolls to the quality features section
    Then four feature cards are displayed: Quality Health, Health Consultation, Find Health, Search Doctor
    And each card has an icon, title, and description

  Scenario: Footer displays three-column layout
    Given the user scrolls to the footer
    Then the footer has a dark navy background
    And column 1 shows logo, address text, and social media links
    And column 2 shows "Our Departments" with a list of department links
    And column 3 shows "We're Available" with operating hours

  Scenario: Navigation bar is present and functional
    Given the user views the top of the page
    Then a navigation bar is visible with the site logo
    And menu links are present: Home, About, Blog, Pages, Contact
    And a "Book Appointment" button is in the navigation bar

  Scenario: Dark mode toggle works
    Given the user clicks the dark mode toggle
    Then the page theme switches to dark mode
    And all sections remain readable with appropriate contrast

  Scenario: Responsive layout adapts to mobile
    Given the user views the page on a mobile viewport
    Then the navigation collapses to a hamburger menu
    And sections stack vertically
    And the departments tabs are still navigable
