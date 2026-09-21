# Juresc — Implementation Tasks & Design Notes

## Source
- ColorLib slug: `lawfirm`
- Preview: https://preview.colorlib.com/theme/lawfirm/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg
- New name: `juresc`

## Design notes

### Overall aesthetic
Professional law firm website. Dark charcoal header/hero/footer with gold (#cbb88c)
accent color. Clean white body. Fullscreen hero with background image and overlay.
Split layouts for About and CTA sections. Bootstrap 4 grid heritage.

### Color mapping to Tailwind theme
- `--brand-dark`: #1d2227 → used as bg-dark, hero overlay, footer, topbar
- `--brand-gold`: #cbb88c → used for links, active states, accents, social hovers
- `--btn-primary`: #007bff → primary button color
- `--brand-light`: #f8f9fa → about section right panel background
- Body text: gray; headings: rgba(0,0,0,0.7)

### Font
Roboto loaded via Google Fonts. Weights: 300, 400, 500, 700.

### Section-by-section fidelity notes

1. **TopBar** — Simple dark bar with phone/email left, 4 social icons right.
   Social icons gold on hover with gold bg.

2. **Navbar** — Dark bg (#1d2227), white brand + white nav links.
   Gold active state. Sticky on scroll → transitions to white bg with dark text.

3. **Hero** — Fixed 600px height. Background image + dark overlay 50%.
   White headline (500 weight, 60px), white subtext at 80% opacity.
   Two buttons: primary blue + white outline. Circular video play button
   with pulse animation.

4. **IntroStrip** — 4 equal-width columns (col-md-3). Each has icon + title
   + text. Different accent color classes (color-1, color-2, color-3).
   Full-width container-fluid.

5. **AboutSection** — Split 50/50. Left: background image with video play
   overlay. Right: bg-light (#f8f9fa) panel with subheading + heading +
   paragraph + 4 service items (icon + title + text) in 2-col grid.

6. **CounterSection** — 4 stat blocks in a row over background image.
   Each: icon + number (animated counter) + label. Text white.

7. **PracticeAreas** — Centered heading. 3-col grid, 2 rows = 6 cards.
   Each: icon-wrap with mini-icon + larger icon, title, paragraph.
   Icon-wrap has a rotating/animated effect.

8. **CaseStudies** — Centered heading. Mixed grid: col-md-3 + col-md-6 +
   col-md-3, then col-md-3 x 4 more. 7 total cards. Each card uses
   background-image with text overlay on hover.

9. **Testimonials** — Dark bg image + overlay. Centered heading.
   Carousel with testimonial cards: quote icon + paragraph + person
   image (circle) + name + position.

10. **AppointmentCTA** — Background image + overlay. Left 50%: heading +
    paragraph + 3 service items (Award Winning, Experience, Best Team).
    Right 50%: form with Name, Email, Practice Area select, Message
    textarea, Submit button (primary).

11. **Blog** — Centered heading. 3-column grid. Each card: image with
    date overlay (day/month/year), title link, excerpt paragraph.

12. **Footer** — Dark bg. 5 columns: brand+social, Explore, Legal,
    Company, contact info. Below: black bar with copyright + "Made with
    ❤ by Colorlib" → replace with Component Dock link.

## Implementation tasks

- [ ] Set up `apps/juresc/` scaffold (copy from simplest existing app, rename package)
- [ ] Add Roboto font to index.html via Google Fonts link
- [ ] Configure Tailwind theme tokens in index.css (@theme block with brand colors)
- [ ] Implement TopBar component (phone, email, social icons)
- [ ] Implement Navbar component (brand, nav links, sticky scroll behavior)
- [ ] Implement Hero component (bg image, overlay, headline, CTAs, video button)
- [ ] Implement IntroStrip component (4 accent-colored feature cards)
- [ ] Implement AboutSection component (split layout, image, services grid)
- [ ] Implement CounterSection component (4 animated counters over bg image)
- [ ] Implement PracticeAreas component (heading, 6 icon cards in grid)
- [ ] Implement CaseStudies component (heading, mixed grid of case cards)
- [ ] Implement Testimonials component (carousel, dark bg, cards)
- [ ] Implement AppointmentCTA component (split: info left, form right, bg image)
- [ ] Implement Blog component (heading, 3 blog cards with dates)
- [ ] Implement Footer component (5 columns, social, Component Dock link)
- [ ] Implement FooterBottom (copyright bar, dark black bg)
- [ ] Compose all sections in App.tsx in correct order
- [ ] Write tests for each component (100% coverage)
- [ ] Verify build passes
