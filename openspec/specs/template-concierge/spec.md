# Template: Concierge (Travel / Hotel Template)

## Purpose

Concierge is a travel-and-hotel one-page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Hotell"
template design (see TEMPLATES.md — appears 2×: lines 591 and 1911; both rows
point to the same source, one prep covers all; verified with
`grep -c 'wp/template/hotell/'` = 2), built under a DIFFERENT name (Concierge
— a hotel front-desk concierge, evoking travel/lodging, matching the project's
naming pattern) per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/hotell/ (Bootstrap 5 category,
"Hotell" — a travel/hotel one-pager: hero + booking-widget search bar, services
carousel, about, blog slider, FAQ accordion, testimonial slider, Instagram
gallery, footer)
Preview URL: https://preview.colorlib.com/theme/hotell/

## Design reference (replication findings)

- **Original:** ColorLib "Hotell" (`<title>Hotell &mdash; Free Bootstrap 5
Website Template by Colorlib</title>`). A teal-accented travel/hotel one-pager:
  a transparent navbar floating over a full-height photographic hero (aerial
  tropical resort — wooden pier over turquoise water toward overwater
  bungalows) under a `rgba(0,0,0,0.4)` overlay; a centered white 50px/700
  Work Sans headline "Once a year go someplace you've never been before." with
  a teal pill "See video" button (glightbox → YouTube); a white booking-widget
  card overlapping the hero bottom (Date Arrival / Date Departure calendar
  inputs via flatpickr, "# of Person" select 1–5+, teal "Find now" button);
  a light `#f8f9fa` "Our Services" section with a tiny-slider carousel of six
  white cards (Trekking, The Map, Suitcase, Island Hoping, World Round, Travel
  with Plane) each with a 70px teal line icon, 20px bold title, black-50
  blurb and uppercase "Learn More" link; an About split (photo with a teal
  `#00917c` panel bleeding behind it + heading/paragraphs); a white "Blog
  Posts" tiny-slider of image cards (pencil icon + title + "Read More"); a
  "Frequently Asked Questions" section (heading left + Bootstrap accordion:
  Is it free? / How to install this template? / Where can i get help? — active
  state teal `#008370` on `#e6f4f2`); a light "Testimonials" slider of white
  quote cards ("John Doe, Creative Director", quote icon floating top) with
  centered Prev/Next pills; an "Instagram" image slider; and a light `#f8f9fa`
  footer (4 widget columns: Home/About us/Places/Services/Destination/Terms/
  Privacy, Practice Area, Services, Contact address/phones/email + Connect
  socials as teal circles + copyright bar). Primary brand teal `#00917c` on
  white/light; Work Sans headings + Roboto body.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/hotell/
  (HTTP 200, ~34 KB HTML fetched; `css/style.css` ~64 KB parsed for tokens —
  the page also imports aos.css, flatpickr.min.css, glightbox.min.css,
  tiny-slider.css, flaticon.css, icomoon; site is jQuery + Bootstrap 5 +
  tiny-slider + glightbox + flatpickr + AOS, NOT Tailwind). Fonts: "Work Sans"
  (headings, 1 use) + "Roboto" (body, 1 use) — recreate via Google Fonts
  `<link>`s in index.html (do NOT copy font files).
- **Screenshot note:** `hotell-free-template.jpg` (1200×946, AVIF source
  converted to PNG and browsed) MATCHES the live template: transparent navbar
  with white serif-ish logo "Hotell", faint white links (Home/About/Services/
  Rooms/Contact), phone number far right; hero = aerial tropical resort photo
  (pier, turquoise water, thatched-roof buildings) with centered bold white
  headline and a teal pill "See video" button; a long white horizontal booking
  bar overlays the hero bottom with calendar/user icons and a teal "Find now"
  button; below, "OUR SERVICES" uppercase teal heading on light grey with
  three white cards (teal line icons Trekking/The Map/Suitcase, bold titles,
  blurbs); subtle shadows + generous whitespace throughout. The live preview
  DOM + parsed stylesheet are the authoritative reference; the screenshot
  confirms palette + layout.

### Section structure (from the live DOM, top to bottom)

1. `nav.site-nav` > `div.container` > `div.site-navigation` (transparent,
   absolute over the hero):
   - `a.site-logo` "Hotell" (white) + `ul.site-menu.main-menu` links: Home ·
     Destination · Menu One · Menu Two · Dropdown (has-children → submenu:
     Sub Menu One / Sub Menu Two / Sub Menu Three) · Services · About ·
     Contact — 14px, `rgba(255,255,255,0.5)`, hover/active white.
   - Right side: mobile hamburger (`js-menu-toggle`, d-lg-none) + `a.call-us`
     phone icon + "123-489-9381".
2. `div.hero.overlay` (height 100vh, min-height 780px, cover bg
   `images/img_1.jpg` → picsum) > `div.overlay:before` (absolute inset-0,
   `rgba(0,0,0,0.4)`) > `div.container` > `div.row.justify-content-center` >
   `div.col-lg-8.text-center`:
   - `h1.heading.mb-5.text-white` "Once a year go someplace you've never been
     before." (50px/700 Work Sans, data-aos fade-up).
   - `a.btn.btn-primary.glightbox` "See video" (pill, teal; → client-side
     modal or YouTube link).
3. `div.section.sec-form-search.py-0.bg-light` > `div.container` >
   `div.col-lg-12` > `div.form.row` (white card, `margin-top: -50px`
   overlapping the hero, padding 30px, shadow `0 15px 30px rgba(0,0,0,0.1)`):
   - `div.col-lg-3` × 2: `div.input-icon-wrap` (calendar icon +
     `input.form-control` placeholder "Date Arrival" / "Date Departure" —
     flatpickr → native date inputs).
   - `div.col-lg-3`: person icon + `select.form-control` "# of Person" —
     options 1, 2, 3, 4, 5+.
   - `div.col-lg-3`: `button.btn.btn-primary.btn-block.w-100` "Find now".
4. `div.section.sec-features.bg-light` > `div.container` > header row
   (`col-lg-6`: `h2.heading` "Our Services" — uppercase 24px bold teal) >
   `div.features-slider-wrap` (margin-bottom -250px) > `div.features-slider`
   (tiny-slider → client-side carousel) of 6 × `div.item` > `div.feature`
   cards (white, padding 50px 50px 100px, shadow `0 15px 30px
rgba(0,0,0,0.05)`; class `bg-color-1..6`):
   - `span.flaticon-*` icon (70px, teal → lucide: Trekking→Mountain,
     Map→Map, Suitcase→Briefcase/Luggage, Island Hoping→Palmtree/Ship,
     World Round→Globe, Travel with Plane→Plane).
   - `h3` 20px bold: "Trekking" / "The Map" / "Suitcase" / "Island Hoping" /
     "World Round" / "Travel with Plane" + `p.text-black-50` blurb
     (paraphrase) + `a.more.d-block` "Learn More" (uppercase 12px/700,
     letter-spacing .1rem, `#888` → black hover).
   - Slider nav (top-right of header): Prev/Next pill buttons (radius 30px,
     border `rgba(0,0,0,0.1)`, hover border black).
5. `div.section.sec-about` (white) > `div.container` > `div.row.g-5.
justify-content-between`:
   - `div.col-lg-6.has-bg` (position relative; `:before` absolute,
     `background-color: #00917c`, width 200%, left -150%, top/bottom -100px,
     z-index -1 — teal panel bleeding left/behind the photo) >
     `img.img-fluid.img-box-shadow.rounded` (about_1.jpg → picsum).
   - `div.col-lg-4.align-self-center`: `h2.heading.mb-4` "About Hotell" +
     two paragraphs (paraphrase the blind text).
6. `div.section.sec-posts` (white) > `div.container` > `div.row.mb-4` >
   `div.col-lg-7`: `h2.heading.mb-4` "Blog Posts" — then `div.post-slider-wrap`
   > `div#post-slider-nav` (Prev/Next pills) + `div.post-slider`
   > (tiny-slider → client-side carousel) of 5+ × `div.item` > `div.post-entry`:
   - `a.thumbnail` > `img.img-fluid` (img_1..4.jpg → picsum).
   - `div.post-entry-body`: `span.icon-pencil` + `h3` > `a` title
     (paraphrase "Far far away…") + `div.read-more-wrap` > `a.more`
     "Read More".
7. `div.section.sec-faq` (white) > `div.container` > `div.row.
justify-content-between`:
   - `div.col-lg-3.mt-4` (spacer/heading column, 3-col) +
     `div.col-lg-8`: `h2.heading` "Frequently Asked Questions" +
     `div.accordion.accordion-flush` (Bootstrap collapse → client-side
     state) of 3 items:
     - "Is it free?" / "How to install this template?" / "Where can i get
       help?" — `button.accordion-button` (+ collapsed state), body =
       paraphrased paragraphs. Active: `color #008370`, bg `#e6f4f2`.
8. `div.section.sec-testimonial.bg-light` > `div.container` > `div.row` >
   `div.col-lg-3` (heading col) + `div.col-lg-7` > `h2.heading`
   "Testimonials" — `div.testimonial-slider-wrap` > `div#testimonial-slider-
nav` (Prev/Next pills, absolute bottom center) + `div.testimonial-slider`
   (tiny-slider → client-side carousel) of 8 × `div.testimonial` cards
   (padding 40px, white, shadow `0 10px 20px rgba(0,0,0,0.05)`):
   - `span.icon-quote-left` (quote icon, absolute top -20px, shadow
     `0 10px 20px rgba(0,0,0,0.2)`).
   - Quote paragraph (paraphrase) + `h3` "John Doe" + `p` "Creative
     Director" (paraphrase names/roles — see convention on paraphrasing
     names).
9. `div.section.sec-instagram` (white) > `div.container.mb-5` > `div.row` >
   `div.col-lg-3` (heading) + `div.col-lg-7` > `h2.heading` "Instagram" +
   `div.instagram-slider-wrap` > `div.instagram-slider` (tiny-slider →
   client-side carousel) of image tiles each with `span.icon-instagram`
   overlay (8 image tiles).
10. `footer.site-footer.bg-light` (padding 70px 0, links `rgba(0,0,0,0.5)` →
    black hover with teal `#00917c` underline) > `div.container` > `div.row`:
    - `div.col-lg-3` × 3 link widgets:
      - "Home": Home · About us · Places · Services · Destination · Terms ·
        Privacy.
      - "Practice Area": Travel · Popular places · Destination · Tour ·
        Family Vacation.
      - "Services": Tour · Swimming · Kayak · Surfing.
    - `div.col-lg-3` "Contact": "43 Raymouth Rd. Baltemoer, London 3910"
      (address), "+1(123)-456-7890" (phone ×2), "info@mydomain.com" (email)
      — paraphrase.
    - "Connect" widget: `ul.social` of 30px teal circles (radius 50%,
      icon color #000): Facebook, Twitter, Linkedin, Pinterest, Instagram →
      inline SVG brand icons.
    - Copyright bar: "© <year> All rights reserved" + mandatory Component
      Dock link (https://www.componentdock.com/) replacing "This template is
      made with ❤ by Colorlib".

### Content (for copy paraphrase)

- Nav: Home, Destination, Menu One, Menu Two, Dropdown (Sub Menu One/Two/
  Three), Services, About, Contact + phone 123-489-9381.
- Hero: "Once a year go someplace you've never been before." + "See video".
- Booking: Date Arrival, Date Departure, # of Person (1–5+), "Find now".
- Services: Our Services — Trekking, The Map, Suitcase, Island Hoping, World
  Round, Travel with Plane (+ blurb + Learn More).
- About: "About Hotell" + 2 paragraphs (paraphrase).
- Blog: "Blog Posts" — 5 image cards, "Read More".
- FAQ: "Frequently Asked Questions" — Is it free? / How to install this
  template? / Where can i get help? (+ answers, paraphrase).
- Testimonials: "Testimonials" — quote + "John Doe, Creative Director"
  (paraphrase names).
- Instagram: "Instagram" — 8 tiles.
- Footer: link widgets (Home / Practice Area / Services / Contact), Connect
  socials, copyright + Component Dock.

## Design tokens

| Token        | Value                                       | Usage                                                                                                                                |
| ------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| brand-teal   | `#00917c`                                   | `.btn-primary` bg, section `.heading` color, feature icons, about has-bg panel, footer social circle bg, footer link hover underline |
| teal-hover   | `#26a290`                                   | `.btn-primary:hover` bg                                                                                                              |
| teal-active  | `#33a796` (border `#1a9c89`)                | `.btn-primary:active` bg                                                                                                             |
| teal-deep    | `#008370`                                   | accordion-button active text + arrow                                                                                                 |
| teal-tint    | `#e6f4f2`                                   | accordion-button active bg                                                                                                           |
| ink          | `#000000`                                   | headings color (h1–h5, .logo), btn-primary text is white, `more` hover                                                               |
| body-text    | `#212529`                                   | body default (Bootstrap)                                                                                                             |
| muted        | `#888` / `rgba(0,0,0,0.5)`                  | "Learn More/Read More" link color / `.text-black-50` blurbs, footer links `rgba(0,0,0,0.5)`                                          |
| light-bg     | `#f8f9fa`                                   | sec-form-search, sec-features, sec-testimonial, site-footer bg                                                                       |
| white        | `#ffffff`                                   | cards (feature, testimonial, post-entry), booking widget bg, hero text                                                               |
| nav-link     | `rgba(255,255,255,0.5)` → white             | transparent navbar links, hover/active white                                                                                         |
| hero-overlay | `rgba(0,0,0,0.4)`                           | `.hero.overlay:before` full-cover overlay                                                                                            |
| form-border  | `rgba(0,0,0,0.1)` / focus `rgba(0,0,0,0.2)` | `.form-control` border; placeholder `rgba(0,0,0,0.7)`                                                                                |
| shadow-form  | `0 15px 30px rgba(0,0,0,0.1)`               | booking widget card                                                                                                                  |
| shadow-card  | `0 15px 30px rgba(0,0,0,0.05)`              | feature cards                                                                                                                        |
| shadow-testi | `0 10px 20px rgba(0,0,0,0.05)` (icon `0.2`) | testimonial cards + floating quote icon                                                                                              |
| font-heading | "Work Sans"                                 | h1–h5, .logo (Google Fonts)                                                                                                          |
| font-body    | "Roboto"                                    | body, nav, buttons, inputs (Google Fonts)                                                                                            |

Radii: **30px pills** on all `.btn` (padding 15px 30px, 14px) and on the
slider nav Prev/Next buttons (border `rgba(0,0,0,0.1)`, hover border black);
**50% circles** on footer socials (30px, teal bg, black icon); **rounded**
on the about image (`img-box-shadow.rounded`).

Spacing: hero 100vh (min 780px); `.section` padding 7rem 0 (form-search
overrides py-0); booking widget `margin-top: -50px`, padding 30px; feature
cards padding 50px 50px 100px; features-slider-wrap `margin-bottom: -250px`;
testimonial cards padding 40px; footer padding 70px 0; form-control height
54px; `row.g-5` (3rem gutters) on about.

## Requirements

### Requirement: Header / Navigation

The system SHALL render a transparent-over-hero navbar with a text brand, nav
links (including a dropdown), and a phone number, turning solid on scroll.

#### Scenario: Brand and nav links

- **GIVEN** the Concierge app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL overlay the hero transparently at the top
- **AND** the brand SHALL read "CONCIERGE" (text equivalent of "Hotell")
- **AND** the nav SHALL list Home, Destination, Menu One, Menu Two, Dropdown,
  Services, About, and Contact in 14px white/50
- **AND** the phone number "123-489-9381" with a phone icon SHALL render on
  the right

#### Scenario: Dropdown menu

- **GIVEN** the Dropdown nav item is rendered
- **WHEN** it is hovered/activated
- **THEN** a submenu SHALL open listing Sub Menu One, Sub Menu Two, and Sub
  Menu Three

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger is activated
- **THEN** a collapsible menu SHALL open listing the same links (dropdown
  expanded inline)
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a full-height hero over a photo with a dark overlay, a
centered white headline, and a video CTA.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill the viewport (min 780px) with a cover photo and
  a black overlay at 40% opacity
- **AND** the centered 50px/700 Work Sans headline SHALL read "Once a year go
  someplace you've never been before."
- **AND** a teal pill "See video" button SHALL render below the headline
- **AND** activating it SHALL open a video modal (or link) — no glightbox

### Requirement: Booking search bar

The system SHALL render a white booking-widget card overlapping the hero with
two date fields, a persons select, and a search button.

#### Scenario: Booking fields

- **GIVEN** the booking widget is rendered
- **WHEN** the page loads
- **THEN** a white card SHALL overlap the hero bottom (negative top margin)
  with a soft shadow
- **AND** "Date Arrival" and "Date Departure" fields SHALL render with
  calendar icons (native date inputs)
- **AND** a "# of Person" select SHALL offer 1, 2, 3, 4, and 5+
- **AND** a full-width teal pill "Find now" button SHALL render

### Requirement: Services carousel

The system SHALL render the "Our Services" section on `#f8f9fa` with a
carousel of six white feature cards and Prev/Next controls.

#### Scenario: Feature cards

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the uppercase teal heading SHALL read "Our Services"
- **AND** six white cards SHALL render (teal 70px icon, 20px bold title,
  black-50 blurb, uppercase "Learn More" link)
- **AND** the titles SHALL be Trekking, The Map, Suitcase, Island Hoping,
  World Round, and Travel with Plane

#### Scenario: Carousel navigation

- **GIVEN** the services carousel is rendered
- **WHEN** the Prev/Next pill controls are activated
- **THEN** the carousel SHALL advance/go back one card (client-side state)

### Requirement: About

The system SHALL render the split About section with a photo on a teal
bleeding panel and a heading + copy column.

#### Scenario: About layout

- **GIVEN** the About section is rendered
- **WHEN** the page loads
- **THEN** a rounded photo SHALL render on the left with a `#00917c` panel
  bleeding behind it (left/behind the image)
- **AND** the right column SHALL show the teal uppercase heading "About
  Hotell" (renamed to the Concierge brand in the heading text) and two
  paraphrased paragraphs

### Requirement: Blog Posts

The system SHALL render the "Blog Posts" section with a carousel of image
cards and Prev/Next controls.

#### Scenario: Post cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the teal uppercase heading SHALL read "Blog Posts"
- **AND** at least five cards SHALL render, each with a photo, a pencil icon,
  a paraphrased title, and a "Read More" link
- **AND** Prev/Next pill controls SHALL advance the carousel

### Requirement: FAQ

The system SHALL render the "Frequently Asked Questions" section with a
left heading column and an accordion of three questions.

#### Scenario: Accordion

- **GIVEN** the FAQ section is rendered
- **WHEN** the page loads
- **THEN** the teal uppercase heading SHALL read "Frequently Asked Questions"
- **AND** three accordion items SHALL read "Is it free?", "How to install
  this template?", and "Where can i get help?"
- **AND** activating an item SHALL expand its paraphrased answer while the
  active item SHALL show teal `#008370` text on `#e6f4f2`
- **AND** activating the open item again SHALL collapse it

### Requirement: Testimonials

The system SHALL render the "Testimonials" section on `#f8f9fa` with a
carousel of white quote cards and centered Prev/Next controls.

#### Scenario: Quote cards

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the teal uppercase heading SHALL read "Testimonials"
- **AND** at least three white cards SHALL render, each with a floating quote
  icon, a paraphrased quote, a name, and a role line
- **AND** Prev/Next pill controls SHALL advance the carousel

### Requirement: Instagram

The system SHALL render the "Instagram" section with a carousel of image
tiles carrying Instagram icons.

#### Scenario: Gallery tiles

- **GIVEN** the Instagram section is rendered
- **WHEN** the page loads
- **THEN** the teal uppercase heading SHALL read "Instagram"
- **AND** at least six image tiles SHALL render, each with an Instagram icon
  overlay

### Requirement: Footer

The system SHALL render the light `#f8f9fa` footer with three link widgets, a
contact column, socials, and a copyright bar linking to Component Dock.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** a "Home" widget SHALL list Home, About us, Places, Services,
  Destination, Terms, and Privacy
- **AND** a "Practice Area" widget SHALL list Travel, Popular places,
  Destination, Tour, and Family Vacation
- **AND** a "Services" widget SHALL list Tour, Swimming, Kayak, and Surfing
- **AND** a "Contact" widget SHALL show a paraphrased street address, two
  phone numbers, and an email address

#### Scenario: Socials and copyright

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** a "Connect" widget SHALL render 30px teal circle social icons
  (Facebook, X/Twitter, LinkedIn, Pinterest, Instagram — inline SVG brand
  icons)
- **AND** the copyright bar SHALL read "© <current year> Concierge — All
  rights reserved"
- **AND** it SHALL link to https://www.componentdock.com/ (mandatory)

## Verification checklist

- [ ] Section order + structure matches the live preview 1:1 (navbar → hero →
      booking search bar → services → about → blog posts → FAQ → testimonials
      → Instagram → footer).
- [ ] Brand teal `#00917c` in `@theme`; used via Tailwind classes everywhere
      (buttons, section headings, feature icons, about panel, socials, hover
      states).
- [ ] Fonts: Work Sans (headings) + Roboto (body) via Google Fonts `<link>`s
      in `index.html`; no font files copied.
- [ ] Placeholder images: `https://picsum.photos/seed/concierge-<n>/<w>/<h>`
      (hero bg, about photo, 5–6 blog photos, 8 Instagram tiles) — never copy
      ColorLib assets. Screen seeds with browser_vision (hero should read as
      a tropical/travel photo; see skill notes on seed screening).
- [ ] Icons: lucide-react (Mountain, Map, Briefcase, Palmtree, Globe, Plane,
      Calendar, Users, Phone, Pencil, Quote, Menu, X, ChevronLeft/
      ChevronRight, Instagram); brand socials (Facebook/X/Linkedin/Pinterest/
      Instagram) as inline SVG (lucide has no brand icons). Probe every icon
      with `node -e "console.log(typeof require('lucide-react').X)"` —
      renames bite silently.
- [ ] Buttons: pill (radius 30px), padding 15px 30px, 14px; teal `btn-primary`
      with white text, hover `#26a290`, active `#33a796`.
- [ ] Hero overlay: flat black at 40% (`bg-black/40`-style), NOT a gradient.
- [ ] Booking widget: white card with `-mt-12`-style negative top margin over
      the hero, shadow `0 15px 30px rgba(0,0,0,0.1)`; date fields as native
      date inputs with calendar icons (no flatpickr dependency).
- [ ] Carousels (services, blog, testimonials, Instagram) implemented with
      client-side state — no tiny-slider/owl-carousel; glightbox video →
      client-side modal or decorative button.
- [ ] About teal panel: absolutely-positioned `#00917c` block bleeding
      behind/left of the photo (width 200%, left -150%, top/bottom -100px).
- [ ] FAQ accordion: client-side expand/collapse, active = `#008370` on
      `#e6f4f2`.
- [ ] Tests: Vitest + Testing Library, 100% lines/functions/branches/
      statements; desktop + mobile nav duplication handled with
      `getAllByRole` indexing (mobile menu last); decorative `<img alt="">`
      photos queried via `container.querySelectorAll('img')` (no `img` role);
      date inputs use `getByLabelText`/placeholder queries. MemoryStorage
      polyfill only if localStorage is used.
- [ ] Gates: `npm run verify:app -- concierge` green; full gate via CI on
      merge.
- [ ] PR description: source template (Hotell), preview URL, design tokens
      used, what differs (renames, placeholder images,
      tiny-slider/glightbox/flatpickr → client-side state + native inputs,
      paraphrased copy incl. "John Doe", "43 Raymouth Rd." address, footer
      attribution → Component Dock).
