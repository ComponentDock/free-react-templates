# Topaz — Task Outline & Design Notes

## Source

- ColorLib: Bootstrap Footer 14
- URL: https://colorlib.com/wp/template/bootstrap-footer-14/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-14/
- New name: topaz

## Structure Order (top to bottom)

1. **Content Area** — Full-viewport-height light section with centered heading "Footer #14"
2. **Footer Main** — Four-column row on dark charcoal background:
   - Col 1: Brand logo + description paragraph + "read more" link
   - Col 2: Categories list (vertical links)
   - Col 3: Tag cloud (bordered tag links)
   - Col 4: Subscribe form (email input + icon submit button) + "Follow us" social icons
3. **Footer Copyright** — Full-width row on darker strip (#1a1a1a) with copyright text and policy links

## Section-by-Section Fidelity Notes

### Content Area
- Use `min-h-[70vh]` with `bg-gray-50` and flexbox centering
- H2 text "Footer #14" centered, w-full
- Section padding: 12em (use `py-48` for Tailwind equivalent)

### Footer Main
- `bg-[#272727] text-white py-28 px-0` (7em = 28 * 0.25rem)
- Container width, 4-column grid on md+ (`grid grid-cols-1 md:grid-cols-4 gap-8`)
- **Column 1 (Brand):**
  - Logo `<a>` tag: `text-white text-[16px] capitalize block mb-4`
  - Description `<p>`: `text-white/30` with placeholder lorem ipsum text
  - "read more" link: `text-[#f7b633]` with arrow icon
- **Column 2 (Categories):**
  - Heading: `text-white text-[13px] uppercase font-semibold mb-8`
  - `<ul>` list, each `<li>` with `py-1`
  - Links: `text-white/70 hover:text-[#f7b633] transition-colors`
  - Items: Buy & Sell, Merchant, Giving back, Help & Support
- **Column 3 (Tag Cloud):**
  - Heading: same style as Categories
  - Tags: `inline-block border border-white/10 text-white px-3 py-1 rounded-sm mr-2 mb-2 hover:border-[#f7b633] hover:text-[#f7b633] transition-colors`
  - Items: dish, menu, food, sweet, tasty, delicious, desserts, drinks
- **Column 4 (Subscribe + Social):**
  - "Subscribe" heading: same style
  - Subscribe form: flex row with input + submit button
    - Input: `bg-white/5 text-white/30 border-none px-4 py-3 flex-1 rounded-l`
    - Submit button: `bg-[#f7b633] text-white w-[52px] h-[52px] rounded-none flex items-center justify-center`
  - "Follow us" heading: same style, mt-8
  - Social icons: `flex gap-3`, each icon `w-10 h-10 flex items-center justify-center border border-white/10 rounded text-white hover:bg-[#f7b633] hover:border-[#f7b633] transition-colors`

### Copyright Bar
- Full-width row below the main content
- Background: `bg-[#1a1a1a]`
- `border-t border-[#1a1a1a] mt-5 py-5`
- Two-column layout: copyright text left, policy links right
- Copyright: `text-white/50 text-sm`
- Policy links: `text-white/50 hover:text-[#f7b633] mr-4`
- Items: Terms, Privacy, Compliances

### Design Tokens for Tailwind @theme

```
@theme {
  --color-brand-accent: #f7b633;
  --color-footer-bg: #272727;
  --color-footer-bottom: #1a1a1a;
  --color-footer-text: rgba(255, 255, 255, 0.3);
  --color-footer-link: rgba(255, 255, 255, 0.7);
  --color-footer-heading: #ffffff;
  --color-footer-copyright-link: rgba(255, 255, 255, 0.5);
  --color-footer-input-bg: rgba(255, 255, 255, 0.05);
  --color-footer-tag-border: rgba(255, 255, 255, 0.1);
  --font-family-footer: "Nunito Sans", sans-serif;
}
```

### Icons
- Use `lucide-react`: `Send` (for subscribe button), `Twitter`, `Facebook`, `Instagram`, `ArrowRight` (for read more)
- Ionicons in the original (`ion-ios-send`, `ion-logo-twitter`, etc.) → replace with lucide-react equivalents

### Component Structure

```
apps/topaz/
  src/
    main.tsx
    App.tsx              — ContentArea + Footer
    index.css            — Tailwind entry + @theme tokens
    components/
      ContentArea.tsx    — 70vh light section with heading
      Footer.tsx         — Composes FooterMain + FooterCopyright
      FooterMain.tsx     — Four-column dark grid
      FooterCopyright.tsx — Two-column copyright row
      SubscribeForm.tsx  — Email input + submit button
      TagCloud.tsx       — Bordered tag links
      SocialIcons.tsx    — Horizontal icon list with borders
    test/
      setup.ts
```

### Footer Component Dock Attribution
- The copyright text or an additional line must link to `https://www.componentdock.com/` as "Component Dock"
