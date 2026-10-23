# Formsend — Implementation Tasks

Source design: **Contact Form V12** (`https://colorlib.com/wp/template/contact-form-v12/`) → recreation name **formsend**. Shipped at https://formsend.free.componentdock.com.

Scope: Recreation of ColorLib **Contact Form V12** — a centered card contact form with a purple gradient background overlay on a city skyline image.

## Component breakdown

Render order as composed in `apps/formsend/src/App.tsx`:

### 1. ContactCard
- The right column SHALL contain a contact form with Name, Email, Message fields and a Send button.
- Scenario — Form heading:
  - **WHEN** I view the contact form
  - **THEN** I see a "Get in touch" heading
- Scenario — Name input field:
  - **WHEN** I view the contact form
  - **THEN** I see a Name input field with a user icon
  - **AND** the input has a rounded pill shape with light gray background
- Scenario — Email input field:
  - **WHEN** I view the contact form
  - **THEN** I see an Email input field with a mail icon
  - **AND** the input has a rounded pill shape with light gray background
- Scenario — Message textarea:
  - **WHEN** I view the contact form
  - **THEN** I see a Message textarea with rounded corners
  - **AND** it has a light gray background
- Scenario — Send button:
  - **WHEN** I view the contact form
  - **THEN** I see a "Send" button with a send icon
  - **AND** the button is purple, rounded, and full-width
- Scenario — Form submission:
  - **WHEN** I click the Send button
  - **THEN** the form submission is handled (preventDefault)

### 2. Footer
- The page SHALL display a footer linking to Component Dock.
- Scenario — Footer link:
  - **WHEN** I scroll to the bottom of the page
  - **THEN** I see "Made with Component Dock" text
  - **AND** "Component Dock" links to https://www.componentdock.com/
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Page layout** — The page SHALL display a centered card on a purple gradient background with a background image of a city skyline.
  - Scenario — Full-screen background with purple overlay: **WHEN** I visit the Formsend page; **THEN** I see a full-screen background with a city skyline image; **AND** there is a purple overlay (opacity ~70%) covering the background
  - Scenario — Centered white card: **WHEN** I visit the Formsend page; **THEN** I see a white card centered on the page; **AND** the card has rounded corners and a shadow
- **Two-column layout** — The card SHALL have two columns on desktop — a decorative illustration on the left and the contact form on the right.
  - Scenario — Left column shows envelope illustration: **WHEN** I visit the Formsend page on desktop; **THEN** the left column displays a decorative envelope illustration; **AND** the illustration includes geometric shapes (triangles, circles)
  - Scenario — Left column hidden on mobile: **WHEN** I visit the Formsend page on mobile; **THEN** the left column illustration is hidden
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/formsend/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/formsend/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/formsend` ships on https://formsend.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formsend/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formsend/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formsend/public/CNAME` = `formsend.free.componentdock.com`
  and the package `homepage` = `https://formsend.free.componentdock.com`.
