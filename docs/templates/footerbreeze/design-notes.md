# FooterBreeze — Task Outline & Design Notes

## Source

- ColorLib: Bootstrap Footer 07
- URL: https://colorlib.com/wp/template/bootstrap-footer-07/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-07/
- New name: footerbreeze

## Structure Order (top to bottom)

1. **Content Area** — Full-viewport-height light section with centered heading "Footer #7"
2. **Footer Main** — Four-column row on black background:
   - Col 1: Brand logo + description paragraph
   - Col 2: Primary nav links (vertical)
   - Col 3: Secondary nav links (vertical)
   - Col 4: Legal nav links + social icons + Contact Us CTA button
3. **Footer Copyright** — Full-width centered row with top border

## Section-by-Section Fidelity Notes

### Content Area
- Use `min-h-[70vh]` with `bg-gray-50` and flexbox centering
- H2 text "Footer #7" centered, w-full

### Footer Main
- `bg-black text-[#777] py-28 px-0` (7rem = 28 * 0.25rem)
- Container width, 4-column grid on md+
- **Column 1 (Brand):**
  - Logo `<a>` tag: `text-white text-[1.5rem] block mb-4`
  - Description `<p>`: `text-[#777]` with placeholder lorem ipsum text
- **Column 2 (Primary Nav):**
  - `<ul>` list, each `<li>` `mb-2.5`
  - Links: `text-gray hover:text-white transition-colors`
  - Items: Home, About Us, Portfolio, Services, Contact
- **Column 3 (Secondary Nav):**
  - Same styling as primary nav
  - Items: Clients, Team, Career, Testimonials, Journal
- **Column 4 (Legal + Social + CTA):**
  - Legal nav links: same vertical style
  - Items: Privacy Policy, Terms & Conditions, Partners
  - Social icons: `flex gap-1 mt-4`, each icon `text-gray hover:text-white`
  - CTA button: `bg-[#e42c64] text-white rounded-[30px] px-5 py-2.5 border-none`

### Copyright Bar
- Full-width centered row below the main content
- `border-t border-[#404040] mt-5 pt-5 text-center`
- `<p><small>` with copyright text

### Design Tokens for Tailwind @theme

```
@theme {
  --color-brand-cta: #e42c64;
  --color-footer-dark-bg: #000000;
  --color-footer-dark-text: #777777;
  --color-footer-dark-border: #404040;
  --color-footer-dark-nav: #808080;
  --font-family-footer: "Poppins", sans-serif;
}
```

### Icons
- Use `lucide-react`: `Instagram`, `Twitter`, `Facebook`, `Dribbble` (or closest), `Pin` (for Pinterest)

### Component Structure

```
apps/footerbreeze/
  src/
    main.tsx
    App.tsx              — ContentArea + Footer
    index.css            — Tailwind entry + @theme tokens
    components/
      ContentArea.tsx    — 70vh light section with heading
      Footer.tsx         — Composes FooterMain + FooterCopyright
      FooterMain.tsx     — Four-column dark grid
      FooterCopyright.tsx — Centered copyright row
      SocialIcons.tsx    — Reusable horizontal icon list
    test/
      setup.ts
```

### Footer Component Dock Attribution
- The copyright text or an additional line must link to `https://www.componentdock.com/` as "Component Dock"
