# Crosspulse — Prep Notes & Design Research

## Source
- **ColorLib template:** Crossbody
- **Preview:** https://preview.colorlib.com/theme/crossbody/
- **Category:** Health & Fitness (Crossfit / Gym)

## Section Order (from live preview DOM)

1. **Navbar** — dark bg, brand "Crosspulse", 7 nav links, mobile hamburger
2. **Hero** — full-viewport parallax image (`bg_2.jpg`) + overlay, headline "Cross Body" (→ "Crosspulse"), subheading, video play button (upper-right)
3. **Pricing / Course Cards** — "Pricing For Courses" heading, 3 image-backed cards (Weight Lifting ×3), each with title/description on top, price `$240.00`, "Enroll Now" gradient btn
4. **Programs / Classes List** — 5 items (Crossfit, Aerobic Classes, Fitness, Yoga Classes, Boxing), icon right + text left, alternating layout
5. **Counter / Stats** — dark `#090808` bg + parallax image, 4 stats: Happy Customers (5000), Perfect Bodies (4560), Working Hours (570), Success Stories (900), red label pills
6. **Coaches / Trainers** — "Our Coaches" heading, 3 cards: Head Coach (Travor James), Lead Trainer (Leonard Smith), Lead Trainer (James Buffer); each with role label, bio, social icons
7. **Testimonials** — parallax bg (`bg_4.jpg`) + overlay, "What People Say" heading, owl carousel of 5 testimonial cards with quote icon + customer name + "Customer" label
8. **Recent Blog** — "Recent Blog" heading, 3 blog cards: background image, date badge (day/month/year), title "Crossfit Harder Workout", excerpt
9. **Appointment / Contact Form** — split layout: map placeholder (col-lg-5) | form (col-lg-7) with First Name, Last Name, Email, Phone, Message textarea, "Appointment" submit btn
10. **Gallery** — full-width 4-column image row, hover search icon overlay
11. **Footer** — dark bg + overlay image, 3 columns: About Us + social links, Recent Blog (2 entries), Contact info; bottom: copyright + links

## Fidelity Notes

- The hero headline text uses `background-image` text clipping (image-filled text). In React, implement as a large bold heading with a gradient or image clip effect, or simply use bold white text on the dark overlay for simplicity.
- Pricing cards use image backgrounds with a hover reveal: the `.title` area (with program name) fades out and `.text` area (with price/description) slides in. Replicate with CSS transitions.
- Counter section uses parallax scrolling (`data-stellar-background-ratio`). Use `background-attachment: fixed` or an intersection observer + transform for a similar effect.
- Testimonials use Owl Carousel. In React, implement as a simple horizontal scroll or a lightweight carousel component.
- Gallery items have a hover overlay with a search icon. Implement with absolute positioning + opacity transition on hover.
- Footer background is pure `#000` with an overlay image and `background-size: cover`.
- The accent gradient button (`btn-custom`) uses `#ff0055` → `#ff6600` at 45°. Use Tailwind's `bg-gradient-to-r` with appropriate stop colors.

## Implementation Tasks

### Phase 1: Scaffold
- [ ] Create `apps/crosspulse/` (copy from simplest existing app, e.g. `apps/sprintly`)
- [ ] Update package.json → `@free-react-templates/crosspulse`
- [ ] Set `public/CNAME` to `crosspulse.free.componentdock.com`
- [ ] Set `homepage` to `https://crosspulse.free.componentdock.com`
- [ ] Add Work Sans font to `index.html`
- [ ] Run `npm install` at repo root to register workspace

### Phase 2: Components
- [ ] `src/components/Navbar.tsx` — dark bg, brand, 7 links, mobile toggle
- [ ] `src/components/Hero.tsx` — parallax bg, overlay, headline, video link
- [ ] `src/components/PricingCards.tsx` — 3 image-backed cards with price/CTA
- [ ] `src/components/ProgramsList.tsx` — 5 items with icons, alternating layout
- [ ] `src/components/CounterStats.tsx` — dark bg, 4 animated counters with red pills
- [ ] `src/components/Coaches.tsx` — 3 coach cards with social links
- [ ] `src/components/Testimonials.tsx` — carousel of 5 quote cards
- [ ] `src/components/RecentBlog.tsx` — 3 blog cards with date badge
- [ ] `src/components/ContactForm.tsx` — split layout: map + form
- [ ] `src/components/Gallery.tsx` — 4-column image row with hover overlay
- [ ] `src/components/Footer.tsx` — 3 columns + copyright + Component Dock link

### Phase 3: Theme Tokens (`src/index.css`)
```css
@theme {
  --color-brand: #78d5ef;
  --color-accent-start: #ff0055;
  --color-accent-end: #ff6600;
  --color-dark: #090808;
  --color-darker: #000000;
}
```

### Phase 4: Tests (TDD)
- [ ] Each component: `*.test.tsx` with 100% coverage
- [ ] Main App composition test

### Phase 5: Verification
- [ ] `scripts/verify-app.sh crosspulse` passes
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
