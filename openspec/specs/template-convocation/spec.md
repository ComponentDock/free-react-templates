# Template: Convocation (Conference / Event)

## Purpose

Recreation of ColorLib "Confe" — a conference/event landing page template.
- **Source slug:** `confe`
- **Preview URL:** https://preview.colorlib.com/theme/confe/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/confe-free-template.jpg
- **New name:** `convocation` (apps/convocation, @free-react-templates/convocation)
- **Deploy target:** https://convocation.free.componentdock.com
- **Category:** Conference / Event
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from live preview CSS at preview.colorlib.com/theme/confe/)

| Token | Value |
|-------|-------|
| Primary brand color | `#f23a2e` (red-orange) |
| Body text color | `rgba(0,0,0,0.5)` |
| Heading color | `#000` |
| Selection background | `#000` |
| Selection text | `#fff` |
| Button radius (pill) | `30px` |
| Button hover shadow | `0 5px 20px -7px rgba(0,0,0,0.9)` |
| Body font | `"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Display/decorative font | `"Amatic SC"` (Google Fonts, weights 400 + 700) |
| Section padding (mobile) | `3em 0` |
| Section padding (desktop) | `7em 0` |
| Navbar | Fixed position, transparent on hero, white background with shadow on scroll |
| Navbar link color (hero) | `rgba(255,255,255,0.6)` → `#fff` on hover |
| Navbar link color (scrolled) | `rgba(0,0,0,0.6)` → `#000` on hover |
| Dropdown background | `#000` |
| Dropdown link hover | `#f23a2e` |
| Footer overlay | `rgba(0,0,0,0.8)` on background image |
| Footer link color | `rgba(255,255,255,0.3)` → `#fff` on hover |
| Form focus border | `#f23a2e` |
| Image half-sections | 50/50 flex row, dark overlay `rgba(0,0,0,0.4)` |

## Section structure (from live preview DOM — 10 sections)

1. **Navbar** — Fixed position, logo "Convocation" (was "Confe."), nav links: Home, Speakers, Venue, Sponsors, About, Contact. Transparent over hero, transitions to white background on scroll with shadow. Mobile: hamburger icon triggers slide-in right menu (300px wide).
2. **Hero** — Full-width background image (city skyline) with dark overlay (`site-blocks-cover overlay`). Centered white text: headline "The Challenges of Business Innovation", date/location line "April 17-21, 2019 • Vancouver", red pill CTA "Get Your Ticket" (`btn btn-primary px-4 py-3 text-uppercase`), secondary text link "Learn More".
3. **About The Conference** — White background, left-aligned heading (uppercase), countdown timer placeholder, two body text paragraphs, red pill CTA "Get Your Ticket Now".
4. **Image Pair 1** — Two equal-width side-by-side background images with dark overlay (flex row, 50/50 split).
5. **Speakers** — Centered section heading "Speakers". 3-column responsive grid (col-md-6 col-lg-4). 6 speaker cards: thumbnail photo, name (first name in `<span>` for emphasis), title/company line.
6. **Image Pair 2** — Same as Image Pair 1, different placeholder images.
7. **Why Us** — Centered section heading. 3-column layout. Each column: icon (lucide-react), heading, description paragraph. Icons: chat/speech bubble, paper plane, heart. Items: "Our Mission", "MP3 with Transcript", "Good Reviews".
8. **Sponsors** — Dark background section. Centered card: heading "Your Company Here", descriptive paragraph, red pill CTA "Become a Sponsor".
9. **Conference Events** — Centered section heading. 3-column grid, 6 event/post cards. Each: image, title, date + author line, excerpt paragraph.
10. **Footer** — Dark overlay on background image (`rgba(0,0,0,0.8)`). 3 columns: About (text + Read More link), Quick Menu (two sub-lists of nav links), Social Icons (Facebook, Twitter, Instagram, Vimeo via lucide-react). Copyright line: replace Colorlib attribution with "Component Dock".

## Gherkin requirements

```gherkin
Feature: Convocation Conference Landing Page

  Background:
    Given the user opens the Convocation template at the root URL

  # --- Navbar ---
  Scenario: Navbar displays logo and navigation links
    Then the logo "Convocation" is visible in the top-left
    And the navigation links "Home", "Speakers", "Venue", "Sponsors", "About", "Contact" are visible

  Scenario: Navbar becomes solid on scroll
    When the user scrolls down past the hero
    Then the navbar background changes to white with a subtle shadow
    And the logo and link colors switch to dark

  Scenario: Mobile hamburger menu opens
    Given the viewport is narrower than 768px
    When the user clicks the hamburger menu icon
    Then a mobile slide-out menu appears from the right

  # --- Hero ---
  Scenario: Hero section displays with background image
    Then a full-width hero background image is visible
    And the heading "The Challenges of Business Innovation" is displayed in white
    And the date/location text "April 17-21, 2019 • Vancouver" is shown

  Scenario: Hero CTA buttons are visible
    Then the "Get Your Ticket" button is visible with a red pill shape
    And the "Learn More" text link is visible beside it

  # --- About ---
  Scenario: About section displays conference description
    Then the heading "About The Conference" is visible
    And a countdown timer placeholder is displayed
    And two descriptive paragraphs are shown
    And the "Get Your Ticket Now" button is visible

  # --- Image Pairs ---
  Scenario: Two side-by-side image sections are displayed
    Then two image pair sections are shown
    And each pair has two equal-width background images with dark overlay

  # --- Speakers ---
  Scenario: Speaker cards are displayed in a grid
    Then 6 speaker cards are shown in a 3-column responsive layout
    And each card has a photo, full name, and title/company

  # --- Why Us ---
  Scenario: Feature highlights are shown in three columns
    Then 3 feature items are displayed in a row
    And each item has an icon, heading, and description text
    And the items are "Our Mission", "MP3 with Transcript", "Good Reviews"

  # --- Sponsors ---
  Scenario: Sponsor section displays with dark background
    Then a sponsor card with logo placeholder text "Your Company Here" is visible
    And the "Become a Sponsor" pill button is shown

  # --- Events ---
  Scenario: Conference event cards are displayed in a grid
    Then 6 event cards are shown in a 3-column layout
    And each card has an image, title, date with author, and excerpt

  # --- Footer ---
  Scenario: Footer shows contact info, quick links, and social icons
    Then the footer has an About column with description and Read More link
    And a Quick Menu column with navigation links
    And social media icon links are displayed
    And a copyright line with "Component Dock" attribution is visible
```

## Verification checklist

- [ ] All 10 sections match the original section order 1:1
- [ ] Brand color `#f23a2e` used for primary buttons and form focus borders
- [ ] Fonts: Work Sans for body, Amatic SC for decorative headings (loaded via Google Fonts)
- [ ] Pill-shaped buttons (border-radius: 30px) on all CTA buttons
- [ ] Navbar: fixed position, transparent → white on scroll with shadow transition
- [ ] Hero: full-width background image, dark overlay, centered white text
- [ ] About section: countdown timer placeholder, body copy, CTA
- [ ] Two image-pair sections with 50/50 flex split and dark overlay
- [ ] Speakers grid: 3 columns on desktop, 6 cards with photo + name + role
- [ ] Why Us: 3 feature columns with lucide-react icons
- [ ] Sponsors: dark section, centered card with pill CTA
- [ ] Events grid: 3 columns on desktop, 6 event cards
- [ ] Footer: dark overlay background, 3 columns, social icons, Component Dock attribution
- [ ] No ColorLib references anywhere in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos (deterministic seeds)
