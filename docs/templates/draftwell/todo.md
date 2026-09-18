# Draftwell — Implementation Outline

Source: ColorLib "Design" (slug: `design`)
Preview: https://preview.colorlib.com/theme/design/
New name: draftwell

---

## Section Order (from preview DOM)

1. Navbar
2. Hero (split: text + image w/ quote overlay)
3. Achievements (4 stat counters)
4. How It Works (3 steps w/ dashed arrow connectors)
5. Services (two-column: checklist left, image right)
6. Testimonials (carousel)
7. Blog (5-card grid)
8. Footer (about + social, nav links, copyright)

---

## Component Breakdown

| Component      | File                   | Notes                                              |
| -------------- | ---------------------- | -------------------------------------------------- |
| Navbar         | `Navbar.tsx`           | Logo + centered nav links + CTA + hamburger toggle |
| Hero           | `Hero.tsx`             | Two-column split, floating quote overlay           |
| AchievementCard | `AchievementCard.tsx` | Stat number + heading + description                |
| Achievements   | `Achievements.tsx`     | 4-column grid of AchievementCards                  |
| StepCard       | `StepCard.tsx`         | Icon circle + heading + description                |
| HowItWorks     | `HowItWorks.tsx`       | 3 StepCards + dashed arrow connectors (SVG)        |
| ServiceCheckItem | `ServiceCheckItem.tsx` | Single checkmark list item                        |
| Services       | `Services.tsx`         | Two-column: text/checklist/button + image          |
| TestimonialCard | `TestimonialCard.tsx` | Avatar + blockquote + author info                  |
| Testimonials   | `Testimonials.tsx`     | Carousel of TestimonialCards                       |
| BlogCard       | `BlogCard.tsx`         | Date + title + description, hover lift             |
| Blog           | `Blog.tsx`             | 5-column grid of BlogCards                         |
| Footer         | `Footer.tsx`           | About, social icons, nav links, copyright          |

---

## Design Notes

### Color Palette
- Brand blue: `#1264fa` — buttons, links, icon circles, hover states
- Hover blue: `#2671fa`
- Dark navy: `#000839` — headings, hero quote bg
- Muted navy: `rgba(0,8,57,0.5)` — subtitles, descriptions
- Light gray bg: `#f8f9fa` — services section, blog section
- Hero deco bg: `#dae1e7`
- White: `#ffffff` — main bg, blog cards, footer

### Typography
- Font: Montserrat (Google Fonts), weights 300/400/700
- Hero h1: 50px, weight 700
- Section heading: 30px, weight 700
- Subtitle label: 13px, weight 400, muted color
- Feature/step heading: 16px, weight 700
- Body/feature text: 14px
- Stat number: 40px, weight 700

### Button Styles
- Pill shape: border-radius 30px
- Primary bg: `#1264fa`, hover: `#2671fa`
- Padding: Bootstrap default btn padding
- White text on blue bg

### Key Visual Elements
- Hero: dark navy (#000839) floating quote block over image, positioned absolute bottom-left
- Hero: decorative gray (#dae1e7) background shape behind image
- Steps: dashed SVG curved arrows between steps (hidden on mobile)
- Feature icons: flaticon icons → replace with lucide-react, 40px blue circle bg behind
- Blog cards: 20px radius (bottom-left sharp), hover lifts -5px with shadow
- Social icons: 50x50 squares with #f8f9fa bg, 10px radius, centered icons
- Services section: dotted decorative element on image (CSS pseudo-element)

### Layout Patterns
- Hero: Bootstrap grid, col-lg-5 (text) + col-lg-6 (image), justify-content-between
- Achievements: 4-col (col-lg-3), centered text
- How It Works: 3-col (col-md-4) with absolute-positioned SVG arrows
- Services: col-lg-4 (text) + col-lg-6 (image), justify-content-between
- Blog: flex grid, auto-fill columns (col-6 col-sm-6 col-md-4 col-lg)
- Footer: col-lg-4 (about+social) + col-lg-6 (3-col nav links)

### Fidelity Priorities
1. Match section order 1:1
2. Match hero quote overlay positioning (absolute, bottom-left, dark bg)
3. Match pill-shaped buttons (30px radius)
4. Match blog card hover effect (lift + shadow)
5. Match step connector arrows (dashed SVG curves)
6. Use Montserrat font throughout
7. Preserve alternating white/light-gray section backgrounds
