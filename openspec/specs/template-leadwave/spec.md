# Template: Leadwave (Digital Agency)

> **SUPERSEDED** — this spec duplicates the ColorLib Ultim8 source that shipped
> as **Prime** (apps/prime, PR #456, https://prime.free.componentdock.com).
> The prep stream prepped this earlier under the name "Leadwave", then
> re-prepped the same source as "Prime" (the newer spec, which matches the
> current TEMPLATES.md line numbers). Do NOT implement this spec — delete on
> next cleanup. All three Ultim8 rows in TEMPLATES.md are `[x]` with the prime
> URL.

## Purpose

Leadwave is a single-page digital-agency / marketing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ultim8" agency website HTML template design (see TEMPLATES.md,
line 522 under **Bootstrap (216)** — duplicate rows at line 1211 under
**Business (365)** and line 2367 under **One Page (91)**, same template, ONE
app only; mark ALL THREE rows `[x]` after merge), built under a different name
("Leadwave" — a wave of leads, matching the source's SEO / social-media
marketing positioning: "Search Engine & Social Media Optimization Experts")
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
(strict). No ColorLib references in app code — provenance lives in this spec,
TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Ultim8" — free digital agency website template
  (source: https://colorlib.com/wp/template/ultim8/). Single page: a
  transparent navbar over the hero (black links on desktop, white on mobile;
  becomes a FIXED WHITE bar with shadow + solid blue CTA pill on scroll), a
  light-gradient hero (h1 "Template for" + a rotating typewriter word
  "Digital Agency / Portfolio / SEO Agency / Business" with a blue caret; a
  dashboard-screenshot carousel on the right), a blue→mint gradient banner
  ("We Provide High Quality Services"), a services section ("Our Service
  Keeps you Happy" + 3 icon cards: Market Research / Business Strategy /
  Audience Analytics), a photo parallax counter strip (Happy Clients /
  Running Projects / Project Completed / Cups of Coffee), a portfolio gallery
  (400px images with a blue hover overlay), a 4-card pricing row (Free $0 /
  Startup $19 / Premium $49 / Pro $99), a blue "Reasons for Choosing Us"
  panel + "Get a Free Quote" form, a testimonial carousel ("Our Happy
  Customer Says"), a gradient newsletter band ("Subscribe to our
  Newsletter"), a "Latest Blog" section (3 cards), and a dark navy footer
  (brand blurb / Quick Links / Recent Blog / Contact Info + copyright bar
  crediting **Component Dock** (replaces the source's Colorlib credit)).
- **Live preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/ultim8/`.
  DOM fetched (`/tmp/ultim8-preview.html`, 59,055 bytes) + stylesheet
  `css/style.css` (`/tmp/ultim8-style.css`, 75,852 bytes — the real token
  source; bootstrap colors are the DEFAULT Bootstrap 4 palette here, the
  theme's `$primary`-equivalent is the blue `#2f89fc` used throughout
  style.css) + TEMPLATES.md screenshot (`ultim8-free-template.jpg`, viewed in
  browser at 1200×946 — white/light page, "ULTIM8" logo top-left, centered
  HOME ABOUT SERVICES WORK TEAM PRICING BLOG CONTACT nav + "GET A QUOTE"
  blue-outline pill, blue hero headline "Template for Digital Agency" over a
  dashboard mockup, blue→teal gradient banner "We Provide High Quality
  Services", services heading + blue icon cards).
- **Visual design (screenshot + live DOM + CSS):** clean light SaaS/agency
  design. White page with ONE strong brand blue **`#2f89fc`** (hero h1,
  typewriter caret, nav hover/active, hero solid CTA button, pricing numbers,
  testimonial quote badge, portfolio hover overlay, "Reasons" panel
  background, gradient start) and a mint **`#55fbc2`** gradient end used for
  the banner strip + newsletter band (`linear-gradient(135deg, #2f89fc 0%,
#55fbc2 100%)`). Body/headings in Work Sans; nav links uppercase 13px.
  Footer is dark navy `#233142`. Dashboard screenshots in the hero give the
  SaaS feel. Copy is placeholder/Lorem ("A small river named Duden...",
  "Even the all-powerful Pointing...", "Dennis Green" ×3 testimonials,
  "August 12, 2018 | Admin | 3" ×3 blog cards) — paraphrase freely, vary
  repeats, keep the same kinds.
- **Slider/plugins:** hero dashboard shots + portfolio + testimonials use
  owl-carousel (non-active slides dim to opacity .4) — implement with React
  state (arrows/dots or auto-advance); the hero typewriter word is a JS
  typewrite effect — implement as a rotating word with a blue caret (setInterval
  - state; clean up timers); the counter strip uses jQuery counter-up +
    stellar parallax — implement as a static count or a small count-up effect;
    AOS scroll animations — skip or keep minimal.

## Design tokens (from `css/style.css` of the live preview)

- **Brand blue `#2f89fc`** — the theme's single accent: `.slider-text h1`
  (32px, weight 400, lh 1.2), `.typewrite > .wrap:after` caret (3px bar),
  nav `.nav-link:hover` + `.nav-item.active` (desktop), hero `.btn.btn-primary`
  solid CTA, `.price .number` (40px, weight 500) + `.price sup` (20px),
  `.testimony-wrap .user-img .quote` badge (40px circle, bottom -20px),
  `.work-entry .text` hover overlay, `.aside-stretch` panel bg (blue,
  `:after` extends full-bleed), `.ftco-section-2 .overlay` gradient start,
  `.ftco-section-parallax .parallax-img` gradient start, CTA pill border
  (`.cta > a`: `1px solid #2f89fc`, radius 30px) and its scrolled solid
  state, block-6 service icon circles.
- **Mint `#55fbc2`** — gradient end only:
  `linear-gradient(135deg, #2f89fc 0%, #55fbc2 100%)` on the banner overlay
  and the newsletter parallax band (legacy filter end `#00dc94`).
- **Whites/light greys:** `#fff` — page bg, scrolled navbar bg
  (`box-shadow: 0 0 10px 0 rgba(0,0,0,0.1)`), pricing cards, testimonial
  cards, blog card text boxes, counter numbers; `#f0f0f0` — hero overlay
  gradient start (`linear-gradient(45deg, #f0f0f0 0%, white 55%, white
100%)`); `#f8f9fa` (`bg-light`) — pricing + testimonial section
  backgrounds; `#b3b3b3` — pricing feature-list text, muted meta;
  `#ced4da` — form input borders.
- **Dark navy `#233142`** — `.ftco-footer` background (padding 6em 0);
  footer widget headings white 18px weight 400; footer text
  `rgba(255,255,255,0.8)`.
- **Ink:** `#000` — nav links desktop (≥992px), navbar brand desktop
  (≥768px); `#212529` — body text default (Bootstrap).
- **Fonts:** Google **Work Sans** — `body { font-family: "Work Sans",
-apple-system, ..., sans-serif; font-size: 1rem }`; headings inherit.
  Hero h1 32px weight 400; `.heading-section h2` 30px; `.heading-section-
white h2` 30px white; nav links 13px uppercase weight 400; counter
  numbers 34px weight 400 white. Load via Google Fonts `<link>` in
  `index.html`.
- **Buttons:** `.btn` Bootstrap 4 default (padding .375rem .75rem, radius
  4px, no transition). `.btn.btn-primary` — solid `#2f89fc`, `1px solid
#2f89fc`, white text; hero CTAs add `px-4 py-3`; "Our Portfolio" =
  `.btn.btn-primary.btn-outline-primary` (transparent bg, blue border +
  blue text). Nav CTA pill `.nav-item.cta > a` — radius 30px (4px ≤991px),
  padding .5rem 20px, transparent bg, blue text + blue border; scrolled →
  SOLID blue bg + white text.
- **Newsletter form (`.subscribe-form`):** `.form-group` pill radius 30px,
  `1px solid rgba(255,255,255,0.7)`; input transparent, white text
  `rgba(255,255,255,0.7)` placeholder, padding 0 20px; `.submit` — white
  text, `border-left: 1px solid rgba(255,255,255,0.7)`, radius 0, 16px.
- **Quote form:** Bootstrap `.form-control` (1px `#ced4da` border, radius
  4px) fields Full Name / Email / Phone / Website + Message textarea (rows 7) + submit `btn btn-primary py-3 px-5` "Get a Quote".
- **Section rhythm:** `.ftco-section` padding 7em 0 (6em mobile); hero
  `height: 750px` (700px ≥768px... 630px base, 750px md); banner +
  newsletter padding 3em 0 / 4em 0; footer 6em 0.
- **Placeholder images:** `https://picsum.photos/seed/leadwave-<n>/<w>/<h>`.
  Slots: hero dashboard mockups 1–3 (screenshots — screen for
  abstract/tech/desk subjects that read as dashboard-ish, or use plain
  device-frame mockups), counter bg (wide photo), portfolio 1–6 (400px-tall
  subjects), testimonial 1–3 (square portraits), blog 1–3 (16:10), footer
  recent-blog 2 (small squares). Icons from `lucide-react` (BarChart3,
  Target, Users, TrendingUp, Check, Menu, X, Quote, ZoomIn, ArrowRight,
  ChevronLeft/Right, MapPin, Phone, Mail).

## Requirements

### Requirement: Header — transparent navbar that turns solid on scroll

The system SHALL render a navbar positioned over the hero: transparent
background, brand + links in black on desktop (white on mobile), the active
link and hovers in brand blue, and a "Get a Quote" pill CTA (blue border,
radius 30px). On scroll the navbar SHALL become a fixed white bar with a
shadow and a solid blue pill CTA. On mobile a hamburger SHALL open a menu
with the same links on a black navbar.

#### Scenario: Header content

- **GIVEN** the page is rendered at the top
- **WHEN** the header is inspected
- **THEN** it shows the logo and the eight nav entries (Home first,
  Contact last, plus the "Get a Quote" pill), with the first entry styled
  as active in brand blue

#### Scenario: Scroll behavior

- **GIVEN** the page is scrolled down
- **WHEN** the header is inspected
- **THEN** the navbar is fixed with a white background, a subtle shadow,
  and a solid blue "Get a Quote" pill

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** the nav links appear in a menu on the black navbar and can be
  closed again

### Requirement: Hero

The system SHALL render a light-gradient hero (45deg `#f0f0f0` → white,
750px tall) with a blue headline "Template for" plus a rotating typewriter
word ("Digital Agency", "Portfolio", "SEO Agency", "Business") with a blue
caret, a sub-line, a solid blue "Get a Quote" button and an outlined "Our
Portfolio" button (both `px-4 py-3`), and a dashboard-screenshot carousel
on the right (inactive slides dimmed).

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** it is inspected
- **THEN** it shows the headline with the rotating word, the sub-line, the
  two CTA buttons, and the dashboard carousel

#### Scenario: Rotating word

- **GIVEN** the hero is rendered
- **WHEN** time advances
- **THEN** the typed word cycles through the four agency words with a blue
  caret, and the timer is cleaned up on unmount

### Requirement: Gradient banner

The system SHALL render a full-width band with a blue→mint gradient
(`135deg`, `#2f89fc` → `#55fbc2`) and a white heading "We Provide High
Quality Services".

#### Scenario: Banner content

- **GIVEN** the page is rendered
- **WHEN** the banner is inspected
- **THEN** it shows the white heading on the blue-to-mint gradient

### Requirement: Services

The system SHALL render a centered services section — heading "Our Service
Keeps you Happy" with subheading "Search Engine & Social Media Optimization
Experts" — and three icon cards (Market Research, Business Strategy,
Audience Analytics), each with a blue icon, a title, and a blurb.

#### Scenario: Service cards

- **GIVEN** the Services section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with an icon, the service name, and
  a short description

### Requirement: Counter strip

The system SHALL render a photo-background parallax band with four white
statistics: Happy Clients, Running Projects, Project Completed, Cups of
Coffee.

#### Scenario: Counter content

- **GIVEN** the counter strip is rendered
- **WHEN** it is inspected
- **THEN** it shows the four labelled statistics on the photo background

### Requirement: Portfolio

The system SHALL render a portfolio gallery titled "Our Portfolio" with
work items (Work 01, Work 02, Work 03, …), each a 400px-tall image that
reveals a blue overlay with the item title on hover.

#### Scenario: Portfolio items

- **GIVEN** the portfolio is rendered
- **WHEN** the items are inspected
- **THEN** at least three work items are shown, each with an image and a
  title

#### Scenario: Hover overlay

- **GIVEN** a portfolio item is rendered
- **WHEN** it is hovered
- **THEN** a blue overlay with the item title appears

### Requirement: Pricing

The system SHALL render a pricing section on a light background — heading
"Our Best Pricing", subheading "Pricing Plans" — with four white cards:
Free ($0, "100% free. Forever"), Startup ($19), Premium ($49), Pro ($99),
each with a blue price, a "Get Started" button, an "Enjoy All The Features"
line, and a feature list (Bandwidth / Storage / Overages / All features).

#### Scenario: Pricing cards

- **GIVEN** the Pricing section is rendered
- **WHEN** the cards are inspected
- **THEN** four cards are shown with the plan name, blue price, tagline,
  "Get Started" button, and the feature list (Free keeps "$1.00 / GB
  Overages", Startup "$2.00 / GB", Premium/PRO "$5.00 / GB")

### Requirement: Reasons + quote form

The system SHALL render a two-column section: on the left a BRAND-BLUE
panel with the white heading "Reasons for Choosing Us", a paragraph, and
three checklist items with check icons; on the right a "Get a Free Quote"
form (Full Name, Email, Phone, Website, Message, submit "Get a Quote").

#### Scenario: Reasons panel

- **GIVEN** the Reasons section is rendered
- **WHEN** the left column is inspected
- **THEN** it shows the white heading, a paragraph, and three checklist
  items with check icons on the blue background

#### Scenario: Quote form submit

- **GIVEN** the quote form is rendered
- **WHEN** the user fills the fields and submits
- **THEN** the submission is handled (validation per-field, no silent
  failure) and the form confirms or shows an error

### Requirement: Testimonials

The system SHALL render a testimonial carousel on a light background —
heading "Testimony", subheading "Our Happy Customer Says" — with white
cards: a centered circular photo with a blue quote badge, a quote, and an
author name + role, with prev/next or dots navigation.

#### Scenario: Testimonial cards

- **GIVEN** the Testimonials section is rendered
- **WHEN** the carousel is inspected
- **THEN** it shows white cards with photo, quote, author, and role, and
  provides navigation

### Requirement: Newsletter

The system SHALL render a blue→mint gradient band with the heading
"Subscribe to our Newsletter", a sub-line, and a pill-shaped email form
(white border, transparent input, "Subscribe" button) that confirms on
submit.

#### Scenario: Newsletter content

- **GIVEN** the newsletter band is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading, sub-line, and the pill email form on the
  gradient

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits an email
- **THEN** the form confirms the subscription (success message replaces
  the input)

### Requirement: Latest Blog

The system SHALL render a blog section — heading "Latest Blog", subheading
"Read our blog" — with three post cards, each a photo and a white content
box with a date/author/comments meta line, a title, and an excerpt.

#### Scenario: Blog cards

- **GIVEN** the Latest Blog section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with a photo, meta ("August 12,
  2018 | Admin | 3 Comments"-style), title, and excerpt

### Requirement: Footer

The system SHALL render a dark navy `#233142` footer with a brand blurb,
a Quick Links widget (About, Features, Projects, Blog, Contact), a Recent
Blog widget (2 entries with meta), a Contact Info widget (address, phone,
email), and a copyright bar crediting Component Dock (no ColorLib credit).

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the four widgets and the copyright bar linking to
  https://www.componentdock.com/

### Requirement: Composition

All sections SHALL appear in the source order on one page: navbar → hero →
gradient banner → services → counter strip → portfolio → pricing →
reasons/quote form → testimonials → newsletter → blog → footer.

#### Scenario: Section order

- **GIVEN** the full page is rendered
- **WHEN** the sections are enumerated top to bottom
- **THEN** the order is navbar, hero, banner, services, counters,
  portfolio, pricing, reasons, testimonials, newsletter, blog, footer

## Verification checklist

- [ ] Spec validated: `npm run spec:validate` passes for
      `template-leadwave`
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #2f89fc`,
      `--color-mint: #55fbc2`, `--color-navy: #233142`, `--color-soft:
  #f8f9fa`, `--color-hero-start: #f0f0f0`, `--color-muted: #b3b3b3`,
      `--color-ink: #000000`; Google Fonts `<link>` in `index.html`: Work
      Sans (400/500/700)
- [ ] Navbar: transparent over hero (black links ≥992px, white mobile,
      brand black ≥768px); hover/active brand blue; "Get a Quote" pill
      (radius 30px, blue border, blue text); scrolled → fixed white +
      shadow + solid blue pill; mobile black navbar + hamburger menu
      (Home/About/Services/Work/Team/Pricing/Blog/Contact)
- [ ] Hero: 750px light gradient (45deg `#f0f0f0` → white); h1 32px
      weight 400 brand blue "Template for" + rotating word (4 words, blue
      3px caret, interval cleaned up on unmount); sub-line; `px-4 py-3`
      buttons — solid blue "Get a Quote" + outlined "Our Portfolio";
      right: dashboard mockup carousel (3 slides, inactive dimmed)
- [ ] Gradient banner: `linear-gradient(135deg, #2f89fc 0%, #55fbc2
  100%)`, white 20px "We Provide High Quality Services"
- [ ] Services: centered h2 30px + subheading; 3 icon cards (blue icon
      circle, h3, blurb): Market Research / Business Strategy / Audience
      Analytics
- [ ] Counter strip: photo bg (parallax optional), 4 white stats (34px
      weight 400): Happy Clients / Running Projects / Project Completed /
      Cups of Coffee
- [ ] Portfolio: "Our Portfolio" + ≥3 work items (400px image, hover →
      blue overlay fade-in with title + zoom icon)
- [ ] Pricing (`bg-light`): "Our Best Pricing" / "Pricing Plans"; 4 white
      cards (shadow `0 2px 5px rgba(0,0,0,0.03)`, padding 30px): Free $0 /
      Startup $19 / Premium $49 / Pro $99 — blue price (sup 20px + number
      40px w500), tagline, "Get Started" button, "Enjoy All The Features",
      features list (Bandwidth/Storage/Overages/All features)
- [ ] Reasons + quote: left blue panel (`#2f89fc`, white h2 30px, 3 check
      items); right form (Full Name/Email/Phone/Website + Message +
      "Get a Quote" `py-3 px-5` blue submit, per-field validation)
- [ ] Testimonials (`bg-light`): "Testimony" / "Our Happy Customer Says";
      carousel of white cards — centered 100px circular photo + 40px blue
      quote badge, quote, author + role; arrows/dots
- [ ] Newsletter: gradient band; h2 + sub-line + pill form (radius 30px,
      white border, transparent input, white "Subscribe" with left
      border); success state on submit
- [ ] Blog: "Latest Blog" / "Read our blog"; 3 cards (photo + white box):
      meta "August 12, 2018 | Admin | 3 Comments"-style, title, excerpt —
      vary the repeated copy
- [ ] Footer: navy `#233142`; brand blurb / Quick Links 5 / Recent Blog 2
      / Contact Info (203 Fake St. Mountain View, San Francisco,
      California, USA · +2 392 3929 210 · info@yourdomain.com); copyright
      bar with Component Dock credit + no ColorLib credit
- [ ] Placeholder images via
      `https://picsum.photos/seed/leadwave-<n>/<w>/<h>` (dashboard 1–3,
      counter bg, portfolio 1–6, testimonial 1–3, blog 1–3, recent-blog
      1–2) — subject-screen the seeds; icons from `lucide-react`
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/ultim8/`), design tokens, diffs
      (name, placeholder images, React carousel/typewriter instead of
      owl/typewrite.js, Component Dock footer credit); after merge mark
      ALL THREE TEMPLATES.md Ultim8 rows `[x]` (lines 522, 1211, 2367 —
      Bootstrap 216 / Business 365 / One Page 91)
