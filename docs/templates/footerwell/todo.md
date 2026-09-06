# FooterWell — Design Notes & Task Outline

## Source Mapping

- **ColorLib source:** Bootstrap Footer 12
- **ColorLib URL:** https://colorlib.com/wp/template/bootstrap-footer-12/
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-12/
- **New name:** footerwell
- **App path:** apps/footerwell

## Section Order (top to bottom)

1. **Section heading area** — light gray (#f8f8f8) background, centered "Footer #02" heading, 12em vertical padding
2. **Subscribe form** — floating above footer (negative margin -105px), pill-shaped white container with email input + golden "Subscribe" button
3. **Footer** — dark charcoal (#131719) background, 5em vertical padding:
   - Row 1: Brand column (logo + description + "read more") | 4 nav columns (Discover, About, Resources, Social) with left border dividers
   - Row 2: Partner strip (horizontal borders, "Our Partner:", 6 company links, "See All" button)
   - Row 3: Copyright bar (copyright text left, Terms/Privacy/Compliances right)
4. **Copyright + legal links** — inside footer, last row

## Fidelity Notes

### Overall aesthetic
- Very dark charcoal footer (#131719) with warm gold/tan accent (#bba387 / #bfa88e)
- Clean, minimal design with subtle borders between columns
- Floating subscribe form creates visual interest at the footer boundary
- Poppins font throughout

### Key design details
- Subscribe form floats above the footer with -105px top margin
- Form container: white bg, 40px border-radius (pill), 3px internal padding, subtle upward shadow
- Subscribe button: golden-tan (#bfa88e), 150×56px, pill-shaped, uppercase, letter-spacing 1px
- Brand logo: "Colorlib.com" in white, uppercase (replace with template name)
- Nav columns separated by 1px left borders in rgba(255,255,255,0.05) — very subtle
- Borders hidden below 1200px (mobile/tablet)
- Partner section: horizontal top/bottom borders, 6 inline company links with icons
- Copyright: rgba(255,255,255,0.4), 14px, left-aligned; legal links right-aligned

### Assets to replace
- Icons: replace Ionicons with Lucide React (arrow-round-forward → ArrowRight, heart → Heart, ionic → Building2 or similar)
- Partner company icons: use generic Building2 or similar Lucide icons
- No images needed (no thumbnails in this template)

### Responsive behavior
- Two main columns (brand + nav grid) on desktop
- Stack to single column on mobile
- Column border dividers disappear below 1200px
- Subscribe form stays centered, adjusts width

## Implementation Tasks

1. [ ] Scaffold apps/footerwell from simplest existing app
2. [ ] Rename package to @free-react-templates/footerwell
3. [ ] Add Poppins font link to index.html
4. [ ] Create SectionHeading component (#f8f8f8, centered heading)
5. [ ] Create SubscribeForm component (floating pill, email input + button)
6. [ ] Create Footer component (dark charcoal bg, padding)
7. [ ] Create BrandColumn component (logo, description, "read more" link)
8. [ ] Create NavColumns component (4 bordered columns: Discover, About, Resources, Social)
9. [ ] Create PartnerStrip component (horizontal borders, company links, "See All")
10. [ ] Create CopyrightBar component (copyright left, legal links right)
11. [ ] Add responsive breakpoints (hide dividers < 1200px)
12. [ ] Write component tests (100% coverage)
13. [ ] Run verify-app.sh, fix any issues
14. [ ] Commit and push
