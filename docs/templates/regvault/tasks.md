# Regvault — Implementation Tasks

Source design: **Colorlib Regform 21** (`https://colorlib.com/wp/template/colorlib-regform-21/`) → recreation name **regvault**. Shipped at https://regvault.free.componentdock.com.

Scope: Recreation of ColorLib **Regform 21** (`colorlib-regform-21`). Preview URL: https://preview.colorlib.com/theme/colorlib-regform-21/ (unreachable at prep time — design captured from screenshot).

## Component breakdown

Render order as composed in `apps/regvault/src/App.tsx`:

### 1. RegVault
- No dedicated spec block — hold this band to the design notes.

### 2. Footer
- The template SHALL include a footer linking to https://www.componentdock.com/.
- Scenario — Footer link:
  - **WHEN** the page is loaded
  - **THEN** a footer is visible with a link to https://www.componentdock.com/
  - **AND** the link text includes "Component Dock"

### Cross-cutting requirements

- **Card layout** — The page SHALL display a centered card split into two equal columns on desktop.
  - Scenario — Desktop card layout: **WHEN** the page is loaded on a desktop viewport; **THEN** a centered card is visible; **AND** the card is split into two equal columns; **AND** the left column has a dark navy background; **AND** the right column displays an image with an overlay
  - Scenario — Mobile card layout: **WHEN** the page is viewed on a mobile viewport; **THEN** the card stacks vertically (form on top, image below); **AND** the form fields remain accessible and properly sized
- **Form heading** — The left panel SHALL display a heading "Set The Event" in pink/coral serif font.
  - Scenario — Heading display: **WHEN** the card is visible; **THEN** the heading "Set The Event" appears in pink/coral serif font; **AND** the heading is left-aligned within the left panel
- **Price display** — The form SHALL display a read-only price field showing "$270".
  - Scenario — Price display: **WHEN** the card is visible; **THEN** "Price" label is shown with value "$270"; **AND** the value is displayed as read-only text (not editable)
- **People selector** — The form SHALL include a people dropdown selector defaulting to "1".
  - Scenario — People dropdown: **WHEN** the card is visible; **THEN** "People" label is shown with a dropdown selector defaulting to "1"
- **Form inputs** — The form SHALL include Name, Mail, Phone, and Comment inputs with underline-only border styling.
  - Scenario — Name input: **WHEN** the card is visible; **THEN** a "Name" text input is shown with an underline-only border style
  - Scenario — Mail input: **WHEN** the card is visible; **THEN** a "Mail" text input is shown with an underline-only border style
  - Scenario — Phone input: **WHEN** the card is visible; **THEN** a "Phone" text input is shown with an underline-only border style
  - Scenario — Comment input: **WHEN** the card is visible; **THEN** a "Comment" input is shown with an underline-only border style
- **Submit button** — The form SHALL include a "Send your booking" submit button with pink/coral background.
  - Scenario — Submit button display: **WHEN** the card is visible; **THEN** a "Send your booking" button is shown; **AND** the button has a pink/coral background; **AND** the button text is white
- **Contact info overlay** — The right panel SHALL display contact information in a semi-transparent overlay at the bottom.
  - Scenario — Contact info display: **WHEN** the card is visible; **THEN** the right panel shows an overlay at the bottom; **AND** the overlay displays an address, phone number, and email
- **No ColorLib references** — The app code SHALL NOT contain any references to ColorLib.
  - Scenario — Clean source: **WHEN** the app source files are inspected; **THEN** no file contains "colorlib" or "ColorLib" strings; **AND** provenance is only in the spec, TEMPLATES.md, and PR

## Verification

- [x] `apps/regvault` ships on https://regvault.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regvault/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regvault/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regvault/public/CNAME` = `regvault.free.componentdock.com`
  and the package `homepage` = `https://regvault.free.componentdock.com`.
