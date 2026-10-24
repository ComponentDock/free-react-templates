# Spec: Craftsman (Personal Portfolio)
<!-- prep-status: shipped-as=lenscape -->
> **SHIPPED-UNDER** — the ColorLib `schmidt` design this prep describes already
> ships as `apps/lenscape` (<https://lenscape.free.componentdock.com>).
> Do not scaffold `apps/craftsman`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-lenscape/spec.md`.

## Purpose

Recreation of ColorLib "Schmidt" (`https://colorlib.com/wp/template/schmidt/`), a minimalist personal portfolio / freelancer template with a full-viewport hero, dark split-layout design, gold accent color, and multiple inner pages (about, services, experience, works, blog, contact).

- **Preview URL:** https://preview.colorlib.com/theme/schmidt/
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons.

## Design Tokens

- **Brand Colors:**
  - Gold Accent: `#d5c455` (`rgb(213, 196, 85)`) — primary action color, active nav links, subheadings, service icons, form focus, overlay on hero right half
  - Dark Background: `#222222` (`rgb(34, 34, 34)`) — mobile navbar bg, hero heading text, brand name color
  - White: `#fff` — hero text, buttons, card backgrounds
  - Light Gray: `#f8f8f8` — blog section background
  - Body Text: `rgba(0,0,0,0.4)` — copyright, breadcrumbs
  - Nav Link Text: `rgba(0,0,0,0.7)` — default nav link color
- **Font Family:** `Poppins, sans-serif` (weights: 300, 400, 500, 700, 900)
- **Button Styles:**
  - `btn-primary`: Gold bg (`#d5c455`), white text, uppercase, letter-spacing 1px, no border-radius, box-shadow `0px 24px 36px -11px rgba(0,0,0,0.09)`. Hover: transparent bg, gold border+text.
  - `btn-white`: White bg, black text, same radius/shadow. Hover: transparent bg, white text.
  - Base `.btn`: padding 9px 12px, border-radius 0, font-size 12px, font-weight 700, uppercase.
- **Section Backgrounds:**
  - Hero: Full viewport, background image, right-half gold overlay (`width: 50%; background: #d5c455`)
  - Services: White cards with box-shadow, icon in gold
  - Blog: `#f8f8f8` light gray bg
  - Contact: `#f8f8f8` light gray bg, split layout (form + map/info)
  - About: White bg, 2-column layout with photo + info cards
- **Border Radius:** 0 (buttons, inputs) to 2-3px (cards, forms)
- **Box Shadow:** `0px 24px 36px -11px rgba(0,0,0,0.09)` on buttons; `0px 5px 25px -2px rgba(0,0,0,0.06)` on cards/nav
- **Active Nav Link Color:** `#d5c455` (gold)

## Requirements

### Feature: Craftsman Personal Portfolio

#### Scenario: Navbar

- **GIVEN** the user visits any page of the Craftsman template
- **THEN** they should see a floating transparent navbar with brand text "Schmt." (stylized)
- **AND** navigation links: Home, About, Services, Experiences, Works, Blog, Contact
- **AND** the active page link highlighted in gold (`#d5c455`)
- **AND** on mobile, the navbar collapses to a dark background (`#222`) with a hamburger toggle

#### Scenario: Hero Section (Home)

- **GIVEN** the user visits the home page
- **THEN** they should see a full-viewport hero with a background image
- **AND** a gold (`#d5c455`) overlay on the right 50% of the screen
- **AND** a subheading "UI/UX Designer & Developer" in gold uppercase
- **AND** a large heading "I'm John Schmidt" in dark text
- **AND** two CTA buttons: "More About Me" (gold primary) and "Hire Me" (white) with arrow icons
- **AND** a person image carousel on the right side
- **AND** a copyright line at the bottom

#### Scenario: About Page

- **GIVEN** the user visits the About page
- **THEN** they should see a short hero banner with breadcrumb title "About Us"
- **AND** a 2-column about section with a person image on the left and bio/info on the right
- **AND** personal info fields: Name, Date of birth, Address, Zip code, Email, Phone
- **AND** a "Download CV" button (gold primary)
- **AND** a stats counters row: Happy Clients (5000), Projects Done (1200), Cups of Coffee (500), Working Hours (587)
- **AND** a Skills section with progress bars: Adobe Photoshop (90%), Figma (95%), Adobe Illustrator (90%), Javascript (85%), HTML5 (95%), CSS3 (90%), WordPress (70%)
- **AND** a Testimonials section with a carousel

#### Scenario: Services Page

- **GIVEN** the user visits the Services page
- **THEN** they should see a short hero banner with breadcrumb title "What I Do?"
- **AND** a 4-column grid of 8 service cards, each with a gold icon and description
- Services: UI/UX Design, Web Development, Graphic Design, Branding, Marketing, Mobile App Design, Visual Editor, IT Consultancy
- **AND** a Pricing section with 4 tiers: Personal ($49), Professional ($79), Medium Business ($109), Gigantic Business ($149)

#### Scenario: Experiences Page

- **GIVEN** the user visits the Experiences page
- **THEN** they should see a short hero banner with breadcrumb title "Experiences"
- **AND** a 2-column layout with Education (left) and Work Experience (right)
- Education items: Master Degree of Design (2014-2015), Bachelor's Degree of C.A (2014-2015), Diploma in Computer (2014-2015)
- Work items: Art & Creative Director (2014-2015), Wordpress Developer (2015-2017), UI/UX Designer (2018-2020)

#### Scenario: Works/Portfolio Page

- **GIVEN** the user visits the Works page
- **THEN** they should see a short hero banner with breadcrumb title "Portfolio"
- **AND** a 3-column grid of 9 project cards with image overlays and titles "Branding & Illustration Design" / category "Web Design"
- **AND** pagination controls at the bottom

#### Scenario: Blog Page

- **GIVEN** the user visits the Blog page
- **THEN** they should see a short hero banner with breadcrumb title "Blog Posts"
- **AND** a grid of 8 blog entry cards on a light gray (`#f8f8f8`) background
- Each card has: image, author ("Admin"), date ("Jan. 07, 2021"), comments count ("3 Comments"), title, and excerpt

#### Scenario: Contact Page

- **GIVEN** the user visits the Contact page
- **THEN** they should see a short hero banner with breadcrumb title "Contact us"
- **AND** a split layout with a contact form on the left and info on the right
- Contact info boxes: Address, Email (`info@yoursite.com`), Phone (`+ 1235 2355 98`)
- Social links: Facebook, Twitter, Instagram, Dribbble
- A message form with Name, Email, Subject, and Message fields

#### Scenario: Footer (all pages)

- **GIVEN** the user views any page
- **THEN** they should see a footer with copyright information
- **AND** the mandatory Component Dock attribution link (`https://www.componentdock.com/`)

## Verification checklist

- [ ] Navbar renders brand and all navigation links correctly across all pages
- [ ] Home hero section displays full-viewport layout with gold overlay and image carousel
- [ ] About page shows bio, info fields, stats counters, skills progress bars, and testimonials
- [ ] Services page displays 8 service cards and 4 pricing tiers
- [ ] Experiences page shows education and work timeline in 2-column layout
- [ ] Works page displays 9-item portfolio grid with pagination
- [ ] Blog page shows 8 blog cards on gray background
- [ ] Contact page renders form and contact info split layout
- [ ] Footer includes Component Dock link on all pages
- [ ] Mobile navbar collapses with dark background and hamburger
- [ ] `npm run test:coverage` passes at 100%
- [ ] `scripts/verify-app.sh craftsman` passes successfully
