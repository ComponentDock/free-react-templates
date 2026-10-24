# Template: EntryVault (Login Form)
<!-- prep-status: shipped-as=logdrop -->
> **SHIPPED-UNDER** — the ColorLib `login-form-11` design this prep describes already
> ships as `apps/logdrop` (<https://logdrop.free.componentdock.com>).
> Do not scaffold `apps/entryvault`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-logdrop/spec.md`.

## Purpose

Recreation of ColorLib "Login Form V11" (slug: `login-form-11`).
Preview: `https://preview.colorlib.com/theme/bootstrap/login-form-11/`
Source page: `https://colorlib.com/wp/template/login-form-11/`
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

A clean, centered login card with a circular blue icon, username/password
fields, a full-width rounded primary button, a custom "Remember Me" checkbox,
and a "Forgot Password" link. No navbar, no footer — standalone login page.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Font family | Lato (300, 400, 700) | Loaded via Google Fonts link in index.html |
| Brand / accent | `#1089ff` | Bright blue — icon circle, button, focus ring, checkbox |
| Card background | `#fff` | White card on white page |
| Card border-radius | `10px` | Rounded card corners |
| Card shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Subtle drop shadow |
| Icon circle | 80 × 80 px, `border-radius: 50%`, bg `#1089ff` | Contains white Font Awesome user icon |
| Icon font | Font Awesome 4.7 `fa-user-o` | Use lucide-react `User` icon instead |
| Heading (page title) | 28px, `#000` | h2 "Login #01" — we use "EntryVault" as heading |
| Sign-in heading | `font-weight: 300` (light) | h3 "Sign In" |
| Form control height | 52px | Inputs + button |
| Form control border | `1px solid rgba(0,0,0,0.1)`, radius `5px` | Rounded-left inputs |
| Form focus border | `1px solid #1089ff` | Blue focus ring, no shadow |
| Button | bg `#1089ff`, color `#fff`, radius `40px` (pill), font 15px | Full-width, no shadow |
| Button hover | transparent bg, `#1089ff` border + text | Outline swap on hover |
| Checkbox | Custom FontAwesome checkmark, primary color `#1089ff` | Replace with styled native checkbox |
| "Forgot Password" link | Default Bootstrap link color `#007bff` → style to `#1089ff` | Right-aligned |
| Page background | `#fff` | White |
| Layout | Centered column, max-width col-md-7 col-lg-5 (~350px) | Single centered card |

## Replication reference (screenshot fallback)

The live preview was unreachable at `/theme/login-form-11/` (404). The correct
preview URL includes a `/bootstrap/` prefix:
`https://preview.colorlib.com/theme/bootstrap/login-form-11/`

The ColorLib template page screenshot
(`https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-11-2.jpg`)
shows:
- White page background, centered login card
- Blue circle with white user icon at card top
- "Sign In" light-weight heading below icon
- Two input fields (Username, Password) with light gray borders
- Full-width blue rounded pill "Login" button
- Bottom row: "Remember Me" checkbox (left) and "Forgot Password" link (right)
- Subtle card drop shadow
- No navbar, no footer — pure standalone login form page

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/login-form-11/` | HTTP 200 · 3,159 B · title `Login 01` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/login-form-11/css/style.css?v=d5ab9ba5` | HTTP 200 · 16,423 B · sha256 `ea4466e813ad` |

> ⚠️ the demo's own `<title>` reads `Login 01` though the path is `login-
> form-11` — the host's titles are not reliable labels; the readings above
> are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×11,
`#1089ff`×9, `#007bff`×5, `#6c757d`×4, `#212529`×3, `#000000`×3,
`#495057`×2, `#0062cc`×2, `#0056b3`×1, `#ced4da`×1.

**Low-chroma values the sheet actually uses** — `#6c757d`, `#212529`,
`#495057`, `#ced4da`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: EntryVault template behaviour

#### Scenario: Page renders the login card

- **GIVEN** the user navigates to the EntryVault page
- **THEN** a centered login card is visible on a white background
- **AND** the card has rounded corners and a subtle drop shadow

#### Scenario: Circular icon displays

- **GIVEN** the login card is visible
- **THEN** an 80px blue circular icon with a white user silhouette is shown at the top of the card

#### Scenario: Sign In heading

- **GIVEN** the login card is visible
- **THEN** a "Sign In" heading is displayed in light font weight below the icon

#### Scenario: Username input

- **GIVEN** the login card is visible
- **THEN** a text input with placeholder "Username" is present
- **AND** the input has a 5px border-radius and 52px height
- **AND** the input border is light gray (`rgba(0,0,0,0.1)`)

#### Scenario: Password input

- **GIVEN** the login card is visible
- **THEN** a password input with placeholder "Password" is present
- **AND** the input has the same styling as the username input

#### Scenario: Input focus state

- **GIVEN** the username input is focused
- **THEN** the input border changes to brand blue (#1089ff)
- **AND** no box-shadow is applied

#### Scenario: Login button

- **GIVEN** the login card is visible
- **THEN** a full-width "Login" button is present
- **AND** the button has a pill shape (border-radius 40px)
- **AND** the button background is brand blue (#1089ff)
- **AND** the button text is white

#### Scenario: Login button hover

- **GIVEN** the user hovers over the Login button
- **THEN** the button background becomes transparent
- **AND** the button border and text become brand blue (#1089ff)

#### Scenario: Remember Me checkbox

- **GIVEN** the login card is visible
- **THEN** a "Remember Me" checkbox is present on the left side below the button
- **AND** the checkbox uses a custom styled appearance with brand blue when checked

#### Scenario: Forgot Password link

- **GIVEN** the login card is visible
- **THEN** a "Forgot Password" link is present on the right side below the button
- **AND** the link color matches the brand blue (#1089ff)

#### Scenario: Page heading

- **GIVEN** the user navigates to the EntryVault page
- **THEN** a page-level heading "EntryVault" is displayed above the card
- **AND** the heading is 28px and black (#000)

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device
- **THEN** the login card remains centered and fills available width with appropriate padding
- **AND** all form elements remain usable at small viewport sizes

#### Scenario: Component Dock footer link

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** a footer link to "https://www.componentdock.com/" is present
- **AND** the link text references "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- entryvault` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 13 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - EntryVault template behaviour
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
