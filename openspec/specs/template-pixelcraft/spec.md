# Template: Pixelcraft (Creative Agency Landing)

## Purpose

A Creative Agency template with hero, services, portfolio, about / crafters, stories and expertise sections. Pixelcraft is a single-page creative digital agency template — a React recreation of the ColorLib free "Boxus" template (preview: https://preview.colorlib.com/theme/boxus/), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Primary dark: `#221c5a` (navy — menu bg, hero bg, footer bg)
- Body text: `#23214c`
- Link hover: `#ee87a4`
- Section title block: `#32DB8A` (green, 370×370)
- Section number color: `#55B286`
- Brand pink: `#e54b76` (accent)
- Timeline yellow: `#FFBA42`
- Progress bar colors: green `#32DB8A`, yellow `#FFBB42`, pink `#E74C78`, blue `#4C9EE7`
- Gray text: `#727190`
- Fonts: Montserrat (headings/hero, weight 700), Roboto (body, weights 300/400/700), PT Serif (subtitle, weight 400)

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

Pixelcraft lives in `apps/pixelcraft` and uses shared components from `packages/ui`
(Button, cn).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Boxus** — https://colorlib.com/wp/template/boxus/
- **Preview**: `https://preview.colorlib.com/theme/boxus/` — HTTP 200 on 2026-10-23, 71,814 bytes, title `Boxus - Html Responsive One Page Template`.
- **Stylesheet measured**: theme sheet `style.css` — 28,656 bytes, sha256 `d0b9424c848c…`, over six vendor sheets (`css/prettyPhoto.css` 27,099 B, `css/sm-clean.css` 11,209 B, `clear.css`, `common.css`, `font-awesome.min.css`, `carou-red-el.css`). Vendor palettes are excluded from the token table.
- **Measured how**: hex-literal census per sheet + winning rule per selector; the vendor sheets' `#fff`/`#000`/`#eee` are gallery-chrome, not brand.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Navy (primary dark) | `#221c5a` | 8 | `.menu-wrapper` bar · `.section-content-holder .content-title` (180px watermark) · `.intro-page` hero band · `#services`/`#portfolio`/`#about` bands · footer |
| Body ink | `#23214c` | 7 | `body` color · `body a` · `.contact-form input/textarea` text + placeholders |
| Accent pink | `#e54b76` | 6 | `.contact-form input[type=submit]` text + 2px border, and its hover fill (`color: white; background-color: #e54b76`) |
| Accent pink (soft) | `#ee87a4` | 3 | `body a:hover` · `.member-position` · `.blog-item-holder .info .cat-links a` |
| Section green | `#32db8a` | 2 | `.section-title-holder` block background (services) |
| Number green | `#55b286` | 2 | `.section-num span` (the 180px section numeral) |
| Section amber | `#e3a436` | 2 | `#portfolio .section-title-holder span` · `#video .section-title-holder span` — the numeral changes colour per section |
| White | `#fff` | 15 | `.section-title-holder h2` · `h1.big-title` · `.title-desc` · card text on navy |

Menu/gallery chrome from `sm-clean.css` (`#d23600`, `#555555`, `#201b55`) is vendor, not brand.

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `'Roboto', sans-serif` · 16px / 26px · 400 · `#23214c` | `body` |
| Hero `h1.big-title` | `'Montserrat'` · 56px / 100% · 700 · `#fff` · `letter-spacing: -1px` | `h1.big-title` |
| Section headings | Montserrat · 109px / 83px · 700 · white on the coloured tile | `.section-title-holder h2` |
| Watermark title | Montserrat · 180px · 700 · uppercase · `#221c5a` | `.section-content-holder .content-title` |
| Section numeral | Montserrat · 180px · 700 · `letter-spacing: -5px` · coloured per section | `.section-num span` |
| Hero subtitle | `'PT Serif', serif` · 22px / 26px · max-width 333px | `.title-desc` |
| Card titles | Montserrat · 24px (service), 20px uppercase `letter-spacing: 4px` (portfolio), 16px (post link) | `.service-title`, `.portfolio-text`, `.latest-post-bottom-text a` |

Fonts are Google-Fonts faces (Montserrat, Roboto, PT Serif) — no self-hosted files in the archive.

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Section title tile | `.section-title-holder` **370×370**, solid `#32db8a` (green) or amber per section, white 109px heading inside |
| Portfolio/video numeral | `.section-num span` 180px, `margin-left: -64px`, `letter-spacing: -5px` |
| Bands | `.intro-page` navy full-height hero; `#services`/`#portfolio`/`#about` navy; alternating white content blocks; footer navy |
| Submit button | outlined: `border: 2px solid #e54b76`, transparent fill, `color: #e54b76`, **full width**, `padding: 12px 0`, uppercase 16px, `margin-top: 30px`, no radius declared (square); hover fills `#e54b76` with white text |
| Member cards | `.member-name` 16px/26px 700; `.member-position` `#ee87a4` |

Section order measured in the reference DOM: fixed `.menu-wrapper` (navy) → hero `h1.big-title` + `.title-desc` → `SERVICES` (green 370 tile + watermark + service list) → `PORTFOLIO` (tile + grid) → `CRAFTERS` (team cards with `.member-name` / `.member-position`) → `STORIES` (blog cards, `cat-links` soft pink) → `OFFER` (prose block) → `EXPERTISE` (skills) → `Contact` (navy band, outlined pink submit, full-width) → footer (navy). No Component-Dock-style attribution in the reference; the app supplies it.

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navy navbar with the site name "Pixelcraft", section
links (Home, Services, Portfolio, About, Stories, Contact), and a hamburger toggle
that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Pixelcraft" linking to `#home`
- **AND** it SHALL show links to Home, Services, Portfolio, About, Stories and Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu

### Requirement: Hero section

The system SHALL render a dark navy hero with a background image, centered logo,
big title and subtitle.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain the headline "We Craft Awesome Web And Graphic Design Solutions"
- **AND** it SHALL contain the subtitle "Support bright students today for a better tomorrow"

### Requirement: Services section

The system SHALL render a services section with a green title block (number 01) on
the left and a 2×2 grid of service cards on the right.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the section number "01" and title "Services" in a green block
- **AND** it SHALL show 4 service cards: Branding, Mobile Apps, Web, Graphic
- **AND** each card SHALL have an icon, title and description

### Requirement: Portfolio section

The system SHALL render a portfolio section with a green title block (number 02) on
the right and a grid of portfolio items with hover overlays.

#### Scenario: Portfolio grid

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show the section number "02" and title "Portfolio" in a green block
- **AND** it SHALL show at least 4 portfolio items with images
- **AND** each item SHALL display a type label and title on hover

### Requirement: About / Crafters section

The system SHALL render an about section with a green title block (number 03) on the
left, about text, a timeline and team member cards.

#### Scenario: Team members

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the section number "03" and title "Crafters"
- **AND** it SHALL show at least 3 team member cards with name and position

### Requirement: Stories section

The system SHALL render a stories/news section with a green title block (number 04)
on the right and numbered blog posts.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the stories section is displayed
- **THEN** it SHALL show the section number "04" and title "Stories"
- **AND** it SHALL show at least 3 blog posts with titles

### Requirement: Offer section

The system SHALL render an offer/video section with a green title block (number 05) on
the left, a video thumbnail and an icon carousel.

#### Scenario: Video and carousel

- **GIVEN** the page is rendered
- **WHEN** the offer section is displayed
- **THEN** it SHALL show the section number "05" and title "Offer"
- **AND** it SHALL show a video thumbnail with a play button
- **AND** it SHALL show at least 4 carousel items

### Requirement: Expertise section

The system SHALL render a skills/expertise section with a green title block (number 06)
on the right and progress bars.

#### Scenario: Progress bars

- **GIVEN** the page is rendered
- **WHEN** the expertise section is displayed
- **THEN** it SHALL show the section number "06" and title "Expertise"
- **AND** it SHALL show progress bars for HTML, CSS, PSD and Design
- **AND** each bar SHALL display a percentage label

### Requirement: Contact section

The system SHALL render a contact section with a green title block (number 07) on the
left, descriptive text, a form and an embedded map.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the section number "07" and title "Contact"
- **AND** it SHALL show a form with Name, Email, Subject and Message fields
- **AND** it SHALL show a Send button

### Requirement: Footer

The system SHALL render a dark navy footer with copyright text, social icons and a
link to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show copyright text containing "Pixelcraft"
- **AND** it SHALL show social links for Twitter, Behance, Dribbble and Facebook
- **AND** it SHALL link to https://www.componentdock.com/ branded "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/pixelcraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/pixelcraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — it SHALL show the site name "Pixelcraft" linking to `#home
- [x] Hero section — it SHALL contain the headline "We Craft Awesome Web And Graphic Design Solutions"
- [ ] Services section — it SHALL show the section number "01" and title "Services" in a green block
- [ ] Portfolio section — it SHALL show the section number "02" and title "Portfolio" in a green block
- [ ] About / Crafters section — it SHALL show the section number "03" and title "Crafters"
- [ ] Stories section — it SHALL show the section number "04" and title "Stories"
- [ ] Offer section — it SHALL show the section number "05" and title "Offer"
- [ ] Expertise section — it SHALL show the section number "06" and title "Expertise"
- [ ] Contact section — it SHALL show the section number "07" and title "Contact"
