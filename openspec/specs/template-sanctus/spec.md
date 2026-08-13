# Template: Sanctus (Church Template)

## Purpose

Sanctus is a single-page warm church / faith website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Byfaith" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Byfaith" — free responsive Bootstrap 5 church
  website template (source: https://colorlib.com/wp/template/byfaith/).
  TEMPLATES.md has TWO copies of this item (line 554 in the Bootstrap 5
  category, line 1289 in the Church category — mark BOTH `[x]` when done).
  Both rows use the correct screenshot (`byfaith-free-template.jpg`).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/byfaith/`
  returns HTTP 200 (curl verified 2026-08-13, 23.5 KB HTML). Page title:
  "ByFaith — Website by Colorlib". The rendered page is the full template:
  transparent absolute navbar (logo "ByFaith" + Home / Sermons dropdown /
  Ministries / Events / Contact) over a full-viewport photo hero with a dark
  overlay (subheading "Welcome to Byfaith church", hymn-headline h1, "Go to
  sermons" pill button, right-side video-bg image with circular play icon),
  About section ("Living and Sharing The Gospel" + "Know more about us"),
  Recent Sermons (3 image cards with date + title + "Read more" pill),
  Why Us dark-teal section (2x2 feature grid "Peace with God" etc. + video-bg
  image + "Send us your prayer request"), Living Testimonies carousel (9
  items, Prev/Next pills + dots), Church Services (3 icon cards "Praise and
  Worship / Marriage / Exhortation" + "+ Read more"), Join CTA, warm-beige
  footer (Contact / Sources / Links + social icons). Stylesheets analyzed:
  `css/style.css` (56.9 KB, carries `--bs-primary:#f79918`,
  `--bs-secondary:#10495c`, `.btn` pill styling) + `css/bootstrap.min.css`
  (custom-compiled with the same tokens).
- **Screenshot:** `byfaith-free-template.jpg` — consistent with the live
  preview: warm golden mountain/sunrise hero photo (rocky outcrops, golden
  light) with a small cutout photo of a man in a yellow jacket gesturing
  (preaching) on the right; small orange uppercase "WELCOME TO FAITH CHURCH"
  over the hymn headline; mustard-orange pill buttons; below the hero a
  beige/taupe About section with dark text and a warm books/Bible photo. The
  screenshot was fetched as AVIF and matches the live DOM design.
- **Visual design (from live preview + browser vision):** warm, natural,
  earthy church aesthetic. Amber/orange **`#f79918`** is the single accent
  (subheadings, pill buttons, service icons, testimonial nav pills, footer
  underline hovers, dropdown hover/active). Deep teal **`#10495c`**
  (`--bs-secondary`) is the dark section color (Why Us + Join CTA). The rest
  of the page is white with a warm beige **`#ede1d0`** footer. Buttons are
  PILLS (30px radius, uppercase 10px/700 with .1rem letter-spacing), NOT
  square; `btn-primary` is `#f79918` bg with WHITE text and a 2px transparent
  border, hover flips to white bg + `#f79918` text with a soft shadow.
  Headlines: h1 40px/700 white on the hero photo, section `.heading` 40px/700
  black. Subheadings are uppercase 12px bold with .1rem letter-spacing in
  `#f79918`. The demo brands itself "ByFaith"; the recreation uses the NEW
  name **Sanctus**.

- **Structure (1:1, section order — from the live DOM):**
  1. Mobile menu (`div.site-mobile-menu.site-navbar-target` — off-canvas
     panel with the same links; hidden on desktop) + Preloader
     (`#overlayer` + spinner, fades out on load).
  2. Navbar (`nav.site-nav` — `position: absolute; top: 0; z-index: 9;
width: 100%`, padding-top/bottom 20px): LEFT logo wordmark **"ByFaith"**
     (recreated as "Sanctus", 24px) `a.logo.m-0.float-left`; RIGHT
     `ul.js-clone-nav.d-none.d-lg-inline-block.site-menu.float-end` links
     (14px, color `rgba(255,255,255,0.7)`, hover/active `#fff`, padding
     10px 15px): **Home (li.active) / Sermons (`li.has-children` with
     `.dropdown` — Sermons, Sermons Single, Dropdown → Sub Menu One/Two/
     Three) / Ministries / Events / Contact**; mobile burger
     (`a.burger.site-menu-toggle.d-lg-none`). Links hover: dropdown items
     14px `#000`, hover/active `#f79918`, `min-width: 180px`, shadow
     `0 2px 10px -2px rgba(0,0,0,0.1)`.
  3. Hero (`div.hero.overlay`, inline `background-image: url('images/hero_1.jpg')`,
     `background-size: cover`, `:before` overlay `rgba(0,0,0,0.3)`) —
     `div.row.align-items-center.justify-content-between`: LEFT
     `col-lg-4.me-auto.text-start` (data-aos fade-left): `span.subheading`
     **"Welcome to Byfaith church"** (uppercase 12px, white, letter-spacing
     .1rem, margin-bottom 30px), `h1` **"Oh Safe To the Rock That Is Higher
     Than I"** (40px/700 white, 30px mobile), `p.mb-5` white paragraph, and
     **"Go to sermons"** `a.btn.btn-primary`; RIGHT `col-lg-5` (data-aos
     fade-left): `a.video-bg.glightbox` (YouTube link) — 80px circular play
     icon (`.icon` 80x80, border-radius 50%, white bg? — see tokens) +
     `img.about_1.jpg.img-fluid.rounded` (fetchpriority high).
  4. About (`div.section`, padding 7rem 0) — `div.row.justify-content-between`:
     LEFT `col-lg-4` (data-aos fade-up): `span.subheading.mb-4.d-block`
     **"About us"** (uppercase 12px `#f79918` bold), `h2.mb-4.heading`
     **"Living and Sharing <br> The Gospel"** (40px/700), TWO paragraphs,
     `p.mt-5` **"Know more about us"** `a.btn.btn-primary`; RIGHT `col-lg-6`:
     `img.about_1.jpg.img-fluid.rounded` (warm books photo).
  5. Recent Sermons (`div.section.pt-0`) — centered `row.mb-4.text-center`
     `col-lg-12` (data-aos): `span.subheading.d-block.mb-4` **"Sermons"**,
     `h2.mb-4.heading` **"Recent Sermons"**; `div.row.g-5` with THREE
     `div.col-12.col-sm-6.col-md-6.col-lg-4` (data-aos delays 0/100/200):
     each `div.sermon-entry`: `a > img.img-fluid.mb-3.rounded` (`img_1..3`),
     `div.sermon-body` (padding 20px): `span.date` **"15 Jan 2020 • By
     Pastor Campbell"** (`#999`, margin-bottom 10px), `h3.mb-2` **"Living
     and Sharing The Gospel"** (20px, `#000` link), `p.mb-5` paragraph,
     `p > a.btn.btn-primary.btn-sm` **"Read more"** (btn-sm: padding .25rem
     .5rem, font-size .875rem, radius .2rem).
  6. Why Us (`div.section.bg-secondary` — bg `#10495c`) —
     `div.row.mb-5.justify-content-between.align-items-center`: LEFT
     `col-lg-5` (data-aos): `span.subheading.d-block.mb-4` **"Why Us"**,
     `h2.heading.text-white` **"You matter to God, you matter to us."**;
     RIGHT `col-lg-5.align-self-end.text-white` (data-aos delay 100):
     paragraph. Then `div.row.align-items-center.g-5`: LEFT `col-lg-6`
     (data-aos): `a.video-bg.glightbox` (play icon + `img_1.jpg`
     `img-fluid.rounded`); RIGHT `col-lg-5.ms-auto` (data-aos delay 100):
     `div.row.g-4` of FOUR `div.col-lg-6.feature-1` blocks: `h3.text-white`
     (12px/700 UPPERCASE) + `p.opac-white-5` (`rgba(255,255,255,0.5)`):
     **Peace with God / Relationship for the Soul / Identifying Limitations /
     His Kingdom**; then `p` with **"Send us your prayer request"**
     `a.btn.btn-primary`.
  7. Living Testimonies (`div.section`) — centered `row.mb-5`
     `div.col-lg-7.mx-auto.text-center` (data-aos): `span.subheading.mb-4.d-block`
     **"Testimonials"**, `h2.mb-4.heading` **"Living Testimonies"**;
     `div.testimonial-slide-center-wrap` (data-aos delay 100) >
     `div.testimonial-slide-center.testimonial-center` with NINE
     `div.item > div.testimonial-item > div.testimonial-item-inner`
     (padding 50px 30px, bg `#fff`, radius 0): `h3.testimonial-heading`
     (18px/700) **"Far far away, behind the word mountains"**, `blockquote`
     (18px italic `#000`) lorem, `div.testimonial-author`: `img.person_1.jpg`
     (40px circle) + `strong.d-block` **"James Campbell"** (16px/700 `#000`)
     - `span` **"Person"** (14px); `div.testimonial-nav` (centered, top -20px):
       TWO pill spans **"Prev" / "Next"** (bg `#f79918`, white text, radius
       30px, uppercase 12px letter-spacing .1rem, padding 5px 20px, hover bg
       `#f8a431`); tns dots below (7px circles `rgba(0,0,0,0.2)`, active
       `#f79918`).
  8. Church Services (`div.section.bg-white.mx-2.mx-md-5.sec-services-wrap` —
     `position: relative; margin-bottom: -50px`) — centered `row.mb-5`
     `col-lg-7.mx-auto.text-center` (data-aos): `span.subheading.mb-4.d-block`
     **"Our Services"**, `h2.mb-4.heading` **"Church Services"**;
     `div.row.g-5` with THREE `div.col-lg-4` (data-aos delays 0/100/200):
     `div.service.text-center`: `span.flaticon-wheat / flaticon-church /
flaticon-bible.mb-4.d-block` (60px `#f79918` icon), `h3.heading`
     (18px) **"Praise and Worship" / "Marriage" / "Exhortation"**,
     `p` paragraph, `p > a.more` **"+ Read more"** (link).
  9. Join CTA (`div.section.sec-cta.bg-secondary` — `padding-top: 10rem`,
     bg `#10495c`) — `div.row.align-items-center` (data-aos): LEFT
     `col-lg-7.text-center.text-md-start.mb-4.mb-md-0`: `h2.heading.text-white`
     **"Join with us as we worship the Lord"**; RIGHT
     `col-lg-5.text-center.text-md-end` (data-aos delay 100): **"Join Us"**
     `a.btn.btn-primary.py-3.px-5`.
  10. Footer (`div.site-footer` — bg `#ede1d0`, font-size 14px, color `#888`,
      padding 70px 0) — `div.row` of THREE `div.col-lg-4 > div.widget`:
      (1) **Contact** h3 (12px/700 UPPERCASE, `#10495c`) + `address` "43
      Raymouth Rd. Baltemoer, London 3910" + `ul.list-unstyled.links`:
      `tel://+1(123)-456-7890` ×2, `mailto:info@mydomain.com`; (2) **Sources**
      h3 + TWO `ul.list-unstyled.float-start.links` columns (About us /
      Services / Vision / Mission / Terms / Privacy | Partners / Business /
      Careers / Blog / FAQ / Creative); (3) **Links** h3 +
      `ul.list-unstyled.links` (Our Vision / About us / Contact us) +
      `ul.list-unstyled.social` SIX 40px circle icon links (icon-instagram /
      icon-twitter / icon-facebook / icon-linkedin / icon-pinterest /
      icon-dribbble — bg `#fff`, radius 40%, hover bg `#f79918` + white
      icon). Bottom `div.row.mt-5 > div.col-12.text-center`: copyright bar
      "Copyright © <year> All rights reserved | This template is made with ♥
      by Colorlib" — recreation replaces the ColorLib credit with the
      mandatory **Component Dock** footer link
      (https://www.componentdock.com/) per repo conventions, and the "ByFaith"
      logo becomes "Sanctus".

- **Design tokens (extracted from `css/style.css` + `css/bootstrap.min.css`):**
  - Brand amber **`#f79918`** (`--bs-primary`) — subheadings, pill buttons
    (bg + border), service icons, testimonial nav pills, tns dot active,
    dropdown hover/active links, footer underline hover (`#f79918`),
    social icon hover bg. Hover shades `#f8a83b` / `#f9ad46` / `#f8a431`.
  - Dark teal **`#10495c`** (`--bs-secondary`) — `.bg-secondary` sections
    (Why Us, Join CTA), footer widget h3 color.
  - Footer background **`#ede1d0`** (warm beige); light grays `#f8f9fa`,
    `#f5f0e9`.
  - Button text WHITE on `#f79918` (`btn.btn-primary` override: color #fff,
    2px transparent border); DEFAULT bootstrap `.btn-primary` text is `#000`
    — the override wins in style.css; hover: white bg, `#f79918` text,
    shadow `0 15px 30px 0 rgba(0,0,0,0.2)`.
  - Buttons are PILLS: `.btn { padding: 12px 20px; border-radius: 30px;
font-size: 10px; font-weight: 700; letter-spacing: .1rem;
text-transform: uppercase; }`; `btn-sm` = padding .25rem .5rem,
    font-size .875rem, radius .2rem; large CTA `py-3 px-5` (Join Us).
  - Headings: `.heading` 40px/700 (30px ≤992px); hero h1 40px/700 white
    (30px mobile); `.subheading` uppercase 12px bold letter-spacing .1rem,
    `#f79918` on light sections, `#fff` in the hero.
  - Font — **Poppins** (Google Fonts: `"Poppins", sans-serif`).
  - Hero — `background-size: cover` photo (`hero_1.jpg`) + `:before`
    overlay `rgba(0,0,0,0.3)`; h1/p white.
  - Section rhythm — `.section { padding-top: 7rem; padding-bottom: 7rem; }`
    (About, Sermons pt-0, Why Us, Testimonials, Services); `sec-cta`
    padding-top 10rem; `sec-services-wrap` margin-bottom -50px (overlaps the
    CTA section).
  - Why Us — `feature-1 h3` 12px/700 uppercase white; `p.opac-white-5`
    `rgba(255,255,255,0.5)`.
  - Testimonial card — `testimonial-item-inner` padding 50px 30px, bg #fff,
    border-radius 0; `testimonial-heading` 18px/700; blockquote 18px italic
    #000; author img 40px circle; strong 16px/700 #000; span 14px. Dots 7px
    `rgba(0,0,0,0.2)` / active `#f79918`; Prev/Next pills as above.
  - Service icon — 60px, `#f79918`; `service .heading` 18px; `.more` is a
    text link.
  - Footer — bg `#ede1d0`, 14px, `#888`; links `#777`, hover `#000` with a
    10%-height animated underline (`rgba(247,153,24,0.1)` → `#f79918` on
    hover); widget h3 12px/700 uppercase `#10495c`; social 40px circles
    white bg, radius 40%, hover `#f79918`.
  - Navbar — absolute over hero, padding 20px; logo 24px; menu links 14px
    `rgba(255,255,255,0.7)`, hover/active `#fff`, padding 10px 15px;
    dropdown shadow `0 2px 10px -2px rgba(0,0,0,0.1)`, min-width 180px,
    links 14px `#000` hover/active `#f79918`.
  - AOS scroll animations (fade-up / fade-left with delays) on most blocks.

- **Recreation decisions:** hero photo → picsum placeholder (`sanctus-hero`
  seed, warm mountain/landscape vibe), About photo → `sanctus-about`, sermon
  images ×3 → `sanctus-sermon-1..3`, Why Us video-bg image → `sanctus-why`,
  testimonial avatar → `sanctus-person` (same person photo for all 9 items);
  the two YouTube `video-bg` links (hero + Why Us) → decorative play-icon
  buttons over the image (no video assets; keep the circular play icon
  look); flaticon icons → lucide-react equivalents (Wheat for
  flaticon-wheat, Church for flaticon-church, BookOpen for flaticon-bible,
  Play for the video-bg icon, Menu for the burger, social icons via
  lucide-react Instagram/Twitter/Facebook/Linkedin/Pinterest/Dribbble);
  font via Google Fonts `<link>` (Poppins) in `index.html`; logo recreated
  as a text wordmark "Sanctus"; AOS fade animations are optional
  (implement via CSS/Tailwind transitions or skip — they are progressive
  enhancement, not layout); the footer ColorLib credit is replaced by the
  mandatory Component Dock link.

Sanctus lives in `apps/sanctus` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Transparent navbar with wordmark and dropdown links

The system SHALL render an absolute-positioned transparent navbar over the
hero with a white wordmark, five nav links (one with a dropdown), and a
mobile hamburger toggle.

#### Scenario: Navbar layout

- **GIVEN** the Sanctus page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the white wordmark "Sanctus" on the left
- **AND** the links Home, Sermons, Ministries, Events, and Contact SHALL be
  shown on the right in `rgba(255,255,255,0.7)` with Home active
- **AND** the navbar SHALL be transparent and absolutely positioned over the
  hero

#### Scenario: Sermons dropdown

- **GIVEN** the navbar is displayed
- **WHEN** the user hovers or focuses the Sermons link
- **THEN** a dropdown SHALL open with items Sermons, Sermons Single, and
  Dropdown (which contains Sub Menu One, Sub Menu Two, Sub Menu Three)
- **AND** dropdown items SHALL be dark `#000` text that turns amber
  `#f79918` on hover

#### Scenario: Mobile navbar

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the nav links SHALL collapse behind a hamburger toggle that opens
  the same links in an off-canvas mobile menu

### Requirement: Full-viewport photo hero with overlay and pill CTA

The system SHALL render a full-width hero with a cover photo, a dark
`rgba(0,0,0,0.3)` overlay, an uppercase subheading, a hymn-style headline,
copy, a "Go to sermons" pill button, and a right-side image with a circular
play icon.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL show the subheading "Welcome to Sanctus church" in
  white uppercase letters with letter-spacing
- **AND** the headline "Oh Safe To the Rock That Is Higher Than I" SHALL be
  shown in white 40px/700
- **AND** a white paragraph and a "Go to sermons" pill button
  (`#f79918` bg, white text, 30px radius, uppercase) SHALL be shown on the
  left
- **AND** a rounded image with an 80px circular play icon SHALL be shown on
  the right

### Requirement: About section with heading and image

The system SHALL render an About section with an amber uppercase subheading,
a large heading, two paragraphs, a "Know more about us" pill button, and a
rounded photo.

#### Scenario: About content

- **GIVEN** the About section is displayed
- **WHEN** the page loads
- **THEN** the amber subheading "About us" and the heading "Living and
  Sharing The Gospel" SHALL be shown
- **AND** two paragraphs and the "Know more about us" pill button SHALL be
  shown on the left
- **AND** a rounded photo SHALL be shown on the right

### Requirement: Recent Sermons cards

The system SHALL render a "Recent Sermons" heading and three sermon cards,
each with a rounded image, a date line, a title, copy, and a small pill
"Read more" button.

#### Scenario: Sermon cards

- **GIVEN** the Recent Sermons section is displayed
- **WHEN** the page loads
- **THEN** the amber subheading "Sermons" and the heading "Recent Sermons"
  SHALL be shown centered
- **AND** three cards SHALL be shown, each with an image, the date "15 Jan
  2020 • By Pastor Campbell" in gray, the title "Living and Sharing The
  Gospel", a paragraph, and a small pill "Read more" button

### Requirement: Why Us dark-teal section with feature grid

The system SHALL render a `#10495c` section with a heading + paragraph
header, a video-bg image with play icon, a 2x2 feature grid, and a "Send us
your prayer request" pill button.

#### Scenario: Why Us content

- **GIVEN** the Why Us section is displayed on the `#10495c` background
- **WHEN** the page loads
- **THEN** the amber subheading "Why Us" and the white heading "You matter
  to God, you matter to us." SHALL be shown with a white paragraph on the
  right
- **AND** a rounded image with a circular play icon SHALL be shown on the
  left
- **AND** four feature blocks SHALL be shown with white uppercase 12px
  headings Peace with God, Relationship for the Soul, Identifying
  Limitations, and His Kingdom, each with a `rgba(255,255,255,0.5)` copy
  line
- **AND** a "Send us your prayer request" pill button SHALL be shown

### Requirement: Living Testimonies carousel

The system SHALL render a centered "Living Testimonies" heading and a
carousel of nine testimonial cards, each with a heading, an italic quote, an
avatar, an author name, and a role, with Prev/Next pill controls and dots.

#### Scenario: Testimonial cards

- **GIVEN** the Living Testimonies section is displayed
- **WHEN** the page loads
- **THEN** the amber subheading "Testimonials" and the heading "Living
  Testimonies" SHALL be shown centered
- **AND** nine cards SHALL be shown, each with the heading "Far far away,
  behind the word mountains", an italic quote, a circular avatar, the author
  "James Campbell", and the role "Person"
- **AND** pill-shaped "Prev" and "Next" controls and dot navigation (amber
  active dot) SHALL be shown

### Requirement: Church Services icon cards

The system SHALL render a white section with amber icons and three centered
service cards, each with an amber icon, a title, copy, and a "+ Read more"
link.

#### Scenario: Service cards

- **GIVEN** the Church Services section is displayed on the white
  background
- **WHEN** the page loads
- **THEN** the amber subheading "Our Services" and the heading "Church
  Services" SHALL be shown centered
- **AND** three cards SHALL be shown in order: Praise and Worship (wheat
  icon), Marriage (church icon), and Exhortation (bible icon), each with an
  amber 60px icon, an 18px title, a paragraph, and a "+ Read more" link

### Requirement: Join CTA banner

The system SHALL render a `#10495c` banner with a white heading and a "Join
Us" pill button.

#### Scenario: CTA content

- **GIVEN** the Join section is displayed on the `#10495c` background
- **WHEN** the page loads
- **THEN** the white heading "Join with us as we worship the Lord" SHALL be
  shown on the left
- **AND** a large "Join Us" pill button (`py-3 px-5`) SHALL be shown on the
  right

### Requirement: Footer with Contact, Sources, Links

The system SHALL render a beige `#ede1d0` footer with three widgets
(Contact, Sources, Links), six social icon circles, and a copyright bar that
links to Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is displayed on the `#ede1d0` background
- **WHEN** the page loads
- **THEN** the Contact widget SHALL show the address "43 Raymouth Rd.
  Baltemoer, London 3910", two phone numbers, and an email
- **AND** the Sources widget SHALL show two link columns (About us, Services,
  Vision, Mission, Terms, Privacy | Partners, Business, Careers, Blog, FAQ,
  Creative)
- **AND** the Links widget SHALL show Our Vision, About us, and Contact us
  plus six circular social icons (Instagram, Twitter, Facebook, LinkedIn,
  Pinterest, Dribbble) that turn amber on hover
- **AND** the copyright bar SHALL credit Component Dock with a link to
  https://www.componentdock.com/

### Requirement: Pill button styling

The system SHALL style all primary buttons as amber pills with white text
that invert on hover.

#### Scenario: Button appearance and hover

- **GIVEN** a primary pill button is displayed
- **WHEN** the page loads
- **THEN** the button SHALL have a `#f79918` background, white text, a 2px
  transparent border, 30px border-radius, 12px/20px padding, and uppercase
  10px text with .1rem letter-spacing and 700 weight
- **AND** on hover the button SHALL flip to a white background with `#f79918`
  text and a soft shadow

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sanctus app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero, About, Recent Sermons,
  Why Us, Living Testimonies, Church Services, Join, and footer in order
- **AND** the document title SHALL be "Sanctus — Church Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/sanctus`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/sanctus`)
- [ ] Section order matches the reference 1:1 (navbar → hero → About → Recent Sermons → Why Us → Living Testimonies → Church Services → Join → footer)
- [ ] Design tokens in `@theme` (brand amber #f79918, dark teal #10495c, footer beige #ede1d0, Poppins font stack)
- [ ] Navbar: transparent over hero, "Sanctus" wordmark, 5 links (Home active) with Sermons dropdown, burger on mobile
- [ ] Hero: cover photo + rgba(0,0,0,0.3) overlay, white uppercase subheading "Welcome to Sanctus church", hymn h1 40px/700, "Go to sermons" pill, right rounded image + 80px circular play icon
- [ ] About: amber "About us" subheading, "Living and Sharing The Gospel" heading, 2 paragraphs, "Know more about us" pill, rounded photo
- [ ] Recent Sermons: 3 cards (image, gray date "15 Jan 2020 • By Pastor Campbell", title, copy, btn-sm pill "Read more")
- [ ] Why Us: #10495c bg, "Why Us" + white heading + right paragraph, video-bg image with play icon, 4 feature blocks (Peace with God / Relationship for the Soul / Identifying Limitations / His Kingdom) with uppercase white h3 + rgba(255,255,255,0.5) copy, "Send us your prayer request" pill
- [ ] Living Testimonies: 9 cards (heading, italic quote, 40px avatar, James Campbell / Person), Prev/Next pills, amber-active dots
- [ ] Church Services: white bg, 3 cards (Praise and Worship / Marriage / Exhortation) with amber 60px icons, "+ Read more" links
- [ ] Join: #10495c bg, white heading, large "Join Us" pill (py-3 px-5)
- [ ] Footer: #ede1d0 bg, Contact / Sources (2 columns) / Links widgets, 6 circular social icons (amber hover), copyright bar links Component Dock
- [ ] Buttons: #f79918 pill with white text, hover inverts to white bg + amber text + shadow
- [ ] Document title "Sanctus — Church Template"
- [ ] BOTH TEMPLATES.md rows marked `[x]` on completion: line 554 (Bootstrap 5), line 1289 (Church)
