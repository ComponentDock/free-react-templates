# Template: Signvault (Signup Form / Registration)

## Purpose

Recreation of ColorLib **Signup Form 15** (`https://colorlib.com/wp/template/signup-form-15/`).
Preview: `https://preview.colorlib.com/theme/signup-form-15/` (unreachable at time of prep; design derived from TEMPLATES.md screenshot).

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a centered-card signup form on a light gray background. The white card
contains a "Sign Up" heading and four floating-label input fields (Full Name,
Email Address, Password, Confirm Password). A circular red submit button with a
send icon overlaps the bottom-right edge of the card. A subtle wave/swoosh
decoration adorns the card's bottom portion. Below the card: "Already have an
account? Sign In" (the Sign In link in the same red accent).

## Design Tokens

Extracted from TEMPLATES.md screenshot (preview page 404 at prep time):

| Token               | Value                    | Notes                                        |
| ------------------- | ------------------------ | -------------------------------------------- |
| brand-primary       | `#e74c3c`                | Red/coral — submit button, Sign In link       |
| brand-primary-hover | `#c0392b`                | Darker red on hover                           |
| page-bg             | `#f5f5f5`                | Light gray page background                   |
| card-bg             | `#ffffff`                | White form card                              |
| card-shadow         | `0 4px 20px rgba(0,0,0,0.08)` | Subtle drop shadow on card             |
| card-border-radius  | `16px`                   | Rounded corners on card                      |
| heading-color       | `#333333`                | Dark heading text                            |
| label-color         | `#999999`                | Muted floating labels                        |
| input-border        | `1px solid #e0e0e0`      | Light gray input borders                     |
| input-radius        | `8px`                    | Rounded input fields                         |
| input-focus-border  | `1px solid #e74c3c`      | Red focus border matching brand              |
| btn-submit-size     | `56px × 56px`            | Circular submit button                       |
| btn-submit-bg       | `#e74c3c`                | Red circle background                        |
| btn-submit-icon     | `#ffffff`                | White send/arrow icon                        |
| btn-submit-shadow   | `0 4px 12px rgba(231,76,60,0.4)` | Shadow on floating button              |
| wave-color          | `#f0f0f0` / `#e8e8e8`   | Subtle gray wave decoration at card bottom   |
| link-color          | `#e74c3c`                | "Sign In" link matches brand                 |
| link-text           | `rgba(0,0,0,0.6)`        | "Already have an account?" text color         |
| heading-font        | Poppins (Google Fonts)    | Clean sans-serif heading                     |

### Font

- **Google Font:** Poppins, weights 300, 400, 500, 600, 700
- Fallback: Arial, sans-serif
- Loaded in `index.html` via `<link>` to Google Fonts

## Section Structure (from screenshot)

1. **Page Background** (`min-h-screen bg-gray-100`)
   - Light gray (`#f5f5f5`) full-page background
   - Centered flex container

2. **Form Card** (`bg-white rounded-2xl shadow-lg max-w-md w-full mx-auto`)
   - White card, ~450px max-width, rounded corners (16px)
   - Subtle box-shadow

3. **Card Header** (padding)
   - h2: "Sign Up" — dark heading, left-aligned inside card
   - Margin-bottom separating heading from first input

4. **Form Fields** (4 floating-label inputs)
   - **Full Name** — text input, placeholder "John Doe"
   - **Email Address** — email input, placeholder "johndoe@gmail.com"
   - **Password** — password input, placeholder "Password"
   - **Confirm Password** — password input, placeholder "Confirm Password"
   - Each input: light gray border, 8px radius, padding for floating label
   - Labels float above on focus/filled state (muted gray `#999`)

5. **Submit Button** (floating circular button)
   - 56×56px circle, `#e74c3c` background
   - White send/arrow icon (paper-plane or arrow-right)
   - Positioned overlapping card bottom-right edge (negative margin or absolute)
   - Red shadow on hover

6. **Wave Decoration** (SVG or CSS)
   - Subtle gray wave/swoosh at bottom of card interior
   - Lighter than card background (`#f0f0f0` → transparent)

7. **Footer Link**
   - "Already have an account? **Sign In**"
   - "Already have an account?" in muted dark text
   - "Sign In" as red accent link (`#e74c3c`), underlined

## Gherkin Scenarios

### Scenario: Page loads with centered card

- Given the user visits the template page
- When the page finishes loading
- Then a white card is centered on a light gray background
- And the card has rounded corners and a subtle shadow

### Scenario: Card displays heading

- Given the page is loaded
- Then a "Sign Up" heading is visible inside the card
- And the heading is left-aligned

### Scenario: Form has four fields

- Given the page is loaded
- Then a "Full Name" text input is present with placeholder "John Doe"
- And an "Email Address" input is present with placeholder "johndoe@gmail.com"
- And a "Password" input is present with placeholder "Password"
- And a "Confirm Password" input is present with placeholder "Confirm Password"

### Scenario: Floating labels

- Given the page is loaded
- When the user focuses on an input field
- Then the corresponding label floats above the input text
- And the label color is muted gray

### Scenario: Input focus state

- Given the page is loaded
- When the user clicks on an input field
- Then the input border changes to the brand red color (#e74c3c)

### Scenario: Circular submit button

- Given the page is loaded
- Then a circular red button is visible
- And the button has a white send/arrow icon inside
- And the button overlaps the bottom-right edge of the card

### Scenario: Submit button hover

- Given the page is loaded
- When the user hovers over the circular submit button
- Then the button shows a red-tinted shadow effect
- And the button icon remains white

### Scenario: Wave decoration

- Given the page is loaded
- Then a subtle wave/swoosh decoration is visible at the bottom of the card
- And the wave is in a light gray tone

### Scenario: Sign In link

- Given the page is loaded
- Then text "Already have an account?" is visible below the card
- And a "Sign In" link is displayed in the brand red color
- And clicking the link navigates (or simulates navigation)

### Scenario: Form validation

- Given the page is loaded
- When the user clicks the submit button without filling any fields
- Then HTML5 validation prevents submission
- And the browser shows a validation message on the first empty required field

### Scenario: Responsive layout

- Given the user is on a mobile viewport (width < 640px)
- When the page loads
- Then the card takes full width with horizontal padding
- And all form fields remain accessible and readable

### Scenario: Footer links to Component Dock

- Given the user views the page footer
- Then a link to componentdock.com is present
- And the link opens in a new tab

## Verification Checklist

- [ ] Card is centered on light gray (#f5f5f5) background
- [ ] Card has white background, 16px border-radius, subtle shadow
- [ ] "Sign Up" heading is left-aligned inside card
- [ ] Full Name input with "John Doe" placeholder
- [ ] Email Address input with "johndoe@gmail.com" placeholder
- [ ] Password input with "Password" placeholder
- [ ] Confirm Password input with "Confirm Password" placeholder
- [ ] Floating labels appear above inputs on focus/fill
- [ ] Input focus border changes to brand red (#e74c3c)
- [ ] Circular 56×56px red submit button with white icon
- [ ] Submit button overlaps card bottom-right edge
- [ ] Wave/swoosh decoration at card bottom in light gray
- [ ] "Already have an account? Sign In" text below card
- [ ] "Sign In" link is red (#e74c3c), underlined
- [ ] Brand red (#e74c3c) used consistently (button, link, focus)
- [ ] Font is Poppins (Google Fonts)
- [ ] Responsive: card takes full width on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
