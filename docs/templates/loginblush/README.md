# Loginblush — Design Notes & Task Outline

## Source Mapping

- ColorLib template: "Login Form V11" (slug: `login-form-v11`)
- Source URL: https://colorlib.com/wp/template/login-form-v11/
- Demo: https://colorlib.com/etc/lf/Login_v11/index.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v11.jpg
- Preview: 404 at time of prep — design captured from demo + CSS + screenshot

## Structure Order (top to bottom)

1. **Full-page gradient container** — vertical gradient blue (#0250c5) → pink (#d43f8d) with decorative wave overlay image
2. **White login card** — centered, 450px wide, 3px border-radius
   1. **Title** — "LOGIN" in Raleway Black, 30px, uppercase, #333333, centered
   2. **Email input** — gray bg (#e6e6e6), envelope icon left, 62px height, 3px radius
   3. **Password input** — gray bg (#e6e6e6), lock icon left, 62px height, 3px radius
   4. **Remember me checkbox** — custom styled, pink (#d33f8d) border/check
   5. **LOGIN button** — full width, pink (#d33f8d) bg, white text, 62px height, hover → #333333
   6. **"Or login with"** — Raleway Regular, 16px, #999999, centered
   7. **Social buttons** — Facebook + Google side-by-side, bordered, 40px height
   8. **Footer** — "Not a member? Sign up now" with underlined link

## Section-by-Section Fidelity Notes

### Gradient Background
- Use `linear-gradient(to top, #0250c5, #d43f8d)` (the original uses `bottom` keyword = same as `to top`)
- Wave overlay: use a CSS shape or SVG curve (avoid copying the original img-01.png asset). A subtle SVG wave or CSS clip-path works.
- The gradient goes from blue at the bottom to pink at the top

### White Card
- Width: 450px max, padding: 50px L/R, 77px top, 30px bottom
- Border-radius: 3px (very slight rounding)
- No shadow in the original

### Form Title
- Text: "LOGIN" (uppercase)
- Font: Raleway Black (use Google Fonts `Raleway:wght@900`)
- Size: 30px, color: #333333, centered

### Input Fields
- Both inputs: gray bg (#e6e6e6), no visible border, 62px height, 3px border-radius
- Left icon: 23px padding-left for icon space, icons are Linearicons (envelope, lock)
- Use lucide-react icons (Mail, Lock) instead of Linearicons
- Input text: Raleway SemiBold 18px, color #686868
- Placeholder: #acacac
- Focus animation: pink (#d33f8d) glow that fades out (box-shadow animation)
- Icon on focus: changes to #d33f8d

### Checkbox
- Hidden native checkbox, custom ::before pseudo-element
- Unchecked: white bg, 2px solid #d33f8d border, 18x18px, 3px radius
- Checked: pink checkmark (#d33f8d)
- Label: Raleway Regular, 16px, #999999

### Login Button
- Full width, height 62px, bg #d33f8d, white text
- Font: Raleway Bold, 16px, uppercase
- Border-radius: 3px
- Hover: bg transitions to #333333 over 0.4s

### Social Buttons
- Two buttons side-by-side: `calc((100% - 10px) / 2)` each
- White bg, 1px solid #e6e6e6 border, 40px height, 3px radius
- Facebook: blue icon (#3b5998) + "Facebook" text in #3b5998
- Google: Google "G" icon + "Google" text in #555555
- Hover: border color → #d33f8d

### Footer Link
- "Not a member? " + "Sign up now" (underlined link)
- Font: Raleway Regular, 16px, #999999
- Link: bottom border 1px solid #999999, hover → #d33f8d

## Component Implementation Order

1. `src/App.tsx` — compose gradient bg + centered card
2. `src/components/GradientBackground.tsx` — gradient + wave overlay
3. `src/components/LoginCard.tsx` — white card container
4. `src/components/LoginForm.tsx` — form with title, inputs, checkbox, button
5. `src/components/SocialLogin.tsx` — "Or login with" + Facebook/Google buttons
6. `src/components/Footer.tsx` — "Not a member? Sign up now" + Component Dock link
7. `src/components/FormInput.tsx` — reusable input with icon + focus animation
8. `src/components/CustomCheckbox.tsx` — styled checkbox component

## Fonts

Load via Google Fonts `<link>` in index.html:
- Poppins (Regular) — body base
- Raleway (Regular, SemiBold, Bold, Black) — headings, buttons, inputs, labels

## Dependencies

- No new dependencies needed (lucide-react for Mail/Lock/Facebook icons)
- Use existing `packages/ui` components where applicable (Button, cn())
