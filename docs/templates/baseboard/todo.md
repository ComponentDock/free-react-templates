# Baseboard — Design Notes & Task Outline

**Source:** ColorLib Bootstrap Footer 01
**Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-01/
**New name:** baseboard
**Category:** Footer

## Structure Order (top to bottom)

1. **CTA Banner** — floating above footer, purple background, diagonal shadow
   - h2: "Ready for a next project?"
   - h3: "Let's get started!"
   - Button: "Contact us" (dark, square corners)
   - Position: relative, top: -150px (overlap above footer)
   - Shadow: -20px -20px 0 0 rgba(52,58,64,0.2)

2. **Footer Grid** — 5 columns on dark navy (#141d2a)
   - Col 1: Logo (uppercase, white, 20px, letter-spacing) + Copyright (#666873)
   - Col 2: "Customers" heading + links (Buyer, Supplier)
   - Col 3: "Company" heading + links (About us, Careers, Contact us)
   - Col 4: "Further Information" heading + links (Terms & Conditions, Privacy Policy)
   - Col 5: "Follow us" heading + 5 social icon circles

## Section-by-Section Fidelity Notes

### CTA Banner
- Full-width, flex row, items-center, justify between
- Purple bg (#8186d5), padding 20px inside, px-5 for content
- h2 is white, h3 is dark (Bootstrap text-dark = #343a40)
- Button: btn-dark, rounded-0, py-3, px-5
- The negative top offset (-150px) makes it float above the footer top edge
- Box shadow creates the diagonal offset shadow effect

### Footer Body
- Dark navy background (#141d2a), white text
- Padding: 7rem 0 (original CSS)
- Container width matches Bootstrap container (1140px)
- 5 columns: col-sm for first 4, col-md-3 for social

### Column 1 — Logo + Copyright
- Logo: white, uppercase, 20px, letter-spacing 0.1rem
- Copyright: small tag, muted grey (#666873)

### Columns 2-4 — Link Lists
- h3: 16px, margin-bottom 10px, line-height 1.5
- ul.list-unstyled, li margin-bottom 10px
- Links: #666873, hover to #fff, transition 0.3s ease

### Column 5 — Social Icons
- "Follow us" heading
- 5 inline-block circular buttons (40x40px, border-radius 50%)
- Background: #8186d5 (same as CTA)
- Icons: white, centered via absolute positioning + transform
- Original uses icomoon icon font (facebook, twitter, linkedin, medium, paper-plane)
- Recreate with lucide-react equivalents: Facebook, Twitter, Linkedin, Send, Rss

## Implementation Tasks

- [ ] Create apps/baseboard with standard Vite+React+Tailwind scaffold
- [ ] Create src/components/CtaBanner.tsx
- [ ] Create src/components/FooterGrid.tsx
- [ ] Create src/components/FooterLogo.tsx
- [ ] Create src/components/FooterColumn.tsx
- [ ] Create src/components/SocialIcons.tsx
- [ ] Create src/App.tsx composing CtaBanner + FooterGrid
- [ ] Add Roboto font via Google Fonts in index.html
- [ ] Configure Tailwind theme tokens for brand colors
- [ ] Write tests for each component
- [ ] Verify responsive layout (mobile stacking)
- [ ] Add Component Dock footer link
- [ ] Run 100% coverage tests
- [ ] Build verification
