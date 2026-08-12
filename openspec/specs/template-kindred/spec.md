# Template: Kindred (Charity / NGO Landing)

## Purpose

Kindred is a single-page charity/ NGO landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Aspiration" design (see TEMPLATES.md, Bootstrap category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a charity fundraising page with a vivid blue (#0028ff) brand
accent: a full-screen photo hero with a blue overlay on the left half
("Give A Hand To Make The Better World" + circular video play button), a
split volunteer section (photo card "Aspiration Charity" + solid-blue
"Donation so far" panel with a $380,000 animated counter), a 4-icon services
row (Help & Support / Adoption / Volunteering / Education), a "Foundation
Grants Projects" section with a striped 65% donation progress bar, a
"Become a Volunteer" photo band, an "Our Priorities" 3-cause grid with
progress bars (70/75/40%), a big-number intro row ("Waterless Drinking in
Africa" + Start Donation), a photo-band stats counter (705 days / 809 donors /
335 awards / 35 raised), a "Recent Blog" area (1 large + 3 thumb entries), a
centered "Sponsorship" headline, a "Success Stories" quote carousel, and a
photo footer with a blue overlay and four widgets. Kindred recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Aspiration" — free charity/ NGO website template
  (source: https://colorlib.com/wp/template/aspiration/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/aspiration/`
  (HTTP 200, 39.1KB) + stylesheet `css/style.css` (69.0KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`aspiration-free-template.jpg`, 1200×946) confirms the visual design: dark
  nav bar, split hero (left half blue-tinted photo, right half natural photo,
  centered white uppercase headline + circular play button), white "Aspiration
  Charity" card next to a solid-blue "Donation so far" panel with $380,000 and
  a black "Donate now" button.
- **Section order (1:1):**
  1. Navbar (`navbar ftco_navbar bg-dark`): brand "Aspiration" left; links
     Home / About us / Services / Causes / Blog / Contact right; transparent
     over the hero, becomes white-on-scroll with black text and blue accents.
  2. Hero (`hero-wrap`, bg `images/bg_4.jpg`, `data-stellar-background-ratio`):
     full-screen photo, blue overlay (`.overlay` = `#0028ff`, opacity .4,
     width 50% — left half), circular `popup-vimeo` play button, centered h1
     "Give A Hand To Make The Better World" (white, uppercase, 7vw,
     letter-spacing 5px).
  3. Volunteer split (`ftco-volunteer`): left col photo (`images/about.jpg`)
     with inner text block — h2 "Aspiration Charity", copy, `btn btn-primary`
     "Join now"; right col `bg-primary` (#0028ff) — h2 "Donation so far",
     big `$380,000` animated number (`data-number="380000"`), copy,
     `btn btn-black` "Donate now".
  4. Services row (`services-section`): 4 icon cards (flaticon-charity /
     flaticon-adoption / flaticon-volunteer / flaticon-open-book): "Help &
     Support" (copy = address "203 Fake St. Mountain View, San Francisco,
     California, USA"), "Adoption", "Volunteering", "Education" (lorem copy);
     uppercase h3, 60px blue icons; hover/active card → solid #0028ff bg with
     white text.
  5. Foundation grants (`ftco-section bg-light`): subheading "Foundation
     Grants Projects" (uppercase, blue), h2 "Gifts into Service Project that
     Change", copy; centered `featured-causes` panel — striped 65% progress
     bar (height 50px), "65%" + Collected $380,000 / Goal $600,000,
     `btn btn-primary` "Donate now".
  6. Volunteer band (`ftco-vol img`, bg `images/bg_3.jpg` + overlay): centered
     h2 link "Become a Volunteer".
  7. Causes (`ftco-causes`): h2 "Our Priorities" + copy; 3 cards: "Clean water
     for South Sudan" (progress 70%), "Home for Asias Child" (75%), "Education
     for Asian School" (40%) — each: photo (causes-1..3.jpg), title, lorem
     copy, "$3,800 to go", striped progress bar with % label.
  8. Intro row: col-4 — big number 380,000 + "Waterless Drinking in Africa" +
     `btn btn-primary` "Start Donation"; col-8 — quote h4 "A small river named
     Duden flows by their place..." inside `.border-r` block.
  9. Counter band (`ftco-counter img`, bg `images/bg_2.jpg` + overlay): 4
     stats — 705 "Days in Campaign", 809 "Dedicated Donors", 335 "Winning
     Awards", 35 "Fun Raised" (white 50px numbers, animated).
  10. Blog (`ftco-section`): h2 "Recent Blog" + copy; 1 large entry
      (`image_1.jpg`, "Advocating on behalf of abused and neglected") + 3
      horizontal thumb entries (`image_2..4.jpg`: "Gathering Books for
      Children", "Access to Clean Water", "Super typhoon Haiyan Disaster
      Relief"); each with meta row — Sept. 04, 2019 / Admin / chat 3.
  11. Sponsorship heading: centered h1 "Sponsorship Scheme, Individual and
      Corporate Entities Undertake".
  12. Success Stories (`testimony-section bg-light`): left photo
      (`testimony-img.jpg`), right h2 "Success Stories" + owl-carousel of 5
      quotes (Fernando Obiga, Jeffrey Blatch, Henry Ford, Jeff Chan, Michael
      Bubble — all "Businessman", same lorem quote, avatar `person_1.jpg`).
  13. Footer (`ftco-footer img`, bg `images/footer.jpg` + overlay #0028ff
      opacity .8): 4 widgets — brand "Aspiration" + blurb + social
      (twitter/facebook/instagram); "Information" (Donation, Privacy, Terms
      Condition); "Links" (Home, Who we are, Causes, Blog, Contact); "Have a
      Questions?" (address "203 Fake St. Mountain View, San Francisco,
      California, USA", phone +2 392 3929 210, email info@yourdomain.com);
      copyright line "All rights reserved".
- **Design tokens extracted from `css/style.css` + inline fonts:**
  - Brand color: **#0028ff** (vivid blue — 38 uses: nav hover, brand
    underline accent, hero overlay opacity .4 (50% width), footer overlay
    opacity .8, `.bg-primary`, `.btn-primary`, services icon color + hover/
    active card bg, heading `span` accents, `.subheading` label).
  - Buttons: `.btn` = radius **3px**, shadow `0 24px 36px -11px
rgba(0,0,0,0.09)`; `.btn-primary` = `#0028ff` bg, white text; hover =
    transparent bg + `#0028ff` border/text; `.btn-black` = `#000000` bg,
    white text.
  - Fonts: headings **"Oswald"** (700, uppercase — `.heading-section h2`
    50px; hero h1 7vw letter-spacing 5px) + body **"Work Sans"** via Google
    Fonts (preloaded @font-face in the preview).
  - Section backgrounds: navbar transparent over hero (scrolled #fff with
    black text); hero photo + blue overlay .4 (left half); volunteer right
    col **#0028ff**; services white; grants + testimony sections
    **#f8f9fa** (bg-light); volunteer band + counter photo bands with
    overlay; footer photo + blue overlay .8.
  - Progress bars: Bootstrap `.progress-bar-striped` (white 15% stripes over
    solid; default Bootstrap blue #007bff — recreate with **#0028ff** to
    match brand). Container max-width 1180px.
- **Recreation decisions:** repo-standard Navbar (site name Kindred, Home
  link, dark-mode toggle) + Footer chrome; hero = full-bleed seeded picsum
  photo + blue left-half overlay band + centered uppercase headline + circular
  play button; volunteer split = left photo card ("Join now") + right solid
  blue panel with animated donation number + black "Donate now"; services =
  4 lucide-icon cards (HeartHandshake, Baby, Users, BookOpen) with hover→blue;
  grants = bg-light panel with striped 65% progress + Collected/Goal + Donate
  now; volunteer band = photo band with "Become a Volunteer"; causes = 3
  photo cards with "$3,800 to go" + striped progress (70/75/40%); intro row =
  big number + label + "Start Donation" + quote block; counter = photo band
  with 4 animated stats; blog = 1 large + 3 thumb entries with meta row;
  sponsorship centered headline; success stories = photo + quote carousel (5
  authors); footer = blue-tinted band with brand/social, Information, Links,
  Have a Questions? widgets; all images picsum placeholders — hero pinned to
  verified warm meadow portrait `picsum.photos/id/64/1920/1080`, the rest
  seeded (`picsum.photos/seed/kindred-N/w/h`); Google Fonts (Oswald + Work
  Sans) via `<link>`.

Kindred lives in `apps/kindred` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Kindred", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Kindred page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Kindred" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a blue
overlay band, a level-1 headline, and a circular video play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Give A Hand To Make The Better World")
- **AND** it SHALL show a circular play button with an accessible label (e.g. "Watch intro video")

### Requirement: Donation split section

The system SHALL render a two-column volunteer section with a photo card on
the left and a solid-blue donation panel on the right.

#### Scenario: Volunteer card

- **GIVEN** the page is rendered
- **WHEN** the volunteer section is displayed
- **THEN** the left column SHALL show a heading (e.g. "Kindred Charity"), a lead paragraph, and a "Join now" button

#### Scenario: Donation panel

- **GIVEN** the page is rendered
- **WHEN** the volunteer section is displayed
- **THEN** the right column SHALL have a solid blue background
- **AND** it SHALL show the heading "Donation so far", a large donation amount (e.g. "$380,000"), and a "Donate now" button

### Requirement: Services grid

The system SHALL render a services section with four icon cards, each with an
icon, a heading, and a blurb.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL render four service cards (Help & Support, Adoption, Volunteering, Education)
- **AND** each card SHALL show an icon, an uppercase heading, and a blurb

### Requirement: Foundation grants

The system SHALL render a light-background grants section with a subheading,
a heading, and a featured cause panel showing donation progress.

#### Scenario: Grants content

- **GIVEN** the page is rendered
- **WHEN** the grants section is displayed
- **THEN** it SHALL show the subheading "Foundation Grants Projects" and the heading "Gifts into Service Project that Change"
- **AND** it SHALL show a striped progress bar at 65%
- **AND** it SHALL show collected ($380,000) and goal ($600,000) amounts and a "Donate now" button

### Requirement: Volunteer band

The system SHALL render a full-width photo band with a centered "Become a
Volunteer" heading link.

#### Scenario: Volunteer band content

- **GIVEN** the page is rendered
- **WHEN** the volunteer band is displayed
- **THEN** it SHALL show the heading "Become a Volunteer" centered over a background image

### Requirement: Causes grid

The system SHALL render an "Our Priorities" section with three cause cards,
each with an image, title, blurb, amount-to-go, and a progress bar.

#### Scenario: Cause cards

- **GIVEN** the page is rendered
- **WHEN** the causes section is displayed
- **THEN** it SHALL show the heading "Our Priorities"
- **AND** it SHALL render three cause cards (Clean water for South Sudan, Home for Asias Child, Education for Asian School)
- **AND** each card SHALL show an amount-to-go (e.g. "$3,800") and a striped progress bar with a percentage label (70%, 75%, 40%)

### Requirement: Intro call-to-action row

The system SHALL render an intro row with a big donation number, a cause
label, a "Start Donation" button, and a quote block.

#### Scenario: Intro row content

- **GIVEN** the page is rendered
- **WHEN** the intro row is displayed
- **THEN** it SHALL show a large number (380,000) with the label "Waterless Drinking in Africa" and a "Start Donation" button
- **AND** it SHALL show a quote paragraph beside them

### Requirement: Stats counter

The system SHALL render a background-image counter band with four animated
statistics.

#### Scenario: Counter stats

- **GIVEN** the page is rendered
- **WHEN** the counter band is displayed
- **THEN** it SHALL show four stats: 705 Days in Campaign, 809 Dedicated Donors, 335 Winning Awards, 35 Fun Raised

### Requirement: Recent blog

The system SHALL render a "Recent Blog" section with one large entry and
three thumbnail entries, each with a title and a meta row.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL render at least four blog entries with a title and a meta row (date, author, comments)

### Requirement: Sponsorship headline

The system SHALL render a centered sponsorship level-1 headline.

#### Scenario: Sponsorship heading

- **GIVEN** the page is rendered
- **WHEN** the blog section's closing row is displayed
- **THEN** it SHALL show a centered heading (e.g. "Sponsorship Scheme, Individual and Corporate Entities Undertake")

### Requirement: Success stories

The system SHALL render a "Success Stories" section with a photo and a
carousel of at least three testimonials, each with a quote, an author name,
and a role.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the success stories section is displayed
- **THEN** it SHALL show the heading "Success Stories"
- **AND** it SHALL show a quote with an author name and role (e.g. "Fernando Obiga" — "Businessman")
- **AND** it SHALL allow navigating between testimonials

### Requirement: Footer

The system SHALL render a footer with the site name, a blurb, social links,
information links, and a "Have a Questions?" widget with contact details.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Kindred" with a blurb and social links (GitHub, X, LinkedIn)
- **AND** it SHALL show an "Information" link list and a "Links" link list
- **AND** it SHALL show a "Have a Questions?" widget with an address, a phone number, and an email

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Kindred app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Kindred — Charity Template"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- kindred` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero → volunteer split
      → services → grants → volunteer band → causes → intro row → counter →
      blog → sponsorship → success stories → footer).
- [ ] Design tokens applied: brand #0028ff (blue overlays, buttons, icons,
      card hover), Oswald headings, Work Sans body, bg-light #f8f9fa panels,
      striped progress bars, black donate button on the blue panel.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Aspiration), preview URL,
      tokens, and renames.
