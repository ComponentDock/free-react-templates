# Template: Fmbeat (DJ / Radio Station)

## Purpose

Recreation of ColorLib "Eighty8" template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source:** ColorLib "Eighty8" — https://colorlib.com/wp/template/eighty8/
- **Preview:** https://preview.colorlib.com/theme/eighty8/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/88-free-template.jpg
- **New name:** fmbeat (package: `@free-react-templates/fmbeat`)
- **Deploy target:** `fmbeat.free.componentdock.com`

## Design tokens

Extracted from `https://preview.colorlib.com/theme/eighty8/css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand accent (yellow) | `#ffe400` | Section title underline, hero "UP NEXT" text, site-btn default bg, headings highlight |
| Dark bg primary | `#212121` | Header, footer-top-section |
| Dark bg secondary | `#1a1a1a` | Footer bottom bar |
| Dark bg deep | `#080808` | Hero overlay |
| Dark bg mid | `#191919` | Section backgrounds |
| Text white | `#ffffff` / `#fff` | Headings, nav links, promo titles |
| Text muted | `#a9a9a9` / `#acacac` | Footer links, body text |
| Text dark | `#1b1b1b` | Site button text (on yellow) |
| Text gray | `#7e7e7e` | Secondary text |
| Font primary | Roboto (Google Fonts) | All text |
| Button radius | 5px | site-btn default |
| Badge radius | 50% | Circular elements |
| Pill radius | 60px | Rounded buttons |

### Header / Navbar

- Dark background `#212121`, bottom border `1px solid #fff`
- Logo image on left
- Main menu: "Home", "About", "Charts", "DJ's", "Blog", "Contact" — white text, 16px, uppercase-capable
- Social links on right: Twitter, SoundCloud, Instagram, Google+, Facebook, YouTube (Font Awesome icons)
- Mobile: hamburger icon toggles menu

### Hero Section

- Dark background image (`bg.jpg`) with overlay
- Height: 962px (not full viewport)
- Top: location strip — 6 location badges (Berlin, Bucharest, London, etc.) with small logo icons, hidden on mobile
- Owl Carousel slider with 3 items:
  - "UP NEXT" label in yellow (#ffe400), 24px, weight 500
  - Large heading (e.g. "DJ Khaled Exclusive Interview") on dark semi-transparent bg (`rgba(0,0,0,0.75)` padding 5px 10px)
  - Slide transition: items fade in from opacity 0 / top 50px to opacity 1 / top 0

### Promotion Section

- 3-column grid of promo boxes (col-md-4)
- Each box: height 370px, background image with dark overlay (pseudo-element), flex centered content
- Yellow heading text: "Our DJ's", "Live Streams", "Events"
- Hover: overlay opacity transition

### Latest Podcast Section

- Dark background `#191919`, generous padding (spad class)
- Centered section title with yellow underline (4px bar, bottom-aligned)
- Two-column layout:
  - Left (col-lg-4): album art image
  - Right (col-lg-8): track name, audio waveform visualization, "LISTEN LIVE" yellow button

### Charts Section

- Dark background section
- Centered title "Charts" with yellow underline
- Background image (`chart-bg.jpg`) with large logo overlay, height 550px

### Footer Top Section

- Dark bg `#212121`, generous padding (100px top, 70px bottom)
- 4-column layout (col-lg-3):
  - Locations: list of city names
  - Top Shows: numbered list (1–5) with show names
  - Blog: 2 blog items with thumbnail + title + "Continue Reading" link
  - Contact: address, phone, email, small footer logo

### Footer Bottom Bar

- Darker bg `#1a1a1a`, centered text
- Copyright with heart icon and Colorlib credit (replace with Component Dock)

## Gherkin scenarios

### Header / Navbar
```gherkin
Scenario: Header displays logo, nav links, and social icons
  Given the user visits the page
  Then a dark header bar is visible at the top
  And the site logo is displayed on the left
  And navigation links (Home, About, Charts, DJs, Blog, Contact) are visible
  And social media icons (Twitter, SoundCloud, Instagram, etc.) are displayed on the right

Scenario: Header is responsive on mobile
  Given the user views on a mobile viewport
  Then a hamburger menu icon is displayed
  When the user taps the hamburger icon
  Then the navigation menu opens
```

### Hero Section
```gherkin
Scenario: Hero displays slider with upcoming events
  Given the user visits the page
  Then a hero section with a dark background image is visible
  And location badges are displayed at the top (hidden on mobile)
  And a carousel slider shows items with "UP NEXT" label and event heading
  And the slider auto-advances between items

Scenario: Hero slider transitions smoothly
  Given the hero slider is visible
  When a slide transitions
  Then the text fades in with an upward animation
```

### Promotion Section
```gherkin
Scenario: Promotion boxes display three category cards
  Given the user scrolls to the promotion section
  Then three promo boxes are displayed in a 3-column grid
  And each box shows a background image with a heading overlay ("Our DJ's", "Live Streams", "Events")

Scenario: Promo boxes respond to hover
  Given the promotion section is visible
  When the user hovers over a promo box
  Then the overlay transitions smoothly
```

### Latest Podcast
```gherkin
Scenario: Podcast section shows album art and audio player
  Given the user scrolls to the Latest Podcast section
  Then a section title "Latest Podcast" with yellow underline is visible
  And an album art image is displayed on the left
  And a track name, audio waveform, and "LISTEN LIVE" button are visible on the right

Scenario: Listen Live button is interactive
  Given the podcast section is visible
  When the user clicks the "LISTEN LIVE" button
  Then the audio playback state toggles
```

### Charts Section
```gherkin
Scenario: Charts section shows branded banner
  Given the user scrolls to the Charts section
  Then a section title "Charts" with yellow underline is visible
  And a large background image with logo overlay is displayed
```

### Footer
```gherkin
Scenario: Footer displays four widget columns
  Given the user scrolls to the footer
  Then a Locations column with city list is visible
  And a Top Shows column with numbered list is visible
  And a Blog column with thumbnail previews is visible
  And a Contact column with address/phone/email is visible

Scenario: Footer bottom bar shows copyright
  Given the footer is visible
  Then a copyright line with Component Dock attribution is displayed
```

### Responsive Design
```gherkin
Scenario: Layout adapts to mobile viewport
  Given the user views the page on a 375px wide viewport
  Then the location badges are hidden
  And the header shows a hamburger menu
  And promotion boxes stack vertically
  And the podcast section stacks vertically
  And footer columns stack vertically
```

## Verification checklist

- [ ] Header: dark bg (#212121), logo + 6 nav links + social icons, mobile hamburger
- [ ] Hero: dark bg image, location strip (6 cities), owl-carousel slider with 3 items, "UP NEXT" yellow label
- [ ] Promotion: 3-column grid, background images with overlay, yellow headings, hover transitions
- [ ] Latest Podcast: dark bg, section title with yellow underline, album art + track info + waveform + "LISTEN LIVE" button
- [ ] Charts: section title with yellow underline, background image with logo
- [ ] Footer Top: 4-column layout (Locations, Top Shows, Blog, Contact), dark bg
- [ ] Footer Bottom: copyright with Component Dock link
- [ ] Typography: Roboto font throughout
- [ ] Colors: yellow #ffe400 accent, dark #212121 bg, white headings, gray #a9a9a9 links
- [ ] Buttons: yellow bg (#ffe400), dark text, 5px radius
- [ ] Responsive: mobile-first, stacking columns, hamburger nav
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Picsum photos used for placeholder images
- [ ] Lucide-react icons used (not Font Awesome)
- [ ] 100% test coverage (Vitest + Testing Library)
