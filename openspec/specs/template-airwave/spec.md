# Template: Airwave (Podcast Template)

## Purpose

Airwave is a single-page podcast landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "The Hustle
Hour" website template design (source: https://colorlib.com/wp/template/the-hustle-hour/),
built under a DIFFERENT name (Airwave — evoking radio/podcast broadcast waves,
fitting the show's audio-first positioning) per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): a stale prep existed at
> `openspec/specs/template-hustlehour/` (plus `docs/templates/hustlehour/`)
> using a FORBIDDEN source-derived name ("Hustlehour" is the ColorLib name
> "The Hustle Hour" with "The " stripped and squashed — not an original
> name); both were deleted and replaced by this fresh prep (new name
> Airwave), matching the Serenity→Hush / Solarshift→Helios /
> Swiftmove→Haulio / The Grand Azure→Sapphire precedent.

## Design reference (replication findings)

- **Original:** ColorLib "The Hustle Hour" — podcast / interview-show landing
  template (category "Podcast"; built with Astro + Tailwind CSS). Demo
  internal brand: "The Hustle Hour"; the recreation brands itself **Airwave**.
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/the-hustle-hour/`) returns 404; the
  ColorLib preview portal hosts the demo at
  `https://hustlehour-colorlib.pages.dev/` (HTTP 200, ~79 KB HTML +
  `/_astro/Base.fzo6El3r.css` ~66 KB parsed for tokens; the pages.dev slug is
  `hustlehour` per `preview.colorlib.com/assets/js/products.js`). Same
  Cloudflare-Pages hosting pattern as Serenite→Sooth / The Grand Azure→Sapphire.
  The TEMPLATES.md screenshot (`hustlehour-template-1771943880509.jpg`,
  2400×1892, fetched + visually analyzed) matches the live demo.
- **Visual design (screenshot + live render):** bold dark-first podcast
  landing. Near-black (`#030712`) hero with a small red pill badge ("New
  Episode Every Tuesday"), huge white headline where the second line
  ("Inspire Action") is a red→purple gradient text, red pill CTA + dark
  outline CTA, small platform pills (Spotify, Apple Podcasts, Google
  Podcasts, YouTube) and a red-number stats row (500+ / 2M+ / Top 50 / 4.8).
  The featured-episode band below is a LIGHT strip for contrast, then the
  page alternates `gray-950` / `gray-900` dark bands with `rounded-2xl`
  bordered cards. Red is used strategically for CTAs, play buttons, and
  accents. (Screenshot copy shows "Stories That Spark Ideas"; the live demo's
  "Stories That Inspire Action" is authoritative.)
- **Section order (1:1, from live demo DOM):**
  1. Preloader (fixed inset-0, `bg-white dark:bg-gray-950`, hides on load).
  2. Sticky navbar (`sticky top-0 z-50 w-full border-b border-gray-800
bg-gray-950/80 backdrop-blur-lg`): "The Hustle Hour" logo + links
     Episodes, About, Sponsors, Newsletter, Sponsorships, Blog, Release
     Notes, Contact + red pill "Listen Now" button (`rounded-full
bg-primary-600`); dark-mode toggle (`aria-label="Toggle dark mode"`),
     mobile menu button (`aria-expanded`, `lg:hidden`); mobile panel =
     `border-t border-gray-800 bg-gray-950 px-4 py-4`.
  3. Hero (`relative overflow-hidden bg-gray-950`): pill badge "New Episode
     Every Tuesday", H1 "Stories That Inspire Action" (the second line is a
     red→purple gradient via `background-clip: text`), blurb "Join us as we
     dive deep into the journeys of founders, creators, and innovators who
     are building the future…", buttons "Listen Latest Episode" (primary)
     - "Subscribe" (outline), "Available on:" platform pills (Spotify, Apple
       Podcasts, Google Podcasts, YouTube — brand icons), stats row with red
       numbers: 500+ Episodes Published, 2M+ Total Downloads, Top 50 Countries
       Reached, 4.8 Average Rating.
  4. Featured episode band (`border-y border-gray-200 bg-gray-50 py-16
lg:py-20 dark:border-gray-800 dark:bg-gray-900` — the one light band):
     eyebrow "Latest Episode", meta "EP. 247 · Feb 18, 2026 · 58 min", title
     "Building a $100M Company with No Funding", "with Sarah Chen, Founder of
     TechFlow", description paragraph, tags (Startup, Bootstrapping, Growth),
     round play button (`h-14 w-14 rounded-full bg-primary-600
shadow-primary-600/25`, `aria-label="Play episode"`).
  5. Recent Episodes (`#episodes`, `bg-gray-950 py-20 lg:py-28`): eyebrow
     "Episodes", H2 "Recent Episodes", subtext "Catch up on the latest
     conversations…", 6 episode cards (`rounded-2xl border border-gray-800`,
     alternating `bg-gray-900/30` / `bg-gray-950`; each: EP number, date +
     duration, title, guest line, one-line blurb, round play button `h-12
w-12 rounded-full border border-gray-700 bg-gray-800` that fills red on
     hover) — EP.247 Sarah Chen (TechFlow), EP.246 James Park (FitSync — The
     Art of Product-Market Fit), EP.245 Maria Santos (CloudWeave — From Side
     Project to IPO), EP.244 David Kim (Nomad — Remote Teams That Actually
     Work), EP.243 Lisa Wang (DeepTech — The Future of AI in Business),
     EP.242 Tom Russo (RocketScale — Scaling Culture at Hypergrowth); "View
     All Episodes" button.
  6. Host (`#about`, `bg-gray-900 py-20 lg:py-28`): eyebrow "About the Host",
     H2 "Meet Your Host", host name Alex Morgan, bio ("Serial entrepreneur,
     angel investor, and storyteller… two successful exits and 30+ angel
     investments…"), pull quote "Every founder has a story worth sharing."
  7. Sponsors (`#sponsors`, `bg-gray-950 py-20 lg:py-28`): eyebrow, H2
     "Proudly Supported By", subtext "These amazing companies make the show
     possible.", 4 sponsor cards (`rounded-2xl border border-gray-800
bg-gray-900/50 p-6 text-center`; LinearB — Engineering management
     platform, Notion — All-in-one workspace, Vercel — Frontend cloud
     platform, Lemon.io — Hire vetted developers; each with "Learn More"),
     then "Want to sponsor the show?" + "Get in touch".
  8. Testimonials (`bg-gray-900 py-20 lg:py-28`): eyebrow "Reviews", H2 "What
     Listeners Say", 6 quote cards (`rounded-2xl border border-gray-800
bg-gray-900/50 p-8`; quote + name + tag: Rachel Kim — Founder, LaunchPad;
     Marcus Thompson — Product Lead, ScaleUp; Priya Patel — CEO, BuildRight;
     Ryan Mitchell — Daily Listener; Dr. Sarah Lin — Episode 142 Guest; Jordan
     Blake — Listener since Season 1) shown as a carousel with dot navigation
     (`data-carousel-dots`). FIDELITY NOTE: the last three quotes reference a
     leftover "EchoWave" brand in the source demo — paraphrase to the
     Airwave brand.
  9. Newsletter (`#newsletter`, `py-20 lg:py-28`): big rounded gradient card
     (`relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-r
from-primary-600 to-accent-600 p-8 sm:p-12 lg:p-16` with decorative
     `bg-white/10 blur-2xl` circles): eyebrow "Newsletter", H2 "Never Miss an
     Episode", subtext "Get weekly episode summaries, behind-the-scenes
     content, and exclusive bonus material… every Friday.", email input +
     Subscribe button, "Join 50,000+ subscribers. Unsubscribe anytime."
  10. FAQ (`#faq`, `bg-white py-20 lg:py-28 dark:bg-gray-950`): eyebrow "FAQ",
      H2 "Frequently Asked Questions", subtext; 5 accordion items
      (aria-expanded buttons): guest booking (pitch via contact form, 2-week
      response), release frequency (every Tuesday and Thursday + weekend
      bonus episodes), where to listen (Apple Podcasts, Spotify, Google
      Podcasts, YouTube, Amazon Music), sponsorship opportunities (pre-roll /
      mid-roll / post-roll + media kit), topic suggestions.
  11. Contact (`#contact`, `bg-gray-950 py-20 lg:py-28`): eyebrow "Get in
      Touch", H2 "Let's Connect", subtext ("Have a guest suggestion,
      sponsorship inquiry, or just want to say hello?…"), form with Name,
      Email, Subject, Message fields + "Send Message" button; "Or email us
      directly at" hello@thehustlehour.com (recreation: hello@airwave.fm or
      similar original address).
  12. Footer (`border-t border-gray-800 bg-gray-950 pt-16 text-gray-300
lg:pt-24`): brand blurb "Real stories from founders, creators, and
      innovators building the future. New episodes every Tuesday."; link
      columns Podcast (Guests, Clips) / Follow (RSS Feed) / More (Sponsor,
      Merch); "Subscribe on your favorite platform…" + Apple platform link;
      bottom bar "© 2026 … All rights reserved." + Privacy Policy, Terms of
      Service, Style Guide.
  - Extras: skip-to-content link, preloader, cookie banner ("We use cookies
    to enhance your experience…" with Decline / Accept All), testimonial
    carousel dots, scroll-reveal (`data-animate="fade-in-up"`), back-to-top
    floating button, dark-mode toggle persisted to localStorage.
- **Design tokens extracted from `Base.fzo6El3r.css` + DOM (2026-08-09):**
  - Brand **primary = red** (Tailwind red scale): 50 `#fef2f2`, 100 `#fee2e2`,
    200 `#fecaca`, 300 `#fca5a5`, 400 `#f87171`, 500 `#ef4444` (hover,
    gradient-text start), 600 `#dc2626` (buttons, CTAs), 700 `#b91c1c`,
    800 `#991b1b`, 900 `#7f1d1d`.
  - **Accent = purple**: 500 `#a855f7` (gradient-text end), 600 `#9333ea`
    (newsletter gradient end).
  - Gradients: headline "Inspire Action" text = `linear-gradient(to right,
#ef4444, #a855f7)` (`background-clip: text`, transparent fill);
    newsletter card = `bg-gradient-to-r from-primary-600 to-accent-600`.
  - Neutrals: gray-950 `#030712` (hero, episodes, sponsors, contact,
    footer), gray-900 `#111827` (host, testimonials), gray-800 `#1f2937`
    (borders/cards), gray-700 `#374151` (card borders), gray-600 `#4b5563`,
    gray-500 `#6b7280` (muted), gray-400 `#9ca3af` (secondary text),
    gray-300 `#d1d5db`, gray-200 `#e5e7eb`, gray-100 `#f3f4f6`, gray-50
    `#f9fafb` (light band); white.
  - Font: **Outfit** (300–800, Google Fonts) for everything.
  - Buttons: pill (`rounded-full`, `border-radius: 3.40282e38px` = Tailwind
    rounded-full); primary `bg-primary-600 text-white px-6 py-3 text-sm
font-medium`, hover `bg-primary-500` + `shadow-primary-600/25` →
    `shadow-primary-600/30`, focus `ring-2 ring-primary-500`; outline
    "Subscribe" = dark bordered button (`border-gray-700 bg-gray-800/50`).
  - Cards: `rounded-2xl` (episodes/sponsors/testimonials), `rounded-3xl`
    (newsletter card, featured card), `border border-gray-800`, fills
    `bg-gray-900/30`–`/50`; play buttons round `rounded-full`.
  - Section rhythm: `py-20 lg:py-28`; featured band `py-16 lg:py-20` with
    `border-y`; dark-first (`<html class="dark">` in the demo) with
    alternating gray-950/gray-900 bands and light contrast bands
    (featured + FAQ).
  - Dark mode: class-based `.dark` on root; dark is the DEFAULT experience;
    toggle persists via localStorage; light mode swaps the light bands and
    text colors (repo-standard toggle pattern).
- **Recreation decisions:** photos/avatars → seeded picsum placeholders
  (`picsum.photos/seed/airwave-<n>/<w>/<h>`); icons → lucide-react (verify
  exports — brand icons removed; Play, Mic, Radio, Podcast, Users, Star,
  ChevronDown, Mail, Send, Headphones, Music2, Rss, ArrowUp, ArrowRight,
  Check, Menu, X, Sun, Moon, Sparkles are safe; Spotify/Apple/Google/YouTube
  platform marks MUST be inline SVG — lucide-react removed brand icons);
  fonts via Google Fonts `<link>` (Outfit); repo-standard Navbar (dark-mode
  toggle) + Footer chrome; newsletter form = client-side validation with
  inline success message; contact form = client-side validation (no
  backend); FAQ = accordion; testimonial carousel = index state + dot
  navigation (or a static grid — carousel interaction is a fidelity
  judgment call, but the dots are in the source DOM).

Airwave lives in `apps/airwave` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Airwave", anchor links to the page's sections, a "Listen Now" CTA, a
dark-mode toggle, and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Airwave page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Airwave" and links to
  Episodes, About, Sponsors, Newsletter, Sponsorships, Blog, Release Notes,
  and Contact
- **AND** the navbar SHALL show a red pill "Listen Now" button and a
  dark-mode toggle button
- **AND** the navbar SHALL be sticky with a dark translucent blurred
  background

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode
- **AND** the choice SHALL persist across reloads

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a dark hero with a release badge, a gradient-accented
headline, a blurb, two CTA buttons, platform links, and a stats row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a pill badge "New Episode Every Tuesday"
- **AND** a level-1 heading "Stories That Inspire Action" whose second line
  uses the red-to-purple gradient text treatment
- **AND** the founder-interviews blurb text

#### Scenario: Hero CTAs

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the hero actions
- **THEN** it SHALL show a red pill "Listen Latest Episode" button and an
  outline "Subscribe" button

#### Scenario: Platform links

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the platform row
- **THEN** it SHALL show pill links for Spotify, Apple Podcasts, Google
  Podcasts, and YouTube with brand icons

#### Scenario: Stats row

- **GIVEN** the hero is displayed
- **WHEN** the stats row is visible
- **THEN** it SHALL show the metrics 500+ Episodes Published, 2M+ Total
  Downloads, Top 50 Countries Reached, and 4.8 Average Rating with red
  values

### Requirement: Featured episode band

The system SHALL render a light contrast band featuring the latest episode
with metadata, tags, and a play button.

#### Scenario: Featured episode content

- **GIVEN** the page is rendered
- **WHEN** the featured band is displayed
- **THEN** it SHALL show the eyebrow "Latest Episode" and the meta line
  "EP. 247 · Feb 18, 2026 · 58 min"
- **AND** the title "Building a $100M Company with No Funding" with the guest
  line "with Sarah Chen, Founder of TechFlow"
- **AND** a description paragraph and the tags Startup, Bootstrapping, and
  Growth
- **AND** a round red play button with an accessible name

### Requirement: Recent Episodes section

The system SHALL render a recent-episodes section with six episode cards and
a "View All Episodes" button.

#### Scenario: Episode cards

- **GIVEN** the page is rendered
- **WHEN** the episodes section is displayed
- **THEN** it SHALL contain a heading "Recent Episodes"
- **AND** it SHALL show six cards, including EP.247 Sarah Chen (TechFlow),
  EP.246 James Park (FitSync), and EP.242 Tom Russo (RocketScale)
- **AND** each card SHALL show the EP number, date and duration, episode
  title, guest line, a one-line blurb, and a round play button

#### Scenario: View all

- **GIVEN** the episodes section is displayed
- **WHEN** the user inspects the section footer
- **THEN** a "View All Episodes" button SHALL be present

### Requirement: Host section

The system SHALL render an "About the Host" section with a bio and a pull
quote.

#### Scenario: Host content

- **GIVEN** the page is rendered
- **WHEN** the host section is displayed
- **THEN** it SHALL contain a heading "Meet Your Host"
- **AND** it SHALL show the host name Alex Morgan, a serial-entrepreneur bio,
  and the quote "Every founder has a story worth sharing."

### Requirement: Sponsors section

The system SHALL render a sponsors section with four sponsor cards and a
sponsorship CTA.

#### Scenario: Sponsor cards

- **GIVEN** the page is rendered
- **WHEN** the sponsors section is displayed
- **THEN** it SHALL contain a heading "Proudly Supported By"
- **AND** it SHALL show cards for LinearB, Notion, Vercel, and Lemon.io,
  each with a tagline and a "Learn More" link

#### Scenario: Sponsorship CTA

- **GIVEN** the sponsors section is displayed
- **WHEN** the user inspects the section footer
- **THEN** it SHALL show "Want to sponsor the show?" with a "Get in touch"
  link

### Requirement: Testimonials section

The system SHALL render a testimonials section with six listener quotes.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Listeners Say"
- **AND** it SHALL show six quote cards, each with a quote, a name, and a
  tag (e.g. Rachel Kim — Founder, LaunchPad; Jordan Blake — Listener since
  Season 1)
- **AND** all quotes SHALL reference the Airwave brand consistently (the
  source demo's leftover "EchoWave" mentions SHALL be paraphrased)

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user activates a dot indicator
- **THEN** the visible testimonial SHALL change to match the selected dot

### Requirement: Newsletter section

The system SHALL render a red-to-purple gradient newsletter card with an
email form.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL contain a heading "Never Miss an Episode" on a
  red-to-purple gradient card
- **AND** an email input and a Subscribe button
- **AND** the line "Join 50,000+ subscribers. Unsubscribe anytime."

#### Scenario: Newsletter submission

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits a valid email address
- **THEN** the form SHALL show a success confirmation

### Requirement: FAQ section

The system SHALL render an FAQ section with five accordion items.

#### Scenario: FAQ accordion

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show five questions covering guest booking, release
  frequency, listening platforms, sponsorship opportunities, and topic
  suggestions
- **WHEN** the user activates a question button
- **THEN** its answer SHALL expand and the button SHALL reflect the expanded
  state via `aria-expanded`

### Requirement: Contact section

The system SHALL render a contact section with a message form and an email
address.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Let's Connect"
- **AND** it SHALL show Name, Email, Subject, and Message fields with a
  "Send Message" button
- **AND** it SHALL show an email address for direct contact

#### Scenario: Form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits with an invalid or missing email
- **THEN** the form SHALL show a per-field error and SHALL NOT submit

### Requirement: Footer

The system SHALL render a dark footer with brand info, link columns, and a
bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name, a blurb about real founder stories,
  and the tagline "New episodes every Tuesday."
- **AND** it SHALL show link columns Podcast (Guests, Clips), Follow (RSS
  Feed), and More (Sponsor, Merch)
- **AND** the bottom bar SHALL show the copyright line plus Privacy Policy,
  Terms of Service, and Style Guide links

### Requirement: Accessibility and extras

The system SHALL include a skip-to-content link, a back-to-top button, a
preloader, and a cookie banner.

#### Scenario: Skip link

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** a "Skip to content" link SHALL be the first focusable element

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user presses the back-to-top button
- **THEN** the page SHALL scroll to the top

#### Scenario: Preloader

- **GIVEN** the page starts loading
- **WHEN** the page finishes loading
- **THEN** the preloader SHALL be hidden and the page content SHALL be
  visible

#### Scenario: Cookie banner

- **GIVEN** the page is rendered without a stored consent choice
- **WHEN** the user presses "Accept All" or "Decline"
- **THEN** the banner SHALL dismiss and the choice SHALL persist for the
  session

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-airwave`
- [ ] TDD: tests written before components, one `describe` per component,
      scenario `it` blocks mirroring the spec scenarios
- [ ] `scripts/verify-app.sh airwave` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Fidelity: section order 1:1 with the demo; brand tokens from this
      spec (`primary` red scale, `accent` purple scale, Outfit font,
      `rounded-full` pill buttons, red→purple gradients) in `@theme`
- [ ] Dark-first: `.dark` default experience matches the demo (gray-950 /
      gray-900 bands, light bands for featured episode + FAQ)
- [ ] Images are picsum placeholders (never copied assets); platform brand
      icons (Spotify, Apple, Google, YouTube) are inline SVG — lucide-react
      removed brand icons
- [ ] Testimonial quotes paraphrased to a single consistent brand (no
      "EchoWave" leftovers)
- [ ] PR description states: source template (ColorLib "The Hustle Hour"),
      preview URL, design tokens used, renames (Airwave, email/domain,
      placeholder images)
- [ ] After merge: `[~]` → `[x]` + surge URL + homepage in TEMPLATES.md,
      `npm run readme:status`
