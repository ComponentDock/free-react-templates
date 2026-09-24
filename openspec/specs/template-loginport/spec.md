# Template: LoginPort (Login Form)

## Purpose

LoginPort is a single-page LOGIN FORM in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Login Form V8" free
template (source: https://colorlib.com/wp/template/login-form-v8/, preview:
https://colorlib.com/etc/lf/Login_v8/index.html — live preview reachable;
screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v8.jpg),
built under a DIFFERENT name (**LoginPort**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a single-page login form centered on a full-viewport white
background. The layout consists of:
1. A centered 500px-wide white card with rounded corners (border-radius: 20px)
   and a subtle box shadow
2. A green (#57b846) header strip at the top of the card with "Sign In" text
   in JosefinSans-Bold, 30px, white color
3. Username input — pill-shaped (border-radius: 27px), gray (#ebebeb) bg,
   55px tall, Ubuntu-Bold 15px, dark green text (#1b3815)
4. Password input — pill-shaped, same styling as username
5. Focus expansion effect — input background expands by 20px on focus
6. "Forgot Username / Password?" link — right-aligned, green (#57b846),
   Ubuntu-Regular 15px
7. "Sign in" submit button — pill-shaped (border-radius: 25px), green
   (#57b846) background, 50px tall, Ubuntu-Bold 15px uppercase, white text
8. "Don't have an account? / Sign up now" link at bottom center

The aesthetic is clean and minimal with heavily rounded (pill) shapes
throughout, matching the ColorLib login form series. Typography uses Ubuntu
(Regular, Bold) and JosefinSans-Bold for the title. The green brand color
provides the primary accent against the white/gray neutral palette.

**WHAT MAKES LOGINPORT DISTINCT (signature behaviors):**

1. **Green-branded card.** The card has a colored header strip (#57b846)
   with white title text, creating a branded look above the form fields.
2. **Pill-shaped inputs with focus expansion.** Input fields have
   border-radius: 27px and a focus pseudo-element that expands the visible
   area by 20px, creating a subtle interaction effect.
3. **Dual typography system.** Ubuntu for body/inputs and JosefinSans-Bold
   for the title — giving a distinctive visual hierarchy.
4. **Green accent throughout.** Brand color #57b846 appears in the header,
   button, links, and hover states — creating a cohesive green theme.
5. **Minimal structure.** No header nav, no sidebar, no images — just a
   centered card with sign-in fields and a sign-up link.

## Design tokens

- **Background**: `#ffffff` (full-viewport white, `min-height: 100vh`)
- **Card**: `width: 500px`, `background: #fff`, `border-radius: 20px`,
  `box-shadow: 0 3px 20px 0px rgba(0,0,0,0.1)`
- **Typography**:
  - Body font: `'Ubuntu', sans-serif` (Google Fonts — Regular 400, Bold 700)
  - Title font: `'Josefin Sans', sans-serif` (Google Fonts — Bold 700)
- **Title "Sign In"**: JosefinSans-Bold, 30px, color `#fff`, centered,
  on `#57b846` background strip (padding: 50px top, 39px bottom),
  absolute-positioned at card top, full width
- **Input fields (username, password)**: `background: #ebebeb`,
  `border-radius: 27px`, `height: 55px`, `padding: 0 35px`,
  font `Ubuntu-Bold 15px`, color `#1b3815`. No visible border.
- **Input placeholder**: color `#1b3815` (dark green, same as text)
- **Focus expansion**: `.focus-input100` pseudo-element, same `#ebebeb` bg,
  expands to `width: calc(100% + 20px)` on input focus, with 0.4s transition
- **Submit button**: `background: #57b846`, `border-radius: 25px`,
  `height: 50px`, `width: 100%`, font `Ubuntu-Bold 15px uppercase`,
  color `#fff`. Hover: `background: #1b3815`, 0.4s transition.
- **"Forgot" text (txt1)**: Ubuntu-Regular 15px, color `#999999`
- **"Username / Password?" link (txt2)**: Ubuntu-Regular 15px, color `#57b846`.
  Hover: color `#1b3815`.
- **"Don't have an account?" text**: Ubuntu-Regular 15px, color `#999999`
- **"Sign up now" link (txt3)**: Ubuntu-Bold 15px, color `#57b846`,
  `text-transform: uppercase`. Hover: color `#1b3815`.
- **Error validation**: `border: 1px solid #c80000`, `border-radius: 14px`,
  `color: #c80000`, font-size 13px, tooltip-style positioned at right of input
- **General link color**: `#666666`, hover `#1b3815`, transition 0.4s
- **Box model reset**: `* { margin: 0; padding: 0; box-sizing: border-box; }`

## Gherkin requirements

### Scenario: Full-viewport white background renders
Given the user navigates to LoginPort
Then the page body should display a white (#ffffff) background
And the background should cover the full viewport height

### Scenario: Login card renders centered
Given the user navigates to LoginPort
Then a card should be visible centered on the page
And the card should have rounded corners (border-radius: 20px)
And the card should have a subtle box shadow
And the card should have a white background

### Scenario: Green header strip with "Sign In" title renders
Given the user navigates to LoginPort
Then a green (#57b846) header strip should be visible at the top of the card
And the text "Sign In" should be displayed in the header
And the title text should be white and centered

### Scenario: Username input renders
Given the user navigates to LoginPort
Then an input field with placeholder "Username" should be visible
And the input should accept text input
And the input should be pill-shaped with gray (#ebebeb) background
And the input should be 55px tall

### Scenario: Password input renders
Given the user navigates to LoginPort
Then a password input with placeholder "Password" should be visible
And the input should mask typed characters
And the input should be pill-shaped with gray (#ebebeb) background

### Scenario: Input focus expansion effect
Given the user focuses on a username or password input
Then the input background area should expand slightly (by 20px width)
And the expansion should animate with a smooth transition

### Scenario: "Forgot Username / Password?" link renders
Given the user navigates to LoginPort
Then text "Forgot" should be visible
And a link labeled "Username / Password?" should be visible next to it
And the link should be right-aligned and green (#57b846)

### Scenario: Sign in submit button renders
Given the user navigates to LoginPort
Then a button labeled "Sign in" should be visible
And the button should be pill-shaped with green (#57b846) background
And the button should be full-width and 50px tall
And the button text should be uppercase and white

### Scenario: Sign in button hover effect
Given the user hovers over the "Sign in" button
Then the button background should change to dark green (#1b3815)
And the transition should animate smoothly (0.4s)

### Scenario: "Don't have an account?" sign-up section renders
Given the user navigates to LoginPort
Then text "Don't have an account?" should be visible at the bottom of the card
And a link labeled "Sign up now" should be visible below it
And the link should be uppercase and green (#57b846)
And clicking the link should be non-navigating (href="#")

### Scenario: Responsive layout on mobile
Given the user resizes the viewport to 375px width
Then the form should shrink to fit the viewport width
And the card should have reduced padding (15px)
And all inputs, buttons, and links should remain usable

### Scenario: Accessibility - semantic elements
Given the user navigates to LoginPort
Then the form should use semantic HTML elements
And the inputs should have associated labels or placeholders
And the button should have an accessible name

### Scenario: Footer links to Component Dock
Given the user navigates to LoginPort
Then the footer should contain a link to "https://www.componentdock.com/"
And the link text should reference "Component Dock"

## Verification checklist

- [ ] Ubuntu font loaded via Google Fonts (Regular, Bold)
- [ ] Josefin Sans font loaded via Google Fonts (Bold)
- [ ] Full-viewport white (#ffffff) background
- [ ] Card: 500px wide, white bg, border-radius 20px, shadow
- [ ] Green header strip (#57b846) at card top with "Sign In" title
- [ ] Username input: gray (#ebebeb) bg, pill-shaped, 55px tall
- [ ] Password input: gray (#ebebeb) bg, pill-shaped, masked
- [ ] Focus expansion effect on input fields (+20px width, 0.4s transition)
- [ ] "Forgot Username / Password?" link right-aligned, green
- [ ] "Sign in" button: green (#57b846), pill-shaped, 50px tall, uppercase
- [ ] Button hover: dark green (#1b3815), smooth transition
- [ ] "Don't have an account? / SIGN UP NOW" link centered at bottom
- [ ] Error validation tooltip style (red border, 14px radius)
- [ ] Responsive: works at 375px viewport width
- [ ] Semantic HTML (form, inputs, button, labels/placeholders)
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
