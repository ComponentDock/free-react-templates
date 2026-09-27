# Template: ReelStudio (Video Portfolio)

## Purpose

Recreation of the ColorLib **Videograph** template — a dark, cinematic video production portfolio site with hero slider, service cards, project gallery, team showcase, blog, and CTA section. Designed for videographers and production companies.

- **ColorLib source:** https://colorlib.com/wp/template/videograph/
- **Live preview:** https://preview.colorlib.com/theme/videograph/
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Fonts:** Josefin Sans (headings), Play (body/buttons) — via Google Fonts

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| `--color-bg-deep` | `#100028` | Deep purple-navy background (sections, body) |
| `--color-bg-darker` | `#0a0119` | Slightly darker variant for depth |
| `--color-accent` | `#00bfe7` | Cyan/teal — primary accent, section-title underline, border animation |
| `--color-text` | `#ffffff` | White text (headings, body on dark bg) |
| `--color-text-muted` | `#adadad` | Light gray for secondary text |
| `--color-text-dark` | `#111111` | Dark text (light sections, if any) |
| `--color-card-bg` | `#1a083d` | Slightly lighter purple for cards |

**Typography:**
- Headings: `'Josefin Sans', sans-serif`
- Body/Buttons: `'Play', sans-serif`
- Section titles: uppercase, bold, with 5px cyan underline bar (position: absolute, bottom: 0)

**Buttons:**
- `.primary-btn`: white text, uppercase, letter-spacing 2px, padding 14px 32px
- Border animation: 4 sides of 2px cyan border animate in on hover (left→top→right→bottom sequential reveal)
- Font: Play, 700 weight, 15px

**Layout:**
- Bootstrap grid (col-lg-* classes in original — use Tailwind grid/flex)
- Section padding: `spad` = 100px top
- Full-width sections with dark background
- Hero: slider with background images, 684px height

## Section Structure (order)

1. **Header** — Sticky nav bar with logo (left), nav links (Home, About, Portfolio, Services, Pages dropdown), social icons (right)
2. **Hero Slider** — Full-width background image slider with text overlay: subtitle "For website and video editing", headline "Videographer's Portfolio", CTA button "See more about us"
3. **Services** — "Our services" / "What We do?" section-title, intro paragraph, 4 service cards in 2x2 grid: Motion graphics, Scriptwriting and editing, Video distribution, Video hosting — each with icon + title + description
4. **Work/Gallery** — Portfolio image grid (4 columns), image thumbnails with hover overlay
5. **Counter** — Stats row: 230 Completed Projects | 1068 Happy Clients | 230 Perspective Clients — with animated counters on dark background
6. **Team** — "Nice to meet" / "OUR Team" section-title, 4 team member cards: photo, name (AMANDA STONE), role (Videographer), social icons overlay on hover
7. **Latest/Blog** — "Our Blog" / "Blog Update" section-title, 3 blog cards: thumbnail image, title, excerpt, "Read more" link
8. **CTA/Call-to-action** — Full-width background image, headline "Fresh Ideas, Fresh Moments Giving Wings to your Stories.", subtitle "INC5000, Best places to work 2031", CTA button "Start your stories"
9. **Footer** — 3 rows: top (logo + social icons: Facebook, X/Twitter, Dribbble, Instagram, YouTube), option (4 columns: About us with text + Read more, Who we are links, Our work links, Newsletter signup), bottom (copyright)

## Gherkin Requirements

### Scenario: Header displays navigation
- **Given** the page loads
- **When** the header renders
- **Then** a logo appears on the left
- **And** nav links "Home", "About", "Portfolio", "Services", "Pages" are visible
- **And** social icons appear on the right side

### Scenario: Hero slider renders
- **Given** the page loads
- **When** the hero section renders
- **Then** a full-width background image is visible
- **And** subtitle text "For website and video editing" is displayed
- **And** heading "Videographer's Portfolio" is displayed
- **And** a "See more about us" CTA button is visible

### Scenario: Services section displays 4 service cards
- **Given** the page loads
- **When** the services section scrolls into view
- **Then** section title "What We do?" is displayed with cyan underline
- **And** 4 service cards are shown: Motion graphics, Scriptwriting and editing, Video distribution, Video hosting
- **And** each card has an icon, title, and description

### Scenario: Work gallery displays portfolio items
- **Given** the page loads
- **When** the work section renders
- **Then** a grid of portfolio images is displayed
- **And** images have a hover overlay effect

### Scenario: Counter section shows statistics
- **Given** the page loads
- **When** the counter section scrolls into view
- **Then** "230" is displayed with label "Completed Projects"
- **And** "1068" is displayed with label "Happy Clients"
- **And** "230" is displayed with label "Perspective Clients"

### Scenario: Team section displays members
- **Given** the page loads
- **When** the team section scrolls into view
- **Then** section title "OUR Team" is displayed
- **And** 4 team member cards are shown
- **And** each card has a photo, name, role ("Videographer"), and social icon links

### Scenario: Blog section displays latest posts
- **Given** the page loads
- **When** the latest section renders
- **Then** section title "Blog Update" is displayed
- **And** 3 blog cards are shown with thumbnail, title, excerpt, and "Read more" link

### Scenario: CTA section renders
- **Given** the page loads
- **When** the call-to-action section scrolls into view
- **Then** headline "Fresh Ideas, Fresh Moments Giving Wings to your Stories." is displayed
- **And** subtitle "INC5000, Best places to work 2031" is visible
- **And** a "Start your stories" CTA button is visible

### Scenario: Footer renders
- **Given** the page loads
- **When** the footer renders
- **Then** logo and social icons (Facebook, X, Dribbble, Instagram, YouTube) appear
- **And** "About us" column with description and "Read more" link is visible
- **And** "Who we are", "Our work", "Newsletter" columns are visible
- **And** copyright text and "Component Dock" link are present

### Scenario: Accessibility — skip link
- **Given** the page loads
- **When** the user presses Tab
- **Then** a "Skip to main content" link appears

### Scenario: Button hover animation
- **Given** the page is loaded
- **When** a user hovers over a primary CTA button
- **Then** a cyan border animation plays (left→top→right→bottom)

## Verification Checklist

- [ ] Header with nav and social icons renders
- [ ] Hero slider with text overlay and CTA button
- [ ] Services section with 4 cards in 2x2 grid
- [ ] Work gallery with image grid and hover effects
- [ ] Counter section with 3 stats
- [ ] Team section with 4 member cards
- [ ] Blog section with 3 post cards
- [ ] CTA section with background image and headline
- [ ] Footer with logo, 4 columns, copyright, Component Dock link
- [ ] Dark theme: body bg #100028, accent #00bfe7
- [ ] Typography: Josefin Sans headings, Play body/buttons
- [ ] Primary button border animation on hover
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] package-lock.json updated with workspace
