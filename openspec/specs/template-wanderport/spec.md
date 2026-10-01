# Template: Wanderport (Travel Agency Booking Template)

## Purpose

Wanderport is a single-page travel agency booking website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Travelasia" template (see TEMPLATES.md, Travel section, line
3007), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a photo-hero travel agency page: a white top bar with a
gradient triangle logo mark and a hamburger menu; a 700px photographic hero
under a heavy dark overlay, anchored by a huge white Poppins headline
("Wherever you go it'll inside the World"), a lorem subtext, and a
purple→teal gradient pill "See Details →". Straddling the hero's bottom edge,
a white booking card overlaps upward (-42px) with a four-tab strip — flights /
hotels / flights+hotels / Holidays — each tab revealing an H4 ("Book Your
Flights" etc.) over a 6-field form (From, To, Start, Return, Adults, Child)
and a right-aligned gradient "Send Message →" button.

Below the page runs, 1:1 in this order: "Popular Packages" (centered H1 over
a 6-across grid of photo cards whose gradient overlay fades up from the
bottom on hover, revealing a white "Resort Holiday package" title); a solid
BLACK blog band ("Our Recent Blogs" — 3 cards with uppercase white
letter-spaced titles "Summer ware are coming", author row + date/likes/comments
meta between horizontal rules); a split "Did not find your Package? Feel free
to ask us. We'll make it for you" about block (gradient-clipped headline +
black pill "Make Package of your own" beside a full-bleed photo); four
centered contact-info cards (Visit Our Office / Let's call us / Let's Email Us
/ Customer Support); a white map + contact-form section (map placeholder
left, sharp-cornered name/email/message form right with gradient submit); and
a DARK `#222222` footer with four widgets — About Us, Newsletter (dark input
+ gradient square arrow button), Instragram Feed (8-thumbnail grid), Follow Us
(social icons) — closing with a centered bottom line whose accent links are
aqua `#5cf2ee`. The recreation's footer links Component Dock instead of the
source attribution, and the screenshot demo brand "TRAVELASIA" (gradient
triangle-A mark) is never reused.

The design is anchored by one signature element — a purple→teal GRADIENT
`linear-gradient(0deg, #9a52fd 0%, #57ffed 100%)` — used on every primary
button, the package-card hover overlay, the newsletter submit, gradient-clip
text (feature icons on hover, the about headline, footer social hover), on
aqua `#5cf2ee` for the selection color and footer accent links. Typography is
a single family: Poppins everywhere (body 300/14px `#777`, headings 600
`#222`). Primary buttons are PILL-shaped (`border-radius: 25px`, 42px line
height) with an arrow icon sliding left on hover; form inputs are deliberately
SHARP (`border-radius: 0`) — the defining contrast of this theme. Sections
breathe at 120px vertical padding.

## Design reference (replication findings)

- **Original:** ColorLib "Travelasia" — creative travel agency booking
  template (source: https://colorlib.com/wp/template/travelasia/). Listed in
  TEMPLATES.md `## Travel` at line 3007; slug appears exactly once.
- **Live preview URL:** https://preview.colorlib.com/theme/travelasia/
  (HTTP 200, 33,399 bytes HTML, verified 2026-10-01; theme stylesheet
  `css/main.css`, 13,172 bytes). HTML saved to `/tmp/travelasia.html`;
  theme CSS saved to `/tmp/travelasia-main.css`. The preview DOM is
  authoritative for section order and copy.
- **Screenshot:** `travelasia-free-creative-travel-agency-booking-template.jpg`
  (`https://colorlib.com/wp/wp-content/uploads/sites/2/travelasia-free-creative-travel-agency-booking-template.jpg`,
  reviewed visually 2026-10-01; served as AVIF, 1200×958) confirms the hero
  treatment: white navbar with the gradient triangle "A" mark + "TRAVELASIA"
  wordmark left and hamburger right (demo brand only, never reused); the dark
  Cinque-Terre-style cliffside-village photo under a heavy dark wash; the huge
  two-line white Poppins headline; the lorem subtext; and the purple→teal
  gradient pill "See Details →".
- **Stylesheets in the reference:** `css/linearicons.css`,
  `css/owl.carousel.css`, `css/font-awesome.min.css`,
  `css/magnific-popup.css`, jQuery UI base theme, `css/bootstrap.css`,
  `css/main.css` (theme — canonical tokens). Bootstrap grid, owl carousel,
  magnific-popup, Linearicons/FontAwesome icon fonts, jQuery datepicker,
  ajaxchimp newsletter, parallax, and jQuery are NEVER copied: recreation
  uses Tailwind grid, React-state tabs, lucide-react icons, plain text/date
  inputs, and a no-op newsletter form. Poppins loads via Google Fonts
  `<link>` in `index.html` (weights 300–700).
- **Key theme rules (verified in main.css):**
  - `body`: `color: #777; font-family: "Poppins", sans-serif; font-size:
    14px; font-weight: 300; line-height: 1.625em`; `::selection {
    background-color: #5cf2ee; color: #fff }`
  - `h1, h3, h4, h6`: `"Poppins", sans-serif; color: #222; font-weight:
    600; line-height: 1.2em`
  - Signature gradient: `background-image: linear-gradient(0deg, #9a52fd
    0%, #57ffed 100%)` — applied to `.primary-btn`, `.primary-btn:after`,
    `.primary-btn2.primary-border:hover`, `.content .content-overlay`
    (package cards), `.single-footer-widget .bb-btn` (newsletter submit);
    ALSO used as gradient-clipped TEXT via `background-clip: text` on
    `.sigle-feature:hover .lnr`, `.about-left h1`, `.footer-social a:hover`
  - `.primary-btn`: `line-height: 42px; padding-left: 30px; padding-right:
    60px; border-radius: 25px; border: none; color: #fff; font-weight: 500`;
    the arrow `<span>` sits absolute right 30px → slides to 20px on hover
    (both white)
  - `.primary-btn2`: `line-height: 28px; padding: 0 30px; border: 1px solid
    #222222; font-size: .8em; font-weight: 500`; `.circle { border-radius:
    20px }`; `.arrow` inline-flex with 10px icon gap — the secondary/outline
    pill system
  - `.banner-area`: `background: url(../img/header-bg.jpg) no-repeat center
    center/cover`; `.fullscreen { height: 700px }`; `.overlay-bg {
    background: rgba(0,0,0,0.8) }`; `.banner-content { margin-top: 100px }`
    (col-lg-9); `.banner-content h1 { color: #fff; font-size: 72px;
    font-weight: 700; line-height: 1.15em }` (45px tablet, 36px mobile,
    `<br>` hidden on mobile)
  - `.booking-area { margin-top: -42px }` — the card overlapping the hero;
    `.nav-tabs { border: none }`; `.nav-tabs .nav-link { border-radius: 0;
    background: #fff3 }`; active `.nav-link` keeps `background: #fff`
  - `.single-in` (booking inputs): `margin-bottom: 30px; border-radius: 0;
    font-size: 13px; font-weight: 300`
  - `.section-gap { padding: 120px 0 }` — the section rhythm
  - `.sigle-feature .lnr { font-size: 35px; color: #777 }` → gradient-clip
    on hover; `h4 { margin-top: 40px; margin-bottom: 20px }`
  - `.packages-area .header-text { text-align: center }` (col-md-6,
    pb-80); `.packages-area { padding-bottom: 100px }`;
    `.single-packages .title { color: #1a1a1a; text-align: center;
    margin-bottom: 10px }`; `.content .content-overlay` is the GRADIENT —
    revealed with the `.fadeIn-bottom` details on hover; `.content-title {
    font-size: 18px; color: #fff; font-weight: 500 }`
  - `.blog-area { background-color: #000 }`; `h1 { color: #fff; text-align:
    center }`; `.single-blog h4 { color: #fff; text-transform: uppercase;
    letter-spacing: 3px; margin-top: 35px }`; `.single-blog .bottom {
    padding: 20px 0; border-top: 1px solid #222; border-bottom: 1px solid
    #222 }`; meta spans white with 10px left margin; `.f-img:hover {
    opacity: .5; transform: scale(1.05) }`
  - `.about-left { padding-left: 20% }`; `h1` gradient-clipped 25px;
    `.btn-black { background-color: #222; color: #fff; text-transform:
    uppercase; font-size: 14px; border-radius: 20px; padding: 12px 28px }`
    hover → white bg + `#222` text + border
  - `.contact-area { background: #fff }`; `.common-input { border: 1px
    solid rgba(111,117,152,0.3); line-height: 48px; background:
    transparent; padding: 0 25px; color: #777 }`; `.common-textarea` same
    border, `height: 150px; padding: 15px 25px; resize: none`;
    `.contact-form { padding: 40px 30px }`
  - `.footer-area { padding-top: 100px; background-color: #222222 }`;
    widget `input { background: #191919; color: #777; line-height: 38px;
    border: none; padding-left: 20px }`; `.bb-btn` (newsletter submit) the
    GRADIENT, `color: #fff; border-radius: 0; margin-top: -40px`;
    `.instafeed li { width: 25% }` with `img { margin: 5px }` — 8 thumbs =
    2 rows × 4; `.footer-social i { color: #ccc }` → white on hover with
    gradient-clip on the link; `.footer-text { padding-top: 80px }`;
    `.footer-text a, .footer-text i { color: #5cf2ee }` — the bottom line's
    accent links are AQUA, centered
- **Content map (preview DOM):** navbar links Home / Booking (#booking) /
  Packages (#package) / Contact (#contact); hero "Wherever you go it'll
  inside the World" + lorem + "See Details"; booking tabs flights / hotels /
  flights+hotels / Holidays with per-tab H4 "Book Your Flights|Hotels|Flights
  & Hotels|Holidays"; features Easy Flight Search / Get Hotel Offers /
  Holiday Packages / Dedicated Support; "Popular Packages" (6× "Resort
  Holiday package"); "Our Recent Blogs" (3× "Summer ware are coming", author
  "Mark Wiens", meta "13th Dec ♥ 15 💬 04"); about "Did not find your
  Package? / Feel free to ask us. / We'll make it for you" + "Make Package of
  your own"; contact-info "Visit Our Office" (Dhaka address), "Let's call
  us" (Phone 01 / Phone 02 / FAX), "Let's Email Us" (3 emails), "Customer
  Support" (3 emails); contact form "Enter your name" / "Enter email
  address" / "Messege" + "Send Message"; footer widgets About Us / Newsletter
  ("Stay update with our latest") / Instragram Feed / Follow Us ("Let us be
  social"). Copy is paraphrasable; keep the same KIND of content.

## Requirements

### Feature: Navbar

A white top bar above the hero: gradient triangle logo mark + wordmark left,
hamburger menu right; anchor links Home / Booking / Packages / Contact.

#### Scenario: Header renders as in the reference
- **Given** the page loads on a desktop viewport
- **When** the navbar renders above the hero
- **Then** the bar is WHITE (not transparent), full width, with a gradient
  triangle "A" mark beside the wordmark "wanderport" on the left (the
  source demo brand "TRAVELASIA" is never reused; the mark is an original
  gradient triangle)
- **And** the links are Home, Booking, Packages, Contact — anchor-scrolling
  to `#home` / `#booking` / `#package` / `#contact` sections
- **And** on viewports below `lg` the links collapse behind a hamburger
  button (menu-bar icon, aria-expanded reflecting state) that toggles the
  link list — matching the screenshot, which shows the hamburger at ~1200px

### Feature: Hero

A 700px photographic hero under a heavy dark overlay: huge white Poppins
headline, lorem subtext, gradient pill CTA.

#### Scenario: Hero renders as in the reference
- **Given** the page loads
- **When** the hero renders
- **Then** the background is a travel photo (picsum seeded
  `wanderport-hero`), cover/center, at ~700px height, under a dark overlay
  (`rgba(0,0,0,0.8)` per CSS `.overlay-bg` — tune if needed so the photo
  reads as in the screenshot: dark but clearly visible)
- **And** the content column (~75% width, offset 100px from the top) shows
  the white Poppins h1 at 72px/700, line-height 1.15, two lines: "Wherever
  you go" / "it'll inside the World" (45px tablet, 36px mobile)
- **And** a grey lorem subtext renders below (same kind of copy,
  paraphrasable)
- **And** a pill button with the signature gradient
  (`linear-gradient(0deg, #9a52fd, #57ffed)`), radius 25px, white 500 text
  "See Details" with a right-arrow icon (lucide ArrowRight) that slides
  10px left on hover

### Feature: Booking card (tabbed)

A white card overlapping the hero's bottom edge with a four-tab strip; each
tab reveals a 6-field form and a gradient submit.

#### Scenario: Tabs render as in the reference
- **Given** the hero renders
- **When** the booking card is visible
- **Then** the card overlaps the hero upward (`margin-top: -42px`),
  centered at ~66% width (col-lg-8), white background
- **And** the tab strip shows four links — flights, hotels, flights+hotels,
  Holidays — with radius-0 translucent-white `#fff3` backgrounds; the
  ACTIVE tab is solid white with no border
- **And** switching tabs (React state) swaps the visible panel; the flights
  panel is active by default

#### Scenario: Each booking form renders as in the reference
- **Given** a tab panel is active
- **When** the panel renders
- **Then** it shows the H4 "Book Your Flights" | "Book Your Hotels" |
  "Book Your Flights & Hotels" | "Book Your Holidays" (Poppins 600 `#222`)
- **And** the form holds six inputs in the reference grid — From, To (half
  width each), Start, Return, Adults, Child (quarter width each) — all
  SHARP-cornered (`border-radius: 0`), 13px weight 300, 30px bottom margin
- **And** a right-aligned gradient pill "Send Message" with ArrowRight icon
  (the same `.primary-btn` system as the hero CTA)
- **And** submit is prevented (no-op in the recreation)

### Feature: Features row

Four icon feature cards on white, 120px section padding.

#### Scenario: Feature cards render as in the reference
- **Given** the features section renders
- **When** the cards are displayed
- **Then** there are 4 cards in a 4-up desktop grid (2-up tablet, 1-up
  mobile)
- **And** each card shows a lucide icon at ~35px in grey `#777` that turns
  gradient-clipped (purple→teal text) on card hover, an H4 with 40px top
  margin, and a grey blurb: Easy Flight Search, Get Hotel Offers, Holiday
  Packages, Dedicated Support (blurb pattern "Even the all-powerful Pointing
  has no control about the blind texts." — paraphrase ok)

### Feature: Popular Packages

A centered-title 6-across grid of photo cards with a gradient hover overlay
revealing a white title.

#### Scenario: Packages grid renders as in the reference
- **Given** the packages section renders
- **When** the grid is visible
- **Then** the centered header (col-md-6, pb-80) shows H1 "Popular
  Packages" + a grey lorem paragraph
- **And** there are 6 cards in a 6-across desktop grid (2-up on small
  screens), each a photo (picsum seeded `wanderport-pkg-1..6`) with a
  gradient overlay (`linear-gradient(0deg, #9a52fd, #57ffed)`) that fades
  in on hover together with the bottom-anchored white 18px/500 title
  "Resort Holiday package"
- **And** the section has 100px bottom padding

### Feature: Blog band

A solid black band with a centered white title and three bordered blog
cards.

#### Scenario: Blog cards render as in the reference
- **Given** the blog section renders
- **When** the band is visible
- **Then** the background is solid `#000` with 120px vertical padding
- **And** the centered header shows white H1 "Our Recent Blogs" + a white
  lorem paragraph (paraphrasable)
- **And** there are 3 cards in a 3-up desktop grid, each: photo (picsum
  seeded `wanderport-blog-1..3`) that dims to opacity 0.5 and scales 1.05
  on hover; H4 white UPPERCASE with 3px letter-spacing linking "Summer
  ware are coming" (35px top margin); grey blurb; then a meta row between
  1px `#222` top/bottom rules (20px vertical padding) — left: small avatar
  (picsum seeded `wanderport-author`) + white "Mark Wiens"; right: "13th
  Dec" + Heart icon "15" + MessageCircle icon "04" in white

### Feature: About split block

Gradient-clipped headline + black pill beside a full-bleed photo.

#### Scenario: About block renders as in the reference
- **Given** the about section renders
- **When** the block is visible
- **Then** the row is end-aligned: the LEFT column (lg:6, padding-left 20%)
  carries the gradient-clipped Poppins h1 at 25px on three lines — "Did not
  find your Package?" / "Feel free to ask us." / "We'll make it for you" —
  the text filled with the purple→teal gradient via
  `background-clip: text`
- **And** below it, grey paragraphs (same kind of copy, paraphrased) end in
  the black pill button "Make Package of your own" (uppercase, 14px,
  radius 20px, padding 12px/28px) that inverts to white bg + `#222` text
  and border on hover
- **And** the RIGHT column (lg:6) is a full-bleed photo (picsum seeded
  `wanderport-about`) with no padding
- **And** on small viewports the text column stacks above the photo

### Feature: Contact info cards

Four centered info cards on white with 120px section padding.

#### Scenario: Contact-info cards render as in the reference
- **Given** the contact-info section renders
- **When** the cards are visible
- **Then** there are 4 centered cards in a 4-up desktop grid (2-up tablet,
  1-up mobile): Visit Our Office (a Dhaka-style street address,
  paraphrased), Let's call us (Phone 01, Phone 02, FAX lines), Let's Email
  Us (3 email lines), Customer Support (3 email lines)
- **And** each card shows an H4 title with 25px bottom margin over the grey
  detail lines (same kind of contact data, paraphrased)

### Feature: Map + contact form

A white split section: map placeholder left, sharp-cornered form right.

#### Scenario: Contact section renders as in the reference
- **Given** the contact section (`#contact`) renders
- **When** the section is visible
- **Then** the background is white
- **And** the LEFT half (lg:6, no padding) is a map area ~545px tall —
  the recreation uses a neutral placeholder (picsum seeded
  `wanderport-map` or a styled static block); never the source's Google
  Maps integration or API key
- **And** the RIGHT column (lg:4, 100px vertical padding) holds the form:
  name input ("Enter your name"), email input ("Enter email address",
  email pattern), and a 150px message textarea ("Messege" placeholder kind)
  — all with 1px `rgba(111,117,152,0.3)` borders, transparent backgrounds,
  48px line height (textarea padding 15px/25px), `#777` text, radius 0
- **And** a gradient pill "Send Message" with ArrowRight icon submits
  (prevented — no-op)

### Feature: Footer

A dark `#222222` footer with four widgets and a centered aqua-accented
bottom line whose link points to Component Dock.

#### Scenario: Footer widgets render as in the reference
- **Given** the footer renders
- **When** the footer is visible
- **Then** the background is `#222222` with 100px top padding, four
  widgets in a 4-column row (2-up on small screens): About Us (grey
  blurb), Newsletter ("Stay update with our latest" + email input with
  `#191919` background, `#777` text, 38px height, no border, 20px left
  padding + a SQUARE gradient submit button with ArrowRight icon
  overlapping the input's right edge), Instragram Feed (8 square thumbs in
  a 4-per-row grid, 25% width, 5px margin — picsum seeded
  `wanderport-insta-1..8`), Follow Us ("Let us be social" + 4 social icons
  — lucide Facebook, Twitter, Dribbble-ish/Instagram, Behance-ish stand-ins —
  in `#ccc`, turning white on hover with the gradient clipped into the icon)
- **And** the bottom line is CENTERED with 80px top padding: a copyright
  line whose heart icon and link are aqua `#5cf2ee`
- **And** the copyright links `https://www.componentdock.com/` branded
  "Component Dock" — never ColorLib, "Colorlib", or the source slug

### Feature: Design tokens & typography

The recreation exposes the reference palette and the Poppins family as
Tailwind 4 `@theme` tokens.

#### Scenario: Theme tokens match the reference palette
- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: gradient stops purple `#9a52fd` and teal
  `#57ffed`, accent aqua `#5cf2ee` (selection + footer links), heading
  `#222`, body `#777`, package title `#1a1a1a`, blog black `#000`, footer
  `#222222`, newsletter input `#191919`, input border
  `rgba(111,117,152,0.3)`, hero overlay `rgba(0,0,0,0.8)`, tab
  translucent `#fff3`
- **And** Poppins (300–700) loads via Google Fonts `<link>` in `index.html`
- **And** primary buttons are pills (radius 25px, 42px line height,
  30px/60px padding, white 500, arrow icon sliding left on hover); the
  secondary button is an outlined `#222` pill (radius 20px, 28px line
  height, .8em)
- **And** form inputs are SHARP (`border-radius: 0`, 13px weight 300) —
  deliberate contrast with the pill buttons
- **And** section rhythm is 120px top/bottom (`section-gap`)

## Verification checklist

- [ ] Section order 1:1 with the preview DOM: white navbar → photo hero →
      tabbed booking card → features row → Popular Packages → black blog
      band → about split → contact-info cards → map + contact form → dark
      footer
- [ ] The purple→teal gradient (`linear-gradient(0deg, #9a52fd, #57ffed)`)
      is the ONLY CTA fill; pill radius 25px on primary buttons; arrow
      icon slides left on hover; gradient-clip text on feature-icon hover,
      the about headline, and footer social hover; package hover overlay
      and newsletter submit use the same gradient
- [ ] Typography is Poppins-only: body 300/14px `#777`, headings 600
      `#222`; hero h1 white 72px/700 (responsive 45/36); blog H4s white
      uppercase 3px letter-spacing
- [ ] Navbar is white with an original gradient triangle mark + "wanderport"
      wordmark; hamburger with aria-expanded below `lg`; anchor links
      scroll to the four sections; demo brand "TRAVELASIA" appears nowhere
- [ ] Booking card overlaps the hero (-42px); 4 tabs (flights / hotels /
      flights+hotels / Holidays) with active = solid white, inactive =
      `#fff3`, radius 0; each panel has its H4 + 6-field form (sharp 13px
      inputs) + right-aligned gradient "Send Message"; submit prevented
- [ ] Features: 4-up, 35px grey lucide icons → gradient-clip on hover,
      the four reference titles
- [ ] Packages: 6-across grid, gradient overlay + white 18px title
      "Resort Holiday package" fade up on hover, centered header, 100px
      bottom padding
- [ ] Blog band is solid `#000`; 3 cards with dim/zoom hover, uppercase
      titles, author row + date/likes/comments meta between `#222` rules
- [ ] About: gradient-clipped 25px three-line headline + grey blurbs +
      black pill "Make Package of your own" (hover inverts); full-bleed
      photo right; stacks on mobile
- [ ] Contact-info: 4 centered cards with the four reference titles and
      same-kind paraphrased contact data
- [ ] Contact form: map placeholder left (~545px), sharp 1px-bordered
      inputs right + gradient "Send Message"; no real map API; submit
      prevented
- [ ] Footer is `#222222` with the 4 widgets (About Us / Newsletter /
      Instragram Feed 4×2 grid / Follow Us), `#191919` newsletter input +
      square gradient submit, social icons `#ccc` → white/gradient hover;
      centered bottom line with aqua `#5cf2ee` accents linking
      `https://www.componentdock.com/` ("Component Dock")
- [ ] All images are `picsum.photos/seed/wanderport-*` placeholders; icons
      from `lucide-react`; no copied assets or CSS; no Bootstrap,
      owl-carousel, magnific-popup, Linearicons/FontAwesome, or jQuery
- [ ] Zero `colorlib` / "TRAVELASIA" demo-brand references anywhere in
      `apps/wanderport`
- [ ] App folder `apps/wanderport`, package
      `@free-react-templates/wanderport`, `homepage`
      `https://wanderport.free.componentdock.com`, `public/CNAME`
      `wanderport.free.componentdock.com`, lockfile registers the
      workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh wanderport` passes
