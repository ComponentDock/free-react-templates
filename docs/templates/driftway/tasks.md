# Driftway — Implementation Tasks

Source: ColorLib "Cruise" (https://colorlib.com/wp/template/cruise/)
Preview: https://preview.colorlib.com/theme/cruise/
New name: Driftway

## Task List

### 1. Project Setup
- [ ] Create `apps/driftway/` by copying simplest existing app
- [ ] Rename package to `@free-react-templates/driftway`
- [ ] Create `public/CNAME` with `driftway.free.componentdock.com`
- [ ] Set `"homepage"` in package.json to `https://driftway.free.componentdock.com`
- [ ] Add Google Fonts link for DM Sans (300, 400, 700) in `index.html`
- [ ] Configure `vite.config.ts` with `injectUiSource()`

### 2. Design Tokens (index.css)
- [ ] Set `--color-primary: #ff5533` in `@theme`
- [ ] Set `--color-text-dark: #364d59`
- [ ] Set `--color-black: #000`
- [ ] Set `--color-bg-light: #f8f9fa`
- [ ] Set font family to DM Sans via Tailwind theme

### 3. Section Components (build order)
- [ ] `Navbar.tsx` — transparent absolute navbar, logo centered, nav links split left/right, mobile hamburger
- [ ] `Hero.tsx` — full-width background image, dark overlay, centered headline + subtitle
- [ ] `WhatWeDo.tsx` — centered section header + 3 feature cards (image + title + desc + "Learn More")
- [ ] `OurFeatures.tsx` — centered header + 2 split-image rows with numbered captions, alternating layout
- [ ] `DesignFuture.tsx` — centered header + 2x2 feature grid (title + description)
- [ ] `Testimonial.tsx` — dark overlay bg, blockquote with icon, text, author
- [ ] `BlogPosts.tsx` — bg-light, 4-column card grid (image + date + title + "Read More")
- [ ] `Footer.tsx` — dark bg, About Us + Features links + newsletter form + social icons + Component Dock link

### 4. App Composition
- [ ] `App.tsx` — compose all sections in order
- [ ] `main.tsx` — entry point (excluded from coverage)

### 5. Testing (TDD)
- [ ] Write tests for each component (100% coverage)
- [ ] Navbar: logo visible, nav links rendered, mobile toggle works
- [ ] Hero: headline and subtitle rendered
- [ ] WhatWeDo: 3 cards rendered with correct content
- [ ] OurFeatures: 2 rows with alternating layout
- [ ] DesignFuture: 4 feature items rendered
- [ ] Testimonial: quote, author rendered
- [ ] BlogPosts: 4 cards rendered
- [ ] Footer: links, form, Component Dock link present

### 6. Verification
- [ ] `npm run verify:app driftway` passes (typecheck + lint + coverage + build)
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] Deploy URL: https://driftway.free.componentdock.com

## Design Notes

### Structure Order
1. Navbar (transparent, absolute over hero)
2. Hero (full-width image + overlay)
3. What We Do (3 feature cards)
4. Our Features (2 split-image rows)
5. Design for the Future (2x2 grid)
6. Testimonial (blockquote on dark overlay)
7. Blog (4 cards on light bg)
8. Footer (dark bg, 2-column)

### Fidelity Notes

- **Navbar**: Transparent/absolute over the hero background. Logo is centered; nav links are split to left and right sides. On mobile, a hamburger menu slides a panel from the right. Active link uses primary color (#ff5533).

- **Hero**: Full-width background image with dark overlay. Centered white headline and subtitle text. The overlay should allow the background image to show through while maintaining readability.

- **What We Do**: Standard centered section header with primary-colored subtitle ("What We Do"). 3 equal-width feature cards each with: image at top, title, description, and "Learn More" link in primary color.

- **Our Features**: Large image + text split rows. The first row has image left (9 cols) + text right (3 cols). The second row reverses (text left + image right). Each has a numbered caption ("01.", "02.") in primary color.

- **Design for the Future**: 2x2 grid of simple text features (title + description). No images in this section.

- **Testimonial**: Full-width section with dark overlay background image. Centered blockquote with a large quote icon (use lucide-react `Quote`), testimonial text, and author citation (name in bold + title in muted).

- **Blog**: Light gray background (`bg-light`). 4 equal-width blog cards with: image, date meta, title, and "Read More" link in primary color. Cards should have consistent height.

- **Footer**: Black background, generous padding. Left side: "About Us" text + "Features" link list. Right side: newsletter email subscribe form + social media icon links. Bottom bar: copyright with Component Dock link.
