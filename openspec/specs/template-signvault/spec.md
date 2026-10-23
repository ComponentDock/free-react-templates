# Template: Signvault (Signup Form / Registration)

## Purpose

Recreation of ColorLib **Signup Form 15** (`https://colorlib.com/wp/template/signup-form-15/`).
Preview: `https://preview.colorlib.com/theme/signup-form-15/` (unreachable at time of prep; design derived from TEMPLATES.md screenshot).

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a centered-card signup form on a light gray background. The white card
contains a "Sign Up" heading and four floating-label input fields (Full Name,
Email Address, Password, Confirm Password). A circular red submit button with a
send icon overlaps the bottom-right edge of the card. A subtle wave/swoosh
decoration adorns the card's bottom portion. Below the card: "Already have an
account? Sign In" (the Sign In link in the same red accent).

## Design Tokens

Extracted from TEMPLATES.md screenshot (preview page 404 at prep time):

| Token               | Value                    | Notes                                        |
| ------------------- | ------------------------ | -------------------------------------------- |
| brand-primary       | `#e32249`                | Red/coral — submit button, Sign In link       |
| brand-primary-hover | `#ba1839`                | Darker red on hover                           |
| page-bg             | `#f5f5f5`                | Light gray page background                   |
| card-bg             | `#ffffff`                | White form card                              |
| card-shadow         | `0 4px 20px rgba(0,0,0,0.08)` | Subtle drop shadow on card             |
| card-border-radius  | `16px`                   | Rounded corners on card                      |
| heading-color       | `#333333`                | Dark heading text                            |
| label-color         | `#999999`                | Muted floating labels                        |
| input-border        | `1px solid #e0e0e0`      | Light gray input borders                     |
| input-radius        | `8px`                    | Rounded input fields                         |
| input-focus-border  | `1px solid #e32249`      | Red focus border matching brand              |
| btn-submit-size     | `56px × 56px`            | Circular submit button                       |
| btn-submit-bg       | `#e32249`                | Red circle background                        |
| btn-submit-icon     | `#ffffff`                | White send/arrow icon                        |
| btn-submit-shadow   | `0 4px 12px rgba(227,34,73,0.4)` | Shadow on floating button              |
| wave-color          | `#f0f0f0` / `#e8e8e8`   | Subtle gray wave decoration at card bottom   |
| link-color          | `#e32249`                | "Sign In" link matches brand                 |
| link-text           | `rgba(0,0,0,0.6)`        | "Already have an account?" text color         |
| heading-font        | Poppins (Google Fonts)    | Clean sans-serif heading                     |

### Font

- **Google Font:** Poppins, weights 300, 400, 500, 600, 700
- Fallback: Arial, sans-serif
- Loaded in `index.html` via `<link>` to Google Fonts

## Section Structure (from screenshot)

1. **Page Background** (`min-h-screen bg-gray-100`)
   - Light gray (`#f5f5f5`) full-page background
   - Centered flex container

2. **Form Card** (`bg-white rounded-2xl shadow-lg max-w-md w-full mx-auto`)
   - White card, ~450px max-width, rounded corners (16px)
   - Subtle box-shadow

3. **Card Header** (padding)
   - h2: "Sign Up" — dark heading, left-aligned inside card
   - Margin-bottom separating heading from first input

4. **Form Fields** (4 floating-label inputs)
   - **Full Name** — text input, placeholder "John Doe"
   - **Email Address** — email input, placeholder "johndoe@gmail.com"
   - **Password** — password input, placeholder "Password"
   - **Confirm Password** — password input, placeholder "Confirm Password"
   - Each input: light gray border, 8px radius, padding for floating label
   - Labels float above on focus/filled state (muted gray `#999`)

5. **Submit Button** (floating circular button)
   - 56×56px circle, `#e32249` background
   - White send/arrow icon (paper-plane or arrow-right)
   - Positioned overlapping card bottom-right edge (negative margin or absolute)
   - Red shadow on hover

6. **Wave Decoration** (SVG or CSS)
   - Subtle gray wave/swoosh at bottom of card interior
   - Lighter than card background (`#f0f0f0` → transparent)

7. **Footer Link**
   - "Already have an account? **Sign In**"
   - "Already have an account?" in muted dark text
   - "Sign In" as red accent link (`#e32249`), underlined

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/signup-form-15/` | HTTP 200 · 2,686 B · title `Sign Up 05` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/signup-form-15/css/style.css?v=92b6f1be` | HTTP 200 · 14,854 B · sha256 `c045644a4c8a` |

> ⚠️ the demo's own `<title>` reads `Sign Up 05` though the path is `signup-
> form-15` — the host's titles are not reliable labels; the readings above
> are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×11,
`#e32249`×6, `#007bff`×5, `#6c757d`×4, `#212529`×3, `#000000`×3,
`#495057`×2, `#0062cc`×2, `#0056b3`×1, `#ced4da`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#e74c3c` → **`#e32249`** — the sheet paints `a{color}` with it
- `#c0392b` → **`#ba1839`** — the sheet paints `.submit:hover{background}`
  with it

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Signvault template behaviour

#### Scenario: Page loads with centered card

- **GIVEN** the user visits the template page
- **WHEN** the page finishes loading
- **THEN** a white card is centered on a light gray background
- **AND** the card has rounded corners and a subtle shadow

#### Scenario: Card displays heading

- **GIVEN** the page is loaded
- **THEN** a "Sign Up" heading is visible inside the card
- **AND** the heading is left-aligned

#### Scenario: Form has four fields

- **GIVEN** the page is loaded
- **THEN** a "Full Name" text input is present with placeholder "John Doe"
- **AND** an "Email Address" input is present with placeholder "johndoe@gmail.com"
- **AND** a "Password" input is present with placeholder "Password"
- **AND** a "Confirm Password" input is present with placeholder "Confirm Password"

#### Scenario: Floating labels

- **GIVEN** the page is loaded
- **WHEN** the user focuses on an input field
- **THEN** the corresponding label floats above the input text
- **AND** the label color is muted gray

#### Scenario: Input focus state

- **GIVEN** the page is loaded
- **WHEN** the user clicks on an input field
- **THEN** the input border changes to the brand red color (#e32249)

#### Scenario: Circular submit button

- **GIVEN** the page is loaded
- **THEN** a circular red button is visible
- **AND** the button has a white send/arrow icon inside
- **AND** the button overlaps the bottom-right edge of the card

#### Scenario: Submit button hover

- **GIVEN** the page is loaded
- **WHEN** the user hovers over the circular submit button
- **THEN** the button shows a red-tinted shadow effect
- **AND** the button icon remains white

#### Scenario: Wave decoration

- **GIVEN** the page is loaded
- **THEN** a subtle wave/swoosh decoration is visible at the bottom of the card
- **AND** the wave is in a light gray tone

#### Scenario: Sign In link

- **GIVEN** the page is loaded
- **THEN** text "Already have an account?" is visible below the card
- **AND** a "Sign In" link is displayed in the brand red color
- **AND** clicking the link navigates (or simulates navigation)

#### Scenario: Form validation

- **GIVEN** the page is loaded
- **WHEN** the user clicks the submit button without filling any fields
- **THEN** HTML5 validation prevents submission
- **AND** the browser shows a validation message on the first empty required field

#### Scenario: Responsive layout

- **GIVEN** the user is on a mobile viewport (width < 768px — `.cl-p-md-5` and the 720px container band start at `@media (min-width: 768px)`)
- **WHEN** the page loads
- **THEN** the card takes full width with horizontal padding
- **AND** all form fields remain accessible and readable

#### Scenario: Footer links to Component Dock

- **GIVEN** the user views the page footer
- **THEN** a link to componentdock.com is present
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/signvault/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/signvault/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Card is centered on light gray (#f5f5f5) background
- [ ] Card has white background, 16px border-radius, subtle shadow
- [x] "Sign Up" heading is left-aligned inside card
- [x] Full Name input with "John Doe" placeholder
- [x] Email Address input with "johndoe@gmail.com" placeholder
- [x] Password input with "Password" placeholder
- [x] Confirm Password input with "Confirm Password" placeholder
- [ ] Floating labels appear above inputs on focus/fill
- [ ] Input focus border changes to brand red (#e32249)
- [ ] Circular 56×56px red submit button with white icon
- [ ] Submit button overlaps card bottom-right edge
- [ ] Wave/swoosh decoration at card bottom in light gray
- [x] "Already have an account? Sign In" text below card
- [x] "Sign In" link is red (#e32249), underlined
- [ ] Brand red (#e32249) used consistently (button, link, focus)
- [ ] Font is Poppins (Google Fonts)
- [ ] Responsive: card takes full width on mobile
- [x] No ColorLib references in app code
- [x] Footer links to componentdock.com
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
