# Template: LoginCrux (Login Form)

## Purpose

A recreation of ColorLib's **Login Form V17** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source:** [ColorLib Login Form V17](https://colorlib.com/wp/template/login-form-v17/)
- **Preview URL:** `https://preview.colorlib.com/theme/login-form-v17/` (404 — unreachable at time of prep; design derived from screenshot)
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Package:** `@free-react-templates/logincrux`

## Design Tokens

Extracted from screenshot pixel analysis and CSS references on the ColorLib page.

| Token | Value | Notes |
|---|---|---|
| Brand / primary | `#00ad5e` | Green — used for submit button, accent links |
| Primary hover | `#02ab60` | Slightly darker green on hover |
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

## Gherkin Requirements

### Scenario: Page renders with split-screen layout
- **Given** the user navigates to the LoginCrux page
- **Then** the page displays a split-screen layout
- **And** the left half shows a full-height background image with a dark overlay
- **And** the right half shows a white form panel

### Scenario: Form displays all required fields
- **Given** the user views the login form
- **Then** an email/username input is visible
- **And** a password input is visible
- **And** a "Remember me" checkbox is present
- **And** a "Forgot password?" link is present
- **And** a submit button is visible

### Scenario: Form submission with empty fields shows validation
- **Given** the user leaves all fields empty
- **When** the user clicks the submit button
- **Then** validation error messages are displayed
- **And** the form is not submitted

### Scenario: Form submission with valid credentials
- **Given** the user enters a valid email and password
- **When** the user clicks the submit button
- **Then** the form submits successfully (no validation errors)

### Scenario: Mobile responsive behavior
- **Given** the user views the page on a mobile viewport (<768px)
- **Then** the left image half is hidden
- **And** the form takes full width
- **And** all form elements are accessible and properly sized

### Scenario: Accessibility
- **Given** the user navigates the form using keyboard only
- **When** the user presses Tab
- **Then** focus moves through form fields in logical order
- **And** each field has a visible focus indicator
- **And** the submit button is keyboard-accessible

### Scenario: Forgot password link
- **Given** the user clicks "Forgot password?"
- **Then** the link navigates appropriately (href set, behavior defined)

### Scenario: Sign up link
- **Given** the user clicks "Don't have an account? Sign up"
- **Then** the link navigates appropriately (href set, behavior defined)

### Scenario: Footer contains Component Dock link
- **Given** the user scrolls to the bottom of the page
- **Then** a "Component Dock" link to `https://www.componentdock.com/` is visible

## Verification Checklist

- [ ] Split-screen layout renders correctly (50/50 or close)
- [ ] Left side shows placeholder image with dark overlay
- [ ] Right side shows white form card
- [ ] All form inputs have labels and proper a11y attributes
- [ ] Green submit button (#00ad5e) with correct hover state
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
