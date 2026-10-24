# Template: LoginCrux (Login Form)
<!-- prep-status: shipped-as=loginbolt -->
> **SHIPPED-UNDER** — the ColorLib `login-form-v17` design this prep describes already
> ships as `apps/loginbolt` (<https://loginbolt.free.componentdock.com>).
> Do not scaffold `apps/logincrux`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-loginbolt/spec.md`.

## Purpose

A recreation of ColorLib's **Login Form V17** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source:** [ColorLib "Login Form V17"](https://colorlib.com/wp/template/login-form-v17/)
- **Preview URL:** `https://preview.colorlib.com/theme/login-form-v17/` (404 — unreachable at time of prep; design derived from screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Package:** `@free-react-templates/logincrux`

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/lf/Login_v17/index.html` — HTTP 200, 1,763 B, title `Login V17`.
>
> Sheet: `https://colorlib.com/etc/lf/Login_v17/css/style.css?v=93221552` (11,098 B).
> Faces it actually declares: `Poppins-Regular`, `Montserrat-Bold`, `Segoe UI`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design Tokens

Extracted from screenshot pixel analysis and CSS references on the ColorLib page.

| Token | Value | Notes |
|---|---|---|
| Brand / primary | `#00ad5f` | Green — used for submit button, accent links |
| Primary hover | `#00ad5f` | Slightly darker green on hover |
| Primary light | `#85e3bf` / `#86dcb5` | Light green accent tints |
| Primary tint | `#d5f4e4` / `#d5f4e4` | Very light green background tint |
| Background | `#f2f2f2` | Page background (top/bottom margins) |
| Card / form bg | `#ffffff` | White form panel (right side) |
| Text primary | `#1a1a1a` | Dark headings / label text |
| Text secondary | `#64748b` / `#94a3b8` | Subtle gray for helper text, placeholders |
| Border / input | `#ddd` / `#eee` | Input field borders and separators |
| Link blue | `#1a73e8` | Secondary link / anchor color |
| Indigo accent | `#6366f1` | Alternate accent (seen in CSS references) |
| Orange accent | `rgb(255,105,0)` | Minor accent (seen in CSS references) |
| Page background (body) | `#f7f7f7` | Alternative light background |
| Font family | `"Poppins", sans-serif` (inferred from other ColorLib login templates) | Check at implementation |

## Layout & Structure

**Split-screen layout:**

1. **Left half (≈50% width):** Full-height background photograph (landscape/nature scene) with a dark overlay (opacity ~0.4–0.5) to ensure text contrast. On mobile, this half is hidden.
2. **Right half (≈50% width):** White background card containing the login form, vertically centered.

**Section order (top to bottom):**

1. **Navigation / Brand bar** — minimal; may include a logo or brand name centered at the top
2. **Hero / Split area** — the main split-screen section (photo left, form right)
3. **Form elements** (within hero):
   - Heading: "Sign In" or similar
   - Email / Username input field (with icon)
   - Password input field (with icon, toggle visibility)
   - "Remember me" checkbox
   - "Forgot password?" link
   - Submit button (green, full-width, rounded)
   - "Don't have an account? Sign up" link below
4. **Footer** — minimal; "Component Dock" attribution link

## Requirements

### Feature: LoginCrux template behaviour

#### Scenario: Page renders with split-screen layout

- **GIVEN** the user navigates to the LoginCrux page
- **THEN** the page displays a split-screen layout
- **AND** the left half shows a full-height background image with a dark overlay
- **AND** the right half shows a white form panel

#### Scenario: Form displays all required fields

- **GIVEN** the user views the login form
- **THEN** an email/username input is visible
- **AND** a password input is visible
- **AND** a "Remember me" checkbox is present
- **AND** a "Forgot password?" link is present
- **AND** a submit button is visible

#### Scenario: Form submission with empty fields shows validation

- **GIVEN** the user leaves all fields empty
- **WHEN** the user clicks the submit button
- **THEN** validation error messages are displayed
- **AND** the form is not submitted

#### Scenario: Form submission with valid credentials

- **GIVEN** the user enters a valid email and password
- **WHEN** the user clicks the submit button
- **THEN** the form submits successfully (no validation errors)

#### Scenario: Mobile responsive behavior

- **GIVEN** the user views the page on a mobile viewport (<768px)
- **THEN** the left image half is hidden
- **AND** the form takes full width
- **AND** all form elements are accessible and properly sized

#### Scenario: Accessibility

- **GIVEN** the user navigates the form using keyboard only
- **WHEN** the user presses Tab
- **THEN** focus moves through form fields in logical order
- **AND** each field has a visible focus indicator
- **AND** the submit button is keyboard-accessible

#### Scenario: Forgot password link

- **GIVEN** the user clicks "Forgot password?"
- **THEN** the link navigates appropriately (href set, behavior defined)

#### Scenario: Sign up link

- **GIVEN** the user clicks "Don't have an account? Sign up"
- **THEN** the link navigates appropriately (href set, behavior defined)

#### Scenario: Footer contains Component Dock link

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** a "Component Dock" link to `https://www.componentdock.com/` is visible

## Verification checklist

- [ ] Split-screen layout renders correctly (50/50 or close)
- [ ] Left side shows placeholder image with dark overlay
- [ ] Right side shows white form card
- [ ] All form inputs have labels and proper a11y attributes
- [ ] Green submit button (#00ad5f) with correct hover state
- [ ] Form validates on empty submit
- [ ] Mobile: left image hidden, form full width
- [ ] Keyboard navigation works (Tab order, focus rings)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in any app code
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run test:coverage` passes
- [ ] Build succeeds (`npm run build`)
- [ ] Typecheck passes
- [ ] Lint passes

<!-- live-palette-revalue:start -->
**Live palette re-value (2026-10-23)** — the demo `https://colorlib.com/etc/lf/Login_v17/index.html` answers **HTTP 200** (1,763 B); the declarations below are quoted from its own stylesheets.

| claimed | painted | d | sheet (bytes, sha256) | declaration |
| --- | --- | --- | --- | --- |
| `#00ad5e` | `#00ad5f` ×4 | 1 | `style.css?v=93221552` (11,098 B, `b29ce0a2d5cf…`) | `color: #00ad5f;` |
| `#02ab60` | `#00ad5f` ×4 | 3 | `style.css?v=93221552` (11,098 B, `b29ce0a2d5cf…`) | `color: #00ad5f;` |

The claimed hex was a screenshot sample of the same hue; the sheet value is canonical (`docs/replication.md`).
<!-- live-palette-revalue:end -->

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://colorlib.com/etc/lf/Login_v17/index.html` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#85e3bf` — nearest `#00ad5f` (d=173)
- `#86dcb5` — nearest `#00ad5f` (d=166)
- `#d5f4e4` — nearest `#007bff` (d=246)
- `#64748b` — nearest `#0056b3` (d=112)
- `#94a3b8` — nearest `#0056b3` (d=167)
- `#1a73e8` — nearest `#007bff` (d=36)
- `#6366f1` — nearest `#007bff` (d=102)
<!-- live-palette-unverified:end -->
