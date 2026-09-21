# Banknote — Implementation Todo & Design Notes

## Source

- **ColorLib name:** Banker
- **Slug:** `banker`
- **Preview URL:** https://preview.colorlib.com/theme/banker/
- **New name:** `banknote`
- **App folder:** `apps/banknote/`
- **Package:** `@free-react-templates/banknote`

## Section Order (must match DOM)

1. `Navbar` — sticky, transparent overlay on hero, "Banknote." logo, multi-level dropdown, social icons, mobile off-canvas menu
2. `Hero` — full-viewport bg image, owl-carousel slides (3 headings), mouse scroll indicator
3. `Features` — 3-column: icon + title + text cards
4. `AboutSignup` — two-column: circular image left, heading + check list + email form right
5. `AboutUs` — two-column: centered title + lead, then image + "We Solve Your Financial Problem"
6. `Team` — 4-col grid, 8 members, hover social overlay
7. `Gallery` — filter buttons (All/Events/Party/Holidays), 12-item grid, hover search overlay
8. `HowItWorks` — 3-image carousel + 3-step text carousel side by side
9. `Services` — bg-light, 6 service cards (3×2), icon + title + text + "Learn More"
10. `Testimonials` — carousel of 4 quotes with person images
11. `Pricing` — bg-light, 3 cards (Basic/Premium popular/Professional), check/cross lists
12. `FAQ` — bg-light, 2-column, 8 Q&A items
13. `AboutFeatures` — circular image left, 2 feature items right (Bank Loan, Banking Consultation)
14. `Blog` — 3 post cards (image, title, meta, excerpt, "Continue Reading...")
15. `Contact` — bg-light, 3 contact info items + contact form (5 fields)
16. `Footer` — dark #343a40, About Us + Quick Links + Social + Newsletter + Copyright

## Design Token Map (Tailwind @theme)

```css
@theme {
  --color-brand: #fd7e14;
  --color-brand-dark: #343a40;
  --color-check-green: #71bc42;
  --font-family-sans: "Open Sans", ...;
}
```

## Fidelity Notes

- Hero: full-viewport height, overlay, owl-carousel with auto-play (3 slides). Text is white, uppercase h1 at 4rem (2rem mobile).
- Navbar: transparent bg over hero, becomes sticky on scroll. Dropdown border-top 2px solid brand. Mobile: off-canvas right slide.
- Team cards: `figure` with hover overlay (social icons). `circle-bg` class = 50% border-radius on images.
- Gallery: isotope filter pattern. Use React state for filter, CSS grid for layout.
- How It Works: synced carousels (image + text). Prev/next arrows with custom icons.
- Pricing: popular card has `pricing-popular` class (likely orange border or highlight).
- Testimonials: owl-carousel with centered text and half-width person image.
- FAQ: simple 2-column layout, no accordion toggle in original (static text).
- Contact form: inline layout for first/last name row, full-width email/subject/message rows.
- Footer: dark bg, 3-column top row, copyright bottom. Newsletter: input + button.
- All buttons: border-radius 30px (pill), bg #fd7e14, white text.
- Form controls: border-radius 30px, height 43px.
- Placeholder images: `picsum.photos/seed/banknote-{1..12}/800/600` pattern.
- No ColorLib attribution in app code — only in spec + TEMPLATES.md.
- Footer MUST link https://www.componentdock.com/ (branded as "Component Dock").
