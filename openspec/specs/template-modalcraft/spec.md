# Template: ModalCraft (Modal)

## Purpose

Recreation of the ColorLib "Modal V11" template — a minimal text modal popup
with centered page layout and a Bootstrap-inspired modal dialog.

- **Source:** [ColorLib Modal 11](https://colorlib.com/wp/template/modal-11/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-11/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-11.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the preview stylesheet (`css/style.css`) and HTML structure:

| Token | Value | Notes |
|-------|-------|-------|
| Body font | `Roboto`, sans-serif, 300 weight | Main body text |
| Heading font | `Roboto`, sans-serif | Same family, default weight |
| Paragraph color | `#b3b3b3` | Light gray text |
| Button style | `btn-primary` (Bootstrap blue `#007bff`) | Sharp corners (border-radius: 0) |
| Button shadow | `0 7px 0px -2px rgba(0,123,255,0.3)` | Subtle blue offset shadow |
| Button padding | `10px 20px` | Compact |
| Modal background | White | `rounded-0` (sharp corners) |
| Modal shadow | `0 10px 50px -10px rgba(0,0,0,0.3)` | Deep soft shadow |
| Modal padding | Header: 30px left/right; Body: 30px left/right | Generous horizontal |
| Modal header border | None (no bottom border) | Clean look |
| Close icon | icomoon `icon-close2` | Custom icon, use X from Lucide |
| Page layout | Full viewport height, centered | `height: 100vh` |
| Fade animation | Scale 0→1, opacity 0→1, 0.2s linear | Custom scale-in effect |

## Visual Design

From the screenshot: A minimalist white-background page with "Modal #1" as a
centered heading and a blue "Launch modal" button below it. Clicking the button
opens a centered modal dialog with a title bar, close button (X), and two
paragraphs of body text. The modal has a subtle deep shadow, sharp corners, and
generous horizontal padding. The overall aesthetic is clean, minimal, and
functional — no decorative elements, just typography and interaction.

## Gherkin Requirements

### Background
Given the page loads with a centered layout
When the viewport is displayed
Then the content is vertically and horizontally centered
And the page title "Modal #1" is visible
And a "Launch modal" button is displayed below the title

### Scenario: Modal opens on button click
Given the page is loaded
When the user clicks the "Launch modal" button
Then a modal dialog appears centered in the viewport
And the modal displays a title "Modal title"
And the modal displays body text content
And a close button (X) is visible in the modal header

### Scenario: Modal closes on close button click
Given the modal is open
When the user clicks the close button (X)
Then the modal closes with a fade-out animation
And the page content is visible again

### Scenario: Modal closes on backdrop click
Given the modal is open
When the user clicks the dark backdrop area outside the modal
Then the modal closes
And the page content is visible again

### Scenario: Modal closes on Escape key
Given the modal is open
When the user presses the Escape key
Then the modal closes
And the page content is visible again

### Scenario: Accessibility - modal focus trap
Given the modal is open
When the user presses Tab repeatedly
Then focus stays trapped within the modal
And focus cycles through the close button and modal content

### Scenario: Accessibility - aria attributes
Given the modal is rendered
Then the modal container has `role="dialog"`
And the modal has `aria-labelledby` pointing to the title
And the modal has `aria-hidden="true"` when closed
And the close button has `aria-label="Close"`

### Scenario: Responsive layout
Given the page is viewed on a mobile viewport (375px width)
Then the content remains centered
And the modal scales appropriately within the viewport
And the button remains clickable

### Scenario: Design token verification
Given the page is rendered
Then the body font-family is Roboto
And the paragraph text color is #b3b3b3
And the button has sharp corners (no border-radius)
And the button has a blue shadow effect
And the modal has a white background with sharp corners
And the modal has a deep box-shadow

## Verification Checklist

- [ ] Page renders with centered title + button layout
- [ ] Button triggers modal open with scale-in animation
- [ ] Modal displays title and body text
- [ ] Close button (X) dismisses modal
- [ ] Backdrop click dismisses modal
- [ ] Escape key dismisses modal
- [ ] Focus trap works within modal
- [ ] aria attributes are correct
- [ ] Responsive on mobile viewports
- [ ] Design tokens match reference (colors, fonts, shadows, radii)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
