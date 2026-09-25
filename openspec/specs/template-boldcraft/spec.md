# Template: BoldCraft (Personal Portfolio)

## Purpose

Recreation of ColorLib's **Calvin** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page portfolio.

- **ColorLib source:** https://colorlib.com/wp/template/calvin/
- **Live preview:** https://preview.colorlib.com/theme/calvin/
- **New name:** boldcraft
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict)
- **Category:** Personal / Portfolio / Agency

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`):

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| brand | `#FF8553` | Primary orange — buttons, links, progress bars, gallery overlay, footer accent, testimonial founder name, blog tag pills, footer social icons |
| brand-light | `#FFE7DE` | Progress bar track background |
| brand-overlay | `rgba(255, 133, 83, 0.3)` | Gallery image hover overlay |
| brand-social-bg | `rgba(255, 133, 83, 0.15)` | Footer social icon background |
| accent-green | `#31ff7a` | Hero subtitle highlight color (used sparingly) |
| white | `#FFFFFF` | Button fills, testimonial card bg is `#FFFBF9` |
| testimonial-bg | `#FFFBF9` | Testimonial card background |
| text-primary | `#000000` | Headings, body text |
| text-secondary | `#635c5c` | Default link color |
| text-muted | `#7a8290` | Section subtitle text |
| text-founder | `#5E5E5E` | Testimonial founder role text |
| bg-light | `#F8F8F8` | About area pseudo-element, blog area pseudo-element |
| bg-white | `#FFFFFF` | About area background |
| footer-bg | `#000000` | Footer wrapper background |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Body | DM Sans | 300–500 | 16px |
| Headings (h1–h6) | Roboto Condensed | 400 | varies |
| Hero h1 | Roboto Condensed | 400 | 70px desktop |
| Hero subtitle | DM Sans | 300 | 30px desktop |
| Section titles | Roboto Condensed | — | — |
| Testimonial quote | DM Sans | 300 | 16px |

### Buttons

| Class | Style |
|-------|-------|
| `.btn` | Gradient orange (`#FF8553` → `#ec703f`), white text, `border-radius: 25px`, padding 13px 46px, gradient shift on hover |
| `.border-btn` | Transparent with white border, `border-radius: 30px`, hover fills orange |
| `.border-btn2` | Transparent with orange border, `border-radius: 30px`, hover fills orange |
| `.boxed-btn` | White bg, orange text/border, `border-radius: 0` (sharp), letter-spacing 3px, uppercase |

### Borders & Radii

| Element | Radius |
|---------|--------|
| Buttons (.btn) | 25px |
| Border buttons | 30px |
| Gallery boxes | 10px |
| Testimonial cards | 12px |
| Footer social icons | 5px |
| About area pseudo | 90px (rounded right edge) |
| Blog area pseudo | 90px (rounded left edge) |
| Progress bar track | 4px |
| Progress bar fill | 7px |

### Section Backgrounds

| Section | Background |
|---------|-----------|
| Hero/Slider | Image (`h1_hero.png`) with dark overlay, min-height 950px |
| About Info Bar | Transparent, overlaid at bottom of hero |
| Our Services | White, no extra bg |
| Gallery | White, no extra bg |
| About Me | White + `#F8F8F8` pseudo-element (rounded right, 74% width) |
| Brand Area | White (within About section) |
| Testimonials | White |
| Blog | White + `#F8F8F8` pseudo-element (rounded left, 74% width) |
| Footer WantToWork | Black (`#000000`) |
| Footer Bottom | Black (`#000000`) |

## Section Structure (from live preview DOM)

Order matches the original 1:1:

1. **Header** — Transparent sticky header with logo, nav (Home, Work, Service, Blog, Contact), "Let's Talk" border button
2. **Hero** — Full-width background image, two-column layout: employee/portrait image left (327×327), headline "My name is [Name]. Digital Product Designer" + role subtitle right
3. **About Info Bar** — Absolute-positioned bar at hero bottom: "Design For" (Web & Mobile), Phone, Email with icon
4. **Our Services** — Section title "My Expertise", 2×2 grid of service cards with SVG icons, title, description, browse link; cards have left+bottom borders (#EFEFEF), hover shadow with orange tint
5. **Gallery** — Section title "My Works", 2×2 grid of portfolio images with orange overlay on hover showing project title; "More Work" border button below
6. **About Me** — Two-column: left has section title + descriptive text + pull quote in orange; right has 3 skill progress bars (User Interface Design 60%, User Experience 89%, Illustration 95%) with orange fill on light track
7. **Brand Area** — Horizontal carousel of 6 partner/client logos
8. **Testimonials** — Section title "Client Testimonial", carousel of quote cards with testimonial text, founder image, founder name (orange), role
9. **Blog** — Section title "Latest News", carousel of 3 blog cards with image, overlay text (title + date + author), orange tag pill
10. **Footer** — Two parts: (a) WantToWork CTA — black bg, logo, description, social icons, "Let's Talk" + "Download CV" buttons; (b) Footer bottom — copyright + nav links

## Gherkin Requirements

### Scenario: Header renders correctly
```gherkin
Given the user visits the BoldCraft homepage
Then a transparent sticky header is visible
And the header contains a logo
And the header contains navigation links: Home, Work, Service, Blog, Contact
And a "Let's Talk" button is visible in the header
```

### Scenario: Hero section displays
```gherkin
Given the user visits the BoldCraft homepage
Then a hero section is visible with a background image
And a portrait/employee image is shown on the left
And a headline reads "[Name]. Digital Product Designer"
And a subtitle "Head of design at [Company]" is shown below the headline
```

### Scenario: About info bar displays
```gherkin
Given the hero section is visible
Then an info bar is overlaid at the bottom of the hero
And the info bar shows "Design For" with "Web & Mobile"
And the info bar shows a phone number
And the info bar shows an email address with an envelope icon
```

### Scenario: Services section shows expertise
```gherkin
Given the user scrolls to the Services section
Then a section title "My Expertise" is visible
And 4 service cards are displayed in a 2×2 grid
And each service card has an icon, title, description, and link
And service cards have subtle left and bottom borders
```

### Scenario: Gallery section shows portfolio
```gherkin
Given the user scrolls to the Gallery section
Then a section title "My Works" is visible
And 4 portfolio items are displayed in a 2×2 grid
And each portfolio item has an image with an overlay
And hovering a portfolio item shows an orange-tinted overlay with a project title
And a "More Work" button is displayed below the grid
```

### Scenario: About Me section shows skills
```gherkin
Given the user scrolls to the About Me section
Then a section title "About Me" is visible
And descriptive text is shown on the left
And 3 skill progress bars are shown on the right
And each progress bar has a label and percentage
And progress bars are filled with orange color
```

### Scenario: Brand carousel displays
```gherkin
Given the user scrolls past the About Me section
Then a horizontal row of partner/client logos is visible
And the logos scroll or cycle automatically
```

### Scenario: Testimonials section displays
```gherkin
Given the user scrolls to the Testimonials section
Then a section title "Client Testimonial" is visible
And a testimonial card with a quote is displayed
And the card shows a founder image, name, and role
And testimonial cards cycle in a carousel
```

### Scenario: Blog section displays posts
```gherkin
Given the user scrolls to the Blog section
Then a section title "Latest News" is visible
And 3 blog post cards are displayed
And each card has an image, category tag, date, author, and title
And blog cards cycle in a carousel
```

### Scenario: Footer renders
```gherkin
Given the user scrolls to the footer
Then a black background CTA section is visible with logo and description
And social media icons (Twitter, Facebook, Pinterest, Globe, Instagram) are shown
And "Let's Talk" and "Download CV" buttons are present
And a copyright line with a link to Component Dock is shown
And footer navigation links match the header nav
```

### Scenario: Mobile responsiveness
```gherkin
Given the user views the page on a mobile device
Then the header shows a hamburger menu
And the hero section stacks vertically
And service cards stack in a single column
And gallery items stack in a single column
And the footer stacks vertically
```

## Verification Checklist

- [ ] Header: transparent, sticky, logo + 5 nav links + CTA button
- [ ] Hero: background image, portrait image left, headline + subtitle right
- [ ] About Info Bar: overlaid at hero bottom, 3 info items
- [ ] Services: 4 cards in 2×2, icons, borders, hover shadow
- [ ] Gallery: 4 items in 2×2, orange overlay hover, "More Work" button
- [ ] About Me: 2-column, text left, 3 progress bars right
- [ ] Brand Area: logo carousel
- [ ] Testimonials: carousel with quote cards
- [ ] Blog: 3 post cards with carousel
- [ ] Footer: CTA section (black bg) + bottom bar with copyright + Component Dock link
- [ ] Design tokens: brand orange #FF8553, DM Sans + Roboto Condensed fonts, correct radii
- [ ] Mobile responsive: hamburger menu, stacked layouts
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
