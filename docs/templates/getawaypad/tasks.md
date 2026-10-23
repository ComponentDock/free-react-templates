# Getawaypad — Implementation Tasks

Source design: **Vacation Rental** (`https://colorlib.com/wp/template/vacation-rental/`) → recreation name **getawaypad**. Shipped at https://getawaypad.free.componentdock.com.

Scope: A Vacation Rental / Apartment template with hero, book your apartment, services, apartment rooms, cta intro and blog sections. Recreation of ColorLib's **Vacation Rental** apartment booking template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Component breakdown

Render order as composed in `apps/getawaypad/src/App.tsx`:

### 1. TopBar
- The template SHALL display a top bar with phone number, email address, and social media icons (Facebook, Twitter, Instagram).
- Scenario — Contact info displays:
  - **WHEN** the user is on any page
  - **THEN** a top bar shows phone number "+00 1234 567" and email "emailsample@email.com"
  - **AND** social media icons (Facebook, Twitter, Instagram) are visible

### 2. Navbar
- The template SHALL display a sticky dark navbar with the logo "GetawayPad" (with "Pad" in brand color) and navigation links.
- Scenario — Logo and navigation display:
  - **WHEN** the user is on any page
  - **THEN** the logo "GetawayPad" is visible (with "Pad" in brand color)
  - **AND** navigation links "Home", "About", "Services", "Apartment Room", "Blog", "Contact" are visible
- Scenario — Mobile hamburger menu:
  - **WHEN** the viewport is mobile width (< 768px)
  - **THEN** a hamburger menu icon is visible
  - **AND** clicking it opens a slide-in mobile menu with all nav links

### 3. Hero
- The template SHALL display a full-viewport-height hero with parallax background, dark overlay, heading, and two CTA buttons.
- Scenario — Hero displays with booking CTA:
  - **WHEN** the user lands on the page
  - **THEN** a full-viewport-height hero with parallax background is displayed
  - **AND** the subheading "Welcome to GetawayPad" is shown
  - **AND** the heading "Rent an apartment for your vacation" is displayed
  - **AND** two buttons appear: "Learn more" (primary) and "Contact us" (white outline)

### 4. Booking
- The template SHALL display a booking form with 7 input fields and a submit button.
- Scenario — Booking form displays:
  - **WHEN** the user scrolls to the booking section
  - **THEN** a form with "Book your apartment" heading is displayed
  - **AND** fields for Full Name, Check-In, Check-Out, Adults, Children, Phone, Time are visible
  - **AND** a "Book Apartment Now" submit button is present

### 5. Services
- The template SHALL display 3 service cards in a row with image, title, description, and CTA button.
- Scenario — Three service cards display:
  - **WHEN** the user scrolls past the booking form
  - **THEN** three service cards appear in a row
  - **AND** each has an image, title ("Map Direction", "Accommodation Services", "Great Experience"), paragraph, and "Read more" button

### 6. Rooms
- The template SHALL display 4 room cards in a 2×2 grid with alternating image/text layout.
- Scenario — Four room cards display:
  - **WHEN** the user scrolls to the rooms section
  - **THEN** an "Apartment Room" heading is shown
  - **AND** four room cards are displayed in a 2×2 grid
  - **AND** each card shows 5-star rating, room name, amenity list, and "View Room Details" link
- Scenario — Room cards alternate layout:
  - **WHEN** the rooms section is visible
  - **THEN** the first row shows image on left, text on right
  - **AND** the second row shows text on left, image on right

### 7. Testimonials
- The template SHALL display testimonials with circular avatars, quote icons, and author info.
- Scenario — Testimonials display:
  - **WHEN** the user scrolls to testimonials
  - **THEN** "Happy Clients & Feedbacks" heading is shown
  - **AND** testimonial cards appear with circular avatars, quote icons, paragraph text, author name, and position

### 8. CtaIntro
- No dedicated spec block — hold this band to the design notes.
- Anchors: Ready to get started · Book now · Contact us

### 9. Blog
- The template SHALL display 3 blog cards in a row with image, title, meta info, and excerpt.
- Scenario — Three blog entries display:
  - **WHEN** the user scrolls to the blog section
  - **THEN** three blog cards appear in a row
  - **AND** each has a background image, title, date, author, comment count, and paragraph

### 10. Footer
- The template SHALL display a 4-column footer with logo, services, tag cloud, subscribe form, social links, and copyright.
- Scenario — Footer layout:
  - **WHEN** the user scrolls to the footer
  - **THEN** four columns are shown: Logo + description, Services list, Tag cloud, Subscribe form
  - **AND** social media links (Twitter, Facebook, Instagram) are visible
  - **AND** a copyright line with Terms and Privacy links is at the bottom
- Scenario — Newsletter subscribe form:
  - **WHEN** the footer is visible
  - **THEN** an email input with placeholder "Enter email address" is displayed
  - **AND** a paper-plane submit button is present
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer is visible
  - **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"
  - [ ] All sections present in correct order matching preview DOM
  - [ ] Brand color `#fd7792` applied to buttons, stars, price, icon circles
  - [ ] Font Poppins applied globally
  - [ ] Buttons have 4px border-radius, uppercase, letter-spacing 3px
  - [ ] Hero is full viewport height with parallax bg and dark overlay
  - [ ] Booking form has 7 fields + submit button
  - [ ] Services section has 3 cards with image + title + CTA
  - [ ] Room cards in 2×2 grid with alternating image/text layout
  - [ ] Testimonials have circular avatars, quote icons
  - [ ] CTA banner has parallax background
  - [ ] Blog has 3 cards with meta info
  - [ ] Footer is 4-column with subscribe form and social links
  - [ ] Footer links to Component Dock
  - [ ] No references to ColorLib in app code
  - [ ] All images use picsum.photos placeholders (deterministic seeds)
  - [ ] Mobile responsive: hamburger menu, stacked columns
  - [ ] 100% test coverage

### Cross-cutting requirements

- **CTA Banner** — The template SHALL display a full-width parallax CTA banner with overlay.
  - Scenario — CTA banner displays: **WHEN** the user scrolls past testimonials; **THEN** a full-width parallax banner with overlay is shown; **AND** "Ready to get started" heading is displayed; **AND** "Book now" and "Contact us" buttons are present

## Verification

- [x] `apps/getawaypad` ships on https://getawaypad.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/getawaypad/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/getawaypad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/getawaypad/public/CNAME` = `getawaypad.free.componentdock.com`
  and the package `homepage` = `https://getawaypad.free.componentdock.com`.
