# Logincast — Implementation Notes

**Source:** ColorLib Login Form V11
**ColorLib URL:** https://colorlib.com/wp/template/login-form-v11/
**Preview URL (original):** https://colorlib.com/etc/lf/Login_v11/index.html
**Status:** PREP — spec complete, ready for implementation

## Structure Order (section-by-section)

1. **Background gradient** — Full viewport linear-gradient from #0250c5 (blue, bottom) to #d43f8d (pink, top). Flex centering, min-height 100vh.
2. **Login card** — White (#fff) card, 450px wide, 3px border-radius, internal padding 50px L/R, 77px top, 30px bottom.
3. **Title** — "LOGIN" in Raleway Black (or Google Fonts Raleway 900), 30px, uppercase, #333333, centered.
4. **Email input** — Full-width, 62px height, #e6e6e6 background, 3px radius, left icon (envelope, lucide-react). Focus: icon → #d33f8d, animated box-shadow fade.
5. **Password input** — Same styling, lock icon.
6. **Remember me checkbox** — Custom checkbox, #d33f8d border, fills pink when checked. Raleway Regular 16px, #999999.
7. **Submit button** — Full-width, 62px height, #d33f8d bg, white text, uppercase, Raleway Bold 16px. Hover: bg → #333333.
8. **Social login divider** — "Or login with" text in Raleway Regular 16px, #999999.
9. **Social buttons** — Two side-by-side (50% - 5px each), 40px height, 3px radius, #e6e6e6 border, white bg. Facebook: #3b5998 text + FB icon. Google: #555555 text + Google icon. Hover: border → #d33f8d.
10. **Sign up link** — "Not a member? Sign up now" — "Sign up now" underlined, hover → #d33f8d.
11. **Validation** — Red (#c80000) border + tooltip on invalid submit. Border-radius 3px, Raleway SemiBold 13px.
12. **Footer** — Component Dock link.

## Fidelity Notes

- **Gradient:** The original uses `linear-gradient(bottom, #0250c5, #d43f8d)` — the CSS `bottom` direction means gradient starts at bottom. In Tailwind, use `bg-gradient-to-t from-[#0250c5] to-[#d43f8d]`.
- **Background image:** The original has a subtle background image overlay (`img-01.png`). Use a placeholder or omit — the gradient is the key visual element.
- **Focus animation:** The original uses `@keyframes anim-shadow` with `box-shadow: 0px 0px 60px 20px` fading out. Replicate with Tailwind `animate-` or inline CSS animation.
- **Icon colors:** Use lucide-react icons (Envelope, Lock) — no Font Awesome. Color transitions on focus use CSS transition.
- **Social icons:** Use lucide-react for Facebook (or a simple SVG) and Google icons. No external image assets.
- **Fonts:** Load Raleway (Black, Bold, SemiBold, Regular) and Poppins from Google Fonts via `<link>` in index.html.
- **No assets copied:** Use picsum.photos for any placeholder images. Icons from lucide-react.
- **Validation:** Implement with zod + react-hook-form for consistent error handling.
