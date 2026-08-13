# Template: Cameo (Model Agency / Fashion Lookbook Template)

> **SUPERSEDED** — ColorLib "Look" shipped as **Glamour** (PR #392,
> https://glamour.free.componentdock.com). Do NOT implement this spec; delete
> on next cleanup. (Duplicate prep: the same source slug was prepped twice —
> the implementer's claim + spec used the name Glamour.)

## Purpose

Cameo is a model-agency / fashion lookbook one-pager in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Look"
template design (see TEMPLATES.md — appears 3×: lines 443, 1085 and 1716; all
three rows point to the same source and are `- [ ]` — one prep covers all, mark
ALL `[x]` when done; verified with `grep -c 'wp/template/look/'` = 3), built
under a DIFFERENT name (Cameo — a model's "cameo appearance", fitting the
fashion/model-agency theme; single lowercase word, no collision with `apps/` or
existing spec folders) per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/look/ (Bootstrap 4 / Model Agency
category; `<title>Look - Free Bootstrap 4 Template by Colorlib</title>`).
Preview URL: https://preview.colorlib.com/theme/look/ (HTTP 200, ~49 KB HTML
fetched — the preview slug matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Look" — a dark, high-fashion MODEL AGENCY one-pager.
  Full-height hero SLIDER (4 slides, owl-carousel) on dark moody model photos
  (bg_1..bg_4.jpg) with a dark overlay, a hot-pink uppercase eyebrow
  ("Top Model's" / "Model Agency" / "Super Model's" / "Photo Model's"), a big
  white uppercase model name (Kate Henderson / Samantha Lewis / Jessica Alba /
  Michael Buff), a stats row (Height 185, Bust, Waist, Hips, Shoe, Eyes Blue,
  Hair Brunet), and two buttons: solid hot-pink "Read more" + pink-outline
  "View Gallery". The nav is a HAMBURGER-ONLY fullscreen overlay menu (logo
  "Look / Model Agency" + 5 numbered links: 01 Home, 02 About, 03 Models, 04
  Blog, 05 Contact; one panel carries a model photo). Then a split about block
  ("Look A Model Agency" — photo left, text right with strong
  "creative"/"success", pink checkmark list, plus a video-promo block with a
  play button), a "Our Tops Model's" band (light-gray intro cell + 8 model
  cards with photo + name + mini stats, + a "View more" cell), a testimonial
  carousel on a dark image bg ("Clients Says"), a services grid (icon +
  title: Fashion Shows, Corporate Events, Commercial Photo Shots,
  Exhibitions/Trade Shows), a blog row (3 entries + "View more"), a "Wanna be
  a Model?" quote strip (bg image + shadow box + "Call us now to know how!"
  link opening a "Request a Quote" modal form), and a dark `#252525` footer
  (brand + pera + social, Recent Blog mini-posts, Site Links, "Have a
  Questions?" address/phone/email + copyright bar). The brand is HOT PINK
  `#f62a66` (links, `.btn-primary` bg + border, hero eyebrow, carousel dots,
  active nav link, hover states) on a mostly dark/white canvas.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/look/
  (HTTP 200, ~49 KB HTML; `css/style.css` ~73 KB parsed for tokens — Bootstrap
  4 build + ftco theme overrides at the bottom). The page imports animate,
  aos, bootstrap-datepicker, flaticon (icon font), icomoon, ionicons,
  magnific-popup, owl.carousel, scrollax — the site is jQuery + Bootstrap 4 +
  Owl Carousel + AOS + scrollax parallax, NOT Tailwind. All interactivity
  (hero slider, hamburger overlay menu, testimonial carousel, scrollax
  parallax, request-quote modal) must be recreated client-side in React.
- **Screenshot note:** `look-free-template.jpg` (1200×946, viewed in the
  browser): dark moody hero with a large model portrait (dramatic makeup, red
  lips), logo "LOOK" thin sans top-left with "MODEL AGENCY" under it, "SUPER
  MODELS" in hot pink + model name "SAMANTHA LEWIS" white bold uppercase,
  stats row (Height 185 / Bust 79 / Waist 63 / Hips 89 / Shoe 40 / Eyes Blue /
  Hair Brunet), solid pink "Read more" + white-outline "View Gallery", a
  hamburger icon top-right and a vertical 1-4 slide indicator at the far right
  edge. Below the fold: split block — smiling model photo left (denim jacket),
  white bg right with "LOOK A MODEL AGENCY" black uppercase + lorem paragraph
  - pink-dot bullet list. The LIVE rendered preview was ALSO verified in a
    browser (dark hero slider, pink eyebrow + white name, pink Read more +
    outline View Gallery buttons, hamburger menu, model stats). The live preview
    DOM + parsed stylesheet are the authoritative reference.

### Section structure (from the live DOM, top to bottom)

1. `nav#colorlib-main-nav` (fullscreen overlay, `role="navigation"`) — opened
   by the hamburger toggle (`.colorlib-nav-toggle`, top-right, fixed):
   - Left panel: model photo (`images/bg_2.jpg` bg).
   - Right panel: `h1.logo` "Look" + `span` "Model Agency" (recreate brand as
     "Cameo" + "Model Agency"); 5 links with numbers: 01 Home, 02 About, 03
     Models, 04 Blog, 05 Contact — `li.active` link text + underline bar in
     `#f62a66`; hover underline slides in (`scaleX(1)` animation).
   - Toggle + overlay must be accessible (aria-expanded, aria-label).
2. `section.home-slider.owl-carousel` — full-width hero slider, 4
   `div.slider-item` (min-height 750px, inline `background-image` bg_1..bg_4
   - `.overlay` dark):
   * Each slide: `span.position` eyebrow (hot-pink, uppercase,
     letter-spacing 4px, weight 300) + `h1` model name (white, uppercase,
     mb-3) + `div.models-info` stats row (7 small stats: Height 185, Bust 79,
     Waist 40, Hips 87, Shoe 40, Eyes Blue, Hair Brunet — VARY per model:
     demo slides repeat "Brunet"/"Blue") + buttons `a.btn.btn-primary.px-4.py-3`
     "Read more" (solid pink) + `a.btn.btn-primary.btn-outline-primary.px-4.py-3`
     "View Gallery" (pink outline).
   * Owl dots: inactive `#999999` circles, ACTIVE dot `#f62a66`; hero text has
     scrollax translateY parallax on scroll (recreate as a simple client-side
     carousel with dots; parallax optional/cheap or omit — note deviation).
3. `section.ftco-section-2` — split about block (`.section-2-blocks-wrapper
d-flex row no-gutters`):
   - Left `div.img.col-md-6` — model photo (bg_5.jpg).
   - Right `div.text.col-md-6`: `h3.heading` "Look A Model Agency" (recreate
     as "Cameo — A Model Agency" or keep kind), `p` lorem with `<strong>`
     "creative" and "success" inline, `ul.my-4` with 3 checkmark items
     (pink `ion-ios-checkmark-circle` → lucide `CheckCircle2`): "Even the
     all-powerful Pointing", "Behind the word mountains", "Separated they
     live in Bookmarksgrove".
   - Below: second row — `div.img-2` (bg_1.jpg) with a play button
     (`ion-ios-play` → lucide `Play`) + `h3.watchvideo-heading` "Watch our
     video promo" link (demo links to vimeo — recreate as a decorative
     button/link, no embedded video).
4. `section.ftco-section-2` — "Our Tops Model's" band (`row d-flex no-gutters`):
   - First cell `col-md-6.bg-light` (light-gray, vertically centered):
     `h2` "Our Tops Model's" + intro `p` (lorem).
   - 8 `div.col-md-3.model-entry` cards (images image_1..image_8): each has
     `.model-img` (photo) with `.name` h3 overlay + `.text` h3 (same name) +
     `div.models-info` mini stats (Height 185 / Bust 79 / Waist 40 / Hips 87 /
     Shoe 40). Demo repeats "Coleen Husaff" on all 8 — VARY the 8 model
     names (same content kind).
   - Last cell `col-md-3.d-flex.justify-content-center.bg-light` — "View more"
     link/cell.
5. `section.ftco-section.testimony-section.img` — testimonial carousel on dark
   image bg (bg_7.jpg) + `.overlay`:
   - Centered `h2` "Clients Says" + `p` lorem.
   - `div.carousel-testimony.owl-carousel`, 4 `div.testimony-wrap.text-center`:
     quote (lorem) + `div.name` + `div.position`. Demo: "Mike Lewis" /
     "Architect", "Dennis Green" / "Architect" (repeated 3×) / "Customer" —
     VARY names/roles.
   - Owl dots: inactive `#999999`, active `#f62a66`.
6. `section.ftco-section-2` — services (`h3.heading` "Our services" + 4
   `div.services.d-flex` rows, icon + `div.info.ml-4` h3 + p):
   - `div.icon` (flex-centered icon box): flaticon-quality (→ lucide `Award`),
     flaticon-megaphone (→ lucide `Megaphone`), flaticon-shopping-bag (→
     lucide `ShoppingBag`), flaticon-photo-camera (→ lucide `Camera`).
   - Titles: "Fashion Shows" / "Corporate Events" / "Commercial Photo Shots" /
     "Exhibitions/Trade Shows Shows" (drop the duplicated "Shows" — VARY).
7. `section.ftco-section` — blog (`h2` "Recent Blog" + `p` lorem + 3
   `div.blog-entry` cards (image + meta "August 12, 2018 / Admin" + `h3`
   "Asia's Next Top Model" — demo repeats 3×, VARY titles/dates) + "View
   more" link.
8. `section.ftco-quote` — quote strip: `div.req-quote.py-5.align-items-center.img`
   (bg image bg_1.jpg + shadow `0px 18px 37px -28px rgba(0,0,0,0.75)`):
   `h3` "Wanna be a Model?" + `span` link "Call us now to know how!" (opens
   the request-quote modal).
9. `div.modal#modalRequest` — "Request a Quote" modal: form with Full Name
   (text), Email (text), Message/Phone (textarea), submit → success state
   (no backend).
10. `footer.ftco-footer.ftco-section.img` — background `#252525`, padding
    `7em 0`, dark overlay:
    - Widget 1 (col-md-3): brand `h2` "Look" (recreate as "Cameo") + pera `p`
      (lorem) + social icons (Twitter, Facebook, Instagram — icomoon glyphs →
      inline SVG brand paths; NO Colorlib attribution).
    - Widget 2 (col-md-4): `h2` "Recent Blog" + 2 `div.block-21` mini-posts
      (thumb image + title "Even the all-powerful Pointing has no control
      about" + meta "July 12, 2018 / Admin / 19" — VARY titles).
    - Widget 3 (col-md-2): `h2` "Site Links" — Home, About, Model, Services,
      Blog.
    - Widget 4 (col-md-3): `h2` "Have a Questions?": address "203 Fake St.
      Mountain View, San Francisco, California, USA" + phone "+2 392 3929
      210" + email "info@yourdomain.com" (display strings — spaced literals).
    - Copyright bar: "© All rights reserved | This template is made with ❤ by
      Colorlib" → recreate as "© 2026 Cameo — Model Agency · All rights
      reserved" + a mandatory Component Dock link
      (https://www.componentdock.com/, "Made with Component Dock") per
      conventions. NO Colorlib string in app code.

### Content (for copy paraphrase)

- Brand: "Cameo" + tagline "Model Agency" (nav logo + footer).
- Nav (overlay menu): numbered links 01 Home, 02 About, 03 Models, 04 Blog,
  05 Contact.
- Hero slider (4 slides): eyebrows "Top Model's" / "Model Agency" /
  "Super Model's" / "Photo Model's"; model names Kate Henderson, Samantha
  Lewis, Jessica Alba, Michael Buff; stats Height/Bust/Waist/Hips/Shoe/Eyes/
  Hair (vary values per model); "Read more" + "View Gallery".
- About: "Look A Model Agency" (→ "Cameo — A Model Agency"); lorem with
  creative/success; 3 checkmark bullets; "Watch our video promo".
- Top models: "Our Tops Model's"; 8 model cards (vary names + stats) +
  "View more".
- Testimonials: "Clients Says"; 4 quotes (vary names/roles).
- Services: "Our services"; Fashion Shows, Corporate Events, Commercial
  Photo Shots, Exhibitions/Trade Shows.
- Blog: "Recent Blog"; 3 entries (vary titles + dates) + "View more".
- Quote strip: "Wanna be a Model?" + "Call us now to know how!".
- Modal: "Request a Quote" form (Full Name, Email, Message + submit).
- Footer: brand + pera + social (Twitter/Facebook/Instagram); Recent Blog
  (2 mini-posts); Site Links (Home, About, Model, Services, Blog); "Have a
  Questions?" (address · phone · email); copyright bar + Component Dock link.

## Design tokens

| Token        | Value                   | Usage                                                                                                                                                 |
| ------------ | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand        | `#f62a66`               | hot pink: links, `.btn-primary` bg + border, hero eyebrow (`.position`), active owl-dot, active nav link + underline, hover states, checkmark bullets |
| accent       | `#79efb4`               | mint green (Bootstrap `--primary` var — the theme overrides real brand use to pink; minor/secondary accent only)                                      |
| ink          | `#000000`               | headings (h1–h5: Josefin Sans, weight 400, line-height 1.5)                                                                                           |
| body-text    | `#666666`               | body copy (theme `body`: Rubik 16px, line-height 1.8, weight 300)                                                                                     |
| muted        | `#999999`               | inactive owl-dots, secondary text                                                                                                                     |
| paper        | `#FFFFFF`               | about text column, blog cards, light cells' text surfaces                                                                                             |
| light        | `#f8f9fa`               | `bg-light` cells (top-models intro cell, "View more" cell)                                                                                            |
| dark         | `#252525`               | footer background (+ dark hero overlays on the slider/testimonial/quote bg images)                                                                    |
| white-on     | `rgba(255,255,255,0.8)` | hero slider paragraph / secondary text over images                                                                                                    |
| font-heading | "Josefin Sans"          | headings h1–h5 (400; hero h1 uppercase, ~40–60px)                                                                                                     |
| font-body    | "Rubik"                 | body + nav + buttons (300/400; 16px, line-height 1.8)                                                                                                 |

Radii: BUTTONS ARE SQUARE — `.btn` has `border-radius: 0px` (no rounding, no
shadow: `box-shadow: none !important`). Model cards / blog cards square.
Quote box shadow `0px 18px 37px -28px rgba(0,0,0,0.75)`. Spacing: hero slides
min-height 750px; `ftco-section` padding 7em 0; footer padding 7em 0;
no-gutters rows throughout (full-bleed columns).

## Requirements

### Requirement: Overlay navigation

The system SHALL render a hamburger-only fullscreen overlay navigation with a
brand, five numbered links, and an accessible toggle.

#### Scenario: Toggle opens the overlay

- **GIVEN** the Cameo app is rendered
- **WHEN** the user clicks the hamburger toggle (top-right)
- **THEN** a fullscreen overlay menu SHALL open with the brand "Cameo" +
  "Model Agency" tagline on the left and a model photo panel
- **AND** the toggle SHALL be accessible (aria-expanded, aria-label)

#### Scenario: Numbered links

- **GIVEN** the overlay menu is open
- **WHEN** the user inspects the links
- **THEN** the menu SHALL show 01 Home, 02 About, 03 Models, 04 Blog, 05
  Contact as anchors to their sections
- **AND** the active link SHALL be highlighted with `#f62a66` (text +
  underline bar)

#### Scenario: Close overlay

- **GIVEN** the overlay menu is open
- **WHEN** the user clicks a link or the toggle again
- **THEN** the overlay SHALL close

### Requirement: Hero slider

The system SHALL render a full-height hero slider with four model slides,
each with an eyebrow, a model name, stats, and two CTA buttons.

#### Scenario: Slide content

- **GIVEN** the hero section is rendered
- **WHEN** the user is at the top of the page
- **THEN** the slider SHALL show a full-width slide (min-height 750px) on a
  dark model-photo background with an overlay
- **AND** the slide SHALL contain a hot-pink uppercase eyebrow (e.g. "Top
  Model's"), a big white uppercase model name, and a stats row (Height,
  Bust, Waist, Hips, Shoe, Eyes, Hair)
- **AND** "Read more" (solid pink) and "View Gallery" (pink outline) buttons
  SHALL render

#### Scenario: Slide navigation

- **GIVEN** the hero slider has four slides
- **WHEN** the user clicks a pagination dot or a next/prev control
- **THEN** the visible slide SHALL change to the corresponding model
- **AND** the ACTIVE dot SHALL be `#f62a66` (inactive `#999999`)

### Requirement: About block

The system SHALL render a split about section with a photo, a heading, a
checkmark list, and a video-promo block.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show a model photo
- **AND** the right column SHALL show the heading (e.g. "Cameo — A Model
  Agency"), a paragraph with inline strong words, and a 3-item checkmark
  list with pink icons

#### Scenario: Video promo

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls past the checkmark list
- **THEN** a photo block with a play button and a "Watch our video promo"
  link SHALL render (decorative — no embedded video)

### Requirement: Top models

The system SHALL render a "Our Tops Model's" band with a light-gray intro
cell, eight model cards, and a "View more" cell.

#### Scenario: Model cards

- **GIVEN** the top-models band is rendered
- **WHEN** the user scrolls to it
- **THEN** the first cell SHALL be light-gray with the "Our Tops Model's"
  heading and an intro paragraph
- **AND** eight model cards SHALL render in a 4-column row, each with a
  photo, a name, and mini stats (Height, Bust, Waist, Hips, Shoe) — vary
  the 8 names/stats (demo repeats one)
- **AND** a final light-gray "View more" cell SHALL render

### Requirement: Testimonial carousel

The system SHALL render a testimonial carousel on a dark image background
with quote slides.

#### Scenario: Testimonial slides

- **GIVEN** the testimonial section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the "Clients Says" heading on a
  background image with a dark overlay
- **AND** a client-side carousel SHALL cycle 4 slides, each with a quote,
  a name, and a role (vary names/roles — demo repeats)
- **AND** the active dot SHALL be `#f62a66`

#### Scenario: Testimonial navigation

- **GIVEN** the testimonial carousel has multiple slides
- **WHEN** the user clicks a pagination dot
- **THEN** the visible quote SHALL change

### Requirement: Services

The system SHALL render a services section with four icon + title + blurb
rows.

#### Scenario: Service rows

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Our services"
- **AND** four rows SHALL render, each with a flex-centered icon box and a
  title + blurb: Fashion Shows, Corporate Events, Commercial Photo Shots,
  Exhibitions/Trade Shows

### Requirement: Blog

The system SHALL render a "Recent Blog" row with three post cards and a
"View more" link.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Recent Blog"
- **AND** three cards SHALL render, each with an image, a date + author
  meta, and a title (vary titles/dates — demo repeats one)
- **AND** a "View more" link SHALL render

### Requirement: Quote strip + modal

The system SHALL render a "Wanna be a Model?" quote strip whose call link
opens a "Request a Quote" modal form.

#### Scenario: Quote strip

- **GIVEN** the quote strip is rendered
- **WHEN** the user scrolls to it
- **THEN** a shadowed box on a background image SHALL show "Wanna be a
  Model?" and a "Call us now to know how!" link

#### Scenario: Request a Quote modal

- **GIVEN** the user clicks the "Call us now to know how!" link
- **WHEN** the modal opens
- **THEN** the modal SHALL be titled "Request a Quote"
- **AND** SHALL contain a form with Full Name, Email, Message, and a submit
  button

#### Scenario: Form submit

- **GIVEN** the modal form is filled
- **WHEN** the user submits
- **THEN** the form SHALL show a success state (no backend)

### Requirement: Footer

The system SHALL render a dark `#252525` footer with four widgets and a
copyright bar linking Component Dock.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** SHALL be brand "Cameo" + pera + social icons (Twitter, Facebook,
  Instagram), "Recent Blog" with 2 mini-posts (thumb + title + meta), "Site
  Links" (Home, About, Model, Services, Blog), and "Have a Questions?"
  (address, phone, email — display strings)

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar
- **WHEN** rendered
- **THEN** SHALL show "© 2026 Cameo — Model Agency · All rights reserved"
- **AND** SHALL link https://www.componentdock.com/ ("Component Dock")

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh cameo`)
- [ ] Design tokens from this spec applied in `@theme` (brand `#f62a66`,
      accent `#79efb4`, ink `#000000`, body-text `#666666`, muted `#999999`,
      paper `#FFFFFF`, light `#f8f9fa`, dark `#252525`)
- [ ] Josefin Sans (headings) + Rubik (body) loaded via Google Fonts `<link>`
      in index.html
- [ ] Section structure + order matches the live DOM 1:1 (overlay nav →
      hero slider → about block → top models → testimonial carousel →
      services → blog → quote strip → modal → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/cameo-<n>/<w>/<h>`
      (4 hero bgs, about photo, video-promo block, 8 model cards,
      testimonial bg, 3 blog cards, quote-strip bg, nav panel photo, footer
      thumbs); NO assets copied from ColorLib
- [ ] SQUARE buttons (border-radius 0, box-shadow none) — `.btn` is sharp in
      the reference; solid pink "Read more" + pink outline "View Gallery"
- [ ] Icons from lucide-react or inline SVG (CheckCircle2 bullets, Play,
      Award, Megaphone, ShoppingBag, Camera, social brand paths — Facebook/
      Twitter/Instagram are REMOVED from lucide-react; use inline SVG).
      Verify every lucide export with the typeof probe; NO fontawesome /
      ionicons / icomoon / flaticon
- [ ] Interactivity client-side only: hero slider, overlay menu, testimonial
      carousel, request-quote modal → success state (no jquery/owl/aos/
      scrollax)
- [ ] Footer phone/email rendered as display strings; any `tel:`/`mailto:`
      hrefs computed at runtime from spaced literals (tel-literal redaction
      pitfall — NEVER write `tel:+...` literals in source)
- [ ] Demo-repeated content varied (hero stats, 8 model names, testimonial
      names, blog titles, footer mini-post titles) — same kinds of content,
      no duplicated strings
- [ ] Video promo is decorative (no embedded vimeo); hero scrollax parallax
      optional — omit or implement cheaply (note deviation)
- [ ] Footer links Component Dock (https://www.componentdock.com/)
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark ALL 3 look rows `[x]` (lines 443, 1085, 1716) +
      surge URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (cameo.free.componentdock.com) returns 200
