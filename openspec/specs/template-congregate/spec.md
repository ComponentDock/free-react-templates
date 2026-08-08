# Template: Congregate (Church Community Template)

## Purpose

Congregate is a single-page church community landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hopefoundation" website template design (see TEMPLATES.md —
THREE copies: lines 147, 1270, 2916; mark ALL `[x]` when done), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hopefoundation" — church / faith community website
  template (source: https://colorlib.com/wp/template/hopefoundation/). The
  ColorLib template page describes it as an Astro + Tailwind 4.x design for a
  welcoming church ("Hope City Church") with service times, what-to-expect
  features, recent messages, ways to connect, member stories, a stats CTA and
  dark mode.
- **Preview URL:** `https://preview.colorlib.com/theme/hopefoundation/`
  returns HTTP 404 (confirmed 2026-08-08, 9 bytes "Not Found"). The live
  rendered demo is hosted on Cloudflare Pages:
  `https://hopefoundation-colorlib.pages.dev/` (HTTP 200, ~45 KB HTML; Astro
  stylesheet `/_astro/Base.9L0KyljF.css` ~45 KB parsed for tokens).
  TEMPLATES.md screenshot (`hopefoundation-template-1770211243073.jpg`,
  2400×1892) viewed in the browser; the pages.dev demo matches the screenshot
  1:1 (same dark charcoal hero with the blurred Bible-in-hands photo, "Everyone
  is welcome here." white headline, solid amber "Plan Your Visit" + outlined
  "Watch Online" CTAs, SCROLL indicator, amber logo mark in the nav).
- **Visual design (from screenshot + live demo):** cinematic, welcoming church
  landing. Hero = full-viewport dark photo background
  (`section.relative.min-h-screen.overflow-hidden.bg-charcoal-900`, unsplash
  close-up of hands holding an open Bible) with a large white bold headline
  "Everyone is welcome here.", grey sub-paragraph "Whether you're exploring
  faith for the first time or looking for a church home, you belong at Hope
  City.", a solid amber `rounded-lg` "Plan Your Visit" button (arrow icon) and
  a `border-2 border-white/30` outlined "Watch Online" button (play icon), and
  a bottom-center SCROLL indicator. Signature look: **warm amber primary**
  (`#f59e0b`) for the logo mark, primary CTAs and icon tiles; **dark charcoal**
  surfaces (`#1a1a1a` hero/stories/footer, `#383838` dark cards) alternating
  with **cream** (`#fefdfb`) light sections; **Outfit** sans for everything
  (300–800); `rounded-lg` buttons/cards, `rounded-xl` icon tiles; full dark
  mode (`dark:` variants, `.dark` class toggle with `aria-label="Toggle dark
mode"`). Sections: header → hero → service times → what to expect → watch &
  listen → get involved → stories → CTA/stats → footer.
- **Section order (1:1):**
  1. Header (`header`): brand left — amber logo mark (square `bg-amber-500`
     with a white cross icon) + wordmark "Hope City Church" (`font-semibold`);
     center links About, Watch, Connect, Give (`text-sm`/`text-base` dark
     charcoal, hover amber); right: dark-mode toggle (icon-only,
     `aria-label="Toggle dark mode"`) + amber pill button "Plan Your Visit"
     (`rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white
hover:bg-amber-600`); mobile hamburger revealing a drawer with the same
     links stacked and the full-width "Plan Your Visit" CTA.
  2. Hero (`section.relative.min-h-screen.overflow-hidden.bg-charcoal-900`):
     full-bleed dark photo background (`<img>` absolute inset-0 object-cover,
     unsplash `photo-1504052434569-70ad5836ab65` w=1920, likely with a dark
     overlay/`bg-black/40`), centered content — H1 `text-4xl sm:text-5xl
lg:text-6xl font-bold text-white` "Everyone is welcome here.",
     sub-paragraph `text-charcoal-300` "Whether you're exploring faith for the
     first time or looking for a church home, you belong at Hope City.", CTA
     row — "Plan Your Visit" (`inline-flex items-center justify-center gap-2
rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-white
hover:bg-amber-600`, ArrowRight icon) + "Watch Online" (`rounded-lg
border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white
hover:bg-white/10`, Play icon); bottom-center scroll indicator
     ("SCROLL" + down arrow, `text-white/60 hover:text-white`).
  3. Service Times (`section.bg-cream-50.py-20.lg:py-28`, dark:
     `dark:bg-charcoal-900`): eyebrow "Join Us", H2 "Service Times", sub
     "Whether in person or online, we'd love to worship with you. Join us this
     weekend!"; two service cards — **Sunday 9:00 AM** and **11:00 AM**
     ("In-person & Online") and **Wednesday 7:00 PM** ("Midweek Service"),
     each with a small amber icon tile (Clock/Calendar icon); a third card
     "Our Location" — 1200 Grace Avenue, Austin, TX 78701 + "Get Directions"
     link (MapPin icon).
  4. What to Expect (`section.py-20.lg:py-28`): eyebrow "What to Expect", H2
     "You're Invited", sub "At Hope City, we believe church should be the best
     hour of your week. Expect warm welcomes, uplifting worship, and practical
     teaching that applies to real life. Come as you are—there's no dress
     code, and coffee is always free."; 4 feature cards, each with an amber
     icon tile (`rounded-xl bg-amber-100 text-amber-600`, dark:
     `dark:bg-amber-900/30 dark:text-amber-400`) + H3 + blurb — **Welcoming
     Community** ("You'll be greeted with a smile and helped to find your way
     around."), **Engaging Worship** ("Modern music that inspires and creates
     space to connect with God."), **Relevant Teaching** ("Messages that speak
     to real life and help you grow."), **Great Kids Programs** ("Safe,
     fun-filled environments where kids learn about God's love.").
  5. Watch & Listen (`section.bg-charcoal-50.py-20.lg:py-28`, dark:
     `dark:bg-charcoal-900`): H2 "Watch & Listen" + sub "Recent Messages" and a
     "View All Messages" link; grid of 4 message cards — image, duration badge
     (`rounded bg-charcoal-900/80 text-white`), H3 title, meta "Pastor David
     Chen · January 19, 2025 · 38:24" — messages: **Unshakeable Peace in the
     Storm** (38:24), **Unshakeable Faith Over Fear** (Jan 12, 2025 · 35:52),
     **Unshakeable Built to Last** (Jan 5, 2025 · 32:10), **The Gift of Hope**
     (Pastor Sarah Mitchell · December 24, 2024); "Watch Live Every Sunday"
     CTA link/button below.
  6. Get Involved (`section.py-20.lg:py-28`): eyebrow "Get Involved", H2 "Ways
     to Connect", sub "No matter where you are in your faith journey, there's
     a next step for you at Hope City."; 4 cards with icon tiles + H3 + blurb +
     link — **Plan Your Visit** ("New to Hope City? We'd love to help you feel
     at home. Let us know you're coming!" · "Plan Visit"), **Join a Group**
     ("Life is better together. Find a small group to grow in faith and build
     friendships." · "Find a Group"), **Serve with Us** ("Use your gifts to
     make a difference. There's a place for you on our volunteer teams." ·
     "Start Serving"), **Next Steps** ("Ready to go deeper? Discover the next
     step in your faith journey." · "Explore Next Steps").
  7. Stories (`section.bg-charcoal-900.py-20.lg:py-28`): eyebrow "Stories",
     H2 "Real People. Real Hope."; testimonial cards on dark — quote, author
     name + "Members since 2019" meta + round avatar — **The Martinez Family**
     ("We visited Hope City during a really hard season in our lives. From the
     first moment, we felt like family. This church has helped us heal and
     grow in ways we never expected." · Members since 2019), **James K.**
     ("I wasn't sure what I believed about God, but the people here welcomed
     my questions without judgment. Hope City gave me space to explore faith
     at my own pace." · Member since 2022), third card on the kids program
     ("The kids program here is incredible. My daughter actually asks to come
     to church." · Member since 2021).
  8. CTA (`section.relative.overflow-hidden.py-20.lg:py-28`): centered H2
     "Your story isn't over." + sub "No matter what you've been through,
     there's hope for a better tomorrow. We'd love to be part of your
     journey."; two buttons — "Plan Your Visit" (amber solid) + "Watch a
     Message" (secondary/outline); stats row: **10+ Years Serving Austin**,
     **500+ Weekly Attendance**, **50+ Small Groups** (bold amber or white
     numbers + labels).
  9. Footer (`footer.bg-charcoal-900`): brand (amber logo mark + "Congregate")
     - blurb "A welcoming community in Austin, TX where everyone belongs. Join
       us Sundays at 9:00 AM or 11:00 AM."; 3 link columns — **VISIT** (Service
       Times, Plan Your Visit, What to Expect, Directions), **CONNECT** (About
       Us, Join a Group, Serve, Give), **RESOURCES** (Watch Sermons, Podcast,
       Hope City Kids, Contact Us); social icons (Facebook, Instagram, YouTube —
       inline SVG); contact block — email `hello@hopecitychurch.com` →
       `hello@congregate.church`, phone `(555) 234-5678`, address "1200 Grace
       Avenue, Austin, TX 78701"; bottom bar with copyright.
- **Design tokens extracted from the demo CSS (`Base.9L0KyljF.css`, Tailwind
  v4 utilities — `bg-charcoal-*`, `bg-cream-*`, `bg-amber-*` scales):**
  - Brand primary (Tailwind **amber** scale — put in `@theme` as
    `--color-amber-*` or a custom `--color-primary-*`): **amber-50 #fffbeb**,
    **amber-100 #fef3c7** (icon-tile backgrounds), **amber-400 #fbbf24**
    (icon-tile text in dark), **amber-500 #f59e0b** (solid primary buttons,
    logo mark, CTA), **amber-600 #d97706** (hover states), **amber-700
    #b45309** (deep accent text).
  - Brand neutral (custom **charcoal** scale — put in `@theme` as
    `--color-charcoal-*`): **charcoal-50 #f7f7f7** (light section bg),
    **charcoal-100 #e3e3e3** (ghost hover bg), **charcoal-200 #c8c8c8**
    (light borders), **charcoal-300 #a4a4a4** (muted text, secondary button
    border), **charcoal-400 #818181**, **charcoal-500 #666** (dark secondary
    border), **charcoal-600 #515151** (secondary button text, ghost text),
    **charcoal-700 #434343** (secondary button text light), **charcoal-800
    #383838** (dark card bg, dark hover), **charcoal-900 #1a1a1a** (hero bg,
    dark sections, stories, footer).
  - Light section tint (custom **cream** scale): **cream-50 #fefdfb**
    (alternate light section bg — service times).
  - Base: **white #fff**, **black #000** (hero photo overlay, duration
    badges).
  - Font (Google Fonts `<link>` in `index.html`): **Outfit** (weights
    300–800) for everything — headings `font-bold`, body
    `font-normal`/`font-medium`, buttons `font-semibold`.
  - Radii: **rounded-lg** (0.5rem — buttons, cards), **rounded-xl** (0.75rem —
    icon tiles). Buttons `px-8 py-4 text-lg` in the hero, `px-5 py-2.5
text-sm` in the header, `px-6 py-3` default (`.btn-primary` /
    `.btn-secondary` / `.btn-ghost` in the CSS, `font-semibold`, `gap-2`,
    `inline-flex`).
  - Buttons/links: primary solid `rounded-lg bg-amber-500 px-6 py-3
font-semibold text-white transition hover:bg-amber-600` (hero uses `px-8
py-4 text-lg`, header `px-5 py-2.5 text-sm`); secondary outlined `rounded-lg
border-2 border-charcoal-300 px-6 py-3 font-semibold text-charcoal-700
hover:bg-charcoal-50 hover:border-charcoal-400` (dark: `border-charcoal-500
text-charcoal-300 hover:bg-charcoal-800 hover:border-charcoal-500`); hero
    outline `rounded-lg border-2 border-white/30 text-white hover:bg-white/10`;
    ghost `rounded-lg px-6 py-3 font-semibold text-charcoal-600
hover:bg-charcoal-100` (dark: `text-charcoal-400 hover:bg-charcoal-800`).
  - Section backgrounds: hero `bg-charcoal-900` with full-bleed photo; body
    alternates `bg-cream-50` / transparent/white with `py-20 lg:py-28` (dark:
    `dark:bg-charcoal-900`); watch & listen `bg-charcoal-50 dark:bg-charcoal-900`;
    stories + footer `bg-charcoal-900`.
  - Container: `mx-auto max-w-7xl px-4 lg:px-8` (section-padding pattern).
- **Recreation decisions:** brand wordmark "Congregate" (lucide `Church`
  icon in an amber square mark) instead of "Hope City Church"; tagline/email
  re-branded (`hello@congregate.church`). Copy keeps the same _kind_ of
  content: service times, welcome features, message list, ways to connect,
  member stories, stats CTA. Unsplash images → seeded picsum
  (`picsum.photos/seed/congregate-<n>/<w>/<h>`: hero 1920×1080, message cards
  800×450, avatars 200×200). Icons → lucide-react (Church, Clock, MapPin,
  ArrowRight, Play, Menu, X, Moon, Sun, Users, Heart, BookOpen, Sparkles,
  ChevronRight, Mail, Phone, ArrowDown); brand social icons (Facebook,
  Instagram, YouTube) are NOT in lucide-react → inline SVG paths (like
  existing apps). The demo's multi-page routes (About / Watch / Connect /
  Give) collapse to single-page anchors (`#about`, `#watch`, `#connect`,
  `#give`) or `#` placeholders so the structure matches 1:1. No assets
  copied; brand amber #f59e0b → #d97706 hover in `@theme`.

Congregate lives in `apps/congregate` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a header with the brand wordmark, section links, a
dark-mode toggle, a "Plan Your Visit" button and a mobile menu.

#### Scenario: Header content

- **GIVEN** the Congregate page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand (amber logo mark with a church
  icon + wordmark "Congregate") on the left
- **AND** SHALL show links for About, Watch, Connect and Give
- **AND** SHALL show a dark-mode toggle and an amber "Plan Your Visit"
  button on the right

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible drawer SHALL show the same nav links and the "Plan
  Your Visit" CTA
- **AND** the toggle SHALL expose the menu state via aria-expanded

### Requirement: Hero section

The system SHALL render a full-viewport dark photo hero with a headline,
sub-paragraph, two CTAs and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a dark charcoal background with a full-bleed photo
  and dark overlay
- **AND** SHALL show the headline "Everyone is welcome here." in large white
  bold text
- **AND** SHALL show the sub-paragraph about exploring faith and finding a
  church home
- **AND** SHALL show a solid amber "Plan Your Visit" button and an outlined
  "Watch Online" button
- **AND** SHALL show a SCROLL indicator at the bottom center

### Requirement: Service Times section

The system SHALL render a "Service Times" section with service cards and a
location card.

#### Scenario: Service times content

- **GIVEN** the page is rendered
- **WHEN** the service times section is displayed
- **THEN** it SHALL show the heading "Service Times" on a cream background
- **AND** SHALL show a Sunday card (9:00 AM and 11:00 AM, In-person &
  Online) and a Wednesday card (7:00 PM, Midweek Service)
- **AND** SHALL show an "Our Location" card with the address 1200 Grace
  Avenue, Austin, TX 78701 and a "Get Directions" link

### Requirement: What to Expect section

The system SHALL render a "You're Invited" section with four feature cards.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the what-to-expect section is displayed
- **THEN** it SHALL show the heading "You're Invited"
- **AND** SHALL show four cards with amber icon tiles, titles and blurbs:
  Welcoming Community, Engaging Worship, Relevant Teaching and Great Kids
  Programs

### Requirement: Watch & Listen section

The system SHALL render a "Watch & Listen" section with four message cards
and a view-all link.

#### Scenario: Messages content

- **GIVEN** the page is rendered
- **WHEN** the watch & listen section is displayed
- **THEN** it SHALL show the heading "Watch & Listen" and a "View All
  Messages" link
- **AND** SHALL show four message cards, each with an image, duration badge,
  title and pastor/date meta: Unshakeable Peace in the Storm, Unshakeable
  Faith Over Fear, Unshakeable Built to Last and The Gift of Hope
- **AND** SHALL show a "Watch Live Every Sunday" CTA

### Requirement: Get Involved section

The system SHALL render a "Ways to Connect" section with four action cards.

#### Scenario: Connect cards

- **GIVEN** the page is rendered
- **WHEN** the get involved section is displayed
- **THEN** it SHALL show the heading "Ways to Connect"
- **AND** SHALL show four cards with icon tiles, titles, blurbs and links:
  Plan Your Visit, Join a Group, Serve with Us and Next Steps

### Requirement: Stories section

The system SHALL render a dark "Real People. Real Hope." section with
testimonial cards.

#### Scenario: Testimonials

- **GIVEN** the page is rendered
- **WHEN** the stories section is displayed
- **THEN** it SHALL show the heading "Real People. Real Hope." on a dark
  charcoal background
- **AND** SHALL show at least three testimonial cards, each with a quote,
  author name, membership meta and round avatar

### Requirement: CTA and stats section

The system SHALL render a "Your story isn't over." CTA with two buttons and
a stats row.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the heading "Your story isn't over." and a
  sub-paragraph about hope
- **AND** SHALL show "Plan Your Visit" and "Watch a Message" buttons
- **AND** SHALL show three stats: 10+ Years Serving Austin, 500+ Weekly
  Attendance, 50+ Small Groups

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, three link
columns, social icons, contact details and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand wordmark "Congregate", a blurb and
  contact details (email, phone, address)
- **AND** SHALL show social icon links (Facebook, Instagram, YouTube)
- **AND** SHALL show the columns Visit, Connect and Resources with their
  links
- **AND** SHALL show a bottom bar with the copyright line

### Requirement: Dark mode

The system SHALL support a class-based dark mode that toggles `.dark` on the
document root and persists the choice.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** section backgrounds and cards SHALL switch to the dark variants
  (cream/light sections become charcoal-900, cards become charcoal-800)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner, a main
landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Congregate app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Congregate — Church Community Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/congregate`
- [ ] `npm run lint` passes for `apps/congregate`
- [ ] `scripts/verify-app.sh congregate` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Header: amber logo mark + "Congregate" wordmark, About/Watch/Connect/
      Give links, dark-mode toggle, amber "Plan Your Visit" button, mobile
      drawer with CTA
- [ ] Hero: min-h-screen charcoal bg + full-bleed photo + overlay, "Everyone
      is welcome here." headline, sub-paragraph, amber "Plan Your Visit" +
      outlined "Watch Online" CTAs, SCROLL indicator
- [ ] Service Times: cream section, Sunday (9:00 AM / 11:00 AM) + Wednesday
      (7:00 PM) cards, Our Location card + Get Directions
- [ ] What to Expect: "You're Invited" + 4 feature cards (Welcoming
      Community, Engaging Worship, Relevant Teaching, Great Kids Programs)
- [ ] Watch & Listen: "Recent Messages" + 4 message cards (image, duration,
      title, pastor/date) + View All Messages + Watch Live Every Sunday CTA
- [ ] Get Involved: "Ways to Connect" + 4 cards (Plan Your Visit, Join a
      Group, Serve with Us, Next Steps)
- [ ] Stories: dark section "Real People. Real Hope." + 3 testimonial cards
      (quote, author, meta, avatar)
- [ ] CTA: "Your story isn't over." + Plan Your Visit / Watch a Message +
      stats (10+ Years, 500+ Weekly, 50+ Small Groups)
- [ ] Footer: charcoal-900, brand + blurb + contact, 3 link columns, social
      icons, bottom bar
- [ ] Dark mode toggles `.dark`, persists, and flips cream sections to
      charcoal-900
- [ ] Placeholder images via seeded picsum (`seed/congregate-<n>/<w>/<h>`)
- [ ] No copied ColorLib assets; brand amber #f59e0b in `@theme`
