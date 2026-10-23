# Merry — Implementation Tasks

Source design: **Carousel 07** (`https://colorlib.com/wp/template/carousel-07/`) → recreation name **merry**. Shipped at https://merry.free.componentdock.com.

Scope: A modern interactive multi-item carousel and card showcase template with hero, carousel, features, newsletter, and footer sections. Recreate the ColorLib Carousel 07 template (`https://colorlib.com/wp/template/carousel-07/`) as `merry`.

## Component breakdown

Render order as composed in `apps/merry/src/App.tsx`:

### 1. Navbar
- The template SHALL display a navigation bar with brand logo/title ("Merry") and navigation links (Home, Features, Showcase, Contact) plus a "Get Started" CTA button and dark mode toggle.
- Scenario — Navigation bar renders correctly:
  - **WHEN** the user views the page
  - **THEN** the navigation bar displays "Merry" brand text, Home/Features/Showcase/Contact links, and a "Get Started" button
- Scenario — Dark mode toggle:
  - **WHEN** the user clicks the "Dark mode" button
  - **THEN** the document root receives the "dark" class and the button text changes to "Light mode"

### 2. Hero
- The template SHALL display a hero section with an engaging heading, subtitle, and primary CTA button.
- Scenario — Hero section renders content:
  - **WHEN** the user views the page
  - **THEN** a heading, description text, and "Explore Showcase" CTA link are visible

### 3. Carousel
- The template SHALL display a multi-item card carousel with left/right arrow navigation and pagination dots.
- Scenario — Carousel displays initial slide:
  - **WHEN** the page loads
  - **THEN** the first carousel item "Modern Architecture Showcase" is displayed
- Scenario — Forward navigation:
  - **WHEN** the user clicks the "Next slide" button
  - **THEN** the carousel advances to the next item
- Scenario — Backward navigation wraps around:
  - **WHEN** the user is on the first slide and clicks "Previous slide"
  - **THEN** the carousel wraps to the last item
- Scenario — Dot navigation:
  - **WHEN** the user clicks a pagination dot
  - **THEN** the carousel displays the corresponding item

### 4. Features
- The template SHALL display a grid of feature cards with icons, titles, and descriptions.
- Scenario — Features section renders all cards:
  - **WHEN** the user scrolls to the features section
  - **THEN** four feature cards are displayed with titles "Multi-Item Display", "Smooth Transitions", "Accessible by Default", and "Community Driven"

### 5. Newsletter
- The template SHALL display an email subscription form with validation and success state.
- Scenario — Newsletter form renders:
  - **WHEN** the user views the newsletter section
  - **THEN** an email input and "Subscribe" button are visible
- Scenario — Empty email shows error:
  - **WHEN** the user clicks "Subscribe" without entering an email
  - **THEN** an error message "Please enter your email address" is displayed
- Scenario — Invalid email shows error:
  - **WHEN** the user enters an invalid email and clicks "Subscribe"
  - **THEN** an error message "Please enter a valid email address" is displayed
- Scenario — Valid email shows success:
  - **WHEN** the user enters a valid email and clicks "Subscribe"
  - **THEN** a success confirmation message is displayed

### 6. Footer
- The template SHALL display a footer with links, copyright notice, and a link to Component Dock.
- Scenario — Footer renders copyright and Component Dock link:
  - **WHEN** the user views the footer
  - **THEN** a copyright notice with the current year and a "Component Dock" link to https://www.componentdock.com/ are displayed

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/merry/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/merry/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/merry` ships on https://merry.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/merry/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/merry/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/merry/public/CNAME` = `merry.free.componentdock.com`
  and the package `homepage` = `https://merry.free.componentdock.com`.
