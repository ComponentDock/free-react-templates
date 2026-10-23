# Contactviolet — Implementation Tasks

Source design: **Contact Form V9** (`https://colorlib.com/wp/template/contact-form-v9/`) → recreation name **contactviolet**. Shipped at https://contactviolet.free.componentdock.com.

Scope: A centered single-column contact form floating over a Google Maps background with a purple/magenta gradient overlay. It also includes featuring inline field validation (error + success states), a gradient submit button, and a phone contact line below the form. Recreation of ColorLib **Contact Form V9**.

## Component breakdown

Render order as composed in `apps/contactviolet/src/App.tsx`:

### 1. ContactForm
- The form card SHALL display a phone number below the submit button.
- Scenario — Phone text displayed:
  - **WHEN** I view the form card
  - **THEN** a line of text SHALL appear below the submit button reading

### 2. Footer
- The page footer SHALL link to Component Dock.
- Scenario — Footer link:
  - **WHEN** I scroll to the bottom of the page
  - **THEN** I SHALL see a footer with a link to "https://www.componentdock.com/"

### Cross-cutting requirements

- **Page layout** — The page SHALL render a full-viewport background combining Google Maps with a purple gradient overlay, with a centered contact form card.
  - Scenario — Map and gradient background: **WHEN** I visit the ContactViolet page; **THEN** the page background SHALL show a Google Maps view partially covered
  - Scenario — Centered form card: **WHEN** I visit the ContactViolet page; **THEN** a white card SHALL be centered on the page with rounded corners
- **Form heading** — The form card SHALL display a heading at the top.
  - Scenario — Heading text: **WHEN** I view the form card; **THEN** a "Contact Us" heading SHALL be displayed at the top of the card
- **Form fields with validation** — The form SHALL contain name, email, and message fields with inline validation indicators.
  - Scenario — Name field (empty/error state): **WHEN** I view the form with the name field empty; **THEN** the name input SHALL display red text "Please enter your name"
  - Scenario — Name field (valid state): **WHEN** I type a name into the name field; **THEN** the error message SHALL disappear and a green checkmark icon SHALL
  - Scenario — Email field (valid state): **WHEN** I view the form with a valid email entered; **THEN** the email input SHALL display the email value with a green
  - Scenario — Email field (invalid state): **WHEN** I enter an invalid email format; **THEN** the email field SHALL show a red error indicator
  - Scenario — Message textarea: **WHEN** I view the form; **THEN** a textarea SHALL be displayed with placeholder text "Your Message"
- **Submit button** — The form SHALL have a purple gradient pill-shaped submit button.
  - Scenario — Submit button displayed: **WHEN** I view the form; **THEN** a "SEND EMAIL" button SHALL be displayed at the bottom of the form
  - Scenario — Submit button hover: **WHEN** I hover over the submit button; **THEN** the button SHALL show a hover state (darkened gradient or shadow)
  - Scenario — Form submission: **WHEN** I fill all required fields with valid data and click "SEND EMAIL"; **THEN** the form SHALL submit (or show a success state)
- **Responsive layout** — The form and background SHALL be responsive across screen sizes.
  - Scenario — Mobile layout: **WHEN** I view the page on a mobile device (width < 640px); **THEN** the form card SHALL fill most of the viewport width with appropriate
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/contactviolet/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/contactviolet/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Google Maps background with purple gradient overlay renders correctly; [ ] Centered white card with rounded corners and shadow; [ ] "Contact Us" heading in bold dark text, left-aligned; [ ] Name field with validation: red error state when empty, green check when valid; [ ] Email field with validation: green check when valid, red when invalid; [ ] Message textarea with visible border; [ ] "SEND EMAIL" purple gradient pill button; [ ] Phone contact line below the button; [ ] Footer links to componentdock.com; [ ] Responsive layout on mobile viewports; [ ] No ColorLib references in app code; [ ] `packages/ui` components reused where possible; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/contactviolet` ships on https://contactviolet.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/contactviolet/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/contactviolet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/contactviolet/public/CNAME` = `contactviolet.free.componentdock.com`
  and the package `homepage` = `https://contactviolet.free.componentdock.com`.
