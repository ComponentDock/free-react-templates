# Template: Colid (Business Promotion Landing)

## Purpose

Colid is a single-page business/promotional landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colid" website template design (see TEMPLATES.md), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Colid" — business promotion landing page
  (source: https://colorlib.com/wp/template/colid/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/colid/
  (HTTP 200 — full rendered DOM + `style.css` (19 KB) extracted; Bootstrap
  3 + owl.carousel + themify icons). The TEMPLATES.md screenshot
  (`colid-free-app-landing-page-website-template.jpg`) matches this
  reconstruction.
- **Section order (1:1):**
  1. Navbar (`mainmenu-area`): Home (#home-page), Service, Features,
     Pricing, Team, FAQ, Blog, Contact.
  2. Hero (`header-area overlay full-height`, dark photo bg + angle
     decoration): "It's all about Promoting your Business" + lorem blurb +
     "Watch video" white pill button + right-side screen slider (5
     screenshots, owl carousel).
  3. Highlight tiles (`gray-bg section-padding`): 3 icon boxes — "EASY TO
     USE", "AWESOEM DESIGN", "EASY TO CUSTOMAIZE" (original spelling kept
     in content, paraphrased title case in headings).
  4. Caption slider (`angle-bg sky-bg section-padding`): sky-gradient band
     with a 2-slide carousel ("Easy to build", "Easy to use" — each a
     photo + title + description + "Read more").
  5. Special features (`gray-bg section-padding`): "SPECIAL FEATURES" +
     3 icon boxes — Creative Design, Unlimited Features, Full Free Chat.
  6. Pricing (`price-area overlay section-padding`, parallax photo bg):
     "Afortable Price" + 3 white tables — Basic $20/Month, STABDARD
     $39/Month, UNLIMITED $59/Month — each listing 100 MB Disk Space,
     2 Subdomains, 5 Email Accounts, Webmail Support, Customer Support
     24/7 + "Purchase" button.
  7. Team (`section-padding gray-bg`): "Special team" + 4 members —
     Jemy Sedonce (Co. Founder), Deborah Brown (UX Designer), Harry Banks
     (Founder), Victoria Clark (Creative Director).
  8. Testimonials (`testimonial-area section-padding gray-bg overlay`):
     "Client says" + carousel of "AR Rahman" quotes.
  9. FAQ (`gray-bg section-padding`): "Frequently Asked Questions" +
     accordion (e.g. "Sedeiusmod tempor inccsetetur aliquatraiy?").
  10. Client strip (`section-padding overlay client-area overlay`): logo
      strip.
  11. Blog (`section-padding gray-bg`): "Beautiful Place for your Great
      Journey" + 3 cards (title, "Admin · Feb 01, 2017", excerpt,
      "Read more").
  12. Footer/contact (`footer-area relative sky-bg`): "Contact with us" +
      info (Address: Box 564, Disneyland USA; Telephone +880****6495 /
      +880****0471; E-mail youremail@example.com / example@mail.com) +
      contact form (name/email/subject/message + "Submit") + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **sky-blue gradient `linear-gradient(to bottom, #75cbe7 0%,
#138fc2 100%)`** — `.sky-bg` and `.overlay:before` (opacity 0.8);
    buttons **`#2f60c3`** (royal blue).
  - Light section background **`#f2fefe`** (`gray-bg`); hero dark photo
    with `#000` base.
  - Font: **"Poppins"** (Google Fonts).
  - Buttons: pill (border-radius 50px), padding 8px 30px, shadow
    `2px 5px 20px -5px rgba(0,0,0,0.1)`; `.button.white` = white bg +
    `#138fc2` text.
  - Section titles: uppercase h2 with a small icon underline (themify).
  - Price tables: white cards, text `#515656`, radius 2px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/colid-<n>/<w>/<h>`); icons → lucide-react (Play,
  Zap, Palette, Sliders, MessageCircle, etc.); font → Google Fonts Poppins
  via `<link>`; no assets copied. Paraphrased copy keeps the same content
  kinds (title + blurb + CTA).

Colid lives in `apps/colid` and uses shared components from `packages/ui`
(ButtonLink) where the house pattern does.

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Colid",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Colid page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Colid" and links to Home, Service, Features, Pricing, Team, FAQ, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, a
"Watch video" button, and a rotating screen preview.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "It's all about Promoting your Business"
- **AND** it SHALL show a "Watch video" button
- **AND** it SHALL show an app screenshot preview

#### Scenario: Screen preview navigation

- **GIVEN** the hero screen preview is displayed
- **WHEN** the user presses the next arrow or a dot
- **THEN** the visible screenshot SHALL change accordingly

### Requirement: Highlight tiles

The system SHALL render three highlight tiles with icons and blurbs.

#### Scenario: Highlights content

- **GIVEN** the page is rendered
- **WHEN** the highlights section is displayed
- **THEN** it SHALL show tiles titled "Easy to Use", "Awesome Design", and "Easy to Customize", each with a blurb

### Requirement: Caption slider

The system SHALL render a sky-gradient showcase band with a carousel of
feature slides, each with a photo, title, description, and "Read more" link.

#### Scenario: Showcase content

- **GIVEN** the page is rendered
- **WHEN** the showcase band is displayed
- **THEN** it SHALL show slides titled "Easy to Build" and "Easy to Use" with "Read more" links

### Requirement: Special features section

The system SHALL render a special features section with a heading and three
feature tiles.

#### Scenario: Special features content

- **GIVEN** the page is rendered
- **WHEN** the special features section is displayed
- **THEN** it SHALL contain a heading "Special Features"
- **AND** it SHALL show tiles titled "Creative Design", "Unlimited Features", and "Full Free Chat"

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and three plans,
each with features and a purchase button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Affordable Price"
- **AND** it SHALL show "Basic" at $20/month, "Standard" at $39/month, and "Unlimited" at $59/month
- **AND** each plan SHALL list disk space, subdomains, email accounts, webmail support, and 24/7 support, with a "Purchase" button

### Requirement: Team section

The system SHALL render a team section with a heading and four members.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show members "Jemy Sedonce", "Deborah Brown", "Harry Banks", and "Victoria Clark" with roles

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with quotes and controls.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show quotes attributed to "AR Rahman"

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user presses the next/previous arrows or a dot
- **THEN** the visible quote SHALL change accordingly

### Requirement: FAQ section

The system SHALL render an FAQ section with a heading and an accordion of
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three questions with expandable answers

### Requirement: Blog section

The system SHALL render a blog section with three article cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show three cards titled "Beautiful Place for your Great Journey"
- **AND** each card SHALL show an author and a date

### Requirement: Contact footer

The system SHALL render a contact footer with contact details, a contact
form, and a copyright line.

#### Scenario: Contact footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show "Contact with us", an address, telephone, and email details
- **AND** it SHALL show a contact form with a "Submit" button
- **AND** it SHALL show social links and a copyright line for "Colid"

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Colid app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the contact footer in the contentinfo landmark
- **AND** the document title SHALL be "Colid — Business Landing Template"
