# Template: Ascent (Startup & Agency Landing)

## Purpose

Ascent is a single-page startup/agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Startup 2" website template design (see TEMPLATES.md, Bootstrap
category, line 503 — duplicate rows at lines 2089 and 2861 under other
categories, same template, one app only), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict).
No ColorLib references in app code — provenance lives in this spec,
TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Startup 2" — free startup & agency HTML template
  (page title "StartUp"; source: https://colorlib.com/wp/template/startup-2/).
  Structure: transparent header with nav + "Say Hello" CTA, a full-width hero
  slider (dark cover image + indigo overlay; headline + "Visit Our Works"
  CTA), a white Services section (label + heading + 3 bordered service cards),
  a dark (#1F1F1F) About section ("Empowering individuals"), a white
  Portfolio/Featured Works section (5 work cards, first one large), a light
  "How we work" section with a play button + "Watch Video", a white Team
  section (4 members with hover social icons), a dark cover-image Testimonials
  carousel (3 slides), a white "Get in Touch" contact form section, and a
  dark footer with logo, menu links, and social icons.
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/startup2/` — fetched
  (`/tmp/startup2-preview.html`, 32,498 bytes) plus the main stylesheet
  `css/style.css` (`/tmp/startup2-style.css`, 144,147 bytes) and analyzed for
  structure + tokens. Screenshot `startup2-free-template.jpg` (1200×946,
  TEMPLATES.md) viewed in the browser and cross-verified: the screenshot's
  hero (dark workspace photo, purple/black gradient overlay, white headline,
  purple pill CTA), the purple #615CFD brand color, and the Services section
  (purple label + 3 bordered cards) match the live DOM/CSS verbatim.
- **Visual design (screenshot + live DOM):** modern startup agency landing.
  Brand indigo #615CFD (CTAs, section labels, hover accents) on white with a
  dark #1F1F1F about band and a dark cover-image testimonial band. Headline
  font Roboto (section titles 40px, team names 20px), body font Muli.
  Buttons are flat indigo rectangles ("boxed-btn3" style: padding 12px 33px,
  radius 0/5px, hover swaps to transparent bg + indigo border). Service cards
  have a 2px #E8E8E8 border, 5px radius, and turn indigo-border on hover.

## Design tokens (from `css/style.css` of the live preview)

- **Brand indigo (primary):** `#615CFD` — `.boxed-btn3` background (CTAs),
  `.section_title span` label color, hover border/color on cards and buttons.
- **Dark ink:** `#1F1F1F` — `.about_area` background (dark band), heading
  color (`.section_title h3`, `.team_title h3`).
- **Border gray:** `#E8E8E8` — `.single_service` card border (2px).
- **Muted gray:** `#999999` — secondary body text, team roles.
- **Light tints:** `#f9f9ff` / `#f0e9ff` — light section backgrounds in the
  CSS (used sparingly; keep white as the main light background).
- **Accent orange:** `#ff5e13` — present in CSS palette (secondary accent;
  not prominent on the main page — optional hover accent).
- **Fonts:** `"Muli", sans-serif` (body), `"Roboto", sans-serif` (headings,
  section labels, team names). Load both via Google Fonts `<link>` in
  `index.html` (original font files NOT copied).
- **Buttons (`.boxed-btn3`):** `background: #615CFD; color: #fff;
padding: 12px 33px; font-family: "Muli", sans-serif;` hover:
  `border: 1px solid #615CFD; color: #615CFD; background: transparent;`
- **Section titles:** `.section_title span` 14px/500 Roboto, `#615CFD`,
  capitalized, above the heading; `.section_title h3` 40px/52px weight 400,
  `#1F1F1F`.
- **Service cards:** `.single_service` padding `48px 35px 45px`,
  `border: 2px solid #E8E8E8; border-radius: 5px; transition: 0.3s;`
  hover turns the border indigo.
- **Hero:** `.single_slider` height 900px, cover background image with a
  dark indigo/black gradient overlay (`.overlay`); headline white,
  left-aligned, wide column (col-lg-10).
- **About band:** `.about_area` `background: #1F1F1F` — dark section, white
  text (`.section_title.white_text`), text column right (justify-content-end
  with col-lg-5 offset-1), photo on the left.
- **Testimonials:** `.testimonial_area` padding `160px 0`, dark cover
  background image, white text; each slide: quote mark, paragraph, author
  thumb + name + role ("Business Owner").
- **Team:** 4-column grid (col-lg-3); photo card with a hover overlay of
  social icons (facebook/twitter/instagram); `.team_title h3` 20px Roboto
  `#1F1F1F` + gray role line.
- **Portfolio:** 5 work cards (first `col-lg-8` — large), each with a photo
  and a hover overlay showing a category label + title + "View" button.
- **Contact form:** 2-column row of text inputs (Your Name / Email /
  Subject), full-width Message textarea, "Send Message" indigo submit
  button; labels via placeholders.
- **Footer:** dark background; logo left, centered menu links (About,
  Services, Portfolio, Pages, Blog, Contact), social icons right.

## Requirements

### Requirement: Header and navbar

The system SHALL render a transparent-over-hero header bar spanning the full
width: brand wordmark on the left ("Ascent"), nav links (Home, Services,
Portfolio, Pages, Blog, Contact), and a "Say Hello" CTA button on the right
(indigo boxed button).

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the brand wordmark "Ascent", the nav links
  Home/Services/Portfolio/Pages/Blog/Contact, and a "Say Hello" CTA link

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the nav is collapsed
- **THEN** a mobile menu toggle is shown, and activating it expands the nav
  links on a dark panel

### Requirement: Hero

The system SHALL render a full-width hero with a dark cover image and an
indigo/black gradient overlay. The hero text column SHALL contain the
headline "Startup you can build a website online using the Bootstrap builder."
(reworded: "Launch a startup website online with a proven builder") and a
"Visit Our Works" indigo CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** it is inspected
- **THEN** it shows the hero headline and a "Visit Our Works" CTA button in
  the brand indigo color, with the dark overlay behind the text

### Requirement: Services

The system SHALL render a white section with the label "Services" and the
heading "With more than 20 years of experience we can deliver the best
product design." Below the heading a 3-column grid SHALL render three service
cards (Graphic design, Web design, Mobile app), each with a line icon, a
title, and a muted paragraph, in a 2px #E8E8E8 bordered card that turns
indigo-border on hover.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** it is inspected
- **THEN** it shows the label "Services", the section heading, and the three
  cards "Graphic design", "Web design", and "Mobile app", each with an icon,
  title, and body copy

### Requirement: About band

The system SHALL render a dark (#1F1F1F) section with a photo on the left and
a right text column: label "About Us" (white), heading "Empowering
individuals", two paragraphs (the second a short quote), and an "About Us"
indigo button.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** it is inspected
- **THEN** it shows the label "About Us", the heading "Empowering
  individuals", the supporting paragraphs, and an "About Us" button, on the
  dark background

### Requirement: Portfolio / Featured Works

The system SHALL render a white section titled "Featured Works" with a muted
supporting paragraph and a 5-item work grid (first item spanning two columns
on desktop). Each work card SHALL show a photo with a hover overlay
containing a category label, a work title, and a "View" button.

#### Scenario: Portfolio grid

- **GIVEN** the portfolio section is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading "Featured Works" and five work cards, each
  with a category label, a title, and a "View" button

### Requirement: How we work

The system SHALL render a light section titled "How we work" with a quote
line, a supporting paragraph, and a play button + "Watch Video" label
(next to the text column).

#### Scenario: How-we-work content

- **GIVEN** the how-we-work section is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading "How we work", the quote and paragraph copy,
  and a play button with a "Watch Video" label

### Requirement: Team

The system SHALL render a white section titled "Our Creative Team" with a
muted paragraph and a 4-column grid of team cards: photo, name, role. On
hover the photo SHALL reveal a social-icon overlay (facebook, twitter,
instagram). Members: Brandon Yeald (Founder & CEO), Calvin Anderson
(Graphics Designer), Roman Solo (Wordpress Developer), Yeald Kin (Software
Engineer).

#### Scenario: Team grid

- **GIVEN** the team section is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading "Our Creative Team" and the four members with
  their names and roles

#### Scenario: Social overlay

- **GIVEN** a team card is rendered
- **WHEN** the card photo is hovered/focused
- **THEN** the social icons (facebook, twitter, instagram) become visible

### Requirement: Testimonials

The system SHALL render a dark cover-image section with a 3-slide testimonial
carousel. Each slide SHALL show a quote mark, a testimonial paragraph, and an
author block (thumb, name "Robert Thomson", role "Business Owner"). The
carousel SHALL advance via prev/next controls and autoplay.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is rendered
- **WHEN** the first slide is shown
- **THEN** it displays the testimonial text and the author "Robert Thomson"
  with role "Business Owner"

#### Scenario: Carousel navigation

- **GIVEN** the testimonials section is rendered
- **WHEN** the next control is activated
- **THEN** the second slide's testimonial becomes visible

### Requirement: Contact form

The system SHALL render a white section titled "Get in Touch" with a muted
paragraph and a contact form: name, email, and subject inputs in a 2-column
row, a full-width message textarea, and a "Send Message" indigo submit
button. The form SHALL validate its fields and show per-field errors for
invalid input; on valid submit it SHALL show a success confirmation without
a page reload.

#### Scenario: Contact fields

- **GIVEN** the contact section is rendered
- **WHEN** it is inspected
- **THEN** it shows the inputs "Your Name", "Email", "Subject", the "Message"
  textarea, and a "Send Message" button

#### Scenario: Validation and success

- **GIVEN** the contact form is rendered
- **WHEN** the user submits an empty/invalid form
- **THEN** per-field error messages are shown and no confirmation appears
- **AND WHEN** the user fills all fields validly and submits
- **THEN** a success confirmation message is shown and the fields clear

### Requirement: Footer

The system SHALL render a dark footer: brand wordmark left, menu links
(About, Services, Portfolio, Pages, Blog, Contact) centered, social icons
right. The footer SHALL include a "Made with Component Dock" line linking to
https://www.componentdock.com/.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the brand wordmark, the six menu links, the social icons,
  and a link named "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] `bash scripts/verify-app.sh ascent` passes (typecheck, lint, 100%
      coverage tests, build)
- [ ] 100% line/function/branch/statement coverage for apps/ascent
- [ ] No colorlib strings anywhere under apps/ascent (comments included)
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME = ascent.free.componentdock.com; package.json homepage =
      https://ascent.free.componentdock.com
- [ ] package-lock.json registers @free-react-templates/ascent
- [ ] PR merged immediately after verification
