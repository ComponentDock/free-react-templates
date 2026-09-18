# Template: Dentalink

## Purpose

Dentalink is a dental clinic landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Dentist"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Dentist" — dental clinic template
  (source: https://colorlib.com/wp/template/dentist/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dentist/
  (HTTP 200; sections, headings, copy, forms extracted).
- **Section order (1:1):** Header (fixed, white bg, logo + phone/email +
  nav links + social icons) → Hero/Banner (dark overlay on bg image, heading
  "Authentic Dental Service", CTA "Get Started") → Opening Hours (white card
  overlapping banner, hours table, "We are open Now" green dot) → Services
  (4 service cards with images) → About (dark bg #04091e, split layout: image
  left, text right with "Expert Services" + "Great Support" sub-features) →
  Testimonials (carousel, 3 testimonials with avatar + quote) → Team (4 team
  member cards with hover overlay) → Features (6 icon+text feature cards in
  2-col grid) → Appointment (dark bg, split layout: image left, booking form
  right with patient name, phone, email, DOB, date, message, confirm button)
  → Blog (4 blog cards with image + date + title + excerpt + likes/comments)
  → Footer (dark bg #04091e, 3 columns: links + contact + newsletter, bottom
  bar with copyright + social icons).

- **Design tokens extracted from the demo stylesheet (css/main.css):**
  - **Primary Brand Color:** Green `#67bc00` (buttons, accents, hover states,
    icons, gradient `#ade600 → #62b900` on navbar/CTA)
  - **Neutral Dark:** Navy `#04091e` (about, appointment, footer, banner overlay)
  - **Neutral Light:** Off-white `#f9f9ff` (service bg, open-hours card, team bg)
  - **Heading Color:** Dark `#222222`
  - **Body Text:** Gray `#777777`
  - **Font Family:** "Poppins", sans-serif
  - **Button Shapes:** Rounded 25px border-radius primary buttons with gradient
  - **Banner CTA:** Sharp corners (radius 0), green bg, white text

## Requirements

### Requirement: Header Navigation

Users SHALL see a fixed header with logo, phone/email contact bar, navigation links (Home, About, Services, Opening Hours, Blog, Pricing, Contact), and social media icon links.

#### Scenario: User sees the fixed header with nav links

- **WHEN** the user opens Dentalink
- **THEN** they see the logo "Dentalink" in the header
- **AND** they see navigation links: Home, About, Services, Opening Hours, Blog, Pricing, Contact
- **AND** they see phone and email contact info in the top bar
- **AND** they see social media icon links (Facebook, Twitter, Instagram, LinkedIn)

### Requirement: Hero / Banner Section

Users SHALL see a full-width hero banner with dark overlay, heading, subheading, and CTA button.

#### Scenario: User views the hero banner

- **WHEN** the user opens Dentalink
- **THEN** they see a full-width hero with dark overlay background
- **AND** the heading reads "Authentic Dental Service"
- **AND** the subheading reads "Don't look further, This is your Dentist"
- **AND** there is a "Get Started" call-to-action button

### Requirement: Opening Hours Section

Users SHALL see a white card with opening hours, a green "open now" indicator, and a schedule table.

#### Scenario: User views the opening hours card

- **WHEN** the user scrolls to the Opening Hours section
- **THEN** they see a white card with heading "Opening Hours"
- **AND** the card shows a green dot with "We are open Now" text
- **AND** the schedule shows Monday-Friday 10:00am to 05:00pm, Saturday 12:00am to 03:00pm, Sunday closed

### Requirement: Services Section

Users SHALL see a grid of 4 service cards each with image, title, and description.

#### Scenario: User views the services offered

- **WHEN** the user scrolls to the Services section
- **THEN** they see 4 service cards in a grid
- **AND** each card has an image, title, and description text

### Requirement: About Section

Users SHALL see a dark-background split-layout section with image, heading, description, and 2 sub-feature items.

#### Scenario: User views the about section

- **WHEN** the user scrolls to the About section
- **THEN** they see a dark background section with split layout
- **AND** the heading reads "Who we are to Serve the nation"
- **AND** there are 2 sub-feature items: "Expert Services" and "Great Support"

### Requirement: Testimonials Section

Users SHALL see client testimonials with avatars, quotes, names, and titles.

#### Scenario: User views client testimonials

- **WHEN** the user scrolls to the Testimonials section
- **THEN** they see the heading "Feedback from our real clients"
- **AND** there are 3 testimonial cards with avatar, quote, name, and title

### Requirement: Team Section

Users SHALL see team member cards with photos, names, and roles.

#### Scenario: User views the team members

- **WHEN** the user scrolls to the Team section
- **THEN** they see the heading "Our Consultants"
- **AND** there are 4 team member cards with photos and names

### Requirement: Features Section

Users SHALL see 6 feature items in a 2-column grid with icons and descriptions.

#### Scenario: User views the unique features

- **WHEN** the user scrolls to the Features section
- **THEN** they see the heading "Features that make us unique"
- **AND** there are 6 feature items: 24/7 Emergency, Expert Consultation, X-Ray Service, Dental Science, Intensive Care, Family Planning

### Requirement: Appointment Section

Users SHALL see a booking form with patient name, phone, email, DOB, appointment date, message, and confirm button.

#### Scenario: User fills in the appointment form

- **WHEN** the user scrolls to the Appointment section
- **THEN** they see a dark background section with booking form
- **AND** the form has fields: Patient Name, Phone, Email, Date of Birth, Appointment Date, Message
- **AND** there is a "Confirm Booking" submit button

### Requirement: Blog Section

Users SHALL see blog post cards with image, date, title, and excerpt.

#### Scenario: User views blog posts

- **WHEN** the user scrolls to the Blog section
- **THEN** they see the heading "Latest From Our Blog"
- **AND** there are 4 blog cards with image, date, title, and excerpt

### Requirement: Footer

Users SHALL see a dark footer with Top Products links, Contact Us info, Newsletter signup, copyright with Component Dock link, and social icons.

#### Scenario: User views the footer

- **WHEN** the user scrolls to the footer
- **THEN** they see a dark background footer
- **AND** the footer contains: Top Products links, Contact Us info, Newsletter signup
- **AND** the footer has a bottom bar with copyright and social media links
- **AND** the footer links to https://www.componentdock.com/ as "Component Dock"
