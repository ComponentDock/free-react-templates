# GiveHope — Implementation Tasks & Design Notes

**Source:** ColorLib "Bcharity" → https://preview.colorlib.com/theme/bcharity/
**New name:** GiveHope (apps/givehope)
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section Order (top to bottom)

1. **Navbar** — transparent overlay on hero; logo left, nav links right,
   desktop "learn more" outline button, mobile hamburger
2. **Hero Banner** — full-width bg image, 950px (750px mobile), right-
   aligned h1 "Bless others with your gift", paragraph, green CTA button
3. **Features** — "Awesome Feature" / "How Could You Help" section title,
   2×2 grid of 4 cards (icon + h4 + description)
4. **"Be a Part" Callout** — parallax bg image, left text block (h2 +
   paragraph + button), right image
5. **Counter Stats** — 4 items in a row (icon + label + animated number)
6. **Featured Causes** — "Donation shows Passion" / "Featured causes",
   3 cause cards with progress bars + goal/raised amounts
7. **CTA Banner** — full-width bg image, centered h2 + green button
8. **Volunteers** — "volunteers" / "Expert Volunteers", 4 team cards
   with social icon overlays
9. **Blog** — "OUr blog" / "Every Single Update", featured post left +
   2 smaller posts right
10. **Footer** — dark #0d101d, 3 columns (logo/about, newsletter, contact),
    copyright bar with Component Dock link

## Design Notes

### Colors
- Brand green: `#00c424` — buttons, links, progress bars, hover states
- Dark navy: `#0d101d` — footer bg, overlay areas
- Heading color: `#14182d`
- Body text: `#7f7f7f`
- Section subtitles: `#b3b4b3` (uppercase, 13px, letter-spacing 3px)
- Light bg: `#f2f5f3`
- Border: `#e9ebec`

### Typography
- Headings: Playfair Display (400, 700) — serif
- Body: Roboto (300, 400, 500, 700) — sans-serif, 14px base

### Buttons
- All buttons are pill-shaped (border-radius: 50px)
- .btn_2: solid green bg, white text, 160px wide, centered
- .btn_1: green border, black text, transparent bg → green bg on hover
- .btn_3: #e9ebec border, dark text → green bg on hover

### Section Spacing
- Major sections: 140px top/bottom padding
- Section titles: centered, uppercase subtitle (13px, letter-spacing 3px)
  + bold heading (42px desktop, 25px mobile)

### Implementation Notes
- Use `https://picsum.photos/seed/givehope-<n>/<w>/<h>` for placeholder
  images (hero banner, feature icons, cause cards, volunteer photos,
  blog images, CTA background)
- Use lucide-react icons instead of Themify/Flaticon
- CounterUp animation can be implemented with Intersection Observer +
  requestAnimationFrame (no jQuery dependency)
- Progress bars in cause cards: animated on scroll with CSS transitions
- Newsletter form: mock submit (no real endpoint)
- Social icon overlays on volunteer cards: show on hover with transition

## Tasks

- [ ] Scaffold app: copy simplest existing app, rename to givehope
- [ ] Create index.css with Tailwind @theme tokens (brand green, dark, fonts)
- [ ] Implement Navbar component (transparent, responsive, mobile menu)
- [ ] Implement Hero component (bg image, text alignment, CTA button)
- [ ] Implement Features component (2×2 grid, icons, section title)
- [ ] Implement BePart component (parallax bg, text + image layout)
- [ ] Implement Counter component (4 stats, animated numbers)
- [ ] Implement FeaturedCauses component (3 cards, progress bars)
- [ ] Implement CtaBanner component (bg image, centered text + button)
- [ ] Implement Volunteers component (4 cards, social overlays)
- [ ] Implement Blog component (featured + side posts layout)
- [ ] Implement Footer component (3 columns, newsletter, contact, attribution)
- [ ] Write tests for all components (100% coverage)
- [ ] Run verify:app and fix any issues
- [ ] Update TEMPLATES.md
- [ ] Commit, push, open PR, merge
