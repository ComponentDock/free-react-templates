# FooterCove — Design Notes & Task Outline

## Source Mapping

- **ColorLib source:** Bootstrap Footer 11
- **ColorLib URL:** https://colorlib.com/wp/template/bootstrap-footer-11/
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-11/
- **New name:** footercove
- **App path:** apps/footercove

## Section Order (top to bottom)

1. **Section heading area** — light gray (#f8f8f8) background, centered "Footer #01" heading, 12em vertical padding
2. **Footer** — dark navy (#0d1824) background, 7em vertical padding, 4-column grid:
   - Col 1: Brand name + description + 3 social icons
   - Col 2: "Latest News" — 2 blog post cards with thumbnails + meta
   - Col 3: "Quick Links" — 6 nav links
   - Col 4: "Have a Questions?" — address, phone, email with icons
3. **Copyright bar** — centered, #999999 text, dynamic year, links to Component Dock

## Fidelity Notes

### Overall aesthetic
- Dark navy footer (#0d1824) with purple (#7f72e4) accent color throughout
- Decorative blob SVG in top-left of footer (absolute positioned, z-index behind content)
- Poppins font (weights 300–900)
- Clean, professional look with clear visual hierarchy

### Key design details
- Footer headings have a 40px × 2px purple underline (via ::after pseudo-element)
- Social icons: 40×40px circles, purple background, white icon, circular shape
- Social icons use Ionicons (replace with Lucide React equivalents)
- News cards: thumbnail image on left (rounded corners), heading + meta on right
- Contact items: icon on left, text on right, inline layout
- Body text in footer uses rgba(255,255,255,0.6) — not full white
- Nav links use rgba(255,255,255,0.7) — slightly brighter than body text

### Assets to replace
- Images: use `https://picsum.photos/seed/footercove-1/60x60` and `seed/footercove-2/60x60` for news thumbnails
- Icons: replace Ionicons with Lucide React (Twitter→X or equivalent, Facebook, Instagram, Calendar, User, MessageCircle, MapPin, Phone, Mail)
- SVG blob: simplify to a CSS gradient or omit — the blob is decorative and non-essential

### Responsive behavior
- 4 columns on desktop (md/lg+), 2 columns on tablet, single column on mobile
- Social icons wrap naturally
- News cards stack vertically on small screens

## Implementation Tasks

1. [ ] Scaffold apps/footercove from simplest existing app
2. [ ] Rename package to @free-react-templates/footercove
3. [ ] Add Poppins font link to index.html
4. [ ] Create SectionHeading component (#f8f8f8, centered heading)
5. [ ] Create Footer component (dark navy bg, 4-column grid)
6. [ ] Create BrandColumn component (name, description, social icons)
7. [ ] Create NewsColumn component (2 thumbnail cards)
8. [ ] Create QuickLinksColumn component (6 nav items)
9. [ ] Create ContactColumn component (address, phone, email)
10. [ ] Create CopyrightBar component (centered, #999999, Component Dock link)
11. [ ] Create HeadingUnderline component (40px × 2px purple bar)
12. [ ] Add responsive grid breakpoints
13. [ ] Add decorative SVG blob (or CSS alternative)
14. [ ] Write component tests (100% coverage)
15. [ ] Run verify-app.sh, fix any issues
16. [ ] Commit and push
