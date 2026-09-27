# Template: Formlane (Registration Form)

## Purpose

Recreation of **Colorlib Regform 26** — a clean, creative, single-page account registration form template.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-26/
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-regform-26/ (404 at time of prep; design extracted from downloaded zip archive)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-26.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from zip CSS)

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand-bg` | `#accffe` | Full-page wrapper background (light blue) |
| `--brand-primary` | `#99ccff` | Button background, input focus border |
| `--form-bg` | `#ffffff` | Form card background |
| `--text-heading` | `#333333` | Heading, icon color |
| `--text-body` | `#999999` | Body text color |
| `--text-input` | `#666666` | Input text color |
| `--border-input` | `#e6e6e6` | Input bottom border (inactive) |
| `--border-focus` | `#accffe` | Input bottom border (focused) |
| `--btn-hover-overlay` | `rgba(52, 152, 253, 0.25)` | Button hover sweep animation |

### Typography
| Token | Value |
|-------|-------|
| Font family (regular) | `Mulish` (Google Fonts — original uses "Muli" woff2) |
| Font family (semibold) | `Mulish` weight 600 |
| Body size | 14px |
| Heading size | 25px, uppercase, letter-spacing 3px |
| Input size | 16px (semibold) |
| Button size | 15px, uppercase, letter-spacing 2px |

### Layout
| Token | Value |
|-------|-------|
| Wrapper | `min-height: 100vh`, flex centered |
| Form card | 435px wide, white, `box-shadow: 0 0 10px rgba(0,0,0,0.2)` |
| Form padding | 77px top, 61px sides, 66px bottom |
| Input height | 38px, border-bottom only |
| Button height | 49px, full-width |
| Decorative images | Absolute positioned, bottom-left + bottom-right of card |

### Breakpoints
| Breakpoint | Behavior |
|------------|----------|
| > 991px | Full form (435px) + decorative images |
| 768–991px | Form 400px, shifted right 4% |
| < 768px | Full-width form, images hidden, no shadow/bg |

### Button Animation
- Full-width blue button with text "REGISTER"
- On hover: two overlay layers sweep in from left with 0.2s delay between them
- Transition timing: `cubic-bezier(0.75, 0, 0.125, 1)`

## Structure (section order)

1. **Full-page wrapper** — light blue (`#accffe`) background, flex-centered
2. **Form card** — white card with shadow, centered
   - **Heading** — "New Account?" (uppercase, letter-spaced)
   - **Username field** — text input with user icon
   - **Phone Number field** — text input with phone icon
   - **Email field** — text input with envelope icon
   - **Password field** — password input with lock icon
   - **Confirm Password field** — password input with lock icon
   - **Register button** — full-width, blue, uppercase, hover animation
3. **Decorative images** — two absolute-positioned images flanking the card (use placeholder images)

## Gherkin Requirements

### Feature: Registration Form Page

  Scenario: Page renders with full-page blue background
    Given the user navigates to the Formlane page
    Then the page background is light blue (#accffe)
    And a centered white form card is visible

  Scenario: Heading is displayed
    Given the form card is visible
    Then the heading reads "New Account?"
    And the heading is uppercase with letter spacing

  Scenario: Username field renders with icon
    Given the form card is visible
    Then a text input with placeholder "Username" is visible
    And a user icon is displayed to the left of the input

  Scenario: Phone Number field renders with icon
    Given the form card is visible
    Then a text input with placeholder "Phone Number" is visible
    And a phone icon is displayed to the left of the input

  Scenario: Email field renders with icon
    Given the form card is visible
    Then a text input with placeholder "Mail" is visible
    And an envelope icon is displayed to the left of the input

  Scenario: Password field renders with icon
    Given the form card is visible
    Then a password input with placeholder "Password" is visible
    And a lock icon is displayed to the left of the input

  Scenario: Confirm Password field renders with icon
    Given the form card is visible
    Then a password input with placeholder "Confirm Password" is visible
    And a lock icon is displayed to the left of the input

  Scenario: Register button renders
    Given the form card is visible
    Then a full-width button with text "REGISTER" is visible
    And the button has a blue background

  Scenario: Register button hover animation
    Given the Register button is visible
    When the user hovers over the button
    Then a sweep animation plays from left to right

  Scenario: Input focus styling
    Given the Username field is visible
    When the user focuses the Username field
    Then the input bottom border changes to blue (#accffe)

  Scenario: Decorative images visible on desktop
    Given the viewport width is greater than 991px
    Then two decorative images are visible flanking the form card

  Scenario: Mobile responsive — images hidden
    Given the viewport width is less than 768px
    Then the decorative images are hidden
    And the form card is full-width
    And the form card has no box shadow

  Scenario: Mobile responsive — tablet layout
    Given the viewport width is between 768px and 991px
    Then the form card width is 400px
    And the form card is shifted slightly right

## Verification Checklist

- [ ] Full-page light blue background renders
- [ ] White form card centered with shadow
- [ ] "New Account?" heading (uppercase, letter-spaced, semibold)
- [ ] 5 input fields with correct placeholders and icons
- [ ] Input fields have bottom-border-only styling
- [ ] Input focus changes border to blue
- [ ] Register button full-width, blue, uppercase
- [ ] Button hover sweep animation works
- [ ] Decorative images positioned on desktop
- [ ] Responsive: tablet (400px card, shifted)
- [ ] Responsive: mobile (full-width, no images, no shadow)
- [ ] Mulish (Google Fonts) loaded
- [ ] Uses `packages/ui` components where possible (Button, etc.)
- [ ] Footer links to Component Dock
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
