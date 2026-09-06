# Modalize — Implementation Tasks & Design Notes

Recreation of ColorLib **Modal 05** (`https://colorlib.com/wp/template/modal-05/`).

## Design & Structure Notes

1. **Page Shell**: Full-viewport white background (`#fff`) with a centered heading and a Bootstrap-style primary button ("Launch Modal") that toggles the modal open.
2. **Modal Overlay**: Semi-transparent dark overlay behind the modal when open. Clicking the overlay closes the modal.
3. **Modal Dialog**: Centered white card, `max-width: 450px`, no border, shadow `0px 10px 34px -15px rgba(0,0,0,0.24)`. Header is empty except for a 40×40px close (×) button positioned absolute top-right.
4. **Social Icons Section**: Three circular social buttons (Twitter, Facebook, Instagram) rendered as 40×40px circles with `rgba(0,0,0,0.05)` background, centered horizontally above the form. Use lucide-react icons (Twitter → `X` or custom, Facebook → `Facebook`, Instagram → `Instagram`).
5. **Registration Form**: "Create Your Account" heading (h3, centered), three form fields (Full Name, Email Address, Password) with uppercase labels (`text-transform: uppercase; font-size: 12px; color: rgba(0,0,0,0.3)`), standard inputs with placeholders, and a full-width blue submit button ("Sign Up") with `border-radius: 0.25rem`.
6. **"I'm already a member" link**: Muted link (`rgba(0,0,0,0.3)`, underlined) centered below the form.
7. **Footer**: Standard footer with mandatory "Component Dock" link (`https://www.componentdock.com/`).

## Task Breakdown for Implementer

- [ ] Scaffold app `apps/modalize` (copy from simplest existing app, update package name to `@free-react-templates/modalize`, add `public/CNAME` with `modalize.free.componentdock.com`).
- [ ] Configure `vite.config.ts` with `injectUiSource()`.
- [ ] Implement design tokens in `src/index.css` (`@theme`): brand blue `#007bff`, label color `rgba(0,0,0,0.3)`, social bg `rgba(0,0,0,0.05)`, font Poppins.
- [ ] Build components: Page (heading + launch button), Modal (overlay + dialog + close button), SocialIcons, RegistrationForm (heading + fields + submit + member link), Footer.
- [ ] Implement modal open/close state with keyboard support (Escape to close, focus trap).
- [ ] Write unit tests for all components with 100% coverage (`src/test/` or colocated `*.test.tsx`).
- [ ] Verify with `scripts/verify-app.sh modalize`.
- [ ] Build and register in workspace root (`npm install`).

## Design Token Notes

- **Font**: Poppins (Google Fonts, weights 300–900). Load via `<link>` in index.html.
- **Brand**: `#007bff` (Bootstrap primary blue) — used for launch button, submit button.
- **Text**: `#212529` (Bootstrap body text).
- **Labels**: `rgba(0,0,0,0.3)` uppercase, 12px.
- **Social bg**: `rgba(0,0,0,0.05)` circular 40×40px.
- **Muted link**: `rgba(0,0,0,0.3)` underline.
- **Modal shadow**: `0px 10px 34px -15px rgba(0,0,0,0.24)`.
- **Modal max-width**: 450px.
- **Border radius**: 0.25rem (Bootstrap `.rounded`).
- **Close button**: 40×40px, absolute top-right, no padding/margin.
