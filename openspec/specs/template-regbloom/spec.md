# Template: Regbloom (Registration Form)

## Purpose

Regbloom is a single-page registration form in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Colorlib
Regform 35" free template (source:
https://colorlib.com/wp/template/colorlib-regform-35/), built under a
DIFFERENT name (**Regbloom**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a centered card registration form on a solid blue
background. The card has a dark semi-transparent overlay on a concert/crowd
photograph, with rounded corners. Inside the card: a white "Registration
Form" heading with a short white divider line, four pill-shaped input fields
arranged in a 2×2 grid (Name, Email, Password, Confirm Password), and a
coral/salmon "Register" button centered below. Below the card is a plain
white section. The overall aesthetic is clean and modern — a single focused
form card floating on a vivid blue page.

**WHAT MAKES REGBLOOM DISTINCT (signature behaviors):**

1. **Solid steel-blue full-viewport background.** The page background is a
   flat steel blue (~`#4A7FB5` to `#5B8EC9`), no gradient, no texture. The
   card floats centered both horizontally and vertically in the viewport.

2. **Dark photo-overlay card.** The card uses a dark concert/crowd image as
   a background with a semi-transparent dark overlay (likely `rgba(0,0,0,0.5)`
   or similar), giving it a moody, atmospheric feel. Rounded corners
   (~12–16px). The card is roughly 700–800px wide.

3. **White heading + divider.** "Registration Form" in white bold sans-serif
   (~24–28px), centered. A short white horizontal rule (~60px wide, 2px)
   sits directly below the heading as a decorative divider.

4. **Pill-shaped transparent input fields in 2×2 grid.** Four inputs in a
   two-column layout. Each input has:
   - Semi-transparent dark background (`rgba(255,255,255,0.1)` or similar)
   - Rounded/pill corners (border-radius ~25–30px)
   - White or light placeholder text
   - Subtle white/light border (~1px solid rgba white)
   - Adequate padding (~12–16px vertical, ~20px horizontal)

5. **Coral/salmon Register button.** Centered below the form fields. Background
   color approximately `#E8735A` (coral/salmon), white text, rounded corners
   (~25–30px matching the input pill shape), ~14px font, padded.

6. **White section below card.** A plain white section fills the remainder
   of the viewport below the card, serving as a minimal footer/base area.

## Design tokens

| Token              | Value                                    | Source                  |
| ------------------ | ---------------------------------------- | ----------------------- |
| Page background    | `#4A7FB5` (steel blue)                  | Screenshot analysis     |
| Card background    | Concert photo + `rgba(0,0,0,0.5)` overlay | Screenshot analysis  |
| Card border-radius | ~12–16px                                 | Screenshot analysis     |
| Heading color      | `#FFFFFF` (white)                        | Screenshot analysis     |
| Heading font       | Sans-serif (likely Poppins or similar)   | Screenshot analysis     |
| Divider color      | `#FFFFFF` (white), ~60px wide, 2px       | Screenshot analysis     |
| Input bg           | `rgba(255,255,255,0.1)` (translucent)   | Screenshot analysis     |
| Input border       | `1px solid rgba(255,255,255,0.3)`        | Screenshot analysis     |
| Input border-radius| ~25–30px (pill)                          | Screenshot analysis     |
| Input text/placeholder | `#FFFFFF` or light grey              | Screenshot analysis     |
| Button bg          | `#E8735A` (coral/salmon)                 | Screenshot analysis     |
| Button text        | `#FFFFFF` (white)                        | Screenshot analysis     |
| Button border-radius | ~25–30px (pill)                        | Screenshot analysis     |
| Bottom section bg  | `#FFFFFF` (white)                        | Screenshot analysis     |

**Note:** Preview URL (`https://preview.colorlib.com/theme/colorlib-regform-35/`)
returned 404 — all tokens derived from the TEMPLATES.md screenshot
(`colorlib-reg-form-35.jpg`, 1200×972 AVIF, converted to PNG for analysis).

## Gherkin requirements

### Scenario: Page renders with blue background
- **Given** the user navigates to the Regbloom page
- **When** the page loads
- **Then** the full viewport background is a solid steel blue color (~`#4A7FB5`)
- **And** there are no gradients or textures on the page background

### Scenario: Card is centered on page
- **Given** the page has loaded
- **When** the user views the viewport
- **Then** a single card is centered both horizontally and vertically
- **And** the card has rounded corners (~12–16px radius)
- **And** the card has a dark semi-transparent overlay on a background image

### Scenario: Card displays heading and divider
- **Given** the card is visible
- **When** the user reads the card content
- **Then** the heading "Registration Form" is displayed in white bold text
- **And** a short white horizontal divider line (~60px) appears below the heading

### Scenario: Form displays four fields in 2×2 grid
- **Given** the card is visible
- **When** the user views the form fields
- **Then** four input fields are displayed in a two-column grid layout
- **And** the fields are: Name, Email, Password, Confirm Password
- **And** each field has a pill-shaped (rounded) appearance
- **And** each field has a semi-transparent dark background
- **And** each field shows white/light placeholder text

### Scenario: Register button is centered below fields
- **Given** the form fields are visible
- **When** the user views the button area
- **Then** a "Register" button is centered below the form fields
- **And** the button has a coral/salmon background color (~`#E8735A`)
- **And** the button text is white
- **And** the button has pill-shaped rounded corners

### Scenario: White section below card
- **Given** the card is visible
- **When** the user scrolls or looks below the card
- **Then** a plain white section fills the area below the card

### Scenario: Form submission with valid data
- **Given** the form is displayed
- **When** the user fills in Name, Email, Password, and Confirm Password
- **And** clicks the Register button
- **Then** the form attempts submission (no client-side validation in original)

### Scenario: Form handles empty submission
- **Given** the form is displayed with empty fields
- **When** the user clicks the Register button
- **Then** the form attempts submission (original has no client-side validation)

## Verification checklist

- [ ] Page background is solid steel blue (`~#4A7FB5`)
- [ ] Card is centered vertically and horizontally in viewport
- [ ] Card has rounded corners (~12–16px)
- [ ] Card has dark photo overlay background (concert/crowd image via placeholder)
- [ ] "Registration Form" heading in white bold sans-serif, centered
- [ ] Short white divider line below heading
- [ ] Four inputs in 2×2 grid: Name, Email, Password, Confirm Password
- [ ] Inputs have pill-shaped rounded corners (~25–30px radius)
- [ ] Inputs have semi-transparent dark background
- [ ] Inputs show white/light placeholder text
- [ ] "Register" button centered below fields
- [ ] Button has coral/salmon background (`~#E8735A`)
- [ ] Button has white text and pill-shaped corners
- [ ] White section fills area below card
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md + PR)
- [ ] Tests pass with 100% coverage
