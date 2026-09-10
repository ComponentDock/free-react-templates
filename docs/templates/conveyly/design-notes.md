# Conveyly — Implementation Notes

## Source
- **ColorLib Template**: Carries
- **URL**: https://colorlib.com/wp/template/carries/
- **Preview**: https://preview.colorlib.com/theme/carries/
- **Category**: Business / Logistics & Transportation

## Section Order (from live DOM)

1. Navbar (sticky, dark transparent, logo + nav + icons)
2. Hero Slider (full-width bg image, dark overlay, centered text, 2 CTA buttons)
3. Freight Service Cards (3 cards: Ocean/Air/Street Freight, gray-bg)
4. About Section (split: quote form left, about + stats right, gray-bg)
5. Service Section (title + "Why Choose Us" checklist + 4 hexagon-icon service items)
6. Promo Features (4-item icon grid: Location, News, Support, Delivery)
7. Parallax CTA Banner (dark parallax bg, headline, button)
8. Testimonials (photo carousel, quote, name/role, prev/next nav)
9. Footer (newsletter, 4-column content, copyright, social icons)

## Fidelity Notes

### Navbar
- Dark transparent header
- Logo with yellow icon on left
- Nav links: Home, About, Service, Other Pages, Blog, Contact
- Right side: user icon, search icon, cart icon, language selector (ENG)
- Becomes hamburger on mobile
- Sticky on scroll with background fade-in

### Hero Slider
- Full-width with parallax background images
- Dark blue-gray overlay for text readability
- Two slides (same content, different bg images)
- Centered: bold uppercase h1 + subtitle paragraph
- Two CTA buttons: white border + transparent bg → amber on hover
- Left/right slider arrows

### Freight Service Cards
- Gray background section (`#f4f7f9`)
- 3 equal-width cards (col-md-4)
- Each card: image on top, centered content below
  - Circular icon (ship, plane, truck) with yellow accent
  - Title (uppercase, bold)
  - Short description
  - "Read More" link
- Fade-in-up animation on scroll (wow.js)

### About Section
- Same gray background
- Split layout: col-4 form + col-7 content (offset-1)
- Quote form: 7 fields (Name, Email, Phone, Type, Quantity, Destination, Message textarea)
- Form button: `#5d6b82` bg, white text, uppercase, 5px radius
- About content: h2 ("We have 25 years experience"), paragraph, "read more" link
- Stats row: 3 items with circular icons (120, 100, 30) + labels

### Service Section
- White/light background
- Top: centered title ("Our Service") + subtitle
- Middle split: left = text content + "Learn More"; right = "Why Choose Us" with 4 checkmark items
- Bottom: 4 service items in a list with hexagonal icon containers
  - Ware House (box icon), Road Freight (truck), Sea Freight (ship), Air Freight (plane)
  - Each: icon + title + description + "read more"

### Promo Features
- 2×2 grid of feature items
- Each: circular icon (amber bg) + title + short description
- Items: Our Location (anchor), Latest News (newspaper), 24/7 Support (umbrella), Fast Delivery (bicycle)

### Parallax CTA Banner
- Full-width with parallax background (dark image)
- Centered headline: "we provide international freight & logistics service worldwide"
- "Get a quote" button (white border → amber on hover)

### Testimonials
- Centered title: "what client's say"
- Client photo carousel (circular thumbnails, centered)
- Prev/next arrow navigation
- Quote text in blockquote style
- Client name (bold) + role/company below

### Footer
- Dark background (`#212121`)
- Top bar: "Weekly Newsletter" + email subscription form
- Divider line
- 4 columns:
  - About Us: description, phone, email, address
  - Latest Tweets: 2 tweet items with icon + text + timestamp
  - Customer Service: link list (Support Forums, Communication, FAQS, etc.)
  - Instagram: 2×3 photo grid
- Copyright bar: copyright text + social icon links (circle, gray → amber on hover)

## Component Map (suggested)

```
src/
  App.tsx              — Compose all sections
  components/
    Navbar.tsx         — Sticky nav with links + icons
    HeroSlider.tsx     — Full-width slider with bg images + CTA
    FreightCards.tsx   — 3 service cards with images + icons
    AboutSection.tsx   — Split: QuoteForm + AboutContent + Stats
    QuoteForm.tsx      — 7-field quote request form
    ServiceSection.tsx — Title + WhyChooseUs + HexagonServiceList
    PromoFeatures.tsx  — 4-item icon grid
    ParallaxCTA.tsx    — Full-width parallax banner
    Testimonials.tsx   — Photo carousel + quote + navigation
    Footer.tsx         — Newsletter + 4 columns + copyright + social
  index.css            — Tailwind entry + @theme tokens
```

## Design Token Usage in Tailwind

```css
@theme {
  --color-brand-amber: #f39c12;
  --color-heading-navy: #3c4a62;
  --color-body-gray: #687284;
  --color-link-blue: #5d6b82;
  --color-section-bg: #f4f7f9;
  --color-footer-dark: #212121;
}
```

## Key Images (placeholder seeds)

- Hero slide 1: `picsum.photos/seed/conveyly-hero-1/1920/1080`
- Hero slide 2: `picsum.photos/seed/conveyly-hero-2/1920/1080`
- Ocean freight card: `picsum.photos/seed/conveyly-ocean/600/400`
- Air freight card: `picsum.photos/seed/conveyly-air/600/400`
- Street freight card: `picsum.photos/seed/conveyly-street/600/400`
- Service bg: `picsum.photos/seed/conveyly-service/1200/600`
- Parallax bg: `picsum.photos/seed/conveyly-parallax/1920/800`
- Testimonial avatars: `picsum.photos/seed/conveyly-client-<n>/200/200`
- Instagram grid: `picsum.photos/seed/conveyly-insta-<n>/200/200`
