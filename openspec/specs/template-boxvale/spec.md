# Template: Boxvale (Creative Digital Agency)

## Purpose

Recreation of ColorLib's **Boxus** — a creative digital agency one-page template.
- **Source slug:** `boxus`
- **Source URL:** https://colorlib.com/wp/template/boxus/
- **Preview URL:** https://preview.colorlib.com/theme/boxus/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Section order (from live preview DOM)

1. **Navbar** — sticky top navigation with logo + menu links (Home, Services, Portfolio, About, News, Video, Skills, Contact)
2. **Hero** — full-width intro section with large centered headline, subtitle, and CTA
3. **Services** — numbered section (01) with icon + title + description cards displayed in a slider/grid
4. **Portfolio** — numbered section with a masonry-style grid of portfolio items, each with hover overlay showing title and category
5. **About** — numbered section with team member photo carousel + bio text
6. **News** — numbered section with blog/news cards (title, date, excerpt)
7. **Video** — full-width fullscreen video background/parallax section with play overlay
8. **Skills** — numbered section with animated progress bars for skills (e.g. Branding, Web Design, HTML/CSS, Graphic Design)
9. **Contact** — numbered section with contact form (name, email, subject, message fields + submit button)
10. **Footer** — copyright line + social media icon links

## Design tokens (from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand color (primary) | `#221C5A` | Deep indigo/navy — section backgrounds, footer, navbar |
| Accent pink | `#EE87A4` | Hero title span, hover states |
| Accent green | `#32DB8A` | Service titles, progress bars, CTA button |
| Accent yellow | `rgb(255,186,66)` / `#FFBA42` | Timeline markers, decorative accents |
| Accent red-pink | `#E74C78` | Newsletter/CTA button backgrounds |
| Body font | Roboto (300, 400, 700, 900) | Body text, descriptions |
| Heading font | Montserrat (400, 700) | Section titles, navigation, service headings |
| Serif accent | PT Serif (400) | Hero subtitle, quote text |
| Text color (dark) | `#23214c` | Dark body text on white backgrounds |
| Background | `#fff` | Default page background |
| Section numbers | large muted numerals | "01", "02", etc. before section titles |
| Border radius | 0 (sharp edges) | Clean rectangular buttons and cards |
| Buttons | Green `#32DB8A` with white text | Rounded rectangular, no border-radius |

## Gherkin scenarios

### Navbar

```gherkin
Feature: Navbar

  Scenario: Sticky navigation bar
    Given the user loads the page
    Then a sticky navigation bar is visible at the top
    And it contains links for Home, Services, Portfolio, About, News, Video, Skills, Contact
    And clicking each link scrolls smoothly to the corresponding section

  Scenario: Mobile hamburger menu
    Given the user resizes viewport below 768px
    Then a hamburger menu icon appears
    And clicking it toggles the mobile menu open/closed
```

### Hero

```gherkin
Feature: Hero Section

  Scenario: Display hero content
    Given the user is on the home page
    Then a large headline "We Craft Awesome Web And Graphic Design Solutions" is visible
    And a subtitle text is displayed below the headline
    And the section background is deep indigo (#221C5A)
```

### Services

```gherkin
Feature: Services Section

  Scenario: Display services grid
    Given the user scrolls to the Services section
    Then section number "01" is displayed
    And the section title "Services" is visible
    And at least 4 service cards are shown
    And each card has an icon, a title, and a description

  Scenario: Service items have accent styling
    Given the user views a service card
    Then the service title is green (#32DB8A)
    And the icon is displayed above the title
```

### Portfolio

```gherkin
Feature: Portfolio Section

  Scenario: Display portfolio grid
    Given the user scrolls to the Portfolio section
    Then a grid of portfolio thumbnails is visible
    And each item shows a category label and title on hover
    And the grid uses a masonry/column layout

  Scenario: Portfolio hover interaction
    Given the user hovers over a portfolio item
    Then an overlay appears with the project title and category
    And the overlay has a colored background matching the brand palette
```

### About

```gherkin
Feature: About Section

  Scenario: Display team carousel
    Given the user scrolls to the About section
    Then section number is displayed
    And the title "About" is visible
    And a team member image carousel is shown
    And navigation arrows allow cycling through team members
```

### News

```gherkin
Feature: News Section

  Scenario: Display news cards
    Given the user scrolls to the News section
    Then blog post cards are displayed with title, date, and excerpt
    And a text slider navigation allows scrolling through news items
```

### Video

```gherkin
Feature: Video Section

  Scenario: Display fullscreen video area
    Given the user scrolls to the Video section
    Then a full-width dark section with a video background or poster image is shown
    And a play button overlay is centered on the section
```

### Skills

```gherkin
Feature: Skills Section

  Scenario: Display skill progress bars
    Given the user scrolls to the Skills section
    Then section number "06" is displayed
    And at least 4 skill bars are shown (e.g. Branding, Web Design, HTML/CSS, Graphic Design)
    And each bar shows a percentage and animates on scroll into view
    And the filled portion uses green (#32DB8A)
```

### Contact

```gherkin
Feature: Contact Section

  Scenario: Display contact form
    Given the user scrolls to the Contact section
    Then section number "07" is displayed
    And a form with Name, Email, Subject, and Message fields is shown
    And a Submit button is visible with green (#32DB8A) background

  Scenario: Form validation
    Given the user clicks Submit with empty required fields
    Then validation error messages appear for each empty field
    And the form does not submit
```

### Footer

```gherkin
Feature: Footer

  Scenario: Display footer content
    Given the user scrolls to the bottom of the page
    Then a copyright line is displayed
    And social media icon links are shown
    And a link to Component Dock (https://www.componentdock.com/) is present
    And the footer background is deep indigo (#221C5A)
```

## Verification checklist

- [ ] Section order matches: Navbar → Hero → Services → Portfolio → About → News → Video → Skills → Contact → Footer
- [ ] Brand colors match: #221C5A (primary), #EE87A4 (pink), #32DB8A (green), #FFBA42 (yellow), #E74C78 (red-pink)
- [ ] Font families: Roboto (body), Montserrat (headings), PT Serif (accent)
- [ ] Section numbers (01–07) before each content section title
- [ ] Portfolio grid with hover overlays
- [ ] Skills section with animated progress bars
- [ ] Contact form with validation
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Icons via lucide-react
- [ ] Responsive layout (mobile hamburger menu, stacked columns)
