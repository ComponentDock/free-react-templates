# Template: Alms (Charity & Fundraising Landing)

## Purpose

Alms is a single-page charity and fundraising landing template in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free "Givehope" website template design (see TEMPLATES.md), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source design:** ColorLib "Givehope" — https://colorlib.com/wp/template/givehope/
- **Row accounting:** TEMPLATES.md line 1270 (`## Charity`, row "Givehope")
  previously credited `apps/givehope`, but that app's copy is "Bcharity"'s
  (`About Our Charity`, `Donate Now` — 0 exclusive hits for Givehope) and
  Bcharity already ships as `givemore` (row 1253). The Givehope design was
  therefore never built; this template closes that gap and the row is
  re-pointed at `alms` (the `flint` shape — see docs/spec-row-mismatch.md).

## Design reference (replication findings)

- **Preview URL:** `https://preview.colorlib.com/theme/givehope/` — HTTP 200,
  31,363 B rendered DOM, fetched with `curl -4` (the preview host IP-bans IPv6).
  Page title: "GiveHope &mdash; Website Template by Colorlib".
- **Stylesheets:** Bootstrap 4 stack plus **`css/style.css`** (main, 23,189 B,
  sha256 `48b382c553e6de2be3bb0a40c25a06a1116bc4cf66362cbd994829b4c1be97e1`),
  with open-iconic, ionicons, flaticon, owl-carousel, animate/aos and
  fancybox alongside it.
- **Screenshot:** `givehope-free-template.jpg` (AVIF, 60,619 B, viewed) — a
  full-bleed photo hero (a hand holding banknotes) under a 40 % black scrim,
  a centred thin-weight white headline, a white-outline circular play button
  with a yellow "Watch Video" label; the navbar is transparent over the photo
  with a wide-tracked uppercase wordmark. Below the hero: a white band split
  into a **solid yellow panel** (counter + white square button) on the left and
  a "Who Are We?" text column on the right, then a three-up icon row.
- **Visual design:** warm, human charity aesthetic — a single chromatic accent
  (`#f7ca44` yellow) used for panels, buttons, links, the success-story overlay
  and photo date badges; near-black Dosis light-weight headings; Overpass
  300-weight body copy at 16px/1.8; **square** (0 radius) buttons with 2px
  borders, 14px uppercase labels and `.2em` letter-spacing; deep grey
  `#404040` footer; alternating `#fafafa` bands.
- **Structure (1:1, index page):**
  1. `nav.ftco-navbar-light` — absolute over the hero (10px from the top),
     transparent on desktop, `#000` on mobile; wordmark + Home · How It Works ·
     Donate · Gallery · Blog · About · Contact; hamburger below 992px.
  2. `div.block-31` → `div.block-30.block-30-sm` — 70vh cover-photo carousel
     (single slide in the DOM), `:before` black scrim at 40 % opacity, centred
     `.heading` at 70px, and a `Watch Video` play link (50px circle, 1px white
     border, yellow label).
  3. `div.site-section.section-counter` — two columns: left `block-48` **yellow
     panel** (`padding: 50px`, black text, "Served Over", 70px counter
     `1,321,901`, "Children in 150 Countries", white square "View Our Program"
     button); right `welcome-text` with a `display-4` "Who Are We?" heading,
     a `lead` paragraph, a second paragraph and a yellow "Learn More" button.
  4. `div.site-section.border-top` — three `media.block-6` features (Our
     Mission / Make Donations / We Need Volunteers), 50px yellow icon, 18px
     heading, `#a2a2a2` copy, underlined "Learn More" link.
  5. `div.site-section.fund-raisers.bg-light` — centred "Latest Fundraisers"
     heading, lead paragraph, "View All Fundraisers" link, then a carousel of
     six `card.fundraise-item` cards: top image, 24px title, copy, 0.2rem
     progress track `#f2f2f2` with a yellow bar, italic "Last donation 1w ago",
     "$12,000 raised of $30,000".
  6. `div.site-section.fund-raisers` — "Latest Donations" heading, lead,
     "View All Donations" link, then four `person-donate` cards: 180px rounded
     avatar, name, muted relative time ("Donated Just now"), and
     "Donated $252 for Water Is Life. Clean Water In Urban Area".
  7. `div.featured-section.overlay-color-2` — cover photo under a **90 %
     yellow overlay**: photo left, right column with uppercase white
     "Success Stories" eyebrow, h2, paragraph, bold "We have raised $100,000"
     and a green-bordered "Read The Full Story" button.
  8. `div.site-section.bg-light` — "Latest News": three `post-entry` cards with
     a yellow date badge over the photo, 20px title, date, excerpt and
     "Read More".
  9. `div.featured-section.overlay-color-2` — volunteer band: photo left, right
     "Be A Volunteer Today" + `form-volunteer` with name and email fields and
     a white submit button.
  10. `footer.footer` — `#404040` ground, white headings: About Us, Recent Blog
      (three thumbnails with date/author/comment meta), Get Connected (address,
      phone, email), then the copyright line.
- **Design tokens (measured from the theme sheet):**

  | Token            | Value                 | Evidence                                          |
  | ---------------- | --------------------- | ------------------------------------------------- |
  | Accent           | `#f7ca44`             | `.block-48`, `.btn-primary`, `.bg-primary`, `.featured-section.overlay-color-2:before`, `.post-entry .date`, footer links |
  | Ink              | `#000000`             | `h1, h2, h3` — `font-weight: 300`, Dosis           |
  | Body             | `#555555`             | `body` — Overpass, 16px, line-height 1.8, weight 300 |
  | Muted            | `#999999`, `#a2a2a2`, `#b3b3b3`, `#cccccc` | buttons, feature copy, donor time, meta     |
  | Surfaces         | `#ffffff`, `#fafafa`  | page / `.bg-light` bands                           |
  | Track / lines    | `#f2f2f2`             | `.custom-progress-success`, `.border-top`          |
  | Footer           | `#404040`             | `.footer` background                               |
  | Success          | `#28a745`             | `.btn.btn-success` border                          |
  | Type             | Dosis (headings, 300), Overpass (body, 300/400) | `font-family` declarations        |
  | Radii            | buttons `0`, images `7px`, progress/thumb `4px`, play circle `50%` | sheet rules |
  | Buttons          | 2px transparent border, 14px uppercase `.2em` tracking, `0 5px 20px -5px rgba(0,0,0,.5)` | `.btn` |

- **What differs from the reference:** new name (`Alms`), picsum.photos seeded
  placeholders instead of the demo photos, lucide-react icons instead of the
  icon fonts, the owl-carousel/fancybox/parallax scripts replaced by static
  grids and CSS transitions, and the counter rendered at its final value
  (no count-up animation). The footer's source credit is replaced by the
  mandatory Component Dock link.

## Requirements

### Requirement: Transparent navbar with mobile menu

The page SHALL render a navbar that sits over the hero: the `Alms` wordmark, the
links Home, How It Works, Donate, Gallery, Blog, About and Contact, and a
hamburger toggle below the desktop breakpoint.

#### Scenario: Desktop navbar renders brand and links

- **WHEN** the page loads
- **THEN** the navigation shows the `Alms` wordmark and all seven links
- **AND** the first link is marked as the active section

#### Scenario: Mobile menu toggles

- **WHEN** the user presses the menu button
- **THEN** the mobile panel opens and exposes the same links
- **WHEN** the user presses a link inside the panel
- **THEN** the panel closes

### Requirement: Photo hero with a video link

The page SHALL open with a full-width cover-photo hero under a dark scrim,
carrying a single centred headline and a "Watch Video" play link.

#### Scenario: Hero renders headline and play link

- **WHEN** the page loads
- **THEN** the hero shows the heading "Every Gift Grows Into Hope"
- **AND** a link labelled "Watch Video" with a circular play icon

### Requirement: Counter panel and introduction

The page SHALL place a yellow counter panel beside the introduction: "Served
Over", the figure `1,321,901`, "Children in 150 Countries", a "View Our Program"
button; the right column SHALL carry the "Who Are We?" heading, two paragraphs
and a "Learn More" button.

#### Scenario: Counter figures are rendered

- **WHEN** the counter band renders
- **THEN** it shows "Served Over", the formatted figure `1,321,901` and
  "Children in 150 Countries"
- **AND** the "View Our Program" button targets the fundraisers section

#### Scenario: Introduction column

- **WHEN** the counter band renders
- **THEN** the "Who Are We?" heading and both paragraphs are present
- **AND** the "Learn More" link points at the about anchor

### Requirement: Three feature blurbs

The page SHALL render three icon features — Our Mission, Make Donations and
We Need Volunteers — each with a short blurb and a "Learn More" link.

#### Scenario: All three features render

- **WHEN** the feature band renders
- **THEN** each of the three headings is visible with its icon and blurb
- **AND** three "Learn More" links are rendered

### Requirement: Latest fundraisers grid

The page SHALL list six fundraiser cards, each with an image, title, blurb, a
progress bar whose fill reflects raised-over-goal, the last-donation note and
the "$12,000 raised of $30,000" summary.

#### Scenario: Fundraiser cards render with progress

- **WHEN** the fundraiser section renders
- **THEN** six card titles are visible, starting with "Clean Water for Urban
  Schools"
- **AND** each card exposes a progress bar with an accessible name and a fill
  of 40 %

#### Scenario: Fundraisers header links

- **WHEN** the section header renders
- **THEN** it shows the "Latest Fundraisers" heading and a "View All Fundraisers"
  link

### Requirement: Latest donations list

The page SHALL list four donor cards with an avatar, the donor's name, the
relative time and the amount donated toward a named cause.

#### Scenario: Donor cards render

- **WHEN** the donations section renders
- **THEN** four donor names are visible
- **AND** each card states the amount and the cause it was given to
- **AND** the section offers a "View All Donations" link

### Requirement: Success story band

The page SHALL render a Yellow-overlaid photo band labelled "Success Stories"
with a headline, a paragraph, the raised total and a "Read The Full Story"
button.

#### Scenario: Success story content

- **WHEN** the band renders
- **THEN** the eyebrow "Success Stories" and the headline are visible
- **AND** the raised total "We have raised $100,000" is shown
- **AND** the "Read The Full Story" link is rendered

### Requirement: Latest news cards

The page SHALL render three news cards with a photo, a date badge, a title, the
date, an excerpt and a "Read More" link.

#### Scenario: News cards render

- **WHEN** the news section renders
- **THEN** three post titles are visible, each with its date
- **AND** three "Read More" links are rendered

### Requirement: Volunteer signup form

The page SHALL render a volunteer band with a photo and a form collecting a name
and an email address, validating both fields before showing a confirmation.

#### Scenario: Empty submit is rejected

- **WHEN** the user submits the form without filling either field
- **THEN** a validation message is shown for the name
- **AND** no confirmation is shown

#### Scenario: Invalid email is rejected

- **WHEN** the user enters a name and a malformed email and submits
- **THEN** a validation message is shown for the email

#### Scenario: Valid submit confirms

- **WHEN** the user enters a name and a valid email and submits
- **THEN** a confirmation message naming the volunteer is shown
- **AND** the form fields are cleared

### Requirement: Footer with Component Dock credit

The page SHALL close with a dark footer holding About Us, Recent Blog and Get
Connected columns, the copyright line and a link to
`https://www.componentdock.com/` branded "Component Dock".

#### Scenario: Footer columns and credit

- **WHEN** the footer renders
- **THEN** the About Us, Recent Blog and Get Connected headings are visible
- **AND** the three recent posts and the contact details are listed
- **AND** a "Component Dock" link points at https://www.componentdock.com/

### Requirement: Clean provenance

The application SHALL NOT carry the source design's provenance: no file under
`apps/alms/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/alms/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing
  at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `apps/alms` exists with package name `@free-react-templates/alms`
- [ ] `vite.config.ts` registers `injectUiSource()` (see docs/conventions.md)
- [ ] Fonts Dosis + Overpass loaded via Google Fonts `<link>`
- [ ] Brand yellow `#f7ca44` (+ hover `#e0b32e`), ink `#000`, body `#555555`,
      band `#fafafa`, footer `#404040` defined in `@theme`
- [ ] Section order matches the reference 1:1 (nav → hero → counter + intro →
      features → fundraisers → donations → success story → news → volunteer
      form → footer)
- [ ] Per-app gate passes: `scripts/verify-app.sh alms` (typecheck + lint +
      100% coverage tests + build)
- [ ] Full gate passes on merge (CI `npm run gate`), nightly sweep green
- [ ] TEMPLATES.md row 1270 re-pointed from `givehope` to `alms` after merge
- [ ] `npm run readme:status` regenerates the README Templates status table
- [ ] PR description states: source template (ColorLib Givehope), preview URL,
      design tokens, what differs (rename, picsum placeholders, static grid
      instead of carousels, counter without count-up animation)
