# Toolcraft — Design Notes & Tasks

## Source Mapping
- ColorLib source: Handyman (slug: `handyman`)
- Preview URL: https://preview.colorlib.com/theme/handyman/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/handyman-free-template.jpg
- New name: `toolcraft`

## Section Order (fidelity reference)

| # | Section | Layout | Notes |
|---|---------|--------|-------|
| 1 | Navbar | Fixed top, full-width | Logo text left, nav links right. Hamburger on mobile. |
| 2 | Hero | Full-width slider, 3 slides | Dark overlay (~40% opacity). White heading centered. Background images cycle. |
| 3 | Quick Contact | 2-col (5/7 or 6/6) | Left: headline + body + CTA button. Right: form (Name, Email, Subject, Message, Submit). |
| 4 | Services | 3-col grid, 6 cards | Each: SVG icon + title + short description. Bg: #efefef. |
| 5 | Stats/Counter | Full-width, tabbed | 3 tabs: Technology, Quality, Staff. Each shows counter + icon + description. |
| 6 | Testimonials | Single quote | Quote text + client name + source. Light bg. |
| 7 | Projects | Image grid, 3 items | Hover overlay with heart icon. |
| 8 | Blog | 3 post cards | Date, author, title, excerpt per card. Light bg. |
| 9 | Footer | Dark bg, 5-col | About Us (logo + desc) + 4 Quick Links columns. Copyright bar. |

## Design Token Notes

- Brand primary: `#fb7400` (orange) — used for buttons, links, active states
- Brand secondary: `#2e3192` (navy) — used for secondary accents
- Font: Work Sans (Google Fonts), weights 400/500/700
- Button radius: 4px (rounded-sm)
- Card radius: 7px (rounded-lg)
- Body bg alternates: #f6f5f5 / #efefef / white

## Implementation Tasks

- [ ] Create `apps/toolcraft/` (copy from simplest existing app)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `index.html` with Google Fonts preconnect + Work Sans link
- [ ] Create `src/index.css` with Tailwind entry + theme tokens
- [ ] Build Navbar component (sticky, logo, nav links, mobile menu)
- [ ] Build Hero component (slider, overlay, heading)
- [ ] Build QuickContact component (2-col, form)
- [ ] Build Services component (3-col grid, 6 cards)
- [ ] Build StatsCounter component (tabbed counters)
- [ ] Build Testimonials component (quote card)
- [ ] Build Projects component (image grid, hover)
- [ ] Build Blog component (3 post cards)
- [ ] Build Footer component (dark, 5-col, copyright)
- [ ] Compose in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Add `public/CNAME` with `toolcraft.free.componentdock.com`
- [ ] Run `npm install` at repo root for lockfile registration
