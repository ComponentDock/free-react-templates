# BlankSlate — Design Notes & Task Outline

## Source
- **ColorLib template:** Whitespace
- **Preview URL:** https://preview.colorlib.com/theme/whitespace/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg
- **Category:** Business / Creative Agency

## Section Order (top to bottom)

| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | Navbar | `Navbar.tsx` | Dark bg (#141313), sticky, logo "BlankSlate" left, 6 nav links right. Transparent → solid on scroll. Hamburger on mobile. |
| 2 | Hero | `Hero.tsx` | Full-width dark bg (#000), centered: heading "We Help to Build You the Product", subheading "Business Solution", yellow pill CTA "Get in touch". |
| 3 | About | `About.tsx` | Two-column: left text area with "What We Can Do for You" heading + 7 service items (icon + title + desc); right side has an image placeholder. Service items: Market Research, Financial Services, Online Marketing, 24/7 Support, Business Strategy, Data Analysis, Graphic Design. |
| 4 | Services Grid | `Services.tsx` | 4-column responsive grid. 4 service cards with yellow (#fcd307) circular icon backgrounds and descriptions. |
| 5 | Counter/Facts | `Counter.tsx` | Full-width background image with stat counters. "Interesting Facts" heading. 4+ numeric counters with labels. |
| 6 | Projects | `Projects.tsx` | "Recent Projects" heading. 3-column grid of 6 project cards. Each shows project image + "Branding & Illustration Design" title. Hover overlay with description. |
| 7 | Testimonials | `Testimonials.tsx` | Yellow (#fcd307) background. "My satisfied customer says" heading. Carousel of testimonial items (quote text, client name, role). |
| 8 | Case Study | `CaseStudy.tsx` | "Case Study" heading. 3-column card grid. Each card has image, heading, and description text. |
| 9 | Pricing | `Pricing.tsx` | Light bg (#f8f9fa). "Our Best Pricing" heading. 4 tiers: Free ($0, "100% free. Forever"), Startup, Premium, Pro. Each with feature list and yellow "Get Started" button. |
| 10 | Partner | `Partner.tsx` | Logo carousel of partner/client logos on white background. |
| 11 | Footer | `Footer.tsx` | Dark bg (#141313). 4-column layout: logo, Useful Links, Quick Links, Contact (address, email). "Component Dock" link. Copyright line. |

## Design Token Details

### Brand Colors
- **Primary (Yellow):** `#fcd307` — used for CTA buttons, icon backgrounds, testimonials section, pricing highlights
- **Secondary (Blue):** `#4ac7ea` / `#78d5ef` — icon accents, links
- **Dark:** `#141313` / `#000000` — navbar, hero, projects, footer backgrounds
- **Light:** `#f8f9fa` / `#fafafa` — pricing section background

### Typography (Google Fonts)
- **Headings:** Poppins (600, 700)
- **Body:** Work Sans (400, 500)

### Button Style
- Pill-shaped: `border-radius: 30px`
- Yellow background: `#fcd307`
- White text on yellow buttons
- Padding around 12px 30px

### Image Placeholders
- Use `https://picsum.photos/seed/blankslate-<n>/<w>/<h>` for all images
  - Hero/about image: `seed/blankslate-about/600/400`
  - Counter bg: `seed/blankslate-counter/1920/600`
  - Project cards: `seed/blankslate-proj-<n>/400/300` (n=1..6)
  - Testimonial avatars: `seed/blankslate-avatar-<n>/100/100` (n=1..3)
  - Case study images: `seed/blankslate-case-<n>/400/250` (n=1..3)
  - Partner logos: `seed/blankslate-partner-<n>/120/40` (n=1..6)

### Icons
- Use `lucide-react` for service and feature icons
- Map from ColorLib's Font Awesome:
  - Market Research → `Search`
  - Financial Services → `DollarSign`
  - Online Marketing → `Megaphone`
  - 24/7 Support → `Headphones`
  - Business Strategy → `Target`
  - Data Analysis → `BarChart3`
  - Graphic Design → `Palette`

## Fidelity Notes

- The ColorLib original uses Bootstrap 4 grid. Our recreation uses Tailwind's grid utilities.
- The original uses Owl Carousel for testimonials and partner logos. We should use CSS scroll-snap or a lightweight carousel approach with Tailwind.
- The original uses AOS (Animate On Scroll) for reveal animations. We can use CSS `@keyframes` or a lightweight intersection observer approach.
- The original uses Font Awesome icons. We map to lucide-react equivalents.
- The parallax/scrolling effects on the hero can be achieved with CSS `background-attachment: fixed`.
- The navbar transparency-to-solid transition on scroll can be implemented with an `IntersectionObserver` or scroll event listener.

## Implementation Tasks

1. Create app scaffold: `apps/blankslate/` (copy from simplest existing app, rename package)
2. Configure `vite.config.ts` with `injectUiSource()` helper
3. Set up `index.html` with Google Fonts links (Poppins + Work Sans)
4. Implement `src/index.css` with Tailwind `@theme` for brand tokens
5. Build `Navbar.tsx` — dark sticky nav with responsive hamburger
6. Build `Hero.tsx` — dark full-width hero with centered content
7. Build `About.tsx` — two-column service list with icons
8. Build `Services.tsx` — 4-column icon card grid
9. Build `Counter.tsx` — stat counters with background image
10. Build `Projects.tsx` — project card grid with hover overlays
11. Build `Testimonials.tsx` — yellow bg testimonial carousel
12. Build `CaseStudy.tsx` — case study card grid
13. Build `Pricing.tsx` — 4-tier pricing table
14. Build `Partner.tsx` — logo carousel
15. Build `Footer.tsx` — dark 4-column footer with Component Dock link
16. Compose all sections in `App.tsx`
17. Write tests for each component (TDD: RED → GREEN)
18. Verify 100% coverage
19. Verify typecheck + lint + build
20. Add `public/CNAME` with `blankslate.free.componentdock.com`
