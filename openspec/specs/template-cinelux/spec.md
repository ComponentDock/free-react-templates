# Template: Cinelux (Portfolio)

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

## Gherkin Requirements

### Feature: Cinelux Template

#### Scenario: Header renders with transparent overlay
- **Given** the user loads the page
- **When** the header is visible
- **Then** the header has a transparent background with a subtle white border-bottom
- **And** the logo is displayed on the left
- **And** the navigation links are centered
- **And** social media icons are on the right
- **And** all text is white

#### Scenario: Hero slider displays with background images
- **Given** the user loads the page
- **When** the hero section is rendered
- **Then** a full-width background image slider is displayed
- **And** each slide shows a subtitle text, a heading, and a CTA button
- **And** pagination dots are visible at the bottom-left
- **And** slides auto-rotate or respond to user interaction

#### Scenario: Services section shows four service items
- **Given** the user scrolls to the services section
- **When** the services section is in view
- **Then** a heading "What We do?" is displayed
- **And** a description paragraph and "View all services" button are shown on the left
- **And** four service cards are arranged in a 2×2 grid on the right
- **And** each card has an icon, title, and description

#### Scenario: Work gallery displays masonry grid
- **Given** the user scrolls to the work section
- **When** the gallery is rendered
- **Then** a masonry-style grid of project thumbnails is shown
- **And** items have varying sizes (wide, large, small)
- **And** hovering an item reveals an overlay with project info
- **And** the section background is dark indigo

#### Scenario: Counter section shows animated stats
- **Given** the user scrolls to the counter section
- **When** the counter section is visible
- **Then** four stat items are displayed in a row
- **And** each item shows an icon, an animated number, and a label
- **And** the background is dark indigo

#### Scenario: Team section displays member cards
- **Given** the user scrolls to the team section
- **When** the team section is rendered
- **Then** a heading "OUR Team" is displayed
- **And** four team member cards are shown in a row
- **And** each card has a background image, name, role, and social icons
- **And** social icons overlay on hover

#### Scenario: Blog section shows latest posts
- **Given** the user scrolls to the blog section
- **When** the blog section is rendered
- **Then** a heading "Blog Update" is displayed
- **And** three blog post cards are shown in a carousel
- **And** each card has a title, date, comment count, excerpt, and "Read more" link

#### Scenario: Call-to-action section prompts engagement
- **Given** the user scrolls to the CTA section
- **When** the CTA section is visible
- **Then** a large heading about stories is displayed
- **And** a subtitle line is shown below
- **And** a "Start your stories" link is prominently displayed
- **And** the section has a background image

#### Scenario: Footer renders with logo, links, and social
- **Given** the user scrolls to the footer
- **When** the footer is visible
- **Then** the logo and social media icons are in the top row
- **And** three columns of content are shown: About us, Who we are links, Newsletter
- **And** a copyright bar is at the bottom
- **And** the footer links to Component Dock

#### Scenario: Mobile responsive behavior
- **Given** the user views the page on a mobile device
- **When** the viewport is narrow
- **Then** the navigation collapses to a hamburger menu
- **And** grid layouts stack vertically
- **And** the hero text remains readable
- **And** team cards stack in a single column

## Verification Checklist

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
