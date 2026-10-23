# Parapet — Implementation Tasks

Source design: **Buildcraft** (`https://colorlib.com/wp/template/buildcraft/`) → recreation name **parapet**. Shipped at https://parapet.free.componentdock.com.

Scope: Parapet is a single-page construction company landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Buildcraft" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/parapet/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Parapet", anchor links to the page's sections, a "Get a Quote" button, and a dark-mode toggle button.
- Scenario — Navbar content:
  - **GIVEN** the Parapet page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Parapet" and links to Services, Projects, Process, About, and Contact
  - **AND** the navbar SHALL show a "Get a Quote" button and a dark-mode toggle button
- Scenario — Dark mode toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the dark-mode toggle
  - **THEN** the `.dark` class SHALL be toggled on the document root element
  - **AND** the toggle SHALL reflect the current mode

### 2. Hero
- The system SHALL render a full-width hero with an acceptance badge, a level-1 headline, a blurb, two call-to-action links, a stats row, and a construction image.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it SHALL show the badge "Trusted by 500+ clients since 1998"
  - **AND** it SHALL contain a level-1 heading whose text mentions "Building Tomorrow's"
  - **AND** it SHALL show a blurb about quality construction for residential and commercial projects
  - **AND** it SHALL show "Get Free Estimate" and "View Our Projects" links
  - **AND** it SHALL show the stats "500+ Projects Completed" and "25+ Years Experience"

### 3. Stats
- The system SHALL render a stats strip with four labeled counts.
- Scenario — Stats content:
  - **GIVEN** the page is rendered
  - **WHEN** the stats strip is displayed
  - **THEN** it SHALL show "Projects Completed", "Years Experience", "On-Time Delivery", and "Team Members" labels
  - **AND** each label SHALL be paired with a numeric value

### 4. Services
- The system SHALL render a services section with a heading and six service cards, each with a title and description.
- Scenario — Services content:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is displayed
  - **THEN** it SHALL contain a heading "What We Build"
  - **AND** it SHALL show Residential Construction, Commercial Buildings, Renovation & Remodeling, Interior Design, Project Management, and Green Building
  - **AND** each service SHALL show a short description

### 5. Projects
- The system SHALL render a projects section with a heading and four project cards, each with a year, location, title, and description.
- Scenario — Projects content:
  - **GIVEN** the page is rendered
  - **WHEN** the projects section is displayed
  - **THEN** it SHALL contain a heading "Our Recent Projects"
  - **AND** it SHALL show Skyline Tower Complex, Riverside Luxury Estates, Metro Innovation Hub, and Lakeside Residence
  - **AND** each project SHALL show a year and a location

### 6. Results
- The system SHALL render a before/after results gallery with a heading and two renovation pairs.
- Scenario — Results content:
  - **GIVEN** the page is rendered
  - **WHEN** the results section is displayed
  - **THEN** it SHALL contain a heading "Project Transformations"
  - **AND** it SHALL show "Home Renovation" and "Kitchen Remodel" treatments
  - **AND** each treatment SHALL show "Before" and "After" labels

### 7. Process
- The system SHALL render a four-step process section with a heading.
- Scenario — Process content:
  - **GIVEN** the page is rendered
  - **WHEN** the process section is displayed
  - **THEN** it SHALL contain a heading "How We Build"
  - **AND** it SHALL show Consultation, Planning, Construction, and Handover steps
  - **AND** each step SHALL show a short description

### 8. About
- The system SHALL render an about section with a heading, a blurb, and a stats row.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is displayed
  - **THEN** it SHALL contain a heading "Building Excellence Since 1998"
  - **AND** it SHALL show a blurb about the company's experience
  - **AND** it SHALL show "500+ Projects Completed" and "150+ Team Members" stats

### 9. Testimonials
- The system SHALL render a testimonials carousel with a heading, reviews, star ratings, and previous/next controls.
- Scenario — Testimonials content:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL contain a heading "What Our Clients Say"
  - **AND** it SHALL show a review with a five-star rating and a reviewer name
  - **AND** it SHALL show "Previous testimonial" and "Next testimonial" controls
- Scenario — Navigating the carousel:
  - **GIVEN** the testimonials section is displayed
  - **WHEN** the user presses the "Next testimonial" control
  - **THEN** a different review SHALL be displayed
  - **WHEN** the user presses the "Previous testimonial" control
  - **THEN** the previous review SHALL be displayed again

### 10. Contact
- The system SHALL render a "Request a Free Quote" section with a form and four contact detail cards.
- Scenario — Contact content:
  - **GIVEN** the page is rendered
  - **WHEN** the contact section is displayed
  - **THEN** it SHALL contain a heading "Request a Free Quote"
  - **AND** the form SHALL include Full Name, Email Address, Phone Number, Project Type, and Project Details fields
  - **AND** it SHALL show Phone, Email, Address, and Office Hours details
- Scenario — Submitting an incomplete form:
  - **GIVEN** the contact section is displayed
  - **WHEN** the user submits the form without entering a name and a valid email
  - **THEN** the form SHALL show validation errors
  - **AND** no success message SHALL be shown
- Scenario — Submitting a valid form:
  - **GIVEN** the contact section is displayed
  - **WHEN** the user fills in a name, valid email, phone, project type, and details and submits
  - **THEN** a success message SHALL be displayed
  - **AND** the form fields SHALL be replaced by the success message

### 11. Faq
- The system SHALL render an FAQ accordion with a heading and five questions, each expandable to reveal an answer.
- Scenario — FAQ content:
  - **GIVEN** the page is rendered
  - **WHEN** the FAQ section is displayed
  - **THEN** it SHALL contain a heading "Frequently Asked Questions"
  - **AND** it SHALL show the question "How long does a typical construction project take?"
- Scenario — Expanding an FAQ item:
  - **GIVEN** the FAQ section is displayed
  - **WHEN** the user presses an FAQ question
  - **THEN** the answer for that question SHALL be revealed
  - **AND** pressing it again SHALL hide the answer

### 12. Cta
- The system SHALL render an amber gradient call-to-action section with a heading, a blurb, and two links.
- Scenario — CTA content:
  - **GIVEN** the page is rendered
  - **WHEN** the CTA section is displayed
  - **THEN** it SHALL contain a heading "Ready to Start Your Project?"
  - **AND** it SHALL show a blurb about a free estimate
  - **AND** it SHALL show "Get Free Estimate" and "Call Us Now" links

### 13. Footer
- The system SHALL render a dark footer with a brand blurb, three link columns, contact details, and a copyright line.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the site name "Parapet" and a brand blurb
  - **AND** it SHALL show Services, Company, and Support columns
  - **AND** it SHALL show a copyright line mentioning Parapet

### Cross-cutting requirements

- **Page composition** — The system SHALL compose all sections in a single page with a main landmark and a document title.
  - Scenario — Full page render: **GIVEN** the Parapet app is rendered; **WHEN** the page loads; **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark; **AND** the document title SHALL be "Parapet — Astro Template"
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/parapet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/parapet/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/parapet` ships on https://parapet.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/parapet/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/parapet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/parapet/public/CNAME` = `parapet.free.componentdock.com`
  and the package `homepage` = `https://parapet.free.componentdock.com`.
