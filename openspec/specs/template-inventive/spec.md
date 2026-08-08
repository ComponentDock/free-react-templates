# Template: Inventive (Creative Agency Template)

## Purpose

Inventive is a single-page creative agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Creativex 3" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency template
  (source: https://colorlib.com/wp/template/creativex-3/; ColorLib category:
  Creative Agency; ColorLib page title "Creativex - Best Creative Agency
  Website Template 2026"; meta description: "Win new clients with a bold
  creative agency template featuring filterable portfolio galleries, case
  studies, team bios, client logos, and project inquiry forms.").
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/creativex-3/`
  returns 404. The ColorLib preview portal (`https://preview.colorlib.com/`
  → `#creativex-3`, resolved via `assets/js/products.js` entry
  `["creativex","Creativex","Creative Agency",…,"https://creativex-colorlib.pages.dev/"]`)
  hosts the official demo on Cloudflare Pages:
  **`https://creativex-colorlib.pages.dev/`** (HTTP 200, title "Pixel Studio
  | Creative Digital Agency"). Live DOM fetched and parsed (hero, stats,
  awards strip, services, selected work, testimonials, contact form,
  footer), plus the preview stylesheet `/_astro/Base.BjbRLE8f.css` (41 KB,
  complete) for design tokens.
- **Screenshot reviewed visually** (`creativex-template-1770211073725.jpg`,
  2400×1892): soft ethereal lavender→peach gradient hero background;
  **fuchsia/magenta primary** accent (logo, "Bold Digital" gradient text,
  "View Our Work" pill button, "Start a Project" header button); orange
  secondary (background gradient, "Experiences" text); clean modern
  sans-serif (Inter); pill-shaped buttons; centered hero with an
  "Award-Winning Creative Agency" pill badge, four-stat row (150+ / 50+ /
  12 / 8), "SCROLL" mouse indicator, and an awards strip (Awwwards, CSS
  Design Awards, FWA, Webby).
- **Section order (1:1, from the DOM of the home page):**
  1. Navbar (`header` fixed top, white/95 blur backdrop): wordmark "Pixel
     Studio" (→ "Inventive"), center links Work / Services / About / Contact,
     right "Start a Project" pill button (primary bg), dark-mode toggle
     (`aria-label="Toggle dark mode"`), mobile menu toggle.
  2. Hero (`section relative overflow-hidden bg-gray-50`): pill badge
     "Award-Winning Creative Agency" (primary-50 bg), h1 "We Create **Bold
     Digital** Experiences" (span "Bold Digital" in primary→accent gradient
     text), subhead "We craft bold digital experiences that captivate
     audiences and drive results.", CTAs "View Our Work" (primary pill with
     arrow) + "Start a Project" (white outline pill), stats row: "150+
     Projects Delivered · 50+ Happy Clients · 12 Team Members · 8 Years
     Experience", "Scroll" mouse indicator. Soft lavender→peach gradient
     background (from screenshot).
  3. Awards strip (`section border-y border-gray-200 bg-white py-8`): four
     text logos — "Awwwards Site of the Day 2024", "CSS Design Awards 2024",
     "FWA of the Month 2023", "Webby Awards Honoree 2023".
  4. Services "What We Do" (`bg-white py-20 lg:py-28`): intro line "We offer
     a full range of creative services to help your business stand out and
     succeed." + 4 cards (icon, title, blurb, 4 checklist items with
     primary check icons, "Learn More" link):
     - Web Design — Custom Design, Responsive Development, CMS Integration,
       SEO Optimization.
     - Mobile Apps — iOS & Android, React Native, UI/UX Design, App Store
       Launch.
     - Brand Identity — Logo Design, Brand Guidelines, Visual Identity,
       Brand Strategy.
     - Digital Marketing — Social Media, Content Strategy, PPC Advertising,
       Analytics & Reporting.
  5. Selected Work "Selected Work" (`bg-gray-50 py-20 lg:py-28`): intro "A
     showcase of our best projects across branding, web design, and digital
     experiences." + 3 project cards (image, category tag, title, blurb,
     link): "Branding — Nova Fintech Rebrand — Complete brand overhaul for a
     leading fintech company."; "Mobile App — Mindful Wellness App — A
     meditation and wellness app designed to help users build healthy daily
     habits."; "Web Design — Urban Eats Platform — A food delivery platform
     connecting local restaurants with hungry customers."; "View All
     Projects" button.
  6. Testimonials "What Clients Say" (`bg-white py-20 lg:py-28`): intro
     "Don't just take our word for it. Here's what our clients have to say
     about working with us." + 3 quote cards (5 yellow stars, quote, name +
     role): "CEO, Nova Financial", "Founder, Mindful Inc.", "Marketing
     Director, Urban Eats".
  7. Contact "Let's Work Together" (`bg-gray-50 py-20 lg:py-28`): intro
     "Have a project in mind? We'd love to hear about it. Fill out the form
     below and we'll get back to you within 24 hours." + 4 info cards:
     Email Us (`hello@pixelstudio.com`), Call Us (`(555) 987-6543`), Visit
     Us (street address), Follow Us (social links). Contact form: Name,
     Email, Company (optional), Service Interested In (select: Select a
     service / Web Design / Mobile Apps / Brand Identity / Digital Marketing
     / Other), Budget Range (select: Select a budget range / $5,000 -
     $10,000 / $10,000 - $25,000 / $25,000 - $50,000 / $50,000+), Project
     Details (textarea), submit button "Send Message".
  8. Footer (`border-t border-gray-200 bg-gray-50`): 3 link columns
     (Navigation: Work / Services / About / Contact; Services: Web Design /
     Mobile Apps / Brand Identity / Digital Marketing; Contact: email +
     phone), social icons (Twitter, Instagram, LinkedIn, Dribbble), legal
     links (Privacy Policy, Terms of Service), copyright line (monorepo
     credit, not ColorLib).
- **Design tokens extracted from the preview CSS (`/_astro/Base.BjbRLE8f.css`):**
  - Primary brand **fuchsia/magenta `#d946ef`** (`primary-500`; button
    background, gradient text, focus ring `primary-500/20`, check icons,
    links). Hover **`#c026d3`** (`primary-600`), light tints `primary-50`
    (badge bg) / `primary-100`, dark-mode hover `primary-400` (`#e879f9`).
  - Secondary accent **orange `#f97316`** (`accent-500`): paired with
    primary in the headline gradient (`from-primary-500 to-accent-500`).
  - Testimonial stars: **yellow-400** (`oklch(85.2% .199 91.936)`).
  - Neutrals: headings `#111827` (`gray-900`), `#374151` (`gray-700`), body
    `text-gray-600`, `#6b7280` (`gray-500`), `#9ca3af` (`gray-400`), borders
    `#e5e7eb` (`gray-200`) / `#d1d5db` (`gray-300`), light section bg
    `#f3f4f6` (`gray-100`) / `#f9fafb` (`gray-50`), white cards; dark mode:
    `gray-950` page bg, `gray-900` sections, `gray-800` surfaces.
  - Font: **"Inter"** (weights 400/500/600/700/800) via Google Fonts.
  - Buttons: **pill** (`rounded-full`), primary = `#d946ef` bg + white text,
    hover `#c026d3`; secondary = white bg + `gray-300` border, hover
    `gray-400` border; focus ring `primary-500/20`.
  - Cards: `rounded-2xl` (1rem); sections `py-20 lg:py-28`; container
    `max-w-7xl`; hero `overflow-hidden` with soft lavender→peach gradient.
  - Dark mode: class-based `.dark` toggle (matches the repo chrome
    contract in docs/conventions.md).
- **Recreation name:** Inventive (NEW name — never reuse the ColorLib name
  "Creativex"/"Creativex 3"; the bootstrap-era spec `template-creativex`
  used the banned source name and was superseded by this prep). App folder
  `apps/inventive`, package `@free-react-templates/inventive`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/inventive-<n>/<w>/<h>`); lucide-react icons
  (ArrowRight, Check, Star, Menu, Moon, Sun, Mail, Phone, MapPin, Share2,
  ArrowUpRight); brand social icons (Twitter/X, Instagram, LinkedIn,
  Dribbble) as inline SVG (lucide-react removed brand icons); Inter via
  Google Fonts `<link>` in `index.html`; fuchsia primary `#d946ef` + orange
  accent `#f97316` in `@theme` so shared Button/ButtonLink `primary`
  variants resolve to fuchsia with pill radius. Paraphrase demo copy (same
  kinds: badge, headline + gradient span, subhead, stats, awards, service
  cards, project cards, quotes, form). Demo site name "Pixel Studio" →
  "Inventive".
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn); repo-standard
  Navbar (links + CTA + dark-mode toggle + mobile menu) and Footer chrome.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Inventive",
anchor links to the page's sections, a "Start a Project" call-to-action
button, a dark-mode toggle, and a mobile menu toggle.

#### Scenario: Navbar content

- **GIVEN** the Inventive page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Inventive" and links to Work, Services, and Contact
- **AND** the navbar SHALL show a "Start a Project" button
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a badge, a headline with a
gradient-accented phrase, a subheadline, two call-to-action buttons, a stats
row, and a scroll indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a pill badge "Award-Winning Creative Agency"
- **AND** it SHALL contain a level-1 heading "We Create Bold Digital Experiences"
- **AND** the words "Bold Digital" SHALL use the gradient accent treatment
- **AND** it SHALL show a subheadline blurb
- **AND** it SHALL show "View Our Work" and "Start a Project" buttons

#### Scenario: Hero stats

- **GIVEN** the hero is displayed
- **WHEN** the stats row renders
- **THEN** it SHALL show the four statistics: "150+ Projects Delivered", "50+ Happy Clients", "12 Team Members", "8 Years Experience"
- **AND** it SHALL show a "Scroll" indicator

### Requirement: Awards strip

The system SHALL render an awards strip between the hero and the services
section listing four industry recognitions.

#### Scenario: Awards strip content

- **GIVEN** the page is rendered
- **WHEN** the awards strip is displayed
- **THEN** it SHALL show "Awwwards Site of the Day 2024", "CSS Design Awards 2024", "FWA of the Month 2023", and "Webby Awards Honoree 2023"

### Requirement: Services section

The system SHALL render a services section with a heading and four service
cards, each with a checklist and a "Learn More" link.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What We Do"
- **AND** it SHALL show four service cards: Web Design, Mobile Apps, Brand Identity, Digital Marketing
- **AND** each card SHALL list four features (e.g. Web Design: Custom Design, Responsive Development, CMS Integration, SEO Optimization)
- **AND** each card SHALL show a "Learn More" link

### Requirement: Selected work section

The system SHALL render a selected work section with a heading, three project
cards, and a "View All Projects" button.

#### Scenario: Selected work content

- **GIVEN** the page is rendered
- **WHEN** the selected work section is displayed
- **THEN** it SHALL contain a heading "Selected Work"
- **AND** it SHALL show three project cards: Nova Fintech Rebrand, Mindful Wellness App, Urban Eats Platform
- **AND** each card SHALL show a category tag (Branding / Mobile App / Web Design), a title, a blurb, and an image
- **AND** it SHALL show a "View All Projects" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and three
client quote cards with star ratings.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Clients Say"
- **AND** it SHALL show at least three quotes, each with five stars, a quote text, and a name with role (e.g. "CEO, Nova Financial")

### Requirement: Contact section

The system SHALL render a contact section with four contact-info cards and a
project inquiry form with validation.

#### Scenario: Contact info cards

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Let's Work Together"
- **AND** it SHALL show four info cards: Email Us, Call Us, Visit Us, Follow Us

#### Scenario: Contact form fields

- **GIVEN** the contact form is displayed
- **WHEN** the user fills the form
- **THEN** it SHALL offer fields for Name, Email, Company (optional), Service Interested In (select), Budget Range (select), and Project Details (textarea)
- **AND** the selects SHALL include the options Web Design / Mobile Apps / Brand Identity / Digital Marketing / Other and $5,000 - $10,000 / $10,000 - $25,000 / $25,000 - $50,000 / $50,000+
- **AND** submitting the form SHALL show a success message

#### Scenario: Form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits with invalid or missing required fields
- **THEN** per-field errors SHALL be shown
- **AND** the form SHALL NOT submit

### Requirement: Footer

The system SHALL render a footer with link columns, social links, legal
links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Navigation, Services, Contact)
- **AND** it SHALL show social links (Twitter, Instagram, LinkedIn, Dribbble)
- **AND** it SHALL show a copyright line and legal links (Privacy Policy, Terms of Service)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Inventive app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Inventive — Creative Agency Template"

## Verification checklist

- [ ] Section order matches the reference 1:1 (Navbar → Hero → Awards strip →
      Services → Selected Work → Testimonials → Contact → Footer).
- [ ] Design tokens in `@theme`: fuchsia primary `#d946ef` (hover `#c026d3`),
      orange accent `#f97316`, yellow-400 stars; Inter via Google Fonts.
- [ ] Pill buttons (`rounded-full`) primary/secondary; focus rings visible.
- [ ] Gradient hero background + "Bold Digital" gradient text.
- [ ] Dark mode via `.dark` class toggle with all `dark:` variants.
- [ ] Placeholder images only (`picsum.photos/seed/inventive-<n>/<w>/<h>`);
      no copied assets; brand socials as inline SVG.
- [ ] Tests at 100% coverage (lines/functions/branches/statements) mirroring
      the scenarios above; per-app gate `bash scripts/verify-app.sh inventive` + `npm run spec:validate`.
- [ ] PR description: source template, preview URL, design tokens, what
      differs (rename, placeholders, paraphrased copy).
