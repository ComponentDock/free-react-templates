# Template: CounselHub (Law Firm Website)

## Purpose

- **ColorLib Template Source:** Lawfirm (`https://colorlib.com/wp/template/lawfirm/`)
- **Live Preview URL:** `https://preview.colorlib.com/theme/lawfirm/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg`
- **Assigned New Name:** `counselhub`
- **App Directory:** `apps/counselhub`
- **Package Name:** `@free-react-templates/counselhub`
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript (strict), Lucide React icons.

## Design Tokens (Extracted from Lawfirm)

- **Brand Gold / Accent:** `#cbb88c` (warm gold — used for navbar links, active states, CTA button backgrounds, intro box accents, icon highlights, footer link color)
- **Dark Background:** `#1d2227` (dark charcoal — used for top bar, navbar background, intro aside-stretch box, footer)
- **Base Body Font:** `Roboto, Arial, sans-serif` (Google Fonts, weights 300–700)
- **Heading Weight:** Bold (700) for h1/h2, Medium (500) for h3
- **Button Radius:** `0.25rem` (Bootstrap 4 default — `rounded` in Tailwind)
- **Section Backgrounds:** Alternating `#ffffff` (white), `#f7f7f7` (light gray), and background images with dark overlay for hero/testimonials/counter/appointment sections
- **Intro Boxes:** Four accent colors for the feature strip — default dark (`#1d2227`), `color-1`, `color-2`, `color-3` (gold variations)
- **Navbar:** Dark background (`#1d2227`), gold brand text (`#cbb88c`), white nav links, scrolled state with white background
- **Hero:** Full-width background image, dark semi-transparent overlay, white text, two CTA buttons (primary blue `#007bff` + white outline)
- **Footer:** Dark background (`#1d2227`), gold link accents, white text

---

## Requirements

### Feature: CounselHub Landing Page

#### Scenario: Top Bar

- **GIVEN** the user visits the CounselHub landing page
- **THEN** they should see a dark top bar with phone number and email on the left
- **AND** social media icon links (Facebook, Twitter, Instagram, Dribbble) on the right

#### Scenario: Navigation Bar

- **GIVEN** the user views the navbar
- **THEN** they should see a dark sticky navigation bar with the brand name "CounselHub" in gold (`#cbb88c`)
- **AND** navigation links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact
- **AND** a mobile hamburger menu toggle on small viewports
- **WHEN** the user scrolls past the hero
- **THEN** the navbar should transition to a white background with dark text

#### Scenario: Hero Section

- **GIVEN** the user views the hero section
- **THEN** they should see a full-width hero with a dark overlay over a background image
- **AND** a heading "Don't Feel Helpless We Fight for Justice"
- **AND** a descriptive paragraph
- **AND** two CTA buttons: "Contact us" (primary style) and "Read more" (white outline)
- **AND** a video play icon linking to a video popup

#### Scenario: Feature Strip / Intro Section

- **GIVEN** the user scrolls to the intro section
- **THEN** they should see a 4-column feature strip with icon boxes
- **AND** each box should have an icon, heading, and short description
- **AND** the boxes should be titled: "Expert Attorneys", "Case Dismissed", "Court Performance", and a fourth feature
- **AND** the first box should have a dark background, the remaining three should have colored accent backgrounds

#### Scenario: About Section

- **GIVEN** the user scrolls to the about section
- **THEN** they should see a split layout: background image/video on the left, content on the right
- **AND** the right side should have a light gray background box with a subheading "Welcome to CounselHub"
- **AND** a heading "Why to Put Your Trust In CounselHub"
- **AND** a 2x2 grid of service features: "Expert Attorneys", "Great Discount", "Legal Advisory", "Quick Charges"
- **AND** each feature should have an icon and short description

#### Scenario: Counter / Statistics Section

- **GIVEN** the user scrolls to the counter section
- **THEN** they should see a statistics bar with a background image
- **AND** four numbered counters: e.g. "350" Happy Clients, "450" Cases Won, "15" Years Experience, "10" Attorneys
- **AND** numbers should animate on scroll into view

#### Scenario: Practice Areas Section

- **GIVEN** the user scrolls to the practice areas section
- **THEN** they should see a heading "Our Practice Area"
- **AND** a grid of 6 practice area cards with icons
- **AND** the cards should be: Family Law, Business Law, Insurance Law, Education Law, Real Estate Law, Criminal Law
- **AND** each card should have an icon, title, and short description

#### Scenario: Cases Gallery Section

- **GIVEN** the user scrolls to the cases section
- **THEN** they should see a heading "Recently Won Cases"
- **AND** a gallery grid of case images with overlay titles
- **AND** 7 case items arranged in a masonry-style grid

#### Scenario: Testimonials Section

- **GIVEN** the user scrolls to the testimonials section
- **THEN** they should see a testimonial carousel/slider with a background image and dark overlay
- **AND** each testimonial should have an avatar image, a quote, the person's name, and role
- **AND** the carousel should auto-rotate between testimonials

#### Scenario: Appointment / CTA Section

- **GIVEN** the user scrolls to the appointment section
- **THEN** they should see a call-to-action section with a background image and dark overlay
- **AND** a heading inviting users to schedule a consultation
- **AND** a CTA button to contact or book

#### Scenario: Blog Section

- **GIVEN** the user scrolls to the blog section
- **THEN** they should see a heading "Recent Blog"
- **AND** 3 blog entry cards in a row
- **AND** each card should have a featured image, date, title, author, and short excerpt

#### Scenario: Footer

- **GIVEN** the user scrolls to the page footer
- **THEN** they should see a dark background footer with 5 columns
- **AND** columns for: About CounselHub (description + social icons), Practice Areas (links), Quick Links, Recent Blog entries, and Contact Info (address, phone, email)
- **AND** a copyright bar at the bottom
- **AND** the mandatory attribution link to **Component Dock** (`https://www.componentdock.com/`)

---

## Verification Checklist

- [ ] Top bar with phone + email + social icons renders
- [ ] Navbar sticky, gold brand, all nav links present, mobile toggle works
- [ ] Navbar transitions on scroll (dark → light background)
- [ ] Hero full-width with overlay, heading, subtext, two CTA buttons, video icon
- [ ] Feature strip 4-column with icons and descriptions
- [ ] About section split layout, services grid, correct headings
- [ ] Counter section with 4 animated stats
- [ ] Practice Areas grid with 6 cards and icons
- [ ] Cases gallery grid with 7 items
- [ ] Testimonials carousel with auto-rotation
- [ ] Appointment CTA section with background image
- [ ] Blog section with 3 entry cards
- [ ] Footer 5-column, dark background, Component Dock link
- [ ] All placeholder images use deterministic Picsum seeds
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
