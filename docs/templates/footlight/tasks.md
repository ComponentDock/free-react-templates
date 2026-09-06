# Footlight — Design Notes & Task Outline

## Source
- ColorLib: Bootstrap Footer 09
- URL: https://colorlib.com/wp/template/bootstrap-footer-09/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-09/
- Category: Footer (minimalist, centered, light-themed)

## Replication Research Notes

### Reference Sources
- **Preview DOM:** Fetched from `https://preview.colorlib.com/theme/bft/bootstrap-footer-09/`
  - Note: the initial slug `bootstrap-footer-09` without `bft/` returned 404; correct
    path includes the `bft/` prefix.
- **CSS tokens:** Extracted from `css/style.css` served at the preview URL.
- **Screenshot:** The AVIF image at colorlib.com showed a minimal centered footer on white bg.

### Design Observations from Reference
1. **Structure:** Single centered column, no grid. Everything is `text-center` within
   a `col-md-9` Bootstrap column.
2. **Content order (top to bottom):**
   - Brand logo text ("Colorlib" → "Footlight" in our version)
   - Inline nav links (7 items: About, Services, Press, Careers, FAQ, Legal, Contact)
   - "Stay in touch" heading + 5 colored social icons
   - Copyright paragraph
3. **Color palette:**
   - Footer bg: white (#ffffff)
   - Primary/accent: #4200ff (vivid blue-purple) — used on logo + link hover
   - Text: #000000 (nav links, social heading)
   - Social icons: each has a unique brand color (Instagram pink, Facebook blue, etc.)
   - Copyright: #999999
4. **Typography:**
   - Body: Roboto (for the preview content wrapper)
   - Footer: Poppins, sans-serif (for the actual footer section)
   - Logo: 2rem, weight 900
   - Social heading: 18px, bold
5. **Spacing:**
   - Footer: 7rem vertical padding
   - Nav links: 10px padding each (inline)
   - Social icons: 10px padding each (inline)
6. **Interactions:**
   - All `<a>` tags: 0.3s ease transition
   - Nav link hover: color → #4200ff

### Differences from Source
- Name changed from "Colorlib" to "Footlight"
- Copyright changed to "Component Dock"
- Social icons will use lucide-react equivalents (Instagram, Facebook, Twitter, Pinterest, Dribbble)
- Placeholder content images not needed (footer-only template)

## Tasks

### Phase 1: Scaffold
- [ ] Create `apps/footlight/` from the simplest existing footer app
- [ ] Rename package to `@free-react-templates/footlight`
- [ ] Create `public/CNAME` with `footlight.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Run `npm install` at repo root for lockfile registration

### Phase 2: Implementation
- [ ] Create `src/components/Footer.tsx` — the main footer component
  - Brand logo text in Poppins, 2rem, #4200ff
  - 7 inline nav links (About, Services, Press, Careers, FAQ, Legal, Contact)
  - "Stay in touch" heading + 5 social icons with individual brand colors
  - Copyright line with Component Dock link
- [ ] Create `src/App.tsx` — compose preview area + Footer
- [ ] Set up `src/index.css` with Tailwind + theme tokens
- [ ] Configure `vite.config.ts` with `injectUiSource()`

### Phase 3: Testing
- [ ] Write `Footer.test.tsx` with 100% coverage
  - Test: footer renders with correct structure
  - Test: logo text and link
  - Test: all 7 nav links present
  - Test: social icons with correct colors
  - Test: copyright text and Component Dock link
  - Test: responsive behavior
- [ ] Run `npm run test:coverage` — verify 100%

### Phase 4: Verification
- [ ] Run `scripts/verify-app.sh footlight` (typecheck + lint + knip + fallow + tests + build)
- [ ] Visual comparison with preview reference
- [ ] Confirm no ColorLib references in app code
- [ ] Confirm footer links to componentdock.com

### Phase 5: Ship
- [ ] Commit as `feat: add Footlight (ColorLib Bootstrap Footer 09)`
- [ ] Open PR, merge, delete branch
- [ ] Update TEMPLATES.md: `- [ ]` → `[~]` → `[x]` with Surge URL
- [ ] Run `npm run readme:status`
