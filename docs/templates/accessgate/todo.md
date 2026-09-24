# AccessGate — Design Notes & Implementation Outline

## Source
- **ColorLib template**: Login Form V6
- **Preview URL**: https://preview.colorlib.com/theme/login-form-v6/ (unreachable at prep time — design derived from screenshot + GitHub reference)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v6.jpg

## Section order (bottom-up)
1. Full-page background image layer
2. Centered glassmorphism card
3. Inside card: heading → form → links

## Component structure
```
App.tsx
  └── AccessGate (single-page login)
       ├── Background (full-viewport image layer)
       ├── Card (glassmorphism container)
       │    ├── Heading ("Login")
       │    ├── LoginForm
       │    │    ├── Input (email/phone)
       │    │    ├── Input (password)
       │    │    ├── Button ("Login")
       │    │    ├── CheckboxRow (remember me + forgot password)
       │    │    └── RegisterLink ("Create new account")
       │    └── (optional) Footer (Component Dock link)
       └── Footer
```

## Fidelity notes
- **Glassmorphism**: The signature element. `backdrop-filter: blur(30px)` on a transparent card. No Tailwind `backdrop-blur` class exists in v4 for this — use inline style or custom utility. Card border `2px solid rgba(0,0,0,.2)` with `border-radius: 20px`.
- **Background image**: Use `https://picsum.photos/seed/accessgate/1920/1080` as placeholder. Apply via CSS `background` on body/container: `url(...) no-repeat center center / cover`.
- **Transparent inputs/button**: All form elements share the same transparent background + border style. No brand accent color — the design is monochrome (black on glass).
- **Typography**: Google Fonts `Roboto Condensed` (weights 300, 400, 700). Load via `<link>` in `index.html`. Default text color `black`.
- **Responsive**: Card width `450px` on desktop, fluid on mobile (max-width + padding). Use Tailwind responsive utilities (`max-w-md w-full mx-auto`).
- **Footer**: Must link `https://www.componentdock.com/` branded as "Component Dock".
- **No social login**: The original has no OAuth buttons — keep it simple.

## Design token extraction (from reference CSS)
| Token | Value |
|-------|-------|
| Body font | `'Roboto Condensed', sans-serif` |
| Card background | `transparent` |
| Card backdrop | `blur(30px)` |
| Card border | `2px solid rgba(0,0,0,0.2)` |
| Card radius | `20px` |
| Card width | `450px` |
| Card padding | `40px 20px` |
| Input padding | `1rem` |
| Input border | `2px solid rgba(0,0,0,0.2)` |
| Input radius | `20px` |
| Input font-size | `20px` |
| Input bg | `transparent` |
| Input color | `black` |
| Button padding | `1rem` |
| Button border | `2px solid rgba(0,0,0,0.2)` |
| Button radius | `20px` |
| Button font-size | `20px` |
| Button font-weight | `600` |
| Button bg | `transparent` |
| Button color | `black` |
| Link font-size | `20-22px` |
| Link color | `black` |

## Implementation TODO
- [ ] Copy simplest existing app (e.g. `apps/aurora` or similar minimal app), rename to `accessgate`
- [ ] Update `package.json` name to `@free-react-templates/accessgate`
- [ ] Add Google Fonts `<link>` for Roboto Condensed in `index.html`
- [ ] Create `src/App.tsx` composing the single-page login
- [ ] Create `src/components/AccessGate.tsx` (card + form)
- [ ] Create `src/components/LoginForm.tsx` (inputs + button + links)
- [ ] Create `src/index.css` with Tailwind entry + `@theme` tokens
- [ ] Write tests (Vitest + RTL) for all scenarios in spec
- [ ] Run `npm run test:coverage` — must hit 100%
- [ ] Run `scripts/verify-app.sh accessgate` — must pass
- [ ] Update `public/CNAME` to `accessgate.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://accessgate.free.componentdock.com`
- [ ] Commit as `feat: implement AccessGate (ColorLib login-form-v6)`
