# Trendly — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Viral Story" — https://colorlib.com/wp/template/viral/
- **Preview:** https://preview.colorlib.com/theme/viral/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/viralstory-free-template.jpg
- **Preview fetched:** Yes (44,779 bytes HTML, 41,859 bytes style.css)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Top header bar** — light gray (`#f3f5f8`), breaking news marquee ticker (left), social icons (Google+, Pinterest, Facebook, Twitter) right; bottom border `#dedede`
2. **Navbar** — white, sticky, "Trendly STORY" logo (left), nav links + search + "Add Post" gradient button (right)
3. **Hero ticker** — 3 horizontal blog post cards (thumb + title + date), hot pink bottom border (`#e20378`)
4. **Featured posts slider** — 8/4 grid: large featured post (left) + 2 stacked posts (right); carousel with arrows
5. **Blog post grid** — 2-column: main (8-col, 2×N post cards) + sidebar (4-col, newsletter, trending, ad, comments)
6. **Pagination** — numbered page links
7. **Footer** — light gray bg, pink top border, 3-col: logo+nav, newsletter, latest articles
8. **Bottom footer** — copyright + Component Dock link

## Fidelity Notes

### Top Header
- Use a CSS marquee or animation for the breaking news ticker
- Social icons: use `lucide-react` (replace FontAwesome equivalents)
- Light background with subtle bottom border

### Navbar
- Sticky on scroll (use `position: sticky; top: 0`)
- Logo: "Trendly" in bold black, "STORY" in pink (`#e20378`) — can be text-based
- Navigation: Top 10, Pages (dropdown), Funny, Videos, Don't Miss, Mega Menu (dropdown)
- Add Post button: gradient `#e30a73` → `#feae04`, white text, rounded (5px)
- Search: icon button that opens a dark overlay with search input

### Hero Ticker
- 3 cards side by side, each with thumbnail + title + date
- Separated by vertical dividers
- Hot pink bottom border (5px)
- Use `picsum.photos` for placeholder images

### Featured Posts Slider
- Replace OwlCarousel with a simple React carousel or CSS slider
- Left post: 8-col, full-width image, tag overlay (pink), title, date
- Right posts: 4-col, 2 stacked cards, each with image, tag, title, date
- Category tags: colored badges — pink (Travel), green (Celebs), orange (4 Fun)

### Blog Post Grid
- 2-column layout: main content + sidebar
- Post cards: image, category tag, title, author, date
- Category tag colors: default `#e20378`, cat-2 `#6bc045`, cat-3 `#ee9202`, cat-4 `#02aeee`
- Sidebar: newsletter (gradient bg), trending (numbered), ad, latest comments

### Newsletter Widget
- Gradient background: `#e30a73` → `#feae04`
- White heading "Sign up to our newsletter"
- Name + email inputs, green Subscribe button (`#6bc045`)

### Trending Articles
- 3 items with numbered thumbnails (01, 02, 03)
- Each: thumbnail image, title, author name

### Latest Comments
- 3 items with avatar, commenter name, article reference, timestamp

### Pagination
- Numbered: Previous, 01–15, Next
- Active page highlighted

### Footer
- 3-column: logo + nav links (2-col flex grid), newsletter widget, latest articles (3 posts)
- Light gray bg (`#f3f5f8`), hot pink top border (5px)
- Bottom bar: copyright + Component Dock link

## Placeholder strategy

- Images: `https://picsum.photos/seed/trendly-<n>/<w>/<h>` (deterministic)
- Fonts: Montserrat via Google Fonts `<link>` in index.html
- Icons: `lucide-react` (replace FontAwesome)
- Logo: text-based "Trendly STORY" (no image file needed)
