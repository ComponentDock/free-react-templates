# Joinflow — Implementation Tasks

Source design: **Signup Form 10** (`https://colorlib.com/wp/template/signup-form-10/`) → recreation name **joinflow**. Shipped at https://joinflow.free.componentdock.com.

Scope: Joinflow is a single-page signup/registration form template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/joinflow/src/App.tsx`:

### 1. SocialLogin
- The left column SHALL display the text "Or register with" followed by three full-width social login buttons stacked vertically: Facebook, Twitter, and Google. Each button SHALL display the platform name and be colored with the platform's brand color.
- Scenario — Social login heading renders:
  - **WHEN** the user views the left column
  - **THEN** the text "Or register with" SHALL be visible
- Scenario — Facebook login button renders:
  - **WHEN** the user views the left column
  - **THEN** a button labeled "Sign in with Facebook" (or similar) with
- Scenario — Twitter login button renders:
  - **WHEN** the user views the left column
  - **THEN** a button labeled "Sign in with Twitter" (or similar) with
- Scenario — Google login button renders:
  - **WHEN** the user views the left column
  - **THEN** a button labeled "Sign in with Google" (or similar) with
- Scenario — Social buttons are full width and stacked:
  - **WHEN** the user views the left column
  - **THEN** all three social buttons SHALL be full-width and stacked

### 2. RegisterForm
- A "Register" button SHALL be visible as the form's submit button, styled as a pill shape (`border-radius: 30px`, height 54px) with a teal/green primary background (`#38d39f`) and white text.
- Scenario — Button renders with correct styling:
  - **WHEN** the user views the form card
  - **THEN** a "Register" button SHALL be visible with pill shape, green
- Scenario — Button click submits form:
  - **WHEN** the user clicks the "Register" button
  - **THEN** the form SHALL attempt submission (without page reload)

### 3. Footer
- The template SHALL include a footer with a link to https://www.componentdock.com/ (branded "Component Dock").
- Scenario — Footer link present:
  - **WHEN** the user scrolls to the bottom of the page
  - **THEN** a footer with a link to Component Dock is visible

### Cross-cutting requirements

- **Page layout with centered two-column form** — The page SHALL render a full-viewport layout with a light gray-blue (`#f8fafb`) background and a centered two-column container. On desktop, the container shows a left column (social login), a center divider, and a right column (registration form) side by side. On mobile, the columns SHALL stack vertically.
  - Scenario — Page renders with correct background: **WHEN** the user navigates to Joinflow; **THEN** the page body SHALL have a `#f8fafb` background
  - Scenario — Two columns render side by side on desktop: **WHEN** the user views Joinflow on a desktop viewport (≥768px); **THEN** the left column (social login) and right column (registration form)
  - Scenario — Columns stack on mobile: **WHEN** the user views Joinflow on a mobile viewport (<768px); **THEN** the social login section and registration form stack vertically
- **Center divider with "— or —" text** — A vertical divider SHALL be visible between the left and right columns, containing the text "— or —" to visually separate social login from the registration form.
  - Scenario — Divider renders: **WHEN** the user views the two-column layout on desktop; **THEN** a divider containing "— or —" SHALL be visible between the
- **Right column — registration form card** — The right column SHALL display a white card with a subtle box shadow (`0 2px 3px 0 rgba(0,0,0,0.1)`) containing the registration form.
  - Scenario — Card renders with white background: **WHEN** the user views the right column; **THEN** a white (`#ffffff`) card with a subtle drop shadow is visible
  - Scenario — Register heading visible: **WHEN** the user views the registration card; **THEN** a heading "Register" SHALL be visible at the top of the card
  - Scenario — Subtitle visible: **WHEN** the user views the registration card; **THEN** a subtitle paragraph (e.g., "Create your account") SHALL be
- **Registration form fields** — The form SHALL contain four underline-style input fields: Name, Email, Password, and Re-type Password. Each input SHALL have a label and a bottom border (`#cccccc`). Password fields SHALL mask typed characters.
  - Scenario — Name input renders: **WHEN** the user views the form; **THEN** an input labeled "Name" with placeholder "Name" SHALL be visible; **AND** the input SHALL have a bottom border only (underline style)
  - Scenario — Email input renders: **WHEN** the user views the form; **THEN** an input labeled "Email" with placeholder "Email" SHALL be visible; **AND** the input SHALL accept text input
  - Scenario — Password input renders masked: **WHEN** the user views the form; **THEN** a password input labeled "Password" SHALL be visible; **AND** typed characters SHALL be masked
  - Scenario — Re-type Password input renders masked: **WHEN** the user views the form; **THEN** a password input labeled "Re-type Password" SHALL be visible; **AND** typed characters SHALL be masked
  - Scenario — Form fields accept input: **WHEN** the user types in any input field; **THEN** the input SHALL accept and display the typed text (or mask it for
- **Terms and Conditions checkbox** — A checkbox labeled "I agree to the Terms and Conditions" (or similar) SHALL be visible and unchecked by default.
  - Scenario — Checkbox renders unchecked: **WHEN** the user views the form; **THEN** a Terms and Conditions checkbox SHALL be visible and unchecked
  - Scenario — Checkbox toggles: **WHEN** the user clicks the Terms and Conditions checkbox; **THEN** the checkbox SHALL toggle its checked state; **AND** when checked, the checkbox indicator SHALL be `#38d39f` (teal/green)
- **Sign In link** — A link labeled "Already have an account? Sign In" (or similar) SHALL be visible, styled in muted text (`#888`).
  - Scenario — Sign In link renders: **WHEN** the user views the form card; **THEN** a "Sign In" link SHALL be visible in muted text
- **Validation — empty form submit** — Submitting the form with all fields empty SHALL display validation errors for each required field.
  - Scenario — Empty submit shows all errors: **WHEN** the user clicks "Register" without filling any fields; **THEN** validation error messages SHALL appear for Name, Email, Password,
- **Validation — invalid email** — Submitting the form with an invalid email SHALL display an email-specific error.
  - Scenario — Invalid email shows error: **WHEN** the user enters "not-an-email" in the Email field and submits; **THEN** a validation error message SHALL appear for the Email field
  - Scenario — Valid email does not show error: **WHEN** the user enters "user@example.com" in the Email field and; **THEN** no validation error SHALL appear for the Email field
- **Validation — short password** — Submitting the form with a password shorter than the minimum length (e.g., 6 characters) SHALL display a password-specific error.
  - Scenario — Short password shows error: **WHEN** the user enters "123" in the Password field and submits; **THEN** a validation error message SHALL appear for the Password field
  - Scenario — Acceptable password does not show error: **WHEN** the user enters "securepass" in the Password field and submits; **THEN** no validation error SHALL appear for the Password field
- **Validation — passwords do not match** — Submitting the form when the Password and Re-type Password fields do not match SHALL display a mismatch error.
  - Scenario — Mismatched passwords show error: **WHEN** the user enters "password1" in Password and "password2" in; **THEN** a validation error message SHALL appear indicating passwords
  - Scenario — Matching passwords do not show error: **WHEN** the user enters "password1" in both Password and Re-type; **THEN** no password mismatch error SHALL appear
- **Validation — terms checkbox unchecked** — Submitting the form without checking the Terms and Conditions checkbox SHALL display an error for the Terms field.
  - Scenario — Unchecked terms shows error: **WHEN** the user fills all fields correctly but leaves the Terms; **THEN** a validation error message SHALL appear for the Terms and
  - Scenario — Checked terms does not show error: **WHEN** the user checks the Terms and Conditions checkbox and submits; **THEN** no Terms validation error SHALL appear
- **Clear field error on typing** — When a validation error is showing for a field, typing into that field SHALL clear the error for that specific field.
  - Scenario — Typing clears name error: **WHEN** a validation error is displayed for the Name field; **AND** the user types into the Name field; **THEN** the Name validation error SHALL disappear
  - Scenario — Typing clears email error: **WHEN** a validation error is displayed for the Email field; **AND** the user types into the Email field; **THEN** the Email validation error SHALL disappear
- **Successful form submission** — Submitting the form with all valid data SHALL show a success state (e.g., success message or visual confirmation).
  - Scenario — Valid submission shows success: **WHEN** the user enters valid Name, Email, Password, matching Re-type; **THEN** a success message or confirmation SHALL be displayed
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/joinflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/joinflow/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Page renders with `#f8fafb` background; [ ] Two-column layout (social left, form right) with center divider; [ ] "Or register with" text visible in left column; [ ] Facebook social button (`#3b5998`) renders; [ ] Twitter social button (`#1da1f2`) renders; [ ] Google social button (`#ea4335`) renders; [ ] "— or —" divider visible between columns; [ ] White registration card with drop shadow renders; [ ] "Register" heading and subtitle visible; [ ] Name, Email, Password, Re-type Password inputs render (underline style); [ ] Terms and Conditions checkbox renders unchecked; [ ] "Sign In" link visible in muted text; [ ] "Register" pill button (`#38d39f`, border-radius 30px) renders; [ ] Empty submit shows all validation errors; [ ] Invalid email shows email error; [ ] Short password shows password error; [ ] Mismatched passwords show error; [ ] Unchecked terms shows terms error; [ ] Typing into a field clears its error; [ ] Valid submission shows success state; [ ] Component Dock footer link present; [ ] Responsive: stacks vertically on mobile; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/joinflow` ships on https://joinflow.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/joinflow/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/joinflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/joinflow/public/CNAME` = `joinflow.free.componentdock.com`
  and the package `homepage` = `https://joinflow.free.componentdock.com`.
