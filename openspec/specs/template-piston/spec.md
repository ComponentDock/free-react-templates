# Template: Piston (Health & Fitness Landing)

## Purpose

Piston is a single-page gym/fitness landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Bodyfit" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-and-blue-toned gym page with yellow/gold accents:
a hero carousel ("We are the Piston Gym", "Challenge Yourself"), an info
bar (phone, address, hours) with yellow background, a split about section
with video play button, dark "Our Process" services grid, programs list,
parallax stats counter, coach profiles, testimonials carousel, pricing
packages, blog cards, photo gallery, appointment booking form, and a
footer. Piston recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Bodyfit" — free fitness/gym website template
  (source: https://colorlib.com/wp/template/bodyfit/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/bodyfit/`
  (HTTP 200, 765 lines) + stylesheet `css/style.css` (2963 lines). The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`bodyfit-free-template-1.jpg`) confirms the visual design (dark sections
  with blue primary and yellow accent).
- **Section order (1:1):**
  1. Navbar: "Piston" logo + nav (Home, Program, Coaches, Schedule, About, Blog, Contact). Dark bg, sticky on scroll.
  2. Hero carousel: two slides with background images + dark overlay. Headlines: "We Are The Piston Gym" / "Challenge Yourself". CTA: "Get Started Now" (btn-primary).
  3. Info bar: yellow (#e5ce48) background strip with 3 columns — phone number, address, open hours. Overlaps hero bottom.
  4. About section: split layout — left half = image with play button overlay (Vimeo popup); right half = "Welcome to Piston" heading + descriptive paragraph.
  5. Services ("Our Process"): dark bg (#141414). 4-column grid of icon cards: Analyze Your Goal, Work Hard On It, Improve Your Performance, Achieve Perfect Body. Each with lucide-react icon.
  6. Programs ("Fitness Programs"): split — left = heading + description + "View Full Programs" outline button; right = 5 stacked program items with icon: Body Building, Aerobic Classes, Weight Lifting, Yoga Classes, Cardio Training.
  7. Counter: dark bg with parallax image. 4 animated stats: 5000 Happy Customers, 4560 Perfect Bodies, 570 Working Hours, 900 Success Stories.
  8. Coaches ("Our Coaches"): 4 coach cards in 2-col layout. Each = image + name (Oscar Brook, Leonard Smith, James Buffer, Maricar Collins) + role + social links (twitter, facebook, instagram).
  9. Testimonials: dark bg with parallax image. "What Our Customers Say" heading + testimonial cards with avatar, quote, name, and role.
  10. Packages ("Our Packages"): 3-column pricing cards — Muscle Build Pro ($98.75/yr), Women Strength Training ($20.87/mo), Fat Burning Pro ($98.75/yr). Each = image + title + description + price + "Enroll Now" link.
  11. Blog ("Recent From Our Blog"): 3-column blog cards with image, date, author, comment count, title, excerpt.
  12. Gallery: 4-column image grid with hover overlay + search icon.
  13. Appointment ("Book an Appointment"): split — left = map placeholder; right = form (First Name, Last Name, Date, Time, Phone, Message, "Appointment" submit button).
  14. Footer: dark bg with parallax. 4-column — About Us + social links, Recent Blog entries, Services links, Have a Questions? (address, phone, email). Copyright with Component Dock attribution.
- **Design tokens:**
  - Primary brand: `#78d5ef` (light blue/cyan) — buttons, links, accents
  - Accent: `#e5ce48` (yellow/gold) — info bar bg, subheadings, highlights
  - Dark bg: `#141414` / `#0d0d0d` — service section, counters, footer
  - Body text: `#212529`
  - Muted text: `#6c757d`
  - White: `#fff`
  - Font family: "Work Sans" (Google Fonts, weights 300-800)
  - Button shape: Bootstrap 4 default (border-radius: 0.25rem), primary = #78d5ef bg, dark text
  - Section padding: generous vertical spacing (py-5 / py-6 equivalents)
  - Parallax: background-attachment fixed on dark bg sections

## Requirements

### Requirement: Navbar with navigation and mobile menu

The navbar SHALL display the Piston logo, desktop navigation links (Home, Program, Coaches, Schedule, About, Blog, Contact), and a mobile hamburger menu toggle.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the Piston logo and all 7 navigation links

#### Scenario: Mobile menu toggles on hamburger click

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all links

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a link is clicked
- **THEN** the mobile menu closes

### Requirement: Hero carousel with gym headline and CTA

The hero section SHALL display an image carousel with gym-related headlines and a "Get Started Now" call-to-action button.

#### Scenario: Hero renders headline and CTA

- **WHEN** the page loads
- **THEN** the hero shows "We Are The Piston Gym" heading and a "Get Started Now" button

#### Scenario: Hero carousel slides between items

- **WHEN** the carousel auto-advances or the user navigates
- **THEN** the second slide "Challenge Yourself" is displayed

### Requirement: Info bar with contact details

The info bar SHALL display phone number, address, and opening hours in a horizontal strip with a yellow (#e5ce48) background.

#### Scenario: Info bar renders all three columns

- **WHEN** the page loads
- **THEN** the info bar shows phone, address, and hours sections

### Requirement: About section with video play button

The about section SHALL display a split layout with an image (with play button overlay) on one side and a "Welcome to Piston" heading with description on the other.

#### Scenario: About section renders heading and content

- **WHEN** the page loads
- **THEN** the about section shows "Welcome to Piston" heading and descriptive text

### Requirement: Services section ("Our Process") with icon cards

The services section SHALL display 4 service cards (Analyze Your Goal, Work Hard On It, Improve Your Performance, Achieve Perfect Body) on a dark background with icons.

#### Scenario: Services section renders all 4 cards

- **WHEN** the page loads
- **THEN** all 4 service cards are shown with icons and descriptions

### Requirement: Programs section with fitness program list

The programs section SHALL display a heading, description, "View Full Programs" outline button, and 5 program items (Body Building, Aerobic Classes, Weight Lifting, Yoga Classes, Cardio Training) with icons.

#### Scenario: Programs section renders all items

- **WHEN** the page loads
- **THEN** all 5 program items are shown with icons and descriptions

### Requirement: Stats counter section

The counter section SHALL display 4 animated stat counters (Happy Customers, Perfect Bodies, Working Hours, Success Stories) on a dark parallax background.

#### Scenario: Counter section renders all stats

- **WHEN** the page loads
- **THEN** all 4 stat items are displayed with their target numbers

### Requirement: Coaches section with profiles

The coaches section SHALL display 4 coach profiles (Oscar Brook, Leonard Smith, James Buffer, Maricar Collins) with photo, role, and social media links.

#### Scenario: Coaches section renders all profiles

- **WHEN** the page loads
- **THEN** all 4 coach profiles are shown with name, role, and social icons

### Requirement: Testimonials section

The testimonials section SHALL display customer testimonials with quotes, author avatars, names, and roles on a dark parallax background.

#### Scenario: Testimonials section renders cards

- **WHEN** the page loads
- **THEN** testimonial cards are displayed with quotes and author info

### Requirement: Packages (pricing) section

The packages section SHALL display 3 pricing cards (Muscle Build Pro, Women Strength Training, Fat Burning Pro) with images, descriptions, prices, and "Enroll Now" links.

#### Scenario: Packages section renders all 3 cards

- **WHEN** the page loads
- **THEN** all 3 pricing cards are shown with name, price, and enroll link

### Requirement: Blog section

The blog section SHALL display 3 blog post cards with images, dates, author, comment counts, titles, and excerpts.

#### Scenario: Blog section renders all posts

- **WHEN** the page loads
- **THEN** all 3 blog cards are displayed with metadata and excerpts

### Requirement: Gallery section

The gallery section SHALL display a 4-column image grid with hover overlay showing a search icon.

#### Scenario: Gallery renders all images

- **WHEN** the page loads
- **THEN** 4 gallery images are displayed in a row

### Requirement: Appointment booking form

The appointment section SHALL display a form with fields for First Name, Last Name, Date, Time, Phone, and Message, plus an "Appointment" submit button.

#### Scenario: Appointment form renders all fields

- **WHEN** the page loads
- **THEN** the appointment form shows all 6 input fields and the submit button

### Requirement: Footer with company info and Component Dock link

The footer SHALL display 4 columns (About Us with social links, Recent Blog, Services links, Have a Questions? with contact info), a copyright line, and a link to Component Dock.

#### Scenario: Footer renders all columns and Component Dock link

- **WHEN** the page loads
- **THEN** the footer shows 4 info columns, copyright, and a link to componentdock.com

## Verification checklist

- [ ] All 14 sections render in correct order matching the original
- [ ] Design tokens match: primary #78d5ef, accent #e5ce48, dark #141414
- [ ] Font is "Work Sans" (Google Fonts)
- [ ] Navbar is sticky on scroll with dark background
- [ ] Hero carousel auto-advances between slides
- [ ] Info bar has yellow (#e5ce48) background
- [ ] About section has split layout with play button
- [ ] Services section on dark background with 4 icon cards
- [ ] Programs section has 5 stacked items with icons
- [ ] Counter section shows 4 animated stats on parallax bg
- [ ] Coaches section shows 4 profiles with social links
- [ ] Testimonials on dark parallax background
- [ ] Pricing cards show correct prices and CTA links
- [ ] Blog section shows 3 cards with metadata
- [ ] Gallery shows 4-column grid with hover overlay
- [ ] Appointment form has all fields and submit button
- [ ] Footer links to componentdock.com (replaces ColorLib attribution)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos/seed/piston-<n>
- [ ] 100% test coverage (lines, functions, branches, statements)
