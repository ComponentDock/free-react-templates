# ZenWell — Implementation Notes

Source: ColorLib Counselor → https://preview.colorlib.com/theme/counselor/
New name: zenwell

## Implementation order

1. Scaffold app (copy simplest existing app, rename to @free-react-templates/zenwell)
2. index.css: add Tailwind theme tokens (brand-green: #589167, dark-navbar: #1a1a1a)
3. TopBar component (green bar, phone/email left, social icons right)
4. Navbar component (dark sticky, brand "ZenWell", responsive hamburger)
5. Hero component (bg image, headline, subtitle, 2 CTA buttons, play overlay)
6. TrustSection component (green bg, 3-column grid, icons, headings, descriptions)
7. HowItWorks component (label, heading, 3 numbered steps)
8. AboutSection component (heading, 2 paragraphs)
9. ServicesTabs component (vertical tabs, content panels, active state)
10. Testimonials component (green overlay, carousel of quotes)
11. Pricing component (light gray bg, 3 cards with features + CTA)
12. ContactForm component (green overlay bg image, form inputs, validation)
13. BlogSection component (3 cards with image, date, category, heading, excerpt)
14. Footer component (4 columns, copyright, Component Dock link)
15. App.tsx: compose all sections in order
16. Tests for each component (TDD)
17. Verify with scripts/verify-app.sh zenwell

## Design fidelity notes

### Top bar
- Background: solid #589167 green
- Left: phone icon + number, email icon + address
- Right: social icons in circle buttons (Facebook, Twitter, Instagram, Dribbble)
- All white text/icons

### Navbar
- Dark background (~#1a1a1a)
- Brand text "ZenWell" in white, bold
- Nav links: Home, About, Services, Pricing, Blog, Contact
- Active link: white, others: rgba(255,255,255,0.5)
- Sticky on scroll
- Hamburger on mobile (< 992px)

### Hero
- Full-width background image (use picsum.photos/seed/zenwell-hero-1/1920/1080)
- Left-aligned content block
- Headline: "Counseling For Your Better Life" (large, bold, white)
- Subtitle paragraph (white)
- Primary CTA: solid green button "Contact us"
- Secondary CTA: outlined white button "Read more"
- Circular play button overlay (positioned on image)

### Trust section
- Green #589167 background
- 3 equal columns, each with:
  - Line icon (lock, users, user) in white or green
  - Heading: "100% Confidential", "Qualified Team", "Individual Approach"
  - Description paragraph (white text)

### How It Works
- White background
- Small label "SERVICES" (green text, uppercase, small)
- Heading "How It Works" (dark, centered)
- 3 steps in a row:
  - Number circle (01, 02, 03)
  - Icon
  - Heading: "Make Schedule", "Start Discussion", "Enjoy Plan"
  - Description paragraph

### About section
- White background
- Heading: "Best Counseling Funding Network Worldwide."
- 2 paragraphs of descriptive text

### Services tabs
- White background
- Heading: "We Can Help You With This Situation"
- Left side: vertical tab list
  - Relation Problem, Couples Counseling, Depression Treatment, Family Problem, Personal Problem
- Right side: content panel
  - Heading + description + bullet list per tab
- Active tab: highlighted (green left border or background)

### Testimonials
- Background image with green #589167 overlay (opacity ~0.5)
- Label: "Testimonial" (small, uppercase)
- Heading: "Happy Clients" (white, centered)
- Carousel of testimonial cards:
  - Quote text (white)
  - Client name (white, bold)
  - Avatar placeholder (picsum.photos/seed/zenwell-client-N/80/80)

### Pricing
- Light gray #f7f7f7 background
- Heading: "Affordable Packages" (centered)
- 3 pricing cards:
  - $49 Individual Counseling
  - $79 Couples Therapy
  - $109 Family Therapy
- Each card:
  - Price (large, bold)
  - Feature list: Individual Counseling, Couples Therapy, Family Therapy, Counseling for Children, Behavioral Management
  - "Get Started" button (outlined or solid)

### Contact form
- Background image (use picsum.photos/seed/zenwell-contact/1920/800)
- Green #589167 overlay (opacity ~0.5)
- Heading: "Send a Message & Get in touch!" (white)
- Form fields: name, email, subject, message (textarea)
- Submit button
- Validate required fields with zod + react-hook-form

### Blog
- White background
- Heading: "Recent Blog" (centered)
- 3 cards in a row:
  - Image (picsum.photos/seed/zenwell-blog-N/400/250)
  - Date + category tag
  - Heading
  - Excerpt paragraph
  - "Read more" link

### Footer
- Dark background
- Column 1: Brand "ZenWell" + description paragraph
- Column 2: "Explore" links (About, Services, Cases, Contact)
- Column 3: "Legal" links (Terms, Privacy)
- Column 4: "Company" links (Careers, Team, Blog)
- "Have a Questions?" section with address, phone, email
- Copyright bar: "© 2024 All rights reserved | Made with Component Dock"

## Placeholder images

Use picsum.photos with deterministic seeds:
- Hero: https://picsum.photos/seed/zenwell-hero/1920/1080
- About: https://picsum.photos/seed/zenwell-about/600/400
- Contact bg: https://picsum.photos/seed/zenwell-contact/1920/800
- Blog 1: https://picsum.photos/seed/zenwell-blog1/400/250
- Blog 2: https://picsum.photos/seed/zenwell-blog2/400/250
- Blog 3: https://picsum.photos/seed/zenwell-blog3/400/250
- Clients: https://picsum.photos/seed/zenwell-client-1/80/80 (and -2, -3)

## Icons

Use lucide-react:
- Lock (Confidential), Users (Team), User (Approach)
- Phone, Mail, MessageCircle
- Calendar (Schedule), MessageSquare (Discussion), CheckCircle (Enjoy)
- ChevronRight, ChevronLeft (carousel)
- Menu (hamburger)
- Facebook, Twitter, Instagram (social)
