# Battleforge — Implementation Notes

Source: ColorLib "Game Warrior" → https://colorlib.com/wp/template/game-warrior/
Preview: https://preview.colorlib.com/theme/gamewarrior/
New name: Battleforge
Deploy URL: https://battleforge.free.componentdock.com

## Section Build Order

1. **App.tsx** — Compose all sections in order
2. **Preloader.tsx** — Full-screen spinner (CSS keyframe, fades out after load)
3. **Header.tsx** — Dark bar, logo, Login/Register pill, horizontal nav
4. **HeroSlider.tsx** — Carousel with 2 slides, heading, CTA button (use a simple CSS-only or lightweight carousel, no Owl Carousel dependency)
5. **NewsTicker.tsx** — Horizontal scrolling news items with category badges
6. **FeatureSection.tsx** — 4-column grid, each card: bg image overlay, badge, title, excerpt, comment count
7. **RecentGames.tsx** — 3-column grid, image thumbnails, badges, star/heart icons (use lucide-react for icons)
8. **Tournaments.tsx** — 2-column tournament items with details lists
9. **ReviewSection.tsx** — 4-column review cards with cover images and colored score badges
10. **FooterTop.tsx** — 3-column: logo/desc, latest posts, top comments
11. **Footer.tsx** — Dark footer with nav links + Component Dock link

## Design Token Mapping to Tailwind

```
// index.css @theme tokens
--color-brand: #ffb320;       /* amber — buttons, accents */
--color-dark: #131313;         /* header, section backgrounds */
--color-heading: #131313;      /* h2–h5 */
--color-body: #878787;         /* paragraphs */
--color-badge-new: #ff205f;    /* red badge */
--color-badge-strategy: #4eae60; /* green badge */
--color-badge-racing: #694eae;   /* purple badge */
--color-badge-adventure: #40abf5; /* blue badge */
```

## Fidelity Notes

### Header
- Dark (#131313) background
- 1px amber (#ffb320) bottom border
- Logo floated left
- Login/Register button: amber bg, dark text, border-radius 30px
- Nav: white text, 16px, weight 500, hover turns amber

### Hero Slider
- Full-width, 865px height
- Background images with dark overlay
- Heading: white, 60px, weight 400
- Subtitle: white, 14px, line-height 2
- CTA button: amber bg, dark text, radius 50px (pill)

### Feature Cards
- 4 equal columns (col-lg-3)
- Background images with dark overlay on hover/content area
- Category badge: uppercase 12px, weight 500, colored bg
- Content: white text, 20px title, 14px excerpt, comment link

### Recent Games
- Dark textured background section
- 3 equal columns
- Thumbnail with overlay badge
- Content: title, excerpt, comment link
- Star and heart icons in extra area

### Tournaments
- Light background
- 2 equal columns
- "Premium Tournament" label at top
- Image thumbnail + details list (dates, participants, prizes)

### Reviews
- Dark textured background
- 4 equal columns
- Cover image with colored score badge (9.x format)
- Score badge colors: yellow, purple, green, pink
- Game title + excerpt below

### Footer Top
- Decorative background image
- 3 columns: logo+desc, latest posts (3 items with thumbnails), top comments (4 items with avatars)

### Footer
- Dark background
- Navigation links
- Copyright with Component Dock link (replacing Colorlib credit)
