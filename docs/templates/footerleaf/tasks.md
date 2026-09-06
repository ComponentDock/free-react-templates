# Footerleaf — Implementation Notes

Source: ColorLib Bootstrap Footer 15
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-15/
New name: footerleaf

## Section order (top to bottom)

1. **Preview content area** — centered heading "Footer #15" on light background
2. **Footer header row** — logo "Footerleaf" + subtitle + social icons (Twitter, Facebook, Instagram)
3. **Footer content — 4 columns:**
   - Column 1: Contact heading, address/phone/email with ionicons, subscribe form
   - Column 2: Latest News heading, 2 blog post cards (image + title + meta)
   - Column 3: Best Sellers heading, 1 product card (image + title + star rating)
   - Column 4: Instagram heading, 3x2 photo grid
4. **Copyright bar** — border-top separator, copyright text + Component Dock link

## Fidelity notes

### Header row
- Logo "Footerleaf" in white 28px, subtitle "Free Templates" in pale yellow 14px
- Social icons: 3 icons in a list, each with 1px solid #81ba4c border, pale yellow icon color
- Background: #68983b olive green

### Contact + Subscribe column
- Heading "Contact" in white 20px
- 3 info items with ionicons: address (pin), phone, email
- Info text: rgba(255,255,255,0.5)
- Subscribe form: email input with rgba(0,0,0,0.05) bg, 2px solid #81ba4c border
- Submit button: #81ba4c bg, white icon, 52px wide, square (radius 0)

### Latest News column
- 2 blog post cards with thumbnail images (use picsum.photos placeholders)
- Title links in pale yellow (#fff8a1)
- Meta: date, author, comment count in rgba(255,255,255,0.5)
- Cards use flex layout (image left, text right)

### Best Sellers column
- 1 product card with rounded image (4px radius)
- Product title
- 5-star rating in amber (#f7b633) using ionicons star

### Instagram grid
- 3x2 grid of square images (no border-radius)
- Use picsum.photos placeholders

### Copyright bar
- Border-top in #75aa42
- Left: "Copyright © [year] All rights reserved."
- Right: "This template is made with ❤ by Component Dock" linking to componentdock.com

## Key colors reference

- Background: #68983b (olive green)
- Border: #75aa42 (lighter green)
- Accent links: #fff8a1 (pale yellow)
- Social border: #81ba4c (medium green)
- Submit button: #81ba4c
- Stars: #f7b633 (amber)
- Text: rgba(255,255,255,0.5)

## Implementation tasks

- [ ] Create `apps/footerleaf/` from simplest existing app template
- [ ] Set up package.json, vite.config.ts, index.html
- [ ] Implement Footerleaf.tsx with all sections
- [ ] Write tests for each section
- [ ] Verify 100% coverage
- [ ] Add public/CNAME with `footerleaf.free.componentdock.com`
- [ ] Set homepage in package.json
- [ ] Run `npm install` at repo root for lockfile
- [ ] Run `npm run spec:validate`
