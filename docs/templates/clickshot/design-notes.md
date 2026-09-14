# ClickShot — Implementation Notes

## Source
- **ColorLib:** Shotgear (`shotgear`)
- **Preview:** https://preview.colorlib.com/theme/shotgear/
- **Category:** Business (Photography Studio)

## Section Order (top to bottom)
1. **Navbar** — Sticky top nav with logo, links (Home, About, Services, Portfolio dropdown, Blog dropdown, Pages dropdown, Contact), cart icon
2. **Banner / Hero** — Full-width background image, centered text: "Model Photography" subtitle, "Creative Studio" headline, "view work" CTA
3. **About Us** — Centered text block: "About our studio" label, large quote heading, paragraph, "read more" button
4. **Gallery** — Filterable masonry grid (6 items), section title "Check latest work", filter tabs (All, Wedding, Fashion, Portrait, Magazine)
5. **Services** — Asymmetric 2-column layout: Wedding photography (left, small) + Nature photography (right, large), each with icon, title, description, CTA, image
6. **Reviews / Testimonials** — Split layout: decorative image left, testimonial slider right, author name + title
7. **Pricing** — 3-column cards, each with icon, plan name, price ($50.00/mo), feature list, "book Now" button
8. **Blog** — 3-column post cards, each with image, author/date, title, excerpt
9. **Footer** — 4-column: Our Service links, Contact Info, Instagram grid (6 thumbnails), Newsletter form + social icons
10. **Copyright bar** — Centered text, dark strip

## Fidelity Notes

### Navbar
- Logo on left, nav links centered, cart icon on right
- Responsive: hamburger menu on mobile with toggler
- Dropdown menus for Portfolio, Blog, Pages

### Banner
- Full-width background image (photography scene)
- Text right-aligned within container (col-lg-5)
- "Model Photography" subtitle in small caps, "Creative Studio" headline in large Oswald
- "view work" CTA button (btn_1 style: transparent, white text, uppercase)

### About Us
- Centered layout (col-lg-8)
- "About our studio" label in Roboto, uppercase
- Large Oswald heading with camera quote
- Body text in Roboto, light gray
- "read more" button (btn_2: dark pill)

### Gallery
- Section title "Check latest work" in large uppercase Oswald (#dddfdf)
- Filter tabs: pill-style buttons, active state highlighted
- 6 gallery items in masonry layout (varying widths)
- Each item: background-image, overlay with category label + title on hover

### Services
- "what we offer" section title
- Left column: Wedding photography card (smaller, with icon + text + button + image)
- Right column: Nature photography card (larger, with icon + text + button + image)
- Icons from Flaticon (love-and-romance, leaf)

### Reviews
- Split layout: image left, slider right
- "Testimonials" label, large heading, quote text
- Author name in bold, company in light span
- Owl Carousel slider (use Swiper or similar in React)

### Pricing
- 3 identical cards in a row
- Each: icon SVG, plan name, price, 6-item feature list, "book Now" button
- White card background, transparent border
- Hover effects on cards

### Blog
- "Latest story" section title
- 3 post cards: image top, text bottom
- Author name + date in small text, post title as link, excerpt paragraph

### Footer
- Dark background (#1e2528)
- 4 columns: Service links, Contact info, Instagram grid (6 images), Newsletter
- Newsletter: email input + submit button
- Social icons: Facebook, Twitter, Instagram, Skype
- Copyright bar: dark strip (#2d3032), centered text
- Replace Colorlib attribution with "Made with Component Dock" + link

## Component Structure (suggested)
```
src/
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Gallery.tsx
    Services.tsx
    Testimonials.tsx
    Pricing.tsx
    Blog.tsx
    Footer.tsx
  index.css (Tailwind + theme tokens)
  main.tsx
```

## Design Token Mapping (Tailwind @theme)
```
--color-brand: #ff4800;
--color-dark: #182028;
--color-body: #888888;
--color-muted: #999999;
--color-footer: #1e2528;
--color-copyright: #2d3032;
--font-heading: "Oswald", sans-serif;
--font-body: "Roboto", sans-serif;
```
