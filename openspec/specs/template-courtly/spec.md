# Template: Courtly (Law Firm / Legal)

## Purpose

Recreation of ColorLib **Lawful** law firm template.

- **Source slug:** `lawful`
- **Preview URL:** https://preview.colorlib.com/theme/lawful/
- **ColorLib page:** https://colorlib.com/wp/template/lawful/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lawful-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `courtly` (apps/courtly, package @free-react-templates/courtly)

## Design Tokens

Extracted from the ColorLib preview CSS (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| Primary gradient | `linear-gradient(90deg, #f13d80 0%, #f48464 100%)` | Pink-to-coral, used on buttons (hover), service area bg, newsletter, CTA |
| Video play gradient | `linear-gradient(90deg, #e93d88 0%, #e5935a 100%)` | Slightly different pink-to-orange for play button |
| Heading font | `"Playfair Display", serif` (700) | All h1–h6 |
| Body font | `"Raleway", sans-serif` (400) | Body text, buttons |
| Body text color | `#777777` | Paragraphs |
| Heading color | `#222222` | h1–h6 |
| Button radius | `5px` | Primary buttons |
| Button bg (default) | `#fff` | White, text #222222 |
| Button hover | Gradient overlay appears (opacity 0→1), text turns white | |
| Section padding | `120px 0` (80px mobile) | `.section_gap` |
| Light border/divider | `#eeeeee` | |
| Pink accent | `#f13d80` | Links, hovers, active states |
| Copyright link color | Gradient text (pink-to-coral via background-clip) | |

## Visual Design Notes (from screenshot)

Law firm professional template. Clean white background with pink-to-coral gradient accent. Fullscreen hero with dark overlay. Sections have generous white space. Counter stats row sits over gradient background. Video section has embedded YouTube. Services displayed in cards. Team members in grid. Blog posts in 3-column layout. Footer is dark with newsletter and Instagram feed.

## Section Structure (in order)

1. **Navbar** — Logo left, nav links (Home, About, Service, Team, Pages dropdown, Blog dropdown, Contact), social icons right, search icon
2. **Hero Banner** — Fullscreen dark overlay, centered text, "Get Free Quote" CTA button
3. **Features Counter** — 4 stats in a row: Cases Won (596+), Happy Clients (20650+), Team Members (2.5k), Years Experience (50+), gradient background
4. **Video Section** — Left: embedded video with play button overlay; Right: heading "Get to Know Project Estimate?", description text, "Learn More" CTA, author card (Marvel Maison)
5. **About Area** — 4 "Road to Success" cards in a 2x2 grid with icons
6. **Service Area** — Heading "Services Offered By Us", 3 service cards with thumb + details
7. **Service Area 2** — 2-column layout: left text block with "Get to Know Project Estimate?" + author, right: 3 mini service items
8. **Team Area** — Heading "Meet Our Experienced Team", 3 team member cards (Ethel Davis placeholder)
9. **CTA Area** — Gradient overlay section with call-to-action text
10. **Blog Area** — Heading "Latest From Our Blog Posts", 3 blog post cards with thumb, title, meta, excerpt
11. **Footer** — 4 columns: About text, Navigation Links, Newsletter signup, Instagram feed; copyright bar at bottom

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Navbar displays logo and navigation links
  Given the user is on the Courtly homepage
  Then the navbar shows the logo on the left
  And navigation links include Home, About, Service, Team, Pages, Blog, Contact
  And social media icons are displayed on the right
  And a search icon is visible

Scenario: Navbar collapses on mobile
  Given the user is on a mobile viewport
  Then the navbar shows a hamburger toggle button
  And clicking it expands the navigation menu
```

### Hero Banner
```gherkin
Scenario: Hero displays fullscreen banner with CTA
  Given the user is on the Courtly homepage
  Then a fullscreen hero banner is visible with a dark overlay
  And the banner contains a headline and description text
  And a "Get Free Quote" button is displayed
```

### Features Counter
```gherkin
Scenario: Counter section displays 4 statistics
  Given the user scrolls to the features counter section
  Then 4 stat cards are displayed in a row
  And each card shows a number with a label
  And the section has a gradient background

Scenario: Counters animate on scroll into view
  Given the user scrolls the features counter into view
  Then each counter animates from 0 to its target number
```

### Video Section
```gherkin
Scenario: Video section shows embedded video and text
  Given the user scrolls to the video section
  Then a video thumbnail with a play button is on the left
  And a heading "Get to Know Project Estimate?" is on the right
  And a "Learn More" CTA button is displayed
  And an author card with name and role is shown below the text
```

### About Area
```gherkin
Scenario: About section shows 4 success items
  Given the user scrolls to the about section
  Then 4 "Road to Success" cards are displayed in a 2-column grid
  And each card has an icon, title, and description
```

### Service Area
```gherkin
Scenario: Services section lists 3 services
  Given the user scrolls to the service section
  Then the heading reads "Services Offered By Us"
  And 3 service cards are displayed
  And each card has a thumbnail image and service details

Scenario: Second service area shows 2-column layout
  Given the user scrolls to service area 2
  Then a text block with heading and author is on the left
  And 3 mini service items are on the right
```

### Team Area
```gherkin
Scenario: Team section displays 3 members
  Given the user scrolls to the team section
  Then the heading reads "Meet Our Experienced Team"
  And 3 team member cards are shown
  And each card has a photo, name, and role
```

### CTA Area
```gherkin
Scenario: CTA section shows gradient overlay with action text
  Given the user scrolls to the CTA section
  Then a gradient overlay background is visible
  And a heading with call-to-action text is displayed
  And a CTA button is available
```

### Blog Area
```gherkin
Scenario: Blog section shows 3 posts
  Given the user scrolls to the blog section
  Then the heading reads "Latest From Our Blog Posts"
  And 3 blog post cards are displayed
  And each card has a thumbnail, title, date/author meta, and excerpt
```

### Footer
```gherkin
Scenario: Footer shows 4 columns
  Given the user scrolls to the footer
  Then column 1 shows "About Courtly" text
  And column 2 shows navigation links
  And column 3 shows a newsletter signup
  And column 4 shows an Instagram feed grid
  And a copyright bar is at the bottom with Component Dock link
```

## Verification Checklist

- [ ] Navbar: logo, nav links, social icons, search, mobile hamburger
- [ ] Hero: fullscreen overlay, headline, description, CTA button
- [ ] Features Counter: 4 stats, gradient bg, animated counters
- [ ] Video Section: video thumbnail + play button, heading, description, CTA, author card
- [ ] About Area: 4 "Road to Success" cards in 2x2 grid
- [ ] Service Area 1: heading, 3 service cards with images
- [ ] Service Area 2: 2-column layout, 3 mini services
- [ ] Team Area: heading, 3 team member cards
- [ ] CTA Area: gradient overlay, heading, CTA button
- [ ] Blog Area: heading, 3 blog post cards
- [ ] Footer: 4 columns (about, nav, newsletter, instagram), copyright with Component Dock link
- [ ] Design tokens: Playfair Display headings, Raleway body, #f13d80→#f48464 gradient, #222 headings, #777 body, 5px radius buttons
- [ ] Responsive: mobile hamburger, stacked layouts, appropriate padding
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] All images use picsum.photos placeholders
