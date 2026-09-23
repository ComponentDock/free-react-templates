# JobLane — Design Notes & Implementation Tasks

Source: ColorLib Job Board 2 (jobboard2)
Preview: https://preview.colorlib.com/theme/jobboard2/
Spec: openspec/specs/template-joblane/spec.md

## Section-by-section fidelity notes

### 1. Navbar
- Sticky on scroll, white background with bottom border
- Logo left (use placeholder SVG or text-based logo)
- Center nav: Home, Browse Job, Pages (dropdown), Blog (dropdown), Contact
- Right: "Log in" text link + green "Post a Job" CTA (rounded-btn, #00D363)
- Mobile: hamburger icon, slide-out menu

### 2. Hero
- Full-width blue background image (use placeholder gradient or solid #2B9BFF)
- Left content: subtitle "4536+ Jobs listed", heading "Find your Dream Job", paragraph, green "Upload Your Resume" button
- Right: illustration of people at desks (use placeholder illustration)
- Text is white on blue background

### 3. Category Search
- White background, padding top/bottom
- 4-column grid: keyword input, location dropdown, category dropdown, green "Find Job" button
- Below: "Popular Search:" inline with tag links (pill-shaped, bordered)
- Tags: Design & Creative, Marketing, Administration, Teaching & Education, Engineering, Software & Web, Telemarketing

### 4. Popular Categories
- Section heading "Popular Categories"
- 8 cards in 4-col grid (4+4 rows)
- Each card: white bg, 5px radius, category name heading, badge with number + "Available position"
- Border turns green on hover
- Categories: Design & Creative, Marketing, Telemarketing, Software & Web, Administration, Teaching & Education, Engineering, Garments / Textile

### 5. Job Listing
- Title "Job Listing" left, "Browse More Job" outlined button right
- 6 job cards stacked vertically
- Each card: company icon (left), job title link, location + type (with FA icons), "Apply Now" green button + heart icon (right), deadline date below button
- Cards: white bg, flex justify-between
- Job titles: Software Engineer, Digital Marketer, Wordpress Developer, Visual Designer, Software Engineer, Creative Designer

### 6. Featured Candidates
- Light grey bg (#F5F7FA)
- Centered "Featured Candidates" title
- Owl-carousel of candidate cards (white bg, 5px radius, padding)
- Each: circular avatar, name link, role text
- Candidates named "Markary Jondon", role "Software Engineer"

### 7. Top Companies
- Light grey bg (#F5F7FA)
- Title "Top Companies" left, "Browse More Job" right
- 4-col grid of company cards (white bg, 5px radius, padding)
- Each: company icon, company name link, position count

### 8. Job Search CTA
- Blue background (#2B9BFF) with dark overlay (#0A8CFF, 0.8 opacity)
- Two equal columns: "Looking for a Job?" + "Browse Job" btn, "Looking for a Expert?" + "Post a Job" btn
- White text, green CTA buttons

### 9. Testimonials
- White bg, centered "Testimonial" title
- Carousel of testimonials
- Each: circular avatar (228px), orange quote icon overlay, paragraph text (18px, #040E27), attribution name (#7A838B)

### 10. Footer
- Dark navy bg (#001D38)
- 4-column layout: logo+contact+social, Company links, Category links, Newsletter form
- Newsletter: text input + submit button
- Copyright below with Component Dock link

## Implementation tasks

- [ ] Copy simplest existing job app as scaffold, rename to joblane
- [ ] Set up index.css with Tailwind @theme tokens (brand colors, font)
- [ ] Create Navbar.tsx component
- [ ] Create Hero.tsx component (blue bg, illustration, CTA)
- [ ] Create CategorySearch.tsx (search form + popular tags)
- [ ] Create PopularCategories.tsx (8-card grid)
- [ ] Create JobListing.tsx (6 job cards)
- [ ] Create FeaturedCandidates.tsx (carousel)
- [ ] Create TopCompanies.tsx (4-card grid)
- [ ] Create JobSearchCTA.tsx (blue dual-column CTA)
- [ ] Create Testimonials.tsx (carousel with quote styling)
- [ ] Create Footer.tsx (4-column, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Update public/CNAME and package.json homepage
- [ ] Verify: typecheck + lint + test:coverage + build pass
