# Rayloom — Implementation Notes

## Source
- ColorLib template: Rea
- Preview URL: https://preview.colorlib.com/theme/rea/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/rea-free-template.jpg

## Section order (top to bottom)

1. **Header** — Logo (left) + animated typewriter headline (right)
2. **Sidebar Navigation** — Fixed-position sliding sidebar with links + social icons + search
3. **Portfolio Grid** — Isotope masonry grid with variable card sizes
4. **Load More** — Centered arrow button below grid
5. **Footer** — 3-column: categories, nav links, social + copyright

## Section-by-section fidelity notes

### Header
- Logo: 80×95px image, left-aligned with padding-top 80px
- Headline: Lato 28px, weight 300. "pixel precise" + cycling words (bold, weight 700) with pink (#f271ab) highlight background on selected word
- Subtitle: "to suit all your needs." displayed as block below headline
- Hamburger: 4 black lines (widths 30px, 24px, 20px, 14px) spaced 5px apart, 30×30px container

### Sidebar Navigation
- Fixed position, slides in from left on hamburger click
- Links: Home, About, Contact, Features (Lato, weight 400)
- Social icons: Twitter, Behance, Dribbble, Facebook, RSS (Font Awesome)
- Search input: transparent background, underline border, "Search" placeholder

### Portfolio Grid
- Isotope masonry layout, 4 columns at 300px each (1200px total + 30px padding)
- Card sizes: p_one (1200px full width), p_one_half (600px), p_one_fourth (300px)
- Each card: image (border-radius 2px top corners) + hover overlay with view/download counts
- Below image: category tag (inline list), title (linked), heart/like button with count
- Grid container has #F5F5F5 background
- 15px transparent border padding around each card

### Load More
- Centered 85×85px arrow image below grid
- Margins: 50px top/bottom

### Footer
- White background, centered text
- 3 columns (30.6% width each, 4% margin between):
  1. Categories: Branding, Fonts, Icons, Misc, Mockup, Play, Vectors, Video (inline)
  2. Nav links: About, Features, Contact
  3. Social icons (23px, 10px margin) + copyright with heart icon (pink #f271ab)
- Footer text color: #7e7e7e, font-size 16px, line-height 36px
- Copyright must link to Component Dock instead of ColorLib

## Implementation approach

- Use Tailwind CSS 4 with custom theme tokens for brand color (#f271ab)
- Header: flex layout with logo + animated headline (can use a simple word-cycling component)
- Sidebar: fixed-position div with CSS transform for slide animation
- Grid: CSS Grid or flexbox with aspect-ratio cards; consider a masonry library or CSS columns
- Cards: overlay on hover using absolute positioning
- Footer: CSS Grid 3-column layout
- All placeholder images: picsum.photos with deterministic seeds
- Icons: lucide-react (not Font Awesome)
- Font: Google Fonts Lato link in index.html
