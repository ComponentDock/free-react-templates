# BriefBox — Implementation Notes

Source: ColorLib "Bbs" (https://colorlib.com/wp/template/bbs/)
Preview: https://preview.colorlib.com/theme/bbs/
New name: briefbox

## Section Order (top to bottom)

1. **Header** — logo left, nav links right (Home / Generic / Elements), hamburger on mobile
2. **Banner / Hero** — centered "We're Creative" uppercase heading + "Get Started" CTA button, background image with gradient
3. **Features** — 2×2 grid of 4 feature cards (icon + title + description), white bg
4. **About** — 3-column: heading left, image center, tabbed content right (History / Mission & Vision), light lavender bg
5. **Video** — full-width, purple radial gradient overlay on bg image, centered heading + play button + description
6. **Blog** — 3 cards in a row (thumb bg image + centered title + description), white bg
7. **Story** — full-width, solid purple bg (#7034db), white heading "Crafting Our Experiences" + white paragraph
8. **Newsletter / Subscription** — centered heading + email input + "Get Started" button, light lavender bg
9. **Footer** — dark gray bg (#333333), centered nav links + social icons + copyright + Component Dock link

## Design Token Notes

- Brand purple: #7034db (story bg, video overlay, accent)
- Primary button gradient: #f58e9a (pink) → #fbe44c (yellow), border-radius 20px
- Tab pills: border-radius 25px, border #eee, active state uses same gradient
- Font: Poppins (300, 500, 600, 900)
- Background light: #f9f9ff (about, newsletter sections)
- Footer dark: #333333
- Text dark: #222222, muted: #777777

## Fidelity Notes

- First wrapper (header through about) is 68.75% width centered — NOT full-width
- Video + blog + story sections ARE full-width (they break out of the centered wrapper)
- Newsletter + footer return to the centered wrapper width
- Banner background is an image (banner.png) — use a placeholder with overlay
- Video section uses a background image with purple radial gradient overlay (opacity 0.8)
- About section uses Bootstrap-style tabs (nav-item toggle), implement with React state
- Blog card thumbnails use background images via inline style — use placeholder images
- Footer has social icons (Facebook, Twitter, Dribbble, Behance) — use lucide-react equivalents
- Replace Colorlib copyright with "Made with Component Dock" linking to componentdock.com

## Component Breakdown

| Component | File | Notes |
|-----------|------|-------|
| Header | `Header.tsx` | Logo + nav + hamburger toggle for mobile |
| Hero | `Hero.tsx` | Background image, gradient overlay, centered text + CTA |
| Features | `Features.tsx` | 2×2 grid of FeatureCard subcomponents |
| About | `About.tsx` | Heading + image + tabbed content (useState for active tab) |
| Video | `Video.tsx` | Background image + purple overlay + play button |
| Blog | `Blog.tsx` | 3 BlogCard subcomponents with bg thumbnails |
| Story | `Story.tsx` | Purple bg section with white text |
| Newsletter | `Newsletter.tsx` | Email input form + submit |
| Footer | `Footer.tsx` | Nav links + social icons + copyright + Component Dock |
