# Template: Lookwell (Photography)

## Purpose

Recreation of ColorLib "The Look" — a dark-themed photography/photo gallery template with hero carousel, image gallery grid, blog section, and contact form.

- **Source**: https://colorlib.com/wp/template/thelook/
- **Preview**: https://preview.colorlib.com/theme/thelook/
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript
- **Design category**: Photography / Photo Gallery

## Design tokens (extracted from preview)

| Token | Value |
|-------|-------|
| Font family | Lato, sans-serif (Google Fonts) |
| Primary background | #081624 (dark navy) |
| Secondary backgrounds | #222222, #333 |
| Light section background | #f6f7f9 |
| White | #fff |
| Body text | #515151, #5c5c5c, #828282 |
| White text on dark | #fff |
| Accent border (decorative) | #673ab7 (purple), #f44336 (red) |
| Border radius | 0 (sharp corners default), 60px (pill buttons) |
| Hero overlay | Dark semi-transparent overlay (sm-overlay) |
| Button style | Pill-shaped (border-radius: 60px), border: 2px solid, uppercase text |
| Section backgrounds | Hero: dark image + overlay; Gallery: white #fff; Blog: light #f6f7f9; Contact: dark #081624; Footer: #222222 |

## Section structure (in order)

1. **Header/Navbar** — Logo ("The Look") + horizontal nav links: Home, Gallery, Artists, Shop, News, Contact. Sticky/transparent on hero.
2. **Hero Slider** — Full-width Owl-carousel style slider with 3 slides. Each slide: background image with dark overlay, centered text — title "The Look", subtitle "Gallery", artist name "John Doe Showcase", date range "23 January - 14 February", "Read More" CTA button (pill, bordered).
3. **Gallery Section** — Two-column layout on white background. Left column: editorial quote ("The camera makes you forget you're there...") + descriptive paragraph. Right side: 6 gallery items in 2-column grid (3 per column). Each item: image thumbnail, title "Red Passion 2017", artist "Artist: John Doe", "view gallery" link. Bottom: "see all galleries" link aligned right.
4. **Blog Section** — Light background (#f6f7f9). Title "Latest from the blog". Two blog post cards side by side. Each: thumbnail image, category tag "photography", title, date, excerpt paragraph, "Read More" link.
5. **Contact Section** — Dark background (#081624). Title "Get in touch". Description paragraph. "send message" button (pill, white border on dark).
6. **Footer** — Very dark background (#222222). Copyright text with "Component Dock" link replacing Colorlib attribution.

## Gherkin requirements

### Feature: Lookwell — Photography Gallery Template

#### Scenario: Header navigation renders correctly
  - Given the user loads the Lookwell page
  - Then a header with the logo "Lookwell" is visible
  - And navigation links for Home, Gallery, Artists, Shop, News, and Contact are present
  - And clicking each nav link scrolls to the corresponding section

#### Scenario: Hero slider displays slides with overlay
  - Given the user is on the Lookwell page
  - Then a full-width hero slider is visible with 3 slides
  - And each slide has a dark semi-transparent overlay over a background image
  - And each slide displays a title, subtitle, artist name, date range, and "Read More" button
  - And the slider auto-advances or responds to navigation controls

#### Scenario: Gallery section shows images in grid layout
  - Given the user scrolls to the gallery section
  - Then a two-column layout is displayed
  - And the left column contains an editorial quote and descriptive paragraph
  - And 6 gallery items are shown in a 2-column grid
  - And each gallery item has a thumbnail, title, artist name, and "view gallery" link
  - And a "see all galleries" link is visible at the bottom right

#### Scenario: Blog section shows latest posts
  - Given the user scrolls to the blog section
  - Then the heading "Latest from the blog" is visible
  - And 2 blog post cards are displayed side by side
  - And each card has a thumbnail image, category tag, title, date, excerpt, and "Read More" link

#### Scenario: Contact section has message form
  - Given the user scrolls to the contact section
  - Then a dark background section with "Get in touch" heading is visible
  - And a description paragraph is shown
  - And a "send message" button is present

#### Scenario: Footer displays copyright with Component Dock link
  - Given the user scrolls to the footer
  - Then a copyright notice is visible
  - And a link to "https://www.componentdock.com/" labeled "Component Dock" is present

#### Scenario: Responsive layout adapts to mobile
  - Given the user views the page on a mobile viewport (375px width)
  - Then the navigation collapses to a hamburger menu
  - And the hero slider text is readable and centered
  - And gallery items stack to single column
  - And blog cards stack vertically

## Verification checklist

- [ ] Font loaded: Lato from Google Fonts
- [ ] Hero slider: 3 slides with dark overlay, auto-advance, navigation dots/arrows
- [ ] Gallery: 2-column layout, quote left + 6 items grid right, "see all galleries" link
- [ ] Blog: 2 cards side by side on light background
- [ ] Contact: dark background, heading, description, send message button
- [ ] Footer: dark background, copyright with Component Dock link
- [ ] Responsive: hamburger nav on mobile, stacked gallery/blog
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] All images use picsum.photos placeholders
- [ ] Design tokens match: #081624 primary dark, Lato font, pill buttons, sharp corners default
