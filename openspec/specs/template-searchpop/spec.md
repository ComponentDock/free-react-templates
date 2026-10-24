# Template: Searchpop (Search Form)
<!-- prep-status: shipped-as=searchpad -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-search-21` design this prep describes already
> ships as `apps/searchpad` (<https://searchpad.free.componentdock.com>).
> Do not scaffold `apps/searchpop`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-searchpad/spec.md`.

## Purpose

Recreation of ColorLib **Colorlib Search Form 21** (slug: `colorlib-search-21`).
Preview: https://preview.colorlib.com/theme/colorlib-search-21/
Source page: https://colorlib.com/wp/template/colorlib-search-21/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-21.jpg

A single-page expandable search bar showcase displaying two search input
variations on a light blue background: one with a round/pill shape and a
left-aligned magnifying glass icon that expands on focus, and one with a
near-square shape and a right-aligned magnifying glass icon that also
expands on focus. A clear (X) button appears inside the first input when
text is entered.

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Design Tokens

Extracted from `css/style.css` of the ColorLib download.

| Token | Value | Source |
|---|---|---|
| **Font family** | `"Poppins", sans-serif` | `.s128` |
| **Font weights** | 300 (light), 400 (regular) | `@font-face` |
| **Page background** | `#d8f4fe` (light sky blue) | `.s128` |
| **Page layout** | Full viewport, flex center, 15px padding | `.s128` |
| **Form max-width** | `570px` | `.s128 form` |
| **Row spacing** | `80px` margin-bottom between rows | `.inner-form .cl-row` |
| **Input height** | `60px` | `.input-field input` |
| **Input start width** | `60px` (collapsed icon button) | `.input-field input` |
| **Input expanded width** | `100%` (on focus) | `.input-field.first input:focus`, `.second input:focus` |
| **Input background** | `#fff` | Both inputs |
| **Input font** | `18px Poppins` | `.input-field input` |
| **Input 1 border-radius** | `30px` (pill/round) | `.input-field.first input` |
| **Input 1 padding** | `10px 0 10px 60px` | `.input-field.first input` |
| **Input 1 icon position** | Left, background-image SVG (magnifying glass) | `.input-field.first input` |
| **Input 1 placeholder** | `#ccc`, weight 300 | `.input-field.first input.placeholder` |
| **Input 1 transition** | `width .2s ease-in` | `.input-field.first input` |
| **Input 2 border-radius** | `3px` (near-square) | `.input-field.second input` |
| **Input 2 padding** | `10px 60px 10px 0` | `.input-field.second input` |
| **Input 2 icon position** | Right, background-image SVG (magnifying glass) | `.input-field.second input` |
| **Input 2 placeholder** | `#666` | `.input-field.second input.placeholder` |
| **Input 2 transition** | `width .3s` | `.input-field.second input` |
| **Search icon SVG** | fill `#ccc`, background-size `34x34` | Both inputs |
| **Clear button** | 60x60, absolute right, transparent bg, z-index 2 | `.clear` |
| **Clear X SVG** | fill `#ccc`, 22x22, hover `#333` | `.clear svg` |
| **Clear transition** | `opacity .2s ease-out` (hidden by default, shown on text) | `.clear` |

## Requirements

### R1: Page Layout

#### Scenario: Full-viewport centered showcase

- **GIVEN** a user visits the Searchpop page
- **THEN** a light blue (#d8f4fe) full-viewport background is displayed
- **AND** two search inputs are vertically centered on the page
- **AND** each input row has 80px spacing between them
- **AND** the form is constrained to 570px max-width

### R2: Round Search Input (Input 1)

#### Scenario: Collapsed state (default)

- **GIVEN** the page loads
- **THEN** Input 1 is a 60x60px circle with a white background
- **AND** a magnifying glass icon (#ccc, 34x34) is displayed on the left
- **AND** no text is visible

#### Scenario: Expanding on focus/click

- **GIVEN** Input 1 is in collapsed state
- **WHEN** the user clicks or focuses Input 1
- **THEN** Input 1 animates to full width (100% of form)
- **AND** a text cursor appears with left padding of 60px
- **AND** the transition takes 0.2 seconds ease-in

#### Scenario: Clear button

- **GIVEN** Input 1 is expanded and has text entered
- **THEN** a clear (X) button appears at the right end (60x60 area)
- **AND** the X icon is #ccc colored, 22x22
- **WHEN** the user hovers the clear button
- **THEN** the X icon color changes to #333
- **WHEN** the user clicks the clear button
- **THEN** the input text is cleared
- **AND** the clear button fades out (opacity transition 0.2s)

#### Scenario: Collapsing on blur

- **GIVEN** Input 1 is expanded and the user clicks outside the input area
- **THEN** Input 1 collapses back to 60x60px circle

### R3: Square Search Input (Input 2)

#### Scenario: Collapsed state (default)

- **GIVEN** the page loads
- **THEN** Input 2 is a 60x60px square with a white background and 3px border-radius
- **AND** a magnifying glass icon (#ccc, 34x34) is displayed on the right
- **AND** placeholder text is #666 colored

#### Scenario: Expanding on focus/click

- **GIVEN** Input 2 is in collapsed state
- **WHEN** the user clicks or focuses Input 2
- **THEN** Input 2 animates to full width (100% of form)
- **AND** the transition takes 0.3 seconds
- **AND** the search icon remains positioned on the right

#### Scenario: Collapsing on blur

- **GIVEN** Input 2 is expanded and the user clicks outside
- **THEN** Input 2 collapses back to 60x60px square

### R4: Visual Fidelity

#### Scenario: Typography

- **GIVEN** the page renders
- **THEN** body uses Poppins font (300 and 400 weights)
- **AND** input text is 18px
- **AND** placeholder text uses lighter weight (300) on Input 1, default on Input 2

#### Scenario: Background color

- **GIVEN** the page renders
- **THEN** the full page background is #d8f4fe (light blue)

#### Scenario: Footer branding

- **GIVEN** the page renders
- **THEN** a footer section links to https://www.componentdock.com/ branded as "Component Dock"

## Verification checklist

- [ ] Full-viewport light blue (#d8f4fe) background
- [ ] Form centered vertically and horizontally, max-width 570px
- [ ] Two search input rows with 80px vertical spacing
- [ ] Input 1: round pill shape (30px radius), 60x60 collapsed, expands on focus with 0.2s transition
- [ ] Input 1: magnifying glass icon on left (SVG, #ccc, 34x34)
- [ ] Input 1: placeholder #ccc, weight 300
- [ ] Input 1: clear X button appears when text is entered, fades out on click
- [ ] Input 1: collapses when clicking outside
- [ ] Input 2: near-square shape (3px radius), 60x60 collapsed, expands on focus with 0.3s transition
- [ ] Input 2: magnifying glass icon on right (SVG, #ccc, 34x34)
- [ ] Input 2: placeholder #666
- [ ] Input 2: collapses when clicking outside
- [ ] Both inputs use Poppins font at 18px
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
- [ ] All tests pass with 100% coverage
