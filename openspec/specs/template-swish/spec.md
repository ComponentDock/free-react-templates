# Template: Swish (Basketball School Template)

## Purpose

Swish is a single-page basketball-club website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Basketball" website template (see TEMPLATES.md, line 345),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a sporty basketball-school landing: a white navbar with a
phone number and REGISTER button, a cream hero with the split headline
"DEFEND &" (orange) / "DOMINATE" (black) and an orange "learn more" CTA, an
"About us / Welcome to Basketball School" split, an Upcoming Event section
with two date cards, a "Learn About Basketball" video block, a Recreational
Program split, a Player info card row, an "Our Gallery / Latest Player
Showcase" image grid, a "From The Blog / Latest News & Update" post row, a
"Follow Us Instagram" tile grid, and a five-column footer with a newsletter
form.

Brand colors: orange `#ff8b23` (primary accent — headline span, `.btn_1`
buttons, section small titles on hover, icons), light peach `#fdcb9e`
(button bottom border, hover states), darker orange `#f5790b` (hover fill),
headings `#2a2a2a`, body text `#666666`, muted gray `#999999`/`#8a8a8a`,
light section background `#f9f9ff`. Headings use Playfair Display (serif,
weight 400/900); the hero h1 uses Open Sans 800/900 uppercase 80px; body
uses Roboto 14px.

## Design reference (replication findings)

- **Original:** ColorLib "Basketball" — basketball school/club landing
  (source: https://colorlib.com/wp/template/basketball/). Listed in
  TEMPLATES.md line 345 (Basketball). Screenshot:
  `basketball-free-template.jpg` (1200×946, reviewed visually in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/basketball/ —
  reachable, fetched and analyzed. HTML saved to `/tmp/basketball.html`
  (43 KB); stylesheet `css/style.css` (135 KB — design tokens below).
  Screenshot and preview agree (cream hero, orange accents, "Defend &
  Dominate" split headline, white navbar) — the preview DOM is authoritative.
- **Fonts:** body `font-family: "Roboto", sans-serif`, `font-size: 14px`,
  paragraphs `#666666`; headings `h1–h6` `font-family: "Playfair Display",
serif`, `color: #2a2a2a`; hero h1 `.banner_text h1` `font-family: "Open
Sans", sans-serif`, `font-weight: 900`, `text-transform: uppercase`,
  80px/1 black; `.section_tittle h2` 36px/46px weight 700 `#2a2a2a` with an
  orange underline bar; small section overlines (`.section_tittle h4`)
  Playfair Display 600 uppercase 14px `#666666`. Google Fonts via `<link>` in
  `index.html` (Roboto 300/400/500, Playfair Display 400/900, Open Sans 800).
- **Buttons:**
  - `.btn_1` ("learn more"): `padding: 13px 35px`, `background: #ff8b23`,
    white 12px uppercase text + right angle icon; hover → white bg, orange
    text, 2px orange border.
  - `.btn_2` ("View Details" / REGISTER): `padding: 13px 47px`, `background:
#ff8b23`, white uppercase 12px, `border-bottom: 4px solid #fdcb9e`;
    hover → `#f5790b` solid.
  - Newsletter submit (`.click-btn`): full-width orange uppercase button.
- **Section backgrounds / layouts (from style.css):**
  - navbar + top bar: white; top bar shows phone `+02 213 - 256 (365)` (with
    orange phone icon) and a REGISTER outline button; nav links uppercase
    dark, orange hover.
  - hero `.banner_part`: cream/beige background `#fdf8f3`-ish flat color
    (screenshot), split layout — left `.banner_text`: h1 "Defend &
    <span>Dominate</span>" (span orange `#ff8b23`), gray paragraph, orange
    `learn more →` button; right: basketball illustration (recreated as a
    seeded picsum image).
  - about `.about_part`: light `#f9f9ff` background, image left, text right:
    overline "About us", h2 "Welcome to Basketball School", two paragraphs,
    `read more` btn_1; bottom center button `.btn_2` "read more".
  - upcoming event `.upcoming_event`: white bg, `.section_tittle` centered
    (overline "Upcoming Event" + h2 "Land Morning Blessed"), two event cards
    each: orange date block (day "15" + month "jun"), time
    "12:00 AM - 12:30 AM", name "Sandis peter", description, `View Details`
    btn_2.
  - learn `.learn_about`: split — left text ("free tutorial" overline, h2
    "Learn About Basketball", paragraph, play button circle), right: large
    video image with centered play button.
  - recreational `.recreational_part` (about_part variant): image right,
    text left (overline "Recreational Program", h2 "Deep which above behold
    an woter set a herb dry days.", paragraphs, read more).
  - players `.player_info`: dark/near-black band? — the preview shows player
    cards with name "Jequline Dodge", bio, club "Swords Club". Recreated as
    a light section with three player cards (photo, name, club, bio).
  - gallery `.gallery_part`: `.section_tittle` (overline "Our Gallery", h2
    "Latest Player Showcase") + responsive image grid of six tiles, each
    with hover caption "Swords Club vs Uknights Club".
  - blog `.blog_part`: section tittle (overline "From The Blog", h2 "Latest
    News & Update") + four post cards (date "12 march, 2019", title
    "Dictumst iaculis mauris egestas Nibh netus mauris suscipit.", tag
    "Sports news", "2 Comments").
  - social `.social_connect_part`: tittle (overline "Social Media", h2
    "Follow Us Instagram") + six-square Instagram-style image grid.
  - footer `.footer-area`: `#2a2a2a` dark, five columns (Top Products,
    Quick Links, Features, Resources — link lists; Newsletter — email input
    - orange "subscribe" button), copyright bar with ColorLib credit
      (paraphrased).
- **Section order (1:1 from the preview DOM):**
  1. Header top bar: phone `+02 213 - 256 (365)` + `REGISTER` button.
  2. Navbar: logo "Swish" + menu: Home · About us · team · gallery · Pages
     (dropdown: Elements, Single blog) · blog · Contact.
  3. Hero `.banner_part`: h1 "Defend & / Dominate" (span orange), paragraph,
     `learn more` btn_1 + right illustration image.
  4. About `.about_part`: overline "About us", h2 "Welcome to Basketball
     School", two paragraphs, `read more` button, left image.
  5. Upcoming Event: overline "Upcoming Event", h2 "Land Morning Blessed",
     two event cards (date block 15 jun, time 12:00 AM - 12:30 AM, Sandis
     peter, description, View Details).
  6. Learn About Basketball: overline "free tutorial", h2, paragraph, play
     button over video image.
  7. Recreational Program: overline, h2, paragraphs, `read more`, image.
  8. Player info: three player cards (Jequline Dodge + Swords Club, ...).
  9. Gallery: overline "Our Gallery", h2 "Latest Player Showcase", six-tile
     grid with captions.
  10. Blog: overline "From The Blog", h2 "Latest News & Update", four post
      cards.
  11. Social: overline "Social Media", h2 "Follow Us Instagram", six-tile
      grid.
  12. Footer: five columns + newsletter form + copyright bar.
- The template ships multiple inner pages (blog single, elements, contact) —
  NOT required; recreate the index.html single page only.

## Requirements

### Requirement: Header with top bar and navbar

The system SHALL render a white header with a top bar (phone + REGISTER
button) and a navbar with the logo and menu.

#### Scenario: Top bar

- **GIVEN** the Swish app is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show the phone number `+02 213 - 256 (365)`
  with an orange phone icon
- **AND** a `REGISTER` button SHALL be present on the right

#### Scenario: Navbar menu

- **WHEN** the navbar renders
- **THEN** the logo SHALL read "Swish" with an orange basketball icon
- **AND** the menu SHALL list Home · About us · team · gallery · Pages ·
  blog · Contact in that order
- **AND** Pages SHALL open a dropdown with "Elements" and "Single blog"

#### Scenario: Mobile menu

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the menu is collapsed
- **THEN** a hamburger toggle SHALL be shown with `aria-expanded` reflecting
  the menu state
- **AND** activating it SHALL reveal the nav links stacked vertically

### Requirement: Hero banner

The system SHALL render a cream hero with the split headline, subtext and an
orange CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the section loads
- **THEN** the headline SHALL be "Defend &" in orange `#ff8b23` on the first
  line and "Dominate" in black on the second line (uppercase, condensed
  Open Sans)
- **AND** a gray paragraph SHALL read "They are to sea i waters female from
  lights. Deep had divided to which had. For it saw firmament face whales."
- **AND** a `learn more` orange button with a right-arrow icon SHALL be
  present
- **AND** the section SHALL show a basketball-themed image on the right
  (picsum placeholder)

### Requirement: About section

The system SHALL render a split about section (image left, text right).

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the section loads
- **THEN** the overline SHALL read "About us"
- **AND** the heading SHALL read "Welcome to Basketball School"
- **AND** two paragraphs of school copy SHALL be shown
- **AND** a `read more` button SHALL be present
- **AND** a school photo (picsum placeholder) SHALL sit on the left

### Requirement: Upcoming Event section

The system SHALL render an upcoming-event section with two event cards.

#### Scenario: Event card

- **GIVEN** the events section is rendered
- **WHEN** the section loads
- **THEN** the overline SHALL read "Upcoming Event" and the heading "Land
  Morning Blessed"
- **AND** two event cards SHALL be shown, each with an orange date block
  (day "15", month "jun"), the time "12:00 AM - 12:30 AM", the name "Sandis
  peter", a short description and a `View Details` button

### Requirement: Learn About Basketball video block

The system SHALL render a split video block with a play button.

#### Scenario: Video block

- **GIVEN** the learn section is rendered
- **WHEN** the section loads
- **THEN** the overline SHALL read "free tutorial" and the heading "Learn
  About Basketball"
- **AND** a play button (circular, orange, aria-label "Play video") SHALL be
  shown over the video image
- **AND** activating it SHALL toggle a `playing` state (visually filling the
  button) — no external video required

### Requirement: Recreational Program section

The system SHALL render a second split section (image right, text left).

#### Scenario: Program content

- **GIVEN** the recreational section is rendered
- **WHEN** the section loads
- **THEN** the overline SHALL read "Recreational Program"
- **AND** the heading SHALL read "Deep which above behold an woter set a
  herb dry days."
- **AND** two paragraphs and a `read more` button SHALL be shown

### Requirement: Player info cards

The system SHALL render three player cards.

#### Scenario: Player card

- **GIVEN** the player section is rendered
- **WHEN** the section loads
- **THEN** three cards SHALL be shown, each with a player photo (picsum
  placeholder), the name "Jequline Dodge", a short bio and the club "Swords
  Club"

### Requirement: Gallery grid

The system SHALL render a responsive six-tile gallery grid.

#### Scenario: Gallery tiles

- **GIVEN** the gallery section is rendered
- **WHEN** the section loads
- **THEN** the overline SHALL read "Our Gallery" and the heading "Latest
  Player Showcase"
- **AND** six image tiles SHALL be shown, each with a hover caption "Swords
  Club vs Uknights Club"

### Requirement: Blog posts

The system SHALL render four blog post cards.

#### Scenario: Post card

- **GIVEN** the blog section is rendered
- **WHEN** the section loads
- **THEN** the overline SHALL read "From The Blog" and the heading "Latest
  News & Update"
- **AND** four cards SHALL be shown, each with the date "12 march, 2019", a
  post title, the tag "Sports news" and "2 Comments"

### Requirement: Instagram-style social grid

The system SHALL render a six-square image grid under "Follow Us Instagram".

#### Scenario: Social tiles

- **GIVEN** the social section is rendered
- **WHEN** the section loads
- **THEN** the overline SHALL read "Social Media" and the heading "Follow Us
  Instagram"
- **AND** six square image tiles SHALL be shown with Instagram icon overlays

### Requirement: Footer

The system SHALL render a dark five-column footer with a newsletter form.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the footer loads
- **THEN** it SHALL have a dark background with five columns: "Top
  Products", "Quick Links", "Features", "Resources" (link lists) and
  "Newsletter" (email input + orange `subscribe` button)
- **AND** the newsletter SHALL validate the email and show a success
  confirmation on valid submit, an error on invalid input
- **AND** a copyright line SHALL read "© 2026 Swish — Basketball school
  template" (paraphrase of the ColorLib credit line)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Swish app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Swish — Basketball School Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (hero and
  splits stack on mobile)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/swish`
      (`scripts/verify-app.sh swish` in FAST_MODE; full `npm run gate` in CI).
- [ ] Visual fidelity: white header (top bar phone + REGISTER, uppercase
      nav, Pages dropdown), cream hero ("Defend &" orange / "Dominate"
      black, gray paragraph, orange `learn more →`), about split, two event
      cards with orange date blocks, video block with play toggle, program
      split, three player cards, six-tile gallery with hover captions, four
      blog cards, six-tile Instagram grid, dark five-column footer with
      working newsletter form match the Basketball preview 1:1.
- [ ] Design tokens in `@theme`: orange `#ff8b23`, light peach `#fdcb9e`,
      hover orange `#f5790b`, headings `#2a2a2a`, body `#666666`, muted
      `#999999`, light bg `#f9f9ff`, cream hero `#fdf8f3`; Roboto + Playfair
      Display + Open Sans via Google Fonts.
- [ ] Buttons: `.btn_1` (orange, white text, arrow, hover inverts) and
      `.btn_2` (orange with 4px peach bottom border, hover `#f5790b`).
- [ ] Placeholder images use `picsum.photos/seed/swish-<n>/<w>/<h>` (hero,
      about, video, players, gallery, blog, social); lucide-react icons;
      no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Basketball"), preview
      URL (https://preview.colorlib.com/theme/basketball/), design tokens,
      and what differs (name, placeholders, inner pages not recreated).
