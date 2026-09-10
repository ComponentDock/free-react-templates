# Cashflow — Implementation Tasks & Design Notes

Source: ColorLib "Book Keeping" (slug: bookkeeping)
Preview: https://preview.colorlib.com/theme/bookkeeping/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bookkeeping-free-template.jpg

## Section-by-section implementation order

### 1. index.html setup
- Add Google Fonts link for Muli (weights 300, 400, 700, 900)
- Add `<title>Cashflow — Bookkeeping Consulting</title>`
- Set `<meta name="description">` appropriate for bookkeeping

### 2. src/index.css — Theme tokens
- `@theme` block with brand color `--color-brand: #5577B4`
- `--color-brand-light`, `--color-surface: #f8f9fa`, `--color-surface-alt: #f4f5f9`
- Font family fallback stack with Muli

### 3. Navbar component
- White bg, sticky (`position: sticky; top: 0; z-index: 50`)
- Logo: lucide `DollarSign` icon + "Cashflow" text
- Nav links: Home, About, Services (dropdown), Blog, Contact
- Social icons: Facebook, Twitter, LinkedIn (lucide icons in circular blue bg)
- Mobile hamburger with slide-out menu

### 4. HeroCarousel component
- 2 slides with auto-rotation (use CSS animation or simple interval)
- Each slide: picsum background image with `bg-black/40` overlay
- Centered content: headline + subtitle + blue CTA button
- Carousel dots at bottom

### 5. AboutSection component
- Two-column layout: image left, content right
- "About Us" caption in small caps blue
- Heading with blue underline decoration (use `after` pseudo or border-bottom)
- Body text paragraph
- Two-column list with blue arrow bullet points (use lucide `ChevronRight`)

### 6. StatsCounters component
- 4-column grid on white bg
- Each: large bold number + small label below
- Numbers: 32,594 / 25 / 1,029 / 10,200

### 7. ServicesGrid component
- Light gray (`bg-surface`) background
- Centered heading "What We Do" with "Our Services" caption
- 6 cards in 3×2 grid (use CSS grid or Tailwind grid)
- Each card: circular blue icon wrapper (`bg-brand rounded-full`) with lucide icon
  - Growth Business: `BarChart3`
  - Lifetime Support: `LifeBuoy`
  - Advanced Accounting: `CircleSquare` or `Calculator`
  - Investment Bonds: `Wallet`
  - Investment Management: `Briefcase`
  - Money Calculations: `Calculator`
- Card content: title, description, "Learn More" button (px-4)

### 8. ParallaxCTA component
- Full-width section with bg image + dark overlay
- Centered white headline "We Are Here To Help Grow Your Business"
- Subtitle + blue "Get Started" button

### 9. Testimonials component
- Dark overlay on background photo
- Section heading "Happy Clients" with "Testimonials" caption
- Carousel of testimonial cards (3-4 testimonials)
- Each: circular person photo (use picsum), name + role, quote text

### 10. NewsSection component
- White bg, section heading "Latest News & Updates" with "News" caption
- 3-column card grid
- Each card: thumbnail image with date badge overlay (day + month)
  - Date badge: absolute positioned, dark bg, white text
- Title, author byline ("by Author"), excerpt paragraph

### 11. Newsletter component
- Full-width bg image + dark overlay
- Heading "Subscribe to us!" + subtitle text
- Inline form: email input (rounded, gray bg) + "Send" button (rounded, brand blue)

### 12. Footer component
- Dark background (near-black)
- 4-column grid:
  - Logo + description + "Learn More" link
  - "Solutions" heading + 5 links
  - "Services" heading + 5 links
  - "Contact" heading + 5 links
- Copyright bar: "Copyright © [year] All rights reserved | Made with ❤ by Component Dock"
- Link to `https://www.componentdock.com/`

## Design fidelity notes

- **Colors:** The primary blue `#5577B4` is the dominant accent. Used for all
  interactive elements, icon wrappers, link text, and button backgrounds.
- **Typography:** Muli is a geometric sans-serif — clean and modern. Use
  weight 400 for body, 700 for headings, 300 for light text.
- **Icon style:** Service icons use SVG (Bootstrap Icons in original). Use
  lucide-react equivalents. Circular blue wrapper with `bg-brand rounded-full`.
- **Section rhythm:** ~80-100px vertical padding between sections. Light gray
  (`#f8f9fa`) bg alternates between white sections.
- **Hero/parallax:** Background images with dark semi-transparent overlays.
  Use `bg-black/40` or `bg-black/60` for overlay.
- **Date badge on news cards:** Absolute positioned top-left of thumbnail,
  dark background, white text showing day and month.
- **Title underline:** Thin line below headings (`.title-with-line` in original).
  Implement as a bottom border or pseudo-element.
- **Dropdown:** Services nav item has a dropdown with 3 sub-links. Implement
  with hover/absolute positioning.
- **Footer heading decoration:** Footer headings have a span with underline
  decoration in original.
- **No carousel library:** Keep it simple with CSS transitions or a lightweight
  state-based approach. No need for Owl Carousel.
