# SignupFlint — Implementation Tasks & Design Notes

Source: ColorLib Signup Form 12
Preview: https://preview.colorlib.com/theme/signup-form-12/ (UNREACHABLE)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-12.jpg
Spec: openspec/specs/template-signupflint/spec.md

## Structure Order

1. Page container — light gray (#f5f5f5) background, full viewport height, flex center
2. Page title — "Sign Up #01" above the card, dark gray, centered
3. Card wrapper — white background, rounded corners (12px), subtle shadow, max-width ~450px, centered
4. Card header — "Hello!" heading (bold, dark gray) + "Please signup to continue" subtitle (gray)
5. Avatar icon — circular gray circle with person silhouette + golden checkmark badge
6. Form fields (underline style):
   - Full Name — label + bottom-border input, placeholder "John Doe"
   - Email Address — label + bottom-border input, placeholder "johndoe@gmail.com"
   - Password — label + bottom-border input, placeholder "Password"
   - Confirm Password — label + bottom-border input, placeholder "Confirm Password"
7. Sign Up button — full-width, golden/olive (#c5b358), white text
8. Divider — "or" text in gray
9. Social section — "Signup with" text + Facebook (blue circle) + Twitter (light blue circle) icons
10. Sign In link — "I'm already a member! Sign In" (golden link)

## Design Notes

- **Key aesthetic:** Minimal, friendly, warm golden accent. No split-screen, no background image.
- **Input style:** Underline-only (bottom border, no full box border) — different from most signup specs that use full-border inputs.
- **Button:** Full-width golden/olive, NOT a standard primary color. The golden tone (#c5b358) is distinctive.
- **Social icons:** Circular icons (NOT full-width buttons) — Facebook dark blue, Twitter light blue. Centered side by side.
- **Avatar:** Gray circle with person icon + small golden badge — unique to this template.
- **Card:** White on light gray, generous padding, rounded corners (12px), subtle shadow.
- **No password toggle** — unlike signuprift which has an eye icon toggle.
- **No terms checkbox** — unlike signupcraft which has a terms consent checkbox.

## Component Breakdown

- `App.tsx` — page layout (gray bg, flex center, title + card)
- `components/Card.tsx` — white card container with shadow
- `components/Avatar.tsx` — circular avatar with badge
- `components/SignupForm.tsx` — form with underline inputs + golden button
- `components/SocialLogin.tsx` — divider text + social icons
- `components/SignInLink.tsx` — "already a member" link

## Fidelity Checklist

- [ ] Match centered card layout (not split-screen)
- [ ] Match underline-only input style (bottom border)
- [ ] Match golden/olive button color (#c5b358)
- [ ] Match circular social icons (not full-width buttons)
- [ ] Match avatar with golden badge
- [ ] Match "Sign Up #01" page title above card
- [ ] Match "Hello!" heading + subtitle structure
- [ ] Match section order: header → avatar → fields → button → divider → social → sign in
- [ ] Use picsum.photos for any placeholder images
- [ ] Use lucide-react for icons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
