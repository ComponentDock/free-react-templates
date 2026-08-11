# Wander (ColorLib Hepta) — Tasks & Design Notes

> Recreation of ColorLib "Hepta"
> (https://colorlib.com/wp/template/hepta/) under the NEW name **Wander**
> (a travel-themed word — the "Travel & Tours" spirit of "Hepta" without
> reusing the source name), per the monorepo naming mandate.

## Design notes (replication findings)

- **Original:** ColorLib "Hepta" — travel & tours website template
  (source: https://colorlib.com/wp/template/hepta/, category
  "Bootstrap (216)").
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/hepta/`
  (HTTP 200, ~23 KB HTML + `css/style.css` ~17.7 KB + Bootstrap 4 CSS
  parsed for tokens). The live preview is the authoritative reference;
  computed styles were read from the rendered page.
- **Screenshot:** `hepta-free-template.jpg` in TEMPLATES.md matches the
  live design: Santorini-style coastal-town hero photo, centered white
  serif "Travel & Tours", ghost button + scroll-down, then Welcome split,
  #FAFAFA experience grid, full-height carousel, TEAL blog band with a
  white diagonal slant, testimonials, destinations, near-black footer.
- **Visual design (from live preview + screenshot):** elegant, airy
  travel aesthetic — big Abril Fatface serif display type against clean
  white, with a single teal accent (#65C0BA) used for hover states,
  active nav, star ratings and one full teal section band. Body copy is
  light (200) Mukta Mahee, 18px, muted gray #6C757D. Photography does
  the heavy lifting in the hero, carousel and destination grid.
- **Structure (1:1, section order):**
  1. Header (`site-header`, absolute, padding 60px 0): brand "Hepta"
     (Abril Fatface 30px white bold) + hamburger top-right (40x45px,
     3×2px white bars). Open → FULLSCREEN WHITE fixed overlay
     (`site-navbar` bg #FFF): Home · Hotels · About Us · Gallery · News ·
     Contact, Abril Fatface 40px #000, active/hover #65C0BA, 100vh,
     centered. Toggle bars → X + #000 when open.
  2. Hero (`site-hero overlay`, hero_1.jpg, 100vh/min 700px, overlay
     rgba(0,0,0,.2)): centered h1 "Travel & Tours" (Abril Fatface 80px
     #FFF lh 1), sub-heading 30px weight-200 white ("A free template by
     Colorlib. Download and share!" — Colorlib link
     rgba(255,255,255,.5) + 2px underline, white on hover), CTA
     `btn uppercase btn-outline-light` "VISIT COLORLIB" (radius 4px,
     padding 10px 30px, 2px white border, 15px ls .2em), bottom-center
     scroll-down (play icon rotated 90deg + "SCROLL DOWN") → #next-section.
  3. Welcome (`section#next-section`, white, 7em 0): img left
     (img_1_long.jpg) + text right (pl-lg-5): h2 "Welcome To Our
     Website" (Abril Fatface 32px #000), 2 paragraphs, `btn-play`
     "Watch The Video" (50px circle, 2px #E6E6E6, hover border #1A1A1A;
     text uppercase bold ls .1em).
  4. Experience (`bg-light-2` #FAFAFA, border-top #E0E0E0): h2.heading
     "Experience Once In Your Life Time" (32px) + lead; SIX
     `ftco-img-flaticon` cards (col-md-6 col-lg-4, centered): 70px icon
     - h3 + p — Good Foods, Travel Anywhere, Airplane, Beach Resort,
       Mountain Climbing, Hot Air Balloon.
  5. Slider (`slider-section`, white): h2.heading "International Tour
     Management." (70px) + lead; owl-carousel with SIX slider-items
     (height calc(100vh - 117px), min 700px; inactive opacity .4; white
     arrows fade in on hover; dots bottom 100px).
  6. Blog (`blog-post-entry bg-light slant-top`): solid #65C0BA with
     white rotated slant (rotate(-4deg), 400px tall, 150% wide);
     h2.heading "Recent Blog Post" (70px, computed color #000 — keep),
     lead rgba(255,255,255,.7); THREE white `post` cards (col-lg-4
     col-md-6, shadow 0 2px 5px -2px → hover 0 10px 30px -10px): image,
     meta-post "February 26, 2018" (uppercase ls .1em #CED4DA), h2 26px
     title "45 Best Places To Unwind" (hover #65C0BA), p.
  7. Testimonials (`testimonial-section bg-light-2`): h2.heading "Happy
     Customers" (70px); THREE cards (col-md-4): 70px rounded-circle
     photo, blockquote p 20px italic #000, em "— Clare Gupta" / "— Rogie
     Slater" / "— John Doe".
  8. Top Destination (`visit-section`, white): h2.heading "Top
     Destination" (32px) + lead; FOUR visit cards (col-lg-3 col-md-6):
     img (shadow 0 2px 3px rgba(0,0,0,.2), mb 15px), h3 20px link
     (hover #65C0BA), star row (18px #65C0BA, half-star for 4.5) + italic
     #CCC count — Food & Wines 3,239 · Resort & Spa 4,921 · Hotel Rooms
     2,112 · Mountain Climbing 6,421.
  9. Footer (`footer-section` #1A1A1A): Quick Link (About Us, Terms &
     Conditions, Privacy Policy, Help, Rooms) · Support (Our Location,
     The Hosts, About, Contact, Restaurant) · Contact Info (Address 98
     West 21th Street, Suite 721 New York NY 10016; Phone (+1) 435 3533;
     Email info@yourdomain.com — labels italic #FFF) · Subscribe ("Sign
     up for our newsletter" + underline-only input, italic placeholder,
     paper-plane submit). Bottom bar (border-top rgba(255,255,255,.1)):
     copyright + ♥ Colorlib + socials (fb/tw/ig/in/yt, 18px pad 10px).

## Design tokens (from `css/style.css` + preview DOM)

| Token               | Value(s)                                                                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Brand               | #65C0BA (teal) — selection bg, overlay-nav active/hover, visit h3 hover, stars, form focus, bg-light                       |
| Body                | "Mukta Mahee", arial, sans-serif — weight 200, 18px, lh 1.8, color #6C757D                                                 |
| Display             | "Abril Fatface", times, serif — h1–h3, logo, menu links (400, 700)                                                         |
| Headings            | #000; hero h1 #FFF 80px lh 1; special section headings 70px; regular h2 32px; card h2 26px; visit h3 20px                  |
| Hero overlay        | rgba(0,0,0,.2) solid (NOT a gradient)                                                                                      |
| Section backgrounds | white; #FAFAFA + border-top #E0E0E0 (Experience, Testimonials); #65C0BA + white slant (Blog); #1A1A1A (Footer)             |
| Buttons             | radius 4px, padding 10px 30px, no shadow; outline 2px border; uppercase 15px ls .2em; btn-primary hover bg #65C0BA         |
| Blog cards          | white, shadow 0 2px 5px -2px rgba(0,0,0,.1) → hover 0 10px 30px -10px; meta #CED4DA uppercase ls .1em                      |
| Visit cards         | img shadow 0 2px 3px rgba(0,0,0,.2); stars 18px #65C0BA; count italic #CCC                                                 |
| Testimonial         | quote 20px italic #000; author img 70px rounded-full                                                                       |
| Newsletter          | input transparent, only bottom border rgba(255,255,255,.2), radius 0, focus white; placeholder italic rgba(255,255,255,.2) |
| Menu overlay        | fullscreen fixed #FFF; links Abril Fatface 40px #000; active/hover #65C0BA                                                 |
| Carousel            | slides ~100vh (min 700px); inactive opacity .4; white arrows hover-fade; dots bottom 100px                                 |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-brand` = #65C0BA, `--color-light-bg` =
  #FAFAFA, `--color-border-soft` = #E0E0E0, `--color-ink` = #000,
  `--color-footer` = #1A1A1A, `--color-meta` = #CED4DA. Use via Tailwind
  classes per conventions.
- Google Fonts `<link>` in `index.html`:
  `https://fonts.googleapis.com/css?family=Mukta+Mahee:200,300,400|Abril+Fatface:400,700`
  (exactly what the reference loads).
- Only dynamic pieces: the hamburger → fullscreen overlay nav (React
  state: menu open/closed; toggle bars animate to X; body links close
  the menu) and the carousel (auto-advance + arrows + dots; a simple
  useState index + setInterval with cleanup, or a tiny manual loop —
  no new dependency needed; do NOT add owl-carousel).
- Section paddings: `7em 0` (~py-28) on all `.section` blocks; `3em`
  (~py-12) below 992px.
- The blog band slant: replicate with an absolutely-positioned white
  rotated rectangle at the top of the teal section
  (`before:absolute before:-top-[400px] before:left-1/2 before:h-[400px]
before:w-[150%] before:-translate-x-1/2 before:rotate-[-4deg]
before:bg-white`-style approach) or a CSS clip-path on the section —
  match the white-slant-over-teal look.
- Reference quirk to keep: the "Recent Blog Post" heading on the teal
  band is BLACK (computed style on the live page), with the lead text
  translucent white (rgba(255,255,255,.7)).
- Blog cards: 3 entries from an array (title, date, blurb, picsum seed).
  Title/date/blurb may be paraphrased but keep the shape (image + date +
  title + blurb).
- Star ratings: render 5 stars per destination; 4 stars + 1 half-star for
  4.5-rated ones (Food & Wines, Resort & Spa); 4 full + 1 outline for
  the 4-rated ones (Hotel Rooms, Mountain Climbing). Use lucide `Star`
  and `StarHalf` (fill currentColor) at 18px in brand teal; outline star
  in teal outline.
- Feature icons (flaticon → lucide): Good Foods = `Utensils`, Travel
  Anywhere = `Globe`, Airplane = `Plane`, Beach Resort = `Palmtree`,
  Mountain Climbing = `Mountain`, Hot Air Balloon = `Balloon` (if
  unavailable in the installed lucide version, fall back to `Cloud` /
  `Cloudy` or a simple inline SVG circle-balloon — document the choice).
  Size ~70px (w-[70px] h-[70px]).
- Placeholders: `picsum.photos/seed/wander-<n>/<w>/<h>` — hero 1920×1080,
  welcome long image 800×1000 (reference img_1_long is portrait), slider
  1600×900 ×6, blog 600×400 ×3, testimonial avatars 140×140 (70px
  circle), destinations 600×450 ×4.
- Footer social icons: lucide `Facebook`, `Twitter` (or `X`), `Instagram`,
  `Linkedin`, `Youtube`.
- Do NOT copy the demo's images, fonts files, or CSS — recreate tokens in
  Tailwind. No icon fonts (fontawesome/ionicons/flaticon) — lucide only.
- The hero overlay is a SOLID rgba(0,0,0,.2), NOT a gradient (unlike
  some other templates in the backlog).

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/wander`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh wander` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
