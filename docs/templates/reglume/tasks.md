# Reglume — Implementation Tasks

Source design: **Colorlib Regform 31** (`https://colorlib.com/wp/template/colorlib-regform-31/`) → recreation name **reglume**. Shipped at https://reglume.free.componentdock.com.

Scope: A Registration Form template with full-page background, card container, card heading, form fields, full name and your email sections. Recreation of **ColorLib Reg Form V31** (`colorlib-regform-31`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/reglume/src/App.tsx`:

### 1. Background
- The page SHALL render a full-height teal `#5eb2b3` background with content centered vertically and horizontally.
- Scenario — Background fills the viewport:
  - **WHEN** I visit the Reglume page
  - **THEN** I see a teal `#5eb2b3` background filling the entire viewport
  - **AND** a white card is centered on the page

### 2. RegisterCard
- The form SHALL contain a Register button with specific styling.
- Scenario — Register button is visible and styled:
  - **WHEN** I view the register button
  - **THEN** I see a "Register" button with a `#3786bd` background
  - **AND** the button text is white
  - **AND** the button is 180px wide and centered
  - **AND** the button has a 5px border-radius
  - **AND** the button has a box-shadow of `0px 5px 15px rgba(0,0,0,0.2)`
- Scenario — Button hover state:
  - **WHEN** I hover over the Register button
  - **THEN** the background color changes to `#2f73a3`

### 3. Footer
- The page SHALL display a footer with a Component Dock branded link.
- Scenario — Footer is visible with correct link:
  - **WHEN** I scroll to the footer
  - **THEN** I see a "Component Dock" link
  - **AND** the link points to https://www.componentdock.com/
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Card dimensions and styling** — The page SHALL display a white card with specific dimensions and styling.
  - Scenario — Card has correct dimensions: **WHEN** I view the registration card; **THEN** the card is 670px wide with an 8px border-radius; **AND** the card has padding of 30px top/bottom and 45px left/right; **AND** the card has a box shadow
- **Card heading with underline** — The card SHALL display a centered heading with a decorative underline.
  - Scenario — Heading is visible and styled: **WHEN** I view the card heading; **THEN** I see "Register Account Form" in bold 25px text; **AND** the heading is centered horizontally; **AND** a blue `#3786bd` underline of 50px width appears 2px below the heading
- **Form fields with icons** — The form SHALL contain three input fields with associated icons.
  - Scenario — All three fields are rendered: **WHEN** I view the registration form; **THEN** I see a text input labeled "Full Name" with a user icon; **AND** I see an email input labeled "Your Email" with a mail icon; **AND** I see a password input labeled "Password" with a lock icon
  - Scenario — Inputs have correct styling: **WHEN** I view any input field; **THEN** the input has a `1px solid #e5e5e5` border with 4px border-radius; **AND** the input font size is 18px; **AND** placeholder text is gray `#999` at 16px
- **Form input focus states** — The inputs SHALL change border color when focused.
  - Scenario — Input border changes on focus: **WHEN** I focus an input field; **THEN** the border color changes to `#b3b3b3`
- **Responsive layout** — The layout SHALL adapt to smaller viewports.
  - Scenario — Mobile card layout: **WHEN** the viewport width is 767px or less; **THEN** the card gets a margin of 175px top/bottom and 20px left/right instead of being centered
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/reglume/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/reglume/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Teal `#5eb2b3` full-page background; [ ] White 670px card, 8px radius, 30px 45px padding; [ ] Heading "Register Account Form" with blue underline; [ ] 3 input fields with lucide-react icons (User, Mail, Lock); [ ] Inputs: `#e5e5e5` border, `#b3b3b3` focus border, 4px radius; [ ] Register button: blue bg, white text, hover `#2f73a3`, box-shadow; [ ] Roboto font family (Google Fonts); [ ] Responsive: margin change at ≤767px; [ ] Footer links to https://www.componentdock.com/; [ ] No ColorLib references in app code; [ ] 100% test coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/reglume` ships on https://reglume.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/reglume/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/reglume/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reglume/public/CNAME` = `reglume.free.componentdock.com`
  and the package `homepage` = `https://reglume.free.componentdock.com`.
