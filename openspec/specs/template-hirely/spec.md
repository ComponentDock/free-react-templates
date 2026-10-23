# Template: Hirely (Career / Job Board)
<!-- prep-status: shipped-as=jobquest -->
> **SHIPPED-UNDER** — the ColorLib `careers` design this prep describes already
> ships as `apps/jobquest` (<https://jobquest.free.componentdock.com>).
> Do not scaffold `apps/hirely`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-jobquest/spec.md`.

## Purpose

Recreation of ColorLib "Careers" — a career/jobs website template with a hero search section, statistics counters, featured job listings, company logos, testimonials carousel, CTA banner, and multi-column footer.

- **Source template:** [ColorLib Careers](https://colorlib.com/wp/template/careers/)
- **Preview URL:** https://preview.colorlib.com/theme/careers/ (live at prep time)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/careers-free-template.jpg
- **New name:** `hirely` (App directory: `apps/hirely`, package: `@free-react-templates/hirely`)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview's `css/custom-bs.css` and `css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand / Primary | `#1644ba` | Buttons, active links, badges, section accents |
| Warning | `#fff568` | CTA "Sign Up" button |
| Success | `#28a745` | "Part-time" badge |
| Dark | `#343a40` | Heading text, dark backgrounds |
| Body text | `#7f848c` | Paragraph/body copy |
| Background | `#fff` | Page background |
| Light bg | `#f8f9fa` | Testimonial section background |
| Footer bg | `#242424` | Dark footer background |
| Footer text | `rgba(255,255,255,0.5)` | Footer links/body text |
| Font family | `"Nunito", sans-serif` | All text |
| Navbar logo | uppercase, letter-spacing 0.2rem, white | Top-left logo |

## Section Structure (from live DOM)

1. **Navbar** — Absolute-positioned, transparent overlay on hero. Left: logo ("Careers"). Center: nav links (Home, Job Listings, About, Services, Blog). Right: "Contact Us" primary button (hidden mobile, hamburger on mobile).
2. **Hero** — Full-width background image with dark overlay (`overlay-primary`). Heading: "A Powerful Career Website Template". Subtext: "Find your dream jobs in our powerful career website template." Search form: 4-column row with job title input, location select, job type select, "Search Job" primary button.
3. **Statistics** — Parallax background image with dark overlay. Title: "Careers Statistics". 4-column counter grid: Candidates (1930), Jobs Posted (54), Jobs Filled (120), Companies (550). Animated number counters.
4. **Job Listings** — Section title: "109,234 Job Listed". 7 job cards in a list layout, each row: image (col-2), badge + title + publisher (col-4), location (col-3), salary range (col-3). Badges: Freelancer (primary/blue), Full-time (warning/yellow), Part-time (success/green). Bottom: pagination (Previous, 1-4, Next).
5. **Company Logos** — Title: "Our Candidates Work In Company". Subtext. 4-column logo grid (Mailchimp, PayPal, Stripe, Visa). Border-top separator.
6. **Testimonials** — `bg-light` background. Owl carousel with centered layout: person photo, blockquote with quote text and citation (name). 2 slides shown.
7. **CTA Banner** — Full-width background image with dark overlay. Left: heading "Looking For A Job?" + subtext. Right: "Sign Up" warning/yellow button.
8. **Footer** — Dark background (`#242424`). 4 columns: Search Trending (link list), Company (link list), Support (link list), Contact Us (social icons: Facebook, Twitter, Instagram, LinkedIn). Copyright line with heart icon + Colorlib attribution.

## Requirements

### Navbar

#### Scenario: Desktop navbar displays logo and navigation links

- **GIVEN** the viewport is wider than 1200px
- **WHEN** the page loads
- **THEN** the navbar shows the logo "Hirely" on the left
- **AND** the navigation links (Home, Job Listings, About, Services, Blog) are centered
- **AND** a "Contact Us" button is visible on the right

#### Scenario: Mobile navbar shows hamburger menu

- **GIVEN** the viewport is narrower than 768px
- **WHEN** the page loads
- **THEN** the navigation links are hidden
- **AND** a hamburger menu icon is visible

### Hero Section

#### Scenario: Hero displays search form

- **GIVEN** the user is on the homepage
- **WHEN** the hero section loads
- **THEN** a headline "Find Your Dream Job" is displayed
- **AND** a search form with 4 fields is shown: job title input, location dropdown, job type dropdown, search button

#### Scenario: Hero has background image with overlay

- **GIVEN** the user is on the homepage
- **WHEN** the hero section renders
- **THEN** a background image is visible
- **AND** a dark overlay covers the image

### Statistics Section

#### Scenario: Statistics section shows counter cards

- **GIVEN** the user scrolls to the statistics section
- **WHEN** the section is visible
- **THEN** 4 counter items are displayed: Candidates, Jobs Posted, Jobs Filled, Companies
- **AND** each counter shows a number with animation

### Job Listings

#### Scenario: Job listings display cards

- **GIVEN** the user scrolls to the job listings section
- **WHEN** the listings load
- **THEN** a heading "Featured Jobs" is shown
- **AND** at least 6 job cards are displayed
- **AND** each job card shows: image, job type badge, title, publisher, location, salary range

#### Scenario: Job badges use correct colors

- **GIVEN** a job card has type "Freelancer"
- **THEN** the badge is blue (primary color)
- **GIVEN** a job card has type "Full-time"
- **THEN** the badge is yellow (warning color)
- **GIVEN** a job card has type "Part-time"
- **THEN** the badge is green (success color)

#### Scenario: Pagination is shown below listings

- **GIVEN** the user views the job listings
- **WHEN** scrolling to the bottom of the section
- **THEN** Previous and Next links are visible
- **AND** numbered page links (1-4) are shown

### Company Logos

#### Scenario: Company logos section displays partner logos

- **GIVEN** the user scrolls to the company logos section
- **WHEN** the section loads
- **THEN** a heading "Our Candidates Work In Company" is shown
- **AND** 4 partner logo placeholders are displayed in a grid

### Testimonials

#### Scenario: Testimonials carousel shows quotes

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the carousel loads
- **THEN** a testimonial with a person photo, quote text, and citation name is displayed
- **AND** carousel navigation (dots or arrows) allows switching between testimonials

### CTA Banner

#### Scenario: CTA banner displays job sign-up prompt

- **GIVEN** the user scrolls to the CTA banner
- **WHEN** the section is visible
- **THEN** a heading "Looking For A Job?" is displayed
- **AND** a "Sign Up" button with warning (yellow) styling is shown
- **AND** the background image has a dark overlay

### Footer

#### Scenario: Footer shows link columns and social icons

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer renders
- **THEN** 4 link columns are visible: Search Trending, Company, Support, Contact Us
- **AND** social media icons (Facebook, Twitter, Instagram, LinkedIn) are shown
- **AND** a copyright line with Component Dock attribution is present

## Verification checklist

- [x] `apps/hirely/` created, `package.json` uses `@free-react-templates/hirely` — superseded: shipped as `apps/jobquest`
- [ ] `public/CNAME` contains `hirely.free.componentdock.com`
- [ ] `vite.config.ts` includes `injectUiSource()`
- [ ] `index.html` loads Google Fonts (Nunito)
- [ ] Navbar: absolute overlay, logo left, nav center, CTA right, mobile hamburger
- [ ] Hero: background image + dark overlay, heading, 4-field search form
- [ ] Statistics: 4 animated counters with background image overlay
- [ ] Job Listings: list layout, badges with correct colors, pagination
- [ ] Company Logos: 4-column grid with placeholder images
- [ ] Testimonials: carousel with photo, quote, citation
- [ ] CTA Banner: background image overlay, heading, yellow "Sign Up" button
- [ ] Footer: dark bg, 4 columns, social icons, Component Dock link
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Placeholder images use `https://picsum.photos/seed/hirely-<n>/<w>/<h>`
- [ ] Tests: 100% coverage, Vitest + Testing Library
- [ ] Build passes, typecheck passes, lint passes
