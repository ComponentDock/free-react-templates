# Regease — Implementation Tasks

Source design: **Colorlib Regform 9** (`https://colorlib.com/wp/template/colorlib-regform-9/`) → recreation name **regease**. Shipped at https://regease.free.componentdock.com.

Scope: Regease is a free gaming-themed email signup form template that recreates ColorLib "Colorlib Reg Form V9" (https://colorlib.com/wp/template/colorlib-regform-9/) as a React 19 + Tailwind CSS 4 + TypeScript application.

## Component breakdown

Render order as composed in `apps/regease/src/App.tsx`:

### 1. SignupCard
- Users SHALL see a signup card with a semi-transparent gold/brown background positioned on the right side of the container.
- Scenario — Card is positioned on the right:
  - WHEN I visit the Regease page
  - THEN I should see a signup card
  - AND the card should be positioned on the right side
- Scenario — Card has gold/brown background:
  - WHEN I visit the Regease page
  - THEN the signup card should have a semi-transparent gold/brown background

### 2. Footer
- Users SHALL see a "Sign up" heading, a description about discount, name input, email input, password input with show/hide toggle, terms checkbox, and "Sign up" submit button plus "Sign in" link.
- Scenario — Form displays heading and description:
  - WHEN I visit the Regease page
  - THEN I should see a "Sign up" heading
  - AND I should see a description mentioning discount and a game title
- Scenario — Form displays all input fields:
  - WHEN I visit the Regease page
  - THEN I should see a name input with placeholder "Your Name"
  - AND I should see an email input with placeholder "Email"
  - AND I should see a password input with placeholder "Password"
  - AND I should see a terms checkbox
  - AND I should see a "Sign up" submit button
  - AND I should see a "Sign in" link

### Cross-cutting requirements

- **Page layout and branding** — Users SHALL see a full-page background image, a centered container with a semi-transparent overlay, and a signup card positioned on the right side of the container, with document title "Regease — Gaming Signup Form" and a Component Dock footer link.
  - Scenario — Page loads with correct title and layout: WHEN I visit the Regease page; THEN I should see "Regease — Gaming Signup Form" in the document title; AND I should see a full-page background image covering the viewport; AND I should see a centered container with max-width
  - Scenario — Footer links to Component Dock: WHEN I visit the Regease page; THEN I should see a link to "https://www.componentdock.com/"; AND the link should open in a new tab; AND the link text should contain "Component Dock"
- **Password visibility toggle** — Users SHALL be able to toggle password visibility using an eye icon button.
  - Scenario — Password starts hidden: WHEN I visit the Regease page; THEN the password input should have type "password"
  - Scenario — Clicking toggle shows password: WHEN I click the password toggle button; THEN the password input should have type "text"
  - Scenario — Clicking toggle again hides password: WHEN I click the password toggle button twice; THEN the password input should have type "password"
- **Form accepts user input** — Users SHALL be able to type in all form fields and toggle the terms checkbox.
  - Scenario — Form accepts text input: WHEN I type "Jane Doe" in the name field; THEN the name field should contain "Jane Doe"
  - Scenario — Form accepts email input: WHEN I type "jane@example.com" in the email field; THEN the email field should contain "jane@example.com"
  - Scenario — Terms checkbox toggles: WHEN I click the terms checkbox; THEN the checkbox should be checked; WHEN I click the terms checkbox again; THEN the checkbox should be unchecked
- **Responsive layout** — Users SHALL see a properly formatted layout on both desktop and mobile devices.
  - Scenario — Mobile layout: WHEN I view on a mobile viewport; THEN the card should take full width; AND the submit button should be full width
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/regease/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/regease/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/regease` ships on https://regease.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regease/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regease/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regease/public/CNAME` = `regease.free.componentdock.com`
  and the package `homepage` = `https://regease.free.componentdock.com`.
