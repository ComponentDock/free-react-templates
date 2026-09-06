# Plinth — Implementation Notes

## Source

ColorLib "Bootstrap Footer 01": https://colorlib.com/wp/template/bootstrap-footer-01/
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-01/

## Section Order (from reference)

1. **Content placeholder** — light background, 70vh, "Footer #1" text
   (demonstration only; implementer may omit or keep as minimal hero)
2. **CTA banner** — full-width lavender strip with heading + button
3. **Footer grid** — five columns: logo/copyright, Customers, Company,
   Further Information, Follow us (social icons)

## Component Structure

```
src/App.tsx
  ContentPlaceholder.tsx   — light bg, 70vh hero/demo area
  CtaBanner.tsx            — lavender CTA strip (heading + subheading + button)
  Footer.tsx               — dark navy footer wrapper
    FooterGrid.tsx          — 5-column responsive grid
      LogoColumn.tsx        — logo text + copyright
      LinkColumn.tsx        — reusable column (heading + unordered list of links)
      SocialColumn.tsx      — "Follow us" with circular icon buttons
```

## Design Notes

### CTA Banner
- Flex row: text left, button right (`ml-auto`)
- Background: `#8186d5` (lavender/periwinkle)
- Shadow: `box-shadow: -20px -20px 0 0 rgba(52,58,64,0.2)`
- Position: `position: relative; top: -150px` (overlaps above footer)
- h2: "Ready for a next project?" — white, no bottom margin
- h3: "Let's get started!" — white/dark, 20px font
- Button: Bootstrap dark class, `rounded-0 py-3 px-5`, "Contact us"

### Footer Grid
- Background: `#141d2a` (dark navy)
- Padding: `7rem 0` vertical
- Color: white text throughout
- 5 columns via Bootstrap grid (`col-sm` for first 4, `col-md-3` for last)
- Columns:
  1. Logo (uppercase, 20px, letter-spacing 0.1rem) + copyright (gray)
  2. "Customers" — Buyer, Supplier
  3. "Company" — About us, Careers, Contact us
  4. "Further Information" — Terms & Conditions, Privacy Policy
  5. "Follow us" — 5 social icons (Facebook, Twitter, LinkedIn, Medium, Telegram)

### Social Icons
- 40x40px circles (`border-radius: 50%`)
- Background: `#8186d5`
- White icons, centered via absolute positioning + translate
- Use `lucide-react` icons: Facebook, Twitter, Linkedin, Rss, Send

### Typography & Tokens for Tailwind

```css
/* index.css @theme */
@theme {
  --color-footer-bg: #141d2a;
  --color-cta-bg: #8186d5;
  --color-footer-muted: #666873;
  --font-family-body: "Roboto", system-ui, sans-serif;
}
```

### Link Hover
- Transition: `0.3s all ease`
- Default: `#666873` (muted gray)
- Hover: `#fff` (white)

## Fidelity Checklist

- [ ] Match section order exactly: CTA → footer grid
- [ ] CTA banner positioned with negative top offset (-150px)
- [ ] CTA shadow: `-20px -20px 0 0 rgba(52,58,64,0.2)`
- [ ] Footer bg exactly `#141d2a`
- [ ] CTA bg exactly `#8186d5`
- [ ] Social icon circles exactly 40x40 with 50% radius
- [ ] Button corners sharp (rounded-0)
- [ ] Roboto font family via Google Fonts link
- [ ] Link hover: gray → white with 0.3s transition
- [ ] Copyright year placeholder (current year)
- [ ] Footer links to componentdock.com (not ColorLib)
- [ ] No ColorLib references in any app code or comments
