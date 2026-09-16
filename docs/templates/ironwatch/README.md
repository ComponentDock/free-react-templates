# IronWatch — Implementation Tasks & Design Notes

Source: ColorLib Security (https://preview.colorlib.com/theme/security/)
New name: ironwatch (apps/ironwatch, @free-react-templates/ironwatch)

## Section-by-section build order

### 1. Header
- Two-tier: top bar (social icons + phone + register/login) + main nav bar (logo + nav links)
- Top bar: light background, small text, horizontal flex with social icons left and contact right
- Main nav: logo left, horizontal nav links right, "Pages" as dropdown
- Sticky on scroll (use IntersectionObserver or CSS sticky)
- Social icons: use lucide-react equivalents (Facebook → external-link or similar)
- Nav links: Home, About, Services, Team, Price, Blog, Contact, Pages (dropdown)

### 2. Banner / Hero
- Full viewport height (`min-h-screen` or `h-screen`)
- Background image via picsum.photos with dark overlay (bg-black/70)
- Left-aligned content: subtitle (small text), h1 headline, paragraph, CTA button
- CTA: square button (no rounded corners), bg-brand-primary (#fab700), white text, uppercase, px-10
- Content max-width ~70% of container (col-lg-9)

### 3. Services
- Section heading: "Our Offered Services" centered
- 3-column grid (col-lg-4)
- Each card: image thumbnail (top), title link (h4), description paragraph
- Images: picsum.photos/seed/ironwatch-service-{1,2,3}
- Cards have no visible border/shadow — clean white background

### 4. Features
- Section heading: "Some Features that Made us Unique" centered, left-aligned description
- 2-row × 3-column grid (col-lg-4 col-md-6)
- Each item: colored lucide-react icon + h4 title + description
- Icon colors: use distinct brand palette colors per feature
- Light background (#f9f9ff) for the section

### 5. Facts / Counter
- Full-width amber background (#fab700)
- 5 equal columns with counter numbers + labels
- Numbers: white, bold, large (text-4xl or text-5xl)
- Labels: white, smaller
- Use react-countup or similar for animated counters
- Labels: Projects Completed, Happy Clients, Tasks Completed, Cups of Coffee, In House Professionals

### 6. Gallery
- Section heading: "Latest From Our Gallery" centered
- Masonry-style grid: Row 1 (7/5 split), Row 2 (4/4/4), Row 3 (5/7 split)
- Images: picsum.photos/seed/ironwatch-gallery-{1..7}
- Images are clickable (placeholder lightbox or simple expand)
- Light background (#f9f9ff) for the section

### 7. Blog
- Section heading: "Latest From Our Blog" centered
- 4-column grid (col-lg-3 col-md-6)
- Each card: thumbnail, date (styled text), title (h4 link), excerpt, meta row (likes + comments with icons)
- Images: picsum.photos/seed/ironwatch-blog-{1..4}
- White background

### 8. Footer
- Dark navy background (#04091e)
- 3 columns: About Us (text + copyright), Newsletter (email form), Follow Us (social icons)
- Newsletter: email input + submit button (pill-shaped, 20px radius, #fab700 bg)
- Social icons: lucide-react equivalents
- Copyright must link to https://www.componentdock.com/ (Component Dock)
- NO ColorLib attribution

## Fidelity notes

- The original uses Bootstrap 4 grid. Recreate with Tailwind's grid/flex utilities.
- Original icons are Linearicons (lnr-*) — use lucide-react equivalents:
  - lnr-user → User
  - lnr-license → BadgeCheck
  - lnr-phone → Phone
  - lnr-rocket → Rocket
  - lnr-diamond → Diamond
  - lnr-bubble → MessageCircle
  - lnr-heart → Heart
  - lnr-arrow-right → ArrowRight
- Banner background: use a picsum.photos image with seed "ironwatch-hero"
- The primary-btn class: square corners (rounded-none), bg-[#fab700], text-white, uppercase, tracking-wider
- Counter values: 2536, 6784, 1059, 2239, 435 (keep these exact numbers for fidelity)
- Section spacing: use consistent vertical padding (py-20 or section-gap equivalent)
- Nav dropdown: use a simple state toggle for mobile/desktop
