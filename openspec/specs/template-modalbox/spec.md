# Template: ModalBox (Modal / Coupon Popup)

## Purpose

Recreation of **ColorLib "Modal 04"** — a coupon modal window popup template
designed for ecommerce and marketplace integration.

- **Source:** https://colorlib.com/wp/template/modal-04/
- **Preview (original):** https://preview.colorlib.com/theme/modal-04/ (unreachable at prep time)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-04.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** `modalbox` (app folder: `apps/modalbox`, package: `@free-react-templates/modalbox`)
- **Deploy target:** https://modalbox.free.componentdock.com

## Design tokens

Extracted from screenshot pixel analysis (preview was unreachable — 404):

| Token              | Value                      | Notes                                   |
| ------------------ | -------------------------- | --------------------------------------- |
| Brand color        | `#65c3c3` (teal/turquoise) | CTA button, accent elements             |
| Brand color hover  | `#5abeb4` (darker teal)    | Hover state for CTA                     |
| Overlay background | `#7f7f7f` (medium gray)    | Semi-transparent modal backdrop         |
| Modal background   | `#ffffff` (white)          | Modal card surface                      |
| Heading text       | `#2c2f3e` (dark navy)      | Modal title, prominent text             |
| Body text          | `#43434f` (dark gray-navy) | Subtext, descriptions                   |
| Secondary text     | `#8b807a` (warm gray)      | Fine print, disclaimers                 |
| Bottom banner      | `#2c2f3e` (dark navy)      | Bottom CTA section background           |
| Banner text        | `#ffffff` (white)          | Text on dark bottom banner              |
| Font family        | System sans-serif stack    | -apple-system, BlinkMacSystemFont, sans |
| Button radius      | ~4px (slightly rounded)    | CTA button corners                      |
| Modal radius       | ~8px (rounded card)        | Modal card corners                      |
| Modal shadow       | Large drop shadow          | Floating card appearance                |

**Color note:** The preview was unreachable. Tokens derived from screenshot
pixel sampling. The dominant palette is teal (#65c3c3) + dark navy (#2c2f3e)
on white, with a gray overlay backdrop.

## Gherkin requirements

### Modal overlay

```gherkin
Feature: Modal overlay backdrop

  Scenario: Overlay covers full viewport
    Given the page has loaded
    When the modal is triggered (after delay or exit intent)
    Then a semi-transparent gray overlay (#7f7f7f at ~60% opacity) covers the entire viewport

  Scenario: Overlay dims page content
    Given the modal overlay is visible
    Then the underlying page content is visually dimmed and non-interactive

  Scenario: Overlay click dismisses modal
    Given the modal overlay is visible
    When the user clicks on the overlay area outside the modal card
    Then the modal and overlay are dismissed
```

### Modal card

```gherkin
Feature: Modal card container

  Scenario: Modal card is centered
    Given the modal is visible
    Then the modal card is centered horizontally and vertically in the viewport

  Scenario: Modal card has white background
    Given the modal is visible
    Then the modal card has a white (#ffffff) background with rounded corners (~8px)

  Scenario: Modal card has drop shadow
    Given the modal is visible
    Then the modal card has a visible drop shadow giving a floating appearance

  Scenario: Modal card has close button
    Given the modal is visible
    Then a close button (X icon) is displayed in the top-right corner of the modal card

  Scenario: Close button dismisses modal
    Given the modal is visible
    When the user clicks the close button
    Then the modal and overlay are dismissed

  Scenario: Escape key dismisses modal
    Given the modal is visible
    When the user presses the Escape key
    Then the modal and overlay are dismissed
```

### Modal content layout

```gherkin
Feature: Modal content layout

  Scenario: Two-column layout
    Given the modal is visible
    Then the modal content is split into a left section (product image) and right section (coupon details)

  Scenario: Left section shows product image
    Given the modal is visible
    Then the left section displays a product/image area with a placeholder image

  Scenario: Right section shows coupon details
    Given the modal is visible
    Then the right section contains a headline, descriptive text, and a CTA button

  Scenario: Headline text
    Given the modal is visible
    Then the right section displays a bold headline in dark navy (#2c2f3e)

  Scenario: Descriptive text
    Given the modal is visible
    Then the right section displays descriptive text below the headline

  Scenario: CTA button
    Given the modal is visible
    Then a teal (#65c3c3) CTA button with white text is displayed in the right section
    And the button has slightly rounded corners (~4px)
```

### Bottom banner / secondary CTA

```gherkin
Feature: Bottom banner

  Scenario: Bottom banner present
    Given the modal is visible
    Then a bottom banner section is displayed below the main modal content

  Scenario: Bottom banner has dark background
    Given the modal is visible
    Then the bottom banner has a dark navy (#2c2f3e) background

  Scenario: Bottom banner text
    Given the modal is visible
    Then the bottom banner contains white text with a secondary CTA or message
```

### Modal trigger behavior

```gherkin
Feature: Modal trigger

  Scenario: Modal appears after delay
    Given the page has loaded
    When a configurable delay elapses (e.g. 3 seconds)
    Then the coupon modal appears with overlay

  Scenario: Modal appears on exit intent
    Given the page has loaded
    When the user moves the mouse toward the browser chrome (exit intent)
    Then the coupon modal appears with overlay

  Scenario: Modal appears once per session
    Given the modal has been dismissed
    When the user navigates within the same session
    Then the modal does not reappear automatically

  Scenario: Modal respects user dismissal
    Given the modal is dismissed by the user
    Then the dismissal is stored in session/local storage
    And the modal will not reappear in the same session
```

### Responsive behavior

```gherkin
Feature: Responsive modal

  Scenario: Mobile layout
    Given the viewport width is less than 640px
    When the modal is visible
    Then the modal content stacks vertically (image on top, details below)
    And the modal fills most of the viewport width with margin

  Scenario: Tablet layout
    Given the viewport width is between 640px and 1024px
    When the modal is visible
    Then the modal content uses the two-column layout at reduced size
```

## Verification checklist

- [ ] Modal overlay covers full viewport with semi-transparent gray
- [ ] Modal card is centered, white background, rounded corners, drop shadow
- [ ] Close button (X) in top-right corner dismisses modal
- [ ] Escape key dismisses modal
- [ ] Overlay click outside card dismisses modal
- [ ] Two-column layout: product image (left) + coupon details (right)
- [ ] Headline in dark navy, descriptive text below
- [ ] Teal CTA button with white text
- [ ] Bottom dark banner with white text
- [ ] Modal triggers after configurable delay
- [ ] Modal triggers on exit intent
- [ ] Modal dismissal persists (localStorage)
- [ ] Responsive: stacks vertically on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] 100% test coverage (lines, functions, branches, statements)
