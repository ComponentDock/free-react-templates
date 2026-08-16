# Template: Websmith (Digital Agency)

## Purpose

Websmith is a digital-agency / web-studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Accent" template design (see TEMPLATES.md — appears 3×: lines
879, 2285, 2492; all three rows point to the same source, one prep covers
all; verified with `grep -c 'wp/template/accent/' TEMPLATES.md` = 3), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/accent/ (web studio / digital
agency one-pager)
Preview URL: https://preview.colorlib.com/theme/accent/

## Design reference (replication findings)

- **Original:** ColorLib "Accent" — digital agency / web studio one-pager
  (`<title>Accent Website Template by Colorlib</title>`). A split-hero
  studio site: sticky white navbar with scrollspy; full-viewport hero with
  intro text on the left over a right-anchored background-image slider (3
  photos, dark overlay, circular blue prev/next arrows); an about split with
  a check-list of services and a "Watch the video" play link; a "Meet The
  Team" duo; a light-gray "What We Do" band with 6 icon cards (50px blue
  circles, 2px blue top border, hover lift); a "Recent Works" project
  slider; an "Our Client Sayings" testimonial slider; a "Get In Touch"
  contact form; and a dark `#333` footer with newsletter signup. Bootstrap
  4 + owl-carousel 2 + AOS + fancybox + bootstrap-datepicker + icomoon &
  flaticon icon fonts, NOT Tailwind.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/accent/
  (HTTP 200, ~46 KB HTML fetched; `css/style.css` ~20.5 KB parsed for
  tokens; page also imports bootstrap.min.css, animate.css,
  owl.carousel.min.css, owl.theme.default.min.css, bootstrap-datepicker.css,
  flaticon.css, aos.css, jquery.fancybox.min.css; jQuery + owl-carousel +
  AOS + fancybox, NOT Tailwind). Font: `"Roboto", -apple-system,
BlinkMacSystemFont, "Segoe UI", ..., Arial, sans-serif` (no Google Fonts
  link in the preview — load Roboto from Google Fonts in the recreation:
  400;500;700;900).
- **Screenshot analyzed:** `accent-free-template.jpg` (1200×946, AVIF,
  browsed visually in the browser): white header with bold blue "Accent."
  wordmark and a hamburger icon top-right; hero photo of a workspace
  (laptop with code on a desk) under a dark overlay with a very large white
  bold headline, smaller white subtext, and a blue pill "Start a project"
  button; blue circular slider arrows on the right side of the hero image;
  below the fold a small gray uppercase "ABOUT US" label with a blue "We Are
  Expert In Web" heading over white; gray placeholder images for team/port-
  folio. The screenshot shows the image dominating the full hero width
  (the live DOM/CSS anchor it to the right 60% with the intro over it) —
  the live preview DOM + parsed stylesheet are authoritative.

### Design tokens (from `css/style.css` + computed styles)

| Token               | Value                                                                                                                                 | Where                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Accent blue (brand) | `#007bff`                                                                                                                             | icon circles (`#007bff` bg), service card 2px top border, active nav link, mobile menu active link, hero slider arrows, `ul-check.primary` icons |
| Primary button bg   | `#007bff` (white text)                                                                                                                | `.btn.btn-primary` (hover/focus/active: bg `#000` + border `#000`, white text)                                                                   |
| Ink (headings/text) | `#000`, `#212529`, `#333333`, `#343a40`                                                                                               | `h1..h6` color `#000`, nav links `#212529`, footer `#333333` bg + dark text variants                                                             |
| Muted gray          | `#b3b3b3` (eyebrow text, footer links), `#8c8c8c` (footer body text), `#999`                                                          | `.sub-title`, `.site-footer p`, `.site-footer a`                                                                                                 |
| Light section bg    | `#f8f9fa` (Bootstrap `bg-light`), `#f6f6f6`, `#ebeef0`                                                                                | `.site-section.bg-light` (What We Do + testimonials bands), various                                                                              |
| Card border         | `#eee` (1px), `#dee2e6`                                                                                                               | `.service` border; focus borders                                                                                                                 |
| Success green       | `#28a745`                                                                                                                             | `ul-check.success` icons                                                                                                                         |
| White               | `#fff`                                                                                                                                | hero intro text, button text, icon circles, mobile hero white overlay `.5`                                                                       |
| Footer bg           | `#333333` (padding-top 17rem), headings/links white / `#b3b3b3` (hover white)                                                         | `.site-footer`                                                                                                                                   |
| Overlays            | `rgba(0,0,0,.4)` (hero slide `:before`), `rgba(0,0,0,.6)` (cover), white `.5` (mobile)                                                | `.slide.overlay:before`, cover, hero on <992px                                                                                                   |
| Body font           | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`                                | `<body>` (all text)                                                                                                                              |
| Hero h1             | 8rem, weight 900, line-height 1, white; ≤767.98px: 4rem                                                                               | `.site-blocks-cover h1` / `.intro .heading h1`                                                                                                   |
| Hero sub-text       | 1.4rem, gray (`#000` on <992px)                                                                                                       | `.site-blocks-cover .sub-text`                                                                                                                   |
| Section eyebrow     | 1rem, uppercase, letter-spacing .2rem, weight 400, `#b3b3b3`                                                                          | `.section-title .sub-title` (e.g. "About Us", "What We Do")                                                                                      |
| Section title       | 2.2rem (bold black)                                                                                                                   | `.section-title .title`                                                                                                                          |
| Buttons (pill)      | radius 30px, border-width 2px; `.btn.btn-md` padding 14px 30px                                                                        | `.btn` base; hero + portfolio + contact "Send Message" use `btn-primary btn-md`                                                                  |
| Icon circle         | 50px, radius 50%, bg `#007bff`, white icon 1.3rem                                                                                     | `.service .icon` (flaticon glyph → lucide icon)                                                                                                  |
| Service card        | white bg, 1px `#eee` border, 2px `#007bff` top border; hover: top -2px, border transparent, shadow `0 10px 30px -10px rgba(0,0,0,.4)` | `.service`                                                                                                                                       |
| Hero slider arrows  | 50px circle, bg `#007bff`, white glyph 1.3rem; stacked, absolute `bottom: 120px; right: 50px` (right image column)                    | `.hero-slider .owl-nav .owl-prev/.owl-next`                                                                                                      |
| Team cards          | `col-lg-6` halves inside `col-lg-10.ml-auto`; photo `img-fluid mb-5` + name + role + 2 paragraphs                                     | `#about-section .person`                                                                                                                         |

### Section structure (from the live DOM, top to bottom)

1. `div.site-navbar-wrap` — sticky white navbar: brand "Accent **.**" (→
   "Websmith."), `ul.site-menu` links Home (`#home-section`), About Us, What
   We Do, Portfolio, Contact (scrollspy; `.active` = `#007bff`); right side
   `site-menu-toggle` hamburger (3 lines + uppercase `.menu-text` "MENU") →
   full off-canvas mobile menu (`site-mobile-menu`, close button, same links,
   `.active` blue).
2. `section.site-blocks-cover` (`#home-section`) — 100vh hero:
   - `.img-wrap` (absolute, right 60%, `z-index:-1`, overflow hidden): owl
     `hero-slider` — 3 slides (`hero_1.jpg`, `hero_2.jpg`, `hero_3.jpg`),
     each `slide.overlay` 100vh, `object-fit: cover`, overlay
     `rgba(0,0,0,.4)`; 2 blue circular arrows bottom-right (bottom 120px,
     right 50px, stacked 10px apart).
   - `.container .intro` (z-index 3, left ~40%): `.heading h1` "Accent Web
     Studio" (8rem/900/white), `.sub-text` "We are web studio in New York."
     - paragraph (white), `a.btn.btn-primary.btn-md` "Start a project".
   - <992px: image full-width with white overlay `.5`, sub-text `#000`.
3. `section.site-section` (`#about-section`) — about split:
   - `.col-lg-6`: large photo (source `images/hero_1.jpg`-style workspace
     photo — picsum seed screened for a workspace/desk scene).
   - `.col-lg-5.ml-auto.section-title`: eyebrow "About Us" + `h2.title` "We
     Are Expert In Web" + paragraph + `ul.ul-check.primary` 6 items: Design,
     Development, eCommerce, Mobile Apps, Copywriting, SEO (blue check
     icons) + "Watch the video" play link (fancybox vimeo — icon circle +
     uppercase-ish text; link may be non-functional in recreation).
   - "Meet The Team" (`col-lg-10.ml-auto`, 2 × `.col-lg-6.person`): team
     photo (`person_1.jpg`, `person_2.jpg`) + name + role:
     James Anderson — CEO, Co-Founder; Chris Peters — CTO, Co-Founder (+ 2
     paragraphs each in source; one each suffices).
4. `section.site-section.bg-light` (`#what-we-do-section`) — What We Do:
   - `.section-title.text-center`: eyebrow "What We Do" + title + intro
     paragraph.
   - 6 × `.col-md-6.col-lg-4` > `div.service.h-100`: 50px blue circle icon
     (flaticon → lucide: e.g. Palette/Monitor/AppWindow/Smartphone/PenTool/
     Search) + `h3` Web Design, Web Development, Web Apps, Mobile Apps,
     CopyWriting, Search Engine Optimization + blurb + "Learn more" link
     (uppercase `.readmore`).
5. `section.site-section` (`#portfolio-section`) — Recent Works:
   - `.section-title` eyebrow "Recent Works" (title + blurb).
   - owl `slide-one-item` portfolio slider, 3 slides ("Project title one" /
     "Project title two" / "Project title three"): each slide `row
align-items-center`: left `col-lg-6` info — `h2` title + paragraph +
     "Role: Design, Illustration, Web" + blockquote "Nice Looking Website Of
     Ours." — John Doe + `a.btn.btn-primary.btn-md` "Visit website"; right
     `col-lg-6` project photo (`project_1.jpg`, `project_2.jpg`, ...).
6. `section.site-section.bg-light` (2nd bg-light) — Testimonials: eyebrow
   "Testimonials" + `h2` "Our Client Sayings" + owl `slide-one-item`
   carousel of 4 identical slides: blockquote "Nice Looking Website Of
   Ours." + `cite` "John Doe" (paraphrase into 3 distinct quotes/authors);
   prev/next circular controls (`owl-nav`).
7. `section.site-section` (`#contact-section`) — Get In Touch: eyebrow
   "Get In Touch" + `h2` "Contact Us" + form (`.col-lg-7`-ish): First name,
   Last name, Email (`input.form-control`), Message (`textarea.form-control`
   rows 10) + `button.btn.btn-primary.btn-md` "Send Message".
8. `footer.site-footer` (bg `#333333`, padding-top 17rem) — 3 columns:
   - Brand col: `h2` "Accent" (→ "Websmith") + blurb.
   - "Navigation" col: Home, About Us, Privacy, Terms, Contact.
   - "Subscribe Newsletter" col: email input (`form-control border-white
text-white bg-transparent`, placeholder "Enter email") + `button.btn
.btn-primary.px-5` "Subscribe".
   - Bottom `p` copyright: ColorLib credit → Component Dock per AGENTS.md
     (https://www.componentdock.com/).

## Requirements

### Requirement: Navbar

The system SHALL render a sticky white navbar with a brand wordmark, five
scrollspy links, and a hamburger-driven off-canvas mobile menu.

#### Scenario: Desktop nav

- **GIVEN** the Websmith app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand wordmark "Websmith."
- **AND** SHALL show links Home, About Us, What We Do, Portfolio, and
  Contact (Roboto, dark `#212529` text on white)
- **AND** the active section's link SHALL be tinted with the accent blue
  `#007bff`

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger toggle is activated
- **THEN** an off-canvas panel SHALL open listing the same five links
  (active link blue `#007bff`)
- **AND** the panel SHALL close via the toggle, a close button, Escape, or
  a link click

### Requirement: Hero

The system SHALL render a full-viewport hero with intro text on the left
over a right-anchored sliding image with circular arrow controls and a pill
CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Websmith Web Studio" (white, 8rem/900 on
  desktop, 4rem on small screens)
- **AND** a sub-text line SHALL read "We are web studio in New York." with
  a short paragraph beneath (white)
- **AND** a pill CTA button SHALL render reading "Start a project" (blue
  `#007bff` bg, white text, radius 30px, 2px border; hover: black bg +
  black border)
- **AND** a slider of three background photos SHALL render anchored to the
  right ~60% with a dark overlay `rgba(0,0,0,.4)`
- **AND** two circular blue prev/next arrows SHALL cycle the slides
  (client-side state; wrapping)

#### Scenario: Mobile hero

- **GIVEN** a viewport below 992px
- **WHEN** the hero renders
- **THEN** the image SHALL span full width behind a white overlay at 50%
  opacity
- **AND** the sub-text SHALL switch to black `#000`

### Requirement: About

The system SHALL render an about split with a photo, an eyebrow + heading,
a blue-check service list, and a "Watch the video" play link.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the eyebrow SHALL read "About Us" (uppercase, letter-spacing
  .2rem, gray `#b3b3b3`) and the heading "We Are Expert In Web"
- **AND** a photo SHALL render on the left (picsum seed)
- **AND** a six-item list SHALL render with blue `#007bff` check icons:
  Design, Development, eCommerce, Mobile Apps, Copywriting, SEO
- **AND** a "Watch the video" link SHALL render with a circular play icon
  (accessible aria-label; link may be decorative)

### Requirement: Team

The system SHALL render a "Meet The Team" duo with photos, names, and
roles.

#### Scenario: Team members

- **GIVEN** the team block is rendered
- **WHEN** the page loads
- **THEN** two members SHALL render side by side, each with a photo, a
  name, and a role:
  James Anderson — CEO, Co-Founder; Chris Peters — CTO, Co-Founder
- **AND** each member SHALL have a short biography paragraph

### Requirement: Services

The system SHALL render six icon cards on the light-gray band, each with a
circular blue icon, title, blurb, and "Learn more" link.

#### Scenario: Service cards

- **GIVEN** the What We Do section is rendered
- **WHEN** the page loads
- **THEN** the eyebrow SHALL read "What We Do" (centered) and the section
  background SHALL be light gray `#f8f9fa`
- **AND** six cards SHALL render in a 3-column grid: Web Design, Web
  Development, Web Apps, Mobile Apps, CopyWriting, Search Engine
  Optimization
- **AND** each card SHALL show a 50px circular icon on `#007bff` with a
  white glyph, a 2px `#007bff` top border, and a "Learn more" link
  (uppercase)
- **AND** hovering a card SHALL lift it 2px and add shadow
  `0 10px 30px -10px rgba(0,0,0,.4)`

### Requirement: Portfolio

The system SHALL render a "Recent Works" project slider with three slides,
each with title, description, role line, quote, and a "Visit website"
button.

#### Scenario: Portfolio slides

- **GIVEN** the portfolio section is rendered
- **WHEN** the page loads
- **THEN** the eyebrow SHALL read "Recent Works"
- **AND** a slider SHALL cycle three projects ("Project Title One"/"Two"/
  "Three" — paraphrased project names), each with a description, a role
  line ("Role: Design, Illustration, Web"), a short client quote with
  attribution, and a blue pill "Visit website" button
- **AND** each slide SHALL include a project photo (picsum seed) opposite
  the text
- **AND** prev/next arrow controls SHALL move between slides

### Requirement: Testimonials

The system SHALL render an "Our Client Sayings" testimonial carousel on the
light-gray band with quotes, authors, and controls.

#### Scenario: Carousel content

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the eyebrow SHALL read "Testimonials" and the heading "Our
  Client Sayings"
- **AND** at least three slides SHALL exist, each with a quote and an
  author attribution (paraphrased, distinct names)
- **AND** prev/next arrow controls SHALL cycle the slides

### Requirement: Contact

The system SHALL render a "Get In Touch" section with a four-field contact
form and a "Send Message" submit button.

#### Scenario: Contact form

- **GIVEN** the contact section is rendered
- **WHEN** the page loads
- **THEN** the eyebrow SHALL read "Get In Touch" and the heading "Contact
  Us"
- **AND** fields SHALL render for First name, Last name, Email, and Message
  (textarea)
- **AND** a blue pill button SHALL read "Send Message" (submit)
- **AND** the form SHALL validate required fields before submitting

### Requirement: Footer

The system SHALL render a dark footer with brand, navigation links, a
newsletter signup, and the Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer background SHALL be `#333333` with white headings and
  gray `#8c8c8c` body text
- **AND** the brand column SHALL show the wordmark and an about excerpt
- **AND** the Navigation column SHALL list Home, About Us, Privacy, Terms,
  Contact
- **AND** the Subscribe column SHALL show an email input (transparent on
  the dark band) and a blue pill "Subscribe" button
- **AND** the bottom bar SHALL carry a copyright line crediting Component
  Dock (https://www.componentdock.com/) instead of ColorLib

### Requirement: Page composition

The system SHALL compose all sections on one page with proper landmarks and
a document title.

#### Scenario: Full page render

- **GIVEN** the Websmith app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, about, team, services,
  portfolio, testimonials, contact, and footer in order
- **AND** the document title SHALL be "Websmith — Digital Agency Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/websmith` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- websmith` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (`#007bff`, `#000`, `#212529`, `#333333`, `#343a40`, `#b3b3b3`, `#8c8c8c`, `#f8f9fa`, `#f6f6f6`, `#ebeef0`, `#eee`, `#dee2e6`, `#28a745`, `#fff`) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `websmith-<n>` screened for subject, Google Fonts Roboto link, lucide/inline-SVG icons only)
- [ ] Buttons are pills (radius 30px, 2px border): blue `#007bff` "Start a project" / "Visit website" / "Send Message" / "Subscribe" — hover/focus/active: black bg + black border
- [ ] Hero: 100vh, intro text left (white 8rem/900 heading, 4rem ≤767px), image slider right 60% with overlay `rgba(0,0,0,.4)`, 50px circular blue arrows bottom-right; mobile: full-width image + white `.5` overlay + black sub-text
- [ ] Services: light-gray `#f8f9fa` band, 6 cards, 50px blue icon circles, 2px blue top border, hover lift + shadow
- [ ] About: eyebrow + "We Are Expert In Web" + 6 blue-check items + "Watch the video" play link; team duo (James Anderson / Chris Peters) side-by-side
- [ ] Portfolio: 3 slides, role line + quote + "Visit website" pill; Testimonials: 3 distinct paraphrased quotes + authors; sliders implemented client-side (no owl-carousel dep)
- [ ] Contact form: First name / Last name / Email / Message + "Send Message"; validated
- [ ] Footer: `#333333` bg, Navigation list, newsletter input + Subscribe, bottom bar with Component Dock credit; no ColorLib references in app code
- [ ] No literal `tel:` URIs in source (runtime-computed if needed); MemoryStorage polyfill in `src/test/setup.ts` (jsdom 30 has no localStorage) only if localStorage is used (dark mode is NOT in this template — skip unless needed)
