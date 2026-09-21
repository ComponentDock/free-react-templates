# Skydeck — Implementation Tasks & Design Notes

Source: ColorLib Rooftop (https://preview.colorlib.com/theme/rooftop/)

## Section order (top to bottom)

1. Header / Navbar
2. Hero Banner (full-width dark bg)
3. Fixed side links (View Menu / Book a Table)
4. Menu Area
5. Gallery (staggered 2-col grid)
6. Reservation Form
7. Chef's Quotes
8. Call-to-Action Carousel
9. Contact (map + info)
10. Footer

## Component plan

| Component | File | Notes |
|-----------|------|-------|
| Navbar | `Navbar.tsx` | Centered logo, left links (Home/Menu/About), right nav (Pages dropdown, Blog dropdown, Gallery). Hamburger on mobile. |
| Hero | `Hero.tsx` | Full-width dark bg image, "Skydeck" title, hr divider, subtitle, scroll-down arrow. Fixed side links overlay. |
| MenuSection | `MenuSection.tsx` | 2-col: left = title + desc + CTA button; right = 3 menu categories with items (name, dotted price, description). |
| Gallery | `Gallery.tsx` | 4 images in staggered 2-col grid. First image -480px top margin, third -280px. Hover overlay with zoom icon. |
| Reservation | `Reservation.tsx` | Dark bg section. Left: form (Event Name, Date, Meal, Guests, Budget, Name, Email, Phone, Message + Submit). Right: title + description. |
| ChefQuotes | `ChefQuotes.tsx` | 2-col: left = heading + quote + signature; right = chef portrait. |
| CtaCarousel | `CtaCarousel.tsx` | Horizontal carousel with food image cards + text overlays + nav arrows. Can simplify to static grid. |
| Contact | `Contact.tsx` | 2-col: left = map placeholder; right = name + address + phone + email. |
| Footer | `Footer.tsx` | Dark navy bg. 4 widget columns (links lists). Copyright. Component Dock link. |

## Design notes

- **Buttons**: Sharp corners (border-radius: 0px), uppercase text. Primary: gold bg `#ad9966`, white text. Dark variant: black bg, white text, 1px white border. Hover = transparent bg + gold border + gold text.
- **Fonts**: Playfair Display for all headings (h1, h3, h4). Roboto for body text, nav links, form labels.
- **Gallery offset**: First gallery image pushes up with -480px margin-top. Third image -280px. This creates the staggered editorial look.
- **Fixed side links**: Two fixed-position links on the left side: "View Menu" and "Book a Table". These are decorative/interactive overlays on desktop only.
- **Reservation form**: Dark background section with a 2-col layout. Form on left (7 cols), title block on right (4 cols, offset 1). Uses nice-select custom dropdowns for Meal Preferences and Guests.
- **CTA Carousel**: The original uses Owl Carousel. For React, simplify to a static 2-card grid or a lightweight carousel. Each card: food image + text overlay (title + description).
- **Contact map**: Original uses Google Maps embed. Use a static placeholder div or iframe placeholder.
- **Footer**: Deep navy (#04091e) background. 4 columns of links. Widget headings are uppercase, white, Roboto 500, 18px.
- **Banner**: Full-width background image with a gold-tinted semi-transparent overlay (rgba(173,153,102,0.85)). Centered white text. Height: 750px desktop, 500px mobile.
- **Placeholder images**: Use picsum.photos/seed/skydeck-{1,2,3,4}/{w}/{h} for gallery; skydeck-hero for banner; skydeck-chef for chef portrait; skydeck-cta for CTA cards.

## Implementation order (suggested)

1. Scaffold: copy simplest existing app, rename to `skydeck`, run `npm install`
2. Write Navbar.tsx + Hero.tsx (header + banner)
3. Write MenuSection.tsx
4. Write Gallery.tsx
5. Write Reservation.tsx (form + layout)
6. Write ChefQuotes.tsx
7. Write CtaCarousel.tsx
8. Write Contact.tsx
9. Write Footer.tsx
10. Compose in App.tsx, add index.css theme tokens
11. Tests (Vitest + Testing Library) — 100% coverage
12. Verify: typecheck, lint, build, test:coverage
