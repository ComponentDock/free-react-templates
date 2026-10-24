# Template: WizDeck (Account Creation Wizard)
<!-- prep-status: shipped-as=runic -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-wizard-6` design this prep describes already
> ships as `apps/runic` (<https://runic.free.componentdock.com>).
> Do not scaffold `apps/wizdeck`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-runic/spec.md`.

## Purpose

Recreation of ColorLib Wizard 6 — a free 3-step account creation/signup wizard
form template with a gradient background, centered white card, profile picture
upload, form fields with step indicators, and a "Continue" CTA button. The
original is a Bootstrap-based snippet for user onboarding flows.

- **Source template**: [Colorlib Wizard 6](https://colorlib.com/wp/template/colorlib-wizard-6/)
- **New Name**: `wizdeck` (App directory: `apps/wizdeck`, Package: `@free-react-templates/wizdeck`)
- **Category**: Form / Account Creation Wizard
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-6/` (unreachable at prep time — 404; analysis based on screenshot + source page CSS) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html` — HTTP 200, 7,014 B, title `FormWizard_v6`.
>
> Sheet: `https://colorlib.com/etc/bwiz/colorlib-wizard-6/css/style.css?v=59e273aa` (10,428 B).
> Faces it actually declares: `Poppins-Medium`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->
- **Source design:** ColorLib "Colorlib Wizard 6" — https://colorlib.com/wp/template/colorlib-wizard-6/

## Design tokens

> Extracted from the screenshot analysis and source page inline CSS — **re-probed 2026-10-23: the demo serves** (measured record below).
> Preview URL returned 404; tokens derived from visual analysis of the official
> screenshot and page stylesheet.

| Token                          | Value                         | Notes                                                            |
| ------------------------------ | ----------------------------- | ---------------------------------------------------------------- |
| Font family (body)             | `"Nunito", sans-serif`        | Rounded sans-serif; weights 400, 600, 700                       |
| Background gradient (top)      | `#B4BDE8`                     | Soft periwinkle blue                                             |
| Background gradient (bottom)   | `#E4B9E8`                     | Soft lavender pink                                               |
| Background gradient direction  | `linear-gradient(to bottom, #B4BDE8, #E4B9E8)` | Full-viewport vertical gradient      |
| Card background                | `#FFFFFF`                     | White card container                                             |
| Card border-radius             | `16px`                        | Rounded corners on form card                                     |
| Card box-shadow                | `0 8px 32px rgba(0,0,0,0.1)` | Soft elevated shadow                                             |
| Card width                     | `~600px`                      | Centered, max-width                                              |
| Heading text (on gradient)     | `rgba(255,255,255,0.6)`       | Semi-transparent white uppercase heading on gradient background  |
| Form input background          | `#FFFFFF`                     | White inputs                                                     |
| Form input border              | `1px solid #E0E0E0`           | Light gray border                                                |
| Form input border-radius       | `8px`                         | Rounded input corners                                            |
| Placeholder text               | `#999999`                     | Uppercase, small sans-serif                                      |
| Active field indicator         | `#F0A0C8`                     | Pink filled circle on active field                               |
| Inactive field indicator       | `#E0E0E0`                     | Gray outline circle on inactive fields                           |
| Profile circle border          | `#B4BDE8`                     | Periwinkle blue border around profile image                      |
| CTA button background          | `#B4BDE8`                     | Periwinkle blue (matches gradient top)                           |
| CTA button text                | `#FFFFFF`                     | White uppercase text with arrow                                  |
| CTA button border-radius       | `24px`                        | Pill-shaped button                                               |
| Step indicator (active)        | `#FFFFFF`                     | White filled circle                                              |
| Step indicator (inactive)      | `#CCCCCC`                     | Gray circle                                                      |
| Body text color                | `#4B4B4B`                     | Dark gray for body text                                          |
| Input focus border             | `#B4BDE8`                     | Periwinkle blue on focus                                         |

<!-- slug-token-agreement: colorlib-wizard-6/body -->
> **Cross-prep token conflict, re-measured 2026-10-25.** This prep states the design's body as `#4b4b4b`. The ColorLib `colorlib-wizard-6` design's live assets
> (`https://colorlib.com/etc/bwiz/colorlib-wizard-6/index.html`, 1 stylesheet fetched — every linked sheet, the inline `<style>` blocks and the `style="…"` attributes) paint that colour **0 times**, in hex notation and in `rgb()`/`rgba()` notation, so it is not on the design.
> The sibling prep `potion` (`openspec/specs/template-potion/spec.md`) states `#808080`, which those assets paint 5 times.
> The `body` row above is prep history for this role; re-read the declaration that owns the role before painting it, and see `docs/slug-token-agreement.md`.
<!-- /slug-token-agreement -->

## Requirements

### Feature: WizDeck — 3-Step Account Creation Wizard

#### Scenario: Page loads with gradient background and centered card

- **GIVEN** the user opens the WizDeck page
- **THEN** a full-viewport gradient background should be visible (top: periwinkle blue #B4BDE8, bottom: lavender pink #E4B9E8)
- **AND** a white card with rounded corners (16px) should be centered horizontally
- **AND** the card should have a soft drop shadow
- **AND** a large semi-transparent white heading "TELL US ABOUT YOURSELF" should appear above the card on the gradient background

#### Scenario: Step indicators show current progress

- **GIVEN** the page is loaded on step 1
- **THEN** 3 step indicator dots should be visible below the form card
- **AND** the first dot should be filled white (active)
- **AND** the second and third dots should be gray (#CCCCCC, inactive)
- **AND** clicking through steps should update which dot is active

#### Scenario: Step 1 — Personal Information

- **GIVEN** the user is on step 1
- **THEN** a circular profile picture placeholder should be visible with a periwinkle blue border
- **AND** a "CHOOSE PICTURE" label with camera icon should appear below the circle
- **AND** form fields should include "FIRST NAME", "LAST NAME", "TEAM NAME", "EMAIL", and "CREATE A PASSWORD"
- **AND** each field should have a small circle indicator to its left (inactive: gray, active: pink #F0A0C8)
- **AND** the fields should be arranged in two columns for FIRST NAME / LAST NAME and TEAM NAME / EMAIL
- **AND** CREATE A PASSWORD should be full-width below
- **AND** a "CONTINUE →" pill button (periwinkle blue #B4BDE8 background, white text) should be visible at the bottom

#### Scenario: Profile picture selection

- **GIVEN** the user is on step 1
- **AND** the profile picture placeholder is displayed
- **WHEN** the user clicks "CHOOSE PICTURE"
- **THEN** a file picker dialog should open
- **AND** upon selecting an image it should display within the circular frame

#### Scenario: Step 2 — Additional Details

- **GIVEN** the user completes step 1 and clicks "CONTINUE →"
- **THEN** step 2 should become active
- **AND** the step indicator should update (first dot gray, second dot white)
- **AND** new form fields appropriate for a second onboarding step should be displayed
- **AND** a "CONTINUE →" button should be visible

#### Scenario: Step 3 — Confirmation / Completion

- **GIVEN** the user completes step 2 and clicks "CONTINUE →"
- **THEN** step 3 should become active
- **AND** the step indicator should update (first and second dots gray, third dot white)
- **AND** a completion/confirmation view should be displayed
- **AND** a "SUBMIT" or "FINISH" button should be visible

#### Scenario: Step navigation preserves entered data

- **GIVEN** the user has filled fields on step 1
- **WHEN** the user advances to step 2
- **AND** then navigates back to step 1
- **THEN** all previously entered field values should be preserved

#### Scenario: Field focus styling

- **GIVEN** the user clicks on a form input field
- **THEN** the input border should change to periwinkle blue (#B4BDE8)
- **AND** the field's left indicator circle should turn pink (#F0A0C8)

#### Scenario: Responsive layout on mobile

- **GIVEN** the user views the page on a viewport width less than 768px
- **THEN** the card should take full width with horizontal padding
- **AND** form fields should stack vertically (single column)
- **AND** the heading should remain centered above the card

#### Scenario: Component Dock footer

- **GIVEN** the page is fully loaded
- **THEN** a footer should be present below the main content
- **AND** the footer should contain a link to "https://www.componentdock.com/" branded as "Component Dock"

## Verification checklist

- [ ] Gradient background renders correctly (top: #B4BDE8, bottom: #E4B9E8)
- [ ] White card centered with 16px border-radius and soft shadow
- [ ] Heading text is semi-transparent white on gradient background
- [ ] Profile picture circle with periwinkle blue border
- [ ] "CHOOSE PICTURE" with camera icon (use lucide-react Camera icon)
- [ ] Form fields arranged in 2-column grid (First/Last Name, Team/Email) + full-width password
- [ ] Left indicator circles: pink (#F0A0C8) for active, gray (#E0E0E0) for inactive
- [ ] Placeholder text uppercase, gray (#999)
- [ ] Input focus border turns periwinkle blue (#B4BDE8)
- [ ] "CONTINUE →" pill button (#B4BDE8 bg, 24px radius, white text)
- [ ] 3 step indicator dots (active: white, inactive: #CCCCCC)
- [ ] Step transitions work (3 steps total)
- [ ] Field values preserved across step navigation
- [ ] Responsive: stacks on mobile (<768px)
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Tests pass at 100% coverage
- [ ] `scripts/verify-app.sh wizdeck` passes
