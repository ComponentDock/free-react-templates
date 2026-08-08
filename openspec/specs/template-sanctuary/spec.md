# Template: Sanctuary (Church Template)

## Purpose

Sanctuary is a single-page church landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Faithcommunity" website template design (see TEMPLATES.md —
THREE copies: lines 142, 1296, 2911; mark ALL `[x]` when done), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Faithcommunity" — church/faith template
  (source: https://colorlib.com/wp/template/faithcommunity/). The ColorLib
  template page itself describes this as an Astro + Tailwind 4.x design
  with service times, sermon archive, event calendar, ministry signups,
  online giving, prayer requests and dark mode.
- **Preview URL:** `https://preview.colorlib.com/theme/faithcommunity/`
  returns HTTP 404 (confirmed 2026-08-08). The live rendered demo is hosted
  on Cloudflare Pages: `https://faithcommunity-colorlib.pages.dev/` (HTTP
  200, ~50 KB HTML; Astro stylesheet `/_astro/Base.E9qOMqaj.css` ~40 KB
  parsed for tokens). TEMPLATES.md screenshot
  (`faithcommunity-template-1770211119687.jpg`, 2400×1892) viewed in the
  browser; the pages.dev demo matches the screenshot 1:1 (same dark
  congregation-photo hero, "A Place to Belong" serif headline, purple
  "Plan Your Visit" pill, gold schedule times, glass "Join Us This Week"
  card, cross-in-circle logo with "Love God. Love People." tagline).
- **Visual design (from screenshot + live demo):** modern, welcoming church
  landing page. Hero = full-screen deep near-black (`bg-gray-900`) with a
  large congregation photo (`object-cover opacity-40`) behind centered serif
  headline "A Place to Belong" in white; a glassmorphism schedule card
  ("Join Us This Week") floats below the hero copy with three service
  columns whose times are highlighted in **gold #facc15**. Signature look:
  **purple primary** (`#7e22ce`/`#9333ea`) for the CTA banner, buttons,
  links and the "Stories of Faith" section background; **serif Lora
  headings + Inter body**; pill buttons (`rounded-full`); `rounded-2xl`
  cards. Sections: hero → services → about → events → ministries → sermons
  → stories of faith → CTA banner → footer. Full dark mode (`dark:`
  variants) with a `.dark` class toggle in the navbar.
- **Section order (1:1):**
  1. Header (`header.fixed.top-0.z-50.w-full.bg-transparent.transition-all`,
     `data-header` with a `data-variant` attr — transparent over the dark
     hero, solid on scroll): brand left — cross icon in a circle +
     "Grace Community Church" wordmark + small tagline "Love God. Love
     People."; center links `text-sm font-medium text-primary-100
hover:text-white` — About (`/#about`), Services (`/#services`),
     Events, Ministries, Sermons, Contact; right: "Give" outline pill
     (`rounded-full border px-5 py-2 text-sm font-medium border-white/30
text-white hover:border-white hover:bg-white/10`) + "Plan Your Visit"
     solid pill (`rounded-full bg-white px-5 py-2.5 text-sm font-medium
text-primary-700 hover:bg-primary-100`); mobile hamburger revealing a
     drawer (`border-t border-primary-200 bg-white px-4 py-4 dark:border-gray-800
dark:bg-gray-950`) with stacked links `block py-3 text-base font-medium
text-gray-900 dark:text-white` and two full-width CTAs — "Plan Your
     Visit" (`rounded-full bg-primary-600 px-5 py-3 text-sm font-medium
text-white hover:bg-primary-700`) and "Give" outline
     (`rounded-full border-2 border-primary-600 text-primary-600
hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400`).
  2. Hero (`section.relative.min-h-screen.overflow-hidden.bg-gray-900`):
     background image (congregation photo,
     `h-full w-full object-cover opacity-40`, `loading="eager"`); centered
     content — H1 `font-serif text-4xl font-bold leading-tight text-white
sm:text-5xl lg:text-6xl` "A Place to Belong"; sub-paragraph "Whether
     you're exploring faith for the first time or looking for a church
     home, you're welcome here. Join our community of believers as we grow
     together."; two CTAs — "Plan Your Visit"
     (`inline-flex items-center justify-center rounded-full bg-white px-8
py-4 text-base font-medium text-primary-700 transition-all
hover:bg-primary-50`) and "Contact Us"
     (`inline-flex items-center justify-center rounded-full border-2
border-white bg-transparent px-8 py-4 text-base font-medium text-white
transition-all hover:bg-white/10`). (The screenshot shows a purple
     primary CTA + "Watch Online" with a play icon — either button style is
     acceptable as long as the pill shape and purple/white pairing match.)
  3. "Join Us This Week" card — glassmorphism card (semi-transparent,
     rounded) below the hero copy with a `font-serif text-xl font-semibold
text-white` title and three columns: **Sunday Worship** "9:00 AM &
     11:00 AM", **Wednesday Bible Study** "7:00 PM", **Youth Group**
     "6:30 PM" — the times rendered in the gold accent (#facc15).
  4. Services (`section#services.section-padding.bg-white.dark:bg-gray-950`):
     centered H2 `font-serif text-3xl font-bold text-gray-900 dark:text-white
sm:text-4xl lg:text-5xl` "Service Times"; grid of 3 cards — **Sunday
     Worship** ("Our main worship services with contemporary and
     traditional music, inspiring messages, and children's programs."),
     **Wednesday Bible Study** ("Mid-week Bible study and prayer meeting.
     Dive deeper into Scripture with our community."), **Youth Group**
     ("Weekly gathering for middle and high school students with games,
     worship, and relevant teaching.").
  5. About (`section#about.section-padding.bg-gray-50.dark:bg-gray-900`):
     H2 "Who We Are" + paragraph "Our diverse congregation includes people
     from all walks of life, united by our common faith and commitment to
     loving God and loving people." + "What We Believe" list ("We believe
     the Bible is God's inspired Word and our guide for faith and life." +
     more belief items).
  6. Events (`section.section-padding.bg-white.dark:bg-gray-950`): H2
     "Upcoming Events"; featured card **Easter Sunday Celebration**
     (`font-serif text-2xl font-bold text-white sm:text-3xl` over a photo)
     - list rows — Community Service Day, Marriage Enrichment Workshop,
       Vacation Bible School (`font-serif text-lg font-semibold text-gray-900
dark:text-white`).
  7. Ministries (`section.section-padding.bg-white.dark:bg-gray-950`): H2
     "Get Connected"; grid of 6 ministry cards — Children's Ministry,
     Youth Ministry, Small Groups, Worship Team, Outreach & Missions, Care
     Ministry (`font-serif text-xl font-semibold`).
  8. Sermons (`section.section-padding.bg-gray-50.dark:bg-gray-900`): H2
     "Recent Sermons"; 4 sermon cards — Finding Peace in Uncertain Times,
     The Power of Community, Living with Purpose, Grace That Changes
     Everything (`font-serif text-lg font-semibold`).
  9. Stories of Faith (`section.section-padding.bg-primary-50.dark:bg-gray-900`):
     testimonial cards with round avatar images (`h-12 w-12 rounded-full
object-cover`) — The Martinez Family, Michael Chen, Jennifer Wilson.
  10. CTA banner (`section.relative.overflow-hidden.bg-primary-700.py-20.lg:py-28`):
      centered H2 `font-serif text-3xl font-bold text-white sm:text-4xl
lg:text-5xl` "You're Welcome Here" + "Plan Your Visit" link/button
      (white pill with primary-700 text).
  11. Footer (`footer.bg-gray-900.text-white`): brand blurb "A welcoming
      community of faith helping people know God, find freedom, discover
      purpose, and make a difference."; link columns **Connect** (Plan Your
      Visit, Service Times, Small Groups, Contact Us), **Grow** (Sermons,
      Events, Ministries, Give Online), **Resources** (About Us, Our
      Beliefs, Leadership, Prayer Request); contact block — email
      `info@gracecommunity.church`, phone `(512) 555-1234`, location "1200
      Faith Avenue, Austin, TX 78701"; service times recap; social icons
      (Facebook, Instagram, YouTube); bottom bar "© 2026 ..." + Privacy
      Policy / Terms of Service.
  12. Extras: dark-mode toggle (persists via localStorage), smooth-scroll
      anchors, `aria-label` on icon-only controls. The demo is a
      multi-page Astro site (Events / Ministries / Sermons / Contact / Give
      / Visit are real routes); our recreation is single-page — keep nav
      links as anchors to the on-page sections (`#services`, `#about`) and
      map the rest to `#` placeholders (or the closest matching section) so
      the structure matches 1:1.
- **Design tokens extracted from the demo CSS (`Base.E9qOMqaj.css`, Tailwind
  v4 utilities — `--color-primary-*` scale, purple family):**
  - Brand primary (Tailwind **purple** scale — put in `@theme` as
    `--color-primary-*`): **primary-50 #faf5ff** (hover states),
    **primary-100 #f3e8ff** (Stories of Faith section bg, header CTA
    hover), **primary-200 #e9d5ff** (mobile drawer top border),
    **primary-300 #d8b4fe**, **primary-400 #c084fc** (nav link hover),
    **primary-500 #a855f7**, **primary-600 #9333ea** (solid primary CTA
    bg), **primary-700 #7e22ce** (CTA banner bg, CTA hover, white-pill
    text), **primary-900 #581c87**.
  - Brand accent (gold): **#facc15** (Tailwind yellow-400 — schedule times
    in the "Join Us This Week" card and services cards).
  - Grays: **gray-50 #f9fafb** (About section bg), **gray-100 #f3f4f6**,
    **gray-300 #d1d5db**, **gray-400 #9ca3af** (muted footer text, hero
    text links), **gray-600 #4b5563**, **gray-700 #374151**, **gray-800
    #1f2937** (dark card bg), **gray-900 #111827** (hero + footer bg),
    **gray-950 #030712** (dark hero overlay).
  - Fonts (Google Fonts `<link>` in `index.html`): **Lora** (serif,
    weights 400–700 + italics) for all headings (`font-serif`); **Inter**
    (weights 300–700) for body, nav and buttons.
  - Radii: **rounded-full** (all buttons, pills, avatars), **rounded-2xl**
    (cards). Cards sit on `bg-white`/`bg-gray-50` sections with no heavy
    borders — soft, airy church aesthetic.
  - Buttons/links: solid primary `rounded-full bg-primary-600 px-5 py-2.5
text-sm font-medium text-white hover:bg-primary-700` (mobile drawer
    CTA); white pill `rounded-full bg-white px-8 py-4 text-base font-medium
text-primary-700 hover:bg-primary-50` (hero "Plan Your Visit") /
    header variant `px-5 py-2.5 text-sm`; outline `rounded-full border-2
border-white bg-transparent text-white hover:bg-white/10` (hero
    secondary); header "Give" `rounded-full border border-white/30
text-white hover:bg-white/10`; text links `text-sm text-gray-400
transition-colors hover:text-white` (hero), `text-primary-600
hover:bg-primary-50` variants.
  - Section backgrounds: hero `bg-gray-900` + photo overlay (`opacity-40`);
    body alternates `bg-white` / `bg-gray-50` with `section-padding`
    (`py-20 lg:py-28`; dark: `dark:bg-gray-950` / `dark:bg-gray-900`);
    Stories of Faith `bg-primary-50` (dark: `dark:bg-gray-900`); CTA
    banner `bg-primary-700`; footer `bg-gray-900 text-white`.
  - Container: `mx-auto max-w-7xl px-4 lg:px-8` (section-padding pattern).
- **Recreation decisions:** brand wordmark "Sanctuary" (lucide `Cross` or
  `Church` icon in a circle) instead of "Grace Community Church"; tagline
  can stay the same kind of content ("Love God. Love People." or a
  Sanctuary-flavored variant). Copy keeps the same _kind_ of content:
  service times, ministries, sermons, testimonials, contact details.
  Photos → seeded picsum (`picsum.photos/seed/sanctuary-<n>/<w>/<h>`: hero
  1600×900, event/sermon card 800×600, testimonial avatars 100×100). Icons
  → lucide-react (Cross, Menu, X, Moon, Sun, Play, Clock, MapPin, Phone,
  Mail, Heart, Users, BookOpen, Music, Globe, ChevronDown); brand social
  icons Facebook/Instagram/YouTube are NOT in lucide-react → inline SVG
  paths (like existing apps). The demo's multi-page routes collapse to
  single-page anchors. No assets copied; brand purple #9333ea → #7e22ce in
  `@theme`.

Sanctuary lives in `apps/sanctuary` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the brand wordmark,
section links, a "Plan Your Visit" pill, a "Give" pill, a dark-mode toggle
and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Sanctuary page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Sanctuary" with the tagline
  on the left
- **AND** SHALL show links for About, Services, Events, Ministries, Sermons
  and Contact
- **AND** SHALL show a "Plan Your Visit" white pill button and a "Give"
  outline pill button on the right

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible drawer SHALL show the same nav links and the two
  CTAs
- **AND** the toggle SHALL expose the menu state via aria-expanded

### Requirement: Hero section

The system SHALL render a full-screen dark hero with a congregation photo
background, a serif headline, a sub-paragraph and two CTAs.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "A Place to Belong" in white serif
  text over the dark photo background
- **AND** SHALL show the sub-paragraph welcoming visitors to the community
- **AND** SHALL show a "Plan Your Visit" white pill button and a "Contact
  Us" outline button

#### Scenario: Join Us This Week card

- **GIVEN** the hero is displayed
- **WHEN** the schedule card is visible
- **THEN** it SHALL show the title "Join Us This Week"
- **AND** SHALL show three services: Sunday Worship (9:00 AM & 11:00 AM),
  Wednesday Bible Study (7:00 PM) and Youth Group (6:30 PM)
- **AND** the service times SHALL be highlighted in the gold accent color

### Requirement: Services section

The system SHALL render a "Service Times" section with three service cards,
each with a title and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Service Times"
- **AND** SHALL show three cards: Sunday Worship, Wednesday Bible Study and
  Youth Group
- **AND** each card SHALL show a description of the service

### Requirement: About section

The system SHALL render a "Who We Are" section with an intro paragraph and a
beliefs list.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Who We Are"
- **AND** SHALL show the congregation intro paragraph
- **AND** SHALL show a "What We Believe" list of belief items

### Requirement: Events section

The system SHALL render an "Upcoming Events" section with a featured event
card and a list of additional events.

#### Scenario: Events content

- **GIVEN** the page is rendered
- **WHEN** the events section is displayed
- **THEN** it SHALL show the heading "Upcoming Events"
- **AND** SHALL show the featured event "Easter Sunday Celebration"
- **AND** SHALL show at least three more events (Community Service Day,
  Marriage Enrichment Workshop, Vacation Bible School)

### Requirement: Ministries section

The system SHALL render a "Get Connected" section with six ministry cards.

#### Scenario: Ministries content

- **GIVEN** the page is rendered
- **WHEN** the ministries section is displayed
- **THEN** it SHALL show the heading "Get Connected"
- **AND** SHALL show six ministries: Children's Ministry, Youth Ministry,
  Small Groups, Worship Team, Outreach & Missions and Care Ministry

### Requirement: Sermons section

The system SHALL render a "Recent Sermons" section with four sermon cards.

#### Scenario: Sermons content

- **GIVEN** the page is rendered
- **WHEN** the sermons section is displayed
- **THEN** it SHALL show the heading "Recent Sermons"
- **AND** SHALL show four sermons: Finding Peace in Uncertain Times, The
  Power of Community, Living with Purpose and Grace That Changes Everything

### Requirement: Stories of Faith section

The system SHALL render a "Stories of Faith" testimonial section with round
avatar images.

#### Scenario: Stories content

- **GIVEN** the page is rendered
- **WHEN** the stories section is displayed
- **THEN** it SHALL show the heading "Stories of Faith" on a primary-100
  background
- **AND** SHALL show at least three testimonials with round avatar images
  (The Martinez Family, Michael Chen, Jennifer Wilson)

### Requirement: CTA banner

The system SHALL render a purple "You're Welcome Here" banner with a
"Plan Your Visit" action.

#### Scenario: CTA banner content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL show the headline "You're Welcome Here" in white serif
  text on the primary-700 background
- **AND** SHALL show a "Plan Your Visit" button

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, three link
columns, contact details and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand blurb and social icon links
- **AND** SHALL show Connect links (Plan Your Visit, Service Times, Small
  Groups, Contact Us)
- **AND** SHALL show Grow links (Sermons, Events, Ministries, Give Online)
- **AND** SHALL show Resources links (About Us, Our Beliefs, Leadership,
  Prayer Request)
- **AND** SHALL show the contact email, phone and address
- **AND** SHALL show a copyright line with Privacy Policy and Terms of
  Service links

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

- **GIVEN** the Sanctuary app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sanctuary — Church Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/sanctuary`
- [ ] `npm run lint` passes for `apps/sanctuary`
- [ ] `scripts/verify-app.sh sanctuary` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Navbar: wordmark + tagline, 6 links, "Plan Your Visit" white pill +
      "Give" outline pill, dark-mode toggle, mobile drawer with CTAs
- [ ] Hero: bg-gray-900 + congregation photo overlay (opacity-40), serif
      "A Place to Belong" headline, sub-paragraph, 2 pill CTAs; "Join Us
      This Week" glass card with 3 services, gold (#facc15) times
- [ ] Services: "Service Times" + 3 cards (Sunday Worship, Wednesday Bible
      Study, Youth Group) with descriptions
- [ ] About: "Who We Are" + intro paragraph + "What We Believe" list
- [ ] Events: "Upcoming Events" — featured Easter Sunday Celebration +
      3 list events
- [ ] Ministries: "Get Connected" — 6 ministry cards
- [ ] Sermons: "Recent Sermons" — 4 sermon cards
- [ ] Stories of Faith: bg-primary-50, 3 testimonials with round avatars
- [ ] CTA banner: bg-primary-700, "You're Welcome Here" + "Plan Your Visit"
- [ ] Footer: bg-gray-900, brand blurb + socials, Connect/Grow/Resources
      columns, contact info, copyright + legal links
- [ ] Dark mode toggles `.dark` and persists
- [ ] Placeholder images via seeded picsum (`seed/sanctuary-<n>/<w>/<h>`)
- [ ] No copied ColorLib assets; brand purple #9333ea → #7e22ce in `@theme`
