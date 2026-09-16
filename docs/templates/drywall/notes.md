# Drywall — Design Notes & Tasks

## Source
- **ColorLib:** Bee (https://colorlib.com/wp/template/bee/)
- **Preview:** https://preview.colorlib.com/theme/bee/
- **New name:** drywall

## Section order (from preview DOM)

1. **TopBar** — dark bg (#16181b), amber icon circles (#fda729), email + phone + "Request A Quote" CTA button
2. **Navbar** — dark (#16181b), sticky, brand "Drywall." (logo), links: Home, About, Project, Blog, Contact, search input
3. **HeroSlider** — 700px tall, background image with overlay, right-aligned text (heading "Base Construction" / "Build The Future"), secondary CTA button
4. **AboutSection** — "We Are Highly Recommendable Construction Firm" heading, about text, possibly with image
5. **ServicesGrid** — "Our Services" heading, 4 columns: Construction, House Renovation, Painting, Architecture Design (icon + title + description)
6. **CTABanner** — parallax bg, "Lets Build Your Dream Together", primary button
7. **TeamSection** — "Our Professional Team", 4 member cards (Daren Wilson, Warren Parker, Eva Gustavo, Mike Henderson)
8. **ProjectGallery** — "Featured Projects", 8 images in masonry grid (San Francisco Tower, Rose Villa House), hover overlay
9. **CounterSection** — parallax bg, 4 animated counters: 30 Years, 1500 Projects, 100 Experts, 300 Customers
10. **TestimonySection** — split layout: left "Experience Great Services" (3 items), right testimonial carousel
11. **BlogSection** — "Recent Blog", 3 cards on light bg (#f8f9fa), date badges, thumbnails, Read More
12. **Footer** — dark (#16181b), 4 columns: logo+social, services list, recent blog, newsletter form, copyright

## Fidelity notes

- **Fonts:** Poppins (headings, weights 400-700) + Nunito Sans (body, weights 400-700). Load via Google Fonts `<link>`.
- **Bootstrap:** Original uses Bootstrap 4 grid. Recreate with Tailwind grid utilities (grid-cols-4, col-span, etc.)
- **Top bar icons:** Circular (#fda729, 40x40, border-radius 50%). Use lucide-react icons (Mail, Phone, etc.).
- **Hero slider:** Originally Owl Carousel. Implement as a simple auto-rotating carousel with CSS transitions.
- **Parallax:** Originally `data-stellar-background-ratio="0.5"`. Use `bg-fixed` (Tailwind bg-attachment-fixed) or a scroll listener.
- **Counter animation:** Animate numbers on scroll intersection (use IntersectionObserver + requestAnimationFrame).
- **Project gallery:** Hover overlay effect — scale image + show semi-transparent overlay with title.
- **Testimonial carousel:** Dot navigation, auto-rotate, manual click to switch.
- **Images:** All use picsum.photos placeholders with deterministic seeds (drywall-hero, drywall-team-1, etc.).
- **Footer:** Must link Component Dock (https://www.componentdock.com/). No ColorLib attribution.

## Tasks

- [ ] Create apps/drywall from a simple existing template (e.g., apps/aurora) as base
- [ ] Set up Tailwind theme tokens in index.css (@theme block with brand colors)
- [ ] Implement TopBar component
- [ ] Implement Navbar component
- [ ] Implement HeroSlider component (2 slides from original)
- [ ] Implement AboutSection component
- [ ] Implement ServicesGrid component (4 services)
- [ ] Implement CTABanner component (parallax)
- [ ] Implement TeamSection component (4 members)
- [ ] Implement ProjectGallery component (8 images)
- [ ] Implement CounterSection component (4 stats with animation)
- [ ] Implement TestimonySection component (split layout + carousel)
- [ ] Implement BlogSection component (3 cards)
- [ ] Implement Footer component (4 columns + newsletter)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck, lint, test:coverage, build pass
- [ ] Update TEMPLATES.md status
