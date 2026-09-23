# LoginScape — Implementation Notes

## Source

- **ColorLib:** Login Form 18 (`login-form-18`)
- **Preview:** https://preview.colorlib.com/theme/login-form-18/ (404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-18-2.jpg
- **Source page:** https://colorlib.com/wp/template/login-form-18/

## Design Tokens (extracted from screenshot)

| Token | Value | Notes |
|---|---|---|
| Page bg | #f0f0f5 | Light gray-blue, full viewport |
| Card bg | #ffffff | White, centered card |
| Card shadow | 0 4px 20px rgba(0,0,0,0.08) | Subtle elevation |
| Card radius | ~8px | rounded-lg |
| Primary color | #7B5EA7 | Purple — avatar, heading, button, checkbox |
| Primary hover | #6A4F96 | Darker purple for hover states |
| Heading text | #7B5EA7 | Purple, ~18px, centered |
| Input bg | #f0f0f0 | Light gray background on inputs |
| Input placeholder | #aaaaaa | Light gray placeholder text |
| Input radius | ~4px | Slight rounding |
| Button bg | #7B5EA7 | Purple, full width |
| Button text | #ffffff | White |
| Button radius | ~4px | Slightly rounded corners |
| Checkbox accent | #7B5EA7 | Purple checkbox |
| Forgot Password | #999999 | Gray link |
| Font | "Poppins", sans-serif | Clean geometric sans-serif |

## Section Order

1. **Page wrapper** — full-viewport light gray (#f0f0f5) background, flex center
2. **Card** — white, rounded-lg, shadow, padded ~40px
3. **Avatar** — purple circle (~60px) with white user silhouette icon, centered
4. **Heading** — "Have an account?" text in purple, centered
5. **Form fields** — Username input, Password input (gray background, no visible border)
6. **Remember row** — checkbox left, "Forgot Password" link right
7. **Submit button** — full-width purple "Get Started" button, slightly rounded
8. **Footer** — Component Dock link

## Implementation Tasks

1. Copy a minimal existing login app as starter (e.g. loginleaf or logincove)
2. Create `apps/loginscape/` — rename package to `@free-react-templates/loginscape`
3. Set up `public/CNAME` → `loginscape.free.componentdock.com`
4. Set `homepage` in package.json to `https://loginscape.free.componentdock.com`
5. Create `src/components/LoginCard.tsx` — main centered card component
6. Create `src/components/AvatarIcon.tsx` — purple circle with user silhouette (lucide-react User icon)
7. Create `src/components/LoginForm.tsx` — username + password fields with gray bg
8. Create `src/components/RememberRow.tsx` — checkbox + forgot password link
9. Create `src/components/SubmitButton.tsx` — full-width purple button "Get Started"
10. Create `src/components/Footer.tsx` — Component Dock link
11. Compose in `src/App.tsx` — flex center layout with card
12. Set up `src/index.css` — Tailwind v4 theme tokens (@theme block with brand colors)
13. Write tests for each component (Vitest + Testing Library) — TDD RED phase
14. Run `npm run test:coverage` — must hit 100% coverage
15. Verify: `scripts/verify-app.sh loginscape` passes (typecheck + lint + test + build)

## Fidelity Notes

- The original is a **single centered card** on gray background — NOT a split layout
- No illustration or decorative elements — minimal SaaS login aesthetic
- Avatar is a purple circle with a white user silhouette (lucide User icon works)
- Input fields use gray background (not border-only) — subtle rounded rectangle inputs
- Button is solid purple, not gradient, with slight border radius
- "Have an account?" heading is centered and purple — not bold/black
- Checkbox uses purple accent matching the brand color
- "Get Started" is the button label (not "Sign In" or "Login")
- No social login buttons — clean, minimal form
- Page has no external header/nav — just the card centered on the background
