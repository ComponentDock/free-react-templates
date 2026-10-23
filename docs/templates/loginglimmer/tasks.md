# LoginGlimmer — Task Outline

## Replication Reference

- **Source:** ColorLib Login Form V19
- **URL:** https://colorlib.com/wp/template/login-form-v19/
- **Live preview:** https://preview.colorlib.com/theme/login-form-v19/ (unreachable — screenshot used)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v19.jpg
- **Description:** Neat, simple, minimalist login form template

## Design Notes (from screenshot analysis)

### Layout

- Single-page centered card layout (no navbar, no complex sections)
- Card is vertically and horizontally centered on the viewport
- Full-screen light blue-gray background

### Section Order

1. **Background layer** — solid light blue-gray (#e8f4f8)
2. **Form card** — white rounded card with:
   - Heading: "Account Login" (dark gray, ~24px, sans-serif, weight ~500-600)
   - Email input (full-width, light gray border, placeholder "Email")
   - Password input (full-width, light gray border, placeholder "Password")
   - Sign In button (full-width, blue, white text, uppercase, ~4px radius)
   - Forgot link: "Forgot Username / Password?" (blue text)
   - Sign up text: "Create an account? Sign up" (blue link)
3. **Footer** — Component Dock attribution

### Fidelity Notes

- Very simple template — single component (LoginForm) + Footer
- No images, no icons, no social login buttons
- Minimal interactivity: just form inputs + validation
- Button text is uppercase "SIGN IN"
- Links use the same blue as the button
- No gradient, no parallax, no decorative elements

### Token Mapping

| Source Token         | Tailwind Class       | CSS Variable    |
| -------------------- | -------------------- | --------------- |
| Page bg #e8f4f8      | bg-[#e8f4f8]         | --color-bg      |
| Card bg white        | bg-white             | --color-card    |
| Button blue #5b7def  | bg-[#5b7def]         | --color-primary |
| Button text white    | text-white           | —               |
| Input border #d1d5db | border-gray-300      | —               |
| Placeholder #9ca3af  | placeholder-gray-400 | —               |
| Heading #374151      | text-gray-700        | --color-heading |
| Body text #6b7280    | text-gray-500        | --color-text    |
| Link blue #5b7def    | text-[#5b7def]       | --color-link    |

## Tasks

- [x] Write spec (openspec/specs/template-loginglimmer/spec.md)
- [ ] Scaffold apps/loginglimmer (package.json, vite.config.ts, vitest.config.ts, index.html, tsconfig)
- [ ] Write tests (LoginForm.test.tsx, Footer.test.tsx, App.test.tsx)
- [ ] Implement components (LoginForm.tsx, Footer.tsx, App.tsx)
- [ ] Add index.css with @theme tokens (Inter or system sans-serif, brand #5b7def)
- [ ] Run per-app gate: scripts/verify-app.sh loginglimmer
- [ ] Push + PR + merge
- [ ] Bookkeeping: TEMPLATES.md [x] + surge URL + homepage + readme:status
