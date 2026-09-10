# Template: Hirely (Career / Job Board)

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

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Desktop navbar displays logo and navigation links
  Given the viewport is wider than 1200px
  When the page loads
  Then the navbar shows the logo "Hirely" on the left
  And the navigation links (Home, Job Listings, About, Services, Blog) are centered
  And a "Contact Us" button is visible on the right

Scenario: Mobile navbar shows hamburger menu
  Given the viewport is narrower than 768px
  When the page loads
  Then the navigation links are hidden
  And a hamburger menu icon is visible
```

### Hero Section
```gherkin
Scenario: Hero displays search form
  Given the user is on the homepage
  When the hero section loads
  Then a headline "Find Your Dream Job" is displayed
  And a search form with 4 fields is shown: job title input, location dropdown, job type dropdown, search button

Scenario: Hero has background image with overlay
  Given the user is on the homepage
  When the hero section renders
  Then a background image is visible
  And a dark overlay covers the image
```

### Statistics Section
```gherkin
Scenario: Statistics section shows counter cards
  Given the user scrolls to the statistics section
  When the section is visible
  Then 4 counter items are displayed: Candidates, Jobs Posted, Jobs Filled, Companies
  And each counter shows a number with animation
```

### Job Listings
```gherkin
Scenario: Job listings display cards
  Given the user scrolls to the job listings section
  When the listings load
  Then a heading "Featured Jobs" is shown
  And at least 6 job cards are displayed
  And each job card shows: image, job type badge, title, publisher, location, salary range

Scenario: Job badges use correct colors
  Given a job card has type "Freelancer"
  Then the badge is blue (primary color)
  Given a job card has type "Full-time"
  Then the badge is yellow (warning color)
  Given a job card has type "Part-time"
  Then the badge is green (success color)

Scenario: Pagination is shown below listings
  Given the user views the job listings
  When scrolling to the bottom of the section
  Then Previous and Next links are visible
  And numbered page links (1-4) are shown
```

### Company Logos
```gherkin
Scenario: Company logos section displays partner logos
  Given the user scrolls to the company logos section
  When the section loads
  Then a heading "Our Candidates Work In Company" is shown
  And 4 partner logo placeholders are displayed in a grid
```

### Testimonials
```gherkin
Scenario: Testimonials carousel shows quotes
  Given the user scrolls to the testimonials section
  When the carousel loads
  Then a testimonial with a person photo, quote text, and citation name is displayed
  And carousel navigation (dots or arrows) allows switching between testimonials
```

### CTA Banner
```gherkin
Scenario: CTA banner displays job sign-up prompt
  Given the user scrolls to the CTA banner
  When the section is visible
  Then a heading "Looking For A Job?" is displayed
  And a "Sign Up" button with warning (yellow) styling is shown
  And the background image has a dark overlay
```

### Footer
```gherkin
Scenario: Footer shows link columns and social icons
  Given the user scrolls to the footer
  When the footer renders
  Then 4 link columns are visible: Search Trending, Company, Support, Contact Us
  And social media icons (Facebook, Twitter, Instagram, LinkedIn) are shown
  And a copyright line with Component Dock attribution is present
```

## Verification Checklist

- [ ] `apps/hirely/` created, `package.json` uses `@free-react-templates/hirely`
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
