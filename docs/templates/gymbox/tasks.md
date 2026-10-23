# Gymbox — Implementation Tasks

Source design: **Gym2** (`https://colorlib.com/wp/template/gym2/`) → recreation name **gymbox**. Shipped at https://gymbox.free.componentdock.com.

Scope: GymBox is a free React fitness and gym landing page template. It recreates the ColorLib "Gym2" design with a sticky header, hero banner, category cards, feature highlights, a promotional offer section, pricing plans, a photo gallery, team/trainer profiles, a call-to-action section, and a footer with newsletter signup.

## Component breakdown

Render order as composed in `apps/gymbox/src/App.tsx`:

### 1. Header
- The header SHALL be sticky with a logo, horizontal navigation links, and a "Join Us" call-to-action button.
- Scenario — Desktop navigation links:
  - **WHEN** the user views the page on desktop
  - **THEN** the nav contains links for Home, Categories, Features, Offer, Pricing, Gallery, Team, and Contact
  - **AND** a "Join Us" button is visible in the header
- Scenario — Mobile hamburger toggle:
  - **WHEN** the user clicks the hamburger menu button on mobile
  - **THEN** the mobile navigation becomes visible
  - **AND** the button `aria-expanded` attribute toggles to true

### 2. Hero
- The hero section SHALL display a headline, subtitle, and primary call-to-action button.
- Scenario — Hero content renders:
  - **WHEN** the user views the hero section
  - **THEN** a headline is visible (e.g., "Get In Shape With GymBox")
  - **AND** a subtitle/description is visible below the headline
  - **AND** a CTA button is visible
- Scenario — Hero CTA button link:
  - **WHEN** the user clicks the hero CTA button
  - **THEN** the page scrolls to the pricing or relevant section

### 3. Categories
- The categories section SHALL display two category cards: "For Girls" and "For Boys".
- Scenario — Two category cards render:
  - **WHEN** the user views the categories section
  - **THEN** exactly 2 category cards are displayed
  - **AND** one card is labeled "For Girls"
  - **AND** one card is labeled "For Boys"
- Scenario — Each category card has an image and link:
  - **WHEN** the user views the categories section
  - **THEN** each card displays a background image
  - **AND** each card has a heading and a link/button

### 4. Features
- The features section SHALL display exactly 4 feature cards.
- Scenario — Four feature cards render:
  - **WHEN** the user views the features section
  - **THEN** exactly 4 feature cards are displayed
  - **AND** each card has an icon or image, a title, and a description

### 5. Offer
- The offer section SHALL display a promotional banner advertising a 50% discount.
- Scenario — Offer promotion content:
  - **WHEN** the user views the offer section
  - **THEN** the text "50%" is prominently displayed
  - **AND** the offer description references a discount or special promotion
  - **AND** a CTA button is visible (e.g., "Join Now" or "Claim Offer")

### 6. Pricing
- The pricing section SHALL display exactly 3 pricing plan cards.
- Scenario — Three pricing plans render:
  - **WHEN** the user views the pricing section
  - **THEN** exactly 3 pricing plan cards are displayed
  - **AND** each card shows a plan name, price, feature list, and a CTA button
- Scenario — Pricing plan details:
  - **WHEN** the user views a pricing plan card
  - **THEN** the card includes a heading (plan name)
  - **AND** a price amount
  - **AND** a list of included features
  - **AND** a call-to-action button (e.g., "Join Now")

### 7. Gallery
- The gallery section SHALL display exactly 6 images in a grid layout.
- Scenario — Six gallery images render:
  - **WHEN** the user views the gallery section
  - **THEN** exactly 6 images are displayed
  - **AND** each image has an alt attribute for accessibility

### 8. Team
- The team section SHALL display exactly 3 trainer profile cards.
- Scenario — Three trainer cards render:
  - **WHEN** the user views the team section
  - **THEN** exactly 3 trainer cards are displayed
  - **AND** each card shows a trainer photo, name, and specialty/role
  - **AND** each card has social media icon links

### 9. Cta
- The call-to-action section SHALL display a prominent CTA block to encourage sign-up.
- Scenario — CTA content:
  - **WHEN** the user views the CTA section
  - **THEN** a headline and/or message is visible
  - **AND** a CTA button is displayed

### 10. Footer
- The footer SHALL contain a Component Dock link, a newsletter subscription form, and social media links.
- Scenario — Footer links to Component Dock:
  - **WHEN** the user scrolls to the footer
  - **THEN** a link to https://www.componentdock.com/ exists
  - **AND** the link text is "Component Dock"
  - **AND** the link opens in a new tab
- Scenario — Newsletter form:
  - **WHEN** the user views the footer
  - **THEN** a newsletter form with an email input and a submit button is visible
  - **AND** submitting the form clears the email input field
- Scenario — Social media links:
  - **WHEN** the user views the footer
  - **THEN** social media icon links are present (e.g., Facebook, Twitter, Instagram, LinkedIn)

### Cross-cutting requirements

- **Page renders all sections in order** — The template SHALL display all sections in the following order: Header, Hero, Categories, Features, Offer, Pricing, Gallery, Team, Cta, Footer.
  - Scenario — All sections visible on load: **WHEN** the user visits the GymBox template; **THEN** all 10 sections are rendered in the page; **AND** the page title is "GymBox — Fitness & Gym Landing Template"
  - Scenario — Section order is correct: **WHEN** the user views the rendered page; **THEN** Header appears first (top of page); **AND** Hero appears after Header; **AND** Categories appears after Hero; **AND** Features appears after Categories; **AND** Offer appears after Features; **AND** Pricing appears after Offer; **AND** Gallery appears after Pricing; **AND** Team appears after Gallery; **AND** Cta appears after Team; **AND** Footer appears last (bottom of page)
- **Accessibility** — The template SHALL use semantic HTML and include appropriate ARIA attributes for interactive elements.
  - Scenario — Semantic HTML structure: **WHEN** the page is rendered; **THEN** the page uses `<header>`, `<main>`, `<section>`, `<nav>`, and `<footer>` landmark elements; **AND** headings follow a logical hierarchy (h1 → h2 → h3)
  - Scenario — ARIA labels on interactive elements: **WHEN** the page is rendered; **THEN** the mobile menu toggle has an `aria-label` attribute; **AND** the newsletter form has an accessible label for the email input; **AND** social media links have `aria-label` attributes describing their destination; **AND** all images have `alt` attributes
  - Scenario — Keyboard navigation: **WHEN** the user navigates the page using only the keyboard; **THEN** all interactive elements (links, buttons, form inputs) are focusable; **AND** focus styles are visible
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/gymbox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/gymbox/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/gymbox` ships on https://gymbox.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/gymbox/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/gymbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gymbox/public/CNAME` = `gymbox.free.componentdock.com`
  and the package `homepage` = `https://gymbox.free.componentdock.com`.
