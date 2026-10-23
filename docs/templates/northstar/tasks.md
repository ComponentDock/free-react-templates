# Northstar — Implementation Tasks

Source design: **Coach** (`https://colorlib.com/wp/template/coach/`) → recreation name **northstar**. Shipped at https://northstar.free.componentdock.com.

Scope: A consulting template with hero, about, training, services, gallery and blog sections. Recreation of ColorLib's **Coach** life coaching template.

## Component breakdown

Render order as composed in `apps/northstar/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · Main navigation · Northstar · menu · menuitem

### 2. Hero
- The system SHALL render a full-width hero section with an image slider that cycles through 3 slides every 5 seconds. The hero SHALL display a heading overlay with "We are" text and a CTA button.
- Scenario — Hero displays heading and CTA:
  - **WHEN** the page loads
  - **THEN** I should see a heading starting with "We are"
  - **AND** I should see a "Learn More" button
- Scenario — Hero cycles through slides:
  - **WHEN** 5 seconds pass
  - **THEN** the hero heading should change to the next slide

### 3. About
- The system SHALL render an about section with a founder introduction heading "Hey there, I'm John The Founder", three bio paragraphs, a "Learn More" button, an upcoming speaking gigs list, and 4 team member cards with circular avatars.
- Scenario — About displays founder info:
  - **WHEN** the page loads
  - **THEN** I should see "Hey there, I'm John The Founder"
  - **AND** I should see a "Learn More" button
- Scenario — About shows speaking gigs:
  - **WHEN** the page loads
  - **THEN** I should see "Upcoming Speaking Gigs" with 4 events
- Scenario — About shows team members:
  - **WHEN** the page loads
  - **THEN** I should see 4 team member cards with names and bios

### 4. Training
- The system SHALL render a training section with gray background, centered heading "Our Training", description text, and a grid of training cards with images and descriptions.
- Scenario — Training displays program cards:
  - **WHEN** the page loads
  - **THEN** I should see heading "Our Training"
  - **AND** I should see training cards with images and descriptions

### 5. Services
- The system SHALL render a services section with white background, centered heading "Our Services", description text, and a grid of service cards with lucide-react icons, titles, and descriptions.
- Scenario — Services displays service cards:
  - **WHEN** the page loads
  - **THEN** I should see heading "Our Services"
  - **AND** I should see service cards with icons, titles, and descriptions

### 6. Gallery
- The system SHALL render a gallery section with centered heading "Gallery" and a 4-column responsive grid of 12 images. Clicking an image SHALL open a lightbox overlay, and clicking the backdrop SHALL close it.
- Scenario — Gallery displays image grid:
  - **WHEN** the page loads
  - **THEN** I should see heading "Gallery"
  - **AND** I should see a grid of 12 images
- Scenario — Gallery opens lightbox on click:
  - **WHEN** I click a gallery image
  - **THEN** a lightbox overlay should open with the full image
- Scenario — Gallery closes lightbox on backdrop click:
  - **WHEN** the lightbox is open
  - **AND** I click the backdrop
  - **THEN** the lightbox should close

### 7. Testimonials
- The system SHALL render a testimonials section with centered heading "Happy Customers" and a grid of testimonial cards with blockquotes, circular avatar photos, and names.
- Scenario — Testimonials display quotes:
  - **WHEN** the page loads
  - **THEN** I should see heading "Happy Customers"
  - **AND** I should see testimonial cards with quotes, avatars, and names

### 8. Blog
- The system SHALL render a blog section with centered heading "Our Blog", description text, and a 2-column grid of 4 blog entries with thumbnail images, titles, dates, excerpts, and "Read More" links.
- Scenario — Blog displays entries:
  - **WHEN** the page loads
  - **THEN** I should see heading "Our Blog"
  - **AND** I should see 4 blog entries with thumbnails, titles, dates, and excerpts

### 9. Contact
- The system SHALL render a contact section with gray background, centered heading "Contact Us", a 3-column info row (Address, Phone, Email), and a form with First Name (x2), Email, Message textarea, and "Send Message" button.
- Scenario — Contact displays form fields:
  - **WHEN** the page loads
  - **THEN** I should see fields for First Name (x2), Email, Message
  - **AND** a "Send Message" button
- Scenario — Contact shows info:
  - **WHEN** the page loads
  - **THEN** I should see Address, Phone, and Email information

### 10. Footer
- The system SHALL render a footer with dark background, 3-column layout (About Us, Quick Links, Follow Us + Subscribe Newsletter), and a copyright bar with a link to componentdock.com.
- Scenario — Footer displays content:
  - **WHEN** the page loads
  - **THEN** I should see an "About Us" description
  - **AND** I should see "Quick Links" with smooth-scroll anchors
  - **AND** I should see a "Subscribe Newsletter" form with email input
- Scenario — Footer links to Component Dock:
  - **WHEN** the page loads
  - **THEN** the footer should contain a link to componentdock.com

### Cross-cutting requirements

- **Navigation** — The system SHALL render a sticky top navbar with the site name "Northstar" and a blue dot accent. The navbar SHALL include section links (Home, About with dropdown, Our Training, Services, Contact) and a hamburger toggle for mobile menus. Navigation links SHALL smooth-scroll to their target sections.
  - Scenario — Navbar shows navigation links: **WHEN** the page loads; **THEN** I should see links for Home, About, Our Training, Services, Contact; **AND** the navbar should be sticky at the top
  - Scenario — Navbar has dropdown menus: **WHEN** I hover over "About"; **THEN** a dropdown with Our Training, Testimonials, Gallery, Blog should appear
  - Scenario — Navbar smooth-scrolls to sections: **WHEN** I click "Services" in the navbar; **THEN** the page should scroll smoothly to the services section
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/northstar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/northstar/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/northstar` ships on https://northstar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/northstar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/northstar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/northstar/public/CNAME` = `northstar.free.componentdock.com`
  and the package `homepage` = `https://northstar.free.componentdock.com`.
