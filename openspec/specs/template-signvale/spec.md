# Template: SignVale (Signup Form / Registration)

## Purpose

Recreation of ColorLib **Signup Form 13** (`https://colorlib.com/wp/template/signup-form-13/`).
Preview: `https://preview.colorlib.com/theme/bootstrap/signup-form-13/` (live — tokens extracted from CSS).

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

This is a split-screen signup page: a sage-green left panel with a soccer ball icon, heading, "Already have an account?" text, and a white outlined "Sign In" button; and a white right panel with a "Hello! Please signup to continue" greeting, four underline-style input fields (Full Name, Email Address, Password, Confirm Password), a full-width sage-green pill-shaped "Sign Up" button, a social login section with circular Facebook and Twitter icons, and a "Sign In" link at the bottom. The entire card has a subtle drop shadow and rounded corners, sitting on a light gray-blue background with a centered "Sign Up #03" title above.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token                     | Value                          | Notes                                          |
| ------------------------- | ------------------------------ | ---------------------------------------------- |
| Body font                 | `Roboto`, sans-serif           | Weights 400, 500, 700                          |
| Heading font              | `Roboto`, sans-serif, 700w     | Bold for headings                              |
| Page body background      | `#f8f9fd`                      | Light gray-blue behind the card                |
| Card background           | `#ffffff`                      | White card for the form                        |
| Card box-shadow           | `0px 10px 34px -15px rgba(0,0,0,0.24)` | Subtle drop shadow on wrap              |
| Card border-radius        | `5px`                          | Slightly rounded corners                       |
| Page title color          | `#000000`                      | Black, "Sign Up #03" above card                |
| Left panel background     | `#7fa998`                      | Sage green — brand accent                      |
| Left panel text color     | `#ffffff`                      | White text on green panel                      |
| Left panel heading weight | `700`                          | Bold white heading                             |
| Left panel icon size      | `80px`                         | Large icon (soccer ball SVG)                   |
| Right panel background    | `#ffffff`                      | White form panel                               |
| Heading "Hello!" color    | `#000000`                      | Black, bold                                    |
| Subtitle color            | `rgba(0,0,0,0.4)`             | Faded black for "Please signup to continue"    |
| Label color               | `rgba(0,0,0,0.3)`             | Light gray labels                              |
| Label font-size           | `13px`                         | Small labels                                   |
| Input border              | `1px solid rgba(0,0,0,0.1)`   | Underline-only (bottom border)                 |
| Input background          | `#ffffff`                      | White input background                         |
| Input text color          | `#000000`                      | Black input text                               |
| Input placeholder color   | `rgba(0,0,0,0.3)`             | Light gray placeholder                         |
| Input focus border color  | `#7fa998`                      | Sage green underline on focus                  |
| Primary button background | `#7fa998`                      | Sage green — "Sign Up" button                  |
| Primary button text       | `#ffffff`                      | White text                                     |
| Primary button border     | `1px solid #7fa998`            | Matching sage green border                     |
| Primary button border-radius | `40px`                       | Pill / rounded-full shape                      |
| Primary button box-shadow | `0px 10px 19px -16px rgba(0,0,0,0.29)` | Subtle shadow                        |
| Primary button hover bg   | `transparent`                  | Transparent on hover                           |
| Primary button hover text | `#7fa998`                      | Sage green text on hover                       |
| Primary button hover border | `1px solid #7fa998`           | Sage green border on hover                     |
| Submit button width       | `100%`                         | Full width                                     |
| Sign In button bg         | `#ffffff`                      | White background                               |
| Sign In button border     | `1px solid #fff`               | White border                                   |
| Sign In button text       | `#fff`                         | White text                                     |
| Sign In button hover bg   | `transparent`                  | Transparent on hover                           |
| Sign In button hover text | `#fff`                         | White text on hover                            |
| Sign In button outline    | `btn-white btn-outline-white`  | Outlined white variant                         |
| Social icon size          | `40px` diameter                | Circular social login icons                    |
| Social icon border-radius | `50%`                          | Perfect circle                                 |
| Facebook icon background  | `#44629b`                      | Facebook brand blue                            |
| Twitter icon background   | `#1dade9`                      | Twitter brand light blue                       |
| Social icon text color    | `#ffffff`                      | White icon glyphs                              |
| Social icon hover bg      | `#7fa998`                      | Sage green on hover                            |
| Social icon hover text    | `#ffffff`                      | White icon on hover                            |
| Divider text color        | `gray`                         | For "or" and "Signup with"                     |
| Sign In link color        | `#7fa998`                      | Sage green link                                |
| Body font-size            | `16px`                         | Standard base size                             |
| Body line-height          | `1.8`                          | Generous line spacing                          |

## Visual Design

From the screenshot (`https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-13.jpg`):

A split-screen registration card:

- **Page background:** Light gray-blue (#f8f9fd) filling the entire viewport.
- **Page title:** "Sign Up #03" displayed above the card in black, centered horizontally.
- **Card:** A wide container (max ~10 cols / 830px) with border-radius 5px and a subtle box shadow, split into two equal halves on desktop.
- **Left panel (text-wrap):** Sage green (#7fa998) background, centered content:
  1. Soccer ball icon (80px, white SVG)
  2. "Soccer Ball" heading — bold, white, 700 weight
  3. "Already have an account?" text — white
  4. "Sign In" button — white pill-shaped outlined button
- **Right panel (login-wrap):** White background, padded form area:
  1. "Hello!" heading — bold, black
  2. "Please signup to continue" subtitle — faded black, smaller, block display
  3. Full Name field — label + underline input, placeholder "John Doe"
  4. Email Address field — label + underline input, placeholder "johndoe@gmail.com"
  5. Password field — label + password input, placeholder "Password"
  6. Confirm Password field — label + password input, placeholder "Confirm Password"
  7. "Sign Up" button — full-width, sage green pill-shaped button with shadow
  8. "or" divider text — gray
  9. "Signup with" text — gray
  10. Social icons — Facebook (dark blue circle) and Twitter (light blue circle), centered
  11. "I'm already a member! Sign In" text — gray with sage green link
- **Footer:** Minimal — site name + Component Dock link (replacing any ColorLib attribution)
- **Overall feel:** Clean split-screen design. The sage green gives an earthy, trustworthy feel. The left panel provides branding context while the right panel focuses on the signup flow. Underline-only inputs and pill-shaped buttons create a modern, lightweight aesthetic.

## Requirements

### Requirement: Page layout with split-screen card

The page SHALL display a centered split-screen card on a light gray-blue background, with a page title above the card. On desktop (>=992px) the card is split into two equal halves; on mobile the halves stack vertically.

#### Scenario: Page renders split-screen card
- **GIVEN** the user visits the signup page
- **WHEN** the page loads
- **THEN** a card is centered horizontally on a light gray-blue (#f8f9fd) background
- **AND** the card has rounded corners (5px) and a subtle box shadow
- **AND** on desktop the card is split into two equal-width panels

#### Scenario: Page title displayed above card
- **GIVEN** the split-screen card is visible
- **WHEN** the user views the page
- **THEN** a "Sign Up #03" title is displayed above the card in black, centered

### Requirement: Left panel with branding

The left panel SHALL display a sage green background with an icon, heading, account prompt, and sign-in button.

#### Scenario: Left panel content
- **GIVEN** the split-screen card is visible on desktop
- **WHEN** the user views the left panel
- **THEN** a sage green (#7fa998) background fills the left half
- **AND** an icon (soccer ball or placeholder) is displayed centered
- **AND** a heading ("Soccer Ball" or contextual equivalent) is displayed in bold white
- **AND** "Already have an account?" text is displayed in white below the heading
- **AND** a "Sign In" button is displayed as a white outlined pill-shaped button

#### Scenario: Left panel stacks on mobile
- **GIVEN** the user views the page on a mobile viewport (<992px)
- **WHEN** the card renders
- **THEN** the left panel stacks above the right panel at full width

### Requirement: Form fields with underline style

The form SHALL contain four input fields: Full Name, Email Address, Password, and Confirm Password. Each field SHALL use an underline-only border style (bottom border, no full box border).

#### Scenario: Full Name field
- **GIVEN** the signup form is displayed
- **WHEN** the user views the form
- **THEN** a "Full Name" label is displayed in light gray (13px)
- **AND** a text input with bottom border styling is present
- **AND** the placeholder text is "John Doe"

#### Scenario: Email Address field
- **GIVEN** the signup form is displayed
- **WHEN** the user views the form
- **THEN** an "Email Address" label is displayed in light gray
- **AND** a text input with bottom border styling is present
- **AND** the placeholder text is "johndoe@gmail.com"

#### Scenario: Password field
- **GIVEN** the signup form is displayed
- **WHEN** the user views the form
- **THEN** a "Password" label is displayed in light gray
- **AND** a password input with bottom border styling is present
- **AND** the placeholder text is "Password"

#### Scenario: Confirm Password field
- **GIVEN** the signup form is displayed
- **WHEN** the user views the form
- **THEN** a "Confirm Password" label is displayed in light gray
- **AND** a password input with bottom border styling is present
- **AND** the placeholder text is "Confirm Password"

#### Scenario: Input focus state
- **GIVEN** the signup form is displayed
- **WHEN** the user focuses on any input field
- **THEN** the bottom border color changes to sage green (#7fa998)
- **AND** no box shadow or outline appears

### Requirement: Sign Up button

The form SHALL display a full-width sage-green pill-shaped "Sign Up" button below the input fields.

#### Scenario: Button displayed
- **GIVEN** the signup form is displayed
- **WHEN** the user views below the input fields
- **THEN** a full-width button with text "Sign Up" is visible
- **AND** the button has a sage green (#7fa998) background
- **AND** the button text is white
- **AND** the button has a pill shape (border-radius 40px)
- **AND** the button has a subtle box shadow

#### Scenario: Button hover state
- **GIVEN** the Sign Up button is visible
- **WHEN** the user hovers over the button
- **THEN** the button background becomes transparent
- **AND** the button text and border become sage green (#7fa998)

### Requirement: Social login section

The form SHALL display a social login section below the Sign Up button, with a divider text and circular social icons.

#### Scenario: Divider and social text
- **GIVEN** the signup form is displayed
- **WHEN** the user views below the Sign Up button
- **THEN** an "or" text divider is displayed in gray
- **AND** a "Signup with" text is displayed below the divider in gray

#### Scenario: Social login icons
- **GIVEN** the social login section is visible
- **WHEN** the user views the social icons
- **THEN** a Facebook icon (dark blue #44629b circle) is displayed
- **AND** a Twitter icon (light blue #1dade9 circle) is displayed
- **AND** the icons are 40px circular and centered side by side

#### Scenario: Social icon hover state
- **GIVEN** the social icons are visible
- **WHEN** the user hovers over a social icon
- **THEN** the icon background changes to sage green (#7fa998)
- **AND** the icon text remains white

### Requirement: Sign In link

The right panel SHALL display a "Sign In" link at the bottom for existing members.

#### Scenario: Sign In link present
- **GIVEN** the signup card is visible
- **WHEN** the user views the bottom of the right panel
- **THEN** the text "I'm already a member!" is displayed in gray
- **AND** a "Sign In" link is displayed in sage green (#7fa998)

### Requirement: Responsive layout

The template SHALL be responsive and work on both desktop and mobile viewports.

#### Scenario: Desktop layout
- **GIVEN** the user views the page on a desktop viewport (>=992px)
- **WHEN** the page loads
- **THEN** the card is centered with two equal-width panels side by side
- **AND** the overall container max-width is approximately 830px

#### Scenario: Mobile layout
- **GIVEN** the user views the page on a mobile viewport (<992px)
- **WHEN** the page loads
- **THEN** the panels stack vertically at full width
- **AND** all content remains accessible and readable

## Verification Checklist

- [ ] Page renders centered split-screen card on light gray-blue (#f8f9fd) background
- [ ] "Sign Up #03" title displayed above card in black
- [ ] Left panel has sage green (#7fa998) background
- [ ] Left panel displays icon, heading, "Already have an account?" text, and "Sign In" button
- [ ] Right panel has white background with "Hello!" heading and subtitle
- [ ] Four underline-style input fields present (Full Name, Email, Password, Confirm Password)
- [ ] Input focus border changes to sage green
- [ ] Full-width sage-green pill-shaped "Sign Up" button present
- [ ] Button hover transitions to transparent with sage green text
- [ ] "or" divider and "Signup with" text present
- [ ] Facebook (#44629b) and Twitter (#1dade9) circular social icons present
- [ ] Social icons hover to sage green
- [ ] "I'm already a member! Sign In" link present at bottom of right panel
- [ ] Left panel stacks above right panel on mobile
- [ ] Responsive layout works on mobile and desktop
- [ ] No ColorLib references in app code (provenance in spec only)
