# Techwise — Implementation TODO & Design Notes

**Source:** ColorLib Portech (https://colorlib.com/wp/template/portech/)
**Preview:** https://preview.colorlib.com/theme/portech/
**Spec:** openspec/specs/template-techwise/spec.md

---

## Section Order (matches live preview 1:1)

| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | TopBar | `TopBar.tsx` | Phone + email + social icons (Facebook, Twitter, Instagram, Dribbble). Light gray bg. |
| 2 | Navbar | `Navbar.tsx` | Dark bg, brand "Techwise" (Arizonia font), 6 nav links. Sticky on scroll. Hamburger on mobile. |
| 3 | Hero | `Hero.tsx` | Full-width slider (2 slides), bg image + dark overlay. Split: left = play icon, right = heading + subtext + 2 CTA buttons. Use carousel or manual slide. |
| 4 | Services | `Services.tsx` | Light bg. Heading + 4 service cards (2x2 grid). Each: icon + title + paragraph. Cards: UX/UI Design, Development, Branding, Search Optimization. |
| 5 | About | `About.tsx` | Split: image left, text right. Heading, description, 2 stat badges (Expert Team, Solution For Business), CTA link. |
| 6 | Team | `Team.tsx` | Heading + horizontal carousel of team cards. Each: photo, name, role, social icons. "View All Staff" button. |
| 7 | Counter | `Counter.tsx` | Dark parallax bg image. Animated number counters with labels. |
| 8 | Portfolio | `Portfolio.tsx` | Heading + image grid (masonry or uniform). Hover overlay effects. |
| 9 | WhyChooseUs | `WhyChooseUs.tsx` | Heading + feature cards (Creative Ideas, Better Strategy). |
| 10 | FAQ | `FAQ.tsx` | Heading + accordion (4 items). Each: question + expandable answer. |
| 11 | Testimonials | `Testimonials.tsx` | Light bg. Heading + carousel of testimonial cards. Each: star rating, quote, author, role. |
| 12 | Blog | `Blog.tsx` | Light bg. Heading + 3-column card grid. Each: image, date, author, comments, title, excerpt, "Read more". |
| 13 | Newsletter | `Newsletter.tsx` | Heading + email input + subscribe button. Centered layout. |
| 14 | Footer | `Footer.tsx` | Dark bg. 3-column: brand/desc, nav links, contact info. |
| 15 | FooterBottom | (part of Footer) | Very dark bar. Copyright + "Component Dock" link. |

## Design Notes

### Colors
- **Primary brand accent:** `#F96D00` (orange — used in interactive elements, loader spinner)
- **Blue primary:** `#007bff` (Bootstrap default — CTA buttons)
- **Navbar/dark sections:** `#1a1a1a` / `#141b25`
- **Light alternating sections:** `#f7f7f7`
- **Text on dark:** `#fff`, muted `#999`

### Typography
- **Body:** `"Roboto", Arial, sans-serif` — weights 300 (light), 400, 500, 700, 900
- **Display/logo:** `"Arizonia"` — cursive/script font for brand name
- Load both from Google Fonts via `<link>` in `index.html`

### Buttons
- `.btn-primary`: Bootstrap blue `#007bff`, rounded 4px, white text
- `.btn-white`: White bg/border, dark text, hover darken
- Both: padding ~10px 20px, font-weight 500

### Layout
- Bootstrap 4 grid (but we use Tailwind equivalent)
- Max-width container ~1140px centered
- Section padding: generous vertical (~80-100px)
- Cards: white bg, subtle shadow, near-square corners

### Fidelity Priorities
1. **Section order must match 1:1** (TopBar → Navbar → Hero → Services → About → Team → Counter → Portfolio → WhyChooseUs → FAQ → Testimonials → Blog → Newsletter → Footer)
2. **Hero split layout** is critical (video icon left, text right)
3. **Dark/light alternating sections** create the visual rhythm
4. **Testimonials and Team use carousels** — implement with CSS or simple JS state
5. **FAQ accordion** — pure state-driven expand/collapse
6. **Counter animation** — numbers count up on scroll into view (IntersectionObserver)

### Images
- Hero: `https://picsum.photos/seed/techwise-hero1/1920/1080` and `seed/techwise-hero2/1920/1080`
- About: `https://picsum.photos/seed/techwise-about/600/400`
- Team: `https://picsum.photos/seed/techwise-team1/300/300` (etc.)
- Portfolio: `https://picsum.photos/seed/techwise-port1/400/300` (etc.)
- Blog: `https://picsum.photos/seed/techwise-blog1/400/250` (etc.)
- Counter bg: `https://picsum.photos/seed/techwise-counter/1920/600`

### Icons
- Use `lucide-react` for service icons, social icons, UI elements
- Replaces Font Awesome from original
