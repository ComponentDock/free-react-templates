# Template: JobNest (Job Board / Careers)

## Purpose

Recreation of ColorLib's **Job Board 2** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/job-board-2/
- **Preview:** https://preview.colorlib.com/theme/jobboard2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jobboard2-free-template.jpg
- **New name:** `jobnest`
- **App folder:** `apps/jobnest`
- **Package:** `@free-react-templates/jobnest`
- **Surge target:** `jobnest.free.componentdock.com`

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#00D363` | Green — primary buttons, accents, overlays |
| Brand hover | `#00B856` | Slightly darker green on hover (outlined state) |
| Text primary | `#222222` | Dark grey for body copy |
| Text secondary | `#495057` | Medium grey for descriptions |
| Text muted | `#777777` | Light grey for meta text |
| Text on dark | `#ffffff` | White text on hero/footer backgrounds |
| Background light | `#F5F7FA` | Light grey section backgrounds (job listings, featured candidates, top companies) |
| Background card | `#ffffff` | White cards on light sections |
| Dark background | `#001D38` | Dark navy — footer background |
| Dark overlay | `#040E27` | Darker navy — CTA overlay background |
| CTA background | `#2B9BFF` | Blue — job search CTA banner |
| Border light | `#EAEAEA` | Light border on job listing cards |
| Font family | `"Roboto", sans-serif` | Google Font — load via `<link>` in index.html |
| Border radius | `5px` | Cards, buttons, category tiles |
| Button primary | Solid green `#00D363`, white text, `5px` radius, `padding: 13px 29px` | `.boxed-btn3` — primary CTA |
| Button primary hover | Transparent with green border (`#00D363`), green text | Outlined reversal |
| Button secondary | Outlined, green border, green text, same padding | `.boxed-btn4` — "Browse More Job" |
| Banner background | `url(../img/banner/banner.png)` no-repeat center | Hero section background image |
| Shadow | `0 5px 15px rgba(0,0,0,0.08)` | Card hover lift |
| Candidate avatar | `120px` circle | Rounded candidate photos |

## Section structure (page order)

1. **Navbar** — Sticky header: logo left, nav links center (Home, Browse Job, Pages dropdown, Blog dropdown, Contact), right side has "Log in" text link + "Post a Job" green button. Mobile hamburger.
2. **Hero** — Full-width background image (banner.png), left-aligned text: "4536+ Jobs listed" subhead, "Find your Dream Job" headline, descriptive paragraph, "Upload your Resume" green button. Right-side illustration (d-none on mobile).
3. **Job Search Bar** — Green-tinted area with 4-column form: keyword text input, location select, category select, "Find Job" green button. Below: "Popular Search:" tag list (Design & Creative, Marketing, Administration, etc.).
4. **Popular Categories** — 8 category cards in a 4-column grid, white background, `5px` border-radius, each with category name + position count (e.g. "Design & Creative — 50 Available position").
5. **Job Listings** — Light grey background, "Job Listing" heading + "Browse More Job" secondary button. List of job cards (white, `5px` radius, flex row): company SVG icon left, job title + location + type, right side has heart icon + "Apply Now" button + deadline date.
6. **Featured Candidates** — Light grey background, carousel of candidate cards: round avatar photo, name, role title.
7. **Top Companies** — Light grey background, "Top Companies" heading + "Browse More Job" button. 4-column grid of company cards: company SVG icon, company name, position count.
8. **CTA Banner** — Blue background (`#2B9BFF`), two-column layout: "Looking for a Job?" with "Browse Job" button | "Looking for a Expert?" with "Post a Job" button.
9. **Testimonials** — White/light background, carousel of testimonials: author avatar (round), quote icon, testimonial text, author name.
10. **Footer** — Dark navy (`#001D38`) background. 4 columns: Logo + contact info + social icons | Company links | Category links | Newsletter form (email input + Subscribe button). Copyright bar at bottom with Component Dock link.

## Gherkin requirements

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation links
  Given the user visits the page
  Then the navbar shows the brand logo
  And it has links: Home, Browse Job, Pages, Blog, Contact
  And a "Log in" link and "Post a Job" button are visible on the right

Scenario: Navbar is sticky on scroll
  Given the user scrolls past the hero
  Then the navbar remains fixed at the top

Scenario: Mobile hamburger menu
  Given the viewport is under 1024px wide
  Then the nav links are hidden
  And a hamburger icon is visible
  When the user taps the hamburger
  Then the mobile menu opens
```

### Hero

```gherkin
Scenario: Hero displays headline and CTA
  Given the user visits the page
  Then a job count subheading is visible (e.g. "4536+ Jobs listed")
  And the main headline "Find your Dream Job" is visible
  And an "Upload your Resume" button is present

Scenario: Hero background image loads
  Given the user visits the page
  Then the hero section has a background image
```

### Job Search Bar

```gherkin
Scenario: Search bar shows all filter inputs
  Given the user visits the page
  Then a keyword text input is visible
  And a location dropdown is visible
  And a category dropdown is visible
  And a "Find Job" button is present

Scenario: Popular search tags display
  Given the user visits the page
  Then "Popular Search:" label is visible
  And category tags are shown (Design & Creative, Marketing, etc.)

Scenario: Search form prevents default submit
  Given the user clicks "Find Job" without filling fields
  Then the form does not navigate away
```

### Popular Categories

```gherkin
Scenario: Category grid displays 8 categories
  Given the user visits the page
  Then 8 category cards are displayed
  And each card shows a category name and position count

Scenario: Category cards are clickable
  Given the user clicks a category card
  Then the page does not navigate (placeholder link)
```

### Job Listings

```gherkin
Scenario: Job listing section displays heading
  Given the user visits the page
  Then "Job Listing" heading is visible
  And a "Browse More Job" button is present

Scenario: Job cards show required info
  Given the user views the job listing section
  Then at least 5 job cards are displayed
  And each card shows: company icon, job title, location, job type, Apply Now button, deadline

Scenario: Job cards have favorite button
  Given the user views a job card
  Then a heart icon (favorite) button is visible

Scenario: Job card hover effect
  Given the user hovers over a job card
  Then the card has a subtle border/shadow transition
```

### Featured Candidates

```gherkin
Scenario: Featured candidates carousel renders
  Given the user visits the page
  Then a "Featured Candidates" heading is visible
  And a carousel of candidate cards is displayed
  And each card shows: avatar, name, role

Scenario: Candidate avatars are circular
  Given the user views a candidate card
  Then the avatar image is displayed in a circle shape
```

### Top Companies

```gherkin
Scenario: Top companies section renders
  Given the user visits the page
  Then a "Top Companies" heading is visible
  And a "Browse More Job" button is present
  And company cards are displayed in a grid

Scenario: Company cards show info
  Given the user views a company card
  Then it shows: company icon, company name, position count
```

### CTA Banner

```gherkin
Scenario: CTA banner shows two CTAs
  Given the user visits the page
  Then a blue background banner is visible
  And "Looking for a Job?" with "Browse Job" button is shown
  And "Looking for a Expert?" with "Post a Job" button is shown

Scenario: CTA buttons are green
  Given the user views the CTA banner
  Then both buttons use the brand green color
```

### Testimonials

```gherkin
Scenario: Testimonial carousel renders
  Given the user visits the page
  Then a "Testimonial" heading is visible
  And a carousel of testimonial cards is displayed
  And each card shows: author avatar, quote icon, testimonial text, author name

Scenario: Testimonial avatars are circular
  Given the user views a testimonial card
  Then the author avatar is displayed in a circle shape
```

### Footer

```gherkin
Scenario: Footer displays all columns
  Given the user visits the page
  Then a dark-background footer is visible
  And it contains: logo + contact info, Company links, Category links, Newsletter form
  And social media icons are present (Facebook, Google+, Twitter, Instagram)

Scenario: Newsletter form exists
  Given the user views the footer
  Then an email input with placeholder "Enter your mail" is visible
  And a "Subscribe" button is present

Scenario: Footer has Component Dock attribution
  Given the user views the footer copyright bar
  Then a link to componentdock.com is present
  And no ColorLib attribution is shown
```

## Verification checklist

- [ ] Navbar: sticky, logo, nav links, login + post button, mobile hamburger
- [ ] Hero: background image, headline, subtext, CTA button
- [ ] Job Search: keyword input, location/category dropdowns, find button, popular tags
- [ ] Popular Categories: 8 cards in grid, name + position count
- [ ] Job Listings: heading, browse button, 5+ job cards with all fields
- [ ] Featured Candidates: carousel with avatar/name/role cards
- [ | ] Top Companies: heading, browse button, company cards grid
- [ ] CTA Banner: blue background, two-column layout, green buttons
- [ ] Testimonials: carousel with avatar, quote, name
- [ ] Footer: dark navy, 4 columns, social icons, newsletter, Component Dock link
- [ ] Design tokens: brand green `#00D363`, Roboto font, 5px radius, light grey sections
- [ ] Responsive: mobile hamburger, stacked layouts on small screens
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `jobnest.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
