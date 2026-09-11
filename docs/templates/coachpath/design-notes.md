# CoachPath — Design Notes

Source: ColorLib Coaching
Preview: https://preview.colorlib.com/theme/coaching/

## Section Order (1:1 fidelity)

```
Navbar (sticky)
Hero (typed-text + amber CTA)
Hero Image Slider (overlaps hero, -20% margin-top)
About (2-col: text left, icon cards right)
Training (light bg, 3-card carousel)
Testimonials (carousel, quotes + avatars)
Services (navy bg, white card carousel)
Blog (2-col grid, 4 entries)
Contact (info row + form, light bg)
Footer (navy bg, 3-col: about + links + social/newsletter)
```

## Design Tokens Summary

- Primary brand: #373a6d (navy indigo)
- CTA / Warning: #ffc107 (amber)
- Primary button: #007bff (Bootstrap primary blue)
- Font: Quicksand (400, 500, 700)
- Body bg: white
- Alt section bg: #f8f9fa / #eff1f3 (light gray)
- Headings: black
- Cards: white on navy

## Fidelity Notes per Section

### Navbar
- Logo text: "CoachPath." — "CoachPath" in black, "." in primary (#373a6d)
- Sticky: position fixed, top 0, z-index high
- Mobile: hamburger icon (menu), slide-in from right
- Nav items: smooth-scroll via scrollIntoView

### Hero
- Background: solid #373a6d (no image)
- Heading: large (3-4rem), white, "I'm Professional" + typed animation
- Subtitle: white, smaller
- CTA: btn-warning class → bg #ffc107, white text, px-5 py-3, rounded-sm
- Typed animation: cycle through words like "Coach", "Trainer", "Mentor"
- Use a simple interval-based typewriter (no library needed)

### Hero Image Slider
- Two images, auto-rotating (3-5s interval)
- Negative margin-top: -20% to overlap hero
- Full-width, fluid images
- Placeholder: picsum.photos/seed/coachpath-hero-1/1200/600

### About
- Left column (col-md-5): heading "Welcome To My Website" + 3 lorem paragraphs
- Right column (col-md-6): 2 cards in 2-col grid
  - Card 1: DollarSign icon, "Means of Living", blurb
  - Card 2: Users icon, "Transform Lives", blurb
- Icons: lucide-react (DollarSign, Users or similar)
- Icon color: text-primary → #373a6d

### Training
- bg: #f8f9fa (light gray)
- Heading: "Life Coach Training" centered
- 3 cards, each with: image (rounded), h3 title, paragraph
  - "Life Coach Training"
  - "Release Your Potential"
  - "Transforming Lives"
- Implement as CSS grid (3-col) — no carousel dependency
- Images: picsum.photos/seed/coachpath-train-N/400/300

### Testimonials
- White background
- Heading: "Happy Customers" centered
- 2-3 testimonial blocks, each with:
  - Blockquote (italic, larger text)
  - Circular avatar (rounded-full, w-16 h-16)
  - Name below avatar
- Implement as flex row or grid — carousel optional

### Services
- Background: #373a6d (brand navy)
- Heading: "Our Services" in white, centered
- 3+ white service cards in a grid
  - Each: icon (lucide-react), h3 title, paragraph
  - Cards: "Online Coaching", "Release Your Potential", "Transforming Lives"
- Cards have white bg, padding, rounded corners

### Blog
- White background
- Heading: "Our Blog" centered + intro paragraph
- 2-column grid, 4 entries
- Each entry: flex row with image thumbnail (left, rounded) + content (right)
  - Title: h3 with link
  - Date: small text
  - Excerpt: paragraph
  - "Read More.." link
- Images: picsum.photos/seed/coachpath-blog-N/300/200

### Contact
- bg: #f8f9fa (light gray)
- Heading: "Contact Me" centered
- Row of 3 info blocks: Address, Phone, Email
  - Labels in primary (#373a6d), bold
  - Values in normal text
- Form: first-name, email, message textarea, "Send Message" button
  - Button: primary bg, white text
  - Basic HTML5 validation (required attributes)

### Footer
- Background: #373a6d (brand navy)
- 3 columns:
  1. "About CoachPath" — short blurb
  2. "Quick Links" — list linking to sections
  3. "Follow Us" — social icons (Facebook, Twitter, Instagram, LinkedIn) + "Subscribe Newsletter" form
- Copyright line at bottom with ComponentDock link
- Social icons: lucide-react (Facebook, Twitter, Instagram, Linkedin)
- Newsletter: email input (bg-transparent, border-secondary) + "Send" button

## Component Architecture

```
src/
  main.tsx          — entry
  App.tsx           — composes all sections
  index.css         — Tailwind entry + theme tokens
  components/
    Navbar.tsx
    Hero.tsx
    HeroSlider.tsx
    About.tsx
    Training.tsx
    Testimonials.tsx
    Services.tsx
    Blog.tsx
    Contact.tsx
    Footer.tsx
  test/
    setup.ts
```

## Placeholder Assets

All images use picsum.photos with deterministic seeds:
- Hero slider: `https://picsum.photos/seed/coachpath-hero-1/1200/600`, `...hero-2/1200/600`
- Training cards: `https://picsum.photos/seed/coachpath-train-1/400/300` (3 variants)
- Blog thumbnails: `https://picsum.photos/seed/coachpath-blog-1/300/200` (4 variants)
- Testimonial avatars: `https://picsum.photos/seed/coachpath-person-1/100/100` (3 variants)
