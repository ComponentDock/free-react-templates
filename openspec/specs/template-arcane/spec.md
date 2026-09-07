# Template: Arcane (Account Setup Wizard)

## Purpose

Recreation of ColorLib's **Colorlib Wizard 20** — a 3-step account setup wizard template with a gradient background.

- **Source:** https://colorlib.com/wp/template/colorlib-wizard-20/
- **Preview (original):** https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-20.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `arcane` (apps/arcane, @free-react-templates/arcane)
- **Deploy:** arcane.free.componentdock.com

## Design Tokens (extracted from preview CSS)

| Token                  | Value                                                       | Usage                                                      |
| ---------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- |
| `--brand-purple`       | `#884d80`                                                   | Gradient start, step indicator fill, button base           |
| `--brand-light-purple` | `#9795f0`                                                   | Gradient mid                                               |
| `--brand-teal`         | `#2b5876`                                                   | Gradient mid-dark                                          |
| `--brand-deep-purple`  | `#4e4376`                                                   | Gradient end                                               |
| `--accent-blue`        | `#a1c4fd`                                                   | Input focus border-image start, step active gradient start |
| `--bg-white`           | `#ffffff`                                                   | Form card background, step line background                 |
| `--text-primary`       | `#222`                                                      | Body text, input text                                      |
| `--text-muted`         | `#999`                                                      | Placeholder text, inactive step numbers                    |
| `--border-light`       | `#ebebeb`                                                   | Input borders, inactive step circle background             |
| `--page-gradient`      | `linear-gradient(0deg, #884d80, #9795f0, #2b5876, #4e4376)` | Full-page background (vertical gradient)                   |
| Font: Body             | Poppins (weights 300–900)                                   | All text, inputs, buttons                                  |
| Input height           | 40px                                                        | All form inputs                                            |
| Input border-radius    | 5px                                                         | Rounded input corners                                      |
| Input border           | 1px solid #ebebeb (default); gradient border on focus       | Default state vs. focus state                              |
| Step circle diameter   | 44px                                                        | Numbered step indicators                                   |
| Step circle border     | 3px solid #fff                                              | White ring around step circles                             |
| Step circle active bg  | `linear-gradient(0deg, #a1c4fd, #884d80, #2b5876, #4e4376)` | Current step indicator fill                                |
| Step line              | 8px height, #fff background, 290px wide                     | Horizontal line connecting step circles                    |
| Button width           | 120px                                                       | Previous/Next action buttons                               |
| Button height          | 40px                                                        | Previous/Next action buttons                               |
| Button gradient        | `linear-gradient(0deg, #a1c4fd, #884d80, #2b5876, #4e4376)` | Same gradient as page background                           |
| Button hover bg        | `#090909`                                                   | Button hover state (dark solid)                            |
| Button border-radius   | 5px                                                         | Rounded button corners                                     |
| Card shadow            | `0px 5px 9.5px 0.5px rgba(0,0,0,0.1)`                       | Form card elevation                                        |
| Card border-radius     | 10px                                                        | Form card corners                                          |
| Step circle shadow     | `0px 5px 9.5px 0.5px rgba(0,0,0,0.2)`                       | Step number circle elevation                               |

## Visual Design Notes (from screenshot)

- Full-viewport centered layout with a striking gradient background transitioning from deep purple (#884d80) through light purple (#9795f0) and teal (#2b5876) to dark purple (#4e4376) — vertical gradient
- Centered white card (~373px width) with rounded corners (10px) and soft box-shadow
- Card header: "Account Setup" title in white bold text at top
- Step indicator: horizontal row of 3 numbered circles (44px) connected by a white line; active step shows gradient fill, inactive steps show light gray (#ebebeb) with white ring
- Step labels: "Account Setup", "Social Profiles", "Personal Details" — white bold text below each circle with text-shadow
- Form area: white card body with uppercase section heading (e.g. "Creat your account" [sic]), input fields with light gray borders and rounded corners
- Inputs: transparent background, 1px solid #ebebeb border, Poppins font, 40px height; focus state shows gradient border-image (blue → purple → teal → deep purple)
- Action buttons: gradient-filled (same as page bg), white text, 120×40px, 5px border-radius; Previous/Next centered at bottom
- Hover state on buttons: solid dark (#090909)
- Overall aesthetic: modern, clean wizard with bold gradient palette — purple-to-teal gradient is the dominant visual theme

## Sections (from source HTML)

The template is a **3-step wizard form** — not a scrolling page. Each step occupies the same viewport space; navigation moves between steps.

### Step 1: Account Setup

- Section heading: "Creat your account" (note: original has typo; recreate faithfully but optionally fix)
- Email input (placeholder: "Eg: aucreative@gmail.com")
- Password input (placeholder: "Password")
- Confirm Password input (placeholder: "Confirm Password")

### Step 2: Social Profiles

- Section heading: "Social profiles"
- Twitter input (placeholder: "Twitter")
- Facebook input (placeholder: "Facebook")
- Google Plus input (placeholder: "Google Plus")

### Step 3: Personal Details

- Section heading: "Personal Details"
- Your Name input (placeholder: "Your name")
- Phone input (placeholder: "Phone")
- Address input (placeholder: "Address")

## Gherkin Requirements

### Feature: Arcane Account Setup Wizard

Scenario: Page loads with Step 1 visible
Given the user opens the Arcane account setup page
Then the "Account Setup" step is visible
And the step indicator highlights step 1 with a gradient fill
And the gradient background is displayed on the page
And the white form card is centered on the page

Scenario: Step indicator shows correct state
Given the user opens the page
Then step 1 has a gradient-filled circle
And step 2 has a gray circle with white ring
And step 3 has a gray circle with white ring
And the horizontal line connects all three circles

Scenario: User fills Step 1 and advances
Given the user is on Step 1
When the user enters email "test@example.com"
And the user enters password "secret123"
And the user enters confirm password "secret123"
And the user clicks the "Next" button
Then Step 2 "Social Profiles" becomes visible
And the step indicator highlights step 2 with gradient fill
And step 1 shows as completed

Scenario: User navigates backward from Step 2
Given the user is on Step 2
When the user clicks the "Previous" button
Then Step 1 "Account Setup" becomes visible
And the step indicator highlights step 1 again

Scenario: User fills Step 2 social profiles
Given the user is on Step 2
When the user enters Twitter "@testuser"
And the user enters Facebook "facebook.com/testuser"
And the user enters Google Plus "+TestUser"
And the user clicks the "Next" button
Then Step 3 "Personal Details" becomes visible

Scenario: User fills Step 3 personal details
Given the user is on Step 3
When the user enters name "John Doe"
And the user enters phone "+1234567890"
And the user enters address "123 Main St, City"
And the user clicks the "Next" button
Then the wizard submits or shows completion

Scenario: Input focus shows gradient border
Given the user is on any step with input fields
When the user focuses on an input field
Then the input border shows a gradient effect (blue → purple → teal → deep purple)
And the input maintains its 5px border-radius

Scenario: Previous button is hidden on Step 1
Given the user is on Step 1
Then the "Previous" button is not visible
And only the "Next" button is shown

Scenario: Responsive layout on mobile
Given the user opens the page on a mobile viewport (width < 480px)
Then the form card fills the screen width (minus 40px padding)
And the input fields resize appropriately
And the action buttons resize to fit

## Verification Checklist

- [ ] 3-step wizard with smooth step transitions
- [ ] Horizontal step indicator with 3 numbered circles connected by white line
- [ ] Active step shows gradient fill; inactive steps show gray with white ring
- [ ] Full-viewport gradient background (purple → light purple → teal → deep purple)
- [ ] Centered white form card with 10px border-radius and box-shadow
- [ ] "Account Setup" header in white bold text
- [ ] Step labels below circles in white bold text with text-shadow
- [ ] Input fields with 1px #ebebeb border, 5px radius, 40px height
- [ ] Input focus state shows gradient border-image
- [ ] Gradient-filled Previous/Next buttons (120×40px, 5px radius)
- [ ] Button hover state transitions to solid dark (#090909)
- [ ] Step 1: email + password + confirm password fields
- [ ] Step 2: Twitter + Facebook + Google Plus fields
- [ ] Step 3: Name + Phone + Address fields
- [ ] Previous button hidden on Step 1
- [ ] Responsive: card fills width on mobile (< 480px)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
- [ ] Typecheck passes, lint passes, build succeeds
