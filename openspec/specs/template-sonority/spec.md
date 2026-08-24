# Template: Sonority (Music Streaming Landing)

## Purpose

Sonority is a single-page music streaming landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "MusicLab" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "MusicLab" — music streaming / app landing template
  (source: https://colorlib.com/wp/template/musiclab/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/musiclab/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (96KB) extracted).
  The TEMPLATES.md screenshot (`musiclab-colorlib-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Header (transparent sticky: Logo, nav links Home/
  Features/Pricing/Download/Blog/Contact, Sign In button) → Hero slider
  ("Open the world of music. It's all here." + subtitle + two CTA buttons +
  desktop app screenshot) → About 1 ("Listen to a personalized mix of tracks"
  - numbered list 1/2/3 with icons + image) → About 2 (section-bg, reversed
    layout: "We are tender heart charity foundation" + finder icons + image) →
    Features grid ("Get ready for seamless online music" + 4 cards: Offline
    mode / High quality audio / No ads / Unlimited skips) → Pricing ("Listen
    free or subscribe to MusicLab Premium" + 2 pricing cards: Free $0/mo and
  Premium $9.99/mo) → Testimonials ("Customers are loving MusicLab" +
    carousel of founder avatars + quotes + star ratings) → Footer (logo +
    description + social icons, Quick Links, Support, Navigation columns +
    copyright).
- **Design tokens extracted from `assets/css/style.css`:**
  - Font: **"Inter"** (sans-serif, weights 200–900).
  - Brand/accent **blue `#42B5F2`** (theme-color, price highlights, scroll-to-
    top).
  - Gradient button: `linear-gradient(to right, #ca42f2, #6a42f2, #4294f2,
#42b5f2, #7db9e8)` — purple-to-blue, used on `.btn_01` and `.btn_001`
    hover state.
  - Hero background: dark gradient `linear-gradient(to bottom, #161a1a,
rgba(38,41,41,0.99))`.
  - Headings: `#262929` (dark gray-black), body text: `#6D6D6D`.
  - Section backgrounds: `#F5F7F9` (section-bg), `#fff` (white-bg).
  - Pricing card: `border: 1px solid #DDE4E8`, `border-radius: 8px`,
    hover → `background: #262929`.
  - Footer: `background: #262929`, links `#97A7AF`, headings `#fff`.
  - Buttons: `border-radius: 30px`, `text-transform: uppercase`, gradient fill
    or transparent with border.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sonority-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied; testimonial avatars → picsum
  seeds.

Sonority lives in `apps/sonority` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header / Navbar

The system SHALL render a transparent sticky header with the site name
"Sonority", navigation links, and a "Sign In" button.

#### Scenario: Navbar content

- **GIVEN** the Sonority page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL display the logo text "Sonority"
- **AND** it SHALL show links to Home, Features, Pricing, Download, Blog,
  and Contact
- **AND** it SHALL show a "Sign In" button styled with the gradient outline

#### Scenario: Navbar is sticky on scroll

- **GIVEN** the page is scrolled past the hero
- **WHEN** the user scrolls down
- **THEN** the navbar SHALL remain fixed at the top with a dark background

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element

### Requirement: Hero section

The system SHALL render a full-width hero with a gradient dark background,
headline, subtitle, two CTA buttons, and a desktop app screenshot.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a subtitle "Intuitive. Powerful. Runs everywhere"
- **AND** a level-1 heading "Open the world of music. It's all here."
- **AND** two CTA buttons: "Download For Desktop" (gradient) and "Download
  For Mobile" (transparent with border)
- **AND** a desktop app screenshot image below the buttons

### Requirement: About section 1

The system SHALL render an about section with an image on the left and
numbered feature points on the right.

#### Scenario: About 1 content

- **GIVEN** the page is rendered
- **WHEN** the About 1 section is displayed
- **THEN** it SHALL show a heading "Listen to a personalized mix of tracks"
- **AND** three numbered items (1, 2, 3) each with an icon and descriptive text
- **AND** a placeholder image on the left

### Requirement: About section 2

The system SHALL render a second about section with reversed layout
(text on left, image on right) on a light gray background.

#### Scenario: About 2 content

- **GIVEN** the page is rendered
- **WHEN** the About 2 section is displayed
- **THEN** it SHALL show a heading about the platform's mission
- **AND** three feature points with finder/check icons and descriptive text
- **AND** a placeholder image on the right
- **AND** the section SHALL have a light gray background (`#F5F7F9`)

### Requirement: Features grid

The system SHALL render a 4-column features grid section with centered
heading and feature cards.

#### Scenario: Features grid content

- **GIVEN** the page is rendered
- **WHEN** the Features grid section is displayed
- **THEN** it SHALL show a heading "Get ready for seamless online music"
- **AND** a subheading paragraph
- **AND** four feature cards each with an icon image, title, and short
  description (Offline mode, High quality audio, No ads, Unlimited skips)

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and two pricing
cards (Free and Premium).

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the Pricing section is displayed
- **THEN** it SHALL show a heading "Listen free or subscribe to Premium"
- **AND** two pricing cards side by side
- **AND** the Free card SHALL show "$0.00 /month" with feature list
  (Online listening, Regular audio, With advertising, 30 skips per day)
  and a "Get Free" button
- **AND** the Premium card SHALL show "$9.99 /month" with feature list
  and a "Get Premium" button
- **AND** cards SHALL have rounded borders and hover effect (dark background)

#### Scenario: Pricing card hover

- **GIVEN** the pricing cards are displayed
- **WHEN** the user hovers over a pricing card
- **THEN** the card background SHALL transition to dark (`#262929`)
- **AND** text colors SHALL adapt for contrast

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with user photos, names,
titles, quotes, and star ratings.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the Testimonials section is displayed
- **THEN** it SHALL show a heading "Customers are loving Sonority"
- **AND** a carousel/slider of testimonial cards
- **AND** each card SHALL contain an avatar image, person name, title,
  quote text, and 5-star rating

### Requirement: Footer

The system SHALL render a dark footer with logo, description, social links,
and three link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the Sonority logo and a short description paragraph
- **AND** social media icon links (Facebook, LinkedIn, Instagram, YouTube)
- **AND** three link columns: Quick Links, Support, Navigation
- **AND** a copyright line with a link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Scroll-to-top button

The system SHALL render a fixed scroll-to-top button in the bottom-right
corner.

#### Scenario: Scroll-to-top visibility

- **GIVEN** the page is scrolled down
- **WHEN** the user scrolls past the fold
- **THEN** a round blue (#42B5F2) scroll-to-top button SHALL be visible
  in the bottom-right corner

## Verification checklist

- [ ] All sections render in correct order (header → hero → about1 →
      about2 → features → pricing → testimonials → footer)
- [ ] Hero gradient background matches `#161a1a` dark tone
- [ ] Buttons use the purple-to-blue gradient (`#ca42f2 → #42b5f2`)
- [ ] Pricing cards have `border-radius: 8px` and hover dark effect
- [ ] Footer background is `#262929`
- [ ] Font is Inter (loaded from Google Fonts)
- [ ] All images use seeded picsum placeholders
- [ ] Footer links to Component Dock
- [ ] Dark mode toggle works
- [ ] No ColorLib references in app code (provenance only in spec/PR)
- [ ] Tests pass at 100% coverage
- [ ] Build succeeds with no errors
