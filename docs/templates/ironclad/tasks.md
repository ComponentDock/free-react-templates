# Ironclad — Prep Notes

**Source:** ColorLib Celt — https://colorlib.com/wp/template/celt/
**Preview:** https://preview.colorlib.com/theme/celt/
**New name:** ironclad
**Category:** Construction Company

## Section Order (from preview DOM, top to bottom)

1. **Navbar** — Sticky top, logo left, nav links right (Home, About Us, Services, Projects, News, Contact Us), search toggle
2. **Hero Banner** — Full-width background image with dark overlay, centered "We Build Your Dream" heading, secondary CTA button (gold)
3. **About Us** — 3-column grid: Certified Experience, The Great Teamwork, Modern Technology. Each has icon + title + description
4. **Stats Counter** — Gold (#FFD626) background strip, 4 stats: 20 Years Experience, 154 Projects Completed, 785 Happy Clients, 14 Awards Won
5. **Featured Works (Portfolio)** — 4-item grid, background images, hover overlay with link icons (gold circles), slide-up content bar (dark navy bg, gold top border)
6. **Our Services** — 6-item grid: Construction, Renovation, Architecture, Painting, Decorating, Consulting. Icon + title + description
7. **Why Choose Us** — Gray (#F8F8F8) background, heading + description + 4 icon features
8. **Happy Clients (Testimonials)** — 3 testimonial cards with FontAwesome quote icon, quote text, author name
9. **Latest News (Blog)** — 3 blog cards, image with gold bottom border, title, excerpt
10. **Footer** — Dark navy (#001232) background, 3 columns: logo/about, quick links, newsletter. Copyright bar with Component Dock link

## Design Token Summary

| Token         | Value            | Tailwind class mapping      |
| ------------- | ---------------- | --------------------------- |
| brand/gold    | #FFD626          | `bg-brand`, `text-brand`, `border-brand` |
| dark/navy     | #001232          | `bg-dark`, `text-dark`      |
| body gray     | #64728A          | `text-body`                 |
| light bg      | #F8F8F8          | `bg-gray-light`             |
| white         | #FFF             | `bg-white`, `text-white`    |
| font          | Poppins          | `font-poppins` via Google Fonts link |
| border radius | 0 (sharp)        | No rounding on buttons/cards |
| icon radius   | 50%              | Portfolio hover circles     |

## Fidelity Notes

- **No rounded corners** — the original uses `border-radius: 0` everywhere except portfolio hover icons (50%). Preserve this angular/industrial feel.
- **Gold accent is dominant** — used for buttons, portfolio borders, blog image borders, stats background. Keep it consistent.
- **Dark navy (almost black)** — `#001232` is used for footer, portfolio content overlay, text on gold. High contrast.
- **Portfolio hover effect** — overlay fades in (opacity transition), icon links in gold circles, content bar slides up with transform.
- **Testimonial quote icon** — FontAwesome `\f10d` (quote-left), positioned absolutely above the quote text.
- **Stats section** — no animation in original (just static numbers). Could add counter animation as enhancement.
- **Blog image border** — `border-bottom: 4px solid #FFD626` on `.blog-img`, a distinctive design element.
- **"Lastest News"** — original has a typo. Decide whether to keep for fidelity or correct to "Latest News".

## Component Plan

| Component     | File               | Notes                                    |
| ------------- | ------------------ | ---------------------------------------- |
| Navbar        | Navbar.tsx         | Sticky, mobile toggle, search            |
| Hero          | Hero.tsx           | Full-width bg, overlay, CTA              |
| About         | About.tsx          | 3-column grid with icons                 |
| Stats         | Stats.tsx          | Gold strip, 4 counters                   |
| Portfolio     | Portfolio.tsx      | 4-item grid, hover effects               |
| Services      | Services.tsx       | 6-item grid with icons                   |
| WhyChooseUs   | WhyChooseUs.tsx    | Gray bg, icon features list              |
| Testimonials  | Testimonials.tsx   | 3 cards with quote icon                  |
| Blog          | Blog.tsx           | 3 cards with gold-bordered images        |
| Footer        | Footer.tsx         | Dark bg, 3 columns, newsletter           |

## Implementation Priority

1. Navbar + Hero (establishes the look)
2. About + Stats (content sections)
3. Portfolio (hover interactions — most complex)
4. Services + WhyChooseUs (grid layouts)
5. Testimonials + Blog (card patterns)
6. Footer (final section)
7. Design token setup in index.css with @theme
