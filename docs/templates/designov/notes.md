# Designov — Prep Notes

Source: ColorLib Calvin (https://colorlib.com/wp/template/calvin/)
Preview: https://preview.colorlib.com/theme/calvin/

## Section Order (implementation sequence)

1. **Navbar** — sticky, transparent, logo + nav + CTA pill button
2. **Hero** — split: person illustration left, headline + subtitle right
3. **About Info Bar** — horizontal strip below hero with contact details
4. **Services** — 2×2 grid, icon + title + description + browse-btn
5. **Gallery** — 2×2 image grid with hover overlay + "More Work" button
6. **About Me** — split: text left, 3 animated progress bars right
7. **Brand Logos** — horizontal scrolling logo carousel
8. **Testimonials** — centered slider: quote, avatar, name, role
9. **Blog** — horizontal card slider: image, category, date, title
10. **Footer** — CTA band (logo, text, socials, buttons) + bottom bar

## Fidelity Notes

### Navbar
- Transparent background, becomes solid on scroll (sticky)
- Logo on left, 5 nav links center-right, "Let's Talk" pill button far right
- Mobile: hamburger menu

### Hero
- Full viewport height (`slider-height d-flex align-items-center`)
- Left 1/3: person illustration image (`employee` div)
- Right 2/3: `<h1>` with name + role, `<p>` subtitle
- Background: light/solid color

### About Info Bar
- Thin horizontal strip directly below hero
- 3 info blocks: "Design For" specialization, Phone number, Email with icon
- Background matches hero or slightly different

### Services ("My Experties")
- 2×2 grid (`col-lg-6 col-md-6`)
- Each card: SVG icon (services1–4.svg), `<h5>` title, `<p>` description, `<a class="browse-btn">` link
- Background: `#f7f7f7` light grey
- Cards have no border-radius (flat)

### Gallery ("My Works")
- 2×2 grid of background-image divs
- Hover overlay with category label text
- "More Work" pill button centered below
- Use `picsum.photos` for placeholder images

### About Me
- Left column: heading + 2 paragraphs
- Right column: 3 progress bars with labels and percentage spans
  - UI Design: 60%, User Experience: 89%, Illustration: 95%
- Animated fill (use CSS transitions or Tailwind animate)

### Brand Logos
- Horizontal scrolling row of 6+ partner logos
- Simple image carousel (can use CSS scroll-snap or auto-scroll)

### Testimonials
- Centered layout, large quote text
- Avatar image + author name + role below
- Slider for multiple testimonials (can simplify to single + manual navigation)

### Blog ("Latest News")
- Horizontal slider of 3 blog post cards
- Each: image, category badge (`location-btn`), date/author line, title link
- Use `picsum.photos` for placeholder images

### Footer
- CTA "Want to Work" band: logo, paragraph, social icons (5), two buttons
- Bottom bar: copyright + nav links
- MUST link to `https://www.componentdock.com/`

## Design Tokens Summary

- Brand: `#FF8553` (orange)
- Fonts: DM Sans (body), Roboto Condensed (headings)
- Button radius: 25–30px (pill)
- Section bg: `#f7f7f7`
- Text: `#000000` primary, `#635c5c` muted
