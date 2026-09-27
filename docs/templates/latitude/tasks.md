# Latitude — Implementation Notes

**Source:** ColorLib "South" (real estate agency)
**Preview:** https://preview.colorlib.com/theme/south/
**New name:** latitude

## Section Order (fidelity)

1. **Top Header** — email + phone bar (light bg)
2. **Main Header** — logo left, nav links center, search icon right. Sticky on scroll.
3. **Hero Carousel** — full-width background images, centered white headline per slide. Auto-advance.
4. **Advanced Search** — multi-row form: keyword, city/category/offer/listing dropdowns, bedrooms/bathrooms, range sliders, more filters toggle, Search button.
5. **Featured Properties** — 3×2 grid of property cards. Each: image with "For Sale" tag overlay + price badge, below: title, location (brand color), description, meta row (new/bathroom/garage/space icons).
6. **Call to Action** — full-width parallax image, dark overlay, white text: "Are you looking for a place to rent?" + italic subtitle + brand "Search" button.
7. **Testimonials** — carousel of quote slides. Each: heading, blockquote text, author avatar (circle), name, role. Active slide scale(1), inactive scale(0.8). Prev/next arrows.
8. **Agent/Editor** — 50/50 split. Left: agent icon, name, role, bio, phone+email, signature image. Right: full-height agent photo. Light bg (#f1f6f8).
9. **Footer** — 4 columns (About Us, Hours, Useful Links, Featured Properties carousel). Dark overlay bg image. Copyright bar below (#111113).

## Design Notes

- **Brand color #947054** is warm brown/taupe — used on: buttons, property tag border, price badge, location text, section heading underline, footer heading border, testimonial role color, nav active state.
- **Buttons:** square (border-radius 0), uppercase, 50px height, 170px min-width. Hover: black bg. Variant 2: outlined brand color. Variant 3: outlined black.
- **Typography:** Open Sans, weights 300/400/600/700. Headings: 600 weight, #323232. Body: 600 weight, 14px, line-height 2, #7d7d7d.
- **Cards:** border #e1dddd, 30px padding, hover shadow 0 0 50px rgba(0,0,0,0.1).
- **CTA/Footer:** background images with dark overlay (rgba(0,0,0,0.5) or gradient). Fixed attachment on CTA for parallax.
- **Testimonials:** carousel with owl-carousel-style active/inactive scaling.

## Component Breakdown

| Component | File | Notes |
|---|---|---|
| TopHeader | TopHeader.tsx | Email + phone, light neutral bg |
| Navbar | Navbar.tsx | Logo, nav links, mobile hamburger, search toggle |
| Hero | Hero.tsx | Carousel with bg images + headlines |
| AdvancedSearch | AdvancedSearch.tsx | Multi-field form with dropdowns + sliders |
| FeaturedProperties | FeaturedProperties.tsx | 3×2 grid of PropertyCard components |
| PropertyCard | PropertyCard.tsx | Image, tag, price, info, meta icons |
| CallToAction | CallToAction.tsx | Parallax bg, dark overlay, CTA text + button |
| Testimonials | Testimonials.tsx | Carousel with author info |
| AgentSection | AgentSection.tsx | 50/50 split, agent bio + photo |
| Footer | Footer.tsx | 4-column widgets + copyright bar |

## Placeholder Images

Use deterministic picsum.photos seeds:
- Hero slides: `https://picsum.photos/seed/latitude-hero-1/1920/1080`, etc.
- Property cards: `https://picsum.photos/seed/latitude-prop-1/400/300`, etc.
- CTA bg: `https://picsum.photos/seed/latitude-cta/1920/650`
- Agent photo: `https://picsum.photos/seed/latitude-agent/600/800`
- Footer bg: reuse CTA image
- Author avatars: `https://picsum.photos/seed/latitude-author-1/50/50`

## Implementation Tasks

1. Scaffold app: `apps/latitude/` from simplest existing app, rename package
2. Set up index.html with Open Sans Google Font link
3. Configure Tailwind theme tokens (brand color #947054, fonts)
4. Implement TopHeader component
5. Implement Navbar (sticky, mobile menu, search toggle)
6. Implement Hero carousel (auto-advance, centered headlines)
7. Implement AdvancedSearch (dropdowns, range sliders, "More filters" toggle)
8. Implement FeaturedProperties + PropertyCard (3×2 grid, tag, price, meta)
9. Implement CallToAction (parallax bg, dark overlay)
10. Implement Testimonials carousel (scaled active/inactive)
11. Implement AgentSection (50/50 split, bio + contact + signature)
12. Implement Footer (4 columns, copyright bar linking ComponentDock)
13. Compose all in App.tsx
14. Write tests per component (TDD)
15. Verify 100% coverage + typecheck + lint + build
