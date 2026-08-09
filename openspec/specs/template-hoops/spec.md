# Template: Hoops (Basketball Club Landing)

## Purpose

Hoops is a single-page basketball-club landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Basketball" design (see TEMPLATES.md, Bootstrap category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light, sporty page with orange accents: a header with a
top bar (logo, phone number, REGISTER button) and a main nav, a full-width
"Defend & Dominate" hero slider over an illustrated street-ball scene, an
"About us / Welcome to Basketball School" split, an "Upcoming Event" row of
date cards, a photo-background "Learn About Basketball" band, a "Recreational
Program" split, a "player info" slider (player photo + name + club badge),
a "Latest Player Showcase" gallery grid, a "Latest News & Update" blog row,
a "Follow Us Instagram" photo strip, and a light footer with Top Products /
Quick Links / Features / Resources / Newsletter widgets. Hoops recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Basketball" — free basketball club website template
  (source: https://colorlib.com/wp/template/basketball/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/basketball/`
  (HTTP 200, 43.8KB) + stylesheet `css/style.css` (135.5KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`basketball-free-template.jpg`) confirms the visual design (white header
  with top bar, cream hero with an illustrated road-and-basketballs scene,
  orange "DEFEND" accent, geometric sans headings).
- **Section order (1:1):**
  1. Header (`header_part`): top bar — logo (basketball icon + "Basketball
     CLUB TEAM"), phone `+02 213 - 256 (365)`, bordered REGISTER button; main
     nav — Home / About us / team / gallery / Pages dropdown (Elements,
     Single blog) / blog / Contact + social icons.
  2. Hero slider (`banner_part`): 800px-tall swiper slider, background image
     (`img/banner_bg.png`), centered-left H1 `<span>Defend &</span> Dominate`
     (orange "Defend &" + black "Dominate"), grey lorem copy, orange
     uppercase `btn_1` "LEARN MORE" with arrow.
  3. About (`about_part`): "About us" label + H2 "Welcome to Basketball
     School", two paragraphs, `btn_2` "READ MORE", about image.
  4. Upcoming events (`upcoming_event section_padding`): "Upcoming Event"
     label + H2 "Land Morning Blessed", 2 event cards — date block (15 / jun),
     time `12:00 AM - 12:30 AM`, name "Sandis peter", copy "Divided living
     they're Subdue man also dont...", "View Details" link.
  5. Learn about (`learn_about section_padding`): photo background band
     (`img/learn_about_bg.png`), white H4 "free tutorial" + white H2 "Learn
     About Basketball".
  6. Recreational program (`about_part recreational_part`): mirror of the
     About split — H4 "Recreational Program", H2 "Deep which above behold an
     woter set a herb dry days." (lorem), two paragraphs, "READ MORE" button.
  7. Player info (`player_info section_padding`): light cream `#fff7ef`
     band, slider (2 slides, identical content): player photo, H3 "Jequline
     Dodge", "Swords Club" badge, bio copy.
  8. Gallery (`gallery_part`): "Our Gallery" label + H2 "Latest Player
     Showcase", 8-item grid (`single_gallery_item`) with hover overlay text
     (e.g. "Swords Club vs Uknights Club").
  9. Blog (`blog_part section_padding`): "From The Blog" label + H2 "Latest
     News & Update", 4 cards (`single-home-blog`) — thumb, date meta
     "12 march, 2019", H5 title "Dictumst iaculis mauris egestas Nibh netus
     mauris suscipit.", excerpt.
  10. Social connect (`social_connect_part`): "Social Media" label + H2
      "Follow Us Instagram", 6-image photo strip (`single-social_connect`)
      with hover overlay + social icons.
  11. Footer (`footer-area section_padding`): light `#fff7ef` background,
      4 widget columns — Top Products (Managed Website, Manage Reputation,
      Power Tools, Marketing Service), Quick Links (Jobs, Brand Assets,
      Investor Relations, Terms of Service), Features, Resources (Guides,
      Research); Newsletter widget with email input; copyright line
      "© <year> All rights reserved".
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff8b23** (orange — 52 uses: buttons, "Defend &" accent,
    hover states) with light-orange button underline **#fdcb9e**.
  - Buttons: `.btn_1` = `background-color: #ff8b23`, padding 13px 35px,
    font-size 12px, uppercase, `border: 2px solid transparent`; `.btn_2` =
    padding 13px 47px, same orange, `border-bottom: 4px solid #fdcb9e`.
  - Section backgrounds: header **#fff**; hero image `banner_bg.png`
    (cream/illustrated); player_info + footer **#fff7ef** (light cream);
    learn_about photo bg with white text.
  - Text: section titles **#2a2a2a** (36px, weight 700), body/muted
    **#8a8a8a** / **#999999**; footer links **#8a8a8a**, widget headings
    **#2a2a2a**.
  - Fonts: **"Open Sans"** (sans — body/nav) + **"Playfair Display"** (serif
    — headings) via Google Fonts (Roboto appears only in unused rules).
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo slider with
  the "Defend & Dominate" headline (orange "Defend &" span), copy and an
  orange uppercase CTA; about split with image + read-more button; upcoming
  events row with date-block cards; learn-about photo band with white
  heading; recreational split; player slider (photo + name + club badge);
  8-item gallery grid with hover overlay; 4 blog cards with date meta; 6-item
  Instagram-style photo strip; footer with 4 link columns + newsletter
  (success-state form); all images picsum-seeded
  (`picsum.photos/seed/hoops-N/w/h`); Google Fonts via `<link>`.

Hoops lives in `apps/hoops` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Hoops", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hoops page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Hoops" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline with a two-tone accent, supporting copy, and an orange CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Defend & Dominate") with the first phrase in the brand color
- **AND** it SHALL show supporting copy
- **AND** it SHALL show an uppercase CTA button (e.g. "Learn More") styled with the brand color

### Requirement: About section

The system SHALL render an about section with a label, a heading, supporting
copy, a read-more button, and an image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a small label (e.g. "About us") and a heading (e.g. "Welcome to Basketball School")
- **AND** it SHALL show at least one lead paragraph and a read-more button
- **AND** it SHALL show an image beside the text

### Requirement: Upcoming events

The system SHALL render an upcoming-events section with a heading and at
least two event cards.

#### Scenario: Event cards

- **GIVEN** the page is rendered
- **WHEN** the upcoming-events section is displayed
- **THEN** it SHALL show a label (e.g. "Upcoming Event") and a heading (e.g. "Land Morning Blessed")
- **AND** it SHALL render event cards, each with a date block, a time, an event name, and a "View Details" link

### Requirement: Learn about band

The system SHALL render a photo-background band with a white label and
heading.

#### Scenario: Learn about content

- **GIVEN** the page is rendered
- **WHEN** the learn-about band is displayed
- **THEN** it SHALL show a label (e.g. "free tutorial") and a heading (e.g. "Learn About Basketball") in light text over a background image

### Requirement: Recreational program

The system SHALL render a second about-style split with a label, a heading,
copy, and a read-more button.

#### Scenario: Recreational content

- **GIVEN** the page is rendered
- **WHEN** the recreational-program section is displayed
- **THEN** it SHALL show a label (e.g. "Recreational Program") and a heading
- **AND** it SHALL show at least one paragraph and a read-more button

### Requirement: Player info

The system SHALL render a player section with a player photo, name, club
badge, and bio.

#### Scenario: Player content

- **GIVEN** the page is rendered
- **WHEN** the player section is displayed
- **THEN** it SHALL show a player photo, a name (e.g. "Jequline Dodge"), and a club badge (e.g. "Swords Club")
- **AND** it SHALL show a short bio paragraph

### Requirement: Gallery

The system SHALL render a gallery section with a heading and a grid of at
least six image items with hover overlay text.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show a label (e.g. "Our Gallery") and a heading (e.g. "Latest Player Showcase")
- **AND** it SHALL render gallery items, each with an image and a hover overlay caption

### Requirement: Blog

The system SHALL render a blog section with a heading and at least two blog
cards, each with an image, date meta, a title, and an excerpt.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a label (e.g. "From The Blog") and a heading (e.g. "Latest News & Update")
- **AND** it SHALL render blog cards with a date meta row, a title, and an excerpt

### Requirement: Social strip

The system SHALL render a social section with a heading and a strip of
image tiles with social icons.

#### Scenario: Social content

- **GIVEN** the page is rendered
- **WHEN** the social section is displayed
- **THEN** it SHALL show a label (e.g. "Social Media") and a heading (e.g. "Follow Us Instagram")
- **AND** it SHALL render at least four image tiles with social icon links

### Requirement: Footer

The system SHALL render a footer with the site name, link columns, a
newsletter form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Hoops" and link columns (e.g. Top Products, Quick Links, Features, Resources)
- **AND** it SHALL show a newsletter form with an email input and submit button
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

#### Scenario: Newsletter submit

- **GIVEN** the footer is rendered
- **WHEN** the user submits the newsletter form with a valid email
- **THEN** the form SHALL show a success message
- **AND** the email input SHALL no longer be present

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Hoops app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Hoops — Basketball Club Template"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- hoops` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → about →
      upcoming events → learn about → recreational program → player →
      gallery → blog → social strip → footer).
- [ ] Design tokens applied: orange brand #ff8b23 buttons (with #fdcb9e
      underline), #2a2a2a section titles, #fff7ef player/footer backgrounds,
      Open Sans body, Playfair Display headings.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Basketball), preview URL, tokens,
      and renames.
