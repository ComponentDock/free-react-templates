# template-respawn

## Purpose

Respawn is a gaming blog / news website template recreating the ColorLib "Amin"
design under a new original name. It provides a dark-themed gaming content site
with a top bar, logo navbar, hero section with featured post, latest preview
carousel, news & update tabbed grid, video guide carousel, Instagram post grid,
and a dark footer with brand info and editor's choice sidebar.

- **ColorLib source:** [Amin](https://colorlib.com/wp/template/amin/)
- **Preview URL:** https://preview.colorlib.com/theme/amin/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · lucide-react icons

## Design tokens (extracted from live preview CSS, 2026-09-21)

| Token            | Value                              | Notes                                                         |
| ---------------- | ---------------------------------- | ------------------------------------------------------------- |
| Body font        | `"Montserrat", sans-serif`        | Google Fonts 400/500/600/700                                  |
| Heading font     | `"Cinzel", serif`                  | Google Fonts; used for logo + some headings                   |
| Page bg          | `#0d0909` (near-black)            | Overall page background                                       |
| Hero bg          | Dark image with `rgba(0,0,0,0.5)` overlay | Full-width hero with background photo                |
| Latest-preview bg | `#080808`                         | Dark section                                                   |
| Update-news bg   | `#0d0d0d`                         | Slightly lighter dark section                                  |
| Video-guide bg   | `#080808`                         | Dark section                                                   |
| Instagram bg     | `#0d0d0d`                         | Dark section                                                   |
| Footer bg        | `#080808`                         | Dark section                                                   |
| Brand red        | `#c20000`                         | Primary accent — labels, badges, hover states                 |
| Brand red light  | `rgba(194,0,0,0.3)` / `rgba(194,0,0,0.5)` | Skewed badge backgrounds, overlays               |
| Accent blue      | `#40c4ff`                         | Links, secondary highlights                                   |
| Accent green     | `#16b601`                         | Score/rating badges                                           |
| Accent orange    | `#ffaf24`                         | Trending/hot indicators                                       |
| Text primary     | `#ffffff`                         | Headings, nav, body text on dark bg                           |
| Text secondary   | `#c4c4c4`                         | Paragraphs, meta text                                         |
| Text dim         | `#999`                            | Timestamps, muted text                                        |
| Text dark        | `#111111` / `#444444`             | Text on light/white elements                                  |
| Card dark        | `#252525`                         | Social icon bg, card backgrounds                              |
| Border radius    | `2px` (subtle), `50%` (circles), `60px` (pills) | Various button/badge shapes                     |
| Skew transform   | `skewX(-15deg)` / `skewX(15deg)` | Signature skewed label badges                                 |
| Social icon bg   | `#252525`, 46×46px, `skewX(15deg)` | Footer social icons with skew effect                        |
| Footer text      | `#ffffff` on `#080808`            | Footer paragraphs `#c4c4c4`                                   |

## Requirements

### Requirement: Top bar with social icons and right-side navigation

The top bar SHALL display left-aligned social media icons (Facebook, Twitter,
YouTube, Instagram) and right-aligned navigation links on a dark background.

#### Scenario: Top bar renders on desktop

- **WHEN** the page loads on desktop
- **THEN** the top bar is visible at the top of the page
- **AND** social icons (Facebook, Twitter, YouTube, Instagram) are shown on the left
- **AND** right-side links (e.g., "About Us", "Contact") are shown on the right

### Requirement: Logo navbar with mega-menu navigation

The navbar SHALL display a logo on the left, main navigation links in the center
(Home, Categories with dropdown, Typography, Post variants, Contact), and a
search icon on the right. Categories SHALL have a mega-menu dropdown with
platform subcategories (Playstation, Windows, Mobile, Xbox) and preview images.

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on desktop
- **THEN** the Respawn logo is visible on the left
- **AND** navigation links (Home, Categories, Typography, Post default, Post
  gallery, Post review, Contact) are displayed
- **AND** a search icon is visible on the right

#### Scenario: Mega-menu opens on hover

- **WHEN** the user hovers over "Categories" in the navbar
- **THEN** a mega-menu dropdown appears showing platform subcategories
  (Playstation, Windows, Mobile, Xbox) with preview images

#### Scenario: Mobile hamburger menu

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** a mobile navigation menu opens with all nav links
- **AND** clicking a link closes the mobile menu

### Requirement: Hero section with featured post and trending sidebar

The hero section SHALL display a full-width dark overlay background image, a
featured gaming post on the left (with skewed category label, headline, author
avatar, date, comment count), and a trending posts sidebar on the right with
three smaller post cards.

#### Scenario: Hero renders featured post and trending

- **WHEN** the page loads
- **THEN** the hero section shows a background image with dark overlay
- **AND** the featured post headline is visible
- **AND** the featured post has a skewed category label (e.g., "Playstation")
- **AND** author avatar, date, and comment count are shown
- **AND** a "Trending posts" sidebar with three post items is visible on the right

### Requirement: Latest preview section with carousel of post cards

The latest preview section SHALL display a "Latest Preview" heading and a
horizontal row of post cards on a dark `#080808` background. Each card SHALL
have a thumbnail image, a green score badge (e.g., "7.5"), post title, date,
and comment count. Cards shall be scrollable/carousel on smaller viewports.

#### Scenario: Latest preview cards render

- **WHEN** the latest preview section loads
- **THEN** the "Latest Preview" heading is centered
- **AND** at least three post cards are visible
- **AND** each card shows a thumbnail, green score badge, title, date, and
  comment count

### Requirement: News & update section with tabbed content grid

The news section SHALL display a "News & update" heading with category filter
tabs (All, Platform, Hardware, Reviews) on a dark `#0d0d0d` background. The
content area SHALL show post cards in a grid layout, each with a thumbnail,
category badge, title, author, date, and comment count.

#### Scenario: News tabs filter content

- **WHEN** the news & update section loads
- **THEN** the "News & update" heading is visible
- **AND** category tabs (All, Platform, Hardware, Reviews) are displayed
- **AND** clicking a tab filters the visible posts to that category

#### Scenario: News post cards render

- **WHEN** the news section loads
- **THEN** post cards show thumbnail, category badge, title, author name,
  date, and comment count

### Requirement: Video guide section with tabbed carousel

The video guide section SHALL display a "Videos guide" heading with category
filter tabs (All, Platform, Hardware, Reviews) on a dark `#080808` background.
Content SHALL be video cards with thumbnails, play buttons, titles, dates, and
comment counts.

#### Scenario: Video guide cards render

- **WHEN** the video guide section loads
- **THEN** the "Videos guide" heading is visible
- **AND** category tabs are displayed
- **AND** video cards with play buttons, titles, dates, and comment counts are shown

### Requirement: Instagram post section with horizontal image grid

The Instagram section SHALL display a heading "Instagram" with social media
category tabs and a horizontal row of post cards on a dark `#0d0d0d`
background. Each card SHALL have an image, a green score badge, category label,
title, author, date, and comment count, plus a lorem ipsum description block
below.

#### Scenario: Instagram section renders post cards

- **WHEN** the Instagram section loads
- **THEN** the "Instagram" heading is visible
- **AND** category tabs (Social media, Hardware guides, Videos guide) are shown
- **AND** post cards with images, score badges, titles, and descriptions are visible

### Requirement: Dark footer with brand info, editor's choice, and social links

The footer SHALL display on a dark `#080808` background with three columns:
left column with logo, description, and skewed social icons; middle column with
"Editor's Choice" posts; right column with additional content. A bottom bar
SHALL include "Made with ♥ by Component Dock" linking to
https://www.componentdock.com/.

#### Scenario: Footer renders all columns

- **WHEN** the footer loads
- **THEN** the brand logo and description are visible on the left
- **AND** skewed social icons (Facebook, Twitter, YouTube, Instagram) are shown
- **AND** "Editor's Choice" post items are displayed in the middle column

#### Scenario: Footer includes Component Dock attribution

- **WHEN** the footer loads
- **THEN** a link to https://www.componentdock.com/ with "Component Dock" text
  is visible in the bottom bar
