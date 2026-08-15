# Stride (ColorLib Stamina) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-stride`.

## Design notes (replication findings)

- **Original:** ColorLib "Stamina" — Bootstrap 4 fitness/gym one-pager
  (source: https://colorlib.com/wp/template/stamina/, "Bootstrap (216)"
  category). FOUR `- [ ]` rows in TEMPLATES.md (lines 502, 1179, 1879, 2361) — all unchecked, nothing shipped for this source. Recreation uses
  the NEW name **Stride** (single word, fitness meaning; no collision in
  `apps/`, `openspec/specs/`, `docs/templates/` — checked 2026-08-15).
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/stamina/` — HTTP 200, 72,691 bytes,
  `<title>Stamina — Website Template by Colorlib</title>`. Standard path
  (no `/theme/bootstrap/` prefix needed).
- **Source stack:** Bootstrap 4.3.1, jQuery, owl.carousel (services
  carousel only), AOS, Stellar parallax (the three `.bgimg` bands),
  jquery.mb.YTPlayer (hero YouTube bg video `w-cRWOjlk8c`, muted,
  `startAt: 255`), fancybox/jquery-ui/datepicker loaded but UNUSED,
  flaticon icon font, Muli Google Font. Body copy is Lorem Ipsum.
- **13-block page order (VERIFIED in live DOM, in order):**
  1. Navbar (absolute over hero, white logo "Stamina." + white links
     Home/Classes/Schedule/Trainer/Services/Contact; active link red +
     2px underline; scroll → white bar, black text — computed
     `rgb(255,255,255)`).
  2. Hero `#home-section` — 100vh/min 900px, video bg + `rgba(0,0,0,.5)`
     overlay, h1 "We Believe Little Things Matter" (4rem/900/white, 2rem
     mobile), white 1.4rem lead, GET STARTED `btn-outline-white py-3 px-5`.
  3. `.schedule-wrap` — RED `#f23a2e` box (padding 40px, max-width 700px,
     `skew(-12deg)` slanted edge, z-9, overlaps hero bottom): "Hours" +
     "Opening: 7:30am — Closing: 9:00pm" + gold `#f89d13` "CONTACT US" CTA.
  4. Services CAROUSEL (white): "Stay Healthy" / "Get A Perfect Body" +
     owl-carousel (dots only) of 6 `.ftco-feature-1` cards (red 70px icon,
     bold 20px title, `#989898` blurb): Be Fit, Join Club, Gym Fitness,
     Eat Vegie, Fruit Juices, Body Warmup.
  5. Parallax band `bg_2.jpg` (500px, `rgba(0,0,0,.4)`): "Get The Result
     You Want" + underlined "Get Started" link.
  6. Classes `#classes-section`: "Fitness Class" / "Classes" + ONE row of
     TWO `col-lg-6` columns × 5 horizontal class cards (thumbnail 120px +
     title 18px + "By Justin Daniel" + "30 minutes"; `#aeaeae` meta; card
     radius 4px, shadow `0 5px 20px rgba(0,0,0,.1)`; hover → red bg, white
     title, `#ff7c67` spans, scale(1.2) — replicate red hover, tame the
     scale).
  7. Parallax band `bg_3.jpg`: "Every Step Counts".
  8. Schedule `#schedule-section`: "Fitness Sched" / "Schedule" + `.days`
     tabs (S M T W T F S; idle `#eee`, active `#f23a2e` white) + 7 panes ×
     (2 cols × 5 cards, first span = "<Day> 7:30am - 9:00am").
  9. Parallax band `bg_1.jpg`: "Your Fitness Partner Where Ever You Are".
  10. Trainers `#trainer-section`: "Trainer" / "Our Trainers" + 4 `.person`
      cards (100px circle photo, bold 18px name, "Trainer" role `#ccc`
      uppercase, blurb). Source repeats "Matthew Davidson" 3× — use
      distinct names.
  11. Services GRID `#services-section`: "Fitness Services" / "Services" +
      static 3×2 grid of the same 6 feature cards.
  12. Contact `#contact-section` (`bg-light` `#f8f9fa`, `pb-8rem`): "Get In
      Touch" / "Contact Us" + form (First name, Last name, Subject, Email,
      textarea, "Send Message" red `btn-primary py-3 px-5 btn-block`) +
      `.schedule-wrap2` red ABSOLUTE box (right 0, `translateY(-50%)`,
      width 50%/90%) with Hours + gold CTA.
  13. Footer `.footer-section` — **LIGHT, verified live** (transparent bg
      on white; h3 `text-dark` `#343a40` — BS4 `.text-dark !important`
      beats the template's `color:#fff` rule; confirmed via
      `getComputedStyle` + cssRules): About / Links (Home, Classes,
      Schedule, Trainer) / Subscribe (email + Subscribe button) +
      copyright bar. `pt-12rem` overlaps the contact section.
- **Screenshot** (`stamina-free-template.jpg`, 1200×946): dark moody hero
  (dumbbell rack photo, darkened), white headline + GET STARTED, red
  slanted Hours bar with gold CONTACT US. Triad: near-black / white /
  red-orange.
- **Static-HTML gotcha:** the classes/schedule "80 class-item" count is
  substring noise (`class-item-text`/`-thumbnail`); classes = 10 cards (no
  carousel), schedule = 7 panes × 10 cards.
- **Icon mapping (flaticon → lucide-react, PROBE exports first):**
  `flaticon-fit` → Dumbbell · `flaticon-gym-1` → Users · `flaticon-gym` →
  HeartPulse · `flaticon-vegetables` → Salad · `flaticon-fruit-juice` →
  CupSoda · `flaticon-stationary-bike` → Bike. Verify each with
  `node -e "console.log(typeof require('lucide-react').X)"` (lucide
  renames bite silently).

## Token cheat sheet

- Brand red `#f23a2e` (hours bars, active nav/tab, dots, icons, card hover
  bg, btn-primary) · gold `#f89d13` (CONTACT US CTA) · hover soft red
  `#ff7c67` (card meta on hover) · headings `#000` · body `#989898` (300,
  1.1rem, lh 1.7) · meta `#aeaeae` · subheading `#ababab` · role `#ccc` ·
  tab idle `#eee` · contact bg `#f8f9fa` · footer h3 `#343a40` · card
  shadow `0 5px 20px rgba(0,0,0,.1)` · feature hover shadow
  `0 0 20px -5px rgba(0,0,0,.1)` · hero overlay `rgba(0,0,0,.5)` · band
  overlay `rgba(0,0,0,.4)`.
- Font Muli (300/400/700/900) via Google Fonts link; hero h1 4rem/900,
  section h2 2.5rem/900, band h2 3rem bold, card h2 18px, feature h2 20px
  bold, footer h3 0.9rem uppercase ls .1rem, buttons uppercase 12px 900
  2px border.
- Bands 500px tall; hero 100vh/min 900px; class cards mb-30px; thumbnails
  ~120px/100px radius 4px; person photo 100px circle.

## Task outline (implementation order, TDD)

1. Scaffold `apps/stride` from the simplest existing app (copy pattern;
   `apps/sonata`-style single-page landing or the minimal `apps/aurora`
   base):
   - package `@free-react-templates/stride`, `public/CNAME` =
     `stride.free.componentdock.com`, `homepage` =
     `https://stride.free.componentdock.com`, `vite.config.ts` registers
     `injectUiSource()`.
   - index.html: `<title>Stride</title>`, Muli Google Fonts link.
   - jsdom 30 quirk: copy the `MemoryStorage` polyfill from
     `apps/cura/src/test/setup.ts` into `src/test/setup.ts` if needed.
2. Tests first (red), then implementation (green), 100% coverage:
   - `App` composes the page: Navbar + Hero + HoursBar + ServicesCarousel +
     ParallaxBand ×3 + Classes + Schedule + Trainers + ServicesGrid +
     Contact + Footer.
   - `Navbar`: brand "Stride." (red dot span), 6 links, active link styling,
     sticky white state (scroll listener + cleanup), mobile hamburger menu.
   - `Hero`: full-viewport section, dark image (picsum seed, subject-
     screened — dark gym scene) + overlay, h1, lead, GET STARTED outline
     button.
   - `HoursBar` (reused twice — hero-adjacent and the absolute contact
     variant with different positioning classes): red skewed box, Hours +
     opening/closing, gold CONTACT US CTA.
   - `ServicesCarousel`: section heading + 6 `FeatureCard`s (icon, title,
     blurb), dots-only paging, 3-per-view (state-driven, no new deps).
   - `ParallaxBand`: 500px image band + overlay + h2 + lead + underlined
     Get Started link; three instances with distinct copy/images.
   - `Classes`: heading + 2×5 horizontal `ClassCard`s; hover state (red bg,
     white title, `#ff7c67` meta, subtle scale).
   - `Schedule`: 7 day tabs (S M T W T F S) + 7 panes × 2×5 cards with
     day/time span leading; tab switching swaps pane.
   - `Trainers`: 4 cards, circular photos, distinct names, role label.
   - `ServicesGrid`: static 3×2 grid reusing `FeatureCard`.
   - `Contact`: `bg-light` section, form fields (First name/Last name/
     Subject/Email + textarea) + red Send Message submit + absolute hours
     box.
   - `Footer`: 3 columns + copyright + Component Dock link
     (https://www.componentdock.com/) — assert the href.
   - All state via `useState` + `useEffect` with cleanup; no new
     dependencies.
3. Footer MUST link https://www.componentdock.com/; no ColorLib strings in
   app code.
4. Verify: `npm run verify:app -- stride` passes (typecheck + lint + knip +
   fallow + 100% coverage + build).
5. PR: `feat: Stride — Fitness & Gym landing template (ColorLib Stamina)`,
   squash-merge immediately; PR description cites source slug, preview URL,
   tokens, deviations (static hero image instead of video, tamed card-hover
   scale, distinct trainer names, light footer verified live, Component
   Dock footer link, lucide icons replacing flaticon).
6. Post-merge bookkeeping: mark ALL FOUR `stamina` `- [ ]` rows
   (lines 502, 1179, 1879, 2361) `[x]` with
   `https://stride.free.componentdock.com`, `npm run readme:status`, deploy
   via CI.

## Gotchas

- Hero video → static dark image + `rgba(0,0,0,.5)` overlay (no video
  assets; note deviation in PR).
- The classes-card hover `transform: scale(1.2)` is a source artifact —
  keep ≤1.05 and mention it.
- Footer is LIGHT (verified live): do NOT paint it dark because the CSS
  says `color:#fff` on h3 — Bootstrap `.text-dark !important` wins; use
  `#343a40` headings on white.
- TWO red hours boxes (`.schedule-wrap` + absolute `.schedule-wrap2`).
- Schedule items all share one time slot per day in the demo ("Sunday
  7:30am - 9:00am" ×10) — keep the quirk.
- Icons: lucide-react has NO flaticon equivalents — map per the table
  above and probe exports (`typeof`) first; brand glyphs need inline SVG.
- Trainer names: make them distinct (source repeats Matthew Davidson 3×).
- No ColorLib strings in app code; provenance only in spec/TEMPLATES/PR.
