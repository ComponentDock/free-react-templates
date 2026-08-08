# Template: Sapor (Restaurant Template)

## Purpose

Sapor is a single-page restaurant landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Flavor 6" website template design (see TEMPLATES.md — THREE
copies: lines 144, 1781, 2913; mark ALL `[x]` when done), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Flavor 6" — restaurant template
  (source: https://colorlib.com/wp/template/flavor-6/).
- **Preview URL:** `https://preview.colorlib.com/theme/flavor-6/` returns
  HTTP 404 (confirmed 2026-08-08). The live rendered demo is hosted on
  Cloudflare Pages: `https://flavor-colorlib.pages.dev/` (HTTP 200, ~47 KB
  HTML; Astro stylesheet `/_astro/Base.DA4xZmk2.css` ~45 KB parsed for
  tokens). TEMPLATES.md screenshot (`flavor-template-1770211372273.jpg`,
  2400×1892) viewed in the browser; the pages.dev demo matches the
  screenshot 1:1 (same white fixed nav with fork-and-knife logo, dark
  dining-table photo hero, red "Reserve a Table" buttons, serif headings,
  "Welcome to La Tavola" uppercase tagline). The demo's brand is "La Tavola
  — Authentic Italian Cuisine"; the recreation renames the restaurant to
  "Sapor".
- **Visual design (from screenshot + live demo):** elegant, high-contrast
  Italian restaurant landing page. **Light theme** (no dark mode; only the
  reservation section uses a dark `bg-gray-900` band). White fixed header
  (`header.fixed.left-0.right-0.top-0.z-50.transition-all.duration-300`,
  `data-header` — transparent over the hero, solid on scroll) → full-viewport
  dark hero (`relative.min-h-[90vh].flex.items-center.justify-center.overflow-hidden`)
  with a darkened dining-table photo (`object-cover opacity-*`), centered
  white serif headline. Signature look: **red primary** (Tailwind red scale
  — `#dc2626` red-600 buttons, `#f87171` red-400 tagline, `#b91c1c` red-700
  hover), **Playfair Display serif headings** (`font-serif`) vs **Inter
  body**, `rounded-lg` buttons, `rounded-xl`/`rounded-2xl` cards, uppercase
  tracking-widest eyebrow labels, `data-animate="fade-in-up"` reveal
  animations (optional nicety — can be CSS-only).
- **Section order (1:1):**
  1. Header (`header.fixed...data-header`): brand left — fork-and-knife icon
     in a red-tinted badge + wordmark "La Tavola" in serif (`font-serif
text-xl font-bold`); center links `text-sm font-medium text-gray-600
hover:text-primary-600` — Home, Menu, About, Gallery, Contact (anchors
     to on-page sections); right: "Reserve a Table" button (`rounded-lg
bg-primary-600 px-5 py-2.5 font-medium text-white transition-colors
hover:bg-primary-700`); mobile hamburger (`rounded-lg p-2
text-gray-500 hover:bg-gray-100 lg:hidden`) opening a drawer with the
     same links + CTA.
  2. Hero (`section.relative.min-h-[90vh].flex.items-center.justify-center.overflow-hidden`):
     full-bleed background image (dining table photo, dark overlay so white
     text reads); centered `container.mx-auto.px-4.py-20.text-center.lg:px-8`:
     eyebrow tagline `span.mb-4.inline-block.font-medium.tracking-widest.text-primary-400.uppercase.text-sm`
     "Welcome to La Tavola"; H1 `font-serif text-5xl font-bold text-white
sm:text-6xl lg:text-7xl` "Authentic Italian Cuisine"; sub-paragraph
     "Experience the finest Italian traditions, crafted with love and
     served with passion since 1985."; two CTAs — "Reserve a Table"
     (`rounded-lg bg-primary-600 ... text-white hover:bg-primary-700`) and
     "View Our Menu" outline (`rounded-lg border-2 border-white/60
text-white hover:bg-white/10`); scroll-down arrow at the bottom center.
  3. About (`section.bg-white.py-20.lg:py-28`): H2 `font-serif text-3xl
font-bold text-gray-900 sm:text-4xl lg:text-5xl` "A Family Tradition
     of Excellence" + paragraphs ("For nearly four decades, La Tavola has
     been bringing the authentic flavors of Italy to our community… Founded
     by the Rossi family in 1985…"); stats row (`grid grid-cols-3`) — "40+
     Years of Excellence", "50K+ Happy Guests", "4.9 Star Rating" (big
     `font-serif` numbers + captions).
  4. Menu (`section.bg-gray-50.py-20.lg:py-28`): eyebrow "Our Menu" +
     H2 "Chef's Selections" + sub ("Discover our most beloved dishes,
     crafted with the finest ingredients and time-honored recipes."); grid
     of 4 dish cards (`rounded-xl`/`rounded-2xl` card, `bg-white`) —
     **Burrata** $18 ("Creamy burrata with prosciutto di Parma, arugula,
     and aged balsamic", "Chef's Pick" badge), **Spaghetti alla Carbonara**
     $24, **Branzino al Forno** $38, **Tiramisu** $12 — each with a dish
     photo, name `font-serif text-xl font-semibold`, description, price in
     the red accent, and a "Chef's Pick" pill on the featured card.
  5. Testimonials (`section.bg-white.py-20.lg:py-28`): H2 "Reviews &
     Testimonials"; 2+ testimonial cards with 5-star rating row, quote
     ("The best Italian food I've had outside of Italy…"), author name +
     role — Sarah M., Michael R. (avatars `h-12 w-12 rounded-full` optional).
  6. Reservation (`section.relative.overflow-hidden.bg-gray-900.py-20.lg:py-28`):
     the ONLY dark section — H2 `font-serif ... text-white` "Make a
     Reservation" + sub (white/gray-400); reservation form
     (`grid gap-4` fields): name (input), email (input), date (input),
     time (select), guests (select), phone (input), notes (textarea);
     submit button `w-full rounded-lg bg-primary-600 py-4 text-base
font-medium text-white shadow-lg shadow-primary-600/25 transition-all
hover:bg-primary-700` labeled "Request Reservation".
  7. Gallery (`section.bg-gray-50.py-20.lg:py-28`): H2 "A Glimpse of La
     Tavola"; image grid `mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3
xl:grid-cols-4` with alt-tagged photos (Elegant dining room, Fresh
     pasta dish, Italian wine selection, Restaurant interior — 8 tiles via
     picsum).
  8. Footer (`footer.bg-gray-900.text-white`): brand blurb "Authentic
     Italian Cuisine" + contact block — phone `(555) 123-4567`, email
     `reservations@latavola.com`, address "123 Main Street, San Francisco,
     CA 94102" + social icons; link column **Quick Links**; **Hours**
     column (`h3.text-sm.font-semibold.uppercase.tracking-wider`) — rows
     `li.flex.justify-between.text-sm` (Monday 5:00 PM – 10:00 PM, Friday
     5:00 PM – 11:00 PM, Saturday 12:00 PM – 11:00 PM, Sunday 12:00 PM –
     9:00 PM: weekday `text-gray-400`, times `text-white`); **Newsletter**
     column — "Subscribe" input + button (`rounded-lg bg-primary-600 px-5
py-2.5 font-medium text-white hover:bg-primary-700`); bottom bar
     "© 2026 …" + Privacy Policy / Terms of Service.
  9. Extras: fixed header with transparent→solid scroll state
     (`data-header` + `data-variant`), smooth scroll (`html class="scroll-smooth"`),
     `data-animate="fade-in-up"`/`data-delay` reveal attributes (CSS
     keyframes), mobile drawer. The demo is a multi-page Astro site
     (menu/about/gallery/contact are real routes); our recreation is
     single-page — keep nav links as anchors to the on-page sections
     (`#menu`, `#about`, `#gallery`, `#contact`) so the structure matches
     1:1.
- **Design tokens extracted from the demo CSS (`Base.DA4xZmk2.css`, Tailwind
  v4 utilities):**
  - Brand primary (**red** scale — put in `@theme` as `--color-primary-*`):
    **primary-100 #fee2e2** (hover/light tints), **primary-300 #fca5a5**,
    **primary-400 #f87171** (eyebrow tagline), **primary-500 #ef4444**,
    **primary-600 #dc2626** (buttons, prices), **primary-700 #b91c1c**
    (button hover), **primary-900 #7f1d1d**.
  - Grays (Tailwind default neutral): **gray-50 #f9fafb** (menu + gallery
    section bg), **gray-100 #f3f4f6** (hamburger hover), **gray-400 #9ca3af**
    (muted footer text), **gray-500 #6b7280**, **gray-600 #4b5563** (nav
    links), **gray-700 #374151**, **gray-800 #1f2937**, **gray-900 #111827**
    (reservation section + footer bg), **gray-950 #030712**.
  - Fonts (Google Fonts `<link>` in `index.html`):
    `family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap` —
    **Playfair Display** via `font-serif` for all headings, logo and big
    stat numbers; **Inter** for body, nav and buttons.
  - Radii: **rounded-lg** (all buttons, nav CTA, subscribe), **rounded-xl** /
    **rounded-2xl** (dish cards, testimonial cards), **rounded-full**
    (avatars, badges, logo icon badge).
  - Buttons: primary `rounded-lg bg-primary-600 px-5 py-2.5 font-medium
text-white transition-colors hover:bg-primary-700` (nav, hero, subscribe);
    hero secondary `rounded-lg border-2 border-white/60 text-white
hover:bg-white/10`; form submit `w-full rounded-lg bg-primary-600 py-4
text-base font-medium text-white shadow-lg shadow-primary-600/25
hover:bg-primary-700`; text links `text-sm font-medium text-gray-600
hover:text-primary-600`.
  - Section backgrounds: hero = photo + dark overlay (`bg-black/50`-style);
    body alternates `bg-white` (about, testimonials) / `bg-gray-50` (menu,
    gallery) with `py-20 lg:py-28`; reservation `bg-gray-900`; footer
    `bg-gray-900 text-white`. NO dark mode in this template (no `.dark`
    variants, `<html lang="en" class="scroll-smooth">`).
  - Container: `mx-auto max-w-7xl px-4 lg:px-8` (hero: `mx-auto px-4 py-20
text-center lg:px-8`).
- **Recreation decisions:** brand wordmark "Sapor" (lucide `UtensilsCrossed`
  or `ChefHat` icon) instead of "La Tavola"; copy keeps the same _kind_ of
  content (tagline, headline, history blurb, stats, dishes, testimonials,
  reservation form, hours). Photos → seeded picsum
  (`picsum.photos/seed/sapor-<n>/<w>/<h>`: hero 1920×1080, dish cards
  800×600, gallery tiles 800×600, avatars 100×100). Icons → lucide-react
  (UtensilsCrossed, Menu, X, Star, Phone, Mail, MapPin, Clock, ChevronDown,
  ArrowDown, Send); social icons → inline SVG (lucide has Twitter/Github/
  Linkedin). The demo's multi-page routes collapse to single-page anchors.
  No assets copied; brand red #dc2626 in `@theme`.

Sapor lives in `apps/sapor` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the brand wordmark,
section links, a "Reserve a Table" button and a mobile menu, switching from
transparent to solid on scroll.

#### Scenario: Navbar content

- **GIVEN** the Sapor page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Sapor" with a utensils icon
  on the left
- **AND** SHALL show links for Home, Menu, About, Gallery and Contact
- **AND** SHALL show a red "Reserve a Table" button on the right

#### Scenario: Scroll state

- **GIVEN** the page is at the top
- **WHEN** the user scrolls down
- **THEN** the header SHALL transition from transparent to a solid
  background

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible drawer SHALL show the same nav links and the CTA
- **AND** the toggle SHALL expose the menu state via aria-expanded

### Requirement: Hero section

The system SHALL render a full-viewport dark hero with a photo background, a
serif headline, a tagline, a sub-paragraph, two CTAs and a scroll arrow.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the uppercase red tagline "Welcome to Sapor"
- **AND** SHALL show the headline "Authentic Italian Cuisine" in white serif
  text over the dark photo background
- **AND** SHALL show the sub-paragraph about Italian traditions since 1985
- **AND** SHALL show a red "Reserve a Table" button and an outlined "View
  Our Menu" button
- **AND** SHALL show a scroll-down arrow at the bottom

### Requirement: About section

The system SHALL render a "A Family Tradition of Excellence" section with
history paragraphs and three statistics.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "A Family Tradition of Excellence"
- **AND** SHALL show the history paragraphs (founded 1985, Rossi family)
- **AND** SHALL show three stats: "40+ Years of Excellence", "50K+ Happy
  Guests" and "4.9 Star Rating"

### Requirement: Menu section

The system SHALL render a "Chef's Selections" section with four dish cards,
each showing a name, description, price and one featured badge.

#### Scenario: Menu content

- **GIVEN** the page is rendered
- **WHEN** the menu section is displayed
- **THEN** it SHALL show the eyebrow "Our Menu" and the heading "Chef's
  Selections"
- **AND** SHALL show four dishes: Burrata ($18), Spaghetti alla Carbonara
  ($24), Branzino al Forno ($38) and Tiramisu ($12)
- **AND** each card SHALL show a description and the price in the red accent
- **AND** the Burrata card SHALL show a "Chef's Pick" badge

### Requirement: Testimonials section

The system SHALL render a "Reviews & Testimonials" section with at least two
testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Reviews & Testimonials"
- **AND** SHALL show at least two testimonials with quotes, star ratings and
  author names (e.g. Sarah M., Michael R.)

### Requirement: Reservation section

The system SHALL render a dark "Make a Reservation" section with a
reservation form.

#### Scenario: Reservation content

- **GIVEN** the page is rendered
- **WHEN** the reservation section is displayed
- **THEN** it SHALL show the heading "Make a Reservation" in white serif on
  the gray-900 background
- **AND** SHALL show a form with name, email, date, time, guests, phone and
  notes fields
- **AND** SHALL show a "Request Reservation" submit button

### Requirement: Gallery section

The system SHALL render a "A Glimpse of Sapor" image gallery grid.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "A Glimpse of La Tavola"-style gallery
  heading
- **AND** SHALL show a responsive grid (2/3/4 columns) of at least eight
  image tiles with alt text

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, contact details,
Quick Links, opening Hours and a Newsletter signup.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand blurb, phone, email and address
- **AND** SHALL show a Quick Links column
- **AND** SHALL show an Hours column with the weekly schedule (weekday
  labels gray, times white)
- **AND** SHALL show a Newsletter input with a "Subscribe" red button
- **AND** SHALL show a copyright bar with Privacy Policy and Terms of
  Service links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner, a main
landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Sapor app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sapor — Restaurant Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/sapor`
- [ ] `npm run lint` passes for `apps/sapor`
- [ ] `scripts/verify-app.sh sapor` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Navbar: wordmark + icon, 5 links, red "Reserve a Table" button,
      transparent→solid on scroll, mobile drawer with aria-expanded
- [ ] Hero: min-h-90vh, photo bg + dark overlay, red uppercase tagline,
      serif "Authentic Italian Cuisine" headline, sub, 2 CTAs, scroll arrow
- [ ] About: "A Family Tradition of Excellence" + history + 3 stats
      (40+/50K+/4.9)
- [ ] Menu: "Chef's Selections" — 4 dish cards with price + "Chef's Pick"
      badge on Burrata
- [ ] Testimonials: "Reviews & Testimonials" — 2+ cards with stars/quotes
- [ ] Reservation: bg-gray-900, "Make a Reservation", full form (name,
      email, date, time, guests, phone, notes) + "Request Reservation"
- [ ] Gallery: responsive 2/3/4-col grid with 8+ alt-tagged tiles
- [ ] Footer: bg-gray-900, blurb + contact, Quick Links, Hours (gray
      weekdays / white times), Newsletter + Subscribe, copyright bar
- [ ] NO dark mode (light theme only; only reservation/footer are dark
      sections) — do not add a dark toggle
- [ ] Placeholder images via seeded picsum (`seed/sapor-<n>/<w>/<h>`)
- [ ] No copied ColorLib assets; brand red #dc2626 in `@theme`
