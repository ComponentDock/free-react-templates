# Template: JobHunt (Job Portal)

## Purpose

A Job Portal template with header/nav, hero, top jobs, about and job categories sections. Recreation of ColorLib's **Jobsco** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/jobsco/
- **Preview:** https://preview.colorlib.com/theme/jobsco/
- **New name:** `jobhunt`
- **App folder:** `apps/jobhunt`
- **Package:** `@free-react-templates/jobhunt`
- **Surge target:** `jobhunt.free.componentdock.com`
- **Source design:** ColorLib "Jobsco" — https://colorlib.com/wp/template/jobsco/

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#000DFF` | Vivid blue — primary buttons, links, accents |
| Text primary | `#00044A` | Very dark navy for headings/body |
| Text muted | `#6D6E8D` | Purple-grey for secondary text |
| Background gray | `#F1F5F9` | Light grey section backgrounds |
| Background alt | `#FBFBFB` | Slightly off-white alternate sections |
| Background white | `#ffffff` | Card and content backgrounds |
| Font family | `"DM Sans", sans-serif` | Google Font — load via `<link>` in index.html |
| Button outlined | border `#000DFF`, text `#000DFF`, bg `#fff`, letter-spacing 3px, uppercase | Primary CTA style |
| Button filled | bg `#000DFF`, text `#fff` | Secondary/filled CTA style |
| Button radius | ~`4px` (Bootstrap default) | Slightly rounded corners |
| Sticker badge | bg `#000DFF`, text `#fff`, small pill | "Remote" tags on job cards |
| Decorative watermark | Large faint text (e.g. "jobs", "Talents") | Background watermark text in hero/about sections |
| Footer background | `#F1F5F9` (gray-bg) | Light grey footer area |
| Surface (measured) | `#140c40` | paints it ×24 — `background` on `.genric-btn.primary`; style.css (83,627 B, sha256 01bad8d12415) · <https://preview.colorlib.com/theme/jobsco/> |

## Section structure (page order)

1. **Header/Navbar** — Transparent header on gray bg, logo left, nav links center (Home, Browse Job, Page dropdown, Contact), buttons right (phone icon + "Post A Job" outlined, "Log In" filled)
2. **Hero** — Gray background, large hero image on right, decorative shapes, "jobs" watermark text, headline "Find Your Next Dream Job", subtitle "Easiest way to find a perfect job", two CTA buttons ("Looking For a Job?" outlined, "Find Talent" filled)
3. **Top Jobs** — White background, "1000+" badge, "Browse From Our Top Jobs" heading, horizontal slider of job category cards (6 cards, each: icon image + title + description + "Apply Now" button), some cards have "Remote" sticker badge
4. **About** — Gray background, split layout: illustration image left, text right, heading "We Build Lasting Relationships Between Candidates & Businesses", two paragraphs, "Find Talent" button, "Talents" watermark
5. **Job Categories** — White background, "Browse From Top Categories" heading, 3x2 grid of category cards (6 total, each: icon image + title + description + "Browse Job" button): Design & creatives, Finance, Marketing, Health/Medical, Corporate, Copywriting
6. **Testimonials** — White background, centered testimonial slider, each card: quote icon, quote text, avatar image, name, role, dot navigation, decorative T-shape
7. **Footer** — Gray background, 3 columns: logo + description + social icons (Instagram, Facebook, Twitter), Useful links list, Subscribe newsletter (email input + "Subscribe" button), copyright with Component Dock link

## Requirements

### Header/Navbar

#### Scenario: Navbar displays brand and navigation

- **GIVEN** the user visits the page
- **THEN** the navbar shows a logo
- **AND** it has links: Home, Browse Job, Page, Contact
- **AND** a "Post A Job" button is visible
- **AND** a "Log In" button is visible

#### Scenario: Navbar is sticky on scroll

- **GIVEN** the user scrolls past the hero
- **THEN** the navbar remains fixed at the top

#### Scenario: Mobile hamburger menu

- **GIVEN** the viewport is under 1024px wide
- **THEN** the nav links are hidden
- **AND** a hamburger/mobile menu icon is visible
- **WHEN** the user taps the hamburger
- **THEN** the mobile menu slides open

### Hero section

#### Scenario: Hero displays headline and CTAs

- **GIVEN** the user visits the page
- **THEN** a headline "Find Your Next Dream Job" is visible
- **AND** a subtitle "Easiest way to find a perfect job" is visible
- **AND** two CTA buttons are present: "Looking For a Job?" and "Find Talent"
- **AND** a hero illustration image is displayed on the right

#### Scenario: Hero has decorative elements

- **GIVEN** the user views the hero section
- **THEN** a large "jobs" watermark text is visible in the background
- **AND** decorative shape images are present

### Top Jobs section

#### Scenario: Top jobs slider displays job categories

- **GIVEN** the user scrolls to the top jobs section
- **THEN** a "1000+" badge is visible
- **AND** a heading "Browse From Our Top Jobs" is displayed
- **AND** a horizontal slider shows at least 6 job category cards
- **AND** each card has: an icon, title, description, and "Apply Now" button

#### Scenario: Some job cards have Remote sticker

- **GIVEN** the top jobs slider is displayed
- **THEN** some cards show a "Remote" sticker badge

#### Scenario: Slider is scrollable

- **GIVEN** the user is on the top jobs section
- **WHEN** the user scrolls/swipes horizontally
- **THEN** additional job cards become visible

### About section

#### Scenario: About section displays

- **GIVEN** the user scrolls to the about section
- **THEN** a heading "We Build Lasting Relationships Between Candidates & Businesses" is visible
- **AND** two description paragraphs are shown
- **AND** a "Find Talent" button is present
- **AND** an illustration image is displayed on the left
- **AND** a "Talents" watermark text is in the background

### Job Categories section

#### Scenario: Categories grid displays

- **GIVEN** the user scrolls to the categories section
- **THEN** a heading "Browse From Top Categories" is visible
- **AND** 6 category cards are displayed in a 3x2 grid
- **AND** each card has: icon, title, description, and "Browse Job" button
- **AND** the categories are: Design & creatives, Finance, Marketing, Health/Medical, Corporate, Copywriting

### Testimonials section

#### Scenario: Testimonial slider

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a testimonial card is visible with: quote icon, quote text, avatar, name, and role
- **AND** dot navigation allows switching between testimonials
- **AND** a decorative T-shape image is present

### Footer

#### Scenario: Footer content

- **GIVEN** the user scrolls to the bottom
- **THEN** the footer shows three columns: brand info, Useful links, Subscribe newsletter
- **AND** social media icons are present (Instagram, Facebook, Twitter)
- **AND** a newsletter subscription form with email input and "Subscribe" button is visible
- **AND** a copyright line links to https://www.componentdock.com/

## Verification checklist

- [ ] All sections match the original structure and order (1:1)
- [ ] Brand color `#000DFF` used for buttons, links, accents
- [ ] Font "DM Sans" loaded via Google Fonts link in `index.html`
- [ ] Hero has two CTA buttons with correct styles (outlined + filled)
- [ ] Top Jobs slider shows 6+ category cards with icons
- [x] "Remote" sticker badges on some job cards
- [ ] About section has split layout with image and text
- [ ] Categories grid shows 6 cards in 3x2 layout
- [ ] Testimonial slider with avatars and dot navigation
- [ ] Footer has newsletter subscription form
- [ ] Footer links to Component Dock
- [x] No references to ColorLib anywhere in app code
- [ ] Placeholder images via `picsum.photos`
- [ ] Responsive: mobile hamburger menu, stacked layout on small screens
- [ ] Tests: 100% line/function/branch/statement coverage
- [ ] TypeCheck passes, Lint passes, Build succeeds
