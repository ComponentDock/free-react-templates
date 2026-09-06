# FooterDusk — Task Outline & Design Notes

## Source

- ColorLib: Bootstrap Footer 12
- URL: https://colorlib.com/wp/template/bootstrap-footer-12/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-12/
- New name: footerdusk

## Structure Order (top to bottom)

1. **Content Area** — Light gray section with centered heading "Footer #12"
2. **Subscribe Form** — White pill-shaped floating form (negative margin, overlaps footer top)
3. **Footer Main** — Two-column layout on dark charcoal background:
   - Left (col-md-4 col-lg-5): Brand heading + description + "read more" link
   - Right (col-md-8 col-lg-7): 4 link columns (Discover, About, Resources, Social) separated by subtle left borders
4. **Partner Bar** — Horizontal row: "Our Partner:" heading + 6 company links + "See All" link
5. **Copyright Row** — Split: copyright text left, Terms/Privacy/Compliances links right

## Section-by-Section Fidelity Notes

### Content Area
- Use `min-h-[12em]` (or `py-48` for ~12em) with `bg-[#f8f8f8]` and flexbox centering
- H2 text "Footer #12" centered, `font-weight: 400`

### Subscribe Form
- Position: `relative` with `mt-[-105px]` (negative margin to float above footer)
- Center the form in a `col-10 col-lg-6` column
- Form container: `bg-white rounded-[40px] shadow-[0px_-12px_21px_-15px_rgba(0,0,0,0.1)]`
- Inner flex row: input (flex-1, transparent bg, no border) + submit button
- Submit button: `bg-[#bfa88e] text-white w-[150px] h-[14px] rounded-[40px] text-sm uppercase font-medium`
- Placeholder text: `rgba(0,0,0,0.3)`

### Footer Main
- `bg-[#131719] text-white/30 py-20 px-0` (5em = 20 * 0.25rem)
- Container width

- **Left Column (Brand):**
  - Brand heading: `text-white text-lg uppercase mb-5` — use a link styled as logo
  - Description: `text-white/30` with placeholder lorem ipsum text
  - "read more" link: `text-[#bba387]` with lucide-react `ArrowRight` icon

- **Right Column (4 Link Columns):**
  - Each column: `col-md-3 mb-md-0 mb-4 border-l border-white/5`
  - Heading: `text-[rgba(255,255,255,0.9)] text-lg mb-5`
  - Links: `text-white/40 py-1 block hover:text-white transition-colors`
  - Columns: Discover (Buy & Sell, Merchant, Giving back, Help & Support), About (Staff, Team, Careers, Blog), Resources (Security, Global, Charts, Privacy), Social (Facebook, Twitter, Instagram, Googleplus)

### Partner Bar
- `mt-5 border-t border-b border-white/5 py-4`
- Row with 3 parts: "Our Partner:" heading (col), company links (col-md-9), "See All" (col text-right)
- Heading: `text-sm text-white/40`
- Company names: `text-xs uppercase text-white/40 mr-2.5` with lucide-react `Hexagon` icon in white
- "See All" link: `text-sm text-[#bba387]` with `ArrowRight` icon

### Copyright Row
- `mt-5` row, left: copyright text, right: terms links
- Copyright: `text-sm text-white/40` — "© [year] All rights reserved"
- Terms links: `text-[#bba387] mr-3 md:mr-3` — Terms, Privacy, Compliances
- Right side: `text-right` on desktop

### Design Tokens for Tailwind @theme

```
@theme {
  --color-brand-accent: #bba387;
  --color-brand-submit: #bfa88e;
  --color-footer-charcoal-bg: #131719;
  --color-footer-text: rgba(255, 255, 255, 0.3);
  --color-footer-heading: rgba(255, 255, 255, 0.9);
  --color-footer-nav-link: rgba(255, 255, 255, 0.4);
  --color-footer-nav-link-hover: #ffffff;
  --color-footer-copyright: rgba(255, 255, 255, 0.4);
  --color-footer-border: rgba(255, 255, 255, 0.05);
  --color-content-section-bg: #f8f8f8;
  --font-family-footer: "Poppins", sans-serif;
}
```

### Icons
- Use `lucide-react`: `ArrowRight` for "read more" and "See All" links
- Use `lucide-react`: `Hexagon` (or similar) for partner company icons
- No social media icons needed (Social column is text links only)

### Component Structure

```
apps/footerdusk/
  src/
    main.tsx
    App.tsx              — ContentArea + SubscribeForm + Footer
    index.css            — Tailwind entry + @theme tokens
    components/
      ContentArea.tsx    — Light section with heading
      SubscribeForm.tsx  — Floating pill-shaped form
      Footer.tsx         — Composes FooterMain + PartnerBar + FooterCopyright
      FooterMain.tsx     — Two-column grid: brand + link columns
      BrandColumn.tsx    — Logo heading + description + read more
      LinkColumn.tsx     — Reusable heading + list of links
      PartnerBar.tsx     — Horizontal partner section
      FooterCopyright.tsx — Split copyright + terms row
    test/
      setup.ts
```

### Footer Component Dock Attribution
- The copyright text or an additional line must link to `https://www.componentdock.com/` as "Component Dock"

### Assets (do NOT copy from ColorLib)
- Partner icons: use lucide-react generic icons (e.g. `Hexagon`, `Building2`)
- Font: Poppins via Google Fonts `<link>` in index.html
- No images needed (no thumbnails, no blog cards)

### Implementation Notes
- The subscribe form's negative margin (-105px) is critical for the floating effect — it must be positioned inside the footer element but visually overlap the content area above
- The 4 link columns use `border-left` with very subtle opacity (5% white) — use Tailwind's `border-l border-white/5`
- The partner section uses `border-t` and `border-b` with the same subtle opacity
- On mobile, the subscribe form should remain at full width with `col-10 col-lg-6 mx-auto`
