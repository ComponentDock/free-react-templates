# Template: Solaris (Creative Portfolio Template)

## Purpose

Solaris is a single-page creative portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Sun" HTML
template (see TEMPLATES.md), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sun" — creative portfolio / photography gallery
  template (source: https://colorlib.com/wp/template/sun/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/sun/
  (HTTP 200, ~8 KB HTML fetched + `style.css` ~35 KB parsed).
- **Screenshot analyzed:** `sun-free-template.jpg` (TEMPLATES.md) — clean
  minimal white card on a light grey background; top left has a logo;
  right-aligned horizontal nav menu (Home, About, Portfolio, Blog, Contact);
  a right-side search toggle icon; a descriptive intro paragraph
  (page-desc) at the top of the content area; filter buttons (All, Post,
  Image, Video, Extern) with dot separators; a masonry portfolio grid with
  overlay captions (CLOCK, BAG, FISH, BOTTLE, PAPER, BLUE ICE); a two-column
  text section ("The Story" / "Dreamers") with a "More…" button; footer with
  copyright, centered logo, and social links.
- **Section order (1:1):** Header (logo left + horizontal nav right + search
  toggle) → Intro description paragraph → Portfolio filter bar (All | Post |
  Image | Video | Extern) → Masonry portfolio grid (6 items with hover overlay
  captions) → Two-column text section ("The Story" / "Dreamers") → Footer
  (copyright left + logo center + social links right).
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#FD3137** (bright red) — link hover color, active filter
    button, carousel pagination selected, blog hover title, footer heart icon
    pulse, button hover text.
  - Body background: **#E2E0E0** (light warm grey) — page background outside
    the white card wrapper.
  - Card background: **#FFFFFF** — `.body-wrapper` holds all content in a
    45px-margin white card.
  - Ink: **#191919** — body text, links, headings.
  - Muted: **#A1A1A1** — search field placeholder/border; **#ADADAD** —
    blog post metadata; **#B5B5B5** — lighter muted text; **#E2DFD9** —
    filter dot separators; **#B5B5B5** — footer social links.
  - Blog hover background: **#FAF6F6** — subtle warm off-white on blog
    post hover.
  - Fonts: body **"Montserrat", sans-serif** (400 weight, 20px, line-height
    35px, letter-spacing -1px); headings / buttons / section titles
    **"PT Serif", serif** (bold, red accent).
  - Buttons: text links (no background, no border-radius, underline-style
    "More…" link with red hover); filter buttons are inline text with dot
    separators (not pill/rounded), active state = red text.
  - Portfolio grid: 3-column layout (`.p_one_third`), items have a dark
    overlay on hover with white uppercase caption text.
  - Footer: no background (transparent on white card), 260px top margin,
    3-column layout (copyright left / logo center / social links right);
    heart icon is #FD3137 with a pulse animation; social links are text
    links (Twitter, LinkedIn, Dribbble, Instagram).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/solaris-<n>/<w>/<h>`); icons → lucide-react (search,
  heart, social brand icons as SVG); Montserrat + PT Serif via Google Fonts
  `<link>`; red accent in `@theme`; no assets copied from ColorLib.

Solaris lives in `apps/solaris` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Solaris"
(logo), anchor links, and a search toggle icon.

#### Scenario: Navbar content

- **GIVEN** the Solaris page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Solaris" on the left as a
  text-based logo
- **AND** the navbar SHALL show links to Home, About, Portfolio, Blog, and
  Contact on the right
- **AND** the navbar SHALL show a search icon toggle on the far right

#### Scenario: Active link styling

- **GIVEN** the Solaris page is rendered
- **WHEN** the user is on the Home page
- **THEN** the Home link SHALL be highlighted in red (#FD3137)
- **AND** inactive links SHALL be displayed in dark text (#191919)

### Requirement: Intro description

The system SHALL display a short introductory paragraph below the header,
positioned to the right side of the content area.

#### Scenario: Intro text content

- **GIVEN** the Solaris page is rendered
- **WHEN** the user views the intro section
- **THEN** a descriptive paragraph SHALL be visible at the top of the content
  area, styled in 24px Montserrat font with 40px line-height

### Requirement: Portfolio filter bar

The system SHALL render a filter bar with category buttons separated by dot
markers, allowing the user to filter the portfolio grid.

#### Scenario: Filter buttons visible

- **GIVEN** the Solaris page is rendered
- **WHEN** the user views the portfolio section
- **THEN** filter buttons SHALL be displayed: All, Post, Image, Video, Extern
- **AND** the "All" button SHALL be active (red text) by default
- **AND** buttons SHALL be separated by dot separators (·)

#### Scenario: Filter interaction

- **GIVEN** the Solaris page is rendered
- **WHEN** the user clicks the "Image" filter
- **THEN** only portfolio items tagged as "image" SHALL be visible
- **AND** the "Image" button SHALL become active (red)
- **AND** the "All" button SHALL become inactive

### Requirement: Portfolio grid

The system SHALL display a masonry-style portfolio grid with image cards that
show an overlay caption on hover.

#### Scenario: Grid layout

- **GIVEN** the Solaris page is rendered
- **WHEN** the user views the portfolio grid
- **THEN** a 3-column grid of portfolio items SHALL be displayed
- **AND** each item SHALL show an image with a placeholder from picsum

#### Scenario: Hover overlay

- **GIVEN** the Solaris page is rendered
- **WHEN** the user hovers over a portfolio item
- **THEN** a dark overlay SHALL fade in over the image
- **AND** the item caption SHALL appear in white uppercase text

### Requirement: Two-column text section

The system SHALL render a two-column text section below the portfolio grid.

#### Scenario: Column content

- **GIVEN** the Solaris page is rendered
- **WHEN** the user scrolls to the text section
- **THEN** the left column SHALL display a "The Story" heading with
  descriptive text
- **AND** the right column SHALL display a "Dreamers" heading with
  descriptive text
- **AND** the right column SHALL include a "More…" text link that turns
  red on hover

### Requirement: Footer

The system SHALL render a footer with copyright text, a centered logo, and
social media links.

#### Scenario: Footer layout

- **GIVEN** the Solaris page is rendered
- **WHEN** the user scrolls to the footer
- **THEN** the footer SHALL display copyright text on the left with a
  pulsing heart icon
- **AND** the footer SHALL display the Solaris logo centered
- **AND** the footer SHALL display social links (Twitter, LinkedIn,
  Dribbble, Instagram) on the right

#### Scenario: Footer Component Dock link

- **GIVEN** the Solaris page is rendered
- **WHEN** the user inspects the footer
- **THEN** the footer SHALL contain a link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] Header: logo "Solaris" left, nav links right (Home, About, Portfolio,
  Blog, Contact), search icon
- [ ] Intro paragraph: 24px Montserrat, right-aligned description
- [ ] Filter bar: All | Post | Image | Video | Extern with dot separators
- [ ] Portfolio grid: 3-column masonry, 6 items, hover overlay with caption
- [ ] Two-column section: "The Story" left, "Dreamers" right with "More…" link
- [ ] Footer: copyright + heart + logo + social links (Twitter, LinkedIn,
  Dribbble, Instagram)
- [ ] Footer: Component Dock link present
- [ ] Colors: accent #FD3137, body bg #E2E0E0, card bg #FFFFFF, ink #191919
- [ ] Fonts: Montserrat (body), PT Serif (headings) via Google Fonts
- [ ] No ColorLib references in app code
- [ ] Images use seeded picsum placeholders
- [ ] Icons use lucide-react
- [ ] 100% test coverage
