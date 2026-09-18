# Template: FormTouch (Contact Form)

## Purpose

Recreation of ColorLib "Contact Form V20" — a minimal full-screen contact form
with a Google Maps background, centered white card, and clean input layout.

- **Source**: [ColorLib Contact Form V20](https://colorlib.com/wp/template/contact-form-v20/)
- **Preview**: https://colorlib.com/etc/cf/ContactFrom_v20/index.html
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v20.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `formtouch` (apps/formtouch, `@free-react-templates/formtouch`)

## Design tokens (extracted from preview CSS)

| Token            | Value                            | Source                     |
| ---------------- | -------------------------------- | -------------------------- |
| Brand primary    | `#ff4b5a` (coral red)            | `.contact100-form-btn` bg  |
| Brand hover      | `#333333` (dark gray)            | button hover state         |
| Focus border     | `#ff4b5a` (coral red)            | `.focus-input100` border   |
| Body text        | `#333333` (dark gray)            | `.input100` color, title   |
| Text secondary   | `#666666` (medium gray)          | links, paragraphs          |
| Placeholder      | `#555555`                        | input/textarea placeholder |
| Form card bg     | `#ffffff`                        | `.wrap-contact100` bg      |
| Form card shadow | `0 3px 20px rgba(0,0,0,0.1)`    | `.wrap-contact100`         |
| Form card radius | `2px`                            | `.wrap-contact100`         |
| Input border     | `#dbdbdb` (light gray)           | `.wrap-input100`           |
| Input radius     | `2px`                            | `.wrap-input100`           |
| Input height     | `60px`                           | `input.input100`           |
| Input font size  | `20px`                           | `input.input100`           |
| Textarea height  | `min-height: 199px`              | `textarea.input100`        |
| Textarea font    | `15px`                           | `textarea.input100`        |
| Title font size  | `30px`                           | `.contact100-form-title`   |
| Button height    | `50px`                           | `.contact100-form-btn`     |
| Button min-width | `100px`                          | `.contact100-form-btn`     |
| Button font size | `18px`                           | `.contact100-form-btn`     |
| Button radius    | `2px`                            | `.contact100-form-btn`     |
| Map overlay      | `rgba(173,173,173,0.4)`         | `.container-contact100::before` |
| Symbol border    | `#e7e7e7`                        | `.contact100-form-symbol`  |
| Symbol radius    | `50%` (circle)                   | `.contact100-form-symbol`  |
| Symbol size      | `100px × 100px`                  | `.contact100-form-symbol`  |
| Error border     | `#c80000` (dark red)             | `.alert-validate`          |
| Font primary     | `'Open Sans', sans-serif`        | body, inputs, buttons      |

## Sections (in order, from preview DOM + screenshot)

1. **Full-screen Map Background** — Google Maps iframe fills viewport behind form; semi-transparent gray overlay (`rgba(173,173,173,0.4)`) sits between map and form card
2. **Contact Form Card** — Centered white card (800px wide, rounded 2px, box-shadow), with:
   - **Mail Icon Symbol** — circular (100px, border #e7e7e7, centered) positioned at top of card, overlapping above by 55px; contains envelope icon image
   - **Title** — "Drop Us A Message", centered, 30px, #333333
   - **Name + Email row** — two side-by-side input fields (Name, Email Address), 60px height, 20px font, 1px #dbdbdb border, 2px radius; on mobile they stack to full width
   - **Message textarea** — full width, min-height 199px, 15px font, same border style
   - **Send button** — coral red (#ff4b5a), 50px height, 18px white text, 2px radius, right-aligned; hover turns dark gray (#333333)
3. **Focus animation** — on input focus, a red (#ff4b5a) border scales in from 1.1×/1.3× to 1× with 0.4s transition
4. **Validation alerts** — on invalid submit, error message appears inside input area (red #c80000 text, white bg, 1px #c80000 border, 2px radius); tooltip-style with right alignment

## Gherkin requirements

### Feature: Full-screen Map Background

```gherkin
Scenario: Page displays a full-viewport map background
  Given the user loads the page
  Then a map background fills the entire viewport
  And a semi-transparent gray overlay covers the map

Scenario: Map is replaced with a static placeholder
  Given the user loads the page
  Then a static map-like background image is shown
  And the overlay tint is approximately rgba(173,173,173,0.4)
```

### Feature: Contact Form Card

```gherkin
Scenario: Form card is centered on the page
  Given the user loads the page
  Then a white card is centered horizontally and vertically
  And the card has a subtle box shadow

Scenario: Mail icon appears at top of card
  Given the form card is visible
  Then a circular icon (100px diameter) is positioned at the top of the card
  And the icon overlaps above the card border by approximately 55px
  And the icon contains an envelope/mail symbol

Scenario: Form title is displayed
  Given the form card is visible
  Then the title "Drop Us A Message" is centered at the top of the card
  And the title is 30px font size in dark gray (#333333)
```

### Feature: Form Input Fields

```gherkin
Scenario: Name and Email fields are side by side
  Given the form card is visible on desktop
  Then the Name input and Email Address input appear in a two-column row
  And each input is 60px tall with 20px placeholder text

Scenario: Message textarea is full width
  Given the form card is visible
  Then the "Write Us A Message" textarea spans the full card width
  And the textarea has a minimum height of 199px

Scenario: Fields stack on mobile
  Given the viewport width is less than 768px
  When the form inputs are displayed
  Then Name and Email fields each span full width (stacked vertically)

Scenario: Input fields have correct border style
  Given any input field is visible
  Then it has a 1px solid #dbdbdb border
  And the border radius is 2px
```

### Feature: Focus Animation

```gherkin
Scenario: Input focus shows red border animation
  Given the Name input is visible
  When the user clicks into the Name input
  Then a coral red (#ff4b5a) border appears around the input
  And the border animates from scaled (1.1× width, 1.3× height) to normal
  And the animation duration is 0.4 seconds

Scenario: Focus border disappears on blur
  Given the Name input has focus
  When the user clicks outside the input
  Then the coral red focus border fades out
```

### Feature: Send Button

```gherkin
Scenario: Send button is coral red and right-aligned
  Given the form card is visible
  Then a "Send" button appears at the bottom right of the form
  And the button background is coral red (#ff4b5a)
  And the button text is white, 18px font
  And the button height is 50px with 2px border radius

Scenario: Send button hover changes color
  Given the Send button is visible
  When the user hovers over the Send button
  Then the button background changes to dark gray (#333333)
  And the transition takes 0.4 seconds
```

### Feature: Form Validation

```gherkin
Scenario: Empty name triggers validation error
  Given the form is displayed
  And the Name input is empty
  When the user clicks "Send"
  Then a validation error message appears near the Name input
  And the error text is dark red (#c80000)
  And the error has a white background with red border

Scenario: Invalid email triggers validation error
  Given the form is displayed
  And the Email input contains "notanemail"
  When the user clicks "Send"
  Then a validation error message appears near the Email input
  And the error message indicates a valid email is required

Scenario: Empty message triggers validation error
  Given the form is displayed
  And the Message textarea is empty
  When the user clicks "Send"
  Then a validation error message appears near the Message textarea

Scenario: All fields valid enables submission
  Given the form is displayed
  And the Name input contains "John Doe"
  And the Email input contains "john@example.com"
  And the Message textarea contains "Hello!"
  When the user clicks "Send"
  Then no validation errors are shown
  And the form attempts submission
```

### Feature: Responsive Design

```gherkin
Scenario: Card padding adjusts on small screens
  Given the viewport width is less than 576px
  Then the form card padding reduces to approximately 15px horizontal

Scenario: Form remains centered on all viewports
  Given any viewport size
  Then the form card is centered both horizontally and vertically
```

## Verification checklist

- [ ] Map background (or static placeholder) fills entire viewport
- [ ] Semi-transparent overlay is applied over the background
- [ ] White card is centered with box-shadow (0 3px 20px rgba(0,0,0,0.1))
- [ ] Circular mail icon (100px) overlaps card top by ~55px
- [ ] Title "Drop Us A Message" centered, 30px, #333333
- [ ] Name + Email inputs in 2-col row on desktop, stacked on mobile
- [ ] Input fields: 60px height, 20px font, #dbdbdb border, 2px radius
- [ ] Textarea: min-height 199px, 15px font
- [ ] Focus animation: #ff4b5a border scales in 0.4s
- [ ] Send button: #ff4b5a bg, 50px height, 18px white text, right-aligned
- [ ] Send button hover: #333333 bg, 0.4s transition
- [ ] Validation errors: #c80000 text, tooltip-style, appear on invalid submit
- [ ] Responsive: inputs stack on <768px, padding reduces on <576px
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Package name: @free-react-templates/formtouch
- [ ] CNAME: formtouch.free.componentdock.com
