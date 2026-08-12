# Template: Obscura (Photography / Photo Gallery)

## Purpose

Obscura is a single-page photography / photo-gallery website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Porto" design (see TEMPLATES.md — listed under Bootstrap, line
479, first unchecked item whose prep did not exist on main), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark, moody, fullpage-scrolling photographer portfolio: a
fixed preloader (black screen + spinning red/purple ring), a transparent
header overlaid on the hero (logo left, five social icons right, centered
uppercase menu Home / About the Artist / Portfolio / News / Contact), a
fullscreen hero slider (2 photo slides, 919px tall, with a cursive-script
h1 over a 60px Montserrat h2, a corner-bracket outline "READ MORE" button, a
slide counter, a "DISCOVER" scroll hint, and a "CONTACT ME" avatar widget
with a vertical rule), three consecutive fullpage "about" sections (each a
full-bleed photo with an offset text column: 48px heading "Artistic
Portraits" + paragraph + outline button), a full-width photo CTA band
("Need a photographer? Get in touch" + button), and a photo-background
footer (logo + about paragraph, Discover / Talk to us / Location link
columns, copyright bar). Obscura recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Porto" — free photo gallery HTML template (source:
  https://colorlib.com/wp/template/porto/). Despite the "Porto" name it is a
  photographer portfolio, not a shop/agency multipurpose theme.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/porto/`
  (HTTP 200, 19.2KB) + stylesheets `css/style.css` (19.9KB),
  `css/bootstrap.min.css`, `css/font-awesome.min.css`, `css/owl.carousel.min.css`,
  `css/fullpage.min.css`, `css/magnific-popup.css`. The rendered DOM is the
  reference below; the TEMPLATES.md screenshot (`porto-free-template.jpg`,
  1200×946) confirms the visual design: a dark, desaturated purple/blue
  full-screen hero photo of a model with metallic gold body paint on a dark
  tufted chaise, white "PORTO" logo top-left inside a thin white box, small
  white menu (Home, About the Artist, Portfolio, News, Contact), italic
  cursive script line above the big white centered "Showcase your work"
  headline, a thin-outline uppercase "READ MORE" button, "1/2" slider
  counter on the right, "DISCOVER" + down arrow bottom center, and a
  circular avatar + "CONTACT ME" vertical-line widget bottom left — a moody,
  artistic, high-fashion aesthetic.
- **Section order (1:1) from the preview DOM:**
  1. `#preloder` (fixed, full-screen, background #000): `.loader` spinner
     (border-radius 60px, 4px border alternating #f44336 → #673ab7 →
     #f44336, rotate animation 0.8s linear infinite).
  2. `header.header-section` (position absolute, width 100%, top 0,
     z-index 999, transparent over the hero): `.header-warp` (max-width
     1464px, margin 0 auto, padding-top 35px): `.site-logo` (float left;
     `img/logo.png` — the logo art includes a thin white box around the
     wordmark; recreate as a white text logo "Obscura" inside a 1px white
     border box), `.header-social` (float right): 5 white icons —
     pinterest, facebook, twitter, dribbble, behance (`margin-left: 35px`,
     `padding: 9px 0`), `.nav-switch` (hamburger, `display: none` on
     desktop; on mobile a 40px circle with 1px #8c8c8c border), and
     `ul.main-menu` (float right, `padding-right: 220px`): Home, About the
     Artist, Portfolio, News, Contact — 16px white, `margin-right: 60px`,
     `padding: 9px 0`.
  3. `#fullpage` (fullpage.js fullscreen-scroll container; right-side
     `#fp-nav` dots: 14px circles, 1px #565656 border, active filled
     #020202):
     - `#hero-section.section.fp-auto-height` > `.hero-slider.owl-carousel`:
       2 `.hs-item.set-bg` slides (height 919px, flex-centered, text-align
       center; bg `img/slider/1.jpg`, `img/slider/2.jpg`), each with
       `.container.text-white`: `h1` 36px `font-family:
"BickhamScriptPro-Regular"` (cursive script), weight 400, line-height
       0.1 — "Fusce erat dui, venenatis et erat in, vulputate dignissim
       lacus." (same on both slides); `h2` 60px (weight 600, white via the
       text-white container), margin-bottom 40px — slide 1 "Showcase your
       work", slide 2 "Creative natural short"; `.site-btn` "Read More".
       Plus: `.slide-num-holder` `#snh-1` (absolute right 101px, top 50%,
       white 16px/500, "1/2" counter), `.owl-nav` arrows (absolute right
       52px, top 50%), `.down-sign` (absolute bottom 37px, centered, width
       60px): `h6` "Discover" (10px, 500, uppercase, white, margin-bottom
       10px) + `img/icons/arrow-down.png`.
     - `.contact-link` (absolute left 42px, bottom 40px, z-index 99): `p`
       "Contact me" (10px uppercase 500 white, rotated 90deg,
       margin-bottom 180px) + `:after` 1px white vertical rule (height
       135px, top 50px, left 50%) + `img` (71×71, `border-radius: 50%` —
       avatar photo `img/contact.jpg`).
     - `.section.about-section.about-one.set-bg` (bg `img/section-bg/1.jpg`,
       `padding-left: 227px`) > `.about-content-warp.text-white` (max-width
       470px): `h2` "Artistic Portraits" (48px, weight 500, margin-bottom
       20px), `p` lorem (margin-bottom 40px), `.site-btn` "Read More".
     - `.section.about-section.about-two.set-bg` (bg `img/section-bg/2.jpg`)
       > `.about-content-warp` (NO text-white — heading/body render dark
       > #111111 against the lighter photo): same h2/paragraph/button content.
     - `.section.about-section.about-three.set-bg` (bg `img/section-bg/3.jpg`)
       > `.about-content-warp.text-white`: same h2/paragraph/button content.
  4. `section.banner-section.set-bg` (bg `img/banner-bg.jpg`, padding 111px 0) > `.container > .row`: `.col-lg-9` `h2` "Need a photographer? Get in
     touch" (30px, 500, white, uppercase, letter-spacing 2px, 1px white
     bottom border, padding 8px 0 10px) + `.col-lg-3.text-lg-right.text-left`
     `.site-btn` "Read More".
  5. `footer.footer-section.set-bg` (bg `img/footer-bg.jpg`, padding 116px 0
     130px) > `.container > .row`:
     - `.col-lg-6` > `.footer-about` (max-width 470px): logo `img`
       (margin-bottom 35px) + `p` (white, opacity 0.25).
     - `.col-lg-3.col-md-6` > `.footer-info` (padding-top 27px): `h6`
       "Discover" (white, uppercase, 500, letter-spacing 3px, margin-bottom
       27px) + `ul` links: About the Artist, Portfolio, News, Contact
       (white, opacity 0.25, 14px, uppercase, margin-bottom 15px).
     - `.col-lg-3.col-md-6` > `.footer-info`: `h6` "Talk to us" + `ul`:
       +34 5667 4332 244 / Contact@sportify25.com / office@sportify25.com;
       `h6` "Location" + `ul`: MAin str. 25 / 458811 CA.
     - Copyright bar: "Copyright © [year] All rights reserved | This
       template is made with [heart] by Colorlib" → replace with the
       repo-standard footer credit.
- **Design tokens extracted from `css/style.css`:**
  - Fonts: **Montserrat** (body, headings, menu, footer) via Google Fonts;
    **BickhamScriptPro-Regular** (cursive script) for the hero h1 — a
    licensed font file, NOT copyable; substitute a Google Fonts script
    (e.g. **Great Vibes** or **Dancing Script**, weight 400) and record the
    substitution.
  - Colors: **#fff** (text on dark photos, header icons/menu, buttons);
    **#111111** (default heading color — used on the light about-two
    section); **#000** (preloader background); **#020202** (near-black —
    active fullpage nav dot); **#05020d** (very dark purple-navy — portfolio
    subpage background); **#f44336 / #673ab7** (preloader spinner ring);
    greys **#565656** (fp-nav dot border), **#8c8c8c** (mobile nav-switch
    border), **#a2a2a2 / #b7b7b7** (secondary text); footer muted text =
    white at **opacity 0.25**.
  - Buttons `.site-btn`: transparent background, white text, 14px, weight
    600, uppercase, min-width 186px; **four corner brackets** (15×14px,
    2px white borders: top-left + top-right via `:before`/`:after`, bottom
    pair via `span:before`/`span:after`); inner `span` padding 23px 45px;
    `.sb-dark` variant swaps white → #000 (defined in CSS, not used on
    index.html — keep it as an available variant).
  - Section backgrounds: full-bleed photos (`set-bg` data-setbg pattern),
    dark/moody; hero slides 919px tall; about sections `padding-left:
227px` with content column max-width 470px; banner 111px vertical
    padding; footer 116px 0 130px.
  - Headings: hero h1 script 36px / h2 60px (600); about h2 48px 500;
    banner h2 30px 500 uppercase letter-spacing 2px with 1px white
    underline; footer-info h6 uppercase 500 letter-spacing 3px.
  - Muted text pattern: white + `opacity: 0.25` (footer about paragraph,
    footer links).
  - Fullpage nav dots: 14px circles, 1px #565656 border, active filled
    #020202 (recreate as fixed right-edge section indicators or omit —
    note the choice in the PR).
- **Recreation decisions:**
  - Header stays a transparent overlay on the hero (repo apps use a
    sticky header elsewhere, but the original's overlay is the fidelity
    target); mobile gets the circular hamburger with a slide-down menu.
  - Hero slider: two autoplaying photo slides with the script h1 + 60px h2
    - outline button; slide counter "1/2" and prev/next arrows on the
      right; "Discover" hint bottom-center; "Contact me" avatar widget
      bottom-left.
  - Fullpage.js behavior (fullscreen scroll snapping) is approximated with
    tall viewport-height sections in normal page flow (no new dependency —
    note it in the PR).
  - BickhamScriptPro-Regular → Google Fonts script substitute (Great Vibes
    or Dancing Script).
  - Brand social icons (pinterest, facebook, twitter, dribbble, behance)
    as inline SVG per repo convention (lucide-react has no brand icons).
  - All photos picsum-seeded (`picsum.photos/seed/obscura-N/w/h`) — hero
    slides, about bgs, banner bg, footer bg, avatar.
  - Text logo "Obscura" in a 1px white border box (matches the original
    logo art).
  - Contact details from the original are placeholder lorem data
    (+34 5667 4332 244, sportify25.com emails, MAin str. 25) — keep the
    same kind of fake contact content.
- **Fidelity rules honored:** section structure + order 1:1; design tokens
  (brand colors, fonts, button shapes, spacing rhythm, dark treatment)
  matched; layout matched (split hero, offset about columns, 3-column
  footer); no ColorLib assets copied; text paraphrased with the same kind
  of content.

Obscura lives in `apps/obscura` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) where they fit.

## Requirements

### Requirement: Preloader

The system SHALL render a black full-screen preloader with a spinning ring
on initial load.

#### Scenario: Preloader content

- **GIVEN** the Obscura page starts loading
- **WHEN** the preloader is displayed
- **THEN** it SHALL cover the whole viewport with a solid black (#000)
  background
- **AND** it SHALL show a centered circular spinner whose 4px ring
  alternates between red (#f44336) and purple (#673ab7) while rotating
- **AND** it SHALL disappear once the page is ready

### Requirement: Header / navigation

The system SHALL render a transparent header overlaid on the hero with a
logo, social icons, and a menu.

#### Scenario: Header content

- **GIVEN** the Obscura page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Obscura" in white type inside a
  thin white border box on the left
- **AND** it SHALL show five white brand icons (pinterest, facebook,
  twitter, dribbble, behance) on the right
- **AND** it SHALL show the uppercase menu links Home, About the Artist,
  Portfolio, News, and Contact in small white type

#### Scenario: Mobile menu

- **GIVEN** the header is displayed on a narrow viewport
- **WHEN** the user activates the circular hamburger button
- **THEN** a menu SHALL open with the nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero slider

The system SHALL render a full-screen photo slider with a script headline,
a large heading, an outline button, a slide counter, a scroll hint, and a
contact widget.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show a full-viewport photo slide with a cursive script
  line above a large (60px) white heading
- **AND** the first slide SHALL show the heading "Showcase your work" and
  the second "Creative natural short"
- **AND** it SHALL show a "Read More" button styled as transparent with
  white corner brackets (15×14px, 2px borders) and uppercase 14px/600 text
- **AND** it SHALL show a "1/2"-style slide counter on the right
- **AND** it SHALL show a "Discover" label with a down arrow at the bottom
  center
- **AND** it SHALL show a "Contact me" widget at the bottom left composed
  of a 71px circular avatar photo, a thin white vertical rule, and rotated
  uppercase text

#### Scenario: Slide navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates the next/prev arrow or waits for autoplay
- **THEN** the slide SHALL change and the counter SHALL update

### Requirement: About sections

The system SHALL render three consecutive full-bleed photo sections, each
with an offset heading, paragraph, and outline button.

#### Scenario: About section content

- **GIVEN** the page is rendered
- **WHEN** an about section is displayed
- **THEN** it SHALL show a full-width photo background
- **AND** it SHALL show a left-offset content column (max-width ~470px)
  with the heading "Artistic Portraits" in 48px weight-500 type
- **AND** it SHALL show a body paragraph and a "Read More" outline button
- **AND** the second about section SHALL render its heading and paragraph
  in dark (#111111) text while the first and third render white text

### Requirement: Call-to-action band

The system SHALL render a full-width photo CTA band with a heading and a
button.

#### Scenario: CTA band content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the heading "Need a photographer? Get in touch" in
  white uppercase type with letter-spacing and a thin white underline
- **AND** it SHALL show a "Read More" outline button aligned right on
  desktop

### Requirement: Footer

The system SHALL render a photo-background footer with an about column and
two link columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Obscura" logo and an about paragraph in
  muted white (opacity ~0.25)
- **AND** it SHALL show a "Discover" column with links About the Artist,
  Portfolio, News, and Contact
- **AND** it SHALL show a "Talk to us" column with a phone number and two
  email addresses
- **AND** it SHALL show a "Location" column with address lines
- **AND** muted footer text SHALL be uppercase 14px white at 0.25 opacity
- **AND** it SHALL show a copyright bar with the repo-standard footer
  credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Obscura app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero slider, three about
  sections, CTA band, and footer inside the main landmark in the original's
  order
- **AND** the document title SHALL be "Obscura — Photography"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- obscura` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header overlay → hero slider
      → about-one → about-two → about-three → CTA band → footer).
- [ ] Design tokens applied: Montserrat body + script display font (Great
      Vibes/Dancing Script substitute for BickhamScriptPro-Regular), white
      text on dark photos, #111111 dark text on the light about section,
      #000 preloader, #020202 active dot, #f44336/#673ab7 spinner ring,
      corner-bracket outline buttons (2px white, 15×14px brackets, span
      padding 23px 45px, uppercase 14px/600), banner h2 30px uppercase
      letter-spacing 2px with white underline, footer muted text white
      0.25 opacity uppercase 14px, hero slide height ~919px.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Porto), preview URL, tokens,
      renames, and the script-font substitution.
