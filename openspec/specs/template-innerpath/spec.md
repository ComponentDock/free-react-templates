# Template: InnerPath (Counseling & Therapy)

## Purpose

Recreation of ColorLib **Counselor** (`counselor`) as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/counselor/
- **Preview URL:** https://preview.colorlib.com/theme/counselor/
- **New name:** `innerpath` (apps/innerpath, @free-react-templates/innerpath)
- **Deploy target:** https://innerpath.free.componentdock.com
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library

## Design Tokens (from live preview CSS analysis)

| Token | Value | Notes |
|-------|-------|-------|
| **Brand primary** | `#589167` (sage green) | Used for overlays, section accents, CTA buttons, active states |
| **Brand secondary** | `#01d28e` (teal) | Accent color in intro area |
| **Text primary** | `#1a1a1a` (near-black) | Body text |
| **Text secondary** | `#4d4d4d` (dark gray) | Paragraphs, muted text |
| **Text light** | `#999999` (medium gray) | Dates, metadata |
| **Text white** | `#fff` | On dark backgrounds |
| **Background light** | `#f5f4f0` (warm off-white) | Section alternating background |
| **Background white** | `#fff` | Card backgrounds |
| **Background dark** | `#1a1a1a` | Navbar background |
| **Navbar** | `#1a1a1a` / `#343a40` | Dark navbar, light-on-dark text |
| **Border** | `#e6e6e6` | Light section borders |
| **Font primary** | `"Roboto", Arial, sans-serif` | All body text |
| **Font awesome** | Font Awesome 4.7 | Icons |
| **Border radius** | `3px` (buttons), `50%` (avatars), `5px` (cards) | |
| **Button radius** | `3px` (Bootstrap default) | Small radius, slightly rounded |
| **Button padding** | `10px 20px` (typical Bootstrap) | |

## Section Structure (from live preview DOM)

Order extracted from `https://preview.colorlib.com/theme/counselor/`:

### 1. Navbar (dark)
- Dark bg (#1a1a1a), logo text "Counselor" left, nav links right: Home, About, Services, Pricing, Blog, Contact
- Sticky/fixed on scroll, mobile hamburger

### 2. Hero / Intro Area (`.ftco-intro`)
- Green overlay (#589167) background image (bg_1.jpg)
- Main heading: "Counseling For Your Better Life"
- Subtext paragraph
- 3-column feature cards below:
  - 100% Confidential (shield icon)
  - Qualified Team (people icon)
  - Individual Approach (user icon)
- Each card: icon + title + short description
- Green sidebar accent

### 3. How It Works (`.ftco-section`)
- White background
- Section title: "How It Works"
- 3-step horizontal process:
  - 01 Make Schedule → 02 Start Discussion → 03 Enjoy Plan
  - Each step: number, title, description
  - Icon-based visual with connecting lines

### 4. About / Services Overview (`.ftco-section ftco-no-pb ftco-no-pt`)
- Section title: "Welcome to Counselor"
- Subtitle: "Best Counseling Funding Network Worldwide."
- Description text + "Watch Our Consultant Video" CTA
- Full-width with background image (about-1.jpg)

### 5. Our Services (`.ftco-section`)
- Section title: "Our Services"
- Subtitle: "We Can Help You With This Situation"
- 6 service cards in 3x2 grid:
  - Relation Problem, Couples Counseling, Depression Treatment
  - Family Problem, Personal Problem, Business Problem
- Each card: background image, overlay, title, brief description, "Read more" link
- Hover effects on cards

### 6. Testimonials (`.testimony-section`)
- Green overlay background (#589167, 80% opacity)
- Section title: "Happy Clients" (labeled "Testimonial")
- Owl carousel with testimonial slides
- Each slide: avatar image, quote text, name + role (Roger Scott, Marketing Manager)
- Carousel dots navigation

### 7. Pricing / Packages (`.ftco-section bg-light`)
- Light gray background (#f5f4f0)
- Section title: "Affordable Packages"
- 3 pricing cards side by side:
  - $49/mo For Adults — Individual Counseling, Couples Therapy, Family Therapy
  - $79/mo For Children — Counseling for Children, Behavioral Management, Educational Counseling
  - $109/mo For Business — Consultancy Services, Employee Counseling, Psychological Assessment
- Each card: price, category, feature list, "Get Started" CTA button
- One card highlighted as featured

### 8. Contact / Appointment Form (`.ftco-appointment`)
- Parallax background image (bg_4.jpg) with green overlay (#589167, 50% opacity)
- Two-column layout:
  - Left: "Send a Message & Get in touch!" heading + form fields
  - Right: Services list with checkmarks
- Form: Name, Email, Subject, Message textarea, "Send Message" button

### 9. Blog (`.ftco-section`)
- White background
- Section title: "Recent Blog"
- 3 blog post cards in a row:
  - Each: image, date (18 April 2020), title "Social Media Risks To Mental Health", excerpt, "Read more" link
- All three share same date/title (template placeholder)

### 10. Footer
- Dark background (#1a1a1a)
- 4 columns:
  - Brand column: "Counselor" logo + lorem ipsum description
  - Explore: About, Contact, What We Do, Plans & Pricing
  - Legal: Join us, Blog, Privacy & Policy, Term & Conditions
  - Company: About Us, Blog, Contact, Careers
  - Contact info column: Address (203 Fake St...), Phone (+2 392 3929 210), Email (info@yourdomain.com)
- Copyright bar at bottom

## Requirements

### Feature: Navbar

#### Scenario: Sticky dark navbar with navigation links

- **GIVEN** the user is on the page
- **WHEN** the navbar renders
- **THEN** it shows a dark background (#1a1a1a)
- **AND** it contains links: Home, About, Services, Pricing, Blog, Contact
- **AND** the brand text reads "Counselor" (→ "InnerPath" in recreation)
- **AND** it becomes sticky on scroll
- **AND** it collapses to a hamburger on mobile viewports

### Feature: Hero / Intro Area

#### Scenario: Hero section with green overlay and 3 feature cards

- **GIVEN** the user is on the page
- **WHEN** the hero section renders
- **THEN** it displays a background image with green overlay (#589167)
- **AND** the heading reads "Counseling For Your Better Life"
- **AND** 3 feature cards are visible: Confidential, Qualified Team, Individual Approach
- **AND** each card has an icon, title, and short description

### Feature: How It Works

#### Scenario: 3-step process section

- **GIVEN** the user is on the page
- **WHEN** the "How It Works" section renders
- **THEN** 3 steps are displayed: Make Schedule, Start Discussion, Enjoy Plan
- **AND** each step shows a number, title, and description
- **AND** steps are connected visually (horizontal flow)

### Feature: About / Services Overview

#### Scenario: Welcome section with video CTA

- **GIVEN** the user is on the page
- **WHEN** the welcome section renders
- **THEN** the heading reads "Welcome to Counselor" (→ "Welcome to InnerPath")
- **AND** the subtitle reads "Best Counseling Funding Network Worldwide."
- **AND** a "Watch Our Consultant Video" button is present

### Feature: Our Services

#### Scenario: 6 service cards in a grid

- **GIVEN** the user is on the page
- **WHEN** the services section renders
- **THEN** 6 service cards are displayed in a 3x2 grid
- **AND** each card has a background image with overlay
- **AND** card titles are: Relation Problem, Couples Counseling, Depression Treatment, Family Problem, Personal Problem, Business Problem
- **AND** each card has a "Read more" link

### Feature: Testimonials

#### Scenario: Testimonial carousel with client quotes

- **GIVEN** the user is on the page
- **WHEN** the testimonials section renders
- **THEN** a green overlay background is visible (#589167)
- **AND** the section title reads "Happy Clients"
- **AND** a carousel displays testimonial slides
- **AND** each slide shows an avatar, quote text, name, and role
- **AND** navigation dots are present

### Feature: Pricing

#### Scenario: 3 pricing cards

- **GIVEN** the user is on the page
- **WHEN** the pricing section renders
- **THEN** 3 pricing cards are displayed side by side
- **AND** prices are $49/mo, $79/mo, $109/mo
- **AND** each card lists included services
- **AND** each card has a "Get Started" button
- **AND** the background is light gray (#f5f4f0)

### Feature: Contact Form

#### Scenario: Appointment form with services list

- **GIVEN** the user is on the page
- **WHEN** the contact section renders
- **THEN** a parallax background image is visible with green overlay
- **AND** the heading reads "Send a Message & Get in touch!"
- **AND** form fields are present: Name, Email, Subject, Message
- **AND** a "Send Message" button is present
- **AND** a services checklist is shown on the right side

### Feature: Blog

#### Scenario: 3 blog post cards

- **GIVEN** the user is on the page
- **WHEN** the blog section renders
- **THEN** 3 blog cards are displayed in a row
- **AND** each card shows an image, date, title, excerpt, and "Read more" link

### Feature: Footer

#### Scenario: 4-column dark footer with contact info

- **GIVEN** the user is on the page
- **WHEN** the footer renders
- **THEN** it has a dark background (#1a1a1a)
- **AND** 4 columns are present: brand info, Explore links, Legal links, Company links
- **AND** contact information is shown: address, phone, email
- **AND** a copyright bar is at the bottom
- **AND** a link to "Component Dock" (https://www.componentdock.com/) is present

## Verification Checklist

- [ ] Spec section order matches preview DOM order exactly
- [ ] All 10 sections present (Navbar, Hero, How It Works, About, Services, Testimonials, Pricing, Contact, Blog, Footer)
- [ ] Brand color #589167 used throughout (green overlays, buttons, accents)
- [ ] Font family is Roboto via Google Fonts
- [ ] Navbar is dark with correct links
- [ ] Hero has green overlay on background image
- [ ] 3 feature cards below hero
- [ ] How It Works has 3 numbered steps
- [ ] Services grid has 6 cards with image overlays
- [ ] Testimonials in carousel with avatar + quote + role
- [ ] Pricing has 3 cards at $49/$79/$109
- [ ] Contact form has parallax background + green overlay
- [ ] Blog shows 3 post cards
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code (only in this spec and TEMPLATES.md)
- [ ] All placeholder images use picsum.photos/seed/innerpath-*
