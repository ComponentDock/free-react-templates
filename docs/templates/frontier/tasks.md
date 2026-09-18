# Frontier — Implementation Tasks

**Source:** ColorLib Martine → https://preview.colorlib.com/theme/martine/
**New name:** frontier
**Stack:** Vite + React 19 + Tailwind 4 + TypeScript

## Section order (matches original 1:1)

1. TopBar — phone address + social icons (Facebook, Twitter, Instagram, Google+)
2. Navbar — logo "Frontier", nav links with dropdowns, sticky on scroll
3. Hero — full-width banner image, centered headline + subtitle + CTA
4. BookingForm — white card overlapping hero, tabs (Booking / Restaurant), form fields
5. TopPlaces — "Top Places to visit" heading, 4-card grid with hover overlays
6. UpcomingEvent — 3 event cards (destination, date, cost, organizer, rating)
7. Hotels — "Top Hotel & Restaurants" heading, 3 hotel cards with images
8. Testimonials — "What they said" heading, slider/carousel of quotes
9. Services — "We offered best services" heading, 4 service cards (icons + descriptions)
10. Footer — 3 columns (destinations, newsletter, contact) + copyright + ComponentDock link

## Design notes

- **Colors:** Primary orange #fe5c24, secondary blue #2493e0, dark navy #0c3e72,
  cream #f0eed4, white #fff, light bg #f9f9ff
- **Font:** Open Sans (via Google Fonts link in index.html)
- **Buttons:** Flat (border-radius: 0), padding 13px 30px. Blue primary, orange accent.
- **Hero:** Background image (use picsum.photos placeholder), height ~880px desktop / 650px mobile
- **Booking form:** margin-top: -80px to overlap hero. White background. Two tabs.
- **Section padding:** 120px top/bottom for section_padding class
- **Card hover overlay:** Navy #0c3e72 with opacity transition
- **Responsive:** Single-column on mobile, hamburger nav, stacked footer

## Component outline

```
src/
  App.tsx                  # Composes all sections in order
  components/
    TopBar.tsx             # Address + social icons row
    Navbar.tsx             # Logo + nav links + dropdowns + sticky
    Hero.tsx               # Banner image + headline + subtitle + CTA button
    BookingForm.tsx        # White card, tabs, form fields, submit
    TopPlaces.tsx          # Heading + 4-card grid with hover overlays
    UpcomingEvent.tsx      # Heading + 3 event cards
    Hotels.tsx             # Heading + 3 hotel cards
    Testimonials.tsx       # Heading + carousel of quotes
    Services.tsx           # Heading + 4 service cards with icons
    Footer.tsx             # 3-column footer + copyright + ComponentDock link
  index.css                # Tailwind entry + @theme tokens
  main.tsx                 # Entry point
```

## Fidelity checklist

- [ ] Section order matches original (1:1)
- [ ] Brand colors match extracted tokens
- [ ] Open Sans font loaded via Google Fonts
- [ ] Buttons are flat (no border-radius)
- [ ] Booking form overlaps hero (negative margin)
- [ ] Card hover overlays use navy #0c3e72
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Responsive: hamburger nav, stacked layout on mobile
- [ ] Placeholder images from picsum.photos
