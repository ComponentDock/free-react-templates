# Template: Shadowform (Modal / Dark Login-Signup Dialog)

## Purpose

Shadowform is a single-page dark-themed modal LOGIN/SIGNUP DIALOG in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 09" free template (source:
https://colorlib.com/wp/template/modal-09/), built under a DIFFERENT name
(**Shadowform**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4.3 modal template: a centered page with a
"Launch Modal 09" button that opens a wide (900px) modal dialog with a
two-column split — left side is a background image panel, right side is a
dark-themed tabbed auth form (Sign In / Sign Up). The modal uses a gold
accent color (`#e3b04b`) throughout, with uppercase form labels, transparent
form inputs with bottom borders, and custom checkbox indicators. The overall
aesthetic is dark and premium — near-black modal body (`#2b2b28`) with gold
highlights on a white page backdrop.

**WHAT MAKES SHADOWFORM DISTINCT (signature behaviors):**

1. **Full-page centered layout with launch button.** A white
   `.ftco-section` fills the viewport with a centered heading ("Modal 09")
   and a gold primary button ("Launch Modal 09") that triggers the modal via
   `data-toggle="modal"`. The recreation uses React state to toggle the modal
   open/closed.

2. **Wide two-column modal dialog.** `.modal-dialog` is `max-width: 900px`,
   vertically centered (`.modal-dialog-centered`). `.modal-content` has no
   border (`border: none`), no border-radius, and a prominent box-shadow
   `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`. The header contains only a
   close button. The body is split into two equal columns via `.row no-gutters`
   with `.col-md-6` each.

3. **Left panel: background image.** The left column is a full-height panel
   with `background-image: url(images/bg-1.jpg)` (cover, center). In the
   recreation, use a `picsum.photos` placeholder.

4. **Right panel: dark tabbed auth form.** The right column has background
   `#2b2b28` (`.color-2`) and contains a tabbed interface with two tabs:
   "Sign In" and "Sign Up". The active tab text is gold (`#e3b04b`); inactive
   tabs are `rgba(255, 255, 255, 0.1)`.

5. **Sign In form:** Username + Password fields with uppercase labels
   (`text-transform: uppercase; font-size: 12px; letter-spacing: 1px`),
   transparent inputs with bottom-border only (`border-bottom: 1px solid
   rgba(255,255,255,0.1)`), gold "Sign In" submit button, "Remember Me"
   custom checkbox, "Forgot Password" link, and "Not a member? Sign Up" link.

6. **Sign Up form:** Full Name + Email Address + Password fields with same
   uppercase label treatment, "I agree all statements in terms of service"
   checkbox, gold "Sign Up" submit button, and "I'm already a member! Sign In"
   link.

7. **Custom checkbox indicators.** The `.fill-checkbox` custom checkbox uses
   `#e3b04b` as its accent color, with a 16x16px indicator, 3px border-radius,
   and a white checkmark SVG when checked.

8. **Close button.** A 40x40px absolute-positioned button in the top-right
   corner of the modal with `rgba(0,0,0,0.1)` background and a white
   ionicons close icon.

## Naming

The ColorLib source name "Modal 09" is FORBIDDEN as the app name (and
"modal" itself must not be reused). **Shadowform** is the new, original name
— single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-09-06: zero hits for `shadowform` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`).

## Design reference (replication findings)

- **Original:** ColorLib "Modal 09" (page title: "Modal 09"). Listed in
  TEMPLATES.md under **Bootstrap Modal Templates** (category header around
  line 805; the one row at line 810 — `wp/template/modal-09/`). Source
  slug: `modal-09`.
- **Live preview — REACHABLE (verified 2026-09-06 by direct fetch):** The
  naive `https://preview.colorlib.com/theme/modal-09/` returns 404; the
  REAL preview is the bootstrap path
  **`https://preview.colorlib.com/theme/bootstrap/modal-09/`** (HTTP 200,
  HTML body). The page has `<title>Modal 09</title>`, loads Roboto font
  (weights 300, 400, 700) and two stylesheets: `css/ionicons.min.css` +
  `css/flaticon.css` + `css/style.css` (Bootstrap 4.3.1 + custom styles).
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/modal-09.jpg`
  (1200×972px). Shows a gray backdrop (Bootstrap modal overlay at 50% opacity
  over a white page) with a centered dark modal dialog. The modal is split
  into two columns: left is a background image panel, right is a dark form
  panel with tabbed Sign In / Sign Up forms and gold accent buttons.
- **CSS token extraction (from `css/style.css`):** Full custom tokens
  extracted — see Design tokens table below. The gold accent (`#e3b04b`)
  is the dominant brand color used for buttons, links, active tabs, and
  checkbox indicators.

## Design tokens

| Token                | Value                                    | Notes                                                                            |
| -------------------- | ---------------------------------------- | -------------------------------------------------------------------------------- |
| `--color-page`       | `#fff`                                   | White page background (`.ftco-section { background: #fff }`)                     |
| `--color-brand`      | `#e3b04b`                                | Gold/amber accent — buttons bg, links, active tab text, checkbox accent          |
| `--color-brand-hover`| transparent (border stays `#e3b04b`)     | Button hover: transparent bg, gold border + text                                 |
| `--color-modal-bg`   | `#2b2b28`                                | Dark modal body background (`.modal-body.color-2`)                               |
| `--color-text-modal` | `rgba(255, 255, 255, 0.8)`              | Modal body text color                                                            |
| `--color-text-input` | `rgba(255, 255, 255, 0.7)`              | Form input text color                                                            |
| `--color-placeholder`| `rgba(255, 255, 255, 0.2)`              | Form input placeholder color                                                     |
| `--color-label`      | uppercase, 12px, letter-spacing 1px      | Form labels — white, uppercase, small                                            |
| `--color-tab-inactive`| `rgba(255, 255, 255, 0.1)`             | Inactive tab link text                                                           |
| `--color-tab-active` | `#e3b04b`                                | Active tab link text                                                             |
| `--color-close-bg`   | `rgba(0, 0, 0, 0.1)`                    | Close button background                                                          |
| `--color-close-text` | `#fff`                                   | Close button icon color                                                          |
| `--color-checkbox`   | `#e3b04b`                                | Custom checkbox accent (`.fill-checkbox { --color: #e3b04b }`)                   |
| `--color-checkbox-desc`| `rgba(255, 255, 255, 0.3)`             | Checkbox label text                                                              |
| `--color-input-border`| `rgba(255, 255, 255, 0.1)`             | Bottom border on form inputs                                                     |
| `--font-body`        | `'Roboto', Arial, sans-serif`           | Google Fonts 300/400/700                                                         |
| `--modal-max-w`      | `900px`                                  | `.modal-dialog { max-width: 900px }`                                             |
| `--modal-shadow`     | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Box shadow on `.modal-content`                                                   |
| `--modal-radius`     | `0`                                      | `.modal-content { border-radius: 0 }`                                            |
| `--modal-border`     | `none`                                   | `.modal-content { border: none }`                                                |
| `--btn-radius`       | `4px`                                    | `.btn { border-radius: 4px }`                                                    |
| `--btn-height`       | `52px`                                   | Submit button height                                                             |
| `--btn-font-size`    | `15px`                                   | Button font size                                                                 |
| `--input-height`     | `30px`                                   | Modal form input height                                                          |
| `--close-btn-size`   | `40×40px`                                | Close button size (absolute top-right of modal header)                           |
| `--checkbox-size`    | `16×16px`, radius 3px                    | Custom checkbox indicator                                                        |

## Requirements

### Requirement: Page shell with launch button

The system SHALL render a white full-width page with a centered heading and a
gold primary button that opens the authentication modal.

#### Scenario: Page renders centered content

- **GIVEN** the Shadowform app is rendered on a desktop viewport
- **THEN** the page background SHALL be solid white (`#fff`)
- **AND** a heading reading "Shadowform" (the NEW name) SHALL render centered
  horizontally
- **AND** a primary button reading "Launch Modal" SHALL render centered below
  the heading with background `#e3b04b`, white text, `border-radius: 4px`,
  and `padding: 12px 16px`

#### Scenario: Button opens modal

- **GIVEN** the page is rendered
- **WHEN** the user clicks the "Launch Modal" button
- **THEN** a dark modal dialog SHALL appear centered over a semi-transparent
  backdrop
- **AND** the modal SHALL be 900px max-width with no border and no border-radius
- **AND** the modal SHALL have a box-shadow of `0px 10px 34px -15px rgba(0,0,0,0.24)`

### Requirement: Two-column modal layout

The system SHALL render the modal body as two equal columns: a left image
panel and a right dark form panel.

#### Scenario: Modal shows two-column split

- **GIVEN** the modal is open
- **THEN** the left column SHALL occupy 50% width and display a background
  image (placeholder from `picsum.photos`)
- **AND** the right column SHALL occupy 50% width with background `#2b2b28`
- **AND** the columns SHALL be side-by-side on desktop (stacked on mobile)

#### Scenario: Close button

- **GIVEN** the modal is open
- **THEN** a close button SHALL render in the top-right corner of the modal
- **AND** the close button SHALL be 40×40px with `rgba(0,0,0,0.1)` background
  and a white close icon
- **WHEN** the user clicks the close button
- **THEN** the modal SHALL close

### Requirement: Tabbed authentication form

The system SHALL render a tabbed interface with "Sign In" and "Sign Up" tabs
in the right column.

#### Scenario: Tab switching

- **GIVEN** the modal is open
- **THEN** two tab links SHALL render: "Sign In" and "Sign Up"
- **AND** the active tab text SHALL be gold (`#e3b04b`)
- **AND** inactive tab text SHALL be `rgba(255, 255, 255, 0.1)`
- **WHEN** the user clicks "Sign Up"
- **THEN** the Sign Up form SHALL display and the Sign In form SHALL hide
- **AND** the "Sign Up" tab text SHALL turn gold

### Requirement: Sign In form

The system SHALL render a sign-in form with username, password, submit
button, remember-me checkbox, and auxiliary links.

#### Scenario: Sign In form fields

- **GIVEN** the Sign In tab is active
- **THEN** a "Sign In" heading SHALL render in the form panel
- **AND** a Username field SHALL render with an uppercase label ("USERNAME",
  `font-size: 12px`, `letter-spacing: 1px`)
- **AND** a Password field SHALL render with an uppercase label ("PASSWORD")
- **AND** form inputs SHALL have transparent background, no border except a
  bottom border (`1px solid rgba(255,255,255,0.1)`), and text color
  `rgba(255,255,255,0.7)`
- **AND** placeholder text SHALL be `rgba(255,255,255,0.2)`

#### Scenario: Sign In submit button

- **GIVEN** the Sign In tab is active
- **THEN** a "Sign In" submit button SHALL render spanning the full form width
- **AND** the button SHALL have background `#e3b04b`, white text,
  `border-radius: 4px`, and height `52px`
- **WHEN** the user hovers the submit button
- **THEN** the background SHALL become transparent and the text/border SHALL
  turn gold

#### Scenario: Remember Me and Forgot Password

- **GIVEN** the Sign In tab is active
- **THEN** a "Remember Me" custom checkbox SHALL render with a gold accent
  indicator
- **AND** a "Forgot Password" link SHALL render aligned to the right
- **AND** both SHALL use `rgba(255,255,255,0.3)` text color

#### Scenario: Switch to Sign Up from Sign In

- **GIVEN** the Sign In tab is active
- **THEN** a "Not a member? Sign Up" link SHALL render below the form
- **WHEN** the user clicks "Sign Up"
- **THEN** the Sign Up tab SHALL activate

### Requirement: Sign Up form

The system SHALL render a sign-up form with full name, email, password,
terms checkbox, and submit button.

#### Scenario: Sign Up form fields

- **GIVEN** the Sign Up tab is active
- **THEN** a "Sign Up" heading SHALL render in the form panel
- **AND** a Full Name field SHALL render with uppercase label ("FULL NAME")
- **AND** an Email Address field SHALL render with uppercase label ("EMAIL
  ADDRESS")
- **AND** a Password field SHALL render with uppercase label ("PASSWORD")
- **AND** all inputs SHALL match the Sign In input styling (transparent bg,
  bottom border, white text)

#### Scenario: Sign Up terms checkbox and submit

- **GIVEN** the Sign Up tab is active
- **THEN** a checkbox labeled "I agree all statements in terms of service"
  SHALL render with gold accent
- **AND** a "Sign Up" submit button SHALL render with the same gold styling
  as the Sign In button
- **WHEN** the user hovers the submit button
- **THEN** the background SHALL become transparent and text/border SHALL turn
  gold

#### Scenario: Switch to Sign In from Sign Up

- **GIVEN** the Sign Up tab is active
- **THEN** an "I'm already a member! Sign In" link SHALL render below the form
- **WHEN** the user clicks "Sign In"
- **THEN** the Sign In tab SHALL activate

### Requirement: Responsive behavior

#### Scenario: Mobile layout

- **GIVEN** the viewport is less than 768px wide
- **THEN** the modal columns SHALL stack vertically (image panel on top)
- **AND** the image panel SHALL have a minimum height of 300px
- **AND** the form panel SHALL fill the remaining width

## Verification checklist

- [ ] Page renders white background with centered heading and gold button
- [ ] Clicking button opens dark modal with two-column split
- [ ] Close button (40×40px, top-right) closes modal
- [ ] Sign In tab active by default with gold text
- [ ] Sign In form: Username + Password fields with uppercase labels
- [ ] Sign In form: transparent inputs with bottom borders
- [ ] Sign In form: gold submit button with hover effect
- [ ] Sign In form: "Remember Me" checkbox + "Forgot Password" link
- [ ] Sign In form: "Not a member? Sign Up" link switches tabs
- [ ] Sign Up tab: Full Name + Email + Password fields
- [ ] Sign Up tab: terms checkbox with gold accent
- [ ] Sign Up tab: gold submit button
- [ ] Sign Up tab: "I'm already a member! Sign In" link switches tabs
- [ ] Modal max-width 900px, no border, no radius
- [ ] Modal shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`
- [ ] Left panel shows placeholder background image
- [ ] Right panel background is `#2b2b28`
- [ ] Font family is Roboto
- [ ] Responsive: columns stack on mobile (< 768px)
- [ ] No ColorLib references in app code (comments, strings, etc.)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `shadowform.free.componentdock.com`
- [ ] `package.json` homepage is `https://shadowform.free.componentdock.com`
- [ ] Tests pass at 100% coverage
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Build succeeds
