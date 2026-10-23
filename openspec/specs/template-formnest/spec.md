# Template: Formnest (Contact Form)

Recreation of ColorLib "Contact Form V14" (https://colorlib.com/wp/template/contact-form-14/).

## Purpose

Formnest is a split-screen contact form template for marketing agencies and
freelancers. It features an olive green background with a text panel on the
left and a white form card on the right. The design recreates ColorLib
Contact Form 14 under the original name "Formnest".

## Design reference (replication findings)

- **Source:** ColorLib "Contact Form V14" — https://colorlib.com/wp/template/contact-form-14/
- **Source slug:** `contact-form-14`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/contact-form-14/ — **HTTP 200**, 4,726 B, fetched 2026-10-23 (page `<title>`: "Contact Form #4"). The slug-only path `https://preview.colorlib.com/theme/contact-form-14/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/contact-form-14/css/style.css?v=b9a397e5`, fetched 2026-10-23): brand `#ccda46`, `#e9efb0`, `#b7c628`, `#a3b023`; dominant neutrals `#212529`, `#495057`, `#6c757d`; type Poppins, Roboto. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-14.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/formnest` had no recorded reference (docs/replication.md requires one).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#ccda46` | live sheet paints it ×5 — `background-color` on `.cl-btn-primary`; style.css?v=b9a397e5 (16,915 B, sha256 3478dc962c13) · <https://preview.colorlib.com/theme/bootstrap/contact-form-14/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Page renders with split-screen layout

The page SHALL display a two-column layout on desktop with the text panel on
the left and the form card on the right, stacking vertically on mobile.

#### Scenario: Desktop layout

- **GIVEN** the user opens the page on a desktop viewport
- **WHEN** the page loads
- **THEN** the heading "Let's work together" is visible on the left
- **AND** the form card with "How can we help?" label is visible on the right

#### Scenario: Mobile layout

- **GIVEN** the user opens the page on a mobile viewport
- **WHEN** the page loads
- **THEN** the text panel appears above the form card

### Requirement: Contact information panel

The left panel SHALL display a heading, descriptive paragraphs, and an email
contact link.

#### Scenario: Heading renders

- **GIVEN** the page is loaded
- **WHEN** the user views the left panel
- **THEN** the heading "Let's work together" is displayed

#### Scenario: Email link

- **GIVEN** the page is loaded
- **WHEN** the user views the left panel
- **THEN** the email "info@mywebsite.com" is displayed as a mailto link

### Requirement: Contact form renders all fields

The form card SHALL contain fields for Name, Organization, Email, Project
Description, Budget, and Target Launch.

#### Scenario: Form fields present

- **GIVEN** the form card is visible
- **WHEN** the user inspects the form
- **THEN** the Name input with placeholder "Your name" is present
- **AND** the Organization input with placeholder "Your organization" is present
- **AND** the Email input with placeholder "Your email address" is present
- **AND** the Project Description textarea is present
- **AND** the Budget select dropdown is present with "Choose..." as default
- **AND** the Target Launch input with placeholder "Example: January 15th" is present

#### Scenario: Required fields marked

- **GIVEN** the form is rendered
- **WHEN** the user views the form labels
- **THEN** Name, Email, and Project Description are marked as required

### Requirement: Form submission

The form SHALL prevent default submission when the Send Message button is
clicked.

#### Scenario: Submit button works

- **GIVEN** the form is rendered
- **WHEN** the user clicks "Send Message"
- **THEN** the form submission is handled (default prevented)

### Requirement: Footer with Component Dock link

The page SHALL display a footer with a link to Component Dock.

#### Scenario: Footer renders

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" labeled "Component Dock" is present

### Requirement: User can fill form fields

The form SHALL allow the user to type in all text fields and select budget
options.

#### Scenario: Type in text fields

- **GIVEN** the form is rendered
- **WHEN** the user types in the Name field
- **THEN** the field value updates to reflect the typed text

#### Scenario: Select budget option

- **GIVEN** the form is rendered
- **WHEN** the user selects a budget option from the dropdown
- **THEN** the dropdown value updates to the selected option

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formnest/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Page renders with split-screen layout — the heading "Let's work together" is visible on the left
- [ ] Contact information panel — the heading "Let's work together" is displayed
- [x] Contact form renders all fields — the Name input with placeholder "Your name" is present
- [ ] Form submission — the form submission is handled (default prevented)
- [ ] User can fill form fields — the field value updates to reflect the typed text
