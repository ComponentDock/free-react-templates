# Polish — Design Notes & Task Outline

**Source:** ColorLib Cleanex (https://colorlib.com/wp/template/cleanex/)
**Preview:** https://preview.colorlib.com/theme/cleanex/
**New Name:** Polish (`apps/polish`)

---

## Section Order (top to bottom)

1. **Navbar** — Fixed dark top bar, logo "Polish", nav links (About, Services, Pricing, Blog, Contact), responsive hamburger menu
2. **Hero** — Full-width photographic background (`bg_1.jpg` placeholder), dark overlay, diagonal clip (`degree-right`). Left-aligned: "Introducing" subheading with underline, "A Clean Home is A Happy Home" h1, description, "Request A Quote" outline button (white border, transparent bg)
3. **Booking Form** — Two-column: left has white card form (First Name, Last Name, Service dropdown [Residential/Commercial/Construction/Windows/Carpet/Furniture], Phone, Date, Time), submit button. Right side: contact info (phone number, email). Light tinted background.
4. **Stats Counter** — Dark image background (`bg_2.jpg` placeholder), dark overlay. 4 items in a row: blue circular icon + animated number + label. Values: 4,800 Projects, 14,000 Employees, 200 Clients, 71,650 Awards.
5. **Industries We Serve** — Two-column: left = full-height image, right = "Services" subheading, "Industries We Serve" h2, description, 2-column checklist of 8 industries with blue checkmark icons.
6. **Services Grid** — "Our Services" subheading, "Offering Best Cleaning Services" h2, 3x2 grid of service cards. Each: background image, h3 title, "Starting from $50" price, circular arrow button. Services: Residential, Commercial, Construction, Windows, Carpet, Furniture.
7. **How It Works** — Dark image background, dark overlay, white text. 3 numbered steps with icons: (1) Pick a suitable plan, (2) Set your schedule, (3) Get amazing result. Each with description paragraph.
8. **Testimonials** — `bg-light` section. Carousel of cards: circular avatar, name, location, quote text.
9. **Pricing** — "Our Plans & Pricing" h2. 4 cards: Basic ($29/session), Standard ($59/session), Premium ($99/session), Ultimate ($139/session). Each: plan name, price, 5 feature items, blue "Sign Up" button.
10. **CTA** — Dark image background, dark overlay. "Need to clean your house? Just hire us!" h2, two buttons: blue primary (phone) and outline secondary (email).
11. **Blog** — `bg-light` section. "Recent Post" h2. 3 cards: top background image, meta (date, author, comments), h3 title, excerpt.
12. **Footer** — Dark image background, dark overlay. 4 columns: Logo + social icons (Twitter, Facebook, Instagram), Recent Posts (2 blog previews), Explore links (About, Contact, Services, Blog), Contact info + Newsletter form (rounded input, arrow submit). Bottom bar: copyright + Component Dock link.

---

## Fidelity Notes

### Color Mapping to Tailwind @theme

- `brand-primary: #225ae1` → primary blue for buttons, links, icons
- `brand-secondary: #fedd32` → yellow for subheading decorative underlines
- `dark-overlay: rgba(0,0,0,0.5)` → for image overlays
- `body-text: #6c757d` → gray paragraph text
- `bg-light: #f8f9fa` → light gray section backgrounds
- `dark-navy: #161655` → deep navy accents

### Typography

- Font: System font stack (Bootstrap default) — use `font-sans` or Tailwind defaults
- Headings: bold, black (#000000)
- Body: weight 400, color #6c757d
- Subheading: smaller, uppercase, with decorative underline (yellow accent line)

### Buttons

- Primary: bg #225ae1, white text, border-radius 0.25rem, padding ~0.75rem 1.5rem
- Secondary (outline): transparent bg, white border, white text, same radius
- Hover: darken or fill change

### Image Strategy

- Hero: `https://picsum.photos/seed/polish-hero/1920/1080`
- Stats bg: `https://picsum.photos/seed/polish-stats/1920/600`
- Service cards: `https://picsum.photos/seed/polish-svc-{1-6}/400/300`
- Industries image: `https://picsum.photos/seed/polish-industries/600/700`
- Flow bg: `https://picsum.photos/seed/polish-flow/1920/600`
- CTA bg: `https://picsum.photos/seed/polish-cta/1920/500`
- Blog images: `https://picsum.photos/seed/polish-blog-{1-3}/400/250`
- Footer bg: `https://picsum.photos/seed/polish-footer/1920/600`
- Avatars: `https://picsum.photos/seed/polish-avatar-{1-4}/100/100`

### Component Structure

```
src/
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    BookingForm.tsx
    StatsCounter.tsx
    Industries.tsx
    ServicesGrid.tsx
    HowItWorks.tsx
    Testimonials.tsx
    Pricing.tsx
    CtaBanner.tsx
    Blog.tsx
    Footer.tsx
  index.css
  main.tsx
```

### Key Implementation Details

- Counter animation: use `useEffect` + `IntersectionObserver` to trigger count-up when section enters viewport
- Testimonial carousel: use a lightweight carousel or CSS-only approach
- Service cards: background-image with overlay + text overlay at bottom
- Footer background image with dark overlay (same pattern as hero)
- All external links in footer point to Component Dock

---

## Task Order

1. Scaffold `apps/polish` from simplest existing app template
2. Set up `src/index.css` with Tailwind @theme tokens
3. Implement Navbar component
4. Implement Hero component
5. Implement BookingForm component
6. Implement StatsCounter component (with animation)
7. Implement Industries component
8. Implement ServicesGrid component
9. Implement HowItWorks component
10. Implement Testimonials component
11. Implement Pricing component
12. Implement CtaBanner component
13. Implement Blog component
14. Implement Footer component
15. Compose all in App.tsx
16. Write tests for each component (100% coverage)
17. Verify build + typecheck + lint + test:coverage
