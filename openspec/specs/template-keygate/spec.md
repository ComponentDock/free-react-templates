---
name: keygate
description: Clean white-card login form with icon inputs, green accent, and social icons
template: colorlib-login-form-13
source: https://preview.colorlib.com/theme/bootstrap/login-form-13/
---

## Purpose

Recreation of ColorLib Login Form 13 (https://colorlib.com/wp/template/login-form-13/) — a clean white-card login form template with icon inputs, green accent, and social icons in the header. The new name is "Keygate".

### Design Tokens

- Font: Lato (300, 400, 700) — Google Fonts
- Page background: #f8f9fd (light blue-gray)
- Card background: #ffffff, border-radius 5px, shadow 0px 10px 34px -15px rgba(0,0,0,0.24)
- Brand/accent: #a0c334 (green — buttons, icons, links, checkbox)
- Button: bg #a0c334, text #fff, hover: transparent bg + #a0c334 text/border
- Input: height 48px, bg #fff, border 1px solid rgba(0,0,0,0.1), border-radius 5px
- Input icon: bg #a0c334, icon color #fff, width 48px, border-radius 5px 0 0 5px
- Social icons: transparent bg, border 1px solid rgba(0,0,0,0.05), color #999999, hover #a0c334 bg + #fff text, circular
- Heading color: #000
- Body text: #212529
- Muted text: #999999
- Font weight 300 for Sign In heading

## Requirements

### Requirement: Page heading

The page SHALL render a centered heading "Login #03" in black at 28px.

#### Scenario: Page heading renders

- **WHEN** the page loads
- **THEN** a heading "Login #03" is visible, centered on the page

### Requirement: Login card with white background

The page SHALL render a centered white card with rounded corners and drop shadow.

#### Scenario: Card renders

- **WHEN** the page loads
- **THEN** a white card with shadow is visible centered on the page

### Requirement: Sign In heading and social icons in card header

The card SHALL display a "Sign In" heading on the left and Facebook/Twitter social icons on the right in the header area.

#### Scenario: Sign In heading

- **WHEN** the page loads
- **THEN** a "Sign In" heading is visible in the card header

#### Scenario: Social icons in header

- **WHEN** the page loads
- **THEN** Facebook and Twitter icons are visible in the card header right side
- **AND** each icon has a circular shape with subtle border

#### Scenario: Social icon hover

- **WHEN** the user hovers over a social icon
- **THEN** the background becomes green (#a0c334) and the icon color becomes white

### Requirement: Username input with icon overlay

The form SHALL render a username input with a green icon circle overlaid on the left.

#### Scenario: Username input renders

- **WHEN** the page loads
- **THEN** an input with placeholder "Username" is visible
- **AND** a user icon is displayed on the left in a green circle

### Requirement: Password input with icon overlay

The form SHALL render a password input with a green lock icon circle overlaid on the left.

#### Scenario: Password input renders

- **WHEN** the page loads
- **THEN** an input with placeholder "Password" is visible
- **AND** the input type is "password"
- **AND** a lock icon is displayed on the left in a green circle

### Requirement: Save Password checkbox

The form SHALL render a "Save Password" checkbox on the left side, checked by default, with a green checkmark when checked.

#### Scenario: Checkbox renders checked by default

- **WHEN** the page loads
- **THEN** a "Save Password" checkbox is visible and is checked

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the checkbox
- **THEN** the checkbox becomes unchecked

### Requirement: Login button

The form SHALL render a "Login" button on the right side with green background and white text.

#### Scenario: Login button renders

- **WHEN** the page loads
- **THEN** a "Login" button is visible with green (#a0c334) background

#### Scenario: Login button hover

- **WHEN** the user hovers over the Login button
- **THEN** the background becomes transparent and the text/border become green

### Requirement: Sign Up and Forgot Password links

The form SHALL display "Don't have an account? Sign Up" and "Forgot Password" links in green.

#### Scenario: Sign Up link renders

- **WHEN** the page loads
- **THEN** a "Don't have an account? Sign Up" text is visible with "Sign Up" in green

#### Scenario: Forgot Password link renders

- **WHEN** the page loads
- **THEN** a "Forgot Password" link is visible in green

### Requirement: Footer links to Component Dock

The page SHALL render a footer with a link to https://www.componentdock.com/.

#### Scenario: Footer link renders

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is visible in the footer
- **AND** the link opens in a new tab with rel="noopener noreferrer"

## Verification Checklist

- [ ] White full-page background with Lato font
- [ ] Page heading "Login #03" centered, black, 28px
- [ ] "Sign In" subheading, light weight (300)
- [ ] Social icons (Facebook, Twitter) in card header right
- [ ] Username + Password inputs with green icon overlays
- [ ] "Save Password" checkbox, default checked
- [ ] Login button: green (#a0c334), white text, right-aligned
- [ ] Login button hover: transparent bg, green text/border
- [ ] "Don't have an account? Sign Up" + "Forgot Password" links
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains keygate.free.componentdock.com
- [ ] package.json homepage is https://keygate.free.componentdock.com
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Builds without errors
