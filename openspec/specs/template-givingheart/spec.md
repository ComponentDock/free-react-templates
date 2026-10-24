# Template: GivingHeart (Charity / Nonprofit Template)

## Purpose

GivingHeart is a single-page charity landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Charity 2"
website template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** ColorLib "Charity 2" — https://colorlib.com/wp/template/charity-2/
- **Preview URL:** https://preview.colorlib.com/theme/charity2/ (HTTP 200,
  39,401 B) — the hyphen-stripped demo directory, which is the one the preview
  host's catalog map records for this entry and the one the row's screenshot
  (`charity2-free-template.jpg`) renders.
- **Theme stylesheet:** `theme/charity2/css/style.css`, 28,184 B, sha256
  `13ed53e60d095731…`.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/charity2-free-template.jpg
  (green hero "Save The Children" + green pill CTAs; agrees with the live sheet).

**Reference correction (2026-10-24s).** The first prep measured
`https://preview.colorlib.com/theme/charity-2/` — a *different* ColorLib charity
demo (hot-pink → orange → yellow gradients, Poppins) that also answers 200 and
is the twin of the older "Charity" entry. A healthy 200 is not evidence of the
right design: the catalog's name→url map plus the row's screenshot decide it.
Everything below was re-measured from `theme/charity2/`; the pink tokens the
earlier revision recorded (`#f41665`, `#f40f68`, `#f86e3d`, `#fbcd11`) do not
occur in this sheet at all. `apps/givingheart` still paints the pink palette, so
the divergence is app debt, recorded in `docs/app-live-tokens.md`.

## Design tokens

Measured from the live sheet, not sampled off the screenshot.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| **Brand green — the design's lead** | `#83ba09` | **32 declarations** — `.primary-button` background, `a:hover`, `.navbar-menu li a:hover`, `.number i/.number span`, `.causes-progress-bar > div`, `.event .event-img a:after`, `.article .article-img a:after`, `.footer-social li a:hover`, `.owl-dot.active span`, `.input:focus` border |
| Ink (headings + links) | `#23262a` | 6 declarations — `h1…h4`, `a`, `.section-title .sub-title`, nav dropdown chevron, search button |
| Body copy | `#5f646b` | 5 declarations — `body` (15 px, Roboto), footer nav, pagination |
| Section surface | `#f4f4f8` | 5 declarations — `#about:after`, `#footer`, dropdown and search panels |
| Hairlines / dividers | `#e6e6ea` | **18 declarations** — nav item borders, `.input` border, `.causes-progress-bar` track, `#footer-bottom` border |
| Surface | `#fff` | 20 declarations |
| **Fonts** | Body `'Roboto', sans-serif` 15 px; headings `'Source Sans Pro', sans-serif` 700 | `body` rule; `h1, h2, h3, h4` rule (sheet header comment: "Fonts: Roboto, Source Sans Pro") |
| Radii | `25px` (`.primary-button` pill, 45 px tall), `10px` (cards, progress track), `50%` (event meta icons, testimonial avatars, footer social) | sheet `border-radius` census |
| Button behaviour | Solid green pill, white label, `opacity: .9` → `1` on hover, with a diagonal white sheen sweeping across (`.primary-button:after`) | `.primary-button` rules |
| Hero | `#home-owl .home-item { height: 100vh }`, full-bleed `background-image` + `.section-bg` overlay layer; white `h1` at 55 px | sheet |
| Parallax bands | `#cta` and `#testimonial` carry a `data-stellar-background-ratio="0.5"` background image | markup |

## Section order (live DOM, 1:1)

1. **Header / navbar** — `header#home` → `nav#main-navbar`: logo image (60 px),
   links Home · About · Causes · Events · Blog · Contact, hover-to-open drop-down
   (`.has-dropdown`), a search toggle with an inline form, and a mobile
   `navbar-toggle-btn` / `search-toggle-btn` pair.
2. **Hero carousel** — `#home-owl` (owl carousel, 100 vh): slide 1
   "Save The Children" + lead + **View Causes** pill; slide 2
   "Become A Volunteer" + **Join Us Now!** pill.
3. **About** — `#about`: "Welcome to Charity" title, sub-title, paragraph,
   **Read More** pill; image on the opposite column.
4. **Counters** — `#numbers`: four stat blocks with icons — 47k *Donors*,
   154K *Children Saved*, 785K *Donated*, 357 *Volunteers*.
5. **Causes** — `#causes`: "Our Causes" + 6 cause cards; each card = image,
   title, green progress bar with a `%` badge (87%, 53%, 72%, 64% …),
   *Raised* / *Goal* amounts and a **Donate Now** pill.
6. **CTA band** — `#cta`: parallax photo band, "Become A Volunteer" `h1`, lead,
   **Join Us Now!** pill.
7. **Events** — `#events`: "Upcoming Events" + 4 cards; each = 40 %-wide image
   (green overlay on hover), circular clock + pin meta icons
   ("24 October, 2018 | 8:00AM – 11:00PM", "2736 Hinkle Deegan Lake Road"),
   title.
8. **Testimonials** — `#testimonial`: parallax band + carousel of 4 quotes;
   each quote = white blockquote card, 70 px round avatar, "John Doe" /
   *Volunteer* (green uppercase).
9. **Blog** — `#blog`: "Our Blog" + 3 cards (image, date, title, excerpt,
   **Read More**).
10. **Footer** — `#footer` on `#f4f4f8`: column 1 logo + blurb + contact
    (email link, address), column 2 "Galery" (thumbnail grid), column 3
    "Newsletter" (email input + **Subscribe** button); `#footer-bottom` with
    footer nav (Home · About · Causes · Events · Blog · Contact), round social
    buttons and the copyright line.

## Requirements

### Requirement: Header / navbar

The system SHALL render a white header bar 60 px tall with the site logo, the
primary link set, a hover drop-down group, an inline search toggle and a mobile
toggle button. Link and icon colours SHALL be `#23262a`, links turning brand
green `#83ba09` on hover, with 1 px `#e6e6ea` dividers between items.

#### Scenario: Desktop header renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the header shows the GivingHeart wordmark and the links Home, About, Causes, Events, Blog, Contact
- **AND** each link is separated by a 1 px `#e6e6ea` border

#### Scenario: Link hover uses the brand green

- **WHEN** the user hovers a nav link
- **THEN** the link colour changes to `#83ba09` and no background is painted

#### Scenario: Search toggle

- **WHEN** the user activates the search toggle
- **THEN** an inline search field with placeholder "Search" is revealed
- **AND** the field submits without reloading the page

#### Scenario: Mobile navigation

- **WHEN** the user taps the burger button on a narrow viewport
- **THEN** the link list expands (`.navbar-menu-active`, max-height transition)
- **AND** the drop-down group renders inline, indented, instead of floating

### Requirement: Hero carousel

The system SHALL render a full-viewport hero carousel (100 vh) with two slides,
each a full-bleed background image under a `.section-bg` overlay, a white `h1` at
55 px, a lead paragraph and one green pill CTA.

#### Scenario: Slide one

- **WHEN** the hero is displayed
- **THEN** the first slide shows the heading "Save The Children", a lead paragraph and a "View Causes" pill

#### Scenario: Slide two

- **WHEN** the carousel advances
- **THEN** the second slide shows the heading "Become A Volunteer" and a "Join Us Now!" pill
- **AND** dot indicators reflect the active slide

#### Scenario: Hero height

- **WHEN** the page loads at any viewport
- **THEN** the hero occupies the full viewport height (`100vh`)

### Requirement: About section

The system SHALL render a two-column about band headed "Welcome to Charity" with
a sub-title, a body paragraph and a "Read More" green pill, beside an image.

#### Scenario: About content

- **WHEN** the about section is displayed
- **THEN** it shows the heading "Welcome to Charity", a sub-title, a paragraph and a "Read More" pill
- **AND** the section's tinted half uses `#f4f4f8`

### Requirement: Statistics counters

The system SHALL render four stat blocks, each an icon, a value and a label, in
one row on desktop and two-up on small screens.

#### Scenario: Counter values

- **WHEN** the counters are displayed
- **THEN** they show 47k "Donors", 154K "Children Saved", 785K "Donated" and 357 "Volunteers"
- **AND** each value is brand green `#83ba09`

### Requirement: Causes grid

The system SHALL render six cause cards in a responsive grid, each with an
image, a linked title, a green progress bar carrying a percentage badge, Raised
and Goal amounts, and a "Donate Now" pill.

#### Scenario: Cause card contents

- **WHEN** the causes section is displayed
- **THEN** exactly 6 cards are rendered
- **AND** each card shows a progress bar filled with `#83ba09` on an `#e6e6ea` track
- **AND** each card shows a percentage badge on the bar
- **AND** each card shows "Raised" and "Goal" amounts and a "Donate Now" pill

#### Scenario: Card hover overlay

- **WHEN** the user hovers a cause image
- **THEN** a `#83ba09` overlay fades in at 60 % opacity

### Requirement: Call-to-action band

The system SHALL render a parallax photo band between the causes and events
sections with a centred `h1`, a lead paragraph and a "Join Us Now!" pill.

#### Scenario: CTA content

- **WHEN** the band is displayed
- **THEN** it shows the heading "Become A Volunteer", a lead paragraph and a "Join Us Now!" pill
- **AND** the background image scrolls at half speed (`data-stellar-background-ratio="0.5"`)

### Requirement: Events grid

The system SHALL render four event cards in a 2 × 2 grid, each with a 40 %-wide
image, meta lines for time and location with circular icons, and a linked title.

#### Scenario: Event card contents

- **WHEN** the events section is displayed
- **THEN** exactly 4 cards are rendered
- **AND** each card shows a date/time line and a location line, each preceded by a circular `#83ba09` icon
- **AND** hovering the image fades in the green overlay

### Requirement: Testimonials carousel

The system SHALL render a parallax band containing a carousel of four
testimonials, each a white blockquote card with a round avatar, the author name
in white and the role in uppercase brand green.

#### Scenario: Testimonial slide contents

- **WHEN** the testimonials band is displayed
- **THEN** four quotes are available in the carousel
- **AND** each shows a round avatar, an author name and the role "Volunteer" in `#83ba09`
- **AND** the quote sits on a white card

### Requirement: Blog grid

The system SHALL render three blog cards in a row, each with a rounded image,
a date, a linked title, an excerpt and a "Read More" link.

#### Scenario: Blog card contents

- **WHEN** the blog section is displayed
- **THEN** exactly 3 cards are rendered
- **AND** each shows a date, a title and an excerpt with a "Read More" link
- **AND** hovering the image fades in the green overlay

### Requirement: Footer

The system SHALL render a `#f4f4f8` footer with three columns — brand blurb +
contact details, a "Galery" thumbnail grid, and a "Newsletter" email field with
a "Subscribe" button — followed by a bordered bottom bar with footer navigation,
round social buttons and a copyright line.

#### Scenario: Footer columns

- **WHEN** the footer is displayed
- **THEN** it shows the brand column with an email contact link
- **AND** it shows the "Galery" thumbnail grid
- **AND** it shows the "Newsletter" column with an email input and a "Subscribe" button

#### Scenario: Footer bottom bar

- **WHEN** the footer's bottom bar is displayed
- **THEN** it shows the nav links Home, About, Causes, Events, Blog, Contact
- **AND** it shows round social buttons whose border turns `#83ba09` on hover
- **AND** it shows a copyright line that links to https://www.componentdock.com/

#### Scenario: Newsletter submission

- **WHEN** the user submits the newsletter form
- **THEN** the default submission is prevented and the page does not reload

### Requirement: Theme tokens

The app SHALL express the measured design as Tailwind theme tokens — brand
`#83ba09`, ink `#23262a`, body `#5f646b`, surface `#f4f4f8`, hairline `#e6e6ea`
— and use them through utilities, never hard-coded hex values scattered across
components.

#### Scenario: Tokens resolve to the sheet's values

- **WHEN** the app's `index.css` `@theme` block is inspected
- **THEN** it declares the five values above
- **AND** no component paints a chromatic colour outside the measured palette

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/givingheart/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/givingheart/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] All 10 blocks rendered in the live DOM's order (header, hero carousel, about, counters, causes, CTA, events, testimonials, blog, footer)
- [ ] Hero occupies 100 vh with two slides and working dot indicators
- [ ] Counters: 47k / 154K / 785K / 357 with their labels, values in `#83ba09`
- [ ] Causes: 6 cards, green progress bars on `#e6e6ea` tracks, percentage badges, Raised/Goal, "Donate Now" pills
- [ ] CTA + testimonials bands use the parallax photo backgrounds
- [ ] Events: 4 cards with clock/pin meta icons and the green hover overlay
- [ ] Testimonials: 4 white quote cards, round avatars, role in uppercase `#83ba09`
- [ ] Blog: 3 cards with date, title, excerpt, "Read More"
- [ ] Footer: three columns, "Galery" grid, newsletter form (submit prevented), bottom nav, round social buttons, Component Dock link
- [ ] Brand green `#83ba09` is the app's lead colour (the shipped app currently paints the wrong pink palette — restyle)
- [ ] All interactive elements accessible (keyboard, screen reader)
- [ ] Responsive layout (mobile-first); nav collapses to the toggle at the sheet's breakpoint
- [x] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [x] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage on all section components
- [ ] Placeholder images use seeded picsum (`picsum.photos/seed/givingheart-<n>/`)
