# Template: Ivy (Education / University Template)

## Purpose

Ivy is a single-page education / university website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fox" (Fox University) website template design (see
TEMPLATES.md), built under a different name with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Fox" — free responsive Bootstrap 5 university /
  education website template (source: https://colorlib.com/wp/template/fox/).
  TEMPLATES.md has TWO copies of this item (line 403 in the Bootstrap
  category and line 1640 in the Education category — mark BOTH `[x]` when
  done). Both rows reference the correct screenshot
  (`fox-free-template.jpg`).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/fox/`
  returns HTTP 200 (curl + browser verified 2026-08-11). Page title: "Fox
  University - Free Bootstrap 5 Template by Colorlib". The rendered page is
  the full template: top bar, dark navbar, 2-slide hero, services strip,
  "What We Offer", counter+video, courses, teachers, quote form, events,
  blog, testimonials, gallery, footer. Stylesheet analyzed:
  `css/style.css` (335 KB) — design tokens extracted from the `:root`
  `--fox-*` custom properties and component rules below.
- **Screenshot:** `fox-free-template.jpg` — consistent with the live preview
  (orange-on-navy academic palette, student photography).
- **Visual design (from live preview + browser vision):** clean, modern
  corporate-academic aesthetic. White page with alternating light-gray
  sections; deep navy `#0d1128` navbar; vivid orange `#fd5f00` brand accent
  (CTAs, icon chips, date badges, active states, section underlines); white
  top bar with black wordmark; hero slides with photo + gradient overlay and
  white text; card-based courses/teachers/blog sections with soft shadows
  and 1rem corner radii; purple `#5d50c6` used sparingly (testimonial quote
  icon, footer Subscribe button). The demo brands itself "Fox. University";
  recreation uses the NEW name **Ivy**.

- **Structure (1:1, section order — from the live DOM):**
  1. Top bar (`bg-top navbar-light`) — white strip: left wordmark "Fox.
     University" (recreated as "Ivy." + "University"); center/right contact
     toppers with orange icons ("Call Us: + 1235 2355 98" etc.); right
     orange "Apply now" button (btn-primary).
  2. Navbar (`navbar-dark bg-dark ftco-navbar-light`) — dark navy bar below
     the top bar: white links **Home / About / Programs / Courses /
     Admissions / Contact**; right search form (text input + icon button).
     On scroll the bar becomes a white glass strip (`rgba(255,255,255,0.8)`
     - blur); active/hover link turns orange `#fd5f00`.
  3. Home slider (`home-slider owl-carousel`, 600px tall) — TWO slides, each
     a full-bleed background photo with a subtle dark gradient overlay:
     slide 1 headline "Education Needs Complete Solution", slide 2
     "University, College School Education"; each has the Duden lorem copy
     and an orange "Contact Us" button; carousel pager (1/2).
  4. Services strip (`ftco-services`) — FOUR full-width cards (col-md-3)
     with alternating solid backgrounds `bg-primary` orange `#fd5f00` /
     `bg-darken` navy `#0d1128`: **Certified Teachers** (mortarboard icon),
     **Special Education** (book icon), **Book & Library**, **Sport Clubs**
     (trophy icon). Each: white circular icon chip, white title, muted
     white (0.8) blurb.
  5. "What We Offer" (`ftco-section ftco-no-pt`) — split layout: LEFT
     framed photo (`about.webp`, orange-tinted border); RIGHT heading "What
     We Offer" + copy + SIX feature rows (`services-2`): orange circular
     icon + title + blurb — **Safety First, Regular Classes, Certified
     Teachers, Sufficient Classrooms, Creative Lessons, Sports Facilities**.
  6. Counter + Video (`ftco-section ftco-counter img`) — background photo
     with navy→orange gradient overlay (`linear-gradient(135deg,
rgba(13,17,40,0.95), rgba(253,95,0,0.85))`): LEFT video thumbnail
     (rounded-xl) with a white circular play button (orange triangle,
     `icon-video`) that opens a Vimeo lightbox; RIGHT heading "Fox
     University" + copy; below, FOUR counters (white numbers): **18
     Certified Teachers · 401 Students · 30 Courses · 50 Awards Won**.
  7. "Our Courses" (`ftco-section`, full-bleed container) — centered
     heading "Our Courses" + copy; FOUR course cards (col-md-3, white bg,
     radius-xl, shadow): photo top, meta row with orange icons (**Mr. Khan**
     user · **10 seats** table · **4 Years** calendar), title "Electric
     Engineering" (dark, hover orange), blurb, orange "Apply now" button.
  8. "Certified Teachers" (`bg-light`) — centered heading + copy; FOUR staff
     cards: photo (rounded top with bottom dark gradient), name (**Bianca
     Wilson, Mitch Parker, Stella Smith, Monshe Henderson** — hover orange),
     position "Teacher" in orange, social icon row in orange.
  9. "Request A Quote" (`ftco-consult`) — background photo + orange→navy
     overlay (`linear-gradient(45deg, #fd6100 0%, #0d1128 100%)`): heading
     "Request A Quote" (white) + copy; form: **First Name, Last Name, course
     select, Phone, Message (textarea)**, submit button "Request A Quote".
  10. "Upcoming Events" (`ftco-section`) — centered heading + copy; THREE
      event cards: orange date badge (radius-md: day "15" + month "MAR"),
      time ("10:00 AM - 4:00 PM"), title (**Spring Open House, Research
      Symposium, Alumni Networking Night**), blurb, "Learn More" link.
  11. "Recent Blog" (`bg-light`) — centered heading + copy; THREE blog cards:
      photo with orange date block (radius-md: "26 / June / 2032"), meta
      (Admin, comments), title "Skills To Develop Your Child Memory", blurb,
      "Read more" link (dark, hover orange).
  12. "Student Says About Us" (`testimony-section`) — centered heading +
      copy; carousel of testimonial cards: circular avatar, purple `#5d50c6`
      quote icon, quote text, name (dark), position (orange); carousel dots
      gray → orange when active.
  13. Gallery strip (`ftco-gallery`) — row of photo tiles (col-md-3) each
      with an orange circular instagram icon overlay; opens a lightbox.
  14. Footer (`ftco-footer`, bg `#1a1a1a`) — FIVE widget columns: **Have a
      Questions?** (address/phone/email with orange icons), **Recent Blog**
      (two mini posts: thumbnail + title + date), **Quick Links** (nav list
      with orange arrow icons), **Subscribe Us!** (email input on
      white/10 bg + purple `#5d50c6` "Subscribe" button), **Connect With
      Us** (social icon row); widget headings white with orange underline;
      bottom copyright bar (muted white text + ColorLib credit link).

- **Design tokens (extracted from `css/style.css` `:root` + rules):**
  - Brand orange **`#fd5f00`** (`--fox-primary`) — CTAs, icon chips, date
    badges, active nav state, section underlines, counter/gallery icons;
    hover **`#e55500`** (`--fox-primary-hover`); tint
    `rgba(253, 95, 0, 0.1)` / `rgba(253, 95, 0, 0.05)`.
  - Deep navy **`#0d1128`** (`--fox-dark`) — navbar bg, services darken
    cards, gradient partner; lighter **`#1a1f3a`** (`--fox-dark-lighter`).
  - Mustard gold **`#fda638`** — footer wordmark accent span.
  - Purple **`#5d50c6`** — testimonial quote icon, footer Subscribe button.
  - Footer background **`#1a1a1a`**; consult overlay gradient
    `linear-gradient(45deg, #fd6100 0%, #0d1128 100%)`; counter overlay
    `linear-gradient(135deg, rgba(13,17,40,0.95) 0%, rgba(253,95,0,0.85) 100%)`.
  - Font — **"Poppins", Arial, sans-serif** (Google Fonts Poppins via
    `<link>` in `index.html`).
  - Radii — sm `0.375rem`, md `0.5rem`, lg `0.75rem` (buttons), xl `1rem`
    (cards: staff/course/blog, video thumb), full `9999px`; icon chips and
    avatars are circles (50%).
  - Buttons — `.btn.btn-primary`: bg `#fd5f00`, **2px solid border** in the
    same color, white text, radius `0.75rem`, shadow-sm; hover: darker bg +
    `translateY(-2px)` + orange glow shadow (`0 4px 14px rgba(253,95,0,0.25)`).
  - Cards — white bg, radius-xl, soft shadow (`--fox-shadow-md`).
  - Section rhythm — centered `col-md-8` heading blocks (mb-5/pb-2);
    `bg-light` alternation on Teachers and Blog; glass scrolled navbar
    (`rgba(255,255,255,0.8)` + `blur(10px)`).
  - Image treatment — hero/section photos with dark gradient overlays;
    counter section photo under navy→orange gradient; staff photos fade
    into a dark bottom gradient.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ivy-<n>/<w>/<h>`; hero ~1600×600-class, cards
  ~400×300-class); icons → lucide-react (GraduationCap, BookOpen, Trophy,
  Users, Phone, Mail, MapPin, Search, Play, Calendar, Clock, Quote,
  Instagram, social icons as inline SVG — lucide-react removed brand
  glyphs); fonts via Google Fonts `<link>` (Poppins) in `index.html`;
  logo recreated as a text wordmark "Ivy. University" (navy + orange
  accent); the Vimeo popup → a play button that opens the video URL in a
  new tab (or a lightweight modal) — no external embed required.

Ivy lives in `apps/ivy` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Top bar with wordmark, contact info, and Apply CTA

The system SHALL render a white top bar with the Ivy wordmark, contact
toppers with orange icons, and an orange "Apply now" button.

#### Scenario: Top bar layout

- **GIVEN** the Ivy page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show the wordmark "Ivy. University" on the left
  in dark text with the brand orange used on an accent part
- **AND** contact toppers (e.g. "Call Us: + 1235 2355 98") with orange icons
  SHALL be shown
- **AND** an orange `#fd5f00` "Apply now" button SHALL be shown on the right

### Requirement: Navbar with nav links and search

The system SHALL render a dark navy navbar with six white nav links and a
search input.

#### Scenario: Navbar layout

- **GIVEN** the Ivy page is rendered
- **WHEN** the page loads
- **THEN** a dark navy `#0d1128` navbar SHALL show the links Home, About,
  Programs, Courses, Admissions, and Contact in white
- **AND** a search input with an icon button SHALL be shown on the right

#### Scenario: Mobile navbar

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the links SHALL collapse behind a hamburger toggle that opens the
  same six links

### Requirement: Home slider with two slides

The system SHALL render a 600px-tall hero carousel with two slides, each
with a background photo, overlay, headline, copy, and CTA button.

#### Scenario: Slide content

- **GIVEN** the hero slider is displayed
- **WHEN** the page loads
- **THEN** slide one SHALL show the headline "Education Needs Complete
  Solution" with the Duden copy and an orange "Contact Us" button
- **AND** slide two SHALL show "University, College School Education" with
  the same copy and button
- **AND** a carousel pager SHALL indicate the active slide (1 / 2)

### Requirement: Services strip with alternating colored cards

The system SHALL render four full-width service cards alternating orange
`#fd5f00` and navy `#0d1128` backgrounds.

#### Scenario: Service cards

- **GIVEN** the services strip is displayed
- **WHEN** the page loads
- **THEN** four cards SHALL be shown in order: Certified Teachers, Special
  Education, Book & Library, Sport Clubs
- **AND** the cards SHALL alternate orange and navy backgrounds, each with a
  white circular icon, a white title, and muted-white blurb text
- **AND** on a narrow viewport the cards SHALL stack vertically

### Requirement: "What We Offer" split section

The system SHALL render a split section with a framed photo on the left and
a heading, copy, and six feature rows on the right.

#### Scenario: Feature rows

- **GIVEN** the "What We Offer" section is displayed
- **WHEN** the page loads
- **THEN** the heading "What We Offer" SHALL appear above the copy
- **AND** six feature rows SHALL be listed with orange circular icons:
  Safety First, Regular Classes, Certified Teachers, Sufficient Classrooms,
  Creative Lessons, Sports Facilities

### Requirement: Counter and video section

The system SHALL render a section with a background photo under a
navy-to-orange gradient, a video thumbnail with a white circular play
button, the heading "Ivy University", and four animated counters.

#### Scenario: Video and counters

- **GIVEN** the counter/video section is displayed
- **WHEN** the page loads
- **THEN** a video thumbnail with a white circular play button (orange
  triangle) SHALL be shown and activating it SHALL open the video
- **AND** the heading "Ivy University" with the Duden copy SHALL be shown
- **AND** four counters SHALL read: 18 Certified Teachers, 401 Students, 30
  Courses, 50 Awards Won (white numbers)

### Requirement: Courses section

The system SHALL render a centered "Our Courses" heading and four course
cards, each with a photo, a meta row with orange icons, a title, a blurb,
and an "Apply now" button.

#### Scenario: Course cards

- **GIVEN** the courses section is displayed
- **WHEN** the page loads
- **THEN** four cards SHALL be shown with white backgrounds, 1rem corner
  radius, and soft shadows
- **AND** each card SHALL show a photo, meta "Mr. Khan · 10 seats · 4
  Years" with orange icons, the title "Electric Engineering", a blurb, and
  an orange "Apply now" button

### Requirement: Certified Teachers section

The system SHALL render a light-gray section with four staff cards showing a
photo, name, orange position, and social icons.

#### Scenario: Staff cards

- **GIVEN** the teachers section is displayed on a `bg-light` background
- **WHEN** the page loads
- **THEN** four cards SHALL show photos with names Bianca Wilson, Mitch
  Parker, Stella Smith, and Monshe Henderson
- **AND** each card SHALL show the position "Teacher" in orange `#fd5f00`
  and an orange social icon row

### Requirement: Request A Quote form

The system SHALL render a form section over an orange-to-navy gradient with
name, course select, phone, and message fields and a submit button.

#### Scenario: Quote form

- **GIVEN** the "Request A Quote" section is displayed
- **WHEN** the page loads
- **THEN** the heading "Request A Quote" SHALL be shown in white over the
  gradient overlay
- **AND** the form SHALL contain First Name, Last Name, a course select,
  Phone, and a Message textarea
- **AND** a "Request A Quote" submit button SHALL be shown

#### Scenario: Quote form validation

- **GIVEN** the quote form is displayed
- **WHEN** the user submits without filling required fields
- **THEN** per-field validation errors SHALL be shown and no submission
  occurs

### Requirement: Upcoming Events section

The system SHALL render three event cards, each with an orange date badge, a
time, a title, a blurb, and a "Learn More" link.

#### Scenario: Event cards

- **GIVEN** the events section is displayed
- **WHEN** the page loads
- **THEN** three cards SHALL be shown: Spring Open House, Research
  Symposium, and Alumni Networking Night
- **AND** each card SHALL show an orange date badge (day + month, e.g. "15
  MAR"), a time range (e.g. "10:00 AM - 4:00 PM"), a blurb, and a "Learn
  More" link

### Requirement: Recent Blog section

The system SHALL render a light-gray section with three blog cards, each
with a photo, an orange date block, meta, a title, and a "Read more" link.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed on a `bg-light` background
- **WHEN** the page loads
- **THEN** three cards SHALL be shown, each with a photo and an orange date
  block (day / month / year, e.g. "26 June 2032")
- **AND** each card SHALL show meta (Admin, comments), the title "Skills To
  Develop Your Child Memory", and a "Read more" link that turns orange on
  hover

### Requirement: Student testimonials carousel

The system SHALL render a testimonial carousel with avatar, purple quote
icon, quote text, name, and orange position.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is displayed
- **WHEN** the page loads
- **THEN** at least one testimonial card SHALL show a circular avatar, a
  purple `#5d50c6` quote icon, quote text, a dark name, and an orange
  position label
- **AND** carousel navigation dots SHALL be shown with the active dot in
  orange

### Requirement: Gallery strip

The system SHALL render a row of photo tiles, each with an orange circular
instagram icon overlay.

#### Scenario: Gallery tiles

- **GIVEN** the gallery strip is displayed
- **WHEN** the page loads
- **THEN** at least four photo tiles SHALL be shown side by side, each with
  an orange circular icon overlay
- **AND** on a narrow viewport the tiles SHALL stack in a 2-column grid

### Requirement: Footer with five widgets

The system SHALL render a dark footer with Have a Questions?, Recent Blog,
Quick Links, Subscribe Us!, and Connect With Us widgets plus a copyright
bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed on a `#1a1a1a` background
- **WHEN** the page loads
- **THEN** five widget columns SHALL be shown: contact info with orange
  icons, two mini blog posts, a quick-links list with orange arrow icons,
  an email input with a purple `#5d50c6` "Subscribe" button, and social
  icons
- **AND** widget headings SHALL be white with an orange underline
- **AND** a copyright bar SHALL credit ColorLib

#### Scenario: Subscribe validation

- **GIVEN** the footer subscribe form is displayed
- **WHEN** the user enters an invalid email and presses Subscribe
- **THEN** a validation error SHALL be shown and no success message appears

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Ivy app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar, navbar, hero slider, services
  strip, What We Offer, counter/video, courses, teachers, quote form,
  events, blog, testimonials, gallery, and footer in order
- **AND** the document title SHALL be "Ivy — University Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/ivy`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/ivy`)
- [ ] Section order matches the reference 1:1 (top bar → navbar → hero slider → services → What We Offer → counter/video → courses → teachers → quote form → events → blog → testimonials → gallery → footer)
- [ ] Design tokens in `@theme` (brand orange #fd5f00, hover #e55500, navy #0d1128, gold #fda638, purple #5d50c6, footer #1a1a1a, Poppins stack)
- [ ] Top bar: "Ivy. University" wordmark, contact toppers with orange icons, orange "Apply now" button
- [ ] Navbar: dark navy, 6 white links, search input; mobile hamburger; scrolled glass state optional
- [ ] Hero slider: 2 slides, 600px, photo + overlay, headline + Duden copy + orange "Contact Us" button, pager
- [ ] Services strip: 4 alternating orange/navy cards with white circular icons (Certified Teachers, Special Education, Book & Library, Sport Clubs)
- [ ] What We Offer: framed photo left, heading + copy + 6 feature rows (orange circular icons) right
- [ ] Counter/video: navy→orange gradient bg, video thumbnail + white circular play button, "Ivy University" heading, 4 counters (18 / 401 / 30 / 50)
- [ ] Courses: 4 white radius-xl cards, meta row with orange icons (Mr. Khan / 10 seats / 4 Years), "Electric Engineering" title, "Apply now" button
- [ ] Teachers: bg-light, 4 staff cards, orange "Teacher" position + social icons
- [ ] Request A Quote: orange→navy gradient overlay, form (First Name, Last Name, course select, Phone, Message), validation errors
- [ ] Events: 3 cards, orange date badge (15 MAR etc.), time, blurb, "Learn More"
- [ ] Blog: bg-light, 3 cards, orange date block (26 June 2032), meta, title, "Read more"
- [ ] Testimonials: avatar, purple #5d50c6 quote icon, name, orange position, orange active dot
- [ ] Gallery: photo tiles with orange circular icon overlay, 2-col on mobile
- [ ] Footer: #1a1a1a, 5 widgets (Have a Questions?, Recent Blog, Quick Links, Subscribe Us! with purple button, Connect With Us), orange underlines, ColorLib credit
- [ ] Document title "Ivy — University Template"
- [ ] BOTH TEMPLATES.md rows marked `[x]` on completion: line 403 (Bootstrap) and line 1640 (Education)
