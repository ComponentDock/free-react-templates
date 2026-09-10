# Bookwright — Implementation Task Outline

Source: ColorLib Book Keeping (https://colorlib.com/wp/template/book-keeping/)
New name: bookwright
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
Preview: https://preview.colorlib.com/theme/book-keeping/ (unreachable at prep time)

## Section-by-Section Build Order

### 1. Top Bar (`TopBar.tsx`)

- Thin light-gray (#f0f0f0) utility header spanning full width
- Left side: contact info with lucide-react icons — phone, email
- Right side: social media icon links (Facebook, Twitter, LinkedIn)
- Hidden on mobile (d-none md:flex)
- Uses Open Sans font, small text size

### 2. Navbar (`Navbar.tsx`)

- White background, sticky top, subtle bottom border
- Left: logo — dark blue (#2b3990) circle with white "$" SVG + "Book Keeping" text (Book regular, Keeping bold)
- Center/right: nav links — Home, About, Services ▾, Blog, Contact
- Services has dropdown (toggle state, show submenu on click)
- Mobile: hamburger toggle (lucide-react Menu icon) with collapsible nav
- Poppins font for nav links

### 3. Hero Banner (`Hero.tsx`)

- Full-width section with background image (picsum.photos/seed/bookwright-hero/1920/800)
- Overlay for contrast (optional, subtle dark overlay or gradient)
- Centered white text: h1 "Book Keeping Consulting Agency"
- Subtext paragraph below headline
- Dark blue (#2b3990) CTA button "GET STARTED" — sharp corners (2px radius), uppercase, white text
- Responsive: text scales down, button maintains touch target

### 4. About Us (`About.tsx`)

- White background, two-column layout (grid or flex)
- Left column: professional image (picsum.photos/seed/bookwright-about/600/400)
- Right column:
  - Small uppercase dark blue subhead: "ABOUT US"
  - Large bold h2: "Mindful Planning of Monetary Spending and Saving"
  - Thin dark blue horizontal separator (border-bottom or hr)
  - Paragraph of descriptive text
  - 2×2 grid of feature bullet points with dark blue arrow icons (lucide-react ChevronRight)
- Responsive: stacks to single column on mobile

### 5. Services (`Services.tsx`)

- White or light gray (#f8f9fa) background
- Section title centered: "Our Services" with optional subtitle
- Grid of 6 service cards (3-column desktop, 2-column tablet, 1-column mobile)
- Each card: lucide-react icon, h3 title, paragraph description
- Services: Financial Planning, Tax Consultation, Bookkeeping, Audit, Payroll Management, Business Advisory
- Cards can have subtle hover effect (shadow or border)

### 6. Counters (`Counters.tsx`)

- Dark background section (dark gray #2d3436 or brand dark blue)
- 4-column grid of statistics
- Each: lucide-react icon + animated number + suffix (+, %) + label
- Stats: 150+ Projects, 98% Satisfaction, 12+ Years, 50+ Team
- Implementation: IntersectionObserver + requestAnimationFrame for count-up on scroll
- White text on dark background

### 7. Testimonials (`Testimonials.tsx`)

- White or light background
- Section title: "What Our Clients Say"
- Carousel or 2-column grid of testimonial cards
- Each card: quote icon (lucide-react Quote), paragraph text, author name (h4), author role (span), avatar placeholder (picsum.photos/seed/bookwright-avatar-N/80/80)
- Optional: carousel with dots navigation (React state-based)

### 8. Team (`Team.tsx`)

- White background
- Section title: "Our Team"
- 3-column grid of team member cards
- Each card: photo (picsum.photos/seed/bookwright-team-N/300/300), h3 name, span role, social icon links (Facebook, Twitter, LinkedIn from lucide-react)
- Responsive: stacks on mobile

### 9. Contact (`Contact.tsx`)

- White background, two-column layout
- Left (col-6): contact form with fields — Name (input text), Email (input email), Subject (input text), Message (textarea), "Send Message" button (dark blue, sharp corners)
- Right (col-6): contact info — address, phone, email with lucide-react icons, plus a map placeholder or decorative image
- Form validation: required fields, email format validation
- Submit handler: show success toast/alert (no backend needed)

### 10. Footer (`Footer.tsx`)

- Dark background (#2d3436 or brand dark blue)
- 4-column grid:
  - Col 1: logo + brief description + social icon links
  - Col 2: Quick Links (Home, About, Services, Blog, Contact)
  - Col 3: Services links (Financial Planning, Tax, Bookkeeping, Audit, Payroll, Advisory)
  - Col 4: Newsletter — heading, email input, subscribe button
- Responsive: stacks to 2 columns on tablet, 1 on mobile
- Copyright bar below: "Copyright © 2024 All rights reserved | Made with Component Dock"

### 11. App Composition (`App.tsx`)

- Import and compose all section components in order
- TopBar → Navbar → Hero → About → Services → Counters → Testimonials → Team → Contact → Footer
- No state management needed (local state only for nav toggle, carousel, form)

### 12. Theme Tokens (`index.css`)

- @theme block with brand colors:
  - --color-brand: #2b3990
  - --color-text: #4a4a4a
  - --color-text-body: #666666
  - --color-bg-light: #f0f0f0
  - --color-accent: #d69b3b
- Font imports: Poppins (headings) + Open Sans (body) via Google Fonts link in index.html

## Design Notes

- **Sharp CTA buttons**: Unlike many templates with pill buttons, Book Keeping uses sharp 2px radius buttons — keep this distinctive trait
- **Dark blue brand**: #2b3990 is the dominant brand color — use it for all CTAs, logo, accents, social icons
- **Split layouts**: About and Contact sections both use 2-column splits — maintain consistent gutters
- **Counter animation**: Key interactive element — must use IntersectionObserver for scroll-triggered animation
- **Mobile-first**: Utility bar hidden, hamburger nav, stacked columns — standard responsive pattern
- **No ColorLib references**: All provenance lives in this spec and TEMPLATES.md only
