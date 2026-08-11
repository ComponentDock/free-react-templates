# Equity (ColorLib Inves) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-equity`.

## Design notes (replication findings)

- **Original:** ColorLib "Inves" — investment consulting template
  (source: https://colorlib.com/wp/template/inves/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/inves/
  (HTTP 200; ~32.8 KB HTML + `css/style.css` ~21.7 KB parsed; live render
  browsed for section order + computed styles). Screenshot
  `inves-free-template.jpg` used as the visual reference.
- **Visual design (from screenshot):** white fixed header, purple "INVES"
  logo; full-bleed business-meeting photo hero under a dark overlay with
  centered white headline ("Investment Consulting.") and a white-outline
  "Get in touch" button; carousel arrows; a 3-column image-card row
  (skyscrapers / suit cufflink / smartphone finance chart) tucked under
  the hero's bottom edge.
- **Structure (1:1, section order from live render):**
  1. Header (`.site-navbar.js-sticky-header`, white, sticky): site-logo
     "Inves" with purple `<span class="text-primary">` + desktop
     `.site-menu.main-menu` links (Home #home-section, Investors
     #investors-section, About #about-section, Services
     #services-section, Press #press-section, Blog #blog-section,
     Contact #contact-section) + `.toggle-button` mobile menu toggle
     (offcanvas menu).
  2. Hero (`.owl-carousel.slide-one-item`): 2 slides
     (`.site-section-cover.overlay.img-bg-section`, bg `hero_1.jpg` /
     `hero_2.jpg`, overlay `rgba(52,58,64,0.3)`; 100vh / min 700px,
     mobile 70vh / min 400px): h1 4.5rem white lh 1 (mobile 2rem),
     p 1.6rem `rgba(255,255,255,0.8)`, `.btn.btn-white-outline
border-w-2.btn-md` "Get in touch" (transparent, 2px #fff border,
     hover: white bg + black text); owl prev/next arrows (5rem, white
     40% opacity) at the sides. Slide 1 h1 "Investing for Success",
     slide 2 h1 "Investment Consulting".
  3. Featured services strip (`.pb-5`, `position:relative; z-index:8`,
     inner row `margin-top:-50px` to overlap hero): 3 ×
     `col-md-6 col-lg-4 mb-4 mb-lg-0` — `img.img-fluid.mb-3`
     (img_1/2/3.jpg) + h3 `.text-primary.h4.mb-2` (Business Analytics /
     Investment Solutions / Individual Approach) + p + "Read more" link.
  4. Investors (`.pt-5`): `.block-heading-1` (uppercase 12px #b8b8b8
     span + h2 2.5rem #7f4782) "Our Investors" + 4 × `col-md-3` client
     logo images (svg logos).
  5. About (`.site-section`): left `col-lg-6` `.block-img-video-1`
     figure — popup-vimeo link with 80px round white play icon over
     hero_1.jpg; right `col-lg-5.ml-auto` — h2 `.text-primary.mb-4`
     "Welcome to Inves", 3 paragraphs, "Read More" link; then counters
     row: 4 × `.block-counter-1` (`col-md-6 mb-4` → `col-md-3`):
     `.number` 4rem #7f4782 + 50×3px underline, `.caption` 14px
     `letter-spacing:.05em` #000 — "0 Year of Experience", "0 Number of
     Engineers", "0 Number of Employees", "0 Number of Golds".
  6. Services (`.site-section.bg-light`, bg #f4f5f9): `.block-heading-1`
     "Our Services" + 6 cards (2 rows × 3, `col-md-6 col-lg-4 mb-4`):
     flaticon icon span (`.display-3.text-secondary`, icons signal /
     anchor / magnet / briefcase / money / …) + h3 `.text-primary.h4
.mb-2` + p. Titles repeat: Business Analytics, Investment
     Solutions, Individual Approach ×2.
  7. Leadership (`.site-section`): `.block-heading-1` "Our Leadership" +
     3 × `col-lg-4 col-md-6 mb-4 mb-lg-0` `.block-team-member-1
.text-center.rounded` (padding 30px, border 1px #e9ecef): figure
     130px `rounded-circle` photo; h3 `.font-size-20.text-white` name
     (UPSTREAM BUG — white on white; use ink #25262a and note in PR);
     role span `.font-gray-5.letter-spacing-1.text-uppercase.font-size-12`
     (#b8b8b8, e.g. MINING EXPERT / PROJECT MANAGER / ENGINEER); p
     `.px-3.mb-3` bio; `.block-social-1` 3 × `a.btn.border-w-2.rounded`
     social icon buttons (facebook/twitter/instagram).
  8. Press (`.site-section`): left `col-lg-4` `.block-heading-1` "Press
     Releases"; right `col-lg-8` `ul.list-unstyled` 3 × `li.mb-4
.d-block.d-md-flex` — thumb `img.img-fluid` (`mr-5 mb-4`) + h4
     `.text-black` title link ("How To Invest In Investing Company") +
     date span `.text-secondary.mb-4` ("Apr 19, 2019") + excerpt p.
  9. Testimonials (`.site-section.block-13.overlay.bg-image`, bg
     hero_1.jpg fixed + overlay `rgba(52,58,64,0.4)`): `.block-heading-1`
     "Testimonial" (white) + owl carousel of 4 × `.block-testimony-1
.text-center` (padding 20px): `blockquote` white card padding 30px
     italic Georgia 18px #000, figure 60px round avatar, h3 name 18px
     (Ken Davis, Mellisa Griffin, Robert Steward, Ricky Fisher); dots
     #ccc / active #7f4782.
  10. Blog (`.site-section`): `.block-heading-1` span "Latest Blog
      Posts" + h2 "Our Blog" + 2 × `col-md-6 col-lg-4 mb-4 mb-lg-0`
      post cards — image link + h2 title ("How to Invest In Investing
      Company") + meta "January 18, 2019 By James Cooper" + excerpt +
      "Get Started" / "Read More" link.
  11. Contact (`.site-section.bg-light`): `.block-heading-1` span "Get
      In Touch" + h2 "Contact Us" + form (2 text inputs placeholder
      "First name" [first/last], email input, textarea "Write your
      message.", submit "Send Message" purple) + right `col-md-4
.ml-auto`: h2 "Need to know more on details? Call Us" + tel link
      "+1 392 3929 482" + paragraph.
  12. Footer (`.site-footer`, bg #333333, padding 8em 0 desktop / 4em
      mobile): col `About Us` (h2 `.footer-heading.mb-4` 16px white + p
      #737373); col `Features` (`ul.list-unstyled` links #999999 hover
      #fff: About Us, Press Releases, Testimonials, Terms of Service,
      Privacy, Contact Us); col `Some Paragraph` (h2 + p) + "Subscribe
      to Newsletter" form (`.form-control.border-secondary
.text-white.bg-transparent` email input + `.btn.btn-primary
.text-white` Subscribe button); "Follow Us" social icons; bottom
      copyright (© year, credit "Colorlib" link) with border-top
      `rgba(255,255,255,0.1)`.
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#7f4782** (purple) — logo span, block-heading h2,
    h2/h3 `.text-primary`, counter numbers, testimonial active dot,
    form focus border.
  - Ink: **#25262a** / **#000**; muted **#939393** (body), **#b8b8b8**
    (`.font-gray-5` eyebrows/roles), #ccc (carousel dots).
  - Section bgs: #fff; **#f4f5f9** (`bg-light` services + contact);
    overlays `rgba(52,58,64,0.3)` hero / `0.4` testimonials; footer
    **#333333**.
  - Buttons: hero CTA = white-outline (2px #fff border, transparent,
    hover invert); solid purple `btn-primary` for submit/subscribe;
    team socials = 2px outline rounded squares.
  - Fonts: **"Nunito"** sans stack everywhere; testimonial quotes
    **Georgia, serif** italic 18px.
  - Forms: `.form-control` height 55px, no border, soft shadow
    `0 4px 5px -3px rgba(0,0,0,0.2)`; newsletter input transparent on
    dark footer.
- **Recreation name:** Equity (NEW — differs from ColorLib "Inves").
  App folder `apps/equity`, package `@free-react-templates/equity`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/equity-<n>/<w>/<h>`); Nunito via Google Fonts
  `<link>`; lucide-react icons (signal, anchor, magnet, briefcase,
  money, play, menu, x; social brands as inline SVG simple-icons paths
  — lucide removed brand icons); purple accent in `@theme`; reuse
  `packages/ui` (Button, ButtonLink, cn).
- **Hero carousel:** implement a lightweight auto-advancing carousel
  (2 slides) with prev/next arrows — no owl dependency; arrows white
  40% opacity, hover full white.
- **Counters:** static in the original (0 values); render the 4 numbers
  as static text (no count-up dependency needed).
- **Testimonials carousel:** 4 quotes, dots (active #7f4782), prev/next
  optional; white cards on the dark photo background.

## Tasks

- [x] Write `openspec/specs/template-equity/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/equity` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/equity`; run
      `npm install` at root so package-lock registers the workspace).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage:
      Navbar, HeroCarousel (2 slides), FeaturedStrip, Investors,
      About (video figure + counters), Services (6 icon cards),
      Leadership (3 team cards), Press (3 items), Testimonials
      (carousel), Blog (2 cards), Contact (form + call block),
      Footer.
- [ ] Team names: use readable ink (#25262a) — original renders
      white-on-white (`text-white` upstream bug); document deviation
      in the PR.
- [ ] Per-app gate: `npm run verify:app -- equity` (typecheck + lint +
      100% coverage + build).
- [ ] Push `feat/template-equity`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
