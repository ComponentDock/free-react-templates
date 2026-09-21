# Amicus — Design Notes & Task Outline

**Source:** ColorLib "Law Firm" → https://colorlib.com/wp/template/lawfirm/
**Preview:** https://preview.colorlib.com/theme/lawfirm/
**New name:** Amicus (Latin: amicus curiae — friend of the court)

---

## Section structure (top → bottom)

1. **TopBar** — phone + email on left, social icons on right. Dark bg.
2. **Navbar** — "Amicus" logo, 7 nav links, hamburger toggle. Dark bg (#1d2227), darkens to #000 on scroll.
3. **Hero** — full-width bg image, dark overlay, split layout: heading + subtitle + 2 buttons (primary blue "Contact us", white "Read more") on left, video play icon on right.
4. **IntroBoxes** — 4 dark boxes in a row. Each: icon + title + description. Progressive dark backgrounds.
5. **CounterStats** — 4 items with animated count-up numbers. Icon + number + label.
6. **AboutSection** — split: bg image left, light panel right. Subheading + heading + 4 service items (Expert Attorneys, Great Discount, Legal Advisory, Quick Charges).
7. **PracticeAreas** — 6 cards in 3-col grid. Rotating icon animation on hover. Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law.
8. **CaseStudies** — 8 cards in mixed-width grid (3-6-3 per row). Bg images with title overlay.
9. **Testimonials** — bg image + dark overlay. Carousel of quote cards with photo + name + position.
10. **Appointment** — bg image + dark overlay. Left: features list. Right: consultation form (Name, Email, Practice Areas dropdown, Message, Submit).
11. **Blog** — 3 cards in 3-col grid. Bg image with date overlay + title + description.
12. **Footer** — dark bg (#121518). 5 columns: Logo+social, Explore, Legal, Company, Contact. Dark bottom bar (#000) with copyright + Component Dock link.

---

## Fidelity notes per section

### TopBar
- Simple row with phone/email left, social icons right
- Dark background, white text, small font
- Use lucide-react for social icons (replace Font Awesome)

### Navbar
- Sticky, dark background (#1d2227)
- On scroll: bg → #000000, padding changes
- Mobile: hamburger toggle, collapse menu
- Logo: "Amicus" text (white, bold)

### Hero
- Fixed height (600px desktop), full-width bg image
- Dark overlay (rgba) for text legibility
- Split: left side has content, right side has video play button
- Two buttons: primary blue (#007bff) and white outline
- Use picsum.photos for bg image

### IntroBoxes
- 4 boxes in a single row, each with different dark shade
- Icons: use lucide-react (replace flaticon)
- Progressive background colors: #1d2227, #161a1e, #121518, #0e1013

### CounterStats
- Animated count-up numbers (use intersection observer + requestAnimationFrame)
- 4 items: 3000/1000/2000/10540
- Icons from lucide-react

### AboutSection
- Split layout: bg image left (use picsum.photos), light panel right
- Light panel has subheading, heading, 4 service items
- Service items: icon + title + short description

### PracticeAreas
- 6 cards, 3-column grid
- Each card: rotating icon container (hover animation), title, description
- Icons: replace flaticon with lucide-react

### CaseStudies
- 8 cards in mixed-width grid (3+6+3 pattern)
- Each card: bg image (picsum.photos) with text overlay on hover
- Titles overlay on image

### Testimonials
- Full-width bg image with dark overlay
- Owl Carousel-style testimonial slider
- Each testimonial: quote icon, text, customer photo (picsum.photos), name, position
- Use React state for carousel (no jQuery dependency)

### Appointment
- Full-width bg image with dark overlay
- Left: heading + 3 feature items with icons
- Right: form with Name, Email, Practice Areas (select), Message (textarea), Submit button
- Use lucide-react for feature icons

### Blog
- 3 cards, 3-column grid
- Each card: bg image with date overlay (day/month/year), title, description
- Date overlay: positioned over image

### Footer
- Dark bg (#121518)
- 5 columns: Logo+social, Explore, Legal, Company, Contact
- Bottom bar: #000000 bg, copyright + Component Dock link
- Social icons: Twitter, Facebook, Instagram (lucide-react)

---

## Component outline

```
src/
  App.tsx              — composes all sections
  components/
    TopBar.tsx          — contact info + social icons
    Navbar.tsx          — sticky nav with scroll behavior
    Hero.tsx            — bg image + content + video button
    IntroBoxes.tsx      — 4 dark info boxes
    CounterStats.tsx    — animated counters
    AboutSection.tsx    — split image + services
    PracticeAreas.tsx   — 6 practice area cards
    CaseStudies.tsx     — 8 case study cards
    Testimonials.tsx    — testimonial carousel
    Appointment.tsx     — consultation form + features
    Blog.tsx            — 3 blog cards
    Footer.tsx          — footer widgets + copyright
```

---

## Key differences from original

- No ColorLib assets (images → picsum.photos, icons → lucide-react)
- No jQuery dependency (vanilla React for carousel, animations)
- No Bootstrap classes (Tailwind CSS 4 equivalents)
- No Font Awesome (lucide-react icons)
- No Stellar.js parallax (CSS-only or Framer Motion if needed)
- Footer links to Component Dock instead of Colorlib
