# FooterWoven — Implementation Notes

Source: ColorLib Bootstrap Footer 17
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-17/

## Structure order (top to bottom)

1. **Preview section** — light background, centered "Footer #07" heading, ~12em vertical padding
2. **Footer** — dark `#121212` background, 7em vertical padding, all centered:
   - Brand heading (h2, white, 30px, bold) — replace "Colorlib.com" with project name
   - Navigation menu — horizontal row of uppercase links with letter-spacing
   - Social icons — circular buttons with green `#a3de83` border (Twitter, Facebook, Instagram → use lucide-react equivalents)
   - Copyright line — semi-transparent white text, heart icon, Component Dock link

## Section-by-section fidelity notes

### Preview section
- `ftco-section` class: padding `12em 0`, light background (inherited from body `#fff`)
- Centered h2 "Footer #07" — in our implementation this can be a demo heading or omitted if the template is just the footer component
- Use generous vertical padding to match the spacious feel

### Footer
- **Background:** `#121212` (very dark, near-black) — NOT pure black
- **Typography:** Poppins font family, weights 300-900 loaded via Google Fonts
- **Brand heading:** h2, `color: #fff`, `font-size: 30px`, `font-weight: 700`, `margin-bottom: 30px`
- **Navigation:** `.menu` class, links with `color: rgba(255,255,255,0.6)`, `text-transform: uppercase`, `letter-spacing: 1px`, `margin: 0 10px`. Menu has `margin-bottom: 30px`
- **Social icons:** `40px × 40px` circles (`border-radius: 50%`), `border: 1px solid #a3de83`, transparent background. Icons inside are `20px` font-size, centered via absolute positioning + transform. Hover: `color: #fff` with `0.3s` transition
- **Copyright:** `color: rgba(255,255,255,0.3)`, includes heart icon (ion-ios-heart → use lucide-react Heart). Replace Colorlib attribution with Component Dock link

## Key implementation decisions

- Use `lucide-react` icons: `Twitter`, `Facebook`, `Instagram` (or `Heart` for copyright)
- Replace ColorLib brand name with project name or generic brand
- Footer attribution MUST link to `https://www.componentdock.com/` (branded "Component Dock")
- Use `cn()` from `packages/ui` for class composition
- Placeholder images not needed (this is a footer-only template with no images)

## Component breakdown

- `src/App.tsx` — composes PreviewSection + Footer
- `src/components/PreviewSection.tsx` — demo heading area
- `src/components/Footer.tsx` — the main footer component
  - Sub-components or inline: BrandHeading, NavigationMenu, SocialIcons, CopyrightLine

## Design tokens for Tailwind @theme

```
--color-brand: #a3de83;
--color-footer-bg: #121212;
--color-footer-text: rgba(255, 255, 255, 0.3);
--color-footer-menu: rgba(255, 255, 255, 0.6);
--color-footer-heading: #ffffff;
--font-family-heading: "Poppins", Arial, sans-serif;
```
