# Shearglow — Implementation Tasks

Source design: **Akame** (`https://colorlib.com/wp/template/akame/`) → recreation name **shearglow**. Shipped at https://shearglow.free.componentdock.com.

Scope: Recreation of ColorLib **Akame** — a multi-page hair salon website with a full-width hero slider, about section, 4-column services grid, "Why Choose Us" feature, filterable portfolio gallery, team experts with certificates, blog posts, a CTA section, and a 3-column footer. Gold-and-dark aesthetic with elegant serif headings.

## Component breakdown

Render order as composed in `apps/shearglow/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle navigation · Welcome to hair salon! · Mon – Sat: 8.00 AM – 8.00 PM · Shear · Glow · Book Now

### 2. Hero
- The page SHALL display a full-width hero section with a background image and call-to-action text.
- Scenario — Hero content:
  - **WHEN** I view the hero section
  - **THEN** a large heading "We Care About Your Hair" SHALL be displayed over
  - **AND** a quote/tagline paragraph SHALL appear below the heading
  - **AND** an "About Us" button SHALL be displayed below the text

### 3. About
- The page SHALL display a three-column about section.
- Scenario — About layout:
  - **WHEN** I view the about section
  - **THEN** the left column SHALL show the heading "Hair Salon" with subtitle
  - **AND** the middle column SHALL show a salon image
  - **AND** the right column SHALL show "Beautiful Hair Comes From A Legendary."

### 4. Services
- The page SHALL display a four-column services grid.
- Scenario — Services layout:
  - **WHEN** I view the services section
  - **THEN** a centered heading "Our Services" SHALL be displayed
  - **AND** four service cards SHALL be shown in a row: Coloring, Haircut,

### 5. WhyChooseUs
- The page SHALL display a two-column feature section with a gray background.
- Scenario — Why Choose Us layout:
  - **WHEN** I view the Why Choose Us section
  - **THEN** the left side SHALL show a salon image
  - **AND** the right side SHALL show "Why Choose Us" heading, a paragraph, and

### 6. Portfolio
- The page SHALL display a filterable portfolio gallery.
- Scenario — Portfolio filters:
  - **WHEN** I view the portfolio section
  - **THEN** filter buttons SHALL be displayed: All, Haircuts, Dye, Shave
  - **AND** clicking a filter SHALL show only matching portfolio items
- Scenario — Portfolio grid:
  - **WHEN** I view the portfolio section
  - **THEN** a grid of portfolio image cards SHALL be displayed below the filters

### 7. Experts
- The page SHALL display a team/experts section with certificates.
- Scenario — Experts layout:
  - **WHEN** I view the experts section
  - **THEN** a side background image SHALL be displayed
  - **AND** the heading "Our Experts" SHALL appear with a description paragraph
  - **AND** certificate images SHALL be shown below the heading
  - **AND** team member cards SHALL be displayed in a row with photos, names,

### 8. Blog
- The page SHALL display a blog posts section.
- Scenario — Blog layout:
  - **WHEN** I view the blog section
  - **THEN** a centered heading "Latest News" SHALL be displayed
  - **AND** three blog post cards SHALL be shown in a row with thumbnails,

### 9. CTA
- The page SHALL display a call-to-action section with a background image.
- Scenario — CTA layout:
  - **WHEN** I view the CTA section
  - **THEN** "Make Stilo Your Number One Choice" heading SHALL be displayed
  - **AND** two buttons SHALL be shown: "Book An Appointment" (active/gold)
  - **AND** a background image SHALL fill the right side

### 10. Footer
- The page SHALL display a three-column footer.
- Scenario — Footer layout:
  - **WHEN** I view the footer
  - **THEN** the left column SHALL show the logo, description, and copyright
  - **AND** the middle column SHALL show "Opening times" with hours and social
  - **AND** the right column SHALL show "Contact Us" with phone, email, and
  - **AND** a Component Dock link SHALL replace the Colorlib attribution

### Cross-cutting requirements

- **Header** — The page SHALL display a header with a top info bar, main nav, and branding.
  - Scenario — Top info bar: **WHEN** I view the page; **THEN** a thin dark bar SHALL appear at the top with "Welcome to hair salon!"
  - Scenario — Main navigation: **WHEN** I view the page; **THEN** a navigation bar SHALL display the logo on the left and links:; **AND** a "Book Now" button SHALL appear on the right side of the nav; **AND** the nav SHALL be sticky on scroll
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/shearglow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/shearglow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Top info bar with welcome text + hours + phone; [ ] Sticky nav with logo, links, dropdown, "Book Now" button; [ ] Hero slider with background image, heading, quote, "About Us" button; [ ] About section: 3-column layout (heading, image, content); [ ] Services section: 4-column grid with icons; [ ] Why Choose Us: image + heading + bullet list on gray background; [ ] Portfolio: filter buttons + image grid; [ ] Experts: side thumbnail + heading + certificates + team cards; [ ] Blog: 3-column post cards; [ ] CTA: heading + two buttons + background image; [ ] Footer: 3-column with logo, hours, contact; [ ] Gold (#bca858) brand color used for accents and active states; [ ] Playfair Display for headings and buttons; [ ] Open Sans for body text; [ ] Responsive layout across breakpoints; [ ] Component Dock footer link; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/shearglow` ships on https://shearglow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/shearglow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/shearglow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shearglow/public/CNAME` = `shearglow.free.componentdock.com`
  and the package `homepage` = `https://shearglow.free.componentdock.com`.
