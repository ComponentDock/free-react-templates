# Template: Curemark (Medical & Healthcare)

## Purpose

Curemark is a full-page MEDICAL & HEALTHCARE landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Medart" free template (source:
https://colorlib.com/wp/template/medart/), built under a DIFFERENT name
(**Curemark**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

The original is a Bootstrap-based medical website with a hero slider,
info boxes (opening hours, emergency, appointment form), a 3x3 grid of
department cards, patient testimonials, blog/news cards, newsletter signup,
and a multi-column footer. Reference-measured design tokens are recorded in
**Design tokens** below — the cyan→blue gradient is real but written as
`rgba(50,200,250,1)` → `rgba(88,125,228,1)`, so it is measured from the
declaration rather than from a hex census.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Medart** — https://colorlib.com/wp/template/medart/
- **Preview**: `https://preview.colorlib.com/theme/medart/` — HTTP 200, **34,367 bytes**; the demo page's `<title>` is literally `Hello World` (the template never sets one — that is the reference's own gap, not a prep error).
- **Stylesheets measured**: `style.css` — **32,077 bytes** (theme layer) + `css/bootstrap.min.css` 21,340 B (Bootstrap 4 subset) and `css/swiper.min.css` 5,697 B; `font-awesome/4.7.0` comes from cdnjs.
- **Measured how**: hex-literal census per sheet, then the winning rule per selector. **One caveat**: the brand gradient start is written as `rgba(50,200,250,1)`, i.e. `#32c8fa` — a hex census scores it 0, so it is recorded here from the declaration, not the census.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand cyan | `#18a3eb` | 20 | `.button` bottom rule, `.call-btn` pill, icons, swiper bullets, active tab, subscribe banner |
| Brand gradient | `rgba(50,200,250,1)` `#32c8fa` → `rgba(88,125,228,1)` `#587de4`, `180deg` | — | `.button.gradient-bg` (hero "Read More", appointment submit) |
| Ink | `#404040` | 26 | `body`, `h1`–`h6`, `.entry-title` |
| Muted copy | `#828282` | 27 | meta lines, form placeholders, small print |
| Field band | `#f0f4f8` | 5 | input/textarea background, search field |
| Card border | `#dde4ea` | 1 | `.appointment-box`, `.opening-hours` — `2px solid`, radius 20 px |
| Dark band | `#262626` | 4 | footer text/heading accents |
| Timetable band | `#f3f3f3` | 1 | `.accordion-wrap` rows |
| Active tab | `#eaf1f3` | 1 | `ul.tabs-nav .tab-nav.active` |
| Surface | `#fff` | 39 | page + card surfaces |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `'Raleway', sans-serif`, 16 px / 1.8, `#404040` | `body` (`@import` Raleway 200–700) |
| Hero H1 | 60 px / 600 / `#404040` | `.hero-content-overlay h1` |
| Section H2 | 48 px / 600 / `#404040`, `margin-bottom: 48px` | `.quality-services h2`, `.testimonial-section h2` |
| Card title | 24 px / 700 / `#404040` | `.icon-box .entry-title` |
| Buttons | 16 px / 600 | `.button` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Hero | light background (`#fff`/`#f0f4f8` wash) with a large **curved cyan swoosh graphic** and a cut-out photo on the right — **no scrim** (`.hero-content-overlay { background: rgba(0,0,0,0) }`), dark 60 px heading on the left, 01/02/03 slide index with the active number in cyan |
| Buttons | `.button` `padding: 12px 50px 10px`, **radius 20 px**, `border-bottom: 3px solid #18a3eb`; `.gradient-bg` swaps it for the 180° cyan→blue gradient; `.call-btn` is the 210 px-wide phone pill in the nav |
| Cards | `20 px` radius with a `2px solid #dde4ea` border that breaks behind the legend ("Opening Hours", "Emergency", "Make an Appointment") |
| Section rhythm | `section { padding: 100px 0; margin-top: 100px }`; `margin-bottom: 80px` under testimonial headings |
| Bands | white nav → light hero with swoosh → white info-card row on `#f0f4f8` fields → white departments grid → `#f3f3f3`/photo testimonial → white blog cards → cyan subscribe banner → `#262626` footer |

## Requirements

### Requirement: Navbar with logo, navigation, and emergency CTA

The template SHALL display a fixed-position navbar with the "Curemark"
logo, navigation links (Home, About, Services, News, Contact), and an
emergency CTA button showing a phone icon and phone number.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar SHALL display the "Curemark" logo text
- **AND** navigation links for Home, About, Services, News, Contact SHALL be visible
- **AND** an emergency CTA button with phone number SHALL be visible

#### Scenario: Mobile hamburger toggle

- **WHEN** the page loads on a mobile viewport
- **THEN** a hamburger menu button SHALL be visible
- **AND** navigation links SHALL be hidden by default
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile navigation menu SHALL become visible

### Requirement: Hero banner with background image and CTA

The template SHALL display a full-width hero section with a background
image, dark overlay, headline "The Best Medical Services", subtitle text,
and a "Read More" gradient button.

#### Scenario: Hero renders headline and CTA

- **WHEN** the hero section is rendered
- **THEN** the heading "The Best Medical Services" SHALL be visible
- **AND** a subtitle paragraph SHALL be visible
- **AND** a "Read More" button with gradient background SHALL be present

### Requirement: Information boxes (hours, emergency, appointment)

The template SHALL display a 3-column responsive layout with Opening
Hours, Emergency contact, and an Appointment booking form.

#### Scenario: Opening hours schedule

- **WHEN** the info boxes section is rendered
- **THEN** "Opening Hours" heading SHALL be visible
- **AND** a schedule list with Mon-Thu 8-19, Fri 8-18:30, Sat 9:30-17, Sun 9:30-15 SHALL be displayed

#### Scenario: Emergency contact CTA

- **WHEN** the info boxes section is rendered
- **THEN** "Emergency" heading SHALL be visible
- **AND** a gradient CTA button with phone number SHALL be present

#### Scenario: Appointment form

- **WHEN** the info boxes section is rendered
- **THEN** "Make an Appointment" heading SHALL be visible
- **AND** a form with department select, doctor select, name input, phone input, and submit button SHALL be present

### Requirement: Department cards in 3x3 grid

The template SHALL display a heading "Our Departments" followed by a
responsive 3-column grid of 9 department cards, each with an icon,
title, description, and "read more" link.

#### Scenario: All 9 departments rendered

- **WHEN** the departments section is rendered
- **THEN** the heading "Our Departments" SHALL be visible
- **AND** 9 department cards SHALL be rendered
- **AND** each card SHALL display an icon, title, description, and "read more" link

#### Scenario: Department names

- **WHEN** the departments section is rendered
- **THEN** the following departments SHALL be present: Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology, Orthopaedy, Pediatry, Ophthalmology

### Requirement: Patient testimonials

The template SHALL display a "Patient's Testimonials" heading followed
by testimonial cards with quote text, avatar image, name, and affiliation.

#### Scenario: Testimonials rendered

- **WHEN** the testimonials section is rendered
- **THEN** the heading "Patient's Testimonials" SHALL be visible
- **AND** at least 3 testimonial cards SHALL be displayed
- **AND** each card SHALL show a quote, avatar, name, and affiliation

### Requirement: News/blog posts

The template SHALL display a "The News" heading followed by 3 blog post
cards with image, title, meta information (date, author, comments), and
excerpt.

#### Scenario: News cards rendered

- **WHEN** the news section is rendered
- **THEN** the heading "The News" SHALL be visible
- **AND** 3 blog post cards SHALL be displayed
- **AND** each card SHALL show an image, title, date, author, comments count, and excerpt

### Requirement: Newsletter subscription

The template SHALL display a gradient-background newsletter section with
a heading, email input, and subscribe button.

#### Scenario: Newsletter form

- **WHEN** the newsletter section is rendered
- **THEN** the heading "Subscribe to our newsletter" SHALL be visible
- **AND** an email input SHALL be present
- **AND** a "Subscribe" button SHALL be present

#### Scenario: Successful subscription

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a "Thank you for subscribing!" confirmation message SHALL be displayed

### Requirement: Footer with contact info and Component Dock link

The template SHALL display a 3-column footer with about section, contact
information, and useful links. The footer MUST link
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer columns

- **WHEN** the footer is rendered
- **THEN** an about section with logo and description SHALL be present
- **AND** contact information (address, phone, email) SHALL be visible
- **AND** useful links (Home, About, Departments, Contact, FAQ, Testimonials) SHALL be listed

#### Scenario: Component Dock credit

- **WHEN** the footer is rendered
- **THEN** a link to https://www.componentdock.com/ branded "Component Dock" SHALL be present

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/curemark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/curemark/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar with logo, navigation, and emergency CTA — the navbar SHALL display the "Curemark" logo text
- [x] Hero banner with background image and CTA — the heading "The Best Medical Services" SHALL be visible
- [x] Information boxes (hours, emergency, appointment) — "Opening Hours" heading SHALL be visible
- [x] Department cards in 3x3 grid — the heading "Our Departments" SHALL be visible
- [ ] Patient testimonials — the heading "Patient's Testimonials" SHALL be visible
- [x] News/blog posts — the heading "The News" SHALL be visible
- [x] Newsletter subscription — the heading "Subscribe to our newsletter" SHALL be visible
