# Template: Zenith (SaaS / product landing)

## Purpose

A violet-accented SaaS product landing page. A sticky white navbar (80% opacity, `backdrop-blur-lg`,
`border-b`) holds a rounded violet check-tile wordmark, five nav items with one dropdown, a dark-mode
toggle and a filled violet "Get Started" button. The hero is a pale violet wash
(`from-primary-50` `#f5f3ff` → white) carrying a pulsing-dot pill ("Now with AI-powered automation"),
a two-line `text-4xl → lg:text-6xl` headline whose second line is gradient-clipped
(`linear-gradient(to right, #7c3aed, #06b6d4)`), an 18px grey blurb, a violet fill CTA with an arrow
beside a bordered "Watch demo" CTA with a play glyph, a four-stat row under a `border-t` rule, and a
24rem-tall dashboard screenshot in a `rounded-2xl` frame. The body then alternates white and
`#f9fafb` bands: a six-card feature grid, a three-tier pricing block with a monthly/yearly pill switch
and a `ring-2 ring-primary-600` "Most Popular" card, three testimonial cards with five yellow stars and
initial avatars, and a full-width `from-primary-600 to-primary-800` CTA band. The page closes on a
`#111827` footer — brand column with three square social tiles, three link columns, a newsletter
field, and a bordered copyright bar.

Recreation of the ColorLib **"Saasify"** template
(https://colorlib.com/wp/template/saasify/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `saasify`
- **ColorLib page:** https://colorlib.com/wp/template/saasify/ (HTTP 200, 111,212 B)
- **Live preview:** https://preview.colorlib.com/theme/saasify/ (HTTP 200, 59,642 B, page title
  `Home | SaaSify`). The slug-only ladder resolves this one — no `bootstrap/`, `bb/`, `bac/` or
  `etc/cs/` prefix is needed. The demo is an **Astro** build with a single hashed stylesheet,
  `_astro/Base.D0NGrHY1.css`; `scripts/measure-reference-tokens.py --slug saasify` reports
  `rebuilt: False`, so the demo is the original build and any mismatch with the shipped app is
  DRIFT, not a redesign.
- **New name:** `zenith` (apps/zenith, `@free-react-templates/zenith`) — a single lowercase word that
  differs from the source name, with no collision in `apps/` or `openspec/specs/`. The name was
  inherited from this folder's earlier prep; the rewrite keeps it (`zenith` ≠ `saasify`, so rule 5 is
  satisfied and no rename is needed).
- **Deploy target:** https://zenith.free.componentdock.com (`apps/zenith/public/CNAME`, `homepage`
  in `apps/zenith/package.json`)
- **Category:** `TEMPLATES.md` lists this design twice, in two categories — row **158**
  (`## Astro (48)`) and row **2929** (`## Tailwind Css (48)`), both `[x]` and both linking `zenith`.
  Two rows for the **same** slug is not `ROW-MULTI` (that flag is rows for two *different* designs);
  there is no competing claim about provenance.
- **Screenshot reference:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/saasify-template-1770211006733.jpg — **52,835 B**,
  served as **AVIF** (2400 × 1892, sha256 `be6d8dbb5215934f89b3034abc947c757e1d1bdbe45c5a2182ab0b2ea27ad5eb`).
  It captures the navbar and hero only: the violet check-tile wordmark, five grey nav items, the moon
  toggle, the filled violet "Get Started" pill, the centred pill badge, "Build better products," in
  near-black over **"faster than ever"** clipped to a violet→cyan gradient, the 18px grey blurb, the
  solid violet CTA with a trailing arrow beside the white bordered "Watch demo", the four statistics
  row over a hairline rule, and the top of the dashboard frame — dark sidebar, three white metric
  cards reading `$24,563 Total Revenue`, `1,234 Active Users`, `98.5% Uptime`.

### Why this spec was rewritten

`apps/zenith` shipped recreating this design, but the spec it shipped with named a different one —
ColorLib **"Bootstrap Buttons 05"** (`https://colorlib.com/wp/template/bootstrap-buttons-05/`, an
indigo `#4f46e5` button gallery: solid/outline/ghost variants, shape and size demos, a live prop
playground) — and prescribed bands the app does not contain. `apps/zenith/src/components/` holds
`Navbar`, `Hero`, `Features`, `Pricing`, `Testimonials`, `CtaBanner`, `Footer`, `Reveal`; nothing in
it renders a button showcase.

The spec ↔ row census (`docs/spec-row-mismatch.md`, `scripts/verify-spec-row-mismatch.py`) flagged
the disagreement (`spec=bootstrap-buttons-05 rows=saasify`) and adjudicated it **`SPEC-STALE`** by
searching the app's own copy in both candidates: `Active users` (saasify 1 / bootstrap-buttons-05 0),
`Uptime SLA` (1 / 0) and `Everything you need to ship faster` (1 / 0) are exclusively the SaaSify
hero/stats/features copy. Three exclusive hits clears the `MIN_EVIDENCE` floor of 2.

This spec is therefore the measured `saasify` reference, and its Requirements describe what
`apps/zenith` actually renders. `docs/templates/zenith/` was rewritten with it: the old
`tasks.md`/`design-notes.md` brief quoted the button-gallery bands and the indigo `#4f46e5` palette, and
a corrected spec carrying a stale brief still misdirects the next implementer.

## Reference readings (2026-10-24, `curl -4`)

`preview.colorlib.com` answers IPv4 only from this host — every probe below passes `-4`.

| artefact | bytes | sha256 |
| --- | ---: | --- |
| `theme/saasify/` page (DOM authority) | 59,642 | `426635e5c1d58d5870b87cacb501b6d327452c2040e7d28e3e657ab658dc565e` (page bodies are request-unstable — quoted for this fetch only) |
| `theme/saasify/_astro/Base.D0NGrHY1.css` (token authority) | 46,802 | `4c1d7758f6863ea2f7fc2431469e634e0946f4a0293c4a0cc48fa9684d38617e` |
| `theme/saasify/contact/` (inner page) | 37,085 | — (title `Contact Us | SaaSify`) |
| `theme/saasify/docs/` (inner page) | 39,261 | — (title `Documentation | SaaSify`) |
| `theme/saasify/blog/` (inner page) | 28,817 | — (title `Blog | SaaSify`) |
| `theme/saasify/help/` (inner page) | 42,193 | — (title `Help Center | SaaSify`) |
| screenshot (above) | 52,835 | `be6d8dbb5215934f89b3034abc947c757e1d1bdbe45c5a2182ab0b2ea27ad5eb` (AVIF 2400 × 1892) |
| `downloads/free/saasify.zip` | **404** (9 B) — business themes ship no archive, so there is no un-versioned twin to hash against | — |

- `measure-reference-tokens.py --slug saasify` → title `Home | SaaSify`, **`rebuilt: False`**, one
  sheet (above). Aggregate palette (literal frequency across page + sheet): `#0000` 20,
  `#0000001a` 13, `#111827` 12, `#7c3aed` 10, `#374151` 9, `#d1d5db` 8, `#1f2937` 8, `#8b5cf6` 7,
  `#fff` 6, `#e5e7eb` 6, `#6d28d9` 5, `#a78bfa` 5, `#6b7280` 4, `#f3f4f6` 3. The theme's own palette
  is the violet `#7c3aed` family; `#111827` / `#374151` / `#d1d5db` / `#e5e7eb` / `#f3f4f6` / `#6b7280`
  are the neutral ramp, `#0000` is the gradient-clipped text fill and `#0000001a` the soft shadow.
- **Markup census on the landing page:** 5 `<section>` elements inside `main`, **1 `h1`**, 4 `h2`,
  13 `h3`, **1 `<form>` with 1 `<input>`** (the footer newsletter), 50 inline `<svg>` icons (lucide-style
  strokes plus the wordmark glyph), 32 `data-animate` attributes (`fade-in-up` + `data-delay`), and a
  class-based dark mode (`data-dark-toggle` in the navbar, `data-mobile-toggle` for the ≤lg menu, plus
  an inline pre-paint script that reads `localStorage` before first paint).
- **Anchor census: 34 anchors — 6 dead `#`, 5 `#pricing`, 4 `contact/`, 3 `#features`, 3 `docs/`,
  3 `blog/`, 3 `help/`, 2 the demo root, 2 `#testimonials`, 2 more `#pricing`, 1 `#demo`.** Counted:
  6 + 5 + 4 + 3 + 3 + 3 + 3 + 2 + 2 + 2 + 1 = 34. Because the demo is an Astro multi-page build its
  inner links are absolute (`/theme/saasify/contact/`), not relative — the single-page recreation
  maps them to on-page anchors, which is why the app's nav carries a flat Resources group
  (Documentation, Blog, Help Center) instead of the source's dropdown.
- **Inner pages are LIVE** — this is a four-page theme, and they are the authoritative reference for
  the bands a single-page recreation drops: `contact/` (37,085 B, "Contact Us"), `docs/` (39,261 B,
  "Documentation"), `blog/` (28,817 B, "Blog"), `help/` (42,193 B, "Help Center"). All four answer
  HTTP 200 after a `308` trailing-slash redirect (`/contact` → `/contact/`).
- **Font delivery: the stylesheet ships 0 `@font-face` blocks and the page carries no Google Fonts
  `<link>`.** The faces arrive from the preview host's injected `/cf-fonts/` block — **Inter 5.2.8**
  at weights 300, 400, 500, 600, 700 and 800 in `latin` / `latin-ext` / `greek` / `greek-ext` /
  `cyrillic` / `cyrillic-ext` / `vietnamese` subsets, `font-display: swap`. The sheet declares the
  family once (`Inter, system-ui, sans-serif`), so loading Inter from Google Fonts restores the
  declared intent rather than inventing a face.
- **Spacing rhythm:** hero `py-20 lg:py-32`, every body band `py-20 lg:py-28`, footer `pt-16 lg:pt-24`
  with a `py-8` bordered legal bar; container `max-w-7xl` with `px-4 lg:px-8`.

## Design tokens

Measured from `theme/saasify/_astro/Base.D0NGrHY1.css` (46,802 B) and confirmed against the served
markup. The demo is Tailwind-built, so the tokens are the utility values the sheet compiles to.

| role | value | where the sheet sets it |
| --- | --- | --- |
| Brand violet (primary-600) | `#7c3aed` | `.bg-primary-600`, `.text-primary-600`, `.ring-primary-600`, `.from-primary-600` — CTAs, links, wordmark tile, active billing switch, feature icon tiles, "Most Popular" badge |
| Primary hover (primary-700) | `#6d28d9` | `.hover:bg-primary-700` on the navbar CTA, the pricing CTAs and the newsletter submit |
| Primary tint (primary-500) | `#8b5cf6` | `.bg-primary-500` — the pulsing dot, the popular card's ring accent |
| Primary wash (primary-50/100/200) | `#f5f3ff` / `#ede9fe` / `#ddd6fe` | hero gradient start, section kicker pills, avatar discs, hero orbs |
| Primary deep (primary-800/900) | `#5b21b6` / `#4c1d95` | CTA band gradient end (`to-primary-800`), dark-mode tints |
| Accent cyan (accent-200 → cyan-500) | `#a5f3fc` orb at 30%; `#06b6d4` text-gradient end | `.bg-accent-200/30` (second hero orb), `.text-gradient` `--tw-gradient-to` |
| Headline gradient | `linear-gradient(to right in oklab, #7c3aed, #06b6d4)` | `.text-gradient` — `color: transparent`, `background-clip: text` |
| CTA band gradient | `linear-gradient(to bottom right, #7c3aed, #5b21b6)` | `.bg-gradient-to-br.from-primary-600.to-primary-800` |
| Hero gradient | `linear-gradient(to bottom, #f5f3ff, #fff)` | `.bg-gradient-to-b.from-primary-50.to-white` |
| Section grounds | white `#fff` (features off, pricing on) and `#f9fafb` (features on, pricing off) | `.bg-white`, `.bg-gray-50` |
| Footer ground | `#111827` (gray-900); social tiles and input `#1f2937` (gray-800); hairline `#1f2937` | `.bg-gray-900`, `.bg-gray-800`, `.border-gray-800` |
| Body ink | `#111827`; headings the same; secondary text `#4b5563` (gray-600) / `#374151` (gray-700) / `#6b7280` (gray-500) / `#9ca3af` (gray-400) | `body { color: #111827 }`, `.text-gray-600/700/500/400` |
| Focus rings | `focus:ring-2 focus:ring-primary-500 focus:ring-offset-2` | the billing switch |
| Typeface | `Inter, system-ui, sans-serif`; weights 300–800 | single `font-family` declaration; host-injected `/cf-fonts/v/inter/5.2.8/` |
| Display scale | `h1`: `text-4xl` (36px) → `sm:text-5xl` (48px) → `lg:text-6xl` (60px), weight 700, `tracking-tight`; `h2`: `text-3xl` (30px) → `sm:text-4xl` (36px), weight 700; `h3` cards `text-xl` (20px) weight 600 | `.text-4xl`…, `.font-bold`, `.tracking-tight` |
| Body scale | hero blurb `text-lg` (18px) → `sm:text-xl` (20px); section subtext `text-lg`; stats label `text-sm` (14px); pill badge `text-sm` weight 500 | `.text-lg`, `.text-xl`, `.text-sm` |
| Radii | `--radius-lg: .5rem` (buttons, inputs, social tiles), `--radius-xl: .75rem`, `--radius-2xl: 1rem` (cards, dashboard frame), pills `rounded-full` | `--radius-lg/xl/2xl` |
| Soft shadow | `0 4px 16px -4px #0000001a` | `.shadow-soft` (+ `.hover:shadow-soft-lg`) |
| Buttons | `rounded-lg`, `px-6 py-3` (hero, `text-base` weight 500), `px-8 py-4` (CTA band), fill `#7c3aed` + `shadow-lg shadow-primary-600/30`; secondary white with `border-gray-300`; CTA-band secondary `border-2 border-white/30` on gradient | `.bg-primary-600.px-6.py-3`, `.border-gray-300.bg-white`, `.border-2.border-white/30` |
| Billing switch | pill `h-7 w-14 rounded-full`, thumb `h-5 w-5` white with `shadow-sm`, track `bg-gray-200` → `bg-primary-600` when annual | pricing section markup |
| Badges | kicker pill `rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700`; savings chip `rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700` ("Save 20%"); popular tag `-top-4 rounded-full bg-primary-600 px-4 py-1 text-sm text-white` | features / pricing / testimonials kickers, pricing toggle, popular card |
| Cards | `rounded-2xl p-8 shadow-soft`; feature card white on `#f9fafb`; testimonial card white with `h-12 w-12 rounded-full bg-primary-100 text-primary-600` avatar; pricing card `bg-gray-50`, popular `bg-white` + `ring-2 ring-primary-600` | `.rounded-2xl.p-8.shadow-soft`, `.ring-2.ring-primary-600` |
| Motion | `data-animate="fade-in-up"` entrances staggered by `data-delay`; `hover:shadow-soft-lg` on cards; `animate-ping` on the badge dot; `duration-200` on the billing thumb | 32 `data-animate` attributes, `.animate-ping`, `.transition-transform` |

Two sheet details worth recording, because a naive token grep gets them wrong: the primary scale is
Tailwind's **violet**, not indigo — `measure-reference-tokens.py` lists `#7c3aed` (10 literals) and
`#8b5cf6` (7) but no indigo value, and the `#4f46e5` indigo the previous spec prescribed appears
nowhere in the demo. And the headline gradient is **two-stop violet→cyan in `oklab`**; the sheet's
`--tw-gradient-position: to right in oklab` is what produces the hue path seen in the screenshot.

## Sections (reference order)

1. **Navbar** — `header.sticky.top-0.z-50.border-b.bg-white/80.backdrop-blur-lg`: violet
   `rounded-lg` check-tile + "SaaSify" wordmark; `nav[aria-label="Main navigation"]` with Features,
   Pricing, Testimonials and a Resources dropdown (Documentation, Blog, Help Center) plus Contact;
   a moon toggle (`data-dark-toggle`); a filled "Get Started" CTA; a hamburger (`data-mobile-toggle`)
   that opens a `border-t` panel of accordion rows below `lg`.
2. **Hero** — `section.bg-gradient-to-b.from-primary-50.to-white`, two `aria-hidden` blur orbs
   (violet `primary-200/50` and cyan `accent-200/30`), `container py-20 lg:py-32`: pill badge with a
   pulsing dot → `h1` "Build better products," / gradient "faster than ever" → 18px blurb → "Start
   free trial" (arrow) + "Watch demo" (play) → `grid-cols-2 sm:grid-cols-4` stat row under a
   `border-t` rule (10k+ Active users, 99.9% Uptime SLA, 50+ Integrations, 4.9★ User rating) →
   `max-w-5xl rounded-2xl shadow-2xl ring-1 ring-gray-200` frame holding the dashboard screenshot.
3. **Features** — `section#features.bg-gray-50`: kicker "Features", `h2` "Everything you need to ship
   faster", subtext, then six `rounded-2xl bg-white p-8 shadow-soft` cards in `sm:grid-cols-2
   lg:grid-cols-3` — Workflow Automation, Real-time Collaboration, Advanced Analytics, Enterprise
   Security, API & Integrations, 24/7 Support — each an `h3` with a violet icon tile and a blurb.
4. **Pricing** — `section#pricing.bg-white`: kicker "Pricing", `h2` "Simple, transparent pricing",
   "All plans include a 14-day free trial", the monthly/yearly switch with the "Save 20%" chip, then
   three cards — Starter $29, Pro $79 (`ring-2`, "Most Popular" tag, violet CTA), Enterprise $199 —
   each with a description, a price with the `/month` unit, a "Billed annually ($276 / $756 / $1908
   per year)" note, a six-item check list (5 for Enterprise) and a full-width `rounded-lg py-3` CTA.
5. **Testimonials** — `section#testimonials.bg-gray-50`: kicker "Testimonials", `h2` "Loved by teams
   worldwide", subtext, three white cards — five yellow stars, the quote, then a 48px initial avatar
   with name and role: Sarah Chen (CTO, TechFlow), Marcus Johnson (Head of Engineering, DataSync),
   Emily Rodriguez (Product Manager, CloudBase).
6. **CTA band** — `section.bg-gradient-to-br.from-primary-600.to-primary-800` with two white/10 blur
   orbs: `h2` "Ready to transform your workflow?", "Join thousands of teams already using SaaSify to
   build better products, faster.", a white fill "Start free trial" and a `border-2 border-white/30`
   "Contact sales".
7. **Footer** — `footer.bg-gray-900.pt-16.text-gray-300.lg:pt-24` on a 12-column grid: brand column
   (`lg:col-span-4`, wordmark, "The modern platform for scaling your business", three `rounded-lg
   bg-gray-800` social tiles), three link columns (`lg:col-span-5`, `text-sm uppercase
   tracking-wider` headings — Product: Features, Pricing · Company: Blog, Contact · Resources:
   Documentation, Help Center), a newsletter column (`lg:col-span-3`, "Stay Updated", "Get the latest
   news and updates delivered to your inbox.", an `bg-gray-800` input + violet "Subscribe"), then a
   `mt-16 border-t border-gray-800 py-8` bar with "© 2026 SaaSify. All rights reserved." and a social
   row.

## Requirements

### Feature: Navbar

The system SHALL render a sticky, translucent navbar with the wordmark, five navigation entries, a
dark-mode toggle and a filled CTA, and SHALL collapse the navigation into a toggleable panel below
the `lg` breakpoint.

#### Scenario: Navbar content

- **GIVEN** the Zenith application is loaded
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the wordmark "Zenith"
- **AND** it SHALL show the links "Features", "Pricing", "Testimonials", "Resources" and "Contact"
- **AND** it SHALL show a dark-mode control and a "Get Started" call to action

#### Scenario: Sticky translucent bar

- **GIVEN** the page is at the top
- **WHEN** the visitor scrolls down
- **THEN** the navbar SHALL remain pinned to the top of the viewport
- **AND** its ground SHALL stay translucent (80% white) with a bottom hairline

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the `lg` breakpoint
- **WHEN** the visitor activates the menu control
- **THEN** the navigation entries SHALL be revealed in a panel below the bar
- **AND** the control SHALL report `aria-expanded="true"`
- **AND** activating it again SHALL hide the panel

### Feature: Dark mode

The system SHALL toggle a class-based dark theme from the navbar control and SHALL restore the
visitor's choice on the next visit.

#### Scenario: Toggle persists

- **GIVEN** the navbar dark-mode control
- **WHEN** the visitor activates it
- **THEN** the document root SHALL gain the `dark` class
- **AND** the choice SHALL be written to `localStorage`
- **AND** activating it again SHALL remove the class

#### Scenario: Toggle geometry

- **GIVEN** the theme is light
- **WHEN** the control is inspected
- **THEN** it SHALL sit in a `rounded-lg` hit area with an accessible name
- **AND** its icon SHALL change with the active theme

### Feature: Hero

The system SHALL render a gradient hero with a pill badge, a two-line headline whose second line is
gradient-clipped, a blurb, two calls to action, a four-statistic row and a framed dashboard preview.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the badge "Now with AI-powered automation"
- **AND** it SHALL show the headline "Build better products, faster than ever" as the page's only `h1`
- **AND** it SHALL show a blurb of at least one sentence
- **AND** it SHALL show a "Start free trial" CTA and a "Watch demo" CTA

#### Scenario: Hero ground

- **GIVEN** the hero is painted
- **WHEN** its layers are inspected
- **THEN** its ground SHALL be a vertical gradient from `#f5f3ff` to white
- **AND** the second headline line SHALL be painted with a violet→cyan gradient clipped to the text
- **AND** any decorative blur orbs SHALL be `aria-hidden`

#### Scenario: Statistics row

- **GIVEN** the hero is displayed
- **WHEN** the statistics are read
- **THEN** there SHALL be exactly four: `10k+` Active users, `99.9%` Uptime SLA, `50+` Integrations,
  `4.9★` User rating
- **AND** each SHALL pair a value with its label
- **AND** the row SHALL be separated from the CTAs by a top hairline

#### Scenario: Dashboard preview

- **GIVEN** the hero is displayed
- **WHEN** the dashboard preview is inspected
- **THEN** it SHALL sit in a `rounded-2xl` frame with a ring and a shadow
- **AND** it SHALL show at least three metric tiles (revenue, active users, uptime)
- **AND** the preview SHALL be decorative for assistive technology (no unlabelled interactive content)

### Feature: Features grid

The system SHALL render six feature cards, each an icon, a heading and a blurb, in a responsive grid.

#### Scenario: Feature content

- **GIVEN** the features band is displayed
- **WHEN** its cards are read
- **THEN** there SHALL be exactly six
- **AND** their headings SHALL include "Workflow Automation", "Real-time Collaboration", "Advanced
  Analytics", "Enterprise Security", "API & Integrations" and "24/7 Support"
- **AND** each card SHALL carry an icon and a one-sentence blurb

#### Scenario: Feature layout

- **GIVEN** a viewport at or above the `lg` breakpoint
- **WHEN** the grid is measured
- **THEN** it SHALL lay the six cards out in three columns
- **AND** it SHALL fall back to two columns at `sm` and one below it

### Feature: Pricing

The system SHALL render three pricing tiers with a monthly/annual switch that reprices every tier.

#### Scenario: Tier content

- **GIVEN** the pricing band is displayed
- **WHEN** the tiers are read
- **THEN** there SHALL be three: Starter `$29`, Pro `$79`, Enterprise `$199` per month
- **AND** each SHALL show a description, a feature list and a call to action
- **AND** exactly one tier SHALL be marked as the most popular

#### Scenario: Billing switch

- **GIVEN** the switch reports monthly billing
- **WHEN** the visitor activates it
- **THEN** it SHALL report `aria-checked="true"` for annual billing
- **AND** every tier's price SHALL change to its annual rate
- **AND** each tier SHALL show the annual total it is billed (`$276`, `$756`, `$1908` per year)
- **AND** the switch SHALL advertise a 20% saving

#### Scenario: Pricing copy

- **GIVEN** the pricing band is displayed
- **WHEN** its heading is read
- **THEN** it SHALL read "Simple, transparent pricing"
- **AND** the subtext SHALL mention the 14-day free trial

### Feature: Testimonials

The system SHALL render three testimonial cards, each a five-star rating, a quote, an initial avatar,
a name and a role.

#### Scenario: Testimonial content

- **GIVEN** the testimonials band is displayed
- **WHEN** its cards are read
- **THEN** there SHALL be three
- **AND** each SHALL show a five-star rating with an accessible label
- **AND** each SHALL show a quote, an avatar initial, a name and a role
- **AND** the names SHALL include "Sarah Chen", "Marcus Johnson" and "Emily Rodriguez"

### Feature: CTA band

The system SHALL render a full-width gradient band with a headline, a supporting line and two calls
to action.

#### Scenario: CTA content

- **GIVEN** the CTA band is displayed
- **WHEN** it is read
- **THEN** it SHALL show the headline "Ready to transform your workflow?"
- **AND** it SHALL show a "Start free trial" CTA and a "Contact sales" CTA
- **AND** its ground SHALL be a diagonal violet gradient from `#7c3aed` to `#5b21b6`

### Feature: Footer

The system SHALL render a dark footer with a brand column, three link columns, a newsletter form and
a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the wordmark "Zenith" with a blurb and three social links
- **AND** it SHALL show three link columns with `uppercase` headings
- **AND** it SHALL show a "Stay Updated" column with an e-mail field and a "Subscribe" control

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form
- **WHEN** the visitor submits an e-mail address
- **THEN** the form SHALL NOT reload the page
- **AND** it SHALL confirm the subscription in place

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** its last row is read
- **THEN** it SHALL show a copyright line naming Zenith
- **AND** the row SHALL be separated from the columns by a top hairline

### Feature: Page composition

The system SHALL compose the bands in reference order inside one page with a banner, a main and a
contentinfo landmark, and SHALL set the document title.

#### Scenario: Full page render

- **GIVEN** the Zenith app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL be in the banner landmark, the hero, features, pricing, testimonials and
  CTA band SHALL be in the main landmark, and the footer SHALL be in the contentinfo landmark
- **AND** the bands SHALL appear in the order navbar, hero, features, pricing, testimonials, CTA,
  footer
- **AND** the document title SHALL be "Zenith — SaaS Template"

### Feature: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this template — with a
visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit
replaces the source's own copyright-only line and SHALL NOT change the footer's layout otherwise.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Feature: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under `apps/zenith/` may
contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments,
CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and
the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock
(`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/zenith/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Known app delta — fidelity debt for the next implementer pass

`apps/zenith` reproduces the reference's **bands, copy and arithmetic** (sticky translucent navbar,
violet-wash hero with badge/CTAs/stats/dashboard frame, six feature cards, three tiers with a
working monthly↔annual switch, three testimonials, gradient CTA band, four-column dark footer with
newsletter, credit) but not every surface of its **skin**. These deltas are recorded, not claimed:

| axis | reference (measured) | shipped `apps/zenith` | note |
| --- | --- | --- | --- |
| Headline gradient | `to right in oklab, #7c3aed → #06b6d4` (violet→cyan) | `linear-gradient(90deg, #a78bfa, #7c3aed)` (violet only) | the cyan endpoint is the visible half of the reference's look — cheapest fidelity win |
| Dashboard preview | a single `<img>` of the product UI, `max-w-5xl`, `shadow-2xl ring-1 ring-gray-200` | hand-built DOM mock (dark sidebar + `$24,563` / `1,234` / `98.5%` tiles) | deliberate: assets are never copied (`docs/replication.md`), and the DOM mock keeps the copy editable |
| Popular pricing card | `bg-white` + `ring-2 ring-primary-600` + violet tag | `bg-gray-950` dark card + `border-primary-500/50` | inverts the reference's light-card emphasis |
| Other pricing cards | `bg-gray-50` (grey ground on a white band) | `bg-white` with `border-gray-200` | |
| Section kickers | `rounded-full bg-primary-100` pills reading "Features" / "Pricing" / "Testimonials" | omitted | three badges, one line each |
| Non-popular price CTA | full-width solid `bg-gray-200 text-gray-900` `py-3`, "Get started" on all three tiers | full-width `variant="outline"` button; Enterprise reads "Contact sales" | the reference keeps every tier's CTA a flat grey fill and every label "Get started" |
| Footer link columns | Product (Features, Pricing) · Company (Blog, Contact) · Resources (Documentation, Help Center) | Product (Features, Pricing, Integrations, Changelog) · Company (About, Blog, Careers, Contact) · Legal (Privacy, Terms, Security) | reference is a 4-page product site; the recreation carries the usual template link set |
| Nav Resources | dropdown (`Documentation`, `Blog`, `Help Center`) | flattened to four extra top-level links | single-page recreation has no inner routes to point at |
| Hero padding | `py-20 lg:py-32` (`py-28` on body bands) | `pb-20 pt-16 lg:pb-28 lg:pt-24` | the reference gives the hero more air above the fold |
| Soft shadow | `0 4px 16px -4px #0000001a` | `0 2px 12px -2px rgb(15 23 42 / .08)` | |
| Kicker/eyebrow on CTA band | none (headline straight in) | none | matches |
| Typeface | Inter 5.2.8 injected by the host's `/cf-fonts/` block, weights 300–800 | Inter from Google Fonts (`index.html`) | restores the declared face — not a divergence |

Closing this delta is an implementer change (tests + per-app gate), not a prep one — it is not part
of this rewrite.

## Verification checklist

- [x] App exists and ships from `apps/zenith` (deploy target https://zenith.free.componentdock.com)
- [x] Footer links `https://www.componentdock.com/`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, `docs/templates/zenith/`, `TEMPLATES.md` and the PR
- [x] Requirements describe what `apps/zenith` renders (navbar, hero + stats + dashboard, six features, three tiers with billing switch, three testimonials, CTA band, footer, credit)
- [x] Tokens re-measured from the reference sheet (`_astro/Base.D0NGrHY1.css`, 46,802 B, sha `4c1d7758…`)
- [x] Reference recorded per `docs/replication.md`: live DOM, stylesheet, anchor census, font delivery, screenshot, inner pages
- [x] Spec ↔ row agreement: rows 158 (`## Astro (48)`) and 2929 (`## Tailwind Css (48)`) both link `saasify` and `zenith` (`docs/spec-row-mismatch.md` drift case retired)
- [x] `npm run spec:validate` passes for `template-zenith` (structural gate: `## Purpose` + `## Requirements` + one `#### Scenario:` per requirement)
- [ ] Typecheck / lint / 100% coverage / build — per-app gate, run by the implementer on any app change
- [ ] Skin parity with the reference (see "Known app delta"): violet→cyan headline gradient, light popular pricing card with `ring-2`, `#f9fafb` card grounds, three kicker pills, `py-32` hero
