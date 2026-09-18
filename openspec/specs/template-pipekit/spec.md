# Template: Pipekit (Creative Agency Landing)

## Purpose

Recreation of ColorLib **Pexman** (`https://colorlib.com/wp/template/pexman/`).
Preview: `https://preview.colorlib.com/theme/pexman/`

**Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict).
**Package:** `@free-react-templates/pipekit`

## Design Tokens (from live preview CSS analysis)

| Token              | Value                                         |
| ------------------ | --------------------------------------------- |
| Brand / primary    | `#000000` (black)                             |
| Accent / gold      | `#d9bf77`                                     |
| Primary CTA        | `#0062cc` → Tailwind blue `#007bff`           |
| Body background    | `#ffffff` (white)                             |
| Section alt bg     | `#f7f7f7` (light gray)                        |
| Counter overlay bg | `#1d2124` (dark charcoal)                     |
| Navbar bg          | `#000` dark with semi-transparent variant     |
| Font family        | **Montserrat**, Arial, sans-serif             |
| Button radius      | `0` (square / sharp corners)                  |
| Card radius        | `0` to `5px` (very subtle rounding)           |
| Star rating color  | Gold via `#d9bf77` / `#f6c23e`               |

### Tailwind Theme Map

```css
@theme {
  --color-brand: #000000;
  --color-accent: #d9bf77;
  --color-cta: #007bff;
  --font-heading: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
}
```

## Section Order (from live preview DOM)

### 1. Navbar
- Dark background (`bg-dark`), transparent-on-scroll
- Brand text "Pipekit" (left)
- Nav links: Home, About, Works, Blog, Contact
- Hamburger on mobile

### 2. Hero Slider (full-height)
- Full-viewport carousel (3 slides), each with:
  - Background image (dark overlay)
  - Left-aligned heading + paragraph + "View Portfolio" CTA button
  - Dot pagination below
- Headings: "Build Stunning Websites Design", "Make Creative Website", "We Are Pipekit Creative Agency"
- CTA: `btn btn-primary px-5 py-3` — blue rounded button

### 3. About (split layout)
- Two-column: image (left) + text block (right) or reversed
- Heading: "We Are Creative Agency That Create Beautiful Websites"
- Two paragraphs of body text
- CTA button: "Start A Project"

### 4. Counter Stats
- Dark overlay background (`#1d2124`)
- 4 columns: Achievements (K+), Project Completed (K+), Years of Experience, Team Members
- Animated number counters

### 5. Services ("What We Offer")
- White background
- Section heading + intro paragraph
- 4 service cards in a row: Research, Design, Development, Testing
  - Each card: icon + heading + short description
- CTA button: "Start A Project"

### 6. Portfolio Gallery ("Our Stunning Works")
- Filter tabs: All, Branding, Web Design, Illustration, Application
- Grid of project cards (3 columns)
  - Each card: background image + hover overlay with link icon + project title
- Filterable (click tab shows/hides)

### 7. Testimonials
- White background
- "What Are Clients Say" heading with star rating (5 stars)
- Testimonial text + client name + position
- Carousel / slider of 2+ testimonials

### 8. Blog ("Our Latest Blog")
- Light gray background (`#f7f7f7`)
- 3 blog post cards in a row
  - Each card: background image, date (calendar icon), title, excerpt
- Cards have image bg with overlay

### 9. Footer
- Light gray background
- 3-column layout:
  - Column 1: Brand "Pipekit" + description + social icons (Facebook, Twitter, Instagram)
  - Column 2: "Navigation" — links list (Home, Services, Work, About, Blog, Press, Contact, Support, Privacy)
  - Column 3: "Have a Question?" — contact info + CTA
- Footer link: `https://www.componentdock.com/` ("Component Dock")

## Gherkin Scenarios

### Navbar
```gherkin
Scenario: Navbar renders with correct links
  Given the page loads
  Then a navigation bar is visible at the top
  And it contains links: Home, About, Works, Blog, Contact
  And the brand name "Pipekit" is displayed

Scenario: Navbar is responsive
  Given the viewport is mobile width
  Then a hamburger menu button is visible
  And clicking it toggles the navigation links
```

### Hero Slider
```gherkin
Scenario: Hero slider displays 3 slides
  Given the page loads
  Then the hero section is visible
  And it contains 3 carousel slides
  And each slide has a heading, paragraph, and CTA button

Scenario: Hero slider auto-advances
  Given the hero slider is on slide 1
  When 5 seconds elapse
  Then the slider advances to slide 2

Scenario: Hero slider navigation
  Given the hero slider is on slide 1
  When the user clicks dot 2
  Then slide 2 becomes active
```

### About Section
```gherkin
Scenario: About section renders split layout
  Given the user scrolls to the about section
  Then a heading "We Are Creative Agency..." is visible
  And two columns are displayed: image and text
  And a "Start A Project" CTA button is present
```

### Counter Stats
```gherkin
Scenario: Counter stats display 4 metrics
  Given the counter section is in view
  Then 4 stat columns are visible
  And each shows a number with a label (Achievements, Projects, Years, Team)
```

### Services
```gherkin
Scenario: Services section displays 4 services
  Given the user scrolls to the services section
  Then a heading "What We Offer" is visible
  And 4 service cards are rendered: Research, Design, Development, Testing
  And each card has an icon, title, and description
```

### Portfolio Gallery
```gherkin
Scenario: Portfolio shows all projects
  Given the portfolio section is visible
  Then filter tabs are displayed: All, Branding, Web Design, Illustration, Application
  And project cards are shown in a grid

Scenario: Portfolio filters by category
  Given the portfolio is showing all projects
  When the user clicks "Branding"
  Then only branding projects are visible
```

### Testimonials
```gherkin
Scenario: Testimonial section shows client feedback
  Given the testimonials section is visible
  Then a heading "What Are Clients Say" is displayed
  And a star rating (5 stars) is shown
  And testimonial text with client name and position is visible
```

### Blog
```gherkin
Scenario: Blog section displays 3 posts
  Given the blog section is visible
  Then a heading "Our Latest Blog" is shown
  And 3 blog cards are rendered
  And each card has a background image, date, title, and excerpt
```

### Footer
```gherkin
Scenario: Footer renders with all columns
  Given the footer is visible
  Then brand name "Pipekit" and description are shown
  And social media icons are present
  And navigation links are listed
  And contact section is displayed
  And a link to Component Dock is present
```

## Verification Checklist

- [ ] Navbar: dark bg, brand, 5 nav links, hamburger on mobile
- [ ] Hero: full-height, 3-slide carousel, dark overlay, headings, CTA buttons
- [ ] About: split layout (image + text), heading, 2 paragraphs, CTA
- [ ] Counter: dark overlay, 4 stat columns, animated numbers
- [ ] Services: white bg, 4 service cards with icons, CTA
- [ ] Portfolio: filter tabs, 3-column grid, hover effects
- [ ] Testimonials: star rating, testimonial text, client info
- [ ] Blog: 3 post cards, background images, date/title/excerpt
- [ ] Footer: 3 columns, brand + social, navigation, contact, Component Dock link
- [ ] Design tokens: black brand, gold accent, Montserrat font, square buttons
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Footer links to Component Dock
