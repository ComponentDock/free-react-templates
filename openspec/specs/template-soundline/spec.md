# Template: Soundline (Podcast & Audio)

## Purpose

Recreation of ColorLib "Poca" — a podcast & audio website template with episode players, guest profiles, and newsletter signup.
- **Source:** https://colorlib.com/wp/template/poca/
- **Preview:** https://preview.colorlib.com/theme/poca/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/poca-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/soundline`
- **Deploy target:** `soundline.free.componentdock.com`

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/poca/style.css`:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary Red | `#f55656` | Primary accent — buttons, active states, form focus, hover highlights |
| Heading | `#232323` | All headings (h1–h6), nav links |
| Body Text | `#666666` | Paragraph text, metadata labels |
| Gray BG | `#f4f4f4` | Section backgrounds (preloader, alternating sections) |
| White | `#ffffff` | Card backgrounds, button fill, newsletter form bg |
| Dark / Black | `#000000` | Dark overlays, navbar bg, footer bg areas |
| Border | `#ebebeb` | Borders, dividers |
| Secondary | `#a6a6a6` | Muted text, secondary labels |

### Typography
- **Primary Font:** HK Grotesk (loaded via `css/default-assets/hkgrotesk-fonts.css`)
- **Fallback:** sans-serif
- **Base size:** 14px body, 16px paragraphs
- **Heading sizes:** h2 section headings = 44px (desktop), 30px (tablet)
- **Line height:** 1.9 for paragraphs, 1.4 for headings
- **Heading weight:** 600

### Buttons
- `.poca-btn`: white bg, pill shape (`border-radius: 30px`), padding via Tailwind utilities
- Active/hover state: background changes to `#f55656` (primary red), text to white
- `.poca-btn.btn-2`: outline variant — white bg, border, on hover bg stays white
- Subscribe buttons in hero: pill-shaped, two variants (solid active + outline)

### Layout & Spacing
- Section padding: 80px top/bottom (`.section-padding-80`)
- Container: Bootstrap-style `.container` (max-width ~1140px)
- Grid: 12-column Bootstrap grid
- Header: sticky navigation, logo left, nav center, search + social right
- Hero: full-viewport carousel with dark overlay (`rgba(0,0,0,0.5)`)

## Section Structure (top to bottom)

1. **Navbar** — Sticky header with logo left, nav links center (Home, Pages dropdown, Podcasts, About, Blog dropdown, Contact), search bar + social icons (Facebook, Twitter, Pinterest, Instagram, YouTube) right. Mobile hamburger toggler. Dark bg on scroll.

2. **Hero / Welcome Carousel** — Full-viewport Owl Carousel with 3 slides. Each slide: fullscreen background image with dark overlay (`rgba(0,0,0,0.5)`), centered white text heading ("Subscribe Today" / "Listen Now" / "Discover Today"), subtitle, two subscribe buttons (iTunes pill + RSS outline pill), and a featured episode card below with: thumbnail image, publish date, episode title, author/category/duration metadata, HTML5 audio player, like/share/download action links.

3. **Latest Episodes** — Section heading "Latest Episodes" with red underline. Filter bar with pill buttons (All, Entrepreneurship, Media, Tech, Tutorials). 2-column grid of 6 episode cards, each card: thumbnail left, episode metadata + audio player + like/share/download right. "Load More" pill button centered below grid.

4. **Featured Guests** — Section heading "Featured Guests". 3-column layout: each guest card has a portrait photo + name + role label (e.g. "PRODUCER", "DRUMMER", "ENTREPRENEUR") below.

5. **Newsletter** — Full-width parallax background image with dark overlay. Two-column layout: left has heading "Sign Up To Newsletter" + subtitle; right has email input + "Subscribe" button form.

6. **Footer** — 4-column layout: (1) About Us — text + copyright, (2) Categories — nav links (Entrepreneurship, Media, Tech, Tutorials), (3) Latest Episodes — 2 entries with date + title, (4) Follow Us — social icons (Facebook, Twitter, Pinterest, Instagram, YouTube) + app download badges (App Store, Google Play). Footer MUST include Component Dock attribution link per conventions.

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Desktop navigation renders all menu items
  Given the user is on a desktop viewport
  When the page loads
  Then the navbar displays "Home", "Podcasts", "About", "Blog", "Contact" links
  And a logo image is visible on the left
  And social media icons are visible on the right
  And a search input is available

Scenario: Mobile navigation shows hamburger toggle
  Given the user is on a mobile viewport
  When the page loads
  Then a hamburger menu button is visible
  And the full nav menu is hidden
  When the user taps the hamburger button
  Then the navigation menu expands vertically
```

### Hero Carousel
```gherkin
Scenario: Hero displays carousel with slides
  Given the user is on any viewport
  When the page loads
  Then a carousel with 3 slides is displayed
  And each slide shows a background image with dark overlay
  And each slide has a heading, subtitle, and two subscribe buttons

Scenario: Featured episode card is visible on current slide
  Given the hero carousel is displayed
  When a slide is active
  Then a featured episode card is visible below the text
  And the card shows a thumbnail, episode title, metadata, and audio player
  And like, share, and download links are present

Scenario: Carousel auto-plays between slides
  Given the hero carousel is displayed
  When 5 seconds elapse
  Then the carousel transitions to the next slide
```

### Latest Episodes
```gherkin
Scenario: Episodes section renders filter buttons and grid
  Given the user scrolls to the Latest Episodes section
  Then a section heading "Latest Episodes" is displayed
  And filter buttons "All", "Entrepreneurship", "Media", "Tech", "Tutorials" are visible
  And 6 episode cards are displayed in a 2-column grid

Scenario: Filter buttons filter episodes by category
  Given the episodes grid is visible
  When the user clicks "Media"
  Then only episodes tagged as "Media" are shown
  When the user clicks "All"
  Then all episodes are shown again

Scenario: Each episode card shows audio player
  Given an episode card is displayed
  Then it shows a thumbnail image, episode title, publish date
  And author, category, and duration metadata
  And an audio player control
  And like, share, and download action links

Scenario: Load More button is visible
  Given the episodes grid is displayed
  Then a "Load More" button is centered below the grid
```

### Featured Guests
```gherkin
Scenario: Guests section displays 3 guest cards
  Given the user scrolls to the Featured Guests section
  Then a section heading "Featured Guests" is displayed
  And 3 guest cards are shown in a row
  And each card shows a portrait photo, guest name, and role label
```

### Newsletter
```gherkin
Scenario: Newsletter section has parallax background and form
  Given the user scrolls to the Newsletter section
  Then a full-width parallax background image is visible
  And the heading "Sign Up To Newsletter" is displayed
  And an email input field is present
  And a "Subscribe" button is present

Scenario: Newsletter form submission
  Given the newsletter form is visible
  When the user enters a valid email and clicks Subscribe
  Then the form submits without page reload
```

### Footer
```gherkin
Scenario: Footer renders 4 columns
  Given the user scrolls to the footer
  Then an "About Us" column with text is displayed
  And a "Categories" column with navigation links is displayed
  And a "Latest Episodes" column with 2 episode entries is displayed
  And a "Follow Us" column with social icons is displayed

Scenario: Footer includes Component Dock attribution
  Given the footer is rendered
  Then a link to "https://www.componentdock.com/" is present
  And the link text mentions "Component Dock"

Scenario: Footer social icons link correctly
  Given the footer Follow Us column is visible
  Then social icons for Facebook, Twitter, Pinterest, Instagram, YouTube are present
```

## Verification Checklist

- [ ] All 6 sections render in correct order: Navbar → Hero → Latest Episodes → Featured Guests → Newsletter → Footer
- [ ] Navbar: sticky on scroll, logo visible, all nav links present, mobile hamburger works
- [ ] Hero: carousel auto-plays, 3 slides with bg images + dark overlay, subscribe buttons pill-shaped
- [ ] Hero: featured episode card has thumbnail, title, metadata, audio player, like/share/download
- [ ] Latest Episodes: filter buttons toggle episode visibility by category
- [ ] Latest Episodes: 6 episode cards in 2-column grid, each with audio player
- [ ] Latest Episodes: "Load More" button visible
- [ ] Featured Guests: 3 guest cards with photo + name + role
- [ ] Newsletter: parallax bg, heading, email form, subscribe button
- [ ] Footer: 4-column layout, Component Dock link, social icons, no ColorLib references
- [ ] Design tokens: primary red #f55656, font HK Grotesk, pill buttons (border-radius 30px)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Package name: `@free-react-templates/soundline`
- [ ] CNAME: `soundline.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
