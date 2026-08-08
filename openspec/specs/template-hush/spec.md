# Template: Hush (Travel / Spiritual Retreat)

## Purpose

Hush is a single-page contemplative retreat center landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Serenity" website template design
(source: https://colorlib.com/wp/template/serenity/), built under a
DIFFERENT name (Hush — the quiet stillness a retreat offers) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-serenity/` (plus `docs/templates/serenity/`)
> using the FORBIDDEN ColorLib source name; both were deleted and replaced
> by this fresh prep (new name Hush), matching the Cloudnest→Nimbus /
> Neuralflow→Sentient / Pipelineiq→Dealflow / Saasify→Zenith /
> Serenite→Sooth precedent.

## Design reference (replication findings)

- **Original:** ColorLib "Serenity" — spiritual retreat center / monastic
  sanctuary landing template (category "Travel" per the preview portal
  products.js; TEMPLATES.md item "Serenity").
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/serenity/`) returns 404; the
  ColorLib preview portal hosts the demo at
  `https://serenity-colorlib.pages.dev/` (HTTP 200, ~67 KB HTML +
  `/_astro/Base.DWVOSce0.css` ~49 KB parsed for tokens). The TEMPLATES.md
  screenshot (`serenity-template-1770211390595.jpg`, 2400×1892 AVIF) was
  also fetched (HTTP 200) and matches the live demo. Same Cloudflare-Pages
  hosting pattern as Logitrans→Freightly / Neuralflow→Sentient /
  Serenite→Sooth.
- **Visual design (screenshot + live render):** full-bleed hero of misty
  snow-capped mountains at dusk (deep blue-purple sky left → warm
  orange-pink right), white serif headline "Find Rest for Your Soul" over
  the image, Psalm 46:10 quote ("Be still, and know that I am God.")
  above the H1, sage-green (#4d5b4a) pill buttons + ghost outline
  secondary, scroll cue "ENTER THE STILLNESS" at the hero bottom;
  dark forest-green Daily Office band, alternating white / warm stone
  (#f3f1ec) section backgrounds, dark umber-brown (#594d44) footer —
  serene, contemplative, premium monastic aesthetic.
- **Section order (1:1, from live demo DOM):**
  1. Header (`header data-header`, `fixed left-0 right-0 top-0 z-50`,
     transparent over hero, `transition-all duration-500`): logo = round
     `bg-primary-600` icon (mountain/leaf SVG, white stroke) + wordmark
     "Stillwater Retreat" (serif, white) + tagline "A Sanctuary for the
     Soul" (text-xs tracking-widest stone-300, hidden sm); links Retreats,
     Spiritual Direction, Sacred Spaces, Resources, Connect (text-sm,
     white/90, hover white); "Book a Retreat" primary pill; dark-mode
     toggle (`id=theme-toggle`); mobile menu button (`id=mobile-menu-
toggle`, hamburger → `id=mobile-menu` panel).
  2. Hero (`section.relative.min-h-screen.overflow-hidden`): full-bleed
     background image (mountains, `bg-cover`), Psalm 46:10 quote in
     small caps/serif, H1 "Find Rest for Your Soul" (serif), subtext
     "Step away from the noise. Enter into silence. Discover the quiet
     place where God meets you.", CTAs "Explore Retreats" (primary pill,
     arrow) + "Begin Spiritual Direction" (ghost border-white), scroll
     indicator "ENTER THE STILLNESS" with downward chevron at bottom
     center.
  3. Daily Office (`section#rhythm`, `bg-primary-900 py-20 lg:py-28`):
     eyebrow + H2 "A Rhythm of Prayer" (white), intro "Four times daily,
     our community gathers in the chapel to pray…"; 4 cards
     (grid sm:grid-cols-2 lg:grid-cols-4): Lauds 6:30 AM, Midday Prayer
     12:00 PM, Vespers 5:30 PM, Compline 8:30 PM — each with a small icon
     and description of the office.
  4. About (`section#about`, `py-20 lg:py-28`, white): stats row
     (grid-cols-2 sm:grid-cols-4): 35+ Years of Ministry, 12,000+ Retreat
     Guests, 80 Acres of Silence, 4 Daily Prayer Offices; then eyebrow
     "OUR STORY" + H2 "A Place Set Apart" + two-column layout with
     founding narrative ("Stillwater Retreat was founded in 1987 by a
     small community of contemplatives…") + image.
  5. Practices (`section#practices`, `bg-stone-100 dark:bg-stone-900
py-20 lg:py-28`): eyebrow "CONTEMPLATIVE PRACTICES", H2 "Ancient
     Paths to the Present", intro; 6 cards (grid sm:grid-cols-2
     lg:grid-cols-3): Centering Prayer, Lectio Divina, Walking
     Meditation, Labyrinth Walk, Examen, Silent Sitting — each with icon,
     title, 1–2 sentence description.
  6. Retreats (`section#retreats`, `py-20 lg:py-28`, white): eyebrow
     "UPCOMING RETREATS", H2 "Step Away. Go Deeper.", intro "From
     single-day refreshers to week-long immersions…"; 3 cards
     (grid lg:grid-cols-3): featured "Spring Silence Retreat" (badge
     "Featured" + "4 spots left", April 14-19, 2025 · 5 nights, "Five
     Days of Guided Silence", with Sr. Margaret Anne, $795), "Introduction
     to Contemplative Prayer" (March 7-9, 2025 · 2 nights, "Weekend
     Immersion", $495), "Day of Rest" (one-day retreat, $95).
  7. Sacred Spaces (`section#spaces`, `py-20 lg:py-28`): eyebrow "SACRED
     SPACES", H2 "80 Acres of Sanctuary", intro "Our grounds are designed
     to invite encounter…"; 4 cards (grid sm:grid-cols-2 lg:grid-cols-4):
     The Chapel (seats 40, Daily Office, candle lighting, open 5:30 AM -
     10:00 PM), The Labyrinth (11-circuit Chartres-style, meadow), Prayer
     Garden, Forest Trails.
  8. Spiritual Direction (`section#directors`, `bg-stone-100 dark:bg-
stone-900 py-20 lg:py-28`): eyebrow "SPIRITUAL DIRECTION", H2
     "Companions for the Journey", intro; 4 director cards (grid
     sm:grid-cols-2 lg:grid-cols-4): Sr. Margaret Anne, OSB (Director of
     Spiritual Formation — 30 years, Centering Prayer / Discernment / Life
     Transitions, Mon–Thu), Fr. David Brennan (Retreat Director), Dr.
     Sarah Chen, Brother Thomas — each with portrait, name, role,
     specialties, availability.
  9. Testimonials (`section.bg-stone-100 dark:bg-stone-900 py-20
lg:py-28`): eyebrow "STORIES", H2 "Transformed by Stillness"; 3+
     quote cards (quote, name, context): Michael Torres ("After a 5-day
     silent retreat"), Jennifer Walsh ("Ongoing spiritual direction"), +
     1–2 more.
  10. Closing CTA (`section.relative.overflow-hidden py-20 lg:py-28`,
      deep gradient/photo band): H2 "Begin Your Journey Inward", subtext
      "Whether you're seeking rest, direction, or a deeper relationship
      with God…", buttons "Book a Retreat" (primary) + "Contact Us"
      (ghost).
  11. Footer (`footer.bg-stone-900.text-stone-300`): "Join Us in Prayer"
      strip (Lauds · 6:30 AM, Midday Prayer · 12:00 PM, Vespers · 5:30 PM,
      Compline · 8:30 PM); brand blurb + contact (welcome@…,
      (555) 234-5678, 1247 Monastery Road, Cedar Valley, OR 97330);
      link columns EXPERIENCE (Retreats, Spiritual Direction, Day Visits,
      Group Bookings), EXPLORE (Sacred Spaces, Daily Office, Our Story,
      Resources), CONNECT (Contact Us, Newsletter, Donate, Volunteer);
      bottom bar with scripture quote "Come to me…" + copyright.
  - Extras: sticky header with scroll transition, mobile menu panel,
    dark-mode toggle (`.dark` class on root, `theme-toggle` +
    `theme-toggle-mobile` buttons), scroll-reveal animations, skip link.
- **Design tokens extracted from `Base.DWVOSce0.css` + DOM:**
  - Brand color: **#4d5b4a** (sage/forest green; scale primary-100
    #e3e7e2, primary-200 #c6cfc4, primary-300 #a2b09f, primary-400
    #7d8f79, primary-600 #4d5b4a, primary-700 #3f4a3d, primary-900
    #2d332c) — primary buttons, logo mark, dark bands, links, eyebrows.
  - Accent neutrals: warm stone scale — stone-50 #faf9f7, stone-100
    #f3f1ec, stone-200 #e6e1d8, stone-300–stone-800 (text), stone-900
    #594d44 (footer / dark bands); secondary earthy brown #6c5d51 /
    #847160 / #594d44 for small details.
  - Fonts: **"Cormorant Garamond"** (headings, serif, 300–700) +
    **"Inter"** (body, 300–700) via Google Fonts
    (`fonts.googleapis.com/css2?family=Cormorant+Garamond…&family=Inter…`).
  - Shapes: buttons **rounded-full** (pill, `border-radius:3.40282e38px`
    = Tailwind full); `.btn-primary` bg #4d5b4a, white text, font-medium,
    px-6 py-3, shadow `0 10px 15px -3px #4d5b4a33`, hover bg #3f4a3d +
    deeper shadow; `.btn-secondary` = 2px border #4d5b4a, text #4d5b4a,
    transparent bg; ghost-on-dark = border-white/30 text-white.
  - Section rhythm: py-20 lg:py-28; alternating white / stone-100;
    dark bands bg-primary-900; footer bg-stone-900.
  - Headings: serif (Cormorant Garamond), large; eyebrows uppercase
    text-xs tracking-widest text-primary-300/400 (on dark) or
    text-primary-600 (on light).
  - Dark mode: class-based `.dark` on root (light bands → stone-900,
    text inverts to stone-300/400), toggle in header, persisted.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/hush-<n>/<w>/<h>`); icons → lucide-react; fonts
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome; multi-page demo links (Retreats/Direction/Spaces/Resources/
  Connect are separate pages in the demo) collapse to section anchors or
  presentational links in the single-page recreation; brand wordmark
  becomes "Hush" with tagline "A Sanctuary for the Soul" (or equivalent);
  all copy paraphrased but same kind of content.

Hush lives in `apps/hush` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the site name
"Hush", anchor links to the page's sections, a "Book a Retreat" CTA, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hush page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Hush" and links to
  Retreats, Spiritual Direction, Sacred Spaces, Resources, and Connect
- **AND** the navbar SHALL show a "Book a Retreat" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a full-bleed hero with a scripture quote, a
headline, subtext, two CTAs, and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Find Rest for Your Soul"
  (or the Hush equivalent)
- **AND** it SHALL show a quote from Psalm 46:10 above the heading
- **AND** it SHALL show buttons "Explore Retreats" and "Begin Spiritual
  Direction"
- **AND** it SHALL show a "Enter the Stillness" scroll indicator at the
  bottom of the hero

### Requirement: Daily Office section

The system SHALL render a dark band with four daily prayer office cards.

#### Scenario: Daily Office content

- **GIVEN** the page is rendered
- **WHEN** the Daily Office section is displayed
- **THEN** it SHALL contain a heading "A Rhythm of Prayer"
- **AND** it SHALL show cards for Lauds (6:30 AM), Midday Prayer
  (12:00 PM), Vespers (5:30 PM), and Compline (8:30 PM)

### Requirement: About section

The system SHALL render an about section with four stats and a narrative.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "A Place Set Apart"
- **AND** it SHALL show stats including 35+ Years of Ministry, 12,000+
  Retreat Guests, and 80 Acres of Silence
- **AND** it SHALL include a founding story paragraph and an image

### Requirement: Practices section

The system SHALL render a practices section with six contemplative practice
cards.

#### Scenario: Practices content

- **GIVEN** the page is rendered
- **WHEN** the practices section is displayed
- **THEN** it SHALL contain a heading "Ancient Paths to the Present"
- **AND** it SHALL show cards for Centering Prayer, Lectio Divina,
  Walking Meditation, and Labyrinth Walk
- **AND** each card SHALL show an icon, a title, and a description

### Requirement: Retreats section

The system SHALL render a retreats section with three retreat cards, one
featured.

#### Scenario: Retreats content

- **GIVEN** the page is rendered
- **WHEN** the retreats section is displayed
- **THEN** it SHALL contain a heading "Step Away. Go Deeper."
- **AND** it SHALL show a featured Spring Silence Retreat card (with a
  "Featured" badge, dates, duration, leader, and price $795)
- **AND** it SHALL show cards for Introduction to Contemplative Prayer and
  Day of Rest
- **AND** each card SHALL show dates, a description, and a price

### Requirement: Sacred Spaces section

The system SHALL render a sacred spaces section with four space cards.

#### Scenario: Sacred Spaces content

- **GIVEN** the page is rendered
- **WHEN** the sacred spaces section is displayed
- **THEN** it SHALL contain a heading "80 Acres of Sanctuary"
- **AND** it SHALL show cards for The Chapel, The Labyrinth, Prayer
  Garden, and Forest Trails

### Requirement: Spiritual Direction section

The system SHALL render a spiritual direction section with four director
cards.

#### Scenario: Directors content

- **GIVEN** the page is rendered
- **WHEN** the spiritual direction section is displayed
- **THEN** it SHALL contain a heading "Companions for the Journey"
- **AND** it SHALL show cards for Sr. Margaret Anne, Fr. David Brennan,
  Dr. Sarah Chen, and Brother Thomas
- **AND** each card SHALL show a portrait, name, role, specialties, and
  availability

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Transformed by Stillness"
- **AND** it SHALL show at least three testimonials, each with a quote, a
  name, and a context line

### Requirement: Closing CTA

The system SHALL render a closing CTA band with a headline and two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the closing CTA band is displayed
- **THEN** it SHALL contain a heading "Begin Your Journey Inward"
- **AND** it SHALL show "Book a Retreat" and "Contact Us" buttons

### Requirement: Footer

The system SHALL render a footer with prayer times, link columns, and a
bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Join Us in Prayer" strip with the four office
  times
- **AND** it SHALL show columns EXPERIENCE, EXPLORE, and CONNECT
- **AND** it SHALL show contact details and a bottom bar with a scripture
  quote and copyright

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Hush app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Hush — Retreat Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh hush` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (header, hero, daily office,
      about, practices, retreats, spaces, directors, testimonials, cta,
      footer)
- [ ] Design tokens in `@theme`: brand sage `#4d5b4a` (+ scale #e3e7e2,
      #c6cfc4, #a2b09f, #7d8f79, #3f4a3d, #2d332c), stone neutrals
      (#faf9f7, #f3f1ec, #e6e1d8, #594d44)
- [ ] Fonts: Cormorant Garamond (headings) + Inter (body) via Google Fonts
- [ ] Buttons: rounded-full pills, sage primary with white text + soft
      shadow, outlined secondary (2px border); dark bands bg-primary-900;
      footer bg-stone-900
- [ ] Hero: full-bleed mountain image, quote above serif H1, two CTAs,
      "Enter the Stillness" scroll cue
- [ ] Dark mode: class-based `.dark` (light bands → stone-900), toggle in
      navbar, persisted to localStorage
- [ ] Interactive behaviors: mobile menu (aria-expanded), dark-mode toggle
      — no extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/hush-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
