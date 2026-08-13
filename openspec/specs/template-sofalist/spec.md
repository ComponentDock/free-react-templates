# Template: Sofalist (Furniture Store)

## Purpose

Sofalist is a furniture-store business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Furnish" template design (see TEMPLATES.md — appears 2×:
lines 586 and 1022; both rows point to the same source, one prep covers all;
verified with `grep -c 'wp/template/furnish/'` = 2), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/furnish/ (furniture store template)
Preview URL: https://preview.colorlib.com/theme/furnish/

## Design reference (replication findings)

- **Original:** ColorLib "Furnish" — furniture store landing page
  (`<title>Furnish - Free Bootstrap 5 Template by Colorlib</title>`). A
  light, airy one-pager on a pale-blue/white palette with warm amber
  accents: a 100vh split hero (left: pale-blue text panel with a white
  pill CTA; right: product photo); a 4-column pastel feature-card strip
  (dusty rose / sage / pale gold / tan); an image+text about split with a
  "Watch Video" play link; a hover-caption gallery ("Furniture
  Collection"); a light-blue stats band with 4 counters; a testimonial
  carousel on a light-gray band; a 3-step "How it Works" flow with big
  white circular icons and a two-button CTA row; a 3-card blog row; and a
  pale-blue footer with a contact-info column. Bootstrap 5 + tiny-slider +
  glightbox + AOS + Font Awesome + ionicons, NOT Tailwind. Brand palette:
  amber `#cf7500` + steel blue `#267aa4` + pale blue `#d4eaf5` + link blue
  `#3099cd` + white + 4 pastel card colors.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/furnish/
  (HTTP 200, ~36 KB HTML fetched; `css/style.css` ~69.5 KB parsed for
  tokens; page also imports animate.css, flaticon.css, tiny-slider.css,
  glightbox.min.css, aos.css, datepicker.min.css, font-awesome 4.7.0,
  ionicons 4.5.6; Bootstrap 5 bundle + tiny-slider + glightbox + AOS +
  jQuery, NOT Tailwind). Font: `"Poppins", Arial, sans-serif`.
- **Screenshot note:** `furnish-colorlib-template.jpg` (1200×946, browsed
  visually in the browser): split hero — left text panel on a very pale
  icy-blue background with a large dark heading "Best Design of Furniture
  Collections" and a white pill "Discover" button; right product shot of a
  light-wood stool on the matching pale-blue background. Below: the
  4-column pastel feature strip (pink / green / yellow / beige), then an
  about split (portrait photo of a woman on a warm beige background, small
  "ABOUT FURNISH" label, "Quality Makes the Belief for Customers"
  headline). The screenshot's header shows a top search bar and serif-ish
  headings (older build); the live preview DOM/CSS have NO search bar and
  use Poppins everywhere — the live preview DOM + parsed stylesheet are the
  authoritative reference, the screenshot confirms the layout/palette.

### Design tokens (from `css/style.css` + computed styles)

| Token                  | Value                                                                                               | Where                                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Primary CTA (amber)    | `#cf7500`                                                                                           | `.btn.btn-primary` bg + 1px border, white text (Learn More); hover: transparent bg + amber text                   |
| Button text blue       | `#267aa4`                                                                                           | `.btn.btn-white` text (hero "Discover" button)                                                                    |
| Link hover blue        | `#3099cd`                                                                                           | `.ftco-footer .ftco-footer-widget li a:hover`                                                                     |
| Pale blue (brand bg)   | `#d4eaf5`                                                                                           | `.ftco-footer` bg, `.ftco-section-counter .overlay` bg (over the bg_3.jpg photo), hero left panel bg (screenshot) |
| Light gray band        | `#f8f9fa` (Bootstrap `bg-light`)                                                                    | `.testimony-section`, "How it Works" section bg                                                                   |
| White                  | `#fff`                                                                                              | hero + footer buttons, `.flow-wrap .icon` 130px circles, gallery caption text                                     |
| Ink                    | `#000`                                                                                              | `.section-counter .number` color; headings inherit dark                                                           |
| Card 1 (Amazing Deals) | bg `#f5ebeb`, icon `#cb9696`                                                                        | `.services.color-1` (dusty rose)                                                                                  |
| Card 2 (Quality Furn.) | bg `#dcebdd`, icon `#8bbd8e`                                                                        | `.services.color-2` (sage)                                                                                        |
| Card 3 (Modern Design) | bg `#f5efd8`, icon `#d1b54a`                                                                        | `.services.color-3` (pale gold)                                                                                   |
| Card 4 (Best Support)  | bg `#f4e6d8`, icon `#d29a61`                                                                        | `.services.color-4` (tan)                                                                                         |
| Body font              | `"Poppins", Arial, sans-serif`                                                                      | body, navbar, buttons (4 rules)                                                                                   |
| Section h2             | 38px, weight 500, line-height 1.4                                                                   | `.heading-section h2`                                                                                             |
| Eyebrow/subheading     | 13px                                                                                                | `.heading-section .subheading` (e.g. "Our Finish Projects", "Testimonial")                                        |
| Counter number         | 40px, weight 600, `#000`, line-height 1                                                             | `.section-counter .number` (20 / 10200 / 9850 / 20)                                                               |
| Buttons (pill)         | radius 40px, padding 9px 12px; hero/footer `py-3 px-4`; shadow `0 24px 36px -11px rgba(0,0,0,0.09)` | `.btn` base (used with `btn-white` / `btn-primary` / `btn-secondary`)                                             |
| Flow icon circle       | 130px, radius 50%, bg `#fff`                                                                        | `.flow-wrap .icon` (margin-bottom 30px, centered)                                                                 |
| Gallery item           | height 340px, caption overlay hidden → `opacity:1` + `.icon` + `:after` overlay on hover            | `.ftco-gallery .gallery-wrap`                                                                                     |
| Footer bottom bar      | `bg-secondary` dark bar, 14px text                                                                  | `div.container-fluid.px-0.py-5.bg-secondary` copyright row                                                        |

### Section structure (from the live DOM, top to bottom)

1. `nav.ftco-navbar.ftco-navbar-light` — transparent navbar over the hero:
   brand "Furnish" (→ "Sofalist"), links Home, About, Collection, Blog,
   Contact (`ul.navbar-nav`; the old header search bar seen in the
   screenshot is NOT in the live DOM — skip it).
2. `section.hero-wrap` — 100vh split hero:
   - `.img` right half: bg photo `images/bg_2.jpg` (50% width, full
     height).
   - left half: `.text .desc`: `h1` "Best Design of **Furniture
     Collections**" (second phrase wrapped in `<span>`), `p` "A small
     river named Duden flows by their place and supplies it with the
     necessary regelialia.", `a.btn.btn-white` "Discover" (white pill,
     `#267aa4` text, padding `py-3 px-4`).
3. `section.ftco-section.ftco-no-pt.ftco-no-pb` — 4 × `div.col-md-3
.services-wrap` (`container-fluid`, `row g-2 py-2`), each
   `div.services.color-N`: circular icon (`flaticon-*` → lucide) + `h2`
   title + `p.mb-0` blurb:
   - Amazing Deals (handshake icon) — bg `#f5ebeb`, icon `#cb9696`.
   - Quality Furniture (kitchen icon) — bg `#dcebdd`, icon `#8bbd8e`.
   - Modern Design (furniture icon) — bg `#f5efd8`, icon `#d1b54a`.
   - Best Support (support icon) — bg `#f4e6d8`, icon `#d29a61`.
     (All four blurbs are identical placeholder copy in the source —
     paraphrase into distinct blurbs.)
4. `section.ftco-section.ftco-image.img` (bg photo `images/bg_4.jpg`) —
   about split, `row.justify-content-end`, `col-md-6`: `h2` "Quality
   Makes the Belief for Customers" + `p` + "Watch Video" play link
   (glightbox YouTube: icon circle + "Watch Video" text).
5. `section.ftco-gallery.ftco-no-pb.ftco-section` (`container-fluid`) —
   Furniture Collection gallery:
   - `div.heading-section.text-center`: eyebrow "Our Finish Projects" +
     `h2` "Furniture Collection".
   - `div.row.g-2`: 8 × `div.col-md-3` > `a.gallery-wrap.img` (height
     340px, bg photo `images/gallery-N.jpg`, glightbox) — hover reveals
     dark overlay + centered caption `h2.mb-0` + search icon. Source
     repeats the caption "Business Finance Consulting" on all 8 tiles —
     rename to furniture collection names (e.g. "Oak Dining Set", "Velvet
     Lounge Chair", "Nordic Sideboard", ...).
6. `section.ftco-section-counter.img` (bg photo `images/bg_3.jpg` +
   pale-blue `#d4eaf5` overlay) — Technical Statistics:
   - eyebrow "Great Reviews for our services" + `h2` "Technical
     Statistics".
   - `div.row.section-counter`: 4 × `div.counter-wrap-2` (text-center):
     `h2.number` countup value + `span.caption`: 20 Year of Experienced /
     10200 Satisfied Customers / 9850 Project Completed / 20 Get Awards
     (numbers 40px weight 600 black; static — no count-up animation
     required).
7. `section.ftco-section.testimony-section.bg-light` — Happy Customers
   testimonial carousel (tiny-slider):
   - eyebrow "Testimonial" + `h2` "Happy Customers".
   - slides (`div.item` > `div.testimony-wrap`): quote-left icon +
     quote `p` + author row (`user-img` avatar + `p.name` "Roger Scott" +
     `span.position` "Marketing Manager"). 3+ slides; paraphrase quotes,
     vary author names. Prev/next controls.
8. `section.ftco-section.bg-light.ftco-no-pt` — How it Works:
   - `h2` "How it Works" (centered heading block).
   - 3 × `div.col-md-4` > `div.flow-wrap` (text-center, numbered badge
     `small` 01/02/03 + 130px white circle icon + `h2` title + `p`):
     01 Get A Free Quote (calculator icon) / 02 Production (production
     icon) / 03 Delivery & Assembly (package icon).
   - CTA row (`col-md-12.text-center`): `a.btn.btn-primary` "Learn More"
     (amber pill) + `a.btn.btn-secondary` "Get A Request".
9. `section.ftco-section` — Recent From Blog:
   - `h2` "Recent From Blog" (heading block).
   - 3 × `div.blog-entry.justify-content-end.d-md-flex`: `a.block-20.img`
     (blog photo `images/image_N.jpg`) + `div.text`: `p.meta` (user icon
     "Admin", calendar icon "Jan. 27, 2021", comment icon "3 Comments") +
     `h3.heading > a` title + `p` excerpt. Source repeats the same
     placeholder title on all 3 — paraphrase 3 distinct furniture-blog
     titles.
10. `footer.ftco-footer` (bg `#d4eaf5`) — 4 columns:
    - Brand col: "Furnish" (→ "Sofalist") + about text + `ul.ftco-footer-social`
      social icon row.
    - `h2` "Services" + link list.
    - `h2` "Recent Posts" + link list.
    - `h2` "Have a Questions?" + `div.block-23` contact list: address
      (`fa-map-marker` "203 Fake St. Mountain View, San Francisco,
      California, USA"), phone (`fa-phone` "+2 392 3929 210"), email
      (`fa-paper-plane` "info@yourdomain.com").
    - Bottom bar `div.container-fluid.px-0.py-5.bg-secondary` (dark):
      copyright line — Colorlib credit → Component Dock per AGENTS.md
      (https://www.componentdock.com/).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with a brand
wordmark and the five nav links, plus an accessible mobile menu.

#### Scenario: Desktop nav

- **GIVEN** the Sofalist app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand wordmark "Sofalist"
- **AND** SHALL show links Home, About, Collection, Blog, and Contact
  (Poppins, dark text on the pale hero)
- **AND** the navbar SHALL sit transparently over the hero section

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger toggle is activated
- **THEN** a slide-down navigation panel SHALL open listing the same links
- **AND** the panel SHALL close via the toggle, Escape, or a link click

### Requirement: Hero

The system SHALL render a 100vh split hero with a text panel on the left
and a photo on the right, plus a white pill CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the left half SHALL show the headline "Best Design of Furniture
  Collections" (dark, large) with the phrase "Furniture Collections"
  emphasized, a short paragraph, and a white pill button reading "Discover"
- **AND** the button SHALL use white background with steel-blue `#267aa4`
  text and a pill radius (40px)
- **AND** the right half SHALL render a furniture photo (picsum seed)
- **AND** the section SHALL be full viewport height

### Requirement: Feature cards

The system SHALL render four equal pastel feature cards with circular
icons, titles, and blurbs.

#### Scenario: Four features

- **GIVEN** the feature strip is rendered
- **WHEN** the page loads
- **THEN** four cards SHALL render with icon + title + blurb:
  "Amazing Deals", "Quality Furniture", "Modern Design", "Best Support"
- **AND** the cards SHALL use the pastel pairs: `#f5ebeb`/`#cb9696`,
  `#dcebdd`/`#8bbd8e`, `#f5efd8`/`#d1b54a`, `#f4e6d8`/`#d29a61`
- **AND** each blurb SHALL be distinct (paraphrased from the source
  placeholder copy)

### Requirement: About split

The system SHALL render an image+text about split with a "Watch Video"
play link.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a background photo with a right-aligned
  text column
- **AND** the heading SHALL read "Quality Makes the Belief for Customers"
- **AND** a paragraph SHALL render beneath it
- **AND** a "Watch Video" link SHALL render with a circular play icon
  (accessible aria-label; link/modal optional)

### Requirement: Furniture Collection gallery

The system SHALL render a gallery of eight tiles with hover caption
overlays.

#### Scenario: Gallery grid

- **GIVEN** the gallery section is rendered
- **WHEN** the page loads
- **THEN** the eyebrow SHALL read "Our Finish Projects" and the heading
  "Furniture Collection"
- **AND** eight gallery tiles SHALL render in a 4-column grid, each with a
  furniture photo (picsum seed) and a distinct furniture-collection caption
  (e.g. "Oak Dining Set", "Velvet Lounge Chair", "Nordic Sideboard")
- **AND** hovering a tile SHALL reveal a dark overlay with the caption and
  a search icon

### Requirement: Statistics band

The system SHALL render a light-blue stats band with a heading and four
counters.

#### Scenario: Counter content

- **GIVEN** the stats band is rendered
- **WHEN** the page loads
- **THEN** the eyebrow SHALL read "Great Reviews for our services" and the
  heading "Technical Statistics"
- **AND** four counters SHALL render (black 40px weight 600 numbers):
  20 "Year of Experienced", 10200 "Satisfied Customers", 9850 "Project
  Completed", 20 "Get Awards"
- **AND** the band background SHALL be the pale blue `#d4eaf5` over a
  photo

### Requirement: Testimonials

The system SHALL render a testimonial carousel on the light-gray band with
quotes, avatars, authors, and prev/next controls.

#### Scenario: Carousel content

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the eyebrow SHALL read "Testimonial" and the heading "Happy
  Customers"
- **AND** at least three slides SHALL exist, each with a quote icon, a
  quote, an avatar, an author name, and a position
- **AND** prev/next arrow controls SHALL move between slides (wrapping or
  clamping)

### Requirement: How it Works

The system SHALL render a three-step flow with numbered white circular
icons and a two-button CTA row.

#### Scenario: Flow steps

- **GIVEN** the How it Works section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "How it Works"
- **AND** three steps SHALL render centered, each with a 01/02/03 badge, a
  white 130px circular icon, a title, and a blurb:
  01 "Get A Free Quote", 02 "Production", 03 "Delivery & Assembly"
- **AND** a CTA row SHALL render with an amber pill "Learn More"
  (`#cf7500`, white text) and a secondary pill "Get A Request"

### Requirement: Blog

The system SHALL render three blog cards with image, meta row, title, and
excerpt.

#### Scenario: Blog entries

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Recent From Blog"
- **AND** three entries SHALL render, each with a photo, a meta row (author
  "Admin", date, comment count), a distinct furniture-blog title, and an
  excerpt

### Requirement: Footer

The system SHALL render a pale-blue footer with brand/social, Services,
Recent Posts, contact info, and the Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer background SHALL be the pale blue `#d4eaf5`
- **AND** the first column SHALL show the brand, an about excerpt, and a
  row of social icon links
- **AND** the second column SHALL list "Services" links and the third
  "Recent Posts" links
- **AND** the fourth column SHALL show "Have a Questions?" with address,
  phone, and email contact lines
- **AND** the bottom bar SHALL be dark (`bg-secondary`) with a copyright
  line crediting Component Dock (https://www.componentdock.com/) instead
  of ColorLib

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Sofalist app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, feature cards, about split,
  gallery, statistics, testimonials, How it Works, blog, and footer in
  order
- **AND** the document title SHALL be "Sofalist — Furniture Store Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/sofalist` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- sofalist` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#cf7500, #267aa4, #d4eaf5, #3099cd, #f8f9fa, #f5ebeb, #cb9696, #dcebdd, #8bbd8e, #f5efd8, #d1b54a, #f4e6d8, #d29a61, #000, #fff) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `sofalist-<n>`, Google Fonts Poppins link, lucide icons only)
- [ ] Buttons are pills (radius 40px): white pill hero "Discover" (`#267aa4` text), amber `#cf7500` "Learn More" (hover: transparent + amber), secondary "Get A Request"; shadow `0 24px 36px -11px rgba(0,0,0,0.09)`
- [ ] Hero: 100vh split, left text panel on pale blue, right photo, `<span>` emphasis on "Furniture Collections"
- [ ] Four pastel feature cards with circular icons + distinct blurbs
- [ ] Gallery: 8 tiles, 340px tall, hover caption overlay + search icon
- [ ] Stats band: pale-blue overlay over photo, 4 black 40px/600 counters
- [ ] Testimonials carousel implemented with client-side state (no tiny-slider dep); 3+ slides, prev/next controls
- [ ] How it Works: 3 steps with 01/02/03 badges + 130px white circle icons; Learn More + Get A Request CTA row
- [ ] Blog: 3 entries, distinct paraphrased titles, meta row (Admin / date / comments)
- [ ] Footer: pale blue `#d4eaf5`, contact block (address/phone/email), dark bottom bar, Component Dock credit; no ColorLib references in app code
