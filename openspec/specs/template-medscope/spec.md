# Template: Medscope (Medical Healthcare Website)

## Purpose

Medscope is a single-page medical healthcare website template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Medcare" design, built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** ColorLib "Medcare" — https://colorlib.com/wp/template/medcare/
- **Preview URL:** https://preview.colorlib.com/theme/medcare/
- **New name:** `medscope` (apps/medscope, package `@free-react-templates/medscope`)
- **Category:** Medical / Healthcare

## Design reference (replication findings)

### Visual design (from screenshot + live preview)

**Overall aesthetic:** Clean, professional medical/healthcare theme with a
blue-and-white color palette. Serif headings (Playfair Display) paired with
sans-serif body text (Open Sans). Flat design with subtle shadows on cards.
White/light backgrounds throughout, blue accent color used for buttons, icons,
and section highlights.

**Color palette (from CSS analysis):**
- Primary brand: `#0051d2` (medium blue) — buttons, hover states, icons
- Dark text: `#020a21` (near-black), `#1d1d1d`, `#222222`, `#2a2a2a`
- Body text: `#797979` (medium gray)
- Light gray backgrounds: `#f7f7f7`, `#ecf0f8`
- White: `#fff`, `#ffffff`
- Accent teal: `#2ebccd`, `#4cd3e3` (used in some elements)
- Button text hover: `#0051d2`

**Typography:**
- Headings: `"Playfair Display", serif` — bold weight
- Body: `"Open Sans", sans-serif` — normal weight, 14px, line-height 27px
- Google Fonts import: `Open+Sans:300,400,600,700,800` + `Playfair+Display:400,700`

**Button styles:**
- `.main_btn`: background `#0051d2`, white text, `padding: 0 18px`,
  `line-height: 48px`, `border-radius: 0` (sharp corners), Playfair Display
  font. Hover: white background, blue text.
- `.main_btn_light`: outlined variant (white bg, blue border/text)
- No rounded corners on any buttons

**Card styles:**
- Feature cards: white background, subtle shadow, centered icon above title,
  text left-aligned on larger screens
- Service cards: white bg, icon + title + description + "Learn More" link
- Team cards: photo at top, name + specialty below, social icons in footer
- Blog cards: image thumb, date badge overlay, title + short description

### Section order (from live preview DOM)

1. **Header/Navbar** — top utility bar (email, location, social icons) + main
   nav (logo "MEDCARE HEALTH SOLUTION" + nav links: Home, About, Department,
   Doctors, Blog, Contact)
2. **Banner/Hero** — full-width background image (doctor with clipboard),
   left-aligned heading "Making Health Care Better Together", paragraph,
   two CTAs: "Make an Appointment" (blue solid) + "View Department" (outlined)
3. **Features** — 3-column grid, blue band background, white cards with icons:
   Primary Care, Emergency Cases, Online Appointment
4. **Services** — heading "Awesome Health Service", 3-column grid: Neurology
   Service, Dental Clinic, Plastic Surgery (icon + title + desc + Learn More)
5. **About** — right-aligned text block with heading, paragraph, "learn more"
   link; left side has background image
6. **Team** — heading "Medcare Experience Doctors", 3-column grid of doctor
   cards: Dr Adam Brain (Cardiologist), Dr Blian Judge (2x), photo + name +
   specialty + social icons
7. **Appointment/FAQ** — split layout: left "Have Some Questions?" accordion
   with 5 FAQ items; right "Make an Appointment" form (Name, Phone Number,
   Pick a Date, Select Service dropdown, Write Message textarea, blue submit)
8. **Testimonial** — carousel/slider with doctor photo + quote + name
9. **Hotline** — centered "Emergency hotline" section with phone number,
   background image, white text
10. **Blog** — heading "Get Every Single Update Here", 3-column grid of blog
    post cards with image, date, title, short excerpt
11. **Brands** — logo carousel on light gray `#f7f7f7` background
12. **Footer** — 5-column layout: Top Products, Quick Links, Features,
    Resources, Newsletter (email input + arrow button); bottom bar with
    copyright and social icons

### Design tokens summary

| Token              | Value                          |
|--------------------|--------------------------------|
| Brand primary      | `#0051d2`                     |
| Heading font       | Playfair Display, serif        |
| Body font          | Open Sans, sans-serif          |
| Button radius      | 0 (sharp/square)               |
| Button bg          | `#0051d2`                     |
| Button hover bg    | `#fff`                         |
| Button hover color | `#0051d2`                     |
| Body text color    | `#797979`                     |
| Dark text          | `#020a21`                     |
| Gray bg sections   | `#f7f7f7`                     |
| Light blue bg      | `#ecf0f8`                     |
| Card shadow        | `0px 10px 20px 0px rgba(221,221,221,0.3)` |
| Border color       | `#e8edf1`                     |

## Gherkin requirements

### Feature: Medscope medical healthcare website

  Scenario: Header displays navigation and branding
    Given the user loads the Medscope homepage
    Then the header shows the logo "MEDSCOPE" with tagline
    And the navigation contains links: Home, About, Department, Doctors, Blog, Contact
    And the top utility bar shows email and location info

  Scenario: Hero section displays with call-to-action buttons
    Given the user loads the Medscope homepage
    Then the hero section shows heading "Making Health Care Better Together"
    And there is a paragraph of descriptive text below the heading
    And there is a "Make an Appointment" primary button
    And there is a "View Department" outlined button
    And the hero has a background image of a medical professional

  Scenario: Feature cards display three key services
    Given the user scrolls to the features section
    Then three feature cards are displayed in a row
    And each card has an icon, title, and description
    And the cards show "Primary Care", "Emergency Cases", "Online Appointment"
    And the feature section has a blue background band

  Scenario: Services section lists medical services
    Given the user scrolls to the services section
    Then the heading reads "Awesome Health Service"
    And three service cards are shown: Neurology, Dental Clinic, Plastic Surgery
    And each card has an icon, title, description, and "Learn More" link

  Scenario: About section displays informational content
    Given the user scrolls to the about section
    Then a heading and descriptive paragraph are visible
    And a "learn more" link is present

  Scenario: Team section displays doctor profiles
    Given the user scrolls to the team section
    Then the heading reads "[Brand] Experience Doctors"
    And three doctor cards are shown with photos, names, and specialties
    And each card has social media icon links

  Scenario: Appointment section has FAQ and booking form
    Given the user scrolls to the appointment section
    Then a "Have Some Questions?" FAQ accordion is visible on the left
    And a "Make an Appointment" form is visible on the right
    And the form has fields: Name, Phone Number, Date, Service, Message
    And the form has a blue submit button

  Scenario: Testimonial carousel shows doctor quotes
    Given the user scrolls to the testimonial section
    Then a carousel displays testimonial cards
    And each card has a doctor photo, quote, and name

  Scenario: Hotline section shows emergency contact
    Given the user scrolls to the hotline section
    Then "Emergency hotline" heading is displayed
    And a phone number is shown
    And descriptive text about 24/7 support is present

  Scenario: Blog section shows latest posts
    Given the user scrolls to the blog section
    Then the heading reads "Get Every Single Update Here"
    And three blog post cards are shown with images, dates, and titles

  Scenario: Brands section shows partner logos
    Given the user scrolls to the brands section
    Then a carousel of partner logos is displayed on a light gray background

  Scenario: Footer contains links and newsletter
    Given the user scrolls to the footer
    Then column links are shown: Top Products, Quick Links, Features, Resources
    And a newsletter signup with email input is present
    And the footer links to https://www.componentdock.com/

  Scenario: Footer links to Component Dock
    Given the user reaches the page footer
    Then a link to "https://www.componentdock.com/" is visible
    And it is labeled "Component Dock"

  Scenario: Page is responsive
    Given the user loads the Medscope homepage on a mobile viewport
    Then the navigation collapses into a hamburger menu
    And content stacks vertically in single-column layout
    And buttons and cards resize appropriately

## Verification checklist

- [ ] All sections match the original Medcare section order and structure
- [ ] Brand color #0051d2 is used for primary buttons and accents
- [ ] Playfair Display serif font is used for all headings
- [ ] Open Sans sans-serif font is used for body text
- [ ] Buttons have sharp corners (border-radius: 0)
- [ ] Feature section has blue background band with 3 white cards
- [ ] Service cards include icons, titles, descriptions, and Learn More links
- [ ] Team section shows doctor cards with photos and specialties
- [ ] Appointment section has FAQ accordion + booking form side by side
- [ ] Testimonial carousel works with doctor photos and quotes
- [ ] Hotline section displays emergency number with background image
- [ ] Blog section shows 3 post cards in a grid
- [ ] Brands section shows logo carousel on gray background
- [ ] Footer has 4 link columns + newsletter signup
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in any app code
- [ ] Responsive layout works on mobile viewports
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Lucide-react icons used instead of themify-icons/flaticon
