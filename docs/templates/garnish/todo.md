# Garnish — Implementation Todo

Source: ColorLib "Caviar" (https://colorlib.com/wp/template/caviar/)
Preview: https://preview.colorlib.com/theme/caviar/
New name: garnish (apps/garnish, @free-react-templates/garnish)

## Design Notes

### Section Order (fidelity reference)

1. Navbar — sticky header, logo "garnish" left, nav links (Home, Pages dropdown, About Us, Menu, Awards, Testimonials, Reservation), social icons overlay top-left
2. Hero — full-width background image slideshow (770px), left-aligned content (heading, paragraph, "Reservation" button), right-aligned thumbnail nav
3. About Us — two alternating rows: Row 1 image left + text right ("About Us", "restaurant style", paragraph), Row 2 text left ("our chef", paragraph) + image right
4. Dish Menu (Special) — centered "Special" heading, "View The Menu" button, 3-column grid of dish cards (image + name + price)
5. Awards — left "Awards" heading, right row of 5 award images
6. Testimonials — white shadowed card, centered "Testimonials" heading, carousel of 3 quotes with avatars
7. Reservation — split layout: form left (date, time, persons, last name, textarea, "Reserve Your Desk" button), background image right
8. Footer — centered logo "garnish", copyright with Component Dock link

### Color Palette

- Primary text: #000 (headings, buttons)
- Body text: #333
- Muted/borders: #b2b2b2
- Accent hover: #ff0000 (red — button hover, interactive highlights)
- Page background: #fafafa
- Section alt bg: #f9f9f9
- Card/button bg: #fff
- Light border: #eaeaea, #ebebeb
- Image shadow: 3px 5px 45px rgba(0,0,0,0.15)
- Testimonial shadow: 0 0 1px rgba(0,0,0,0.1)

### Typography

- Headings/buttons: Work Sans (Google Fonts)
- Body text: Open Sans (Google Fonts)
- Headings: black (#000), font-weight 500–600
- Body: #333, font-weight 400
- Navigation: Work Sans, uppercase optional

### Button Styles

- Primary: white bg, black text, 1px solid #b2b2b2 border, border-radius 0 (square), min-width 180px, height 54px
- Hover: red text (#ff0000), same square shape
- All buttons have a small span element (decorative indicator)
- No rounded corners anywhere — sharp, modern aesthetic

### Layout Notes

- Hero: 770px height, full-width background image, owl-carousel slideshow
- About Us: container with two rows (col-6/col-5 offset), images with box-shadow
- Dish Menu: 3-col grid (col-sm-6 col-md-4), decorative "Special" watermark text behind
- Awards: col-2 heading + col-9 images in d-flex justify-content-between
- Testimonials: centered card with padding 70px 100px
- Reservation: d-md-flex, form area (calc(50% - 100px)), image thumbnail on right
- Footer: simple centered text

### Component Breakdown

- `Navbar.tsx` — sticky header, logo, nav links, social icon overlay
- `Hero.tsx` — full-width background image, slideshow-like content, left-aligned text + CTA, right thumbnail nav
- `About.tsx` — two alternating rows with images and text content
- `DishMenu.tsx` — "Special" heading, "View The Menu" button, 3-column grid of DishCard components
- `DishCard.tsx` — dish image + name + price
- `Awards.tsx` — heading + row of 5 award images
- `Testimonials.tsx` — white shadowed card, carousel of TestimonialItem components
- `TestimonialItem.tsx` — avatar + name + subtitle + quote
- `Reservation.tsx` — split layout, form (date, time, persons, name, message), background image
- `Footer.tsx` — centered logo + copyright with Component Dock

### Images

- Hero background: `https://picsum.photos/seed/garnish-hero/1920/770`
- Hero thumbnail nav: `https://picsum.photos/seed/garnish-hero-nav/400/770`
- About row 1 image: `https://picsum.photos/seed/garnish-about1/600/400`
- About row 2 image: `https://picsum.photos/seed/garnish-about2/600/400`
- Dish 1: `https://picsum.photos/seed/garnish-dish1/400/300`
- Dish 2: `https://picsum.photos/seed/garnish-dish2/400/300`
- Dish 3: `https://picsum.photos/seed/garnish-dish3/400/300`
- Award images 1–5: `https://picsum.photos/seed/garnish-award{n}/150/80`
- Testimonial avatars 1–3: `https://picsum.photos/seed/garnish-testimonial{n}/80/80`
- Reservation background: `https://picsum.photos/seed/garnish-reservation/960/600`

### Key Fidelity Points

- Square buttons (border-radius 0) — this is a distinctive design choice, not rounded
- Red (#ff0000) accent color on hover only — the rest is black/white/gray
- Hero slideshow with thumbnail navigation on the right side
- About Us has two alternating rows (image-text, text-image) with shadow-framed images
- Decorative "Special" watermark text behind the dish menu heading
- Testimonials in a white card with very subtle shadow
- Reservation form is a true split layout (form left, image right)
- Social icons overlay on the hero (top-left corner)
- Two Google Fonts: Work Sans for headings, Open Sans for body
