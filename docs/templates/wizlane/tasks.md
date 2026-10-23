# Wizlane — Implementation Tasks

Source design: **Colorlib Wizard 8** (`https://colorlib.com/wp/template/colorlib-wizard-8/`) → recreation name **wizlane**. Shipped at https://wizlane.free.componentdock.com.

Scope: - **Recreation of ColorLib source**: Colorlib Wizard 8 (`https://colorlib.com/wp/template/colorlib-wizard-8/`) **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-8/` (404 at time of prep; design captured from screenshot + ColorLib page description + CSS tokens) **New Name**: `wizlane` (App directory: `apps/wizlane`, Pack…

## Component breakdown

Render order as composed in `apps/wizlane/src/App.tsx`:

### 1. WizardForm
- Users SHALL be able to navigate through a 4-step checkout wizard to complete a food store order.
- Scenario — Step 1 displays basic details:
  - **WHEN** the user loads the page
  - **THEN** the wizard shows Step 1 ("BASIC DETAILS") with fields for First Name, Last Name, Email ID, User ID, Country, State, and City
- Scenario — Step 2 displays account/security details:
  - **WHEN** the user clicks "CONTINUE" on Step 1
  - **THEN** the wizard shows Step 2 with account/security fields (password entry, username confirmation)
- Scenario — Step 3 displays shipping details:
  - **WHEN** the user clicks "CONTINUE" on Step 2
  - **THEN** the wizard shows Step 3 with shipping/delivery address fields
- Scenario — Step 4 displays payment details:
  - **WHEN** the user clicks "CONTINUE" on Step 3
  - **THEN** the wizard shows Step 4 with payment information fields (card number, expiry, CVV)

### 2. Footer
- Every template's footer SHALL link to https://www.componentdock.com/.
- Scenario — Footer contains Component Dock link:
  - **WHEN** the page is rendered
  - **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Cross-cutting requirements

- **Step indicator with 4 connected circles** — Users SHALL see a horizontal stepper showing their progress through the 4 steps.
  - Scenario — Active step has filled green circle: **WHEN** the user is on any step; **THEN** the current step's circle is filled with green (`#77CC6D`) and displays its icon in white
  - Scenario — Inactive steps have outlined green circles: **WHEN** the user has not yet reached a step; **THEN** that step's circle is outlined in green with its icon displayed in green outline
  - Scenario — Completed steps show filled green circle: **WHEN** the user has completed a step and moved forward; **THEN** that step's circle remains filled green to indicate completion
  - Scenario — Steps are connected by a line: **WHEN** the stepper is rendered; **THEN** all 4 step circles are connected by a thin horizontal gray line passing through their centers
  - Scenario — Step icons match step purpose: **WHEN** the stepper is rendered; **THEN** each step shows a relevant icon: Step 1 = shopping cart/produce, Step 2 = padlock (security), Step 3 = delivery truck (shipping), Step 4 = credit card (payment)
- **BACK and CONTINUE navigation buttons** — Users SHALL have navigation buttons to move between wizard steps.
  - Scenario — CONTINUE button advances the wizard: **WHEN** the user clicks "CONTINUE" on any step except the last; **THEN** the wizard advances to the next step
  - Scenario — BACK button returns to previous step: **WHEN** the user clicks "BACK" on Steps 2, 3, or 4; **THEN** the wizard returns to the previous step with previously entered values preserved
  - Scenario — BACK button hidden on first step: **WHEN** the user is on Step 1; **THEN** the BACK button is not visible
  - Scenario — SUBMIT button on final step: **WHEN** the user is on Step 4; **THEN** the CONTINUE button is replaced with a "SUBMIT" or "PLACE ORDER" button
  - Scenario — Buttons are pill-shaped and green: **WHEN** any navigation button is rendered; **THEN** it has a solid green (`#77CC6D`) background, white uppercase text, and large border-radius (~24px pill shape)
- **Form fields with green icons** — Each form input SHALL have a green icon on the right side indicating the field type.
  - Scenario — Name fields show person icon: **WHEN** the First Name or Last Name field is rendered; **THEN** a person/user icon appears on the right side in green
  - Scenario — Email field shows mail icon: **WHEN** the Email ID field is rendered; **THEN** a mail/envelope icon appears on the right side in green
  - Scenario — ID field shows ID card icon: **WHEN** the User ID field is rendered; **THEN** an ID card icon appears on the right side in green
  - Scenario — Location fields show map pin icons: **WHEN** Country, State, or City fields are rendered; **THEN** a map pin/flag icon appears on the right side in green
- **Form validation prevents advancing on invalid input** — Users SHALL see validation feedback when attempting to advance with missing required fields.
  - Scenario — Empty required fields show error: **WHEN** the user clicks "CONTINUE" on Step 1 without filling required fields; **THEN** a validation message is shown indicating the field is required
  - Scenario — Invalid email shows error: **WHEN** the user enters an invalid email format on Step 1; **THEN** a validation message is shown indicating the email is invalid
- **Successful submission completes the wizard** — Users SHALL see a confirmation screen after completing all steps.
  - Scenario — Confirmation screen shown after submission: **WHEN** the user completes all steps and clicks "SUBMIT" / "PLACE ORDER"; **THEN** a success/confirmation message is displayed (e.g. "Your order has been placed!")
  - Scenario — Reset after confirmation: **WHEN** the user clicks "Start New Order" or similar on the confirmation screen; **THEN** the wizard resets to Step 1 with all fields cleared
- **Centered card layout with warm background** — The template SHALL display a centered white card on a textured warm background.
  - Scenario — White card is centered on page: **WHEN** the page is rendered; **THEN** a white card with soft rounded corners and subtle drop shadow is centered horizontally and vertically on the viewport
  - Scenario — Warm textured background: **WHEN** the page is rendered; **THEN** the background is a warm off-white/beige color with a subtle texture or grain feel
  - Scenario — Decorative food elements optional: **WHEN** the page is rendered; **THEN** the background may include decorative food-themed elements (leaves, produce) or a food-themed pattern, using placeholder images from picsum.photos
- **Responsive form layout** — The form fields SHALL be responsive.
  - Scenario — 2-column layout on desktop: **WHEN** the page is rendered on a desktop viewport (>768px); **THEN** name fields, email/ID fields, and location fields are displayed in 2-column rows, with the 3-column row for Country/State/City
  - Scenario — Single column on mobile: **WHEN** the page is rendered on a mobile viewport (<768px); **THEN** all form fields stack vertically in a single column
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/wizlane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/wizlane/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] 4-step wizard with correct step order (Basic Details → Account → Shipping → Payment); [ ] Stepper shows 4 connected circles with icons (cart, lock, truck, card); [ ] Active step circle filled green, inactive outlined green; [ ] Steps connected by thin gray horizontal line; [ ] Step 1 shows First Name, Last Name, Email ID, User ID, Country, State, City; [ ] Green icons on right side of form inputs; [ ] Pill-shaped green BACK/CONTINUE buttons; [ ] BACK button hidden on Step 1; [ ] CONTINUE → SUBMIT button swap on Step 4; [ ] Form validation prevents advancing with missing required fields; [ ] Email format validation; [ ] Values preserved when navigating back; [ ] Confirmation screen after successful submission; [ ] Reset to Step 1 after confirmation; [ ] Centered white card with rounded corners and drop shadow; [ ] Warm off-white/beige textured background; [ ] Responsive: 2-column on desktop, single column on mobile; [ ] Footer links to https://www.componentdock.com/; [ ] No ColorLib references in app code (provenance only in spec); [ ] All placeholder images use picsum.photos; [ ] Typography: system sans-serif, clean and modern; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/wizlane` ships on https://wizlane.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/wizlane/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/wizlane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wizlane/public/CNAME` = `wizlane.free.componentdock.com`
  and the package `homepage` = `https://wizlane.free.componentdock.com`.
