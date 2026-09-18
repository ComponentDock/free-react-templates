# Template: GiveHope (Charity / Nonprofit)

## Purpose

GiveHope is a single-page charity/nonprofit website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bcharity" free template (source:
https://colorlib.com/wp/template/bcharity/), built under a DIFFERENT name
(**GiveHope**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 charity site with a full-width hero banner
(background image, right-aligned text), feature cards, a parallax image
callout section, animated counters, featured cause cards with progress bars,
a CTA banner, volunteer team cards, a blog section, and a dark footer with
newsletter and contact info. The design uses a green (`#00c424`) brand
palette with Playfair Display headings and Roboto body text, pill-shaped
buttons (50px radius), and dark navy (`#0d101d`) footer/background accents.

**Source:** ColorLib "Bcharity" — preview at
https://preview.colorlib.com/theme/bcharity/

## Naming

The ColorLib source name "Bcharity" is FORBIDDEN as the app name. **GiveHope**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified 2026-09-15: zero hits for `givehope` in `ls apps/`, `openspec/specs/`,
`docs/templates/`). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Bcharity" (page title: "Charity"). Listed in
  TEMPLATES.md under **Charity (13)** (section header line 1245; the item
  at line 1253 — `wp/template/bcharity/`). Sibling completed items in the
  category: Adopted → GiveAid, Aid → Succor, Amor → Caritas, Aspiration
  → Kindred, Cause → Altruist, Charitee → Giveback, Chariter → Meliora.

- **Live preview — REACHABLE (verified 2026-09-15 by direct fetch):**
  https://preview.colorlib.com/theme/bcharity/ returns HTTP 200 with
  `<title>Charity</title>`. Stylesheets: `css/bootstrap.min.css` (Bootstrap
  4), `css/animate.css` (WOW.js animations), `css/owl.carousel.min.css`,
  `css/themify-icons.css` (Themify icon font — replace with lucide-react),
  `css/flaticon.css`, `css/magnific-popup.css`, `css/nice-select.css`,
  `css/slick.css`, `css/style.css` (main custom styles, ~66KB single line).
  Scripts: jQuery 1.12.1, Popper, Bootstrap JS, WOW.js, Owl Carousel, Slick,
  Nice Select, CounterUp + Waypoints, Magnific Popup, AjaxChimp, jQuery
  Validate. Fonts: **Playfair Display** (400, 700) + **Roboto** (300, 400,
  500, 700) via Google Fonts `@import`.

- **Live DOM structure (from fetched HTML + CSS):**
  - `body` (font-family "Roboto", sans-serif; 14px; `#14182d` headings)
    - `header.main_menu.home_menu` (absolute, z-index 999, transparent bg
      over the banner) → `nav.navbar.navbar-expand-lg.navbar-light`
        - Logo image
        - Nav links: Home, About, Causes, Pages (dropdown: Team, Elements),
          Blog (dropdown: Blog, Single Blog), Contact
        - CTA button: "learn more" (`.btn_1` — green border, pill, on
          desktop only `d-none d-lg-block`)
    - `section.banner_part` (full-width hero, background image
      `img/banner_img.png`, cover, 950px height desktop, 750px mobile;
      text right-aligned `col-lg-6 offset-lg-5`):
      - h1: "Bless others with your gift"
      - p: descriptive paragraph
      - a.btn_2: "Start Donation" (green solid, pill 50px radius)
    - `section.feature_part` (white bg, centered section title):
      - Section title: "Awesome Feature" / "How Could You Help"
      - 4 feature cards (col-lg-5 col-sm-6, 2×2 grid):
        - SVG icon + h4 heading + description paragraph
        - Cards: Give Donation, Become A Volunteer, Child Education,
          Quick Fundraise
    - `section.be_part` (parallax background image `img/review_bg.png`,
      cover; right-aligned image `img/Charity.jpg`):
      - h2: "Be a part of the breakthrough and make someones dream come true"
      - p: descriptive paragraph
      - a.btn_2: "learn more"
    - `section.counter` (white bg, 4 stat items):
      - 4 counter items (icon + label + number):
        - Total Collection: 58,9672412
        - Helped People: 58,9672412
        - Total Volunteer: 58,9672412
        - Successed Mission: 58,967
    - `section.passion_part.section_padding` (white bg, section title):
      - Section title: "Donation shows Passion" / "Featured causes"
      - 3 cause cards (col-sm-6 col-lg-4):
        - Card image + h5 title + progress bar (75%) + goal/raised amounts
          (Goal: $2500, Raised: $1533) + "read more" btn_3
    - `section.intro_video_bg` (full-width background image
      `img/intro_video_bg.png`, cover, 480px height, centered):
      - h2: "Forget what you can get and see what you can give"
      - a.btn_2: "Become a Volunteer"
    - `section.volunteers_part.section_padding` (white bg, section title):
      - Section title: "volunteers" / "Expert Volunteers"
      - 4 volunteer cards (col-sm-6 col-lg-3):
        - Photo + social icon overlay (facebook, twitter, instagram, skype)
        - Name (h3) + role (p)
        - Members: David Phillips (Project Manager), Lindsa Rudolph (Field
          Supervisor), Samuel Gardner (Co Founder), Lindsa Rudolph (Field
          Supervisor)
    - `section.blog_part.padding_bottom` (white bg, section title):
      - Section title: "OUr blog" / "Every Single Update"
      - Left: large featured blog post (image + h4 + date + comments)
      - Right: 2 smaller blog posts (thumbnail + category link + h5 +
        date + comments)
    - `footer.footer-area` (dark bg `#0d101d`, 100px top padding):
      - 3-column layout:
        - Col 1 (footer_1): Logo + about paragraph
        - Col 2 (footer_2): Newsletter heading + email input + arrow
          submit button + social icons (facebook, twitter, instagram, skype)
        - Col 3 (footer_2): Contact us heading + address + phone + email +
          website
      - Copyright bar: "Copyright © ... All rights reserved | This template
        is made with ♥ by Colorlib" → **REPLACE** with Component Dock
        attribution

- **Screenshot (bcharity-free-template.jpg, viewed from TEMPLATES.md):**
  Full-width hero with a dark background image (children/people), right-
  aligned white text "Bless others with your gift" with green CTA button.
  Below: white section with feature icons in a 2×2 grid. Then a parallax
  section with an image on the right. Followed by stat counters, cause
  cards with progress bars, a green-background CTA banner, volunteer team
  photos with social overlays, blog cards, and a dark navy footer.
  Aesthetic: warm charity feel, green brand on white, dark accents.

## Design tokens

| Token                | Value                            | Notes                                                                          |
| -------------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| `--color-brand`      | `#00c424`                        | Primary green: buttons, links, accents, progress bars, hover states            |
| `--color-dark`       | `#0d101d`                        | Footer background, banner overlay, dark sections                               |
| `--color-heading`    | `#14182d`                        | All h1–h6 text color                                                           |
| `--color-body`       | `#7f7f7f`                        | Body paragraph text color                                                      |
| `--color-section-sub`| `#b3b4b3`                        | Section subtitle text (uppercase, 13px, letter-spacing 3px)                    |
| `--color-bg-light`   | `#f2f5f3`                        | Light section backgrounds                                                      |
| `--color-bg-white`   | `#fff`                           | Default section backgrounds                                                    |
| `--color-border`     | `#e9ebec`                        | Card borders, dividers                                                         |
| `--color-link-hover` | `#00c424`                        | Links and social icons hover                                                   |
| `--font-heading`     | 'Playfair Display', serif        | All h1–h6 headings                                                             |
| `--font-body`        | 'Roboto', sans-serif             | Body text, buttons, inputs; 14px base, line-height 1.929                       |
| `--btn-pill`         | border-radius: 50px              | All buttons (.btn_1, .btn_2, .btn_3) are pill-shaped                           |
| `--btn-brand`        | bg `#00c424`, color `#fff`       | .btn_2 solid green, 160px wide, 13.5px padding                                 |
| `--btn-outline`      | border `#00c424`, color `#000`   | .btn_1 outline green, 10.5px padding                                           |
| `--btn-ghost`        | border `#e9ebec`, color `#14182d`| .btn_3 ghost, turns green bg on hover                                          |
| `--section-padding`  | 140px 0                          | .section_padding for major sections                                            |
| `--banner-height`    | 950px (desktop), 750px (mobile)  | Hero banner background image, cover                                            |
| `--counter-height`   | 480px                            | CTA/video background section height                                            |
| `--footer-bg`        | `#0d101d`                        | Dark footer, white headings, `#777` body, `#555` links                         |

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar overlaying the hero banner with
logo, navigation links, and a desktop-only CTA button.

#### Scenario: Desktop navbar

- **GIVEN** the GiveHope app is rendered on a desktop viewport (≥992px)
- **THEN** the navbar SHALL be transparent, positioned absolute over the
  hero banner, with the logo on the left and nav links aligned right
- **AND** nav links SHALL be: Home, About, Causes, Pages (dropdown with
  Team and Elements), Blog (dropdown with Blog and Single Blog), Contact
- **AND** a "learn more" outline button (.btn_1) SHALL render at the right
  of the nav, visible only on lg+ screens

#### Scenario: Mobile navbar

- **GIVEN** the viewport is below 992px
- **THEN** a hamburger toggler SHALL appear and the nav SHALL collapse
  into a dropdown menu with all links listed vertically

### Requirement: Hero banner

The system SHALL render a full-width hero section with a background image,
right-aligned headline text, and a green CTA button.

#### Scenario: Banner content

- **GIVEN** the GiveHope app is rendered
- **THEN** the banner SHALL display a full-width background image (cover,
  950px height desktop / 750px mobile) with right-aligned content
  (col-lg-6 offset-lg-5)
- **AND** the headline SHALL read "Bless others with your gift" (h1,
  Playfair Display)
- **AND** a paragraph of descriptive text SHALL appear below the headline
- **AND** a "Start Donation" button (.btn_2, green solid, pill radius)
  SHALL render below the paragraph

### Requirement: Features section

The system SHALL render a 2×2 grid of feature cards with icons and
descriptions.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **THEN** a section title "Awesome Feature" / "How Could You Help" SHALL
  appear centered
- **AND** 4 feature cards SHALL render in a 2×2 grid:
  1. Give Donation (icon + h4 + description)
  2. Become A Volunteer (icon + h4 + description)
  3. Child Education (icon + h4 + description)
  4. Quick Fundraise (icon + h4 + description)
- **AND** each card SHALL have an SVG icon, heading, and description text

### Requirement: "Be a part" callout section

The system SHALL render a parallax-background callout section with
left-aligned text and a right-aligned image.

#### Scenario: Callout content

- **GIVEN** the callout section is rendered
- **THEN** a full-width background image (parallax, cover) SHALL display
- **AND** left-aligned content SHALL include:
  - h2: "Be a part of the breakthrough and make someones dream come true"
  - Descriptive paragraph
  - "learn more" button (.btn_2)
- **AND** an image SHALL appear on the right side (col-lg-6)

### Requirement: Counter statistics

The system SHALL render animated stat counters in a row.

#### Scenario: Counter items

- **GIVEN** the counter section is rendered
- **THEN** 4 stat items SHALL display in a horizontal row:
  1. Total Collection (icon + label + number)
  2. Helped People (icon + label + number)
  3. Total Volunteer (icon + label + number)
  4. Successed Mission (icon + label + number)
- **AND** the numbers SHALL animate on scroll into view (CounterUp +
  Waypoints pattern)

### Requirement: Featured causes

The system SHALL render cause cards with progress bars showing donation
goals.

#### Scenario: Cause cards

- **GIVEN** the featured causes section is rendered
- **THEN** a section title "Donation shows Passion" / "Featured causes"
  SHALL appear centered
- **AND** 3 cause cards SHALL render in a row (col-sm-6 col-lg-4):
  - Each card has: image, h5 title, animated progress bar (75%), goal
    amount ("Goal: $2500"), raised amount ("Raised: $1533"), and a
    "read more" ghost button (.btn_3)

### Requirement: CTA banner

The system SHALL render a full-width background-image CTA section with
centered text and a green button.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **THEN** a full-width background image (cover, 480px height) SHALL display
- **AND** centered content SHALL include:
  - h2: "Forget what you can get and see what you can give"
  - "Become a Volunteer" button (.btn_2, green solid)

### Requirement: Volunteers section

The system SHALL render team member cards with photos and social overlays.

#### Scenario: Volunteer cards

- **GIVEN** the volunteers section is rendered
- **THEN** a section title "volunteers" / "Expert Volunteers" SHALL appear
  centered
- **AND** 4 volunteer cards SHALL render in a row (col-sm-6 col-lg-3):
  - Each card has: photo, social icon overlay (facebook, twitter,
    instagram, skype), name (h3), role (p)
- **AND** the social icons SHALL appear on hover over the photo

### Requirement: Blog section

The system SHALL render a blog section with a featured post and smaller
side posts.

#### Scenario: Blog layout

- **GIVEN** the blog section is rendered
- **THEN** a section title "OUr blog" / "Every Single Update" SHALL appear
  centered (note: "OUr" is the original typo — the recreation may fix to
  "Our")
- **AND** the left column (col-lg-6) SHALL show a large featured blog post
  with image, h4 title, date, and comment count
- **AND** the right column SHALL show 2 smaller blog posts in a stacked
  layout with thumbnail, category link, h5 title, date, and comment count

### Requirement: Footer

The system SHALL render a dark footer with logo, newsletter, contact info,
and Component Dock attribution.

#### Scenario: Footer layout

- **GIVEN** the footer is rendered
- **THEN** a dark (`#0d101d`) footer SHALL display with 3 columns:
  - Col 1: Logo + about paragraph
  - Col 2: "Newsletter" heading + email input + submit button + social
    icons (facebook, twitter, instagram, skype)
  - Col 3: "Contact us" heading + address + phone + email + website
- **AND** a copyright bar SHALL appear at the bottom with a top border

#### Scenario: Component Dock attribution

- **GIVEN** the footer is rendered
- **THEN** the copyright text SHALL link to https://www.componentdock.com/
  branded as "Component Dock" (replacing any ColorLib attribution)

### Requirement: Responsive design

The system SHALL be fully responsive across desktop, tablet, and mobile.

#### Scenario: Mobile layout

- **GIVEN** the viewport is at or below 576px
- **THEN** the navbar SHALL collapse to a hamburger menu
- **AND** the banner height SHALL reduce to 750px
- **AND** feature cards SHALL stack vertically
- **AND** cause cards SHALL stack vertically
- **AND** volunteer cards SHALL stack 2-per-row then 1-per-row
- **AND** blog posts SHALL stack vertically
- **AND** footer columns SHALL stack vertically

### Requirement: Accessibility and semantics

The system SHALL use semantic HTML and accessible patterns.

#### Scenario: Semantics

- **GIVEN** the GiveHope app is rendered
- **THEN** the navbar SHALL use `<nav>` with appropriate ARIA attributes
- **AND** the hero SHALL use a `<section>` landmark
- **AND** interactive elements SHALL have visible focus-visible rings
- **AND** images SHALL have descriptive alt text
- **AND** the form input SHALL have an associated label

## Verification checklist

- [ ] `npm run verify:app -- givehope` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/bcharity/: green `#00c424` brand,
      Playfair Display headings, Roboto body, pill buttons (50px radius),
      dark `#0d101d` footer, section order matches.
- [ ] Behavior check: navbar collapses on mobile, counters animate on
      scroll, progress bars animate, social icons appear on volunteer
      hover, newsletter form is functional (mock submit).
- [ ] Responsive check at 576px and 768px (stacked layouts, no overflow).
- [ ] Footer links to Component Dock, no ColorLib references in app code.
