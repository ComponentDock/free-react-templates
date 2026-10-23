# Regsnap — Implementation Tasks

Source design: **Colorlib Regform 2** (`https://colorlib.com/wp/template/colorlib-regform-2/`) → recreation name **regsnap**. Shipped at https://regsnap.free.componentdock.com.

Scope: Recreate Colorlib Regform 2 as a React template named Regsnap. This is a food class registration form with a split-screen card layout: hero image on the left, form fields on the right, set against a vibrant red background.

## Component breakdown

Render order as composed in `apps/regsnap/src/App.tsx`:

### 1. HeroImage
- No dedicated spec block — hold this band to the design notes.

### 2. RegistrationForm
- The form SHALL include: Name (text input), Birthdate (text input with calendar icon), Gender (select dropdown: Male/Female/Other), Class (select dropdown: Class 1/2/3), Registration Code (text input), and a green Search submit button.
- Scenario — All fields rendered:
  - **GIVEN** the page loads
  - **WHEN** I inspect the form
  - **THEN** the Name, Birthdate, Gender, Class, and Registration Code fields are present
  - **AND** the Search button is visible
- Scenario — Form interaction:
  - **GIVEN** the form is displayed
  - **WHEN** I type in the Name field
  - **THEN** the Name field updates with the entered text
- Scenario — Select interactions:
  - **GIVEN** the form is displayed
  - **WHEN** I select "Male" from the Gender dropdown
  - **THEN** the Gender dropdown shows "Male"
  - **WHEN** I select "Class 2" from the Class dropdown
  - **THEN** The Class dropdown shows "Class 2"
- Scenario — Form submission:
  - **GIVEN** the form is displayed
  - **WHEN** I click the Search button
  - **THEN** the form submits without error

### 3. Footer
- The footer SHALL display "More templates at Component Dock" with a link to https://www.componentdock.com/ that opens in a new tab.
- Scenario — Footer link present:
  - **GIVEN** the page loads
  - **WHEN** I scroll to the footer
  - **THEN** a link to componentdock.com is visible with target="_blank"

### Cross-cutting requirements

- **Split-screen card layout** — The template SHALL render a centered white card (max-width 960px, 10px radius, drop shadow) on a full-page red (#fa4251) background. On desktop the card is split into a left hero image (29.1%) and a right form body (70.9%). On mobile the card stacks vertically with the image on top.
  - Scenario — Desktop layout: **GIVEN** the viewport is wider than 768px; **WHEN** the page loads; **THEN** the card displays a side-by-side layout with the image on the left and the form on the right
  - Scenario — Mobile layout: **GIVEN** the viewport is 768px or narrower; **WHEN** the page loads; **THEN** the card stacks vertically with the image above the form
- **Design fidelity** — The template SHALL use Roboto font (Google Fonts), a vibrant red (#fa4251) page background, white card, bottom-border-only inputs (#e5e5e5), green (#57b846) submit button with 3px border-radius, and placeholder images from picsum.photos (seeded).
  - Scenario — Design tokens applied: **GIVEN** the page loads; **WHEN** I inspect the page; **THEN** the background color is red (#fa4251); **AND** the form card has a white background with rounded corners and shadow; **AND** inputs have bottom borders only
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/regsnap/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/regsnap/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/regsnap` ships on https://regsnap.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regsnap/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regsnap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regsnap/public/CNAME` = `regsnap.free.componentdock.com`
  and the package `homepage` = `https://regsnap.free.componentdock.com`.
