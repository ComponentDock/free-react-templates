# Asana (ColorLib Yogalax) — Tasks & Design Notes

> Recreation of ColorLib "Yogalax" — free Bootstrap yoga studio template
> (https://colorlib.com/wp/template/yogalax/) under the NEW name **Asana**
> (Sanskrit for a yoga posture — the meditation/yoga theme; single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-09; "prana" was taken by a sibling spec),
> per the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Yogalax" — free Bootstrap 4 yoga studio website
  template (page title: "Yogalax - Free Bootstrap 4 Yoga Template By
  Colorlib"), **Beauty (28)** category in TEMPLATES.md. The recreation
  brands itself **Asana**.
- **Preview DOM analyzed (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/yogalax/` — HTTP 200, 36.9 KB HTML +
  `css/style.css` 69.9 KB (Bootstrap 4 + custom styles from line ~1554).
  Screenshot `yogalax-free-template.jpg` (1200×946) matches the live
  render's design language. ⚠ CTA copy discrepancy: screenshot shows
  "10 Day Free Trial", live DOM (source of truth) reads "15 Day Free
  Trial".
- **⚠ KEY TRAP:** the CSS contains a class-schedule table
  (`.sched-list`, `.thead-primary`, `color-1..5` rows) and a Google Map
  (`#map`) — **NEITHER is rendered in this page's DOM**. Do not build a
  schedule section or a map. Follow the 11 rendered sections exactly.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.ftco-navbar-light`) — transparent, absolute,
     `top: 10px`, z-index 3, over the hero. Brand "Yogalax" 22px weight
     300 uppercase letter-spacing 2px (brand `<span>` pink `#d291bc`
     28px). Links 14px weight 300 padding 20px: Home, Classes,
     Schedule, About, Blog, Contact; active link pink + pink `:after`
     underline. `.scrolled` on scroll: fixed, white bg, shadow
     `0 0 10px rgba(0,0,0,0.1)`, `.sleep`/`.awake` hide/show on scroll
     direction. ≤991px: solid black bg, white links, white brand,
     hamburger toggler (uppercase, letter-spacing .1em).
  2. **Hero** (`section.hero-wrap.js-fullheight`) — full-height,
     `style="background-image: url('images/bg_2.jpg')"` (meditating
     woman), cover. `.overlay`: 45deg `#d291bc → transparent`, width
     68% (100% ≤991px), opacity .3. `.slider-text`: h1 "Do Yoga today
     for a better tomorrow" 80px weight 200 black; `btn-primary` "15 Day
     Free Trial" — `#d291bc` bg white text, radius 30px, 1px
     `rgba(255,255,255,0.4)` border; hover → white bg black text.
  3. **Intro** (`section.ftco-section.ftco-intro`) — white; container >
     row.justify-content-end > col-md-6 (right column): h2 "Why You
     Should Go To Yoga" 60px weight 300 + lorem paragraph `#b3b3b3`
     16px lh 1.8. (Screenshot shows a yoga-pose photo; live DOM is
     text-only — follow the DOM.)
  4. **Services** (`section.ftco-section-services.bg-light`, bg
     `#fafafa`) — 4 × col-md-3 `.services`: `.icon` 100px circle bg
     `#f7ebf3` radius 50%, flaticon glyph 44px `#d291bc`; h3 20px weight
     500 + lorem: **Healthy Lifestyle, Body & Mind Balance, Meditation
     Practice, Edeology** (sic — may fix to "Ideology").
  5. **Class packages** (`section.ftco-section`) — white; subheading
     "Yoga Classes" (16px uppercase ls 3px `#b3b3b3`) + h2 "Choose Your
     Level & Focus" 60px weight 300. 6 × col-md-4 `.package-program`
     (3×2): 400px image; hover → `#d291bc` overlay opacity .5 + white
     text fade-in (h3 30px weight 500 + lorem): **Group Lessons, Yoga
     For Beginners, Yoga For Pregnant, Yoga For Couples, Bikram Yoga,
     Yoga Barre**.
  6. **Pricing** (`section.ftco-section.bg-light`) — subheading "Pricing
     Tables" + h2 "Membership Cards". 3 × col-md-4 cards: **Year Card**
     $449 "For 1 Year"; **Monthly Card** $200 "For 1 Month"; **Weekly
     Card** $85 "For 1 Week". Each: price (`$` + number), duration,
     "Enjoy All The Features", 4-item feature list (Year: Onetime Access
     To All Club, Group Trainer, Book A Group Class, Fitness Orientation;
     Monthly: Group Classes, Discuss Fitness Goals, Group Trainer,
     Fitness Orientation), "Get Started" button.
  7. **Testimonials** (`section.ftco-section.testimony-section`) —
     white; subheading "Testimony" + h2 "Successful Stories". Owl
     carousel (`#carousel-testimony`) of 5 `.testimony-wrap`: 110px
     round avatar, lorem quote `rgba(0,0,0,0.8)`, `.name` 18px weight
     500 black, `.position` 13px, 40px `#d291bc` quote bubble
     overlapping avatar left edge; hover-reveal arrows + pink gradient
     dots.
  8. **Stats counter** (`section.ftco-counter.ftco-bg-dark.img`) — dark
     `#090808` band + bg photo + pink 45deg overlay (`.overlay` opacity
     .8). 4 counter-wrap (col-lg-3): 80px circle icon, 1px `#d291bc`
     ring via `.icon:after`, animated number (starts 0, animateNumber),
     label: **Happy Customers, Yoga Workshops, Years of Experience,
     Lesson Conducted**.
  9. **Blog** (`section.ftco-section.bg-light`) — subheading "Blog" + h2
     "Recent Posts". 3 `.blog-entry` (image via CSS bg): date block
     ("31 December 2018", "27 December 2018", "25 December 2018"), h3
     "Young Women Doing Yoga", lorem, read-more.
  10. **Gallery** (`section.ftco-gallery.ftco-section`) — subheading
      "Gallery" + h2 "See the latest photos". 6 `.gallery` tiles 270px
      tall (CSS bg images), hover → 60px `#d291bc` circle icon fade-in
      (magnific-popup zoom cursor).
  11. **Footer** (`footer.ftco-footer`) — **pink** `#d291bc` bg + overlay
      gradient; 3 columns: h1.logo "Yogalax" 30px weight 300 white;
      h2.location "203 Fake St. Mountain View, San Francisco,
      California, USA" 24px white .9; social circles 50px bg
      `rgba(255,255,255,0.05)` radius 50% (icon-twitter, icon-facebook,
      icon-instagram glyphs 26px white); centered copyright line (white
      .7, "made with ♥ by Colorlib" — replace the Colorlib credit per
      repo rules).
- **JS behaviors (original):** Bootstrap scroll-state navbar
  (`scrolled`/`sleep`/`awake`), Owl Carousel testimonials (arrows +
  dots), `animateNumber` counters, AOS scroll reveal, magnific-popup
  gallery lightbox, hero typewrite class (unused on this page), Google
  Maps (CSS only, not rendered). Recreate: sticky navbar with scroll
  state, index-based testimonial carousel, IntersectionObserver count-up,
  optional lightbox; skip map and schedule.
- **Responsive:** ≤991px navbar black solid, hero overlay 100% width;
  ≤767px h2 → 28px, `.ftco-section` padding 6em 0, all grids stack
  single-column.
- **Neighbor check (2026-08-09):** sibling wellness/spa preps: Halcyon
  (Wellspa, green/gold spa), Sooth (Serenite), and Yoga-category siblings
  (Yogaflex, Yoga, etc. — none prepped yet). Asana is the pink `#d291bc`
  - Work Sans thin-headline treatment — keep it distinct.
- **Form styles (unused in DOM):** `.form-control` 58px height, 1px
  `rgba(0,0,0,0.08)` border, radius 0, focus border `#d291bc` — only if
  the implementer adds a contact form (NOT in the source page; do not
  add one).

## Tasks (implementation order)

- [ ] Scaffold `apps/asana` (copy simplest existing app, rename package to
      `@free-react-templates/asana`; NOT `apps/yogalax`); `npm install` at
      root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-brand: #d291bc` (buttons, links,
      overlays, footer bg), `--color-icon-bg: #f7ebf3` (services
      circles), `--color-dark: #090808` (counter band), `--color-body:
    #b3b3b3`, `--color-section: #fafafa` (light sections), `--color-ink:
    #000` (headings)
- [ ] `index.html`: Work Sans 200/300/400/500 Google Fonts `<link>`,
      title "Asana — Yoga & Wellness Template"
- [ ] Navbar: transparent absolute over hero; brand "Asana" (uppercase,
      pink accent span); links Home/Classes/Schedule/About/Blog/Contact,
      active pink + underline; sticky white-on-scroll with shadow;
      black solid + collapsible toggle ≤991px
- [ ] Hero: full-height, `picsum.photos/seed/asana-1/1920/1080` photo,
      cover; 45° pink gradient overlay (68% width, opacity .3; 100%
      ≤991px); h1 "Do Yoga today for a better tomorrow" 80px weight 200;
      "15 Day Free Trial" button `#d291bc` radius 30px, hover → white
      bg/black text (DOM copy — NOT the screenshot's "10 Day")
- [ ] Intro: right-aligned col-md-6 "Why You Should Go To Yoga" 60px
      weight 300 + lorem paragraph (text-only — no image, per DOM)
- [ ] Services: 4 cards, 100px `#f7ebf3` circle + 44px pink icon
      (lucide: `Heart`, `Brain`, `Sparkles`, `Leaf` or similar), h3 20px
      weight 500, `#fafafa` section bg
- [ ] Packages: "Yoga Classes" / "Choose Your Level & Focus"; 6 cards
      3×2 grid, 400px image (`seed/asana-2..7/800/400`), hover →
      `#d291bc` overlay .5 + white text
- [ ] Pricing: "Pricing Tables" / "Membership Cards"; 3 cards (Year
      $449 / Monthly $200 / Weekly $85), duration label, "Enjoy All The
      Features", 4-item feature list, "Get Started" button
- [ ] Testimonials: "Testimony" / "Successful Stories"; carousel with
      prev/next + dots; 110px round avatars, 40px pink quote bubble,
      name + position
- [ ] Counter band: `#090808` bg + photo + pink overlay; 4 counters
      (80px icon with 1px `#d291bc` ring) count-up via
      IntersectionObserver: Happy Customers, Yoga Workshops, Years of
      Experience, Lesson Conducted
- [ ] Blog: "Blog" / "Recent Posts"; 3 cards with image, date block,
      title, excerpt
- [ ] Gallery: "Gallery" / "See the latest photos"; 6 tiles 270px tall,
      hover → 60px pink circle icon (optional lightbox)
- [ ] Footer: `#d291bc` bg; brand 30px weight 300 white; fake address
      24px; 3 round social buttons (lucide `Twitter`, `Facebook`,
      `Instagram`); centered copyright (Colorlib credit replaced)
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh asana` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs (Asana
      name, "15 Day" CTA copy from DOM, placeholder photos, Colorlib
      credit replaced); merge immediately; `[~]`→`[x]` + surge URL +
      `npm run readme:status`
