# Joinhub — Prep Notes

## Source
- ColorLib Signup Form 16
- Slug: `signup-form-16`
- Preview: https://preview.colorlib.com/theme/bootstrap/signup-form-16/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-16.jpg
- Description: A split-layout signup form with social login buttons and terms checkbox.

## Design Notes

### Structure order (top to bottom)
1. Page heading: "Sign Up #06" centered at top
2. Split card (border-radius 5px, box-shadow):
   - Left panel (40%): background image + purple overlay (#6807f9, 40% opacity)
     - "Welcome to signup form" heading (white)
     - Descriptive paragraph (white, 80% opacity)
   - Right panel (60%): white background, form content
     - "Signup with this services" heading (centered)
     - 3 social login buttons: Google, Facebook, Twitter (40px circles)
     - "or" divider with horizontal lines
     - Form fields:
       - Full Name + Username (2-column row)
       - Email Address (full width)
       - Password (full width)
     - Terms checkbox (checked by default): "I agree all statements in terms of service"
     - "Create an account" button (full width, blue)
     - "I'm already a member! Sign In" link

### Fidelity notes
- The original uses custom `cl-` prefixed Bootstrap-like grid classes; React version should use Tailwind equivalents
- The left panel has a background image with a pseudo-element overlay (`#6807f9` at 40% opacity)
- Social login buttons are circular (40px × 40px, border-radius 50%) with FontAwesome SVG icons
- Social icon hover: purple background (#6807f9) + white icon color
- The "or" divider uses a pseudo-element horizontal line (#e6e6e6) with centered text on white background
- Custom checkbox uses FontAwesome icons (unchecked: square, checked: checked-square)
- Form fields use standard Bootstrap-style inputs (border-radius 0.25rem)
- The card has border-radius 5px and the same shadow as other signup form templates
- Mobile: panels stack vertically with image on top
- Font: Roboto (weights 400) via Google Fonts

### Key colors
- Purple overlay: #6807f9 (40% opacity)
- Button blue: #007bff
- Button hover: #0069d9
- Social icon hover: #6807f9
- Divider line: #e6e6e6
- Input border: #ced4da
