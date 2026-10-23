# Scout — Implementation Tasks

Source design: **Colorlib Wizard 18** (`https://colorlib.com/wp/template/colorlib-wizard-18/`) → recreation name **scout**. Shipped at https://scout.free.componentdock.com.

Scope: A three-step feedback/review wizard form. Step 1 shows star ratings for Overall Quality, Ease of Use, Features & Functionality, Customer Support, and Value of Money. Step 2 shows a textarea for a written review. Step 3 shows contact information fields (First Name, Last Name, Email, Phone).

## Component breakdown

Render order as composed in `apps/scout/src/App.tsx`:

### 1. RatingsStep
- The form SHALL display five star-rating categories on step 1 with an illustration on the left.
- Scenario — Step 1 visible:
  - **WHEN** the user loads the page
  - **THEN** heading "What do you think about AU services?" is visible
  - **AND** "Overall Quality" rating row is visible
  - **AND** "Ease of Use" rating row is visible
  - **AND** "Features & Functionality" rating row is visible
  - **AND** "Customer Support" rating row is visible
  - **AND** "Value of Money" rating row is visible
  - **AND** an illustration image is visible
- Scenario — Star rating interaction:
  - **WHEN** the user clicks a star in a rating row
  - **THEN** the selected star and preceding stars turn gold (#fbd91b)

### 2. ReviewStep
- The form SHALL advance to step 2 showing a textarea for written review.
- Scenario — Navigate to step 2:
  - **WHEN** the user clicks Next on step 1
  - **THEN** "02/03" step indicator is visible
  - **AND** a "Your Review" textarea is visible
  - **AND** an illustration image is visible

### 3. ContactStep
- The form SHALL advance to step 3 showing contact fields with "03/03" indicator and a "Finish" button.
- Scenario — Navigate to step 3:
  - **WHEN** the user clicks Next on step 2
  - **THEN** "03/03" step indicator is visible
  - **AND** "Enter your information manually below" label is visible
  - **AND** First Name and Last Name input fields are visible side by side
  - **AND** Email and Phone number input fields are visible
  - **AND** a "Finish" button is visible

### 4. StepFooter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous · Finish · Next

### 5. Footer
- The form SHALL show a completion action when the user clicks Finish on the last step.
- Scenario — Finish form:
  - **WHEN** the user clicks Finish on step 3
  - **THEN** a completion signal is emitted (submit handler called)

### Cross-cutting requirements

- **Renders white card container on gray background** — The template SHALL display a white rounded card centered on a light gray background with a step indicator badge in the top-right corner.
  - Scenario — Initial page load: **WHEN** the user loads the page; **THEN** a white container card is visible; **AND** the page background is light gray (#f8f8f8); **AND** a step indicator showing "01/03" is visible
- **Step navigation with Previous button** — The user SHALL be able to navigate backward to any previous step.
  - Scenario — Go back to previous step: **WHEN** the user is on step 2 and clicks Previous; **THEN** step 1 becomes visible again; **AND** "01/03" text is shown
- **Responsive layout** — The template SHALL adjust the layout for smaller screens.
  - Scenario — Tablet layout: **WHEN** the viewport is narrower than 992px; **THEN** the fieldset-flex stacks vertically (illustration above content)
  - Scenario — Mobile layout: **WHEN** the viewport is narrower than 768px; **THEN** the form takes full width
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/scout/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/scout/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] White card on gray background with shadow and rounded corners; [ ] Circular step indicator badge (gradient teal) with "01/03" format; [ ] 5 star-rating categories with gold active stars; [ ] Review textarea on step 2; [ ] Contact info fields on step 3 (First Name, Last Name, Email, Phone); [ ] Previous/Next/Finish button navigation; [ ] Step indicator updates on each step; [ ] Illustration images on each step (using picsum.photos); [ ] Responsive layout adjustment; [ ] Footer links to https://www.componentdock.com/; [ ] No ColorLib references in app code; [ ] Google Fonts (Poppins, Montserrat) loaded via index.html; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/scout` ships on https://scout.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/scout/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/scout/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/scout/public/CNAME` = `scout.free.componentdock.com`
  and the package `homepage` = `https://scout.free.componentdock.com`.
