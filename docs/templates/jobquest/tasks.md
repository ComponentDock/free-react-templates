# JobQuest — Implementation Todo

Source: ColorLib "Careers" — https://colorlib.com/wp/template/careers/
Preview: https://preview.colorlib.com/theme/careers/
New name: jobquest
Stack: React 19 + Vite + Tailwind 4 + TypeScript

## Section Order (top → bottom)

1. Navbar
2. Hero (search form)
3. Statistics (counter section)
4. Job Listings (featured jobs + pagination)
5. Company Logos
6. Testimonials (carousel)
7. CTA ("Looking For A Job?")
8. Footer (4 columns + social + Component Dock)

## Design Notes

### Color Palette
- Brand blue: #1644ba — used for navbar logo, primary buttons, badge-primary
- Hover blue: #1747c3 — button hover
- Overlay: rgba(0,0,0,0.45) — hero, stats, and CTA sections all use dark overlay on background images
- Text dark: #212529 / #343a40
- Text muted: #7f848c (meta info)
- Backgrounds: #f8f9fa (testimonials), white (job listings), #242424 (footer)

### Typography
- Font: Nunito (Google Fonts, load in index.html)
- Headings: bold 700
- Body: regular 400

### Button Shapes
- Primary: bg #1644ba, white text, border-radius 4px, generous padding
- Warning (CTA): used for "Sign Up" button
- Rounded pill search button: border-radius 50% (icon-only variant)

### Hero
- Full-width background image (picsum.photos/seed/jobquest-hero/1920/800)
- Dark semi-transparent overlay
- Centered: large headline + subtitle
- 4-column form: keyword input, location select, job type select, search button

### Statistics
- Same background image as hero, with primary-color overlay
- 4 counters in a row: Candidates, Jobs Posted, Jobs Filled, Companies
- Use animated counting (on scroll into view)

### Job Listings
- White section, bordered list of job cards
- Each card: image (2 cols), content (4 cols: badge + title + meta), location (3 cols), salary (3 cols)
- Badges: Freelancer (blue), Full-time (warning), Part-time (success) — use Tailwind badge colors
- Pagination at bottom: prev/next + numbered pages

### Company Logos
- Section heading "Companies Hiring"
- 6 placeholder logos in a 4-column grid (use picsum.photos/seed/company-n/ for placeholders)

### Testimonials
- Light gray background
- Carousel/slider with avatar, quote text, and attribution
- Could use a simple state-based carousel (left/right arrows)

### CTA
- Background image with primary overlay
- "Looking For A Job?" heading + subtitle + "Sign Up" button (warning color)

### Footer
- Dark background (#242424)
- 4 columns: Search Trending (tag links), Company (nav links), Support (links), Contact Us (social icons)
- Social icons: lucide-react (Facebook, Twitter, Instagram, LinkedIn)
- Attribution: "Made with ❤ by Component Dock" linking to componentdock.com

## Component Map

| Component | File | Notes |
|---|---|---|
| App | App.tsx | Section composition |
| Navbar | Navbar.tsx | Fixed, responsive hamburger |
| Hero | Hero.tsx | Background image, overlay, search form |
| Stats | Stats.tsx | 4 counter cards, animated counting |
| JobListings | JobListings.tsx | List of job cards + pagination |
| CompanyLogos | CompanyLogos.tsx | Logo grid |
| Testimonials | Testimonials.tsx | Carousel with state |
| CTA | CTA.tsx | Background image overlay, heading, button |
| Footer | Footer.tsx | 4 columns, social icons |

## Data

All job listing data (titles, locations, salaries, badges) should be in a `data.ts` file.
Logo and testimonial data can also live there.

## Pitfalls
- Overlay sections use the SAME background image — use consistent seed for picsum
- Nunito font must be loaded via Google Fonts link in index.html
- Bootstrap-style `btn-block` maps to Tailwind `w-full`
- Counter animation needs IntersectionObserver or similar (on-scroll trigger)
