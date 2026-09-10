# Deposit — Implementation Notes

Source: ColorLib Banker (https://preview.colorlib.com/theme/banker/)
New name: deposit (apps/deposit)

## Implementation order

1. Scaffold app from simplest existing template (copy apps/aurora or similar minimal)
2. Set up theme tokens in index.css (brand orange #fd7e14, font Open Sans)
3. Navbar component (sticky, transparent-on-hero, mobile hamburger)
4. HeroCarousel component (3 slides, auto-advance, dark overlay)
5. Features component (3-column icon cards)
6. AboutCTA component (heading + email form)
7. Team component (4-member grid with photos)
8. Gallery component (filterable image grid)
9. HowItWorks component (3 numbered steps)
10. Services component (6-card grid)
11. Testimonials component (carousel)
12. Pricing component (3-tier cards)
13. FAQ component (accordion)
14. Blog component (3 post cards)
15. Contact component (form + address)
16. Footer component (4-column dark bg)
17. App.tsx composition (all sections in order)
18. Tests (Vitest + RTL, 100% coverage)
19. Responsive pass (mobile/tablet)

## Design tokens (from live CSS extraction)

```css
--brand: #fd7e14;        /* orange — primary CTA */
--brand-green: #71bc42;  /* secondary accent */
--dark: #343a40;         /* navbar/footer bg */
--light-bg: #f7f7f7;     /* alternating sections */
--gray-bg: #ccc;         /* subtle dividers */
--text: #212529;         /* body text */
--text-muted: #b3b3b3;   /* secondary text */
--font: "Open Sans", sans-serif;
--btn-radius: 30px;      /* pill shape */
--btn-padding: 10px 30px;
--section-padding: 2.5em 0;
```

## Section-by-section fidelity notes

### Navbar
- Absolute positioning over hero, transparent background
- White text, bottom border rgba(255,255,255,0.7)
- Becomes sticky on scroll (z-index 1999)
- Logo on left, nav links right-aligned
- Mobile: hamburger icon, slide-in menu from right

### Hero
- Full-width background image with dark overlay (site-blocks-cover overlay)
- Carousel with 3 slides, owl-carousel behavior (auto-advance, dots)
- Each slide: large heading + paragraph + "Learn More" pill button
- Slides: "Banking Solutions", "Financing Solutions", "Savings Accounts"

### Features
- 3-column row with icon (flaticon), heading (h3), short description
- Cards: Money Savings, Online Shopping, Credit/Debit Cards
- Centered text, generous padding

### About Us / CTA
- Two-column layout: left = heading "We Solve Your Financial Problem" + paragraph + "Learn More" button; right = email capture form
- Background: white
- Form: input + "Subscribe" pill button, flex row

### Team
- 4-member grid (2x2 on medium, 4-col on large)
- Each card: circular photo, name (h3), role (span), social icon links
- Members: Kaiara Spencer (Finance Manager), Dave Simpson (Marketing Manager), Ben Thompson (Accountant), Kyla Stewart (Accountant)

### Gallery
- Filter buttons: All, Web, Brand, Design
- 4-column grid of images with overlay on hover
- Items tagged by category (web, brand, design)

### How It Works
- Centered heading + description paragraph
- 3 steps: each with icon, numbered title (01. Online Applications, etc.), description, "Learn More" link
- Steps in a 3-column row

### Services
- Background: light gray (#ccc)
- 6 cards in 3-column grid (2 rows)
- Each: icon, title (h3), description, "Learn More" link
- Services: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management

### Testimonials
- Carousel with customer quotes
- Each: quote text, circular avatar, name, role
- Previous/Next navigation arrows

### Pricing
- Background: light (#f7f7f7)
- 3 pricing cards in a row
- Each: plan name (h3), price ($47/$200/$750 per year), feature list, "Buy Now" button
- Middle card (Premium) is visually highlighted/popular

### FAQ
- Accordion pattern
- Questions as clickable headers, answers expand/collapse
- ~4-6 questions with lorem ipsum answers

### Blog
- 3 post cards in a row
- Each: featured image, title (h2), author + date metadata, excerpt, "Continue Reading" link
- Background: white with top border

### Contact
- Two-column: left = address/phone/email info; right = contact form
- Form fields: First Name, Last Name, Email, Subject, Message (textarea), Submit button

### Footer
- Background: #343a40 (dark)
- 4-column layout: About Us text, Quick Links (ul), Follow Us (social icons), Subscribe Newsletter (email input + button)
- Copyright bar at very bottom
- MUST include Component Dock link

## Placeholder images

Use picsum.photos with deterministic seeds:
- Hero: `https://picsum.photos/seed/deposit-hero/1920/1080`
- Team: `https://picsum.photos/seed/deposit-team-1/200/200` (4 variations)
- Gallery: `https://picsum.photos/seed/deposit-gallery-1/400/300` (8 variations)
- Blog: `https://picsum.photos/seed/deposit-blog-1/600/400` (3 variations)

## Icons

Use lucide-react for service/feature icons. Map original flaticon icons to nearest lucide equivalents:
- Money Savings → Banknote or Wallet
- Online Shopping → ShoppingCart
- Credit/Debit Cards → CreditCard
- Business Consulting → Briefcase
- Income Monitoring → BarChart3
- Insurance Consulting → Shield
- Financial Investment → TrendingUp
- Financial Management → PieChart
