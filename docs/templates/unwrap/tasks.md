# Unwrap (ColorLib Unfold) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-unwrap`. Recreation name: **Unwrap** (NEW name —
> the ColorLib source keeps its name "Unfold").

## Source mapping

- **ColorLib item:** "Unfold" (TEMPLATES.md line 2575).
- **Source URL:** https://colorlib.com/wp/template/unfold/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/unfold/` (HTML 200, full page with
  `data-bs-theme="dark"`, Bootstrap 5 dark mode).
- **Preview CSS:** `css/style.css` (all hand-written styles; uses Bootstrap 5
  for grid/utilities). Vendor CSS: `icomoon` icons (replace with lucide),
  `swiper-bundle.min.css` (carousel), `animate.min.css`, `aos.css`
  (scroll animations), `glightbox.min.css` (lightbox). Scripts:
  `js/scripts-dist.js` + `js/main.js`. Fonts: Google Fonts — Raleway
  (300/400/700) + Arimo (400).

## Reference research (done — do not redo)

### Screenshot analysis

Browsed visually: dark-themed single-page portfolio. Full-bleed hero with a
dark photographic background, large centered "Unfold" heading, and a subtitle
describing a product designer. Below: a 3x3 portfolio grid with hover overlays
showing titles and category tags. A horizontal logo carousel. An about section
with a portrait photo and bio text. Six service cards with icons. Four animated
skill percentage counters. A testimonial slider with author photos. A blog grid
with asymmetric layout (large + small posts). A contact form with address info.
A dark fixed-position footer with logo and social links.

### Design tokens (live stylesheet + rendered page)

| Token | Value | Use |
|-------|-------|-----|
| Page bg | `#000` (solid black) | body + site-inner |
| Text | `#fff` (white) | body text, nav, headings |
| Accent | `#D63447` (vivid red) | logo period, active nav, hover, mobile menu hover |
| Footer bg | `#191919` | fixed-position footer |
| Font (body) | Raleway 300/400/700 | Google Fonts; base 16px, line-height 30px |
| Font (headings) | Arimo 400 | Google Fonts; heading elements |
| Buttons | border-radius 30px (pill), uppercase, letter-spacing 0.1rem, font-weight 900, padding 15px 30px | `.btn` base class |
| Button outline | 2px `rgba(255,255,255,0.5)` border, white text | `.btn-outline-pill.btn-custom-light` |
| Nav (default) | Absolute, transparent bg, white text, z-index 1002 | Split: left 5-col + center 2-col logo + right 5-col |
| Nav (scrolled) | Fixed, white bg, black text, box-shadow | Logo + links turn black; active/hover = #D63447 |
| Nav font | 14px, normal weight | Links with underline hover animation |
| Logo | 1.7rem, bold 700, white; period `.` in #D63447 | `.unslate_co--site-logo` |
| Hero | Full-width bg image with jarallax effect, centered text | Heading large + subtitle + mouse scroll indicator |
| Portfolio | 3-col (lg) / 2-col (sm/md); isotope items | Overlay: semi-transparent bg + icon + title + tags |
| Services | 3-col grid (6 items); fade-up animation via AOS | Icon (45px SVG) + h3 title + paragraph |
| Skills | 4-col grid; animated counters | Large number + % label + skill name |
| Testimonials | Swiper slider; prev/next + pagination | Quote block + author image + name + position |
| Journal | Asymmetric: 8+4 top row, 4+4+4 bottom row | Overlay hover with title + author + read time |
| Contact | 2-col: form (6-col) + address (4-col) | Outline-pill send button |
| Footer | Dark bg #191919, fixed bottom 400px (desktop) | Logo + social links + copyright |
| Scroll indicator | Mouse icon at hero bottom | Smooth-scrolls to portfolio section |

### Section structure (implementation order)

1. Navbar — split layout (left: Home/Portfolio/About/Services; center: logo;
   right: Skills/Testimonial/Journal/Contact); fixed on scroll with white bg;
   mobile hamburger; theme toggle button (desktop only)
2. Hero — full-width background image, centered "Unwrap" heading + subtitle,
   mouse scroll indicator
3. Portfolio — 9-item grid with image thumbnails, overlay on hover (icon +
   title + categories); 3-col desktop, 2-col mobile
4. Client logos — horizontal swiper carousel of 4 client logos
5. About Me — 2-col: portrait image (left) + heading + bio paragraphs +
   "Download my CV" pill button (right)
6. Services — 6 cards in 3-col grid: SVG icon + title + description; fade-up
   scroll animation
7. Skills — 4 animated counters in 4-col grid: large number + percentage +
   skill name
8. Testimonials — Swiper slider with quote blocks, author photos, names,
   positions; prev/next arrows + pagination
9. Journal — Blog grid: 8-col large post + 4-col small post (top row), then
   three 4-col posts; overlay on hover
10. Contact — Form (name, email, textarea, send button) + address info
    (email, phone, location)
11. Footer — Logo, social links (Facebook, Twitter, Instagram, Dribbble,
    Behance), copyright with Component Dock credit

### Fidelity notes

- The original uses `jarallax` for the hero parallax effect — replace with
  CSS `background-attachment: fixed` or similar React approach.
- Portfolio uses `isotope` for layout — replace with CSS Grid or a React
  masonry layout.
- Scroll animations use AOS (Animate On Scroll) — replace with
  `IntersectionObserver` + Tailwind or a React scroll animation library.
- Lightbox uses GLightbox — simplify to direct links or skip for v1.
- The Swiper.js carousel for logos and testimonials can use the `swiper`
  npm package (already available in the monorepo ecosystem).
- The icomoon icon font icons must be replaced with lucide-react.
- All images must use `picsum.photos/seed/unwrap-<n>/w/h` placeholders.
- The footer must link Component Dock instead of Colorlib.
- No ColorLib references anywhere in app code — provenance lives only in
  the spec, TEMPLATES.md, and the PR description.
