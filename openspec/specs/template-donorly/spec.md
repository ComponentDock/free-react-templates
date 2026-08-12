# Template: Donorly (Charity / Fundraising Template)

## Purpose

Donorly is a single-page charity / fundraising website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fundraiser" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Fundraiser" — charity / donation website template
  (source: https://colorlib.com/wp/template/fundraiser/). TEMPLATES.md has
  TWO copies of this item (lines 404 and 1267 — mark EVERY copy `[x]` when
  done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/fundraiser/
  (HTTP 200, ~25.8 KB rendered HTML, title "Fundraiser — Website Template by
  Colorlib"). Stylesheets: `css/style.css` (25.4 KB, extracted) +
  `css/bootstrap.min.css` (CUSTOMIZED — `--primary:#00a651`,
  `--secondary:#21323b`; `.btn-primary` = `#00a651`, NOT Bootstrap blue) +
  owl.carousel / owl.theme.default / animate / jquery.fancybox / aos +
  icon fonts `fonts/icomoon/style.css` (icon-twitter, icon-facebook,
  icon-instagram, icon-linkedin, icon-menu, icon-close2, icon-clock-o,
  icon-room, icon-heart). Fonts loaded via Cloudflare cf-fonts @font-face
  in an inline `<style>` in the head: **'Mansalva'** (cursive display
  headings) + **'Roboto'** (body) — recreate with Google Fonts `<link>`s.
  jQuery + Bootstrap JS drive the owl hero carousel, sticky navbar, and
  mobile slide-in menu. NOTE: `heading-20219` / `cta-20101` classes have NO
  CSS rules in any stylesheet (wrapper/JS hooks only — the heading is
  styled by `h2.text-cursive` = Mansalva).
- **Screenshot:** `fundraiser-free-template.jpg` (TEMPLATES.md lines 404 / 1267) — verified in a browser (vision analysis, 1200×946): thin bright
  green top strip with white links (Home / Events / Become A Volunteer +
  social icons); dark blue-grey navbar below with white lowercase wordmark
  and white nav links; full-width hero photo of children under a dark
  overlay with the white brush-script headline "Join The Movement To end
  Child Poverty" and a bright green "Donate Now" button; below the hero,
  three square photo tiles tinted red (Livelihood), yellow (Natural
  Remedies) and green (New Class Rooms) with white script titles.
- **Visual design (from DOM + CSS tokens + rendered screenshot):** charity
  aesthetic — white page, **brand green `#00a651`** (top bar, `.btn-primary`
  fills, nav hover/active, `text-primary` dollar amounts, footer Subscribe,
  tile 3 tint, `overlay-primary` wash), **dark blue-grey `#21323b`**
  (navbar bg, Why-Choose-Us overlay `rgba(33,50,59,.9)`), body text
  `#364d59` (weight 300), **red `#dc3545`** (category badges, tile 1 tint,
  cause progress bars via `bg-danger` !important), **yellow `#ffc107`**
  (tile 2 tint), light grey `#f8f9fa` (CTA strip bg), footer white with
  `rgba(0,0,0,.5)` links; Mansalva cursive headings (hero H1 5rem/900,
  section titles, tile titles, Donate card title, CTA title) + Roboto 400
  body (declared weight 300); buttons green fill, hero button
  `rounded-0` `py-3 px-4`, form buttons default radius. The demo brands
  itself "Fundraiser"; recreation uses the NEW name **Donorly**.

## Design tokens

| Token           | Value                                                                                                                                                                                                           | Where                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary green   | `#00a651`                                                                                                                                                                                                       | top bar bg, `.btn-primary` bg/border, nav link hover + active, `text-primary` ($ amounts), tile 3 tint, `overlay-primary` wash, sticky logo color |
| Secondary dark  | `#21323b`                                                                                                                                                                                                       | navbar bg (`bg-secondary`), Why-Choose-Us overlay `rgba(33,50,59,.9)`                                                                             |
| Body text       | `#364d59` (weight 300, lh 1.7)                                                                                                                                                                                  | `body` color                                                                                                                                      |
| Danger red      | `#dc3545`                                                                                                                                                                                                       | `badge-danger` category chips, tile 1 tint (`overlay-danger:before`), cause progress bar (`bg-danger` !important overrides CSS green)             |
| Warning yellow  | `#ffc107`                                                                                                                                                                                                       | tile 2 tint (`overlay-success:before` — class name is misleading, renders YELLOW)                                                                 |
| Light grey      | `#f8f9fa` (`bg-light`)                                                                                                                                                                                          | CTA strip background                                                                                                                              |
| Footer          | white bg, links `rgba(0,0,0,.5)`                                                                                                                                                                                | `footer.site-footer.bg-white` (`.bg-white` !important wins over `.site-footer` `#c9ccd4`)                                                         |
| Fonts           | **'Mansalva', cursive** (display) + **'Roboto', sans-serif** (body)                                                                                                                                             | hero H1 5rem/900, `h2.title.text-cursive`, tile `h3.text-cursive.h1`, Donate card `h3.text-cursive`, CTA `h2.text-cursive`; body 1rem weight 300  |
| Buttons         | `.btn-primary`: bg `#00a651`, white text, border `#00a651`                                                                                                                                                      | hero: `py-3 px-4 rounded-0`; donate form submit + CTA + footer Subscribe: plain `.btn-primary`                                                    |
| Overlays        | hero slides `:before` black opacity .3; `.bg-image.overlay:after` `rgba(33,50,59,.9)`; `.bg-image.overlay-primary:after` `rgba(0,166,81,.9)`; tiles `:before` solid color, `mix-blend-mode: screen`, opacity .9 | hero, Why Choose Us, Donate CTA, feature tiles                                                                                                    |
| Tiles           | 33.333% width, 300px height, `.text` absolute bottom-left 20px (white `span.meta` + Mansalva h1)                                                                                                                | `feature-29192-wrap` (margin-top -20px over hero, z-index 2)                                                                                      |
| Cause cards     | progress 7px (`bg #ccc` track, bar `bg-danger`), caption 12px white bottom-right, h3 26px, badge `badge-danger py-1 small px-2 rounded`                                                                         | `.cause.shadow-sm` ×3                                                                                                                             |
| Feature numbers | 80px square, 2px white border, centered white 1.5rem number                                                                                                                                                     | `.feature-29012 .number` ×4                                                                                                                       |
| Event cards     | date box `bg-primary p-3 rounded` (100px, white "22" h3 + small "Oct 2019"), meta icons `text-muted`, h3 20px                                                                                                   | `.event-29191` ×2                                                                                                                                 |
| Section padding | `.site-section` 7rem (3rem mobile); footer 4em 0                                                                                                                                                                | vertical rhythm                                                                                                                                   |
| Icons           | icomoon (source) → lucide/inline SVG: twitter, facebook, instagram, linkedin (socials), menu, close, clock, map-pin, heart                                                                                      | top bar, mobile menu, event meta, footer, copyright                                                                                               |

## Requirements

### Requirement: Top bar (green utility strip)

The system SHALL render a thin green utility strip above the navbar on
desktop viewports, with white utility links and social icons, and SHALL
hide it on mobile.

#### Scenario: Desktop shows the strip

- **GIVEN** a viewport width ≥ 768px
- **WHEN** the page renders
- **THEN** a thin green (`#00a651`) strip is visible above the navbar
- **AND** its left side shows three white links: Home, Events, Become A
  Volunteer
- **AND** its right side shows Twitter and Facebook social icons

#### Scenario: Mobile hides the strip

- **GIVEN** a viewport width < 768px
- **WHEN** the page renders
- **THEN** the top strip is not rendered

### Requirement: Dark navbar with wordmark and links

The system SHALL render a dark navbar with a lowercase white wordmark,
white menu links with green hover/active states, and a mobile slide-in
menu.

#### Scenario: Desktop navbar

- **GIVEN** the page renders
- **THEN** the user sees a dark (`#21323b`) navbar with shadow
- **AND** a lowercase white wordmark "Donorly" on the left
- **AND** white menu links Home, About Us, Our Causes, Blog, Contact with
  15px horizontal margins
- **WHEN** the user hovers a menu link or the link is active
- **THEN** the link turns green (`#00a651`)

#### Scenario: Mobile menu

- **GIVEN** a viewport width < 992px
- **WHEN** the page renders
- **THEN** a hamburger icon is visible on the right of the navbar
- **WHEN** the user clicks the hamburger
- **THEN** a slide-in mobile menu panel opens with the same links and a
  close button
- **WHEN** the user clicks the close button
- **THEN** the panel closes

### Requirement: Hero slider with headline and CTA

The system SHALL render a full-viewport hero slider with a centered
overlay box containing the headline and a green Donate Now button, plus a
3-slide carousel with dots.

#### Scenario: Hero content

- **GIVEN** the page renders
- **THEN** the user sees a full-viewport hero (100vh, min-height 600px)
- **AND** an absolutely centered overlay box with max-width 700px
- **AND** the H1 "Join The Movement To end Child Poverty" in white
  Mansalva 5rem weight 900
- **AND** a green "Donate Now" button (`rounded-0`, `py-3 px-4`)

#### Scenario: Hero slides

- **GIVEN** the hero carousel loads
- **THEN** it shows 3 image slides with a black overlay at 30% opacity
- **WHEN** the user clicks a carousel dot
- **THEN** the active slide changes to the selected slide

### Requirement: Feature tiles (Livelihood / Health / School)

The system SHALL render three equal-width photo tiles overlapping the
hero, each tinted (red, yellow, green) with a white meta label and
Mansalva title, stacking on mobile.

#### Scenario: Tile row

- **GIVEN** the page renders
- **THEN** the user sees three equal-width 300px-high photo tiles
  overlapping the bottom of the hero
- **AND** tile 1 shows the meta "Livelihood" and the Mansalva title
  "Livelihood" over a red-tinted (`#dc3545`) image
- **AND** tile 2 shows "Health" / "Natural Remedies" over a yellow-tinted
  (`#ffc107`) image
- **AND** tile 3 shows "School" / "New Class Rooms" over a green-tinted
  (`#00a651`) image

#### Scenario: Tiles stack on mobile

- **GIVEN** a viewport width < 992px
- **WHEN** the page renders
- **THEN** the tiles stack full-width vertically

### Requirement: Latest Causes cards

The system SHALL render a Latest Causes section with three cause cards
showing category badge, image, red progress bar with caption, title,
donated amount and donor row.

#### Scenario: Cause cards

- **GIVEN** the page renders
- **THEN** the user sees a section titled "Latest Causes" (Mansalva) with
  a subtitle
- **AND** 3 cause cards, each with a red category badge (School / Health /
  Livelihood), an image with a 7px progress bar (80% width) and a
  "80% complete" caption, a 26px black title, a "Donated" row with the
  amount "$32,919" in green, and a donor row with a 50px circular avatar
  and the name "James Smith"

#### Scenario: Progress bar color

- **GIVEN** a cause card renders
- **WHEN** the user reads the progress bar
- **THEN** the bar renders red (`#dc3545`) on a light grey (`#ccc`) track

### Requirement: Why Choose Us with numbered features

The system SHALL render a dark background-image section titled Why Choose
Us with an intro paragraph and a 2x2 grid of numbered features with
white-bordered numbers.

#### Scenario: Dark section

- **GIVEN** the page renders
- **THEN** the user sees a background-image section with a dark overlay
  (`rgba(33,50,59,.9)`) titled "Why Choose Us" (Mansalva)
- **AND** a white intro paragraph

#### Scenario: Feature grid

- **GIVEN** the Why Choose Us section renders
- **THEN** the user sees 4 numbered features (1–4) in a 2×2 layout
- **AND** each feature has a white-bordered 80px number, a white title and
  a white paragraph

### Requirement: Latest Event cards

The system SHALL render a Latest Event section with two event cards, each
showing an image, green date box, muted time/location meta and a title
link, stacking on mobile.

#### Scenario: Event cards

- **GIVEN** the page renders
- **THEN** the user sees a section titled "Latest Event" with 2 event
  cards side by side
- **AND** each card shows a rounded image, a green date box ("22" /
  "Oct 2019"), a muted time line ("9:30 AM — 11:30 AM" with a clock icon)
  and location line ("Ghana Africa" with a map-pin icon), and a 20px
  black event title link

#### Scenario: Events stack on mobile

- **GIVEN** a viewport width < 768px
- **WHEN** the page renders
- **THEN** the event cards stack vertically

### Requirement: Donate Now form

The system SHALL render a donate section with green overlay, an image,
and a white card containing a validated donation form (Name, Email,
Amount) with a green submit button.

#### Scenario: Donate section layout

- **GIVEN** the page renders
- **THEN** the user sees a background-image section with a green overlay
  (`rgba(0,166,81,.9)`)
- **AND** an image on the left and a white card on the right
- **AND** the white card shows the Mansalva heading "Donate Now" and a
  form with Name, Email and "Amount in dollar" inputs plus a green
  "Donate Now" submit button

#### Scenario: Form validation

- **GIVEN** the user fills the donate form
- **WHEN** the user submits an invalid form
- **THEN** per-field validation errors are shown and the form is not
  submitted
- **WHEN** the user submits a valid form
- **THEN** a success message is shown without navigation

### Requirement: CTA strip

The system SHALL render a light-grey CTA strip with a Mansalva headline
and a green Donate Now button, stacking on mobile.

#### Scenario: CTA content

- **GIVEN** the page renders
- **THEN** the user sees a light-grey (`#f8f9fa`) strip with the Mansalva
  heading "Helping the Homeless, Hungry, and Hurtings Children" on the
  left and a green "Donate Now" button on the right

#### Scenario: CTA stacks on mobile

- **GIVEN** a viewport width < 768px
- **WHEN** the page renders
- **THEN** the heading and button stack vertically

### Requirement: Footer

The system SHALL render a white footer with About Us blurb, Features
links, validated newsletter subscription, social icons and a Component
Dock attribution in the copyright bar.

#### Scenario: Footer content

- **GIVEN** the page renders
- **THEN** the user sees a white footer with an "About Us" blurb, a
  "Features" link list (About Us, Testimonials, Terms of Service, Privacy,
  Contact Us), a "Subscribe to Newsletter" input with a green Subscribe
  button, and "Follow Us" social icons

#### Scenario: Newsletter validation

- **GIVEN** the user submits an invalid newsletter email
- **THEN** a validation error is shown
- **WHEN** the user submits a valid email
- **THEN** a success message is shown

#### Scenario: Component Dock attribution

- **GIVEN** the footer bottom bar renders
- **THEN** the user sees the current-year copyright line with a heart icon
- **AND** a "Component Dock" attribution link pointing to
  https://www.componentdock.com/
- **AND** no colorlib.com string appears anywhere in the app

### Requirement: Page composition

The system SHALL compose the page in the documented section order with
the document title "Donorly — Charity Template".

#### Scenario: Section order

- **GIVEN** the user opens the app
- **THEN** the sections render in this order: top bar, navbar, hero
  slider, feature tiles, Latest Causes, Why Choose Us, Latest Event,
  Donate Now, CTA strip, footer

#### Scenario: Document title

- **GIVEN** the user opens the app
- **THEN** the document title is "Donorly — Charity Template"

## Verification checklist

- [ ] `scripts/verify-app.sh donorly` green (typecheck + lint + 100%
      coverage tests + build).
- [ ] All Gherkin scenarios above covered by tests (one `describe` per
      component, scenario-style `it` blocks).
- [ ] Mansalva + Roboto loaded via Google Fonts `<link>`s in `index.html`.
- [ ] `@theme` tokens: `--color-primary: #00a651`, `--color-secondary:
  #21323b`, `--color-body: #364d59`, `--color-danger: #dc3545`,
      `--color-warning: #ffc107`, `--font-display: 'Mansalva', cursive`,
      `--font-body: 'Roboto', sans-serif`.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock"); no
      `colorlib` string in `apps/donorly/**` (provenance only in this
      spec + TEMPLATES.md + PR).
- [ ] `public/CNAME` = `donorly.free.componentdock.com`; package.json
      `homepage` = `https://donorly.free.componentdock.com`.
- [ ] `vite.config.ts` registers `injectUiSource()`.
- [ ] TEMPLATES.md lines 404 AND 1267 marked `[x]` with surge URL +
      homepage after deploy.
