# Jobstar — Design Notes & Task Outline

## Source

- ColorLib slug: `jobpro`
- Preview: https://preview.colorlib.com/theme/jobpro/
- New name: `jobstar`

## Section order (from live preview)

1. **Navbar** — Dark bg (#1d1d1d), logo "Jobstar." left, nav links (Home, Browse Categories, Browse Jobs, Talent Pool, Pages), Contact button right, mobile hamburger toggle
2. **Hero** — Full-height background image with dark overlay, centered subheading "Love what you do? Thousands are looking for you!", headline "10650+ Job Listed Here!" with animated counter, two CTA buttons (Contact us blue, Search Job secondary)
3. **Job Search** — Blue bg (#207ce5), pill tab navigation (2 tabs), 4-column form (keyword input, location select, job type select, date input), Search button
4. **Services** — 4-column feature cards (Search Millions of Jobs, Easy To Manage Jobs, Top Careers, Top Talents), each with icon + heading + description
5. **Explore by Category** — Heading with subheading, owl-carousel of category cards (Website & Software, Education & Training, Graphic & UI/UX Design, Accounting & Finance) with icons and open position counts
6. **Featured Jobs** — Light bg (#f8f9fa), heading "Featured Jobs Posts For This Week", job listing cards with: badge (Partime/Fulltime), job title, company, location, salary, days posted, heart icon + Apply Job button
7. **CTA Intro** — White bg, heading "Get Started Your New Job With Us", green (#91c235) "Get Started" button
8. **Testimonials** — Background image with dark overlay, heading "Happy Clients", carousel of testimonial cards (quote, person name, title, photo)
9. **Latest Candidates** — Heading "Latest Candidates", carousel of candidate cards (photo, name, location, description)
10. **Footer** — Dark bg, 4 columns (Brand + social icons, Employers links, Candidate links, Account links), copyright + Component Dock link

## Fidelity notes

- Font: "Source Sans Pro" via Google Fonts (not system font)
- Primary brand color: #46b3e6 (blue/teal) — used for buttons, active states, links
- Accent green: #91c235 — used for CTA backgrounds, secondary buttons, badge accents
- Search section background: #207ce5 (blue) with pill tab navigation
- Button radius: 5px standard Bootstrap-like rounded
- Dark sections: #1d1d1d, #171717
- Light sections: #f8f9fa, #f7f7f7
- Overlay sections use rgba(0,0,0,0.5) over background images
- Category carousel and candidate carousel use owl-carousel pattern (auto-rotate)
- Job cards have subtle borders, not card shadows
- Footer has 4 equal columns with social icons on the brand column

## Implementation tasks

- [ ] Create app scaffold: `apps/jobstar/` from simplest existing app
- [ ] Set up Tailwind theme tokens in index.css (Source Sans Pro font, #46b3e6 primary, #91c235 accent)
- [ ] Build Navbar component with responsive mobile menu
- [ ] Build Hero section with background image overlay + animated counter + 2 CTA buttons
- [ ] Build JobSearch component with pill tab navigation + 4-field form
- [ ] Build Services component with 4 feature cards in a row
- [ ] Build CategoryCarousel component with category cards and open position counts
- [ ] Build FeaturedJobs component with job listing cards + badge variants + Apply button
- [ ] Build CTAIntro component with green button
- [ ] Build Testimonials component with background image overlay + carousel
- [ ] Build CandidatesCarousel component with profile cards
- [ ] Build Footer with 4 columns + Component Dock link
- [ ] Compose all sections in App.tsx
- [ ] Write tests (100% coverage) for each component
- [ ] Run verify-app.sh gate
- [ ] Deploy to Surge
