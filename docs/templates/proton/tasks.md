# Proton — Implementation Tasks

Source design: **Atomic** (`https://colorlib.com/wp/template/atomic/`) → recreation name **proton**. Shipped at https://proton.free.componentdock.com.

Scope: A clean, professional business/agency website template with hero video CTA, overlapping features, service grid, portfolio masonry. It also includes stats counter, testimonials, and multi-column footer. Recreation of ColorLib "Atomic".

## Component breakdown

Render order as composed in `apps/proton/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display the logo "Proton" and navigation links (Home, About, Services, Gallery, Blog, Contact). On mobile, a hamburger menu toggle SHALL be visible that opens/closes the mobile navigation.
- Scenario — Navbar renders logo and desktop links:
  - **WHEN** the page loads
  - **THEN** the navbar displays the logo "Proton"
  - **AND** navigation links "Home", "About", "Services", "Gallery", "Blog", "Contact" are visible
- Scenario — Mobile hamburger menu toggles:
  - **WHEN** the user clicks the Open menu button on mobile
  - **THEN** the mobile menu becomes visible
  - **AND** the button label changes to "Close menu"
- Scenario — Mobile menu closes on link click:
  - **WHEN** the user opens the mobile menu and clicks a navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- The hero section SHALL display a full-viewport background image with a headline, subtext, a "Free Download" CTA button, and a play button on the right side.
- Scenario — Hero renders headline and CTA:
  - **WHEN** the page loads
  - **THEN** the hero section shows a background image
  - **AND** a headline "Design a better website" is displayed
  - **AND** a lead paragraph is visible below the headline
  - **AND** a "Free Download" primary button is displayed
  - **AND** a play button is visible on the right side

### 3. FeaturesOverlap
- The features overlap section SHALL display a white card overlapping the hero with three feature cards in a row, each containing an icon, title, and description.
- Scenario — Three feature cards are displayed:
  - **WHEN** the page loads
  - **THEN** three feature cards are displayed: "Intuitive Thinking", "Orange for Carrots", "Infinite Possibilities"
  - **AND** each card shows an icon, a title, and a description

### 4. About
- The about section SHALL display a centered heading "Good Design is a Good Start" followed by a two-column text layout.
- Scenario — About section renders heading and text:
  - **WHEN** the user scrolls to the about section
  - **THEN** a centered heading "Good Design is a Good Start" is shown
  - **AND** a two-column text layout is displayed below the heading

### 5. Carousel
- The image carousel SHALL render three full-width images in a horizontal strip.
- Scenario — Carousel displays three images:
  - **WHEN** the user scrolls to the carousel section
  - **THEN** three images are displayed

### 6. Services
- The services section SHALL display six service cards in a 3x2 grid on a light background with a "More Features" CTA button.
- Scenario — Six service cards are rendered:
  - **WHEN** the user scrolls to the services section
  - **THEN** six service cards are displayed: "Regular Update", "Infinite Possibilities", "Good Security", "Orange for Carrots", "Intuitive Thinking", "Play Video"
  - **AND** a "More Features" button is centered below the grid

### 7. Portfolio
- The portfolio section SHALL render four image cards in two asymmetric rows with hover overlay effects.
- Scenario — Four portfolio images displayed:
  - **WHEN** the user scrolls to the portfolio section
  - **THEN** four image cards are displayed in two rows
  - **AND** row 1 shows a 1/3 and a 2/3 width card
  - **AND** row 2 shows a 2/3 and a 1/3 width card

### 8. Counter
- The counter section SHALL display three animated statistics on a blue background with white text: Lines of Code, Number of Projects, and Number of Clients.
- Scenario — Counter displays three metrics:
  - **WHEN** the user scrolls to the counter section
  - **THEN** three stats are displayed: "Lines of Code", "Number of Projects", "Number of Clients"
  - **AND** the section has a blue background
  - **AND** numbers animate counting up from zero

### 9. Testimonials
- The testimonials section SHALL display a large decorative quotation mark and a testimonial blockquote with author name and role.
- Scenario — Testimonial quote is displayed:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** a large quotation mark is displayed
  - **AND** a testimonial quote is visible with author name and role

### 10. Footer
- The footer SHALL display four columns of navigation links, a download CTA button, social media icon links, and a copyright line with a Component Dock link.
- Scenario — Footer renders four columns:
  - **WHEN** the user scrolls to the footer
  - **THEN** four columns are displayed: "About", "Learn More", "Support", "About Us"
  - **AND** a download CTA button is present
  - **AND** social media icon links are shown
  - **AND** a copyright line with "Component Dock" link is at the bottom

### Cross-cutting requirements

- **No ColorLib references in app code** — The app source code SHALL NOT contain any references to ColorLib, colorlib.com, or preview.colorlib.com in any file including comments.
  - Scenario — No ColorLib strings in app: **WHEN** searching for "colorlib" (case-insensitive) in apps/proton/; **THEN** zero matches are found
- **Footer links to Component Dock** — The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".
  - Scenario — Footer Component Dock link: **WHEN** the footer is rendered; **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is present
- **Tests pass with 100% coverage** — All tests in the proton workspace SHALL pass with 100% line, function, branch, and statement coverage.
  - Scenario — All tests pass: **WHEN** running `npm run test:coverage` in the proton workspace; **THEN** all tests pass; **AND** coverage is 100% across all metrics
- **Build succeeds** — The proton workspace SHALL produce a successful production build.
  - Scenario — Production build: **WHEN** running `npm run build` in the proton workspace; **THEN** the build completes successfully

## Verification

- [x] `apps/proton` ships on https://proton.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/proton/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/proton/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/proton/public/CNAME` = `proton.free.componentdock.com`
  and the package `homepage` = `https://proton.free.componentdock.com`.
