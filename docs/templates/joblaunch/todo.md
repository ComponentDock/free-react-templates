# JobLaunch — Implementation Notes

Source: ColorLib "Jobstart" (`jobstart`)
Preview: https://preview.colorlib.com/theme/jobstart/

## Section order (from live preview DOM)

1. Header/Navbar (sticky, brand + nav + dropdown + CTA button)
2. Hero (parallax bg, headline, tabbed search form)
3. Recent Jobs (job items with badges, pagination)
4. Features ("Why JobLaunch", 6 cards with hexagon icons)
5. Testimonials ("Happy Employers", owl carousel)
6. Blog (4 blog cards)
7. Newsletter (blue bg, email form)
8. Footer (5 columns, dark bg)

## Design tokens

- Brand blue: `#26baee` → Tailwind primary
- Text dark: `#25262a`
- Text muted: `#4d4d4d`
- Background dark: `#393e46` (footer)
- Background light: `#f8f9fa`
- Border light: `#edf0f5`
- Font: "Nunito Sans" (Google Font)
- Button primary: bg `#26baee`, text `#fff`

## Fidelity notes

### Header/Navbar
- Brand text: "Job" (normal) + "start" (bold) → use "JobLaunch"
- Nav links: Home, Category (dropdown: Full Time, Part Time, Freelance, Internship, Temporary), Blog, About, Contact
- CTA: "+ Post a Job" as blue badge button
- Sticky on scroll

### Hero
- Background image with parallax (stellar)
- Headline: "Largest Job Site On The Net" (bold portion + normal)
- Tabbed search: "Find A Job" (active) / "Find A Candidate"
- Each tab: keyword input, category select, location input, Search button
- Search form in white rounded container

### Recent Jobs
- Light grey background
- Heading: "Recent Jobs" left-aligned, "+ Post a Job" button right
- 9 job items, each: title + type badge + company + location + heart button + "Apply Job" button
- Badge colors: primary=Partime, warning=Full Time, info=Freelance, secondary=Internship, danger=Temporary
- Pagination: prev/next arrows + numbers 1-5

### Features ("Why JobLaunch")
- White background
- Centered heading
- 3x2 grid of feature cards
- Each: hexagon SVG border + icon + title + description
- Cards: Search Millions of Jobs, Location Search, Top Careers, Search Expert Candidates, Easy To Manage Jobs, Online Reviews

### Testimonials ("Happy Employers")
- Light grey background
- Owl carousel of testimonial cards
- Each: avatar image, name, role/company, quote text
- 4 items in carousel (2 unique, repeated)

### Blog ("Latest Blog")
- White background
- 4-column grid of blog cards
- Each: image, author + date, title, excerpt

### Newsletter
- Full-width blue background (#26baee)
- "Subscribe Newsletter" heading (white)
- Email input + "Send" button (dark bg)

### Footer
- Dark background (#393e46)
- 5 columns: For Candidates, For Employers, Archives, Company, Contact Info
- Contact: address, telephone, email
- Copyright with Component Dock link

## Implementation tasks

- [ ] Scaffold app (copy existing, rename to joblaunch)
- [ ] npm install at root
- [ ] Header component (sticky, brand, dropdown, CTA)
- [ ] Hero component (parallax, headline, tabbed search)
- [ ] RecentJobs component (9 items, badges, pagination)
- [ ] Features component (6 hexagon icon cards)
- [ ] Testimonials component (carousel)
- [ ] Blog component (4 cards)
- [ ] Newsletter component (blue bg, form)
- [ ] Footer component (5 columns, dark bg)
- [ ] Tests (100% coverage)
- [ ] Typecheck, lint, build
- [ ] Update TEMPLATES.md
