# Keyturner — Implementation Notes

**Source:** ColorLib "Youragent" → https://preview.colorlib.com/theme/youragent/
**New name:** `keyturner`

## Section order (match 1:1)

1. **Navbar** — sticky, white bg, logo left, nav right (About, Blog, Contact), contact info row
2. **Hero** — full-width bg image, `rgba(0,0,0,0.15)` overlay, Playfair Display heading, 2 pill CTAs, scroll arrow
3. **Popular Properties** — section heading, 3-column grid of property cards (img + star rating + title)
4. **About Agent** — 2-col: avatar + bio left, 3 feature cards (icon + title + desc) right
5. **Happy Customers** — section heading, 3 testimonial cards (name, role, quote)
6. **Recent Blog Posts** — `bg-light`, section heading, 3 blog cards (img + title + excerpt)
7. **Footer** — dark bg (#1a1a1a), newsletter form, 3-col (About, Quick Links, Contact), copyright

## Design token mapping (ColorLib → Tailwind)

| ColorLib | Tailwind / CSS var |
|---|---|
| `#007bff` (Bootstrap blue) | `--color-primary: #007bff` in `@theme` |
| `#1a1a1a` (dark footer) | `bg-[#1a1a1a]` |
| `Playfair Display` | `font-['Playfair_Display',serif]` |
| `Mukta Mahee` | `font-['Mukta_Mahee',sans-serif]` |
| `border-radius: 50px` (pill btn) | `rounded-full` |
| `rgba(0,0,0,0.15)` (hero overlay) | `bg-black/15 absolute inset-0` |
| `bg-light` (#f8f9fa) | `bg-gray-50` or `bg-[#f8f9fa]` |

## Component breakdown

| Section | Component file | Key details |
|---|---|---|
| Navbar | `Navbar.tsx` | Sticky, logo left, 3 nav links + contact row, hamburger on mobile |
| Hero | `Hero.tsx` | Full-screen bg image, dark overlay div, heading, subtext, 2 ButtonLinks, scroll anchor |
| Properties | `Properties.tsx` | Section heading, 3-col grid, each card: img (rounded-lg), star row (lucide Star ×5), h3 title |
| About | `About.tsx` | 2-col layout: avatar img + bio left, 3 feature cards right (icon from lucide, title, desc) |
| Testimonials | `Testimonials.tsx` | 3 cards: customer name, role, blockquote |
| Blog | `BlogPosts.tsx` | bg-gray-50, 3 cards: image, date, title, excerpt, "Read more" link |
| Footer | `Footer.tsx` | bg-[#1a1a1a], newsletter form, 3-col grid, copyright with Component Dock link |

## Fidelity notes

- Hero heading is VERY large (80px desktop, 40px mobile) — use responsive text sizes
- Buttons are pill-shaped (`rounded-full`) with uppercase + letter-spacing
- Property cards have star ratings (use lucide Star icons)
- Footer newsletter has a simple input + button form
- Overall aesthetic: clean, professional, dark accents on white, Bootstrap-inspired grid
- Icons: use lucide-react (Star, Mail, Phone, MapPin, Clock, ThumbsUp, Headphones, etc.)

## Images (placeholders)

- Hero: `https://picsum.photos/seed/keyturner-hero/1920/1080`
- Property 1-3: `https://picsum.photos/seed/keyturner-prop-1/600/400` (etc.)
- Agent avatar: `https://picsum.photos/seed/keyturner-agent/300/300`
- Blog 1-3: `https://picsum.photos/seed/keyturner-blog-1/600/400` (etc.)
