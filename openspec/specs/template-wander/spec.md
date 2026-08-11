# Template: Wander (Bootstrap)

## Purpose

Wander is a single-page travel & tours website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hepta" website template design (source:
https://colorlib.com/wp/template/hepta/), built under a DIFFERENT name
(Wander — a travel-themed word, keeping the "Travel & Tours" spirit of
"Hepta" while being a new, original name) per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hepta" — travel & tours website template (source:
  https://colorlib.com/wp/template/hepta/, category "Bootstrap (216)").
  Template name: "Hepta".
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/hepta/`) is REACHABLE (HTTP 200,
  ~23 KB HTML + `css/style.css` ~17.7 KB + Bootstrap 4 CSS parsed for
  tokens). Structure below comes from the live preview DOM, which is
  authoritative.
- **Screenshot note:** the TEMPLATES.md screenshot (`hepta-free-template.jpg`)
  matches the live preview: full-viewport hero photo of a Greek coastal
  town (Santorini-style white buildings + blue domes) with the centered
  white serif "Travel & Tours" headline, ghost "VISIT COLORLIB" button and
  scroll-down link; below, a white "Welcome To Our Website" split section,
  then the pale (#FAFAFA) "Experience Once In Your Life Time" feature grid,
  the full-height image carousel, the solid TEAL "Recent Blog Post" band
  (white diagonal slant at its top edge), testimonials, destination grid
  and the near-black footer. Live computed styles confirm: regular section
  h2 headings are 32px Abril Fatface #000; testimonial/slider/blog headings
  are 70px; the blog heading on the teal band is literally #000 (reference
  quirk — replicate as-is).
- **Section order (1:1, from live preview DOM):**
  1. Header (`site-header`, absolute over hero, padding 60px 0): brand
     "Hepta" (Abril Fatface 30px, white, bold) top-left; hamburger
     `site-menu-toggle` top-right (40x45px, three 2px white bars at
     top 0/10/20, open state rotates into an X, bars turn #000 when menu
     open). Opening reveals a FULLSCREEN WHITE fixed overlay nav
     (`site-navbar`, bg #FFF): links Home · Hotels · About Us · Gallery ·
     News · Contact in Abril Fatface 40px #000, active + hover #65c0ba
     (active also gets a `:before` underline), centered, 100vh.
  2. Hero (`site-hero overlay`, background-image hero_1.jpg, 100vh /
     min-height 700px): `.overlay:before` = solid rgba(0,0,0,.2) darken.
     Content centered (`site-hero-inner`, 100vh): `h1.heading` "Travel &
     Tours" (Abril Fatface 80px, #FFF, line-height 1), `p.sub-heading`
     "A free template by Colorlib. Download and share!" (Mukta Mahee 200,
     30px #FFF, lh 1.5; the "Colorlib" link is rgba(255,255,255,.5) with a
     2px bottom border, → white on hover), CTA `a.btn.uppercase.btn-outline-light`
     "VISIT COLORLIB" (transparent bg, 2px white border, radius 4px,
     uppercase 15px letter-spacing .2em, `py-3`), and a `.scroll-down`
     link absolutely bottom-center (play icon rotated 90deg, 13px +
     "SCROLL DOWN") anchoring to #next-section.
  3. Welcome (`section#next-section`, white, `padding: 7em 0`): split row —
     image left (`col-lg-6`, img_1_long.jpg, `img-fluid`) + text right
     (`col-lg-6 pl-lg-5`): `h2` "Welcome To Our Website" (Abril Fatface
     32px #000), two lorem paragraphs (body Mukta Mahee 18px #6c757d lh
     1.8), and a `btn-play` link "Watch The Video" (50px circle icon,
     2px #E6E6E6 border, play glyph; text uppercase, bold, letter-spacing
     .1em; hover: icon border → #1A1A1A, glyph → #000; opens video in a
     lightbox — implement as a link with aria-label).
  4. Experience (`section.bg-light-2`, bg #FAFAFA, border-top #E0E0E0):
     centered `h2.heading` "Experience Once In Your Life Time" (32px Abril
     Fatface) + `.lead` paragraph, then SIX feature cards in a 3-col grid
     (`col-md-6 col-lg-4`, `ftco-img-flaticon`, text-center): flaticon SVG
     icon 70px + `h3` (Abril Fatface, #000) + paragraph. Cards: Good
     Foods, Travel Anywhere, Airplane, Beach Resort, Mountain Climbing,
     Hot Air Balloon.
  5. Slider (`section.slider-section`, white): centered `h2.heading`
     "International Tour Management." (70px Abril Fatface) + lead, then
     `owl-carousel.home-slider` with SIX `.slider-item` images (each
     height calc(100vh - 117px), min 700px; inactive items opacity .4;
     white prev/next arrow buttons hidden until hover; dots at bottom
     100px).
  6. Blog (`section.blog-post-entry.bg-light.slant-top`): solid TEAL
     #65C0BA background with a WHITE rotated slant strip at its top
     (`bg-light:before`: white, 400px tall, 150% wide, rotate(-4deg),
     translated up). Centered `h2.heading` "Recent Blog Post" (70px Abril
     Fatface; computed color #000 per live page — replicate) + lead
     paragraph rgba(255,255,255,.7), then THREE `post` cards
     (`col-lg-4 col-md-6`): white card (`media-custom`, shadow
     0 2px 5px -2px rgba(0,0,0,.1), hover 0 10px 30px -10px) — image,
     `span.meta-post` date "February 26, 2018" (uppercase, letter-spacing
     .1em, #CED4DA), `h2` title link 26px ("45 Best Places To Unwind",
     #000, hover #65C0BA), paragraph (media-body padding 10px 30px).
  7. Testimonials (`section.testimonial-section.bg-light-2`): centered
     `h2.heading` "Happy Customers" (70px Abril Fatface), then THREE
     `testimonial` cards (`col-md-4`): `author-image` 70px rounded-circle
     photo, `blockquote p` 20px italic #000 (Mukta Mahee, lh 1.5), `em`
     attribution "— Clare Gupta" / "— Rogie Slater" / "— John Doe".
  8. Top Destination (`section.visit-section`, white): centered
     `h2.heading` "Top Destination" (32px Abril Fatface) + `.lead`, then
     FOUR `visit` cards (`col-lg-3 col-md-6`): image (`img-fluid`, shadow
     0 2px 3px rgba(0,0,0,.2), mb 15px), `h3` 20px title link (Food &
     Wines, Resort & Spa, Hotel Rooms, Mountain Climbing; hover #65C0BA),
     star-rating row (4.5/5 or 4/5 filled stars, 18px #65C0BA, half-star
     for .5), and an italic review count (#CCC; "3,239 reviews",
     "4,921 reviews", "2,112 reviews", "6,421 reviews").
  9. Footer (`footer.footer-section`, bg #1A1A1A, white text): FOUR
     columns — "Quick Link" (About Us, Terms & Conditions, Privacy
     Policy, Help, Rooms) · "Support" (Our Location, The Hosts, About,
     Contact, Restaurant) · "Contact Info" (Address: 98 West 21th Street,
     Suite 721 New York NY 10016 / Phone: (+1) 435 3533 / Email:
     info@yourdomain.com; the label spans are italic #FFF) · "Subscribe"
     ("Sign up for our newsletter" + form: transparent input, no border
     except bottom 1px rgba(255,255,255,.2), radius 0, italic placeholder
     rgba(255,255,255,.2), focus bottom border white, paper-plane submit
     button absolute top-right). Footer h3s 18px #FFF (mb 20px); links
     rgba(255,255,255,.7) → #FFF; body p rgba(255,255,255,.5); list
     items mb 10px. Bottom bar (border-top 1px rgba(255,255,255,.1)):
     "Copyright © <year> All rights reserved | This template is made with
     ♥ by Colorlib" + social icon row (facebook, twitter, instagram,
     linkedin, youtube — 18px, padding 10px).
- **Design tokens extracted from `css/style.css` + preview DOM:**
  - Brand color: **#65C0BA** (teal/mint) — `::selection` bg, menu overlay
    active/hover link color, `.visit` h3 hover, star ratings, `.form-control`
    focus border, `.bg-light` section bg, blog card title hover.
  - Fonts: **"Mukta Mahee", arial, sans-serif** (body, weight 200, 18px,
    line-height 1.8, color #6C757D) and **"Abril Fatface", times, serif**
    (h1–h3, logo, menu links) — Google Fonts `<link>`:
    `Mukta+Mahee:200,300,400|Abril+Fatface:400,700`.
  - Headings: default #000 (h1/h2/h3); hero h1 #FFF 80px lh 1; special
    section headings (slider/testimonial/blog) 70px; regular section h2
    32px; blog card h2 26px; visit h3 20px; footer h3 18px #FFF.
  - Section backgrounds: default white; `.bg-light-2` = **#FAFAFA** +
    border-top **#E0E0E0** (Experience, Testimonials); `.bg-light` =
    **#65C0BA** + white rotated slant strip (Blog); footer **#1A1A1A**.
  - Hero overlay: solid **rgba(0,0,0,.2)** (NOT a gradient).
  - Buttons: `.btn` radius **4px**, padding 10px 30px, no shadow; outline
    variant border-width **2px**; uppercase variant 15px letter-spacing
    .2em; `.btn-primary` transparent bg + 2px border (white text on
    hero), hover bg #65C0BA.
  - Blog cards: white, shadow 0 2px 5px -2px rgba(0,0,0,.1) →
    hover 0 10px 30px -10px rgba(0,0,0,.1).
  - Visit card images: shadow 0 2px 3px rgba(0,0,0,.2).
  - Stars: 18px #65C0BA (half-star glyph for .5); review count italic
    #CCC.
  - Newsletter input: transparent bg, radius 0, only bottom border
    1px rgba(255,255,255,.2); placeholder italic rgba(255,255,255,.2);
    focus → white bottom border.
  - Menu overlay: fullscreen fixed, bg #FFF; links Abril Fatface 40px
    #000; active/hover #65C0BA. Toggle bars #FFF at rest, #000 when open.
  - Carousel: slides height calc(100vh - 117px), min 700px; inactive
    opacity .4; white arrows fade in on hover; dots bottom 100px.

## Requirements

### Requirement: Header and navigation overlay

The system SHALL render a transparent header over the hero with the brand
and a hamburger toggle that opens a fullscreen navigation overlay.

#### Scenario: Header content

- **GIVEN** the Wander page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be positioned over the hero (absolute, top)
- **AND** it SHALL show the brand "Wander" in white Abril Fatface (30px,
  bold) top-left
- **AND** it SHALL show a hamburger toggle top-right with three white
  bars (2px thick)

#### Scenario: Opening the navigation overlay

- **GIVEN** the hamburger toggle is visible
- **WHEN** the user activates it
- **THEN** a fullscreen white overlay SHALL open covering the viewport
- **AND** it SHALL list the nav links Home, Hotels, About Us, Gallery,
  News, and Contact in large black Abril Fatface type (40px)
- **AND** the active link (Home) SHALL be teal (#65C0BA)
- **AND** links SHALL turn teal (#65C0BA) on hover
- **AND** the toggle bars SHALL rotate into an X and turn black

#### Scenario: Closing the navigation overlay

- **GIVEN** the navigation overlay is open
- **WHEN** the user activates the toggle again (or clicks a link)
- **THEN** the overlay SHALL close
- **AND** the toggle SHALL return to three horizontal white bars

#### Scenario: Accessible toggle

- **GIVEN** the page is rendered
- **WHEN** the toggle is rendered
- **THEN** it SHALL have an aria-label and aria-expanded state reflecting
  open/closed

### Requirement: Hero

The system SHALL render a full-viewport hero with a background photo, a
subtle dark overlay, centered headline, subheading, CTA button, and a
scroll-down link.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL fill the viewport (100vh, min-height 700px)
- **AND** it SHALL show a travel-photo background image with a subtle
  dark overlay (rgba(0,0,0,.2))
- **AND** it SHALL show the headline "Travel & Tours" centered in very
  large white Abril Fatface (80px)
- **AND** it SHALL show the subheading "A free template by Colorlib.
  Download and share!" in light 200-weight white type (30px), with the
  "Colorlib" link underlined and rgba(255,255,255,.5), white on hover
- **AND** it SHALL show a "VISIT COLORLIB" ghost button (transparent,
  2px white border, radius 4px, uppercase with wide letter-spacing)

#### Scenario: Scroll-down link

- **GIVEN** the hero is displayed
- **WHEN** the user looks at the bottom center of the hero
- **THEN** a scroll-down link SHALL be present (play icon rotated 90deg
  - "Scroll Down" label) that anchors to the Welcome section

### Requirement: Welcome section

The system SHALL render a two-column split section with an image on the
left and text with a video-play link on the right.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the Welcome section is displayed
- **THEN** it SHALL show a large image on the left (fluid, full width on
  mobile, stacking above the text)
- **AND** it SHALL show the heading "Welcome To Our Website" (Abril
  Fatface 32px, #000)
- **AND** it SHALL show two supporting paragraphs
- **AND** it SHALL show a "Watch The Video" play link with a 50px
  circular icon (2px #E6E6E6 border) and uppercase bold label, whose
  icon border darkens (#1A1A1A) on hover

### Requirement: Experience features

The system SHALL render a pale-background section with a centered heading
and a grid of six feature cards.

#### Scenario: Experience section content

- **GIVEN** the page is rendered
- **WHEN** the Experience section is displayed
- **THEN** it SHALL have a #FAFAFA background with a #E0E0E0 top border
- **AND** it SHALL show the centered heading "Experience Once In Your
  Life Time" with a lead paragraph
- **AND** it SHALL show SIX feature cards in a 3-column grid (2 columns
  on tablet, 1 on mobile): Good Foods, Travel Anywhere, Airplane, Beach
  Resort, Mountain Climbing, Hot Air Balloon

#### Scenario: Feature card content

- **GIVEN** a feature card is displayed
- **WHEN** the card renders
- **THEN** it SHALL show an icon (~70px, lucide icon approximating the
  flaticon subject), an h3 title (Abril Fatface, #000), and a short
  paragraph
- **AND** the card content SHALL be centered

### Requirement: Slider

The system SHALL render a centered heading followed by a full-height
image carousel with six slides.

#### Scenario: Slider section content

- **GIVEN** the page is rendered
- **WHEN** the Slider section is displayed
- **THEN** it SHALL show the centered heading "International Tour
  Management." (70px Abril Fatface) with a lead paragraph
- **AND** it SHALL show a carousel of SIX full-bleed images (each ~100vh
  minus header, min 700px)

#### Scenario: Carousel behavior

- **GIVEN** the carousel is displayed
- **WHEN** the user interacts with it
- **THEN** it SHALL auto-advance (or advance via arrow buttons) between
  slides
- **AND** non-active slides SHALL be dimmed (opacity ~.4)
- **AND** prev/next arrow buttons SHALL be white and fade in on hover
- **AND** dot indicators SHALL be present near the bottom

### Requirement: Recent blog posts

The system SHALL render a teal band with a white diagonal slant at its
top, a centered heading, and three white blog cards.

#### Scenario: Blog band background

- **GIVEN** the page is rendered
- **WHEN** the Blog section is displayed
- **THEN** it SHALL have a solid teal background (#65C0BA)
- **AND** it SHALL have a white diagonal slant strip along its top edge

#### Scenario: Blog section content

- **GIVEN** the Blog section is displayed
- **WHEN** the section renders
- **THEN** it SHALL show the centered heading "Recent Blog Post" (70px
  Abril Fatface, #000 per the reference) with a lead paragraph in
  translucent white (rgba(255,255,255,.7))
- **AND** it SHALL show THREE white blog cards in a 3-column grid (2
  columns on tablet, 1 on mobile)

#### Scenario: Blog card content

- **GIVEN** a blog card is displayed
- **WHEN** the card renders
- **THEN** it SHALL show an image, an uppercase date meta line
  (letter-spaced, #CED4DA, e.g. "February 26, 2018"), a 26px title link
  (e.g. "45 Best Places To Unwind", #000, teal on hover), and a short
  paragraph
- **AND** the card SHALL cast a subtle shadow that deepens on hover

### Requirement: Testimonials

The system SHALL render a pale-background section with a centered heading
and three testimonial cards.

#### Scenario: Testimonial section content

- **GIVEN** the page is rendered
- **WHEN** the Testimonial section is displayed
- **THEN** it SHALL have a #FAFAFA background with a #E0E0E0 top border
- **AND** it SHALL show the centered heading "Happy Customers" (70px
  Abril Fatface)
- **AND** it SHALL show THREE testimonial cards in a 3-column grid

#### Scenario: Testimonial card content

- **GIVEN** a testimonial card is displayed
- **WHEN** the card renders
- **THEN** it SHALL show a 70px circular author photo
- **AND** it SHALL show an italic 20px black quote
- **AND** it SHALL show an italic attribution (e.g. "— Clare Gupta")

### Requirement: Top destinations

The system SHALL render a section with a centered heading and a grid of
four destination cards with star ratings.

#### Scenario: Destination section content

- **GIVEN** the page is rendered
- **WHEN** the Top Destination section is displayed
- **THEN** it SHALL show the centered heading "Top Destination" (32px
  Abril Fatface) with a lead paragraph
- **AND** it SHALL show FOUR destination cards in a 4-column grid (2
  columns on tablet, 1 on mobile)

#### Scenario: Destination card content

- **GIVEN** a destination card is displayed
- **WHEN** the card renders
- **THEN** it SHALL show an image (with a subtle shadow), a 20px title
  link (teal on hover), a star-rating row (18px teal stars; half-star
  for 4.5 ratings), and an italic review count (e.g. "3,239 reviews")

### Requirement: Footer

The system SHALL render a near-black footer with four widget columns, a
newsletter form, a copyright bar, and social links.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a #1A1A1A background with white headings
- **AND** it SHALL show a "Quick Link" column (About Us, Terms &
  Conditions, Privacy Policy, Help, Rooms)
- **AND** it SHALL show a "Support" column (Our Location, The Hosts,
  About, Contact, Restaurant)
- **AND** it SHALL show a "Contact Info" column (Address: 98 West 21th
  Street, Suite 721 New York NY 10016; Phone: (+1) 435 3533; Email:
  info@yourdomain.com) with the labels in italic white
- **AND** it SHALL show a "Subscribe" column with the text "Sign up for
  our newsletter"

#### Scenario: Newsletter form

- **GIVEN** the Subscribe column is displayed
- **WHEN** the user views the form
- **THEN** an email input SHALL be present with italic placeholder
  "Your email..." styled with only a bottom border
  (rgba(255,255,255,.2)) that turns white on focus
- **AND** a paper-plane submit button SHALL be present at the right of
  the input (aria-label for the icon button)

#### Scenario: Bottom bar

- **GIVEN** the footer is displayed
- **WHEN** the user reaches the bottom
- **THEN** a copyright line SHALL read "Copyright © <current year> All
  rights reserved | This template is made with ♥ by Colorlib"
- **AND** social icon links (facebook, twitter/X, instagram, linkedin,
  youtube) SHALL be present

### Requirement: Page composition

The system SHALL compose all sections in the reference order on one page.

#### Scenario: Section order

- **GIVEN** the Wander page is rendered
- **WHEN** the user scrolls from top to bottom
- **THEN** the sections SHALL appear in this order: Header, Hero,
  Welcome, Experience, Slider, Recent Blog Posts, Testimonials, Top
  Destinations, Footer

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] Section order matches the reference 1:1 (Header → Hero → Welcome →
      Experience → Slider → Blog → Testimonials → Top Destination →
      Footer)
- [ ] Design tokens reproduced in Tailwind `@theme`: `--color-brand`
      #65C0BA (teal), `--color-light-bg` #FAFAFA, `--color-border-soft`
      #E0E0E0, `--color-ink` #000, `--color-footer` #1A1A1A,
      `--color-meta` #CED4DA; fonts Mukta Mahee (200, 300, 400) + Abril
      Fatface (400, 700) via Google Fonts `<link>` in `index.html`
- [ ] Header: transparent over hero, brand "Wander" white Abril Fatface
      30px, hamburger (3 bars) → fullscreen WHITE overlay nav with 40px
      black Abril Fatface links (Home, Hotels, About Us, Gallery, News,
      Contact), active/hover teal; toggle animates to X, aria-expanded
- [ ] Hero: 100vh (min 700px), travel photo bg + rgba(0,0,0,.2) overlay,
      "Travel & Tours" 80px white Abril Fatface, 30px subheading, ghost
      "VISIT COLORLIB" button (radius 4px, 2px white border, uppercase
      letter-spaced), bottom-center scroll-down link (rotated play icon + "Scroll Down") anchoring to Welcome
- [ ] Welcome: image left / text right (stacks on mobile), 32px heading,
      two paragraphs, "Watch The Video" play link (50px circle, 2px
      #E6E6E6 border, hover darkens)
- [ ] Experience: #FAFAFA bg + #E0E0E0 top border, centered heading +
      lead, SIX centered feature cards (icon ~70px lucide + h3 + p) in
      3-col grid
- [ ] Slider: 70px heading "International Tour Management.", carousel of
      six ~100vh images, inactive slides dimmed (opacity .4), white
      arrows fade in on hover, dot indicators
- [ ] Blog: solid #65C0BA band with white diagonal slant at top; 70px
      heading "Recent Blog Post" (#000 per reference) + translucent-white
      lead; THREE white cards (image, uppercase date meta, 26px title
      link, paragraph) with deepening hover shadow
- [ ] Testimonials: #FAFAFA bg, 70px "Happy Customers" heading, THREE
      cards (70px circular photo, italic 20px quote, italic attribution)
- [ ] Top Destination: 32px heading + lead, FOUR cards (image + 20px
      title, teal hover, 18px teal stars with half-star, italic review
      count)
- [ ] Footer: #1A1A1A, four columns (Quick Link, Support, Contact Info,
      Subscribe), underline-only newsletter input + paper-plane submit,
      copyright bar + five social links
- [ ] All images are picsum placeholders with alt text; no ColorLib
      assets
- [ ] Icons from lucide-react (no icon fonts copied; feature icons
      approximate flaticon subjects, e.g. Utensils, Globe, Plane,
      Palmtree, Mountain, and a balloon/cloud-like icon for Hot Air
      Balloon)
- [ ] Mobile menu toggle + accessible controls (aria-label/aria-expanded)
- [ ] Tests: one `describe` per component, scenarios mirroring this spec;
      100% coverage (lines/functions/branches/statements)
- [ ] `scripts/verify-app.sh wander` green (typecheck + lint + coverage +
      build)
