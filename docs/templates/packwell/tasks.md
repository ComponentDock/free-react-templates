# Packwell — Implementation Tasks

Source design: **Carries** (`https://colorlib.com/wp/template/carries/`) → recreation name **packwell**. Shipped at https://packwell.free.componentdock.com.

Scope: A logistics and freight services website template. Recreation of ColorLib **Carries**.

## Component breakdown

Render order as composed in `apps/packwell/src/App.tsx`:

### 1. Navbar
- Users SHALL see a sticky navbar with the PackWell logo, navigation links (Home, About, Services, Blog, Contact), and icon buttons (Search, User, Shopping Bag).
- Scenario — Navbar loads:
  - **WHEN** the user visits PackWell
  - **THEN** the PackWell brand name is displayed
  - **AND** navigation links are visible
  - **AND** the navbar is sticky on scroll
- Scenario — Mobile menu toggles:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu opens
  - **AND** when a nav link is clicked the menu closes

### 2. Hero
- Users SHALL see a full-width hero section with background images, a heading "WE MAKE STRONGEST SERVICE ABOVE THE WORLD", description text, and two CTA buttons ("Our Service" and "Get A Quote").
- Scenario — Hero section loads:
  - **WHEN** the user visits PackWell
  - **THEN** a full-width hero section is visible
  - **AND** the heading "WE MAKE STRONGEST SERVICE ABOVE THE WORLD" is displayed
  - **AND** a "Get A Quote" button is visible
  - **AND** the hero has a dark overlay on the background image

### 3. BlogCards
- Users SHALL see three service cards (Ocean Freight, Air Freight, Street Freight) each with an icon, title, description, and Read More link.
- Scenario — Service cards load:
  - **WHEN** the user scrolls to the blog cards section
  - **THEN** three cards are displayed: Ocean Freight, Air Freight, Street Freight
  - **AND** each card has a circular icon, title, and description
  - **AND** each card has a Read More link

### 4. About
- Users SHALL see a split layout with a "Get A Quote" form on the left and about content with stats on the right.
- Scenario — About section loads:
  - **WHEN** the user scrolls to the about area
  - **THEN** the heading "We have 25 years experience in this passion" is visible
  - **AND** a Get A Quote form with fields (Name, Email, Phone, Type, Quantity, Destination, Message) is present
  - **AND** stats are displayed: 120 Project Done, 100 Happy Clients, 30 Team Members
- Scenario — Quote form submits:
  - **WHEN** the user fills in the form and clicks Send
  - **THEN** a confirmation message is displayed

### 5. ServiceArea
- Users SHALL see a dark section with "Our Service" heading, service description, and "Why Choose Us?" feature list, plus four service cards below.
- Scenario — Service area loads:
  - **WHEN** the user scrolls to the service area
  - **THEN** the heading "Our Service" is displayed
  - **AND** a "Why Choose Us?" section with check items is visible
  - **AND** four service cards are shown: Ware House, Road Freight, Sea Freight, Air Freight

### 6. Promo
- Users SHALL see four feature items (Our Location, Latest News, 24/7 Support, Fast Delivery) and a dark parallax CTA banner.
- Scenario — Promo area loads:
  - **WHEN** the user scrolls to the promo area
  - **THEN** four feature highlights are displayed with icons
  - **AND** a dark CTA banner with "We provide international freight & logistics service worldwide" is visible

### 7. Testimonials
- Users SHALL see client testimonials with photo dots, prev/next navigation arrows, and the active testimonial quote, name, and role.
- Scenario — Testimonials load:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** the heading "What Client's Say" is displayed
  - **AND** the first testimonial is shown by default
  - **AND** prev/next arrows and photo dots allow navigation

### 8. Newsletter
- Users SHALL see a newsletter section with a "Weekly Newsletter" heading, email input, and Subscribe button.
- Scenario — Newsletter form loads:
  - **WHEN** the user scrolls to the newsletter section
  - **THEN** the heading "Weekly Newsletter" is visible
  - **AND** an email input and Subscribe button are present
- Scenario — Newsletter form submits:
  - **WHEN** the user enters a valid email and clicks Subscribe
  - **THEN** a "Thank you for subscribing" message is displayed

### 9. Footer
- Users SHALL see a footer with three columns (About Us, Latest Tweets, Customer Service), a copyright bar, and a link to https://www.componentdock.com/.
- Scenario — Footer loads:
  - **WHEN** the user scrolls to the footer
  - **THEN** three columns display: About Us, Latest Tweets, Customer Service
  - **AND** a copyright bar is at the bottom
  - **AND** a link to Component Dock (https://www.componentdock.com/) is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/packwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/packwell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Hero slider works with multiple slides; [ ] Navbar is sticky; [ ] About section matches original layout and colors; [ ] Service catalog shows 4 service cards in correct layout; [ ] Promo section renders with correct background treatment; [ ] Feature highlights render with icons; [ ] Testimonial slider works; [ ] Newsletter form is functional (email input + submit); [ ] Footer has 3 columns + Component Dock link; [ ] All design tokens match the ColorLib reference; [ ] Responsive on mobile/tablet/desktop; [ ] No ColorLib references in app code; [ ] Footer links to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/packwell` ships on https://packwell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/packwell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/packwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/packwell/public/CNAME` = `packwell.free.componentdock.com`
  and the package `homepage` = `https://packwell.free.componentdock.com`.
