# Lenscraft — Implementation Todo & Design Notes

Source: ColorLib Proshoot — https://preview.colorlib.com/theme/proshoot/

## Section order (bottom-up from spec)

1. Header/Navbar
2. Hero Banner
3. About
4. Services
5. Portfolio (Work)
6. Pricing
7. Blog
8. Footer

## Component breakdown

### Navbar.tsx
- Fixed header, white bg, logo left, nav links right
- Dropdown menus for "Pages" and "Blog"
- Sticky with box-shadow on scroll (use IntersectionObserver or scroll event)
- Mobile: hamburger menu toggle

### Hero.tsx (home-banner-area)
- Fullscreen height (788px desktop), light gray #f7f7f7 bg
- Two columns: left (col-4) text + right (col-7) image
- H1: "Images matter" — Oswald 600, 120px, uppercase, select letters colored #f81c1c
- Paragraph text below heading
- Primary-btn "Explore More" — transparent, red border, hover fill
- Social icons strip on left edge (vertical)

### About.tsx
- Two columns: image left (col-5), text right (col-5 offset-1)
- Heading: "Lets Introduce About Myself"
- Two paragraphs, "Read More" primary-btn

### Services.tsx
- Section title: "Our Services" / "What We Offer" (h3 subtitle + h2 with span)
- 3-column grid of service cards
- Each: icon (lucide-react) + h4 + description
- Services: Fashion Photography, Nature Photography, Event Coverage

### Portfolio.tsx (work-area)
- Section title: "Our Portfolio" / "Check Our Work"
- Masonry-like grid: 1 large item (col-8) + smaller items (col-4)
- Each card: image, hover overlay (white semi-transparent) with title + category
- Border-radius: 5px on cards

### Pricing.tsx
- Section title: "Pricing Plan" / "Choose Your Package"
- 3 pricing cards in a row
- Each: plan title, criteria text, large price (Roboto 700 60px), feature list, "Book Now" CTA
- Feature list has check icons (green implied) and close/cross icons (red #f81c1c)
- Feature list bg: #f7f7f7

### Blog.tsx
- Section title: "Our Blog" / "Latest Good Story"
- Layout: 1 large post (col-6, full-width image on top) + 2 small posts (col-6 each, image left + text right)
- Each: image, title, meta (author icon + name, calendar icon + date), excerpt paragraph

### Footer.tsx
- Dark navy bg #04091e
- 3 columns: About Us (text), Newsletter (email form), Follow Us (social icons)
- Copyright bar: "All rights reserved | Made with ❤ by Component Dock" linking to https://www.componentdock.com/

## Key design notes

- **Primary button pattern**: Each letter wrapped in <span>, hover fills red. In React, simplify to a normal button with CSS transitions — no need for per-letter spans.
- **Font loading**: Load Oswald (300,500,600) + Roboto (400,700) via Google Fonts link in index.html.
- **Icons**: Use lucide-react for social icons, service icons, check/close icons, and meta icons. Map: Shirt → Fashion, Droplets → Nature, FileText → Event, User → Author, Calendar → Date, Check/X for pricing.
- **Images**: Use picsum.photos with deterministic seeds per section.
- **Color tokens in Tailwind**: Define `--color-brand: #f81c1c` in @theme, use `text-brand`, `bg-brand`, `border-brand` etc.

## Fidelity notes

- Match 8-section structure 1:1
- Keep the same heading hierarchy (h3 subtitle + h2 with span accent)
- Banner h1 letter-accent effect: color specific chars red — can simplify to a single styled word
- Pricing cards: keep the feature list with check/X icons pattern
- Blog layout: mix of large featured + smaller side-by-side posts
- Footer: 3-column layout with newsletter form
- Social icons: vertical strip on banner left edge (unique design element)
