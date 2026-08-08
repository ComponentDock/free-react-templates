# Template: Sooth (Astro Template / Luxury Spa)

## Purpose

Sooth is a single-page luxury spa & wellness landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Serenite" website template design
(source: https://colorlib.com/wp/template/serenite/), built under a
DIFFERENT name (Sooth — the feeling of calm a great spa leaves you with)
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-serenite/` (plus `docs/templates/serenite/`)
> using the FORBIDDEN ColorLib source name; both were deleted and replaced
> by this fresh prep (new name Sooth), matching the Cloudnest→Nimbus /
> Neuralflow→Sentient / Pipelineiq→Dealflow / Saasify→Zenith precedent.

## Design reference (replication findings)

- **Original:** ColorLib "Serenite" — luxury spa / beauty salon / wellness
  center landing template (category "Astro", TEMPLATES.md item "Serenite").
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/serenite/`) returns 404; the
  ColorLib preview portal hosts the demo at
  `https://serenite-colorlib.pages.dev/` (HTTP 200, ~86 KB HTML +
  `/_astro/Base.C_LwpZaO.css` ~63 KB parsed for tokens). The TEMPLATES.md
  screenshot (`serenite-template-1771943746919.jpg`) was also fetched
  (HTTP 200) and matches the live demo. Same Cloudflare-Pages hosting
  pattern as Logitrans→Freightly / Neuralflow→Sentient.
- **Visual design (screenshot + live render):** soft blush/pink hero
  (pale rose gradient), rose-pink brand color, elegant serif (Playfair
  Display) headlines with a gold hairline divider above the H1, pill
  buttons, dark charcoal text on white, deep maroon/red gradient CTA band
  and dark gray footer — minimalist, airy, feminine luxury aesthetic.
- **Section order (1:1, from live demo DOM):**
  1. Header (sticky, `bg-white/80 backdrop-blur`, border-b gray-200):
     logo "Serenite Spa" (icon + wordmark), links About, Services,
     Specialists, Gallery, Packages, Blog, Contact; dark-mode toggle;
     "Book Now" pill CTA (rose); mobile hamburger menu.
  2. Hero (centered, `bg-gradient-to-b from-primary-50 via-white
to-white`): decorative blur orbs (rose `bg-primary-200/40` + gold
     `bg-accent-200/20`, floating animation), thin gold hairline divider
     (`h-px w-16 bg-accent-400`), H1 "Indulge in Pure _<rotating italic
     accent phrase>_" (e.g. "Calm & Balance" — rotates), subtext "The
     art of relaxation at our premier spa and beauty salon…", CTAs "Book
     Your Treatment" (primary rose pill) + "View Services" (outline pill)
     - "Watch Demo" (play icon + text, opens YouTube modal); stats row
       (grid-cols-3, border-t): 15+ Years of Excellence, 50+ Luxury
       Treatments, 5-Star Client Rated.
  3. Stats band (`border-y border-gray-200 bg-gray-50 py-16 lg:py-20`):
     animated count-up counters (grid-cols-2 sm:grid-cols-4): 20K+
     Treatments Given, 15+ Specialists, 10+ Years Experience, 4.9 Client
     Rating.
  4. Services (`bg-gray-50 py-20 lg:py-28`, id=services): eyebrow "OUR
     SERVICES", H2 "Treatments & Services"; 6 cards (mt-16 grid gap-8
     sm:grid-cols-2 lg:grid-cols-3), each with icon, title, blurb, "from
     $X" price line and "Learn More" link: Facial Treatments from $85,
     Massage Therapy from $95, Body Treatments from $120, Hair Salon from
     $65, Nail Care from $45, Wellness from $150.
  5. Specialists (`bg-white py-20 lg:py-28`, id=specialists): eyebrow
     "OUR TEAM", H2 "Our Expert Team"; 4 cards (mt-16 grid gap-8
     sm:grid-cols-2 lg:grid-cols-4): portrait image (object-cover,
     group-hover scale), name, role, specialties line, "N Years
     Experience" — Isabella Laurent (Senior Aesthetician), Marcus Chen
     (Lead Massage Therapist), Sofia Ramirez (Hair Stylist & Colorist),
     Amara Johnson (Wellness Director).
  6. Gallery (`bg-gray-50 py-20 lg:py-28`, id=gallery): eyebrow
     "GALLERY", H2 "A Glimpse of Serenite"; 6 photos in a masonry-ish
     grid (mix of aspect-square / aspect-[4/3] / aspect-[3/4], sm
     grid-cols-3), hover zoom (group-hover:scale-110) + clickable
     (lightbox); captions: Spa Treatment Room, Relaxation Lounge, Luxury
     Skincare Products, Massage Therapy Suite, Spa Interior Ambiance,
     Facial Treatment Session.
  7. Results (`bg-white py-20 lg:py-28`, id=results): eyebrow
     "Transformations", H2 "Visible Results"; 2 before/after comparison
     sliders (drag handle): "Facial Treatment" and "Skin Rejuvenation".
  8. Packages (`bg-white py-20 lg:py-28`, id=packages): H2 "Signature
     Packages"; 3 pricing cards (mt-12 grid gap-8 lg:grid-cols-3,
     `rounded-2xl p-8 shadow-soft hover:shadow-soft-lg bg-gray-50`):
     Refresher $149 / Indulgence $249 (with "Most Popular" badge) /
     Ultimate Retreat $449; each card: name, tagline, price + "One-time
     package price", feature list with rose check icons (space-y-4), and
     a "Book Package" CTA.
  9. Testimonials (`bg-gray-50 py-20 lg:py-28`, id=testimonials): eyebrow
     "TESTIMONIALS", H2 "What Our Clients Say"; carousel with prev/next
     round arrow buttons + dot indicators (4 dots), 6 slides; each slide:
     5 gold stars (accent-400), quote, name, role (e.g. Victoria Ellis —
     Regular Client, Jonathan P. — Anniversary Package, Camille, Michael
     & Sarah — Anniversary Package).
  10. FAQ (`bg-white py-20 lg:py-28`, id=faq): H2 "Frequently Asked
      Questions"; 5 accordion items (data-faq-toggle): "How far in
      advance should I book?", "What should I do before my appointment?",
      "Do you accommodate health conditions?", "Do you sell gift cards?",
      "Can I book for a group?".
  11. Contact CTA (`bg-gradient-to-br from-primary-600 to-primary-800
py-20 lg:py-28`, id=contact): H2 (white) "Give the Gift of
      Relaxation", subtext about gift cards, buttons "Purchase Gift Card"
      (white pill) + "Book a Visit" (border-2 border-white/30 outline).
  12. Footer (`bg-gray-900 pt-16 lg:pt-24 text-gray-300`): brand +
      blurb + social icons (Instagram, Facebook, Pinterest); columns
      SERVICES (Facials, Massage, Body Treatments, Hair Salon), VISIT US
      (Mon-Fri: 9am-8pm, Sat-Sun: 10am-6pm, Beverly Hills, CA 90210, Free
      Parking Available), CONNECT (Instagram, Facebook, Pinterest,
      Newsletter), STAY UPDATED newsletter form (rounded-full email input
      - "Subscribe" button); bottom bar: Privacy Policy, Terms of
        Service, Style Guide.
  - Extras: skip-to-content link, cookie-consent dialog (Decline / Accept
    All), fixed back-to-top round button (`bottom-6 right-6`), scroll-
    reveal `fade-in-up` animations, `data-parallax` orbs, dark-mode
    toggle persisted to localStorage.
- **Design tokens extracted from `Base.C_LwpZaO.css` + DOM:**
  - Brand color: **#e11d48** (rose-600; scale #fff1f2, #ffe4e6, #fecdd3,
    #fb7185, #f43f5e, #be123c, ~#9f1239) — primary buttons, links,
    headline accent, feature icons, check marks.
  - Accent (gold): #fde68a (200), **#fbbf24** (400), #d97706 (600) —
    hairline divider, star ratings.
  - Neutrals: #fff, #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af,
    #6b7280, #4b5563, #374151, #1f2937, #111827; light body = white bg +
    #111827 text; dark = #030712/#111827 bg + #f3f4f6/#d1d5db text.
  - Fonts: **"Playfair Display"** (headings, 400–800) + **"Lora"**
    (body, 400–700) via Google Fonts; `.font-heading{font-family:"Playfair
Display",Georgia,serif}`.
  - Shapes: buttons **rounded-full** (pill); cards rounded-2xl (1rem) +
    `shadow-soft` (0 4px 16px -4px rgb(0 0 0 / 0.1)) + hover:shadow-soft-lg;
    hero CTAs px-8 py-3.5/4 text-base; nav CTA px-5 py-2.5 text-sm;
    round icon buttons (carousel arrows, back-to-top h-12 w-12).
  - Section eyebrow: uppercase, text-sm, tracking-wider, text-primary-600.
  - Headings: text-3xl sm:text-4xl, font-bold, tracking-tight,
    text-gray-900, font-heading (serif).
  - Section rhythm: py-20 lg:py-28; alternating white / gray-50;
    header border-b gray-200; stats band border-y.
  - Buttons: primary bg #e11d48 + white text + hover:bg-primary-700;
    secondary = outline (border gray-300, white bg); on-gradient ghost =
    border-2 border-white/30 text-white hover:border-white.
  - Dark mode: class-based `.dark` on the document root (`.dark` → bg
    gray-950, bands gray-900, text white/gray-300), toggle in navbar,
    persisted to localStorage ("theme" key).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sooth-<n>/<w>/<h>`); icons → lucide-react; fonts
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome; multi-page demo links (About/Services/Pricing/Blog/Contact are
  separate pages in the demo) collapse to section anchors or
  presentational links in the single-page recreation; video modal → a
  simple YouTube iframe modal; before/after slider → a small
  pointer-driven comparison component or a static two-image pair with
  labels if the slider is too heavy (keep it dependency-free).

Sooth lives in `apps/sooth` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Sooth",
anchor links to the page's sections, a "Book Now" CTA, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Sooth page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sooth" and links to
  Services, Specialists, Gallery, Packages, and Contact
- **AND** the navbar SHALL show a "Book Now" button and a dark-mode
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

The system SHALL render a centered hero with a gold divider, a headline,
CTAs, a "Watch Demo" video modal trigger, and a stats row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading starting with "Indulge in
  Pure" and a rose accent phrase
- **AND** it SHALL show buttons "Book Your Treatment" and "View Services"
- **AND** it SHALL show a "Watch Demo" control that opens a video modal
- **AND** it SHALL show stats including 15+ Years of Excellence and 50+
  Luxury Treatments

### Requirement: Stats band

The system SHALL render an animated stats band with four counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show counters for 20K+ Treatments Given, 15+
  Specialists, 10+ Years Experience, and 4.9 Client Rating

### Requirement: Services section

The system SHALL render a services section with six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Treatments & Services"
- **AND** it SHALL show cards for Facial Treatments, Massage Therapy, and
  Body Treatments
- **AND** each card SHALL show an icon, a title, a blurb, a "from $X"
  price line, and a "Learn More" link

### Requirement: Specialists section

The system SHALL render a specialists section with four team member cards.

#### Scenario: Specialists content

- **GIVEN** the page is rendered
- **WHEN** the specialists section is displayed
- **THEN** it SHALL contain a heading "Our Expert Team"
- **AND** it SHALL show cards for Isabella Laurent, Marcus Chen, Sofia
  Ramirez, and Amara Johnson
- **AND** each card SHALL show a portrait image, name, role, specialties,
  and years of experience

### Requirement: Gallery section

The system SHALL render a photo gallery with six images.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "A Glimpse of Serenite" — reworded
  for Sooth (e.g. "A Glimpse of Sooth")
- **AND** it SHALL show six captioned images with a hover zoom effect

### Requirement: Packages section

The system SHALL render a pricing section with three packages.

#### Scenario: Packages content

- **GIVEN** the page is rendered
- **WHEN** the packages section is displayed
- **THEN** it SHALL contain a heading "Signature Packages"
- **AND** it SHALL show Refresher ($149), Indulgence ($249, with a "Most
  Popular" badge), and Ultimate Retreat ($449) cards
- **AND** each card SHALL show a feature list and a "Book Package" button

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with at least four slides.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show at least four testimonials, each with a 5-star
  rating, a quote, a name, and a role

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user presses the next or previous arrow
- **THEN** the visible testimonial SHALL change accordingly

### Requirement: FAQ section

The system SHALL render an FAQ section with five accordion items.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show accordion items including booking advance notice
  and gift card questions

#### Scenario: Accordion toggle

- **GIVEN** an FAQ item is displayed
- **WHEN** the user activates the item's toggle button
- **THEN** the answer SHALL expand and the button SHALL reflect the
  expanded state via `aria-expanded`

### Requirement: Contact CTA

The system SHALL render a closing gradient CTA band with a headline and
two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Give the Gift of Relaxation" (or
  the Sooth equivalent)
- **AND** it SHALL show "Purchase Gift Card" and "Book a Visit" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form, and
a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show columns SERVICES, VISIT US, and CONNECT
- **AND** it SHALL show a "Stay Updated" newsletter form with an email
  input and a "Subscribe" button
- **AND** it SHALL show a bottom bar with Privacy Policy and Terms of
  Service links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Sooth app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Sooth — Spa Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh sooth` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (header, hero, stats, services,
      specialists, gallery, results, packages, testimonials, faq, cta,
      footer)
- [ ] Design tokens in `@theme`: brand rose `#e11d48` (+ scale #fff1f2,
      #ffe4e6, #fecdd3, #fb7185, #f43f5e, #be123c), accent gold #fbbf24,
      gray neutrals
- [ ] Fonts: Playfair Display (headings) + Lora (body) via Google Fonts
- [ ] Buttons: rounded-full pills, rose primary with white text, outlined
      secondary; cards rounded-2xl with soft shadows; section eyebrows
      uppercase tracking-wider rose
- [ ] Hero: centered, soft blush gradient (from-primary-50), gold hairline
      divider, rose accent phrase; CTA band gradient from-primary-600
      to-primary-800; footer dark (gray-900)
- [ ] Dark mode: class-based `.dark` (bg gray-950, text white), toggle in
      navbar, persisted to localStorage
- [ ] Interactive behaviors: mobile menu (aria-expanded), FAQ accordion
      (aria-expanded), testimonial carousel arrows, count-up stats, video
      modal, cookie-consent dialog, back-to-top button — no extra
      dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/sooth-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
