# Medscope — Implementation TODO & Design Notes

## Template info
- **Name:** medscope
- **Source:** ColorLib "Medcare" — https://colorlib.com/wp/template/medcare/
- **Preview:** https://preview.colorlib.com/theme/medcare/
- **Package:** `@free-react-templates/medscope`

## Section order (implement top-to-bottom)

1. **Navbar** — top utility bar + main nav with logo and links
2. **Hero/Banner** — background image, heading, paragraph, two CTA buttons
3. **Features** — 3-column blue band with white feature cards (icon + title + desc)
4. **Services** — heading + 3-column service cards (icon + title + desc + link)
5. **About** — split layout: image left, text right
6. **Team** — heading + 3-column doctor cards (photo + name + specialty + social)
7. **Appointment/FAQ** — split: FAQ accordion left, booking form right
8. **Testimonial** — carousel with photo + quote + name
9. **Hotline** — centered emergency number on background image
10. **Blog** — heading + 3-column blog cards (image + date + title + excerpt)
11. **Brands** — logo carousel on gray background
12. **Footer** — 4 link columns + newsletter + copyright + social icons

## Design notes

- Brand color: #0051d2 — use as Tailwind custom color in @theme
- Headings: Playfair Display (serif) — load via Google Fonts link in index.html
- Body: Open Sans (sans-serif) — load via Google Fonts link
- Buttons: sharp corners (no border-radius), blue bg, white text
- Cards: subtle shadow `0 10px 20px rgba(221,221,221,0.3)`
- Gray section backgrounds: #f7f7f7
- Light blue backgrounds: #ecf0f8
- Icons: use lucide-react (replace themify-icons + flaticon from original)
- Images: use picsum.photos/seed/medscope-<n>/<w>/<h> placeholders

## Component structure

```
src/
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    Features.tsx
    Services.tsx
    About.tsx
    Team.tsx
    Appointment.tsx
    Testimonial.tsx
    Hotline.tsx
    Blog.tsx
    Brands.tsx
    Footer.tsx
  index.css
  main.tsx
```

## Fidelity notes

- Original uses Bootstrap grid (col-md-4, col-lg-3, etc.) — translate to Tailwind grid/flex
- Original hero has full-width background image with left-aligned text overlay
- Feature section: cards sit on a blue (#0051d2) background band
- Team cards: image at top, text below, social icons (facebook, twitter, linkedin) at bottom
- Appointment form: standard inputs with gray borders (#e8edf1), no rounded corners
- FAQ accordion: Bootstrap collapse → use React state for open/close toggle
- Testimonial: owl-carousel → use simple React carousel or CSS scroll-snap
- Brands: owl-carousel of partner logos → use simple flex row or carousel
- Hotline: background image with centered white text overlay
- Footer: 5-column grid (4 link columns + newsletter), bottom bar with copyright
- All carousel/slider functionality needs React state management (no Bootstrap JS)
