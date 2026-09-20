# Template: Convene (Conference / Event)

## Purpose

Recreation of ColorLib **Confe** — a conference/event landing page template.

- **ColorLib source:** https://colorlib.com/wp/template/confe/
- **Live preview:** https://preview.colorlib.com/theme/confe/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/confe-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `convene` (never reuse the source name "confe")

## Design Tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand / Primary | `#f23a2e` | Red — buttons, accents, links |
| Text | `#000000` | Body text |
| Background (light) | `#ffffff` / `#f8f9fa` | White sections, light-gray alternating |
| Font — Body | `"Work Sans"` | sans-serif fallback stack |
| Font — Display | `"Amatic SC"` | Hand-drawn display font (headings/hero) |
| Button radius (pill) | Full rounding (`border-radius: 50px`) | `.btn.pill` variant |
| Button radius (default) | Default Bootstrap `0.25rem` | `.btn-primary` standard |
| Section backgrounds | Solid white / light gray; hero + footer use background images with dark overlay | `site-blocks-cover overlay` pattern |

## Section Structure (in order)

1. **Navbar** — Logo "Confe." left, nav links right (Home, About, Speakers, Sponsors, Contact). Sticky, white background, mobile hamburger menu.
2. **Hero** — Full-width background image (`hero_1.jpg`), dark overlay, centered text: heading "The Challenges of Business Innovation", subtext "April 17-21, 2019 • Vancouver", CTA buttons ("Get Your Ticket" primary + "Learn More" text).
3. **About The Conference** — Centered heading, countdown timer ("Conference Begins In"), description paragraph, CTA button "Get Your Ticket Now".
4. **Image Gallery (two columns)** — Two side-by-side full-height images (`img_1.jpg`, `img_2.jpg`) using flex layout.
5. **Speakers** — Centered heading "Speakers", 3-column grid of 6 speaker cards. Each card: portrait image, name, role/tagline. Cards have thumbnail image + text below.
6. **Image Gallery (two columns)** — Another pair of side-by-side images (`img_3.jpg`, `img_4.jpg`).
7. **Why Us?** — Centered heading "Why Us?", 3 feature cards in a row. Each card: icon (speaker/chat/paper-plane flaticon), title ("Our Mission" / "MP3 with Transcript" / "Good Reviews"), description text. Light gray background.
8. **Sponsors** — Centered heading "Sponsors", grid of sponsor logos (grayed out), CTA button "Become a Sponsor".
9. **Conference Events** — Centered heading "Conference Events", 3-column grid of event cards. Each card: event image, title, description text. Block-15 styled section.
10. **Footer** — Background image (`hero_1.jpg`) with dark overlay. Two columns: "About" (short blurb) + "Quick Menu" (nav links: Home, About, Speakers, Sponsors, Contact). Social icons row at bottom. Component Dock attribution.

## Gherkin Requirements

```gherkin
Feature: Convene conference template

  Background:
    Given the template is loaded at the root URL

  Scenario: Navbar displays correctly
    Then the logo "Confe" is visible
    And navigation links "Home", "About", "Speakers", "Sponsors", "Contact" are present
    And the navbar is sticky on scroll

  Scenario: Hero section renders
    Then a full-width hero image with dark overlay is displayed
    And the heading "The Challenges of Business Innovation" is visible
    And the date/location text is visible
    And a primary CTA button "Get Your Ticket" is present
    And a secondary text link "Learn More" is present

  Scenario: About section displays countdown
    Then the heading "About The Conference" is visible
    And a countdown timer is rendered
    And a description paragraph is present
    And a CTA button "Get Your Ticket Now" is present

  Scenario: Image gallery shows two side-by-side images
    Then two full-height images are displayed side by side

  Scenario: Speakers section lists 6 speakers
    Then the heading "Speakers" is visible
    And 6 speaker cards are displayed in a grid
    And each speaker card shows a portrait, name, and role

  Scenario: Why Us section shows 3 features
    Then the heading "Why Us?" is visible
    And 3 feature cards are displayed
    And each feature card has an icon, title, and description

  Scenario: Sponsors section displays sponsor logos
    Then the heading "Sponsors" is visible
    And sponsor logos are displayed in a grid
    And a CTA button "Become a Sponsor" is present

  Scenario: Conference Events section shows event cards
    Then the heading "Conference Events" is visible
    And event cards are displayed in a grid
    And each event card has an image, title, and description

  Scenario: Footer renders with background
    Then the footer has a background image with overlay
    And an "About" column with description is present
    And a "Quick Menu" column with navigation links is present
    And social icons are displayed
    And a Component Dock attribution link is present
```

## Verification Checklist

- [ ] Section order matches original (Hero → About → Gallery → Speakers → Gallery → Why Us → Sponsors → Events → Footer)
- [ ] Brand color `#f23a2e` used for primary buttons and accents
- [ ] Body font: Work Sans; Display font: Amatic SC (via Google Fonts)
- [ ] Hero uses full-width background image with dark overlay
- [ ] Speaker cards: 3-column grid, 6 cards, image + name + role
- [ ] Why Us: 3 feature cards with icons (lucide-react equivalents)
- [ ] Sponsors: logo grid with grayscale treatment
- [ ] Events: 3-column card grid with images
- [ ] Footer: background image + overlay, two columns, social icons
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] No shared files modified (apps/, packages/ui untouched except as needed)
- [ ] `public/CNAME` contains `convene.free.componentdock.com`
- [ ] `package.json` homepage set to `https://convene.free.componentdock.com`
- [ ] Tests written first (TDD), 100% coverage
