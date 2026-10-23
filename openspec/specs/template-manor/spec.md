# Template: Manor (Real Estate)

## Purpose

A Real Estate template with hero, search box, featured properties, workflow, cities and cta sections. Recreation of ColorLib's **The Estate** template (`theestate`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/theestate/
- **Preview:** https://preview.colorlib.com/theme/theestate/
- **New name:** `manor` (apps/manor, @free-react-templates/manor)
- **Stack:** Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)
- **Category:** Real Estate

## Design tokens

Extracted from `styles/main_styles.css` of the live preview.

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#fd784f` | Orange accent — buttons, featured panel, search submit, newsletter submit, CTA phone button, section title underline, link hover, focus rings, weekly offer text, footer form highlights |
| navy-dark | `#0e1d41` | Search box background, header (scrolled), newsletter section background |
| navy-footer | `#07122c` | Footer background |
| navy-form | `#1e2c4e` | Footer form input backgrounds, heading color, CTA heading color |
| gray-light | `#e7eaf0` | CTA section background |
| gray-lighter | `#edeff4` | Workflow circle outer, featured card body background |
| gray-workflow-inner | `#e1e5ec` | Workflow circle inner |
| gray-border | `#aeaead` | Header border (before scroll), section borders |
| text-body | `#a5a5a5` / `#838383` | Body text, paragraph text |
| text-subtitle | `#b0b1b3` | Section subtitles, newsletter subtitle |
| text-white | `#FFFFFF` | Hero text, nav text, button text, featured price, CTA phone button text, newsletter heading |
| newsletter-input-bg | `#4a5b85` | Newsletter email input background |
| footer-text | `#c5c5c5` | Footer about text, useful links text |

### Fonts

- **Body / Headings:** `'Open Sans', sans-serif` (300, 400, 600, 700)
- **Logo / Accent headings:** `'Montserrat', sans-serif` (700)

### Button shapes

- All buttons: **border-radius: 0px** (sharp corners, no rounding)
- Newsletter submit: 132×55px, orange bg, white text, uppercase, 600 weight
- Search submit: orange bg, white text
- Footer send button: 86×32px, orange bg, white text, 12px, uppercase
- CTA phone button: inline-block, orange bg, white text, 18px, 600 weight
- Focus states: white border (newsletter), orange outline (search inputs)

### Section backgrounds

- Hero: full-viewport background image slider
- Search box: `#0e1d41` navy, overlaps hero (negative margin)
- Featured Properties: `#FFFFFF` white
- Testimonials: parallax background image
- Workflow: `#FFFFFF` white
- Cities: no explicit bg (light)
- CTA: `#e7eaf0` light gray with parallax background image overlay (opacity 0.32)
- Newsletter: `#0e1d41` navy
- Footer: `#07122c` dark navy

## Section order (from preview DOM)

1. **Hero** — Full-viewport image slider with headline "find your home"
2. **Header** — Fixed, transparent → navy on scroll. Logo ("the estate"), nav links (home, about us, listings, news, contact), phone number
3. **Search Box** — Overlapping hero, dark navy bg. Form: dropdowns (keywords, property ID, status, location, type, bedrooms, bathrooms, min/max price, min/max sq ft), search button, specific features (checkboxes)
4. **Featured Properties** — 3 property cards: image, "featured" badge, title, description, room details (bedrooms, bathrooms, area, patio, garage), amenity tags, price box
5. **Testimonials** — Parallax bg, carousel of client testimonials (name, title, quote)
6. **Workflow** — "see how we operate" — 3 numbered steps with circle illustrations + rocket: Choose a Location, Find the Perfect Home, Move in your new life
7. **Cities** — "cities clients prefer" — carousel of city cards (Miami, Dublin, Vienna, Marbella, New York, Geneva)
8. **CTA** — "Do you want to talk with one of our real estate experts?" + phone number button
9. **Newsletter** — Left: subscribe form (email input + button). Right: weekly offer promo card
10. **Footer** — Logo, social links, about text, useful links, contact form (name, email, message, send), contact info (address, phone, email, website)

## Requirements

### Feature: Manor template behaviour

#### Scenario: Hero slider renders

- **GIVEN** the user visits the homepage
- **THEN** a full-viewport hero section is visible
- **AND** the hero displays the headline "find your home"
- **AND** the hero contains navigation arrows

#### Scenario: Fixed header appears on scroll

- **GIVEN** the user is at the top of the page
- **THEN** the header is transparent with white text
- **WHEN** the user scrolls down
- **THEN** the header background becomes navy (#0e1d41)
- **AND** the header is fixed to the top of the viewport

#### Scenario: Header navigation links

- **GIVEN** the header is visible
- **THEN** the logo displays "manor"
- **AND** the nav contains links: home, about us, listings, news, contact
- **AND** a phone number is displayed in the header

#### Scenario: Search box form

- **GIVEN** the search box is visible
- **THEN** the search box has a dark navy background
- **AND** the title reads "search your home"
- **AND** the form contains dropdown selects for: keywords, property ID, property status, location, property type, bedrooms, bathrooms, min price, max price, min sq ft, max sq ft
- **AND** a search submit button is present
- **AND** specific features checkboxes are available

#### Scenario: Featured properties cards

- **GIVEN** the featured properties section is visible
- **THEN** the section title reads "featured properties"
- **AND** the subtitle reads "See our best offers"
- **AND** 3 property cards are displayed
- **AND** each card has an image, a "featured" badge, title, description
- **AND** each card shows room details: bedrooms, bathrooms, area, patio, garage
- **AND** each card has amenity tags
- **AND** each card has a price box with "For Sale" and a price

#### Scenario: Testimonials carousel

- **GIVEN** the testimonials section is visible
- **THEN** a parallax background image is displayed
- **AND** the section title reads "clients testimonials"
- **AND** testimonial items show a quote, user name, and user title
- **AND** the carousel allows navigation between testimonials

#### Scenario: Workflow steps

- **GIVEN** the workflow section is visible
- **THEN** the section title reads "see how we operate"
- **AND** the subtitle reads "What you need to do"
- **AND** 3 steps are displayed in a row
- **AND** step 01 is "Choose a Location"
- **AND** step 02 is "Find the Perfect Home"
- **AND** step 03 is "Move in your new life"
- **AND** each step has a circular illustration with a number

#### Scenario: Cities carousel

- **GIVEN** the cities section is visible
- **THEN** the section title reads "cities clients prefer"
- **AND** city cards show: Miami, Dublin, Vienna, Marbella, New York, Geneva
- **AND** carousel navigation arrows are present

#### Scenario: CTA section

- **GIVEN** the CTA section is visible
- **THEN** the heading reads "Do you want to talk with one of our real estate experts?"
- **AND** "real estate experts" is highlighted in orange
- **AND** an orange phone number button is displayed

#### Scenario: Newsletter section

- **GIVEN** the newsletter section is visible
- **THEN** the background is dark navy
- **AND** the heading reads "subscribe to our newsletter"
- **AND** the subtitle reads "Get the latest offers"
- **AND** an email input field is present
- **AND** an orange "subscribe" button is present
- **AND** a weekly offer promo card is displayed alongside

#### Scenario: Footer

- **GIVEN** the footer is visible
- **THEN** the background is dark navy (#07122c)
- **AND** the logo "manor" is displayed
- **AND** social media icon links are present (Pinterest, Facebook, Twitter, Dribbble, Behance)
- **AND** useful links are listed
- **AND** a contact form with name, email, message fields and a send button is present
- **AND** contact info (address, phone, email, website) is displayed
- **AND** the footer links to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/manor/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/manor/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Hero is full-viewport with image slider
- [ ] Header is fixed, transitions from transparent to navy on scroll
- [ ] Search box overlaps hero with negative margin
- [ ] Featured properties show 3 cards with all room details and tags
- [ ] Testimonials have parallax background and carousel
- [ ] Workflow shows 3 numbered steps with circle illustrations
- [ ] Cities carousel renders all 6 cities
- [ ] CTA has orange highlighted text and phone button
- [ ] Newsletter has dark navy bg, form, and weekly offer card
- [ ] Footer has 4 columns: about/social, useful links, contact form, contact info
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Brand color `#fd784f` used consistently as accent
- [ ] Sharp-corner buttons (no border-radius)
- [ ] Open Sans + Montserrat fonts loaded
- [ ] Responsive layout (mobile hamburger menu)
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
