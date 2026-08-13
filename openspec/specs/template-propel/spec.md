# Template: Propel (Business / Startup Corporate Website Template)

## Purpose

Propel is a single-page business / startup corporate landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Express" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Express" — clean, corporate business one-pager for
  a growth-focused agency ("We are here to grow your business"): hero over a
  photo with dark overlay, Startup / Best Company alternating media rows,
  5 numbered service cards, 4 blog post media rows, a contact form, two
  50/50 half-content CTA panels (Start Your Business / Grow Your Business),
  and a light footer (source: https://colorlib.com/wp/template/express/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/express/
  (HTTP 200, 28,772-byte HTML fetched; `css/style.css` 57 KB parsed for
  tokens). Bootstrap 5 + tiny-slider + AOS scroll animations + glightbox
  (video lightbox) + jQuery stack; no Tailwind. Brand in the preview:
  "Express" (logo white with a blue `.` accent).
- **Screenshot analyzed:** `express-free-template.jpg` (TEMPLATES.md,
  1200×946, viewed in the browser) — full-bleed photo hero (diverse team
  around a laptop, warm tones) under a dark overlay; white pill "SEE OUR
  SERVICES" button + "Watch the video" link; white "Express." logo and
  white nav (Home/Dropdown/Services/About/Blog/Contact) over the photo;
  below: centered "Startup" heading + paragraph + outlined "LEARN MORE",
  alternating text/image media rows, white service cards, blog rows, contact
  form. Matches the live preview 1:1.
- **Section order (1:1):** Navbar (`nav.site-nav`, absolute over hero,
  padding 20px 0): white "Express." logo (24px/700 Montserrat, `.` in blue
  `#0e49b5`) left, menu Home (active) / Dropdown (nested: Menu One, Menu Two
  → Sub Menu One/Two/Three, Menu Three) / Services / About / Blog / Contact
  Us right (links `rgba(255,255,255,0.7)` 14px, white on hover/active;
  mobile burger) → Hero (`div.hero.overlay`, full-viewport
  `height:100vh; min-height:700px`, `background-image: hero_1.jpg`,
  dark overlay `rgba(0,0,0,0.6)`): centered h1 "We are here to grow your
  business" (`.heading` 50px/700 white, 38px ≤991px), lead paragraph
  `text-white-50`, white pill button "See our services"
  (`.btn.btn-white`, white bg / black text, hover → blue bg) + "Watch the
  video" white link (glightbox → YouTube `mwtbEGNABWU`) → Startup section
  (`div.section`, padding 7rem top/bottom): centered `h2.heading` "Startup"
  (34px bold) + lead, then two alternating media rows
  (`row justify-content-between`, AOS fade-up):
  - Row 1: left `col-lg-5` `.box` (white bg, padding 40px): lead paragraph,
    paragraph, `ul.circle-style` list (3 links `#4a4a4a`) + right
    `col-lg-6`: white "Learn more" `btn-arrow` button (backspace arrow icon,
    rotated 180°) + `img_1.jpg` (`img-fluid rounded`);
  - Row 2: left `col-lg-6` `img_2.jpg` (`img-fluid rounded`) + right
    `col-lg-5 align-self-center`: `h3.heading-2` "Best Company" (24px) +
    paragraph + white "Learn more" `btn-arrow` → Services
    (`div.section.pt-0`): `h2.heading` "Services" + paragraph, then
    `row g-1 align-items-stretch` of **5 equal `.service` cards** (white bg,
    padding 30px 30px 90px, hover lift): `.number` "Service .01"…".05"
    (`#ccc` 12px uppercase bold, margin-bottom 30px) + `h3` 18px bold
    (Web Design / Graphic Design / Web Application / Expert Copywriting /
    Creative Branding, each with a `<br>` split) + backspace arrow icon
    absolute bottom-left rotated 180° → Blog Posts (`div.section.pt-0`,
    centered `h2.heading` "Blog Posts" + paragraph): 2 rows (`col-lg-12`)
    of `.feature-media d-block d-lg-flex` pairs — image div (25% flex,
    background-image `img_1..4.jpg`) + `.text` (white bg, padding 30px):
    `h3` 20px/700 link, `.post-meta` "#999" ("by Syrgey • 23 Aug 2020"),
    paragraph, underline "Learn more" link (`a.more`); image order
    alternates (`order-2` on row 2) → Contact (`div.section`): centered
    `h2.heading` "Contact" + paragraph, then `form.row.g-3.bg-white.p-4.p-md-5`
    with Name / Email / Subject inputs (3 columns) + full-width textarea
    ("Write your message") + submit "Send message" `.btn.btn-primary` →
    Half-content panels ×2 (`div.half-content d-block d-lg-flex`, each
    child 50%): panel 1 image left (`img_1.jpg`, cover) + `.text` right
    (padding 10%): `h2.fw-bold` "Start Your Business" + paragraph +
    `ul.list-check.primary` (3 items, blue `#0e49b5` check icons) + blue
    "Learn more" button; panel 2 image right (`order-lg-2`, `img_2.jpg`) +
    text left: "Grow Your Business" + same pattern → Footer (`div.site-footer`,
    bg `#efefef`, 14px `#888`, padding 70px 0): 4 widget columns —
    "About Foundation." (16px/700 `#000` h3 + paragraph, `.` blue) +
    "Connect" social icon row (6 icons: instagram, twitter, facebook,
    linkedin, pinterest, dribbble), "Links" (About us/Services/News/
    Careers/Contact), "Company" (same 5), "Contact" (address "43 Raymouth
    Rd. Baltemoer, London 3910", two `+1(123)-456-7890` phones, email
    `info@mydomain.com`); footer-bottom centered copyright (ColorLib credit
    replaced by Component Dock). Preloader (`#overlayer` + `.loader`
    spinner-border text-primary) after the footer.
- **Design tokens extracted from the preview CSS (`css/style.css`, Bootstrap
  5 overrides):**
  - Brand blue: **#0e49b5** (23 uses) — `.btn-primary` bg/border, `.text-primary`
    (logo dot, footer widget heading dot), `.list-check.primary` check
    color, footer `a` color; hover **#0c3e9a**, active **#0b3a91**; focus
    ring `rgba(14,73,181,0.25)`.
  - Body text: **#212529** (Bootstrap default), muted **#6c757d**; light
    grays **#f8f9fa**, **#efefef** (footer bg), **#f0f0f0**; service card
    number **#ccc**; post-meta **#999**; footer links **#777**; footer text
    **#888**; circle-style links **#4a4a4a**.
  - Fonts: **"Montserrat"** (headings h1–h5 + `.logo`, weights 300/700) and
    **"Open Sans"** (body, `--bs-font-sans-serif`). Source embeds via
    cf-fonts `@font-face` → use a Google Fonts `<link>` in `index.html`.
  - Buttons: `.btn` — padding **15px 30px**, border-radius **30px** (pill),
    text-transform uppercase, font-size 12px, weight 700, letter-spacing
    **.1rem**, no shadow on focus. `.btn-white` — bg `#fff`, color `#000`,
    hover → bg `#0e49b5` / color `#fff`. `.btn-primary` — bg `#0e49b5`,
    white text, hover `#0c3e9a`. `.btn-arrow` — padding-right 40px with the
    backspace arrow icon absolutely positioned right 20px, rotated 180°.
  - Hero: `100vh` / min-height 700px, bg image + overlay `rgba(0,0,0,0.6)`;
    `.heading` 50px/700 white (38px ≤991px); lead `text-white-50`.
  - Sections: `.section` padding **7rem** top/bottom; `h2.heading` **34px
    bold**, margin-bottom 30px; `h3.heading-2` **24px**.
  - Service card: bg `#fff`, padding **30px 30px 90px 30px**, hover lift
    (top: -5px transition .3s), `.number` `#ccc` 12px uppercase bold.
  - Blog `.feature-media`: children flex 25% (img) / 75% (text); `.text`
    white bg padding 30px; `h3` 20px/700; `.post-meta` `#999`; `.more`
    underline link.
  - Half-content: children 50% width (100% ≤991px, img fixed 400px
    height), `.text` padding **10%** (40px mobile).
  - Footer: bg `#efefef`, font 14px, color `#888`, padding 70px 0; widget
    `h3` 16px/700 `#000` margin-bottom 30px; links color `#777`; footer `a`
    color `#0e49b5`; `.social li` inline-block.
  - Form: `.bg-white.p-4.p-md-5` wrapper, Bootstrap `.form-control`
    (radius 0.25rem) — Name/Email/Subject in a 3-col row, textarea, blue
    "Send message" submit.
  - `.box`: white bg, padding 40px. `.list-check li`: 30px left padding,
    20px icomoon check icon, `.primary` variant colored `#0e49b5`.
    `.circle-style li a`: `#4a4a4a`.
- **Recreation decisions:** hero + media photos → seeded picsum
  (`propel-hero-1`, `propel-img-1..4` — screen for office/team/workspace
  subjects before pinning); "Watch the video" → inline video modal (YouTube
  embed ok, keep the white link style) or a styled modal with a
  representative image; service "backspace arrow" icons → `lucide-react`
  (e.g. `ArrowLeft` rotated or `CornerDownLeft`-style — probe every export
  with the typeof check); social icons → lucide-react (probe
  Instagram/Twitter/Facebook/Linkedin/Dribbble/Pinterest exports; fall back
  to inline SVG); fonts Montserrat (300/700) + Open Sans via Google Fonts
  `<link>`; tokens `#0e49b5` / `#0c3e9a` / `#0b3a91` / `#212529` /
  `#6c757d` / `#efefef` / `#f8f9fa` / `#f0f0f0` / `#ccc` / `#999` / `#777` /
  `#888` / `#4a4a4a` in `@theme`.

Propel lives in `apps/propel` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header + navigation

The system SHALL render an absolute, transparent-over-hero navbar with the
brand logo on the left and a nav menu on the right; on mobile the menu SHALL
be reachable via a burger toggle.

#### Scenario: Header content

- **GIVEN** the Propel page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Propel" on the left in white
  24px/700 with the trailing dot in brand blue (#0e49b5)
- **AND** the header SHALL show the nav links Home, Dropdown, Services,
  About, Blog, and Contact Us
- **AND** the nav links SHALL be light (rgba(255,255,255,0.7)) over the
  hero photo, turning white on hover and for the active (Home) link

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user activates the burger toggle
- **THEN** the nav links SHALL be reachable via a collapsible drawer with a
  solid background (aria-expanded toggled, tappable)

### Requirement: Hero

The system SHALL render a full-viewport hero with a photo background, a dark
overlay, the main headline, a lead paragraph, a white pill CTA button, and a
"Watch the video" link.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill the viewport (min-height 700px) with a photo
  background (seeded picsum) and a dark overlay (rgba(0,0,0,0.6))
- **AND** it SHALL show the headline "We are here to grow your business" in
  white 50px/700 (38px on mobile), centered
- **AND** it SHALL show a lead paragraph in semi-transparent white
- **AND** it SHALL show a white pill button labeled "See our services"
  (uppercase, radius 30px) that turns brand-blue on hover

#### Scenario: Video link

- **GIVEN** the hero is rendered
- **WHEN** the user activates the "Watch the video" link
- **THEN** a video modal SHALL open with a playable video embed (the source
  links a YouTube video — an inline modal with the embed is acceptable)

### Requirement: Startup / Best Company section

The system SHALL render a "Startup" section with a centered heading, two
alternating media rows (text + image), a bullet list, and white "Learn more"
buttons.

#### Scenario: Startup heading

- **GIVEN** the startup section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Startup" (34px bold) with a
  lead paragraph below it

#### Scenario: Alternating media rows

- **GIVEN** the startup section is rendered
- **WHEN** the page loads
- **THEN** row one SHALL place a white box (padding 40px) with a paragraph
  and a 3-item bullet list (circle-style) on the left and a rounded image
  plus a white "Learn more" arrow button on the right
- **AND** row two SHALL place a rounded image on the left and the heading
  "Best Company" (24px) with a paragraph and a white "Learn more" arrow
  button on the right
- **AND** the two rows SHALL alternate image side (row 1 text-left, row 2
  image-left) and stack on mobile

### Requirement: Services section

The system SHALL render a "Services" section with a heading and five
numbered service cards in a row.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the heading "Services" with a supporting
  paragraph
- **AND** it SHALL render five equal white cards in a row (stacking on
  mobile), each with a small uppercase gray number ("Service .01" through
  "Service .05") and a bold 18px title: Web Design, Graphic Design, Web
  Application, Expert Copywriting, Creative Branding
- **AND** each card SHALL show an arrow icon near its bottom-left corner and
  lift slightly on hover

### Requirement: Blog Posts section

The system SHALL render a "Blog Posts" section with two rows of two
alternating image/text post cards.

#### Scenario: Blog rows

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the centered heading "Blog Posts" with a
  supporting paragraph
- **AND** it SHALL render four post cards in two rows (image 25% / text
  75%, alternating sides), each with a cover image (seeded picsum), a bold
  20px title link, a gray post-meta line ("by <author> • <date>"), a
  paragraph, and an underlined "Learn more" link
- **AND** the post titles SHALL be distinct (the source repeats one title
  four times — never ship the repeated filler)

### Requirement: Contact section

The system SHALL render a "Contact" section with a centered heading and a
white contact form.

#### Scenario: Contact form

- **GIVEN** the contact section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the centered heading "Contact" with a
  supporting paragraph
- **AND** it SHALL render a white form with Name, Email, and Subject inputs
  in a three-column row, a full-width "Write your message" textarea, and a
  brand-blue "Send message" submit button

### Requirement: Half-content CTA panels

The system SHALL render two 50/50 half-content panels, "Start Your
Business" (image left) and "Grow Your Business" (image right), each with a
check list and a brand-blue button.

#### Scenario: Panel content

- **GIVEN** the half-content panels are rendered
- **WHEN** the page loads
- **THEN** panel one SHALL show a cover image on the left and, on the right
  (10% padding), the bold heading "Start Your Business", a paragraph, a
  3-item check list with brand-blue check icons, and a blue "Learn more"
  button
- **AND** panel two SHALL mirror the layout (image right, text left) with
  the heading "Grow Your Business"
- **AND** the panels SHALL stack on mobile (image 400px height)

### Requirement: Footer

The system SHALL render a light footer with four widget columns and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a light gray (#efefef) background and show
  four columns: "About Foundation." with a paragraph and a "Connect" social
  icon row; "Links"; "Company"; and "Contact" with an address, a phone, and
  an email
- **AND** the footer-bottom bar SHALL show a copyright line crediting
  Component Dock (https://www.componentdock.com/), with the brand name
  styled in blue (e.g. "Propel.")

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Propel app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections (Hero, Startup, Services, Blog Posts, Contact, Half-content
  panels) in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Propel — Business & Startup Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/propel` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- propel` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#0e49b5, #0c3e9a, #0b3a91, #212529, #6c757d, #efefef, #f8f9fa, #f0f0f0, #ccc, #999, #777, #888, #4a4a4a, Montserrat/Open Sans) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `propel-<n>`, Google Fonts links, lucide icons only)
