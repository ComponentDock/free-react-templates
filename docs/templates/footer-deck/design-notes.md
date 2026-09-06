# FooterDeck — Task Outline & Design Notes

## Source

- ColorLib: Bootstrap Footer 13
- URL: https://colorlib.com/wp/template/bootstrap-footer-13/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-13/
- New name: footer-deck
- Description: "Free Feminine Footer Template" — light pink-beige background with salmon-pink accents

## Structure Order (top to bottom)

1. **Content Area** — Full-viewport-height white section with centered heading "Footer #03"
2. **Footer Main** — Two-column layout on `#f8f1f1` background:
   - Left half (col-md-6): Three-column product category links (Men, Women, Kids)
   - Right half (col-md-6): Social icons ("Follow Us") + Newsletter subscribe form ("Subscribe Us")
3. **Footer Copyright** — Full-width row with top border, copyright text + Terms & Conditions + Privacy links

## Section-by-Section Fidelity Notes

### Content Area
- Use `min-h-[70vh]` with `bg-white` and flexbox centering
- H2 text "Footer #03" centered, w-full
- This is just a preview area to show the footer in context

### Footer Main — Left Side (Product Categories)
- `bg-[#f8f1f1] text-sm py-28 px-0` (7em = 28 * 0.25rem)
- Container width, 3-column grid on md+
- **All columns follow the same pattern:**
  - Heading: `text-[#f17e7e] text-sm uppercase tracking-[2px] font-medium mb-7`
  - `<ul>` list, each `<li>` with vertical padding (`py-1`)
  - Links: `text-black/30 hover:text-[#f17e7e] transition-colors block`
- **Column 1 (Men):** Jeans, Jumpers, Leather, Shorts, Boots, Watches
- **Column 2 (Women):** Dresses, Jumpsuits, Shirts, T-shirts, Sweaters, Jackets, Coats
- **Column 3 (Kids):** Shirts, T-shirts, Polos, Sweaters, Sweatshirts, Jackets, Watches

### Footer Main — Right Side (Social + Subscribe)
- Right half, pushed to end with `justify-content-end`
- **Social section:**
  - "Follow Us" heading: same heading style as categories
  - Social icons: `flex gap-2.5 mt-0`, each icon in a `<a>` tag
  - Icon container: `w-10 h-10 bg-black/5 rounded-full flex items-center justify-center text-[#f17e7e] hover:text-white hover:bg-[#f17e7e] transition-colors`
  - Icons: Twitter, Facebook, Instagram, LinkedIn (use lucide-react equivalents)
- **Subscribe section:**
  - "Subscribe Us" heading: same style, with `mt-8` top margin
  - Form group: `flex` layout
  - Input: `flex-1 bg-black/5 border-none outline-none text-black/30 h-[52px] px-4 text-base rounded-none`
  - Submit button: `w-[130px] h-[52px] bg-[#f17e7e] text-white border-none rounded-none text-base font-medium cursor-pointer hover:opacity-90`

### Copyright Bar
- Full-width row below main content with top border
- `border-t border-black/10 mt-5 pt-5`
- Left side (col-md-6 col-lg-8): Copyright text in `text-black/40`
  - "Copyright © [year] All rights reserved | Made with ♥ by" + Component Dock link
- Right side (col-md-6 col-lg-4): `text-right`
  - Two links: "Terms & Conditions" and "Privacy"
  - Links: `text-[#f17e7e] hover:underline`

### Design Tokens for Tailwind @theme

```
@theme {
  --color-brand-salmon: #f17e7e;
  --color-footer-bg: #f8f1f1;
  --color-footer-nav: rgba(0, 0, 0, 0.3);
  --color-footer-copyright: rgba(0, 0, 0, 0.4);
  --color-footer-social-bg: rgba(0, 0, 0, 0.05);
  --font-family-footer: "Poppins", sans-serif;
}
```

### Component Breakdown

1. `FooterDeck.tsx` — Main footer component (all sections)
2. `CategoryColumn.tsx` — Reusable column for product links (heading + link list)
3. `SocialIcons.tsx` — Row of circular social media icons
4. `SubscribeForm.tsx` — Email input + subscribe button
5. `CopyrightBar.tsx` — Bottom bar with copyright + legal links

### Accessibility Notes
- Social icons need `aria-label` (e.g., "Follow us on Twitter")
- Subscribe form needs proper `<label>` or `aria-label` on input
- All links need descriptive text or `aria-label`
- Form submit button needs accessible name

### Placeholder Content
- Images: `https://picsum.photos/seed/footerdeck-<n>/<w>/<h>` if any needed
- Icons: lucide-react (Twitter→Bird, Facebook→Facebook, Instagram→Instagram, Linkedin→Linkedin)
- No images in this template — it's purely text/links/form
