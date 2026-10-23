# Reprise — Implementation Tasks

Source design: **Reopen** (`https://colorlib.com/wp/template/reopen/`) → recreation name **reprise**. Shipped at https://reprise.free.componentdock.com.

Scope: A Portfolio Gallery template with logo and navigation, hero, portfolio and load more button sections. Recreation of ColorLib **Reopen** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page portfolio gallery.

## Component breakdown

Render order as composed in `apps/reprise/src/App.tsx`:

### 1. Navbar
- The template SHALL display a centered logo with a hamburger menu toggle.
- Scenario — Logo is visible:
  - **WHEN** the user visits the page
  - **THEN** there is a centered logo text "Reprise"
- Scenario — Hamburger toggle opens overlay menu:
  - **WHEN** the user clicks the hamburger toggle
  - **THEN** a full-screen overlay menu appears with white background and 30px #cccccc border
  - **AND** the menu contains links: Home, About, Story, Blog, Contact, More
- Scenario — Toggle icon animates to X when menu is open:
  - **WHEN** the menu is open
  - **THEN** the toggle icon changes to an X

### 2. Hero
- The template SHALL display a centered hero with title and subtitle.
- Scenario — Hero title with heart icon:
  - **WHEN** the user is on the home page
  - **THEN** there is a centered title "Handpicked design resources crafted with much ♥ and care for every detail"
  - **AND** the heart icon is pink (#f277ae)
- Scenario — Hero subtitle:
  - **WHEN** the user views the hero
  - **THEN** there is a subtitle "free downloads only on fridays" in gray (#7e7e7e)

### 3. PortfolioGrid
- The template SHALL display a 3-column masonry grid of portfolio items.
- Scenario — Grid items render:
  - **WHEN** the user scrolls below the hero
  - **THEN** there is a 3-column grid with 9 items
  - **AND** each item shows a full-bleed image
  - **AND** each item has an overlay with category name and content type (GALLERY/VIDEO/ARTICLE)
- Scenario — Grid item hover effect:
  - **WHEN** the user hovers over a grid item
  - **THEN** the image displays a subtle hover effect

### 4. LoadMore
- The template SHALL display a decorative load more button.
- Scenario — Load more arrow:
  - **WHEN** the user sees the bottom of the grid
  - **THEN** there is a centered arrow icon inside a circular #eeeeee background
  - **AND** the arrow is decorative (no pagination action)

### 5. Footer
- The template SHALL display a footer with copyright and social icons.
- Scenario — Footer copyright:
  - **WHEN** the user scrolls to the bottom
  - **THEN** there is a footer with copyright text and a heart icon
  - **AND** the attribution links to Component Dock
- Scenario — Social icon links:
  - **WHEN** the user views the footer
  - **THEN** there are social icon links: Twitter, Behance, Dribbble, Facebook, RSS
  - **AND** the footer text color is #7e7e7e

### Cross-cutting requirements

- **Responsive behavior** — The template SHALL be responsive on mobile devices.
  - Scenario — Mobile layout: **WHEN** the viewport is narrow (mobile); **THEN** the grid collapses to a single column; **AND** the hamburger menu is accessible
- **Font loading** — The template SHALL load Google Fonts.
  - Scenario — Font families loaded: **WHEN** the page loads; **THEN** the body text uses Roboto at weight 300; **AND** headings use Montserrat at weight 700; **AND** fonts load from Google Fonts CDN
- **Brand color consistency** — The template SHALL use consistent brand colors.
  - Scenario — Interactive element colors: **WHEN** any interactive element is visible; **THEN** link hover states use #f277ae; **AND** the CTA button has 1px solid #f277ae border with 50px border-radius; **AND** on hover the button fills with #f277ae and text turns white; [ ] Fonts: Roboto (300/400/700/900), Montserrat (400/700), PT Serif (400) loaded via Google Fonts; [ ] Brand color #f277ae used on links, buttons, heart icon, hover states; [ ] Body background #ECECEC, wrapper background #fff; [ ] 3-column masonry grid with image + overlay text cards; [ ] Grid items show category + content type labels; [ ] Hamburger menu toggle with animated X state; [ ] Full-screen overlay menu with #cccccc border; [ ] Hero with centered title + subtitle; [ ] Load more decorative arrow in circular gray background; [ ] Footer with copyright, heart icon, Component Dock link, social icons; [ ] Responsive: single-column grid on mobile; [ ] No references to ColorLib in app code (provenance only in spec/TEMPLATES.md); [ ] Footer links to https://www.componentdock.com/; [ ] Package: @free-react-templates/reprise; [ ] CNAME: reprise.free.componentdock.com; [ ] Homepage: https://reprise.free.componentdock.com

## Verification

- [x] `apps/reprise` ships on https://reprise.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/reprise/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/reprise/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reprise/public/CNAME` = `reprise.free.componentdock.com`
  and the package `homepage` = `https://reprise.free.componentdock.com`.
