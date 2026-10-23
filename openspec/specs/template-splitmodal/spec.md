# Template: SplitModal (Product Review Modal)

Recreation of ColorLib "Modal V19" (https://colorlib.com/wp/template/modal-19/).

## Purpose

A centered full-viewport page with a split-screen product review modal featuring a product image on the left. It also includes product details with star rating and social counters on the right. Recreation of the ColorLib "Modal 19" template.

- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token                 | Value                               |
| --------------------- | ----------------------------------- |
| Body font             | `"Roboto", sans-serif`              |
| Modal background      | `#efefef` (light gray)              |
| Heading color         | `#000` (black)                      |
| Body text color       | `#b3b3b3`                           |
| Description text      | `#777`                              |
| Modal border-radius   | `7px`                               |
| Button border-radius  | `4px`                               |
| Box shadow            | `0 10px 50px -10px rgba(0,0,0,0.9)` |
| Separator line        | `70px wide, 1px, #ccc, centered`    |
| Star rating color     | `#ffc107` (gold/yellow)             |
| Heart/like icon color | `#dc3545` (red)                     |
| Message/add icon      | `#007bff` (blue)                    |
| Share icon color      | `#ccc`, hover `#000`                |

## Design reference (replication findings)

- **Source:** ColorLib "Modal V19" — https://colorlib.com/wp/template/modal-19/
- **Source slug:** `modal-19`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/modal-19/ — **HTTP 200**, 8,624 B, fetched 2026-10-23 (page `<title>`: "Modal #9"). The slug-only path `https://preview.colorlib.com/theme/modal-19/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/modal-19/css/style.css?v=e255e3d8`, fetched 2026-10-23): brand `#007bff`, `#ed5107`, `#a33805`, `#ffc107`; dominant neutrals `#6c757d`, `#212529`, `#545b62`; type Roboto. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-19.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/splitmodal` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Launch section

The system SHALL render a full-viewport centered launch section with a heading and a launch button.

#### Scenario: Launch page

- **GIVEN** the SplitModal app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a white full-viewport section with a centered column
- **AND** it SHALL show the heading "Modal #9"
- **AND** it SHALL show a button labeled "Launch modal"

#### Scenario: Opening the modal

- **WHEN** the launch button is clicked
- **THEN** the review modal SHALL open centered over the page

### Requirement: Review modal shell

The system SHALL render a split-screen modal dialog with a left image panel and a right details panel.

#### Scenario: Modal appears on trigger

- **GIVEN** the launch button has been clicked
- **THEN** a dialog element SHALL be present with role="dialog" and aria-modal="true"
- **AND** the modal background SHALL be light gray (#efefef)
- **AND** the modal SHALL have a box-shadow of `0 10px 50px -10px rgba(0,0,0,0.9)`
- **AND** the modal SHALL have a border-radius of 7px

#### Scenario: Modal does not render when closed

- **GIVEN** the modal is closed
- **THEN** no dialog element SHALL be present in the DOM

### Requirement: Product image panel

The system SHALL display a product image on the left half of the modal.

#### Scenario: Image displays

- **GIVEN** the modal is open
- **THEN** a product image SHALL be displayed on the left panel
- **AND** a price badge "$2,000" SHALL be displayed in the top-left corner of the image

### Requirement: Product details panel

The system SHALL display product title, star rating, description, and social counters on the right half of the modal.

#### Scenario: Product title

- **GIVEN** the modal is open
- **THEN** the heading "Grand Prix 4000" SHALL be displayed
- **AND** a horizontal separator line SHALL be displayed below the title

#### Scenario: Star rating

- **GIVEN** the modal is open
- **THEN** a star rating SHALL be displayed with 4 filled stars and 1 empty star
- **AND** the rating SHALL be labeled "Rating: 4 out of 5 stars"

#### Scenario: Description paragraph

- **GIVEN** the modal is open
- **THEN** a description paragraph SHALL be displayed below the star rating
- **AND** the description text SHALL be in gray color (#777)

#### Scenario: Social counters

- **GIVEN** the modal is open
- **THEN** a heart counter SHALL display value "25"
- **AND** a message counter SHALL display value "10"
- **AND** a plus counter SHALL display value "55"

### Requirement: Share button

The system SHALL render a share icon in the top-right corner of the right panel.

#### Scenario: Share button visible

- **GIVEN** the modal is open
- **THEN** a button with aria-label "Share" SHALL be visible in the top-right corner
- **AND** the share icon SHALL be in light gray color (#ccc)

### Requirement: Close button

The system SHALL render a close button (X) in the top-right corner of the modal.

#### Scenario: Close button visible

- **GIVEN** the modal is open
- **THEN** a button with aria-label "Close" SHALL be visible

#### Scenario: Close button dismisses modal

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button
- **THEN** the modal SHALL close

### Requirement: Dismiss actions

The system SHALL close the modal when the user clicks the close button, presses Escape, or clicks the backdrop.

#### Scenario: Dismiss via close button

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X)
- **THEN** the modal SHALL close

#### Scenario: Dismiss via Escape key

- **GIVEN** the modal is open
- **WHEN** the user presses Escape
- **THEN** the modal SHALL close

#### Scenario: Dismiss via backdrop click

- **GIVEN** the modal is open
- **WHEN** the user clicks the backdrop (outside the modal content)
- **THEN** the modal SHALL close

#### Scenario: No dismiss on content click

- **GIVEN** the modal is open
- **WHEN** the user clicks inside the modal content
- **THEN** the modal SHALL NOT close

### Requirement: Footer

The system SHALL render a footer linking to Component Dock.

#### Scenario: Footer link

- **GIVEN** the app is rendered
- **THEN** a footer SHALL be present with a link to https://www.componentdock.com/
- **AND** the link SHALL open in a new tab with rel="noopener noreferrer"
- **AND** the link text SHALL be "Component Dock"

### Requirement: Document title

The system SHALL set the document title on load.

#### Scenario: Title set

- **GIVEN** the app is rendered
- **THEN** the document title SHALL be "SplitModal — Product Review Modal"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/splitmodal/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/splitmodal/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
