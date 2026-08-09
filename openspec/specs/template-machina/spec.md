# Template: Machina (Industrial / Manufacturing)

## Purpose

Machina is a single-page industrial & manufacturing company website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Braxit" design (see TEMPLATES.md — listed under Bootstrap, line
352, first unchecked item whose prep did not exist on main), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a corporate industrial landing page: a dark-navy top utility
bar (phone + email left, red "Free Quote" button right), a white sticky nav
(logo, uppercase links, search icon), a 765px photo hero with a red square
"Learn More" button and circular video-play button, an about section with
animated counters ("Delivery Packages", "Countries Covered") and an orange "20
Years of experience" overlay badge, a 3-tile projects gallery with hover
overlays, a 4-card categories grid (Quality / Reliability / Experience /
Manufacturing), a 3-card services row, a "Up to 40% Off" CTA banner, a
testimonial slider with avatar thumbnails, a "Need to make an enquiry?" card +
"Drop your message" contact form, a "News & Media center" blog strip, a Google
map, a logo + double-CTA bar, and a 4-column footer with a newsletter form.
Machina recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Braxit" — free industrial / manufacturing website
  template (source: https://colorlib.com/wp/template/braxit/). The HTML title
  is literally "Industrial | Teamplate" (sic) — the internal project name is
  "280.Industrial_HTML". New name: **machina** (machinery / Latin "machine";
  single word, no collision with `ls apps/` or existing spec folders).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/braxit/`
  (HTTP 200, ~73KB) + stylesheet `assets/css/style.css` (~198KB) plus
  bootstrap.min.css, owl.carousel.min.css, slicknav.css, flaticon.css,
  progressbar_barfiller.css, gijgo.css, animate.min.css, animated-headline.css,
  magnific-popup.css, fontawesome-all.min.css, themify-icons.css, slick.css,
  nice-select.css. The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`braxit-free-template.jpg`, 1200×946) confirms the visual
  design: dark-navy top bar with white contact info + red "Free Quote" button,
  white nav with red geometric logo mark, hero photo of an industrial
  structure/crane at dusk with white headline + red square CTA + circular play
  button, light about section with big red numbers, yellow crane-on-dock photo
  with an orange "20 Years of experience" square overlay, gray section with 4
  icon category cards, image-background services row, red square buttons
  throughout, testimonials, form, blog cards, map, footer.
- **Section order (1:1):**
  1. `div.preloader` — full-screen logo preloader with spinner circle.
  2. `div.header-area > div.main-header`:
     - `div.header-top` (d-none d-lg-block, bg `#140C40`, white text): left
       `header-info-left` **+880 278 367 367 · brexitsupport@gmail.com**
       (phone + email with icons); right `header-info-right` **"Free Quote"**
       red button.
     - `div.header-bottom header-sticky` (white bar): `div.logo` (image logo →
       text logo "Machina" with red mark), `ul` nav links **Home, About,
       Services, Project, Blog, Pages** (dropdown: Blog Details, Element,
       Project Details, Services Details), **Contact**; right search icon
       (`nav-search search-switch` → opens full-screen `search-model-box`
       with input placeholder "Searching key.....").
     - `div.mobile_menu` — hamburger (slicknav) for narrow viewports.
  3. `div.slider-area` (bg image `../img/hero/h1_hero.png`, height 765px,
     white text): `div.slider-active` carousel with **2** `div.single-slider`
     slides; each `div.hero__caption`: `h1` "Market **leading** Manufacturer"
     (animated headline, accent word red), `p` "The right candidate may exist,
     but talented people…", `a.btn.hero-btn` "Learn More" (red square, arrow
     icon), `div.video-icon` (circular play button → video modal).
  4. `section.about-low-area.section-padding40`: `div.about-caption` —
     `div.section-tittle`: red span "About Us" + `h2` "We have all your
     needs, from micro macro" + paragraph; below left, two
     `div.experience` counters (big red numbers + label): **Delivery
     Packages** ("454 m") and **Countries Covered** ("127") — count-up
     animation (barfiller). Right: `div.about-right-img` (crane-on-dock
     photo) with `div.img-cap` orange square overlay badge "**20** Years of
     experience".
  5. `div.gallery-area.container-fluid.p-0` — full-bleed 3-tile project
     gallery: `div.single-gallery` ×3 (image + hover `div.thumb-content-box >
div.thumb-content`): **Building Yead**, **Meghna Bridge**, **Kalis
     Vadru** + short line each.
  6. `div.categories-area.section-padding40.gray-bg` (bg `#f7f7fd`):
     centered `div.section-tittle`: span "Categories" + `h2` "To increase
     productivity and cost effectiveness on the market." + 4
     `div.single-cat` cards (flaticon icon + `h5` + short text): **Quality,
     Reliablity (sic), Experience, Manufacturing**.
  7. `div.service-area.section-bg` (full-bleed image bg, `background-size:
cover`, `background-attachment: fixed`): 3 `div.single-services` cards
     (first `.active`, others `.hide` — carousel): `h4` "Mechanical
     Engineering" + paragraph + `div.services-btn` "View More" (red link
     with arrow).
  8. `section.wantToWork-area.gray-bg`: `div.wantToWork-caption
wantToWork-caption2` — `h2` "Up to 40% Off" + paragraph (this is the
     first CTA banner).
  9. `div.contact-form.testimonial-area.section-padding40.mb-40`:
     - centered `div.section-tittle`: span + `h2` "Some amazing words from
       our clients".
     - `div.h1-testimonial-active` — 2 `div.single-testimonial` slides:
       `div.testimonial-caption` quote "Working in conjunction with
       humanitarian aid agencies…" + `div.rattiong-caption` 5-star rating +
       attribution "- **Micky Mouse**, Business Man".
     - `div.single-man-slider` — 4 avatar thumbnails (`div.single-mam-img`).
     - `div.single-gallery` card: `h3` "Need to make an enquiry?" + short
       text (static card beside the form).
     - `div.form-wrapper`: `div.section-tittle.section-tittle2` `h2` "Drop
       your message" + form: **Your Name** (user-icon), **Email**
       (email-icon), **Phone no.** (email-icon), **Topic** select (Topic one
       / Topic Two / Topic Three), **Message** textarea (message-icon) +
       `div.submit-info` submit button "Send Message" (red).
  10. `section.home-blog-area.pb-bottom`: `div.section-tittle` — span +
      `h2` "News & Media center" + paragraph; 2 `div.home-blog-single` cards:
      `div.blog-img` (photo) + `div.blog-cap`: date "**22 Apr 2020**", `h3`
      "We might track your usage patterns to see" / "The massive stadium
      screens at the MCG" + "Read More" link.
  11. `section.Map-area` — Google Maps embed (full-width map).
  12. `section.wantToWork-area` (second CTA bar): `div.wantToWork-caption
wantToWork-caption2` with `div.logo` (image) + `div.double-btn.f-right`:
      "Learn More" solid red button (`btn w-btn wantToWork-btn`) + "Learn
      More" outline button (`btn2 w-btn wantToWork-btn`, red text on white).
  13. `div.footer-area.footer-padding` (bg `#F5F9FB`, 4 columns):
      - **Company** (`div.footer-tittle`): links Why choose us, Review,
        Customers, Blog, Carrier.
      - **Production**: links Technology, Products, Quality, Sales
        geography.
      - **Contact Us** (`div.footer-pera` + `div.footer-number`): Address:
        789/A green avenue Dhanmondi, Dhaka · Phone: +10 783 3674 356 ·
        Email: company@gmail.com.
      - **Newsletter** (`div.footer-form`): "Subscribe our newsletter to get
        updates about our services" + email input (placeholder " Email
        Address ") + subscribe button.
      - `div.footer-bottom-area` (border-top): copyright bar (replace
        Colorlib credit with repo-standard footer credit) + `div.footer-
social` social icons.
  14. `div.search-model-box` — full-screen search overlay modal (input
      "Searching key....." + close button).
- **Design tokens extracted from `assets/css/style.css`:**
  - Fonts (Google Fonts `@import` in style.css): **'Muli', sans-serif**
    (weights 300–900; used for headings AND body). Load via `<link>` in
    index.html.
  - Brand red: **#FF3514** — primary accent: `.btn` gradient
    (`linear-gradient(to left, #FF3514, #d62d12, #FF3514)`), `.btn2` text
    color, `.section-tittle span` eyebrow labels, nav hover, "Free Quote"
    button, hero accent word, counter numbers, logo mark.
  - Dark navy: **#140C40** — header-top bar bg (white text), headings
    (h1–h5 default), footer headings.
  - Body grey: **#7a8290 / #999999 / #888888 / #777** — paragraphs, muted
    text. Nav link color **#0d2d3e** (weight 600, 16px).
  - Light section backgrounds: **#f9f9ff / #f7f7fd / #F5F9FB** (gray-bg
    categories area, wantToWork CTA banner, footer bg); **#f0e9ff** alt
    lavender tint.
  - Hero: `.slider-area` `background-image: url(../img/hero/h1_hero.png)`,
    height **765px**, white text. Services `.section-bg`: image cover +
    `background-attachment: fixed`.
  - Buttons `.btn`: **border-radius 0** (square), `text-transform:
capitalize`, 16px, padding 10px 65px 10px 31px (`.hero-btn` 17px 65px
    17px 31px, `.w-btn` 18px 65px 18px 33px), red gradient bg, arrow icon,
    hover animates `background-position` left→right. `.btn2`: white/trans
    bg, red text #FF3514, same square shape + arrow.
  - Eyebrow labels (`section-tittle span`): 18px, weight 700, #FF3514.
  - Map: Google Maps iframe (recreate with an OSM embed iframe or a static
    map placeholder — no copied assets).
- **Recreation decisions:** preloader → skip or render a lightweight logo
  splash (optional; not required by scenarios); header = dark-navy top bar
  (phone + email left, red "Free Quote" right) + white sticky nav with
  "Machina" text logo + red mark, links Home / About / Services / Project /
  Blog / Pages (dropdown: Blog Details, Element, Project Details, Services
  Details) / Contact, search icon opening a search overlay, mobile hamburger;
  hero = full-bleed industrial photo (picsum) with white headline (accent
  word red), paragraph, red square "Learn More" button and circular play
  button (video modal with placeholder); about = eyebrow + heading +
  paragraph + two count-up stats (Delivery Packages "454 m", Countries
  Covered "127") + photo with orange "20 Years of experience" overlay badge;
  gallery = 3 project tiles with hover overlay titles (Building Yead, Meghna
  Bridge, Kalis Vadru); categories = 4 icon cards (lucide icons: BadgeCheck,
  ShieldCheck, Award, Factory); services = 3 cards (Mechanical Engineering +
  variants) with "View More"; CTA banner = "Up to 40% Off"; testimonials =
  quote slider (2 slides, star ratings, attribution) + 4 avatar thumbnails;
  enquiry card + validated contact form (Your Name / Email / Phone no. /
  Topic select / Message + Send Message); blog = 2 cards with date, title,
  excerpt, read-more; map = full-width map embed; CTA bar = logo + double
  buttons (solid + outline); footer = 4 columns (Company links, Production
  links, Contact Us address/phone/email, Newsletter subscribe) + bottom bar
  with social icons; images picsum-seeded
  (`picsum.photos/seed/machina-N/w/h`); Google Fonts Muli via `<link>`;
  icons via lucide-react.

Machina lives in `apps/machina` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Top utility bar

The system SHALL render a dark-navy top bar above the main navigation with
contact info and a quote button.

#### Scenario: Top bar content

- **GIVEN** the Machina page is rendered
- **WHEN** the header top bar is displayed
- **THEN** it SHALL show a dark-navy (#140C40) bar with a phone number and an
  email address on the left
- **AND** it SHALL show a red "Free Quote" button on the right

### Requirement: Main navigation

The system SHALL render a sticky white navigation bar with logo, links, a
dropdown, and a search control.

#### Scenario: Nav content

- **GIVEN** the page is rendered
- **WHEN** the navigation bar is displayed
- **THEN** it SHALL show the site name "Machina" as a bold logo with a red
  mark on the left
- **AND** it SHALL show the links Home, About, Services, Project, Blog,
  Pages, and Contact
- **AND** it SHALL show a search icon on the right that opens a search
  overlay with an input (placeholder "Searching key.....")
- **AND** the bar SHALL stay visible when the page scrolls (sticky)

#### Scenario: Pages dropdown

- **GIVEN** the navigation is displayed
- **WHEN** the user activates the Pages link
- **THEN** a dropdown SHALL open with the links Blog Details, Element,
  Project Details, and Services Details

#### Scenario: Mobile menu

- **GIVEN** the navigation is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** a menu SHALL open showing the nav links
- **AND** activating the hamburger again SHALL close the menu

### Requirement: Hero slider

The system SHALL render a full-bleed photo hero with headline, CTA button,
and a video-play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-width industrial background photo with a
  bold white headline (e.g. "Market leading Manufacturer") with the accent
  word highlighted in red
- **AND** it SHALL show a supporting paragraph
- **AND** it SHALL show a red square "Learn More" button with an arrow icon
- **AND** it SHALL show a circular play button that opens a video modal

### Requirement: About section

The system SHALL render a two-column about section with animated counters
and an experience badge.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a red "About Us" eyebrow label and a bold heading
  (e.g. "We have all your needs, from micro macro")
- **AND** it SHALL show a supporting paragraph
- **AND** it SHALL show the counters "Delivery Packages" (454 m) and
  "Countries Covered" (127)
- **AND** it SHALL show a right-side image with an orange overlay badge
  "20 Years of experience"

### Requirement: Projects gallery

The system SHALL render a full-width three-tile project gallery with hover
overlays.

#### Scenario: Gallery tiles

- **GIVEN** the gallery section is displayed
- **WHEN** the tiles render
- **THEN** it SHALL show three image tiles titled Building Yead, Meghna
  Bridge, and Kalis Vadru
- **AND** each tile SHALL reveal a title overlay when hovered or focused

### Requirement: Categories grid

The system SHALL render a light-gray section with a heading and four category
cards.

#### Scenario: Category cards

- **GIVEN** the categories section is displayed
- **WHEN** the card grid renders
- **THEN** it SHALL show a section eyebrow and the heading "To increase
  productivity and cost effectiveness on the market."
- **AND** it SHALL show four cards — Quality, Reliability, Experience, and
  Manufacturing — each with an icon and a short description

### Requirement: Services row

The system SHALL render three service cards on an image background.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** the cards render
- **THEN** it SHALL show three cards, each with an icon, a heading (e.g.
  "Mechanical Engineering"), a short description, and a "View More" link
- **AND** the section SHALL use a full-bleed fixed background image

### Requirement: CTA banner

The system SHALL render a "Up to 40% Off" call-to-action banner.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL show the heading "Up to 40% Off" on a light-gray
  background with a supporting paragraph

### Requirement: Testimonials

The system SHALL render a testimonial slider with star ratings and an avatar
strip.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is displayed
- **WHEN** the slider renders
- **THEN** it SHALL show the heading "Some amazing words from our clients"
- **AND** it SHALL show a quote, a five-star rating, and an attribution
  (e.g. "- Micky Mouse, Business Man")
- **AND** it SHALL show a strip of four avatar thumbnails for the slides

### Requirement: Enquiry card and contact form

The system SHALL render an enquiry card and a validated contact form.

#### Scenario: Form fields and validation

- **GIVEN** the contact section is displayed
- **WHEN** the form renders
- **THEN** it SHALL show the heading "Drop your message" with fields for
  Your Name, Email, Phone no., a Topic select (Topic one / Topic Two /
  Topic Three), and a Message textarea
- **AND** it SHALL show a red "Send Message" submit button
- **AND** submitting an invalid form SHALL show per-field errors and block
  submission

#### Scenario: Enquiry card

- **GIVEN** the contact section is displayed
- **WHEN** the side card renders
- **THEN** it SHALL show the heading "Need to make an enquiry?" with a
  supporting paragraph

### Requirement: Blog section

The system SHALL render a "News & Media center" strip with two blog cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the cards render
- **THEN** it SHALL show the heading "News & Media center" with an intro
  paragraph
- **AND** each card SHALL show an image, a date (e.g. "22 Apr 2020"), a
  title, an excerpt, and a read-more link

### Requirement: Map section

The system SHALL render a full-width map between the blog and the CTA bar.

#### Scenario: Map render

- **GIVEN** the page is rendered
- **WHEN** the map section is displayed
- **THEN** it SHALL show a full-width map embed (OSM iframe or static
  placeholder)

### Requirement: Logo CTA bar

The system SHALL render a second CTA bar with a logo and double buttons.

#### Scenario: CTA bar content

- **GIVEN** the page is rendered
- **WHEN** the second CTA bar is displayed
- **THEN** it SHALL show a logo mark and two buttons — a solid red "Learn
  More" and an outline "Learn More" (red text)

### Requirement: Footer

The system SHALL render a four-column footer with a newsletter form and a
bottom bar.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a Company column with links (Why choose us,
  Review, Customers, Blog, Carrier)
- **AND** it SHALL show a Production column with links (Technology,
  Products, Quality, Sales geography)
- **AND** it SHALL show a Contact Us column with an address, phone, and
  email
- **AND** it SHALL show a Newsletter column with an email input and a
  subscribe button
- **AND** the bottom bar SHALL carry the repo-standard footer credit and
  social icons

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Machina app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, about, gallery, categories,
  services, CTA banner, testimonials, enquiry + contact form, blog, map,
  logo CTA bar, and footer inside the main landmark in the original's order
- **AND** the document title SHALL be "Machina — Industrial & Manufacturing"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- machina` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → about → gallery
      → categories → services → CTA banner → testimonials → enquiry + form →
      blog → map → logo CTA bar → footer).
- [ ] Design tokens applied: brand red #FF3514 (gradient to #d62d12 on
      buttons, eyebrow labels, accent word, logo mark), dark navy #140C40
      (top bar, headings), body grey #7a8290/#999999, light bgs #f9f9ff /
      #f7f7fd / #F5F9FB, Muli font (300–900), square (radius 0) capitalized
      buttons with arrow icons (~10px 65px 10px 31px padding; hero-btn
      17px/18px variants), 765px photo hero, fixed-attachment services
      background.
- [ ] Header has the navy top bar (phone + email + "Free Quote" button),
      sticky white nav with Pages dropdown, search overlay, and mobile
      hamburger.
- [ ] Contact form has all five fields, Topic select, validation with
      per-field errors, and a red "Send Message" submit button.
- [ ] Hero has the red square "Learn More" button and a circular play button
      opening a video modal.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Braxit), preview URL, tokens,
      and renames.
