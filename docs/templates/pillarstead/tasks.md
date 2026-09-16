# Pillarstead (ColorLib Wilcon) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-pillarstead`. Recreation name: **Pillarstead** (NEW
> name — the ColorLib source keeps its name "Wilcon").

## Source mapping

- **ColorLib item:** "Wilcon" (TEMPLATES.md line 1360; section
  "## Construction (16)"). The slug is `wilcon`.
- **Source URL:** https://colorlib.com/wp/template/wilcon/
- **Preview URL — REACHABLE (verified 2026-09-16):**
  **`https://preview.colorlib.com/theme/wilcon/`** (HTTP 200, 55,329 bytes).
- **Preview CSS:** `css/style.css` (326,236 bytes — Flavor Bootstrap theme).
  Fonts: Roboto (Google Fonts via `<link>`).

## Reference research (done — do not redo)

### Screenshot (`wilcon-free-template.jpg`)

Construction company template: dark navy (#040e26) navbar, full-width hero
with construction image and dark overlay, orange (#fc5e28) accent color on
buttons and highlights. Clean modern layout with alternating white/light gray
sections. Split layout for about section with dark left panel and counter stats
on right. Testimonials with circular avatar photos. Blog cards with image
headers.

### Live DOM structure (9 sections + footer, top to bottom)

1. `navbar` — dark bg, Home/About/Services/Projects/Blog/Contact + "Inquire Now" outlined CTA
2. `hero-wrap` — full-width hero, bg image + dark overlay, heading "We Build Great Projects", two CTAs
3. `ftco-services-2` — 3-column: Quality Construction, Professional Liability, Dedicated To Our Clients
4. `ftco-intro` — full-width CTA, bg image + overlay, "Providing Personalized and High Quality Services"
5. `ftco-counter` — split: dark left (heading + description) | right (4 counter stats with bg image)
6. `ftco-section bg-half-light` — "We Offer Services", 3 service cards (Architecture, Renovation, ...)
7. `testimony-section` — split: left (heading + quote) | right (testimonial carousel with avatars)
8. `ftco-section bg-light` — "Latest Blog Updates", 3 blog cards
9. `ftco-footer` — 4-col dark footer + copyright

### Design tokens extracted from CSS

| Token | Value | Usage |
|-------|-------|-------|
| Brand orange | `#fc5e28` | Primary buttons, accents, highlights |
| Dark navy | `#040e26` | Navbar bg, dark sections, footer |
| White | `#fff` | Text on dark, content areas |
| Light gray | `#f8f9fa` / `bg-light` | Alternating section backgrounds |
| Orange accent light | `#feaf94` | Hover states, subtle accents |
| Font: body | Roboto | All text |
| btn-primary | Orange bg `#fc5e28`, white text, uppercase 13px bold | Main CTAs |
| btn-white | White bg, dark text | Secondary CTAs |
| btn-custom | Transparent bg, orange border/text, uppercase 13px | Outlined CTAs |
| Border radius | CSS vars, 50% circles, 5px cards | Avatars, cards |
| Parallax | `data-stellar-background-ratio="0.5"` | Hero, counter sections |
| Dark overlay | `rgba(0,0,0,0.5)` on `.overlay` div | Hero, intro, testimonials |

## Section implementation order

1. `Navbar` — dark sticky nav, mobile hamburger, "Inquire Now" outlined CTA
2. `Hero` — full-width bg image, dark overlay, heading, two CTA buttons
3. `ServicesBar` — 3-column icon+title+description cards
4. `IntroCta` — full-width bg image, dark overlay, heading, orange CTA
5. `AboutCounters` — split: dark left panel + right side 4 counter stats
6. `ServicesGrid` — heading + 3 service cards with images and "Read more"
7. `Testimonials` — split: left heading/quote + right carousel with avatars
8. `Blog` — heading + 3 blog cards with image, metadata, title, read more
9. `Footer` — 4-col dark footer + copyright with Component Dock link

## Fidelity notes

- Hero: single static hero image with dark overlay for v1 (no slider needed)
- Counter section: use React state with useEffect + IntersectionObserver for
  animated counting from 0 to target values
- Testimonials: use CSS scroll-snap or simple carousel; no Swiper dependency
  needed
- Services grid: cards with background image, overlay on hover, icon + title
- Blog: cards with background image top, metadata row (date, author, comments),
  title, "Read more" button
- All placeholder images via picsum.photos seeded with "pillarstead-{n}"
- All icons via lucide-react (HardHat, Shield, Users, Building2, Compass,
  Wrench, Quote, Calendar, MessageCircle, MapPin, Phone, Mail, ChevronRight)
- Font Awesome icons in original → replace with lucide-react equivalents
- Footer copyright: replace Colorlib attribution with Component Dock link
