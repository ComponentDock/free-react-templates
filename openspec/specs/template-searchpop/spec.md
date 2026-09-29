# Template: Searchpop (Search Form)

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

## Gherkin Requirements

### R1: Page Layout

**Scenario: Full-viewport centered showcase**
- Given a user visits the Searchpop page
- Then a light blue (#d8f4fe) full-viewport background is displayed
- And two search inputs are vertically centered on the page
- And each input row has 80px spacing between them
- And the form is constrained to 570px max-width

### R2: Round Search Input (Input 1)

**Scenario: Collapsed state (default)**
- Given the page loads
- Then Input 1 is a 60x60px circle with a white background
- And a magnifying glass icon (#ccc, 34x34) is displayed on the left
- And no text is visible

**Scenario: Expanding on focus/click**
- Given Input 1 is in collapsed state
- When the user clicks or focuses Input 1
- Then Input 1 animates to full width (100% of form)
- And a text cursor appears with left padding of 60px
- And the transition takes 0.2 seconds ease-in

**Scenario: Clear button**
- Given Input 1 is expanded and has text entered
- Then a clear (X) button appears at the right end (60x60 area)
- And the X icon is #ccc colored, 22x22
- When the user hovers the clear button
- Then the X icon color changes to #333
- When the user clicks the clear button
- Then the input text is cleared
- And the clear button fades out (opacity transition 0.2s)

**Scenario: Collapsing on blur**
- Given Input 1 is expanded and the user clicks outside the input area
- Then Input 1 collapses back to 60x60px circle

### R3: Square Search Input (Input 2)

**Scenario: Collapsed state (default)**
- Given the page loads
- Then Input 2 is a 60x60px square with a white background and 3px border-radius
- And a magnifying glass icon (#ccc, 34x34) is displayed on the right
- And placeholder text is #666 colored

**Scenario: Expanding on focus/click**
- Given Input 2 is in collapsed state
- When the user clicks or focuses Input 2
- Then Input 2 animates to full width (100% of form)
- And the transition takes 0.3 seconds
- And the search icon remains positioned on the right

**Scenario: Collapsing on blur**
- Given Input 2 is expanded and the user clicks outside
- Then Input 2 collapses back to 60x60px square

### R4: Visual Fidelity

**Scenario: Typography**
- Given the page renders
- Then body uses Poppins font (300 and 400 weights)
- And input text is 18px
- And placeholder text uses lighter weight (300) on Input 1, default on Input 2

**Scenario: Background color**
- Given the page renders
- Then the full page background is #d8f4fe (light blue)

**Scenario: Footer branding**
- Given the page renders
- Then a footer section links to https://www.componentdock.com/ branded as "Component Dock"

## Verification Checklist

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
