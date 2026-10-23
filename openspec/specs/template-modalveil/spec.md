# Template: ModalVeil (Modal)

## Purpose

Recreation of the ColorLib "Modal V15" template — a split-screen sign-up pop-up
modal with an image on the left half and a registration form on the right half.

- **Source:** [ColorLib Modal 15](https://colorlib.com/wp/template/modal-15/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-15/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-15.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token | Value | Notes |
|-------|-------|-------|
| Body font | `Roboto`, sans-serif, 300 weight | Main body text |
| Heading font | `Roboto`, sans-serif | Same family, default weight |
| Paragraph color | `#b3b3b3` | Light gray text |
| Modal heading color | `#000` (black) | font-size: 22px |
| Modal paragraph color | `#777` | font-size: 14px |
| Button primary | Bootstrap `btn-primary` (#007bff) | border-radius: 4px, block width |
| Button secondary | Bootstrap `btn-secondary` (#6c757d) | px-4 py-3 for launch button |
| Modal background | `#fff` (white) | |
| Modal border-radius | `7px` | Rounded corners on modal |
| Modal shadow | `0 10px 50px -10px rgba(0,0,0,0.9)` | Deep, strong shadow |
| Form control border | `1px solid #ccc` | Clean, minimal inputs |
| Form control focus | `box-shadow: none` | No focus ring glow |
| Privacy link color | `#555` | font-weight: 900 |
| Privacy note color | `#999` | Fine print text |
| Close icon | icomoon `icon-close2` | Use Lucide X icon instead |
| Promo image | `flex: 0 0 50%` | Takes exactly half the modal |
| Page layout | Full viewport height, centered | `height: 100vh` |
| Fade animation | Bootstrap `modal fade` | Scale + opacity transition |
| Surface (measured) | `#ed5107` | paints it ×5 — `background-color` on `.cl-btn-primary`; style.css?v=add186fd (18,529 B, sha256 421e8a340698) · <https://preview.colorlib.com/theme/bootstrap/modal-15/> |

## Visual Design

From the screenshot and preview HTML: A full-viewport page with centered content
showing "Modal #5" heading and a gray "Launch modal" button. Clicking the button
opens a large, centered Bootstrap modal with a split-screen layout — the left
half displays a background image (placeholder) and the right half contains a
white content area with a bold heading ("Sign up to access all the resources"),
a short description paragraph, and a sign-up form (email, first name, password
fields + primary "Sign up" button + privacy policy link). The modal has rounded
corners (7px), a deep box-shadow, and the form inputs have thin gray borders
with no focus glow. The overall aesthetic is clean, modern, and focused on
conversion — the image draws attention while the form captures leads.

## Requirements

### Feature: ModalVeil template behaviour

**Background**
- **GIVEN** the page loads with a centered layout
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Modal #5" is visible
- **AND** a "Launch modal" button is displayed below the title

#### Scenario: Modal opens on button click

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a large modal dialog appears centered in the viewport
- **AND** the modal displays a split-screen layout
- **AND** the left half shows a background image
- **AND** the right half shows a heading "Sign up to access all the resources"
- **AND** the right half shows a description paragraph
- **AND** the right half shows a sign-up form

#### Scenario: Sign-up form contains required fields

- **GIVEN** the modal is open
- **WHEN** the user inspects the form
- **THEN** an "Email Address" input field is visible
- **AND** a "First Name" input field is visible
- **AND** a "Password" input field is visible
- **AND** a "Sign up" submit button is visible
- **AND** a privacy policy note is displayed below the button

#### Scenario: Form submission with valid data

- **GIVEN** the modal is open
- **WHEN** the user enters a valid email address
- **AND** the user enters a first name
- **AND** the user enters a password
- **AND** the user clicks the "Sign up" button
- **THEN** the form submits (or shows validation feedback)

#### Scenario: Form submission with empty fields

- **GIVEN** the modal is open
- **WHEN** the user clicks the "Sign up" button without entering data
- **THEN** the email field shows a validation error
- **AND** the form does not submit

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

#### Scenario: Modal keyboard accessibility

- **GIVEN** the modal is open
- **WHEN** the user presses Tab repeatedly
- **THEN** focus cycles through the modal form fields only
- **AND** focus does not escape to the background page

#### Scenario: Responsive layout

- **GIVEN** the modal is open on a mobile viewport (< 768px)
- **THEN** the split-screen layout stacks vertically
- **AND** the image appears above the form content
- **AND** all form fields remain usable

## Verification checklist

- [ ] Page renders centered "Modal #5" heading and launch button
- [ ] Launch button triggers modal with split-screen layout
- [ ] Left half displays a placeholder image (50% width)
- [ ] Right half displays heading, description, and form
- [ ] Form has email, first name, password fields
- [ ] "Sign up" button is full-width primary style
- [ ] Privacy policy note appears below the button
- [ ] Modal has 7px border-radius and deep shadow
- [ ] Close button (X) closes the modal
- [ ] Backdrop click closes the modal
- [ ] Escape key closes the modal
- [ ] Focus trap works within the modal
- [ ] Responsive: stacks vertically on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/modal-15/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#007bff` — nearest `#fba278` (d=288)
<!-- live-palette-unverified:end -->
