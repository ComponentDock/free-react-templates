# Template: FormGlow (Contact Form)

## Purpose

Recreation of ColorLib **Contact Form V14** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source**: https://colorlib.com/wp/template/contact-form-v14/
- **Preview URL**: https://preview.colorlib.com/theme/contact-form-v14/ (returned 404 at time of research — screenshot used as sole reference)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v14.jpg
- **Description**: A bright, gradient-background contact form centered on the page. Features a pink-to-purple gradient backdrop, a white rounded card containing validated form fields with uppercase labels, split first/last name row, and a dark pill-shaped Submit button with an arrow icon. Includes real-time validation feedback (green checkmark for valid, red border + X for invalid).

## Design Tokens

### Colors

| Element | Color | Notes |
|---|---|---|
| Background gradient start (left) | #E91E63 (pink/magenta) | Warm pink |
| Background gradient end (right) | #CE93D8 (light purple) | Soft lavender |
| Gradient direction | left to right (~horizontal) | Full-page background |
| Card background | #FFFFFF | White rounded card |
| Card shadow | 0 8px 32px rgba(0,0,0,0.15) | Subtle drop shadow |
| Card border-radius | ~8px | Rounded corners |
| Heading color | #222222 | Dark, bold "Contact Us" |
| Label color | #333333 | Uppercase labels |
| Input text color | #333333 | Dark input text |
| Placeholder color | #999999 | Light gray placeholder |
| Input border | #E0E0E0 | Light gray bottom/full border |
| Focus/valid border | #4CAF50 (green) | Valid field state |
| Invalid border | #F44336 (red) | Invalid field state |
| Checkmark icon | #4CAF50 (green) | Valid indicator |
| Invalid icon | #F44336 (red) | Invalid indicator |
| Submit button bg | #222222 (near-black) | Dark pill button |
| Submit button text | #FFFFFF | White text |
| Submit button icon | #FFFFFF | Arrow icon |

### Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Heading ("Contact Us") | System sans-serif (Inter fallback) | Bold (700) | ~28-32px |
| Field labels | System sans-serif | Medium (500) | ~12px, uppercase, letter-spacing |
| Input text | System sans-serif | Normal (400) | ~16px |
| Placeholder text | System sans-serif | Normal (400) | ~14-16px |
| Button text | System sans-serif | Medium (500) | ~16px |

### Button Styling

- Pill shape (border-radius ~24px / fully rounded)
- Dark near-black background (#222222)
- White text + right-arrow icon (→ or chevron)
- Padding: ~12px vertical, ~32px horizontal
- Centered below form fields
- Hover: slight brightness increase

### Form Layout

- Fields: First Name + Last Name side by side (50/50 row), then Email, Phone, Message stacked vertically
- Labels: UPPERCASE above each input ("YOUR NAME", "EMAIL ADDRESS", "PHONE NUMBER", "MESSAGE")
- Inputs: full-width within card, light border (outline or bottom), generous padding
- Validation: green checkmark for valid fields, red border + X icon for invalid
- Phone field: shows invalid state in the screenshot (red border + X icon)

## Requirements

### Requirement: Centered gradient background
The page SHALL display a full-page gradient background from pink/magenta on the left to light purple on the right.

#### Scenario: Gradient renders on page load
- **WHEN** the user loads the FormGlow page
- **THEN** the full viewport displays a horizontal gradient background
- **AND** the left side is a warm pink/magenta (#E91E63 area)
- **AND** the right side is a light purple/lavender (#CE93D8 area)

#### Scenario: Gradient covers full viewport
- **WHEN** the user resizes the browser window
- **THEN** the gradient fills the entire viewport regardless of size

### Requirement: Centered white card
The page SHALL display a centered white card containing the contact form.

#### Scenario: Card positioning
- **WHEN** the user views the page
- **THEN** a white rounded card is centered horizontally and vertically (or near-center) on the gradient background
- **AND** the card has rounded corners (~8px border-radius)
- **AND** the card has a subtle drop shadow

#### Scenario: Card dimensions
- **WHEN** the user views the card
- **THEN** the card width is approximately 480-560px (or responsive equivalent)
- **AND** the card has generous internal padding (~32-40px)

### Requirement: Contact form heading
The card SHALL display a "Contact Us" heading.

#### Scenario: Heading text
- **WHEN** the user views the card
- **THEN** the text "Contact Us" is displayed at the top of the card
- **AND** the text is bold, dark colored (~#222222), and centered
- **AND** the font size is approximately 28-32px

### Requirement: Split name row
The form SHALL display First Name and Last Name fields side by side.

#### Scenario: Name fields layout
- **WHEN** the user views the form
- **THEN** two text inputs appear on the same row
- **AND** the left input is labeled "YOUR NAME" (or has a "First Name" visual)
- **AND** the right input is labeled for last name
- **AND** both fields occupy ~50% width each

#### Scenario: Valid name field
- **WHEN** the user types a valid name into either name field
- **THEN** a green checkmark icon appears to the right of the field
- **AND** the field border turns green

### Requirement: Email field
The form SHALL display an Email Address field below the name row.

#### Scenario: Email field display
- **WHEN** the user views the form
- **THEN** a text input labeled "EMAIL ADDRESS" (uppercase) is displayed
- **AND** the input spans the full width of the card content area
- **AND** the input has placeholder text (e.g. "matthew@colorlib.com" as example)

#### Scenario: Valid email
- **WHEN** the user enters a valid email address
- **THEN** a green checkmark icon appears to the right of the field

### Requirement: Phone number field
The form SHALL display a Phone Number field with validation.

#### Scenario: Phone field display
- **WHEN** the user views the form
- **THEN** a text input labeled "PHONE NUMBER" (uppercase) is displayed
- **AND** the input spans full width

#### Scenario: Invalid phone validation
- **WHEN** the user enters an invalid phone number
- **THEN** the field border turns red (#F44336)
- **AND** a red X icon appears to the right of the field

### Requirement: Message textarea
The form SHALL display a Message textarea.

#### Scenario: Message field display
- **WHEN** the user views the form
- **THEN** a textarea labeled "MESSAGE" (uppercase) is displayed
- **AND** the textarea spans full width
- **AND** the textarea shows placeholder text (e.g. "Please enter your comments..")
- **AND** the textarea is taller than single-line inputs (~100-120px)

### Requirement: Submit button
The form SHALL include a Submit button with dark pill styling.

#### Scenario: Button display
- **WHEN** the user views the form
- **THEN** a "Submit" button is centered below the form fields
- **AND** the button has a dark near-black background (#222222)
- **AND** the button text is white
- **AND** the button is pill-shaped (fully rounded, border-radius ~24px)
- **AND** the button includes a right-arrow icon after the text

#### Scenario: Button hover
- **WHEN** the user hovers over the Submit button
- **THEN** the button shows a subtle hover effect (brightness or opacity change)

#### Scenario: Button click
- **WHEN** the user clicks the Submit button
- **THEN** the form submission is handled (prevent default, show confirmation or validation errors)

### Requirement: Real-time field validation
The form SHALL provide real-time validation feedback on each field.

#### Scenario: Valid field feedback
- **WHEN** the user enters valid data in a field
- **THEN** the field shows a green checkmark icon to the right
- **AND** the field border changes to green (#4CAF50)

#### Scenario: Invalid field feedback
- **WHEN** the user enters invalid data in a field
- **THEN** the field shows a red X icon to the right
- **AND** the field border changes to red (#F44336)

#### Scenario: Empty untouched field
- **WHEN** the user has not interacted with a field
- **THEN** the field shows a neutral gray border (#E0E0E0)
- **AND** no validation icon is displayed

### Requirement: Responsive layout
The form SHALL be responsive on mobile viewports.

#### Scenario: Mobile layout
- **WHEN** the user views on a viewport width less than 480px
- **THEN** the card takes up most of the viewport width (with margin)
- **AND** the name fields stack vertically instead of side by side
- **AND** the gradient background still fills the viewport

### Requirement: Footer attribution
The page SHALL include a footer with a Component Dock link.

#### Scenario: Component Dock link
- **WHEN** the user scrolls to the bottom of the page
- **THEN** a footer or attribution line is visible
- **AND** it links to https://www.componentdock.com/
- **AND** the link text reads "Component Dock"

## Verification Checklist

- [ ] Full-page pink-to-purple horizontal gradient background renders
- [ ] Centered white card with rounded corners and shadow displays
- [ ] "Contact Us" heading renders bold and centered at top of card
- [ ] First Name + Last Name fields appear side by side (50/50)
- [ ] Email Address field renders full width below name row
- [ ] Phone Number field renders full width below email
- [ ] Message textarea renders full width below phone
- [ ] All labels are uppercase with letter-spacing
- [ ] Valid fields show green checkmark and green border
- [ ] Invalid fields show red X and red border
- [ ] Submit button is dark pill-shaped with white text + arrow icon
- [ ] Submit button is centered below form
- [ ] Form is responsive: name fields stack on mobile (<480px)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `formglow.free.componentdock.com`
- [ ] `homepage` in package.json is `https://formglow.free.componentdock.com`
- [ ] `vite.config.ts` registers `injectUiSource()`
- [ ] Footer credits Component Dock (not ColorLib)
