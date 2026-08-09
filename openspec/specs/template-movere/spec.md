# Template: Movere (Transportation / Moving Company)

## Purpose

Movere is a single-page moving-company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "SwiftMove" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

> NAMING NOTE: the ColorLib source name "Swiftmove" is FORBIDDEN as the app
> name (never reuse the source name). **Movere** (Latin: "to move") is the
> new, original name — single lowercase word, no collision with `apps/` or
> other spec folders (verified 2026-08-09). Source slug + preview URL are
> recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "SwiftMove" — moving & relocation company landing
  template (source: https://colorlib.com/wp/template/swiftmove/, "Astro" +
  "Tailwind CSS" + "Transportation" categories, published April 2026, CC BY
  3.0, author Aigars Silkalns). The demo's internal brand is "SwiftMove" —
  the recreation brands itself **Movere**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://swiftmove-colorlib.pages.dev/` (HTTP 200, ~97 KB HTML +
  `/_astro/Base.Ce97irTr.css` ~65 KB parsed for tokens; the official
  `https://preview.colorlib.com/theme/swiftmove/` returns 404 — the preview
  portal loads Astro-category demos from `<slug>-colorlib.pages.dev` (the
  LIVE PREVIEW link on the Colorlib page resolves to
  `https://preview.colorlib.com/#swiftmove`, whose iframe src is
  `https://swiftmove-colorlib.pages.dev/`), same pattern as
  Workhub→Deskly / Serenite→Sooth / Saasify→Zenith. The TEMPLATES.md
  screenshot (`swiftmove-template-1771943964825.jpg`, HTTP 200, viewed)
  matches the live demo: split hero, blue/white palette with orange CTA,
  stats row, moving-crew photo.
- **Visual design (screenshot + live render):** clean, modern, corporate
  yet approachable; white hero with a soft blue gradient (from-primary-50 to
  white), **blue primary** (#2563eb) + **orange accent** (#f97316) two-tone
  brand system; headline second line rendered as a blue→orange text
  gradient with a typewriter word rotation; pill badges with soft blue
  backgrounds; sticky translucent white navbar; stats row under the hero
  CTAs; light alternating sections (gray-50/white); gradient blue CTA band
  (primary-600 → primary-800); dark gray-900 footer. Full dark mode via
  `.dark` variants throughout.
- **Section order (1:1, verified from live DOM):**
  1. Sticky navbar (white/80 backdrop-blur, border-b, h-16 lg:h-20):
     "SwiftMove" logo + links About, Services, How It Works, Areas,
     Pricing, Testimonials, Quote, Blog, Contact + dark-mode toggle +
     "Free Quote" button (orange accent); mobile hamburger nav.
  2. Hero (`bg-gradient-to-b from-primary-50 to-white`): pill badge
     "Licensed & Insured in All 50 States" (border-primary-200,
     bg-primary-50, text-primary-700, check icon), h1 "Moving Made" +
     typewriter span rotating ["Fast & Reliable", "Safe & Secure",
     "Smooth & Easy"] in a blue→orange text gradient, blurb "From local
     moves to cross-country relocations...", CTAs "Get Free Quote" (blue
     solid) + "Call (555) 890-1234" (white outline with phone icon);
     stats row (25,000+ Moves Completed, 98% Satisfaction Rate, 15+ Years
     Experience, Same-Day Available); right side: moving-crew photo with
     "Fully Insured / All belongings protected" floating badge; decorative
     blurred circles (primary-200/50, accent-200/30) floating behind.
  3. Stats/About band (`border-y border-gray-200 bg-gray-50`): counters
     (Successful Moves, On-Time Rate, Trucks & Vehicles, Years Experience)
     with animated count-up on scroll.
  4. Services (`bg-gray-50`): "Moving Solutions for Every Need" — 6 cards
     (Local Moving, Long Distance, Commercial Moving, Packing Services,
     Storage Solutions, Specialty Items), each icon + title + blurb.
  5. How It Works (`bg-white`): "Your Move in 4 Easy Steps" — numbered
     steps 01 Request a Quote, 02 Schedule Your Move, 03 We Handle
     Everything, 04 Welcome Home.
  6. Service Areas (`bg-gray-50`): "We Move You Anywhere" — two columns:
     Local Moves (Chicago Metro, Milwaukee, Indianapolis, Detroit, St.
     Louis, Minneapolis — city photo + ~hr drive) and Long Distance
     (Chicago to NY/LA/Dallas/Denver/Atlanta/Miami — ~miles each).
  7. Pricing (`bg-white`): "Transparent, Honest Pricing" — 3 tiers:
     Studio / 1BR from $299, 2-3 Bedrooms from $599 (Most Popular — ring-2
     ring-primary-600 + floating pill badge), 4+ Bedrooms from $999; each
     with feature list + "Get Exact Quote"; disclaimer line under.
  8. Testimonials (`bg-gray-50`): "Trusted by Thousands of Families" —
     carousel (6 slides: Jennifer Martinez, Robert Chen, Amanda Foster,
     Brian & Kelly Adams, Patricia Nguyen, David Hoffman) with quote,
     avatar, name, move-type label; prev/next arrows + dot indicators.
  9. Free Quote form (`bg-white`): "Get Your Free Moving Quote" — fields
     Full Name*, Email*, Phone, Move Date (date picker), Moving From*,
     Moving To*, Home Size (select: Studio / 1-4+ Bedrooms), checkboxes
     (Packing & Unpacking, Storage, Piano / Specialty Items), Additional
     Details textarea, "Get Free Quote" submit; sidebar column with "Why
     Choose SwiftMove?", "Prefer to Call?" (555) 890-1234, Business Hours.
  10. FAQ (`bg-white`): "Frequently Asked Questions" — 5 accordion items
      (insurance, booking lead time, packing services, specialty items,
      storage) expanding on activation.
  11. CTA band (`bg-gradient-to-br from-primary-600 to-primary-800`):
      "Ready to Make Your Move?" + "Get Free Quote" / "Call Now" buttons;
      decorative blurred circles.
  12. Footer (`bg-gray-900 text-gray-300`): brand blurb + phone/email/
      address + social icons + SERVICES / COMPANY / SUPPORT link columns +
      legal row (Privacy Policy, Terms of Service, Style Guide).
- **Design tokens extracted from the live CSS + DOM (verified 2026-08-09):**
  - Brand colors — **primary (blue) scale** (Tailwind blue family):
    #eff6ff (50), #dbeafe (100), #bfdbfe (200), #60a5fa (400), #3b82f6
    (500), **#2563eb (600 primary)**, #1d4ed8 (700), #1e40af (800), #1e3a8a
    (900). Hero gradient from-primary-50 to white; CTA gradient
    from-primary-600 to-primary-800.
  - Brand colors — **accent (orange) scale** (Tailwind orange family):
    #fff7ed (50), #ffedd5 (100), #fed7aa (200), **#f97316 (500)**,
    #ea580c (600), #c2410c (700), #7c2d12 (900). Used for: "Free Quote"
    navbar CTA, headline text-gradient end, decorative circles, secondary
    hover states.
  - Headline gradient: `.text-gradient` = linear-gradient(to right in
    oklab, #2563eb → #f97316) with background-clip:text.
  - Neutrals: gray scale — #f9fafb (50), #f3f4f6 (100), #e5e7eb (200),
    #d1d5db (300), #9ca3af (400), #6b7280 (500), #4b5563 (600), #374151
    (700), #1f2937 (800), #111827 (900 body text), #030712 (950 dark bg).
  - Font: **"Outfit"** (`Outfit, system-ui, sans-serif`, weights 300–800)
    via Google Fonts (`family=Outfit:wght@300;400;500;600;700;800`).
  - Buttons: `.btn` = rounded-lg, px-5 py-2.5, text-sm font-medium,
    inline-flex, gap-2, transition-all. `.btn-primary` = bg #2563eb,
    white text, soft shadow tinted #2563eb40 (0 10px 15px -3px
    rgba(0,0,0,.1)). `.btn-secondary` = white bg, 1px #d1d5db border,
    #374151 text. Navbar CTA + hero secondary CTAs use accent orange for
    the primary action where the source shows it.
  - Shapes: rounded-lg buttons, rounded-xl/2xl cards, rounded-full pills
    (badges), pricing featured card `ring-2 ring-primary-600` +
    `shadow-soft`; sections alternate `bg-gray-50` / white with
    `py-20 lg:py-28`; section max-width container `mx-auto px-4 lg:px-8`.
  - Dark mode: `.dark` class on root with dark:bg-gray-900 / gray-950
    section backgrounds, dark:text-white headings, dark-mode toggle in
    navbar (persisted per repo pattern — window.localStorage + Storage
    polyfill).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/movere-<n>/<w>/<h>`); icons → lucide-react (Phone,
  Check, CheckCircle2, Truck, MapPin, Package, Warehouse, Piano, Shield,
  Star, ChevronDown, ChevronLeft, ChevronRight, Clock, Mail, ArrowRight,
  Menu, X, Quote); Outfit via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome. Brand text renames "SwiftMove" →
  "Movere" everywhere (logo wordmark, "Get Free Quote", "Why Choose
  Movere?"); heading copy stays same-kind, paraphrased where needed.
  Animated extras (typewriter headline, count-up stats, scroll-reveal,
  scroll-progress bar, preloader) are optional — implement the typewriter
  headline + count-up if cheap, otherwise static equivalents are
  acceptable; keep the FAQ accordion + testimonial carousel functional.

Movere lives in `apps/movere` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Movere",
anchor links to the page's sections, a "Free Quote" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Movere page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Movere" and links to
  Services and Pricing
- **AND** the navbar SHALL show a "Free Quote" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a badge, headline,
call-to-action buttons, a stats row, and a moving-crew photo.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a pill badge reading "Licensed & Insured in
  All 50 States" (paraphrased copy allowed)
- **AND** it SHALL contain a level-1 heading "Moving Made Fast & Reliable"
- **AND** it SHALL show "Get Free Quote" and "Call (555) 890-1234" buttons
- **AND** it SHALL show a stats row with four statistics (moves completed,
  satisfaction rate, years experience, same-day availability)

### Requirement: About stats band

The system SHALL render an about band with four animated counters.

#### Scenario: Counters content

- **GIVEN** the page is rendered
- **WHEN** the about band is displayed
- **THEN** it SHALL show four statistics (Successful Moves, On-Time Rate,
  Trucks & Vehicles, Years Experience)

### Requirement: Services section

The system SHALL render a services section with six cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Moving Solutions for Every Need"
- **AND** it SHALL show cards for Local Moving, Long Distance, Commercial
  Moving, Packing Services, Storage Solutions, and Specialty Items

### Requirement: How It Works section

The system SHALL render a four-step "How It Works" section.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "Your Move in 4 Easy Steps"
- **AND** it SHALL show numbered steps Request a Quote, Schedule Your
  Move, We Handle Everything, and Welcome Home

### Requirement: Service Areas section

The system SHALL render a service areas section with local and long-distance
destination lists.

#### Scenario: Areas content

- **GIVEN** the page is rendered
- **WHEN** the areas section is displayed
- **THEN** it SHALL contain a heading "We Move You Anywhere"
- **AND** it SHALL show a Local Moves list with at least three city entries
- **AND** it SHALL show a Long Distance list with at least three routes

### Requirement: Pricing section

The system SHALL render a pricing section with three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Transparent, Honest Pricing"
- **AND** it SHALL show tiers for Studio / 1BR, 2-3 Bedrooms, and 4+
  Bedrooms with prices $299, $599, and $999
- **AND** the 2-3 Bedrooms tier SHALL be highlighted as "Most Popular"

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Thousands of Families"
- **AND** it SHALL show at least three testimonial quotes with author names

#### Scenario: Carousel navigation

- **GIVEN** the testimonials section is displayed
- **WHEN** the user activates the next/previous control
- **THEN** the displayed testimonial SHALL change to the adjacent slide

### Requirement: Quote form section

The system SHALL render a quote form with contact fields, move details, and
service checkboxes.

#### Scenario: Quote form content

- **GIVEN** the page is rendered
- **WHEN** the quote section is displayed
- **THEN** it SHALL contain a heading "Get Your Free Moving Quote"
- **AND** it SHALL show required fields for Full Name, Email, Moving From,
  and Moving To
- **AND** it SHALL show a Home Size select and service checkboxes (Packing
  & Unpacking, Storage, Piano / Specialty Items)
- **AND** it SHALL show a "Get Free Quote" submit button

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least five question items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed

### Requirement: Call to action

The system SHALL render a closing CTA band with a headline and two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Make Your Move?"
- **AND** it SHALL show "Get Free Quote" and "Call Now" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (SERVICES, COMPANY, SUPPORT) and a
  copyright line
- **AND** it SHALL show the phone number, email address, and street address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Movere app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Movere — Moving Company Template"

## Verification checklist

- [ ] Section structure + order matches the source 1:1 (12 sections above)
- [ ] Brand blue scale in `@theme` (primary-600 #2563eb) + accent orange
      scale (accent-500 #f97316), used via Tailwind classes; headline
      text-gradient #2563eb → #f97316
- [ ] Outfit loaded via Google Fonts `<link>` in index.html
- [ ] Rounded buttons (rounded-lg), pill badges, rounded-2xl cards,
      featured pricing card ring-2 ring-primary-600, alternating
      gray-50/white sections, gradient CTA band, gray-900 footer
- [ ] Dark-mode toggle persists (window.localStorage + Storage polyfill
      per repo pattern); dark sections gray-900/950
- [ ] No copied assets: picsum.photos/seed/movere-<n> placeholders,
      lucide-react icons (socials via inline SVG per repo pattern)
- [ ] Brand renamed "SwiftMove" → "Movere" everywhere; document title
      "Movere — Moving Company Template"
- [ ] `scripts/verify-app.sh movere` green: typecheck + lint + vitest
      100% coverage + build
- [ ] Uses packages/ui (Button, ButtonLink, Badge, Card, cn) — knip-safe
- [ ] Spec validated: `npm run spec:validate`
