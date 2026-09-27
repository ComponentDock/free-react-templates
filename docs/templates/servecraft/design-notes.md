# Servecraft — Design Notes & Implementation Outline

## Source
- ColorLib "Services" template: https://colorlib.com/wp/template/services/
- Preview: https://preview.colorlib.com/theme/services/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/services-free-template.jpg

## Section order (fidelity to original)

1. **Navbar** — sticky, logo left ("Servecraft"), nav links right (Home, About, Services, Projects, Blog, Contact). Mobile: hamburger → drawer.
2. **Hero** — full-width bg-image with dark overlay, centered white heading + subtext + pill CTA "Our Services" → smoothscroll to #services.
3. **About Us** — section title "About Us" + 3-col layout: left text block, center `img-fluid` image, right text block.
4. **Services** — centered section title + 2×3 card grid. Each card: circular icon container (`#eff1f3` bg, 50% radius) + `<h3>` heading + description paragraph. Services: Content Marketing, Social Media Marketing, Brand & Logo Design, Social Media Advertising, Search Engine Marketing, Web Design / Development.
5. **Projects** — centered title + filter button bar (All | Web | Design | Brand — `btn btn-primary`, active = filled, inactive = outline). 3-col image gallery. Hover: dark overlay with search icon.
6. **Testimonials** — `bg-primary` (#C2E54F lime) full-width. Centered title "What Client Are Sayings". Carousel of testimonial slides: `<blockquote>` with quote text + attribution (name, title).
7. **Blog** — `bg-light`. Section title "Blog". 3-col card grid. Each card: top image + white body with `<h3>` title, date span, "Read More" link.
8. **Contact** — section title "Contact Form". 2-col: left = form (First name, Full name, Email, Subject, Message textarea, "Send Message" submit). Right = two location blocks (London, New York) each with Address, Phone, Email.
9. **Footer** — `bg-light`. 4-col: About blurb (logo + address), Services links, Resources links, Templates links + social icons (Twitter, Facebook, Instagram, Dribbble, LinkedIn). Copyright line. Must link ComponentDock.

## Design tokens (captured from preview CSS)

- Primary: `#C2E54F` (lime green)
- Dark: `#000` / `#1a1a1a`
- Muted text: `#666666`, `#888888`, `#999999`
- Light bg: `#fff`, `#eff1f3`, `#f8f9fa`
- Font: "Jost" (Google Fonts, weights 400/700/900)
- Button radius: `30px` (pill)
- Icon circle radius: `50%`
- Hero overlay: `rgba(0,0,0,0.4)`
- Section separator: subtle (no dividers, spacing via padding)

## Component breakdown

| Component | File | Notes |
|---|---|---|
| Navbar | `Navbar.tsx` | Sticky header, mobile hamburger toggle, smooth-scroll links |
| Hero | `Hero.tsx` | Background image + overlay + centered content + CTA button |
| About | `About.tsx` | 3-col row: text-image-text |
| Services | `Services.tsx` | 2×3 grid of ServiceCard components |
| ServiceCard | `ServiceCard.tsx` | Icon circle + heading + description |
| Projects | `Projects.tsx` | Filter bar + gallery grid with hover overlay |
| ProjectFilter | `ProjectFilter.tsx` | Button group with active state |
| ProjectGrid | `ProjectGrid.tsx` | 3-col responsive grid of ProjectItem |
| ProjectItem | `ProjectItem.tsx` | Image + hover overlay with icon |
| Testimonials | `Testimonials.tsx` | Green bg section + carousel (manual state, no owl) |
| Blog | `Blog.tsx` | 3-col card grid |
| BlogCard | `BlogCard.tsx` | Image + body (title, date, "Read More") |
| Contact | `Contact.tsx` | 2-col: form + locations |
| ContactForm | `ContactForm.tsx` | Form fields with controlled state |
| Footer | `Footer.tsx` | 4-col grid, social icons, copyright, ComponentDock link |

## Implementation tasks

1. [ ] Create `apps/servecraft/` from simplest existing app scaffold
2. [ ] Rename package to `@free-react-templates/servecraft`
3. [ ] Add Jost Google Font link to `index.html`
4. [ ] Set up Tailwind theme tokens in `index.css` (primary: #C2E54F)
5. [ ] Implement Navbar with sticky behavior and mobile menu
6. [ ] Implement Hero with background image + overlay + CTA
7. [ ] Implement About section (3-col layout)
8. [ ] Implement Services section (2×3 grid + ServiceCard)
9. [ ] Implement Projects section (filter bar + gallery grid)
10. [ ] Implement Testimonials section (carousel, manual state)
11. [ ] Implement Blog section (3-col BlogCard grid)
12. [ ] Implement Contact section (form + locations)
13. [ ] Implement Footer (4-col, social icons, ComponentDock link)
14. [ ] Write tests for all components (100% coverage)
15. [ ] Update CNAME, homepage, README
16. [ ] Run `npm install` at repo root for lockfile
17. [ ] Commit, push, PR, merge

## Fidelity notes

- The original uses owl-carousel for testimonials — replace with a simple React state carousel (no dependency needed)
- The original uses isotope for project filtering — replace with React state filtering
- The original uses Bootstrap grid — replace with Tailwind grid/flex utilities
- The original uses AOS (Animate On Scroll) — omit or replace with CSS transitions
- The original uses flaticon SVGs — replace with lucide-react icons
- Placeholder images: `https://picsum.photos/seed/servecraft-<n>/<w>/<h>`
