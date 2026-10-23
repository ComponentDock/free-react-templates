# Zestly — Implementation Tasks

Source design: **Tasty Recipes** (`https://colorlib.com/wp/template/tasty-recipes/`) → recreation name **zestly**. Shipped at https://zestly.free.componentdock.com.

Scope: Zestly is a free cooking and recipe website template that recreates the ColorLib Tasty Recipes design as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application. It provides a visually appealing layout for showcasing recipes, cooking videos, dishes, customer testimonials, and app download links.

## Component breakdown

Render order as composed in `apps/zestly/src/App.tsx`:

### 1. Navbar
- Users SHALL see a sticky top navigation bar with the Zestly logo, navigation links (Home, Recipes, Videos, Dishes, Feedback, Contact), and a search icon. On mobile, a hamburger menu toggle SHALL be visible that expands/collapses the navigation.
- Scenario — Desktop navbar renders all links:
  - **WHEN** the user loads the page on a desktop viewport
  - **THEN** the navbar displays the Zestly logo, six navigation links, and a search icon
- Scenario — Mobile menu toggle:
  - **WHEN** the user clicks the mobile menu toggle button
  - **THEN** the mobile navigation menu expands and the toggle icon changes to an X

### 2. Hero
- Users SHALL see a full-width hero section with a background image, headline text, supporting copy, and an "Explore Recipes" call-to-action button.
- Scenario — Hero displays headline and CTA:
  - **WHEN** the user loads the page
  - **THEN** the hero section displays the headline "Chicken dish with per boiled egg", supporting text, and a link to the recipes section

### 3. Recipes
- Users SHALL see a 3-column grid of recipe cards, each with a circular image, recipe title, category badge, cook time, and a "View Full Recipe" link.
- Scenario — Three recipe cards are displayed:
  - **WHEN** the user scrolls to the recipes section
  - **THEN** three recipe cards are shown with titles "Egg Manchurian", "Pure Vegetable Bowl", and "Egg Masala Ramen"

### 4. RecipeVideos
- Users SHALL see a split layout with a heading, description, and play button on the left, and stacked video thumbnails on the right.
- Scenario — Video section renders heading and play button:
  - **WHEN** the user scrolls to the videos section
  - **THEN** the heading "Recipe videos that never misses any portion" and a play button are visible

### 5. Dishes
- Users SHALL see a 3-column grid of dish cards, each with a circular image, title, and description.
- Scenario — Three dish cards are displayed:
  - **WHEN** the user scrolls to the dishes section
  - **THEN** three dish cards are shown with titles "Birthday Catering", "Corporate Events", and "Family Gatherings"

### 6. LatestTrending
- Users SHALL see a call-to-action section with a heading, subtext, and a "View all Recipes" button linking to the recipes section.
- Scenario — Trending section displays CTA:
  - **WHEN** the user scrolls to the trending section
  - **THEN** the heading "Discover latest trending recipes" and a "View all Recipes" button are visible

### 7. CustomerFeedback
- Users SHALL see a testimonials section with customer cards showing avatar, name, role, and quote text.
- Scenario — Three testimonials are displayed:
  - **WHEN** the user scrolls to the feedback section
  - **THEN** three customer testimonials with names "Adame Nesane", "Maria Santos", and "James Wilson" are shown

### 8. DownloadApp
- Users SHALL see a split layout with phone mockup images on the left and a heading with App Store and Play Store download buttons on the right.
- Scenario — Download section renders store buttons:
  - **WHEN** the user scrolls to the download section
  - **THEN** App Store and Play Store download buttons are visible

### 9. Footer
- Users SHALL see a footer with four columns (Top Products, Quick Links, Features, Subscribe), a newsletter form, copyright text linking to Component Dock, and social media icons.
- Scenario — Footer displays all columns and Component Dock link:
  - **WHEN** the user scrolls to the footer
  - **THEN** four link columns are visible, the copyright text links to https://www.componentdock.com/, and social icons are displayed
- Scenario — Newsletter form prevents default submission:
  - **WHEN** the user types an email and clicks Subscribe
  - **THEN** the form does not navigate away from the page

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/zestly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/zestly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/zestly` ships on https://zestly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/zestly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/zestly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/zestly/public/CNAME` = `zestly.free.componentdock.com`
  and the package `homepage` = `https://zestly.free.componentdock.com`.
