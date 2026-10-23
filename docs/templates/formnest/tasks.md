# Formnest — Implementation Tasks

Source design: **Contact Form 14** (`https://colorlib.com/wp/template/contact-form-14/`) → recreation name **formnest**. Shipped at https://formnest.free.componentdock.com.

Scope: Formnest is a split-screen contact form template for marketing agencies and freelancers. It features an olive green background with a text panel on the left and a white form card on the right. The design recreates ColorLib Contact Form 14 under the original name "Formnest".

## Component breakdown

Render order as composed in `apps/formnest/src/App.tsx`:

### 1. InfoPanel
- The left panel SHALL display a heading, descriptive paragraphs, and an email contact link.
- Scenario — Heading renders:
  - **GIVEN** the page is loaded
  - **WHEN** the user views the left panel
  - **THEN** the heading "Let's work together" is displayed
- Scenario — Email link:
  - **GIVEN** the page is loaded
  - **WHEN** the user views the left panel
  - **THEN** the email "info@mywebsite.com" is displayed as a mailto link

### 2. ContactForm
- The form card SHALL contain fields for Name, Organization, Email, Project Description, Budget, and Target Launch.
- Scenario — Form fields present:
  - **GIVEN** the form card is visible
  - **WHEN** the user inspects the form
  - **THEN** the Name input with placeholder "Your name" is present
  - **AND** the Organization input with placeholder "Your organization" is present
  - **AND** the Email input with placeholder "Your email address" is present
  - **AND** the Project Description textarea is present
  - **AND** the Budget select dropdown is present with "Choose..." as default
  - **AND** the Target Launch input with placeholder "Example: January 15th" is present
- Scenario — Required fields marked:
  - **GIVEN** the form is rendered
  - **WHEN** the user views the form labels
  - **THEN** Name, Email, and Project Description are marked as required

### 3. Footer
- The page SHALL display a footer with a link to Component Dock.
- Scenario — Footer renders:
  - **GIVEN** the user scrolls to the bottom of the page
  - **WHEN** the footer is visible
  - **THEN** a link to "https://www.componentdock.com/" labeled "Component Dock" is present

### Cross-cutting requirements

- **Page renders with split-screen layout** — The page SHALL display a two-column layout on desktop with the text panel on the left and the form card on the right, stacking vertically on mobile.
  - Scenario — Desktop layout: **GIVEN** the user opens the page on a desktop viewport; **WHEN** the page loads; **THEN** the heading "Let's work together" is visible on the left; **AND** the form card with "How can we help?" label is visible on the right
  - Scenario — Mobile layout: **GIVEN** the user opens the page on a mobile viewport; **WHEN** the page loads; **THEN** the text panel appears above the form card
- **Form submission** — The form SHALL prevent default submission when the Send Message button is clicked.
  - Scenario — Submit button works: **GIVEN** the form is rendered; **WHEN** the user clicks "Send Message"; **THEN** the form submission is handled (default prevented)
- **User can fill form fields** — The form SHALL allow the user to type in all text fields and select budget options.
  - Scenario — Type in text fields: **GIVEN** the form is rendered; **WHEN** the user types in the Name field; **THEN** the field value updates to reflect the typed text
  - Scenario — Select budget option: **GIVEN** the form is rendered; **WHEN** the user selects a budget option from the dropdown; **THEN** the dropdown value updates to the selected option
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formnest/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formnest` ships on https://formnest.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formnest/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formnest/public/CNAME` = `formnest.free.componentdock.com`
  and the package `homepage` = `https://formnest.free.componentdock.com`.
