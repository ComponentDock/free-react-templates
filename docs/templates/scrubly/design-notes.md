# Scrubly — Prep Notes

Source: ColorLib Cleaning Company (https://colorlib.com/wp/template/cleaning-company/)
Preview: https://preview.colorlib.com/theme/cleaningcompany/ (slug: cleaningcompany, no dash)

## Component structure (ordered by DOM)

1. `TopBar.tsx` — thin white bar with phone + email on left, social icons
   (Facebook, Twitter, Instagram, Dribbble) on right. Hidden on mobile.

2. `Navbar.tsx` — transparent overlay at top, becomes white on scroll.
   Brand: "Scrubly" (split color: "Scrub" white/dark + "ly" yellow).
   Nav links: Home, About, Services, Portfolio, Pricing, Blog, Contact.
   Active link: yellow (#f3e53d) with animated underline.
   Mobile: hamburger toggle + collapsible nav.

3. `Hero.tsx` — full-width, background image (picsum.photos/seed/scrubly-hero/1920/1080),
   dark overlay. Left-aligned: subheading (white, 18px, 0.7 opacity),
   h1 headline (white, bold), "Learn More" blue button (#007bff, square).

4. `AppointmentForm.tsx` — floating white card overlapping hero bottom.
   4-column layout: Name input, Phone input, Services dropdown, Cleaners
   dropdown, "Make an Appointment" submit (blue, full card height).
   Purely visual — no form submission needed.

5. `About.tsx` — 2-column, no gutters. Left: bg image with business hours
   card (white bg, schedule) + emergency phone card (dark bg, white text).
   Right: subheading "Welcome to Scrubly", h2, paragraph, counter stats
   (45 Years, 2342 Customers, 30 Buildings).

6. `Services.tsx` — white bg, centered header, 6-item grid (3×2).
   Each: circular icon container (yellow icon, hover → blue bg),
   title h3, description, "Read more" link.
   Services: Office, Pool, Carpet, Kitchen, Garden, Window Cleaning.
   Icons: use lucide-react (Building2, Waves, Sofa, CookingPot, Trees, Frame).

7. `Team.tsx` — 4-column layout: left 1-col heading + "View All Staff" button,
   right 3-col of staff cards. Each card: bg image, name h3, role span,
   social icons (Twitter, Facebook, Google, Instagram).

8. `Testimonials.tsx` — dark bg (ftco-bg-dark equivalent), centered header,
   owl-carousel-style testimonial cards. Each: quote icon, user photo circle,
   name + role, quote paragraph.

9. `Portfolio.tsx` — white bg, centered header, 8-item grid (4×2).
   Each: bg image with dark overlay on hover, expand icon, project name.
   Projects: House, Window, Pool, Office, Carpet, Garden, Carpet, Pool.

10. `Blog.tsx` — white bg, centered header, 3-column cards. Each:
    bg image, author row (photo + name + date), title, excerpt.

11. `Footer.tsx` — dark bg. Multi-column: company info + social links,
    About links, Services links, Newsletter (email + send button).
    Copyright bar at bottom with Component Dock link.

## Key implementation notes

- All images: picsum.photos/seed/scrubly-N/W/H (deterministic per slot).
- Icons: lucide-react (replace flaticon: Building2, Waves, Sofa, CookingPot,
  Trees, Frame for services; Twitter, Facebook, Instagram, Dribbble for social).
- Font: Roboto via Google Fonts link in index.html (weights 300, 400, 500, 700).
- Brand color in @theme: `--color-brand: #f3e53d; --color-primary: #007bff;
  --color-secondary: #2b98f0;`.
- Navbar: IntersectionObserver or scroll listener for transparent→white transition.
- Appointment form: purely visual display, no backend.
- Counter stats: animate on scroll into view (or just display static numbers).
- Service icons: yellow (#f3e53d) default, hover → blue bg (#2b98f0) + white icon.
- Testimonials: simple carousel or auto-rotating cards (no external dependency).
- Portfolio grid: image cards with hover overlay showing expand icon.
- No real functionality — all interactive elements are visual-only.
- Footer newsletter: email input + send button (no actual form action).
