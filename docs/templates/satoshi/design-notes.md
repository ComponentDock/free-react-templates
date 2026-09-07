# Satoshi — Design Notes

**Source:** ColorLib "Bitcoin" (slug: `bitcoin`)
**Preview:** https://preview.colorlib.com/theme/bitcoin/
**New name:** `satoshi`

## Section Order (top → bottom)

1. **Header/Nav** — Fixed, transparent → dark on scroll. Logo left, nav links right (Home, Convert, Feature, Price, Blog). Mobile: hamburger + slide-out menu.

2. **Banner Hero** — Full-width dark overlay on background image. Center-aligned: small heading "Currently Purchase Rate", large price "$12,356", paragraph, "Buy Bitcoin" gradient CTA button. Button radius: 3px here (not the default 25px).

3. **Currency Converter** — Gradient-background card floating over the hero (negative margin). Heading "The Currency Converter", Bitcoin icon image, 4 input fields (feet/pounds/inches/pounds), "Calculate Your BMI" button. Inputs have transparent bg, white text, gold border.

4. **Simple Services** — 3-column cards on white bg. Each: icon image, title link (h4), paragraph. Section gap (120px padding).

5. **About Us** — Split layout, dark charcoal (#222) bg. Left: image carousel (Owl Carousel style — use a static image or simple carousel). Right: small icon image, h1 heading, paragraph. Full-width container-fluid.

6. **Features** — 4-column grid (2×2 on medium). Section heading "Why choose us during purchase bitcoin" + subtitle. Each card: Linearicons icon in span, h4 title, paragraph. Hover turns title orange.

7. **Statistics** — Split layout, light off-white (#f9f9ff) bg. Left: chart image. Right: h1 heading "Ups and Downs of Bitcoin (Realtime)", paragraph, "View Details" button.

8. **Call to Action** — Gradient background (same yellow-to-orange as buttons). White text, h1 heading "Huge Transaction in last Week", paragraph, "Buy Bitcoin Now!" white button.

9. **Pricing** — 3 pricing cards in a row. Each: top area (coin name), description, bottom area with large price (h1 with $ span) and "Get Started" button. Middle card gets gradient button; others get dark (#222) button. Cards have border and hover effect.

10. **Blog** — 3-column blog cards. Each: thumbnail image, h4 title, paragraph, author row (avatar image + name + date).

11. **Footer** — Dark navy (#04091e) bg, 4-column grid (About Us text, Top Products links, Newsletter form with email input + arrow button). Bottom bar: copyright + social icons (Facebook, Twitter, Dribbble, Behance). Replace Colorlib attribution with Component Dock link.

## Fidelity Notes

- **Gradient buttons** are the signature element: `linear-gradient(0deg, #f3c400, #f88845)`. Apply via Tailwind `@theme` custom color or inline style.
- **Banner overlay** uses a dark navy rgba: `rgba(4, 9, 30, 0.85)`.
- **Section gap** is generous: 120px vertical padding on most sections.
- **Convert area** floats above the hero with negative margin (`margin-top: -105px`) and `z-index: 2`. This is a key visual detail.
- **About section** uses `container-fluid` (full-width) unlike other container-based sections.
- **Pricing cards** have a subtle top/bottom color split: `#fbfcff` top, `#f9f9ff` bottom with an inset margin on the bottom area.
- **Footer newsletter** input has dark bg `#1e2235` with rounded corners (20px radius).
- **Font weights**: headings 600, body 300, nav links 400.
- Use `lucide-react` icons as replacements for Linearicons (`lnr-user` → User, `lnr-license` → Award, `lnr-phone` → Phone, etc.).
- Placeholder images via `picsum.photos/seed/satoshi-<n>/<w>/<h>`.
- No ColorLib references in app code — provenance only in spec + TEMPLATES.md + PR.

## Implementation Notes

- Copy simplest existing app as starter scaffold.
- Components: `Navbar.tsx`, `Banner.tsx`, `Converter.tsx`, `SimpleServices.tsx`, `About.tsx`, `Features.tsx`, `Statistics.tsx`, `CallToAction.tsx`, `Pricing.tsx`, `Blog.tsx`, `Footer.tsx`.
- App.tsx composes all sections in order.
- index.css: Tailwind entry + `@theme` for brand color `--color-brand: #f78f3d` and gradient.
- vite.config.ts: include `injectUiSource()` for Tailwind v4 compatibility.
