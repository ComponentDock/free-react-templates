# Template: Regline (Job Application Form)

## Purpose

Recreation of ColorLib "Colorlib Regform 6" — a centered job application form on a dark background with labeled fields (full name, email, message textarea, CV upload) and a blue submit button.

- **Source**: https://colorlib.com/wp/template/colorlib-regform-6/
- **Preview**: https://colorlib.com/preview/colorlib-regform-6/ (iframe-based; screenshot used as primary reference)
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Category**: Registration / application form (single-card, job-focused)

## Design tokens

Extracted from screenshot analysis (preview CSS unavailable via direct fetch):

| Token | Value | Source |
|-------|-------|--------|
| Page background | `#212121` dark charcoal | Full-page dark background |
| Card background | `#FFFFFF` white | White form card centered on dark bg |
| Card max-width | `~700px` | Centered card width |
| Card border-radius | `4px` | Subtle rounded corners |
| Card box-shadow | `0 2px 8px rgba(0,0,0,0.15)` | Subtle drop shadow |
| Card padding | `40px 48px` | Generous internal spacing |
| Heading text | `#FFFFFF` white | "Apply for job" title |
| Heading font-size | `28px` | Large bold heading |
| Heading font-weight | `700` bold | Bold heading |
| Heading margin-bottom | `8px` | Space below heading |
| Heading decoration | Small blue triangle/arrow | Decorative element below heading |
| Font family | `"Poppins", sans-serif` | Google Fonts — weights 400, 600, 700 |
| Label color | `#333333` dark gray | Bold field labels |
| Label font-size | `15px` | Field label size |
| Label font-weight | `600` semibold | Bold labels |
| Label margin-bottom | `8px` | Space below label to input |
| Input background | `#FFFFFF` white | White input fields |
| Input border | `1px solid #DEE2E6` light gray | Subtle border |
| Input border-radius | `4px` | Rounded input corners |
| Input padding | `10px 16px` | Internal input padding |
| Input font-size | `14px` | Input text size |
| Input text color | `#212529` near-black | Typed text color |
| Input placeholder color | `#6C757D` gray | Placeholder text |
| Input line-height | `1.5` | Standard line height |
| Input group margin-bottom | `24px` | Space between field groups |
| Textarea min-height | `120px` | Multi-line message input |
| File input styling | Native file input with "Choose file" button | Standard browser file picker |
| File helper text | `#6C757D` gray, `12px` | "Upload your CV/Resume... Max file size 50 MB" |
| Button background | `#4A6CF7` blue | "Send Application" button |
| Button hover | `#3B5DE7` darker blue | Hover state |
| Button text | `#FFFFFF` white | Button label color |
| Button font-size | `15px` | Button text size |
| Button font-weight | `600` semibold | Bold button text |
| Button padding | `12px 28px` | Button sizing |
| Button border-radius | `4px` | Rounded button corners |
| Button margin-top | `16px` | Space above button from last field |
| Button cursor | `pointer` | Pointer cursor on hover |

## Visual design notes (from screenshot analysis)

- Full-page dark charcoal (#212121) background.
- Centered white card (~700px wide) with subtle shadow.
- Heading "Apply for job" in white bold text at top of dark area (above card).
- Small blue decorative triangle/arrow element below heading pointing into card.
- White card body contains form fields with generous padding.
- Form fields are vertically stacked: Full name (text input), Email address (text input with placeholder), Message (textarea), Upload CV (file input with helper text).
- Labels are bold, dark gray, left-aligned above each input.
- Inputs have light gray borders, white backgrounds, rounded corners.
- File input shows "Choose file" button with "No file chosen" text and helper text below.
- "Send Application" button is blue (#4A6CF7), rounded, positioned left-aligned below form fields.
- Clean, minimal, professional design with good spacing and contrast.

## Gherkin scenarios

### Page load
```gherkin
Scenario: Form page loads with correct structure
  Given the user visits the Regline application form page
  Then the page title reads "Apply for job"
  And a centered white card is displayed on a dark background
  And the form contains fields for full name, email, message, and CV upload
```

### Full name field
```gherkin
Scenario: User enters full name
  Given the form is displayed
  When the user types "John Doe" in the full name field
  Then the full name field contains "John Doe"
  And no validation error is shown

Scenario: Full name field is required
  Given the form is displayed
  When the user submits the form without entering a full name
  Then a validation error appears for the full name field
```

### Email field
```gherkin
Scenario: User enters valid email
  Given the form is displayed
  When the user types "john@example.com" in the email field
  Then the email field contains "john@example.com"
  And no validation error is shown

Scenario: Email field rejects invalid email
  Given the form is displayed
  When the user types "notanemail" in the email field
  And submits the form
  Then a validation error appears for the email field
```

### Message field
```gherkin
Scenario: User enters message
  Given the form is displayed
  When the user types a message in the message textarea
  Then the textarea displays the entered message

Scenario: Message field is required
  Given the form is displayed
  When the user submits the form without entering a message
  Then a validation error appears for the message field
```

### CV upload
```gherkin
Scenario: User uploads CV file
  Given the form is displayed
  When the user selects a PDF file via the file input
  Then the file name is displayed next to the Choose file button
  And helper text shows "Upload your CV/Resume or any other relevant file. Max file size 50 MB"

Scenario: CV upload rejects oversized file
  Given the form is displayed
  When the user selects a file larger than 50 MB
  Then a validation error indicates the file is too large
```

### Submit button
```gherkin
Scenario: Submit button is visible and styled
  Given the form is displayed
  Then a "Send Application" button is visible
  And the button has a blue background (#4A6CF7)
  And the button has white text

Scenario: Form submission with all fields valid
  Given the user fills in full name, email, message, and selects a CV file
  When the user clicks "Send Application"
  Then the form is submitted
```

### Responsive layout
```gherkin
Scenario: Form is responsive on mobile
  Given the user views the form on a 375px wide viewport
  Then the card adjusts to fit the viewport width
  And all form fields remain usable
  And the submit button remains accessible
```

## Verification checklist

- [ ] Page loads with dark background and centered white card
- [ ] "Apply for job" heading is white, bold, and prominently displayed
- [ ] Blue decorative element (triangle/arrow) appears below heading
- [ ] Full name input field has label and placeholder
- [ ] Email input field has label and placeholder "example@email.com"
- [ ] Message textarea has label and placeholder "Message sent to the employer"
- [ ] CV upload field shows "Choose file" button and helper text
- [ ] "Send Application" button is blue with white text
- [ ] All form fields are vertically stacked with consistent spacing
- [ ] Form validates required fields (name, email, message)
- [ ] Email validation rejects invalid formats
- [ ] File upload validates file size (max 50 MB)
- [ ] Responsive layout works on mobile viewports
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
