# Appnova — Implementation Tasks

Source design: **Ca App** (`https://colorlib.com/wp/template/ca-app/`) → recreation name **appnova**. Shipped at https://appnova.free.componentdock.com.

Scope: Appnova is a single-page app landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "CA App Landing" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/appnova/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Appnova", anchor links to the page's sections, and a dark-mode toggle button.
- Scenario — Navbar content:
  - **GIVEN** the Appnova page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Appnova" and links to Home, Features, How It Works, Screenshots, Testimonials, and Pricing
  - **AND** the navbar SHALL show a dark-mode toggle button
- Scenario — Dark mode toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the dark-mode toggle
  - **THEN** the `.dark` class SHALL be toggled on the document root element
  - **AND** the toggle SHALL reflect the current mode
- Scenario — Navbar scroll behavior:
  - **GIVEN** the page is rendered
  - **WHEN** the user scrolls past the hero section
  - **THEN** the navbar SHALL transition from transparent background to a solid background with shadow

### 2. Hero
- The system SHALL render a full-width hero with a headline, a subtitle blurb, a phone mockup illustration, and two app store buttons.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it SHALL contain a level-1 heading with the app tagline
  - **AND** it SHALL show a supporting subtitle blurb describing the app
  - **AND** it SHALL show a phone mockup illustration
- Scenario — Hero app store buttons:
  - **GIVEN** the hero is displayed
  - **WHEN** the user looks at the call-to-action area
  - **THEN** it SHALL show an "Download on the App Store" button
  - **AND** it SHALL show a "Get it on Google Play" button
  - **AND** both buttons SHALL be styled consistently with rounded-full shapes

### 3. Stats
- No dedicated spec block — hold this band to the design notes.

### 4. Features
- The system SHALL render a features section with a heading and six feature cards, each with an icon, a title, and a description blurb.
- Scenario — Features content:
  - **GIVEN** the page is rendered
  - **WHEN** the features section is displayed
  - **THEN** it SHALL contain a heading "Awesome Features" and a subtitle blurb
  - **AND** it SHALL show exactly 6 feature cards in a responsive grid
- Scenario — Feature card structure:
  - **GIVEN** a feature card is rendered
  - **WHEN** the card is displayed
  - **THEN** it SHALL contain a lucide-react icon
  - **AND** it SHALL contain a title text
  - **AND** it SHALL contain a description blurb
  - **AND** the card SHALL have a white background with rounded corners and a subtle shadow

### 5. HowItWorks
- The system SHALL render a "How It Works" section with a heading and three numbered steps, each with an icon and a description.
- Scenario — How It Works content:
  - **GIVEN** the page is rendered
  - **WHEN** the "How It Works" section is displayed
  - **THEN** it SHALL contain a heading "How It Works" and a subtitle blurb
  - **AND** it SHALL show exactly 3 steps
  - **AND** each step SHALL have a number indicator, a lucide-react icon, a title, and a description
- Scenario — How It Works step sequence:
  - **GIVEN** the "How It Works" section is displayed
  - **WHEN** the steps are rendered
  - **THEN** step 1 SHALL precede step 2 which SHALL precede step 3
  - **AND** the steps SHALL be displayed in a horizontal row on desktop and stacked on mobile

### 6. AboutOne
- No dedicated spec block — hold this band to the design notes.
- Anchors: Designed for a Seamless Experience · Get Details

### 7. AboutTwo
- No dedicated spec block — hold this band to the design notes.
- Anchors: Download Appnova Today

### 8. Video
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video

### 9. Testimonials
- The system SHALL render a testimonials section with a heading and a carousel of user quotes, each with a name, role, avatar, and star rating.
- Scenario — Testimonials content:
  - **GIVEN** the page is rendered
  - **WHEN** the testimonials section is displayed
  - **THEN** it SHALL contain a heading "What Our Users Say"
  - **AND** it SHALL show at least one testimonial with a quote, reviewer name, and role
- Scenario — Testimonials carousel:
  - **GIVEN** the testimonials section is displayed
  - **WHEN** the testimonials carousel is rendered
  - **THEN** it SHALL show navigation controls (dots or arrows)
  - **AND** the user SHALL be able to navigate between testimonials
  - **AND** auto-play SHALL cycle through testimonials when no user interaction occurs
- Scenario — Testimonial card structure:
  - **GIVEN** a testimonial card is rendered
  - **WHEN** the card is displayed
  - **THEN** it SHALL contain a star rating (1–5 stars)
  - **AND** it SHALL contain a quote text
  - **AND** it SHALL contain the reviewer's name and role
  - **AND** it SHALL contain an avatar image

### 10. Screenshots
- The system SHALL render a screenshots section with a heading and a horizontally scrollable gallery of phone screenshots.
- Scenario — Screenshots content:
  - **GIVEN** the page is rendered
  - **WHEN** the screenshots section is displayed
  - **THEN** it SHALL contain a heading "Screenshots" and a subtitle blurb
  - **AND** it SHALL show at least 4 screenshot images in a scrollable container
- Scenario — Screenshots scroll behavior:
  - **GIVEN** the screenshots gallery is displayed
  - **WHEN** the user scrolls or swipes horizontally through the gallery
  - **THEN** the gallery SHALL scroll to reveal additional screenshots
  - **AND** the scroll SHALL be smooth

### 11. Pricing
- The system SHALL render a pricing section with three plan tiers, each with a name, price, feature list, and a call-to-action button.
- Scenario — Pricing plans content:
  - **GIVEN** the page is rendered
  - **WHEN** the pricing section is displayed
  - **THEN** it SHALL contain a heading "Pricing Plans" and a subtitle blurb
  - **AND** it SHALL show three pricing cards: Basic, Standard, and Premium
- Scenario — Pricing card structure:
  - **GIVEN** a pricing card is rendered
  - **WHEN** the card is displayed
  - **THEN** it SHALL contain the plan name
  - **AND** it SHALL contain a price amount
  - **AND** it SHALL contain a feature list with at least 4 items
  - **AND** it SHALL contain a "Get Started" or equivalent CTA button
- Scenario — Pricing highlighted tier:
  - **GIVEN** the pricing section is displayed
  - **WHEN** the three plans are rendered
  - **THEN** one tier (Standard or Premium) SHALL be visually highlighted as the recommended plan
  - **AND** the highlighted card SHALL have a distinct border or background color

### 12. Footer
- The system SHALL render a footer with link columns, a Component Dock link, a copyright line, and social media icon links.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show at least two link columns with navigation links
  - **AND** it SHALL show a link to `https://www.componentdock.com/`
  - **AND** it SHALL show a copyright line
  - **AND** it SHALL show social media icon links (e.g., GitHub, X/Twitter, LinkedIn)
- Scenario — Footer structure:
  - **GIVEN** the footer is displayed
  - **WHEN** the footer is rendered
  - **THEN** it SHALL be in the `contentinfo` landmark
  - **AND** the background SHALL be dark (`#1e2022` or similar)

### Cross-cutting requirements

- **Newsletter CTA section** — The system SHALL render a newsletter call-to-action section with a heading, an email input field, and a subscribe button.
  - Scenario — Newsletter CTA content: **GIVEN** the page is rendered; **WHEN** the newsletter CTA section is displayed; **THEN** it SHALL contain a heading such as "Stay Updated" or "Subscribe"; **AND** it SHALL contain an email input field; **AND** it SHALL contain a "Subscribe" button
  - Scenario — Newsletter CTA form behavior: **GIVEN** the newsletter CTA form is rendered; **WHEN** the user submits the form with an invalid email; **THEN** the form SHALL not submit and SHALL display a validation message; **AND** the input SHALL use `type="email"` for browser validation
- **Page composition** — The system SHALL compose all sections in a single page with a main landmark and a document title.
  - Scenario — Full page render: **GIVEN** the Appnova app is rendered; **WHEN** the page loads; **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark; **AND** the document title SHALL be "Appnova — App Landing Template"
  - Scenario — Section ordering: **GIVEN** the Appnova page is rendered; **WHEN** the page loads; **THEN** sections SHALL appear in this order: Navbar → Hero → Features → How It Works → Screenshots → Testimonials → Pricing → Newsletter CTA → Footer
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/appnova/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/appnova/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/appnova` ships on https://appnova.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/appnova/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/appnova/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/appnova/public/CNAME` = `appnova.free.componentdock.com`
  and the package `homepage` = `https://appnova.free.componentdock.com`.
