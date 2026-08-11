# Genesis (ColorLib Approach) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-genesis/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Approach" — creative agency / design studio
  portfolio landing page (source: https://colorlib.com/wp/template/approach/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/approach/
  (HTTP 200, full rendered DOM + `css/style.css` (19KB) extracted
  2026-08-12 during prep). Screenshot `approach-free-template.jpg`
  (1200×946) viewed in browser and matches the live preview.
- **Visual design:** high-contrast modern dark aesthetic. SOLID BLACK hero
  (no photo — verified computed style `rgb(0,0,0)`, no bg image) with a huge
  white Poppins-900 headline, translucent lead, and a 50px circular white
  play button; masonry-style portfolio collage (b&w architectural + beige/
  peach lifestyle shots) on a #f8f9fa band overlapping the hero by -5rem;
  white services section with 4rem #3b4eda icons; VIVID BLUE #3b4eda blog
  band (Bootstrap `.bg-primary` overridden to the brand color — computed
  rgb(59,78,218)) with white carousel cards; #f8f9fa client logo strip;
  white footer with blue uppercase wordmark. Body font is Source Serif Pro
  serif, headings Poppins 900 — an unusual serif-body + heavy-sans-heading
  pairing; keep it.
- **Structure (1:1, section order):**
  1. Navbar (`site-navbar`, position absolute, transparent over hero):
     logo "Approach" → **Genesis** (white, uppercase, Poppins); links Home,
     Portfolio, About, Services, Blog, Contact (rgba(255,255,255,.7), hover
     #fff, active #fff, margin 15px, padding 20px 0); mobile toggler
     hamburger in **#3b4eda**. Scrolled state (`.sticky-wrapper.is-sticky
.site-navbar`): bg #fff, shadow `4px 0 20px -5px rgba(0,0,0,.2)`, logo
     #3b4eda, links #000, active #3b4eda; `.shrink` trims padding (30px 0
     mobile). Recreate with a scroll listener + sticky class.
  2. Hero (`site-section-cover`, bg **#000** solid; row
     `calc(100vh - 196px)` min-height 677px, mobile `70vh - 196px` min
     600px): centered h1 "Creativity is a wild mind and a disciplined eye."
     (white, Poppins 900, 4rem/64px — 2rem <992px, line-height 1.3) + lead
     p (18px, rgba(255,255,255,.6)) + `.btn-video_38929` (50×50px circle,
     bg #fff, radius 50%, black icon; vimeo https://vimeo.com/191947042 in
     a fancybox → SPA: video modal or link out).
  3. Portfolio (`container-fluid portfolio-wrap bg-light pt-0 site-section`):
     `margin-top: -5rem` (overlaps hero, z-index 2; `:before` black band
     height 70% behind images), bg #f8f9fa. Row 1 = col 3/6/3 (img_1,
     img_2, img_3), Row 2 = col 4/4/4 (img_2, hero_1, hero_3) — 6
     `portfolio-item` links (to portfolio-single.html → in SPA a dead
     link/anchor or modal). Item: overflow hidden, shadow
     `0 4px 40px -5px rgba(0,0,0,.4)`; hover: img scale(1.05) .3s + `:after`
     black overlay opacity .2.
  4. Services (`site-section`, white): 3 cols — `.service-29191`: wrap-icon
     (lucide, `font-size: 4rem`, color **#3b4eda**) + h3 20px weight 900
     #000 + p 16px #6c7b95. Titles: **Interface Design, Product Design,
     Quality Results** (flaticon desktop_windows / explore / layers →
     lucide Monitor / PenTool / Award or Palette / Target / Star).
  5. Blog Updates (`site-section bg-primary` = **#3b4eda** band): left
     col-md-7: h2 "Blog Updates" (white, 32px, weight 700) + white lead p.
     Below: `container-fluid` + `owl-carousel nonloop-block-13` with 6
     `.media-29191` cards (3 per slide; dots: 10px white circles, margin
     4px, `bottom: -3rem`, centered): img → date "October 18, 2019" (white)
     → h3 title 26px bold white link ("Google saying pseudo-telephoto is
     more important") → `.vcard-91123` author row (60px flex avatar, round
     img, name 14px white: "by John Freeman" / "Thinker & Designer").
     Carousel → lightweight auto-advance or scroll-snap strip with dots.
  6. Clients (`site-section bg-light` #f8f9fa): 4 × col-md-3 logo images
     (client_google, client_invision, client_nike, client_microsoft) →
     styled text wordmarks (bold, uppercase, grey) since assets must not be
     copied.
  7. Footer (`footer site-section bg-white`, padding 8em 0; 4em <768px):
     left `.site-logo-footer` "Genesis" (Poppins, uppercase, bold,
     **#3b4eda**); right col-md-8 ml-auto: 3 columns — col-md-4 ml-auto
     **Contact** (Contact Us, hello@mydomain.com, +1 829 2293 382, Support)
     - 2× col-md-4 nav (Home, Blog, Services, About Us). Links
       rgba(0,0,0,.5), hover #000, li margin-bottom 10px.
  8. Social + copyright (`site-section`): 5 centered icon links
     (icon-facebook, icon-twitter, icon-linkedin, icon-instagram,
     icon-skype; `m-2` spacing → lucide Facebook, Twitter, Linkedin,
     Instagram, MessageCircle) + centered copyright "made with ♥ by
     Colorlib" (heart `text-danger`).
- **Design tokens extracted from `style.css` + computed styles:**
  - Primary **#3b4eda** (indigo) — active nav link, scrolled/footer logo,
    service icons, mobile hamburger, dropdown border-top, blog band bg.
  - Black **#000** — hero bg, portfolio hover overlay (.2), portfolio-wrap
    `:before` band (70% height).
  - Light band **#f8f9fa** — portfolio + clients sections.
  - Body **"Source Serif Pro", serif**, color **#6c7b95**, weight 300,
    16px, line-height 1.7.
  - Headings **Poppins 900**: hero h1 64px white (2rem mobile), blog h2
    32px bold white, service h3 20px #000, blog card h3 26px bold white.
  - Play button: 50px circle, bg #fff, black icon. No rectangular CTAs
    anywhere on the landing page.
  - Shadows: navbar `4px 0 20px -5px rgba(0,0,0,.2)` (scrolled); portfolio
    items `0 4px 40px -5px rgba(0,0,0,.4)`.
  - Carousel dots 10px white circles; vcard avatar 60px round.
  - Footer links rgba(0,0,0,.5) hover #000.
- **Recreation name:** Genesis ("origin/creation" — fits the creativity
  theme; no collision with apps/ or spec folders). App folder
  `apps/genesis`, package `@free-react-templates/genesis`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/genesis-<n>/<w>/<h>`); lucide-react icons (Play,
  Monitor, PenTool, Award, Facebook, Twitter, Linkedin, Instagram,
  MessageCircle, Heart); Poppins 400/900 + Source Serif Pro via Google
  Fonts `<link>` in `index.html`; navbar scroll listener (transparent →
  white sticky with #3b4eda logo/active); play button opens a video modal
  (embedded placeholder) or links out; owl-carousel → auto-advancing
  carousel / scroll-snap strip with white dots (3 per slide desktop);
  client logos → text wordmarks; the original's `typed.js` script targets a
  `.typed-words` element that does NOT exist in the index DOM (dead code) —
  skip it, headline is static; repo-standard Navbar/Footer chrome from
  `packages/ui` (Button, ButtonLink, Badge, Card, cn) per conventions;
  original Lorem Ipsum copy paraphrased, same content kinds; no assets
  copied.

## Tasks

- [x] Write `openspec/specs/template-genesis/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/genesis` (copy the simplest existing app; rename package
      to `@free-react-templates/genesis`; `npm install` at root for lockfile;
      register `injectUiSource()` in vite.config.ts).
- [ ] TDD: tests first for Navbar (scroll + mobile toggle), Hero (play
      button), PortfolioGrid, Services, BlogUpdates (carousel), Clients,
      Footer, SocialStrip, App composition — all green at 100% coverage.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh genesis` (typecheck + lint +
      knip + fallow + 100% coverage tests + build).
- [ ] Push `feat/template-genesis`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main).
