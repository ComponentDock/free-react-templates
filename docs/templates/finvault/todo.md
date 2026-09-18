# FinVault — Implementation Tasks & Design Notes

Source: ColorLib Finances (https://preview.colorlib.com/theme/finances/)
New name: finvault | Package: @free-react-templates/finvault
Deploy target: finvault.free.componentdock.com

## Structure Order

1. Navbar (sticky, dropdown, mobile hamburger)
2. Hero (fullscreen, carousel, dark overlay)
3. About Us (circular image + text)
4. Features (3-col icon cards)
5. Banking Solutions (circular image + checklist)
6. Meet Team (3 member cards with social overlays)
7. Gallery (masonry grid, hover lightbox)
8. How It Works (3 numbered steps)
9. Services Grid (6 items, light bg)
10. Testimonials (carousel)
11. Pricing (3 tiers, Premium highlighted)
12. FAQ (8 Q&A, 2-col)
13. Blog (3 cards)
14. Contact (3 info cols + form, light bg)
15. Footer (dark bg, 3-col + newsletter + copyright)

## Component Breakdown

| Component      | File                        | Notes                                         |
| -------------- | --------------------------- | --------------------------------------------- |
| Navbar         | src/components/Navbar.tsx   | Sticky, dropdowns, mobile hamburger slide-out  |
| Hero           | src/components/Hero.tsx     | Fullscreen bg image, carousel of 3 slides     |
| About          | src/components/About.tsx    | Circular-bg image + 2-col text                |
| Features       | src/components/Features.tsx | 3-col grid, icon + title + desc               |
| BankingSolutions | src/components/BankingSolutions.tsx | Circular image + heading + green checklist |
| Team           | src/components/Team.tsx     | 3 cards, image with social overlay            |
| Gallery        | src/components/Gallery.tsx  | Masonry grid, hover overlay icon              |
| HowItWorks     | src/components/HowItWorks.tsx | 3 numbered steps                            |
| Services       | src/components/Services.tsx | 6-item grid, light bg                         |
| Testimonials   | src/components/Testimonials.tsx | Carousel of quotes                       |
| Pricing        | src/components/Pricing.tsx  | 3 cards, Premium highlighted                  |
| FAQ            | src/components/FAQ.tsx      | 8 items, 2-column grid                        |
| Blog           | src/components/Blog.tsx     | 3 cards with image/meta/excerpt               |
| Contact        | src/components/Contact.tsx  | 3 info cols + form                            |
| Footer         | src/components/Footer.tsx   | Dark bg, About/Links/Social/Newsletter        |

## Design Notes

### Brand Colors (Tailwind @theme)
- `--color-brand: #007bff` (primary — buttons, links, active nav, icons)
- `--color-success: #71bc42` (check-list icons)
- `--color-dark-bg: #343a40` (footer)
- `--color-light-bg: #cccccc` → use Tailwind's `bg-gray-200` or similar

### Typography
- Font family: "Open Sans" via Google Fonts `<link>` in index.html
- Hero h1: 4rem / 900 weight / uppercase / white
- Body: 1rem / 400 weight / line-height 1.7 / gray color
- Headings: inherit "Open Sans"

### Key Styling Patterns
- **Pill buttons**: border-radius: 30px, padding: 10px 30px
- **Pill inputs**: height 43px, border-radius: 30px
- **Circle-bg images**: CSS ::after pseudo-element creates a gray circle behind images (300px diameter, bottom-right offset)
- **Dark hero overlay**: rgba(0,0,0,0.7) on ::before pseudo
- **Sticky navbar**: transparent on hero, white bg + shadow when scrolled
- **Dropdown border**: 2px solid #007bff on top
- **Check-list**: green check icon (icomoon \e5ca), strikethrough for excluded items
- **Gallery hover**: dark overlay with zoom icon
- **Testimonial carousel**: owl-carousel style, centered quote
- **Footer newsletter**: transparent bg input + primary Send button

### Section Background Mapping
- White: About, Features, Banking Solutions, Team, Gallery, How It Works, FAQ, Blog
- Light gray: Services Grid, Pricing, Contact
- Dark gray: Footer
- Image + overlay: Hero

### Placeholder Images
- Hero background: `https://picsum.photos/seed/finvault-hero/1920/1080`
- About image: `https://picsum.photos/seed/finvault-about/600/500`
- Banking image: `https://picsum.photos/seed/finvault-bank/600/500`
- Team: `https://picsum.photos/seed/finvault-team-1/400/400` etc.
- Gallery: `https://picsum.photos/seed/finvault-gal-N/` (N=1..11)
- Blog: `https://picsum.photos/seed/finvault-blog-1/400/300` etc.
- Icons: lucide-react equivalents for wallet, cart, credit-card, building-2, shield, pie-chart, trend-up, briefcase, dollar-sign, map-pin, phone, mail

### Interaction Notes
- Hero: auto-advancing carousel (3 slides, ~5s interval)
- Gallery: hover shows overlay with zoom icon; click opens lightbox (use react-photo-view or similar)
- Team: hover shows social icon overlay on image
- Navbar: sticky transition on scroll; dropdown on hover (desktop), slide-out on hamburger (mobile)
- Contact form: client-side validation with react-hook-form + zod
