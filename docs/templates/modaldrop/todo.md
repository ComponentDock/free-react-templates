# ModalDrop — Implementation Notes

## Source
- ColorLib template: Modal 17
- Slug: modal-17
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-17/
- Screenshot: unreachable at prep time

## Structure Order
1. Full-viewport centered area with "Launch modal" button
2. Full-screen modal overlay (Bootstrap-style fade-in)
3. Modal content panel:
   - Top orange accent border (4px solid #ed5107)
   - Light gray body (#efefef)
   - "Log In" heading
   - Descriptive paragraph
   - Login form:
     - Username/Email input
     - Password input
     - Login button + "Forgot password" link (row)
     - "Sign up here" signup prompt

## Section-by-Section Fidelity Notes

### Launch Area
- Full viewport height (100vh)
- Centered content vertically and horizontally
- "Launch modal" button: Bootstrap `.btn-secondary` style, `px-4 py-3` padding
- Heading "Modal #7" above button (in original; we can drop or adapt)

### Modal Overlay
- Full-screen dark backdrop
- Centered modal dialog (`.modal-dialog-centered`, `.modal-md`)
- Fade-in animation on open
- Click outside (backdrop) closes modal
- Close button (×) in top-right corner

### Modal Content Panel
- Top border: 4px solid #ed5107 (orange accent)
- Background: #efefef (light gray)
- No border-radius (sharp corners)
- Heavy shadow: `0 10px 50px -10px rgba(0,0,0,0.9)`
- Padding: `.p-4` on form area

### Login Form
- Heading: "Log In", font-size 22px, color #000
- Description: paragraph text, color #777, font-size 14px
- Labels: color #555
- Inputs: transparent border, subtle shadow (`0 1px 3px 0 rgba(0,0,0,0.2)`)
- Login button: `.btn-primary`, `px-5` padding, 4px radius, no border
- "Forgot password" link: color #555, font-weight 900
- "Sign up here" link: color #555, inside `.custom-note` (#999)

## Design Tokens (for Tailwind @theme)
- brand-orange: #ed5107
- modal-bg: #efefef
- text-dark: #000000
- text-body: #777777
- text-muted: #999999
- text-link: #555555
- btn-radius: 4px
- input-shadow: 0 1px 3px 0 rgba(0,0,0,0.2)
- modal-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)

## Assets
- Use placeholder images: `https://picsum.photos/seed/modaldrop-<n>/<w>/<h>`
- Fonts: Google Fonts Roboto + Poppins (load via <link> in index.html)
- Icons: lucide-react
