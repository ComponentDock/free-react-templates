# SignVale — Implementation Notes

**Source:** ColorLib Signup Form 13
**Preview:** https://preview.colorlib.com/theme/bootstrap/signup-form-13/
**Spec:** openspec/specs/template-signvale/spec.md

## Structure Order

1. Navbar — minimal/none (single-page form, no navigation)
2. Page wrapper — full viewport, centered content, bg #f8f9fd
3. Page title — "Sign Up #03", centered above card
4. Split-screen card container — max-width ~830px, border-radius 5px, box-shadow
5. Left panel (text-wrap) — sage green bg, icon + heading + prompt + Sign In button
6. Right panel (login-wrap) — white bg, greeting + form + social + sign-in link
7. Footer — minimal, Component Dock link

## Section-by-Section Fidelity Notes

### Page wrapper
- Background: `bg-[#f8f9fd]` (Tailwind arbitrary)
- Min-height viewport, flex center
- Padding: 7em 0 (from .ftco-section)

### Page title
- "Sign Up #03" — h2, black (#000), font-weight 400, font-size 28px, centered

### Card container
- Border-radius: 5px
- Box-shadow: `0px 10px 34px -15px rgba(0,0,0,0.24)`
- Overflow hidden
- Flex row on desktop, column on mobile (<992px breakpoint)

### Left panel
- Background: `bg-[#7fa998]` (sage green)
- Width: 50% on desktop, 100% on mobile
- Centered content (flex column, align-center, justify-center)
- Icon: Soccer ball SVG or lucide-react placeholder (80px, white)
- Heading: "Soccer Ball" or contextual equivalent, bold (700), white, font-size 2rem
- Prompt: "Already have an account?" — white, normal weight
- Button: "Sign In" — white bg, white border, white text, pill-shaped (rounded-full), outline variant (btn-white btn-outline-white)

### Right panel
- Background: `bg-white`
- Width: 50% on desktop, 100% on mobile
- Padding: 40px (from cl-p-4 cl-p-md-5)
- Heading: "Hello!" — bold (700), black, h3 size
- Subtitle: "Please signup to continue" — block display, font-size 16px, rgba(0,0,0,0.4)
- Form fields (each in a form-group with mb-4):
  - Label: 13px, rgba(0,0,0,0.3), margin-bottom 0
  - Input: height 40px, border: none, border-bottom: 1px solid rgba(0,0,0,0.1), no radius, no shadow, padding-left 0
  - Focus: border-color #7fa998, no outline/shadow
  - Placeholder: rgba(0,0,0,0.3)
- Submit button: full width, bg #7fa998, border 1px solid #7fa998, white text, border-radius 40px, box-shadow 0px 10px 19px -16px rgba(0,0,0,0.29)
- Hover: transparent bg, #7fa998 text/border
- Social section:
  - "or" text: gray, block display
  - "Signup with" text: gray, block display
  - Social icons: flex, justify-center, gap 20px
  - Facebook: bg #44629b, 40px circle, white icon
  - Twitter: bg #1dade9, 40px circle, white icon
  - Hover: bg #7fa998
- Bottom link: "I'm already a member!" gray + "Sign In" sage green link

### Footer
- Minimal, site name + Component Dock link

## Key Design Decisions

1. **Font:** Roboto (Google Fonts) — weights 400, 500, 700
2. **Brand color:** #7fa998 (sage green) — used for left panel, buttons, focus states, links
3. **Split-screen layout:** flex row desktop, flex column mobile at 992px breakpoint
4. **Input style:** underline-only (bottom border), no box/radius
5. **Button shape:** pill (border-radius 40px) with subtle shadow
6. **Social icons:** 40px circles, brand colors, sage green hover
7. **No framework dependencies:** the original uses custom CSS classes (cl-*) — recreate with Tailwind utilities
