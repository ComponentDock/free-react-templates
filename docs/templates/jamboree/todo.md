# Jamboree — Implementation Tasks & Design Notes

**Source:** ColorLib "Eventasia" (https://colorlib.com/wp/template/eventasia/)
**Preview:** https://preview.colorlib.com/theme/eventasia/
**New name:** Jamboree
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order

1. **Navbar** — "Jamboree" logo, nav: Home, Speaker, Upcoming Event
2. **Hero** — parallax bg, brownish overlay, heading, countdown, gradient CTA
3. **Facilities** — 6 columns with icons and headings
4. **Speakers** — grid of speaker cards with gradient hover overlay
5. **Calendar** — calendar widget + upcoming event cards with dark overlay
6. **Events** — event list with image, date badge, title, description
7. **Footer** — newsletter, social links, copyright with Component Dock link

## Design notes

- **Primary gradient** — `#ca2dff` → `#8e96f8` → `#52fff1` for buttons and accents.
- **Purple accent `#C732FF`** — for selections, hover states, footer links.
- **Font: Poppins** — load via Google Fonts. Weights: 300, 400, 500, 600, 700.
- **Banner overlay** — `#7f3f3b` at 0.3 opacity (warm brownish).
- **Speaker hover** — gradient overlay fades in on hover.
- **Calendar** — dark overlay over bg image, calendar widget, event cards.
- **Placeholder images** — `https://picsum.photos/seed/jamboree-<n>/<w>/<h>`.

## Fidelity checklist

- [ ] Match section order exactly
- [ ] Match gradient: purple-blue-cyan for buttons/accents
- [ ] Match hero: parallax bg, countdown, gradient CTA
- [ ] Match speakers: gradient hover overlay
- [ ] Match calendar: dark overlay, widget, event cards
- [ ] Match events: date badges, image + text layout
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
