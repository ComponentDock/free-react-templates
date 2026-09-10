# Paddl — Tasks & Design Notes

Recreation of ColorLib "Auction" → new name `paddl`
Preview: https://preview.colorlib.com/theme/auction/

## Section order (top to bottom)

1. **Navbar** — fixed/sticky, logo left, nav links center-right, Sign In/Register right
2. **Hero** — full-viewport background image with dark overlay, centered white heading + subtitle + orange CTA button
3. **Current Auctions** — 4-column grid of 8 product cards (price badge, image, title, category, bid count, Submit a Bid button)
4. **How It Works** — 4-step row with circular icons (Register, Buy or Bid, Submit a bid, Win)
5. **About Us** — split layout: image left, 3 feature items right (Fast Support, Happy Customers, 24/7 Support)
6. **Testimonials** — dark overlay background-image section, carousel of client cards with photo + quote
7. **CTA** — centered heading + orange Register button
8. **Footer** — light gray, 4 columns (logo+desc, Solutions, Services, Contact), copyright with Component Dock link

## Fidelity notes

### Navbar

- White/transparent background, logo on left, horizontal nav links
- Mobile: hamburger menu (`.site-mobile-menu`)
- "Sign In / Register" text link on right
- Sticky on scroll

### Hero (.intro-section)

- Full viewport height (`100vh`, min 500px), background-image cover
- Dark overlay `rgba(0, 0, 0, 0.2)` via `:before` pseudo-element
- H1: 60px bold white, subtitle 20px rgba white
- CTA: `.btn.btn-primary` — orange `#f37121` background, white text, no border-radius
- Implement: use `picsum.photos/seed/paddl-hero/1920/1080` for background

### Current Auctions

- Section padding: 5em 0
- Caption label "Auctions" (small, uppercase, muted)
- H2: "Current **Auctions**" with bold word
- Grid: Bootstrap-like 4-col (col-lg-3, col-md-4, col-6)
- Each `.item` card:
  - Image with `.img-fluid`
  - Price badge: `strong.price` — absolute positioned, circular, orange bg, white text, font-size ~18px
  - Card body: h3 link (product name), flex row (category span + bid count span), `.btn.btn-bid` button
- 8 sample products: shoes, glasses, jacket, laptop, iPad, sneakers, iMac, iWatch
- Use `picsum.photos/seed/paddl-item-<1..8>/400/300` for product images

### How It Works

- Caption "How?", H2 "How **It Works**"
- 4 columns, each `.step`:
  - `.wrap-icon` with icomoon class (user, money, glass, trophy) — replace with lucide-react icons
  - H3 title, paragraph description
  - Last step has `.last` class (no border-right)
  - Top border: `2px solid #f37121`, circular icon `border-radius: 50%`, white bg
- Icons map: user → User, money → DollarSign, glass → Gavel, trophy → Trophy

### About Us

- Two-column: image left (col-lg-7), features right (col-lg-5)
- Caption "About?", H2 "About **Us**"
- 3 `.d-flex.feature-icon` items:
  - Icon (PaperPlane, Smile, Headphones) in `.wrap-icon` with `#f37121` color
  - H3 title + description paragraph
- Use `picsum.photos/seed/paddl-about/800/600` for left image

### Testimonials

- `.section-bg.style-1` — full-width background-image with `rgba(0, 0, 0, 0.3)` overlay
- Caption "Testimonials" (white), H2 "Happy **Clients**" (white)
- Owl carousel → use React carousel (e.g. embla or custom)
- Each `.ftco-testimonial-1`:
  - `.ftco-testimonial-vcard`: flex with person photo (rounded) + name + role
  - Quote paragraph
- 6 testimonial cards, all named "Allison Holmes, Designer" (placeholder)
- Use `picsum.photos/seed/paddl-person-<1..4>/80/80` for avatars

### CTA

- Simple section with centered content
- H2: "Create an account and start Buy, Bid or Sell Now!"
- Orange `.btn.btn-primary` "Register" button

### Footer

- Background: `#f8f9fa`
- 4 columns: logo+desc, Solutions list, Services list, Contact list
- Links: underlined, color `#777`
- Copyright with Component Dock link (replace Colorlib attribution)
- Replace "Colorlib" → "Component Dock", URL → https://www.componentdock.com/

## Design tokens summary (for src/index.css @theme)

```
--color-brand: #f37121;
--color-brand-hover: #d95f1a;
--font-family-heading: "Mulish", sans-serif;
--color-text-dark: #000000;
--color-text-body: #212529;
--color-bg-light: #f8f9fa;
--color-bg-gray: #f4f5f9;
```

## Component plan

| Component    | File                            | Notes                                  |
| ------------ | ------------------------------- | -------------------------------------- |
| App.tsx      | src/App.tsx                     | Compose all sections                   |
| Navbar       | src/components/Navbar.tsx       | Fixed, sticky, mobile hamburger toggle |
| Hero         | src/components/Hero.tsx         | Full-viewport, bg image + overlay      |
| AuctionGrid  | src/components/AuctionGrid.tsx  | 4-col grid, 8 product cards            |
| AuctionCard  | src/components/AuctionCard.tsx  | Individual card with badge + button    |
| HowItWorks   | src/components/HowItWorks.tsx   | 4-step icons row                       |
| AboutUs      | src/components/AboutUs.tsx      | Split layout, 3 features               |
| Testimonials | src/components/Testimonials.tsx | Carousel with dark overlay             |
| CtaBanner    | src/components/CtaBanner.tsx    | Centered heading + button              |
| Footer       | src/components/Footer.tsx       | 4-col layout, copyright                |

## Dependencies

- No new dependencies expected (reuse packages/ui components where possible)
- Icons: lucide-react (User, DollarSign, Gavel, Trophy, PaperPlane, Smile, Headphones)
- Carousel: lightweight custom or embla-carousel (avoid heavy deps)

## Risks

- Carousel component: the original uses Owl Carousel with JS — implement with lightweight React alternative
- Responsive grid: match Bootstrap breakpoints (768px, 992px)
- Price badge positioning: absolute within relative card container
