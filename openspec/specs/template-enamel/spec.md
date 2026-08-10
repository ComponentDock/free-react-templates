# Template: Enamel (Dentist / Medical)

## Purpose

Enamel is a single-page dental clinic website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dentista" dental clinic template
(source: https://colorlib.com/wp/template/dentista/), built under a DIFFERENT
name (Enamel — the hard outer layer of a tooth, a dental-brand word,
re-branded) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-10): the live preview
> `https://preview.colorlib.com/theme/dentista/` returns HTTP 200 (45.6 KB
> HTML — the analysis below is from that live demo; the TEMPLATES.md
> screenshot (`dentista-free-template.jpg`, 1200×946, AVIF, viewed in a
> browser) matches the live render: clean WHITE light theme, sky-blue
> `#46b7de` primary accent + lime-green `#a8c337` secondary accent, top
> contact bar, centered logo, black uppercase nav, photo slider with black
> text, blue consultation band, 8 blue-icon service cards, doctors grid,
> blue footer).

The reference is a LIGHT medical/dental site: white page background, black
headings, TWO accents — sky blue **`#46b7de`** (primary: buttons, the
consultation band, footer background, pricing price, active nav link, blog
date box, topper icons) and lime green **`#a8c337`** (secondary: the
"View our works"/"Free Consultation" buttons, doctor social icons, pricing
hover, footer subscribe submit). Structure: a top contact bar (Free Call +
address | centered logo "Dentista" + tagline "Dental Clinic" | Open Hours);
a light navbar over the slider (black uppercase links, blue active); a
600px photo slider with black text and a lime "View our works" button;
a Welcome/About split (photo + "Welcome to Dentista" subheading + big
headline + founder card); a BLUE consultation band (Dental Services | Free
Consultation appointment form | Find A Doctor); "Our Clinic Services" (8
cards with flaticon tooth icons); a parallax quote intro; "Our Qualified
Doctors" (4 staff cards); "Our Patients Says About Us" testimonials; a
blue "We Provide Free Dental Care Consultation" CTA band; "Our Pricing"
(4 plans, pill Get Offer button, hover → lime); "Recent Blog" (3 posts);
and a BLUE footer (7 widgets + copyright bar). Enamel recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets — seeded picsum photos, Google Fonts
Poppins, lucide-react + inline SVG icons).

## Design reference (replication findings)

- **Original:** ColorLib "Dentista" — free Dentist / Medical website
  template (page title "Denstista - Free Bootstrap 4 Template by Colorlib"
  — source typo "Denstista", keep "Dentista" as the reference name).
  TEMPLATES.md has THREE dup rows for the same source: line 374 under
  **Bootstrap (216)**, line 971 under **Business (365)** and line 1509
  under **Dentist (14)** — same source, ONE item; mark ALL THREE `[x]` at
  ship time. The recreation brands itself **Enamel** but keeps the same
  section structure, copy kinds and interaction patterns.
- **Live preview DOM analyzed (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/dentista/` (HTTP 200, 45.6 KB).
  Bootstrap 4 + jQuery + owl.carousel + aos (animate-on-scroll) + stellar
  (parallax) + bootstrap-datepicker + jquery.timepicker + magnific popup +
  icomoon/flaticon/ionicons icon fonts + google map; inner pages exist in
  the demo (about.html, doctor.html, department.html, pricing.html,
  blog.html, blog-single.html, contact.html — single-page recreation uses
  `#` anchors).
- **Visual design (TEMPLATES.md screenshot `dentista-free-template.jpg`,
  1200×946, viewed in browser 2026-08-10 + live render):** clean, bright,
  clinical aesthetic on WHITE. Top info bar with thin-line icons; centered
  logo "Dentista" + tooth icon; horizontal black uppercase nav with the
  active link accented; hero = bright photo of a smiling patient in a
  dental chair, large black headline on the right + a LIME-green
  pill-shaped "View our works" button; Welcome section split (photo left,
  "WELCOME TO DENTISTA" subheading + headline right); sky-blue used for
  consultation band, footer, pricing prices and blog date boxes. Poppins
  sans-serif throughout, black text on white.
- **Section order (1:1, verified from live DOM):**
  1. `div.py-md-5.py-4.border-bottom` — TOP BAR (container row no-gutters,
     3 cols):
     - LEFT `col-md-4.order-md-1.d-flex.topper` (text-md-right): circular
       icon `icon-map` (50×50 white circle, `border: 1px solid
rgba(0,0,0,0.05)`, icon color `#46b7de`) + text: `p.con` — span
       "Free Call" + span "+1 234 456 78910"; `p.con` "198 West 21th
       Street, Suite 721 New York NY 10016" (12px).
     - CENTER `col-md-4.order-md-2.text-center`: `a.navbar-brand` —
       "Dentista" + `<span>` tagline "Dental Clinic".
     - RIGHT `col-md-4.order-md-3.d-flex.topper`: icon `icon-paper-plane`
       - text: `p.hr` span "Open Hours"; `p.time` "Mon - Sat: 8:00am -
         9:00pm" + "Sun: Closed".
  2. `nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.ftco-navbar-light`
     — NAVBAR (`background: transparent !important`, z-index 3, over the
     slider): container > mobile-only hamburger `button.navbar-toggler`
     ("Menu" label, `oi oi-menu` icon; mobile: navbar bg `#000`) +
     `div.collapse.navbar-collapse#ftco-nav` > `ul.navbar-nav.m-auto`:
     Home (`li.nav-item.active`, `a.nav-link.pl-0`), About, Doctor,
     Treatments, Pricing, Blog, Contact (hrefs index.html/about.html/
     doctor.html/department.html/pricing.html/blog.html/contact.html).
     Link style: 15px, weight 400, `#000000`, letter-spacing 1px,
     UPPERCASE, padding 2rem top/bottom 20px sides; hover black; ACTIVE
     link `color: #46b7de`; mobile links `rgba(255,255,255,0.7)` hover
     white.
  3. `section.home-slider.owl-carousel` — HERO SLIDER (`.owl-carousel.
home-slider` height 600px; 2 × `div.slider-item` with inline bg images
     `images/bg_1.jpg`, `images/bg_2.jpg` (BRIGHT photos, black text on
     them — overlay div present but `opacity: 0`); `.slider-text` height
     600px, `.subheading` 18px `rgba(0,0,0,0.8)` + `h1` 50px `#000000`
     weight 300 line-height 1.2 (two-line: `<span>` display block per
     line) + `a.btn.btn-secondary.px-4.py-3.mt-3` "View our works"):
     - Slide 1: "Helping Your <span>Stay Happy One</span>" /
       "Everyday We Bring Hope and Smile to the Patient We Serve".
     - Slide 2: "Smile Makes <span>A Lasting Impression</span>" /
       "Your Health is Our Top Priority with Comprehensive, Affordable
       medical."
  4. `section.ftco-section.ftco-no-pt.ftco-no-pb` — WELCOME: row of
     `col-md-5.p-md-5.img.img-2` (bg `images/about.jpg`) + `col-md-7.
wrap-about.py-4.py-md-5`: `div.heading-section.mb-5` > `span.subheading.
mb-2` "Welcome to Dentista" + `h2` "Medical specialty concerned with the
     care of acutely ill hospitalized patients" (inline style font-size
     32px, weight 400); 2 lorem paragraphs; `div.founder.d-flex.
align-items-center.mt-5` — circular `div.img` (doc-1.jpg) + `h3.mb-0`
     "Dr. Paul Foster" + `span.position` "CEO, Founder".
  5. `section.ftco-section.ftco-no-pt.ftco-no-pb` — CONSULTATION BAND
     (container-fluid px-md-0, row no-gutters, 3 equal-stretch cols):
     - LEFT `col-md-3` > `div.consultation.w-100.text-center.px-4.px-md-5`
       (bg **`#46b7de`**, `padding: 4em 0`, text `rgba(255,255,255,0.9)`):
       `h3.mb-4` "Dental Services" (20px white weight 500) + p + `a.
btn-custom` "See Services" (in-consultation btn-custom: 12px uppercase
       weight 600 WHITE).
     - CENTER `col-md-6` > `div.consultation.consul` (bg **`#24a1cd`**
       darker blue): `h3` "Free Consultation" + `form.appointment-form`
       (row of col-xl-4 groups): input "First Name", input "Last Name",
       select "Department" (options: Neurology, Cardiology, Dental,
       Ophthalmology, Other Services; arrow icon), date input "Date"
       (calendar icon), time input "Time" (clock icon), submit
       `btn.btn-secondary.py-2.px-4` value "Appointment".
     - RIGHT `col-md-3` > `div.consultation.w-100.text-center`: `h3` "Find
       A Doctor" + p + `a.btn-custom` "Mee our doctor" (SOURCE TYPO —
       recreate as "Meet our doctor").
  6. `section.ftco-section.ftco-services` — SERVICES: heading block
     (col-md-8 text-center): `span.subheading` "Services" + `h2.mb-4`
     "Our Clinic Services" (34px weight 400) + intro p; row of 8 ×
     `div.col-md-3.d-flex.services.align-self-stretch.p-4` > `div.media.
block-6.d-block.text-center`: flaticon icon (drilling, tooth,
     dental-floss, shiny-tooth, dentist-chair, tooth-1, tooth-with-braces,
     decayed-tooth — recreate with lucide icons) + `h3` service name +
     p lorem. Titles: **Dental Implants, Cosmetic Dentistry, Dental Care,
     Teeth Whitening, Dental Calculus, Periondontics (sic → Periodontics),
     Clip & Braces, Root Canel (sic → Root Canal)**. QUIRK: all 8 blurbs
     identical → 8 DISTINCT short blurbs.
  7. `section.ftco-section.intro` (inline bg `images/bg_3.jpg`,
     data-stellar parallax) — QUOTE INTRO: col-md-6: `h3.mb-4` "We
     promised to take care our patients and we delivered." + p lorem.
  8. `section.ftco-section` — DOCTORS: heading block: `span.subheading`
     "Doctors" + `h2` "Our Qualified Doctors" + p; row of 4 ×
     `div.col-md-6.col-lg-3` > `div.staff`: `div.img` (doc-1..4.jpg,
     hover: bg zoom/scale) + `div.text.pt-3` (white bg): `h3` name +
     `span.position` role + p blurb + `ul.ftco-social` (3 social icons —
     white 30×30 circles, icon color **`#a8c337`**; on card hover the
     socials slide up above the image, opacity 0→1). Doctors: **Dr. Lloyd
     Wilson (Denstist — sic → Dentist), Dr. Rachel Parker (Dentist),
     Dr. Ian Smith (Dentist), Dr. Alicia Henderson (Dentist)**. QUIRK: all
     4 blurbs identical "I am an ambitious workaholic, but apart from
     that, pretty simple person." → keep or vary slightly.
  9. `section.ftco-section.testimony-section.bg-light` — TESTIMONIALS:
     heading block: `span.subheading` "Testimonials" + `h2` "Our Patients
     Says About Us" + p; `div.owl-carousel` of 4 × `div.item` >
     `div.testimony-wrap.d-flex`: `div.user-img` (person_1..4.jpg,
     circular) + `div.text.pl-4.bg-light`: circular `span.quote` (quote
     icon) + p quote + `p.name` + `span.position` role; owl prev/next
     arrows below (top 100%). People: **Racky Henderson (Farmer), Henry
     Dee (Businessman), Mark Huff (Students), Rodel Golez (Striper)**.
     QUIRK: all 4 quotes identical lorem → 4 DISTINCT short patient
     quotes.
  10. `section.ftco-intro` (inline bg `images/bg_3.jpg`,
      data-stellar parallax + `div.overlay` dark scrim, padding 4em 0,
      text `rgba(255,255,255,0.8)`) — CTA BAND: row: `col-md-9`: `h2`
      (36px white) "We Provide Free Dental Care Consultation" + `p.mb-0`
      "Your Health is Our Top Priority with Comprehensive, Affordable
      medical."; `col-md-3.d-flex.align-items-center`: `a.btn.btn-
secondary.px-4.py-3` "Free Consutation" (SOURCE TYPO — recreate as
      "Free Consultation").
  11. `section.ftco-section` — PRICING: heading block: `span.subheading`
      "Pricing" + `h2` "Our Pricing" + p; row of 4 × `div.col-md-3` >
      `div.pricing-entry.pb-5.text-center` (`border: 1px solid #c8eaf5`,
      transition .3s; `> div` padding 20px): `h3.mb-4` plan name (16px
      weight 400) + `p` `<span.price>` $ (28px weight 300 color
      **`#46b7de`**) + `<span.per>` "/ session" (12px); `ul` of 5 `li`
      (odd rows bg `#fafafa`): Diagnostic Services, Professional
      Consultation, Tooth Implants, Surgical Extractions, Teeth Whitening
      (SAME list on all 4 plans — keep as-is, it is the source content);
      `p.button.text-center` (absolute bottom -26px, left/right 0):
      `a.btn.btn-primary.px-4.py-3` "Get Offer" (**border-radius: 30px**
      pill, straddles the card bottom edge). HOVER (card): Get Offer
      button + price turn **`#a8c337`** lime. Plans: **Basic $24.50,
      Standard $34.50, Premium $54.50, Platinum $89.50**.
  12. `section.ftco-section.bg-light` — BLOG: heading block:
      `span.subheading` "Blog" + `h2` "Recent Blog" + p; row of 3 ×
      `div.col-md-4` > `div.blog-entry`: `a.block-20.d-flex.align-items-
end.justify-content-end` (bg image_1..3.jpg) + `div.meta-date.text-
center.p-2` (bg **`#46b7de`**): `span.day` 30px weight 300 white
      "18" + `span.mos` "September" + `span.yr` "2019" (13px); `div.text.
bg-white.p-4`: `h3.heading` title "Scary Thing That You Don't Get
      Enough Sleep" + p excerpt + meta row: `a.btn.btn-primary` "Read
      More" + `p.ml-auto` meta ("Admin 3" + comment icon). QUIRK: all 3
      posts identical (title/date/excerpt) → 3 DISTINCT titles/excerpts
      of the same kind.
  13. `footer.ftco-footer.ftco-bg-dark.ftco-section` — FOOTER (bg
      **`#46b7de`**, `padding: 6em 0`, font-size 14px, white text
      `rgba(255,255,255,0.7)`; h2 widget headings 20px white weight 400
      margin-bottom 40px): row of 4 × `div.col-md` widgets:
      - COL 1: logo "Dentista" (white) + about p + `h2` "Have a
        Questions?" + contact block (icon-map-marker + "203 Fake St.
        Mountain View, San Francisco, California, USA"; icon-phone + "+2
        392 3929 210"; icon-envelope + "info@yourdomain.com").
      - COL 2: `h2` "Links" — ul: Home, About, Services, Deparments (sic
        → Departments), Contact; `h2` "Services" — ul: Neurolgy (sic →
        Neurology), Dentist, Ophthalmology, Cardiology, Surgery.
      - COL 3: `h2` "Recent Blog" — 2 mini entries (thumb + title "Even
        the all-powerful Pointing has no control about" + "Sept. 20,
        2019" + "Admin 19").
      - COL 4: `h2` "Opening Hours" — "We are open 24/7" + `h2` "Subscribe
        Us!" — `form.subscribe-form`: input (bg `rgba(255,255,255,0.1)`,
        radius **2px**, placeholder white 0.7) + submit button (bg
        **`#a8c337`**, radius 2px).
      - Bottom bar `div.row.pt-5.mt-5` > `div.col-md-12.text-center`:
        copyright "Copyright © <year> All rights reserved | This template
        is made with ♥ by Colorlib".
- **Design tokens extracted from the live CSS (`css/style.css` +
  `css/bootstrap.min.css`, verified 2026-08-10):**
  - Sky blue **`#46b7de`** — THE primary brand color (Bootstrap `$primary`
    override `.btn.btn-primary`: bg `#46b7de`, white text, hover =
    TRANSPARENT bg + blue text; `.consultation` band bg; `.ftco-footer`
    bg; `.pricing-entry .price` (28px); `.ftco-navbar-light .nav-item.
active > a`; `.blog-entry .meta-date` bg; `.topper .icon span`;
    `.owl-carousel.home-slider`-adjacent dots if any).
  - Darker blue **`#24a1cd`** — `.consultation.consul` (middle band) bg;
    `.btn-custom` text color.
  - Lighter blue **`#57bee1`** — `.btn-custom` `border-bottom: 4px solid
#57bee1` (text-link underline accent).
  - Lime green **`#a8c337`** — THE secondary accent: `.btn.btn-secondary`
    bg ("View our works", "Free Consultation", "Appointment" submit);
    `.staff .ftco-social li a` icon color; `.pricing-entry:hover .btn` +
    `.pricing-entry:hover .price`; `.ftco-footer .subscribe-form .
submit` bg.
  - Light blue border **`#c8eaf5`** — `.pricing-entry` border;
    zebra rows `#fafafa` (`ul li:nth-child(odd)`).
  - Text: black **`#000000`** (headings, nav links, slider h1, brand);
    `rgba(0,0,0,0.8)` (slider subheading); grey **`#6c757d`** (Bootstrap
    secondary, generic text); footer text `rgba(255,255,255,0.7)` white.
  - Font: **Poppins** (`font-family: "Poppins", Arial, sans-serif`, body)
    — Google Font, use directly; headings are Poppins weight 400/500/300
    (h1 50px w300, section h2 34px w400, subheading uppercase 16px
    letter-spacing 2px).
  - Buttons: `.btn.btn-primary` = blue bg white text radius .25rem
    (Bootstrap default), hover = transparent bg + blue text; `.btn.
btn-secondary` = lime bg white text (hover keeps lime border, white
    text); pricing "Get Offer" = **pill radius 30px**, absolute at card
    bottom (-26px); `.btn-custom` = text link `#24a1cd` + 4px `#57bee1`
    bottom border (in the blue band it's white 12px uppercase w600).
  - Section headings: `span.subheading` uppercase 16px letter-spacing
    2px black + `h2` 34px weight 400 (28px on mobile), centered intro p
    below; heading block col-md-8 centered (services/pricing/blog) or
    col-md-7.
  - Slider: height 600px; bright bg photos; `h1` 50px w300 with
    block-level `<span>` lines; subheading 18px `rgba(0,0,0,0.8)`;
    overlay `opacity: 0` (no darkening).
  - `.consultation` band: `padding: 4em 0`, bg `#46b7de`, h3 20px white
    w500, text `rgba(255,255,255,0.9)`; middle col `#24a1cd`.
  - `.staff` card: image + white text box; socials = 30×30 white circles
    with lime icons, hidden until card hover (slide up, opacity 0→1).
  - `.testimony-wrap`: horizontal flex — circular user photo left, text
    right (bg-light): circular quote-icon badge, quote p, `p.name`,
    `span.position` role.
  - `.blog-entry`: bg image card with blue `.meta-date` box (day 30px
    w300 white, mos/yr 13px), white text box (bg-white p-4), "Read More"
    btn-primary + meta row.
  - Footer: bg `#46b7de`, padding 6em 0, 14px, links
    `rgba(255,255,255,0.7)` hover white; subscribe input bg
    `rgba(255,255,255,0.1)` radius 2px; submit lime radius 2px; h2 20px
    white w400 mb-40px.
  - Rhythm: sections `padding: 7em 0`; slider 600px; top bar
    `py-md-5 py-4` + `border-bottom`; consultation band 4em padding;
    footer 6em; grids: 8 services (col-md-3), 4 doctors (col-lg-3), 4
    pricing (col-md-3), 3 blog (col-md-4), footer 4 auto cols (col-md).
- **Recreation decisions:** Tailwind re-implementation of the
  Bootstrap-4 grid (NO Bootstrap dependency); owl-carousel home slider →
  small stateful carousel (useState index, prev/next arrows + optional
  dots, auto-advance optional); testimonials owl-carousel → static 4-card
  row or a simple stateful carousel (implementer choice, source uses
  prev/next arrows below); stellar parallax (intro, ftco-intro bg) →
  fixed/scroll background via CSS (`bg-fixed`) or plain bg image
  (decorative — may omit parallax); datepicker/timepicker (Date/Time
  inputs) → plain text inputs with placeholders; aos fade-up → optional
  simple CSS fade-in or omit (decorative); icomoon/flaticon/ionicons →
  lucide-react (MapPin, Phone, Clock, Send, Menu, X, ChevronDown,
  Calendar, Quote, Stethoscope, Smile, Sparkles, Baby/Tooth — lucide has
  no tooth/brand icons, so use lucide medical/general icons or inline SVG
  for the tooth icon) + inline SVG brand icons for socials; images →
  seeded picsum placeholders (`picsum.photos/seed/enamel-<n>/<w>/<h>` —
  source images must not be copied); Google Font **Poppins** (300/400/
  500/600) via `<link>` in `index.html`; brand "Dentista" → "Enamel"
  (top-bar logo + tagline "Dental Clinic" kept); document title "Enamel
  — Dental Clinic Template"; nav links `#` anchors (single-page
  recreation of the demo); FIX source typos: "Mee our doctor" → "Meet
  our doctor", "Free Consutation" → "Free Consultation", "Periondontics"
  → "Periodontics", "Root Canel" → "Root Canal", "Denstist" → "Dentist",
  "Deparments" → "Departments", "Neurolgy" → "Neurology"; fix source
  repetitions (8 service blurbs identical → distinct; 4 testimonial
  quotes identical → distinct; 3 blog posts identical → distinct
  titles/excerpts).

Enamel lives in `apps/enamel` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Top contact bar

The system SHALL render a top bar above the navbar with contact info left,
the logo centered and opening hours right.

#### Scenario: Top bar layout

- **GIVEN** the page is rendered
- **THEN** a top bar SHALL be shown with a bottom border, containing three
  columns (stacking on mobile)
- **AND** the left column SHALL show a circular map-pin icon (blue
  `#46b7de`) with "Free Call" + "+1 234 456 78910" and the address "198
  West 21th Street, Suite 721 New York NY 10016" (12px text)
- **AND** the center column SHALL show the brand logo "Enamel" with the
  tagline "Dental Clinic" beneath/next to it
- **AND** the right column SHALL show a circular send icon with "Open
  Hours" and "Mon - Sat: 8:00am - 9:00pm" / "Sun: Closed"

### Requirement: Navbar

The system SHALL render a transparent navbar over the slider with black
uppercase links and a blue active link, plus a mobile collapsed menu.

#### Scenario: Desktop navbar

- **GIVEN** the page is rendered on a desktop viewport
- **THEN** a navbar SHALL be shown overlaid on the slider (transparent
  background)
- **AND** the nav SHALL show links Home (active), About, Doctor,
  Treatments, Pricing, Blog, Contact in black uppercase 15px with 1px
  letter-spacing
- **AND** the active link (Home) SHALL be blue `#46b7de`
- **AND** links SHALL turn black on hover

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the hamburger "Menu" toggle is clicked
- **THEN** a collapsed menu SHALL expand with the same links
- **AND** the navbar background SHALL be black with links at white 70%
  opacity, hover full white

### Requirement: Hero slider

The system SHALL render a 600px photo slider with two slides, each with a
black headline, subheading and a lime button.

#### Scenario: Slider slides

- **GIVEN** the hero slider is rendered
- **THEN** a 600px-high slider SHALL be shown with two slides (bright
  photos, no dark overlay)
- **AND** slide 1 SHALL show the headline "Helping Your Stay Happy One"
  (black, 50px, weight 300) with subheading "Everyday We Bring Hope and
  Smile to the Patient We Serve" (18px, `rgba(0,0,0,0.8)`)
- **AND** slide 2 SHALL show "Smile Makes A Lasting Impression" with
  "Your Health is Our Top Priority with Comprehensive, Affordable
  medical."
- **AND** each slide SHALL have a lime `#a8c337` "View our works" button
  (white text, `px-4 py-3`, radius .25rem)
- **AND** controls SHALL allow switching between the two slides

### Requirement: Welcome section

The system SHALL render a split section with a photo, a "Welcome to
Enamel" subheading, a big headline, two paragraphs and a founder card.

#### Scenario: Welcome content

- **GIVEN** the welcome section is rendered
- **THEN** a two-column split SHALL be shown (photo left, text right,
  stacking on mobile)
- **AND** the text column SHALL show the uppercase subheading "Welcome to
  Enamel"
- **AND** a 32px headline SHALL read "Medical specialty concerned with
  the care of acutely ill hospitalized patients"
- **AND** two lorem-style paragraphs SHALL follow
- **AND** a founder card SHALL show a circular photo, "Dr. Paul Foster"
  and the role "CEO, Founder"

### Requirement: Consultation band

The system SHALL render a blue three-column band with a services teaser,
a Free Consultation appointment form and a Find A Doctor teaser.

#### Scenario: Band columns

- **GIVEN** the consultation band is rendered
- **THEN** a full-width band with background `#46b7de` SHALL be shown in
  three columns (stacking on mobile)
- **AND** the left column SHALL show "Dental Services" with a "See
  Services" white underlined text link
- **AND** the center column (darker blue `#24a1cd`) SHALL show "Free
  Consultation" and an appointment form with First Name, Last Name,
  Department (select: Neurology, Cardiology, Dental, Ophthalmology,
  Other Services), Date, Time and a lime "Appointment" submit button
- **AND** the right column SHALL show "Find A Doctor" with a "Meet our
  doctor" white underlined text link

### Requirement: Services grid

The system SHALL render a heading block and eight service cards with
icons and titles.

#### Scenario: Services cards

- **GIVEN** the services section is rendered
- **THEN** a heading block SHALL show the uppercase subheading "Services"
  and the 34px heading "Our Clinic Services" with an intro paragraph
- **AND** eight service cards SHALL be shown in a 4-column grid (2-up on
  tablet, stacking on mobile)
- **AND** each card SHALL show an icon (lucide/inline SVG, no copied
  icon fonts), a title and a short blurb
- **AND** the titles SHALL be: Dental Implants, Cosmetic Dentistry,
  Dental Care, Teeth Whitening, Dental Calculus, Periodontics, Clip &
  Braces, Root Canal
- **AND** the eight blurbs SHALL be DISTINCT (the source repeats one
  lorem blurb on all eight — fix in recreation)

### Requirement: Quote intro

The system SHALL render a parallax photo band with a single headline and
paragraph.

#### Scenario: Intro band

- **GIVEN** the intro section is rendered
- **THEN** a photo-background band SHALL be shown (parallax optional)
- **AND** it SHALL contain the headline "We promised to take care our
  patients and we delivered." with a short paragraph below

### Requirement: Doctors grid

The system SHALL render a heading block and four doctor cards with photo,
name, role, blurb and hover-reveal social icons.

#### Scenario: Doctor cards

- **GIVEN** the doctors section is rendered
- **THEN** a heading block SHALL show "Doctors" / "Our Qualified
  Doctors" with an intro paragraph
- **AND** four cards SHALL be shown in a 4-column grid (stacking on
  mobile)
- **AND** each card SHALL show a photo, the name, the role (Dentist),
  a short blurb and three social icons in white circles (lime `#a8c337`
  icons)
- **AND** on card hover the social icons SHALL reveal/slide up (hidden
  by default)
- **AND** the doctors SHALL be: Dr. Lloyd Wilson, Dr. Rachel Parker,
  Dr. Ian Smith, Dr. Alicia Henderson

### Requirement: Testimonials

The system SHALL render a light-background section with four horizontal
testimonial cards (circular photo + quote + name + role).

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is rendered
- **THEN** a `bg-light` section SHALL be shown with the heading
  "Testimonials" / "Our Patients Says About Us" and an intro paragraph
- **AND** four cards SHALL be shown (carousel or row), each with a
  circular patient photo, a quote badge, a short quote, a name and a
  role
- **AND** the people SHALL be: Racky Henderson (Farmer), Henry Dee
  (Businessman), Mark Huff (Students), Rodel Golez (Striper)
- **AND** the four quotes SHALL be DISTINCT (the source repeats one
  quote on all four — fix in recreation)

### Requirement: Free consultation CTA band

The system SHALL render a photo band with a dark overlay, a headline and
a lime button.

#### Scenario: CTA band

- **GIVEN** the CTA band is rendered
- **THEN** a photo-background band with a dark overlay SHALL be shown
- **AND** the left side SHALL show the white 36px headline "We Provide
  Free Dental Care Consultation" with the sub-line "Your Health is Our
  Top Priority with Comprehensive, Affordable medical."
- **AND** the right side SHALL show a lime `#a8c337` "Free Consultation"
  button (`px-4 py-3`)

### Requirement: Pricing

The system SHALL render four pricing cards with a plan name, price,
feature list and a pill Get Offer button that turns lime on hover.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **THEN** a heading block SHALL show "Pricing" / "Our Pricing" with an
  intro paragraph
- **AND** four cards SHALL be shown in a 4-column grid (stacking on
  mobile), each with a light-blue `#c8eaf5` border
- **AND** each card SHALL show the plan name (Basic, Standard, Premium,
  Platinum), the price (28px, blue `#46b7de`, e.g. "$24.50") with "/
  session" (12px), five feature lines (odd rows shaded `#fafafa`:
  Diagnostic Services, Professional Consultation, Tooth Implants,
  Surgical Extractions, Teeth Whitening) and a pill Get Offer button
  (radius 30px, straddling the card's bottom edge)
- **AND** the prices SHALL be $24.50, $34.50, $54.50, $89.50
- **WHEN** a card is hovered
- **THEN** its Get Offer button and price SHALL turn lime green
  `#a8c337`

### Requirement: Blog

The system SHALL render a light-background section with three blog post
cards (image with blue date box, title, excerpt, Read More link).

#### Scenario: Blog posts

- **GIVEN** the blog section is rendered
- **THEN** a `bg-light` section SHALL be shown with the heading "Blog" /
  "Recent Blog" and an intro paragraph
- **AND** three post cards SHALL be shown in a 3-column grid (stacking on
  mobile)
- **AND** each card SHALL show an image with a blue `#46b7de` date box
  (day 30px, month, year), a white content box with the title, an
  excerpt, a blue "Read More" link and a meta line (e.g. "Admin 3")
- **AND** the three posts SHALL have DISTINCT titles and dates (the
  source repeats "Scary Thing That You Don't Get Enough Sleep" /
  "18 September 2019" on all three — fix in recreation)

### Requirement: Footer

The system SHALL render a blue footer with four widget columns (About +
Questions, Links + Services, Recent Blog, Opening Hours + Subscribe) and
a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **THEN** a footer with background `#46b7de` SHALL be shown with four
  equal columns
- **AND** the first column SHALL show the "Enamel" logo, an about
  paragraph, "Have a Questions?" with the address "203 Fake St. Mountain
  View, San Francisco, California, USA", phone "+2 392 3929 210" and
  email "info@yourdomain.com"
- **AND** the second column SHALL show "Links" (Home, About, Services,
  Departments, Contact) and "Services" (Neurology, Dentist,
  Ophthalmology, Cardiology, Surgery)
- **AND** the third column SHALL show "Recent Blog" with two mini entries
  (title + date + author)
- **AND** the fourth column SHALL show "Opening Hours" ("We are open
  24/7") and "Subscribe Us!" with an email input (translucent white bg,
  radius 2px) and a lime subscribe button
- **AND** the bottom bar SHALL show the centered copyright line:
  "Copyright © <current year> All rights reserved | This template is
  made with ♥ by Enamel"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-enamel`
- [ ] `scripts/verify-app.sh enamel` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: top bar (Free Call + address | logo + tagline |
      Open Hours) → navbar (black uppercase links, blue active, mobile
      collapsed menu) → hero slider (2 slides, black text, lime "View our
      works") → Welcome (photo + subheading + headline + founder) →
      consultation band (blue: Dental Services | Free Consultation form |
      Find A Doctor) → Services (8 cards) → quote intro (photo band) →
      Doctors (4 cards) → Testimonials (bg-light, 4 cards) → CTA band
      (photo + overlay + lime "Free Consultation") → Pricing (4 cards,
      pill Get Offer) → Blog (bg-light, 3 posts) → footer (blue, 4
      columns + copyright)
- [ ] Brand colors in `@theme`: primary blue `#46b7de`, darker blue
      `#24a1cd`, light blue `#57bee1`, secondary lime `#a8c337`, pricing
      border `#c8eaf5`, zebra `#fafafa`, text black `#000000`, subheading
      `rgba(0,0,0,0.8)`, footer text `rgba(255,255,255,0.7)`; used via
      Tailwind classes
- [ ] Poppins (300/400/500/600) via Google Fonts `<link>` in
      `index.html`; document title "Enamel — Dental Clinic Template"
- [ ] Top bar: 3 columns with circular icons (map-pin blue, send blue),
      logo "Enamel" + tagline "Dental Clinic", "Free Call" number +
      address, "Open Hours" Mon - Sat 8:00am - 9:00pm / Sun: Closed
- [ ] Navbar: transparent over slider; links Home (active, blue) / About
      / Doctor / Treatments / Pricing / Blog / Contact, black uppercase
      15px ls 1px; mobile: black bg + hamburger "Menu" → collapsible
      links at white 70%, hover white
- [ ] Slider: 600px, 2 bright-photo slides, h1 50px w300 black (2-line
      spans), subheading 18px, lime `#a8c337` "View our works" button
      (px-4 py-3), slide switching control
- [ ] Welcome: photo left + text right; subheading "Welcome to Enamel",
      headline (32px), 2 paragraphs, founder card "Dr. Paul Foster" /
      "CEO, Founder"
- [ ] Consultation band: `#46b7de` with center `#24a1cd`; left "Dental
      Services" + "See Services" white btn-custom; center "Free
      Consultation" form (First Name, Last Name, Department select with 5
      options, Date, Time, lime "Appointment" submit); right "Find A
      Doctor" + "Meet our doctor" (typo fixed)
- [ ] Services: heading "Services" / "Our Clinic Services"; 8 cards
      (col-md-3): Dental Implants, Cosmetic Dentistry, Dental Care, Teeth
      Whitening, Dental Calculus, Periodontics, Clip & Braces, Root Canal
      — DISTINCT blurbs
- [ ] Quote intro: photo band + h3 "We promised to take care our
      patients and we delivered." + paragraph
- [ ] Doctors: heading "Doctors" / "Our Qualified Doctors"; 4 cards:
      Dr. Lloyd Wilson, Dr. Rachel Parker, Dr. Ian Smith, Dr. Alicia
      Henderson (all Dentist); hover-reveal social circles (lime icons)
- [ ] Testimonials: bg-light, heading "Testimonials" / "Our Patients
      Says About Us"; 4 horizontal cards (circular photo + quote + name +
      role), DISTINCT quotes
- [ ] CTA band: photo + dark overlay; h2 "We Provide Free Dental Care
      Consultation" + sub-line + lime "Free Consultation" button (typo
      fixed)
- [ ] Pricing: heading "Pricing" / "Our Pricing"; 4 cards (border
      `#c8eaf5`): Basic $24.50 / Standard $34.50 / Premium $54.50 /
      Platinum $89.50, "/ session", 5 features with zebra rows, pill Get
      Offer (radius 30px, bottom -26px); hover → button + price lime
- [ ] Blog: bg-light, heading "Blog" / "Recent Blog"; 3 cards (image +
      blue meta-date box "18 / September / 2019", white box: title +
      excerpt + "Read More" + meta), DISTINCT titles/excerpts
- [ ] Footer: bg `#46b7de`, 4 columns (About + Have a Questions?, Links + Services, Recent Blog, Opening Hours + Subscribe Us!) + centered
      copyright "made with ♥ by Enamel"
- [ ] Buttons: primary blue bg white text radius .25rem, hover =
      transparent bg + blue text; secondary lime bg white text; pricing
      Get Offer pill; btn-custom text link with 4px `#57bee1` bottom
      border
- [ ] Placeholder images via `picsum.photos/seed/enamel-<n>/<w>/<h>`,
      icons from lucide-react (MapPin, Phone, Clock, Send, Menu, X,
      ChevronDown, Calendar, Quote, Stethoscope, Smile) + inline SVG
      brand icons for socials and the tooth logo mark — no copied
      assets; brand "Enamel"
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` on ALL THREE dup rows (lines 374, 971
      and 1509) + surge URL + `npm run readme:status` done by
      implementer at ship time
