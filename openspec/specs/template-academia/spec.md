# Template: Academia (Bootstrap / Education Template)

## Purpose

Academia is a single-page online-education/courses landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Edumark" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Edumark" — education / online courses landing
  template (source: https://colorlib.com/wp/template/edumark/).
  TEMPLATES.md has THREE copies of this item (lines 382, 1632 and 2042 —
  mark EVERY copy `[x]` when done). SCSS source label: "Edu mark / 207
  Education".
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/edumark/
  (HTTP 200, 134 KB, title "Edumark"). Stylesheets: `css/style.css`
  (177 KB, extracted — SCSS-compiled, 1,700+ rules) + plugin libs
  (animate, bootstrap.min, flaticon, font-awesome, gijgo,
  magnific-popup, nice-select, owl.carousel, responsive, slicknav,
  themify-icons). No section `id`s; Bootstrap 4 grid + utility classes.
  Fonts: Google Fonts `Poppins` (200–800) + `Crimson Text` (400–700)
  via `@import` at the top of style.css.
- **Screenshot:** `edumark-free-template.jpg` (TEMPLATES.md lines 382 /
  1632 / 2042) — verified in a browser (vision analysis, 1200×946):
  modern flat SaaS-style education page. Hero = rich purple→violet
  gradient with soft abstract circles; left flat vector illustration of
  online learning (laptop with video player + play button, three
  graduation-capped students, floating speech bubbles), right big white
  headline "Learn Your Favorite Course From Online" with a bright teal
  pill CTA "Browse Our Courses". Header overlays the hero: left logo
  (open-book icon + "Edumark" in teal), centered menu (Home active with
  a small teal underline; Courses / Pages / Blog have dropdown arrows),
  right "Log In" link + orange pill phone button. Below the fold (white):
  "Over 7000 Tutorials from 20 Courses" heading with floating peach and
  light-blue stat circles already peeking in — flat friendly education
  aesthetic, rounded pill buttons, soft circles everywhere.
- **Visual design (from DOM + CSS tokens + rendered screenshot):**
  education-platform landing page — purple-gradient hero (100vh, image
  `img/banner/banner.png` = purple gradient + soft circles), white body
  sections, teal **`#04D2C8`** primary (logo, CTA fill, nav active
  underline, stat circle, newsletter section bg, active price), peach
  **`#FD8E5E`** (stat circle, newsletter Sign Up button), light blue
  **`#5DB2FF`** (stat circle), orange **`#FDAE5C`** (header phone pill,
  footer link hover), purple **`#D465EF`** (speciality gradient icon),
  near-black **`#1F1F1F`** headings, grey `#919191` / `#999` body+muted
  text, `#BABABA` footer links; section titles 46px Poppins 400; body
  paragraphs Crimson Text 17px `#919191`; pill buttons (radius 30px,
  padding 17px 50px, 16px Poppins). The demo brands itself "Edumark";
  recreation uses the NEW name **Academia**.

- **Structure (1:1, section order):**
  1. Header `header.header-area` (absolute, top 0, full width, z-99,
     transparent over the hero — white text; `.sticky` variant turns
     white bg on scroll) → `div.main-header-area` → `div.container` >
     `div.row align-items-center`:
     - `div.col-xl-2.col-lg-2.col-md-6` — `a.logo` > `img
img/logo.png` (open-book icon + "Edumark" wordmark in teal —
       recreate as a text wordmark "Academia" with a book icon).
     - `div.col-xl-8.col-lg-8.d-none.d-lg-block` — `nav.main-menu` >
       `ul` (white links, 16px, `padding: 34px 0`, `text-transform:
capitalize`; `li` items): **Home** (`a.active` — teal underline
       via `::before` opacity/scaleX), **Courses** (`li` dropdown
       arrow), **Pages** (dropdown → **course details**, **elements**),
       **About**, **Blog** (dropdown → **single-blog**), **Contact**.
       Hover: `color: #fff` + underline scaleX(1). Mobile: Bootstrap
       collapse hamburger (slicknav in source) → stacked list.
     - `div.col-xl-2.col-lg-2.d-none.d-lg-block` — `div.log_chat_area
d-flex align-items-center justify-content-end`: `a.login`
       (16px white, `margin-right: 50px`, user icon `i.flaticon-user`
       — "Log in") + `a.boxed_btn_orange` phone pill **"+10 378 467
       3672"** (bg `#FDAE5C`, white text, radius 30px, padding 12px
       30px).
  2. Hero `div.slider_area` → `div.single_slider
d-flex align-items-center justify-content-center slider_bg_1`
     (**100vh**, `background-image: url(../img/banner/banner.png)` —
     purple gradient with soft circles, `background-size: cover`) →
     `div.container` > `div.row align-items-center
justify-content-center`:
     - Left `div.col-xl-6.col-md-6` — `div.illastrator_png` > `img
img/banner/edu_ilastration.png` (flat vector illustration:
       laptop with video player + play button, 3 graduation-capped
       students, floating speech bubbles; recreate with a flat
       composition or seeded illustration).
     - Right `div.col-xl-6.col-md-6` — `div.slider_info`: `h1` (white)
       split over three lines **"Learn your" / "Favorite Course" /
       "From Online"** + `a.boxed_btn` **Browse Our Courses** (teal
       filled pill, white text, radius 30px, padding 17px 50px, 16px;
       hover: transparent bg + teal border/text).
  3. About `div.about_area` (white, `padding: 200px 0 270px`) →
     `div.container` > `div.row`:
     - Left `div.col-xl-6.col-lg-6.col-md-6` — `div.single_about_info`:
       `h3` **"Over 7000 Tutorials from 20 Courses"** (46px, weight
       400, color `#1F1F1F`) + paragraph (Crimson Text 17px
       `#919191`, "Our set he for firmament morning sixth subdue
       darkness creeping gathered divide our let god moving. …") +
       `a.boxed_btn` **Enroll a Course**.
     - Right `div.col-xl-6.col-lg-6.col-md-6` — `div.about_tutorials`
       (flex, space-evenly; three absolutely-positioned circles with
       white centered text via `.text_info`):
       - `div.courses` (270px circle, `::before` bg `#FD8E5E` opacity
         .7): **20+** (span 60px) / **Courses** (p 18px) — position
         `left: 10%; top: -5px`.
       - `div.courses-blue` (310px circle, `::before` bg `#5DB2FF`
         opacity .7): **7638** / **Courses** — `right: 0; top: -60px`.
       - `div.courses-sky` (270px circle, `::before` bg `#04D2C8`
         opacity .7): **230+** / **Courses** — `left: 27%; top: 50%`.
         (Mobile: circles stack statically, 290px, margin auto.)
  4. Popular Courses `div.popular_courses` (white, `padding: 60px 0
200px`) → `div.container`:
     - `div.section_title.text-center.mb-100`: `h3` **Popular Courses**
       (46px 400 `#1F1F1F`, mb 23px) + `p` (Crimson Text 17px
       `#919191`, "Your domain control panel is designed for ease-of-use
       and allows for all aspects of your domains.").
     - `div.course_nav` — `ul.nav` tabs (16px Poppins 500, padding
       30px 0, color `#919191`; `.active` = `#1F1F1F` + teal `#04D2C8`
       underline `::before`): **All Courses** (active) / **Photoshop** /
       **UI/UX** / **Web Design** / **Web dev** / **Wordpress** /
       **Adobe XD** / **Sketch App** / **Illustrator**.
     - `div.tab-content` → 9 `div.tab-pane` (first
       `fade show active`; the rest hidden until tab click) — each a
       grid of `div.col-xl-4.col-lg-4.col-md-6` course cards (54
       `single_courses` cards total across panes; first pane shows
       SIX): `div.single_courses`:
       - `div.thumb` > `a` > `img img/courses/N.png` (course art).
       - `div.courses_info`: `span` category label (e.g.
         **Photoshop**), `h3` > `a` two-line title (e.g. **"Mobile App
         design step by step from beginner"**), `div.star_prise
d-flex justify-content-between`: `div.star` — star icon
         (flaticon-mark-as-favorite-star) + `span` **(4.5)**;
         `div.prise` — `span.offer` strikethrough **$89.00** +
         `span.active_prise` teal **$49**.
     - `div.more_courses.text-center` — `a.boxed_btn_rev` **More
       Courses** (teal outline pill; hover: teal fill + white text).
       (Two `more_courses` blocks in the DOM — one after the first
       pane, one at the end.)
  5. Testimonial `div.testimonial_area.testimonial_bg_1.overlay`
     (bg image `img/testmonial/testmonial.png` + black `::before`
     overlay **opacity .5**, `padding: 160px 0`, white text) →
     `div.container` > `div.testmonial_active.owl-carousel` (two
     slides, `div.single_testmoial`):
     - `div.testmonial_text.text-center` — quote **"Working in
       conjunction with humanitarian aid agencies we have supported
       programmes to alleviate human suffering."** + author **"-
       Jquileen"** + `div.author_img` > `img
img/testmonial/author_img.png` (round avatar).
  6. Our Course Speciality `div.our_courses` →
     `div.container` > `div.section_title.text-center` (**Our Course
     Speciality** + same blurb pattern) + `div.row` of FOUR
     `div.col-xl-3.col-lg-3.col-md-6` cards (`div.single_course
text-center`):
     - `div.icon.gradient` (flaticon-art-and-design; icon color
       `#D465EF`) / `div.icon.blue` (flaticon-business-and-finance;
       icon color `#04D2C8`) / `div.icon.gradient`
       (flaticon-premium; `#D465EF`) / `div.icon.blue`
       (flaticon-crown; `#04D2C8`) — circular icon badges.
     - `h3` **Premium Quality** (18px, 400, `#1F1F1F`) + paragraph
       (Crimson Text, "Your domain control panel is designed for
       ease-of-use and allows for all aspects of …").
  7. Subscribe Newsletter `div.subscribe_newsletter` (bg **`#04D2C8`**,
     `padding: 100px 0`, white text) → `div.container` > `div.row
align-items-center`:
     - Left `div.col-xl-6` — `div.newsletter_text`: `h3` **Subscribe
       Newsletter** (36px, 400) + `p` (white, "Your domain control
       panel is designed for ease-of-use and allows for all aspects of
       your …").
     - Right `div.col-xl-6` — `div.newsletter_form`: `h4` **"Your
       domain control panel is"** (17px 400 white, mb 20px) + `form`
       with `input` (height **60px**, width **70%**, white, no border,
       `border-top-left-radius: 3px`) + `button` **Sign Up** (width
       **30%**, height **60px**, bg **`#FD8E5E`**, white, radius
       top-right 3px).
  8. Our Latest Blog `div.our_latest_blog` → `div.container` >
     `div.section_title.text-center` (**Our Latest Blog** + blurb) +
     `div.row` of THREE `div.col-xl-4.col-md-4` cards
     (`div.single_latest_blog`):
     - `div.thumb` > `a` > `img` (blog art) — `div.content_blog`:
       `div.blog_meta` — **12 Jun, 2019** + **in Design tips**
       (grey meta row) + `h3` > `a` **Commitment to dedicated
       Support** + paragraph ("Firmament morning sixth subdue darkness
       creeping gathered divide. …").
  9. Footer `footer.footer.footer_bg_1` (bg image
     `img/banner/footer_bg.png` — dark, cover) →
     `div.footer_top` (padding: 145px 0 129px) > `div.container` >
     `div.row` of FOUR `div.col-xl-3.col-md-6.col-lg-6`
     (`div.footer_widget`):
     - Widget 1 `div.footer_logo`: `a` > `img` logo (white variant) +
       `p` blurb "Firmament morning sixth subdue darkness creeping
       gathered divide our let god moving. Moving in fourth air night
       bring upon it beast let you dominion likeness open place day
       great." + social icon row.
     - Widget 2 `div.footer_title` **Courses** (22px 400 white, mb
       40px) + `ul` links: **Wordpress** / **Photoshop** /
       **Illustrator** / **Adobe XD** / **UI/UX** (16px,
       `#BABABA`, line-height 42px; hover `#FDAE5C`).
     - Widget 3 `div.footer_title` **Resources** + `ul` links:
       **Free Adobe XD Tutorials** / **About** / **Contact**.
     - Widget 4 `div.footer_title` **About** + address block:
       **Address** — "200, D-block, Green lane USA" · **Phone** —
       "+10 367 467 8934" · **Email** — "edumark@contact.com".
     - `div.footer_border` — thin divider bar; bottom copyright line
       (credit "made with ♥ by Colorlib" kept per CC BY 3.0).

- **Design tokens extracted from `css/style.css`:**
  - Primary teal **`#04D2C8`** — `.boxed_btn` bg (hero CTA, Enroll a
    Course) + hover border/text of `.boxed_btn_rev`; `.subscribe_newsletter`
    section bg; `.courses-sky` stat circle; `.course_nav` active
    underline (`::before`); `.active_prise` price; `.icon.blue` glyphs;
    header logo wordmark.
  - Peach **`#FD8E5E`** — `.courses` stat circle bg (opacity .7);
    `.subscribe_newsletter .newsletter_form button` bg (Sign Up).
  - Light blue **`#5DB2FF`** — `.courses-blue` stat circle bg (opacity
    .7).
  - Orange **`#FDAE5C`** — `.boxed_btn_orange` header phone pill bg;
    footer link hover.
  - Purple **`#D465EF`** — `.icon.gradient` speciality glyphs.
  - Near-black **`#1F1F1F`** — `.section_title h3`, `.course_nav`
    active link, `.our_courses .single_course h3`, headings.
  - Greys — **`#919191`** (inactive tab links, body text),
    **`#999999`** (muted/meta), **`#BABABA`** (footer links, hover
    `#FDAE5C`), white `#fff` (hero/header/testimonial/newsletter/footer
    text, card text).
  - Black **`#000`** — `.overlay::before` testimonial overlay opacity
    **.5**.
  - Fonts: **"Poppins", sans-serif** — nav, buttons, section titles,
    card titles, tab links (weights 200–800); **"Crimson Text", serif**
    — body `body` default AND all paragraph copy + `.section_title p`
    (17px, `#919191`). Section title h3: **46px** (mobile 23px, tablet
    32px), weight 400, `#1F1F1F`, margin-bottom 23px.
  - Buttons `.boxed_btn` / `.boxed_btn_rev`: **pill radius 30px**,
    padding **17px 50px**, font-size **16px**, Poppins; filled teal
    (white text) ⇄ outline teal variants; hover inverts.
    `.boxed_btn_orange`: padding 12px 30px, bg `#FDAE5C`.
  - Newsletter form: input **60px** white (70% width, radius 3px left)
    - button **60px** `#FD8E5E` (30% width, radius 3px right).
  - Stat circles: 270px / 310px circles, `::before` bg at **opacity
    .7**, centered white `span` 60px + `p` 18px.
  - Hero: **100vh**, bg image (purple gradient + soft circles) cover;
    two 6-col halves (illustration left, text right); h1 white (3
    lines).
  - Footer: bg image cover, `footer_top` 145/129px, widget titles
    22px white, links 16px `#BABABA` line-height 42px, hover `#FDAE5C`.
  - Icons (flaticon font in source — swap to lucide-react): user (Log
    in), phone (header pill), star (ratings), chevron-down (nav
    dropdowns), play (hero video), graduation-cap / book-open (logo,
    education), art/design, briefcase/business, award/premium, crown
    (speciality badges), calendar + tag (blog meta), socials (footer).
  - Mobile: nav collapses to hamburger (slicknav in source) with a
    stacked white-text list; stat circles stack statically (290px);
    section titles shrink to 23px; newsletter stacks.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/academia-<n>/<w>/<h>`; course cards 300×200,
  blog thumbs 350×250, avatar 60×60); icons → lucide-react; Poppins +
  Crimson Text via Google Fonts `<link>` in `index.html`; logo recreated
  as a text wordmark (teal "Academia" + book icon; white variant in the
  footer); hero/footer background images → CSS gradients (hero: purple
  gradient with soft radial circles; footer: dark gradient); testimonial
  bg → image + `bg-black/50` overlay; the flat hero illustration can be
  a light composition of lucide icons (laptop/play/graduation-cap) or a
  seeded illustration; tab panes filter a single course data array
  (All Courses = first 6 cards; each tab shows its category's cards);
  owl-carousel testimonials → a simple two-slide carousel or
  prev/next toggle; nav dropdowns (Courses/Pages/Blog) render
  hover/focus submenus or are omitted on the single-page landing (keep
  the top-level labels).

Academia lives in `apps/academia` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Header with logo, navigation, login and phone pill

The system SHALL render a header overlaying the hero with a teal
wordmark logo, a centered desktop navigation menu with dropdown items, a
Log in link, and an orange pill phone button; on narrow viewports the
menu SHALL collapse behind a hamburger toggle.

#### Scenario: Header content

- **GIVEN** the Academia page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the "Academia" wordmark with a book
  icon on the left in teal
- **AND** nav links SHALL be shown centered: Home (active), Courses,
  Pages, About, Blog, Contact
- **AND** a "Log in" link and an orange pill phone button (e.g.
  "+10 378 467 3672") SHALL appear on the right
- **AND** the active Home link SHALL carry a teal underline

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a collapsible menu SHALL open with the same nav links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero slider

The system SHALL render a full-viewport hero with a purple-gradient
background, a flat education illustration, a three-line white headline,
and a teal pill call-to-action button.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the headline "Learn your Favorite Course From Online" SHALL
  be shown in large white text
- **AND** a teal filled pill button "Browse Our Courses" SHALL be shown
  beneath the headline
- **AND** an illustration (laptop / video / graduation-cap motif) SHALL
  be shown on the left side

### Requirement: About section with stat circles

The system SHALL render an about section with a heading, a paragraph,
an "Enroll a Course" button, and three floating circular stat badges.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **WHEN** the page loads
- **THEN** the heading "Over 7000 Tutorials from 20 Courses" SHALL be
  shown in near-black
- **AND** an "Enroll a Course" teal pill button SHALL be shown
- **AND** three circles SHALL show "20+ Courses" (peach `#FD8E5E`),
  "7638 Courses" (light blue `#5DB2FF`) and "230+ Courses" (teal
  `#04D2C8`) in white text

### Requirement: Popular Courses with tab filter

The system SHALL render a "Popular Courses" section with a category tab
bar (All Courses, Photoshop, UI/UX, Web Design, Web dev, Wordpress,
Adobe XD, Sketch App, Illustrator) and a grid of course cards showing a
thumb image, category label, two-line title, star rating and a price
row with a strikethrough offer and an active teal price.

#### Scenario: Course grid

- **GIVEN** the Popular Courses section is displayed
- **WHEN** the page loads
- **THEN** a section title "Popular Courses" SHALL be shown with a
  paragraph blurb
- **AND** the tab bar SHALL list the nine categories with "All Courses"
  active (teal underline)
- **AND** a 3-column grid of course cards SHALL be shown, each with an
  image, category span, title, star rating "(4.5)" and a price row
  (offer price struck through + active teal price)

#### Scenario: Tab filtering

- **GIVEN** the tab bar is displayed
- **WHEN** the user clicks a category tab (e.g. Photoshop)
- **THEN** the grid SHALL update to show only courses of that category
- **AND** the clicked tab SHALL become active with the teal underline

#### Scenario: More Courses link

- **GIVEN** the course grid is displayed
- **WHEN** the user scrolls to the bottom of the section
- **THEN** a teal outline pill link "More Courses" SHALL be shown

### Requirement: Testimonial

The system SHALL render a testimonial section over a background image
with a black overlay, showing a quote, an author name, and an avatar.

#### Scenario: Testimonial content

- **GIVEN** the testimonial section is displayed
- **WHEN** the page loads
- **THEN** a quote ("Working in conjunction with humanitarian aid
  agencies …") SHALL be shown in white centered text
- **AND** the author "- Jquileen" and a round avatar image SHALL appear
  beneath the quote

### Requirement: Course Speciality

The system SHALL render a "Our Course Speciality" section with four
cards, each with a circular icon badge and a title and paragraph.

#### Scenario: Speciality cards

- **GIVEN** the speciality section is displayed
- **WHEN** the page loads
- **THEN** the section title "Our Course Speciality" SHALL be shown
- **AND** four cards SHALL be shown, each with an icon (teal or purple
  glyph), a heading "Premium Quality" and a paragraph

### Requirement: Newsletter subscription

The system SHALL render a teal newsletter section with a heading, a
description, an email input and a peach "Sign Up" button; the form SHALL
validate the email and confirm a successful subscription.

#### Scenario: Newsletter content

- **GIVEN** the newsletter section is displayed
- **WHEN** the page loads
- **THEN** the heading "Subscribe Newsletter" and a description SHALL be
  shown in white on a solid `#04D2C8` background
- **AND** an email input and a peach "Sign Up" button SHALL be shown

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user enters a valid email and presses "Sign Up"
- **THEN** the form SHALL indicate the subscription was received
- **AND** submitting an invalid email SHALL show a validation error and
  no success message

### Requirement: Latest Blog

The system SHALL render an "Our Latest Blog" section with three article
cards, each with a thumb image, a date/category meta row, a title and a
paragraph.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the page loads
- **THEN** the section title "Our Latest Blog" SHALL be shown
- **AND** three cards SHALL be shown, each with an image, meta
  (date + "in Design tips"), a bold title and a paragraph

### Requirement: Footer

The system SHALL render a dark footer with a brand column (logo, blurb,
socials), three link/contact columns, and a bottom bar with copyright.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** a white "Academia" wordmark and a blurb paragraph SHALL
  appear in the first column
- **AND** columns titled Courses (Wordpress, Photoshop, Illustrator,
  Adobe XD, UI/UX), Resources (Free Adobe XD Tutorials, About,
  Contact) and About (Address, Phone, Email) SHALL be shown with
  `#BABABA` links that turn `#FDAE5C` on hover
- **AND** a bottom bar SHALL show the copyright line with a credit to
  the template source

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Academia app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, about, popular courses,
  testimonial, speciality, newsletter, blog and footer in the correct
  order
- **AND** the document title SHALL be "Academia — Education Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/academia`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/academia`)
- [ ] Section order matches the reference 1:1 (header → hero slider → about → popular courses → testimonial → course speciality → newsletter → latest blog → footer)
- [ ] Design tokens from the reference used in `@theme` (teal #04D2C8, peach #FD8E5E, blue #5DB2FF, orange #FDAE5C, purple #D465EF, ink #1F1F1F, greys #919191/#999/#BABABA; Poppins + Crimson Text fonts)
- [ ] Header: transparent over hero with white text, teal wordmark logo, centered nav with active Home teal underline, Log in link + orange pill phone button; sticky white variant; mobile hamburger menu
- [ ] Hero: 100vh purple-gradient bg, two 6-col halves (illustration left / white 3-line headline + teal pill CTA right)
- [ ] About: 46px heading, Crimson Text paragraph, "Enroll a Course" teal pill, three floating stat circles (peach/blue/teal at opacity .7, white text)
- [ ] Popular Courses: section title + blurb, 9-tab bar (active = ink + teal underline), 3-col card grid (thumb, category span, 2-line title, star + (4.5), offer strikethrough + teal active price), tab click filters cards, teal outline "More Courses" pill
- [ ] Testimonial: bg image + black overlay opacity .5, white centered quote + author + round avatar
- [ ] Speciality: 4 cards with circular icon badges (teal/purple glyphs), heading + paragraph
- [ ] Newsletter: solid #04D2C8 bg, white heading/description, 60px white input + peach Sign Up button, email validation + success state
- [ ] Blog: 3 cards with image, date/category meta, bold title, paragraph
- [ ] Footer: dark bg, white wordmark + blurb + socials, Courses/Resources/About columns (#BABABA links hover #FDAE5C), bottom copyright bar with Colorlib credit
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react; Poppins + Crimson Text via Google Fonts link; logo as text wordmark
- [ ] README Templates status + TEMPLATES.md Edumark lines (382 AND 1632 AND 2042) marked `[x]` after merge
