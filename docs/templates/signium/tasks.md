# Signium — Implementation Tasks

Source design: **Colorlib Wizard 17** (`https://colorlib.com/wp/template/colorlib-wizard-17/`) → recreation name **signium**. Shipped at https://signium.free.componentdock.com.

Scope: A four-step sign-up wizard form with a split-screen layout. The left panel (white) contains branding, tagline, description, and an illustration image. The right panel (lavender #efeeff) contains a multi-step form with Previous/Next/Finish buttons and a "Step X / 4" indicator.

## Component breakdown

Render order as composed in `apps/signium/src/App.tsx`:

### 1. NameStep
- The form SHALL display a name input field on step 1 with a "Step 1 / 4" indicator.
- Scenario — Step 1 visible:
  - **WHEN** the user loads the page
  - **THEN** "Step 1 / 4" text is visible
  - **AND** a "Your Name" input field is visible
  - **AND** a "Next" button is visible

### 2. EmailStep
- The form SHALL advance to step 2 showing an email input field with "Step 2 / 4".
- Scenario — Navigate to step 2:
  - **WHEN** the user fills in the name and clicks Next
  - **THEN** "Step 2 / 4" text becomes visible
  - **AND** "Step 1 / 4" is no longer visible
  - **AND** a "Your Email" input field is visible

### 3. PasswordStep
- The form SHALL advance to step 3 showing a password input with a visibility toggle icon and "Step 3 / 4".
- Scenario — Navigate to step 3:
  - **WHEN** the user fills in the email and clicks Next
  - **THEN** "Step 3 / 4" text becomes visible
  - **AND** a "Your Password" input field is visible
  - **AND** a password visibility toggle icon is visible
- Scenario — Toggle password visibility:
  - **WHEN** the user clicks the password toggle icon
  - **THEN** the password input type switches to text (visible)
  - **AND** the toggle icon changes to an eye-off icon

### 4. ConfirmStep
- The form SHALL advance to step 4 showing a confirm password input with "Step 4 / 4" and a "Finish" button.
- Scenario — Navigate to step 4:
  - **WHEN** the user fills in the password and clicks Next
  - **THEN** "Step 4 / 4" text becomes visible
  - **AND** a "Confirm your password" input field is visible
  - **AND** a "Finish" button is visible
  - **AND** a "Previous" button is visible

### 5. StepFooter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous · Finish · Next

### 6. Footer
- The form SHALL show a completion action when the user clicks Finish on the last step.
- Scenario — Finish form:
  - **WHEN** the user clicks Finish on step 4
  - **THEN** a completion signal is emitted (submit handler called)

### Cross-cutting requirements

- **Renders split-screen layout on load** — The template SHALL display a split-screen layout with a left description panel and a right form panel.
  - Scenario — Initial page load: **WHEN** the user loads the page; **THEN** a left panel with heading and description is visible; **AND** a right panel with form fields is visible; **AND** the page has a dark (#222) body background
- **Left panel contains branding and illustration** — The left panel SHALL display a heading, tagline, description paragraph, and an illustration image.
  - Scenario — Left panel content: **WHEN** the user views the left panel; **THEN** heading "Au Creative" is visible (with "Au" styled in brand purple); **AND** tagline "Sign up now to try undraw 30 days for free" is visible; **AND** description text "MIT licensed illustrations for every project..." is visible; **AND** an illustration image is visible
- **Step navigation with Previous button** — The user SHALL be able to navigate backward to any previous step.
  - Scenario — Go back to previous step: **WHEN** the user is on step 2 and clicks Previous; **THEN** step 1 becomes visible again; **AND** "Step 1 / 4" text is shown
- **Responsive layout** — The template SHALL stack the split-screen panels vertically on small screens.
  - Scenario — Mobile layout: **WHEN** the viewport is narrower than 768px; **THEN** the left panel stacks above the right panel; **AND** both panels take full width
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/signium/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/signium/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Split-screen layout renders correctly (left panel white, right panel lavender); [ ] Heading "Au Creative" with purple "Au" span; [ ] Tagline and description text match original; [ ] 4-step form with name, email, password, confirm password fields; [ ] Step indicator updates ("Step X / 4"); [ ] Previous/Next/Finish buttons functional; [ ] Password visibility toggle works on steps 3 and 4; [ ] Floating label animation on input focus; [ ] Dark (#222) body background; [ ] Brand purple (#7c7cdd) used for buttons and accents; [ ] Responsive: panels stack vertically below 768px; [ ] Footer links to https://www.componentdock.com/; [ ] No ColorLib references in app code; [ ] Uses picsum.photos for illustration placeholder; [ ] Google Fonts (Poppins, Montserrat) loaded via index.html; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/signium` ships on https://signium.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/signium/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/signium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signium/public/CNAME` = `signium.free.componentdock.com`
  and the package `homepage` = `https://signium.free.componentdock.com`.
