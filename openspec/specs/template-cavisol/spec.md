# Template: Cavisol (Dental Clinic)
<!-- prep-status: shipped-as=dentalink -->
> **SHIPPED-UNDER** — the ColorLib `dentist` design this prep describes already
> ships as `apps/dentalink` (<https://dentalink.free.componentdock.com>).
> Do not scaffold `apps/cavisol`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-dentalink/spec.md`.

## Purpose

Recreation of ColorLib **Dentist** (`https://colorlib.com/wp/template/dentist/`), preview URL: `https://preview.colorlib.com/theme/dentist/`.
Built as a responsive React 19 + Tailwind CSS 4 + TypeScript template with 100% test coverage.

## Design Tokens

- **Brand Colors**: Green primary gradient (`#67bc00` to `#ade600`), Dark navy (`#04091e`), Body text (`#777`), Headings (`#222`), White (`#fff`).
- **Gradient Accent**: `linear-gradient(0deg, #ade600, #62b900)` (light lime-green to deeper green) used on primary buttons and team member overlays.
- **Font Family**: "Poppins", sans-serif.
- **Button Radius**: 25px (pill-shaped primary buttons), 0px (form submit buttons in appointment section).
- **Section Styling**: Alternating white and dark navy (`#04091e`) backgrounds. Dark sections: About, Appointment, Footer. Hero uses a full-width image with dark overlay `rgba(4,9,30,0.85)`.
- **Form Inputs**: Transparent background, `border-color: #505362`, `border-radius: 0`, `color: #ccc`, `font-size: 13px`.

## Section Order (from live preview DOM)

1. Header/Navbar (contact info bar + nav + social icons)
2. Hero Banner (full-width image, dark overlay, headline + CTA)
3. Opening Hours (schedule display with "We are open Now" indicator)
4. Services (4-column image cards grid)
5. About (dark background, split layout with side image + features)
6. Testimonials (carousel with avatar, quote, name, title)
7. Team / Consultants (4-card grid with hover overlay)
8. Features (6 icon+text items in 2-column grid)
9. Appointment Booking (dark background, form with fields + CTA)
10. Blog (4-card grid with image, date, title, excerpt, likes/comments)
11. Footer (3-column: links, contact, newsletter + copyright bar)

## Requirements

### 1. Header & Navigation

- **Requirement**: The app must display a top contact info bar (phone, email) and a sticky/fixed navbar with logo, menu links (Home, About, Services, Opening Hour, Blog, Pricing, Contact), and social media icon links.

#### Scenario: User views the header

- **GIVEN** the user loads the Cavisol application
- **THEN** they see the phone number and email address in the top bar
- **AND** they see the brand logo and navigation menu
- **AND** they see social media icon links (Facebook, Twitter, Dribbble, Behance)

### 2. Hero Banner

- **Requirement**: The hero section must feature a full-width background image with a dark overlay, a subtitle ("Don't look further, This is your Dentist"), a main headline ("Authentic Dental Service"), a descriptive paragraph, and a primary "Get Started" CTA button.

#### Scenario: User views the hero section

- **GIVEN** the user scrolls to the hero banner
- **THEN** they see the subtitle in uppercase text
- **AND** they see the main headline "Authentic Dental Service"
- **AND** they see the description paragraph
- **AND** they see the "Get Started" pill-shaped green button

### 3. Opening Hours

- **Requirement**: A section displaying "Opening Hours" with a heading, description, a "We are open Now" status indicator (with green circle dot), and a two-column schedule list showing days (Monday-Friday, Saturday, Sunday) alongside time ranges.

#### Scenario: User views the opening hours

- **GIVEN** the user scrolls to the opening hours section
- **THEN** they see the "Opening Hours" heading
- **AND** they see the green "We are open Now" indicator
- **AND** they see the schedule with days and corresponding hours

### 4. Services

- **Requirement**: A services section with a heading ("What we Offer to our Customers"), a subtitle, and a 4-column grid of service cards. Each card has an image, a linked title, and a description paragraph.

#### Scenario: User browses the services section

- **GIVEN** the user scrolls to the services section
- **THEN** they see the heading and subtitle
- **AND** they see 4 service cards arranged in a row
- **AND** each card displays an image, title, and description

### 5. About

- **Requirement**: A dark-background (`#04091e`) about section with a split layout: left side has a background image, right side has a heading ("Who we are to Serve the nation"), a description, and two sub-feature columns ("Expert Services" and "Great Support") each with an icon, title, and description.

#### Scenario: User views the about section

- **GIVEN** the user scrolls to the about section
- **THEN** they see the dark navy background
- **AND** they see the heading and description on the right
- **AND** they see two sub-feature columns with icons below

### 6. Testimonials

- **Requirement**: A testimonials section with heading ("Feedback from our real clients"), subtitle, and a carousel/slider of testimonial items. Each item has an avatar image, a quote, the person's name, and their title/role.

#### Scenario: User views testimonials

- **GIVEN** the user scrolls to the testimonials section
- **THEN** they see the section heading and subtitle
- **AND** they see testimonial cards with avatar, quote, name, and title
- **AND** the testimonials are displayed in a carousel (navigable)

### 7. Team / Consultants

- **Requirement**: A team section with heading ("Our Consultants"), subtitle, and a 4-column grid of team member cards. Each card has a photo with a hover overlay showing a brief description and the member's name.

#### Scenario: User views the team section

- **GIVEN** the user scrolls to the team section
- **THEN** they see the heading and subtitle
- **AND** they see 4 team member cards
- **AND** each card shows a photo with an overlay containing name and description

### 8. Features

- **Requirement**: A features section with heading ("Features that make us unique"), subtitle, and a 2-column grid of 6 feature items. Each feature has a Linearicons icon, a title, and a description.

#### Scenario: User views the features section

- **GIVEN** the user scrolls to the features section
- **THEN** they see the heading and subtitle
- **AND** they see 6 feature items in a 2-column layout
- **AND** each feature has an icon, title, and description

### 9. Appointment Booking

- **Requirement**: A dark-background (`#04091e`) appointment section with a split layout: left has a background image, right has a heading ("Book an Appointment") and a form with fields (Patient Name, Phone, Email, Date of Birth, Appointment Date, Message) and a "Confirm booking" submit button.

#### Scenario: User fills out the appointment form

- **GIVEN** the user scrolls to the appointment section
- **THEN** they see the heading and form
- **WHEN** they fill in all required fields
- **AND** they click "Confirm booking"
- **THEN** the form submits successfully

### 10. Blog

- **Requirement**: A blog section with heading ("Latest From Our Blog"), subtitle, and a 4-column grid of blog cards. Each card has a thumbnail image, a date, a linked title, a short excerpt, and a meta row with likes count and comments count.

#### Scenario: User browses the blog section

- **GIVEN** the user scrolls to the blog section
- **THEN** they see the heading and subtitle
- **AND** they see 4 blog cards in a row
- **AND** each card shows an image, date, title, excerpt, likes, and comments

### 11. Footer

- **Requirement**: A dark-background (`#04091e`) footer with 3 columns: "Top Products" links, "Contact Us" (address + phone numbers), and "Newsletter" (email input + subscribe button). A bottom bar with copyright text (linking Component Dock) and social media icons.

#### Scenario: User views the footer

- **GIVEN** the user scrolls to the footer
- **THEN** they see the three-column layout
- **AND** they see the newsletter subscription form
- **AND** they see the copyright bar with "Component Dock" link
- **AND** they see social media icon links

## Verification checklist

- [ ] All 11 sections render in correct order
- [ ] Brand color #67bc00 used for primary buttons and accent elements
- [ ] Dark navy #04091e used for About, Appointment, and Footer sections
- [ ] Poppins font family applied throughout
- [ ] Primary buttons are pill-shaped (rounded-full / border-radius 25px)
- [ ] Hero has dark overlay with headline and CTA
- [ ] Opening Hours section has schedule list and open indicator
- [ ] Services displays 4 cards in a grid
- [ ] About section has split layout with side image and sub-features
- [ ] Testimonials carousel is functional
- [ ] Team cards have hover overlay effect
- [ ] Features displays 6 items in 2-column grid with icons
- [ ] Appointment form has all required fields and submit button
- [ ] Blog displays 4 cards with image, date, title, excerpt, likes/comments
- [ ] Footer has 3 columns + copyright bar + Component Dock link
- [ ] Responsive on mobile (single-column stacking)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
