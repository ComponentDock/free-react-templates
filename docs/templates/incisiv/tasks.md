# Incisiv — Task Outline

## Template

- **New name:** Incisiv
- **Original:** ColorLib "Prodent" (https://colorlib.com/wp/template/prodent/)
- **Preview:** https://preview.colorlib.com/theme/prodent/

## Sections (in order)

1. Header — fixed white bg, site logo "Incisiv" (with tooth icon), nav: Home, About, Service, Blog, Contact, flaticon icon
2. Header Info Bar — 4 columns: address, opening hours, phone, address (with flaticon icons)
3. Hero Slider — full-width with dental bg image, heading "Love your smile", "Read More" green CTA, slide indicators (01/02)
4. Banner — green #71cd29 bg, "Schedule your appointment for a free consultation.", white "Read More" CTA right-aligned
5. About — white bg, split layout: image left (col-lg-5), text right "We Care About Your teeth"
6. Facts — bg image, 4 stat counters: X-rays 531, Tooth Brushes 14K, Extractions 678, Happy Patients 2134
7. Services — #eff2f4 light gray bg, 6 cards in 3x2 grid: Crowns Bridges, Implants, Teeth Whitening, Root Canals, Wisdom Teeth, Braces
8. Gallery — 4-column photo grid, edge-to-edge
9. Testimonials — carousel with quote marks, text, name "Jessica Brown", title "Pacient", author avatar
10. Newsletter — green #71cd29 bg, "Subscribe to our newsletter", email input + dark "Subscribe" button
11. Footer Top — bg image, 3 columns: about + social icons, Our Services links, Opening Hours table
12. Footer — dark #0d0d0d, nav menu: Home/About us/Services/Blog/Contact, copyright + Component Dock link

## Design Tokens

- Brand green: #71cd29 (buttons, banner bg, newsletter bg)
- Dark near-black: #0d0d0d (footer)
- Medium dark: #2d2d2d (text, dark button, accordion)
- Light gray: #eff2f4 (services bg)
- Off-white: #f4f8fb (featured bg)
- Blue accent: #1b9ed2 (page-info overlay)
- Font: Montserrat (400, 500, 600, 700)
- Buttons: border-radius 5px, primary green #71cd29 white text, dark #2d2d2d green text, light white dark text
- Heading color: #2d2d2d
- Body text: #696969 / #7e7e7e

## Fidelity Notes

- Hero uses owl-carousel with slide indicators; implement as a React carousel (e.g. state-based slide toggle or Swiper)
- Facts section has animated number counters — implement with intersection observer + count-up animation
- Gallery is a simple 4-column CSS grid with equal-width images, no gaps
- Testimonials use a carousel with quote marks (") styled large
- Newsletter form is simple: email input + dark submit button
- Footer top has a table for opening hours — keep the table structure
- Social icons in footer top: Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn (use lucide-react or similar)
- No ColorLib references in app code; provenance only in spec + TEMPLATES.md

## Status

- [x] Spec written and validated
- [ ] Components implemented
- [ ] Tests written
- [ ] Per-app gate passed
