# Template: Keepsake (Personal Portfolio)

## Purpose

Recreation of ColorLib **Schmidt** — a personal portfolio / freelancer template
for a UI/UX designer.

- **Source slug**: `schmidt`
- **Preview URL**: https://preview.colorlib.com/theme/schmidt/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/schmidt-free-template.jpg
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#d5c455` | Muted gold/yellow — hero overlay, accents, primary CTA hover |
| Text primary | `#212529` | Dark body text |
| Text secondary | `#6c757d` | Gray subtext |
| Background | `#fff` | White page base |
| Background alt | `#f8f8f8` | Light gray alternate sections |
| Font | Poppins (300, 400, 500, 600) | Google Fonts via `<link>` |
| Button radius | `0.25rem` (4px) | Rounded pill shape via `.btn.rounded` |
| Button primary bg | `#d5c455` | Brand gold — "More About Me" CTA |
| Button white bg | `#fff` | White outline/solid — "Hire Me" CTA |
| Hero overlay | `#d5c455` at 100% | Right 50% of hero, solid color overlay on image |
| Section pattern | White → Gray → White | Alternating backgrounds |

## Requirements (Gherkin)

### Navbar

```gherkin
Scenario: Sticky top navigation bar
  Given the user loads the page
  Then a fixed/sticky top navbar is visible
  And the navbar brand text reads "Keeps."
  And the navbar contains links: Home, About, Services, Experiences, Works, Blog, Contact
  And the navbar has a hamburger menu on mobile (collapses to toggler)

Scenario: Navbar brand click scrolls to top
  Given the user is scrolled down
  When the user clicks the navbar brand
  Then the page scrolls to the top
```

### Hero

```gherkin
Scenario: Fullscreen hero section with split layout
  Given the user loads the page
  Then a full-viewport-height hero section is displayed
  And the left half contains a background image (portrait photo)
  And the right half has a solid #d5c455 gold overlay
  And the hero text reads "UI/UX Designer & Developer" as subheading
  And the hero heading reads "I'm <Name>"
  And two CTA buttons are visible: "More About Me" (primary/gold) and "Hire Me" (white)

Scenario: Hero buttons are interactive
  Given the hero section is visible
  When the user clicks "More About Me"
  Then the user is navigated to the about section
  When the user clicks "Hire Me"
  Then the user is navigated to the contact section
```

### About Section

```gherkin
Scenario: About section with personal description
  Given the user scrolls to the about section
  Then the section heading reads "About Me"
  And a brief personal description is displayed
  And personal stats or details are shown (e.g. name, age, location)
```

### Services Section

```gherkin
Scenario: Services grid with icon cards
  Given the user scrolls to the services section
  Then the section heading reads "My Services"
  And 4 service cards are displayed in a 2-column grid
  And each card has an icon, title, and description
```

### Experience Section

```gherkin
Scenario: Experience / timeline section
  Given the user scrolls to the experiences section
  Then the section heading reads "My Experiences"
  And a vertical timeline of work experiences is displayed
  And each entry has a title, company, date range, and description
```

### Works / Portfolio Section

```gherkin
Scenario: Portfolio grid with image thumbnails
  Given the user scrolls to the works section
  Then the section heading reads "My Works"
  And a grid of portfolio project thumbnails is displayed
  And each item shows an image with a title overlay
```

### Blog Section

```gherkin
Scenario: Blog section with post cards
  Given the user scrolls to the blog section
  Then the section heading reads "Recent Blog"
  And 3 blog post cards are displayed in a row
  And each card shows an image, date, title, and excerpt
```

### Contact Section

```gherkin
Scenario: Contact form
  Given the user scrolls to the contact section
  Then a contact form is displayed with fields: Name, Email, Subject, Message
  And a "Send Message" submit button is visible
```

### Footer

```gherkin
Scenario: Footer with branding
  Given the user scrolls to the footer
  Then a dark footer is displayed
  And it contains the text "Made with Component Dock" linking to https://www.componentdock.com/
  And social media icon links are present
```

## Verification checklist

- [ ] Spec matches section order from preview: Navbar → Hero → About → Services → Experiences → Works → Blog → Contact → Footer
- [ ] Brand color #d5c455 used consistently (CTAs, overlays, accents)
- [ ] Poppins font loaded from Google Fonts
- [ ] Hero split layout: image left, gold overlay right
- [ ] All nav links present (Home, About, Services, Experiences, Works, Blog, Contact)
- [ ] Responsive hamburger menu on mobile
- [ ] Placeholder images via picsum.photos
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
