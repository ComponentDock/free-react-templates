# Portalink — Centered Card Login Form (ColorLib Login Form 15)

## Overview

A centered white login card on a light gray background with a hero image
spanning the top of the card, social login icons, username/password fields
with password visibility toggle, a green "Sign In" button, remember-me
checkbox, forgot-password link, and sign-up CTA. Recreates
[ColorLib Login Form 15](https://colorlib.com/wp/template/login-form-15/).

## Design Tokens

- **Background**: `#f5f5f5` (light gray)
- **Card**: `#ffffff` (white)
- **Primary accent**: `#4ecdc4` (teal/mint green) — button, links, checkbox, focus ring
- **Primary hover**: `#3dbdb5` (darker teal)
- **Text ink**: `#333333` (dark gray)
- **Caption text**: `#999999` (medium gray)
- **Input border**: `rgba(0, 0, 0, 0.1)`
- **Social icon border**: `rgba(0, 0, 0, 0.1)`
- **Social icon text**: `#aaaaaa`
- **Shadow**: `0px 0px 45px rgba(0, 0, 0, 0.08)`
- **Font**: Poppins (Google Fonts)
- **Button radius**: `25px` (rounded pill)

## Sections (in order)

1. **Hero Image** — full-width image at top of card (tropical beach via `picsum.photos/seed/portalink-hero/600/250`)
2. **Form Area** — below the image inside the white card:
   - "Sign In" heading (left-aligned) + social icons (Facebook, Twitter — right-aligned, same row)
   - Username input (placeholder: "Username")
   - Password input (placeholder: "Password" + eye icon toggle for visibility)
   - "Sign In" button (full-width, green, rounded pill)
   - "Remember Me" checkbox (checked by default, green accent) — left side
   - "Forgot Password" link — right side
   - "Not a member? Sign Up" — centered, bottom

## Scenarios

### G1: App renders the login card

Given the user opens the page
Then the "Sign In" heading is visible

### G2: Username and password fields render

Given the user opens the page
Then a username input with placeholder "Username" is present
And a password input with placeholder "Password" is present

### G3: Password visibility toggle

Given the user views the password field
When they click the eye icon
Then the password field type changes from "password" to "text"
When they click the eye icon again
Then the password field type changes back to "password"

### G4: Remember Me checkbox

Given the user opens the page
Then the "Remember Me" checkbox is checked by default
When the user clicks the checkbox
Then the checkbox becomes unchecked

### G5: Form submission

Given the user fills in username and password
When they click "Sign In"
Then the form submits without error

### G6: Social login icons render

Given the user opens the page
Then a Facebook icon link is visible with aria-label "Login with Facebook"
And a Twitter icon link is visible with aria-label "Login with Twitter"

### G7: Footer link

Given the user opens the page
Then a "More templates at Component Dock" link is visible
And it links to https://www.componentdock.com/
And it opens in a new tab

### G8: Hero image

Given the user opens the page
Then a decorative hero image is visible at the top of the card

### G9: Sign Up CTA

Given the user opens the page
Then "Not a member?" text is visible
And a "Sign Up" link is present

### G10: Forgot Password link

Given the user opens the page
Then a "Forgot Password" link is visible
