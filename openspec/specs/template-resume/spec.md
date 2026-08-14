# Template: Resume (Portfolio — Personal Designer Portfolio)

## Purpose

Resume is a single-page personal portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free
"Personalportfolio" design (see TEMPLATES.md), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean, professional personal-portfolio site for a designer:
a sticky white header with a red "Get Free Consultent" CTA button, a full-height
hero slider ("I'm Designer Harper F. Watson") with a photo background, a coral-red
(#ec5b53) accent, dark-navy (#000a2d) serif headings (Rufina) on a Rubik
sans-serif body, a two-column about blurb, a three-card services row, a
tabbed portfolio mosaic (All / Branding / Logo / UI/UX / Web Design), a photo
CTA band ("Dont worry for contact i`m available"), a testimonial slider, a
contact form with contact details, and a dark navy (#080827) footer. Resume
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Personalportfolio" — personal portfolio website
  template (source: https://colorlib.com/wp/template/personalportfolio/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/personalportfolio/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (56KB) + Bootstrap 4 +
  Owl Carousel + Slick + Slicknav + Animated Headline + Magnific Popup + Nice
  Select + Font Awesome 5 + Themify + Flaticon extracted 2026-08-12 during
  prep). The TEMPLATES.md screenshot (`personalportfolio-free-template.jpeg`,
  1200×946, AVIF) was also viewed in the browser and confirms the design: a
  light-grey hero with a red tagline, a dark-blue serif headline, red "Learn
  More" + outlined "Hire Me" buttons and a smiling portrait photo on the right;
  white about section with two serif columns; red accents everywhere on a
  white/light-grey canvas; bold uppercase "PORTFOLIO" logo with a red
  geometric mark.
- **Section order (1:1):**
  1. Header (`.header-area`, sticky, white): logo left (red geometric mark +
     bold uppercase "PORTFOLIO" wordmark); centered nav — Home, About,
     Services, Portfolio, Page (dropdown: Blog, Blog Details, Element,
     Portfolio Details), Contact; right-side red `.btn.header-btn` "Get Free
     Consultent". Mobile: slicknav hamburger (collapsed menu with same links).
  2. Hero slider (`.slider-area` > `.slider-active`): 2 identical slides
     `.single-slider.slider-height` (photo bg `h1_hero.jpg`,
     `min-height: 1000px` desktop / 700px mobile, cover) — left column
     `.hero__caption`: eyebrow span "Get Every Single Solutions." (18px,
     uppercase, **#ec5b53**), h1 "I'm Designer Harper F. Watson" (70px,
     700, **#002d5b**), paragraph (grey placeholder copy), `.hero__btn`:
     red `.btn` "Learn More" + `.border-btn` "Hire Me" (1px solid #e3c6c6
     border, #464d65 text, radius 5px). Right side: portrait photo of the
     designer blending into the light background. Wavy separator line at the
     bottom of the hero.
  3. About (`.about-area section-paddingt30`): two text columns — left
     `.about-caption`: h3 "Designing With Passion While Exploring The World."
     (30px, 700, **#000a2d**) + two paragraphs; right `.about-caption2`: h3
     "Any Type Of Query & Discussion." + p "Late talk with me" + `.send-cv`
     link `hireme@portfolio.com` (35px, #000a2d, underlined) + arrow icon
     (themify `ti-arrow-right`).
  4. Services (`.categories-area section-padding3`; decorative shape
     background top-left): `.section-tittle` h2 "What Services you will Get
     from me!" (48px, 600, #000a2d) + 3 centered cards `.single-cat`
     (border 1px solid **#e1ebf7**, radius 6px, padding 61px 22px): `.cat-icon`
     100px circle, bg **#fff4f4**, icon 50px **#ec5b53** (flaticon-pen /
     flaticon-speaker / flaticon-portfolio), h5 link (UI/UX Design, Digital
     Marketing, Website Design) + description paragraph.
  5. Portfolio (`.services-area services-padding`): `.section-tittle` h2 "What
     Services you will Get from me!" + Bootstrap tab nav `.nav-tabs` — All,
     Branding, Logo, UI/UX, Web Design (2px bottom underline, active state in
     accent) + `.tab-content` with 5 panes; each pane is a mosaic grid of 6
     images (`services1.png`–`services6.png`; one `col-lg-8` large tile +
     stacked `col-lg-4` pair, full-width images, hover zoom/overlay).
  6. CTA band (`.wantToWork-area w-padding2`): photo background
     (`section_bg02.jpg`, cover); heading "Dont worry for contact i`m
available" (48px, 700, **#ec5b53**); red `.btn` "Contact Me Now".
  7. Testimonials (`.client-comments section-paddingt30`): `.section-tittle`
     h2 "Some Possitive Feedback That Encourage Us" + slider of 3 testimonial
     cards: photo, name "Bradley Erickson", role "UI/UX Designer", quote
     paragraph.
  8. Contact (`.contact-info-area w-padding2`, photo background
     `section_bg04.jpg` via `data-background`): h2 "If Not Now, When? Let's
     Work Together!" (48px, #000a2d) + paragraph + `.contact-form`: Full Name
     (text), Email Address (email), Your Message (textarea), "Send Message"
     button (`.submit-btn2`: full-width, height 60px, bg **#ec5b53**, white,
     16px) + contact-info block: `hireme@portfolio.com`, "221B Baker Street,
     Post office Box 353", "Park Road, USA - 215431".
  9. Footer (`.footer-area`, bg **#080827**): centered `.footer-top` — footer
     logo, email `hireme@portfolio.com` (50px, white), address lines;
     `.footer-bottom` — copyright "Copyright © All rights reserved | This
     template is made with ♥ by Colorlib" (text #393a50) + "Stay Connected"
     label + 4 circular social icons (color #848493).
  - Scroll-to-top button (`#back-top`): fixed 50px circle, bg **#ec5b53**,
    white arrow, bottom-right.
- **Design tokens extracted from `style.css` + computed styles:**
  - Primary brand **#ec5b53** (coral red) — `.btn` background (hero "Learn
    More", header "Get Free Consultent", "Contact Me Now"), `.submit-btn2`
    (Send Message), `.hero__caption span` (eyebrow), `.cat-icon` icon color,
    `.wantToWork-area` heading, `#back-top` scroll button.
  - Hero headline **#002d5b** (deep blue) — `.slider-area .hero__caption h1`
    70px / 700, mobile 60px.
  - Headings/body text **#000a2d** (dark navy) — body color, `.section-tittle
h2` 48px/600, `.about-area h3` 30px/700, `.send-cv a` 35px, `.contact-info`
    heading.
  - Secondary text **#999999** / **#888888** / **#464d65** (border-btn label);
    footer text **#393a50**, footer social **#848493**.
  - Light surfaces: **#f9f9ff** (hero/about tints), **#fff4f4** (icon circles),
    **#e1ebf7** (service card borders), **#e3c6c6** (border-btn outline),
    **#e7ebf2** (tab underline track), white sections.
  - Footer background **#080827** (very dark navy).
  - Fonts: **"Rubik", sans-serif** (nav, buttons, body — weights 300/400/500/
    700/900) + **"Rufina", serif** (headings — weights 400/700); Google Fonts
    via `<link>` in `index.html`.
  - Buttons: `.btn` — bg **#ec5b53**, white text, capitalize, Rubik, padding
    **27px 44px**, radius 0; `.border-btn` — 1px solid #e3c6c6, color #464d65,
    radius **5px**, padding 25px 57px, hover fills #ec5b53; `.submit-btn2` —
    full-width, height 60px, bg #ec5b53, white, 16px, radius 0.
  - Rhythm: `.slider-height` min-height 1000px (700px mobile); section paddings
    ~100px vertical (`.section-padding3` / `.w-padding2` style); `.single-cat`
    padding 61px 22px; `.cat-icon` 100×100px circle.
- **Visual design (screenshot `personalportfolio-free-template.jpeg`):** clean,
  professional, airy personal portfolio — light-grey hero with wavy separator,
  dark-blue serif headline, red accents (tagline, primary buttons, logo mark,
  icon circles), white content sections, outlined secondary button, portrait
  photo blending into the hero, bold uppercase black logo, minimal two-column
  about, centered service cards, tabbed image mosaic, photo CTA band,
  testimonial slider, dark-navy footer with centered contact details.
- **Recreation decisions:** all photos → seeded picsum placeholders
  (`picsum.photos/seed/resume-<n>/<w>/<h>`; hero bg `resume-studio`,
  portrait `picsum.photos/id/996`, CTA band `resume-city`, contact band
  `resume-handshake` — all browser-verified for the intended subject);
  flaticon / themify / Font Awesome icons → lucide-react (PenTool, Megaphone,
  Briefcase, ArrowRight, Mail, MapPin, Send, ChevronUp) + inline SVG brand
  icons (lucide-react dropped brand glyphs); Rubik + Rufina via Google Fonts
  `<link>`; hero slider → 2-slide auto-advancing crossfade; portfolio tabs →
  client-side tab switching of 5 mosaic panes (6 images each); testimonial
  slider → auto-advancing carousel of 3 cards; scroll to top → fixed circular
  button appearing after scroll; mobile nav → slide-down/hamburger panel with
  the same links; contact form → controlled fields with submit (front-end
  only); original copy paraphrased keeping the same content kinds; no assets
  copied. Deviations from the reference: hero designer name paraphrased to
  "Harper F. Watson" (the available picsum portrait is a woman; per skill,
  names are matched to available placeholder portraits), about/footer email
  uses `hireme@portfolio.com` (the source's `hire@colorlib.com` is not
  allowed in app code), and the footer copyright credit links Component Dock
  per repo convention.

Resume lives in `apps/resume` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header navigation

The system SHALL render a sticky white header with a logo, a centered
navigation menu with a Pages dropdown, and a red "Get Free Consultent" button
on the right.

#### Scenario: Header content

- **GIVEN** the Resume page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Resume" as a logo (geometric mark
  - uppercase wordmark) on the left
- **AND** it SHALL show centered nav links: Home, About, Services, Portfolio,
  Page, and Contact
- **AND** it SHALL show a red "Get Free Consultent" button on the right

#### Scenario: Pages dropdown

- **GIVEN** the header is rendered
- **WHEN** the user activates the Page link
- **THEN** a dropdown SHALL show its sub-links (Blog, Blog Details, Element,
  Portfolio Details)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user opens the menu
- **THEN** a hamburger menu SHALL expand to show the same nav links and the
  CTA button

### Requirement: Hero slider

The system SHALL render a full-height hero slider with two slides, each with a
photo background, an eyebrow tagline, a large headline, a paragraph, and two
buttons ("Learn More" filled red, "Hire Me" outlined).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the eyebrow "Get Every Single Solutions."
- **AND** it SHALL show the headline "I'm Designer Harper F. Watson" (dark blue,
  serif, ~70px)
- **AND** it SHALL show a short paragraph and two buttons: "Learn More" (red)
  and "Hire Me" (outlined)
- **AND** the hero SHALL show a portrait photo on the right

#### Scenario: Hero slider behavior

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the slides SHALL auto-advance (or transition on a timer) with the
  same content on both slides

### Requirement: About section

The system SHALL render a two-column about section: a heading with two
paragraphs on the left, and a query blurb with a contact email link on the
right.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** the left column SHALL show "Designing With Passion While Exploring
  The World." with two paragraphs
- **AND** the right column SHALL show "Any Type Of Query & Discussion.", the
  line "Late talk with me", and an underlined email link
  (`hireme@portfolio.com`) with an arrow icon

### Requirement: Services cards

The system SHALL render a services section with a heading and three centered
cards, each with a circular icon, a title link, and a description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "What Services you will Get from me!"
- **AND** it SHALL show three cards: "UI/UX Design", "Digital Marketing", and
  "Website Design"
- **AND** each card SHALL show a circular icon (accent color on a light
  #fff4f4 circle) and a description paragraph

### Requirement: Portfolio mosaic

The system SHALL render a portfolio section with a heading, filter tabs (All,
Branding, Logo, UI/UX, Web Design), and a tabbed mosaic grid of six images per
category.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show the heading "What Services you will Get from me!"
- **AND** it SHALL show filter tabs: All, Branding, Logo, UI/UX, and Web Design
- **AND** the active tab SHALL highlight with an accent underline

#### Scenario: Portfolio filtering

- **GIVEN** the portfolio section is displayed
- **WHEN** the user activates a tab
- **THEN** the mosaic grid SHALL switch to that category's six images (one
  large tile + a stacked pair, client-side)
- **AND** hovering an image SHALL show a zoom/overlay effect

### Requirement: CTA band

The system SHALL render a full-width call-to-action band with a photo
background, a large accent-colored heading, and a red button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the heading "Dont worry for contact i`m available"
  (accent red, ~48px)
- **AND** it SHALL show a red "Contact Me Now" button

### Requirement: Testimonial slider

The system SHALL render a testimonials section with a heading and a slider of
three testimonial cards, each with a photo, a name, a role, and a quote.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Some Possitive Feedback That Encourage
  Us"
- **AND** each slide SHALL show a photo, the name "Bradley Erickson", the role
  "UI/UX Designer", and a quote paragraph

#### Scenario: Testimonial slider behavior

- **GIVEN** the testimonials section is displayed
- **WHEN** the page loads
- **THEN** the testimonial cards SHALL advance (auto-slider or manual dots)

### Requirement: Contact section

The system SHALL render a contact section with a photo background, a heading, a
paragraph, a three-field contact form, and contact details.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "If Not Now, When? Let's Work Together!"
- **AND** it SHALL show a form with fields "Full Name", "Email Address",
  "Your Message", and a full-width red "Send Message" submit button
- **AND** it SHALL show contact details: `hireme@portfolio.com`, "221B Baker
  Street, Post office Box 353", "Park Road, USA - 215431"

#### Scenario: Form submit

- **GIVEN** the contact form is displayed
- **WHEN** the user fills the fields and submits
- **THEN** the form SHALL prevent default navigation and show a success state
  (or a front-end validation message on empty/invalid fields)

### Requirement: Footer

The system SHALL render a dark navy footer with a centered top block (logo,
email, address) and a bottom row with a copyright line crediting ColorLib and
"Stay Connected" social icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the footer logo, the email `hireme@portfolio.com`,
  and the address lines centered
- **AND** the bottom row SHALL show the copyright "Copyright © All rights
  reserved | This template is made with ♥ by Colorlib"
- **AND** it SHALL show a "Stay Connected" label with four social icons

### Requirement: Scroll-to-top button

The system SHALL show a fixed circular accent-colored scroll-to-top button that
appears after the user scrolls down and returns to the top when activated.

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user activates the circular button (bottom-right)
- **THEN** the page SHALL scroll back to the top

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Resume app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero slider, about, services,
  portfolio, CTA band, testimonials, contact, and footer in order
- **AND** the document title SHALL be "Resume — Personal Portfolio Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/resume`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/resume`)
- [ ] Section order matches the reference 1:1 (header → hero slider → about → services → portfolio → CTA band → testimonials → contact → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #ec5b53, hero headline #002d5b, text #000a2d/#999999, icon circle #fff4f4, card border #e1ebf7, footer #080827; Rubik + Rufina Google Fonts)
- [ ] Header: sticky white, logo + centered nav (Home/About/Services/Portfolio/Page dropdown/Contact) + red "Get Free Consultent" button, mobile hamburger menu
- [ ] Hero: full-height photo bg, eyebrow (#ec5b53), h1 "I'm Designer Harper F. Watson" (70px #002d5b), paragraph, "Learn More" red + "Hire Me" outlined buttons, portrait photo, 2-slide auto-advance
- [ ] About: left heading + 2 paragraphs; right "Any Type Of Query & Discussion." + "Late talk with me" + underlined hireme@portfolio.com link + arrow
- [ ] Services: heading + 3 cards (UI/UX Design, Digital Marketing, Website Design) with circular icon, title, description
- [ ] Portfolio: heading + tabs (All, Branding, Logo, UI/UX, Web Design) + 5 mosaic panes × 6 images, hover zoom
- [ ] CTA band: photo bg, "Dont worry for contact i`m available" (#ec5b53), "Contact Me Now" button
- [ ] Testimonials: heading + 3-slide slider (photo, name, role, quote)
- [ ] Contact: photo bg, heading, Full Name/Email Address/Your Message form + red "Send Message", contact details (email + address)
- [ ] Footer: #080827 bg, centered logo/email/address, ColorLib credit + "Stay Connected" social icons
- [ ] Scroll-to-top circular button appears on scroll and scrolls back to top
