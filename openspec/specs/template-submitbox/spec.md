# Template: SubmitBox (Signup Form)

Recreation of ColorLib "Signup Form 13"
(https://colorlib.com/wp/template/signup-form-13/)

## Purpose

Submitbox is a signup form template. It recreates the ColorLib **Signup Form 13** design (https://colorlib.com/wp/template/signup-form-13/, preview: https://preview.colorlib.com/theme/bootstrap/signup-form-13/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design Tokens

| Token                       | Value                                | Notes                 |
| --------------------------- | ------------------------------------ | --------------------- |
| Brand / accent (left panel) | #7fa998                              | Teal green            |
| Primary button              | #007bff                              | Bootstrap blue        |
| Primary button hover        | #0069d9                              | Darker blue           |
| Body background             | #ffffff                              | White                 |
| Left panel text             | #ffffff                              | White on teal         |
| Heading color               | #000000                              | Black                 |
| Form text color             | #212529                              | Dark gray             |
| Input placeholder           | #6c757d                              | Gray                  |
| Input focus border          | #80bdff                              | Light blue            |
| Facebook                    | #44629b                              | Facebook blue         |
| Twitter                     | #1dade9                              | Twitter blue          |
| Font family                 | Roboto                               | Weights 400, 500, 700 |
| Card border radius          | 5px                                  | Rounded corners       |
| Card shadow                 | 0px 10px 34px -15px rgba(0,0,0,0.24) | Subtle shadow         |
| Social icon size            | 40x40                                | Square buttons        |

## Layout

Split-screen layout (desktop: two halves, mobile: stacked):

### Left Panel (green, #7fa998)

- Soccer ball SVG icon (use lucide CircleDashed or similar)
- Heading: "Soccer Ball" → keep as "Soccer Ball" (icon theme)
- Subtext: "Already have an account?"
- Button: "Sign In" (white outline, border-radius)

### Right Panel (white, form area)

- Heading: "Hello! Please signup to continue"
- Form fields:
  - Full Name (text input, placeholder "John Doe")
  - Email Address (email input, placeholder "johndoe@gmail.com")
  - Password (password input, placeholder "Password")
  - Confirm Password (password input, placeholder "Confirm Password")
- Submit button: "Sign Up" (blue #007bff, full width, rounded)
- Social login divider: "or Signup with"
- Social buttons: Facebook (#44629b), Twitter (#1dade9)
- Footer link: "I'm already a member! Sign In"
- Component Dock link in footer

## Components

1. `App.tsx` — Split-screen container
2. `LeftPanel.tsx` — Green panel with icon, heading, CTA
3. `SignupForm.tsx` — Form with inputs, submit, social login
4. `Footer.tsx` — Component Dock attribution

## Requirements

### Feature: SubmitBox

#### Scenario: Renders heading "Sign Up #03" or "Hello! Please signup to continue"

- **Given** the page is rendered
- **When** the page is inspected
- **Then** it renders heading "Sign Up #03" or "Hello! Please signup to continue"

#### Scenario: Renders all four input fields with correct placeholders

- **Given** the page is rendered
- **When** the page is inspected
- **Then** it renders all four input fields with correct placeholders

#### Scenario: Full Name field accepts text input

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Full Name field accepts text input

#### Scenario: Email field accepts email input

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Email field accepts email input

#### Scenario: Password field masks input

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Password field masks input

#### Scenario: Confirm Password field masks input

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Confirm Password field masks input

#### Scenario: Submit button is present and clickable

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Submit button is present and clickable

#### Scenario: Social login buttons render (Facebook, Twitter)

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Social login buttons render (Facebook, Twitter)

#### Scenario: Left panel shows icon and "Already have an account?" text

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Left panel shows icon and "Already have an account?" text

#### Scenario: "Sign In" button renders in left panel

- **Given** the page is rendered
- **When** the page is inspected
- **Then** "Sign In" button renders in left panel

#### Scenario: "I'm already a member! Sign In" link renders

- **Given** the page is rendered
- **When** the page is inspected
- **Then** "I'm already a member! Sign In" link renders

#### Scenario: Footer links to componentdock.com

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Footer links to componentdock.com

#### Scenario: Responsive: stacks on mobile, side-by-side on desktop

- **Given** the page is rendered
- **When** the page is inspected
- **Then** Responsive: stacks on mobile, side-by-side on desktop

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/submitbox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/submitbox/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
