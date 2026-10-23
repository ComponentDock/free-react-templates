# Template: ModalShift (Modal)

## Purpose

Recreation of the ColorLib "Modal V17" template — a login form pop-up modal with
an orange top border accent, light-gray background, clean Roboto typography, and
shadow-styled inputs. The page shows a centered "Modal #7" heading and a "Launch
modal" button; clicking it opens a centered modal dialog with a login form.

- **Source:** [ColorLib Modal 17](https://colorlib.com/wp/template/modal-17/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-17/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-17.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token                          | Value                                                  | Notes                                        |
| ------------------------------ | ------------------------------------------------------ | -------------------------------------------- |
| Body font                      | `Roboto`, sans-serif, 300 weight                       | Main body text                               |
| Heading font                   | `Roboto`, sans-serif                                   | Same family, default weight                  |
| Modal heading color            | `#000` (black)                                         | font-size: 22px                              |
| Modal paragraph color          | `#777`                                                 | font-size: 14px                              |
| Button primary                 | Bootstrap `btn-primary` (#007bff)                      | border-radius: 4px, px-5 padding             |
| Button secondary (launch)      | Bootstrap `btn-secondary` (#6c757d)                    | px-4 py-3 for launch button                  |
| Modal background               | `#efefef` (light gray)                                 | modal-body background                        |
| Modal content border-radius    | `0px` (sharp corners)                                  | No rounding on modal                         |
| Modal top border               | `4px solid #ed5107` (orange)                           | Accent top border on modal-body              |
| Modal shadow                   | `0 10px 50px -10px rgba(0,0,0,0.9)`                    | Deep, strong shadow                          |
| Form control border            | transparent, `box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2)` | Clean, minimal inputs with subtle shadow     |
| Form control focus/hover       | Same shadow as default (no visible change)             | Maintains clean appearance                   |
| Custom note color              | `#999`                                                 | Fine print text (sign up link)               |
| Custom note link color         | `#555`                                                 | Bold (font-weight: 900) link text            |
| Close button color             | `#000`                                                 | Black close icon (if present)                |
| Page layout                    | Full viewport height, centered                         | `height: 100vh` on `.content`               |
| Fade animation                 | Bootstrap `modal fade`                                 | Scale + opacity transition                   |
| Button border-radius           | `4px`                                                  | All buttons                                  |
| Link transition                | `0.3s all ease`                                        | Smooth hover transitions                     |

## Visual Design

From the live preview HTML (`https://preview.colorlib.com/theme/bootstrap/modal-17/`):

A full-viewport centered page with "Modal #7" heading and a "Launch modal" button.
Clicking the button opens a centered modal dialog with:

- Orange (`#ed5107`) 4px top border accent on the modal
- Light gray (`#efefef`) background
- Bold "Log In" heading (22px, black)
- Descriptive paragraph text (14px, #777)
- Login form with:
  - Username/Email field (shadow-styled, no visible border)
  - Password field (same style)
  - Primary blue "Login" button (`px-5`)
  - "Forgot password" link (gray, bold dark hover)
- "If you don't have account yet Sign up here" note at bottom (#999 text, bold #555 link)
- Deep box-shadow, sharp corners (0px), clean promotional feel
- No split-screen or image — single-column form layout

## Requirements

### Requirement: Page layout

The page SHALL display a centered layout with a heading and launch button.

#### Scenario: Page renders centered content

- **GIVEN** the page loads
- **WHEN** the viewport is displayed
- **THEN** the content is vertically and horizontally centered
- **AND** the page title "Login Modal" is visible
- **AND** a "Launch modal" button is displayed below the title

### Requirement: Modal opens on button click

The modal SHALL open when the user clicks the launch button.

#### Scenario: User opens the modal

- **GIVEN** the page is loaded
- **WHEN** the user clicks the "Launch modal" button
- **THEN** a modal dialog appears centered in the viewport
- **AND** the modal has a 4px orange (#ed5107) top border
- **AND** the modal has a light gray (#efefef) background
- **AND** the modal has a deep box-shadow

### Requirement: Modal displays login form

The modal SHALL contain a login form with all required fields.

#### Scenario: Form fields are present

- **GIVEN** the modal is open
- **WHEN** the form is rendered
- **THEN** a "Log In" heading is visible
- **AND** a Username/Email input field is displayed
- **AND** a Password input field is displayed
- **AND** a "Login" submit button is displayed
- **AND** a "Forgot password" link is visible

#### Scenario: Form inputs have correct styling

- **GIVEN** the modal is open
- **WHEN** the form fields are rendered
- **THEN** input fields have no visible border (transparent)
- **AND** input fields have a subtle box-shadow (0 1px 3px rgba(0,0,0,0.2))
- **AND** the "Login" button has Bootstrap primary blue color

### Requirement: Modal closes on backdrop click

The modal SHALL close when the user clicks outside the modal content.

#### Scenario: User clicks backdrop

- **GIVEN** the modal is open
- **WHEN** the user clicks the dark backdrop area
- **THEN** the modal closes and the page returns to the initial state

### Requirement: Modal closes on close button

The modal SHALL close when the user clicks the close button (X).

#### Scenario: User clicks close button

- **GIVEN** the modal is open
- **WHEN** the user clicks the close (X) button
- **THEN** the modal closes

### Requirement: Sign-up link

The modal SHALL display a sign-up link for users without an account.

#### Scenario: Sign-up link is visible

- **GIVEN** the modal is open
- **WHEN** the form is rendered
- **THEN** a "If you don't have account yet Sign up here" note is visible
- **AND** the "Sign up here" text is a bold link (#555, font-weight: 900)

### Requirement: Accessibility

The modal SHALL be accessible via keyboard and screen readers.

#### Scenario: Keyboard navigation

- **GIVEN** the modal is open
- **WHEN** the user navigates with keyboard
- **THEN** focus is trapped within the modal
- **AND** Escape key closes the modal
- **AND** all form fields are focusable

#### Scenario: Screen reader support

- **GIVEN** the modal is open
- **WHEN** a screen reader inspects the modal
- **THEN** the modal has appropriate ARIA attributes (role="dialog", aria-labelledby)
- **AND** form fields have associated labels

### Requirement: Responsive design

The modal SHALL be responsive and centered on all screen sizes.

#### Scenario: Mobile view

- **GIVEN** the viewport is 375px wide
- **WHEN** the modal is open
- **THEN** the modal is centered and readable
- **AND** form fields stack vertically at full width

#### Scenario: Desktop view

- **GIVEN** the viewport is 1200px wide
- **WHEN** the modal is open
- **THEN** the modal is centered with appropriate max-width

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/modalshift/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/modalshift/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Page loads with centered heading and launch button
- [ ] Modal opens with orange top border and gray background
- [ ] Login form has Username/Email and Password fields
- [ ] "Login" button is primary blue
- [ ] "Forgot password" link is visible
- [ ] "Sign up here" note is visible with bold link
- [ ] Modal closes on backdrop click
- [ ] Modal closes on close button click
- [ ] Input fields have subtle shadow, no visible border
- [ ] Modal has deep box-shadow
- [ ] Keyboard navigation works (Tab, Escape)
- [ ] Screen reader ARIA attributes present
- [ ] Responsive on mobile and desktop
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
