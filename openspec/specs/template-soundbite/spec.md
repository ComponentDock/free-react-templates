# Template: SoundBite (Podcast / Blog)

## Purpose

Recreation of ColorLib "The Hustle Hour" — a dark-themed podcast/blog single-page site.

- **Source:** ColorLib "The Hustle Hour" (slug: `hustlehour`)
- **Preview URL:** https://preview.colorlib.com/theme/hustlehour/
- **ColorLib page:** https://colorlib.com/wp/template/the-hustle-hour/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hustlehour-template-1771943880509.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** Soundbite (`apps/soundbite`, `@free-react-templates/soundbite`)

## Design Tokens

Extracted and VERIFIED against the live preview DOM + stylesheet
(`/_astro/Base.D-0Tjs2q.css`, fetched 2026-10-01). Note: an earlier prep draft
listed a purple primary; the live stylesheet shows the primary accent is RED
(`#dc2626`), with purple only as the gradient endpoint — the values below are
the live ones.

### Colors

| Token            | Value / Tailwind Class                         | Usage                                                                       |
| ---------------- | ---------------------------------------------- | --------------------------------------------------------------------------- |
| Primary accent   | red-600 `#dc2626`                              | CTA buttons, focus rings, button shadows (`#dc262640`), input focus borders |
| Primary hover    | red-500 `#ef4444`                              | Button hover, gradient start                                                |
| Gradient         | from red-500 `#ef4444` to purple-500 `#a855f7` | Newsletter banner, host-avatar overlay                                      |
| Accent link text | purple-400 `#c084fc`                           | Inline/accent links                                                         |
| Badge text       | red-200 `#fee2e2` / red-300 `#fca5a5`          | Category badge labels (on red-950/red-900 tint bg)                          |
| Page background  | gray-950 `#030712`                             | html/body, header, default section bg, footer                               |
| Section surface  | gray-900 `#111827`                             | About, Sponsors, Reviews section backgrounds                                |
| Card background  | gray-900/50                                    | Episode cards, sponsor cards, review cards                                  |
| Border           | gray-800 `#1f2937`                             | Card borders, header bottom border, footer top border, input borders        |
| Heading text     | white                                          | All headings, strong text, card titles                                      |
| Body text        | gray-400 `#9ca3af`                             | Descriptions, paragraphs, nav links                                         |
| Muted text       | gray-500 `#6b7280`                             | Copyright, fine print, footer legal links                                   |
| Star rating      | yellow-400                                     | Star icons in testimonial cards                                             |
| Focus ring       | red-500                                        | Input focus:border + focus:ring                                             |

### Typography

| Property    | Value                                                   |
| ----------- | ------------------------------------------------------- |
| Font family | Outfit (Google Fonts), weights 300–700                  |
| Headings    | font-bold, tracking-tight, text-white, text-3xl/4xl/5xl |
| Body        | text-gray-400, text-lg, leading-relaxed                 |
| Badge/label | text-sm, font-medium, text-red-200                      |
| Small/meta  | text-sm, text-gray-400                                  |

### Spacing & Layout

| Property              | Value                                            |
| --------------------- | ------------------------------------------------ |
| Container             | mx-auto, px-4 lg:px-8, max-w-6xl (content areas) |
| Section padding       | py-20 lg:py-28                                   |
| Header height         | h-16 lg:h-20                                     |
| Card radius           | rounded-2xl                                      |
| Primary button radius | rounded-full (pill shape)                        |
| Input radius          | rounded-xl                                       |
| Avatar/badge radius   | rounded-full                                     |

### Interactive Elements

| Element          | Style                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Primary CTA      | rounded-full, bg-red-600, white text, px-8 py-3.5, shadow-lg shadow-red-600/25, hover:bg-red-500                             |
| Secondary button | rounded-lg, bg-gray-800, text-gray-400, p-2.5, hover:bg-gray-700 hover:text-white                                            |
| Input fields     | rounded-xl, border border-gray-800, bg-gray-900, text-white, px-4 py-3, focus:border-red-500 focus:ring-1 focus:ring-red-500 |
| Cards            | rounded-2xl, border border-gray-800, bg-gray-900/50, hover:border-gray-700                                                   |
| FAQ toggle       | button, rounded-full bg-gray-800 w-8 h-8, +/− icon                                                                           |
| Back-to-top      | fixed, bottom-6 right-6, rounded-full, bg-red-600, w-12 h-12, appears on scroll                                              |
| Scroll progress  | fixed top-0, h-0.5, bg-red-600, width % from scroll listener                                                                 |

## Section Order (verified against live preview DOM, top to bottom)

1. **Scroll progress bar** — fixed top-0 z-[60], h-0.5, bg-red-600, width driven by scroll %.
2. **Header** — sticky top-0 z-50, backdrop-blur, bg-gray-950/80, border-b border-gray-800. Logo left, anchor links (Episodes, About, Sponsors, Newsletter, Contact), "Listen Now" pill button right. Mobile hamburger toggles nav (conditional render).
3. **Hero** (id="episodes" region) — badge "New Episode Every Tuesday", h1 "Stories That Inspire Action", subtitle about founders/creators/innovators, CTAs "Listen Latest Episode" + "Subscribe", platform row (Spotify, Apple Podcasts, Google Podcasts, YouTube), stats strip: 500+ Episodes · 2M+ Downloads · Top 50 Tech Podcast · 4.8 Rating.
4. **Featured episode + Recent Episodes** (id="episodes") — featured card: EP. 247, date + duration, title, guest line, description, play overlay image, duration chips, tag badges. Heading "Recent Episodes" + subtitle. Episode grid (6 cards): EP number, date, title, guest, blurb, duration, "Listen" link. "View All Episodes" button.
5. **About the Host** (id="about") — 2-col grid. Left: host photo (aspect-[4/5], rounded-3xl, gradient overlay). Right: badge "About the Host", h2 "Meet Your Host", host name with gradient text, bio paragraph, blockquote (border-l-4 border-red-600), social icon buttons (X/Twitter, LinkedIn, Instagram — inline SVG brand icons).
6. **Sponsors** (id="sponsors") — badge "Our Sponsors", h2 "Proudly Supported By", subtitle. 4-column grid: sponsor cards (initial-letter tile h-16 w-16 rounded-2xl bg-gray-800, company name, one-line blurb, "Learn More" arrow link). CTA line "Want to sponsor the show? Get in touch" (link to #contact). Sponsors: LinearB, Notion, Vercel, Lemon.io.
7. **Reviews / Testimonials** — badge "Reviews", h2 "What Listeners Say", subtitle. Horizontal carousel (flex track, transform translateX by index): review cards rounded-2xl border bg-gray-900/50 p-8 — 5 yellow stars, blockquote, author row (gradient avatar, name, role). 6 reviews. Prev/next arrow buttons (lg+), dot indicators with aria-current.
8. **Newsletter** (id="newsletter") — full-width gradient banner (from-red-500 to-purple-500), rounded-3xl, decorative blur circles (bg-white/10 blur-2xl). h2 "Never Miss an Episode", subtitle, inline form: email input (bg-white/10 border-white/20) + "Subscribe" button (bg-white text-red-600). Note "Join 50,000+ subscribers. Unsubscribe anytime."
9. **FAQ** (id="faq") — badge "FAQ", h2 "Frequently Asked Questions", subtitle. Accordion, divide-y divide-gray-800. Each item: button (question, font-semibold) + toggle (rounded-full bg-gray-800, +/−). Answer rendered conditionally (active panel only) with text-gray-400. 5 questions (guest pitch, release schedule, platforms, sponsorship, topic suggestions).
10. **Contact** (id="contact") — badge "Get in Touch", h2 "Let's Connect", subtitle. Form space-y-6: Name + Email (2-col sm:grid-cols-2), Subject, Message textarea (rows=5), "Send Message" pill button with send icon. Per-field error messages, submit blocked until valid, success status panel on valid submit. Email link line below form.
11. **Footer** — border-t border-gray-800, bg-gray-950, pt-16 lg:pt-24. Grid lg:grid-cols-12: brand column (logo, description, social icons), Podcast column (Episodes, About, Guests, Clips), Follow column (Spotify, Apple Podcasts, YouTube, RSS Feed), More column (Newsletter, Sponsor, Merch, Contact), Listen Now column (Spotify + Apple buttons). Bottom bar: © 2026 Soundbite · Privacy Policy · Terms of Service · Style Guide. **"More templates at Component Dock" link → https://www.componentdock.com/ (mandatory).**
12. **Mobile sticky CTA** (lg:hidden) — fixed bottom-0 z-40, border-t, bg-gray-900, p-3. Two buttons: "Subscribe" (bg-gray-800) + "Listen Now" (bg-red-600), linking to #newsletter / #episodes.
13. **Back-to-top button** — fixed bottom-6 right-6 (above mobile CTA), rounded-full bg-red-600 w-12 h-12, appears after scrolling > 400px (opacity/visibility transition), click scrolls to top.

## Requirements

### Requirement: App shell, design tokens, and fonts

The app SHALL live at `apps/soundbite` (package
`@free-react-templates/soundbite`) as a single-page site composing the
section order above. Outfit SHALL be loaded via Google Fonts `<link>` in
`index.html` (weights 300–700; never ship font files). `src/index.css`
SHALL register the brand tokens in `@theme` (at minimum
`--color-primary-600: #dc2626`, `--color-primary-500: #ef4444`,
`--color-accent-400: #c084fc`, `--color-accent-500: #a855f7`) and set the
body default to Outfit on `#030712`. Primary CTAs SHALL be pill-shaped
(`rounded-full`) red-600 buttons with a red-600/25 shadow.

#### Scenario: Tokens registered

- **GIVEN** the app renders
- **THEN** `@theme` defines primary-600 `#dc2626` and the accent tokens
- **AND** the body renders Outfit on the gray-950 background

#### Scenario: Fonts loaded without shipping files

- **GIVEN** `index.html`
- **THEN** a Google Fonts `<link>` requests Outfit (300–700)
- **AND** no font binary is shipped in the app

### Requirement: Header sticky navigation

The header SHALL be sticky at the top with backdrop blur, a gray-800
bottom border, the Soundbite logo on the left, anchor links (Episodes,
About, Sponsors, Newsletter, Contact) targeting the section ids, and a
"Listen Now" primary pill linking to `#episodes`. Below `lg` the links
SHALL collapse behind a hamburger button toggling a conditional mobile
menu with `aria-expanded` and `aria-controls`.

#### Scenario: Desktop navigation

- **GIVEN** the page loads on a wide viewport
- **THEN** the header is sticky with the five anchor links and the
  "Listen Now" button
- **AND** each link points at its section id

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport is below `lg`
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu renders with the same links
- **AND** the button reports `aria-expanded="true"`
- **WHEN** the user clicks it again
- **THEN** the menu is removed from the DOM

### Requirement: Hero with latest-episode CTA

The hero SHALL show the badge "New Episode Every Tuesday", the h1
"Stories That Inspire Action", a founders/creators subtitle, "Listen
Latest Episode" (`#episodes`) and "Subscribe" (`#newsletter`) CTAs, a
platform row (Spotify, Apple Podcasts, Google Podcasts, YouTube), and a
stats strip: 500+ Episodes, 2M+ Downloads, Top 50 Tech Podcast, 4.8
Rating.

#### Scenario: Hero content

- **GIVEN** the page loads
- **THEN** the badge, h1, and subtitle render
- **AND** both CTAs link to their sections
- **AND** the four stats values are displayed

### Requirement: Featured episode and recent-episodes grid

The episodes section (id `episodes`) SHALL render a featured episode card
(EP number, date, duration, title, guest line, description, play-overlay
image, tag badges, Play Episode pill), then the "Recent Episodes"
heading with subtitle, a responsive grid of exactly 6 episode cards
(each: EP number, date, duration, title, guest, blurb, Listen link), and
a "View All Episodes" button.

#### Scenario: Featured episode

- **GIVEN** the page loads
- **THEN** the featured card shows EP. 247 with date, duration, title,
  guest, description, artwork, and the three tag badges

#### Scenario: Episode grid

- **GIVEN** the page loads
- **THEN** 6 episode cards render in the grid
- **AND** each card has EP number, date, duration, title, guest, blurb,
  and a Listen link
- **AND** the View All Episodes button is shown

### Requirement: About the host

The about section (id `about`) SHALL use a two-column grid: left, a host
photo (aspect 4/5, rounded-3xl, gradient overlay); right, the "About the
Host" badge, "Meet Your Host" heading, gradient-text host name, bio
paragraph, a blockquote with a red-600 left border, and social icon
buttons (X/Twitter, LinkedIn, Instagram) as inline SVG brand icons.

#### Scenario: Host profile

- **GIVEN** the about section renders
- **THEN** the photo, badge, heading, gradient name, bio, and blockquote
  are present
- **AND** three social links have accessible names

### Requirement: Sponsors grid

The sponsors section (id `sponsors`) SHALL show the "Our Sponsors" badge,
the "Proudly Supported By" heading, a 4-card grid (LinearB, Notion,
Vercel, Lemon.io — initial tile, name, blurb, Learn More link), and the
"Want to sponsor the show? Get in touch" CTA linking to `#contact`.

#### Scenario: Sponsor cards

- **GIVEN** the sponsors section renders
- **THEN** 4 cards render with name, blurb, and Learn More link each
- **AND** the CTA links to the contact section

### Requirement: Reviews carousel

The reviews section SHALL render a horizontal carousel of 6 review cards
(5-star rating, blockquote, gradient avatar, name, role) with prev/next
buttons stepping one slide (clamped at both ends) and dot indicators
that set the current slide and expose `aria-current`.

#### Scenario: Carousel stepping

- **GIVEN** the reviews section renders on the first slide
- **WHEN** the user clicks Next
- **THEN** the track translates to slide 2
- **WHEN** the user reaches the last slide and clicks Next again
- **THEN** the index stays clamped at the last slide
- **WHEN** the user clicks Prev on the first slide
- **THEN** the index stays at 0

#### Scenario: Dot indicators

- **GIVEN** the carousel renders
- **WHEN** the user clicks dot 3
- **THEN** the track translates to slide 3
- **AND** dot 3 reports `aria-current="true"`

### Requirement: Newsletter gradient banner

The newsletter section (id `newsletter`) SHALL render a red-500→purple-500
gradient banner with decorative blur circles, the "Never Miss an
Episode" heading, an inline email form (white/10 input + white Subscribe
button), and the "Join 50,000+ subscribers" note. Submitting an empty or
invalid email SHALL show an inline error (`role="alert"`) without
subscribing; a valid email SHALL replace the form with a `role="status"`
confirmation. The form SHALL set `noValidate` so custom messages render.

#### Scenario: Invalid submissions

- **GIVEN** the newsletter form is empty
- **WHEN** the user submits
- **THEN** an alert explains the email is required
- **GIVEN** the email is malformed
- **WHEN** the user submits
- **THEN** an alert explains the format is invalid

#### Scenario: Valid subscription

- **GIVEN** a valid email is entered
- **WHEN** the user submits
- **THEN** the form is replaced by the thank-you status message

### Requirement: FAQ accordion

The FAQ section (id `faq`) SHALL render 5 questions as accordion items
with +/− toggle buttons (`aria-expanded`, `aria-controls`). Only the open
item's answer panel SHALL be rendered (conditional render — never a
`hidden` attribute). Clicking the open item collapses it; opening another
collapses the previous one.

#### Scenario: Expand and collapse

- **GIVEN** all items are collapsed
- **WHEN** the user clicks question 1
- **THEN** its answer renders and the button reports expanded
- **WHEN** the user clicks question 1 again
- **THEN** the answer is removed from the DOM

#### Scenario: Exclusive open state

- **GIVEN** question 1 is open
- **WHEN** the user clicks question 2
- **THEN** question 1 collapses and question 2 opens

### Requirement: Contact form with validation

The contact section (id `contact`) SHALL render the "Get in Touch" badge,
the "Let's Connect" heading, a form with Name + Email (2-column grid),
Subject, and Message (textarea rows=5), a "Send Message" pill with a
send icon, and a `mailto:` link below. Submitting with missing fields
SHALL show per-field `role="alert"` errors and no success state; a
malformed email SHALL fail email validation; a fully valid submit SHALL
replace the form with a `role="status"` confirmation. The form SHALL set
`noValidate`.

#### Scenario: Per-field errors

- **GIVEN** the form is empty
- **WHEN** the user submits
- **THEN** four alerts explain each missing field
- **AND** no status message appears

#### Scenario: Invalid email

- **GIVEN** name, subject, and message are filled but the email is
  malformed
- **WHEN** the user submits
- **THEN** only the email format error shows

#### Scenario: Valid submit

- **GIVEN** all fields are valid
- **WHEN** the user submits
- **THEN** the success status replaces the form

### Requirement: Footer with Component Dock attribution

The footer SHALL render the brand column (logo, description, social
icons), the Podcast / Follow / More / Listen Now columns, a bottom bar
with copyright and Privacy/Terms/Style Guide links, and the mandatory
"More templates at Component Dock" line linking to
`https://www.componentdock.com/` (new tab, `rel="noopener noreferrer"`).

#### Scenario: Attribution link

- **GIVEN** the footer renders
- **THEN** a "Component Dock" link points at
  `https://www.componentdock.com/` with `target="_blank"` and
  `rel="noopener noreferrer"`

#### Scenario: Column layout

- **GIVEN** the footer renders
- **THEN** the Podcast, Follow, More, and Listen Now sections are present
- **AND** the bottom bar shows the copyright and legal links

### Requirement: Mobile sticky CTA, scroll progress, back-to-top

A fixed bottom bar (`lg:hidden`) SHALL show "Subscribe" (`#newsletter`)
and "Listen Now" (`#episodes`) buttons. A fixed scroll-progress bar at
the top SHALL reflect scroll percentage (clamped 0–100, 0 when the page
fits the viewport). A back-to-top button SHALL appear after scrolling
past 400px, scroll to `{ top: 0 }` on click, and hide again at the top.

#### Scenario: Mobile CTA

- **GIVEN** any viewport
- **THEN** the quick-actions group renders both links with their anchors

#### Scenario: Scroll progress

- **GIVEN** the page is taller than the viewport
- **WHEN** the user scrolls to the middle
- **THEN** the progressbar reports ~50%
- **WHEN** the page fits the viewport
- **THEN** progress stays at 0

#### Scenario: Back to top

- **GIVEN** scroll position ≤ 400px
- **THEN** the back-to-top button is absent
- **WHEN** the user scrolls past 400px
- **THEN** the button appears
- **WHEN** the user clicks it
- **THEN** `window.scrollTo` is called with `{ top: 0 }`

### Requirement: Placeholder assets and provenance rules

Images SHALL use `https://picsum.photos/seed/soundbite-<n>/<w>/<h>`
placeholders. Icons SHALL come from `lucide-react` except brand icons,
which SHALL be inline SVGs. No app file (source, comment, CSS, HTML)
SHALL mention ColorLib — provenance lives only in this spec,
`TEMPLATES.md`, and the PR.

#### Scenario: Placeholder images

- **GIVEN** any image in the app
- **THEN** its `src` is a picsum.photos URL seeded with `soundbite-`

#### Scenario: No provenance strings

- **GIVEN** the app source tree
- **THEN** a search for "colorlib" returns no matches

## Verification Checklist

- [ ] Header is sticky with backdrop blur; anchor links target section ids
- [ ] Hero shows badge, heading, CTAs, platform row, stats strip
- [ ] Featured episode + 6 episode grid cards + View All Episodes
- [ ] About has 2-column layout: host photo + bio + blockquote + social icons
- [ ] Sponsors shows 4 cards in a grid + sponsor CTA
- [ ] Reviews carousel works with prev/next and dot indicators
- [ ] Newsletter has red→purple gradient banner with email form
- [ ] FAQ accordion expands/collapses; only active panel rendered
- [ ] Contact form validates per field, success state on valid submit
- [ ] Footer has multi-column layout with Component Dock link
- [ ] Mobile CTA bar below lg only
- [ ] Scroll progress bar + back-to-top button
- [ ] Design tokens: Outfit font, gray-950/900 dark theme, red-600 primary, red→purple gradient
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos
- [ ] 100% test coverage
