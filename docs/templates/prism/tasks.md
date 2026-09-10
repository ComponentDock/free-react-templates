# Prism — Implementation Notes

Source: ColorLib Bbs (https://colorlib.com/wp/template/bbs/)
Preview: https://preview.colorlib.com/theme/bbs/
New name: prism

## Section Order (1:1 fidelity)

1. **Header** — logo (left) + nav links (Home, Generic, Elements) + hamburger (mobile)
2. **Hero/Banner** — full-height purple gradient bg, decorative translucent circles, "We're Creative" h1 (100px, weight 900), pill "Get Started" button
3. **Features** — 2×2 grid on white bg, each card: icon (top) + h4 title + paragraph
4. **About** — 3-column: title (left) + image (center) + tabs (right) on #f9f9ff bg; tabs: History, Mission & Vision
5. **Video** — bg image + purple overlay (opacity 0.8), heading + play button + paragraph, all white text
6. **Blog** — 3-column cards on white bg, each: bg-image thumbnail + h4 title + paragraph
7. **Story** — solid purple bg (#7034db), h2 "Crafting Our Experiences" + paragraph in white; desktop: right-half bg image
8. **Subscription** — "Subscribe Newsletter" heading, email input (pill shape, 25px radius), "Get Started" button inside input, on #f9f9ff bg
9. **Footer** — dark bg (#333333), nav links, social icons (FA: facebook, twitter, dribbble, behance), copyright + Component Dock link

## Design Token Notes

- Brand purple: radial-gradient `#7539dd` → `#7034db` (banner, video overlay)
- Accent pink: `#f58e9a` (buttons, tab active start, footer hover, list bullets)
- Gradient end: `#fbe44c` (button hover, tab active end)
- Light bg: `#f9f9ff` (about, subscription, inputs)
- Dark footer: `#333333`
- Body text: `#777777`
- Heading text: `#222222`
- Font: Poppins 300/500/600/900
- Button radius: 20px (pill)
- Tab radius: 25px
- Subscription input radius: 25px
- Banner h1: 100px desktop, 60px mobile, weight 900, text-shadow purple

## Implementation Tasks

1. Scaffold `apps/prism` from simplest existing app (copy structure, rename package)
2. Create `src/index.css` with Tailwind + `@theme` tokens:
   - `--color-brand: #7539dd`
   - `--color-brand-dark: #7034db`
   - `--color-accent: #f58e9a`
   - `--color-accent-end: #fbe44c`
   - `--color-light-bg: #f9f9ff`
   - `--color-footer-bg: #333333`
3. Load Poppins via Google Fonts `<link>` in `index.html`
4. Build components in order:
   - `Navbar.tsx` — logo + nav links + hamburger toggle
   - `Hero.tsx` — purple gradient bg, decorative circles, h1 + CTA button
   - `Features.tsx` — 2×2 grid of feature cards with icons
   - `About.tsx` — 3-column layout with tab switching (useState)
   - `Video.tsx` — bg image overlay + play button + text
   - `Blog.tsx` — 3-column blog cards with bg-image thumbnails
   - `Story.tsx` — purple bg, white text, desktop bg image right half
   - `Subscription.tsx` — newsletter form with pill input + button
   - `Footer.tsx` — dark bg, nav links, social icons, copyright + Component Dock link
5. Compose in `App.tsx` in section order
6. Write tests for each component (100% coverage)
7. Verify: `scripts/verify-app.sh prism`

## Fidelity Notes

- Hero decorative circles: use absolutely-positioned translucent purple circles (CSS)
- Tab switching: simple useState with active/inactive styles (no external lib needed)
- Video play button: use a play icon from lucide-react, link to YouTube placeholder
- Blog thumbnails: use `https://picsum.photos/seed/prism-<1|2|3>/400/215`
- About image: use `https://picsum.photos/seed/prism-about/400/300`
- Social icons: lucide-react icons (Facebook, Twitter, Dribbble, Behance — or closest equivalents)
- Footer: MUST link `https://www.componentdock.com/` as "Component Dock"
