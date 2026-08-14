# Template: Faculty (University / Education Landing)

## Purpose

Faculty is a single-page university / education website landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Universityedu" design (see TEMPLATES.md — listed in the
Bootstrap 5 (89) category at line 633, with a duplicate row in the Education
(43) category at line 1659; both rows `- [ ]`), built under a DIFFERENT name
— **Faculty** (a university-themed word; single lowercase word, no collision
with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md —
verified 2026-08-14) per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a clean professional education landing page: a dark
announcement top-bar with a live countdown timer ("ENDS TOMORROW: Join
Teachable for $4,800 in bonus content" + Days/Hours/Minutes/Seconds), a
white sticky header (logo + centered nav + phone + social icons), a 750px
hero with a dark-photo background and a bold white headline, a cream
split-section "A comprehensive teaching approach" (photo left, text right,
underline "Learn More" link), a 2-card "Programs we Offer" grid (Faculty of
Science / Faculty of Arts), a mint split-section "Essential resources" with
three stacked resource rows beside a photo, a full-width "Top Stories" 3-col
card grid, a "Our Partners" logo strip, a green "TRUSTED BY OVER 6000+
STUDENTS" CTA split-section, and a dark navy 4-column footer with a
newsletter form. Faculty recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

> NOTE (prep-stream 2026-08-14): the official preview
> `https://preview.colorlib.com/theme/universityedu/` is LIVE — fetched HTTP
> 200 (~28.7 KB HTML + `assets/css/style.css` ~103 KB + Bootstrap 5 +
> owl.carousel + slicknav + fontawesome + themify, curl-verified) and
> analyzed for this prep. The index page is a one-page layout (the nav also
> links to about.html / programs.html / blog.html / blog_details.html /
> elements.html / contact.html sub-pages — see Design reference; the
> recreation is a single-page landing, so those links become
> placeholder/anchor links). The TEMPLATES.md screenshot
> (`universityedu-colorlib-template.jpg`, 1200×946) was also viewed in a
> browser and matches the live render (dark top bar with countdown, white
> header, dark hero photo of a student, cream about section).

## Design reference (replication findings)

- **Original:** ColorLib "Universityedu" — free HTML5 university/education
  template (source: https://colorlib.com/wp/template/universityedu/). The
  recreation brands itself **Faculty** but keeps the same section structure,
  heading copy kinds, and photo set.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/universityedu/` (HTTP 200, ~28.7 KB
  HTML + `assets/css/style.css` ~103 KB; assets under `assets/img/` — logo
  `logo/logo.png`, footer logo `logo/logo2_footer.png`, hero
  `hero/h1_hero1.jpg`, `gallery/about1.jpg`, `gallery/blog1.jpg` +
  `blog2.jpg`, `gallery/class-img1..3.jpg`, `gallery/visit1.jpg`,
  `gallery/brand1..4.png`). Page structure (1:1 order):
  1. **Header** — `div.header-area`:
     - **Announcement top-bar** — `div.header-top` (bg `#32404D`, padding
       13px 0): centered flex row — left `ul.header-info-left` line
       **"ENDS TOMORROW:"** (span, emphasized) **"Join Teachable for $4,800
       in bonus content"**; middle `div.cd-timer#countdown` with 4 ×
       `div.cd-item` (span number + p label: **40 Days · 18 Hours · 46
       Minutes · 32 Seconds**; span `#00AC82` 20px, p
       `rgba(255,255,255,0.7)` 14px 300); right `a.browse-btn.browse-btn2`
       **"Learn More"** (white underline link, `ml-40`, hidden ≤575px).
       Countdown runs live in JS (`$("#countdown").countdown(timerdate, …)`)
       — replicate as a live countdown to a fixed future target.
     - **Main header** — `div.main-header` (white): `div.logo` (logo.png —
       serif "UNIVERSITY / EDUCATION" wordmark) + `div.main-menu
d-none d-lg-block` nav (Home · About · Programs · Blog ▾ [submenu:
       Blog, Blog Details, Elements] · Contact) + `div.header-right-btn`:
       `a.header-btn2 d-none d-xl-inline-block` **"Call Us : 0 (78) 675
       3674"** (plain styled text — NOT a tel: link in the source; keep as
       text, never emit a literal `tel:` URI) + `ul.header-social
d-none d-sm-block` social brand icon links (fontawesome
       facebook-square, twitter, linkedin, youtube … — recreate as inline
       SVG brand icons, lucide removed brand icons).
     - Sticky on scroll: `.sticky-bar` class (fixed top, z 9999, shadow
       `0 10px 15px rgba(25,25,25,0.1)`).
  2. **Hero** — `section.slider-area.position-relative` >
     `div.slider-active` > `div.single-slider.slider-height.hero-overly
slider-bg1 d-flex align-items-center` (ONE static slide — not a
     carousel; height 750px; bg image `hero/h1_hero1.jpg` via
     `.slider-bg1{background-image:url(../img/hero/h1_hero1.jpg)}`; overlay
     `.hero-overly` `rgba(50,64,77,0.3)` full-bleed):
     `div.hero-caption` (left-aligned, max ~6/12 cols): `span`
     **"EDUCATION & SCHOOL"** (white 24px) · `h1` **"SHOWCASE COURSES,
     EVENTS AND MORE!"** (white 54px 900, uppercase feel) · `p` lorem copy
     (white 20px) · `a.btn_1.hero-btn` **"Get Started Now"** (solid green
     `#007A5C` square button, 18px, padding 11px 20px, capitalize).
  3. **About** — `section.about-area.section-bg.section-padding` (bg
     `#FCF2EB` cream, 100px vertical padding): 2-col split — left
     `div.about-img.about-img1` photo (`gallery/about1.jpg`, woman
     portrait); right `div.about-caption` > `div.section-tittle.m-0`:
     `h2` **"A comprehensive teaching approach"** (`#32404D` 40px 900
     uppercase, lh 1.2) + two paragraphs + `a.browse-btn.mt-20`
     **"Learn More"** (green underline link, 16px 500; 2px `#007A5C`
     underline via `::before` at bottom -7px; hover letter-spacing 1px).
  4. **Programs** — `section.home-blog.section-padding` (white): centered
     `div.section-tittle.text-center.mb-40` — `h2` **"Programs we Offer"** +
     intro paragraph; 2-col grid (`col-lg-6`): 2 × `div.single-blogs` cards
     — `div.blog-img` photo (`gallery/blog1.jpg`, `blog2.jpg`) +
     `div.blog-caption`: `h3` **"Faculty of Science"** / **"Faculty of
     Arts"** (`#32404D` 26px 600) + paragraph + `a.browse-btn`
     **"Learn More"**.
  5. **Essential resources** — `section.visit-three.fix` (bg `#F2FBF9`
     light mint, flex align-center): 2-col split — left `div.tailor-details`
     (width 74%, padding `20px 40px 20px 268px` desktop): `div.section-tittle
mb-40` `h2` **"Essential resources"** + intro paragraph; then 3 ×
     stacked `div.single-gallery.mb-15` rows → `div.thumb-content-box.d-flex`
     → `div.thumb-content`: `div.capt` `h3` **"First year students"** ·
     **"Tuition & fees"** · **"International students"** (`#32404D` 24px 400) + short paragraph + right arrow icon link (themify `ti-angle-right`
     → lucide ChevronRight); right `div.visit-team` (bg image
     `gallery/visit1.jpg`, cover, 752px height, 57% width) with
     `div.wrapper` (::after overlay `#FFF6EE` cream).
  6. **Top Stories** — `section.class-offer-area.section-padding
border-bottom` (white, `container-fluid`): `div.section-tittle
d-flex justify-content-between align-items-center` — `h2` **"Top
     Stories"** left + `a.browse-btn.mb-20` **"More Stories"** right; 3-col
     grid (`col-lg-4`): 3 × `div.properties.pb-30` → `div.properties__card`:
     `div.properties__img` photo (`gallery/class-img1..3.jpg`) +
     `div.properties__caption.text-center` (padding `26px 18px 8px 22px`):
     `h3` story title (`#32404D` 24px 400). Source renders the SAME title
     three times ("Linguistics alumna says recognizing Indigenous Languages
     Day is crucial to our histories") — paraphrase into 3 distinct
     university-story titles of the same kind.
  7. **Partners** — `section.brand-area.section-padding` (white): centered
     `div.section-tittle.text-center.mb-60` — `h2` **"Our Pertners"**
     (SOURCE TYPO — use "Our Partners") + intro paragraph; row of 6 ×
     `div.single-brand` logo images (`gallery/brand1..4.png`, some
     repeated) — use 4–6 distinct grayscale-looking logos.
  8. **CTA** — `section.visit-one.fix` (bg `#007A5C` green, flex
     align-center): 2-col split — left `div.visit-team` (bg image + wrapper
     overlay) + right `div.tailor-details`: `div.section-tittle
section-tittle2.mb-25` — `h2` **"TRUSTED BY OVER 6000+ STUDENTS"**
     (white 40px 900 uppercase; `section-tittle2` variant: h2 white, p
     `#C9D6CB` 20px) + two paragraphs + `a.browse-btn.browse-btn2.mt-20`
     **"Join Now"** (white underline link).
  9. **Footer** — `footer` > `div.footer-wrapper` (bg `#32404D` dark navy —
     NOTE: the HTML class `gray-bg` is overridden by the `.footer-wrapper`
     rule) > `div.footer-area.footer-padding` (100px top / 50px bottom):
     `row justify-content-between` of `div.single-footer-caption.mb-50`
     columns:
     - logo column (`col-xl-2`): `logo2_footer.png` (white wordmark
       variant);
     - **Quick Links** (`footer-tittle h4` white 20px 600): Work ·
       Services · Products · Tips & Tricks (paraphrase to education-
       appropriate links of the same kind);
     - **Programs**: Air freight · Ocean freight · Large projects (source
       footer is generic — paraphrase to program links, e.g. Undergraduate
       · Postgraduate · Online Courses);
     - **Resources** (SOURCE TYPO "Resourses" → "Resources"): FAQ · Submit
       Ticket · Contact Us;
     - **Newsletter** (wider col): `h4` "Newsletter" + p "Subscribe
       newsletter to get updates." + `div.footer-form`: input (white bg,
       height 60px, padding 10px 20px, radius 0, color `#5C6168`,
       placeholder "Enter your email") + `div.form-icon` button (solid
       `#007A5C`, padding 21px 30px, height 60px, radius 0, paper-plane
       icon).
     - **Copyright bar** — `div.footer-bottom-area` >
       `div.footer-copy-right.text-center`: "Copyright ©{year} All rights
       reserved | This template is made with ♥ by ColorLib" (ColorLib
       attribution → MUST be replaced by the Component Dock line: "Made
       with ♥ by [Component Dock](https://www.componentdock.com/)" — see
       conventions; keep the dynamic year via
       `new Date().getFullYear()`).
  10. **Back-to-top** — `div#back-top` fixed bottom-right circular 50px
      green `#007A5C` button (fontawesome chevron-up → lucide ChevronUp).
- **Visual design (screenshot, 1200×946, viewed in browser):** clean
  professional education landing. Dark navy top announcement bar with a
  countdown timer; white sticky header (serif logo, centered menu, phone +
  socials right); full-width hero = dark moody photo of a young man with a
  folder outside a brick building under a heavy dark gradient, white
  "EDUCATION & SCHOOL" eyebrow, huge bold white headline, solid green
  rectangular "Get Started Now" button; below, a warm cream
  (`#FCF2EB`) split section with a portrait photo left and "A comprehensive
  teaching approach" + two paragraphs + underlined green "Learn More"
  right. Green `#007A5C` is the single brand accent everywhere (buttons,
  links, logo, CTA band); navy `#32404D` for text/dark bands; the palette
  alternates white / cream / mint / green / navy bands.

## Design tokens

- Brand green: `#007A5C` (`--color-brand`) — primary buttons, underline
  links, CTA band, countdown hover/footer-hover, back-to-top, newsletter
  button. Accent bright green (countdown numbers only): `#00AC82`.
- Navy ink: `#32404D` (`--color-ink`) — all headings, top-bar bg, hero
  overlay `rgba(50,64,77,0.3)`, footer bg.
- Section bands: cream `#FCF2EB` (about, `.section-bg`), mint `#F2FBF9`
  (resources, `.visit-three`), white `#fff` (programs, stories, partners),
  green `#007A5C` (CTA), navy `#32404D` (footer). Optional light
  `#EFF6F0` (`.brand-bg`), dark-green `#305534` (`.section-bg2`), black
  `#16161a` (`.black-bg`).
- Text: body `#5D646A` 16px lh 1.6 · section-intro `#777777` 18px ·
  footer links `#A7AEB4` 16px (hover `#007A5C` + underline) · footer h4
  white 20px 600 · newsletter input `#5C6168` · countdown labels
  `rgba(255,255,255,0.7)` 14px 300 · CTA intro `#C9D6CB` 20px
  (`.section-tittle2 p`).
- Font: **Chivo** (300/400/700/900) via Google Fonts `<link>` in
  `index.html` (source: `@import
url("https://fonts.googleapis.com/css2?family=Chivo:wght@300;400;700;900&display=swap")`).
- Headings: h2 40px 900 uppercase lh 1.2 (hero h1 54px 900 white; card h3
  24–26px 600/400 `#32404D`; caption eyebrow span `#007A5C` 16px capitalize
  — only where the source uses it).
- Buttons: SHARP corners everywhere (radius 0). `btn_1` = solid green
  `#007A5C`, 18px, padding 11px 20px, capitalize; hover = outlined (bg
  none, 1px solid `#fff` on the hero). `browse-btn` = green text link 16px
  500 with 2px `#007A5C` underline (::before, bottom -7px), hover
  letter-spacing 1px; `browse-btn2` = white text + white underline (on
  green/navy bands).
- Spacing: `.section-padding` 100px top/bottom (70px ≤767px); card gaps
  mb-30; section-tittle mb-40/60.
- Newsletter: input 60px tall, white bg, radius 0, padding 10px 20px;
  submit button 60px tall, green `#007A5C`, padding 21px 30px, radius 0.
- Back-to-top: 50px circle, green `#007A5C`, fixed bottom-right
  (right 31px bottom 18px), chevron-up icon.
- Misc: `.sticky-bar` header shadow `0 10px 15px rgba(25,25,25,0.1)`.

## Requirements

### Requirement: Header announcement bar with countdown

The system SHALL render a dark navy (`#32404D`) announcement bar above the
main header containing an urgency message with an emphasized "ENDS
TOMORROW:" lead-in, a live countdown timer with four labeled units
(Days/Hours/Minutes/Seconds), and a "Learn More" underline link on the
right (hidden on the smallest screens).

#### Scenario: Announcement bar content

- **GIVEN** the Faculty page is rendered
- **WHEN** the top of the page is inspected
- **THEN** an announcement bar SHALL show the text "ENDS TOMORROW: Join
  Teachable for $4,800 in bonus content"
- **AND** a countdown timer SHALL show four labeled units: Days, Hours,
  Minutes, Seconds
- **AND** each unit SHALL display a numeric value that counts down over
  time
- **AND** a "Learn More" underline link SHALL be present at the right of
  the bar on ≥576px screens

### Requirement: Main header with nav, phone and socials

The system SHALL render a white header below the announcement bar with the
Faculty logo on the left, a desktop nav (Home · About · Programs · Blog
with submenu · Contact) hidden below the lg breakpoint, and on the right a
plain-text phone line "Call Us : 0 (78) 675 3674" (never a literal `tel:`
URI) plus social brand icon links (hidden ≤575px). The header SHALL stick
to the top with a shadow on scroll.

#### Scenario: Header elements

- **GIVEN** the Faculty page is rendered
- **WHEN** the main header is inspected
- **THEN** the logo, the nav links Home/About/Programs/Blog/Contact, the
  phone text, and social icon links SHALL be present
- **AND** the Blog nav item SHALL reveal a submenu (Blog · Blog Details ·
  Elements)
- **AND** the phone SHALL be rendered as text only (no `tel:` link)

#### Scenario: Mobile nav

- **GIVEN** the page is rendered on a screen below the lg breakpoint
- **WHEN** the header is inspected
- **THEN** the desktop nav SHALL be hidden and a mobile menu control SHALL
  be available

### Requirement: Hero

The system SHALL render a 750px hero with a background photo under a dark
overlay (`rgba(50,64,77,0.3)`), left-aligned caption: eyebrow "EDUCATION &
SCHOOL", headline "SHOWCASE COURSES, EVENTS AND MORE!", a short paragraph,
and a solid green "Get Started Now" button.

#### Scenario: Hero content

- **GIVEN** the Faculty page is rendered
- **WHEN** the hero section is inspected
- **THEN** the hero SHALL be 750px tall with a photo background and dark
  overlay
- **AND** the eyebrow "EDUCATION & SCHOOL" SHALL appear above the headline
- **AND** the headline SHALL read "SHOWCASE COURSES, EVENTS AND MORE!"
- **AND** a green "Get Started Now" button SHALL link to the Programs
  section

### Requirement: About section

The system SHALL render the about section on a cream `#FCF2EB` background
as a two-column split: photo left, right side with the heading "A
comprehensive teaching approach", two paragraphs, and a green underline
"Learn More" link.

#### Scenario: About layout

- **GIVEN** the Faculty page is rendered
- **WHEN** the about section is inspected
- **THEN** the section SHALL have a cream `#FCF2EB` background
- **AND** a photo SHALL occupy the left column
- **AND** the right column SHALL show the heading "A comprehensive
  teaching approach", two paragraphs, and a "Learn More" underline link

### Requirement: Programs grid

The system SHALL render a centered "Programs we Offer" section with an
intro paragraph and a 2-column grid of two program cards (photo + title +
paragraph + "Learn More" link): "Faculty of Science" and "Faculty of Arts".

#### Scenario: Program cards

- **GIVEN** the Faculty page is rendered
- **WHEN** the programs section is inspected
- **THEN** the heading "Programs we Offer" SHALL be centered with an intro
  paragraph below
- **AND** two cards SHALL be shown side by side on desktop
- **AND** the first card SHALL be titled "Faculty of Science" and the
  second "Faculty of Arts"
- **AND** each card SHALL contain a photo, a short paragraph, and a
  "Learn More" underline link

### Requirement: Essential resources split

The system SHALL render the resources section on a mint `#F2FBF9`
background as a two-column split: left column with the heading "Essential
resources", an intro paragraph, and three stacked resource rows — "First
year students", "Tuition & fees", "International students" — each with a
short paragraph and a right-arrow icon link; right column a photo with a
cream overlay.

#### Scenario: Resource rows

- **GIVEN** the Faculty page is rendered
- **WHEN** the resources section is inspected
- **THEN** the section SHALL have a mint `#F2FBF9` background
- **AND** three resource rows SHALL appear in order: "First year
  students", "Tuition & fees", "International students"
- **AND** each row SHALL show a short paragraph and a right-arrow icon
  link
- **AND** a photo SHALL occupy the opposite column

### Requirement: Top Stories grid

The system SHALL render a full-width "Top Stories" section whose header row
holds the heading on the left and a "More Stories" underline link on the
right, followed by a 3-column grid of story cards (photo + centered title).
The three titles SHALL be distinct university-story headlines of the same
kind as the source's repeated "Linguistics alumna …" title.

#### Scenario: Story cards

- **GIVEN** the Faculty page is rendered
- **WHEN** the stories section is inspected
- **THEN** the section SHALL show "Top Stories" left and "More Stories"
  right in the same header row
- **AND** three story cards SHALL be shown in a row on desktop
- **AND** each card SHALL contain a photo and a centered title
- **AND** the three titles SHALL be distinct

### Requirement: Partners strip

The system SHALL render a centered "Our Partners" section (corrected from
the source typo "Our Pertners") with an intro paragraph and a row of at
least four partner logo images.

#### Scenario: Partner logos

- **GIVEN** the Faculty page is rendered
- **WHEN** the partners section is inspected
- **THEN** the heading "Our Partners" SHALL appear with an intro paragraph
- **AND** at least four partner logo images SHALL be displayed in a row

### Requirement: CTA band

The system SHALL render a green `#007A5C` full-width CTA band as a
two-column split: photo side with overlay, content side with white heading
"TRUSTED BY OVER 6000+ STUDENTS", two paragraphs, and a white underline
"Join Now" link.

#### Scenario: CTA content

- **GIVEN** the Faculty page is rendered
- **WHEN** the CTA section is inspected
- **THEN** the section SHALL have a green `#007A5C` background
- **AND** the heading "TRUSTED BY OVER 6000+ STUDENTS" SHALL be white
- **AND** two paragraphs and a white "Join Now" underline link SHALL be
  shown on the content side

### Requirement: Footer with newsletter and Component Dock attribution

The system SHALL render a dark navy `#32404D` footer with a logo column,
three link columns (Quick Links, Programs, Resources — corrected from the
source typo "Resourses"), a Newsletter column (intro line + email input +
green subscribe button), and a centered copyright bar reading "Copyright
©{current year} All rights reserved" plus the Component Dock attribution
linking `https://www.componentdock.com/` (replaces the source's ColorLib
attribution line per monorepo conventions).

#### Scenario: Footer columns

- **GIVEN** the Faculty page is rendered
- **WHEN** the footer is inspected
- **THEN** the footer SHALL have a dark navy `#32404D` background
- **AND** columns "Quick Links", "Programs", "Resources", and "Newsletter"
  SHALL be present with white 20px headings and `#A7AEB4` links
- **AND** the newsletter form SHALL contain an email input and a green
  submit button

#### Scenario: Copyright and attribution

- **GIVEN** the Faculty page is rendered
- **WHEN** the copyright bar is inspected
- **THEN** it SHALL show the current year and the words "All rights
  reserved"
- **AND** it SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock"
- **AND** no ColorLib reference SHALL appear anywhere in the app code

### Requirement: Design tokens and fidelity

The system SHALL implement the design tokens from the Design tokens
section: `#007A5C` green as the theme brand color, `#32404D` navy for
headings/dark bands, Chivo via Google Fonts `<link>` in `index.html`,
sharp-cornered buttons (solid green `btn_1` + green/white underline
`browse-btn`), the exact section order (announcement bar → header → hero →
about → programs → resources → stories → partners → CTA → footer +
back-to-top), and the white/cream/mint/green/navy band rhythm.

#### Scenario: Token application

- **GIVEN** the Faculty app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand color `#007A5C` SHALL be defined as a theme token and
  used by primary buttons, underline links, the CTA band, and the
  newsletter button
- **AND** `#32404D` SHALL be used for headings, the announcement bar, and
  the footer background
- **AND** Chivo SHALL be loaded via a Google Fonts link in `index.html`
- **AND** buttons SHALL be sharp-cornered (no border radius)
- **AND** the section order SHALL be: announcement bar → header → hero →
  about → programs → resources → stories → partners → CTA → footer →
  back-to-top

## Verification checklist

- [ ] `openspec/specs/template-faculty/spec.md` — Gherkin scenarios above
      map 1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (announcement bar → header →
      hero → about → programs → resources → stories → partners → CTA →
      footer + back-to-top); tokens `#007A5C` / `#32404D` / `#FCF2EB` /
      `#F2FBF9` / `#00AC82`; Chivo font; sharp buttons; underline link
      style (2px `::before` bar, hover letter-spacing 1px); countdown
      numbers `#00AC82` on `#32404D` bar.
- [ ] Placeholder images: `https://picsum.photos/seed/faculty-<n>/<w>/<h>`
      (deterministic per template). Subject-critical photos: hero (student
      with folder outside a building — dark scene works under the overlay),
      about portrait (woman), programs photos, story photos, resources
      photo — screen seeds per the seed-screening method in the
      colorlib-template-replication skill before committing.
- [ ] Icons: lucide-react (ChevronRight, ChevronUp, Send/Paperplane,
      Menu for mobile); social brand icons (Facebook, X/Twitter, LinkedIn,
      YouTube, Instagram) as inline SVG paths (lucide removed brand icons —
      verify every import with the typeof probe).
- [ ] Countdown timer: live countdown to a fixed future target (e.g.
      ~30 days from load), testable with fake timers; units Days/Hours/
      Minutes/Seconds with labels.
- [ ] Source typos fixed silently in the recreation: "Our Pertners" →
      "Our Partners", "Resourses" → "Resources"; the 3 identical story
      titles paraphrased into distinct headlines.
- [ ] Phone "Call Us : 0 (78) 675 3674" as plain text — NO literal `tel:`
      URI anywhere in source (secret-scan redaction trap; see replication
      skill).
- [ ] Footer MUST link `https://www.componentdock.com/` ("Component
      Dock") and MUST NOT reference ColorLib in any app file (provenance
      only in this spec / TEMPLATES.md / PR).
- [ ] Newsletter input: white 60px square input + green `#007A5C` submit
      button (radius 0). Form submit → success state (per error-handling
      conventions).
- [ ] Sticky header: sticks on scroll with `0 10px 15px
    rgba(25,25,25,0.1)` shadow; back-to-top circular green button
      bottom-right.
- [ ] 100% coverage lines/functions/branches/statements;
      `scripts/verify-app.sh faculty` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Universityedu), preview
      URL (`https://preview.colorlib.com/theme/universityedu/`), design
      tokens used, what differs (renames, placeholder images, paraphrased
      copy, fixed source typos).
