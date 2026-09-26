# ProSnap — Implementation Todo

Source: ColorLib Proshoot (https://preview.colorlib.com/theme/proshoot/)
New name: prosnap

## Tasks

- [ ] Scaffold app from an existing template (copy simplest app, rename package)
- [ ] Register workspace: `npm install` at repo root, verify lockfile
- [ ] Create `public/CNAME` with `prosnap.free.componentdock.com`
- [ ] Set `"homepage"` in package.json
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `src/index.css` with Tailwind + theme tokens (#f81c1c brand, Oswald/Roboto)
- [ ] Add Google Fonts link for Oswald + Roboto in `index.html`
- [ ] Build `Navbar` component (logo, nav links, sticky)
- [ ] Build `Hero` component (split layout, headline, CTA, image, social icons)
- [ ] Build `About` component (2-col: image + bio + CTA)
- [ ] Build `Services` component (3×2 grid, 6 service cards with icons)
- [ ] Build `Portfolio` component (masonry grid, hover overlay, View More)
- [ ] Build `Pricing` component (3 cards, feature lists, Book Now)
- [ ] Build `Blog` component (featured post + 3 side posts)
- [ ] Build `Footer` component (3 columns, newsletter form, social icons, copyright)
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests for each component (Vitest + RTL, 100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
- [ ] Commit and push

## Design Notes

### Section Order
1. Navbar (sticky)
2. Hero (fullscreen split)
3. About (2-column)
4. Services (3×2 grid)
5. Portfolio (masonry overlay)
6. Pricing (3 cards)
7. Blog (featured + 3 side)
8. Footer (3 columns + copyright)

### Color Palette
- Brand red: #f81c1c
- Heading dark: #242429
- Body gray: #777777
- White backgrounds on most sections
- No dark sections (all light/white)

### Typography
- Headings: Oswald 600 (all h1-h6)
- Body: Roboto 400, 15px, 1.625 line-height
- Button text: Oswald

### Button Style
- `.primary-btn`: border-radius 0, transparent bg, dark text
- Hover: bg #f81c1c, white text
- Letter-by-letter span animation on hover (can simplify to simple hover)

### Layout Patterns
- Hero: fullscreen height, container-fluid, 4-col text + 7-col image offset
- About: 5-col image + 5-col text with offset
- Services: 3-col cards (col-lg-4 col-md-6)
- Portfolio: masonry-like with 8-col + 4-col items
- Pricing: 3-col cards (col-lg-4 col-md-6)
- Blog: 6-col featured + 6-col side posts (each 6-col row inside)
- Footer: 5-col + 5-col + 2-col

### Responsive Breakpoints
- Desktop: >991px (140px section padding)
- Tablet: 768-991px (70px section padding)
- Mobile: <768px (stack columns)
