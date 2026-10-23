# Tastory — Implementation Tasks

Source design: **Eatwell** (`https://colorlib.com/wp/template/eatwell/`) → recreation name **tastory**. Shipped at https://tastory.free.componentdock.com.

Scope: A restaurant landing template with navbar, about story, tabbed menu and news blog sections. Provide a full-featured restaurant landing page with hero, about, offers carousel, tabbed menu, news/blog cards, photo gallery, contact form, and a dark footer — faithfully recreating the ColorLib Eatwell design under the name "Tastory".

## Component breakdown

Render order as composed in `apps/tastory/src/App.tsx`:

### 1. Navbar
- The template SHALL render a fixed dark navbar with the brand name "Tastory" and navigation links to all sections (Home, About, Offer, Menu, News, Gallery, Contact). The navbar SHALL support a mobile toggle that shows/hides a mobile menu.
- Scenario — Desktop navigation:
  - **WHEN** the page renders on a desktop viewport
  - **THEN** the navbar displays "Tastory" brand and all seven navigation links
- Scenario — Mobile toggle:
  - **WHEN** the user clicks the mobile toggle button
  - **THEN** the mobile menu expands showing all navigation links
  - **WHEN** the user clicks a mobile navigation link
  - **THEN** the mobile menu closes

### 2. Hero
- The template SHALL render a full-screen hero section with a background image, the heading "Welcome To Tastory", a subheading about delicious and healthy foods, and a "Reservation" button linking to the contact section.
- Scenario — Hero displays heading and CTA:
  - **WHEN** the page loads
  - **THEN** the hero shows "Welcome To Tastory" heading
  - **AND** the hero shows a "Reservation" button linking to #contact

### 3. About
- The template SHALL render a split-layout about section with a "Our Story" subtitle, "Welcome" heading, descriptive text, a "Learn More About Us" button, and a restaurant image.
- Scenario — About section content:
  - **WHEN** the about section is visible
  - **THEN** it shows "Our Story" subtitle and "Welcome" heading
  - **AND** it shows a "Learn More About Us" button
  - **AND** it shows a restaurant image

### 4. Offers
- The template SHALL render an offers section with a centered header ("Our Offers" subtitle, "Our Offer This Summer" heading) and three offer cards showing image, title, description, and price.
- Scenario — Offer cards display:
  - **WHEN** the offers section renders
  - **THEN** three offer cards are visible with titles, images, and prices

### 5. Menu
- The template SHALL render a menu section with "Delicious Menu" heading and three tabs (Breakfast, Lunch, Dinner). Each tab shows six menu items with thumbnail, name, description, and price.
- Scenario — Default tab:
  - **WHEN** the menu section renders
  - **THEN** the Breakfast tab is active by default
  - **AND** six breakfast menu items are visible
- Scenario — Tab switching:
  - **WHEN** the user clicks the "Lunch" tab
  - **THEN** lunch items are displayed and breakfast items are hidden

### 6. News
- The template SHALL render a news section with "News" heading and three blog cards, each with an image, title, description, and "Read More" link.
- Scenario — News cards:
  - **WHEN** the news section renders
  - **THEN** three cards are visible with "Read More" links

### 7. Gallery
- The template SHALL render a gallery section with "Gallery" heading and six food images in a responsive grid.
- Scenario — Gallery images:
  - **WHEN** the gallery section renders
  - **THEN** six images are displayed in a grid

### 8. Contact
- The template SHALL render a contact section with "Get In Touch" heading, a form with Name, Email, Message fields and a "Send Message" button, plus address and contact information.
- Scenario — Contact form:
  - **WHEN** the contact section renders
  - **THEN** a form with Name, Email, Message inputs and Send Message button is visible
  - **AND** address and phone information is displayed

### 9. Footer
- The template SHALL render a dark footer with About Us text, The Restaurant links, Useful links, social media icons (Twitter, Facebook, Instagram), and a link to Component Dock (https://www.componentdock.com/).
- Scenario — Footer branding:
  - **WHEN** the footer renders
  - **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is visible
  - **AND** social media icons are present
  - **AND** restaurant and useful links sections are displayed

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/tastory/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/tastory/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/tastory` ships on https://tastory.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/tastory/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/tastory/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tastory/public/CNAME` = `tastory.free.componentdock.com`
  and the package `homepage` = `https://tastory.free.componentdock.com`.
