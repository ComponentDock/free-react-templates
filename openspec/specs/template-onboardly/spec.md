# Spec: Onboardly

Recreation of ColorLib Wizard 20 — free account setup wizard template.
Source: https://colorlib.com/wp/template/colorlib-wizard-20/
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html

## Design Tokens (from preview CSS)

- Font: Poppins (300–900 weights) via Google Fonts
- Background: linear-gradient(0deg, #884d80, #9795f0, #2b5876, #4e4376)
- Card: white (#fff), box-shadow 0px 5px 9.5px 0.5px rgba(0,0,0,0.1), border-radius 10px, width 373px
- Step indicators: 44×44px circles, border 3px solid #fff; inactive: bg #ebebeb, color #999; active: gradient bg
- Step connector: 8px tall white bar between indicators
- Inputs: border 1px solid #ebebeb, border-radius 5px, height 40px, Poppins 500, 13px
- Input focus: gradient border-image (simplified to border-color for React/Tailwind)
- Buttons: gradient bg, border-radius 5px, 120×40px, white text
- Body text: #222, weight 500, 13px, line-height 1.92

## Sections (in order)

1. **Full-page gradient background** — entire viewport
2. **Centered card** — white, rounded, shadow, fixed width
3. **Step 1 — Account Setup** — heading "Create your account", fields: Email, Password, Confirm Password
4. **Step 2 — Social Profiles** — heading "Social profiles", fields: Twitter, Facebook, Google Plus
5. **Step 3 — Personal Details** — heading "Personal Details", fields: Name, Phone, Address
6. **Step indicators** — 3 numbered circles connected by a white bar
7. **Navigation buttons** — Next/Previous with gradient background
8. **Footer** — Component Dock link

## Gherkin Scenarios

### Feature: Onboardly account setup wizard

Scenario: Renders step 1 by default
Given the wizard is loaded
Then step 1 "Account Setup" is active
And the heading "Create your account" is visible
And the Email, Password, Confirm Password fields are visible

Scenario: Navigate between steps
When the user clicks "Next" on step 1
Then step 2 "Social Profiles" is active
And the heading "Social profiles" is visible
When the user clicks "Previous"
Then step 1 is active again

Scenario: Complete all steps
When the user clicks "Next" on step 1
And clicks "Next" on step 2
And clicks "Finish" on step 3
Then a completion message "Account Created!" is shown

Scenario: Footer links to Component Dock
Given the wizard is loaded
Then the footer contains a link to componentdock.com
