# Plateful — Implementation Outline & Design Notes

Source: ColorLib Pato (`https://colorlib.com/wp/template/pato/`)
Recreated Name: `plateful` (`apps/plateful`)

## Section Breakdown & Structure Order

1. **Navbar / Header**: Fixed top header with brand logo, nav links (Home, Menu, Reservation, Gallery, About, Blog, Contact), and sidebar trigger button.
2. **Hero Slider**: Full-screen Swiper/carousel with welcome titles, subtitles, and CTA ("Look Menu").
3. **Welcome Section**: 3-column intro features (Romantic Restaurant, Delicious Food, Red Wines You Love) with picsum images.
4. **Menu Section**: Tabbed menu categories (Lunch, Dinner, Happy Hour, Drink, Starters, Dessert) with item cards (name, price, description).
5. **Events Section**: Carousel/grid of upcoming restaurant events with timestamps and detail buttons.
6. **Reservation Section**: Table booking form (Date, Time, People count, Name, Phone, Email) with validation.
7. **Reviews Section**: Customer testimonials slider.
8. **Video / Parallax Section**: Immersive background section.
9. **Blog Section**: 3-column blog posts with images, dates, and "Continue Reading" links.
10. **Newsletter Signup**: Email input for special offers.
11. **Footer**: 4 columns (Contact Us, Opening Times, Latest Posts, Gallery grid) + bottom copyright bar linking `https://www.componentdock.com/`.

## Design Notes & Fidelity

- Palette: Red accent (`#ec1d25`), dark charcoal (`#111111`, `#222222`), muted gray text (`#666666`).
- Fonts: Montserrat for body/headers, Courgette font style for script headings.
- Images: Picsum seeded (`https://picsum.photos/seed/plateful-<section>-<n>/<w>/<h>`).
