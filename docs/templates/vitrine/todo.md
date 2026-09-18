# Vitrine — Implementation TODO

## ColorLib source
- Name: Portfolio
- Slug: `portfolio`
- Preview: https://preview.colorlib.com/theme/portfolio/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-free-template.jpg

## New name
- App folder: `apps/vitrine`
- Package: `@free-react-templates/vitrine`
- CNAME: `vitrine.free.componentdock.com`

---

## Section-by-section implementation order

### 1. Project scaffolding
- Copy simplest existing app (e.g. `apps/aurora` or similar minimal template)
- Rename package to `@free-react-templates/vitrine`
- Set up `public/CNAME` → `vitrine.free.componentdock.com`
- Update `vite.config.ts` with `injectUiSource()` pattern
- Add Google Fonts Poppins link to `index.html`
- Configure Tailwind theme tokens in `index.css`:
  - `--color-brand: #8ab92d`
  - `--color-heading: #222222`
  - `--color-body-text: #777777`
  - `--color-footer-bg: #04091e`
  - `--color-overlay-dark: rgba(4, 9, 30, 0.5)`
  - `--color-overlay-darker: rgba(4, 9, 30, 0.8)`

### 2. Navbar component (`src/components/Navbar.tsx`)
- Logo on left (placeholder SVG or text logo)
- Nav links: Home, Portfolio, Services, Testimonial (anchor links to sections)
- Sticky/transparent on scroll (original has `navbar-light` on transparent bg)
- Hamburger toggle for mobile
- No Pages dropdown (Generic/Elements pages don't exist in our recreation)

### 3. Hero/Banner component (`src/components/Hero.tsx`)
- Full-width section with background image (use `picsum.photos/seed/vitrine-hero/1920/800`)
- Dark overlay: `bg-[rgba(4,9,30,0.5)]` absolute fill
- Centered content:
  - Small uppercase text: "Now you can watch the Talent"
  - Large heading: "Let's Explore Idea!"
  - Green pill CTA button: "Explore Now" → links to `#portfolio`
- Border radius on the section edges (original has `border-radius: 10px`)

### 4. Portfolio Gallery component (`src/components/PortfolioGallery.tsx`)
- Section heading: "This is what we can do for you" + subtitle
- Filter tabs: All, Vector, Raster, UI/UX, Printing
  - Active tab: green text (#8ab92d) with underline animation
  - Use `useState` for active filter; simple CSS filter (no isotope needed)
- 3-column grid (responsive: 3 → 2 → 1 columns)
- Each portfolio item: rounded image (`border-radius: 10px`), title below, category label in smaller text
- 12 items total, repeating content types (Corporate, Personal, Agency, Portal)
- Images: `picsum.photos/seed/vitrine-work-{1-12}/400/300`

### 5. Service Header component (`src/components/ServiceHeader.tsx`)
- Full-width section with background image (`picsum.photos/seed/vitrine-service/1920/400`)
- Dark overlay: `bg-[rgba(4,9,30,0.8)]` (darker than hero)
- Centered white heading: "This is what we can do for you"
- Subtitle text below

### 6. Service Cards component (`src/components/ServiceCards.tsx`)
- 3-column layout (responsive)
- Cards:
  1. Vector Artworks — icon + title + description
  2. Corporate Identity — icon + title + description
  3. Art Direction Design — icon + title + description
- Use lucide-react icons (e.g., `PenTool`, `Building2`, `Palette`)
- White background, centered text

### 7. Testimonials component (`src/components/Testimonials.tsx`)
- Section heading: "How Our Customers Treat Us" + subtitle
- 2x2 grid of review cards
- Each card: avatar image (`picsum.photos/seed/vitrine-avatar-{1-4}/80/80`), reviewer name, star rating (render star icons, filled/unfilled), review paragraph
- Reviewers: Fannie Rowe (3★), Lillie Summers (3★), Hulda Sutton (3★), Ruth Burns (2★)
- Paraphrase reviews (don't copy verbatim from ColorLib)

### 8. Footer component (`src/components/Footer.tsx`)
- Dark navy background: `bg-[#04091e]`
- 3-column layout (responsive: stacks on mobile):
  1. **About Us** — heading + description text
  2. **Newsletter** — heading + email input + submit arrow button
  3. **Follow Us** — heading + social icons (Facebook, Twitter/X, Dribbble, Behance) via lucide-react
- Bottom copyright line with "Made with Component Dock" link to `https://www.componentdock.com/`
- NO ColorLib attribution

### 9. App composition (`src/App.tsx`)
```tsx
<Navbar />
<main>
  <Hero />
  <PortfolioGallery />
  <ServiceHeader />
  <ServiceCards />
  <Testimonials />
</main>
<Footer />
```

### 10. Tests (TDD)
- Test each component renders its sections
- Test portfolio filter switching
- Test mobile navbar toggle
- Test newsletter form interaction
- Aim for 100% coverage on all non-entry files

---

## Fidelity notes

- Original uses Bootstrap grid (col-lg-4, col-sm-4) → convert to Tailwind grid/flex
- Original uses Isotope for portfolio filtering → simplified with React state + CSS
- Original uses jQuery + Owl Carousel → not needed, use React patterns
- Original has parallax on service bg → use `bg-fixed` or `bg-attachment: fixed` in Tailwind
- All images replaced with `picsum.photos` placeholders (deterministic seeds)
- Star ratings use lucide-react `Star` icons with fill prop
- No external JS libraries needed — pure React
