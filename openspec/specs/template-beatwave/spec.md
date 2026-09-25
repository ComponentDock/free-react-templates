# Template: Beatwave (Music)

## Purpose

Recreation of ColorLib "Dj" template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source:** ColorLib "Dj" — https://colorlib.com/wp/template/dj/
- **Preview:** https://preview.colorlib.com/theme/dj/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dj-free-template.jpg
- **New name:** beatwave (package: `@free-react-templates/beatwave`)
- **Deploy target:** `beatwave.free.componentdock.com`

## Design tokens

Extracted from `https://preview.colorlib.com/theme/dj/css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand color (gold) | `#e4ae50` | Hero heading, section heading highlights, unit-9 h2 box-shadow, btn-primary bg, newsletter btn |
| Primary dark (black) | `#000000` | Hero background (dark overlay), unit-9 span, footer bg |
| Text primary | `#25262a` | Body text default |
| Text secondary | `#737373` | Footer paragraphs |
| Text muted | `#999999` | Footer links, secondary text |
| Text light | `#b3b3b3` | Muted accents |
| Background light | `#f8f9fa` | Light section bg |
| Background dark | `#222222` | Secondary sections |
| White | `#ffffff` | Headings, hero text, event titles |
| Font primary | Montserrat (Google Fonts) | Headings, hero, section headings |
| Font secondary | Nunito (Google Fonts) | Body text |
| Border radius (buttons) | 30px | Rounded pill buttons |
| Border radius (circular) | 50% | Date badges, avatars |

### Hero section

- Full viewport height (`100vh`, min 770px)
- Dark background (black overlay) with a large DJ figure image positioned absolutely on the right
- Gold heading "DJ Kathy Music Fest" at 80px, bold, Montserrat
- Subtext in white, lighter weight
- "Join Us" CTA button: outline-primary (gold border, transparent bg, white text), pill-shaped (30px radius)

### Navbar

- Absolute positioned, transparent background, overlaid on hero
- Brand: "Dj." in white, bold, H2 size, with gold dot accent
- Nav links: "Home", "DJs", "Shows" — white at 60% opacity, hover to full white
- Mobile hamburger menu

## Sections (in order)

### 1. Hero (site-hero)
- Full-height dark background with DJ figure image
- Large gold heading + subtext + CTA button
- Parallax-style image on right

### 2. Featured Events (site-section)
- Section heading: "Featured Events" centered with gold bottom border line
- 3-column grid of event cards (col-lg-4)
- Each card: image with hover zoom, gold date badge overlay (day + month), event title in white on dark, short description, "Info" link
- Events: "Slamp Party" (19 Jun), "Love For My City" (24 Jun), "Music Night Fest Party" (8 Jul)

### 3. Upcoming Events (site-section)
- Section heading: "Upcoming Events" centered with gold bottom border
- Asymmetric image grid (unit-9 retro blocks):
  - Left: large image block (full height of row)
  - Right top: smaller image block
  - Right bottom: smaller image block
- Each block: background image with gold heading overlay ("Classic Songs For Classic People")
- Hover effect: slight scale transition on images

### 4. We Love Music / Video + CTA (site-section)
- Two-column layout:
  - Left: image thumbnail with play button overlay (vimeo popup)
  - Right: section heading "We Love Music", subtext "Join with us today", two paragraphs of descriptive copy, "Join Us" primary button (gold bg)

### 5. Footer (site-footer)
- Dark background, generous padding (4em mobile, 7em desktop)
- 4-column layout:
  - About Us: paragraph + social icons row (Facebook, Twitter, Instagram, LinkedIn)
  - Navigations: link list (Home, DJs, News, Top 20 of the week)
  - Subscribe: email input with gold submit button
  - Watch Video: image thumbnail with play button popup
- Footer headings: white, uppercase, letter-spacing 0.2rem, 15px
- Footer links: #999999, hover to white
- Footer text: #737373
- Copyright: "Made with ❤️ by Component Dock"

## Gherkin scenarios

### Hero Section
```gherkin
Scenario: Hero displays full-height banner with heading and CTA
  Given the user visits the home page
  Then a full-viewport hero section is visible
  And the heading "Beatwave" (or equivalent) is displayed in gold color
  And a "Join Us" call-to-action button is visible
  And the hero has a dark background with a decorative DJ-themed image

Scenario: Hero CTA button is interactive
  Given the hero section is visible
  When the user hovers over the "Join Us" button
  Then the button shows a hover state (color change)
```

### Navbar
```gherkin
Scenario: Navbar displays brand and navigation links
  Given the user visits the page
  Then a transparent navbar is overlaid on the hero
  And the brand name is visible in white
  And navigation links (Home, DJs, Shows) are visible

Scenario: Navbar is responsive on mobile
  Given the user views on a mobile viewport
  Then a hamburger menu icon is displayed
  When the user taps the hamburger menu
  Then the mobile navigation drawer opens
```

### Featured Events
```gherkin
Scenario: Featured Events section shows three event cards
  Given the user scrolls to the Featured Events section
  Then three event cards are displayed in a 3-column grid
  And each card has an image, a date badge, a title, and a description

Scenario: Event card image has hover zoom effect
  Given the Featured Events section is visible
  When the user hovers over an event card image
  Then the image scales up slightly with a transition
```

### Upcoming Events
```gherkin
Scenario: Upcoming Events section shows asymmetric image grid
  Given the user scrolls to the Upcoming Events section
  Then one large image block and two smaller image blocks are displayed
  And each block has a gold heading overlay

Scenario: Image blocks respond to hover
  Given the Upcoming Events grid is visible
  When the user hovers over an image block
  Then the image scales slightly with a transition
```

### We Love Music / Video + CTA
```gherkin
Scenario: Video section shows thumbnail and description
  Given the user scrolls to the We Love Music section
  Then a video thumbnail with play button is visible on the left
  And descriptive text with heading is visible on the right
  And a "Join Us" button is displayed

Scenario: Play button opens video popup
  Given the video thumbnail is visible
  When the user clicks the play button
  Then a video popup/modal opens
```

### Footer
```gherkin
Scenario: Footer displays four columns with different content
  Given the user scrolls to the footer
  Then an "About Us" section with description and social icons is visible
  And a "Navigations" section with link list is visible
  And a "Subscribe" section with email input and button is visible
  And a "Watch Video" section with thumbnail is visible

Scenario: Footer links have hover effect
  Given the footer is visible
  When the user hovers over a footer link
  Then the link color changes to white
```

### Responsive Design
```gherkin
Scenario: Layout adapts to mobile viewport
  Given the user views the page on a 375px wide viewport
  Then the navbar shows a hamburger menu
  And event cards stack vertically
  And the video section stacks vertically
  And the footer columns stack vertically
```

## Verification checklist

- [ ] Hero: full-viewport height, dark bg, gold heading, CTA button, decorative image
- [ ] Navbar: transparent, absolute positioned, brand + 3 nav links, mobile hamburger
- [ ] Featured Events: centered heading with gold border, 3-column event cards with date badges
- [ ] Upcoming Events: asymmetric image grid with gold heading overlays, hover transitions
- [ ] We Love Music: 2-column layout, video thumbnail with play button, description + CTA
- [ ] Footer: dark bg, 4-column layout (about, nav, subscribe, video), social icons, copyright with Component Dock link
- [ ] Typography: Montserrat for headings, Nunito for body
- [ ] Colors: brand gold #e4ae50, dark bg #000, white headings, gray footer text
- [ ] Buttons: pill-shaped (30px radius), primary gold, outline variant for hero
- [ ] Responsive: mobile-first, stacking columns, hamburger nav
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Picsum photos used for placeholder images
- [ ] Lucide-react icons used (not custom icon fonts)
- [ ] 100% test coverage (Vitest + Testing Library)
