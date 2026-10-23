# Reachout — Implementation Tasks

Source design: **Contact Form 16** (`https://colorlib.com/wp/template/contact-form-16/`) → recreation name **reachout**. Shipped at https://reachout.free.componentdock.com.

Row note: `TEMPLATES.md` links the slug `contact-form-13` for this app while the spec records `contact-form-16`. This brief follows the SPEC — the disagreement is recorded, not resolved (ROW-MULTIPLICITY class, see the SPEC-REFERENCE audit, main `4820f472b`).

Scope: Reachout is a modern, professional contact form page inspired by ColorLib's Contact Form 16. The design features a full-width hero banner with a dark overlay, a two-column body (contact info sidebar on the left, form on the right), underline-style form fields, and a minimal footer with Component Dock branding.

## Component breakdown

Render order as composed in `apps/reachout/src/App.tsx`:

### 1. Hero
- The page SHALL display a full-width hero banner section with a dark background containing a centered heading "Get In Touch" and a subtitle inviting users to send a message.
- Scenario — Hero section visible on page load:
  - **WHEN** the page loads
  - **THEN** a heading "Get In Touch" is visible
  - **AND** a subtitle "We'd love to hear from you" is visible

### 2. ContactSidebar
- The page SHALL display a left-column sidebar with contact information including address, phone, and email, each with a circular icon container.
- Scenario — Contact info rendered correctly:
  - **WHEN** the page loads
  - **THEN** the text "Contact Information" is visible
  - **AND** address, phone, and email details are visible
  - **AND** each info item has a circular white icon container

### 3. ContactForm
- The page SHALL display a contact form with Full Name, Email Address, Subject, and Message fields styled with bottom-border-only (underline) inputs, plus a "Send Message" submit button.
- Scenario — Form fields are interactive:
  - **WHEN** the page loads
  - **THEN** all four form fields are visible
  - **AND** the "Send Message" button is visible
  - **WHEN** the user types in the Full Name field
  - **THEN** the field value updates
- Scenario — Form submission handled:
  - **WHEN** the user clicks "Send Message"
  - **THEN** the page does not navigate away (form submit is prevented)

### 4. Footer
- The page SHALL display a footer with a link to https://www.componentdock.com/ labeled "Component Dock" that opens in a new tab.
- Scenario — Footer link correct:
  - **WHEN** the page loads
  - **THEN** a link with text "Component Dock" is visible
  - **AND** the link href is "https://www.componentdock.com/"
  - **AND** the link opens in a new tab (target="_blank")

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/reachout/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/reachout/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/reachout` ships on https://reachout.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/reachout/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/reachout/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reachout/public/CNAME` = `reachout.free.componentdock.com`
  and the package `homepage` = `https://reachout.free.componentdock.com`.
