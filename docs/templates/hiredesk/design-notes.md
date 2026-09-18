# HireDesk — Design Notes & Task Outline

## Source mapping
- **ColorLib source:** Jobpply (slug: `jobpply`)
- **Preview URL:** https://preview.colorlib.com/theme/jobpply/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jobpply-free-template.jpg

## Section order (from live preview DOM)

| # | Section | CSS class | Notes |
|---|---------|-----------|-------|
| 1 | Navbar | `#ftco-navbar` (navbar-dark, bg-dark) | Brand "HireDesk", links: Home, About, Candidates, Blog, Contact. Two CTAs: "Post a Job" (outlined), "Want a Job" (filled colored). Mobile hamburger. |
| 2 | Hero / Search | `.hero-wrap` (full-height, overlay) | Dark overlay on parallax image. Left side: counter ("200,000 great job offers"), heading "Largest Job Site In The World", tab-based search form (Find a Job / Find a Candidate) with keyword, category, location fields. Right side: SVG illustration. |
| 3 | Services | `.services-section` (bg-primary) | Blue background. 4-column grid: Search Millions of Jobs, Easy To Manage Jobs, Top Careers, Search Expert Candidates. Each with icon + title + description. |
| 4 | Top Categories | `.ftco-section` | "Top Categories" heading. 4-column grid of job category links with open position counts (Web Development 354, Graphic Designer 143, etc.). Arrow icons. |
| 5 | Browse by Specialism | `.ftco-section.img` (parallax) | Parallax background image. Left: search icon + "Search Job" + "Browse Job by Specialism" heading. |
| 6 | Hot Jobs | `.ftco-section.bg-light` | "Hot Jobs" heading. 5 job listing items: title, employment badge (Partime/Fulltime/Freelance/Internship), company, location, heart icon, "Apply Job" button. |
| 7 | Counter Stats | `.ftco-counter` (parallax) | Parallax background. 4 stats: 435,000 Jobs, 40,000 Members, 30,000 Resumes, 10,500 Companies. Animated count-up on scroll. |
| 8 | Testimonials | `.testimony-section` | "Happy Clients" heading. Owl Carousel of testimonials: circular photo, quote icon, review text, name, position. |
| 9 | Latest Candidates | `.ftco-candidates` (bg-primary) | Blue background. "Latest Candidates" heading. Carousel of candidate profiles: photo, name, location. |
| 10 | Blog | `.ftco-section.bg-light` | "Recent Blog" heading. 4 blog cards: featured image, date, author, comment count, title. |
| 11 | Newsletter | `.ftco-section-parallax` | Parallax background. "Subscribe to our Newsletter" heading. Email input + "Subscribe" button. |
| 12 | Footer | `.ftco-footer.ftco-bg-dark` | Dark background. 4 columns: About (social icons), Employers (link list), Workers (link list), Have a Questions? (address, phone, email). Copyright line. |

## Design token mapping (Tailwind `@theme`)

```css
@theme {
  --color-primary: #007bff;
  --color-primary-dark: #0056b3;
  --color-dark: #343a40;
  --color-dark-deeper: #212529;
  --color-warning: #ffc107;
  --color-info: #17a2b8;
  --color-secondary: #6c757d;
  --color-danger: #dc3545;
  --color-light: #f8f9fa;
  --color-text-primary: #000000;
  --color-text-muted: #6c757d;
}
```

## Section-by-section fidelity notes

### Navbar
- Dark background (`bg-dark`), navbar-expand-lg for responsive collapse
- Brand text "HireDesk" on left
- Nav links right-aligned (`ml-auto`)
- Two CTA items at end: "Post a Job" (outlined style), "Want a Job" (filled colored)
- Mobile: hamburger icon with "Menu" text, collapses nav links

### Hero / Search
- Full-height section with dark semi-transparent overlay
- Background image (parallax or static)
- Left column: counter with animated number, heading, search form
- Right column: SVG illustration (use placeholder or lucide icon composition)
- Search form has vertical tabs: "Find a Job" and "Find a Candidate"
- Form fields: keyword input, category dropdown, location input, search button
- Search button is `.btn-secondary` (gray)

### Services
- Blue (`#007bff`) background section
- 4 equal-width cards in a row (col-md-3)
- Each card: large icon (flaticon-style → use lucide-react), title, short description
- Cards are vertically aligned and stretch to equal height

### Top Categories
- White background
- "Top Categories" heading centered
- 4-column grid of category items
- Each item: category name, open position count (styled number), forward arrow icon
- Hover effect: row highlights

### Browse by Specialism
- Parallax background image section
- Left side: search icon, "Search Job" subheading, "Browse Job by Specialism" heading
- Minimal content — visual call-to-action section

### Hot Jobs
- Light gray (`#f8f9fa`) background
- 5 job listing items stacked vertically
- Each item: job title (linked), employment type badge (color-coded), company icon + name, location icon + city, heart/favorite icon, "Apply Job" button
- Badge colors: Partime → blue, Fulltime → yellow, Freelance → teal, Internship → gray

### Counter Stats
- Parallax background image
- 4 stat items in a row: icon, animated number, label
- Numbers: 435,000 Jobs, 40,000 Members, 30,000 Resumes, 10,500 Companies
- Count-up animation triggered on scroll into viewport

### Testimonials
- White background
- "Happy Clients" heading centered
- Owl Carousel (or equivalent React carousel) with testimonials
- Each slide: circular customer photo, quote icon overlay, review text, name, position
- Auto-advancing with dot navigation

### Latest Candidates
- Blue (`#007bff`) background
- "Latest Candidates" heading centered (white text)
- Carousel of candidate profiles
- Each profile: circular photo, name, location
- 6 candidate profiles displayed

### Blog
- Light gray (`#f8f9fa`) background
- "Recent Blog" heading centered
- 4 blog cards in a row (col-md-3)
- Each card: featured image with hover overlay, date + author + comment count, title
- Blog entry has `.block-20` class with background image

### Newsletter
- Parallax background
- "Subscribe to our Newsletter" heading (white text, centered)
- Email input + "Subscribe" button in a horizontal form

### Footer
- Dark (`#343a40`) background
- 4 columns: About (description + social icons), Employers (link list), Workers (link list), Have a Questions? (address, phone, email)
- Social icons: Twitter, Facebook, Instagram (use lucide-react equivalents)
- Copyright line → replace Colorlib with "Component Dock" + link to componentdock.com

## Implementation tasks

- [ ] Scaffold `apps/hiredesk/` from simplest existing app
- [ ] Rename package to `@free-react-templates/hiredesk`
- [ ] Set up `public/CNAME` → `hiredesk.free.componentdock.com`
- [ ] Add Nunito Sans font via Google Fonts `<link>` in `index.html`
- [ ] Configure `@theme` tokens in `src/index.css`
- [ ] Implement `Navbar.tsx` — dark navbar, brand, nav links, two CTA buttons, mobile hamburger
- [ ] Implement `Hero.tsx` — full-height hero, dark overlay, counter, heading, tab search form
- [ ] Implement `Services.tsx` — blue background, 4 service cards with icons
- [ ] Implement `TopCategories.tsx` — 4-column category grid with counts
- [ ] Implement `BrowseSpecialism.tsx` — parallax section with search icon/heading
- [ ] Implement `HotJobs.tsx` — 5 job listing cards with badges, company, Apply button
- [ ] Implement `CounterStats.tsx` — parallax background, 4 animated stat counters
- [ ] Implement `Testimonials.tsx` — carousel with customer photos, quotes, names
- [ ] Implement `LatestCandidates.tsx` — blue background, candidate carousel
- [ ] Implement `Blog.tsx` — 4 blog cards with images, metadata, titles
- [ ] Implement `Newsletter.tsx` — parallax section, email input, subscribe button
- [ ] Implement `Footer.tsx` — 4-column layout, social icons, copyright with Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write Vitest tests for every component (100% coverage)
- [ ] Run `scripts/verify-app.sh hiredesk` — typecheck + lint + test:coverage + build
- [ ] Update `docs/templates/hiredesk/` README with status
- [ ] Run `npm run readme:status` at repo root
- [ ] Commit and push to main
