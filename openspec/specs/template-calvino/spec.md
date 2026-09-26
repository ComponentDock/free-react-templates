# Template: Calvino (Personal Portfolio)

## Purpose

Recreation of the ColorLib "Calvin" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript personal portfolio site.

- **Source:** [ColorLib Calvin](https://colorlib.com/wp/template/calvin/)
- **Preview:** https://preview.colorlib.com/theme/calvin/
- **New name:** `calvino` (app folder: `apps/calvino`, package: `@free-react-templates/calvino`)
- **Category:** Personal / Portfolio

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary brand color | `#FF8553` | Buttons, links, accents, browse-btn underline, back-to-top |
| Secondary accent | `#ec703f` | Gradient partner for primary (btn gradient) |
| Light tint bg | `#FFE7DE` | Very light orange tint, testimonials / subtle bg |
| Warm white bg | `#FFFBF9` | Near-white warm tint for sections |
| Off-white bg | `#f7f7f7` / `#f9f9ff` / `#fbf9ff` | Gallery, testimonial area backgrounds |
| Hero gradient | `#010a27` → `#0b34c9` | Dark navy to blue gradient for slider area |
| Heading color | `#000000` | All h1–h6 |
| Body text color | `#000000` | Paragraph text |
| Link color | `#635c5c` | Default anchor color |
| Body font | `DM Sans` (weights 300, 400, 500, 700) | Body text, paragraphs |
| Heading font | `Roboto Condensed` (weights 300, 400, 700) | All headings h1–h6 |
| Primary button radius | `25px` | `.btn` class |
| Border button radius | `30px` | `.border-btn` class |
| CTA button padding | `18px 44px` | `.boxed-btn` |
| Button gradient | `linear-gradient(to left, #FF8553, #ec703f, #FF8553)` | Primary CTA |
| Section padding | `120px` top/bottom | `.section-padding` |
| Footer section bg | `#000000` | Footer area background |

## Section Structure (from live preview DOM)

1. **Header** — Sticky transparent header with logo, nav links (Home, Work, Service, Blog, Contact), and "Let's Talk" border button
2. **Hero / Slider Area** — Dark navy-to-blue gradient background, left: circular employee/person image (327×327), right: headline "My name is Calvin. Digital Product Designer" + subtitle
3. **About Info Bar** — Full-width bar below hero: "Design For: Web & Mobile" (left), phone number + email (right)
4. **Services ("My Experties")** — 2×2 grid of service cards, each with SVG icon, title, description, and orange "browse" link
5. **Gallery ("My Works")** — 2×2 grid of gallery images with hover overlay showing category label; "More Work" border button below
6. **About Me** — Left: text with heading + two paragraphs; Right: skill progress bars (UI Design 60%, UX 89%, Illustration 95%)
7. **Brand Carousel** — Horizontal scrolling logo carousel with brand logos (owl carousel)
8. **Testimonials ("Client Testimonial")** — Centered quote, testimonial author with avatar image and name/title
9. **Blog ("Latest News")** — Horizontal blog card carousel with image, category tag, date/author, and article title
10. **Footer — "Want To Work" CTA** — Dark section with logo, text, "Let's Talk" button, "Download CV" button
11. **Footer — Bottom** — Copyright + nav links (Home, Work, Service, Blog, Contact)

## Gherkin Scenarios

### Header
```gherkin
Scenario: Header displays navigation and CTA
  Given the user visits the homepage
  Then the header shows a logo
  And navigation links "Home", "Work", "Service", "Blog", "Contact" are visible
  And a "Let's Talk" border button is visible in the header
```

### Hero Area
```gherkin
Scenario: Hero displays name and role
  Given the user visits the homepage
  Then a hero section with dark gradient background is visible
  And a circular portrait image is displayed
  And the headline "My name is Calvin. Digital Product Designer" is shown
  And a subtitle "Head of design at Calvino" is shown

Scenario: About info bar shows contact details
  Given the user is on the homepage
  Then an info bar below the hero shows "Design For: Web & Mobile"
  And a phone number is displayed
  And an email address is displayed
```

### Services
```gherkin
Scenario: Services section shows expertise cards
  Given the user scrolls to the services section
  Then the heading "My Experties" is displayed
  And four service cards are visible in a 2×2 grid
  And each card has an icon, title, description, and link

Scenario: Service cards have hover interaction
  Given the services section is visible
  When the user hovers over a service card
  Then the card responds with a visual hover effect
```

### Gallery
```gherkin
Scenario: Gallery shows project images with overlay
  Given the user scrolls to the gallery section
  Then the heading "My Works" is displayed
  And four gallery items are visible in a 2×2 grid
  And each item shows an overlay with category label on hover

Scenario: More Work button is visible
  Given the gallery section is visible
  Then a "More Work" border button is centered below the grid
```

### About Me
```gherkin
Scenario: About Me shows text and skill bars
  Given the user scrolls to the about section
  Then the heading "About Me" is displayed
  And descriptive text paragraphs are shown on the left
  And skill progress bars are shown on the right
  And skills include "User Interface Design", "User Experience", and "Illustration"
```

### Brand Carousel
```gherkin
Scenario: Brand logos scroll automatically
  Given the user scrolls past the about section
  Then a horizontal brand logo carousel is visible
  And multiple brand logos are displayed in a scrolling row
```

### Testimonials
```gherkin
Scenario: Testimonials show client quotes
  Given the user scrolls to the testimonial section
  Then the heading "Client Testimonial" is displayed
  And a testimonial quote is shown
  And the author name and title are displayed below the quote
  And the author has a small avatar image
```

### Blog
```gherkin
Scenario: Blog section shows latest posts
  Given the user scrolls to the blog section
  Then the heading "Latest News" is displayed
  And blog cards are shown in a horizontal scrollable layout
  And each card has an image, category tag, date, and article title
```

### Footer
```gherkin
Scenario: Footer has CTA and navigation
  Given the user scrolls to the footer
  Then a "Want To Work" CTA section with logo and text is visible
  And "Let's Talk" and "Download CV" buttons are shown
  And a bottom footer bar shows copyright text
  And footer navigation links are visible
  And a "Component Dock" link is present in the footer
```

## Verification Checklist

- [ ] Header: sticky, transparent, logo + nav + CTA button
- [ ] Hero: dark gradient bg, circular portrait, headline + subtitle
- [ ] Info bar: "Design For", phone, email displayed
- [ ] Services: 2×2 grid, icon + title + description + link per card
- [ ] Gallery: 2×2 grid with hover overlay, "More Work" button
- [ ] About Me: text left, 3 skill progress bars right
- [ ] Brand carousel: horizontal scrolling logos
- [ ] Testimonials: centered quote + author avatar + name/title
- [ ] Blog: horizontal card layout with image, tag, date, title
- [ ] Footer: CTA section + bottom copyright + nav + Component Dock link
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive design (mobile hamburger, stacked grids)
- [ ] Placeholder images via picsum.photos/seed/calvino-<n>
- [ ] Fonts: DM Sans (body) + Roboto Condensed (headings) via Google Fonts
