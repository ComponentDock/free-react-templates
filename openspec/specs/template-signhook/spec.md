# Template: Signhook (Login Form)
<!-- prep-status: shipped-as=passgate -->
> **SHIPPED-UNDER** — the ColorLib `login-form-04` design this prep describes already
> ships as `apps/passgate` (<https://passgate.free.componentdock.com>).
> Do not scaffold `apps/signhook`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-passgate/spec.md`.

## Purpose

Signhook is a single-page LOGIN FORM in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Login Form V04" free
template (source: https://colorlib.com/wp/template/login-form-04/), built
under a DIFFERENT name (**Signhook**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap-based split-panel login page: a full-height
lifestyle image occupies the left ~35% of the viewport, while the right
side features a white card with rounded corners and a subtle shadow,
centered on a light gray background. The card contains a "Login to ..."
heading, Username and Password fields with placeholders, a "Remember me"
checkbox, a "Forgot Password" link, and a full-width orange "Log In"
button. The design is described as "modern and simple" and uses the
Bootstrap Framework for responsiveness.

**WHAT MAKES SIGNHOOK DISTINCT (signature behaviors):**

1. **Split-panel layout with full-height image.** The left panel is a
   full-viewport-height lifestyle photo (kitchen/cooking scene in the
   original) covering roughly 30–35% of the viewport width. The right
   panel is a light gray (`#f5f7fa`) background with the login card
   centered vertically and horizontally. On mobile the image likely
   stacks above or is hidden (original uses Bootstrap responsive grid).

2. **White card with orange accent.** The login card is white (`#fff`),
   has generous rounded corners (~8px), and a soft box shadow. The
   primary brand color is a warm orange (`#fb771a`) used for the
   full-width "Log In" button and the "Remember me" checkbox checked
   state. The button has rounded corners (~4px radius) matching the
   card's softer aesthetic.

3. **Clean sans-serif typography.** The heading "Login to ..." is large
   (~24px), centered, dark gray/black, clean sans-serif. Field labels
   ("Username", "Password") are smaller, dark, left-aligned above each
   input. Input placeholders are light gray.

4. **Minimal form with "Remember me" + "Forgot Password".** The form
   has exactly two fields (username + password), a checkbox row with
   "Remember me" on the left and "Forgot Password" link on the right,
   and the submit button. No social login, no registration link, no
   CAPTCHA — pure minimal login.

5. **Responsive split → stacked.** On smaller viewports the split layout
   collapses: the image either stacks above the form or is hidden, and
   the card takes full width. The original uses Bootstrap's grid system
   for this transition.

## Design tokens (from screenshot analysis — preview was unreachable)

| Token          | Value                            | Use                                                    |
| -------------- | -------------------------------- | ------------------------------------------------------ |
| Brand orange   | `#fb771a`                       | "Log In" button bg, checkbox checked state              |
| Page bg        | `~#f5f7fa` (light gray)          | Right panel background                                 |
| Card           | `#fff`, rounded ~8px, soft shadow | Login form container, centered on right panel           |
| Heading text   | `~#333` (dark gray)              | "Login to ..." h2, ~24px, centered                     |
| Label text     | `~#555` (medium gray)            | "Username", "Password" labels, ~14px                    |
| Input border   | `~#ddd` (light gray)             | Input field borders, ~1px solid                        |
| Input bg       | `#fff`                           | Input field background                                 |
| Placeholder    | `~#aaa` (muted gray)             | "your-email@gmail.com", "Your Password"                |
| Button text    | `#fff`                           | "Log In" button label                                  |
| Button bg      | `#fb771a`                       | Full-width submit button                               |
| Button radius  | `~4px`                           | Rounded corners on button                              |
| Link text      | `~#333` or brand color           | "Forgot Password" link                                 |
| Checkbox       | `#fb771a` when checked          | Custom or styled checkbox                              |
| Font family    | System sans-serif or Poppins     | Clean sans-serif stack                                 |
| Image panel    | Full height, ~35% width          | Left lifestyle photo                                   |

**Note:** The preview URL (`https://preview.colorlib.com/theme/login-form-04/`)
returned HTTP 404. All tokens above are derived from the screenshot
(`https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-04.jpg`)
and the ColorLib template page description. Implementers should use these
as guidelines and refine from the visual reference.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/login-form-04/` | HTTP 200 · 2,359 B · title `Login #4` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/login-form-04/css/style.css?v=dfa8daa4` | HTTP 200 · 15,591 B · sha256 `269a2cad14c3` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×10,
`#fb771a`×7, `#6c757d`×6, `#212529`×3, `#c55303`×2, `#495057`×2,
`#de5e04`×2, `#888888`×2, `#e6e6e6`×2, `#ced4da`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#e8913a` → **`#fb771a`** — the sheet paints `a{color}` with it

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#888888`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Login Form — Signhook

  As a visitor to a website,
  I want to log in with my username and password,
  So that I can access my account.

#### Scenario: Page loads with split-panel layout

- **GIVEN** the user navigates to the Signhook login page
- **THEN** a lifestyle image is displayed on the left side of the viewport
- **AND** a white login card is centered on the right side
- **AND** the heading "Login to Colorlib" (or similar) is visible
- **AND** the Username field is visible with placeholder "your-email@gmail.com"
- **AND** the Password field is visible with placeholder "Your Password"
- **AND** the "Remember me" checkbox is visible and unchecked by default
- **AND** the "Forgot Password" link is visible
- **AND** the "Log In" button is visible and full-width

#### Scenario: Successful login with valid credentials

- **GIVEN** the user is on the Signhook login page
- **WHEN** the user enters "user@example.com" in the Username field
- **AND** the user enters "password123" in the Password field
- **AND** the user clicks the "Log In" button
- **THEN** the form submits (no client-side error is shown)

#### Scenario: Empty username shows validation

- **GIVEN** the user is on the Signhook login page
- **WHEN** the user leaves the Username field empty
- **AND** the user enters "password123" in the Password field
- **AND** the user clicks the "Log In" button
- **THEN** a validation error is shown for the Username field

#### Scenario: Empty password shows validation

- **GIVEN** the user is on the Signhook login page
- **WHEN** the user enters "user@example.com" in the Username field
- **AND** the user leaves the Password field empty
- **AND** the user clicks the "Log In" button
- **THEN** a validation error is shown for the Password field

#### Scenario: Both fields empty shows validation

- **GIVEN** the user is on the Signhook login page
- **WHEN** the user clicks the "Log In" button without entering any data
- **THEN** validation errors are shown for both Username and Password fields

#### Scenario: Remember me checkbox toggle

- **GIVEN** the user is on the Signhook login page
- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox becomes checked
- **WHEN** the user clicks the "Remember me" checkbox again
- **THEN** the checkbox becomes unchecked

#### Scenario: Forgot Password link is clickable

- **GIVEN** the user is on the Signhook login page
- **WHEN** the user clicks the "Forgot Password" link
- **THEN** the link is activated (no page crash)

#### Scenario: Responsive layout — mobile viewport

- **GIVEN** the user is on the Signhook login page
- **WHEN** the viewport width is less than 768px
- **THEN** the split layout collapses to a single column
- **AND** the login card takes full width
- **AND** the form remains functional

#### Scenario: Footer credit

- **GIVEN** the user is on the Signhook login page
- **THEN** a footer with "Component Dock" credit linking
      https://www.componentdock.com/ is visible

## Verification checklist

- [ ] Split-panel layout renders: image left (~35% width), card right
- [ ] Image is full-viewport height on desktop
- [ ] Card is white with rounded corners and soft shadow
- [ ] Heading is centered, dark, ~24px sans-serif
- [ ] Username input has correct placeholder and label
- [ ] Password input has correct placeholder, label, and type="password"
- [ ] "Remember me" checkbox toggles correctly
- [ ] "Forgot Password" link is present and clickable
- [ ] "Log In" button is full-width, orange (`#fb771a`), rounded
- [ ] Form validation: empty fields show errors on submit
- [ ] Form submits with valid credentials (no crash)
- [ ] Responsive: single-column on mobile (<768px)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code (provenance in spec only)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app -- signhook` passes
