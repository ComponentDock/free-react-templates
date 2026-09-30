# Template: Signupflare (Signup Form)

## Purpose
Recreation of ColorLib "Signup Form 18" — a centered single-card signup form
with a coral→pink gradient curved header band, circular avatar, pill inputs,
and a gradient "Continue" button.

- Source slug: `signup-form-18`
- Source: https://colorlib.com/wp/template/signup-form-18/
- Preview (LIVE, verified 2026-09-30): **https://preview.colorlib.com/theme/bootstrap/signup-form-18/**
  - NOTE: the naive `https://preview.colorlib.com/theme/signup-form-18/`
    returns 404 — this signup-form family lives under `theme/bootstrap/<slug>/`
    (same path as signup-form-13/14/16). Do not redo this lookup.
- Preview CSS: `css/style.css` (18,128 bytes) — Bootstrap-derived base + a
  hand-written template block at the end (`.ftco-section` … `.cl-btn-primary`).
- Demo page title: "Sign Up 08"; in-page heading: "Sign Up #08".
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-18.jpg
  (visually analyzed; matches the live preview).
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens
(extracted from the live preview stylesheet + verified against the screenshot)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `Lato` (Google Fonts), fallback `Arial, sans-serif` | body 16px |
| Page background | `#fafafa` | light gray, full viewport |
| Body text color | `gray` (~`#808080`) | body rule |
| Heading / h3 color | `#000` | h2/h3 base rule |
| Accent / link color | `#f35587` | `a` rule, "Sign In" link, button border |
| Brand gradient | `linear-gradient(135deg, #f75959 0%, #f35587 100%)` | card header band + Continue button |
| Gradient start | `#f75959` | coral red (top-left) |
| Gradient end | `#f35587` | pink (bottom-right) |
| Page heading | 28px, weight 400, `#000`, centered | `.heading-section` ("Sign Up #08") |
| Section padding | `7em 0` | `.ftco-section` |
| Card background | `#ffffff` | `.login-wrap` |
| Card radius | `5px` | |
| Card shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | |
| Card padding | `100px 30px 30px 30px` | top padding makes room for header band |
| Card header band | height `160px`, gradient, `border-radius: 5px 5px 50% 0` | `.login-wrap:after` — the `50%` bottom-right radius creates the curved swoop |
| Avatar | 100×100px circle, `border: 4px solid #fff`, shadow `0px 10px 23px -16px rgba(0,0,0,0.4)`, `margin-bottom: 20px`, centered | `.login-wrap .img` — background image cover/center (use picsum placeholder) |
| Card heading | "Sign Up", Lato weight 300, 22px, `#000`, centered | `.login-wrap h3` |
| Input height | `52px` | `.cl-form-control` |
| Input radius | `40px` (pill) | |
| Input background | `rgba(0,0,0,0.03)` (≈ `#f7f7f7`) | |
| Input border | `none` | focus: same bg, `outline: none`, no ring |
| Input text | `#000`, 16px, padding `0 20px` | |
| Input placeholder | `rgba(0,0,0,0.7)` | |
| Password toggle icon | absolute, `right: 15px`, vertically centered, `rgba(0,0,0,0.5)` | eye / eye-slash swap |
| Button radius | `40px` (pill) | `.cl-btn` |
| Button background | brand gradient (same as header band) | `.cl-btn.cl-btn-primary` |
| Button border | `1px solid #f35587` | |
| Button text | `#fff`, 15px | label "Continue" |
| Button hover | solid `#f35587` background | `.cl-btn.cl-btn-primary:hover` |
| Button width/height | full width, `52px` (inherits `.cl-form-control`) | |
| Footer line | gray body text "I'm already a member!" + "Sign In" link in `#f35587` | `p > a` |
| Card avatar image | placeholder `https://picsum.photos/seed/signupflare-1/<n>/<w>/<h>` | never copy source assets |

## Section structure (from the live DOM)
1. Page section — light gray `#fafafa` background, `7em` vertical padding, centered column
2. Page heading — "Sign Up #08", 28px, black, centered (paraphrase allowed, e.g. keep the same kind of centered title)
3. Card (`.login-wrap`) — white, 5px radius, soft shadow; max width ~5 columns of a 12-col grid (col-md-7 / col-lg-5, centered)
4. Gradient header band — absolute, 160px tall, coral→pink gradient, curved bottom-right corner (`5px 5px 50% 0`), behind content
5. Avatar — 100px circle with white ring, centered, overlapping the gradient band
6. Card heading — "Sign Up", light 22px, centered
7. Form — name input (placeholder "John Doe") → email input (placeholder "johndoe@gmail.com") → password input (placeholder "Password") with eye toggle; then full-width gradient pill button "Continue"
8. Footer line — "I'm already a member! Sign In" ("Sign In" = pink link)

## Gherkin requirements

### Scenario: Page renders with centered card on light gray background
```
Given the user visits the Signupflare signup page
Then a light gray (#fafafa) background fills the viewport
And a white card is centered on the page
And a "Sign Up #08"-style page heading is centered above the card
```

### Scenario: Gradient header band with curved edge
```
Given the card is visible
Then the top of the card shows a 160px gradient band
And the gradient runs from coral red (#f75959) top-left to pink (#f35587) bottom-right
And the band's bottom-right corner is curved (large radius sweep)
```

### Scenario: Avatar displays at top of card
```
Given the card is visible
Then a 100px circular avatar image is centered at the top of the card
And the avatar has a 4px white border and overlaps the gradient band
```

### Scenario: Card heading displays
```
Given the card is visible
Then "Sign Up" is displayed as a light-weight 22px heading below the avatar
And it is centered
```

### Scenario: Form fields render as pill inputs
```
Given the signup form is visible
Then an input with placeholder "John Doe" is displayed
And an input with placeholder "johndoe@gmail.com" is displayed below
And a password input with placeholder "Password" is displayed below email
And all inputs are 52px tall pills (radius 40px) with a faint gray background (rgba(0,0,0,0.03)) and no border
```

### Scenario: Password visibility toggle works
```
Given the password field is visible
Then an eye icon is displayed on the right side of the password input
When the user clicks the eye icon
Then the password text becomes visible
When the user clicks the eye icon again
Then the password text becomes hidden again
```

### Scenario: Continue button behavior
```
Given the form is visible
Then a full-width pill button "Continue" is displayed
And the button uses the coral→pink gradient with a #f35587 border and white text
When the user clicks "Continue"
Then the form submission is triggered
```

### Scenario: Sign-in link
```
Given the form is visible
Then "I'm already a member!" text is shown below the button
And "Sign In" appears as a clickable pink (#f35587) link
```

### Scenario: Responsive layout
```
Given the user views the page on a mobile viewport (width < 768px)
Then the card remains centered with appropriate padding
And the gradient band and avatar scale with the card
And all form fields remain full width
```

### Scenario: Accessibility
```
Given the form is rendered
Then all form inputs have associated labels
And the password toggle has an aria-label
And the submit button has type="submit"
And interactive elements have focus-visible states
```

## Verification checklist

- [ ] Light gray (#fafafa) page background
- [ ] Centered page heading above the card ("Sign Up #08" or paraphrase)
- [ ] White card, 5px radius, soft shadow, centered
- [ ] 160px coral→pink gradient header band with curved bottom-right corner
- [ ] 100px circular avatar with white ring, overlapping the band
- [ ] "Sign Up" light 22px heading, centered
- [ ] Pill inputs: John Doe / johndoe@gmail.com / Password (52px, radius 40px, faint gray bg)
- [ ] Password eye toggle (show/hide) with aria-label
- [ ] Full-width gradient pill "Continue" button, white text, #f35587 border, solid-pink hover
- [ ] "I'm already a member! Sign In" footer line (#f35587 link)
- [ ] Lato loaded via Google Fonts in index.html
- [ ] Brand tokens in `@theme` (gradient colors, page bg, accent)
- [ ] Placeholder images from picsum.photos (deterministic seed)
- [ ] Responsive: card centered on mobile, fields full width
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
