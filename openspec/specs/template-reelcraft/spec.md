# Template: ReelCraft (Video Production / Portfolio)

## Purpose

Recreation of the ColorLib **Videograph** template — a dark, cinematic
video production / videographer portfolio site.

- **Source:** https://colorlib.com/wp/template/videograph/
- **Preview:** https://preview.colorlib.com/theme/videograph/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/videograph-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and HTML structure.

### Brand Color

| Token        | Value     | Usage                                    |
| ------------ | --------- | ---------------------------------------- |
| `brand`      | `#00bfe7` | Primary buttons, active pagination dots, accent highlights |

### Dark Backgrounds

| Token              | Value     | Usage                          |
| ------------------ | --------- | ------------------------------ |
| `dark-surface`     | `#100028` | CTA / call-to-action section   |
| `dark-footer`      | `#0a0119` | Footer background              |
| `dark-overlay`     | `rgba(0,0,0,0.9)` | Hero/section overlays |

### Fonts

| Role          | Family           | Weights    | Notes                        |
| ------------- | ---------------- | ---------- | ---------------------------- |
| Heading / Button | `Play`        | 400, 700   | Distinctive condensed look   |
| Body / UI     | `Josefin Sans`   | 300–700    | Clean geometric sans-serif   |

### Button (`.primary-btn`)

- Font: Play, 15px, bold (700)
- Padding: 14px 32px 12px
- Background: transparent → hover fills brand `#00bfe7`
- Border: subtle white border
- Border-radius: none (sharp rectangular)

### Section Backgrounds

| Section  | Background                          |
| -------- | ----------------------------------- |
| Header   | Transparent (overlay on hero image) |
| Hero     | Background image + dark overlay     |
| Services | White / light (`.spad` spacing)     |
| Work     | White / light                       |
| Counter  | White / light                       |
| Team     | Background image + dark overlay     |
| Latest   | White / light (`.spad` spacing)     |
| CTA      | Background image + `#100028` overlay|
| Footer   | `#0a0119` solid                     |

## Gherkin Requirements

### Feature: Header

```gherkin
Scenario: Transparent header overlay
  Given the page loads
  Then a transparent header is positioned absolute over the hero
  And the header contains a logo on the left
  And the header contains navigation links (Home, About, Portfolio, Services, Pages, Contact)
  And the header contains social media icon links (Facebook, X/Twitter, Dribbble, Instagram, YouTube)
  And the nav has a dropdown menu under "Pages"

Scenario: Sticky header on scroll
  Given the user scrolls past the hero section
  Then the header gains a dark/semi-transparent background for readability
```

### Feature: Hero

```gherkin
Scenario: Hero slider displays
  Given the page loads
  Then a full-width hero slider (Swiper) is displayed
  And each slide has a dark background image
  And each slide shows a subtitle ("For website and video editing")
  And each slide shows a heading ("Videographer's Portfolio")
  And each slide shows a CTA button ("See more about us")
  And pagination dots are visible at the bottom

Scenario: Hero text animates on slide change
  Given the slider transitions to a new slide
  Then the text elements fade/slide in with animation
```

### Feature: Services

```gherkin
Scenario: Services section layout
  Given the user views the Services section
  Then a left column shows the section title ("What We do?") with description text and "View all services" button
  And a right column shows 4 service items in a 2x2 grid
  And each service item has an icon, title, and description paragraph

Scenario: Service items content
  Given the Services section renders
  Then the items are: Motion graphics, Scriptwriting and editing, Video distribution, Video hosting
```

### Feature: Work Gallery

```gherkin
Scenario: Work gallery grid
  Given the user views the Work section
  Then a masonry-style grid of portfolio items is displayed
  And items vary in size (wide, large, small)
  And each item has a background image
  And each item has a play button icon overlay
  And hovering an item reveals a title overlay

Scenario: Work gallery interactivity
  Given the user hovers a gallery item
  Then a semi-transparent overlay appears with the project title
```

### Feature: Counter Stats

```gherkin
Scenario: Counter section displays stats
  Given the user views the Counter section
  Then 4 stat items are displayed in a row
  And each stat has an icon, a number, and a label
  And the stats are: Completed Projects (230), Happy clients (1068), Perspective clients (230), Completed Projects (230)
```

### Feature: Team

```gherkin
Scenario: Team section layout
  Given the user views the Team section
  Then a background image fills the section
  And a centered section title ("OUR Team") with subtitle ("Nice to meet") is shown
  And 4 team member cards are displayed in a row
  And each card has a background image, name, role, and social icon links

Scenario: Team member card hover
  Given the user hovers a team member card
  Then the card reveals the member's name, role, and social media links
```

### Feature: Latest Blog

```gherkin
Scenario: Blog slider
  Given the user views the Latest Blog section
  Then a centered section title ("Blog Update") with subtitle ("Our Blog") is shown
  And a horizontal slider of blog post cards is displayed
  And each card shows a title, date, comment count, excerpt, and "Read more" link

Scenario: Blog card content
  Given a blog card renders
  Then it displays the post title, publication date, comment count, a short excerpt, and a "Read more" arrow link
```

### Feature: Call to Action

```gherkin
Scenario: CTA section
  Given the user views the CTA section
  Then a dark background image is displayed
  And a large heading text is shown ("Fresh Ideas, Fresh Moments Giving Wings to your Stories.")
  And a subtext line is shown ("INC5000, Best places to work 2031")
  And a CTA link/button is shown ("Start your stories")
```

### Feature: Footer

```gherkin
Scenario: Footer layout
  Given the user views the Footer
  Then the footer has a top row with logo on the left and social icons on the right
  And the footer has an options row with 4 columns: About us, Who we are, Our work, Newsletter
  And the About us column has description text and a "Read more" link
  And the Who we are column has links: Team, Careers, Contact us, Locations
  And the Our work column has links: Feature, Latest, Browse Archive, Video for web
  And the Newsletter column has description text, an email input, and a submit button

Scenario: Footer copyright
  Given the user views the footer bottom
  Then a copyright line is displayed with "All rights reserved" and "Component Dock" link
```

## Verification Checklist

- [ ] Header: transparent overlay with logo, nav links, social icons
- [ ] Hero: full-width Swiper slider with background images, subtitle, heading, CTA
- [ ] Services: left title column + 4 items in 2x2 grid
- [ ] Work Gallery: masonry grid with play buttons, hover overlays
- [ ] Counter: 4 stat items in a row
- [ ] Team: background image, 4 team cards with hover reveals
- [ ] Blog: slider with blog post cards
- [ ] CTA: dark background, headline, subtext, CTA link
- [ ] Footer: logo + social, 4-column options, copyright with Component Dock link
- [ ] Design tokens: brand `#00bfe7`, Play + Josefin Sans fonts, dark backgrounds `#100028` / `#0a0119`
- [ ] Responsive: all sections adapt to mobile/tablet
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via `https://picsum.photos/seed/reelcraft-<n>/<w>/<h>`
- [ ] Icons from `lucide-react` (replacing Font Awesome)
- [ ] Footer links to `https://www.componentdock.com/`
