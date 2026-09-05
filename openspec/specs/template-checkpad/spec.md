# Template: Checkpad (Bootstrap Checkbox Demo)

## Purpose

Checkpad is a single-page UI-component demo template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Checkbox 19"
Bootstrap component template design
(source: https://colorlib.com/wp/template/checkbox-19/), built under a
DIFFERENT name (Checkpad — evoking a checkbox pad/notepad style) per the monorepo
naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The page is a clean, minimal checkbox showcase: a centered heading "Checkbox #19",
a subtitle describing the template, and a list of checkbox items demonstrating
different interactive states. The design uses a clean white background, Roboto font,
single-column centered layout with a green accent palette.

## Design reference (replication findings)

- **Original:** ColorLib "Checkbox 19" — nineteenth of the "Bootstrap Checkboxes
  (20)" series in TEMPLATES.md (line 751 — mark that line `[x]` when done).
- **Preview URL:** https://preview.colorlib.com/theme/checkbox-19/
  (preview returned 404 — falling back to screenshot and page metadata).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/checkbox-19.jpg
- **Page metadata:** "Checkbox Demo" — a Bootstrap checkbox component demo.
- **Visual design (from page description + analogous templates):** Clean,
  minimalist demo page on a white background. Centered column layout. Black
  heading "Checkbox #19" (h1). Multiple custom checkboxes using Bootstrap 4
  custom-control styling with green accent. Roboto font family. No footer in the original;
  we add a "Component Dock" footer per monorepo mandate.
- **Design tokens:**
  - Brand color: `#198754` (Bootstrap success green for checked checkbox)
  - Background: `#ffffff` (white)
  - Text: `#212529` (Bootstrap body text)
  - Disabled text: `#6c757d` (Bootstrap muted)
  - Font: Roboto (Google Fonts)
  - Checkbox border: `#dee2e6` unchecked, `#198754` checked

## Requirements

### Requirement: Renders the main heading and subtitle

The template SHALL display a centered heading "Checkbox #19" and a subtitle
"Bootstrap checkbox component demo" at the top of the page.

#### Scenario: Heading is visible

- Given the page is loaded
- When I view the page
- Then I see a heading with text "Checkbox #19"
- And I see a subtitle with text "Bootstrap checkbox component demo"

### Requirement: Displays interactive checkbox items

The template SHALL display a list of checkbox items that can be toggled by the user.

#### Scenario: Checkbox items are rendered

- Given the page is loaded
- When I count the checkbox items
- Then I see at least 4 checkbox items

#### Scenario: Checkbox can be toggled

- Given the page is loaded
- When I click on the first checkbox
- Then the checkbox state changes (checked/unchecked)

#### Scenario: Disabled checkbox cannot be toggled

- Given the page is loaded
- When I click on a disabled checkbox
- Then the checkbox state does not change

### Requirement: Responsive layout

The template SHALL display correctly on both desktop and mobile viewports.

#### Scenario: Layout is centered on desktop

- Given the viewport width is 1024px
- When I view the page
- Then the content is centered with appropriate max-width

#### Scenario: Layout is responsive on mobile

- Given the viewport width is 375px
- When I view the page
- Then the content fills the width with appropriate padding

### Requirement: Accessibility

The template SHALL be accessible to screen readers and keyboard navigation.

#### Scenario: Checkboxes are keyboard accessible

- Given the page is loaded
- When I press Tab to focus a checkbox
- Then I can press Space to toggle it

#### Scenario: Checkboxes have labels

- Given the page is loaded
- When I view each checkbox
- Then each checkbox has an associated label
