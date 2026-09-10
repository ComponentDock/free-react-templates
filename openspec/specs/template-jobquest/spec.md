# Template: JobQuest (Job Listings / Career Platform)

## Purpose

Recreation of ColorLib "Careers" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. The original is a job board / career platform landing page with a hero search form, statistics counters, featured job listings, company logos, testimonials, and a call-to-action footer.

- **ColorLib source:** https://colorlib.com/wp/template/careers/
- **Live preview:** https://preview.colorlib.com/theme/careers/
- **New name:** `jobquest` (apps/jobquest, @free-react-templates/jobquest)
- **Deploy target:** https://jobquest.free.componentdock.com

## Design Tokens (from live preview CSS analysis)

### Colors
| Token | Hex | Usage |
|---|---|---|
| brand-primary | `#1644ba` | Navbar logo, primary buttons, badge-primary, dropdown active, link hover |
| brand-primary-hover | `#1747c3` | Button hover state |
| overlay-dark | `rgba(0,0,0,0.45)` | Hero overlay, stats section overlay, CTA section overlay |
| text-primary | `#212529` | Default body text, headings |
| text-secondary | `#343a40` | Dropdown links, secondary text |
| text-muted | `#7f848c` | Meta captions, muted text |
| bg-light | `#f8f9fa` | Light section backgrounds (testimonials bg-light) |
| bg-gray | `#ebeef0` | Dropdown hover, subtle backgrounds |
| border-color | `#dee2e6` | Borders, dividers |
| white | `#fff` | Text on dark backgrounds, button text, logos |

### Typography
- **Primary font:** `"Nunito", sans-serif` (Google Fonts)
- **Headings:** bold weight (700), clean sans-serif
- **Body:** regular weight (400), Nunito

### Buttons
- **Primary btn:** bg `#1644ba`, text white, border-radius `4px`, padding generous
- **Warning btn:** bg warning color (yellow/orange), used for CTA "Sign Up"
- **Shape:** slightly rounded (`border-radius: 4px`), `btn-lg` variants

### Sections
- Hero: full-width background image + dark overlay
- Stats: full-width background image + primary-color overlay
- Jobs: white background, grid/list layout
- Company logos: white bg, centered logo grid
- Testimonials: light gray bg (`#f8f9fa`), carousel
- CTA: full-width background image + primary-color overlay
- Footer: dark bg (`#242424` / `#3c3c3c`), 4-column link layout

## Section Structure (top to bottom)

1. **Navbar** — Fixed top, logo left ("JobQuest"), nav links center (Home, Job Listings, About, Services, Blog), "Contact Us" button right
2. **Hero** — Full-width background image with dark overlay, centered headline "Find Your Dream Career", subtitle, 4-column search form (keyword input, location dropdown, job type dropdown, search button)
3. **Statistics** — Full-width overlay section, 4 counters (Candidates, Jobs Posted, Jobs Filled, Companies) with animated number counting
4. **Job Listings** — "Featured Jobs" heading, 6 job cards in a bordered list layout (image, badge, title, publisher, location, salary, pagination)
5. **Company Logos** — "Companies Hiring" heading, 6 logo placeholders in a centered grid
6. **Testimonials** — Carousel with person avatar, quote, and attribution name
7. **CTA** — "Looking For A Job?" with subtitle and "Sign Up" button
8. **Footer** — 4-column links (Search Trending, Company, Support, Contact Us with social icons) + Component Dock attribution

## Gherkin Requirements

### Scenario: Navbar renders correctly
```gherkin
Given the user visits the JobQuest landing page
Then the navbar is visible with the "JobQuest" logo
And navigation links "Home", "Job Listings", "About", "Services", "Blog" are displayed
And a "Contact Us" button is visible on the right
```

### Scenario: Hero search form is interactive
```gherkin
Given the user sees the hero section
Then a search form with 3 inputs and 1 submit button is displayed
When the user types "Developer" into the keyword input
And selects "Remote" from the location dropdown
And selects "Full Time" from the job type dropdown
And clicks the "Search Jobs" button
Then the form submission is handled without page reload
```

### Scenario: Statistics section displays counters
```gherkin
Given the user scrolls to the statistics section
Then 4 stat counters are displayed (Candidates, Jobs Posted, Jobs Filled, Companies)
And each counter shows its numeric value
And the section has a dark overlay background
```

### Scenario: Job listings render correctly
```gherkin
Given the user views the job listings section
Then at least 6 job listing cards are displayed
And each card shows an image, job type badge, title, publisher, location, and salary range
And a pagination control is visible at the bottom
```

### Scenario: Company logos section displays
```gherkin
Given the user scrolls to the company logos section
Then "Companies Hiring" heading is displayed
And at least 6 company logo placeholders are shown in a grid
```

### Scenario: Testimonials carousel works
```gherkin
Given the user sees the testimonials section
Then a testimonial with avatar, quote, and attribution is displayed
When the user clicks the next carousel control
Then a different testimonial is shown
```

### Scenario: CTA section renders correctly
```gherkin
Given the user scrolls to the call-to-action section
Then "Looking For A Job?" heading is displayed
And a "Sign Up" button is visible
And the section has a dark overlay background
```

### Scenario: Footer renders correctly
```gherkin
Given the user views the footer
Then 4 link columns are displayed (Search Trending, Company, Support, Contact Us)
And social media icon links are visible in the Contact Us column
And a Component Dock attribution link is present
```

### Scenario: Responsive layout adapts to mobile
```gherkin
Given the user views the page on a mobile viewport (< 768px)
Then the navbar collapses into a hamburger menu
And the search form stacks vertically
And job listings display in single-column layout
And footer columns stack vertically
```

## Verification Checklist

- [ ] Navbar: logo, 5 nav links, Contact Us button
- [ ] Hero: background image overlay, headline, subtitle, 4-field search form
- [ ] Statistics: 4 animated counters with labels
- [ ] Job Listings: 6+ job cards with image, badge, title, meta, location, salary
- [ ] Pagination: previous/next + numbered pages
- [ ] Company Logos: heading + logo grid (placeholder images)
- [ ] Testimonials: carousel with avatar, quote, attribution
- [ ] CTA: heading, subtitle, Sign Up button, dark overlay
- [ ] Footer: 4 columns, social icons, Component Dock link
- [ ] Design tokens: Nunito font, #1644ba brand, dark overlays, 4px border-radius
- [ ] Responsive: mobile hamburger, stacked layout, vertical search
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME + homepage configured for surge deploy
