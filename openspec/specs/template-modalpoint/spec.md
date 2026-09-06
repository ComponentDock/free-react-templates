# Template: ModalPoint (Modal)

## Purpose

Recreation of the ColorLib "Modal V16" template — a split-screen registration
form pop-up modal with a left-side background image and a right-side form panel.
The page shows a centered "Launch modal" button; clicking it opens a full-screen
modal with a side-by-side image + form layout.

- **Source:** [ColorLib Modal 16](https://colorlib.com/wp/template/modal-16/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/modal-16/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-16.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Design category:** Modal (Bootstrap Modal Templates)

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure:

| Token | Value | Notes |
|-------|-------|-------|
| Body font | `Roboto`, sans-serif, 300 weight | Main body text |
| Heading font | `Roboto`, sans-serif | Same family, default weight |
| Paragraph color | `#b3b3b3` | Light gray text |
| Modal heading color | `#000` (black) | font-size: 22px |
| Modal paragraph color | `#777` | font-size: 14px |
| Button primary | Bootstrap `btn-primary` (#007bff) | border-radius: 4px, block width |
| Button secondary | Bootstrap `btn-secondary` (#6c757d) | px-4 py-3 for launch button |
| Modal background | `#efefef` (light gray) | modal-body background |
| Modal content border-radius | `7px` | Rounded corners on modal |
| Modal shadow | `0 10px 50px -10px rgba(0,0,0,0.9)` | Deep, strong shadow |
| Form control border | transparent, `box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2)` | Clean, minimal inputs with subtle shadow |
| Custom select | Same shadow as form control | border: none |
| Privacy link color | `#555` | font-weight: 900 |
| Privacy note color | `#999` | Fine print text |
| Promo image | `flex: 0 0 50%` | Takes exactly half the modal width |
| Page layout | Full viewport height, centered | `height: 100vh` on `.content` |
| Fade animation | Bootstrap `modal fade` | Scale + opacity transition |
| Button border-radius | `4px` | All buttons |

## Visual Design

From the screenshot and live preview:
- **Background:** The page behind the modal is a light/white full-height area
  with a centered "Modal #6" heading and a gray "Launch modal" button.
- **Modal layout:** Split-screen — left half is a full-cover background image
  (promotional/lifestyle photo), right half is a white/light-gray form panel.
- **Modal shape:** Rounded corners (7px), strong deep shadow, no border.
- **Form panel:** Light gray (`#efefef`) background, generous padding.
- **Form fields:** Country dropdown (full width), Date of Birth (three equal
  columns: MM, DD, YYYY), all with subtle box-shadow styling (no visible border).
- **Submit button:** Full-width blue (#007bff) "Sign up" button with 4px radius.
- **Fine print:** Small gray text with bold dark link for Privacy Policy.
- **Typography:** Clean Roboto font throughout, generous spacing.
- **Aesthetic:** Minimal, clean, registration-focused modal.

## Requirements (Gherkin)

### Scenario: Page loads with launch button visible
  Given the user navigates to the template page
  Then a heading "Registration Modal" is visible
  And a "Launch Modal" button is displayed in the center of the viewport

### Scenario: Modal opens on button click
  Given the user is on the template page
  When the user clicks the "Launch Modal" button
  Then a modal dialog appears centered on screen
  And the modal contains a split-screen layout

### Scenario: Modal displays left-side image
  Given the modal is open
  Then the left half of the modal shows a background image
  And the image covers 50% of the modal width

### Scenario: Modal displays registration form
  Given the modal is open
  Then the right half shows a "Registration form" heading
  And a descriptive paragraph is below the heading
  And a "Country" dropdown select is visible
  And a "Date of Birth" row with three inputs (MM, DD, YYYY) is visible
  And a full-width "Sign up" button is visible
  And a "Privacy Policy" link is visible in fine print

### Scenario: Modal closes on backdrop click
  Given the modal is open
  When the user clicks outside the modal (on the backdrop)
  Then the modal closes and the page content is visible again

### Scenario: Modal closes on close button
  Given the modal is open
  When the user clicks the close (X) button
  Then the modal closes

### Scenario: Form submission prevents default
  Given the modal is open and the form is filled
  When the user clicks "Sign up"
  Then the form submission is handled (prevents default navigation)

### Scenario: Country dropdown is populated
  Given the modal is open
  Then the Country dropdown contains a list of countries
  And at least 100 country options are available

### Scenario: Date of birth inputs accept text
  Given the modal is open
  When the user types into the MM, DD, or YYYY fields
  Then the input accepts the typed text

### Scenario: Accessibility — modal has correct ARIA attributes
  Given the modal is open
  Then the modal has `role="dialog"`
  And the modal has `aria-labelledby` pointing to the title
  And the modal has `aria-hidden="true"` when closed

## Verification Checklist

- [ ] Modal opens and closes correctly (button, backdrop, X)
- [ ] Split-screen layout: image left (50%), form right (50%)
- [ ] Form fields: Country dropdown, DOB (MM/DD/YYYY), Submit
- [ ] Privacy Policy link visible in fine print
- [ ] All design tokens matched (colors, fonts, radii, shadows)
- [ ] Responsive behavior on mobile (stack vertically)
- [ ] Keyboard accessible (Escape closes, Tab through form)
- [ ] ARIA attributes present on modal
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] Tests: 100% coverage on new components
