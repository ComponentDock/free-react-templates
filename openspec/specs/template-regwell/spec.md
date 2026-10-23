# Template: Regwell (Education Appointment Form)

Recreation of ColorLib "Colorlib Reg Form V12"
(https://colorlib.com/wp/template/colorlib-regform-12/)

## Purpose

Regwell is an education appointment form template with a form card. It recreates the ColorLib **Colorlib Regform 12** design (https://colorlib.com/wp/template/colorlib-regform-12/, preview: https://colorlib.com/etc/regform/colorlib-regform-12/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Source

- **Original name:** Colorlib Reg Form V12
- **Slug:** colorlib-regform-12
- **Preview:** https://colorlib.com/etc/regform/colorlib-regform-12/ — ⚠️ Pointer status re-probed 2026-10-13: the slug-only `/theme/colorlib-regform-12/` path 404s; the live demo is served under `colorlib.com/etc/regform/` (HTTP 200, 3,301 B)
- **Description:** Free education appointment form template for online and offline educational platforms and institutions.

## Design Tokens (extracted from screenshot)

| Token         | Value                    | Usage                         |
| ------------- | ------------------------ | ----------------------------- |
| Brand color   | `#4e5b87` (slate-blue)   | Submit button, accents        |
| Background    | Full-viewport photo      | Dark overlay, people studying |
| Card bg       | `#ffffff` (white)        | Form card background          |
| Card shadow   | Subtle drop shadow       | Card elevation                |
| Title color   | `#222222` (near-black)   | Form heading                  |
| Label color   | `#999999` (gray)         | Field placeholders/labels     |
| Border color  | `#dddddd` (light gray)   | Input underlines              |
| Button radius | ~6px rounded             | Submit button                 |
| Font family   | Inter (via Google Fonts) | Clean sans-serif body text    |
| Surface (measured) | `#4966b1` | paints it ×3 — `background` on `.submit`; style.css?v=cee4ba2b (9,913 B, sha256 fca3e0e1b84c) · <https://colorlib.com/etc/regform/colorlib-regform-12/> |

## Section Structure (from screenshot, top-to-bottom)

1. **Background layer** — full-viewport photo (students at desk) with dark overlay
2. **Form card** — white card, left-of-center, with subtle shadow
   - Heading: "EDUCATION APPOINTMENT FORM" (uppercase, bold)
   - Fields: Title, Your Name, Email, Phone number (text inputs, underline style)
   - Course Type (dropdown/select)
   - Sub-section: "How would you like to be located?" heading
     - By phone (dropdown/select)
     - Hours : 8am 10pm (dropdown/select)
   - Checkbox: "I agree to the Terms and Conditions"
   - Submit button: "Request an appointment" (dark blue, rounded)

## Implementation Plan

- **App folder:** `apps/regwell`
- **Package:** `@free-react-templates/regwell`
- **Components:**
  - `App.tsx` — layout with background + form card
  - `components/Background.tsx` — full-viewport background image + overlay
  - `components/AppointmentForm.tsx` — the form card with all fields
  - `components/Footer.tsx` — branded footer linking componentdock.com
- **Styling:** Tailwind CSS 4, `@theme` tokens for brand colors
- **Form handling:** Controlled inputs, validation with zod (for type safety)
- **Testing:** Vitest + Testing Library, 100% coverage

## Requirements

### Feature: Background layer

full-viewport photo (students at desk) with dark overlay

#### Scenario: Background layer renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Background layer band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Form card

white card, left-of-center, with subtle shadow
   - Heading: "EDUCATION APPOINTMENT FORM" (uppercase, bold)
   - Fields: Title, Your Name, Email, Phone number (text inputs, underline style)
   - Course Type (dropdown/select)
   - Sub-section: "How would you like to be located?" heading
     - By phone (dropdown/select)
     - Hours : 8am 10pm (dropdown/select)
   - Checkbox: "I agree to the Terms and Conditions"
   - Submit button: "Request an appointment" (dark blue, rounded)

#### Scenario: Form card renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Form card band SHALL be present at its documented position with the structure, copy and tokens named above

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/regwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/regwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Background layer — the Background layer band SHALL be present at its documented position with the structure, copy and tokens named above
- [ ] Form card — the Form card band SHALL be present at its documented position with the structure, copy and tokens named above
