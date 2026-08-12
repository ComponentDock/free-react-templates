# Template: Sonata (Music Streaming)

## Purpose

Sonata is a single-page music-streaming landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Solmusic" website template design (see TEMPLATES.md, Bootstrap
category, line 501 — duplicate rows at line 2086 under Landing Page (96) and
line 2279 under Music (19), same template, one app only), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript (strict). No ColorLib references in app code — provenance lives in
this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Solmusic" — free music-streaming website HTML
  template (page title "SolMusic | HTML Template"; source:
  https://colorlib.com/wp/template/solmusic/). Structure: dark-navy header
  with user panel, a 2-slide hero slider ("Music for everyone." / "Listen to
  new music.") with pill CTAs and a flat vector music illustration, a white
  "Unlimited Access to 100K tracks" intro band, a dark "How it works"
  3-step section (pink circular icons), a white "Our Concept & artists"
  4-image grid, a dark "Subscription from $15/month" section with a
  rounded checkmark list panel, a white "Why go Premium" 4-image feature
  grid, and a dark 3-column footer with social links.
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/solmusic/` — fetched
  (`/tmp/solmusic.html`, 27,974 bytes) plus the main stylesheet
  `css/style.css` (`/tmp/solmusic-style.css`, 26,032 bytes) and analyzed for
  structure + tokens. Screenshot `solmusic-free-template.jpg` (1200×946,
  TEMPLATES.md) viewed in the browser and cross-verified: the screenshot's
  hero headline "Listen to new music." (pink "Listen to" + white "new
  music."), the two pill buttons, and the navy/pink/white palette match the
  live DOM/CSS verbatim.
- **Visual design (screenshot + live DOM):** modern flat music-streaming
  landing page. Deep navy (#0a183d / #08192d) + vibrant hot-pink (#fc0254)
  accent + white. Hero is a full-width navy slider with a flat vector
  illustration of a singing duo (woman in pink jacket with mic, man with
  acoustic guitar, drums, speakers, floating notes) on the right. All
  headings bold Montserrat; buttons are uppercase white-on-pink pill shapes;
  dark sections are solid navy (hero, how, subscription, footer), light
  sections plain white (intro, concept, premium).

## Design tokens (from `css/style.css` of the live preview)

- **Brand accent (primary):** `#fc0254` hot pink — hero `h2 span`, primary
  `.site-btn` background, `.hi-icon` circle background, `.register` link,
  `.sub-text h3`.
- **Deep navy (primary dark):** `#0a183d` — hero `.hs-item` background, how
  section, subscription section, footer background.
- **Header navy (darker):** `#08192d` — `.header-section` background.
- **Panel navy:** `#1c294a` — `.sub-list` background (rounded checkmark
  panel), mobile menu background.
- **Secondary button (indigo):** `#383b70` — `.site-btn.sb-c2` ("Start free
  trial" / secondary CTA) background.
- **Muted slate:** `#6a7080` — footer links, social icons, secondary body
  text; `#505565` — copyright line.
- **Light backgrounds:** `#fff` (intro, concept, premium), `#f9fcfd` /
  `#f5f6fa` (other pages, forms).
- **Font:** `"Montserrat", sans-serif` everywhere (body + headings); body
  antialiased. Load Montserrat via Google Fonts `<link>` in `index.html`.
- **Buttons:** pill shape `border-radius: 50px`; `min-width: 195px`;
  `padding: 23px 20px`; `font-size: 14px`; `font-weight: 500`;
  `text-transform: uppercase`; `background: #fc0254`, `color: #fff`;
  hover keeps `color: #fff` (no bg change in source; use a slightly darker
  pink e.g. `hover:bg-[#e0024b]` for affordance). Secondary variant
  `background: #383b70`.
- **Headings:** `.section-title h2` 60px; hero `.hs-item h2` 70px,
  `line-height: 0.9`; `.sub-text h2` 60px weight 500; `.footer-widget h2`
  16px uppercase white.
- **Radii:** `.concept-item img` `border-radius: 40px`; `.premium-item img`
  190px square with `border-radius: 50%`; `.sub-list` `border-radius: 42px`;
  `.hi-icon` 57px circle `background: #fc0254`.
- **Body text on dark:** white at `opacity: 0.6` (hero `p`, how `p`,
  sub-text `p`). On light: `#6a7080`-family grey.
- **Sections:** `.spad` vertical padding rhythm (source `padding: 100px 0`
  approx; verify against `css/style.css` `@media` — implement with
  Tailwind `py-24`/`py-28` equivalents).
- **How section background:** `.how-section` is `set-bg` with image
  `img/how-to-bg.jpg` over navy — replicate with the navy background and an
  optional dark cover image (placeholder ok) or plain navy (simplest
  faithful match to the CSS `background-color: #0a183d`).

## Requirements

### Requirement: Header and navbar

The system SHALL render a dark navy bar (`#08192d`) spanning the full width:
brand wordmark on the left ("Sonata" — accent-colored first word + white
rest, matching the "SOL/MUSIC" split-wordmark pattern), nav links (Home,
About, Pages, Category, Playlist, Artist, Blog, Contact — white, 16px), and
a user panel on the right ("Help", "Login" white links and "Create an
account" in accent pink).

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the brand wordmark, the nav links
  Home/About/Pages/Category/Playlist/Artist/Blog/Contact, and the user panel
  links Help/Login/Create an account, with the "Create an account" link in
  the brand accent color

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the nav is collapsed
- **THEN** a mobile menu toggle is shown, and activating it expands the nav
  links on a dark panel

### Requirement: Hero slider

The system SHALL render a full-width navy (`#0a183d`) slider with two
slides, each with a left text column and a right illustration column. Slide
1: "Music for everyone." with "Music" in accent pink, a muted-white
paragraph, and buttons "Download Now" (primary pink pill) + "Start free
trial" (indigo `#383b70` pill). Slide 2: "Listen to new music." with "Listen
to" in accent pink and the same button pair. Slider dots SHALL indicate the
active slide.

#### Scenario: Hero content

- **GIVEN** the hero slider is shown
- **WHEN** the first slide is active
- **THEN** the headline "Music for everyone." renders with the word "Music"
  in the brand accent, the supporting paragraph is present, and both CTA
  buttons ("Download Now" pink pill, "Start free trial" indigo pill) are
  visible

#### Scenario: Slide navigation

- **GIVEN** the hero has two slides
- **WHEN** the slider advances (autoplay or dots)
- **THEN** the headline switches to "Listen to new music." with "Listen to"
  in accent pink, and the active dot updates to the second position

### Requirement: Intro band ("Unlimited Access")

The system SHALL render a white section with two columns: left headline
"Unlimited Access to 100K tracks" (60px), right paragraph of muted text + a
"Try it now" primary pink pill button.

#### Scenario: Intro content

- **GIVEN** the intro section is rendered
- **WHEN** it is inspected
- **THEN** it shows the headline "Unlimited Access to 100K tracks" on the
  left and a "Try it now" button on the right, with supporting body copy

### Requirement: How it works

The system SHALL render a dark navy section (with optional cover image)
titled "How it works" with three step items, each with a 57px pink circular
icon, a heading, and muted-white body text: "Create an account", "Choose a
plan", "Download Music".

#### Scenario: How steps

- **GIVEN** the how section is rendered
- **WHEN** it is inspected
- **THEN** it shows the three steps "Create an account", "Choose a plan",
  and "Download Music", each with a circular brand-accent icon, heading,
  and muted paragraph

### Requirement: Concept section

The system SHALL render a white section titled "Our Concept & artists"
(title left, paragraph right) with a 4-column grid of image cards:
rounded-corner image (`border-radius: 40px`), small heading below. Items:
"Soul Music", "Live Concerts", "Dj Sets", "Live Streems" (keep the source's
typo "Streems" or fix to "Streams" — implementer's choice, note in PR).

#### Scenario: Concept grid

- **GIVEN** the concept section is rendered
- **WHEN** it is inspected
- **THEN** it shows the four items "Soul Music", "Live Concerts", "Dj
  Sets", "Live Streems", each with a rounded image and label, in a 4-column
  grid (2-column on small screens)

### Requirement: Subscription section

The system SHALL render a dark navy section: left column with headline
"Subscription from $15/month" (white), sub-headline "Start a free trial
now" in accent pink, muted-white paragraph, and a "Try it now" primary pill.
The right column SHALL be a rounded (`border-radius: 42px`) `#1c294a` panel
listing six checkmarked perks: Play any track, Listen offline, No ad
interruptions, Unlimited skips, High quality audio, Shuffle play.

#### Scenario: Subscription copy

- **GIVEN** the subscription section is rendered
- **WHEN** the left column is inspected
- **THEN** it shows the "$15/month" headline, the pink "Start a free trial
  now" sub-headline, and a "Try it now" button

#### Scenario: Perk list

- **GIVEN** the subscription panel is rendered
- **WHEN** it is inspected
- **THEN** the six perks (Play any track, Listen offline, No ad
  interruptions, Unlimited skips, High quality audio, Shuffle play) are
  listed with a check icon each inside the rounded navy panel

### Requirement: Premium section

The system SHALL render a white section titled "Why go Premium" (left) with
a paragraph (right) and a 4-column grid of circular-image features (190px
image, `border-radius: 50%`, heading + short muted caption): "No ad
interruptions", "High Quality", "Listen Offline", "Download Music".

#### Scenario: Premium features

- **GIVEN** the premium section is rendered
- **WHEN** it is inspected
- **THEN** it shows the four features "No ad interruptions", "High
  Quality", "Listen Offline", "Download Music", each with a circular image,
  heading, and short caption

### Requirement: Footer

The system SHALL render a dark navy (`#0a183d`) footer: brand + short about
text + social icon links (muted `#6a7080`); three link columns — "About us"
(Our Story, Sol Music Blog, History), "Products" (Music, Subscription,
Custom Music, Footage), "Playlists" (Newsletter, Careers, Press, Contact);
the copyright bar SHALL link to `https://www.componentdock.com/` branded as
"Component Dock" (mandatory — replaces the source's Colorlib credit).

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the brand, social links, and the three link columns
  About us / Products / Playlists with their listed links

#### Scenario: Copyright attribution

- **GIVEN** the footer copyright bar
- **WHEN** it is inspected
- **THEN** it includes a link to `https://www.componentdock.com/` branded
  as "Component Dock"

### Requirement: Page composition

The system SHALL compose the full page in this order: header → hero slider
→ intro → how it works → concept → subscription → premium → footer, with no
unimplemented sections.

#### Scenario: Full page render

- **GIVEN** the app renders
- **WHEN** the page is inspected
- **THEN** all eight sections appear in the source order and the page has
  no console errors

## Verification checklist

- [ ] Spec validated: `npm run spec:validate` passes for
      `template-sonata`.
- [ ] App `apps/sonata` created on branch `feat/template-sonata` by an
      implementer stream (NOT this prep stream).
- [ ] All Gherkin scenarios above covered by Vitest + Testing Library tests
      at 100% coverage (lines/functions/branches/statements).
- [ ] `npm run verify:app sonata` passes: typecheck, lint, knip, fallow,
      test:coverage, build.
- [ ] Design tokens match the reference: `#fc0254` pink, `#0a183d` navy,
      `#08192d` header, `#383b70` secondary button, `#1c294a` panel,
      `#6a7080` muted, Montserrat font, 50px pill buttons.
- [ ] Footer links `https://www.componentdock.com/`; no ColorLib references
      anywhere in `apps/sonata`.
- [ ] `public/CNAME` = `sonata.free.componentdock.com`; `homepage` =
      `https://sonata.free.componentdock.com`; `npm install` run at root and
      `@free-react-templates/sonata` registered in `package-lock.json`.
- [ ] `npm run readme:status` regenerates README status; TEMPLATES.md row
      marked `[x]` with the live URL on merge.
