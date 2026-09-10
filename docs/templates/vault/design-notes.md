# Vault — Implementation Notes

## Source
- ColorLib template: Bitcoin
- Preview: https://preview.colorlib.com/theme/bitcoin/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bitcoin-free-template.jpg

## Section Order (must match original 1:1)

1. **Navbar** — Fixed, transparent over hero, scrolls to dark semi-transparent.
   Logo with orange left border. Links: Home, Convert, Feature, Price, Blog.
   Mobile: hamburger toggle with slide-in dark menu.

2. **Hero Banner** — Full-width background image with dark overlay (rgba(4,9,30,0.85)).
   Centered: large h1 with price (100px desktop, white, 700 weight), subtitle,
   "Buy Bitcoin" button (square corners 3px, orange gradient bg).

3. **Currency Converter** — Overlaps hero by -105px, z-index 2.
   Yellow-to-orange gradient background. Heading + form inputs (transparent bg,
   white text, gold border-color #f9c065). White "Calculate" button (dark text).

4. **Simple Services** — Three centered cards on white background.
   Icons (lucide-react), h4 headings, paragraph descriptions.
   Section gap padding (120px top/bottom).

5. **About Us** — Dark background (#222). Two columns:
   Left: image carousel (use static image placeholder instead of carousel).
   Right: white h1 heading, white body text.

6. **Service Area / Features** — Four icon-based feature cards.
   Colored icons, h4 headings, paragraphs. Hover turns heading orange (#f78f3d).

7. **Stats** — Light bg (#f9f9ff). Heading "Ups and Downs of Bitcoin (Realtime)".
   Descriptive text. Gradient-bordered CTA button.

8. **Call to Action** — Yellow-to-orange gradient background. Centered.
   "Huge Transaction in last Week" heading. White "Buy Bitcoin Now!" button.

9. **Pricing** — Three cards in a row. Each: light header (#fbfcff),
   body (#f9f9ff), coin name, description, large price (60px, light weight),
   dark "Get Started" button. Hover: body turns gradient, button turns gold.

10. **Blog** — Three cards. Image (use picsum.photos), h4 heading, paragraph,
    author row (avatar + name + date). Hover turns heading orange.

11. **Footer** — Dark navy (#04091e). Four columns:
    About Us text, Newsletter form (rounded inputs, gradient submit),
    Top Products links, Social icons. Bottom bar: copyright + social icons.
    Footer MUST link https://www.componentdock.com/.

## Design Token Mapping (Tailwind @theme)

```css
@theme {
  --color-brand: #f78f3d;
  --color-brand-light: #f9c065;
  --color-dark: #04091e;
  --color-dark-alt: #222;
  --color-light: #f9f9ff;
  --color-card-header: #fbfcff;
  --color-overlay: rgba(4,9,30,0.85);
  --color-text: #777;
  --color-heading: #222;
  --color-accent-cyan: #4cd3e3;
  --color-accent-blue: #38a4ff;
  --color-accent-green: #73fbaf;
  --color-accent-pink: #e66686;
  --color-accent-indigo: #6382e6;
  --color-accent-purple: #a367e7;
  --color-accent-yellow: #f4e700;
  --color-accent-red: #f44a40;
  --color-accent-gold: #ca9814;
  --color-social-bg: #111111;
  --color-footer-link: #777777;
  --font-family-poppins: "Poppins", sans-serif;
}
```

## Placeholder Images

- Hero: Use a crypto/tech themed picsum image: `https://picsum.photos/seed/vault-hero/1920/1080`
- About carousel: `https://picsum.photos/seed/vault-about/600/400`
- Blog posts: `https://picsum.photos/seed/vault-blog-1/400/250`, `-2`, `-3`

## Component Breakdown

```
src/
  main.tsx
  App.tsx           — Composes all sections in order
  index.css         — Tailwind entry + @theme tokens
  components/
    Navbar.tsx      — Fixed nav, scroll effect, mobile menu
    Hero.tsx        — Banner with overlay, price, CTA
    Converter.tsx   — Currency converter form with gradient bg
    Services.tsx    — Three service cards
    About.tsx       — Dark section with image + text
    Features.tsx    — Four feature cards with colored icons
    Stats.tsx       — Stats/chart area
    CallToAction.tsx — Gradient CTA section
    Pricing.tsx     — Three pricing cards with hover
    Blog.tsx        — Three blog post cards
    Footer.tsx      — Dark footer with newsletter + social
```

## Fidelity Notes

- The original uses Bootstrap grid (`.row`, `.col-lg-4`, etc.). Recreate
  with Tailwind grid/flex utilities.
- The original uses owl-carousel for the about section images. Replace with
  a simple static image or a minimal CSS-only carousel.
- The original uses Linearicons and Font Awesome for icons. Replace all with
  lucide-react.
- The original uses jQuery for scroll effects and mobile nav toggle. Replace
  with React state + useEffect for scroll detection, and useState for
  mobile menu toggle.
- Button gradient: use `bg-gradient-to-t from-[#f88845] to-[#f3c400]` or
  define as a CSS custom property.
- The converter form inputs are transparent with white text on the gradient
  background — ensure contrast is maintained.
