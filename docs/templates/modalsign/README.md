# ModalSign — Design Notes

## Structure Order

1. Modal overlay (dark backdrop)
2. Modal container (centered, split-screen)
   - Left panel: Image (full-height background)
   - Right panel: Registration form
3. Close button (top-right corner)

## Section-by-Section Fidelity Notes

### Modal Overlay

- Dark semi-transparent backdrop (#000000 with ~50% opacity)
- Clicking backdrop closes modal
- Smooth fade-in/fade-out animation

### Modal Container

- Centered in viewport (both horizontally and vertically)
- Split-screen layout: 50% image, 50% form
- Rounded corners (~8px)
- Deep box shadow for elevation
- Max-width: ~900px (responsive)

### Image Panel (Left)

- Full-height background image
- Covers entire left panel
- Use placeholder: `https://picsum.photos/seed/modalsign/450/600`
- No overlay or text on image

### Form Panel (Right)

- White background (#ffffff)
- Centered content with padding (~40px)
- Headline: "Create Account" (h2, dark text, bold)
- Subtext: Optional welcome message
- Form fields:
  - Name input (text, placeholder "Your Name")
  - Email input (email, placeholder "Your Email")
  - Password input (password, placeholder "Password")
  - All with light gray background (#f5f5f5), rounded corners
- Submit button: "Sign Up" (full-width, blue #007bff, white text, rounded)

### Close Button

- Top-right corner of modal
- X icon (Lucide `X` component)
- On hover: slight opacity change
- aria-label="Close"

## Color Palette

- Primary: #007bff (blue)
- Background: #ffffff (white)
- Input background: #f5f5f5 (light gray)
- Text: #333333 (dark gray)
- Backdrop: rgba(0,0,0,0.5)

## Typography

- Font family: System sans-serif stack
- Headline: 24px, bold
- Labels: 14px, bold
- Input text: 14px, regular
- Button: 16px, bold

## Interactions

- Modal opens with scale + fade animation (0→1, 0.2s)
- Modal closes with reverse animation
- Focus trap within modal when open
- Escape key closes modal
- Backdrop click closes modal

## Responsive Behavior

- Mobile (<768px): Stack vertically (image top, form bottom)
- Modal takes full width on mobile with margins
- Form remains centered and usable
