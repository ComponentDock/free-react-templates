# Rankforge — Implementation Tasks

Source design: **Seos** (`https://colorlib.com/wp/template/seos/`) → recreation name **rankforge**. Shipped at https://rankforge.free.componentdock.com.

Scope: A SEO Agency template with hero, what we do, we create steps, generating customers, pricing and portfolio sections.

## Component breakdown

Render order as composed in `apps/rankforge/src/App.tsx`:

### 1. Navbar
- The system SHALL render a transparent navbar with the site name "RankForge", section links (Home, About Us, Services, Contact, Blog), and a "Contact Us" CTA button. The navbar becomes sticky on scroll.
- Scenario — Desktop navigation:
  - **GIVEN** the page is rendered
  - **WHEN** the navbar is displayed
  - **THEN** it SHALL show the site name "RankForge" linking to `#home`
  - **AND** it SHALL show links to Home, About Us, Services, Contact, and Blog
  - **AND** it SHALL show a "Contact Us" button linking to `#contact`

### 2. Hero
- The system SHALL render a full-width hero with a left-right two-column layout. The left column contains an h1 heading "We Collect High Quality Leads", a description paragraph, and a "Contact Us" button. The right column shows a decorative illustration image.
- Scenario — Hero content:
  - **GIVEN** the hero section is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the heading "We Collect High Quality Leads"
  - **AND** it SHALL display a description paragraph
  - **AND** it SHALL display a "Contact Us" link
  - **AND** it SHALL display a hero image from picsum.photos

### 3. WhatWeDo
- The system SHALL render a "What We Do" section with section title "What We Will Do For Your Business" and 3 service cards in a row: Link Building, Content Marketing (active/highlighted), and On Page SEO. Each card has an icon, title, description, and a "get started" link with arrow.
- Scenario — Three service cards:
  - **GIVEN** the What We Do section is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the heading "What We Will Do For Your Business"
  - **AND** it SHALL display three service cards: Link Building, Content Marketing, On Page SEO
  - **AND** it SHALL display "get started" links for each card

### 4. StepsSection
- The system SHALL render a two-column layout with an image on the left and a heading "We Create a Steps to Build a Successful Digital Product", a description paragraph, and a "Contact Us" button on the right.
- Scenario — Steps split layout:
  - **GIVEN** the Steps section is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the heading about building a successful digital product
  - **AND** it SHALL display a description paragraph
  - **AND** it SHALL display a "Contact Us" link
  - **AND** it SHALL display an image from picsum.photos

### 5. GeneratingCustomers
- The system SHALL render a "Generating Customers" section with section title "Generating New Customers Via Online Mode" and a 2x2 grid of feature items: All Sizes Business, Awesome Results, Keep you in the Loop, Significant ROI. Each item has an icon, title, and description in a horizontal layout.
- Scenario — Four customer features:
  - **GIVEN** the Generating Customers section is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the heading "Generating New Customers Via Online Mode"
  - **AND** it SHALL display four feature items: All Sizes Business, Awesome Results, Keep you in the Loop, Significant ROI

### 6. Pricing
- The system SHALL render a "Pricing" section with section title "Choose Your Very Best Pricing Plan" and 3 pricing cards: $5/mo, $20/mo (active/highlighted), and $30/mo. Each card has an icon, price, feature list, and a "Get Started" button.
- Scenario — Three pricing tiers:
  - **GIVEN** the Pricing section is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the heading "Choose Your Very Best Pricing Plan"
  - **AND** it SHALL display three pricing cards with prices $5, $20, and $30
  - **AND** each card SHALL list features: Increase traffic 50%, Social Media Marketing, 10 Free Optimization, 24/7 support
  - **AND** the $20/mo card SHALL be visually highlighted as the active plan

### 7. Portfolio
- The system SHALL render a "Portfolio" section with section title "Visit Some Of Our Awesome Stuffs" and 4 portfolio images in a row, each with overlay text showing a domain name and category.
- Scenario — Four portfolio items:
  - **GIVEN** the Portfolio section is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the heading "Visit Some Of Our Awesome Stuffs"
  - **AND** it SHALL display 4 portfolio images from picsum.photos

### 8. Testimonials
- The system SHALL render a "Testimonials" section with section title "What Client Say About Us" and a testimonial card with a quote, avatar image, name "Olivia James", and role "UI/UX Designer".
- Scenario — Testimonial card:
  - **GIVEN** the Testimonials section is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the heading "What Client Say About Us"
  - **AND** it SHALL display a quote text
  - **AND** it SHALL display the name "Olivia James" and role "UI/UX Designer"
  - **AND** it SHALL display an avatar image from picsum.photos

### 9. BlogTips
- The system SHALL render a "Blog/Tips" section with section title "Tips and Tricks From Our Experts" and 3 blog cards with an image, title, "Continue Reading" link, and date.
- Scenario — Three blog cards:
  - **GIVEN** the Blog/Tips section is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the heading "Tips and Tricks From Our Experts"
  - **AND** it SHALL display 3 blog cards with titles, images, and "Continue Reading" links
  - **AND** it SHALL display dates for each card

### 10. CtaBanner
- The system SHALL render a CTA banner with a gradient background (pink to purple), heading "Have project in mind?", description text, and a white "Contact Us" button.
- Scenario — CTA content:
  - **GIVEN** the CTA banner is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the heading "Have project in mind?"
  - **AND** it SHALL display a description paragraph
  - **AND** it SHALL display a "Contact Us" link

### 11. Footer
- The system SHALL render a dark footer with logo, address, social icons, three link columns (Quick Links, Support, Core Features), and a copyright line linking to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer content:
  - **GIVEN** the footer is rendered
  - **WHEN** the user views the page
  - **THEN** it SHALL display the "RankForge" logo text
  - **AND** it SHALL display address, phone, and email information
  - **AND** it SHALL display Quick Links, Support, and Core Features columns
  - **AND** it SHALL display social media icon links
  - **AND** it SHALL display a copyright line with a link to componentdock.com branded as "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/rankforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/rankforge/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/rankforge` ships on https://rankforge.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/rankforge/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/rankforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rankforge/public/CNAME` = `rankforge.free.componentdock.com`
  and the package `homepage` = `https://rankforge.free.componentdock.com`.
