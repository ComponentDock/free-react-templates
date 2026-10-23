# Dialpad — Implementation Tasks

Source design: **Callcenter** (`https://colorlib.com/wp/template/callcenter/`) → recreation name **dialpad**. Shipped at https://dialpad.free.componentdock.com.

Scope: Dialpad is a single-page call-center landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Callcenter" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).

## Component breakdown

Render order as composed in `apps/dialpad/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Dialpad" and links to the page's sections, plus a dark-mode toggle button.
- Scenario — Navbar content:
  - **GIVEN** the Dialpad page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the logo text "Dialpad"
  - **AND** the navbar SHALL show navigation links: Home, Features, We Offer,
  - **AND** the navbar SHALL show a dark-mode toggle button
- Scenario — Navbar sticky behavior:
  - **GIVEN** the Dialpad page is rendered
  - **WHEN** the user scrolls down past the navbar
  - **THEN** the navbar SHALL remain fixed at the top of the viewport
- Scenario — Dark mode toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the dark-mode toggle
  - **THEN** the `.dark` class SHALL be toggled on the document root element
  - **AND** the toggle SHALL reflect the current mode

### 2. Hero
- The system SHALL render a full-width hero section with a dark overlay background, a subtitle, a main heading, a description paragraph, and a call-to-action button.
- Scenario — Hero content:
  - **GIVEN** the hero section is rendered
  - **WHEN** the page loads
  - **THEN** the hero SHALL display the subtitle "Discover the Colorful World"
  - **AND** it SHALL display the heading "Efficiency Booster"
  - **AND** it SHALL display a descriptive paragraph below the heading
  - **AND** it SHALL display a "Discover Now" CTA button styled as a gradient
- Scenario — Hero overlay:
  - **GIVEN** the hero section is rendered
  - **WHEN** the hero is inspected
  - **THEN** the hero background SHALL have a dark gradient overlay
  - **AND** the text content SHALL be white/light colored for contrast

### 3. Features
- The system SHALL render a features section on a light background with three feature cards in a horizontal row, each containing an icon, a title, and a short description.
- Scenario — Features content:
  - **GIVEN** the features section is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display three feature cards: "Online Support" (headset
  - **AND** each card SHALL have a circular icon with the brand accent color
- Scenario — Features layout:
  - **GIVEN** the features section is rendered on a wide viewport
  - **WHEN** the feature cards are laid out
  - **THEN** the three cards SHALL appear in a single horizontal row

### 4. Testimonials
- The system SHALL render a testimonials section with a dark overlay background and a heading "Why Choose Us Your Trusted Partner", containing two testimonial cards with avatar images, names, roles, and quotes.
- Scenario — Testimonials content:
  - **GIVEN** the testimonials section is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display the heading "Why Choose Us Your Trusted Partner"
  - **AND** it SHALL display two testimonial cards, each with an avatar image,
- Scenario — Testimonials overlay:
  - **GIVEN** the testimonials section is rendered
  - **WHEN** the section background is inspected
  - **THEN** the section SHALL have a dark gradient overlay background
  - **AND** the text content SHALL be light-colored for readability

### 5. OfferedServices
- The system SHALL render an offered-services section with a dark overlay background, a heading "Our Offered Services", a grid of six service icons on the left, and a "Content Synchronization" description with a "View Details" CTA button on the right.
- Scenario — Offered services layout:
  - **GIVEN** the offered services section is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display the heading "Our Offered Services"
  - **AND** it SHALL show six service icons in a 2×3 grid on the left side
  - **AND** it SHALL show the "Content Synchronization" description with a
- Scenario — Offered services icons:
  - **GIVEN** the offered services section is rendered
  - **WHEN** the icon grid is inspected
  - **THEN** the six icons SHALL each be in a circular container with the

### 6. Stats
- The system SHALL render a stats section on a light background with five stat counters in a row. Each counter SHALL display a number with gradient text and a label below it.
- Scenario — Stats content:
  - **GIVEN** the stats section is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display five stat items: "2536 Projects Completed",
- Scenario — Stats styling:
  - **GIVEN** the stats section is rendered
  - **WHEN** the stat numbers are inspected
  - **THEN** each number SHALL use gradient text styling
  - **AND** the stat labels SHALL appear below the numbers in muted text

### 7. Services
- The system SHALL render an offered-services section with a dark overlay background, a heading "Our Offered Services", a grid of six service icons on the left, and a "Content Synchronization" description with a "View Details" CTA button on the right.
- Scenario — Offered services layout:
  - **GIVEN** the offered services section is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display the heading "Our Offered Services"
  - **AND** it SHALL show six service icons in a 2×3 grid on the left side
  - **AND** it SHALL show the "Content Synchronization" description with a
- Scenario — Offered services icons:
  - **GIVEN** the offered services section is rendered
  - **WHEN** the icon grid is inspected
  - **THEN** the six icons SHALL each be in a circular container with the

### 8. AboutInfo
- The system SHALL render an about-info section on a light background with a split layout: an image on the left and text content on the right including a heading, a description paragraph, and a "Learn More" CTA button.
- Scenario — About info content:
  - **GIVEN** the about-info section is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display the heading "Responsible Customer Support"
  - **AND** it SHALL display a descriptive paragraph below the heading
  - **AND** it SHALL display a "Learn More" CTA button
  - **AND** it SHALL display an image on the left side

### 9. AboutVideo
- The system SHALL render an about-video section with a split layout: text content on the left (heading, description, "See Details" CTA button) and a video background area with a play button overlay on the right.
- Scenario — About video content:
  - **GIVEN** the about-video section is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display the heading "We Believe that Interior beautifies
  - **AND** it SHALL display a description paragraph and a "See Details" CTA
- Scenario — About video play button:
  - **GIVEN** the about-video section is rendered
  - **WHEN** the right side video area is inspected
  - **THEN** it SHALL display a play button overlay centered on the video

### 10. BrandLogos
- The system SHALL render a brand-logos section displaying five partner/client logos in a horizontal row. The logos SHALL transition from grayscale to full color on hover.
- Scenario — Brand logos content:
  - **GIVEN** the brand-logos section is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display five partner logos in a horizontal row
- Scenario — Brand logos hover effect:
  - **GIVEN** the brand-logos section is rendered
  - **WHEN** the user hovers over a logo
  - **THEN** the logo SHALL transition from grayscale to full color

### 11. ContactForm
- The system SHALL render a contact form section with the heading "If you need, Just drop us a line", containing a form with name, email, and subject inputs, a message textarea, and a "Send Message" CTA button.
- Scenario — Contact form fields:
  - **GIVEN** the contact form section is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display the heading "If you need, Just drop us a line"
  - **AND** the form SHALL contain a name input, an email input, a subject
  - **AND** the form SHALL have a "Send Message" button styled as a gradient
- Scenario — Contact form submission:
  - **GIVEN** the contact form is rendered with all fields filled
  - **WHEN** the user clicks "Send Message"
  - **THEN** the form SHALL handle the submit event (prevent default, no

### 12. Footer
- The system SHALL render a dark footer with three columns (About Us, Contact Us, Newsletter), a social icons row, and a copyright line with Component Dock attribution.
- Scenario — Footer content:
  - **GIVEN** the footer is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL display an "About Us" column with a short blurb
  - **AND** it SHALL display a "Contact Us" column with phone numbers and
  - **AND** it SHALL display a "Newsletter" column with an email input and
- Scenario — Footer social icons:
  - **GIVEN** the footer is rendered
  - **WHEN** the social icons row is inspected
  - **THEN** it SHALL display a row of social media icon links
- Scenario — Footer copyright attribution:
  - **GIVEN** the footer copyright bar is rendered
  - **WHEN** it is inspected
  - **THEN** it SHALL include a link to `https://www.componentdock.com/`
  - **AND** it SHALL NOT include any ColorLib attribution

### Cross-cutting requirements

- **Services section** — The system SHALL render a services section with a dark overlay background, a heading "Some Awesomeness that should share", and six service cards in a 3×2 grid. Each card SHALL have an icon, a title, and a short description.
  - Scenario — Services content: **GIVEN** the services section is rendered; **WHEN** it is inspected; **THEN** it SHALL display the heading "Some Awesomeness that should share"; **AND** it SHALL show six service cards: "Expert Technicians", "Professional
  - Scenario — Services layout: **GIVEN** the services section is rendered on a wide viewport; **WHEN** the service cards are laid out; **THEN** the six cards SHALL be arranged in a 3-column × 2-row grid
- **Page composition** — The system SHALL compose the full page in this order: navbar → hero → features → testimonials → offered services → stats → services → about info → about video → brand logos → contact form → footer, with no unimplemented sections.
  - Scenario — Full page render: **GIVEN** the Dialpad app is rendered; **WHEN** the page is inspected; **THEN** all twelve sections appear in the source order; **AND** the page has no console errors
  - Scenario — Document title: **GIVEN** the Dialpad app is rendered; **WHEN** the page loads; **THEN** the document title SHALL be "Dialpad — Call Center Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/dialpad/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/dialpad/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Spec validated: `npm run spec:validate` passes for; [ ] App `apps/dialpad` created on branch `feat/template-dialpad` by an; [ ] All Gherkin scenarios above covered by Vitest + Testing Library tests; [ ] `npm run verify:app dialpad` passes: typecheck, lint, knip, fallow,; [ ] Design tokens match the reference: `#8490ff` primary, gradient; [ ] Footer links `https://www.componentdock.com/`; no ColorLib references; [ ] `public/CNAME` = `dialpad.free.componentdock.com`; `homepage` =; [ ] `npm run readme:status` regenerates README status; TEMPLATES.md row; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/dialpad` ships on https://dialpad.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dialpad/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dialpad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dialpad/public/CNAME` = `dialpad.free.componentdock.com`
  and the package `homepage` = `https://dialpad.free.componentdock.com`.
