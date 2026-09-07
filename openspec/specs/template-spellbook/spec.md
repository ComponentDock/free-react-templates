# Template: Spellbook (Form Wizard)

## Purpose

Recreation of ColorLib "Colorlib Wizard 20" — a multi-step account setup wizard form with gradient background and step indicator. Preview URL: https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html. Source slug: `colorlib-wizard-20`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Multi-step form wizard with progress indicator, form fields, and navigation buttons.

## Design Tokens (from reference CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Poppins', sans-serif` (weights 300–900) | Google Fonts via `@font-face` |
| Page background | Linear gradient: `#884d80` → `#9795f0` → `#2b5876` → `#4e4376` (0deg) | `body` |
| Form container | 373px wide, `background: transparent`, `margin: 0 auto` | `.container` |
| Content card | 330px wide, 365px height, `background: #fff`, `border-radius: 10px`, `box-shadow: 0px 5px 9.5px 0.5px rgba(0,0,0,0.1)` | `.content` |
| Input fields | `background: transparent`, `border: 1px solid #ebebeb`, `border-radius: 5px`, `height: 40px`, `font-size: 13px` | `input` |
| Input focus border | Gradient border-image: `#a1c4fd` → `#884d80` → `#2b5876` → `#4e4376` | `input:focus` |
| Placeholder text | `#999` | `::-webkit-input-placeholder` |
| Body text color | `#222`, `font-weight: 500` | `body` |
| Heading h2 | `16px`, uppercase, bold, centered, `padding: 32px 0 25px` | `h2` |
| Heading h3 (step labels) | `12px`, bold, `color: #fff`, cursor pointer | `h3` |
| Step indicator circle | 44px diameter, `border-radius: 50%`, `border: 3px solid #fff`, `background: #ebebeb`, `color: #999`, `box-shadow: 0px 5px 9.5px 0.5px rgba(0,0,0,0.2)` | `.title-number` |
| Active step circle | Same size, gradient bg (`#a1c4fd` → `#884d80` → `#2b5876` → `#4e4376`), `color: #fff` | `.current .title-number` |
| Step progress line | 8px height, 290px width, `background: #fff`, positioned between circles | `.steps ul:after` |
| Action buttons | 120×40px, gradient bg (`#a1c4fd` → `#884d80` → `#2b5876` → `#4e4376`), `color: #fff`, `border-radius: 5px` | `.actions ul li a` |
| Button hover | `background-color: #090909` | `.actions ul li a:hover` |
| Title text shadow | `3px 4px 5px rgba(0,0,0,0.2)` | `.title-text` |

## Gherkin Requirements

### Feature: Multi-Step Account Setup Wizard

#### Scenario: Page Load and Gradient Background
  Given the user opens the wizard page
  Then the page background displays a vertical gradient from purple (#884d80) through lavender (#9795f0) to dark blue (#2b5876) and dark purple (#4e4376)
  And a centered white card (330px wide) with 10px border-radius and subtle box-shadow is visible
  And the card displays step indicator circles (3 circles) at the top
  And step 1 is highlighted as active (gradient background, white text)
  And steps 2 and 3 show inactive style (gray background, gray text)
  And the step title text "Account Setup" is visible below the form heading

#### Scenario: Step 1 — Account Setup
  Given the wizard is on step 1
  Then the heading "Creat your account" is displayed (uppercase, 16px, bold)
  And an email input with placeholder "Eg: aucreative@gmail.com" is shown
  And a password input with placeholder "Password" is shown
  And a confirm password input with placeholder "Confirm Password" is shown
  And a "Next" button is visible at the bottom of the card

#### Scenario: Step 1 Input Interaction
  Given the user is on step 1
  When the user clicks on the email input
  Then the input border shows a gradient effect (blue → purple → dark blue)
  And the placeholder text remains visible (#999 color)

#### Scenario: Step 1 to Step 2 Navigation
  Given the user is on step 1
  When the user clicks "Next"
  Then step 2 content slides into view
  And the step indicator updates: step 1 circle shows completed state, step 2 becomes active (gradient bg)
  And the heading changes to "Social profiles"

#### Scenario: Step 2 — Social Profiles
  Given the wizard is on step 2
  Then the heading "Social profiles" is displayed (uppercase)
  And a text input with placeholder "Twitter" is shown
  And a text input with placeholder "Facebook" is shown
  And a text input with placeholder "Google Plus" is shown
  And both "Previous" and "Next" buttons are visible

#### Scenario: Step 2 Back Navigation
  Given the user is on step 2
  When the user clicks "Previous"
  Then step 1 content returns
  And the form fields retain their entered values
  And the step indicator reverts to step 1 active

#### Scenario: Step 2 to Step 3 Navigation
  Given the user is on step 2
  When the user clicks "Next"
  Then step 3 content appears
  And the step indicator updates: step 2 shows completed, step 3 becomes active
  And the heading changes to "Personal Details"

#### Scenario: Step 3 — Personal Details
  Given the wizard is on step 3
  Then the heading "Personal Details" is displayed (uppercase)
  And a text input with placeholder "Your name" is shown
  And a text input with placeholder "Phone" is shown
  And a text input with placeholder "Address" is shown
  And "Previous" and "Finish" (or submit) buttons are visible

#### Scenario: Step 3 Submit
  Given the user is on step 3
  When the user clicks the submit/finish button
  Then the form data is processed
  And a confirmation or redirect occurs

#### Scenario: Responsive Layout
  Given the viewport is 480px or narrower
  Then the container width becomes full width minus 40px padding
  And the content card fills the available width
  And the action buttons resize to 100px width
  And form padding adjusts to 20px left/right

#### Scenario: Button Hover States
  Given any action button is displayed
  When the user hovers over the button
  Then the button background changes to dark (#090909)

## Verification Checklist

- [ ] Gradient background matches the reference (#884d80 → #9795f0 → #2b5876 → #4e4376 at 0deg)
- [ ] White card with 10px border-radius and box-shadow centered on page
- [ ] Three step indicator circles: 44px diameter, 50% radius, 3px white border
- [ ] Active step shows gradient background; inactive shows #ebebeb
- [ ] Step progress line (white, 8px height) connects circles
- [ ] Poppins font family loaded (weights 300–700 at minimum)
- [ ] Inputs: transparent bg, 1px #ebebeb border, 5px radius, 40px height
- [ ] Input focus: gradient border-image effect
- [ ] Placeholder text color #999
- [ ] h2 headings: 16px, uppercase, bold, centered
- [ ] h3 step labels: 12px, bold, white
- [ ] Action buttons: 120×40px, gradient bg, 5px radius, white text
- [ ] Button hover: dark bg (#090909)
- [ ] Three-step navigation with Previous/Next buttons
- [ ] Step indicator updates correctly on navigation
- [ ] Responsive breakpoints at 480px and 400px
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME: spellbook.free.componentdock.com
- [ ] Homepage: https://spellbook.free.componentdock.com
