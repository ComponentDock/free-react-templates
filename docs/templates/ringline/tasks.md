# Ringline — Implementation Tasks & Design Notes

Source: ColorLib Callcenter (https://colorlib.com/wp/template/callcenter/)
Preview: https://preview.colorlib.com/theme/callcenter/
New name: **Ringline** (`apps/ringline`)

## Design notes

### Overall aesthetic
- Modern, clean, warmly professional call center / customer support site
- White background base with soft #f9f9ff light-blue sections
- Periwinkle blue (#8490ff) as primary brand color throughout
- Poppins font family for all text
- Rounded pill buttons (border-radius: 20px) for primary CTAs
- Blue watercolor brush-stroke decorative graphic in hero + about section

### Section-by-section fidelity notes

#### 1. Navbar
- White bg, fixed/sticky at top
- Logo left (text "Ringline" with a small blue icon)
- Nav links right: Home, Feature, We Offer, About, Contact
- Active link highlighted in blue (#8490ff)
- Use lucide-react icons for logo

#### 2. Banner / Hero
- Split layout: left image area, right text
- Blue watercolor brush-stroke overlay effect (use CSS gradient/blending or a decorative SVG)
- Subtitle uppercase: "Discover the Colorful World"
- H1: "Efficiency Booster"
- Body copy (paraphrase from original)
- CTA: "Discover Now" — blue (#8490ff) bg, white text, pill shape (rounded-full/20px radius)
- Placeholder image: `https://picsum.photos/seed/ringline-hero/800/600`

#### 3. Features (3-column)
- #f9f9ff background
- 3 cards: icon + h4 title + description
- Titles: "Online Support", "24/7 Round the Clock", "Handling All Issues"
- Icons: Headphones, Clock, Wrench (lucide-react)
- Cards are equal width in a flex/grid row

#### 4. Testimonials (Carousel)
- White background section
- Carousel of testimonial items
- Each: avatar photo (picsum), h4 name, body text, star rating (5 stars visual)
- Navigation dots at bottom
- Use a simple state-based carousel (no external lib)

#### 5. Services (3×2 grid)
- #f9f9ff background
- Heading: "Our Offered Services"
- 6 service cards in 3-column, 2-row grid
- Titles: "Content Synchronization", "Strategy & Research", "Optimization", "Market Analysis", "Finance & Consultancy", "Technical Skills"
- Each: icon (lucide), h4, description text

#### 6. Stats / Counters
- Dark contrasting background (#222 or dark overlay)
- 4 counters in a row: "Happy Clients" (2536), "Projects" (6784), "Cups Coffee" (1059), "Active Clients" (2239)
- Numbers animate on scroll into view (use IntersectionObserver + requestAnimationFrame)
- White text on dark bg

#### 7. Why Choose Us
- #f9f9ff background
- Heading: "Some Awesomeness that should share"
- Left side: testimonial carousel slides (avatar, name, text)
- Right side: skill bars with percentages
  - "Expert Technicians" 90% — #8490ff
  - "Professional Service" 80% — #4cd3e3
  - "Great Support" 70% — #38a4ff
  - "Technical Skills" 85% — #f4e700
  - "Highly Recommended" 95% — #f44a40
  - "Positive Reviews" 60% — #8490ff

#### 8. About / CTA Split
- #f9f9ff background
- Two-column layout
- Left: "Responsible Customer Support" heading + descriptive text
- Right: "We Believe that Interior beautifies the Total Architecture" heading + decorative blue brush-stroke visual
- Blue decorative element (CSS gradient or SVG, not an image asset)

#### 9. Contact
- White background
- Heading: "If you need, Just drop us a line"
- Two-column: form left, map placeholder right
- Form fields: Name, Email, Subject, Message (textarea), Submit button
- Validate required fields (zod + react-hook-form or simple state)
- Map placeholder: styled div with a pin icon

#### 10. Footer
- Dark background (#222)
- 4 columns: About Us (text), Contact Us (address/phone/email), Newsletter (email input + subscribe), Social icons
- Footer bottom strip (#111): copyright text + social icon links
- Must include link to https://www.componentdock.com/ labeled "Component Dock"

## Implementation order
1. Scaffold app from simplest existing template
2. Navbar + Hero
3. Features
4. Testimonials
5. Services
6. Stats/Counters (with animation)
7. Why Choose Us (with skill bars)
8. About/CTA Split
9. Contact (with form validation)
10. Footer
11. Tests for each component
12. Verify: 100% coverage, build, typecheck, lint
