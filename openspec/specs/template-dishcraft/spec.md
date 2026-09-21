# Template: Dishcraft (Recipe Landing Page)

## Purpose

Recreation of ColorLib **Tasty Recipes** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source:** [ColorLib Tasty Recipes](https://colorlib.com/wp/template/tasty-recipes/)
- **Preview:** https://preview.colorlib.com/theme/tastyrecipes/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Design tokens extracted from preview CSS** (see below)
- **Screenshot reference:** `tastyrecipes-free-template.jpg` — warm food-photography hero, white recipe cards, dark footer with newsletter

## Design Tokens

| Token | Value | Source |
|---|---|---|
| Body font | `"Roboto", sans-serif` | `style.css` `body` |
| Heading font | `"Satisfy", cursive` | `style.css` `h1-h5` |
| Brand color (primary) | `#FFC000` (amber gold) | `.boxed-btn`, `.line_btn`, `.owl-dots .active` |
| Secondary accent | `#918DFE` / `#615CFD` (purple) | `.owl-nav div` border / hover |
| Text dark | `#1F1F1F` | `a, button` |
| Text heading | `#000000` | `h1-h5` |
| Body text | `#777777` | `p` |
| Light border | `#EEEEEE` | `.single_customer` border |
| Button radius (line_btn) | `30px` (pill) | `.line_btn` border-radius |
| Button radius (boxed-btn3) | `50px` (pill) | `.boxed-btn3` border-radius |
| Testimonial card radius | `5px` | `.single_customer` |
| Testimonial avatar radius | `50%` (circle) | `.single_customer .thumb` |
| Hero background | Full-screen image (`banner.png`), text overlay | `.slider_bg_1` |
| Trending section background | Full-width image (`recepie/banner.png`) | `.latest_trand_area` |
| Footer background | `#000000` (solid black) | `.footer` |
| Page background | White (default) | no explicit override |

## Section Structure (top → bottom)

1. **Navbar** — Logo left, centered nav links (Home, About, Recipes, Blog ▾, Pages ▾, Contact), search icon right, sticky on scroll, mobile hamburger menu
2. **Hero Slider** — Full-viewport background image, centered large cursive headline, no CTA button (text-only hero)
3. **Featured Recipes** — 3-column grid (4-col → 2-col → 1-col responsive). Each card: recipe image, title (Satisfy font), category tag ("Appetizer"), cook time ("Time Needs: 30 Mins"), "View Full Recipe" outline pill button
4. **Recipe Videos** — 2-column split: left has cursive heading + paragraph + circular purple play button + "Watch Video" label; right has stacked video thumbnail images
5. **Dish Showcase** — Horizontal scrollable row of 4 dish cards: image + title + short description paragraph
6. **Trending CTA** — Full-width parallax/image background, centered uppercase small text + large cursive heading + solid gold pill "View all Recipes" button
7. **Customer Testimonials** — Section heading + paragraph, horizontal carousel of testimonial cards: circular avatar + name (Satisfy) + role (uppercase small) + quote text; cards have light border, 5px radius
8. **Download App** — 2-column: left has stacked phone mockup images, right has cursive heading + App Store / Play Store download buttons (dark background, icon + text)
9. **Footer** — 5-column top area (Top Products, Quick Links, Features, Resources, Subscribe with email input + arrow button), dark `#000` background; bottom copyright bar with social icons (Facebook, Twitter, Dribbble, Behance)

## Gherkin Requirements

### Feature: Dishcraft — Recipe Landing Page

#### Scenario: Navbar renders with all navigation links
- **Given** the user visits the Dishcraft page
- **Then** a sticky navbar is visible at the top
- **And** it contains links: Home, About, Recipes, Blog, Pages, Contact
- **And** a search icon is visible on the right
- **And** on mobile viewport (< 1024px) a hamburger menu icon replaces the nav links

#### Scenario: Hero section displays with background image and headline
- **Given** the user visits the Dishcraft page
- **Then** a full-viewport hero section is visible
- **And** it shows a large cursive headline (Satisfy font, white text)
- **And** the background is a food photography image

#### Scenario: Featured recipes section shows three recipe cards
- **Given** the user scrolls to the Featured Recipes section
- **Then** three recipe cards are displayed in a row
- **And** each card shows a recipe image, title, category tag, cook time, and "View Full Recipe" button
- **And** cards stack vertically on mobile

#### Scenario: Recipe videos section shows play button and thumbnails
- **Given** the user scrolls to the Recipe Videos section
- **Then** a left column shows a cursive heading, paragraph text, and a circular play button
- **And** a right column shows stacked video thumbnail images
- **And** clicking the play button would open a video (link/handler)

#### Scenario: Dish showcase displays horizontal scrollable cards
- **Given** the user scrolls to the Dish Showcase section
- **Then** four dish cards are visible in a horizontal row
- **And** each card shows an image, title, and short description

#### Scenario: Trending CTA section with parallax background
- **Given** the user scrolls to the Trending section
- **Then** a full-width section with a background image is displayed
- **And** centered text includes an uppercase label and a large cursive heading
- **And** a solid gold pill button "View all Recipes" is visible

#### Scenario: Customer testimonials carousel
- **Given** the user scrolls to the Testimonials section
- **Then** a section heading "Feedback From Customers" is visible
- **And** testimonial cards are displayed in a carousel
- **And** each card has a circular avatar, name, role, and quote
- **And** carousel navigation dots are present

#### Scenario: Download app section
- **Given** the user scrolls to the Download App section
- **Then** phone mockup images are displayed on the left
- **And** a cursive heading and App Store / Play Store buttons are on the right
- **And** buttons are dark with white icon + text

#### Scenario: Footer renders with columns and newsletter
- **Given** the user scrolls to the footer
- **Then** a dark (#000) background footer is visible
- **And** it contains columns: Top Products, Quick Links, Features, Resources, Subscribe
- **And** the Subscribe column has an email input and submit button
- **And** a copyright bar with social icons is at the bottom
- **And** the footer links to `https://www.componentdock.com/` ("Component Dock")

#### Scenario: Responsive layout adapts to mobile
- **Given** the user views the page on a 375px wide viewport
- **Then** the navbar collapses to a hamburger menu
- **And** recipe cards stack vertically
- **And** the hero text size reduces
- **And** footer columns stack

## Verification Checklist

- [ ] Navbar sticky on scroll, all links present, mobile hamburger works
- [ ] Hero: full-viewport background image, white Satisfy heading centered
- [ ] Featured Recipes: 3 cards with image, title, tag, time, pill button; responsive grid
- [ ] Recipe Videos: 2-column split, play button circle, thumbnail stack
- [ ] Dish Showcase: 4 horizontal cards with image + title + description
- [ ] Trending CTA: parallax/image background, centered text, gold pill button
- [ ] Testimonials: carousel with avatar circles, names, roles, quotes, dots
- [ ] Download App: phone mockups left, heading + store buttons right
- [ ] Footer: 5-column top, dark bg, newsletter input, copyright bar, social icons
- [ ] Footer links to ComponentDock
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md/PR)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
