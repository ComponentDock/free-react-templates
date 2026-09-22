# Template: Fitlane (Gym / Fitness Landing Page)

## Purpose

Fitlane is a single-page gym/fitness landing template in the
free-react-templates monorepo. It is a React recreation of the ColorLib free
"Sportify" website template design (source: https://colorlib.com/wp/template/sportify/),
built under a DIFFERENT name (Fitlane — fit + lane) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sportify" — gym/fitness landing page template.
- **Section order (1:1):**
  1. **Header** — Logo text "Fitlane", navigation links (Home, About Us,
     Classes, Blog, Contact), social icon links (Facebook, Twitter, Instagram,
     LinkedIn — using lucide-react equivalents or inline SVGs), and a hamburger
     menu button for mobile. Dark background (`--color-navy`).
  2. **Hero Slider** — Full-width background image with semi-transparent
     overlay. Subtitle text "go to the gym now!", H1 title "never limit
     yourself" with "never" rendered in the primary accent color (`--color-primary`).
     A "read more" CTA button. Background image covers the full viewport width.
  3. **Intro (Features)** — Three-column grid, each column containing an
     icon, a title, and descriptive text. Items: "aerobics program",
     "train hard", "basic program". Icons use the accent/purple color.
  4. **About** — Two-column layout (8-col content / 4-col image). Left column:
     subtitle "aerobics program", H2 title "about fitlane", paragraph text,
     and a "read more" button. Right column: a gym/fitness image.
  5. **Quote** — Full-width dark background section with a centered blockquote:
     "The last three or four reps is what makes the muscle grow. This area of
     pain divides a champion from someone who is not a champion." attributed to
     "— Arnold Schwarzenegger". Overlay gradient in primary/accent.
  6. **CTA (Call to Action)** — Two-column layout: left column is an image,
     right column contains subtitle "aerobics program", H2 title "join our
     gym", a checklist of 4 items with checkmark icons, and two buttons
     (primary "read more" + outline variant).
  7. **Classes** — Horizontal slider/carousel with 3 class cards: "aerobics",
     "pilates", "yoga". Each card shows the class title, descriptive text,
     and an instructor/related image. Slider has previous/next navigation.
  8. **Pricing** — Parallax background image section. Subtitle "our programs",
     H2 title "pricing". Three pricing cards:
     - "Free / 1 day" — features list with check/cross icons, "order plan" button
     - "$29.90 / month" — features list with check/cross icons, "order plan" button (featured/primary)
     - "$59.90 / month" — features list with check/cross icons, "order plan" button
       Cards are stacked vertically or in a grid depending on viewport.
  9. **Footer** — Three-column contact info (phone + address, email, location/map),
     plus a bottom copyright bar with text linking to Component Dock.

- **Design tokens extracted:**
  - Font: **Open Sans** (via Google Fonts, weights 300–800).
  - Primary brand: **#ff0e3b** (red — CTAs, accent text, "never" in hero).
  - Secondary background: **#190a49** (dark navy/purple — header, footer,
    pricing overlay, quote section).
  - Accent: **#7800ff** (purple — icons, gradient endpoint).
  - Gradient: `linear-gradient(to right, rgba(120,0,255,0.34), rgba(255,14,59,0.34))`
    (accent→primary semi-transparent overlay on hero and quote).
  - Text primary: **#2c2c2c** (dark).
  - Text muted: **#a5a5a5**, **#909090**.
  - White: **#ffffff**.
  - Buttons: rounded corners, primary background `#ff0e3b`, outline variant
    with `#ff0e3b` border.
  - Dark section background: `#190a49` for header, footer, pricing overlay.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/fitlane-<n>/<w>/<h>`); icons → lucide-react; Open Sans
  via Google Fonts; repo-standard Footer with Component Dock link; hero slider
  and class carousel with no extra dependencies.

Fitlane lives in `apps/fitlane` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header / Navigation bar

The system SHALL render a fixed-top header with the site name "Fitlane",
navigation links, social icons, and a hamburger menu for mobile.

#### Scenario: Header content

- **GIVEN** the Fitlane page is rendered
- **WHEN** the header is displayed
- **THEN** the header SHALL show the logo text "Fitlane"
- **AND** the header SHALL show navigation links: Home, About Us, Classes,
  Blog, Contact
- **AND** the header SHALL show social media icon links (Facebook, Twitter,
  Instagram, LinkedIn)

#### Scenario: Hamburger menu on mobile

- **GIVEN** the viewport width is ≤ 768px
- **WHEN** the header is rendered
- **THEN** a hamburger menu icon SHALL be visible
- **AND** clicking the hamburger icon SHALL toggle the mobile navigation menu

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
gradient overlay, subtitle, title, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the subtitle "go to the gym now!"
- **AND** it SHALL show the H1 title "never limit yourself"
- **AND** the word "never" in the title SHALL be rendered in the primary
  brand color (`#ff0e3b`)
- **AND** it SHALL show a "read more" button

#### Scenario: Hero styling

- **GIVEN** the hero section is rendered
- **WHEN** the section is inspected
- **THEN** the background image SHALL cover the full viewport width
- **AND** a gradient overlay SHALL be applied using the accent-to-primary
  semi-transparent gradient

### Requirement: Intro (Features) section

The system SHALL render a three-column feature intro section with icons,
titles, and descriptions.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show three feature boxes
- **AND** the boxes SHALL be titled "aerobics program", "train hard", and
  "basic program"
- **AND** each box SHALL contain an icon (in accent/purple color), a title,
  and descriptive text

### Requirement: About section

The system SHALL render a two-column about section with text content on the
left and an image on the right.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** the left column SHALL show a subtitle "aerobics program"
- **AND** the left column SHALL show an H2 title "about fitlane"
- **AND** the left column SHALL show a descriptive paragraph
- **AND** the left column SHALL show a "read more" button
- **AND** the right column SHALL show a gym/fitness image

#### Scenario: About layout

- **GIVEN** the about section is rendered
- **WHEN** the section is inspected
- **THEN** the layout SHALL be two columns (approximately 8/4 grid split)
- **AND** on mobile the columns SHALL stack vertically

### Requirement: Quote section

The system SHALL render a full-width centered quote section with attribution.

#### Scenario: Quote content

- **GIVEN** the page is rendered
- **WHEN** the quote section is displayed
- **THEN** it SHALL show the quote "The last three or four reps is what makes
  the muscle grow. This area of pain divides a champion from someone who is
  not a champion."
- **AND** it SHALL show the attribution "— Arnold Schwarzenegger"

#### Scenario: Quote styling

- **GIVEN** the quote section is rendered
- **WHEN** the section is inspected
- **THEN** the background SHALL be dark (`#190a49` or similar)
- **AND** the text SHALL be centered horizontally

### Requirement: CTA (Call to Action) section

The system SHALL render a two-column call-to-action section with an image on
the left and content with checklist and buttons on the right.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** the left column SHALL show a gym/fitness image
- **AND** the right column SHALL show a subtitle "aerobics program"
- **AND** the right column SHALL show an H2 title "join our gym"
- **AND** the right column SHALL show a checklist of 4 items with checkmark
  icons
- **AND** the right column SHALL show two buttons: a primary "read more"
  button and an outline variant button

### Requirement: Classes section

The system SHALL render a horizontal slider with at least three class cards.

#### Scenario: Classes content

- **GIVEN** the page is rendered
- **WHEN** the classes section is displayed
- **THEN** it SHALL show three class cards: aerobics, pilates, yoga
- **AND** each card SHALL display the class title and descriptive text
- **AND** each card SHALL show an instructor/related image

#### Scenario: Classes slider

- **GIVEN** the classes section is displayed
- **WHEN** the user interacts with the slider
- **THEN** the user SHALL be able to navigate between slides using previous/
  next controls

### Requirement: Pricing section

The system SHALL render a pricing section with a parallax background and
three pricing tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show a subtitle "our programs"
- **AND** it SHALL show an H2 title "pricing"
- **AND** it SHALL show three pricing cards:
  - "Free / 1 day" with feature list and "order plan" button
  - "$29.90 / month" with feature list and "order plan" button
  - "$59.90 / month" with feature list and "order plan" button
- **AND** each feature list SHALL use checkmark/cross icons to indicate
  included/excluded features

#### Scenario: Pricing styling

- **GIVEN** the pricing section is rendered
- **WHEN** the section is inspected
- **THEN** the background SHALL use a parallax image effect
- **AND** the section background overlay SHALL use the dark navy color
  (`#190a49`) with reduced opacity

### Requirement: Footer

The system SHALL render a footer with contact columns and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show three columns: phone/contact info, email info, and
  location info
- **AND** it SHALL show a copyright bar at the bottom

#### Scenario: Footer Component Dock link

- **GIVEN** the footer copyright bar is rendered
- **WHEN** the user inspects the copyright text
- **THEN** the copyright bar SHALL contain a link to
  `https://www.componentdock.com/`

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Fitlane app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Fitlane — Gym &amp; Fitness Template"

## Design tokens

| Token                  | Value                                                                   | Usage                                                        |
| ---------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------ |
| `--color-primary`      | `#ff0e3b`                                                               | Primary brand red — CTAs, accent text, "never" in hero title |
| `--color-navy`         | `#190a49`                                                               | Dark navy/purple — header, footer, quote, pricing overlay    |
| `--color-accent`       | `#7800ff`                                                               | Purple accent — icons, gradient start                        |
| `--color-gradient`     | `linear-gradient(to right, rgba(120,0,255,0.34), rgba(255,14,59,0.34))` | Semi-transparent overlay — hero, quote sections              |
| `--color-text`         | `#2c2c2c`                                                               | Primary text color                                           |
| `--color-text-muted`   | `#a5a5a5`                                                               | Muted/secondary text                                         |
| `--color-text-muted-2` | `#909090`                                                               | Alternate muted text                                         |
| `--color-white`        | `#ffffff`                                                               | White — text on dark backgrounds, card backgrounds           |
| `--font-primary`       | `'Open Sans', sans-serif`                                               | Body and display font (Google Fonts, weights 300–800)        |
| `--radius-button`      | Rounded (lg/xl)                                                         | Button border radius                                         |
| `--btn-primary-bg`     | `#ff0e3b`                                                               | Primary button background                                    |
| `--btn-primary-text`   | `#ffffff`                                                               | Primary button text                                          |
| `--btn-outline-border` | `#ff0e3b`                                                               | Outline button border color                                  |

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh fitlane` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (header, hero, intro, about, quote,
      cta, classes, pricing, footer)
- [ ] Design tokens in `@theme`: primary `#ff0e3b`, navy `#190a49`,
      accent `#7800ff`, gradient, text colors
- [ ] Font: Open Sans via Google Fonts
- [ ] Buttons: rounded corners, primary red with white text, outline variant
      with red border
- [ ] Hero on full-width background image with gradient overlay; word "never"
      in accent color
- [ ] Quote section with Arnold Schwarzenegger attribution on dark background
- [ ] Pricing section with parallax background and three tiers
- [ ] Classes slider with previous/next navigation
- [ ] Placeholder images seeded (`picsum.photos/seed/fitlane-<n>/<w>/<h>`);
      no copied assets
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No references to the original source template name in app code
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
