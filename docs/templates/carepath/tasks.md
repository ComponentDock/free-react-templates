# Carepath — Implementation Tasks

Source design: **Medcare** (`https://colorlib.com/wp/template/medcare/`) → recreation name **carepath**. Shipped at https://carepath.free.componentdock.com.

Scope: A medical/healthcare website template with top bar, navbar, hero banner, feature cards, services, about section, team cards. It also includes appointment area (FAQ + form), blog carousel, brand logos, and footer. Recreation of ColorLib **Medcare**.

## Component breakdown

Render order as composed in `apps/carepath/src/App.tsx`:

### 1. TopBar
- The top bar SHALL display an email address, a location link, and social media icons (Facebook, Twitter, LinkedIn, Skype, Vimeo).
- Scenario — Top bar renders contact and social:
  - **WHEN** the page loads
  - **THEN** the email `medical@example.com` is visible
  - **AND** a location link "Find our Location" is visible
  - **AND** social media icons are displayed

### 2. Navbar
- The navbar SHALL display the CarePath logo and navigation links: Home, About, Department, Doctors, Blog (with dropdown for Blog, Blog Details, Element), Contact.
- Scenario — Navbar renders all nav items:
  - **WHEN** the page loads
  - **THEN** the CarePath logo is visible
  - **AND** navigation links "Home", "About", "Department", "Doctors", "Blog", "Contact" are displayed
- Scenario — Blog dropdown shows sub-items:
  - **WHEN** the user hovers/clicks on "Blog"
  - **THEN** a dropdown shows "Blog", "Blog Details", "Element"

### 3. HeroBanner
- The hero banner SHALL display the heading "Making Health Care Better Together", description text, and two CTA buttons: "Make an Appointment" (primary) and "View Department" (light).
- Scenario — Hero renders heading and CTAs:
  - **WHEN** the page loads
  - **THEN** the heading "Making Health Care Better Together" is displayed
  - **AND** a "Make an Appointment" button is present
  - **AND** a "View Department" button is present

### 4. FeatureStrip
- The feature section SHALL display three cards: Primary Care, Emergency Cases, and Online Appointment, each with an icon, title, and description.
- Scenario — Feature section renders three cards:
  - **WHEN** the feature section is rendered
  - **THEN** "Primary Care", "Emergency Cases", and "Online Appointment" cards are shown
  - **AND** each card has an icon, title, and subtitle description

### 5. Services
- The services section SHALL display the heading "Awesome Health Service" with a description, and three service cards: Neurology Service, Dental Clinic, and Plastic Surgery, each with an icon, title, description, and "Learn More" link.
- Scenario — Services section renders three items:
  - **WHEN** the services section is rendered
  - **THEN** "Neurology Service", "Dental Clinic", and "Plastic Surgery" cards are shown
  - **AND** each card has a "Learn More" link

### 6. About
- The about section SHALL display the heading "Second Abundantly Move That Cattle Perform Appen Land", a subheading, paragraph text, and a "learn more" link. The about section is positioned right-aligned on desktop.
- Scenario — About section renders content:
  - **WHEN** the about section is visible
  - **THEN** the heading is displayed
  - **AND** a "learn more" link is present

### 7. Team
- The team section SHALL display the heading "Medcare Experience Doctors" with description text, and three doctor cards with photo, name, specialty, phone number, and social icons.
- Scenario — Team section renders three doctors:
  - **WHEN** the team section is rendered
  - **THEN** three doctor cards are shown
  - **AND** each card has a photo, name, specialty (Cardiologist), phone number, and social icons (Facebook, Twitter, Instagram, Skype)

### 8. Appointment
- The appointment area SHALL display "Have Some Questions?" heading with a 5-item FAQ accordion on the left, and a "Make an Appointment" form with Full Name, Email, Message fields and a submit button on the right.
- Scenario — Appointment area renders FAQ and form:
  - **WHEN** the appointment area is rendered
  - **THEN** the FAQ accordion with 5 questions is displayed
  - **AND** the appointment form with Name, Email, Message fields is shown
  - **AND** a "Make an Appointment" submit button is present

### 9. Blog
- The blog section SHALL display three blog post cards with an image, category tags (medical, dental, health), title, comment count, and like count.
- Scenario — Blog section renders three posts:
  - **WHEN** the blog section is rendered
  - **THEN** three blog cards are shown
  - **AND** each card has category tags, a title, comment count, and like count

### 10. Brands
- The brands section SHALL display a carousel of 6 brand/partner logos on a light (#f7f7f7) background.
- Scenario — Brands carousel renders logos:
  - **WHEN** the brands section is rendered
  - **THEN** a carousel of brand logos is displayed

### 11. Footer
- The footer SHALL display four link columns (Top Products, Quick Links, Features, Resources), a Newsletter section with email input and submit button, social icons (Facebook, Twitter, Dribbble, LinkedIn), and a copyright line. The footer MUST link `https://www.componentdock.com/` branded as "Component Dock".
- Scenario — Footer renders all sections:
  - **WHEN** the footer is rendered
  - **THEN** four link columns are displayed
  - **AND** a newsletter email input and button are present
  - **AND** social media icons are shown
  - **AND** a copyright line is present
  - **AND** a "Component Dock" link is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/carepath/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/carepath/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All 10 section components render without errors; [ ] Design tokens match: Open Sans body, Playfair Display headings, #0051d2 primary; [ ] Hero banner has correct heading and two CTA buttons; [ ] Feature section shows 3 cards with icons; [ ] Services section shows 3 service items with "Learn More" links; [ ] About section right-aligned on desktop; [ ] Team section shows 3 doctor cards with social icons; [ ] Appointment area: FAQ accordion (5 items) + form (Name, Email, Message); [ ] Blog section: 3 cards with tags, title, comments, likes; [ ] Brands logo carousel renders; [ ] Footer: 4 link columns + newsletter + social icons + copyright + Component Dock link; [ ] Responsive: mobile hamburger menu, stacked layouts; [ ] No ColorLib references in app code; [ ] Tests pass with 100% coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/carepath` ships on https://carepath.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/carepath/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/carepath/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carepath/public/CNAME` = `carepath.free.componentdock.com`
  and the package `homepage` = `https://carepath.free.componentdock.com`.
