# Template: SignCraft (Registration Form)
<!-- prep-status: shipped-as=regvibe -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-regform-33` design this prep describes already
> ships as `apps/regvibe` (<https://regvibe.free.componentdock.com>).
> Do not scaffold `apps/signcraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-regvibe/spec.md`.

## Purpose

Recreation of Colorlib "Reg Form V33" — a split-screen registration/signup form template.

- **Source**: Colorlib Reg Form V33
- **Source slug**: `colorlib-regform-33`
- **Source URL**: https://colorlib.com/wp/template/colorlib-regform-33/
- **Preview URL**: https://colorlib.com/etc/regform/colorlib-regform-33/
- **Screenshot URL**: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-33.jpg
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

## Design Tokens (from live preview CSS)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background gradient start | `#fee140` / `rgb(254,225,64)` | Page background gradient (136deg) |
| Background gradient end | `#fa709a` / `rgb(250,112,154)` | Page background gradient (136deg) |
| Card background | `#ffffff` | Form card |
| Card shadow | `0px 8px 20px 0px rgba(0,0,0,0.15)` | Form card elevation |
| Label color | `#666666` | Form field labels |
| Input text color | `#333333` | Form input values |
| Input border | `2px solid #e5e5e5` (bottom only) | Default input border |
| Input focus border | `2px solid #2bb33e` | Focused input underline |
| Button background | `#373be3` | Register button |
| Button hover | `#2a2cb0` | Register button hover |
| Link color | `#373be3` | "Sign in" link |
| Overlay text color | `#ffffff` | Text over the left-side image |
| Error color | `red` | Validation error text |
| Valid indicator | `#53c83c` | Green circle for valid fields |

### Typography
| Token | Value |
|-------|-------|
| Font family | `'Open Sans', sans-serif` (Google Fonts) |
| Heading ("Sign Up") | 38px, weight 400, white |
| Subheading ("Privacy policy...") | 16px, weight 400, white |
| Label | 13px, weight 600, `#666` |
| Input text | 16px, weight 700, `#333` |
| Button text | 15px, weight 700, white |
| "Or Sign in" text | 14px, weight 600, `#666` |
| "Sign in" link | 16px, `#373be3` |

### Layout
| Property | Value |
|----------|-------|
| Card width | 910px |
| Card margin | 175px top/bottom |
| Card layout | flex row (image left, form right) |
| Form padding | 73px 80px 41px |
| Input bottom margin | 28px |
| Button width | 180px |
| Button border-radius | 4px |
| Button padding | 15px |
| Responsive breakpoint | 991px (stacks vertically) |
| Mobile form padding | 30px 20px (below 575px) |

## Requirements

### Feature: SignCraft — Split-screen registration form

#### Scenario: Full page renders with gradient background

- **GIVEN** the page loads
- **THEN** the full viewport has a diagonal gradient background from yellow (#fee140) to pink (#fa709a)
- **AND** the form card is centered horizontally and vertically

#### Scenario: Form card layout (desktop)

- **GIVEN** the viewport is wider than 991px
- **THEN** the form card displays as a horizontal flex container
- **AND** the left side shows an image with "Sign Up" text overlay and "Privacy policy & Term of service" subtext
- **AND** the right side shows the registration form with white background and box shadow

#### Scenario: Registration form fields

- **GIVEN** the form card is visible
- **THEN** the form contains a USERNAME text input
- **AND** the form contains an E-MAIL input with email validation pattern
- **AND** the form contains a PASSWORD input (type=password)
- **AND** the form contains a CONFIRM PASSWORD input (type=password)
- **AND** each field has an uppercase label above it

#### Scenario: Register button

- **GIVEN** the form is visible
- **THEN** a "Register" button is displayed with blue-purple background (#373be3)
- **AND** the button has rounded corners (4px radius)
- **AND** on hover the button background darkens to #2a2cb0

#### Scenario: Sign-in link

- **GIVEN** the form is visible
- **THEN** an "Or Sign in" text is shown below the Register button
- **AND** "Sign in" is a clickable link styled in #373be3

#### Scenario: Input focus states

- **GIVEN** a user focuses on any form input
- **THEN** the bottom border changes to green (#2bb33e)

#### Scenario: Form validation

- **GIVEN** the user submits the form with empty required fields
- **THEN** validation errors appear for EMAIL, PASSWORD, and CONFIRM PASSWORD fields
- **AND** error messages are displayed in red below the respective fields

#### Scenario: Responsive layout (tablet)

- **GIVEN** the viewport is between 576px and 991px wide
- **THEN** the form card stacks vertically (image on top, form below)
- **AND** form padding is 50px

#### Scenario: Responsive layout (mobile)

- **GIVEN** the viewport is narrower than 576px
- **THEN** the form card stacks vertically
- **AND** form padding is 30px 20px
- **AND** the Register button is full-width (not floated)

#### Scenario: Footer with Component Dock link

- **GIVEN** the page is fully loaded
- **THEN** a footer is present with a link to "https://www.componentdock.com/" branded as "Component Dock"

## Verification checklist

- [ ] Gradient background matches `linear-gradient(136deg, #fee140 0%, #fa709a 100%)`
- [ ] Open Sans font loaded (regular, 600, bold)
- [ ] Split-screen layout: image left, form right
- [ ] 4 form fields: username, email, password, confirm password
- [ ] Uppercase labels with correct weight/size/color
- [ ] Input bottom-border style (not full border)
- [ ] Green focus border on inputs
- [ ] Register button: #373be3 bg, 4px radius, white text, hover darkens
- [ ] "Or Sign in" text with styled link
- [ ] Card shadow: 0px 8px 20px rgba(0,0,0,0.15)
- [ ] Responsive: stacks at 991px, padding adjusts at 575px
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines/functions/branches/statements)
- [ ] CNAME: signcraft.free.componentdock.com
- [ ] Homepage: https://signcraft.free.componentdock.com
