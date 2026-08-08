# Template: Haulio (Astro Template / Moving Services)

## Purpose

Haulio is a single-page moving & relocation services landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Swiftmove" website template design
(source: https://colorlib.com/wp/template/swiftmove/), built under a
DIFFERENT name (Haulio — a nod to hauling/moving) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-09): a stale prep existed at
> `openspec/specs/template-swiftmove/` (plus `docs/templates/swiftmove/`)
> using the FORBIDDEN ColorLib source name (folder == source slug); both
> were deleted and replaced by this fresh prep (new name Haulio), matching
> the Shieldguard→Coverly / Serenity→Hush / Solarshift→Helios /
> Solestyle→Treadly / Sparkleclean→Gleam precedent. The stale prep's
> research was re-verified against the live demo (fresh DOM + CSS fetch on
> 2026-08-09) and is recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Swiftmove" — moving / relocation services landing
  template (source: https://colorlib.com/wp/template/swiftmove/, "Astro"
  category). The demo's internal brand is "SwiftMove" — the recreation
  brands itself **Haulio** instead, but keeps the same section structure
  and copy kinds.
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/swiftmove/`) returns 404; the
  ColorLib preview portal loads demos from `<slug>-colorlib.pages.dev`
  (confirmed via `preview.colorlib.com/assets/js/products.js`). Live demo
  fetched at `https://swiftmove-colorlib.pages.dev/` (HTTP 200, ~97 KB
  HTML + `/_astro/Base.Ce97irTr.css` ~65 KB parsed for tokens). The
  TEMPLATES.md screenshot (`swiftmove-template-1771943964825.jpg`) matches
  the live demo: light theme, blue/orange moving-company site, hero with
  two CTAs, truck imagery.
- **Section order (1:1, from live demo DOM):**
  1. Navbar (sticky, white/80 blur, border-b): "SwiftMove" logo + links
     About, Services, How It Works, Areas, Pricing, Testimonials, Quote,
     Blog, Contact; "Free Quote" pill button (primary blue); mobile
     hamburger menu.
  2. Hero (light, `from-primary-50` → white gradient): H1 "Moving Made
     Simple & Stress-Free", blurb, buttons "Get Free Quote" (primary
     blue) + "Call (555) 890-1234" (outlined with phone icon).
  3. Services (`id="services"`): heading "Moving Solutions for Every
     Need" + blurb; 6 cards (icon + title + blurb): Local Moving, Long
     Distance, Commercial Moving, Packing Services, Storage Solutions,
     Specialty Items.
  4. How It Works (`id="how-it-works"`): heading "Your Move in 4 Easy
     Steps"; 4 numbered steps: Request a Quote, Schedule Your Move, We
     Handle Everything, Welcome Home.
  5. Areas (`id="areas"`): heading "We Move You Anywhere"; two area
     cards — Local Moves, Long Distance (coverage blurb + link).
  6. Pricing (`id="pricing"`): heading "Transparent, Honest Pricing" +
     blurb; 3 plan cards: Studio / 1BR, 2-3 Bedrooms, 4+ Bedrooms (price
     - feature list + CTA button).
  7. Testimonials (`id="testimonials"`): heading "Trusted by Thousands of
     Families" + blurb; quote cards (initials avatar, quote, name/role).
  8. Quote (`id="quote"`): heading "Get Your Free Moving Quote" — form
     (Name placeholder "John Smith", Email "john@example.com", Phone
     "(555) 000-0000", "City or ZIP code", submit button) on one side;
     "Why Choose SwiftMove?" feature list + "Prefer to Call?" card
     (phone "(555) 890-1234" + Business Hours) on the other.
  9. FAQ (`id="faq"`): heading "Frequently Asked Questions" + accordion
     (5+ items).
  10. CTA band (dark): "Ready to Make Your Move?" + blurb + CTA buttons.
  11. Footer (dark): "SwiftMove" brand + blurb; link columns (About Us,
      Services, Contact Us, …); contact info (email
      info@swiftmove.com → info@haulio.com, phone (555) 890-1234);
      copyright + Privacy Policy, Terms, Style Guide links.
  - Extras: skip-to-content link, mobile hamburger (`aria-expanded`),
    scroll-reveal animations, back-to-top floating button (fixed
    bottom-right, `rounded-full bg-primary-600`).
- **Design tokens extracted from `Base.Ce97irTr.css` + DOM (verified
  2026-08-09):**
  - Brand color: **blue scale** — primary 600 `#2563eb` (buttons, links,
    active states), 500 `#3b82f6`, 400 `#60a5fa` (light text on dark),
    700 `#1d4ed8` (hover), 800 `#1e40af`, 900 `#1e3a8a` (dark bands),
    100 `#dbeafe` (icon chips), 50 `#eff6ff` (hero tint).
  - Accent: **orange scale** — accent 500 `#f97316` (callout highlights,
    badges), 600 `#ea580c` (hover), 900 `#7c2d12` (dark accents),
    50 `#fff7ed`.
  - Neutrals: gray-950 `#030712`, gray-900 `#111827` (dark text/footer),
    gray-800 `#1f2937` (dark bands), gray-700 `#374151`, gray-600
    `#4b5563`, gray-500 `#6b7280` (muted text), gray-300 `#d1d5db`
    (borders), gray-200 `#e5e7eb`, gray-100 `#f3f4f6`, gray-50 `#f9fafb`
    (light section alternates).
  - Fonts: **"Outfit"** (single family) via Google Fonts
    (`font-family: Outfit, system-ui, sans-serif`).
  - Shapes: primary CTAs `rounded-lg` `bg-primary-600` with
    `hover:bg-primary-700`; nav "Free Quote" pill (`rounded-full`);
    badges `rounded-full`; cards `rounded-xl`/`rounded-2xl`; inputs
    `rounded-lg` with `border-gray-300` + blue focus ring; section
    padding `py-16`/`py-20` rhythm; dark sections
    gray-800/gray-900 + primary-900/accent-900 bands.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/haulio-<n>/<w>/<h>`); icons → lucide-react
  (Truck, Home, Building2, Package, Warehouse, Sparkles, Phone,
  ChevronDown, MapPin, Clock, Mail, Menu, ArrowUp, Star, Quote,
  Plus/Minus, Check); Outfit via Google Fonts; repo-standard Navbar +
  Footer chrome; brand text renames "SwiftMove"/"Swiftmove" → "Haulio"
  everywhere (logo, copy, copyright, email).

Haulio lives in `apps/haulio` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Haulio", anchor links, a "Free Quote" CTA, and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Haulio page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Haulio" and links to
  About, Services, How It Works, Areas, Pricing, Testimonials, Quote,
  Blog, and Contact
- **AND** the navbar SHALL show a "Free Quote" button

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a hero with a headline, blurb, and two CTAs.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Moving Made Simple &
  Stress-Free"
- **AND** it SHALL show a short blurb about the moving service
- **AND** it SHALL show buttons "Get Free Quote" and a call button with
  a phone number

### Requirement: Services section

The system SHALL render a services grid with six service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the Services section is displayed
- **THEN** it SHALL contain a heading "Moving Solutions for Every Need"
- **AND** it SHALL show cards for Local Moving, Long Distance, Commercial
  Moving, Packing Services, Storage Solutions, and Specialty Items
- **AND** each card SHALL show an icon, a title, and a short blurb

### Requirement: How It Works section

The system SHALL render a four-step "How It Works" section.

#### Scenario: Steps

- **GIVEN** the page is rendered
- **WHEN** the How It Works section is displayed
- **THEN** it SHALL contain a heading "Your Move in 4 Easy Steps"
- **AND** it SHALL show four numbered steps: Request a Quote, Schedule
  Your Move, We Handle Everything, and Welcome Home

### Requirement: Areas section

The system SHALL render an areas section with local and long-distance
moving cards.

#### Scenario: Area cards

- **GIVEN** the page is rendered
- **WHEN** the Areas section is displayed
- **THEN** it SHALL contain a heading "We Move You Anywhere"
- **AND** it SHALL show cards for Local Moves and Long Distance, each
  with a coverage blurb and a link

### Requirement: Pricing section

The system SHALL render a pricing section with three plan cards.

#### Scenario: Plan cards

- **GIVEN** the page is rendered
- **WHEN** the Pricing section is displayed
- **THEN** it SHALL contain a heading "Transparent, Honest Pricing"
- **AND** it SHALL show cards for Studio / 1BR, 2-3 Bedrooms, and
  4+ Bedrooms
- **AND** each card SHALL show a name, a price, a feature list, and a
  CTA button

### Requirement: Testimonials section

The system SHALL render a testimonials section with quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Thousands of Families"
- **AND** it SHALL show at least three quote cards, each with an
  avatar/initials, a quote, and a name + role

### Requirement: Quote section

The system SHALL render a quote section with a free-quote form and a
"why choose us" / contact panel.

#### Scenario: Quote form

- **GIVEN** the page is rendered
- **WHEN** the quote section is displayed
- **THEN** it SHALL contain a heading "Get Your Free Moving Quote"
- **AND** it SHALL show a form with Name, Email, Phone, and City or ZIP
  code fields
- **AND** it SHALL show a submit button for requesting the quote

#### Scenario: Why-choose panel

- **GIVEN** the quote section is displayed
- **WHEN** the page loads
- **THEN** it SHALL show a "Why Choose Haulio?" feature list
- **AND** it SHALL show a "Prefer to Call?" card with a phone number and
  business hours

### Requirement: FAQ section

The system SHALL render an FAQ accordion with expandable questions.

#### Scenario: FAQ accordion

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least four questions with answers
- **AND** pressing a question SHALL expand/collapse its answer

### Requirement: CTA band

The system SHALL render a closing CTA band.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Ready to Make Your Move?"
- **AND** it SHALL show a short blurb and CTA buttons

### Requirement: Footer

The system SHALL render a dark footer with brand blurb, link columns,
contact info, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Haulio" brand and a blurb
- **AND** it SHALL show link columns (About Us, Services, Contact Us)
- **AND** it SHALL show contact info (email, phone)
- **AND** it SHALL show a copyright line with Privacy Policy and Terms
  links

### Requirement: Page chrome and accessibility

The system SHALL render standard page chrome: landmarks, skip link, and a
back-to-top control.

#### Scenario: Document and landmarks

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** the Header SHALL be in the `banner` landmark, the main content
  in the `main` landmark, and the Footer in the `contentinfo` landmark
- **AND** the document title SHALL be "Haulio — Moving Services"
- **AND** a skip-to-content link SHALL be available

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user presses the back-to-top button
- **THEN** the page SHALL scroll back to the top

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh haulio` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero, services, how it
      works, areas, pricing, testimonials, quote, FAQ, CTA band, footer)
- [ ] Design tokens in `@theme`: brand blue `#2563eb` (+ scale #3b82f6,
      #60a5fa, #1d4ed8, #1e40af, #1e3a8a, #dbeafe, #eff6ff), accent
      orange `#f97316` (+ #ea580c, #7c2d12, #fff7ed), gray neutrals incl.
      #030712, #111827, #1f2937, #d1d5db, #f9fafb
- [ ] Fonts: Outfit via Google Fonts
- [ ] Buttons: primary blue `rounded-lg` (`hover:bg-primary-700`); nav
      "Free Quote" pill (`rounded-full`); inputs `rounded-lg` with
      gray-300 border + blue focus ring; cards `rounded-xl`/`rounded-2xl`;
      section padding py-16/py-20
- [ ] Dark bands: gray-800/gray-900 + primary-900/accent-900 sections;
      footer on gray-950; light sections alternate white/gray-50/
      primary-50
- [ ] FAQ accordion expands/collapses answers
- [ ] Mobile menu toggles with `aria-expanded`; back-to-top button
      scrolls to top
- [ ] Placeholder images seeded (`picsum.photos/seed/haulio-<n>/<w>/<h>`);
      no copied assets; brand renamed "SwiftMove" → "Haulio" everywhere
      (incl. email + copyright)
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge
      URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
