# SignupNest — Design Notes

Source: ColorLib Regform 28
Preview: https://preview.colorlib.com/theme/colorlib-regform-28/ (404 at prep time)
Source ZIP: https://preview.colorlib.com/downloads/free/colorlib-regform-28.zip
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-28.jpg

## Structure order

1. Full-page gradient background (lavender → sky blue, 136deg)
2. Centered card (white, 851px wide, 15px border-radius)
   - Left panel: hero image + overlay text
   - Right panel: registration form
3. Responsive stack at 992px

## Section-by-section fidelity notes

### Page background
- Linear gradient: rgb(224,195,252) → rgb(142,197,252) at 136deg
- Full viewport, flex centered
- Use Tailwind `bg-gradient-to-br` with custom colors in `@theme`

### Card container
- White background, 851px max-width, 15px border-radius
- Flex row (horizontal split)
- Responsive: flex-col at <992px
- Use `max-w-[851px]` + `rounded-[15px]` + `flex flex-col md:flex-row`

### Left hero panel
- Background image (form-v2.jpg) — use `picsum.photos/seed/signupnest-hero/500/800`
- Overlaid text positioned absolutely at bottom
- Headline: "Bring Your Music Along" — white, Roboto Bold 32px
- Subline: "try Unlimited" — white, Roboto Bold 25px, block display
- Price: "$9.99" (35px) + "/ Month" (18px) — positioned bottom-right
- Image fills left half, border-top-left-radius + border-bottom-left-radius 15px
- On mobile: full width, border-bottom-left-radius 0, border-top-right-radius 15px

### Right form panel
- Padding: 20px 40px
- Heading: "Registration Form" — Roboto Bold 28px, color #333, margin-bottom 25px
- Field rows: vertical stack with label + input
  - Labels: Roboto Regular 16px, color #666, margin-bottom 11px
  - Inputs: Roboto 16px, color #333, border 1px solid #e5e5e5, radius 5px, padding 14.5px 15px
  - Focus: border changes to #53c83c (green)
  - Placeholder: color #999, font-size 14px
- Fields: Full Name, Your Email (required + pattern), Password (required), Confirm Password (required)

### Checkbox
- Custom styled: hidden native checkbox + custom checkmark span
- Checkmark: 15px square, border 1px solid #ccc, checkmark after pseudo-element
- Label text: "By signing up, you agree to the Play Term of Service" (link)
- Link color: #385cb9 (indigo-blue), underlined
- Font: Roboto Regular 16px, color #666

### Register button
- Background: #3b63ca, hover: #3356b0
- Color: white, Roboto Medium 16px
- Border-radius: 6px, width: 160px, padding: 15.5px
- No border, cursor pointer

### Responsive behavior
- At 991px and below: card stacks vertically
  - Hero image goes full width on top
  - Form below with adjusted padding (30px 20px)
  - Input width adjusts

## Implementation notes

- Use `packages/ui` components where possible (Input, Button, Checkbox)
- Images: use `picsum.photos/seed/signupnest-hero/<w>/<h>` for hero
- Font: load Roboto from Google Fonts via `<link>` in index.html
- No ColorLib references in app code
- Footer must link https://www.componentdock.com/
- Public CNAME: signupnest.free.componentdock.com
