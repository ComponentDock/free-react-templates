# Redeemer (ColorLib Salvation) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-redeemer` by an implementer stream.

## Design notes

- **Original:** ColorLib "Salvation" — free church/religious website template.
  Source: https://colorlib.com/wp/template/salvation/. New name: **redeemer** (a
  religious term meaning one who saves — fits the church theme and directly
  relates to the "salvation" concept without reusing the source name; single
  lowercase word, no collision with `ls apps/` or existing specs). Salvation
  appears in TEMPLATES.md at line 1305 (Church section, first unchecked without
  a prep — the claim).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/salvation/`
  (HTTP 200, 42KB) + stylesheet `css/style.css` (89KB) plus Bootstrap 5 base,
  Swiper CSS, GLightbox CSS, AOS CSS, Flaticon icons, Font Awesome 7.1.0. Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens.
  Screenshot `salvation-free-template.jpg` confirms: modern church site — dark
  hero with atmospheric photo, crimson-red accent buttons, clean white sections,
  blue counter banner, dark footer. Palette: white/light-grey sections,
  near-black headings, crimson-red #ce0f3d primary buttons, Bootstrap blue
  #007bff counter section, dark overlay #00043c, dark footer #1a1a1a, pink
  accent #ff4d6d.
- **Structure observed (1:1):**
  1. Top bar (`div.wrap`): location (map marker icon + address) left, social
     media icons (Facebook, Twitter, Instagram, Dribbble) right; dark background
     with white text.
  2. Navbar (`nav.navbar.navbar-dark.bg-dark`): brand "Salvation" left, nav
     links right — Home (active), About, Ministries, Sermons, Events, Blog,
     Contact, Donate (CTA button with modal trigger). Mobile: hamburger
     toggler → collapsed menu.
  3. Hero slider (`section.hero-wrap > .home-slider.swiper`): 2 slides with
     full-viewport background images + `.overlay` (dark navy #00043c, 40%
     opacity), centered white text, Swiper navigation arrows.
     - Slide 1: "Transforming Lives" (h2) + "Total Surrender to God" (h1) +
       description + "Become A Volunteer" primary button.
     - Slide 2: "Welcome to Salvation Church" (h2) + "Perfect Church For
       Imperfect People" (h1) + description + CTA button.
  4. Services section (`section.ftco-section.ftco-no-pb.ftco-no-pt`): white bg,
     3-column card layout — **Worship**, **Connect**, **God's Love** — icon +
     title (h3) + description.
  5. Ministries section (`section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light`):
     light grey bg, centered heading "Connect, Grow and Serve with Us" +
     ministry cards/grid + CTA button.
  6. Counter/stats banner (`section.ftco-counter.bg-primary`): Bootstrap blue
     #007bff bg, white text — centered uppercase heading "We're on a mission to
     help all your problems" + 4 counter stats.
  7. Sermons section (`section.ftco-section`): white bg, centered heading "Watch
     and Listen to our Sermons" + sermon cards — each with thumbnail, title,
     description, play button (solid crimson) + "Watch Later" (outline crimson).
  8. Testimony section (`section.ftco-section.testimony-section`): heading
     "Transform Lives" + testimonial content.
  9. Blog section (`section.ftco-section`): centered heading "Latest news from
     our blog" + blog entry cards with image, title, excerpt, read more link.
  10. Events section (`section.ftco-section.ftco-no-pt`): heading "Latest
      Events" + event listings with date, title, time, description, CTA button.
  11. Gallery section (`section.ftco-section.ftco-no-pb.ftco-no-pt`): heading
      "Galleries" + photo grid with GLightbox links.
  12. Footer (`footer.footer`): dark bg (#1a1a1a), 4 columns — brand
      description, Latest News, Quick Links, Have a Questions? + social icons +
      copyright bar.
  13. Donate modal (`#donateModal`): heading "Make a Difference Today",
      donation amount radio buttons, submit button.

- **Design tokens:**
  - Font: **Poppins** (weights 300–800 via cf-fonts). Body default sans-serif.
    Load via `<link>` in index.html.
  - Primary brand crimson-red **#ce0f3d**: `.btn.btn-primary` bg/border, solid
    white text. This overrides Bootstrap's default #007bff at the `.btn.btn-primary`
    level. Hover keeps same bg with darker border.
  - Bootstrap blue **#007bff**: counter section bg (`.ftco-counter.bg-primary`),
    standard Bootstrap utility. Hover #0069d9.
  - Hero overlay: **#00043c** (very dark navy) at 40% opacity.
  - Footer dark: **#1a1a1a**. Footer headings: white.
  - Link hover accent: **#ff4d6d** (pink-red).
  - Section backgrounds: **#fff** (white), **#f8f9fa** (bg-light, light grey).
  - Top bar: dark bg with white/light text.
  - Navbar: Bootstrap `.bg-dark` (#343a40), `.navbar-dark` white links.
  - Body text: near-black (#212529). Headings: near-black.
  - Buttons: **border-radius: 0** (sharp/square corners). Primary solid
    crimson, outline primary with crimson border and white fill on hover.
  - Icons: Font Awesome 7.1.0 (CDN), Flaticon (custom CSS).
  - Carousel: Swiper (hero), GLightbox (gallery), AOS (scroll animations).

- **Implementation notes:**
  - Hero slides use `data-bg` / `data-bg-webp` attributes for background
    images — implement with inline styles or CSS background-image.
  - The overlay `.overlay` class uses `background: #00043c` at `opacity: .4`.
  - Swiper is the hero carousel library — use `swiper-react` or simple CSS
    transitions for the React version.
  - GLightbox is used for gallery — in React, use a simple lightbox or skip
    lightbox and make images clickable.
  - AOS (Animate On Scroll) — can use `aos` package or CSS animations.
  - Donate modal uses Bootstrap's modal system — implement as a React state-
    controlled modal overlay.
  - The counter section numbers should be animated counters (count-up effect).
  - Font Awesome icons can be replaced with lucide-react equivalents.
  - Images: `picsum.photos/seed/redeemer-N/w/h` (hero 2×~1600×900, sermon
    thumbnails 3×~600×400, blog 3×~400×300, gallery 6×~400×300, events
    3×~400×250).
  - The `.services-2` class provides the 3-card services layout with icons.
  - Blog entries use `.blog-entry.align-self-stretch` for equal-height cards.
  - Events use `.event-wrap.d-md-flex` for horizontal layout on desktop.

## Tasks

- [ ] Scaffold app (copy simplest existing app; rename package
      `@free-react-templates/redeemer`; `npm install` at root before
      committing so lockfile registers the workspace).
- [ ] Register `injectUiSource()` in `vite.config.ts` (see
      docs/conventions.md).
- [ ] TDD red: write section tests first (TopBar, Navbar, Hero, Services,
      Ministries, Counter, Sermons, Testimony, Blog, Events, Gallery, Footer,
      DonateModal, App composition) mirroring the spec scenarios.
- [ ] Theme tokens in `index.css` `@theme`: primary crimson `#ce0f3d`,
      counter blue `#007bff`, hero overlay `#00043c`, footer dark `#1a1a1a`,
      accent pink `#ff4d6d`, light bg `#f8f9fa`, font Poppins.
- [ ] Implement sections in order; keep the original's 1:1 section order.
- [ ] Top bar: dark bg, location left, social icons right.
- [ ] Navbar: dark bg, brand "Redeemer" left, nav links right, Donate CTA
      button (triggers modal), mobile hamburger menu.
- [ ] Hero: full-viewport 2-slide Swiper carousel, white centered headlines
      with dark overlay, navigation arrows, CTA buttons.
- [ ] Services: 3 cards on white bg (Worship, Connect, God's Love) with
      lucide icons, titles, descriptions.
- [ ] Ministries: light grey bg, centered heading, ministry cards + CTA.
- [ ] Counter: blue bg banner, uppercase heading, 4 animated stat counters.
- [ ] Sermons: white bg, sermon cards with thumbnails, titles, play + watch
      later buttons.
- [ ] Testimony: heading "Transform Lives" + testimonial cards.
- [ ] Blog: centered heading, blog entry cards with images, titles, excerpts.
- [ ] Events: event listings with dates, titles, descriptions, CTA buttons.
- [ ] Gallery: photo grid with lightbox links.
- [ ] Footer: dark bg, 4 columns (brand, Latest News, Quick Links, Have a
      Questions?), social icons, Component Dock credit.
- [ ] Donate modal: state-controlled modal with "Make a Difference Today"
      heading, donation amount options, submit button.
- [ ] Run `npm run verify:app -- redeemer` (typecheck → lint → vitest 100% →
      build) until green; fix root causes, never disable gates.
- [ ] Self-review (docs/self-review.md checklists), then PR on
      `feat/template-redeemer` → merge immediately (`gh pr merge --squash
      --delete-branch`).
- [ ] After merge: `[~]`→`[x]` in TEMPLATES.md for Salvation line 1305, add
      surge URL, `npm run readme:status`, commit `chore:` and push.
