# Template: Flair (Creative Agency Template)

## Purpose

Flair is a single-page creative agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fancy" creative agency website template (see TEMPLATES.md,
Bootstrap section, line 392; duplicates at lines 1006 Business, 2047 Landing
Page and 2320 One Page — mark EVERY copy `[x]` when done), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The reference is a modern, bold creative-agency landing: a fixed transparent
header (lowercase "fancy" wordmark, white uppercase-ish nav, search + bag
icons) over a full-height animated photo hero (900px, dark navy overlay,
video "Watch The Overview" link, 48px white headline, gradient-framed CTAs),
a floating 3-card features strip straddling the hero's bottom edge
(Reliability / Expertise / Quality), an about section (text left + rounded
photo right), a skills section (side photo + 4 gradient progress bars:
Website Design 90%, Brand Strategy 95%, Digital Marketing 85%, Website
Development 90%), a dark-overlay services section (3 cards with
gradient-clipped icons), a testimonials carousel (circular avatar + huge
Playfair quote mark + quote + author), a dark-overlay CTA band ("Ready To
Discuss Your Project?"), a "Latest News" 3-card blog row, and a dark navy
footer (Newsletter + Twitter Feed + Link Categories + Contact Us widgets and
a copyright bar with footer nav).

Brand colors: primary purple `#7450fe` + secondary green `#21d397` — always
paired as the signature `linear-gradient(to right, #7450fe, #21d397)` (button
fill, button frame, skill bars, service icon + quote-mark gradient text,
subscribe button, mobile menu panel, preloader). Accent green `#2bc0a4`
(feature icons, video play icon, "Learn More" links, footer socials). Dark
navy `#04081d` (copyright bar, sticky-header overlay base) and footer dark
`#131627`. Headings `#232d37`; body `#51545f`; muted `#b5aec4`. Fonts:
Poppins (300/400/500/600/700) everywhere + Playfair Display serif for the
decorative quote mark.

## Design reference (replication findings)

- **Original:** ColorLib "Fancy" — creative agency website template
  (source: https://colorlib.com/wp/template/fancy/). Listed in TEMPLATES.md
  line 392 (Bootstrap section); duplicates at lines 1006 (Business), 2047
  (Landing Page) and 2320 (One Page) — mark every copy `[x]` when done.
  Screenshot: `fancy-free-creative-business-website-template.jpg` (1200×933,
  reviewed visually in the browser: full-width photo hero of young
  professionals under a dark blue/purple overlay with centered white
  headline, purple "About Us" + teal/green "Get a quote" buttons, lowercase
  white "fancy" logo, white 3-column features row below with green icons).
- **Live preview URL:** https://preview.colorlib.com/theme/fancy/
  (reachable, HTTP 200). HTML saved to `/tmp/fancy.html` (28.9 KB);
  stylesheet `https://preview.colorlib.com/theme/fancy/style.css` saved to
  `/tmp/fancy.css` (22.6 KB, 1,202 lines); responsive CSS saved to
  `/tmp/fancy-responsive.css` (189 lines). The preview DOM is authoritative
  for section order and copy; the screenshot is authoritative for the look.
- **Fonts:** `@import` in `style.css` line 15: Google Fonts
  `Playfair+Display|Poppins:300,400,500,600,700`. Body/headings/buttons all
  Poppins; `.playfair-font` (Playfair Display serif) only for the giant
  testimonial quote mark. Load via Google Fonts `<link>` in `index.html`.
  Brand is a plain lowercase text wordmark ("fancy" → "flair"), 30px white
  700 — no image asset to recreate.
- **Buttons / links (from style.css):** the signature `.fancy-btn`:
  - White 13px/600 uppercase text, `line-height: 44px; padding: 0 15px;
width: 160px; height: 46px`.
  - Gradient FRAME: `border-left: 2px solid #7450fe; border-right: 2px solid
#21d397`, top/bottom 2px edges drawn with two `linear-gradient(to right,
#7450fe, #21d397)` background layers (`background-size: 100% 2px`).
  - `::after` = full gradient fill (`#7450fe → #21d397`), opacity 0; on
    `:hover` or `.fancy-active` → opacity 1 (button fills with the gradient,
    white text).
  - `.fancy-btn.fancy-dark` variant: dark text `#232d37` for light
    backgrounds (about "Read More", skills "Work with us"); hover → white
    text + gradient fill.
  - Footer subscribe button: absolute right inside the email input, `height:
40px; padding: 5px 15px`, gradient bg, white 13px uppercase 600.
  - Blog "Learn More": 14px, `#2bc0a4`, underlined; hover `#7450fe`.
- **Section backgrounds / layout (from fancy.html + fancy.css):**
  - preloader `#preloader` — full-screen gradient (`#7450fe → #21d397`)
    loader with 3 rotating spans. Optional in React (brief fade-out splash or
    omit entirely; do not block render).
  - search overlay `.fancy-search-form` — white fixed bar, `height: 100px`,
    hidden at `top: -130px`; toggled by the header search icon (add a class
    on the root; translate it in). Close button (ti-close → lucide `X`)
    `#2bc0a4` 30px; input 36px, color `#b5aec4`, placeholder "| Enter Your
    Search...". Esc/close button hides it again.
  - header `.header_area` — `position: fixed; height: 100px; padding: 0
60px;` transparent over the hero, `border-bottom: 1px solid
rgba(255,255,255,0.1)`. Brand left (30px white 700), nav right:
    uppercase-less 14px/500 white links Home (active) · Pages (dropdown:
    Home / Static Page / Contact — drop-down optional, dead anchors ok) ·
    Work · Blog · Shop · Contact, padding 0 25px; then search icon
    (`icon_search` → lucide `Search`) + bag icon (`icon_bag_alt` → lucide
    `ShoppingBag`), 16px white, `margin-left: 65px`. On scroll past the hero
    (`.is-sticky`) background becomes `rgba(4,8,29,0.85)`. Mobile: hamburger
    (`ti-menu`, 2px white border) collapses `#fancyNav` into a gradient
    panel (`#7450fe → #21d397`, padding 15px) — full-width dropdown with
    stacked links.
  - hero `.fancy-hero-area` — `height: 900px`, `bg-img` hero-1.jpg + overlay
    `rgba(4,8,29,0.7)` (`.bg-overlay:after`), plus a 20s Ken-Burns
    `animated-img` background-position loop (optional polish). Centered
    `.fancy-hero-content`: `.video-overview` link "Watch The Overview"
    (white 12px uppercase, play icon in a 30px white circle with `#2bc0a4`
    glyph + 2px white underline bar below the text; YouTube
    f5BBJ4ySgpo → lucide `Play` in a white circle; clicking may open the
    YouTube URL or a client-side modal); `h2` 48px/700 white "Website
    Design, Brand Strategy, Digital Marketing with Stunning Results"
    (margin-bottom 50px); CTAs "About Us" (`.fancy-btn fancy-active` —
    gradient fill shown) + "Get a quote" (`.fancy-btn`).
  - top features `.fancy-top-features-area.bg-gray` — the signature floating
    card: `.fancy-top-features-content` is `position: absolute; bottom: 50%;
transform: translateY(50%); z-index: 99` (overlaps the hero's bottom
    edge), `box-shadow: 2px 3px 10px rgba(0,0,0,0.15); border-radius: 2px`.
    3 `.single-top-feature` white cards (padding 45px) in a `no-gutters`
    row; cards separated by a 1px `#e5e5e5` vertical divider (`top: 30px;
height: calc(100% - 60px)`, none on the last). Each: `h5` with an icon
    (lucide: ThumbsUp, Clock, Gem) in `#2bc0a4` + title (Reliability ·
    Expertise · Quality) + lorem paragraph. The section wrapper keeps
    `bg-gray` behind the card.
  - about `.fancy-about-us-area.bg-gray` — `padding-top: 200px` (clearance
    for the floating card), `padding-bottom: 100px`. Left col-lg-6
    `.about-us-text`: `h2` 38px "We Are A Creative Digital Agency Focused on
    Growing Brands Online", 2 paragraphs (`line-height: 1.8`), "Read More"
    (`.fancy-btn fancy-dark`). Right col-lg-6/col-xl-5 `ml-xl-auto`
    `.about-us-thumb`: about-1.jpg with `border-radius: 5px`.
  - skills `.fancy-skills-area.section-padding-200` — `.skills-side-thumb`
    absolute left (`width: calc(50% - 15px); top: 50%; translateY(-50%)`,
    skills.png). Right column (col-md-6/col-xl-5 ml-auto): `.section-heading`
    `h2` 38px "We Serve All Industries" + subtext "We stay on top of our
    industry by being experts in yours. We measure our success by the
    results we drive for our clients."; 4 `.single_progress_bar` (margin
    bottom 35px; last 60px): `h6` 14px label + `.barfiller` track
    (`background: #e5e5e5; height: 8px`) with a gradient `.fill` animated to
    the `data-percentage` (90 / 95 / 85 / 90); labels Website Design · Brand
    Strategy · Digital Marketing · Website Development; then "Work with us"
    (`.fancy-btn fancy-dark`). Animate the bars to their percentage on
    mount/scroll into view.
  - services `.fancy-services-area.bg-img.bg-overlay.section-padding-100-70`
    (bg hero-2.jpg, same `rgba(4,8,29,0.7)` overlay) — `.section-heading
heading-white text-center`: `h2` 38px "Our Services" + white subtext "We
    Are A Creative Digital Agency. Focused on Growing Brands Online". 3
    `.single-service-area` cards (col-md-4, text-center, margin-bottom 30px):
    icon 40px gradient-clipped text (`background-clip: text;
-webkit-text-fill-color: transparent`; ti-ruler-pencil → lucide PenTool,
    ti-desktop → Monitor, ti-announcement → Megaphone; hover: scale 1.2),
    `h5` white (margin 20px 0), white paragraph.
  - testimonials `.fancy-testimonials-area.section-padding-100` — owl
    carousel with 3 identical slides (static 1-up with prev/next arrows is
    acceptable). Each `.single-testimonial.d-md-flex.align-items-center`:
    `.testimonial-thumbnail` 170×170 circle (radius 50%, white bg, shadow
    `0 1px 5px rgba(0,0,0,0.15)`, margin-right 70px) + `.testimonilas-content`:
    Playfair quote mark "“" 120px/1 gradient-clipped, `h5` 18px `#51545f`
    line-height 30px (margin-top -30px) quote text, `h6` author "Aigars
    Silkalns - `<span>CEO DeerCreative</span>`" (span 14px `#b5aec4`).
    Arrows 30×50px `#c2c1ca` at ±4% (lucide ChevronLeft/ChevronRight).
  - CTA `.fancy-cta-area.bg-img.bg-overlay.section-padding-100` (bg
    hero-3.jpg) — centered `.cta-content`: `h2` 40px white "Ready To Discuss
    Your Project?", white paragraph ("There are many ways to contact us…"),
    "Work with us" (`.fancy-btn`).
  - blog `.fancy-blog-area.section-padding-100-70` — `.section-heading
text-center`: "Latest News" + subtext. 3 `.single-blog-area` cards
    (col-md-4, `border: 1px solid #ebebeb`, hover `box-shadow: 2px 8px 40px
rgba(0,0,0,0.1)`): image + `.blog-content` (padding 30px): `h5` 18px
    `#232d37` title link (We Create Experiences · Simple, Fast And Fun ·
    Device Friendly), paragraph, "Learn More" link (`#2bc0a4`, underline).
  - footer `.fancy-footer-area.fancy-bg-dark` (`background-color: #131627`,
    `.footer-content` section-padding-80-50) — 4 `.single-footer-widget`
    columns (col-sm-6 col-lg-3), widget `h6` white 600 (margin-bottom 30px):
    1. "Our Newsletter": `p` `#b5aec4` 300 ("Subscribe to our mailing list
       to get the updates to your email inbox."), form with `input` (height
       40px, `background-color: #2b2e3d`, radius 2px, color `#b5aec4`,
       12px, placeholder "E-mail") + gradient Subscribe button (absolute
       right); `.footer-social-widegt` flex row (margin-top 30px): 5 social
       icons (facebook, twitter, google-plus, instagram, pinterest → inline
       SVG) `#2bc0a4`, hover `#7450fe`, `flex: 1` each.
    2. "Twitter Feed": `.single-tweet` — `a` `#b5aec4` 14px line-height 1.9
       with twitter icon (`#2bc0a4`) + feed text ("With the popularity of
       podcast shows growing with each year, you might consider starting it
       yourself as well. https://buff.ly/2zttoJb") + `span` 12px "About 20
       hours ago".
    3. "Link Categories": 2-column list (li width 50% float left) of 10
       links with chevrons-right icons (`#b5aec4` 14px; hover: margin-left
       5px + `#2bc0a4`): Agency · Home · Studio · About · Studio · Services
       · Blogs · Work · Shop · Privacy.
    4. "Contact Us": `p` `#b5aec4` 300 lines — "1 (800) 686-6688",
       "info.deercreative@gmail.com", "40 Baria Sreet 133/2 / NewYork City,
       US", "Open hours: 8.00-18.00 Mon-Fri".
    - `.footer-copywrite-area` (`background-color: #04081d; height: 50px`):
      left `p` "Copyright © <year> All rights reserved | This template is
      made with ❤ by Colorlib" (REWORD for Flair, no ColorLib credit, keep
      the heart), right `.footer-nav` links `#b5aec4` 14px padding 0 20px:
      Disclaimer · Privacy · Advertisement · Contact us.

## Requirements

### Requirement: Fixed transparent header with wordmark, nav, search and bag

The system SHALL render a fixed header that is transparent over the hero and
darkens on scroll, with a lowercase wordmark, white nav links, a search icon
and a bag icon.

#### Scenario: Desktop header

- **GIVEN** the Flair app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be fixed at the top, 100px tall, transparent
  with a 1px `rgba(255,255,255,0.1)` bottom border
- **AND** it SHALL show a lowercase "flair" wordmark (30px, white, 700) on
  the left
- **AND** white 14px/500 nav links SHALL follow: Home (active) · Pages ·
  Work · Blog · Shop · Contact
- **AND** a search icon and a bag icon (lucide `Search`, `ShoppingBag`) SHALL
  sit on the right

#### Scenario: Sticky state

- **GIVEN** the user scrolls past the hero
- **THEN** the header SHALL switch to a dark background
  (`rgba(4,8,29,0.85)`) while staying fixed

#### Scenario: Search overlay

- **GIVEN** the header is rendered
- **WHEN** the user activates the search icon
- **THEN** a white search bar SHALL slide down from the top with a 36px
  `#b5aec4` input (placeholder "| Enter Your Search...") and a `#2bc0a4`
  close button
- **AND** pressing Escape or the close button SHALL hide the overlay again

#### Scenario: Mobile menu

- **GIVEN** the nav is rendered
- **WHEN** the viewport is narrower than the desktop breakpoint
- **THEN** a hamburger button (2px white border) SHALL open a stacked panel
  with a `#7450fe → #21d397` gradient background, `aria-expanded` reflecting
  the open state and a close control

### Requirement: Full-height photo hero with video link and CTAs

The system SHALL render a 900px hero with a background photo, dark navy
overlay, animated background, video overview link, headline and two
gradient-framed buttons.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it loads
- **THEN** it SHALL be 900px tall with a full-bleed background photo and a
  `rgba(4,8,29,0.7)` overlay ensuring white text contrast
- **AND** it SHALL show the "Watch The Overview" link (12px uppercase white
  with a 2px underline bar; play icon in a 30px white circle with a
  `#2bc0a4` glyph) above the 48px/700 white headline "Website Design, Brand
  Strategy, Digital Marketing with Stunning Results"
- **AND** two CTAs SHALL sit below: "About Us" (`.fancy-btn fancy-active`,
  gradient-filled) and "Get a quote" (`.fancy-btn`, gradient frame only)
- **AND** activating the video link SHALL open the video (YouTube URL or
  client-side modal)

### Requirement: Floating top-features card

The system SHALL render a white 3-card features strip that overlaps the
hero's bottom edge.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** it loads
- **THEN** a white card strip (shadow `2px 3px 10px rgba(0,0,0,0.15)`,
  radius 2px) SHALL straddle the hero's bottom edge (absolutely positioned,
  `z-index` above the hero)
- **AND** it SHALL contain 3 equal cards (padding 45px) separated by 1px
  `#e5e5e5` vertical dividers (none after the last)
- **AND** each card SHALL show a `#2bc0a4` lucide icon (ThumbsUp · Clock ·
  Gem), an h5 title (Reliability · Expertise · Quality) and a short
  paragraph

### Requirement: About section

The system SHALL render a two-column about section with text and a rounded
photo.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** it loads
- **THEN** a 38px heading "We Are A Creative Digital Agency Focused on
  Growing Brands Online", two paragraphs and a "Read More" dark-text button
  (`.fancy-btn fancy-dark`) SHALL sit on the left
- **AND** a 5px-rounded photo SHALL sit on the right
- **AND** the section SHALL provide ~200px top padding to clear the floating
  features card

### Requirement: Skills section with progress bars

The system SHALL render a skills section with a side photo and 4 animated
gradient progress bars.

#### Scenario: Progress bars

- **GIVEN** the skills section is rendered
- **WHEN** it loads
- **THEN** the heading "We Serve All Industries" with its subtext SHALL
  appear above 4 labeled bars (Website Design · Brand Strategy · Digital
  Marketing · Website Development) with 8px `#e5e5e5` tracks
- **AND** each bar SHALL fill with the `#7450fe → #21d397` gradient to its
  percentage (90 / 95 / 85 / 90) when scrolled into view
- **AND** a "Work with us" dark-text button SHALL sit below the bars

### Requirement: Services on dark overlay

The system SHALL render a photo-background services section with white text
and gradient-clipped icons.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** it loads
- **THEN** the section SHALL have a background photo with the
  `rgba(4,8,29,0.7)` overlay and a white centered heading "Our Services"
  with a white subtext
- **AND** 3 centered cards SHALL show a 40px gradient-clipped lucide icon
  (PenTool · Monitor · Megaphone), a white h5 title (Website Design ·
  Website Development · Digital Marketing) and a white paragraph
- **AND** the icons SHALL scale to 1.2 on hover

### Requirement: Testimonials

The system SHALL render a testimonials carousel with circular avatars and a
Playfair quote mark.

#### Scenario: Testimonial slide

- **GIVEN** the testimonials section is rendered
- **WHEN** it loads
- **THEN** each slide SHALL show a 170px circular avatar (radius 50%, subtle
  shadow) beside content: a 120px Playfair Display quote mark "“"
  gradient-clipped, an 18px quote paragraph, and an author line (name +
  role in `#b5aec4`)
- **AND** prev/next controls SHALL navigate between slides (or a static
  single slide with working arrows)

### Requirement: CTA band

The system SHALL render a dark-overlay CTA band with a heading and button.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** it loads
- **THEN** a 40px white heading "Ready To Discuss Your Project?", a white
  paragraph and a "Work with us" button SHALL be centered over a background
  photo with the `rgba(4,8,29,0.7)` overlay

### Requirement: Latest news blog row

The system SHALL render a "Latest News" heading and 3 bordered blog cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** it loads
- **THEN** the centered heading "Latest News" with subtext SHALL appear above
  3 cards, each with a photo, an 18px `#232d37` title link (We Create
  Experiences · Simple, Fast And Fun · Device Friendly), a paragraph and a
  "Learn More" link (`#2bc0a4`, underlined, hover `#7450fe`)
- **AND** cards SHALL have a 1px `#ebebeb` border and a soft shadow on hover

### Requirement: Dark footer with newsletter, twitter, links, contact

The system SHALL render a dark navy (`#131627`) footer with 4 widget columns
and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it loads
- **THEN** it SHALL show:
  1. "Our Newsletter" — text, email input (40px, `#2b2e3d` bg, radius 2px)
     with an absolutely-positioned gradient "Subscribe" button, and 5 social
     icons (`#2bc0a4`, hover `#7450fe`)
  2. "Twitter Feed" — a tweet link with twitter icon + timestamp
  3. "Link Categories" — a 2-column list of 10 links with chevron icons
  4. "Contact Us" — phone, email, address and open-hours lines
- **AND** the newsletter email input SHALL validate: empty/invalid email
  SHALL show an error; a valid email SHALL show a success confirmation and
  reset the field

#### Scenario: Copyright bar

- **GIVEN** the footer's lower area loads
- **THEN** the bottom bar (`#04081d`, 50px) SHALL read "© 2026 Flair. All
  rights reserved." with a reworded "Made with ❤" credit line (no ColorLib
  credit)
- **AND** footer nav links (Disclaimer · Privacy · Advertisement · Contact
  us) SHALL sit on the right

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Flair app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header (with the search overlay) in
  the banner landmark, the hero + features + about + skills + services +
  testimonials + CTA + blog sections in the main landmark, and the footer in
  the contentinfo landmark
- **AND** the document title SHALL be "Flair — Creative Agency Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (hero text
  scales, floating features card drops below the hero on mobile per
  responsive.css, services/blog collapse to 1 column, mobile menu replaces
  the desktop nav, footer widgets stack 2-up then 1-up)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/flair`
      (`scripts/verify-app.sh flair` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: fixed transparent header (lowercase "flair" wordmark,
      Home/Pages/Work/Blog/Shop/Contact, search + bag icons, dark sticky
      state, gradient mobile panel), 900px hero (photo + `rgba(4,8,29,0.7)`
      overlay + Watch The Overview + 48px headline + About Us/Get a quote),
      floating 3-card features strip (shadow, 1px dividers, `#2bc0a4` icons),
      about (text left, rounded photo right, 200px top padding), skills
      (side photo + 4 gradient bars 90/95/85/90 + Work with us), services
      (dark overlay, gradient-clipped icons, white h5/p), testimonials
      (170px circular avatar, Playfair 120px quote, author + role), CTA band
      (Ready To Discuss Your Project?), blog (3 bordered cards + Learn
      More), footer (`#131627`, Newsletter/Twitter Feed/Link
      Categories/Contact Us, `#04081d` copyright bar) match the Fancy
      preview 1:1.
- [ ] Design tokens in `@theme`: primary purple `#7450fe`; secondary green
      `#21d397`; signature gradient `linear-gradient(to right, #7450fe,
    #21d397)`; accent green `#2bc0a4`; headings `#232d37`; body `#51545f`;
      muted `#b5aec4`; borders `#ebebeb` / `#e5e5e5`; overlay
      `rgba(4,8,29,0.7)`; footer dark `#131627`; copyright `#04081d`;
      footer-input `#2b2e3d`; Poppins (300–700) + Playfair Display via
      Google Fonts `<link>` in `index.html`.
- [ ] Buttons: `.fancy-btn` frame = 2px `#7450fe` left + 2px `#21d397` right + 2px gradient top/bottom edges, white 13px/600 uppercase, 160×46;
      hover/active fills with the gradient; `.fancy-btn fancy-dark` = dark
      `#232d37` text variant for light sections; subscribe button =
      gradient, absolutely positioned in the email input.
- [ ] Placeholder images use `picsum.photos/seed/flair-<n>/<w>/<h>` (hero
      banner, about photo, skills side photo, services bg, CTA bg, avatar,
      blog thumbnails); icons from lucide-react (search, shopping-bag, menu,
      x, play, thumbs-up, clock, gem, pen-tool, monitor, megaphone,
      chevron-left/right, chevrons-right; socials via inline SVG); no
      ColorLib assets copied (wordmark is styled text).
- [ ] PR description states source template (ColorLib "Fancy"), preview URL
      (https://preview.colorlib.com/theme/fancy/), design tokens, and what
      differs (name, placeholders, paraphrased copy, inner pages not
      recreated, preloader optional).
