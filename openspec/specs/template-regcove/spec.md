# Template: Regcove (Registration / Job Application Form)

## Purpose

Recreation of ColorLib's **Regform 6** — a single-page job application form
template with a dark background, centered white card, left-right field layout,
file upload, and blue submit button.

- **Source slug:** `colorlib-regform-6`
- **Preview URL:** https://colorlib.com/wp/template/colorlib-regform-6/
- **Live demo:** https://colorlib.com/etc/regform/colorlib-regform-6/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live demo CSS (`css/style.css`) at
`https://colorlib.com/etc/regform/colorlib-regform-6/`.

| Token             | Value                          | Usage                            |
|-------------------|--------------------------------|----------------------------------|
| `--bg-dark`       | `#1a1a1a`                      | Page background (full viewport)  |
| `--white`         | `#fff`                         | Card body / footer background    |
| `--border`        | `#e5e5e5`                      | Card border, form-row separators |
| `--label-color`   | `#333`                         | Field label text                 |
| `--input-border`  | `#cccccc`                      | Input / textarea borders         |
| `--input-text`    | `#666`                         | Input text, file info text       |
| `--placeholder`   | `#999`                         | Placeholder text, desc text      |
| `--btn-primary`   | `#2c6ed5`                      | Submit button background         |
| `--btn-hover`     | `#185ac1`                      | Submit button hover              |
| `--btn-text`      | `#fff`                         | Submit button text               |
| `--file-btn-bg`   | `#666666`                      | "Choose file" button background  |
| `--file-btn-hover`| `#1b1b1b`                      | File button hover                |
| Font family       | `"Open Sans", Arial, sans-serif`| Body + headings                 |
| Heading weight    | `700` (bold)                   | Title text                       |
| Body weight       | `400` (regular)                | Body text                        |
| Card border-radius| `3px`                          | Card, inputs                     |
| Button radius     | `5px`                          | Submit button                    |
| Card max-width    | `900px`                        | Centered wrapper                 |

### Visual Design Notes (from screenshot)

- Full-viewport dark background (`#1a1a1a`) with vertical padding (100px top, 50px bottom).
- "Apply for job" heading: white, bold, 36px, left-aligned above the card.
- Small CSS triangle (10px) at top-left of card body points up toward the heading.
- Card body: white background, `1px solid #e5e5e5` border (no top border), `30px 0` padding.
- Each form row: left label (188px width, bold, 15px) + right input, separated by `1px solid #e5e5e5` bottom border, padded `24px 55px`.
- Inputs: transparent background, `1px solid #cccccc` border, `3px` radius, `0 20px` padding, `38px` line-height, `15px` font.
- Textarea: same style, `min-height: 120px`, `padding: 10px 20px`.
- Focus effect: `box-shadow: 0px 1px 5px rgba(0,0,0,0.15)` + `translateY(-3px)` lift.
- File upload: hidden `<input type="file">` + styled `<label>` with gray background, `3px` radius.
- Card footer: white background, border top none, `50px 55px` padding, contains the blue submit button.
- Submit button: `#2c6ed5` background, white text, `5px` radius, `50px` line-height, `0 30px` horizontal padding, bold 15px, `text-transform: capitalize`.
- Responsive: at `<768px`, form rows stack vertically, padding reduces to `30px`.

## Gherkin Requirements

### Scenario: Page renders with dark background and centered card
```
Given the user opens the Regcove page
Then the page background should be dark (#1a1a1a)
And a centered white card should be visible with max-width 900px
```

### Scenario: Heading displays above the card
```
Given the user views the page
Then a heading "Apply for job" should appear above the card
And the heading should be white, bold, and left-aligned
```

### Scenario: Full Name field
```
Given the user views the form
Then a "Full name" label should appear on the left
And a text input should appear on the right
And the input should accept plain text
```

### Scenario: Email Address field
```
Given the user views the form
Then an "Email address" label should appear on the left
And an email input should appear on the right
And the placeholder should show "example@email.com"
```

### Scenario: Message field
```
Given the user views the form
Then a "Message" label should appear on the left
And a textarea should appear on the right
And the placeholder should show "Message sent to the employer"
And the textarea should have a minimum height of 120px
```

### Scenario: Upload CV field
```
Given the user views the form
Then an "Upload CV" label should appear on the left
And a styled file upload button labeled "Choose file" should appear
And helper text "Upload your CV/Resume or any other relevant file. Max file size 50 MB" should be shown below the button
```

### Scenario: Submit button
```
Given the user views the form footer
Then a "Send Application" button should be visible
And the button should have a blue (#2c6ed5) background
And the button should have rounded corners (5px radius)
```

### Scenario: Form row separator lines
```
Given the user views the form
Then each form row should be separated by a bottom border (#e5e5e5)
```

### Scenario: Input focus effect
```
Given the user clicks on an input field
Then the input should show a subtle box shadow
And the input should lift slightly (translateY -3px)
```

### Scenario: Responsive layout
```
Given the user views the page on a mobile viewport (< 768px)
Then form rows should stack vertically
And padding should reduce to 30px
```

### Scenario: Footer links to Component Dock
```
Given the user views the page
Then the footer should contain a link to https://www.componentdock.com/
And the link text should mention "Component Dock"
```

## Verification Checklist

- [ ] Page renders with dark full-viewport background
- [ ] Centered card with max-width 900px
- [ ] "Apply for job" heading above card (white, bold, 36px)
- [ ] CSS triangle between heading and card body
- [ ] Full Name field with left-right layout
- [ ] Email Address field with placeholder
- [ ] Message textarea with placeholder and min-height
- [ ] Upload CV with styled file button and helper text
- [ ] "Send Application" blue submit button in card footer
- [ ] Form row separator borders
- [ ] Input focus shadow + lift effect
- [ ] Responsive stacking at < 768px
- [ ] Footer with Component Dock link
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] CNAME: `regcove.free.componentdock.com`
