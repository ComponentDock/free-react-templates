# Edifico — Implementation Tasks & Design Notes

Recreation of ColorLib Constructo (construction company landing page).

Source: https://colorlib.com/wp/template/constructo/
Preview: https://preview.colorlib.com/theme/constructo/

## Section Order (replicate exactly)

1. Header Top Bar
2. Address Bar (logo + contact info)
3. Main Navbar (sticky)
4. Hero Carousel
5. Features (3-column)
6. About (split layout)
7. Services Carousel
8. Gallery (filterable grid)
9. Why Choose Us (dark bg)
10. Testimonials Carousel
11. Contact CTA
12. Footer (multi-column + subscribe)

## Design Notes

### Header Top Bar
- Dark navy bg (#040E27)
- Left: "Opening Hour: (10.00-07.00)" white text, 14px, weight 500
- Right: "Get a Quote" button — orange (#F0542C) bg, white text, square corners (border-radius 0), padding 14px 50px
- Hidden on mobile (d-none d-lg-block)

### Address Bar
- Logo on left (use text-based logo "Edifico" with a construction icon)
- Right side: two info blocks with icons
  - Address: icon + "Address" heading + "20/D, Kings road, Green lane"
  - Call Us: icon + "Call Us" heading + "+10 673 567 367"
- Hidden on mobile, logo shown separately in mobile navbar

### Main Navbar
- Sticky, white bg, border-bottom
- Links: Home, About, Services, Pages (dropdown), Blog (dropdown), Contact
- Pages dropdown: project, elements, project details
- Blog dropdown: blog, single-blog
- Right side: search icon that opens a modal search overlay
- Mobile: hamburger menu with slicknav

### Hero Carousel
- Full-width, 3 slides
- Background images with dark gradient overlay: `linear-gradient(to right, rgba(0,29,56,0.7), rgba(26,13,1,0.6))`
- Centered text: h3 "We Build Your Home Secure and Safe" + subtext + "Our Services" CTA button
- CTA button: orange (#F0542C) bg, white text, square corners
- Placeholder images: `https://picsum.photos/seed/edifico-hero-1/1920/1080` etc.

### Features
- 3-column grid, white bg
- Each card: centered orange icon + h3 heading + paragraph
- Icons: lucide-react equivalents (PenTool for design, Users for people, Wrench for tools)
- Items: Creative Plan & Design, Talented Peoples, Modern Tools

### About
- Bordered container (border: 1px solid #eee)
- Split: left = image with decorative dot pattern overlay, right = content
- Right side: "We Serve all of your Construction Services" (h3, with line break)
- Two paragraphs + "About Us" button (orange)
- Placeholder image: `https://picsum.photos/seed/edifico-about/600/600`

### Services Carousel
- "Our Services" section title centered
- Carousel of service cards
- Each card: service image (top) + title (h3 link) + description + "More →" link
- Services: Maintenance & Repair, Building Construction, Bridge & Road Construction
- Pattern image decoration on the right
- Placeholder images: `https://picsum.photos/seed/edifico-service-1/400/300`

### Gallery
- Heading: "Take a look Some of our awesome projects"
- Filter buttons: All, Architecture, Buildings, Bridges (data-filter based)
- 8 project images in a 4-column grid
- Each image: hover overlay with title + arrow icon
- Use React state for filter functionality (not isotope)
- "More Projects" button below
- Placeholder images: `https://picsum.photos/seed/edifico-gallery-1/400/400`

### Why Choose Us
- Right-aligned content on dark/gradient bg
- "Why Choose Us?" heading
- Quote text + description
- Video play button (popup)

### Testimonials
- "Testimonials" section title centered
- Carousel of testimonial cards
- Each: circular avatar (68px, border-radius 50%) + name (h4) + "Client" span + quote text (20px, weight 400)
- Placeholder avatars: `https://picsum.photos/seed/edifico-person-1/68/68`

### Contact CTA
- Dark overlay bg
- "Are you looking for Construction and Industrial Experts?" heading
- "Contact Us" orange button

### Footer
- Dark bg
- Top section: logo + "Download Brochure" link (bordered container)
- 4-column grid:
  - About: address, phone, email, social icons (Facebook, Twitter, Instagram, Pinterest, YouTube)
  - Popular Searches: apartment for rent, office for rent, apartment for sale, luxuries
  - Useful Links: About, Blog, Contact, Appointment
  - Subscribe: email input + button + description text
- Copyright line with "Made with Component Dock" link → https://www.componentdock.com/

## Component Structure

```
src/
  main.tsx
  App.tsx
  index.css
  components/
    HeaderTopBar.tsx
    AddressBar.tsx
    Navbar.tsx
    HeroCarousel.tsx
    Features.tsx
    About.tsx
    ServicesCarousel.tsx
    Gallery.tsx
    WhyChooseUs.tsx
    Testimonials.tsx
    ContactCTA.tsx
    Footer.tsx
  test/
    setup.ts
```

## Key Implementation Notes

- All icons from lucide-react (not Font Awesome, Themify, or Flaticon)
- All images use picsum.photos placeholders with deterministic seeds
- Google Fonts: Raleway (weights 300, 400, 500, 600, 700, 800) via `<link>` in index.html
- Brand color #F0542C goes in Tailwind @theme as primary
- Dark navy #040E27 as dark accent
- All buttons: square corners (border-radius: 0), not rounded
- Gallery filter: use React useState (no isotope library)
- Carousel: use React state-based carousel (no owl-carousel)
- Sections: 120px vertical padding on desktop, 50px on mobile
- Use cn() from packages/ui for conditional classes
- Test: one describe per component, scenario-style it blocks
- 100% coverage required
