# JobNest — Prep Notes

## Source

- ColorLib template: **Job Board 2** (slug: `jobboard2`)
- Preview: https://preview.colorlib.com/theme/jobboard2/
- Source page: https://colorlib.com/wp/template/job-board-2/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jobboard2-free-template.jpg

## Implementation TODO

### Phase 1: Scaffold

- [ ] Copy simplest existing app (e.g. `apps/jobboard/` or similar) to `apps/jobnest/`
- [ ] Rename package to `@free-react-templates/jobnest`
- [ ] Update `public/CNAME` → `jobnest.free.componentdock.com`
- [ ] Update `package.json` homepage
- [ ] Add Google Font Roboto to `index.html`
- [ ] Define `--brand: #00D363` and related tokens in `index.css` `@theme`

### Phase 2: Components (section-by-section)

1. **Navbar.tsx** — Sticky header: logo, nav links (Home, Browse Job, Pages, Blog, Contact), right side: "Log in" text + "Post a Job" green button. Mobile hamburger.
2. **Hero.tsx** — Background image with overlay, left-aligned text: job count + headline + subtext + "Upload your Resume" button. Right illustration (hidden on mobile).
3. **JobSearchBar.tsx** — 4-column form: keyword input, location select, category select, "Find Job" button. Below: popular search tag list.
4. **PopularCategories.tsx** — 8 category cards in responsive 4-col grid. White cards, 5px radius. Each: category name + "N Available position".
5. **JobListings.tsx** — "Job Listing" heading + "Browse More Job" button. List of job cards: company icon, title, location, type, heart icon, "Apply Now" button, deadline.
6. **FeaturedCandidates.tsx** — "Featured Candidates" heading. Carousel of candidate cards: round avatar, name, role.
7. **TopCompanies.tsx** — "Top Companies" heading + "Browse More Job" button. 4-col grid: company icon, name, position count.
8. **CtaBanner.tsx** — Blue `#2B9BFF` background, two-column: "Looking for a Job?" + "Browse Job" | "Looking for a Expert?" + "Post a Job".
9. **Testimonials.tsx** — "Testimonial" heading. Carousel: round author avatar, quote icon, text, author name.
10. **Footer.tsx** — Dark navy `#001D38` background. 4 columns: logo+contact+social | Company links | Category links | Newsletter. Copyright with Component Dock link.

### Phase 3: Tests

- [ ] One test file per component (Vitest + Testing Library)
- [ ] Each section tested for rendering, interactive elements, accessibility
- [ ] Coverage must hit 100% lines/functions/branches/statements

### Phase 4: Verify

- [ ] `npm run verify:app jobnest` (typecheck + lint + knip + fallow + test:coverage + build)
- [ ] Visual check against screenshot
- [ ] Responsive check (mobile hamburger, stacked layouts)

## Design Notes

### Color Palette

- Primary brand: `#00D363` (green) — buttons, accents, selected states
- Dark navy: `#001D38` — footer background
- Darker navy: `#040E27` — CTA overlay
- Blue accent: `#2B9BFF` — CTA banner background
- Light grey: `#F5F7FA` — section backgrounds (job listings, candidates, companies)
- White: `#ffffff` — card backgrounds, testimonial area
- Text primary: `#222222`
- Text secondary: `#495057`
- Text muted: `#777777`

### Typography

- Font: Roboto (Google Fonts, weight 400, 500, 700)
- Headings: bold, dark
- Body: regular weight, secondary grey

### Button Styles

- `.boxed-btn3` (primary): green `#00D363` fill, white text, `5px` radius, `padding: 13px 29px`
- Hover: transparent background, green border, green text (outlined reversal)
- `.boxed-btn4` (secondary): outlined, green border, green text, same padding

### Layout Patterns

- Hero: full-width background image, left-aligned text content, right-side illustration (hidden mobile)
- Job Search: green-tinted area with horizontal 4-column form
- Categories: 4-column responsive grid of white cards
- Job Listings: vertical card list, each card is a flex row (icon | content | action)
- Candidates: owl-carousel style horizontal scrolling cards
- Companies: 4-column grid of icon + text cards
- CTA: full-width blue banner, two equal columns
- Testimonials: carousel with avatar + quote layout
- Footer: dark navy, 4-column grid, newsletter form in last column

### Section Backgrounds

| Section | Background |
|---------|-----------|
| Hero | Background image (banner.png) |
| Job Search | White/default (green-tinted inputs) |
| Popular Categories | White/default |
| Job Listings | `#F5F7FA` light grey |
| Featured Candidates | `#F5F7FA` light grey |
| Top Companies | `#F5F7FA` light grey |
| CTA Banner | `#2B9BFF` blue |
| Testimonials | White/default |
| Footer | `#001D38` dark navy |

### Replication Fidelity Notes

- Match section order exactly as listed in HTML comments
- Job cards must have: icon, title, location pin icon, clock icon for type, heart icon, Apply button, date
- Category cards are white with `5px` radius, subtle shadow
- Candidate avatars are circular (use `rounded-full` + fixed size)
- CTA banner is split 50/50 between job seeker and employer CTAs
- Popular search tags are inline, separated visually
- Footer newsletter form has input + button inline
- Social icons in footer: Facebook, Google+, Twitter, Instagram (use lucide-react equivalents)
