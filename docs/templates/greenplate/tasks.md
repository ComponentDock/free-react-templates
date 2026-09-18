# Greenplate — Implementation Tasks

**Source:** ColorLib Vegefoods (https://colorlib.com/wp/template/vegefoods/)
**Preview:** https://preview.colorlib.com/theme/vegefoods/
**New name:** Greenplate
**App path:** apps/greenplate

## Design Tokens

| Token      | Hex     | Usage                                                  |
| ---------- | ------- | ------------------------------------------------------ |
| brand      | #82ae46 | Fresh green — buttons, accents, top bar, active states |
| brand-dark | #6f9538 | Hover state for brand                                  |
| ink        | #000000 | Dark headings, product names, footer bg                |
| paper      | #f8f9fa | Light section backgrounds                              |
| mist       | #999999 | Muted body text                                        |
| body       | #212529 | Default text color                                     |
| topbar     | #82ae46 | Top bar background (branded)                           |
| navbar     | #000000 | Dark nav bar                                           |
| footer     | #000000 | Dark footer background                                 |

**Fonts:** Poppins (sans), Lora (serif accents)

## Components

| #   | Component    | File             | Description                                      |
| --- | ------------ | ---------------- | ------------------------------------------------ |
| 1   | TopBar       | TopBar.tsx       | Green bar: phone, email, delivery info           |
| 2   | Navbar       | Navbar.tsx       | Dark nav, brand, links, cart icon, shop dropdown |
| 3   | Hero         | Hero.tsx         | 2-slide carousel, heading + CTA                  |
| 4   | Features     | Features.tsx     | 4-column icon grid                               |
| 5   | Categories   | Categories.tsx   | Image grid with category links                   |
| 6   | Products     | Products.tsx     | 8 product cards, sale badges                     |
| 7   | DealOfDay    | DealOfDay.tsx    | Parallax bg, countdown timer                     |
| 8   | Testimonials | Testimonials.tsx | Carousel of testimonial cards                    |
| 9   | Partners     | Partners.tsx     | 5 partner logos                                  |
| 10  | Newsletter   | Newsletter.tsx   | Email input + subscribe form                     |
| 11  | Footer       | Footer.tsx       | 4-column dark footer with Component Dock link    |

## Checklist

- [ ] Scaffold app from amber template
- [ ] Install npm deps + register workspace in lockfile
- [ ] Implement all 11 components
- [ ] Write tests for all components (100% coverage)
- [ ] Run verify-app.sh greenplate — PASS
- [ ] Run spec:validate — PASS
- [ ] Commit + push branch
- [ ] Open PR + merge
- [ ] Bookkeeping (TEMPLATES.md [x], homepage, readme:status)
