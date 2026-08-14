# Template: Unison (Business / One Page)

## Purpose

Unison is a single-page business/creative-agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Oneder" free template (source: https://colorlib.com/wp/template/oneder/),
built under a DIFFERENT name (**Unison** — "together as one", a single-page
brand word fitting the monorepo naming mandate — never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a clean, corporate one-pager ("I'm Creative One Page
Template by ColorLib") with a photo hero (dark overlay, uppercase headline,
blue pill CTA), an About split (circular-framed photo + "For the next great
business" + green checkmark list), an 8-member team grid with hover social
icons, a filterable portfolio grid (All / Web / Design / Brand), a 6-card
services row with flaticon icons, a testimonial slider, a 3-tier pricing
table (Basic $47 / Premium $200 / Professional), a two-column FAQ block, a
second about split (2 icon feature boxes + rounded photo), a 3-post blog
row, a contact section (3 info columns + form), and a dark footer (About /
Quick Links / Follow Us / Subscribe Newsletter). Unison recreates that
structure 1:1 with matching layout, colors, typography, and content kinds
(no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Oneder" is FORBIDDEN as the app
> name. **Unison** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-12). Source slug + preview URL are recorded
> below.

## Design reference (replication findings)

- **Original:** ColorLib "Oneder". Listed in TEMPLATES.md under **Bootstrap
  (216)** (line 469) — dup rows also at line 1116 (Business), line 1480
  (Creative), line 2346 (One Page), line 2536 (Portfolio); all five rows are
  `- [ ]` and no app ships it yet. Free one-page business template (single
  index page, anchors to in-page sections).
- **Live preview DOM — REACHABLE (verified 2026-08-12):**
  `https://preview.colorlib.com/theme/oneder/` returned HTTP 200 (45KB
  HTML); stylesheets `css/style.css` (25KB, the token source) + bootstrap /
  owl.carousel / jquery.fancybox / bootstrap-datepicker / flaticon /
  icomoon / aos (vendors; owl = testimonial slider, aos = scroll
  animations, fancybox/datepicker unused on the index page). No Google
  Fonts link in the HTML — the font `"Work Sans", sans-serif` is declared
  in `style.css` (load via Google Fonts in `index.html`). Screenshot
  (`oneder-free-template.jpg`, 1200×946, browser-verified 2026-08-12)
  confirms the aesthetic: white photo-driven layout, bootstrap blue
  `#007bff` accents, dark photo hero with white uppercase headline.
- **Visual design (screenshot + live DOM):** modern corporate/minimalist
  one-pager. Screenshot shows the transparent navbar (white "ONEDER"
  wordmark + white menu: Home, About Us, Portfolio, Services, Testimonial,
  Blog, Contact) over a full-screen open-office photo hero with a centered
  white uppercase headline "I'M CREATIVE ONE PAGE TEMPLATE BY COLORLIB", a
  blue pill "Get in Touch" button, and a mouse-scroll indicator; below, the
  white About section with a blue "About Oneder" section title, a
  two-column split (left photo, right "For the next great business" +
  lorem + checklist), then team/portfolio/services/pricing/blog/footer
  sections with `#007bff` accents on active filters, pricing amounts,
  contact icons and link hovers.

### Section order (1:1 from live DOM)

1. **Navbar** (`.site-navbar.py-4.js-sticky-header`, `position: absolute`
   over hero, transparent; white logo wordmark "Oneder" + nav: Home,
   About Us (dropdown: Team, Pricing, FAQ, More Links → Menu One/Two/
   Three), Portfolio, Services, Testimonials, Blog, Contact; mobile
   hamburger `.site-menu-toggle`). On scroll (`.sticky-wrapper.is-sticky`):
   white bg `#fff` + shadow, logo turns `#007bff`, links turn `#000`.
2. **Hero** (`#home-section`, `.site-blocks-cover.overlay`, bg
   `images/hero_1.jpg`, overlay `rgba(0,0,0,.4)`, `min-height: 600px` /
   `100vh`, centered column) — h1 "I'm Creative One Page Template by
   Colorlib" (white, weight 900, `text-uppercase`, 3rem → 2rem mobile),
   `.btn.btn-primary` "Get In Touch" (blue pill → #contact-section),
   mouse-scroll indicator (`a.mouse` + `.mouse-icon` + `.mouse-wheel`).
3. **About** (`#about-section`, `.site-section.cta-big-image`) — centered
   blue section-title "About Oneder"; split row: left `figure.circle-bg`
   (300px circle behind, `bottom: -90px`) with photo; right col: h3 "For
   the next great business" (black) + lorem paragraph + `.ul-check.success`
   4-item green-check list (check `#71bc42`, li padding-left 35px) +
   "Get In Touch" blue pill button.
4. **Team** (`#team-section`, `.site-section.border-bottom`) — centered
   section-title "Our Team" + `.lead` paragraph; grid of 8 `.team-member`
   cards (`col-md-6 col-lg-3`): `figure` photo with absolute hover social
   ul (facebook, twitter, linkedin, instagram icons, slide/scale on hover)
   - `.p-3` name h3 + `.position` role span (Product Manager / Product
     Designer / Marketing Manager / etc.).
5. **Portfolio** (`#portfolio-section`, `.site-section`) — centered
   section-title "Portfolio"; `.filters.button-group` (All [active], Web,
   Design, Brand — pill buttons, `bg rgba(52,58,64,.05)`, active
   `#007bff`); isotope grid of `.item` cards (`col-sm-6 col-md-4 col-lg-4
col-xl-3`, classes `web`/`design`/`brand`), each a photo link with
   hover overlay (zoom + lightbox icon).
6. **Services** (`#services-section`, `.site-section.border-bottom.bg-light`)
   — centered section-title "Our Services"; 6 `.unit-4` cards (`col-md-6
col-lg-4`): `.unit-4-icon` flaticon span (`text-primary`, icons:
   flaticon-startup, flaticon-graphic-design, flaticon-settings,
   flaticon-idea, flaticon-smartphone, flaticon-head) + h3 title +
   lorem paragraph + "Learn More" link. Titles: Business Consulting,
   Market Analysis, User Monitoring, Insurance Consulting, Financial
   Investment, Financial Management.
7. **Testimonials** (`#testimonials-section`, `.site-section.testimonial-wrap`)
   — centered section-title "Testimonials"; owl-carousel slider
   (`.slide-one-item.home-slider`) of 4 slides: `.testimonial` blockquote
   (lorem quote) + `figure` (small circular photo + name: John Smith,
   Christine Aguilar, Robert Spears, Bruce Rogers). Recreate as a
   single-slide view with prev/next controls (or static, per repo
   conventions — carousel optional).
8. **Pricing** (`#pricing-section`, `.site-section.bg-light`) — centered
   section-title "Pricing"; 3 `.pricing` cards (`col-lg-4`, white bg,
   padding 30px): h3 plan name (Basic / Premium / Professional), `.price`
   — big blue amount ($47 / $200 / $750) in 3rem `#007bff` + "/ year"
   (`#cccccc`), 5-item `.ul-check.success` list where 1–2 items are
   `li.remove` (line-through `#dee2e6`, "not included"), `.btn.btn-secondary`
   "Buy Now" (black pill, white text).
9. **FAQ** (`#faq-section`, `.site-section`) — centered section-title
   "Frequently Ask Questions"; 2 columns (`col-lg-6`) × 4 stacked
   `.mb-5` blocks: h5 black question ("Can I accept both Paypal and
   Stripe?" / "What available is refund period?" / "Where are you from?" /
   "What is your opening time?" — repeated) + short lorem paragraph.
10. **About split #2** (`#about-section` — second, duplicate id in source,
    `.site-section`) — left col: 2 `.unit-4` icon boxes (flaticon-head
    "Web & Mobile Specialties", flaticon-smartphone "Intuitive Thinkers";
    each: icon + h3 + lorem + "Learn More" link); right col: `img.rounded`
    photo.
11. **Blog** (`#blog-section`, `.site-section`) — centered section-title
    "Our Blog"; 3 `.h-entry` cards (`col-md-6 col-lg-4`): photo link, h2
    title link ("Repudiandae Quisquam Eaque Dolore" ×3), `.meta` line
    (author Ham Brook / James Phelps / James West • `•` Jan 18, 2019 `•`
    category News), lorem excerpt, "Continue Reading..." link.
12. **Contact** (`#contact-section`, `.site-section.bg-light`) — centered
    section-title "Contact Us"; 3 info columns (`col-md-4` centered,
    icons `text-primary`: icon-room / icon-phone / icon-mail_outline):
    "203 Fake St. Mountain View, San Francisco, California, USA",
    "+1 232 3235 324", "youremail@domain.com"; contact form
    (`form.p-5.bg-white`): h4 "Contact Form" + First Name / Last Name
    fields row + (Email, Subject, Message) fields + "Send Message" button
    (blue pill).
13. **Footer** (`.site-footer`, bg `#333333`, padding 4em/8em) — row:
    `col-md-9` group: About Us (footer-heading + lorem), Quick Links
    (About Us, Services, Testimonials, Contact Us — smoothscroll anchors),
    Follow Us (facebook/twitter/instagram/linkedin icon links); `col-md-3`
    Subscribe Newsletter (`.footer-subscribe` input-group: transparent
    input `placeholder="Enter Email"` + white "Send" pill button, 43px);
    bottom bar `.border-top` (rgba(255,255,255,.1)): copyright "© <year>
    All rights reserved | This template is made with ♥ by Colorlib" →
    use Unison + repo attribution.

- **JS behaviors (original):** sticky-nav scroll class toggle
  (`is-sticky` → white bar); smoothscroll anchor links; aos scroll
  animations (fade-up + delays); owl-carousel testimonial slider;
  isotope portfolio filtering (`data-filter` buttons); fancybox lightbox
  on portfolio items (preview-only). Recreate: React state for sticky
  nav (scroll listener), CSS `scroll-behavior: smooth`, IntersectionObserver
  fade-up (or minimal), state-based portfolio filter, testimonial
  prev/next, mobile menu with `aria-expanded`. All forms presentational
  (no backend).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand color:** `#007bff` (bootstrap blue) — `.btn-primary` bg, filter
  buttons active/hover, `.pricing` price amount, `.section-title` color,
  `text-primary` icons (services, contact), sticky-nav logo, ul-check
  `.primary` variant, form-control focus border. Do NOT use any other blue.
- **Text:** headings `#000`/`#212529`-ish black via `.text-black`,
  section-title `#007bff` 40px (30px mobile) weight 900; body `#212529`
  family default; secondary `#737373` (footer p), footer links `#999999`
  → white on hover; checkmark `#71bc42` (green); "not included" list
  items `#dee2e6` line-through; price "/ year" `#cccccc`.
- **Fonts:** **Work Sans** (body + headings, sans-serif; weights 300 / 400
  / 700 / 900 — hero h1 900, section-title 900, lead 300-ish) — load via
  Google Fonts `<link>` in `index.html`.
- **Buttons:** `.btn` — font-size 16px, `border-radius: 30px` (pill),
  padding 10px 30px. `.btn-primary` bg `#007bff` → hover bg `#000`;
  `.btn-secondary` black bg with white text. Subscribe button in footer:
  white bg, black text, height 43px, line-height 1.
- **Section rhythm:** `.site-section` padding 2.5em 0 (mobile) / 5em 0
  (≥768px); `.bg-light` sections use `#f8f9fa`; `.border-bottom` hairlines
  between sections; `.section-title` centered, margin-bottom 3em-ish.
- **Hero:** `.site-blocks-cover` — bg cover image, overlay `:before`
  rgba(0,0,0,.4), min-height 600px / 100vh, h1 white 3rem (2rem ≤992px)
  weight 900 uppercase, p white weight 300.
- **Cards:** `.pricing` white bg padding 30px; `.team-member` photo with
  hover social bar; `.h-entry` blog card; `.unit-4` icon+text blocks
  (icon `text-primary`, `mr-4`).
- **Forms:** `.form-control` height 43px, `border-radius: 30px`, focus
  border `#007bff`, no box-shadow; footer subscribe input transparent
  (`bg-transparent`, white text, `border-secondary`).
- **Footer:** bg `#333333`; footer-heading 16px white; p `#737373`;
  a `#999999` → white hover; bottom bar border-top rgba(255,255,255,.1).
- **Spacing:** navbar `py-4`; hero content centered `col-md-8`; team
  `col-lg-3` cards; portfolio `col-xl-3`; services `col-lg-4`; sections
  inside `container` (1140px).

## Requirements

### Requirement: Sticky navbar with dropdown and mobile toggle

The system SHALL render a transparent navbar over the hero (white wordmark

- white links) that turns solid white with a blue logo on scroll, with an
  About Us dropdown and a mobile hamburger toggle.

#### Scenario: Navbar over hero

- **GIVEN** the Unison page is rendered at the top
- **WHEN** the viewport is at the top of the page
- **THEN** the navbar SHALL be transparent over the hero image with a
  white "Unison" wordmark and nav links Home, About Us, Portfolio,
  Services, Testimonials, Blog, Contact
- **AND** "About Us" SHALL open a dropdown with Team, Pricing, FAQ and a
  nested "More Links" (Menu One, Menu Two, Menu Three)

#### Scenario: Sticky state on scroll

- **GIVEN** the page is scrolled past the hero
- **WHEN** the navbar becomes sticky
- **THEN** it SHALL have a white background with a subtle shadow, a
  `#007bff` logo and black nav links

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the hamburger toggle is activated
- **THEN** an accessible menu SHALL open (`aria-expanded` toggling) with
  the same links, and close on link click or toggle again

### Requirement: Hero with overlay, headline and CTA

The system SHALL render a full-viewport photo hero with a dark overlay,
an uppercase headline and a pill CTA button.

#### Scenario: Hero content

- **GIVEN** the Unison page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-viewport background photo with a
  `rgba(0,0,0,.4)` overlay
- **AND** a centered white uppercase headline (weight 900) reading
  "I'm Creative One Page Template by Colorlib"
- **AND** a blue pill "Get In Touch" button that scrolls to the contact
  section
- **AND** a mouse-scroll indicator below the content

### Requirement: About section with checklist

The system SHALL render an "About" split section: circular-framed photo
left, heading + paragraph + green-check list + CTA right.

#### Scenario: About layout

- **GIVEN** the Unison page is rendered
- **WHEN** the about section is displayed
- **THEN** the section title "About Unison" SHALL be centered in brand
  blue
- **AND** the left column SHALL show a photo framed by a large decorative
  circle behind it
- **AND** the right column SHALL show the heading "For the next great
  business", a lorem paragraph, a 4-item list with green `#71bc42` check
  marks, and a blue "Get In Touch" button

### Requirement: Team grid with hover socials

The system SHALL render 8 team member cards in a 4×2 grid, each with
photo, name, role, and social icons revealed on hover/focus.

#### Scenario: Team cards

- **GIVEN** the Unison page is rendered
- **WHEN** the team section is displayed
- **THEN** 8 cards SHALL render in a responsive 4-column grid
- **AND** each card SHALL contain a photo, the member's name, and a role
  (Product Manager, Product Designer, Marketing Manager, etc.)
- **AND** Facebook/Twitter/LinkedIn/Instagram icons SHALL be revealed on
  hover or keyboard focus

### Requirement: Filterable portfolio grid

The system SHALL render a portfolio grid with filter buttons (All, Web,
Design, Brand) that filter the items client-side.

#### Scenario: Portfolio filters

- **GIVEN** the Unison page is rendered
- **WHEN** a filter button is clicked
- **THEN** the grid SHALL show only items of the selected category
- **AND** the active button SHALL have a blue `#007bff` background
- **AND** the "All" filter SHALL be active by default showing every item

### Requirement: Services row with icons

The system SHALL render 6 service cards (3-column grid, 2 rows), each with
an icon, title, lorem text and "Learn More" link.

#### Scenario: Service cards

- **GIVEN** the Unison page is rendered
- **WHEN** the services section is displayed
- **THEN** 6 cards SHALL render with blue icons and the titles Business
  Consulting, Market Analysis, User Monitoring, Insurance Consulting,
  Financial Investment, Financial Management
- **AND** each card SHALL include a lorem paragraph and a "Learn More"
  link

### Requirement: Testimonial slider

The system SHALL render a testimonial section with quotes and author
names, switchable between slides.

#### Scenario: Testimonials

- **GIVEN** the Unison page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** a quote blockquote with an author photo and name SHALL render
  (John Smith, Christine Aguilar, Robert Spears, Bruce Rogers)
- **AND** prev/next controls SHALL cycle through the slides (or a static
  first-slide layout with controls per repo conventions)

### Requirement: Pricing table

The system SHALL render 3 pricing cards with plan name, price, feature
list (included/excluded) and a buy button.

#### Scenario: Pricing cards

- **GIVEN** the Unison page is rendered
- **WHEN** the pricing section is displayed
- **THEN** 3 cards SHALL render: Basic $47/year, Premium $200/year,
  Professional $750/year
- **AND** the price amount SHALL be large (`3rem`) in brand blue with a
  smaller gray "/ year" suffix
- **AND** each list SHALL mix included items (green check) and excluded
  items (struck-through gray)
- **AND** each card SHALL have a black pill "Buy Now" button

### Requirement: FAQ blocks

The system SHALL render 8 question/answer blocks in two columns.

#### Scenario: FAQ layout

- **GIVEN** the Unison page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** the title "Frequently Ask Questions" SHALL render centered
- **AND** 8 stacked blocks (4 per column) SHALL each show a bold black
  question and a short lorem paragraph

### Requirement: Second about split

The system SHALL render a second split section: two icon feature boxes
left, rounded photo right.

#### Scenario: Feature boxes

- **GIVEN** the Unison page is rendered
- **WHEN** the second split section is displayed
- **THEN** "Web & Mobile Specialties" and "Intuitive Thinkers" SHALL
  render with blue icons, lorem text and "Learn More" links on the left
- **AND** a rounded photo SHALL render on the right

### Requirement: Blog row

The system SHALL render 3 blog post cards with image, title, meta line,
excerpt and read-more link.

#### Scenario: Blog cards

- **GIVEN** the Unison page is rendered
- **WHEN** the blog section is displayed
- **THEN** 3 cards SHALL render, each with a photo, post title, meta
  (author • Jan 18, 2019 • News), lorem excerpt and "Continue Reading..."
  link

### Requirement: Contact info and form

The system SHALL render 3 contact info columns and a contact form with
First Name, Last Name, Email, Subject, Message and a send button.

#### Scenario: Contact section

- **GIVEN** the Unison page is rendered
- **WHEN** the contact section is displayed
- **THEN** address ("203 Fake St. Mountain View, San Francisco,
  California, USA"), phone ("+1 232 3235 324") and email
  ("youremail@domain.com") SHALL render in 3 centered columns with blue
  icons
- **AND** a white form card SHALL render with a "Contact Form" heading,
  First Name / Last Name fields, and required Email / Subject / Message
  fields
- **AND** a blue pill "Send Message" button SHALL submit the form
  (presentational — inline validation only, no backend)

### Requirement: Dark footer with newsletter

The system SHALL render a dark footer with About Us, Quick Links, Follow
Us and a Subscribe Newsletter form plus a copyright bar.

#### Scenario: Footer layout

- **GIVEN** the Unison page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a `#333333` background and four content areas:
  About Us (lorem), Quick Links (anchor links to sections), Follow Us
  (social icons), Subscribe Newsletter (email input + white "Send"
  button)
- **AND** a top-bordered copyright bar SHALL show "© <year> All rights
  reserved" with the repo attribution

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-unison`
- [ ] `scripts/verify-app.sh unison` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with reference): navbar (transparent over
      hero → sticky white on scroll, About Us dropdown + mobile toggle) →
      hero (overlay photo, uppercase headline, Get In Touch, mouse
      indicator) → About (circle-framed photo + heading + green-check
      list + CTA) → Team (8 cards, hover socials) → Portfolio (filters
      All/Web/Design/Brand + grid) → Services (6 icon cards) →
      Testimonials (slider) → Pricing (Basic/Premium/Professional) →
      FAQ (2-col blocks) → About split #2 (2 icon boxes + rounded photo)
      → Blog (3 posts) → Contact (3 info cols + form) → Footer (About /
      Quick Links / Follow Us / Newsletter / copyright)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#007bff`
      brand, `#71bc42` check green, `#dee2e6` excluded-item gray,
      `#f8f9fa` bg-light, `#333333` footer, `#737373`/`#999999` footer
      text; pill buttons `border-radius: 30px`; section-title 40px
      weight 900 brand blue
- [ ] Fonts: Work Sans (300/400/700/900) via Google Fonts `<link>` in
      `index.html`, title "Unison — Creative One Page Template"
- [ ] Photos = seeded picsum (hero `picsum.photos/id/180` — creative
      workspace flat-lay, browser-screened at ship time; the pinned
      `unison-hero` seed resolved to a US flag/helicopter and was rejected,
      `unison-about`, `unison-team-<n>` n 1..8, `unison-portfolio-<n>`,
      `unison-testimonial-<n>` n 1..4, `unison-blog-<n>` n 1..3) — screen
      seeds for subject per repo seed screening; icons from lucide-react
      (MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Menu,
      Check, X, ArrowRight, Send) — no copied assets
- [ ] Portfolio filters client-side (state); team socials + portfolio
      hover overlays work on hover AND focus-within; testimonial slider
      has working controls
- [ ] Forms presentational with inline validation; no backend calls
- [ ] Mobile nav accessible (`aria-expanded` on hamburger toggle)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark ALL FIVE "Oneder" rows: line 469
      Bootstrap, line 1116 Business, line 1480 Creative, line 2346 One
      Page, line 2536 Portfolio)
