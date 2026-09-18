# JobNest — Implementation Notes

Source: ColorLib "Jobportal" (`jobportal`)
Preview: https://preview.colorlib.com/theme/jobportal/

## Section order (from live preview DOM)

1. Navbar (dark bg, sticky)
2. Hero (parallax bg, overlay, headline, tabbed search form)
3. Services (4 cards on light bg)
4. Categories (4-column grid of category links with counts)
5. Recent Jobs (job post items with badges, pagination)
6. Stats Counter (parallax bg, 4 animated counters)
7. Testimonials (carousel, white bg)
8. Blog (4 blog cards on light bg)
9. Newsletter (parallax bg, email subscription form)
10. Footer (4 columns, dark bg)

## Design tokens

- Brand blue: `#78d5ef` → use as Tailwind primary
- Hover cyan: `#4ac7ea`
- Text dark: `#212529`
- Text muted: `#6c757d`
- Section bg light: `#e9ecef`
- Font heading: "Nunito Sans" (Google Font)
- Font body: "Work Sans" (Google Font)
- Button radius: 30px (pill shape)
- Button bg: `#78d5ef`, text: `#212529`
- Overlay: rgba(0,0,0,0.4) on hero/parallax sections

## Fidelity notes

### Navbar
- Dark background (`bg-dark`)
- Brand text "JobNest" left
- Links right: Home, About, Blog, Contact
- Two CTA buttons: "Post a Job" (outline style), "Want a Job" (filled/colored)
- Sticky on scroll with dark navbar class
- Mobile: hamburger toggler with collapse

### Hero
- Full-width background image with dark overlay (0.4 opacity)
- Parallax effect via `data-stellar-background-ratio`
- Large headline: "We have 850,000 great job offers you deserve!" + "Your Dream Job is Waiting" (second line in brand color)
- Tabbed search form: pills for "Find a Job" (active) / "Find a Candidate"
- Each tab has: keyword input (with briefcase icon), category dropdown, location input (with map marker icon), "Search" pill button

### Services
- Light grey background (`#e9ecef`)
- 4-column layout, each column has:
  - Icon (flaticon: resume, collaboration, promotions, employee)
  - Title: "Search Millions of Jobs", "Easy To Manage Jobs", "Top Careers", "Search Expert Candidates"
  - Description paragraph

### Categories
- White background
- Centered heading: "Categories work waiting for you" (subheading) + "Current Job Posts"
- 4-column grid of category lists, each list has 4 items with name + count number
- Categories: Web Development (1000), Graphic Designer (1000), Multimedia (2000), Advertising (900), Education & Training (3500), English (1560), Social Media (1000), Writing (2500), PHP Programming (5500), Project Management (2000), Finance Management (800), Office & Admin (7000), Web Designer (8000), Customer Service (4000), Marketing & Sales (3300), Software Development (1356)

### Recent Jobs
- Light grey background
- Centered heading: "Recently Added Jobs" (subheading) + "Recent Jobs"
- Each job item is a white card with flex layout:
  - Left: title (h2/h3) + badge (colored by type), company name + location
  - Right: "Apply Job" button (primary pill) + heart/favorite button (rounded circle)
- Badge colors: primary (blue)=Part Time, warning=Full Time, info(cyan)=Freelance, secondary(grey)=Internship, danger(red)=Temporary
- Pagination at bottom: prev/next arrows + numbered pages 1-5

### Stats Counter
- Parallax background image with dark overlay
- 4 counters in a row: Jobs (1,350,000), Members (40,000), Resume (30,000), Company (10,500)
- Animated count-up on scroll (waypoints + animateNumber)

### Testimonials
- White background
- Centered heading: "Testimonial" (subheading) + "Happy Clients"
- Owl carousel of testimonial cards:
  - Avatar image (circular with border)
  - Quote icon
  - Quote text
  - Name (bold)
  - Role/position (muted)
- 5 testimonial items in carousel

### Blog
- Light grey background
- Centered heading: "Our Blog" (subheading) + "Recent Blog"
- 4-column grid of blog cards:
  - Featured image with hover overlay
  - Meta: date, author, comment count
  - Title (linked)
  - Excerpt paragraph

### Newsletter
- Parallax background image with dark overlay
- Centered white text
- Heading: "Subscribe to our Newsletter"
- Description paragraph
- Email input + "Subscribe" button (inline form)

### Footer
- Dark background (`ftco-bg-dark`)
- 4 columns:
  1. About: description + social icons (Twitter, Facebook, Instagram)
  2. Employers: link list (How it works, Register, Post a Job, Advance Skill Search, Recruiting Service, Blog, Faq)
  3. Workers: link list (How it works, Register, Post Your Skills, Job Search, Employer Search)
  4. Have a Questions?: address, phone, email with icons
- Copyright line: "All rights reserved | This template is made with ❤ by Colorlib" → replace with Component Dock link

## Implementation tasks

- [ ] Scaffold app from existing template (copy simplest app, rename to jobnest)
- [ ] Install dependencies (`npm install` at root)
- [ ] Create Navbar component (dark bg, brand, nav links, 2 CTAs)
- [ ] Create Hero component (parallax bg, overlay, headline, tabbed search form)
- [ ] Create Services component (4 feature cards)
- [ ] Create Categories component (4-column grid with counts)
- [ ] Create RecentJobs component (job items with badges, pagination)
- [ ] Create StatsCounter component (4 animated counters on parallax)
- [ ] Create Testimonials component (carousel with avatars)
- [ ] Create Blog component (4 blog cards)
- [ ] Create Newsletter component (parallax bg, email form)
- [ ] Create Footer component (4 columns, dark bg, social icons)
- [ ] Write tests for all components (100% coverage)
- [ ] Run typecheck, lint, tests, build
- [ ] Update TEMPLATES.md with surge URL
