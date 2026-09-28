# SignupWave — Design Notes

Source: ColorLib Signup Form 06
Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-06/`
Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-06.jpg`

## Visual Description (from screenshot + preview DOM)

The template is a **split-screen registration form**. On desktop, the viewport
is divided into two equal halves. The left half has a white background with a
centered registration form. The right half shows a full-bleed background photo
(nature/landscape). On mobile, the image stacks above the form at 500px height.

The form area uses **floating labels** — labels sit centered vertically inside
the input and animate upward when the input is focused or filled. The three
input groups (Email, Password, Re-type Password) are visually connected with
shared borders and rounded corners only on the first and last group.

Below the inputs is a terms checkbox (checked by default) and a full-width
blue "Register" button. A muted "— or —" divider separates the form from
three full-width social login buttons (Facebook blue, Twitter blue, Google red),
each with an SVG icon and white text.

## Structure Order (section-by-section)

1. **Outer wrapper** (full viewport flex row)
2. **Background image panel** (right on desktop, top on mobile)
3. **Form content panel** (left on desktop, bottom on mobile)
   3a. Container > Row > Col (centered, ~58% width)
   3b. Heading "Register"
   3c. Subtext paragraph
   3d. Email floating-label input
   3e. Password floating-label input
   3f. Re-type Password floating-label input
   3g. Terms checkbox
   3h. Register button
   3i. Divider "— or —"
   3j. Social login buttons (Facebook, Twitter, Google)

## Fidelity Notes

- **Floating labels**: Use a CSS-only approach with `position: absolute` labels
  and `:focus + label` / `.field--not-empty label` selectors. The label moves
  up via `margin-top: -20px` transition.
- **Connected input groups**: The three form groups share borders (bottom border
  removed except on last). First group gets top radius, last gets bottom radius.
- **Social buttons**: Full-width block buttons, each with a distinct brand color.
  Icons are inline SVGs (currentColor fill).
- **Responsive**: At <992px, the flex layout stacks. Background image becomes a
  500px tall block above the form content.
- **Typography**: Roboto font family. Heading is 1.75rem weight 500. Body text
  is 1rem weight 400. Paragraphs are #b3b3b3 weight 300.
- **Checkbox**: Custom styled with a 20x20px indicator, #e6e6e6 unchecked,
  #007bff checked, with a checkmark icon via icomoon font.
