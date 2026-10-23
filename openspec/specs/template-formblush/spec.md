# Template: FormBlush (Sign Up Form)

## Purpose

A free sign-up form template with a split-screen layout featuring a decorative photo on the left and a pink form panel on the right. Recreation of ColorLib **Regform 24**.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-24/
- **Preview (Colorlib):** https://preview.colorlib.com/theme/colorlib-regform-24/ (404 — using screenshot as reference)
- **New name:** `formblush`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

Extracted from the ColorLib screenshot (preview was unreachable):

| Token                | Value                                                       | Source                      |
| -------------------- | ----------------------------------------------------------- | --------------------------- |
| Body font            | Poppins (Regular 400, Medium 500, SemiBold 600)             | Google Fonts                |
| Heading font         | Pacifico (decorative cursive)                               | Google Fonts                |
| Brand pink           | `#f5a0b0`                                                   | Form panel background       |
| Brand pink dark      | `#e8899a`                                                   | Hover state, wavy underline |
| Brand pink light     | `#fcd5dc`                                                   | Button hover background     |
| Heading color        | `#333`                                                      | Dark text on pink           |
| Body text            | `#555`                                                      | Secondary text              |
| Input background     | `#ffffff`                                                   | White input fields          |
| Input border         | `#e0e0e0`                                                   | Subtle gray border          |
| Input focus border   | `#f5a0b0`                                                   | Pink focus ring             |
| Placeholder color    | `#999`                                                      | Gray placeholder text       |
| Button background    | `#ffffff`                                                   | White CTA button            |
| Button text          | `#f5a0b0`                                                   | Pink text on white button   |
| Button border-radius | `pill (9999px)`                                             | Rounded full                |
| Social icon style    | `#f5a0b0` border + fill circles                             | Social login section        |
| Photo panel          | 50% width on desktop, hidden on mobile (replaced by banner) | Split layout                |

## Layout & sections

1. **Full-page split layout** — flexbox row on desktop, column on mobile.
2. **Photo panel** (left, 50% width) — decorative photo of a child/person (use picsum placeholder), full height, object-cover. Hidden on mobile, replaced by a shorter banner image at the top.
3. **Form panel** (right, 50% width, pink background `#f5a0b0`):
   - **Heading** — "Sign Up", Pacifico cursive, bold, dark text, centered.
   - **Wavy underline** — SVG decoration below heading.
   - **Username field** — labeled "Username:", text input, white background, rounded border.
   - **E-mail field** — labeled "E-mail:", email input, white background, rounded border.
   - **Password field** — labeled "Password:", password input, white background, rounded border.
   - **Submit button** — "CREATE MY ACCOUNT", white background, pill-shaped, pink text, full width.
   - **Social section** — "Sign up with social platforms" text + 4 social icons (Facebook, Instagram, Twitter, Tumblr) in pink-bordered circles.
4. **Footer** — Component Dock attribution link (mandatory per conventions).

## Requirements

### Feature: FormBlush template behaviour

Feature: FormBlush sign-up form

Background:
- **GIVEN** the page is loaded at the root route

#### Scenario: Full-page split layout renders

- **THEN** a full-viewport layout is visible
- **AND** the layout has a photo panel and a form panel

#### Scenario: Photo panel renders on desktop

- **THEN** the photo panel displays a decorative image
- **AND** the image covers the full panel height

#### Scenario: Form panel has pink background

- **THEN** the form panel has a pink background

#### Scenario: Sign Up heading renders

- **THEN** the heading reads "Sign Up"
- **AND** the heading uses a cursive font style
- **AND** a wavy underline decoration appears below the heading

#### Scenario: Username input renders

- **THEN** there is a username input with label "Username:"
- **AND** the input has a white background

#### Scenario: Email input renders

- **THEN** there is an email input with label "E-mail:"
- **AND** the input has a white background

#### Scenario: Password input renders

- **THEN** there is a password input with label "Password:"
- **AND** the input has a white background

#### Scenario: Submit button renders

- **THEN** there is a "Create My Account" button
- **AND** the button is pill-shaped (fully rounded)
- **AND** the button has a white background with pink text
- **AND** the button is full width

#### Scenario: Social platforms section renders

- **THEN** text "Sign up with social platforms" is visible
- **AND** there are four social media icon links
- **AND** the social icons are Facebook, Instagram, Twitter, and Tumblr
- **AND** each social icon is in a pink-bordered circle

#### Scenario: Social links open in new tabs

- **WHEN** the user clicks a social media icon
- **THEN** the link opens in a new tab

#### Scenario: Form is interactive

- **WHEN** the user types "johndoe" in the username input
- **THEN** the username input shows "johndoe"
- **WHEN** the user types "john@example.com" in the email input
- **THEN** the email input shows "john@example.com"
- **WHEN** the user types "secret123" in the password input
- **THEN** the password input shows "secret123"

#### Scenario: Form submits without error

- **WHEN** the user clicks the "Create My Account" button
- **THEN** the form submits without crashing

#### Scenario: Footer links to Component Dock

- **THEN** a footer link points to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/formblush/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/formblush/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Spec validated with `npm run spec:validate`
- [ ] All tokens match the ColorLib screenshot
- [ ] Section order matches: photo (left) + form (right) in split layout
- [ ] Font families: Poppins (body/inputs), Pacifico (heading)
- [ ] Brand pink #f5a0b0 used for form panel background
- [ ] White pill-shaped submit button with pink text
- [ ] Social icons in pink-bordered circles
- [ ] Responsive: stacks vertically on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
