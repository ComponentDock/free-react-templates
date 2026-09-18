# Template: JobLaunch (Job Portal)

## Purpose

Recreation of ColorLib's **Jobstart** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/jobstart/
- **Preview:** https://preview.colorlib.com/theme/jobstart/
- **New name:** `joblaunch`
- **App folder:** `apps/joblaunch`
- **Package:** `@free-react-templates/joblaunch`
- **Surge target:** `joblaunch.free.componentdock.com`

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#26baee` | Cyan/teal blue — primary buttons, links, accents |
| Text primary | `#25262a` | Dark for headings/body |
| Text muted | `#4d4d4d` | Medium grey for secondary text |
| Background dark | `#393e46` | Dark footer background |
| Background light | `#f8f9fa` | Light grey sections |
| Background alt | `#e6e7e9` | Alternate section bg |
| Border light | `#edf0f5` | Subtle borders |
| Font family | `"Nunito Sans", sans-serif` | Google Font |
| Button primary | bg `#26baee`, text `#fff` | Pill/rounded style |
| Newsletter bg | `#26baee` (primary) | Full-width blue banner |

## Section structure (page order)

1. **Header/Navbar** — Brand "JobLaunch" (first part bold), nav: Home, Category dropdown, Blog, About, Contact, "+ Post a Job" (blue badge button)
2. **Hero** — Background image with parallax, headline "Largest Job Site On The Net", tabbed search form (Find A Job / Find A Candidate) with keyword, category, location, Search button
3. **Recent Jobs** — Light bg, "Recent Jobs" heading, "+ Post a Job" button, 9 job items with title/badge/company/location/heart/apply, pagination
4. **Features** — White bg, "Why JobLaunch" heading, 6 feature cards (hexagon icons): Search Millions of Jobs, Location Search, Top Careers, Search Expert Candidates, Easy To Manage Jobs, Online Reviews
5. **Testimonials** — Light bg, "Happy Employers" heading, owl carousel of testimonial cards (avatar, name, role, quote)
6. **Blog** — White bg, "Latest Blog" heading, 4-column blog cards (image, author, date, title, excerpt)
7. **Newsletter** — Blue bg, "Subscribe Newsletter" heading, email input + "Send" button
8. **Footer** — Dark bg, 5 columns: For Candidates, For Employers, Archives, Company, Contact Info, copyright with Component Dock link

## Gherkin requirements

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation
  Given the user visits the page
  Then the navbar shows "JobLaunch" as the brand
  And it has links: Home, Category, Blog, About, Contact
  And a "+ Post a Job" button is visible

Scenario: Category dropdown
  Given the user hovers over "Category"
  Then a dropdown shows: Full Time, Part Time, Freelance, Internship, Temporary

Scenario: Navbar is sticky on scroll
  Given the user scrolls past the hero
  Then the navbar remains fixed at the top
```

### Hero section

```gherkin
Scenario: Hero displays headline and search form
  Given the user visits the page
  Then a headline "Largest Job Site On The Net" is visible
  And tab pills show "Find A Job" and "Find A Candidate"

Scenario: Find A Job tab
  Given the "Find A Job" tab is active
  Then a search form has fields: keyword, category dropdown, location
  And a "Search" button is present

Scenario: Tab switching
  Given the user clicks "Find A Candidate" tab
  Then the "Find A Job" content hides and candidate form shows
```

### Recent Jobs section

```gherkin
Scenario: Job listings display
  Given the user scrolls to recent jobs
  Then a "Recent Jobs" heading is visible
  And at least 9 job items are rendered
  And each item shows: title, type badge, company, location, heart button, "Apply Job" button

Scenario: Job type badges
  Given the job listings are displayed
  Then badges use colors: blue=Part Time, yellow=Full Time, cyan=Freelance, grey=Internship, red=Temporary

Scenario: Pagination
  Given the user scrolls past job items
  Then pagination controls show numbers 1-5 with prev/next arrows
```

### Features section

```gherkin
Scenario: Features grid
  Given the user scrolls to features
  Then a "Why JobLaunch" heading is visible
  And 6 feature cards are displayed in 3x2 grid
  And each card has a hexagon icon, title, and description
  And titles are: Search Millions of Jobs, Location Search, Top Careers, Search Expert Candidates, Easy To Manage Jobs, Online Reviews
```

### Testimonials section

```gherkin
Scenario: Testimonial carousel
  Given the user scrolls to testimonials
  Then a "Happy Employers" heading is visible
  And a testimonial card shows avatar, name, role, and quote
  And navigation dots allow switching testimonials
```

### Blog section

```gherkin
Scenario: Blog cards display
  Given the user scrolls to blog
  Then a "Latest Blog" heading is visible
  And 4 blog cards are shown in a row
  And each card has: image, author, date, title, and excerpt
```

### Newsletter section

```gherkin
Scenario: Newsletter form
  Given the user scrolls to newsletter
  Then a "Subscribe Newsletter" heading is on a blue background
  And an email input and "Send" button are present
```

### Footer

```gherkin
Scenario: Footer content
  Given the user scrolls to the bottom
  Then the footer shows columns: For Candidates, For Employers, Archives, Company, Contact Info
  And contact info shows address, telephone, email
  And a copyright line links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All sections match original structure and order (1:1)
- [ ] Brand color `#26baee` used for buttons, links, accents
- [ ] Font "Nunito Sans" loaded via Google Fonts
- [ ] Hero has tabbed search form with two tabs
- [ ] Recent Jobs shows 9+ items with colored type badges
- [ ] Features section has 6 cards with hexagon icons
- [ ] Testimonial carousel with avatars
- [ ] Blog section shows 4 cards
- [ ] Newsletter on blue background
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive: mobile hamburger, stacked layout
- [ ] Tests: 100% coverage
- [ ] TypeCheck, Lint, Build pass
