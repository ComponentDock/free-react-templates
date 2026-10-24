# Template: Locale (Directory & Listings)

Recreation of ColorLib Gricklo (https://colorlib.com/wp/template/gricklo/)

## Purpose

A single-page directory and listings template: a photo hero with a two-field
search bar and category pills, six circular city destinations, a mixed
interest grid, a wrapping carousel of popular listing cards, a find-more CTA
band, a three-step "how it works" row, a two-slide testimonial slider and a
pale-blue footer with a newsletter form. The recreation is built from scratch
(no assets copied) with React 19, Tailwind CSS 4 and TypeScript.

## Provenance and replication note

| Field            | Value                                                                     |
| ---------------- | ------------------------------------------------------------------------- |
| Source design    | ColorLib "Gricklo" — https://colorlib.com/wp/template/gricklo/          |
| Source preview   | https://preview.colorlib.com/theme/gricklo/                               |
| Source slug      | `gricklo`                                                                 |
| Recreated as     | `locale` (`apps/locale`, `@free-react-templates/locale`)                  |
| Deploy target    | https://locale.free.componentdock.com                                     |

**Why this spec exists a second time.** The checklist carried two `- [x]`
rows for this design pointing at `findly.free.componentdock.com` even though no
app recreated it any more: the folder that held it (created for this source
design) was overwritten when the same name was reused for the travel-services
search form, then deleted as "stale" (`0fd6168b1`, renamed to `spotly`),
leaving the checklist and the README claiming a template that no longer existed
in the repo — while the linked domain served the *other* design's build. This
spec re-establishes the recreation under a fresh, unused name and the
bookkeeping rows are corrected with it.

**Reference availability.** The mandatory live-preview step could not run this
time: both `colorlib.com` and `preview.colorlib.com` answered Cloudflare
"Error 1106 — the owner of this website has banned your IP address" (403, 17
bytes, for HTML, CSS, the source zip **and** the checklist screenshot), and the
Wayback Machine holds no snapshot of `theme/gricklo/`. The reference record
used instead is this repo's own earlier recreation of the same design —
recovered from `073c05c69` — which documents the source stylesheet's tokens
(brand, deep, navy, ink, orange, section/footer tints, the two webfonts) and
the section order, plus the checklist screenshot URL recorded in
`TEMPLATES.md`. Re-verify the palette against the live preview once the IP ban
lifts.

## Design tokens

| Token         | Value     | Used for                                                        |
| ------------- | --------- | --------------------------------------------------------------- |
| `brand`       | `#4DB7FE` | buttons, search button, nav hovers, active states, star accents  |
| `deep`        | `#304CBB` | active category pill fill, button hovers                         |
| `navy`        | `#1A213D` | headings, input labels, translucent nav bar                      |
| `ink`         | `#140C40` | hero search input text                                           |
| `orange`      | `#FF6F00` | rating stars and review count                                    |
| `section`     | `#F1F6F9` | interest grid, how-it-works, testimonial quote card              |
| `footerbg`    | `#F1FBFF` | footer wrapper                                                   |
| `muted`       | `#6B5A5A` | section subtext                                                  |
| `footertext`  | `#A4A6AE` | footer body copy                                                 |
| `roletext`    | `#68696E` | testimonial role text                                            |
| `socials`     | `#677F8B` | listing contact glyphs, footer social glyphs                     |
| `edge`        | `#DEE0E5` | hairline borders around carousel arrows, footer rule             |
| `paper`       | `#FFFFFF` | page and card surfaces                                           |

Typography: `Work Sans` (display — headings, buttons, nav) and `Mulish` (body),
loaded through the `<link>`s in `index.html`. The shared `Button`/`ButtonLink`
read their `primary` skin from a `--color-primary-*` scale that re-points to
`brand`, so in-form and CTA actions paint the design's blue.

## Section order

| # | Section        | Anchor     | Content                                                                 |
| - | -------------- | ---------- | ----------------------------------------------------------------------- |
| 1 | Navigation     | —          | brand, inline search, 5 links (2 dropdown parents), Sign In, Add Listing |
| 2 | Hero           | `#home`    | photo cover, headline, subtext, What?/Where? search bar, 5 category pills |
| 3 | Top Destination | —         | six circular city photos with an Explore reveal and a dotted ring       |
| 4 | Interests      | —          | two stacked cards, a tall centre card with a description + Explore CTA, two stacked cards |
| 5 | Popular Things To do | `#listing` | wrapping window of four listing cards + arrows and dots        |
| 6 | Find more CTA  | —          | bordered band with a count line and an Explore More action              |
| 7 | How It Work?   | `#about`   | three step cards (icon, title, blurb)                                   |
| 8 | People talking about | —    | one quote card at a time with portrait, name and role                   |
| 9 | Footer         | `#contact` | brand blurb + socials, Navigation and Services columns, newsletter, Component Dock credit |

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/gricklo/` | HTTP 200 · 45,011 B · title `Directory | Template` |
| stylesheet | `https://preview.colorlib.com/theme/gricklo/assets/css/bootstrap.min.css` | HTTP 200 · 24,896 B · sha256 `0ccdf0afe0e3` · framework build |
| stylesheet | `https://preview.colorlib.com/theme/gricklo/assets/css/owl.carousel.min.css` | HTTP 200 · 183 B · sha256 `651d6bdb6492` · framework build |
| stylesheet | `https://preview.colorlib.com/theme/gricklo/assets/css/slicknav.css` | HTTP 200 · 2,506 B · sha256 `87ded2c3764f` · framework build |
| stylesheet | `https://preview.colorlib.com/theme/gricklo/assets/css/animate.min.css` | HTTP 200 · 34,336 B · sha256 `ff7c8f596a31` · framework build |
| … | (2 further sheet(s) linked, all fetched) | — |

**No theme sheet** — every stylesheet this page links is a framework/plugin
build, so the design's own values live in the page's inline `<style>` or the
framework overrides in the DOM; read them there, not from the libraries.

## Requirements

### Requirement: Hero search

The hero SHALL render the headline "Listing made easy.", the subtext "Explore
vacation rentals, bar & restaurants and experiences. Find amazing places to
visit", a two-field search bar labelled "What?" and "Where?" with the
placeholders "Ex: Food, Service, Hotel, Shopping" and "Your City....", a
"Search" submit control, and a row of five category pills
(Restaurant, Home, Party, Shopping, Hotel).

#### Scenario: Default pills

- **WHEN** the page loads
- **THEN** the "Home" pill is the pressed one (`aria-pressed="true"`)
- **AND** the other four pills read `aria-pressed="false"`

#### Scenario: Choosing a pill

- **WHEN** the visitor clicks the "Party" pill
- **THEN** "Party" becomes the pressed pill
- **AND** "Home" is no longer pressed

#### Scenario: Submitting the search form

- **WHEN** the visitor submits the hero search form
- **THEN** the page does not navigate (the submit event is cancelled)
- **AND** the "What?" and "Where?" fields keep their rendering

### Requirement: Top Destination

The section SHALL render the heading "Top Destination" and six circular
destination cards — New York, Toronto, Thailand, Paris, Dhaka and Rome — each
carrying a photo and an "Explore" link revealed on hover behind a navy veil and
a slowly rotating dotted ring.

#### Scenario: Destinations render

- **WHEN** the page loads
- **THEN** six destination headings are shown
- **AND** each card exposes a link labelled "Explore"

### Requirement: Interest grid

The section SHALL render the heading "Things Are You Interested In" with the
subtext "Things you are looking for today", two stacked interest cards on each
side and one tall centre card that carries a description and an "Explore" CTA.

#### Scenario: Mixed grid

- **WHEN** the page loads
- **THEN** the centre card shows its description text
- **AND** the centre card offers an "Explore" call to action

### Requirement: Popular listings carousel

The section SHALL render the heading "Popular Things To do" with the subtext
"Popular Exclusive Listings In Our Directory" and a window of exactly four
listing cards drawn from the five listings, each card showing its photo, a
"Closed" badge, five star glyphs with the rating text, a save control, the
title with a verified glyph, the address, the listing category and phone/mail
contact glyphs.

#### Scenario: Initial window

- **WHEN** the page loads
- **THEN** four listing cards are visible, led by the first listing

#### Scenario: Next arrow advances the window

- **WHEN** the visitor clicks the next arrow
- **THEN** the window shifts by one listing
- **AND** the dot of the new window start is marked current

#### Scenario: Previous arrow wraps

- **WHEN** the visitor clicks the previous arrow at the first window
- **THEN** the window wraps to the last listing

#### Scenario: Jumping with a dot

- **WHEN** the visitor clicks the third dot
- **THEN** the window starts at the third listing
- **AND** that dot is marked current

### Requirement: Navigation

The bar SHALL render the brand, an inline search field, the five primary links
(Home, Listing, About, Blog, Contact) of which Listing and Blog carry
dropdown children, a "Sign In" link and an "Add Listing" call to action; below
the wide breakpoint a folded panel SHALL hold the same links, and the bar SHALL
turn translucent navy once the page has scrolled past 50px.

#### Scenario: Wide presentation

- **WHEN** the page loads at the wide breakpoint
- **THEN** the five primary links are rendered
- **AND** the "Add Listing" call to action is visible

#### Scenario: Scrolling the page

- **WHEN** the visitor scrolls past 50px
- **THEN** the bar gains its translucent navy background
- **AND** the "Sign In" / "Add Listing" group is hidden

#### Scenario: Opening the folded panel

- **WHEN** the visitor clicks the menu control
- **THEN** a dialog labelled "Mobile navigation" opens with the same links

#### Scenario: Closing the folded panel

- **WHEN** the folded panel is open and the visitor presses Escape
- **THEN** the panel closes
- **AND** a non-Escape key press leaves it open

#### Scenario: Closing with the backdrop

- **WHEN** the folded panel is open and the visitor clicks the backdrop
- **THEN** the panel closes

### Requirement: Call to action band

The band SHALL render the heading "Do you want to find more?", the line "10,563
listing for you on our list." and an "Explore More" action.

#### Scenario: CTA content

- **WHEN** the page loads
- **THEN** the heading, the count line and the "Explore More" action are shown

### Requirement: How it works

The section SHALL render the heading "How It Work?" and three step cards — "Find
Businesses", "Review Listings" and "Make a Reservation" — each with an icon, a
title and a blurb.

#### Scenario: Steps render

- **WHEN** the page loads
- **THEN** three step headings are shown
- **AND** each step carries its blurb

### Requirement: Testimonials

The section SHALL render the heading "People talking about" and one quote card
at a time with the quote, a portrait, the name and the role; the arrows SHALL
move between the two quotes and wrap at either end.

#### Scenario: Default quote

- **WHEN** the page loads
- **THEN** the first quote and its author are shown

#### Scenario: Next and previous wrap

- **WHEN** the visitor clicks the next arrow twice
- **THEN** the first quote is shown again
- **WHEN** the visitor clicks the previous arrow
- **THEN** the last quote is shown

### Requirement: Footer newsletter and credit

The footer SHALL render the brand blurb with four social links, the Navigation
and Services columns, a newsletter form that validates the email address
client-side, and a credit line linking https://www.componentdock.com/ as
"Component Dock".

#### Scenario: Rejecting a malformed address

- **WHEN** the visitor submits the newsletter form with a malformed address
- **THEN** an error message is shown
- **AND** the success message is not shown

#### Scenario: Accepting a valid address

- **WHEN** the visitor submits the newsletter form with a valid address
- **THEN** the success message replaces the form

#### Scenario: Clearing an error while typing

- **WHEN** an error is shown and the visitor types another character
- **THEN** the error is cleared

#### Scenario: Component Dock credit

- **WHEN** the page loads
- **THEN** the footer contains exactly one external link, pointing at
  https://www.componentdock.com/ and labelled "Component Dock"

### Requirement: Document title and provenance

The page SHALL set the document title to "Locale — Directory & Listings" on
mount, and no shipped app file SHALL carry the source design's provenance
strings (the source brand, its slug, or the source domain).

#### Scenario: Title set

- **WHEN** the app mounts
- **THEN** the document title is "Locale — Directory & Listings"

#### Scenario: No provenance strings in the shipped app

- **WHEN** every file of the app is searched for the source brand, slug and
  domain
- **THEN** no file contains them

#### Scenario: Section order

- **WHEN** the app renders
- **THEN** the main landmarks appear in the documented order (hero, listings,
  how-it-works), with the navigation bar above and the footer below

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/locale/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/locale/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Implementation notes

- The recreation replaces the source's own brand strings and any copy that named
  it with "Locale" (hero subtext is unchanged, the testimonial quote and the
  footer blurb are rebranded); no other wording was altered.
- The hero photo, the six destination photos, the five interest photos, the five
  listing photos and the two portraits are `picsum.photos` placeholders — the
  source's photography is never copied.
- The carousel is a client-side window (four of five cards), matching the
  source's desktop carousel; the arrows wrap in both directions.
- The nav dropdowns are CSS-only (`group-hover` + `group-focus-within`) so they
  stay reachable by keyboard without a JavaScript hover state.
- The folded panel mounts its contents only while open, so a shut panel holds no
  focusable copies of the bar's rows.

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Hero search — the "Home" pill is the pressed one (`aria-pressed="true"`)
- [ ] Top Destination — six destination headings are shown
- [ ] Interest grid — the centre card shows its description text
- [ ] Popular listings carousel — four listing cards are visible, led by the first listing
- [ ] Navigation — the five primary links are rendered
- [x] Call to action band — the heading, the count line and the "Explore More" action are shown
- [ ] How it works — three step headings are shown
- [ ] Testimonials — the first quote and its author are shown
- [x] Document title and provenance — the document title is "Locale — Directory & Listings"
