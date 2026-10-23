# Linewell — Implementation Tasks

Source design: **Contact Form V15** (`https://colorlib.com/wp/template/contact-form-v15/`) → recreation name **linewell**. Shipped at https://linewell.free.componentdock.com.

Scope: A centered card with a banner header image, "Contact Us" title, and a four-field contact form (underline-style inputs) on a dark map background. Recreation of ColorLib **Contact Form V15**.

## Component breakdown

Render order as composed in `apps/linewell/src/App.tsx`:

### 1. BannerHeader
- The top of the card displays a banner image with the heading and subtitle overlaid.
- Scenario — Heading displayed:
  - **WHEN** I visit the Linewell page
  - **THEN** I see "Contact Us" as the main heading in the banner area
- Scenario — Subtitle displayed:
  - **WHEN** I visit the Linewell page
  - **THEN** I see "Feel free to drop us a line below!" as a subtitle below the heading

### 2. ContactForm
- The card contains a form with four fields and a submit button.
- Scenario — Full Name field:
  - **WHEN** I visit the Linewell page
  - **THEN** I see a "Full Name" input field
- Scenario — Email field:
  - **WHEN** I visit the Linewell page
  - **THEN** I see an "Email" input field
- Scenario — Phone field:
  - **WHEN** I visit the Linewell page
  - **THEN** I see a "Phone" input field
- Scenario — Message textarea:
  - **WHEN** I visit the Linewell page
  - **THEN** I see a "Message" textarea field
- Scenario — Form inputs have underline style:
  - **WHEN** I visit the Linewell page
  - **THEN** the input fields have a bottom-border underline style (no full border box)
- Scenario — Submit button displayed:
  - **WHEN** I visit the Linewell page
  - **THEN** I see a green "Submit" button with an arrow icon

### 3. Footer
- The page footer links to Component Dock.
- Scenario — Component Dock link:
  - **WHEN** I visit the Linewell page
  - **THEN** I see "More templates at Component Dock" with a link to https://www.componentdock.com/

### Cross-cutting requirements

- **Page background** — The page renders a dark background that fills the entire viewport.
  - Scenario — Dark background displayed: **WHEN** I visit the Linewell page; **THEN** the page background is a dark color (not white)
- **Centered card layout** — A white card is centered on the page with rounded corners and a shadow.
  - Scenario — Card rendered: **WHEN** I visit the Linewell page; **THEN** I see a centered white card with rounded corners and shadow on the dark background
- **Form interactivity** — The form fields accept user input and the form submits without error.
  - Scenario — Typing in Full Name: **WHEN** I type into the Full Name field; **THEN** the field value updates to reflect my input
  - Scenario — Form submission: **WHEN** I click the Submit button; **THEN** the form submits without throwing an error
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/linewell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/linewell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/linewell` ships on https://linewell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/linewell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/linewell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/linewell/public/CNAME` = `linewell.free.componentdock.com`
  and the package `homepage` = `https://linewell.free.componentdock.com`.
