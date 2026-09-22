# Flexpose — Implementation TODO

Source: ColorLib Yogabest (https://preview.colorlib.com/theme/yogabest/)

## Component Build Order

1. **TopBar** — phone/email + social icons row (absolute top, dark text on dark bg)
2. **Navbar** — transparent → solid black on scroll, 7 nav links (Home, About, Trainer, Classes, Schedule, Blog, Contact)
3. **Hero** — full-height bg image, dark overlay, diagonal bottom-right angle, heading + Reenie Beanie subheading + circular green play button
4. **Services** — 3-col: icon + heading + description, `bg-light`
5. **About** — split: left image with year counter overlay, right text + quote + video thumbnail
6. **ImageServices** — full-width bg image + dark overlay, yoga illustration left, 3 benefit items right
7. **Counter** — bg image + overlay, 4 animated stat counters with icons
8. **Classes** — 6 cards in 3-col grid: bg image, trainer, schedule, time, class name
9. **Testimonials** — split: left heading + features, right carousel (manual or embla)
10. **Schedule** — 7-col weekly table, circular thumbnails in active cells
11. **Trainers** — 4-col cards: photo + white body + role + name + social icons
12. **Blog** — 3-col cards: image + date + title + excerpt + chevron link
13. **Footer** — dark navy bg, 4 cols: logo+social, recent blog, explore links, contact
14. **CopyrightBar** — full-width dark bar, semi-transparent text

## Fidelity Notes

- Hero diagonal: use CSS `clip-path` or pseudo-element rotated to approximate the angled bottom-right edge
- Counter animation: use `useInView` or intersection observer to trigger count-up animation
- Testimonials: replace Owl Carousel with a lightweight React carousel (embla-carousel or custom)
- Schedule table: circular thumbnails on active cells, X icon on inactive
- Social icons: use `lucide-react` equivalents (Twitter, Facebook, Instagram, Dribbble)
- Flaticon icons → `lucide-react` equivalents
- Reenie Beanie font: load via Google Fonts `<link>` in index.html

## Placeholder Images

- Hero bg: `https://picsum.photos/seed/flexpose-hero/1920/900`
- About: `https://picsum.photos/seed/flexpose-about/800/600`
- Image services bg: `https://picsum.photos/seed/flexpose-services/1920/800`
- Counter bg: `https://picsum.photos/seed/flexpose-counter/1920/400`
- Class images: `https://picsum.photos/seed/flexpose-class-1/600/400` through `-6`
- Trainer images: `https://picsum.photos/seed/flexpose-trainer-1/400/500` through `-4`
- Blog images: `https://picsum.photos/seed/flexpose-blog-1/600/400` through `-3`
- Testimonial avatars: `https://picsum.photos/seed/flexpose-person-1/80/80` through `-3`
