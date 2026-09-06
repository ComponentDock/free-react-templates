# Gourmet — Task Outline & Design Notes

## Source

- ColorLib: Bootstrap Footer 15
- URL: https://colorlib.com/wp/template/bootstrap-footer-15/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-15/
- New name: gourmet

## Structure Order (top to bottom)

1. **Content Area** — Full-viewport-height light section with centered heading "Footer #15"
2. **Footer Header** — Two-column row: logo+subtitle left, social icons right, bottom border
3. **Footer Main** — Four-column row:
   - Col 1: Contact info (address, phone, email) + subscribe form
   - Col 2: Latest News (2 blog post cards with images)
   - Col 3: Best Sellers (product card with star rating)
   - Col 4: Instagram grid (3x2 images)
4. **Footer Copyright** — Full-width row with top border: copyright text left, attribution right

## Section-by-Section Fidelity Notes

### Content Area

- Use `min-h-[70vh]` with `bg-gray-50` and flexbox centering
- H2 text "Footer #15" centered, w-full

### Footer Header

- `bg-[#272727] text-white border-b border-white/10 py-4`
- Two-column flex: logo left, social icons right (flex-end)
- Logo: `<a>` with "Gourmet" in white + "Free Templates" in #f7b633
- Social icons: 3 circular buttons (Twitter, Facebook, Instagram) with bg-white/10

### Footer Main

- `bg-[#272727] text-white py-12`
- Container width, 4-column grid on md+ (`grid grid-cols-1 md:grid-cols-4 gap-8`)
- **Column 1 (Contact + Subscribe):**
  - Heading: "Gourmet" in white, 16px, font-bold
  - Contact list: address, phone, email with golden amber icons
  - Subscribe form: flex row with input (bg-white/5) + submit button (#f7b633, send icon)
- **Column 2 (Latest News):**
  - Heading: "Latest News" in white, 16px, font-bold
  - 2 blog cards: each with placeholder image (picsum.photos seeded), title, meta (date, author, comments)
- **Column 3 (Best Sellers):**
  - Heading: "Best Sellers" in white, 16px, font-bold
  - Product card: placeholder image, title, 5 star icons in #f7b633
- **Column 4 (Instagram):**
  - Heading: "Instagram" in white, 16px, font-bold
  - 3x2 grid of placeholder images (picsum.photos seeded)

### Copyright Bar

- Full-width row below the main content
- `border-t border-white/10 mt-5 pt-4`
- Two-column: copyright text left, "Made with Component Dock" right
- Text color: `rgba(255,255,255,0.5)`

### Design Tokens for Tailwind @theme

```
@theme {
  --color-brand-accent: #f7b633;
  --color-footer-bg: #272727;
  --color-footer-text: rgba(255, 255, 255, 0.5);
  --color-footer-heading: #ffffff;
  --color-footer-icon: #f7b633;
  --color-footer-input-bg: rgba(255, 255, 255, 0.05);
  --color-footer-social-bg: rgba(255, 255, 255, 0.1);
  --color-footer-border: rgba(255, 255, 255, 0.1);
  --font-family-footer: "Poppins", sans-serif;
}
```

### Icons

- Use `lucide-react`: `MapPin`, `Phone`, `Mail`, `Send`, `Calendar`, `User`, `MessageCircle`, `Star`
- Brand icons: inline SVG for Twitter, Facebook, Instagram

### Component Structure

```
apps/gourmet/
  src/
    main.tsx
    App.tsx              — ContentArea + Footer
    index.css            — Tailwind entry + @theme tokens
    components/
      ContentArea.tsx    — 70vh light section with heading
      Footer.tsx         — Composes FooterHeader + FooterMain + FooterCopyright
      FooterHeader.tsx   — Logo + social icons row
      FooterMain.tsx     — Four-column grid
      ContactColumn.tsx  — Contact info + subscribe form
      NewsColumn.tsx     — Blog post cards
      ProductColumn.tsx  — Best sellers card
      InstagramColumn.tsx — Image grid
      FooterCopyright.tsx — Copyright bar
    test/
      setup.ts
```

### Footer Component Dock Attribution

- The copyright text must link to `https://www.componentdock.com/` as "Component Dock"
