# Template: Amplify (Digital Marketing Agency Template)

## Purpose

Amplify is a single-page digital-marketing agency template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Uza" agency website template (see TEMPLATES.md, Bootstrap
section, line 525), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a modern, flat, light agency landing page: white
background with a vibrant tech blue (`#1583e9`) accent and soft pale-blue
(`#e7f2fd`) geometric curve shapes behind the hero and section edges. A
top navbar (dark text logo, centered links, white pill "Get A Quote"
button, "Login / Register" link, search icon) sits above a hero carousel
(3 slides: headline "Uza makes your biz greater" with the last word in
blue, a sub-line, a solid-blue pill "Start Exploring" CTA, and a floating
device mockup image on the right). Then: a two-column about split (photo
with a circular video play button + "We're a Agency Team & Digital
Marketing" copy); an "Our Services" section with three centered columns
whose icons sit in 145×110px light-blue blob shapes (Business Strategy /
Market Analytics / Marketing Social); an "Our Portfolio" carousel of
image slides with a hover overlay (title + text + circular arrow button);
a testimonials carousel (photo, quote, 5 gold stars, author, quote icon);
a CTA band ("Interested in working with us?" + "Call us now: (+65) 1234
5678"); an "Our Latest Blogs" section with three white card posts over
background photos (date block, title, excerpt, Read More); a newsletter
band (heading + "Your Email" input + pill "Subscribe" button, framed by
1px light-blue border lines); and a footer with four columns (Contact Us
with phone/address/email/hours, Quick Link, Resources, brand blurb +
social icons) and a copyright bar. The signature look is the blue pill
buttons (50px radius), the blob-shaped light-blue service icon plates,
the pale-blue curve SVGs, and the owl-carousel sliders everywhere.

## Design tokens (from `https://preview.colorlib.com/theme/uza/`)

- **Brand accent:** `#1583e9` (tech blue) — logo mark, hero headline span
  ("greater"), `.btn-2` solid buttons, links, `.call-now-btn` text,
  hover states; hover shadow `0 6px 50px 8px rgba(21, 131, 233, 0.15)`.
- **Secondary dark blue:** `#3851bc` (used sparingly in the CSS — hover /
  deeper accents).
- **Light-blue tint:** `#e7f2fd` — `.service-icon` plate background,
  newsletter `.border-line` (1px) top + bottom.
- **Text:** headings / icons `#303030` (dark charcoal); body `#707070`;
  muted `#a6a6a6`; white on brand-blue buttons.
- **Font:** `"Aileron", sans-serif` everywhere (self-hosted
  `fonts/aileron-font-style.css` in the original — NOT on Google Fonts).
  Substitute with a close geometric sans via Google Fonts `<link>` in
  `index.html` — recommend **Poppins** (300/400/600) or Montserrat; note
  the substitution as a documented deviation.
- **Buttons** (`.uza-btn`): pill `border-radius: 50px`; `min-width:
160px; height: 50px; line-height: 50px; padding: 0 30px; font-size:
16px; font-weight: 600; text-transform: capitalize; border: none`.
  - base `.uza-btn`: white bg, `#1583e9` text; hover → blue bg, white
    text + blue glow shadow.
  - `.btn-2`: solid `#1583e9` bg, white text; hover → white bg, blue
    text (used for hero "Start Exploring", about CTA).
  - `.btn-3`: `2px solid #1583e9` outline, transparent bg (line-height
    46px).
- **Service icon plates** (`.service-icon`): `width: 145px; height:
110px; background: #e7f2fd; font-size: 42px; color: #303030;
line-height: 110px; border-radius: 80px 200px 200px 362px` (organic
  blob shape), `margin: 0 auto 30px`.
- **Section spacing:** `section-padding-80` (80px top+bottom),
  `section-padding-80-0` (80px top only), `section-padding-0-80` (80px
  bottom only); blog cards use `mb-80`.
- **Blog post card** (`.single-blog-post`): full-bleed background photo;
  white `.post-content` block `padding: 40px` overlapping the photo's
  bottom; `.post-date` big day number + month/year; title link; excerpt;
  `read-more-btn` with right arrow.
- **CTA band** (`.uza-cta-area`): `h2` "Interested in working with us?"
  - `h6` sub-line; right side `.call-now-btn` — `font-size: 30px; color:
#1583e9` with a smaller "Call us now:" label span.
- **Newsletter** (`.uza-newsletter-area`): `.border-line` 1px `#e7f2fd`
  above and below; `h2` 36px; form = email input (placeholder "Your
  Email") + pill "Subscribe" button.
- **Decorative curves:** `curve-1.png` (hero, bottom), `curve-2.png`
  (about background pattern), `curve-3/4.png` (portfolio/blog edges) —
  pale blue SVG-ish shapes. Recreate as simple inline SVG blobs tinted
  `#e7f2fd` / translucent `#1583e9` (never copy the PNGs).

## Design reference (replication findings)

- **Original:** ColorLib "Uza" — digital marketing / agency template
  (source: https://colorlib.com/wp/template/uza/). Listed in TEMPLATES.md
  line 525 (Bootstrap section); dup rows at lines 1216 (Business) and
  1396 (Consulting) — same source, one implementation.
- **Live preview URL:** https://preview.colorlib.com/theme/uza/ (title
  "Uza - Free Bootstrap 4 Template by Colorlib"; reachable via curl).
  HTML saved to `/tmp/uza.html` (39 KB); stylesheet
  `https://preview.colorlib.com/theme/uza/style.css` saved to
  `/tmp/uza-style.css` (63 KB); screenshot
  `https://colorlib.com/wp/wp-content/uploads/sites/2/uza-free-template.jpg`
  (AVIF) converted to `/tmp/uza-shot.png` and viewed in the browser. The
  screenshot and live preview agree: white + blue `#1583e9` accent,
  soft-blue curve shapes, navbar with "Get A Quote" pill, hero with
  laptop mockup and "biz greater" headline (blue "greater"), about split
  with VR-headset photo, light-blue blob service icons, portfolio
  carousel, testimonials, blog cards, newsletter, footer.
- **Demo brand in the preview is "Uza"** → rename to **Amplify** (to
  amplify a brand = digital-marketing fit; text logo "Amplify." styled
  dark blue with an accent dot — never the copied `img/core-img/logo.png`).
- **Section structure (1:1 from the preview DOM):**
  1. Header `header.header-area` → `div.main-header-area` →
     `nav.classy-nav-container` — text logo left; `.classynav` links:
     Home (active) · Pages (dropdown) · Portfolio (dropdown) · About
     (dropdown) · Blog · Contact — recreate FLAT as Home · About ·
     Services · Portfolio · Blog · Contact (scroll anchors; dropdowns
     simplified away, documented deviation); right cluster:
     `.get-a-quote` → `a.btn.uza-btn` "Get A Quote" (white pill, blue
     text, `href="#"` — a plain link, no modal), `.login-register-btn`
     "Login / Register", `.search-icon` (opens search modal with a
     search input); hamburger toggler on mobile.
  2. Welcome `section.welcome-area` — `.welcome-slides.owl-carousel` of
     3 `div.single-welcome-slide`: decorative `background-curve` image;
     `.welcome-content` two columns (col-md-6 each): left `.welcome-text`
     — `h2` "Uza makes your <br> biz <span>greater</span>" (span =
     `#1583e9`), `h5` "We love to create "cool" things on Digital
     Platforms", `a.btn.uza-btn.btn-2` "Start Exploring"; right
     `.welcome-thumbnail` — device-mockup image (laptop / VR headset /
     phone; slides share the same text, images differ). Carousel with
     prev/next (or autoplay) controls.
  3. About `section.uza-about-us-area` — `.row.align-items-center`:
     left `.about-us-thumbnail` (photo + `.uza-video-area` circular
     play-button overlay linking a YouTube video), right
     `.about-us-content` — `h2` "We're a Agency Team & Digital
     Marketing", two lorem paragraphs, `a.btn.uza-btn.btn-2.mt-4` "Start
     Exploring"; decorative `.about-bg-pattern` curve behind.
  4. Services `section.uza-services-area.section-padding-80-0` —
     `.section-heading.text-center` `h2` "Our Services"; 3
     `col-12.col-lg-4 .single-service-area` (centered): `.service-icon`
     blob plate (icon 42px `#303030` on `#e7f2fd`) + title + lorem `p`:
     Business Strategy (icon `icon_cone_alt` → lucide `Pyramid`),
     Market Analytics (`icon_piechart` → `PieChart`), Marketing Social
     (`icon_easel` → `Presentation`).
  5. Portfolio `section.uza-portfolio-area.section-padding-80` (padding
     left/right 3%) — `.section-heading` `h2` "Our Portfolio" + `p` "We
     stay on top of our industry by being experts in yours.";
     `.portfolio-sildes.owl-carousel` of 6 `div.single-portfolio-slide`:
     image + `.overlay-effect` (on hover: `h4` "Digital Marketing" + `p`
     lorem) + `.view-more-btn` circular arrow button; decorative
     `.portfolio-bg-curve` at bottom-right.
  6. Testimonials `section.clients-feedback-area.mt-80.section-padding-80`
     — `.testimonial-slides.owl-carousel` of `div.single-testimonial-
slide.d-flex.align-items-center`: `.testimonial-thumbnail` photo +
     `.testimonial-content` — `h4` quote (source text references
     "Colorlib Ltd" → PARAPHRASE to a generic client, e.g. "our ranking
     has gone up so much from the great work your team has done…"),
     `.ratings` 5 star icons, `.author-info` `h5` name + `span` role
     ("Darrell Goodman" / "- CEO colorlib" → generic "CEO"), decorative
     `.quote-icon`.
  7. CTA band `div.uza-cta-area.section-padding-0-80` (top of the blog
     area) — left `.cta-content`: `h2` "Interested in working with us?"
     - `h6` "Hit the button below or give us a call!"; right
       `.call-now-btn` `a` — `<span>Call us now:</span> (+65) 1234 5678`
       (30px `#1583e9`; TEXT ONLY — no `tel:` href, avoids the
       secret-scan redaction trap).
  8. Blog `section.uza-blog-area` — `.section-heading.text-center` `h2`
     "Our Latest Blogs" + `p`; 3 `col-12.col-lg-4 .single-blog-post.bg-img`
     (background photos): white `.post-content` (padding 40px):
     `.post-date` (`<span>23</span>` day + "August, 2018"), `a.post-title`
     ("SEO: The Movie By Ignite Visibility" — paraphrase per card), lorem
     `p`, `a.read-more-btn` "Read More" + right arrow; decorative
     `.blog-bg-curve` top-left.
  9. Newsletter `section.uza-newsletter-area` — `.border-line` on top;
     `.row.align-items-center.justify-content-between`: `.nl-content`
     `h2` "Subscribe to our Newsletter" + `p` "Subscribe our newsletter
     gor get notification about new updates, etc..."; `.nl-form` `form`
     (email input placeholder "Your Email" + `button` "Subscribe"); bottom
     `.border-line`.
  10. Footer `footer.footer-area.section-padding-80-0` — 4
      `col-12.col-sm-6.col-lg-3 .single-footer-widget`: "Contact Us"
      (`h3` phone "(+65) 1234 5678", `p` address "40 Baria Sreet 13/2 NY
      City, US" + email "hello.colorlib@gmail.com" → generic
      hello@amplify.app, `p` "Mon - Fri: 9:00 - 19:00" / "Closed on
      Weekends"); "Quick Link" (About Us · Blog · Contact Us · Forum
      Registeration · Forum Sign In); "Resources" (Customer Support ·
      Privacy · Media & Press · Our Team); brand column (blurb "Integer
      vehicula mauris libero, at molestie eros imperdiet sit amet." +
      `.footer-social-info` 4 social icons — twitter/pinterest/instagram/
      youtube → inline SVG brand icons, lucide has none). Copyright bar
      `.copywrite-text`: ColorLib credit → "© 2026 Amplify — All rights
      reserved | This template is made with ❤ by Component Dock" linking
      https://www.componentdock.com/ (mandatory, per AGENTS.md).
- **Inner pages:** the original ships separate pages (index / about /
  services / portfolio / single-portfolio / blog / blog-details /
  contact) — NOT required; recreate the single index page only (nav
  links become scroll anchors or dead anchors `#`).
- **Copy:** keep the same _kind_ of content (headline + sub + CTA, card
  title + blurb). All ColorLib references in copy (testimonial company,
  footer email) must be paraphrased away — no `colorlib` string anywhere
  in `apps/amplify`.

## Requirements

### Requirement: Navbar with text logo, flat links and action cluster

The system SHALL render a sticky top navbar with a text logo, flat nav
links, a "Get A Quote" pill button, a "Login / Register" link and a
search icon, collapsing to a hamburger menu on mobile.

#### Scenario: Desktop navbar

- **GIVEN** the Amplify app is rendered
- **WHEN** the page loads
- **THEN** the left side SHALL show the brand as styled text "Amplify"
  (recreated text — never a copied image asset) with the accent color
  applied to the dot or a word span
- **AND** the center SHALL list Home (active) · About · Services ·
  Portfolio · Blog · Contact as dark `#303030` links
- **AND** hovering a link SHALL turn it the brand blue `#1583e9`
- **AND** the right cluster SHALL show a white pill "Get A Quote" button
  (`min-width: 160px`, `height: 50px`, `border-radius: 50px`, blue text)
  followed by a "Login / Register" text link and a search icon button

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the hamburger toggler is tapped
- **THEN** a stacked menu panel SHALL open with `aria-expanded`
  reflecting the open state
- **AND** the panel SHALL contain the same nav links and the action
  cluster (Get A Quote / Login / search)

### Requirement: Hero carousel

The system SHALL render a hero carousel of three slides, each with a
headline (accent-colored final word), sub-line, solid blue pill CTA and a
device-mockup image on the right, over a pale-blue decorative curve.

#### Scenario: Hero slide content

- **GIVEN** the welcome section is rendered
- **WHEN** it loads
- **THEN** a carousel SHALL render at least the first slide with the
  headline "Amplify makes your biz greater" (the word "greater" styled in
  the brand blue `#1583e9`)
- **AND** a sub-line SHALL read "We love to create "cool" things on
  Digital Platforms"
- **AND** a solid blue pill button (`btn-2` style: `#1583e9` bg, white
  text, 50px radius, ~50px tall) SHALL read "Start Exploring"
- **AND** a device-mockup image (placeholder photo, e.g. laptop/VR/phone
  subject) SHALL render to the right of the text column
- **AND** the hero SHALL include a pale-blue decorative curve shape
  (inline SVG blob, `#e7f2fd`-tinted)

#### Scenario: Slide navigation

- **GIVEN** the hero carousel has multiple slides
- **WHEN** the user activates a next/prev control (or autoplay advances)
- **THEN** the visible slide SHALL change and the new slide's image SHALL
  be shown (text may stay identical, mirroring the source)

### Requirement: About split with video button

The system SHALL render a two-column about section with a photo and a
circular play-button overlay, a heading, two paragraphs and a solid blue
CTA.

#### Scenario: About render

- **GIVEN** the about section is rendered
- **WHEN** it loads
- **THEN** the left column SHALL show a photo (placeholder) with a
  circular play-button overlay (white icon on a blue or white circle)
- **AND** the right column SHALL show the heading "We're a Agency Team &
  Digital Marketing", two paragraphs of agency-style copy and a solid
  blue pill button "Start Exploring"

### Requirement: Services with blob icon plates

The system SHALL render a services section with a centered heading and
three centered columns, each with an icon inside a light-blue blob-shaped
plate, a title and a paragraph.

#### Scenario: Services render

- **GIVEN** the services section is rendered
- **WHEN** it loads
- **THEN** the centered heading SHALL read "Our Services"
- **AND** three columns SHALL render in a 3-column row, each with an
  icon inside a `#e7f2fd` plate of ~145×110px with the blob radius
  (`80px 200px 200px 362px`), a title and lorem text: Business Strategy
  (`Pyramid`) · Market Analytics (`PieChart`) · Marketing Social
  (`Presentation`)
- **AND** the icons SHALL come from `lucide-react` (no copied icon
  fonts) and be dark `#303030`

### Requirement: Portfolio carousel

The system SHALL render a portfolio section with a heading + sub-line and
an image carousel whose slides show a title overlay and a circular arrow
button.

#### Scenario: Portfolio render

- **GIVEN** the portfolio section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Our Portfolio" with the sub-line "We
  stay on top of our industry by being experts in yours."
- **AND** a carousel of at least three image slides SHALL render, each
  with a hover/visible overlay containing a title (e.g. "Digital
  Marketing") and a short paragraph
- **AND** each slide SHALL have a circular arrow (view-more) button

### Requirement: Testimonials carousel

The system SHALL render a testimonials section with carousel slides
(photo, quote, five stars, author name + role, quote icon).

#### Scenario: Testimonial render

- **GIVEN** the testimonials section is rendered
- **WHEN** it loads
- **THEN** at least one slide SHALL render with a person photo, a quote
  paragraph (generic client copy — no "ColorLib" reference), five star
  icons, the author name (e.g. "Darrell Goodman") and a role (e.g. "CEO")
- **AND** if multiple slides exist, controls SHALL cycle between them
  (or render statically — a single slide is acceptable)

### Requirement: CTA band with call-now link

The system SHALL render a CTA band with a heading, sub-line and a
call-now phone text link.

#### Scenario: CTA render

- **GIVEN** the CTA band is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Interested in working with us?" with
  the sub-line "Hit the button below or give us a call!"
- **AND** the right side SHALL show "Call us now: (+65) 1234 5678" as
  TEXT (phone displayed at ~30px in brand blue; no `tel:` href — plain
  text or `href="#"` to avoid literal-redaction issues)

### Requirement: Latest Blogs cards

The system SHALL render a blog section with a centered heading and three
white card posts over background photos (date, title, excerpt, Read More).

#### Scenario: Blog render

- **GIVEN** the blog section is rendered
- **WHEN** it loads
- **THEN** the heading SHALL read "Our Latest Blogs"
- **AND** three cards SHALL render in a 3-column row, each with a
  background photo and an overlapping white content block (padding 40px)
  containing a date ("23" + "August, 2018" — paraphrase), a title link
  (e.g. "SEO: The Movie By Ignite Visibility" — paraphrase), an excerpt
  and a "Read More" link with a right arrow icon

### Requirement: Newsletter band

The system SHALL render a newsletter band framed by 1px light-blue border
lines with a heading, sub-line and an email form with a pill Subscribe
button.

#### Scenario: Newsletter render

- **GIVEN** the newsletter section is rendered
- **WHEN** it loads
- **THEN** a 1px `#e7f2fd` border line SHALL frame the band (top and
  bottom)
- **AND** the heading SHALL read "Subscribe to our Newsletter" with the
  sub-line "Subscribe our newsletter to get notifications about new
  updates, etc…" (paraphrase)
- **AND** a form SHALL render an email input (placeholder "Your Email")
  and a pill "Subscribe" button
- **AND** submitting the form SHALL show a success state (no network
  call required)

### Requirement: Footer with four columns and Component Dock credit

The system SHALL render a footer with four widget columns (contact info,
two link lists, brand blurb + social icons) and a copyright bar linking
Component Dock.

#### Scenario: Footer render

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** the first column SHALL be titled "Contact Us" and show a phone
  number ("(+65) 1234 5678"), an address + email (generic — no
  colorlib.com address) and opening hours ("Mon - Fri: 9:00 - 19:00" /
  "Closed on Weekends")
- **AND** a "Quick Link" column SHALL list About Us · Blog · Contact Us ·
  Forum Registration · Forum Sign In
- **AND** a "Resources" column SHALL list Customer Support · Privacy ·
  Media & Press · Our Team
- **AND** the last column SHALL show the brand, a blurb and four social
  icon links (twitter / pinterest / instagram / youtube as inline SVG
  brand icons — lucide-react has no brand icons)
- **AND** the copyright bar SHALL read "© 2026 Amplify — All rights
  reserved | This template is made with ❤ by
  [Component Dock](https://www.componentdock.com/)" (the Component Dock
  link is mandatory — the ColorLib credit is never kept)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-amplify`
- [ ] Scaffold `apps/amplify` (package `@free-react-templates/amplify`,
      homepage `https://amplify.free.componentdock.com`, `public/CNAME` =
      `amplify.free.componentdock.com`); workspace registered in
      package-lock.json
- [ ] Tests written FIRST (TDD) mirroring every Gherkin scenario above;
      100% lines/functions/branches/statements via
      `scripts/verify-app.sh amplify` (typecheck + lint + knip + fallow +
      coverage + build)
- [ ] No ColorLib reference anywhere in `apps/amplify` (comments
      included — testimonial/email/footer copy paraphrased)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via `https://picsum.photos/seed/amplify-<n>/<w>/<h>`
      (hero mockup seeds screened for laptop/VR/phone subjects per the
      seed-screening method); Google Fonts (Poppins — Aileron
      substitute) via `<link>`; icons from `lucide-react`; social brand
      icons as inline SVG
- [ ] No `tel:` literals in source — phone shown as text only
- [ ] PR description states: source (ColorLib "Uza"), preview URL,
      design tokens, what differs (rename, placeholder images, flat nav,
      font substitution)
- [ ] After merge: mark TEMPLATES.md line 525 `[x]` with surge URL
      `https://amplify.free.componentdock.com`, run `npm run
    readme:status`, push
