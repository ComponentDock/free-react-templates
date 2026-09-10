# Shipwise — Design Notes

Source: ColorLib "Carries" (https://colorlib.com/wp/template/carries/)
Preview: https://preview.colorlib.com/theme/carries/

---

## Structure order (section-by-section)

### 1. Navbar
- Top bar with search icon, language selector, shopping bag icon
- Main nav: stellar nav plugin style (multi-level dropdowns)
- Sticky on scroll with dark bg (#3c4a62 or similar)

### 2. Hero Slider (2 slides)
- Full-viewport height with parallax bg images
- Dark overlay (#3c4147)
- Centered text: "WE MAKE STRONGEST SERVICE ABOVE THE WORLD"
- Two CTA buttons: bordered white, uppercase, letter-spacing 2px
- Fallback to single hero with bg image

### 3. Blog Cards (gray-bg #f7f9fc)
- 3-column grid of blog/news cards
- Each: image thumbnail + title + meta (date, category)
- FadeInUp animation on scroll

### 4. About + Quote Form (gray-bg #f7f9fc)
- Two-column layout: ~8 col about, ~4 col quote form
- About: heading "Get A Quote" text, counter stats (25 years experience)
- Quote form: Name, Email+Phone (side by side), Type+Quantity (side by side), Destination, Message textarea, Submit button (#5d6b82 bg)
- Border: 1px solid #ddd on inputs

### 5. Service Area
- Title: "Our Service" centered
- 4 hexagon icon cards in a row:
  - Warehouse, Road Freight, Sea Freight, Air Freight
- Each: hexagon icon + title + description
- Hexagon shape via CSS clip-path or SVG

### 6. Service Catalog / Why Choose Us
- "Why Choose Us?" heading
- Checklist items with fa-check icons
- Parallax background (stellar background ratio)
- 4 promo icon cards below: Our Location, Latest News, 24/7 Support, Fast Delivery

### 7. Testimonials
- Title: "what client's say"
- Client photo carousel (dots navigation)
- Quote text + name + title
- Centered layout

### 8. Footer (dark-bg #3c4147)
- Subscribe form (email + subscribe button, amber #f39c12)
- 4-column widget area:
  - About Us (text + contact info)
  - Latest Tweets (list)
  - Customer Service (links)
  - Instagram Feed (image grid)
- Footer bottom: copyright + social icons
- MUST link to https://www.componentdock.com/

---

## Implementation notes

- Use `lucide-react` icons for service/promo icons (Anchor → anchor, Newspaper → newspaper, Umbrella → umbrella, Bicycle → bicycle or similar delivery icon)
- Hexagon shape: CSS `clip-path: polygon(...)` or SVG mask
- Parallax: CSS `background-attachment: fixed` (simpler than stellar JS)
- Hero slider: simple fade/slide between 2 slides with useState
- Counter stats: simple animated count-up or static numbers
- Quote form: controlled inputs, no backend needed
- Newsletter subscribe: styled input + button, no backend needed

## Placeholder images

- Hero slide 1: `https://picsum.photos/seed/shipwise-hero1/1920/1080`
- Hero slide 2: `https://picsum.photos/seed/shipwise-hero2/1920/1080`
- Blog card 1: `https://picsum.photos/seed/shipwise-blog1/400/300`
- Blog card 2: `https://picsum.photos/seed/shipwise-blog2/400/300`
- Blog card 3: `https://picsum.photos/seed/shipwise-blog3/400/300`
- About section: `https://picsum.photos/seed/shipwise-about/600/400`
- Service catalog bg: `https://picsum.photos/seed/shipwise-service/1920/600`
- Testimonial faces: `https://picsum.photos/seed/shipwise-client1/100/100`, etc.

## Color palette (Tailwind theme)

```
--color-brand: #f39c12        (amber/orange accent)
--color-brand-dark: #e08e0b  (hover state)
--color-secondary: #0083ff   (blue)
--color-heading: #3c4a62     (dark slate)
--color-body: #5d6b82        (medium slate)
--color-muted: #687284       (light slate)
--color-surface: #f7f9fc     (gray bg)
--color-surface-deep: #eff1ff (deep gray)
--color-dark: #3c4147        (footer/overlay)
--color-input-border: #ddd
```

## Typography

- Headings: Roboto, 700 weight
- Body: Roboto, 400 weight
- Uppercase + letter-spacing for CTAs and nav links
