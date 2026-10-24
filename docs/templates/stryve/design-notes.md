# Stryve — Design notes (measured reference evidence)

Prep stream research for ColorLib **Topgym**
(https://preview.colorlib.com/theme/topgym/), 2026-10-24.
Everything below is measured from the live preview (HTML, stylesheet, script,
and a headless render), not inferred.

## Reference-fetch log

| Fetch | Result |
|---|---|
| `curl -4 https://preview.colorlib.com/theme/topgym/` | HTTP 200, **49,595 B**; title `TopGym \| Fitness HTML Template`; sha256 `0d74346968896ed899ca6aabca7ec3c4a1fe4d5847a507d04b686fc9c656dfa3` |
| `curl -4 …/topgym/css/style.css` | HTTP 200, **38,006 B**, master sheet (§1 default, §2 helper, §3 header, §4 hero, §5 feature, §6 services, §7 trainer, §8 upcoming, §9 footer, §10 other pages); sha256 `ecff00655d147792e6e4777a754d817084c26f5b967fda784418df5523486ab3` |
| `curl -4 …/topgym/js/main.js` | HTTP 200, **4,210 B**; sha256 `8c4f3c343eb140995faccfd3e737b4d3db862ffe2254df4aba7b1399eb96f02d` |
| `css/bootstrap.min.css` | HTTP 200, 20,085 B — Bootstrap 4 grid, `.container` max 1140px @≥1200 |
| Other sheets | `font-awesome.min.css`, `owl.carousel.min.css`, `magnific-popup.css`, `barfiller.css`, `slicknav.min.css` |
| `https://preview.colorlib.com/downloads/free/topgym.zip` | **HTTP 404** — no un-versioned archive; the live preview is the sole DOM/CSS reference |
| Google Fonts probe | `css2?family=Roboto:wght@300;400;500;700;900&display=swap` → HTTP 200 (browser UA) |
| Screenshot | `topgym-free-template.jpg` — AVIF 1200×946, decoded with PIL; top fold only |
| Notes | IPv4 forced (`curl -4`): this host's IPv6 is blocked by colorlib.com |

⚠️ **The page digest is request-unstable in its font block, not in its
content.** `/` and `/index.html` return the same 49,595 B page, but the
host-injected `<style>` at the top of `<head>` emits the self-hosted
`/cf-fonts/s/roboto/5.2.10/…` `@font-face` set in a different ORDER per
request (sha256 `0d74…` vs `11bd…`, byte-identical length). Never treat the
raw digest as identity — the stable handles are the byte count plus the
stylesheet/script digests above.

## Colour census (occurrences in `style.css`)

| Colour | Count | Role |
|---|---|---|
| `#fff` | 53 | text on photo/dark bands, buttons, borders, placeholder |
| `#233EDE` | 30 | **brand blue** — buttons, labels, play button, icon circles, plus tab, card frame, heart |
| `#353535` | 22 | feature titles |
| `#7b7b7b` | 19 | paragraphs, class rows |
| `#212122` | 8 | services band bg, "See All" button, `.up-title` text |
| `#060a0f` | 5 | inner-page dark accents (outside the index fold) |
| `#EBEDF8` | 3 | light accents (inner pages) |
| `#e1e1e1`, `#ccc`, `#c6c6c6`, `#000` | 2 each | hairlines, slicknav bar, social panel |
| `#E5E7F3` | 1 | 2px border on the class-list card |
| `#673ab7`, `#f44336` | 1–2 | preloader spinner (violet/red) — not reproduced |
| `#333`, `#222`, `#111111` | 1 each | input text, search field |
| `#081624` | 1 | 48px social rail circles |
| `#073B4C` | 1 | full-screen search overlay |

No gradients anywhere in the theme sheet — the identity is **flat blue on
white/photo**, which is what separates it from the other gym siblings.

## Measured CSS rules (verbatim values to reproduce)

```css
html, body { height:100%; font-family:"Roboto", sans-serif; background:none; }
h1,h2,h3,h4,h5 { margin:0; color:#111111; font-weight:600; }
h1{70px} h2{36px} h3{30px} h4{24px} h5{18px}
p { font-size:15px; color:#7b7b7b; font-weight:400; line-height:1.6; margin:0 0 15px; }

.section-title { margin-bottom:84px; }
.section-title span { color:#233EDE; font-size:12px; font-weight:900;
  letter-spacing:6px; text-transform:uppercase; margin-bottom:10px; display:block; }
.section-title h2 { color:#fff; font-size:48px; font-weight:700;
  letter-spacing:6px; text-transform:uppercase; }
.set-bg { background-repeat:no-repeat; background-size:cover; background-position:top center; }
.spad { padding-top:95px; padding-bottom:90px; }
.spad-2 { padding-top:100px; padding-bottom:100px; }
.spad-3 { padding-top:96px; padding-bottom:90px; }

/* buttons — square, no radius, no hover state in the source */
.primary-btn { display:inline-block; font-size:14px; font-weight:700;
  padding:20px 50px; color:#fff; background:#233EDE;
  letter-spacing:1.5px; text-transform:uppercase; }

/* preloader (documented delta — not reproduced) */
#preloder { position:fixed; inset:0; z-index:999999; background:#000; }
.loader { width:40px; height:40px; border-radius:60px;
  animation:loader .8s linear infinite; }   /* #f44336 ↔ #673ab7 border */

/* header */
.header-section { height:142px; position:absolute; width:100%; z-index:9; }
.header-section:after { content:""; position:absolute; inset:0;
  background:rgba(0,0,0,.5); z-index:-1; }
.main-menu { position:relative; padding-top:55px; }
.main-menu .logo { position:absolute; left:50%; top:30px; margin-left:-42.5px; }
.main-menu .logo a { display:block; width:85px; height:85px; }
.main-menu ul { list-style:none; text-align:right; margin-left:200px; }
.main-menu ul li { display:inline-block; padding:4px; }
.main-menu ul li a { color:#fff; display:block; font-size:13px;
  font-weight:500; text-transform:uppercase; }
.main-menu ul li:nth-child(1){ float:left; margin-right:40px; }
.main-menu ul li:nth-child(2){ float:left; margin-right:20px; }
.main-menu ul li:nth-child(3){ float:left; }
.main-menu ul li:nth-child(4),(5){ margin-right:35px; }
.main-menu ul .search-btn { color:#fff; cursor:pointer; margin-left:152px; }

/* search overlay */
.search-bar-wrap { position:fixed; inset:0; z-index:99; background:#073B4C;
  color:#fff; visibility:hidden; opacity:0; transition:.3s; }
.search-bar-wrap.active { visibility:visible; opacity:1; z-index:9999; }

/* social rail */
.top-social { position:absolute; z-index:999; right:0; }
.top-social .top-social-links { width:121px; background:#000; text-align:center;
  padding-top:32px; padding-bottom:19px; }
.top-social .top-social-links ul li { margin-bottom:22px; }
.top-social .top-social-links ul li a { display:inline-block; width:48px;
  height:48px; background:#081624; border-radius:50%; color:#fff; line-height:48px; }
@media (max-width:1400px){ .top-social { right:auto; left:0; } }
@media (max-width:991px){ .top-social { display:none; } }

/* hero */
.single-slide { height:895px; padding-top:343px; text-align:center; }
.single-slide .play-btn { color:#fff; background:#233EDE; display:inline-block;
  height:56px; width:56px; line-height:58px; border-radius:50%; margin-bottom:17px;
  position:relative; top:50px; opacity:0; }
.single-slide h1 { color:#fff; font-size:130px; font-weight:500;
  margin-bottom:45px; position:relative; top:50px; opacity:0; }
.slide-items .owl-item.active .single-slide h1,
.slide-items .owl-item.active .single-slide .play-btn,
.slide-items .owl-item.active .single-slide .primary-btn { top:0; opacity:1; }
/* transitions: play .2s, h1 .4s, button .6s — owl autoplay, smartSpeed 1200, fade */
.slide-items .owl-dots { position:absolute; bottom:30px; width:100%; text-align:center; }
.slide-items .owl-dots .owl-dot { width:6px; height:6px; background:#fff;
  margin-right:22px; border-radius:50%; }
.slide-items .owl-dots .owl-dot.active:after { content:""; position:absolute;
  border:3px solid #fff; left:-10px; top:-10px; height:26px; width:26px;
  border-radius:50%; }

/* features */
.single-features .feature-text { padding:0 15px; text-align:center; }
.single-features .feature-text .feature-icon { display:inline-block; height:88px;
  width:88px; background:#233EDE; border-radius:50%; line-height:83px;
  margin-bottom:40px; margin-top:-34px; }   /* circle overlaps the photo */
.single-features .feature-text h5 { color:#353535; font-size:18px; font-weight:700;
  letter-spacing:1.5px; text-transform:uppercase; margin-bottom:22px; }
.single-features .feature-text p { color:#7b7b7b; font-size:15px;
  font-weight:400; line-height:30px; margin-bottom:0; }

/* services */
.services-section { background:#212122; padding-bottom:100px; }
.p-70 { padding-top:70px; }
.single-service { text-align:center; }
.single-service img { margin-bottom:50px; }
.single-service.c-text img { margin-bottom:66px; }
.single-service h5 { color:#fff; font-size:18px; font-weight:700;
  letter-spacing:1.5px; text-transform:uppercase; margin-bottom:22px; }
.single-service p { color:#7b7b7b; font-size:14.5px; line-height:30px; }

/* trainers */
.trainer-section { padding-top:125px; padding-bottom:100px; }   /* + set-bg photo */
.trainer-section .section-title { position:relative; }
.trainer-section .section-title span { color:#fff; }
.trainer-section .section-title .trainer-btn { position:absolute; right:0;
  bottom:13px; background:#212122; }
.trainer-img img { position:relative; width:100%; }
.trainer-img .img-hover { position:absolute; left:15px; top:0;
  padding:37px 40px; background:#233EDE; cursor:pointer; }  /* ALWAYS visible */
.trainer-text { text-align:center; padding-top:48px; }
.trainer-text h5 { color:#fff; font-size:18px; font-weight:700;
  letter-spacing:1.5px; text-transform:uppercase; }
.trainer-text h5 span { display:block; text-transform:none; font-size:15px;
  font-weight:400; opacity:0.6; letter-spacing:0; margin-top:5px; }
@media (max-width:991px){ .trainer-img .img-hover { padding:14px 18px; } }

/* closing row — all three cards are 503px tall */
.upcoming-classes { border:2px solid #E5E7F3; padding:67px 45px 45px 45px;
  height:503px; }
.upcoming-classes .up-title { margin-bottom:45px; }
.upcoming-classes .up-title span { color:#212122; font-size:12px; font-weight:900;
  letter-spacing:6px; opacity:0.6; text-transform:uppercase; display:block;
  margin-bottom:6px; }
.upcoming-classes .up-title h5 { color:#212122; font-size:18px; font-weight:700;
  letter-spacing:1.5px; text-transform:uppercase; }
.upcoming-classes .classes-time li { color:#7b7b7b; list-style:none; font-size:14px;
  margin-bottom:30px; margin-left:17px; position:relative; }
.upcoming-classes .classes-time li img { position:absolute; left:-25px; top:0; }
.upcoming-classes .classes-time li span { float:right; }

.membership-card { height:503px; border-top:22px solid #233EDE;
  border-left:24px solid #233EDE; border-bottom:21px solid #233EDE;
  border-right:20px solid #233EDE; }                      /* + set-bg photo */
.membership-card .membership-details { padding-top:47px; padding-left:27px; }
.membership-card .discount h1 { color:#233EDE; font-size:72px; font-weight:700; }
.membership-card .discount h1 span { font-size:15px; font-weight:700;
  margin-left:-9px; display:inline-block; }

.member-sign-up { height:503px; padding:67px 41px 0 45px; text-align:left; }
.member-sign-up .up-title span { color:#fff; opacity:0.6; }
.member-sign-up .up-title h5 { color:#fff; }
.member-sign-up p { color:#fff; font-size:15px; line-height:30px; margin-bottom:42px; }
.member-sign-up .member-signup-btn .primary-btn { display:block; }

/* footer */
.footer-section { height:641px; padding-top:109px; }      /* + set-bg photo */
.footer-content { text-align:center; }
.footer-content .footer-logo { margin-bottom:33px; }
.footer-content .footer-menu { margin-bottom:86px; }
.footer-content .footer-menu ul li { display:inline-block; margin-right:37px; }
.footer-content .footer-menu ul li a { color:#fff; font-size:13px;
  text-transform:uppercase; padding:4px; }
.footer-content .subscribe-form { position:relative; width:542px; margin:0 auto; }
.footer-content .subscribe-form input { color:#fff; height:73px; width:100%;
  background:transparent; border:2px solid #fff; font-size:13px; font-style:italic;
  padding-left:28px; }
.footer-content .subscribe-form input::placeholder { color:#fff; opacity:0.6;
  text-transform:uppercase; }
.footer-content .subscribe-form button { color:#fff; background:#233EDE;
  border:1px solid #233EDE; font-size:14px; text-transform:uppercase;
  height:100%; width:192px; position:absolute; right:0; bottom:0; }
.footer-content .social-links { margin:52px 0 45px; }
.footer-content .social-links a { color:#fff; margin-right:60px; }
.footer-content .footer-icon-img { margin-bottom:32px; }
.footer-content .copyright { color:#fff; font-size:13px; font-weight:400; opacity:0.5; }
.footer-content .copyright a { color:#fff; text-decoration:underline; }
```

## Live render measurement (headless Chromium, 1440×1000)

| Element | Measured |
|---|---|
| document height | **4,632px** (mobile 390×844: 8,883px) |
| `body` font / colour | `Roboto, sans-serif`; transparent bg (`document.fonts.check('500 130px Roboto')` = true) |
| `.header-section` | 0,0 → 1440×142, `position:absolute` |
| logo link | x=678, 85×85 (viewport centre) |
| nav item 1 | x=369, 36×20, 13px/500 UPPERCASE white |
| `.section-title span` (services) | y=1,630, 12px/900, `rgb(35,62,222)`, ls 6px |
| `.section-title h2` | y=1,658, 48px/700, white, ls 6px |
| `.single-slide` | 1440×895, `padding-top:343px` |
| `.single-slide h1` | y=466, 130px/500 white |
| `.play-btn` | 56×56, `rgb(35,62,222)`, radius 50% |
| `.primary-btn` | 191×61, 14px/700, ls 1.5px, **radius 0px** |
| feature icon circle | 88×88, `rgb(35,62,222)`, radius 50% |
| services band | y=1,535 → 2,311, bg `rgb(33,33,34)`, pad 95/100 |
| trainers band | y=2,311 → 3,287 (976px), photo background |
| `.img-hover` | 93×98 at the photo's top-left, `rgb(35,62,222)`, pad 37/40 |
| closing cards | all three 350×503 at y=3,388 (x=165 / 545 / 925) |
| footer band | y=3,991 → 4,632 (641px), pad-top 109 |
| subscribe input | 542×73, 2px white border, transparent bg |
| subscribe button | 192×73 at x=799 (`right:0`), `rgb(35,62,222)` |
| social rail | 121×379 at x=1,319, panel `rgb(0,0,0)`, circles 48×48 `rgb(8,22,36)` |
| counters | slides 3 (+4 owl clones), features 3, services 4, trainers 3, class rows 6, dots 3, anchors 52 rendered / 30 dead (37 / 25 in the raw HTML) |

## Screenshot vs DOM cross-check

The TEMPLATES.md screenshot is the top fold inside a browser-chrome mock and
was taken on **slide 2** ("Be Fit.Top Trainer"), not slide 1: dark
treadmill-gym photo, a grey washed band across the nav, the white double-line
"TOP GYM" box centred, HOME / ABOUT US / CLASSES to its left and
INSTRUCTORS / NEWS / CONTACT + a magnifier to its right, the black social
rail with five dark-navy circles, the blue round play button, the very large
white headline, a flat blue READ MORE block, and three dots with the middle
one ringed. Every element is present in the DOM — except two artefacts, both
documented as deltas below: the grey band is **slicknav's** duplicated
"MENU ☰" bar (its CSS is not scoped, so it renders at desktop width over the
hero) and the black preloader that fades on `window.load`.

## Section inventory (DOM evidence)

| Block | Count / detail |
|---|---|
| Nav links | Home, About us, Classes, Instructors (`elements.html`), News, Contact + search glyph |
| Search overlay | `h2` "Search", `<input type="search">` placeholder "Type Keywords", "Search" submit, X close |
| Social rail | 5 (Pinterest, Facebook, Twitter, Dribbble, Behance) |
| Hero slides | 3 — "Be Fit.Top Gym" / "Be Fit.Top Trainer" / "Be Fit.Top Body", each with a play control (YouTube `SEVuD_djKrU`) + "Read More" |
| Features | 3 — Amazing Setting, Best Trainers, Diet Plans |
| Services | 4 — Pilates, Free Lifting, Yoga, Spinning + "see all the services" |
| Trainers | 3 — Rachel Smith, Micheal Williams, James Brown (all "Aerobics Instructor") + "See All" |
| Closing row | class list (6 rows), membership card (25% Discount), sign-up card ("New / Personal Trainer" + "Sign up Now") |
| Footer | logo, 6-link menu, subscribe form ("your Email" / "Sign Up"), 5 socials, icon strip, copyright |

## Image budget (placeholders)

`picsum.photos/seed/stryve-<n>`: hero ×3 (1920×895), features ×3 (600×400),
trainers ×3 (600×800), membership card (700×1000, portrait — the blue 22px
frame crops it), sign-up card (700×1000), footer band (1920×641). The four
service "icons" and the three feature icons are **PNG glyph art in the
source** — replace them with `lucide-react` line icons (Activity,
Dumbbell, PersonStanding, Bike / Salad, Users, Apple …) inside the same
88px blue circle, and drop the `.c-text` extra 66px icon gap that exists only
to equalise the source's taller second PNG.

## Accessibility / interaction notes

- Hero slider: `aria-live="polite"` on the slide holder, dot buttons carry
  `aria-label` + `aria-current`; autoplay pauses when the tab is hidden and
  when focus enters the slider, and respects `prefers-reduced-motion`.
- Search overlay and play dialog: focus moves into the panel on open, Escape
  closes, focus returns to the trigger; the overlay is a labelled dialog
  (`role="dialog" aria-modal="true"`).
- The duplicate slicknav bar in the source is a **bug**, not a design: keep
  one nav plus a burger panel below 768px (`aria-expanded` / `aria-controls`).
- Subscribe form: real `<form>` with a `<label>` (visually hidden), `type`
  that accepts addresses, `aria-invalid` + inline error text, success message
  in a polite live region.
- Contrast: white on `#233EDE` = 6.6:1, `#7b7b7b` on white = 4.2:1 (body
  size only), 60%-opacity role text sits on photography inside a band that
  should get a dark scrim if contrast is ever audited.
- The always-visible blue plus tab is a link in the source (`href="#"`); in
  the recreation it is a button with an accessible label ("View trainer
  profile") that opens nothing — a documented no-op, not a hidden hover.

## Documented deltas (recreation vs source)

1. **Preloader omitted** — the source paints a black full-screen `#preloder`
   with a red/violet spinner and fades it on `load`. Reproducing it hides
   content in tests and hurts LCP/accessibility.
2. **Duplicate slicknav "MENU" bar omitted** — slicknav's injected bar is
   visible at desktop width over the hero in the live render (screenshot
   confirms it). One nav + a real mobile panel replaces it.
3. **Multi-page → single page** — the five inner pages are live and stay the
   copy reference, but their links become in-page/dead anchors.
4. **YouTube modal → local dialog** — the play control opens a poster
   dialog; nothing is embedded until the user activates it.
5. **Fonts from Google Fonts** — the source self-hosts Roboto woff2 through
   the preview host's `/cf-fonts` path; the recreation uses one `<link>`.
6. **ColorLib credit → Component Dock** — the footer's "made with ♥ by
   Colorlib" line becomes the required
   https://www.componentdock.com/ attribution.
7. **lorem ipsum → real copy** — same shapes, real gym voice; keep the two
   source typos ("Upcomming Classes", label "Features" over `h2` "Services")
   only if the implementer wants a wink — they are not load-bearing.
