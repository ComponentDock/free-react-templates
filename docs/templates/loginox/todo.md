# Loginox — Design Notes

## Source

- ColorLib: Login Form V20 (`login-form-20`)
- Preview: `https://preview.colorlib.com/theme/bootstrap/login-form-20/`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-20-1.jpg`

## Structure order

1. Full-viewport background image with dark overlay (body class `img js-fullheight`)
2. Centered narrow column (col-md-6 col-lg-4):
   - Title heading ("Loginox")
   - Login area (`.login-wrap`):
     - Subheading "Have an account?"
     - Sign-in form:
       - Username input (pill, glass-like)
       - Password input (pill, glass-like) + eye toggle
       - Submit button "Sign In" (pill, peach bg, black text)
       - Remember Me checkbox + Forgot Password link
     - Divider "— Or Sign In With —"
     - Social buttons: Facebook + Twitter (full-width white blocks)
   - Footer (Component Dock link)

## Section-by-section fidelity notes

### Background
- Full-viewport: `background-image: url(images/bg.jpg)`, `background-size: cover`, `background-position: center`
- Dark overlay via `body.img::after` with `background: #000; opacity: .3; z-index: -1`
- Use a picsum.photos image as placeholder background

### Title heading
- 28px, font-weight 400, color white, centered
- On original: "Login #20"; we use "Loginox"

### Login area (`.login-wrap`)
- No explicit background (transparent over the image)
- Text color: `rgba(255,255,255,0.9)`
- Subheading "Have an account?": h3, font-weight 300, white, centered, mb-4

### Form inputs
- Height: 50px
- Border-radius: 40px (pill shape)
- Background: `rgba(255,255,255,0.08)` (glass-like)
- Border: 1px solid transparent
- Focus: border-color `rgba(255,255,255,0.4)`
- Text color: white
- Placeholder color: `rgba(255,255,255,0.8)`
- No box-shadow on focus
- Eye toggle icon: `rgba(255,255,255,0.9)`, positioned absolute right, vertically centered

### Submit button
- Background: `#fbceb5` (peach)
- Text: black, uppercase, 15px
- Border: 1px solid `#fbceb5`
- Border-radius: 40px (pill)
- Full-width within form
- Hover: transparent bg, peach border, peach text (inverse)

### Remember Me + Forgot Password
- Row with two halves (w-50 each)
- Left: checkbox, peach color, checked by default
- Right: "Forgot Password" link, right-aligned, white text

### Social buttons
- Full-width blocks, stacked vertically
- White background, black text, rounded corners
- Hover: black background, white text
- Facebook + Twitter (use lucide-react icons, not font-awesome)

### Responsive behavior
- On desktop (>=992px): centered narrow column
- On mobile: full-width with padding
- Section padding: 7em 0

## Key implementation notes

- Use Tailwind classes, NOT Bootstrap classes
- Translate `.form-control` glass style to Tailwind: `bg-white/[0.08] border border-transparent rounded-full h-[50px] text-white placeholder-white/80 focus:border-white/40 focus:outline-none`
- Translate `.btn-primary` peach to Tailwind: `bg-[#fbceb5] text-black border border-[#fbceb5] rounded-full uppercase text-[15px] hover:bg-transparent hover:text-[#fbceb5] hover:border-[#fbceb5]`
- Password toggle: useState for password field type
- Background image: use `picsum.photos/seed/loginox/1920/1080` as placeholder
- Social icons: use lucide-react (Facebook, Twitter icons), not font-awesome
- No colorlib.com references in any app file
- Footer: "More templates at Component Dock" linking to componentdock.com
