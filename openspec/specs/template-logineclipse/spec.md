# Template: LoginEclipse (Login Form)

## Purpose

LoginEclipse is a single-page LOGIN FORM in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Login Form V9" free
template (source: https://colorlib.com/wp/template/login-form-v9/, live preview:
https://colorlib.com/etc/lf/Login_v9/index.html — live preview reachable;
screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v9.jpg),
built under a DIFFERENT name (**LoginEclipse**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a single-page login form centered on a full-viewport background
image with a purple-blue gradient overlay. The layout consists of:
1. A full-viewport container with a background image (`bg-01.jpg`) and a
   blue-to-purple gradient overlay (`rgba(0,168,255,0.5)` to
   `rgba(185,0,255,0.5)`)
2. A centered 390px-wide white card with rounded corners (border-radius: 10px)
   and a subtle box shadow
3. "Sign In" title in SourceSansPro-Bold, 30px, deep purple (#4b2354)
4. Username/email input — no visible border, transparent background, 62px tall,
   SourceSansPro-Bold 16px, deep purple text (#4b2354), with a focus shadow
   effect
5. Password input — same styling as username
6. Focus effect — inputs get an enhanced box-shadow (`0 5px 30px rgba(0,0,0,0.2)`)
   on focus via the `.focus-input100` pseudo-element
7. "Sign In" submit button — pill-shaped (border-radius: 25px), purple
   (#bd59d4) background, 50px tall, SourceSansPro-SemiBold 14px, white text
8. "Or login with" divider text in gray (#999999)
9. Social login buttons — Facebook (icon, #3b5998) and Google (icon image) as
   50px circular buttons with white background and box shadow
10. "Sign Up" link at bottom center in deep purple (#4b2354), underlined on
    hover

The aesthetic is modern with a photographic background + gradient overlay
(eclipse-like purple-blue veil) behind a clean white card. Typography uses
Source Sans Pro (Regular, Bold, SemiBold). The purple accent (#bd59d4) and
deep purple text (#4b2354) provide the primary color palette against the
white card and colorful background.

**WHAT MAKES LOGINECLIPSE DISTINCT (signature behaviors):**

1. **Gradient-overlay background.** The full-viewport background image has a
   blue-to-purple linear gradient overlay at 50% opacity, creating a
   dramatic "eclipse" veil effect.
2. **Shadow-on-focus inputs.** Input fields have no visible border but use a
   `.focus-input100` pseudo-element with a default `box-shadow: 0 5px 30px
   rgba(0,0,0,0.1)` that intensifies to `0.2` opacity on focus.
3. **Social login buttons.** Circular 50px buttons with Facebook (#3b5998)
   icon and Google icon image, with white background and shadow.
4. **Purple brand palette.** The button uses #bd59d4 (medium purple) and the
   text/links use #4b2354 (deep purple) — a cohesive purple theme.
5. **Source Sans Pro typography.** Three weights: Regular for body/links, Bold
   for title/inputs, SemiBold for the button.

## Design tokens

- **Background**: Full-viewport with background image + gradient overlay
  - Container: `min-height: 100vh`, `background-size: cover`,
    `background-position: center`, `padding: 15px`
  - Gradient overlay: `linear-gradient(to right, rgba(0,168,255,0.5),
    rgba(185,0,255,0.5))` via `::before` pseudo-element
  - Fallback solid: `rgba(93,84,240,0.5)`
- **Card**: `width: 390px`, `background: #fff`, `border-radius: 10px`,
  `box-shadow: 0 3px 20px 0px rgba(0,0,0,0.1)`,
  `padding: 80px 55px 30px 55px`
- **Typography**:
  - Body font: `'Source Sans 3', sans-serif` (Google Fonts — Regular 400,
    Bold 700, SemiBold 600)
  - Fallback: `sans-serif`
- **Title "Sign In"**: SourceSansPro-Bold, 30px, color `#4b2354`, centered
- **Input fields (username/email, password)**:
  - `background: transparent`, `border: none`, `height: 62px`,
    `padding: 0 23px`, font `SourceSansPro-Bold 16px`, color `#4b2354`
  - Input wrapper: `border-radius: 20px`, `position: relative`
  - Focus pseudo-element (`.focus-input100`): same position/size as input,
    `border-radius: 20px`, default
    `box-shadow: 0 5px 30px 0px rgba(0,0,0,0.1)`, on focus
    `box-shadow: 0 5px 30px 0px rgba(0,0,0,0.2)`, 0.4s transition
  - Placeholder color: `#4b2354`
- **Submit button "Sign In"**: `background-color: #bd59d4`,
  `border-radius: 25px`, `height: 50px`, `min-width: 160px`, font
  `SourceSansPro-SemiBold 14px`, color `#fff`, centered. Hover:
  `background-color: #9b24bd`, 0.4s transition.
- **"Or login with" text (.txt1)**: SourceSansPro-Regular 16px, color
  `#999999`
- **"Sign Up" link (.txt2)**: SourceSansPro-Regular 16px, color `#4b2354`.
  Hover: text-decoration underline, color stays `#4b2354`.
- **Social login buttons**:
  - 50px × 50px circle (`border-radius: 50%`), white background,
    `box-shadow: 0 5px 20px 0px rgba(0,0,0,0.1)`
  - Facebook icon: color `#3b5998`, font-size 25px
  - Google icon: 26px image
  - Hover: `box-shadow: 0 5px 20px 0px rgba(0,0,0,0.2)`
- **Validation error**: `background-color: #fa4251` (red), text in same red,
  positioned at right of input, Material Design Iconic Font icon
- **Validation success**: `color: #57b846` (green) checkmark icon
- **Link color (general)**: `#666666`, hover: color via `.hov1` (stays #4b2354),
  transition 0.4s
- **Box model reset**: `* { margin: 0; padding: 0; box-sizing: border-box; }`
- **Responsive**: At `max-width: 480px`, card padding reduces to `15px`
  left/right

## Gherkin requirements

### Scenario: Full-viewport gradient background renders
Given the user navigates to LoginEclipse
Then the page body should display a full-viewport container
And the container should have a background image (or gradient fallback)
And the gradient overlay should blend blue to purple

### Scenario: Login card renders centered
Given the user navigates to LoginEclipse
Then a white card should be visible centered on the page
And the card should have rounded corners (border-radius: 10px)
And the card should have a subtle box shadow
And the card width should be approximately 390px

### Scenario: "Sign In" title renders
Given the user navigates to LoginEclipse
Then the text "Sign In" should be displayed at the top of the card
And the title should be deep purple (#4b2354) and centered
And the title font size should be 30px

### Scenario: Username/email input renders
Given the user navigates to LoginEclipse
Then an input field with placeholder "username or email" should be visible
And the input should accept text input
And the input should have a transparent background with no visible border
And the input should be 62px tall

### Scenario: Password input renders
Given the user navigates to LoginEclipse
Then a password input with placeholder "password" should be visible
And the input should mask typed characters
And the input should have the same styling as the username input

### Scenario: Input focus shadow effect
Given the user focuses on a username or password input
Then the input's focus pseudo-element should show an enhanced box-shadow
And the shadow should transition smoothly (0.4s)

### Scenario: Sign In submit button renders
Given the user navigates to LoginEclipse
Then a button labeled "Sign In" should be visible
And the button should be pill-shaped with purple (#bd59d4) background
And the button should be 50px tall with white text
And the button text should be SourceSansPro-SemiBold 14px

### Scenario: Sign In button hover effect
Given the user hovers over the "Sign In" button
Then the button background should change to darker purple (#9b24bd)
And the transition should animate smoothly (0.4s)

### Scenario: "Or login with" divider renders
Given the user navigates to LoginEclipse
Then text "Or login with" should be visible below the button
And the text should be gray (#999999)

### Scenario: Social login buttons render
Given the user navigates to LoginEclipse
Then a Facebook social login button should be visible
And a Google social login button should be visible
And both buttons should be circular (50px × 50px)
And both buttons should have a white background with shadow

### Scenario: Social button hover effect
Given the user hovers over a social login button
Then the button's box-shadow should intensify (0.2 opacity)

### Scenario: "Sign Up" link renders
Given the user navigates to LoginEclipse
Then a link labeled "Sign Up" should be visible at the bottom of the card
And the link should be deep purple (#4b2354)
And clicking the link should be non-navigating (href="#")

### Scenario: Responsive layout on mobile
Given the user resizes the viewport to 375px width
Then the form should shrink to fit the viewport width
And the card should have reduced horizontal padding (15px)
And all inputs, buttons, and links should remain usable

### Scenario: Accessibility - semantic elements
Given the user navigates to LoginEclipse
Then the form should use semantic HTML elements
And the inputs should have associated labels or placeholders
And the button should have an accessible name

### Scenario: Footer links to Component Dock
Given the user navigates to LoginEclipse
Then the footer should contain a link to "https://www.componentdock.com/"
And the link text should reference "Component Dock"

## Verification checklist

- [ ] Source Sans 3 font loaded via Google Fonts (Regular 400, Bold 700, SemiBold 600)
- [ ] Full-viewport gradient background (blue-to-purple overlay on image/fallback)
- [ ] Card: 390px wide, white bg, border-radius 10px, shadow
- [ ] "Sign In" title: deep purple (#4b2354), 30px, centered
- [ ] Username/email input: transparent bg, no border, 62px tall, placeholder "username or email"
- [ ] Password input: same styling, masked characters
- [ ] Focus pseudo-element with box-shadow intensification (0.1 → 0.2, 0.4s)
- [ ] "Sign In" button: purple (#bd59d4), pill-shaped (25px radius), 50px tall
- [ ] Button hover: darker purple (#9b24bd), smooth transition
- [ ] "Or login with" divider text in gray (#999999)
- [ ] Facebook social button: 50px circle, white bg, shadow, #3b5998 icon
- [ ] Google social button: 50px circle, white bg, shadow, icon image
- [ ] Social button hover: intensified shadow
- [ ] "Sign Up" link: deep purple (#4b2354), underlines on hover
- [ ] Responsive: works at 375px viewport width, 15px padding
- [ ] Semantic HTML (form, inputs, button, labels/placeholders)
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
