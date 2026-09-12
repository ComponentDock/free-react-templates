# Template: Galaquest (Event Conference Landing)

## Purpose

Galaquest is a single-page event/conference landing template — a React
recreation of the ColorLib free "Evento" template
(preview: https://preview.colorlib.com/theme/evento/ — event/conference
landing page). Built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

### Source mapping

- **ColorLib item:** "Evento" (TEMPLATES.md line 1005)
- **Source URL:** https://colorlib.com/wp/template/evento/
- **Preview URL:** https://preview.colorlib.com/theme/evento/ (HTTP 200, 833 lines)
- **Recreation name:** Galaquest (NEW — never reuse ColorLib source name "Evento")

### Design tokens captured from original

- **Font family:** `"Montserrat", sans-serif` — Google Fonts `<link>` (400, 500, 700, 900)
- **Brand / primary color:** `#f50136` (red) — section title top-border, btn-primary background, icon backgrounds, countdown box bg (`#F44336`)
- **Body text color:** `#838383` (medium grey)
- **Heading color:** `#18181c` (near-black)
- **Default button bg:** `#18181c` with white text; hover inverts to white bg / dark text
- **btn-primary:** bg `#f50136`, white text; hover: bg `#18181c`, white text
- **btn-rounded:** border-radius `50px` (pill shape)
- **Section title accent:** 3px solid `#f50136` top-border on `::before`, uppercase heading
- **bg-img sections:** background-size cover + `rgba(0,0,0,0.4)` dark overlay for readability
- **bg-gray section:** `#f7f7f7` light grey background
- **Countdown boxes:** bg `#F44336`, white text, 48px font, 50px border-radius cards
- **Price box active:** highlighted/recommended card with a "recommended" banner
- **Footer:** bg `#18181c` dark, white text, social icons row, Instagram grid, newsletter form
- **Icons:** Ionicons (`ion-ios-*`) in original — replace with `lucide-react`
- **Assets:** NOT copied — `picsum.photos` seeded placeholders, lucide-react icons, Google Fonts link

Galaquest lives in `apps/galaquest` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a fixed-top transparent-to-dark navbar with the site
name "Galaquest", section links (Home, Speakers, Events, News, Contact), and a
hamburger toggle for mobile.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered on a desktop viewport
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Galaquest" linking to `#home`
- **AND** it SHALL show links to Home, Speakers, Events, News, and Contact
- **AND** the navbar SHALL be fixed to the top of the viewport

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero cover slider

The system SHALL render a full-viewport hero section with a background image
and dark overlay, containing a headline "Prepare yourself for the", a large
emphasized "conference" text, a date/location line, and a red pill
"Buy Tickets Now" CTA button. The hero MAY include dot-based slide navigation.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL contain the headline "Prepare yourself for the"
- **AND** it SHALL show a large emphasized word "conference"
- **AND** it SHALL show a date/location line (e.g. "12-14 February 2018 — Los Angeles, CA.")
- **AND** it SHALL render a "Buy Tickets Now" button with pill shape (`btn-rounded`)

### Requirement: Event info strip

The system SHALL render a 4-column information strip below the hero with
icon-labeled items: Date, Location, Speakers, and Tickets, each with a
label and detail text.

#### Scenario: Info items

- **GIVEN** the page is rendered
- **WHEN** the event info strip is displayed
- **THEN** it SHALL show 4 items: Date, Location, Speakers, Tickets
- **AND** each item SHALL have an icon, a label, and detail text
- **AND** items SHALL be arranged in a 4-column row (2x2 on mobile)

### Requirement: Countdown timer

The system SHALL render a full-width parallax background section with a dark
overlay containing the text "Counter until the big event" and a countdown
display showing days, hours, minutes, and seconds until a configurable
target date.

#### Scenario: Countdown display

- **GIVEN** the page is rendered
- **WHEN** the countdown section is displayed
- **THEN** it SHALL show 4 countdown boxes (days, hours, minutes, seconds)
- **AND** each box SHALL have a red background (`#F44336`) with white text
- **AND** the countdown SHALL update in real-time

### Requirement: About the event

The system SHALL render a section titled "About the event" with two columns
of descriptive text and a row of 4 feature cards: 9 Speakers, 8 hrs Marathon,
Live Broadcast, and Early Bird — each with an icon, title, description, and
a "read more" link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About the event"
- **AND** it SHALL display two columns of descriptive text
- **AND** it SHALL show 4 feature cards with icon, title, blurb, and "read more" link

### Requirement: Speakers grid

The system SHALL render a section titled "Our Speakers" with an 8-card grid
(4 columns on desktop, 2 on mobile) where each card shows a speaker photo,
name, and position, with an info overlay on hover.

#### Scenario: Speaker cards

- **GIVEN** the page is rendered
- **WHEN** the speakers section is displayed
- **THEN** it SHALL show the heading "Our Speakers"
- **AND** it SHALL display 8 speaker cards in a responsive grid
- **AND** each card SHALL show a photo, a name, and a position title

### Requirement: Pricing table

The system SHALL render a section titled "Pricing Table" with 3 pricing
cards: Early Bird ($65, highlighted as "recommended"), Start Up ($85), and
Corporate ($95). Each card SHALL show a title, subtitle, price, feature
list, and a "Purchase" pill button.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show 3 pricing cards side by side
- **AND** the "Early Bird" card SHALL be visually highlighted with a "recommended" badge
- **AND** each card SHALL display a price, feature list, and a "Purchase" button

### Requirement: Events calendar

The system SHALL render a responsive table listing upcoming events, each
with an image thumbnail, a date display (day + month), event name/time/speaker,
a "Read More" pill button, and a "buy now" text link.

#### Scenario: Calendar events

- **GIVEN** the page is rendered
- **WHEN** the events calendar is displayed
- **THEN** it SHALL show the heading "Next Events Calendar"
- **AND** it SHALL display at least 3 event rows
- **AND** each row SHALL show an image, date, event details, "Read More" button, and "buy now" link

### Requirement: Partners / brand logos

The system SHALL render a light grey section titled "Our Partners" with a
carousel of partner/brand logos displayed at reduced opacity (30%) that
increases to full opacity on hover.

#### Scenario: Brand display

- **GIVEN** the page is rendered
- **WHEN** the partners section is displayed
- **THEN** it SHALL show the heading "Our Partners"
- **AND** it SHALL display at least 5 brand logos at reduced opacity
- **AND** hovering a logo SHALL increase its opacity to full

### Requirement: Get Tickets CTA

The system SHALL render a full-width background image section with a dark
overlay containing the title "Get Your Tickets", a descriptive paragraph,
and a red pill "buy now" button.

#### Scenario: Tickets CTA content

- **GIVEN** the page is rendered
- **WHEN** the get-tickets section is displayed
- **THEN** it SHALL show the heading "Get Your Tickets"
- **AND** it SHALL contain a descriptive paragraph
- **AND** it SHALL render a "buy now" pill button

### Requirement: Footer

The system SHALL render a dark footer (`bg #18181c`) with 3 columns: a logo
+ about paragraph + social icons, an Instagram photo grid, and a newsletter
subscribe form. Below the footer, a copyright bar SHALL display copyright
text and navigation links. The footer SHALL include a "Component Dock" link.

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show 3 columns: about/social, Instagram grid, newsletter form
- **AND** it SHALL include social media icon links (Pinterest, Facebook, Twitter, Dribbble, Instagram)
- **AND** the newsletter form SHALL have an email input and a "Subscribe" button

#### Scenario: Copyright bar

- **GIVEN** the page is rendered
- **WHEN** the copyright bar is displayed
- **THEN** it SHALL show copyright text
- **AND** it SHALL show navigation links matching the navbar
- **AND** it SHALL include a link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] Navbar renders with correct links and mobile hamburger toggle
- [ ] Hero section has background image with dark overlay, headline, date, CTA button
- [ ] Event info strip shows 4 icon-labeled items in responsive grid
- [ ] Countdown timer displays and updates in real-time
- [ ] About section shows description text and 4 feature cards
- [ ] Speakers grid shows 8 cards with photos, names, positions
- [ ] Pricing table shows 3 cards with correct prices and highlighted "recommended"
- [ ] Events calendar shows 3+ events with dates, details, and action buttons
- [ ] Partners section shows logos at reduced opacity with hover effect
- [ ] Get Tickets CTA has background image, heading, description, and button
- [ ] Footer has 3 columns (about, Instagram, newsletter) + social icons
- [ ] Copyright bar includes Component Dock link
- [ ] All sections use Montserrat font via Google Fonts `<link>`
- [ ] Brand color `#f50136` used consistently for CTAs and accents
- [ ] Pill buttons (`border-radius: 50px`) used for all primary actions
- [ ] No ColorLib references in app code (provenance only in spec/docs)
- [ ] Placeholder images use `picsum.photos` seeded URLs
- [ ] Icons use `lucide-react` (not Ionicons)
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds and Surge deploy target is `galaquest.free.componentdock.com`
