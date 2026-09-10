# Bizmark — Implementation Notes

Source: ColorLib Bizcon (https://preview.colorlib.com/theme/bizcon/)

## Section Order (implement in this order)

1. Navbar — sticky, logo left, links right, mobile hamburger
2. Banner (Hero) — full-height left-aligned text + CTA + video link, decorative SVG blobs
3. About — two-column (image right, text left), gradient CTA
4. Services — gray background, intro text + two service cards with icons
5. Testimonials — carousel with thumbnails + quote slide
6. Portfolio — masonry/card-columns grid, 1 quote card + 4 project cards
7. Advisory Service — mirror of About (image left, text right)
8. Blog — 3 blog post cards (image + meta + title)
9. Footer — 4 link columns + newsletter signup
10. Copyright — dark bottom bar

## Fidelity Notes

### Navbar
- White background, sticky position
- Logo on left (use placeholder text "Bizmark" since no logo asset)
- Nav items: Home, About, Blog (dropdown), Page (dropdown), Contact
- Mobile: hamburger icon triggers collapse menu
- Links use Poppins font (from CSS: `.navbar-nav a` inherits heading font)

### Banner
- Desktop: white background with right-aligned decorative image (banner_bg.png)
- Mobile: light yellow-green bg `#f0eed4` (fallback from CSS media query)
- Left-aligned headline in Poppins, large size (44px+ on desktop)
- Subtitle in Roboto gray text
- Two CTAs: gradient pill "Learn More" button + "Intro Video" with play icon
- 5 decorative SVG/icon blobs float around (purely decorative, can be simplified)

### About
- Two-column layout, right-aligned content
- Illustration image on right (use picsum placeholder)
- Headline "We Have 24 Year Experience in consulting"
- Sub-headline in Poppins, smaller
- Paragraph text in Roboto gray
- "Read More" gradient pill button

### Services
- Gray background `#f7f7f7`
- Left column: section intro text + "Load More" gradient button
- Right columns: 2 service cards
  - Each has an icon (use lucide-react), title, paragraph, "Learn More" link
  - Icon decorations: warm tan (#fdcb9e) border, light green (#e3f1da) bg accent

### Testimonials
- Centered section title "Customer Are Saying"
- Left: thumbnail avatar strip (3 small images)
- Right: large slide with quote icon (SVG), testimonial text, reviewer name + title
- Carousel/slider behavior (can implement with state or simple CSS)

### Portfolio
- Masonry-like card-columns layout (CSS columns or grid)
- First card: large quote block with headline "Explore Our Best Practice Area"
- 4 project cards: image + title + short description
- Images use picsum placeholders

### Advisory Service
- Mirror of About section (image on left, text on right)
- "We Providing high quality adviser service" headline
- Same gradient CTA button pattern

### Blog
- Section title "Update From Blog"
- 3 blog cards in a row (each: image, category + date line, title, comments + likes)
- Cards use Bootstrap card-like styling

### Footer
- Light background, 5 columns
- Columns: Top Products, Quick Links, Features, Resources (each 4 links)
- Newsletter column: email input + "Subscribe" gradient button
- Copyright bar below: dark `#303030` bg, copyright text, link to componentdock.com

## Design Tokens to Apply in Tailwind @theme

```css
@theme {
  --color-brand-start: #feb47b;
  --color-brand-end: #ff7e5f;
  --color-brand-accent: #ff7e5f;
  --color-heading: #2f373d;
  --color-body: #646464;
  --color-section-bg: #f7f7f7;
  --color-footer-bg: #303030;
  --color-banner-fallback: #f0eed4;
  --color-green-accent: #e3f1da;
  --color-border-warm: #fdcb9e;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Roboto', sans-serif;
}
```

## Component List

- Navbar (logo + nav links + mobile toggle)
- Banner (headline + CTA + video link + decorative blobs)
- AboutSection (two-column image + text)
- ServiceCards (intro + 2 cards with icons)
- TestimonialCarousel (thumbnail nav + quote slide)
- PortfolioGrid (masonry: quote card + project cards)
- AdvisoryService (mirror of AboutSection)
- BlogCards (3 blog post cards)
- Footer (link columns + newsletter + copyright bar)
