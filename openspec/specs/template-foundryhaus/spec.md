# Template: FoundryHaus (Architecture / Design Studio)

## Purpose

Recreation of ColorLib "Staging" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** ColorLib "Staging" — https://colorlib.com/wp/template/staging/
- **Preview:** https://preview.colorlib.com/theme/staging/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/staging-free-template.jpg
- **New name:** `foundryhaus` (app folder: `apps/foundryhaus`, package: `@free-react-templates/foundryhaus`)
- **Surge target:** `foundryhaus.free.componentdock.com`

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| `--brand` | `#dfa667` | Warm gold/amber — section accents, button fills, newsletter submit |
| `--text` | `#111111` | Near-black for headings and body |
| `--text-body` | `#707070` | Medium gray for paragraph text |
| `--text-muted` | `#b7b7b7` | Light gray for labels, placeholders, logo carousel |
| `--border` | `#c4c4c4` | Light border for normal-btn variant |
| `--white` | `#ffffff` | Card backgrounds, testimonial text, footer headings |
| `--font-heading` | `"Aldrich", sans-serif` | Used for h1-h6 |
| `--font-body` | `"Poppins", sans-serif` | Used for body text, paragraphs, nav |
| Button radius | `4px` | Corner bracket decoration on primary-btn; hover fills with 4px radius |
| Card shadow | `0 15px 60px rgba(67,69,70,0.1)` | Blog cards |
| Client avatar | `border-radius: 50%` | Testimonial client photos |
| Section padding | `100px` top/bottom (`.spad`) | Consistent vertical rhythm |
| Footer | Image background, dark overlay | White text throughout |

## Design notes (from preview DOM + CSS analysis)

- **Header:** Absolute positioned over hero, 3-column layout: logo (left), nav (center), phone widget (right). Mobile: off-canvas menu with logo + phone.
- **Hero:** Full-width image slider (Owl Carousel), text overlay with heading + two CTAs (primary-btn "See Project" + more_btn "Discover more") + social icons row.
- **About:** 2-column: left text (section-title span "who are we" + h2 + two paragraphs + "Learn More" normal-btn), right image with inner frame.
- **Projects:** Full-width slider (Owl Carousel), 4-column cards with hover overlay showing category + title.
- **Services:** 4-column grid of service cards (icon image + h4 title + paragraph). Below: 4 counters (Projects Completed 85, Happy Clients 127, Awards Received 36, Cups of Coffee 74) on dark background.
- **Testimonials:** Image background section, carousel with quote text, below: client avatar carousel (centered active slide, circular photos, name + title).
- **Logo carousel:** Row of partner/client logos (grayscale, light opacity).
- **Team:** 3-column cards with background image, overlay text (name, role), short bio, social icons.
- **Call to Action:** Full-width image background section with centered text + "Contact Us" primary-btn.
- **Blog/Latest:** 3-column cards with shadow, image top, text below (category span + h4 title + "Read more" link). "View All" button aligned right.
- **Footer:** Image background, dark overlay. Top row: "Ready To Work With Us?" heading + newsletter form (input + #dfa667 submit button). Below: 4-column layout (about/logo/address/social, Company links, Services links, etc.).

## Gherkin requirements

```gherkin
Feature: FoundryHaus — Architecture/Design Studio Template

  Background:
    Given the user opens the FoundryHaus homepage

  # --- Header ---
  Scenario: Header displays logo, navigation, and contact widget
    Then a logo is visible in the header left
    And the navigation contains "Home", "Projects", "About", "Blog", "Contact"
    And a phone contact widget is visible on the right
    And the header overlays the hero section (absolute positioning)

  Scenario: Mobile hamburger menu opens off-canvas panel
    Given the viewport is mobile width
    When the user clicks the hamburger icon
    Then an off-canvas menu slides in from the right
    And it contains the logo, navigation links, and phone number

  # --- Hero ---
  Scenario: Hero section shows a full-width image slider
    Then a full-width hero image is displayed
    And a heading "Quality is not only our standard." is visible
    And a "See Project" primary button is present
    And a "Discover more" secondary link is present
    And social media icon links (Facebook, Twitter, Instagram, LinkedIn) are shown

  # --- About ---
  Scenario: About section displays text and image side by side
    Then a section label "who are we" is visible
    And a heading "We propose and discuss design rules" is shown
    And two paragraphs describe the company
    And a "Learn More" button is present
    And an about image is displayed on the right column

  # --- Projects ---
  Scenario: Projects section shows a slider of project cards
    Then a section label "Our works" is visible
    And a heading "Latest projects" is shown
    And at least 4 project cards are visible in a horizontal slider
    And each card shows a category label and project title on hover

  # --- Services ---
  Scenario: Services section displays 4 service items
    Then a section label "Our specialization" is visible
    And a heading "What we do" is shown
    And 4 service cards are displayed in a grid
    And each card has an icon, title, and description paragraph

  Scenario: Counter stats appear below services
    Then 4 counter items are shown: "85 Projects Completed", "127 Happy Clients", "36 Awards Received", "74 Cups Of Coffee"
    And the counters are on a distinct background area

  # --- Testimonials ---
  Scenario: Testimonials section shows a carousel of quotes
    Then a section label "Testimonials" is visible
    And a heading "What your clients say" is shown
    And at least 3 testimonial quote items exist in a carousel
    And below: a client avatar carousel with circular photos, names, and titles

  # --- Logo Carousel ---
  Scenario: Logo carousel shows partner logos
    Then a row of partner/client logos is displayed in a carousel
    And the logos appear in a muted/grayscale style

  # --- Team ---
  Scenario: Team section shows 3 team member cards
    Then a section label "Our Team" is visible
    And a heading "Meet our team" is shown
    And 3 team cards are displayed, each with a background photo, name, role, bio, and social links
    And a "View All" button is present

  # --- Call to Action ---
  Scenario: CTA section has a background image with centered text
    Then a section label "Why choose us?" is visible
    And a heading about delivering outstanding results is shown
    And a "Contact Us" primary button is present

  # --- Blog ---
  Scenario: Blog section shows 3 latest posts
    Then a section label "Latest News" is visible
    And a heading "From our blog" is shown
    And 3 blog cards are displayed with an image, category, title, and "Read more" link
    And a "View All" button is aligned to the right

  # --- Footer ---
  Scenario: Footer has newsletter form and link columns
    Then a heading "Ready To Work With Us?" is visible
    And a newsletter form with email input and submit button is present
    And 4 columns of footer content are shown: about/address, Company links, Services links, additional links
    And social media icon links are present
    And a "Component Dock" attribution link is in the footer

  # --- Accessibility ---
  Scenario: All interactive elements are keyboard accessible
    Given the user navigates with keyboard only
    When they press Tab through the page
    Then all navigation links, buttons, and form inputs receive visible focus
    And aria-labels are present on icon-only buttons
```

## Verification checklist

- [ ] Section order matches original: Header → Hero → About → Projects → Services → Counters → Testimonials → Logo Carousel → Team → CTA → Blog → Footer
- [ ] Brand color `#dfa667` is used for accent spans, button fills, newsletter submit
- [ ] Heading font "Aldrich" loaded via Google Fonts link in `index.html`
- [ ] Body font "Poppins" loaded via Google Fonts link in `index.html`
- [ ] Primary button has corner bracket decoration (before/after pseudo-elements) — implemented as CSS or Tailwind
- [ ] Hero is full-width image with text overlay
- [ ] All images use `https://picsum.photos/seed/foundryhaus-<n>/<w>/<h>` placeholders
- [ ] No ColorLib references anywhere in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `npm run spec:validate` passes
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run build` succeeds
- [ ] `public/CNAME` contains `foundryhaus.free.componentdock.com`
- [ ] `homepage` in `package.json` is `https://foundryhaus.free.componentdock.com`
