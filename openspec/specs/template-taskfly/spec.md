# Template: Taskfly (Virtual Assistant)

## Purpose

Recreation of ColorLib's **Virtualassistant** template as a React 19 + Vite +
Tailwind CSS 4 + TypeScript single-page application.

- **Source slug:** `virtualassistant`
- **Preview URL:** https://preview.colorlib.com/theme/virtualassistant/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/virtualassistant-free-template.jpg
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Deploy target:** `taskfly.free.componentdock.com`

## Design tokens

Extracted from the live preview's `css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Primary brand color | `#007bff` (Bootstrap blue) | Buttons, links, highlights |
| Primary hover | `#0069d9` | Button hover state |
| Accent green | `#21bf73` | Icon accents, decorative elements |
| Accent green light | `#8eebbe` | Secondary accent |
| Body text | `#1a1a1a` / `#4d4d4d` | Headings / body copy |
| Muted text | `#999999` | Dates, meta info |
| Navbar background | `#000000` (dark, solid) | Top navigation bar |
| Hero overlay | `#000000` at opacity | Dark image overlay |
| Section bg (default) | `#ffffff` | White card/content sections |
| Section bg (alt) | `#f7f7f7` / `#f8f9fa` | Light gray alternating sections |
| Card bg | `#ffffff` | Service cards, pricing cards |
| Progress bar border | `#007bff` | Comparison section progress bars |
| Button radius | `0.25rem` (4px) | Rounded corners on buttons |
| Card radius | `0.3rem` (3px) | Slight rounding on cards |
| Font family | `"Roboto", Arial, sans-serif` | Global body font |
| Font Awesome | `4.7.0` | Icon set (replace with lucide-react) |

## Page structure (section order, 1:1 with source)

1. **Navbar** — dark solid background, brand text "Virtual Assistant", nav
   links (Home, About, Services, How It Works, Pricing Plans, Blog, Contact),
   "Request Our Assistant" CTA button
2. **Hero** — full-width dark image overlay, large headline "Save Your Precious
   Time & Outsource Daily Tasks", mouse scroll indicator animation
3. **About / Why Choose Us** — split layout (image left, text right), heading
   "Top Reason Why We Need to Get Virtual Assistant", four bullet points with
   icons: Save time, Business results, Work-life balance, Quick planning
4. **Services Grid** — heading "Our Services & Offers", 2-column grid of 8
   service cards with icons: Family Task, Online Research, Management Task,
   Project Management, Writing Editing, Multilingual Services, Customer
   Service, Executive Admin — each with "Get Started" CTA
5. **Comparison** — heading "Get Your Own Highly Skilled Virtual Assistant",
   side-by-side progress bars comparing "Regular Office Employee" vs "Virtual
   Assistant Employee" (75% vs higher), green accent icons
6. **How It Works** — heading "How It Works", 4-column icon steps: Handling
   The Task, Creating To-Do List, Schedule A Meeting, Affordable Packages
7. **Testimonials / Parallax** — background image section with testimonial
   slider (owl carousel pattern)
8. **Blog** — heading "Recent Blog", 3-column card grid with blog post
   thumbnails, dates, author, title "Why Lead Generation is Key for Business
   Growth"
9. **Contact / Appointment** — full-width background image, heading
   "Send a Message & Get in touch!", contact form (name, email, subject,
   message, submit button)
10. **Footer** — dark background, 4 columns: brand + description, Explore
    links, Company links, Contact info (address, phone, email)

## Requirements

### Navbar

Feature: Taskfly Navbar

#### Scenario: Renders all navigation links

- **GIVEN** the page is loaded
- **THEN** the navbar displays brand text "Taskfly"
- **AND** navigation links "Home", "About", "Services", "How It Works", "Pricing", "Blog", "Contact" are visible

#### Scenario: CTA button is present

- **GIVEN** the page is loaded
- **THEN** a "Request Our Assistant" button is visible in the navbar

### Hero

Feature: Taskfly Hero

#### Scenario: Displays headline and scroll indicator

- **GIVEN** the page is loaded
- **THEN** the hero section shows "Save Your Precious Time & Outsource Daily Tasks"
- **AND** a scroll-down mouse indicator is visible

#### Scenario: Hero has dark overlay on background image

- **GIVEN** the page is loaded
- **THEN** the hero background is a dark overlay over a placeholder image

### About / Why Choose Us

Feature: Taskfly About Section

#### Scenario: Shows section heading and reasons

- **GIVEN** the page is loaded
- **THEN** the about section heading reads "Top Reason Why We Need to Get Virtual Assistant"
- **AND** four reason items are displayed with icons and descriptions

#### Scenario: Split layout with image and text

- **GIVEN** the page is loaded
- **THEN** the about section shows a placeholder image on one side
- **AND** text content on the other side

### Services Grid

Feature: Taskfly Services

#### Scenario: Displays all 8 service cards

- **GIVEN** the page is loaded
- **THEN** the services section heading reads "Our Services & Offers"
- **AND** 8 service cards are visible in a 2-column grid
- **AND** each card has an icon, title, and "Get Started" button

#### Scenario: Service card content matches source

- **GIVEN** the page is loaded
- **THEN** service cards include "Family Task", "Online Research", "Management Task",
"Project Management", "Writing Editing", "Multilingual Services",
"Customer Service", "Executive Admin"

### Comparison Section

Feature: Taskfly Comparison

#### Scenario: Shows employee comparison with progress bars

- **GIVEN** the page is loaded
- **THEN** the heading reads "Get Your Own Highly Skilled Virtual Assistant"
- **AND** two progress bars are displayed side by side
- **AND** "Regular Office Employee" label is shown
- **AND** "Virtual Assistant Employee" label is shown

### How It Works

Feature: Taskfly How It Works

#### Scenario: Shows 4-step process

- **GIVEN** the page is loaded
- **THEN** the heading reads "How It Works"
- **AND** four steps are displayed: "Handling The Task", "Creating To-Do List",
"Schedule A Meeting", "Affordable Packages"
- **AND** each step has an icon above its title

### Testimonials

Feature: Taskfly Testimonials

#### Scenario: Displays testimonial section with background image

- **GIVEN** the page is loaded
- **THEN** a testimonials section with a parallax background image is visible
- **AND** at least one testimonial quote is displayed

### Blog

Feature: Taskfly Blog

#### Scenario: Shows recent blog posts

- **GIVEN** the page is loaded
- **THEN** the heading reads "Recent Blog"
- **AND** 3 blog post cards are visible in a row
- **AND** each card shows a thumbnail image, date, author, and title

### Contact Form

Feature: Taskfly Contact

#### Scenario: Displays contact form with all fields

- **GIVEN** the page is loaded
- **THEN** the heading reads "Send a Message & Get in touch!"
- **AND** a form with fields "Name", "Email", "Subject", "Message" is visible
- **AND** a "Send Message" submit button is present

#### Scenario: Form validates required fields

- **GIVEN** the contact form is displayed
- **WHEN** the user clicks "Send Message" without filling fields
- **THEN** validation errors appear for required fields

### Footer

Feature: Taskfly Footer

#### Scenario: Displays footer with links and contact info

- **GIVEN** the page is loaded
- **THEN** the footer shows 4 columns: brand, Explore, Company, Contact
- **AND** the Contact column shows address and phone number
- **AND** a "Made with Component Dock" link pointing to componentdock.com is present

## Verification checklist

- [ ] All 10 sections render in the correct order matching the source
- [ ] Navbar: dark background, all 7 nav links, CTA button
- [ ] Hero: dark overlay, headline text, scroll indicator
- [ ] About: split layout, 4 reason items with icons
- [ ] Services: 2×4 grid, 8 cards with icons + "Get Started" buttons
- [ ] Comparison: two progress bars side by side
- [ ] How It Works: 4-column step layout with icons
- [ ] Testimonials: parallax background image section
- [ ] Blog: 3-column card grid with thumbnails, dates, authors
- [ ] Contact: form with 4 fields + submit button
- [ ] Footer: 4-column layout, Component Dock link
- [ ] Brand color `#007bff` used via Tailwind `@theme` token
- [ ] Accent green `#21bf73` used for icon accents
- [ ] Font: Roboto loaded via Google Fonts `<link>` in `index.html`
- [ ] All placeholder images use `picsum.photos` deterministic seeds
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` = `taskfly.free.componentdock.com`
- [ ] `package.json` homepage = `https://taskfly.free.componentdock.com`
