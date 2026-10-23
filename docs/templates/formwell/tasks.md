# Formwell — Implementation Tasks

Source design: **Contact Form 08** (`https://colorlib.com/wp/template/contact-form-v15/`) → recreation name **formwell**. Shipped at https://formwell.free.componentdock.com.

Row note: `TEMPLATES.md` links the slug `contact-form-08` for this app while the spec records `contact-form-v15`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Scope: A single-page contact form with a full-page Google Maps background, a centered white card with a banner image. It also includes and underline-style form inputs with a green submit button. Recreation of ColorLib **Contact Form V15**.

## Component breakdown

Render order as composed in `apps/formwell/src/App.tsx`:

### 1. PageTitle
- No dedicated spec block — hold this band to the design notes.
- Anchors: Formwell

### 2. ContactCard
- A white card is centered on the page over the map background.
- Scenario — Card rendered centered:
  - **WHEN** I visit the FormWell page
  - **THEN** I see a white card centered horizontally and vertically on the page
- Scenario — Card has shadow:
  - **WHEN** I visit the FormWell page
  - **THEN** the card has a soft box-shadow for depth

### 3. Footer
- The page includes a footer with a Component Dock link.
- Scenario — Footer present:
  - **WHEN** I visit the FormWell page
  - **THEN** I see a footer with a link to https://www.componentdock.com/

### Cross-cutting requirements

- **Full-page map background** — The page renders a full-viewport Google Maps background with a dark overlay.
  - Scenario — Map background visible: **WHEN** I visit the FormWell page; **THEN** the entire page background shows a map (Google Maps tile or static map image)
  - Scenario — Dark overlay on map: **WHEN** I visit the FormWell page; **THEN** the map has a dark semi-transparent overlay so the card stands out
- **Banner image section** — The top of the card has a banner image with a dark overlay and text.
  - Scenario — Banner image displayed: **WHEN** I visit the FormWell page; **THEN** the top section of the card shows a banner image (person with laptop or similar)
  - Scenario — Dark overlay on banner: **WHEN** I visit the FormWell page; **THEN** the banner image has a dark semi-transparent overlay
  - Scenario — Contact Us heading: **WHEN** I visit the FormWell page; **THEN** the text "Contact Us" is displayed centered on the banner in white bold text
  - Scenario — Subheading: **WHEN** I visit the FormWell page; **THEN** the text "Feel free to drop us a line below!" is displayed below the heading in white
- **Contact form** — Below the banner, the card contains a form with underline-style inputs.
  - Scenario — Full Name field: **WHEN** I visit the FormWell page; **THEN** I see a "Full Name:" label with a text input showing placeholder "John Doe"
  - Scenario — Email field: **WHEN** I visit the FormWell page; **THEN** I see an "Email:" label with a text input showing placeholder "Enter email address"
  - Scenario — Phone field: **WHEN** I visit the FormWell page; **THEN** I see a "Phone:" label with a text input showing placeholder "Enter phone number"
  - Scenario — Message field: **WHEN** I visit the FormWell page; **THEN** I see a "Message:" label with a textarea showing placeholder "Your Comments..."
  - Scenario — Underline input style: **WHEN** I look at any form input; **THEN** it has a bottom border only (underline style) with no full box border
  - Scenario — Labels left-aligned: **WHEN** I view the form; **THEN** labels are left-aligned next to or above their inputs
- **Submit button** — A green rounded submit button appears below the form fields.
  - Scenario — Submit button rendered: **WHEN** I visit the FormWell page; **THEN** I see a green "Submit" button with an arrow icon
  - Scenario — Button rounded pill shape: **WHEN** I view the submit button; **THEN** it has a rounded pill shape (large border-radius)
  - Scenario — Button centered: **WHEN** I visit the FormWell page; **THEN** the submit button is centered below the form fields
- **Responsive layout** — The template is responsive and works on mobile.
  - Scenario — Mobile stacking: **WHEN** I view the page on a mobile viewport (375px wide); **THEN** the card takes full width with horizontal padding
  - Scenario — Form readable on mobile: **WHEN** I view the page on a mobile viewport; **THEN** all form fields and the button are readable and usable
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formwell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formwell` ships on https://formwell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formwell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formwell/public/CNAME` = `formwell.free.componentdock.com`
  and the package `homepage` = `https://formwell.free.componentdock.com`.
