# Template: Postdrop (Modal / Email Confirmation)

## Purpose

Postdrop is a single-page email confirmation MODAL in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 08" free template (source:
https://colorlib.com/wp/template/modal-08/), built under a DIFFERENT name
(**Postdrop**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4.3 modal template: a centered page with a
"Modal 08" heading and a "Launch Modal 08" button that opens a centered
modal dialog. The modal has a gradient header (purple-to-orange) with a
decorative diagonal skew effect, a circular email icon (200x200px),
"You've Got Mail!" heading, "We sent confirmation link to:" subheading,
and a bold email address display. The close button (×) is a white 40×40px
button in the top-right corner of the gradient header. The modal is
vertically centered with a subtle drop shadow and no border.

**WHAT MAKES POSTDROP DISTINCT (signature behaviors):**

1. **Full-page centered layout with launch button.** A white
   `.ftco-section` fills the viewport with a centered heading ("Postdrop")
   and a pill-shaped primary button ("Launch Postdrop") that triggers the
   modal. The recreation uses React state to toggle the modal open/closed.

2. **Centered modal dialog with gradient header and skew effect.** The
   modal header is 230px tall with a `linear-gradient(45deg, #915eff 0%,
   #ff8e59 100%)` (purple to orange). Two white pseudo-elements
   (`.ftco-degree-bg::before` and `::after`) create diagonal skew cuts at
   the bottom of the header, giving a "v-shaped" entrance into the white
   modal body.

3. **Circular email icon with overlapping body.** A 200×200px circular
   `.icon` div overlaps the gradient header (body has `margin-top: -180px`).
   The icon contains an SVG email illustration. The body sits below the
   gradient with the confirmation message.

4. **Email confirmation content.** The modal body shows:
   - "You've Got Mail!" heading (bold, white color from the gradient, or
     dark depending on overlap area)
   - "We sent confirmation link to:" subheading (18px)
   - Bold email address "johndoe@gmail.com" (22px, weight 800, the `@`
     symbol in light weight 300)

5. **Pill-shaped primary button.** The launch button and all primary buttons
   use `border-radius: 40px` (pill shape), `background: #fb8691` (salmon
   pink), white text, and on hover the background becomes transparent with
   the pink color as text.

## Naming

The ColorLib source name "Modal 08" is FORBIDDEN as the app name. **Postdrop**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-09-06: zero hits for `postdrop` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`).

## Design reference (replication findings)

- **Original:** ColorLib "Modal 08" (page title: "Modal 08"). Listed in
  TEMPLATES.md under **Bootstrap Modal Templates** (category header around
  line 805; line 809 — `wp/template/modal-08/`). Source slug: `modal-08`.
- **Live preview — REACHABLE (verified 2026-09-06 by direct fetch):** The
  naive `https://preview.colorlib.com/theme/modal-08/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/modal-08/`** (HTTP 200,
  HTML body). The page has `<title>Modal 08</title>`, loads Poppins font
  (weights 300–900) and two stylesheets: `css/ionicons.min.css` (icon
  font) + `css/style.css` (Bootstrap 4.3.1 + custom ftco styles).
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-08.jpg`
  (1200×972px). Shows a white page with a centered "Modal 08" heading and
  a salmon-pink pill-shaped "Launch Modal 08" button; the modal is open
  in the screenshot showing the gradient header with the email confirmation
  content.

## Design tokens

| Token                  | Value                                    | Notes                                                                            |
| ---------------------- | ---------------------------------------- | -------------------------------------------------------------------------------- |
| `--color-page`         | `#fff`                                   | White page background (`.ftco-section { background: #fff }`)                     |
| `--color-brand`        | `#fb8691`                                | Salmon pink — primary button bg, link color, form focus border                   |
| `--color-brand-hover`  | `transparent` (text becomes `#fb8691`)   | Primary button hover: bg transparent, text pink                                  |
| `--color-gradient-start`| `#915eff`                               | Purple — gradient start (modal header)                                           |
| `--color-gradient-end` | `#ff8e59`                                | Orange — gradient end (modal header)                                             |
| `--color-text`         | `#212529`                                | Body text color (Bootstrap default)                                               |
| `--color-text-dark`    | `#000`                                   | Form control text color                                                          |
| `--color-close-btn`    | `#fff`                                   | Close button color (white on gradient)                                           |
| `--font-body`          | `'Poppins', Arial, sans-serif`           | Google Fonts 300–900; loaded via @font-face in the original                      |
| `--modal-max-w`        | `600px`                                  | `.modal-dialog { max-width: 600px }`                                             |
| `--modal-shadow`       | `0px 10px 34px -15px rgba(0,0,0,0.24)`  | Box shadow on `.modal-content`                                                   |
| `--modal-radius`       | `0.3rem`                                 | Bootstrap default modal border-radius                                            |
| `--modal-border`       | `none`                                   | `.modal-content { border: none }`                                                |
| `--modal-header-h`     | `230px`                                  | Gradient header height                                                           |
| `--skew-h`             | `60px`                                   | Height of the diagonal skew pseudo-elements                                      |
| `--skew-angle`         | `10deg` / `-10deg`                       | Left skew (10deg) and right skew (-10deg) for the decorative cuts                |
| `--icon-size`          | `200×200px`, radius 50%                  | Circular email icon overlapping the header                                       |
| `--close-btn`          | `40×40px`                                | Close button size (absolute top-right of modal header)                           |
| `--btn-radius`         | `40px`                                   | Pill-shaped buttons                                                              |
| `--btn-font`           | `15px`                                   | Button font size                                                                 |
| `--form-border-focus`  | `#fb8691`                                | Form control focus border color                                                  |

## Requirements

### Requirement: Page shell with launch button
The system SHALL render a white full-width page with a centered heading and a
pill-shaped primary button that opens the email confirmation modal.

#### Scenario: Page renders centered content
- **GIVEN** the Postdrop app is rendered on a desktop viewport
- **THEN** the page background SHALL be solid white (`#fff`)
- **AND** a heading reading "Postdrop" SHALL render centered horizontally
- **AND** a pill-shaped primary button reading "Launch Postdrop" SHALL render
  centered below the heading with background `#fb8691`, white text,
  `border-radius: 40px`, and `padding: 12px 16px`

#### Scenario: Button opens modal
- **GIVEN** the page is rendered
- **WHEN** the user clicks the "Launch Postdrop" button
- **THEN** the email confirmation modal SHALL appear centered in the viewport
  with a semi-transparent overlay behind it
- **AND** focus SHALL be trapped inside the modal

#### Scenario: Responsive page
- **GIVEN** a viewport at or below 768px
- **THEN** the heading and button SHALL stack vertically with no horizontal
  overflow and reasonable padding

### Requirement: Modal dialog with gradient header
The system SHALL render a centered white modal dialog with a purple-to-orange
gradient header, decorative diagonal skew cuts, and a drop shadow.

#### Scenario: Modal opens centered
- **GIVEN** the modal is triggered
- **THEN** the modal SHALL be vertically centered in the viewport
- **AND** the modal content SHALL have `max-width: 600px`, white background,
  `border: none`, and the shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`
- **AND** the modal header SHALL be 230px tall with a
  `linear-gradient(45deg, #915eff 0%, #ff8e59 100%)` background

#### Scenario: Decorative skew cuts
- **GIVEN** the modal is open
- **THEN** the gradient header SHALL have two white pseudo-elements
  creating diagonal skew cuts at the bottom:
  - Left pseudo-element: `width: 50%`, `height: 60px`, `skewY(10deg)`,
    `background-color: #fff`, positioned at bottom-left
  - Right pseudo-element: `width: 50%`, `height: 60px`,
    `skewY(-10deg)`, `background-color: #fff`, positioned at bottom-right
- **AND** the pseudo-elements SHALL overlap the gradient header to create
  the decorative V-shaped transition into the modal body

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

### Requirement: Circular email icon
The system SHALL render a 200×200px circular email icon that overlaps the
gradient header.

#### Scenario: Icon renders
- **GIVEN** the modal is open
- **THEN** a 200×200px circular div SHALL render centered horizontally
- **AND** the circle SHALL overlap the gradient header (negative top margin
  on the modal body, approximately -180px)
- **AND** the circle SHALL contain an SVG email illustration icon
- **AND** the icon SHALL be approximately 30px in size, centered in the circle

### Requirement: Email confirmation content
The system SHALL render an email confirmation message in the modal body.

#### Scenario: Confirmation message renders
- **GIVEN** the modal is open
- **THEN** a "You've Got Mail!" heading SHALL render centered in the modal
  body with bold weight (700)
- **AND** a "We sent confirmation link to:" subheading SHALL render centered
  below with font-size 18px
- **AND** a bold email address "johndoe@gmail.com" SHALL render centered
  below the subheading with font-size 22px, font-weight 800
- **AND** the `@` symbol in the email address SHALL render in lighter weight
  (300)

### Requirement: Pill-shaped primary button
The system SHALL use pill-shaped buttons with the salmon pink brand color.

#### Scenario: Button styling
- **GIVEN** the page or modal is rendered
- **THEN** all primary buttons SHALL have `border-radius: 40px` (pill shape),
  `background: #fb8691`, `border: 1px solid #fb8691`, `color: #fff`,
  and `font-size: 15px`

#### Scenario: Button hover state
- **GIVEN** a primary button is rendered
- **WHEN** the user hovers over the button
- **THEN** the button background SHALL become transparent
- **AND** the button text and border SHALL become `#fb8691`

### Requirement: Footer with Component Dock link
The system SHALL render a footer with the mandatory Component Dock link.

#### Scenario: Footer renders
- **GIVEN** the page is rendered
- **THEN** a footer SHALL render at the bottom of the page
- **AND** the footer SHALL contain a link to
  `https://www.componentdock.com/` labeled "Component Dock"

## Verification checklist

- [ ] Page renders white background with centered heading and pill-shaped launch button
- [ ] Launch button opens centered modal with overlay
- [ ] Modal has gradient header (purple-to-orange, 230px tall)
- [ ] Decorative diagonal skew cuts render at header bottom
- [ ] Modal has correct shadow, max-width, and no border
- [ ] Close button (×) dismisses modal
- [ ] Overlay click dismisses modal
- [ ] Escape key dismisses modal
- [ ] 200×200px circular email icon overlaps the gradient header
- [ ] "You've Got Mail!" heading renders bold and centered
- [ ] "We sent confirmation link to:" subheading renders at 18px
- [ ] Bold email address renders at 22px with @ in light weight
- [ ] Pill-shaped buttons use #fb8691 brand color
- [ ] Button hover changes to transparent background with pink text
- [ ] Footer links to Component Dock
- [ ] All interactive elements are keyboard accessible
- [ ] Focus is trapped within the modal when open
- [ ] Tests pass with 100% coverage
- [ ] No references to ColorLib anywhere in app code
- [ ] `public/CNAME` contains `postdrop.free.componentdock.com`
- [ ] `homepage` in package.json is `https://postdrop.free.componentdock.com`
