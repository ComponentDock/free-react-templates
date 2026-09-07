# Template: Alchemy (Centered Multi-Step Registration Wizard)

## Purpose

- **Recreation of ColorLib source**: Colorlib Wizard 29 (`https://colorlib.com/wp/template/colorlib-wizard-29/`)
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-29/index.html` (actual preview; `https://preview.colorlib.com/theme/colorlib-wizard-29/` returns 404)
- **New Name**: `alchemy` (App directory: `apps/alchemy`, Package: `@free-react-templates/alchemy`)
- **Category**: Forms / Multi-step Registration Wizard
- **Description**: A centered card-based multi-step registration wizard with 4 steps (username, email, password, confirm password). Features pill-shaped progress tabs, rounded inputs with integrated "next step" buttons, a full-page background image, and a white card with box shadow. Clean, focused registration flow.
- **Source slug**: `colorlib-wizard-29`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-29.jpg` (shows a centered white card on a full-page background with a blue header bar, 4-step pill tabs, and a single input + button per step)

## Design Tokens (from reference CSS)

| Token                  | Value                                                        | Source                                        |
| ---------------------- | ------------------------------------------------------------ | --------------------------------------------- |
| Font family            | `"Lato", "Arial", "Helvetica Neue", sans-serif`             | `body` in `css/main.css`                      |
| Brand primary (active) | `#3155cc` (blue)                                             | `.btn--next`, `.tab-list .active .tab-list__link` |
| Brand primary hover    | `#1d41b8` (darker blue)                                      | `.btn--next:hover`                            |
| Active step circle     | `#3d6aff` (brighter blue)                                    | `.tab-list .active .tab-list__link .step`     |
| Inactive tab background| `#999` (gray)                                                | `.tab-list__link`                             |
| Step circle inactive   | `#666` (dark gray)                                           | `.tab-list__link .step`                       |
| Body text color        | `#666` (medium gray)                                         | `.input--style-1`                             |
| Placeholder color      | `#999` (light gray)                                          | `.input--style-1::-webkit-input-placeholder`  |
| Card background        | `#fff` (white)                                               | `.card-1 .card-body`                          |
| Card border-radius     | `5px`                                                        | `.card-1 .card-body`                          |
| Card box-shadow        | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                      | `.card-1 .card-body`                          |
| Input border           | `1px solid #e5e5e5`                                          | `.input--style-1`                             |
| Input border-radius    | `25px` (pill shape)                                          | `.input--style-1`                             |
| Input height           | `48px` (`line-height: 48px`)                                 | `.input--style-1`                             |
| Input font-size        | `15px`                                                       | `.input--style-1`                             |
| Button border-radius   | `25px` (right side only, matching input pill)                | `.btn--next`                                  |
| Button height          | `50px` (`line-height: 50px`)                                 | `.btn--next`                                  |
| Button font-weight     | `700`                                                        | `.btn--next`                                  |
| Button font-size       | `15px`                                                       | `.btn--next`                                  |
| Title font-size        | `50px`                                                       | `.title`                                      |
| Title font-weight      | `700`                                                        | `.title`                                      |
| Title text-transform   | `uppercase`                                                  | `.title`                                      |
| Title color            | `#fff` (white)                                               | `.title`                                      |
| Tab pill border-radius | `22.5px`                                                     | `.tab-list__link`                             |
| Tab pill width         | `162px`                                                      | `.tab-list__link`                             |
| Step circle size       | `45px` x `45px`                                              | `.tab-list__link .step`                       |
| Step circle radius     | `50%` (full circle)                                          | `.tab-list__link .step`                       |
| Step font-size         | `18px`                                                       | `.tab-list__link .step`                       |
| Container max-width    | `820px`                                                      | `.wrapper--w820`                              |
| Body base font-size    | `14px`                                                       | `body`                                        |
| Background image       | Full-page cover (`bg-img-01.jpg`)                             | `.bg-img-1`                                   |
| Page padding-top       | `275px` desktop, `120px` mobile                               | `.p-t-275`                                    |
| Tab content padding    | `35px 0` top, `43px` bottom                                  | `.tab-content > .tab-pane`                    |
| Validation error color | `red`                                                        | `label.error`                                 |

## Layout Structure

This is a **centered single-card** wizard — the entire viewport has a full-page background image with a centered white card overlay.

### Overall Layout

1. **Background**: Full-page background image (`picsum.photos/seed/alchemy-bg/1920/1080`), cover, centered
2. **Centered wrapper**: max-width `820px`, vertically centered (with padding-top offset)
3. **Card**: transparent outer wrapper, white card body with box-shadow and rounded corners

### Card Structure (top to bottom)

1. **Card heading**: "Register Wizard" — white text on the background, uppercase, 50px, bold
2. **Card body**: white background, 5px radius, box-shadow
   - **Tab list**: 4 horizontal pill-shaped tabs (step number circle + label)
   - **Tab content**: 4 step panels, each with one input field + "next step" button

### Wizard Steps (4-step flow)

| Step | Label            | Input Type  | Placeholder                | Validation |
| ---- | ---------------- | ----------- | -------------------------- | ---------- |
| 1    | username         | text        | "Username here"            | required   |
| 2    | email            | email       | "ex: example@email.com"   | required   |
| 3    | password         | password    | "Password"                 | required   |
| 4    | Confirm Password | password    | "Password"                 | required   |

### Progress Indicator

- 4 pill-shaped tabs displayed horizontally
- Each tab: step number in a circle (45px) + text label
- Active tab: blue background (`#3155cc`), circle bright blue (`#3d6aff`)
- Inactive tabs: gray background (`#999`), circle dark gray (`#666`)
- Tabs are clickable (jumps to that step)
- Connected visually by proximity (no explicit connecting line)

### Button Behavior

- "next step" / "Confirm" button is positioned **inside** the input field (absolute, right side)
- Active step (step 4) shows "Confirm" instead of "next step"
- Clicking advances to next step (or validates on last step)

## Requirements

### Requirement: Centered card wizard layout

The application SHALL render a full-viewport page with a background image and a single centered card containing the registration wizard.

**Scenario: Page renders with background and centered card**
- Given the user loads the page
- When the page renders
- Then a full-viewport background image is displayed
- And a centered card is visible with max-width of 820px
- And the card has a white body with rounded corners (5px) and box shadow

### Requirement: Card heading

The card SHALL display the heading "Register Wizard" (or a paraphrased equivalent) in white, uppercase, bold, large text above the card body.

**Scenario: Heading is visible above the card body**
- Given the user loads the page
- When the heading is rendered
- Then it says "Register Wizard" (or equivalent)
- And it is displayed in white text, uppercase, bold

### Requirement: 4-step wizard tabs

The card body SHALL display 4 horizontal pill-shaped tabs representing wizard steps: username, email, password, and confirm password.

**Scenario: All 4 tabs are rendered**
- Given the user loads the page
- When the tab list renders
- Then 4 tabs are visible
- And tab 1 shows "username"
- And tab 2 shows "email"
- And tab 3 shows "password"
- And tab 4 shows "Confirm Password"

**Scenario: Active tab styling**
- Given the user is on step 1
- Then tab 1 has a blue background (`#3155cc`)
- And tab 1's step circle is bright blue (`#3d6aff`)
- And tabs 2-4 have a gray background (`#999`)
- And tabs 2-4's step circles are dark gray (`#666`)

**Scenario: Clicking a tab navigates to that step**
- Given the user is on step 1
- When the user clicks tab 3
- Then the form navigates to step 3 (password)

### Requirement: Step 1 — Username input

Step 1 SHALL display a text input for username with placeholder "Username here" and a "next step" button.

**Scenario: Step 1 renders correctly**
- Given the user is on step 1
- When the form renders
- Then a text input is visible with placeholder "Username here"
- And a "next step" button is visible inside the input (right-aligned)

**Scenario: User enters username and advances**
- Given the user is on step 1
- When the user types "john_doe" in the username field
- And clicks "next step"
- Then the form advances to step 2

**Scenario: Empty username blocks advancement**
- Given the user is on step 1
- When the user clicks "next step" without entering a value
- Then the form stays on step 1
- And a validation error is shown

### Requirement: Step 2 — Email input

Step 2 SHALL display an email input with placeholder "ex: example@email.com" and a "next step" button.

**Scenario: Step 2 renders correctly**
- Given the user is on step 2
- When the form renders
- Then an email input is visible with placeholder "ex: example@email.com"
- And a "next step" button is visible

**Scenario: User enters email and advances**
- Given the user is on step 2
- When the user types "john@example.com" in the email field
- And clicks "next step"
- Then the form advances to step 3

**Scenario: Empty email blocks advancement**
- Given the user is on step 2
- When the user clicks "next step" without entering a value
- Then the form stays on step 2

### Requirement: Step 3 — Password input

Step 3 SHALL display a password input with placeholder "Password" and a "next step" button.

**Scenario: Step 3 renders correctly**
- Given the user is on step 3
- When the form renders
- Then a password input is visible with placeholder "Password"
- And a "next step" button is visible

**Scenario: User enters password and advances**
- Given the user is on step 3
- When the user types "secure123" in the password field
- And clicks "next step"
- Then the form advances to step 4

**Scenario: Empty password blocks advancement**
- Given the user is on step 3
- When the user clicks "next step" without entering a value
- Then the form stays on step 3

### Requirement: Step 4 — Confirm Password input

Step 4 SHALL display a password input with placeholder "Password" and a "Confirm" button.

**Scenario: Step 4 renders correctly**
- Given the user is on step 4
- When the form renders
- Then a password input is visible with placeholder "Password"
- And a "Confirm" button is visible (not "next step")

**Scenario: User confirms password**
- Given the user is on step 4
- When the user types "secure123" in the confirm password field
- And clicks "Confirm"
- Then the form is submitted (or a success state is shown)

**Scenario: Empty confirm password blocks submission**
- Given the user is on step 4
- When the user clicks "Confirm" without entering a value
- Then the form stays on step 4

### Requirement: Step navigation between tabs

The wizard SHALL support forward navigation via the "next step" button and tab-click navigation to any step.

**Scenario: Forward navigation via button**
- Given the user is on step 1
- When the user completes step 1 and clicks "next step"
- Then the form advances to step 2
- And the tab indicator updates to show step 2 as active

**Scenario: Tab click navigation**
- Given the user is on step 3
- When the user clicks tab 1
- Then the form navigates back to step 1
- And step 1's tab becomes active

### Requirement: Responsive layout

The wizard SHALL be responsive on mobile devices.

**Scenario: Mobile layout**
- Given the user loads the page on a mobile viewport (< 768px)
- When the page renders
- Then the card remains centered
- And tabs stack or scroll horizontally if needed
- And inputs and buttons remain usable

### Requirement: Visual fidelity to reference

The template SHALL match the visual design of the ColorLib Wizard 29 reference.

**Scenario: Design tokens match**
- Given the template is rendered
- When comparing to the reference
- Then the color palette matches: blue active (#3155cc), gray inactive (#999), white card, dark gray text (#666)
- And the input fields have pill shape (25px radius)
- And the tabs are pill-shaped (22.5px radius)
- And the font is Lato (or a system sans-serif fallback)
- And the card has a box shadow (`0 8px 20px rgba(0,0,0,0.15)`)

## Verification Checklist

- [ ] App renders in `apps/alchemy/` with package name `@free-react-templates/alchemy`
- [ ] `vite.config.ts` includes `injectUiSource()`
- [ ] Full-page background image is displayed
- [ ] Card heading "Register Wizard" is visible and styled (white, uppercase, bold)
- [ ] 4-step tab list renders with correct labels
- [ ] Active tab styling (blue) and inactive tab styling (gray) work
- [ ] Step 1: username input + "next step" button
- [ ] Step 2: email input + "next step" button
- [ ] Step 3: password input + "next step" button
- [ ] Step 4: confirm password input + "Confirm" button
- [ ] Forward navigation via "next step" button advances steps
- [ ] Tab click navigates to the clicked step
- [ ] Empty field validation blocks advancement
- [ ] Responsive layout on mobile viewport
- [ ] Footer includes Component Dock link (`https://www.componentdock.com/`)
- [ ] No ColorLib references in app source code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds (`npm run build`)
- [ ] `public/CNAME` contains `alchemy.free.componentdock.com`
- [ ] `homepage` in `package.json` is `https://alchemy.free.componentdock.com`
