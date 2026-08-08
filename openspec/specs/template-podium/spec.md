# Template: Podium (Tech Conference Template)

## Purpose

Podium is a single-page tech conference landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Eventor" website template design (see TEMPLATES.md — THREE
copies: lines 141, 1678, 2910), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Eventor" — tech conference/event template
  (source: https://colorlib.com/wp/template/eventor/).
- **Preview URL:** `https://preview.colorlib.com/theme/eventor/` returns
  HTTP 404 (confirmed 2026-08-08). The live rendered demo is hosted on
  Cloudflare Pages: `https://eventor-colorlib.pages.dev/` (HTTP 200, ~102 KB
  HTML; Astro stylesheet `/_astro/index@_@astro.DkeXIFjA.css` ~42 KB parsed
  for tokens). TEMPLATES.md screenshot
  (`eventor-template-1770211156837.jpg`, 2400×1892) viewed in the browser;
  the pages.dev demo matches the screenshot 1:1 (same aurora hero gradient,
  violet→rose CTAs, countdown, layout).
- **Visual design (from screenshot + live demo):** dark-themed tech
  conference landing page. Hero = deep near-black (`bg-gray-950`) with an
  "aurora" mesh: `bg-gradient-to-br from-primary-950 via-gray-950
to-accent-950` plus two huge blurred glow orbs (`bg-primary-500/30
blur-[120px]` top-left, `bg-accent-500/30 blur-[120px]` bottom-right, and
  a centered `bg-primary-600/20 blur-[100px]`) plus a faint 1px white grid
  overlay (`bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),...]`).
  Signature look: **violet `#8b5cf6` (primary) → rose `#f43f5e` (accent)
  gradient** on all CTAs ("Get Tickets" pills, "Technology" accent in the
  H1, "Get Your Tickets Now"), Space Grotesk sans throughout, glassy
  backdrop-blur countdown boxes, pill buttons (`rounded-full`), rounded-2xl
  speaker cards with gradient photo overlays. Sections: hero (badge,
  headline, countdown, 2 CTAs, stats row, SCROLL indicator) → Speakers →
  Schedule (3-day tabs + timeline) → Tickets (4 pricing tiers + trust
  strip) → Sponsors (4 tiers) → Venue (map card, features, hotels) → CTA
  banner → footer. Full dark mode (`dark:` variants) with a navbar toggle.
- **Section order (1:1):**
  1. Navbar (`header.fixed.left-0.right-0.top-0.z-50.transition-all.bg-transparent`
     — transparent over the dark hero): brand "TechSummit 2032" (logo icon +
     name) left; center links Speakers / Schedule / Tickets / Sponsors /
     Venue (`text-sm font-medium text-white/80 hover:text-white`); right:
     dark-mode toggle (moon icon) + "Get Tickets" pill
     (`rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-5
py-2.5 text-sm font-semibold text-white shadow-lg
shadow-primary-500/25 hover:shadow-xl`); mobile hamburger
     (`aria-label`, `aria-expanded`) revealing a panel with the same links +
     CTA (`text-lg ... hover:text-primary-400`).
  2. Hero (`section.relative.min-h-screen.overflow-hidden.bg-gray-950`):
     aurora layers (see above); date badge
     `mb-8 inline-flex items-center gap-2 rounded-full border
border-primary-500/30 bg-primary-500/10 px-4 py-2 backdrop-blur-sm`
     — "March 15-17, 2032 • San Francisco, CA"; H1
     `max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white
sm:text-6xl lg:text-7xl` — "The Premier Technology Conference" with
     "Technology" in the primary→accent gradient (`bg-gradient-to-r
from-primary-400 to-accent-400 bg-clip-text text-transparent`);
     sub-paragraph (Join 3,000+ tech leaders…); countdown row `mt-12 flex
gap-4` of four glass boxes (`flex flex-col items-center rounded-2xl
border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-sm sm:px-8`)
     labelled Days / Hours / Minutes / Seconds (tabular digits); CTAs
     `mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row` —
     "Get Your Tickets" (gradient pill + ArrowRight) and "View Speakers"
     (`rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base
font-semibold text-white backdrop-blur-sm hover:border-white/30
hover:bg-white/10`); stats row `mt-16 grid gap-8 sm:grid-cols-2
lg:grid-cols-4` — 3,000+ Attendees / 50+ Speakers / 3 Days / 20+
     Workshops (value `text-4xl font-bold` + label `text-sm text-gray-400`);
     SCROLL indicator `absolute bottom-8 left-1/2 -translate-x-1/2`
     (word + ChevronDown).
  3. Speakers (`section#speakers.bg-white.py-20.dark:bg-gray-950.lg:py-28`):
     centered header — eyebrow "World-Class Speakers" (`text-sm font-semibold
uppercase tracking-wider text-primary-500`), H2 "Learn From the **Best**"
     (accent span in gradient), sub "Industry leaders and innovators sharing
     their insights and expertise."; grid `mt-16 grid gap-8 sm:grid-cols-2
lg:grid-cols-3` of 6 speaker cards — **Dr. Sarah Chen** (Chief AI
     Officer, OpenMind Labs — "The Future of AI: Beyond Large Language
     Models"), **Marcus Johnson** (VP of Engineering, CloudScale — "Scaling
     Infrastructure for the Next Billion Users"), **Elena Rodriguez**
     (Founder & CEO, GreenTech Ventures — "Building Sustainable Tech
     Companies"), **David Kim** (Principal Designer, Figma — "Design Systems
     at Scale"), **Aisha Patel** (Security Researcher, CyberShield — "Zero
     Trust Architecture in Practice"), **James Wright** (CTO, QuantumLeap —
     "Quantum Computing: From Theory to Reality"). Card:
     `group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900`;
     photo `aspect-[4/5] overflow-hidden` with `group-hover:scale-105`
     zoom; gradient overlay `absolute inset-0 bg-gradient-to-t from-gray-900
via-gray-900/50 to-transparent`; bottom overlay `absolute bottom-0
left-0 right-0 p-6` — talk title `mb-2 text-sm font-medium
text-primary-400`, name `text-xl font-bold text-white`, role `text-sm
text-gray-300`, social icon row `mt-4 flex gap-3` (X/LinkedIn inline
     SVGs, `text-white/70 hover:text-primary-400`).
  4. Schedule (`section#schedule.bg-gray-50.py-20.dark:bg-gray-900.lg:py-28`):
     centered header — eyebrow "3-Day Event", H2 "Event **Schedule**", sub
     "Three days packed with inspiring talks, hands-on workshops, and
     networking opportunities."; day tabs `mt-10 inline-flex rounded-full
border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800`
     — March 15 Day 1 / March 16 Day 2 / March 17 Day 3 (active tab
     `rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900`,
     inactive `text-gray-600 hover:text-gray-900`); timeline `mt-12 space-y-4`
     per day — each row `flex items-start gap-4 rounded-2xl border
border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800`:
     time column (`w-24 text-sm font-semibold text-gray-900 dark:text-white`),
     type badge (`rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold
text-primary-700 dark:bg-primary-900/30 dark:text-primary-400` — Break /
     Keynote / Talk / Workshop / Networking), title + speaker + location,
     "Add to Calendar" text link (`text-primary-500 hover:text-primary-600`
     - Calendar icon).
     * Day 1 (March 15): 8:00 AM Break Main Lobby "Registration & Breakfast"
       (no CTA) · 9:00 AM Keynote Main Stage "Opening Keynote: The Future of
       AI" — Dr. Sarah Chen · 10:30 AM Break Exhibition Hall "Coffee Break &
       Networking" · 11:00 AM Talk Main Stage "Scaling Infrastructure for
       the Next Billion" — Marcus Johnson · 12:00 PM Break Grand Ballroom
       "Lunch & Sponsor Showcase" · 1:30 PM Workshop Workshop Room A
       "Workshop: Building with AI APIs" — Various · 3:00 PM Talk Room B
       "Design Systems at Scale" — David Kim · 4:00 PM Talk Main Stage
       "Panel: The Future of Work" — Industry Leaders · 5:30 PM Networking
       Rooftop Terrace "Welcome Reception" (no CTA).
     * Day 2 (March 16): 8:30 AM Break Main Lobby "Breakfast & Networking" ·
       9:30 AM Keynote Main Stage "Building Sustainable Tech Companies" —
       Elena Rodriguez · 10:30 AM Break Exhibition Hall "Coffee Break" ·
       11:00 AM Talk Main Stage "Zero Trust Architecture in Practice" —
       Aisha Patel · 12:00 PM Break Grand Ballroom "Lunch" · 1:30 PM
       Workshop Workshop Room A "Workshop: Kubernetes Deep Dive" — Various ·
       1:30 PM Workshop Workshop Room B "Workshop: Product Design Sprint" —
       Various · 4:00 PM Talk Main Stage "Quantum Computing: Theory to
       Reality" — James Wright · 5:30 PM Networking The Grand Hall
       "Conference Party" (no CTA).
     * Day 3 (March 17): 9:00 AM Break Main Lobby "Breakfast" · 10:00 AM
       Talk Main Stage "Lightning Talks" — Community Speakers · 11:30 AM
       Workshop Various Rooms "Unconference Sessions" · 12:30 PM Break Grand
       Ballroom "Lunch" · 2:00 PM Keynote Main Stage "Closing Keynote:
       What's Next" — Special Guest · 3:30 PM Keynote Main Stage "Closing
       Remarks & Awards" (no speaker) · 4:00 PM Networking Main Lobby
       "Farewell Networking" (no CTA).
       Legend row (Keynote / Talk / Workshop / Break / Networking chips) +
       "Download Full Schedule (PDF)" link.
  5. Tickets (`section#tickets.bg-white.py-20.dark:bg-gray-950.lg:py-28`):
     centered header — eyebrow "Limited Availability", H2 "Get Your
     **Tickets**", sub "Choose the pass that fits your needs. All tickets
     include access to keynotes and networking events."; grid
     `mt-16 grid gap-8 lg:grid-cols-4` of 4 pricing cards
     (`relative rounded-2xl border-2 p-8 transition-all`):
     - **Early Bird** — badge `absolute -top-4 left-1/2 -translate-x-1/2
rounded-full bg-gray-500 px-4 py-1 text-sm font-semibold text-white`
       "Sold Out"; `opacity-75` + `border-gray-200 bg-gray-50
dark:border-gray-800 dark:bg-gray-900`; "Limited availability - save
       40%"; price `$299` with strikethrough `$499`; "per person"; features:
       Full 3-day conference access, All keynotes and talks, Networking
       events, Conference swag bag, Lunch included; disabled "Sold Out"
       button (`rounded-full bg-gray-300 text-gray-500 cursor-not-allowed`).
     - **Regular** — "Most Popular" badge
       `rounded-full bg-gradient-to-r from-primary-500 to-accent-500`; card
       `border-primary-500 bg-primary-50 dark:bg-primary-950/50`; "Standard
       conference pass"; `$499` "per person"; features: same 5 + Workshop
       access (2 sessions); CTA "Get Regular Pass" (gradient pill).
     - **VIP** — plain card; "Premium experience"; `$899`; features: same 6
       - VIP lounge access + Priority seating; CTA "Get VIP Pass" (outline
         `border-2 border-gray-300 hover:border-primary-500 hover:text-primary-500`).
     - **Team** — plain card; "Best for 5+ members"; `$1899`; features:
       same 6 + Team of 5 passes + Private networking session; CTA "Get
       Team Pass" (outline).
       Trust strip below (`mt-16 rounded-2xl border border-gray-200 bg-gray-50
p-8 dark:border-gray-800 dark:bg-gray-900`; `grid gap-8 md:grid-cols-3`):
       Secure checkout / 30-day refund policy / Instant confirmation — icon
       chip `mx-auto flex h-12 w-12 items-center justify-center rounded-full
bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400`
     * title + sub.
  6. Sponsors (`section#sponsors.bg-gray-50.py-20.dark:bg-gray-900.lg:py-28`):
     centered header — eyebrow "Our Partners", H2 "Proudly **Sponsored
     By**", sub; four tier groups, each with centered uppercase tier label
     (`mb-8 text-center text-sm font-semibold uppercase tracking-wider
text-gray-500 dark:text-gray-400`) and a logo grid of white cards
     (`group flex items-center justify-center rounded-xl border
border-gray-200 bg-white px-10 py-4 transition-all hover:border-primary-300
hover:shadow-lg dark:border-gray-700 dark:bg-gray-800`): **Platinum
     Sponsors** — TechCorp, CloudScale (h-20 cards); **Gold Sponsors** —
     DataFlow, SecureNet, DevTools Inc (h-16); **Silver Sponsors** —
     StartupHub, CodeCraft, InnovateLab (h-16); **Community Partners** —
     TechMedia, DevCommunity (h-12, text links `text-gray-400
hover:text-primary-500`). "Become a Sponsor" box
     (`mt-16 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800
dark:bg-gray-900`; `flex flex-col items-center justify-between gap-6
lg:flex-row`): headline + copy "Showcase your brand to 3,000+ tech
     professionals…" + two CTAs — "Download Sponsorship Kit" (gradient
     pill) + "Contact Sponsorship Team" (outline).
  7. Venue (`section#venue.bg-white.py-20.dark:bg-gray-950.lg:py-28`):
     centered header — eyebrow "The Location", H2 "Event **Venue**", sub
     "Located in the heart of San Francisco, Moscone Center is one of the
     largest convention centers on the West Coast…"; grid `mt-16 grid gap-8
lg:grid-cols-2`: left card (`rounded-2xl border border-gray-200
bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900`) — MapPin icon
     chip, "Moscone Center" H3, "747 Howard Street" address, "Directions"
     link; right card — "Venue Features" list (6 CheckCircle2 items:
     State-of-the-art AV equipment, High-speed WiFi throughout, Multiple
     breakout rooms, On-site catering, Accessible facilities, Public
     transit accessible); below: "Recommended Hotels" (The St. Regis San
     Francisco 0.2 miles, San Francisco Marriott Marquis 0.1 miles, Hotel
     Vitale 0.5 miles) with "Use code TECHSUMMIT32 for exclusive rates." +
     "Get Directions" gradient button.
  8. CTA banner (`section.relative.overflow-hidden.bg-gray-950.py-20.lg:py-28`):
     aurora/grid overlay reuse; centered — eyebrow "Limited tickets
     remaining", H2 `text-white` "Don't Miss **Out**" (gradient span), sub
     "Join us for three days of inspiring talks, hands-on workshops, and
     networking with industry leaders. Secure your spot today."; date line
     (Calendar icon) "March 15-17, 2032" + venue line (MapPin icon)
     "Moscone Center, San Francisco, CA"; "Get Tickets Now" gradient pill;
     trust row (Secure checkout / 30-day refund policy / Instant
     confirmation).
  9. Footer (`footer.border-t.border-gray-200.bg-gray-900.dark:border-gray-800`):
     4 columns — brand blurb "TechSummit 2032" + date/venue line + social
     icon buttons (X, LinkedIn, GitHub, YouTube — inline SVGs); **Event**
     (Speakers, Schedule, Tickets, Sponsors, Venue); **Resources** (Code of
     Conduct, Press Kit, Become a Sponsor, Call for Speakers, FAQ);
     **Contact** (info@techsummit2032.com, Moscone Center / 747 Howard
     Street / San Francisco, CA 94103). Bottom bar: "© 2026 TechSummit 2032. All rights reserved." + Privacy Policy / Terms of Service.
  10. Extras: dark-mode toggle (persists), smooth-scroll, countdown timer
      (static target or client-side countdown to a fixed future date),
      `data-animate` scroll-in animations optional, `aria-label` on
      icon-only controls. Demo is a multi-page Astro site (Speakers /
      Schedule / Tickets / Sponsors / Venue are real routes); our
      recreation is single-page — keep nav links as anchors to the sections
      (`#speakers`, `#schedule`, `#tickets`, `#sponsors`, `#venue`) so
      structure matches 1:1.
- **Design tokens extracted from the demo CSS (`index@_@astro.DkeXIFjA.css`,
  Tailwind v4 utilities — `--color-primary-*` / `--color-accent-*` scales):**
  - Brand primary (Tailwind **violet** scale — put in `@theme` as
    `--color-primary-*`): **primary-100 #ede9fe** (schedule type badges,
    trust icon chips), **primary-400 #a78bfa** (speaker talk titles,
    hover links, gradient start), **primary-500 #8b5cf6** (gradient CTAs,
    text links, focus states), **primary-600 #7c3aed** (link hovers),
    **primary-700 #6d28d9** (badge text), **primary-950 #2e1065** (hero
    aurora gradient start).
  - Brand accent (Tailwind **rose** scale — `--color-accent-*`):
    **accent-400 #fb7185** (gradient end), **accent-500 #f43f5e** (gradient
    CTAs, "Technology" accent), **accent-950 #4c0519** (hero aurora
    gradient end).
  - Grays: **gray-50 #f9fafb** (alt section bg, Early Bird card bg),
    **gray-100 #f3f4f6** (speaker card bg, trust icon chips), **gray-200
    #e5e7eb** (borders, sponsor card borders), **gray-300 #d1d5db**
    (disabled buttons, speaker roles), **gray-400 #9ca3af** (footer muted
    links, hero stat labels), **gray-500 #6b7280** (Sold Out badge),
    **gray-600 #4b5563** (inactive tab text), **gray-700 #374151**,
    **gray-800 #1f2937** (dark card bg, schedule rows), **gray-900 #111827**
    (footer bg, speaker card overlay, active tab), **gray-950 #030712**
    (hero + CTA banner bg, dark section bg).
  - Font: **"Space Grotesk"** (Google Fonts weights 400/500/600/700 — used
    for everything: headings, body, buttons, countdown digits). Load via
    one Google Fonts `<link>` in `index.html`
    (`family=Space+Grotesk:wght@400;500;600;700&display=swap`).
  - Radii: **rounded-full** (all buttons, pills, badges, tabs, icon chips),
    **rounded-2xl 1rem** (countdown boxes, speaker cards, schedule rows,
    pricing cards, sponsor cards, venue cards, trust strip),
    **rounded-xl 0.75rem** (sponsor cards).
  - Buttons/links: primary CTA = gradient `bg-gradient-to-r from-primary-500
to-accent-500 text-white rounded-full shadow-lg shadow-primary-500/25
hover:shadow-xl hover:shadow-primary-500/30` (nav `px-5 py-2.5 text-sm
font-semibold`; hero `px-8 py-4 text-base` + ArrowRight; card
    `block w-full px-6 py-3 text-center font-semibold`); outline
    `rounded-full border-2 border-gray-300 px-6 py-3 font-semibold
text-gray-700 hover:border-primary-500 hover:text-primary-500`
    (dark variants); hero ghost `border-2 border-white/20 bg-white/5
backdrop-blur-sm hover:border-white/30 hover:bg-white/10`; text links
    `font-medium text-primary-500 hover:text-primary-600`; disabled
    `rounded-full bg-gray-300 text-gray-500 cursor-not-allowed`.
  - Section backgrounds: hero/CTA banner `bg-gray-950` + aurora (gradient
    - blur orbs + 1px grid overlay); body alternates `bg-white` /
      `bg-gray-50` with `py-20 lg:py-28` (dark: `dark:bg-gray-950` /
      `dark:bg-gray-900`); footer `bg-gray-900 border-t border-gray-200`
      (dark: `dark:border-gray-800`).
  - Cards: speaker `rounded-2xl bg-gray-100 dark:bg-gray-900` + photo
    `aspect-[4/5]` with gradient overlay; schedule rows `rounded-2xl border
border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800`;
    pricing `rounded-2xl border-2 p-8` (Regular: `border-primary-500
bg-primary-50 dark:bg-primary-950/50`); sponsor cards `rounded-xl
border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800`;
    section container `mx-auto max-w-7xl px-4 lg:px-8`.
- **Recreation decisions:** brand wordmark "Podium" (lucide Mic or
  Presentation icon) instead of "TechSummit 2032" — copy may keep the same
  _kind_ of content with the new brand ("Podium", "© 2026 Podium. All
  rights reserved.", `info@podium.example`). Event dates can stay
  "March 15-17, 2032" or be replaced with a generic near-future date —
  keep the same shape. Photos → seeded picsum
  (`picsum.photos/seed/podium-<n>/<w>/<h>`: hero none (aurora), speaker
  portraits 400×500 / 4:5, sponsor logos as text wordmarks in cards — no
  image assets needed). Icons → lucide-react (Mic, Presentation, Menu, X,
  Moon, Sun, ArrowRight, ChevronDown, Calendar, MapPin, CheckCircle2,
  Check, Clock, Download, Sparkles, ShieldCheck, RefreshCcw, Zap, CreditCard,
  Linkedin, Twitter/X? — brand icons X/LinkedIn/GitHub/YouTube NOT in
  lucide-react → inline SVG paths like existing apps). Countdown = client
  side (fixed target date or static 00 boxes; test the four units render).
  Schedule day tabs switch timeline content client-side (3 data sets).
  Ticket buttons are decorative links (`#`). No assets copied; brand
  gradient #8b5cf6 → #f43f5e in `@theme`.

Podium lives in `apps/podium` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the brand wordmark,
section links, a gradient CTA, a dark-mode toggle and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Podium page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Podium" on the left
- **AND** SHALL show links for Speakers, Schedule, Tickets, Sponsors and
  Venue
- **AND** SHALL show a "Get Tickets" gradient button on the right
- **AND** SHALL show a dark-mode toggle button

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible menu SHALL show the same nav links and CTA
- **AND** the toggle SHALL expose the menu state via aria-expanded

### Requirement: Hero section

The system SHALL render a full-screen dark hero with an aurora gradient
background, a date badge, a headline with a gradient accent, a countdown
timer, two CTAs and a stats row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the badge "March 15-17, 2032 • San Francisco, CA"
- **AND** SHALL show the headline "The Premier Technology Conference" with
  "Technology" in the brand gradient
- **AND** SHALL show the sub-paragraph about joining 3,000+ tech leaders
- **AND** the background SHALL use the dark aurora gradient (violet → rose
  orbs + grid overlay) for a near-black base

#### Scenario: Hero countdown

- **GIVEN** the hero is displayed
- **WHEN** the countdown row is visible
- **THEN** it SHALL show four glass boxes labelled Days, Hours, Minutes and
  Seconds with numeric values

#### Scenario: Hero CTAs and stats

- **GIVEN** the hero is displayed
- **WHEN** the CTA row and stats row are visible
- **THEN** it SHALL show a "Get Your Tickets" gradient button and a
  "View Speakers" outline button
- **AND** SHALL show four statistics: 3,000+ Attendees, 50+ Speakers, 3
  Days and 20+ Workshops

### Requirement: Speakers section

The system SHALL render a "Learn From the Best" section with six speaker
cards, each with a photo, a talk title, a name, a role and social links.

#### Scenario: Speakers content

- **GIVEN** the page is rendered
- **WHEN** the speakers section is displayed
- **THEN** it SHALL show the heading "Learn From the Best"
- **AND** SHALL show six speakers: Dr. Sarah Chen, Marcus Johnson, Elena
  Rodriguez, David Kim, Aisha Patel and James Wright
- **AND** each card SHALL show a talk title, the speaker name, the role and
  social icon links

### Requirement: Schedule section

The system SHALL render a three-day event schedule with day tabs and a
timeline of events per day, each with a time, type badge, title, speaker,
location and an Add to Calendar action.

#### Scenario: Schedule content

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL show the heading "Event Schedule"
- **AND** SHALL show tabs for March 15 (Day 1), March 16 (Day 2) and
  March 17 (Day 3)
- **AND** the active day SHALL show its timeline of events with time, type
  badge (Break / Keynote / Talk / Workshop / Networking), title, speaker
  and location

#### Scenario: Switching schedule days

- **GIVEN** the schedule section is displayed
- **WHEN** the user activates a different day tab
- **THEN** the timeline SHALL switch to that day's events
- **AND** the active tab SHALL be highlighted

### Requirement: Tickets section

The system SHALL render a "Get Your Tickets" section with four pricing
tiers, each with a name, description, price, feature list and a call to
action.

#### Scenario: Tickets content

- **GIVEN** the page is rendered
- **WHEN** the tickets section is displayed
- **THEN** it SHALL show the heading "Get Your Tickets"
- **AND** SHALL show four tiers: Early Bird ($299, Sold Out), Regular
  ($499, Most Popular), VIP ($899) and Team ($1899)
- **AND** each tier SHALL show its features and a call-to-action button
- **AND** the Regular tier SHALL be visually highlighted with the brand
  border and background

#### Scenario: Trust strip

- **GIVEN** the tickets section is displayed
- **WHEN** the strip below the pricing grid is visible
- **THEN** it SHALL show Secure checkout, 30-day refund policy and Instant
  confirmation items with icon chips

### Requirement: Sponsors section

The system SHALL render a "Proudly Sponsored By" section with four sponsor
tiers and a "Become a Sponsor" callout with two CTAs.

#### Scenario: Sponsors content

- **GIVEN** the page is rendered
- **WHEN** the sponsors section is displayed
- **THEN** it SHALL show the heading "Proudly Sponsored By"
- **AND** SHALL show Platinum (TechCorp, CloudScale), Gold (DataFlow,
  SecureNet, DevTools Inc), Silver (StartupHub, CodeCraft, InnovateLab)
  and Community Partners (TechMedia, DevCommunity)
- **AND** SHALL show a "Become a Sponsor" callout with a "Download
  Sponsorship Kit" button and a "Contact Sponsorship Team" button

### Requirement: Venue section

The system SHALL render an "Event Venue" section with venue details, a
features list, recommended hotels and a directions action.

#### Scenario: Venue content

- **GIVEN** the page is rendered
- **WHEN** the venue section is displayed
- **THEN** it SHALL show the heading "Event Venue"
- **AND** SHALL show the venue name, address and a Directions link
- **AND** SHALL show six venue features
- **AND** SHALL show three recommended hotels with distances and the promo
  code note
- **AND** SHALL show a "Get Directions" button

### Requirement: CTA banner

The system SHALL render a dark "Don't Miss Out" banner with an eyebrow,
headline, date and venue lines, a gradient CTA and a trust row.

#### Scenario: CTA banner content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL show the headline "Don't Miss Out"
- **AND** SHALL show the event date and venue lines
- **AND** SHALL show a "Get Tickets Now" gradient button
- **AND** SHALL show the trust items (Secure checkout, 30-day refund
  policy, Instant confirmation)

### Requirement: Footer

The system SHALL render a footer with brand info, event links, resource
links, contact details and legal links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand blurb and social icon links
- **AND** SHALL show Event links (Speakers, Schedule, Tickets, Sponsors,
  Venue)
- **AND** SHALL show Resources links (Code of Conduct, Press Kit, Become a
  Sponsor, Call for Speakers, FAQ)
- **AND** SHALL show the contact email and venue address
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

- **GIVEN** the Podium app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Podium — Tech Conference Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/podium`
- [ ] `npm run lint` passes for `apps/podium`
- [ ] `scripts/verify-app.sh podium` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Navbar: wordmark, 5 links, "Get Tickets" gradient button, dark-mode
      toggle, mobile menu
- [ ] Hero: aurora bg (gradient + blur orbs + grid overlay), date badge,
      H1 with gradient "Technology", countdown (Days/Hours/Minutes/Seconds),
      2 CTAs, stats row (3,000+ / 50+ / 3 / 20+), SCROLL indicator
- [ ] Speakers: 6 cards (photo, gradient overlay, talk title in
      primary-400, name, role, social icons)
- [ ] Schedule: 3 day tabs (March 15/16/17) switching timelines; rows with
      time, type badge, title, speaker, location, "Add to Calendar";
      legend + "Download Full Schedule (PDF)"
- [ ] Tickets: 4 tiers (Early Bird sold out + strikethrough $499, Regular
      highlighted "Most Popular", VIP, Team); trust strip (Secure checkout /
      30-day refund policy / Instant confirmation)
- [ ] Sponsors: 4 tiers with logo cards; "Become a Sponsor" callout with 2
      CTAs
- [ ] Venue: venue card (Moscone Center, 747 Howard Street, Directions),
      6 features, 3 hotels with distances, promo code note, "Get
      Directions"
- [ ] CTA banner: bg-gray-950 + aurora, "Don't Miss Out" headline, date +
      venue lines, "Get Tickets Now", trust row
- [ ] Footer: 4 columns (brand + socials, Event, Resources, Contact),
      copyright + legal links
- [ ] Dark mode toggles `.dark` and persists
- [ ] Placeholder images via seeded picsum (`seed/podium-<n>/<w>/<h>`);
      sponsor logos as styled text wordmarks
- [ ] No copied ColorLib assets; brand gradient #8b5cf6 → #f43f5e in
      `@theme`
