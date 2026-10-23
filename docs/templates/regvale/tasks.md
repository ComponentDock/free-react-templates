# Regvale — Implementation Tasks

Source design: **Colorlib Regform 36** (`https://colorlib.com/wp/template/colorlib-regform-36/`) → recreation name **regvale**. Shipped at https://regvale.free.componentdock.com.

Scope: Recreation of ColorLib Regform 36 (https://colorlib.com/wp/template/colorlib-regform-36/) as a React 19 + Tailwind CSS 4 registration form template. Preview was unavailable at time of implementation; screenshot used as primary reference.

## Component breakdown

Render order as composed in `apps/regvale/src/App.tsx`:

### 1. RegistrationCard
- Users SHALL see a centered registration card with a heading and subtitle.
- Scenario — Heading and subtitle visible:
  - WHEN I visit the Regvale page
  - THEN I see a heading "Create Account"
  - AND I see a subtitle about creating an account

### 2. Footer
- Users SHALL see a footer with a link to Component Dock.
- Scenario — Footer link present:
  - WHEN I visit the Regvale page
  - THEN I see a footer link to "https://www.componentdock.com/"

### Cross-cutting requirements

- **Form fields present** — Users SHALL see all required registration form fields.
  - Scenario — All fields visible: WHEN I visit the Regvale page; THEN I see input fields for "First Name", "Last Name", "Email", "Password", "Confirm Password"; AND I see a "Register" button
- **First and Last Name side by side** — Users SHALL see First Name and Last Name inputs on the same row.
  - Scenario — Name fields in a row: WHEN I visit the Regvale page; THEN the "First Name" and "Last Name" inputs are on the same row
- **Form submission** — Users SHALL be able to submit the registration form.
  - Scenario — Form submits without error: WHEN I visit the Regvale page; AND I fill in all required fields; AND I click "Register"; THEN the form submits without error
- **Side image visible on desktop** — Users SHALL see an image on the right side of the card on desktop screens.
  - Scenario — Image visible: WHEN I visit the Regvale page; THEN I see an image on the right side of the card
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/regvale/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/regvale/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/regvale` ships on https://regvale.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regvale/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regvale/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regvale/public/CNAME` = `regvale.free.componentdock.com`
  and the package `homepage` = `https://regvale.free.componentdock.com`.
