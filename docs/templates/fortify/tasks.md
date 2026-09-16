# Fortify (ColorLib Security) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-fortify`. Recreation name: **Fortify** (NEW name —
> the ColorLib source keeps its name "Security").

## Source mapping

- **ColorLib item:** "Security" (TEMPLATES.md line 1396). The
  `wp/template/security/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/security/
- **Preview URL — REACHABLE (verified 2026-09-16):**
  **`https://preview.colorlib.com/theme/security/`**
  (HTTP 200, 24,800 bytes — Bootstrap 4 + custom CSS + Owl Carousel +
  Magnific Popup + Nice Select). The slug in products.js is `security`.
- **Preview CSS:** `css/main.css` (44,903 bytes — all custom styles).
  Also: `css/bootstrap.css`, `css/linearicons.css` (REPLACE with lucide),
  `css/font-awesome.min.css` (REPLACE with lucide), `css/animate.min.css`,
  `css/owl.carousel.css`, `css/magnific-popup.css`, `css/nice-select.css`.
  Fonts: Poppins 100–700 via Cloudflare Fonts. Icons: Linearicons +
  Font Awesome (REPLACE with lucide-react).

## Reference research (done — do not redo)

### Screenshot (security-free-template.jpg, 1200×946)

Analyzed from the live preview HTML + CSS (browser tool unavailable).
The template shows:

- **Navbar:** Dark/transparent, brand "Security" text, nav links on left,
  phone number + Register/Login on right
- **Hero/Banner:** Full-width background image (dark building/tech aesthetic),
  heavy dark overlay (0.7 opacity), white headline text + yellow "Get Started" CTA
- **Services:** 3 cards in a row with icons, titles + descriptions
- **Features:** 6 cards (3x2 grid) on light `#f9f9ff` background,
  each with a colorful circular icon (different accent color per feature)
- **Counter/Stats:** Bright `#fab700` yellow background, 5 stat boxes
  with animated numbers (Projects, Clients, Tasks, Coffee, Professionals)
- **Gallery:** Image grid section
- **Blog:** 4 cards in a row on `#f9f9ff` light bg, each with cover image,
  date, title, excerpt, likes + comments
- **Footer:** Very dark navy `#04091e`, 3 columns (About, Newsletter, Follow Us)
  + copyright

### CSS tokens extracted (2026-09-16)

| Token              | Value                         | Source CSS selector/property               |
| ------------------ | ----------------------------- | ------------------------------------------ |
| Brand yellow       | `#fab700`                     | `.primary-btn` bg, `.facts-area` bg        |
| Cyan accent        | `#4cd3e3`                     | `.single-service` icon color               |
| Blue accent        | `#38a4ff`                     | Feature icon color                         |
| Yellow accent      | `#f4e700`                     | Feature icon color                         |
| Red accent         | `#f44a40`                     | Feature icon color                         |
| Purple accent      | `#6382e6`                     | Feature icon color                         |
| Pink accent        | `#e66686`                     | Feature icon color                         |
| Orange accent      | `#f09359`                     | Feature icon color                         |
| Green accent       | `#73fbaf`                     | Feature icon color                         |
| Light bg           | `#f9f9ff`                     | `.feature-area`, `.blog-area`              |
| Hero overlay       | `rgba(0,0,0,0.7)`             | `.banner-area .overlay-bg`                 |
| Footer bg          | `#04091e`                     | `.footer-area`                             |
| Font               | `"Poppins", sans-serif`       | All text                                   |
| Button             | `#fab700` bg, white text, no border-radius | `.primary-btn`                 |

## Section structure (fidelity order)

Implement these sections in order, matching the original layout 1:1:

1. **Navbar** — sticky, dark, brand "Fortify", nav links (Home, About Us, Service, Team, Price, Blog, Contact), phone + Register/Login
2. **Hero/Banner** — full-width bg image, dark overlay (0.7), headline + subtext + "Get Started" CTA
3. **Services** — 3 cards: Basic & Common Repairs, Brake Repairs & Services, Preventive Maintenance
4. **Features** — light `#f9f9ff` bg, 6 cards (3x2): Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews
5. **Counter/Stats** — `#fab700` yellow bg, 5 animated stat boxes
6. **Gallery** — image grid with placeholder images
7. **Blog** — light `#f9f9ff` bg, 4 blog cards with dates, likes, comments
8. **Footer** — dark `#04091e`, 3 columns (About, Newsletter, Follow Us) + copyright

## Key implementation notes

- **Icons:** Replace Linearicons and Font Awesome with `lucide-react`
- **Carousel:** Replace Owl Carousel with a React carousel (e.g. Swiper or custom)
- **Popup:** Replace Magnific Popup with React modal pattern
- **Select:** Replace Nice Select with native or custom React select
- **Scroll animations:** Replace animate.min.css with Intersection Observer
  based scroll-reveal or framer-motion
- **Counter:** Implement scroll-triggered number animation with
  `IntersectionObserver` + `requestAnimationFrame` or `react-countup`
- **Images:** Use `https://picsum.photos/seed/fortify-<n>/<w>/<h>` for all
  placeholder images (hero bg, gallery, blog covers, etc.)
- **Brand color:** Use `#fab700` in `@theme` as the primary Tailwind color
- **Button style:** Flat buttons with `#fab700` bg, white text, no border-radius
- **Feature icons:** Use 6 different accent colors (cyan, blue, yellow, red,
  purple, pink) for the colorful icon circles
- **No ColorLib references:** All provenance stays in this spec only
- **Footer:** Replace Colorlib attribution with Component Dock link
