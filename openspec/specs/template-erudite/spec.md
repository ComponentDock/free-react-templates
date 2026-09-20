# Template: Erudite (Education / Online Learning)

## Purpose

Recreation of ColorLib's **Ezuca** template (https://colorlib.com/wp/template/ezuca/) as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **ColorLib source slug:** `ezuca`
- **Preview URL:** https://preview.colorlib.com/theme/ezuca/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ezuca-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Category:** Education / Online Learning

## Design Tokens

Extracted from the live preview at https://preview.colorlib.com/theme/ezuca/ and its `style.css`.

### Colors

| Token                | Value     | Usage                                    |
| -------------------- | --------- | ---------------------------------------- |
| `--brand-primary`    | `#19c880` | Primary CTA buttons, active states       |
| `--brand-secondary`  | `#34d986` | Button border, hover states              |
| `--brand-accent`     | `#f3a90b` | Accent/highlight color                   |
| `--text-dark`        | `#383749` | Headings, primary text                   |
| `--text-muted`       | `#757686` | Body text, secondary text                |
| `--text-light`       | `#c0c1cd` | Tertiary text                            |
| `--bg-white`         | `#ffffff` | Card backgrounds, main content areas     |
| `--bg-light`         | `#f7f7f7` | Alternate section backgrounds            |
| `--bg-dark`          | `#383749` | Dark section backgrounds (testimonials)  |
| `--color-success`    | `#34d986` | Star ratings, free course badge          |

### Typography

- **Font family:** `'Roboto', sans-serif` (loaded via Google Fonts)
- **Heading weight:** 500–700
- **Body weight:** 400
- **Hero heading:** 60px, uppercase, weight 500, white on dark overlay
- **Section headings:** 28–32px, weight 700, dark color
- **Body text:** 14–16px, muted gray

### Buttons

- **Shape:** Square corners (border-radius: 0)
- **Padding:** 16px 48px
- **Border:** 2px solid `#34d986`
- **Font:** 13px, bold, uppercase
- **Hover:** green background (`#34d986`), white text
- **Variant:** "View all" CTA in course headings

### Section Backgrounds

| Section                  | Background                              |
| ------------------------ | --------------------------------------- |
| Top header bar           | White with bottom border                |
| Navbar                   | White, sticky                           |
| Hero                     | Full-width background image + dark overlay |
| Featured Courses (Horiz) | White                                   |
| About Section            | White, stats counters with green accent |
| Testimonials             | Dark background (`#383749` area)        |
| Featured Courses (Vert)  | White                                   |
| Latest News & Events     | Light gray (`#f7f7f7`)                  |
| Gallery                  | Image grid (no solid background)        |
| Footer                   | Dark (`#383749`)                        |
| Footer bar               | Darker (`#303040` approx)               |

### Border Radius

- Buttons: 0 (square)
- Avatars: 50% (circular)
- Minor elements: 2px

## Section Structure (in order)

1. **Top Header Bar** — Email, phone contact info, search bar, Register/Login links
2. **Navbar** — Logo on left, navigation links on right (Home, About, Courses, Pages, Blog, Contact)
3. **Hero** — Full-width background image with dark overlay, heading "Learn to Code", subtitle text, "read more" CTA button
4. **Featured Courses (Horizontal)** — 2-column layout with heading + "view all" button; each course: thumbnail image, star rating (5 stars), title link, author, date, price badge (Free / $XX)
5. **About Section** — Left column: heading "About Erudite", description, stats counters (50M+ Students, 30K+ Active Courses, 340M+ Instructors, 20+ Countries); Right column: video thumbnail with play button overlay
6. **Testimonials** — Swiper carousel: avatar image (left), quote text + author name + university/affiliation (right)
7. **Featured Courses (Vertical)** — Category filter nav (All, Business, Design, Web Development, Photography) + 3-column card grid; each card: thumbnail, title, author, date, price, star rating
8. **Latest News & Events** — Featured event with large thumbnail + date badge (day/month), event title, location, duration; side list of smaller event items with thumbnails
9. **Home Gallery** — Asymmetric image grid (1x1 and 2x2 tiles) in a flex wrap layout
10. **Footer** — 4-column: About/logo + description, Contact info (email, phone, address), Quick Links, Follow Us (social icons: Facebook, Google+, Instagram, Twitter)
11. **Footer Bar** — Copyright notice, app store download links

## Gherkin Requirements

### Feature: Erudite Education Template

#### Scenario: Top header bar displays contact info and auth links
- **Given** the user visits the page
- **When** the top header bar renders
- **Then** it shows an email address and phone number on the left
- **And** it shows a search input and Register/Login links on the right
- **And** the search input has placeholder text "What would you like to learn?"

#### Scenario: Navbar displays logo and navigation links
- **Given** the user visits the page
- **When** the navbar renders
- **Then** it shows the Erudite logo on the left
- **And** it shows navigation links: Home, About, Courses, Pages, Blog, Contact
- **And** the navbar is sticky on scroll

#### Scenario: Hero section renders with CTA
- **Given** the user visits the page
- **When** the hero section renders
- **Then** it shows a full-width background image with dark overlay
- **And** it shows the heading "Learn to Code"
- **And** it shows a subtitle paragraph
- **And** it shows a "read more" call-to-action button

#### Scenario: Featured courses horizontal section shows course cards
- **Given** the user visits the page
- **When** the horizontal featured courses section renders
- **Then** it shows a heading "Featured Courses" with a "view all" button
- **And** it displays 2 course cards in a 2-column layout
- **And** each course card shows a thumbnail, star rating, title, author, date, and price
- **And** free courses display a "Free" badge

#### Scenario: About section shows stats and video
- **Given** the user visits the page
- **When** the about section renders
- **Then** it shows a heading "About Erudite" with a description
- **And** it shows 4 stats counters: 50M+ Students, 30K+ Courses, 340M+ Instructors, 20+ Countries
- **And** it shows a video thumbnail with a play button overlay on the right

#### Scenario: Testimonial section displays carousel
- **Given** the user visits the page
- **When** the testimonial section renders
- **Then** it shows a carousel/slider of testimonials
- **And** each testimonial has a circular avatar, quote text, author name, and affiliation
- **And** the section has a dark background

#### Scenario: Featured courses vertical section with category filter
- **Given** the user visits the page
- **When** the vertical featured courses section renders
- **Then** it shows a category filter nav: All, Business, Design, Web Development, Photography
- **And** it displays a 3-column grid of course cards
- **And** each card shows thumbnail, title, author, date, price (with strikethrough original), and star rating
- **And** the "All" category is active by default

#### Scenario: Latest news and events section
- **Given** the user visits the page
- **When** the latest news section renders
- **Then** it shows a heading "Latest News & Events"
- **And** it shows a featured event with large image, date badge (day + month), title, location, and duration
- **And** it shows a side list of additional event items with smaller thumbnails

#### Scenario: Home gallery section
- **Given** the user visits the page
- **When** the gallery section renders
- **Then** it shows an asymmetric image grid
- **And** the grid uses a mix of 1x1 and larger tiles in a flex layout

#### Scenario: Footer displays contact info and links
- **Given** the user visits the page
- **When** the footer renders
- **Then** it shows 4 columns: About (logo + description), Contact (email, phone, address), Quick Links, Follow Us (social icons)
- **And** social icons include Facebook, Google+, Instagram, Twitter
- **And** the footer links to Component Dock

#### Scenario: Footer bar shows copyright
- **Given** the user visits the page
- **When** the footer bar renders
- **Then** it shows a copyright notice with the current year
- **And** it shows app store download links

## Verification Checklist

- [ ] All 11 sections render in the correct order matching the original
- [ ] Design tokens (colors, fonts, spacing) match the original CSS
- [ ] Hero section has full-width bg image with overlay, correct heading style
- [ ] Buttons are square (no border-radius), green border, bold text
- [ ] Course cards show thumbnail, rating stars, title, author, date, price
- [ ] About section stats counters are present and formatted correctly
- [ ] Testimonial carousel works with avatar + quote + author
- [ ] Vertical courses have category filter navigation
- [ ] News/events section has date badge overlay on featured event
- [ ] Gallery shows asymmetric image grid
- [ ] Footer has 4-column layout with social icons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] App uses placeholder images (picsum.photos with deterministic seeds)
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] 100% test coverage (lines, functions, branches, statements)
