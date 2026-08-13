# Template: Jurist (Law Firm Template)

## Purpose

Jurist is a law-firm one-page template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Legalcare" template
design (see TEMPLATES.md — appears 2×: lines 437 and 2128; both rows point to
the same source, one prep covers all; verified with
`grep -c 'wp/template/legalcare/'` = 2), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/legalcare/ (law firm template)
Preview URL: https://preview.colorlib.com/theme/legalcare/

## Design reference (replication findings)

- **Original:** ColorLib "Legalcare" (`<title>Legalcare - Free Bootstrap 4
Template by Colorlib</title>`). A gold-accented law-firm one-pager: a
  transparent navbar floating over a full-height photographic hero (man in a
  suit) with a black 50% overlay; a gold uppercase "Welcome To Legalcare"
  subheading + a white 48px/700 headline "Attorneys Fighting For Your" with a
  rotating gold word (Freedom / Rights / Case / Custody) and a blinking gold
  cursor bar; a gold "Get Legal Advice" button; a "Why Select Us?" section
  with a 140px gold strip behind three white service cards (100px circular
  icon, 18px/600 title, gold circular arrow button revealed on hover); an
  about section with a pulsing 80px gold video-play circle over a photo and
  Our Mission/Our Vision/Our Value tabs (gold active fill) plus a gold "40
  Years of Experienced" badge; a "1000+ Completed Cases Successfully"
  carousel of 4 case cards (300px, gold overlay inset 10px on hover with
  white title + category); 4 attorney flip-cards (400px, hover flips to a
  gold back with quote + avatar + name/role); a "Free Consultation" band over
  a photo with a gold overlay on the right half (opacity .8), white heading
  and transparent dark form inputs; a "Happy Clients" testimonial carousel;
  a "Recent Blog" row of 3 cards with gold overlapping date badges; a gold
  newsletter strip ("Subscribe to our Newsletter" + white input with a darker
  gold `#89842c` button); and a dark `#222831` footer with gold accents
  (Practice Areas links with gold arrows, Business Hours gold headings) and a
  copyright bar. Poppins + Bootstrap 4 + jQuery + owl.carousel + scrollax +
  magnific-popup + AOS + ionicons/flaticon/icomoon icons — NOT Tailwind.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/legalcare/
  (HTTP 200, ~38 KB HTML fetched; `css/style.css` ~81 KB parsed for tokens;
  page also imports animate.css, aos.css, flaticon.css, icomoon.css,
  ionicons.min.css, magnific-popup.css, open-iconic-bootstrap.min.css,
  owl.carousel.min.css, owl.theme.default.min.css; jQuery + owl.carousel +
  scrollax + magnific-popup + AOS + Bootstrap 4, NOT Tailwind). Font:
  `"Poppins", Arial, sans-serif` (5 rules in style.css; loaded via an inline
  `@font-face` block in the HTML head, weights 300–900 — do NOT copy the
  woff2 files, add the Google Fonts `<link>` for Poppins in index.html
  instead).
- **Screenshot note:** `legalcare-free-template.jpg` (1200×946, browsed
  visually in the browser): professional man with glasses and beard in a dark
  suit in the hero (blurred warm office bokeh); dark uppercase LEGALCARE
  logo; nav links Home/About/Attorneys/Practice Areas/Case Studies/Blog/
  Contact + gold "Free Consultation" button; serif-feeling white headline
  "Attorneys Fighting For Your Freedom." with a thin gold underline (in the
  live DOM this is the blinking gold cursor bar on the rotating word — the
  parsed stylesheet is authoritative: `.slider-text h1` is Poppins 48px/700,
  NOT serif); gold "Get Legal Advice" button; "Why Select Us?" section with
  an olive-gold strip behind three white cards (scales-of-justice, document,
  and gavel icons — flaticon classes → lucide icons); below the fold: dark
  case-study cards and a dark footer. The screenshot confirms the palette
  (gold `#afa939` accent on white/dark) and layout; the live preview DOM +
  parsed stylesheet are the authoritative reference.

### Design tokens (from `css/style.css` + computed styles)

| Token                     | Value                                                                                                                                                                                                                             | Where                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand gold                | `#afa939`                                                                                                                                                                                                                         | `.btn-primary` bg/border, `.bg-primary`, nav link hover + active, `.navbar-brand span`, `.slider-text h1 span`, `.txt-rotate .wrap:after` cursor, `.slider-text .subheading`, `.heading-section .subheading`, `.services .icon span`, `.services .btn-custom`, `.services-wrap:after` strip, `.icon-video`, `.years h4` bg, `.case:hover:after` overlay, `.block-2 .back` bg, `.ftco-consultation .overlay`, `.tabulation-2 .nav-pills .nav-link.active`, `.blog-entry .text .topper` (+triangle tail), `.ftco-footer .logo a span`, footer link hover, `.opening-hours h4`, `.tabulation-2 .nav-pills .nav-link span` |
| Dark gold                 | `#89842c`                                                                                                                                                                                                                         | `.subscribe-form .form-group .submit` bg (newsletter button)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Ink black                 | `#000000`                                                                                                                                                                                                                         | `.hero-wrap .overlay` (opacity .5), mobile nav bg, blog `.heading a` color, tab pill text, `.ftco-footer .ftco-heading-2` color                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Footer navy               | `#222831`                                                                                                                                                                                                                         | `.ftco-footer` bg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Footer brown              | `#3c312e`                                                                                                                                                                                                                         | `.ftco-bg-dark` bg (rarely visible — footer bg wins)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Dark slate                | `#343a40`                                                                                                                                                                                                                         | `.btn-dark` (consultation "Send message" submit)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Light gray                | `#f8f9fa`                                                                                                                                                                                                                         | `.bg-light` (blog + newsletter sections)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| White                     | `#fff`                                                                                                                                                                                                                            | hero text, cards, scrolled nav bg, `.services` bg, tab pills, form input, footer logo/link text                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Heading color             | `rgba(0,0,0,0.8)`                                                                                                                                                                                                                 | h1–h4 base color (`.heading-section h2` overrides to 30px/700)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Hero overlay              | `rgba(0,0,0,0.5)`                                                                                                                                                                                                                 | `.hero-wrap .overlay` over the hero photo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Service icon circle bg    | `rgba(0,0,0,0.05)`                                                                                                                                                                                                                | `.services .icon` 100px circle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Case hover overlay        | `#afa939` at opacity .5, inset 10px                                                                                                                                                                                               | `.case:hover:after` (top/left/right/bottom 10px)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Attorney front gradient   | `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 38%, rgba(0,0,0,0.4) 100%)`                                                                                                                            | `.block-2 .front:before` over the attorney photo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Consultation overlay      | `#afa939` at opacity .8                                                                                                                                                                                                           | `.ftco-consultation .overlay` (width 50% on lg, full on mobile)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Consultation input border | `rgba(255,255,255,0.3)`                                                                                                                                                                                                           | `.consultation .form-control` border; bg transparent, text white                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Hero sub text             | `rgba(255,255,255,0.7)`                                                                                                                                                                                                           | `.slider-text p` (18px)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Back card shadow          | `0 0 70px -10px rgba(0,0,0,0.4)`                                                                                                                                                                                                  | `.block-2 .back`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Service card shadow       | `0 15px 34px -10px rgba(0,0,0,0.09)`                                                                                                                                                                                              | `.services` (radius 4px, padding 20px)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Case card shadow          | `0 5px 21px -14px rgba(0,0,0,0.14)`                                                                                                                                                                                               | `.case` (300px tall)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Scrolled nav shadow       | `0 0 10px 0 rgba(0,0,0,0.1)`                                                                                                                                                                                                      | `.ftco-navbar-light.scrolled` (fixed, white bg)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Body font                 | `"Poppins", Arial, sans-serif`                                                                                                                                                                                                    | body, nav, headings, buttons (5 rules)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Hero h1                   | 48px, weight 700, white, line-height 1.5                                                                                                                                                                                          | `.slider-text h1` (40px ≤991px); gold rotating span                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Hero subheading           | 15px, uppercase, weight 800, gold                                                                                                                                                                                                 | `.slider-text .subheading` (gold; the 2nd `color` declaration wins)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Hero paragraph            | 18px, `rgba(255,255,255,0.7)`                                                                                                                                                                                                     | `.slider-text p`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Section subheading        | 16px, weight 700, gold, block, mb 5px                                                                                                                                                                                             | `.heading-section .subheading` (all body sections)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Section h2                | 30px, weight 700 (28px mobile)                                                                                                                                                                                                    | `.heading-section h2`; white variant: 40px white (`heading-section-white`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Nav link                  | 15px, weight 400, white → gold hover                                                                                                                                                                                              | `.ftco-navbar-light .navbar-nav .nav-link` (active = gold); padding 20px x/0.9rem y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Nav CTA                   | gold bg, 1px gold border, radius 2px, white text                                                                                                                                                                                  | `.nav-item.cta > a` ("Free Consultation")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Navbar brand              | white; tagline span 16px gold block                                                                                                                                                                                               | `.navbar-brand` (uppercase wordmark + "A Law Firm Agency" gold span)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Primary button            | bg `#afa939`, border `#afa939`, white text, radius 3px                                                                                                                                                                            | `.btn.btn-primary`; hover → transparent bg + gold text (outline)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Dark button               | bg/border `#343a40`, white text                                                                                                                                                                                                   | `.btn-dark` (consultation submit)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Service card              | white bg, radius 4px, padding 20px, shadow                                                                                                                                                                                        | `.services`; icon circle 100px `rgba(0,0,0,0.05)` + gold 30px icon; h3 18px/600; `.btn-custom` 50px gold circle, opacity 0 → 1 on hover, bottom -25px (arrow icon white)                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Gold strip                | 140px tall `#afa939` behind cards                                                                                                                                                                                                 | `.services-wrap:after` (z-index -1; full height ≤767px)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Case card                 | 300px tall, shadow; hover: gold overlay opacity .5 inset 10px                                                                                                                                                                     | `.case`; hidden `.text` (white 22px h3 link + `rgba(255,255,255,0.9)` category span) revealed on hover                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Attorney card             | 400px tall; front photo + gradient + bottom box (name 20px/600 white, role 12px white); hover rotateY 180° (0.6s) → gold back (quote 16px `rgba(255,255,255,0.9)`, author row: 40px round avatar, white 600 name, 13px role)      | `.block-2` flip cards (`.front`/`.back` backface-hidden)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Tabs                      | white pills, radius 4px, 1px `rgba(0,0,0,0.1)` border, gold span, 600 weight; active = gold fill + white text; content white, padding 20px, 1px `rgba(0,0,0,0.05)` border                                                         | `.tabulation-2 .nav-pills` (Our Mission / Our Vision / Our Value)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Years badge               | gold bg, 20px text, padding 20px (20px 30px ≥768px), white text                                                                                                                                                                   | `.years h4` ("40 Years of Experienced"; number counter)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Consultation form         | inputs height 52px, radius 5px, transparent bg, white text, border `rgba(255,255,255,0.3)`                                                                                                                                        | `.consultation .form-control` (name/email/subject + message textarea)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Testimonial               | quote p + author row: `.user-img` avatar, `.name`, `.position`                                                                                                                                                                    | `.testimony-wrap.py-4` (owl carousel)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Blog card                 | `.block-20` 270px photo; `.topper` gold date badge overlapping top-left (day + year + month, triangle tail via `border-width: 10px 10px 0 10px`); heading 18px/500 black; gold "Read more"                                        | `.blog-entry` (bg-light section)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Newsletter strip          | gold `#afa939` bg (`bg-primary`), white 24px h2                                                                                                                                                                                   | `.col-md-8.bg-primary` row; input white radius `5px 0 0 5px`, text `rgba(0,0,0,0.7)`; submit bg `#89842c` radius `0 5px 5px 0`, white 16px                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Footer                    | bg `#222831`, padding 5em 0 3em; logo 34px uppercase weight 800 white + gold 16px tagline; widget h2 20px/400 white mb 40px; links white → gold hover; social 50px circles `rgba(255,255,255,0.05)`; `opening-hours h4` 16px gold | `.ftco-footer` (Practice Areas / Have a Questions? / Business Hours columns)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Section structure (from the live DOM, top to bottom)

1. `nav.navbar.ftco_navbar` — transparent, absolute over the hero (top 20px):
   - `a.navbar-brand` — "Legalcare" wordmark + `<span>` "A Law Firm Agency"
     (gold tagline).
   - `ul.navbar-nav.ml-auto`: Home (active), About, Attorneys, Practice
     Areas, Case Studies, Blog, Contact — white 15px links, gold on
     hover/active.
   - `li.nav-item.cta > a` — gold "Free Consultation" button (radius 2px).
   - Mobile: black bg + hamburger ("Menu") → collapse panel.
   - Scrolled: fixed top, white bg + `0 0 10px 0 rgba(0,0,0,0.1)` shadow.
2. `div.hero-wrap.js-fullheight` (bg photo `images/bg_1.jpg`, stellar
   parallax) — full-height hero:
   - `div.overlay` — black, opacity .5.
   - `div.slider-text` (col-md-6, left-aligned): `h2.subheading` gold
     uppercase "Welcome To Legalcare"; `h1` white 48px/700 "Attorneys
     Fighting For Your " + `span.txt-rotate` rotating gold word (data-rotate
     '["Freedom.","Rights.","Case.","Custody."]', 2000ms period) with gold
     blinking cursor bar after it; `p` 18px "We have help thousands of
     people to get relief from national wide fights wrongfull denials. Now
     they trusted legalcare attorneys"; `a.btn.btn-primary` "Get Legal
     Advice" + arrow icon.
3. `section.ftco-section.ftco-no-pt` — Why Select Us:
   - Left `div.col-lg-3.py-5 > .heading-section`: `span.subheading`
     "Services" (gold), `h2` "Why Select Us?" (30px/700), `p` lorem, `a.btn
.btn-primary` "Free Consultation".
   - Right `div.col-lg-9.services-wrap` (140px gold strip behind the top via
     `:after`): 3 × `div.services.text-center` white cards (col-md-4):
     `div.icon` 100px circle (`rgba(0,0,0,0.05)`) + `span.flaticon-lawyer`
     (gold 30px → lucide), `div.text`: `h3` "Fight for Justice" / "Best
     Case Strategy" / "Experienced Attorney" (18px/600) + `p` lorem (source
     repeats the same copy on all 3 — paraphrase 3 distinct blurbs), and a
     `a.btn-custom` 50px gold circle with arrow icon, hidden → revealed on
     hover (bottom -25px).
4. `section.ftco-section.ftco-no-pt.ftco-no-pb` — About:
   - Left `div.col-md-6 > div.img.img-video` (photo `images/about.jpg`,
     ~600px tall) with `a.icon-video` 80px gold pulsing circle + play icon
     (vimeo popup → decorative link, keep as non-navigating button/span).
   - Right `div.col-md-6.pl-md-5`: `span.subheading` gold "Welcome to
     Legalcare", `h2` "We Always Fight For Your Justice to Win" (30px/700),
     `p` lorem; `div.tabulation-2.mt-4`: `ul.nav-pills` 3 tabs — Our
     Mission / Our Vision / Our Value (white pills radius 4px, active =
     gold fill) + `div.tab-content.bg-light.rounded` with 3 `p` panes
     (paraphrase distinct text per tab); `div.years.d-flex.mt-4`: `h4`
     gold badge — `span.number` counter "40" + "Years of Experienced".
5. `section.ftco-section` — Case Studies:
   - Centered `.heading-section` (col-md-10): `span.subheading` gold
     "Explore Case Studies", `h2` "1000+ Completed Cases Successfully".
   - `div.carousel-case.owl-carousel`: 4 × `.item > .case.img` (300px tall,
     bg photos case-1..4): `.text.text-center` hidden by default (opacity 0) — `h3 > a` "Legal Seperation" (white 22px) + `span` "Corporate";
     hover: gold overlay opacity .5 inset 10px + text revealed. Source
     repeats title/category on all 4 — paraphrase 4 distinct case names
     (e.g. "Family Custody", "Corporate Litigation", "Insurance Claim",
     "Criminal Defense").
   - Below: `a.btn.btn-primary.px-5` "See All Successful Cases".
6. `section.ftco-section.ftco-no-pt` — Attorneys (container-fluid px-md-5):
   - Centered `.heading-section` (col-md-7): `span.subheading` gold "Our
     Attorney", `h2` "Our Legal Attorneys".
   - 4 × `div.col-lg-3.col-sm-6 > div.block-2` (400px flip cards):
     `div.flipper`: `div.front` (bg photo person_1..4 + bottom gradient +
     `div.box`: `h2` name 20px/600 white + `p` role 12px white — Ryan
     Anderson/Civil Lawyer, Greg Washer, Tony Henderson, Jack Smith);
     `div.back` (gold bg): `blockquote > p` quote 16px
     `rgba(255,255,255,0.9)` + `div.author.d-flex`: 40px round avatar + name
     - `span.position` role. Hover flips 180° (0.6s).
7. `section.ftco-consultation.ftco-section.ftco-no-pt.ftco-no-pb.img` (bg
   photo `images/bg_2.jpg`) — Free Consultation:
   - `div.overlay` — gold, opacity .8, width 50% on lg (right half).
   - `div.col-md-6.half.heading-section.heading-section-white.p-3.py-5`:
     `span.subheading` `rgba(255,255,255,0.5)` "Booking an Appointment",
     `h2` white 40px "Free Consultation".
   - `form.consultation`: inputs "Your Name", "Your Email", "Subject" +
     `textarea` "Message" (52px, transparent, white text, border
     `rgba(255,255,255,0.3)`, radius 5px) + `input.btn.btn-dark.py-3.px-4`
     submit "Send message" (`#343a40`). Client-side validation only; no
     backend.
8. `section.ftco-section.testimony-section` — Happy Clients:
   - Centered `.heading-section` (col-md-7): `span.subheading` gold
     "Testimonial", `h2` "Happy Clients".
   - `div.carousel-testimony.owl-carousel`: 4 × `.testimony-wrap.py-4`:
     `p` quote + `div.d-flex.align-items-center`: `div.user-img` avatar +
     name "Roger Scott" + `span.position` "Marketing Manager". Source
     repeats quote/name on all 4 — paraphrase distinct quotes; vary at
     least 2–3 authors.
9. `section.ftco-section.bg-light` — Recent Blog:
   - Centered `.heading-section` (col-md-7): `span.subheading` gold "Blog",
     `h2` "Recent Blog".
   - 3 × `div.col-md-4 > div.blog-entry`: `div.text.px-4.py-4` with `h3
.heading` "All you want to know about industrial laws" (18px/500
     black) → paraphrase 3 distinct post titles; `a.block-20` 270px photo
     (image_1..3); `div.text.p-4.float-right` with `div.topper` gold date
     badge overlapping top (day "18" + yr "2019" + mos "October",
     triangle tail) + `p` excerpt + `a.btn.btn-primary` "Read more".
10. `section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light` — Newsletter:
    - `div.row.d-flex.justify-content-end`: `div.col-md-8.py-4.px-md-4
.bg-primary` (gold strip): `div.col-md-6` `h2` white 24px "Subcribe
      to our Newsletter" (fix source typo → "Subscribe"); `div.col-md-6`
      `form.subscribe-form`: white input (radius `5px 0 0 5px`) +
      `input.submit` "Subscribe" bg `#89842c` (radius `0 5px 5px 0`, white).
      Client-side only.
11. `footer.ftco-footer.ftco-bg-dark.ftco-section` (bg `#222831`):
    - Col 1: `h2.logo > a` "Legalcare" 34px uppercase 800 white +
      `span` gold 16px "A Law Firm Agency"; `p` lorem; `ul.ftco-footer
-social`: 3 × 50px circles `rgba(255,255,255,0.05)` (twitter /
      facebook / instagram icons).
    - Col 2 (ml-md-5): `h2.ftco-heading-2` "Practice Areas" + 8 links each
      with gold arrow span: Family Law, Business Law, Insurance Law,
      Criminal Law, Drug Offenses, Fire Accident, Employment Law, Property
      Law (white, hover gold).
    - Col 3: `h2.ftco-heading-2` "Have a Questions?" + `div.block-23`:
      map-marker "203 Fake St. Mountain View, San Francisco, California,
      USA", phone "+2 392 3929 210", email "info@yourdomain.com"
      (paraphrase into a fake address/phone/email).
    - Col 4: `h2.ftco-heading-2` "Business Hours" + `div.opening-hours`:
      gold `h4` "Opening Days:" + spans "Monday – Friday : 9am to 20 pm" /
      "Saturday : 9am to 17 pm"; gold `h4` "Vacations:" + "All Sunday
      Days" / "All Official Holidays".
    - Bottom `div.row` > copyright line — ColorLib credit → Component Dock
      per AGENTS.md (https://www.componentdock.com/).

## Requirements

### Requirement: Navbar

The system SHALL render a navbar that is transparent over the hero, turns
white and fixed on scroll, with a brand wordmark, nav links, a gold CTA, and
a mobile menu.

#### Scenario: Desktop nav

- **GIVEN** the Jurist app is rendered at the top of the page
- **WHEN** the page loads
- **THEN** the navbar SHALL be transparent and absolutely positioned over
  the hero
- **AND** the brand SHALL show the wordmark "Jurist" in white uppercase with
  the tagline "A Law Firm Agency" in gold beneath it (16px)
- **AND** SHALL show links Home (active), About, Attorneys, Practice Areas,
  Case Studies, Blog, and Contact in white 15px text (gold on hover and for
  the active link)
- **AND** SHALL render a gold "Free Consultation" button (bg `#afa939`, 1px
  gold border, radius 2px, white text)

#### Scenario: Scrolled navbar

- **GIVEN** the page is scrolled down
- **WHEN** the navbar enters the fixed state
- **THEN** it SHALL become fixed at the top with a white background and the
  shadow `0 0 10px 0 rgba(0,0,0,0.1)`

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger "Menu" toggle is activated
- **THEN** a black navigation panel SHALL open listing the same links and
  CTA
- **AND** the panel SHALL close via the toggle, Escape, or a link click

### Requirement: Hero

The system SHALL render a full-height hero with a background photo, a black
overlay, a gold subheading, a headline with a rotating gold word, a
paragraph, and a gold CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL be full-height with a law-office photo background
  (picsum seed) and a `rgba(0,0,0,0.5)` overlay
- **AND** a gold uppercase subheading SHALL read "Welcome To Jurist" (15px,
  weight 800)
- **AND** the headline SHALL read "Attorneys Fighting For Your" in white
  48px/700, followed by a rotating gold word cycling Freedom, Rights, Case,
  and Custody with a blinking gold cursor bar
- **AND** a paragraph SHALL read "We have helped thousands of people get
  relief from nationwide fights against wrongful denials. Now they trust
  Jurist attorneys." (18px, `rgba(255,255,255,0.7)`)
- **AND** a gold "Get Legal Advice" button SHALL render (bg `#afa939`, white
  text, radius 3px, arrow icon), turning into an outline (transparent bg +
  gold text) on hover

#### Scenario: Rotating word

- **GIVEN** the hero headline is rendered
- **WHEN** the rotation interval elapses (source period 2000ms)
- **THEN** the highlighted word SHALL cycle through the sequence
  Freedom, Rights, Case, Custody (accessibility: announce the current word
  via `aria-live`)

### Requirement: Why Select Us

The system SHALL render a split section with a heading block on the left and
three service cards over a gold strip on the right.

#### Scenario: Heading block

- **GIVEN** the section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the gold subheading "Services" (16px,
  weight 700), the heading "Why Select Us?" (30px, weight 700), a
  paragraph, and a gold "Free Consultation" button

#### Scenario: Service cards

- **GIVEN** the service cards area is rendered
- **WHEN** the page loads
- **THEN** a 140px gold `#afa939` strip SHALL sit behind the top of the card
  row (full height on mobile)
- **AND** three white cards SHALL render (radius 4px, shadow
  `0 15px 34px -10px rgba(0,0,0,0.09)`), each with a 100px circular icon
  (bg `rgba(0,0,0,0.05)`, gold lucide icon), an 18px/600 title — Fight for
  Justice, Best Case Strategy, Experienced Attorney — and a distinct
  paraphrased paragraph
- **AND** hovering a card SHALL reveal a 50px gold circle arrow button that
  slides up from below the card

### Requirement: About with tabs

The system SHALL render an about section with a photo + pulsing play button
on the left and a heading, three tabs, and a years badge on the right.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show a photo (picsum seed) with an 80px
  gold pulsing circle play button overlaid on it
- **AND** the right column SHALL show the gold subheading "Welcome to
  Jurist", the heading "We Always Fight For Your Justice to Win", and a
  short paragraph

#### Scenario: Mission/Vision/Value tabs

- **GIVEN** the tabulation block is rendered
- **WHEN** the page loads
- **THEN** three white pill tabs SHALL render — Our Mission, Our Vision,
  Our Value (radius 4px, 1px `rgba(0,0,0,0.1)` border, gold accent text)
- **AND** the active tab SHALL be filled gold `#afa939` with white text
- **AND** clicking a tab SHALL swap the content pane to a distinct
  paraphrased paragraph (keyboard-accessible with proper `role="tablist"` /
  `aria-selected`)

#### Scenario: Years badge

- **GIVEN** the years badge is rendered
- **WHEN** the page loads
- **THEN** a gold badge SHALL show a count-up number "40" and the text
  "Years of Experienced" (white text, gold bg)

### Requirement: Case studies

The system SHALL render a "1000+ Completed Cases Successfully" section with
four case cards that reveal a gold overlay on hover, plus a gold CTA.

#### Scenario: Case cards

- **GIVEN** the case studies section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL show the gold subheading "Explore Case
  Studies" and the h2 "1000+ Completed Cases Successfully"
- **AND** four 300px case cards SHALL render with distinct photo backgrounds
  (picsum seeds), titles (e.g. Family Custody, Corporate Litigation,
  Insurance Claim, Criminal Defense — paraphrased from the source's repeated
  "Legal Seperation") and a category label (e.g. Corporate)
- **AND** the title + category SHALL be hidden by default
- **AND** hovering a card SHALL reveal them in white over a gold `#afa939`
  overlay at opacity .5 inset 10px (title 22px, category
  `rgba(255,255,255,0.9)`)
- **AND** a gold "See All Successful Cases" button SHALL render below the
  grid

### Requirement: Attorney flip cards

The system SHALL render four 400px attorney cards that flip on hover from a
photo front to a gold back with a quote and author row.

#### Scenario: Flip interaction

- **GIVEN** an attorney card is rendered
- **WHEN** the page loads
- **THEN** the front SHALL show a photo with a bottom dark gradient and a
  bottom box with the name (white 20px/600) and role (12px white) — Ryan
  Anderson/Civil Lawyer, Greg Washer, Tony Henderson, Jack Smith
- **AND** the card SHALL flip 180° on hover (0.6s, preserve-3d,
  backface-hidden)
- **AND** the gold back SHALL show a quote (16px `rgba(255,255,255,0.9)`)
  and an author row with a 40px round avatar, the white 600-weight name,
  and the 13px role

#### Scenario: Section heading

- **GIVEN** the attorneys section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL show the gold subheading "Our
  Attorney" and the h2 "Our Legal Attorneys"

### Requirement: Consultation form

The system SHALL render a photo-background consultation band with a gold
overlay on the right half, a white heading, and a transparent dark form.

#### Scenario: Form content

- **GIVEN** the consultation band is rendered
- **WHEN** the page loads
- **THEN** the right half SHALL carry a gold `#afa939` overlay at opacity
  .8 (full width on mobile)
- **AND** the subheading SHALL read "Booking an Appointment"
  (`rgba(255,255,255,0.5)`) and the h2 "Free Consultation" (white 40px)
- **AND** the form SHALL contain name, email, and subject inputs plus a
  message textarea (52px tall, radius 5px, transparent background, white
  text, 1px `rgba(255,255,255,0.3)` border)
- **AND** a dark "Send message" submit button SHALL render (bg `#343a40`,
  white text)
- **AND** the form SHALL validate required fields client-side without a
  backend

### Requirement: Testimonials

The system SHALL render a "Happy Clients" testimonial carousel.

#### Scenario: Testimonial slides

- **GIVEN** the testimonial section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL show the gold subheading "Testimonial"
  and the h2 "Happy Clients"
- **AND** at least three distinct testimonials SHALL render (paraphrased
  quotes; source repeats one quote/author), each with a quote, a round
  avatar, a name, and a position
- **AND** prev/next or dot controls SHALL navigate between slides

### Requirement: Recent Blog

The system SHALL render a "Recent Blog" section with three cards, each with
a title, photo, gold date badge, excerpt, and read-more link.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered on its `#f8f9fa` background
- **WHEN** the page loads
- **THEN** the centered heading SHALL show the gold subheading "Blog" and
  the h2 "Recent Blog"
- **AND** three cards SHALL render, each with a distinct paraphrased title
  (18px/500), a 270px photo (picsum seed), a gold date badge overlapping
  the photo (day, month, year, with the triangle tail), an excerpt, and a
  gold "Read more" button

### Requirement: Newsletter

The system SHALL render a gold newsletter strip with a white input and a
darker-gold subscribe button.

#### Scenario: Newsletter strip

- **GIVEN** the newsletter strip is rendered on its `#f8f9fa` background
- **WHEN** the page loads
- **THEN** a gold `#afa939` strip SHALL contain the heading "Subscribe to
  our Newsletter" (white 24px — fix the source's "Subcribe" typo)
- **AND** a white email input SHALL render (radius `5px 0 0 5px`) next to a
  "Subscribe" submit button with bg `#89842c` (radius `0 5px 5px 0`, white
  text)
- **AND** the form SHALL validate the email client-side

### Requirement: Footer

The system SHALL render a dark `#222831` footer with brand/social, Practice
Areas links, contact info, business hours, and a copyright bar crediting
Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer background SHALL be `#222831`
- **AND** the first column SHALL show the "Jurist" wordmark (34px, uppercase,
  weight 800, white) with the gold tagline "A Law Firm Agency", a short
  description, and three 50px circular social icons
  (`rgba(255,255,255,0.05)` bg)
- **AND** the second column SHALL list "Practice Areas": Family Law,
  Business Law, Insurance Law, Criminal Law, Drug Offenses, Fire Accident,
  Employment Law, Property Law — each with a gold arrow, white text, gold on
  hover
- **AND** the third column SHALL show "Have a Questions?" with address,
  phone, and email lines (paraphrased)
- **AND** the fourth column SHALL show "Business Hours" with gold "Opening
  Days:" / "Vacations:" subheadings and day spans
- **AND** the bottom bar SHALL show a copyright line crediting Component
  Dock (https://www.componentdock.com/) instead of ColorLib

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Jurist app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, Why Select Us, about with
  tabs, case studies, attorneys, consultation, testimonials, recent blog,
  newsletter, and footer in order
- **AND** the document title SHALL be "Jurist — Law Firm Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/jurist` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- jurist` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#afa939, #89842c, #222831, #3c312e, #343a40, #f8f9fa, #fff, #000, rgba(0,0,0,0.5), rgba(0,0,0,0.8), rgba(0,0,0,0.05), rgba(255,255,255,0.3), rgba(255,255,255,0.5), rgba(255,255,255,0.7), rgba(255,255,255,0.9), rgba(0,0,0,0.1), rgba(0,0,0,0.09), rgba(0,0,0,0.14), rgba(0,0,0,0.4)) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `jurist-<n>`, Google Fonts Poppins link, lucide icons only)
- [ ] Navbar: transparent over hero → fixed white on scroll; wordmark + gold tagline; 7 links (gold hover/active); gold "Free Consultation" CTA (radius 2px); black mobile menu
- [ ] Hero: full-height, photo + rgba(0,0,0,0.5) overlay, gold uppercase subheading, white 48px/700 headline + rotating gold word (Freedom/Rights/Case/Custody) with blinking gold cursor, 18px paragraph, gold "Get Legal Advice" (hover → outline)
- [ ] Why Select Us: left heading block + gold "Free Consultation" button; 140px gold strip behind 3 white cards (100px circle icon, 18px/600 titles, distinct blurbs); 50px gold circle arrow revealed on card hover
- [ ] About: photo + 80px pulsing gold play circle; gold subheading + h2 + paragraph; Our Mission/Our Vision/Our Value pill tabs (gold active fill, swappable panes); gold "40 Years of Experienced" badge
- [ ] Case studies: centered heading; 4 × 300px cards, hidden caption → gold rgba(0,0,0 overlay #afa939 opacity .5 inset 10px) + white title + category on hover; "See All Successful Cases" button
- [ ] Attorneys: 4 × 400px flip cards; front photo + gradient + name/role box; hover flips to gold back (quote + round avatar + name/role)
- [ ] Consultation: bg photo, gold overlay right half (opacity .8), "Booking an Appointment" + white "Free Consultation" 40px; 52px transparent inputs (white text, rgba(255,255,255,0.3) border, radius 5px); dark "Send message" submit; client-side validation
- [ ] Testimonials: "Happy Clients" carousel with ≥3 distinct quotes + avatar + name + position
- [ ] Blog (bg `#f8f9fa`): 3 cards, 270px photos, gold overlapping date badges with triangle tail, distinct titles, excerpts, gold "Read more"
- [ ] Newsletter (bg `#f8f9fa`): gold strip, white 24px "Subscribe to our Newsletter" (typo fixed), white input + `#89842c` "Subscribe" submit (split radii)
- [ ] Footer `#222831`: wordmark + gold tagline + 3 social circles; 8 Practice Areas links (gold arrows, gold hover); "Have a Questions?" contact lines; Business Hours with gold headings; copyright bar crediting Component Dock; no ColorLib references in app code
