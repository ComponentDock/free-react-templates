# Template: Credentia (CV Resume)

## Purpose

Credentia is a single-page CV/resume template — a personal portfolio template
for showcasing work experience, education, skills, and contact information.
It is an original React recreation of the ColorLib free "Civic" template
(preview: https://preview.colorlib.com/theme/civic/ — CV/resume one-page),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Civic** — https://colorlib.com/wp/template/civic/
- **Preview**: `https://preview.colorlib.com/theme/civic/` — HTTP 200, title
  `Civic - CV Resume`; the served `index.html` carries `<body>` with **no**
  `home-*-style` class, i.e. the default (home-one) skin.
- **Stylesheets measured**: theme `css/style.css` — **26,637 B**; `css/bootstrap.min.css`
  19,577 B; `css/owl.carousel.css` 3,958 B; `css/magnific-popup.css` 2,985 B;
  icon sheets (`font-awesome`, `flaticon`) paint no colours.
- **Measured how**: hex-literal census per sheet, then the winning rule per
  selector, **plus** the variant check below.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Slate ink | `#40424a` | 22 | `h2`–`h4` (weight 600), `.fact-box` fill, `.footer-section` and `.info-section` fill, `.bar-inner` progress fill, `.resume-list` 2 px spine + dots, `.site-btn` 2 px border and label, `.site-logo a` |
| Pale band | `#f2f7f8` | 8 | `.header-section` (padding 50 px 40 px), `.hero-section`, `.home-three-style .main-left-area` |
| Dot grey | `#cacaca` | 9 | resume-list dot fill, carousel dot fill |
| Paragraph | `#808181` | 4 | body copy |
| Line grey | `#cacaca` / `#f9f9f9` | 9 / 3 | list spine, card washes |
| **Variant-only** crimson | `#ff0f3c` | 11 | **only** inside `.home-four-style` rules (heading after-line, quote mark, resume `h2`) |
| **Variant-only** indigo | `#481340` | 7 | only as the start stop of `.home-four-style .main-left-area`'s `linear-gradient(#481340 → #ff0f3c)` |
| **Variant-only** azure | `#009fff` | 6 | only `.home-two-style` / `.home-six-style` backgrounds and dots |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Everything | `'Josefin Sans', sans-serif` | `html, body` rule; also re-declared on `h2,h3,h4` (600) |
| Hero name | 90 px, weight 300–400, slate | `.hero-info h2` |
| Buttons | uppercase **12 px**, `min-width: 213px`, `padding: 20px 10px 15px` | `.site-btn` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Buttons | `.site-btn` **white fill**, `2px solid #40424a`, slate label, hover keeps the slate label ("Download CV" / "Discover Me" in the reference screenshot) |
| Radius | `150px` circle on `.circle-progress .progress-info` (127×127 px), `50px` on dots, `12px` on language chips; cards/sections square |
| Bands | `#f2f7f8` header band (wordmark left, two outlined buttons right) → `#f2f7f8` hero (huge slate name, portrait right) → white General Info list → `#40424a` fact boxes → `#40424a` footer strip (`padding: 20px 0`) |
| Accent rule | **The served page is monochrome slate.** The crimson/indigo/azure palettes exist only behind `home-two/four/six-style` variant classes that this `index.html` never applies — a spec must not present `#ff0f3c` as the page's accent. |

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Credentia lives in `apps/credentia` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header

The system SHALL render a sticky header with the site name "Credentia", a tagline
"Enhance your online presence", and two CTA buttons ("Download CV" and "Discover me").

#### Scenario: Desktop header

- **GIVEN** the page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show "Credentia" as the site name
- **AND** it SHALL show the tagline "Enhance your online presence"
- **AND** it SHALL show "Download CV" and "Discover me" buttons

### Requirement: Hero section

The system SHALL render a two-column hero with the person's name, bio paragraph,
general info list (Date of Birth, Address, Email, Phone), and a portrait image.

#### Scenario: Hero content

- **GIVEN** the hero section renders
- **WHEN** I read the left column
- **THEN** I SHALL see the name "Maria Williams"
- **AND** I SHALL see a bio paragraph
- **AND** I SHALL see general info with DOB, Address, Email, Phone

#### Scenario: Hero portrait

- **GIVEN** the hero section renders
- **WHEN** I look at the right column
- **THEN** I SHALL see a portrait image

### Requirement: Social links section

The system SHALL render a social links section with 5 social media icons
(Pinterest, LinkedIn, Instagram, Facebook, Twitter) and a "My Social Profiles"
heading.

#### Scenario: Social icons

- **GIVEN** the social section renders
- **WHEN** I count the social icons
- **THEN** I SHALL see exactly 5 icons
- **AND** the heading "My Social Profiles" SHALL be present

### Requirement: Work experience section

The system SHALL render a work experience section with the heading "Work Experience"
and a timeline list of work entries (year range, company name, role, description).

#### Scenario: Work entries

- **GIVEN** the work experience section renders
- **WHEN** I count the entries
- **THEN** I SHALL see 2 work experience items
- **AND** each item SHALL have a year range, company, role, and description

### Requirement: Education section

The system SHALL render an education section with the heading "Education" and a
timeline list of education entries (year, diploma name, school, description) on
an alternate background.

#### Scenario: Education entries

- **GIVEN** the education section renders
- **WHEN** I count the entries
- **THEN** I SHALL see 2 education items
- **AND** each item SHALL have a year, diploma, school, and description

### Requirement: References section

The system SHALL render a references section with the heading "References" and
a grid of testimonial cards (quote, name, role).

#### Scenario: Reference cards

- **GIVEN** the references section renders
- **WHEN** I count the testimonial cards
- **THEN** I SHALL see 3 reference cards
- **AND** each card SHALL have a quote, name, and role

### Requirement: Portfolio section

The system SHALL render a portfolio section with the heading "Portfolio", a
"See All Portfolio" button, and a 4-column grid of portfolio items (image,
title, category).

#### Scenario: Portfolio items

- **GIVEN** the portfolio section renders
- **WHEN** I count the items
- **THEN** I SHALL see 4 portfolio items
- **AND** each item SHALL have an image, title, and category label

#### Scenario: Portfolio CTA

- **GIVEN** the portfolio section renders
- **WHEN** I look for the call-to-action
- **THEN** I SHALL see a "See All Portfolio" button

### Requirement: Extra skills section

The system SHALL render an extra skills section with the heading "Extra Skills"
and circular progress indicators (percentage + label) alongside stat boxes
(years of experience, happy clients, awards won).

#### Scenario: Skill indicators

- **GIVEN** the extra skills section renders
- **WHEN** I look for progress indicators
- **THEN** I SHALL see at least 2 circular progress percentages
- **AND** I SHALL see stat boxes with numbers and labels

### Requirement: Contact section

The system SHALL render a contact section with the heading "Get In Touch", a
contact form (name, email, subject, message fields + submit button), and
contact information (address, phone, email).

#### Scenario: Contact form

- **GIVEN** the contact section renders
- **WHEN** I look for the form
- **THEN** I SHALL see name, email, subject, and message fields
- **AND** I SHALL see a submit button

#### Scenario: Contact info

- **GIVEN** the contact section renders
- **WHEN** I look for contact details
- **THEN** I SHALL see address, phone, and email information

### Requirement: Footer

The system SHALL render a footer with copyright text and a link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer attribution

- **GIVEN** the footer renders
- **WHEN** I look for the attribution
- **THEN** I SHALL see a link to https://www.componentdock.com/
- **AND** the link text SHALL mention "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/credentia/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/credentia/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Header — it SHALL show "Credentia" as the site name
- [x] Hero section — I SHALL see the name "Maria Williams"
- [ ] Social links section — I SHALL see exactly 5 icons
- [ ] Work experience section — I SHALL see 2 work experience items
- [ ] Education section — I SHALL see 2 education items
- [ ] References section — I SHALL see 3 reference cards
- [ ] Portfolio section — I SHALL see 4 portfolio items
- [ ] Extra skills section — I SHALL see at least 2 circular progress percentages
- [ ] Contact section — I SHALL see name, email, subject, and message fields
