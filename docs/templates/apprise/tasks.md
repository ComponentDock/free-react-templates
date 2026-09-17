# Apprise — Implementation Tasks & Design Notes

Source: ColorLib "CA App Landing" — https://colorlib.com/wp/template/ca-app/
Preview: https://preview.colorlib.com/#ca-app (unavailable at prep time)
New name: Apprise
App folder: `apps/apprise`

## Section Order (matches original 1:1)

1. **Navbar** — Transparent over hero; logo "Ca." → rename to "Apprise"; nav links: Home, About, Features, Screenshot, Pricing, Testimonials, Team, Contact; "Sign Up Free" outlined CTA button on right
2. **Hero** — Purple-to-magenta gradient (135deg, #6C3CE1 → #D946EF); white headline "Apprise"; white subtitle; email input + coral "Get Started" button; phone mockup on right
3. **Features ("Why Is It Special")** — Section heading with pink/red (#FF4466) underline; 3 cards in a row: icons (magenta #D946EF), titles ("Easy to use", "Powerful Design", "Customizability"), descriptions; white cards, subtle shadow, rounded corners
4. **Screenshots** — Horizontal carousel/grid of app screen mockups
5. **Pricing** — 3 plan cards (Basic, Standard, Premium), one highlighted as recommended
6. **Testimonials** — User testimonials with avatars, names, quotes; slider or grid
7. **Download CTA** — Gradient background matching hero; app store badges (Google Play, App Store)
8. **Footer** — Copyright, social links, Component Dock link

## Design Fidelity Notes

- **Hero gradient**: Critical visual element. Use CSS linear-gradient at 135deg from #6C3CE1 to #D946EF. Must span full width.
- **Phone mockup**: Use a placeholder image or a styled div representing a phone frame with a sample screen inside. Original shows a dark analytics/dashboard app screen.
- **CTA button color**: Coral-red (#FF4466), slightly rounded (4px radius), bold white text.
- **Section headings**: Dark (#1A1A2E), bold, with a short (40px) centered underline in #FF4466.
- **Feature cards**: White background, 8px border-radius, subtle box-shadow, icon on top (use lucide-react icons: Smartphone, Paintbrush, Settings or similar).
- **Navbar**: Becomes solid/white on scroll (sticky behavior).
- **Font**: Poppins from Google Fonts. Headings bold, body regular.
- **Spacing**: Consistent section padding (80px top/bottom).
- **Placeholder images**: Use `https://picsum.photos/seed/apprise-<n>/<w>/<h>` pattern.

## Implementation Steps

1. Copy simplest existing app as template scaffold
2. Rename package to `@free-react-templates/apprise`
3. Set up `public/CNAME` → `apprise.free.componentdock.com`
4. Add Poppins font link to `index.html`
5. Configure Tailwind theme tokens (brand colors, fonts) in `index.css`
6. Build Navbar component (transparent → solid on scroll)
7. Build Hero component (gradient, heading, subtitle, email input + CTA, phone mockup)
8. Build Features component (3 cards)
9. Build Screenshots component
10. Build Pricing component (3 plans)
11. Build Testimonials component
12. Build DownloadCTA component
13. Build Footer component (with Component Dock link)
14. Compose all in App.tsx
15. Write tests (100% coverage)
16. Run verify-app.sh
17. Commit + PR + merge + deploy
