# Template: BtnPulse (UI Component Library)

## Purpose

Recreation of ColorLib **Bootstrap Buttons 04** (`https://colorlib.com/wp/template/bootstrap-buttons-04/`).
Preview URL: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-04/`
Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript · Lucide icons.
New Name: `btnpulse` (Package: `@free-react-templates/btnpulse`).

## Design Tokens (extracted from live preview CSS)

### Fonts

- Body/Headings: `"Roboto", sans-serif` (weights 300, 400)
- Google Fonts link for Roboto (300, 400)
- Secondary fonts loaded in preview (Poppins, Source Serif Pro) — use Roboto only for fidelity

### Button Base Styles

- `border-radius: 4px`
- `font-size: 12px` (default), `11px` (sm), `16px` (lg)
- `padding: 8px 25px` (default), `5px 15px` (sm), `15px 30px` (lg)
- `border: none`
- `letter-spacing: .03rem`
- `text-transform: uppercase`
- `box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.2)`
- `overflow: hidden` (for hover overlay)
- Hover effect: white semi-transparent overlay (`rgba(255,255,255,0.2)`) slides up from bottom via `::before` pseudo-element transition

### Button Colors (all hex values)

| Name        | Background | Text    |
| ----------- | ---------- | ------- |
| Primary     | #007bff    | #fff    |
| Secondary   | #6c757d    | #fff    |
| Success     | #28a745    | #fff    |
| Info        | #17a2b8    | #fff    |
| Warning     | #ffc107    | #000    |
| Danger      | #dc3545    | #fff    |
| Light       | #f8f9fa    | #212529 |
| Orange      | #fd7e14    | #fff    |
| Indigo      | #6610f2    | #fff    |
| Pink        | #e83e8c    | #fff    |
| Deep Orange | #ffac8e    | #fff    |
| Aqua        | #3fc5f0    | #fff    |
| Dark        | #393e46    | #fff    |
| Black       | #000000    | #fff    |
| Purple      | #6f42c1    | #fff    |
| Blue        | #007bff    | #fff    |
| Brown       | #a0855b    | #fff    |
| Blue Gray   | #3f4d71    | #fff    |

### Layout

- Background: white (#fff)
- Body text color: #b3b3b3 (paragraphs)
- Headings: dark/black
- Full viewport height (`height: 100vh`) centered content
- Centered container with `col-md-10`

### Visual Design (from screenshot)

- Clean minimal white page
- Title: "#04 — Bootstrap 4 Buttons" in dark text, left-aligned
- Three button sizes displayed in a horizontal row with small "Large"/"Medium"/"Small" labels above each
- 18 color buttons arranged in a wrapping flex row below a "Button Colors" subheading
- Full-width primary button at the bottom
- Subtle box shadow on all buttons
- Hover: white overlay slides up from bottom

## Requirements

### Requirement: Page Layout

The app SHALL display a single-page button showcase centered on a white background.

#### Scenario: Display page

- **WHEN** the user visits BtnPulse
- **THEN** the page has a white background with centered content in a max-width container
- **AND** the content is vertically centered within the viewport

### Requirement: Page Title

The app SHALL display a section heading identifying the template.

#### Scenario: Display title

- **WHEN** the user views the page
- **THEN** they see a heading "#04 — Bootstrap Buttons" (dark text, 20px size)

### Requirement: Button Sizes

The app SHALL display buttons in three sizes: Large, Medium, and Small, each labeled.

#### Scenario: Display button sizes

- **WHEN** the user views the sizes section
- **THEN** they see three primary-colored buttons labeled "Large", "Medium", "Small"
- **AND** each button has a small label above it indicating its size
- **AND** the large button uses `btn-lg` sizing (font 16px, padding 15px 30px)
- **AND** the default button uses standard sizing (font 12px, padding 8px 25px)
- **AND** the small button uses `btn-sm` sizing (font 11px, padding 5px 15px)

### Requirement: Button Colors

The app SHALL display all 18 button color variants in a wrapping row.

#### Scenario: Display color variants

- **WHEN** the user scrolls to the "Button Colors" section
- **THEN** they see buttons for: Primary, Secondary, Success, Info, Warning, Danger, Light, Orange, Indigo, Pink, Deep Orange, Aqua, Dark, Black, Purple, Blue, Brown, Blue Gray
- **AND** each button uses the corresponding background color with appropriate text color
- **AND** all buttons share the same base style (4px radius, uppercase, shadow, hover overlay)

### Requirement: Full-Width Button

The app SHALL display a full-width (block) primary button.

#### Scenario: Display full-width button

- **WHEN** the user scrolls to the bottom section
- **THEN** they see a primary-colored button spanning the full container width
- **AND** the button is labeled "Button"

### Requirement: Button Hover Effect

All buttons SHALL display a hover animation where a white semi-transparent overlay slides up from the bottom.

#### Scenario: Hover animation

- **WHEN** the user hovers over any button
- **THEN** a `rgba(255,255,255,0.2)` overlay transitions from 0% to 100% height
- **AND** the transition completes in approximately 0.2s

### Requirement: Footer Link

Every template's footer MUST link to Component Dock.

#### Scenario: Footer displayed

- **WHEN** the user scrolls to the bottom of the page
- **THEN** they see a footer with a link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] Page loads with white background, centered content
- [ ] Title heading displays correctly
- [ ] Three button sizes render with correct padding/font-size
- [ ] All 18 color variants render with correct backgrounds
- [ ] Full-width block button spans container
- [ ] Hover overlay animation works on all buttons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `btnpulse.free.componentdock.com`
- [ ] `homepage` in package.json is `https://btnpulse.free.componentdock.com`
- [ ] TypeScript compiles without errors
- [ ] All tests pass with 100% coverage
