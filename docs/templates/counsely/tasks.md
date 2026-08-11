# Counsely (ColorLib Legalcare) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-counsely`.

## Source mapping

- **ColorLib item:** "Legalcare" (TEMPLATES.md — appears 2×: lines 437, 2128;
  both rows point to the same source, one prep covers all; verified with
  `grep -c 'wp/template/legalcare/'` = 2).
- **Source URL:** https://colorlib.com/wp/template/legalcare/
- **Preview URL:** https://preview.colorlib.com/theme/legalcare/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~38 KB HTML, `<title>Legalcare - Free
Bootstrap 4 Template by Colorlib</title>`). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/legalcare/css/style.css
  (~81 KB) — also imports open-iconic, animate, owl.carousel (+ theme),
  magnific-popup, aos, ionicons, flaticon, icomoon. Site is jQuery +
  Bootstrap 4 + owl-carousel + aos + stellar (parallax) + typed text
  rotation — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`legalcare-free-template.jpg`, 1200×946)

Matches the live template: dark navbar with "LEGALCARE" text brand and a
gold "Free Consultation" pill on the right; full-height hero photo of a man
in a dark suit (warm blurred office bokeh) with dark overlay, gold uppercase
"WELCOME TO LEGALCARE" subheading, big white headline ending in a gold
"Freedom.", paragraph, gold "Get Legal Advice →" button; below, the white
"Why Select Us?" section with gold "SERVICES" eyebrow and 3 cards with
circular icons (scales / briefcase / gavel). The live preview DOM + parsed
stylesheet are the authoritative reference; the screenshot confirms the same
design. (The screenshot reads "serif" at 1200px but the stylesheet is Poppins
everywhere — trust the CSS.)

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Navbar** `nav.navbar.px-md-0.navbar-expand-lg.navbar-dark.ftco_navbar
.bg-dark.ftco-navbar-light` (id `ftco-navbar`; transparent over hero →
   `.scrolled`: fixed, top 0, bg #fff, shadow `0 0 10px rgba(0,0,0,0.1)`,
   links → #000):
   - Brand: "Legalcare" + `<span>A Law Firm Agency</span>` (→ text brand
     "COUNSELY" + tagline).
   - Toggler: `<span class="oi oi-menu">` + "Menu" text (mobile collapse
     `#ftco-nav`).
   - `ul.navbar-nav.ml-auto`: Home (`li.active`), About, Attorneys, Practice
     Areas, Case Studies, Blog, Contact — `a.nav-link` 15px Poppins, padding
     .9rem 20px, #fff, hover/active `#afa939`.
   - `li.nav-item.cta > a.nav-link` "Free Consultation" — #fff, border 1px
     `#afa939`, padding .5rem 18px; hover bg `#afa939`; `.scrolled`
     variant filled gold.
2. **Hero** `div.hero-wrap.js-fullheight` (bg `images/bg_1.jpg` cover top
   center; stellar parallax ratio 0.5 → static cover; 100vh) >
   `div.overlay` (inset 0, #000, opacity .5) > container > `row.no-gutters
.slider-text.js-fullheight.align-items-center.justify-content-start` >
   `col-md-6`:
   - `h2.subheading` "Welcome To Legalcare" — 15px uppercase 800 `#afa939`.
   - `h1` "Attorneys Fighting For Your " + `span.txt-rotate`
     (data-rotate ['Freedom.','Rights.','Case.','Custody.'], period 2000)
     — Poppins 48px 700 #fff lh 1.5; rotating span `#afa939` (typed cursor).
   - `p.mb-4` ipsum.
   - `a.btn.btn-primary.mr-md-4.py-2.px-4` "Get Legal Advice" +
     `span.ion-ios-arrow-forward` — gold bg, 5px radius; hover transparent +
     gold text.
3. **Why Select Us** `section.ftco-section.ftco-no-pt`:
   - `col-lg-3.py-5` > heading-section: subheading "Services" + h2 30px 700
     "Why Select Us?" + ipsum + `a.btn.btn-primary.py-3.px-4` "Free
     Consultation".
   - `col-lg-9.services-wrap.px-4.pt-5` > 3 × `col-md-4` > `div.services`:
     `div.icon` 100px circle bg `rgba(0,0,0,0.05)` > `span.flaticon-lawyer`
     30px gold (source repeats same icon ×3; screenshot shows
     scales/briefcase/gavel → lucide Scale / Briefcase / Gavel) +
     `h3` Fight for Justice / Best Case Strategy / Experienced Attorney +
     `p` (identical ipsum → vary) + `a.btn-custom` 50px gold circle arrow,
     absolute bottom -35px centered (hover reveal).
4. **Justice / Mission** `section.ftco-section.ftco-no-pt.ftco-no-pb` 2-col:
   - Left `col-md-6`: bg image `images/about.jpg` (cover, center) +
     `a.icon-video.popup-vimeo` — 80px gold circle, white play icon, CSS
     pulse; vimeo modal → decorative button (no modal).
   - Right `col-md-6.pl-md-5`: subheading "Welcome to Legalcare" + h2 "We
     Always Fight For Your Justice to Win" + ipsum + `div.tabulation-2.mt-4`:
     `ul.nav.nav-pills.nav-fill` — 3 pills (Our Mission active / Our Vision /
     Our Value): white bg, radius 4px, #000 600, border 1px
     `rgba(0,0,0,0.1)`; active gold bg white text; `div.tab-content.bg-light
.rounded.mt-2` > 3 panes (first active, distinct ipsums).
     `div.years.d-flex.mt-4.mt-md-5` > `h4` (padding 20px, bg gold):
     `span.number[data-number=40]` 0→40 animated + "Years of Experienced".
5. **Case studies** `section.ftco-section`: center heading-section
   (subheading "Explore Case Studies" + h2 "1000+ Completed Cases
   Successfully") > `div.carousel-case.owl-carousel` — 4 × `div.case.img`
   (bg `images/case-1..4.jpg`; `:after` gold overlay opacity 0→1 hover) >
   `div.text.text-center` (opacity 0→1 hover): h3 "Legal Seperation" [sic]
   - span "Corporate". Below: `a.btn.btn-primary.px-5` "See All Successful
     Cases" (centered, mt-4). Carousel → client-side state.
6. **Attorneys** `section.ftco-section.ftco-no-pt` `container-fluid.px-md-5`:
   center heading (subheading "Our Attorney" + h2 "Our Legal Attorneys") >
   4 × `col-lg-3.col-sm-6` > `div.block-2` flip (front/back 400px):
   - Front: bg `images/person_1..4.jpg`, `div.box` (absolute bottom 20px
     left/right 20px): h2 white name + p role ("Civil Lawyer" → vary).
   - Back: bg `#afa939`, shadow `0 0 70px -10px rgba(0,0,0,0.4)`:
     blockquote ipsum + author row (thumb, name, position) + socials
     (verify exact social markup against preview at impl time).
7. **Free Consultation** `section.ftco-consultation...img` (bg
   `images/bg_2.jpg` cover) > `div.overlay` (#afa939, opacity .8) >
   container > `row.d-md-flex.justify-content-end` > `col-md-6.half
.p-3.py-5.pl-md-5.heading-section-white`:
   - subheading "Booking an Appointment" (gold, stays gold on white variant)
     - h2 "Free Consultation" (white).
   - `form.consultation`: 4 × form-group — inputs "Your Name" / "Your Email"
     / "Subject" + textarea (7 rows) "Message": height 52px, transparent bg,
     border 1px `rgba(255,255,255,0.3)`, #fff text, 16px, radius 5px; submit
     `input.btn.btn-dark.py-3.px-4[value="Send message"]`.
8. **Testimonials** `section.ftco-section.testimony-section`: center heading
   (subheading "Testimonial" + h2 "Happy Clients") > `div.carousel-testimony
.owl-carousel` — 3 × `div.item` > `div.testimony-wrap.py-4` (bg
   `rgba(255,255,255,0.1)`, border 1px `rgba(0,0,0,0.02)`, shadow
   `0 5px 21px -14px rgba(0,0,0,0.14)`, padding 0 20px): quote + author row
   (`div.user-img` round photo `images/person_1..3.jpg` + `p.name` +
   `span.position` gold). Client-side carousel.
9. **Recent Blog** `section.ftco-section.bg-light`: center heading
   (subheading "Blog" + h2 "Recent Blog") > 3 × `col-md-4` > `div.blog-entry`:
   `a.block-20` (bg `images/image_1..3.jpg`, height 270px) + `div.text.p-4`:
   `div.topper` (bg gold, white, absolute left 20px, margin-top -61px,
   arrow tail via `:after` border) — `span.day` "18" + `span.yr` "2019" +
   `span.mos` "October" (vary); `h3.heading` 18px 500 > a (source repeats
   "All you want to know about industrial laws" ×3 → vary 3 titles) + p
   ipsum + `a.btn.btn-primary` "Read more".
10. **Newsletter** `section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light` >
    `div.ftco-animate.py-4.px-md-4.bg-primary` (gold band) 2-col:
    - Left: `h2.mb-0` white 24px "Subcribe to our Newsletter" [sic — fix
      spelling in recreation].
    - Right: `form.subscribe-form` > `div.form-group.d-flex`: input
      (placeholder "Enter email address"; white bg, 16px, radius 5px 0 0 5px)
      - `input[type=submit][value=Subscribe].submit.px-3` (bg `#89842c`,
        white, radius 0 5px 5px 0).
11. **Footer** `footer.ftco-footer.ftco-bg-dark.ftco-section` (bg `#222831`,
    padding 5em 0 3em) 4 × `col-md`:
    - About: h2.logo > a "Legalcare" + span gold tagline + ipsum +
      `ul.ftco-footer-social` 3 × 50px circles bg `rgba(255,255,255,0.05)` —
      Twitter / Facebook / Instagram (inline SVG brands; lucide has none).
    - Practice Areas: h2.ftco-heading-2 + 8 × `li > a.py-1.d-block` (arrow
      icon `ion-ios-arrow-forward` + label): Family Law, Business Law,
      Insurance Law, Criminal Law, Drug Offenses, Fire Accident, Employment
      Law, Property Law; white, hover gold.
    - Have a Questions?: block-23 — MapPin + "203 Fake St. Mountain View,
      San Francisco, California, USA"; Phone + "+2 392 3929 210"; Mail +
      "info@yourdomain.com".
    - Business Hours: opening-hours gold 16px — h4 "Opening Days:" (Monday –
      Friday : 9am to 20 pm · Saturday : 9am to 17 pm), h4 "Vacations:" (All
      Sunday Days · All Official Holidays).
    - Copyright bar (col-md-12 text-center): © line (recreate as "© 2026
      Counsely — Law Firm Agency · All rights reserved").

## Design tokens (see spec for full table)

- brand-gold `#afa939` (buttons, subheadings, hovers, overlays, chips,
  topper, newsletter band), gold-dark `#89842c` (subscribe btn), ink `#000`,
  footer-bg `#222831`, hero overlay `rgba(0,0,0,0.5)`, consultation overlay
  `#afa939` opacity .8, services icon circle `rgba(0,0,0,0.05)`.
- Font: Poppins only (h1 48/700, h2 30/700, subheading 15/800 uppercase,
  nav 15/400, btn 16/500).
- Radii: 5px buttons/inputs, 4px tab pills, 50% circles everywhere else.
- Sections 7em padding; hero 100vh; blog img 270px; consultation inputs 52px.

## Implementation tasks (todo outline)

1. Scaffold: copy simplest existing app → `apps/counsely`, package
   `@free-react-templates/counsely`; register workspace in package.json
   (`bun add` — firebase repo is bun-managed; main repo lockfile: use
   `npm install --workspace` per existing convention / sibling apps).
2. index.html: title "Counsely — Law Firm Agency", Poppins Google Fonts
   `<link>`.
3. `src/theme.css` / `@theme`: brand-gold `#afa939`, gold-dark `#89842c`,
   ink, footer-bg `#222831`, fonts.
4. Data module `src/data.ts`: nav links, rotating words, services, tabs,
   case cards, attorneys, testimonials, blog posts, footer links, contact
   (phone as spaced string `"+2 392 3929 210"` — NO literal tel: URI).
5. Components (tests first, per section):
   - `Header.tsx` — brand + nav + CTA pill + mobile menu + scrolled state.
   - `Hero.tsx` — bg + overlay + subheading + rotating word (setInterval) +
     CTA.
   - `Services.tsx` — split layout + 3 cards + hover circle button.
   - `Justice.tsx` — photo + play circle + tabs (state) + years counter
     (animated).
   - `CaseStudies.tsx` — carousel (state) + hover overlay + CTA.
   - `Attorneys.tsx` — flip cards (CSS 3D).
   - `Consultation.tsx` — gold overlay + form (labels/placeholders).
   - `Testimonials.tsx` — carousel (state).
   - `Blog.tsx` — 3 entries with date topper.
   - `Newsletter.tsx` — gold band + subscribe form (submit → success state;
     assert input unmounts via `queryByLabelText` absence).
   - `Footer.tsx` — 4 columns + copyright bar + inline SVG socials.
6. `App.tsx` composition in DOM order; `src/main.tsx` unchanged pattern.
7. Tests: 100% coverage; use `getAllByRole` for duplicate nav links
   (desktop + mobile), `/^Brand$/` anchoring if brand text repeats.
8. Verify: `npm run verify:app -- @free-react-templates/counsely` (or
   `scripts/verify-app.sh counsely`), then push branch, open PR, squash
   merge immediately, confirm deploy workflow + surge URL 200.

## Fidelity notes / gotchas

- **tel: redaction trap:** the toolchain rewrites literal `tel:+23923929210`
  in written files. Store `"+2 392 3929 210"` in data.ts and compute
  `href={'tel:' + phone.replace(/[^\d+]/g, '')}` in the component; assert
  the href in a test; diff merged blob vs worktree after merge.
- The hero's rotating word span renders gold with a typed-cursor — pure
  client-side interval, no typed.js dependency.
- owl-carousel → client-side carousels with prev/next + dots.
- Parallax (stellar, ratio 0.5) → static cover backgrounds.
- Vimeo popup (icon-video) → decorative play button with CSS pulse.
- Source typos: "Legal Seperation" (case cards), "Subcribe" (newsletter) —
  fix in recreation.
- lucide-react has NO brand icons — inline SVG for Twitter/Facebook/
  Instagram.
- Icons in services cards: source repeats `flaticon-lawyer` ×3; screenshot
  shows scales/briefcase/gavel — use lucide Scale / Briefcase / Gavel.
- Placeholder images via `https://picsum.photos/seed/counsely-<n>/<w>/<h>`
  (deterministic per template).
