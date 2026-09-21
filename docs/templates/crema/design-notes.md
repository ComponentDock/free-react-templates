# Crema — Design Notes

## Source

ColorLib "Coffee Blend" — https://colorlib.com/wp/template/coffee-blend/
Preview: https://preview.colorlib.com/theme/coffeeblend/

## Design Tokens (extracted from css/style.css)

- Brand color: #c49b63 (warm gold/tan) — buttons, accents, links
- Secondary gold: #f8b500 (amber — highlights)
- Dark backgrounds: #000, #030202, #0d0d0d, #120f0f, #141414, #151111 (near-black warm tints)
- Light backgrounds: #fafafa, #fcfaf7 (warm off-white)
- Text dark: #212529 (headings)
- Text muted: #6c757d (body text)
- Fonts: Poppins (300, 400, 700) body, Josefin Sans (400, 700) headings, Great Vibes (400) script accent
- Buttons: rounded (~30px radius), primary = #c49b63 bg + white text; white variant = white bg + dark text
- Footer: dark overlay background image, white text, social icons

## Layout

- Navbar: fixed dark, brand + 7 nav items + cart icon
- Hero: full-width swiper slider, 3 slides, background images with overlay, centered content
- Intro Bar: 4-column row (phone, address, hours, book a table)
- About: split layout (image left, text right)
- Services: 3-column cards with icons
- Menu Overview: centered heading + CTA link
- Counter: full-width dark background, 4-column animated stats
- Best Sellers: product grid cards with prices
- Gallery: image grid
- Product Menu: tabbed categories, product cards
- Testimonials: carousel with quotes and stars
- Blog: 3-column cards with metadata
- Appointment: CTA section
- Footer: 3-column (About, Blog, Services) + social icons

## Section-by-Section Fidelity Notes

1. **Navbar**: Dark bg, "Coffee" bold + "Blend" lighter text → Crema with similar treatment. Mobile hamburger toggle.
2. **Hero Slider**: Swiper-based, 3 slides with overlay darkness. Each slide: "Welcome" subheading (Great Vibes script), h1 headline, p text, 2 buttons. Autoplay between slides.
3. **Intro Bar**: Light section, 4 equal columns with icon, heading, text. No background image.
4. **About**: Left half = background image (about.jpg), right half = "Discover Our Story" heading + description text.
5. **Services**: Light bg, centered heading "Our Services", 3 columns with circle icon, heading, description.
6. **Menu Overview**: Simple centered section, heading + description + CTA link. Background image partially visible.
7. **Counter**: Dark background image with overlay, 4 stat items in a row with animated count-up numbers.
8. **Best Sellers**: White/light bg, centered heading, grid of product cards (image, title, description, price, cart button).
9. **Gallery**: Image-only grid, no text overlays. Mix of sizes.
10. **Product Menu**: Light bg, heading + tabbed filter bar (Main Dish, Drinks, Desserts) + product grid below.
11. **Testimonials**: Background image section, heading, carousel with large quote text, author name, 5-star rating.
12. **Blog**: Light bg, heading, 3 blog cards (background image, date/author/comments overlay, title, excerpt).
13. **Appointment**: Dark section, "Book a Table" heading, may include a form or CTA button.
14. **Footer**: Dark overlay background, 3 columns (About Us + social, Blog links, Services links), Component Dock link.

## Images

- Use picsum.photos seeded placeholders for all images
- Hero backgrounds: dark/cozy seeds (crema-hero-1, crema-hero-2, crema-hero-3)
- About: warm/coffee-themed seed
- Gallery: varied food/coffee seeds
- Product menu: food-themed seeds
- Blog: lifestyle seeds
- Footer background: dark seed
