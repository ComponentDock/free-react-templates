# Template: Popup (Minimal Text Modal)

## Purpose

Popup is a single-page MINIMAL TEXT MODAL in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Modal 11" free
template (source: https://colorlib.com/wp/template/modal-11/), built under a
DIFFERENT name (**Popup**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 5 modal template: a centered page with a
"Show Message" button that opens a centered white modal dialog containing a
title and descriptive text. The modal is vertically centered in the viewport
with a subtle drop shadow and a close (X) button in the top-right corner.
The design is minimal and text-centric — no forms, no social icons, just a
focused message delivery mechanism.

**WHAT MAKES POPUP DISTINCT (signature behaviors):**

1. **Full-page centered layout with launch button.** A white section fills
   the viewport with a centered heading ("Popup") and a blue primary button
   ("Show Message") that triggers the modal via React state.

2. **Centered modal dialog with shadow.** The modal has max-width 480px,
   vertically centered, white background with box-shadow
   `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`. The close button is in the
   top-right corner.

3. **Text-focused content.** The modal body contains only a heading
   ("Special Announcement") and a descriptive paragraph — no forms, no
   social icons, no complex UI. A "Got It" button dismisses the modal.

4. **Focus trap and keyboard navigation.** The modal traps Tab/Shift+Tab
   focus between the close button and the "Got It" button. Escape key
   closes the modal. Focus is restored to the trigger element on close.

## Naming

The ColorLib source name "Modal 11" is FORBIDDEN as the app name. **Popup**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name.

## Design reference (replication findings)

- **Original:** ColorLib "Modal 11" (page title: "Modal V11"). Listed in
  TEMPLATES.md under **Bootstrap Modal Templates**. Source slug: `modal-11`.
- **Live preview:** UNREACHABLE (returns 404). Falling back to screenshot
  and description.
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-11.jpg`
  (1200×972px). Shows a minimal modal popup focused on text content.
- **Description:** "Free Minimal Text Modal" — a simple Bootstrap modal
  focused on text content for sharing messages and announcements.
- **Design tokens extracted:**
  - Brand color: `#007bff` (blue)
  - Brand hover: `#0069d9`
  - Background: white (light) / dark gray (dark)
  - Modal backdrop: black/50
  - Font: Poppins (Google Fonts)
  - Modal shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`
  - Close button: gray with hover highlight

## Requirements

### Requirement: Launch section renders with heading and CTA button

The page SHALL display a centered launch section with a heading ("Popup"),
a descriptive subtitle, and a "Show Message" button.

#### Scenario: Page loads with launch section

- **WHEN** the page loads
- **THEN** I see a heading with text "Popup"
- **AND** I see a description paragraph
- **AND** I see a button with text "Show Message"

### Requirement: Modal opens on button click

Clicking the "Show Message" button SHALL open a modal dialog overlay.

#### Scenario: Modal opens on button click

- **WHEN** I click the "Show Message" button
- **THEN** a dialog element appears with role "dialog"
- **AND** the dialog has aria-modal "true"

### Requirement: Modal displays text content

The modal SHALL display a heading and descriptive text content.

#### Scenario: Modal shows text content

- **GIVEN** the modal is open
- **THEN** I see a heading inside the modal
- **AND** I see a paragraph of descriptive text

### Requirement: Modal closes on close button click

Clicking the close (X) button SHALL dismiss the modal.

#### Scenario: Close button dismisses modal

- **GIVEN** the modal is open
- **WHEN** I click the close button
- **THEN** the dialog disappears

### Requirement: Modal closes on backdrop click

Clicking outside the modal content area SHALL dismiss the modal.

#### Scenario: Backdrop click dismisses modal

- **GIVEN** the modal is open
- **WHEN** I click outside the modal content
- **THEN** the dialog disappears

### Requirement: Modal closes on Escape key

Pressing the Escape key SHALL dismiss the modal.

#### Scenario: Escape key dismisses modal

- **GIVEN** the modal is open
- **WHEN** I press Escape
- **THEN** the dialog disappears

### Requirement: Focus trap in modal

The modal SHALL trap keyboard focus between focusable elements.

#### Scenario: Tab wraps from last to first element

- **GIVEN** the modal is open
- **WHEN** I press Tab on the last focusable element
- **THEN** focus moves to the first focusable element

#### Scenario: Shift+Tab wraps from first to last element

- **GIVEN** the modal is open
- **WHEN** I press Shift+Tab on the first focusable element
- **THEN** focus moves to the last focusable element

### Requirement: Footer renders with Component Dock link

The page footer SHALL display the template name, a description, and a link
to Component Dock.

#### Scenario: Footer shows Component Dock link

- **WHEN** the page loads
- **THEN** I see a link to "https://www.componentdock.com/"
- **AND** the link opens in a new tab
