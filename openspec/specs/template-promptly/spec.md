# Spec: Promptly — Minimal Text Modal Template

> Recreation of ColorLib Modal 11
> (https://colorlib.com/wp/template/modal-11/)

## Purpose

A single-page React template featuring a centered launch button that opens a
minimal text modal dialog. The modal displays a clean, centered text content
area designed for sharing any type of text or message in a clean pop-up.
The original is described as "Free Minimal Text Modal — the best responsive
and free minimal text modal you can use to share any type of text or message
in a clean pop-up."

**Preview URL:** https://preview.colorlib.com/theme/modal-11/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-11.jpg
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

> NOTE: The live preview at preview.colorlib.com/theme/modal-11/ returned 404
> at time of research (2026-09-06). Tokens below are inferred from:
> (a) the ColorLib page description ("minimal text modal", "clean pop-up"),
> (b) the established ColorLib modal series conventions (Modal 01–10 patterns),
> and (c) the Bootstrap modal base styling used across the series.

- **Font family:** Poppins (Google Font), sans-serif fallback — standard across
  ColorLib modal series
- **Brand color:** Bootstrap primary blue `#007bff` (or `#3e64ff` as used in
  Modal 10) — used for the launch button
- **Modal background:** `#ffffff` (white), no border
- **Modal shadow:** `0px 10px 34px -15px rgba(0, 0, 0, 0.24)` — standard
  across ColorLib modal series
- **Close button:** top-right corner, `×` character, color `rgba(0, 0, 0, 0.5)`
- **Backdrop:** semi-transparent dark overlay `rgba(0, 0, 0, 0.5)`
- **Launch button:** pill shape (border-radius 40px), primary blue background,
  white text, centered on page
- **Section background:** white `#ffffff`
- **Text color:** `#000000` or `rgba(0, 0, 0, 0.8)` for modal body text

## Requirements

### Requirement: Page layout and launch button

The template SHALL render a centered hero section with the template name
"Promptly", a brief description, and a "Launch Modal" button.

#### Scenario: Page loads with launch button

- **GIVEN** the page is loaded
- **THEN** I see a heading "Promptly"
- **AND** I see a button "Launch Modal"

#### Scenario: Document title is set

- **GIVEN** the page is loaded
- **THEN** the document title is "Promptly — Minimal Text Modal Template"

### Requirement: Modal opens on button click

Clicking the "Launch Modal" button SHALL open a centered minimal text modal
dialog with a dark backdrop overlay.

#### Scenario: Modal opens on button click

- **GIVEN** the page is loaded
- **WHEN** I click the "Launch Modal" button
- **THEN** I see a dialog with text content
- **AND** I see a close button (×) in the top-right corner of the modal
- **AND** the background has a semi-transparent dark overlay

#### Scenario: Modal opens on Enter key

- **GIVEN** the page is loaded
- **WHEN** I focus the "Launch Modal" button and press Enter
- **THEN** the modal opens

### Requirement: Modal close behavior

The modal SHALL close when the user clicks the close button or the backdrop
overlay.

#### Scenario: Close button closes modal

- **GIVEN** the modal is open
- **WHEN** I click the close button (×)
- **THEN** the modal closes
- **AND** I see the launch page again

#### Scenario: Backdrop click closes modal

- **GIVEN** the modal is open
- **WHEN** I click the dark backdrop area outside the modal
- **THEN** the modal closes

#### Scenario: Escape key closes modal

- **GIVEN** the modal is open
- **WHEN** I press the Escape key
- **THEN** the modal closes

### Requirement: Modal visual design

The modal SHALL have a clean, minimal design with a white background,
subtle drop shadow, centered positioning, and no visible border.

#### Scenario: Modal has correct visual styling

- **GIVEN** the modal is open
- **THEN** the modal has a white background
- **AND** the modal has no visible border
- **AND** the modal has a box-shadow
- **AND** the modal is centered in the viewport

### Requirement: Modal text content

The modal SHALL display minimal text content — a heading and a paragraph
of descriptive text — styled cleanly with adequate spacing.

#### Scenario: Modal displays heading and text

- **GIVEN** the modal is open
- **THEN** I see a heading inside the modal
- **AND** I see a paragraph of descriptive text below the heading
- **AND** the text is readable with adequate line-height and spacing

### Requirement: Footer with Component Dock link

The template SHALL render a footer linking to https://www.componentdock.com/
branded as "Component Dock".

#### Scenario: Footer is visible

- **GIVEN** the page is loaded
- **THEN** I see a footer with a link to "Component Dock"

### Requirement: Responsive layout

The template SHALL be fully responsive across mobile, tablet, and desktop
viewports.

#### Scenario: Modal is responsive on mobile

- **GIVEN** the viewport width is 375px
- **WHEN** I click the "Launch Modal" button
- **THEN** the modal fits within the viewport
- **AND** the text content is readable without horizontal scrolling

#### Scenario: Launch button is visible on mobile

- **GIVEN** the viewport width is 375px
- **THEN** the "Launch Modal" button is visible and centered

### Requirement: Dark mode support

The template SHALL support dark mode via Tailwind dark: utilities.

#### Scenario: Dark mode renders correctly

- **GIVEN** the system prefers dark mode
- **THEN** the page background is dark
- **AND** the text is light-colored
- **AND** the modal background adapts to dark mode

### Requirement: Accessibility

The modal SHALL be accessible: focus trapped inside when open, focus restored
to trigger on close, proper ARIA attributes.

#### Scenario: Focus is trapped in modal

- **GIVEN** the modal is open
- **WHEN** I tab through focusable elements
- **THEN** focus cycles within the modal
- **AND** focus does not escape to the page behind

#### Scenario: Focus returns to trigger on close

- **GIVEN** the modal is open and I close it
- **THEN** focus returns to the "Launch Modal" button
