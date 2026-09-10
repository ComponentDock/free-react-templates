# JobCraft — Design Notes & Task Outline

## Source

- ColorLib slug: `careers`
- Preview: https://preview.colorlib.com/theme/careers/
- New name: `jobcraft`

## Section order (from live preview)

1. **Navbar** — Logo left, centered nav links (Home, Job Listings, About, Services, Blog), Contact Us button right
2. **Hero** — Full-width background image with dark overlay, centered headline, 4-field search form (keyword input, location select, job type select, search button)
3. **Statistics** — Blue overlay banner with hero image background, 4 animated counters (Candidates, Jobs Posted, Jobs Filled, Companies)
4. **Job Listings** — White section, heading, 7 job cards in bordered list (thumbnail, badge, title, publisher, location, salary), pagination
5. **Partners** — Row of 4 company logo placeholders
6. **Testimonials** — Light bg, owl-carousel style with person photos + blockquotes + citations
7. **CTA Banner** — Blue overlay with hero image, heading + Sign Up button
8. **Footer** — 4-column links (Search Trending, Company, Support, Contact Us), copyright + Component Dock link

## Fidelity notes

- Font: Nunito via Google Fonts (not system font)
- Primary brand color: #1644ba (blue), used for active states and overlays
- Overlay sections reuse the hero background image with rgba(22, 68, 186, 0.9) tint
- Button radius: 0.3rem (slightly rounded, Bootstrap-like)
- Badge variants: primary (blue), warning (yellow), success (green)
- Section padding: 7rem top/bottom for .site-section
- Stats counters animate on scroll (waypoints + animateNumber)
- Testimonial carousel auto-rotates (owl-carousel pattern)
- Job cards have border-bottom separators, not card shadows

## Implementation tasks

- [ ] Create app scaffold: `apps/jobcraft/` from simplest existing app
- [ ] Set up Tailwind theme tokens in index.css (Nunito font, #1644ba primary)
- [ ] Build Navbar component with responsive mobile menu
- [ ] Build Hero section with background image overlay + search form
- [ ] Build Stats section with animated counters (use intersection observer)
- [ ] Build JobListings section with card items + badge variants
- [ ] Build Partners logo row
- [ ] Build Testimonials carousel
- [ ] Build CTA banner section
- [ ] Build Footer with 4 columns + Component Dock link
- [ ] Compose all sections in App.tsx
- [ ] Write tests (100% coverage) for each component
- [ ] Run verify-app.sh gate
- [ ] Deploy to Surge
