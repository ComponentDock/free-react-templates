# Template: Modalbloom (Modal)

## Purpose

Recreation of the ColorLib "Modal 18" template — a centered full-viewport page
with a "Launch modal" button that opens a Bootstrap-style modal dialog. The modal
features a split layout: a light cyan illustration on the left and promotional
text + CTA buttons on the right, with a deep drop shadow and white background.

- **Source:** [ColorLib Modal 18](https://colorlib.com/wp/template/modal-18/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-18/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-18.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the preview HTML and `css/style.css`:

| Token                    | Value                               | Notes                                            |
| ------------------------ | ----------------------------------- | ------------------------------------------------ |
| Body font                | `Roboto`, sans-serif, 400 weight    | Main body text and headings                      |
| Modal font               | `Poppins`, sans-serif               | Used inside the modal dialog                     |
| Paragraph color (body)   | `#b3b3b3`                          | Light gray body paragraphs                       |
| Paragraph color (modal)  | `#777`                              | Slightly darker gray for modal body paragraphs   |
| Heading color (modal)    | `#000`                              | Black headings inside modal                      |
| Modal heading weight     | `900`                               | Extra bold h3 inside modal                       |
| Modal heading font-size  | `22px`                              | Modal title size                                 |
| Paragraph font-size      | `14px`                              | Modal body text size                             |
| Modal background (page)  | `transparent`                       | Overlay background                               |
| Modal content bg         | `#fff`                              | White modal body background                      |
| Modal border-radius      | `7px`                               | Slightly rounded corners                         |
| Modal shadow             | `0 10px 50px -10px rgba(0,0,0,0.9)`| Deep, strong drop shadow                         |
| Modal border             | `none`                              | No visible border on modal-content               |
| Image background         | `#b2fcff`                           | Light cyan/aqua behind illustration              |
| Image layout             | `flex: 0 0 50%`                     | Fixed 50% width on left side                     |
| Button border-radius     | `4px`                               | Slightly rounded buttons                         |
| Button border            | `none`                              | No border on buttons                             |
| Button primary color     | Bootstrap primary blue (`#007bff`)  | Standard Bootstrap primary                       |
| Button primary padding   | `10px top/bottom`                   | Standard vertical padding                        |
| Launch button padding    | `px-4 py-3`                         | Larger launch button                             |
| Cancel text color        | `gray`                              | "No thanks" link color                           |
| Cancel font-size         | `14px`                              | Small cancel link text                           |
| Page layout              | Full viewport height, centered      | `height: 100vh` with flex centering              |
| Content alignment        | Vertically + horizontally centered  | Bootstrap `align-items-center` + `text-center`   |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-18/`):

A full-viewport centered page with "Modal #8" heading and a "Launch modal" button
styled as a Bootstrap secondary button (gray). The page background is white.

Clicking the button opens a centered modal dialog with:

- White (#fff) modal body background with 7px border-radius
- Deep box-shadow (0 10px 50px -10px rgba(0,0,0,0.9))
- Flexbox layout: illustration image (50% width, light cyan #b2fcff background)
  on the left + text content on the right
- Heading: "Introducing Work from Anywhere" (22px, Poppins, weight 900, black)
- Description paragraph text (14px, #777, weight 300)
- Two buttons aligned to the right:
  - "No thanks" — btn-link style, gray text, dismisses modal
  - "Get the app" — btn-primary style, Bootstrap blue, rounded 4px
- The illustration uses an undraw-style SVG with a light cyan background

Screenshot note: The preview screenshot URL returned an AVIF image that could
not be visually analyzed. The design description is based entirely on the live
preview DOM and CSS analysis.

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a heading and launch button.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Modalbloom" is visible
- **AND** a "Launch modal" button is displayed below the title

### Requirement: Modal opens on button click

The modal SHALL open when the user clicks the launch button.

#### Scenario: User opens the modal

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a white (#fff) background
- **AND** the modal displays an illustration image on the left (50% width) with light cyan (#b2fcff) background
- **AND** the modal displays the heading "Introducing Work from Anywhere"
- **AND** the modal displays a description paragraph
- **AND** the modal displays a "No thanks" cancel link
- **AND** the modal displays a "Get the app" primary button
- **AND** the modal has a deep box-shadow (0 10px 50px -10px rgba(0,0,0,0.9))
- **AND** the modal has 7px border-radius

### Requirement: Modal closes on close button

The modal SHALL close when the user clicks the close button.

#### Scenario: User closes via X button

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button (X)
- **THEN** the modal closes
- **AND** the page content is visible again

### Requirement: Modal closes on backdrop click

The modal SHALL close when the user clicks outside the modal content.

#### Scenario: User closes via backdrop

- **GIVEN** the modal is open
- **WHEN** the user clicks the dark backdrop area outside the modal
- **THEN** the modal closes
- **AND** the page content is visible again

### Requirement: Modal closes on Escape key

The modal SHALL close when the user presses Escape.

#### Scenario: User closes via Escape

- **GIVEN** the modal is open
- **WHEN** the user presses the Escape key
- **THEN** the modal closes
- **AND** the page content is visible again

### Requirement: Modal closes on cancel link

The modal SHALL close when the user clicks the "No thanks" cancel link.

#### Scenario: User closes via cancel link

- **GIVEN** the modal is open
- **WHEN** the user clicks the "No thanks" link
- **THEN** the modal closes
- **AND** the page content is visible again

### Requirement: Modal content layout

The modal SHALL display content in the correct layout.

#### Scenario: Content layout is correct

- **GIVEN** the modal is open
- **THEN** the illustration image occupies a fixed-width column on the left (50%)
- **AND** the illustration has a light cyan (#b2fcff) background
- **AND** the text content column is on the right
- **AND** the heading is 22px, Poppins font, weight 900, black color
- **AND** the paragraph text is 14px, weight 300, #777 color
- **AND** the "No thanks" and "Get the app" buttons are aligned to the right

### Requirement: Focus trap

The modal SHALL trap focus within itself when open.

#### Scenario: Tab key cycles through focusable elements

- **GIVEN** the modal is open
- **WHEN** the user presses Tab on the last focusable element
- **THEN** focus wraps to the first focusable element

#### Scenario: Shift+Tab cycles backwards

- **GIVEN** the modal is open
- **WHEN** the user presses Shift+Tab on the first focusable element
- **THEN** focus wraps to the last focusable element

### Requirement: Focus restoration

The modal SHALL return focus to the trigger element on close.

#### Scenario: Focus returns to trigger

- **GIVEN** the modal is open and the trigger button was focused
- **WHEN** the modal closes
- **THEN** focus returns to the trigger button

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Footer displays correctly

- **GIVEN** the page is loaded
- **THEN** the footer shows the site name "Modalbloom"
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "More templates at Component Dock"

## Verification Checklist

- [ ] Modal opens with fade-in animation on button click
- [ ] Modal closes on X button click
- [ ] Modal closes on backdrop click
- [ ] Modal closes on Escape key
- [ ] Modal closes on "No thanks" cancel link click
- [ ] White (#fff) background applied to modal body
- [ ] Illustration renders at 50% width on the left with #b2fcff cyan background
- [ ] "Introducing Work from Anywhere" heading is 22px Poppins weight 900
- [ ] Paragraph text is 14px weight 300 #777
- [ ] "No thanks" link is gray, "Get the app" is Bootstrap primary blue
- [ ] Modal has 7px border-radius and deep box-shadow
- [ ] Layout is responsive (stacks vertically on mobile)
- [ ] Accessibility: focus trap within modal when open
- [ ] Accessibility: aria-modal on modal dialog
- [ ] Accessibility: focus returns to trigger button on close
- [ ] Footer links to https://www.componentdock.com/
