# Template: Dossier (Resume / CV / Personal Portfolio)

## Purpose

Dossier is a one-page resume / CV / personal-portfolio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Jackco" template design (TEMPLATES.md line 593), built under a
DIFFERENT name (Dossier — a résumé/CV is literally a dossier; single English
word, no collision with `apps/` or existing spec folders) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript, tests via Vitest +
Testing Library at 100% coverage.

Source: https://colorlib.com/wp/template/jackco/ (categories: Personal /
Resume; `jackco-colorlib-template.jpg` screenshot in TEMPLATES.md).
Preview URL: https://preview.colorlib.com/theme/jackco/ — HTTP 200, live
(fetched 2026-08-13, ~32 KB HTML, `<title>Resume | Template</title>`).

## Design reference (replication findings)

- **Original:** ColorLib "Jackco" — a bright-neon-green resume/CV one-pager
  for a fictional creative director ("Jack"). A transparent sticky header
  with a dark underline nav + an underlined serif "Fire me an Email" link; a
  `#5AFF80` green hero (900px) with a big serif h1 "Visual Design & Art
  Director" over a profile portrait and an outlined "Hire Me" button; an
  About section over a desk-photo background with a floating white card
  (small green "ABOUT MYSELF" label, 40px serif bio, solid-green "Download
  Resume" button, and 4 green progress bars: User Research / UI Design / Web
  Design / Illustration); a "My Expertise" section with a solid `#01FF56`
  green block (3 columns: User Experience Design / User Interface Design /
  Web Design) beside descriptive text; an Experience list (4 rows, title
  left, "March 2020 - Present · at Colorlib" + external-link icon right, rows
  divided by 1px `#E2E2E2` top borders); a split quote band on the same
  green (`visit-tailor-area`, photo left / quote right); an Education list
  (2 rows: Dalian University, School of California); a square-photo
  Instagram carousel strip; and a `#01FF56` green footer (serif bio, "Drop a
  Line" contact form — name/email/subject/message + dark "Send Message"
  button — "Contact Me" address/phone/email list, a second "Download
  Resume" link, circular social icons, copyright bar).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/jackco/
  (HTTP 200, ~32 KB HTML fetched; `assets/css/style.css` ~61 KB parsed for
  tokens). The page imports bootstrap.min, fontawesome-all, animate,
  magnific-popup, nice-select, owl.carousel, slick, slicknav, themify-icons
  — the site is jQuery + Bootstrap 4 + owl-carousel + slick + slicknav, NOT
  Tailwind. Section backgrounds are plain CSS (`slider-height` bg
  `#5AFF80`, `.experience` / `.visit-tailor-area` / `.footer-wrappr` bg
  `#01FF56`, About uses `section-img-bg2` = cover bg image) — recreate as
  Tailwind utilities + CSS background images.
- **Screenshot note:** `jackco-colorlib-template.jpg` MATCHES the live
  template: green hero with portrait on the right and the big serif title +
  outlined "Hire Me" left; floating white About card over a desk photo with
  the green "Download Resume" button and green progress bars; green
  "My Expertise" block; list-style Experience/Education rows; green quote
  band; green footer with the contact form. The live preview DOM + parsed
  stylesheet are the authoritative reference; the screenshot confirms the
  same design. (Source typos to be aware of: "User Reachers" and
  "Illustration Artiest" in the preview data — see Content notes.)

### Section structure (from the live DOM, top to bottom)

1. `header.header-area.header-transparent` > `div.main-header.header-sticky`
   (border-bottom 1px solid rgba(21,3,3,0.2), padding 0 88px):
   - Brand: logo image left (recreate as text brand "DOSSIER" — bold
     uppercase, ink `#150303`).
   - `nav` > `ul#navigation`: Home (`li.active`), About, Portfolio, Blog
     (dropdown: Blog / Blog Details / Elements), Contact; plus
     `li.header-right-btn` > `a.header-btn` "Fire me an Email" — Shippori
     Mincho serif, 20px, `#150303`, text-decoration underline (a text-link
     CTA, not a pill).
   - Mobile: slicknav → recreate as client-side hamburger menu.
2. `section.slider-area.gray-bg` > `div.slider-active` (carousel wrapper) >
   `div.single-slider.slider-height.d-flex.align-items-center` (height 900px,
   background-color `#5AFF80`):
   - Left: `h1` "Visual Design & Art Director" (serif, big) + `p` "Hi, I am
     Jack, focusing on creating emotional experiences." + `a.border-btn.hero-btn`
     "Hire Me" (outline button, padding 20px 70px — hero variant).
   - Right: profile portrait image (picsum portrait seed).
   - The slider is an owl-carousel in source; index.html has one slide —
     recreate as a static hero (no carousel needed).
3. `section.about-area.section-padding.section-img-bg2` (cover bg image —
   desk/workspace photo, e.g. picsum) > `div.about-wrappper` (bg `#fff`,
   padding 100px 100px, centered card):
   - Small green uppercase label "ABOUT MYSELF".
   - `div.about-caption` > `h2` (serif 40px/400) "I'm a Creative director
     based on New York, who loves clean, simple & unique design. I also
     enjoy crafting.."
   - `a.btn_02.mb-10` "Download Resume" — solid `#01FF56` bg, ink text,
     uppercase, padding 16px 44px.
   - `div.skill-ara` ×2 > `div.skill` > 4 × `div.single-skill` (mb 25px):
     green progress bars with labels USER REACHERS, UI DESIGN, WEB DESIGN,
     ILLUSTRATION (source typo "User Reachers" — paraphrase to "USER
     RESEARCH"; values ~90%/80%/75%/85% per screenshot).
   - Paragraph (Proin laoreet… — paraphrase).
4. `section.experience-top.section-padding` > `div.section-tittle.text-center.mb-45`
   "My Expertise" (h2 serif 40px/400) + `div.experience` (bg `#01FF56`,
   padding 60px 65px 20px):
   - 3 columns: h2 headings "User Experience Design", "User Interface
     Design", "Web Design" + descriptive paragraphs (Proin laoreet… —
     paraphrase; 2 paragraphs on the right column in source).
5. `section.may-about.bottom-padding` > `div.section-tittle.section-tittle2.mb-40`
   "Experience" (h2 serif 40px/400, left-aligned pl-30) + 4 ×
   `div.single-about` (border-top 1px solid `#E2E2E2`):
   - `div.tittle-experience` h4: "User Experience Designer" / "UI Designer"
     / "Illustration Artiest" (paraphrase → "Illustration Artist") /
     "Graphic Designer".
   - `div.experience-link` p (`#928888` 20px): "March 2020 - Present" + "at
     Colorlib" with an external-link icon (→ lucide ExternalLink; company
     names are placeholder text — paraphrase to invented studios).
   - Paragraph (Proin laoreet… — paraphrase).
6. `div.visit-tailor-area.fix` (display flex, align-items center, bg
   `#01FF56`):
   - Left `div.visit-team` (cover bg image `img/gallery/visit.jpg` → picsum
     working-person photo).
   - Right: serif quote "I help creative entrepreneurs build better
     businesses, maximize productivity, and cultivate an engaged community."
7. `section.may-about.section-padding` > "Education" (same section-tittle
   pattern) + 2 × `div.single-about`:
   - "User Experience Designer" — "March 2020 - Present · at Dalian
     University" (paraphrase university names).
   - "UI Designer" — "March 2020 - Present · at School of California".
8. `div.instagram-area.fix` > `div.instagram-active.owl-carousel` > 5-6 ×
   `div.single-instagram` (square photos, dark `#150303` overlay + icon on
   hover → lucide Instagram; recreate as a responsive row of square image
   tiles, no carousel dependency).
9. `div.footer-wrappr.footer-padding` (bg `#01FF56`) > `div.footer-top`:
   - Left: h2 serif "I'm a designer, based in San Francisco. Currently a
     freelancer. You can see my hobbies on @Jack-Co and some photos on me
     too." (paraphrase the bio).
   - `div.section-tittle.text-center.mb-45` > h4 "DROP A LINE" + `form`
     (inputs: Your name, Email, Subject; textarea Message; `button`
     "Send Message" — dark ink/`#150303` button with white text per
     screenshot; client-side validation + success state; inputs bg
     `#f9f9ff`, height ~50px, no border).
   - `div.footer-tittle` h4 (Chivo 20px `#150303` uppercase) "CONTACT ME" +
     list: address "4657 Franklin Avenue, ARCH CAPE", phone "+361-883-3218",
     email "hello@jac-co.com" (paraphrase contact details).
   - `a.border-btn` "Download Resume" (second copy).
   - `div.footer-social.pt-30`: circular icons Facebook / Instagram /
     LinkedIn (→ lucide Facebook/Instagram/Linkedin).
   - `div.footer-bottom-area` > `div.footer-border` > copyright
     "© All rights reserved | This template is made with ❤ by ColorLib" →
     recreate as "© 2026 Dossier · All rights reserved" with a "Made with
     Component Dock" link to https://www.componentdock.com/ (mandatory).
   - `a#back-top` "Go to Top" scroll-to-top link (optional).

### Content (for copy paraphrase)

- Header: brand "DOSSIER"; Home (active), About, Portfolio, Blog (+ Blog
  Details / Elements), Contact; "Fire me an Email" underlined serif CTA.
- Hero: "Visual Design & Art Director"; "Hi, I am Jack, focusing on creating
  emotional experiences."; "Hire Me".
- About: "ABOUT MYSELF"; bio "I'm a Creative director based on New York, who
  loves clean, simple & unique design. I also enjoy crafting.."; "Download
  Resume"; progress bars User Research / UI Design / Web Design /
  Illustration.
- My Expertise: User Experience Design / User Interface Design / Web Design.
- Experience (4): User Experience Designer, UI Designer, Illustration
  Artist, Graphic Designer — "March 2020 - Present · at <studio>".
- Quote: "I help creative entrepreneurs build better businesses, maximize
  productivity, and cultivate an engaged community."
- Education (2): User Experience Designer (Dalian University), UI Designer
  (School of California).
- Footer: freelancer bio; "DROP A LINE" form (name/email/subject/message +
  "Send Message"); "CONTACT ME" (address / phone / email); "Download
  Resume"; social icons; copyright + Component Dock link.
- All "Proin laoreet elementum…" filler paragraphs are Latin placeholder
  copy — paraphrase into real sentences of the same length/kind.

## Design tokens

| Token        | Value                    | Usage                                                                                                |
| ------------ | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| brand-green  | `#01FF56`                | `.experience` block bg, `.visit-tailor-area` bg, `.footer-wrappr` bg, `btn_02` solid button bg       |
| hero-green   | `#5AFF80`                | `.slider-height` hero background                                                                     |
| ink          | `#150303`                | headings/nav text, `.border-btn` border+text, `.header-btn` text, footer h4, instagram hover overlay |
| light        | `#f9f9ff`                | form input/textarea bg                                                                               |
| muted        | `#656565`                | `.section-tittle p` subtitle                                                                         |
| date-grey    | `#928888`                | `.experience-link p` (dates / "at Company")                                                          |
| divider      | `#E2E2E2`                | `.single-about` border-top row dividers                                                              |
| link-blue    | `#2845ba`                | link hover/accent (present in stylesheet; use for link hover states)                                 |
| purple-ink   | `#415094`                | secondary accent (stylesheet; optional for hover/visited states)                                     |
| font-heading | "Shippori Mincho", serif | h1/h2/h3 section titles, hero title, `.header-btn`, footer bio — 40px/400/1.3 for section-tittle h2  |
| font-body    | "Chivo", sans-serif      | nav, body copy, `.footer-tittle h4` (20px uppercase), form labels/inputs                             |

Radii: buttons are SQUARE (no radius — border-btn, btn_02, form inputs);
social icons are circular; instagram tiles are squares with a `#150303`
hover overlay. Spacing: `main-header` padding 0 88px + border-bottom
rgba(21,3,3,0.2); hero height 900px; `about-wrappper` padding 100px 100px;
`experience` padding 60px 65px 20px; `single-skill` mb 25px; `single-about`
border-top 1px divider; `.section-tittle h2` 40px/400/line-height 1.3;
`btn_02` padding 16px 44px uppercase; `border-btn` padding 15px 34px
uppercase; `hero-btn` padding 20px 70px; `experience-link p` 20px; footer
form inputs height ~50px bg `#f9f9ff`; container max-width ~1200px
(Bootstrap). Fonts via Google Fonts `<link>` in index.html (Chivo +
Shippori Mincho). Placeholder images: `https://picsum.photos/seed/dossier-<n>/<w>/<h>`
(portrait, desk/workspace, working-person, 6 instagram squares). Icons from
`lucide-react` (ExternalLink, Instagram, Facebook, Linkedin, ArrowUp,
Mail, MapPin, Phone, Send).

## Requirements

### Requirement: Header / Navigation

The system SHALL render a transparent sticky header over the hero with a
text brand, five nav links (Home active), and an underlined serif
"Fire me an Email" CTA.

#### Scenario: Brand and nav links

- **GIVEN** the Dossier app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL sit at the top with an ink text brand "DOSSIER"
- **AND** the nav SHALL list Home (active), About, Portfolio, Blog, and
  Contact
- **AND** the header SHALL show a bottom border in `rgba(21,3,3,0.2)`

#### Scenario: Fire me an Email CTA

- **GIVEN** the header is rendered
- **WHEN** the page loads
- **THEN** an underlined serif "Fire me an Email" link SHALL render at the
  right of the nav
- **AND** it SHALL scroll to / focus the contact form (anchor target)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger is activated
- **THEN** a mobile menu SHALL open listing the same nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a 900px `#5AFF80` green hero with a serif title, a
sub-line, an outlined "Hire Me" button, and a portrait.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL have a `#5AFF80` background and the h1 SHALL read
  "Visual Design & Art Director"
- **AND** a sub-line SHALL read "Hi, I am Jack, focusing on creating
  emotional experiences."
- **AND** an outlined "Hire Me" button (ink border, transparent bg,
  uppercase) SHALL render
- **AND** a portrait image SHALL render on the right side

### Requirement: About section

The system SHALL render the About section as a floating white card over a
photo background with a label, bio, solid-green Download button, and four
progress bars.

#### Scenario: About card

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** a white card (padding ~100px) SHALL sit over a cover photo
  background
- **AND** a small green uppercase label SHALL read "ABOUT MYSELF"
- **AND** a 40px serif h2 SHALL show the bio ("I'm a Creative director based
  on New York…")
- **AND** a solid-green uppercase "Download Resume" button SHALL render

#### Scenario: Skill progress bars

- **GIVEN** the about card is rendered
- **WHEN** the page loads
- **THEN** four labeled progress bars SHALL render: User Research, UI
  Design, Web Design, Illustration
- **AND** each SHALL show a green fill bar and a percentage value

### Requirement: My Expertise

The system SHALL render a "My Expertise" section with a solid `#01FF56`
green block listing three design disciplines beside descriptive text.

#### Scenario: Expertise block

- **GIVEN** the expertise section is rendered
- **WHEN** the page loads
- **THEN** a centered 40px serif h2 SHALL read "My Expertise"
- **AND** a `#01FF56` green block SHALL list "User Experience Design",
  "User Interface Design", and "Web Design"
- **AND** descriptive paragraphs SHALL render beside the block

### Requirement: Experience list

The system SHALL render an "Experience" section with four rows divided by
`#E2E2E2` top borders, each with a role title and date/company line.

#### Scenario: Experience rows

- **GIVEN** the experience section is rendered
- **WHEN** the page loads
- **THEN** the h2 SHALL read "Experience"
- **AND** four rows SHALL render: User Experience Designer, UI Designer,
  Illustration Artist, Graphic Designer
- **AND** each row SHALL show "March 2020 - Present · at <studio>" with an
  external-link icon and a blurb paragraph
- **AND** rows SHALL be separated by 1px `#E2E2E2` top borders

### Requirement: Quote band

The system SHALL render a `#01FF56` green split band with a photo on the
left and a serif quote on the right.

#### Scenario: Quote band content

- **GIVEN** the quote band is rendered
- **WHEN** the page loads
- **THEN** a cover photo SHALL render on the left of the green band
- **AND** the right side SHALL show the quote "I help creative
  entrepreneurs build better businesses, maximize productivity, and
  cultivate an engaged community."

### Requirement: Education list

The system SHALL render an "Education" section with two rows in the same
single-about pattern as Experience.

#### Scenario: Education rows

- **GIVEN** the education section is rendered
- **WHEN** the page loads
- **THEN** the h2 SHALL read "Education"
- **AND** two rows SHALL render: "User Experience Designer" (university A)
  and "UI Designer" (university B)
- **AND** each row SHALL show a date range and institution with an
  external-link icon

### Requirement: Instagram strip

The system SHALL render a strip of square photo tiles with a dark hover
overlay.

#### Scenario: Instagram tiles

- **GIVEN** the instagram section is rendered
- **WHEN** the page loads
- **THEN** at least five square image tiles SHALL render in a row
- **AND** hovering a tile SHALL show a `#150303` overlay with an Instagram
  icon

### Requirement: Footer / Contact

The system SHALL render a `#01FF56` green footer with a bio, a validated
"Drop a Line" contact form, contact details, a Download Resume link, social
icons, and the mandatory Component Dock link.

#### Scenario: Footer bio and form

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** a serif freelancer bio SHALL render on the left
- **AND** a "DROP A LINE" form SHALL render with fields Your name, Email,
  Subject, and Message plus a "Send Message" button
- **AND** submitting with invalid input SHALL show per-field errors and
  block submission
- **AND** submitting valid input SHALL show a success message

#### Scenario: Contact details and socials

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** a "CONTACT ME" block SHALL list an address, phone number, and
  email
- **AND** a second "Download Resume" button SHALL render
- **AND** circular Facebook, Instagram, and LinkedIn icons SHALL render

#### Scenario: Copyright and Component Dock link

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the copyright bar SHALL read "© 2026 Dossier · All rights
  reserved"
- **AND** it SHALL link to https://www.componentdock.com/ ("Made with
  Component Dock")
- **AND** no ColorLib attribution SHALL appear anywhere in the app

## Verification checklist

- [ ] Section order matches the source 1:1: header → hero → about →
      expertise → experience → quote band → education → instagram → footer.
- [ ] Brand tokens in `@theme`: brand-green `#01FF56`, hero-green `#5AFF80`,
      ink `#150303`, light `#f9f9ff`, muted `#656565`, date-grey `#928888`,
      divider `#E2E2E2`; fonts Chivo (body) + Shippori Mincho (headings).
- [ ] Buttons square-cornered: solid green `btn_02` (uppercase) and outlined
      `border-btn`; hero button extra padding; header CTA is an underlined
      serif text link.
- [ ] No ColorLib strings in any app file; provenance only in this spec,
      TEMPLATES.md, and the PR.
- [ ] Footer links https://www.componentdock.com/.
- [ ] Placeholder images via `picsum.photos/seed/dossier-<n>/…`; icons via
      lucide-react; fonts via Google Fonts `<link>`.
- [ ] `public/CNAME` = `dossier.free.componentdock.com`; package
      `@free-react-templates/dossier`.
- [ ] TDD: one `describe` per component, scenario-style `it` blocks matching
      the Gherkin above; 100% coverage (lines/functions/branches/statements).
- [ ] Per-app gate green: `scripts/verify-app.sh dossier`.
