# Lendwise — Implementation Notes

## Source

- ColorLib template: Credit
- Preview URL: https://preview.colorlib.com/theme/credit/
- Source page: https://colorlib.com/wp/template/credit/
- Category: Financial / Loan Company

## Section order (implement in this order)

1. TopHeader
2. Navbar
3. HeroSlider
4. FeaturesArea
5. CTAParallax
6. CTAInlineBar
7. ServicesArea
8. MiscellaneousArea
9. NewsletterArea
10. Footer

## Design notes per section

### TopHeader
- Navy blue bg `#003679`, white text.
- Flex row: logo left, contact info (address + email with icons) right.
- Use lucide-react MapPin and Mail icons.
- Container max-width, small padding.

### Navbar
- White bg, sticky (`sticky top-0 z-50`).
- Logo on left (text-based "Lendwise" with gold dot accent).
- Nav links: Home, About, Services, Portfolio, Blog, Contact.
- Pages dropdown (simple state toggle).
- Portfolio mega menu (optional, can simplify to dropdown).
- Phone number right-aligned.
- Mobile: hamburger toggle, off-canvas slide.

### HeroSlider
- Full-width carousel, auto-plays with indicators.
- Each slide: bg image with `bg-cover bg-center` + overlay `bg-black/60`.
- Centered text: subheading (small, uppercase), heading with `<span className="text-[#ffbb38]">loan</span>` accent, paragraph, gold pill-ish button (5px radius).
- State-managed carousel (no external dependency).

### FeaturesArea
- 4-column responsive grid.
- Column 1: section heading with decorative line, paragraph, "Discover" gold button.
- Columns 2-4: image cards with overlay heading text.
- Use picsum.photos/seed/lendwise-feat-N/400/300 for images.

### CTAParallax
- Split layout: left image (parallax effect via `bg-fixed bg-cover`), right content.
- Right: section heading with decorative line, description, 3 skill circles.
- Skill circles: use SVG circular progress or a simple radial design.
- Skills: 90% Energy, 75% Power, 97% Resource.
- "Read More" navy button.

### CTAInlineBar
- Full-width navy bg `#003679`, white text.
- Flex row: heading left, gold button right.
- Simple container, vertical centering.

### ServicesArea
- Section heading centered with decorative line.
- 3×2 grid of service cards.
- Each: icon (lucide-react) + heading + paragraph.
- Icons: Coins, Zap, FileCheck, ShieldCheck, TrendingUp, PiggyBank.
- Services: All the loans, Easy and fast answer, No additional papers, Secure financial services, Good investments, Expert guidance.

### MiscellaneousArea
- Light grey bg `#f2f4f6` (use `bg-gray-100`).
- 3-column layout.
- Left: promo/ad image.
- Center: "Get in touch" heading, contact items (address, phone, email) with lucide-react icons.
- Right: "The news" heading, 3 news cards (thumbnail + title + meta).
- Use picsum.photos/seed/lendwise-news-N/100/100 for thumbnails.

### NewsletterArea
- Parallax background image, overlay, centered content.
- Heading "Subscribe to our newsletter".
- Email input + "Subscribe" button (gold bg).
- Description text below.
- `bg-fixed bg-cover` for parallax effect.

### Footer
- White bg, section padding.
- 4-column widget grid.
- Columns: About Us links, Solutions links, Our Loans links, Latest News (3 items).
- Bottom copyright bar: logo + copyright text.
- Link to https://www.componentdock.com/.

## Component file structure

```
apps/lendwise/
  src/
    App.tsx                    — compose all sections
    index.css                  — Tailwind entry + @theme tokens
    main.tsx                   — entry (excluded from coverage)
    components/
      TopHeader.tsx
      Navbar.tsx
      HeroSlider.tsx
      FeaturesArea.tsx
      CTAParallax.tsx
      CTAInlineBar.tsx
      ServicesArea.tsx
      MiscellaneousArea.tsx
      NewsletterArea.tsx
      Footer.tsx
    test/
      setup.ts
  index.html
  package.json
  vite.config.ts
```

## Tailwind theme tokens (index.css @theme)

```css
@theme {
  --color-navy: #003679;
  --color-gold: #ffbb38;
  --color-body-text: #838383;
  --color-heading-text: #000000;
  --color-light-bg: #f1f7f9;
  --color-light-grey: #f2f4f6;
}
```
