# Template: Rosie (Registration Form — Beauty / Cosmetics)

## Purpose

Rosie is a single-page SIGN-UP FORM in the free-react-templates monorepo.
It is a React recreation of the ColorLib "Colorlib Reg Form V20" free template
(source: https://colorlib.com/wp/template/colorlib-regform-20/), built under a
DIFFERENT name (**Rosie**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a single-page registration form with a feminine beauty /
cosmetics aesthetic: a full-viewport soft pink background, a centered white card
with a split layout (decorative image collage on the left, sign-up form on the
right), elegant serif title, three pill-shaped input fields, a terms checkbox,
and a rounded pink submit button.

**Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-20/
(status: 404 — preview page unreachable at prep time; design captured from
the ColorLib screenshot at
https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-20.jpg)

**Source URL:** https://colorlib.com/wp/template/colorlib-regform-20/

## Design Tokens

Extracted from the screenshot and the ColorLib template page:

| Token             | Value / Description                                                  |
| ----------------- | -------------------------------------------------------------------- |
| **Background**    | Full-viewport soft pink: `#f5cac3` (approx — salmon/blush pink)      |
| **Card background** | `#ffffff` (white)                                                   |
| **Card shadow**   | Subtle drop shadow, ~`0 4px 20px rgba(0,0,0,0.08)`                  |
| **Card radius**   | ~12px rounded corners                                                |
| **Brand pink**    | `#e88e8e` (coral pink — button, checkbox accent, "Login" link)       |
| **Heading color** | `#e88e8e` (same coral pink — "Sign Up" title)                        |
| **Input bg**      | `#f5f5f5` (very light gray)                                         |
| **Input radius**  | ~25px (pill shape)                                                   |
| **Input border**  | None (background-only distinction)                                   |
| **Input padding** | ~14px horizontal, ~12px vertical                                     |
| **Placeholder text** | `#999999` (medium gray, uppercase)                                |
| **Dot bullets**   | Pink circles (~10px) preceding each field, `#e88e8e`                 |
| **Checkbox accent** | `#e88e8e` pink                                                    |
| **Terms link**    | `#e88e8e` coral pink                                                 |
| **Login link**    | `#e88e8e` coral pink                                                 |
| **Button bg**     | `#e88e8e` coral pink                                                 |
| **Button text**   | `#ffffff` white                                                      |
| **Button radius** | ~25px (pill shape)                                                   |
| **Button padding** | ~14px 36px                                                          |
| **Body text**     | `#333333` dark gray                                                  |
| **Font — heading** | Elegant serif/script — use Google Fonts "Playfair Display" or similar |
| **Font — body**   | Sans-serif — use "Poppins" (matches the clean form aesthetic)         |

## Layout Structure

Single centered white card on a full-viewport pink background. The card is a
two-column split:

```
+---------------------------------------------------------------+
|                          [pink background]                     |
|                                                               |
|    +---------------------+  +-----------------------------+   |
|    |                     |  |                             |   |
|    |   Image Collage     |  |  "Sign Up" (serif, pink)   |   |
|    |   (beauty/fashion   |  |                             |   |
|    |    photos with      |  |  • NAME                     |   |
|    |    pink square      |  |  • E-MAIL                   |   |
|    |    frame overlays)  |  |  • PASSWORD                 |   |
|    |                     |  |                             |   |
|    |                     |  |  [x] I agree all statement  |   |
|    |                     |  |      in Terms & Conditions  |   |
|    |                     |  |                             |   |
|    |                     |  |  [SIGN UP]  Already Have    |   |
|    |                     |  |              account? Login |   |
|    +---------------------+  +-----------------------------+   |
|                                                               |
+---------------------------------------------------------------+
```

## Requirements

### Feature: Rosie template behaviour

#### Scenario: Page renders with pink background

- **GIVEN** the user navigates to the Rosie page
- **THEN** the full-viewport background is soft pink (#f5cac3 approx)
- **AND** a centered white card is visible

#### Scenario: Card displays two-column split layout

- **GIVEN** the page has loaded
- **THEN** the left side of the card shows decorative images
- **AND** the right side shows the sign-up form

#### Scenario: Heading text

- **GIVEN** the page has loaded
- **THEN** the text "Sign Up" is displayed in an elegant serif font
- **AND** the heading color is coral pink (#e88e8e)

#### Scenario: Three input fields rendered

- **GIVEN** the page has loaded
- **THEN** a NAME input field is visible with a pink dot prefix
- **AND** an E-MAIL input field is visible with a pink dot prefix
- **AND** a PASSWORD input field is visible with a pink dot prefix

#### Scenario: Input field styling

- **GIVEN** any input field is visible
- **THEN** the input has a light gray background (#f5f5f5)
- **AND** the input has pill-shaped rounded corners (~25px radius)
- **AND** the placeholder text is uppercase gray (#999)

#### Scenario: Input focus interaction

- **GIVEN** the user clicks on an input field
- **THEN** the field receives focus (browser default or focus ring)

#### Scenario: Terms and conditions checkbox

- **GIVEN** the page has loaded
- **THEN** a checkbox is visible below the password field
- **AND** the label reads "I agree all statement in Terms & Conditions"
- **AND** "Terms & Conditions" is a coral pink link

#### Scenario: Sign Up button rendered

- **GIVEN** the page has loaded
- **THEN** a "SIGN UP" button is visible
- **AND** the button has a coral pink background (#e88e8e)
- **AND** the button text is white
- **AND** the button has pill-shaped rounded corners

#### Scenario: Login link

- **GIVEN** the page has loaded
- **THEN** text "Already Have account? Login" is visible next to the button
- **AND** "Login" is a coral pink link

#### Scenario: Decorative image collage on left

- **GIVEN** the page has loaded
- **THEN** the left column displays overlapping decorative images
- **AND** pink square frame overlays are visible among the images

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device (< 768px)
- **THEN** the card stacks vertically (image above form)
- **AND** the form remains centered and usable

#### Scenario: Form validation — empty fields

- **GIVEN** the user clicks "SIGN UP" without filling any fields
- **THEN** the form does not submit (browser native validation)

#### Scenario: Component Dock footer

- **GIVEN** the page has loaded
- **THEN** a footer link to "https://www.componentdock.com/" is present
- **AND** the link text references "Component Dock"

## Verification checklist

- [ ] Pink full-viewport background renders
- [ ] White card centered with subtle shadow
- [ ] Two-column split: image collage left, form right
- [ ] "Sign Up" heading in serif font, coral pink
- [ ] Three pill-shaped inputs with pink dot prefixes
- [ ] Uppercase gray placeholders
- [ ] Terms checkbox with pink accent and linked text
- [ ] Coral pink pill-shaped "SIGN UP" button
- [ ] "Already Have account? Login" link in coral pink
- [ ] Decorative images on left side (placeholder images)
- [ ] Responsive: stacks on mobile
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] No copied assets (images, fonts, CSS files)
