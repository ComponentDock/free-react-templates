# Campus (ColorLib Academy) — Tasks & Design Notes

> Recreation of ColorLib "Academy" — free Bootstrap education website
> template (https://colorlib.com/wp/template/academy/) under the NEW name
> **Campus** (the grounds of a university — the online-university theme;
> single lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md — verified 2026-08-09; "schola" was
> already used by Academix), per the monorepo naming mandate (never reuse
> the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Academy" — free Bootstrap 4 education website
  template (page title: "Academy - Free Bootstrap 4 Education Template"),
  listed TWICE in TEMPLATES.md: **Bootstrap (216)** line 328 AND
  **Education (43)** line 1623 (same source URL — mark BOTH `[x]` when
  shipped). The recreation brands itself **Campus**.
- **Preview DOM analyzed (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/academy/` — HTTP 200, 33.9 KB HTML +
  `style.css` 37.7 KB (Bootstrap 4, owl.carousel, classy-nav, custom icon
  font, Montserrat via Google Fonts `@import`). Screenshot
  `academy-free-template.jpg` (1200×946, browser-verified) matches the live
  render 1:1.
- **⚠ KEY TRAP:** single-page landing only — nav links (About Us, Course,
  Blog, Contact, Elements) point to out-of-scope sibling pages; recreate as
  anchors/placeholders, never build the extra pages. Also: the courses grid
  section has NO section heading (starts straight into the 3×2 grid) and
  the hero h2 copy has a typo ("Wellcome") — fix deliberately or keep, but
  keep structure 1:1. No forms on this page (unlike the Booking/Regform
  family) — nothing to validate beyond the "Register / Login" link.
- **Visual design (screenshot + live render):** clean education aesthetic —
  white top strip (wordmark + graduation-cap icon, "Register / Login"),
  light-gray `#f5f7fa` menu bar with uppercase bold nav + a slanted
  bright-green phone banner (+65 456 332 5568 889), photo hero (smiling
  graduate) with white "All the courses you need" / "Wellcome to our
  Online University" and a green "Read More" button, green gradient
  3-feature band, 6 green-badge course cards, dark-overlay testimonials,
  gray popular-course cards with yellow stars, partner logos, green CTA
  band, charcoal footer.
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`header.header-area` 125px) — `.top-header` 95px flex
     space-between: logo (img/core-img/logo.png → styled text + lucide
     `GraduationCap`) left, `.login-content` "Register / Login" link right
     (weight 600, hover `#69bc5f`). `.academy-main-menu` absolute 85px at
     top:95px over the hero: `.classy-navbar` bg `#f5f7fa`, uppercase w700
     links (Home, Pages ▾, About Us, Course, Blog, Contact, Elements ▾);
     right `.calling-info .call-center` green gradient block (padding
     0 40px, line-height 85px): white phone icon in 45px white-ring circle
     - white bold "(+65) 456 332 5568 889" + rotated green `::before`
       parallelogram. Sticky: fixed top, `#f5f7fa`, shadow
       `0 5px 40px rgba(0,0,0,0.2)`, 25% `#83c331` band right.
  2. **Hero** (`section.hero-area`) — owl slider, 2 slides
     (bg-1.jpg/bg-2.jpg, height 850px, cover): centered h4 eyebrow "All the
     courses you need" (white) + h2 "Wellcome to our Online University"
     (white 60px) + `btn academy-btn` "Read More" (green gradient, SHARP
     corners). Arrows: 56px green squares at 5% sides, hover-reveal,
     `#141414` hover.
  3. **Top features** (`top-features-area`, mb -60) — green gradient band
     `translateY(-50%)` overlapping hero bottom, padding 40px 15px, 3 cols:
     white 40px icon + white h5 18px w600, 2px white right-border
     dividers: icon-agenda-1 "Online Courses" · icon-assistance "Amazing
     Teachers" · icon-telephone-3 "Great Support".
  4. **Courses grid** (`academy-courses-area section-padding-100-0`) — NO
     heading; 3×2 grid (`col-12 col-sm-6 col-lg-4`, mb-100): 91px circular
     green gradient `.course-icon` (white 40px icon) + h4 + p: Business
     School (icon-id-card) · Marketing (icon-worldwide) · Photography
     (icon-map) · Social Media (icon-like) · Development (icon-responsive)
     · Design (icon-message). Hover h4 → `#69bc5f`.
  5. **Testimonials** (`testimonials-area section-padding-100 bg-img
bg-overlay`, bg-2.jpg + `rgba(0,0,0,0.88)`) — heading
     `.section-heading.text-center.mx-auto.white` h3 "See what our
     satisfied customers are saying about us"; 2×2 grid (`col-12
col-md-6`) of 4 `.single-testimonial-area`: 55px round avatar
     (border 2px transparent → `#69bc5f` hover; t1–t4.jpg) + h5 quote
     (white w500) + p (white) + h6 name (white 15px) + green span role:
     Maria Smith, Student · Shawn Gaines, Student · Ross Cooper, Student ·
     James Williams, Student.
  6. **Popular courses** (`top-popular-courses-area section-padding-100-70`)
     — heading: span eyebrow "The Best" (12px uppercase `#606060` ls 2px) +
     h3 "Top Popular Courses" (34px w600); 2×2 grid (`col-12 col-lg-6`) of
     4 `.single-top-popular-course` (bg `#eef3f6`, mb-30): thumb 46% / 350px
     (pc-1..4.jpg) + content 54% / padding 30px: h5 18px w500 + span "By
     Simon Smith · March 18, 2018" (12px `#61ba6d`) + 5 stars (10px
     `#fbb710`, empty `#e0e3e4`) + p + "See More". Titles: Business for
     begginers · Advanced HTML5 · Marketing 101 · Business for begginers.
  7. **Partners** (`partner-area section-padding-0-100`) — 5 logo links
     (max-w 130px; partner-1..5.png).
  8. **Call to action** (`call-to-action-area`) — green gradient band,
     padding 70px 0: h3 "Do you want to enrole at our Academy? Get in
     touch!" + `btn academy-btn` "See More".
  9. **Footer** (`footer.footer-area`) — `.main-footer-area` `#232323`,
     4 widgets (`col-12 col-sm-6 col-lg-3`, `.footer-widget` mb-100):
     (a) About: logo (logo2.png → styled text) + blurb + `.footer-social-
info` (`#606060` → white); (b) "Usefull Links": Home · Services &
     Features · Accordions and tabs · Menu ideas · Gallery · Contact
     (`#606060` → `#69bc5f`); (c) "Gallery": 6 images 30% grid + green
     `rgba(97,186,109,0.8)` hover overlay; (d) "Contact": 3 rows
     (icon-placeholder "4127/ 5B-C Mislane Road, Gibraltar, UK" ·
     icon-telephone-1 "Main: 203-808-8613 / Office: 203-808-8648" ·
     icon-contract "office@yourbusiness.com") — icons `#69bc5f` 20px.
     `.bottom-footer-area` `#141414` padding 30px, 12px centered: "Copyright
     © All rights reserved | This template is made with by Colorlib" →
     reword the credit (Component Dock), keep © line.
- **Icon font mapping (source custom-icon font → lucide-react):**
  icon-agenda-1 → `ClipboardList`/`BookOpen` · icon-assistance → `Users` ·
  icon-telephone-3 → `Headset`/`PhoneCall` · icon-id-card → `IdCard` ·
  icon-worldwide → `Globe` · icon-map → `MapPin` · icon-like → `ThumbsUp` ·
  icon-responsive → `MonitorSmartphone` · icon-message → `MessageSquare` ·
  icon-placeholder → `MapPin` · icon-telephone-1 → `Phone` · icon-contract
  → `Mail`.
- **Neighbor check (2026-08-09):** sibling education prep: Schola
  (Academix, already shipped — dark hero, different palette). Nothing in
  the repo uses the green `#61ba6d→#83c331` gradient + `#f5f7fa` menu +
  `#eef3f6` cards combo; keep Campus exact.

## Tasks (implementation order)

- [ ] Scaffold `apps/campus` (copy simplest existing app, rename package to
      `@free-react-templates/campus`; NOT `apps/academy`); `npm install`
      at root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-brand: #61ba6d`, `--color-brand-2:
    #83c331`, `--color-accent: #69bc5f`, `--color-menu: #f5f7fa`,
      `--color-card: #eef3f6`, `--color-star: #fbb710`, `--color-star-empty:
    #e0e3e4`, `--color-muted: #606060`, `--color-footer: #232323`,
      `--color-footer-dark: #141414`, `--color-heading: #242424`
- [ ] `index.html`: Montserrat 300–900 Google Fonts `<link>`, title
      "Campus — Online University Template"
- [ ] Header: top strip 95px (wordmark + lucide `GraduationCap` + "Register
      / Login" right) + menu bar 85px absolute over hero (`#f5f7fa`,
      uppercase w700 links, green phone block with white-ring phone icon +
      "(+65) 456 332 5568 889"); sticky variant (fixed top, shadow, 25%
      `#83c331` right band)
- [ ] Hero: slider with 2 slides (picsum bg `campus-1`, `campus-2`,
      1920×850 cover), centered white h4 eyebrow + h2 (60px desktop → 30px
      mobile) + "Read More" green square button; hover-reveal prev/next
      arrows (desktop)
- [ ] Feature band: green gradient, `-translate-y-1/2` overlap, 3 features
      (white icons + h5, white dividers; horizontal dividers on mobile)
- [ ] Courses grid: 3×2 (1-col mobile), 6 cards — 91px circular green
      gradient icon badge + h4 + p (titles per section order); h4 → accent
      on hover
- [ ] Testimonials: bg photo + `rgba(0,0,0,0.88)` overlay, white heading,
      2×2 grid of 4 items (round 55px avatar + quote h5 + p + name h6 +
      green role span); avatar ring → `#69bc5f` hover
- [ ] Popular courses: eyebrow "The Best" + h3; 2×2 cards (thumb 46% +
      content 54%, stack mobile): title + "By Simon Smith · March 18, 2018" + 5 stars (`#fbb710`/`#e0e3e4`) + p + "See More"
- [ ] Partners: 5 placeholder logos in a row (max-w 130px, shrink mobile)
- [ ] CTA: green gradient band, h3 + "See More" button
- [ ] Footer: 4 widgets (`#232323`) — About (logo, blurb, socials) ·
      Usefull Links · Gallery (6 imgs, green overlay hover) · Contact (3
      rows, green icons) — + bottom bar (`#141414`, © line, reworded
      credit); 4→2→1 columns responsive
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh campus` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs (placeholder
      images, reworded footer credit, optional typo fix); merge
      immediately; mark BOTH TEMPLATES.md "Academy" rows `[x]` (Bootstrap +
      Education) + surge URL + `npm run readme:status`
