# Cryptonex — Design Notes

Recreation of ColorLib **Coinbuzz** (cryptocurrency/business template).
Source: https://colorlib.com/wp/template/coinbuzz/

## Visual Design (from screenshot analysis)

- **Aesthetic**: Professional cryptocurrency/blockchain business landing page
- **Color scheme**: Orange (#ff7700) primary accent on dark charcoal (#242424) and white backgrounds
- **Typography**: Roboto for headings/nav, Open Sans for body text — clean, modern sans-serif
- **Hero**: Full-width slider with composite background (city skyline + crypto network pattern + Bitcoin symbols)
- **Layout**: Standard Bootstrap grid, generous padding, section-based with alternating dark/light backgrounds
- **Overall feel**: Corporate crypto agency — trustworthy, tech-forward, warm urban tones from sunset imagery

## Token mapping to Tailwind

```css
@theme {
  --color-primary: #ff7700;
  --color-primary-light: #ff8d29;
  --color-dark: #242424;
  --color-light-bg: #f4f4f4;
  --color-text: #333;
  --color-text-light: #616162;
  --color-border: #eaeaea;
}
```

Fonts loaded via Google Fonts link in index.html:
- Roboto (300, 400, 500, 700)
- Open Sans (300, 400, 600, 700)

## Placeholder strategy

- Hero/slider images: `https://picsum.photos/seed/cryptonex-hero/1920/800`
- Featured card images: `https://picsum.photos/seed/cryptonex-feat-{1,2,3}/400/300`
- About image: `https://picsum.photos/seed/cryptonex-about/600/400`
- Team photos: `https://picsum.photos/seed/cryptonex-team-{1,2,3,4}/300/300`
- Testimonial avatars: `https://picsum.photos/seed/cryptonex-test/200/200`
- Blog images: `https://picsum.photos/seed/cryptonex-blog-{1,2,3}/400/250`
- Contact bg: `https://picsum.photos/seed/cryptonex-contact/1920/800`
- Decorative images: use CSS gradients or abstract SVG shapes

## Key design patterns

1. **Two-tier header**: Info bar (white) + nav bar (dark) — common in crypto templates
2. **Orange CTA accent**: Every actionable element uses #ff7700
3. **Dark sections**: #242424 for contrast (nav, special CTA, team CTA, investments, footer)
4. **Light sections**: #f4f4f4 for alternating bg (about bitcoin, market resources)
5. **Decorative lines**: Small line images under section titles (use CSS border-bottom instead)
6. **Counter stats**: Animated number counters (use simple static numbers in React)
7. **Chart area**: Market resources chart (use a simple SVG bar chart or placeholder)
