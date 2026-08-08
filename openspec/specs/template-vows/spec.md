# Template: Vows (Wedding Planner Template)

## Purpose

Vows is a single-page wedding planner landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Forever Always" website template design (see TEMPLATES.md —
THREE copies: lines 145, 2914, 3096; mark ALL `[x]` when done), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Forever & Always" — wedding planner / wedding
  website template (source: https://colorlib.com/wp/template/forever-always/).
- **Preview URL:** `https://preview.colorlib.com/theme/forever-always/`
  returns HTTP 404 (confirmed 2026-08-08). The live rendered demo is hosted
  on Cloudflare Pages: `https://foreveralways-colorlib.pages.dev/` (HTTP 200,
  ~84 KB HTML; Astro stylesheet `/_astro/Base.BBoypNgN.css` ~63 KB parsed for
  tokens). TEMPLATES.md screenshot (`foreveralways-template-1771943944925.jpg`,
  2400×1892) viewed in the browser: soft blush-pink hero gradient, centered
  serif headline "Your Dream Wedding Begins Here", rose pill buttons
  ("Start Planning" solid rose / "View Our Work" outlined), stats row
  (500+ Weddings · 12 Years · 5-Star Rated), large rounded moody bride photo
  below. The demo's brand is "Forever & Always"; the recreation renames the
  studio to "Vows".
- **Visual design (from screenshot + live demo):** elegant, romantic wedding
  planner landing page. **Light theme with a dark-mode toggle** (the demo is
  a full Tailwind `dark:` variant site — every section has `dark:bg-gray-950`
  / `dark:bg-gray-900` counterparts and the header carries a theme toggle).
  Signature look: **rose brand scale** (`primary-600 #e11d48` buttons, links,
  highlights; `primary-50 #fff1f2` soft hero gradient + secondary pills),
  **Playfair Display serif headings** vs **Lora body**, **pill
  (rounded-full) buttons and newsletter input**, `rounded-xl`/`rounded-2xl`
  cards, uppercase tracking-widest eyebrow labels, soft blurred floating
  circles (`animate-hero-float`) behind the hero, count-up stats band
  (`data-count` targets rendered as 0 in static HTML — animate on scroll),
  and a gradient rose CTA band (`from-primary-600 to-primary-800`).
- **Section order (1:1):**
  1. Header (`header` sticky): brand left — logo icon + wordmark "Vows" in
     serif; center links `text-sm font-medium text-gray-600
hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400` —
     Services, Portfolio, About, Packages, Testimonials, Blog, Gallery,
     Contact (anchors to on-page sections; Blog is decorative dead link);
     right: "Start Planning" pill CTA (`rounded-full bg-primary-600 px-5
py-2.5 font-medium text-white transition-colors hover:bg-primary-700`)
     - dark-mode toggle; mobile hamburger opening a drawer with the same
       links + CTA.
  2. Hero (`section.relative.overflow-hidden.bg-gradient-to-b
from-primary-50 to-white dark:from-gray-900 dark:to-gray-950`):
     centered `container.mx-auto.px-4.py-20.text-center lg:px-8`; floating
     blurred circles behind (`animate-hero-float` primary-100/60,
     primary-50/80, accent-100/40 — decorative, `pointer-events-none`);
     rose eyebrow/ampersand mark; H1 `font-serif` "Your Dream Wedding Begins
     Here"; sub-paragraph ("We craft unforgettable celebrations filled with
     elegance, romance, and every magical detail you have ever imagined. Let
     us turn your love story into an extraordinary day."); two CTAs —
     "Start Planning" (solid rose pill) and "View Our Work" (outline pill:
     `rounded-full border border-gray-300 bg-white text-gray-700
hover:border-primary-600 hover:text-primary-600`-style); stats row
     (grid 3 cols): **500+ Weddings**, **12 Years**, **5-Star Rated**
     (serif numbers + gray captions).
  3. Stats band (`section.border-y.border-gray-200.bg-gray-50.py-16.lg:py-20
dark:border-gray-800.dark:bg-gray-900`): 4 animated count-up stats —
     "Weddings Planned", "Years Experience", "Happy Couples", "Venue
     Partners" (static HTML shows 0 — the real values animate in via JS;
     recreation may render the target values directly or animate with a
     small IntersectionObserver; count-up is optional nicety).
  4. Services (`section#services.bg-white.py-20.lg:py-28
dark:bg-gray-950`): eyebrow "What We Do" + H2 "Our Services" + sub
     ("From intimate elopements to grand celebrations, we offer comprehensive
     wedding planning services tailored to bring your unique vision to
     life."); grid of 6 cards — **Full Planning**, **Day-of Coordination**,
     **Design & Decor**, **Venue Selection**, **Catering & Cake**,
     **Entertainment** (icon + serif card title + description).
  5. Portfolio (`section#portfolio.bg-gray-50.py-20.lg:py-28
dark:bg-gray-900`): eyebrow "Our Work" + H2 "Our Portfolio" + sub;
     grid of 6 couple cards (photo + names + venue line): **Sarah &
     Michael** — The Grand Estate, Napa Valley; **Emma & James** — Seaside
     Chapel, Malibu; **Olivia & William** — Botanical Gardens, Charleston;
     **Grace & Thomas** — Historic Mansion, Savannah; **Isabella &
     Alexander** — Vineyard Estate, Sonoma; **Charlotte & Benjamin** —
     Lakeside Resort, Lake Como.
  6. Venue Transformations (`section#results.bg-white.py-20.lg:py-28
dark:bg-gray-950`): eyebrow "Venue Styling" + H2 "Venue
     Transformations" + sub; before/after card pairs — **Ceremony Setup**,
     **Reception Design** — each card shows the image with a
     `rounded-full bg-black/60 px-3 py-1 text-xs text-white` "Before"/"After"
     badge label at top corners.
  7. Meet Your Planner (`section#about.bg-white.py-20.lg:py-28
dark:bg-gray-950`): eyebrow "About Us" + H2 "Meet Your Planner";
     planner profile — portrait photo + name "Isabella Sterling" + bio
     ("With over twelve years of experience creating breathtaking
     celebrations…") + credentials line ("Featured in Vogue Weddings, Martha
     Stewart Weddings, and Brides Magazine") + philosophy blurb.
  8. Wedding Packages (`section#packages.bg-gray-50.py-20.lg:py-28
dark:bg-gray-900`): eyebrow "Investment" + H2 "Wedding Packages" + sub
     ("Choose the level of planning support that fits your needs. Every
     package is customizable to match your unique vision."); 3 pricing
     cards:
     - **Intimate** — $3,500 one-time investment, "Up to 50 guests",
       features: Day-of coordination, Basic decor consultation, Vendor
       coordination, Full event design, Rehearsal dinner planning → "Inquire"
       button.
     - **Classic** — $7,500, "Up to 150 guests", "Most Popular" badge
       (`absolute -top-4 left-1/2 -translate-x-1/2 rounded-full
bg-primary-600 px-4 py-1 text-sm font-medium text-white`), features:
       Partial planning & design, Custom design concept, Venue search
       assistance, Rehearsal dinner coordination, Honeymoon planning →
       "Inquire" (primary pill).
     - **Grand** — $15,000, "Unlimited guests", features: Full planning,
       ... (multi-day celebration extras) → "Inquire".
  9. Testimonials (`section#testimonials.bg-white.py-20.lg:py-28
dark:bg-gray-950`): eyebrow "Love Letters" + H2 "What Our Couples Say"
     - sub ("The greatest reward is hearing from our couples after their
       special day."); 3+ cards — 5-star row, quote, author + date
       ("Sarah & Michael — June 2025 Wedding", "Emma & James — September 2024
       Wedding", "Isabella & Alexander — …").
  10. FAQ (`section#faq.bg-white.py-20.lg:py-28 dark:bg-gray-950`): eyebrow
      "FAQ" + H2 "Frequently Asked Questions" + sub; accordion (buttons with
      aria-expanded) — 5 Q&As: **How far in advance should we book?**
      (recommend 12–18 months, peak season May–October; as little as 3
      months for small celebrations), **What is your pricing structure?**
      (tiered packages from partial planning to full-service; detailed
      proposal after consultation), **Do you travel for destination
      weddings?** (yes, across the country and internationally; travel fees
      by location/duration), **How involved will we be in the planning?**
      (as much or as little as they'd like; adapts to preferences), **What
      happens if it rains on our outdoor wedding?** (rain contingency plan:
      backup indoor options, tenting, vendor coordination).
  11. Contact CTA (`section#contact.relative.overflow-hidden
bg-gradient-to-br.from-primary-600.to-primary-800.py-20.lg:py-28`):
      decorative white/10 blur circles; H2 white serif "Let's Create Your
      Perfect Day" + sub ("Schedule your complimentary consultation and let
      us begin crafting a celebration as unique and beautiful as your love
      story."); buttons — "Schedule Consultation" (white pill:
      `rounded-full bg-white text-primary-700 hover:bg-gray-100`) and
      "Call Us" (outline white pill: `rounded-full border border-white/60
text-white hover:bg-white/10`).
  12. Footer (`footer.bg-gray-900.text-gray-400`-style): brand blurb "Vows —
      Crafting unforgettable wedding experiences with elegance, passion, and
      meticulous attention to every detail."; link columns — **Services**
      (Full Planning, Day-of Coordination, Design & Decor, Venue Selection),
      **Information** (FAQ, Testimonials, Press, Blog), **Connect**
      (Instagram, Pinterest, Contact); **Mailing List** "Stay Inspired" —
      newsletter email input + "Subscribe" pill button; bottom bar
      "© 2026 Vows. All rights reserved." + Privacy Policy, Terms of
      Service, Style Guide.
- **Design tokens extracted from the demo CSS (`Base.BBoypNgN.css`, Tailwind
  v4 utilities):**
  - Brand primary (**rose** scale — put in `@theme` as `--color-primary-*`):
    **primary-50 #fff1f2** (hero gradient, secondary pill bg),
    **primary-100 #ffe4e6** (hero blur circle, secondary pill hover),
    **primary-200 #fecdd3**, **primary-300 #fda4af**, **primary-400 #fb7185**,
    **primary-500 #f43f5e**, **primary-600 #e11d48** (buttons, badges, links,
    gradient CTA band start), **primary-700 #be123c** (button hover),
    **primary-800 #9f1239** (gradient CTA band end), **primary-900 #881337**
    (dark-mode accent tint), **primary-950 #82181a**.
  - Grays (Tailwind default): **gray-50 #f9fafb** (stats band + portfolio +
    packages bg), **gray-100 #f3f4f6**, **gray-200 #e5e7eb** (stats band
    border), **gray-300 #d1d5db** (outline borders), **gray-400 #9ca3af**,
    **gray-500 #6b7280**, **gray-600 #4b5563** (nav links), **gray-700
    #374151**, **gray-800 #1f2937**, **gray-900 #111827** (footer bg, dark
    sections), **gray-950 #030712** (dark mode body bg).
  - Fonts (Google Fonts `<link>` in `index.html`):
    `family=Playfair+Display:wght@400;500;600;700;800&family=Lora:wght@400;500;600;700&display=swap` —
    **Playfair Display** for all headings, logo, stat numbers, planner name,
    card titles; **Lora** for body text, nav, buttons.
  - Radii: **rounded-full** (all buttons, newsletter input, badges,
    before/after labels, "Most Popular" pill), **rounded-xl** (portfolio +
    transformation cards), **rounded-2xl** (services/testimonial/package
    cards, planner portrait).
  - Buttons: primary `rounded-full bg-primary-600 px-5 py-2.5 font-medium
text-white transition-colors hover:bg-primary-700` (header CTA, hero
    "Start Planning", package "Inquire" full-width `block w-full ... py-3`),
    hero secondary `rounded-full border border-gray-300 bg-white text-gray-700
hover:border-primary-600 hover:text-primary-600`, soft secondary
    `rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100`
    (dark:bg-primary-900/30 dark:text-primary-400), CTA band white pill
    `rounded-full bg-white text-primary-700 hover:bg-gray-100`, CTA band
    outline `rounded-full border border-white/60 text-white
hover:bg-white/10`; newsletter submit `rounded-full bg-primary-600 px-5
py-2.5 font-medium text-white hover:bg-primary-700`.
  - Section backgrounds: hero `bg-gradient-to-b from-primary-50 to-white`
    (dark: from-gray-900 to-gray-950); stats band `bg-gray-50 border-y
border-gray-200`; body alternates `bg-white` (services, results, about,
    testimonials, faq) / `bg-gray-50` (portfolio, packages); contact CTA
    `bg-gradient-to-br from-primary-600 to-primary-800`; footer dark
    `bg-gray-900` (dark mode: sections flip to `dark:bg-gray-950` /
    `dark:bg-gray-900`, body `dark:bg-gray-950`).
  - Container: `mx-auto max-w-7xl px-4 lg:px-8` (hero: `mx-auto px-4 py-20
text-center lg:px-8`).
  - DARK MODE: this template HAS dark variants throughout (`.dark` class on
    `<html>`, toggle in header, every section has dark: counterparts) — the
    repo-standard dark toggle must be included, unlike light-only templates.
- **Recreation decisions:** brand wordmark "Vows" (lucide `Heart` or
  `Sparkles` icon in a rose badge) instead of "Forever & Always"; copy keeps
  the same _kind_ of content (headline, sub, services, portfolio couples +
  venues, packages + prices, testimonials + dates, FAQ Q&As, CTA, footer
  columns, newsletter). Photos → seeded picsum
  (`picsum.photos/seed/vows-<n>/<w>/<h>`: hero 1920×1080, services 800×600,
  portfolio 800×600, transformations 800×600, planner portrait 600×750,
  testimonial avatars 100×100). Icons → lucide-react (Heart, Sparkles, Menu,
  X, Sun, Moon, Star, Check, Phone, Mail, MapPin, ChevronDown, ArrowRight,
  Send); social icons → inline SVG or lucide. Blog nav link is a decorative
  dead anchor (no section on page) — keep it as a link matching the demo.
  Count-up stats: render target values (500+, 12, 5-star) directly; the
  IntersectionObserver count-up is an optional nicety. No assets copied;
  brand rose #e11d48 in `@theme`.

Vows lives in `apps/vows` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the brand wordmark,
section links, a "Start Planning" button, a dark-mode toggle and a mobile
drawer menu.

#### Scenario: Navbar content

- **GIVEN** the Vows page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Vows" with a heart/sparkles
  icon on the left
- **AND** SHALL show links for Services, Portfolio, About, Packages,
  Testimonials, Blog, Gallery and Contact
- **AND** SHALL show a rose pill "Start Planning" button on the right

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible drawer SHALL show the same nav links and the CTA
- **AND** the toggle SHALL expose the menu state via aria-expanded

### Requirement: Hero section

The system SHALL render a centered hero on a blush gradient background with a
serif headline, a sub-paragraph, two CTAs and a stats row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the serif headline "Your Dream Wedding Begins Here"
- **AND** SHALL show the sub-paragraph about crafting unforgettable
  celebrations
- **AND** SHALL show a solid rose "Start Planning" button and an outlined
  "View Our Work" button
- **AND** SHALL show the stats row: "500+ Weddings", "12 Years" and
  "5-Star Rated"

### Requirement: Stats band

The system SHALL render a bordered gray stats band with four animated
statistics.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show the statistics "Weddings Planned", "Years
  Experience", "Happy Couples" and "Venue Partners" with numeric values

### Requirement: Services section

The system SHALL render a "Our Services" section with six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the eyebrow "What We Do" and the heading "Our
  Services"
- **AND** SHALL show six cards: Full Planning, Day-of Coordination, Design &
  Decor, Venue Selection, Catering & Cake and Entertainment

### Requirement: Portfolio section

The system SHALL render a "Our Portfolio" section with six couple cards.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show the eyebrow "Our Work" and the heading "Our
  Portfolio"
- **AND** SHALL show six couple cards (e.g. "Sarah & Michael" — The Grand
  Estate, Napa Valley) each with names and a venue line

### Requirement: Venue Transformations section

The system SHALL render a "Venue Transformations" section with before/after
image cards.

#### Scenario: Transformations content

- **GIVEN** the page is rendered
- **WHEN** the venue transformations section is displayed
- **THEN** it SHALL show the eyebrow "Venue Styling" and the heading "Venue
  Transformations"
- **AND** SHALL show at least two before/after card pairs (e.g. Ceremony
  Setup, Reception Design) with "Before" and "After" badges

### Requirement: Meet Your Planner section

The system SHALL render a "Meet Your Planner" section with a planner profile.

#### Scenario: Planner content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the eyebrow "About Us" and the heading "Meet Your
  Planner"
- **AND** SHALL show the planner's portrait, name, bio and credentials

### Requirement: Wedding Packages section

The system SHALL render a "Wedding Packages" section with three pricing
cards.

#### Scenario: Packages content

- **GIVEN** the page is rendered
- **WHEN** the packages section is displayed
- **THEN** it SHALL show the eyebrow "Investment" and the heading "Wedding
  Packages"
- **AND** SHALL show three packages: Intimate ($3,500), Classic ($7,500) and
  Grand ($15,000)
- **AND** the Classic card SHALL show a "Most Popular" badge and the primary
  "Inquire" button
- **AND** each card SHALL list its features and an "Inquire" button

### Requirement: Testimonials section

The system SHALL render a "What Our Couples Say" section with at least three
testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the eyebrow "Love Letters" and the heading "What Our
  Couples Say"
- **AND** SHALL show at least three testimonials with star ratings, quotes,
  author names and wedding dates

### Requirement: FAQ section

The system SHALL render a "Frequently Asked Questions" accordion with five
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the heading "Frequently Asked Questions"
- **AND** SHALL show five question buttons (booking advance, pricing
  structure, destination weddings, involvement level, rain plan)
- **AND** each question SHALL expand to reveal its answer with the state
  exposed via aria-expanded

### Requirement: Contact CTA section

The system SHALL render a rose gradient call-to-action band with two buttons.

#### Scenario: Contact CTA content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Let's Create Your Perfect Day" in white
  serif on the rose gradient background
- **AND** SHALL show a white "Schedule Consultation" button and an outlined
  "Call Us" button

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, three link columns
and a newsletter signup.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand blurb and the Services, Information and
  Connect link columns
- **AND** SHALL show a "Stay Inspired" newsletter input with a "Subscribe"
  rose button
- **AND** SHALL show a copyright bar with Privacy Policy, Terms of Service
  and Style Guide links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner, a main
landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Vows app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Vows — Wedding Planner Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/vows`
- [ ] `npm run lint` passes for `apps/vows`
- [ ] `scripts/verify-app.sh vows` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Navbar: wordmark + icon, 8 links, rose "Start Planning" pill, dark-mode
      toggle, mobile drawer with aria-expanded
- [ ] Hero: blush gradient bg (primary-50 → white), serif "Your Dream
      Wedding Begins Here", sub, 2 CTAs (solid rose + outline), stats row
      (500+/12/5-Star), floating blur circles
- [ ] Stats band: bg-gray-50 + border-y, 4 stats (Weddings Planned, Years
      Experience, Happy Couples, Venue Partners)
- [ ] Services: "What We Do" / "Our Services" — 6 cards (Full Planning,
      Day-of, Design & Decor, Venue Selection, Catering & Cake,
      Entertainment)
- [ ] Portfolio: "Our Work" / "Our Portfolio" — 6 couple cards with venue
      lines
- [ ] Transformations: "Venue Styling" / "Venue Transformations" — 2+
      before/after pairs with badges
- [ ] Planner: "About Us" / "Meet Your Planner" — portrait, name, bio,
      credentials
- [ ] Packages: "Investment" / "Wedding Packages" — Intimate $3,500, Classic
      $7,500 (Most Popular badge), Grand $15,000, each with features +
      "Inquire"
- [ ] Testimonials: "Love Letters" / "What Our Couples Say" — 3+ cards with
      stars/quotes/authors/dates
- [ ] FAQ: "Frequently Asked Questions" — 5-question accordion with
      aria-expanded
- [ ] Contact CTA: rose gradient band, "Let's Create Your Perfect Day",
      white + outline buttons
- [ ] Footer: dark, blurb + 3 link columns, "Stay Inspired" newsletter +
      Subscribe, copyright bar
- [ ] DARK MODE INCLUDED (this template has dark: variants everywhere —
      do NOT build it light-only)
- [ ] Placeholder images via seeded picsum (`seed/vows-<n>/<w>/<h>`)
- [ ] No copied ColorLib assets; brand rose #e11d48 in `@theme`
