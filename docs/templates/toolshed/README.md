# Toolshed — Design Notes & Task Outline

## Source
- ColorLib slug: `tools-ui-kit`
- URL: https://colorlib.com/wp/template/tools-ui-kit/
- Preview: https://preview.colorlib.com/theme/tools-ui-kit/ (404 — screenshot-only reference)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/tools-free-template.jpg

## Design Tokens Captured
- Hero gradient: `from-blue-500 to-blue-300` (approx #4A6CF7 → #60A5FA)
- Brand primary: #4A6CF7 (vibrant blue)
- Hero text: white, centered
- Body bg: white (#FFFFFF)
- Body text: dark gray (#333333)
- Font: Poppins or similar clean sans-serif
- Buttons: pill-shaped (rounded-full), white on hero, blue in body
- Social icons: Facebook, Twitter, Instagram (use lucide-react equivalents)

## Section Order (top → bottom)
1. **Navbar** — transparent overlay on hero, logo left, nav items right (COMPONENTS dropdown, Download link, social icons)
2. **Hero** — full-width blue gradient, centered heading + subtitle + CTA button with cloud icon
3. **Basic Elements / Buttons** — white background, heading + subheading + description + button style showcase (multiple sizes/variants in brand blue)
4. **(Additional sections below fold — not visible in truncated screenshot; add typographic elements, form elements, etc. as typical UI kit sections)**
5. **Footer** — dark background, Component Dock attribution link

## Implementation Notes
- Use Tailwind `@theme` to define the brand blue as a custom color
- Hero: full-viewport-height or generous min-h, flexbox centered
- Navbar: fixed/sticky, transparent background, white text, backdrop blur on scroll
- Social icons: use lucide-react (Facebook → ExternalLink, Twitter → Twitter, Instagram → Instagram or similar)
- Button variants: solid blue, outline blue, white, sizes sm/md/lg — all pill-shaped
- Placeholder images: `https://picsum.photos/seed/toolshed-<n>/<w>/<h>`
- No ColorLib references anywhere in app code — all provenance in spec only

## Task Outline
1. [ ] Scaffold app folder `apps/toolshed` (copy simplest existing app, rename package)
2. [ ] Create `src/components/Navbar.tsx` — transparent overlay, logo, nav links, social icons
3. [ ] Create `src/components/Hero.tsx` — gradient bg, heading, subtitle, CTA button
4. [ ] Create `src/components/BasicElements.tsx` — section heading, buttons showcase
5. [ ] Create `src/components/Footer.tsx` — dark bg, Component Dock link
6. [ ] Compose sections in `src/App.tsx`
7. [ ] Write tests for each component (100% coverage)
8. [ ] Run `scripts/verify-app.sh toolshed`
9. [ ] Set `public/CNAME` to `toolshed.free.componentdock.com`
10. [ ] Commit and push
