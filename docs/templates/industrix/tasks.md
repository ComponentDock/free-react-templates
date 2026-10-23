# Industrix — Implementation Tasks

Source design: **Durg** (`https://colorlib.com/wp/template/durg/`) → recreation name **industrix**. Shipped at https://industrix.free.componentdock.com.

Scope: An industrial construction template with top header, hero slider, brand logos, services and video about sections. Recreation of ColorLib's **Durg** industrial/construction company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Component breakdown

Render order as composed in `apps/industrix/src/App.tsx`:

### 1. TopBar
- A dark top bar with phone number, email, and social media links.
- Scenario — Top bar shows contact details:
  - **WHEN** the user is on any page
  - **THEN** a dark top bar shows phone number and email
  - **AND** social media links (Facebook, Twitter, LinkedIn) are visible
  - **AND** office hours "Mon - Fri: 9:00 - 19:00" are displayed

### 2. Navbar
- A white sticky navbar with the brand logo, navigation links, search icon, and a "Get a Quote" CTA button.
- Scenario — Navbar renders all navigation elements:
  - **WHEN** the user is on any page
  - **THEN** the logo is visible in the navbar
  - **AND** navigation links "Home", "About", "Services", "Projects", "Contact" are visible
  - **AND** a "Get a Quote" button is displayed
  - **AND** a search button is visible
- Scenario — Navbar becomes sticky on scroll:
  - **WHEN** the user scrolls down more than 50px
  - **THEN** a shadow appears on the navbar
- Scenario — Mobile hamburger menu:
  - **WHEN** the viewport is mobile width (< 768px)
  - **AND** the hamburger menu icon is clicked
  - **THEN** a mobile menu opens with navigation links
  - **AND** clicking a link closes the menu

### 3. HeroSlider
- A full-height hero slider with 3 slides, each featuring a parallax background image, dark overlay, and white content card with heading and CTA buttons.
- Scenario — Hero slider renders initial slide:
  - **WHEN** the user lands on the page
  - **THEN** a hero slider section is displayed
  - **AND** the heading reads "We provide your Industrial solution"
  - **AND** two buttons appear: "Our Services" and "Get a Quote"
- Scenario — Hero auto-slides and navigates:
  - **WHEN** the hero slider is loaded
  - **THEN** slides advance automatically every 5 seconds
  - **AND** dot navigation is visible on the bottom
  - **AND** clicking next/prev arrows changes the slide

### 4. BrandLogos
- A row of 7 partner/client logos on a gray (#f5f5f5) background.
- Scenario — Partner logos display:
  - **WHEN** the user scrolls past the hero
  - **THEN** a row of 7 partner/client logos is shown
  - **AND** the section has a gray background

### 5. Services
- Three service cards: Industrial Construction, Mechanical Engineering, Bridge Construction. Each with an image, title, description, and "Learn More" link.
- Scenario — Three service cards display:
  - **WHEN** the user scrolls to the services section
  - **THEN** a "We provide all of your" heading is shown
  - **AND** three service cards appear: "Industrial Construction", "Mechanical Engineering", "Bridge Construction"
  - **AND** each has an image, title, paragraph, and "Learn More" link

### 6. Projects
- A parallax background section with dark overlay, white heading, and a project carousel.
- Scenario — Project showcase displays:
  - **WHEN** the user scrolls to the projects section
  - **THEN** a parallax background with dark overlay is shown
  - **AND** a "Take a look around" heading is displayed in white
  - **AND** a project carousel shows projects with image, category, and title
  - **AND** navigation arrows and dots allow switching between projects

### 7. About
- A two-column layout with about image (video play button overlay) and content, plus a review carousel with star ratings.
- Scenario — About section displays:
  - **WHEN** the user scrolls to the about section
  - **THEN** an "About Company" label and "Deliver innovative Industrial solution" heading are shown
  - **AND** a video play button overlay is on the about image
  - **AND** a "Learn More" button is present
- Scenario — Review carousel displays:
  - **WHEN** the about section is visible
  - **THEN** a review carousel shows quote icon, 5-star rating, review text, and author info
  - **AND** a "350+ Positive Reviews" stat is displayed
  - **AND** navigation arrows allow switching between reviews

### 8. Address
- A dark background section with 3 columns: location, hours, and contact.
- Scenario — Address section displays:
  - **WHEN** the user scrolls to the address area
  - **THEN** a dark background with 3 columns is shown
  - **AND** "Our Location" with address and "Get Direction" link is visible
  - **AND** "Opening Hour" with Mon-Fri times is shown
  - **AND** "Drop a Message" with email and phone is displayed

### 9. Footer
- A dark footer with brand logo, quick links, services list, newsletter form, social links, and Component Dock attribution.
- Scenario — Footer layout:
  - **WHEN** the user scrolls to the footer
  - **THEN** logo, description, and social links (Facebook, Twitter, LinkedIn) are shown
  - **AND** quick links, services list, and newsletter subscribe form are displayed
  - **AND** a copyright line is at the bottom
- Scenario — Footer links to Component Dock:
  - **WHEN** the footer is visible
  - **THEN** a link to https://www.componentdock.com/ is present with text "Component Dock"
  - [x] All sections present in correct order matching preview DOM
  - [x] Brand color `#ff5e13` applied to buttons, accents, links
  - [x] Font Rubik applied globally
  - [x] Dark sections use `#020c26`
  - [x] Hero slider with 3 slides, white content cards, parallax bg
  - [x] Brand logos row with 7 images
  - [x] Services section with 3 cards
  - [x] Projects section with parallax bg and carousel
  - [x] About section with video overlay and review carousel
  - [x] Address section with 3-column dark layout
  - [x] Footer with logo, social, newsletter, copyright
  - [x] Sticky navbar on scroll
  - [x] No references to ColorLib in app code
  - [x] All images use picsum.photos placeholders (deterministic seeds)
  - [x] Mobile responsive: hamburger menu, stacked columns
  - [x] 100% test coverage

## Verification

- [x] `apps/industrix` ships on https://industrix.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/industrix/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/industrix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/industrix/public/CNAME` = `industrix.free.componentdock.com`
  and the package `homepage` = `https://industrix.free.componentdock.com`.
