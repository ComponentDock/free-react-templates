# Driftwood (ColorLib Pacific) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-driftwood`. Recreation name: **Driftwood** (NEW name
> — the ColorLib source keeps its name "Pacific").

## Source mapping

- **ColorLib item:** "Pacific" (TEMPLATES.md line 1123; travel templates).
- **Source URL:** https://colorlib.com/wp/template/pacific/
- **Preview URL — REACHABLE (verified 2026-09-13 by direct fetch):**
  **`https://preview.colorlib.com/theme/pacific/`**
  (HTTP 200, full HTML returned, `<title>Pacific - Free Bootstrap 4 Template by Colorlib</title>`).
- **Preview CSS:** `css/style.css` (Bootstrap 4.5.0 bundled + custom template
  styles). Fonts loaded via Cloudflare CDN: Poppins (300–900) + Arizonia (400).
  Additional CSS: `css/animate.css`, `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/magnific-popup.css`,
  `css/bootstrap-datepicker.css`, `css/jquery.timepicker.css`,
  `css/flaticon.css`. Scripts: jQuery, Bootstrap, Owl Carousel, Magnific Popup.

## Reference research (done — do not redo)

### Live preview DOM structure (fetched 2026-09-13)

Full HTML body extracted via `curl`. Section order (10 sections):

1. **Navbar** — `<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light">`. Brand: "Pacific" `<span>Travel Agency</span>`. Links: Home (active), About, Destination, Hotel, Blog, Contact.
2. **Hero** — `<div class="hero-wrap js-fullheight">` with inline `background-image: url('images/bg_5.jpg')`. Inner `.overlay` div (black 30% opacity). Content: `.subheading` "Welcome to Pacific", `<h1>` "Discover Your Favorite Place with Us", `<p class="caps">` description, circular `.icon-video` play button (fa-play).
3. **Search Bar** — `<section class="ftco-section ftco-no-pb ftco-no-pt">`. Pill tabs: "Search Tour" (active) / "Hotel". Each tab: form with Destination, Check-in, Check-out, Price Limit (select with $100–$2M options), Search btn-primary.
4. **Services** — `<section class="ftco-section services-section">`. Split: left text (col-md-6 order-md-last) + right 2×2 grid of `.services.services-1` cards with background images and colored overlays. Cards: Activities (paragliding icon), Travel Arrangements (route icon), Private Guide (tour-guide icon), Location Manager (map icon).
5. **Select Destination** — `<section class="ftco-section img ftco-select-destination">` with inline bg image. `.carousel-destination.owl-carousel` of `.project-destination` cards: Philippines (8 Tours), Canada (2 Tours), Thailand (5 Tours), Australia (5 Tours), Greece (7 Tours).
6. **Tour Destinations** — `<section class="ftco-section">`. White bg, `.project-wrap` cards in 3-column grid. Each: bg image + `.price` badge, `.days` tag, `<h3>` title, `.location` with map-marker icon, amenity `<ul>` (shower/bed/mountain-or-beach icons).
7. **Video Section** — `<section class="ftco-section ftco-about img">` with inline bg image + `.overlay`. Centered `.icon-video` play button.
8. **About** — `<section class="ftco-section ftco-about ftco-no-pt img">`. Split: left `.img` with bg image, right text (col-md-6 pl-md-5): subheading "About Us", h2, description, "Book Your Destination" btn-primary.
9. **Testimonials** — `<section class="ftco-section testimony-section bg-bottom">` with inline bg image + `.overlay`. `.carousel-testimony.owl-carousel` of `.testimony-wrap` cards: 5-star rating, quote, `.user-img` avatar, `.name`, `.position`.
10. **Footer** — `<footer class="ftco-footer bg-bottom ftco-no-pt">` with inline bg image. 4 columns: About (text + social icons), Information (6 links), Experience (6 links), Have a Questions? (address, phone, email). Copyright line with Colorlib attribution → replace with Component Dock.

### Design tokens extracted from live CSS

- **Brand accent:** `#f15d30` — orange-red. Used for `.slider-text .subheading` font color, `.services.services-1` base background, `.services.services-1 .icon` background.
- **Service card overlays:** `.services.color-1:after` = `#1089ff` (blue), `.color-2` = `#048998` (teal), `.color-3` = `#00a8b5` (cyan), `.color-4` = `#ff5959` (coral-red).
- **Hero overlay:** `.hero-wrap .overlay` = `background: #000000; opacity: .3`.
- **Navbar:** `.ftco-navbar-light` on `.bg-dark` (`#343a40`). Transitions on `.scrolled`.
- **Body font:** `font-family: "Poppins", Arial, sans-serif;` (declared in `.navbar` and body).
- **Display font:** `font-family: "Arizonia", cursive;` (`.slider-text .subheading`).
- **Subheading size:** `font-size: 30px;` (Arizonia, brand accent color).
- **Hero h1:** `font-size: 55px; color: #fff; font-weight: 700; line-height: 1.2;`.
- **Button:** Bootstrap `.btn-primary` (`#007bff`), `border-radius: 0.25rem`.
- **Service cards:** `.services.services-1` = `background: #f15d30; padding: 30px;`. Overlay via `:after` pseudo-element with color per `.color-N`.
- **Footer:** `.ftco-footer` = `padding: 7em 0;`. Widget headings `#000000`, 18px, weight 600. Links `rgba(0,0,0,0.5)`. Social icons in `.ftco-footer-social`.
- **Testimonial/destination parallax:** Same overlay pattern (black 30%).
- **About box shadow:** `box-shadow: 0px 10px 23px -8px rgba(0,0,0,0.11)`.

### Screenshot analysis

Screenshot from TEMPLATES.md: `pacific-free-template.jpg` shows a travel agency
template with a full-width hero image (tropical beach/landscape), dark navbar at
top, white search form bar overlapping the hero bottom edge, and the start of a
services section below. Color palette: warm orange accent text on white/light
backgrounds, dark overlay on hero. Clean, modern travel agency aesthetic.

## Implementation tasks

### 1. Scaffold app
- [ ] Create `apps/driftwood/` from simplest existing app template
- [ ] Set package name `@free-react-templates/driftwood`
- [ ] Set `public/CNAME` to `driftwood.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://driftwood.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()` pattern

### 2. Design tokens in index.css
- [ ] Import Poppins (400, 500, 600, 700) and Arizonia (400) via Google Fonts link in index.html
- [ ] Define `@theme` tokens: `--color-brand: #f15d30`, `--color-service-blue: #1089ff`, `--color-service-teal: #048998`, `--color-service-cyan: #00a8b5`, `--color-service-red: #ff5959`

### 3. Components (section order)
- [ ] **Navbar.tsx** — dark bg, brand "Driftwood" with subtitle "Travel Agency", 6 nav links, scrolled state
- [ ] **Hero.tsx** — full-height, parallax bg, overlay, Arizonia subheading, Poppins h1, description, video play button
- [ ] **SearchBar.tsx** — pill container, 2 tabs (Search Tour / Hotel), form fields (Destination, Check-in, Check-out, Price Limit dropdown, Search button)
- [ ] **Services.tsx** — split layout (text left, 2×2 grid right), 4 service cards with bg images + colored overlays + icons
- [ ] **SelectDestination.tsx** — parallax bg, heading, horizontal scroll/carousel, 5 destination cards (name + tour count)
- [ ] **TourDestinations.tsx** — white section, heading, 2×3 grid, 6 cards (image, price badge, duration, title, location, amenities)
- [ ] **VideoSection.tsx** — full-width parallax bg, centered play button
- [ ] **About.tsx** — split layout (image left, text right), subheading, heading, description, CTA button
- [ ] **Testimonials.tsx** — parallax bg, heading, carousel of cards (star rating, quote, avatar, name, position)
- [ ] **Footer.tsx** — 4-column layout over parallax bg, social icons, links, contact info, copyright with Component Dock link

### 4. App.tsx
- [ ] Compose all sections in order
- [ ] Pass any shared state (e.g. active search tab)

### 5. Tests
- [ ] Each component: render, content, accessibility
- [ ] Navbar: scrolled state toggle
- [ ] SearchBar: tab switching
- [ ] Testimonials: carousel navigation (if interactive)
- [ ] 100% coverage

### 6. Final
- [ ] Run `npm install` at repo root
- [ ] Verify `grep -c "free-react-templates/driftwood" package-lock.json`
- [ ] Run `scripts/verify-app.sh driftwood`
- [ ] Commit and push
