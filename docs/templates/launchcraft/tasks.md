# Launchcraft — Implementation Tasks

Source: ColorLib "Startright" (`startright`)
Preview: https://preview.colorlib.com/theme/startright/

## Structure order (top → bottom)

1. Navbar — logo + nav links + mobile hamburger
2. Hero — dark teal bg, heading, CTA button, illustration in orange wrap
3. Logos strip — "As seen on" + 5 placeholder logos
4. Section 1 — dark teal split: illustration left, content right (bullets + CTA)
5. Section 2 — light bg split: testimonial left, illustration right
6. Stats counter — dark teal bg, 3 counter items
7. Features grid — 2×3 card grid with icons
8. Footer — 4 columns (Help, About, Support, Subscribe) + copyright

## Fidelity notes

- Primary `#f2ad5f` (warm orange) used for image wrap backgrounds and
  feature hover icon bg. Secondary `#10495c` (dark teal) for hero bg,
  section-counter bg, feature hover border, button-secondary.
- Hero is full 100vh with padding-top 12rem desktop / 10rem mobile.
  Image wraps have orange background behind the illustration.
- Section 1 has dark teal bg via pseudo-element (typo in source:
  `secion-1`). Content side: h2 white, bullet items with check marks.
- Section 2 content card has white bg, 4px radius, padding 30px.
- Feature cards: 4px radius, border, hover turns border to `#10495c`
  and icon bg to `#10495c` with `#f2ad5f` icon color.
- Footer: 4 columns (2+2+2+6 col-lg), subscribe form with secondary
  button, copyright with Component Dock link.
- Replace source icon fonts (icomoon/flaticon) with lucide-react.
- Replace source images with picsum.photos placeholders.
- Font: Poppins 400/700 via Google Fonts link.
