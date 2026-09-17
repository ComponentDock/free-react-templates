# Casette — Implementation Todo & Design Notes

## Source
- **ColorLib template**: CA App Landing (slug: `ca-app`)
- **URL**: https://colorlib.com/wp/template/ca-app/
- **Preview**: 404 (not in preview system)
- **Category**: App Landing / SaaS / Creative
- **One-page scroll**: yes

## Design Notes (from screenshot analysis)

### Color Palette
- Hero: Purple-to-indigo gradient (#7c3aed → #3730a3)
- CTA button: Hot pink/coral (#e91e8c) — pill shape, white text
- "Preview" button: Mauve (#B97EBB) — rounded
- Accent/underline: Purple (#7c3aed)
- Feature icons: Purple
- Card backgrounds: Near-white (#f8f9fa)
- Body text: Medium gray (#555555)
- Headings: Near-black (#1a1a2e)

### Typography
- Font: Poppins (Google Fonts) — both display and body
- Hero heading: Very large (~56px), white, bold
- Section headings: ~40px, dark
- Nav links: 14px, white, regular weight

### Layout (top to bottom)
1. **Navbar**: Fixed/transparent, logo "Ca." left, nav links center, "Sign Up Free" outlined button right
2. **Hero**: Full-width gradient, heading + subtext left, email input + CTA right, phone mockup far right
3. **Wavy separator**: SVG wave at hero bottom, white fill, curves down
4. **Features ("Why Is It Special")**: White bg, centered heading with purple underline, 3 cards in row (icon + title + description)
5. **About section**: Heading + descriptive text + supporting image
6. **Screenshot section**: App screenshots in a gallery/carousel
7. **Pricing section**: 3 plan cards (Basic/Pro/Enterprise) with prices and features
8. **Testimonials section**: User quotes in cards with avatar, name, role
9. **Team section**: Team member cards with photo, name, role, social links
10. **Contact section**: Contact form (name, email, subject, message, submit)
11. **Footer**: Dark bg, Component Dock link, copyright, nav links

### Key Visual Elements
- Phone mockup in hero: dark-framed device showing a dashboard with donut chart/statistics
- Feature icons: Use lucide-react (phone, rocket, settings/gear)
- Cards: Rounded corners (~8px), subtle shadow, light bg
- CTA buttons: Pill/rounded-full shape throughout
- Wavy SVG: Custom curved path transitioning hero to features

## Implementation Tasks

- [ ] Scaffold `apps/casette` from simplest existing app
- [ ] Set up package.json with `@free-react-templates/casette`
- [ ] Configure vite.config.ts with `injectUiSource()`
- [ ] Set up index.css with Tailwind + theme tokens
- [ ] Set up index.html with Poppins Google Font
- [ ] Create public/CNAME with `casette.free.componentdock.com`
- [ ] Implement Navbar component (transparent, logo, links, CTA)
- [ ] Implement Hero component (gradient, heading, email form, phone mockup)
- [ ] Implement WavySeparator SVG component
- [ ] Implement Features section (heading + 3 cards)
- [ ] Implement About section
- [ ] Implement Screenshot section
- [ ] Implement Pricing section (3 plan cards)
- [ ] Implement Testimonials section
- [ ] Implement Team section
- [ ] Implement Contact section (form with validation)
- [ ] Implement Footer (Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Verify: typecheck + lint + test + build
