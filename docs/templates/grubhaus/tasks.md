# Grubhaus — Prep Notes

Source: ColorLib Foodbar (https://preview.colorlib.com/theme/foodbar/)

## Section Order (top → bottom)

1. Header/Navbar — logo left, nav links (Home, About, Menu, Book a Table, Pages dropdown, Blog dropdown, Contact), hamburger toggle on mobile; transparent bg → dark navy (#04091e) on scroll
2. Hero Banner — split layout: left side light gray (#f9f9ff) with heading "delicious cupcakes" (Oswald), description, CTA button "check our menu"; right side animated planet circles + face image overlay
3. Top Dishes — "Our Top Rated Dishes" heading with red hr, 3-column grid of dish cards (image + name + description + price)
4. Menu — "Our favourite Menu" heading, light gray (#f9f9ff) bg, 2-column list of menu items (name + price + description, 6 per column)
5. Gallery — "foodbar galleries" heading, masonry grid: row1 (col-7 + col-5), row2 (col-4 × 3), row3 (col-5 + col-7); dark overlay + picture icon on hover
6. Testimonials — carousel, light gray bg, each slide: author photo (col-4) + text (col-8: name h4, title h5, italic quote p)
7. Reservation — "Make Reservation" heading, centered form: name, email, phone, date/time, event select dropdown, red submit button
8. Footer — dark navy (#04091e), 5-column layout (Top Products, Quick Links, Features, Resources, Newsletter w/ email form), copyright + social icons (FB, Twitter, Dribbble, Behance)

## Fidelity Notes

- **Brand color:** Red #f42f2c (NOT orange, NOT gold — pure red)
- **Dark bg:** Navy #04091e (footer, sticky header)
- **Light sections:** #f9f9ff (hero left, menu, testimonials) — very light blue-gray tint
- **Button style:** Sharp corners (border-radius 0), uppercase, red bg → transparent on hover with red text
- **Fonts:** Oswald (headings, serif-like), Roboto (body) — TWO font families
- **Hero:** Unique split layout with animated planet decorations (nested border-radius 50% circles with CSS rotation animations) — the right side has no real image, just animated shapes + a face cutout
- **Gallery:** Masonry grid with varying column spans, not uniform cards
- **Menu:** Simple list layout (not cards), items have name + right-aligned price + description below
- **Testimonials:** Owl-carousel style slider, photo-left/text-right layout
- **Reservation:** Full form (5 fields + dropdown), centered with offset columns
- **Off-canvas menu:** Side menu slides from right on hamburger click (mobile interaction)
- **No parallax** — standard sections
- **Decorative elements:** Animated planet/circle shapes throughout (CSS keyframe rotations)

## Implementation Notes

- Use `picsum.photos/seed/grubhaus-<n>/<w>/<h>` for all placeholder images
- Hero: static split layout, no carousel; planet shapes via CSS animation (keyframes)
- Gallery: implement as masonry grid (CSS grid or flex with varying column spans)
- Testimonials: manual carousel (prev/next + dots, no external lib needed)
- Reservation form: controlled inputs with state, dropdown for event selection
- Off-canvas menu: slide-in panel from right on hamburger toggle (use state + transform)
- Sticky header: use IntersectionObserver or scroll event to toggle dark bg on scroll
- Icons: use lucide-react for gallery hover icon, social icons, hamburger
- Newsletter form: email input + arrow submit button in footer
- Mobile: hamburger toggle, stacked layouts for all sections, off-canvas side menu
- Two fonts: load Oswald + Roboto from Google Fonts in index.html
- Footer copyright must link https://www.componentdock.com/ ("Component Dock")
- All planet/shape decorative elements are CSS-only (border-radius 50% + animation) — no images needed for those
