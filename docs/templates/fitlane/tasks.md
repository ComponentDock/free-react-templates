# Fitlane — Implementation Tasks

Source design: **Sportify** (`https://colorlib.com/wp/template/sportify/`) → recreation name **fitlane**. Shipped at https://fitlane.free.componentdock.com.

Scope: Fitlane is a single-page gym/fitness landing template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/fitlane/src/App.tsx`:

### 1. Navbar
- The system SHALL render a fixed-top header with the site name "Fitlane", navigation links, social icons, and a hamburger menu for mobile.
- Scenario — Header content:
  - **GIVEN** the Fitlane page is rendered
  - **WHEN** the header is displayed
  - **THEN** the header SHALL show the logo text "Fitlane"
  - **AND** the header SHALL show navigation links: Home, About Us, Classes,
  - **AND** the header SHALL show social media icon links (Facebook, Twitter,
- Scenario — Hamburger menu on mobile:
  - **GIVEN** the viewport width is ≤ 768px
  - **WHEN** the header is rendered
  - **THEN** a hamburger menu icon SHALL be visible
  - **AND** clicking the hamburger icon SHALL toggle the mobile navigation menu

### 2. Hero
- The system SHALL render a full-width hero section with a background image, gradient overlay, subtitle, title, and a CTA button.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero section is displayed
  - **THEN** it SHALL show the subtitle "go to the gym now!"
  - **AND** it SHALL show the H1 title "never limit yourself"
  - **AND** the word "never" in the title SHALL be rendered in the primary
  - **AND** it SHALL show a "read more" button
- Scenario — Hero styling:
  - **GIVEN** the hero section is rendered
  - **WHEN** the section is inspected
  - **THEN** the background image SHALL cover the full viewport width
  - **AND** a gradient overlay SHALL be applied using the accent-to-primary

### 3. IntroFeatures
- The system SHALL render a three-column feature intro section with icons, titles, and descriptions.
- Scenario — Intro content:
  - **GIVEN** the page is rendered
  - **WHEN** the intro section is displayed
  - **THEN** it SHALL show three feature boxes
  - **AND** the boxes SHALL be titled "aerobics program", "train hard", and
  - **AND** each box SHALL contain an icon (in accent/purple color), a title,

### 4. About
- The system SHALL render a two-column about section with text content on the left and an image on the right.
- Scenario — About content:
  - **GIVEN** the page is rendered
  - **WHEN** the about section is displayed
  - **THEN** the left column SHALL show a subtitle "aerobics program"
  - **AND** the left column SHALL show an H2 title "about fitlane"
  - **AND** the left column SHALL show a descriptive paragraph
  - **AND** the left column SHALL show a "read more" button
  - **AND** the right column SHALL show a gym/fitness image
- Scenario — About layout:
  - **GIVEN** the about section is rendered
  - **WHEN** the section is inspected
  - **THEN** the layout SHALL be two columns (approximately 8/4 grid split)
  - **AND** on mobile the columns SHALL stack vertically

### 5. Quote
- The system SHALL render a full-width centered quote section with attribution.
- Scenario — Quote content:
  - **GIVEN** the page is rendered
  - **WHEN** the quote section is displayed
  - **THEN** it SHALL show the quote "The last three or four reps is what makes
  - **AND** it SHALL show the attribution "— Arnold Schwarzenegger"
- Scenario — Quote styling:
  - **GIVEN** the quote section is rendered
  - **WHEN** the section is inspected
  - **THEN** the background SHALL be dark (`#190a49` or similar)
  - **AND** the text SHALL be centered horizontally

### 6. CTA
- The system SHALL render a two-column call-to-action section with an image on the left and content with checklist and buttons on the right.
- Scenario — CTA content:
  - **GIVEN** the page is rendered
  - **WHEN** the CTA section is displayed
  - **THEN** the left column SHALL show a gym/fitness image
  - **AND** the right column SHALL show a subtitle "aerobics program"
  - **AND** the right column SHALL show an H2 title "join our gym"
  - **AND** the right column SHALL show a checklist of 4 items with checkmark
  - **AND** the right column SHALL show two buttons: a primary "read more"

### 7. Classes
- The system SHALL render a horizontal slider with at least three class cards.
- Scenario — Classes content:
  - **GIVEN** the page is rendered
  - **WHEN** the classes section is displayed
  - **THEN** it SHALL show three class cards: aerobics, pilates, yoga
  - **AND** each card SHALL display the class title and descriptive text
  - **AND** each card SHALL show an instructor/related image
- Scenario — Classes slider:
  - **GIVEN** the classes section is displayed
  - **WHEN** the user interacts with the slider
  - **THEN** the user SHALL be able to navigate between slides using previous/

### 8. Pricing
- The system SHALL render a pricing section with a parallax background and three pricing tiers.
- Scenario — Pricing content:
  - **GIVEN** the page is rendered
  - **WHEN** the pricing section is displayed
  - **THEN** it SHALL show a subtitle "our programs"
  - **AND** it SHALL show an H2 title "pricing"
  - **AND** it SHALL show three pricing cards:
  - "Free / 1 day" with feature list and "order plan" button
  - "$29.90 / month" with feature list and "order plan" button
  - "$59.90 / month" with feature list and "order plan" button
  - **AND** each feature list SHALL use checkmark/cross icons to indicate
- Scenario — Pricing styling:
  - **GIVEN** the pricing section is rendered
  - **WHEN** the section is inspected
  - **THEN** the background SHALL use a parallax image effect
  - **AND** the section background overlay SHALL use the dark navy color

### 9. Footer
- The system SHALL render a footer with contact columns and a copyright bar.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show three columns: phone/contact info, email info, and
  - **AND** it SHALL show a copyright bar at the bottom
- Scenario — Footer Component Dock link:
  - **GIVEN** the footer copyright bar is rendered
  - **WHEN** the user inspects the copyright text
  - **THEN** the copyright bar SHALL contain a link to

### Cross-cutting requirements

- **Page composition** — The system SHALL compose all sections in a single page with a main landmark and a document title.
  - Scenario — Full page render: **GIVEN** the Fitlane app is rendered; **WHEN** the page loads; **THEN** the page SHALL compose the Header in the banner landmark, all; **AND** the document title SHALL be "Fitlane — Gym &amp; Fitness Template"; [ ] `npm run spec:validate` passes for this spec; [ ] `scripts/verify-app.sh fitlane` passes: typecheck + lint + vitest with; [ ] Section order matches the demo 1:1 (header, hero, intro, about, quote,; [ ] Design tokens in `@theme`: primary `#ff0e3b`, navy `#190a49`,; [ ] Font: Open Sans via Google Fonts; [ ] Buttons: rounded corners, primary red with white text, outline variant; [ ] Hero on full-width background image with gradient overlay; word "never"; [ ] Quote section with Arnold Schwarzenegger attribution on dark background; [ ] Pricing section with parallax background and three tiers; [ ] Classes slider with previous/next navigation; [ ] Placeholder images seeded (`picsum.photos/seed/fitlane-<n>/<w>/<h>`);; [ ] Footer links to `https://www.componentdock.com/`; [ ] No references to the original source template name in app code; [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —

## Verification

- [x] `apps/fitlane` ships on https://fitlane.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fitlane/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fitlane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fitlane/public/CNAME` = `fitlane.free.componentdock.com`
  and the package `homepage` = `https://fitlane.free.componentdock.com`.
