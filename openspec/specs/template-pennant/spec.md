# Template: Pennant (Blog & Magazine)

## Purpose

Recreation of ColorLib **Nikki** — a blog and magazine template with a hero carousel, featured blog posts, sidebar widgets, and an Instagram feed.

- **Source slug:** `nikki`
- **Preview URL:** https://preview.colorlib.com/theme/nikki/
- **ColorLib page:** https://colorlib.com/wp/template/nikki/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens (extracted from preview CSS)

| Token            | Value                  | Usage                                       |
| ---------------- | ---------------------- | ------------------------------------------- |
| brand            | `#d1bb95`              | Tan/gold — buttons hover, accent links, tags |
| text-dark        | `#191919`              | Headings, button default text                |
| text-body        | `#595959`              | Paragraphs, section descriptions             |
| text-light       | `#a6a6a6`              | Meta dates, secondary text                   |
| bg-white         | `#ffffff`              | Page background, cards, nav                  |
| bg-dark          | `#191919`              | Footer background                            |
| overlay-dark     | `rgba(21,4,48,0.89)`   | Hero slide overlay (purple-black)            |
| font-family      | `"Barlow", sans-serif` | All body text                                |
| btn-radius       | `2px`                  | Buttons (nikki-btn)                          |
| btn-default      | white bg, dark text    | "Read More" buttons                          |
| btn-hover        | `#d1bb95` bg, white text | Hover / active state                       |

## Gherkin requirements

### Background
  Given the app is mounted at the root URL
  And the viewport is 1280×800

### Scenario: Navbar displays on load
  When the page loads
  Then a sticky navbar is visible at the top
  And it contains a logo on the left
  And it contains navigation links: Home, Pages (dropdown), Categories (mega-menu), About, Contact
  And it contains a search icon and social icons (Facebook, Twitter, Instagram, Pinterest, RSS)

### Scenario: Hero carousel shows blog slides
  When the hero section is visible
  Then there are at least 3 carousel slides
  And each slide has a background image on the left half
  And each slide shows a post date, title, excerpt, and "Read More" button on the right half
  And the slides auto-rotate or have navigation dots

### Scenario: Featured post is prominent
  Given the blog content area is visible
  Then the first post spans the full content width
  And it shows a large thumbnail image
  And it shows a post date, title, excerpt
  And it shows author name, comment count, and social share icons below

### Scenario: Blog post grid shows 6 posts in 2 columns
  Given the featured post is rendered
  Then 6 additional blog posts appear below in a 2-column grid
  And each post shows a thumbnail, date, title, and short excerpt

### Scenario: Pagination controls are present
  Given the blog posts grid is rendered
  Then a "Newer" and "Older" pagination control is visible below the grid

### Scenario: Sidebar widgets render
  Given the sidebar column is visible (right side, 1/3 width on desktop)
  Then the "About Me" widget shows a photo, signature image, and bio text
  And the "Subscribe & Follow" widget shows social media icon buttons
  And the "Latest Posts" widget shows 5 posts with thumbnails and titles
  And the "Newsletter" widget shows an email input and send button
  And the "Popular Tags" widget shows tag pill links

### Scenario: Instagram feed section displays
  Given the page scrolls past the blog content
  Then an Instagram feed section shows 8 images in a horizontal row
  And each image has a hover overlay with an Instagram icon

### Scenario: Footer renders
  Given the page scrolls to the bottom
  Then the footer shows a row of social links (Facebook, Twitter, Google+, LinkedIn, Instagram, Vimeo, YouTube)
  And a copyright line with "Made with ❤ by" attribution
  And a "Component Dock" link (as required by conventions)

### Scenario: Responsive layout adjusts
  Given the viewport width is less than 768px
  Then the navbar collapses to a hamburger menu
  And the hero carousel stacks vertically
  And the blog grid switches to single column
  And the sidebar moves below the blog posts

## Verification checklist

- [ ] Navbar renders with all nav items and social icons
- [ ] Hero carousel displays slides with images, titles, excerpts, and CTA buttons
- [ ] Featured post spans full width with large image
- [ ] 6 blog posts render in a 2-column grid
- [ ] Pagination (Newer/Older) is present
- [ ] Sidebar: About Me, Social, Latest Posts, Newsletter, Tags widgets
- [ ] Instagram feed shows 8 images with hover effect
- [ ] Footer has social links + copyright + Component Dock link
- [ ] Responsive: hamburger menu, single-column, sidebar below on mobile
- [ ] Brand color #d1bb95 used for accent/links/hover states
- [ ] Font family Barlow applied throughout
- [ ] 100% test coverage (lines, functions, branches, statements)
