# Daybeam — Implementation Tasks & Design Notes

Source: ColorLib Sun — https://colorlib.com/wp/template/sun/
Preview: https://preview.colorlib.com/theme/sun/
New name: daybeam

## Section structure (in order)

1. **Navbar** — Logo left, horizontal nav right (Home, About, Portfolio, Blog, Contact), search toggle icon
2. **Portfolio** — Intro text paragraph, filter button row (All/Post/Image/Video/Extern), 3-column masonry grid with image items and text overlays
3. **AboutText** — Two-column layout: "The Story" left, "Dreamers" right with "More…" CTA
4. **Footer** — Copyright left, centered logo, social links (Twitter, Linkedin, Dribbble, Instagram) right, Component Dock attribution

## Component plan

- `src/components/Navbar.tsx` — fixed/sticky header, logo img, nav links, search icon toggle
- `src/components/SearchOverlay.tsx` — full-width search input overlay, toggled by Navbar
- `src/components/Portfolio.tsx` — intro text, filter buttons, masonry grid
- `src/components/PortfolioItem.tsx` — single grid item: image + text overlay
- `src/components/FilterButtons.tsx` — row of filter buttons with active state
- `src/components/AboutText.tsx` — two-column text section
- `src/components/Footer.tsx` — 3-part footer with Component Dock link

## Design fidelity notes

- **Colors:** Brand #FD3137 used aggressively — links, buttons, active filters, portfolio overlays, footer text. Background #E2E0E0 (body), #FAF6F6 (portfolio section), white (content area).
- **Typography:** Montserrat for body/nav/headings (400, 700). PT Serif for specific content elements (serif text within two-column section).
- **Layout:** 1330px max-width centered. Portfolio grid is 3-column masonry (isotope-style). Two-column text uses float/half-width pattern.
- **Buttons:** Filter buttons are text-only (no background), brand color when active, thin border separator (#e2dfd9). "More…" button in AboutText section.
- **Portfolio items:** Each has an image + centered text overlay. Items are categorized (post, image, video, extern) for filtering.
- **Footer:** Simple 3-column flex — copyright, centered logo, social link list. No background color change (continues body bg).
- **Search:** Toggle icon in header opens a full-width search bar with #E2E0E0 background.

## Implementation order

1. Scaffold app from existing template (copy simplest app, rename)
2. Set up theme tokens in `index.css` (`@theme` block with brand colors)
3. Build Navbar + SearchOverlay
4. Build Portfolio section with FilterButtons + masonry grid
5. Build AboutText two-column section
6. Build Footer with Component Dock link
7. Compose all sections in App.tsx
8. Write tests (Vitest + Testing Library) — TDD
9. Run verify-app.sh, ensure 100% coverage
10. Update CNAME, homepage, README status
