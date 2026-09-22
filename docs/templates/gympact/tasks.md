# Gymphact — Implementation Tasks & Design Notes

## Source
- **ColorLib**: https://colorlib.com/wp/template/gym/
- **Preview**: https://preview.colorlib.com/theme/gym/
- **New name**: `gympact`

## Section Order (implement top → bottom)

1. **Header** — Top bar (tagline/logo/phone) + sticky nav. Use semantic `<header>`, `<nav>`.
2. **Banner/Hero** — Full-width bg image via picsum, dark overlay via `bg-black/50`, uppercase text.
3. **Offer** — 3-column card grid. Each card: icon (lucide-react), h4 title, paragraph.
4. **BMI Calculator** — Colored section (`bg-[#f6214b]`), 2 inputs + button. No actual BMI logic needed — just the form UI.
5. **Top Courses** — 3 cards with thumbnail, badge overlay, title+price row.
6. **Features** — Dark bg (`bg-[#222]`), alternating image+text 2-col layout × 2 rows.
7. **Schedule** — Responsive table. Use `<table>` with `thead`/`tbody`. Bordered rows.
8. **Team** — 4-column grid of trainer cards. Hover reveals social icon overlay (opacity transition).
9. **Pricing** — 3-column cards on `bg-[#f9f9ff]`. Each: header (name+price), description, feature list, CTA button.
10. **Brand Logos** — 5 grayscale logos in a flex row. Use placeholder SVGs or lucide icons.
11. **CTA** — Full-width dark overlay bg, centered white text + button.
12. **Footer** — 3-col layout (About, Contact, Newsletter). Bottom bar with copyright + social icons. MUST link Component Dock.

## Fidelity Notes

- **Font**: Poppins (Google Fonts), weights 300 (body), 600 (headings)
- **Primary button**: `rounded-full`, `bg-[#f6214b]`, `text-white`, `px-8 py-2.5`, hover → white bg + red border + red text
- **Section spacing**: use consistent `py-16` or `py-20` (maps to original `section-gap`)
- **Overlay pattern**: `relative` parent + absolute div with `bg-black/50` + z-0 content at z-10
- **Table**: bordered, light grey header bg, responsive horizontal scroll wrapper
- **Team hover**: `group` + `group-hover:opacity-100` transition on social icon container
- **Pricing cards**: top section with flex row (name left, price right), bottom with feature list + button
- **Images**: `https://picsum.photos/seed/gympact-<n>/<w>/<h>` with deterministic seeds
- **No ColorLib references** in any app file — provenance only in spec + TEMPLATES.md

## Component Map

| Section | Component | Notes |
|---|---|---|
| Header | `Header.tsx` | TopBar + Navbar sub-components |
| Banner | `Banner.tsx` | Full-screen hero with overlay |
| Offer | `Offer.tsx` | 3 ServiceCard components |
| BMI | `BmiCalculator.tsx` | Form with 2 inputs + button |
| Courses | `Courses.tsx` | 3 CourseCard components |
| Features | `Features.tsx` | 2 alternating image+text rows |
| Schedule | `Schedule.tsx` | Table with data array |
| Team | `Team.tsx` | 4 TrainerCard components |
| Pricing | `Pricing.tsx` | 3 PricingCard components |
| Brands | `BrandLogos.tsx` | 5 logo placeholders in flex row |
| CTA | `CallToAction.tsx` | Overlay section with button |
| Footer | `Footer.tsx` | 3-col + bottom bar |
