# Template: Curale (Bootstrap / Medical Clinic)

## Purpose

Curale is a single-page medical-clinic website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Medino" website template
(source: https://colorlib.com/wp/template/medino/), built under a DIFFERENT
name (Curale — a coined name evoking "cura" (Latin: care / treatment) + the
medical-clinic feel; single lowercase word, no collision with `apps/`,
`openspec/specs/` or `docs/templates/` — verified 2026-08-11) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-11): the official preview
> `https://preview.colorlib.com/theme/medino/` is REACHABLE (HTTP 200,
> ~30.8 KB HTML + `assets/css/style.css` ~43 KB, curl verified) and was
> analyzed directly. The TEMPLATES.md screenshot (`medino-free-template.jpg`,
> 1200×946, viewed in browser) matches the live render's header/hero 1:1
> (the screenshot only shows the top bar, nav and hero — the lower sections
> were verified from the live DOM + CSS instead).

## Design reference (replication findings)

- **Original:** ColorLib "Medino" — a free medical / clinic website template
  based on Bootstrap 4. Category in TEMPLATES.md: **Bootstrap (216)**
  (line 449; the slug also appears in a second category section at line
  2252 — a dup row, both unprepped and unshipped). The recreation brands
  itself **Curale** but keeps the same section structure, copy kinds and
  design tokens.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/medino/` (HTTP 200, ~30.8 KB HTML).
  Section order (1:1, in order):
  1. `header.header-area` — **top info bar** (`.header-top`, white
     `rgba(255,255,255,0.8)`, absolute at top, hidden below 768px): "call us
     now! +1 305 708 2563" · "medical@example.com" · "Find our Location"
     (left) + social icons facebook/linkedin/twitter/instagram/vimeo
     (right, `#777`, hover `#244cfd`). Below it the **main nav** (`#header`,
     fixed, top 48px): logo h1 "Medino" (Ubuntu 700, 34px, `#fff`, letter-
     spacing 3px, left 4px solid `#244cfd` border) + nav links HOME,
     DEPARTMENTS, DOCTORS, PAGES (dropdown: about us, elements), BLOG
     (dropdown: blog home, blog details), CONTACT (12px uppercase `#222`,
     weight 500, hover `#244cfd`); on scroll `#header.header-scrolled` gets
     `background: #f9f9fd`, top 0. Mobile (<960px): hamburger + slide-in
     `#mobile-nav` (dark `rgba(0,0,0,0.8)`, white 13px uppercase links,
     active item `#244cfd`).
  2. `section.banner-area` — full-width background image (`banner-bg.jpg`,
     cover/center, `padding: 400px 0 350px` → 280/250/200px responsive).
     Left column: **h4 "Caring for better life"** · **h1 "Leading the way in
     medical excellence"** (Ubuntu 700, 45px, `#222`) · p (Lorem copy, `#777`)
     · `template-btn` **"take appointment"** (gradient). No h1/h4/p color
     override in the CSS — defaults (`#222` headings, `#777` body) apply
     over the light photo.
  3. `section.feature-area section-padding` — 4 features in a row
     (`col-lg-3`): **advance technology** · **comfortable place** ·
     **quality equipment** · **friendly staff** — each `.single-feature`
     (bg `#f9f9fd`, radius 5px, hover → white + shadow
     `0 5px 20px rgba(0,0,0,0.1)`) with icon img (margin-bottom 40px) + h3
     - p.
  4. `section.welcome-area section-padding3` — split: left `.welcome-img`
     (welcome.png, `width: 120%`, z-1), right `.welcome-text`
     (**padding 100px, `border: 10px solid #f9f9f9`**): **h2 "Welcome to our
     clinic"** + two paragraphs (Lorem) + `template-btn` **"learn more"**.
  5. `section.department-area section-padding4` (bg `#f9f9fd`) — section
     top: **h2 "Popular department"** + p. Owl-carousel of `.single-slide`
     (4 slides, images department1–3 + department1 repeated): **cardiac
     clinic** · **plastic surgery** · **dental clinic** — `.slide-img`
     (radius 5px, overflow hidden) with `.hover-state` overlay
     `rgba(1,2,14,0.4)` + 50px white icon on hover; `.item-padding` white
     bg, padding 40px, hover shadow.
  6. `section.patient-area section-padding` — section top: **h2 "Patient are
     saying"** + p. Two testimonial cards `.single-patient` (bg `#f9f9fd`,
     padding 40px 80px 20px 40px, margin-top 90px, hover → white + shadow):
     round avatar 100×100 (radius 50%, margin-top **-90px**) + h3 name
     ("daren jhonson" / "black heiden") + h6 role ("hp specialist") + p.
     Right column (col-lg-5 offset-lg-1): `.appointment-form` (bg image
     `patient.jpg` cover + **gradient overlay `linear-gradient(to top right,
rgba(21,228,253,0.9), rgba(36,76,253,0.9))`** via `::after`, padding 80px,
     decorative `::before` frame `border: 10px solid #f9f9f9` top -5% right
     -30%): **h3 white 24px "appointment now"** + form fields **Your Name**
     (text, required) · **Your Email** (email, required) · **Date**
     (text + jquery datetimepicker → recreate as native `<input
type="date">`) · **Message** (textarea, 7 rows) · `template-btn`
     full-width "appointment now". Inputs: width 100%, padding 12px 20px,
     border none.
  7. `section.specialist-area section-padding` (bg `#f9f9fd`) — section
     top: **h2 "Our specialish"** (sic, source typo — recreation may fix to
     "Our Specialists") + p. 4 doctor cards `.single-doctor` (col-lg-3):
     `.doctor-img` (photo) + `.content-area` (shadow
     `0 0 5px rgba(0,0,0,0.1)`): `.doctor-name` (bg `#f9f9fd`, padding 20px,
     hover → **gradient** + white text) with **h3 name** ("ethel davis" ·
     "dand mories" · "align board" · "jeson limit") + **h6 role**
     ("sr. faculty data science" / "sr. faculty plastic surgery");
     `.doctor-text` (white bg, padding 20px, blurb + `.doctor-icon` social
     links `#777`, hover `#244cfd`).
  8. `section.hotline-area text-center section-padding` — bg image
     (`hotline-bg.jpg` cover) + **gradient overlay** (`linear-gradient(to
top right, rgba(36,76,253,0.9), rgba(21,228,253,0.9))` via `::after`):
     **h2 white "Emergency hotline"** · span phone **"(+01) – 256 567 550"**
     (Roboto 900, 56px, white → 45px responsive) · p "We provide 24/7
     customer support. Please feel free to contact us for emergency case."
  9. `section.news-area section-padding` — section top: **h2 "Recent medical
     news"** + p. 3 news cards `.single-news`: image + `.news-date` badge
     (bg `#244cfd`, white, padding 12px 30px, **top -25px left 30px**):
     "22 July 2018" · "22 Oct 2018" · "22 Sep 2018"; **h3 a titles** ("chip
     to model coeliac disease" · "Galectins An Ancient FaSi Future" ·
     "Getting the Most Out of the CLARI…") + p + `.news-btn` **"read more"**
     (uppercase 12px `#222`, arrow `i` slides right on hover, hover
     `#244cfd`).
  10. `footer.footer-area section-padding` (bg **`#12151f`**, white text) —
      three columns: **"top products"** (links: managed website, managed
      reputation, power tools, marketing service) · **"newsletter"**
      (input width 250px radius 3px padding 10px 20px + `template-btn`
      170px "subscribe now"; copy "You can trust us. we only send promo
      offers, not a single.") · **"instagram feed"** (8 imgs 55×55, margin
      5px). Below: `.footer-copyright` (margin-top 70px): "© All rights
      reserved | This template is made with by **Colorlib**" (.color
      `#244cfd`) + social icons (40×40 white circle bg, hover gradient).
- **Visual design (TEMPLATES.md screenshot `medino-free-template.jpg`,
  1200×946, viewed in browser 2026-08-11):** clean, clinical, trustworthy.
  White/very-light-grey backgrounds, dark-grey/black headings, a vibrant
  professional blue accent for the logo cross, CTA and interactive elements.
  Top info bar (contact info left, social icons right), main nav with logo +
  dropdowns (PAGES, BLOG). Hero is a split layout: left = tagline "Caring
  for better life" (small grey), headline "Leading the way in medical
  excellence" (large bold sans), body text, solid blue "TAKE APPOINTMENT"
  button (white uppercase text, slightly rounded); right = close-up photo of
  a doctor in a white coat with a stethoscope. Modern airy sans-serif
  typography (Roboto-like body, bold headings). The screenshot is cropped at
  the hero — lower sections confirmed via live DOM/CSS.
- **Design tokens extracted from the live CSS (`assets/css/style.css`,
  verified 2026-08-11):**
  - **Brand gradient: `linear-gradient(to right, #244cfd, #15e4fd)`** —
    the signature (`.template-btn` bg, hover states, `.hotline-area:after`,
    `.appointment-form:after`, `.doctor-name` hover, footer social hover,
    blog widget headers).
  - **Brand blue `#244cfd`** — news-date badge bg, link hovers, logo left
    border, `.footer-copyright .color`, mobile-nav active item, spinner.
  - **Cyan `#15e4fd`** — gradient end.
  - Accent yellow `#f8b600` / `#f4e700` — generic button variants, list
    bullets, `b,sup,sub,u,del` text color.
  - **Headings `#222`** (Ubuntu 700: h1 45px, h2 36px, h3 18px uppercase,
    h4 16px weight 400) · **body `#777`** (Roboto 400, 15px).
  - Section backgrounds: **white**, `#f9f9ff` (feature card bg, generic
    inputs), **`#f9f9fd`** (department/specialist/patient card bgs,
    doctor-name, header-scrolled).
  - **Footer `#12151f`** (dark navy-black, white text).
  - Fonts: **'Ubuntu', sans-serif** (headings, 400/500/700) +
    **'Roboto', sans-serif** (body, 300/400/500/700/900). Google Fonts
    import: `family=Roboto:300,400,500,700,900` + `family=Ubuntu:400,500,700`.
  - **Buttons `.template-btn`**: gradient bg, `#fff` 12px uppercase Roboto,
    padding 12px 30px, hover opacity .8. `.news-btn`: `#222` 12px uppercase
    weight 500, arrow slides right on hover.
  - Cards: **radius 5px** (single-feature, slide-img); hover shadow
    `0 5px 20px rgba(0,0,0,0.1)`; content-area shadow `0 0 5px rgba(0,0,0,0.1)`.
  - Section padding: **130px 0** (`.section-padding`); welcome
    `.section-padding3` (padding-bottom 130px); department
    `.section-padding4` (130px 0 200px); `.section-top` margin-bottom 80px.
  - `.welcome-text`: padding 100px, `border: 10px solid #f9f9f9`.
  - Patient avatar: 100×100 circle, margin-top -90px.
  - `.news-date`: `#244cfd` bg, white, padding 12px 30px, top -25px left 30px.
  - `.hotline-area span`: Roboto 900, 56px (45px ≤768px), white.
  - Appointment form: bg image + `linear-gradient(to top right,
rgba(21,228,253,0.9), rgba(36,76,253,0.9))` overlay; inputs width 100%,
    padding 12px 20px, border none.
  - Footer input: 250px wide, radius 3px, padding 10px 20px; footer
    `template-btn` 170px; footer imgs 55×55.
- **KEY DIFFERENCES vs other medical preps — do NOT copy:** Medico
  (shipped, `apps/medico`) is a different layout/palette; Medicalcenter →
  Clinica prep (`template-clinica`) is a different design. Curale is the
  **blue-cyan-gradient clinic** variant: Ubuntu+Roboto fonts, `#244cfd →
#15e4fd` gradient CTAs, `#f9f9fd` card sections, dark `#12151f` footer
  with newsletter + Instagram feed, emergency-hotline band, appointment
  form with gradient overlay.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-4
  grid (NO Bootstrap dependency). The owl-carousel department slider and
  jquery datetimepicker are NOT carried over — departments render as a
  static 4-column grid and Date is a native `<input type="date">`
  (documented simplification; the slider was only used on desktop, slides
  repeat images). The sticky header keeps the scrolled state (`#f9f9fd` bg
  once scrolled). Placeholder images via
  `https://picsum.photos/seed/curale-<n>/<w>/<h>` (banner, welcome, 4 dept,
  2 patients, 4 doctors, 3 news, 8 feed thumbs — source images must NOT be
  copied). Fonts Ubuntu 400/500/700 + Roboto 300–900 via Google Fonts
  `<link>` in `index.html`. Icons from lucide-react; brand social icons in
  the top bar and footer use inline SVGs (lucide removed brand icons) —
  facebook, linkedin, twitter/x, instagram, vimeo. The appointment form
  validates (name, email, date required) and shows a success message
  (documented interactive addition — the original is a static demo); the
  newsletter input validates email and confirms subscription. Section
  heading "Our specialish" (source typo) may be fixed to "Our Specialists".
  Brand "Medino" → "Curale" everywhere; document title "Curale — Medical
  Clinic Template".

Curale lives in `apps/curale` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Top info bar and sticky navigation header

The system SHALL render a top info bar (contact info left, social icons
right, white translucent bg, hidden below 768px) above a fixed main nav with
logo and dropdown menus, matching the source structure.

#### Scenario: Top bar with contact info and social icons

- **GIVEN** the Curale page is rendered on a viewport ≥768px
- **WHEN** the page loads
- **THEN** a top bar SHALL show "call us now! +1 305 708 2563",
  "medical@example.com" and "Find our Location" on the left
- **AND** social icon links (facebook, linkedin, twitter, instagram, vimeo)
  SHALL appear on the right in `#777` with a `#244cfd` hover
- **AND** the top bar SHALL have a white translucent
  `rgba(255,255,255,0.8)` background
- **AND** the top bar SHALL be hidden on viewports narrower than 768px

#### Scenario: Fixed nav with logo, links and dropdowns

- **GIVEN** the Curale page is rendered
- **WHEN** the page loads
- **THEN** a fixed header SHALL show the brand "Curale" (bold uppercase
  style, left accent border in `#244cfd`)
- **AND** nav links SHALL read Home, Departments, Doctors, Pages, Blog,
  Contact (12px uppercase, `#222`, hover `#244cfd`)
- **AND** Pages SHALL have a dropdown with "about us" and "elements"
- **AND** Blog SHALL have a dropdown with "blog home" and "blog details"
- **AND** when the page is scrolled, the header SHALL switch to a
  `#f9f9fd` background

### Requirement: Full-width hero banner

The system SHALL render a full-width hero with a cover background image,
headline stack and a gradient CTA button.

#### Scenario: Hero content and CTA

- **GIVEN** the Curale page is rendered
- **WHEN** the hero section is displayed
- **THEN** a tagline h4 "Caring for better life" SHALL appear above the
  headline
- **AND** an h1 "Leading the way in medical excellence" (Ubuntu 700, ~45px,
  `#222`) SHALL appear
- **AND** a short paragraph (Lorem copy) SHALL appear below
- **AND** a "take appointment" button SHALL appear using the brand gradient
  `#244cfd → #15e4fd` with white uppercase text
- **AND** the section SHALL use a cover-positioned background image with
  large vertical padding (~400px top / 350px bottom on desktop)

### Requirement: Four feature cards

The system SHALL render four feature cards (icon, title, text) in a row on
`#f9f9fd` cards with 5px radius and a hover lift.

#### Scenario: Feature cards row

- **GIVEN** the Curale page is rendered
- **WHEN** the features section is displayed
- **THEN** four cards SHALL appear in a single row on desktop (2×2 on
  tablet, stacked on mobile)
- **AND** the cards SHALL read "advance technology", "comfortable place",
  "quality equipment" and "friendly staff"
- **AND** each card SHALL contain an icon image, an h3 title and a
  paragraph
- **AND** each card SHALL have a `#f9f9fd` background with 5px border
  radius
- **AND** hovering a card SHALL switch it to white with a soft shadow

### Requirement: Welcome section with framed text panel

The system SHALL render a split welcome section with an image on one side
and a thick-bordered text panel on the other.

#### Scenario: Welcome split layout

- **GIVEN** the Curale page is rendered
- **WHEN** the welcome section is displayed
- **THEN** an image SHALL appear on one side (wider than its column,
  overlapping into the text side)
- **AND** a text panel SHALL appear on the other side with padding ~100px
  and a 10px solid `#f9f9f9` border
- **AND** the panel SHALL contain an h2 "Welcome to our clinic", two
  paragraphs and a "learn more" gradient button

### Requirement: Department cards with hover overlay

The system SHALL render a "Popular department" section with department
cards (image, hover overlay, title) in a grid.

#### Scenario: Department grid with hover state

- **GIVEN** the Curale page is rendered
- **WHEN** the departments section is displayed
- **THEN** the section SHALL have a `#f9f9fd` background and an h2 "Popular
  department" with a subtitle paragraph
- **AND** four department cards SHALL appear (cardiac clinic, plastic
  surgery, dental clinic, cardiac clinic — source repeats the first image)
- **AND** each card SHALL contain a rounded (5px) image with a white text
  panel below
- **AND** hovering a card SHALL reveal a dark overlay
  (`rgba(1,2,14,0.4)`) with a large white icon centered on the image
- **AND** hovering SHALL also add a soft shadow to the card

### Requirement: Patient testimonials and appointment form

The system SHALL render two testimonial cards with overlapping round avatars
plus a gradient-overlay appointment form with validated fields.

#### Scenario: Testimonial cards

- **GIVEN** the Curale page is rendered
- **WHEN** the patients section is displayed
- **THEN** an h2 "Patient are saying" with a subtitle SHALL appear
- **AND** two testimonial cards SHALL appear, each with a round 100px
  avatar that overlaps the card's top edge (negative top margin), a name
  (h3), a role (h6, e.g. "hp specialist") and a quote paragraph
- **AND** the cards SHALL have a `#f9f9fd` background that turns white with
  a soft shadow on hover

#### Scenario: Appointment form with validation

- **GIVEN** the Curale page is rendered
- **WHEN** the appointment form is displayed
- **THEN** the form SHALL sit on a background image covered by a
  blue-cyan gradient overlay (`rgba(21,228,253,0.9)` → `rgba(36,76,253,0.9)`)
- **AND** a white h3 "appointment now" SHALL head the form
- **AND** fields SHALL be present: Your Name (text, required), Your Email
  (email, required), Date (native date input, required), Message (textarea)
- **AND** a full-width "appointment now" gradient button SHALL submit the
  form
- **AND** submitting with empty required fields SHALL show validation
  messages and NOT submit
- **AND** submitting a valid form SHALL show a success message

### Requirement: Specialist doctor cards

The system SHALL render four doctor cards with name/role bars that turn
gradient on hover.

#### Scenario: Doctor cards grid

- **GIVEN** the Curale page is rendered
- **WHEN** the specialists section is displayed
- **THEN** the section SHALL have a `#f9f9fd` background and an h2 ("Our
  Specialists" — source typo "Our specialish" fixed) with a subtitle
- **AND** four doctor cards SHALL appear in a row on desktop
- **AND** each card SHALL show a photo, a name (h3), a role (h6, e.g.
  "sr. faculty data science"), a blurb and social icon links
- **AND** the name bar SHALL have a `#f9f9fd` background that switches to
  the brand gradient with white text on hover

### Requirement: Emergency hotline band

The system SHALL render a full-width hotline band with a background image,
gradient overlay, heading, large phone number and support copy.

#### Scenario: Hotline band content

- **GIVEN** the Curale page is rendered
- **WHEN** the hotline section is displayed
- **THEN** the section SHALL show a cover background image under a
  blue-cyan gradient overlay
- **AND** a white h2 "Emergency hotline" SHALL appear
- **AND** a large phone number "(+01) – 256 567 550" SHALL appear in white
  Roboto 900 (~56px, ~45px on mobile)
- **AND** the copy "We provide 24/7 customer support. Please feel free to
  contact us for emergency case." SHALL appear

### Requirement: Recent medical news cards

The system SHALL render three news cards with a blue date badge overlapping
the image, a title link and a "read more" link with a sliding arrow.

#### Scenario: News cards with date badges

- **GIVEN** the Curale page is rendered
- **WHEN** the news section is displayed
- **THEN** an h2 "Recent medical news" with a subtitle SHALL appear
- **AND** three news cards SHALL appear, each with an image
- **AND** each card SHALL have a `#244cfd` date badge (white text, e.g.
  "22 July 2018", "22 Oct 2018", "22 Sep 2018") overlapping the image's
  bottom-left (offset up 25px, left 30px)
- **AND** each card SHALL have an h3 title link (`#222`, hover `#244cfd`)
  and a paragraph
- **AND** a "read more" link SHALL appear with an arrow that slides further
  right on hover

### Requirement: Dark footer with newsletter and Instagram feed

The system SHALL render a dark `#12151f` footer with a links column, a
newsletter signup and an Instagram feed grid, plus a copyright bar with
social icons.

#### Scenario: Footer columns and newsletter

- **GIVEN** the Curale page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a `#12151f` background with white text
- **AND** a "top products" column SHALL list links: managed website,
  managed reputation, power tools, marketing service
- **AND** a "newsletter" column SHALL contain a text input (rounded) and a
  "subscribe now" gradient button with reassurance copy ("You can trust us.
  we only send promo offers, not a single.")
- **AND** subscribing with an invalid email SHALL show a validation
  message; a valid email SHALL show a confirmation

#### Scenario: Instagram feed and copyright bar

- **GIVEN** the Curale page is rendered
- **WHEN** the footer is displayed
- **THEN** an "instagram feed" column SHALL show a grid of eight small
  square images (55×55)
- **AND** a copyright bar SHALL read "© All rights reserved | This template
  is made with by Curale" with the brand accent color on "Curale"
- **AND** social icon buttons (40×40 white circles) SHALL appear, turning
  gradient with white icons on hover

### Requirement: Mobile stacking and hamburger nav

The system SHALL collapse the grid rows to single columns and swap the nav
for a hamburger + slide-in panel below the source breakpoints.

#### Scenario: Responsive behavior

- **GIVEN** the Curale page is rendered on a viewport narrower than 992px
- **WHEN** the page is displayed
- **THEN** the top info bar SHALL be hidden
- **AND** a hamburger toggle SHALL open a dark slide-in navigation panel
  with the same links (uppercase white text)
- **AND** the 4-column feature, doctor and news grids SHALL stack to
  single-column (or 2-column at tablet) layouts
- **AND** the hero padding SHALL reduce (≤250px vertical)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-curale`
- [ ] `scripts/verify-app.sh curale` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: header (top bar + fixed nav) → banner hero →
      features (4) → welcome (image + framed panel) → departments (4) →
      patients (2 testimonials) + appointment form → specialists (4
      doctors) → hotline band → news (3) → footer (products /
      newsletter / Instagram feed + copyright bar)
- [ ] Brand gradient `#244cfd → #15e4fd` in `@theme` and used for
      `.template-btn` buttons, doctor-name hover, hotline/appointment
      overlays, footer social hover
- [ ] Brand blue `#244cfd` (news date badge, link hovers, logo accent,
      footer copyright accent) as a theme token
- [ ] Ubuntu (400/500/700 headings) + Roboto (300–900 body) via Google
      Fonts `<link>`s in `index.html`
- [ ] Headings `#222` (h1 45px / h2 36px / h3 18px uppercase), body `#777`
      Roboto 15px
- [ ] Section backgrounds: white, `#f9f9fd` (departments/specialists/
      patient cards), footer `#12151f`; section padding 130px 0
- [ ] Hero: cover bg image, h4 tagline, h1 headline, p, "take appointment"
      gradient button
- [ ] Features: 4 cards (advance technology / comfortable place / quality
      equipment / friendly staff), `#f9f9fd` bg radius 5px, hover white +
      shadow
- [ ] Welcome: image side + framed panel (padding 100px, 10px `#f9f9f9`
      border) with h2 + 2 paragraphs + "learn more"
- [ ] Departments: `#f9f9fd` bg, 4 cards (cardiac clinic / plastic surgery
      / dental clinic), image hover overlay `rgba(1,2,14,0.4)` + white icon,
      white text panel (static grid replaces the owl slider — documented)
- [ ] Patients: 2 testimonials with 100px round avatars overlapping the
      card top (-90px), `#f9f9fd` → white on hover
- [ ] Appointment form: bg image + `rgba(21,228,253,0.9) →
    rgba(36,76,253,0.9)` gradient overlay, white h3, Name/Email/Date/
      Message fields (native date input), full-width gradient submit,
      validation + success message
- [ ] Specialists: `#f9f9fd` bg, 4 doctor cards, name bar `#f9f9fd` →
      gradient on hover, social links; "Our Specialists" heading
- [ ] Hotline: bg image + gradient overlay, h2 + phone (Roboto 900 56px) +
      support copy
- [ ] News: 3 cards, `#244cfd` date badge overlapping image (top -25px
      left 30px), title links, "read more" with sliding arrow
- [ ] Footer: `#12151f`, top products links, newsletter (validated email +
      confirmation), Instagram feed 8×55px thumbs, copyright bar with
      accent-colored brand + 40px white social circles → gradient hover
- [ ] Mobile: top bar hidden <768px, hamburger slide-in nav <992px, grids
      stack, hero padding reduced
- [ ] Placeholder images via `picsum.photos/seed/curale-<n>/<w>/<h>`,
      icons from lucide-react (brand icons as inline SVGs), no copied
      assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time
