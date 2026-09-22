# Physiohub — Implementation Tasks & Design Notes

## Source mapping

- **ColorLib source:** "Physical Therapy" (slug: `physical-therapy`)
- **Preview URL:** `https://preview.colorlib.com/theme/physical-therapy/` (404 — unreachable)
- **Fallback reference:** Screenshot at `https://colorlib.com/wp/wp-content/uploads/sites/2/physicaltherapy-free-templatel.jpg`
- **New name:** physiohub
- **Package:** `@free-react-templates/physiohub`
- **Surge domain:** `physiohub.free.componentdock.com`

## Design tokens (captured from research)

| Token              | Value                     | Notes                                      |
| ------------------ | ------------------------- | ------------------------------------------ |
| Primary brand      | `#B97EBB` (mauve/purple) | From ColorLib page preview button style    |
| Primary hover      | `#ae6ab0`                 | Darkened mauve on hover                    |
| Background white   | `#ffffff`                 | Default section background                 |
| Background light   | `#f7f7f7` or similar      | Alternating section bg (verify from DOM)   |
| Text dark          | `#333333` or `#212121`   | Body text color (verify)                   |
| Text light         | `#ffffff`                 | Text on dark/colored backgrounds           |
| Button shape       | Rounded (`~20-25px radius`)| `vc_btn3-shape-rounded` class observed    |
| Font family        | TBD — likely Poppins or Open Sans | Google Fonts; verify from preview DOM  |

## Section structure (implementation order)

1. **Navbar.tsx** — Sticky header with logo, nav links, dropdown, CTA button, mobile hamburger
2. **Hero.tsx** — Parallax background, typewriter headline, subtext, CTA buttons
3. **About.tsx** — Welcome/intro section with text and image or icon grid
4. **Services.tsx** — Grid of 3+ service cards (icon + title + description)
5. **Stats.tsx** — Animated number counters in a horizontal row
6. **Testimonials.tsx** — Slider with patient quotes, names, photos, auto-advance
7. **Blog.tsx** — 2-3 blog post cards (image + title + date + excerpt)
8. **Contact.tsx** — Contact form with validation + contact info
9. **Footer.tsx** — Dark footer with columns: logo/desc, links, services, contact, social, Component Dock link

## Fidelity notes (section-by-section)

### Navbar
- Sticky on scroll with background transition
- Multi-level dropdown (hover on desktop, tap on mobile)
- Mobile: hamburger icon → slide-down menu
- CTA button styled with brand mauve color

### Hero
- Parallax background image (use picsum.photos placeholder)
- Typewriter/rotating text effect for headline — can use a lightweight
  typewriter library or CSS animation
- CTA button(s) with rounded shape and brand color

### About
- Split layout: text on one side, image on the other
- Brief intro about the physiotherapy practice
- May include 2-3 small feature icons

### Services
- Card grid (3 columns desktop, 1 column mobile)
- Each card: icon (lucide-react), title, short description
- Light background for contrast

### Stats
- Colored or image background section
- 3-4 counters that animate from 0 to target on scroll into view
- Use Intersection Observer for trigger

### Testimonials
- Slider/carousel with auto-advance (5s interval)
- Each slide: quote text, patient name, optional photo
- Dot indicators and/or arrow navigation

### Blog
- 2-3 post cards in a grid
- Each card: image, title, date, excerpt, "Read More" link

### Contact
- Form fields: Name, Email, Phone, Message
- Client-side validation with error messages
- Submit button with brand color

### Footer
- Dark background (dark gray or near-black)
- Multi-column layout
- MUST include "Made with Component Dock" linking to
  `https://www.componentdock.com/`
- Social media icons (lucide-react)
- Contact info: address, phone, email

## Implementation checklist

- [ ] Copy simplest existing app as base (e.g. `apps/clinica` or similar)
- [ ] Rename package to `@free-react-templates/physiohub`
- [ ] Create `public/CNAME` with `physiohub.free.componentdock.com`
- [ ] Set `"homepage"` in `package.json`
- [ ] Create `src/components/` with all section components
- [ ] Compose sections in `src/App.tsx`
- [ ] Add Google Fonts `<link>` to `index.html`
- [ ] Set up `@theme` tokens in `src/index.css` for brand colors
- [ ] Register `injectUiSource()` in `vite.config.ts`
- [ ] Write tests for each component (TDD)
- [ ] Verify 100% coverage
- [ ] Run typecheck, lint, build
- [ ] Run `npm install` at repo root for lockfile registration
- [ ] Commit and push to main
