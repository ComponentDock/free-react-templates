# Template: Shutter (Photographer Portfolio Template)

## Purpose

Shutter is a single-page photographer portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Elena Voss" website template design (see TEMPLATES.md — THREE
copies: lines 139, 2445, 2908), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Elena Voss" — fine-art/documentary photographer
  portfolio template (source: https://colorlib.com/wp/template/elena-voss/).
- **Preview URL:** `https://preview.colorlib.com/theme/elena-voss/` returns
  HTTP 404 (confirmed 2026-08-08). The live rendered demo is hosted on
  Cloudflare Pages: `https://elenavoss-colorlib.pages.dev/` (HTTP 200, ~69 KB
  HTML; Astro stylesheet `/_astro/Base.s_bAeOkz.css` ~64 KB parsed for
  tokens). TEMPLATES.md screenshot (`elenavoss-template-1771943801609.jpg`,
  2400×1892) viewed in the browser as the visual reference; the pages.dev demo
  matches the screenshot 1:1.
- **Visual design (from screenshot + live demo):** elegant, high-end
  photographer portfolio. Full-screen mountain landscape photo hero with a
  dark gradient overlay, small serif wordmark, large serif headline, and
  uppercase ghost button. Clean white/gray-50 body sections with generous
  whitespace. Warm stone (taupe) neutrals as the primary scale with a gold
  amber accent used sparingly (CTAs, quote icons, hover states). Serif display
  type (Fraunces) for headings + sans (DM Sans) for body. Uppercase,
  wide-tracked labels/links throughout. Rounded-full buttons.
- **Section order (1:1):**
  1. Navbar: serif wordmark left; links Portfolio (#portfolio), About
     (#about), Services (#services), Testimonials (#testimonials), Pricing
     (→#), Blog (→#), Gallery (→#portfolio), Contact (#contact); primary
     "Book a Session" pill (→ /#contact); dark-mode toggle; mobile hamburger
     with the same links.
  2. Hero (`section.relative.min-h-screen.overflow-hidden`): full-bleed
     background image (Unsplash mountain landscape in the demo) with dark
     gradient overlay for legibility; H1 "Capturing Moments That Last
     Forever" (serif, white); sub "Fine art and documentary photography that
     tells your story with authenticity and grace."; ghost CTA "View
     Portfolio" (`rounded-full border border-white/60 uppercase
tracking-widest hover:bg-white hover:text-primary-900`).
  3. Stats band (`section.border-y.border-gray-200.bg-gray-50.py-16
lg:py-20`): 4 animated counters — 500+ Photo Shoots, 10+ Years
     Experience, 50+ Awards Won, 99% Client Satisfaction (spans with
     `data-counter="500+"` etc. animate 0 → value on scroll into view).
  4. Portfolio (`section#portfolio.bg-white.py-20.lg:py-28`): eyebrow-less
     H2 "Selected Work" + sub "A curated collection of moments…"; filter tab
     buttons All / Weddings / Portraits / Nature / Editorial (active tab =
     accent hover style `hover:border-accent-500 hover:bg-accent-500
hover:text-white`); masonry grid (`masonry-grid`, alternating
     `masonry-item-tall` / standard aspect items) of 8 cards — Golden Hour
     Ceremony (Weddings), Studio Portrait (Portraits), Mountain Dawn
     (Nature), Fashion Editorial (Editorial), Coastal Vows (Weddings),
     Environmental Portrait (Portraits), Autumn Forest (Nature), Brand
     Campaign (Editorial). Card: image `object-cover` with
     `group-hover:scale-105` zoom + dark overlay revealing a category tag +
     title; click opens a lightbox (`data-lightbox`).
  5. About (`section#about.bg-gray-50.py-20.lg:py-28`): H2 "About Elena";
     two paragraphs ("I am a passionate visual storyteller with over 12
     years of experience capturing the raw beauty of life's most…", "My work
     has been published in Vogue, National Geographic, and Harper's Bazaar.
     Based in New York, I travel wor…"); "Awards & Recognition" list —
     International Photography Award - Gold (2024), Fearless Photographer of
     the Year (2023), National Geographic Featured Photographer, + 1 more.
  6. Services (`section#services.bg-white.py-20.lg:py-28`): H2 "Services &
     Packages" + sub "Thoughtfully designed packages to capture your story.
     Every session includes professional editing and a curated online
     gallery."; 3 cards (grid lg:grid-cols-3, `rounded-2xl border
border-gray-200 bg-white`): **Portrait Session** — "Intimate portraits
     that reveal your authentic self"; bullets: 1-hour photography session,
     Up to 2 locations, 30 professionally edited photos, Private online
     gallery; "Inquire More" link. **Wedding Coverage** — "Full day coverage
     (up to 10 hours)"; bullets: 2 photographers, 500+ edited photographs,
     Premium wedding album, Complimentary engagement session. **Commercial** —
     "Brand photography"; bullets: Product shots and styling, Editorial and
     lifestyle, Full commercial licensing included. Each card has a serif
     price line.
  7. Results (`section#results.bg-white.py-20.lg:py-28`): eyebrow pill
     "Editing" (`rounded-full bg-primary-100 text-primary-700`), H2 "The
     Edit Makes the Shot", sub, and 2 before/after comparison sliders
     (`data-before-after` containers, aspect-[4/3], with a draggable
     `cursor-ew-resize` handle at 50% controlling a `width: 50%` clip
     layer) — captions "Portrait Retouching" + second example.
  8. Testimonials (`section#testimonials.bg-gray-50.py-20.lg:py-28`): H2
     "Kind Words" + sub "What my clients say about their experience working
     together."; carousel of 6 quotes — Sarah & James Mitchell (Wedding,
     Tuscany), Olivia Chen (Creative Director, Lumiere Beauty), Marcus
     Rivera (Portrait Session, New York), The Hendersons (Family Portrait
     Session), Natalie Cruz (E-commerce Brand Owner), Mark & Julie
     (Engagement Session). Card: quote icon (`text-accent-400`), serif
     italic blockquote, avatar initials circle (`rounded-full bg-primary-200
font-serif text-primary-800`), name + role. Round prev/next buttons
     (aria-labels "Previous testimonial" / "Next testimonial") + dot
     pagination.
  9. FAQ (`section#faq.bg-white.py-20.lg:py-28`): H2 "Frequently Asked
     Questions"; 5 accordion items — "How do I book a session?" ("Booking is
     easy! Fill out the contact form or email me directly…"), "How long
     until I receive my photos?" ("Turnaround time is typically 2-3 weeks…
     Rush delivery within 5 business days…"), "What is your editing style?"
     ("clean, natural, and timeless…"), "Do you travel for shoots?" ("Yes! I
     love traveling for destination shoots…"), "Can I order prints?"
     ("Absolutely! I partner with professional fine art print labs…"). Plus
     icon in a round gray chip rotates 45° when open; answer expands via
     max-height transition; `aria-expanded` on the toggle.
  10. Contact (`section#contact.bg-white.py-20.lg:py-28`): H2 "Let's Create
      Together" + sub "Ready to tell your story? Reach out and let us discuss
      how we can create something beautiful together."; form with Name
      (text), Email (email), Session Type (select), Preferred Date (date),
      Message (textarea), submit "Send Inquiry"; contact side panel: "Call
      Now" + "Book a Session" buttons and contact details.
  11. Footer (dark `bg-primary-900` or `bg-gray-950`): serif brand + blurb
      "Fine art and documentary photographer capturing authentic moments and
      timeless stories.", 3 social icon links (inline SVGs), legal links
      (Privacy Policy, Terms of Service, Style Guide), "© 2026 Elena Voss.
      All rights reserved.".
  12. Extras: cookie-consent dialog ("We use cookies to enhance your
      experience…" Decline / Accept All), back-to-top floating button,
      dark-mode toggle.
- **Design tokens extracted from the demo CSS (`Base.s_bAeOkz.css`, Tailwind
  v4 utilities + custom `--color-primary-*` / `--color-accent-*` scales):**
  - Brand primary (warm stone/taupe scale — use in `@theme` as
    `--color-primary-*`): **primary-100 #f5f5f4**, **primary-200 #e7e5e4**
    (avatar initials bg, light pills), **primary-300 #d6d3d1**, **primary-400
    #a8a29e**, **primary-500 #78716c**, **primary-600 #57534e** (primary
    button hover-state dark text), **primary-700 #44403c**, **primary-800
    #292524**, **primary-900 #1c1917** (footer/dark surfaces, outline button
    fill-on-hover).
  - Accent (gold/amber): **accent-100 #fef3c7** (pill bgs), **accent-400
    #fbbf24** (quote icons), **accent-500 #f59e0b** (primary CTA background),
    **accent-600 #d97706** (CTA hover, link hover).
  - Grays: **gray-50 #f9fafb** (alt section bg), **gray-100 #f3f4f6** (icon
    chips), **gray-200 #e5e7eb** (section/card borders), **gray-300 #d1d5db**
    (filter tab borders), **gray-400 #9ca3af**, **gray-500 #6b7280**,
    **gray-600 #4b5563** (muted text), **gray-700 #374151**, **gray-800
    #1f2937** (dark card bg), **gray-900 #111827** (dark section bg),
    **gray-950 #030712** (darkest).
  - Font: **"Fraunces"** (display serif, Google Fonts weights
    400/500/600/700/800 — headings, wordmark, quote text, prices, avatar
    initials) + **"DM Sans"** (body, weights 400/500/600/700 — nav, body,
    buttons, labels). Load both via one Google Fonts `<link>` in
    `index.html` (`family=Fraunces:wght@400;500;600;700;800&family=DM+Sans:
wght@400;500;600;700`).
  - Buttons: **rounded-full** everywhere; primary = `bg-accent-500 text-white
hover:bg-accent-600`, text `text-sm font-medium uppercase tracking-wider`;
    outline = `border border-primary-900 text-primary-900 hover:bg-primary-900
hover:text-white` (dark: `border-white dark:text-white
dark:hover:bg-white dark:hover:text-primary-900`); hero ghost =
    `border border-white/60 text-white uppercase tracking-widest
hover:bg-white hover:text-primary-900`. Nav CTA "Book a Session" =
    outline pill `rounded-full border border-primary-900 px-5 py-2.5`.
  - Text links: `uppercase tracking-widest text-gray-900 hover:text-accent-600`
    ("Inquire More", "View All" style links).
  - Section headings: `font-serif text-3xl font-bold tracking-tight sm:text-4xl`
    (dark: `dark:text-white`); eyebrow pills `rounded-full bg-primary-100 px-3
py-1 text-sm font-medium text-primary-700` (dark: `bg-primary-900/50
text-primary-300`).
  - Section backgrounds: hero = image + dark gradient overlay; stats band =
    `bg-gray-50 border-y border-gray-200`; alternate `bg-white` /
    `bg-gray-50` for body sections (dark: `bg-gray-950` / `bg-gray-900`);
    footer dark (`bg-primary-900` or gray-950).
  - Cards: services/testimonial cards `rounded-2xl border border-gray-200
bg-white p-8` (dark: `border-gray-800 bg-gray-900`); portfolio cards
    `rounded-lg overflow-hidden` with `group-hover:scale-105` zoom + black
    overlay fade-in; avatar initials `flex h-12 w-12 items-center justify-center
rounded-full bg-primary-200 font-serif text-lg font-semibold text-primary-800`
    (dark: `bg-primary-800 text-primary-200`).
- **Recreation decisions:** the demo is a single-page Astro site; nav links
  Pricing/Blog/Gallery have no matching sections on the home page → keep them
  as decorative anchors (`#` or mapped: Gallery → `#portfolio`) so the navbar
  structure matches 1:1. Animated stat counters via an in-view hook
  (IntersectionObserver) animating 0 → target with the `+`/`%` suffix.
  Portfolio filters = state-driven tab filtering with category attributes.
  Lightbox = simple state-driven modal overlay (or skip with note if scope
  tightens). Before/after slider = pointer-driven clip-width div (two stacked
  images, handle at 50%, `cursor-ew-resize`). Testimonial carousel =
  state-driven slider with prev/next + dots. FAQ accordion = state-driven
  expand/collapse with rotating plus icon and `aria-expanded`. Cookie dialog =
  dismissible banner (Decline / Accept All). Logo → serif wordmark "Shutter"
  with a lucide Camera icon. Photos → seeded picsum
  (`picsum.photos/seed/shutter-<n>/<w>/<h>`: hero 1920×1080, portfolio
  600×900 tall / 600×600 standard, before/after pairs 800×600 each, about
  portrait 600×700); avatars → initial-letter circles. Icons → lucide-react
  (Camera, Menu, X, Moon, Sun, Plus, ArrowUp, Phone, Mail, MapPin,
  ChevronLeft, ChevronRight, Quote, Instagram? — brand social icons
  X/Facebook/Instagram/Linkedin are NOT in lucide-react → inline SVG
  paths like existing apps). No assets copied; brand stone #1c1917 +
  accent gold #f59e0b in `@theme`.

Shutter lives in `apps/shutter` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site wordmark,
anchor links, a primary CTA and a dark-mode toggle.

#### Scenario: Navbar content

- **GIVEN** the Shutter page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Shutter" on the left
- **AND** SHALL show links for Portfolio, About, Services, Testimonials,
  Pricing, Blog, Gallery and Contact
- **AND** SHALL show a "Book a Session" button on the right
- **AND** SHALL show a dark-mode toggle button

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible menu SHALL show the same nav links
- **AND** the toggle SHALL expose the menu state via aria-expanded

### Requirement: Hero section

The system SHALL render a full-screen hero with a background image, a
serif headline, a sub-paragraph and a ghost CTA.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the headline "Capturing Moments That Last Forever"
- **AND** SHALL show the sub-paragraph about fine art and documentary
  photography
- **AND** SHALL show a "View Portfolio" button linking to the portfolio
  section
- **AND** the background image SHALL have a dark overlay for legibility

### Requirement: Stats band

The system SHALL render a stats band with four animated counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show four statistics: 500+ Photo Shoots, 10+ Years
  Experience, 50+ Awards Won and 99% Client Satisfaction
- **AND** each value SHALL animate from zero when scrolled into view

### Requirement: Portfolio section

The system SHALL render a "Selected Work" portfolio with filter tabs, a
masonry grid of eight photo cards and a lightbox.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show the heading "Selected Work"
- **AND** SHALL show filter tabs All, Weddings, Portraits, Nature and
  Editorial
- **AND** SHALL show eight cards: Golden Hour Ceremony, Studio Portrait,
  Mountain Dawn, Fashion Editorial, Coastal Vows, Environmental Portrait,
  Autumn Forest and Brand Campaign

#### Scenario: Filtering the grid

- **GIVEN** the portfolio grid is displayed
- **WHEN** the user activates a category tab
- **THEN** only cards of that category SHALL be visible
- **AND** the active tab SHALL be visually highlighted

#### Scenario: Lightbox

- **GIVEN** a portfolio card is displayed
- **WHEN** the user activates a card
- **THEN** a lightbox overlay SHALL open with the enlarged image
- **AND** the overlay SHALL close on request

### Requirement: About section

The system SHALL render an "About" section with a biography, a photo and
an awards list.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About Elena"
- **AND** SHALL show at least two biography paragraphs mentioning Vogue,
  National Geographic and Harper's Bazaar
- **AND** SHALL list at least three awards including "International
  Photography Award - Gold (2024)" and "Fearless Photographer of the Year
  (2023)"

### Requirement: Services section

The system SHALL render a "Services & Packages" section with three package
cards, each with features and an inquiry link.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Services & Packages"
- **AND** SHALL show three cards titled Portrait Session, Wedding Coverage
  and Commercial
- **AND** each card SHALL show a blurb, a price, a feature list and an
  "Inquire More" link

### Requirement: Results section

The system SHALL render an "Editing" results section with two draggable
before/after comparison sliders.

#### Scenario: Results content

- **GIVEN** the page is rendered
- **WHEN** the results section is displayed
- **THEN** it SHALL show the badge "Editing" and the heading "The Edit Makes
  the Shot"
- **AND** SHALL show two before/after comparison sliders with Before/After
  labels

#### Scenario: Dragging the comparison handle

- **GIVEN** a before/after slider is displayed
- **WHEN** the user drags the handle
- **THEN** the clip position SHALL follow the pointer
- **AND** the before/after split SHALL update accordingly

### Requirement: Testimonials section

The system SHALL render a "Kind Words" carousel with at least four quotes,
navigation arrows and dot pagination.

#### Scenario: Testimonial carousel

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Kind Words"
- **AND** SHALL show a testimonial quote with an author name and role
- **AND** SHALL show previous/next controls and dot indicators

#### Scenario: Navigating slides

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates the next or previous control
- **THEN** the visible quote SHALL change to the adjacent slide
- **AND** the active dot SHALL reflect the current slide

### Requirement: FAQ section

The system SHALL render a "Frequently Asked Questions" accordion with five
expandable items.

#### Scenario: FAQ accordion

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the heading "Frequently Asked Questions"
- **AND** SHALL list five questions (booking, turnaround, editing style,
  travel, prints)

#### Scenario: Expanding an item

- **GIVEN** the FAQ accordion is displayed
- **WHEN** the user activates a question button
- **THEN** the answer SHALL expand below it
- **AND** the button SHALL reflect the open state via aria-expanded

### Requirement: Contact section

The system SHALL render a "Let's Create Together" contact section with a
validated form and contact details.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Let's Create Together"
- **AND** SHALL show fields for Name, Email, Session Type, Preferred Date
  and Message
- **AND** SHALL show a "Send Inquiry" submit button

#### Scenario: Submitting the form

- **GIVEN** the contact form is displayed
- **WHEN** the user submits without a valid name and email
- **THEN** per-field error messages SHALL be shown
- **AND** the submission SHALL be blocked until the form is valid

### Requirement: Footer

The system SHALL render a dark footer with brand info, social links and
legal links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand, a blurb and social icon links
- **AND** SHALL show legal links (Privacy Policy, Terms of Service, Style
  Guide)
- **AND** SHALL show a copyright line

### Requirement: Dark mode

The system SHALL support a class-based dark mode that toggles `.dark` on
the document root and persists the choice.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** section backgrounds SHALL switch to the dark variants

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner, a
main landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Shutter app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Shutter — Photographer Portfolio
  Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/shutter`
- [ ] `npm run lint` passes for `apps/shutter`
- [ ] `scripts/verify-app.sh shutter` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Navbar: wordmark, 8 links, "Book a Session" button, dark-mode toggle,
      mobile menu
- [ ] Hero: full-bleed image + overlay, H1, sub-paragraph, "View Portfolio"
      ghost CTA
- [ ] Stats: 4 animated counters (500+, 10+, 50+, 99%)
- [ ] Portfolio: filter tabs (All/Weddings/Portraits/Nature/Editorial), 8
      cards, lightbox
- [ ] About: biography, awards list (≥3)
- [ ] Services: 3 package cards with features + "Inquire More"
- [ ] Results: 2 draggable before/after sliders
- [ ] Testimonials: carousel with prev/next + dots, ≥4 quotes
- [ ] FAQ: 5 accordion items expand/collapse with aria-expanded
- [ ] Contact: form (Name/Email/Session Type/Preferred Date/Message) with
      validation + "Send Inquiry"
- [ ] Footer: brand, socials, legal links, copyright
- [ ] Dark mode toggles `.dark` and persists
- [ ] Placeholder images via seeded picsum (`seed/shutter-<n>/<w>/<h>`)
- [ ] No copied ColorLib assets; brand stone #1c1917 + gold #f59e0b in
      `@theme`
