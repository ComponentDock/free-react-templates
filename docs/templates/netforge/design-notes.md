# Netforge — Design Notes & Tasks

## Source

- **ColorLib template:** IT Solution
- **Source URL:** https://colorlib.com/wp/template/it-solution/
- **Preview URL:** UNAVAILABLE (HTTP 404 at preview.colorlib.com)
- **Category:** IT Company / Digital Agency
- **Fallback:** Screenshot + ColorLib page description + ThemeWagon metadata

## Structure order (section-by-section fidelity)

| # | Section | Notes |
|---|---------|-------|
| 1 | Navbar | Sticky top bar with blue accent (#1a73e8), logo "Netforge", nav links (Home, Services, About, Projects, Blog, Contact), mobile hamburger |
| 2 | Hero | Full-width dark background, headline, subtitle, 2 CTA buttons, custom illustration/graphic on right side |
| 3 | Services | "Our Services" heading, 4 service cards in responsive grid, each with icon + title + description |
| 4 | About / Why Choose Us | Two-column: text + image split, heading, descriptive paragraphs |
| 5 | Fun Fact Counters | Animated statistics row: 4+ counters (e.g. Projects Completed, Happy Clients, Awards Won, Team Members) |
| 6 | Projects / Case Studies | "Our Projects" heading, grid of 4+ project cards with image + title + category |
| 7 | Testimonials | "What Clients Say" heading, 3+ client quotes with avatar + name + role |
| 8 | FAQ / Accordion | "Frequently Asked Questions" heading, 4+ expandable accordion items |
| 9 | Blog | "Latest News" heading, 3 blog post cards with image + title + date + excerpt |
| 10 | Contact | Contact form (name, email, subject, message) + contact info (address, phone, email) |
| 11 | Footer | Company info, nav links, social icons, copyright with Component Dock link |

## Design tokens (from ColorLib page CSS + screenshot)

| Token | Value | Usage |
|-------|-------|-------|
| Primary color | `#1a73e8` | Buttons, links, top bar, accents |
| Primary hover | `#1464cc` | Button/link hover state |
| Text headings | `#26282b` | All headings |
| Text body | `#26282b` | Body text, line-height 1.8 |
| Body background | `#ffffff` | Page background |
| Top bar | `#1a73e8` bg | Blue top bar with white text |
| Hero background | Dark (dark blue/charcoal) | Hero section bg |
| Font | System/Google (Inter recommended) | Clean sans-serif |
| Buttons | Rounded, blue bg, white text | Primary CTA style |
| Parallax | Background images on scroll | Section parallax effects |
| Counters | Large numbers + labels | Animated on scroll |

## Implementation tasks

- [ ] 1. Copy simplest existing app as scaffold for `apps/netforge`
- [ ] 2. Create `src/components/Navbar.tsx` — sticky nav with mobile menu
- [ ] 3. Create `src/components/Hero.tsx` — dark bg, headline, CTAs, illustration
- [ ] 4. Create `src/components/Services.tsx` — 4-card grid with icons
- [ ] 5. Create `src/components/About.tsx` — two-column text + image
- [ ] 6. Create `src/components/Counters.tsx` — animated stat counters
- [ ] 7. Create `src/components/Projects.tsx` — project card grid
- [ ] 8. Create `src/components/Testimonials.tsx` — client quote cards
- [ ] 9. Create `src/components/Faq.tsx` — accordion FAQ section
- [ ] 10. Create `src/components/Blog.tsx` — blog post card grid
- [ ] 11. Create `src/components/Contact.tsx` — form + contact info
- [ ] 12. Create `src/components/Footer.tsx` — links, social, copyright
- [ ] 13. Compose all sections in `src/App.tsx`
- [ ] 14. Set up `src/index.css` with Tailwind theme tokens (primary #1a73e8)
- [ ] 15. Write tests for each component (Vitest + Testing Library)
- [ ] 16. Verify 100% test coverage
- [ ] 17. Set up `public/CNAME` (netforge.free.componentdock.com)
- [ ] 18. Set up `vite.config.ts` with injectUiSource()
- [ ] 19. Run `npm install` at repo root to register workspace
- [ ] 20. Commit and push

## Placeholder images

- Hero illustration: `https://picsum.photos/seed/netforge-hero/600/400`
- About image: `https://picsum.photos/seed/netforge-about/600/400`
- Project thumbnails: `https://picsum.photos/seed/netforge-proj-<n>/400/300` (n=1..4)
- Blog thumbnails: `https://picsum.photos/seed/netforge-blog-<n>/400/250` (n=1..3)
- Testimonial avatars: `https://picsum.photos/seed/netforge-person-<n>/80/80` (n=1..3)

## Notes

- Preview was unavailable (HTTP 404). Design reconstructed from ColorLib
  page description, ThemeWagon metadata, screenshot analysis, and CSS
  variables found on the ColorLib template page.
- Accordion: use HTML `<details>/<summary>` or custom disclosure pattern
  for accessibility.
- Counters: use IntersectionObserver to trigger animation when scrolled
  into view.
- Parallax: use CSS `background-attachment: fixed` or a lightweight JS
  scroll handler.
- Contact form: prevent default submission (no backend), validate fields.
- The template is described as "Bootstrap 4" but we recreate with
  Tailwind CSS 4 — layout patterns (grid, flex) translate directly.
