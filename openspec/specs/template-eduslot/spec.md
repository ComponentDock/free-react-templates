# Template: EduSlot (Registration Form)

## Purpose

Recreation of ColorLib template **Reg Form V12** (`colorlib-regform-12`).
- Preview: https://preview.colorlib.com/theme/colorlib-regform-12/ (404 — fallback to screenshot only)
- Source page: https://colorlib.com/wp/template/colorlib-regform-12/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-12.jpg
- Category: Registration / Appointment Form — Education appointment scheduling
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens

| Token             | Value                          | Notes                                    |
|-------------------|--------------------------------|------------------------------------------|
| Background image  | Full-bleed education scene     | Students in classroom; dark overlay      |
| Overlay           | rgba(0,0,0,0.45)              | Semi-transparent dark over background    |
| Card background   | #ffffff                        | White, left-aligned panel                |
| Card width        | ~55% of viewport               | Left side, no border-radius              |
| Card padding      | 40–48px                        | Generous internal spacing                |
| Card shadow       | none (flat)                    | No visible drop shadow                   |
| Heading font      | sans-serif, uppercase, bold    | "EDUCATION APPOINTMENT FORM"             |
| Heading color     | #333333                        | Dark charcoal                            |
| Body font         | Clean sans-serif (Roboto-like) | System/Google font                       |
| Text color        | #333333                        | Dark for labels/headings                 |
| Label color       | #999999                        | Light gray placeholder-style labels      |
| Field border      | 1px solid #e0e0e0             | Bottom border only, clean horizontal     |
| Field padding     | 12–16px vertical               | Comfortable input height                 |
| Select dropdown   | Custom styled, right-aligned   | Chevron icon on right                    |
| Checkbox          | Standard, small                | Inline with Terms text                   |
| Link color        | #1a73e8                        | Blue for "Terms and Conditions"          |
| Button background | #6c63ff                        | Purple/periwinkle accent                 |
| Button text       | #ffffff                        | White                                    |
| Button padding    | 14px 28px                      | Rounded corners (border-radius ~4px)     |
| Button font       | 14px, bold, uppercase          | "REQUEST AN APPOINTMENT"                 |
| Button hover      | Slightly darker shade          | ~#5a52d5                                 |
| Section spacing   | 16–24px between fields         | Vertical rhythm                          |
| Bottom area       | White/light                     | Below the form, extends to viewport edge |

## Layout Structure

1. **Full-bleed background** — education image covering entire viewport
2. **Dark overlay** — semi-transparent over background image
3. **Left-aligned card** (~55% width) — white, contains entire form
4. **Form title** — uppercase, bold, dark, top of card
5. **Text inputs** — Title, Your Name, Email, Phone number (all bottom-bordered)
6. **Select dropdown** — Course Type (styled select)
7. **Secondary heading** — "How would you like to be located?" bold
8. **Select dropdowns** — Contact method ("By phone") + Hours ("Hours: 8am 10pm")
9. **Checkbox + label** — "I agree to the Terms and Conditions" (link on "Terms and Conditions")
10. **Submit button** — "Request an appointment", purple, left-aligned
11. **White space below** — extends to viewport bottom

## Gherkin Requirements

### Scenario: Full-viewport layout
```gherkin
Given the page loads
Then the background image covers the full viewport
And a dark overlay covers the background
And a white card panel appears on the left ~55% of the viewport
```

### Scenario: Form title visible
```gherkin
Given the form card is visible
Then the title "EDUCATION APPOINTMENT FORM" is displayed
And the title is uppercase, bold, and dark colored
And the title is positioned at the top of the card with padding
```

### Scenario: Personal information fields
```gherkin
Given the form card is visible
Then there are four text input fields in order:
  | Field        | Placeholder    |
  | Title        | Title          |
  | Your Name    | Your Name      |
  | Email        | Email          |
  | Phone number | Phone number   |
And each field has a light gray bottom border only
And each field has placeholder text in light gray
```

### Scenario: Course Type dropdown
```gherkin
Given the form card is visible
Then a "Course Type" dropdown select is displayed below the text inputs
And it shows a dropdown chevron on the right
```

### Scenario: Contact preference section
```gherkin
Given the form card is visible
Then a bold heading "How would you like to be located?" is displayed
And a dropdown for contact method is shown (default: "By phone")
And a dropdown for hours is shown (default: "Hours : 8am 10pm")
```

### Scenario: Terms and conditions checkbox
```gherkin
Given the form card is visible
Then a checkbox is displayed with label "I agree to the"
And "Terms and Conditions" is a clickable link styled in blue
```

### Scenario: Submit button
```gherkin
Given the form card is visible
Then a purple button labeled "Request an appointment" is displayed
And the button has white text on a purple (#6c63ff) background
And the button is left-aligned below the checkbox
And hovering the button darkens the background slightly
```

### Scenario: Right side of viewport
```gherkin
Given the page loads
Then the right side of the viewport shows only the background image
And no card or form elements appear on the right side
```

### Scenario: Responsive behavior
```gherkin
Given the viewport is narrow (mobile)
Then the card should expand to near-full width
And the background image remains visible above/below the card
```

## Verification Checklist

- [ ] Full-viewport background image with dark overlay
- [ ] Left-aligned white card (~55% width, no border-radius)
- [ ] Uppercase bold heading "EDUCATION APPOINTMENT FORM"
- [ ] Four text inputs: Title, Your Name, Email, Phone number
- [ ] Bottom-border-only input styling with light gray placeholders
- [ ] Course Type styled select dropdown
- [ ] Bold sub-heading "How would you like to be located?"
- [ ] Contact method dropdown (default: "By phone")
- [ ] Hours dropdown (default: "Hours : 8am 10pm")
- [ ] Checkbox with "I agree to the Terms and Conditions" link
- [ ] Purple submit button "Request an appointment"
- [ ] Responsive: card expands on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
