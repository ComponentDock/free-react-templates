# Credentia — Implementation Tasks

Source design: **Civic** (`https://colorlib.com/wp/template/civic/`) → recreation name **credentia**. Shipped at https://credentia.free.componentdock.com.

Scope: Credentia is a single-page CV/resume template — a personal portfolio template for showcasing work experience, education, skills, and contact information.

## Component breakdown

Render order as composed in `apps/credentia/src/App.tsx`:

### 1. Header
- The system SHALL render a sticky header with the site name "Credentia", a tagline "Enhance your online presence", and two CTA buttons ("Download CV" and "Discover me").
- Scenario — Desktop header:
  - **GIVEN** the page is rendered
  - **WHEN** the header is displayed
  - **THEN** it SHALL show "Credentia" as the site name
  - **AND** it SHALL show the tagline "Enhance your online presence"
  - **AND** it SHALL show "Download CV" and "Discover me" buttons

### 2. Hero
- The system SHALL render a two-column hero with the person's name, bio paragraph, general info list (Date of Birth, Address, Email, Phone), and a portrait image.
- Scenario — Hero content:
  - **GIVEN** the hero section renders
  - **WHEN** I read the left column
  - **THEN** I SHALL see the name "Maria Williams"
  - **AND** I SHALL see a bio paragraph
  - **AND** I SHALL see general info with DOB, Address, Email, Phone
- Scenario — Hero portrait:
  - **GIVEN** the hero section renders
  - **WHEN** I look at the right column
  - **THEN** I SHALL see a portrait image

### 3. SocialLinks
- The system SHALL render a social links section with 5 social media icons (Pinterest, LinkedIn, Instagram, Facebook, Twitter) and a "My Social Profiles" heading.
- Scenario — Social icons:
  - **GIVEN** the social section renders
  - **WHEN** I count the social icons
  - **THEN** I SHALL see exactly 5 icons
  - **AND** the heading "My Social Profiles" SHALL be present

### 4. WorkExperience
- The system SHALL render a work experience section with the heading "Work Experience" and a timeline list of work entries (year range, company name, role, description).
- Scenario — Work entries:
  - **GIVEN** the work experience section renders
  - **WHEN** I count the entries
  - **THEN** I SHALL see 2 work experience items
  - **AND** each item SHALL have a year range, company, role, and description

### 5. Education
- The system SHALL render an education section with the heading "Education" and a timeline list of education entries (year, diploma name, school, description) on an alternate background.
- Scenario — Education entries:
  - **GIVEN** the education section renders
  - **WHEN** I count the entries
  - **THEN** I SHALL see 2 education items
  - **AND** each item SHALL have a year, diploma, school, and description

### 6. References
- The system SHALL render a references section with the heading "References" and a grid of testimonial cards (quote, name, role).
- Scenario — Reference cards:
  - **GIVEN** the references section renders
  - **WHEN** I count the testimonial cards
  - **THEN** I SHALL see 3 reference cards
  - **AND** each card SHALL have a quote, name, and role

### 7. Portfolio
- The system SHALL render a portfolio section with the heading "Portfolio", a "See All Portfolio" button, and a 4-column grid of portfolio items (image, title, category).
- Scenario — Portfolio items:
  - **GIVEN** the portfolio section renders
  - **WHEN** I count the items
  - **THEN** I SHALL see 4 portfolio items
  - **AND** each item SHALL have an image, title, and category label
- Scenario — Portfolio CTA:
  - **GIVEN** the portfolio section renders
  - **WHEN** I look for the call-to-action
  - **THEN** I SHALL see a "See All Portfolio" button

### 8. ExtraSkills
- The system SHALL render an extra skills section with the heading "Extra Skills" and circular progress indicators (percentage + label) alongside stat boxes (years of experience, happy clients, awards won).
- Scenario — Skill indicators:
  - **GIVEN** the extra skills section renders
  - **WHEN** I look for progress indicators
  - **THEN** I SHALL see at least 2 circular progress percentages
  - **AND** I SHALL see stat boxes with numbers and labels

### 9. Contact
- The system SHALL render a contact section with the heading "Get In Touch", a contact form (name, email, subject, message fields + submit button), and contact information (address, phone, email).
- Scenario — Contact form:
  - **GIVEN** the contact section renders
  - **WHEN** I look for the form
  - **THEN** I SHALL see name, email, subject, and message fields
  - **AND** I SHALL see a submit button
- Scenario — Contact info:
  - **GIVEN** the contact section renders
  - **WHEN** I look for contact details
  - **THEN** I SHALL see address, phone, and email information

### 10. Footer
- The system SHALL render a footer with copyright text and a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer attribution:
  - **GIVEN** the footer renders
  - **WHEN** I look for the attribution
  - **THEN** I SHALL see a link to https://www.componentdock.com/
  - **AND** the link text SHALL mention "Component Dock"

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/credentia/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/credentia/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/credentia` ships on https://credentia.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/credentia/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/credentia/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/credentia/public/CNAME` = `credentia.free.componentdock.com`
  and the package `homepage` = `https://credentia.free.componentdock.com`.
