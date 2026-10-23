# Template: Formpost (Contact Form)

Recreation of ColorLib "Contact Form 09"  
https://colorlib.com/wp/template/contact-form-09/  
Preview (screenshot fallback — preview unavailable):  
https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-09.jpg

## Purpose

Formpost is a contact form 09 with a contact info, contact form and footer. It recreates the ColorLib **Contact Form 09** design (https://colorlib.com/wp/template/contact-form-09/, preview: https://preview.colorlib.com/theme/bootstrap/contact-form-09/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens (from screenshot analysis)

| Token          | Value            | Notes                             |
| -------------- | ---------------- | --------------------------------- |
| brand          | `#c4a56e`        | Gold/tan accent (icons, button)   |
| brand-dark     | `#b89a62`        | Slightly darker for hover         |
| bg-page        | `#191919`        | Near-black full-page background   |
| text-primary   | `#ffffff`        | White headings and body text      |
| text-secondary | `#aaaaaa`        | Lighter text for placeholders     |
| card-surface   | `#2a2a2a`        | Slightly lighter dark for form bg |
| input-border   | `#444444`        | Subtle dark border on inputs      |
| font-heading   | Playfair Display | Serif heading font                |
| font-body      | Poppins          | Sans-serif body font              |

## Section structure (from screenshot)

1. **PageTitle** — "Contact Form #09" heading, white, serif font, centered.
2. **ContactInfo** — Three circular gold icon badges in a row (map pin, phone, paper-plane/send), each with a label and value below (Address, Phone, Email).
3. **ContactForm** — "Get in touch with us" heading (white, serif), then form with 4 fields (Name, Email, Subject, Message textarea) + full-width gold "SEND MESSAGE" button.
4. **Footer** — "More templates at Component Dock" link.

All wrapped in a dark full-page container with single-column centered layout (max-w-4xl).

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
| live page | `https://preview.colorlib.com/theme/bootstrap/contact-form-09/` | HTTP 200 · 6,470 B · title `Contact Form 09` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/contact-form-09/css/style.css?v=3a6af424` | HTTP 200 · 16,111 B · sha256 `dc0dccbf00eb` |

**Live palette** (hex × occurrences across the sheets): `#bc9864`×6,
`#a57f48`×2.

**TOKEN-NOT-IN-SHEET** — chromatic values this prep's docs state that the
live sheets do not paint (a hover/state shade may be inline or JS-driven;
verify before building from it): `#435eb5`.

## Requirements

### PageTitle

#### Scenario: renders the page title

- **GIVEN** I visit the formpost page
- **THEN** I should see a heading "Contact Form #09"

### ContactInfo

#### Scenario: displays three contact items

- **GIVEN** I visit the formpost page
- **THEN** I should see "Address" with "198 West 21th Street, Suite 721 New York NY 10016"
- **AND** I should see "Phone" with "+ 1235 2355 98"
- **AND** I should see "Email" with "info@yoursite.com"

#### Scenario: renders accessible icons

- **GIVEN** I visit the formpost page
- **THEN** each contact icon should be hidden from screen readers

### ContactForm

#### Scenario: renders form fields

- **GIVEN** I visit the formpost page
- **THEN** I should see text inputs for "Name", "Email", and "Subject"
- **AND** I should see a textarea for "Message"
- **AND** I should see a "Send Message" button

#### Scenario: form accepts user input

- **GIVEN** I visit the formpost page
- **WHEN** I type "John" in the "Name" field
- **THEN** the "Name" field should contain "John"

#### Scenario: form submission is prevented

- **GIVEN** I visit the formpost page
- **WHEN** I click the "Send Message" button
- **THEN** the page should not navigate

### Footer

#### Scenario: renders Component Dock link

- **GIVEN** I visit the formpost page
- **THEN** I should see a link to "https://www.componentdock.com/" labeled "Component Dock"
- **AND** the link should open in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formpost/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formpost/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] PageTitle — I should see a heading "Contact Form #09"
- [ ] ContactInfo — I should see "Address" with "198 West 21th Street, Suite 721 New York NY 10016"
- [ ] ContactForm — I should see text inputs for "Name", "Email", and "Subject"
