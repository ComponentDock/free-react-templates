# Enamel (ColorLib Dentista) — Tasks & Design Notes

> Recreation of ColorLib "Dentista"
> (https://colorlib.com/wp/template/dentista/) under the NEW name
> **Enamel** (the hard outer layer of a tooth — a dental-brand word;
> single lowercase word, no collision with `apps/` or `openspec/specs/`
> — verified 2026-08-10), per the monorepo naming mandate (never reuse
> the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Dentista" — free Dentist / Medical website
  template (page title "Denstista - Free Bootstrap 4 Template by
  Colorlib" — source typo). TEMPLATES.md has THREE dup rows for the same
  source: line 374 under **Bootstrap (216)**, line 971 under **Business
  (365)** and line 1509 under **Dentist (14)** — same source, ONE item;
  mark ALL THREE `[x]` at ship time. The recreation brands itself
  **Enamel**.
- **Preview URL (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/dentista/` returns HTTP 200 (45.6
  KB HTML). Bootstrap 4 + jQuery + owl.carousel + aos + stellar
  (parallax) + bootstrap-datepicker + jquery.timepicker + magnific popup
  - icomoon/flaticon/ionicons icon fonts. The TEMPLATES.md screenshot
    (`dentista-free-template.jpg`, 1200×946, AVIF, viewed in a browser)
    matches the live render.
- **Visual design (screenshot + live render):** clean, bright, clinical
  aesthetic on WHITE. Top info bar (Free Call + address left, logo
  centered, Open Hours right); black uppercase nav with blue active link;
  600px hero photo of a smiling patient in a dental chair with black
  headline + LIME "View our works" button; Welcome split (photo +
  "WELCOME TO DENTISTA" subheading); sky-blue consultation band, blue
  footer, blue pricing prices and blog date boxes; lime accents on
  secondary buttons, doctor socials, pricing hover, subscribe submit.
  Poppins sans-serif, black text on white. TWO accents: primary sky blue
  **#46b7de**, secondary lime green **#a8c337**.
- **Structure (1:1, verified live):**
  1. TOP BAR `div.py-md-5.py-4.border-bottom` — 3 cols: left topper
     (50×50 white circular icon-map + "Free Call" +1 234 456 78910 +
     "198 West 21th Street, Suite 721 New York NY 10016"), center
     `a.navbar-brand` "Dentista" + span tagline "Dental Clinic", right
     topper (icon-paper-plane + "Open Hours" / "Mon - Sat: 8:00am -
     9:00pm" / "Sun: Closed").
  2. NAVBAR `nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.
ftco-navbar-light` — transparent over slider (z-3); mobile hamburger
     "Menu" (mobile bg #000, links rgba(255,255,255,0.7)); `ul.navbar-
nav.m-auto`: Home (active) / About / Doctor / Treatments / Pricing /
     Blog / Contact — 15px black UPPERCASE ls 1px, padding 2rem top/bottom
     20px sides; ACTIVE link `#46b7de`.
  3. HERO SLIDER `section.home-slider.owl-carousel` (600px; 2
     `div.slider-item`, inline bg `images/bg_1.jpg` + `bg_2.jpg`, BRIGHT
     photos, overlay `opacity: 0`): `.subheading` 18px
     `rgba(0,0,0,0.8)` + `h1` 50px #000 w300 (two `<span>` block lines) +
     `a.btn.btn-secondary.px-4.py-3.mt-3` "View our works" (lime).
     Slide 1: "Helping Your / Stay Happy One" / "Everyday We Bring Hope
     and Smile to the Patient We Serve". Slide 2: "Smile Makes / A
     Lasting Impression" / "Your Health is Our Top Priority with
     Comprehensive, Affordable medical."
  4. WELCOME `section.ftco-section.ftco-no-pt.ftco-no-pb` — col-md-5
     img (about.jpg) + col-md-7 wrap-about: `span.subheading` "Welcome
     to Dentista" + h2 32px "Medical specialty concerned with the care
     of acutely ill hospitalized patients" + 2 paragraphs + founder
     (circular doc-1.jpg + "Dr. Paul Foster" h3 + "CEO, Founder").
  5. CONSULTATION BAND (container-fluid px-md-0, row no-gutters, 3
     equal cols): LEFT col-md-3 `.consultation` (bg `#46b7de`, pad 4em
     0, text rgba(255,255,255,0.9)): h3 "Dental Services" (20px white
     w500) + p + `a.btn-custom` "See Services" (white 12px uppercase
     w600); CENTER col-md-6 `.consultation.consul` (bg `#24a1cd`): h3
     "Free Consultation" + appointment form (First Name, Last Name,
     Department select: Neurology/Cardiology/Dental/Ophthalmology/Other
     Services, Date, Time, submit "Appointment" btn-secondary lime);
     RIGHT col-md-3 `.consultation`: h3 "Find A Doctor" + p + btn-custom
     "Mee our doctor" (typo → "Meet our doctor").
  6. SERVICES `section.ftco-section.ftco-services` — heading block
     (col-md-8 text-center): subheading "Services" + h2 "Our Clinic
     Services" (34px w400) + intro p; 8 × col-md-3 cards (media block-6
     text-center): flaticon icons (drilling, tooth, dental-floss,
     shiny-tooth, dentist-chair, tooth-1, tooth-with-braces,
     decayed-tooth) + h3 + p. Titles: Dental Implants, Cosmetic
     Dentistry, Dental Care, Teeth Whitening, Dental Calculus,
     Periondontics (→ Periodontics), Clip & Braces, Root Canel (→ Root
     Canal). QUIRK: 8 identical blurbs → DISTINCT.
  7. QUOTE INTRO `section.ftco-section.intro` (bg_3.jpg parallax):
     col-md-6 h3 "We promised to take care our patients and we
     delivered." + p.
  8. DOCTORS `section.ftco-section` — heading "Doctors" / "Our
     Qualified Doctors" + p; 4 × col-lg-3 `.staff`: img (doc-1..4) +
     text pt-3: h3 name + span.position + p blurb + `ul.ftco-social`
     (3 × 30×30 WHITE circles, icon `#a8c337`; hidden, slide up +
     opacity on card hover). Dr. Lloyd Wilson (Denstist → Dentist),
     Dr. Rachel Parker, Dr. Ian Smith, Dr. Alicia Henderson (all
     Dentist). QUIRK: 4 identical blurbs → keep or vary.
  9. TESTIMONIALS `section.ftco-section.testimony-section.bg-light` —
     heading "Testimonials" / "Our Patients Says About Us" + p;
     owl-carousel of 4 × `.testimony-wrap.d-flex`: circular user-img
     (person_1..4) + text pl-4 bg-light: circular quote badge + p quote
     - p.name + span.position; owl prev/next arrows below. Racky
       Henderson (Farmer), Henry Dee (Businessman), Mark Huff (Students),
       Rodel Golez (Striper). QUIRK: 4 identical quotes → DISTINCT.
  10. CTA BAND `section.ftco-intro` (bg_3.jpg parallax + div.overlay
      dark scrim, pad 4em 0, text rgba(255,255,255,0.8)): col-md-9: h2
      36px white "We Provide Free Dental Care Consultation" + p "Your
      Health is Our Top Priority with Comprehensive, Affordable
      medical."; col-md-3: `a.btn.btn-secondary.px-4.py-3` "Free
      Consutation" (typo → "Free Consultation").
  11. PRICING `section.ftco-section` — heading "Pricing" / "Our
      Pricing" + p; 4 × col-md-3 `.pricing-entry.pb-5.text-center`
      (border `#c8eaf5`, > div padding 20px): h3 plan (16px w400) +
      span.price (28px w300 `#46b7de`) + span.per "/ session" (12px);
      ul 5 li (odd bg `#fafafa`): Diagnostic Services, Professional
      Consultation, Tooth Implants, Surgical Extractions, Teeth
      Whitening; p.button (absolute bottom -26px): a.btn.btn-primary
      "Get Offer" (pill radius 30px). HOVER: button + price → lime
      `#a8c337`. Plans: Basic $24.50 / Standard $34.50 / Premium $54.50
      / Platinum $89.50.
  12. BLOG `section.ftco-section.bg-light` — heading "Blog" / "Recent
      Blog" + p; 3 × col-md-4 `.blog-entry`: a.block-20 (bg
      image_1..3.jpg) + `.meta-date` (bg `#46b7de`, day 30px w300 white
      "18" / mos "September" / yr "2019" 13px) + `.text.bg-white.p-4`:
      h3.heading title + p excerpt + meta row (a.btn.btn-primary "Read
      More" + "Admin 3" + comment icon). QUIRK: 3 identical posts →
      DISTINCT titles/excerpts.
  13. FOOTER `footer.ftco-footer.ftco-bg-dark.ftco-section` (bg
      `#46b7de`, pad 6em 0, 14px, links rgba(255,255,255,0.7) hover
      white; widget h2 20px white w400 mb-40px) — 4 × col-md:
      - COL 1: logo "Dentista" + about p + h2 "Have a Questions?" +
        address "203 Fake St. Mountain View, San Francisco, California,
        USA" / phone "+2 392 3929 210" / email "info@yourdomain.com".
      - COL 2: h2 "Links" (Home, About, Services, Deparments →
        Departments, Contact) + h2 "Services" (Neurolgy → Neurology,
        Dentist, Ophthalmology, Cardiology, Surgery).
      - COL 3: h2 "Recent Blog" — 2 mini entries ("Even the
        all-powerful Pointing has no control about" / "Sept. 20, 2019"
        / "Admin 19").
      - COL 4: h2 "Opening Hours" ("We are open 24/7") + h2 "Subscribe
        Us!" — input bg rgba(255,255,255,0.1) radius 2px + submit bg
        `#a8c337` radius 2px.
      - Bottom bar col-md-12 text-center: "Copyright © <year> All
        rights reserved | This template is made with ♥ by Colorlib".
- **Design tokens extracted from the live CSS (`css/style.css` +
  `css/bootstrap.min.css`, verified 2026-08-10):**
  - Primary sky blue **#46b7de** — `.btn.btn-primary` bg (white text,
    hover = TRANSPARENT bg + blue text), `.consultation` band bg,
    `.ftco-footer` bg, `.pricing-entry .price` (28px), active nav link,
    `.blog-entry .meta-date` bg, `.topper .icon span`.
  - Darker blue **#24a1cd** — `.consultation.consul` (middle band) bg,
    `.btn-custom` text; light blue **#57bee1** — `.btn-custom` 4px
    bottom border.
  - Secondary lime **#a8c337** — `.btn.btn-secondary` bg ("View our
    works", "Free Consultation", "Appointment"), `.staff .ftco-social`
    icon color, `.pricing-entry:hover` button + price, footer subscribe
    submit bg.
  - Pricing border **#c8eaf5**; zebra rows **#fafafa**.
  - Text: black #000 (headings/nav/slider h1), `rgba(0,0,0,0.8)`
    (slider subheading), #6c757d (generic secondary), footer
    rgba(255,255,255,0.7).
  - Font: **Poppins** (Google Font) — body + headings (h1 50px w300,
    section h2 34px w400, subheading 16px uppercase ls 2px).
  - Buttons: primary radius .25rem, hover transparent-bg; secondary
    lime; pricing Get Offer pill radius 30px at bottom -26px; btn-custom
    = text link #24a1cd + 4px #57bee1 underline (white in blue band).
  - Rhythm: sections 7em 0; slider 600px; top bar py-md-5 py-4 +
    border-bottom; consultation 4em; footer 6em; grids 4-up (services/
    doctors/pricing col-md-3, blog col-md-4, footer col-md auto).
- **Recreation approach:** Tailwind grid (NO Bootstrap); slider +
  testimonials = small stateful carousels (useState index, prev/next
  arrows — no owl.carousel); parallax → `bg-fixed` or plain bg
  (decorative, may omit); date/time inputs plain text inputs;
  icomoon/flaticon/ionicons → lucide-react (MapPin, Phone, Clock,
  Send, Menu, X, ChevronDown, Calendar, Quote, Stethoscope, Smile) +
  inline SVG for socials and the tooth logo mark; photos → seeded
  picsum (`picsum.photos/seed/enamel-<n>/<w>/<h>`); Poppins via Google
  Fonts; brand "Dentista" → "Enamel" (tagline "Dental Clinic" kept);
  document title "Enamel — Dental Clinic Template"; nav links `#`
  anchors; FIX source typos ("Mee our doctor", "Free Consutation",
  "Periondontics", "Root Canel", "Denstist", "Deparments", "Neurolgy")
  and source repetitions (8 service blurbs, 4 testimonial quotes, 3
  blog posts → DISTINCT).
- Accessibility: `aria-label` on icon buttons (hamburger, socials,
  carousel arrows, quote badge), labels/placeholders on the appointment
  - subscribe inputs, semantic `<main>` landmark, `alt` text on photos.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/enamel`
      (package `@free-react-templates/enamel`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: top bar → navbar → hero slider (2 slides) →
      Welcome → consultation band → Services (8) → quote intro →
      Doctors (4) → Testimonials (4) → CTA band → Pricing (4) → Blog
      (3) → footer (4 cols + copyright).
- [ ] Tokens in `@theme`: `--color-brand #46b7de`, `--color-brand-dark
    #24a1cd`, `--color-brand-light #57bee1`, `--color-accent #a8c337`,
      `--color-pricing-border #c8eaf5`, `--color-zebra #fafafa`,
      `--color-ink #000000`, `--color-subheading rgba(0,0,0,0.8)`,
      `--color-footer-text rgba(255,255,255,0.7)`; font `--font-body
    Poppins`.
- [ ] Top bar: 3 cols (Free Call + address | logo "Enamel" + "Dental
      Clinic" | Open Hours Mon-Sat 8am-9pm, Sun Closed), circular icons.
- [ ] Navbar: transparent over slider; Home (active, blue) / About /
      Doctor / Treatments / Pricing / Blog / Contact, black uppercase
      15px ls 1px; mobile: black bg, hamburger "Menu" → collapse links
      white 70%.
- [ ] Slider: 600px, 2 bright-photo slides, h1 50px w300 black
      (2-line), subheading 18px, lime "View our works" (px-4 py-3),
      prev/next or dots control.
- [ ] Welcome: photo + subheading "Welcome to Enamel" + 32px headline +
      2 paragraphs + founder "Dr. Paul Foster" / "CEO, Founder".
- [ ] Consultation band: `#46b7de` (center `#24a1cd`); "Dental
      Services" + "See Services"; "Free Consultation" form (First/Last
      Name, Department select 5 options, Date, Time, lime "Appointment");
      "Find A Doctor" + "Meet our doctor".
- [ ] Services: 8 cards (4-col): Dental Implants, Cosmetic Dentistry,
      Dental Care, Teeth Whitening, Dental Calculus, Periodontics, Clip
      & Braces, Root Canal — DISTINCT blurbs.
- [ ] Quote intro: photo band + "We promised to take care our patients
      and we delivered." + p.
- [ ] Doctors: 4 cards (Dr. Lloyd Wilson, Dr. Rachel Parker, Dr. Ian
      Smith, Dr. Alicia Henderson — all Dentist); hover-reveal social
      circles (white bg, lime icons).
- [ ] Testimonials: bg-light, 4 horizontal cards (circular photo +
      quote + name + role), DISTINCT quotes.
- [ ] CTA band: photo + overlay; "We Provide Free Dental Care
      Consultation" + sub-line + lime "Free Consultation" button.
- [ ] Pricing: 4 cards, border `#c8eaf5`, zebra rows, price 28px blue +
      "/ session", pill Get Offer (radius 30px, bottom -26px), hover →
      lime.
- [ ] Blog: bg-light, 3 cards (blue meta-date box + white box: title +
      excerpt + Read More + Admin meta), DISTINCT titles/excerpts.
- [ ] Footer: bg `#46b7de`, 4 cols (About + Have a Questions?, Links +
      Services, Recent Blog, Opening Hours + Subscribe Us!) + copyright
      "made with ♥ by Enamel".
- [ ] Primary buttons radius .25rem, white on blue, hover transparent
      bg + blue text; secondary lime; pill only for Get Offer.
- [ ] Poppins (300/400/500/600) via Google Fonts link in index.html;
      document title "Enamel — Dental Clinic Template"; `<main>`
      landmark.
- [ ] Photos: seeded picsum `enamel-<n>/<w>/<h>` (slider 1-2, about 1,
      founder 1, doctors 1-4, testimonials 1-4, blog 1-3); no copied
      assets.
- [ ] `scripts/verify-app.sh enamel` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` on ALL THREE dup rows
      (TEMPLATES.md lines 374, 971 and 1509) + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
