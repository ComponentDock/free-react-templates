# Template: Expanse (Design Agency Portfolio)

## Purpose

Recreation of ColorLib **Unfold** — a creative design agency / portfolio template
with dark theme, parallax hero, and split navigation.

- **Source slug**: `unfold`
- **Preview URL**: https://preview.colorlib.com/theme/unfold/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/unfold-free-template.jpeg
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#D63447` | Vibrant red — accents, portfolio hover overlays |
| Secondary accent | `#f64b3c` | Orange-red (used in gradient overlays) |
| Text primary | `#212529` | Dark body text |
| Text secondary | `#6c757d` | Gray subtext |
| Background | `#fff` | White page base |
| Background dark | `#191919` | Footer background, dark sections |
| Green accent | `#8cba51` | Minor accent (skills counters) |
| Font body | Arimo, sans-serif | Body text |
| Font display | Raleway, sans-serif | Headings and hero text |
| Font serif | Georgia, serif | Accent/editorial text |
| Hero heading | 5rem, weight 900, white | Full-width bold display heading |
| Hero subheading | 33px, white | Subtitle text |
| Button style | `.btn-outline-pill` | Pill-shaped outline buttons, white border on dark, dark border on light |
| Footer | `#191919` dark bg, white text | Fixed-position footer (relative on mobile) |
| Nav layout | Split (left links | logo center | right links) | Desktop: logo centered, links split both sides |
| Dark mode | `[data-bs-theme="dark"]` / `[data-bs-theme="light"]` | Theme toggle supported via icon-moon-o |

## Requirements (Gherkin)

### Navigation

```gherkin
Scenario: Split centered navigation
  Given the user loads the page
  Then a centered logo "Expanse." is displayed
  And the left side nav contains: Home, Portfolio, About
  And the right side nav contains: Services, Skills, Testimonial, Journal, Contact
  And a dark/light theme toggle icon is visible on desktop
  And a hamburger menu toggle is visible on mobile

Scenario: Mobile menu opens
  Given the user is on mobile viewport
  When the user clicks the hamburger toggle
  Then the mobile menu slides in from the right
  And all nav links are listed vertically
  And a close button (×) is visible
```

### Hero / Cover

```gherkin
Scenario: Fullscreen parallax hero
  Given the user loads the page
  Then a full-viewport hero section is displayed
  And the background is a dark parallax image
  And the heading reads "Expanse" in large bold white text
  And a subheading is displayed below the heading
  And a scroll-down mouse indicator is visible at the bottom center

Scenario: Hero scroll indicator
  Given the hero section is visible
  When the user clicks the scroll indicator
  Then the page smoothly scrolls to the portfolio section
```

### Portfolio

```gherkin
Scenario: Portfolio grid
  Given the user scrolls to the portfolio section
  Then the heading reads "Portfolio"
  And a grid of portfolio items is displayed
  And each item shows an image with a title overlay
  And items have a hover effect (red overlay with details)

Scenario: Portfolio filtering
  Given the portfolio section is visible
  Then filter tabs are displayed (e.g. All, Branding, Web, etc.)
  When the user clicks a filter tab
  Then only items matching that category are shown
```

### Client Logos

```gherkin
Scenario: Client logo carousel
  Given the user scrolls past the portfolio
  Then a row of client/partner logos is displayed
  And logos scroll or are statically arranged in a row
```

### About

```gherkin
Scenario: About section
  Given the user scrolls to the about section
  Then the heading reads "About"
  And a personal description paragraph is displayed
  And an image or visual element accompanies the text
```

### Services

```gherkin
Scenario: Services section
  Given the user scrolls to the services section
  Then the heading reads "Services"
  And a list of services is displayed
  And each service has an icon, title, and description
```

### Skills / Counters

```gherkin
Scenario: Skills with animated counters
  Given the user scrolls to the skills section
  Then the heading reads "Skills"
  And animated number counters are displayed (e.g. projects completed, happy clients)
  And the counters animate on scroll into view
```

### Testimonials

```gherkin
Scenario: Testimonial carousel
  Given the user scrolls to the testimonial section
  Then the heading reads "Testimonial"
  And a carousel of testimonials is displayed
  And each testimonial shows a quote, name, and role
  And navigation dots/arrows allow cycling through testimonials
```

### Journal / Blog

```gherkin
Scenario: Journal section
  Given the user scrolls to the journal section
  Then the heading reads "Journal"
  And 3 blog post cards are displayed in a row
  And each card shows an image, date, title, and excerpt
```

### Contact

```gherkin
Scenario: Contact form
  Given the user scrolls to the contact section
  Then the heading reads "Contact"
  And a contact form is displayed with fields: Name, Email, Subject, Message
  And a "Send" submit button is visible
```

### Footer

```gherkin
Scenario: Dark footer
  Given the user scrolls to the footer
  Then a dark (#191919) footer is displayed
  And it contains the text "Made with Component Dock" linking to https://www.componentdock.com/
  And social media icon links are present
```

### Theme Toggle

```gherkin
Scenario: Dark/light mode toggle
  Given the user clicks the moon/sun icon in the nav
  Then the page switches between dark and light themes
  And all text and background colors adjust accordingly
  And the toggle icon changes (moon ↔ sun)
```

## Verification checklist

- [ ] Spec matches section order: Nav → Hero → Portfolio → Client Logos → About → Services → Skills → Testimonials → Journal → Contact → Footer
- [ ] Brand color #D63447 used consistently (portfolio overlays, accents)
- [ ] Split nav layout: logo centered, links on both sides
- [ ] Dark theme default with light mode toggle
- [ ] Parallax hero with large bold heading
- [ ] Portfolio grid with hover overlay effects
- [ ] Animated skill counters
- [ ] Testimonial carousel
- [ ] Placeholder images via picsum.photos
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
