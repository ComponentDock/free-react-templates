# Spec: Closet — Fashion Boutique Template

Recreation of ColorLib "Little Closet" (https://colorlib.com/wp/template/little-closet/).
Preview: https://preview.colorlib.com/theme/littlecloset/ — ⚠️ Pointer status re-probed 2026-10-13: the slug-only path `/theme/little-closet/` still 404s, but the live demo exists at the alias directory `/theme/littlecloset/` (HTTP 200, 37,967 B). The screenshot is a supporting reference, not the sole one.

## Purpose

Closet is a fashion boutique template with a navbar, hero, popular products, newsletter and footer. It recreates the ColorLib **Little Closet** design (https://colorlib.com/wp/template/little-closet/, preview: https://preview.colorlib.com/theme/littlecloset/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Design Tokens (from screenshot analysis)

- **Brand/primary:** #00b894 (mint green — used for price badges, active tabs, CTAs)
- **Brand dark:** #00a381 (hover state)
- **Ink:** #000000 (dark headings)
- **Body:** #555555 (body text)
- **Mist:** #999999 (muted text)
- **Paper:** #ffffff (page background)
- **Slate:** #f8f8f8 (light section background)
- **Fonts:** "Playfair Display" italic for headings, "Roboto" for body text
- **Buttons:** Rounded, brand-colored with white text; search bar with gray border and rounded corners

## Sections (top to bottom)

1. **Navbar** — White background, shopping bag icon + "Closet" brand text, hamburger menu, centered search bar, right-aligned user icon (with badge), cart icon, phone number
2. **Hero** — Full-width, blurred fashion image background, white italic script text "New Arrivals / Summer Wear", product carousel with 3 visible items (center item prominent with green price badge)
3. **Popular Products** — White background, "Popular on Closet" heading (serif italic), category tabs (Women/Men/Kids/Home Deco), product card grid
4. **Newsletter** — Email signup with icon and subscribe button
5. **Footer** — Dark background, multi-column links, "Made with Component Dock" attribution

## Scenarios

### Navbar

- Renders brand name "Closet"
- Shows search input
- Shows cart icon
- Mobile: hamburger toggles menu

### Hero

- Displays "New Arrivals" heading
- Shows product carousel with navigation arrows
- Left/right arrows change the active slide
- Green price badge visible on center product

### Popular Products

- Shows "Popular on Closet" heading
- Category tabs filter products (Women active by default)
- Product cards show image, name, price

### Newsletter

- Shows email input and subscribe button
- Submitting the form clears the input

### Footer

- Links to Component Dock (https://www.componentdock.com/)
- Shows copyright year
- Multi-column layout with navigation links

## Fidelity Notes

- No screenshot fallback needed: the slug-only preview path 404s, but the live demo is the alias directory `/theme/littlecloset/` (HTTP 200 re-probed 2026-10-13), so the design sheet is authoritative
- Placeholder images via picsum.photos seeded URLs
- No ColorLib assets copied
- Brand icons via inline SVG (lucide-react removed brand icons)
