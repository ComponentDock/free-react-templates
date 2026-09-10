# Reckoner — Implementation Tasks & Design Notes

Source: ColorLib "Book Keeping" (https://colorlib.com/wp/template/book-keeping/)
Preview: https://preview.colorlib.com/theme/book-keeping/ (HTTP 404 — screenshot used)
Spec: openspec/specs/template-reckoner/spec.md

## Section order (top to bottom)

1. ContactSubBar — thin white bar with phone + email + social icons
2. Navbar — white full-width, logo (blue circle + dollar sign + "Reckoner"),
   5 nav links (Home, About, Services↓, Blog, Contact), social icon buttons
3. Hero — full-bleed photo background, white heading + subtext + blue CTA
4. AboutUs — two-column: image left, "ABOUT US" label + heading + text + 2×2 bullets right
5. Services — section heading + card grid (icon, title, description per card)
6. Counters — numerical stats (e.g. "250+ Happy Clients", "15+ Years Experience")
7. Testimonials — quote cards with author name, optional avatar
8. Newsletter — heading + email input + submit button
9. Footer — nav links, social icons, copyright, Component Dock link

## Design notes

- Brand color `#3a5c9f` used everywhere: buttons, logo circle, active nav,
  social icons, bullet arrows
- Hero background: full-bleed photo, warm office/desk scene with bokeh lights
- CTA buttons: rounded rectangle (~4px radius), dark blue fill, white text
- Social icons: circular filled blue buttons with white icons
- Typography: Montserrat for headings, Open Sans for body (Google Fonts)
- Generous whitespace between sections, clean corporate aesthetic
- Footer MUST link https://www.componentdock.com/ (Component Dock)

## Fidelity notes

- Match the 2×2 bullet grid layout in About Us (not a simple list)
- Social icons appear in both the contact sub-bar AND the navbar
- Services nav link must show a dropdown arrow indicator
- Hero heading is bold white over the photo — ensure contrast
- Counter numbers should animate/count-up on scroll (intersection observer)
- Newsletter section: simple email input + button, no complex form validation

## Missing from screenshot (inferred from typical ColorLib bookkeeping templates)

- Services section card count: use 3–4 cards (standard for this style)
- Counter stats: use plausible bookkeeping-related numbers
- Testimonials: use 2–3 testimonial cards with generic names
- Partner logos section: optional, skip if not critical for first pass
