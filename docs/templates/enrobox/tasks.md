# Enrobox — Prep Notes

## Source
- ColorLib Signup Form 15
- Slug: `signup-form-15`
- Preview: https://preview.colorlib.com/theme/bootstrap/signup-form-15/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-15.jpg
- Description: "A free responsive sign-up form snippet with an organized structure."

## Design Notes

### Structure order (top to bottom)
1. Page heading: "Sign Up #05" centered at top (28px, Lato 500)
2. Form card: white background, 10px border-radius, box-shadow
3. Card heading: "Sign Up" (20px, Lato 400)
4. Form fields (stacked vertically):
   - Full Name (text, placeholder "John Doe")
   - Email Address (text, placeholder "johndoe@gmail.com")
   - Password (password, placeholder "Password")
   - Confirm Password (password, placeholder "Confirm Password")
5. Submit button: right-aligned, blue (#007bff), pill-shaped paper-plane icon
6. "Already have an account? Sign In" link (centered)
7. Decorative curved shadow pseudo-element at card bottom

### Fidelity notes
- The original uses custom `cl-` prefixed Bootstrap-like grid classes; React version should use Tailwind equivalents
- The `login-wrap:after` pseudo-element creates a subtle curved shadow at the bottom of the card (150px height, `border-radius: 50% 0 0 0`)
- Input labels are positioned absolutely above inputs with a white background pill, creating a "floating label" look without JavaScript
- Button is right-aligned via `justify-content: end` in a flex container
- The paper-plane icon is an inline SVG, not FontAwesome
- The page uses Lato font (weights 400 and 700) via Google Fonts
- No JavaScript required — pure HTML/CSS form with HTML5 validation

### Key colors
- Button blue: #007bff
- Button hover: #0069d9
- Input border: rgba(0,0,0,0.1)
- Label text: rgba(0,0,0,0.3)
- Card shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)
