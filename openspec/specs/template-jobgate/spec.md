# Template: JobGate (Job Portal / Directory)

## Purpose

Recreation of the ColorLib **Comport** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **ColorLib source:** [Comport](https://colorlib.com/wp/template/comport/)
- **Preview URL:** https://preview.colorlib.com/theme/comport/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library
- **Category:** Job portal / directory landing page
- **New name:** `jobgate` (apps/jobgate, `@free-react-templates/jobgate`)

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|-------|-------|-------|
| Brand / primary | `#ff9902` | Orange — buttons, highlights, spinner, newsletter overlay, hover states, search bar bg |
| Dark navy | `#04091e` | Header light menu bg, footer bg |
| Dark accent | `#111` | Button hover bg, search form button bg |
| Card background | `#f9f9f9` | Feature cards, category cards, job rows, newsletter bg, download section |
| Border | `#eee` | Category card border, download button border |
| Body text | `#777` | Paragraphs, h5, h6, footer copyright |
| Heading text | `#222` | h1–h4 |
| Blue accent | `#00afed` | Job type badge (full time) |
| Red accent | `#cc2229` | Job type badge hover variant |
| White | `#fff` | On-brand button text, dark section text |
| Heading font | `"Poppins", sans-serif` | All h1–h4, 50px/36px/20px/18px, weights 600–700 |
| Body font | `"Open Sans", sans-serif` | Body, buttons, nav, 14px, weight 400–600 |
| Button radius | `3px` | `.template-btn`, `.third-btn`, `.custom-navbar` |
| Card input radius | `5px` | Search inputs, newsletter inputs |
| Button padding | `15px 30px` | Primary `.template-btn` |
| Small button padding | `10px 24px` | `.third-btn` (job apply/type badges) |
| Shadow (hover) | `0 10px 20px rgba(0,0,0,0.1)` | Cards on hover |
| Newsletter overlay | `rgba(1,2,12,0.6)` | Dark overlay on newsletter bg image |

## Section structure (order from live preview DOM)

1. **Navbar** — Logo left, nav links right (Home, About, Category, Blog w/ submenu, Contact, Pages w/ submenu), login + sign up buttons in last nav item.
2. **Banner** — Split layout: left half = background image (gray fallback `#b0b0b0`), right half = headline "find your dream job with comport" (word "job" in brand orange) + paragraph + "explore now" secondary link with arrow.
3. **Search bar** — Overlapping orange bar (`#ff9902`) offset `margin-top: -50px` above content. Contains: Category select, Location select, Keyword text input, "find job" dark button.
4. **Feature cards** — 3 equal columns on light gray bg (`#f9f9f9`). Each card: title (e.g. "UX/UI Designer"), short description, "explore now" secondary link. Hover = white bg + shadow.
5. **Category grid** — 8 category cards in 4×2 grid. Each: category icon image, category name, "250 open job" count. Cards have `#f9f9f9` bg + `#eee` border, hover = white + shadow + transparent border.
6. **Job listings (tabbed)** — Tab bar: Recent | Full Time | Part Time | Intern. Each tab panel shows job cards. Each card: job title, location/field/deadline with icons, company logo image, job type badge (blue `#00afed`), "apply" badge. Cards on `#f9f9f9` bg, hover = white + shadow. "more job post" CTA button at bottom.
7. **Newsletter** — Full-width dark overlay on background image. Heading + subtext in white. Email input + "subscribe now" button in orange.
8. **Testimonials** — "Happy employee" heading. Carousel/slider with employee photo (with orange hover overlay revealing name + company) + quote text with quote-left icon.
9. **News / Blog** — 3-column grid of news cards. Each: background image with `#b0b0b0` fallback + `5px` border-radius, date + category tags, article title as link.
10. **Download CTA** — Split: left = heading + paragraph + App Store / Play Store download buttons (white bg, `5px` radius, orange icon + text, hover = orange bg), right = phone/device image.
11. **Footer** — Dark navy bg (`#04091e`). 3 columns: Top Products (link list), Newsletter (email input + subscribe), Instagram feed (8 small images grid). Bottom copyright bar with social icons (Facebook, Twitter, Dribbble, Behance) — icons in white circles, hover = orange bg.

## Gherkin requirements

### Feature: JobGate Landing Page

```gherkin
Feature: JobGate — job portal landing page
  As a job seeker visiting JobGate
  I want to browse jobs and categories
  So I can find and apply for positions

  Background:
    Given the JobGate landing page is loaded

  # --- Navbar ---
  Scenario: Navbar displays logo and navigation links
    Then the navbar shows the logo on the left
    And navigation links include "Home", "About", "Category", "Blog", "Contact"
    And a "log in" link and a "sign up" button are visible

  Scenario: Navbar submenus appear on hover/click
    When the user hovers over "Blog"
    Then a submenu shows "Blog Home" and "Blog Details"
    When the user hovers over "Pages"
    Then a submenu shows "Job Search", "Job Single", "Pricing Plan", "Elements"

  # --- Banner ---
  Scenario: Banner displays headline and CTA
    Then the banner shows a split layout with image on left and text on right
    And the headline contains "find your dream" and "job" (highlighted in brand orange)
    And a paragraph of descriptive text is visible
    And an "explore now" secondary link with arrow is shown

  # --- Search Bar ---
  Scenario: Search bar provides job filtering
    Then the search bar is styled with the brand orange background
    And it contains a "Category" dropdown select
    And it contains a "Location" dropdown select
    And it contains a keyword text input
    And a "find job" button is displayed

  # --- Feature Cards ---
  Scenario: Feature cards show job categories
    Then 3 feature cards are displayed in equal columns
    And each card has a title (e.g. "UX/UI Designer")
    And each card has a short description paragraph
    And each card has an "explore now" secondary link
    And cards have light gray background that transitions to white on hover with shadow

  # --- Category Grid ---
  Scenario: Category grid shows 8 job categories
    Then 8 category cards are displayed in a 4×2 grid
    And each card shows a category icon, category name, and "250 open job" count
    And cards have a light gray background with subtle border
    And on hover the background becomes white and shadow appears

  # --- Job Listings ---
  Scenario: Job listings display with tab navigation
    Then a tab bar shows "Recent", "Full Time", "Part Time", "Intern"
    And the "Recent" tab is active by default
    And each tab panel shows at least one job listing card
    And each job card shows: job title, location, field, deadline with icons
    And each job card has a company logo image and a job type badge
    And an "apply" button is shown per job
    And a "more job post" CTA button appears at the bottom

  Scenario: Tab switching changes visible jobs
    When the user clicks the "Full Time" tab
    Then the full-time job listings are shown
    When the user clicks the "Part Time" tab
    Then the part-time job listings are shown

  # --- Newsletter ---
  Scenario: Newsletter section collects email subscriptions
    Then a newsletter section with dark overlay on background image is shown
    And the heading reads "Get job information daily"
    And an email input and "subscribe now" button are displayed

  # --- Testimonials ---
  Scenario: Employee testimonials display in a carousel
    Then a "Happy employee" heading is shown
    And at least 2 testimonial slides are present
    And each slide shows an employee photo, name, company, and a quote
    And on hover the employee photo shows an orange overlay with name and company

  # --- News / Blog ---
  Scenario: Latest news cards are displayed
    Then 3 news cards are shown in a 3-column grid
    And each card has a background image, date, category tag, and article title
    And images have rounded corners (5px radius)

  # --- Download CTA ---
  Scenario: Download section promotes the mobile app
    Then a split layout shows text on left and device image on right
    And the heading mentions downloading the app
    And App Store and Play Store download buttons are shown
    And download buttons have white bg with orange icon, hover = orange bg

  # --- Footer ---
  Scenario: Footer displays links, newsletter, and social icons
    Then the footer has a dark navy background
    And it shows 3 columns: "Top Products" links, "Newsletter" form, "Instagram Feed" grid
    And a copyright bar with social icons (Facebook, Twitter, Dribbble, Behance)
    And social icon circles are white, turning orange on hover
    And a "Component Dock" link is present in the footer
```

## Verification checklist

- [ ] Navbar: logo, nav links, login/signup, submenus on Blog and Pages
- [ ] Banner: split layout, headline with orange "job", secondary CTA link
- [ ] Search bar: orange bg, 3 inputs (category, location, keyword), find job button
- [ ] Feature cards: 3 cards, title + description + link, hover effect
- [ ] Category grid: 8 cards, icon + name + count, hover effect
- [ ] Job listings: tabbed interface, 4 tabs, job cards with details + badges
- [ ] Newsletter: dark overlay bg, email input + subscribe button
- [ ] Testimonials: carousel, employee photo + quote, hover overlay
- [ ] News: 3-column grid, image + date/category + title
- [ ] Download CTA: split layout, app store buttons, device image
- [ ] Footer: dark navy, 3 columns, copyright, social icons, Component Dock link
- [ ] Design tokens: brand #ff9902, fonts Poppins + Open Sans, radii 3px/5px
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via picsum.photos/seed/jobgate-*
- [ ] lucide-react icons replacing Font Awesome icons
- [ ] 100% test coverage
