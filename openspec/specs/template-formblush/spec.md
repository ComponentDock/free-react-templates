# Template: FormBlush (Sign Up Form)

## Purpose

Recreation of ColorLib **Regform 24** — a free sign-up form template with a split-screen layout featuring a decorative photo on the left and a pink form panel on the right.

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

## Gherkin requirements

```gherkin
Feature: FormBlush sign-up form

  Background:
    Given the page is loaded at the root route

  Scenario: Full-page split layout renders
    Then a full-viewport layout is visible
    And the layout has a photo panel and a form panel

  Scenario: Photo panel renders on desktop
    Then the photo panel displays a decorative image
    And the image covers the full panel height

  Scenario: Form panel has pink background
    Then the form panel has a pink background

  Scenario: Sign Up heading renders
    Then the heading reads "Sign Up"
    And the heading uses a cursive font style
    And a wavy underline decoration appears below the heading

  Scenario: Username input renders
    Then there is a username input with label "Username:"
    And the input has a white background

  Scenario: Email input renders
    Then there is an email input with label "E-mail:"
    And the input has a white background

  Scenario: Password input renders
    Then there is a password input with label "Password:"
    And the input has a white background

  Scenario: Submit button renders
    Then there is a "Create My Account" button
    And the button is pill-shaped (fully rounded)
    And the button has a white background with pink text
    And the button is full width

  Scenario: Social platforms section renders
    Then text "Sign up with social platforms" is visible
    And there are four social media icon links
    And the social icons are Facebook, Instagram, Twitter, and Tumblr
    And each social icon is in a pink-bordered circle

  Scenario: Social links open in new tabs
    When the user clicks a social media icon
    Then the link opens in a new tab

  Scenario: Form is interactive
    When the user types "johndoe" in the username input
    Then the username input shows "johndoe"
    When the user types "john@example.com" in the email input
    Then the email input shows "john@example.com"
    When the user types "secret123" in the password input
    Then the password input shows "secret123"

  Scenario: Form submits without error
    When the user clicks the "Create My Account" button
    Then the form submits without crashing

  Scenario: Footer links to Component Dock
    Then a footer link points to "https://www.componentdock.com/"
    And the link text mentions "Component Dock"
```

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
