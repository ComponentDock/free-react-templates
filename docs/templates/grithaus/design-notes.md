# Grithaus — Design notes (measured reference evidence)

Prep stream research for ColorLib **Fitnessgym**
(https://preview.colorlib.com/theme/fitnessgym/), 2026-10-24.
Everything below is measured from the live preview, not inferred.

## Reference-fetch log

| Fetch | Result |
|---|---|
| `curl -4 https://preview.colorlib.com/theme/fitnessgym/` | HTTP 200, 38,371 bytes; title "Fitness Gym - A Modern Fitness Gym Template" |
| `curl -4 …/fitnessgym/style.css` | HTTP 200, 41,524 bytes, master stylesheet (index: §1 fonts, §3 base, §4 header, §5 hero, §6 about, §7 experts, §8 services, §9 pricing, §10 hours, §11 footer, §16 contact) |
| CSS `@import` chain | `css/bootstrap.min.css`, `classy-nav.css`, `owl.carousel.min.css`, `animate.css`, `magnific-popup.css`, `font-awesome.min.css` |
| Google Fonts | `https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800` — the only family |
| Screenshot | `fitnessgym-free-template.jpg` — AVIF; decoded via `avifdec`; top fold only (browser chrome mock), rest from DOM/CSS |
| Notes | IPv4 forced (`curl -4`) — this host's IPv6 is blocked by colorlib.com |

## Colour census (occurrences in `style.css`)

| Colour | Count | Role |
|---|---|---|
| `#38b143` | 57 | primary green — buttons, icon circles, price, links hover, labels |
| `#ffffff` | 43 | text on dark bands, cards, white button |
| `#b6e358` | 27 | lime — gradient start (`btn-3`, `menu-btn`, icon hover) |
| `#101214` | 15 | ink — headings, team plates, dark nav on scroll, `btn-2` hover |
| `#838383` | 12 | body copy, price suffix, hours rows, helper text |
| `#b3e258` | 6 | gradient-text start (`section-heading h6`) |
| `#39b143` | 6 | gradient-text end |
| `#141414` | 4 | dark accent |
| `#bebebe` | 4 | footer testimonial quotes |
| `#eaeaea` | 2 | newsletter input border |
| `#5c6077` | 2 | bottom copyright |
| `#f0f2f8`, `#eef3f6` | 1 each | light card backgrounds (inner pages) |

Overlays: `rgba(5,11,37,0.85)` (`.bg-overlay::after`, experts/pricing/footer),
`rgba(0,0,0,0.3)` (hero slide), `rgba(0,0,0,0.15)` (service icon hover
shadow), `rgba(255,255,255,0.2)` (hairline).

## Measured CSS rules (verbatim values to reproduce)

```css
body { font-family: "Open Sans", sans-serif; font-size: 14px; }
h1,h2,h3,h4,h5,h6 { color: #101214; line-height: 1.3; font-weight: 700; }
p { color: #838383; font-size: 14px; line-height: 2; font-weight: 400; }

/* buttons */
.fitness-btn { min-width: 200px; height: 45px; border-radius: 10px;
  padding: 0 30px; font-size: 14px; line-height: 39px; font-weight: 700;
  text-transform: uppercase; border: 3px solid #38b143; color: #38b143;
  transition-duration: 500ms; }
.fitness-btn:hover { color:#fff; background-color:#38b143; }
.fitness-btn.btn-2 { background:#38b143; color:#fff; }
.fitness-btn.btn-2:hover { background:#101214; border-color:#101214; }
.fitness-btn.btn-3, .fitness-btn.menu-btn {
  background: linear-gradient(to right, #b6e358, #38b143); color:#101214;
  border:none; line-height:45px; }
.fitness-btn.btn-white { background:#fff; }
.fitness-btn.btn-white:hover { background:#38b143; border-color:#38b143; }

/* section heading block */
.section-heading { margin-bottom: 60px; }
.section-heading h6 { font-size:14px; text-transform:uppercase;
  background: linear-gradient(to right,#b3e258,#39b143);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
.section-heading h2 { font-size:36px; font-weight:600; }
.section-heading.white h2 { color:#fff; }
.section-padding-100-0 { padding-top:100px; padding-bottom:0; }

/* header */
.fitness-main-menu, .classy-navbar { height:85px; background:transparent; }
.classynav ul li a { font-weight:700; text-transform:uppercase; color:#fff;
  padding:0 7px; font-size:13px; }
.classynav ul li a:hover { color:#38b143; }
/* (JS adds background-color:#101214 to the nav on scroll) */

/* hero */
.hero-slides .single-hero-slide { height:880px; position:relative; }
.single-hero-slide::after { inset:0; background:rgba(0,0,0,0.3); }
.single-hero-slide h2 { font-size:100px; color:#fff; font-weight:400;
  margin-bottom:0; }   /* 48px / 36px / 30px at lg / md / sm */
.single-hero-slide p { font-weight:600; font-size:14px; color:#fff;
  margin-bottom:40px; }

/* about */
.about-thumb { margin-top:-50px; }   /* portrait pulled up into the copy */

/* experts */
.bg-overlay::after { background:rgba(5,11,37,0.85); }
.experts-team-members { height:500px; margin-top:-95px; overflow:hidden; }
.single-team-members:first-child { width:40%; left:0; bottom:-50px; }
.single-team-members:nth-child(2) { width:30%; left:30%; bottom:0; }
.single-team-members:nth-child(3) { width:30%; left:55%; bottom:-60px; }
.single-team-members:nth-child(4) { width:30%; right:-25px; bottom:-100px; }
.team-members-info { background:#101214; padding:15px 30px; }
.team-members-info h3 { font-size:22px; color:#fff; text-transform:uppercase;
  font-style:italic; }
.team-members-info h6 { font-size:14px; color:#38b143; text-transform:uppercase;
  font-style:italic; }
/* plates 2–4 sit at top:40% and are transform:scale(0.6) */

/* services */
.course-icon { flex:0 0 77px; width:77px; height:77px; border-radius:50%;
  background:#38b143; color:#fff; margin-right:20px; }
.single-service-area:hover .course-icon {
  background:linear-gradient(to right,#b6e358,#38b143);
  box-shadow:0 5px 30px rgba(0,0,0,0.15); }
.single-service-area .course-content h4 { font-size:20px; }
.single-service-area:hover h4 { color:#38b143; }

/* pricing */
.fitness-pricing-table-area { background-attachment:fixed; }  /* .bg-fixed */
.price-table-content { padding:40px; }
.price { font-size:36px; font-weight:600; color:#38b143; line-height:1; }
.price span { font-size:14px; font-style:italic; color:#838383; }
.price-table-content h5 { font-size:22px; margin:30px 0; font-weight:600; }
.price-data li { color:#838383; font-size:14px; margin-bottom:10px; }
.price-data li i { color:#38b143; font-size:8px; margin-right:15px; }

/* working hours */
.working-hours li { display:flex; justify-content:space-between;
  align-items:center; font-weight:600; font-size:16px; color:#838383;
  padding:… ; border-bottom:… ; }
.working-hours li:hover { color:#38b143; }

/* newsletter */
.our-newsletter-area .form-control { height:55px; border:3px solid #eaeaea;
  border-radius:10px; padding:0 40px; font-size:14px; color:#838383;
  font-style:italic; background:transparent; }
.our-newsletter-area .form-control:focus { border-color:#38b143; }
.our-newsletter-area #emailHelp { font-size:13px; color:#838383;
  font-style:italic; }

/* footer */
.footer-social-info a { color:#fff; margin-right:25px; }
.footer-social-info a:hover { color:#38b143; }
.single-testimonial p { font-size:13px; font-style:italic; color:#bebebe; }
.single-testimonial span { font-weight:600; font-size:13px; color:#38b143; }
.bottom-footer-area { padding:40px 0; text-align:center; }
.bottom-footer-area p { font-size:12px; color:#5c6077; font-weight:600; }
```

Breakpoints used by the source: `max-width: 767px` (29 rules),
`768–991px` (12), `992–1199px` (8), `480–767px` (6), plus 55 `@media`
blocks in total. Tailwind defaults (`sm 640 / md 768 / lg 1024`) are a
close enough mapping — the only load-bearing steps are hero height
(880 → 650 → 600 → 550) and the h2 size ladder (100 → 48 → 36 → 30).

## Screenshot vs DOM cross-check

The screenshot (top fold) shows: dark athlete photo behind a transparent
85px bar, white logo pill with a green glow, UPPERCASE white nav, green
gradient call button, light 100px white headline "Get fit & healthy.",
2-line bold white sub-copy, green-outlined "GET A MEMBERSHIP", numeric
pagination "01. 02. 03." (active green), then two promo banners (blue
"25% Discount", brick photo + green "Fitness Class"). Every element is
accounted for in the DOM (`hero-slides-content`, `.fitness-btn.wel-btn`,
`.fitness-adds-area`); nothing in the fold contradicts the CSS tokens
above. The two banners are shipped as flat images (`img/bg-img/add1.gif`,
`add2.png`), so their text is not in the DOM — the recreation renders them
as styled cards carrying the same two headlines.

## Section inventory (DOM evidence)

| Block | Count / detail |
|---|---|
| Nav links | Home, Pages (6-item dropdown), Mega Menu, About Us, News, Contact + `Call: +34 586 778 8892` |
| Hero slides | 3 (`bg-1/2/3.jpg`); headings "Get fit & healthy." / "Long life Fitness." / "Fitness wonder." |
| Promo banners | 2 |
| About | 2 paragraphs (2-col) + 2 buttons + 1 portrait |
| Trainers | 4 (Julia Smith, Mick Hamilton, Jack Black, Criss James) |
| Services | 6 (Business School, Fitness Pro, Yoga Courses, Diet Specialists, Swimming Pool, Spinning Class) |
| Plans | 3 ($50 Woman Fitness Class, $70 Spinning Class + BONUS, $90 All Inclusive Gym) — 3 bullets each |
| Hours | 7 rows (Sun: Closed) |
| Newsletter | name + email + helper note + Subscribe |
| Footer | brand/social (6), testimonials slider (3 quotes ×2), Classes (6), Contact (address/phone/email), bottom bar |

## Image budget (placeholders)

`picsum.photos/seed/grithaus-<n>`: hero ×3 (1920×880), promo ×2
(1200×400), about portrait (800×1000), trainers ×4 (600×800), plan
photos ×3 (600×400), footer band (1920×900). Prefer dark-gym-looking
seeds; the dark overlays hide most of the photo anyway.

## Accessibility / interaction notes

- Hero and testimonial carousels: `aria-live="polite"` on the slide holder,
  `aria-current` on the active pagination button, keyboard-reachable.
- Scroll-state header: derive from a `scroll` listener with cleanup; no
  `set-state-in-effect` (see `docs/conventions.md`).
- Newsletter: `<label>` + `htmlFor`, `aria-describedby` for the helper note,
  `aria-invalid` + per-field error text on submit.
- Mobile panel: `aria-expanded` + `aria-controls` on the burger.
- Dark bands use white text at ≥4.5:1 against `rgba(5,11,37,0.85)`; the
  green `#38b143` passes on white for large text (buttons use white text
  on green, matching the source).
