# Template: ModalPulse (Bootstrap Modal)

## Purpose

Recreation of ColorLib **Modal 18** — a free offer-with-CTA modal template.
The modal promotes an exclusive offer or product launch, featuring a centered
dialog with an illustration, headline, description, and dual-action buttons
(dismiss + primary CTA).

- **Source:** ColorLib Modal 18
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-18/
- **Category:** Bootstrap Modal Templates
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`) and inline styles.

### Colors

| Token              | Value   | Usage                                    |
| ------------------ | ------- | ---------------------------------------- |
| `--color-bg`       | `#fff`  | Modal body background                    |
| `--color-overlay`  | `#000`  | Modal backdrop (Bootstrap default)       |
| `--color-text`     | `#777`  | Modal paragraph text                     |
| `--color-heading`  | `#000`  | Modal headings (h3)                      |
| `--color-illustration-bg` | `#b2fcff` | Light blue background behind hero illustration |
| `--color-dismiss`  | `gray`  | "No thanks" dismiss link                 |
| `--color-note`     | `#999`  | Secondary note text                      |
| `--color-note-link`| `#555`  | Note link text                           |

### Typography

| Element | Font        | Weight | Size  |
| ------- | ----------- | ------ | ----- |
| Body    | Roboto      | 300    | 14px  |
| h3      | Roboto      | 900    | 22px  |
| h2      | Roboto      | —      | 18px  |
| Modal   | Poppins     | —      | —     |

Both Roboto and Poppins are loaded via Google Fonts / CDN.

### Shapes & Spacing

| Token             | Value                    | Usage                          |
| ----------------- | ------------------------ | ------------------------------ |
| Modal radius      | 7px                      | Modal dialog border radius     |
| Button radius     | 4px                      | All `.btn` elements            |
| Modal shadow      | `0 10px 50px -10px rgba(0,0,0,0.9)` | Heavy modal drop shadow |
| Modal padding     | 0 left/right (body), 1.5rem (`.content-text`) | |
| Button padding    | 10px top/bottom (primary) |                                |

### Section backgrounds

- Modal body: solid white `#fff`
- Illustration area: `background-color: #b2fcff` (light cyan/blue)
- Page backdrop: full-height container, centered content, default white

## Gherkin requirements

```gherkin
Feature: ModalPulse — offer-with-CTA modal

  Background:
    Given the ModalPulse page is loaded
    And the browser viewport is 1280x800

  Scenario: Initial state — trigger button visible
    Then a "Launch modal" button should be visible in the page center
    And the modal dialog should NOT be visible

  Scenario: Open modal on button click
    When I click the "Launch modal" button
    Then the modal dialog should become visible
    And the modal should be centered vertically and horizontally
    And the backdrop overlay should dim the page

  Scenario: Modal content structure
    When the modal is open
    Then an illustration image should be displayed at the top of the modal
    And a heading "Introducing Work from Anywhere" should be visible
    And a description paragraph should be visible below the heading
    And a "Get the app" primary button should be visible
    And a "No thanks" dismiss link should be visible

  Scenario: Illustration background color
    When the modal is open
    Then the illustration area should have a light cyan background (#b2fcff)

  Scenario: Dismiss modal via close link
    When the modal is open
    And I click the "No thanks" link
    Then the modal dialog should close
    And the backdrop overlay should be removed
    And the page content should be interactive again

  Scenario: Dismiss modal via backdrop click
    When the modal is open
    And I click the backdrop overlay area
    Then the modal dialog should close

  Scenario: Dismiss modal via Escape key
    When the modal is open
    And I press the Escape key
    Then the modal dialog should close

  Scenario: Modal visual styling
    When the modal is open
    Then the modal dialog should have a border radius of 7px
    And the modal should have a drop shadow
    And the heading text should be bold (#000)
    And the paragraph text should be gray (#777)

  Scenario: Button styling
    When the modal is open
    Then the "Get the app" button should have a border radius of 4px
    And the "Get the app" button should have primary color styling

  Scenario: Accessibility
    When the modal is open
    Then the modal should have role="dialog"
    And the modal should have aria-labelledby pointing to the heading
    And the modal should have aria-hidden="true" when closed

  Scenario: Keyboard trap in modal
    When the modal is open
    Then Tab should cycle through focusable elements within the modal
    And focus should NOT escape to the page behind the modal
```

## Verification checklist

- [ ] Modal opens on "Launch modal" button click
- [ ] Modal closes on "No thanks" click, backdrop click, Escape key
- [ ] Illustration area uses `#b2fcff` light cyan background
- [ ] Modal dialog has 7px border radius and heavy drop shadow
- [ ] Heading is bold Roboto, paragraph is light gray
- [ ] "Get the app" primary button has 4px radius
- [ ] Modal is centered vertically and horizontally
- [ ] Backdrop overlay dims page when modal is open
- [ ] aria-labelledby, role="dialog", aria-hidden attributes present
- [ ] Tab focus is trapped within the modal when open
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib anywhere in app source code
