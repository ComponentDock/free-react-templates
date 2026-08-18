# Template: Swatch (Personal Portfolio / Resume Template)

## Purpose

Swatch is a personal portfolio / resume one-pager in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Knuford"
template design (see TEMPLATES.md — appears 4×: lines 597 (Bootstrap 5), 2331
(One Page), 2402 (Personal) and 2716 (Resume); all four rows point to the same
source and are `- [ ]` — one prep covers all, mark ALL `[x]` when done; verified
with `grep -c 'wp/template/knuford/'` = 4), built under a DIFFERENT name
(Swatch — a designer's color swatch, fitting the web-designer portfolio;
matches the project's naming pattern: Shutterly, Hiredly, Shiply, Hoodly,
Roadly, Lendly) per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/knuford/ (Bootstrap 5 / One Page /
Personal / Resume categories; `<title>KnuFord - Web Designer & Developer
Portfolio</title>`).
Preview URL: https://preview.colorlib.com/theme/knuford/ (HTTP 200, ~44 KB
HTML fetched — the preview slug matches the TEMPLATES.md slug, no alias).

## Design reference (replication findings)

- **Original:** ColorLib "Knuford" — a bright, friendly personal portfolio
  one-pager for a web designer ("Keannu Ford"). Full-height hero on a LIGHT
  SKY-BLUE background (a light-blue image that embeds a waist-up cutout photo
  of a smiling man in a denim shirt pointing at the text) with a small
  "Hi There!" pill, a white headline with a rotating typewrite phrase, and two
  buttons (solid blue "Hire Me", white "View Portfolio"); a white About
  section with a photo left and an About Me / Skills / Experience TABBED panel
  right (progress bars + experience timeline); a services section with 3
  white cards (blue icon boxes) and a bottom CTA line; a photo-strip counter
  band with a BLUE `#0779e4` overlay; a 6-tile image portfolio; a light-gray
  testimonial carousel whose ACTIVE slide is highlighted blue; a light blog
  row; 3 pricing cards (big blue price numbers, middle one "Most Popular");
  a contact section with info boxes + form + social links + map; a solid-blue
  CTA strip ("Have any works you want to done by me?" + white outline
  "Contact Me"); and a light `#eeeeee` footer. The brand is BLUE `#0779e4`
  (buttons, icons, links, progress bars, counter overlay, price numbers, the
  footer brand mark) on white/light-gray canvas. Everything is one font:
  "Roboto" (300/400/700) via Google Fonts — the ONLY font family used.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/knuford/
  (HTTP 200, ~44 KB HTML; `css/style.css` ~307 KB parsed for tokens — it is a
  Bootstrap 5 build + the ftco theme overrides at the bottom of the file). The
  page imports bootstrap, swiper-bundle, glightbox, aos, flaticon (icon font),
  font-awesome 4.7 and ionicons 4.5.6 — the site is jQuery + Bootstrap 5 +
  Swiper + GLightbox + AOS + a typewrite effect, NOT Tailwind. All
  interactivity (typewrite hero text, tabs, swiper testimonials, counters,
  mobile menu, lightbox) must be recreated client-side in React.
- **Screenshot note:** `knuford-free-template.jpg` (1200×946, viewed in the
  browser): light-blue hero with subtle lighter-blue circular blob shapes, big
  white sans headline "I am Keannu Ford / A Web Designer", the man's photo
  right (pointing), white navbar with dark links (logo "Knuford"), about =
  two columns (photo arms-crossed left, "My Story" + tabs right with an
  underlined active tab). The LIVE rendered preview was ALSO verified in a
  browser (hero bg renders light sky-blue; "Hi There!" pale-blue pill above
  the white h1; HIRE ME navy-solid + VIEW PORTFOLIO white buttons with arrow
  icons; transparent light navbar over the hero that turns solid `#0779e4`
  on scroll). The live preview DOM + parsed stylesheet are the authoritative
  reference.

### Section structure (from the live DOM, top to bottom)

1. `nav#navbar.navbar.navbar-expand-lg.fixed-top.ftco-navbar-light`:
   - Brand text left — "Kn.Ford" (recreate as "Swatch"; a `span` in the brand
     is colored `#0779e4` in the footer variant).
   - 7 links: Home (#home, active), About (#about), Services (#services),
     Portfolio (#portfolio), Pricing (#pricing), Blog (#blog), Contact
     (#contactme) — right-aligned, dark text over the light hero.
   - Transparent/light at top; on scroll the bar gets `background-color:
#0779e4` with white links and the ACTIVE link gets `background: #3e9ff9`.
   - Mobile: `button.navbar-toggler` (Bootstrap collapse) → client-side
     hamburger menu with the same links (aria-expanded + aria-label).
2. `section#home.hero-wrap` — full viewport (`height: 100vh`), background
   image (`images/bg_1.avif` — a LIGHT SKY-BLUE image embedding the man's
   cutout photo; `.overlay` exists but has `opacity: 0` so the hero reads
   light, NOT dark):
   - `div.text.mt-5` (col-lg-7, AOS fade-up): `span.subheading` "Hi There!"
     (small pale-blue pill, dark text) → `h1.mb-4` "I am Keannu Ford" + a
     typewrite `span` rotating through "A Web Designer", "A Developer",
     "I Love Design.", "I Love to Develop." (hero h1: white, 60px/400,
     line-height 1.2) → `p` lorem (mb-4) → buttons `a.btn.btn-primary.p-4.py-3`
     "Hire Me" + `a.btn.btn-white.p-4.py-3.ms-lg-2` "View Portfolio" (each
     with a forward-arrow icon) → `p.social-media.mt-5`: Facebook, Twitter,
     Linkedin text links with icons.
3. `section#about.ftco-section` (white bg) — two columns:
   - Left: about photo (man with arms crossed — portrait pic).
   - Right: `ul.nav` tabs — "About Me" (active) / "Skills" / "Experience"
     (tab-pane content, client-side switching):
     - About Me panel: `h2.heading-section` "My Story" + `p` lorem + `h3`
       "I Do Web Design & Development since I was 18 Years Old" + `p` lorem.
     - Skills panel: 4 thin progress bars (`div.progress` height 8px,
       blue fill): Adobe Photoshop 80%, HTML / CSS 95%, Javascript 88%,
       WordPress 89% (each with a `%` label).
     - Experience panel: 3 `div.resume-wrap` timeline entries — role +
       years + company + blurb: "Art & Creative Director 2028-2029 Google
       Inc.", "Wordpress Developer 2029-2031 Google Inc.", "UI/UX Designer
       2031-2032 Google Inc." (the demo repeats "Google Inc." on all three —
       VARY the company names, keep the same content kind).
4. `section#services.ftco-section` — centered heading: `span.subheading`
   "Services" (blue, 13px) + `h2` "This is My Expertise, The Services I'll
   Provide My Clients" (40px/700); 3 `div.services-2` cards
   (col-sm-6 col-md-6 col-lg-4):
   - `div.icon` — 70×60 blue `#0779e4` icon box (flaticon glyph → lucide
     icon) + `h2` title + `p` lorem + `a` "Read more" link with a long-arrow
     icon.
   - Titles: "UI & UX Design" / "Web Development" / "Graphic Design".
   - Cards: white bg, padding 40px, border-radius 4px, subtle shadow
     `0px 5px 25px -2px rgba(0,0,0,0.01)`.
   - Below the cards, a centered row (col-md-8): `<p><strong>Have any works
you want to done by me? <a>Contact Me</a></strong></p>` + a `p` lorem.
5. `section.ftco-section-counter.img` — counter band: background image
   (`images/bg_3.avif`) + `.overlay` = `#0779e4` at opacity .9, padding 6em 0:
   - 3 `div.counter-wrap-2` counters (icon + big number + uppercase label):
     3000 HAPPY CUSTOMER / 320 PROJECT COMPLETED / 1000 CUPS OF COFFEE.
6. `section#portfolio.ftco-section.ftco-project` (white) — `span.subheading`
   "Portfolio" + `h2` "My Latest Work"; 6 `div.project.img.ftco-animate`
   image tiles (2 rows of 3): white `h3` "Branding & Illustration Design"
   over the image + `span` "WEB DESIGN" (uppercase, letter-spacing 2px,
   rgba(255,255,255,.8)) — hover overlay; the demo repeats the title on all
   6 tiles — VARY the 6 titles (same kind: design/portfolio categories).
7. `section.ftco-section.testimony-section.bg-light` — `span.subheading`
   "Testimonial" + `h2` "Our Successful Students"; a Swiper carousel
   (`div.swiper.carousel-testimony`, 5 `div.swiper-slide` slides, pagination +
   prev/next or slide buttons):
   - Each `div.testimony-wrap`: quote (lorem) + `div.user-img` round avatar +
     `div.name` + `div.position`. Demo: "Roger Scott" / "Marketing Manager"
     repeated 5× — VARY names/roles.
   - The ACTIVE (center) slide is highlighted: `background: #0779e4` with
     white text (`.testimony-section` CSS targets the active slide) — the
     swiper "centered slides" look with the middle card blue.
8. `section#blog.ftco-section.bg-light` — `span.subheading` "Our Blog" + `h2`
   "Recent From Blog"; 6 `div.blog-entry` cards (2 rows of 3, white):
   - Image (`div.user-img`) + meta `p` ("Jan. 18, 2032" + "3 Comments" link
     with icon) + `h3` "Tips About Creating A New Web Design" + blurb `p`.
   - The demo repeats the same title/meta 6× — VARY titles + dates/comment
     counts (same content kind).
9. `section#pricing.ftco-section` (white) — `span.subheading` "My Pricing" +
   `h2` "Flexible Packages" + `p` "Choose a plan that fits your project
   scope. All packages include direct communication and revision rounds.";
   3 `div.block-7` pricing cards (col-md-4, white, radius 8px, shadow
   `0px 24px 48px -13px rgba(0,0,0,0.05)`, padding 40px 0):
   - `span.heading-2` plan label — uppercase 14px/600 letter-spacing 1px:
     "STARTER" / "PROFESSIONAL" (middle card, "Most Popular" badge) /
     "ENTERPRISE".
   - Price: `sup` "$" (24px) + `span.number` (50px/600) `#0779e4` + "per
     project": $ 499 / $ 999 / $ 2,499.
   - Feature list (6 lines): Single page design / Multi-page website / Full
     web application, Mobile responsive, 2 / 5 / Unlimited revision rounds,
     Source files included, Custom animations, Priority support.
   - `a.btn.btn-primary` "GET STARTED" — uppercase, 600, letter-spacing 1px,
     width 60%, white on `#0779e4`.
10. `section#contactme.ftco-section.ftco-no-pb` — `h3` "Contact us" + `p`
    "We're open for any suggestion or just to have a chat":
    - Left column: 3 `div.dbox` contact info rows (icon + bold label + value):
      "My Address: 198 West 21th Street, Suite 721 New York NY 10016" /
      "My Email: info@yoursite.com" / "My Phone: + 1235 2355 98" (display
      strings only — compute any `tel:`/`mailto:` hrefs at runtime from
      spaced literals; see the tel-literal redaction pitfall).
    - Contact form (`div.form-group` ×5): Name (text), Email, Subject, Message
      (textarea), "Send Message" submit button (`btn-primary`) → success state
      (no backend).
    - Right/below: `h3` "Follow me here" + social links: Facebook, Twitter,
      Instagram, Dribbble (text + icons).
    - Google Maps iframe (replace with a decorative map placeholder or omit —
      note the deviation).
11. `section.ftco-intro.py-5.bg-primary` — CTA strip, solid `#0779e4`:
    left col (col-md-8) `h2` "Have any works you want to done by me?" (white,
    27px/500) + `p` "Far far away, behind the word mountains"; right col
    (col-md-4, border-left) `a.btn.btn-white.btn-outline-white.d-block.py-3`
    "Contact Me" (white outline button).
12. `footer.ftco-footer` — background `#eeeeee`, padding 5em 0 0:
    - Widget 1: brand "Kn.Ford" (22px `#111111`, `span` in `#0779e4`) +
      pera `p` (lorem) + social icons (Facebook/Twitter/Instagram).
    - Widget 2 `h2` "Services" (18px/500 `#111111`): Web Design, Web
      Development, Graphic Design, UI/UX Design.
    - Widget 3 `h2` "Have a Questions?": address "203 Fake St. Mountain View,
      San Francisco, California, USA" + phone "+2 392 3929 210" + email
      "info@yourdomain.com" (display strings — spaced literals).
    - Copyright bar: "© All rights reserved | This template is made with ❤ by
      Colorlib" → recreate as "© 2026 Swatch — Personal Portfolio · All
      rights reserved" + a mandatory Component Dock link
      (https://www.componentdock.com/, "Made with Component Dock") per
      conventions. NO Colorlib string in app code.

### Content (for copy paraphrase)

- Navbar: brand "Swatch"; Home, About, Services, Portfolio, Pricing, Blog,
  Contact.
- Hero: "Hi There!" pill; "I am Kendall Marsh" + typewrite ("A Web Designer",
  "A Developer", "I Love Design.", "I Love to Develop."); "Hire Me" +
  "View Portfolio"; Facebook / Twitter / Linkedin.
- About tabs: About Me ("My Story" + "I Do Web Design & Development since I
  was 18 Years Old"), Skills (4 bars 80/95/88/89), Experience (3 timeline
  entries — vary company names).
- Services: "This is My Expertise, The Services I'll Provide My Clients";
  UI & UX Design / Web Development / Graphic Design + "Read more"; CTA line
  "Have any works you want to done by me? [Contact Me]".
- Counters: 3000 Happy Customer / 320 Project Completed / 1000 Cups of
  Coffee.
- Portfolio: "My Latest Work"; 6 image tiles with title + "Web Design"
  category.
- Testimonial: "Our Successful Students"; 5 quotes (vary names/roles).
- Blog: "Recent From Blog"; 6 entries with date + comment count (vary).
- Pricing: "Flexible Packages"; Starter $499 / Professional $999 (Most
  Popular) / Enterprise $2,499; 6 features; "Get Started".
- Contact: "Contact us" + address/email/phone dbox rows + form (Name, Email,
  Subject, Message, Send Message) + "Follow me here" (Facebook, Twitter,
  Instagram, Dribbble).
- CTA strip: "Have any works you want to done by me?" + "Contact Me".
- Footer: brand + pera + social; Services (Web Design, Web Development,
  Graphic Design, UI/UX Design); "Have a Questions?" (address · phone ·
  email); copyright bar + Component Dock link.

## Design tokens

| Token      | Value                   | Usage                                                                                                                                                                                                                                           |
| ---------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand      | `#0779e4`               | primary blue: `.btn-primary` bg + border, links, service icon boxes (70×60), progress-bar fill, counter overlay (opacity .9), pricing price `sup`/`.number`, footer brand span, scrolled-navbar bg, intro-strip bg, active testimonial slide bg |
| brand-soft | `#3e9ff9`               | scrolled-navbar ACTIVE link background                                                                                                                                                                                                          |
| ink        | `#111111`               | dark text: footer brand + widget headings, hero `.overlay` color (opacity 0 in hero), footer headings                                                                                                                                           |
| body-text  | `#999999`               | body copy (theme `body`: Roboto 16px, line-height 1.8)                                                                                                                                                                                          |
| muted      | `#666666`               | footer widget links / secondary text                                                                                                                                                                                                            |
| paper      | `#FFFFFF`               | about / services cards / portfolio / pricing / blog cards / testimonial (non-active) cards                                                                                                                                                      |
| light      | `#f8f8f8`               | page background (`body` bg) + `bg-light` sections (testimonial, blog)                                                                                                                                                                           |
| footer-bg  | `#eeeeee`               | footer background                                                                                                                                                                                                                               |
| white-on   | `rgba(255,255,255,0.8)` | portfolio tile category spans, intro-strip body text                                                                                                                                                                                            |
| font       | "Roboto"                | the ONLY family (Google Fonts 300/400/700) — hero h1 60px/400, section h2 40px/700 (line-height 1.4; 30px ≤992px), block-7 price 50px/600, widget h2 18px/500                                                                                   |

Radii: services-2 cards 4px; block-7 pricing cards 8px; buttons Bootstrap
default (~6px, `.btn` radius). Hero buttons are large (`p-4 py-3`). Progress
bars 8px tall. Pricing "GET STARTED": uppercase, 600, letter-spacing 1px,
width 60%. Spacing: `ftco-section` default padding; counter band 6em 0; footer
padding 5em 0 0; services-2 cards padding 40px; block-7 padding 40px 0.

## Requirements

### Requirement: Navbar

The system SHALL render a fixed-top navigation bar with a brand, seven anchor
links, a scrolled solid-blue state, and a mobile hamburger menu.

#### Scenario: Brand and nav links

- **GIVEN** the Swatch app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL sit fixed at the top, transparent/light over the
  hero with dark text
- **AND** the brand SHALL read "Swatch" on the left
- **AND** the nav SHALL contain Home, About, Services, Portfolio, Pricing,
  Blog, Contact (anchors to their sections)

#### Scenario: Scrolled state

- **GIVEN** the user scrolls past the hero
- **WHEN** the page is scrolled
- **THEN** the navbar SHALL get a solid `#0779e4` background with white links
- **AND** the active link SHALL show a `#3e9ff9` background

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user taps the hamburger toggle
- **THEN** a menu with the same seven links SHALL open
- **AND** the toggle SHALL be accessible (aria-expanded, aria-label)

### Requirement: Hero

The system SHALL render a full-viewport hero on a light sky-blue background
with a "Hi There!" pill, a headline with rotating typewrite text, two CTA
buttons, and social links.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the user is at the top of the page
- **THEN** the section SHALL be full-viewport with a light sky-blue
  background treatment (flat light blue or a light-blue image; a portrait
  photo may sit on the right)
- **AND** a small "Hi There!" pill SHALL sit above the headline
- **AND** the h1 SHALL read "I am Kendall Marsh" (persona renamed to match
  the verified portrait placeholder; the demo persona "Keannu Ford" is
  paraphrased per the replication latitude) with a
  rotating typewrite phrase cycling through "A Web Designer", "A Developer",
  "I Love Design.", "I Love to Develop."
- **AND** a paragraph SHALL follow (paraphrased lorem)
- **AND** "Hire Me" (solid blue) and "View Portfolio" (white) buttons SHALL
  render with arrow icons
- **AND** Facebook, Twitter, Linkedin social links SHALL render

#### Scenario: Typewrite rotation

- **GIVEN** the hero headline renders a typewrite phrase
- **WHEN** the rotate interval elapses
- **THEN** the phrase SHALL change client-side to the next item in the list

### Requirement: About (tabs)

The system SHALL render an about section with a photo and a tabbed panel
(About Me / Skills / Experience) that switches content client-side.

#### Scenario: About Me tab (default)

- **GIVEN** the about section is rendered
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show a portrait photo
- **AND** the right column SHALL show tabs with "About Me" selected
- **AND** the panel SHALL show "My Story", a paragraph, "I Do Web Design &
  Development since I was 18 Years Old", and a paragraph

#### Scenario: Skills tab

- **GIVEN** the about tabs are visible
- **WHEN** the user selects "Skills"
- **THEN** four thin progress bars SHALL render — Adobe Photoshop 80%,
  HTML / CSS 95%, Javascript 88%, WordPress 89% — with blue fills

#### Scenario: Experience tab

- **GIVEN** the about tabs are visible
- **WHEN** the user selects "Experience"
- **THEN** three timeline entries SHALL render, each with a role, year
  range, company, and blurb (vary the demo's repeated company names)

### Requirement: Services

The system SHALL render a services section with three white cards (blue icon
boxes, title, blurb, "Read more") and a bottom CTA line.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "This is My Expertise, The Services I'll
  Provide My Clients" with a blue "Services" overline
- **AND** three cards SHALL show a 70×60 blue icon box, title (UI & UX
  Design / Web Development / Graphic Design), blurb, and a "Read more" link

#### Scenario: CTA line

- **GIVEN** the services section is rendered
- **WHEN** the user scrolls past the cards
- **THEN** a centered line SHALL read "Have any works you want to done by
  me?" with a "Contact Me" link, plus a paragraph

### Requirement: Counter band

The system SHALL render a photo strip with a blue overlay and three animated
counters.

#### Scenario: Counters

- **GIVEN** the counter band is rendered
- **WHEN** the user scrolls to it
- **THEN** the band SHALL show a background image with a `#0779e4` overlay
  (≈.9 opacity)
- **AND** three counters SHALL render: 3000 Happy Customer, 320 Project
  Completed, 1000 Cups of Coffee (icon + number + uppercase label)

### Requirement: Portfolio

The system SHALL render a 6-tile image portfolio grid with titles and a
"Web Design" category label on each tile.

#### Scenario: Portfolio tiles

- **GIVEN** the portfolio section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "My Latest Work" with a blue "Portfolio"
  overline
- **AND** six image tiles SHALL render in a 3-column grid, each with a white
  title and an uppercase "Web Design" category span (vary the titles — the
  demo repeats one)

### Requirement: Testimonial carousel

The system SHALL render a light-gray testimonial carousel whose active slide
is highlighted blue.

#### Scenario: Carousel slides

- **GIVEN** the testimonial section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Our Successful Students" with a blue
  "Testimonial" overline
- **AND** a client-side carousel SHALL cycle 5 slides, each with a quote, a
  round avatar, a name, and a role (vary names/roles)
- **AND** the active slide SHALL be highlighted with `#0779e4` background and
  white text

#### Scenario: Carousel navigation

- **GIVEN** the carousel has multiple slides
- **WHEN** the user clicks a pagination dot / slide button
- **THEN** the visible slide SHALL change and the active highlight SHALL move

### Requirement: Blog

The system SHALL render a light-gray blog section with six white post cards
(image, meta, title, blurb).

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Recent From Blog" with a blue "Our Blog"
  overline
- **AND** six cards SHALL render, each with an image, a date + comment-count
  meta, a title, and a blurb (vary titles/dates — the demo repeats one)

### Requirement: Pricing

The system SHALL render three pricing cards with blue prices, feature lists,
and "Get Started" buttons; the middle card SHALL be marked "Most Popular".

#### Scenario: Pricing cards

- **GIVEN** the pricing section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Flexible Packages" with a blue "My
  Pricing" overline and the intro line
- **AND** three cards SHALL render — Starter $ 499, Professional $ 999 (Most
  Popular), Enterprise $ 2,499 — each with a plan label, "per project", six
  feature lines, and a "Get Started" button

### Requirement: Contact

The system SHALL render a contact section with info rows, a form, social
links, and a map placeholder.

#### Scenario: Contact info + form

- **GIVEN** the contact section is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL read "Contact us" with the "We're open for any
  suggestion or just to have a chat" line
- **AND** three info rows SHALL render: My Address, My Email, My Phone
  (display strings, spaced literals only)
- **AND** a form SHALL render with Name, Email, Subject, Message, and "Send
  Message"

#### Scenario: Form submit

- **GIVEN** the contact form is rendered
- **WHEN** the user fills it and clicks "Send Message"
- **THEN** the form SHALL show a success state (no backend)

#### Scenario: Follow me here

- **GIVEN** the contact section is rendered
- **WHEN** the user scrolls to the bottom of it
- **THEN** "Follow me here" SHALL render with Facebook, Twitter, Instagram,
  Dribbble links

### Requirement: CTA strip

The system SHALL render a solid-blue CTA strip with a headline and a white
outline "Contact Me" button.

#### Scenario: CTA content

- **GIVEN** the CTA strip is rendered
- **WHEN** the user scrolls to it
- **THEN** the strip SHALL have a `#0779e4` background with the h2 "Have any
  works you want to done by me?" and a paragraph on the left
- **AND** a white outline "Contact Me" button SHALL render on the right
  (border-left divider)

### Requirement: Footer

The system SHALL render a `#eeeeee` footer with brand/pera/social, a Services
widget, a "Have a Questions?" widget, and a copyright bar with the Component
Dock link.

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** SHALL be brand "Swatch" (blue span accent) + pera + social icons,
  "Services" (Web Design, Web Development, Graphic Design, UI/UX Design), and
  "Have a Questions?" (address, phone, email — display strings)

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar
- **WHEN** rendered
- **THEN** SHALL show "© 2026 Swatch — Personal Portfolio · All rights
  reserved"
- **AND** SHALL link https://www.componentdock.com/ ("Component Dock")

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage` at
      100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh swatch`)
- [ ] Design tokens from this spec applied in `@theme` (brand `#0779e4`,
      brand-soft `#3e9ff9`, ink `#111111`, body-text `#999999`, muted
      `#666666`, paper `#FFFFFF`, light `#f8f8f8`, footer-bg `#eeeeee`)
- [ ] Roboto (300/400/700) loaded via Google Fonts `<link>` in index.html
      (the ONLY font family)
- [ ] Section structure + order matches the live DOM 1:1 (navbar → hero →
      about tabs → services → counter band → portfolio → testimonial carousel
      → blog → pricing → contact → CTA strip → footer)
- [ ] Placeholder images via `https://picsum.photos/seed/swatch-<n>/<w>/<h>`
      (hero background, about portrait, counter band bg, 6 portfolio tiles,
      5 testimonial avatars, 6 blog images); NO assets copied from ColorLib
      (bg_1.avif/bg_3.avif are NOT to be copied)
- [ ] Hero light treatment preserved: light sky-blue background (NOT a dark
      overlay — `.overlay` opacity is 0 in the reference) + optional right
      portrait; subject-critical seeds screened before pinning (picsum
      arbitrary-photo pitfall)
- [ ] Icons from lucide-react or inline SVG (service icons, arrows, contact
      icons, social icons — Facebook/Twitter/Instagram/Linkedin/Dribbble are
      REMOVED from lucide-react; use inline SVG brand paths). Verify every
      lucide export with the typeof probe; NO fontawesome / ionicons /
      flaticon
- [ ] Interactivity client-side only: typewrite text, about tabs, swiper
      testimonial carousel, counters, mobile menu, contact form → success
      state (no jquery/swiper/glightbox/aos)
- [ ] Contact phone/email rendered as display strings; any `tel:`/`mailto:`
      hrefs computed at runtime from spaced literals (tel-literal redaction
      pitfall — NEVER write `tel:+...` literals in source)
- [ ] Demo-repeated content varied (portfolio titles, blog titles, testimonial
      names, experience company names) — same kinds of content, no duplicated
      strings
- [ ] Google Maps iframe replaced (placeholder or omitted; note deviation)
- [ ] Footer links Component Dock (https://www.componentdock.com/)
- [ ] No colorlib.com / preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark ALL 4 knuford rows `[x]` (lines 597, 2331, 2402, 2716) + surge URL + readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge.sh workflow green + surge
      URL (swatch.free.componentdock.com) returns 200

## Implementation notes (2026-08-18, stream 1)

Completed per the TDD workflow on `feat/template-swatch` (PR #see bookkeeping).
Deviations and verified decisions vs. the reference, for the record:

- **Hero background recreated with pure CSS** (`.hero-sky` gradient from
  light sky-blue `#7ec9f7` to deep royal `#2f7fd8` + three pale `white/15`
  blob circles): the reference `images/bg_1.avif` is a gradient photo whose
  only photographic content is the man's cutout portrait — picsum has no
  reliable matching portrait (verified per the seed-screening pitfall), so
  the color treatment is preserved exactly and the person is dropped
  (spec allows flat light-blue with optional portrait). The headline stays
  WHITE over the deeper gradient stops, matching the screenshot.
- **Persona renamed to "Kendall Marsh"** to match the verified portrait
  placeholder `https://picsum.photos/id/1027/640/800` (documented female
  professional headshot) used in the About section — the demo persona name
  is paraphrased per the replication latitude (photo-match > name-match).
- **Portfolio tiles** use verified workspace/design photography IDs
  (picsum `/id/60, /id/8, /id/0, /id/180, /id/26, /id/48` at 800×600 —
  screened via the
  contact-sheet + vision method; dropped gaming/vintage/nature candidates
  96/1073/1041).
  1041, 1018, 20 at 800×500). Counter band bg = picsum id 1015 (blue fjord,
  complements the `#0779e4` overlay at 90%).
- **Testimonial avatars** are initials-in-circle chips (no picsum human
  avatar exists for all five; avoids cropped-face risk) — same kind of
  visual anchor as the reference round avatars.
- **Google Maps iframe omitted** (allowed deviation) — the contact section
  keeps the info rows + form + follow-me links in the content column.
- **Phone/email rendered as plain display strings** (no `tel:`/`mailto:`
  literals anywhere — tel-literal redaction pitfall).
- All interactivity is client-side React: typewriter hook, tab switching,
  counter interval animation (30 steps × 60ms, `Math.ceil` increment so
  every target is reached exactly), testimonial carousel with active-slide
  blue highlight + prev/next/dots, mobile menu, contact form success state.
- Iterated icons verified against the installed lucide-react exports
  (Palette, Code2, PenTool, Smile, Briefcase, Coffee, Check, X, Plus,
  ArrowRight, Menu, Quote, MapPin, Mail, Phone, Calendar, MessageCircle,
  ChevronLeft, ChevronRight).
