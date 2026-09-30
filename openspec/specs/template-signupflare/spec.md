# Template: Signupflare (Signup Form)

## Purpose

Signupflare is a centered single-card signup form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Signup Form 18" website template (source:
https://colorlib.com/wp/template/signup-form-18/ — demo title "Sign Up 08"),
built under a DIFFERENT name (Signupflare — "signup" + "flare" for the
coral→pink gradient flare across the card header; single lowercase word), per
the monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `signup-form-18`
- **Source:** https://colorlib.com/wp/template/signup-form-18/
- **Preview (LIVE, verified 2026-09-30 by direct fetch):**
  **https://preview.colorlib.com/theme/bootstrap/signup-form-18/**
  (HTTP 200, 4,135 bytes, `<title>Sign Up 08</title>`)
  - NOTE: the naive `https://preview.colorlib.com/theme/signup-form-18/`
    returns 404 — this signup-form family lives under
    `theme/bootstrap/<slug>/` (same path as signup-form-13/14/16/19/20). Do
    not redo this lookup.
- **Preview CSS:** `css/style.css?v=12cad38e` (18,128 bytes) —
  Bootstrap-derived `cl-*` base + hand-written template block starting at
  `.ftco-section` (char 13,945 of the file). Template overrides:
  `.ftco-section`, `.heading-section`, `.login-wrap` (+ `:after` gradient
  band, `h3`, `.img`), `.field-icon`, `.cl-form-control` (pill overrides),
  `.cl-btn`, `.cl-btn.cl-btn-primary` (gradient override).
- **Body rule (canonical):** `font-family: "Lato", Arial, sans-serif;
font-size: 16px; line-height: 1.8; background: #fafafa; color: gray;`
- **Scripts:** eye-toggle behavior only. Icons: inline `fa-eye` /
  `fa-eye-slash` SVGs — **REPLACE with lucide-react** (`Eye`, `EyeOff`), do
  not ship Font Awesome glyphs.
- **Fonts:** Lato — load **Google Fonts `<link>` (300, 400)** in
  `index.html`; weights used: 300 (card h3), 400 (body/heading).
- **Assets:** `images/bg.jpg` = avatar photo — use
  `https://picsum.photos/seed/signupflare-1/<w>/<h>` placeholder, never the
  source asset.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-18.jpg
  (visually analyzed 2026-09-30; matches the live preview).
- **TEMPLATES.md:** "## Signup Forms" area, line 2832
  (`- [~] **Signup Form 18**`).

## Design Tokens (extracted from live preview CSS + screenshot)

| Token                | Value                                                                                                                     | Notes                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Font family          | `"Lato", Arial, sans-serif` (Google Fonts 300/400)                                                                        | body 16px, line-height 1.8                                                   |
| Page background      | `#fafafa`                                                                                                                 | body rule — full viewport, light gray                                        |
| Body text color      | `gray` (~`#808080`)                                                                                                       | body rule                                                                    |
| Heading / h3 color   | `#000`                                                                                                                    | h2/h3                                                                        |
| Accent / link color  | `#f35587`                                                                                                                 | "Sign In" link, button border                                                |
| Brand gradient       | `linear-gradient(135deg, #f75959 0%, #f35587 100%)`                                                                       | card header band + Continue button                                           |
| Gradient start       | `#f75959`                                                                                                                 | coral red (top-left)                                                         |
| Gradient end         | `#f35587`                                                                                                                 | pink (bottom-right)                                                          |
| Page heading         | 28px, weight 400, `#000`, centered                                                                                        | `.heading-section` ("Sign Up #08")                                           |
| Section padding      | `7em 0`                                                                                                                   | `.ftco-section` (≈ 112px at 16px root)                                       |
| Card background      | `#ffffff`                                                                                                                 | `.login-wrap`                                                                |
| Card radius          | `5px`                                                                                                                     | subtle — NOT pill                                                            |
| Card shadow          | `0px 10px 34px -15px rgba(0,0,0,0.24)`                                                                                    |                                                                              |
| Card padding         | `100px 30px 30px 30px`                                                                                                    | top padding reserves band space                                              |
| Card header band     | height `160px`, gradient, `border-radius: 5px 5px 50% 0`                                                                  | `.login-wrap:after` — the `50%` bottom-right radius creates the curved swoop |
| Avatar               | 100×100px circle, `border: 4px solid #fff`, shadow `0px 10px 23px -16px rgba(0,0,0,0.4)`, `margin-bottom: 20px`, centered | `.login-wrap .img` — background image cover/center (picsum placeholder)      |
| Card heading         | "Sign Up", Lato weight 300, 22px, `#000`, centered                                                                        | `.login-wrap h3`                                                             |
| Input height         | `52px`                                                                                                                    | `.cl-form-control`                                                           |
| Input radius         | `40px` (pill)                                                                                                             |                                                                              |
| Input background     | `rgba(0,0,0,0.03)` (≈ `#f7f7f7`)                                                                                          |                                                                              |
| Input border         | `none`                                                                                                                    | focus: same bg, `outline: none`, no ring (source)                            |
| Input text           | `#000`, 16px, padding `0 20px`                                                                                            |                                                                              |
| Input placeholder    | `rgba(0,0,0,0.7)`                                                                                                         |                                                                              |
| Password toggle icon | absolute, `right: 15px`, vertically centered, `rgba(0,0,0,0.5)`                                                           | eye / eye-slash swap                                                         |
| Button radius        | `40px` (pill)                                                                                                             | `.cl-btn`                                                                    |
| Button background    | brand gradient (same as header band)                                                                                      | `.cl-btn.cl-btn-primary`                                                     |
| Button border        | `1px solid #f35587`                                                                                                       |                                                                              |
| Button text          | `#fff`, 15px                                                                                                              | label "Continue"                                                             |
| Button hover         | solid `#f35587` background                                                                                                | `.cl-btn.cl-btn-primary:hover`                                               |
| Button width/height  | full width, `52px` (inherits `.cl-form-control`)                                                                          |                                                                              |
| Sign-in line         | gray body text "I'm already a member!" + "Sign In" link in `#f35587`                                                      | `p > a`, left-aligned inside card                                            |
| Card avatar image    | placeholder `https://picsum.photos/seed/signupflare-1/200/200`                                                            | never copy source assets                                                     |

## Section structure (from the live DOM)

1. Page section — light gray `#fafafa` background, `7em` vertical padding, centered column
2. Page heading — "Sign Up #08", 28px, black, centered, ~3rem margin below
3. Card (`.login-wrap`) — white, 5px radius, soft shadow; col-md-7 / col-lg-5, centered, max width ~450px
4. Gradient header band — absolute, 160px tall, coral→pink gradient, curved bottom-right corner (`5px 5px 50% 0`), behind content
5. Avatar — 100px circle with white ring, centered, overlapping the gradient band
6. Card heading — "Sign Up", light 22px, centered
7. Form — name input (placeholder "John Doe") → email input (placeholder "johndoe@gmail.com") → password input (placeholder "Password") with eye toggle; then full-width gradient pill button "Continue"
8. Sign-in line — "I'm already a member! Sign In" ("Sign In" = pink link), left-aligned
9. Footer — Component Dock link (monorepo mandate; the source has no footer)

## Requirements

### Requirement: Centered card on light gray page

The system SHALL render a full-viewport page with a light gray background
(`#fafafa`) and center a white card (radius 5px, ~450px max width, soft
shadow) horizontally, with a centered "Sign Up #08" title (28px, black)
above the card and `7em`-equivalent vertical padding around the block.

#### Scenario: Page renders centered card

- **GIVEN** the user visits the Signupflare signup page
- **THEN** a light gray (`#fafafa`) background SHALL fill the viewport
- **AND** the "Sign Up #08" title SHALL be displayed above the card
- **AND** a white card SHALL be centered on the page

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile viewport (width < 768px)
- **THEN** the card SHALL remain centered with appropriate padding
- **AND** all form fields SHALL remain full width

### Requirement: Gradient header band with curved edge

The card SHALL display a 160px-tall absolutely-positioned header band at its
top, filled with the coral→pink brand gradient (`linear-gradient(135deg,
#f75959 0%, #f35587 100%)`) and clipped by the card's `overflow: hidden`,
with the band's bottom-right corner curved via `border-radius: 5px 5px 50% 0`
(flat-ish left, big sweep on the right).

#### Scenario: Gradient band renders

- **GIVEN** the card is visible
- **THEN** a 160px gradient band SHALL be displayed at the top of the card
- **AND** the gradient SHALL run from coral red (`#f75959`) top-left to pink (`#f35587`) bottom-right
- **AND** the band's bottom-right corner SHALL be curved (large radius sweep)

### Requirement: Avatar and card heading

The card SHALL display a 100px circular avatar image at its top center —
white 4px ring, subtle shadow, deterministic picsum placeholder — straddling
the gradient band's lower edge, and a "Sign Up" heading (Lato 300, 22px,
black, centered) below it.

#### Scenario: Avatar and heading display

- **GIVEN** the card is visible
- **THEN** a circular avatar image SHALL be shown at the top center of the card
- **AND** the avatar SHALL have a 4px white border and overlap the gradient band
- **AND** "Sign Up" SHALL be displayed as a light-weight 22px black heading below the avatar

### Requirement: Signup form fields as pill inputs

The form SHALL render three fields — name, email, and password — as
full-width pill inputs (height 52px, radius 40px, faint gray fill
`rgba(0,0,0,0.03)`, no border, no focus ring, per source) with the
placeholders "John Doe", "johndoe@gmail.com", and "Password", and visually
hidden labels associated via htmlFor/id for accessibility.

#### Scenario: Form fields render

- **GIVEN** the signup form is visible
- **THEN** an input with placeholder "John Doe" SHALL be displayed
- **AND** an input with placeholder "johndoe@gmail.com" SHALL be displayed below
- **AND** a password input with placeholder "Password" SHALL be displayed below email
- **AND** all inputs SHALL be 52px-tall pills with faint gray backgrounds and no border

#### Scenario: Accessibility

- **GIVEN** the form is rendered
- **THEN** all inputs SHALL have associated labels via htmlFor/id
- **AND** the submit button SHALL have type="submit"
- **AND** the password toggle button SHALL have an aria-label
- **AND** interactive buttons SHALL have focus-visible states

### Requirement: Password visibility toggle

The password field SHALL include an eye toggle button inside the input
(lucide-react `Eye`/`EyeOff`, right-aligned at 15px, gray) that switches the
input type between "password" and "text" and updates its accessible label
between "Show password" and "Hide password".

#### Scenario: Password toggle works

- **GIVEN** the password field is visible
- **THEN** an eye icon button SHALL be displayed on the right side of the password input
- **AND** the password input SHALL have type "password"
- **WHEN** the user clicks the eye button
- **THEN** the password input SHALL have type "text"
- **AND** the button's accessible label SHALL change to "Hide password"
- **WHEN** the user clicks the button again
- **THEN** the password input SHALL have type "password"

### Requirement: Continue button behavior

The form SHALL include a full-width pill button "Continue" (height 52px,
radius 40px) filled with the coral→pink brand gradient, bordered
`1px solid #f35587`, white 15px text; on hover the background SHALL become
solid `#f35587`; submitting the form SHALL be prevented (no page navigation)
with entered values retained.

#### Scenario: Submit prevents navigation

- **GIVEN** the form is visible
- **THEN** a full-width gradient pill button "Continue" SHALL be displayed
- **WHEN** the user fills the fields and clicks "Continue"
- **THEN** the form submission SHALL be prevented (no page navigation)
- **AND** the entered values SHALL remain in the fields

### Requirement: Sign-in link

The card SHALL show "I'm already a member!" in gray below the button with a
clickable "Sign In" link in the accent color (`#f35587`).

#### Scenario: Sign-in link renders

- **GIVEN** the form is visible
- **THEN** "I'm already a member!" text SHALL be shown below the button
- **AND** "Sign In" SHALL appear as a clickable pink link

### Requirement: Footer with Component Dock link

The page SHALL include a footer line linking to `https://www.componentdock.com/`
with link text mentioning "Component Dock" (opens in a new tab). This
replaces any external/attribution links (monorepo mandate).

#### Scenario: Footer renders

- **GIVEN** the page is rendered
- **THEN** a footer line SHALL link to https://www.componentdock.com/
- **AND** the link text SHALL mention "Component Dock"

## Verification checklist

- [ ] Light gray (`#fafafa`) page background
- [ ] Centered page heading above the card ("Sign Up #08")
- [ ] White card, 5px radius, soft shadow, centered, max width ~450px
- [ ] 160px coral→pink gradient header band with curved bottom-right corner (`5px 5px 50% 0`)
- [ ] 100px circular avatar with white ring, overlapping the band (picsum seed signupflare-1)
- [ ] "Sign Up" light 22px heading, centered
- [ ] Pill inputs: John Doe / johndoe@gmail.com / Password (52px, radius 40px, faint gray bg)
- [ ] Password eye toggle (show/hide) with aria-label (lucide-react icons)
- [ ] Full-width gradient pill "Continue" button, white text, #f35587 border, solid-pink hover
- [ ] "I'm already a member! Sign In" sign-in line (#f35587 link, left-aligned)
- [ ] Lato loaded via Google Fonts in index.html (300, 400)
- [ ] Brand tokens in `@theme` (gradient colors, page bg, accent)
- [ ] Placeholder images from picsum.photos (deterministic seed)
- [ ] Responsive: card centered on mobile, fields full width
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
