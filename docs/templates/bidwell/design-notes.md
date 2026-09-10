# Bidwell — Design Notes

Source: ColorLib "Auction"
Preview: https://preview.colorlib.com/theme/auction/

## Section order (from preview HTML, top to bottom)

1. **Navbar** — sticky top, logo left with orange underline, horizontal nav links center, Sign In/Register right
2. **Hero (intro-section)** — full-width background image with dark overlay, centered content: h1 "The Best Place to Buy and Sell", subtext, "Register" orange button (square)
3. **Current Auctions** — white bg, caption "Auctions" (orange, uppercase, 11px), heading "Current Auctions", 4-column grid of 8 items. Each item: orange price badge (absolute positioned top-left), product image, item name, category + bids row, "Submit a Bid" button (light gray bg, square)
4. **How It Works** — white bg, caption "How?", heading "How It Works", 4 columns: icon + h3 + description (Register, Buy or Bid, Submit a bid, Win)
5. **About Us** — white bg, split layout: large image left (col-lg-7), features right (col-lg-5). Caption "About?", heading "About Us". Three features: icon + h3 + p (Fast Support, Happy Customers, 24/7 Support)
6. **Testimonials** — parallax background image, white text overlay. Caption "Testimonials", heading "Happy Clients". Carousel of cards: circular avatar + name/title + quote text (white, 20px)
7. **CTA** — white bg, centered content: h2 "Create an account and start Buy, Bid or Sell Now!", "Register" orange button
8. **Footer** — #f8f9fa bg, 4 columns: logo + text + "Learn More" link, Solutions links, Services links, Contact links. Copyright line with Component Dock link (replaces Colorlib attribution)

## Fidelity notes

- **Brand color**: #f37121 (warm orange) — used for captions, CTA buttons, price badges
- **Font**: "Muli" (Google Fonts) — load via <link> in index.html
- **Buttons**: border-radius 0 (square), padding 14px 20px for primary buttons
- **Bid buttons**: lighter style — bg #f8f9fa, color #000, padding 7px 15px, border-radius 0
- **Item cards**: no visible borders, subtle shadow `0 1px 2px 0 rgba(0,0,0,0.05)`, white space separation
- **Price badge**: orange bg (#f37121), white text, positioned absolute top-left on the product image
- **Caption style**: uppercase, 11px, letter-spacing .2rem, font-weight 700, color #f37121
- **Body text**: color #999999, font-weight 300, font-size 15px, line-height 1.7
- **Hero**: background-size cover, min-height ~800px, centered content with dark overlay
- **Testimonials**: section-bg with background-image (parallax), white text, carousel
- **About section**: image left (col-lg-7), features right (col-lg-5) with icon + title + description rows
- **Footer**: 4-col grid, #f8f9fa background, "footer-heading" styled spans inside h3 elements

## Component mapping

| Section      | Component file   | Key props / notes                       |
| ------------ | ---------------- | --------------------------------------- |
| Navbar       | Navbar.tsx       | Logo, nav links, dropdown, sign-in link |
| Hero         | Hero.tsx         | bg image, h1, subtext, CTA button       |
| AuctionsGrid | AuctionsGrid.tsx | 8 items, 4-col grid, price badge, cards |
| HowItWorks   | HowItWorks.tsx   | 4 steps, icon + title + description     |
| AboutUs      | AboutUs.tsx      | Split layout, image + 3 features        |
| Testimonials | Testimonials.tsx | Parallax bg, carousel, avatar + quote   |
| CTA          | CTASection.tsx   | Heading + Register button               |
| Footer       | Footer.tsx       | 4-col, copyright, Component Dock link   |
