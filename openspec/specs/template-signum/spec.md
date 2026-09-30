# Template: Signum (Signup Form)

## Purpose

Signum is a single-section signup-form website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Signup Form 19" website template (source:
https://colorlib.com/wp/template/signup-form-19/ — demo title "Sign Up 09"),
built under a DIFFERENT name (Signum — Latin for "mark, sign, seal"; a
signup form collects the user's mark; single lowercase word), per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `signup-form-19`
- **Source:** https://colorlib.com/wp/template/signup-form-19/
- **Preview (LIVE, verified 2026-09-30 by direct fetch):**
  **https://preview.colorlib.com/theme/bootstrap/signup-form-19/**
  (HTTP 200, 9,679 bytes, `<title>Sign Up 09</title>`)
  - NOTE: the naive `https://preview.colorlib.com/theme/signup-form-19/`
    returns 404 — this signup-form family lives under
    `theme/bootstrap/<slug>/` (same path as signup-form-13/14/16/18). Do
    not redo this lookup.
- **Preview CSS:** `css/style.css?v=e5666542` (17,218 bytes) —
  Bootstrap-derived `cl-*` base + hand-written template block starting at
  line 647 (`body` … end). Template overrides: `body` (Lato), `body:after`
  (gradient overlay), `a` (`#1089ff`), `.ftco-section`,
  `.heading-section`, `.img`, `.login-wrap` (+ h3), `.cl-form-group
  label`, `.cl-form-group .icon`, `.field-icon`, `.cl-form-control` (pill
  overrides), `.cl-btn`, `.cl-btn.cl-btn-primary` (`#1089ff` override of
  Bootstrap blue `#007bff`).
- **Scripts:** `js/snippet.js` (eye-toggle behavior only). Icons: inline
  `fa-user-o` / `fa-paper-plane-o` / `fa-lock` / `fa-eye` / `fa-eye-slash`
  SVGs — **REPLACE with lucide-react** (`User`, `Send`, `Lock`, `Eye`,
  `EyeOff`), do not ship the Font Awesome glyphs.
- **Fonts:** Lato — load **Google Fonts `<link>` (300, 400)** in
  `index.html`; weights used: 300 (card h3), 400 (body/heading/button).
- **Assets:** `images/bg.jpg` = full-viewport starry-night mountain-lake
  photo — use `https://picsum.photos/seed/signum-1/<w>/<h>` placeholder,
  never the source asset.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-19.jpg
  (1200×972; visually analyzed 2026-09-30; matches the live preview).
- **TEMPLATES.md:** "## Signup Forms (20)" section, line 2833
  (`- [ ] **Signup Form 19**`).

## Design tokens

(extracted from the live preview stylesheet + verified against the
screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Lato", Arial, sans-serif` (Google Fonts 300 + 400) | body 16px |
| Body text color | `gray` | body rule (barely used — text on the card is white) |
| Body line-height | `1.8` | |
| Background photo | full viewport, `background-size: cover`, centered | `body.img` inline `background-image: url(images/bg.jpg)` — use picsum placeholder |
| Background gradient overlay | `linear-gradient(45deg, #0360ed 0%, #ff5db1 100%)` at `opacity: .4` | `body:after` — blue bottom-left → pink top-right; sits over the photo (z-index -1, above the photo, below content); renders as the signature blue→violet/pink tint |
| Gradient start | `#0360ed` | blue |
| Gradient end | `#ff5db1` | pink |
| Page heading | 28px, `#fff`, centered | `.heading-section` ("Sign Up #09") |
| Link / accent color | `#1089ff` | `a` rule + button + "Sign In" link |
| Link transition | `.3s all ease` | |
| Section padding | `7em 0` | `.ftco-section` |
| Card (`.login-wrap`) | transparent background (photo shows through), `border: 1px solid rgba(255,255,255,0.2)`, `border-radius: 4px`, `padding: 40px`, color `rgba(255,255,255,0.7)`, `position: relative; z-index: 0` | glassy panel — NOT white, NOT shadowed |
| Card heading (h3) | weight 300, `#fff`, 22px, centered | `.login-wrap h3` ("Create Your Account") |
| Field labels | uppercase, weight 700, 12px, `letter-spacing: 1px`, `#fff` | `.cl-form-group label` — VISIBLE labels above each input |
| Left field icons | absolute, left 15px, `#fff` | user (name), paper-plane (email), lock (passwords) — lucide `User`/`Send`/`Lock` |
| Password toggle icon | absolute, right 15px, vertically centered, `rgba(255,255,255,0.5)` | eye / eye-slash swap — on BOTH password fields |
| Inputs (`.cl-form-control`) | height `52px`, radius `40px` (pill), `background: transparent`, `border: 1px solid rgba(255,255,255,0.3)`, text `#fff` 16px, `padding-left: 40px`, `padding-right: 20px` | |
| Input placeholder | `rgba(255,255,255,0.5)` | |
| Input focus | border `rgba(255,255,255,0.2)`, background `rgba(255,255,255,0.04)`, NO ring/outline (killed explicitly) | |
| Button (`.cl-btn`) | pill radius `40px`, height `52px` (inherits `.cl-form-control`), full width, font-size `15px`, no shadow, `cursor: pointer` | |
| Button primary | `background: #1089ff`, `border: 1px solid #1089ff`, text `#fff` | |
| Button hover | `background: transparent`, text `#1089ff`, border stays `#1089ff` | outline-style hover (source CSS) |
| Footer line | `p` in `rgba(255,255,255,0.7)` + `a` in `#1089ff` | "I'm already a member! Sign In" |
| Heading columns | page heading `col-md-6 text-center mb-5`; card `col-md-7 col-lg-5` | centered row; card ≈ 41% width on md, 5/12 on lg |

## Section structure (from the live DOM)

1. Page section — full-viewport photographic background with blue→pink
   gradient tint overlay, `7em` vertical padding, centered column
2. Page heading — "Sign Up #09", 28px, white, centered (paraphrase OK)
3. Glass card (`.login-wrap`) — transparent, 1px translucent-white border,
   4px radius, 40px padding; max width ≈ col-md-7 / col-lg-5, centered
4. Card heading — "Create Your Account", light 22px white, centered
5. Form (`form.signup-form`) — full name (placeholder "John Doe", user
   icon) → email (placeholder "johndoe@gmail.com", paper-plane icon) →
   password (placeholder "Password", lock icon + eye toggle) → confirm
   password (placeholder "Password", lock icon + eye toggle; source quirk:
   second label also reads "Password" — keep or paraphrase as "Confirm
   Password"; see fidelity notes) → full-width blue pill "Sign Up" button
6. Footer line — "I'm already a member! Sign In" ("Sign In" = `#1089ff`
   link)

No navbar, no other sections — single-card template.

## Gherkin requirements

### Scenario: Page renders with photographic background and gradient tint
```
Given the user visits the Signum signup page
Then a full-viewport photographic background fills the page
And a blue-to-pink gradient overlay (#0360ed → #ff5db1 at 45deg, 40% opacity) tints the photo
And the photo uses a deterministic placeholder image (picsum.photos seed)
```

### Scenario: White page heading centered above the card
```
Given the page renders
Then a "Sign Up #09"-style page heading is displayed
And the heading is 28px, white (#fff), and centered
```

### Scenario: Glass card is centered
```
Given the page renders
Then a translucent glass card is centered on the page
And the card has a 1px translucent-white border and 4px radius
And the photographic background is visible through the card (transparent fill)
```

### Scenario: Card heading displays
```
Given the card is visible
Then "Create Your Account" is displayed as a light-weight (300) 22px white heading
And it is centered at the top of the card
```

### Scenario: Form fields render as white-border pills with icons
```
Given the signup form is visible
Then an input with placeholder "John Doe" is displayed under a "FULL NAME" label
And an input with placeholder "johndoe@gmail.com" is displayed under an "EMAIL ADDRESS" label
And a password input with placeholder "Password" is displayed under a "PASSWORD" label
And a confirm-password input with placeholder "Password" is displayed under a "PASSWORD" label
And all inputs are 52px tall pills (radius 40px) with transparent backgrounds and 1px translucent-white borders
And each input has a white icon on the left (user / paper-plane / lock / lock)
And labels are uppercase, bold, 12px, 1px letter-spacing, white
```

### Scenario: Password visibility toggles work
```
Given the password fields are visible
Then an eye icon is displayed on the right side of each password input
When the user clicks an eye icon
Then that password's text becomes visible
And the icon swaps to eye-slash
When the user clicks the icon again
Then the password text becomes hidden again
And the two toggles operate independently
```

### Scenario: Sign Up button behavior
```
Given the form is visible
Then a full-width pill button "Sign Up" is displayed
And the button uses #1089ff background, #1089ff border, and white 15px text
When the user hovers the button
Then the background becomes transparent and the text becomes #1089ff
When the user clicks "Sign Up"
Then the form submission is triggered
```

### Scenario: Sign-in link
```
Given the form is visible
Then "I'm already a member!" text is shown below the button
And "Sign In" appears as a clickable #1089ff link
```

### Scenario: Responsive layout
```
Given the user views the page on a mobile viewport (width < 768px)
Then the card remains centered with appropriate padding
And all form fields and the button remain full width
And the photographic background keeps covering the viewport
```

### Scenario: Accessibility
```
Given the form is rendered
Then all form inputs have associated visible labels
And the password toggles have aria-labels and aria state
And the submit button has type="submit"
And interactive elements have focus-visible states
```

## Verification checklist

- [ ] Full-viewport photo background (picsum placeholder, deterministic seed) with `linear-gradient(45deg,#0360ed,#ff5db1)` @ 40% overlay
- [ ] Centered white 28px page heading above the card ("Sign Up #09" or paraphrase)
- [ ] Glass card: transparent fill, 1px rgba(255,255,255,0.2) border, 4px radius, 40px padding, centered, ≈col-lg-5 width
- [ ] "Create Your Account" light 22px white heading, centered
- [ ] Uppercase bold 12px white labels above every field
- [ ] Pill inputs: John Doe / johndoe@gmail.com / Password / Password (52px, radius 40px, transparent bg, translucent-white border, left padding 40px)
- [ ] Left icons per field (lucide User / Send / Lock / Lock), white
- [ ] Eye toggles on both password fields (independent show/hide, lucide Eye/EyeOff, aria-label)
- [ ] Full-width blue pill "Sign Up" button (`#1089ff`), white text, transparent+blue-text hover
- [ ] "I'm already a member! Sign In" footer line (`#1089ff` link)
- [ ] Lato loaded via Google Fonts in index.html (weights 300 + 400)
- [ ] Brand tokens in `@theme` (gradient endpoints, accent `#1089ff`, translucent border)
- [ ] Placeholder image from picsum.photos (deterministic seed)
- [ ] Responsive: card centered on mobile, fields full width
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
