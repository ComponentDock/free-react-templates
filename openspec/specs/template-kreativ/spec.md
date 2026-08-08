# Template: Kreativ (Creative Agency)

## Purpose

Kreativ is a single-page creative-agency landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Creativex 3" template (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Creativex 3" — modern creative-agency landing page:
  fixed header, award-winning hero with stats, awards strip, services cards,
  selected-work showcase, client testimonials, and a contact section with a
  project-quote form (source: https://colorlib.com/wp/template/creativex-3/).
  TEMPLATES.md has **THREE copies** of this item (lines 138, 1459, 2907 —
  mark ALL of them `[x]` when done).
- **Preview URL:** https://creativex-colorlib.pages.dev/
  (HTTP 200, 58 KB DOM, fetched 2026-08-08). NOTE: the usual
  `preview.colorlib.com/theme/creativex-3/` URL 404s; `products.js`
  (`preview.colorlib.com/assets/js/products.js`) maps the slug to
  `creativex-colorlib.pages.dev/`. The live DOM is the primary reference.
- **Screenshot:** `creativex-template-1770211073725.jpg` (2400×1892, verified
  via browser vision). Matches the live DOM: white header with pink "P" logo
  icon + "Pixel Studio" wordmark, centered nav (Work, Services, About,
  Contact) + pink "Start a Project" pill CTA; hero with pill badge
  "Award-Winning Creative Agency", bold headline "We Create **Bold Digital
  Experiences**" with a pink/magenta gradient on "Bold Digital", light
  grey/white background with soft pink glow (left) and peach/orange glow
  (right), pink primary CTA "View Our Work →" + white/grey-bordered outline
  CTA "Start a Project"; stats row (150+ / 50+ / 12 / 8) with "SCROLL"
  indicator; awards strip (Awwwards 2024, CSS Design Awards, FWA 2023, Webby
  2023). Modern, bold, tech-forward; Inter sans-serif; fuchsia `#d946ef`
  primary + orange `#f97316` accent.
- **Section order (1:1):** Fixed header (logo + centered nav + CTA pill +
  hamburger) → Hero (min-h-screen: badge, gradient headline, subtext, 2 CTAs,
  stats row, scroll indicator) → Awards strip (border-y) → Services "What We
  Do" (grey `#F9FAFB` bg, 4 cards with icon tile + feature list + Learn More)
  → Selected Work (white bg, heading + "View All Projects" link, 3 project
  cards: image + category + title + blurb) → Testimonials "What Clients Say"
  (grey bg, 3 quote cards with avatar + name + role) → Contact "Let's Work
  Together" (white bg, left: contact info blocks + follow links; right:
  project form with selects) → Footer (border-t, brand blurb + Navigation +
  Services + Contact columns, bottom bar with copyright + Privacy Policy +
  Terms of Service).

### Hero (from live DOM)

- `min-h-screen bg-white` section with two absolutely-positioned blurred glow
  blobs: `bg-primary-500 blur-[128px]` (top-left, `h-72 w-72 rounded-full`)
  and `bg-accent-500 blur-[128px]` (bottom-right) — the pink/peach soft glow.
- Badge: `inline-flex items-center gap-2 rounded-full border border-primary-200
bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700` — star icon
  - "Award-Winning Creative Agency".
- `h1` `text-4xl/5xl/6xl font-bold tracking-tight` — "We Create Bold Digital
  Experiences"; "Bold Digital" is a `bg-gradient-to-r from-primary-500
to-accent-500 bg-clip-text text-transparent` gradient fill.
- Subtext: `text-lg text-gray-600` — "We craft bold digital experiences that
  captivate audiences and drive results."
- CTAs: primary `rounded-full bg-primary-500 px-8 py-4 font-semibold text-white
shadow-lg shadow-primary-500/25 hover:bg-primary-600` ("View Our Work" +
  arrow); secondary `rounded-full border-2 border-gray-300 bg-white px-8 py-4
font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50`
  ("Start a Project").
- Stats row: 4 items — `150+` Projects Delivered, `50+` Happy Clients, `12`
  Team Members, `8` Years Experience (bold number + label).
- Scroll indicator: "Scroll" label + mouse icon (`relative flex h-10 w-6
items-start justify-center rounded-full border-2 border-current pt-2` with
  an animated `animate-scroll-indicator` dot).

### Awards strip (from live DOM)

- `border-y border-gray-200 bg-white py-8` — 4 award items:
  "Awwwards Site of the Day — 2024", "CSS Design Awards — 2024",
  "FWA of the Month — 2023", "Webby Awards Honoree — 2023".

### Services (from live DOM)

- Section `bg-gray-50 py-20 lg:py-28` ("What We Do" heading + intro line).
- 4 cards (`rounded-2xl border border-gray-200 bg-white p-8 transition-all
hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10`):
  Web Design, Mobile Apps, Brand Identity, Digital Marketing. Each card:
  icon tile (`rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 p-3
text-white shadow-lg shadow-primary-500/25`), title, blurb, 4-point feature
  list (small checks), "Learn More" link (`font-semibold text-primary-500
hover:text-primary-600`).
  - Web Design: "Beautiful, responsive websites that convert visitors into
    customers." — Custom Design, Responsive Development, CMS Integration,
    SEO Optimization.
  - Mobile Apps: "Native and cross-platform apps that users love to use." —
    iOS & Android, React Native, UI/UX Design, App Store Launch.
  - Brand Identity: "Memorable brands that stand out and tell your story." —
    Logo Design, Brand Guidelines, Visual Identity, Brand Strategy.
  - Digital Marketing: "Data-driven campaigns that grow your business." —
    Social Media, Content Strategy, PPC Advertising, Analytics & Reporting.

### Selected Work (from live DOM)

- White section ("Selected Work" heading + "A showcase of our best projects…"
  - "View All Projects" link).
- 3 project cards: `group relative overflow-hidden rounded-2xl bg-gray-900`
  with image (`w=800&h=600` crop), category tag + title overlay, and a
  description under the image:
  - Branding — "Nova Fintech Rebrand" ("Complete brand overhaul for a leading
    fintech startup…")
  - Mobile App — "Mindful Wellness App" ("A meditation and wellness app…")
  - Web Design — "Urban Eats Platform" ("A food delivery platform…")

### Testimonials (from live DOM)

- `bg-gray-50 py-20 lg:py-28` ("What Clients Say" heading).
- 3 quote cards (`relative rounded-2xl bg-white p-8 shadow-sm`): quote text,
  then avatar (`h-12 w-12 rounded-full object-cover`, 100×100) + name + role:
  David Kim — CEO, Nova Financial; Lisa Thompson — Founder, Mindful Inc.;
  Michael Torres — Marketing Director, Urban Eats.

### Contact (from live DOM)

- White section ("Let's Work Together" heading + "Have a project in mind?…").
- Left column: 4 contact blocks — "Email Us" (hello@pixelstudio.com),
  "Call Us" ((555) 987-6543), "Visit Us" (456 Creative Ave, Suite 200,
  Los Angeles, CA 90028), "Follow Us" (social icon links).
- Right column: form with Name (text), Email (email), Company (optional,
  text), "Service Interested In" (select: Web Design / Mobile Apps / Brand
  Identity / Digital Marketing / Other), "Budget Range" (select:
  $5,000 - $10,000 / $10,000 - $25,000 / $25,000 - $50,000 / $50,000+),
  Project Details (textarea), "Send Message" submit button (primary pill,
  full width). Inputs: `rounded-lg border border-gray-300 bg-white px-4 py-3
focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20`.

### Footer (from live DOM)

- `border-t border-gray-200 bg-gray-50` (dark mode `bg-gray-900`): brand
  blurb ("We craft bold digital experiences that captivate audiences and
  drive results."), Navigation column (Work, Services, About, Contact),
  Services column (Web Design, Mobile Apps, Brand Identity, Digital
  Marketing), Contact column (hello@pixelstudio.com, (555) 987-6543,
  456 Creative Ave…). Bottom bar: "© 2026 Pixel Studio. All rights
  reserved." + Privacy Policy + Terms of Service links.

## Design tokens (from preview CSS `/_astro/Base.BjbRLE8f.css` + DOM)

| Token         | Value                                                                                                                                                                                                                 | Where                                                                    |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Brand fuchsia | `#d946ef` (`primary-500`); hover `#c026d3` (`primary-600`)                                                                                                                                                            | primary CTA + header CTA + icon tiles + links; hero gradient + glow blob |
| Primary scale | 50 `#fdf4ff`, 100 `#fae8ff`, 300 `#f0abfc`, 400 `#e879f9`, 700 `#a21caf`                                                                                                                                              | badge bg/border/text, card hover borders, link hover                     |
| Accent orange | `#f97316` (`accent-500`)                                                                                                                                                                                              | hero gradient ("Bold Digital"), icon tile gradient end, right glow blob  |
| White         | `#ffffff`                                                                                                                                                                                                             | page bg, cards, header (95% + blur), text on dark                        |
| Section grey  | `#f9fafb` (`gray-50`)                                                                                                                                                                                                 | Services + Testimonials section bgs; footer bg                           |
| Borders       | `#e5e7eb` (`gray-200`), `#d1d5db` (`gray-300`), `#9ca3af` (`gray-400`)                                                                                                                                                | card borders, awards strip border-y, outline button border               |
| Text greys    | `#111827` (`gray-900`), `#374151` (`gray-700`), `#4b5563` (`gray-600`), `#6b7280` (`gray-500`)                                                                                                                        | headings / body / subtext / placeholders                                 |
| Font family   | `'Inter', system-ui, sans-serif` (Google Fonts link, weights 400–800)                                                                                                                                                 | whole template                                                           |
| Buttons       | pill `rounded-full`; primary = `#d946ef` bg + white text + `shadow-lg shadow-primary-500/25`, hover `#c026d3`; secondary = `border-2 gray-300` white bg, hover `gray-400`/`gray-50`; header CTA `px-5 py-2.5 text-sm` | hero CTAs, header CTA, form submit                                       |
| Cards         | `rounded-2xl` (1rem), white, 1px `gray-200` border, `p-8`; hover: `border-primary-300` + `shadow-xl shadow-primary-500/10`                                                                                            | services, testimonials                                                   |
| Project cards | `rounded-2xl overflow-hidden bg-gray-900`, image 800×600 crop, category tag + title overlay                                                                                                                           | selected work showcase                                                   |
| Icon tiles    | `rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 p-3 text-white shadow-lg shadow-primary-500/25`                                                                                                          | services card icons                                                      |
| Badge         | `rounded-full border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium`                                                                                                                                  | hero badge                                                               |
| Form inputs   | `rounded-lg border-gray-300 px-4 py-3`, focus `border-primary-500` + `ring-2 ring-primary-500/20`                                                                                                                     | contact form                                                             |
| Glow blobs    | `rounded-full bg-primary-500 / bg-accent-500 blur-[128px] opacity`                                                                                                                                                    | hero background (absolute, top-left + bottom-right)                      |
| Icons         | lucide-react equivalents (Star, ArrowRight, Palette, Smartphone, Sparkles, Megaphone, Check, Mail, Phone, MapPin, Menu, X, ArrowUpRight)                                                                              | badge, CTAs, service tiles, contact blocks, header, project links        |

## Recreation decisions

- Deliverable: single-page creative-agency landing — fixed header with CTA
  pill, full-height hero with gradient headline + glow blobs + stats, awards
  strip, 4 service cards, 3 project cards, 3 testimonial cards, contact
  section with project form (client-side validation only), footer with 3
  link columns.
- Brand name "Kreativ" replaces "Creativex"; never use "Creativex" or
  "Pixel Studio" as the brand. Wordmark/logo: simple icon (e.g. Sparkles in
  a fuchsia gradient tile) + "Kreativ".
- Dark-mode classes in the source (`dark:`) are optional — implement the
  light theme faithfully; may skip dark variants (note it in the PR).
- Photos → seeded picsum placeholders (`picsum.photos/seed/kreativ-<n>/<w>/<h>`):
  project images 800×600, avatars 100×100; no assets copied.
- Icons → lucide-react (Star, ArrowRight, ArrowUpRight, Palette,
  Smartphone, Sparkles, Megaphone, Check, Mail, Phone, MapPin, Menu, X,
  Twitter/X, Facebook, Instagram, Linkedin). Brand social icons are NOT in
  lucide-react — use inline SVG (simple-icons paths) if exact brand icons
  are needed, or generic icons.
- Fonts: Google Fonts `<link>` — "Inter" (400/500/600/700/800).
- Form: client-side validation (required name/email/details, email format,
  selects default to placeholder options) + success state on submit (no
  backend). All links decorative anchors.
- Skip link "Skip to main content" (existing convention).

## Requirements

### Requirement: Page header

The system SHALL render a fixed page header with the brand, a centered
navigation bar, a call-to-action button, and a mobile menu.

#### Scenario: Header content

- **GIVEN** the Kreativ page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be fixed to the top with a white/95 blurred
  background
- **AND** it SHALL show the wordmark "Kreativ" with an icon on the left
- **AND** it SHALL show a nav bar with links Work, Services, About, and
  Contact
- **AND** it SHALL show a "Start a Project" pill button on the right

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the hamburger menu
- **THEN** every nav link and the "Start a Project" button SHALL be
  reachable
- **AND** the user SHALL be able to close the menu

### Requirement: Hero

The system SHALL render a full-height hero with a badge, a gradient
headline, two call-to-action buttons, a stats row, and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL show a pill badge reading "Award-Winning Creative
  Agency" with a star icon
- **AND** it SHALL show the headline "We Create Bold Digital Experiences"
  with "Bold Digital" in a fuchsia-to-orange gradient
- **AND** it SHALL show the subtext "We craft bold digital experiences that
  captivate audiences and drive results."
- **AND** it SHALL show a primary "View Our Work" button and an outline
  "Start a Project" button
- **AND** the background SHALL have soft fuchsia and orange glow blobs

#### Scenario: Stats row

- **GIVEN** the hero is displayed
- **WHEN** the stats row renders
- **THEN** it SHALL show four stats: 150+ Projects Delivered, 50+ Happy
  Clients, 12 Team Members, 8 Years Experience
- **AND** it SHALL show a "Scroll" label with a mouse/scroll indicator icon

### Requirement: Awards strip

The system SHALL render a bordered strip listing four industry awards.

#### Scenario: Award items

- **GIVEN** the awards strip is displayed
- **WHEN** the page scrolls to it
- **THEN** it SHALL show "Awwwards Site of the Day" (2024), "CSS Design
  Awards" (2024), "FWA of the Month" (2023), and "Webby Awards Honoree"
  (2023)

### Requirement: Services

The system SHALL render a grey section with a heading and four service
cards, each with an icon, feature list, and a Learn More link.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** the cards render
- **THEN** the section SHALL appear on a `#F9FAFB` background with the
  heading "What We Do"
- **AND** there SHALL be four cards: Web Design, Mobile Apps, Brand
  Identity, Digital Marketing
- **AND** each card SHALL show a gradient icon tile, a title, a blurb, a
  four-item feature list, and a "Learn More" link
- **AND** hovering a card SHALL show a fuchsia border and a soft fuchsia
  shadow

### Requirement: Selected work

The system SHALL render a showcase of three project cards with a heading
and a View All link.

#### Scenario: Project cards

- **GIVEN** the selected-work section is displayed
- **WHEN** the cards render
- **THEN** the section SHALL carry the heading "Selected Work" and a
  "View All Projects" link
- **AND** there SHALL be three cards: Nova Fintech Rebrand (Branding),
  Mindful Wellness App (Mobile App), Urban Eats Platform (Web Design)
- **AND** each card SHALL show an image, a category tag, a title, and a
  short description

### Requirement: Testimonials

The system SHALL render a grey section with three client testimonial cards.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is displayed
- **WHEN** the cards render
- **THEN** the section SHALL carry the heading "What Clients Say"
- **AND** there SHALL be three cards, each with a quote, a round avatar, a
  name, and a role (David Kim / CEO Nova Financial; Lisa Thompson / Founder
  Mindful Inc.; Michael Torres / Marketing Director Urban Eats)

### Requirement: Contact section

The system SHALL render a contact section with contact info blocks and a
project-quote form with validation.

#### Scenario: Contact info

- **GIVEN** the contact section is displayed
- **WHEN** the left column renders
- **THEN** it SHALL carry the heading "Let's Work Together" and the intro
  line "Have a project in mind? We'd love to hear about it."
- **AND** it SHALL show four blocks: Email Us (hello@pixelstudio.com),
  Call Us ((555) 987-6543), Visit Us (456 Creative Ave, Suite 200, Los
  Angeles, CA 90028), and Follow Us (social links)

#### Scenario: Project form

- **GIVEN** the contact section is displayed
- **WHEN** the form renders
- **THEN** it SHALL show fields for Name, Email, Company (optional),
  Service Interested In (select: Web Design / Mobile Apps / Brand Identity /
  Digital Marketing / Other), Budget Range (select: $5,000 - $10,000 /
  $10,000 - $25,000 / $25,000 - $50,000 / $50,000+), and Project Details
- **AND** it SHALL show a "Send Message" submit button
- **AND** submitting with an empty required field or an invalid email SHALL
  show a validation error and block submission
- **AND** submitting a valid form SHALL show a success state

### Requirement: Footer

The system SHALL render a footer with a brand blurb, three link columns,
and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** the page scrolls to it
- **THEN** it SHALL show the brand blurb, a Navigation column (Work,
  Services, About, Contact), a Services column (Web Design, Mobile Apps,
  Brand Identity, Digital Marketing), and a Contact column (email, phone,
  address)
- **AND** the bottom bar SHALL show a copyright line plus Privacy Policy
  and Terms of Service links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a skip link, a
main landmark, and a document title.

#### Scenario: Full page render

- **GIVEN** the Kreativ app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL start with a "Skip to main content" link
- **AND** the header SHALL be in the banner landmark, the sections in the
  main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Kreativ — Creative Agency Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh kreativ` passes (typecheck + lint + 100%
      coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] Header: fixed white/95 blur bar, wordmark "Kreativ" + icon, nav
      Work/Services/About/Contact, "Start a Project" pill; mobile hamburger
      works
- [ ] Hero: badge with star, gradient headline (fuchsia→orange on "Bold
      Digital"), subtext, "View Our Work" primary + "Start a Project"
      outline CTAs, glow blobs, stats row (150+/50+/12/8), Scroll indicator
- [ ] Awards strip: 4 awards with years on `border-y`
- [ ] Services on `#F9FAFB`: "What We Do" + 4 cards (gradient icon tile,
      title, blurb, 4 features, Learn More link, fuchsia hover border/shadow)
- [ ] Selected Work: 3 project cards (image, category, title, blurb) +
      "View All Projects"
- [ ] Testimonials on `#F9FAFB`: "What Clients Say" + 3 cards (quote,
      avatar, name, role)
- [ ] Contact: "Let's Work Together", 4 info blocks, form (Name, Email,
      Company, Service select, Budget select, Details, Send Message) with
      validation + success state
- [ ] Footer: blurb, Navigation/Services/Contact columns, bottom bar with
      copyright + Privacy/Terms links
- [ ] Fidelity: section order 1:1, `#d946ef` brand fuchsia + `#f97316`
      accent, Inter font, `#F9FAFB` alt sections, pill buttons, picsum
      placeholders seeded `kreativ-<n>`, no copied assets
- [ ] TEMPLATES.md: mark ALL THREE copies (lines 138, 1459, 2907 —
      Creativex 3) `[x]` and append the live surge URL to each
- [ ] `npm install` at root before committing (lockfile registers
      `apps/kreativ`); `grep -c "free-react-templates/kreativ"`
      package-lock.json >= 1
- [ ] `"homepage": "https://free-react-templates-kreativ.surge.sh"`
      in `apps/kreativ/package.json`
- [ ] PR title: `feat: Kreativ — creative agency website template (ColorLib
    Creativex 3)`; body includes the source URL, preview URL (pages.dev),
      tokens, and the three-copy TEMPLATES.md note
