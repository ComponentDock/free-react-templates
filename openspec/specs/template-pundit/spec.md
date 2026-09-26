# Template: Pundit (Political Campaign)

## Purpose

Recreation of ColorLib "Politics" — a political campaign/party website template.
- **Source slug:** `politics`
- **Preview URL:** https://preview.colorlib.com/theme/politics/
- **Original screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/politics-free-template-1.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Name mapping:** ColorLib `politics` → `pundit`

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/politics/css/main.css`:

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand color | `#3898f8` | Blue — used for buttons, accents, active states, counters, hover |
| Background light | `#f9f9ff` | Light grey-blue — used for countdown, about area, brands, accordions |
| Background dark | `#04091e` | Deep navy — footer background |
| Background dark overlay | `rgba(0,0,0,0.5)` | Banner overlay |
| Background dark overlay 2 | `rgba(0,0,0,0.7)` | Counter area, video section overlays |
| Header top bar | `#222` | Dark charcoal — top info bar |
| Body text | `#777` | Grey — paragraphs, secondary text |
| Heading text | `#222` | Dark — all headings (h1-h6) |
| White | `#fff` | General background, nav background, card backgrounds |
| Accent cyan | `#4cd3e3` | Success button variant |
| Font family | `"Poppins", sans-serif` | Weights: 300 (body), 400 (nav), 500 (buttons), 600 (headings) |
| Primary button | `bg: #3898f8`, `color: #fff`, `border-radius: 25px`, `line-height: 42px`, `padding: 0 30px` | Rounded pill shape |
| Header CTA button | `bg: #3898f8`, `color: #fff`, `border-radius: 0`, `border: 1px solid transparent` | Square corners on hero |
| Section gap | `padding: 120px 0` | Consistent vertical rhythm |
| Counter circle | `border: 1px solid #3898f8`, `border-radius: 68px`, inner `bg: #3898f8`, `border-radius: 50px` | Circular counter design |
| Blog date badge | `bg: #000`, `color: #fff`, `padding: 2px 15px`, `width: 115px` | Black label |
| Footer social | `bg: #111` hover `#3898f8`, square icons 40x40 | Dark icon squares |
| Newsletter input | `border-radius: 20px` | Rounded input field |
| Nav link | `color: #222`, `font-size: 12px`, `text-transform: uppercase`, `font-weight: 400` | Small caps navigation |
| Logo | `border-left: 4px solid #3898f8` on the logo text area | Blue left-border accent |
| Brand logos | `filter: grayscale(100%)`, `opacity: 0.5`, hover restores | Grayscale until hover |
| Service card hover | image `transform: scale(1.1) rotate(-2deg)` | Subtle zoom+tilt on hover |
| Blog card hover | image `transform: scale(1.1)`, title color → `#3898f8` | Zoom + blue title |

## Section Structure (top to bottom)

1. **Header** — Fixed position. Top bar (dark `#222`): social icons (Facebook, Twitter, Dribbble, Behance) left, phone + email right. Main menu: logo (text with blue left-border) + nav links (Home, About, Service, Team, Blog [dropdown], Elements, Contact).
2. **Banner/Hero** — Fullscreen with background image + dark overlay. Centered text: h6 uppercase subtitle "Don't look further, This is our Leader", h1 "Support Our Party", paragraph, CTA button "Get Started" (square corners).
3. **Countdown** — Split layout. Left: h1 "Election is knocking at door" + subtitle. Right: countdown timer on blue `#3898f8` background (4 columns: days, hours, minutes, seconds).
4. **Services** — 3-column card grid. Section heading "What we Offer to our Supporters". Each card: image (hover: scale+rotate), h4 title, description paragraph. Cards: Conduct Campaign, Generate Member, Energy Saving Policy.
5. **About** — Split layout. Left: background image via CSS `:after` pseudo-element (full height). Right: h1 "Who we are to Serve the nation", paragraph, 2 feature items (Expert Services with diamond icon, Great Support with phone icon — Linearicons).
6. **Gallery** — Masonry-style grid. Heading "Our Gallery Archive". Layout: row 1 = 8-col + 4-col, row 2 = 6-col + 6-col. Images with hover opacity transition.
7. **Counter** — Full-width with dark overlay background. 4 circular counters: Projects Completed (2K+), Total Employees (5.5K), Happy Clients (959), Tickets Submitted (367). Circular design with blue border + blue fill + white number.
8. **Feedback/Accordion** — Split layout. Left: section heading "Goals to Achieve for the leadership" + accordion (4 items: Success, Info, danger, Warning — each with expandable content). Right: video play button over dark overlay background image.
9. **Brands** — Logo carousel on light grey `#f9f9ff` background. 5 brand logos, grayscale by default, color on hover.
10. **Blog** — 4-column grid. Section heading "Latest From Our Blog". Each card: image (hover: scale), black date badge, h4 title (hover: blue), excerpt, bottom bar with likes + comments icons.
11. **Footer** — Dark navy `#04091e`. 3-column layout: Top Products (link list), Newsletter (email input + subscribe button), Instagram Feed (8-grid thumbnails). Bottom: copyright text + social icon squares.

## Gherkin Scenarios

### Header
```gherkin
Scenario: Header renders with top bar and navigation
  Given the page loads
  Then the header top bar displays social icons and contact info
  And the navigation menu shows Home, About, Service, Team, Blog, Elements, Contact
  And the logo has a blue left-border accent

Scenario: Header is fixed on scroll
  Given the user scrolls down
  Then the header remains fixed at the top
  And the header gains a box-shadow on scroll
```

### Banner/Hero
```gherkin
Scenario: Hero section displays campaign message
  Given the page loads
  Then the banner shows subtitle "Don't look further, This is our Leader"
  And the banner shows heading "Support Our Party"
  And a "Get Started" CTA button is visible

Scenario: Hero has dark overlay on background image
  Given the page loads
  Then the banner has a semi-transparent dark overlay over the background image
```

### Countdown
```gherkin
Scenario: Countdown section shows election countdown
  Given the page loads
  Then the countdown area displays "Election is knocking at door" heading
  And 4 countdown columns are visible on a blue background
```

### Services
```gherkin
Scenario: Services section shows 3 service cards
  Given the page loads
  Then 3 service cards are displayed in a row
  And each card has an image, title, and description
  And hovering an image triggers a scale+rotate animation

Scenario: Service cards show correct content
  Given the page loads
  Then the services are "Conduct Campaign", "Generate Member", "Energy Saving Policy"
```

### About
```gherkin
Scenario: About section shows party info
  Given the page loads
  Then the heading reads "Who we are to Serve the nation"
  And 2 feature items are displayed: "Expert Services" and "Great Support"
  And the left side has a background image

Scenario: About icons use Linearicons
  Given the page loads
  Then the feature items show diamond and phone icons
```

### Gallery
```gherkin
Scenario: Gallery shows masonry image grid
  Given the page loads
  Then 4 gallery images are displayed in a masonry grid
  And the first row has an 8-column and 4-column image
  And the second row has two 6-column images
  And images fade on hover
```

### Counter
```gherkin
Scenario: Counter section shows statistics
  Given the page loads
  Then 4 counters are displayed with circular blue design
  And the counters show: 2K+ Projects Completed, 5.5K Total Employees, 959 Happy Clients, 367 Tickets Submitted
  And the section has a dark overlay background
```

### Feedback/Accordion
```gherkin
Scenario: Accordion shows 4 expandable items
  Given the page loads
  Then 4 accordion items are displayed: Success, Info, danger, Warning
  And clicking an item expands to show its content
  And only one item is open at a time

Scenario: Video play button is visible
  Given the page loads
  Then a video play button is displayed on the right side
  And the right side has a dark overlay background
```

### Brands
```gherkin
Scenario: Brand logos display in carousel
  Given the page loads
  Then 5 brand logos are shown in a carousel
  And logos are grayscale by default
  And logos show full color on hover
```

### Blog
```gherkin
Scenario: Blog section shows 4 post cards
  Given the page loads
  Then 4 blog cards are displayed in a row
  And each card has an image, date badge, title, excerpt, and engagement stats
  And the date badge is black with white text
  And hovering a card scales the image and turns the title blue
```

### Footer
```gherkin
Scenario: Footer displays with newsletter and social links
  Given the page loads
  Then the footer has dark navy background
  And it shows Top Products links, Newsletter form, and Instagram feed
  And the bottom has copyright text and social icon squares
  And the footer links to Component Dock
```

## Verification Checklist

- [ ] Header: fixed position, top bar with social icons + contact, navbar with logo + nav links
- [ ] Hero: fullscreen with dark overlay, subtitle, heading, CTA button (square corners)
- [ ] Countdown: split layout, blue timer background, correct heading
- [ ] Services: 3 cards with images, titles, descriptions, hover animation
- [ ] About: split layout with background image left, text + 2 feature items right
- [ ] Gallery: masonry 8/4 then 6/6 grid, hover opacity
- [ ] Counter: dark overlay, 4 circular counters with blue design
- [ ] Accordion: 4 items expand/collapse, video play button on right
- [ ] Brands: carousel, grayscale default, color on hover
- [ ] Blog: 4 cards with image, date badge, title, excerpt, engagement
- [ ] Footer: dark navy, 3 columns (links, newsletter, Instagram), social icons, Component Dock link
- [ ] Colors match tokens: #3898f8 primary, #f9f9ff light bg, #04091e footer
- [ ] Font: Poppins loaded via Google Fonts
- [ ] Buttons: primary pill (25px radius), hero square (0 radius)
- [ ] All images use picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
