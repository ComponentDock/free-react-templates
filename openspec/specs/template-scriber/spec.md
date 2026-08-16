# Template: Scriber (Copywriter Portfolio Template)

## Purpose

Scriber is a single-page freelance **copywriter / content-writer portfolio**
website template in the free-react-templates monorepo. It is an original
React recreation of the ColorLib free "Buckkinnear" website template design
(see TEMPLATES.md, line 552, Bootstrap 5 category), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Buckkinnear" — freelance copywriter portfolio
  template (source: https://colorlib.com/wp/template/buckkinnear/).
  TEMPLATES.md line 552, category "Bootstrap 5" (89 items). Single copy of
  the item (no duplicate rows to bookkeep). Do NOT confuse with Buildream /
  Byfaith / Cakeshop (neighbouring items).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/buckkinnear/
  (HTTP 200, ~23.5 KB rendered DOM, `<title>Copywriter | Template</title>`).
  Stylesheets: `assets/css/bootstrap.min.css`, `owl.carousel.min.css`,
  `slicknav.css`, `animate.min.css`, `magnific-popup.css`,
  `fontawesome-all.min.css`, `themify-icons.css`, `slick.css`,
  `nice-select.css`, `style.css` (63.4 KB — a SHARED ColorLib builder
  stylesheet containing leftover rules from other templates; only the
  section-specific selectors listed below belong to this design).
  Fonts: Google Fonts `@import` in style.css — **Montserrat** (300–800) for
  headings + **Rubik** (400–700) for body text.
- **Screenshot:** `buckkinnear-colorlib-template.jpg` — verified live in a
  browser (vision analysis, full page): dark full-width nav bar with a
  script-style logo ("Buck Knear") and white links Home / About / Services /
  Blog / Contact; SPLIT hero — left half a big yellow block with a large
  bold dark headline ("Writing Texts That Inspire and Engage your
  Customers"), a circular portrait photo ringed in yellow, and the intro
  "Hi, I'm Buck Kinnear / I Write Beautiful and Unmistakable Text."; right
  half a photo of hands writing with a fountain pen; a bright BLUE
  rectangular "See My Offers" button below the yellow block; then an
  off-white services section ("What I can write for you and your business"
  with a short blue underline, intro paragraph, and circular blue-outlined
  icon cards Blogging + SEO Articles); the rest of the page shows the same
  palette (yellow accent blocks, blue sharp-cornered buttons, dark
  near-black band with white story cards).
- **Visual design:** bold, high-contrast writer-portfolio aesthetic —
  BRIGHT YELLOW `#FFEA01` brand blocks (hero left panel, "25 Years of
  Experience" counter box) against NEAR-BLACK `#202020` (nav bar, headings,
  dark stories band, footer social circles), BLUE `#05f` sharp-cornered
  rectangular buttons ("See My Offers", "Let's Start Discuss", "Learn
  More"), cream `#FCF2EB` page ground, white story-card titles on the dark
  band. All buttons are RECTANGULAR (`border-radius: 0`). The demo brands
  itself "Buck Kinnear"; the recreation uses the NEW name **Scriber** with a
  script-style wordmark in the header.

## Design tokens (from assets/css/style.css + live computed styles)

| Token          | Value                                                                                                                                                                                                                                                                                                                 | Where                                                                                                                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand yellow   | `#FFEA01`                                                                                                                                                                                                                                                                                                             | hero left panel (`.single-slider::before` 55%×82% block), `.info-man` counter box (25), `.section-tittle > span` kicker, nav link hover, story-title hover, back-to-top, blog date badge             |
| Near-black     | `#202020`                                                                                                                                                                                                                                                                                                             | `.main-header` nav bg, all headings (h1–h6), hero h1 bottom border (3px), hero/woner/service/footer text, dark stories band bg (`.visit-tailor-area2`), `.footer-social` circles                     |
| Brand blue     | `#05f`                                                                                                                                                                                                                                                                                                                | ALL buttons (`.btn_1`, `.btn_01`, `.info-more`), section-title underline (`.line::before` 180×6px), footer-title underline (`.footer-tittle h4::before` 180×6px), copyright links/icons, link hovers |
| Sticky header  | `#0a0a0a`                                                                                                                                                                                                                                                                                                             | `.header-area .header-sticky.sticky-bar` (scrolled)                                                                                                                                                  |
| Cream          | `#FCF2EB`                                                                                                                                                                                                                                                                                                             | `.slider-area` background (behind hero)                                                                                                                                                              |
| White          | `#ffffff`                                                                                                                                                                                                                                                                                                             | nav links, button text, `.visit-tailor-area2 .tailor-details h2` (44px), story-card `h3 a`, testimonial dots                                                                                         |
| Founder gray   | `#4C526E`                                                                                                                                                                                                                                                                                                             | testimonial founder name (14px)                                                                                                                                                                      |
| Fonts          | **'Montserrat', sans-serif** (300–800) headings; **'Rubik', sans-serif** (400–700) body                                                                                                                                                                                                                               | Google Fonts `@import` in style.css; recreate with `<link>`s in index.html                                                                                                                           |
| Headings       | Montserrat: hero h1 60px/700 `letter-spacing:-.05em` + 3px `#202020` bottom border (pb 45px); section h2 50px/700 `ls:-.05em`; dark-band h2 44px/700 white; footer h4 50px/700 (pb 37px + blue underline)                                                                                                             | `.slider-area .hero-caption h1`, `.section-tittle h2`, `.visit-tailor-area2 .tailor-details h2`, `.footer-tittle h4`                                                                                 |
| Body text      | Rubik 16px/300 `line-height:1.6`; section intro 18px/300 `lh:1.5`; woner p 30px/400; service h5 24px; nav links 18px/400 capitalize                                                                                                                                                                                   | `body`, `.section-tittle p`, `.woner-caption p`, `.services-cap h5 a`, `.main-menu ul>li a`                                                                                                          |
| Buttons        | rectangle `border-radius:0`, bg `#05f`, white text, 300ms ease transition; `.btn_1` "See My Offers" 30px/padding 56px 125px (absolute bottom-right of hero col); `.btn_01` "Let's Start Discuss" 24px/padding 42px 102px; `.info-more` "Learn More" 30px/padding 37px 90px (→18px 28px mobile); arrow icon after text | `.btn_1`, `.btn_01`, `.visit-tailor-area .tailor-offers .info-more`                                                                                                                                  |
| Section rhythm | `.section-padding` pt/pb 100px (services); `.testimonial-padding` pt 110px pb 140px; `.footer-padding` pt 120px; `.section-tittle` mb 110px (services, with right offset intro col)                                                                                                                                   | `.our-services-area`, `.testimonial-area`, `.footer-area`                                                                                                                                            |
| Header         | transparent over hero (`.header-transparent` absolute top), padding 0 88px; sticky on scroll → bg `#0a0a0a` + shadow `0 10px 15px rgba(25,25,25,0.1)` + fadeInDown; logo left, nav right (margin 0 14px, padding 31px 7px)                                                                                            | `.main-header`, `.header-sticky.sticky-bar`                                                                                                                                                          |
| Hero           | `slider-height` 880px; bg image `h1_hero.jpg` (100% 100%); `.single-slider::before` yellow block 55%w 82%h top-left (z-index -1); hero col `col-xxl-6`; portrait `empolye.png` circular, `wow pulse` animation                                                                                                        | `.slider-area`, `.slider-bg1`, `.hero-caption`                                                                                                                                                       |
| Icons (source) | themify + font-awesome → lucide-react: `ArrowRight` (buttons), `Clock` (story dates), `PenLine`/`FileText`/`Search`/`MessageSquare` (services — original uses svg `services1–4.svg`), socials inline SVG (footer circles)                                                                                             | buttons, story meta, services, footer-social                                                                                                                                                         |

## Requirements

### Requirement: Header with wordmark and navigation

The system SHALL render a transparent header over the hero with a
script-style logo on the left and uppercase-ish white navigation links on
the right; scrolling SHALL switch it to a near-black sticky bar.

#### Scenario: Desktop header

- **GIVEN** the Scriber page is rendered
- **WHEN** the page loads
- **THEN** a transparent header SHALL show the script-style wordmark
  "Scriber" on the left
- **AND** white links Home, About, Services, Blog, and Contact SHALL be
  shown on the right, Rubik 18px, capitalized
- **AND** hovering a link SHALL turn it brand yellow `#FFEA01`

#### Scenario: Sticky header

- **GIVEN** the page is scrolled past the hero
- **WHEN** the header becomes fixed
- **THEN** it SHALL switch to the near-black `#0a0a0a` background with the
  `0 10px 15px rgba(25,25,25,0.1)` shadow and remain at the top of the
  viewport

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a mobile menu SHALL open showing the same navigation links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero split section

The system SHALL render a full-width 880px hero: a near-black headline over
a yellow left panel against a writing-photo background, with the intro
("Hi, I'm ... / I Write Beautiful and Unmistakable Text."), a circular
portrait, and a blue "See My Offers" button.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the headline "Writing Texts That Inspire and Engage your
  Customers" SHALL be shown in Montserrat 60px/700 near-black `#202020`
  with a 3px near-black bottom border
- **AND** a yellow `#FFEA01` panel SHALL sit behind the left half of the
  hero content
- **AND** the intro SHALL show "Hi, I'm Buck Kinnear" (Rubik 30px) above
  "I Write Beautiful and Unmistakable Text." (Rubik 30px/600)
- **AND** a circular portrait image SHALL sit beside the intro text
- **AND** a rectangular blue `#05f` "See My Offers" button SHALL be shown
  below the intro (with an arrow icon)

### Requirement: Services section

The system SHALL render a services section titled "What I can write for you
and your business" with an intro paragraph and a 2×2 grid of four service
cards, each with a circular icon badge, a title, and a description.

#### Scenario: Section heading and intro

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** a small yellow `#FFEA01` kicker text SHALL be shown above the
  heading
- **AND** the heading "What I can write for you and your business" SHALL be
  shown in Montserrat 50px/700 near-black with a 180×6px blue `#05f`
  underline below it
- **AND** the intro paragraph "Do you want to be seen on the internet? I
  can increase the quality and the quantity of traffic through your
  website." SHALL be shown to the right of the heading

#### Scenario: Service cards

- **GIVEN** the services grid is rendered
- **WHEN** the four cards are displayed
- **THEN** each card SHALL show a circular icon badge (blue-outlined per
  the screenshot; lucide icon), a Rubik 24px near-black title, and a 16px
  description paragraph
- **AND** the four titles SHALL be Blogging, SEO Articles, Email Marketing,
  and Web Content Writing
- **AND** the cards SHALL be laid out in a 2×2 grid (alternating
  `offset-lg-1` columns in the source)

### Requirement: Quote band with signature

The system SHALL render a yellow `#FFEA01` band containing a "Learn More"
blue button on one side and a pull-quote with a signature image on the
other.

#### Scenario: Quote band content

- **GIVEN** the quote band is rendered
- **WHEN** the page loads
- **THEN** the band background SHALL be brand yellow `#FFEA01`
- **AND** a rectangular blue `#05f` "Learn More" button with an arrow SHALL
  be shown on the left
- **AND** the quote "Never underestimate the power of words to change the
  way people think and feel." SHALL be shown on the right
- **AND** a supporting paragraph and a signature image SHALL be shown under
  the quote

### Requirement: Testimonials section

The system SHALL render a centered testimonials section titled "What Our
Client Sayes" with a carousel of three quote slides, each with a founder
avatar, quote text, founder name, and star rating.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is rendered
- **WHEN** a slide is active
- **THEN** it SHALL show the founder avatar image, the quote text (22px
  near-black), the founder name (14px `#4C526E`), and a star rating
- **AND** a dot indicator SHALL mark the active slide
- **AND** the three slides SHALL be navigable (carousel dots/arrows)

### Requirement: Dark stories band with experience counter

The system SHALL render a near-black `#202020` band: a yellow "25 Years of
Experience" counter box on the left and a "Read my exemplary stories"
heading with two story cards plus a blue "Let's Start Discuss" button on
the right.

#### Scenario: Experience counter

- **GIVEN** the dark band is rendered
- **WHEN** the page loads
- **THEN** a yellow `#FFEA01` box SHALL show the number "25" in large
  near-black type (120px) above "Years of Experience"
- **AND** the counter box SHALL sit over a photo background image

#### Scenario: Story cards

- **GIVEN** the stories column is rendered
- **WHEN** the page loads
- **THEN** the heading "Read my exemplary stories" SHALL be shown in white
  Montserrat 44px/700
- **AND** two story cards SHALL be shown side by side, each with an image,
  a white 24px title link (hover → `#FFEA01`), a description paragraph,
  and a date line with a clock icon (e.g. "January 25, 2021")
- **AND** a rectangular blue `#05f` "Let's Start Discuss" button with an
  arrow SHALL be shown below the cards

### Requirement: Footer with CTA, menu, socials, and Component Dock link

The system SHALL render a light footer with a large CTA heading, social
circles, a footer menu, and a copyright bar whose attribution links to
Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the CTA heading "Let's create the content that will engage,
  excite and inform." SHALL be shown in Montserrat 50px near-black with the
  blue `#05f` underline
- **AND** circular near-black social buttons (54px, radius 50%) SHALL be
  shown under the CTA (hover inverts to white)
- **AND** a footer menu with Home, About, Services, Blog, and Contact links
  SHALL be shown on the right
- **AND** the copyright bar SHALL show a Component Dock attribution line
  linking to https://www.componentdock.com/ (replaces the original ColorLib
  attribution), with the heart/links in blue `#05f`

## Verification checklist

- [ ] `npm run spec:validate` passes (spec is valid OpenSpec).
- [ ] App folder `apps/scriber`, package `@free-react-templates/scriber`;
      name differs from the ColorLib source "Buckkinnear".
- [ ] No ColorLib reference anywhere in `apps/scriber` (code, comments,
      README, CSS notes); provenance lives only here, TEMPLATES.md, and the
      PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
- [ ] `public/CNAME` = `scriber.free.componentdock.com`; `"homepage"` =
      https://scriber.free.componentdock.com.
- [ ] `npm install` at root so `package-lock.json` registers the new
      workspace (`grep -c "free-react-templates/scriber" package-lock.json`).
- [ ] `vite.config.ts` registers `injectUiSource()` (per conventions).
- [ ] Design tokens in `@theme`: yellow `#FFEA01`, near-black `#202020`,
      blue `#05f`, cream `#FCF2EB`; Montserrat + Rubik via Google Fonts
      `<link>`s in index.html.
- [ ] Placeholder images via `https://picsum.photos/seed/scriber-<n>/<w>/<h>`
      (hero photo, portrait, testimonial avatars, story images, band
      backgrounds) — never copy ColorLib assets.
- [ ] All buttons rectangular (`rounded-none`), blue `#05f`, white text,
      arrow icon after label.
- [ ] Section order matches source 1:1: header → hero (incl. woner intro)
      → services → quote band → testimonials → dark stories band → footer.
- [ ] TDD: Vitest + Testing Library, 100% coverage (lines/functions/
      branches/statements); scenarios mirrored as `it` blocks.
- [ ] `scripts/verify-app.sh scriber` passes locally; full gate via
      `npm run gate` runs in CI.
- [ ] TEMPLATES.md: mark Buckkinnear `[~]` while implementing, `[x]` + live
      URL (`https://scriber.free.componentdock.com`) when shipped.
