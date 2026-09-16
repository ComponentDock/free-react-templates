# Nave — Prep Notes (ColorLib Advent)

## Source
- **ColorLib slug:** advent
- **Preview:** https://preview.colorlib.com/theme/advent/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg

## Section order (from preview DOM)

1. Navbar
2. Hero Slider (owl-carousel, parallax backgrounds)
3. Upcoming Events Highlight (dark bg, countdown timer)
4. Worship Time (split layout)
5. Listen Our Sermons (3 audio cards)
6. Events & Ministries (3-column grid)
7. Footer (3-column dark)

## Design notes

### Color palette
- Primary gold: #ffc107 (badge, countdown, highlights)
- Button accent: #ffce3a (close to primary, unify to #ffc107)
- Dark bg: #262626 (events, footer, body)
- Text on dark: #b3b3b3 (body), #fff (headings)
- Text on light: #000 (when on white/light sections)

### Typography
- Headings: Playfair Display, Times, serif (large, elegant)
- Body: Open Sans, Arial, sans-serif (clean, readable)
- Logo text: uppercase, letterspaced, white

### Buttons
- Primary CTA: white outline, white text, square corners (border-radius: 0), uppercase
- Hover: gold bg (#ffce3a), white text
- All buttons have sharp edges — no rounded corners

### Layout patterns
- Hero: full-width parallax, centered text column (col-md-8)
- Events: split 50/50 (text left, countdown right)
- Worship Time: split layout (text left, image right), responsive stacking
- Sermons: 3-col card grid, circular avatars
- Events & Ministries: 3-col card grid with images
- Footer: 3-col (About, Quick Links, Contact)

### Special components
- Countdown timer (weeks/days/hr/min/sec in yellow boxes)
- Audio players (3 sermon tracks)
- Owl carousel (hero slider) — use React carousel library
- Circular avatar images for pastors/sermons

### Fidelity priorities
1. Match the dark, warm aesthetic (amber/gold on dark charcoal)
2. Playfair Display serif headings are distinctive — must match
3. Square button corners (no border-radius) is a key style element
4. Countdown timer is a unique feature — faithful recreation needed
5. Split layouts with image/text side-by-side

## Component outline

| Component | Notes |
|---|---|
| Navbar | Transparent, sticky, hamburger on mobile, Ministries dropdown |
| HeroSlider | Full-width parallax, auto-play carousel, centered CTA |
| UpcomingEvents | Dark bg, badge, quote, event meta, countdown |
| WorshipTime | Split layout, heading, service details |
| Sermons | 3 audio cards, circular avatars, play/pause |
| EventsMinistries | 3-column grid, image cards |
| Footer | 3-col dark, about/links/contact, social icons |

## Placeholder images

- Hero backgrounds: `https://picsum.photos/seed/nave-hero-1/1920/1080`, `nave-hero-2`
- Sermon avatars: `https://picsum.photos/seed/nave-pastor-1/200/200`, etc.
- Events cards: `https://picsum.photos/seed/nave-event-1/600/400`, etc.
- Ministry cards: `https://picsum.photos/seed/nave-ministry-1/600/400`, etc.
- Worship section image: `https://picsum.photos/seed/nave-worship/800/600`
