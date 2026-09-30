# Spec: SubmitBox — Signup Form Template

Recreation of ColorLib "Signup Form 13"
(https://colorlib.com/wp/template/signup-form-13/)

## Design Tokens

| Token                       | Value                                | Notes                 |
| --------------------------- | ------------------------------------ | --------------------- |
| Brand / accent (left panel) | #7fa998                              | Teal green            |
| Primary button              | #007bff                              | Bootstrap blue        |
| Primary button hover        | #0069d9                              | Darker blue           |
| Body background             | #ffffff                              | White                 |
| Left panel text             | #ffffff                              | White on teal         |
| Heading color               | #000000                              | Black                 |
| Form text color             | #212529                              | Dark gray             |
| Input placeholder           | #6c757d                              | Gray                  |
| Input focus border          | #80bdff                              | Light blue            |
| Facebook                    | #44629b                              | Facebook blue         |
| Twitter                     | #1dade9                              | Twitter blue          |
| Font family                 | Roboto                               | Weights 400, 500, 700 |
| Card border radius          | 5px                                  | Rounded corners       |
| Card shadow                 | 0px 10px 34px -15px rgba(0,0,0,0.24) | Subtle shadow         |
| Social icon size            | 40x40                                | Square buttons        |

## Layout

Split-screen layout (desktop: two halves, mobile: stacked):

### Left Panel (green, #7fa998)

- Soccer ball SVG icon (use lucide CircleDashed or similar)
- Heading: "Soccer Ball" → keep as "Soccer Ball" (icon theme)
- Subtext: "Already have an account?"
- Button: "Sign In" (white outline, border-radius)

### Right Panel (white, form area)

- Heading: "Hello! Please signup to continue"
- Form fields:
  - Full Name (text input, placeholder "John Doe")
  - Email Address (email input, placeholder "johndoe@gmail.com")
  - Password (password input, placeholder "Password")
  - Confirm Password (password input, placeholder "Confirm Password")
- Submit button: "Sign Up" (blue #007bff, full width, rounded)
- Social login divider: "or Signup with"
- Social buttons: Facebook (#44629b), Twitter (#1dade9)
- Footer link: "I'm already a member! Sign In"
- Component Dock link in footer

## Components

1. `App.tsx` — Split-screen container
2. `LeftPanel.tsx` — Green panel with icon, heading, CTA
3. `SignupForm.tsx` — Form with inputs, submit, social login
4. `Footer.tsx` — Component Dock attribution

## Scenarios

- Renders heading "Sign Up #03" or "Hello! Please signup to continue"
- Renders all four input fields with correct placeholders
- Full Name field accepts text input
- Email field accepts email input
- Password field masks input
- Confirm Password field masks input
- Submit button is present and clickable
- Social login buttons render (Facebook, Twitter)
- Left panel shows icon and "Already have an account?" text
- "Sign In" button renders in left panel
- "I'm already a member! Sign In" link renders
- Footer links to componentdock.com
- Responsive: stacks on mobile, side-by-side on desktop
