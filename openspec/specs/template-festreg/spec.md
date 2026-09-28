# Template: Festreg (Registration Form)

## Purpose

Recreation of ColorLib "Reg Form V35" (`colorlib-regform-35`) — a concert/event registration form template with a full-viewport background image, a rounded card with semi-transparent inputs, and a red submit button.

- **Source:** https://colorlib.com/wp/template/colorlib-regform-35/
- **Live preview:** https://colorlib.com/etc/regform/colorlib-regform-35/ (Form-v9)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Registration / Concert Form
- **Fallback note:** The standard preview.colorlib.com/theme/ URL returns 404. Design tokens extracted from the alternate ColorLib-hosted preview HTML and CSS.

## Design tokens (from reference CSS)

| Token | Value | Notes |
|---|---|---|
| `--page-bg` | `#4077c8` | Solid blue background, full viewport |
| `--card-radius` | `15px` | Rounded card corners |
| `--card-margin` | `185px 0` | Top/bottom margin for centering |
| `--font-family` | `Nunito` | Google Fonts (400, 700) |
| `--text-color` | `#FFFFFF` | White text on blue |
| `--heading-size` | `35px` | h2 "Registration Form" |
| `--heading-underline` | `#FFFFFF, 73px × 3px` | White bar under heading, centered |
| `--input-bg` | `rgba(255, 255, 255, 0.2)` | Semi-transparent white |
| `--input-border` | `2px solid #ccc` | Light gray border |
| `--input-border-focus` | `2px solid #999` | Darker gray on focus |
| `--input-radius` | `27.5px` | Pill-shaped inputs |
| `--input-padding` | `14.5px 0px 14.5px 30px` | Left-padded, vertical spacing |
| `--placeholder-color` | `#e5e5e5` | Light gray placeholder text |
| `--btn-bg` | `#f25d5d` | Coral/red submit button |
| `--btn-hover-bg` | `#d95252` | Darker red on hover |
| `--btn-radius` | `25px` | Pill-shaped button |
| `--btn-width` | `180px` | Fixed button width |
| `--btn-shadow` | `0px 8px 16px rgba(0,0,0,0.2)` | Subtle drop shadow |
| `--btn-margin` | `20px 0 73px 35px` | Left offset + bottom spacing |
| `--card-padding` | `30px 135px 30px 100px` | Form inner padding |
| `--input-font-size` | `16px, weight 700` | Bold placeholder/input text |
| `--heading-margin-bottom` | `55px` | Space below heading |

## Layout structure

1. **Page wrapper (`.page-content`)** — full viewport, solid blue (`#4077c8`) background, flex center both axes. Background image set on `.form-v9-content` via `background-image: url('images/form-v9.jpg')` — use placeholder `https://picsum.photos/seed/festreg-hero/975/600`.
2. **Card (`.form-v9-content`)** — 975px wide, `border-radius: 15px`, background image covers the card. Font family Nunito, white text, font-weight 700.
3. **Form (`.form-detail`)** — padded `30px 135px 30px 100px`. Contains heading + input rows + submit button.
4. **Heading** — "Registration Form" in 35px white text, centered, with a 73px × 3px white underline bar positioned absolutely below.
5. **Input rows (`.form-row-total`)** — two-column flex layout with `justify-content: space-between`. Each input column is 45% width.
   - Row 1: Your Name + Your Email
   - Row 2: Your Password + Confirm Password
6. **Inputs** — pill-shaped (`border-radius: 27.5px`), semi-transparent white background (`rgba(255,255,255,0.2)`), 2px solid #ccc border, 16px Nunito 700 font. Focus: border darkens to #999. Placeholder color: #e5e5e5. Margin-bottom: 45px between rows.
7. **Submit button (`.register`)** — "Register" text, coral red (`#f25d5d`) background, white text, 25px radius (pill), 180px width, 8px 16px drop shadow. Hover darkens to `#d95252`. Left-offset by 35px.
8. **Mobile (≤767px)** — input rows stack vertically (flex-direction: column), each input 100% width.
9. **Small mobile (≤575px)** — form padding reduces to `30px 45px 30px 10px`.

## Gherkin scenarios

### Scenario: Page renders with blue background and card
```gherkin
Given the user opens Festreg
Then the page background is solid blue (#4077c8)
And a rounded card (15px radius) is centered in the viewport
And the card displays a background image
```

### Scenario: Heading displays with underline
```gherkin
Given the user opens Festreg
Then the heading "Registration Form" is visible in 35px white text
And a white underline bar (73px wide, 3px tall) is centered below the heading
```

### Scenario: Two-column input layout
```gherkin
Given the user opens Festreg on desktop (>767px)
Then inputs are arranged in two columns with space-between alignment
And the first row contains "Your Name" and "Your Email"
And the second row contains "Your Password" and "Confirm Password"
```

### Scenario: Input styling and focus state
```gherkin
Given the user views the registration form
Then each input has a pill shape (border-radius 27.5px) with semi-transparent white background
And the placeholder text is light gray (#e5e5e5)
When the user focuses an input
Then the border color changes from light gray (#ccc) to darker gray (#999)
```

### Scenario: Submit button hover
```gherkin
Given the registration form is visible
When the user hovers over the "Register" button
Then the button background changes from coral red (#f25d5d) to darker red (#d95252)
And the button retains its pill shape (25px radius) and drop shadow
```

### Scenario: Mobile responsive layout
```gherkin
Given the user opens Festreg on mobile (≤767px)
Then the input rows stack vertically instead of side-by-side
And each input stretches to full width
And on very small screens (≤575px) the form padding reduces
```

### Scenario: Form field presence
```gherkin
Given the user opens Festreg
Then four input fields are visible: Your Name, Your Email, Your Password, Confirm Password
And a "Register" submit button is visible below the inputs
```

## Verification checklist

- [ ] Page has solid blue (#4077c8) background covering full viewport
- [ ] Card has 15px border-radius and background image (placeholder)
- [ ] Heading "Registration Form" centered with white underline bar
- [ ] Two-column layout for inputs on desktop
- [ ] Inputs are pill-shaped with semi-transparent white background
- [ ] Focus state changes border to #999
- [ ] Placeholder text is #e5e5e5 in Nunito 700 font
- [ ] Submit button: coral red (#f25d5d), 25px radius, 180px wide, drop shadow
- [ ] Button hover: darker red (#d95252)
- [ ] Mobile (≤767px): rows stack vertically
- [ ] Small mobile (≤575px): reduced padding
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No references to ColorLib in app code
