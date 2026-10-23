# Artful — Design Notes & Implementation Tasks

## Source
- ColorLib "Five Star": https://colorlib.com/wp/template/five-star/
- Preview: https://preview.colorlib.com/theme/five-star/

## Section Order (from preview DOM)

1. **Navbar** — fixed header, logo left, nav links right (Home, Generic, Elements), hamburger on mobile
2. **Hero Banner** — full-screen, background image, dark overlay, centered heading + subtitle
3. **Experience Section** — 2 image thumbnails (col-3 each) + text content (col-6): heading, subheading, paragraph, "View Details" button
4. **Service Carousel** — dark overlay section, right-aligned carousel (col-6) with prev/next arrows, 3 text slides
5. **Services Grid** — 4-column grid on #f9faff bg, each card: icon (lnr) + title + description
6. **Video Section** — 2-column: left = video thumbnail + play button, right = white heading + text, dark overlay bg
7. **Service Features Row** — 3-column horizontal cards, icon + title + desc, white bg
8. **Contact Section** — 2-column on #f9faff: left = address/email/phone with icons, right = form (name, email, message, send button)
9. **Footer** — dark bg #222, 3 columns: About links, Newsletter + email form, Instafeed (2×4 grid), social icons, copyright bar

## Design Tokens (from css/main.css)

- Brand red: #f5204b
- Body text: #777, Headings: #222
- Font: Poppins (Google Fonts), weights 300/400/500/600
- Button: pill (border-radius 20px), transparent bg, border #eee, hover → bg #f5204b
- Section bg: #f9faff (services, contact), #222 (footer)
- Overlays: rgba(0,0,0,0.75) on banner, video, carousel

## Implementation Tasks

- [ ] Copy simplest existing app, rename package to `@free-react-templates/artful`
- [ ] Set up `public/CNAME` with `artful.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Create `src/index.css` with Tailwind v4 + design tokens (@theme)
- [ ] Load Poppins via Google Fonts `<link>` in index.html
- [ ] Implement Navbar component (logo + nav links + mobile hamburger)
- [ ] Implement Hero component (full-screen bg image, overlay, heading, subtitle)
- [ ] Implement Experience component (2 image thumbs + text + button)
- [ ] Implement ServiceCarousel component (dark overlay, carousel with prev/next)
- [ ] Implement ServicesGrid component (4-column cards, #f9faff bg)
- [ ] Implement VideoSection component (2-col: video thumb + text, overlay)
- [ ] Implement ServiceFeatures component (3-col horizontal cards)
- [ ] Implement Contact component (2-col: info + form, #f9faff bg)
- [ ] Implement Footer component (dark, 3-col: links/newsletter/instafeed, social icons, copyright)
- [ ] Add Component Dock link in footer
- [ ] Use picsum.photos for placeholder images with deterministic seeds
- [ ] Use lucide-react for icons (replace linearicons/font-awesome)
- [ ] Write tests for all components (100% coverage)
- [ ] Run `npm run verify:app artful` — typecheck + lint + tests + build
