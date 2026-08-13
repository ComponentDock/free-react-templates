# Template: Giveback (Charity Landing)

## Purpose

Giveback is a single-page charity / non-profit landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Charitee" design (https://colorlib.com/wp/template/charitee/),
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a charity foundation page with a warm cream/white palette,
coral-red and teal accents, and a dark navy footer: a full-height hero slider
("Give a helping hand to those who need it!"), an upcoming-program highlight
("Donate vitamin B12 supply program"), an about split ("We are tender heart
charity foundation."), a row of three fundraising cause cards (Help the
ecosystems / Donate Vitamin B12 Program / View Savers In Deworm Program) with
Goal/Raised amounts, a "What we are doing" CTA split, a parallax "How we help
people" services band (Pure Food & Water, Health & Medicine, Education), a
"Latest Blog" card row, and a dark navy four-column footer with contact
details and a Support CTA. Giveback recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Charitee" — free charity website template
  (source: https://colorlib.com/wp/template/charitee/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/charitee/`
  (HTTP 200, 28.3KB) + stylesheet `assets/css/style.css` (56.5KB). The
  rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`charitee-colorlib-template.jpg`) confirms the visual design (light
  cream/white sections, coral + teal accents, dark navy footer).
- **Section order (1:1):**
  1. Header: transparent over the hero; logo left; nav (Home, Who we are?,
     Programs, About, Blog, Elements, Contact Us); right side "Call Us :
     0 (78) 675 3674" (dashed-underline phone) + coral "Make a Donation"
     button. Sticky header turns solid dark navy `#263B5C`.
  2. Hero slider: ~950px full-width background image (2 slides, slick
     carousel), kicker-free; H1 "Give a helping hand to those who need it!"
     (white, Jost 70px), supporting paragraph "When a child gets access to
     good food, it can change just about everything." (white 22px), teal CTA
     "Ongoing Programs".
  3. Upcoming Program strip (cream `#FCF2EB` bg, pt-60 pb-60): photo left
     (about1.jpg), text right: label "Upcoming Program", H2 "Donate vitamin
     B12 supply program", copy, coral "Donate Now" + outline "View Programs"
     buttons.
  4. About Us (white, section-padding): text left: label "About Us", H2 "We
     are tender heart charity foundation.", copy, coral "Discover More"
     button; photo right (about2.png).
  5. Cause cards (full-bleed row, 3 cards): photo, H3 title, copy, footer
     with "Goal $67,845" / "Raised $48,845" and a "Donate" button. Cards:
     Help the ecosystems, Donate Vitamin B12 Program, View Savers In Deworm
     Program.
  6. "What we are doing" (white, section-padding): photo left (about3.jpg),
     text right: label "Helping today", H2 "What we are doing", copy,
     outline "Join Us Today" button.
  7. Services "How we help people": full-width parallax background image
     (background-attachment: fixed), centered white heading (label "Helping
     today" + H2 "How we help people" in white), three icon cards (Pure Food
     & Water, Health & Medicine, Education) with SVG icons and white titles.
  8. Latest Blog (white): label "News", H2 "Latest Blog", three blog cards
     (slick slider) with photo, teal date badge (day + month), H3 title,
     copy, and a coral underlined "Read More" link.
  9. Footer (dark navy `#263B5C`): 4 columns — (1) logo + about blurb +
     social icons; (2) Navigation (Home, About, Services, Blog, Contact);
     (3) Contact Us (4486 Richards Avenue, Modesto CA - 95354 ·
     209-818-6041 · charity90@gmail.com); (4) Support (blurb + "Join Us
     Today" button). Bottom bar: copyright line (ColorLib attribution
     replaced with the Component Dock link per repo convention).
- **Design tokens extracted from `assets/css/style.css`:**
  - Brand color: **#F15B43** (coral — primary buttons, "Donate" CTAs,
    browse/Read More links).
  - Secondary accent: **#65C9BB** (teal/mint — hero CTA, section label
    spans, hover states, back-to-top, blog date badges).
  - Hover sweep: **#FF6F00** (orange — scaleX fill on `.btn` hover,
    submit button).
  - Headings / dark surfaces: **#263B5C** (navy — H1–H6, sticky header,
    footer).
  - Light section backgrounds: **#FCF2EB** (warm cream — upcoming program
    strip, slider area) on white sections; services band uses a fixed
    background image.
  - Body text: **#777** (Rubik, weight 300, line-height 1.6).
  - Fonts (Google Fonts via `@import`): **"Jost"** for headings (weights
    300–900), **"Rubik"** for body (weights 400–900).
  - Buttons: square corners (border-radius: 0); coral `.btn` with orange
    sweep hover (`::before` scaleX(0)→1); `.border-btn` = 2px coral outline
    that fills coral on hover; `.hero-btn` = teal filled; small card button
    `.btn_1` = coral, padding 11px 20px.
  - Section rhythm: `section-padding` 100px; strip padding 60px; section
    labels = 16px uppercase-ish teal spans above 46px Jost H2s.
  - Hero: `slider-height` 950px, cover bg image; caption H1 70px white Jost,
    paragraph 22px white Rubik 300.
- **Recreation decisions:** repo-standard Navbar (site name, section links,
  dark-mode toggle) + Footer chrome (Component Dock attribution); hero =
  full-height image band with seeded picsum photo and teal CTA; upcoming
  program + about + what-we-are-doing splits; cause cards with Goal/Raised
  figures and a Donate button (non-functional, links to contact); parallax
  services band with lucide icons; blog cards with date badge and Read More
  links; footer with contact details, nav links, Support CTA, and social
  icons; all images picsum-seeded (`picsum.photos/seed/giveback-N/w/h`);
  Google Fonts via `<link>`.

Giveback lives in `apps/giveback` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Giveback", a
"Home" link, section links, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Giveback page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Giveback" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show links for About, Causes, Services, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user opens the mobile menu
- **THEN** the section links SHALL be shown in a mobile navigation
- **AND** the menu SHALL close when a link is chosen

### Requirement: Hero

The system SHALL render a full-height hero band with a level-1 headline, a
supporting paragraph, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline "Give a helping hand to those who need it!"
- **AND** it SHALL show the supporting paragraph "When a child gets access to good food, it can change just about everything."
- **AND** it SHALL show an "Ongoing Programs" button linking to the causes section

### Requirement: Upcoming program

The system SHALL render an "Upcoming Program" strip with a photo, a heading,
and two call-to-action buttons.

#### Scenario: Upcoming program content

- **GIVEN** the page is rendered
- **WHEN** the upcoming program strip is displayed
- **THEN** it SHALL show the label "Upcoming Program" and the heading "Donate vitamin B12 supply program"
- **AND** it SHALL show a "Donate Now" button linking to the contact/footer section
- **AND** it SHALL show a "View Programs" button linking to the causes section

### Requirement: About section

The system SHALL render an about section with a heading, supporting copy, and
a "Discover More" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "We are tender heart charity foundation."
- **AND** it SHALL show at least one lead paragraph
- **AND** it SHALL show a "Discover More" button linking to the causes section

### Requirement: Causes

The system SHALL render a row of three fundraising cause cards, each with a
title, copy, goal/raised figures, and a donate button.

#### Scenario: Cause cards

- **GIVEN** the page is rendered
- **WHEN** the causes row is displayed
- **THEN** it SHALL render three cards (Help the ecosystems, Donate Vitamin B12 Program, View Savers In Deworm Program)
- **AND** each card SHALL show a goal amount, a raised amount, and a "Donate" button
- **AND** each card SHALL show a photo

### Requirement: What we are doing

The system SHALL render a "What we are doing" section with a photo, a label,
a heading, supporting copy, and a "Join Us Today" button.

#### Scenario: CTA section content

- **GIVEN** the page is rendered
- **WHEN** the "What we are doing" section is displayed
- **THEN** it SHALL show the label "Helping today" and the heading "What we are doing"
- **AND** it SHALL show at least one lead paragraph
- **AND** it SHALL show a "Join Us Today" button linking to the footer support section

### Requirement: Services

The system SHALL render a "How we help people" section with at least three
service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "How we help people"
- **AND** it SHALL render three service cards (Pure Food & Water, Health & Medicine, Education)
- **AND** each card SHALL show an icon and a title

### Requirement: Blog

The system SHALL render a "Latest Blog" section with three news cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest Blog"
- **AND** it SHALL render three cards, each with a photo, a title, and a "Read More" link
- **AND** each card SHALL show a date badge

### Requirement: Footer

The system SHALL render a footer with the site name, navigation links,
contact details, a support CTA, social links, and the Component Dock
attribution.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show navigation links (Home, About, Services, Blog, Contact)
- **AND** it SHALL show contact details (address, phone number, email)
- **AND** it SHALL show a "Join Us Today" support button
- **AND** it SHALL show social links (GitHub, X, LinkedIn)
- **AND** it SHALL link to `https://www.componentdock.com/` (Component Dock attribution)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Giveback app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Giveback — Charity Template"

## Verification checklist

- [ ] `openspec/specs/template-giveback/spec.md` exists on main with the full
      section list, Gherkin scenarios, and design tokens (this file).
- [ ] `docs/templates/giveback/tasks.md` exists on main with design notes and
      the implementation task outline.
- [ ] Fidelity: section order matches the Charitee preview DOM 1:1 (header →
      hero → upcoming program → about → causes → what we are doing →
      services → blog → footer).
- [ ] Tokens used in the app: coral `#F15B43`, teal `#65C9BB`, orange
      `#FF6F00`, navy `#263B5C`, cream `#FCF2EB`; Jost headings + Rubik body
      via Google Fonts `<link>`; square buttons (radius 0).
- [ ] No ColorLib references in `apps/giveback` (provenance lives in this
      spec, TEMPLATES.md, and the PR only).
- [ ] Footer links `https://www.componentdock.com/`.
- [ ] All images picsum-seeded (`picsum.photos/seed/giveback-N/w/h`).
- [ ] Implementer gate: `scripts/verify-app.sh giveback` (typecheck + lint +
      100% coverage tests + build) and `npm run spec:validate`.
