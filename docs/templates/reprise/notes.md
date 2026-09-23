# Reprise — Implementation Notes

## Template: Reprise (ColorLib Reopen)

### Source
- ColorLib: https://colorlib.com/wp/template/reopen/
- Preview: https://preview.colorlib.com/theme/reopen/
- Category: Portfolio / Gallery

### Section order (matches original)

1. **Navbar** — centered logo + hamburger toggle (3 lines → X animation)
2. **Hero** — centered title with bold + heart icon + subtitle
3. **Portfolio Grid** — masonry 3-column, 9 items with overlay labels
4. **Load More** — decorative centered arrow in circle
5. **Footer** — copyright + social icons (Component Dock link)

### Structural notes

#### Navbar
- Centered logo, hamburger toggle absolute-positioned top-right
- Full-screen overlay: white bg, 30px solid #cccccc border, centered nav links
- Toggle: 3 divs, CSS transforms to X on open state
- Use React state for toggle; CSS transitions for animation

#### Hero
- Title: "Handpicked **design resources** crafted with much ♥ and care for every detail"
- Bold "design resources" via `<b>` or font-weight
- Heart icon: font-awesome `fa-heart` (use lucide-react Heart instead)
- Subtitle: "free downloads only on fridays" — gray (#7e7e7e), 16px

#### Portfolio Grid
- Masonry/Isotope-style layout (use CSS columns or CSS grid with masonry)
- Grid items: 3-column, ~400px each
- Some items span 2 columns (`.p_two_third` = 2/3 width)
- Each item: image + absolute overlay (category + content type)
- Overlay: top-left position, padding 30px, text color #6f6f6f/#7e7e7e
- Links to: single pages, video embeds (vimeo/youtube), galleries

#### Grid Item Content (9 items)
| # | Category | Type | Link target |
|---|----------|------|-------------|
| 1 | SMARTPHONE | GALLERY | Image gallery |
| 2 | BOOK | VIDEO | Vimeo embed |
| 3 | DOODLE | VIDEO | YouTube embed |
| 4 | FOSTER | GALLERY | Image gallery |
| 5 | STARLIGHT | ARTICLE | Single page |
| 6 | OPEN BOOK | VIDEO | Vimeo embed |
| 7 | BURGER | VIDEO | Vimeo embed |
| 8 | PRINTSCREEN | ARTICLE | Single page |
| 9 | BOTTLE | ARTICLE | Single page |

- Item 4 (FOSTER) spans 2 columns (p_two_third)
- Others are 1-column (p_one_third)

#### Load More
- Centered arrow image in #eeeeee circle (border-radius 30px)
- Decorative only — no actual pagination

#### Footer
- Copyright: "All rights reserved | This template is made with ♥ by Colorlib"
- Replace with: "Made with ♥ at Component Dock" linking to https://www.componentdock.com/
- Social icons: Twitter, Behance, Dribbble, Facebook, RSS (use lucide-react equivalents)
- Footer text color: #7e7e7e

### Fidelity priorities
1. Match section order exactly: Navbar → Hero → Grid → Load More → Footer
2. Match brand color #f277ae throughout
3. Match font stack: Roboto (body), Montserrat (nav/headings), PT Serif (accents)
4. Match masonry grid with overlay cards
5. Match full-screen overlay menu behavior
6. Replace Colorlib attribution with Component Dock link in footer
7. Replace images with picsum.photos placeholders using seeded URLs
8. No ColorLib references in app code — provenance in spec only

### Placeholder images
Use `https://picsum.photos/seed/reprise-<N>/<W>/<H>` for deterministic images:
- Grid items: 800x600 (landscape) or 800x1000 (taller items)
- Logo: transparent PNG or text-based

### Dependencies
- No external dependencies beyond existing packages/ui
- lucide-react for Heart icon and social icons
- Tailwind 4 for styling
- No jQuery/Isotope — use CSS columns for masonry
