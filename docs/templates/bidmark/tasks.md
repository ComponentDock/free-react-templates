# Bidmark (ColorLib Auction) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bidmark`. Recreation name: **Bidmark** (NEW name
> — the ColorLib source keeps its name "Auction").

## Source mapping

- **ColorLib item:** "Auction" (TEMPLATES.md line 898).
  The `wp/template/auction/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/auction/
- **Preview URL — REACHABLE (verified 2026-09-07):**
  **`https://preview.colorlib.com/theme/auction/`** (HTTP 200, 23,844 bytes,
  `<title>Auction — Website by Colorlib</title>`).
- **Preview CSS:** `css/style.css` (custom, ~29 KB) + `css/bootstrap.min.css`.
  Scripts: jQuery, Bootstrap, Owl Carousel, AOS, Fancybox, and many more.
  Fonts: Google Fonts Muli (300, 400, 700, 900). Icons: icomoon + Flaticon
  → **replace with lucide-react** (do NOT ship the icon fonts).

## Reference research (done — do not redo)

### Screenshot (`auction-free-template.jpg`, JPEG)

Downloaded from ColorLib CDN (200 OK, 62,558 bytes). Visual: clean auction
marketplace with a bold orange (#f37121) brand color. Hero image with
centered white text and Register button. Below: 4-column product grid with
orange circular price badges, a 4-step "How It Works" process, About section
with orange circle feature icons, testimonials carousel over a dark background
image, CTA section, and a light gray 4-column footer. The overall aesthetic
is modern marketplace with square buttons and strong orange accents.

### Design tokens (live stylesheet, verified 2026-09-07)

| Token             | Value                                    | Use                                                                    |
| ----------------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| Primary brand     | `#f37121`                                | Headings, captions, price badges, feature icons, loader accent         |
| Body text color   | `#999999`                                | Body text (gray)                                                       |
| Heading color     | `#f37121` (h1-h3, h5), `#000` (.text-black) | Headings default orange; `.text-black` override for section headings   |
| Caption color     | `#f37121`                                | Uppercase section captions (11px, letter-spacing 0.2rem, bold)         |
| Price badge bg    | `#f37121`                                | 90px circle over product images                                        |
| Price badge text  | `#fff`, 20px, bold                       | Price inside circle                                                    |
| Feature icon bg   | `#f37121`                                | 70px circle, white icon (40px)                                         |
| Button style      | `border-radius: 0` (square)              | All buttons                                                            |
| btn-bid bg        | `#f8f9fa`                                | "Submit a Bid" button (light gray)                                     |
| btn-bid text      | `#000`                                   | "Submit a Bid" button text                                             |
| Navbar bg         | transparent (absolute)                   | Overlay on hero                                                        |
| Footer bg         | `#f8f9fa`                                | Footer background                                                      |
| Section bg (testimonial) | Background image with dark overlay | Full-width image section                                          |
| Font family       | `"Muli", sans-serif`                     | Body + headings (Google Fonts Muli 300, 400, 700, 900)                 |
| Font size         | `15px`                                   | Body base                                                              |
| Font weight       | `300`                                    | Body                                                                   |
| Line height       | `1.7`                                    | Body                                                                   |
| Hero height       | `100vh`, min-height `500px`              | Intro section                                                          |

## Section structure (implementation order)

### 1. Navbar
- Absolute positioned, transparent bg, z-index 1999
- Logo image on left (use placeholder)
- Nav links: Home, Buy, Sell, Services (dropdown), Blog, About, Contact
- Sign In/Register link on right
- Hamburger toggle for mobile
- Mobile slide-in menu

### 2. Hero / Intro
- Full-width background image (`picsum.photos/seed/bidmark-hero/1920/1080`)
- 100vh height, min-height 500px
- Centered: h1 "The Best Place to Buy and Sell", subtitle, Register button
- AOS fade-up animation

### 3. Current Auctions (8 product cards)
- Caption "Auctions" (orange, uppercase, 11px, letter-spacing 0.2rem)
- Heading "Current Auctions" (black)
- 4-column grid (col-6 col-md-4 col-lg-3) of 8 items
- Each item:
  - Product image (`picsum.photos/seed/bidmark-product-{1-8}/400/300`)
  - Orange price badge (absolute, 90px circle, `#f37121`, white text)
  - Product title (h3, linked)
  - Category + bid count row (flex, space-between)
  - "Submit a Bid" button (square, light gray bg)
- Products: Pinky Shoes ($95), Eye Glass Eye Protector ($30), Black Leather Jacket ($199), MacBook 15-Inch ($1,999), iPad ($777), Shoe Sneakers ($78), iMac ($1,999), iWatch ($450)

### 4. How It Works (4 steps)
- Caption "How?", heading "How It Works"
- 4 columns (col-lg-3): Register, Buy or Bid, Submit a bid, Win
- Each step: icon in circle, h3 heading, paragraph
- Icons: user, money, glass, trophy → use lucide-react (User, DollarSign, Search, Trophy)
- CSS arrow connector between steps (::after pseudo-element with icomoon arrow → replace with ArrowRight)

### 5. About Us
- 2-column: image left (`picsum.photos/seed/bidmark-about/800/600`), features right
- Caption "About?", heading "About Us"
- 3 feature items with orange circle icons (70px):
  - Fast Support (paper-plane → lucide Send)
  - Happy Customers (smile → lucide Smile)
  - 24/7 Support (support → lucide Headphones)

### 6. Testimonials
- Full-width background image section (`section-bg style-1`)
- Dark overlay on image
- Caption "Testimonials", heading "Happy Clients" (white text)
- Carousel of person cards:
  - Person photo (circular, `picsum.photos/seed/bidmark-person-{1-4}/100/100`)
  - Name + role
  - Quote text
- Replace Owl Carousel with CSS snap scroll or Swiper.js

### 7. CTA Section
- Centered: "Create an account and start Buy, Bid or Sell Now!"
- "Register" button (Bootstrap primary blue)

### 8. Footer
- Light gray bg (`#f8f9fa`), 4rem padding
- 4 columns:
  - Col 1: Logo image + description + "Learn More" link
  - Col 2: Solutions links (Register, Login, Buy, Sell, Submit a bid)
  - Col 3: Services links (Register, Login, Buy, Sell, Submit a bid)
  - Col 4: Contact links (Help Center, Support Community, Press, Share Your Story, Our Supporters)
- Copyright line with Component Dock link (replaces Colorlib attribution)

## Key implementation notes

- **No jQuery** — use React state + refs for all interactivity
- **No Owl Carousel** — use CSS snap scroll or Swiper.js (lightweight)
- **No AOS** — use CSS animations + Intersection Observer for scroll reveals
- **No Fancybox** — the hero can be decorative or link externally
- **No icomoon/Flaticon** — replace all icons with lucide-react
- **No YTPlayer** — skip the YouTube background video functionality
- **Placeholder images** — use `picsum.photos/seed/bidmark-*` for all images
- **Muli font** — load via Google Fonts `<link>` in index.html (Muli is now "Mulish" on Google Fonts)
- **Component Dock footer** — replace Colorlib attribution with "Made with Component Dock" + link
- **No ColorLib references** — provenance only in spec and TEMPLATES.md
- **Square buttons** — all buttons use `rounded-none` in Tailwind
- **Orange brand** — put `#f37121` in `@theme` as primary/orange color
