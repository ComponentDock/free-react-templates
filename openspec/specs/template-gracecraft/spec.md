# Template: Gracecraft (Church / Nonprofit)

## Purpose

A church/nonprofit website template. Recreation of ColorLib "Mimosan".

- **Source slug:** `mimosan`
- **Preview URL:** https://preview.colorlib.com/theme/mimosan/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/mimosan-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Church / Nonprofit

## Design tokens (extracted from ColorLib preview)

| Token                  | Value                                        | Notes                                   |
| ---------------------- | -------------------------------------------- | --------------------------------------- |
| Primary brand          | `#b10707`                                    | Dark red — buttons, accents, logo color |
| Secondary/CTA          | `#ff6347`                                    | Tomato red — hover states, links        |
| Accent light           | `#ffa07f`                                    | Light salmon — secondary hover          |
| Error/alert red        | `#eb4141`                                    | Lighter red                             |
| Text dark              | `#181818`                                    | Headings, nav                           |
| Text body              | `#353535`                                    | Paragraph text                          |
| Text muted             | `#7c7c7c`                                    | Subtitles, meta                         |
| Text light             | `#a5a5a5`                                    | Very light body text                    |
| White                  | `#FFFFFF`                                    | Card backgrounds, text on dark          |
| Light bg 1             | `#f9f9f9`                                    | Section alternating bg                  |
| Light bg 2             | `#f7f7f7`                                    | Gallery bg                              |
| Button radius          | `3px`                                        | Near-rectangular with slight rounding   |
| Button bg              | `#b10707`                                    | Dark red                                |
| Button text            | `#FFFFFF`                                    | White                                   |
| Button width           | `160px`                                      | Fixed width                             |
| Button height          | `46px`                                       | Fixed height                            |
| Body font              | `'Assistant', sans-serif`                    | Main body text                          |
| Heading font           | `'Old Standard TT', serif`                   | Section titles, logo                    |
| Secondary font         | `'Open Sans', sans-serif`                    | Nav, buttons, meta                      |
| Section title size     | `36px`, weight `700`                         | Section headings                        |
| Section title color    | `#181818`                                    | Dark                                    |
| Section subtitle color | `#7c7c7c`                                    | Muted                                   |
| Parallax               | Used on hero background + donations + footer | Full-width background images            |

## Requirements

### Requirement: TopBar displays contact info and social links

The top bar SHALL show an email address and phone number alongside social media icon links.

#### Scenario: TopBar renders contact info

- **WHEN** I visit the Gracecraft page
- **THEN** the top bar shows an email address and phone number
- **AND** social media icon links are visible (facebook, twitter, linkedin)

### Requirement: Header navigation links

The header SHALL display a logo and main navigation links for Home, About, Sermons, Events, Blog, Contact.

#### Scenario: Header shows logo and nav

- **WHEN** I visit the Gracecraft page
- **THEN** the header shows a logo linking to Home
- **AND** navigation links include Home, About, Sermons, Events, Blog, Contact

### Requirement: Hero section displays headline and CTA

The hero section SHALL show a headline about faith, body text, and a "Join with us" CTA button.

#### Scenario: Hero renders headline and CTA

- **WHEN** I visit the Gracecraft page
- **THEN** the hero section shows a headline about faith
- **AND** a body paragraph below the headline
- **AND** a "Join with us" CTA button is visible

### Requirement: Event banner shows upcoming event details

The event banner SHALL display a date badge, event title, time range, location, and countdown timer.

#### Scenario: Event banner renders event card

- **WHEN** I visit the Gracecraft page
- **THEN** an upcoming event card shows date, title, time, and location
- **AND** a countdown timer with days, hours, minutes, seconds is displayed

### Requirement: About section displays church welcome

The about section SHALL show a welcome heading, descriptive text, and a "Read story" button.

#### Scenario: About renders welcome content

- **WHEN** I visit the Gracecraft page
- **THEN** the about section title reads "Welcome to our church"
- **AND** a descriptive paragraph is shown
- **AND** a "Read story" button is visible

### Requirement: Sermons section displays sermon cards

The sermons section SHALL show 3 sermon cards, each with a title, pastor name, and categories.

#### Scenario: Sermons renders 3 cards

- **WHEN** I visit the Gracecraft page
- **THEN** 3 sermon cards are displayed
- **AND** each card shows a title, pastor name, and categories

### Requirement: Mission section shows 4 mission pillars

The mission section SHALL display 4 items (mission, community, belief, faith) with icons and descriptions.

#### Scenario: Mission renders 4 pillars

- **WHEN** I visit the Gracecraft page
- **THEN** 4 mission items are displayed with titles and descriptions

### Requirement: Events section shows upcoming events

The events section SHALL display 3 event cards with date, title, time, and location.

#### Scenario: Events renders 3 event cards

- **WHEN** I visit the Gracecraft page
- **THEN** 3 events are displayed with date badges, titles, times, and locations

### Requirement: Donation section shows progress

The donation section SHALL show a campaign description, progress bar with percentage, and raised/goal dollar amounts.

#### Scenario: Donation renders progress

- **WHEN** I visit the Gracecraft page
- **THEN** a donation section shows a campaign description
- **AND** a progress bar displays percentage raised
- **AND** "Raised" and "Goal" dollar amounts are shown
- **AND** a "Donate now" button is visible

### Requirement: Quote section displays blockquote

The quote section SHALL display a blockquote with attribution.

#### Scenario: Quote renders blockquote

- **WHEN** I visit the Gracecraft page
- **THEN** a blockquote is displayed with attribution
- **AND** a decorative quote icon appears

### Requirement: Gallery section shows images

The gallery SHALL display a grid of 10 images.

#### Scenario: Gallery renders image grid

- **WHEN** I visit the Gracecraft page
- **THEN** a gallery grid of 10 images is displayed

### Requirement: Latest news shows 3 blog posts

The latest news section SHALL display 3 news posts in a grid with title, author, date, comment count, and excerpt.

#### Scenario: Latest news renders 3 posts

- **WHEN** I visit the Gracecraft page
- **THEN** 3 news posts are displayed in a grid
- **AND** each post shows a title, author, date, comment count, and excerpt

### Requirement: Footer displays contact, links, and subscribe

The footer SHALL show contact details, useful links, a newsletter subscribe form, and a copyright line with Component Dock link.

#### Scenario: Footer renders all columns

- **WHEN** I visit the Gracecraft page
- **THEN** the footer shows contact details (address, phone, email)
- **AND** a useful links list is visible
- **AND** a newsletter subscribe form with email input and button is shown
- **AND** a copyright line includes the year and "Component Dock" link

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/gracecraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/gracecraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] TopBar displays contact info and social links — the top bar shows an email address and phone number
- [ ] Header navigation links — the header shows a logo linking to Home
- [ ] Hero section displays headline and CTA — the hero section shows a headline about faith
- [ ] Event banner shows upcoming event details — an upcoming event card shows date, title, time, and location
- [x] About section displays church welcome — the about section title reads "Welcome to our church"
- [ ] Sermons section displays sermon cards — 3 sermon cards are displayed
- [ ] Mission section shows 4 mission pillars — 4 mission items are displayed with titles and descriptions
- [ ] Events section shows upcoming events — 3 events are displayed with date badges, titles, times, and locations
- [ ] Donation section shows progress — a donation section shows a campaign description
- [ ] Quote section displays blockquote — a blockquote is displayed with attribution
- [ ] Gallery section shows images — a gallery grid of 10 images is displayed
- [ ] Latest news shows 3 blog posts — 3 news posts are displayed in a grid
