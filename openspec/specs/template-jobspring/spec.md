# Template: JobSpring (Job Board / Directory)
<!-- prep-status: shipped-as=jobnest -->
> **SHIPPED-UNDER** — the ColorLib `job-board-2` design this prep describes already
> ships as `apps/jobnest` (<https://jobnest.free.componentdock.com>).
> Do not scaffold `apps/jobspring`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-jobnest/spec.md`.

## Purpose

Recreation of ColorLib "Job Board 2" — a professional job directory website
template. Source: https://colorlib.com/wp/template/job-board-2/

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

**Design reference:** Screenshot (preview URL unreachable):
https://colorlib.com/wp/wp-content/uploads/sites/2/jobboard2-free-template.jpg

## Design tokens

Extracted from the ColorLib page CSS and screenshot analysis:

| Token             | Value                    | Usage                                |
| ----------------- | ------------------------ | ------------------------------------ |
| Primary blue      | `#1a73e8`               | Hero background, nav links           |
| Accent green      | `#28a745`               | CTA buttons, badges, "Post A Job"    |
| Text dark         | `#32373c`               | Headings, body text                  |
| Text light        | `#6c757d`               | Subtitles, meta text                 |
| Background white  | `#ffffff`               | Cards, search section, nav           |
| Background light  | `#f5f7fa`               | Category section, alternating rows   |
| Card shadow       | `0 2px 15px rgba(0,0,0,0.08)` | Category cards, job listings   |
| Border radius     | `10px`                  | Category cards                       |
| Button radius     | `30px` (pill)           | CTA buttons                          |
| Font family       | `Poppins, sans-serif`   | All text                             |

## Sections (top → bottom)

### 1. Navbar
- Sticky top, white background
- Logo: magnifying glass icon + "JobSpring" + subtitle "Find your dream job"
- Nav links: Home, Browse Job, Pages (dropdown), Blog, Contact
- Right side: Log in link + "Post a Job" green pill button

### 2. Hero
- Full-width blue background (`#1a73e8`)
- Left side: job count ("4536+ Jobs listed"), headline ("Find your Dream Job"),
  subtext, green pill CTA ("Upload Your Resume")
- Right side: illustration (people interacting with job listing cards)
- Use placeholder illustration via picsum or SVG

### 3. Job Search
- White background, centered
- Search bar: keyword input, location dropdown, category dropdown,
  green "Find Job" pill button
- Below: "Popular Search:" with tag pills (Design & Creative, Marketing,
  Administration, Teaching & Education, Engineering, Software & Web,
  Telemarketing)

### 4. Popular Categories
- Light gray background (`#f5f7fa`)
- Heading: "Popular Categories"
- 2×4 grid of white cards with subtle shadow
- Each card: category name (bold), green badge with count, "Available position"
- Categories: Design & Creative, Marketing, Telemarketing, Software & Web,
  Administration, Teaching & Education, Engineering, Garments / Textile

### 5. Featured Companies
- White background
- Heading: "Featured Companies"
- Row of company logos (placeholder images)

### 6. Recent Jobs
- Light gray background
- Heading: "Recent Jobs"
- List of job cards: title, company, location, type badge, salary, "Apply" link
- 6–8 job listings

### 7. Testimonials
- White background
- Heading: "What Our Users Say"
- Carousel or grid of testimonial cards with avatar, name, role, quote

### 8. CTA Banner
- Blue background matching hero
- "Find Your Dream Job Today" heading
- Green "Get Started" pill button

### 9. Footer
- Dark background (`#122b40`)
- Column layout: About, Quick Links, Job Categories, Contact Info
- Social icons
- "Made with Component Dock" attribution link

## Requirements

### Feature: JobSpring template behaviour

Feature: JobSpring landing page

#### Scenario: Navbar displays correctly

- **GIVEN** the user visits the landing page
- **THEN** the navbar is sticky at the top
- **AND** the logo shows "JobSpring" with a search icon
- **AND** nav links "Home", "Browse Job", "Pages", "Blog", "Contact" are visible
- **AND** a green "Post a Job" button is visible on the right

#### Scenario: Hero section renders

- **GIVEN** the user visits the landing page
- **THEN** a blue hero section is displayed
- **AND** the headline "Find your Dream Job" is visible
- **AND** the job count "4536+ Jobs listed" is visible
- **AND** a green "Upload Your Resume" button is visible

#### Scenario: Job search form works

- **GIVEN** the user visits the landing page
- **THEN** a search bar with keyword input is visible
- **AND** a Location dropdown is visible
- **AND** a Category dropdown is visible
- **AND** a green "Find Job" button is visible
- **AND** popular search tags are displayed below

#### Scenario: Popular categories grid renders

- **GIVEN** the user scrolls to the categories section
- **THEN** 8 category cards are displayed in a grid
- **AND** each card shows a category name and job count badge

#### Scenario: Footer links to Component Dock

- **GIVEN** the user scrolls to the footer
- **THEN** a "Component Dock" link is present
- **AND** the link points to "https://www.componentdock.com/"

## Verification checklist

- [ ] Section order matches screenshot exactly
- [ ] Brand colors (#1a73e8 blue, #28a745 green) used consistently
- [ ] Poppins font loaded via Google Fonts
- [ ] CTA buttons are green pill-shaped (radius 30px)
- [ ] Category cards have white background + subtle shadow
- [ ] Hero has blue background with illustration
- [ ] Search bar has 3 inputs + Find Job button
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] All sections responsive (mobile-first)

<!-- live-palette-revalue:start -->
**Live palette re-value (2026-10-23)** — the demo `https://preview.colorlib.com/theme/jobboard2/` answers **HTTP 200** (43,658 B); the declarations below are quoted from its own stylesheets.

| claimed | painted | d | sheet (bytes, sha256) | declaration |
| --- | --- | --- | --- | --- |
| `#1a2b3c` | `#122b40` ×1 | 9 | `gijgo.css` (55,532 B, `ae6c0a9951a2…`) | `border-color: #122b40;` |

The claimed hex was a screenshot sample of the same hue; the sheet value is canonical (`docs/replication.md`).
<!-- live-palette-revalue:end -->

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/jobboard2/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#1a73e8` — nearest `#1976d2` (d=22)
<!-- live-palette-unverified:end -->
