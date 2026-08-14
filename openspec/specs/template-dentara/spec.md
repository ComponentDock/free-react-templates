# Template: Dentara (Dental Clinic)

## Purpose

Dentara is a dental-clinic website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Toothcare"
design (see TEMPLATES.md, Bootstrap 5 (89) category — also listed under
Dentist (14); appears 2× in TEMPLATES.md, rows 630 + 1514, same slug), built
under a DIFFERENT name — **Dentara** (a coined name evoking "dental" +
"-ara", squarely in the dental-clinic domain of the source; single lowercase
word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
TEMPLATES.md — verified 2026-08-14) per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a bright cyan medical landing page: a top utility strip
(hours / phone / location), a light navbar with a cyan "Make An Appointment"
CTA, a full-height two-slide photo hero with a cyan-on-white button pair, a
solid-cyan appointment form split against a "We Offer Best Dental Services"
panel with three icon features, an 8-card services grid on a light background,
a clinic welcome split with animated counters (3000 / 2200 / 24), a 4-doctor
team grid, a parallax "make an appointment today!" CTA band with a cyan
overlay, a testimonial slider, a "Result of our Treatment and Work" patient
story grid, a 3-post blog strip, a 4-plan pricing row, and a photo footer
washed with a cyan gradient overlay. Dentara recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

> NOTE (prep-stream 2026-08-14): the official preview
> `https://preview.colorlib.com/theme/toothcare/` is LIVE — fetched HTTP 200
> (~71 KB HTML + `css/style.css` ~83 KB + animate.css + aos.css +
> datepicker.min.css + flaticon.css + glightbox.min.css + tiny-slider.css +
> ionicons + font-awesome, curl-verified) and analyzed for this prep. The
> TEMPLATES.md screenshot (`toothcare-free-template.jpg`, 1200×946) was also
> converted (AVIF container) and viewed in a browser; it shows the white
> navbar with the cyan CTA, the full-height hero photo of dental staff with
> the white headline and cyan "MAKE AN APPOINTMENT" + white "LEARN MORE"
> buttons, and the cyan appointment-form split with the "Easy Booking" /
> "Team Dentist" feature cards — matching the live render (below-the-fold
> sections were captured from the live DOM + CSS).

## Design reference (replication findings)

- **Original:** ColorLib "Toothcare" — free Bootstrap 5 dental clinic
  website template (source: https://colorlib.com/wp/template/toothcare/;
  `<title>` "Toothcare - Free Bootstrap 5 Template by Colorlib"). The
  recreation brands itself **Dentara** but keeps the same section structure,
  heading copy kinds, and card set.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/toothcare/` (HTTP 200, ~71 KB HTML +
  `css/style.css` ~83 KB + animate.css + aos.css + datepicker.min.css +
  flaticon.css (line icons) + glightbox.min.css + tiny-slider.css +
  ionicons/font-awesome icon fonts). Single-page document; section order
  (1:1):
  1. **Top utility strip** — `.top-wrap` (light): LEFT `navbar-brand`
     "Toothcare" + `<span>` "Dental Clinic Services"; then 3 `.con` info
     blocks with flaticon icons (`.flaticon-clock` Monday - Friday /
     **8:00AM-8:00PM**; `.flaticon-telephone` Call Us / **+2 392 3929 210**;
     `.flaticon-pin` Location / **San Francisco, California, USA**) — each
     `span` label + `strong` value, hidden on small screens.
  2. **Navbar** — `.ftco-navbar-light` (CSS `background: #ebebeb`; scrolled
     state `#00cae3`): brand + links **Home · Dentist · About · Services ·
     Pricing · Blog · Contact** (active link cyan `#00bcd4`), RIGHT `.btn-
custom` — UPPERCASE 13px/700 cyan `#00bcd4` pill-less button
     (padding 1.5rem, radius 0, white text) "**Make An Appointment**";
     hamburger toggler on mobile.
  3. **Hero slider** — `.slider-hero` (100vh, tiny-slider `tns`, 2 slides,
     dot nav bottom-center: 10px circles, active cyan). Each slide:
     `.work .img` full-height photo bg (`images/bg_1.jpg` / `bg_2.jpg`,
     `background-size: cover`) with a `:after` overlay `#111111` opacity .1
     on the LEFT 50% only; text left-aligned: h1 60px/400 WHITE with a
     `<span>` in cyan `#00bcd4` — slide 1 "Dentist Services that You Can
     Trust", slide 2 "A Brighter Dental Experienced"; copy paragraph
     (blind-text); buttons: `btn btn-primary p-4 py-3` (cyan solid) "See
     Our Services" / "Make An Appointment" + `btn btn-white p-4 py-3`
     (white bg, cyan text) "View Course" (screenshot renders this secondary
     button as "LEARN MORE" — paraphrasing to "Learn More" is fine).
  4. **Appointment + services split** — `.ftco-section.ftco-no-pt.ftco-no-
pb`, `container-xl` > `row g-xl-5`: LEFT `col-md-6`: `form.appointment`
     — SOLID CYAN `#00bcd4` card (padding 30px): subheading "We Are Here
     For You" + h2 "Make An Appointment"; fields in a 2-col row (form-
     control = transparent bg, bottom-border only, white 70% text, radius
     0): **Your Full Name**, **Email**, **Your Phone Number**, **Appointment
     Date** (`arrival_date` — datepicker), **Appointment Time**, **Select A
     Doctor** dropdown (Dr. Lloyd Wilson · Dr. Rachel Parker · Dr. Ian
     Smith · Dr. Alicia Henderson · Dr. Robert Johnson · Dr. Blake Wood),
     **Message** textarea (full width), submit `btn btn-white py-3 d-block
rounded` "**Send message**" (white bg, cyan text). RIGHT `col-md-6`
     heading-section: subheading "Learn Anything" + h2 "We Offer Best
     Dental Services" + 3 stacked `.services` items (flaticon icon circle +
     h2 + blurb): **Easy Booking** (flaticon-booking), **Team Dentist**
     (flaticon-dentist), **Best Price Guarantee** (flaticon-offer).
  5. **Services grid** — `.ftco-section.bg-light`: subheading "Services" +
     h2 "Toothcare Services" + 8 `.services-2` cards (`col-md-6 col-lg-3`,
     `text-center`, AOS flip-right): **Tooth Protection** (flaticon-tooth),
     **Dental Implants** (flaticon-crown), **Dental Care**
     (flaticon-dental-care), **Teeth Whitening** (flaticon-tooth-),
     **Dental Caculus** (flaticon-calculus — source typo; footer spells
     "Dental Calculus" — use the corrected spelling), **Tooth Removal**
     (flaticon-removal), **Removal of Tartar** (flaticon-calculus),
     **Tooth Inspection** (flaticon-dental-care-1); each card: line-icon
     - h2 title + blurb (blind text).
  6. **Welcome / clinic split** — `.ftco-section.ftco-no-pt.ftco-no-pb`:
     subheading "Welcome to our Dental Clinic" + h2 "Toothcare is a Dental
     Clinic and Innovative Approach to Treatment" + copy + image
     (`images/about.jpg`) + `.section-counter` row (3 `counter-wrap-2`
     items, flaticon icon + countup number + caption): **3000 Happy
     Patients** (flaticon-affection), **2200 Performed Treatments**
     (flaticon-gum), **24 Year of Experienced** (flaticon-calendar).
  7. **Team** — `.ftco-section`: subheading "Our Doctors" + h2 "Qualified
     Dentist" + 4 `.staff` cards (`images/doc-1..4.jpg`): **Dr. Lloyd
     Wilson** (Head Dentist), **Dr. Rachel Parker**, **Dr. Ian Smith**,
     **Dr. Alicia Henderson** (Dentist) — portrait + name + role.
  8. **Parallax CTA band** — `.ftco-intro-2.img` (bg `images/bg_1.jpg` +
     `.overlay` solid cyan `#00bcd4` opacity .8): subheading "Book your
     appointment" + h1 (30px/700 white) "Do not wait make an appointment
     today!" + `btn btn-primary` "**Make An Appointment**".
  9. **Testimonials** — `.testimony-section`: subheading "Testimonial" +
     h2 "Happy Customers" + tiny-slider (bar dots: 30px × 2px, active
     cyan): slides of quote text + name **Roger Scott** — role "Marketing
     Manager" (portraits `person_1..4.jpg`).
  10. **Patient stories** — `.ftco-section.ftco-no-pb.bg-light`: subheading
      "Stories" + h2 "Result of our Treatment and Work" + 4 `.result-wrap`
      cards (`result-1..4.jpg`): caption "France, 28 years" + name h3
      (John Johnson · Leah Tylor · Mary Johnson · Beatrice Schwarzenegger).
  11. **Blog** — `.ftco-section`: subheading "Our Blog" + h2 "Recent From
      Blog" + 3 cards (`image_1..3.jpg`): meta "Admin · Jan. 20, 2021 · 3
      Comments" + h3 title — source shows the SAME title on all three
      ("How to keep your teeth always in the best condition"); vary the
      titles per the fidelity content-kind rule.
  12. **Pricing** — `.ftco-section`: subheading "Our Pricing" + h2 "Pricing
      &amp; Packages" (`<span>` cyan) + 4 `.block-7` plans
      (`col-md-6 col-lg-3`, AOS fade-up 100-400): **Basic Plan $50** ·
      **Beginner Plan $79** · **Premium Plan $89** · **Ultimate Plan $99**
      — each: `excerpt` name, `price` `$` + number, 6-feature list with
      arrow glyphs (Diagnostic Services · Professional Consultation · Tooth
      Implants · Surgical Extractions · Teeth Whitening · Teeth Cleaning),
      `btn btn-primary d-block px-2 py-3` "**Get Started**".
  13. **Footer** — `.ftco-footer.img` (bg `images/bg_1.jpg` + `.overlay`
      linear-gradient(45deg, `#00bcd4` 0%, `#65c4cf` 100%) opacity .9,
      white text): 4 widget columns — **About** (brand "Toothcare / Dental
      Clinic Services" + blurb + circular social icons on translucent
      white), **Services** (Tooth Protection · Dental Implants · Dental
      Care · Teeth Whitening · Dental Calculus), **Quick Links** (Home ·
      About · Services · Dentists & Conditions · Blog · Contact), **Recent
      Posts** (3 items: Jan. 18, 2021 · Admin · "Creativity and
      Inspiration"); plus a "**Have a Questions?**" contact block (203 Fake
      St. Mountain View, San Francisco, California, USA · +2 392 3929 210 ·
      info@yourdomain.com). Copyright bar MUST credit Component Dock (see
      checklist).

## Design tokens (from css/style.css, verified 2026-08-14)

- Brand cyan `#00bcd4` (67 uses — `.appointment` form bg, `.btn.btn-primary`
  bg, navbar `.btn-custom` CTA bg, hero h1 `<span>` color, `.navbar-brand`
  color + active nav link, `.ftco-intro-2 .overlay` bg, footer gradient
  start, tns active dot/bar) — `@theme` token.
- Secondary cyan `#65c4cf` (footer gradient end, light accent hovers).
- Near-black `#111111` (headings at rgba(0,0,0,.8), hero left-half overlay
  at opacity .1).
- Neutrals: `#fff` (cards, hero text, light buttons), `#f8f9fa` / `#f8f8f8`
  (bg-light sections: services, stories), `#ebebeb` (navbar bg), text gray
  `#6c757d` (muted copy), `#ddd` (tns dot idle).
- Font: "Roboto", Arial, sans-serif (body AND headings — no display font).
- Buttons: `.btn` base radius 4px, padding 9px 12px, shadow `0px 24px 36px
-11px rgba(0,0,0,.09)`. `.btn.btn-primary` = solid `#00bcd4` bg + white
  text (hero scale `p-4 py-3`; pricing `d-block px-2 py-3`), hover →
  transparent bg + cyan text. `.btn.btn-white` = white bg + cyan text,
  hover → transparent + white. `.btn-custom` (nav CTA) = UPPERCASE 13px/700,
  cyan bg, padding 1.5rem, radius 0.
- Section titles: `.heading-section h2` 38-40px/500, line-height 1.4; cyan
  `<span>` accents; small uppercase-ish subheadings above.
- Hero: 100vh slider, photo bg + `#111` overlay (opacity .1, left 50%);
  h1 60px/400 white line-height 1.2 with cyan span; buttons `btn btn-
primary` / `btn btn-white` at `p-4 py-3`.
- Appointment form: solid `#00bcd4` bg; inputs transparent, bottom-border
  `rgba(255,255,255,..)`, white text 70% opacity, radius 0; submit white.
- Parallax band: photo bg + cyan overlay opacity .8, white 30px/700 h1.
- Footer: photo bg + cyan gradient (45deg) overlay opacity .9, white text,
  widget h2 18px/500.
- Sliders (tiny-slider): hero dot nav 10px circles (active cyan); testimonial
  bar nav 30px × 2px (active cyan).
- Counters: `countup` numbers (3000 / 2200 / 24) with flaticon icon + caption.
- Spacing: `container-xl` sections, `row g-xl-5` splits, card grids
  3/6/12 (services 4-col, team/stories/pricing 4-col, blog 3-col).

## Requirements

### Requirement: Top strip and header navigation

The system SHALL render a light top utility strip (brand wordmark "Dentara
Dental Clinic Services", hours "Monday - Friday 8:00AM-8:00PM", phone "Call
Us +2 392 3929 210", location "San Francisco, California, USA" — each with
an icon) and a sticky light navbar with links (Home · Dentist · About ·
Services · Pricing · Blog · Contact) and an uppercase cyan "Make An
Appointment" CTA button. On mobile the links SHALL collapse behind a burger
toggle that opens a panel with the same links.

#### Scenario: Top strip shows clinic info

- **GIVEN** the Dentara app is loaded at desktop width
- **WHEN** the top strip renders
- **THEN** the brand wordmark "Dentara" with the span "Dental Clinic
  Services" SHALL be visible on the left
- **AND** the hours block SHALL show "Monday - Friday" and "8:00AM-8:00PM"
- **AND** the phone block SHALL show "Call Us" and "+2 392 3929 210"
- **AND** the location block SHALL show "Location" and "San Francisco,
  California, USA"

#### Scenario: Desktop header shows menu and cyan CTA

- **GIVEN** the Dentara app is loaded at desktop width
- **WHEN** the navbar renders
- **THEN** the menu SHALL show links Home · Dentist · About · Services ·
  Pricing · Blog · Contact
- **AND** an uppercase cyan CTA button "Make An Appointment" SHALL be
  visible on the right

#### Scenario: Mobile header collapses to burger menu

- **GIVEN** the Dentara app is loaded at mobile width
- **WHEN** the navbar renders
- **THEN** the menu links SHALL be hidden behind a burger toggle
- **AND** clicking the burger SHALL open a panel with the same links
- **AND** the panel SHALL be closable via its close control

### Requirement: Hero slider

The system SHALL render a full-height hero slider (photo background with a
dark overlay on the left half) with two slides — "Dentist Services that You
Can Trust" and "A Brighter Dental Experienced" — each with a white h1 whose
accent span is cyan, a copy paragraph, a solid cyan button ("See Our
Services" / "Make An Appointment") and a white secondary button ("View
Course"), plus dot navigation (active dot cyan).

#### Scenario: Hero shows first slide with headline and buttons

- **GIVEN** the Dentara app is loaded
- **WHEN** the hero slider renders
- **THEN** the first slide SHALL show the h1 "Dentist Services that You Can
  Trust" in white with a cyan accent span
- **AND** a copy paragraph SHALL be present
- **AND** a solid cyan button "See Our Services" and a white button "View
  Course" SHALL be present

#### Scenario: Slider cycles to the second slide

- **GIVEN** the hero slider is rendered
- **WHEN** the user activates the next control or a dot
- **THEN** the slider SHALL advance to the second slide with the h1 "A
  Brighter Dental Experienced"
- **AND** the active dot SHALL be highlighted in cyan

### Requirement: Appointment form split

The system SHALL render a two-column split: LEFT a solid-cyan appointment
form (subheading "We Are Here For You", h2 "Make An Appointment", fields:
Your Full Name, Email, Your Phone Number, Appointment Date, Appointment
Time, Select A Doctor dropdown with six doctors, Message textarea, and a
white "Send message" submit button); RIGHT a heading panel (subheading
"Learn Anything", h2 "We Offer Best Dental Services") with three stacked
icon features: Easy Booking, Team Dentist, Best Price Guarantee. The form
SHALL validate inputs and block submission until valid.

#### Scenario: Appointment form renders with all fields

- **GIVEN** the appointment split is rendered
- **WHEN** the section loads
- **THEN** the cyan form SHALL show the subheading "We Are Here For You"
  and h2 "Make An Appointment"
- **AND** SHALL include fields for full name, email, phone, appointment
  date, appointment time, a doctor select (six doctor options), and a
  message textarea
- **AND** a white "Send message" submit button SHALL be present

#### Scenario: Form blocks invalid submission

- **GIVEN** the appointment form is rendered
- **WHEN** the user submits without filling the required fields
- **THEN** submission SHALL be blocked with per-field errors
- **AND** the form SHALL submit successfully only when all required fields
  are valid

#### Scenario: Right panel shows service features

- **GIVEN** the appointment split is rendered
- **WHEN** the right panel loads
- **THEN** the subheading "Learn Anything" and h2 "We Offer Best Dental
  Services" SHALL be shown
- **AND** three icon features SHALL be listed: Easy Booking, Team Dentist,
  Best Price Guarantee

### Requirement: Services grid

The system SHALL render a light-background services section (subheading
"Services", h2 "Toothcare Services") with eight responsive cards, each with
a line icon, a dental service title (Tooth Protection · Dental Implants ·
Dental Care · Teeth Whitening · Dental Calculus · Tooth Removal · Removal
of Tartar · Tooth Inspection), and a blurb, stacking to one column on small
screens.

#### Scenario: Eight service cards render with icons and blurbs

- **GIVEN** the services section is rendered
- **WHEN** the section loads
- **THEN** eight service cards SHALL be shown in a responsive grid
- **AND** each card SHALL have a line icon, a dental service title, and a
  blurb
- **AND** cards SHALL stack to 1 column on small screens

### Requirement: Welcome split with counters

The system SHALL render a welcome split (subheading "Welcome to our Dental
Clinic", h2 "Toothcare is a Dental Clinic and Innovative Approach to
Treatment", copy, image) with three animated counters: 3000 Happy Patients,
2200 Performed Treatments, 24 Year of Experienced — each with an icon,
number, and caption.

#### Scenario: Welcome copy and counters render

- **GIVEN** the welcome section is rendered
- **WHEN** the section loads
- **THEN** the h2 "Toothcare is a Dental Clinic and Innovative Approach to
  Treatment" SHALL be shown beside a photo
- **AND** three counters SHALL read "3000 Happy Patients", "2200 Performed
  Treatments", and "24 Year of Experienced"

### Requirement: Team grid

The system SHALL render a team section (subheading "Our Doctors", h2
"Qualified Dentist") with four doctor cards (portrait, name, role): Dr.
Lloyd Wilson (Head Dentist), Dr. Rachel Parker, Dr. Ian Smith, Dr. Alicia
Henderson (Dentist).

#### Scenario: Four doctor cards render

- **GIVEN** the team section is rendered
- **WHEN** the section loads
- **THEN** four doctor cards SHALL be shown, each with a portrait, name,
  and role
- **AND** Dr. Lloyd Wilson SHALL be labeled "Head Dentist"

### Requirement: Parallax CTA band

The system SHALL render a photo band with a solid-cyan overlay (subheading
"Book your appointment", h1 "Do not wait make an appointment today!", cyan
"Make An Appointment" button).

#### Scenario: CTA band renders with appointment button

- **GIVEN** the CTA band is rendered
- **WHEN** the section loads
- **THEN** the band SHALL show "Book your appointment" and "Do not wait
  make an appointment today!"
- **AND** a "Make An Appointment" button SHALL be present

### Requirement: Testimonials and patient stories

The system SHALL render a testimonial slider (subheading "Testimonial", h2
"Happy Customers", quote + name "Roger Scott" + role "Marketing Manager",
with dot/bar navigation) and a patient-stories grid on a light background
(subheading "Stories", h2 "Result of our Treatment and Work") with four
result cards (image, caption "France, 28 years", name).

#### Scenario: Testimonial slider cycles quotes

- **GIVEN** the testimonial section is rendered
- **WHEN** the section loads
- **THEN** a quote with the name "Roger Scott" and role "Marketing Manager"
  SHALL be visible
- **AND** the slider SHALL provide navigation to cycle slides

#### Scenario: Stories grid shows four patient results

- **GIVEN** the stories section is rendered
- **WHEN** the section loads
- **THEN** four result cards SHALL be shown, each with an image, a caption
  ("France, 28 years"), and a patient name

### Requirement: Blog strip

The system SHALL render a blog section (subheading "Our Blog", h2 "Recent
From Blog") with three post cards, each with an image, meta (Admin · date ·
comment count), and a dental-care title. The source shows the same title on
all three cards — titles SHALL be varied to keep the same content _kind_
(dental care tips).

#### Scenario: Three blog cards render with meta

- **GIVEN** the blog section is rendered
- **WHEN** the section loads
- **THEN** three blog cards SHALL be shown, each with an image, meta line
  (Admin · Jan. 20, 2021 · 3 Comments), and a dental-care title

### Requirement: Pricing plans

The system SHALL render a pricing section (subheading "Our Pricing", h2
"Pricing & Packages" with a cyan accent span) with four plans — Basic $50,
Beginner $79, Premium $89, Ultimate $99 — each with a name, price, six
features (Diagnostic Services · Professional Consultation · Tooth Implants
· Surgical Extractions · Teeth Whitening · Teeth Cleaning), and a "Get
Started" button.

#### Scenario: Four pricing plans render with features

- **GIVEN** the pricing section is rendered
- **WHEN** the section loads
- **THEN** four plans SHALL be shown: Basic $50, Beginner $79, Premium $89,
  Ultimate $99
- **AND** each plan SHALL list six dental features and a "Get Started"
  button

### Requirement: Footer

The system SHALL render a photo footer washed with a cyan gradient overlay
containing an about widget (brand "Dentara Dental Clinic Services", blurb,
social icons), a Services links widget, a Quick Links widget, a Recent Posts
widget, and a "Have a Questions?" contact block (address, phone, email),
plus a copyright bar that SHALL credit Component Dock by linking
`https://www.componentdock.com/`.

#### Scenario: Footer shows widgets and contact block

- **GIVEN** the footer is rendered
- **WHEN** the section loads
- **THEN** the about widget SHALL show the brand "Dentara" with "Dental
  Clinic Services" and social icons
- **AND** Services (dental services links), Quick Links, and Recent Posts
  widgets SHALL be shown
- **AND** the "Have a Questions?" block SHALL show address, phone, and
  email

#### Scenario: Copyright bar credits Component Dock

- **GIVEN** the footer is rendered
- **WHEN** the copyright bar renders
- **THEN** it SHALL credit Component Dock with a link to
  `https://www.componentdock.com/`
- **AND** no ColorLib/attribution references SHALL appear in the app code

### Requirement: Design tokens

The system SHALL define the brand cyan `#00bcd4` as a theme token and apply
it to the navbar CTA, hero accent spans, the appointment form, primary
buttons, the parallax overlay, and the footer gradient; SHALL load the
Roboto font via Google Fonts in `index.html`; and SHALL use 4px-radius
buttons (except the radius-0 navbar CTA and form inputs).

#### Scenario: Token application

- **GIVEN** the Dentara app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand cyan `#00bcd4` SHALL be defined as a theme token and
  used by the navbar CTA, hero accents, primary buttons, appointment form,
  parallax overlay, and footer gradient
- **AND** the "Roboto" font SHALL be loaded via Google Fonts in
  `index.html`

## Verification checklist

- [ ] `openspec/specs/template-dentara/spec.md` — Gherkin scenarios above
      map 1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (top strip → navbar → hero
      slider → appointment split → services grid → welcome + counters →
      team → parallax CTA → testimonials → patient stories → blog →
      pricing → footer); tokens `#00bcd4` / `#65c4cf` / `#111111` /
      `#f8f9fa`; Roboto font; cyan-on-white buttons.
- [ ] Placeholder images: `https://picsum.photos/seed/dentara-<n>/<w>/<h>`
      (deterministic per template; hero dental-clinic scenes, about photo,
      doctor portraits ×4, testimonial portraits ×1-2, result photos ×4,
      blog images ×3; screen seeds for plausible medical scenes before
      committing).
- [ ] Icons from lucide-react (calendar, phone, map-pin, tooth/stethoscope
      glyphs, check/arrow; social brands as inline SVG paths — lucide
      removed brand icons).
- [ ] Appointment form: zod validation with per-field errors; submit
      blocked until valid; success state tested.
- [ ] Hero + testimonial sliders: next/prev + dot navigation tested.
- [ ] Counters render 3000 / 2200 / 24 with captions (count-up animation
      optional).
- [ ] Footer credit line MUST link `https://www.componentdock.com/` (no
      ColorLib attribution anywhere in app code — provenance lives only in
      the spec, TEMPLATES.md, and the PR).
- [ ] 100% coverage lines/functions/branches/statements; `scripts/
verify-app.sh dentara` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib Toothcare), preview URL
      (`https://preview.colorlib.com/theme/toothcare/`), design tokens
      used, what differs (renames, placeholder images, corrected "Dental
      Calculus" spelling, varied blog titles — source repeats one title).
