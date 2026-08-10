# Template: Generous (Non-profit / Charity Template)

## Purpose

Generous is a single-page non-profit / charity website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Giving" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Giving" — free responsive Bootstrap 4 non-profit /
  charity website template (source: https://colorlib.com/wp/template/giving/).
  TEMPLATES.md has THREE copies of this item (line 406 in the Bootstrap
  category, line 1269 in the Charity category, and line 1298 in the Church
  category — mark ALL THREE `[x]` when done). All three rows reference the
  correct screenshot (`giving-free-template.jpg`).
- **Demo DOM analyzed:** REACHABLE. `https://preview.colorlib.com/theme/giving/`
  returns HTTP 200 (curl verified 2026-08-11, 67 KB rendered HTML). Page
  title: "Givig - Non-profit Free Bootstrap 4 Template by Colorlib" (source
  typo — the brand renders as "GIVING" in the page). The rendered page is the
  full template: dark navbar, 100vh hero slider, 3-column feature row, green
  overlay "Featured" donation block with progress, Top Fundraisers card grid,
  Latest Donations person grid, teal overlay "Thanks To All Donors" section,
  Latest News post grid, About Us mini-cards, 4-column footer. Stylesheets
  analyzed: `css/style.css` (58 KB — carries all component tokens below);
  Bootstrap 4 utilities (`bg-dark`, `bg-light`, `bg-success`, `bg-warning`)
  come from `css/bootstrap.min.css`; icons are flaticon/icomoon glyphs.
- **Screenshot:** `giving-free-template.jpg` (1200×946, verified live in a
  browser via vision) — consistent with the live preview: soft blue-sky /
  blurred-photo hero with the handwritten headline "Please Help African
  Children Give Them A Better Life." over a photo of a boy in a green
  t-shirt (heading left, photo right), white 3-column feature row below with
  teal icons + "Learn More" links (Medical Mission / Make Donation Now / We
  Need Volunteers), stark white lower sections. The DOM is the ground truth
  for copy and section order.
- **Visual design (from live preview + browser vision):** warm, hopeful
  charity aesthetic. Mint/teal green **`#79ccab`** brand color on buttons,
  links, progress accents and the second overlay section; bootstrap success
  green **`#28a745`** on the first overlay section and fund-raiser progress
  fills; dark **`#343a40`** navbar; white page with **`#fafafa`** light
  sections; dark gray **`#404040`** footer. Headlines and the brand use the
  rounded handwritten font **Gaegu** (hero h1 at 80px, navbar brand at 30px
  uppercase, footer headings at 20px uppercase) over the **Poppins** body —
  a personal, human touch contrasting with the clean sans-serif UI. Photos
  are charity-typical (children, field settings). The demo brands itself
  "GIVING"; recreation uses the NEW name **Generous**.

- **Structure (1:1, section order — from the live DOM):**
  1. Navbar (`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark
ftco-navbar-light`) — dark `#343a40` bar: Gaegu uppercase wordmark
     **"Generous"** (30px, letter-spacing .1em, white) left; white nav links
     **Home (active) / Donate / Gallery / Blog / About / Contact** right;
     mobile hamburger toggle.
  2. Hero slider (`block-31 owl-carousel loop-block-31` of `block-30 item`
     slides) — full-height (100vh) slides, black overlay at opacity .4.
     Each slide is a `row align-items-center`: LEFT `col-md-7` with the white
     Gaegu h2 **"Please Help African Children Give Them A Better Life."**
     (40px mobile / 80px desktop); RIGHT photo. Carousel bar dots (40px ×
     2px white bars, opacity .3 → 1 active) + prev/next arrows at
     bottom-right, outside the slide content. NOTE: the hero has NO buttons —
     "Make Donation Now" / "We Need Volunteers" belong to the feature row.
  3. Feature row (`site-section`) — THREE `col-md-4 media block-6` blocks:
     circular teal icon (flaticon glyphs: first-aid-kit / donate /
     volunteers) + h3 heading **Medical Mission / Make Donation Now / We
     Need Volunteers** + lorem paragraph ("A small river named Duden flows
     by their place and supplies it with the necessary regelialia.") +
     teal **"Learn More"** link.
  4. Featured donation (`site-section featured-donate overlay-color`) —
     green **`#28a745`** overlay at opacity .9 over a background photo;
     split row: LEFT `col-lg-4 pr-lg-5` text block: small meta
     **"Featured"**, h3 **"School in Africa Need Renovations"** (white,
     weight 900), white copy ("Far far away, behind the word mountains…"),
     **"Last donation 1w ago"**, progress bar (`progress custom-progress`,
     thin .2rem white track, `progress-bar bg-warning` yellow `#ffc107`
     fill), **"$8,100 raised of $30,000"**, and a large **"Donate Now"**
     button (`btn btn-primary btn-hover-white py-3 px-5`); RIGHT `col-lg-8
order-lg-2` photo.
  5. Top Fundraisers (`site-section fund-raisers`) — centered heading
     **"Top Fundraisers"**; SIX `card fundraise-item` in a 3-column grid
     (`col-md-6 col-lg-4`): photo, `card-body`: h4 card-title
     **"Children Needs Food"** (all six), card-text "Some quick example
     text to build on the card title…", **"Last donation 1w ago"**, progress
     bar (`custom-progress-success` + `progress-bar bg-success` green
     `#28a745` fill), **"$8,100 raised of $30,000"**.
  6. Latest Donations (`site-section`) — centered heading
     **"Latest Donations"**; FOUR person cards (`col-md-6 col-lg-3`,
     `person-donate text-center bg-light pt-4`): 100px circular avatar,
     name (**Jean Smith / Christine Charles / Albert Sluyter / Andrew
     Holloway**), "Donated 3 hours ago", and a `donate-amount d-flex` row
     (label "Donated" + amount **$1,150 / $150 / $534 / $2,500**).
  7. Featured section (`featured-section overlay-color-2`) — teal
     **`#79ccab`** overlay at opacity .9 over a photo; split row: LEFT
     `col-md-6` photo; RIGHT `col-md-6 pl-md-5`: white h2 **"School in
     Africa Need Renovations. Thanks To All Donors"**, white copy, bold
     **"We have raised $30,000"**, and a **"Read The Full Story"** button.
  8. Latest News (`site-section bg-light` — `#fafafa`) — heading
     **"Latest News"**; THREE `post-entry` cards (`col-12 col-sm-6
col-md-6 col-lg-4`): date meta **"July 26, 2018"**, h3 title (**Be A
     Volunteer Today / You May Save The Life of A Child / Children That
     Needs Care**), excerpt ("Far far away, behind the word mountains…"),
     **"Read More"** link.
  9. About Us (`site-section`) — heading **"About Us"** + copy ("Far far
     away, behind the word mountains… Separated they live in
     Bookmarksgrove…") with right-aligned links **"Join Volunteer"** and
     **"Blog"**; below, THREE `block-21 d-flex` mini-cards (`col-md-6
col-lg-4`): small thumb + text block (h3 + paragraph): **Give Meal A
     Day / Free Education For African Children / Join As A Volunteers**.
  10. Footer (`footer`, background **`#404040`**) — FOUR columns:
      - **About Us**: copy + social icon links (facebook, twitter,
        instagram, linkedin — icomoon glyphs);
      - **Blog**: recent-post list (`block-21` small thumbs + white
        headings + gray meta);
      - **Contact Info** (`block-23`): "203 Fake St. Mountain View, San
        Francisco, California, USA", "+2 392 3929 210",
        "info@yourdomain.com", "Monday — Friday 8:00am - 5:00pm";
      - bottom copyright bar: "Copyright © <year> All rights reserved |
        This template is made with ♥ by Colorlib".
        Footer headings: Gaegu cursive 20px uppercase, letter-spacing .1em,
        white; links white → hover teal `#79ccab`; meta gray.

- **Design tokens (extracted from `css/style.css` + Bootstrap classes):**
  - Brand mint/teal **`#79ccab`** — `.btn-primary` bg + border, feature-row
    icon + "Learn More" link color, footer link hover, `.overlay-color-2`
    overlay, `.btn-primary` hover `#5dc19a` / border `#54be94`.
  - Success green **`#28a745`** — `.overlay-color` overlay (featured
    donate), fund-raiser progress fills (`bg-success`).
  - Warning yellow **`#ffc107`** — featured-donate progress fill
    (`bg-warning`).
  - Dark navbar **`#343a40`** (Bootstrap `bg-dark`); nav links
    `rgba(255,255,255,.5)` → hover `.75` → active white.
  - Button text **`#212529`** (dark on green); body text grays `#6c757d` /
    `#495057`; section light **`#fafafa`** (`bg-light` override).
  - Footer background **`#404040`**; white text; footer headings Gaegu 20px
    uppercase letter-spacing .1em.
  - Fonts — **Poppins** (body) and **Gaegu** (cursive display: navbar
    brand 30px uppercase .1em, hero heading 80px desktop / 40px mobile,
    footer section headings 20px uppercase) — Google Fonts `<link>`s in
    `index.html`.
  - Buttons — Bootstrap 4 `.btn`: radius 4px (0.25rem), `btn-primary` bg
    `#79ccab` with dark `#212529` text; large CTAs `py-3 px-5` (Donate Now,
    Read The Full Story); `btn-hover-white` hover variant; no pill shapes.
  - Hero — 100vh slides, black overlay opacity .4, left-aligned white Gaegu
    heading in `col-md-7`, photo right; carousel bar dots (40px × 2px,
    white, opacity .3/1) + arrows at bottom-right.
  - Overlays — `.overlay-color` green `#28a745` and `.overlay-color-2` teal
    `#79ccab`, both opacity .9 over a photo; white text (headings weight
    900).
  - Progress bars — `.custom-progress` thin (height .2rem) white track,
    fill `bg-success` `#28a745` (fundraisers) or `bg-warning` `#ffc107`
    (featured donate); `$X raised of $Y` caption below.
  - Person cards — `person-donate` `bg-light` `#fafafa`, centered, 100px
    circular avatars, `donate-amount` flex row (label + amount).
  - Section rhythm — `.site-section` padding 4em 0; section headings
    centered (Top Fundraisers, Latest Donations, Latest News) or left with
    right-side links (About Us); `bg-light` sections alternate with white.
  - Footer — `#404040` background, 4-column layout, white + gray text.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/generous-<n>/<w>/<h>`; hero ~1600×1000-class, cards
  ~600×400-class, avatars 100×100, thumbs ~150×100-class); icons →
  lucide-react (e.g. HeartHandshake/Heart for donate, Users for volunteers,
  BriefcaseMedical/Medkit for medical mission) with social brand icons as
  inline SVG (lucide-react removed brand glyphs); fonts via Google Fonts
  `<link>` (Poppins + Gaegu) in `index.html`; logo recreated as a text
  wordmark "Generous" (white Gaegu uppercase on the dark navbar); the hero's
  rotating slides may auto-rotate or stay on slide 1 — the heading must
  always be visible.

Generous lives in `apps/generous` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Dark navbar with wordmark and nav links

The system SHALL render a dark `#343a40` navbar with the Generous wordmark,
six white nav links, and a mobile hamburger toggle.

#### Scenario: Navbar layout

- **GIVEN** the Generous page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the white Gaegu uppercase wordmark
  "Generous" on the left
- **AND** the links Home (active), Donate, Gallery, Blog, About, and Contact
  SHALL be shown in white on the right

#### Scenario: Mobile navbar

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the nav links SHALL collapse behind a hamburger toggle that opens
  the same six links

### Requirement: Hero slider with heading and photo

The system SHALL render a full-viewport hero slider whose slides show a
white handwritten headline on the left and a photo on the right under a dark
overlay, with carousel controls.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the slide SHALL show the Gaegu headline "Please Help African
  Children Give Them A Better Life." in white on the left
- **AND** a photo SHALL be shown on the right under a black overlay at
  opacity .4
- **AND** carousel controls (bar dots and prev/next arrows) SHALL be shown
  at the bottom-right

### Requirement: Feature row with three icon blocks

The system SHALL render three equal-width feature blocks, each with an icon,
a title, a paragraph, and a teal Learn More link.

#### Scenario: Feature cards

- **GIVEN** the feature row is displayed
- **WHEN** the page loads
- **THEN** three blocks SHALL be shown: Medical Mission, Make Donation Now,
  and We Need Volunteers
- **AND** each block SHALL show an icon, a title, a short paragraph, and a
  teal `#79ccab` "Learn More" link
- **AND** on a narrow viewport the blocks SHALL stack vertically

### Requirement: Featured donation section with green overlay

The system SHALL render a photo section under a green `#28a745` overlay
with a text block (meta, title, copy, last-donation line, yellow progress
bar, raised amount, Donate Now button) and a photo.

#### Scenario: Featured donation content

- **GIVEN** the featured donation section is displayed
- **WHEN** the page loads
- **THEN** the text block SHALL show the meta "Featured" and the title
  "School in Africa Need Renovations" in white
- **AND** the copy and "Last donation 1w ago" SHALL be shown
- **AND** a progress bar with a yellow `#ffc107` fill and the caption
  "$8,100 raised of $30,000" SHALL be shown
- **AND** a large "Donate Now" button SHALL be shown
- **AND** a photo SHALL be shown on the right

### Requirement: Top Fundraisers card grid

The system SHALL render a "Top Fundraisers" heading with six fundraiser
cards in a 3-column grid, each with a photo, title, text, progress bar, and
raised amount.

#### Scenario: Fundraiser card content

- **GIVEN** the Top Fundraisers section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL show the centered heading "Top Fundraisers"
- **AND** six cards SHALL be shown, each with a photo, the title "Children
  Needs Food", a short text, "Last donation 1w ago", a green `#28a745`
  progress fill, and "$8,100 raised of $30,000"
- **AND** on a narrow viewport the cards SHALL collapse to a single column

### Requirement: Latest Donations person grid

The system SHALL render a "Latest Donations" heading with four person cards,
each with a circular avatar, name, donation time, and donated amount.

#### Scenario: Person card content

- **GIVEN** the Latest Donations section is displayed
- **WHEN** the page loads
- **THEN** four cards SHALL be shown on a light `#fafafa` background, each
  with a 100px circular avatar and a name (Jean Smith, Christine Charles,
  Albert Sluyter, Andrew Holloway)
- **AND** each card SHALL show "Donated 3 hours ago" and a donated-amount
  row (label "Donated" + amount: $1,150 / $150 / $534 / $2,500)

### Requirement: Featured section with teal overlay

The system SHALL render a photo section under a teal `#79ccab` overlay with
a heading, copy, a raised-total line, and a Read The Full Story button.

#### Scenario: Featured section content

- **GIVEN** the teal featured section is displayed
- **WHEN** the page loads
- **THEN** the heading "School in Africa Need Renovations. Thanks To All
  Donors" SHALL appear in white with the copy below it
- **AND** the bold line "We have raised $30,000" SHALL be shown
- **AND** a "Read The Full Story" button SHALL be shown
- **AND** a photo SHALL be shown on the left

### Requirement: Latest News post grid

The system SHALL render a "Latest News" heading on a light background with
three post cards, each with a date, title, excerpt, and Read More link.

#### Scenario: Post card content

- **GIVEN** the Latest News section is displayed
- **WHEN** the page loads
- **THEN** three cards SHALL be shown, each with the date "July 26, 2018"
  and a title (Be A Volunteer Today, You May Save The Life of A Child,
  Children That Needs Care)
- **AND** each card SHALL show an excerpt and a "Read More" link

### Requirement: About Us section with mini-cards

The system SHALL render an "About Us" heading with copy, right-side links,
and three mini-cards with a thumbnail and text.

#### Scenario: About Us content

- **GIVEN** the About Us section is displayed
- **WHEN** the page loads
- **THEN** the heading "About Us" SHALL be shown with a paragraph and the
  links "Join Volunteer" and "Blog"
- **AND** three mini-cards SHALL be shown — Give Meal A Day, Free Education
  For African Children, Join As A Volunteers — each with a small thumbnail
  and a text block

### Requirement: Footer with About, Blog, Contact, copyright

The system SHALL render a dark gray `#404040` footer with About Us, Blog,
and Contact Info columns plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed on the `#404040` background
- **WHEN** the page loads
- **THEN** the About Us column SHALL show copy and social icon links
- **AND** the Blog column SHALL show recent-post entries
- **AND** the Contact Info column SHALL show the address "203 Fake St.
  Mountain View, San Francisco, California, USA", phone "+2 392 3929 210",
  email "info@yourdomain.com", and hours "Monday — Friday 8:00am - 5:00pm"
- **AND** the copyright bar SHALL credit ColorLib

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Generous app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero slider, feature row,
  featured donation, Top Fundraisers, Latest Donations, featured section,
  Latest News, About Us, and footer in order
- **AND** the document title SHALL be "Generous — Charity Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/generous`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/generous`)
- [ ] Section order matches the reference 1:1 (navbar → hero slider → feature row → featured donation → Top Fundraisers → Latest Donations → featured section → Latest News → About Us → footer)
- [ ] Design tokens in `@theme` (brand mint #79ccab, success green #28a745, warning yellow #ffc107, dark #343a40, light #fafafa, footer #404040, Poppins + Gaegu stacks)
- [ ] Navbar: dark #343a40, "Generous" Gaegu uppercase wordmark, 6 white links (Home active), mobile hamburger
- [ ] Hero: 100vh slides, black overlay .4, white Gaegu headline left (col-md-7), photo right, bar dots + arrows bottom-right, no buttons in the slide
- [ ] Feature row: 3 blocks (Medical Mission / Make Donation Now / We Need Volunteers) with teal icons + "Learn More" links, stack on mobile
- [ ] Featured donation: green #28a745 overlay .9, "Featured" meta + "School in Africa Need Renovations", "Last donation 1w ago", yellow #ffc107 progress, "$8,100 raised of $30,000", large Donate Now button, photo right
- [ ] Top Fundraisers: centered heading, 6 cards × (photo, "Children Needs Food", text, "Last donation 1w ago", green #28a745 progress, "$8,100 raised of $30,000"), 3-col → 1-col on mobile
- [ ] Latest Donations: 4 person cards on #fafafa (100px circular avatars, names, "Donated 3 hours ago", amounts $1,150/$150/$534/$2,500)
- [ ] Featured section: teal #79ccab overlay .9, "School in Africa Need Renovations. Thanks To All Donors", "We have raised $30,000", Read The Full Story button, photo left
- [ ] Latest News: bg-light #fafafa, 3 post cards (date "July 26, 2018", titles, excerpt, Read More)
- [ ] About Us: heading + copy + Join Volunteer / Blog links, 3 mini-cards (Give Meal A Day / Free Education For African Children / Join As A Volunteers) with thumbs
- [ ] Footer: #404040, About Us (+social icons) / Blog / Contact Info (address, phone, email, hours) columns, ColorLib credit bar
- [ ] Document title "Generous — Charity Template"
- [ ] ALL THREE TEMPLATES.md rows marked `[x]` on completion: line 406 (Bootstrap), line 1269 (Charity), line 1298 (Church)
