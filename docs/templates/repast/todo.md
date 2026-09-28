# Repast — Implementation Todo

Source: ColorLib "Meal" (https://colorlib.com/wp/template/meal/)
Preview: https://preview.colorlib.com/theme/meal/

## Section Order (top to bottom)

1. **Navbar** — Fixed top nav with 5 links (Home, About, Menu, Reserve, Contact), hamburger on mobile, side-slide menu
2. **Hero** — Full-width parallax bg image, "Welcome to Repast" heading, "Reserve A Table" white-outline CTA
3. **Featured Dishes** — "Find your best food" heading, 2-row zigzag layout with 3 dish cards (image + category + name + desc + Learn More)
4. **About** — "The Restaurant" centered heading, description paragraphs, white bg
5. **Decorative Image** — Centered hero image between About and Chefs
6. **Meet The Chefs** — 2-column chef cards (photo, name, "Master Chef", bio, social icons)
7. **Menu** — Tabbed interface (Breakfast/Brunch/Dinner), 4 items per tab (image, name, desc, price)
8. **Other Services** — 3-column feature icons (Quality Cuisine, Fresh Food, Private Events)
9. **Reservation** — Form on light bg (Name, Email, Phone, Persons select, Date, Time, Message, Submit)
10. **Customer Reviews** — Carousel testimonials (quote, photo, name, title)
11. **Contact** — Form (Name, Email, Phone, Message, Send Message)
12. **Map** — Placeholder div for Google Maps embed
13. **Footer** — 3 columns: About + Read More, Service Hours, Social + Newsletter + Copyright + Component Dock link

## Design Notes

- Color palette: coral/salmon `#ff7a5c` accent, black headings, gray body text, white + light gray alternating sections
- Typography: Playfair Display (serif) for headings, Open Sans (sans) for body, weight 300, size 20px, line-height 1.8
- Buttons: uppercase, letter-spacing 0.2em, 14px, 700 weight; primary = outline coral, hero = outline white
- Logo: minimal "M" in bordered square
- Forms: icon-prefixed inputs, 2px gray border, coral focus state
- Menu: tabbed with active underline in coral, items have dotted price separator
- Footer: newsletter email input with envelope icon button
- Animations: AOS (Animate On Scroll) — use `data-aos="fade-up"` patterns

## Components to Create

- `Navbar.tsx` — sticky header, hamburger toggle, side menu
- `Hero.tsx` — parallax bg, heading, CTA button
- `FeaturedDishes.tsx` — zigzag image-text layout
- `About.tsx` — centered text section
- `Chefs.tsx` — 2-column chef cards
- `Menu.tsx` — tabbed menu with food items
- `Services.tsx` — 3-column feature cards
- `Reservation.tsx` — form with icon inputs
- `Testimonials.tsx` — carousel of quotes
- `Contact.tsx` — contact form
- `Footer.tsx` — 3-column footer with newsletter

## Component Patterns (from conventions)

- Reuse `packages/ui` components: Button, ButtonLink, Card, cn()
- Use `cn()` for all class composition
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<form>`, `<label htmlFor>`
- Tab state: useState for active tab index
- Form: controlled inputs with state, no external form lib needed for this template
- Placeholder images: `https://picsum.photos/seed/repast-<n>/<w>/<h>`
- Icons: lucide-react (replace flaticon/ionicons)
- Fonts: Google Fonts `<link>` for Playfair Display + Open Sans
