# ShotScape — Implementation Notes

## Source
- ColorLib: Phozogy (https://colorlib.com/wp/template/phozogy/)
- Preview: https://preview.colorlib.com/theme/phozogy/
- Category: Photography

## Section Order (from preview DOM)

1. Header/Navbar
2. Hero Slider (OwlCarousel → use CSS/JS carousel or embla)
3. Services (3 cards)
4. Categories (carousel/slider)
5. Portfolio (filterable masonry grid)
6. Footer (4 columns)

## Fidelity Notes

### Navbar
- Logo left, horizontal links, search icon right (green square)
- Dropdown on "Pages" link hover
- Green 3px underline on active/hover nav links
- Sticky/transparent on hero, white bg when scrolled

### Hero
- Full-width image slider, 900px tall (or vh-based)
- Centered white text: h2 "Photography Studio", paragraph, green CTA button
- Auto-rotating carousel with dot indicators

### Services
- 3 equal columns, white cards with box shadow
- Negative margin top (-70px) to overlap hero section
- Each: image top, h3 title, paragraph description
- Section has light padding-top to accommodate overlap

### Categories
- Title left, "View all" button right (same row)
- Horizontal carousel of category cards
- Each: full-bg image, overlay text (category name + count)
- Image overlay for text readability

### Portfolio
- Centered title "Our latest works"
- Filter tabs: All, Fashion, Lifestyle, Natural, Wedding, Videos
- Masonry grid: mix of normal, large-width, large-height items
- Hover: dark overlay + centered plus icon + bottom title/category text
- Uses data-filter attributes for filtering

### Footer
- Near-black background (#000606)
- 4 equal columns: About (logo + social), Instagram (3 thumbs), Quick Links, Subscribe
- Copyright bar below 1px border separator
- Light gray text (#c4c4c4)
- MUST link componentdock.com instead of Colorlib attribution

## Key Design Decisions
- Replace OwlCarousel with Embla Carousel or CSS-only slider
- Replace Font Awesome icons with Lucide React
- Use Tailwind utility classes, mapping original CSS tokens to theme
- Use picsum.photos for all placeholder images (deterministic seeds)
- Google Fonts: Quantico (headings) + Open Sans (body) via index.html link
