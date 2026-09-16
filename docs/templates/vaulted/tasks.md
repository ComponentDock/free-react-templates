# Vaulted (ColorLib Crose) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-vaulted` by an implementer stream.

## Design notes

- **Original:** ColorLib "Crose" — free church/religious website template.
  Source: https://colorlib.com/wp/template/crose/. New name: **vaulted** (a
  church vault/arch — fits the religious theme; single lowercase word, no
  collision with `ls apps/` or existing specs). Crose appears in TEMPLATES.md
  at line 1295 (Faith & Religion section, first unchecked without a prep).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/crose/`
  (HTTP 200, ~27KB) + stylesheet `style.css` (~24KB) plus `bootstrap.min.css`,
  `classy-nav.css`, `owl.carousel.min.css`, `animate.css`, `magnific-popup.css`,
  `font-awesome.min.css`. Full rendered DOM extracted; structure below is from
  the DOM + CSS tokens. Screenshot `crose-free-template.jpg` confirms: modern
  church site with red accent color, white/light sections, dark overlays on
  hero/parallax areas. Palette: crimson red `#c92f2f`, near-black `#1f1f2c`,
  gray `#636363`, light gray `#f3f3f3`, white `#ffffff`.
- **Structure observed (1:1):**
  1. `div.top-header` (bg `#f3f3f3`): container > row > col-12 > d-flex
     justify-content-between: left = `.top-header-meta` with clock icon +
     "Opening Hours - 10 Am to 6 PM" + social icons (Facebook, Twitter,
     Google+); right = email address + phone number. Text color `#959595`,
     icons `#c92f2f`.
  2. `div.crose-main-menu` > `div.classy-nav-container` > `nav.classy-navbar`:
     logo left (img `logo.png`), hamburger toggle, `.classy-menu` with
     `.classynav` > `ul` > **Home**, **Pages** (dropdown: Home, About,
     Sermons, Sermons Details, Events, Blog, Blog Details, Contact),
     **Megamenu** (4-column mega dropdown), **Events**, **Sermons**, **Blog**,
     **Contact** — plus search icon and red "Donate Us" `.crose-btn`.
  3. `section.hero-area.hero-post-slides.owl-carousel`: 2 slides, each
     `div.single-hero-slide.bg-img.bg-overlay` (bg image + dark overlay
     `rgba(15,6,6,0.7)`): centered `h2` white headline ("Building The Hope" /
     "Making Jesus Known"), `p` white subtext, `.crose-btn` "About Us" /
     "Contact Us".
  4. `section.about-area.section-padding-100-0`: centered `div.section-heading`
     with `h2` "Welcome To Church" + `p` description; 3 `div.about-us-content`
     cards (col-lg-4): each has `img` + `.about-text` with `h4` title +
     `p` + `a` "Read More" link.
  5. `section.call-to-action-area.section-padding-100.bg-img.bg-overlay`
     (parallax bg `img/bg-img/6.jpg`): centered `.call-to-action-content` with
     `h6` "A Place For You" + `h2` description + `.crose-btn.btn-2` "Become A
     Member" (white bg, red text).
  6. `section.latest-sermons-area.section-padding-100-0`: centered heading
     "Latest Sermons" + `p` description; 3 `div.single-latest-sermons` cards
     (col-lg-4): `.sermons-thumbnail` with img + `.sermons-date` badge (day
     large + month), `.sermons-content` with `.sermons-cata` (4 media icons:
     video/audio/docs/download), `h4` title, `.sermons-meta-data` (speaker,
     categories, time).
  7. `section.upcoming-events-area.section-padding-0-100`: heading area with
     parallax bg + dark overlay (white "Upcoming Events" heading); below:
     `.upcoming-events-slides-area` > `.upcoming-slides.owl-carousel` > event
     cards: `.single-upcoming-events-area` d-flex with `.upcoming-events-thumbnail`
     img + `.upcoming-events-content` (title, `.events-meta` with calendar/
     clock/map-marker icons + date/time/location, paragraph, "Read More" link,
     `.find-out-more-btn` with `.crose-btn.btn-2`).
  8. `div.gallery-area.d-flex.flex-wrap`: 10 `div.single-gallery-area` items,
     each with `a.gallery-img` wrapping an `img` — flexbox grid layout, hover
     overlay with magnific-popup lightbox trigger.
  9. `section.blog-area.section-padding-100-0`: centered heading "Latest News"
     + description; 3 `div.single-blog-post` cards (col-lg-4):
     `.post-thumbnail` img, `.post-content` with `a.post-title` h4, `.post-meta`
     d-flex (author icon + date icon), `p.post-excerpt`.
  10. `section.subscribe-area` (dark bg): container d-flex align-items-center:
      left `.subscribe-text` with `h3` "Subscribe To Our Newsletter" + `h6`
      subtitle; right `.subscribe-form` with email `input` + `.crose-btn`
      "subscribe" button (positioned absolute inside form).
  11. `footer.footer-area` > `.main-footer-area` (dark bg): 4 `div.single-
      footer-widget` (col-lg-3 each): logo + desc, "Quick Link" nav (8 links
      with angle-double-right icons), "News Latest" (2 items), "Contact Us"
      (address, phone, email, hours). Bottom `.copywrite-area`: copyright text
      + 4 social icons (Facebook, Twitter, Google+, LinkedIn).
- **Design tokens:**
  - Fonts: **Open Sans** (body, 300/400/600/700/800) + **Raleway** (headings,
    700/800) via Google Fonts `<link>` in index.html. Body base 14px, line-
    height 1.8. Headings 36px uppercase (responsive 30px md, 24px sm).
  - Primary crimson red **#c92f2f**: `.crose-btn` bg, preloader line, top-
    header icons, scroll-up bg, `.btn-2` hover. Hover state → `#1f1f2c`.
  - Heading ink **#1f1f2c**: all `h1`–`h6`, nav links, button hover bg.
  - Body gray **#636363**: paragraphs, section-heading `p`.
  - Muted **#959595**: top header meta text.
  - Neutrals **#ffffff** (page bg), **#f3f3f3** (top header, preloader, bg-gray),
    **#c2c2c2** (footer text).
  - Overlay **rgba(15, 6, 6, 0.7)**: hero slides, parallax CTA/events heading.
  - Buttons: `.crose-btn` 46px height, min-width 150px, padding 0 30px,
    border-radius 3px, uppercase, bold 700, white text, `#c92f2f` bg; hover
    bg `#1f1f2c`. `.btn-2` inverted: white bg + `#c92f2f` text; hover →
    `#c92f2f` bg + white text.
  - Scroll-up: `#c92f2f` bg, 0 radius, 40×40px, white icon, hover `#1f1f2c`.
  - Section padding: 100px top/bottom standard; hero 100vh overlay.
  - `.bg-overlay::after`: `rgba(15, 6, 6, 0.7)` absolute fill, z-index -1.
- **Implementation notes:**
  - The mega menu in the navbar is a 4-column dropdown — implement with
    hover/click + focus handling; each column has the same 8 links (repeated
    in original). Use a single-column list on mobile.
  - The owl-carousel instances (hero, events) have side arrows and dots.
    Implement with a simple React carousel or CSS scroll-snap; no need for
    owl-carousel JS.
  - The gallery is a flexbox grid of 10 images — implement as a responsive
    grid with hover overlay (magnific-popup-like zoom icon, make it decorative
    only).
  - The subscribe form input is absolutely positioned inside the form container
    — implement as a standard flex row with input + button.
  - The sermons section has media type icons (video/audio/docs/download) as
    tooltip-tipped links — use lucide-react icons (Video, Headphones, FileText,
    Download).
  - Images: `picsum.photos/seed/vaulted-N/w/h` (hero 2×~1600×900, about
    3×~400×300, sermons 3×~400×300, events 3×~400×300, gallery 10×~400×300,
    blog 3×~400×300). Fonts via `<link>`; icons lucide-react (Clock, Facebook,
    Twitter, Mail, Phone, Search, Calendar, MapPin, Video, Headphones, FileText,
    Download, ArrowRight, ChevronRight, Menu, X, Send).

## Tasks

- [ ] Scaffold app (copy simplest existing app; rename package
      `@free-react-templates/vaulted`; `npm install` at root before
      committing so lockfile registers the workspace).
- [ ] Register `injectUiSource()` in `vite.config.ts` (see
      docs/conventions.md).
- [ ] TDD red: write section tests first (TopHeader, Navbar, HeroSlider,
      About, CallToAction, LatestSermons, UpcomingEvents, Gallery, Blog,
      Subscribe, Footer, App composition) mirroring the spec scenarios.
- [ ] Theme tokens in `index.css` `@theme`: primary `#c92f2f`, heading
      `#1f1f2c`, body `#636363`, muted `#959595`, gray bg `#f3f3f3`,
      overlay `rgba(15,6,6,0.7)`, footer text `#c2c2c2`, fonts Open Sans +
      Raleway.
- [ ] Implement sections in order; keep the original's 1:1 section order.
- [ ] Top header: gray bg bar, clock + hours, social icons, email, phone.
- [ ] Navbar: white bg, logo left, nav links right with Pages dropdown +
      mega menu, search icon, red "Donate Us" button.
- [ ] Hero: 2-slide carousel, dark overlay, white headlines, CTA buttons.
- [ ] About: centered heading + description, 3 cards (images, titles,
      descriptions, Read More links).
- [ ] CTA: parallax bg, dark overlay, "A Place For You", btn-2 "Become A
      Member".
- [ ] Sermons: 3 cards with thumbnails, date badges, media icons, metadata.
- [ ] Events: parallax heading, carousel of event cards with thumbnails,
      metadata, "Find Out More" buttons.
- [ ] Gallery: 10-image responsive flex grid with hover overlays.
- [ ] Blog: 3 cards with images, titles, authors, dates, excerpts.
- [ ] Subscribe: dark bg, heading + subtitle left, email form + button right.
- [ ] Footer: 4-column layout, copyright bar, social icons, Component Dock
      link.
- [ ] Run `npm run verify:app -- vaulted` (typecheck → lint → vitest 100% →
      build) until green; fix root causes, never disable gates.
- [ ] Self-review (docs/self-review.md checklists), then PR on
      `feat/template-vaulted` → merge immediately (`gh pr merge --squash
      --delete-branch`).
- [ ] After merge: `[~]`→`[x]` in TEMPLATES.md for Crose line 1295, add
      surge URL, `npm run readme:status`, commit `chore:` and push.
