# Cabspot — Implementation Tasks

Source design: **Taxi** (`https://colorlib.com/wp/template/taxi/`) → recreation name **cabspot**. Shipped at https://cabspot.free.componentdock.com.

Scope: CabSpot is a single-page taxi booking website template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/cabspot/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Mobile · CabSpot

### 2. Hero
- The page SHALL display a full-screen hero banner with a dark overlay background, a heading "Need a ride? Just Call", phone number "911 999 911", a "Call for Taxi" CTA button, and a booking form with name, email, phone, from/to selects, date/time, and "Make Reservation" button.
- Scenario — Page loads with hero banner:
  - **GIVEN** I am on the CabSpot homepage
  - **WHEN** the page finishes loading
  - **THEN** I see the hero section with heading, phone, CTA button, and booking form
- Scenario — Booking form accepts input:
  - **GIVEN** I see the booking form
  - **WHEN** I type in the name, email, and phone fields
  - **AND** I select destinations from the dropdowns
  - **AND** I set a date and time
  - **THEN** the form fields reflect my input

### 3. About
- The page SHALL display an about section with a heading "Globally Connected by Large Network", descriptive text, and a "Get Details" CTA button.
- Scenario — About section renders:
  - **GIVEN** I scroll to the about section
  - **WHEN** the section is visible
  - **THEN** I see the heading, descriptive text, and CTA button

### 4. Services
- The page SHALL display a services section with 3 cards: "Taxi Service", "Office Pick-ups", and "Event Transportation", each with an icon and description.
- Scenario — Services section renders 3 cards:
  - **GIVEN** I scroll to the services section
  - **WHEN** the section is visible
  - **THEN** I see 3 service cards with titles and descriptions

### 5. Gallery
- The page SHALL display an image gallery grid with 6 images that have hover effects.
- Scenario — Gallery renders 6 images:
  - **GIVEN** I scroll to the image gallery section
  - **WHEN** the section is visible
  - **THEN** I see a grid of 6 images

### 6. Reviews
- The page SHALL display a reviews section with customer testimonials including names and star ratings.
- Scenario — Reviews section renders testimonials:
  - **GIVEN** I scroll to the reviews section
  - **WHEN** the section is visible
  - **THEN** I see customer reviews with names and star ratings

### 7. CtaBanner
- The page SHALL display a full-width CTA banner with a yellow overlay background, heading "Experience Great Support", and a "Reach Our Support Team" button.
- Scenario — CTA banner renders:
  - **GIVEN** I scroll to the call-to-action section
  - **WHEN** the section is visible
  - **THEN** I see the yellow overlay banner with heading and button

### 8. Blog
- The page SHALL display a blog section with 2 blog post cards, each with an image, tags, title, excerpt, and date.
- Scenario — Blog section renders 2 cards:
  - **GIVEN** I scroll to the blog section
  - **WHEN** the section is visible
  - **THEN** I see 2 blog post cards

### 9. Footer
- The page SHALL display a footer on a black background with Quick Links, Features, Resources, Follow Us, and Newsletter sections. The footer SHALL link to https://www.componentdock.com/ as "Component Dock". The app code SHALL NOT reference ColorLib.
- Scenario — Footer renders with Component Dock link:
  - **GIVEN** I scroll to the footer
  - **WHEN** the footer is visible
  - **THEN** I see all footer sections and the Component Dock link
- Scenario — No ColorLib references in app code:
  - **GIVEN** I search the app source files
  - **WHEN** I look for "colorlib" references
  - **THEN** no matches are found in apps/cabspot/src/ or apps/cabspot/index.html
  - [x] Hero banner renders with dark overlay on background image
  - [x] Booking form has all fields: name, email, phone, from, to, date/time
  - [x] Form validates required fields and shows errors
  - [x] Navigation links scroll to corresponding sections
  - [x] About section with heading, text, and CTA button
  - [x] Services section with 3 colored accent cards
  - [x] Image gallery grid with hover effects
  - [x] Reviews/testimonials section
  - [x] CTA banner with yellow overlay
  - [x] Blog section with 2 post cards
  - [x] Footer on black background with Component Dock link
  - [x] Poppins font loaded from Google Fonts
  - [x] Brand color #f9d700 used for buttons and highlights
  - [x] Mobile responsive (hamburger menu, stacked layout)
  - [x] No references to ColorLib in app code (only in spec/TEMPLATES.md/PR)
  - [x] Footer links to https://www.componentdock.com/

### Cross-cutting requirements

- **Navigation menu works** — The page SHALL display a fixed top navigation bar with "CabSpot" logo and nav links (Home, About, Services, Gallery, Blog, Contact). The mobile menu SHALL toggle open/closed and close when a link is clicked. The nav SHALL change appearance on scroll.
  - Scenario — Desktop navigation renders all links: **GIVEN** I view the page; **WHEN** I look at the navigation; **THEN** all navigation links are present
  - Scenario — Mobile menu toggles: **GIVEN** I am on a mobile viewport; **WHEN** I click the hamburger menu button; **THEN** the mobile navigation opens; **AND** clicking a link closes the mobile menu
  - Scenario — Scroll changes nav appearance: **GIVEN** I am on the page; **WHEN** I scroll past 50px; **THEN** the navigation bar gets a white background with shadow

## Verification

- [x] `apps/cabspot` ships on https://cabspot.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cabspot/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cabspot/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cabspot/public/CNAME` = `cabspot.free.componentdock.com`
  and the package `homepage` = `https://cabspot.free.componentdock.com`.
