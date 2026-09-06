# Template: ModalRosa (Modal)

## Purpose

Recreation of the ColorLib "Modal 13" template — a centered full-viewport page with a Bootstrap-style light pink modal popup featuring an email subscription form, Instagram branding, and a "No, thanks" / "Subscribe" dual-button layout.

- **Source:** [ColorLib Modal 13](https://colorlib.com/wp/template/modal-13/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-13/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-13.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token                 | Value                                 | Source                      |
| --------------------- | ------------------------------------- | --------------------------- |
| Body font             | `"Roboto", sans-serif`                | style.css `body`            |
| Heading font          | `"Roboto", sans-serif`                | style.css headings          |
| Body text color       | `#b3b3b3` (light gray)                | style.css `p`               |
| Modal text color      | `#fff` (white)                        | style.css `.modal`          |
| Modal heading color   | `#000` (black)                        | style.css `.modal h3`       |
| Modal body background | `#f9eaf2` (light pink)                | style.css `.bg-3`           |
| Modal border radius   | `7px`                                 | style.css `.modal`          |
| Modal content radius  | `7px`                                 | style.css `.modal-content`  |
| Overlay color         | transparent (no dark overlay)         | — (no `.overlay` class used)|
| Button border radius  | `4px`                                 | style.css `.btn`            |
| Close button color    | `#000` (black)                        | style.css `.close-btn`      |
| Form control border   | `transparent` with `box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1)` | style.css `.form-control` |
| Box shadow (modal)    | `0 10px 50px -10px rgba(0,0,0,0.9)`   | style.css `.modal-body`     |
| Logo width            | `70px`                                | style.css `.logo img`       |
| Cancel text color     | `rgba(255,255,255,0.5)`               | style.css `.cancel a`       |
| Cancel text size      | `13px`, bold                          | style.css `.cancel a`       |
| Separator line        | `1px solid rgba(255,255,255,0.3)`     | style.css `.line`           |

## Visual design (from screenshot + HTML)

The template shows a full-viewport centered layout with a light background. In the center is a heading "Modal #3" and a Bootstrap secondary button labeled "Launch modal". When clicked, a modal dialog appears centered on screen with:

1. **Background**: Light pink (`#f9eaf2`) — no dark overlay, no background image
2. **Close button**: Black X icon in the top-right corner, with transition on hover
3. **Logo**: Instagram SVG icon centered at the top, 70px wide
4. **Heading**: "Exclusives offer from Instagram" in black, 22px
5. **Description**: Paragraph text in light gray (#777) with the template's lorem ipsum
6. **Email form**: Full-width email input with transparent border and subtle shadow, placeholder "Enter your email address"
7. **Dual buttons**: Two equal-width buttons in a 2-column row:
   - Left: "No, thanks" (secondary/outline style)
   - Right: "Subscribe" (primary style)
8. **Cancel link**: Small text at the bottom: "The sky was cloudless and of a deep dark blue." in semi-transparent white, 13px bold

The overall aesthetic is clean, minimal, and friendly — light pink background with black text, Bootstrap-style form and buttons. No dark overlay, no background image, just a solid pink modal.

## Gherkin requirements

### Background: page structure

```gherkin
Scenario: Page loads with centered content
  Given the user visits the ModalRosa page
  Then a full-viewport centered layout is displayed
  And the heading "Modal #3" is visible
  And a "Launch modal" button is visible
```

### Modal trigger

```gherkin
Scenario: Opening the modal
  Given the user is on the ModalRosa page
  When the user clicks the "Launch modal" button
  Then a modal dialog appears centered on the screen
  And the modal has a light pink background (#f9eaf2)
  And the modal content is readable in dark text
```

### Modal close button

```gherkin
Scenario: Close button displays correctly
  Given the modal is open
  Then a close button (X) is displayed in the top-right corner
  And the close button is black
```

### Modal logo

```gherkin
Scenario: Modal logo displays correctly
  Given the modal is open
  Then a logo icon is centered at the top of the modal
  And the logo is approximately 70px wide
```

### Modal heading

```gherkin
Scenario: Modal heading displays correctly
  Given the modal is open
  Then the heading "Exclusives offer from Instagram" is displayed
  And the heading is black and approximately 22px
```

### Modal body content

```gherkin
Scenario: Modal body shows subscription form
  Given the modal is open
  Then a descriptive paragraph is shown below the heading
  And the paragraph text is in a light gray color
```

### Email subscription form

```gherkin
Scenario: Email subscription form layout
  Given the modal is open
  Then an email input field with placeholder "Enter your email address" is visible
  And the input has a transparent border with subtle box-shadow
  And a "No, thanks" button is displayed in the left column
  And a "Subscribe" button is displayed in the right column
  And both buttons are full-width within their columns
  And the buttons have a border-radius of 4px
```

### Cancel text

```gherkin
Scenario: Cancel text displays correctly
  Given the modal is open
  Then a cancel text is displayed at the bottom of the modal
  And the cancel text is in a semi-transparent white color
  And the cancel text is 13px and bold
```

### Dismiss actions

```gherkin
Scenario: Closing the modal via close button
  Given the modal is open
  When the user clicks the close button (X)
  Then the modal closes
  And the page returns to the initial state

Scenario: Closing the modal via "No, thanks" button
  Given the modal is open
  When the user clicks the "No, thanks" button
  Then the modal closes
  And the page returns to the initial state
```

### Modal overlay

```gherkin
Scenario: Modal has no dark overlay background
  Given the modal is open
  Then the modal body has a light pink background (#f9eaf2)
  And there is no dark semi-transparent overlay
```

### Responsive behavior

```gherkin
Scenario: Modal is responsive on mobile
  Given the user views the page on a mobile device
  When the modal is open
  Then the modal content stacks vertically
  And the email input and buttons stack vertically
  And all text remains readable
```

## Verification checklist

- [ ] Page loads with centered "Modal #3" heading and "Launch modal" button
- [ ] Full viewport height layout (100vh)
- [ ] "Launch modal" button triggers centered modal dialog
- [ ] Modal has light pink background (#f9eaf2)
- [ ] No dark overlay on modal
- [ ] Close button (X) in top-right corner, black
- [ ] Instagram SVG logo centered at top, ~70px wide
- [ ] Heading "Exclusives offer from Instagram" in black, 22px
- [ ] Description paragraph in light gray (#777)
- [ ] Email input with transparent border and subtle box-shadow
- [ ] "No, thanks" button (secondary) in left column
- [ ] "Subscribe" button (primary) in right column
- [ ] Both buttons full-width within columns, border-radius 4px
- [ ] Cancel text in semi-transparent white, 13px bold
- [ ] Modal border-radius: 7px
- [ ] Modal box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)
- [ ] Typography: Roboto font family
- [ ] Dark text on light pink background
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
