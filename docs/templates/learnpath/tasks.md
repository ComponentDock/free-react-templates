# LearnPath — Implementation Todo & Design Notes

**Source:** ColorLib Ezuca (https://colorlib.com/wp/template/ezuca/)
**Preview:** https://preview.colorlib.com/theme/ezuca/
**New name:** learnpath

## Section Order (DOM)

1. Top Header Bar
2. Navigation Bar (overlays hero)
3. Hero Section (full-width bg image + overlay)
4. Icon Boxes (4-column feature highlights)
5. Featured Courses — Horizontal (2 cards)
6. About Section (stats + video)
7. Testimonials (Swiper slider)
8. Featured Courses — Vertical Grid (6 cards + category tabs)
9. Latest News & Events
10. Gallery (mosaic grid)
11. Client Logos (5 in a row)
12. Footer (4-column)

## Component Plan

| Section | Component | Notes |
|---|---|---|
| Top Header | `TopHeaderBar.tsx` | Email, phone, search input, register/login |
| Navbar | `Navbar.tsx` | Logo with accent span, nav links, cart icon |
| Hero | `Hero.tsx` | Background image, dark overlay, heading, subtitle, CTA |
| Icon Boxes | `IconBoxes.tsx` | 4-column row, each with icon (lucide-react), title, desc, link |
| Featured Horizontal | `FeaturedCoursesHorizontal.tsx` | 2 horizontal course cards with thumbnail + meta |
| About | `About.tsx` | Heading, description, 4 stat counters, video placeholder |
| Testimonials | `Testimonials.tsx` | Slider with avatar + quote + attribution |
| Featured Grid | `FeaturedCoursesGrid.tsx` | Category tabs + 3-col grid of 6 course cards |
| News & Events | `NewsEvents.tsx` | Featured event (date badge) + 2 blog cards |
| Gallery | `Gallery.tsx` | Mosaic grid, mixed aspect ratios via CSS grid |
| Client Logos | `ClientLogos.tsx` | 5 logos in a flex row |
| Footer | `Footer.tsx` | 4-col: about, contact, quick links, social |

## Key Design Notes

- **Brand color:** #19c880 (green) — use as Tailwind theme color `brand`
- **Font:** Roboto (300, 400, 500, 700) — load via Google Fonts in index.html
- **Buttons:** square (radius-0), 2px solid #34d986 border, hover fills green
- **Hero:** dark overlay rgba(21,20,33,.5) over background image
- **Stats counters:** large numbers in brand color, small uppercase labels
- **Star ratings:** gold #f3a90b filled, outline unfilled
- **Testimonials:** simple slide with avatar left, text right
- **News section:** date badge absolutely positioned over featured event image
- **Gallery:** CSS Grid with named grid areas for mixed sizes
- **Footer:** dark bg, 4 equal columns, social icons (lucide-react)

## Icon Mapping (Font Awesome → lucide-react)

| FA icon | lucide-react |
|---|---|
| fa-envelope | Mail |
| fa-phone | Phone |
| fa-search | Search |
| fa-user | User |
| fa-folder | FolderOpen |
| fa-book | BookOpen |
| fa-world | Globe |
| fa-star / fa-star-o | Star (filled/outline) |
| fa-long-arrow-right | ArrowRight |
| fa-map-marker | MapPin |
| fa-calendar | Calendar |
| fa-heart-o | Heart |
| fa-facebook | Facebook |
| fa-google-plus | Chrome |
| fa-instagram | Instagram |
| fa-twitter | Twitter |
| icon_bag_alt | ShoppingBag |
| ti-user | User |
| ti-folder | FolderOpen |
| ti-book | BookOpen |
| ti-world | Globe |

## Fidelity Priorities

1. Section order must match 1:1
2. Design tokens (brand color, font, button shape) must match exactly
3. Stats section numbers + labels must match
4. Course cards must show ratings, prices, author, date
5. Gallery mosaic pattern should approximate the original
6. Footer must link componentdock.com instead of Colorlib
