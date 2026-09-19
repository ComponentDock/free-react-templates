# Bouquet — Implementation Tasks & Design Notes

**Source:** ColorLib Aroma (https://preview.colorlib.com/theme/aroma/)
**New name:** bouquet
**Category:** E-Commerce

## Section Order (fidelity to source)

1. **Navbar** — sticky header with logo, nav links (Home, Shop dropdown, Blog dropdown, Pages dropdown, Contact), search icon, cart icon with badge count, "Buy Now" button
2. **Hero Banner** — split layout: left product image + right content (subheading "Shop is fun", headline "Browse Our Premium Product", description paragraph, "Browse Now" CTA). Left blue accent bar (#384aeb), background #F1F6F7
3. **Hero Carousel** — owl-carousel equivalent: 3 product slides (headphones/accessories), each with hover overlay sliding up from bottom showing product name + category
4. **Trending Products** — section heading "Popular Item in the market" + "Trending Product", 4-column responsive grid of product cards (image, category label, name, price). Hover reveals semi-transparent overlay with search/cart/heart icon buttons
5. **Offer / Parallax** — full-width section with parallax background image, promotional heading + description
6. **Blog Section** — 3-column grid of blog cards (image, author + comments metadata, title, excerpt, "Read More" link)
7. **Subscribe / Newsletter** — centered card with upward blue shadow, heading "Get Update From Anywhere", email input + "Subscribe Now" pill button
8. **Footer** — dark navy (#002347) background, 4-column layout (Our Mission text, Quick Links list, Gallery thumbnails, Contact info). Bottom bar with copyright + Component Dock link

## Design Tokens

```
Brand primary:    #384aeb   (buttons, links, accents, hero accent bar)
Brand accent:     #8894ff   (card overlay buttons default)
Danger CTA:       #c5322d   (register button, hover accents)
Hero bg:          #F1F6F7   (hero banner, blog banner, section backgrounds)
Footer bg:        #002347   (dark navy)
Heading font:     "Oswald", sans-serif
Body font:        "Roboto", sans-serif
Heading color:    #222
Body text:        #777
Secondary text:   #555555
Button radius:    30px (pill shape)
Section margin:   45px mobile → 120px desktop
```

## Implementation Notes

- Replace Bootstrap grid with Tailwind responsive utilities (`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4`)
- Replace owl-carousel with a simple auto-scrolling carousel (CSS animation or lightweight library)
- Product card hover overlay: use `opacity-0 group-hover:opacity-100 transition` pattern
- Parallax section: CSS `background-attachment: fixed` or a simple scroll-based approach
- Hero banner left accent bar: absolute-positioned div with brand color
- Subscribe card: white background, centered, with `shadow-[0px_-5px_20px_0px_rgba(56,74,235,0.1)]`
- Footer: `bg-[#002347]` with white text, 4-column grid
- All placeholder images: `https://picsum.photos/seed/bouquet-<n>/<w>/<h>`
- Icons: `lucide-react` (Search, ShoppingCart, Heart, ChevronRight, MapPin, Phone, Mail)
- Footer MUST link https://www.componentdock.com/ (Component Dock branding)
