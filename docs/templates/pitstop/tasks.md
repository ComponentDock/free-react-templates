# Pitstop (ColorLib AutoMotive) — Tasks & Design Notes

> Recreation of ColorLib "AutoMotive"
> (https://colorlib.com/wp/template/automotive/) under the NEW name
> **Pitstop** (a motorsport quick-service stop), per the monorepo naming
> mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "AutoMotive" — automotive / garage landing template
  (category: automotive).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/automotive/
  (HTTP 200, ~18 KB HTML, fetched 2026-09-10). Stylesheets: Bootstrap,
  Font Awesome, elegant-icons, nice-select, jQuery UI, Magnific Popup,
  Owl Carousel, slicknav, and main `css/style.css` (~900 lines).
- **Visual design (from DOM + CSS + screenshot `automotive-free-template.jpg`):**
  Dark-themed automotive garage aesthetic. Dark top bar (#25282C) with
  brand-color (#5F67FF) accent icons. White nav bar with underline-active
  menu items. Full-width hero with dark garage photo background, large white
  headings. White content sections with 4-column grids. Dark split "Choose Us"
  section. Product grid with hover overlay actions. Testimonial carousel with
  large purple quotation marks. Dark parallax counter section. Dark-background
  footer with 3-column service actions and 4-column info layout. Overall
  feel: professional, dark-meets-white, blue-purple brand accent.
- **Typography:** Public Sans (Google Fonts, weights 400-900). Clean, modern,
  slightly condensed. Headings weight 700 in white on dark sections, #353535
  on light sections. Body text 15px #727171.
- **Brand color:** #5F67FF (vivid blue-purple) — used on buttons, active
  states, icon accents, testimonial quotes, copyright links.

## Section-by-section implementation notes

### 1. Header (Navbar + Top Bar)
- **Top bar:** bg #25282C, phone + hours left, "Find us on map" + social icons right. Icons in #5F67FF.
- **Nav:** White bg, logo left (use placeholder), 4 links center (Home active, Services, Shop, Pages with dropdown, Blog), search + cart right.
- **Active state:** 5px bottom underline in #5F67FF, animated scale(0)→scale(1).
- **Dropdown:** bg #353535, 150px wide, opacity/visibility transition.
- **Mobile:** hamburger icon, offcanvas drawer with phone/hours/social.

### 2. Hero
- Full-width background image (use `picsum.photos/seed/pitstop-hero/1920/800`).
- Centered white text: "Welcome To" (40px light) + "Auto-Motive Garage" → "Pitstop" (60px bold) heading.
- Subtitle paragraph (24px).
- CTA: "Our Services" button (.primary-btn, #5F67FF, no border-radius).

### 3. Services ("What We Do?")
- Section title: "What We Do?" centered, 40px bold, #353535.
- 4 items in a 2×2 or 4-column alternating layout (text-left/image-right pairs).
- Each card: icon (use lucide-react), title (h4), short paragraph.
- Services: Engine Overhaul, Power Steering, Oil Change, Upgrades Car.

### 4. Choose Us
- Split layout: left 50% = background image, right 50% = text block.
- Title: "We Have 20 Years Of Experience In Auto Car" (with line break).
- 4 checklist items with check icons (use lucide-react CheckCircle).
- CTA: "About Us" button.

### 5. Products ("Our Products")
- 4-column responsive grid.
- Each card: product image (use `picsum.photos/seed/pitstop-prod-<n>/300/300`),
  hover overlay with 3 action icons (heart, eye, exchange), product name link,
  price ($800.00), "+Add To Cart" link.
- Hover effect: overlay slides up or fades in.

### 6. Testimonials
- Carousel (implement with state or a lightweight carousel, no jQuery needed).
- 3 quote blocks: large quotation icon (brand color #5F67FF), italic text.
- Dot navigation below (active dot = #353535, inactive = #b5b5b5).

### 7. Counter ("About Our Statistics")
- Dark background image (use `picsum.photos/seed/pitstop-counter/1920/600`).
- 4 counter items: icon (use lucide-react), number "560" + "+", label.
- Labels: All Project, Project Completed, Customers Action, Awards Winner.
- Optional: animate numbers on scroll into view.

### 8. Latest News
- 3-column grid of blog cards.
- Each: featured image (use `picsum.photos/seed/pitstop-news-<n>/400/300`),
  author + date overlay, title (h4 link), excerpt paragraph, "Continue Reading" link.

### 9. Footer
- Dark bg with background image (use `picsum.photos/seed/pitstop-footer/1920/800`).
- Top row (3-col): 3 contact action items with icons — Appointment, Phone, Location.
- Bottom section (4-col): About (logo + description + CTA), Quick Links (5 items),
  News (3 recent posts), Address (address + fax + mobile + email).

### 10. Copyright Bar
- bg #25282C, 10px padding.
- Left: copyright with current year, "Component Dock" link (not Colorlib).
- Right: 4 social icon links with colored backgrounds (#324975, #2C85AE, #DC4438, #3EAFF0).

## Implementation tasks

- [ ] Set up `apps/pitstop/` workspace (copy minimal app, rename package)
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Set up `index.html` with Public Sans Google Font link
- [ ] Create `src/index.css` with Tailwind entry + @theme tokens for brand colors
- [ ] Build `Navbar.tsx` component (top bar + main nav + mobile drawer)
- [ ] Build `Hero.tsx` component (bg image, heading, subtitle, CTA)
- [ ] Build `Services.tsx` component (4 alternating cards)
- [ ] Build `ChooseUs.tsx` component (split layout, checklist, CTA)
- [ ] Build `Products.tsx` component (4-col grid with hover overlay)
- [ ] Build `Testimonials.tsx` component (carousel with dots)
- [ ] Build `Counter.tsx` component (4 stats with bg image)
- [ ] Build `LatestNews.tsx` component (3 blog cards)
- [ ] Build `Footer.tsx` component (top row + bottom section)
- [ ] Build `Copyright.tsx` component (Component Dock attribution)
- [ ] Compose `App.tsx` with all sections in order
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Ensure 100% test coverage
- [ ] Verify responsive layout (mobile menu, stacked grids)
- [ ] Run `scripts/verify-app.sh pitstop`
- [ ] Create `public/CNAME` with `pitstop.free.componentdock.com`
- [ ] Commit and push
