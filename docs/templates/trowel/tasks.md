# Trowel — Implementation Tasks

Source design: **Sintec** (`https://colorlib.com/wp/template/sintec/`) → recreation name **trowel**. Shipped at https://trowel.free.componentdock.com.

Scope: A construction company template with hero, about, services, projects, stats, testimonials and blog sections. Recreation of the ColorLib **Sintec** building company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

## Component breakdown

Render order as composed in `apps/trowel/src/App.tsx`:

### 1. Navbar
- The system SHALL render a two-tier sticky navigation bar with a top info bar and a main navigation bar containing the logo and primary links.
- Scenario — Top bar content:
  - **GIVEN** the page is loaded
  - **WHEN** the top bar is displayed
  - **THEN** it SHALL show a phone number "+1 (205) 325-1235"
  - **AND** it SHALL show an address "4256 Marshville Road, Poughkeepsie, NY 12601"
  - **AND** it SHALL show social media icons (Facebook, Twitter, Instagram, Skype, Vimeo)
  - **AND** the top bar SHALL have a dark background
- Scenario — Main nav links:
  - **GIVEN** the page is loaded
  - **WHEN** the main navigation bar is displayed
  - **THEN** it SHALL show the logo "Trowel"
  - **AND** it SHALL show navigation links: Home, About, Services, Project, Blog, Contact
  - **AND** the Blog link SHALL have a dropdown submenu with Blog and Blog Details items
  - **AND** it SHALL show a search icon and a shopping cart icon
- Scenario — Sticky behavior:
  - **GIVEN** the page is scrolled past the hero section
  - **WHEN** the navbar enters the viewport threshold
  - **THEN** the navbar SHALL become sticky with a solid background
  - **AND** the transition SHALL be smooth (0.3s ease)

### 2. Hero
- The system SHALL render a full-width hero section with a background image, a dark parallax overlay, a subtitle, a headline, and a CTA button.
- Scenario — Hero content:
  - **GIVEN** the page is loaded
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL show the subtitle "Future construction"
  - **AND** it SHALL show the headline "Make your dream home with us"
  - **AND** it SHALL show a "Get a Quote" CTA button linking to #contact
  - **AND** it SHALL have a dark overlay over a background image
  - **AND** the content SHALL be centered both horizontally and vertically
- Scenario — Hero responsive:
  - **GIVEN** the viewport is at or below 768px
  - **WHEN** the hero section is rendered
  - **THEN** the headline font size SHALL reduce proportionally
  - **AND** the section SHALL maintain full viewport width

### 3. AboutSection
- The system SHALL render a two-column about section with an image on the left and content on the right including a heading, description, and "Learn More" button.
- Scenario — About content:
  - **GIVEN** the page is loaded
  - **WHEN** the about section is displayed
  - **THEN** it SHALL show an image on the left column (hidden on mobile)
  - **AND** it SHALL show the heading "We Are Experts in Building Solutions Since 1974."
  - **AND** it SHALL show a description paragraph
  - **AND** it SHALL show a "Learn More" button
- Scenario — About responsive:
  - **GIVEN** the viewport is at or below 991px
  - **WHEN** the about section is rendered
  - **THEN** the image column SHALL be hidden
  - **AND** the content SHALL occupy the full width

### 4. ServicesSection
- The system SHALL render a services section with a heading and 4 service cards in a responsive grid layout.
- Scenario — Services heading:
  - **GIVEN** the page is loaded
  - **WHEN** the services section is displayed
  - **THEN** it SHALL show the heading "What We Provide"
  - **AND** it SHALL show a subtitle description
- Scenario — Service cards:
  - **GIVEN** the services section is displayed
  - **WHEN** the 4 service cards are rendered
  - **THEN** card 1 SHALL show "Architecture Design" with an icon and description
  - **AND** card 2 SHALL show "Building Construction" with an icon and description
  - **AND** card 3 SHALL show "Building Renovation" with an icon and description
  - **AND** card 4 SHALL show "Building Maintenance" with an icon and description
  - **AND** each card SHALL have an icon image, title, and paragraph description
- Scenario — Services responsive:
  - **GIVEN** the viewport is at or below 768px
  - **WHEN** the services section is rendered
  - **THEN** the 4 cards SHALL stack vertically (one per row)

### 5. ProjectSection
- The system SHALL render a projects/portfolio section with a heading, filterable gallery grid, and 4 project cards with hover overlay.
- Scenario — Projects heading:
  - **GIVEN** the page is loaded
  - **WHEN** the project section is displayed
  - **THEN** it SHALL show the heading "Our Recent Project"
  - **AND** it SHALL show a subtitle description
- Scenario — Filter tabs:
  - **GIVEN** the project section is displayed
  - **WHEN** the filter tabs are rendered
  - **THEN** it SHALL show 5 filter tabs: All, Buildings, Offices, Rebuild, Architecture
  - **AND** the "All" tab SHALL be active by default
- Scenario — Filter functionality:
  - **GIVEN** the project section is displayed with "All" filter active
  - **WHEN** the user clicks the "Buildings" filter
  - **THEN** only project cards tagged as "buildings" SHALL be visible
  - **AND** other cards SHALL be hidden
- Scenario — Project cards:
  - **GIVEN** the project section is displayed
  - **WHEN** the 4 project cards are rendered
  - **THEN** each card SHALL show a project image
  - **AND** each card SHALL show a category label and project title on hover
  - **AND** the hover overlay SHALL have a semi-transparent background

### 6. StatsSection
- The system SHALL render a stats section with a split layout: image on the left, heading and animated stat counters on the right.
- Scenario — Stats content:
  - **GIVEN** the page is loaded
  - **WHEN** the stats section is displayed
  - **THEN** it SHALL show an image on the left column
  - **AND** it SHALL show the heading "Providing Personalized And High Quality Service."
  - **AND** it SHALL show a description paragraph
- Scenario — Stat counters:
  - **GIVEN** the stats section is displayed
  - **WHEN** the stat counters are rendered
  - **THEN** counter 1 SHALL show "15K+" with label "Happy Customer"
  - **AND** counter 2 SHALL show "10K+" with label "Project Done"
  - **AND** counter 3 SHALL show "9/10" with label "Average Rating"
  - **AND** the counters SHALL animate on scroll into view

### 7. Testimonials
- The system SHALL render a testimonials section with a heading and a carousel of customer review cards.
- Scenario — Testimonials heading:
  - **GIVEN** the page is loaded
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL show the heading "Customer reviews"
  - **AND** it SHALL show a subtitle description
- Scenario — Testimonial cards:
  - **GIVEN** the testimonials section is displayed
  - **WHEN** the carousel renders
  - **THEN** it SHALL show at least 3 testimonial cards
  - **AND** each card SHALL show an avatar photo
  - **AND** each card SHALL show a name (e.g. "Adame Nesane")
  - **AND** each card SHALL show a designation (e.g. "Chief Customer")
  - **AND** each card SHALL show a quote paragraph
- Scenario — Carousel navigation:
  - **GIVEN** the testimonials carousel is displayed
  - **WHEN** the user navigates the carousel
  - **THEN** it SHALL support auto-play with smooth transitions
  - **AND** it SHALL show navigation dots or arrows

### 8. BlogSection
- The system SHALL render a blog section with a heading and 3 blog post cards in a responsive grid.
- Scenario — Blog heading:
  - **GIVEN** the page is loaded
  - **WHEN** the blog section is displayed
  - **THEN** it SHALL show the heading "Our Recent News"
  - **AND** it SHALL show a subtitle description
- Scenario — Blog cards:
  - **GIVEN** the blog section is displayed
  - **WHEN** the 3 blog cards are rendered
  - **THEN** each card SHALL show a featured image
  - **AND** each card SHALL show a date (e.g. "Feb 14, 2019")
  - **AND** each card SHALL show a category tag (e.g. "Company")
  - **AND** each card SHALL show a post title
  - **AND** the date and category SHALL be displayed in a meta row with icons
- Scenario — Blog responsive:
  - **GIVEN** the viewport is at or below 768px
  - **WHEN** the blog section is rendered
  - **THEN** the 3 cards SHALL stack vertically

### 9. Footer
- The system SHALL render a dark footer with three content columns and a bottom copyright bar linking to Component Dock.
- Scenario — Footer columns:
  - **GIVEN** the page is scrolled to the footer
  - **WHEN** the footer is displayed
  - **THEN** column 1 SHALL show "Useful Links" with two sub-columns of navigation links (Home, About Us, Company News, Projects, Careers, Our Services, Terms and Condition, Shop, Contact Us)
  - **AND** column 2 SHALL show "Business Hours" with Monday-Friday 9:00am-6:00pm, Saturday 9:00am-4:00pm, Sunday Closed
  - **AND** column 3 SHALL show "Email Newsletter" with an email input and "Subscribe" button
- Scenario — Footer bottom bar:
  - **GIVEN** the footer is displayed
  - **WHEN** the bottom bar is rendered
  - **THEN** it SHALL show a copyright notice with the current year
  - **AND** it SHALL link to https://www.componentdock.com/ with text "Component Dock"
  - **AND** there SHALL be no references to ColorLib in any app code
- Scenario — Newsletter form:
  - **GIVEN** the newsletter section is displayed
  - **WHEN** the user enters an email and clicks Subscribe
  - **THEN** the form SHALL have an email input with placeholder "Your Email Address"
  - **AND** the submit button SHALL read "Subscribe"
  - **AND** no real submission SHALL occur (mock action)

### Cross-cutting requirements

- **Responsive design** — The system SHALL be fully responsive across desktop, tablet, and mobile viewports.
  - Scenario — Mobile layout: **GIVEN** the viewport is at or below 576px; **WHEN** the page is rendered; **THEN** the navbar SHALL collapse into a hamburger menu; **AND** all multi-column sections SHALL stack into single columns; **AND** all text SHALL remain readable without horizontal scroll
  - Scenario — Tablet layout: **GIVEN** the viewport is between 577px and 991px; **WHEN** the page is rendered; **THEN** the service and blog cards SHALL display 2 per row; **AND** the about section image SHALL be hidden
- **Accessibility** — The system SHALL meet WCAG 2.1 AA conformance for all interactive elements.
  - Scenario — Keyboard navigation: **GIVEN** the page is loaded; **WHEN** the user navigates with keyboard only; **THEN** all interactive elements SHALL be focusable; **AND** focus indicators SHALL be visible; **AND** the tab order SHALL follow logical reading order
  - Scenario — Semantic HTML: **GIVEN** the page is rendered; **WHEN** the DOM is inspected; **THEN** sections SHALL use semantic `<section>` elements; **AND** headings SHALL follow a logical hierarchy (h1 > h2 > h3); **AND** images SHALL have descriptive alt text; **AND** the carousel SHALL have appropriate ARIA attributes
- **Design tokens** — The system SHALL use the specified design tokens consistently across all components.
  - Scenario — Color consistency: **GIVEN** any component is rendered; **WHEN** brand colors are applied; **THEN** the primary color SHALL be `#e74c3c`; **AND** the background SHALL be `#ffffff`; **AND** body text SHALL be `#333333`; **AND** heading text SHALL be `#222222`; **AND** muted text SHALL be `#888888`
  - Scenario — Font consistency: **GIVEN** any text element is rendered; **WHEN** font families are applied; **THEN** all text SHALL use the 'Raleway' font family; **AND** headings SHALL have appropriate font weights (700 for h1-h3, 600 for h4-h6)

## Verification

- [x] `apps/trowel` ships on https://trowel.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/trowel/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/trowel/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/trowel/public/CNAME` = `trowel.free.componentdock.com`
  and the package `homepage` = `https://trowel.free.componentdock.com`.
