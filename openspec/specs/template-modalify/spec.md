# Template: Modalify (Modal)

## Purpose

Recreation of the ColorLib "Modal V13" template — a subscription/offer modal popup
with centered page layout, pink background, email form, and dual action buttons.

- **Source:** [ColorLib Modal 13](https://colorlib.com/wp/template/modal-13/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-13/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-13.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`) and HTML structure:

| Token | Value | Notes |
|-------|-------|-------|
| Body font | `Roboto`, sans-serif, 300 weight | Main body text |
| Heading font | `Roboto`, sans-serif | Same family, default weight |
| Paragraph color | `#b3b3b3` | Light gray text |
| Modal body color | `#777` | Darker gray for modal body paragraphs |
| Heading color (in modal) | `#000` | Black headings |
| Close button color | `#000` | Black close icon |
| Brand color (modal bg) | `#f9eaf2` | Light pink (`bg-3` class) |
| Button style | `btn-secondary` / `btn-primary` | Sharp corners (border-radius: 4px) |
| Button radius | `4px` | Slightly rounded |
| Button padding | Default Bootstrap | `px-4 py-3` on launch button |
| Modal background | `#f9eaf2` (pink) | Light pink background |
| Modal border-radius | `7px` | Slightly rounded corners |
| Modal shadow | `0 10px 50px -10px rgba(0,0,0,0.9)` | Deep, strong shadow |
| Modal content bg | Transparent → inherits from modal-body | No separate content bg |
| Form input shadow | `0 2px 2px 0 rgba(0,0,0,0.1)` | Subtle input shadow |
| Form input border | Transparent | No visible border |
| Logo image width | `70px` | Instagram SVG logo |
| Close icon | icomoon `icon-close2` | Use Lucide X icon |
| Page layout | Full viewport height, centered | `height: 100vh` |
| Content alignment | Vertically + horizontally centered | Bootstrap `align-items-center` |
| Cancel text | Small, white 50% opacity | Bottom of form |

## Visual Design

From the preview HTML structure: A white-background page with "Modal #3" as a
centered heading and a "Launch modal" button below it. Clicking the button opens
a centered modal dialog with:
- Light pink (#f9eaf2) background
- Close button (X) in the top-right corner
- An Instagram SVG logo (centered)
- Title: "Exclusives offer from Instagram"
- Description paragraph text
- Email input field (full width)
- Two side-by-side buttons: "No, thanks" (secondary) and "Subscribe" (primary)
- Small cancel/disclaimer text at the bottom
The modal has a deep box-shadow, slightly rounded corners (7px), and the overall
aesthetic is clean and promotional with a soft pink color scheme.

## Requirements

### Feature: Modalify template behaviour

**Background**
- **GIVEN** the page loads with a centered layout
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Modal #3" is visible
- **AND** a "Launch modal" button is displayed below the title

#### Scenario: Modal opens on button click

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a light pink (#f9eaf2) background
- **AND** the modal displays an Instagram logo image
- **AND** the modal displays the title "Exclusives offer from Instagram"
- **AND** the modal displays a description paragraph
- **AND** the modal displays an email input field with placeholder "Enter your email address"
- **AND** the modal displays a "No, thanks" secondary button
- **AND** the modal displays a "Subscribe" primary button
- **AND** the modal displays a small cancel/disclaimer text at the bottom
- **AND** a close button (X) is visible in the top-right corner

#### Scenario: Modal closes on close button click

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X)
- **THEN** the modal closes with a fade-out animation
- **AND** the page content is visible again

#### Scenario: Modal closes on backdrop click

- **GIVEN** the modal is open
- **WHEN** the user clicks the dark backdrop area outside the modal
- **THEN** the modal closes
- **AND** the page content is visible again

#### Scenario: Modal closes on Escape key

- **GIVEN** the modal is open
- **WHEN** the user presses the Escape key
- **THEN** the modal closes
- **AND** the page content is visible again

#### Scenario: Modal closes on "No, thanks" button click

- **GIVEN** the modal is open
- **WHEN** the user clicks the "No, thanks" button
- **THEN** the modal closes
- **AND** the page content is visible again

#### Scenario: Email form submission

- **GIVEN** the modal is open
- **WHEN** the user enters a valid email address in the input field
- **AND** the user clicks the "Subscribe" button
- **THEN** the form submits (no page reload)

#### Scenario: Accessibility - modal focus trap

- **GIVEN** the modal is open
- **WHEN** the user presses Tab repeatedly
- **THEN** focus stays trapped within the modal
- **AND** focus cycles through the close button, input, and buttons

#### Scenario: Accessibility - aria attributes

- **GIVEN** the modal is rendered
- **THEN** the modal container has `role="dialog"`
- **AND** the modal has `aria-labelledby` pointing to the title
- **AND** the modal has `aria-hidden="true"` when closed
- **AND** the close button has `aria-label="Close"`

#### Scenario: Responsive layout

- **GIVEN** the page is viewed on a mobile viewport (375px width)
- **THEN** the content remains centered
- **AND** the modal scales appropriately within the viewport
- **AND** the buttons stack or remain usable

#### Scenario: Design token verification

- **GIVEN** the page is rendered
- **THEN** the body font-family is Roboto
- **AND** the modal background is #f9eaf2 (pink)
- **AND** the modal has a border-radius of 7px
- **AND** the modal has a deep box-shadow
- **AND** the buttons have a 4px border-radius
- **AND** the form input has no visible border
- **AND** the cancel text is small and semi-transparent white

## Verification Checklist

- [ ] Page renders with centered title + button layout
- [ ] Button triggers modal open with fade-in animation
- [ ] Modal displays pink background, logo, title, description, form, buttons
- [ ] Close button (X) dismisses modal
- [ ] Backdrop click dismisses modal
- [ ] Escape key dismisses modal
- [ ] "No, thanks" button dismisses modal
- [ ] Email input is functional with placeholder text
- [ ] Focus trap works within modal
- [ ] aria attributes are correct
- [ ] Responsive on mobile viewports
- [ ] Design tokens match reference (colors, fonts, shadows, radii)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
