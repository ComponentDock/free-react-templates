# Template: Workbench (Personal Portfolio / Freelancer)

## Purpose

Recreation of ColorLib **Work** template.
- **Source:** https://colorlib.com/wp/template/work/
- **Preview:** https://preview.colorlib.com/theme/work/
- **New name:** `workbench` (apps/workbench, `@free-react-templates/workbench`)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Category:** Personal portfolio / freelancer / creative agency

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| **Primary accent** | `#F75940` | Coral red-orange, used for `.btn-primary` and links |
| **Primary hover** | `#f86e58` | Slightly lighter coral |
| **Body text** | `#333333` | Main paragraph text |
| **Secondary text** | `#666666` | Descriptions, subtext |
| **Meta/label text** | `#999999` | Uppercase labels, dates, categories |
| **Background (light)** | `#fafafa` | CTA section background |
| **Background (white)** | `#fff` | Sidebar, cards, blog entries |
| **Dark text** | `#000` | Headings, button borders (btn-learn) |
| **Font family** | `"Quicksand", Arial, sans-serif` | Google Font |
| **Font weights** | 300, 400, 500 | Light, regular, medium |
| **Button border-radius** | `30px` | Pill-shaped buttons |
| **Button padding** | `14px 30px` | Primary buttons |
| **Sidebar width** | `20%` | Fixed left sidebar |
| **Project card height** | `450px` | Portfolio grid items |
| **Heading meta** | `10px, uppercase, letter-spacing: 5px, #999` | Section subtitle labels |

## Layout overview

**Sidebar layout** — fixed left sidebar (20% width) + scrollable main content area on the right.

### Section order (top to bottom in main area)

1. **Hero Slider** — Full-height flexslider with 3 background-image slides, dark overlay, centered text (h1 heading + h2 subtitle + "Learn More" button). Slides auto-rotate.
2. **About** — Two-column: left = stacked overlapping images (with fadeIn animations), right = intro text ("Welcome & Introduce" meta + heading + paragraph) + accordion panel (3 items: "Why choose me?", "What I do?", "My Specialties") with collapse/expand.
3. **Services** — 2×3 grid of features, each with icon + h3 title + description. Centered heading ("What I do?" meta + "Here are some of my expertise"). Features: Branding, Web Design, SEO, Web Development, User Interface, Help & Support.
4. **Work/Portfolio** — 2×3 grid of project cards with background images, dark overlay on hover, title + category tags + share/eye/heart icon row. "My Work" meta + "Recent Work" heading.
5. **Blog** — 3-column grid of blog cards, each with image, date/category/comments meta, title, excerpt, "Read More" link. "Read" meta + "Recent Blog" heading.
6. **CTA** — "Get in Touch" section on `#fafafa` background, heading + description + "Contact me!" primary button.

### Sidebar

- Logo: "Work" (styled with two colored spans)
- Navigation: Home, Work, About, Services, Blog, Contact (single-page scroll links)
- Social links: Facebook, Twitter, Instagram, LinkedIn
- Copyright footer with "Made with ❤" attribution

## Requirements

### Feature: Workbench template behaviour

Feature: Workbench Template
As a visitor, I want to see a professional portfolio site
So that I can learn about the freelancer and their work.

Background:
- **GIVEN** the template loads at the root URL

**--- Sidebar ---**

#### Scenario: Sidebar navigation

- **THEN** a fixed left sidebar is visible
- **AND** the sidebar shows a logo
- **AND** the sidebar shows navigation links: Home, Work, About, Services, Blog, Contact
- **AND** the sidebar shows social media icons (Facebook, Twitter, Instagram, LinkedIn)
- **AND** the sidebar shows a copyright line

#### Scenario: Sidebar scroll links

- **WHEN** I click a navigation link in the sidebar
- **THEN** the page scrolls to the corresponding section

**--- Hero ---**

#### Scenario: Hero slider displays

- **THEN** a full-height hero slider is visible
- **AND** the slider shows a heading text
- **AND** the slider shows a subtitle
- **AND** the slider shows a "Learn More" button
- **AND** the slider has a dark overlay on the background image

#### Scenario: Hero slider auto-rotation

- **GIVEN** the page loads
- **WHEN** I wait a few seconds
- **THEN** the slider transitions to the next slide automatically

**--- About ---**

#### Scenario: About section layout

- **THEN** the About section is visible
- **AND** the About section shows two stacked overlapping images on the left
- **AND** the About section shows "Welcome & Introduce" meta label
- **AND** the About section shows an introduction heading
- **AND** the About section shows a paragraph of bio text

#### Scenario: About accordion

- **THEN** the About section shows an accordion with 3 panels
- **AND** panel 1 is titled "Why choose me?"
- **AND** panel 2 is titled "What I do?"
- **AND** panel 3 is titled "My Specialties"

#### Scenario: Accordion expand/collapse

- **WHEN** I click an accordion panel header
- **THEN** the panel body becomes visible
- **WHEN** I click the same panel header again
- **THEN** the panel body is hidden

**--- Services ---**

#### Scenario: Services section displays

- **THEN** the Services section is visible
- **AND** the section shows "What I do?" meta label
- **AND** the section shows "Here are some of my expertise" heading
- **AND** there are 6 feature cards displayed in a 2×3 grid

#### Scenario: Service feature card content

- **THEN** each service card shows an icon
- **AND** each service card shows a title
- **AND** each service card shows a description paragraph

**--- Work / Portfolio ---**

#### Scenario: Portfolio section displays

- **THEN** the Work/Portfolio section is visible
- **AND** the section shows "My Work" meta label
- **AND** the section shows "Recent Work" heading
- **AND** there are 6 project cards displayed in a 2×3 grid

#### Scenario: Portfolio card content

- **THEN** each project card shows a background image
- **AND** each project card shows a title
- **AND** each project card shows category tags
- **AND** each project card shows share, view count, and like count icons

#### Scenario: Portfolio card hover

- **WHEN** I hover over a project card
- **THEN** the card shows an overlay with title and tags

**--- Blog ---**

#### Scenario: Blog section displays

- **THEN** the Blog section is visible
- **AND** the section shows "Read" meta label
- **AND** the section shows "Recent Blog" heading
- **AND** there are 3 blog cards displayed in a 3-column grid

#### Scenario: Blog card content

- **THEN** each blog card shows a featured image
- **AND** each blog card shows date, category, and comment count
- **AND** each blog card shows a title
- **AND** each blog card shows an excerpt paragraph
- **AND** each blog card shows a "Read More" link

**--- CTA ---**

#### Scenario: Call-to-action section

- **THEN** a "Get in Touch" section is visible
- **AND** the CTA section has a light gray (#fafafa) background
- **AND** the CTA shows a heading
- **AND** the CTA shows a description paragraph
- **AND** the CTA shows a "Contact me!" primary button

**--- Footer ---**

#### Scenario: Footer with Component Dock link

- **THEN** the footer is visible
- **AND** the footer links to https://www.componentdock.com/

**--- Design tokens ---**

#### Scenario: Brand color applied

- **THEN** primary buttons use the coral (#F75940) accent color
- **AND** headings use the Quicksand font family
- **AND** buttons have pill-shaped border radius (30px)

#### Scenario: Responsive layout

- **THEN** the sidebar collapses on mobile viewports
- **AND** a hamburger toggle appears on mobile
- **AND** the main content takes full width on mobile

## Verification checklist

- [ ] Sidebar is fixed, 20% width on desktop, collapses on mobile
- [ ] Hero slider shows 3 slides with auto-rotation and dark overlay
- [ ] About section has stacked images + accordion (3 panels, expand/collapse)
- [ ] Services grid shows 6 cards in 2×3 layout with icons
- [ ] Portfolio grid shows 6 project cards with hover overlay
- [ ] Blog grid shows 3 cards with images and metadata
- [ ] CTA section has #fafafa background and "Contact me!" button
- [ ] Footer links to https://www.componentdock.com/
- [ ] Brand color #F75940 used for primary buttons and accents
- [ ] Quicksand font loaded via Google Fonts
- [ ] Pill-shaped buttons (border-radius: 30px)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Public/CNAME contains `workbench.free.componentdock.com`
