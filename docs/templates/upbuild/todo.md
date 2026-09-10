# Upbuild — Implementation Outline

Recreation of ColorLib "Celt" construction company template.
Source: https://colorlib.com/wp/template/celt/
Preview: https://preview.colorlib.com/theme/celt/

## Section implementation order

Implement top-down matching the original section structure exactly.

### 1. Project scaffolding

- Copy simplest existing app (e.g. `apps/anvil/`) as starting point
- Rename package to `@free-react-templates/upbuild`
- Set up `public/CNAME` with `upbuild.free.componentdock.com`
- Add Poppins font (400, 700) via Google Fonts `<link>` in `index.html`
- Set brand tokens in `src/index.css` via `@theme`:
  - `--color-brand`: #FFD626 (golden yellow)
  - `--color-navy`: #001232 (dark navy)
  - `--color-heading`: #004 (dark navy for headings)
  - `--color-body`: #64728A (blue-grey body text)
  - `--color-grey-bg`: #F8F8F8 (light grey sections)

### 2. TopNavbar.tsx

- Thin dark strip above main navbar
- 3 items: address (map-marker icon), phone, email — each with Font Awesome
  equivalent (use lucide-react: MapPin, Phone, Mail)
- Dark bg, white/light text, centered container

### 3. Navbar.tsx

- Two-part: logo left, 6 nav links right (Home, About, Projects, Services, Blog, Contact)
- Home/Projects/Services/Blog have dropdown menus (useState toggle)
- Sticky on scroll (scroll detection via IntersectionObserver or scroll event)
- Logo: text-based or placeholder image

### 4. Hero.tsx

- Full-width dark background image (use picsum.photos with construction seed)
- White overlay (opacity ~0.9)
- Centered content: h1 "We Build Your Dream", subtitle paragraph, "Learn more" button
- Secondary button style: white outline, rounded

### 5. AboutCards.tsx (About Section 01)

- 3-column grid (col-md-4 equivalent via Tailwind grid)
- Each card: image (picsum), h3 title, description p, "Read more" text-link
- Titles: "Certified Experience", "The Great Teamwork", "Modern Technology"
- White background section

### 6. AboutSplit.tsx (About Section 02)

- Split layout: left half = background image, right half = text content
- Grey (#F8F8F8) background
- "Subtitle" label, "About Us" h2, lead paragraph + body paragraph
- Responsive: on mobile, bg image goes full-width behind text

### 7. StatsBar.tsx (Numbers Section)

- Yellow (#FFD626) background, full-width
- 4 stat boxes in a row: icon + large number + label
- Stats: "20" / Year Of Experience, "154" / Project Completed,
  "785" / Happy Client, "14" / Award Won
- Use lucide-react icons: Building2, GraduationCap, Handshake, Trophy

### 8. Portfolio.tsx

- Carousel/slider of project cards (use CSS scroll-snap or simple carousel)
- Each card: image with dark overlay on hover showing link + search icons,
  title below, category below title
- 4 project cards
- "View All" button below
- Use picsum.photos for project images

### 9. ServicesGrid.tsx

- 3×2 grid of service items
- Each: icon + h3 title + description + "Read more" text-link
- Services: Construction (building), Renovation (wrench), Architecture (landmark),
  Painting (palette), Decorating (sparkles), Consulting (megaphone)
- Use lucide-react icons

### 10. WhyChooseUs.tsx (Accordion)

- Split layout: left = heading + accordion, right = half-bg image
- Grey (#F8F8F8) background
- Accordion: 3 panels with useState for open/closed toggle
- Panels: "Certified Experience", "The Great Teamwork", "Modern Technology"
- First panel open by default

### 11. CtaBand.tsx (CTA Section 1)

- Yellow (#FFD626) background, full-width
- Centered: h2 headline, h4 subtitle, "Contact Us" button (main-button style)

### 12. Testimonials.tsx

- Full-width background image with overlay
- Centered heading "Happy Clients" with subtitle
- Carousel of 3 testimonial slides: quote p, h3 name, span role
- Dot indicators for navigation

### 13. PartnerLogos.tsx

- Below testimonials, same section container
- Row of 6-7 partner logo images (use placeholder/greyscale images)
- Simple carousel or horizontal scroll

### 14. BlogGrid.tsx

- 3-column grid of blog cards
- Each: image, date + author meta line, h3 title, excerpt p, "Read more" link
- Heading: "Latest News" with subtitle

### 15. CtaHorizontal.tsx (CTA Section 2)

- Yellow (#FFD626) background, compact padding
- Horizontal: h3 headline left (col-9), "Contact Us" button right (col-3)

### 16. Footer.tsx

- Dark navy (#001232) background
- 3-column layout:
  - Col 1: logo + description + contact list (address, phone, email with icons)
  - Col 2: "Quick Links" heading + two columns of nav links
  - Col 3: "Keep in touch" + email subscribe form + social icons (facebook, twitter, google, linkedin)
- Bottom bar: copyright text with link to Component Dock

### 17. App.tsx assembly

- Compose all sections in order: TopNavbar → Navbar → Hero → AboutCards →
  AboutSplit → StatsBar → Portfolio → ServicesGrid → WhyChooseUs →
  CtaBand → Testimonials → PartnerLogos → BlogGrid → CtaHorizontal → Footer

## Fidelity notes

- **Parallax**: Hero bg-image uses `background-attachment: fixed` for parallax.
  On mobile, change to `scroll` for performance.
- **Overlay**: Hero uses white overlay at opacity 0.9. The original uses a
  pseudo-element; implement via a `bg-white/90` absolute div.
- **Half-bg images**: About 02 and Why Choose Us use 50%-width background
  images on one side. On mobile (< 992px), they go full-width behind text.
- **Accordion**: Bootstrap-style collapse. Implement with React state — one
  panel open at a time. Smooth height transition.
- **Carousel**: Original uses owl-carousel. Replace with CSS scroll-snap
  or a lightweight React carousel. Autoplay for partners/testimonials.
- **Text links**: `.text-link` style — no underline, transforms/arrow on hover.
  Replicate as a styled `<a>` with hover transition.
- **Section padding**: md=90px, sm=60px, xs=30px — map to Tailwind py-22/py-15/py-8
  or custom spacing.
- **No ColorLib references**: All provenance info lives only in this doc and
  the spec. App code uses design-token notes only (e.g. "brand: #FFD626").
