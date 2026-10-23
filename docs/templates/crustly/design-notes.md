# Crustly — Design Notes & Tasks

Source: ColorLib Bakery2 (https://preview.colorlib.com/theme/bakery2/)

## Tasks

1. [ ] Set up app scaffold (copy from simplest existing app, rename package)
2. [ ] Create `src/App.tsx` composing all sections
3. [ ] Implement Navbar component
4. [ ] Implement CanvasMenu (sticky bar with hamburger + CTA)
5. [ ] Implement HeroBanner (Swiper/slider with 3 slides)
6. [ ] Implement AboutStory (text + image, "About Our Story")
7. [ ] Implement FeatureStory (image + text, "Honey Chocolate Pie")
8. [ ] Implement MenuCarousel (3 category slides: Starter, Main, Desserts)
9. [ ] Implement Testimonials (carousel, person image + quote)
10. [ ] Implement BookTable (image + reservation form)
11. [ ] Implement Footer (4 columns + newsletter + bottom bar)
12. [ ] Write tests (100% coverage)
13. [ ] Verify: typecheck, lint, test:coverage, build

## Design Notes

### Navbar
- Transparent over hero, white text
- Links: Home, About, Menu, Pages (dropdown), Blog (dropdown), Contact
- Red `#f42f2c` hover color
- Logo on left, nav links on right
- Becomes sticky with dark bg `#04091e` on scroll

### Canvas Menu (sticky bar)
- Below navbar, always visible on desktop
- Hamburger icon left, "Contact Us" button right
- Dark bg `#04091e`, white text
- Only visible at ≥1200px viewport (replaces header)

### Hero Banner
- Full-width Swiper slider, 3 image slides
- Overlay text (slider-content.png equivalent)
- Background images: food/bakery photos

### About Our Story
- Light bg `#fafaff`
- Left column: heading "About Our Story", two paragraphs, "View Full Menu" button
- Right column: story image
- Button: red `#f42f2c`, square corners

### Feature Story (Honey Chocolate Pie)
- Reversed layout: left image (7 cols), right text (5 cols)
- Same heading style, same button
- Seamless continuation of light bg

### Our Menu
- Section title centered: "Our Menu" / "Explore"
- Owl carousel with 3 slides (Starter, Main Courses, Desserts)
- Each slide: 7-col menu list + 5-col image
- Menu items: name + price (span right), description below

### Testimonials
- Owl carousel, 3 slides
- Each slide: 4-col person image + 8-col text
- Name (h4), role (h5), quote (p)

### Book a Table
- Light bg `#fafaff`, padding 120px
- 5-col image left, 7-col form right
- Form fields: name, email, phone, date/time, event select, submit
- Submit button: red `#f42f2c`, 3px radius

### Footer
- Dark bg `#04091e`
- 5 columns: Top Products, Quick Features, Quick Links, Resources, Newsletter
- Newsletter: email input + arrow button (pill radius 45px)
- Bottom bar: copyright text + social icons (Facebook, Twitter, Dribbble, Behance)
- Replace Colorlib attribution with Component Dock link

## Color Palette

- Primary: #f42f2c (red — buttons, hovers, accents)
- Dark: #04091e (header, footer, sticky bar)
- Body: #777777
- Headings: #222222
- Light bg: #fafaff
- Input bg: #e8e8e8
- Border: #ededed

## Fonts

- Headings: Playfair Display (Google Fonts)
- Body: Roboto (Google Fonts)
