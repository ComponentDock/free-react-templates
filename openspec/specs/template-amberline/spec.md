# Template: Amberline (Construction / Home Services)

## Purpose

Amberline is a construction-company landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free **"Buildream"**
design, built under a DIFFERENT name (**Amberline** — one lowercase word naming
the theme's amber accent line; single word, kebab-case-safe, no collision with
`apps/`, `openspec/specs/template-*`, `docs/templates/`, any bold name in
`TEMPLATES.md`, or any substring in the repository: `git grep -il amberline
origin/main` = **0 hits**, `grep -c 'template/amberline/' TEMPLATES.md` = **0**)
per the monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `buildream`
- **ColorLib page**: https://colorlib.com/wp/template/buildream/
- **Live preview**: https://preview.colorlib.com/theme/buildream/
  (HTTP 200, **65,152 B** HTML; `css/style.min.css?v=3.0.3` **206,159 B**;
  assets are `vendor/bootstrap/5.3.8`, `vendor/swiper/14.3.0`,
  `vendor/photoswipe/5.4.4`, `js/main.min.js` — no jQuery. The preview slug
  matches the TEMPLATES.md slug, no alias.)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/buildream-free-template.jpg
  (JPEG 1200×946, 162,476 B — top fold inside a browser-chrome-free frame;
  decoded and inspected)
- **Package**: `@free-react-templates/amberline`
- **Deploy target**: `amberline.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/buildream/' TEMPLATES.md` = **2** (lines **553** and
**1339**). Both rows are currently marked `[x]` and credit the **`mortar`** app,
but `openspec/specs/template-mortar/spec.md` names ColorLib **"Grunt"** as its
source — `buildream` is therefore a false `[x]` (bucket 2,
APP-WRONG-DESIGN, in `docs/row-multiplicity.md`; measured exclusive-copy
evidence `row-excl / spec-excl` = `1 / 4`, one of the two thin pairs that
needed a look first — this spec is that look, and the preview is fully live).

The prep stream writes documentation only: the implementer re-opens BOTH rows
`[x]` → `[ ]` on its `feat/template-amberline` branch before building, then
marks them `[x]` with `https://amberline.free.componentdock.com` after merge.
**Do not touch `mortar`** — it stays credited to `grunt`.

## Design reference (replication findings)

- **Original:** ColorLib "Buildream" — a single-page construction-company theme
  (page title `Buildream - Construction Company in San Francisco`).
  Signature look: a **charcoal top bar** (`#363b42`) with an amber phone label,
  a **charcoal navbar** (`#3d424a`) whose **amber skewed brand block** bleeds
  off the logo and whose **active link is an amber skewed parallelogram**, a
  full-viewport **fixed-attachment hero** photo under a 60% `#3d424a` wash with
  a 60px UPPERCASE white headline and one amber word, two **square** buttons
  (amber filled / charcoal filled), a split about block with a **rotated
  −90° charcoal "38 Years of experience" strip** hanging on the photo's right
  edge, a text-only client wordmark strip, an **amber skewed CTA band** laid
  over a photo, a split services block where the **middle card is amber and the
  first is charcoal**, a video CTA, a **counter band** (amber cranes + amber
  numbers), team cards that **flip amber on hover**, a full-bleed 6-tile project
  gallery whose captions are hover-only, four white pricing cards with an
  **amber-bordered "Most Popular" card**, a 3-up testimonial carousel with
  **30×2px bar pagination**, blog cards with a **charcoal date tile**, a
  **FAQ accordion that is amber when open** beside a quote form on a 90%-white
  photo wash, an **amber newsletter band**, and a `#363b42` four-column footer.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/buildream/` —
  Bootstrap **5.3.8** (bundle, collapse navbar) + **Swiper 14.3.0**
  (testimonials) + **PhotoSwipe 5.4.4** (gallery lightbox) + **AOS** reveals
  (`data-aos="fade-up" / fade-right / fade-left`, 100–300 ms delays) +
  **Font Awesome 7** (Free + Brands). No jQuery. NOT Tailwind.
  **0 `<img>` elements** — every image in the page is a CSS
  `background-image` (plus `image-set()` AVIF/JPEG pairs); 90 anchors of which
  **19 are dead `href="#"`** and the rest point at sibling pages
  (`about.html`, `services.html`, `project.html`, `pricing.html`, `blog.html`,
  `blog-single.html`, `contact.html`, `index.html`) or `https://colorlib.com`.
  One `role="banner"` hero, one skip link (`#main-content`), a
  `GeneralContractor` JSON-LD block, `manifest`-less, `noindex` preview meta.
- **Section order in the DOM (measured tops/heights at 1440×1000, document
  height 11,489px):**
  | # | section (class) | top | height |
  |---|---|---|---|
  | 1 | `hero-wrap` | 139 | 1,000 (100vh) |
  | 2 | `ftco-about-section` | 1,139 | 937 |
  | 3 | `ftco-no-pb bg-light` (client wordmarks) | 2,075 | 434 |
  | 4 | `ftco-intro img` (amber CTA band) | 2,510 | 244 |
  | 5 | `ftco-services-section` | 2,754 | 1,219 |
  | 6 | `video-cta-section` | 3,973 | 770 |
  | 7 | `ftco-section-counter img` | 4,743 | 266 |
  | 8 | team (`ftco-section`) | 5,009 | 984 |
  | 9 | `ftco-gallery` | 5,993 | 1,117 |
  | 10 | pricing (`ftco-section`) | 7,110 | 1,052 |
  | 11 | `testimony-section bg-light` | 8,162 | 765 |
  | 12 | blog (`bg-light ftco-no-pt`) | 8,927 | 923 |
  | 13 | `ftco-appointment img` | 9,850 | 733 |
  | 14 | `newsletter-section bg-primary` | 10,584 | 199 |
  | — | footer | 10,782 | 706 |
- **Header geometry:** top bar 48px (`py-1` + 14px text), navbar 91px, so the
  hero starts at **y=139** (the header is NOT overlaid on the hero). Brand block
  147×91px; nav links 14px/500 UPPERCASE with `padding: 32px 25px`.
- **Screenshot note:** the TEMPLATES.md image is the top fold: charcoal top bar
  carrying "Free Call:" (amber label) + a phone number and an amber
  "Email Address:" line, the amber **BUILDREAM** wordmark block with its skewed
  right edge, the charcoal nav with an amber skewed HOME pill, the fixed
  construction-site hero under a dark wash, the centred white UPPERCASE
  headline with **HAPPY** in amber, the letter-spaced "SINCE 1982" eyebrow with
  side dashes, and the two square buttons (amber "CONTACT US", charcoal
  "REQUEST A QUOTE →"). Everything visible in that fold is accounted for by the
  DOM/CSS/tokens below; the full-page pass (scrolled, AOS forced) confirms the
  remaining bands.
- **Copy:** the preview body copy is lorem ipsum ("Far far away, behind the word
  mountains…") with real construction section labels; headline "/hero" copy is
  real. Paraphrase into genuine construction copy while keeping the same _kind_
  of content per block and the same headline skeleton (eyebrow + short uppercase
  claim). Rename the brand to **Amberline** everywhere (the source wordmark is
  the ColorLib name — it must not appear in `apps/`).

## Design tokens (from preview `style.min.css` + live computed styles)

- **Fonts:** one family — **Poppins** (`Poppins, Arial, sans-serif`) at weights
  **400** and **700** `loaded` (Font Awesome 7 supplies the glyphs). Body
  **16px / line-height 1.8 (`28.8px`) / `#6e6e6e`** on a **`#f8f8f8`** page.
  Ship Poppins via a Google Fonts `<link>`
  (`family=Poppins:wght@400;500;600;700;800`).
- **Brand amber (primary):** **`#ffa62b`** — 72 declarations: brand block,
  active nav pill, `bg-primary` (newsletter band), `btn-primary` fill, service
  icon glyphs, `.services.active-2` card, intro band, counter numbers/cranes,
  gallery hover tile, pricing border/badge, play button, quote badge,
  testimonial pagination active bar, staff card hover, focus outlines.
- **Ink / charcoal:** **`#3d424a`** — navbar background, `.btn-darken` fill,
  `.services.active` card, hero/photo overlays, rotated experience strip, blog
  date tile, pricing `sup`-adjacent text, text on amber buttons.
- **Deep amber (secondary text):** **`#a66000`** — section eyebrows
  (`.heading-section .subheading`), testimonial roles, top-bar social glyphs.
  Sweep its contrast pairing: eyebrows are 16px/600 on `#f8f8f8`.
- **Footer / top bar:** **`#363b42`** (footer background and the top bar —
  deliberately one step darker than the navbar's `#3d424a`).
- **Neutrals:** `#6e6e6e` body copy, `#757575` disabled pricing rows,
  `rgba(0,0,0,0.8)` headings, `rgba(0,0,0,0.1)` input borders,
  `rgba(0,0,0,0.05)` pricing row hairlines, `rgba(255,255,255,0.7)` footer
  text, `rgba(255,255,255,0.9)` counter captions and hero subheading,
  `#ddd` inactive pagination bars, `#f8f9fa` (`bg-light`) bands.
- **Overlays:** hero `#3d424a` at **0.6**; counter band `#3d424a` at **0.8**;
  appointment band **white at 0.9**; gallery tile hover `#000` at **0.3**;
  `.ftco-intro::after` amber at **0.9**.
- **Buttons (square language — zero radius everywhere):**
  `border-radius: 0`, `text-transform: uppercase`, `font-size: 12px`,
  `font-weight: 700`, `letter-spacing: 1px`, `padding: 16px 24px`
  (hero primary 182×53, hero darken 220×53, intro CTA 276×68 at
  `padding: 24px 48px`, pricing 202×52 at 60% card width).
  Primary = amber fill + charcoal text; hover = transparent fill + 1px amber
  border + amber text. Darken = charcoal fill + white text; hover = transparent
  + charcoal border + charcoal text. `span` icons inside a primary button stay
  charcoal.
- **Shape language (the page's character):** **skewed parallelograms at
  `transform: skew(20deg)`** — brand block `::after` (100px wide, `right:-20px`),
  active nav link `::before` (inset 0), intro band `::after` (50% width,
  `left:-50px`) — plus **0px** button/input radius, **2px** on `.btn-custom`
  chips and footer social squares, **4px** on staff/blog cards, **5px** on the
  video thumbnail / newsletter input+button, **20px** on the "Most Popular"
  pill, **50%** on avatars and the 80px play button, and `50×50` amber squares
  on gallery tiles.
- **Rhythm:** `.ftco-section` = `padding: 128px 0` (8em; 96px ≤575px),
  `.ftco-no-pt` / `.ftco-no-pb` drop one side, intro band `padding: 48px 0`,
  counter band `padding: 96px 0`, newsletter `padding: 60px 0`, footer
  `padding: 112px 0 0`. Container `1320px` (`container-xl`) or `container-xl-fluid`
  for the full-bleed gallery.
- **Headings:** `h2` **54px / 500 / line-height 1.4 / `rgba(0,0,0,0.8)`**
  (40px ≤991px), section eyebrow **16px / 600 / `#a66000`**, in-section card
  titles **20px / 500** or **26px / 500**, blog titles **24px / 400**, hero
  `h1` **60px / 700 / UPPERCASE / letter-spacing 3px / white** (40px mobile,
  45px ≤575px), intro `h2` **40px / 400 / `#3d424a`**, newsletter `h3`
  **28px / 700 / `#212529`**.
- **Breakpoints in the source:** `xl` gutters `g-xl-5`, `≤1199` pricing/team
  columns stay 4-up until `lg`, `≤991.98` (nav collapses to a burger, h2 40px,
  intro button turns charcoal, appointment stacks, featured pricing card loses
  `scale(1.02)`, about photo 400px tall), `≤767.98` (intro/hero overlays lose
  the skew, pricing cards get 30px top margin, blog cards 30px bottom),
  `≤575.98` (`.ftco-section` 96px, blog 3-up → 1-up, hero h1 45px).
- **Mobile render (390×844):** document **21,292px**, hero 844px, navbar 73px,
  hero `h1` 40px, top bar still rendered (wraps, `display:flex`); section
  heights in order 844 / 1,677 / 737 / 307 / 1,481 / 1,137 / 567 / 2,597 /
  2,394 / 3,000 / 710 / 2,101 / 1,697 / 357.

## Requirements

### Requirement: Top bar (contact strip)

A 48px `#363b42` strip SHALL sit above the navbar holding, at 14px, an amber
bold "Call us:" label followed by a phone number in `#6e6e6e`, and on the right
an amber "Email us:" label with an address, plus three 40×40 social squares
(`rgba(255,255,255,0.05)` fill, `#a66000` glyphs, `aria-label` per network).
Links SHALL be real (`tel:`, `mailto:`); the strip SHALL remain visible on
mobile, wrapping to two rows.

#### Scenario: Contact strip content

- **GIVEN** Amberline is rendered
- **WHEN** the page loads
- **THEN** a 48px strip SHALL render above the navbar on `#363b42`
- **AND** it SHALL show a bold amber "Call us:" label with a `tel:` link
- **AND** it SHALL show an amber "Email us:" label with a `mailto:` link
- **AND** three labelled social links SHALL render at its right end

#### Scenario: Mobile wrap

- **GIVEN** the viewport is 390px wide
- **WHEN** the page loads
- **THEN** the strip SHALL still render with both contact lines readable
- **AND** no horizontal scrolling SHALL appear

### Requirement: Navbar (amber skewed brand, amber skewed active link)

A 91px `#3d424a` navbar SHALL carry the wordmark "Amberline" in a **147×91px
`#ffa62b` block** with `#3d424a` 22px/800 text and a **skewed `::after`
parallelogram** (100px wide, `right: -20px`, `skew(20deg)`) running off its right
edge, then a right-aligned menu of six links (Home, About, Services, Projects,
Pricing, Blog, Contact) at 14px/500 UPPERCASE
`rgba(255,255,255,0.7)` with `padding: 32px 25px`. The active link SHALL be
`#ffa62b` with a `skew(20deg)` amber `::before` filling its inset, and links
SHALL reveal amber on hover. Below 992px the menu SHALL collapse behind a
burger control with `aria-expanded`/`aria-controls`, and the panel SHALL stack
the links on the navbar colour.

#### Scenario: Desktop navbar

- **GIVEN** the viewport is 1440px wide
- **WHEN** the page loads
- **THEN** the navbar SHALL be 91px tall on `#3d424a`
- **AND** the wordmark SHALL sit in a 147×91px amber block with a skewed right edge
- **AND** the active link SHALL be painted amber with a skewed background
- **AND** seven uppercase links SHALL render, each 32px/25px padded

#### Scenario: Mobile menu

- **GIVEN** the viewport is 390px wide
- **WHEN** the user activates the burger control
- **THEN** the link panel SHALL expand and `aria-expanded` SHALL read `true`
- **AND** activating a link SHALL close the panel

### Requirement: Hero (fixed photo, 60px uppercase headline, two square buttons)

The hero SHALL be **100vh** tall with a `background-attachment: fixed` cover
photo and a `#3d424a` overlay at **0.6** opacity, content centred in a
9-of-12 column: a letter-spaced (`2px`) UPPERCASE 16px eyebrow "Since 1982" in
`rgba(255,255,255,0.9)` flanked by short dashes, an `h1` at **60px/700,
UPPERCASE, `letter-spacing: 3px`, white** whose middle phrase renders in
`#ffa62b`, and two square buttons — amber "Contact us" and charcoal
"Request a quote" — each 53px tall with a trailing arrow glyph. The hero SHALL
NOT be a slider (the source has one static slide).

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill the viewport height with a fixed cover photo
- **AND** a `#3d424a` overlay at 0.6 opacity SHALL sit above the photo
- **AND** the eyebrow SHALL read "Since 1982" in UPPERCASE 16px with 2px tracking
- **AND** the `h1` SHALL be 60px/700 UPPERCASE with one phrase in `#ffa62b`
- **AND** an amber and a charcoal square button SHALL render beneath it

#### Scenario: Button hover

- **GIVEN** a square primary button is rendered
- **WHEN** the pointer hovers it
- **THEN** its fill SHALL become transparent with a 1px `#ffa62b` border
- **AND** its label SHALL turn `#ffa62b`

#### Scenario: Hero image without network

- **GIVEN** the hero photo fails to load
- **WHEN** the page renders
- **THEN** the hero SHALL keep its 100vh height and readable white text
- **AND** no layout shift SHALL occur

### Requirement: About (split photo with rotated experience strip, 2×2 mini cards)

A 128px-padded two-column block SHALL render a left photo (stretched to the
column, `about` image) carrying a **charcoal `#3d424a` strip rotated `-90deg`**
on its right edge (`bottom: 107px; right: -107px; padding: 30px`) with a 54px
amber crane icon, an amber "38" and a white "Years of experience" caption, and
a right column with the eyebrow "Welcome to us", an `h2` "Quality and
Affordable Constructor" (54px/500), a paragraph, an `h3` "We Can Help You", and
a 2×2 grid of four white mini-cards (`padding: 25px`, 60px amber line icon,
20px/500 title, short grey paragraph) titled Construction, Architecture,
Consulting, Mechanical. The block SHALL stack image-over-text below 768px with
the strip kept inside the photo bounds.

#### Scenario: Split layout and badge

- **GIVEN** the about block is rendered at desktop width
- **WHEN** the user scrolls to it
- **THEN** the photo SHALL occupy the left column and the copy the right
- **AND** a charcoal strip SHALL run vertically (`rotate(-90deg)`) along the photo's right edge
- **AND** it SHALL show an amber "38" above a white "Years of experience" caption

#### Scenario: Mini service cards

- **GIVEN** the about block is rendered
- **WHEN** the user reads the right column
- **THEN** four white cards SHALL render in a 2×2 grid
- **AND** their titles SHALL be Construction, Architecture, Consulting, Mechanical
- **AND** each SHALL show a 60px amber line icon and a short paragraph

### Requirement: Client wordmarks strip

A `bg-light` band with **no bottom padding** SHALL show a centred eyebrow and the
`h2` "Companies We Work With", followed by a single row of **six text
wordmarks** (no images, no logos) in muted grey, wrapping to two columns on
mobile.

#### Scenario: Wordmark row

- **GIVEN** the wordmarks strip is rendered
- **WHEN** the user scrolls to it
- **THEN** six text wordmarks SHALL render in one row on desktop
- **AND** the band SHALL carry the `bg-light` fill and zero bottom padding

### Requirement: Amber skewed CTA band

A 244px photo band with `background-attachment: fixed` SHALL be overlaid on its
left half by an **amber `::after` parallelogram** (`width: 50%`,
`left: -50px`, `skew(20deg)`, opacity **0.9**), carrying a small
`rgba(255,255,255,0.8)` line "Contact us for construction & renovation work",
an `h2` at **40px/400 `#3d424a`** "We Build Great Structures", and an amber
square button "Make an appointment" (276×68, `padding: 24px 48px`). Below 992px
the overlay SHALL cover the full width and lose the skew, and the button SHALL
turn charcoal with white text.

#### Scenario: Skewed band

- **GIVEN** the CTA band is rendered at desktop width
- **WHEN** the user scrolls to it
- **THEN** an amber parallelogram SHALL cover the left half with a 20deg skew
- **AND** the heading SHALL render at 40px/400 in `#3d424a` over the amber
- **AND** the button SHALL be square amber with charcoal text

#### Scenario: Tablet fallback

- **GIVEN** the viewport is 900px wide
- **WHEN** the CTA band renders
- **THEN** the amber overlay SHALL span the full width with no skew
- **AND** the button SHALL be charcoal with white text

### Requirement: Services split (photo + three stacked cards)

A two-column block SHALL open with a centred eyebrow "What We Do" over the `h2`
"Services", then a left photo column and a right column of **three stacked
cards** (`padding: 30px`, `margin-bottom: 20px`): card 1 **charcoal
`#3d424a`** with white icon/title/text, card 2 **amber `#ffa62b`**, card 3
**white** with charcoal text. Each card carries a 60px icon, a 26px/500 title,
a paragraph and a small `.btn-custom` chip (13px/700 UPPERCASE,
`padding: 4px 10px`, `border-radius: 2px`) reading "Learn more". Titles:
Construction services, Infrastructure services, Architecture services. The
cards SHALL stack photo-first below 768px.

#### Scenario: Three service rows

- **GIVEN** the services block is rendered
- **WHEN** the user scrolls to it
- **THEN** exactly three cards SHALL render beside the photo
- **AND** the first SHALL be `#3d424a`, the second `#ffa62b`, the third white
- **AND** each SHALL show an icon, a 26px title, a paragraph and a "Learn more" chip

#### Scenario: Chip legibility

- **GIVEN** the third (white) card is rendered
- **WHEN** the user reads its chip
- **THEN** the chip label SHALL be legible against white (amber or charcoal text is an accepted deviation from the source's translucent-white chip)
- **AND** the chip SHALL remain keyboard focusable with a visible ring

### Requirement: Video CTA (thumbnail + play button, checklist, button)

A two-column block SHALL render a **636×400px** photo thumbnail
(`border-radius: 5px`) with an **80px `#ffa62b` circular play control** (white
glyph, `aria-label`) centred on it, and beside it an eyebrow "Watch our story",
the `h2` "Building Dreams Into Reality Since 1982", a paragraph, a **four-item
checklist** (amber check glyphs, 16px, 8px row padding) and an amber square
"Learn more about us" button. Activating the play control SHALL open an
accessible dialog with a poster frame and a close control; **no third-party
embed SHALL load before activation**.

#### Scenario: Play control behaviour

- **GIVEN** the video CTA is rendered
- **WHEN** the user activates the play control
- **THEN** a dialog SHALL open with a poster frame and a close control
- **AND** pressing Escape SHALL close it
- **AND** no third-party player SHALL be requested before activation

#### Scenario: Checklist

- **GIVEN** the video CTA is rendered
- **WHEN** the user reads the right column
- **THEN** four checklist items SHALL render with amber check glyphs
- **AND** each row SHALL be 16px with 8px vertical padding

### Requirement: Counter band

A 96px-padded photo band with a **`#3d424a` overlay at 0.8** SHALL show four
counters in one row, each a **60px amber crane glyph** beside a **40px/700
amber number** (thousands separator on 3,000 and 1,000) over an UPPERCASE
16px `rgba(255,255,255,0.9)` caption: 3,000 Completed projects, 320 Happy
clients, 1,000 Cup of coffee, 587 Engineers & staff. Numbers SHALL count up on
reveal, and SHALL render their final value immediately when
`IntersectionObserver` is unavailable (jsdom/tests).

#### Scenario: Counter values

- **GIVEN** the counter band is rendered
- **WHEN** it scrolls into view
- **THEN** four counters SHALL show 3,000 / 320 / 1,000 / 587 in amber 40px/700
- **AND** each SHALL pair with its UPPERCASE caption in `rgba(255,255,255,0.9)`

#### Scenario: No observer available

- **GIVEN** `IntersectionObserver` is undefined
- **WHEN** the band renders
- **THEN** the final numbers SHALL be shown during render (no state write from an effect)

### Requirement: Team cards (photo + role, amber hover)

A centred eyebrow "Team & Staff" over the `h2` "Qualified Engineers" SHALL
precede **four** cards (`col-lg-3`): a **306×420px** portrait, a white card
(`border-radius: 4px`, `box-shadow: 0 24px 48px -13px rgba(0,0,0,0.05)`),
centred 20px padding with the name at 20px/500 `#3d424a` and the role at
14px/500 UPPERCASE grey. On hover/focus-within the card SHALL turn `#ffa62b`,
the name white, and **three 40px `#3d424a` circular social links** SHALL fade
in at the photo's bottom-left (7px gap, white glyphs, amber on their own hover).

#### Scenario: Team grid

- **GIVEN** the team block is rendered
- **WHEN** the user scrolls to it
- **THEN** four cards SHALL render in one row on desktop
- **AND** each SHALL show a 306×420 portrait, a name and an UPPERCASE role

#### Scenario: Hover reveal

- **GIVEN** a team card is rendered
- **WHEN** the pointer enters the card
- **THEN** the card SHALL turn `#ffa62b` and the name white
- **AND** three circular social links SHALL become visible
- **AND** focusing a social link by keyboard SHALL reveal them too (`:focus-within`)

### Requirement: Projects gallery (full-bleed 6 tiles, hover captions, lightbox)

A centred eyebrow "Portfolio" over the `h2` "Projects" SHALL precede a
full-bleed (`container-xl-fluid`, `g-0`) grid of **six 480×340px tiles**
(`col-md-4`, two rows) each a cover photo with: a **50×50 `#ffa62b` square zoom
control** at its top-right (opacity 0 → 1 on hover/focus-within, `aria-label`
naming the project), a caption block hidden at `opacity: 0; margin-bottom:
-50px` that slides to `0` on hover (UPPERCASE 600 category in
`rgba(255,255,255,0.9)` + white project title), and a `#000` overlay at
**0.3** on hover. Activating a tile SHALL open a keyboard-accessible lightbox
with the full image; captions SHALL also be reachable without hover
(always-visible on touch/small screens).

#### Scenario: Tile hover

- **GIVEN** a gallery tile is rendered
- **WHEN** the pointer enters it
- **THEN** a `#000` overlay at 0.3 SHALL appear
- **AND** the amber 50×50 zoom square SHALL fade in at the top-right
- **AND** the caption SHALL slide up into view

#### Scenario: Lightbox

- **GIVEN** a gallery tile is rendered
- **WHEN** the user activates its zoom control
- **THEN** a dialog SHALL show the full-size image
- **AND** Escape SHALL close it and focus SHALL return to the control

#### Scenario: Touch layout

- **GIVEN** the viewport is below the md breakpoint
- **WHEN** the gallery renders
- **THEN** tiles SHALL stack one per row
- **AND** each caption SHALL be visible without hover

### Requirement: Pricing (four cards, featured amber card)

A centred eyebrow "Our Pricing" over the `h2` "Pricing & Packages" (with
"Packages" accented) SHALL precede **four** cards (`col-md-6 col-lg-3`,
`padding: 40px 0`, white, `border-radius: 0`,
`box-shadow: 0 24px 48px -13px rgba(0,0,0,0.05)`): 14px/700 UPPERCASE
`#3d424a` plan name with `letter-spacing: 1px`, a price where `$` is 24px
`#6e6e6e` and the amount is **50px/600 `#a66000`**, a description line, **six
feature rows** (14px, `padding: 10px 20px`, 1px `rgba(0,0,0,0.05)` hairlines;
included rows get an amber check, excluded rows are `#757575` with
`line-through` and a grey cross), and a **60%-width amber square button**
(202×52). The third card (Premium) SHALL be featured: `2px solid #ffa62b`,
`transform: scale(1.02)` (dropped ≤991px), and a **`#ffa62b` "Most Popular"
pill** (12px/700 UPPERCASE, `padding: 4px 16px`, `border-radius: 20px`,
`top: -12px`, centred). Plans: Basic 49K, Standard 79K, Premium 109K,
Enterprise 149K+.

#### Scenario: Four plans

- **GIVEN** the pricing block is rendered
- **WHEN** the user scrolls to it
- **THEN** four white cards SHALL render in one row on desktop (two-up on tablet)
- **AND** the prices SHALL read 49K, 79K, 109K, 149K+ with a `#a66000` amount
- **AND** each card SHALL show six feature rows and a 60%-width amber button

#### Scenario: Featured plan

- **GIVEN** the pricing block is rendered
- **WHEN** the user reads the third card
- **THEN** it SHALL carry a 2px `#ffa62b` border and be scaled to 1.02
- **AND** an amber "Most Popular" pill SHALL sit centred above its top edge

#### Scenario: Excluded features

- **GIVEN** a plan omits a feature
- **WHEN** the user reads its feature list
- **THEN** that row SHALL be `#757575` with `line-through` and a grey cross

### Requirement: Testimonials (3-up carousel, bar pagination)

A `bg-light` section SHALL show the eyebrow "Testimonial" over the `h2` "Happy
Clients" and a carousel of **five** cards, **three visible** at desktop width
(410px each), inside a white card (`padding: 35px 30px 30px`): an **80px round
avatar** with a **30px `#ffa62b` circular quote badge** on its bottom-right
corner, the name at **20px/600 UPPERCASE `#3d424a`**, the role at **13px
UPPERCASE `#a66000`**, then the quote. Pagination SHALL be **30×2px bars**
(`#ddd`; active `#ffa62b`, `border-radius: 0`) centred 3em below the track, each
bar a labelled control; advancing SHALL be possible by bar, drag, or keyboard.

#### Scenario: Testimonial card

- **GIVEN** the testimonial section is rendered
- **WHEN** the user reads a card
- **THEN** it SHALL show an 80px round avatar with a 30px amber quote badge
- **AND** the name SHALL be 20px/600 UPPERCASE and the role 13px UPPERCASE `#a66000`

#### Scenario: Carousel pagination

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the user activates the third pagination bar
- **THEN** the track SHALL advance and that bar SHALL be painted `#ffa62b`
- **AND** each bar SHALL expose an accessible name and `aria-current`

### Requirement: Blog (three cards with charcoal date tile)

A `bg-light` section with **no top padding** SHALL show the eyebrow "Our Blog"
over the `h2` "Recent Blog" and **three** cards (416px wide, white,
`border-radius: 4px`, `box-shadow: 0 10px 25px -13px rgba(0,0,0,0.1)`): a cover
photo carrying a **69×93px `#3d424a` date tile** at its bottom-left (day at
**30px** white, month UPPERCASE), a 30px-padded body with UPPERCASE 13px meta
(amber icons: author, comment count), a **24px/400** title, and a paragraph
excerpt with a read-more affordance.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the user scrolls to it
- **THEN** three cards SHALL render in one row on desktop
- **AND** each SHALL show a charcoal date tile with a 30px day and an UPPERCASE month
- **AND** each SHALL show UPPERCASE 13px meta with amber icons, a 24px title and an excerpt

### Requirement: Appointment (quote form + FAQ accordion on a 90% white wash)

A photo band with `background-attachment: fixed` and a **white overlay at 0.9**
SHALL host two columns. The **left** column SHALL be a white quote card
(`padding: 50px 50px 50px 0`) headed by an UPPERCASE small amber eyebrow and an
`h2` "Request a quote" (24px/600), with labelled fields: full name, email, a
subject `select` (six options), a 7-row message textarea, and an amber square
"Send message" submit; inputs SHALL be white, 50px tall, `border-radius: 2px`,
with a 1px `rgba(0,0,0,0.1)` border that turns `#ffa62b` on focus. The **right**
column (visually last on desktop) SHALL hold the eyebrow "Frequently asked
questions", the `h2` "You Want To Ask Something From Us?", a paragraph, and a
**three-item accordion**: closed headers are white, 18px/600 `#212529`,
`padding: 16px 20px`, `border-radius: 0`; the open header is `#ffa62b` with
`#3d424a` text; bodies are 16px `#212529`. Submitting the form SHALL validate
required fields (name, email format, message), show inline per-field errors,
and show an inline success message without a page reload.

#### Scenario: Quote form validation

- **GIVEN** the quote form is rendered
- **WHEN** the user submits it empty or with a malformed email
- **THEN** per-field inline errors SHALL render and no success message SHALL appear
- **AND** when every field is valid an inline confirmation SHALL render

#### Scenario: Accordion states

- **GIVEN** the FAQ accordion is rendered
- **WHEN** the user opens the second question
- **THEN** its header SHALL be `#ffa62b` with `#3d424a` text and its body visible
- **AND** the previously open item SHALL close
- **AND** each header SHALL expose `aria-expanded` and `aria-controls`

#### Scenario: Column order

- **GIVEN** the viewport is 1440px wide
- **WHEN** the appointment band renders
- **THEN** the form SHALL sit on the left and the FAQ on the right
- **AND** below 992px the FAQ SHALL come after the form in source and visual order

### Requirement: Newsletter band

A `#ffa62b` band (`padding: 60px 0`) SHALL place a **28px/700 `#212529`**
heading "Subscribe to Our Newsletter" and a supporting line on the left, and a
**526px form** on the right: a white input (53px tall, `border-radius: 5px`,
`padding: 16px 20px`, no border, placeholder "Enter your email address") and a
**131×53px `#212529` button** (white UPPERCASE 12px/700, `letter-spacing: 1px`,
`border-radius: 5px`) labelled "Subscribe". Submitting an invalid address SHALL
show an inline error; a valid address SHALL show an inline confirmation. The
band SHALL stack input-over-button below 576px.

#### Scenario: Subscribe validation

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits an empty or malformed address
- **THEN** an inline error SHALL render and no confirmation SHALL appear
- **AND** a valid address SHALL produce an inline confirmation

#### Scenario: Mobile stack

- **GIVEN** the viewport is 390px wide
- **WHEN** the newsletter band renders
- **THEN** the input and button SHALL stack full-width
- **AND** no text SHALL overflow the band

### Requirement: Footer (four columns, Component Dock attribution)

A `#363b42` footer (`padding: 112px 0 0`, text `rgba(255,255,255,0.7)`) SHALL
render four columns: (1) the wordmark, a short blurb and three **40×40 social
squares** (`rgba(255,255,255,0.05)`, `border-radius: 2px`, amber glyphs);
(2) "Recent posts" — three 80×80 thumbnails beside 16px/500 white titles and
amber-icon meta; (3) "Quick links" — six links with amber chevrons; (4) "Have a
question?" — address, phone and email rows with amber pin/phone/send glyphs.
A centred bottom line at 13px SHALL carry the copyright and a link to
**https://www.componentdock.com/** branded "Component Dock" — the source's
ColorLib credit is REPLACED and no `colorlib` string may appear in `apps/`.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** four columns SHALL render on `#363b42`
- **AND** the social squares SHALL be 40×40 with 2px radius and amber glyphs
- **AND** the quick links SHALL render six entries with amber chevrons

#### Scenario: Component Dock attribution

- **GIVEN** the footer bottom line is rendered
- **WHEN** the user reads it
- **THEN** it SHALL link to https://www.componentdock.com/ labelled "Component Dock"
- **AND** no ColorLib reference SHALL appear anywhere in the app

### Requirement: Motion, accessibility and performance

Section reveals SHALL use a scroll-triggered fade/rise (source: AOS
`fade-up`/`fade-right`/`fade-left`, 100–300ms delays), implemented without
`set-state-in-effect` (derive the revealed value during render when the observer
API is missing). Every interactive control SHALL be keyboard reachable with a
visible `2px #ffa62b` focus ring; icon-only controls SHALL carry `aria-label`;
the page SHALL expose a skip link to `#main-content`; decorative glyphs SHALL be
`aria-hidden`. Headings SHALL not skip levels, and the document SHALL declare
`lang="en"` and one `h1`.

#### Scenario: Keyboard focus

- **GIVEN** the page is rendered
- **WHEN** the user tabs through it
- **THEN** every link, button, form control and carousel bar SHALL show a visible 2px `#ffa62b` focus ring
- **AND** icon-only controls SHALL announce a name

#### Scenario: Reduced motion

- **GIVEN** the user prefers reduced motion
- **WHEN** the page renders
- **THEN** reveal and count-up animations SHALL be skipped and final states shown

#### Scenario: Skip link

- **GIVEN** the page is loaded
- **WHEN** the user presses Tab once
- **THEN** a "Skip to main content" link SHALL focus and target `#main-content`

## Verification checklist

- [ ] `openspec/specs/template-amberline/spec.md` is this file; `npm run spec:validate` passes.
- [ ] `apps/amberline` exists with `package.json` name `@free-react-templates/amberline`, `react`/`react-dom` set to `latest` (no exact pin), `public/CNAME` = `amberline.free.componentdock.com`, `homepage` = `https://amberline.free.componentdock.com`.
- [ ] `vite.config.ts` registers `injectUiSource()`; `src/index.css` puts the palette in `@theme` (`--color-brand: #ffa62b`, `--color-ink: #3d424a`, `--color-deep-amber: #a66000`, `--color-footer: #363b42`).
- [ ] Section order matches the 14-band table (hero → about → wordmarks → amber CTA → services → video → counters → team → gallery → pricing → testimonials → blog → appointment → newsletter → footer).
- [ ] Square (0 radius) buttons everywhere; skewed 20deg brand/active-link/CTA parallelograms present; `.services` cards charcoal / amber / white in that order; featured pricing card bordered + scaled with the "Most Popular" pill.
- [ ] Hero, intro, counter and appointment bands use fixed-attachment cover photos with the measured overlays (0.6 charcoal, amber 0.9 skew, 0.8 charcoal, 0.9 white).
- [ ] Counters show 3,000 / 320 / 1,000 / 587 and fall back to final values when `IntersectionObserver` is missing.
- [ ] Gallery tiles keep hover captions on pointer devices and always-visible captions on touch/small screens; lightbox is keyboard operable.
- [ ] Forms (quote + newsletter) validate inline, render per-field errors and success states, and are covered by tests.
- [ ] Footer links https://www.componentdock.com/ as "Component Dock"; `git grep -i colorlib apps/amberline` = 0 hits.
- [ ] Placeholder imagery uses `https://picsum.photos/seed/amberline-<n>/<w>/<h>` (deterministic), Poppins loaded via `<link>`, icons from `lucide-react`.
- [ ] `scripts/verify-app.sh amberline` passes: typecheck, lint, 100% coverage tests, build.
- [ ] Desktop (1440) and mobile (390) renders compared against the reference fold-by-fold; deviations listed in the PR.
- [ ] `npm install` run at the repo root so `package-lock.json` registers the workspace; `grep -c "@free-react-templates/amberline" package-lock.json` ≥ 1.
- [ ] TEMPLATES.md rows **553** and **1339** were re-opened `[x]` → `[ ]` on the branch, then marked `[x]` with `https://amberline.free.componentdock.com` after merge (prep stream does none of this).
