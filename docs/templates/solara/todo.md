# Solara — Design Notes & Tasks

Source: ColorLib "Sun" (https://colorlib.com/wp/template/sun/)
Preview: https://preview.colorlib.com/theme/sun/

## Section order (1:1 with original)

1. **Header** — Logo left, nav right (Home w/ dropdown, About, Portfolio, Blog, Contact w/ dropdown), search icon toggle
2. **Search overlay** — Full-width gray (#E2E0E0) overlay with centered search input
3. **Portfolio intro** — Page description text (right-aligned, max 925px, 24px font)
4. **Portfolio filters** — Right-aligned inline text buttons (All · Post · Image · Video · Extern) with bullet separators; active in brand red
5. **Portfolio grid** — 3-column masonry grid (Isotope-style), 6 items with images; on hover, white overlay appears with centered item title (item names: CLOCK, BAG, FISH, BOTTLE, PAPER, BLUE ICE)
6. **Two-column text** — "The Story" (left half) + "Dreamers" (right half) with paragraphs and "More…" CTA button
7. **Footer** — Three-column: copyright left, logo center, social links (Twitter, Linkedin, Dribbble, Instagram) right; heart icon animated pulse

## Fidelity notes

- **Brand red #FD3137** is the single accent color used everywhere: nav links, filter active state, button borders, blockquote left border, heart icon. No other accent colors.
- **Square buttons** — CTA buttons have no border-radius; 3px solid border with hover fill.
- **Font pairing**: Montserrat (400/700) for headings, nav, UI. PT Serif for blog post prose (not used on homepage).
- **Portfolio overlay**: white bg with 30px inset, hidden by default, shown on hover. Title text centered vertically.
- **Header is generous**: 150px top/bottom padding on desktop.
- **Footer margin**: 260px top margin creates significant whitespace before footer.
- **No parallax or hero image** — the homepage is a clean white portfolio layout with no hero section.
- **Responsive**: Two-column → single column at 1020px. Portfolio grid adjusts columns.
- Use `picsum.photos/seed/solara-<n>/443/443` for portfolio placeholder images (deterministic).

## Implementation tasks

- [ ] Scaffold `apps/solara` from simplest existing app
- [ ] Set up package.json, vite.config.ts, index.html with Google Fonts
- [ ] Create index.css with Tailwind + custom tokens (@theme for brand red)
- [ ] Implement Navbar component (logo, nav links, search toggle, dropdowns)
- [ ] Implement SearchOverlay component
- [ ] Implement PortfolioFilters component (filter buttons with active state)
- [ ] Implement PortfolioGrid component (3-col grid, hover overlay)
- [ ] Implement TwoColumnText component ("The Story" / "Dreamers" + CTA)
- [ ] Implement Footer component (copyright, logo, social links, Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests (Vitest + RTL) for all components
- [ ] Verify 100% coverage, typecheck, lint, build
- [ ] Set public/CNAME, package name @free-react-templates/solara
