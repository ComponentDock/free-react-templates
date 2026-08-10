# Template: Maestro (Creative Agency Landing)

## Purpose

Maestro is a single-page creative-agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Creative Agency 2" website template (see TEMPLATES.md,
Bootstrap category, line 368), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a clean, modern, minimalist creative-agency landing with
a signature purple/lavender accent: an absolute transparent header over
the hero (image logo + uppercase nav links HOME / SERVICE / PROJECT /
BLOG / TEAM + a PAGES dropdown with Generic and Elements); a full-height
parallax hero on a lifestyle photo (hands in a blue knit sweater holding
a potted plant) under a 0.4 black overlay, with a right-aligned 72px
weight-100 headline "We Provide Solutions that Brings Joy" (bold 700
spans on "Solutions" and "Joy") and a purple-gradient pill button "Hire
Us Now!"; a white "Latest News from all categories" services section with
4 icon cards (Easy Flight Search, Get Hotel Offers, Holiday Packages,
Dedicated Support) and #8490ff-bordered "View Details" pills; an about
band on a background image with white headline "We can be your digital
Problems Solution Partner", two white-outline pill buttons ("What we
offer", "Get a free quote") and a right-hand illustration photo; a
"Latest Project on the go" carousel of image cards with uppercase
captions; a black skill section "Our Fields of Expertness" with three
donut progress rings (Wireframing 75%, User Research 95%, User
Experience 85%) with gradient segments; a `#f9f9ff` team section "About
Creative Agency Team" with 4 photo cards and hover social icons; a
testimonial carousel over a photo with the purple gradient overlay
(white cards: avatar, quote, name "Mark Alviro Wiens", role "CEO at
Google"); a "Latest From Our Blog" section with 4 posts (black date
badges, title, excerpt, likes/comments); and a `#222222` footer with Top
Products / Newsletter (email + gradient Subscribe button) / Instagram
Feed columns plus a copyright bar with social icons. Typography is
Poppins (body 14px weight 300; headings 36px base, hero 72px). Maestro
recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Creative Agency 2" — Free Creative & Marketing
  Agency Website Template (source:
  https://colorlib.com/wp/template/creative-agency-2/). Listed in
  TEMPLATES.md under the Bootstrap category (line 368; dup rows at 961
  and 1457 — dup-row trap, do not re-claim).
- **Live preview REACHABLE:** the direct URL
  `https://preview.colorlib.com/theme/creative-agency-2/` 404s — the
  portal serves this theme at `https://preview.colorlib.com/theme/creativeagency/`
  (discovered via the portal iframe from
  `https://preview.colorlib.com/#creativeagency`, which is the "Live
  Preview" target on the ColorLib template page). DOM fetched
  (`/tmp/creative-agency-2-ref/creativeagency.html`, 28.6 KB, HTTP 200);
  stylesheet
  `https://preview.colorlib.com/theme/creativeagency/css/main.css`
  (36.6 KB) extracted for tokens; screenshot
  (`agency-free-agency-website-template.jpg`, 1200×935, TEMPLATES.md)
  reviewed visually in the browser. All references verified live.
- **Section order (1:1 from the preview DOM):**
  1. Header `header.default-header` (`position: absolute; top: 0; width:
100%; z-index: 9` → transparent over the hero): `nav.navbar.navbar-expand-lg.navbar-light`
     → `a.navbar-brand` (image logo `img/logo.png` — recreate as a text
     wordmark + small icon) + `ul.navbar-nav` links `#home` Home, `#service`
     Service, `#project` project, `#blog` blog, `#team` team
     (`text-transform: uppercase; font-weight: 600; color: #000; padding:
20px`) + `li.dropdown` "Pages" (Bootstrap dropdown: `div.dropdown-menu`
     with `a.dropdown-item` Generic, Elements; opacity 0 → fade in).
  2. Hero `section.banner-area.relative#home` (`data-parallax="scroll"`
     `data-image-src="img/header-bg.jpg"` → cover bg; `div.overlay-bg.overlay`
     = `#000` opacity .4): `div.row.fullscreen.d-flex.align-items-center.justify-content-end`
     (100vh) → `div.banner-content.col-lg-6.col-md-12` right-aligned:
     `h1` "We Provide <br> **Solutions** that <br> Brings **Joy**" — 72px,
     weight 100, line-height 1em, color `#fff`, margin-bottom 40px;
     `span` = font-weight 700 (inherits white) — and
     `a.primary-btn2.header-btn.text-uppercase` "Hire Us Now!" (gradient
     pill, white text).
  3. Services `section.service-area.pt-100.pb-150#service` (white bg):
     centered `div.menu-content.pb-70.col-lg-8` → `h1.mb-10` "Latest News
     from all categories" + one-line lorem `p`; `div.row` × 4
     `div.sigle-service.col-lg-3.col-md-6`: `span.lnr.lnr-rocket|lnr-magic-wand|lnr-gift|lnr-phone`
     (linearicons icon, gradient text on card hover) + `h4` Easy Flight
     Search / Get Hotel Offers / Holiday Packages / Dedicated Support +
     shared lorem `p` + `a.text-uppercase.primary-btn2.primary-border.circle`
     "View Details" (`color/border #8490ff`, white bg, radius 20px,
     padding 8px 35px, weight 600).
  4. About `section.about-area` (bg image `img/about-bg.png`, cover,
     centered): `div.row.justify-content-end.align-items-center` →
     `div.col-lg-6.about-left.mt-70`: `h1` (color `#fff`, margin-bottom
     20px) "We can be your digital <br> Problems Solution Partner" + lorem
     `p` + `div.buttons` × 2 `a.about-btn.text-uppercase.primary-border.circle`
     "What we offer" / "Get a free quote" (white text, 1px white border,
     padding 5px 30px, radius 20px, weight 600; hover → white bg, black
     text); `div.col-lg-6.about-right` → `img.img-fluid` `img/about.png`.
  5. Projects `section.project-area.section-gap#project`: centered title
     `h1.mb-10` "Latest Project on the go" + sub `p`; `div.active-works-carousel.mt-40`
     (owl carousel) → `div.item` × 5: `img.img-fluid` `img/project.jpg` +
     `div.caption.text-center.mt-20` → `h6.text-uppercase` "Vector
     Illustration" + LCD-screen lorem `p`. Carousel item image height 460px.
  6. Skills `section.skill-area.section-gap` (bg `#000`): `div.col-lg-6.skill-left`:
     `h1.text-white.mb-30` "Our Fields of Expertness" + lorem `p`;
     `div.col-lg-6.skill-right` → `div.row` × 3 `div.col-lg-4.single-skill`:
     donut widget `div.skill1|skill2|skill3.d-block.mx-auto`
     (jquery.DonutWidget — segment 0 = purple gradient `#908ced→#b56fe8`,
     rest `#292929`) + `h4` Wireframing / User Research / User Experience
     (chart data: 75% / 95% / 85%).
  7. Team `section.team-area.section-gap#team` (bg `#f9f9ff`): centered
     title `h1.mb-10` "About Creative Agency Team" + sub "Who are in
     extremely love with eco friendly system."; `div.row` × 4
     `div.col-md-3.single-team` (padding 10px): `div.thumb` → `img.img-fluid`
     `img/t1..t4.jpg` + hover overlay with `a` social icons (fa-facebook,
     fa-twitter, fa-linkedin); `div.meta-text.mt-30.text-center` → `h4`
     Ethel Davis / Rodney Cooper / Dora Walker / Lena Keller + `p`
     "Managing Director (Sales)" / "Creative Art Director (Project)" /
     "Senior Core Developer" / "Creative Content Developer".
  8. Testimonials `section.testimonial-area.relative.section-gap` (bg
     image `img/testimonial-bg.jpg`, cover; `div.overlay.overlay-bg` =
     purple gradient): `div.active-testimonial` (owl carousel) → `div.single-testimonial.item.d-flex.flex-row`
     × 2 (white bg, padding 25px 30px 12px): `div.thumb` avatar
     `img/user1.png|user2.png` + `div.desc`: quote `p` + `h4` "Mark Alviro
     Wiens" + `p` "CEO at Google".
  9. Blog `section.blog-area.section-gap#blog`: centered title `h1.mb-10`
     "Latest From Our Blog" + sub; `div.row` × 4 `div.col-lg-3.col-md-6.single-blog`:
     `img.img-fluid` `img/b1..b4.jpg` + `p.date` "10 Jan 2018" (bg `#000`,
     white, weight 100, padding 2px 15px, width 115px, centered,
     margin-top 20px) + `h4` `a` "Addiction When Gambling Becomes A
     Problem" (gradient text on hover) + lorem `p` + `div.meta-bottom.d-flex.justify-content-between`
     × 2 `p`: `span.lnr.lnr-heart` " 15 Likes" / `span.lnr.lnr-bubble`
     " 02 Comments".
  10. Footer `footer.footer-area.section-gap` (bg `#222222`, padding-top
      100px): `div.row` → `div.col-lg-3` "Top Products"
      `ul.footer-nav` (Managed Website, Manage Reputation, Power Tools,
      Marketing Service); `div.col-lg-6` Newsletter (p "You can trust us.
      we only send promo offers, not a single spam." + email `input`
      placeholder "Enter Email" + `button.nw-btn.primary-btn` "Subscribe"
      with `span.lnr.lnr-arrow-right` — gradient pill); `div.col-lg-3`
      "Instragram Feed" `ul.instafeed.d-flex.flex-wrap` × 8 `img`
      `img/i1..i8.jpg`; then `div.row.footer-bottom.d-flex.justify-content-between`
      (padding-top 80px): `p.footer-text.text-white` copyright "© <year>
      All rights reserved | This template is made with <i.fa-heart-o> by
      Colorlib" (`a` + `i` color `#8490ff`) + `div.footer-social` (text-align
      right) × 4 `a` fa-facebook / fa-twitter / fa-dribbble / fa-behance
      (gradient bg on hover).
- **Visual design (screenshot):** clean, modern, minimalist, airy
  corporate-agency landing with generous whitespace. Header white with
  black uppercase sans-serif links (logo "Agency" with a diamond icon).
  Hero = close-up lifestyle photo (hands in blue knit sweater holding a
  small potted plant, cool greyish tint) with a soft purple/lavender
  pill CTA "HIRE US NOW!" and a mixed-weight white headline on the
  right. Below: white services grid with 4 thin-outline line icons and
  identical lorem text. Purple/lavender is the sole accent color;
  neutrals are white / light grey body text / dark grey-black headings.
- **Design tokens (extracted from main.css):**
  - Primary gradient: `linear-gradient(0deg, #908ced 0%, #b56fe8 100%)`
    (signature accent — hero "Hire Us Now!" button, footer Subscribe
    button, donut segment 0, testimonial overlay, footer-social hover,
    hover gradient-text on service icons and blog titles).
  - Primary flat: `#8490ff` (selection bg, "View Details" button
    border/text, footer copyright links, generic button variants).
  - Darks: `#000` (hero overlay at opacity .4, skill-area bg, blog date
    badge bg, primary-btn2 default text), `#222222` (footer bg, heading
    text), `#292929` (donut chart background segment), `#111111`.
  - Lights: `#fff` (sections, testimonial cards, button text), `#f9f9ff`
    (team-area bg, borders), `#f4f4f4` (primary-btn2 default border),
    `#eeeeee`.
  - Text: `#777777` (body, 14px weight 300), `#fff` (hero, about-left,
    skill-left, footer).
  - Font: **Poppins** sans-serif — body 14px / 300 / line-height 1.625em;
    h1 36px (hero 72px weight 100, line-height 1em, bold 700 spans),
    h2 30px, h3 24px, h4 18px, h6 16px. Load via Google Fonts `<link>`.
  - Buttons/shapes: gradient pill = radius 25px, line-height 42px,
    padding-left 30px, padding-right 60px, uppercase, weight 500;
    header-btn hover = transparent bg + 1px white border; "View Details"
    = radius 20px, 1px `#8490ff` border, `#8490ff` text, white bg,
    padding 8px 35px, weight 600; about-btn = radius 20px, 1px white
    border, white text, padding 5px 30px, weight 600 (hover inverts);
    blog date badge = `#000` bg, radius 0, padding 2px 15px, width 115px.
  - Section rhythm: `.section-gap` padding `120px 0`; service-area
    `pt-100 pb-150`; footer padding-top 100px, footer-bottom padding-top
    80px; project carousel image height 460px; hero fullscreen (100vh).
- **Recreation name:** Maestro (NEW name, differs from ColorLib "Creative
  Agency 2"). App folder `apps/maestro`, package
  `@free-react-templates/maestro`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/maestro-<n>/<w>/<h>`: hero 1920×1080, about
  800×600, project 900×600 ×5, team 400×400 ×4, testimonial avatars
  120×120 ×2, blog 600×400 ×4, instagram 200×200 ×8); lucide-react icons
  (Rocket, Wand2, Gift, Headphones for services; Heart, MessageCircle,
  ArrowRight, Diamond for the logo; brand icons Facebook/Twitter/
  Linkedin/Dribbble/Behance as inline SVG — lucide has no brand icons);
  Poppins via Google Fonts; parallax hero → static cover background;
  owl carousels (project, testimonial) → simple carousel with dot
  indicators (or grid; document the choice); donut widgets → conic-
  gradient progress rings (segment = the purple gradient, rest `#292929`)
  with percentage labels; newsletter form → controlled input + submit
  with success state (no Mailchimp); no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Requirements

### Requirement: Header and navigation

The system SHALL render an absolute transparent header over the hero with
a wordmark, uppercase nav links, and a Pages dropdown.

#### Scenario: Header content

- **GIVEN** the Maestro page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site wordmark on the left (text
  wordmark with a small diamond icon)
- **AND** the header SHALL show nav links: Home, Service, Project, Blog,
  Team
- **AND** the header SHALL show a "Pages" link with a dropdown containing
  Generic and Elements

#### Scenario: Nav link style

- **GIVEN** the header is rendered
- **WHEN** a nav link is inspected
- **THEN** nav links SHALL be uppercase, weight 600, black, with 20px
  padding

#### Scenario: Header over the hero

- **GIVEN** the page is rendered at desktop width
- **WHEN** the header is inspected
- **THEN** the header background SHALL be transparent over the hero image

### Requirement: Hero section

The system SHALL render a full-height hero with a background image, dark
overlay, a mixed-weight headline, and a gradient pill call-to-action.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "We Provide Solutions that Brings
  Joy" in white, 72px, weight 100
- **AND** the words "Solutions" and "Joy" SHALL be bold (weight 700)
- **AND** it SHALL show a "Hire Us Now!" button in uppercase white text
  on the purple gradient pill
- **AND** the hero content SHALL be right-aligned within the viewport

#### Scenario: Hero background

- **GIVEN** the hero is rendered
- **WHEN** the hero background is inspected
- **THEN** it SHALL use a cover background image at full viewport height
- **AND** it SHALL apply a dark overlay (black at ~0.4 opacity)

### Requirement: Services section

The system SHALL render a white "Latest News from all categories" section
with a centered title and four icon cards with outline buttons.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the centered heading "Latest News from all
  categories" with a one-line subtext
- **AND** it SHALL show four cards: Easy Flight Search (rocket icon), Get
  Hotel Offers (wand icon), Holiday Packages (gift icon), Dedicated
  Support (headset/phone icon)
- **AND** each card SHALL show an icon, a level-4 title, a one-line
  description, and a "View Details" button with a `#8490ff` border and
  text on a white pill

#### Scenario: Service icon hover

- **GIVEN** a service card is rendered
- **WHEN** the user hovers over it
- **THEN** the icon SHALL take the purple gradient text color

### Requirement: About section

The system SHALL render an about band on a background image with a white
headline, two outline pill buttons, and a right-hand image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the white headline "We can be your digital
  Problems Solution Partner"
- **AND** it SHALL show two buttons "What we offer" and "Get a free
  quote" with a white outline (radius 20px)
- **AND** the section SHALL show an image on the right side

#### Scenario: About button hover

- **GIVEN** an about button is rendered
- **WHEN** the user hovers over it
- **THEN** the button background SHALL become white and the text black

### Requirement: Projects section

The system SHALL render a "Latest Project on the go" carousel of image
cards with uppercase captions.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show the centered heading "Latest Project on the go"
  with a one-line subtext
- **AND** it SHALL show a carousel of project cards, each with an image
  and an uppercase caption (e.g. "Vector Illustration") with a short
  description

#### Scenario: Project carousel

- **GIVEN** the projects carousel is rendered
- **WHEN** the user advances the carousel
- **THEN** a different project card SHALL be displayed
- **AND** dot indicators SHALL reflect the current card

### Requirement: Skills section

The system SHALL render a black skills section with a heading and three
donut progress rings.

#### Scenario: Skills content

- **GIVEN** the page is rendered
- **WHEN** the skills section is displayed
- **THEN** it SHALL use the black `#000` background
- **AND** it SHALL show the white heading "Our Fields of Expertness" with
  a one-line subtext on the left
- **AND** it SHALL show three donut rings on the right: Wireframing 75%,
  User Research 95%, User Experience 85%
- **AND** each donut SHALL use the purple gradient for its filled segment
  and `#292929` for the remainder

### Requirement: Team section

The system SHALL render a `#f9f9ff` team section with four photo cards
and hover social icons.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the centered heading "About Creative Agency
  Team" with the subtext "Who are in extremely love with eco friendly
  system."
- **AND** it SHALL show four team cards with photo, name, and role:
  Ethel Davis (Managing Director (Sales)), Rodney Cooper (Creative Art
  Director (Project)), Dora Walker (Senior Core Developer), Lena Keller
  (Creative Content Developer)

#### Scenario: Team card hover

- **GIVEN** a team card is rendered
- **WHEN** the user hovers over it
- **THEN** social icons (Facebook, Twitter, Linkedin) SHALL appear over
  the photo

### Requirement: Testimonials section

The system SHALL render a testimonial carousel over a photo with a purple
gradient overlay and white quote cards.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the background image with the purple gradient
  overlay
- **AND** it SHALL show a white card with an avatar, a quote, the name
  "Mark Alviro Wiens", and the role "CEO at Google"

#### Scenario: Testimonial rotation

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the user advances the carousel
- **THEN** a different quote card SHALL be displayed

### Requirement: Blog section

The system SHALL render a "Latest From Our Blog" section with four post
cards containing date badges, titles, excerpts, and like/comment counts.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the centered heading "Latest From Our Blog" with
  a one-line subtext
- **AND** it SHALL show four post cards, each with an image, a black date
  badge (e.g. "10 Jan 2018"), a title link, a short excerpt, and a meta
  row with like and comment counts

#### Scenario: Blog title hover

- **GIVEN** a blog title link is rendered
- **WHEN** the user hovers over it
- **THEN** the title SHALL take the purple gradient text color

### Requirement: Footer

The system SHALL render a `#222222` footer with Top Products, Newsletter,
and Instagram Feed columns plus a copyright bar with social icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Top Products" column with links (Managed
  Website, Manage Reputation, Power Tools, Marketing Service)
- **AND** it SHALL show a "Newsletter" column with a short text, an email
  input, and a gradient "Subscribe" button with an arrow icon
- **AND** it SHALL show an "Instagram Feed" column with 8 thumbnail
  images
- **AND** it SHALL show a copyright line ending with a heart and social
  icons (Facebook, Twitter, Dribbble, Behance)

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** the user enters an email and submits
- **THEN** a success message SHALL be shown (or the input SHALL be
  replaced by a confirmation)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Maestro app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Maestro — Creative Agency"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/maestro`
      (`scripts/verify-app.sh maestro` in FAST_MODE; full `npm run gate`
      in CI).
- [ ] Visual fidelity: transparent header (wordmark + 5 uppercase links +
      Pages dropdown), full-height hero (photo + 0.4 overlay +
      right-aligned 72px weight-100 headline with bold spans + gradient
      "Hire Us Now!" pill), services (4 icon cards + `#8490ff` "View
      Details" pills), about (bg image + white headline + white-outline
      pills + right image), projects (carousel, uppercase captions),
      skills (`#000` + 3 gradient donut rings), team (`#f9f9ff` + 4
      photo cards + hover socials), testimonials (photo + gradient
      overlay + white cards), blog (4 posts + black date badges +
      likes/comments), `#222222` footer (3 columns + newsletter + 8
      insta thumbs + copyright bar) match the ColorLib "Creative Agency
      2" preview 1:1.
- [ ] Design tokens in `@theme`: primary gradient `#908ced → #b56fe8`,
      primary flat `#8490ff`, skill bg `#000`, team bg `#f9f9ff`, footer
      `#222222`, body text `#777777`; Poppins loaded via Google Fonts.
- [ ] Placeholder images use `picsum.photos/seed/maestro-<n>/<w>/<h>`;
      brand icons are inline SVG (no lucide brand icons); no ColorLib
      assets copied.
- [ ] PR description states source template (ColorLib "Creative Agency
      2"), preview URL (`https://preview.colorlib.com/theme/creativeagency/`
      — note the slug difference), design tokens, and what differs
      (name, placeholders, parallax → static hero, carousel/donut
      simplifications, newsletter without Mailchimp).
