# Template: Shores (Charity & Nonprofit Landing)

> Recreation of ColorLib "Seelife"
> (https://colorlib.com/wp/template/seelife/)
> Preview: https://preview.colorlib.com/theme/seelife/

## Purpose

A charity/nonprofit landing page template with hero banner, donation causes, about section, featured causes with progress tracking, events with countdown timers, team showcase, CTA, blog, newsletter, and 4-column footer. Design tokens extracted from the ColorLib Seelife CSS: green #60bc0f primary, yellow #fdbb00 accent, Poppins headings, Roboto body.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Seelife** — https://colorlib.com/wp/template/seelife/
- **Preview**: https://preview.colorlib.com/theme/seelife/ — HTTP 200 on 2026-10-23; measured `css/style.css` (66,116 bytes). Title served: "Seelife Charity".
- **Path note**: `theme/seelife/css/style.css` (66,116 B) shares its basename with `vendors/linericon/style.css`; census is of the page's theme sheet only.
- **Measured how**: hex-literal census of `css/style.css`; the count column is the number of literal occurrences in that sheet (smaller than the number of rules that use it when a declaration repeats the value).

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand green | `#60bc0f` | 44 | donate buttons, section titles, links, button hover borders |
| Ink | `#222222` | 33 | `h1`–`h6`, nav links |
| Gold CTA | `#f8b600` | 19 | `.genric-btn.primary` fill — the reference's primary button |
| Pale band | `#f9f9ff` | 17 | banner copy and tinted sections |
| Muted | `#777777` | 13 | body copy, team socials |
| Cyan | `#4cd3e3` | 11 | icon circles |
| Amber | `#fdbb00` | 7 | secondary accents and prices |
| Highlight yellow | `#f4e700` | 10 | highlight chips |
| Blue | `#38a4ff` | 9 | secondary icon fill |
| Accent red | `#f44a40` | 6 | counter/emphasis accent — declared only by `.genric-btn.danger` in the shared sheet — 4 declaring rule(s), every one hanging off a class the page markup never uses (block absent from the page markup) |

### Typography

| Element | Family | Evidence |
| ------- | ------ | -------- |
| Body | `Roboto` | 7 declarations incl. `.genric-btn` |
| Headings | `Poppins` | 3 declarations on titles |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Radii | `0px` (15 — square buttons), `3px` (8), `8px` (6), `20px` (5), `8.5px` (5), `50%` (4) |
| Rhythm | photo banner -> white `section_gap` bands -> tinted footer |
| Buttons | square `genric-btn` with `f8b600` primary fill |

### Section order (shipped app, 1:1 with the reference)

`Navbar -> Hero -> Causes -> About -> FeaturedCauses -> Events -> Team -> CtaBanner -> Blog -> Newsletter -> Footer`

Reference bands: header -> home_banner -> causes -> about -> features_causes -> event -> team -> story_area.

### Delta vs shipped app

- The app's `--color-brand #60bc0f` matches the reference (44 occurrences).
- The reference's PRIMARY CTA is gold `#f8b600` (19 occurrences, `.genric-btn.primary`); the app tokens `#fdbb00` instead (7 occurrences, a secondary literal).
- Icon accents `#4cd3e3`, `#38a4ff`, `#f4e700` and `#f44a40` are untokenized in `apps/shores` — the app keeps only green + gold.
- App adds `CtaBanner` and `Newsletter` bands absent from the demo's section list.

## Requirements

### Requirement: Navbar

The template SHALL display a transparent navigation bar with logo and navigation links (Home, About, Causes, Events, Contact).

#### Scenario: Desktop navigation

- **WHEN** the user loads the page on desktop
- **THEN** they see a transparent navbar with "Shores" logo and five navigation links

#### Scenario: Mobile navigation

- **WHEN** the user taps the mobile menu toggle
- **THEN** the navigation menu expands with all links visible

### Requirement: Hero Banner

The template SHALL display a full-width hero banner with dark overlay, subtitle, heading, description, and two CTA buttons.

#### Scenario: Hero content

- **WHEN** the user views the hero section
- **THEN** they see "Give a hand" subtitle, "to make the better world" heading, description, "Donate Now" and "See Causes" buttons

### Requirement: Causes Section

The template SHALL display three cause cards with icons, titles, and descriptions.

#### Scenario: Cause cards

- **WHEN** the user scrolls to the causes section
- **THEN** they see "Give Donation", "Give Inspiration", and "Become Volunteer" cards

### Requirement: About Section

The template SHALL display a split layout with image on the left and text on the right.

#### Scenario: About content

- **WHEN** the user scrolls to the about section
- **THEN** they see an image and text about the nonprofit team with a "Learn more" button

### Requirement: Featured Causes

The template SHALL display three cause cards with images, progress bars, raised/goal amounts, and donor counts.

#### Scenario: Featured cause cards

- **WHEN** the user scrolls to featured causes
- **THEN** each card shows title, description, progress bar, raised/goal amounts, donor count, and donate button

### Requirement: Events

The template SHALL display four event cards with images, countdown timers, and learn more buttons.

#### Scenario: Event cards

- **WHEN** the user scrolls to events
- **THEN** each card shows title, description, countdown timer (days/hours/minutes/seconds), and "Learn More" button

### Requirement: Team

The template SHALL display four team member cards with photos, names, roles, descriptions, and social links.

#### Scenario: Team member cards

- **WHEN** the user scrolls to team
- **THEN** each card shows photo, name, role, description, and social icons (Facebook, Twitter, Instagram, Email)

### Requirement: CTA Banner

The template SHALL display a full-width dark CTA section with heading, description, and join button.

#### Scenario: CTA content

- **WHEN** the user scrolls to the CTA section
- **THEN** they see "Become a volunteer" heading, description, and "Join with us" button

### Requirement: Blog

The template SHALL display three story cards with images, dates, categories, and titles.

#### Scenario: Blog cards

- **WHEN** the user scrolls to the blog section
- **THEN** each card shows image, date, category, and article title

### Requirement: Newsletter

The template SHALL display a newsletter subscription form with email input and subscribe button.

#### Scenario: Newsletter form

- **WHEN** the user views the newsletter section
- **THEN** they see a heading, email input, and "Subscribe" button

### Requirement: Footer

The template SHALL display a 4-column footer with mission, quick links, gallery, and contact information, plus a footer bottom linking to https://www.componentdock.com/.

#### Scenario: Footer columns

- **WHEN** the user scrolls to the footer
- **THEN** they see "Our Mission", "Quick Links", "Gallery", and "Contact Us" columns

#### Scenario: Component Dock link

- **WHEN** the user views the footer bottom
- **THEN** they see a link to https://www.componentdock.com/ branded "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/shores/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/shores/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — they see a transparent navbar with "Shores" logo and five navigation links
- [x] Hero Banner — they see "Give a hand" subtitle, "to make the better world" heading, description, "Donate Now" and "See Causes" buttons
- [x] Causes Section — they see "Give Donation", "Give Inspiration", and "Become Volunteer" cards
- [x] About Section — they see an image and text about the nonprofit team with a "Learn more" button
- [ ] Featured Causes — each card shows title, description, progress bar, raised/goal amounts, donor count, and donate button
- [x] Events — each card shows title, description, countdown timer (days/hours/minutes/seconds), and "Learn More" button
- [ ] Team — each card shows photo, name, role, description, and social icons (Facebook, Twitter, Instagram, Email)
- [x] CTA Banner — they see "Become a volunteer" heading, description, and "Join with us" button
- [ ] Blog — each card shows image, date, category, and article title
- [x] Newsletter — they see a heading, email input, and "Subscribe" button
