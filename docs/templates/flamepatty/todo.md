# Flamepatty — Implementation Todo & Design Notes

Recreation of ColorLib Burger template.
Source: https://colorlib.com/wp/template/burger/
Preview: https://preview.colorlib.com/theme/burger/

## Structure Order (top → bottom)

1. **Navbar** — Sticky header with centered logo, nav links (Home, Menu, About, Blog, Pages, Contact), social icons, phone number. Hamburger on mobile.
2. **Hero** — Full-width carousel (2 slides), dark overlay, "Big Deal" golden badge, "Flamepatty Bachelor" heading, "Maxican" subtitle. Auto-play.
3. **Menu** — "Burger Menu" label, "Best Ever Burgers" heading. 2-col grid of 8 burger items: image + name + description + $5 price. "More Items" pill button.
4. **Featured** — 2 large featured burger cards on dark image bg. Overlay at bottom with $20 price, name, description, "Order Now" yellow pill button.
5. **About** — 2 overlapping images left, right side: "About Us" label, "Best Burger in your City" heading, paragraph, signature image.
6. **Video** — Dark image background, centered play button (circle), heading "Flamepatty Bachelor", subtitle "How we make delicious Burger". YouTube popup on click.
7. **Testimonials** — "Testimonials" label, "Happy Customers" heading. Carousel: quote, avatar, name, 4.5-star rating (3 testimonials).
8. **Instagram** — 4 images in a row, hover overlay with Instagram icon.
9. **Footer** — Dark navy bg. 3-col: 2 location blocks (address, email, phone) + newsletter form. Social links. Copyright with "Component Dock" branding.

## Component Breakdown

| Component | File | Notes |
|-----------|------|-------|
| Navbar | `Navbar.tsx` | Sticky, centered logo, left nav + right social/phone. Mobile hamburger. |
| Hero | `Hero.tsx` | Carousel component, dark overlay, golden badge. |
| MenuSection | `MenuSection.tsx` | 2-col grid, 8 items with image/name/desc/price. |
| FeaturedBurgers | `FeaturedBurgers.tsx` | 2 cards, dark image bg, overlay text, CTA button. |
| AboutSection | `AboutSection.tsx` | 2 overlapping images left, text right with signature. |
| VideoArea | `VideoArea.tsx` | Dark bg, play button, YouTube popup. |
| Testimonials | `Testimonials.tsx` | Carousel, quotes, avatars, star ratings. |
| InstagramGrid | `InstagramGrid.tsx` | 4 images, hover overlay. |
| Footer | `Footer.tsx` | 3-col, newsletter form, social links, copyright. |

## Design Fidelity Notes

### Colors
- Brand orange-red: `#F0542C` — price tags, highlights
- Golden yellow: `#F2C64D` — CTA buttons, badges, stars
- Dark navy: `#040E27` — header/footer bg, section overlays
- White: `#fff` — menu/about/testimonials sections bg

### Typography
- Body: Raleway (Google Fonts)
- Headings/accent: Montserrat (Google Fonts)

### Buttons
- `boxed-btn3`: yellow (#F2C64D) bg, white text, 30px radius — used for "Order Now"
- `boxed-btn5`: outlined, 50px radius — used for "More Items"

### Spacing & Layout
- Bootstrap-style grid (12-col, col-lg-6 etc.)
- Section padding: ~80px vertical
- Container max-width: 1200px

### Images
- Burger images: use `https://picsum.photos/seed/flamepatty-burger-<n>/300/300` for circular menu items
- Featured burgers: use `https://picsum.photos/seed/flamepatty-feat-<n>/600/400`
- About images: use `https://picsum.photos/seed/flamepatty-about-<n>/400/500`
- Instagram grid: use `https://picsum.photos/seed/flamepatty-insta-<n>/300/300`
- Testimonial avatars: use `https://picsum.photos/seed/flamepatty-avatar-<n>/80/80`
- Hero backgrounds: use `https://picsum.photos/seed/flamepatty-hero-<n>/1920/800`
- Video background: use `https://picsum.photos/seed/flamepatty-video/1920/600`
- Signature: use a cursive-style placeholder or omit

### Key Interactions
- Hero carousel: auto-play with dots/arrows (use a simple state-based carousel)
- Testimonial carousel: auto-play with dots
- Video popup: link to YouTube with modal/overlay
- Instagram hover: opacity overlay with icon
- Mobile: hamburger menu toggle, stacked grids
