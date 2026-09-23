# LoginGate — Implementation Notes

## Source

- **ColorLib:** Login Form 09 (`login-form-09`)
- **Preview:** https://preview.colorlib.com/theme/login-form-09/ (404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-09.jpg
- **Source page:** https://colorlib.com/wp/template/login-form-09/

## Design Tokens (extracted from screenshot)

| Token | Value | Notes |
|---|---|---|
| Page bg | #f0f0f0 | Light gray, full viewport |
| Card bg | #ffffff | White, centered card |
| Card shadow | 0 4px 20px rgba(0,0,0,0.08) | Subtle elevation |
| Card radius | ~8px | rounded-lg |
| Heading text | #333333 | Bold, ~24px |
| Subtext | #999999 | ~14px |
| Input border | #dddddd | Bottom-border only |
| Input placeholder | #aaaaaa | Light gray |
| Button gradient | #56c596 → #7ed9a7 | Horizontal, teal-green to mint |
| Button text | #ffffff | White |
| Button radius | ~25px | Pill shape |
| Checkbox accent | #56c596 | Teal-green |
| Forgot Password | #999999 | Gray link |
| Facebook | #3b5998 | Dark blue |
| Twitter | #1da1f2 | Light blue |
| Google | #d44638 | Red |
| Social button | circular ~40px | rounded-full |
| Font | "Roboto", sans-serif | Clean sans-serif |

## Section Order

1. **Page wrapper** — full-viewport light gray (#f0f0f0) background, flex center
2. **Card** — white, rounded-lg, shadow, padded ~40-50px
3. **Header** — "Sign In to LoginGate" heading + subtext paragraph
4. **Form fields** — Username input, Password input (bottom-border-only)
5. **Remember me row** — checkbox left, "Forgot Password" link right
6. **Login button** — full-width pill, gradient, white text
7. **Social divider** — "or sign in with" centered text
8. **Social buttons** — 3 circular icons (Facebook, Twitter, Google)
9. **Footer** — Component Dock link

## Implementation Tasks

1. Copy a minimal existing app as starter (e.g. loginleaf or simplest form app)
2. Create `apps/logingate/` — rename package to `@free-react-templates/logingate`
3. Set up `public/CNAME` → `logingate.free.componentdock.com`
4. Set `homepage` in package.json to `https://logingate.free.componentdock.com`
5. Create `src/components/LoginCard.tsx` — main centered card component
6. Create `src/components/Header.tsx` — heading + subtext
7. Create `src/components/LoginForm.tsx` — username + password fields with bottom-border styling
8. Create `src/components/RememberRow.tsx` — checkbox + forgot password link
9. Create `src/components/LoginButton.tsx` — full-width gradient pill button
10. Create `src/components/SocialLogin.tsx` — divider + 3 circular social buttons
11. Create `src/components/Footer.tsx` — Component Dock link
12. Compose in `src/App.tsx` — flex center layout with card
13. Set up `src/index.css` — Tailwind v4 theme tokens (@theme block with brand colors)
14. Write tests for each component (Vitest + Testing Library) — TDD RED phase
15. Run `npm run test:coverage` — must hit 100% coverage
16. Verify: `scripts/verify-app.sh logingate` passes (typecheck + lint + test + build)

## Fidelity Notes

- The original is a **single centered card** on gray background — NOT a split layout
- No illustration or decorative elements — minimal SaaS login aesthetic
- Button gradient is horizontal teal-to-mint, not solid color
- Input fields use bottom-border-only style (no full box border) — underline inputs
- Social buttons are circular (rounded-full) with white icons on brand-colored backgrounds
- Checkbox uses teal accent matching the button gradient start color
