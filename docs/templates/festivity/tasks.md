# Festivity (ColorLib Event) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-festivity`. Recreation name: **Festivity** (NEW name —
> the ColorLib source keeps its name "Event").

## Source mapping

- **ColorLib item:** "Event" (TEMPLATES.md line 1675; section "## Events (20)"
  near line 1670). The `wp/template/event/` slug appears exactly ONCE in
  TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/event/
- **Preview URL — REACHABLE (verified during prep):**
  **`https://preview.colorlib.com/theme/event/`** (HTTP 200, ~27 KB HTML).
- **Preview CSS:** `css/style.css` (~19.5 KB, hand-written styles over Bootstrap
  grid). External: Bootstrap, Owl Carousel, Font Awesome (all to be replaced
  with Tailwind + lucide-react).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/event-free-template.jpg

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand red | `#dd0a37` | Buttons, section title accents, event day circles, counter numbers |
| Heading text | `#0b0f28` | Section titles, counter labels |
| Body text | `#444` | Paragraphs, general text |
| White bg | `#FFF` | Content sections (about, speakers, sponsors, contact) |
| Light grey bg | `#F9F9FA` | Schedule section |
| Parallax bg | image-based | Hero, Video CTA, Bottom CTA (use picsum.photos placeholders) |
| Font family | Poppins | Google Fonts, weights 400, 700, 900 |
| Button radius | `2px` | Main CTA buttons |
| Button padding | `14px 50px` | Main CTA buttons |
| Button text | uppercase | Main CTA buttons |
| Event day circle | 120px diameter, `border-radius: 50%`, red bg | Schedule timeline |
| Speaker hover | red social icons overlay on image | Speaker cards |

## Section order (fidelity mapping)

1. **Navbar** — transparent, fixed, site name + section links + hamburger
2. **Hero** — full-width parallax bg, centered headline + subtitle + CTA button
3. **About** — white bg, "About Event" heading, description, 4 counter stats
4. **Gallery** — image carousel (Owl Carousel → Swiper or CSS-based)
5. **Video CTA** — parallax bg, play button + heading + description
6. **Schedule** — light grey bg, "Event Schedule" heading, timeline with circular date badges
7. **Speakers** — white bg, "Our Speakers" heading, 3-column card grid with hover social
8. **Sponsors** — white bg, "Our Sponsors" heading, 4-column logo grid
9. **CTA** — parallax bg, "Get Ticket Now!" heading + button
10. **Contact** — white bg, "Contact Info" heading, 3-column layout (Address/Phone/Email)
11. **Footer** — dark bg, centered logo, social icons, copyright with Component Dock link

## Implementation notes

- Replace Bootstrap grid with Tailwind responsive utilities (`md:grid-cols-3`, etc.)
- Replace Owl Carousel with Swiper.js or pure CSS scroll-snap carousel
- Replace Font Awesome icons with lucide-react
- Counter section: use static displayed values (no scroll-triggered animation
  dependency) — the original uses jquery.counterup which is scroll-dependent
- Speaker hover overlay: CSS group-hover to show social icons on image
- Parallax backgrounds: use `bg-fixed` or `bg-parallax` Tailwind pattern
  with picsum.photos placeholder images seeded per section
- Navbar transparency: starts transparent, becomes solid on scroll (IntersectionObserver)
- Event day circle: absolute-positioned red circle with date text centered
- No `package-lock.json` changes for prep — that happens at implementation time
