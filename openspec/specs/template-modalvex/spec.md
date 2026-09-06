# Template: ModalVex (Modal Dialog / Overlay)

## Purpose

Recreation of ColorLib **Modal 03** — a centered Bootstrap modal dialog with a
split-layout promotional overlay (teal left panel + image right panel).

- **ColorLib source:** https://colorlib.com/wp/template/modal-03/
- **Live preview:** https://preview.colorlib.com/theme/bootstrap/modal-03/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the preview stylesheet (`css/style.css`).

| Token              | Value                           | Usage                                      |
| ------------------ | ------------------------------- | ------------------------------------------ |
| Brand color        | `#39bdc8` (teal/cyan)          | Left panel background (`.color-1`)         |
| Body font          | `Lato` (300, 400, 700)         | All body text                              |
| Display font       | `Pacifico` (400, cursive)      | "Sale" script heading                      |
| Text on brand bg   | `#000` (black)                 | Subheading, sale heading, description      |
| Discount number    | `#fff` (white), 130px, bold    | Large "40" discount figure                 |
| Section background | `#fff` (white)                 | Outer page section                         |
| Modal max-width    | `700px`                        | Modal dialog                              |
| Modal border-radius| `0` (none)                     | Sharp corners, no rounding                |
| Modal box-shadow   | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Soft shadow beneath modal      |
| Close button bg    | `rgba(0,0,0,0.1)`              | Semi-transparent overlay on close icon     |
| Button style       | Bootstrap `.btn-primary` rounded | "Launch Modal" + "Shop now" buttons       |

### Visual design (from screenshot)

The screenshot shows:
1. A clean white full-page section centered vertically with an "Modal 03"
   heading and a blue Bootstrap primary "Launch Modal 03" button.
2. When launched, a centered modal overlay appears with:
   - **Left panel (~40%):** Teal `#39bdc8` background with a large snowflake
     icon watermark (white, 30% opacity), "WINTER" subheading (black,
     uppercase, letter-spaced), a "Sale" heading in Pacifico script (black,
     105px), a large "40" with "%" sup and "off" sub (white, bold, 130px),
     and "To all colorlib products" text.
   - **Right panel (~60%):** Background image (winter/snow theme) with a
     full-width "Shop now" Bootstrap primary button at the bottom.
   - **Close button:** Top-right, semi-transparent dark overlay with X icon.
   - **No border radius** on the modal — sharp square corners.
   - **No border** on modal content — flat design with drop shadow.

## Gherkin requirements

### Scenario: Page renders centered section with heading and launch button

```gherkin
Scenario: Page renders centered section with heading and launch button
  Given the user visits the modalvex page
  Then they see a centered section with heading "ModalVex"
  And a "Launch Modal" button is visible in the center
```

### Scenario: Clicking launch button opens the modal

```gherkin
Scenario: Clicking launch button opens the modal
  Given the user is on the modalvex page
  When they click the "Launch Modal" button
  Then a modal overlay appears centered on screen
  And the modal has a split layout with left and right panels
```

### Scenario: Modal left panel displays promotional content

```gherkin
Scenario: Modal left panel displays promotional content
  Given the modal is open
  Then the left panel has a teal (#39bdc8) background
  And a "Winter" subheading is visible (uppercase, letter-spaced)
  And a "Sale" heading in Pacifico script is visible
  And a large "40" discount number is visible (white, bold)
  And "% off" text appears next to the discount number
  And "To all colorlib products" description is visible
```

### Scenario: Modal right panel displays image with CTA button

```gherkin
Scenario: Modal right panel displays image with CTA button
  Given the modal is open
  Then the right panel displays a background image
  And a "Shop now" button is visible in the right panel
```

### Scenario: Modal close button dismisses the overlay

```gherkin
Scenario: Modal close button dismisses the overlay
  Given the modal is open
  When the user clicks the close (X) button
  Then the modal overlay disappears
  And the page returns to the initial state with the launch button visible
```

### Scenario: Modal has correct visual styling

```gherkin
Scenario: Modal has correct visual styling
  Given the modal is open
  Then the modal has no border radius (sharp corners)
  And the modal has a subtle drop shadow
  And the modal max-width is approximately 700px
  And the modal is vertically and horizontally centered
```

## Verification checklist

- [ ] Section background is white
- [ ] Centered heading and launch button render correctly
- [ ] Modal opens on button click with fade/slide animation
- [ ] Left panel has teal `#39bdc8` background
- [ ] "Sale" text uses Pacifico cursive font
- [ ] Discount number "40" is large (130px), white, bold
- [ ] "% off" appears as sup/sub next to discount
- [ ] Right panel has background image with "Shop now" button
- [ ] Close button (X) is top-right with semi-transparent background
- [ ] Modal has no border radius (sharp corners)
- [ ] Modal has soft drop shadow
- [ ] Modal is vertically and horizontally centered
- [ ] Modal dismisses on close button click
- [ ] Modal dismisses on backdrop click (standard Bootstrap behavior)
- [ ] Responsive: right panel stacks below left panel on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
