# Template: Smelter (Industrial / Manufacturing)

## Purpose

Smelter is a single-page industrial & manufacturing company website template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Braxit" design (see TEMPLATES.md — listed under Bootstrap, line
352, first unchecked item whose prep did not exist on main), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a corporate manufacturing landing page: a dark navy top bar
(phone, email, "Free Quote" button) over a white nav bar with a dropdown menu
and search icon, a full-width fixed-background hero slider (two slides: "Market
leading Manufacturer" with a bold white headline, sub-line and a gradient red
"Learn More" arrow button), an about section with a stats row (454m delivery
packages, 127 countries covered, 20 years of experience) beside an image with
an orange overlay badge, a 3-card image gallery ("Mechanical Engineering"
cards with hover overlay + "Learn More"), a light-grey features section
(Quality / Reliability / Experience / Manufacturing), a numbered projects
section on an image background (01. Building Yead, 02. Meghna Bridge, 03.
Kalis Vadru + "View More"), a grey CTA strip ("Up to 40% Off"), a testimonial
carousel ("Some amazing words from our clients"), a "Need to make an enquiry?"
CTA, a contact form ("Drop your message" — name, email, phone, topic select,
message), a 2-post blog section ("News & Media center"), a Google Map embed, a
second enquiry CTA with the logo, and a 4-column footer (Company, Production,
Contact Us, Newsletter) with a dark bottom bar. Smelter recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Braxit" — free industrial/manufacturing website
  template (source: https://colorlib.com/wp/template/braxit/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/braxit/`
  (HTTP 200, 73KB) + stylesheet `assets/css/style.css` (198KB) plus
  `bootstrap.min.css`, `owl.carousel.min.css`, `slicknav.css`, `flaticon.css`,
  `progressbar_barfiller.css`, `gijgo.css`, `animate.min.css`,
  `animated-headline.css`, `magnific-popup.css`, `fontawesome-all.min.css`,
  `themify-icons.css`, `slick.css`, `nice-select.css`. The rendered DOM is the
  reference below; the TEMPLATES.md screenshot (`braxit-free-template.jpg`,
  1200×946) confirms the visual design: dark navy top bar with phone/email and
  a "Free Quote" button, white nav bar with centred links and a search icon,
  full-width hero photo of a modern white architectural structure (Heydar
  Aliyev Center-style) in warm sunset light with a bold white headline "Market
  leading Manufacturer", an orange/red `#ff3514` "Learn More" arrow button and
  a translucent white circular video-play button, a light beige/cream
  two-column about section with big stat numbers (454 m / 127 / 20) and an
  orange overlay box "20 Years of experience" on the photo, then white and
  light-grey content sections (image service cards, features, numbered
  projects, CTA, testimonial, contact form, blog, map, footer).
- **Section order (1:1):**
  1. `header` — `div.header-area`:
     - `div.header-top` (dark navy `#140c40` bar): `div.header-info-left`:
       phone `+880 278 367 367` + email `brexitsupport@gmail.com`;
       `div.header-info-right`: `a.boxed-btn` "Free Quote" (white bg, red
       text).
     - `div.header-bottom.header-sticky` (white bar): logo
       (`assets/img/logo/logo.png` → text logo "Smelter"), `ul.nav` links:
       **Home, About, Services, Project, Blog** (dropdown: Blog, Blog
       Details, Element), **Pages** (dropdown: Project Details, Services
       Details, Element), **Contact**; right `i.flaticon-search` search icon
       (mobile: hamburger menu).
  2. `div.slider-area.position-relative` (height 765px,
     `background-image: url(../img/hero/h1_hero.png)`, cover, top center,
     `background-attachment: fixed`):
     - `div.single-slider.slider-height` ×2 (carousel): `div.hero__caption`:
       `h1` "Market leading **Manufacturer**" (70px, weight 700, white,
       capitalize) + `p` "The right candidate may exist, but talented
       people" + `a.btn` "Learn More" (gradient `linear-gradient(to left,
#FF3514, #d62d12, #FF3514)`, white text, arrow icon `ti-arrow-right`
       that slides right on hover).
     - `div.video-icon`: translucent white circle with red play triangle
       (video modal trigger — can be a dead button in recreation).
  3. `div.about-low-area.section-padding40` (two columns):
     - `div.section-tittle`: `span` "About Us" (18px, weight 700, red
       `#ff3514`), `h2` "We have all your needs, from micro macro" (40px,
       weight 800, `#072366`), paragraph of body copy.
     - stats row (`div.counter`): **454 m / Delivery Packages**,
       **127 / Countries Covered**, **20 / Years of experience** — big bold
       numbers + small labels.
     - right image (`assets/img/gallery/about1.png`, crane at port) with an
       orange overlay box "20 Years of experience" (per screenshot; the
       "Years" stat repeats in the overlay — keep one or both, note in PR).
  4. `div.gallery-area` (3 equal image cards, `container-fluid p-0`):
     `div.single-gallery` ×3, each `div.gallery-img` (bg image
     `gallery1/2/3.png`) with `div.thumb-content-box` overlay on hover:
     `h3` "Mechanical Engineering", paragraph, `a` "Learn More".
  5. `div.categories-area.section-padding40.gray-bg` (light `#f5f9fb`):
     `div.section-tittle.text-center`: `span` "Features" + `h2` "To increase
     productivity and cost effectiveness on the market.", then 4
     `div.single-cat` feature cards (icon `icon1–4.png` + `h5` + short
     paragraph): **Quality, Reliablity, Experience, Manufacturing**.
  6. `div.service-area.section-bg` (bg image `section_bg01.png`): 3
     `div.single-main` project cards, each: `div.single-wrapper` with
     `span` "01."/"02."/"03." + `h4` project title + paragraph +
     `a` "View More", plus a `span.transparrent-btn` showing the adjacent
     project name (02. Meghna Bridge / 03. Kalis Vadru — transparent
     numbered chips). Projects: **01. Building Yead, 02. Meghna Bridge, 03. Kalis Vadru**.
  7. `section.wantToWork-area.gray-bg`: `div.wants-wrapper.w-padding2`:
     `h2` "Up to 40% Off" + paragraph + `a.btn.w-btn.wantToWork-btn` "Learn
     More" (arrow icon).
  8. `div.contact-form.testimonial-area.section-padding40.mb-40`:
     - `div.section-tittle`: `span` "Testimonial" + `h2` "Some amazing words
       from our clients".
     - `div.single-man-slider` (carousel, 2 slides): blockquote text
       ("Working in conjunction with humanitarian aid agencies, we have
       supported programmes to help alleviate human suffering through.") +
       author "- Micky Mouse, Business Man".
  9. `div.wants-wrapper` (inside the same testimonial/contact area): `h2`
     "Need to make an enquiry?" + paragraph + `a.btn` "Learn More".
  10. `div.form-wrapper` (contact form): `h2` "Drop your message" +
      form fields: **Your Name** (text), **Email** (text), **Phone no.**
      (text), **Topic** (select: Topic one / Topic Two / Topic Three),
      **Message** (textarea) + `a.btn` "Send Message".
  11. `div.home-blog-area.pb-bottom`: `div.section-tittle`: `span` "From
      News" + `h2` "News & Media center" + paragraph + `a.all-btn` "View
      All" (underlined red link), then 2 `div.home-blog-single` cards:
      image (`home-blog1/2.png`), date block "22 Apr 2020", `h3` title
      ("We might track your usage patterns to see" / "The massive stadium
      screens at the MCG"), excerpt paragraph.
  12. `div.Map-area`: Google Maps embed (dead iframe in recreation or a
      static map placeholder).
  13. `section.wantToWork-area` (second, after the map): `div.wants-wrapper
.w-padding3`: logo image + two buttons `a.btn` "Learn More" + `a.btn2`
      "Learn More" (outlined red variant).
  14. `footer` (bg `#f5f9fb`):
      - `div.single-footer-caption` ×4: **Company** (links: Why choose us,
        Review, Customers, Blog, Carrier); **Production** (Technology,
        Products, Quality, Sales geography); **Contact Us** (Address: 789/A
        green avenue Dhanmondi, Dhaka; Phone: +10 783 3674 356; Email:
        company@gmail.com); **Newsletter** (blurb "Subscribe our newsletter
        to get updates about our services" + email input + "Subscribe"
        button).
      - `div.footer-bottom-area` (bg `#140c40`): copyright line (replace
        Colorlib credit with repo-standard footer credit) + social icons
        (twitter, facebook, globe, instagram).
- **Design tokens extracted from `assets/css/style.css`:**
  - Font: **'Muli', sans-serif** (Google Fonts `@import` in style.css,
    weights 300–900). Load via `<link>` in index.html.
  - Brand red-orange: **#ff3514** — primary buttons (`.btn` gradient
    `linear-gradient(to left, #FF3514, #d62d12, #FF3514)`), section-tittle
    `span` kicker, `.btn2` text, `.all-btn` underline, slider arrows
    (`#ff1313` variant), hover accents.
  - Dark navy: **#140c40** — header-top bar, footer-bottom bar.
  - Heading ink: **#072366** — section-tittle `h2` (40px, weight 800),
    hero/headings.
  - Body grey: **#999999 / #888888 / #a3a3a3** — paragraphs, muted text.
  - Neutrals: **#fff**, **#f5f9fb** (gray-bg sections + footer),
    **#f9f9ff**, **#f0e9ff** (light lavender tints), #f1f1f1/#eee (borders).
  - Buttons `.btn`: border-radius 0 (sharp rectangles), text-transform
    capitalize, padding 10px 65px 10px 31px, white text, weight 700, arrow
    icon `ti-arrow-right` (lucide `ArrowRight`) that slides right on hover;
    `w-btn` variant padding 18px 65px 18px 33px. `.btn2`: transparent, red
    `#ff3514` text. `.boxed-btn` (top bar "Free Quote"): white bg, red text,
    padding 18px 44px, hover flips to red bg white text. `.all-btn`:
    underlined red text link, letter-spacing grows on hover.
  - Section backgrounds: hero = image cover, fixed attachment, 765px;
    service-area = image bg (`section_bg01.png`); categories + first
    wantToWork = `#f5f9fb`; footer = `#f5f9fb`; footer-bottom = `#140c40`;
    about/gallery/testimonial/blog = white.
  - Cards: box-shadow `0px 22px 57px 0px rgba(34, 41, 72, 0.05)`.
  - Spacing: section-padding40 = 40px vertical rhythm; hero 765px;
    footer-padding 160px 0 120px.
- **Recreation decisions:** header = dark navy top bar (phone, email, "Free
  Quote" white button) + sticky white nav with "Smelter" bold text logo,
  centred nav (Home, About, Services, Project, Blog with dropdown, Pages
  with dropdown, Contact), search icon and mobile hamburger; hero = full-bleed
  industrial photo (picsum) with fixed attachment feel, 70px white headline
  with one accent word, sub-line, gradient red "Learn More" arrow button and a
  circular video-play button; about = two-column text + stats (454 m / 127 / 20) with an orange overlay badge on the image; gallery = 3 equal image cards
  with hover overlay (title + blurb + Learn More); features = light-grey 4-card
  grid (lucide icons: BadgeCheck, ShieldCheck, Award, Factory); projects = 3
  numbered cards (01/02/03) with View More links on an image background;
  CTA strip = "Up to 40% Off" + arrow button; testimonial = 2-slide carousel
  (quote + author); enquiry CTA = heading + paragraph + arrow button; contact
  form = 5-field validated form (name, email, phone, topic select, message) +
  "Send Message" submit; blog = 2 cards with date chip, title, excerpt +
  "View All" link; map = static placeholder (no Google Maps iframe);
  second CTA = logo + two buttons (filled + outlined red); footer = 4 columns
  (Company links, Production links, Contact Us with address/phone/email,
  Newsletter email form) + dark bottom bar with social icons; images
  picsum-seeded (`picsum.photos/seed/smelter-N/w/h`); Google Fonts Muli via
  `<link>`; icons via lucide-react.

Smelter lives in `apps/smelter` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render a two-part header: a dark navy top bar with contact
info and a Free Quote button, and a sticky white nav bar with a logo, centred
navigation, and a search icon.

#### Scenario: Top bar content

- **GIVEN** the Smelter page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show a dark navy top bar with a phone number and an email
  address on the left
- **AND** it SHALL show a "Free Quote" button on the right with white
  background and brand-red text

#### Scenario: Main navigation

- **GIVEN** the header is displayed
- **WHEN** the white nav bar is shown
- **THEN** it SHALL show the site name "Smelter" as a bold text logo on the
  left
- **AND** it SHALL show the nav links Home, About, Services, Project, Blog,
  Pages, and Contact
- **AND** it SHALL show a search icon on the right

#### Scenario: Blog and Pages dropdowns

- **GIVEN** the header is displayed
- **WHEN** the user hovers or activates the Blog link
- **THEN** a dropdown SHALL open with the links Blog, Blog Details, and
  Element
- **WHEN** the user hovers or activates the Pages link
- **THEN** a dropdown SHALL open with the links Project Details, Services
  Details, and Element

#### Scenario: Mobile menu

- **GIVEN** the header is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** a menu SHALL open showing the nav links
- **AND** activating the hamburger again SHALL close the menu

### Requirement: Hero slider

The system SHALL render a full-bleed hero with a bold headline, sub-line,
gradient CTA button, and a video-play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-width industrial background image with a bold
  white headline (e.g. "Market leading Manufacturer") with one accent word
- **AND** it SHALL show the sub-line "The right candidate may exist, but
  talented people"
- **AND** it SHALL show a brand-gradient "Learn More" button with a
  right-arrow icon
- **AND** it SHALL show a circular video-play button on the hero

#### Scenario: Slide navigation

- **GIVEN** the hero has multiple slides
- **WHEN** the user activates the next/prev controls or dots
- **THEN** the visible headline and sub-line SHALL change to the next slide
  (both slides may carry the same copy as the original)

### Requirement: About section

The system SHALL render a two-column about section with a heading, copy,
stats, and an image with an overlay badge.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the "About Us" kicker and the heading "We have all
  your needs, from micro macro"
- **AND** it SHALL show a paragraph of body copy
- **AND** it SHALL show the stats 454 m / Delivery Packages, 127 / Countries
  Covered, and 20 / Years of experience
- **AND** it SHALL show an image with an orange overlay badge (e.g. "20 Years
  of experience")

### Requirement: Gallery image cards

The system SHALL render three equal image cards with a hover overlay
containing a title, blurb, and link.

#### Scenario: Gallery cards

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show three full-width-row image cards
- **AND** each card SHALL show a title (e.g. "Mechanical Engineering"), a
  short paragraph, and a "Learn More" link on hover

### Requirement: Features section

The system SHALL render a light-grey features section with a centred header
and four feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the "Features" kicker and the heading "To increase
  productivity and cost effectiveness on the market."
- **AND** it SHALL show four cards titled Quality, Reliability, Experience,
  and Manufacturing, each with an icon and a short paragraph

### Requirement: Projects section

The system SHALL render a numbered projects section on an image background.

#### Scenario: Project cards

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show three numbered cards: 01. Building Yead, 02. Meghna
  Bridge, and 03. Kalis Vadru
- **AND** each card SHALL show a project title, a short paragraph, and a
  "View More" link

### Requirement: CTA strips

The system SHALL render two CTA strips and one enquiry callout.

#### Scenario: Offer strip

- **GIVEN** the page is rendered
- **WHEN** the first CTA strip is displayed
- **THEN** it SHALL show the heading "Up to 40% Off", a short paragraph, and a
  brand-gradient "Learn More" button with an arrow icon

#### Scenario: Enquiry callout

- **GIVEN** the page is rendered
- **WHEN** the enquiry callout is displayed
- **THEN** it SHALL show the heading "Need to make an enquiry?", a short
  paragraph, and a "Learn More" button

#### Scenario: Second CTA with logo

- **GIVEN** the page is rendered
- **WHEN** the second CTA strip (after the map) is displayed
- **THEN** it SHALL show the site logo and two "Learn More" buttons (one
  filled brand style, one outlined red style)

### Requirement: Testimonials

The system SHALL render a testimonial carousel with a section header, quote,
and author.

#### Scenario: Testimonial carousel

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the "Testimonial" kicker and the heading "Some
  amazing words from our clients"
- **AND** it SHALL show a carousel with at least one slide containing a quote
  and an author line (e.g. "- Micky Mouse, Business Man")
- **AND** the user SHALL be able to advance between slides with next/prev
  controls

### Requirement: Contact form

The system SHALL render a contact form with five fields and a submit button,
with client-side validation.

#### Scenario: Form fields

- **GIVEN** the contact section is displayed
- **WHEN** the form is rendered
- **THEN** it SHALL show the heading "Drop your message"
- **AND** it SHALL show inputs for Your Name, Email, and Phone no., a Topic
  select (Topic one / Topic Two / Topic Three), and a Message textarea
- **AND** it SHALL show a "Send Message" submit button

#### Scenario: Validation

- **GIVEN** the form is displayed
- **WHEN** the user submits with empty or invalid fields
- **THEN** per-field error messages SHALL be shown
- **AND** the submit SHALL be blocked until the form is valid

### Requirement: Blog section

The system SHALL render a blog section with a header, "View All" link, and
two post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the "From News" kicker and the heading "News & Media
  center"
- **AND** it SHALL show a "View All" underlined link
- **AND** it SHALL show two post cards, each with an image, a date chip
  (e.g. "22 Apr 2020"), a title, and an excerpt

### Requirement: Map section

The system SHALL render a map placeholder.

#### Scenario: Map placeholder

- **GIVEN** the page is rendered
- **WHEN** the map section is displayed
- **THEN** it SHALL show a map placeholder area (static image or embedded map
  frame) between the blog and the final CTA

### Requirement: Footer

The system SHALL render a four-column footer with a dark bottom bar.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a Company column with links (Why choose us, Review,
  Customers, Blog, Carrier)
- **AND** it SHALL show a Production column with links (Technology, Products,
  Quality, Sales geography)
- **AND** it SHALL show a Contact Us column with an address, phone, and email
- **AND** it SHALL show a Newsletter column with a blurb, an email input, and
  a "Subscribe" button
- **AND** the bottom bar SHALL be dark navy and carry the repo-standard
  footer credit plus social icons

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Smelter app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, about, gallery, features,
  projects, offer CTA, testimonials, enquiry callout, contact form, blog,
  map, final CTA, and footer inside the main landmark in the original's order
- **AND** the document title SHALL be "Smelter — Industrial & Manufacturing"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- smelter` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → about →
      gallery → features → projects → offer CTA → testimonials → enquiry
      callout → contact form → blog → map → final CTA → footer).
- [ ] Design tokens applied: brand red-orange #ff3514 (gradient buttons
      #FF3514→#d62d12, kickers, .btn2 outlines, .all-btn underline), dark navy
      #140c40 (top bar, footer bottom), heading ink #072366, body grey
      #999999/#888888, light bg #f5f9fb (features, CTA, footer), Muli font,
      sharp 0-radius buttons (padding ~10px 65px 10px 31px, arrow icon sliding
      right on hover), 765px hero with fixed cover image.
- [ ] Hero has two slides, white 70px headline with accent word, gradient
      Learn More button, and circular video-play button.
- [ ] Contact form has all five fields, validation with per-field errors, and
      a "Send Message" submit.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Braxit), preview URL, tokens,
      and renames.
