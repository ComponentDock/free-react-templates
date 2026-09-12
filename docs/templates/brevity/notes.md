# Brevity — Implementation Notes

Source: ColorLib Evans (https://colorlib.com/wp/template/evans/)
Preview: https://preview.colorlib.com/theme/evans/

## Section order (fidelity to original)

1. **Navbar** — fixed/absolute top nav with site name + links (About, Work, Contact)
2. **Hero** — full-viewport dark section, large vertical "Barlow Condensed" title text (90vw font-size in original), background image or solid dark
3. **Intro** — two-column layout: left = personal title/role, right = descriptive paragraph. "Lora" serif font
4. **Services** — four service cards in a row: Web Design, Web Development, Graphic Design, Writing. Each with heading + short description. Responsive: 2-col on tablet, 1-col on mobile
5. **Portfolio** — "Latest & Greatest" heading, 6 portfolio items in a grid. Each item: category tag, date, title, description, "View Portfolio" link. Hover effects (overlay/opacity). Responsive grid
6. **Footer** — dark background (#1d2124), four columns: About Us, Information (Portfolio/Privacy/Terms), Links (Home/About/Work/Contact), Have a Questions? (address/phone/email). Component Dock link

## Component breakdown

| Component | File | Notes |
|---|---|---|
| Navbar | `src/components/Navbar.tsx` | Fixed position, transparent on hero, solid on scroll (optional) |
| Hero | `src/components/Hero.tsx` | Full-viewport, vertical text with CSS transform or writing-mode |
| Intro | `src/components/Intro.tsx` | Two-column grid, left-aligned text |
| Services | `src/components/Services.tsx` | 4-column grid, responsive. Each service: heading + description |
| Portfolio | `src/components/Portfolio.tsx` | Grid of 6 items. Each: image (picsum), overlay with category/date/title/description/link |
| Footer | `src/components/Footer.tsx` | Dark bg, 4-column grid, Component Dock link |

## Design fidelity notes

- **Hero vertical text**: Original uses `font-size: 41vw` with `Barlow Condensed` at weight 900, absolute positioned and vertically centered. In React, use CSS with `writing-mode: vertical-rl` or a very large font-size with transform
- **Color palette**: Black hero (#000), golden accent (#fdcb6e), blue primary (#007bff), dark footer (#1d2124)
- **Fonts**: Load Barlow Condensed, Lora, and Poppins via Google Fonts `<link>` in index.html
- **Buttons**: Bootstrap-style with sharp corners (border-radius: 0), blue bg, white text
- **Portfolio items**: Each shows a category tag (e.g. "Web Design {12/06/2019}"), title, description, and "View Portfolio" link. Hover effect darkens overlay
- **Footer columns**: 4 equal columns on desktop, stacked on mobile
- **Spacing**: Sections use generous vertical padding (py-5 in Bootstrap terms, ~3rem)

## Tasks

1. Set up app scaffold (copy simplest existing app, rename to brevity)
2. Load Google Fonts in index.html (Barlow Condensed, Lora, Poppins)
3. Configure Tailwind theme with design tokens (brand gold, hero black, footer dark)
4. Implement Navbar component
5. Implement Hero component (vertical text, dark bg, nav)
6. Implement Intro component (two-column)
7. Implement Services component (4 cards)
8. Implement Portfolio component (6-item grid with hover)
9. Implement Footer component (4 columns, Component Dock link)
10. Write tests for all components (100% coverage)
11. Build and verify
