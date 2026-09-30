# Signvault — Design Notes & Replication Research

**Source:** ColorLib Signup Form 15
**Preview URL:** https://preview.colorlib.com/theme/signup-form-15/ (404 at prep time)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-15.jpg
**New Name:** signvault
**Spec:** openspec/specs/template-signvault/spec.md

---

## Replication Reference

### Preview Status

The live preview at `https://preview.colorlib.com/theme/signup-form-15/` returned
404 Not Found at the time of prep. Design analysis was derived entirely from the
TEMPLATES.md screenshot (`signup-form-15.jpg`).

### Screenshot Analysis

The screenshot shows a clean, minimal centered-card signup form:

**Page Layout:**
- Full-page light gray background (`#f5f5f5`)
- Single white card centered vertically and horizontally
- Card is approximately 450px wide, ~500px tall

**Card Styling:**
- White background (`#ffffff`)
- Rounded corners (~16px border-radius)
- Subtle drop shadow
- Internal padding (~40px on all sides)

**Heading:**
- "Sign Up" text, left-aligned inside the card
- Dark color (`#333`), medium weight
- Font: Poppins (Google Fonts)

**Form Fields (4):**
1. Full Name — text input, placeholder "John Doe"
2. Email Address — email input, placeholder "johndoe@gmail.com"
3. Password — password input, placeholder "Password"
4. Confirm Password — password input, placeholder "Confirm Password"

Each field has:
- Rounded borders (~8px radius)
- Light gray border (`#e0e0e0`)
- Floating label that appears above the input on focus/fill
- Labels in muted gray (`#999`)
- White input background

**Submit Button:**
- Circular (56×56px) red button (`#e74c3c`)
- Contains a white send/arrow icon (paper-plane style)
- Positioned to overlap the bottom-right edge of the card
- Red shadow on hover (`rgba(231,76,60,0.4)`)

**Wave Decoration:**
- Subtle gray wave/swoosh at the bottom portion of the card
- Very light gray tones (`#f0f0f0` → transparent)
- Adds visual interest without competing with the form

**Footer Area:**
- "Already have an account?" in muted dark text
- "Sign In" as a red accent link (`#e74c3c`), underlined
- Positioned below the card

**No social login buttons** — this is a simpler form compared to other signup templates.

---

## Section Order (for implementation)

1. App.tsx — page shell with gray background, centered flex container
2. SignupCard.tsx — white card container with shadow
3. FormHeading.tsx — "Sign Up" heading
4. FloatingInput.tsx — reusable floating-label input component (4 instances)
5. SubmitButton.tsx — circular red floating button with icon
6. WaveDecoration.tsx — SVG or CSS wave at card bottom
7. FooterLink.tsx — "Already have an account? Sign In"
8. index.css — Tailwind v4 + theme tokens (brand-red, etc.)

## Fidelity Notes

- **Floating labels:** Must animate smoothly on focus/fill — labels transition
  from placeholder position to above the input. Use CSS transitions or
  Tailwind peer utilities.
- **Circular button:** The submit button is NOT a standard rectangular button —
  it's a circle that visually extends beyond the card boundary. Use
  `absolute` positioning or negative margin to achieve the overlap effect.
- **Wave decoration:** The subtle wave at the card bottom can be an inline SVG
  or a CSS pseudo-element. Keep it very light — it's decorative, not functional.
- **No social login:** Unlike many ColorLib signup forms, this one has NO social
  login buttons. Don't add them.
- **Input placeholders:** Match the exact placeholder text from the screenshot.
- **Color consistency:** The brand red (`#e74c3c`) is used for: submit button,
  Sign In link, input focus border, and button hover shadow.
