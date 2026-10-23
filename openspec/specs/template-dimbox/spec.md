# Template: DimBox (Confirmation Modal)
<!-- prep-status: shipped-as=relay -->
> **SHIPPED-UNDER** — the ColorLib `modal-08` design this prep describes already
> ships as `apps/relay` (<https://relay.free.componentdock.com>).
> Do not scaffold `apps/dimbox`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-relay/spec.md`.

## Purpose

Recreation of ColorLib **Modal 08** — a confirmation/modal dialog component
for newsletter subscriptions and account confirmations.

- **Source**: https://colorlib.com/wp/template/modal-08/
- **Preview URL**: https://preview.colorlib.com/theme/bootstrap/modal-08/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token               | Value                                      | Notes                                     |
| ------------------- | ------------------------------------------ | ----------------------------------------- |
| Font family         | `"Poppins", sans-serif`                    | Google Fonts, weights 300–800             |
| Brand color         | `#fb8691` (salmon pink)                    | Primary button bg, focus borders          |
| Gradient start      | `#915eff` (vivid purple)                   | Modal header background                   |
| Gradient end        | `#ff8e59` (orange)                         | Modal header background, 45deg            |
| Body text           | `#212529` (near-black)                     | Body copy                                 |
| Background          | `#ffffff` (white)                          | Page and modal body                       |
| Close button        | `#ffffff` on gradient header               | X icon, top-right, 40×40px                |
| Button radius       | `40px` (pill)                              | All primary buttons                       |
| Button bg           | `#fb8691`                                  | Filled state                              |
| Button border       | `1px solid #fb8691`                        | Outline on hover → transparent bg         |
| Button text         | `#ffffff`                                  |                                           |
| Modal shadow        | `0 10px 34px -15px rgba(0,0,0,0.24)`       | Elevated card feel                        |
| Modal max-width     | `600px`                                    |                                           |
| Modal header height | `230px`                                    | Gradient bar with skewed dividers         |
| Icon circle         | `200×200px, border-radius: 50%`            | Centered email/envelope icon              |
| Skewed decorations  | `::before` / `::after` skewY ±10deg, white | Angular separator between header and body |
| Transition          | `0.3s all ease`                            | On buttons and links                      |

## Visual description (from ColorLib screenshot)

The template shows a centered modal dialog on a white page. The top portion
of the modal is a vivid gradient header (purple→orange, 45deg) with an X
close button in the top-right corner. Below the header, the modal body is
white with centered text: "You've Got Mail!" in bold white over the gradient,
followed by a circular icon area (email envelope SVG), a subtitle
"We sent confirmation link to:", and the email address in bold. The launch
button on the page background is a pill-shaped salmon-pink button with white
text. Two skewed white triangle decorations create angular separators between
the gradient header and the white body.

## Structure (section order)

1. **Page section**: centered container with title "DimBox" and a pill button
   that triggers the modal
2. **Modal overlay**: semi-transparent dark backdrop
3. **Modal header**: gradient background (purple→orange), close button
4. **Modal body**: circular icon, heading, subtext, email address display
5. **Footer**: Component Dock link (required)

## Requirements

### Feature: DimBox template behaviour

Feature: DimBox confirmation modal

Background:
- **GIVEN** the user is on the DimBox page

#### Scenario: page renders with title and trigger button

- **THEN** I should see the heading "DimBox"
- **AND** I should see a button labeled "Open Confirmation Modal"

#### Scenario: modal opens on button click

- **WHEN** I click the "Open Confirmation Modal" button
- **THEN** a modal dialog should be visible
- **AND** the modal should display "You've Got Mail!" heading
- **AND** the modal should show an email icon
- **AND** the modal should display "We sent confirmation link to:"
- **AND** the modal should show "johndoe@gmail.com"

#### Scenario: modal closes on close button click

- **GIVEN** the modal is open
- **WHEN** I click the close button
- **THEN** the modal should not be visible

#### Scenario: modal closes on backdrop click

- **GIVEN** the modal is open
- **WHEN** I click outside the modal
- **THEN** the modal should not be visible

#### Scenario: modal closes on Escape key

- **GIVEN** the modal is open
- **WHEN** I press the Escape key
- **THEN** the modal should not be visible

#### Scenario: modal is accessible

- **GIVEN** the modal is open
- **THEN** the modal should have role="dialog"
- **AND** the close button should have aria-label="Close"

#### Scenario: page is responsive

- **WHEN** I resize the viewport to 375px width
- **THEN** the modal should still be visible and centered
- **AND** the button should be fully visible

#### Scenario: footer contains Component Dock link

- **THEN** I should see a link to "https://www.componentdock.com/"
- **AND** the link text should include "Component Dock"

## Verification checklist

- [ ] `npm run verify:app dimbox` passes (typecheck + lint + knip + fallow + test:coverage + build)
- [ ] Spec folder exists: `openspec/specs/template-dimbox/spec.md`
- [ ] Docs folder exists: `docs/templates/dimbox/tasks.md`
- [x] No references to `colorlib.com` or `preview.colorlib.com` in `apps/dimbox/` — superseded: shipped as `apps/relay`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `dimbox.free.componentdock.com`
- [ ] `package.json` homepage is `https://dimbox.free.componentdock.com`
- [ ] Modal has correct gradient: `linear-gradient(45deg, #915eff, #ff8e59)`
- [ ] Buttons are pill-shaped (`border-radius: 9999px`)
- [ ] Font is Poppins (loaded via Google Fonts link in index.html)
- [ ] Icon uses `lucide-react` Mail icon (not copied SVG)
- [ ] Placeholder image via `https://picsum.photos/seed/dimbox-1/200/200` if needed
- [ ] All 8 Gherkin scenarios pass
- [ ] Coverage: 100% lines/functions/branches/statements
