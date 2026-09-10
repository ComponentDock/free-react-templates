# Template: JobCraft (Job Board / Careers)

## Purpose

Recreation of ColorLib **Careers** template.

- Source slug: `careers`
- Preview URL: https://preview.colorlib.com/theme/careers/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/careers-free-template.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from `css/style.css` on the live preview:

| Token              | Value                     | Notes                                                      |
| ------------------ | ------------------------- | ---------------------------------------------------------- |
| Font family        | `'Nunito', sans-serif`    | Google Fonts import in style.css                           |
| Brand primary      | `#1644ba`                 | Blue — active links, dropdown accent, overlay-primary tint |
| Overlay primary    | `rgba(22, 68, 186, 0.9)`  | Blue semi-transparent over hero image                      |
| Heading color      | `#000`                    | All h1–h4                                                  |
| Body text          | `#343a40`                 | Dark gray for paragraphs and list items                    |
| Muted text         | `rgba(52, 58, 64, 0.5)`   | Secondary/meta text                                        |
| Light background   | `#f8f9fa` / `#ebeef0`     | bg-light sections, hover states                            |
| Badge primary      | `#1644ba`                 | Freelancer badge                                           |
| Badge warning      | Bootstrap warning yellow  | Full-time badge                                            |
| Badge success      | Bootstrap success green   | Part-time badge                                            |
| Button radius      | `0.3rem`                  | Slightly rounded, not pill                                 |
| Section padding    | `7rem` top/bottom         | `.site-section`                                            |
| Overlay primary bg | blue tint over hero image | Stats + CTA sections reuse hero_1.jpg                      |

## Visual design (from screenshot reference)

The template is a **job board / careers portal** with a professional, clean
Bootstrap-based layout. Dark overlay hero with a photo background, centered
search form with 4 fields. Blue overlay statistics bar with animated counters.
White job listing cards in a bordered list with thumbnails, badges, and salary
info. Light testimonial carousel with author photos. Dark blue CTA banner.
Standard footer with 4 link columns.

## Requirements (Gherkin)

### Feature: Navbar

- **Scenario:** Logo and navigation links are visible
  - Given the user loads the page
  - Then the navbar shows the logo "JobCraft" on the left
  - And navigation links: Home, Job Listings, About, Services, Blog
  - And a "Contact Us" button is visible on the right (desktop only)

- **Scenario:** Mobile menu toggle works
  - Given the viewport is below xl breakpoint
  - Then the hamburger menu icon is visible
  - And clicking it opens the mobile navigation drawer

### Feature: Hero section

- **Scenario:** Hero displays headline and search form
  - Given the user is on the homepage
  - Then a full-width hero section shows with a background image
  - And the headline "Find Your Dream Career" is centered
  - And a search form with four fields: keyword input, location select, job type select, search button

- **Scenario:** Search form fields are interactive
  - Given the hero section is visible
  - When the user types in the keyword input
  - Then the input accepts text
  - And the location select shows multiple city options
  - And the job type select shows Full Time, Part Time, Freelancer

### Feature: Statistics section

- **Scenario:** Animated counters display key metrics
  - Given the statistics section is visible
  - Then four counters are displayed: Candidates, Jobs Posted, Jobs Filled, Companies
  - And each counter has a large number and a label below

### Feature: Job Listings

- **Scenario:** Job listings section shows featured positions
  - Given the user scrolls to job listings
  - Then a heading "Featured Job Listings" is displayed
  - And at least 6 job items are shown in a list
  - And each item has: thumbnail image, job type badge, job title, publisher/category, location, salary range

- **Scenario:** Job items display correct badge colors
  - Given a job item has type "Freelancer"
  - Then the badge color is blue (primary)
  - And a job item with type "Full-time" shows a yellow badge
  - And a job item with type "Part-time" shows a green badge

- **Scenario:** Pagination is visible below job listings
  - Given the job listings section is displayed
  - Then Previous/Next pagination links are shown

### Feature: Partners section

- **Scenario:** Company logos are displayed
  - Given the partners section is visible
  - Then 4 company logo placeholders are shown in a row

### Feature: Testimonials

- **Scenario:** Testimonial carousel displays quotes
  - Given the testimonials section is visible
  - Then at least 2 testimonial slides are available
  - And each slide shows a person photo, a blockquote, and a citation

### Feature: CTA banner

- **Scenario:** Call-to-action section prompts sign-up
  - Given the CTA section is visible
  - Then the heading "Looking For A Job?" is displayed
  - And a "Sign Up" button is shown

### Feature: Footer

- **Scenario:** Footer has four link columns and copyright
  - Given the user scrolls to the footer
  - Then four columns are shown: Search Trending, Company, Support, Contact Us
  - And each column has a list of links
  - And the bottom row shows copyright text
  - And a link to `https://www.componentdock.com/` is present

## Verification checklist

- [ ] All sections rendered: Navbar, Hero, Stats, Job Listings, Partners, Testimonials, CTA, Footer
- [ ] Design tokens match: Nunito font, #1644ba primary, 0.3rem button radius
- [ ] Search form has 4 fields (keyword, location, job type, search button)
- [ ] Job listing cards show thumbnail, badge, title, publisher, location, salary
- [ ] Badge colors: blue (Freelancer), yellow (Full-time), green (Part-time)
- [ ] Footer links to componentdock.com
- [ ] Responsive: mobile menu, stacked layout on small screens
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
