# Template: Roamly (Travel Agency)

## Purpose

Roamly is a single-page travel agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wanderlust" website template design
(source: https://colorlib.com/wp/template/wanderlust/, slug `wanderlust`), built
under a DIFFERENT name (Roamly — evokes "roam", fitting a travel brand) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wanderlust" — free travel agency website template.
  Official description per ColorLib: "Inspire wanderlust with a stunning travel
  template featuring destination guides, tour packages with itineraries,
  booking forms, traveler reviews, and photo galleries." The official preview
  page `https://preview.colorlib.com/theme/wanderlust/` returns **404 "Not
  Found"**, but the ColorLib preview hub
  (`preview.colorlib.com/assets/js/products.js`) maps the slug to a REACHABLE
  Cloudflare Pages demo: **`https://wanderlust-colorlib.pages.dev/`** — the
  current official Astro rebuild of the same design. All DOM structure, copy,
  and tokens below are extracted from that live demo (real values, not
  approximations), cross-checked against the TEMPLATES.md screenshot
  (`wanderlust-template-1770211435145.jpg`, AVIF 2400×1892, converted and
  visually analyzed — matches the demo's above-the-fold 1:1: same header/logo,
  same hero photo with rowboat, same headline with gradient accent word, same
  two CTAs, same stats row, same floating search widget).
- **Visual design (screenshot + live demo):** modern, clean travel-agency
  landing. Teal (`#0d9488`) brand accent on white/gray; sticky white
  translucent header (layered-mountain logo mark + bold wordmark, centered
  nav, "Book Now" pill-ish button, dark-mode toggle); full-bleed hero photo of
  an alpine lake with a wooden rowboat, darkened by an overlay; left-aligned
  content: small pill badge "Top-Rated Travel Agency 2025", huge bold white
  headline "Discover Your Next Adventure" where "Adventure" is clipped to a
  teal→yellow gradient, supporting paragraph, two CTAs (solid teal "Explore
  Tours →" + glassy "Watch Our Story" with play icon); a 4-stat row (50+, 200+,
  15k+, 98%); and a large white rounded search/booking card floating at the
  bottom of the hero (Destination / Check In / Check Out / Travelers +
  "Search Tours"). Below the fold: a 6-card destinations grid, a 4-card
  featured-tours grid with pricing, a 6-item "Travel with Confidence" feature
  grid, a testimonial section, a photo CTA section, and a dark footer with a
  newsletter. The demo also supports **dark mode** (header toggle flips `dark:`
  variants, persisted via `localStorage`).
- **Section order (1:1 from the live demo DOM):**
  1. **Header** (`sticky top-0 z-50 w-full border-b border-gray-200
bg-white/80 backdrop-blur-lg transition-all dark:border-gray-800
dark:bg-gray-950/80`; container `mx-auto flex h-16 items-center justify-between
px-4 lg:h-20 lg:px-8`): logo = SVG layered-mountain mark (`h-8 w-8
text-primary-600 lg:h-10 lg:w-10`) + wordmark `text-xl font-bold text-gray-900
dark:text-white lg:text-2xl`; desktop nav (`hidden lg:flex lg:gap-8`) —
     Destinations (`/#destinations`), Tours (`/#tours`), About (`/#about`),
     **Resources dropdown** (button with chevron that rotates on hover; panel
     `min-w-48 rounded-xl border bg-white p-2 shadow-lg` with Travel Blog, Travel
     Guides, FAQ), Contact (`/contact`); right actions: "Book Now" button
     (`hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white
hover:bg-primary-700 sm:inline-flex`), dark-mode toggle (`aria-label="Toggle
dark mode"`, moon `dark:hidden` / sun `hidden dark:block`), mobile menu button
     (`data-mobile-toggle`, `aria-label="Open menu"`, `aria-expanded`).
  2. **Hero** (`relative min-h-screen pb-20 lg:pb-32`): full-bleed alpine-lake
     photo (rowboat) + dark overlay for readability; left-aligned
     `max-w-xl`-ish column: pill badge "Top-Rated Travel Agency 2025" (map-pin
     icon); H1 (`text-4xl font-bold tracking-tight text-white sm:text-5xl
lg:text-6xl xl:text-7xl`) "Discover Your Next" + line break + "Adventure" in
     `.text-gradient` (see tokens); subtext `max-w-xl`: "Explore breathtaking
     destinations around the world with our expertly curated tours. From ancient
     wonders to tropical paradises, your dream vacation awaits."; CTA row: primary
     "Explore Tours" (`rounded-lg bg-primary-600 px-8 py-4 text-base font-medium
text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-xl`)

* arrow icon, secondary "Watch Our Story" (glass: `border border-white/30
bg-white/10 backdrop-blur-sm hover:border-white/50 hover:bg-white/10` + play
  triangle); stats row `mt-16 grid` of 4: **50+ Destinations, 200+ Tour
  Packages, 15k+ Happy Travelers, 98% Satisfaction Rate** (big bold numbers +
  uppercase labels); bottom **search widget**: white card (`rounded-2xl
bg-white p-6 shadow-2xl dark:bg-gray-800`) with `<form class="grid gap-4
sm:grid-cols-2 lg:grid-cols-5">`: Destination (label + text input
  `placeholder="Where to?"` + MapPin icon), Check In (date input `dd/mm/yyyy` +
  Calendar icon), Check Out (date input + Calendar icon), Travelers (select,
  default "1 Traveler" + Users icon), and submit "Search Tours"
  (`w-full rounded-lg bg-primary-600 py-3 font-medium text-white
hover:bg-primary-700`, `flex items-end sm:col-span-2 lg:col-span-1`). 3. **Explore the World** (`bg-gray-50 py-20 lg:py-28 dark:bg-gray-900`):
  heading "Explore the World" + sub; grid `mt-12 grid gap-6 sm:grid-cols-2
lg:grid-cols-3` of **6 destination cards** (`destination-card group`,
  `aspect-[4/3] overflow-hidden` image, rating "4.9 • 24 tours", name, blurb):
  Bali, Indonesia (4.9, 24 tours — "Tropical paradise with stunning temples
  and beaches"), Santorini, Greece (4.8, 18 — "Iconic white buildings and
  breathtaking sunsets"), Machu Picchu, Peru (4.9, 12 — "Ancient Incan
  citadel high in the Andes Mountains"), Tokyo, Japan (4.7, 32 — "Where
  ancient tradition meets cutting-edge modernity"), Maldives (4.9, 15 —
  "Crystal clear waters and luxury overwater villas"), Swiss Alps (4.8, 20 —
  "Majestic peaks and world-class skiing adventures"); "View all
  destinations" link below the grid. 4. **Unforgettable Experiences** (`bg-white py-20 lg:py-28 dark:bg-gray-950`):
  eyebrow "Featured Tours", heading "Unforgettable Experiences", sub
  "Handpicked tours designed to immerse you in local cultures…"; grid of
  **4 tour cards** (image with country chip overlay, title, duration
  ("7 days"), star rating + count `4.9 (128)`, two highlight tags (e.g.
  "Temple visits", "Rice terraces"), price row "From **$1299**" with
     strikethrough original `$1599`, "View" button):
  - Bali Cultural Journey — Bali, Indonesia — 7 days — 4.9 (128) — Temple
    visits / Rice terraces — $1299 → ~~$1599~~
  - Greek Island Hopping — Greece — 10 days — 4.8 (96) — Santorini sunset /
    Mykonos beaches — $2199 → ~~$2499~~
  - Peru Discovery — Peru — 8 days — 4.9 (74) — Machu Picchu / Sacred
    Valley — $1899 (no strikethrough)
  - Japan Explorer — Japan — 12 days — 4.7 (156) — Tokyo nightlife / Kyoto
    temples — $3499 → ~~$3999~~
  5. **Travel with Confidence** (`bg-gray-50 py-20 lg:py-28 dark:bg-gray-900`):
     heading + sub; grid of **6 feature cards** (icon + title + description):
     Safe & Secure Travel ("Your safety is our priority. All tours include
     comprehensive travel insurance and 24/7 emergency support."), Expert
     Local Guides ("Experience destinations through the eyes of passionate
     local experts who share authentic insights."), Curated Experiences ("Each
     tour is thoughtfully designed to balance must-see attractions with hidden
     gems."), Best Price Guarantee ("Find a lower price elsewhere? We'll match
     it and give you an additional 10% off."), Flexible Booking ("Plans
     change, we understand. Enjoy free cancellation up to 30 days before
     departure."), 24/7 Support ("Our travel experts are always just a call
     away, wherever you are in the world.").
  6. **What Our Travelers Say** (`bg-white py-20 lg:py-28 dark:bg-gray-950`):
     heading "What Our Travelers Say" + intro "Real stories from adventurers
     who trusted us with their dream vacations."; testimonial cards: 5-star
     row, quote, avatar (initial), name, role, "Traveled to <destination>".
     Demo card: Sarah Mitchell — Adventure Traveler — Traveled to Bali,
     Indonesia — "Our trip to Bali was absolutely magical. Every detail was
     perfectly planned, and the local guides were exceptional. This was the
     trip of a lifetime!".
  7. **Ready for Your Next Adventure?** (`relative overflow-hidden py-20
lg:py-28`): full-width background photo (beach, 1920×600) + dark overlay +
     decorative `bg-accent-500/20 blur-3xl` glow blobs; centered `max-w-3xl
text-center`: white heading "Ready for Your Next Adventure?", sub "Join
     thousands of travelers who have discovered the world with Wanderlust. Your
     journey of a lifetime starts here.", CTA "Contact Us" (`rounded-lg bg-white
px-8 py-4 text-base font-medium text-primary-700 shadow-lg hover:bg-gray-100
hover:shadow-xl`).
  8. **Footer** (`bg-gray-900 pt-16 text-gray-300 lg:pt-24 dark:bg-gray-950`):
     brand column (logo mark + "Roamly" wordmark + blurb "Discover
     extraordinary destinations and create unforgettable memories with our
     curated travel experiences"); link columns — **Destinations** (Bali,
     Greece, Japan, Peru), **Company** (About Us, Our Team, Careers, Contact),
     **Support** (intro "Our travel experts are always just a call away,
     wherever you are in the world." + contact items), **Travel Inspiration**
     (newsletter: "Subscribe for exclusive deals, travel tips, and destination
     guides." + email input `placeholder="Enter your email"` + Subscribe
     button); bottom bar: "© 2026 Roamly. All rights reserved." + Privacy
     Policy + Terms of Service links.

- **Design tokens (extracted from the live demo's CSS
  `/_astro/Base.CY7cTYTJ.css` — real values):**
  - Brand **primary = teal `#0d9488`** (primary-600: logo icon, "Book Now",
    "Explore Tours", "Search Tours", gradient start) with scale: 100
    `#ccfbf1`, 300 `#5eead4`, 400 `#2dd4bf`, 500 `#14b8a6`, 600 `#0d9488`,
    700 `#0f766e` (button hover).
  - Accent **yellow = `#eab308`** (accent-500: gradient end, CTA-section glow
    blobs), accent-500/20 used decoratively.
  - **Headline gradient:** `.text-gradient{background-image:linear-gradient(to
right,#0d9488,#eab308);color:transparent;background-clip:text}` — applied
    to the accent word "Adventure" in the hero H1.
  - Neutrals: white `#fff`; gray-50 (light sections), gray-100 (header
    border, hover bg), gray-200 (header border dark: `#1f2937`-family),
    gray-300 (footer text), gray-400 (secondary/placeholder text), gray-500,
    gray-600 (nav links), gray-700 (input labels), gray-800 (dark surfaces,
    search card dark bg, footer bg), gray-900 (footer bg, dark section bg),
    gray-950 (dark-mode page bg).
  - Fonts: **Inter** (300–800 via Google Fonts `css2?family=Inter:wght@
300;400;500;600;700;800`), sans-serif — the only font family in the demo.
  - Buttons: primary `rounded-lg` (NOT pill — NOTE: the TEMPLATES.md
    screenshot shows fully-rounded pill hero CTAs; the live rebuild uses
    `rounded-lg` — follow the live rebuild per Moda precedent); header CTA
    `px-5 py-2.5 text-sm`, hero CTA `px-8 py-4 text-base` with
    `shadow-primary-600/25`; search submit `py-3` full-width; pill
    `rounded-full` reserved for the hero badge and stat chips.
  - Cards/radii: search widget `rounded-2xl shadow-2xl`, dropdown panel
    `rounded-xl border shadow-lg`, inputs `rounded-lg`, destination/tour
    images `aspect-[4/3]` (destinations) and `aspect-[3/2]`-ish (tours) with
    `overflow-hidden`, images scale on hover (`hover:scale-110` 500ms).
  - Rhythm: section padding `py-20 lg:py-28`, container `mx-auto px-4 lg:px-8`
    (demo uses Tailwind `container`), destination grid `sm:grid-cols-2
lg:grid-cols-3`, tour grid 4-col on lg, search form `sm:grid-cols-2
lg:grid-cols-5` (4 fields + button), section backgrounds alternate
    gray-50 / white, footer dark gray-900.
  - Dark mode: `data-dark-toggle` button flips `.dark` on
    `document.documentElement`, persisted in `localStorage` key `theme`
    ("dark"/"light"); all surfaces have `dark:` variants.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/roamly-<n>/<w>/<h>`; hero 1920×1080, destinations
  800×600 (4:3), tours 800×600, CTA 1920×600); icons → lucide-react (Mountain
  or Layers for the logo mark, MapPin, Calendar, Users, Moon, Sun, Menu, X,
  Star, ArrowRight, Play, ChevronDown, ShieldCheck, Compass/Map, Sparkles,
  BadgePercent, CalendarCheck, Headphones/Headset — VERIFY exports); fonts via
  Google Fonts `<link>` (Inter 300–800); dark mode = `dark:` variants + toggle
  flipping `.dark`, persisted via `window.localStorage` (Keyhaven pattern —
  jsdom 30 has no localStorage, use the in-memory Storage polyfill in
  `src/test/setup.ts`); search form = client-side form with labels +
  placeholders (submit shows inline feedback, no backend); "View all
  destinations" and tour card "View" links anchor to `#`/inert placeholders
  (single-page landing per repo convention); newsletter form client-side
  validated with inline success; date inputs use `type="date"` with
  `dd/mm/yyyy` placeholders as in the demo.

Roamly lives in `apps/roamly` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header with logo, nav, dropdown, and actions

The system SHALL render a sticky translucent header with a logo mark +
wordmark, centered navigation including a Resources dropdown, a Book Now
button, a dark-mode toggle, and a mobile menu.

#### Scenario: Header content

- **GIVEN** the Roamly page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the logo: a layered-mountain SVG mark in the
  brand teal plus the wordmark "Roamly" in bold
- **AND** the header SHALL show nav links Destinations, Tours, About,
  Resources, and Contact
- **AND** the header SHALL show a "Book Now" button in the brand teal and a
  dark-mode toggle
- **AND** the header SHALL stay visible at the top when the page scrolls
  (sticky, translucent with backdrop blur)

#### Scenario: Resources dropdown

- **GIVEN** the header is rendered on a desktop viewport
- **WHEN** the user hovers over the Resources link
- **THEN** a dropdown SHALL open listing Travel Blog, Travel Guides, and FAQ
- **AND** the chevron icon SHALL rotate while the dropdown is open

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** a menu SHALL expand listing the nav links
- **AND** the button SHALL reflect the expanded state via `aria-expanded`
- **AND** the menu SHALL close when the user presses Escape or activates a
  link

#### Scenario: Dark mode toggle

- **GIVEN** the header is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the page SHALL switch between light and dark color schemes
- **AND** the choice SHALL persist across reloads (via `window.localStorage`)

### Requirement: Hero

The system SHALL render a full-screen hero with a background photo, dark
overlay, badge, headline with a gradient accent word, subtext, two CTAs, a
stats row, and a floating search widget.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a full-bleed landscape photo with a dark
  overlay for text readability
- **AND** a pill badge SHALL read "Top-Rated Travel Agency 2025"
- **AND** the headline SHALL read "Discover Your Next Adventure" with
  "Adventure" rendered in a teal-to-yellow gradient (background-clip: text)
- **AND** a subtext paragraph SHALL describe expertly curated tours

#### Scenario: Hero CTAs

- **GIVEN** the hero is displayed
- **WHEN** the user views the call-to-action row
- **THEN** a primary button "Explore Tours" SHALL use the brand teal with an
  arrow icon and a hover state
- **AND** a secondary button "Watch Our Story" SHALL use a translucent glass
  style with a play icon

#### Scenario: Hero stats

- **GIVEN** the hero is displayed
- **WHEN** the user views the stats row
- **THEN** four stats SHALL show: 50+ Destinations, 200+ Tour Packages, 15k+
  Happy Travelers, 98% Satisfaction Rate
- **AND** each stat SHALL show a large bold number with an uppercase label

#### Scenario: Search widget

- **GIVEN** the hero is displayed
- **WHEN** the user views the bottom of the hero
- **THEN** a white rounded search card SHALL float over the hero bottom
- **AND** it SHALL contain labeled fields: Destination (placeholder "Where
  to?" with a map-pin icon), Check In and Check Out (date inputs with
  calendar icons), and Travelers (select defaulting to "1 Traveler" with a
  users icon)
- **AND** a teal "Search Tours" submit button SHALL complete the row

### Requirement: Explore the World destinations grid

The system SHALL render a "Explore the World" section on a light-gray
background with a heading and a 6-card destinations grid.

#### Scenario: Destination cards

- **GIVEN** the page is rendered
- **WHEN** the destinations section is displayed
- **THEN** the heading SHALL read "Explore the World"
- **AND** six destination cards SHALL be shown in a 3-column grid: Bali
  (4.9 · 24 tours), Santorini (4.8 · 18), Machu Picchu (4.9 · 12), Tokyo
  (4.7 · 32), Maldives (4.9 · 15), Swiss Alps (4.8 · 20)
- **AND** each card SHALL show a 4:3 image, a star rating with tour count, the
  destination name, and a one-line blurb
- **AND** a "View all destinations" link SHALL appear below the grid

### Requirement: Unforgettable Experiences tours grid

The system SHALL render a "Unforgettable Experiences" section with a
"Featured Tours" eyebrow and a 4-card tours grid with pricing.

#### Scenario: Tour cards

- **GIVEN** the page is rendered
- **WHEN** the tours section is displayed
- **THEN** the section SHALL show the eyebrow "Featured Tours" and the heading
  "Unforgettable Experiences"
- **AND** four tour cards SHALL be shown: Bali Cultural Journey (7 days, 4.9
  (128), $1299 → ~~$1599~~), Greek Island Hopping (10 days, 4.8 (96),
  $2199 → ~~$2499~~), Peru Discovery (8 days, 4.9 (74), $1899), Japan Explorer
  (12 days, 4.7 (156), $3499 → ~~$3999~~)
- **AND** each card SHALL show an image with a country chip, title, duration,
  star rating with review count, two highlight tags, a price row with a
  strikethrough original price where discounted, and a "View" button

### Requirement: Travel with Confidence features

The system SHALL render a "Travel with Confidence" section with six feature
cards (icon, title, description).

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** six features SHALL be shown with icons: Safe & Secure Travel,
  Expert Local Guides, Curated Experiences, Best Price Guarantee, Flexible
  Booking, and 24/7 Support
- **AND** each feature SHALL include the supporting description from the
  reference (e.g. insurance + 24/7 emergency support; free cancellation up to
  30 days before departure)

### Requirement: What Our Travelers Say testimonials

The system SHALL render a testimonials section with a heading, an intro line,
and testimonial cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the heading SHALL read "What Our Travelers Say"
- **AND** each testimonial card SHALL show a 5-star row, a quote, an avatar
  with the person's initial, a name, a role, and a "Traveled to
  <destination>" line
- **AND** the first card SHALL feature Sarah Mitchell — Adventure Traveler —
  Traveled to Bali, Indonesia

### Requirement: Ready for Your Next Adventure CTA

The system SHALL render a full-width photo CTA section with centered content
and a Contact Us button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** the section SHALL show a background photo with a dark overlay and
  subtle brand-colored glow accents
- **AND** the heading SHALL read "Ready for Your Next Adventure?"
- **AND** a "Contact Us" button SHALL use a white background with brand-teal
  text

### Requirement: Footer

The system SHALL render a dark footer with a brand column, link columns, a
newsletter form, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show the brand column (logo + "Roamly" + blurb)
- **AND** a Destinations column SHALL link Bali, Greece, Japan, and Peru
- **AND** a Company column SHALL link About Us, Our Team, Careers, and
  Contact
- **AND** a Support column SHALL show the support intro text
- **AND** a Travel Inspiration column SHALL contain a newsletter with an email
  input ("Enter your email") and a Subscribe button
- **AND** the bottom bar SHALL read "© 2026 Roamly. All rights reserved." with
  Privacy Policy and Terms of Service links

#### Scenario: Newsletter submit

- **GIVEN** the footer newsletter is rendered
- **WHEN** the user submits an invalid email
- **THEN** an inline error SHALL be shown and no success message SHALL appear
- **AND** when the user submits a valid email, an inline success message SHALL
  replace the form

### Requirement: Accessibility and page composition

The system SHALL render a single-page composition with standard accessibility
features.

#### Scenario: Skip link and landmarks

- **GIVEN** the Roamly app is rendered
- **WHEN** the page loads
- **THEN** a "Skip to content" link SHALL be the first focusable element
- **AND** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user presses the back-to-top button
- **THEN** the page SHALL scroll to the top

#### Scenario: Full page render

- **GIVEN** the Roamly app is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Roamly — Travel Agency"
- **AND** sections SHALL render in the exact order: Header → Hero → Explore
  the World → Unforgettable Experiences → Travel with Confidence → What Our
  Travelers Say → Ready for Your Next Adventure → Footer

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-roamly`
- [ ] TDD: tests written before components, one `describe` per component,
      scenario `it` blocks mirroring the spec scenarios
- [ ] `scripts/verify-app.sh roamly` passes (typecheck + lint + 100% coverage
      tests + build)
- [ ] Fidelity: section order 1:1 with the reference above (header → hero →
      destinations → tours → features → testimonials → CTA → footer); brand
      tokens from this spec (teal `#0d9488` primary, yellow `#eab308`
      gradient accent, gray scale, Inter 300–800, `rounded-lg` CTAs,
      `aspect-[4/3]` destination images) in `@theme`
- [ ] Official `preview.colorlib.com/theme/wanderlust/` returns 404; reference
      used = the reachable official Cloudflare Pages demo
      `https://wanderlust-colorlib.pages.dev/` (same design; content matches
      the TEMPLATES.md screenshot above-the-fold) — PR description must state
      this per docs/replication.md
- [ ] Dark mode present (live demo has a toggle + `dark:` variants), persisted
      via `window.localStorage` with the in-memory Storage polyfill in
      `src/test/setup.ts` (jsdom 30)
- [ ] Search widget + newsletter forms validate client-side with inline
      error/success states; "Adventure" gradient word uses
      `bg-clip-text`/`text-transparent` with `from-teal-600 to-yellow-500`
- [ ] Images are picsum placeholders (never copied assets); logo recreated as
      an SVG mark (never the source logo); icons from lucide-react (Mountain/
      Layers, MapPin, Calendar, Users, Moon, Sun, Menu, X, Star, ArrowRight,
      Play, ChevronDown, etc. — VERIFY exports); no new dependencies
- [ ] PR description states: source template (ColorLib "Wanderlust", slug
      `wanderlust`), preview URL, design tokens used, renames (Roamly,
      placeholder images), and the pages.dev-reference note
- [ ] After merge: `[~]` → `[x]` + surge URL + homepage in TEMPLATES.md,
      `npm run readme:status`
