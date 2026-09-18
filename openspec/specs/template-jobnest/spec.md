# Template: JobNest (Job Portal)

## Purpose

Recreation of ColorLib's **Jobportal** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/jobportal/
- **Preview:** https://preview.colorlib.com/theme/jobportal/
- **New name:** `jobnest`
- **App folder:** `apps/jobnest`
- **Package:** `@free-react-templates/jobnest`
- **Surge target:** `jobnest.free.componentdock.com`

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#78d5ef` | Light sky blue — primary buttons, links, accent overlays |
| Brand hover | `#4ac7ea` | Slightly darker cyan on hover |
| Brand secondary | `#56caeb` | Intermediate hover state |
| Text primary | `#212529` | Dark grey for body copy |
| Text muted | `#6c757d` | Medium grey for secondary text |
| Background light | `#e9ecef` | Light grey section backgrounds |
| Background white | `#fff` | Card and content backgrounds |
| Font heading | `"Nunito Sans", Arial, sans-serif` | Google Font — load via `<link>` in index.html |
| Font body | `"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | Google Font — load via `<link>` in index.html |
| Button radius | `30px` | Pill-shaped buttons (fully rounded) |
| Button style | Solid `#78d5ef`, text `#212529`, border-radius 30px | `.btn-primary` pattern |
| Overlay | `rgba(0,0,0,0.4)` | Dark overlay on hero and parallax backgrounds |
| Card shadow | `0 2px 20px -2px rgba(0,0,0,0.1)` | Subtle card lift on hover |

## Section structure (page order)

1. **Navbar** — Dark background, brand "JobNest" left, nav links right: Home, About, Blog, Contact, "Post a Job" (outline CTA), "Want a Job" (filled CTA)
2. **Hero** — Full-width background image with dark overlay, parallax effect, headline "We have 850,000 great job offers you deserve!" + "Your Dream Job is Waiting", tabbed search form (Find a Job / Find a Candidate) each with: keyword input, category dropdown, location input, search button
3. **Services** — Light grey background, 4 service cards in a row: "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Search Expert Candidates" — each with icon + title + description
4. **Categories** — White background, "Current Job Posts" heading, 4-column grid of category links with job counts (Web Development, Graphic Designer, Multimedia, Advertising, Education & Training, etc.)
5. **Recent Jobs** — Light grey background, "Recent Jobs" heading, list of job post items (title + type badge + company + location + Apply Job button + heart/favorite button), pagination at bottom
6. **Stats Counter** — Parallax background image, 4 animated counters: Jobs (1,350,000), Members (40,000), Resume (30,000), Company (10,500)
7. **Testimonials** — White background, "Happy Clients" heading, carousel of testimonial cards (avatar, quote, name, role)
8. **Blog** — Light grey background, "Recent Blog" heading, 4-column grid of blog cards (image, date, author, comment count, title, excerpt)
9. **Newsletter** — Parallax background, "Subscribe to our Newsletter" heading, description text, email subscription form
10. **Footer** — Dark background, 4 columns: About (social icons), Employers (links), Workers (links), Have a Questions? (address, phone, email), copyright with Component Dock link

## Gherkin requirements

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation
  Given the user visits the page
  Then the navbar shows "JobNest" as the brand
  And it has links: Home, About, Blog, Contact
  And a "Post a Job" link is visible
  And a "Want a Job" link is visible

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
Scenario: Hero displays headline and tabbed search form
  Given the user visits the page
  Then a headline "Your Dream Job is Waiting" is visible
  And tab pills show "Find a Job" and "Find a Candidate"
  And the "Find a Job" tab is active by default

Scenario: Find a Job tab search form
  Given the "Find a Job" tab is active
  Then a search form has fields: keyword input, category dropdown, location input
  And a "Search" button is present

Scenario: Find a Candidate tab search form
  Given the user clicks the "Find a Candidate" tab
  Then a search form has fields: keyword input, category dropdown, location input
  And a "Search" button is present

Scenario: Tab switching
  Given the user clicks "Find a Candidate" tab
  Then the "Find a Job" tab content is hidden
  And the "Find a Candidate" tab content is shown
```

### Services section

```gherkin
Scenario: Services display four feature cards
  Given the user scrolls to the services section
  Then four service cards are displayed in a row
  And each card has an icon, title, and description
  And the titles are: "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Search Expert Candidates"
```

### Categories section

```gherkin
Scenario: Categories grid displays job categories
  Given the user scrolls to the categories section
  Then a heading "Current Job Posts" is visible
  And a 4-column grid shows at least 16 category links
  And each category link displays a name and job count number
```

### Recent Jobs section

```gherkin
Scenario: Job listings display
  Given the user scrolls to the recent jobs section
  Then a heading "Recent Jobs" is visible
  And at least 9 job post items are rendered
  And each job item shows: title, type badge, company name, location, "Apply Job" button, and a heart/favorite button

Scenario: Job type badges have different colors
  Given the job listings are displayed
  Then "Part Time" badges are blue
  And "Full Time" badges are yellow/warning
  And "Freelance" badges are cyan/info
  And "Internship" badges are grey/secondary
  And "Temporary" badges are red/danger

Scenario: Pagination
  Given the user scrolls past the job listings
  Then pagination controls are visible with numbers 1-5 and prev/next arrows
```

### Stats Counter section

```gherkin
Scenario: Stats counters display with parallax background
  Given the user scrolls to the stats section
  Then four stat counters are visible: Jobs, Members, Resume, Company
  And each counter shows an animated number
  And the section has a parallax background image
```

### Testimonials section

```gherkin
Scenario: Testimonial carousel
  Given the user scrolls to the testimonials section
  Then a heading "Happy Clients" is visible
  And a testimonial card is displayed with avatar, quote, name, and role
  And navigation allows switching between testimonials
```

### Blog section

```gherkin
Scenario: Blog cards display
  Given the user scrolls to the blog section
  Then a heading "Recent Blog" is visible
  And four blog cards are displayed in a row
  And each card has: featured image, date, author, comment count, title, and excerpt text
```

### Newsletter section

```gherkin
Scenario: Newsletter subscription form
  Given the user scrolls to the newsletter section
  Then a heading "Subscribe to our Newsletter" is visible
  And an email input field is present
  And a "Subscribe" button is present
  And the section has a parallax background
```

### Footer

```gherkin
Scenario: Footer content
  Given the user scrolls to the bottom
  Then the footer shows four columns: About, Employers, Workers, Have a Questions?
  And the About column has social media icons (Twitter, Facebook, Instagram)
  And the Employers column has links: How it works, Register, Post a Job, etc.
  And the Workers column has links: How it works, Register, Job Search, etc.
  And the contact column shows address, phone number, and email
  And a copyright line links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All sections match the original structure and order (1:1)
- [ ] Brand color `#78d5ef` used for buttons, links, accent overlays
- [ ] Font "Nunito Sans" and "Work Sans" loaded via Google Fonts link in `index.html`
- [ ] Hero has tabbed search form with "Find a Job" / "Find a Candidate" tabs
- [ ] Services section shows 4 feature cards with icons
- [ ] Categories grid shows 16+ category links with counts
- [ ] Recent Jobs section shows 9+ job items with type badges in different colors
- [ ] Stats counter section has 4 animated counters on parallax background
- [ ] Testimonial carousel with avatar, quote, name, role
- [ ] Blog section shows 4 cards with image, date, author, title, excerpt
- [ ] Newsletter form with email input and subscribe button on parallax bg
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib anywhere in app code
- [ ] Placeholder images via `picsum.photos`
- [ ] Responsive: mobile hamburger menu, stacked layout on small screens
- [ ] Tests: 100% line/function/branch/statement coverage
- [ ] TypeCheck passes, Lint passes, Build succeeds
