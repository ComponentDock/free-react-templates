# Sleuth — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Holmes" — https://colorlib.com/wp/template/holmes/
- **Preview:** https://preview.colorlib.com/theme/holmes/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/holmes-free-template.jpg
- **Preview fetched:** Yes (HTML ~550 lines, CSS main.css analyzed for tokens)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds, header/footer

## Section Order (top → bottom)

1. **Top Bar** — lavender bg (#f9f9ff), phone + Sell/Rent + Login/Register (right-aligned, hidden mobile)
2. **Main Navigation** — white bg, logo left, 6 nav links right with 2 dropdown menus, hamburger on mobile
3. **Hero / Banner** — full-screen parallax bg image, dark overlay, "We're Real Estate King" headline, property search form (toggle, selects, sliders, CTA)
4. **Properties** — "Properties in Various Cities" heading, 3-col property cards grid (image, badge, title, price, specs, status, social)
5. **About** — full-width 2-col: 3 stacked info blocks (left) + full-height image (right)
6. **City Gallery** — "Properties in Various Cities" heading, asymmetric 4-image grid with hover-reveal titles
7. **Testimonials** — carousel of testimonial cards (circular photo, quote, name, role)
8. **Blog** — 3 post cards (image, title, excerpt, date/likes/comments meta)
9. **Footer** — dark bg (#222), 4-col (About Us, Newsletter, Instagram Feed, Follow Us) + copyright bar

## Fidelity Notes

### Top Bar
- Light lavender background (#f9f9ff)
- Right-aligned inline list items with padding
- Links bold, uppercase, hover → coral bg + white text
- Hidden on mobile (<992px)
- Use a simple bar with flex justify-end

### Main Navigation
- White bg with box-shadow
- Logo image (left) — use text "Sleuth" or placeholder logo
- Nav links: Home, Properties, About, Blog (dropdown), Pages (dropdown), Contact
- Dropdown menus: vertical list below parent, white bg
- Hamburger menu for mobile
- Position: absolute on top of hero, transparent initially? No — actually it's a normal flow nav with white bg

### Hero / Banner
- Full-screen height background image with dark overlay (rgba(0,0,0,0.18))
- Headline: "We're Real Estate King" — large white text
- Search form with Sell/Rent toggle, 4 selects (location, property type, bedrooms ×2), 2 range inputs, CTA button
- Toggle switch: custom CSS checkbox-based toggle
- Selects: styled dropdowns
- Range inputs: use ion.rangeSlider or a React slider component
- CTA button: pill shape (border-radius 25px), coral bg (#ea6c5d)

### Properties
- Section with section-gap padding
- Header text centered with h1 + p subtitle
- 3-column grid of property cards
- Each card: image with "For Sale" badge overlay, desc section with top (title + price), middle (specs ×2 rows), bottom (likes + comments)
- Badge: absolute positioned on image
- Status indicators: green (#ea6c5d? no — use .gr class → green, .rd → red)

### About
- Full-width (container-fluid), 2-column flex layout
- Left: 3 stacked "single-about" blocks with h4 + p each
- Right: single full-height image (about-img-h.jpg)
- No background color — white

### City Gallery
- Asymmetric grid: left 4-col tall, right 8-col wide (with 2×6-col children below)
- Each item: image + dark overlay div + text overlay on hover (fadeIn-bottom animation)
- Use CSS transitions for hover reveal
- Cities: San Francisco, New York, Boston, Elay

### Testimonials
- Carousel (originally OwlCarousel — replace with React carousel or simple CSS)
- 3 unique testimonials with circular photos, quote, name, title
- Photos use rounded-circle class

### Blog
- Same heading as testimonials (original quirk — reuse or change)
- 3-column grid of blog cards
- Each: thumb image, title link, text-wrap paragraph, meta-bottom with 3 icon+value items
- Use lucide-react icons for calendar, heart, bubble

### Footer
- Dark bg (#222222), white text
- 4 columns: About Us (3-col), Newsletter (4-col), Instagram Feed (3-col), Follow Us (2-col)
- Newsletter: email input + arrow submit button
- Instagram: 8 small thumbnail images in flex-wrap grid
- Follow Us: 4 social icon links (Facebook, Twitter, Dribbble, Behance)
- Footer bottom: centered copyright with "Made with ❤ by Component Dock" link

## Component Decomposition

```
src/
  App.tsx                    — Compose all sections
  components/
    TopBar.tsx               — Phone, Sell/Rent, Login/Register
    Navbar.tsx               — Logo + nav links + dropdowns + hamburger
    HeroBanner.tsx           — Full-screen bg + search form
    PropertySearchForm.tsx   — Toggle, selects, sliders, CTA button
    SellRentToggle.tsx       — Custom toggle switch
    PropertiesSection.tsx    — 3 property cards grid
    PropertyCard.tsx         — Single property card
    AboutSection.tsx         — Info blocks + image
    CityGallery.tsx          — 4-image asymmetric grid
    CityImage.tsx            — Single gallery item with hover overlay
    TestimonialsSection.tsx  — Carousel of testimonial cards
    TestimonialCard.tsx      — Single testimonial
    BlogSection.tsx          — 3 blog post cards
    BlogCard.tsx             — Single blog card
    Footer.tsx               — 4-col footer + copyright
  index.css                  — Tailwind entry + @theme tokens
```

## Key Decisions

1. **Slider for search form**: Use a lightweight React slider (e.g. @rc-component/slider or custom range) instead of ion.rangeSlider
2. **Testimonial carousel**: Use a simple CSS-based carousel or embla-carousel (lightweight) instead of OwlCarousel
3. **Dropdowns**: Simple hover-triggered dropdowns with absolute positioning
4. **Property status colors**: Green (#2ecc71) for "Yes", Red (#ea6c5d) for "No" — match original .gr/.rd classes
5. **Placeholder images**: Use picsum.photos/seed/sleuth-{1..20}/{width}/{height}
