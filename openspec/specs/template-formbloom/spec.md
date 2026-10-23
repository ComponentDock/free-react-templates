# Template: Formbloom (Contact Form)

> Recreation of ColorLib **Contact Form 15**
> (https://colorlib.com/wp/template/contact-form-15/)

## Purpose

A minimal, monochrome contact form template with a two-column layout (location info + contact info) and a full-width message form below. Pure white background, Quicksand font, solid black "Send Message" button.

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-15/` | HTTP 200 · 2,773 B · title `Contact Form #5` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-15/css/style.css?v=f578b57e` | HTTP 200 · 13,532 B · sha256 `dc952ec40953` |

**Live palette** (hex × occurrences across the sheets): `#ccda46`×4,
`#b7c628`×2.

## Requirements

### Requirement: Page renders all sections

Users SHALL see location info, contact info, and a message form on page load.

#### Scenario: All section headings visible

- **WHEN** the app loads
- **THEN** the heading "NEW YORK" is visible
- **AND** the heading "CONTACT INFO" is visible
- **AND** the heading "MESSAGE US" is visible

### Requirement: Contact details displayed

Users SHALL see the location address, phone number, and email address.

#### Scenario: Contact information visible

- **WHEN** the app loads
- **THEN** the address "9757 Aspen Lane South" is visible
- **AND** the phone "+1 (291) 939 9321" is visible
- **AND** the email "info@mywebsite.com" is visible

### Requirement: Form fields present and functional

Users SHALL see name, email, and message fields and be able to type into them.

#### Scenario: Form fields exist

- **WHEN** the app loads
- **THEN** a text input with placeholder "Your name" exists
- **AND** a text input with placeholder "Email" exists
- **AND** a textarea with placeholder "Write your message" exists
- **AND** a button labeled "Send Message" exists

#### Scenario: User can type in all fields

- **WHEN** the user types "Alice" into the name field
- **AND** types "alice@example.com" into the email field
- **AND** types "Hello" into the message textarea
- **THEN** all three fields contain the typed text

### Requirement: Footer links to Component Dock

Users SHALL see a footer with a link to https://www.componentdock.com/.

#### Scenario: Footer link present

- **WHEN** the app loads
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formbloom/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formbloom/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Page renders all sections — the heading "NEW YORK" is visible
- [x] Contact details displayed — the address "9757 Aspen Lane South" is visible
- [x] Form fields present and functional — a text input with placeholder "Your name" exists
