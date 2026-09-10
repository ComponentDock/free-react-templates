# Redplate — Implementation Notes

**Source:** ColorLib Caviar — https://preview.colorlib.com/theme/caviar/
**New name:** redplate
**Preview analyzed:** 2026-09-11 via curl (DOM + CSS)

---

## Section order (matches original 1:1)

1. **Navbar** — transparent, becomes dark semi-transparent on scroll (sticky). Brand left, nav links right, search icon.
2. **Hero** — full-viewport bg image, dark overlay (rgba(0,0,0,0.5)), heading + paragraph + CTA button. Social icons on left edge.
3. **About Us** — two alternating rows: [image | text] then [text | image]. Red subheadings ("restaurant style", "our chef").
4. **Menu (Dish Grid)** — dark charcoal bg (#333), centered heading "Special", 3-column dish cards (image + name + price). "View The Menu" CTA.
5. **Awards** — heading left, 5 award images right in a horizontal flex row.
6. **Testimonials** — centered heading, carousel with 3 testimonials (circular avatar, name, quote).
7. **Reservation** — split layout: hero food image left, form right. Fields: date, time, persons, last name, message. CTA "Reserve Your Desk".
8. **Footer** — brand name, copyright with year, Component Dock link.

## Design token mapping

| Original CSS class          | Tailwind equivalent                                     |
| --------------------------- | ------------------------------------------------------- |
| `background-color: #fafafa` | `bg-[#fafafa]` (body)                                   |
| `color: #ff0000`            | `text-red-600` or custom `--color-brand` #ff0000        |
| `background-color: #333333` | `bg-neutral-800` (menu section)                         |
| `.caviar-btn` (square)      | `rounded-none border-0` + custom red circle via `span`  |
| `font-family: 'Open Sans'`  | Tailwind default body / Google Fonts link in index.html |
| `font-family: 'Work Sans'`  | Apply to buttons and accent text via Tailwind config    |
| `rgba(0,0,0,0.85)`          | `bg-black/85` (sticky nav)                              |
| `rgba(0,0,0,0.5)`           | `bg-black/50` (hero overlay)                            |
| `border-radius: 50%`        | `rounded-full` (avatars)                                |

## Component breakdown

```
src/
  App.tsx                  — page composition
  components/
    Navbar.tsx             — transparent → sticky dark
    Hero.tsx               — full-screen bg + overlay + CTA
    About.tsx              — two alternating rows (image/text swap)
    Menu.tsx               — dark section, dish grid, CTA
    Awards.tsx             — heading + horizontal logo row
    Testimonials.tsx       — carousel, circular avatars
    Reservation.tsx        — split layout, form
    Footer.tsx             — brand + copyright + CD link
```

## Fidelity notes

- Original uses Owl Carousel for hero slides and testimonial rotation. Replace with simple React state or a lightweight carousel library (e.g. `embla-carousel-react`).
- Original hero has a secondary nav thumbnail (`hero-slides-nav`) — implement as a smaller preview image in the corner of the hero.
- Original search form is a full-screen overlay triggered by the search icon. Can simplify to a search input in the navbar or skip (not a core section).
- Original uses WOW.js for fade-in animations — implement with CSS `@keyframes` + intersection observer or skip for simplicity.
- Original uses Bootstrap 4 grid — replace with Tailwind's grid/flex utilities.
- Original awards are PNG logo images — use placeholder SVG icons via lucide-react.

## Reference URLs

- Preview: https://preview.colorlib.com/theme/caviar/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg
- CSS: https://preview.colorlib.com/theme/caviar/style.css
