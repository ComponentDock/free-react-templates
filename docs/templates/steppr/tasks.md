# Steppr — Implementation Tasks

Source design: **Colorlib Wizard 21** (`https://colorlib.com/wp/template/colorlib-wizard-21/`) → recreation name **steppr**. Shipped at https://steppr.free.componentdock.com.

Scope: Steppr is a multi-step wizard form for account registration with payment details. It provides a clean, guided UX with three steps: Account Information, Payment Information, and a Confirmation Summary.

## Component breakdown

Render order as composed in `apps/steppr/src/App.tsx`:

### 1. StepIndicator
- The step indicator SHALL visually distinguish active, completed, and pending steps.
- Scenario — Step indicator states:
  - **WHEN** the user is on step 2
  - **THEN** step 1 shows as completed (green)
  - **AND** step 2 shows as active (green with shadow)
  - **AND** step 3 shows as pending (gray)

### 2. AccountStep
- Step 1 SHALL collect username, email, password, and confirm password.
- Scenario — Required field validation:
  - **WHEN** the user attempts to proceed without filling required fields
  - **THEN** the browser shows native validation messages
- Scenario — Field data is preserved across steps:
  - **WHEN** the user fills step 1 and navigates to step 2
  - **AND** navigates back to step 1
  - **THEN** the previously entered data is still present

### 3. PaymentStep
- Step 2 SHALL collect card type, card number, CVC, and expiry date.
- Scenario — Card type selection:
  - **WHEN** the user opens the Card Type dropdown
  - **THEN** options include Business, Limited Purpose, Prepaid, Charge, and Student cards

### 4. ConfirmStep
- Step 3 SHALL display all entered data in a read-only summary table.
- Scenario — Summary displays all values:
  - **WHEN** the user reaches step 3
  - **THEN** all entered account and payment data is shown in a table

### 5. NavigationButtons
- No dedicated spec block — hold this band to the design notes.
- Anchors: Next step · Submit

### 6. Footer
- The footer SHALL link to https://www.componentdock.com/.
- Scenario — Footer branding:
  - **WHEN** the page renders
  - **THEN** the footer contains a link to Component Dock
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Multi-step wizard form** — Users SHALL be guided through three sequential steps to complete registration.
  - Scenario — Renders step 1 by default: **WHEN** the page loads; **THEN** the user sees Account Information fields (username, email, password, confirm password); **AND** the step indicator shows step 1 as active
  - Scenario — Navigate forward through steps: **WHEN** the user clicks the Next button on step 1; **THEN** the Payment Information fields are displayed; **WHEN** the user clicks the Next button on step 2; **THEN** the Confirmation Summary table is displayed
  - Scenario — Navigate backward through steps: **WHEN** the user is on step 2 and clicks Previous; **THEN** the Account Information fields are displayed again; **WHEN** the user is on step 3 and clicks Previous; **THEN** the Payment Information fields are displayed again
- **Responsive layout** — The wizard SHALL be responsive and usable on mobile devices.
  - Scenario — Mobile layout: **WHEN** the viewport is narrow; **THEN** form fields stack vertically; **AND** the wizard card fills the available width
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/steppr/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/steppr/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/steppr` ships on https://steppr.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/steppr/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/steppr/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/steppr/public/CNAME` = `steppr.free.componentdock.com`
  and the package `homepage` = `https://steppr.free.componentdock.com`.
