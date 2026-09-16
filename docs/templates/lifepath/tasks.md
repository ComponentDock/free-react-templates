# LifePath (ColorLib Life Coaching) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lifepath`. Recreation name: **LifePath** (NEW name —
> the ColorLib source keeps its name "Life Coaching").

## Source mapping

- **ColorLib item:** "Life Coaching" (TEMPLATES.md line 1389; section
  "Consulting" group). The `wp/template/life-coaching/` slug appears
  exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/life-coaching/
- **Preview URL — REACHABLE (verified 2026-09-16):**
  **`https://preview.colorlib.com/theme/lifecoaching/`**
  (HTTP 200, 37,928 bytes — Bootstrap 4 + custom CSS + Owl Carousel +
  Magnific Popup). NOTE: the newer preview wrapper at
  `https://preview.colorlib.com/#life-coaching` also works (hash routing
  loads the iframe). The slug in the products.js data is `lifecoaching`
  (no hyphen), not `life-coaching`.
- **Preview CSS:** `css/style.css` (80,582 bytes — hand-written CSS on top
  of Bootstrap 4). Also: `css/animate.css`, `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/magnific-popup.css`, `css/flaticon.css`.
  Fonts: Poppins 300–900 via Cloudflare Fonts; Icon font: Font Awesome 4.7
  (REPLACE with lucide-react). Also uses flaticon CSS (REPLACE with lucide).
  Scripts: Owl Carousel, Magnific Popup, scrollax (parallax).

## Reference research (done — do not redo)

### Screenshot (lifecoaching-free-template.jpg, 1200×946)

Browsed visually via ColorLib page (browser tool unavailable; analyzed from
page metadata + CSS + HTML). The template shows:

- **Top bar:** Dark bar with phone number (left) and social icons (right)
- **Navbar:** Dark background (#333), brand "Life" (black) + "coach" (grey)
  text, navigation links with lime-green underline hover
- **Hero:** Full-width background image with dark overlay (0.4 opacity),
  centered white headline text + CTA button, appears to be a slider
  with 3 different slides rotating
- **Info row:** 4 boxes below hero — phone, address, hours, appointment CTA
- **Services section 1:** 4 cards in a row with teal (#8fd0d2) icon circles,
  each with a title + description
- **Why coaching works:** Light bg (#f7f7f7), 4 items with teal icon circles,
  titles: Accountability, Expertise, Speed, Delivery
- **Counter:** Background image with dark overlay, 4 stat counters
  (Years, Entrepreneurs, Companies, Books/Podcasts)
- **Testimonials:** Dark secondary bg, carousel with testimonial cards
  (avatar, quote, name, role)
- **Blog:** 3 cards with cover images, date, author, title
- **Newsletter:** Dark overlay strip with "Subscribe for our weekly tips"
- **Pricing:** 3 plan cards with feature lists and lime-green "Get Started" buttons
- **Footer:** Dark (#252525) with 4-column link layout + copyright

### CSS tokens extracted (2026-09-16)

| Token              | Value                         | Source CSS selector/property               |
| ------------------ | ----------------------------- | ------------------------------------------ |
| Brand lime         | `#c5cf31`                     | `.btn-primary` bg, `.ftco-navbar-light .nav-link:before` |
| Services icon bg   | `#8fd0d2`                     | `.services .icon`, `.services-2 .icon`     |
| Navbar bg          | `#333333`                     | `.ftco-navbar-light` override               |
| Hero overlay       | `#000000` opacity 0.4         | `.hero-wrap .overlay`                       |
| Footer bg          | `#252525`                     | `.footer`                                   |
| Testimony bg       | Bootstrap secondary           | `.testimony-section.bg-secondary`           |
| Font               | `"Poppins", Arial, sans-serif`| `@font-face` declarations (300–900)        |
| Button radius      | `0.25rem` (Bootstrap default) | `.btn`                                      |
| Nav link underline | `#c5cf31` (lime)              | `.ftco-navbar-light .nav-link:before`       |

## Section structure (fidelity order)

Implement these sections in order, matching the original layout 1:1:

1. **TopBar** — phone + social icons, dark bg
2. **Navbar** — sticky, dark bg, brand "LifePath", nav links (Home, About, Services, Stories, Blog, Contact), hamburger on mobile
3. **Hero** — full-width slider, bg images, dark overlay, headlines + CTA
4. **InfoRow** — 4 boxes: phone, address, hours, appointment CTA
5. **Services1** — 4 cards: Career & Business, Mental & Physical Care, People & Relationships, Life coaching; teal icon circles
6. **WhyCoaching** — light bg, 4 items: Accountability, Expertise, Speed, Delivery; teal icon circles
7. **Counter** — bg image + overlay, 4 animated stat boxes
8. **Testimonials** — dark secondary bg, carousel with 3+ entries
9. **Blog** — 3 blog cards with cover images
10. **Newsletter** — dark overlay strip, email input + subscribe
11. **Pricing** — 3 plan cards, lime-green CTA buttons
12. **Footer** — dark #252525, 4 columns, copyright with ComponentDock link

## Key implementation notes

- **Icons:** Replace Font Awesome 4.7 and flaticon with `lucide-react`
- **Carousel:** Replace Owl Carousel with a React carousel (e.g. Swiper or custom)
- **Popup:** Replace Magnific Popup with React modal pattern
- **Scroll animations:** Replace Scrollax / CSS animate with Intersection Observer
  based scroll-reveal or framer-motion
- **Counter:** Implement scroll-triggered number animation with
  `IntersectionObserver` + `requestAnimationFrame` or `react-countup`
- **Images:** Use `https://picsum.photos/seed/lifepath-<n>/<w>/<h>` for all
  placeholder images (hero bg, blog covers, testimonial avatars)
- **Brand color:** Use `#c5cf31` in `@theme` as the primary Tailwind color
- **No ColorLib references:** All provenance stays in this spec only
- **Footer:** Replace Colorlib.com attribution with Component Dock link
