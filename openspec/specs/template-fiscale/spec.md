# Template: Fiscale (Finance Consulting)

## Purpose

Fiscale is a finance-consulting business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Framework" template design (see TEMPLATES.md — appears 2×:
lines 584 and 1382; both rows point to the same source, one prep covers all;
verified with `grep -c 'wp/template/framework/'` = 2), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/framework/ (finance/business template)
Preview URL: https://preview.colorlib.com/theme/framework/

## Design reference (replication findings)

- **Original:** ColorLib "Framework" — corporate finance landing page
  (`<title>Framework &mdash; Free Bootstrap 5 Website Template by
Colorlib</title>`). A flat, corporate finance one-pager: transparent
  absolute navbar (white links) over a solid blue hero; a 4-card "step"
  service row; a "Features" section with three alternating image/text rows
  numbered with green circles; a testimonials slider; a 3-card pricing
  section; a solid blue CTA band; and a light-gray footer. Bootstrap 5 +
  tiny-slider + glightbox + AOS scroll animations (NOT Tailwind). Brand
  palette: green `#24b800` + royal blue `#4877fb`.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/framework/
  (HTTP 200, ~30 KB HTML fetched; `css/style.css` ~58 KB parsed for tokens;
  page also imports bootstrap.css, aos.css, glightbox.min.css,
  tiny-slider.css, fonts/flaticon + fonts/icomoon icon fonts; jQuery +
  tiny-slider + glightbox + AOS, NOT Tailwind).
- **Screenshot note:** `framework-free-template.jpg` (1200×946) MATCHES the
  live template (blue hero with white headline, transparent nav, pill CTA,
  person-with-phone photo on hero right, tops of the 4 white step cards on
  light-gray, start of the Features section with dashboard illustration +
  green circle). The live preview DOM + stylesheet are the authoritative
  reference; the screenshot confirms the same design.

### Design tokens (from `css/style.css` + computed styles)

| Token                  | Value                                                                                                       | Where                                                                                                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary (green)        | `#24b800`                                                                                                   | `--bs-primary`, `.btn.custom-primary` hover bg, `.number` circle bg, `.list-check.primary li:before`, testimonial arrows hover bg, `.site-footer a` links, `text-primary`              |
| Secondary (blue)       | `#4877fb`                                                                                                   | `--bs-secondary`, `.bg-secondary`, `.hero.overlay:before` overlay, section h2 headings (`text-secondary`), `.price`, `.btn.custom-secondary` hover bg, `.step:before` hover top border |
| Ink                    | `#000`                                                                                                      | widget h3, testimonial author names, `.price` (Standard), form inputs                                                                                                                  |
| Body text              | `rgba(0,0,0,0.5)`                                                                                           | body / list text                                                                                                                                                                       |
| Muted                  | `#888` / `#777`                                                                                             | footer text / footer link color                                                                                                                                                        |
| Footer bg              | `#efefef`                                                                                                   | `.site-footer`                                                                                                                                                                         |
| Light bg               | `#f8f9fa`                                                                                                   | `.bg-light` (steps section)                                                                                                                                                            |
| Card white             | `#fff`                                                                                                      | steps, testimonials, pricing items                                                                                                                                                     |
| Price border           | `#ccc` / `#e6e6e6`                                                                                          | `.pricing-item` border + h3 bottom border                                                                                                                                              |
| Hero heading font      | `"Poppins", sans-serif`                                                                                     | `.hero .heading` (50px, weight 700, white)                                                                                                                                             |
| Body font              | `"Open Sans", sans-serif`                                                                                   | `body` (computed)                                                                                                                                                                      |
| Nav font               | `"Poppins", sans-serif`                                                                                     | nav links (14px, `rgba(255,255,255,0.7)`, hover `#fff`)                                                                                                                                |
| Section heading        | 34px bold `#4877fb`                                                                                         | `.section .heading` (h2)                                                                                                                                                               |
| Feature h3             | 24px bold `#24b800`                                                                                         | `.heading-2.text-primary`                                                                                                                                                              |
| Buttons                | radius 30px (pill), padding 12px 30px, 12px, weight 700, uppercase, letter-spacing 0.1rem                   | `.btn`                                                                                                                                                                                 |
| `custom-primary` btn   | bg `rgba(36,184,0,0.2)`, text `#24b800`; hover bg `#24b800`, text `#fff`                                    | Read more / Standard Get started                                                                                                                                                       |
| `custom-secondary` btn | bg `rgba(72,119,251,0.2)`, text `#4877fb`; hover bg `#4877fb`, text `#fff`                                  | Basic/Advanced Get started                                                                                                                                                             |
| `custom-white-2` btn   | bg `rgba(255,255,255,0.2)`, text `#fff`; hover bg `#fff`, text `#4877fb`                                    | hero "See our services"                                                                                                                                                                |
| Number circle          | 40×40, radius 50%, bg `#24b800`, white number                                                               | `.number` in Features                                                                                                                                                                  |
| Testimonial arrows     | 50×50 circle, bg `#fff`, shadow `0 15px 30px 0 rgba(0,0,0,0.1)`; hover bg `#24b800`, text `#fff`            | `.prev` / `.next`, left 5% / right 5%                                                                                                                                                  |
| Testimonial card       | padding 30px, bg `#fff`; author pic 80px (round img), name `strong` `#000` + gray title                     | `.testimonial`                                                                                                                                                                         |
| Pricing item           | padding 40px, border 2px `#ccc`, radius 4px; h3 18px with 2px `#e6e6e6` bottom border; price 40px `#4877fb` | `.pricing-item`                                                                                                                                                                        |
| Footer widget h3       | 16px weight 700 `#000`, mb 30px                                                                             | `.site-footer .widget h3`                                                                                                                                                              |

### Section structure (from the live DOM, top to bottom)

1. `nav.site-nav` — transparent, `position: absolute; top: 0; width: 100%;
z-index: 99`, padding 20px 0 (over the hero). `div.container` >
   `div.row.align-items-center`: `h1.h1` brand "Framework" (24px) +
   `nav.site-navigation` > `ul.site-menu`: 5 × `li > a` — Home, Dropdown
   (`li.has-children` with caret + dropdown submenu), Services, About,
   Contact Us. Links: 14px, `rgba(255,255,255,0.7)`, hover `#fff`. Plus
   `div.site-mobile-menu` offcanvas panel (header close + body with same
   links) toggled by hamburger.
2. `div.hero.overlay` — `background: #4877fb` via `.hero.overlay:before`
   overlay; padding 10rem 0. `div.container` > `div.row.align-items-center.justify-content-between`:
   - `col-lg-6`: `h1.heading.text-white` "We are a group of financial
     specialists" (50px, 700) + `p.text-white-50.mb-5` (gray-white lorem
     subtext) + `p > a.btn.custom-white-2` "See our services".
   - `col-lg-5`: `a.video-play-wrap.glightbox` (YouTube link) >
     `span#play-video.icon-play` (50×50 green `#24b800` circle, centered)
     - `img.img-fluid` (`images/video_1.jpg` — person holding a phone,
       rounded, drop shadow).
3. `div.section.pb-0.bg-light` — steps row: `div.row.g-1.justify-content-center`
   > 4 × `col-12.col-sm-6.col-md-6.col-lg-3` (AOS fade-up, delays 0/100/200/300)
   > `div.step.h-100` (white card, padding 30px 30px 120px, `margin-bottom:
-42px` — overlaps the next section; hover: 2px `#4877fb` top border):
   - `span.flaticon-job-search` icon (45px) + `h3 > a` "Easy to search" +
     p lorem + `a.more > span.icon-keyboard_backspace` (circle arrow).
   - `span.flaticon-statistics` + "Improve business insight".
   - `span.flaticon-rocket` + "Fast as lightning".
   - `span.flaticon-growth` + "Grow business".
     (Icons in source are flaticon glyphs — recreate with lucide-react
     equivalents: Search, BarChart3/TrendingUp, Zap/Rocket, TrendingUp/Users.)
4. `div.section.bg-light` — Features: `div.row.justify-content-center.align-items-center.mb-5`
   > `col-lg-7.text-center`: `h2.heading.mb-2.text-secondary` "Features"
   > (34px, 700, `#4877fb`) + centered gray lorem subtext. Then 3 ×
   > `div.row.justify-content-between` (alternating; rows 1 & 3 image-left,
   > row 2 image-right via `order-lg-2`; `my-5` gutters; AOS fade-up):
   - Row 1: `col-lg-6` > `img.img-fluid` (`images/svg/undraw_blogging_vpvv.svg`
     — flat illustration) + `col-lg-5`: `div.number > span` "1" (green 40px
     circle) + `h3.heading-2.text-primary.mb-3` "How is your site
     performing?" (24px `#24b800`) + `p.mb-5` lorem + `a.btn.custom-primary`
     "Read more" + `span.icon-keyboard_arrow_right`.
   - Row 2 (reversed): img `undraw_digital_nomad_9kgl.svg` + number "2" +
     "Smart Site Conversion".
   - Row 3: img `undraw_podcast_q6p7.svg` + number "3" + "Speed Site
     Increase Ranks".
5. `section.sec-testimonial` — Testimonials: centered `h2.heading.mb-2.text-secondary`
   "Testimonials" + subtext. `div.testimonial-slide-wrap` (position
   relative) > `div#testimonial-slide-nav`: `span.prev` (left 5%) +
   `span.next` (right 5%) — 50×50 white circles, shadow, hover green.
   `div#testimonial-slide.testimonial-slide` (tiny-slider): N slides of
   `div.item > div.testimonial` (white card, padding 30px):
   - `blockquote > p` lorem quote (same lorem in source — paraphrase into 4
     distinct quotes).
   - `div.author.d-flex.align-items-center`: `div.pic.me-2 > img.img-fluid`
     (`images/person_1.jpg` etc., 80px, radius 50%) + `div.text`:
     `strong` name ("Alice Campbell" / "Ben Smith" / "James Anderson" —
     repeats) + `span` "Advertising Agency".
6. `section.sec-pricing` — Pricing plans: centered `h2.heading.text-secondary`
   "Pricing plans" (no subtext). `div.row` > 3 × `col-12...col-lg-4.mb-4.mb-lg-0`
   (AOS delays 100/200/300) > `div.pricing-item.border-0.bg-white.text-center`
   (white card, padding 40px, radius 4px):
   - `h3` plan name (18px, bottom border 2px `#e6e6e6`): "Basic" /
     "Standard" / "Advanced".
   - `div.price` "$19.99 / month" (40px, `#4877fb`; Standard also has
     `text-primary` → `#24b800`) — Basic $19.99, Standard $299.99,
     Advanced $799.99.
   - `p.mb-5` lorem.
   - `ul.list-check.primary.list-unstyled.mb-5.text-start` — 3 li with
     green `#24b800` checkmarks: "Vokalia and Consonantia",
     "Bookmarksgrove right at the coast", "Semantics a large language
     ocean".
   - `p > a.btn` "Get started" — Basic `custom-secondary`, Standard
     `custom-primary`, Advanced `custom-secondary`.
7. `div.py-5.bg-secondary` — CTA band (solid `#4877fb`): `div.container` >
   `div.row.align-items-center`: `col-lg-7.text-center.text-lg-start`:
   `h3.text-white.m-0` "Let's get to work" + `p.text-white-50.mb-0` lorem;
   `col-lg-5.text-center.text-lg-end`: `a.btn` "Get started" (white-outline
   style — `custom-white` class, bg `rgba(255,255,255,0.2)` white text,
   hover bg `#fff` text `#4877fb`).
8. `div.site-footer` — bg `#efefef`, font 14px, color `#888`, padding 70px 0.
   `div.container` > `div.row`:
   - `col-lg-4`: `div.widget` > `h3` "About Foundation" + `span.text-primary`
     "." (green dot) + p lorem; `div.widget` > `h3` "Connect" +
     `ul.list-unstyled.social` — 6 circular icon links (Instagram, Twitter,
     Facebook, Linkedin, Pinterest, Dribbble).
   - `col-lg-2.ml-auto`: `h3` "Links" + ul.links: About us / Services /
     News / Careers / Contact.
   - `col-lg-2`: `h3` "Company" + same 5 links.
   - `col-lg-3`: `h3` "Contact" + `address` "43 Raymouth Rd. Baltemoer,
     London 3910" + ul: 2 × `a` "+1(123)-456-7890" (tel) + `a`
     "info@mydomain.com" (mailto).
   - `div.row.mt-5` > `col-12.text-center` > p: "Copyright © All rights
     reserved | This template is made with <heart> by Colorlib" (Colorlib
     link → replaced by Component Dock per AGENTS.md).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar fixed over the hero with the
brand wordmark and five navigation links.

#### Scenario: Desktop nav

- **GIVEN** the Fiscale app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Fiscale" on the left
- **AND** SHALL show links Home, Dropdown, Services, About, and Contact Us
  in white (14px, Poppins)
- **AND** the "Dropdown" item SHALL expose a submenu (has-children pattern)

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger toggle is activated
- **THEN** an offcanvas panel SHALL open listing the same navigation links
  with a visible close control
- **AND** the panel SHALL close via the close button, Escape, or overlay
  click

### Requirement: Hero

The system SHALL render a solid-blue hero with a white headline, a
translucent CTA, and a video-play image block.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero background SHALL be the brand blue overlay
  (`#4877fb`)
- **AND** the headline SHALL read "We are a group of financial specialists"
  (50px, weight 700, white, Poppins)
- **AND** a white-50 subtext paragraph SHALL render below the headline
- **AND** a pill button SHALL read "See our services" (translucent white
  background `rgba(255,255,255,0.2)`, white text)
- **AND** the right column SHALL show an image with a 50×50 green play
  button circle centered on it (video modal link)

### Requirement: Step services row

The system SHALL render four white step cards overlapping the hero/features
boundary on a light-gray background.

#### Scenario: Four steps

- **GIVEN** the steps section is rendered
- **WHEN** the page loads
- **THEN** four cards SHALL render in a row with icons: "Easy to search",
  "Improve business insight", "Fast as lightning", "Grow business"
- **AND** each card SHALL show an icon, a title link, a gray excerpt, and a
  circular arrow link
- **AND** each card SHALL have a white background with a negative bottom
  margin overlapping the next section
- **AND** on hover each card SHALL reveal a 2px blue top border

### Requirement: Features section

The system SHALL render a Features section with three alternating
image/text rows numbered with green circles.

#### Scenario: Section heading

- **GIVEN** the features section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL read "Features" (34px, bold,
  `#4877fb`) with a gray subtext below

#### Scenario: Alternating rows

- **GIVEN** the features section is rendered
- **WHEN** the page loads
- **THEN** three rows SHALL render, each with a numbered green circle (1,
  2, 3), a green 24px title, a gray paragraph, and a green "Read more"
  pill button
- **AND** row titles SHALL read "How is your site performing?", "Smart
  Site Conversion", and "Speed Site Increase Ranks"
- **AND** rows SHALL alternate image position (image left, image right,
  image left) on desktop
- **AND** each row SHALL include an illustration image

### Requirement: Testimonials slider

The system SHALL render a Testimonials section with a client-side slider,
round prev/next arrows, and author cards.

#### Scenario: Slider content

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL read "Testimonials"
- **AND** at least two testimonial slides SHALL exist, each with a quote
  paragraph, a round avatar (80px), a bold author name, and a "Advertising
  Agency" title
- **AND** round white prev/next arrow buttons SHALL sit at the left/right
  edges (hover → green)
- **AND** the arrows SHALL move between slides (wrapping or clamping)

### Requirement: Pricing plans

The system SHALL render three pricing cards with prices, checkmark lists,
and pill CTAs.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL read "Pricing plans"
- **AND** three cards SHALL render named "Basic", "Standard", "Advanced"
- **AND** prices SHALL read "$19.99 / month", "$299.99 / month",
  "$799.99 / month" (40px)
- **AND** each card SHALL list three features preceded by green
  checkmarks
- **AND** each card SHALL have a pill "Get started" button (Basic and
  Advanced in translucent blue, Standard in translucent green)

### Requirement: CTA band

The system SHALL render a solid-blue CTA band with a headline and button.

#### Scenario: CTA content

- **GIVEN** the CTA band is rendered
- **WHEN** the page loads
- **THEN** the band background SHALL be `#4877fb`
- **AND** the headline SHALL read "Let's get to work" (white) with a
  white-50 subtext
- **AND** a translucent-white pill button SHALL read "Get started"

### Requirement: Footer

The system SHALL render a light-gray footer with four widget columns,
social icons, contact info, and the Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer background SHALL be `#efefef`
- **AND** the first column SHALL show "About Fiscale" (with a green dot)
  with an excerpt and a "Connect" row of six circular social icon links
- **AND** the second and third columns SHALL list "Links" and "Company"
  each with About us / Services / News / Careers / Contact
- **AND** the fourth column SHALL show "Contact" with the address "43
  Raymouth Rd. Baltemoer, London 3910", two phone numbers, and an email
- **AND** the copyright line SHALL credit Component Dock
  (https://www.componentdock.com/) instead of ColorLib

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Fiscale app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar and hero at the top, followed
  by steps, features, testimonials, pricing, CTA band, and footer in order
- **AND** the document title SHALL be "Fiscale — Finance Consulting
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/fiscale` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- fiscale` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#24b800, #4877fb, #000, rgba(0,0,0,0.5), #888, #777, #efefef, #f8f9fa, #ccc, #e6e6e6, #fff) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `fiscale-<n>`, Google Fonts Poppins + Open Sans links, lucide icons + inline SVG brand icons only)
- [ ] Buttons are pills (radius 30px, padding 12px 30px, uppercase 12px 700) with the three translucent variants (custom-primary / custom-secondary / custom-white-2) + hover fill states
- [ ] Step cards overlap the following section (negative bottom margin) and reveal 2px blue top border on hover
- [ ] Features rows alternate image position; green 40px number circles (1/2/3)
- [ ] Testimonials slider implemented with client-side state (no tiny-slider dep); round white arrows hover green
- [ ] Mobile offcanvas menu opens/closes with focus handling
- [ ] Footer links Component Dock; no ColorLib references in app code
