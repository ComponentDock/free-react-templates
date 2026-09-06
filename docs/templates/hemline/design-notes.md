# Hemline — Task Outline & Design Notes

## Source

- ColorLib: Bootstrap Footer 11
- URL: https://colorlib.com/wp/template/bootstrap-footer-11/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-11/
- New name: hemline

## Structure Order (top to bottom)

1. **Content Area** — Light gray section with centered heading "Footer #11"
2. **Footer Main** — Four-column row on dark navy background:
   - Col 1: Brand heading + description paragraph + social icons
   - Col 2: Recent posts (2 blog cards with thumbnails)
   - Col 3: Quick Links (6 vertical nav links)
   - Col 4: Contact info (address, phone, email with icons)
3. **Footer Copyright** — Full-width centered row with copyright text

## Section-by-Section Fidelity Notes

### Content Area
- Use `min-h-[12em]` (or `py-48` for ~12em) with `bg-[#f8f8f8]` and flexbox centering
- H2 text "Footer #11" centered, `font-weight: 400`

### Footer Main
- `bg-[#0d1824] text-white/60 py-28 px-0` (7em = 28 * 0.25rem)
- Container width, 4-column grid on `md:` breakpoint
- **Column 1 (Brand):**
  - Heading `<h2>`: `text-white text-lg mb-8 relative` with a `::after` pseudo-element for the purple underline
  - Description `<p>`: `text-white/60` with placeholder lorem ipsum text
  - Social icons: flex row, each icon circular purple bg (40x40px, rounded-full, bg-[#7f72e4] text-white)
  - Use lucide-react: `Twitter`, `Facebook`, `Instagram` icons

- **Column 2 (Recent Posts):**
  - Heading with same purple underline pattern
  - 2 blog cards, each flex row: 80x80 rounded thumbnail + text area
  - Heading: `text-base font-normal text-white/70 leading-relaxed`
  - Meta: `text-xs text-[#7f72e4]` for links, inline display

- **Column 3 (Quick Links):**
  - Heading with purple underline
  - `<ul>` list, each `<li>` `py-2 block`
  - Links: `text-white/70 hover:text-[#7f72e4] transition-colors`
  - Items: Home, About, Services, Works, Blog, Contact

- **Column 4 (Contact):**
  - Heading with purple underline
  - `<ul>` with table display for icon + text
  - Icons: `text-white/40 text-lg w-10`
  - Text: `text-white/60`
  - Items: address, phone number, email

### Blob Decoration
- Use an inline SVG blob shape (or generate one with CSS/SVG)
- Position absolute, top-left area, ~5% opacity
- z-index behind footer content

### Copyright Bar
- Full-width centered row below the main content
- `mt-5 pt-5 text-center`
- `<p>` with copyright text, color `#999999`

### Design Tokens for Tailwind @theme

```
@theme {
  --color-brand-accent: #7f72e4;
  --color-footer-navy-bg: #0d1824;
  --color-footer-text: rgba(255, 255, 255, 0.6);
  --color-footer-nav-link: rgba(255, 255, 255, 0.7);
  --color-footer-icon-muted: rgba(255, 255, 255, 0.4);
  --color-footer-copyright: #999999;
  --color-content-section-bg: #f8f8f8;
  --font-family-footer: "Poppins", sans-serif;
}
```

### Icons
- Use `lucide-react`: `Twitter`, `Facebook`, `Instagram` for social
- Use `lucide-react`: `MapPin`, `Phone`, `Mail` for contact info

### Component Structure

```
apps/hemline/
  src/
    main.tsx
    App.tsx              — ContentArea + Footer
    index.css            — Tailwind entry + @theme tokens
    components/
      ContentArea.tsx    — Light section with heading
      Footer.tsx         — Composes FooterMain + FooterCopyright
      FooterMain.tsx     — Four-column dark grid
      FooterColumn1.tsx  — Brand + description + social
      FooterColumn2.tsx  — Recent posts
      FooterColumn3.tsx  — Quick links
      FooterColumn4.tsx  — Contact info
      FooterCopyright.tsx — Centered copyright row
      SocialIcons.tsx    — Reusable horizontal circular icon list
      BlogCard.tsx       — Thumbnail + text blog post card
    test/
      setup.ts
```

### Footer Component Dock Attribution
- The copyright text or an additional line must link to `https://www.componentdock.com/` as "Component Dock"

### Assets (do NOT copy from ColorLib)
- Blob SVG: generate inline or use a simple SVG blob shape
- Blog thumbnails: use `https://picsum.photos/seed/hemline-<n>/80/80`
- Social/contact icons: lucide-react
- Font: Poppins via Google Fonts `<link>` in index.html
