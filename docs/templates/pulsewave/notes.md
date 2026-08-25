# Pulsewave — Implementation Notes

## Source

- **ColorLib template:** Unbrew
- **Preview URL:** https://preview.colorlib.com/theme/unbrew/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/unbrew-free-template.jpg

## Design Tokens

- Brand purple: `#553be6` (hero gradient start, CTA buttons)
- Accent lavender: `#a87ffa` (hero gradient end)
- Accent blue: `#1fb6fc` (service hover, icon color)
- Icon bg: `#eff2ff` (service icon background)
- Text dark: `#212529` (headings)
- Text muted: `#88879e` (paragraphs)
- Font: Poppins (Google Fonts)
- Button radius: rounded-full (9999px)
- Card shadow: `0 24px 48px -13px rgba(0,0,0,0.05)`

## Sections (12)

1. Navbar — fixed top, brand, 7 nav links, mobile hamburger
2. Hero — purple gradient, heading, CTA, phone, social icons
3. Services — 6 service cards with hover effect
4. About — image + text + CTA
5. Team — 4 members with social icons
6. Testimonials — carousel with 3 testimonials
7. Features — 4 cards on gradient bg
8. Portfolio — 4 items with hover overlay
9. Pricing — 3 tiers (Basic/Standard/Premium)
10. Blog — 4 post cards
11. Newsletter — email signup on gradient
12. Footer — dark, 4 columns, contact form, Component Dock link

## Components

- `BrandIcons.tsx` — inline SVG social icons (Facebook, Twitter, Instagram, LinkedIn)
- All other sections as individual components
- 63 tests, 100% coverage

## Verification

- Per-app gate: typecheck + lint + knip + fallow + vitest (100% coverage) + build
- All passing
