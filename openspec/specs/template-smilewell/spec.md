# Template: Smilewell (Dentist)

## Purpose

Smilewell is a dental clinic landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Toothsy"
dental website template, built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Toothsy" — dental clinic template
  (source: https://colorlib.com/wp/template/toothsy/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/toothsy/
  (HTTP 200; sections, headings, copy, forms extracted).
- **Screenshot analyzed:** https://colorlib.com/wp/wp-content/uploads/sites/2/toothsy-free-template.jpg
  (AVIF image converted to PNG, visual design noted).
- **Section order (1:1):** Header (sticky, white bg, logo "TOOTHsy" with
  "TOOTH" in cyan + "sy" in dark, nav: Home/Services/About Us/Doctors/
  Testimonials/Blog/Contact, Home active with cyan underline) →
  Hero/Welcome (full-width, split layout: text left on white bg with
  "Welcome To Toothsy" subtitle, heading "We Care For Your Smile" in cyan,
  description, "Contact Us" cyan button; right side: large person smile image
  with transparent background) →
  Services (white bg, subtitle "All Kind Of Services", heading "Dental
  Services", 6 service cards in 3-col grid with flaticon icons: Tooth
  Extraction, Tooth Fillings, Braces Install, Children Clinic, Tooth Cleaning,
  Patient Records) →
  About/Stats (gradient-bg-1: cyan-to-blue gradient, centered video popup
  placeholder, 4 stat counters: 8+ Year of Experience, 15+ Expert Doctors,
  320+ Health Sections, 1500+ Happy Smiles) →
  Team (white bg, subtitle "Expert Doctors", heading "Meet Our Team", 3 team
  member cards with photo, name, role, description, social icons: Bob Carry
  Doctor, Jean Smith Doctor, Ricky Fisher Dentist) →
  Testimonials (light bg #f4f5f9, subtitle "Happy Client Says", heading
  "Testimonial", owl-carousel with 4 testimonials: quote + avatar + name
  (Ricky Fisher, Ken Davis, Mellisa Griffin, Robert Steward)) →
  Blog (white bg, subtitle "Latest Blog Posts", heading "Our Blog", split
  layout: left col large featured post "Every Smile Is Precious" with image,
  date, author, excerpt, read more; right col 4 compact post entries) →
  Contact (light bg, subtitle "Get In Touch", heading "Contact Us", split
  layout: left form with first name/last name/email/message + "Send Message"
  button; right: "Need a call for presentation?" text block) →
  Footer (dark #333333 bg, 3 columns: About Us text, Features links,
  Newsletter form + Follow Us social icons; bottom bar: copyright +
  Component Dock link).

- **Design tokens extracted from the demo stylesheet (css/style.css):**
  - **Primary Brand Color:** Cyan/teal `#51eaea` (buttons, headings, accents,
    logo "TOOTH" text, active nav underline)
  - **Secondary Blue:** `#499bea` (gradient endpoint, hover states)
  - **Gradient:** linear-gradient `#51eaea → #499bea` (about/stats section)
  - **Neutral Dark:** `#333333` (footer bg)
  - **Neutral Dark Text:** `#212529` / `#25262a` (headings, body)
  - **Neutral Medium:** `#737373` / `#939393` / `#999999` (body text, footer text)
  - **Neutral Light:** `#f4f5f9` / `#f8f9fa` (light section bg)
  - **Font Family:** "Nunito", sans-serif (weights via Google Fonts)
  - **Button Primary:** Cyan `#51eaea` bg, white text, generous padding
    (py-3 px-5), no border-radius (sharp corners)
  - **Heading Color:** Dark `#212529`
  - **Body Text:** Gray `#737373`
  - **Section subtitle style:** Small uppercase gray text above heading
    (e.g. "All Kind Of Services" in gray, "Dental Services" in dark)
  - **Section spacing:** `.site-section` padding 2.5em 0 (5em 0 on desktop)

## Requirements

### Requirement: Header Navigation

Users SHALL see a sticky header with split-color logo and navigation links.

#### Scenario: User sees the sticky header with nav links

- **WHEN** the user opens Smilewell
- **THEN** they see the logo "Smilewell" in the header
- **AND** the logo has a split-color treatment (first part in cyan, second part in dark)
- **AND** they see navigation links: Home, Services, About Us, Doctors, Testimonials, Blog, Contact
- **AND** the active nav link has a cyan underline indicator
- **AND** the header is sticky on scroll

### Requirement: Hero / Welcome Section

Users SHALL see a full-width welcome section with split layout: text left, large dental image right.

#### Scenario: User views the hero section

- **WHEN** the user opens Smilewell
- **THEN** they see a full-width section with white background
- **AND** the left side has subtitle "Welcome To Smilewell" in gray uppercase
- **AND** the heading reads "We Care For Your Smile" in cyan
- **AND** there is a description paragraph
- **AND** there is a cyan "Contact Us" button
- **AND** the right side shows a large dental/smile image

### Requirement: Services Section

Users SHALL see a 6-card service grid with flaticon icons on a white background.

#### Scenario: User views the services section

- **WHEN** the user scrolls to the Services section
- **THEN** they see subtitle "All Kind Of Services" and heading "Dental Services"
- **AND** there are 6 service cards in a 3-column, 2-row grid
- **AND** each card has a flaticon icon, title, and description
- **AND** the services are: Tooth Extraction, Tooth Fillings, Braces Install, Children Clinic, Tooth Cleaning, Patient Records
- **AND** each card animates in on scroll (fade-up)

### Requirement: About / Stats Section

Users SHALL see a gradient-background section with video placeholder and 4 stat counters.

#### Scenario: User views the about/stats section

- **WHEN** the user scrolls to the About section
- **THEN** they see a gradient background (cyan to blue)
- **AND** there is a centered video play button/popup placeholder
- **AND** there are 4 stat counters: 8+ Year of Experience, 15+ Expert Doctors, 320+ Health Sections, 1500+ Happy Smiles
- **AND** the numbers animate on scroll (count-up effect)

### Requirement: Team Section

Users SHALL see 3 team member cards with photos, names, roles, and social icons.

#### Scenario: User views the team members

- **WHEN** the user scrolls to the Team section
- **THEN** they see subtitle "Expert Doctors" and heading "Meet Our Team"
- **AND** there are 3 team member cards
- **AND** each card has a photo, name, role, description, and social icons (Facebook, Twitter, Instagram)
- **AND** the team members are: Bob Carry (Doctor), Jean Smith (Doctor), Ricky Fisher (Dentist)
- **AND** cards animate in on scroll (fade-up)

### Requirement: Testimonials Section

Users SHALL see a testimonials carousel with client quotes, avatars, and names.

#### Scenario: User views client testimonials

- **WHEN** the user scrolls to the Testimonials section
- **THEN** they see a light background (#f4f5f9) section
- **AND** they see subtitle "Happy Client Says" and heading "Testimonial"
- **AND** there is a carousel of testimonial cards
- **AND** each card has a blockquote, avatar, and name
- **AND** there are 4 testimonials: Ricky Fisher, Ken Davis, Mellisa Griffin, Robert Steward

### Requirement: Blog Section

Users SHALL see a blog layout with one featured post and 4 compact post entries.

#### Scenario: User views the blog section

- **WHEN** the user scrolls to the Blog section
- **THEN** they see subtitle "Latest Blog Posts" and heading "Our Blog"
- **AND** the left column has a featured post with image, title "Every Smile Is Precious", date, author, excerpt, and "Read More" link
- **AND** the right column has 4 compact post entries with title, date, and author

### Requirement: Contact Section

Users SHALL see a contact form with fields and a sidebar text block.

#### Scenario: User views the contact section

- **WHEN** the user scrolls to the Contact section
- **THEN** they see a light background section
- **AND** they see subtitle "Get In Touch" and heading "Contact Us"
- **AND** the left column has a form with: first name, last name, email, message textarea, and "Send Message" button
- **AND** the right column has text "Need a call for presentation?" with description

### Requirement: Footer

Users SHALL see a dark footer with about text, features links, newsletter, social icons, and Component Dock link.

#### Scenario: User views the footer

- **WHEN** the user scrolls to the footer
- **THEN** they see a dark (#333333) background footer
- **AND** there are 3 columns: About Us text, Features links (About Us, Services, Testimonials, Contact Us), Newsletter form + Follow Us social icons (Facebook, Twitter, Instagram, LinkedIn)
- **AND** there is a bottom bar with copyright and Component Dock link
- **AND** the footer links to https://www.componentdock.com/ as "Component Dock"

## Verification checklist

- [ ] Header renders with split-color logo, nav links, sticky behavior
- [ ] Hero section shows split layout with cyan heading and dental image
- [ ] Services section shows 6 cards with flaticon icons on white bg
- [ ] About/stats section shows gradient bg, video placeholder, 4 stat counters
- [ ] Team section shows 3 members with photos, roles, social icons
- [ ] Testimonials carousel shows 4 quotes with avatars on light bg
- [ ] Blog section shows featured post + 4 compact entries
- [ ] Contact section shows form with fields + sidebar text
- [ ] Footer shows dark bg, 3 columns, newsletter, social icons, Component Dock link
- [ ] No references to ColorLib in app code (only in spec/TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images use https://picsum.photos/seed/smilewell-<n>/<w>/<h>
- [ ] Font loaded: Nunito from Google Fonts
- [ ] Scroll animations implemented (fade-up on sections)
