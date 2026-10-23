# Template: Formloom (Student Registration Form)

Recreation of ColorLib "Colorlib Reg Form V15" (https://colorlib.com/wp/template/colorlib-regform-15/).

## Purpose

Formloom is a student registration form template recreating the Colorlib Reg Form V15 design (colorlib-regform-15) under a new, original name. The template features a split-layout design with a hero image on the left and a comprehensive student registration form on the right, set against a dark charcoal background.

## Design reference (replication findings)

- **Source:** ColorLib "Colorlib Reg Form V15" — https://colorlib.com/wp/template/colorlib-regform-15/
- **Source slug:** `colorlib-regform-15`
- **Preview URL analyzed:** https://colorlib.com/etc/regform/colorlib-regform-15/ — **HTTP 200**, 6,652 B, fetched 2026-10-23 (page `<title>`: "Sign Up Form by Colorlib"). The slug-only path `https://preview.colorlib.com/theme/colorlib-regform-15/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://colorlib.com/etc/regform/colorlib-regform-15/css/style.css?v=162d630b`, fetched 2026-10-23): brand `#ff6801`, `#cd5300`; dominant neutrals `#ebebeb`, `#282828`, `#f8f8f8`; type Montserrat, Poppins. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-15.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/formloom` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Split-layout hero with image and form card

The template SHALL display a split-layout hero section with a hero image occupying the left half and a white form card occupying the right half of the viewport.

#### Scenario: Hero image is displayed on the left

- **WHEN** the page loads
- **THEN** an image SHALL be visible on the left side of the layout
- **AND** the image SHALL use a picsum.photos placeholder

#### Scenario: Form card is displayed on the right

- **WHEN** the page loads
- **THEN** a white card containing the registration form SHALL be visible on the right side

### Requirement: Student Registration Form with all fields

The template SHALL render a student registration form with the following fields: Name (required text input), Father Name (text input), Address (text input), Gender (radio buttons: Male/Female), State (dropdown), City (dropdown), DOB (date input), Pincode (text input), Course (dropdown), and Email ID (email input).

#### Scenario: All form fields are present

- **WHEN** the page loads
- **THEN** the Name, Father Name, Address, DOB, Pincode, and Email ID text/date inputs SHALL be visible
- **AND** the State, City, and Course dropdowns SHALL be visible
- **AND** the Male and Female radio buttons SHALL be visible with Male selected by default

#### Scenario: Gender radio button selection

- **WHEN** the user clicks the Female radio button
- **THEN** Female SHALL be selected
- **AND** Male SHALL be deselected

### Requirement: Form submission and reset behavior

The template SHALL support form submission (displaying a success message) and form reset (clearing state).

#### Scenario: Successful form submission

- **WHEN** the user fills in the Name field and clicks Submit Form
- **THEN** a success message "Registration submitted successfully!" SHALL be displayed
- **AND** the form fields SHALL be hidden

#### Scenario: Submit Another after success

- **WHEN** the form is submitted and the success message is shown
- **THEN** a "Submit Another" button SHALL be visible
- **AND** clicking it SHALL return to the form view

#### Scenario: Reset All button

- **WHEN** the user clicks Reset All
- **THEN** the form state SHALL be reset

### Requirement: Navbar with site name and dark mode toggle

The template SHALL display a navbar with the site name "Formloom", a Home link, and a dark mode toggle button.

#### Scenario: Navbar elements are present

- **WHEN** the page loads
- **THEN** the text "Formloom" SHALL be visible in the navbar
- **AND** a "Home" link SHALL be present
- **AND** a dark mode toggle button SHALL be present

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle
- **THEN** the document root SHALL have the "dark" class
- **AND** clicking again SHALL remove the "dark" class

### Requirement: Footer with Component Dock link

The template SHALL display a footer with a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link is present

- **WHEN** the page loads
- **THEN** a link to https://www.componentdock.com/ SHALL be visible in the footer
- **AND** the link text SHALL contain "Component Dock"

### Requirement: Design tokens matching original

The template SHALL use a dark charcoal background (#2d2d2d), white form card, orange submit button (#e67e22), and Inter font family via Google Fonts.

#### Scenario: Brand colors are applied

- **WHEN** the page loads
- **THEN** the page background SHALL be dark charcoal
- **AND** the submit button SHALL be orange

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formloom/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formloom/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split-layout hero with image and form card — an image SHALL be visible on the left side of the layout
- [ ] Student Registration Form with all fields — the Name, Father Name, Address, DOB, Pincode, and Email ID text/date inputs SHALL be visible
- [ ] Form submission and reset behavior — a success message "Registration submitted successfully!" SHALL be displayed
- [ ] Navbar with site name and dark mode toggle — the text "Formloom" SHALL be visible in the navbar
- [ ] Design tokens matching original — the page background SHALL be dark charcoal
