# Template: Formly (Event Registration Form)

## Purpose

Recreation of ColorLib "Colorlib Regform 5" — a centered event registration form with a dark header bar, labeled form fields (name, company, email, phone, subject dropdown, customer radio), and a coral submit button on a purple-to-cyan gradient background.

- **Source**: https://colorlib.com/wp/template/colorlib-regform-5/
- **Preview**: https://preview.colorlib.com/theme/colorlib-regform-5/ (unreachable at time of analysis; screenshot used as sole reference)
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category**: Registration form (single-card, event-focused)

## Design tokens

Extracted from screenshot analysis (preview CSS unavailable):

| Token | Value | Source |
|-------|-------|--------|
| Background gradient | `linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)` | Full-page purple-to-cyan diagonal gradient |
| Card header background | `#1E1E2E` dark charcoal | Dark bar at top of card |
| Card header text | `#FFFFFF` white | Title text color |
| Card header font-size | `24px` | "EVENT REGISTRATION FORM" heading |
| Card header font-weight | `700` bold | Uppercase heading |
| Card header padding | `24px 40px` | Dark header bar internal spacing |
| Card body background | `#FFFFFF` white | Form body area |
| Card border-radius | `8px` | Rounded corners on card |
| Card box-shadow | `0 8px 32px rgba(0,0,0,0.12)` | Subtle drop shadow |
| Card max-width | `700px` | Centered card width |
| Card body padding | `40px` | Internal padding for form fields |
| Font family | `"Poppins", sans-serif` | Google Fonts — weights 400, 600, 700 |
| Label color | `#1F2937` dark gray-800 | Bold field labels |
| Label font-size | `14px` | Field label size |
| Label font-weight | `600` semibold | Bold labels |
| Label margin-bottom | `6px` | Space below label to input |
| Input background | `#E5E7EB` gray-200 | Light gray input backgrounds |
| Input border | `none` | No visible border |
| Input border-radius | `6px` | Rounded input corners |
| Input padding | `0 16px` | Horizontal input padding |
| Input font-size | `14px` | Input text size |
| Input text color | `#6B7280` gray-500 | Placeholder text color |
| Input line-height | `44px` | Input height |
| Input group margin-bottom | `20px` | Space between field groups |
| Placeholder text color | `#9CA3AF` gray-400 | Subtle placeholder text |
| Column gap | `16px` | Space between side-by-side inputs |
| Select background | `#E5E7EB` gray-200 | Same as text inputs |
| Select border-radius | `6px` | Rounded select corners |
| Select arrow color | `#6B7280` gray-500 | Chevron-down arrow |
| Select padding | `0 16px` | Same horizontal padding as inputs |
| Select height | `44px` | Same as text inputs |
| Radio circle size | `18px` | Custom radio button diameter |
| Radio checked color | `#22C55E` green-500 | Green dot when selected |
| Radio unchecked bg | `#E5E7EB` gray-200 | Unselected radio background |
| Radio text color | `#374151` gray-700 | Radio label text |
| Radio text font-size | `14px` | Radio label size |
| Radio gap | `40px` | Space between Yes/No options |
| Radio group margin-top | `8px` | Space below "Are you an existing customer?" text |
| Button background | `#EF4444` red-500 | Coral/red REGISTER button |
| Button hover | `#DC2626` red-600 | Darker on hover |
| Button text | `#FFFFFF` white | Button label color |
| Button font-size | `14px` | Button text size |
| Button font-weight | `600` semibold | Bold button text |
| Button padding | `0 32px`, height `44px` | Button sizing |
| Button border-radius | `6px` | Rounded button corners |
| Button text-transform | `uppercase` | REGISTER in caps |
| Button letter-spacing | `0.5px` | Slight letter spacing |
| Button margin-top | `24px` | Space above button from last field |
| Customer question text | `#1F2937` dark gray-800 | Bold question text |
| Customer question font-size | `14px` | Question text size |
| Customer question font-weight | `600` semibold | Bold question text |
| Customer question margin-top | `16px` | Space above question |

## Visual design notes (from screenshot analysis)

- Full-page gradient: purple (#8B5CF6) to cyan (#06B6D4) running diagonally from top-left to bottom-right.
- Centered white card with dark (#1E1E2E) header bar spanning full card width.
- Header contains "EVENT REGISTRATION FORM" in white, bold, uppercase, ~24px.
- White card body below header with generous padding (~40px).
- Form fields are vertically stacked with bold labels above each input.
- Name field: two side-by-side inputs (First Name / Last Name) with placeholder text.
- Company: single full-width input.
- Email: single full-width input.
- Phone: two side-by-side inputs (Area Code / Phone Number).
- Subject: full-width dropdown with "Choose option" default, chevron-down icon on right.
- "Are you an existing customer?" bold question text with Yes/No radio buttons.
- Yes radio selected by default with green (#22C55E) inner dot.
- REGISTER button: coral/red (#EF4444), uppercase, rounded, centered below the form.
- All inputs share the same light gray (#E5E7EB) background with no visible border.
- Clean, minimal aesthetic — no images, no icons (except dropdown chevron and radio dots).

## Requirements

### Page layout

```gherkin
  Scenario: page renders with gradient background
    When the page loads
    Then a full-page gradient background is displayed
    And the gradient goes from purple (#8B5CF6) to cyan (#06B6D4) at 135deg
    And a centered card is visible on the gradient

  Scenario: card structure
    When the page loads
    Then the card has a dark header bar (#1E1E2E) at the top
    And the card has a white body below the header
    And the card has border-radius 8px
    And the card has a drop shadow (0 8px 32px rgba(0,0,0,0.12))
    And the card max-width is 700px
    And the card is horizontally centered on the page
```

### Header

```gherkin
  Scenario: header renders with title
    When the page loads
    Then the dark header bar displays "EVENT REGISTRATION FORM"
    And the title text is white (#FFFFFF)
    And the title is bold, uppercase, ~24px font-size
    And the header has internal padding (~24px 40px)
```

### Name field

```gherkin
  Scenario: name field renders as two-column row
    When the form loads
    Then a "Name" label is visible
    And two input fields are displayed side by side
    And the left input has placeholder "First Name"
    And the right input has placeholder "Last Name"
    And both inputs have light gray (#E5E7EB) background
    And both inputs have border-radius 6px
    And both inputs have line-height 44px
    And the column gap between inputs is 16px
```

### Company field

```gherkin
  Scenario: company field renders as full-width input
    When the form loads
    Then a "Company" label is visible
    And a single full-width input is displayed below the label
    And the input has light gray (#E5E7EB) background
    And the input has border-radius 6px
```

### Email field

```gherkin
  Scenario: email field renders as full-width input
    When the form loads
    Then an "Email" label is visible
    And a single full-width input is displayed below the label
    And the input has light gray (#E5E7EB) background
```

### Phone field

```gherkin
  Scenario: phone field renders as two-column row
    When the form loads
    Then a "Phone" label is visible
    And two input fields are displayed side by side
    And the left input has placeholder "Area Code"
    And the right input has placeholder "Phone Number"
    And both inputs have light gray (#E5E7EB) background
    And the column gap between inputs is 16px
```

### Subject dropdown

```gherkin
  Scenario: subject dropdown renders with options
    When the form loads
    Then a "Subject" label is visible
    And a dropdown select is displayed below the label
    And the dropdown shows "Choose option" as the default
    And the dropdown has a gray (#6B7280) chevron-down arrow on the right
    And the dropdown background is light gray (#E5E7EB)
```

### Customer radio buttons

```gherkin
  Scenario: customer question renders with radio buttons
    When the form loads
    Then the text "Are you an existing customer?" is displayed in bold
    And two radio options are shown: "Yes" and "No"
    And "Yes" is selected by default with a green (#22C55E) inner dot
    And "No" is unselected with a gray (#E5E7EB) circle
    And the radio options have 40px gap between them
```

### Submit button

```gherkin
  Scenario: submit button renders with coral styling
    When the form loads
    Then a "REGISTER" button is visible below the customer question
    And the button has a coral/red background (#EF4444)
    And the button text is white
    And the button text is uppercase with letter-spacing 0.5px
    And the button has border-radius 6px
    And the button has height 44px and padding 0 32px

  Scenario: submit button hover state
    When I hover over the "REGISTER" button
    Then the button background changes to #DC2626
```

### Form input styling

```gherkin
  Scenario: all inputs share consistent styling
    Given the form is visible
    Then each text input has a #E5E7EB background
    And each text input has no visible border
    And each text input has border-radius 6px
    And each text input has padding 0 16px
    And each text input has line-height 44px
    And each input label is colored #1F2937 with font-size 14px and font-weight 600
    And each input group has 20px margin-bottom
```

### Responsive behavior

```gherkin
  Scenario: columns stack on mobile
    Given the viewport is 767px or narrower
    When the form loads
    Then all column pairs stack vertically (100% width each)
    And the card body padding reduces
```

## Verification checklist

- [ ] Full-page gradient background renders (purple #8B5CF6 → cyan #06B6D4, 135deg)
- [ ] White card centered with correct max-width (700px), 8px radius, drop shadow
- [ ] Dark header bar (#1E1E2E) with "EVENT REGISTRATION FORM" in white, bold, uppercase, ~24px
- [ ] Name: two side-by-side inputs (First Name / Last Name) with placeholders
- [ ] Company: single full-width input
- [ ] Email: single full-width input
- [ ] Phone: two side-by-side inputs (Area Code / Phone Number) with placeholders
- [ ] Subject: dropdown with "Choose option" default and chevron-down arrow
- [ ] "Are you an existing customer?" bold question with Yes/No radio buttons
- [ ] Yes selected by default with green #22C55E inner dot
- [ ] All inputs: #E5E7EB background, no border, 6px radius, 44px height
- [ ] All labels: #1F2937, 14px, font-weight 600
- [ ] REGISTER button: coral #EF4444, white text, uppercase, 6px radius, 44px height
- [ ] REGISTER hover: #DC2626
- [ ] Responsive: columns stack below 767px, padding reduces
- [ ] Font: Poppins loaded (weights 400, 600, 700)
- [ ] Footer: links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
