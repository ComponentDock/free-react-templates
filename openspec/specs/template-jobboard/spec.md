# Template: JobBoard (Careers)

## Purpose

Recreation of ColorLib's **Careers** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/careers/
- **Preview:** https://preview.colorlib.com/theme/careers/
- **New name:** `jobboard`
- **App folder:** `apps/jobboard`
- **Package:** `@free-react-templates/jobboard`
- **Surge target:** `jobboard.free.componentdock.com`

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#1644ba` | Deep royal blue — primary buttons, links, accent overlays |
| Brand hover | `#1747c3` | Slightly lighter blue on hover |
| Text primary | `#212529` | Dark grey for body copy |
| Text on dark | `#fff` | White text on hero/overlay backgrounds |
| Text muted | `rgba(255,255,255,0.6)` | Semi-transparent white for hero subtext |
| Background light | `#f8f9fa` | Light grey section backgrounds |
| Background card | `#ebeef0` | Input/select dropdown background |
| Border accent | `#1644ba` | Top border on job item cards |
| Font family | `"Nunito", sans-serif` | Google Font — load via `<link>` in index.html |
| Border radius | `0.3rem` | Search form buttons and inputs |
| Button style | Solid blue (`#1644ba`), white text, rounded `0.3rem` | `.btn-primary` pattern |
| Overlay | `rgba(22,68,186,0.9)` | Blue overlay on stats/CTA banners |
| Shadow | `0 2px 20px -2px rgba(0,0,0,0.2)` | Card lift shadow |

## Section structure (page order)

1. **Navbar** — Brand text "JobBoard" left-aligned, nav links center (Home, Job Listings, About, Services, Blog), "Contact Us" button right (blue, icon + text)
2. **Hero** — Full-width background image with dark overlay, centered headline ("Find Your Next Career Move"), subtext, job search form (4 fields: keyword input, location dropdown, type dropdown, Search button)
3. **Stats banner** — Blue overlay on hero image, "Job Board Statistics" heading, 4 stat counters (Jobs Posted, Companies, Candidates, Success Stories) with animated count-up
4. **Job listings** — White background, "Featured Jobs" heading, list of job cards (each: title, company, type badge, location, salary, date), blue left-border accent, "View More Jobs" button
5. **Company logos** — "Top Companies Hiring" heading, row of company logo placeholders (greyscale, hover to colour)
6. **Testimonials** — Light grey background, testimonial carousel with avatar, name, role, quote
7. **CTA banner** — Blue overlay, "Ready to Start?" heading, subtext, "Browse Jobs" button
8. **Footer** — Multi-column: brand + description, Quick Links, Company, Contact info. Social icons. Copyright with Component Dock link.

## Gherkin requirements

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation
  Given the user visits the page
  Then the navbar shows "JobBoard" as the brand
  And it has links: Home, Job Listings, About, Services, Blog
  And a "Contact Us" button is visible on the right

Scenario: Navbar is sticky on scroll
  Given the user scrolls past the hero
  Then the navbar remains fixed at the top

Scenario: Mobile hamburger menu
  Given the viewport is under 1024px wide
  Then the nav links are hidden
  And a hamburger icon is visible
  When the user taps the hamburger
  Then the mobile menu slides open
```

### Hero section

```gherkin
Scenario: Hero displays headline and search form
  Given the user visits the page
  Then a headline is visible in the hero area
  And a search form has fields: keyword, location, job type
  And a "Search Jobs" button is present

Scenario: Search form submits
  Given the user fills in keyword "developer"
  When the user clicks "Search Jobs"
  Then the form prevents default submission
```

### Stats banner

```gherkin
Scenario: Stats counters animate on scroll
  Given the user scrolls to the stats section
  Then four stat counters appear (Jobs Posted, Companies, Candidates, Success Stories)
  And each counter animates from 0 to its target number
```

### Job listings

```gherkin
Scenario: Job cards display correctly
  Given the user scrolls to the job listings section
  Then at least 6 job cards are rendered
  And each card shows: title, company, type badge, location, salary, date

Scenario: Job card hover effect
  Given the user hovers over a job card
  Then the card lifts with a shadow effect

Scenario: View More button
  Given the user sees the job listings
  Then a "View More Jobs" button is visible below the list
```

### Company logos

```gherkin
Scenario: Company logos section displays
  Given the user scrolls to the companies section
  Then a row of at least 6 company logo placeholders is visible
  And logos are greyscale, colour on hover
```

### Testimonials

```gherkin
Scenario: Testimonial carousel
  Given the user scrolls to the testimonials section
  Then a testimonial card is visible with avatar, name, role, quote
  And navigation dots/arrows allow switching between testimonials
```

### CTA banner

```gherkin
Scenario: CTA banner displays
  Given the user scrolls to the call-to-action section
  Then a heading is visible
  And a "Browse Jobs" button links to the jobs section
```

### Footer

```gherkin
Scenario: Footer content
  Given the user scrolls to the bottom
  Then the footer shows: brand description, Quick Links, Company, Contact info
  And social media icons are present
  And a copyright line links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All sections match the original structure and order (1:1)
- [ ] Brand color `#1644ba` used for buttons, links, accent overlays
- [ ] Font "Nunito" loaded via Google Fonts link in `index.html`
- [ ] Search form has 3 input fields + search button
- [ ] Stats section has 4 animated counters
- [ ] Job cards show: title, company, type, location, salary, date
- [ ] Company logos section present
- [ ] Testimonial carousel functional
- [ ] CTA banner with blue overlay
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib anywhere in app code
- [ ] Placeholder images via `picsum.photos`
- [ ] Responsive: mobile hamburger menu, stacked layout on small screens
- [ ] Tests: 100% line/function/branch/statement coverage
- [ ] TypeCheck passes, Lint passes, Build succeeds
