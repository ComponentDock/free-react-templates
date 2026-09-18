# Globetrek — Implementation Notes

Source: ColorLib "Travel Wordpress Themes" (slug: travel-wordpress-themes)
Preview: https://preview.colorlib.com/theme/travel-wordpress-themes/ (404 — design from screenshot only)
New name: globetrek
Package: @free-react-templates/globetrek
Deploy: globetrek.free.componentdock.com

## Section order (from screenshot)

1. Navbar — transparent, white text, logo "Globetrek" + mountain icon, nav links (Home, Destinations, Regions, Blog), phone number, search icon
2. Hero — full-viewport, aerial ocean/reef photo background, large white heading "Explore The World", "Let's go now" CTA button (white border), left/right slider arrows
3. Destinations — grid of destination cards (image + name + blurb)
4. Features / Why Choose Us — icon + title + description grid
5. About / Experience — text block with heading, description, CTA
6. Newsletter — email signup form (input + button)
7. Footer — links, social icons, "Made with Component Dock"

## Design tokens for Tailwind @theme

```
--color-brand: #008080;        /* teal/turquoise primary */
--color-brand-dark: #006666;   /* darker teal for hover/footer */
--color-brand-light: #00a3a3;  /* lighter teal accent */
--font-heading: 'Poppins', sans-serif;
--font-body: 'Poppins', sans-serif;
--radius-button: 4px;
```

## Fidelity notes

- Hero is full-viewport height (100vh), background image with teal/dark overlay
- Navbar overlays the hero (position absolute/fixed, transparent bg)
- On scroll: navbar gets solid dark background (JS scroll listener or CSS backdrop-blur)
- Slider arrows: semi-transparent white circles with chevron icons (left/right)
- Button: `border-2 border-white text-white bg-transparent hover:bg-white hover:text-teal`
- Cards: white bg, subtle shadow, rounded corners, image on top
- Footer: dark teal bg, white text
- Responsive: hamburger on mobile, single-column layouts

## Source reference

- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/travel-wordpress-themes.jpg
- Original demo: demo.themexpert.com (unreachable)
- ColorLib page: https://colorlib.com/wp/template/travel-wordpress-themes/
