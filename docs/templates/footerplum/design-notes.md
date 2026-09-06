# FooterPlum — Task Outline & Design Notes

## Source

- ColorLib: Bootstrap Footer 19
- URL: https://colorlib.com/wp/template/bootstrap-footer-19/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-19/
- New name: footerplum

## Structure Order (top to bottom)

1. **Content Area** — Full-viewport-height light section with centered heading "Footer #19"
2. **Footer Main** — Four-column row on purple gradient background:
   - Col 1: About heading + contact info (address, phone, email) + newsletter subscription form
   - Col 2: Latest News heading + 2 blog post cards (thumbnail + title + meta)
   - Col 3: Information heading + 5 navigation links
   - Col 4: Instagram heading + 3×2 image grid (6 thumbnails)
3. **Footer Copyright** — Full-width row with top border, copyright left, attribution right

## Section-by-Section Fidelity Notes

### Content Area
- Use `min-h-[70vh]` with `bg-gray-50` and flexbox centering
- H2 text "Footer #19" centered, w-full

### Footer Main
- Purple gradient background: `bg-gradient-to-br from-[#2a1a5e] to-[#5126a7]`
- `py-28 px-0` (7em = 28 * 0.25rem)
- Container width, 4-column grid on md+
- **Column 1 (About):**
  - Heading with circular icon: `w-10 h-10 rounded-full border border-[#fe59d7] text-[#fe59d7] flex items-center justify-center mr-2.5`
  - Heading text: `text-white text-[22px] mb-7`
  - Contact list: `text-[rgba(255,255,255,0.5)]` with inline icons (pin, phone, send)
  - Newsletter form: input with `bg-black/5 border-2 border-[#fe8ce3] text-[rgba(255,255,255,0.3)]`, submit button `bg-[#fe8ce3] text-white w-[52px] h-[52px]`
- **Column 2 (Latest News):**
  - Same heading style as Column 1
  - Blog cards: flex row with thumbnail (rounded, `w-20 h-20`) + text block
  - Card title: `text-[rgba(255,255,255,0.5)]`
  - Meta: `text-[rgba(255,255,255,0.3)]` with calendar, person, chat icons
- **Column 3 (Information):**
  - Same heading style
  - Nav links: `text-[rgba(255,255,255,0.5)] py-1 block`, hover to white
  - Items: About, Products, Blog, Contact, Help & Support
- **Column 4 (Instagram):**
  - Same heading style with Instagram icon
  - 3×2 grid: `grid grid-cols-3 gap-1`
  - Each cell: rounded placeholder image square

### Copyright Bar
- Full-width row below main content
- `border-t border-white/10 mt-5 pt-4`
- Left: "© [year] All rights reserved."
- Right: "This template is made with ♥ by Component Dock"
- Text: `text-[rgba(255,255,255,0.3)]`

### Design Tokens for Tailwind @theme

```
@theme {
  --color-brand-pink: #fe59d7;
  --color-brand-pink-light: #fe8ce3;
  --color-footer-purple-dark: #2a1a5e;
  --color-footer-purple-light: #5126a7;
  --color-footer-text-dim: rgba(255, 255, 255, 0.3);
  --color-footer-text-mid: rgba(255, 255, 255, 0.5);
  --color-footer-text-hover: rgba(255, 255, 255, 0.9);
  --color-footer-border: rgba(255, 255, 255, 0.1);
  --font-family-footer: "Poppins", sans-serif;
}
```

### Icons
- Use `lucide-react`: `MapPin`, `Phone`, `Send` (for contact), `Calendar`, `User`, `MessageCircle` (for meta), `FileText` (for Information), `Instagram` (for Instagram heading)
- Newsletter submit: `Send` icon

### Component Structure

```
apps/footerplum/
  src/
    main.tsx
    App.tsx              — ContentArea + Footer
    index.css            — Tailwind entry + @theme tokens
    components/
      ContentArea.tsx    — 70vh light section with heading
      Footer.tsx         — Composes FooterMain + FooterCopyright
      FooterMain.tsx     — Four-column purple gradient grid
      FooterAbout.tsx    — Column 1: heading + contact + newsletter
      FooterNews.tsx     — Column 2: heading + blog cards
      FooterInfo.tsx     — Column 3: heading + nav links
      FooterInstagram.tsx — Column 4: heading + image grid
      FooterCopyright.tsx — Centered copyright row
      SectionHeading.tsx — Reusable heading with circular icon
    test/
      setup.ts
```

### Footer Component Dock Attribution
- The copyright text right side must link to `https://www.componentdock.com/` as "Component Dock"
