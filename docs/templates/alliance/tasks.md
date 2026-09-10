# Alliance — Implementation Notes

## Template overview
- **New name**: alliance
- **Source**: ColorLib Consula (https://colorlib.com/wp/template/consula/)
- **Preview**: https://preview.colorlib.com/theme/consula/
- **Category**: Consulting Agency

## Structure order (top to bottom)

1. Navbar
2. Hero (cover with background image + overlay)
3. About Us (two-column: image + text)
4. Team (three member cards on light bg)
5. How It Works (three columns: Innovate, Create, Scale)
6. Services (2×3 grid of service cards)
7. Testimonials (carousel slider)
8. Features (two blocks: Web & Mobile, Intuitive Thinkers)
9. Blog (three post cards)
10. Contact (form + info sidebar)
11. Footer (four columns + copyright)

## Section-by-section fidelity notes

### Navbar
- Sticky, white background, shadows on scroll
- Logo text "Alliance" (left)
- Nav links: Home, About Us, Team, Services, Testimonials, Blog, Contact
- Right side: phone number + email address
- Mobile: hamburger menu

### Hero
- Full-width with background image (use picsum.photos/seed/alliance-hero/1920x800)
- Semi-transparent dark overlay
- Heading: "We Are The Best Consulting Agency" (large, white, bold)
- Subtitle paragraph (white)
- "Get Started" CTA button: teal bg (#46ddb0), white text, pill shape (rounded-full)
- "50 years of experience" counter badge: positioned to the right of the hero text

### About Us
- Two-column layout
- Left: image (use picsum.photos/seed/alliance-about/600x400)
- Right: "Welcome To Alliance" heading + paragraph + "Learn More" teal button
- Section has a bottom border

### Team
- Light gray background (#f8f9fa)
- "Our Team" heading centered
- Three cards in a row:
  - John Rooster — Co-Founder, President
  - Tom Sharp — Co-Founder, COO
  - Winston Hodson — Marketing
- Each card: circular avatar (use picsum.photos/seed/alliance-team-N/150x150), name (bold), role (gray), description paragraph

### How It Works
- White background
- "How It Works" heading centered
- Three columns:
  - Innovate: icon + title + description + 2 checklist items with teal checkmarks
  - Create: icon + title + description + 2 checklist items
  - Scale: icon + title + description + 2 checklist items
- Use lucide-react icons (Lightbulb, PlusCircle, TrendingUp)

### Services
- White background
- "Our Services" heading centered
- 2×3 grid of cards:
  - Business Consulting, Market Analysis, User Monitoring
  - Insurance Consulting, Financial Investment, Financial Management
- Each card: icon (use lucide-react: Briefcase, BarChart3, Users, Shield, DollarSign, Wallet), title, short description, "Learn More" teal text link

### Testimonials
- Light background
- "People Says" subtitle + "Testimonials" heading
- Carousel/slider of 4 testimonials:
  - John Smith, Christine Aguilar, Robert Spears, Bruce Rogers
- Each: quote text, author name, circular avatar
- Implement as CSS-only horizontal scroll or simple state-based slider

### Features
- White background
- Two feature blocks side by side:
  - "Web & Mobile Specialties" — icon + title + description + "Learn More" link
  - "Intuitive Thinkers" — icon + title + description + "Learn More" link

### Blog
- Light background
- "Our Blog Posts" heading centered
- Three blog cards in a row:
  - Featured image (use picsum.photos/seed/alliance-blog-N/400x250)
  - Date badge (overlaid on image, teal bg)
  - Category tag: "News"
  - Title, short excerpt, "Continue Reading..." link
- Posts by Ham Brook (Jan 18, 2019) and James Phelps (×2, Jan 18, 2019)

### Contact
- White background
- Two-column layout:
  - Left: contact form with fields: First Name, Last Name, Email, Subject, Message
  - Right: Address (203 Fake St. Mountain View, San Francisco, CA), Phone (+1 232 3235 324), Email (youremail@domain.com)
- Form inputs: border #dee2e6, border-radius 0, height 48px, Roboto font

### Footer
- Dark background (dark gray/charcoal)
- Four columns:
  - About: short description paragraph
  - Quick Links: About Us, Services, Testimonials, Contact Us
  - Follow Us: social media icons (use lucide-react: Facebook, Twitter, Instagram, LinkedIn)
  - Subscribe Newsletter: email input + "Send" button
- Copyright bar at bottom: "Copyright © All rights reserved | Made with Component Dock"

## Key design decisions
- Roboto font via Google Fonts (match original)
- Primary teal #46ddb0 for all CTAs and accents
- Pill-shaped buttons (rounded-full) throughout
- Light/dark alternating section backgrounds
- Placeholder images via picsum.photos with deterministic seeds
- Icons from lucide-react (replace icomoon)
- Testimonials as simple carousel (CSS scroll-snap or state-based)
