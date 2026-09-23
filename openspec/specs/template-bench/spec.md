# Template: Bench (Law Firm / Attorney Landing)

## Purpose

Bench is a single-page law firm landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Judicial"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source mapping: `apps/bench` recreates
https://colorlib.com/wp/template/judicial/ (ColorLib "Judicial" — law firm /
attorney website template).

## Design reference (replication findings)

- **Original:** ColorLib "Judicial" — law firm / attorney website template
  (source: https://colorlib.com/wp/template/judicial/).
- **Preview URL:** https://preview.colorlib.com/theme/judicial/ (HTTP 200,
  analyzed 2026-08-08). Live DOM parsed for section structure, copy, and
  design tokens. TEMPLATES.md screenshot
  (`judicial-free-template.jpg`) reviewed via browser vision for visual design.
- **Section order (1:1, from the live preview DOM):**
  1. **Navbar** (absolute, transparent over hero): "BENCH." logo (white
     uppercase with orange dot), right-aligned nav links — Home, About,
     Practice Area, Case Studies, Contact. Mobile hamburger toggle.
  2. **Hero** (`site-blocks-cover overlay`): Full-width background image with
     dark semi-transparent overlay, AOS fade animation. Centered content:
     H1 "We Fight For Justice" (white, Oswald), paragraph subtitle, gold
     "Get Started" primary button.
  3. **About / Introduction** (`section-1`, white background): 3-column
     Bootstrap grid — left: square portrait image; center: text with
     orange drop-cap first letter; right: two paragraphs of body text.
     `col-lg-4` layout.
  4. **Featured Practice Area** (`section-2`, dark background `#25262a`):
     4-column `no-gutters` grid — left column: section title "Featured
     Practice Area" (white heading + description + "View All" link in gold);
     three practice area cards with background images, overlay content
     (icon + heading + description): Business Law, Criminal Law, Tax Law.
     Cards are full-height `h-100`.
  5. **Areas of Expertise** (`section-3`, white background): Centered H2
     "Areas of Expertise". 3×2 grid of service items, each with a left
     icon (`flaticon`) + right heading + description. Six items total
     (all labeled "Insurance Matters" in placeholder — implementer should
     use varied legal practice names).
  6. **Why Clients Choose Us** (`section-4`, parallax background image):
     2-column layout — left: H2 "Why Clients Choose Us?", description
     paragraph, gold "Free Consultation" button; right: 2×2 grid of stat
     cards, each with icon + big number + label: 89% Successful Cases,
     421 Trusted Clients, 392 Expert Lawyers, 913 Honors and Awards.
  7. **Quality Service + Contact Form** (`section-5`, white background):
     2-column — left: H2 "We Are An International Law Group, Provides High
     Quality Service" (with gold "Quality Service" accent), paragraph, gold
     "Call Now For Immediate Assistance" call-now box; right: "Request a
     free consultation" form card with Name, Phone, Case Description fields
     and gold "Send Request" button. Forms are `border-radius: 0`.
  8. **Testimonials + FAQ** (`section-6`, white background): 2-column — left:
     H2 "Happy Clients Says" with carousel/slider (avatar + name + title
     + blockquote); right: H2 "Frequently Ask Questions" with 4 accordion
     items (Bootstrap collapse): "Law assistance to my business", "The
     newest part of my legislation", "Are you an international law?",
     "How the system works?".
  9. **Social Bar** (`bg-primary` full-width): 6 equal-width columns with
     social icons (Facebook, Twitter, Instagram, LinkedIn, Pinterest,
     YouTube) in white on gold background.
  10. **Footer** (`site-footer`, dark background): 3-column — left: "About
      Deejee" blurb + email subscribe form; center: Navigation links
      (Home, Practice Area, Case Studies, Careers, About Us, Privacy Policy,
      Contact Us, Membership) + "Follow Us" social icons; right: "More
      Templates" links + copyright with Component Dock link.

### Design tokens (extracted from preview stylesheet 2026-08-08)

- **Brand gold/amber:** `#cea15a` — primary buttons, links, drop-cap letter,
  accent text (`text-primary`), footer heading underlines, form focus borders,
  "View All" link, social bar background.
- **Dark charcoal:** `#25262a` — featured practice area section background
  (`section-2`), site footer background.
- **Orange accent (drop cap):** `#fd7e14` — drop-cap first letter in
  introduction section (Bootstrap `text-primary` override on `.dropcap`).
- **Neutrals:** white `#fff` (hero text, headings on dark), `#f8f9fa`
  (light section alt), `#737373` (footer body text), `#000` (footer headings,
  body text), `#343a40` (dropdown text), `#edf0f5` (dropdown borders).
- **Fonts:** **"Oswald"** 400–700 (display headings — H1, H2, H3, H5),
  **"Nunito Sans"** 200–900 (body text — line-height 1.7, font-size 1.1rem).
  Both via Google Fonts / Cloudflare font-face.
- **Buttons:** Sharp corners (`border-radius: 0`), solid gold primary
  (`background: #cea15a`, `color: #fff`), no hover shadow, smooth 0.3s
  transition. Form controls also `border-radius: 0` with gold focus border.
- **Cards/sections:** No rounded corners anywhere. `site-section` padding:
  `3em 0` mobile, `7em 0` desktop. Footer padding: `4em 0` / `7em 0`.
- **Section backgrounds:** White ↔ dark alternation. Hero uses full-width
  background image with dark overlay. Practice areas use dark charcoal.
  "Why Clients Choose Us" uses parallax background image. Social bar is
  solid gold. Footer is dark.
- **Animations:** AOS (Animate On Scroll) fade and fade-up with delays.
  Navbar sticky behavior (absolute over hero, fixed on scroll).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with the brand
logo and navigation links.

#### Scenario: Navbar content and layout

- **GIVEN** the Bench page is rendered
- **WHEN** the navbar is visible
- **THEN** the logo text "BENCH." is displayed in uppercase white Oswald font
  with a gold dot (period) after it
- **AND** navigation links are displayed: Home, About, Practice Area, Case
  Studies, Contact
- **AND** links are white/semi-transparent on the dark hero background
- **AND** active link (Home) is solid white

#### Scenario: Navbar mobile responsiveness

- **GIVEN** the viewport is below the desktop breakpoint
- **WHEN** the navbar renders
- **THEN** a hamburger menu toggle is displayed
- **AND** the navigation links are hidden until the toggle is activated

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, heading,
subtitle, and CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the user views the section
- **THEN** a large heading "We Fight For Justice" is displayed in white
  Oswald font
- **AND** a subtitle paragraph is displayed below the heading
- **AND** a gold "Get Started" button is displayed below the subtitle
- **AND** the background is a full-width image with a dark semi-transparent
  overlay

#### Scenario: Hero CTA button

- **GIVEN** the hero section is rendered
- **WHEN** the user clicks the "Get Started" button
- **THEN** the button has gold (`#cea15a`) background, white text, and no
  border radius

### Requirement: About / Introduction section

The system SHALL render a three-column introduction section below the hero.

#### Scenario: About section layout

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls below the hero
- **THEN** a three-column layout is displayed on desktop
- **AND** the left column contains a square portrait image
- **AND** the center column contains text with an orange drop-cap first
  letter
- **AND** the right column contains two paragraphs of body text

### Requirement: Featured Practice Area section

The system SHALL render a dark-background section showcasing practice areas
with background images.

#### Scenario: Practice areas layout

- **GIVEN** the featured practice area section is rendered
- **WHEN** the user views the section
- **THEN** a "Featured Practice Area" title column is displayed on the left
  with white heading, description, and a gold "View All" link
- **AND** three practice area cards are displayed: Business Law, Criminal
  Law, Tax Law
- **AND** each card has a background image with overlay content (icon,
  heading, description)
- **AND** the section background is dark charcoal (`#25262a`)

#### Scenario: Practice area cards

- **GIVEN** a practice area card is rendered
- **WHEN** the user views the card
- **THEN** it displays an icon, a heading, and a description paragraph
- **AND** the card fills its column height (`h-100`)

### Requirement: Areas of Expertise section

The system SHALL render a 3×2 grid of service items with icons.

#### Scenario: Expertise grid

- **GIVEN** the areas of expertise section is rendered
- **WHEN** the user views the section
- **THEN** a centered heading "Areas of Expertise" is displayed
- **AND** six service items are displayed in a 3×2 grid
- **AND** each item has a left-aligned icon and right-aligned heading +
  description

### Requirement: Why Clients Choose Us section

The system SHALL render a parallax-background section with stats and a CTA.

#### Scenario: Stats section

- **GIVEN** the why-clients section is rendered
- **WHEN** the user views the section
- **THEN** a left column displays H2 "Why Clients Choose Us?", description
  text, and a gold "Free Consultation" button
- **AND** a right column displays a 2×2 grid of stat cards

#### Scenario: Stat cards

- **GIVEN** the stats section is rendered
- **WHEN** the user views the stat cards
- **THEN** four stats are displayed: 89% Successful Cases, 421 Trusted
  Clients, 392 Expert Lawyers, 913 Honors and Awards
- **AND** each card has an icon, a large number, and a caption label
- **AND** the section uses a parallax background image

### Requirement: Quality Service + Contact Form section

The system SHALL render a two-column section with a heading and consultation
form.

#### Scenario: Quality service content

- **GIVEN** the quality service section is rendered
- **WHEN** the user views the section
- **THEN** a left column displays the heading with gold "Quality Service"
  accent text
- **AND** a "Call Now For Immediate Assistance" call-to-action box is
  displayed

#### Scenario: Consultation form

- **GIVEN** the consultation form is rendered
- **WHEN** the user views the form
- **THEN** a "Request a free consultation" heading is displayed
- **AND** input fields are present: Name (text), Phone (text), Case
  Description (textarea)
- **AND** a gold "Send Request" submit button is displayed
- **AND** form controls have no border radius (sharp corners)

### Requirement: Testimonials + FAQ section

The system SHALL render a two-column section with testimonials and FAQ
accordion.

#### Scenario: Testimonials

- **GIVEN** the testimonials section is rendered
- **WHEN** the user views the left column
- **THEN** H2 "Happy Clients Says" is displayed
- **AND** a carousel/slider shows testimonial cards with avatar image,
  client name, title, and blockquote text

#### Scenario: FAQ accordion

- **GIVEN** the FAQ section is rendered
- **WHEN** the user views the right column
- **THEN** H2 "Frequently Ask Questions" is displayed
- **AND** four accordion items are displayed with questions and answers
- **AND** the first item is expanded by default
- **AND** clicking a question toggles its answer visibility

### Requirement: Social bar

The system SHALL render a full-width social media bar with icons.

#### Scenario: Social bar content

- **GIVEN** the social bar is rendered
- **WHEN** the user views the bar
- **THEN** six social icons are displayed in equal-width columns: Facebook,
  Twitter, Instagram, LinkedIn, Pinterest, YouTube
- **AND** icons are white on a gold (`#cea15a`) background

### Requirement: Footer

The system SHALL render a dark footer with about text, navigation, and
subscription form.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **WHEN** the user views the footer
- **THEN** a three-column layout is displayed: about blurb + email subscribe,
  navigation links + follow-us social icons, additional links
- **AND** the footer background is dark
- **AND** heading text is white with gold underline accents
- **AND** body text is gray (`#737373`)

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is rendered
- **WHEN** the user views the footer
- **THEN** a link to `https://www.componentdock.com/` is present, labeled
  "Component Dock"

#### Scenario: Footer email subscribe

- **GIVEN** the footer subscribe form is rendered
- **WHEN** the user views the form
- **THEN** an email input with placeholder "Enter your email" is displayed
- **AND** a gold "Subscribe" button is displayed

### Requirement: Responsive design

The system SHALL provide responsive layouts that adapt to different viewport
sizes.

#### Scenario: Mobile layout

- **GIVEN** the viewport is below 768px
- **WHEN** the page renders
- **THEN** multi-column layouts collapse to single-column
- **AND** the navbar shows a hamburger toggle instead of inline links
- **AND** section padding is reduced (3em vs 7em desktop)

### Requirement: Animations

The system SHALL use scroll-triggered animations for content sections.

#### Scenario: AOS fade-in

- **GIVEN** a content section is scrolled into view
- **WHEN** the section enters the viewport
- **THEN** content fades in with a subtle upward animation
- **AND** the hero uses a fade animation on load

## Verification checklist

- [ ] All 10 sections rendered in correct order
- [ ] Navbar: transparent over hero, logo with gold dot, 5 nav links
- [ ] Hero: background image, H1, subtitle, gold CTA button (no radius)
- [ ] About: 3-column grid, image left, drop-cap center, text right
- [ ] Featured Practice Area: dark background, title column + 3 image cards
- [ ] Areas of Expertise: centered heading, 3×2 icon grid
- [ ] Why Clients Choose Us: parallax bg, heading + CTA left, 2×2 stats right
- [ ] Quality Service: heading with gold accent, call-now box, contact form
- [ ] Testimonials + FAQ: carousel left, accordion right (first item open)
- [ ] Social bar: 6 equal columns, gold background, white icons
- [ ] Footer: 3-column dark footer, Component Dock link, subscribe form
- [ ] Design tokens: gold `#cea15a`, charcoal `#25262a`, orange `#fd7e14`,
  Oswald headings, Nunito Sans body, no border-radius on buttons/forms
- [ ] Responsive: mobile hamburger, single-column collapse, reduced padding
- [ ] AOS animations on content sections
- [ ] No ColorLib references in app code (provenance only in spec + PR)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `bench.free.componentdock.com`
- [ ] `package.json` `homepage` is `https://bench.free.componentdock.com`
- [ ] 100% test coverage (lines, functions, branches, statements)
