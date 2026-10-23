# Rosette — Implementation Tasks

Source design: **Colorlib Regform 20** (`https://colorlib.com/wp/template/colorlib-regform-20/`) → recreation name **rosette**. Shipped at https://rosette.free.componentdock.com.

Scope: A free, production-ready React registration form template with a pink/coral beauty theme. Split-screen layout with overlapping hero images on the left and a sign-up form (Name, Email, Password) with terms checkbox on the right. Designed for beauty, cosmetics, and lifestyle sign-up pages.

## Component breakdown

Render order as composed in `apps/rosette/src/App.tsx`:

### 1. HeroImages
- No dedicated spec block — hold this band to the design notes.

### 2. RegistrationForm
- Users SHALL see a "Sign Up" heading, three input fields (Name, Email, Password) each with a coral dot indicator, a Terms & Conditions checkbox, a "SIGN UP" submit button, and a "Login" link.
- Scenario — Form fields present:
  - **WHEN** the page loads
  - **THEN** the Name, Email, and Password input fields are rendered with placeholder text
- Scenario — Terms checkbox present:
  - **WHEN** the page loads
  - **THEN** a Terms & Conditions checkbox and link text are visible
- Scenario — Submit button present:
  - **WHEN** the page loads
  - **THEN** a "SIGN UP" button with coral styling is rendered

### 3. Footer
- Users SHALL see a footer with "More templates at Component Dock" linking to https://www.componentdock.com/.
- Scenario — Footer link:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to componentdock.com that opens in a new tab

### Cross-cutting requirements

- **Page layout renders correctly** — Users SHALL see a centered white card on a pink (#F8C8C8) full-page background with split-screen layout on desktop (images left, form right) and form-only on mobile.
  - Scenario — Desktop layout: **WHEN** the page loads on a desktop viewport; **THEN** the hero images and registration form are displayed side by side
  - Scenario — Mobile layout: **WHEN** the page loads on a mobile viewport; **THEN** only the registration form is visible (hero images hidden)
- **Form interaction works** — Users SHALL be able to type in all input fields, toggle the terms checkbox, and submit the form.
  - Scenario — Typing in name field: **WHEN** the user types in the Name field; **THEN** the field value updates
  - Scenario — Typing in email field: **WHEN** the user types in the Email field; **THEN** the field value updates
  - Scenario — Typing in password field: **WHEN** the user types in the Password field; **THEN** the field value updates
  - Scenario — Toggling terms checkbox: **WHEN** the user clicks the Terms checkbox; **THEN** the checkbox state toggles
  - Scenario — Form submission: **WHEN** the user clicks the SIGN UP button; **THEN** the form submits without error
- **Design tokens match the original** — The template SHALL use the coral/pink color palette (#E8888A brand, #F8C8C8 background, #E8888A dots/links) with Cormorant Garamond for the heading and Poppins for body text.
  - Scenario — Brand colors applied: **WHEN** the page renders; **THEN** the background is pink, the heading and button use coral, and input fields have light gray backgrounds
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/rosette/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/rosette/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/rosette` ships on https://rosette.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/rosette/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/rosette/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/rosette/public/CNAME` = `rosette.free.componentdock.com`
  and the package `homepage` = `https://rosette.free.componentdock.com`.
