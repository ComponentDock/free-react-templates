# Feastcraft — Implementation Todo

Source: ColorLib "Meal2" (https://colorlib.com/wp/template/meal2/)
Preview: https://preview.colorlib.com/theme/meal2/

## Section Order (top to bottom)

1. **Navbar** — "Feastcraft." logo (orange dot accent), 6 links (Home, Menu w/ dropdown, Events, Gallery, About, Contact), "Book a table" small button, mobile hamburger
2. **Hero** — Full-width parallax bg, dark overlay, subtitle "Enjoy Your Healthy Delicious Meal", heading "Treat Yourself", description, "Explore now" pill CTA, social icons (WhatsApp, Instagram, Facebook, Twitter) on left, scroll-down indicator
3. **Popular Foods** — "Select your Meal" / "Popular Foods" heading, left sidebar with 4 category tabs (Breakfast/Lunch/Dinner/Drinks with icons), right side 2x2 grid carousel of food items (image + name + price)
4. **Popular Desserts** — "Choose Desserts" / "Popular Desserts" heading, 4 horizontal cards (small image + name + $20 price)
5. **Testimonials + Photo Galleries** — Parallax bg overlay section, left 50%: "Satisfied Customers" testimonial carousel (photo, name, title, quote), right 50%: "Photo Galleries" 2x2 image grid + "More Galleries" button
6. **Events** — "Enjoy Our Events" heading, owl-carousel of event slides (image left, details right: price, title, description, checklist)
7. **Book a Table CTA** — Parallax bg, centered "Book A Table Now" heading, description, pill orange CTA button
8. **Footer** — 4 columns: About + Social icons, Projects links, Services links, Contact info, copyright + Component Dock link

## Design Notes

- Color palette: bright orange `#ff5200` accent, warm peach `#fee2b3` page bg, black headings, dark gray `#333` body text, white footer
- Typography: Playfair Display (serif) headings, Nunito (sans) body
- Buttons: pill-shaped (border-radius 30px), solid orange primary, sharp-cornered secondary (navbar "Book a table")
- Logo: "Feastcraft." text with orange dot after name
- Subtitles: small caps labels above section headings (e.g. "Select your Meal")
- Sections alternate between peach bg and parallax image overlays
- Food menu: sidebar category tabs + carousel grid — different from Meal1's tabbed list approach
- Testimonials + Gallery: side-by-side layout on parallax background
- Events: carousel with alternating image-text layout
- Social icons: icomoon font (not Font Awesome)

## Components to Create

- `Navbar.tsx` — sticky header, logo, 6 nav links with dropdown, "Book a table" button, mobile menu
- `Hero.tsx` — parallax bg, subtitle, heading, description, CTA, social icons, scroll indicator
- `PopularFoods.tsx` — sidebar category tabs + food item carousel grid
- `PopularDesserts.tsx` — 4 horizontal dessert cards
- `TestimonialsGallery.tsx` — split layout: testimonial carousel + photo gallery grid
- `Events.tsx` — event slides carousel with image + details
- `BookTableCTA.tsx` — parallax bg with centered CTA
- `Footer.tsx` — 4-column footer with social, links, contact, copyright

## Component Patterns (from conventions)

- Reuse `packages/ui` components: Button, ButtonLink, Card, cn()
- Use `cn()` for all class composition
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<form>`
- Tab state: useState for active food category index
- Food menu carousel: could use CSS scroll-snap or a simple state-based carousel
- Testimonial carousel: useState for active testimonial index
- Events carousel: useState for active event index
- Placeholder images: `https://picsum.photos/seed/feastcraft-<n>/<w>/<h>`
- Icons: lucide-react (replace icomoon/flaticon)
- Fonts: Google Fonts `<link>` for Playfair Display + Nunito
