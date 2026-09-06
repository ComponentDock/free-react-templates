# Template: Bellpush (Modal / Newsletter Subscription Dialog)

## Purpose

Bellpush is a single-page newsletter subscription MODAL DIALOG in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Modal 10" free template (source:
https://colorlib.com/wp/template/modal-10/), built under a DIFFERENT name
(**Bellpush**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4.3 modal template: a centered page with a
"Launch Modal 10" button that opens a centered modal dialog containing a
newsletter subscription form. The modal has a gradient header with a
background image overlay, a large circular icon (envelope), bold heading
text, an email input with a "Subscribe" button side-by-side, and a close
button in the top-right corner. The overall aesthetic is clean and modern —
white page backdrop, blue brand accent, and a gradient (magenta-to-blue)
overlay on the modal header.

**WHAT MAKES BELLPUSH DISTINCT (signature behaviors):**

1. **Full-page centered layout with launch button.** A white
   `.ftco-section` fills the viewport with a centered heading ("Modal 10")
   and a Bootstrap primary button ("Launch Modal 10") that triggers the
   modal via `data-toggle="modal"`. The recreation uses React state to
   toggle the modal open/closed.

2. **Centered modal dialog with gradient header.** `.modal-dialog` is
   `max-width: 500px`, vertically centered (`.modal-dialog-centered`).
   `.modal-content` has no border (`border: none`), white background
   (`#fff`), and a prominent box-shadow
   `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`. The header is 230px tall
   with a background image (`images/bg-1.jpg`) and a magenta-to-blue
   gradient overlay (`linear-gradient(45deg, #dd00ff 0%, #3e65ff 100%)`)
   at 30% opacity.

3. **Modal body overlaps the header.** The `.modal-body` uses
   `margin-top: -180px` to visually overlap the bottom of the header,
   creating a layered card effect. The body sits above the header via
   `z-index: 2`.

4. **Circular icon with semi-transparent background.** A 200×200px
   `.icon` container with `border-radius: 50%` and
   `background: rgba(255, 255, 255, 0.2)` holds the newsletter envelope
   icon (`images/email.svg`), centered horizontally.

5. **Newsletter heading and subtext.** A bold `h2` ("Newsletter") in
   `font-weight: 700; color: #fff` sits on the gradient header area, and
   an `h4` ("Subscribe to our newsletter") in `font-size: 18px` sits
   below the icon in the body.

6. **Inline subscribe form.** A `.subscribe-form` with a `.form-group`
   using `d-flex` to place an email `input` (left, rounded-left, light
   gray background `rgba(0,0,0,0.05)`) and a "Subscribe" submit `input`
   (right, rounded-right, blue `#3e64ff` background, white text) side by
   side. Both inputs are 52px tall with no border.

7. **Close button.** A 40×40px absolute-positioned button in the
   top-right corner of the modal, white text, transparent background.

## Naming

The ColorLib source name "Modal 10" is FORBIDDEN as the app name (and
"modal" itself must not be reused). **Bellpush** is the new, original name
— single lowercase word, kebab-case, no collision with `apps/`,
`openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name (verified
2026-09-06: zero hits for `bellpush` in TEMPLATES.md, `ls apps/`,
`openspec/specs/`, `docs/templates/`).

Source slug: `modal-10`
Preview URL: https://preview.colorlib.com/theme/bootstrap/modal-10/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-10.jpg

## Design Tokens

Extracted from the preview CSS (`css/style.css`) and HTML at
https://preview.colorlib.com/theme/bootstrap/modal-10/:

| Token                    | Value                                              | Notes                                         |
| ------------------------ | -------------------------------------------------- | --------------------------------------------- |
| **Font family**          | `"Poppins", Arial, sans-serif`                     | Loaded via Cloudflare Fonts (weights 300–900) |
| **Font size (base)**     | `15px`                                             | Body text                                     |
| **Line height**          | `1.8`                                              | Body text                                     |
| **Brand color**          | `#3e64ff` (blue)                                   | Links, buttons, form focus borders            |
| **Gradient overlay**     | `linear-gradient(45deg, #dd00ff 0%, #3e65ff 100%)` | Modal header background (30% opacity)         |
| **Page background**      | `#fff` (white)                                     | `.ftco-section`                               |
| **Modal shadow**         | `0px 10px 34px -15px rgba(0,0,0,0.24)`             | `.modal-content`                              |
| **Modal max-width**      | `500px`                                            | `.modal-dialog`                               |
| **Modal header height**  | `230px`                                            | Background image area                         |
| **Body overlap**         | `margin-top: -180px`                               | `.modal-body` overlaps header                 |
| **Icon container**       | `200×200px, border-radius: 50%`                    | `background: rgba(255,255,255,0.2)`           |
| **Input height**         | `52px`                                             | `.form-control`                               |
| **Input background**     | `rgba(0,0,0,0.05)`                                 | Email input                                   |
| **Submit button bg**     | `#3e64ff`                                          | "Subscribe" button                            |
| **Submit button size**   | `130×52px`                                         | Fixed width                                   |
| **Button border-radius** | `40px` (launch button), `0` (form inputs)          | Pill shape on `.btn`, square on form inputs   |
| **Close button**         | `40×40px, absolute top-right, white text`          | Modal close                                   |

## Gherkin Requirements

### Scenario: Page loads with centered launch button

```gherkin
Given the user visits the Bellpush page
When the page finishes loading
Then a centered section is visible with a heading "Modal 10"
And a "Launch Modal" button is displayed below the heading
And the page background is white
```

### Scenario: Modal opens on launch button click

```gherkin
Given the user sees the launch button
When the user clicks the "Launch Modal" button
Then a centered modal dialog appears
And the modal has a gradient header (magenta-to-blue at 30% opacity)
And the modal header is 230px tall with a background image
And a white close (X) button is visible in the top-right corner of the modal
```

### Scenario: Modal displays newsletter subscription content

```gherkin
Given the modal is open
Then a large circular icon (200×200px) is displayed with a semi-transparent white background
And the icon contains an envelope/newsletter image
And the heading "Newsletter" is displayed in bold white text
And the subtext "Subscribe to our newsletter" is displayed below the icon
```

### Scenario: Subscribe form is visible and functional

```gherkin
Given the modal is open
Then an email input field is displayed with placeholder "Enter email address"
And a "Subscribe" button is displayed to the right of the email input
And the email input has a light gray background (rgba(0,0,0,0.05))
And the subscribe button has a blue background (#3e64ff) with white text
And both inputs are 52px tall
```

### Scenario: User can enter an email and submit

```gherkin
Given the modal is open
When the user types "test@example.com" into the email input
And the user clicks the "Subscribe" button
Then the form submits (default action)
```

### Scenario: Modal closes on close button click

```gherkin
Given the modal is open
When the user clicks the close (X) button in the top-right corner
Then the modal disappears
And the page returns to the centered launch button view
```

### Scenario: Modal closes on backdrop click

```gherkin
Given the modal is open
When the user clicks outside the modal dialog (on the backdrop)
Then the modal disappears
```

### Scenario: Modal closes on Escape key

```gherkin
Given the modal is open
When the user presses the Escape key
Then the modal disappears
```

### Scenario: Keyboard accessibility

```gherkin
Given the page loads
When the user presses Tab to navigate to the launch button
And the user presses Enter to activate it
Then the modal opens
And focus moves into the modal
And the close button is focusable
And pressing Tab cycles through focusable elements within the modal
```

### Scenario: Responsive layout

```gherkin
Given the user views the page on a mobile device (width < 768px)
Then the launch button is still centered and visible
And the modal still displays centered on screen
And the email input and subscribe button stack vertically
And the modal width adapts to the viewport
```

## Verification Checklist

- [ ] Page loads with centered heading and launch button
- [ ] Launch button triggers modal open
- [ ] Modal header has gradient overlay (magenta-to-blue, 30% opacity)
- [ ] Modal body overlaps header by 180px
- [ ] Circular 200×200px icon container with envelope image
- [ ] "Newsletter" heading in bold white
- [ ] "Subscribe to our newsletter" subtext
- [ ] Email input with placeholder and light gray background
- [ ] "Subscribe" button in brand blue (#3e64ff)
- [ ] Close button (X) in top-right corner
- [ ] Modal closes on close button click
- [ ] Modal closes on backdrop click
- [ ] Modal closes on Escape key
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Responsive layout on mobile viewports
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (tsc --noEmit)
- [ ] Lint passes (oxlint)
- [ ] Build succeeds (vite build)
