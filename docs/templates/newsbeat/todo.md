# Newsbeat — Implementation Todo & Design Notes

## Source Mapping

- **ColorLib Source:** "The Hustle Hour" (slug: the-hustle-hour)
- **Preview URL:** https://preview.colorlib.com/theme/the-hustle-hour/ (404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hustlehour-template-1771943880509.jpg
- **Category:** Podcast & Audio
- **New Name:** newsbeat

## Section Order (from top to bottom)

1. **TopBar** — Blue (#1a73e8) bar with social icons (Twitter, Facebook, Instagram)
2. **Header** — Site title "Newsbeat" (Playfair Display serif), nav links right-aligned
3. **Hero** — Headline, description, CTA button "Listen Now"
4. **Features** — 3-column grid with green (#77CC6D) icons, titles, descriptions
5. **Episodes** — Episode archive list with titles, dates, play buttons
6. **Guests** — Guest profile cards with images, names, bios
7. **Newsletter** — Email signup form with distinct background
8. **Pricing** — 3-column pricing cards (Single, Membership, Lifetime)
9. **Footer** — Dark footer with Component Dock link

## Design Fidelity Notes

### Colors
- Brand primary: #1a73e8 (blue) — top bar, links, hover states
- Accent green: #77CC6D — feature icons, accent elements
- Body text: #26282b — primary copy
- Border: #eeeeee — dividers, card borders

### Typography
- Headings: Playfair Display (serif) — elegant, editorial feel
- Body: Poppins (sans-serif) — clean, modern readability
- Body size: 16px, line-height: 1.8em

### Layout
- Max container width: 1140px
- Section padding: 60px vertical
- Feature grid: 3 columns with 30px gap
- Pricing grid: 3 columns with highlighted middle card

### Interactive Elements
- Buttons: rounded (4px radius), padding 12px 24px
- Nav links: uppercase, medium weight, letter-spacing
- Hover states: color transitions to brand-primary

## Implementation Checklist

- [ ] Create apps/newsbeat/ from template starter
- [ ] Install dependencies and verify dev server
- [ ] Implement TopBar component with social icons
- [ ] Implement Header with site title and navigation
- [ ] Implement Hero section with CTA
- [ ] Implement Features section (3-column grid)
- [ ] Implement Episodes archive section
- [ ] Implement Guest profiles section
- [ ] Implement Newsletter signup section
- [ ] Implement Pricing cards section
- [ ] Implement Footer with Component Dock link
- [ ] Add responsive styles (hamburger menu, stacking)
- [ ] Write component tests (100% coverage)
- [ ] Verify typecheck + lint + build
- [ ] Run scripts/verify-app.sh newsbeat
- [ ] Commit as feat: add newsbeat (ColorLib the-hustle-hour) template
- [ ] Open PR and merge
- [ ] Update TEMPLATES.md with [x] marker
