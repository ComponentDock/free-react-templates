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

## Requirements

### Feature: Pennant template behaviour

**Background**
- **GIVEN** the app is mounted at the root URL
- **AND** the viewport is 1280×800

#### Scenario: Navbar displays on load

- **WHEN** the page loads
- **THEN** a sticky navbar is visible at the top
- **AND** it contains a logo on the left
- **AND** it contains navigation links: Home, Pages (dropdown), Categories (mega-menu), About, Contact
- **AND** it contains a search icon and social icons (Facebook, Twitter, Instagram, Pinterest, RSS)

#### Scenario: Hero carousel shows blog slides

- **WHEN** the hero section is visible
- **THEN** there are at least 3 carousel slides
- **AND** each slide has a background image on the left half
- **AND** each slide shows a post date, title, excerpt, and "Read More" button on the right half
- **AND** the slides auto-rotate or have navigation dots

#### Scenario: Featured post is prominent

- **GIVEN** the blog content area is visible
- **THEN** the first post spans the full content width
- **AND** it shows a large thumbnail image
- **AND** it shows a post date, title, excerpt
- **AND** it shows author name, comment count, and social share icons below

#### Scenario: Blog post grid shows 6 posts in 2 columns

- **GIVEN** the featured post is rendered
- **THEN** 6 additional blog posts appear below in a 2-column grid
- **AND** each post shows a thumbnail, date, title, and short excerpt

#### Scenario: Pagination controls are present

- **GIVEN** the blog posts grid is rendered
- **THEN** a "Newer" and "Older" pagination control is visible below the grid

#### Scenario: Sidebar widgets render

- **GIVEN** the sidebar column is visible (right side, 1/3 width on desktop)
- **THEN** the "About Me" widget shows a photo, signature image, and bio text
- **AND** the "Subscribe & Follow" widget shows social media icon buttons
- **AND** the "Latest Posts" widget shows 5 posts with thumbnails and titles
- **AND** the "Newsletter" widget shows an email input and send button
- **AND** the "Popular Tags" widget shows tag pill links

#### Scenario: Instagram feed section displays

- **GIVEN** the page scrolls past the blog content
- **THEN** an Instagram feed section shows 8 images in a horizontal row
- **AND** each image has a hover overlay with an Instagram icon

#### Scenario: Footer renders

- **GIVEN** the page scrolls to the bottom
- **THEN** the footer shows a row of social links (Facebook, Twitter, Google+, LinkedIn, Instagram, Vimeo, YouTube)
- **AND** a copyright line with "Made with ❤ by" attribution
- **AND** a "Component Dock" link (as required by conventions)

#### Scenario: Responsive layout adjusts

- **GIVEN** the viewport width is less than 768px
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero carousel stacks vertically
- **AND** the blog grid switches to single column
- **AND** the sidebar moves below the blog posts

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
