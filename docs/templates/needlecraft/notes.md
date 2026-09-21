# Needlecraft — Implementation Notes

Source: ColorLib "Acupuncture" (https://colorlib.com/wp/template/acupuncture/)
Preview: https://preview.colorlib.com/theme/acupuncture/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/acupuncture-free-template.jpg

## Section Order (top → bottom)

1. **Navbar** — fixed/top, brand "Needlecraft." with teal dot, 6 links, hamburger on mobile
2. **Hero** — full-width background image, centered heading + subtext + circular play button
3. **Services Row** — 5 equal columns, circular icons + labels, no gap
4. **About / Why Choose Us** — 2-col: text left (heading, paragraph, CTA button), image right
5. **Service Detail Cards** — 2×2 grid, icon + heading + description per card
6. **Testimonials** — light bg (#f8f9fa), "Testimonials" label + "Happy Customers" heading, 3 quote cards
7. **Blog** — "Blog" label + "News & Tips" heading, 3 post cards (image, meta, heading, text)
8. **CTA Banner** — full-width teal bg, heading + subtext + white button
9. **Footer** — 3-column contact info (phone, address, email), copyright + Terms/Privacy

## Design Notes

- Brand teal: #2fc4b2 — use as `--color-brand` or Tailwind `brand` in `@theme`
- Heading font: Playfair Display (serif) — load via Google Fonts `<link>` in index.html
- Body font: Roboto (sans-serif) — same approach
- Circular icons: 50% border-radius on icon wrappers, use lucide-react for icons (replace flaticon)
- Button primary: teal bg, white text, 7px radius
- CTA button: white bg, teal text (`.btn-white`), 7px radius
- Section spacing: generous vertical padding (equivalent to Tailwind py-20)
- Hero play button: circular, centered, teal accent, icon + "Watch intro video" text
- Placeholder images: use picsum.photos with deterministic seeds
