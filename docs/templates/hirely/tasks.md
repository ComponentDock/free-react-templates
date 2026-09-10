# Hirely — Implementation Tasks

Recreation of ColorLib "Careers" template.

## Tasks

### 1. Scaffold app
- [ ] Copy simplest existing app (e.g. `apps/aurora/`) → `apps/hirely/`
- [ ] Rename package to `@free-react-templates/hirely`
- [ ] Set `public/CNAME` to `hirely.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://hirely.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### 2. Design tokens & global styles
- [ ] Add Google Fonts link for Nunito in `index.html`
- [ ] Define Tailwind `@theme` tokens: primary `#1644ba`, warning `#fff568`, success `#28a745`, dark `#343a40`, body `#7f848c`, footer `#242424`, light `#f8f9fa`
- [ ] Set base font to Nunito

### 3. Navbar component
- [ ] Absolute positioned, transparent background
- [ ] Logo "Hirely" left, nav links center, "Contact Us" button right
- [ ] Mobile hamburger with slide-in menu
- [ ] Active state styling

### 4. Hero component
- [ ] Full-width background image with dark overlay
- [ ] Heading + subtext centered
- [ ] 4-column search form: job title input, location select, job type select, search button
- [ ] Responsive: stack on mobile

### 5. Statistics component
- [ ] Background image with dark overlay
- [ ] 4-column counter grid with animated numbers
- [ ] Data: Candidates (1930), Jobs Posted (54), Jobs Filled (120), Companies (550)

### 6. Job Listings component
- [ ] Section heading "Featured Jobs"
- [ ] Job card rows: image, badge, title, publisher, location, salary
- [ ] Badge colors: primary (blue) = Freelancer, warning (yellow) = Full-time, success (green) = Part-time
- [ ] Pagination component: Previous, numbered pages, Next

### 7. Company Logos component
- [ ] Heading "Our Candidates Work In Company"
- [ ] 4-column grid with placeholder SVG logos or text
- [ ] Border-top separator

### 8. Testimonials component
- [ ] `bg-light` background
- [ ] Carousel with person photo, blockquote, citation
- [ ] Auto-play + manual navigation

### 9. CTA Banner component
- [ ] Background image with dark overlay
- [ ] Heading "Looking For A Job?" + subtext
- [ ] Yellow "Sign Up" button aligned right

### 10. Footer component
- [ ] Dark background (#242424)
- [ ] 4 columns: Search Trending, Company, Support, Contact Us
- [ ] Social icons: Facebook, Twitter, Instagram, LinkedIn
- [ ] Copyright line with Component Dock attribution

### 11. Tests
- [ ] Component tests for each section
- [ ] 100% line/function/branch/statement coverage
- [ ] Semantic queries (getByRole, getByText)

### 12. Final checks
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
- [ ] Build + typecheck + lint pass
- [ ] `scripts/verify-app.sh hirely` passes
