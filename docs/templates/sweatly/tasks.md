# Sweatly (ColorLib Workout) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sweatly`.

## Design notes (replication findings)

- **Original:** ColorLib "Workout" — free Bootstrap gym / fitness club
  website template (source: https://colorlib.com/wp/template/workout/).
  TEMPLATES.md has FOUR copies of this item (lines 537, 1236, 1886, 2372 —
  mark EVERY copy `[x]` when done).
- **Demo DOM analyzed:** `https://preview.colorlib.com/theme/workout/`
  (HTTP 200, 71.5 KB; master stylesheet `css/style.css` ~19 KB, fully
  extracted). Libs: bootstrap, owl.carousel (feature carousel),
  jquery.mb.YTPlayer (hero background video, containment #home-section,
  autoPlay + mute, video URL 3P6bEAlW-Vw), AOS (fade-up scroll animations),
  bootstrap-datepicker, countdown. Google Font **Muli** 300/400/700/900.
  Cross-checked with the TEMPLATES.md screenshot (`workout-free-template.jpg`
  1200×946, browser-viewed) — all match. Demo brands itself "Workout";
  recreation uses the NEW name **Sweatly** (brand raspberry #c83660).
- **Visual design (DOM + CSS tokens + screenshot):** dark full-height hero —
  gym photo (man curling a dumbbell, blurred racks behind) + rgba(0,0,0,0.5)
  overlay (demo also plays a muted YouTube workout clip); white absolute
  navbar ("Workout." logo — white word + brand dot — left, links right,
  hamburger + off-canvas mobile menu); centered hero h1 "Fitness Help Me
  Feel Better" (4rem, 900, white) + 1.4rem white lead + outline-white "Get
  Started" button. Then: white features carousel ("Stay Healthy" grey
  subheading / brand-pink "Setup Your Body With Workout" heading + 6 icon
  cards), 500px parallax photo band "Get The Result You Want", "Our
  Classes" (2-col grid of 10 horizontal class cards: 100px rounded
  thumbnail + title + "By <trainer>, 30 minutes"), parallax band "Every
  Step Counts", "Schedule" (day tabs S M T W T F S — grey pills, active
  brand-pink; per-day 2-col grid of timed class cards "Sunday 7:30am -
  9:00am"), parallax band "Your Fitness Partner Where Ever You Are", "Our
  Trainers" (4 round-avatar cards), "Services" (12 icon cards, 3-col
  grid), light-grey "Contact Us" (name/last/subject/email/message form +
  block brand submit), dark footer (About / Links / Subscribe newsletter +
  copyright). Demo copy = lorem — paraphrase into gym/class copy.
- **Structure (1:1, section order):**
  1. Off-canvas mobile menu (`div.site-mobile-menu site-navbar-target`:
     close icon header + body).
  2. Header (`header.site-navbar py-4 js-sticky-header`, absolute over
     hero, z-1999): container-fluid flex — `div.site-logo` ("Workout" +
     `<span>.` brand-pink dot, 1.3rem 900 uppercase, white) left;
     `nav.site-navigation` right: `ul.site-menu.main-menu` — Home, Classes,
     Schedule, Trainer, Services, Contact (anchor links to section ids,
     white, padding 5px 20px, `.active` color #c83660); hamburger
     `a.site-menu-toggle` d-lg-none right.
  3. Hero (`div.intro-section#home-section`, bg #ccc fallback, 100vh /
     min-height 900px): `.player` YT bg video + `:after` rgba(0,0,0,0.5)
     overlay (z-1), container z-10; centered `h1.mb-3` "Fitness Help Me
     Feel Better" (4rem / 2rem mobile, 900, #fff), `p.lead.mx-auto.desc
.mb-5` (1.4rem, #fff, max-width 700px), `a.btn.btn-outline-white
.py-3.px-5` "Get Started".
  4. Features (`div.site-section`): section-heading (col-md-8, centered):
     `span.subheading` "Stay Healthy" (#ababab, 1.2rem) + `h2.heading
.mb-3` "Setup Your Body With Workout" (#c83660, 2.5rem, 900) + lorem
     p; then `div.owl-carousel nonloop-block-14.block-14` → 6 `div.slide`
     of `div.ftco-feature-1` (center, white bg, padding-top 30px, hover
     shadow `0 0 20px -5px rgba(0,0,0,.1)`): `div.icon` 70px #c83660 (font
     glyph — use lucide), `div.ftco-feature-1-text` padding 30px: h2 20px
     bold + p #989898.
  5. Parallax band 1 (`div.bgimg`, inline bg `images/bg_1.jpg`, 500px
     tall, `:before` rgba(0,0,0,0.4), container z-2, centered): h2 "Get
     The Result You Want" (3rem / 2rem mobile, #fff, bold) + `p.lead`
     lorem (#fff).
  6. Classes (`div.site-section#classes-section`): heading "Fitness Class"
     / "Our Classes"; `div.row` → 2 × `div.col-lg-6`, each 5 ×
     `div.class-item.d-flex.align-items-center` (radius 4px, shadow
     `0 5px 20px 0 rgba(0,0,0,.1)`, overflow hidden, mb 30px):
     `a.class-item-thumbnail` (flex 0 0 120px) → img (max-width 100px,
     radius 4px, img_1..4.jpg rotating) + `div.class-item-text`: h2 18px →
     a "Fitness Class Name #N" (#000) + span "By Justin Daniel" (#aeaeae)
     - span "30 minutes".
  7. Parallax band 2 (`div.bgimg`, `images/bg_2.jpg`): h2 "Every Step
     Counts" + lead.
  8. Schedule (`div.site-section#schedule-section`): heading "Fitness
     Sched" / "Schedule"; `ul.nav.days.d-flex` (7 `li.nav-item` width
     14.25% → `a.nav-link` S M T W T F S: bg #eee, padding 10px, hover/
     active bg #c83660 color #fff); `div.tab-content` → 7 `div.tab-pane`
     (Sunday active first) each with 2 × `div.col-lg-6` of 5
     `div.class-item` — same card + leading span "Sunday 7:30am - 9:00am"
     above the h2.
  9. Parallax band 3 (`div.bgimg`, `images/bg_3.jpg`): h2 "Your Fitness
     Partner Where Ever You Are" + lead.
  10. Trainers (`div.site-section#trainer-section`): heading "Trainer" /
      "Our Trainers"; 4 × `div.col-lg-3.mb-4` `div.person` (center):
      img (max-width 100px, radius 50%, mb 30px; person_1..4.jpg), h3 name
      (Justin Daniel, Matthew Davidson, ...), `p.position` "Trainer"
      (#ccc), lorem bio.
  11. Services (`div.site-section#services-section`): heading "Fitness
      Services" / "Services"; 12 × `div.col-lg-4.mb-4` `div.ftco-feature-1`
      (icon 70px brand + h2 + p #989898 — same card as features, static
      grid).
  12. Contact (`div.site-section.bg-light.contact-wrap#contact-section`,
      bg #f4f5f9): heading "Get In Touch" / "Contact Us"; form (row
      justify-center, col-md-7): `.form-group.row` — First name (col-md-6)
      - Last name (col-md-6), Subject (col-md-12), Email (col-md-12),
        textarea "Write your message here." (col-md-12), submit
        `input.btn.btn-primary.py-3.px-5.btn-block` "Send Message". Controls:
        height 50px, radius 0, border-width 2px, focus border #c83660.
  13. Footer (`footer.footer-section.bg-dark`, padding 7em 0): 3 cols —
      col-md-4 "About Workout" (h3 .9rem uppercase 900 letter-spacing
      .1rem #fff + lorem p), col-md-3.ml-auto "Links" (ul.footer-links:
      Home, Classes, Schedule, Trainer), col-md-4 "Subscribe" (h3 + lorem
      - email input placeholder "Email" + submit `btn.btn-primary
.rounded-0` "Subscribe"); bottom row pt-5 mt-5 text-center copyright
        "© All rights reserved | ..." — the Colorlib credit line is REPLACED
        with the mandated Component Dock link
        (https://www.componentdock.com/).
- **Design tokens (from `css/style.css`):**
  - Brand: **#c83660** (raspberry/pink — active nav, section headings,
    feature icons, day-tab active, primary buttons, form focus border,
    logo dot). Supporting: #8bc34a (success check green), #000 (headings),
    #25262a (dark text), #989898 (card body text), #aeaeae (class meta),
    #ababab (subheading), #ccc (trainer position / hero fallback), #eee
    (day tabs), #f4f5f9 (contact bg), #fff (hero/sections).
  - Font: **Muli** 300/400/700/900 via Google Fonts
    (`https://fonts.googleapis.com/css?family=Muli:300,400,700,900`).
  - Buttons: `.btn` uppercase 12px/900 border-width 2px; primary = #c83660
    fill; outline-white = transparent + white 2px border, hover white fill
    - black text; hero CTA `py-3 px-5`, submit `btn-block`, subscribe
      `rounded-0`.
  - Rhythm: `.site-section` 2.5em / 5em vertical padding; `.bgimg` bands
    500px + rgba(0,0,0,0.4) overlay; headings 2.5rem/900 brand;
    subheadings 1.2rem #ababab; hero 100vh/min 900px + rgba(0,0,0,0.5).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sweatly-<n>/<w>/<h>`); hero background video NOT
  copied — seeded picsum gym/hero photo + dark overlay gives the same look;
  icons → lucide-react (dumbbell/activity logomark, feature icons,
  hamburger/close, social); Muli via Google Fonts; owl carousel + day tabs
  with no extra deps (simple carousel state + tab switching); contact form
  submit → success message swap per repo conventions.

## Implementation task outline

1. Copy the simplest existing app (e.g. `apps/barbell` or another recent
   one) → `apps/sweatly`; rename package to `@free-react-templates/sweatly`;
   run `npm install` at repo root; register `injectUiSource()` in
   `vite.config.ts`.
2. `@theme` tokens in `src/index.css`: brand raspberry #c83660 + supporting
   palette above; fonts Muli in `index.html`.
3. Components (src/components/): `Header` (logo + links + hamburger +
   off-canvas mobile menu), `Hero`, `FeatureCarousel`, `Banner` (reusable
   parallax band, 3×), `Classes`, `Schedule` (day tabs + panels), `Trainers`,
   `Services`, `Contact` (form), `Footer` (About/Links/Subscribe +
   Component Dock link).
4. `src/App.tsx` composes sections in demo order; document title
   "Sweatly — Fitness Template".
5. Tests FIRST (red) per section spec scenarios; then implementation;
   100% coverage (lines/functions/branches/statements).
6. Verify: `scripts/verify-app.sh sweatly`; `npm run spec:validate`.
7. PR: `feat/template-sweatly` → squash-merge to main; PR description
   includes source template, preview URL, design tokens, what differs
   (renames, placeholder images, video → photo, persona copy).
