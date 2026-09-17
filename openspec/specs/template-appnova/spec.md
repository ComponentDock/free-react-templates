# Template: Appnova (App Landing Page)

## Purpose

Appnova is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "CA App
Landing" website template design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "CA App Landing" — minimal modern mobile app landing
  page for iOS/Android showcase, suitable for SaaS/tech products
  (source: https://colorlib.com/wp/template/ca-app/).
- **Categories:** Creative, Landing, One Page.
- **Preview status:** The ColorLib live preview was unreachable at time of
  research. Design is reconstructed from the template description, the
  TEMPLATES.md screenshot reference, and the known ColorLib "CA App" template
  characteristics (minimal, modern, app-focused).
- **Section order (1:1):** Navbar (logo + nav links: Home, Features, How It
  Works, Screenshots, Testimonials, Pricing + dark mode toggle; transparent
  over the hero, solid when scrolled) → Hero (bold tagline + subtitle blurb +
  phone mockup illustration + "Download on the App Store" and "Get it on
  Google Play" buttons) → Features ("Awesome Features" heading + 6 feature
  cards in a 3×2 grid, each with a lucide-react icon, title, and blurb) →
  How It Works ("How It Works" heading + 3 numbered steps with icons and
  descriptions) → Screenshots ("Screenshots" heading + horizontal scrollable
  gallery of phone screenshots) → Testimonials ("What Our Users Say" heading
  - carousel of user quotes with name, role, avatar, and star rating) →
    Pricing ("Pricing Plans" heading + 3 tier cards — Basic, Standard, Premium
    — each with price, feature list, and CTA button) → Newsletter CTA
    ("Stay Updated" heading + email input + subscribe button) → Footer
    (link columns, Component Dock link, copyright line, social media icon
    links).
- **Design tokens (CSS variables + Tailwind):**
  - Primary color `#6c5ce7` (vibrant purple) — buttons, accents, headings.
  - Secondary accent `#00cec9` (teal) — hover states, highlights.
  - Dark background `#1e2022` / `#2d3436` — hero gradient, dark sections.
  - Light section backgrounds `#f8f9fa`, `#ffffff`, `#f0f0f5`.
  - Muted text `#7f8c8d`; body text `#4a4a4a`.
  - Fonts: **"Poppins"** (headings, bold/semi-bold) + **"Roboto"** (body
    text) — loaded via Google Fonts.
  - Buttons: rounded-full, 48px height, gradient `#6c5ce7 → #a29bfe`
    (purple gradient), white text, uppercase, 16px side padding.
  - Card styles: white background, subtle shadow (`0 4px 20px rgba(0,0,0,0.08)`),
    16px border-radius.
  - Phone mockup: CSS-styled device frame with rounded corners, notch detail,
    and screenshot content.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/appnova-<n>/<w>/<h>`); icons → lucide-react; the
  phone mockup → styled div/illustration; store badges → styled buttons with
  lucide icons; no assets copied.

Appnova lives in `apps/appnova` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Appnova",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Appnova page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Appnova" and links to Home, Features, How It Works, Screenshots, Testimonials, and Pricing
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Navbar scroll behavior

- **GIVEN** the page is rendered
- **WHEN** the user scrolls past the hero section
- **THEN** the navbar SHALL transition from transparent background to a solid background with shadow

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a subtitle blurb,
a phone mockup illustration, and two app store buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading with the app tagline
- **AND** it SHALL show a supporting subtitle blurb describing the app
- **AND** it SHALL show a phone mockup illustration

#### Scenario: Hero app store buttons

- **GIVEN** the hero is displayed
- **WHEN** the user looks at the call-to-action area
- **THEN** it SHALL show an "Download on the App Store" button
- **AND** it SHALL show a "Get it on Google Play" button
- **AND** both buttons SHALL be styled consistently with rounded-full shapes

### Requirement: Features section

The system SHALL render a features section with a heading and six feature
cards, each with an icon, a title, and a description blurb.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Awesome Features" and a subtitle blurb
- **AND** it SHALL show exactly 6 feature cards in a responsive grid

#### Scenario: Feature card structure

- **GIVEN** a feature card is rendered
- **WHEN** the card is displayed
- **THEN** it SHALL contain a lucide-react icon
- **AND** it SHALL contain a title text
- **AND** it SHALL contain a description blurb
- **AND** the card SHALL have a white background with rounded corners and a subtle shadow

### Requirement: How It Works section

The system SHALL render a "How It Works" section with a heading and three
numbered steps, each with an icon and a description.

#### Scenario: How It Works content

- **GIVEN** the page is rendered
- **WHEN** the "How It Works" section is displayed
- **THEN** it SHALL contain a heading "How It Works" and a subtitle blurb
- **AND** it SHALL show exactly 3 steps
- **AND** each step SHALL have a number indicator, a lucide-react icon, a title, and a description

#### Scenario: How It Works step sequence

- **GIVEN** the "How It Works" section is displayed
- **WHEN** the steps are rendered
- **THEN** step 1 SHALL precede step 2 which SHALL precede step 3
- **AND** the steps SHALL be displayed in a horizontal row on desktop and stacked on mobile

### Requirement: Screenshots gallery

The system SHALL render a screenshots section with a heading and a
horizontally scrollable gallery of phone screenshots.

#### Scenario: Screenshots content

- **GIVEN** the page is rendered
- **WHEN** the screenshots section is displayed
- **THEN** it SHALL contain a heading "Screenshots" and a subtitle blurb
- **AND** it SHALL show at least 4 screenshot images in a scrollable container

#### Scenario: Screenshots scroll behavior

- **GIVEN** the screenshots gallery is displayed
- **WHEN** the user scrolls or swipes horizontally through the gallery
- **THEN** the gallery SHALL scroll to reveal additional screenshots
- **AND** the scroll SHALL be smooth

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and a carousel
of user quotes, each with a name, role, avatar, and star rating.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Users Say"
- **AND** it SHALL show at least one testimonial with a quote, reviewer name, and role

#### Scenario: Testimonials carousel

- **GIVEN** the testimonials section is displayed
- **WHEN** the testimonials carousel is rendered
- **THEN** it SHALL show navigation controls (dots or arrows)
- **AND** the user SHALL be able to navigate between testimonials
- **AND** auto-play SHALL cycle through testimonials when no user interaction occurs

#### Scenario: Testimonial card structure

- **GIVEN** a testimonial card is rendered
- **WHEN** the card is displayed
- **THEN** it SHALL contain a star rating (1–5 stars)
- **AND** it SHALL contain a quote text
- **AND** it SHALL contain the reviewer's name and role
- **AND** it SHALL contain an avatar image

### Requirement: Pricing section

The system SHALL render a pricing section with three plan tiers, each with
a name, price, feature list, and a call-to-action button.

#### Scenario: Pricing plans content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Pricing Plans" and a subtitle blurb
- **AND** it SHALL show three pricing cards: Basic, Standard, and Premium

#### Scenario: Pricing card structure

- **GIVEN** a pricing card is rendered
- **WHEN** the card is displayed
- **THEN** it SHALL contain the plan name
- **AND** it SHALL contain a price amount
- **AND** it SHALL contain a feature list with at least 4 items
- **AND** it SHALL contain a "Get Started" or equivalent CTA button

#### Scenario: Pricing highlighted tier

- **GIVEN** the pricing section is displayed
- **WHEN** the three plans are rendered
- **THEN** one tier (Standard or Premium) SHALL be visually highlighted as the recommended plan
- **AND** the highlighted card SHALL have a distinct border or background color

### Requirement: Newsletter CTA section

The system SHALL render a newsletter call-to-action section with a heading,
an email input field, and a subscribe button.

#### Scenario: Newsletter CTA content

- **GIVEN** the page is rendered
- **WHEN** the newsletter CTA section is displayed
- **THEN** it SHALL contain a heading such as "Stay Updated" or "Subscribe"
- **AND** it SHALL contain an email input field
- **AND** it SHALL contain a "Subscribe" button

#### Scenario: Newsletter CTA form behavior

- **GIVEN** the newsletter CTA form is rendered
- **WHEN** the user submits the form with an invalid email
- **THEN** the form SHALL not submit and SHALL display a validation message
- **AND** the input SHALL use `type="email"` for browser validation

### Requirement: Footer

The system SHALL render a footer with link columns, a Component Dock link,
a copyright line, and social media icon links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show at least two link columns with navigation links
- **AND** it SHALL show a link to `https://www.componentdock.com/`
- **AND** it SHALL show a copyright line
- **AND** it SHALL show social media icon links (e.g., GitHub, X/Twitter, LinkedIn)

#### Scenario: Footer structure

- **GIVEN** the footer is displayed
- **WHEN** the footer is rendered
- **THEN** it SHALL be in the `contentinfo` landmark
- **AND** the background SHALL be dark (`#1e2022` or similar)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Appnova app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Appnova — App Landing Template"

#### Scenario: Section ordering

- **GIVEN** the Appnova page is rendered
- **WHEN** the page loads
- **THEN** sections SHALL appear in this order: Navbar → Hero → Features → How It Works → Screenshots → Testimonials → Pricing → Newsletter CTA → Footer
