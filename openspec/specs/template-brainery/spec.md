# Template: Brainery (Education / Learning Page)
<!-- prep-status: shipped-as=lectio -->
> **SHIPPED-UNDER** — the ColorLib `academica` design this prep describes already
> ships as `apps/lectio` (<https://lectio.free.componentdock.com>).
> Do not scaffold `apps/brainery`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-lectio/spec.md`.

## Purpose

Brainery is a single-page EDUCATION / LEARNING LANDING PAGE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Academica" free template (source:
https://colorlib.com/wp/template/academica/), built under a DIFFERENT name
(**Brainery**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

**Preview URL — REACHABLE (verified 2026-09-19):**
`https://preview.colorlib.com/theme/academica/`
(title: "Academica - Learning Page Template", HTTP 200, Bootstrap 3 site).

The original is a Bootstrap 3 education landing page with a fixed header,
full-width hero with background image, a multi-field course search bar,
six service cards with flaticon icons, a testimonial slider with
parallax background, a course catalog carousel with pricing and ratings,
and a footer. It uses Raleway (Google Fonts), Font Awesome icons,
and a blue-to-purple gradient (#185dd0 → #7076fc) as the primary brand.

**WHAT MAKES BRAINERY DISTINCT (signature behaviors):**

1. **Fixed header with logo + login/register + nav.** The header has a
   dark gradient background (#185dd0 → #7076fc), contains a logo image,
   "Login / Register" links on the right, and a horizontal nav (Home,
   About us, Courses, News, Contact). On mobile, a hamburger icon toggles
   the menu. The header is NOT sticky (it scrolls away).
2. **Full-viewport hero with background image + author info.** The hero
   section uses a full-width background image (`data-setbg` pattern),
   with a large white headline ("Literature Course"), description text,
   an author avatar + name + title, and a "See Details" CTA button with
   a gradient background. The layout is left-aligned (col-lg-7).
3. **Multi-field course search bar.** A horizontal search form with 5
   text inputs (Course, Level, Date, Teacher, Price) and a "Search"
   button — all inline in a row. The section has a white background
   and sits between the hero and services.
4. **Six service cards in 3-column grid.** Each card has a large
   flaticon icon (gradient blue), title ("Training Center"), and
   description text. The icons use the brand gradient as background.
   Cards are evenly spaced in a 3x2 grid.
5. **Testimonials with parallax background.** The review section uses
   a full-width background image with a dark overlay. Testimonials
   are displayed in an owl-carousel slider with a large blue quotation
   mark, heading, paragraph, author avatar, and name. White text on
   dark background.
6. **Course catalog with pricing.** The courses section shows 4 course
   cards, each with a preview image, a blue price badge (overlaid on
   the image), course title, description, student count, location count,
   star rating, and seller info (avatar + name). Cards are in a
   carousel layout.

## Design tokens

Extracted from `https://preview.colorlib.com/theme/academica/css/style.css`
(Bootstrap 3 + custom styles):

### Colors
| Token / Usage          | Value         | Notes                              |
| ---------------------- | ------------- | ---------------------------------- |
| Primary gradient (start) | #185dd0     | Header bg, icon bg, price badge    |
| Primary gradient (end)   | #7076fc     | Button bg, gradient end            |
| Section title accent    | #1a5ed1      | Blue span text in section titles   |
| Heading text            | #1d1d1d      | Near-black for h2-h6               |
| Body text               | #838383      | Gray for paragraphs                |
| Background white        | #ffffff      | Page bg, services section          |
| Testimonial accent      | #f3e830      | Yellow for sec-style-2 spans       |

### Typography
| Token          | Value                                |
| -------------- | ------------------------------------ |
| font-family    | "Raleway", sans-serif                |
| font-weight    | 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold) |
| h2             | 34px, weight 500                     |
| h3             | 30px, weight 600                     |
| h4             | 24px, weight 600                     |
| h5             | 20px, weight 600                     |
| h6             | 14px, weight 600                     |
| p              | 14px, color #838383, line-height 2.1 |
| Section title span | 12px, uppercase, weight 700, letter-spacing 2px, color #1a5ed1 |

### Buttons / Shapes
- `.site-btn`: gradient bg (#7076fc → #185dd0 bottom-to-top), white text,
  weight 600, 14px, min-width 168px, padding 14px 5px
- Button after pseudo-element: gradient bar (same as header) at bottom
- Rounded: none (square buttons, sharp edges — Bootstrap 3 default)
- Cards: no explicit border-radius (sharp corners)

### Sections (from HTML)
1. Header (fixed, gradient bg)
2. Hero (full-width bg image, white text, left-aligned)
3. Search (white bg, inline 5-field form)
4. Services (white bg, 3-col grid, 6 cards)
5. Testimonials (parallax bg image, white text, carousel)
6. Courses (white bg, carousel of 4 course cards)
7. Footer (not fully analyzed — standard Bootstrap footer)

## Requirements

### Feature: Brainery education landing page

As a prospective student visiting the Brainery landing page,
I want to explore courses, read testimonials, and search for classes,
so that I can find the right learning opportunity.

#### Scenario: Header displays navigation and auth links

- **GIVEN** I am on the landing page
- **THEN** I should see a header with a logo
- **AND** I should see "Login" and "Register" links
- **AND** I should see navigation links: Home, About us, Courses, News, Contact
- **AND** on mobile I should see a hamburger menu icon

#### Scenario: Hero section shows featured course

- **GIVEN** I am on the landing page
- **THEN** I should see a full-width hero with a background image
- **AND** I should see a large white headline (e.g. "Literature Course")
- **AND** I should see a description paragraph
- **AND** I should see an author avatar with name and title
- **AND** I should see a "See Details" CTA button with gradient background

#### Scenario: Course search form

- **GIVEN** I am on the landing page
- **WHEN** I scroll to the search section
- **THEN** I should see "Search your Course" heading
- **AND** I should see 5 input fields: Course, Level, Date, Teacher, Price
- **AND** I should see a "Search" button

#### Scenario: Services section displays 6 service cards

- **GIVEN** I am on the landing page
- **WHEN** I scroll to the services section
- **THEN** I should see 6 service cards in a 3-column grid
- **AND** each card should have an icon, title, and description
- **AND** the icons should use the brand gradient

#### Scenario: Testimonials carousel

- **GIVEN** I am on the landing page
- **WHEN** I scroll to the testimonials section
- **THEN** I should see a section with a dark background image
- **AND** I should see "Testimonials" heading
- **AND** I should see testimonial slides with quotes, avatars, and names
- **AND** I should be able to navigate between slides

#### Scenario: Course catalog cards

- **GIVEN** I am on the landing page
- **WHEN** I scroll to the courses section
- **THEN** I should see 4 course cards
- **AND** each card should show an image, price badge, title, description
- **AND** each card should show student count, location count, and star rating
- **AND** each card should show seller info (avatar + name)

#### Scenario: Footer with links

- **GIVEN** I am on the landing page
- **WHEN** I scroll to the footer
- **THEN** I should see footer links and copyright information
- **AND** I should see a "Component Dock" attribution link

#### Scenario: Mobile responsive layout

- **GIVEN** I am viewing the page on a mobile viewport
- **THEN** the header should collapse to a hamburger menu
- **AND** the service cards should stack vertically
- **AND** the course cards should stack vertically

## Verification checklist

- [ ] Header with logo, auth links, nav, mobile hamburger
- [ ] Hero section: bg image, headline, description, author, CTA
- [ ] Search section: 5-field form with search button
- [ ] Services: 6 cards with gradient icons in 3-col grid
- [ ] Testimonials: dark bg, carousel, quotes, avatars
- [ ] Courses: 4 cards with images, prices, ratings, seller info
- [ ] Footer with links and Component Dock attribution
- [ ] Mobile: hamburger menu, stacked layouts
- [ ] No references to ColorLib in app code
- [ ] Tailwind @theme tokens match extracted values
