# Vigor (ColorLib Fitnessgym) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-vigor`.

## Design notes (replication findings)

- **Original:** ColorLib "Fitnessgym" — fitness gym / body building template
  (source: https://colorlib.com/wp/template/fitnessgym/).
  TEMPLATES.md has TWO copies of this item (lines 397 and 1844 — mark EVERY
  copy `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/fitnessgym/
  (HTTP 200, 38 KB rendered DOM, title "Fitness Gym - A Modern Fitness Gym
  Template"). Master stylesheet `style.css` (~41 KB) plus imports:
  bootstrap.min, classy-nav, owl.carousel.min, animate, magnific-popup,
  font-awesome. Fonts come from a Google Fonts `@import` inside
  `style.css`: **Open Sans (300,400,600,700,800)** — load via Google Fonts
  `<link>` in the recreation. Cross-checked against the TEMPLATES.md
  screenshot (`fitnessgym-free-template.jpg`, viewed in browser 1200×946)
  and a live browser render — designs match. The demo brands itself
  "Fitness Gym"; recreation uses the NEW name **Vigor**.
- **Visual design (from DOM + CSS tokens + screenshot):** dark, high-energy
  gym landing page — full-screen hero photo of a woman in a black sports
  bra stretching in a dim gym, dimmed by `rgba(0,0,0,0.3)` overlay; big
  white 100px headline "Get fit & healthy." + green "GET A MEMBERSHIP"
  button; top nav over the hero with "FITNESS GYM" logo in a thin green
  bordered box, centered white uppercase links (HOME, PAGES▾, MEGA MENU▾,
  ABOUT US, NEWS, CONTACT) and a green gradient "CALL: +34 578 88 82"
  button right; carousel numbers 01/02/03. Below: two ad banners (blue
  "25% Discount" block + trainer photo with green "Fitness Class" tag),
  white "Why choose Fitness Gym?" about split, photo-background "Ask the
  experts" team strip (4 trainer portraits), six white service cards with
  circular line icons (dumbbell, waist, lotus, apple, swimming, bike) and
  "Enroll Now" links, three white pricing cards (Woman Fitness Class $50 /
  Spinning Class + BONUS $70 / All Inclusive Gym $90) over a fixed gym
  photo, a working-hours list, a newsletter form with green gradient
  Subscribe, and a photo-background footer with testimonials, class links,
  contact info. Demo copy is placeholder lorem — paraphrase into
  fitness-themed copy.
- **Structure (1:1, section order):**
  1. Header (`div.header-area`): `nav.classy-navbar.justify-content-between`
     (id `fitnessNav`) over the hero — brand left (`a.nav-brand`, logo
     `img/core-img/logo.png`), centered menu (Home / Pages▾ / Mega Menu▾ /
     About Us / News / Contact; Pages → `.dropdown`, Mega Menu → 4-column
     `.megamenu` of `single-mega cn-col-4` columns each listing Home /
     About Us / Services / News / Contact / Elements), right green
     gradient `fitness-btn menu-btn` "Call: +34 586 778 8892". Mobile:
     hamburger `.navbarToggler` collapses the menu.
  2. Hero (`section.hero-area`): `.hero-slides.owl-carousel`, 3
     `div.single-hero-slide.bg-img` (inline bg `img/bg-img/bg-1..3.jpg`,
     **height 880px**; 650px 992–1199px, 550px 768–991px, 600px ≤767px;
     `::after` overlay `rgba(0,0,0,0.3)`). `.hero-slides-content`: `<h2>`
     **100px white weight 400** (48px/36px/30px responsive) + `<p>` white
     14px weight 600 mb 40px + CTA: slide 1 "Get fit & healthy." + "Get a
     membership" (`fitness-btn wel-btn`); slide 2 "Long life Fitness." +
     "Read More"; slide 3 "Fitness wonder." + "Read More". Owl arrows
     (`.owl-prev`/`.owl-next`, 95×45px, 3px solid `#38b143`, radius 10px,
     bg `#141414`, white uppercase 14px, left 5% / right 5%, top 50%,
     opacity 0 → 1 on `.hero-slides:hover`).
  3. Ad strip (`div.fitness-adds-area`): two `div.single-add-area.mt-100`
     banners (images `img/bg-img/add1.gif` blue "25% Discount", `add2.png`
     trainer photo + green "Fitness Class" tag).
  4. About (`div.about-us-area.section-padding-100-0`, **margin-bottom
     -50px, z-index 100** — pulls up over the ads): row — left
     `.about-text` (col-lg-7): section heading "Why choose Fitness Gym?" +
     paragraph + "Get a membership" (gradient `btn-3`) + "Find out more"
     (outline `fitness-btn`); right `.about-thumb` (col-lg-5): photo
     `img/bg-img/man.png`.
  5. Experts (`div.meet-the-experts-area.section-padding-100-0.bg-img
.bg-overlay`, **height 630px**; 702px 768–991px, 1250px ≤767px):
     centered heading "Ask the experts" + `.experts-team-members` row of 4
     `.team-members-info` cards (photo `img/team-img/1..4.png` + h3 name:
     Julia Smith / Mick Hamilton / Jack Black / Criss James).
  6. Services (`div.fitness-services-area.section-padding-100-0`): centered
     heading + 6 `div.single-service-area.mb-100` (col-12 col-sm-6
     col-lg-4): `.course-icon` 77×77px icon chip (`dumbbell.png`,
     `slim-down.png`, `lotus-position.png`, `apple.png`, `swimming.png`,
     `stationary-bike.png`) + `.course-content` h4 (20px): **Business
     School**, **Fitness Pro**, **Yoga Courses**, **Diet Specialists**,
     **Swimming Pool**, **Spinning Class** + p (mt 15px) + "Enroll Now"
     link (first 3 cards).
  7. Pricing (`div.fitness-pricing-table-area.section-padding-100-0.bg-img
.bg-overlay.bg-fixed`, photo bg + parallax): centered white heading +
     3 `div.single-price-table.mb-100` (col-12 col-md-6 col-lg-4, bg
     `#ffffff`): `.price-table-content` padding 40px: `.price` **36px w600
     `#38b143`** + span "/ Month" (14px italic `#838383`); h5 (22px w600,
     margin 30px 0): **Woman Fitness Class $50** / **Spinning Class +
     BONUS $70** / **All Inclusive Gym $90**; `.price-data` ul 3 features
     (`#838383`); `fitness-btn mt-30` "Enroll Now".
  8. Working hours (`div.fitness-working-hours-area
.section-padding-100-0`): heading "Working Hours" + `.working-hours`
     ul (li flex space-between, border-bottom 3px `#eaeaea`, hover
     `#38b143`): Monday 16:00-20:00 · Tuesday 12:00-20:00 · Wednesday
     12:00-20:00 · Thursday 12:00-20:00 · Friday 15:00-21:00 · Saturday
     10:00-20:00 · Sunday Closed.
  9. Newsletter (`div.our-newsletter-area.mb-100`): heading "Our
     Newsletter" + intro p + form: email input (`.form-control`, height
     55px, **3px solid `#eaeaea` border, radius 10px**, padding 0 40px,
     italic `#838383`) + gradient "Subscribe" `fitness-btn`.
  10. Footer (`footer.main-footer-area`, `footer-area
section-padding-100-0 bg-img bg-overlay`, photo `img/bg-img/
bg-11.jpg`): 4 `div.footer-widget-area.mb-50` (col-12 col-sm-6
      col-lg-3): (1) widget-title h6 "Fitness Gym" (16px white uppercase)
      - blurb p (`#bebebe` w600) + `.footer-social-info` 6 white icons
        (fa-facebook, fa-twitter, fa-pinterest, fa-instagram, fa-dribbble,
        fa-behance; hover `#38b143`); (2) "Testimonials" +
        `.testimonials-slides.owl-carousel` of 6 `.single-testimonial` quote
        blocks (p with opening quote, mb 50px); (3) "Fitness Class" link
        list: Bodybuilding Class / Fitness Class / Yoga Courses / Dumbell
        Class / Spinning Class / Kangoo Jump Class; (4) "Contact Info": phone
        "+53 345 7953 32453" + email "yourmail@gmail.com".
  11. Bottom bar (`div.bottom-footer-area`, padding 40px 0, center): p
      12px `#5c6077` w600 "Copyright ©2026 All rights reserved | This
      template is made with <heart> by [Colorlib]" (link hover `#38b143`)
      → credit Vigor.
- **Design tokens extracted from the preview CSS (`style.css`):**
- Brand **green `#38b143`**: `fitness-btn` outline + border, price values,
  owl arrows border, working-hours hover, footer social hover, bottom-footer
  link hover.
- Gradient **`#b6e358` → `#38b143`** (btn-3 / menu-btn / Subscribe):
  `linear-gradient(to right, #b6e358, #38b143)`, text `#101214`; section-
  heading h6 kicker `linear-gradient(to right, #b3e258, #39b143)` clipped
  to text.
- Ink `#101214`: heading color h1–h6; `btn-3`/menu-btn text. Links
  `#141414`; owl arrows bg `#141414`.
- White `#fff`: hero text, nav links, white headings on photo backgrounds,
  footer widget titles, social icons.
- Grays: body p `#838383` (14px, line-height 2); footer blurb `#bebebe`;
  bottom-footer `#5c6077` 12px; input text italic `#838383`; borders
  `#eaeaea` (working-hours rules, input 3px border).
- Buttons: `fitness-btn` min-width 200px, height 45px, **radius 10px**,
  padding 0 30px, 14px w700 uppercase, 3px solid `#38b143`, color
  `#38b143`; hover white on green; `btn-2` solid green + white, hover
  `#101214`; `btn-3`/`menu-btn` green gradient + `#101214`, hover white.
- Headings: h1–h6 `#101214` w700 lh 1.3; `.section-heading h6` 14px
  uppercase gradient text; `.section-heading h2` 36px w600 (24px ≤767px);
  hero h2 100px white w400.
- Radii: **10px** (buttons, owl arrows, newsletter input); 77px circular
  service icon chips.
- Spacing: `.section-padding-100-0` 100px top / 0 bottom; cards `mb-100`;
  adds `mt-100`; price content padding 40px; h5 margin 30px 0; working-
  hours li border-bottom 3px `#eaeaea`; footer widget `mb-50`; bottom
  footer padding 40px 0.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-vigor/spec.md` already on main
      (prep). Open a `feat/template-vigor` branch.
- [ ] Copy the simplest existing landing app, rename package to
      `@free-react-templates/vigor`, run `npm install` at root so
      `package-lock.json` registers the workspace (grep
      `free-react-templates/vigor`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: tests first per spec requirement, then implement:

1. `Navbar` — over-hero header: brand left, centered white uppercase links
   (Home / Pages▾ / Mega Menu▾ / About Us / News / Contact) with dropdown
   - mega-menu, green gradient phone CTA right; mobile hamburger toggles
     the menu (desktop + mobile variants render duplicate links — use
     `getAllByRole`).
2. `Hero` — 3 full-bleed photo slides (880px) with `rgba(0,0,0,0.3)`
   overlay: 100px white headlines ("Get fit & healthy." / "Long life
   Fitness." / "Fitness wonder."), subtext, CTA buttons (Get a membership /
   Read More), accessible prev/next controls.
3. `AdStrip` — two promo banners (discount block + class promo with green
   label).
4. `About` — split: "Why choose Vigor?" + paragraph + gradient "Get a
   membership" + outlined "Find out more" left, photo right.
5. `Experts` — photo bg + overlay (630px), "Ask the experts", 4 trainer
   cards (Julia Smith / Mick Hamilton / Jack Black / Criss James).
6. `Services` — 6 cards (Business School / Fitness Pro / Yoga Courses /
   Diet Specialists / Swimming Pool / Spinning Class): circular line icon
   chip + title + description + "Enroll Now" link.
7. `Pricing` — fixed-bg parallax section, 3 white cards (Woman Fitness
   Class $50 / Spinning Class + BONUS $70 / All Inclusive Gym $90): green
   36px price + "/ Month" + 3 bullets + "Enroll Now" button.
8. `WorkingHours` — day/hour rows with 3px `#eaeaea` rules, green hover,
   Sunday Closed.
9. `Newsletter` — 55px input (3px `#eaeaea` border, radius 10px, italic) +
   gradient Subscribe, confirm on submit.
10. `Footer` — photo bg + overlay: brand + blurb + 6 social icons
    (inline SVG brand icons — lucide-react has no brand icons) ·
    testimonials quotes · class links (Bodybuilding / Fitness / Yoga /
    Dumbell / Spinning / Kangoo Jump) · contact (phone + email) · bottom
    bar with year + credit.

- [ ] Theme tokens in `@theme`: `--color-brand: #38b143`, gradient
      `#b6e358 → #38b143`, ink `#101214`, body gray `#838383`, light
      `#eaeaea`.
- [ ] Open Sans Google Fonts `<link>` in index.html (300,400,600,700,800).
- [ ] Placeholders: `picsum.photos/seed/vigor-<n>/<w>/<h>`; lucide-react
      icons (dumbbell, watch, heart-pulse, apple, waves, bike for services;
      phone, heart; inline SVG social brand icons).
- [ ] Paraphrase demo copy: hero headlines, about copy, expert names,
      service blurbs, pricing bullets, testimonials, footer blurb; keep
      the working-hours schedule and footer columns.
- [ ] Verify: `scripts/verify-app.sh vigor` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge
      immediately (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark TEMPLATES.md Fitnessgym lines 397 and 1844
      `[~]`→`[x]` with Surge URL
      `https://free-react-templates-vigor.surge.sh` + homepage, run
      `npm run readme:status`, commit + push. Verify `npx knip` + curl the
      Surge URL.
