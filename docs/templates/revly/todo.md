# Revly — Implementation TODO

Source: ColorLib Car Rental (https://colorlib.com/wp/template/car-rental/)
Preview: https://preview.colorlib.com/theme/carrental/

## Section order (match 1:1)

1. **Navbar** — sticky, logo left, links right, hamburger mobile
2. **Hero / Banner** — dark overlay, heading, subtext, booking form
3. **Features / Services** — 6 cards, 3×2 grid, icon + title + description
4. **About** — split: image left, text right, heading, subtext, CTA button
5. **Car Models** — carousel of car cards with pricing + specs
6. **Facts / Stats** — yellow (#fab700) bg, 5 animated counters
7. **Reviews / Testimonials** — carousel of quote cards
8. **Call to Action** — dark overlay bg, heading, text, button
9. **Blog** — 3 post cards, image + date + title + excerpt + likes/comments
10. **Footer** — dark navy (#04091e), 3 columns, newsletter, social, copyright

## Component breakdown

| Component | Sections covered |
|---|---|
| `Navbar.tsx` | Sticky nav, logo, links, mobile hamburger |
| `Hero.tsx` | Banner with overlay, heading, subtext |
| `BookingForm.tsx` | Car select, dates, locations, submit button |
| `Features.tsx` | 6 service cards in grid |
| `About.tsx` | Split layout, text + image + CTA |
| `CarModels.tsx` | Carousel of car cards with specs |
| `Facts.tsx` | Animated stat counters on yellow bg |
| `Reviews.tsx` | Testimonial carousel |
| `CallToAction.tsx` | Dark overlay CTA band |
| `Blog.tsx` | 3 blog post cards |
| `Footer.tsx` | Dark navy footer, columns, newsletter |

## Design notes

- Brand color #fab700 is the dominant accent — used in buttons, facts bg, hover states
- Font: Poppins (Google Fonts)
- Buttons: bg #fab700, color #fff, border-radius 20px, hover → transparent bg + #fab700 border/text
- Footer: bg #04091e, text #777, social icons #ccc → #fab700 on hover
- Blog section bg: #f9f9ff (very light lavender)
- Banner overlay: rgba(0,0,0,0.8), CTA overlay: rgba(4,9,30,0.75)
- Booking form: select dropdowns + date inputs, stacked in hero
- Car cards: image + name + price/day + specs list + CTA button
- Stats: 5 counters with labels, animate on scroll into view
- Testimonials: carousel with quote + name + role per card
- Blog cards: image + meta (date) + title + excerpt + likes/comments
- Footer: 3 columns (Quick Links, Resources, Newsletter), social icons, copyright
- Footer MUST include Component Dock attribution link

## Fidelity checklist

- [ ] Section order matches original exactly
- [ ] Brand color #fab700 throughout
- [ ] Poppins font family
- [ ] Button style: rounded (20px), yellow → transparent on hover
- [ ] Dark navy footer (#04091e)
- [ ] Light lavender blog bg (#f9f9ff)
- [ ] Booking form in hero with car/date/location selectors
- [ ] Car model cards with specs
- [ ] 5 animated stat counters
- [ ] Testimonial carousel
- [ ] CTA dark overlay band
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to componentdock.com
- [ ] Responsive: hamburger menu, stacked layouts on mobile
