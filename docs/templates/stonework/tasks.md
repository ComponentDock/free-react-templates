# Stonework — Tasks & Design Notes

## Template Info

- **New name:** stonework
- **Source:** ColorLib Balay
- **Preview:** https://preview.colorlib.com/theme/balay/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/balay-free-template.jpg
- **Category:** Business (Construction / Architecture)
- **Layout:** Fixed left sidebar navigation (20% width) + scrolling main content (80% width)

## Design Notes

### Layout Pattern

This template uses a **fixed left sidebar** layout (not a top navbar). The sidebar stays fixed while the main content scrolls. On mobile (<768px), the sidebar is hidden and toggles via a hamburger icon, sliding in from the left. Main content goes full-width on mobile.

### Visual Identity

- **Warm gold accent** (#FFC300) on a dark sidebar (#2C2C2C) with light content areas
- **Quicksand** font gives a soft, approachable feel despite the construction theme
- Section headings use **uppercase, letter-spaced** style with a short gold underline bar
- Counter section uses **white circles with gold icons** for a polished stats display
- Portfolio cards use **image overlays** that reveal content on hover
- Contact CTA uses **pill-shaped buttons** (border-radius 30px)

### Section Order (exact from original)

1. Sidebar (fixed left) — logo, nav, footer
2. Hero slider — 3 slides, background images, gold text panel
3. About — image + text + 3 feature boxes
4. Services — 4 expert items + 5 image service cards
5. Counter stats — parallax background, 4 animated counters
6. Work/portfolio — 6 project cards (mixed 2-col/4-col grid)
7. Blog — 3 blog post cards
8. Contact CTA — headline + description + pill button
9. Footer (within sidebar)

## Implementation Tasks

### 1. Project Setup

- [ ] Copy simplest existing app as starter
- [ ] Rename package to `@free-react-templates/stonework`
- [ ] Set up `public/CNAME` with `stonework.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add Quicksand font link to `index.html` (Google Fonts, weights 300, 400, 500, 700)
- [ ] Configure Tailwind theme with brand tokens: #FFC300 (gold), #2C2C2C (sidebar), #fafafa (content bg)

### 2. Sidebar Component

- [ ] Fixed left sidebar, 20% width (70% at 1200px, hidden at 768px)
- [ ] Dark charcoal (#2C2C2C) background
- [ ] Logo: "Stonework" (white, uppercase, weight 700, letter-spacing 2px)
- [ ] Nav links: Home, Projects, About, Services, Blog, Contact
- [ ] Active state: gold text (#FFC300) + 1px gold underline with scaleX animation
- [ ] Footer: copyright with "Component Dock" link
- [ ] Social icons: Facebook, Twitter, Instagram, LinkedIn (lucide-react)
- [ ] Mobile hamburger toggle button (`.js-colorlib-nav-toggle`)
- [ ] Mobile slide-in from left with transform animation

### 3. Hero Slider

- [ ] Full-width slider with 3 slides (use state-based cycling, not flexslider)
- [ ] Each slide: background image (picsum.photos), dark overlay
- [ ] Gold (#FFC300) text panel positioned bottom-right (absolute)
- [ ] Panel content: heading (h1, 44px weight 300), subtitle (h2), CTA button
- [ ] CTA button: "View Project →" — white bg, black text, 12px uppercase, letter-spacing 2px
- [ ] Button hover: transparent bg, 1px black border
- [ ] Auto-cycle slides with interval

### 4. About Section

- [ ] White bg, narrow-content container
- [ ] 2-column layout: image left (col-6), text right (col-6)
- [ ] Meta label: "Welcome" (10px, uppercase, #999, letter-spacing 5px)
- [ ] Heading: "Who We Are" (18px, uppercase, weight 500, 60px gold underline bar)
- [ ] 2 body text paragraphs
- [ ] 3 feature boxes in a row:
  - "We Are Passionate" (active/highlighted, checkmark icon)
  - "Honest & Dependable" (checkmark icon)
  - "Always Improving" (checkmark icon)
- [ ] Feature boxes: icon in a span + h3 title, flex row layout

### 5. Services Section

- [ ] White bg, narrow-content container
- [ ] Header: meta "What I do?" + heading "Here Are Some of My Expertise"
- [ ] 2-column layout:
  - Left (col-6): 4 expert items, each with:
    - Icon (HardHat, PenTool, Ruler, HardHat or similar from lucide-react)
    - Title: General Contracting, Pre-Construction Design, Building & Modeling, Construction Management
    - Description paragraph
  - Right (col-6): 2-column image card grid (5 cards total)
    - Cards: Design & Build, House Remodeling, Construction Management, Painting & Tiling, Kitchen Remodeling
    - Each card: background image with dark overlay + title text
    - Cards appear as rectangular thumbnails

### 6. Counter Stats Section

- [ ] Background image (picsum.photos) + dark overlay (rgba(0,0,0,0.4))
- [ ] 4-column grid
- [ ] Each stat:
  - White circle (100px × 100px, border-radius 50%) with gold (#FFC300) lucide icon inside
  - Animated number (40px, white, weight 700) — animate from 0 to target
  - Label text below
- [ ] Stats: Projects (1539), Employees (3653), Constructors (5987), Partners (3999)
- [ ] Counter animation triggers when section enters viewport

### 7. Work/Portfolio Section

- [ ] White bg, narrow-content container
- [ ] Header: meta "My Work" + heading "Recent Work"
- [ ] Mixed grid: 2 large cards (col-6) + 4 small cards (col-3)
  - Layout order: large, small, small | small, small, large
- [ ] Each card:
  - Background image (picsum.photos)
  - Dark overlay
  - On hover: reveal content panel with:
    - Title link (h3)
    - Category tag (span)
    - Social stats: share icon, eye icon + count, heart icon + count
- [ ] Card titles: Work 01–06, categories: Building, House/Apartment, Dining Room, etc.

### 8. Blog Section

- [ ] White bg, narrow-content container
- [ ] Header: meta "Read" + heading "Recent Blog"
- [ ] 3-column grid of blog cards
- [ ] Each card:
  - Image thumbnail (img tag, picsum.photos)
  - Meta line: date | category | comment count with icon
  - Title link (h3)
  - Excerpt paragraph
- [ ] Blog posts: "Renovating National Gallery", "Wordpress for a Beginner", "Make Website From Scratch"
- [ ] Meta: "April 14, 2018 | Web Design | 💬 4"

### 9. Contact CTA Section

- [ ] Light background (#fafafa)
- [ ] Narrow-content container
- [ ] Heading: "Get in Touch!"
- [ ] Lead paragraph (20px, white if dark bg)
- [ ] CTA button: "Contact me!" — border-radius 30px, padding 15px 30px, font-size 13px

### 10. Responsive Design

- [ ] Sidebar: hidden on mobile, hamburger toggles slide-in
- [ ] Main content: 80% → 100% width on mobile
- [ ] Hero text: 44px → 28px on mobile, full-width CTA button
- [ ] Service cards: stack to single column on mobile
- [ ] Portfolio grid: stack to single column on mobile
- [ ] Blog cards: stack to single column on mobile
- [ ] Counter stats: 4-col → 2-col on mobile

### 11. Footer

- [ ] Part of sidebar component (not separate section)
- [ ] Copyright: "© {year} All rights reserved | Made with ❤ by Component Dock"
- [ ] Social icon links (Facebook, Twitter, Instagram, LinkedIn)
- [ ] On mobile: footer appears at page bottom or within slide-in sidebar

### 12. Testing

- [ ] Component tests for Sidebar (render, nav links, active state, mobile toggle)
- [ ] Component tests for HeroSlider (slides, auto-cycle, CTA button)
- [ ] Component tests for About (heading, feature boxes)
- [ ] Component tests for Services (expert items, image cards)
- [ ] Component tests for CounterStats (stats rendering, animation trigger)
- [ ] Component tests for Portfolio (cards, hover reveal)
- [ ] Component tests for Blog (cards, meta)
- [ ] Component tests for ContactCTA (heading, button)
- [ ] App-level test for full page rendering
- [ ] 100% coverage (lines, functions, branches, statements)
