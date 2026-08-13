# Template: Dwelling (Real Estate Agency)

## Purpose

Dwelling is a real-estate agency website in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Oakberry" template
design (see TEMPLATES.md — appears 2×: line 609 and line 2602; both rows
point to the same source and are `- [ ]` — one prep covers both, mark ALL
`[x]` when done; verified with `grep -c 'wp/template/oakberry/' TEMPLATES.md`
= 2), built under a DIFFERENT name (Dwelling — a plain single-word real-estate
noun; single lowercase word, no collision with `apps/` or existing spec
folders; verified: no `apps/dwelling`, no `template-dwelling` spec, no
`docs/templates/dwelling`, no grep hit in `package-lock.json` or any
app/spec/docs file) per the monorepo naming mandate (never reuse the ColorLib
source name — "oakberry" is also the source's own brand, doubly unusable),
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/oakberry/ (Bootstrap 5 category —
page title "Oakberry - Free Bootstrap 5 Template by Colorlib"; the theme is
a real-estate agency: property listings, agents, testimonials).

Preview URL: https://preview.colorlib.com/theme/oakberry/ (HTTP 200, ~54 KB
HTML + `css/style.css` ~82 KB fetched and parsed for tokens — the preview
slug matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Oakberry" — a REAL-ESTATE AGENCY landing page.
  Signature look: a 100vh full-screen hero slider (3 slides, tiny-slider)
  over house-interior photos with a dark overlay, a property SEARCH widget
  that overlaps the hero's bottom edge (`margin-top: -120px`, tabs
  "Buy Properties" / "Rent Properties" + 4 inputs + SEARCH button), a
  bright lime-green brand `#5ea51d` used for primary buttons, sale badges,
  location icons, active nav dots and hovers, a coral `#fd5c64` used for
  "Rent" badges, and a dark navy footer `#06112a`. Categories ("Explore Our
  Categories & Places": Land / Residential / Commercial / Industrial icon
  cards + a 12-city places list with property counts), a featured-property
  card grid (price, Sale/Rent badge, beds/baths/sqft, agent avatar + "2
  weeks ago"), a video section with play button, an about section with four
  animated counters, a full-width intro CTA band over a photo, a
  testimonial ("Clients We Help"), an agents row (Mike Bochs, Jessica
  Moore, Sarah Geronimo), and a Recent Blog strip of 3 post cards. Font:
  "Nunito Sans" everywhere (headings + body — NO serif display font; the
  screenshot's "serif" impression is vision-model noise, CSS is
  authoritative).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/oakberry/
  (HTTP 200, ~54 KB HTML; `css/style.css` ~82 KB parsed for tokens).
  Stack: Bootstrap 5 + tiny-slider (hero slider; `tns-nav` pill dots) +
  AOS (fade-up scroll animations) + glightbox + ionicons (play icon:
  `ion-ios-play`) + font-awesome 4.7 + flaticon icon fonts — NOT Tailwind.
  All interactivity must be recreated client-side in React: hero carousel
  (3 slides, autoplay optional, pill dots + prev/next), mobile burger
  panel, video lightbox modal, animated stat counters, optional fade-up on
  scroll.
- **Screenshot note:** `oakberry-free-template.jpg` (1200×946, viewed in the
  browser): hero = centered white headline "Modern House Make Better Life"
  (slide 3) over an interior photo (dark sofa, yellow dining chairs, TV
  wall) with a dark gradient overlay; "Oakberry" white logo + white
  uppercase nav links (HOME, ABOUT, PROPERTIES, AGENTS, BLOG, CONTACT) +
  "SUBMIT A PROPERTY" lime-green button; below the hero a search widget
  overlapping its bottom edge — tabs "Buy Properties" (inactive, white) /
  "Rent Properties" (active, green), four fields (KEYWORDS, PROPERTY TYPE,
  LOCATION, PRICE LIMIT) + solid green SEARCH button; then a clean white
  categories section with 4 square light-grey cards holding black line-art
  icons (house/building/factory/apartment). Vision estimated the green as
  ~#a4c639/#8cc63f — the CSS value `#5ea51d` is authoritative. Note: the
  vision model also reported a "top dark info bar with contact details" —
  NO such bar exists in the DOM/CSS (vision noise); the page starts with
  the transparent navbar over the hero.

## Design tokens (from preview stylesheet `css/style.css`)

- **Fonts:** `"Nunito Sans", Arial, sans-serif` for body AND headings
  (weights: nav links 700, property titles 600, headings Bootstrap
  defaults 500). Google Fonts `<link>` in `index.html`.
- **Brand green (signature, everywhere):** `#5ea51d` — `.btn.btn-primary`
  fill + 1px border, `.property-wrap` "Sale" badge, `.location i` icons,
  `.slider-hero .tns-nav` active dot, services icon hover, places-list
  hover, `.btn.btn-primary:hover` outline text. Put in `@theme` as
  `--color-brand`.
- **Coral accent:** `#fd5c64` — "Rent" badges on property cards
  (`.location .rent`), small `padding: 0 4px` label, white text.
- **Dark navy:** `#06112a` — `.ftco-footer` background; footer body text
  `rgba(255,255,255,0.7)`, widget h2 `#fff`. Darker navy shades `#050d21` /
  `#081637` appear in overlays/gradients.
- **Black / light:** `#000000` — `.btn.btn-black`, property card titles
  (h3 a `#000`, weight 600); light section backgrounds `#f8f9fa`
  (`bg-light`: categories, testimonials, blog), white card surfaces, muted
  text `#6c757d` / `rgba(0,0,0,0.6)` (agent names), meta 13px.
- **Buttons:** `.btn.btn-primary` = `#5ea51d` fill, `1px solid #5ea51d`
  border, white text, with a trailing arrow `span` (`margin-left: 10px`);
  hover = transparent background + green text (outline style). `.btn.btn-black`
  = `#000000` fill. Bootstrap radius (4px-ish, NOT pills), padding
  `0.375rem 0.75rem`.
- **Hero slider:** `height: 100vh; min-height: 700px`; slide = background
  photo + dark `:after` overlay; slide content: h2 (Bootstrap 2.5rem,
  white) + "Learn More" button; `tns-nav` dots — inactive small circles,
  active = `#5ea51d`, `width: 30px` (pill).
- **Search widget (`.ftco-search`):** `margin-top: -120px` (overlaps hero
  bottom), `position: relative`; tabs `.nav-pills .nav-link` =
  `padding: 10px 30px`, `border-radius: 0`, white text 16px, active tab
  green fill; 4 inputs (keyword, property type dropdown, location, price
  limit) + SEARCH button.
- **Property cards (`.property-wrap`):** white bg; image; `.text` ~25px
  padding; h3 20px/600 `#000`; `.location` 13px with `.sale` badge (green)
  / `.rent` badge (coral), `padding: 0 4px`, `margin-left: 10px`, location
  icon green; inline spec list (16px, `margin-right: 10px`); agent row:
  34px circular avatar (`border-radius: 50%`), name 14px/600
  `rgba(0,0,0,0.6)`; hover `box-shadow: 0 5px 39px -14px rgba(0,0,0,0.26)`.
- **Footer:** `background: #06112a`, `padding: 7em 0 0 0`, body
  `rgba(255,255,255,0.7)`; widget h2 `#fff`; brand column "Oakberry Real
  Estate Agency"; columns Offers / Company / Quick Links / "Have a
  Questions?" (contact info: "203 Fake St. Mountain View, San Francisco,
  California, USA", phone, email); copyright line bottom.
- **Section rhythm:** `padding: 7em 0` for full sections; eyebrow labels
  (small caps text like "Categories", "Our Properties", "Testimonial")
  above centered h2s.

## Requirements

### Requirement: Navbar (transparent over hero + CTA button)

The navbar SHALL be a transparent/absolute bar over the hero with the white
"Dwelling" wordmark on the left and nav links on the right: Home, About,
Properties, Agents, Blog, Contact — 13px, weight 700,
`rgba(255,255,255,0.7)`, white on hover/active — plus a green "Submit A
Property" button at the far right. On narrow viewports the links SHALL
collapse behind a burger toggler that opens a mobile menu panel.

#### Scenario: Desktop navbar

- **GIVEN** the Dwelling app is rendered at desktop width
- **WHEN** the page loads
- **THEN** the navbar SHALL show the "Dwelling" wordmark in white
- **AND** SHALL show the nav links Home, About, Properties, Agents, Blog,
  Contact
- **AND** SHALL show a green "Submit A Property" button

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user activates the burger toggler
- **THEN** a mobile menu panel SHALL open with `aria-expanded` reflecting
  the open state
- **AND** activating the toggler again SHALL close the panel

### Requirement: Hero slider (3 slides, full viewport)

The hero SHALL be a `100vh` (min-height 700px) carousel of three slides,
each with a background photo, a dark overlay, a white h2 headline, and a
"Learn More" button. Headlines SHALL be "Your Property Is Our Priority",
"Let Your Home Be Unique & Stylist", "Modern House Make Better Life" (in
order). Pill-shaped nav dots SHALL indicate the active slide (active dot
green, 30px wide); only one slide SHALL be visible at a time and the dots
SHALL cycle through the slides.

#### Scenario: Three slides

- **GIVEN** the Dwelling app is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show exactly one slide at a time with a white h2,
  a "Learn More" button, and a dark overlay over the background photo
- **AND** SHALL show nav dots with the active one styled green/pill-shaped

#### Scenario: Cycling slides

- **GIVEN** a hero slide is visible
- **WHEN** the user activates the next dot (or the carousel auto-advances)
- **THEN** the carousel SHALL advance to the following slide
- **AND** SHALL wrap around after the third slide

### Requirement: Property search widget (overlapping the hero)

A search widget SHALL overlap the hero's bottom edge (`-mt-30`-ish,
`margin-top: -120px` in the source) with two tabs — "Buy Properties" and
"Rent Properties" (green-filled active tab, white text, square corners) —
four fields (Enter Keyword, Property Type with options Residential /
Commercial / Land / Industrial, Location, Price Limit), and a green SEARCH
button. The tabs SHALL toggle an `aria-selected`/active state.

#### Scenario: Search fields and button

- **GIVEN** the search widget is rendered
- **WHEN** the page loads
- **THEN** the widget SHALL show the two tabs Buy Properties and Rent
  Properties with the first one active
- **AND** SHALL show the fields Enter Keyword, Property Type, Location,
  Price Limit and a SEARCH button

#### Scenario: Tab switching

- **GIVEN** the Buy Properties tab is active
- **WHEN** the user activates the Rent Properties tab
- **THEN** the Rent Properties tab SHALL become the active tab

### Requirement: Categories & places (4 icon cards + 12-city list)

A section SHALL show the eyebrow "Categories", the h2 "Explore Our
Categories & Places", four square light-grey cards with an icon and label
(Land, Residential, Commercial, Industrial), and a places list of twelve
cities each with a property count (New York 200, London 100, Chicago 120,
Illinois 300, California 100, Tennessee 200, Texas 200, North Carolina 200,
Florida 422, Charlotte 200, Orlando 200, Atlanta 200 — counts may be
paraphrased but keep the kind of content). City names + counts SHALL pair
in one row each, and list items SHALL highlight green on hover.

#### Scenario: Category cards

- **GIVEN** the categories section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Explore Our Categories & Places"
- **AND** SHALL show four icon cards labelled Land, Residential,
  Commercial, Industrial

#### Scenario: Places list

- **GIVEN** the categories section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a places list pairing each city name
  with its property count (e.g. "New York 200 Properties")

### Requirement: Featured properties (card grid)

A section SHALL show the eyebrow "Our Properties", the h2 "Featured
Properties", and a grid of property cards (preview shows 4 in a row; source
grid is 3-column, up to 3 rows — a 3×2 grid of six cards is a faithful
balance). Each card SHALL show a photo, a price (e.g. "$800,000"; rent
variants like "$3,050 / mo"), a Sale badge (green) or Rent badge (coral),
a bold title (e.g. "Sunny Loft Property"), a location line ("New York")
with a green pin icon, an inline spec list (3 Beds / 2 Baths / 1,878 sqft
— counts may vary per card), and an agent row with a circular avatar, the
agent name (e.g. "John Dorf") and a relative time ("2 weeks ago").

#### Scenario: Property card content

- **GIVEN** the featured properties section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Featured Properties"
- **AND** SHALL show property cards each with photo, price, Sale or Rent
  badge, title, location, spec list, and agent row

#### Scenario: Card hover

- **GIVEN** a property card is rendered
- **WHEN** the user hovers over it
- **THEN** the card SHALL show the soft drop shadow
  (`0 5px 39px -14px rgba(0,0,0,0.26)`)

### Requirement: Video section (photo band + play button)

A full-width section SHALL use a background photo with the h2 "Modern House
Video", a short paragraph ("Far far away, behind the word mountains…"
kind of copy), and a circular play button (ionicons play glyph → lucide
`Play`). Activating the play button SHALL open a video lightbox modal with
a close control.

#### Scenario: Video section content

- **GIVEN** the video section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the h2 "Modern House Video" over the
  background photo
- **AND** SHALL show a circular play button

#### Scenario: Video lightbox

- **GIVEN** the video section play button is rendered
- **WHEN** the user clicks the play button
- **THEN** a lightbox modal SHALL open with an embedded video area
- **AND** a close control SHALL dismiss the modal

### Requirement: About section (story + 4 animated counters)

A section SHALL show the h2 "Oakberry A Real Estate Company" (rendered as
"Dwelling A Real Estate Company" under the new brand), a paragraph, and
four counters — Years of Experienced, Total Properties, Qualified Realtors,
Total Branches — that animate from 0 up to their target values when they
enter the viewport (source markup shows literal "0" placeholders that the
JS counters fill; pick sensible targets e.g. 20 / 12K / 48 / 15 and note
the deviation).

#### Scenario: Counters animate

- **GIVEN** the about section is rendered
- **WHEN** the counters become visible
- **THEN** each counter SHALL animate from 0 to its target value
- **AND** the labels SHALL read Years of Experienced, Total Properties,
  Qualified Realtors, Total Branches

### Requirement: Intro CTA band

A full-width band over a background photo with a dark overlay SHALL show
the h1 "Find Best Place For Leaving" (source typo "Leaving" — paraphrase to
"Find Your Best Place for Living" is acceptable and preferred) and a "Get
in touch" button.

#### Scenario: CTA band content

- **GIVEN** the intro CTA band is rendered
- **WHEN** the page loads
- **THEN** the band SHALL show the h1 headline in white over the photo
- **AND** SHALL show a "Get in touch" button

### Requirement: Testimonials ("Clients We Help")

A section on a light background SHALL show the eyebrow "Testimonial", the
h2 "Clients We Help", and testimonial cards each with a quote paragraph, a
name and a position (e.g. Roger Scott — Marketing Manager).

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Clients We Help"
- **AND** SHALL show at least one testimonial with a quote, a name, and a
  position

### Requirement: Agents (3 profile cards)

A section SHALL show the h2 "Our Agents" and three agent cards, each with a
photo, a name (Mike Bochs, Jessica Moore, Sarah Geronimo), a "Listing 10
Properties" line (counts may vary), and social icon buttons (inline SVG
brand icons — lucide-react dropped brand glyphs).

#### Scenario: Agent cards

- **GIVEN** the agents section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Our Agents"
- **AND** SHALL show three agent cards with photo, name, listing line, and
  social icons

### Requirement: Recent Blog (3 post cards)

A section SHALL show the h2 "Recent Blog" and three post cards, each with a
photo, a meta line ("Admin / Dec. 01, 2020 / 3 Comments" kind of content),
a bold title ("New Home Sales Picked Up in December" — titles may vary),
and an excerpt paragraph.

#### Scenario: Post cards

- **GIVEN** the blog section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the h2 "Recent Blog"
- **AND** SHALL show three post cards with photo, meta line, title, and
  excerpt

### Requirement: Footer (dark navy, 5 areas)

The footer SHALL be `#06112a` with white widget headings and
`rgba(255,255,255,0.7)` body text, containing: a brand column ("Dwelling
Real Estate Agency" + short blurb + social icons), "Offers", "Company" and
"Quick Links" link lists, and a "Have a Questions?" contact column with an
address ("203 Fake St. Mountain View, San Francisco, California, USA"),
a phone number, and an email address. The bottom line SHALL read as a
copyright line with the monorepo-mandated "Component Dock" link
(https://www.componentdock.com/) — the source's ColorLib attribution is
REPLACED by the Component Dock footer per conventions.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to it
- **THEN** the footer SHALL show the brand column, the Offers, Company and
  Quick Links lists, and the "Have a Questions?" contact column with
  address, phone, and email

#### Scenario: Component Dock attribution

- **GIVEN** the footer copyright line
- **WHEN** the user inspects it
- **THEN** the line SHALL link to https://www.componentdock.com/ (branded
  "Component Dock")
- **AND** no ColorLib reference SHALL appear anywhere in the app code

### Requirement: Composition & interactions

The page SHALL render sections in this exact order: navbar → hero slider →
search widget → categories & places → featured properties → video section →
about → intro CTA → testimonials → agents → recent blog → footer. (The
preview's empty `ftco-gallery` section — a bare placeholder with no
content — SHALL be omitted.) Interactivity SHALL be client-side only
(React state): hero carousel with dots, mobile burger panel, video
lightbox, stat counters, search tab toggle. Optional fade-up scroll
animations (AOS-style) are permitted but must not affect testable content.

#### Scenario: Section order

- **GIVEN** the Dwelling app is rendered
- **WHEN** the page is inspected top to bottom
- **THEN** the sections SHALL appear in the order: navbar, hero, search,
  categories, featured properties, video, about, intro CTA, testimonials,
  agents, blog, footer

## Verification checklist

- [ ] Structure + order matches the preview 1:1 (nav → hero → search →
      categories → properties → video → about → intro → testimonials →
      agents → blog → footer).
- [ ] Brand green `#5ea51d` in `@theme` (`--color-brand`) and used for
      primary buttons, sale badges, location icons, active hero dots.
- [ ] Coral `#fd5c64` for Rent badges; dark navy `#06112a` footer.
- [ ] Font: "Nunito Sans" (headings + body) via Google Fonts `<link>` in
      `index.html`.
- [ ] Hero slider: 3 slides, dark overlay, pill dots (active green/30px),
      "Learn More" buttons — client-side React carousel.
- [ ] Search widget overlapping the hero bottom (`-mt-30`-ish): Buy/Rent
      tabs + 4 fields + SEARCH button.
- [ ] Property cards: price, Sale/Rent badge, title, location, spec list,
      circular agent avatar + name + relative time, hover shadow.
- [ ] Placeholder images use `https://picsum.photos/seed/dwelling-<n>/<w>/<h>`
      (hero slides + properties + video bg + agents + blog) —
      subject-check interior/house seeds; picsum has few interior shots, so
      verify seeds resolve to plausible property/interior scenes and
      document the pinned seed choices (see skill pitfalls).
- [ ] Icons: lucide-react for UI glyphs (Play, MapPin, BedDouble, Bath,
      Ruler/Area, Search, socials); INLINE SVG brand icons for social
      glyphs (lucide dropped brand icons) — probe every lucide import with
      the typeof check.
- [ ] Video lightbox modal, mobile burger, carousel, counters, tab toggle
      all client-side React state.
- [ ] Footer links https://www.componentdock.com/; NO colorlib.com string
      in any app file (spec/TEMPLATES.md/PR only).
- [ ] Tests before implementation (TDD), 100% coverage, per-app gate
      (`scripts/verify-app.sh dwelling`).
- [ ] After merge: mark BOTH TEMPLATES.md rows (lines 609 + 2602) `[x]`
      with `https://dwelling.free.componentdock.com`, run `npm run readme:status`,
      verify surge URL 200.
