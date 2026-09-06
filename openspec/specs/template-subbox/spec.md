# Template: SubBox (Modal / Popup)

## Purpose

Recreation of ColorLib "Modal 13" — a subscription form modal snippet with a
light pink background, Instagram-style branding, and dual-button layout
("No, thanks" + "Subscribe"). Unlike Modal 12's dark photographic overlay,
this uses a soft pastel background with dark text.

- **Source slug:** `modal-13`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-13/
- **ColorLib page:** https://colorlib.com/wp/template/modal-13/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (style.css + bootstrap.min.css).

| Token              | Value                                  | Notes                                    |
| ------------------- | -------------------------------------- | ---------------------------------------- |
| Background          | `#f9eaf2`                              | Soft pink (`.bg-3` class)                |
| Primary button      | `#007bff`                              | Bootstrap 4 default primary blue         |
| Secondary button    | `#6c757d`                              | Bootstrap 4 default secondary gray       |
| Heading text (h3)   | `#000`                                 | Black, 22px                              |
| Paragraph text      | `#777`                                 | Medium gray                              |
| Close button        | `#000`                                 | Black                                    |
| Cancel text         | `rgba(255,255,255,0.5)`               | Semi-transparent white (not used in body bg context) |
| Body font           | `"Roboto", sans-serif`                 | Loaded via Google Fonts                  |
| Heading font        | `"Roboto", sans-serif`                 | Same family as body                      |
| Button radius       | `4px`                                  | Rounded-rect Bootstrap buttons           |
| Modal radius        | `7px`                                  | Rounded corners on modal container       |
| Modal shadow        | `0 10px 50px -10px rgba(0,0,0,0.9)`   | Heavy drop shadow                        |
| Input shadow        | `0 2px 2px 0 rgba(0,0,0,0.1)`         | Subtle shadow on email input             |
| Logo size           | `70px` width                           | Instagram icon in header area            |

## Visual design (from screenshot + CSS)

- **Background page:** Minimal white page with centered "Modal #3" heading and
  a gray "Launch modal" button (btn-secondary).
- **Modal dialog:** Centered, rounded corners (7px), heavy drop shadow.
  Background is solid soft pink (#f9eaf2) — NO image overlay.
- **Close button:** Top-right, black X icon, dismisses modal.
- **Logo:** Centered Instagram-style icon (70px), displayed above the heading.
- **Heading:** "Exclusives offer from Instagram" — h3, black, 22px, centered.
- **Description:** Gray paragraph (#777), centered.
- **Form:** Full-width email input with subtle box-shadow, stacked below heading.
- **Buttons:** Two side-by-side full-width buttons in a 2-column grid:
  - Left: "No, thanks" (secondary/gray, dismisses modal)
  - Right: "Subscribe" (primary/blue)
- **Footer text:** Small text at bottom in light color.
- **Color palette:** Soft pink background, black headings, gray body text,
  blue primary accent, gray secondary accent.

## Gherkin requirements

```gherkin
Feature: SubBox — subscription form modal

  Background:
    Given the page loads at the root URL
    And the modal is hidden by default

  Scenario: Launch button opens modal
    Given the user sees the "Launch modal" button
    When the user clicks the "Launch modal" button
    Then the modal dialog appears centered on screen
    And the modal has a soft pink (#f9eaf2) background
    And the modal shows a logo, heading, description, email form, and two buttons

  Scenario: Close modal via close button
    Given the modal is open
    When the user clicks the close (X) button
    Then the modal closes

  Scenario: Close modal via "No, thanks" button
    Given the modal is open
    When the user clicks the "No, thanks" button
    Then the modal closes

  Scenario: Submit email form
    Given the modal is open
    When the user types a valid email in the email input
    And the user clicks the "Subscribe" button
    Then the form submits (action="#")

  Scenario: Empty email validation
    Given the modal is open
    When the user clicks "Subscribe" without entering an email
    Then the browser's native email validation prevents submission

  Scenario: Keyboard accessibility
    Given the modal is open
    When the user presses Escape
    Then the modal closes
    And focus returns to the launch button

  Scenario: Modal is responsive
    Given the modal is open on a mobile viewport
    Then the email input is full-width
    And the two buttons stack or remain side-by-side as in the original

  Scenario: Visual design match
    Given the modal is open
    Then the background is soft pink (#f9eaf2)
    And headings are black (#000)
    And paragraphs are gray (#777)
    And the logo is centered above the heading
    And the modal has 7px border-radius and heavy drop shadow
```

## Component breakdown

1. **PageContent** — static background page with heading + launch button (gray)
2. **ModalDialog** — centered modal with pink background, no image overlay
3. **ModalClose** — close button (top-right, black X)
4. **ModalLogo** — centered logo/icon above heading
5. **ModalForm** — email input + two side-by-side buttons ("No, thanks" + "Subscribe")

## Verification checklist

- [ ] Modal opens on launch button click
- [ ] Modal closes on close button click
- [ ] Modal closes on "No, thanks" button click
- [ ] Modal closes on Escape key
- [ ] Email form has full-width input with shadow and two side-by-side buttons
- [ ] Soft pink (#f9eaf2) background renders correctly
- [ ] Logo is centered above heading (70px)
- [ ] Headings are black, paragraphs are gray
- [ ] Modal has 7px border-radius and heavy drop shadow
- [ ] Responsive: form and buttons adapt to mobile
- [ ] Focus trap within modal when open
- [ ] Footer links to https://www.componentdock.com/

## Replication notes

- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/modal-13/`
  (fetched successfully on 2026-09-06).
- **Screenshot:** ColorLib page at
  `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-13.jpg`.
- **Assets:** Use a simple SVG or lucide-react icon for the Instagram-style logo.
  Do NOT copy the original SVG asset.
- **jQuery/Bootstrap JS:** Replace with React state (useState for open/close)
  and Tailwind CSS. No jQuery dependency.
- **Key difference from Modal 12:** Light pink background with dark text vs.
  dark image overlay with white text. Two-button layout vs. single dismiss link.
