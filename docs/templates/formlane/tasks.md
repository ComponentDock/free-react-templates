# Formlane — Implementation Tasks

Source design: **Colorlib Regform 34** (`https://colorlib.com/wp/template/colorlib-regform-34/`) → recreation name **formlane**. Shipped at https://formlane.free.componentdock.com.

Scope: A two-in-one sign-up/sign-in form template with a split-layout card on a gradient background. Recreation of ColorLib "Reg Form V34" (`colorlib-regform-34`).

## Component breakdown

Render order as composed in `apps/formlane/src/App.tsx`:

### 1. FormCard
- Users SHALL see a white card with a hero image on the left and a dark form panel on the right.
- Scenario — Card displays split layout:
  - **GIVEN** the user opens Formlane on desktop (>991px)
  - **THEN** a white card with rounded corners (8px) and drop shadow is visible
  - **AND** the left side shows a hero image
  - **AND** the right side shows a dark blue-gray (#3D5983) form panel

### 2. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Component Dock

### Cross-cutting requirements

- **Page renders gradient background** — Users SHALL see a diagonal gradient background from blue (#009EFD) to green (#2AF598) filling the viewport.
  - Scenario — Page renders gradient background: **GIVEN** the user opens Formlane; **THEN** the page background is a diagonal gradient from blue (#009EFD) to green (#2AF598); **AND** the form card is centered in the viewport
- **Tab switching between Sign Up and Sign In** — Users SHALL be able to switch between Sign Up and Sign In tabs.
  - Scenario — Tab switching between Sign Up and Sign In: **GIVEN** the user opens Formlane; **THEN** the "Sign Up" tab is active with a teal (#30E1DF) bottom border; **AND** the Sign Up form is visible with fields: Username, E-Mail, Password, Confirm Password; **WHEN** the user clicks the "Sign In" tab; **THEN** the "Sign In" tab becomes active with a teal (#30E1DF) bottom border; **AND** the Sign In form is visible with fields: Username, E-Mail, Password, Confirm Password; **AND** the Sign Up form is hidden
- **Floating label animation on input focus** — Users SHALL see floating labels that animate up on input focus.
  - Scenario — Floating label animation on input focus: **GIVEN** the Sign Up form is visible; **WHEN** the user focuses on the Username input; **THEN** the label "Username" floats above the input; **AND** the input underline turns green (#53C83C)
- **Input validation with :valid pseudo-class** — Labels SHALL remain in the floated position when the user has typed a value.
  - Scenario — Input validation with :valid pseudo-class: **GIVEN** the user has typed a value in the Username field; **THEN** the label remains in the floated position; **AND** the underline remains green (#53C83C)
- **Submit button hover state** — Users SHALL see a hover state on the submit button.
  - Scenario — Submit button hover state: **GIVEN** the form is visible; **WHEN** the user hovers over the "Register" button; **THEN** the button background changes from white (#fff) to light gray (#ccc)
- **Mobile responsive layout** — The card SHALL stack vertically on mobile devices (<=991px).
  - Scenario — Mobile responsive layout: **GIVEN** the user opens Formlane on mobile (<=991px); **THEN** the card stacks vertically with image on top; **AND** the form panel sits below the image; **AND** the tab bar has appropriate padding for touch targets; [ ] Gradient background renders correctly (136deg, blue→green); [ ] Card centered with correct shadow and radius; [ ] Left panel shows placeholder hero image; [ ] Right panel has #3D5983 background; [ ] Two tabs: Sign Up (active default) and Sign In; [ ] Active tab has teal bottom border (#30E1DF) and bold white text; [ ] Inactive tab has light gray text and semi-transparent bottom border; [ ] Tab click switches visible form content; [ ] Floating labels animate up on focus; [ ] Focus border turns green (#53C83C) with scaleX animation; [ ] Register button: white bg, dark text, 5px radius, hover → gray; [ ] Sign In button: same style, label "Sign In"; [ ] Mobile: card stacks vertically at ≤991px; [ ] Footer links to Component Dock (https://www.componentdock.com/); [ ] No references to ColorLib in app code

## Verification

- [x] `apps/formlane` ships on https://formlane.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/formlane/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/formlane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formlane/public/CNAME` = `formlane.free.componentdock.com`
  and the package `homepage` = `https://formlane.free.componentdock.com`.
