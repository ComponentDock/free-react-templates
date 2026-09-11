# TidyWash — Implementation Tasks

Source: ColorLib **Cleanex** — https://colorlib.com/wp/template/cleanex/
Preview: https://preview.colorlib.com/theme/cleanex/
New name: `tidywash` (`apps/tidywash`)

## Task order (section-by-section)

### 1. Scaffold app

- Copy simplest existing app as template
- Rename package to `@free-react-templates/tidywash`
- Set `public/CNAME` to `tidywash.free.componentdock.com`
- Set `homepage` in package.json to `https://tidywash.free.componentdock.com`
- Run `npm install` at repo root

### 2. Top bar + Navbar

- Top bar: phone, email, hours (Mon-Sat), social media icons (Facebook, Twitter, Instagram, Dribbble)
- Navbar: "Tidy<span>Wash</span>" logo (Tidy in navy #161655, Wash in blue #225ae1)
- Nav links: Home, About, Pricing, Services, Blog, Contact
- Transparent on hero, solid black on scroll
- Mobile hamburger menu

### 3. Hero section

- Full-width background image with dark overlay (`rgba(0,0,0,0.5)`)
- Heading: "A Clean Home is A Happy Home"
- Subtext paragraph
- "Request A Quote" CTA button (blue #225ae1, rounded)
- Use `picsum.photos/seed/tidywash-hero/1920/1080` for image

### 4. About + Appointment form

- Left side: heading "Most Awarded Cleaning Company Since 2000", two paragraphs
- Right side: appointment form with dark background
  - Fields: First Name, Last Name, Phone, Date, Time, Service (dropdown)
  - Service options: Residential, Commercial, Construction, Windows, Carpet, Furniture, Other
  - Submit button

### 5. Features (4 cards)

- Heading: "Our Services" or similar
- 4 feature cards in a row with icon + title + description:
  - Highly Trained Staff
  - Best Equipments
  - 100% Warranty
  - Fast & Effective Service
- Icons: use `lucide-react`

### 6. Counter/Stats section

- Dark background image with overlay
- Animated number counters (e.g. years, clients, projects, staff)
- Use Intersection Observer for scroll-triggered animation

### 7. Industries served (6 service images)

- Heading: "Industries We Serve"
- Subtext paragraph
- 2x3 grid of service images with dark overlay and text:
  - Residential Cleaning, Commercial Cleaning, Construction Cleaning
  - Windows Cleaning, Carpet Cleaning, Furniture Cleaning
- Use `picsum.photos/seed/tidywash-svc-{n}/600/400`

### 8. Process section (3 steps)

- Blue (#225ae1) background
- Heading: "Get Amazing Cleaning in 3 Simple Ways"
- 3 steps with numbered circle icons:
  1. Pick a suitable plan
  2. Set your schedule
  3. Get things done

### 9. Testimonials

- Light gray (#f4f5f0) background
- Heading: "What Our Clients Say"
- Carousel of testimonial cards with user avatar, name, quote
- Use owl-carousel style (implement with CSS scroll-snap or a lightweight carousel)

### 10. Pricing (4 tiers)

- Heading: "Our Plans & Pricing"
- 4 pricing cards: Basic ($29), Standard ($59, highlighted), Premium ($79), Ultimate ($89.50)
- Each with "Sign Up" button
- Highlighted card has blue border/background

### 11. CTA section

- Blue (#225ae1) background
- Heading: "Need to clean your house? Just hire us!"
- Phone and email contact info

### 12. Blog section

- Light gray (#f8f9fa) background
- 3 blog post cards with image, date, author, comment count, title, excerpt
- Use `picsum.photos/seed/tidywash-blog-{n}/400/300`

### 13. Footer

- Dark background (#1a1a2e or similar)
- 4 columns:
  - Brand: TidyWash + description
  - Recent Posts: 2 recent post links with thumbnails
  - Explore: navigation links
  - Contact: phone, email, address
- Copyright bar at bottom linking to Component Dock

### 14. Tests

- Write Vitest + RTL tests for each component
- Ensure 100% line/function/branch/statement coverage
- Test responsive behavior

### 15. Verification

- Run `scripts/verify-app.sh tidywash`
- Verify no ColorLib references in app code
- Verify footer links to Component Dock

## Design notes

- **Color palette**: Blue (#225ae1) primary, yellow (#fedd32) accent, navy (#161655) text, gray (#999999) body
- **Font**: Roboto (Google Fonts)
- **Layout**: Bootstrap-style 12-column grid (use Tailwind grid/cols)
- **Key differences from original**:
  - No jQuery, no Bootstrap JS — pure React
  - No owl-carousel — use CSS scroll-snap or lightweight React carousel
  - Placeholder images via picsum.photos
  - No ColorLib branding in footer — replace with Component Dock
  - Mobile-first responsive design with Tailwind breakpoints
