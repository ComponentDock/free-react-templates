# Chamfer — Replication & Task Notes

Source: ColorLib "Theinterior" — https://colorlib.com/wp/template/theinterior/
Preview: https://preview.colorlib.com/theme/theinterior/
New name: chamfer

## Section-by-section fidelity notes

### 1. Header/Navbar
- Transparent header that becomes sticky on scroll
- Logo left, main nav center, "Contact Us" button right
- Desktop: full nav visible; Mobile: hamburger menu
- Nav items: Home, About, Services, Gallery, Blog (with submenu), Contact

### 2. Hero/Slider
- Full-width hero with 2-slide owl-carousel
- Dark semi-transparent overlay (`rgba(0,12,32,0.8)`) on hero images
- Left-aligned heading: small "Welcome" span above large "Modern Interior & Design" h1
- Video play icon (YouTube popup link) in bottom-right area
- In React: use a simple fade/crossfade for slides; avoid owl-carousel dependency

### 3. Our Info
- Dark background image section (`section_bg02.jpg`)
- 3 columns with titles + descriptions
- Text is white on dark background
- Responsive: stacks on mobile

### 4. Professional Services
- Full-width background-image banner (left 8 cols)
- Text block overlaps or sits next to the banner
- Heading: "We will create modern and first class interior"
- Full-width red "Discover More About Us" button (.btn3)

### 5. Services
- "Best Interior Services" heading (centered)
- 3 cards in a row: each has an icon/image, title link, short description
- Cards: Lighting, Interior Design, Office Decoration
- Images are PNGs (services1.png, services2.png, services3.png) — use lucide-react icons instead

### 6. Gallery
- Masonry-style grid: first item is large (6 cols), next 2 medium (3 cols each), then 3 more
- Each item: background-image with hover overlay showing project name + arrow icon
- Overlay: semi-transparent dark with white text
- 6 gallery items total

### 7. Team
- 3 team members in a row
- Each: rectangular photo, name (h3 link), role (span subtitle)
- Simple layout, no cards — just img + text

### 8. Testimonial
- Owl-carousel with 2 slides, dot navigation
- Centered layout: company logo image, quote text, founder name + role
- White/light background section

### 9. Brand Area
- Carousel of 5-6 greyscale partner/client logos
- Simple horizontal scroll or auto-rotate

### 10. CTA Banner
- "Are you Searching For a First-Class Consultant?" heading
- "Contact Us" black button (.btn-black) aligned right
- Light background

### 11. Blog
- "Our recent news" heading (centered)
- 2 blog cards side by side
- Each card: image, date badge (black-bg), meta line (Author, Likes, Comments), title, "Read more" link
- Date badge uses dark background with white text

### 12. Footer
- Dark background (`.footer-bg`)
- 4-column layout:
  - Col 1: Logo + description + phone number + email
  - Col 2: "Useful Links" heading + 2 address blocks (New York, Japan)
  - Col 3: Instagram feed (6 small square images in a grid)
  - Col 4 (implied in right): Social icons (Twitter, Facebook, Globe, Instagram)
- Bottom bar: copyright text + "Follow Us" social links

## Design tokens (for Tailwind @theme)

```css
@theme {
  --color-brand-red: #ff1313;
  --color-dark-navy: #16161a;
  --color-deep-charcoal: #0b1416;
  --color-body-text: #10285d;
  --color-muted-gray: #7e7e7e;
  --color-gold-accent: #dca73a;
  --color-light-bg: #f7f7f7;
  --font-heading: "Barlow Condensed", sans-serif;
  --font-body: "Barlow", sans-serif;
}
```

## Component plan

| Component     | Section           | Notes                                         |
|---------------|-------------------|-----------------------------------------------|
| Navbar        | Header            | Transparent → sticky, logo + nav + CTA        |
| HeroSlider    | Hero/Slider       | 2 slides, dark overlay, heading, video icon    |
| OurInfo       | Our Info          | 3 feature columns on dark bg                   |
| ProServices   | Professional Svc  | Background banner + text + CTA button          |
| ServiceCards  | Services          | 3 cards with icons (lucide-react)              |
| GalleryGrid   | Gallery           | Masonry grid with hover overlays               |
| TeamGrid      | Team              | 3 members with photos                          |
| Testimonial   | Testimonial       | Carousel with quotes                           |
| BrandCarousel | Brand Area        | Logo carousel                                  |
| CtaBanner     | CTA Banner        | Heading + button                               |
| BlogPosts     | Blog              | 2 blog cards with metadata                     |
| Footer        | Footer            | Multi-column dark footer                       |

## Placeholder images

All images should use `https://picsum.photos/seed/chamfer-<n>/<w>/<h>`:
- Hero slides: `chamfer-hero-1/1920/1080`, `chamfer-hero-2/1920/1080`
- Gallery items: `chamfer-gal-1/800/600` through `chamfer-gal-6/800/600`
- Team photos: `chamfer-team-1/400/500` through `chamfer-team-3/400/500`
- Blog images: `chamfer-blog-1/800/450`, `chamfer-blog-2/800/450`
