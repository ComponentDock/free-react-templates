# Template: Signwell (Bootstrap Modal)

## Purpose

Recreation of ColorLib Modal 15 — a responsive sign-up pop-up modal with a
split-screen design (image left, form right). This is a Bootstrap modal
template, not a full-page layout.

- **Source:** https://colorlib.com/wp/template/modal-15/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-15/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Bootstrap Modal (sign-up / lead capture)

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and HTML structure.

| Token                | Value                                                |
| -------------------- | ---------------------------------------------------- |
| Font family          | `"Roboto", sans-serif` (weights 300, 400)            |
| Heading color        | `#000000`                                            |
| Paragraph color      | `#777777` (light gray, weight 300)                   |
| Close button         | `#000000`                                            |
| Body background      | `#ffffff` (white)                                    |
| Modal shadow         | `0 10px 50px -10px rgba(0,0,0,0.9)`                  |
| Modal border-radius  | `7px`                                                |
| Button border-radius | `4px`                                                |
| Button primary       | Bootstrap `btn-primary` (blue, `#007bff` or similar) |
| Form border          | `#cccccc` (1px solid)                                |
| Form focus           | No box-shadow (explicitly removed)                   |
| Privacy link         | `#555555` bold, note text `#999999`                  |
| Image half           | flex: 0 0 50%, cover, center                         |
| Content half         | flex: auto, p-4                                      |
| Overlay              | Semi-transparent dark (Bootstrap default modal)      |

### Visual design (from screenshot)

The screenshot shows a centered modal with a dark semi-transparent overlay.
The modal body is split 50/50 horizontally:

- **Left half:** a full-bleed photograph (nature/lifestyle image) filling the
  entire left column, rounded top-left and bottom-left corners.
- **Right half:** white background containing:
  - Heading: "Sign up to access all the resources" (dark, ~22px)
  - Subtext paragraph (gray, lighter weight)
  - Three form fields: Email Address, First Name, Password
  - Full-width "Sign up" primary button (blue)
  - Privacy policy note with bold link
- The overall modal has a strong drop shadow and rounded corners (7px).
- A launch button ("Launch modal") sits centered on the page behind the overlay.

## Gherkin requirements

### Scenario: Modal opens when launch button is clicked

```gherkin
Given the user sees the launch button on the page
When the user clicks the "Launch modal" button
Then a modal overlay appears
And the modal is centered on screen
And the modal has a split-screen layout (image left, form right)
```

### Scenario: Modal displays correct form fields

```gherkin
Given the modal is open
Then there is a heading "Sign up to access all the resources"
And there is a paragraph description text
And there is an "Email Address" email input field
And there is a "First Name" text input field
And there is a "Password" password input field
And there is a "Sign up" submit button
```

### Scenario: Modal closes on backdrop click

```gherkin
Given the modal is open
When the user clicks the dark backdrop area outside the modal
Then the modal closes
And the page returns to the launch button view
```

### Scenario: Modal closes on close button click

```gherkin
Given the modal is open
When the user clicks the close button (X) in the modal
Then the modal closes
```

### Scenario: Modal is responsive on mobile

```gherkin
Given the modal is open on a mobile viewport
Then the split-screen layout stacks vertically (image on top, form below)
And all form fields remain usable
And the submit button is full-width
```

### Scenario: Form validation

```gherkin
Given the modal is open
When the user clicks "Sign up" with empty fields
Then required field validation messages appear
And the form does not submit
```

### Scenario: Privacy policy link is present

```gherkin
Given the modal is open
Then there is a note "By signing up you will agree to our Privacy Policy"
And "Privacy Policy" is a clickable link
```

## Verification checklist

- [ ] Modal opens on launch button click
- [ ] Modal has split-screen layout (image left 50%, form right 50%)
- [ ] Heading: "Sign up to access all the resources"
- [ ] Form fields: Email, First Name, Password
- [ ] "Sign up" full-width primary button
- [ ] Privacy policy note with bold link
- [ ] Modal closes on backdrop click
- [ ] Modal closes on close (X) button
- [ ] Responsive: stacks vertically on mobile
- [ ] Image is placeholder (picsum.photos) — no original assets copied
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Design tokens match reference (Roboto font, #000 headings, #777 body, 7px radius, 4px button radius)
