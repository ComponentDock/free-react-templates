# Template: Modalize (Modal / Login-Registration Form)

## Purpose

Modalize is a single-page login/registration MODAL FORM in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 05" free template (source:
https://colorlib.com/wp/template/modal-05/), built under a DIFFERENT name
(**Modalize**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4.3 modal template: a centered page with a
"Launch Modal" button that opens a centered white modal dialog containing a
"Create Your Account" registration form. The modal has social sign-in icons
(Twitter, Facebook, Instagram) as circular buttons, three form fields (Full
Name, Email Address, Password) with uppercase labels, a blue primary submit
button with rounded corners, and an "I'm already a member" link below the
form. The modal is vertically centered in the viewport with a subtle drop
shadow and a close (X) button in the top-right corner.

**WHAT MAKES MODALIZE DISTINCT (signature behaviors):**

1. **Full-page centered layout with launch button.** A white
   `.ftco-section` fills the viewport with a centered heading ("Modal 05")
   and a Bootstrap primary button ("Launch Modal 05") that triggers the
   modal via `data-toggle="modal" data-target="#exampleModalCenter"`. The
   recreation uses React state to toggle the modal open/closed.

2. **Centered modal dialog with shadow and no border.** `.modal-dialog` is
   `max-width: 450px`, vertically centered (`.modal-dialog-centered`).
   `.modal-content` has no border (`border: none`), white background
   (`#fff`), and a prominent box-shadow
   `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`. The header is empty (only
   the close button), and the body contains the full form.

3. **Social sign-in icons as circular buttons.** A `.ftco-footer-social`
   list renders three social links (Twitter, Facebook, Instagram) as
   40×40px circular buttons with `rgba(0, 0, 0, 0.05)` background, each
   containing a 20px Ionicons icon. These are horizontal centered above
   the form fields.

4. **Registration form with uppercase labels.** Three fields (Full Name,
   Email Address, Password) each with a `<label>` styled
   `text-transform: uppercase; font-size: 12px; color: rgba(0, 0, 0, 0.3)`.
   Standard Bootstrap form controls with placeholder text. A blue primary
   button ("Sign Up") with `rounded` class (border-radius 0.25rem) spans
   full width.

5. **"I'm already a member" link.** A footer-style link below the form
   styled `color: rgba(0, 0, 0, 0.3); text-decoration: underline` — a
   subtle muted call-to-action for existing users.

## Naming

The ColorLib source name "Modal 05" is FORBIDDEN as the app name (and
"modal" itself must not be reused). **Modalize** is the new, original name
— single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-09-06: zero hits for `modalize` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`).

## Design reference (replication findings)

- **Original:** ColorLib "Modal 05" (page title: "Modal 05"). Listed in
  TEMPLATES.md under **Bootstrap Modal Templates** (category header around
  line 805; the one row at line 806 — `wp/template/modal-05/`). Source
  slug: `modal-05`.
- **Live preview — REACHABLE (verified 2026-09-06 by direct fetch):** The
  naive `https://preview.colorlib.com/theme/modal-05/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/modal-05/`** (HTTP 200,
  HTML body). The page has `<title>Modal 05</title>`, loads Poppins font
  (weights 300–900) and two stylesheets: `css/ionicons.min.css` (icon
  font) + `css/style.css` (Bootstrap 4.3.1 + custom styles).
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-05.jpg`
  (1200×972px). Shows a white page with a centered "Modal 05" heading and a
  blue "Launch Modal 05" button; the modal is open in the screenshot showing
  a white card with social icons, three form fields, and a blue "Sign Up"
  button.

## Design tokens

| Token                | Value                                    | Notes                                                                            |
| -------------------- | ---------------------------------------- | -------------------------------------------------------------------------------- |
| `--color-page`       | `#fff`                                   | White page background (`.ftco-section { background: #fff }`)                     |
| `--color-brand`      | `#007bff`                                | Bootstrap primary blue — launch button bg, submit button bg, link hover color   |
| `--color-brand-hover`| `#0069d9`                                | Primary button hover state                                                       |
| `--color-text`       | `#212529`                                | Body text color (Bootstrap default)                                               |
| `--color-label`      | `rgba(0, 0, 0, 0.3)`                    | Uppercase form labels (12px, text-transform: uppercase)                          |
| `--color-social-bg`  | `rgba(0, 0, 0, 0.05)`                   | Social icon button background (circular)                                         |
| `--color-muted-link` | `rgba(0, 0, 0, 0.3)`                    | "I'm already a member" link color                                                |
| `--font-body`        | `'Poppins', sans-serif`                  | Google Fonts 300–900; loaded via @font-face in the original                      |
| `--modal-max-w`      | `450px`                                  | `.modal-dialog { max-width: 450px }`                                             |
| `--modal-shadow`     | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Box shadow on `.modal-content`                                                   |
| `--modal-radius`     | `0.25rem`                                | Bootstrap `.rounded` class on submit button                                      |
| `--modal-border`     | `none`                                   | `.modal-content { border: none }`                                                |
| `--close-btn`        | `40×40px`                                | Close button size (absolute top-right of modal header)                           |
| `--social-icon`      | `40×40px`, radius 50%, 20px icon         | Social buttons: circular, centered inline                                         |
| `--label-size`       | `12px`                                   | Uppercase form labels                                                            |

## Requirements

### Requirement: Page shell with launch button

The system SHALL render a white full-width page with a centered heading and a
primary button that opens the registration modal.

#### Scenario: Page renders centered content

- **GIVEN** the Modalize app is rendered on a desktop viewport
- **THEN** the page background SHALL be solid white (`#fff`)
- **AND** a heading reading "Modalize" (the NEW name) SHALL render centered
  horizontally
- **AND** a Bootstrap primary button reading "Launch Modal" SHALL render
  centered below the heading with background `#007bff`, white text, and
  `padding: 12px 16px`

#### Scenario: Button opens modal

- **GIVEN** the page is rendered
- **WHEN** the user clicks the "Launch Modal" button
- **THEN** the registration modal SHALL appear centered in the viewport
  with a semi-transparent overlay behind it
- **AND** focus SHALL be trapped inside the modal

#### Scenario: Responsive page

- **GIVEN** a viewport at or below 768px
- **THEN** the heading and button SHALL stack vertically with no horizontal
  overflow and reasonable padding

### Requirement: Modal dialog

The system SHALL render a centered white modal dialog with a shadow, close
button, and no border.

#### Scenario: Modal opens centered

- **GIVEN** the modal is triggered
- **THEN** the modal SHALL be vertically centered in the viewport
- **AND** the modal content SHALL have `max-width: 450px`, white background,
  `border: none`, and the shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** a close (×) button SHALL render in the top-right corner at 40×40px

#### Scenario: Close button dismisses modal

- **GIVEN** the modal is open
- **WHEN** the user clicks the close button
- **THEN** the modal SHALL close and the overlay SHALL disappear
- **AND** focus SHALL return to the launch button

#### Scenario: Overlay click closes modal

- **GIVEN** the modal is open
- **WHEN** the user clicks the dark overlay outside the modal content
- **THEN** the modal SHALL close

#### Scenario: Escape key closes modal

- **GIVEN** the modal is open
- **WHEN** the user presses the Escape key
- **THEN** the modal SHALL close

### Requirement: Social sign-in icons

The system SHALL render three circular social sign-in icon buttons above
the form.

#### Scenario: Social icons render

- **GIVEN** the modal is open
- **THEN** three social icon buttons SHALL render horizontally centered
  above the form fields
- **AND** each icon button SHALL be a 40×40px circle with
  `rgba(0, 0, 0, 0.05)` background
- **AND** the icons SHALL represent Twitter, Facebook, and Instagram
  (using lucide-react icons)
- **AND** each icon SHALL be approximately 20px in size, centered in the
  circle

#### Scenario: Social icons are interactive

- **GIVEN** the modal is open
- **WHEN** the user hovers over a social icon button
- **THEN** the button SHALL show a hover state (subtle background change)
- **AND** the button SHALL have `aria-label` with the platform name

### Requirement: Registration form

The system SHALL render a registration form with three labeled fields and a
submit button.

#### Scenario: Form fields render

- **GIVEN** the modal is open
- **THEN** a "Create Your Account" heading SHALL render centered in the
  modal body
- **AND** three form fields SHALL render in order: Full Name, Email
  Address, Password
- **AND** each field label SHALL be uppercase, 12px, color
  `rgba(0, 0, 0, 0.3)`
- **AND** each input SHALL have appropriate placeholder text matching the
  source (e.g. "John Doe", "johndoe@gmail.com", "Password")
- **AND** the password field SHALL be `type="password"`

#### Scenario: Submit button

- **GIVEN** the modal form is rendered
- **THEN** a full-width "Sign Up" button SHALL render below the password
  field with background `#007bff`, white text, and `border-radius: 0.25rem`
- **AND** clicking the button SHALL NOT navigate away (mock submit)

#### Scenario: Form is keyboard accessible

- **GIVEN** the modal is open
- **WHEN** the user tabs through the form
- **THEN** focus SHALL move through: social icons → Full Name input →
  Email input → Password input → Sign Up button → "I'm already a member"
  link → close button

### Requirement: "I'm already a member" link

The system SHALL render a muted link below the form for existing users.

#### Scenario: Member link renders

- **GIVEN** the modal form is rendered
- **THEN** a link reading "I'm already a member" SHALL render centered
  below the form
- **AND** the link SHALL be styled `color: rgba(0, 0, 0, 0.3)` with
  underline decoration
- **AND** clicking the link SHALL NOT navigate (mock action)

### Requirement: Footer attribution

The system SHALL render a footer with the mandatory Component Dock link.

#### Scenario: Footer renders

- **GIVEN** the page is rendered
- **THEN** a footer SHALL render at the bottom of the page
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` labeled "Component Dock"

## Verification checklist

- [ ] Page renders white background with centered heading and launch button
- [ ] Launch button opens centered modal with overlay
- [ ] Modal has correct shadow, max-width, and no border
- [ ] Close button (×) dismisses modal
- [ ] Overlay click dismisses modal
- [ ] Escape key dismisses modal
- [ ] Three social icons render as 40×40px circles above the form
- [ ] Form has "Create Your Account" heading
- [ ] Three fields render with uppercase 12px labels
- [ ] "Sign Up" button renders blue with rounded corners
- [ ] "I'm already a member" link renders muted with underline
- [ ] Footer links to Component Dock
- [ ] All interactive elements are keyboard accessible
- [ ] Focus is trapped within the modal when open
- [ ] Tests pass with 100% coverage
- [ ] No references to ColorLib anywhere in app code
- [ ] `public/CNAME` contains `modalize.free.componentdock.com`
- [ ] `homepage` in package.json is `https://modalize.free.componentdock.com`
