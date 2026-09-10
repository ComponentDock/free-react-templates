# Template: Vivid (Creative Agency Template)

## Purpose

Vivid is a single-page creative-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Creativex 3" website template (see TEMPLATES.md, Astro
section), built under a different name with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

The reference is a modern creative-agency landing page ("Pixel Studio —
Creative Digital Agency"): a fixed glassy navbar (logo + Work / Services /
About / Contact + pill CTA) with a mobile hamburger; a centered hero on a
soft `gray-50` background with two blurred brand-color glow circles, an
animated "Award-Winning Creative Agency" badge pill, the headline "We Create
**Bold Digital** Experiences" (the words "Bold Digital" in a fuchsia→orange
text gradient), a subtitle, a primary pill CTA ("View Our Work") plus an
outline secondary CTA ("Start a Project"), a 4-column stats row (150+
Projects Delivered, 50+ Happy Clients, 12 Team Members, 8 Years Experience)
and a scroll indicator; an awards strip (Awwwards Site of the Day 2024, CSS
Design Awards 2024, FWA of the Month 2023, Webby Awards Honoree 2023); a
"What We Do" services grid of four icon cards (Web Design, Mobile Apps,
Brand Identity, Digital Marketing) each with a description, four feature
bullets and a "Learn More" link; a "Featured Work" block of three dark
project cards (image, uppercase category tag, title, description) with a
"View All Projects" link; a "What Clients Say" testimonials section with
three cards (5 yellow stars, quote, avatar, name, role); and a footer with a
brand blurb + social icon buttons, nav/service/contact columns, and a
copyright bar with Privacy Policy / Terms of Service links. Typography is
Inter (400–800); the brand accent is fuchsia `#d946ef` (Tailwind
`primary-500`) with orange `#f97316` as a gradient accent; buttons are
pill-shaped (`rounded-full`); the page supports full class-based dark mode
(`gray-900`/`gray-950` surfaces). Vivid recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency template
  (source: https://colorlib.com/wp/template/creativex-3/). Listed in
  TEMPLATES.md under the Astro area (line 138). Screenshot:
  `creativex-template-1770211073725.jpg` (2400×1892, reviewed visually in
  the browser).
- **Live preview URL NOTE:** the legacy
  `https://preview.colorlib.com/theme/creativex-3/` returns HTTP 404
  ("Not Found"). ColorLib's `products.js` (`https://preview.colorlib.com/assets/js/products.js`)
  maps the slug `creativex` to the NEW preview host
  `https://creativex-colorlib.pages.dev/` (a modern Astro + Tailwind
  rebuild of the same template). That URL is the LIVE reference and was
  fetched + analyzed (`/tmp/creativex3-preview.html`, 58 KB; stylesheet
  `/_astro/Base.BjbRLE8f.css`, 41 KB). The TEMPLATES.md screenshot matches
  this modern design (fuchsia `#d946ef` accents, "Pixel Studio" branding,
  stats row, awards strip) — the preview and screenshot agree, so the
  modern preview is treated as the authoritative reference and this is
  noted in the PR.
- **Section order (1:1 from the preview DOM):**
  1. Header `header[data-header]` — `fixed left-0 right-0 top-0 z-50`,
     `bg-white/95 shadow-sm backdrop-blur-sm dark:bg-gray-950/95`; inner
     `nav` (`mx-auto flex max-w-7xl items-center justify-between px-4 py-4
lg:px-8`): logo `img /assets/img/logo.svg` (h-8, dark variant
     `logo-light.svg`), desktop menu (Work, Services, About, Contact), pill
     CTA `a.rounded-full.bg-primary-500.px-5.py-2.5` "Start a Project"
     (hidden on mobile), mobile hamburger `button` (`lg:hidden`).
  2. Hero `section.relative.overflow-hidden.bg-gray-50.dark:bg-gray-900` —
     background pattern `div.absolute.inset-0.opacity-30` with two blurred
     circles: `bg-primary-500 blur-[128px]` (top-left, h-72 w-72) and
     `bg-accent-500 blur-[128px]` (bottom-right, h-72 w-72); content
     `div.relative.mx-auto.max-w-7xl.px-4.py-24.lg:py-32` centered
     (`max-w-4xl text-center`): badge pill
     (`inline-flex items-center gap-2 rounded-full border border-primary-200
bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700` with an
     `animate-ping` dot) "Award-Winning Creative Agency"; `h1`
     `text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-gray-900
dark:text-white` "We Create <span class="text-gradient">Bold
     Digital</span> Experiences"; subtitle `p.text-lg.text-gray-600` "We
     craft bold digital experiences that captivate audiences and drive
     results."; CTA row `mt-10 flex flex-col sm:flex-row gap-4`: primary
     `a.rounded-full.bg-primary-500.px-8.py-4.font-semibold.text-white
shadow-lg shadow-primary-500/25 hover:bg-primary-600` "View Our Work"
     (with arrow svg) + secondary
     `a.rounded-full.border-2.border-gray-300.bg-white.px-8.py-4
text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700
dark:bg-gray-800` "Start a Project"; stats row `mt-20 grid grid-cols-2
sm:grid-cols-4 gap-8 border-t border-gray-200 pt-12 dark:border-gray-800`
     — 4 × `div.text-center` with `div.text-3xl.font-bold` value (150+, 50+,
     12, 8) + label (Projects Delivered, Happy Clients, Team Members, Years
     Experience); then a "Scroll" indicator with mouse icon.
  3. Awards strip `section.border-y.border-gray-200.bg-white.py-8
dark:border-gray-800 dark:bg-gray-950` — four award names: Awwwards
     Site of the Day 2024 · CSS Design Awards 2024 · FWA of the Month 2023 ·
     Webby Awards Honoree 2023 (text, no logos in the DOM).
  4. Services `section.bg-white.py-20.lg:py-28.dark:bg-gray-950`: centered
     `h2` "What We Do" + `p` "We offer a full range of creative services to
     help your business stand out and succeed in the digital world."; grid
     of 4 cards — **Web Design** ("Beautiful, responsive websites that
     convert visitors into customers."), **Mobile Apps** ("Native and
     cross-platform apps that users love to use."), **Brand Identity**
     ("Memorable brands that stand out and tell your story."), **Digital
     Marketing** ("Data-driven campaigns that grow your business."). Each
     card: icon (svg), title, description, 4 feature bullets each with a
     check icon (e.g. Web Design → Custom Design, Responsive Development,
     CMS Integration, SEO Optimization; Mobile Apps → iOS & Android, React
     Native, UI/UX Design, App Store Launch; Brand Identity → Logo Design,
     Brand Guidelines, Visual Identity, Brand Strategy), and a "Learn More"
     link `a.inline-flex.items-center.gap-2.text-sm.font-semibold
text-primary-500 hover:text-primary-600` (with arrow).
  5. Featured Work `section.bg-gray-50.py-20.lg:py-28.dark:bg-gray-900`:
     header row with `h2` (featured-work heading) + "View All Projects"
     link; 3 project cards `a.group.relative.overflow-hidden.rounded-2xl
bg-gray-900` — each with full-bleed image
     (`h-full w-full object-cover transition-transform duration-500
group-hover:scale-105`; Unsplash images → picsum seeds), an uppercase
     category tag `span.text-xs.font-medium.uppercase.tracking-wider
text-primary-400` ("Branding", "Mobile App", "Web Design"), title and
     one-line description: **Nova Fintech Rebrand** (Branding — "Complete
     brand overhaul for a leading fintech startup, positioning them as the
     future of personal banking."), **Mindful Wellness App** (Mobile App —
     "A meditation and wellness app designed to help users build healthy
     daily habits."), **Urban Eats Platform** (Web Design — "A food delivery
     platform connecting local restaurants with hungry customers.").
  6. Testimonials `section.bg-gray-50.py-20.lg:py-28.dark:bg-gray-900`:
     centered `h2` "What Clients Say" + `p` "Don't just take our word for
     it. Here's what our clients have to say about working with us."; 3
     cards `figure`, each: 5 star icons `text-yellow-400`, quote
     `blockquote`, avatar `img.h-12.w-12.rounded-full` + name + role —
     **David Kim** (CEO, Nova Financial), **Lisa Thompson**, **Michael
     Torres**.
  7. Footer `footer.border-t.border-gray-200.bg-gray-50.dark:border-gray-800
dark:bg-gray-900`: brand blurb ("We craft bold digital experiences…")
     - 4 social icon buttons
       (`a.rounded-lg.bg-gray-200.p-2.5.text-gray-600 hover:bg-primary-500
hover:text-white dark:bg-gray-800`; X/Twitter, Instagram, LinkedIn,
       Facebook inline SVG brand icons — simple-icons paths, NOT lucide-react
       which dropped brand icons); link columns (Work / Services / About /
       Contact; Web Design / Mobile Apps / Brand Identity / Digital
       Marketing); contact block (hello@pixelstudio.com, (555) 987-6543,
       456 Creative Ave, Suite 200 Los Angeles, CA 90028); bottom bar:
       "© 2026 Pixel Studio. All rights reserved." + Privacy Policy + Terms
       of Service links.
- **Visual design (screenshot):** modern SaaS/agency aesthetic. Soft
  lavender-to-peach gradient mesh backdrop behind a white hero; vibrant hot
  pink/magenta (`#d946ef`) is the dominant accent (logo icon, "Bold Digital"
  headline span, primary CTA, navbar CTA); dark charcoal text; pill-shaped
  buttons and badge; white cards with subtle shadows; the awards strip and
  stats row add social proof below the fold. Clean, whitespace-heavy,
  rounded, friendly-premium.
- **Design tokens (extracted from `Base.BjbRLE8f.css` + DOM classes):**
  - Brand primary **fuchsia `#d946ef`** (Tailwind `primary-500`; 21
    occurrences). Shades: `primary-300` `#f0abfc`, `primary-400` `#e879f9`,
    `primary-600` `#c026d3`. Used for: badge, primary CTAs, "Learn More" /
    "View All Projects" links, category tags (`text-primary-400`), glow
    circles, social hover.
  - Gradient accent **orange `#f97316`** (`accent-500`): second hero glow
    circle + `text-gradient` — `.text-gradient` =
    `linear-gradient(to right in oklab, #d946ef, #f97316)` with
    `background-clip: text; color: transparent` (used on "Bold Digital").
  - Font: **Inter** (weights 400, 500, 600, 700, 800) via Google Fonts
    (`family=Inter:wght@400;500;600;700;800`). Recreate via `<link>` in
    `index.html`.
  - Buttons: primary pill — `rounded-full bg-primary-500 text-white
font-semibold shadow-lg shadow-primary-500/25 hover:bg-primary-600
hover:shadow-xl hover:shadow-primary-500/30`; secondary — `rounded-full
border-2 border-gray-300 bg-white text-gray-700 hover:border-gray-400
hover:bg-gray-50`; text links — `text-sm font-semibold text-primary-500
hover:text-primary-600` with arrow icon.
  - Radii: `rounded-full` (pills/badge), `rounded-lg` (0.5rem — social
    icon buttons, small controls), `rounded-2xl` (1rem — project cards).
  - Section backgrounds: `bg-gray-50` (hero, Featured Work, Testimonials),
    `bg-white` (awards strip, Services); dark surfaces `dark:bg-gray-900` /
    `dark:bg-gray-950`. Hero glow circles `blur-[128px] opacity-30
dark:opacity-20`.
  - Text: headings `text-gray-900 dark:text-white`; body `text-gray-600
dark:text-gray-400`; stats values `text-3xl font-bold text-gray-900`;
    stars `text-yellow-400`.
  - Borders: `border-gray-200` (stats divider, footer top, awards strip),
    `border-gray-300` (secondary CTA).
  - Dark mode: full `dark:` variant coverage on every section (class-based
    `.dark` on `<html>`; Tailwind `@custom-variant dark`).
- **Recreation name:** Vivid (NEW name, differs from ColorLib "Creativex
  3"). App folder `apps/vivid`, package `@free-react-templates/vivid`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/vivid-<n>/<w>/<h>`: project cards 800×600, avatars
  100×100); logo → Inter text wordmark (no asset copy); lucide-react icons
  (ArrowRight, Menu, X, Star, Check, Sparkles, Mail, Phone, MapPin, Mouse)
  EXCEPT brand icons — X/Twitter, Instagram, LinkedIn, Facebook as inline
  SVG (simple-icons paths) per the replication skill; Inter via Google
  Fonts `<link>`; hero "Bold Digital" gradient via Tailwind `bg-clip-text
text-transparent bg-gradient-to-r from-fuchsia-500 to-orange-500`; no
  assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Requirements

### Requirement: Header navigation

The system SHALL render a fixed header with the site logo, desktop nav links
(Work, Services, About, Contact), a pill "Start a Project" CTA, and a mobile
hamburger toggle.

#### Scenario: Header content

- **GIVEN** the Vivid page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be fixed to the top with a semi-transparent
  white background and backdrop blur
- **AND** it SHALL show the site logo (text wordmark) on the left
- **AND** it SHALL show nav links Work, Services, About, and Contact
- **AND** it SHALL show a "Start a Project" pill button in the brand color

#### Scenario: Mobile navigation

- **GIVEN** the header is rendered
- **WHEN** the viewport is narrow (mobile)
- **THEN** the desktop menu and CTA SHALL be hidden
- **AND** a hamburger toggle button SHALL be shown
- **WHEN** the user presses the hamburger
- **THEN** a mobile menu SHALL open with the same nav links and CTA
- **AND** the toggle SHALL reflect the open state (aria-expanded)

### Requirement: Hero section

The system SHALL render a centered hero on a gray-50 background with blurred
brand-color glow circles, an award badge, a gradient-highlighted headline, a
subtitle, two CTAs, a stats row, and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the Vivid page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a badge pill "Award-Winning Creative Agency" with
  an animated dot
- **AND** it SHALL show the headline "We Create Bold Digital Experiences"
  with "Bold Digital" rendered in the fuchsia→orange text gradient
- **AND** it SHALL show the subtitle "We craft bold digital experiences
  that captivate audiences and drive results."
- **AND** it SHALL show a primary pill CTA "View Our Work" and an outline
  pill CTA "Start a Project"
- **AND** the hero background SHALL contain two blurred glow circles in
  the brand colors (`#d946ef` and `#f97316`)

#### Scenario: Stats row

- **GIVEN** the hero is displayed
- **WHEN** the stats row is inspected
- **THEN** it SHALL show exactly four stats: 150+ Projects Delivered, 50+
  Happy Clients, 12 Team Members, 8 Years Experience
- **AND** each stat SHALL have a bold value and a label
- **AND** the row SHALL be separated from the hero text by a top border

#### Scenario: Scroll indicator

- **GIVEN** the hero is displayed
- **WHEN** the bottom of the hero is inspected
- **THEN** it SHALL show a "Scroll" indicator (text with a mouse icon)

### Requirement: Awards strip

The system SHALL render a bordered strip listing four industry awards.

#### Scenario: Awards content

- **GIVEN** the Vivid page is rendered
- **WHEN** the awards strip is displayed
- **THEN** it SHALL show Awwwards Site of the Day 2024, CSS Design Awards
  2024, FWA of the Month 2023, and Webby Awards Honoree 2023
- **AND** the strip SHALL have top and bottom borders on a white
  background

### Requirement: Services section

The system SHALL render a "What We Do" section with a heading, subtitle, and
four service cards, each with an icon, title, description, four feature
bullets, and a "Learn More" link.

#### Scenario: Services content

- **GIVEN** the Vivid page is rendered
- **WHEN** the Services section is displayed
- **THEN** it SHALL show the heading "What We Do" with a subtitle
- **AND** it SHALL show four cards: Web Design, Mobile Apps, Brand
  Identity, Digital Marketing
- **AND** each card SHALL show an icon, a description, and four feature
  bullets with check icons
- **AND** each card SHALL show a "Learn More" link in the brand color with
  an arrow

### Requirement: Featured Work section

The system SHALL render a "Featured Work" section on a gray-50 background
with a "View All Projects" link and three dark project cards (image,
category tag, title, description).

#### Scenario: Featured Work content

- **GIVEN** the Vivid page is rendered
- **WHEN** the Featured Work section is displayed
- **THEN** it SHALL show a section heading and a "View All Projects" link
- **AND** it SHALL show three project cards: Nova Fintech Rebrand
  (Branding), Mindful Wellness App (Mobile App), and Urban Eats Platform
  (Web Design)
- **AND** each card SHALL show a full-bleed image, an uppercase category
  tag in the brand color, a title, and a one-line description

#### Scenario: Card hover

- **GIVEN** a project card is rendered
- **WHEN** the user hovers the card
- **THEN** the image SHALL scale up slightly (hover zoom)

### Requirement: Testimonials section

The system SHALL render a "What Clients Say" section with a heading,
subtitle, and three testimonial cards (five stars, quote, avatar, name,
role).

#### Scenario: Testimonials content

- **GIVEN** the Vivid page is rendered
- **WHEN** the Testimonials section is displayed
- **THEN** it SHALL show the heading "What Clients Say" with a subtitle
- **AND** it SHALL show three testimonial cards, each with five yellow
  stars, a quote, a circular avatar, a name, and a role

### Requirement: Footer

The system SHALL render a footer with a brand blurb, social icon buttons,
link columns (navigation, services), a contact block, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Vivid page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand blurb and four social icon buttons
  (X/Twitter, Instagram, LinkedIn, Facebook)
- **AND** it SHALL show a nav column (Work, Services, About, Contact) and
  a services column (Web Design, Mobile Apps, Brand Identity, Digital
  Marketing)
- **AND** it SHALL show contact details: email, phone, and address
- **AND** the bottom bar SHALL show a copyright line with the current year
  plus Privacy Policy and Terms of Service links

#### Scenario: Social icon hover

- **GIVEN** a social icon button is rendered
- **WHEN** the user hovers it
- **THEN** the button SHALL fill with the brand color and the icon SHALL
  turn white

### Requirement: Dark mode

The system SHALL support class-based dark mode across all sections.

#### Scenario: Dark mode toggle

- **GIVEN** the Vivid page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** section surfaces SHALL switch to the dark palette (gray-900 /
  gray-950 backgrounds, white headings, gray-400 body text)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Vivid app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Vivid — Creative Agency Template"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/vivid`
      (`scripts/verify-app.sh vivid` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: header (glassy fixed nav + pill CTA + mobile
      hamburger), hero (glow circles, badge pill, gradient headline,
      dual CTAs, 4-stat row, scroll indicator), awards strip, What We Do
      (4 icon cards with feature bullets + Learn More), Featured Work (3
      dark project cards + View All Projects), What Clients Say (3 cards,
      yellow stars), footer (blurb + socials + columns + contact +
      copyright bar) match the Creativex preview 1:1.
- [ ] Design tokens in `@theme`: brand `#d946ef`, gradient accent
      `#f97316`, surfaces gray-50/white + gray-900/gray-950 dark variants;
      Inter (400–800) loaded via Google Fonts.
- [ ] "Bold Digital" headline uses `bg-clip-text text-transparent` with the
      fuchsia→orange gradient.
- [ ] Placeholder images use `picsum.photos/seed/vivid-<n>/<w>/<h>`;
      lucide-react icons except brand icons (inline SVG simple-icons for
      X/Instagram/LinkedIn/Facebook); no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Creativex 3"),
      preview URL (`https://creativex-colorlib.pages.dev/` — legacy
      `preview.colorlib.com/theme/creativex-3/` 404s), design tokens, and
      what differs (name, placeholders, text logo).
