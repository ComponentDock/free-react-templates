# Template: ReadMore (Modal / Popup)

## Purpose

Recreation of ColorLib "Modal 12" — a free eBook subscription form modal for
growing an email list. The original is a Bootstrap 4 modal component with a
background-image overlay, email subscribe form, and close/dismiss controls.

- **Source slug:** `modal-12`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/modal-12/
- **ColorLib page:** https://colorlib.com/wp/template/modal-12/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (style.css + bootstrap.min.css).

| Token              | Value                                  | Notes                                    |
| ------------------ | -------------------------------------- | ---------------------------------------- |
| Brand / primary    | `#007bff`                              | Bootstrap 4 default primary blue         |
| Text (body)        | `#b3b3b3`                             | Light gray paragraphs (on dark bg)       |
| Modal text          | `#fff`                                 | White text inside modal body             |
| Close / cancel      | `rgba(255,255,255,0.5)`               | Semi-transparent white                   |
| Overlay             | `rgba(0,0,0,0.5)`                     | Semi-transparent black over hero image   |
| Shadow              | `0 10px 50px -10px rgba(0,0,0,0.9)`   | Strong drop shadow on modal              |
| Body font           | `"Roboto", sans-serif`                 | Loaded via Google Fonts                  |
| Heading font        | `"Roboto", sans-serif`                 | Same family as body                      |
| Heading h2 size     | `18px`                                | Modal header row title                   |
| Heading h3 size     | `22px`                                | Modal body "Get a free Ebook" heading    |
| Button radius       | `4px`                                  | Rounded-rect Bootstrap buttons           |
| Modal radius        | `7px`                                  | Rounded corners on modal container       |
| Button padding      | `px-4 py-3` (launch) / default (sub)  | Launch button larger; subscribe default  |
| Line divider        | `1px solid rgba(255,255,255,0.3)`     | Bottom border on header row              |

## Visual design (from screenshot)

The preview screenshot shows:

- **Background page:** Minimal — a centered heading "Modal #2" and a single
  blue "Launch modal" button on a white page. The page itself is not the focus;
  the modal IS the template.
- **Modal dialog:** Centered, rounded corners (7px), heavy drop shadow.
  Background is a full-bleed photograph (hero image) with a dark semi-transparent
  overlay.
- **Modal header row:** Three-column layout — logo (icon) on the left,
  "Exclusive Offer" heading centered, close button (X icon) on the right.
  Separated from body by a thin white line (30% opacity).
- **Modal body:** Centered content — "Get a free Ebook" heading, a paragraph of
  description text, an inline form (email input + blue "Subscribe" button),
  and a "Maybe later" dismiss link below.
- **Color palette:** White text over dark photographic background. Primary accent
  is Bootstrap blue (#007bff) for the subscribe button and launch button.
- **Typography:** Roboto throughout, weights 300 (light body) and 400 (regular).
  No serif fonts used despite Source Serif Pro being loaded.

## Gherkin requirements

```gherkin
Feature: ReadMore — eBook subscription modal

  Background:
    Given the page loads at the root URL
    And the modal is hidden by default

  Scenario: Launch button opens modal
    Given the user sees the "Launch modal" button
    When the user clicks the "Launch modal" button
    Then the modal dialog appears centered on screen
    And the modal has a background image with dark overlay
    And the modal header shows a logo, "Exclusive Offer" heading, and close button

  Scenario: Close modal via close button
    Given the modal is open
    When the user clicks the close (X) button
    Then the modal closes

  Scenario: Close modal via "Maybe later" link
    Given the modal is open
    When the user clicks the "Maybe later" link
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
    Then the form input and button stack vertically
    And the header logo, title, and close button remain visible

  Scenario: Page behind modal
    Given the modal is open
    Then the background page content is visible but dimmed
    And the launch button is not interactive while modal is open
```

## Component breakdown

1. **PageContent** — static background page with heading + launch button
2. **ModalOverlay** — backdrop + modal dialog container
3. **ModalHeader** — logo + "Exclusive Offer" title + close button, with bottom border
4. **ModalBody** — background image, dark overlay, heading, description, email form, "Maybe later" link

## Verification checklist

- [ ] Modal opens on launch button click
- [ ] Modal closes on close button click
- [ ] Modal closes on "Maybe later" click
- [ ] Modal closes on Escape key
- [ ] Email form has input with placeholder and submit button
- [ ] Background image with dark overlay renders correctly
- [ ] Header row has logo, title, close button in 3-column layout
- [ ] Thin white divider line below header
- [ ] Modal has 7px border-radius and heavy drop shadow
- [ ] White text on dark overlay is readable
- [ ] Blue (#007bff) accent on subscribe and launch buttons
- [ ] Responsive: form stacks on mobile
- [ ] Focus trap within modal when open
- [ ] Footer links to https://www.componentdock.com/

## Replication notes

- **Preview URL unreachable at standard slug** — the live preview is at
  `https://preview.colorlib.com/theme/bootstrap/modal-12/` (not `/theme/modal-12/`).
  Fetched successfully on 2026-09-06.
- **Screenshot analyzed:** ColorLib template page screenshot at
  `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-12.jpg`.
- **Assets:** Use placeholder image (`https://picsum.photos/seed/readmore-hero/800/600`)
  for the modal background. Use a simple SVG or lucide-react icon for the logo.
  Do NOT copy the Google Drive SVG or any original assets.
- **jQuery/Bootstrap JS:** The original uses jQuery + Bootstrap 4 JS for modal
  toggling. Replace with React state (useState for open/close) and Tailwind
  CSS for styling. No jQuery dependency.
