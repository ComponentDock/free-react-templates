# Template: Midnightsign (Modal / Sign In & Sign Up)

## Purpose

Midnightsign is a single-page modal login/signup template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 09" free template (source:
https://colorlib.com/wp/template/modal-09/), built under a DIFFERENT name
(**Midnightsign**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4.3 modal template: a centered page with a
"Modal 09" heading and a "Launch Modal 09" button that opens a centered
modal dialog. The modal has a two-column layout: a background image panel
on the left, and a dark charcoal panel (#2b2b28) on the right with tabbed
Sign In / Sign Up forms. The brand accent color is amber/golden (#e3b04b).
The close button is a 40x40px dark semi-transparent square in the top-right
corner. The modal is vertically centered with a subtle drop shadow and no
border. The font is Roboto (weights 300–700).

**WHAT MAKES MIDNIGHTSIGN DISTINCT (signature behaviors):**

1. **Full-page centered layout with launch button.** A white `.ftco-section`
   fills the viewport with a centered heading ("Midnightsign") and an
   amber-colored button ("Launch Midnightsign") that triggers the modal.
   The recreation uses React state to toggle the modal open/closed.

2. **Two-column modal with background image and dark form panel.** The modal
   (max-width 900px) splits into two equal halves:
   - Left: a background image panel (`.modal-body.img`) with
     `background-image: url(bg-1.jpg)` and a min-height of ~400px (300px on
     mobile)
   - Right: a dark charcoal panel (#2b2b28) containing the tabbed sign-in/sign-up forms

3. **Tabbed Sign In / Sign Up forms.** The right panel has a tab bar at the
   top with two tabs ("Sign In" and "Sign Up"). Active tab text is amber
   (#e3b04b); inactive tab text is nearly invisible
   (rgba(255,255,255,0.1)). The tab content switches between:
   - **Sign In form:** Username + Password inputs, amber "Sign In" button,
     "Remember Me" checkbox + "Forgot Password" link, "Not a member? Sign Up"
     link
   - **Sign Up form:** Full Name + Email Address + Password inputs, amber
     "Sign Up" button, "I agree all statements in terms of service" checkbox,
     "I'm already a member! Sign In" link

4. **Amber/golden accent color.** The brand color is `#e3b04b` — used on
   primary buttons, active tab text, and checkbox checked state. Buttons use
   `border-radius: 4px`, height 52px. On hover, the button background becomes
   transparent and text turns amber.

5. **Dark modal form styling.** Form inputs inside the modal use transparent
   backgrounds, white text (rgba(255,255,255,0.7)), bottom-border-only
   styling (1px solid rgba(255,255,255,0.1)), and uppercase labels
   (12px, letter-spacing: 1px). The checkbox indicator is 16x16px with
   radius 3px and a 1px white border.

## Naming

The ColorLib source name "Modal 09" is FORBIDDEN as the app name. **Midnightsign**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-09-06: zero hits for `midnightsign` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`).

## Design reference (replication findings)

- **Original:** ColorLib "Modal 09" (page title: "Modal 09"). Listed in
  TEMPLATES.md under **Bootstrap Modal Templates** (category header around
  line 805; line 810 — `wp/template/modal-09/`). Source slug: `modal-09`.
- **Live preview — REACHABLE (verified 2026-09-06 by direct fetch):** The
  naive `https://preview.colorlib.com/theme/modal-09/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/modal-09/`** (HTTP 200,
  HTML body). The page has `<title>Modal 09</title>`, loads Roboto font
  (weights 300, 400, 700) via @font-face and three stylesheets:
  `css/ionicons.min.css` (icon font), `css/flaticon.css`, and `css/style.css`
  (Bootstrap 4.3.1 + custom ftco styles).
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-09.jpg`
  (1200x972px). Shows a white page with a centered "Modal 09" heading and an
  amber/golden "Launch Modal 09" button; the modal is open in the screenshot
  showing the two-column layout with background image on the left and dark
  sign-in/sign-up form on the right.

## Design tokens

| Token                    | Value                                    | Notes                                                                            |
| ------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------- |
| `--color-page`           | `#fff`                                   | White page background (`.ftco-section { background: #fff }`)                     |
| `--color-brand`          | `#e3b04b`                                | Amber/golden — primary button bg, active tab text, checkbox checked state        |
| `--color-brand-hover`    | `transparent` (text becomes `#e3b04b`)   | Primary button hover: bg transparent, text amber                                 |
| `--color-dark-panel`     | `#2b2b28`                                | Dark charcoal background on right panel (`.modal-body.color-2`)                  |
| `--color-form-text`      | `rgba(255, 255, 255, 0.7)`              | Form input text color in dark panel                                              |
| `--color-placeholder`    | `rgba(255, 255, 255, 0.2)`              | Placeholder text color in dark panel                                             |
| `--color-tab-inactive`   | `rgba(255, 255, 255, 0.1)`              | Inactive tab text color                                                          |
| `--color-tab-active`     | `#e3b04b`                                | Active tab text color (matches brand)                                            |
| `--color-label`          | `rgba(255, 255, 255, 0.7)`              | Form label text (uppercase, 12px, letter-spacing: 1px)                           |
| `--color-checkbox-border`| `rgba(255, 255, 255, 0.4)`              | Checkbox unchecked border color                                                  |
| `--color-checkbox-desc`  | `rgba(255, 255, 255, 0.3)`              | Checkbox description text color                                                  |
| `--color-close-bg`       | `rgba(0, 0, 0, 0.1)`                    | Close button background                                                          |
| `--color-close-text`     | `#fff`                                   | Close button icon color                                                          |
| `--font-body`            | `'Roboto', system-ui, sans-serif`        | Google Fonts 300–700; loaded via @font-face in the original                      |
| `--modal-max-w`          | `900px`                                  | `.modal-dialog { max-width: 900px }`                                             |
| `--modal-shadow`         | `0px 10px 34px -15px rgba(0,0,0,0.24)`  | Box shadow on `.modal-content`                                                   |
| `--modal-radius`         | `0`                                      | `.modal-content { border-radius: 0 }` — square corners                           |
| `--modal-border`         | `none`                                   | `.modal-content { border: none }`                                                |
| `--close-btn-size`       | `40x40px`                                | Close button dimensions (absolute top-right of modal header)                     |
| `--btn-radius`           | `4px`                                    | Rounded (not pill) buttons                                                       |
| `--btn-height`           | `52px`                                   | Button height                                                                    |
| `--btn-font`             | `15px`                                   | Button font size                                                                 |
| `--form-control-h`       | `30px` (in modal)                        | Height of form inputs inside modal                                               |
| `--form-control-border`  | `border-bottom: 1px solid rgba(255,255,255,0.1)` | Bottom-border-only styling in modal                              |
| `--checkbox-size`        | `16x16px`, radius 3px                    | Custom checkbox indicator                                                        |
| `--label-style`          | `uppercase, 12px, letter-spacing: 1px`   | Form labels                                                                      |

## Requirements

### Requirement: Page shell with launch button
The system SHALL render a white full-width page with a centered heading and an
amber-colored primary button that opens the sign-in/sign-up modal.

#### Scenario: Page renders centered content
- **GIVEN** the Midnightsign app is rendered on a desktop viewport
- **THEN** the page background SHALL be solid white (`#fff`)
- **AND** a heading reading "Midnightsign" SHALL render centered horizontally
- **AND** an amber-colored primary button reading "Launch Midnightsign" SHALL render
  centered below the heading with background `#e3b04b`, white text,
  `border-radius: 4px`, `height: 52px`, and `font-size: 15px`

#### Scenario: Button opens modal
- **GIVEN** the page is rendered
- **WHEN** the user clicks the "Launch Midnightsign" button
- **THEN** the sign-in/sign-up modal SHALL appear centered in the viewport
  with a semi-transparent overlay behind it
- **AND** focus SHALL be trapped inside the modal

#### Scenario: Responsive page
- **GIVEN** a viewport at or below 768px
- **THEN** the heading and button SHALL stack vertically with no horizontal
  overflow and reasonable padding

### Requirement: Two-column modal layout
The system SHALL render a centered modal dialog (max-width 900px) with a
two-column layout: a background image panel on the left and a dark sign-in/sign-up
form panel on the right.

#### Scenario: Modal opens centered with two columns
- **GIVEN** the modal is triggered
- **THEN** the modal SHALL be vertically centered in the viewport
- **AND** the modal content SHALL have `max-width: 900px`, no border,
  `border-radius: 0`, and the shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** the modal SHALL display two equal-width columns side by side

#### Scenario: Left panel shows background image
- **GIVEN** the modal is open
- **THEN** the left column SHALL display a background image (placeholder via
  `https://picsum.photos/seed/midnightsign-1/600/400`)
- **AND** the left column SHALL have a minimum height of approximately 400px
- **AND** on mobile (≤768px), the left panel height SHALL shrink to 300px

#### Scenario: Right panel shows dark form area
- **GIVEN** the modal is open
- **THEN** the right column SHALL have a dark charcoal background (`#2b2b28`)
- **AND** the right column SHALL contain tabbed sign-in/sign-up forms

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

### Requirement: Tabbed Sign In / Sign Up navigation
The system SHALL render two tabs ("Sign In" and "Sign Up") that switch between
the sign-in and sign-up forms.

#### Scenario: Tabs render with correct styling
- **GIVEN** the modal is open
- **THEN** two tab links ("Sign In" and "Sign Up") SHALL render at the top of the
  right panel
- **AND** the active tab text SHALL be amber (`#e3b04b`)
- **AND** the inactive tab text SHALL be nearly invisible (`rgba(255,255,255,0.1)`)
- **AND** tabs SHALL have no visible border

#### Scenario: Clicking Sign Up tab switches content
- **GIVEN** the modal is open on the Sign In tab
- **WHEN** the user clicks the "Sign Up" tab
- **THEN** the Sign In form SHALL hide and the Sign Up form SHALL appear
- **AND** the "Sign Up" tab SHALL become active (amber text)

#### Scenario: Clicking Sign In tab switches content
- **GIVEN** the modal is open on the Sign Up tab
- **WHEN** the user clicks the "Sign In" tab
- **THEN** the Sign Up form SHALL hide and the Sign In form SHALL appear
- **AND** the "Sign In" tab SHALL become active (amber text)

### Requirement: Sign In form
The system SHALL render a sign-in form with username and password fields,
a submit button, remember-me checkbox, and forgot password link.

#### Scenario: Sign In form renders all fields
- **GIVEN** the modal is open on the Sign In tab
- **THEN** a "Sign In" heading (h3) SHALL render
- **AND** a Username input SHALL render with an uppercase label ("USERNAME",
  12px, letter-spacing: 1px) and placeholder "Username"
- **AND** a Password input SHALL render with an uppercase label ("PASSWORD")
  and placeholder "Password"
- **AND** an amber "Sign In" button SHALL render with `border-radius: 4px`
  and `height: 52px`

#### Scenario: Remember Me and Forgot Password
- **GIVEN** the Sign In form is visible
- **THEN** a "Remember Me" checkbox SHALL render on the left side
- **AND** a "Forgot Password" link SHALL render on the right side
- **AND** the checkbox indicator SHALL be 16x16px with radius 3px and
  `border: 1px solid rgba(255,255,255,0.4)`
- **AND** checking the checkbox SHALL change its background to amber (#e3b04b)

#### Scenario: Not a member link
- **GIVEN** the Sign In form is visible
- **THEN** a "Not a member? Sign Up" text SHALL render below the form
- **AND** clicking "Sign Up" SHALL switch to the Sign Up tab

### Requirement: Sign Up form
The system SHALL render a sign-up form with name, email, and password fields,
a terms-of-service checkbox, and a submit button.

#### Scenario: Sign Up form renders all fields
- **GIVEN** the modal is open on the Sign Up tab
- **THEN** a "Sign Up" heading (h3) SHALL render
- **AND** a Full Name input SHALL render with uppercase label ("FULL NAME")
  and placeholder "John Doe"
- **AND** an Email Address input SHALL render with uppercase label ("EMAIL ADDRESS")
  and placeholder "johndoe@gmail.com"
- **AND** a Password input SHALL render with uppercase label ("PASSWORD")
  and placeholder "Password"
- **AND** an amber "Sign Up" button SHALL render with `border-radius: 4px`
  and `height: 52px`

#### Scenario: Terms checkbox
- **GIVEN** the Sign Up form is visible
- **THEN** a checkbox with text "I agree all statements in terms of service"
  SHALL render
- **AND** the "terms of service" text SHALL be a link

#### Scenario: Already a member link
- **GIVEN** the Sign Up form is visible
- **THEN** an "I'm already a member! Sign In" text SHALL render below the form
- **AND** clicking "Sign In" SHALL switch to the Sign In tab

### Requirement: Amber accent buttons
The system SHALL use amber/golden buttons with square-rounded corners.

#### Scenario: Button styling
- **GIVEN** a primary button is rendered
- **THEN** the button SHALL have `background: #e3b04b`, `border: 1px solid #e3b04b`,
  `color: #fff`, `border-radius: 4px`, `height: 52px`, and `font-size: 15px`

#### Scenario: Button hover state
- **GIVEN** a primary button is rendered
- **WHEN** the user hovers over the button
- **THEN** the button background SHALL become transparent
- **AND** the button text and border SHALL remain `#e3b04b`

### Requirement: Footer with Component Dock link
The system SHALL render a footer with the mandatory Component Dock link.

#### Scenario: Footer renders
- **GIVEN** the page is rendered
- **THEN** a footer SHALL render at the bottom of the page
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` labeled "Component Dock"

## Verification checklist

- [ ] Page renders white background with centered heading and amber launch button
- [ ] Launch button opens centered modal with overlay
- [ ] Modal has two-column layout (image left, dark form right)
- [ ] Left panel shows background image with correct min-height
- [ ] Right panel has dark charcoal background (#2b2b28)
- [ ] Tab bar renders with Sign In / Sign Up tabs
- [ ] Active tab text is amber (#e3b04b)
- [ ] Inactive tab text is nearly invisible (rgba(255,255,255,0.1))
- [ ] Sign In form has Username + Password inputs + amber button
- [ ] Uppercase labels with letter-spacing render correctly
- [ ] Remember Me checkbox works with amber checked state
- [ ] Forgot Password link renders
- [ ] "Not a member? Sign Up" switches to Sign Up tab
- [ ] Sign Up form has Full Name + Email + Password inputs + amber button
- [ ] Terms checkbox renders with link
- [ ] "I'm already a member! Sign In" switches to Sign In tab
- [ ] Close button (×) dismisses modal (40x40px, dark semi-transparent bg)
- [ ] Overlay click dismisses modal
- [ ] Escape key dismisses modal
- [ ] Button hover changes to transparent background with amber text
- [ ] Modal has correct shadow and no border
- [ ] Footer links to Component Dock
- [ ] All interactive elements are keyboard accessible
- [ ] Focus is trapped within the modal when open
- [ ] Tests pass with 100% coverage
- [ ] No references to ColorLib anywhere in app code
- [ ] `public/CNAME` contains `midnightsign.free.componentdock.com`
- [ ] `homepage` in package.json is `https://midnightsign.free.componentdock.com`
