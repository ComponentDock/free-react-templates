# Brewcraft — Implementation Notes

## Source
- ColorLib template: Coffee
- Preview: https://preview.colorlib.com/theme/coffee/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coffee-free-template.jpg

## Section order (top → bottom)

1. **Header** — Top info bar (hours, phone) + Navbar (logo, nav links, hamburger)
2. **Hero / Banner** — Fullscreen dark background image, centered text, CTA button
3. **About / Video** — Split: play button overlay (left) + heading + text + signature (right)
4. **Menu / Coffee** — Section title + 2-column grid of 6 coffee cards (name, price, description)
5. **Gallery** — Section title + 5-image masonry grid
6. **Review / Testimonials** — Brand-color bg, 2 reviewer cards + 4-counter stats row
7. **Blog** — Section title + 2 post cards (image, tags, title, excerpt, date)
8. **Footer** — Dark bg image, 3 columns: About Us + Newsletter form + Follow Us social icons

## Fidelity notes

### Header
- Top bar: light gray/lavender `#f9f9ff` bg, small text with hours + phone
- Navbar: white bg, logo left, nav links right-aligned, hamburger on mobile
- Nav links: Home, About, Coffee, Review, Blog (anchor links)

### Hero / Banner
- Fullscreen height, dark background image (use picsum with coffee/beans seed)
- Subtitle: uppercase small text "Now you can feel the Energy"
- H1: "Start your day with a black Coffee" — white, large
- CTA: `.primary-btn` — brand color `#b68834` bg, white text, uppercase, no border-radius by default
- Content offset: `margin-top: -250px` (content pulls up over the image)

### About / Video
- 2-column layout: left = video thumbnail with play button overlay (glightbox), right = text
- Heading h6 subtitle + h1 main heading + paragraph + signature image
- Uses `pb-100 pt-40` vertical spacing

### Menu / Coffee
- Background image behind the section
- Section title centered: "What kind of Coffee we serve for you" + subtitle
- 6 cards in 2-column grid (col-lg-6)
- Each card: white bg, amber shadow `rgba(182,136,52,0.2)`, 10px radius, 30px padding
- Card content: coffee name (h4) + price + description paragraph

### Gallery
- Section title centered (same as menu)
- 5 images in masonry layout:
  - Left column (col-lg-4): 2 stacked images (g1, g2)
  - Right column (col-lg-8): 1 wide image (g3) on top, 2 side-by-side below (g4, g5)
- Images use lightbox (glightbox) with `data-gallery="home-gallery"`

### Review / Testimonials
- Full-width brand color bg (`#b68834`), white text
- 2 reviewer cards side by side (col-lg-6): avatar image + name + star rating + review text
- Star ratings: orange checked stars via Font Awesome
- Counter row below: 4 stats in 4 columns (col-lg-3), large numbers (60px, weight 100)
  - Happy Client: 2536
  - Total Projects: 7562
  - Cups Coffee: 2013
  - Total Submitted: 10536

### Blog
- Section title centered (same as other sections)
- 2 blog cards side by side (col-lg-6):
  - Image with 10px border-radius
  - Tag pills (inline list items)
  - Title (h4 link)
  - Excerpt paragraph
  - Date text

### Footer
- Dark background image (`footer-bg.jpg`), white text
- 3 columns:
  - col-lg-5: About Us (heading + paragraph + copyright)
  - col-lg-5: Newsletter (heading + paragraph + email form with arrow submit button)
  - col-lg-2: Follow Us (heading + social icons: Facebook, Twitter, Dribbble, Behance)
- Replace Colorlib attribution with "Component Dock" link

## Key CSS classes from original

- `.banner-area` — fullscreen hero with bg image
- `.genric-btn.primary` — brand color button
- `.single-menu` — coffee card with shadow + radius
- `.review-area` — brand-color section
- `.counter-row` / `.single-counter` — stats row
- `.single-blog` — blog card with radius images
- `.footer-area` — dark bg footer
- `.section-gap` — standard vertical spacing (~80px)

## Placeholder images

| Slot | Source |
|---|---|
| Hero bg | `https://picsum.photos/seed/brewcraft-hero/1920/1080` |
| About video thumbnail | `https://picsum.photos/seed/brewcraft-video/600/400` |
| Menu bg | `https://picsum.photos/seed/brewcraft-menu/1920/800` |
| Gallery g1–g5 | `https://picsum.photos/seed/brewcraft-gal-1/` through `-5/` (various sizes) |
| Review avatars r1, r2 | `https://picsum.photos/seed/brewcraft-review-1/100/100` |
| Blog images b1, b2 | `https://picsum.photos/seed/brewcraft-blog-1/600/400` |
| Footer bg | `https://picsum.photos/seed/brewcraft-footer/1920/600` |
| Signature | Use a cursive-style SVG or skip |
| Play icon | Use lucide-react `Play` icon |
