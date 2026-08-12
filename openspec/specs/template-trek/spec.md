# Template: Trek (Travel)

## Purpose

Trek is a single-page travel / nature-journey template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Trips" travel website HTML template design (see
TEMPLATES.md, line 520 under **Bootstrap (216)** — duplicate rows at line
1209 under **Business (365)** and line 3010 under **Travel (44)**, same
template, ONE app only; mark ALL THREE rows `[x]` after merge), built
under a different name ("Trek" — a long arduous journey, especially on
foot, matching the source's nature-travel positioning: "Let's Enjoy The
Wonders of Nature") with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript (strict). No ColorLib references in app code —
provenance lives in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Trips" — free travel website template
  (source: https://colorlib.com/wp/template/trips/). Single page: a
  WHITE static navbar (text logo with a mountain-peak mark + nav Home /
  About / Trips / Blog / Contact), a full-height hero photo (hikers on a
  cliff over a lake; headline "Let's Enjoy The Wonders of Nature" +
  lorem + circular play button "Watch the video"), an "Our Story"
  section (ghost "STORY" backdrop text + sand "Discover Story" label +
  "Our Story" heading + 2 paragraphs + hiking photo), a "Your Journey
  Starts Here" pricing section (6 photo cards with sand price pills
  $200.00–$600.00 + trip titles), "Meet Our Team" (3 centered staff
  cards with photo, name, STAFF caption, bio, social icons), "Happy
  Customers" testimonials (sand quote cards with photo + quote +
  author, owl carousel), "Our Blog" (3 post cards: photo + white
  content box, title, "July 17, 2019 by Admin" meta, excerpt), a
  full-width CTA band ("Join and Trip With Us" on a photo under a SAND
  wash + sand "Get In Touch" button), and a LIGHT `#f6f5f5` footer
  (Instagram 6-thumb grid / Quick Links 5 / Newsletter form + sand Send
  button + copyright bar crediting **Component Dock** (replaces the
  source's Colorlib credit)).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/trips/`. DOM fetched
  (`/tmp/prep-trips/preview.html`, 24,969 bytes, `<title>Trips —
Website Template by Colorlib</title>`) + `css/style.css`
  (`/tmp/prep-trips/style.css`, 24,783 bytes — the real token source) +
  `css/bootstrap.min.css` (RE-COMPILED Bootstrap: `$primary` is sand
  `#efba6c` — `btn-primary{background-color:#efba6c}`,
  `bg-primary{background-color:#efba6c!important}` — verified by
  grepping the file) + computed-style verification of the live page in
  the browser (footer `rgb(246,245,245)` NOT sand — `.bg-light {
background-color:#f6f5f5 !important }` in style.css overrides
  `.site-footer { background:#efba6c }`; CTA button sand; price pill
  sand radius 30px; testimonial cards sand; navbar white STATIC) +
  TEMPLATES.md screenshot (`trips-free-template.jpg`, AVIF, viewed in
  browser at 1200×946 — shows white header with orange mountain-peak
  logo + "TRIPS" wordmark, hiker hero, ghost "STORY" backdrop).
- **Visual design (screenshot + live DOM + computed styles):** clean
  light travel design. White navbar + sections; ONE accent color: warm
  sand **`#efba6c`** used as the Bootstrap `$primary` (buttons, price
  pills, testimonial cards, nav hover/active, subtitle labels, CTA wash,
  form focus borders); body text is dark blue-grey **`#364d59`** weight
  300; section headings have a huge faint grey **ghost backdrop word**
  (5rem, weight 900, uppercase, `#efefef`) behind a small sand uppercase
  label + black heading. Footer is light `#f6f5f5` (NOT sand despite
  the dead `.site-footer{background:#efba6c}` rule). Photos are
  nature/travel subjects. Copy is placeholder/Lorem ("Lorem ipsum
  dolor sit amet" everywhere, "John Doe" ×4 testimonials, "July 17,
  2019 by Admin" ×3, staff bios identical ×3) — paraphrase freely, vary
  repeats, keep the same kinds.
- **Slider/plugins:** testimonials use owl-carousel (4 slides, looped
  to 12 nodes by owl) — implement with React state (arrows + dots) or a
  simple grid; the hero play button opens a Vimeo fancybox — render a
  decorative play button (no popup needed); AOS scroll animations and
  the mobile off-canvas menu (`site-mobile-menu`, 300px right drawer)
  — hamburger toggle in React.

## Design tokens (from `css/style.css` + recompiled `css/bootstrap.min.css` of the live preview)

- **Primary sand:** `#efba6c` — the theme's Bootstrap `$primary`:
  `.btn-primary` background (Get In Touch), `.bg-primary` (price pills
  `$200.00` etc.), `.subtitle-39191` labels (14px uppercase bold), nav
  `.active`/hover links, `.listing-item .category` pill bg (12px,
  uppercase, letter-spacing .2em, radius 30px, padding 5px 30px, white
  text), `.testimonial-39191` card bg (padding 50px, 20px text, mb 30,
  decorative offset square `:after` `rgba(239,186,108,0.1)` 20px
  bottom/right), `.bg-image.overlay:after` CTA wash `rgba(239,186,108,
0.4)`, `.form-control:focus` border, post-title hovers,
  `.site-mobile-menu` active links.
- **Body text:** `#364d59` (`body { color:#364d59 !important;
font-weight:300; font-size:1rem; line-height:1.7 }`) — also
  testimonial text on sand, footer text.
- **Ink:** `#000` — headings h1–h6 (Work Sans), nav links (`#000
!important`, hover sand), post title links.
- **Ghost backdrop:** `#efefef` — `.heading-39101 .backdrop`: 5rem,
  weight 900, uppercase, line-height 1, top -20%, z-index -1 (behind
  the label + heading).
- **Light greys:** `#f6f5f5` — `.bg-light` override = footer
  background; `#f8f9fa`/`#f6f5f5` section alternates; `#ccc` — post
  meta; `#888` — person caption (14px uppercase).
- **Whites:** `#fff` — navbar, hero text, post content boxes (`.post-
entry-1-contents` bg white, padding 20px), price pill text, CTA text.
- **Fonts:** Google **Work Sans** — body (300, 1rem) and headings
  (h1 3rem / 2rem mobile, weight 900 — hero; h2s 18–22px; h3 heading
  default). Load via Google Fonts `<link>` in `index.html`.
- **Buttons:** `.btn` — font-size .8rem, UPPERCASE, letter-spacing
  .2rem, padding 10px 20px, no radius override (Bootstrap 4 default
  4px). `.btn-primary` — sand bg, border sand; the CTA adds `py-3 px-4`
  and `text-white`.
- **Navbar (`.site-navbar`, STATIC, not fixed):** white bg, padding
  1rem (3rem vertical mobile); logo = 73px image (mountain-peak mark +
  wordmark — render an inline SVG mark + uppercase wordmark);
  `.site-menu > li > a`: margin 15px, padding 20px 0, `#000`, hover +
  `.active` sand. Mobile: `.site-mobile-menu` off-canvas 300px right
  drawer (translateX 0 when `.offcanvas-menu`), close icon; hamburger
  via `.site-menu-toggle` (icon-menu, d-lg-none).
- **Hero (`.site-section-cover.overlay`, bg image + `:before` wash
  `rgba(0,0,0,0.3)`):** height `calc(100vh - 196px)` min-height 677px
  (60vh / 600px mobile), row align-items-center; col-md-5: h1 (3rem /
  2rem mobile, white, weight 900, line-height 1, mb-3), p (15px white),
  play row: `.play-btn-39282` (60px circle, `1px solid #fff`, bg
  `rgba(255,255,255,0.1)`, white play icon centered; hover → white bg +
  black icon) + `.small` "Watch the video".
- **Sections (`.site-section`):** padding 7rem 0 (3rem mobile); inner
  `.heading-39101` (position relative, mb-5): backdrop span + subtitle
  span + h3. Our Story heading is left-aligned (col-md-7 container),
  all later headings are centered (`.backdrop.text-center` +
  col-md-10).
- **Journey cards (`.listing-item`, col-lg-4, 6 cards):** photo card,
  `overflow:hidden`; `:after` bottom-up gradient overlay (transparent →
  `rgba(255,255,255,0.31)` 47% → `rgba(0,0,0,0.65)`); img `object-fit:
cover`, scale(1.05) → scale(1) on hover (300ms); `.listing-item-
content` absolute bottom 20px, full width, text-center: price pill
  (`.category.bg-primary` — sand, radius 30px, 12px uppercase
  letter-spacing .2em, padding 5px 30px, white) + h2 (18px, white)
  title link. Trips: $200.00 Dignissimos debitis / $390.00 Consectetur
  adipisicing / $180.00 Temporibus aperiam / $600.00 Expedita fugiat /
  $330.00 Consectetur adipisicing / $450.00 Consectetur Amet (vary
  titles).
- **Team (`.person-29191`, 3 cards, col-lg-4, text-center):** photo
  (`img-fluid mb-4`) + h2 name (18px) + `.caption` "Staff" (14px
  uppercase `#888`, mb-4) + bio p + `.social_29128` (3 icon links:
  facebook / instagram / twitter). John Doe / Jean Doe / Claire Dormey.
- **Testimonials:** owl-carousel of 4 `.testimonial-39191` (d-flex,
  sand bg, padding 50px, 20px text, mb-30): `mr-4` photo + blockquote
  (Lorem quote) + "— John Doe"; owl arrows (icon chevrons) + dots.
- **Blog (`.post-entry-1`, 3 cards, col-lg-4):** photo link + `.post-
entry-1-contents` (white bg, padding 20px): h2 (22px, mb 20, link
  black, hover sand) + `.meta` (13px uppercase `#ccc` letter-spacing
  .1em: "July 17, 2019 by Admin") + excerpt p. Titles all "Lorem ipsum
  dolor sit amet" — vary.
- **CTA band (`.site-section.bg-image.overlay`, bg photo + SAND wash
  `rgba(239,186,108,0.4)`):** centered col-md-7: h2 (bold, white)
  "Join and Trip With Us" + p (white) + `.btn.btn-primary.text-white
py-3 px-4` "Get In Touch".
- **Footer (`.site-footer.bg-light`, bg `#f6f5f5`, padding 4em 0 / 8em
  md):** 2 columns — col-lg-3: `.footer-heading` "Instagram" (16px) +
  3×2 grid of 6 square thumbs; col-lg-8: row → col-lg-6 `.footer-
heading` "Quick Links" (5 links: About Us / Testimonials / Terms of
  Service / Privacy / Contact Us, li mb 10px) + col-lg-6 "Newsletter"
  (p + form.d-flex: `input.form-control` 55px white bg sand focus
  border + `input.btn` sand "Send"); `.border-top` (`1px solid
rgba(255,255,255,0.1)`) + copyright: "Copyright © <year> All rights
  reserved | This template is made with ♥ by **Component Dock**" →
  https://www.componentdock.com/ (replaces the source's Colorlib
  credit; NO ColorLib credit).
- **Placeholder images:** `https://picsum.photos/seed/trek-<n>/<w>/<h>`.
  Slots: hero bg (wide, hikers/nature subject — screen the seed), story
  photo (portrait-ish), journey 1–6 (travel scenes), team 1–3
  (portraits), testimonial 1–4 (square portraits), blog 1–3, CTA bg
  (wide, reuse hero-scale nature), instagram 1–6 (square). Icons from
  `lucide-react` (Menu, X, Play, ChevronLeft/Right) + inline SVG brand
  icons (Facebook/Instagram/Twitter — lucide removed brand icons).

## Requirements

### Requirement: Header — static white navbar

The system SHALL render a static white navbar with a logo (mark +
wordmark) on the left and nav links (Home, About, Trips, Blog, Contact)
on the right, with the active link highlighted in sand. On mobile a
hamburger SHALL open an off-canvas drawer with the same links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the logo and the five nav entries (Home first,
  Contact last), with the first entry styled as active

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** the nav links appear in a drawer and can be closed again

### Requirement: Hero

The system SHALL render a full-height hero with a nature photo under a
dark wash, a white headline "Let's Enjoy The Wonders of Nature", a
sub-line, and a circular play button labelled "Watch the video".

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** it is inspected
- **THEN** it shows the headline, the sub-line, and the circular play
  button with the "Watch the video" label

### Requirement: Section headings with ghost backdrop

Every content section SHALL use the heading pattern: a huge faint grey
uppercase backdrop word, a small sand uppercase label, and a black
heading.

#### Scenario: Our Story heading

- **GIVEN** the Our Story section is rendered
- **WHEN** its heading is inspected
- **THEN** it shows the backdrop word "Story", the label "Discover
  Story", and the heading "Our Story"

#### Scenario: Journey heading

- **GIVEN** the Journey section is rendered
- **WHEN** its heading is inspected
- **THEN** it shows the backdrop word "Journey", the label "Journey",
  and the heading "Your Journey Starts Here"

### Requirement: Our Story

The system SHALL render a two-column section with the heading and two
paragraphs on the left and a hiking photo on the right.

#### Scenario: Story content

- **GIVEN** the Our Story section is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading, two paragraphs, and one image

### Requirement: Journey pricing cards

The system SHALL render six photo cards, each with a sand price pill
and a white trip title overlaid at the bottom, with the image zooming
out on hover.

#### Scenario: Pricing cards

- **GIVEN** the Journey section is rendered
- **WHEN** the cards are inspected
- **THEN** six cards are shown, each with a price pill ($200.00 …) and
  a title

#### Scenario: Card hover

- **GIVEN** a Journey card is rendered
- **WHEN** it is hovered
- **THEN** the image scales down to its natural size (zoom-out effect)

### Requirement: Our Team

The system SHALL render three centered staff cards, each with a photo,
name, "Staff" caption, bio, and three social icons.

#### Scenario: Team cards

- **GIVEN** the Our Team section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with a photo, name, "Staff"
  caption, bio text, and three social icon links

### Requirement: Testimonials

The system SHALL render four sand-coloured testimonial cards, each with
a photo, a quote, and an author name, in a carousel with prev/next
arrows and dots.

#### Scenario: Testimonial cards

- **GIVEN** the Testimonials section is rendered
- **WHEN** the carousel is inspected
- **THEN** it shows sand cards with photo, quote, and author, and
  provides navigation arrows and dots

### Requirement: Our Blog

The system SHALL render three blog post cards, each with a photo and a
white content box containing a title, a date/author meta line, and an
excerpt.

#### Scenario: Blog cards

- **GIVEN** the Our Blog section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with a photo, title, "July 17,
  2019 by Admin"-style meta, and an excerpt

### Requirement: CTA band

The system SHALL render a full-width band with a photo under a sand
wash, a white bold headline "Join and Trip With Us", a white sub-line,
and a sand "Get In Touch" button.

#### Scenario: CTA content

- **GIVEN** the CTA band is rendered
- **WHEN** it is inspected
- **THEN** it shows the headline, the sub-line, and the sand "Get In
  Touch" button

### Requirement: Footer

The system SHALL render a light `#f6f5f5` footer with an Instagram
3×2 thumb grid, a Quick Links widget (5 links), a Newsletter form
(email input + sand "Send" button), and a copyright bar crediting
Component Dock (no ColorLib credit).

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the Instagram grid (6 thumbs), the Quick Links
  list, the Newsletter form, and the copyright bar linking to
  https://www.componentdock.com/

#### Scenario: Newsletter submit

- **GIVEN** the Newsletter form is rendered
- **WHEN** the user submits an email
- **THEN** the form confirms the subscription (success message replaces
  the input)

### Requirement: Composition

All sections SHALL appear in the source order on one page: navbar →
hero → Our Story → Journey → Our Team → Testimonials → Our Blog → CTA
band → footer.

#### Scenario: Section order

- **GIVEN** the full page is rendered
- **WHEN** the sections are enumerated top to bottom
- **THEN** the order is navbar, hero, story, journey, team,
  testimonials, blog, CTA, footer

## Verification checklist

- [ ] Spec validated: `npm run spec:validate` passes for
      `template-trek`
- [ ] Tokens in `src/index.css` `@theme`: `--color-sand: #efba6c`,
      `--color-body: #364d59`, `--color-ink: #000000`,
      `--color-ghost: #efefef`, `--color-soft: #f6f5f5`,
      `--color-meta: #ccc`, `--color-caption: #888`; Google Fonts
      `<link>` in `index.html`: Work Sans (300/400/700/900)
- [ ] Navbar: STATIC white bar; logo = inline SVG mountain-peak mark +
      uppercase wordmark; nav (Home active / About / Trips / Blog /
      Contact) `#000`, hover + active sand; mobile hamburger → 300px
      off-canvas drawer with same links
- [ ] Hero: `calc(100vh - 196px)` min 677px (600px mobile), photo +
      `rgba(0,0,0,0.3)` wash; h1 3rem/2rem white weight 900 lh 1
      "Let's Enjoy The Wonders of Nature"; p 15px white; 60px circular
      play button (white border, `rgba(255,255,255,0.1)` bg, hover
      white bg + black icon) + "Watch the video"
- [ ] Our Story: left heading (backdrop "Story" + sand "Discover
      Story" label + "Our Story" h3) + 2 paragraphs; right photo
- [ ] Journey: centered heading (backdrop "Journey" + label "Journey" + "Your Journey Starts Here"); 6 photo cards (3-up): bottom-up
      gradient overlay, img scale(1.05)→1 hover, sand price pill
      (radius 30px, 12px uppercase l-s .2em) + 18px white title —
      vary the placeholder titles, keep prices
- [ ] Our Team: centered heading (backdrop "Our Team" + "Amazing
      Staff" + "Meet Our Team"); 3 centered cards (photo mb-4, 18px
      name, 14px uppercase `#888` "Staff" caption, bio, 3 social
      icons)
- [ ] Testimonials: centered heading (backdrop "Testimonials" +
      "Testimony" + "Happy Customers"); 4 sand cards (padding 50px,
      20px text, offset square accent): photo + blockquote + author;
      carousel arrows + dots (React state)
- [ ] Our Blog: centered heading (backdrop "Blog" + "Updates" + "Our
      Blog"); 3 cards: photo + white content box (20px padding): 22px
      title (hover sand) + `#ccc` 13px uppercase meta "July 17, 2019
      by Admin" + excerpt — vary titles
- [ ] CTA band: photo + SAND wash `rgba(239,186,108,0.4)`; centered
      bold white "Join and Trip With Us" + white p + sand "Get In
      Touch" (uppercase .8rem l-s .2rem, py-3 px-4)
- [ ] Footer: `#f6f5f5` bg (NOT sand — `bg-light` override wins in
      the source), padding 4em/8em; Instagram 3×2 thumbs; Quick Links
      5; Newsletter form (55px white input, sand focus border, sand
      "Send" btn); copyright bar with Component Dock credit + no
      ColorLib credit
- [ ] Placeholder images via
      `https://picsum.photos/seed/trek-<n>/<w>/<h>` (hero, story,
      journey 1–6, team 1–3, testimonial 1–4, blog 1–3, CTA, instagram
      1–6) — subject-screen the nature/travel seeds; icons from
      `lucide-react` (brand socials as inline SVG — lucide removed
      brand icons)
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/trips/`), design tokens, diffs
      (name, placeholder images, React carousel / mobile drawer /
      decorative play button instead of owl/fancybox/AOS, Component
      Dock footer credit); after merge mark ALL THREE TEMPLATES.md
      Trips rows `[x]` (lines 520, 1209, 3010 — Bootstrap 216 /
      Business 365 / Travel 44)
