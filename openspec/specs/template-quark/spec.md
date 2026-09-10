# Template: Quark (Business / Multi-page)

## Purpose

Recreation of ColorLib's **Atomic** template.
- Source: https://colorlib.com/wp/template/atomic/
- Live preview: https://preview.colorlib.com/theme/atomic/
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript
- Name origin: "Quark" is a subatomic particle — thematically related to "Atomic" but a distinct, original name.

## Design Tokens

Extracted from the live preview's `css/style.css` and screenshot analysis.

| Token | Value | Notes |
| --- | --- | --- |
| Primary color | `#0389FF` | Blue — navbar, buttons, counters, active states |
| Primary hover | `#0075dc` | Darker blue on hover |
| Primary active | `#006ecf` | Even darker on active |
| Body text | `#999999` | Medium gray paragraphs |
| Headings | `#000000` | Pure black |
| Light background | `#f8f9fa` | Service sections, footer |
| White background | `#ffffff` | Features, about, testimonials sections |
| Border gray | `#cccccc` | Form inputs |
| Muted label | `#b3b3b3` | Counter labels, h6 subheadings |
| Font family | `"Work Sans", arial, sans-serif` | Google Font, weights 300/400/700 |
| Button radius | `0px` | Square corners, no border-radius |
| Button text | `uppercase`, `letter-spacing: 0.1em`, `font-size: 14px` | All buttons |
| Button shadow | `none` | Flat buttons |
| Section padding | `7em 0` | All sections and footer |
| Container max | `1800px` | `max-width: 1800px` on `.container-fluid` |
| Cover min-height | `800px` | Hero section |
| Navbar mobile | `background-color: #0389FF` | Blue bar on mobile |
| Navbar desktop | `transparent` | Overlaps hero image |
| Navbar text (mobile) | `#ffffff` | White on blue background |
| Counter number | `font-size: 50px`, `color: #fff` | White on primary bg |
| Counter label | `text-transform: uppercase`, `opacity: 0.5` | Subdued uppercase |
| Footer heading | `text-transform: uppercase`, `font-size: 15px`, `color: #cccccc` | Gray uppercase |
| Overlap card | `border-radius: 7px`, `box-shadow: 0 10px 20px -8px rgba(0,0,0,0.2)` | Floating card effect |
| Thumbnail hover | `opacity` transition + dark overlay `#000` at `0.1–0.5` | Gallery cards |

## Section Structure (top to bottom)

### 1. Navbar
- Logo text "Quark" (left)
- Nav links (right): Home, About, Services (dropdown with 3 sub-items), Gallery, Blog, Contact
- Mobile: hamburger menu, blue background `#0389FF`, white text
- Desktop (≥768px): transparent overlay on hero, white text
- Sticky on scroll (with background transition)

### 2. Hero / Cover
- Split layout: left text content + right image
- Left: large heading "Design a better website template." (h1, `font-size: 50px` on desktop)
- Subtext paragraph in gray `#999999`
- CTA button "FREE DOWNLOAD" — primary blue `#0389FF`, square, uppercase
- Right: large image with circular play button overlay (border + triangle icon)
- Background: image or gradient from light beige
- Full viewport height (`min-height: 800px`)

### 3. Features (3-column)
- White background section
- 3 equal columns, each: icon (gray line-art) + heading (h3) + paragraph
- Icons: light bulb, pencil, infinity symbol
- Consistent spacing and typography

### 4. About
- White background section
- Heading: "Good Design is a Good Start" (h2)
- Link text
- Multiple paragraphs describing the service/company
- Text-heavy left-aligned layout

### 5. Services (6-item grid)
- Light background `#f8f9fa`
- 6 items in a grid (likely 3x2)
- Each: icon (line-art, gray `#d6dadd`) + heading (h3) + paragraph
- Topics: Regular Update, Infinite Possibilities, Good Security, Orange for Carrots, Intuitive Thinking, Play Video
- CTA link "More Features"

### 6. Gallery (4 image cards)
- Light background (same section as services)
- 4 image thumbnails with hover overlay effect
- Dark overlay (`#000` at 0.1 opacity, 0.5 on hover)
- Text overlay slides in on hover: title (h2) + category tags
- Categories: "Design, Illustration"

### 7. Counter (3 stats)
- Primary blue background `#0389FF`
- 3 counters side by side
- Each: large white number (`font-size: 50px`) + uppercase label (opacity 0.5)
- Animated count-up on scroll

### 8. Testimonials
- White background section
- Carousel/slider with testimonial quotes
- Each: large quote marks (h2, 100px), quoted text, author info
- Navigation dots or arrows

### 9. Footer
- Light background `#f8f9fa`
- 4 columns: About (text), Learn More (links), Support (links), About Us (links)
- Social links row ("Connect With Us")
- "Download for free" link
- Copyright line
- Footer link must point to `https://www.componentdock.com/` ("Component Dock")

## Gherkin Requirements

### Feature: Navbar

  Scenario: Desktop navbar renders transparent over hero
    Given the viewport is ≥ 768px wide
    When the page loads
    Then the navbar background is transparent
    And the nav links are white text
    And the logo text reads "Quark"

  Scenario: Mobile navbar has blue background
    Given the viewport is < 768px wide
    When the page loads
    Then the navbar background is #0389FF
    And a hamburger toggle is visible
    And nav links are hidden

  Scenario: Hamburger menu opens on click
    Given the viewport is < 768px wide
    When the user clicks the hamburger toggle
    Then the mobile menu opens with all nav links visible

  Scenario: Navbar becomes solid on scroll
    Given the viewport is ≥ 768px wide
    When the user scrolls past the hero
    Then the navbar background becomes solid #0389FF

### Feature: Hero Cover

  Scenario: Hero displays heading and CTA
    Given the page loads
    Then the hero heading reads "Design a better website template."
    And a paragraph of descriptive text is visible
    And a "Free Download" CTA button is visible
    And the CTA button is primary blue #0389FF

  Scenario: Hero has play button
    Given the page loads
    Then a circular play button is visible on the hero image

### Feature: Features Section

  Scenario: Three feature cards render
    Given the page loads
    Then 3 feature cards are displayed in a row
    And each card has an icon, heading, and paragraph
    And the section has a white background

### Feature: About Section

  Scenario: About section displays content
    Given the page loads
    Then the heading "Good Design is a Good Start" is visible
    And a descriptive link is present
    And multiple paragraphs of text are shown

### Feature: Services Section

  Scenario: Six service items render
    Given the page loads
    Then 6 service items are displayed in a grid
    And each item has an icon, heading, and description
    And the section background is light gray #f8f9fa
    And a "More Features" CTA link is visible

### Feature: Gallery Section

  Scenario: Four gallery cards render
    Given the page loads
    Then 4 gallery image cards are displayed
    And hovering a card shows an overlay with title and category

### Feature: Counter Section

  Scenario: Three counters display on primary background
    Given the page loads
    Then 3 counter items are shown
    And the background is primary blue #0389FF
    And each counter has a large white number and an uppercase label

### Feature: Testimonials Section

  Scenario: Testimonial carousel shows quotes
    Given the page loads
    Then testimonial quotes are displayed
    And navigation controls are available

### Feature: Footer

  Scenario: Footer renders four columns
    Given the page loads
    Then the footer has 4 columns: About, Learn More, Support, About Us
    And social links are shown
    And a "Component Dock" link points to https://www.componentdock.com/
    And a copyright line is displayed

## Verification Checklist

- [ ] Navbar: transparent on desktop, blue on mobile, solid on scroll
- [ ] Hero: heading, subtext, CTA button, play button, full-height
- [ ] Features: 3-column grid with icons, headings, text
- [ ] About: heading, link, paragraphs
- [ ] Services: 6-item grid on light background with CTA
- [ ] Gallery: 4 image cards with hover overlay
- [ ] Counter: 3 stats on blue background
- [ ] Testimonials: carousel with quotes
- [ ] Footer: 4 columns, social links, Component Dock link, copyright
- [ ] Design tokens: #0389FF primary, Work Sans font, square buttons, uppercase
- [ ] Responsive: mobile hamburger menu, stacked layouts
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] All placeholder images use picsum.photos
