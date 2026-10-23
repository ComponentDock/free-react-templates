# Regpeak — Implementation Tasks

Source design: **Colorlib Regform 32** (`https://colorlib.com/wp/template/colorlib-regform-32/`) → recreation name **regpeak**. Shipped at https://regpeak.free.componentdock.com.

Scope: A split-screen registration form with a dark-to-cyan gradient background, left-side image panel, and a centered white card containing the form. Recreation of **Colorlib Reg Form V32**.

## Component breakdown

Render order as composed in `apps/regpeak/src/App.tsx`:

### 1. RegistrationCard
- The page SHALL render a white card with 8px border-radius, max-width 968px, displayed as a horizontal flex container with an image panel on the left and the form on the right.
- Scenario — Card layout on desktop:
  - **GIVEN** the viewport is wider than 991px
  - **WHEN** the card is displayed
  - **THEN** it SHALL be a flex row with the image panel on the left
  - **AND** it SHALL have a white (#fff) background
  - **AND** it SHALL have 8px border-radius
- Scenario — Card stacks on mobile:
  - **GIVEN** the viewport is 991px or narrower
  - **WHEN** the card is displayed
  - **THEN** it SHALL stack vertically (flex-direction: column)
  - **AND** the image panel SHALL appear on top spanning full width

### 2. Footer
- The template SHALL include a footer linking to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer is present:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is visible
  - **THEN** it SHALL contain a link to https://www.componentdock.com/
  - **AND** the link text SHALL include "Component Dock"
  - [ ] Gradient background renders correctly (136deg, #000046 → #1cb5e0)
  - [ ] Card is centered both horizontally and vertically
  - [ ] Image panel on left (desktop) / top (mobile) with correct border-radius
  - [ ] Form heading "Register Form" centered, Nunito Bold, #333, 35px
  - [ ] Four inputs rendered with correct placeholders
  - [ ] Input bottom border: 2px #e5e5e5, focus: 2px #fe892a
  - [ ] Register button: #fe892a, 160px wide, 6px radius, white text
  - [ ] Button hover: #e37b27
  - [ ] Mobile responsive stacking at ≤991px
  - [ ] Footer links to componentdock.com
  - [ ] No references to ColorLib in app code
  - [ ] Tests pass with 100% coverage

### Cross-cutting requirements

- **Full-viewport gradient background** — The page SHALL render a full-height gradient background from dark navy (#000046) to bright cyan (#1cb5e0) at 136 degrees, centering its content both horizontally and vertically.
  - Scenario — Gradient background renders: **GIVEN** the page is rendered; **WHEN** the background is displayed; **THEN** it SHALL occupy the full viewport height; **AND** it SHALL have a linear gradient from #000046 to #1cb5e0 at 136deg; **AND** its content SHALL be centered horizontally and vertically
- **Image panel** — The left side of the card SHALL display a decorative image placeholder with matching border-radius (top-left and bottom-left on desktop; top-left and top-right on mobile).
  - Scenario — Desktop image panel: **GIVEN** the viewport is wider than 991px; **WHEN** the image panel is displayed; **THEN** it SHALL have 8px border-radius on top-left and bottom-left
  - Scenario — Mobile image panel: **GIVEN** the viewport is 991px or narrower; **WHEN** the image panel is displayed; **THEN** it SHALL span full width; **AND** it SHALL have 8px border-radius on top-left and top-right
- **Form heading** — The form section SHALL display a centered heading "Register Form" in bold Nunito font, color #333, size 35px.
  - Scenario — Heading text and styling: **GIVEN** the form section is rendered; **WHEN** the heading is displayed; **THEN** it SHALL show the text "Register Form"; **AND** it SHALL be centered; **AND** it SHALL use Nunito Bold font at 35px; **AND** it SHALL have color #333
- **Form fields** — The form SHALL contain four input fields: "Your Name" (text), "Email Address" (email), "Password" (password), and "Confirm Password" (password), each with underline-style bottom borders.
  - Scenario — Four fields rendered: **GIVEN** the form is rendered; **WHEN** the fields are displayed; **THEN** there SHALL be a text input with placeholder "Your Name"; **AND** there SHALL be an email input with placeholder "Email Address"; **AND** there SHALL be a password input with placeholder "Password"; **AND** there SHALL be a password input with placeholder "Confirm Password"
  - Scenario — Underline-style input borders: **GIVEN** the form fields are rendered; **WHEN** an input is in its default state; **THEN** it SHALL have a bottom border of 2px solid #e5e5e5; **AND** it SHALL have transparent borders on all other sides
  - Scenario — Focus accent on inputs: **GIVEN** a user focuses on a form field; **WHEN** the field is focused; **THEN** the bottom border color SHALL change to #fe892a (orange accent)
- **Register button** — The form SHALL contain a centered "Register" submit button with an orange (#fe892a) background, white text, 6px border-radius, and a subtle box-shadow.
  - Scenario — Button appearance: **GIVEN** the form is rendered; **WHEN** the Register button is displayed; **THEN** it SHALL have a background color of #fe892a; **AND** it SHALL have white (#fff) text; **AND** it SHALL have 6px border-radius; **AND** it SHALL be 160px wide; **AND** it SHALL have font-size 18px, bold, uppercase
  - Scenario — Button hover state: **GIVEN** a user hovers over the Register button; **WHEN** the button is hovered; **THEN** the background color SHALL change to #e37b27 (darker orange)

## Verification

- [x] `apps/regpeak` ships on https://regpeak.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regpeak/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regpeak/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regpeak/public/CNAME` = `regpeak.free.componentdock.com`
  and the package `homepage` = `https://regpeak.free.componentdock.com`.
