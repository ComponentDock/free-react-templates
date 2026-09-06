# BidHub — Implementation Notes

Source: ColorLib "Auction"
Preview: https://preview.colorlib.com/theme/auction/

## Structure order

1. Navbar (sticky, white bg, logo + nav links + sign-in button)
2. Hero section (full-width bg image, centered heading, CTA button)
3. Current Auctions (section heading, 8-item card grid)
4. How It Works (section heading, 4 step items in row)
5. About Us (section heading, 3 feature items, gray bg)
6. Happy Clients / Testimonials (orange overlay bg, client cards)
7. CTA section (centered heading, button)
8. Footer (dark bg, 3 columns, copyright)

## Section-by-section fidelity notes

### Navbar

- Sticky position, white background, 1rem vertical padding
- Logo image on the left (use placeholder: `https://picsum.photos/seed/bidhub-logo/150/40`)
- Nav links: Home, Buy, Sell, Services (dropdown with Sell Items, Buy Items, Submit a Bid), Blog, About, Contact
- Right side: "Sign In / Register" text link (white on dark social-wrap bg)
- Mobile: hamburger menu, slide-in mobile menu

### Hero Section

- Full-width background image (`https://picsum.photos/seed/bidhub-hero/1920/800`)
- Centered heading: "The Best Place to Buy and Sell" (52px, white, Muli font)
- Subtext and "Get Started" button below
- Padding: ~8rem top/bottom

### Current Auctions Grid

- Section heading: "Current Auctions" (36px, black, "Auctions" bold)
- 8 auction cards in responsive grid: 4 cols desktop / 2 tablet / 1 mobile
- Each card: image, title, current bid price, time remaining
- Card items: Pinky Shoes, Eye Glass Eye Protector, Black Leather Jacket, MacBook 15-Inch Laptop, iPad, Shoe Sneakers, iMac, iWatch
- White card bg, subtle shadow, 0 border-radius
- Use placeholder images: `https://picsum.photos/seed/bidhub-item-N/400/300`

### How It Works

- Section heading: "How It Works" (36px, black, "It Works" bold)
- 4 step items in horizontal row
- Steps: Register, Buy or Bid, Submit a bid, Win
- Each has an icon (use lucide-react) and brief description text
- White background

### About Us

- Section heading: "About Us" (36px, black, "Us" bold)
- Background: light gray (#f4f5f9)
- 3 feature items: Fast Support, Happy Customers, 24/7 Support
- Each feature: orange (#f37121) icon, title, description
- Icons from lucide-react

### Happy Clients (Testimonials)

- Background image with orange (#f37121) overlay at 90% opacity
- Section heading: "Happy Clients" (36px, white, "Clients" bold)
- Testimonial cards with: circular avatar, client name, quote
- Client name: 1.2rem, white, bold
- Quote text: semi-transparent white (rgba(255,255,255,0.5))
- Use placeholder avatars: `https://picsum.photos/seed/bidhub-avatar-N/50/50`

### CTA Section

- Heading: "Create an account and start Buy, Bid or Sell Now!" (centered, black)
- White background
- Prominent orange (#f37121) button below

### Footer

- Dark background (#25262a)
- 3 columns: Solutions, Services, Contact
- Footer heading: 18px, white, with underline
- Link items: 14px, muted color
- Copyright text at bottom
- Link to Component Dock (mandatory)

## Design token mapping

| Original CSS                          | Tailwind class / @theme token                    |
| ------------------------------------- | ------------------------------------------------ |
| `color: #f37121` (brand)              | `text-[#f37121]` / `@theme --color-brand`        |
| `background: #f37121`                 | `bg-[#f37121]`                                   |
| `color: #000` (headings)              | `text-black`                                     |
| `color: #212529` (body)               | `text-[#212529]`                                 |
| `color: #777` (muted)                 | `text-[#777]`                                    |
| `background: #fff`                    | `bg-white`                                       |
| `background: #f4f5f9`                 | `bg-[#f4f5f9]`                                   |
| `background: #25262a`                 | `bg-[#25262a]`                                   |
| `font-family: "Muli"`                 | Google Fonts link in index.html                  |
| `font-size: 16px`                     | `text-base`                                      |
| `line-height: 1.7`                    | `leading-[1.7]`                                  |
| `font-size: 36px` (heading)           | `text-[36px]`                                    |
| `font-size: 52px` (hero)              | `text-[52px]`                                    |
| `padding: 5rem 0`                     | `py-20` (approx 5rem)                            |
| `padding: 8rem 0`                     | `py-32` (approx 8rem)                            |
| `border-radius: 0`                    | `rounded-none`                                   |
| `border-radius: 50%`                  | `rounded-full`                                   |
| `box-shadow: 0 2px 10px rgba(0,0,0,0.08)` | `shadow-[0_2px_10px_rgba(0,0,0,0.08)]`     |
| `opacity: .9`                         | `opacity-90`                                     |
