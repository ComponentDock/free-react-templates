# Finflow — Design Notes & Implementation Tasks

**Source:** ColorLib "Finances" (https://colorlib.com/wp/template/finances/)
**Preview:** https://preview.colorlib.com/theme/finances/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/finances-free-template.jpg

## Section-by-Section Fidelity Notes

### 1. Navbar
- Sticky header, logo "Finances." with blue dot (`#007bff` dot after text)
- Desktop: horizontal nav links (Home, About Us with mega-dropdown, Blog, Contact, social icons)
- About Us dropdown has nested sub-dropdowns (Team, Pricing, FAQ, Gallery, Services, Testimonials, More Links)
- Mobile: hamburger icon toggles slide-in menu
- Use `packages/ui` Navbar if available, otherwise build custom with `cn()`
- Social icons: Facebook, Twitter, LinkedIn (use lucide-react equivalents)

### 2. Hero Carousel
- Owl-carousel style with 3 slides, each with a different background image
- Each slide: large uppercase heading + paragraph + "Get In Touch" pill button
- Dark overlay: `rgba(0,0,0,0.7)` over the background image
- Use `picsum.photos/seed/finflow-1/1920/800` etc. for placeholder backgrounds
- Consider using a simple React state-based carousel (no owl-carousel dependency)
- Slides: "Banking Solutions", "Financing Solutions", "Savings Accounts"

### 3. Team Section
- White background, `border-bottom`
- Heading: "Meet Team" (centered, `section-title` style)
- 3 cards in a row (col-md-4): circular avatar (50% radius), name h3, role caption, social links
- Avatar images: use `picsum.photos/seed/finflow-team-N/150/150`
- Team members: Kaiara Spencer, Dave Simpson, Ben Thompson

### 4. Gallery Section
- White background, `data-aos="fade"`
- Heading: "Gallery" (centered)
- Photo grid/masonry layout with hover effects
- Use `picsum.photos/seed/finflow-gallery-N/W/H` for placeholder images

### 5. Services Section
- Light grey background (`#f8f9fa`), `border-bottom`
- Heading: "Our Services" (centered)
- 4 items in a row: icon + title + description
- Services: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting
- Use lucide-react icons (Briefcase, CreditCard, BarChart3, Shield)

### 6. Testimonials
- White background, `data-aos="fade"`
- Heading: "Happy Customers" (centered)
- Owl-carousel of testimonial cards: quote text, author name, circular avatar
- Use lucide-react Quote icon or similar

### 7. Pricing
- Light grey background
- Heading: "Pricing" (centered)
- 3 cards in a row (col-lg-4): Basic ($47/yr), Premium ($200/yr, featured), Professional ($500/yr)
- Premium card has `pricing-popular` class (highlighted styling)
- Feature list with green check icons (included) and remove icons (excluded)
- "Buy Now" button on each card (pill-shaped, `btn-primary` on popular, `btn-secondary` on others)

### 8. About
- White background
- Heading: "About Us" / "We Solve Your Financial Problem"
- 4 feature items with circular icon badges: Money Savings, Online Shoppings, Credit/Debit Cards
- Each item: circular icon (50% radius, `#f8f9fa` bg) + title + description paragraph

### 9. Blog
- White background
- Heading: "Our Blog" (centered)
- 3 blog cards in a row: image + category tag + date + title + excerpt + "Read More" link
- Use `picsum.photos/seed/finflow-blog-N/800/500` for images

### 10. FAQ
- Light grey background
- Heading: "Frequently Ask Questions" (centered)
- Accordion items with expand/collapse
- Sample questions: "Can I accept both Paypal and Stripe?", "What available is refund period?"

### 11. Contact
- Light grey background, `data-aos="fade"`
- Heading: "Contact Us" (centered)
- Split layout: form on left, office info on right
- Form fields: First Name, Last Name, Subject, Email, Message, "Send Message" button
- Office info: address, phone, email

### 12. Footer
- Dark background (`#343a40`)
- 3 columns: brand description, Quick Links, Subscribe form
- Quick Links: Terms, Policy, About Us, Services, Testimonials, Contact Us
- Subscribe: email input + button
- Copyright bar at bottom with Component Dock link

## Implementation Tasks

- [ ] Set up workspace: copy simplest existing app, rename to `finflow`, configure `@free-react-templates/finflow`
- [ ] Create `src/index.css` with Tailwind v4 `@theme` block for design tokens (brand blue `#007bff`, light bg `#f8f9fa`, dark bg `#343a40`, font family Open Sans)
- [ ] Add Open Sans font link to `index.html`
- [ ] Build Navbar component with sticky positioning and mobile toggle
- [ ] Build HeroCarousel component with 3 slides, dark overlay, CTA buttons
- [ ] Build Team section with 3 member cards
- [ ] Build Gallery section with photo grid
- [ ] Build Services section with 4 service items on light bg
- [ ] Build Testimonials carousel with customer quotes
- [ ] Build Pricing section with 3 plan cards (Basic/Premium/Professional)
- [ ] Build About section with feature icons
- [ ] Build Blog section with 3 post cards
- [ ] Build FAQ accordion component
- [ ] Build Contact form with validation
- [ ] Build Footer with dark bg, links, subscribe form, Component Dock link
- [ ] Compose all sections in `src/App.tsx`
- [ ] Write tests for each component (TDD)
- [ ] Ensure 100% test coverage
- [ ] Verify no ColorLib references in app code
- [ ] Set up `public/CNAME` and `homepage` in `package.json`
