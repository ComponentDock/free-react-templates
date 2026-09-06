# Template: Subforge (Modal / Popup)

## Purpose

Recreation of ColorLib **Modal 13** (`modal-13`) — a free subscription form
snippet with a light pink background, dual action buttons, and Instagram branding.

- **Source:** https://colorlib.com/wp/template/modal-13/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-13/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-13.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Category:** Modal / Popup — subscription form with dual CTAs

> Preview was reachable at `https://preview.colorlib.com/theme/bootstrap/modal-13/`.
> Design tokens extracted from the live preview CSS (`css/style.css`).

## Design tokens

| Token               | Value                                  | Source                    |
| ------------------- | -------------------------------------- | ------------------------- |
| Font family (body)  | `"Roboto", sans-serif`                 | preview CSS `body` rule   |
| Font family (modal) | `"Roboto", sans-serif` (all text)      | preview CSS `.modal`      |
| Text color (body)   | `#b3b3b3` (light gray)                | preview CSS `p` rule      |
| Modal bg color      | `#f9eaf2` (light pink/rose)            | preview CSS `.bg-3`       |
| Modal text color    | `#ffffff` (white — overridden per el)  | preview CSS `.modal-body` |
| Heading h3 color    | `#000000` (black)                      | preview CSS `.modal h3`   |
| Heading h3 size     | `22px`                                 | preview CSS `.modal h3`   |
| Heading h2 size     | `18px`                                 | preview CSS `.modal h2`   |
| Paragraph color     | `#777777` (dark gray)                  | preview CSS `.modal p`    |
| Close button color  | `#000000` (black)                      | preview CSS `.close-btn`  |
| Modal border-radius | `7px`                                  | preview CSS `.modal`      |
| Modal shadow        | `0 10px 50px -10px rgba(0,0,0,0.9)`   | preview CSS `.modal-body` |
| Logo image width    | `70px`                                 | preview CSS `.logo img`   |
| Form input shadow   | `0 2px 2px 0 rgba(0,0,0,0.1)`         | preview CSS `.form-control`|
| Button border-radius| `4px`                                  | preview CSS `.btn`        |
| Button style        | Bootstrap secondary (gray) + primary (blue) | preview HTML        |
| Cancel link color   | `rgba(255,255,255,0.5)`               | preview CSS `.cancel a`   |
| Cancel link size    | `13px`, bold                           | preview CSS `.cancel a`   |

## Structure (section order)

The template is a single centered modal popup on a page. Section order:

1. **Background page** — centered "Launch modal" button (secondary style, full viewport height)
2. **Modal container** — centered, solid light pink background (#f9eaf2), border-radius 7px
3. **Close button row** — top-right, black X icon
4. **Logo section** — centered Instagram-style icon (70px wide)
5. **Heading** — "Exclusives offer from Instagram" (h3, 22px, black)
6. **Description** — gray paragraph text (#777)
7. **Email form** — full-width email input with subtle shadow
8. **Dual action buttons** — 2-column row: "No, thanks" (secondary, left) + "Subscribe" (primary, right)
9. **Footer text** — small gray text below buttons

## Gherkin requirements

### Scenario: Page renders with launch button
```gherkin
Given the user visits the Subforge page
Then a "Launch modal" button is visible in the center of the viewport
And no modal is displayed initially
```

### Scenario: Modal opens on button click
```gherkin
Given the modal is closed
When the user clicks the "Launch modal" button
Then the modal appears centered on screen
And the modal has a light pink background (#f9eaf2)
And a centered logo/icon is visible
And the heading "Exclusives offer from Instagram" is visible
And a description paragraph is visible
```

### Scenario: Email subscription form
```gherkin
Given the modal is open
Then a full-width email input with placeholder "Enter your email address" is visible
And the input has a subtle box shadow
And a "Subscribe" button (primary/blue) is visible on the right
And a "No, thanks" button (secondary/gray) is visible on the left
```

### Scenario: Close via close button
```gherkin
Given the modal is open
When the user clicks the close button (X icon) in the top-right corner
Then the modal closes
```

### Scenario: Close via "No, thanks" button
```gherkin
Given the modal is open
When the user clicks the "No, thanks" button
Then the modal closes
```

### Scenario: Subscribe action
```gherkin
Given the modal is open
When the user enters a valid email and clicks "Subscribe"
Then the form submits (default behavior)
```

### Scenario: Keyboard accessibility
```gherkin
Given the modal is open
When the user presses Escape
Then the modal closes
And focus returns to the "Launch modal" button
```

### Scenario: Responsive layout
```gherkin
Given the user views the template on a mobile viewport (< 576px)
Then the modal fills the viewport width with appropriate padding
And the dual buttons stack vertically or remain side-by-side per breakpoint
```

## Verification checklist

- [ ] "Launch modal" button visible on page load, centered
- [ ] Modal opens with fade-in animation on button click
- [ ] Modal has light pink background (#f9eaf2)
- [ ] Close button (X) visible in top-right corner, black
- [ ] Centered logo/icon visible (70px wide)
- [ ] Heading "Exclusives offer from Instagram" visible (h3, 22px, black)
- [ ] Description paragraph visible (gray #777)
- [ ] Email input with placeholder + subtle shadow
- [ ] "No, thanks" button (secondary) on left, "Subscribe" (primary) on right
- [ ] Small footer text below buttons
- [ ] Modal closes on close button click
- [ ] Modal closes on "No, thanks" click
- [ ] Modal closes on Escape key
- [ ] Focus trap inside modal; returned to trigger on close
- [ ] Border-radius 7px on modal
- [ ] Button border-radius 4px
- [ ] Font: Roboto throughout
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Test coverage 100% lines/functions/branches/statements
