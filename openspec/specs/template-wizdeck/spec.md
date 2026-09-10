# Template: WizDeck (Account Creation Wizard)

## Purpose

Recreation of ColorLib Wizard 6 — a free 3-step account creation/signup wizard
form template with a gradient background, centered white card, profile picture
upload, form fields with step indicators, and a "Continue" CTA button. The
original is a Bootstrap-based snippet for user onboarding flows.

- **Source template**: [Colorlib Wizard 6](https://colorlib.com/wp/template/colorlib-wizard-6/)
- **New Name**: `wizdeck` (App directory: `apps/wizdeck`, Package: `@free-react-templates/wizdeck`)
- **Category**: Form / Account Creation Wizard
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-6/` (unreachable at prep time — 404; analysis based on screenshot + source page CSS)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the screenshot analysis and source page inline CSS.
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

## Gherkin requirements

### Feature: WizDeck — 3-Step Account Creation Wizard

Scenario: Page loads with gradient background and centered card
  Given the user opens the WizDeck page
  Then a full-viewport gradient background should be visible (top: periwinkle blue #B4BDE8, bottom: lavender pink #E4B9E8)
  And a white card with rounded corners (16px) should be centered horizontally
  And the card should have a soft drop shadow
  And a large semi-transparent white heading "TELL US ABOUT YOURSELF" should appear above the card on the gradient background

Scenario: Step indicators show current progress
  Given the page is loaded on step 1
  Then 3 step indicator dots should be visible below the form card
  And the first dot should be filled white (active)
  And the second and third dots should be gray (#CCCCCC, inactive)
  And clicking through steps should update which dot is active

Scenario: Step 1 — Personal Information
  Given the user is on step 1
  Then a circular profile picture placeholder should be visible with a periwinkle blue border
  And a "CHOOSE PICTURE" label with camera icon should appear below the circle
  And form fields should include "FIRST NAME", "LAST NAME", "TEAM NAME", "EMAIL", and "CREATE A PASSWORD"
  And each field should have a small circle indicator to its left (inactive: gray, active: pink #F0A0C8)
  And the fields should be arranged in two columns for FIRST NAME / LAST NAME and TEAM NAME / EMAIL
  And CREATE A PASSWORD should be full-width below
  And a "CONTINUE →" pill button (periwinkle blue #B4BDE8 background, white text) should be visible at the bottom

Scenario: Profile picture selection
  Given the user is on step 1
  And the profile picture placeholder is displayed
  When the user clicks "CHOOSE PICTURE"
  Then a file picker dialog should open
  And upon selecting an image it should display within the circular frame

Scenario: Step 2 — Additional Details
  Given the user completes step 1 and clicks "CONTINUE →"
  Then step 2 should become active
  And the step indicator should update (first dot gray, second dot white)
  And new form fields appropriate for a second onboarding step should be displayed
  And a "CONTINUE →" button should be visible

Scenario: Step 3 — Confirmation / Completion
  Given the user completes step 2 and clicks "CONTINUE →"
  Then step 3 should become active
  And the step indicator should update (first and second dots gray, third dot white)
  And a completion/confirmation view should be displayed
  And a "SUBMIT" or "FINISH" button should be visible

Scenario: Step navigation preserves entered data
  Given the user has filled fields on step 1
  When the user advances to step 2
  And then navigates back to step 1
  Then all previously entered field values should be preserved

Scenario: Field focus styling
  Given the user clicks on a form input field
  Then the input border should change to periwinkle blue (#B4BDE8)
  And the field's left indicator circle should turn pink (#F0A0C8)

Scenario: Responsive layout on mobile
  Given the user views the page on a viewport width less than 768px
  Then the card should take full width with horizontal padding
  And form fields should stack vertically (single column)
  And the heading should remain centered above the card

Scenario: Component Dock footer
  Given the page is fully loaded
  Then a footer should be present below the main content
  And the footer should contain a link to "https://www.componentdock.com/" branded as "Component Dock"

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
