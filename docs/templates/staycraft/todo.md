# Staycraft — Implementation TODO + Design Notes

## Source mapping

| Field           | Value                                                   |
| --------------- | ------------------------------------------------------- |
| ColorLib slug   | `casahotel`                                             |
| ColorLib URL    | https://colorlib.com/wp/template/casahotel/             |
| Preview URL     | https://preview.colorlib.com/theme/casahotel/           |
| New app name    | `staycraft`                                             |
| Package         | `@free-react-templates/staycraft`                       |
| Deploy URL      | https://staycraft.free.componentdock.com                |

## Section order (implement top-to-bottom)

1. `Navbar.tsx` — Absolute-positioned, transparent over hero. Logo left, hamburger right. Mobile: fullscreen overlay nav.
2. `Hero.tsx` — Full viewport bg image, dark overlay, centered heading, scroll-down mouse icon.
3. `CheckAvailability.tsx` — bg-light, form with 4 fields (check-in, check-out, adults, children) + CTA pill button.
4. `Welcome.tsx` — 2-column: image left, text right with heading, description, Read More + See video.
5. `GreatOffers.tsx` — bg-light, heading, 2 room cards with pricing, View All Rooms CTA.
6. `GallerySlider.tsx` — Heading, image carousel (use simple CSS/slider, no owl-carousel dependency).
7. `Testimonials.tsx` — Heading, testimonial cards with circular photos, quotes, carousel dots.
8. `Events.tsx` — bg-light, 3-column blog card grid.
9. `CtaBanner.tsx` — Border-top, text + Reserve Now button.
10. `Footer.tsx` — 4-column: links, links, contact, newsletter. Copyright + social + Component Dock.

## Component tree

```
App.tsx
  Navbar
  Hero
  CheckAvailability
  Welcome
  GreatOffers
  GallerySlider
  Testimonials
  Events
  CtaBanner
  Footer
```

## Design fidelity notes

### Colors
- **Primary brand:** `#fd7e14` (orange) — buttons, accents, selection, link hover underlines
- **Body text:** `#6c757d` — paragraphs, form labels
- **Headings:** `#000` — all h1–h5
- **Backgrounds:** white default, `#f8f9fa` for alternating light sections
- **Hero overlay:** `rgba(0,0,0,0.45)` on top of hero image
- **Footer:** dark background (`#222` range)

### Typography
- **Headings + Logo:** Playfair Display (serif, italic for logo "em" tag, bold for headings)
- **Body:** Mukta Mahee (sans-serif, weight 200)
- Google Fonts `<link>` for both families
- Hero heading: 80px desktop / 40px mobile, bold, white, line-height 1

### Buttons
- All buttons: `border-radius: 50px` (pill shape)
- `.btn-primary`: orange bg `#fd7e14`, dark text `#212529`, padding `10px 30px`
- Hero CTA and Reserve Now: larger padding (`py-3 px-5`)
- No box-shadow on focus/active (Bootstrap override)

### Layout
- Container max-width: `1600px` (fluid on smaller screens)
- Hero: full viewport height, min-height 700px
- Welcome: 2-col with image ~55%, text ~45%
- Great Offers: 2 half-width cards side-by-side, alternating image/text order
- Events: 3-col grid (lg-4, md-6, sm-6, col-12)
- Footer: 4-col (md-3 each)

### Animations
- Original uses AOS (Animate On Scroll) — can replicate with Tailwind + intersection observer
- Hero mouse icon uses smoothscroll
- Hamburger toggle with CSS transform transitions

### Images (placeholder strategy)
- Hero: `https://picsum.photos/seed/staycraft-hero/1920/1080`
- Room cards: `https://picsum.photos/seed/staycraft-room1/800/600` and `seed/staycraft-room2/800/600`
- Gallery slider: `https://picsum.photos/seed/staycraft-gal1/1200/800` through gal7
- Testimonial avatars: `https://picsum.photos/seed/staycraft-person1/100/100` etc.
- Blog images: `https://picsum.photos/seed/staycraft-blog1/600/400` etc.

### Footer specifics
- 4 columns: nav links (2 cols), contact info with ionicons (address, phone, email in orange), newsletter signup
- Bottom: copyright left, social icons (TripAdvisor, Facebook, Twitter) right
- Must include Component Dock attribution link (`https://www.componentdock.com/`)

### Accessibility
- Semantic: `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`, `<form>`, `<label htmlFor>`
- Form fields must have associated labels
- Hero image: meaningful alt text
- Hamburger: `aria-label` and `aria-expanded`
- Carousel: keyboard navigable or replace with CSS-only slider
