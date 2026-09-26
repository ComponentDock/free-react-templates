# Lookwell — Design Notes

Recreation of ColorLib "The Look" (thelook) — dark photography gallery template.

## Section order (fidelity to original)

1. Header/Navbar
2. Hero Slider (3 slides, full-width, dark overlay)
3. Gallery Section (2-col: quote left + 6-item grid right)
4. Blog Section (2 cards, light background)
5. Contact Section (dark background, heading + CTA)
6. Footer (dark, copyright + Component Dock)

## Structure notes

### Header
- Logo left, horizontal nav right
- Transparent background over hero, solid on scroll (sticky behavior)
- Mobile: hamburger menu

### Hero Slider
- Full-width, 3 slides auto-advancing
- Each slide: background image with dark semi-transparent overlay (opacity ~0.5)
- Centered text: title (large), subtitle (uppercase, small), artist name + dates, pill-shaped CTA
- Slider dots/arrows for manual navigation

### Gallery Section
- White background
- Left column (~40%): editorial quote in italic/large + paragraph text
- Right column (~60%): 3x2 grid of gallery items
- Each item: image (aspect-ratio square-ish), title, artist, "view gallery" link
- Bottom right: "see all galleries" text link

### Blog Section
- Light gray background (#f6f7f9)
- Section title centered: "Latest from the blog"
- 2 blog cards in a row (50/50)
- Each card: image top, category tag (small caps), title, date, excerpt, "Read More" link

### Contact Section
- Dark background (#081624)
- Title "Get in touch" centered
- Description paragraph centered
- "send message" button: pill-shaped, white border, uppercase

### Footer
- Very dark background (#222222)
- Copyright line with "Component Dock" link

## Design tokens for Tailwind @theme

```css
@theme {
  --color-primary: #081624;
  --color-secondary: #222222;
  --color-surface: #f6f7f9;
  --color-muted: #828282;
  --color-body: #515151;
  --font-family-sans: "Lato", sans-serif;
}
```

## Pill button pattern
- border-radius: 60px
- border: 2px solid (white on dark, dark on light)
- text-transform: uppercase
- padding: 10px 30px
- font-weight: 700
