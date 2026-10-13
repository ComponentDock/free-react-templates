# Template: ReviewCard (Modal / Split-screen Product Review)

## Purpose

Recreation of ColorLib **Modal 19** — a split-screen product review modal.
A centered Bootstrap modal with product image on the left half and review content
(rating stars, description, social actions) on the right half, designed for quick
product review display.

- **Source:** https://colorlib.com/wp/template/modal-19/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-19/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

| Token | Value | Source |
|-------|-------|--------|
| Modal background | `#efefef` (light gray) | `.modal-body { background-color: #efefef }` |
| Modal border-radius | `7px` | `.modal { border-radius: 7px }` |
| Modal shadow | `0 10px 50px -10px rgba(0,0,0,0.9)` | `.modal-body` box-shadow |
| Heading color | `#000` | `.modal .modal-body h3 { color: #000 }` |
| Body text color | `#777` | `.modal .modal-body p { color: #777 }` |
| Social link color | `#b3b3b3` | `.social a { color: #b3b3b3 }` |
| Heart/like color | `#dc3545` (Bootstrap danger-red) | `.social .like .icon { color: #dc3545 }` |
| Message/add color | `#007bff` (Bootstrap primary-blue) | `.social .message .icon { color: #007bff }` |
| Star color | `#ffc107` (Bootstrap warning-yellow) | `.icon-star.text-warning` (Bootstrap utility) |
| Divider color | `#ccc` | `.line:after { background: #ccc }` |
| Close/share hover | `#000` | `.share:hover { color: #000 }` |
| Button border-radius | `4px` | `.btn { border-radius: 4px }` |
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", ...` | body CSS |
| Font weight (body) | `300` (light) | p { font-weight: 300 } |
| Body text size | `18px` | `.modal p { font-size: 18px }` |
| Heading text size | `22px` | `.modal .modal-body h3 { font-size: 22px }` |
| Social actions font | `14px` | `.social a { font-size: 14px }` |
| Price badge | White text, position absolute (top 20px, left 20px) on image panel | `.promo-img .price { color: #fff; position: absolute }` |

### Fonts

- **Primary:** Roboto (300, 400) — loaded via Google Fonts in preview
- **Heading:** Same Roboto family
- **Icons:** icomoon (icon fonts: icon-star, icon-heart, icon-chat, icon-add, icon-share, icon-close2)

## Section structure (fidelity order)

The template consists of a single modal component with a split-screen layout:

1. **Trigger Button** — centered "Launch modal" button on the page body
2. **Modal Overlay** — centered, full-viewport backdrop with fade animation
3. **Modal Container** — modal-lg, modal-dialog-centered, rounded corners (7px)
4. **Split-screen layout** (flexbox d-flex):
   - **Left panel (50%):** Product image as background with price badge overlay
   - **Right panel (50%):** Content column with:
     - Share icon (top-right, absolute positioned)
     - Product heading with decorative bottom line (70px centered gray line)
     - Star rating (4 filled yellow stars, 1 empty)
     - Description paragraph
     - Social action bar: heart (count 25), message (count 10), add/bookmark (count 55)

## Requirements

### Feature: ReviewCard template behaviour

#### Scenario: Modal trigger button renders

- **GIVEN** the page loads
- **WHEN** the user views the body
- **THEN** a "Launch modal" button is visible in the center of the page
- **AND** the button is styled with Bootstrap btn-secondary

#### Scenario: Modal opens on button click

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a centered modal appears
- **AND** the modal has a split-screen layout
- **AND** the modal is semi-transparent backdrop with the modal content centered

#### Scenario: Modal contains product image panel

- **GIVEN** the modal is open
- **WHEN** the user views the left panel
- **THEN** a product image fills 50% of the modal width
- **AND** a price badge ("$2000") is overlaid on the top-left of the image
- **AND** the price badge text is white

#### Scenario: Modal contains review content panel

- **GIVEN** the modal is open
- **WHEN** the user views the right panel
- **THEN** a share icon is in the top-right corner
- **AND** a product heading "Grand Prix 4000" is displayed
- **AND** the heading has a decorative centered gray underline below it
- **AND** a star rating shows 4 filled yellow stars and 1 empty star
- **AND** a description paragraph is shown in gray text

#### Scenario: Social actions bar displays correctly

- **GIVEN** the modal is open
- **WHEN** the user views the bottom of the right panel
- **THEN** three social actions are displayed in a row
- **AND** the heart action shows a count of "25" with red icon
- **AND** the message action shows a count of "10" with blue icon
- **AND** the add/bookmark action shows a count of "55" with blue icon
- **AND** each action is clickable (linked to #)

#### Scenario: Modal closes

- **GIVEN** the modal is open
- **WHEN** the user clicks the backdrop area outside the modal content
- **THEN** the modal closes and the trigger button is visible again

#### Scenario: Modal responsive layout

- **GIVEN** the modal is open on a desktop viewport
- **THEN** the split-screen layout shows image on left and content on right
- **WHEN** the modal is viewed on a smaller viewport
- **THEN** the modal remains centered and scrollable within the viewport

#### Scenario: Design token fidelity

- **GIVEN** the modal is rendered
- **THEN** the modal background is #efefef
- **AND** the modal border-radius is 7px
- **AND** the modal shadow is 0 10px 50px -10px rgba(0,0,0,0.9)
- **AND** the heading color is #000
- **AND** the body text color is #777
- **AND** the font-family is Roboto or system fallback

## Verification checklist

- [ ] "Launch modal" trigger button renders centered on page
- [ ] Modal opens with fade animation on button click
- [ ] Modal is centered in viewport (modal-dialog-centered)
- [ ] Split-screen layout: 50% image, 50% content
- [ ] Product image panel fills left half with cover/contain styling
- [ ] Price badge overlaid on image (top-left, white text)
- [ ] Share icon visible in top-right of content panel
- [ ] Product heading with decorative gray underline
- [ ] Star rating shows 4/5 filled stars (yellow)
- [ ] Description text in gray (#777)
- [ ] Social actions bar: heart (25), message (10), add (55)
- [ ] Heart icon is red (#dc3545), message/add icons are blue (#007bff)
- [ ] Modal closes on backdrop click
- [ ] Design tokens match extracted values (colors, font, radius, shadow)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
