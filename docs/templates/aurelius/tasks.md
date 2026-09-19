# Aurelius — Implementation Tasks & Design Notes

**Source:** ColorLib Fashi (https://preview.colorlib.com/theme/fashi/)
**New name:** aurelius
**Category:** E-Commerce

## Section Order (fidelity to source)

1. **Top Header Bar** — left: email icon + "hello.colorlib@gmail.com", phone icon + "+65 11.188.888". Right: login panel (user icon + "Login"), language selector dropdown (English/German), social icons (Facebook, Twitter, LinkedIn, Pinterest).
2. **Main Header** — logo (col-lg-2), advanced search bar (col-lg-7): "All Categories" button + text input "What do you need?" + search icon button. Right (col-lg-3): heart icon with count badge, cart icon with count badge + hover dropdown (2 product rows with image + name + price + close button, total, View Card + Checkout buttons), cart price display "$150.00".
3. **Category Navigation** — "Departments" dropdown button + horizontal nav links. Below main header.
4. **Hero Slider** — 2 slides with background images. Each: "Black friday" headline (gold accent), "60% Discount" subtext, "Shop Now" pill button (gold bg). Owl-carousel.
5. **Category Cards** — 3 cards (Men's, Women's, Kid's) with background images and overlay text. Clickable links.
6. **Women's Products** — "Women's" heading, owl-carousel of product cards. Each: image, product name ("Pure Pineapple", "Guangzhou sweater", etc.), price.
7. **Deal of the Week** — "Deal Of The Week" heading, countdown timer (Days/Hours/Minutes/Seconds in boxes), product image, "Shop Now" button.
8. **Men's Products** — "Men's" heading, product carousel similar to Women's.
9. **Blog Section** — "From The Blog" heading, 3 article cards. Each: image, title, date, excerpt paragraph, "Read More" link.
10. **Footer** — 4 columns:
    - Column 1: Logo + address + phone + email + social icons (Facebook, Instagram, Twitter, Pinterest)
    - Column 2: "Information" links (About Us, Checkout, Contact, Services)
    - Column 3: "My Account" links (My Account, Contact, Shopping Cart, Shop)
    - Column 4: "Join Our Newsletter Now" + description + email input + Subscribe button
    - Copyright bar with payment method logos

## Design Tokens

```
Body text:        #111111   (near-black)
Secondary text:   #636363   (gray)
Heading color:    #252525   (dark gray)
Primary:          #e7ab3c   (gold/amber — buttons, accents)
Button hover:     #000000   (black)
Button radius:    60px (pill shape)
Font:             "Muli", sans-serif
```

## Implementation Notes

- Preloader: skip in React SPA (not needed)
- Two-tier header: top bar with contact info, main header with search + actions
- Advanced search: flex row with category button + input + search icon, styled with border
- Cart dropdown: hover-triggered, shows product rows with image + name + price + close, total, View Card + Checkout buttons
- Hero slider: owl-carousel equivalent, 2 slides with background images + text overlay
- Category cards: image background + centered text overlay, 3-column grid
- Product carousels: horizontal scrollable product cards
- Countdown timer: `useState` + `useEffect` with `setInterval` for live countdown
- Blog cards: image + title + date + excerpt + "Read More" link
- Footer: 4-column grid, newsletter form with email input + subscribe button
- All placeholder images: `https://picsum.photos/seed/aurelius-<n>/<w>/<h>`
- Icons: `lucide-react` (Search, Heart, ShoppingCart, User, Mail, Phone, Facebook, Twitter, Linkedin, Pinterest)
- Footer MUST link https://www.componentdock.com/ (Component Dock branding)
