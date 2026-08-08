# Template: Keyhaven (Real Estate Template)

## Purpose

Keyhaven is a single-page real estate landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Estatehub" website template design (see TEMPLATES.md — THREE
copies: lines 140, 2588, 2909), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Estatehub" — luxury real estate template
  (source: https://colorlib.com/wp/template/estatehub/).
- **Preview URL:** `https://preview.colorlib.com/theme/estatehub/` returns
  HTTP 404 (confirmed 2026-08-08). The live rendered demo is hosted on
  Cloudflare Pages: `https://estatehub-colorlib.pages.dev/` (HTTP 200,
  ~61 KB HTML; Astro stylesheet `/_astro/Base.C6er4gMe.css` ~39 KB parsed
  for tokens). TEMPLATES.md screenshot (`estatehub-template-1770211352442.jpg`,
  2400×1892) viewed in the browser as the visual reference; the pages.dev demo
  matches the screenshot 1:1 (same hero photo, green accents, layout).
- **Visual design (from screenshot + live demo):** premium luxury real-estate
  landing page. Hero = large modern white villa-with-pool photo darkened by a
  `bg-gray-900` base + bottom-up gradient (`bg-gradient-to-t from-gray-900
via-gray-900/50 to-transparent`, image `opacity-40`), serif white headline
  "Find Your **Dream Home**" with the accent phrase in green (`text-primary-500`),
  white rounded search card floating below the headline. Signature green
  (Tailwind green scale) primary: nav CTA, active Buy tab, Search button,
  stat numbers, badges, CTA banner. Serif display type (Playfair Display) for
  headings + Inter for body/UI. Property cards = `rounded-2xl` white cards
  with photo, price chip, badges, hover zoom + shadow lift. Full dark mode
  (`dark:` variants) with a navbar toggle.
- **Section order (1:1):**
  1. Navbar (`header.fixed.left-0.right-0.top-0.z-50.bg-white/95.backdrop-blur-sm
shadow-sm`): brand wordmark (icon + name) left; links Properties, Agents,
     About, Contact; primary "List Your Property" button
     (`rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white
hover:bg-primary-700`); dark-mode toggle (`aria-label="Toggle dark mode"`);
     mobile hamburger (`aria-label="Toggle mobile menu"`, `aria-expanded`)
     revealing a mobile panel with the same links + CTA.
  2. Hero (`section.relative.min-h-[85vh].overflow-hidden.bg-gray-900`):
     full-bleed photo (`object-cover opacity-40`) + gradient overlay; H1
     `font-serif text-4xl font-bold leading-tight text-white sm:text-5xl
lg:text-6xl` — "Find Your <span class="text-primary-500">Dream
     Home</span>"; sub-paragraph `mt-6 max-w-xl text-lg text-gray-300`
     ("Discover luxury properties in the most prestigious neighborhoods with
     our expert guidance."); search box `mt-12 max-w-4xl`.
  3. Search card (inside hero): tabs `flex gap-2` — Buy (active:
     `rounded-t-xl bg-primary-600 px-8 py-3 text-sm font-bold text-white`,
     `data-tab="buy" data-status="for-sale"`), Rent / Sell
     (`rounded-t-xl bg-white/20 px-8 py-3 text-sm font-medium text-white
backdrop-blur-sm hover:bg-white/30`); form `rounded-2xl rounded-tl-none
bg-white p-6 shadow-2xl lg:p-8` with hidden status input, `grid gap-6
sm:grid-cols-2 lg:grid-cols-4`: Location select (Any Location, Manhattan,
     Brooklyn, Queens, The Hamptons, Westchester, Greenwich), Property Type
     select (Any Type, House, Apartment, Condo, Townhouse, Land, Commercial),
     Price Range select (Any Price, Under $1M, $1M - $2.5M, $2.5M - $5M,
     $5M - $10M, $10M+), Search submit
     (`rounded-xl bg-primary-600 px-6 py-3.5 font-bold text-white shadow-lg
shadow-primary-600/30 hover:bg-primary-700 hover:shadow-xl`). Selects:
     `w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3.5
focus:border-primary-500 focus:bg-white focus:outline-none`; labels
     `mb-2 flex items-center gap-2 text-sm font-semibold` with
     `h-4 w-4 text-primary-600` icons (MapPin, Building2, DollarSign).
  4. Hero quick stats (`mt-12 flex flex-wrap gap-8 text-white`): 500+
     Properties Listed, $2B+ Sales Volume, 15+ Years Experience — value
     `text-3xl font-bold`, label `text-sm text-gray-400`.
  5. Stats strip (`section.border-b.border-gray-200.bg-white.py-12`): grid
     `grid gap-8 sm:grid-cols-4`, centered cells — $2B+ Total Sales Volume,
     500+ Properties Sold, 15+ Years Experience, 98% Client Satisfaction —
     value `text-3xl font-bold text-primary-600 lg:text-4xl`, label
     `mt-1 text-sm text-gray-600`.
  6. Featured Properties (`section.bg-white.py-20.lg:py-28`): left-aligned
     section header (`flex flex-col items-start justify-between gap-6
sm:flex-row sm:items-end`) — H2 `font-serif text-3xl font-bold
text-gray-900 sm:text-4xl` "Featured Properties" + sub "Handpicked
     luxury properties in the most sought-after locations." + "View All
     Properties" link (`flex items-center gap-2 text-sm font-semibold
text-primary-600 hover:text-primary-700` + ArrowRight icon); grid
     `mt-12 grid gap-8 lg:grid-cols-2` of 4 property cards — **Luxury
     Manhattan Penthouse** ($8.5M, New York NY, 4 Beds / 4.5 Baths / 4,200
     sqft; first card is `lg:flex` horizontal: image `lg:w-1/2` + content
     `lg:w-1/2`), **Modern Brooklyn Townhouse** ($3.2M, Brooklyn NY, 5 Beds /
     3.5 Baths / 3,800 sqft), **Waterfront Hamptons Estate** ($24.5M,
     Southampton NY, 8 Beds / 10 Baths / 12,000 sqft), **Tribeca Industrial
     Loft** ($4.8M, New York NY, 3 Beds / 2.5 Baths / 2,800 sqft). Card:
     `group block overflow-hidden rounded-2xl bg-white shadow-md transition-all
hover:shadow-xl` (dark: `dark:bg-gray-800`); image `aspect-[4/3]
object-cover group-hover:scale-110 transition-transform duration-500`;
     badges top-left (`rounded-full bg-primary-600 px-3 py-1 text-xs
font-semibold text-white` "For Sale" + `rounded-full bg-gray-900 px-3
py-1 text-xs font-semibold text-white` "New" on the first card only);
     price chip bottom-left over image (`rounded-lg bg-white/95 px-4 py-2
text-lg font-bold text-gray-900 shadow-lg backdrop-blur-sm`); content
     `p-5 lg:p-6`: H3 `font-bold text-gray-900 group-hover:text-primary-600`
     (dark: `dark:group-hover:text-primary-500`), address line with MapPin
     icon (`mt-1 flex items-center gap-1 text-sm text-gray-500`), features
     row (Beds/Baths/sqft with small BedDouble/Bath/Ruler icons).
  7. Why Choose Keyhaven (`section.bg-gray-50.py-20.lg:py-28`): centered
     header (`mx-auto max-w-2xl text-center`) — H2 "Why Choose Prestige
     Homes" (rename brand in copy: "Why Choose Keyhaven") + sub "We bring
     decades of experience and a personalized approach to every client.";
     grid `mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4` of 4 `text-center`
     feature cards — **Trusted Expertise** ("15+ years of experience in
     luxury real estate with a proven track record."), **Exclusive Listings**
     ("Access to off-market properties and exclusive listings before they go
     public."), **Personal Service** ("Dedicated agents who understand your
     unique needs and preferences."), **Best Value** ("Expert negotiation to
     ensure you get the best possible deal."). Card: icon chip `mx-auto flex
h-14 w-14 items-center justify-center rounded-xl bg-primary-100
text-primary-600` (dark: `dark:bg-primary-900/30 dark:text-primary-400`,
     icon `h-7 w-7`), H3 `mt-4 text-lg font-bold text-gray-900`, p `mt-2
text-sm text-gray-600`.
  8. Meet Our Agents (`section.bg-gray-50.py-20.lg:py-28`): centered header
     — H2 "Meet Our Agents" + sub "Our experienced team is dedicated to
     helping you find your perfect property."; grid `mt-12 grid gap-8
sm:grid-cols-2 lg:grid-cols-3` of 3 agent cards — **Sarah Mitchell**
     (Senior Partner, "$500M+ in sales", tags Luxury Properties / Penthouses),
     **Michael Chen** (Senior Agent, "$250M+ in sales", Brooklyn / Investment
     Properties), **Jennifer Ross** (Agent, "$150M+ in sales", Downtown
     Manhattan / Lofts). Card: `rounded-2xl bg-white p-6 text-center shadow-md
transition-all hover:shadow-xl` (dark: `dark:bg-gray-800`); photo
     `relative mx-auto h-32 w-32 overflow-hidden rounded-full`; H3 `mt-6
text-lg font-bold`; role `text-sm text-primary-600`; tagline `mt-2
text-sm text-gray-500`; specialty tag chips; Call (`tel:`) / Email
     (`mailto:`) links `flex items-center gap-1.5 text-sm text-gray-600
hover:text-primary-600` with Phone/Mail icons; "View All Agents" link
     (ArrowRight icon).
  9. What Our Clients Say (`section.bg-white.py-20.lg:py-28`): centered
     header — H2 "What Our Clients Say" + sub "Hear from homeowners who found
     their perfect property with us."; grid (sm:grid-cols-2 lg:grid-cols-3)
     of 3 testimonial cards — **David & Emma Thompson** (Homeowners, "Manhattan
     Penthouse") quoting Sarah; **Robert Chen** (Investor, "Multiple
     Properties") quoting Michael; **Sofia Martinez** (First-time Buyer,
     "Brooklyn Condo") quoting Jennifer. Card: `relative rounded-2xl p-8`
     (first `bg-white shadow-md`, others `bg-gray-50`; dark: `dark:bg-gray-800`
     / `dark:bg-gray-900`); quote icon svg `absolute right-8 top-8 h-10 w-10
text-primary-100` (Quote icon); blockquote `mt-6 text-gray-700`; property
     line `mt-4 text-sm text-primary-600`; author row `mt-6 flex items-center
gap-4 border-t border-gray-200 pt-6` with round avatar `h-12 w-12
rounded-full`, name `font-semibold text-gray-900`, role `text-sm
text-gray-500`.
  10. CTA banner (`section.relative.overflow-hidden.bg-primary-700.py-20.lg:py-28`):
      subtle grid-pattern overlay (`background-image` linear-gradient lines,
      `background-size: 20px 20px`); centered `max-w-4xl` — H2 `font-serif
text-3xl font-bold text-white sm:text-4xl lg:text-5xl` "Ready to Find
      Your Dream Home?"; sub `mx-auto mt-4 max-w-2xl text-lg text-primary-100`
      ("Our team of experts is ready to help you navigate the market and find
      the perfect property."); CTAs `mt-10 flex flex-col items-center
justify-center gap-4 sm:flex-row` — "Browse Properties"
      (`rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-700
hover:bg-primary-50` + ArrowRight) and "Contact Us"
      (`rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold
text-white hover:bg-white/10`).
  11. Footer (`footer.border-t.border-gray-200.bg-gray-50`): 4 columns —
      brand blurb ("Find your dream home with our curated selection of luxury
      properties and expert guidance.") + social icon buttons (`rounded-lg
bg-gray-200 p-2.5 text-gray-600 hover:bg-primary-600 hover:text-white`,
      aria-labels Facebook / Instagram / LinkedIn / YouTube — inline SVGs);
      **Quick Links** (Properties, Agents, About, Contact); **Properties**
      (Properties for Sale, Properties for Rent) + **Neighborhoods**
      (Manhattan, Brooklyn, Queens, The Hamptons, Westchester, Greenwich);
      **Contact Us** (100 Park Avenue, Suite 500 / New York, NY 10017 /
      (555) 234-5678 / info@prestigehomes.com — address element). Bottom bar:
      "© 2026 Prestige Homes. All rights reserved." + Privacy Policy, Terms
      of Service, Fair Housing links.
  12. Extras: dark-mode toggle (persists), smooth-scroll (`scroll-smooth` on
      html), `aria-label` on icon-only controls. Demo is a multi-page Astro
      site (Properties/Agents/About/Contact are real routes); our recreation
      is single-page — keep nav links as anchors to sections or `#`
      (Properties → #properties on the featured section etc.) so structure
      matches 1:1. Search form is client-side (GET to /properties is
      decorative); tab switch swaps the active `data-status` and hidden input.
- **Design tokens extracted from the demo CSS (`Base.C6er4gMe.css`, Tailwind
  v4 utilities — `--color-primary-*` scale):**
  - Brand primary (Tailwind **green** scale — put in `@theme` as
    `--color-primary-*`): **primary-50 #f0fdf4** (CTA banner text,
    button hover `hover:bg-primary-50`), **primary-100 #dcfce7** (feature
    icon chips, quote icons, CTA banner sub-text), **primary-500 #22c55e**
    ("Dream Home" accent in hero H1, focus borders, dark-mode link hovers),
    **primary-600 #16a34a** (primary buttons: nav CTA, active Buy tab,
    Search submit, badges; stat numbers; text links; hover states),
    **primary-700 #15803d** (button hovers, CTA banner background,
    link hover `hover:text-primary-700`).
  - Grays: **gray-50 #f9fafb** (alt section bg, select bg), **gray-100
    #f3f4f6** (social chip bg), **gray-200 #e5e7eb** (borders, select
    borders), **gray-300 #d1d5db**, **gray-400 #9ca3af** (hero stat labels,
    dark muted), **gray-500 #6b7280** (muted text), **gray-600 #4b5563**
    (body text), **gray-700 #374151**, **gray-800 #1f2937** (dark card bg),
    **gray-900 #111827** (hero bg, dark section bg, "New" badge),
    **gray-950 #030712** (darkest).
  - Font: **"Playfair Display"** (display serif, Google Fonts weights
    400/500/600/700 — H1/H2 headings, hero H1, CTA heading) + **"Inter"**
    (body, weights 400/500/600/700 — nav, body, buttons, labels, stats).
    Load via one Google Fonts `<link>` in `index.html`
    (`family=Inter:wght@400;500;600;700&family=Playfair+Display:
wght@400;500;600;700`).
  - Radii: **rounded-lg 0.5rem** (nav CTA, CTA banner buttons, price chip),
    **rounded-xl 0.75rem** (selects, Search submit, feature icon chips),
    **rounded-2xl 1rem** (search card, property cards, agent cards,
    testimonial cards), **rounded-full** (badges, agent photos).
  - Buttons/links: primary `bg-primary-600 text-white hover:bg-primary-700`
    with `rounded-lg` (nav) / `rounded-xl` (search) / `rounded-full`
    (badges); text links `text-sm font-semibold text-primary-600
hover:text-primary-700`; ghost on hero `bg-white/20 backdrop-blur-sm
hover:bg-white/30` (inactive tabs); outline on dark CTA `border-2
border-white/30 hover:bg-white/10`.
  - Section backgrounds: hero = photo `opacity-40` + `bg-gray-900` +
    `bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent`; stats
    strip `bg-white border-b border-gray-200 py-12`; body alternates
    `bg-white` / `bg-gray-50` with `py-20 lg:py-28` (dark: `dark:bg-gray-950`
    / `dark:bg-gray-900`); CTA banner `bg-primary-700`; footer
    `bg-gray-50 border-t border-gray-200` (dark: `dark:bg-gray-900`).
  - Cards: property/agent `rounded-2xl bg-white shadow-md hover:shadow-xl`
    (dark `dark:bg-gray-800`); testimonial `rounded-2xl bg-white shadow-md`
    or `bg-gray-50` (dark `dark:bg-gray-900`); section max-width
    `mx-auto max-w-7xl px-4 lg:px-8`.
- **Recreation decisions:** brand wordmark "Keyhaven" (lucide Building2 or
  Home icon) instead of "Prestige Homes" — copy may keep the same _kind_ of
  content with the new brand name ("Why Choose Keyhaven", "© 2026 Keyhaven.
  All rights reserved."). Agent emails/phones → placeholder values
  (`keyhaven@example.com`, `(555) 010-0100` style). Photos → seeded picsum
  (`picsum.photos/seed/keyhaven-<n>/<w>/<h>`: hero 1920×1080, property cards
  800×600, agent portraits 400×400, testimonial avatars 100×100). Icons →
  lucide-react (Building2, Home, Menu, X, Moon, Sun, MapPin, BedDouble,
  Bath, Ruler, Search, Phone, Mail, ArrowRight, Quote, ShieldCheck, Key,
  UserCheck, HandCoins? — brand social icons Facebook/Instagram/LinkedIn/
  YouTube are NOT in lucide-react → inline SVG paths like existing apps).
  Search form = client-side only (selects + tabs state; submit can be a
  decorative link or preventDefault — note in PR). No assets copied; brand
  green #16a34a in `@theme`.

Keyhaven lives in `apps/keyhaven` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the brand wordmark,
section links, a primary CTA, a dark-mode toggle and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Keyhaven page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Keyhaven" on the left
- **AND** SHALL show links for Properties, Agents, About and Contact
- **AND** SHALL show a "List Your Property" button on the right
- **AND** SHALL show a dark-mode toggle button

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible menu SHALL show the same nav links and CTA
- **AND** the toggle SHALL expose the menu state via aria-expanded

### Requirement: Hero section

The system SHALL render a full-height hero with a background photo, a dark
gradient overlay, a serif headline with a green accent phrase, a sub-paragraph
and quick stats.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Find Your Dream Home" with "Dream Home"
  in the brand green
- **AND** SHALL show the sub-paragraph about discovering luxury properties
- **AND** the background photo SHALL have a dark gradient overlay for
  legibility

#### Scenario: Hero quick stats

- **GIVEN** the hero is displayed
- **WHEN** the quick stats row is visible
- **THEN** it SHALL show three statistics: 500+ Properties Listed, $2B+
  Sales Volume and 15+ Years Experience

### Requirement: Search card

The system SHALL render a search card with Buy/Rent/Sell tabs, three selects
and a Search button.

#### Scenario: Search card content

- **GIVEN** the hero is displayed
- **WHEN** the search card is visible
- **THEN** it SHALL show tabs for Buy, Rent and Sell
- **AND** SHALL show selects for Location, Property Type and Price Range
- **AND** SHALL show a Search submit button

#### Scenario: Switching tabs

- **GIVEN** the search card is displayed
- **WHEN** the user activates the Rent or Sell tab
- **THEN** the active tab SHALL be highlighted with the brand background
- **AND** the hidden status value SHALL switch to for-rent or sell

### Requirement: Stats strip

The system SHALL render a white stats strip with four brand-green statistics.

#### Scenario: Stats strip content

- **GIVEN** the page is rendered
- **WHEN** the stats strip is displayed
- **THEN** it SHALL show four statistics: $2B+ Total Sales Volume, 500+
  Properties Sold, 15+ Years Experience and 98% Client Satisfaction
- **AND** each value SHALL be styled in the brand green

### Requirement: Featured properties section

The system SHALL render a "Featured Properties" section with four property
cards, each showing a photo, price, badges, location and features.

#### Scenario: Featured properties content

- **GIVEN** the page is rendered
- **WHEN** the featured section is displayed
- **THEN** it SHALL show the heading "Featured Properties"
- **AND** SHALL show a "View All Properties" link
- **AND** SHALL show four cards: Luxury Manhattan Penthouse ($8.5M), Modern
  Brooklyn Townhouse ($3.2M), Waterfront Hamptons Estate ($24.5M) and
  Tribeca Industrial Loft ($4.8M)

#### Scenario: Property card details

- **GIVEN** a property card is displayed
- **WHEN** the card is inspected
- **THEN** it SHALL show the price, the property name, the location and
  bed/bath/sqft features
- **AND** SHALL show a "For Sale" badge on every card
- **AND** the first card SHALL show an additional "New" badge and a
  horizontal layout on large screens

### Requirement: Why Choose section

The system SHALL render a "Why Choose Keyhaven" section with four feature
cards, each with an icon, title and description.

#### Scenario: Feature cards content

- **GIVEN** the page is rendered
- **WHEN** the why-choose section is displayed
- **THEN** it SHALL show the heading "Why Choose Keyhaven"
- **AND** SHALL show four cards titled Trusted Expertise, Exclusive
  Listings, Personal Service and Best Value
- **AND** each card SHALL show an icon chip, a title and a description

### Requirement: Agents section

The system SHALL render a "Meet Our Agents" section with three agent cards,
each with a photo, role, tagline, specialty tags and contact links.

#### Scenario: Agents content

- **GIVEN** the page is rendered
- **WHEN** the agents section is displayed
- **THEN** it SHALL show the heading "Meet Our Agents"
- **AND** SHALL show three agents: Sarah Mitchell (Senior Partner), Michael
  Chen (Senior Agent) and Jennifer Ross (Agent)
- **AND** SHALL show a "View All Agents" link

#### Scenario: Agent contact links

- **GIVEN** an agent card is displayed
- **WHEN** the card is inspected
- **THEN** it SHALL show Call and Email links for that agent

### Requirement: Testimonials section

The system SHALL render a "What Our Clients Say" section with at least three
testimonial cards, each with a quote, a referenced property, an avatar and an
author name/role.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "What Our Clients Say"
- **AND** SHALL show three quotes: David & Emma Thompson (Homeowners), Robert
  Chen (Investor) and Sofia Martinez (First-time Buyer)
- **AND** each card SHALL show the quote, a property line, an avatar, the
  author name and the role

### Requirement: CTA banner

The system SHALL render a brand-green CTA banner with a serif headline, a
sub-paragraph and two call-to-action buttons.

#### Scenario: CTA banner content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL show the heading "Ready to Find Your Dream Home?"
- **AND** SHALL show a "Browse Properties" button and a "Contact Us" button

### Requirement: Footer

The system SHALL render a footer with brand info, social links, quick links,
neighborhood links and contact details.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand blurb and four social icon links
- **AND** SHALL show Quick Links (Properties, Agents, About, Contact)
- **AND** SHALL show property/neighborhood links (For Sale, For Rent,
  Manhattan, Brooklyn, Queens, The Hamptons, Westchester, Greenwich)
- **AND** SHALL show the office address, phone and email
- **AND** SHALL show a copyright line with legal links

### Requirement: Dark mode

The system SHALL support a class-based dark mode that toggles `.dark` on the
document root and persists the choice.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** section backgrounds and cards SHALL switch to the dark variants

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner, a main
landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Keyhaven app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Keyhaven — Real Estate Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/keyhaven`
- [ ] `npm run lint` passes for `apps/keyhaven`
- [ ] `scripts/verify-app.sh keyhaven` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Navbar: wordmark, 4 links, "List Your Property" button, dark-mode
      toggle, mobile menu
- [ ] Hero: photo + gradient overlay, H1 with green "Dream Home", sub,
      quick stats (500+ / $2B+ / 15+)
- [ ] Search card: Buy/Rent/Sell tabs (active tab swaps), Location/Property
      Type/Price Range selects, Search button
- [ ] Stats strip: 4 green stats ($2B+, 500+, 15+, 98%)
- [ ] Featured Properties: 4 cards with price chip, badges (For Sale + New
      on first), location, bed/bath/sqft; first card horizontal on lg
- [ ] Why Choose: 4 icon feature cards (Trusted Expertise, Exclusive
      Listings, Personal Service, Best Value)
- [ ] Agents: 3 cards with photo, role, sales tagline, tags, Call/Email
      links, "View All Agents"
- [ ] Testimonials: 3 cards with quote, property line, avatar, name, role
- [ ] CTA banner: bg-primary-700, grid-pattern overlay, 2 buttons
      (Browse Properties / Contact Us)
- [ ] Footer: 4 columns (brand+socials, quick links, properties +
      neighborhoods, contact), copyright + legal links
- [ ] Dark mode toggles `.dark` and persists
- [ ] Placeholder images via seeded picsum (`seed/keyhaven-<n>/<w>/<h>`)
- [ ] No copied ColorLib assets; brand green #16a34a in `@theme`
