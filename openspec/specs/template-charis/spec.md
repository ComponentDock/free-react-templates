# Template: Charis (Charity / Non-Profit Landing)

## Purpose

Charis is a charity / non-profit fundraising one-pager in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Lovecare" template design (see TEMPLATES.md — appears 2×:
lines 602 and 1276; both rows point to the same source and are `- [ ]` — one
prep covers both, mark ALL `[x]` when done; verified with
`grep -c 'wp/template/lovecare/'` = 2), built under a DIFFERENT name (Charis —
Greek for "grace / kindness / giving", fitting the template's charity theme
and its headline "Giving is the greatest act of grace"; single lowercase
word, no collision with `apps/` or existing spec folders; verified: no
`apps/charis`, no `template-charis` spec, no `docs/templates/charis`) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/lovecare/ (Charity category).
Preview URL: https://preview.colorlib.com/theme/lovecare/ (HTTP 200, ~47 KB
HTML + `css/style.css` ~84 KB fetched and parsed — the preview slug matches
the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Lovecare" — a warm, emotional non-profit/charity
  one-pager. A transparent navbar floats over a full-height hero photograph
  (a child at a window, dark and moody) with a dark teal→gold overlay. The
  hero text sits left on the dark part of the photo: gold-cursive-uppercase
  subheading "Raising Hope", a large white bold h1, a teal "Join Us" pill
  button and a "Watch the Video" play link. A dark-brown donation card
  (radius 10px) OVERLAPS the hero bottom-right (margin-top: -136px) with a
  dark-teal header strip ("$1,850,000 Funds raised by 1200 people" + gold
  "Donate Now" button), the h2 "Giving is the greatest act of grace" and a
  full donation form (name, email, cause select, amount, payment radios). To
  its left, the about block ("We Help Thousands of Children to Get Their
  Education") plus three gold-icon step cards (Start Donating, Join Our
  Community, Be A Volunteer). Below: a photo-band stats counter ($60M Fund
  Raised, 9200 Completed Projects, 5800 Donation, 2750 Volunteer), a
  light-sand causes carousel (4 cards: photo, category, title, progress bar,
  Raised/Goal), a full-width quote-CTA photo band ("The Smallest Act of
  Kindness is Worth More Than the Grandest Intention") with Donate
  Now!/Become A Volunteer buttons, a volunteer team grid (4 cards), a gold
  testimonial carousel, a "Do You Care Our Children?" donate CTA, a 3-card
  blog, and a very-dark-teal 3-column footer.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/lovecare/
  (HTTP 200, ~47 KB HTML; `css/style.css` ~84 KB parsed for tokens; inline
  `<style>` holds the "Patrick Hand" `@font-face`). The site is Bootstrap 5 +
  tiny-slider (causes + testimonial carousels) + glightbox (photo lightbox) +
  AOS (scroll animations) + rellax (hero parallax) + Font Awesome +
  ionicons + flaticon icon fonts, NOT Tailwind. All interactivity must be
  recreated client-side in React.
- **Screenshot note:** `lovecare-colorlib-template.jpg` (1200×946, viewed in
  the browser): hero split visually — left text over the dark image
  (white "Raising Hope" tagline, large white headline "To the Homeless &
  Hopeless People", rounded mustard-yellow "Join Us" pill button, "Watch the
  Video" play link); right side of the hero photo shows the child close-up;
  the dark-teal donation box overlaps the hero bottom edge with a header
  strip (hands-holding-heart icon + donor count + gold "Donate Now" button)
  and a form with light-grey inputs. Content below sits on a soft
  off-white/cream canvas; clean modern sans-serif type (Poppins). The live
  rendered page + parsed stylesheet are the authoritative reference.

### Design tokens (extracted from `css/style.css` + inline @font-face)

- **Brand gold:** `#d49a3a` — `.btn.btn-primary` fill, section subheadings
  (`.heading-section .subheading`: 14px, 600, uppercase, letter-spacing 1px),
  `.testimony-wrap` card bg, `.services-2 .icon` bg (80×80, radius 5px),
  hero h1 span highlight, `.navbar-brand small`, nav toggler hover. Hover
  pattern: transparent bg + gold text.
- **Dark teal:** `#0a686e` — `.btn.btn-secondary` fill, `.fund-raised` strip
  bg (donation card header); deeper teals `#0a4f53` (hero overlay gradient
  start), `#082729` / `#092729` / `#112d2e` (secondary overlay gradient).
- **Dark brown:** `#39311d` — `.fund-wrap` (donation card body) bg + hero
  overlay gradient end; `#042628` — footer bg (white text rgba(255,255,255,
  .9), padding 6em 0 0).
- **Sand / neutrals:** `#e9e4db` — `.causes-wrap` card bg; `#f3f0eb` /
  `#e0d8cb` — warm cream accents; Bootstrap `#f8f9fa`/`#e9ecef` light bgs
  (causes section is `bg-light`); muted `#6c757d`, `#212529` ink.
- **Fonts (Google Fonts `<link>` in index.html):** `"Poppins", Arial,
sans-serif` — body/headings (bold headings, weight 500/600 lines); accent
  `"Patrick Hand", cursive` — handwritten subheadings (hero "Raising Hope"
  and section subheadings use the script feel).
- **Buttons:** `.btn.btn-primary` — gold `#d49a3a` fill, white text, 1px
  gold border; hover → transparent, gold text. `.btn.btn-secondary` — teal
  `#0a686e` fill, white text, 1px teal border; hover → transparent, teal
  text. Sizes: `py-3 px-4`, `p-4 py-3`; donate submit is `rounded` (pill).
  Hero "Join Us" and CTA "Become A Volunteer" use `btn-secondary`;
  "Donate Now!" / "Donate Now" use `btn-primary`.
- **Hero:** `.hero-wrap.rellax` — height 100vh, cover bg photo
  (`images/bg_1.jpg`), `background-attachment: fixed` (static on mobile),
  overlay opacity .8 gradient `#0a4f53` → `#d49a3a` (teal → gold), z-index 0. Content: `col-lg-6` — white 18px subheading, white bold h1 (gold span
  highlight), `btn-secondary` "Join Us" + play-icon "Watch the Video" link.
- **Donation card:** `.fund-wrap` — bg `#39311d`, `border-radius: 10px`,
  `margin-top: -136px` (overlaps hero bottom), z-index 0; `.fund-raised`
  header — bg `#0a686e`, `padding: 20px 0 20px 50px`,
  `border-radius: 10px 10px 0 0`: icon-heart + "$1,850,000" + "Funds raised
  by 1200 people" + gold "Donate Now" button; body: subheading "Donate Now"
  (gold) + h2 "Giving is the greatest act of grace" + form.
- **Step cards:** `a.services-2` — white bg, padding 30px, radius 5px,
  centered, soft shadow; `.icon` 80×80 gold radius 5px (flaticon heart /
  donation / charity equivalents); `.text h2` title. Variants `color-2` /
  `color-3` recolor the icon block.
- **Stats band:** `.ftco-section-counter.img` — cover photo bg
  (`images/bg_3.jpg`), `heading-section-white`; 4 counters (flaticon-heart,
  flaticon-ecosystem, flaticon-donation, flaticon-charity): "$60M Fund
  Raised", "9200 Completed Projects", "5800 Donation", "2750 Volunteer" —
  client-side count-up on scroll.
- **Causes:** `.ftco-causes.ftco-section.bg-light` — sand cards
  `.causes-wrap` (bg `#e9e4db`, radius, overflow hidden): photo top
  (glightbox), category label (Education, Medical, …), h2 title ("Give Food
  to Homeless Children"), copy, progress bar (e.g. 70%), "Raised: $9,800"
  - "Goal: 15,000", Donate link. tiny-slider carousel of 4 cards.
- **Quote CTA band:** `.ftco-image.img` — cover photo (`images/bg_2.jpg`):
  gold subheading "Lovecare Charity", white h2 "The Smallest Act of Kindness
  is Worth More Than the Grandest Intention", `btn-primary` "Donate Now!" +
  `btn-secondary` "Become A Volunteer".
- **Volunteers:** white section, subheading "Meet Our Volunteer" + h2 "Our
  Volunteer"; 4 team cards: photo, h3 name, "Volunteer" role, short bio,
  social icons.
- **Testimonials:** `.testimony-section.img` — cover photo bg, fixed
  attachment; GOLD cards `.testimony-wrap` (bg `#d49a3a`, white text
  rgba(255,255,255,.9)): quote + avatar + name + role; 5 items in the DOM
  (tiny-slider carousel); e.g. Roger Scott — Marketing Manager.
- **Donate CTA:** `.ftco-section.ftco-no-pt.ftco-no-pb` — gold subheading
  "Welcome to LoveCare Non-Profit Charity", h2 "Do You Care Our Children?",
  copy, `btn-secondary py-3 px-4` "Be A Volunteer".
- **Blog:** white section, subheading "Our Blog" + h2 "Recent From Blog"; 3
  cards: photo, meta (Admin / Feb. 22, 2021 / 3 Comments), h3 title ("Give
  Hope to the People Need Most"), excerpt, "Read More" link.
- **Footer:** `.ftco-footer.img` bg `#042628`, white text; 3 columns —
  (1) brand "Love Care Charity Theme" + about copy + social icons
  (facebook, twitter, instagram, heart), (2) "Recent Posts" (2 posts with
  dates; fa-user / fa-calendar), (3) "Have a Questions?" (block-23: fa-map
  address, fa-phone phone, fa-paper-plane email). Bottom bar: "Copyright ©
  <year> All rights reserved | This template is made with ♥ by Colorlib" —
  the Colorlib credit is REPLACED with the mandatory Component Dock link.
- **Navbar:** transparent over hero (`.ftco-navbar-light`), brand
  "Love<small>Care</small> <span>Charity Theme</span>" (small gold, span
  white), links Home / About / Causes / Blog / Contact, mobile toggler
  (fa-bars) with client-side collapse.

### Section structure (from the live DOM, top to bottom)

1. `nav.navbar.ftco-navbar-light` (transparent over hero) — brand "Love Care
   Charity Theme"; links Home, About, Causes, Blog, Contact; mobile hamburger
   toggle (`aria-expanded`).
2. `section.hero-wrap.rellax` (bg photo `bg_1.jpg`, teal→gold overlay,
   `slider-text` col-lg-6): gold-cursive subheading "Raising Hope", white h1
   "To the Homeless & Hopeless People" (gold span highlight), `btn-secondary`
   "Join Us", play-icon link "Watch the Video".
3. `section.ftco-intro-wrap` — row g-lg-5:
   - RIGHT `col-md-5` donation card (`.fund-wrap` bg `#39311d`, radius 10,
     margin-top -136px): `.fund-raised` teal strip — icon + "$1,850,000"
     "Funds raised by 1200 people" + gold "Donate Now" button; subheading
     "Donate Now" + h2 "Giving is the greatest act of grace"; form: Full
     Name, Email, Select Causes (Food, Medical, Health, Education,
     Environment, Shelter/Home, Clothes, Other), "Amount to Give" + radio
     pills Paypal / Credit Card / Payoneer, submit "Donate Now"
     (`btn-primary py-3 px-4 rounded`) — zod validation + success state.
   - LEFT `col-md-7` about-wrap: subheading "Welcome to Lovecare Charity",
     h2 "We Help Thousands of Children to Get Their Education", copy; below:
     `row mt-5 g-md-3` with 3 step cards `a.services-2` (+ color-2/color-3):
     gold icon + title — "Start Donating", "Join Our Community", "Be A
     Volunteer".
4. `section.ftco-section-counter.img` (bg photo `bg_3.jpg`, white headings):
   subheading "Great Reviews for our services", h2 "Technical Statistics"; 4
   counters (icon + number + label): $60M Fund Raised, 9200 Completed
   Projects, 5800 Donation, 2750 Volunteer (count-up animation).
5. `section.ftco-causes.ftco-section.bg-light` — subheading "Our Causes",
   h2 "Our Causes & Help Us"; carousel of 4 `.causes-wrap` sand cards: photo
   (glightbox), category (Education, …), h2 "Give Food to Homeless
   Children", copy, progress bar 70%, "Raised: $9,800" / "Goal: 15,000",
   Donate link; client-side cycling.
6. `section.ftco-image.img` (bg photo `bg_2.jpg`): gold subheading "Lovecare
   Charity", white h2 "The Smallest Act of Kindness is Worth More Than the
   Grandest Intention", `btn-primary` "Donate Now!" + `btn-secondary`
   "Become A Volunteer".
7. `section.ftco-section` (white): subheading "Meet Our Volunteer", h2 "Our
   Volunteer"; 4 team cards — photo, h3 name, role "Volunteer", short bio,
   social icons (VARY names/bios).
8. `section.ftco-section.testimony-section.img` (bg photo, fixed): subheading
   "Testimonial", h2 "What People Says"; carousel of gold `.testimony-wrap`
   cards (bg `#d49a3a`, white text): quote + avatar + name + role (REWORD
   the demo's "Roger Scott / Marketing Manager" pattern — vary; no colorlib
   strings); client-side cycling.
9. `section.ftco-section.ftco-no-pt.ftco-no-pb`: subheading "Welcome to
   LoveCare Non-Profit Charity", h2 "Do You Care Our Children?", copy,
   `btn-secondary py-3 px-4` "Be A Volunteer".
10. `section.ftco-section` (white): subheading "Our Blog", h2 "Recent From
    Blog"; 3 blog cards — photo, meta (Admin / Feb. 22, 2021 / 3 Comments),
    h3 "Give Hope to the People Need Most" (VARY per card), excerpt, "Read
    More".
11. `footer.ftco-footer.img` (bg `#042628`): 3 columns — (1) brand "Love
    Care Charity Theme" + about copy + social icons (facebook, twitter,
    instagram, heart), (2) "Recent Posts" (2 posts + dates), (3) "Have a
    Questions?" (address "203 Fake St. Mountain View, San Francisco,
    California, USA", phone "+2 392 3929 210", email "info@yourdomain.com").
    Bottom bar: "Copyright © <year> All rights reserved" + "made with" credit
    — REPLACED with the mandatory Component Dock link
    (https://www.componentdock.com/).

## Requirements

### Requirement: Navbar (transparent over hero + mobile menu)

The system SHALL render a transparent navbar over the hero with the brand,
five nav links, and a responsive mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Charis app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand "Love Care Charity Theme" on the
  left (gold "Care" small + white "Charity Theme" caption)
- **AND** SHALL show the nav links Home, About, Causes, Blog, Contact
- **AND** the navbar SHALL sit transparently over the hero (turning solid /
  scrolled state optional but must stay readable)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrower than the desktop breakpoint
- **WHEN** the user opens the hamburger toggle
- **THEN** the nav SHALL be shown in a collapse panel with an
  `aria-expanded` toggle and the links SHALL remain usable

### Requirement: Hero

The system SHALL render a full-height hero with a photo background, a dark
teal→gold overlay, and the "Raising Hope" intro copy.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show a cover background photo (child-at-window
  scene) at full viewport height with a teal→gold overlay (opacity ~.8)
- **AND** SHALL show the subheading "Raising Hope", the white h1 "To the
  Homeless & Hopeless People" (with a gold highlight on part of the
  headline), a teal "Join Us" button, and a "Watch the Video" play-icon link

### Requirement: Donation card + form (overlapping the hero)

The system SHALL render the dark-brown donation card overlapping the hero
bottom with a teal header strip and a validated donation form.

#### Scenario: Donation card

- **GIVEN** the donation card is rendered
- **WHEN** the page loads
- **THEN** the card SHALL overlap the hero bottom (negative top margin),
  with a dark teal `#0a686e` header strip showing an icon, "$1,850,000",
  "Funds raised by 1200 people", and a gold "Donate Now" button
- **AND** the card body SHALL show the gold subheading "Donate Now", the h2
  "Giving is the greatest act of grace", and the form

#### Scenario: Donation form

- **GIVEN** the donation form is rendered
- **WHEN** the user fills it in
- **THEN** the form SHALL include Full Name, Email, a Select Causes dropdown
  (Food, Medical, Health, Education, Environment, Shelter/Home, Clothes,
  Other), an "Amount to Give" input, payment radio pills Paypal / Credit
  Card / Payoneer, and a gold "Donate Now" submit button
- **AND** SHALL validate required fields (zod) and show a success message on
  submit without navigating away

### Requirement: About + step cards

The system SHALL render the about block with the charity pitch and three
icon step cards.

#### Scenario: About layout

- **GIVEN** the about block is rendered
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show the gold subheading "Welcome to
  Lovecare Charity", the h2 "We Help Thousands of Children to Get Their
  Education", and a paragraph (paraphrase the lorem)
- **AND** SHALL show three step cards with gold icons and titles "Start
  Donating", "Join Our Community", "Be A Volunteer" (white cards, radius
  5px, soft shadow; color-2/color-3 icon variants)

### Requirement: Stats counter band

The system SHALL render a photo-background stats band with four animated
counters.

#### Scenario: Stats counters

- **GIVEN** the stats band is rendered
- **WHEN** the user scrolls it into view
- **THEN** the band SHALL show the subheading "Great Reviews for our
  services" and the white h2 "Technical Statistics" over a cover photo
- **AND** SHALL show four counters with icons — "$60M Fund Raised", "9200
  Completed Projects", "5800 Donation", "2750 Volunteer" — counting up
  client-side when scrolled into view

### Requirement: Causes carousel

The system SHALL render a light-background causes carousel with sand
donation cards.

#### Scenario: Cause cards

- **GIVEN** the causes section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the gold subheading "Our Causes" and the
  h2 "Our Causes & Help Us" on a light background
- **AND** SHALL show a carousel of at least 2 `.causes-wrap` cards (bg
  `#e9e4db`), each with a photo, a category label, a title (e.g. "Give Food
  to Homeless Children" — VARY), a short description, a progress bar (e.g.
  70%), "Raised: $9,800" / "Goal: 15,000", and a Donate link
- **AND** SHALL cycle client-side (arrows/dots)

### Requirement: Quote CTA band

The system SHALL render a full-width photo band with a quote and two CTA
buttons.

#### Scenario: Quote band content

- **GIVEN** the quote band is rendered
- **WHEN** the user scrolls to it
- **THEN** the band SHALL show a cover photo background with the gold
  subheading "Lovecare Charity" and the white h2 "The Smallest Act of
  Kindness is Worth More Than the Grandest Intention"
- **AND** SHALL show a gold "Donate Now!" button and a teal "Become A
  Volunteer" button

### Requirement: Volunteers section

The system SHALL render a volunteer team grid with four member cards.

#### Scenario: Volunteer cards

- **GIVEN** the volunteers section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the subheading "Meet Our Volunteer" and
  the h2 "Our Volunteer"
- **AND** SHALL show four cards, each with a photo, a name, the role
  "Volunteer", a short bio, and social icons (VARY the demo names/bios)

### Requirement: Testimonials carousel

The system SHALL render a photo-background testimonials carousel with gold
quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the subheading "Testimonial" and the h2
  "What People Says" over a cover photo background
- **AND** SHALL cycle through at least 2 gold cards (bg `#d49a3a`, white
  text), each with a quote, an avatar, a name, and a role line (REWORD the
  repeated demo pattern — no colorlib strings in app code)

### Requirement: Donate CTA section

The system SHALL render the "Do You Care Our Children?" donate CTA.

#### Scenario: CTA content

- **GIVEN** the donate CTA section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the gold subheading "Welcome to LoveCare
  Non-Profit Charity", the h2 "Do You Care Our Children?", a paragraph, and
  a teal "Be A Volunteer" button

### Requirement: Blog section

The system SHALL render a three-card recent-blog section.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the subheading "Our Blog" and the h2
  "Recent From Blog"
- **AND** SHALL show three cards, each with a photo, meta (author, date, 3
  Comments — VARY), a title, an excerpt, and a "Read More" link

### Requirement: Footer

The system SHALL render a three-column dark-teal footer with a bottom credit
bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL show three columns: brand "Love Care Charity
  Theme" + about copy + social icons (facebook, twitter, instagram, heart),
  "Recent Posts" (2 posts with dates), and "Have a Questions?" (address,
  phone, email)
- **AND** the bottom bar SHALL show the copyright line with the current
  year and a "made with" credit linking Component Dock
  (https://www.componentdock.com/) — the Colorlib credit is replaced

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh charis`)
- [ ] Design tokens from this spec applied in `@theme` (brand gold
      `#d49a3a`, teal `#0a686e`, deep teals `#0a4f53`/`#082729`, dark brown
      `#39311d`, footer `#042628`, sand `#e9e4db`, cream `#f3f0eb`)
- [ ] Poppins (400/600/700) + Patrick Hand (cursive subheadings) loaded via
      Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (navbar → hero →
      donation card + about/steps → stats band → causes carousel → quote CTA
      band → volunteers → testimonials → donate CTA → blog → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/charis-<n>/<w>/<h>`
      (hero bg, stats bg, 2 CTA band bgs, 4 cause photos, 4 volunteer
      photos, 3 blog photos, avatars); NO assets copied from ColorLib
- [ ] Buttons: `btn-primary` = gold `#d49a3a` fill / white text / 1px gold
      border (hover transparent + gold text) for "Donate Now"/"Donate
      Now!"; `btn-secondary` = teal `#0a686e` fill / white text / 1px teal
      border (hover transparent + teal text) for "Join Us", "Become A
      Volunteer", "Be A Volunteer"; submit uses `rounded` pill
- [ ] Donation card: `#39311d` body, radius 10, negative top margin overlap
      over hero; `#0a686e` header strip with icon + "$1,850,000 Funds raised
      by 1200 people" + gold "Donate Now" button
- [ ] Donation form: Full Name, Email, Select Causes (Food, Medical, Health,
      Education, Environment, Shelter/Home, Clothes, Other), Amount + radio
      pills Paypal / Credit Card / Payoneer, zod validation + success state
- [ ] Stats: 4 counters ($60M Fund Raised, 9200 Completed Projects, 5800
      Donation, 2750 Volunteer) with count-up on scroll-into-view
- [ ] Causes: sand cards `#e9e4db` with photo, category, title, progress bar
      (70%), "Raised: $9,800" / "Goal: 15,000", Donate link; client-side
      carousel (no tiny-slider)
- [ ] Testimonials: GOLD cards `#d49a3a` white text (quote + avatar + name +
      role), client-side carousel; demo roles reworded (NO colorlib strings)
- [ ] Icons from lucide-react (HeartHandshake/HandCoins/Users for step cards + hero, Heart/Donation for stats + fund strip, Play for "Watch the
      Video", Calendar/User/MessageSquare for blog meta, MapPin/Phone/Mail
      for footer contact, brand paths for socials). Verify every lucide
      export with the typeof probe; NO fontawesome / ionicons / flaticon
      icon fonts
- [ ] Interactivity client-side only: mobile menu, hero parallax (optional —
      use a simple fixed bg), counters, carousels, lightbox (optional —
      links can be plain), form validation (no jquery/tiny-slider/glightbox/
      aos/rellax)
- [ ] Footer phone/email rendered as display strings; any `tel:`/`mailto:`
      hrefs computed at runtime from spaced literals (tel-literal redaction
      pitfall — NEVER write `tel:+...` literals in source)
- [ ] Demo-repeated content varied (cause titles, volunteer names/bios,
      testimonial names/roles, blog posts) — same kinds of content, no
      duplicated strings
- [ ] Footer links Component Dock (https://www.componentdock.com/) —
      replaces the original "Colorlib" credit
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark BOTH lovecare rows `[x]` (lines 602, 1276) + surge
      URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (charis.free.componentdock.com) returns 200
