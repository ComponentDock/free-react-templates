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
  (`- [~] **Signup Form 19**`).

## Design tokens

(extracted from the live preview stylesheet + verified against the
screenshot; CSS values are canonical)

| Token                       | Value                                                                                                                                                                                           | Notes                                                                                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Font family                 | `"Lato", Arial, sans-serif` (Google Fonts 300 + 400)                                                                                                                                            | body 16px                                                                                                                                                          |
| Body text color             | `gray`                                                                                                                                                                                          | body rule (barely used — text on the card is white)                                                                                                                |
| Body line-height            | `1.8`                                                                                                                                                                                           |                                                                                                                                                                    |
| Background photo            | full viewport, `background-size: cover`, centered                                                                                                                                               | `body.img` inline `background-image: url(images/bg.jpg)` — use picsum placeholder                                                                                  |
| Background gradient overlay | `linear-gradient(45deg, #0360ed 0%, #ff5db1 100%)` at `opacity: .4`                                                                                                                             | `body:after` — blue bottom-left → pink top-right; sits over the photo (z-index -1, above the photo, below content); renders as the signature blue→violet/pink tint |
| Gradient start              | `#0360ed`                                                                                                                                                                                       | blue                                                                                                                                                               |
| Gradient end                | `#ff5db1`                                                                                                                                                                                       | pink                                                                                                                                                               |
| Page heading                | 28px, `#fff`, centered                                                                                                                                                                          | `.heading-section` ("Sign Up #09")                                                                                                                                 |
| Link / accent color         | `#1089ff`                                                                                                                                                                                       | `a` rule + button + "Sign In" link                                                                                                                                 |
| Link transition             | `.3s all ease`                                                                                                                                                                                  |                                                                                                                                                                    |
| Section padding             | `7em 0`                                                                                                                                                                                         | `.ftco-section`                                                                                                                                                    |
| Card (`.login-wrap`)        | transparent background (photo shows through), `border: 1px solid rgba(255,255,255,0.2)`, `border-radius: 4px`, `padding: 40px`, color `rgba(255,255,255,0.7)`, `position: relative; z-index: 0` | glassy panel — NOT white, NOT shadowed                                                                                                                             |
| Card heading (h3)           | weight 300, `#fff`, 22px, centered                                                                                                                                                              | `.login-wrap h3` ("Create Your Account")                                                                                                                           |
| Field labels                | uppercase, weight 700, 12px, `letter-spacing: 1px`, `#fff`                                                                                                                                      | `.cl-form-group label` — VISIBLE labels above each input                                                                                                           |
| Left field icons            | absolute, left 15px, `#fff`                                                                                                                                                                     | user (name), paper-plane (email), lock (passwords) — lucide `User`/`Send`/`Lock`                                                                                   |
| Password toggle icon        | absolute, right 15px, vertically centered, `rgba(255,255,255,0.5)`                                                                                                                              | eye / eye-slash swap — on BOTH password fields                                                                                                                     |
| Inputs (`.cl-form-control`) | height `52px`, radius `40px` (pill), `background: transparent`, `border: 1px solid rgba(255,255,255,0.3)`, text `#fff` 16px, `padding-left: 40px`, `padding-right: 20px`                        |                                                                                                                                                                    |
| Input placeholder           | `rgba(255,255,255,0.5)`                                                                                                                                                                         |                                                                                                                                                                    |
| Input focus                 | border `rgba(255,255,255,0.2)`, background `rgba(255,255,255,0.04)`, NO ring/outline (killed explicitly)                                                                                        | keep a subtle focus-visible ring for keyboard a11y                                                                                                                 |
| Button (`.cl-btn`)          | pill radius `40px`, height `52px` (inherits `.cl-form-control`), full width, font-size `15px`, no shadow, `cursor: pointer`                                                                     |                                                                                                                                                                    |
| Button primary              | `background: #1089ff`, `border: 1px solid #1089ff`, text `#fff`                                                                                                                                 |                                                                                                                                                                    |
| Button hover                | `background: transparent`, text `#1089ff`, border stays `#1089ff`                                                                                                                               | outline-style hover (source CSS)                                                                                                                                   |
| Footer line                 | `p` in `rgba(255,255,255,0.7)` + `a` in `#1089ff`                                                                                                                                               | "I'm already a member! Sign In"                                                                                                                                    |
| Heading columns             | page heading `col-md-6 text-center mb-5`; card `col-md-7 col-lg-5`                                                                                                                              | centered row; card ≈ 41% width on md, 5/12 on lg                                                                                                                   |

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
   second label also reads "Password" — paraphrased as "Confirm Password"
   for accessibility) → full-width blue pill "Sign Up" button
6. Footer line — "I'm already a member! Sign In" ("Sign In" = `#1089ff`
   link)

No navbar — single-card template. A Component Dock footer line
(mandatory monorepo footer) sits below the section.

## Requirements

### Requirement: Photographic backdrop with gradient tint

The system SHALL render a full-viewport page whose background is a
deterministic photographic placeholder (`https://picsum.photos/seed/signum-1/1600/1000`,
`cover`, centered) overlaid by a blue→pink gradient layer
(`linear-gradient(45deg, #0360ed 0%, #ff5db1 100%)`) at 40% opacity, with
all page content layered above both.

#### Scenario: Page renders with photographic background and gradient tint

- **GIVEN** the user visits the Signum signup page
- **THEN** a full-viewport photographic background SHALL fill the page
- **AND** a blue-to-pink gradient overlay (`#0360ed` → `#ff5db1` at 45deg, 40% opacity) SHALL tint the photo
- **AND** the photo SHALL use a deterministic placeholder image (picsum.photos seed `signum-1`)

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile viewport (width < 768px)
- **THEN** the photographic background SHALL keep covering the viewport
- **AND** the card SHALL remain centered with appropriate padding
- **AND** all form fields and the button SHALL remain full width

### Requirement: White page heading above the card

The page SHALL display a centered white page heading ("Sign Up #09" or a
paraphrase of the same kind), 28px, weight 400, with ~3rem margin below,
above the glass card.

#### Scenario: White page heading centered above the card

- **GIVEN** the page renders
- **THEN** a "Sign Up #09"-style page heading SHALL be displayed
- **AND** the heading SHALL be 28px, white (`#fff`), and centered

### Requirement: Glass card shell

The page SHALL center a glass card — transparent fill (photo visible
through it), 1px `rgba(255,255,255,0.2)` border, 4px radius, 40px
padding, text `rgba(255,255,255,0.7)` — sized ≈ col-md-7 / col-lg-5
(`md:w-7/12 lg:w-5/12`), containing the card heading, form, and member
line.

#### Scenario: Glass card is centered

- **GIVEN** the page renders
- **THEN** a translucent glass card SHALL be centered on the page
- **AND** the card SHALL have a 1px translucent-white border and 4px radius
- **AND** the photographic background SHALL be visible through the card (transparent fill)

#### Scenario: Card heading displays

- **GIVEN** the card is visible
- **THEN** "Create Your Account" SHALL be displayed as a light-weight (300) 22px white heading
- **AND** it SHALL be centered at the top of the card

### Requirement: Pill form fields with visible labels and left icons

The form SHALL render four fields — full name (placeholder "John Doe"),
email address (placeholder "johndoe@gmail.com"), password (placeholder
"Password"), and confirm password (placeholder "Password") — as 52px-tall
pill inputs (radius 40px, transparent fill, 1px `rgba(255,255,255,0.3)`
border, left padding 40px, placeholder `rgba(255,255,255,0.5)`), each with
a visible uppercase bold 12px white label above it (1px letter-spacing)
and a white left icon (lucide `User` / `Send` / `Lock` / `Lock`) at 15px
from the left edge. The confirm-password field's label SHALL read
"Confirm Password" (accessibility paraphrase of the source's duplicated
"Password" label).

#### Scenario: Form fields render as white-border pills with icons

- **GIVEN** the signup form is visible
- **THEN** an input with placeholder "John Doe" SHALL be displayed under a "Full Name" label
- **AND** an input with placeholder "johndoe@gmail.com" SHALL be displayed under an "Email Address" label
- **AND** a password input with placeholder "Password" SHALL be displayed under a "Password" label
- **AND** a confirm-password input with placeholder "Password" SHALL be displayed under a "Confirm Password" label
- **AND** all inputs SHALL be 52px tall pills (radius 40px) with transparent backgrounds and 1px translucent-white borders
- **AND** each input SHALL have a white icon on the left (user / paper-plane / lock / lock)
- **AND** labels SHALL be uppercase, bold, 12px, 1px letter-spacing, white

#### Scenario: Accessibility

- **GIVEN** the form is rendered
- **THEN** all form inputs SHALL have associated visible labels via htmlFor/id
- **AND** the password toggles SHALL have aria-labels and aria state
- **AND** the submit button SHALL have type="submit"
- **AND** interactive elements SHALL have focus-visible states

### Requirement: Independent password visibility toggles

Each password field SHALL include an eye toggle button inside its pill
(right-aligned 15px, `rgba(255,255,255,0.5)`, lucide `Eye`/`EyeOff`)
that switches that input's type between "password" and "text" and updates
its accessible name; the two toggles SHALL operate independently and each
SHALL use a distinct accessible name ("Show/Hide password" and
"Show/Hide confirm password").

#### Scenario: Password visibility toggles work

- **GIVEN** the password fields are visible
- **THEN** an eye icon SHALL be displayed on the right side of each password input
- **WHEN** the user clicks an eye icon
- **THEN** that password's text SHALL become visible
- **AND** the icon SHALL swap to eye-slash
- **WHEN** the user clicks the icon again
- **THEN** the password text SHALL become hidden again
- **AND** the two toggles SHALL operate independently

### Requirement: Sign Up button with outline hover

The form SHALL end with a full-width pill "Sign Up" button — `#1089ff`
background, `1px solid #1089ff` border, white 15px text, 52px height, no
shadow — whose hover state swaps to a transparent background with `#1089ff`
text (border unchanged); clicking it SHALL trigger form submission
(navigations prevented in the template).

#### Scenario: Sign Up button behavior

- **GIVEN** the form is visible
- **THEN** a full-width pill button "Sign Up" SHALL be displayed
- **AND** the button SHALL use `#1089ff` background, `#1089ff` border, and white 15px text
- **WHEN** the user hovers the button
- **THEN** the background SHALL become transparent and the text SHALL become `#1089ff`
- **WHEN** the user clicks "Sign Up"
- **THEN** the form submission SHALL be triggered (without page navigation)

### Requirement: Member sign-in line

Below the button the card SHALL show "I'm already a member!" text in
`rgba(255,255,255,0.7)` with a clickable `#1089ff` "Sign In" link (0.3s
color transition).

#### Scenario: Sign-in link

- **GIVEN** the form is visible
- **THEN** "I'm already a member!" text SHALL be shown below the button
- **AND** "Sign In" SHALL appear as a clickable `#1089ff` link

### Requirement: Typography and footer

The page SHALL load Lato (weights 300 + 400) via Google Fonts and SHALL
display a footer line linking `https://www.componentdock.com/` branded as
"Component Dock" (monorepo mandate — no external attribution links).

#### Scenario: Fonts and Component Dock footer

- **GIVEN** the page renders
- **THEN** the Lato typeface (300/400) SHALL be loaded via a Google Fonts link
- **AND** a footer SHALL link https://www.componentdock.com/ with the text "Component Dock"
- **AND** the app SHALL contain no ColorLib references

## Verification checklist

- [ ] Full-viewport photo background (picsum placeholder, deterministic seed `signum-1`) with `linear-gradient(45deg,#0360ed,#ff5db1)` @ 40% overlay
- [ ] Centered white 28px page heading above the card ("Sign Up #09" or paraphrase)
- [ ] Glass card: transparent fill, 1px rgba(255,255,255,0.2) border, 4px radius, 40px padding, centered, md:w-7/12 lg:w-5/12
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
