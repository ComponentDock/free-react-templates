# Dropform — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/dropform`
> (<https://dropform.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Source design: **Contact Form V8** (`https://colorlib.com/wp/template/contact-form-v8/`) → recreation name **dropform**. Shipped at https://dropform.free.componentdock.com.

Scope: A clean contact form with a map background, white card layout, and green accent button. DropForm is a React recreation of the ColorLib free "Contact Form V8" template.

## Component breakdown

Render order as composed in `apps/dropform/src/App.tsx`:

### 1. ContactForm
- The system SHALL render a contact form with Full Name, Email, and Message fields.
- Scenario — Full Name field:
  - **GIVEN** the page is rendered
  - **WHEN** the form is displayed
  - **THEN** it SHALL contain a text input with placeholder "Full Name"
- Scenario — Email field:
  - **GIVEN** the page is rendered
  - **WHEN** the form is displayed
  - **THEN** it SHALL contain an email input with placeholder "Email address"
- Scenario — Message textarea:
  - **GIVEN** the page is rendered
  - **WHEN** the form is displayed
  - **THEN** it SHALL contain a textarea with placeholder "Your Message"

### 2. Footer
- The system SHALL render a footer section containing a link to `https://www.componentdock.com/` branded as "Component Dock".
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL contain a link to `https://www.componentdock.com/`
  - **AND** the link text SHALL mention "Component Dock"
  - [ ] Heading renders "Contact Us" left-aligned in card
  - [ ] Full Name, Email, and Message fields render with correct placeholders
  - [ ] "Send copy to my-email" checkbox unchecked by default
  - [ ] Checkbox toggles on click
  - [ ] "SEND EMAIL" button renders with green background
  - [ ] Checkbox and button aligned on same row
  - [ ] Footer links to Component Dock
  - [ ] No reference to ColorLib in any app source file
  - [ ] `public/CNAME` contains `dropform.free.componentdock.com`
  - [ ] `package.json` has `homepage` set to `https://dropform.free.componentdock.com`
  - [ ] Tests achieve 100% coverage (lines, functions, branches, statements)

### Cross-cutting requirements

- **Page layout and heading** — The system SHALL render a centered page with a map-like background and a white card panel containing the contact form. The heading "Contact Us" SHALL be displayed at the top of the card.
  - Scenario — Heading content: **GIVEN** the page is rendered; **WHEN** the heading is displayed; **THEN** it SHALL show the text "Contact Us"; **AND** it SHALL be left-aligned within the card; **AND** it SHALL have dark text color
- **Send copy checkbox** — The system SHALL render a checkbox labeled "Send copy to my-email" that is unchecked by default.
  - Scenario — Checkbox default state: **GIVEN** the page is rendered; **WHEN** the checkbox is displayed; **THEN** it SHALL be unchecked by default
  - Scenario — Checkbox toggle: **GIVEN** the page is rendered; **WHEN** the user clicks the checkbox; **THEN** it SHALL toggle between checked and unchecked states
- **Submit button** — The system SHALL render a green "SEND EMAIL" submit button.
  - Scenario — Button visibility: **GIVEN** the page is rendered; **WHEN** the button is displayed; **THEN** it SHALL show the text "SEND EMAIL"; **AND** it SHALL have a green background (`#4caf50`); **AND** it SHALL have white text
- **Form layout** — The checkbox and submit button SHALL be on the same row at the bottom of the form.
  - Scenario — Bottom row layout: **GIVEN** the page is rendered; **WHEN** the form bottom is displayed; **THEN** the checkbox SHALL be on the left; **AND** the submit button SHALL be on the right

## Verification

- [x] `apps/dropform` ships on https://dropform.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/dropform/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dropform/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropform/public/CNAME` = `dropform.free.componentdock.com`
  and the package `homepage` = `https://dropform.free.componentdock.com`.
