# Template: LoginBolt (Login Form)

## Purpose

Recreation of ColorLib **Login Form V17** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/login-form-v17/
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v17/ (unreachable at prep time — 404; design tokens extracted from downloaded source zip)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v17.jpg
- **New name:** `loginbolt` (app folder `apps/loginbolt`, package `@free-react-templates/loginbolt`)
- **Deploy URL:** https://loginbolt.free.componentdock.com

## Layout Overview

Full-viewport split-screen login form:

- **Left half (50%):** White background, centered form content
- **Right half (50%):** Background image with dark overlay (rgba(0,0,0,0.3))
- Card is flex row-reverse so the image appears on the right in the DOM order
- Vertically and horizontally centered on a light gray (#f2f2f2) page background
- Max card width: 1170px; responsive: stacks vertically on mobile (≤768px)

## Design Tokens (extracted from source CSS)

| Token | Value | Usage |
|---|---|---|
| Brand color (green) | `#00ad5f` | Button background, focus border, accent links, "Sign Up" text |
| Button hover | `#333333` | Button background on hover |
| Body text | `#666666` | Input text, paragraph text, base link color |
| Link hover | `#333333` | Anchor hover color |
| Placeholder text | `#999999` | Input placeholder color |
| Title text | `#555555` | Form title "Account Login" |
| Light text / "Forgot" | `#999999` | "Forgot" label text |
| Page background | `#f2f2f2` | Full-viewport outer background |
| Card background | `#ffffff` | White form card |
| Input border | `#e6e6e6` | Default input border |
| Input focus border | `#00ad5f` | Green border on focus (animated scale-in) |
| Error text/border | `#c80000` | Validation alert text and border |
| Font (body) | Poppins (Regular, Medium, SemiBold, Bold) | All text |
| Font (button) | Montserrat Bold | Button label only |
| Button border-radius | `3px` | Nearly square with slight rounding |
| Button height | `50px` | Full-width button |
| Input height | `55px` | Text input fields |
| Input font-size | `18px` | Input placeholder/text |
| Title font-size | `20px` | Form heading |
| Title style | Uppercase, letter-spacing 2px | Heading treatment |
| Button style | Uppercase, letter-spacing 1px, 12px | Button label |
| Image overlay | `rgba(0,0,0,0.3)` | Dark overlay on right-side image |
| Focus transition | `0.4s ease` | All interactive transitions |

## Gherkin Requirements

### Feature: Login Form

  Background:
    Given the user is on the login page
    Then a centered white card is displayed on a light gray background

  Scenario: Page layout
    Given the viewport is wider than 768px
    Then the card shows a form on the left and an image on the right
    And the image has a dark semi-transparent overlay
    And the card is vertically and horizontally centered

  Scenario: Mobile layout
    Given the viewport is 768px or narrower
    Then the form and image stack vertically
    And the form occupies full width

  Scenario: Form title
    Then the form displays the title "Account Login"
    And the title is uppercase with letter spacing
    And the title text color is #555555

  Scenario: Input fields — side by side on desktop
    Given the viewport is wider than 576px
    Then the username and password inputs are displayed side by side
    And each input occupies 50% of the form width

  Scenario: Input fields — stacked on mobile
    Given the viewport is 576px or narrower
    Then the username and password inputs are stacked vertically

  Scenario: Input field appearance
    Then each input has a 1px solid #e6e6e6 border
    And the input height is 55px
    And the input font is Poppins Regular 18px
    And the placeholder text color is #999999
    And there is no visible outline on focus

  Scenario: Input focus effect
    When the user focuses an input field
    Then a green (#00ad5f) border appears around the input
    And the border animates in with a scale transition over 0.4s

  Scenario: Sign In button
    Then a full-width "Sign In" button is displayed below the inputs
    And the button background is #00ad5f
    And the button text is white, uppercase, Montserrat Bold 12px
    And the button has a 3px border radius
    And the button height is 50px

  Scenario: Sign In button hover
    When the user hovers over the Sign In button
    Then the button background changes to #333333
    And the transition is 0.4s

  Scenario: Forgot password link
    Then a "Forgot" text is displayed in gray (#999999)
    And a "User name / password?" link follows in green (#00ad5f)

  Scenario: Sign Up link
    Then a "Sign Up" link is displayed at the bottom of the form
    And the link text is green (#00ad5f), uppercase

  Scenario: Validation — empty username
    When the user clicks Sign In without entering a username
    Then a validation message appears near the username input
    And the message says "Type user name"

  Scenario: Validation — empty password
    When the user clicks Sign In without entering a password
    Then a validation message appears near the password input
    And the message says "Type password"

  Scenario: Footer
    Then the page footer links to https://www.componentdock.com/
    And the footer text reads "Component Dock"

## Verification Checklist

- [ ] App folder created at `apps/loginbolt/`
- [ ] Package name is `@free-react-templates/loginbolt`
- [ ] `public/CNAME` contains `loginbolt.free.componentdock.com`
- [ ] `package.json` homepage is `https://loginbolt.free.componentdock.com`
- [ ] Split-screen layout: form left, image right (row-reverse for DOM order)
- [ ] Background image with dark overlay on right panel
- [ ] "Account Login" title: uppercase, letter-spacing, #555555
- [ ] Username + Password inputs side by side on desktop, stacked on mobile
- [ ] Input focus: green border animation (scale transition)
- [ ] Green Sign In button: Montserrat Bold, uppercase, 3px radius
- [ ] Button hover turns #333333
- [ ] "Forgot" + "User name / password?" link in correct colors
- [ ] "Sign Up" link at bottom in green uppercase
- [ ] Validation messages on empty submit
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] `npm run test:coverage` at 100%
- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
