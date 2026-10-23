# Template: Cinelux (Portfolio)
<!-- prep-status: shipped-as=reelcraft -->
> **SHIPPED-UNDER** — the ColorLib `videograph` design this prep describes already
> ships as `apps/reelcraft` (<https://reelcraft.free.componentdock.com>).
> Do not scaffold `apps/cinelux`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-reelcraft/spec.md`.

## Purpose

Recreation of ColorLib's **Videograph** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page portfolio site for videographers and creative professionals.

- **Source:** https://colorlib.com/wp/template/videograph/
- **Preview:** https://preview.colorlib.com/theme/videograph/
- **Category:** Portfolio
- **New name:** `cinelux` (cinema + lux, evoking light/film)
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript (strict)
- **Tests:** Vitest + Testing Library, 100% coverage enforced

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| **Primary accent** | `#00bfe7` (cyan/blue) | Buttons, accent highlights, hover states |
| **Dark background** | `#100028` (deep indigo-black) | Work gallery, counter section backgrounds |
| **Darkest background** | `#0a0119` (near-black purple) | Footer background |
| **Body text** | `#777777` / `#373b3e` | Paragraphs, secondary text |
| **Headings** | `#ffffff` (white) | All section titles, hero headings |
| **Section title span** | `#ffffff` uppercase, letter-spacing 2px | Subtitle labels above headings |
| **Font: headings** | `"Play", sans-serif` | Hero h2, section titles, buttons |
| **Font: body** | `"Josefin Sans", sans-serif` | Body text, navigation, paragraphs |
| **Button style** | White text, uppercase, letter-spacing 2px, padding 14px 32px, `font-family: Play`, decorative corner brackets (CSS pseudo-elements) |
| **Header** | Transparent overlay on hero, white border-bottom `rgba(255,255,255,0.1)`, absolute positioned |
| **Hero** | Full-width background image slider (Swiper.js), left-aligned text overlay |
| **Section padding** | `.spad` = 100px top/bottom |
| **Grid** | Bootstrap-style 12-column grid (col-lg-3/4/6/8) |
| **Footer** | Dark purple-black `#0a0119`, logo left + social icons right, 3-column link columns, copyright bar |

### Color palette summary

- Background gradient: dark purple-black (`#0a0119` → `#100028` → `#1a083d`)
- Accent: bright cyan `#00bfe7`
- Text: white on dark, `#777` on light
- Buttons: white text on transparent/bracketed outline

## Section Structure (in order)

1. **Header/Navbar** — Transparent, absolute-positioned. Logo left, nav menu center, social icons right. White text. Mobile hamburger.
2. **Hero Slider** — Full-width Swiper carousel (3 slides). Background images. Left-aligned text: subtitle ("For website and video editing"), heading ("Videographer's Portfolio"), CTA button ("See more about us"). Pagination dots bottom-left.
3. **Services** — "What We do?" heading. Left column: title + description + CTA. Right column: 2×2 grid of service cards with icon, title, description. Items: Motion graphics, Scriptwriting and editing, Video distribution, Video hosting.
4. **Work Gallery** — Masonry-style grid of video/image thumbnails with hover overlay. Mix of wide, large, and small items. Background: `#100028`.
5. **Counter/Stats** — 4-column stat counter row. Icons + animated numbers + labels: Completed Projects (230), Happy Clients (1068), Perspective Clients (230), + one more. Background: `#100028`.
6. **Team** — "OUR Team" heading. 4-column grid of team member cards with background images, name, role ("Videographer"), social icons overlay. Background image.
7. **Blog/Latest** — "Blog Update" heading. Swiper carousel of 3 blog post cards: title, date + comment count, excerpt, "Read more" link.
8. **Call-to-Action** — Full-width background image. Large heading ("Fresh Ideas, Fresh Moments Giving Wings to your Stories."), subtitle, CTA link ("Start your stories").
9. **Footer** — Dark background. Top row: logo left, social icons right. Middle: 3-column layout (About us text, Who we are links, Newsletter signup). Copyright bar at bottom.

## Requirements

### Feature: Cinelux Template

#### Scenario: Header renders with transparent overlay

- **GIVEN** the user loads the page
- **WHEN** the header is visible
- **THEN** the header has a transparent background with a subtle white border-bottom
- **AND** the logo is displayed on the left
- **AND** the navigation links are centered
- **AND** social media icons are on the right
- **AND** all text is white

#### Scenario: Hero slider displays with background images

- **GIVEN** the user loads the page
- **WHEN** the hero section is rendered
- **THEN** a full-width background image slider is displayed
- **AND** each slide shows a subtitle text, a heading, and a CTA button
- **AND** pagination dots are visible at the bottom-left
- **AND** slides auto-rotate or respond to user interaction

#### Scenario: Services section shows four service items

- **GIVEN** the user scrolls to the services section
- **WHEN** the services section is in view
- **THEN** a heading "What We do?" is displayed
- **AND** a description paragraph and "View all services" button are shown on the left
- **AND** four service cards are arranged in a 2×2 grid on the right
- **AND** each card has an icon, title, and description

#### Scenario: Work gallery displays masonry grid

- **GIVEN** the user scrolls to the work section
- **WHEN** the gallery is rendered
- **THEN** a masonry-style grid of project thumbnails is shown
- **AND** items have varying sizes (wide, large, small)
- **AND** hovering an item reveals an overlay with project info
- **AND** the section background is dark indigo

#### Scenario: Counter section shows animated stats

- **GIVEN** the user scrolls to the counter section
- **WHEN** the counter section is visible
- **THEN** four stat items are displayed in a row
- **AND** each item shows an icon, an animated number, and a label
- **AND** the background is dark indigo

#### Scenario: Team section displays member cards

- **GIVEN** the user scrolls to the team section
- **WHEN** the team section is rendered
- **THEN** a heading "OUR Team" is displayed
- **AND** four team member cards are shown in a row
- **AND** each card has a background image, name, role, and social icons
- **AND** social icons overlay on hover

#### Scenario: Blog section shows latest posts

- **GIVEN** the user scrolls to the blog section
- **WHEN** the blog section is rendered
- **THEN** a heading "Blog Update" is displayed
- **AND** three blog post cards are shown in a carousel
- **AND** each card has a title, date, comment count, excerpt, and "Read more" link

#### Scenario: Call-to-action section prompts engagement

- **GIVEN** the user scrolls to the CTA section
- **WHEN** the CTA section is visible
- **THEN** a large heading about stories is displayed
- **AND** a subtitle line is shown below
- **AND** a "Start your stories" link is prominently displayed
- **AND** the section has a background image

#### Scenario: Footer renders with logo, links, and social

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is visible
- **THEN** the logo and social media icons are in the top row
- **AND** three columns of content are shown: About us, Who we are links, Newsletter
- **AND** a copyright bar is at the bottom
- **AND** the footer links to Component Dock

#### Scenario: Mobile responsive behavior

- **GIVEN** the user views the page on a mobile device
- **WHEN** the viewport is narrow
- **THEN** the navigation collapses to a hamburger menu
- **AND** grid layouts stack vertically
- **AND** the hero text remains readable
- **AND** team cards stack in a single column

## Verification checklist

- [ ] Header: transparent, white text, logo + nav + social icons
- [ ] Hero: full-width slider, 3 slides with subtitle/heading/CTA, pagination dots
- [ ] Services: 2×2 grid, icons, titles, descriptions, left column with heading + CTA
- [ ] Work gallery: masonry grid, mixed sizes, hover overlays, dark background
- [ ] Counter: 4 stat items, icons, animated numbers, labels
- [ ] Team: 4 cards, background images, names, roles, social icon overlays
- [ ] Blog: 3 post cards, carousel, title/date/comments/excerpt/read-more
- [ ] CTA: large heading, subtitle, CTA link, background image
- [ ] Footer: logo + social top, 3-column content, copyright, Component Dock link
- [ ] Fonts: Play (headings), Josefin Sans (body)
- [ ] Colors: #00bfe7 accent, #100028 dark, #0a0119 darkest, white headings
- [ ] Mobile: hamburger nav, stacked grids, readable text
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
