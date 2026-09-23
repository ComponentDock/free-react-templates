# Template: Lancer (Personal Portfolio / Freelancer)

## Purpose

Recreation of ColorLib's **Ronin** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page portfolio site.

- **Source slug:** `ronin`
- **Source URL:** https://colorlib.com/wp/template/ronin/
- **Preview URL:** https://preview.colorlib.com/theme/ronin/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ronin-free-template.jpg
- **New name:** `lancer` (avoids reuse of ColorLib source name; no collision with existing apps)
- **Package:** `@free-react-templates/lancer`
- **Deploy:** `https://lancer.free.componentdock.com`

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary / Brand | `#8490ff` (periwinkle) | Used on buttons, progress bars, links |
| Accent secondary | `#62bdfc` (sky blue) | Gradient partner on `.banner_btn` |
| Accent tertiary | `#f8b600` (amber) | Star ratings, highlights |
| Accent pink | `#e66686` | Accent color available in palette |
| Accent teal | `#4cd3e3` | Accent color available in palette |
| Background base | `#fff` (white) | |
| Background alt | `#f9f9ff` (very light blue-gray) | `.feature_area`, `.testimonials_area` |
| Text primary | `#222222` (near-black) | |
| Text secondary | `#777777` (medium gray) | Body text, paragraphs |
| Text muted | `#999` | |
| Font — Headings | `Heebo`, sans-serif | H2 etc. |
| Font — Body/UI | `Roboto`, sans-serif | H5, buttons, nav, body |
| Font — Icons | Linearicons-Free | `.lnr` classes |
| Button radius | `5px` | `.banner_btn` |
| Button style | Gradient: `linear-gradient(to right, #8490ff 0%, #62bdffc 48%, #8490ff 100%)`, animated on hover (background-size 200% auto) |
| Card radius | `10px` | `.feature_item` |
| Section padding | `120px` top/bottom (`.p_120`) |

## Page structure (section order, from live preview DOM)

1. **Navbar** — Logo left, nav links right (Home, About, Services, Pages dropdown, Blog dropdown, Contact). Sticky on scroll (`navbar-expand-lg`).
2. **Hero / Banner** — Full-width background image, two-column layout: left = portrait image, right = "This is me" subtitle + "Travor James" headline + paragraph + gradient CTA button ("Discover Now").
3. **Welcome / About** — Two columns: left = "About Myself" heading + paragraph + 3 stat counters (Total Donation $2.5M, Total Projects 1465, Total Volunteers 3965 with Linearicons). Right = "Tools Expertness" skill progress bars (After Effects 85%, Photoshop 90%, Illustrator 70%, Sublime 95%, Sketch 75%).
4. **Features / Offerings** — Heading "offerings to my clients" + subtitle. 6 feature cards in 3×2 grid (Architecture, Interior Design, Concept Design × 2). Each card: flaticon icon + title + description, white card on `#f9f9ff` background.
5. **Projects / Portfolio** — Heading "Our Recent Completed Projects" + subtitle. Filter tabs (All Categories, Branding, Creative Work, Web Design). 6 project cards in 3×2 grid. Each: image with hover overlay showing title + "Client Project" subtitle. Filterable by category (isotope-style).
6. **Testimonials** — Heading "Testimonials" + subtitle. Carousel/slider with 3 testimonial cards. Each: quote text + author name + 4.5-star rating (Font Awesome stars).
7. **Blog** — Heading "Latest Posts from Blog" + subtitle. 3 blog post cards in a row. Each: featured image + date/author link + title + excerpt paragraph.
8. **Footer** — Three columns: About Me (text), Newsletter (email input + submit arrow button), Follow Me (social icons: Facebook, Twitter, Dribbble, Behance). Bottom copyright line.

## Gherkin requirements

### Feature: Navbar

Scenario: Desktop navigation renders all links
  Given the user views the page at viewport width >= 992px
  When the navbar loads
  Then it displays the logo on the left
  And it shows links: Home, About, Services, Pages, Blog, Contact

Scenario: Navbar is sticky on scroll
  Given the user scrolls down past the hero
  Then the navbar remains fixed at the top of the viewport

### Feature: Hero Banner

Scenario: Hero section displays headline and CTA
  Given the user views the hero section
  Then a subtitle "This is me" is visible
  And a headline "Lancer" (or similar portfolio name) is visible
  And a paragraph description is visible
  And a gradient CTA button "Discover Now" is visible

Scenario: Hero has a split layout with portrait
  Given the user views the hero section
  Then a left column contains the portrait image
  And a right column contains the text content

### Feature: About / Welcome

Scenario: About section shows stats and skills
  Given the user scrolls to the About section
  Then a heading "About Myself" is visible
  And 3 stat counters are displayed (e.g., Total Donation, Total Projects, Total Volunteers)
  And a "Tools Expertness" progress bar area shows at least 5 skills

Scenario: Stats have icons
  Given the user views the stat counters
  Then each stat has an icon above the number

### Feature: Features / Offerings

Scenario: Feature cards display offerings
  Given the user scrolls to the Features section
  Then a heading "offerings to my clients" is visible
  And at least 6 feature cards are displayed in a grid
  And each card has an icon, title, and description

### Feature: Projects / Portfolio

Scenario: Projects section with filter tabs
  Given the user scrolls to the Projects section
  Then a heading "Our Recent Completed Projects" is visible
  And filter tabs are displayed: All Categories, Branding, Creative Work, Web Design

Scenario: Project cards display images and titles
  Given the user views the project grid
  Then at least 6 project cards are visible
  And each card has an image and a title overlay

Scenario: Filter tabs filter projects
  Given the user clicks the "Branding" filter tab
  Then only projects tagged as "Branding" are visible

### Feature: Testimonials

Scenario: Testimonials carousel displays quotes
  Given the user scrolls to the Testimonials section
  Then a heading "Testimonials" is visible
  And at least 3 testimonial cards are available in the carousel
  And each card shows a quote, author name, and star rating

### Feature: Blog

Scenario: Blog section shows recent posts
  Given the user scrolls to the Blog section
  Then a heading "Latest Posts from Blog" is visible
  And 3 blog post cards are displayed
  And each card has a featured image, date/author, title, and excerpt

### Feature: Footer

Scenario: Footer has three columns
  Given the user scrolls to the footer
  Then an "About Me" column with description text is visible
  And a "Newsletter" column with email input and submit button is visible
  And a "Follow Me" column with social media icons is visible

Scenario: Footer links to Component Dock
  Given the user views the footer
  Then a link to "https://www.componentdock.com/" is present (branded "Component Dock")

## Verification checklist

- [ ] Section order matches: Navbar → Hero → About → Features → Projects → Testimonials → Blog → Footer
- [ ] Brand color `#8490ff` used as primary; gradient CTA button matches original
- [ ] Fonts: Heebo for headings, Roboto for body/UI
- [ ] Background alternating: white and `#f9f9ff`
- [ ] Hero split layout (image left, text right)
- [ ] Skill progress bars render with correct percentages
- [ ] Feature cards: 3×2 grid with icons
- [ ] Projects: filter tabs + 6 cards with hover overlay
- [ ] Testimonials: carousel with star ratings
- [ ] Blog: 3 cards with image, date, title, excerpt
- [ ] Footer: 3 columns + Component Dock link
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] `public/CNAME` contains `lancer.free.componentdock.com`
- [ ] `package.json` homepage matches deploy URL
- [ ] `vite.config.ts` includes `injectUiSource()`
