# Exposure (ColorLib Myphotography) — Tasks & Design Notes

> Recreation of ColorLib "Myphotography" — free HTML photography website
> template (https://colorlib.com/wp/template/myphotography/ —
> "MyPhotography - Free HTML Photography Website Template 2026 — the most
> impactful, responsive and free HTML photography website template both
> for amateurs and professionals") under the NEW name **Exposure** (a
> photography term; single lowercase word, no collision with `apps/`,
> `openspec/specs/` or `docs/templates/` — verified 2026-08-11), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Myphotography" — page title "MyPhotography -
  Free HTML Photography Website Template 2026 - Colorlib". TEMPLATES.md
  category: **Bootstrap (216)**, first occurrence at line 460 (`- [ ]`,
  source NOT shipped anywhere). DUP-ROW TRAP: the `myphotography` slug
  also appears at line 2457 (Photography 49) and line 2532 (Portfolio 89)
  — all `- [ ]` rows of the same template; ONE implementation covers all
  three rows (mark all `[x]` with the same surge URL at bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/myphotography/` — HTTP 200, ~32 KB
  HTML (REACHABLE, not a 404). Custom CSS in `assets/css/style.css`
  (~55 KB, `@import`s Google Fonts Prompt+Rubik) + Bootstrap 4 +
  owl.carousel (hero) + slick (testimonial) + slicknav (mobile) +
  magnific-popup (gallery zoom) + fontawesome + themify-icons
  (`ti-fullscreen` zoom icon). Screenshot
  `myphotography-free-template.jpg` (1200×946 AVIF, viewed in browser)
  matches the live DOM for the visible top half (dark hero with B&W
  portrait cutout → "HOW WE MAKE USER EXPERIENCES" + Dali quote).
- **Visual design:** dark cinematic photography one-pager. Matte
  black/charcoal backgrounds, stark white all-caps bold headlines, coral
  `#f04e3c` accents (logo mark, hero eyebrow, CTAs). Hero: transparent
  header (logo left, white nav, orange CONTACT NOW right), eyebrow
  "— CREATIVE PHOTOGRAPHY" + huge uppercase H1 "PHOTOGRAPHY MAKE US HAPPY
  TAKE A SHOT." with a faint brush-stroke graphic, orange WATCH PORTFOLIO
  button, dramatic B&W portrait of a man on the right. Below the fold:
  dark "HOW WE MAKE USER EXPERIENCES" + Salvador Dali quote.
- **Section order (1:1, verified from live DOM):**
  1. Preloader `#preloader-active` — fixed `#f7f7f7` screen, spinning
     ring (border-top `#f04e3c`), centered logo image. OPTIONAL in the
     recreation (pre-hydration only; a CSS spinner is fine).
  2. Header `div.header-area.header-transparent` > `.main-header
.header-sticky` (container-fluid): logo image left (recreation:
     text wordmark "EXPOSURE"); `.menu-main` right — `nav.main-menu`:
     Home · About · Gallery · Services · Blog (hover `ul.submenu`
     `rgba(43,43,43,0.7)` 170px: Blog · Blog Details · Element) ·
     Contact; `.header-right-btn` "Contact now" (`a.btn.header-btn`).
     Nav: Rubik 16px `#fff`, hover `#f04e3c`; transparent over hero;
     sticky scroll → `background:#000`. Mobile: hamburger menu.
  3. Hero `div.slider-area` > `.slider-active` (owl, TWO IDENTICAL
     slides): `.single-slider.slider-height` min-height 1080px, bg
     `img/hero/h1_hero.jpg` cover (700px tablet / 500px mobile);
     `.hero__caption` (col-xl-7): eyebrow span "Creative Photographey"
     (24px 300 uppercase `#f04e3c`, pl 50px + 30px line) · h1
     "Photography Make us happy Take a shot." (70px 700 uppercase `#fff`
     lh 1.2) · `.hero__btn` "Watch Portfolio" (`a.btn.hero-btn` →
     industries.html); `.hero-man` absolute right (z-index -1, hidden
     <768px): B&W cutout portrait.
  4. About `section.about-area.about1.section-padding30` (bg `#121212`;
     padding 195/140) — row justify-content-between:
     - left col-xl-5 `.about-caption2`: h3 "HOW WE MAKE USER
       EXPERIENCES" (50px 700 `#fff` mb 48px) + `.send-cv` link
       hire@colorlib.com (18px 300 `#f04e3c` + 144px underline below) →
       rename neutral (e.g. hire@exposure.example).
     - right col-xl-5 `.about-caption`: h3 "You can't use up creativity.
       The more you use, the more you have in your signifant mind."
       (18px 400 `#fff` lh 1.5) · `p.pera1` "SALVADOR DALI / Digital
       Artisit" (`#d3d3d4`, name uppercase, 60px divider line) ·
       `.experience`: `.year` "05" (Prompt 700 90px `#fff`) +
       `.year-details` "YEARS OF DIGITAL EXPERIENCE" (uppercase 500
       `#fff` pl 30px).
     - decorative `.about-shape` bottom-right (optional). Source copy
       typos ("Photographey", "signifant", "Artisit") — fix or keep,
       same kind of content; document the choice in the PR.
  5. Services `section.home-blog-area.section-padding30` (bg `#0e0e0e`,
     NO title): 3 `col-xl-4.single-team.mb-30` cards — `.team-img` photo
     - `.team-caption`: h3 link 26px `#fff` hover `#f04e3c` — Creative
       Photography / Wedding Photography / Nature Photography (→
       services.html) + p `#d3d3d4` 300 (pr 50px).
  6. Gallery `section.gallery-area` (container-fluid p-0, no-gutters, no
     own bg — dark page): SIX `.gallery-box` in xl widths 5/3/4/5/4/3;
     `.gallery-img` height 685px cover + gradient bottom overlay; hover:
     `rgba(240,78,60,0.9)` overlay, `.cap-icon` fullscreen link
     (ti-fullscreen, 30px `#fff`, top 50px left 42px), `.g-caption` h4
     "The Last man" `#fff` mb 20px + p `#fff` mb 30px slides up
     (translateY(-102%)).
  7. Awards `section.brand-area.pb-bottom.section-padding30` (bg
     `#0e0e0e`, +200px bottom): left col-lg-6 `.section-tittle`: h2
     "Take a look at our achivment" (50px 600 uppercase `#fff` lh 1.3)
     - p + "Get Start" (`a.btn`); right SIX `col-lg-3.single-brand`
       award cards (border 1px `#2e2e2e`, padding 50px 0): logo image +
       "Behance award" + "Prize 2019" (`#fff` uppercase 500 18px) →
       recreation: lucide trophy icon + same text. `.brand-shape`
       bottom-left (optional).
  8. Testimonial `div.testimonial-area.testimonial-padding` (bg
     `#121212`, padding 190/170, NO title): centered col-xl-11
     `.h1-testimonial-active` (slick, 2 slides):
     `.testimonial-top-cap`: quote image + p 20px `#d3d3d4` lh 1.5
     (pr 100px, mb 50px); `.testimonial-founder` centered flex:
     `.founder-img` round photo + `.founder-text` (ml 20px): span
     "Jessya Inn" (30px 600 `#f04e3c`; 26px responsive) + p "Chif
     Photographer" (`#57667e` 500).
  9. Blog `section.blogs-area.section-padding30` (bg `#0e0e0e`):
     centered `.section-tittle.text-center` h2 "Tourist Blog" + p "Our
     Recent Photos"; 3 `col-lg-4.single-blogs.mb-100` cards: `.blog-img`
     photo + `.blog-cap` absolute bottom-right (bg `#121212`, width 94%,
     padding 29px 20px 20px 31px): span "23 Dec, 2020" (`#828fa3`
     uppercase 14px) + h4 "Addiction When Gambling Becomes" (20px `#fff`
     hover `#f04e3c`, → blog_details.html). `.blog-shape` bottom-right
     (optional).
  10. Footer `div.footer-area.footer-bg` (bg `#121212`, footer-padding
      150/136): row of 4 — col-xl-4: logo + `p.info1` lorem (`#fff` lh
      1.8 pr 74px); col-xl-2 "Navigation" (Home · Events · Testimonial ·
      Categories · Contacts); col-xl-2 "Useful Links" (Registration ·
      Login · Policy · Terms & Conditions); col-xl-4 "Instagram Feed" —
      `.insta-feed` 3×2 grid (li 33.33%, mb 10px). h4 `#fff` Rubik 18px
      uppercase mb 38px; links `#868c98` 300, hover `#f04e3c` + pl 5px.
      `.footer-bottom`: copyright left ("...Made with ♥ by Exposure",
      neutral) + `.footer-social` right: "Follow Us" + 4 brand icons
      (twitter, facebook-f, globe, instagram; `#848493` hover `#fff`;
      inline SVGs — lucide dropped brand icons).
- **Design tokens (from `assets/css/style.css`, verified 2026-08-11):**
  - Brand coral **`#f04e3c`** — `.btn` bg, hero eyebrow + line, send-cv
    link + underline, gallery hover overlay `rgba(240,78,60,0.9)`,
    preloader ring, nav/blog/footer link hover, founder name.
  - Button hover sweep **`#e93b32`** (`.btn::before` scaleX 0→1).
  - Dark surfaces **`#121212`** (about1, testimonial, blog-cap, footer)
    - **`#0e0e0e`** (services, awards, blogs); sticky `#000`; preloader
      `#f7f7f7`; award border `#2e2e2e`; submenu `rgba(43,43,43,0.7)`.
  - Text: headings `#fff` (Prompt); muted `#d3d3d4`; footer links
    `#868c98`; social `#848493`; blog dates `#828fa3`; founder role
    `#57667e`.
  - Fonts: headings/buttons **Prompt** (300-900), body/nav **Rubik**
    (300/400/500/700) — Google Fonts `<link>`s in index.html.
  - Buttons `.btn`: uppercase Prompt 16px ls 1px, padding 27px 44px,
    `#f04e3c`, **no radius**, hover sweep `#e93b32`; hero-btn 30px 38px;
    header-btn 30px 45px.
  - Hero: 1080px bg photo; eyebrow 24px 300 uppercase `#f04e3c` + 30px
    line; h1 70px 700 uppercase `#fff` lh 1.2 (60→27px responsive).
  - Section titles: 50px 600 uppercase `#fff` lh 1.3 mb 17px; p `#fff`
    mb 30px.
  - Paddings: section-padding30 195/140 (→100/40, 65/10); testimonial
    190/170; footer 150/136; brand pb-bottom +200.
  - About: left h3 50px 700 `#fff` mb 48px; send-cv 18px 300 `#f04e3c`
    - 144px underline; right h3 18px 400 `#fff`; pera1 `#d3d3d4` +
      60px divider; year 90px Prompt 700; year-details uppercase 500 pl
      30px.
  - Services: h3 26px; p `#d3d3d4` 300 pr 50px.
  - Gallery: img 685px; overlay rgba(240,78,60,0.9); caption slide-up
    -102%; zoom icon 30px `#fff` top-left.
  - Awards: card border `#2e2e2e`, padding 50px 0; text `#fff`
    uppercase 500 18px.
  - Testimonial: quote 20px `#d3d3d4` pr 100px; name 30px 600
    `#f04e3c`; role `#57667e` 500.
  - Blog: blog-cap `#121212` 94% width bottom-right; date `#828fa3`
    uppercase 14px; h4 20px hover `#f04e3c`.
  - Footer: h4 18px `#fff` Rubik uppercase mb 38px; links `#868c98`
    hover `#f04e3c` + pl 5px; social `#848493` hover `#fff`; insta
    li 33.33%.

## Implementation tasks (for the implementer)

- [ ] `npm run spec:validate` for `template-exposure` before starting
- [ ] Scaffold `apps/exposure` (copy simplest existing app, rename
      package to `@free-react-templates/exposure`); register workspace
      (`npm install --package-lock-only` if needed)
- [ ] `@theme` tokens: `--color-brand: #f04e3c`, `--color-brand-hover:
  #e93b32`, `--color-ink: #121212`, `--color-coal: #0e0e0e`,
      `--color-muted: #d3d3d4`, `--color-footlink: #868c98`,
      `--color-social: #848493`, `--color-blogdate: #828fa3`,
      `--color-role: #57667e`; Prompt + Rubik Google Fonts `<link>`s in
      index.html; document title "Exposure — Photography Portfolio"
- [ ] Header component (text wordmark "EXPOSURE"; Home / About / Gallery /
      Services / Blog dropdown [Blog, Blog Details, Element] / Contact;
      "Contact now" button; sticky → #000; mobile hamburger)
- [ ] Hero (bg photo min-h 1080px; eyebrow "Creative Photographey" + h1
      "Photography Make us happy Take a shot." + WATCH PORTFOLIO btn +
      right portrait image, hidden on mobile; single slide or 2-slide
      fade — document choice)
- [ ] About (#121212; "HOW WE MAKE USER EXPERIENCES" + email link with
      underline; Dali quote + attribution + 05 YEARS OF DIGITAL
      EXPERIENCE stat)
- [ ] Services (#0e0e0e; Creative / Wedding / Nature Photography cards)
- [ ] Gallery (full-bleed 6 tiles 5/3/4/5/4/3; coral hover overlay +
      sliding caption + fullscreen icon)
- [ ] Awards (#0e0e0e; "Take a look at our achivment" + Get Start btn +
      6 Behance award cards with lucide trophy icons)
- [ ] Testimonial (#121212; quote + round founder photo + Jessya Inn /
      Chif Photographer)
- [ ] Blog (#0e0e0e; "Tourist Blog" + 3 cards with date overlay panels)
- [ ] Footer (#121212; about + Navigation + Useful Links + Instagram
      Feed 3×2 + copyright bar + Follow Us social row with inline SVG
      brand icons)
- [ ] TDD: tests first per requirement, 100% coverage via
      `scripts/verify-app.sh exposure` (typecheck + lint + vitest +
      build)
- [ ] Visual QA against `https://preview.colorlib.com/theme/myphotography/`
      (dark theme, coral accents, 70px hero h1, square buttons, gallery
      hover overlay, sticky black header)
- [ ] PR description: source = ColorLib Myphotography, preview URL,
      tokens (#f04e3c, #e93b32, #121212, #0e0e0e, Prompt+Rubik, square
      buttons), what differs (Exposure brand, text logo, picsum
      placeholders, lucide award icons, neutral footer credit, dead
      links, single hero slide choice)
- [ ] Bookkeeping on merge: mark lines ~460 (Bootstrap), ~2457
      (Photography), ~2532 (Portfolio) `[x]` + surge URL +
      `npm run readme:status`

## Pitfalls (from the skill + this prep)

- **Dup rows:** THREE TEMPLATES.md rows for myphotography — ONE
  implementation, all three rows to `[x]`.
- **Name check:** "aperture", "shutter", "darkroom", "lensly", "framely"
  are taken (photography-family names) — "exposure" verified free.
- **Square buttons:** `.btn` has NO border-radius — don't add rounded
  corners.
- **Two fonts:** headings/buttons Prompt AND body/nav Rubik — load both
  Google Fonts.
- **Hero-man cutout:** source uses a PNG cutout (`z-index:-1`); a plain
  portrait photo in a right-side panel reads identically in QA — no need
  for a CSS mask.
- **Source typos:** "Creative Photographey", "signifant mind",
  "Digital Artisit", "achivment", "Chif Photographer" — the source keeps
  them; decide fix-or-keep and note it in the PR (same kind of content
  either way).
- **Brand icons:** lucide-react removed Facebook/Instagram/Twitter —
  footer social row needs inline SVG brand icons.
- **Decorative images:** `<img alt="">` has no `img` role in Testing
  Library — query decorative strips with `container.querySelectorAll`.
- **Duplicate nav on mobile:** desktop + mobile nav duplicate links in
  the DOM — use `getAllByRole` and index the mobile one last.
- **Slider:** both hero slides are byte-identical in the source; a
  single static slide is a faithful simplification.
- **Family palette check (2026-08-11):** coral `#f04e3c` on `#121212`/
  `#0e0e0e` dark surfaces is unique among preps so far — keep it exact;
  do NOT reuse another prep's brand color.
