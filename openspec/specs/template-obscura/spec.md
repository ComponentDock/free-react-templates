# Template: Obscura (Photography Portfolio Landing)

## Purpose

Obscura is a single-page photography magazine portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Erase" design (see TEMPLATES.md — Photography category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a bold photography magazine page: a full-height hero with the
site name rendered as a giant photo-clipped headline ("Magazine / ERASE / UK
Edition"), a stack of alternating full-width photo + editorial rows ("Make
Peace With Your Broken Pieces" by Jamie Jonson, fashion.com), and a dark
footer with brand blurb, Recent Blog widget, Site Links, and a "Have a
Questions?" contact column. Obscura recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Erase" — free photography website template
  (source: https://colorlib.com/wp/template/erase/).
- **Live preview DOM analyzed this run:** `https://preview.colorlib.com/theme/erase/`
  (HTTP 200, 30.5KB HTML) + stylesheet `css/style.css` (60.9KB). The rendered
  DOM is the reference below; the TEMPLATES.md screenshot
  (`erase-free-template.jpg`, 1200×946) confirms the visual design (dark hero,
  photo-inside-letters headline, slate-blue accents, dark footer).
- **Visual design (screenshot):** dark olive/charcoal hero with the word
  "ERASE" in massive uppercase serif (Abril Fatface) letters filled with a
  colorful photo/watercolor texture (background-clip: text); tiny widely
  letter-spaced "M A G A Z I N E" above and "U K E D I T I O N" below;
  minimalist navbar (brand top-left, hamburger top-right); below the hero,
  alternating photo + white editorial rows with a circular avatar, name in
  serif, uppercase gray "FASHION.COM"; dark `#212121` footer.
- **Section order (1:1, from the live DOM):**
  1. Navbar (`ftco_navbar`): site name "Obscura" (small uppercase) + nav links
     Home / About / Blog / Contact; hamburger on mobile.
  2. Hero (`hero-wrap js-fullheight`): `<span class="subheading">Magazine</span>`
     (12px uppercase, letter-spacing 20px), `<h1>` = site name with
     `background-image` + `background-clip: text` (photo shows through the
     letters), `<span class="subheading-2">UK Edition</span>`.
  3. Feature rows (`ftco-section ftco-no-pb ftco-no-pt`, `container-fluid`):
     eleven (11) full-width `.blog-wrap` rows, alternating
     image-left/text-right and image-right/text-left (`order-md-last`), every
     few rows dark (`bg-darken` #212121). Each row: half-width photo
     (js-fullheight), then text block with a 60px round avatar + "Jamie
     Jonson" (h4) + "fashion.com" (12px uppercase, letter-spacing 4px), a
     large h2 quote link "Make Peace With Your Broken Pieces", a paragraph
     ("Far far away, behind the word mountains…"), and a slate-blue "Read
     more" button with a forward arrow icon.
  4. Footer (`ftco-footer`, bg #212121, padding 7em): 4 columns — (a) brand
     "Obscura" (24px white) + blurb + 3 round social icons (twitter /
     facebook / instagram, 60px circles, rgba(255,255,255,.05) bg); (b)
     "Recent Blog" widget with 2 entries (photo thumb + title link + meta:
     calendar July 12, 2018 · person Admin · chat 19); (c) "Site Links"
     column (Home, About, Model, Services, Blog); (d) "Have a Questions?"
     column (address "203 Fake St. Mountain View, San Francisco, California,
     USA", phone "+2 392 3929 210", email "info@yourdomain.com"). Copyright
     bar: "© <year> All rights reserved | made with ♥ by Colorlib" (reworded
     in our version — no Colorlib credit).
- **Design tokens extracted from `css/style.css` (this run):**
  - Brand slate blue: **#69779b** (`.btn.btn-primary` background + border,
    link hover in footer blog widget; 20 uses).
  - Dark: **#212121** (footer background, `.bg-darken` feature rows, hero
    overlay `rgba(0,0,0,.3)`); white **#fff**; near-black **#000** headings.
  - Fonts (Google Fonts): **"Abril Fatface"** (cursive display — hero h1,
    340px, weight 900, uppercase, line-height 1, `background-clip: text` +
    `-webkit-text-fill-color: transparent`) and **"Poppins"** (body sans).
  - Hero h1 responsive: 340px → 200px → 150px → 100px.
  - Subheading: 12px, uppercase, weight 600, letter-spacing 20px, white.
  - Feature row h2: 50px (38px on mobile), weight 900, line-height 1.2;
    color #000 on white rows, #fff on `.bg-darken` rows.
  - `.position span`: 12px, uppercase, letter-spacing 4px (fashion.com).
  - Buttons `.btn.btn-primary`: background #69779b, border 1px solid
    #69779b, color #fff, border-radius 0.25rem, padding 0.375rem 0.75rem;
    default Bootstrap hover (#0069d9) — keep slate-blue hover instead.
  - Footer text rgba(255,255,255,.7); links rgba(255,255,255,.8), hover
    #69779b; widget h2 20px white weight 900; social circles 60px,
    border-radius 50%, bg rgba(255,255,255,.05).
  - Section rhythm: hero full-height (100vh), feature rows ~7em padding,
    footer 7em padding.
- **Recreation decisions:** repo-standard Navbar (site name, Home/About/Blog/
  Contact links, dark-mode toggle, mobile hamburger) + Footer chrome; hero =
  giant site-name headline with a seeded picsum photo clipped into the letters
  (`background-clip: text` via inline style or Tailwind arbitrary property),
  "Magazine" subheading above and "UK Edition" below; feature rows with
  alternating layout (image + avatar/name/domain + h2 quote + paragraph +
  Read more button), dark rows every few; footer with blurb + socials, Recent
  Blog widget, Site Links, contact column. All images picsum-seeded
  (`picsum.photos/seed/obscura-<n>/<w>/<h>`), Google Fonts via `<link>`,
  icons from `lucide-react` (ArrowRight, Calendar, User, MessageCircle, MapPin,
  Phone, Mail, Twitter, Facebook, Instagram, Menu).

Obscura lives in `apps/obscura` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Obscura",
nav links (Home, About, Blog, Contact), and a dark-mode toggle button. On
mobile the links SHALL collapse behind a hamburger menu.

#### Scenario: Navbar content

- **GIVEN** the Obscura page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Obscura" and links "Home",
  "About", "Blog", "Contact" pointing to the page root or anchor sections
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user presses the hamburger button
- **THEN** the nav links SHALL become visible in a menu
- **AND** the hamburger button SHALL carry an accessible label and
  `aria-expanded` state

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-height hero section with a small "Magazine"
subheading, the site name as a giant photo-clipped headline, and a "UK
Edition" subheading below it.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the subheading "Magazine" in widely letter-spaced
  uppercase text
- **AND** it SHALL show the site name "Obscura" as a level-1 headline filled
  with a photo (background-clip: text)
- **AND** it SHALL show the subheading "UK Edition" below the headline

### Requirement: Feature rows

The system SHALL render a stacked sequence of full-width alternating
photo/editorial rows, each with an author avatar, author name, domain label,
quote headline, body copy, and a "Read more" button. Some rows SHALL use a
dark background treatment.

#### Scenario: Feature row content

- **GIVEN** the page is rendered
- **WHEN** the feature rows are displayed
- **THEN** at least three rows SHALL each show a photo, a round avatar, an
  author name (e.g. "Jamie Jonson"), a domain label (e.g. "fashion.com"), a
  quote headline (e.g. "Make Peace With Your Broken Pieces"), body copy, and
  a "Read more" button

#### Scenario: Alternating layout

- **GIVEN** the feature rows are displayed
- **WHEN** the layout is rendered
- **THEN** adjacent rows SHALL alternate the photo side (left, then right,
  then left…)

#### Scenario: Dark rows

- **GIVEN** the feature rows are displayed
- **WHEN** a row uses the dark treatment
- **THEN** its background SHALL be the dark color (#212121)
- **AND** its text SHALL be white

### Requirement: Footer

The system SHALL render a dark footer with the site name, a blurb, social
icons, a "Recent Blog" widget with post entries, a "Site Links" column, and a
"Have a Questions?" contact column.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Obscura" and a blurb paragraph
- **AND** it SHALL show social icons for Twitter, Facebook, and Instagram
- **AND** it SHALL show a "Recent Blog" widget with at least two entries,
  each with a thumbnail, a title, and meta (date, author, comment count)
- **AND** it SHALL show a "Site Links" column with at least four links
- **AND** it SHALL show a "Have a Questions?" column with an address, a
  phone number, and an email address
- **AND** it SHALL show a copyright line

## Verification checklist

- [ ] `npm run spec:validate` passes (specs valid OpenSpec).
- [ ] `apps/obscura` scaffolded from the simplest existing app; package
      `@free-react-templates/obscura`; registered in root workspaces;
      `npm install` run at root so `package-lock.json` registers it.
- [ ] TDD: component tests written first; `scripts/verify-app.sh obscura`
      green (typecheck + lint + 100% coverage + build).
- [ ] Design tokens in `src/index.css` `@theme`: slate blue #69779b, dark
      #212121, white/#000 text, Abril Fatface + Poppins fonts, 0.25rem
      button radius.
- [ ] Section order matches the reference 1:1: Navbar → Hero (photo-clipped
      headline) → Feature rows (alternating, dark rows) → Footer.
- [ ] Images picsum-seeded, no ColorLib assets copied; Google Fonts via
      `<link>`; lucide-react icons.
- [ ] TEMPLATES.md updated to `[x]` with surge URL after merge; README status
      regenerated (`npm run readme:status`).
